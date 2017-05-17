import lang from 'dojo/_base/lang';
import ErrorManager from 'argos/ErrorManager';

const __class = lang.setObject('icboe.PicklistService', {
  _picklists: {},
  _viewMapping: {},
  _createPicklistPromise: function createPicklistPromise(key, options) {
    const promise = new Promise((resolve, reject) => {
      const request = new Sage.SData.Client.SDataSingleResourceRequest(App.getService())
        .setResourceKind('picklists')
        .setContractName('system')
        .setResourceSelector(`"${key}"`)
        .setQueryArg('include', 'items');

      request.allowCacheUse = true;
      request.read({
        success: (picklist) => {
          // Remove $resources object for direct map to items
          picklist.items = picklist.items.$resources;
          this._picklists[picklist.$key] = picklist;
          resolve(true);
        },
        failure: (response, o) => {
          ErrorManager.addError(response, o, options, 'failure');
          reject(response);
        },
    });
    });

    return promise;
  },
  getPicklistByKey: function getPicklistByKey(key) {
    return this._picklists[key];
  },
  getPicklistByName: function getPicklistByName(name) {
    const iterableKeys = Object.keys(this._picklists);
    for (let i = 0; i < iterableKeys.length; i++) {
      if (this._picklists[iterableKeys[i]].name === name) {
        return this._picklists[iterableKeys[i]];
      }
    }
    return false;
  },
  getViewPicklists: function getViewPicklists(viewId) {
    const picklistIds = this._viewMapping[viewId];
    const picklists = [];
    if (picklistIds && picklistIds.length) {
      for (let i = 0; i < picklistIds.length; i++) {
        if (this._picklists[picklistIds[i]]) {
          picklists.push(this._picklists[picklistIds[i]]);
        } else {
          console.warn('Picklist "' + picklistIds[i] + '" has not been registered'); // eslint-disable-line
        }
      }
      return picklists;
    }
    return null;
  },
  registerPicklist: function registerPicklist(key, picklist) {
    if (!this._picklists[key]) {
      this._picklists[key] = picklist;
    }
  },
  registerPicklistToView: function registerPicklistToView(key, viewId) {
    if (!this._viewMapping[viewId]) {
      this._viewMapping[viewId] = [];
    }
    if (!this._viewMapping[viewId][key]) {
      this._viewMapping[viewId].push(key);
    } else {
      console.log('Picklist already exists for view "' + viewId + '"'); // eslint-disable-line
    }
    this.registerPicklist(key, true);
  },
  // Will request the registered picklists in this._picklists
  requestPicklists: function requestPicklists() {
    const promise = new Promise((resolve, reject) => {
      const iterableKeys = Object.keys(this._picklists);
      const promises = [];
      for (let i = 0; i < iterableKeys.length; i++) {
        promises.push(this._createPicklistPromise(iterableKeys[i]));
      }
      Promise.all(promises).then(() => {
        resolve(true);
      }, (response) => {
        reject(response);
      });
    });
    return promise;
  },
});

export default __class;
