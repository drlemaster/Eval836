import declare from 'dojo/_base/declare';
import Base from './Base';
import _SDataModelBase from 'argos/Models/_SDataModelBase';
import Manager from 'argos/Models/Manager';
import MODEL_TYPES from 'argos/Models/Types';
import MODEL_NAMES from '../Names';

const __class = declare('icboe.Models.ErpReceivable.SData', [Base, _SDataModelBase], {
  id: 'erpreceivable_sdata_model',
  createQueryModels: function createQueryModels() {
    return [{
      name: 'list',
      queryOrderBy: 'CreateDate desc',
      querySelect: [
        'ErpExtId',
        'Account/AccountName',
        'ErpInvoice/InvoiceNumber',
        'ReceivedAmount',
        'ErpStatus',
        'ErpStatusDate',
        'CreateDate',
        'CurrencyCode',
      ],
    }, {
      name: 'detail',
      querySelect: [
        'ErpExtId',
        'Account/AccountName',
        'ErpInvoiceNumber',
        'ReceivableAmount',
        'ReceivedAmount',
        'ErpStatus',
        'ErpStatusDate',
        'ErpPaymentTermId',
        'ErpBillTo/Name',
        'ErpBillTo/Address/*',
        'ErpShipTo/Name',
        'ErpShipTo/Address/*',
        'ErpPayFrom/Address/*',
        'CreateDate',
        'CurrencyCode',
      ],
    },
    ];
  },
});

Manager.register(MODEL_NAMES.ERPRECEIVABLE, MODEL_TYPES.SDATA, __class);
export default __class;
