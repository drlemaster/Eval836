import declare from 'dojo/_base/declare';
import string from 'dojo/string';
import List from 'argos/List';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';
import PricingAvailabilityService from '../../PricingAvailabilityService';

const resource = getResource('locationsPricingAvailabilityList');

const __class = declare('icboe.Views.Locations.PricingAvailabilityList', [List], {
  // Templates
  itemTemplate: new Simplate([
    '<h4><label class="group-label">{%: $$.warehouseText %}: </label>{%: $.SlxLocation %}</h4>',
    '<h3><label class="group-label">{%: $$.availableToPromiseDateText %}: </label>{%: $.ATPDate %}</h3>',
    '<h3><label class="group-label">{%: $$.availableText %}: </label>{%: $.AvailableQuantity %}</h3>',
    '<h4>{%: $.UnitOfMeasure %}</h4>',
  ]),

  // Localization
  titleText: resource.titleText,
  warehouseText: resource.warehouseText,
  availableText: resource.availableText,
  availableToPromiseDateText: resource.availableToPromiseDateText,

  // View Properties
  id: 'locations_pricingAvailabilityList',
  detailView: '',
  modelName: MODEL_NAMES.LOCATION,
  queryWhere: 'LocationType eq "Warehouse"',
  resourceKind: 'slxLocations',
  enableActions: false,
  expose: false,
  pricingAvailabilityResult: null,
  requestType: null,
  entityType: null,
  parentEntity: null,
  selectionOnly: true,
  allowEmptySelection: false,
  continuousScrolling: false,
  simpleMode: true,
  negateHistory: true,
  pageSize: 500,

  // Card layout
  itemIconClass: '',

  // Metrics
  entityName: 'Location',

  createToolLayout: function createToolLayout() {
    return this.tools || (this.tools = {
      'tbar': [{
        id: 'complete',
        cls: 'invisible',
        fn: this.onSelectWarehouse,
        scope: this,
      }, {
        id: 'cancel',
        side: 'left',
        cls: 'fa fa-ban fa-fw fa-lg',
        fn: ReUI.back,
        scope: ReUI,
      },
      ]});
  },
  handleAvailabilityResult: function handleAvailabilityResult(result) {
    const warehouses = [];
    if (result) {
      for (let i = 0; i < result.Children.length; i++) {
        const product = result.Children[i];
        const entity = {};
        for (const key in product.Properties) {
          if (key !== 'ProductCode') {
            if (key.indexOf('.') > 0 && key.indexOf('ErpExtId') > 0) {
              const propName = key.split('.');
              const extId = product.Properties[key].split('#');
              entity[propName[0]] = extId[0];
              entity[propName[0] + 'ID'] = extId[1];
            } else {
              entity[key] = product.Properties[key];
            }
          }
        }
        entity.$key = entity.SlxLocation;
        warehouses.push(entity);
      }
    }
    return warehouses;
  },
  onSelectWarehouse: function onSelectWarehouse() {
    const selections = this.get('selectionModel').getSelections();
    let selection = null;
    if (this.options.singleSelect) {
      for (const selectionKey in selections) {
        if (selections.hasOwnProperty(selectionKey)) {
          selection = selections[selectionKey].data;
          break;
        }
      }
    }
    PricingAvailabilityService.onUpdateItemWithWarehouse(selection, this.entityType, this)
      .then(() => {
        ReUI.back();
      });
  },
  onTransitionAway: function onTransitionAway() {
    this.refreshRequired = true;
    this.inherited(arguments);
  },
  requestData: function requestData() {
    if (this.options && this.options.selected && this.entityType && this.parentEntity) {
      if (!this.options.context) {
        this.options.context = {};
      }
      this.options.context[this.parentEntity] = this.options.selected[this.parentEntity];
      this.options.context[this.entityType] = this.options.selected;
      PricingAvailabilityService.onCheckPricingAndAvailability(this.options.selected,
        this.requestType,
        this).then((result) => {
          const entries = this.handleAvailabilityResult(result);
          this._onQueryComplete({ total: entries.length ? entries.length : 0 }, entries);
        }, () => {
          this._onQueryComplete({ total: 0 }, []);
        });
    }
  },
  formatSearchQuery: function formatSearchQuery(searchQuery) {
    return string.substitute('upper(Description) like "${0}%"', [this.escapeSearchQuery(searchQuery.toUpperCase())]);
  },
});

export default __class;
