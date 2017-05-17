/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define(['dijit/form/Button',
    'dijit/_Widget',
    'dojo/text',
    'dojo/dom-style',
    'dojo/_base/declare',
    'dojo/text!../templates/ImageButton.html'
],
function (button, _Widget, text, domStyle, declare, template) {
    var widget = declare('Sage.UI.ImageButton', button, {
        hoverText: '',
        templateString: template,
        // we don't need the iconClass property so override the mapping
        // this will work for our MenuBarItem as well...
        iconClass: '',
        _setIconClassAttr: { node: 'iconNode', type: 'class' },
        
        label: '',
        _setLabelAttr: { node: 'containerNode', type: 'innerHTML' },
        
        icon: '',
        _setIconAttr: { node: 'iconNode', type: 'attribute', attribute: 'src' },
        
        imageClass: '',
        
        iconStyle: '',
        _setIconStyleAttr: { node: 'iconNode', type: 'style' },
        
        tooltip: '',
        _setTooltipAttr: { node: 'titleNode', type: 'attribute', attribute: 'title' },
        
        alt: '',
        _setAltAttr: { node: 'valueNode', type: 'attribute', attribute: 'title'},
        
        postMixInProperties: function() {
            if (this.hasImageClass() && this.hasIcon()) {
                this.icon = this._blankGif;
            } else {
                this.icon = this.icon || this._blankGif;
            }
            this.inherited(arguments);
        },
        postCreate: function () {
            this.inherited(arguments);
            if (this.hasImageClass()) {
                this.set('icon', this._blankGif);
                domStyle.set(this.iconNode, 'display', 'none');
            } else {
                domStyle.set(this.iconNodeSprite, 'display', 'none');
            }
        },
        hasImageClass: function () {
            if (this.imageClass && this.imageClass !== 'noIcon') {
                return true;
            }
            
            return false;
        },
        hasIcon: function () {
            if (this.icon && this.icon !== this._blankGif) {
                return true;
            }
            
            return false;
        },
        _onButtonClick: function (e) {
        }
    });
    
    return widget;
});
