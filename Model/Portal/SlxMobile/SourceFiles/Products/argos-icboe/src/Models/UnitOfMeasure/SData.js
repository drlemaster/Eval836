import declare from 'dojo/_base/declare';
import Base from './Base';
import _SDataModelBase from 'argos/Models/_SDataModelBase';
import Manager from 'argos/Models/Manager';
import MODEL_TYPES from 'argos/Models/Types';
import MODEL_NAMES from '../Names';

const __class = declare('icboe.Models.UnitOfMeasure.SData', [Base, _SDataModelBase], {
  id: 'unitofmeasure_sdata_model',
  createQueryModels: function createQueryModels() {
    return [{
      name: 'list',
      queryOrderBy: 'Name',
      querySelect: [
        'Name',
        'Product/*',
      ],
    }, {
      name: 'detail',
      querySelect: [
        'Name',
        'Product/*',
      ],
    },
    ];
  },
});

Manager.register(MODEL_NAMES.UNITOFMEASURE, MODEL_TYPES.SDATA, __class);
export default __class;
