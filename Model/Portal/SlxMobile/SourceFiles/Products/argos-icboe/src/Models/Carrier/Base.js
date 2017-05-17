import declare from 'dojo/_base/declare';
import _ModelBase from 'argos/Models/_ModelBase';
import MODEL_NAMES from '../Names';
import getResource from 'argos/I18n';

const resource = getResource('carrierModel');

const __class = declare('icboe.Models.Carrier.Base', [_ModelBase], {
  contractName: 'dynamic',
  resourceKind: 'carriers',
  entityName: 'Carrier',
  entityDisplayName: resource.entityDisplayName,
  entityDisplayNamePlural: resource.entityDisplayNamePlural,
  modelName: MODEL_NAMES.CARRIER,
  iconClass: 'fa fa-building-o fa-2x',
  detailViewId: '',
  listViewId: 'carriers_list',
  editViewId: '',
  createRelationships: function createRelationships() {
    let rel;
    rel = this.relationships || (this.relationships = []);
    return rel;
  },
});
export default __class;
