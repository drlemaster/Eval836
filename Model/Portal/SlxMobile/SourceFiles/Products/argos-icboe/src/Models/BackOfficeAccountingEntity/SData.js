import declare from 'dojo/_base/declare';
import Base from './Base';
import _SDataModelBase from 'argos/Models/_SDataModelBase';
import Manager from 'argos/Models/Manager';
import MODEL_TYPES from 'argos/Models/Types';
import MODEL_NAMES from '../Names';

const __class = declare('icboe.Models.BackOfficeAccountingEntity.SData', [Base, _SDataModelBase], {
  id: 'backofficeaccountingentity_sdata_model',
  createQueryModels: function createQueryModels() {
    return [{
      name: 'list',
      queryOrderBy: 'Name',
      querySelect: [
        'Name',
        'AcctEntityExtId',
        'BackOffice/*',
      ],
    }, {
      name: 'detail',
      querySelect: [
        'Name',
        'AcctEntityExtId',
        'BackOffice/*',
      ],
    }];
  },
});

Manager.register(MODEL_NAMES.BACKOFFICEACCOUNTINGENTITY, MODEL_TYPES.SDATA, __class);
export default __class;
