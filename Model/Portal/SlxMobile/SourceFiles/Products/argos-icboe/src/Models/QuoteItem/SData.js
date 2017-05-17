import declare from 'dojo/_base/declare';
import Base from './Base';
import _SDataModelBase from 'argos/Models/_SDataModelBase';
import Manager from 'argos/Models/Manager';
import MODEL_TYPES from 'argos/Models/Types';
import MODEL_NAMES from '../Names';

const __class = declare('icboe.Models.QuoteItem.SData', [Base, _SDataModelBase], {
  id: 'quoteitem_sdata_model',
  createQueryModels: function createQueryModels() {
    return [{
      name: 'list',
      queryOrderBy: 'ErpLineNumber',
      querySelect: [
        'Description',
        'ErpLineNumber',
        'ErpLineTotalAmount',
        'ErpStatus',
        'ErpStatusDate',
        'Quantity',
        'Price',
        'ExtendedPrice',
        'DocExtendedPrice',
        'CalculatedPrice',
        'DocCalculatedPrice',
        'ErpUnitPrice',
        'ProductName',
        'CreateDate',
        'ModifyDate',
        'Quote/ErpLogicalId',
        'Quote/QuoteNumber',
        'Quote/CurrencyCode',
        'SlxLocation/Description',
      ],
    }, {
      name: 'detail',
      querySelect: [
        'Description',
        'ErpLineNumber',
        'ExtendedPrice',
        'ActualId',
        'Discount',
        'CalculatedPrice',
        'Status',
        'Quantity',
        'Price',
        'ExtendedPrice',
        'DocExtendedPrice',
        'CalculatedPrice',
        'DocCalculatedPrice',
        'ProductName',
        'CreateDate',
        'ModifyDate',
        'Quote/QuoteNumber',
        'OpenQuantity',
        'DropShip',
        'FixedPrice',
        'RushRequest',
        'Quote/CurrencyCode',
        'Product/*',
        'UnitOfMeasure/*',
        'SlxLocation/*',
      ],
    }, {
      name: 'edit',
      querySelect: [
        'Description',
        'ExtendedPrice',
        'ActualId',
        'Discount',
        'CalculatedPrice',
        'Status',
        'Quantity',
        'Price',
        'ExtendedPrice',
        'DocExtendedPrice',
        'CalculatedPrice',
        'DocCalculatedPrice',
        'ProductName',
        'CreateDate',
        'ModifyDate',
        'Quote/QuoteNumber',
        'OpenQuantity',
        'DropShip',
        'FixedPrice',
        'RushRequest',
        'Quote/CurrencyCode',
        'Product/*',
        'UnitOfMeasure/*',
        'SlxLocation/*',
        ],
    },
  ];
  },
});

Manager.register(MODEL_NAMES.QUOTEITEM, MODEL_TYPES.SDATA, __class);
export default __class;
