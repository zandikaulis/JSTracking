window.features = window.features || [], window.features.push("extensions"), define("web-client/components/dashboards/extensions/extension-config/component", ["exports", "ember-component", "ember-computed", "ember-service/inject", "web-client/utilities/urls/static-cdn"], function(e, t, n, l, s) {
    e.default = t.default.extend({
        extensions: (0, l.default)(),
        extensionInstallation: null,
        extension: n.default.alias("extensionInstallation.extension"),
        testAllowConfigPopups: (0, n.default)("extension.whitelistedConfigUrls", function() {
            var e = this.get("extension.whitelistedConfigUrls");
            return e && 0 !== e.length
        }),
        didInsertElement: function() {
            this._super.apply(this, arguments), this.fallbackUrl = s.JTV_USER_PICTURES_404_USER_50X50_URL;
            var e = this.get("extensions").initExtension({
                clientId: this.get("extension.clientId"),
                token: this.get("extensionInstallation.token")
            }, this.$("iframe")[0], "config");
            this.set("extensionCoordinator", e)
        }
    })
}), define("web-client/components/dashboards/extensions/extension-config/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "564njpCN",
        block: '{"statements":[["open-element","div",[]],["static-attr","class","ext-details"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","brick brick--theme-grey pd-0"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","flex flex--nowrap flex--stretch"],["flush-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.index"],[["class"],["flex__item pd-x-1 fill-grey-10"]],0],["text","      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow pd-1 border-l"],["flush-element"],["text","\\n        "],["open-element","h4",[]],["flush-element"],["append",["helper",["t"],["dashboard.extensions.details.header"],null],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","ext-details__body brick brick--theme-grey brick--pd-lg"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","flex flex--nowrap flex--verticalCenter"],["flush-element"],["text","\\n      "],["append",["helper",["fallback-image"],null,[["class","testSelector","src","errorSrc"],["square-5 flex__item flex__item--noShrink","ext-icon",["get",["extension","iconUrl"]],["get",["fallbackUrl"]]]]],false],["text","\\n      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow mg-l-1"],["flush-element"],["text","\\n        "],["open-element","h4",[]],["static-attr","class","mg-0 pd-0"],["static-attr","data-test-selector","ext-name"],["flush-element"],["append",["unknown",["extension","name"]],false],["close-element"],["text","\\n        "],["open-element","p",[]],["static-attr","class","ext-details__author ext-author mg-0 pd-0"],["static-attr","data-test-selector","ext-author"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.details.authorAttribution"],[["author"],[["get",["extension","authorName"]]]]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tower tower--gutter-none pd-t-1"],["flush-element"],["text","\\n      "],["open-element","iframe",[]],["dynamic-attr","src",["concat",[["unknown",["extension","configUrl"]]]]],["static-attr","width","100%"],["static-attr","height","720"],["dynamic-attr","sandbox",["concat",["allow-forms allow-scripts ",["helper",["if"],[["get",["testAllowConfigPopups"]],"allow-popups",""],null]]]],["static-attr","data-test-selector","ext-config-frame"],["flush-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["svg-icon"],null,[["path","iconModifier"],["svg/close","ext-details__icon"]]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-config/template.hbs"
        }
    })
}), define("web-client/components/dashboards/extensions/extension-details/component", ["exports", "ember-component", "ember-computed", "web-client/utilities/urls/static-cdn"], function(e, t, n, l) {
    e.default = t.default.extend({
        extension: null,
        isInstalled: !1,
        extensionInstallation: null,
        installationJustAdded: null,
        installationToRemove: null,
        installExtension: function() {},
        removeExtensionInstallation: function() {},
        continueBrowsing: function() {},
        currentImageIndex: 0,
        galleryIconIndicies: (0, n.default)("extension.screenshotUrls", function() {
            return (this.get("extension.screenshotUrls") || []).slice(1).map(function(e, t) {
                return t
            })
        }),
        showAdditionalInfo: n.default.or("extension.supportEmail", "extension.authorName"),
        init: function() {
            this._super.apply(this, arguments), this.fallbackUrl = l.JTV_USER_PICTURES_404_USER_50X50_URL
        },
        actions: {
            onInstallClicked: function() {
                var e = this,
                    t = this.get("installExtension"),
                    n = this.get("extension");
                if (n && t) {
                    var l = t(n);
                    l && l.then && l.then(function(t) {
                        e.isDestroyed || (e.set("extensionInstallation", t), e.set("installationToConfirm", t))
                    })
                }
            },
            onUninstallClicked: function() {
                this.set("installationToRemove", this.get("extensionInstallation"))
            },
            onScrollGallery: function(e) {
                this.set("currentImageIndex", e);
                var t = this.$(".js-ext-screens-scroller"),
                    n = this.$(".js-ext-screens-item")[e],
                    l = t[0].getBoundingClientRect(),
                    s = n.getBoundingClientRect();
                t.animate({
                    left: l.left - s.left + "px"
                }, 300)
            }
        }
    })
}), define("web-client/components/dashboards/extensions/extension-details/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "9P26p0MN",
        block: '{"statements":[["open-element","div",[]],["static-attr","class","ext-details"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","brick brick--theme-grey pd-0"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","flex flex--nowrap flex--stretch"],["flush-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.index"],[["class"],["flex__item pd-x-1 fill-grey-10"]],12],["text","      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow pd-1 border-l"],["flush-element"],["text","\\n        "],["open-element","h4",[]],["flush-element"],["append",["helper",["t"],["dashboard.extensions.details.header"],null],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","ext-details__body brick brick--theme-grey brick--pd-lg"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","flex flex--nowrap flex--verticalCenter"],["flush-element"],["text","\\n      "],["append",["helper",["fallback-image"],null,[["class","testSelector","src","errorSrc"],["square-5 flex__item flex__item--noShrink","ext-icon",["get",["extension","iconUrl"]],["get",["fallbackUrl"]]]]],false],["text","\\n      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow mg-l-1"],["flush-element"],["text","\\n        "],["open-element","h4",[]],["static-attr","class","mg-0 pd-0"],["static-attr","data-test-selector","ext-name"],["flush-element"],["append",["unknown",["extension","name"]],false],["close-element"],["text","\\n        "],["open-element","p",[]],["static-attr","class","ext-details__author ext-author mg-0 pd-0"],["static-attr","data-test-selector","ext-author"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.details.authorAttribution"],[["author"],[["get",["extension","authorName"]]]]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"],["block",["if"],[["get",["extensionInstallation"]]],null,11,8],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tower tower--gutter-none pd-t-1"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","col-xs-7 pd-r-1"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","brick brick--theme-white"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","ext-screens__listing"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","pos-relative js-ext-screens-scroller tower tower--nowrap tower--xs-1-2 tower--gutter-xs"],["static-attr","data-test-selector","ext-screens"],["flush-element"],["text","\\n"],["block",["each"],[["get",["extension","screenshotUrls"]]],null,6],["text","            "],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","pd-1 align-center"],["flush-element"],["text","\\n"],["block",["each"],[["get",["galleryIconIndicies"]]],null,5],["text","        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","col-xs-5"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","ext-details__description brick brick--theme-white"],["flush-element"],["text","\\n"],["block",["if"],[["get",["extension","description"]]],null,4],["block",["if"],[["get",["showAdditionalInfo"]]],null,3],["text","        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["append",["helper",["dashboards/extensions/extension-dialogs"],null,[["extensionInstallation","installationToRemove","onProceed","onCancel"],[["get",["installationToConfirm"]],["get",["installationToRemove"]],["get",["removeExtensionInstallation"]],["get",["continueBrowsing"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","                "],["open-element","p",[]],["flush-element"],["append",["helper",["t"],["dashboard.extensions.details.eulaTos"],null],false],["text",": "],["open-element","a",[]],["static-attr","target","_blank"],["static-attr","rel","noopener noreferrer"],["static-attr","data-test-selector","ext-user-agreement"],["dynamic-attr","href",["unknown",["extension","eulaTosUrl"]],null],["flush-element"],["append",["unknown",["extension","eulaTosUrl"]],false],["close-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["open-element","p",[]],["flush-element"],["append",["helper",["t"],["dashboard.extensions.details.privacyPolicy"],null],false],["text",": "],["open-element","a",[]],["static-attr","target","_blank"],["static-attr","rel","noopener noreferrer"],["static-attr","data-test-selector","ext-privacy-policy"],["dynamic-attr","href",["unknown",["extension","privacyPolicyUrl"]],null],["flush-element"],["append",["unknown",["extension","privacyPolicyUrl"]],false],["close-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["open-element","p",[]],["flush-element"],["append",["helper",["t"],["general.common.support"],null],false],["text",": "],["open-element","a",[]],["dynamic-attr","href",["concat",["mailto:",["unknown",["extension","supportEmail"]]]]],["flush-element"],["append",["unknown",["extension","supportEmail"]],false],["close-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","border-t mg-t-1 pd-t-1"],["flush-element"],["text","\\n              "],["open-element","h6",[]],["flush-element"],["append",["helper",["t"],["dashboard.extensions.details.additionalInfo"],null],false],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["extension","supportEmail"]]],null,2],["text","              "],["open-element","p",[]],["flush-element"],["append",["helper",["t"],["dashboard.extensions.details.type"],null],false],["text",": "],["append",["helper",["t"],[["helper",["concat"],["extensions.type.",["get",["extension","anchor"]]],null]],null],false],["close-element"],["text","\\n"],["block",["if"],[["get",["extension","privacyPolicyUrl"]]],null,1],["block",["if"],[["get",["extension","eulaTosUrl"]]],null,0],["text","            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","h6",[]],["static-attr","class","pd-0 mg-0"],["flush-element"],["append",["helper",["t"],["general.common.details"],null],false],["close-element"],["text","\\n            "],["open-element","p",[]],["static-attr","class","pd-b-1"],["flush-element"],["append",["unknown",["extension","description"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","a",[]],["dynamic-attr","class",["concat",[["helper",["if"],[["helper",["eq"],[["get",["index"]],["get",["currentImageIndex"]]],null],"ext-screens__scroll-item--active",""],null]," ext-screens__scroll-item"]]],["modifier",["action"],[["get",[null]],"onScrollGallery",["get",["index"]]]],["flush-element"],["text","\\n            "],["close-element"],["text","\\n"]],"locals":["index"]},{"statements":[["text","                "],["open-element","div",[]],["static-attr","class","js-ext-screens-item"],["flush-element"],["text","\\n                  "],["open-element","img",[]],["dynamic-attr","src",["concat",[["get",["img"]]]]],["flush-element"],["close-element"],["text","\\n                "],["close-element"],["text","\\n"]],"locals":["img"]},{"statements":[["text","            "],["append",["helper",["svg-icon"],null,[["path"],["svg/plus"]]],false],["text","\\n            "],["open-element","span",[]],["flush-element"],["append",["helper",["t"],["dashboard.extensions.install"],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","flex__item mg-r-2"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","testSelector","hasIcon","size"],[["helper",["action"],[["get",[null]],"onInstallClicked"],null],"ext-install",true,"large"]],7],["text","        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["append",["helper",["t"],["dashboard.extensions.uninstall"],null],false]],"locals":[]},{"statements":[["append",["helper",["t"],["dashboard.extensions.details.configure"],null],false]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","flex__item mg-x-1"],["flush-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.configure",["get",["extensionInstallation","extension","id"]]],[["classNames"],["button button--text button--large"]],10],["text","        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","flex__item"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","isHollow"],[["helper",["action"],[["get",[null]],"onUninstallClicked"],null],true]],9],["text","        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["svg-icon"],null,[["path","iconModifier"],["svg/close","ext-details__icon"]]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-details/template.hbs"
        }
    })
}), define("web-client/components/dashboards/extensions/extension-dialogs/component", ["exports", "ember-component", "ember-service/inject", "ember-computed"], function(e, t, n, l) {
    e.default = t.default.extend({
        session: (0, n.default)(),
        channel: l.default.alias("session.userData.login"),
        renderInPlace: !1,
        onProceed: function() {},
        onCancel: function() {},
        extensionInstallation: null,
        installationToRemove: null,
        actions: {
            closeModal: function() {
                this.set("extensionInstallation", null), this.set("installationToRemove", null), this.get("onCancel")()
            },
            proceed: function() {
                var e = this.get("installationToRemove");
                this.set("installationToRemove", null), this.get("onProceed")(e)
            }
        }
    })
}), define("web-client/components/dashboards/extensions/extension-dialogs/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "vBmLQ1Un",
        block: '{"statements":[["block",["common/modal-dialog"],null,[["onClose","defaultShowModal","renderInPlace"],[["helper",["action"],[["get",[null]],"closeModal"],null],["get",["installationToRemove"]],["get",["renderInPlace"]]]],8],["block",["common/modal-dialog"],null,[["onClose","defaultShowModal","renderInPlace"],[["helper",["action"],[["get",[null]],"closeModal"],null],["get",["extensionInstallation","needsConfig"]],["get",["renderInPlace"]]]],5],["block",["common/modal-dialog"],null,[["onClose","defaultShowModal","renderInPlace"],[["helper",["action"],[["get",[null]],"closeModal"],null],["helper",["and"],[["get",["extensionInstallation"]],["helper",["not"],[["get",["extensionInstallation","needsConfig"]]],null]],null],["get",["renderInPlace"]]]],2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["t"],["dashboard.extensions.dialogs.successfulInstallConfig"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["t"],["dashboard.extensions.dialogs.successfulInstallKeepBrowsing"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","card pd-2"],["flush-element"],["text","\\n    "],["open-element","h5",[]],["static-attr","data-test-selector","ext-modal-header"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.dialogs.successfulInstallAffirmation"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["static-attr","class","border-t clearfix mg-y-1"],["flush-element"],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","data-test-selector","ext-modal-message"],["flush-element"],["text","\\n      "],["append",["helper",["t"],["dashboard.extensions.dialogs.successfulInstallActivateRequired"],null],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","class","mg-t-1 mg-b-2"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.dialogs.successfulInstallVisitConfigurePage"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["static-attr","class","border-t clearfix mg-y-1"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","align-center"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","isHollow","testSelector"],[["helper",["action"],[["get",[null]],"closeModal"],null],true,"ext-modal-cancel"]],1],["text","       \\n"],["block",["link-to"],["dashboards.extensions.configure",["get",["extensionInstallation","extension","id"]]],[["class","data-test-selector"],["button","ext-modal-proceed"]],0],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["t"],["dashboard.extensions.dialogs.successfulInstallConfig"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["t"],["dashboard.extensions.dialogs.successfulInstallSkipConfig"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","card pd-2"],["flush-element"],["text","\\n    "],["open-element","h5",[]],["static-attr","data-test-selector","ext-modal-header"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.dialogs.successfulInstallAffirmation"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["static-attr","class","border-t clearfix mg-y-1"],["flush-element"],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","class","mg-t-1 mg-b-2"],["static-attr","data-test-selector","ext-modal-message"],["flush-element"],["text","\\n      "],["append",["helper",["t"],["dashboard.extensions.dialogs.successfulInstallConfigurationRequired"],null],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","hr",[]],["static-attr","class","border-t clearfix mg-y-1"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","align-center"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","isHollow","testSelector"],[["helper",["action"],[["get",[null]],"closeModal"],null],true,"ext-modal-cancel"]],4],["text","       \\n"],["block",["link-to"],["dashboards.extensions.configure",["get",["extensionInstallation","extension","id"]]],[["class","data-test-selector"],["button","ext-modal-proceed"]],3],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["t"],["dashboard.extensions.uninstall"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["t"],["general.forms.cancel"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","card pd-2"],["flush-element"],["text","\\n    "],["open-element","h5",[]],["static-attr","data-test-selector","ext-modal-header"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.dialogs.uninstallModalHeader"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["static-attr","class","border-t clearfix mg-y-1"],["flush-element"],["close-element"],["text","\\n    "],["open-element","p",[]],["flush-element"],["append",["helper",["t"],["dashboard.extensions.dialogs.uninstallExtensionIdentifier"],null],false],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","class","strong"],["static-attr","data-test-selector","ext-modal-name"],["flush-element"],["append",["unknown",["installationToRemove","extension","name"]],false],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","class","mg-t-1 mg-b-2"],["static-attr","data-test-selector","ext-modal-message"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.dialogs.uninstallConfirmText"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["static-attr","class","border-t clearfix mg-y-1"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","align-center"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","isHollow","testSelector"],[["helper",["action"],[["get",[null]],"closeModal"],null],true,"ext-modal-cancel"]],7],["text","       \\n"],["block",["common/button-element"],null,[["onClick","testSelector"],[["helper",["action"],[["get",[null]],"proceed"],null],"ext-modal-proceed"]],6],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-dialogs/template.hbs"
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/available-card/component", ["exports", "ember-component", "web-client/mixins/send-route-action", "web-client/utilities/urls/static-cdn", "ember-service/inject", "ember-computed"], function(e, t, n, l, s, a) {
    e.default = t.default.extend(n.default, {
        intl: (0, s.default)(),
        classNames: ["brick", "brick--theme-white", "mg-y-1", "flex", "flex--nowrap", "flex--verticalCenter"],
        attributeBindings: ["testSelector:data-test-selector"],
        testSelector: null,
        extension: null,
        translatedExtensionState: (0, a.default)("extension.state", function() {
            var e = this.get("extension.state"),
                t = "extensions.state." + e.camelize();
            return this.get("intl").exists(t) ? this.get("intl").t(t) : e
        }),
        isReleased: (0, a.default)("extension.state", function() {
            return "Released" === this.get("extension.state")
        }),
        installExtension: function() {},
        init: function() {
            this._super.apply(this, arguments), this.fallbackUrl = l.JTV_USER_PICTURES_404_USER_50X50_URL
        },
        actions: {
            onInstallClicked: function() {
                var e = this.get("extension"),
                    t = this.get("installExtension");
                e && t && t(e)
            }
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/available-card/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "v3ge5eGr",
        block: '{"statements":[["append",["helper",["fallback-image"],null,[["class","src","errorSrc"],["square-5 mg-r-1 flex__item flex__item--noShrink",["get",["extension","iconUrl"]],["get",["fallbackUrl"]]]]],false],["text","\\n"],["open-element","div",[]],["static-attr","class","flex_item flex__item--grow"],["flush-element"],["text","\\n  "],["open-element","h4",[]],["static-attr","class","mg-0 pd-0 inline-block"],["static-attr","data-test-selector","ext-available-name"],["flush-element"],["append",["unknown",["extension","name"]],false],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","ext-details__author mg-0 pd-0"],["static-attr","data-test-selector","ext-available-author"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.managerAuthorAttribution"],[["author"],[["get",["extension","authorName"]]]]],false],["close-element"],["text","\\n  "],["open-element","p",[]],["static-attr","class","mg-0 pd-0"],["static-attr","data-test-selector","ext-available-summary"],["flush-element"],["append",["unknown",["extension","summary"]],false],["close-element"],["text","\\n  "],["open-element","p",[]],["static-attr","class","clearfix"],["flush-element"],["text","\\n    "],["open-element","span",[]],["static-attr","class","hint upcase float-left pd-r-1"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.installationCount"],[["installCount"],[["get",["extension","installationCount"]]]]],false],["close-element"],["text","\\n    "],["open-element","span",[]],["static-attr","data-test-selector","ext-available-type"],["static-attr","class","pill upcase"],["flush-element"],["append",["helper",["t"],[["helper",["concat"],["extensions.type.",["get",["extension","anchor"]]],null]],null],false],["close-element"],["text","\\n"],["block",["unless"],[["get",["isReleased"]]],null,2],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.details",["get",["extension","id"]]],[["class"],["button button--hollow mg-x-1"]],1],["block",["common/button-element"],null,[["onClick","testSelector"],[["helper",["action"],[["get",[null]],"onInstallClicked"],null],"ext-available-install"]],0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","span",[]],["flush-element"],["append",["helper",["t"],["dashboard.extensions.install"],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","span",[]],["flush-element"],["append",["helper",["t"],["general.common.details"],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","span",[]],["static-attr","data-test-selector","ext-available-state"],["static-attr","class","pill upcase"],["flush-element"],["append",["unknown",["translatedExtensionState"]],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-manager/available-card/template.hbs"
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/component", ["exports", "ember-component", "ember-computed", "ember-service/inject", "ember-object", "web-client/models/extension"], function(e, t, n, l, s, a) {
    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var i = s.default.extend({
            id: "",
            anchor: ""
        }),
        c = [i.create({
            id: "extension-overlay-1",
            anchor: a.EXTENSION_ANCHOR_VIDEO_OVERLAY
        })];
    e.default = t.default.extend({
        api: (0, l.default)(),
        tracking: (0, l.default)(),
        allExtensions: null,
        extensionInstallations: null,
        extensionPanels: null,
        activeExtensionInstallations: (0, n.default)("extensionInstallations", function() {
            return (this.get("extensionInstallations") || []).filterBy("isActive")
        }),
        availableSlots: (0, n.default)("extensionPanels", function() {
            var e = this.get("extensionPanels"),
                t = e.map(function(e) {
                    return i.create({
                        id: e.data.slot,
                        anchor: a.EXTENSION_ANCHOR_PANEL
                    })
                });
            return [].concat(o(t), c)
        }),
        installExtension: function() {},
        removeExtensionInstallation: function() {},
        configureExtensionInstallation: function() {},
        activateExtensionInstallation: function() {},
        deactivateExtensionInstallation: function() {},
        extensionInstallation: null,
        activatedExtension: null,
        installationToRemove: null,
        extensionToReplace: null,
        extensionToActivate: null,
        availableExtensions: (0, n.default)("allExtensions", "extensionInstallations", function() {
            var e = this.get("allExtensions") || [],
                t = this.get("extensionInstallations") || [];
            return e.filter(function(e) {
                return !t.findBy("extension.id", e.id)
            })
        }),
        init: function() {
            this._super.apply(this, arguments), this.get("allExtensions") || this.set("allExtensions", []), this.get("extensionInstallations") || this.set("extensionInstallations", []), this.get("extensionPanels") || this.set("extensionPanels", [])
        },
        actions: {
            installExtension: function(e) {
                var t = this;
                this.get("installExtension")(e).then(function(e) {
                    t.isDestroyed || (t.set("extensionInstallation", e), t.get("tracking").trackEvent({
                        event: "extension_ui_interaction_client",
                        data: {
                            extension_interaction: "install",
                            anchor: e.get("extension.anchor"),
                            extension_id: e.get("extension.clientId"),
                            extension_version: e.get("extension.version")
                        }
                    }))
                })
            },
            removeExtensionInstallation: function(e) {
                this.set("installationToRemove", e)
            },
            configureExtensionInstallation: function(e) {
                this.get("configureExtensionInstallation")(e)
            },
            activateExtensionInstallation: function(e, t) {
                this.set("installationToActivate", e), this.set("configToActivate", t)
            },
            closeActivateDialog: function() {
                this.set("installationToActivate", null), this.set("configToActivate", null)
            },
            deactivateExtensionInstallation: function(e) {
                this.get("deactivateExtensionInstallation")(e)
            }
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/installed-card/component", ["exports", "ember-component", "ember-computed", "ember-service/inject", "web-client/utilities/urls/static-cdn"], function(e, t, n, l, s) {
    e.default = t.default.extend({
        classNames: ["mg-b-2"],
        attributeBindings: ["testSelector:data-test-selector"],
        tracking: (0, l.default)(),
        testSelector: null,
        extensionInstallation: null,
        availableSlots: [],
        activateExtensionInstallation: function() {},
        configureExtensionInstallation: function() {},
        deactivateExtensionInstallation: function() {},
        removeExtensionInstallation: function() {},
        extension: n.default.alias("extensionInstallation.extension"),
        extensionSlots: (0, n.default)("availableSlots", "extension.anchor", function() {
            var e = this.get("availableSlots"),
                t = this.get("extension.anchor");
            return e.filter(function(e) {
                return e.anchor === t
            })
        }),
        init: function() {
            this._super.apply(this, arguments), this.fallbackUrl = s.JTV_USER_PICTURES_404_USER_50X50_URL
        },
        getExtensionTrackingProperties: function() {
            return {
                anchor: this.get("extension.anchor"),
                extension_id: this.get("extension.clientId"),
                extension_version: this.get("extension.version")
            }
        },
        actions: {
            onActivateClicked: function(e) {
                var t = this.get("extensionInstallation");
                this.get("activateExtensionInstallation")(t, {
                    slot: e.get("id")
                }), this.get("tracking").trackEvent({
                    event: "extension_ui_interaction_client",
                    data: Object.assign({
                        extension_interaction: "activate"
                    }, this.getExtensionTrackingProperties())
                })
            },
            onActivateNewClicked: function() {
                var e = this.get("extensionInstallation");
                this.get("activateExtensionInstallation")(e, {
                    slot: null
                }), this.get("tracking").trackEvent({
                    event: "extension_ui_interaction_client",
                    data: Object.assign({
                        extension_interaction: "activate"
                    }, this.getExtensionTrackingProperties())
                })
            },
            onConfigClicked: function() {
                var e = this.get("extensionInstallation");
                this.get("configureExtensionInstallation")(e)
            },
            onDeactivateClicked: function() {
                var e = this.get("extensionInstallation");
                this.get("deactivateExtensionInstallation")(e), this.get("tracking").trackEvent({
                    event: "extension_ui_interaction_client",
                    data: Object.assign({
                        extension_interaction: "deactivate"
                    }, this.getExtensionTrackingProperties())
                })
            },
            onUninstallClicked: function() {
                var e = this.get("extensionInstallation");
                this.get("removeExtensionInstallation")(e), this.get("tracking").trackEvent({
                    event: "extension_ui_interaction_client",
                    data: Object.assign({
                        extension_interaction: "uninstall"
                    }, this.getExtensionTrackingProperties())
                })
            }
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/installed-card/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "Cpg3dn+E",
        block: '{"statements":[["open-element","div",[]],["static-attr","class","brick brick--theme-white flex flex--nowrap flex--verticalCenter"],["flush-element"],["text","\\n  "],["append",["helper",["fallback-image"],null,[["class","testSelector","src","errorSrc"],["square-5 mg-r-1 flex__item flex__item--noShrink","ext-installed-icon",["get",["extension","iconUrl"]],["get",["fallbackUrl"]]]]],false],["text","\\n  "],["open-element","div",[]],["static-attr","class","flex_item flex__item--grow"],["flush-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.details",["get",["extension","id"]]],null,18],["text","  "],["close-element"],["text","\\n"],["block",["if"],[["get",["extensionInstallation","isActive"]]],null,17],["close-element"],["text","\\n"],["open-element","div",[]],["dynamic-attr","class",["concat",["ext-active-indicator brick ",["helper",["if"],[["get",["extensionInstallation","isActive"]],"brick--theme-purple theme--dark"],null]," mg-b-1 flex flex--nowrap flex--verticalCenter"]]],["flush-element"],["text","\\n"],["block",["if"],[["get",["extensionInstallation","isActive"]]],null,15,12],["text","  "],["open-element","div",[]],["static-attr","class","flex__item"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["testSelector","size","iconOnly","onClick"],["ext-installed-config","small",true,["helper",["action"],[["get",[null]],"onConfigClicked"],null]]],1],["block",["common/button-element"],null,[["testSelector","size","iconOnly","onClick"],["ext-installed-uninstall","small",true,["helper",["action"],[["get",[null]],"onUninstallClicked"],null]]],0],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["append",["helper",["svg-icon"],null,[["path"],["svg/trash"]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["svg-icon"],null,[["path"],["svg/gear"]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["append",["helper",["t"],["dashboard.extensions.addAsNewPanel"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["append",["helper",["menu","balloonItem"],null,[["isSeparator"],[true]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["extensionSlots"]]],null,3],["block",["menu","balloonItem"],null,[["onClick","testSelector"],[["helper",["action"],[["get",[null]],"onActivateNewClicked",["get",["slot"]]],null],"ext-activate-new"]],2]],"locals":[]},{"statements":[["append",["helper",["t"],["dashboard.extensions.assignToSlot"],[["slot","htmlSafe"],[["get",["slot","id"]],true]]],false]],"locals":[]},{"statements":[["block",["menu","balloonItem"],null,[["onClick","testSelector"],[["helper",["action"],[["get",[null]],"onActivateClicked",["get",["slot"]]],null],"ext-activate-existing"]],5]],"locals":["slot"]},{"statements":[["block",["each"],[["get",["extensionSlots"]]],null,6],["text","\\n"],["block",["if"],[["helper",["eq"],[["get",["extension","anchor"]],"panel"],null]],null,4]],"locals":[]},{"statements":[["text","            "],["append",["helper",["t"],["dashboard.extensions.activate"],null],false],["text","\\n"]],"locals":[]},{"statements":[["block",["menu","button"],null,[["size"],["small"]],8],["block",["menu","balloon"],null,[["direction"],["down"]],7]],"locals":["menu"]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow"],["flush-element"],["text","\\n"],["block",["common/balloon-menu"],null,[["testSelector","isDropMenu"],["ext-installed-activate",true]],9],["text","      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow"],["flush-element"],["text","\\n        "],["open-element","span",[]],["static-attr","class","hint"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.needsConfiguration"],null],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["extensionInstallation","needsConfig"]]],null,11,10]],"locals":[]},{"statements":[["text","          "],["append",["helper",["t"],["dashboard.extensions.noSlotConfigured"],null],false],["text","\\n"]],"locals":[]},{"statements":[["append",["helper",["t"],["dashboard.extensions.activeSlot"],[["htmlSafe","slot"],[true,["get",["extensionInstallation","activationConfig","slot"]]]]],false]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow"],["flush-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","ext-active-indicator__icon"],["flush-element"],["close-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","ext-active-indicator__text upcase small mg-0"],["flush-element"],["text","\\n"],["block",["if"],[["get",["extensionInstallation","activationConfig","slot"]]],null,14,13],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["t"],["dashboard.extensions.deactivate"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","flex_item"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["testSelector","isHollow","onClick"],["ext-installed-deactivate",true,["helper",["action"],[["get",[null]],"onDeactivateClicked"],null]]],16],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","h5",[]],["static-attr","data-test-selector","ext-installed-name"],["static-attr","class","mg-b-0"],["flush-element"],["append",["unknown",["extension","name"]],false],["close-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","pill upcase"],["flush-element"],["append",["helper",["t"],[["helper",["concat"],["extensions.type.",["get",["extension","anchor"]]],null]],null],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-manager/installed-card/template.hbs"
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "S7IGCcVF",
        block: '{"statements":[["open-element","div",[]],["static-attr","class","flex flex--nowrap"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","ext-installed-list brick brick--pd-sm brick--theme-grey mg-r-1"],["static-attr","data-test-selector","ext-installed-list"],["flush-element"],["text","\\n    "],["open-element","h4",[]],["static-attr","class","mg-b-1"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.installedExtensionsHeader"],null],false],["close-element"],["text","\\n"],["block",["if"],[["get",["extensionInstallations"]]],null,6,4],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","brick brick--pd-sm brick--theme-grey mg-0"],["static-attr","data-test-selector","ext-available-list"],["flush-element"],["text","\\n    "],["open-element","h4",[]],["static-attr","class","mg-b-1"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.availableExtensionsHeader"],null],false],["close-element"],["text","\\n"],["block",["if"],[["get",["availableExtensions"]]],null,3,1],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["append",["helper",["dashboards/extensions/extension-dialogs"],null,[["extensionInstallation","installationToRemove","onProceed"],[["get",["extensionInstallation"]],["get",["installationToRemove"]],["get",["removeExtensionInstallation"]]]]],false],["text","\\n"],["block",["if"],[["get",["installationToActivate"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["append",["helper",["dashboards/extensions/activate-workflow"],null,[["installation","config","activeInstallations","activateInstallation","deactivateInstallation","onClose"],[["get",["installationToActivate"]],["get",["configToActivate"]],["get",["activeExtensionInstallations"]],["helper",["route-action"],["activateExtensionInstallation"],null],["helper",["route-action"],["deactivateExtensionInstallation"],null],["helper",["action"],[["get",[null]],"closeActivateDialog"],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","p",[]],["static-attr","class","mg-b-2"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.noAvailableExtensions"],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["dashboards/extensions/extension-manager/available-card"],null,[["extension","installExtension","testSelector"],[["get",["ext"]],["helper",["action"],[["get",[null]],"installExtension",["get",["ext"]]],null],"ext-available"]]],false],["text","\\n"]],"locals":["ext"]},{"statements":[["block",["each"],[["get",["availableExtensions"]]],null,2]],"locals":[]},{"statements":[["text","      "],["open-element","p",[]],["static-attr","class","mg-b-2"],["flush-element"],["append",["helper",["t"],["dashboard.extensions.noExtensionsInstalled"],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["dashboards/extensions/extension-manager/installed-card"],null,[["extensionInstallation","availableSlots","activateExtensionInstallation","deactivateExtensionInstallation","configureExtensionInstallation","removeExtensionInstallation","testSelector"],[["get",["installation"]],["get",["availableSlots"]],["helper",["action"],[["get",[null]],"activateExtensionInstallation"],null],["helper",["action"],[["get",[null]],"deactivateExtensionInstallation"],null],["helper",["action"],[["get",[null]],"configureExtensionInstallation"],null],["helper",["action"],[["get",[null]],"removeExtensionInstallation"],null],"ext-installed"]]],false],["text","\\n"]],"locals":["installation"]},{"statements":[["block",["each"],[["get",["extensionInstallations"]]],null,5]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-manager/template.hbs"
        }
    })
}), define("web-client/components/extension-panel", ["exports", "ember-component", "ember-service/inject", "ember-string", "ember-computed", "ember-metal/observer", "web-client/mixins/partial-impression"], function(e, t, n, l, s, a, o) {
    e.default = t.default.extend(o.PartialImpression, {
        extensions: (0, n.default)(),
        pubsub: (0, n.default)(),
        playerRegistry: (0, n.default)(),
        tracking: (0, n.default)(),
        messageReceiveCount: 0,
        extensionInstallation: null,
        extension: s.default.alias("extensionInstallation.extension"),
        player: s.default.alias("playerRegistry.mainPlayer.player"),
        channel: null,
        testAllowSameOrigin: !1,
        extensionCoordinator: null,
        testAllowPanelPopups: (0, s.default)("extension.whitelistedPanelUrls", function() {
            var e = this.get("extension.whitelistedPanelUrls");
            return e && 0 !== e.length
        }),
        gameObserver: (0, a.default)("channel.game", function() {
            this.get("extensionCoordinator").setGame(this.get("channel.game"))
        }),
        extensionInstallationObserver: (0, a.default)("extensionInstallation.token", function() {
            this.get("extensionInstallation.token") && null === this.get("extensionCoordinator") && this._initializeExtensionCoordinator()
        }),
        iframeUrl: (0, s.default)("extensionMode", "extension.viewerUrl", "extension.configUrl", "extension.liveConfigUrl", function() {
            switch (this.get("extensionMode")) {
                case "config":
                    return this.get("extension.configUrl");
                case "dashboard":
                    return this.get("extension.liveConfigUrl");
                case "viewer":
                default:
                    return this.get("extension.viewerUrl")
            }
        }),
        frameStyle: (0, s.default)("extension.panelHeight", function() {
            var e = this.get("extension.panelHeight") || 300;
            return (0, l.htmlSafe)("height: " + e + "px")
        }),
        pubsubControlTopicName: (0, s.default)("extension.clientId", function() {
            return "extension-control." + this.get("extension.clientId")
        }),
        _initializeExtensionCoordinator: function() {
            var e = this.get("extensions").initExtension({
                clientId: this.get("extension.clientId"),
                token: this.get("extensionInstallation.token")
            }, this.$("iframe")[0], this.get("extensionMode"), this.get("player").getExtensionsApi());
            e.setGame(this.get("channel.game")), this.set("extensionCoordinator", e)
        },
        didInsertElement: function() {
            this._super.apply(this, arguments), this.get("extensionInstallation.token") && this._initializeExtensionCoordinator();
            var e = this.get("pubsubControlTopicName");
            this.get("pubsub").on(e, this, this.handlePubsub)
        },
        didReceiveAttrs: function() {
            this._super.apply(this, arguments), this.attrs.refreshPanelLayout && this.attrs.refreshPanelLayout()
        },
        willDestroyElement: function() {
            this._super.apply(this, arguments);
            var e = this.get("pubsubControlTopicName");
            this.get("pubsub").off(e, this, this.handlePubsub)
        },
        handlePubsub: function(e) {
            var t = this.get("extension.clientId");
            "kill" === e.action && e.clientId === t && this.$("iframe").remove()
        },
        isUserLinked: function(e) {
            var t = JSON.parse(atob(e.split(".")[1]));
            return t && t.user_id && !0
        },
        getExtensionTrackingProperties: function() {
            return {
                anchor: this.get("extension.anchor"),
                extension_id: this.get("extension.clientId"),
                extension_version: this.get("extension.version")
            }
        },
        partialImpression: function(e) {
            this.get("tracking").trackEvent({
                event: "extension_view",
                data: Object.assign(e, this.getExtensionTrackingProperties())
            })
        },
        actions: {
            toggleLinkExtension: function() {
                var e = this,
                    t = this.get("extensionInstallation.token"),
                    n = this.get("extensionInstallation.extension.clientId");
                this.isUserLinked(t) ? this.get("extensions").unlinkExtension(n, t).then(function(t) {
                    e.isDestroyed || (e.set("extensionInstallation.token", t.token), e.get("extensionCoordinator").reloadExtension(), e.get("tracking").trackEvent({
                        event: "extension_ui_interaction_client",
                        data: Object.assign({
                            extension_interaction: "revoke"
                        }, e.getExtensionTrackingProperties())
                    }))
                }) : this.get("extensions").linkExtension(n, t).then(function(t) {
                    e.isDestroyed || (e.set("extensionInstallation.token", t.token), e.get("extensionCoordinator").reloadExtension(), e.get("tracking").trackEvent({
                        event: "extension_ui_interaction_client",
                        data: Object.assign({
                            extension_interaction: "grant"
                        }, e.getExtensionTrackingProperties())
                    }))
                })
            },
            flagProblem: function() {
                this.get("tracking").trackEvent({
                    event: "extension_ui_interaction_client",
                    data: Object.assign({
                        extension_interaction: "report"
                    }, this.getExtensionTrackingProperties())
                })
            }
        }
    })
}), define("web-client/templates/components/extension-panel", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "8FUWmA4h",
        block: '{"statements":[["open-element","div",[]],["static-attr","class","qa-panel-extension-container brick brick--theme-grey pd-0"],["flush-element"],["text","\\n"],["text","  "],["open-element","iframe",[]],["static-attr","data-test-selector","extensions-iframe-selector"],["static-attr","class","ext-panel__frame"],["dynamic-attr","src",["unknown",["iframeUrl"]],null],["dynamic-attr","sandbox",["concat",["allow-forms allow-scripts ",["helper",["if"],[["get",["testAllowSameOrigin"]],"allow-same-origin",""],null]," ",["helper",["if"],[["get",["testAllowPanelPopups"]],"allow-popups",""],null]]]],["dynamic-attr","style",["unknown",["frameStyle"]],null],["flush-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","brick brick--theme-grey flex flex--verticalCenter pd-0"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","data-test-selector","extensions-name-selector"],["static-attr","class","qa-panel-extension-name flex__item flex__item--grow mg-x-1 align-left"],["flush-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.details",["get",["extension","id"]]],null,2],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","flex__item flex__item--noGrow"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["testSelector","class","onClick"],["link-user-button","button--icon-only",["helper",["action"],[["get",[null]],"toggleLinkExtension"],null]]],1],["block",["common/button-element"],null,[["class","onClick"],["button--icon-only",["helper",["action"],[["get",[null]],"flagProblem"],null]]],0],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["append",["helper",["svg-icon"],null,[["path"],["svg/chat-risk-flag"]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["svg-icon"],null,[["path"],["svg/glyph-views"]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["unknown",["extension","name"]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/templates/components/extension-panel.hbs"
        }
    })
});