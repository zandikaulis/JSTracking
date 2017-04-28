window.features = window.features || [], window.features.push("extensions"), define("web-client/components/dashboards/extensions/extension-config/component", ["exports", "ember-component", "ember-computed", "web-client/components/dashboards/extensions/extension-details/component"], function(e, t, n, l) {
    e.default = t.default.extend({
        extension: null,
        authorText: (0, n.default)("extension.authorName", function() {
            var e = this.get("extension.authorName");
            if (e) {
                return l.AUTHOR_TEXT_FORMAT.replace("{{author}}", e)
            }
            return ""
        })
    })
}), define("web-client/components/dashboards/extensions/extension-config/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "40RQZDpO",
        block: '{"statements":[["open-element","div",[]],["static-attr","class","ext-details"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","brick brick--theme-grey pd-0"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","flex flex--nowrap flex--stretch"],["flush-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.index"],[["class"],["flex__item pd-x-1 fill-grey-10"]],0],["text","      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow pd-1 border-l"],["flush-element"],["text","\\n        "],["open-element","h4",[]],["flush-element"],["append",["helper",["i18n"],["Extension Details"],null],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","ext-details__body brick brick--theme-grey brick--pd-lg"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","flex flex--nowrap flex--verticalCenter"],["flush-element"],["text","\\n      "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["extension","iconUrl"]]]]],["static-attr","class","square-5 flex__item flex__item--noShrink"],["static-attr","data-test-selector","ext-icon"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow mg-l-1"],["flush-element"],["text","\\n        "],["open-element","h4",[]],["static-attr","class","mg-0 pd-0"],["static-attr","data-test-selector","ext-name"],["flush-element"],["append",["unknown",["extension","name"]],false],["close-element"],["text","\\n        "],["open-element","p",[]],["static-attr","class","ext-details__author ext-author mg-0 pd-0"],["static-attr","data-test-selector","ext-author"],["flush-element"],["append",["unknown",["authorText"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tower tower--gutter-none pd-t-1"],["flush-element"],["text","\\n      "],["open-element","iframe",[]],["dynamic-attr","src",["concat",[["unknown",["extension","configUrl"]]]]],["static-attr","width","100%"],["static-attr","height","720"],["static-attr","sandbox","allow-forms allow-scripts"],["static-attr","data-test-selector","ext-config-frame"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["svg-icon"],null,[["path","iconModifier"],["svg/close","ext-details__icon"]]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-config/template.hbs"
        }
    })
}), define("web-client/components/dashboards/extensions/extension-details/component", ["exports", "ember-component", "ember-computed"], function(e, t, n) {
    var l = i18n("Created by {{author}}");
    e.AUTHOR_TEXT_FORMAT = l, e.default = t.default.extend({
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
        authorText: (0, n.default)("extension.authorName", function() {
            var e = this.get("extension.authorName");
            if (e) {
                return l.replace("{{author}}", e)
            }
            return ""
        }),
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
        id: "FqSe0m2Q",
        block: '{"statements":[["open-element","div",[]],["static-attr","class","ext-details"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","brick brick--theme-grey pd-0"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","flex flex--nowrap flex--stretch"],["flush-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.index"],[["class"],["flex__item pd-x-1 fill-grey-10"]],10],["text","      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow pd-1 border-l"],["flush-element"],["text","\\n        "],["open-element","h4",[]],["flush-element"],["append",["helper",["i18n"],["Extension Details"],null],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","ext-details__body brick brick--theme-grey brick--pd-lg"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","flex flex--nowrap flex--verticalCenter"],["flush-element"],["text","\\n      "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["extension","iconUrl"]]]]],["static-attr","class","square-5 flex__item flex__item--noShrink"],["static-attr","data-test-selector","ext-icon"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow mg-l-1"],["flush-element"],["text","\\n        "],["open-element","h4",[]],["static-attr","class","mg-0 pd-0"],["static-attr","data-test-selector","ext-name"],["flush-element"],["append",["unknown",["extension","name"]],false],["close-element"],["text","\\n        "],["open-element","p",[]],["static-attr","class","ext-details__author ext-author mg-0 pd-0"],["static-attr","data-test-selector","ext-author"],["flush-element"],["append",["unknown",["authorText"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"],["block",["if"],[["get",["extensionInstallation"]]],null,9,6],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tower tower--gutter-none pd-t-1"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","col-xs-7 pd-r-1"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","brick brick--theme-white"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","ext-screens__listing"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","pos-relative js-ext-screens-scroller tower tower--nowrap tower--xs-1-2 tower--gutter-xs"],["static-attr","data-test-selector","ext-screens"],["flush-element"],["text","\\n"],["block",["each"],[["get",["extension","screenshotUrls"]]],null,4],["text","            "],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","pd-1 align-center"],["flush-element"],["text","\\n"],["block",["each"],[["get",["galleryIconIndicies"]]],null,3],["text","        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","col-xs-5"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","ext-details__description brick brick--theme-white"],["flush-element"],["text","\\n"],["block",["if"],[["get",["extension","description"]]],null,2],["block",["if"],[["get",["showAdditionalInfo"]]],null,1],["text","        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["append",["helper",["dashboards/extensions/extension-dialogs"],null,[["extensionInstallation","installationToRemove","onProceed","onCancel"],[["get",["installationToConfirm"]],["get",["installationToRemove"]],["get",["removeExtensionInstallation"]],["get",["continueBrowsing"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","                "],["open-element","p",[]],["flush-element"],["append",["helper",["i18n"],["Support"],null],false],["text",": "],["open-element","a",[]],["dynamic-attr","href",["concat",["mailto:",["unknown",["extension","supportEmail"]]]]],["flush-element"],["append",["unknown",["extension","supportEmail"]],false],["close-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","border-t mg-t-1 pd-t-1"],["flush-element"],["text","\\n              "],["open-element","h6",[]],["flush-element"],["append",["helper",["i18n"],["Additional Information"],null],false],["close-element"],["text","\\n"],["block",["if"],[["get",["extension","supportEmail"]]],null,0],["text","            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","h6",[]],["static-attr","class","pd-0 mg-0"],["flush-element"],["append",["helper",["t"],["general.common.details"],null],false],["close-element"],["text","\\n            "],["open-element","p",[]],["static-attr","class","pd-b-1"],["flush-element"],["append",["unknown",["extension","description"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","a",[]],["dynamic-attr","class",["concat",[["helper",["if"],[["helper",["eq"],[["get",["index"]],["get",["currentImageIndex"]]],null],"ext-screens__scroll-item--active",""],null]," ext-screens__scroll-item"]]],["modifier",["action"],[["get",[null]],"onScrollGallery",["get",["index"]]]],["flush-element"],["text","\\n            "],["close-element"],["text","\\n"]],"locals":["index"]},{"statements":[["text","                "],["open-element","div",[]],["static-attr","class","js-ext-screens-item"],["flush-element"],["text","\\n                  "],["open-element","img",[]],["dynamic-attr","src",["concat",[["get",["img"]]]]],["flush-element"],["close-element"],["text","\\n                "],["close-element"],["text","\\n"]],"locals":["img"]},{"statements":[["text","            "],["append",["helper",["svg-icon"],null,[["path"],["svg/plus"]]],false],["text","\\n            "],["open-element","span",[]],["flush-element"],["append",["helper",["i18n"],["Install"],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","flex__item mg-r-2"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","testSelector","hasIcon","size"],[["helper",["action"],[["get",[null]],"onInstallClicked"],null],"ext-install",true,"large"]],5],["text","        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["helper",["i18n"],["Uninstall"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["helper",["i18n"],["Config"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","flex__item mg-x-1"],["flush-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.configure",["get",["extensionInstallation","extension","id"]]],[["classNames"],["button button--text button--large"]],8],["text","        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","flex__item"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","isHollow"],[["helper",["action"],[["get",[null]],"onUninstallClicked"],null],true]],7],["text","        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["svg-icon"],null,[["path","iconModifier"],["svg/close","ext-details__icon"]]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
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
        id: "JjQtjlqo",
        block: '{"statements":[["block",["common/modal-dialog"],null,[["onClose","defaultShowModal","renderInPlace"],[["helper",["action"],[["get",[null]],"closeModal"],null],["get",["installationToRemove"]],["get",["renderInPlace"]]]],8],["block",["common/modal-dialog"],null,[["onClose","defaultShowModal","renderInPlace"],[["helper",["action"],[["get",[null]],"closeModal"],null],["get",["extensionInstallation","needsConfig"]],["get",["renderInPlace"]]]],5],["block",["common/modal-dialog"],null,[["onClose","defaultShowModal","renderInPlace"],[["helper",["action"],[["get",[null]],"closeModal"],null],["helper",["and"],[["get",["extensionInstallation"]],["helper",["not"],[["get",["extensionInstallation","needsConfig"]]],null]],null],["get",["renderInPlace"]]]],2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["i18n"],["Go to Channel"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["i18n"],["Continue Browsing"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","card pd-2"],["flush-element"],["text","\\n    "],["open-element","h5",[]],["static-attr","data-test-selector","ext-modal-header"],["flush-element"],["append",["helper",["i18n"],["Extension Installed Successfully!"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","data-test-selector","ext-modal-message"],["flush-element"],["append",["helper",["i18n"],["Now that you have installed this extension, you\'ll need to activate it on your channel page!"],null],false],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","class","mg-t-1 mg-b-2"],["flush-element"],["append",["helper",["i18n"],["Would you like to go to your channel page now?"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","align-center"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","isHollow","testSelector"],[["helper",["action"],[["get",[null]],"closeModal"],null],true,"ext-modal-cancel"]],1],["text","       \\n"],["block",["link-to"],["channel",["get",["channel"]]],[["class","data-test-selector"],["button","ext-modal-proceed"]],0],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["i18n"],["Go to Config"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["i18n"],["Skip for Now"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","card pd-2"],["flush-element"],["text","\\n    "],["open-element","h5",[]],["static-attr","data-test-selector","ext-modal-header"],["flush-element"],["append",["helper",["i18n"],["Extension Installed Successfully!"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","class","mg-t-1 mg-b-2"],["static-attr","data-test-selector","ext-modal-message"],["flush-element"],["append",["helper",["i18n"],["This extension requires some information from you in order to function correctly! (You can change this at any time on the Extension\'s details page)."],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","align-center"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","isHollow","testSelector"],[["helper",["action"],[["get",[null]],"closeModal"],null],true,"ext-modal-cancel"]],4],["text","       \\n"],["block",["link-to"],["dashboards.extensions.configure",["get",["extensionInstallation","extension","id"]]],[["class","data-test-selector"],["button","ext-modal-proceed"]],3],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["i18n"],["Uninstall"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["t"],["general.forms.cancel"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","card pd-2"],["flush-element"],["text","\\n    "],["open-element","h5",[]],["static-attr","data-test-selector","ext-modal-header"],["flush-element"],["append",["helper",["i18n"],["Are you sure you want to Uninstall?"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","p",[]],["flush-element"],["append",["helper",["i18n"],["You are uninstalling"],null],false],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","class","strong"],["static-attr","data-test-selector","ext-modal-name"],["flush-element"],["append",["unknown",["installationToRemove","extension","name"]],false],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","class","mg-t-1 mg-b-2"],["static-attr","data-test-selector","ext-modal-message"],["flush-element"],["append",["helper",["i18n"],["Are you sure you want to uninstall?"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","align-center"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","isHollow","testSelector"],[["helper",["action"],[["get",[null]],"closeModal"],null],true,"ext-modal-cancel"]],7],["text","       \\n"],["block",["common/button-element"],null,[["onClick","testSelector"],[["helper",["action"],[["get",[null]],"proceed"],null],"ext-modal-proceed"]],6],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-dialogs/template.hbs"
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/available-card/component", ["exports", "ember-component", "ember-computed", "web-client/mixins/send-route-action"], function(e, t, n, l) {
    var s = i18n("by {{author}}"),
        a = i18n("{{installCount}} users");
    e.default = t.default.extend(l.default, {
        classNames: ["brick", "brick--theme-white", "mg-y-1", "flex", "flex--nowrap", "flex--verticalCenter"],
        attributeBindings: ["testSelector:data-test-selector"],
        testSelector: null,
        extension: null,
        installExtension: function() {},
        authorText: (0, n.default)("extension.author", function() {
            var e = this.get("extension.author");
            if (e) {
                return s.replace("{{author}}", e)
            }
            return ""
        }),
        installationCountText: (0, n.default)("extension.installationCount", function() {
            var e = this.get("extension.installationCount") || 0;
            return a.replace("{{installCount}}", e.toLocaleString())
        }),
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
        id: "sWBZVVSa",
        block: '{"statements":[["open-element","img",[]],["dynamic-attr","src",["unknown",["extension","iconUrl"]],null],["static-attr","class","square-5 mg-r-1 flex__item flex__item--noShrink"],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","flex_item flex__item--grow"],["flush-element"],["text","\\n  "],["open-element","h4",[]],["static-attr","class","mg-0 pd-0 inline-block"],["static-attr","data-test-selector","ext-available-name"],["flush-element"],["append",["unknown",["extension","name"]],false],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","ext-details__author mg-0 pd-0"],["static-attr","data-test-selector","ext-available-author"],["flush-element"],["append",["unknown",["authorText"]],false],["close-element"],["text","\\n  "],["open-element","p",[]],["static-attr","class","mg-0 pd-0"],["static-attr","data-test-selector","ext-available-summary"],["flush-element"],["append",["unknown",["extension","summary"]],false],["close-element"],["text","\\n  "],["open-element","p",[]],["static-attr","class","clearfix"],["flush-element"],["text","\\n    "],["open-element","span",[]],["static-attr","class","hint upcase float-left pd-r-1"],["flush-element"],["append",["unknown",["installationCountText"]],false],["close-element"],["open-element","span",[]],["static-attr","class","pill upcase"],["flush-element"],["append",["unknown",["extension","anchorLabel"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.details",["get",["extension","id"]]],[["class"],["button button--hollow mg-x-1"]],1],["block",["common/button-element"],null,[["onClick","testSelector"],[["helper",["action"],[["get",[null]],"onInstallClicked"],null],"ext-available-install"]],0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","span",[]],["flush-element"],["append",["helper",["i18n"],["Install"],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","span",[]],["flush-element"],["append",["helper",["t"],["general.common.details"],null],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-manager/available-card/template.hbs"
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/component", ["exports", "ember-component", "ember-computed", "ember-service/inject", "ember-object", "ember-string", "web-client/models/extension"], function(e, t, n, l, s, a, o) {
    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var c = i18n("Set as {{slot}}"),
        r = i18n("<strong>{{extensionName}}</strong> on {{extensionSlot}}"),
        m = i18n("The extension <strong>{{extensionName}}</strong> is now active on panel slot <strong>{{extensionSlot}}</strong>"),
        x = s.default.extend({
            id: "",
            anchor: "",
            label: (0, n.default)("id", function() {
                var e = this.get("id");
                return c.replace("{{slot}}", e)
            })
        }),
        u = [x.create({
            id: "extension-overlay-1",
            anchor: o.EXTENSION_ANCHOR_VIDEO_OVERLAY
        })];
    e.default = t.default.extend({
        api: (0, l.default)(),
        allExtensions: null,
        extensionInstallations: null,
        extensionPanels: null,
        activeExtensionInstallations: (0, n.default)("extensionInstallations", function() {
            return (this.get("extensionInstallations") || []).filter(function(e) {
                return e.get("isActive")
            })
        }),
        availableSlots: (0, n.default)("extensionPanels", function() {
            var e = this.get("extensionPanels"),
                t = e.map(function(e) {
                    return x.create({
                        id: e.kind,
                        anchor: o.EXTENSION_ANCHOR_PANEL
                    })
                });
            return [].concat(i(t), u)
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
        extensionToReplaceBodyText: (0, n.default)("extensionToReplace", function() {
            var e = this.get("extensionToReplace.extension.name"),
                t = this.get("extensionToReplace.config.slot"),
                n = r.replace("{{extensionName}}", e).replace("{{extensionSlot}}", t);
            return (0, a.htmlSafe)(n)
        }),
        activatedExtensionBodyText: (0, n.default)("activatedExtension", function() {
            var e = this.get("activatedExtension.extension.name"),
                t = this.get("activatedExtension.config.slot"),
                n = m.replace("{{extensionName}}", e).replace("{{extensionSlot}}", t);
            return (0, a.htmlSafe)(n)
        }),
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
            closeExtensionReplaceDialog: function() {
                this.set("extensionToActivate", null), this.set("extensionToReplace", null)
            },
            closeExtensionActivationDialog: function() {
                this.set("activatedExtension", null)
            },
            replaceExtension: function() {
                var e = this,
                    t = this.get("extensionToActivate"),
                    n = this.get("extensionToReplace"),
                    l = n.get("config.slot"),
                    s = this.get("deactivateExtensionInstallation"),
                    a = this.get("activateExtensionInstallation");
                s(n).then(function() {
                    return a(t, {
                        slot: l
                    })
                }).then(function() {
                    if (!e.isDestroyed) return e.set("extensionToActivate", null), e.set("extensionToReplace", null), t.reload()
                }).then(function() {
                    e.isDestroyed || e.set("activatedExtension", t)
                })
            },
            installExtension: function(e) {
                var t = this;
                this.get("installExtension")(e).then(function(e) {
                    t.isDestroyed || t.set("extensionInstallation", e)
                })
            },
            removeExtensionInstallation: function(e) {
                this.set("installationToRemove", e)
            },
            configureExtensionInstallation: function(e) {
                this.get("configureExtensionInstallation")(e)
            },
            activateExtensionInstallation: function(e, t) {
                var n = this;
                if (t.slot) {
                    var l = this.get("activeExtensionInstallations") || [],
                        s = l.findBy("config.slot", t.slot);
                    if (s) return this.set("extensionToActivate", e), void this.set("extensionToReplace", s)
                }
                return this.get("activateExtensionInstallation")(e, t).then(function() {
                    n.isDestroyed || n.set("activatedExtension", e)
                })
            },
            deactivateExtensionInstallation: function(e) {
                this.get("deactivateExtensionInstallation")(e)
            }
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/installed-card/component", ["exports", "ember-component", "ember-computed"], function(e, t, n) {
    var l = i18n("none"),
        s = i18n("ACTIVE ({{slot}})");
    e.default = t.default.extend({
        classNames: ["mg-b-2"],
        attributeBindings: ["testSelector:data-test-selector"],
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
        activeLabel: (0, n.default)("extensionInstallation.config.slot", function() {
            var e = this.get("extensionInstallation.config.slot") || l;
            return s.replace("{{slot}}", e)
        }),
        actions: {
            onActivateClicked: function(e) {
                var t = this.get("extensionInstallation");
                this.get("activateExtensionInstallation")(t, {
                    slot: e.get("id")
                })
            },
            onActivateNewClicked: function() {
                var e = this.get("extensionInstallation");
                this.get("activateExtensionInstallation")(e, {
                    slot: null
                })
            },
            onConfigClicked: function() {
                var e = this.get("extensionInstallation");
                this.get("configureExtensionInstallation")(e)
            },
            onDeactivateClicked: function() {
                var e = this.get("extensionInstallation");
                this.get("deactivateExtensionInstallation")(e)
            },
            onUninstallClicked: function() {
                var e = this.get("extensionInstallation");
                this.get("removeExtensionInstallation")(e)
            }
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/installed-card/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "Ah4J8CKX",
        block: '{"statements":[["open-element","div",[]],["static-attr","class","brick brick--theme-white flex flex--nowrap flex--verticalCenter"],["flush-element"],["text","\\n  "],["open-element","img",[]],["dynamic-attr","src",["unknown",["extension","iconUrl"]],null],["static-attr","class","square-5 mg-r-1 flex__item flex__item--noShrink"],["static-attr","data-test-selector","ext-installed-icon"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","flex_item flex__item--grow"],["flush-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.details",["get",["extension","id"]]],null,16],["text","  "],["close-element"],["text","\\n"],["block",["if"],[["get",["extensionInstallation","isActive"]]],null,15],["close-element"],["text","\\n"],["open-element","div",[]],["dynamic-attr","class",["concat",["ext-active-indicator brick ",["helper",["if"],[["get",["extensionInstallation","isActive"]],"brick--theme-purple theme--dark"],null]," mg-b-1 flex flex--nowrap flex--verticalCenter"]]],["flush-element"],["text","\\n"],["block",["if"],[["get",["extensionInstallation","isActive"]]],null,13,12],["text","  "],["open-element","div",[]],["static-attr","class","flex__item"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["testSelector","size","iconOnly","onClick"],["ext-installed-config","small",true,["helper",["action"],[["get",[null]],"onConfigClicked"],null]]],1],["block",["common/button-element"],null,[["testSelector","size","iconOnly","onClick"],["ext-installed-uninstall","small",true,["helper",["action"],[["get",[null]],"onUninstallClicked"],null]]],0],["text","  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["append",["helper",["svg-icon"],null,[["path"],["svg/trash"]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["svg-icon"],null,[["path"],["svg/gear"]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["append",["helper",["i18n"],["Add as a new panel"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["append",["helper",["menu","balloonItem"],null,[["isSeparator"],[true]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["extensionSlots"]]],null,3],["block",["menu","balloonItem"],null,[["onClick","testSelector"],[["helper",["action"],[["get",[null]],"onActivateNewClicked",["get",["slot"]]],null],"ext-activate-new"]],2]],"locals":[]},{"statements":[["text","                "],["append",["unknown",["slot","label"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["menu","balloonItem"],null,[["onClick","testSelector"],[["helper",["action"],[["get",[null]],"onActivateClicked",["get",["slot"]]],null],"ext-activate-existing"]],5]],"locals":["slot"]},{"statements":[["block",["each"],[["get",["extensionSlots"]]],null,6],["text","\\n"],["block",["if"],[["helper",["eq"],[["get",["extension","anchor"]],"panel"],null]],null,4]],"locals":[]},{"statements":[["text","            "],["append",["helper",["i18n"],["Activate"],null],false],["text","\\n"]],"locals":[]},{"statements":[["block",["menu","button"],null,[["size"],["small"]],8],["block",["menu","balloon"],null,[["direction"],["down"]],7]],"locals":["menu"]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow"],["flush-element"],["text","\\n"],["block",["common/balloon-menu"],null,[["testSelector","isDropMenu"],["ext-installed-activate",true]],9],["text","      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow"],["flush-element"],["text","\\n        "],["open-element","span",[]],["static-attr","class","hint"],["flush-element"],["append",["helper",["i18n"],["Needs Configuration"],null],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["extensionInstallation","needsConfig"]]],null,11,10]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","flex__item flex__item--grow"],["flush-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","ext-active-indicator__icon"],["flush-element"],["close-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","ext-active-indicator__text upcase small mg-0"],["flush-element"],["append",["unknown",["activeLabel"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["i18n"],["Deactivate"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","flex_item"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["testSelector","isHollow","onClick"],["ext-installed-deactivate",true,["helper",["action"],[["get",[null]],"onDeactivateClicked"],null]]],14],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","h5",[]],["static-attr","data-test-selector","ext-installed-name"],["static-attr","class","mg-b-0"],["flush-element"],["append",["unknown",["extension","name"]],false],["close-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","pill upcase"],["flush-element"],["append",["unknown",["extension","anchorLabel"]],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-manager/installed-card/template.hbs"
        }
    })
}), define("web-client/components/dashboards/extensions/extension-manager/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "/I4HN/0t",
        block: '{"statements":[["open-element","div",[]],["static-attr","class","flex flex--nowrap"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","ext-installed-list brick brick--pd-sm brick--theme-grey mg-r-1"],["static-attr","data-test-selector","ext-installed-list"],["flush-element"],["text","\\n    "],["open-element","h4",[]],["static-attr","class","mg-b-1"],["flush-element"],["append",["helper",["i18n"],["Installed Extensions"],null],false],["close-element"],["text","\\n"],["block",["if"],[["get",["extensionInstallations"]]],null,10,8],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","brick brick--pd-sm brick--theme-grey mg-0"],["static-attr","data-test-selector","ext-available-list"],["flush-element"],["text","\\n    "],["open-element","h4",[]],["static-attr","class","mg-b-1"],["flush-element"],["append",["helper",["i18n"],["Available Extensions"],null],false],["close-element"],["text","\\n"],["block",["if"],[["get",["availableExtensions"]]],null,7,5],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["append",["helper",["dashboards/extensions/extension-dialogs"],null,[["extensionInstallation","installationToRemove","onProceed"],[["get",["extensionInstallation"]],["get",["installationToRemove"]],["get",["removeExtensionInstallation"]]]]],false],["text","\\n"],["block",["common/modal-dialog"],null,[["onClose","defaultShowModal","renderInPlace"],[["helper",["action"],[["get",[null]],"closeExtensionReplaceDialog"],null],["get",["extensionToReplace"]],false]],4],["block",["common/modal-dialog"],null,[["onClose","defaultShowModal","renderInPlace"],[["helper",["action"],[["get",[null]],"closeExtensionActivationDialog"],null],["get",["activatedExtension"]],false]],1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["i18n"],["Done"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","card pd-2"],["flush-element"],["text","\\n    "],["open-element","h5",[]],["static-attr","data-test-selector","ext-modal-header"],["flush-element"],["append",["helper",["i18n"],["Extension is now Active!"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","data-test-selector","ext-modal-message"],["flush-element"],["text","\\n      "],["append",["unknown",["activatedExtensionBodyText"]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","align-center"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","testSelector"],[["helper",["action"],[["get",[null]],"closeExtensionActivationDialog"],null],"ext-modal-proceed"]],0],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["i18n"],["Replace"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["i18n"],["Cancel"],null],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","card pd-2"],["flush-element"],["text","\\n    "],["open-element","h5",[]],["static-attr","data-test-selector","ext-modal-header"],["flush-element"],["append",["helper",["i18n"],["You are replacing an active panel"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","data-test-selector","ext-modal-message"],["flush-element"],["append",["helper",["i18n"],["Performing this action with cause the following panel to be deactivated"],null],false],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","class","mg-t-1 mg-b-2"],["flush-element"],["text","\\n      "],["append",["unknown",["extensionToReplaceBodyText"]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","p",[]],["static-attr","data-test-selector","ext-modal-message"],["flush-element"],["append",["helper",["i18n"],["Are you sure you want to proceed?"],null],false],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","align-center"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["onClick","isHollow","testSelector"],[["helper",["action"],[["get",[null]],"closeExtensionReplaceDialog"],null],true,"ext-modal-cancel"]],3],["text","       \\n"],["block",["common/button-element"],null,[["onClick","testSelector"],[["helper",["action"],[["get",[null]],"replaceExtension"],null],"ext-modal-proceed"]],2],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","p",[]],["static-attr","class","mg-b-2"],["flush-element"],["append",["helper",["i18n"],["No extensions are available to install."],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["dashboards/extensions/extension-manager/available-card"],null,[["extension","installExtension","testSelector"],[["get",["ext"]],["helper",["action"],[["get",[null]],"installExtension",["get",["ext"]]],null],"ext-available"]]],false],["text","\\n"]],"locals":["ext"]},{"statements":[["block",["each"],[["get",["availableExtensions"]]],null,6]],"locals":[]},{"statements":[["text","      "],["open-element","p",[]],["static-attr","class","mg-b-2"],["flush-element"],["append",["helper",["i18n"],["No installed extensions."],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["dashboards/extensions/extension-manager/installed-card"],null,[["extensionInstallation","availableSlots","activateExtensionInstallation","deactivateExtensionInstallation","configureExtensionInstallation","removeExtensionInstallation","testSelector"],[["get",["installation"]],["get",["availableSlots"]],["helper",["action"],[["get",[null]],"activateExtensionInstallation"],null],["helper",["action"],[["get",[null]],"deactivateExtensionInstallation"],null],["helper",["action"],[["get",[null]],"configureExtensionInstallation"],null],["helper",["action"],[["get",[null]],"removeExtensionInstallation"],null],"ext-installed"]]],false],["text","\\n"]],"locals":["installation"]},{"statements":[["block",["each"],[["get",["extensionInstallations"]]],null,9]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/components/dashboards/extensions/extension-manager/template.hbs"
        }
    })
}), define("web-client/components/extension-panel", ["exports", "ember-component", "ember-service/inject", "ember-string", "ember-computed", "ember-metal/observer"], function(e, t, n, l, s, a) {
    e.default = t.default.extend({
        extensions: (0, n.default)(),
        pubsub: (0, n.default)(),
        playerRegistry: (0, n.default)(),
        messageReceiveCount: 0,
        extensionInstallation: null,
        extension: s.default.alias("extensionInstallation.extension"),
        channel: null,
        testAllowSameOrigin: !1,
        extensionCoordinator: null,
        gameObserver: (0, a.default)("channel.game", function() {
            this.get("extensionCoordinator").setGame(this.get("channel.game"))
        }),
        iframeUrl: (0, s.default)("extensionMode", "extension.viewerUrl", "extension.configUrl", function() {
            var e = this.get("extensionMode");
            return "viewer" === e ? this.get("extension.viewerUrl") : "config" === e ? this.get("extension.configUrl") : void 0
        }),
        frameStyle: (0, s.default)("extension.panelHeight", function() {
            var e = this.get("extension.panelHeight") || 300;
            return (0, l.htmlSafe)("height: " + e + "px")
        }),
        init: function() {
            this._super.apply(this, arguments);
            var e = this.get("extension.clientId");
            this.set("pubsubControlTopicName", "extension-control." + e)
        },
        didInsertElement: function() {
            this._super.apply(this, arguments);
            var e = this.get("extensions").initExtension({
                clientId: this.get("extension.clientId"),
                token: this.get("extensionInstallation.token")
            }, this.$("iframe")[0], this.get("playerRegistry.mainPlayer.player"), this.get("extensionMode"));
            e.setGame(this.get("channel.game")), this.set("extensionCoordinator", e);
            var t = this.get("pubsubControlTopicName");
            this.get("pubsub").on(t, this, this.handlePubsub)
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
        reloadIframe: function() {
            this.get("extensionCoordinator").reloadExtension()
        },
        isUserLinked: function(e) {
            var t = JSON.parse(atob(e.split(".")[1]));
            return t && t.user_id && !0
        },
        actions: {
            toggleLinkExtension: function() {
                var e = this,
                    t = this.get("extensionInstallation.token"),
                    n = this.get("extensionInstallation.extension.clientId");
                this.isUserLinked(t) ? this.get("extensions").unlinkExtension(n, t).then(function(t) {
                    e.isDestroyed || (e.set("extensionInstallation.token", t.token), e.reloadIframe())
                }) : this.get("extensions").linkExtension(n, t).then(function(t) {
                    e.isDestroyed || (e.set("extensionInstallation.token", t.token), e.reloadIframe())
                })
            },
            flagProblem: function() {}
        }
    })
}), define("web-client/templates/components/extension-panel", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template({
        id: "c0zlltOh",
        block: '{"statements":[["open-element","div",[]],["static-attr","class","qa-panel-extension-container brick brick--theme-grey pd-0"],["flush-element"],["text","\\n"],["text","  "],["open-element","iframe",[]],["static-attr","data-test-selector","extensions-iframe-selector"],["static-attr","class","ext-panel__frame"],["dynamic-attr","src",["unknown",["iframeUrl"]],null],["dynamic-attr","sandbox",["concat",["allow-forms allow-scripts ",["helper",["if"],[["get",["testAllowSameOrigin"]],"allow-same-origin",""],null]]]],["dynamic-attr","style",["unknown",["frameStyle"]],null],["flush-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","brick brick--theme-grey flex flex--verticalCenter pd-0"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","data-test-selector","extensions-name-selector"],["static-attr","class","qa-panel-extension-name flex__item flex__item--grow mg-x-1 align-left"],["flush-element"],["text","\\n"],["block",["link-to"],["dashboards.extensions.details",["get",["extension","id"]]],null,2],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","flex__item flex__item--noGrow"],["flush-element"],["text","\\n"],["block",["common/button-element"],null,[["testSelector","class","onClick"],["link-user-button","button--icon-only",["helper",["action"],[["get",[null]],"toggleLinkExtension"],null]]],1],["block",["common/button-element"],null,[["class","onClick"],["button--icon-only",["helper",["action"],[["get",[null]],"flagProblem"],null]]],0],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["append",["helper",["svg-icon"],null,[["path"],["svg/chat-risk-flag"]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["svg-icon"],null,[["path"],["svg/glyph-views"]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["unknown",["extension","name"]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        meta: {
            moduleName: "web-client/templates/components/extension-panel.hbs"
        }
    })
});