import declare from 'dojo/_base/declare';
import Base from './Base';
import _SDataModelBase from 'argos/Models/_SDataModelBase';
import Manager from 'argos/Models/Manager';
import MODEL_TYPES from 'argos/Models/Types';
import MODEL_NAMES from '../Names';

const __class = declare('icboe.Models.Quotes.SData', [Base, _SDataModelBase], {
  id: 'quote_sdata_model',
  createQueryModels: function createQueryModels() {
    return [{
      name: 'list',
      queryOrderBy: 'CreateDate desc',
      querySelect: [
        'QuoteNumber',
        'ErpExtId',
        'Account/AccountName',
        'GrandTotal',
        'CreateDate',
        'ModifyDate',
        'CurrencyCode',
      ],
    }, {
      name: 'detail',
      querySelect: [
        'QuoteNumber',
        'ErpExtId',
        'Account/AccountName',
        'Account/AccountManager/*',
        'Account/ErpExtId',
        'Opportunity/Description',
        'GrandTotal',
        'CreateDate',
        'ModifyDate',
        'Status',
        'ShipTo/Name',
        'ShipTo/Address/*',
        'BillTo/Name',
        'BillTo/Address/*',
        'PayFrom/Address/*',
        'CurrencyCode',
        'Total',
        'DocTotal',
        'DocGrandTotal',
        'RequestedBy/NameLF',
        'ExpectedDeliveryDate',
        'Comments',
        'Type',
        'DropShip',
        'ShipEarly',
        'PartialShip',
        'AccountManager/*',
        'CustomerRFQNumber',
        'SalesOrder/*',
        'BillingContact/Address/*',
        'ShippingContact/Address/*',
        'ExchangeRate',
        'ErpLogicalId',
        'ErpAccountingEntityId',
        'SyncStatus',
        'ErpLocation',
        'Warehouse/Address/*',
        'Warehouse/Description',
        'Location/Address/*',
        'Location/Description',
        'Carrier/CarrierName',
        'QuoteItems/*',
      ],
    }, {
      name: 'edit',
      querySelect: [
        'QuoteNumber',
        'ErpExtId',
        'Account/AccountName',
        'Account/AccountManager/*',
        'Account/ErpExtId',
        'Opportunity/Description',
        'GrandTotal',
        'CreateDate',
        'ModifyDate',
        'Status',
        'ShipTo/Address/*',
        'BillTo/Address/*',
        'PayFrom/Address/*',
        'CurrencyCode',
        'Total',
        'RequestedBy/NameLF',
        'ExpectedDeliveryDate',
        'Comments',
        'Type',
        'DropShip',
        'ShipEarly',
        'PartialShip',
        'AccountManager/*',
        'CustomerRFQNumber',
        'BillingContact/Address/*',
        'ShippingContact/Address/*',
        'ErpLogicalId',
        'ErpAccountingEntityId',
        'ErpLocation',
        'Warehouse/*',
        'Location/*',
        'Carrier/*',
      ],
    }];
  },
});

Manager.register(MODEL_NAMES.QUOTE, MODEL_TYPES.SDATA, __class);
export default __class;