Sage.namespace("Sage.UI.Forms");
Sage.UI.Forms.AddEditTask = {
    _workSpace: {},
    init: function (workSpace) {
        this._workSpace = workSpace;
    },
    onAssignToTypeChange: function () {
        var assignTo = document.getElementsByName(this._workSpace.assignToID);
        if (assignTo) {
            var index = 0;
            for (var j = 0; j < assignTo.length; j++) {
                if (assignTo[j].checked) {
                    index = assignTo[j].value;
                }
            }
            this.setAssignTo(index);
            this.setOwnerType(index);
        }
    },
    setAssignTo: function (ownerType) {
        this.showControl(this._workSpace.opt0ID, (ownerType == 0));
        this.showControl(this._workSpace.opt1ID, (ownerType == 1));
        this.showControl(this._workSpace.opt2ID, (ownerType == 2));
        this.showControl(this._workSpace.opt3ID, (ownerType == 3));
        this.showControl(this._workSpace.opt4ID, (ownerType == 4));
    },
    setOwnerType: function (ownerType) {
        var ctrl = dojo.byId(this._workSpace.ownerTypeID);
        if (ctrl != null) {
            ctrl.value = ownerType;
        };
    },
    showControl: function (ctrlId, show) {
        var ctrl = dojo.byId(ctrlId);
        if (ctrl != null) {
            if (show) {
                ctrl.style.display = 'block';
            }
            else {
                ctrl.style.display = 'none';
            }
        }
    }
};
if (typeof Sys !== 'undefined')
    Sys.Application.notifyScriptLoaded();