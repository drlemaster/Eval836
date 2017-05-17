import declare from 'dojo/_base/declare';
import Base from './Base';
import _SDataModelBase from 'argos/Models/_SDataModelBase';
import Manager from 'argos/Models/Manager';
import MODEL_TYPES from 'argos/Models/Types';
import MODEL_NAMES from '../Names';

const __class = declare('icboe.Models.ErpShipment.SData', [Base, _SDataModelBase], {
  id: 'erpshipment_sdata_model',
  createQueryModels: function createQueryModels() {
    return [{
      name: 'list',
      queryOrderBy: 'CreateDate desc',
      querySelect: [
        'ErpExtId',
        'ErpShipTo/Name',
        'ErpStatus',
        'ErpCarrierParty',
        'ErpDeclaredValue',
        'DatePromised',
        'ErpActualShipDate',
        'ErpActualDeliveryDate',
        'ErpPartialShipAllowed',
        'Account/AccountName',
        'CreateDate',
      ],
    }, {
      name: 'detail',
      querySelect: [
        'ErpExtId',
        'Account/AccountName',
        'DatePromised',
        'ErpActualShipDate',
        'ErpActualDeliveryDate',
        'ErpCarrierParty',
        'ErpStatus',
        'ErpStatusDate',
        'SlxLocation/Name',
        'ErpPartialShipAllowed',
        'ErpGrossWeight',
        'ErpGrossWeightUnit',
        'ErpDeclaredValue',
        'ShipmentTotalAmount',
        'ErpIncoTerm',
        'ErpShipTo/Name',
        'ErpShipTo/Address/*',
        'CurrencyCode',
      ],
    },
    ];
  },
});

Manager.register(MODEL_NAMES.ERPSHIPMENT, MODEL_TYPES.SDATA, __class);
export default __class;
