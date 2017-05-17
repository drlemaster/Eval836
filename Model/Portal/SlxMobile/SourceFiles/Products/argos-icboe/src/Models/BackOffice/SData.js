import declare from 'dojo/_base/declare';
import Base from './Base';
import _SDataModelBase from 'argos/Models/_SDataModelBase';
import Manager from 'argos/Models/Manager';
import MODEL_TYPES from 'argos/Models/Types';
import MODEL_NAMES from '../Names';

const __class = declare('icboe.Models.BackOffice.SData', [Base, _SDataModelBase], {
  id: 'backoffice_sdata_model',
  createQueryModels: function createQueryModels() {
    return [{
      name: 'list',
      queryOrderBy: 'BackOfficeName',
      querySelect: [
        'BackOfficeName',
        'BackOfficeAccountingEntities/*',
        'Integration/*',
        'IsActive',
        'LogicalId',
        'CountryCodeFormat',
        'Version',
      ],
    }, {
      name: 'detail',
      querySelect: [
        'BackOfficeName',
        'BackOfficeAccountingEntities/*',
        'Integration/*',
        'IsActive',
        'LogicalId',
        'CountryCodeFormat',
        'Version',
      ],
    }, {
      name: 'list-active',
      queryOrderBy: 'BackOfficeName',
      queryWhere: 'IsActive eq true',
      querySelect: [
        'BackOfficeName',
        'Integration/*',
        'IsActive',
        'LogicalId',
        'CountryCodeFormat',
        'Version',
      ],
    }];
  },
});

Manager.register(MODEL_NAMES.BACKOFFICE, MODEL_TYPES.SDATA, __class);
export default __class;
