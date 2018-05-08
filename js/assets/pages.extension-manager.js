webpackJsonp([108], {
    "448H": function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_ExtensionSearch"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "afterCursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "search"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "state"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ExtensionStateFilter"
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "extensions"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "20"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "after"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "afterCursor"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "search"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "search"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "state"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "state"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "pageInfo"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasNextPage"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasPreviousPage"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "edges"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "cursor"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "node"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 528
            }
        };
        t.loc.source = {
            body: "query ExtensionManager_ExtensionSearch($afterCursor: Cursor $search: String $state: ExtensionStateFilter) {\nextensions(first: 20 after: $afterCursor search: $search state: $state) {\npageInfo {\nhasNextPage\nhasPreviousPage\n}\nedges {\ncursor\nnode {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "9Gfr": function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            r = t("+8VM"),
            s = t("sfWM"),
            o = t("6sO2"),
            l = t("Odds"),
            d = function() {
                return a.createElement(l._8, null, a.createElement(l.Q, null, Object(o.d)("There was an error. Please try again later.", "ExtensionErrorModal")))
            };
        d.displayName = "ExtensionErrorModalPresentation";
        var c = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(s.a, null, a.createElement(d, null), a.createElement(r.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(a.Component),
            u = c;
        t.d(n, !1, function() {
            return c
        }), t.d(n, "a", function() {
            return u
        })
    },
    AI7U: function(e, n) {},
    "D/X5": function(e, n) {},
    FF3k: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            r = t("RH2O"),
            s = t("2KeS"),
            o = t("+8VM"),
            l = t("V5M+"),
            d = t("sfWM"),
            c = t("6sO2"),
            u = t("Odds"),
            m = function(e) {
                var n = e.extensionName,
                    t = e.isMonetized,
                    i = e.onCancel,
                    r = e.onConfirm;
                return a.createElement(u._8, null, a.createElement(u.Q, {
                    type: u._49.H5
                }, Object(c.d)("Are you sure you want to uninstall?", "ExtensionUninstallModalTitle")), a.createElement(u._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(u.Q, null, Object(c.d)("You are uninstalling {extensionName} ", {
                    extensionName: a.createElement(u.Q, {
                        bold: !0,
                        type: u._49.P
                    }, n)
                }, "ExtensionUninstallModal")), a.createElement(u._8, {
                    padding: {
                        top: 1
                    }
                }, a.createElement(u.Q, {
                    type: u._49.P
                }, t ? Object(c.d)("This extension enables in-extension purchases. If you uninstall this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallModal") : Object(c.d)("Are you sure you want to uninstall?", "ExtensionUninstallModal")))), a.createElement(u._8, {
                    display: u.R.Flex,
                    justifyContent: u._7.Center
                }, a.createElement(u._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(u.v, {
                    type: u.B.Hollow,
                    onClick: i
                }, Object(c.d)("Cancel", "ExtensionUninstallModal"))), a.createElement(u.v, {
                    onClick: r
                }, Object(c.d)("Uninstall", "ExtensionUninstallModal"))))
            };
        m.displayName = "ExtensionUninstallModalPresentation";
        var v = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.onConfirm = function() {
                    return i.__awaiter(n, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.props.onConfirm()];
                                case 1:
                                    return e.sent(), this.props.closeModal(), [2]
                            }
                        })
                    })
                }, n
            }
            return i.__extends(n, e), n.prototype.render = function() {
                var e = this.props,
                    n = e.extensionName,
                    t = e.isExtensionMonetized;
                return a.createElement(d.a, null, a.createElement(m, {
                    extensionName: n,
                    isMonetized: t,
                    onCancel: this.props.closeModal,
                    onConfirm: this.onConfirm
                }), a.createElement(o.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var p = Object(r.b)(null, function(e) {
            return Object(s.b)({
                closeModal: l.c
            }, e)
        })(v);
        t.d(n, !1, function() {
            return v
        }), t.d(n, "a", function() {
            return p
        })
    },
    G8hb: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return i
        }), t.d(n, "c", function() {
            return a
        }), t.d(n, "b", function() {
            return r
        }), n.g = function(e) {
            return !(!e.vendorCode || !e.sku)
        }, n.e = function(e) {
            var n = [];
            e.component && e.component.viewerURL && n.push(r.Component);
            e.panel && e.panel.viewerURL && n.push(r.Panel);
            e.videoOverlay && e.videoOverlay.viewerURL && n.push(r.VideoOverlay);
            return n
        }, n.f = function(e) {
            var n = [o.ExtensionPlatform.Web];
            e.mobile && e.mobile.viewerURL && n.push(o.ExtensionPlatform.Mobile);
            return n
        }, n.d = function(e) {
            return e.extension.id + ":" + e.extension.version
        }, n.h = function(e) {
            if (e.requiredActions) return e.requiredActions.some(function(e) {
                var n = e.type;
                return n === s.RequiresConfiguration
            });
            return !1
        };
        var i, a, r, s, o = t("BwgW");
        t.n(o);
        ! function(e) {
            e.Active = "ACTIVE", e.Inactive = "INACTIVE", e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
        }(i || (i = {})),
        function(e) {
            e.Approved = "APPROVED", e.AssetsUploaded = "ASSETS_UPLOADED", e.Deleted = "DELETED", e.Deprecated = "DEPRECATED", e.InReview = "IN_REVIEW", e.InTest = "IN_TEST", e.PendingAction = "PENDING_ACTION", e.ReadyForReview = "READY_FOR_REVIEW", e.Rejected = "REJECTED", e.Released = "RELEASED", e.Uploading = "UPLOADING", e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
        }(a || (a = {})),
        function(e) {
            e.Component = "COMPONENT", e.Hidden = "HIDDEN", e.Panel = "PANEL", e.VideoOverlay = "VIDEO_OVERLAY", e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
        }(r || (r = {})),
        function(e) {
            e.RequiresConfiguration = "REQUIRES_CONFIGURATION", e.PromptForPermissions = "PROMPT_FOR_PERMISSIONS", e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
        }(s || (s = {}))
    },
    GeUc: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_UninstallExtension"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UninstallExtensionInput"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "uninstallExtension"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 124
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_UninstallExtension ($input: UninstallExtensionInput!) {\nuninstallExtension(input: $input) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    MD1s: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_ApplyExtensionActivationsInput"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ApplyExtensionActivationsInput"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "applyExtensionActivations"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "installedExtensions"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "x"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "y"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "self"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "canActivate"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 553
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_ApplyExtensionActivationsInput ($input: ApplyExtensionActivationsInput!) {\napplyExtensionActivations(input: $input) {\ninstalledExtensions {\nid\nactivationConfig {\nslot\nstate\nanchor\nx\ny\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    Mtzm: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "EditPanel_CreatePanel"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CreatePanelInput"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "createPanel"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "panel"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ExtensionPanel"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slotID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        t.loc.source = {
            body: "mutation EditPanel_CreatePanel($input: CreatePanelInput!) {\ncreatePanel(input: $input) {\npanel {\nid\ntype\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    Nwhx: function(e, n) {},
    Oxrw: function(e, n) {},
    PJs0: function(e, n, t) {
        "use strict";
        var i;
        t.d(n, "a", function() {
                return i
            }),
            function(e) {
                e.Default = "DEFAULT", e.Extension = "EXTENSION"
            }(i || (i = {}))
    },
    SfDx: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            r = t("RH2O"),
            s = t("2KeS"),
            o = t("+8VM"),
            l = t("V5M+"),
            d = t("sfWM"),
            c = t("6sO2"),
            u = t("q7Ag"),
            m = t("Odds"),
            v = function(e) {
                var n = e.closeModal,
                    t = e.extensionClientID,
                    i = e.extensionVersion,
                    r = e.login;
                return a.createElement(m._8, null, a.createElement(m.Q, {
                    type: m._49.H5
                }, Object(c.d)("Extension Installed Successfully!", "ExtensionInstalledModal")), a.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(c.d)("Your extension will not display on your page until it is activated on the Extensions page.", "ExtensionInstalledModal")), a.createElement(m._8, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(c.d)("Your extension may require additional configuration before it can be activated.", "ExtensionInstalledModal"))), a.createElement(m.Q, null, Object(c.d)("Would you like to configure this extension now?", "ExtensionInstalledModal"))), a.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, a.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: n
                }, Object(c.d)("Continue Browsing", "ExtensionInstalledModal"))), a.createElement(m.v, {
                    linkTo: Object(u.a)(r, t, i),
                    onClick: n
                }, Object(c.d)("Configure", "ExtensionInstalledModal"))))
            };
        v.displayName = "ExtensionInstalledModalPresentation";
        var p = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return a.createElement(d.a, null, a.createElement(v, {
                    closeModal: this.props.closeModal,
                    extensionClientID: this.props.extensionClientID,
                    extensionVersion: this.props.extensionVersion,
                    login: this.props.login
                }), a.createElement(o.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var k = Object(r.b)(null, function(e) {
            return Object(s.b)({
                closeModal: l.c
            }, e)
        })(p);
        t.d(n, !1, function() {
            return p
        }), t.d(n, "a", function() {
            return k
        })
    },
    Tc6d: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return i
        });
        var i = 3
    },
    VHHT: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return r
        });
        var i = t("BwgW"),
            a = (t.n(i), t("6sO2")),
            r = function(e, n) {
                var t;
                switch (e) {
                    case i.ExtensionPlatform.Web:
                        t = n ? Object(a.d)("WEB", "LocalizeExtensionPlatform") : Object(a.d)("Web", "LocalizeExtensionPlatform");
                        break;
                    case i.ExtensionPlatform.Mobile:
                        t = n ? Object(a.d)("MOBILE", "LocalizeExtensionPlatform") : Object(a.d)("Mobile", "LocalizeExtensionPlatform");
                        break;
                    default:
                        t = ""
                }
                return t
            }
    },
    WmaG: function(e, n, t) {
        "use strict";
        var i, a = t("TToO"),
            r = t("GiK3"),
            s = t("6sO2"),
            o = t("+Znq"),
            l = t("RH2O"),
            d = t("PGY2"),
            c = t("vH/s");

        function u(e) {
            s.n.track(c.SpadeEventType.DashboardHelpInteraction, e)
        }! function(e) {
            e.OpenHelp = "open_help", e.LearnMore = "learn_more", e.OpenSendFeedback = "open_send_feedback", e.CancelFeedback = "cancel_feedback", e.SentFeedback = "sent_feedback"
        }(i || (i = {}));
        var m = t("Odds"),
            v = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.handleCancel = function() {
                        u({
                            action: i.CancelFeedback,
                            location: "dashboard/" + t.props.page
                        }), t.props.onClose()
                    }, t.handleChange = function(e) {
                        t.setState({
                            body: e.currentTarget.value
                        })
                    }, t.sendFeedback = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, n;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.setState({
                                            inFlight: !0,
                                            errorMessage: ""
                                        }), e = "https://api.twitch.tv/kraken/users/" + this.props.currentUserID + "/stats_feedbacks", [4, Object(d.c)({
                                            path: e,
                                            method: "POST",
                                            body: {
                                                message: this.state.body,
                                                page: this.props.page
                                            }
                                        })];
                                    case 1:
                                        return n = t.sent(), u({
                                            action: i.SentFeedback,
                                            location: "dashboard/" + this.props.page
                                        }), n.isError() ? this.setState({
                                            inFlight: !1,
                                            errorMessage: n.error.message
                                        }) : this.setState({
                                            body: "",
                                            inFlight: !1,
                                            errorMessage: "",
                                            successTimeout: setTimeout(this.props.onClose, 2e3)
                                        }), [2]
                                }
                            })
                        })
                    }, t.state = {
                        body: "",
                        inFlight: !1,
                        errorMessage: "",
                        successTimeout: 0
                    }, t
                }
                return a.__extends(n, e), n.prototype.componentWillUnmount = function() {
                    clearTimeout(this.state.successTimeout)
                }, n.prototype.render = function() {
                    return r.createElement(m._8, {
                        padding: 2
                    }, r.createElement(m.W, {
                        label: Object(s.d)("How can we improve this page for you?", "DashboardFeedbackForm"),
                        error: Boolean(this.state.errorMessage.length),
                        errorMessage: this.state.errorMessage
                    }, r.createElement(m._8, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(m._46, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0,
                        onChange: this.handleChange,
                        placeholder: Object(s.d)("It would help me if this page...", "DashboardFeedbackForm"),
                        rows: 4,
                        noResize: !0
                    }))), r.createElement(m._8, {
                        display: m.R.Flex,
                        flexGrow: 1,
                        flexWrap: m.U.NoWrap,
                        justifyContent: m._7.End,
                        padding: {
                            top: 2
                        }
                    }, r.createElement(m._8, {
                        padding: {
                            right: 1
                        }
                    }, r.createElement(m.v, {
                        onClick: this.handleCancel,
                        type: m.B.Text,
                        "data-test-selector": "feedback-form-cancel"
                    }, Object(s.d)("Cancel", "DashboardFeedbackForm"))), r.createElement(m.v, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0 || 0 === this.state.body.length,
                        onClick: this.sendFeedback,
                        "data-test-selector": "feedback-form-submit"
                    }, this.state.successTimeout > 0 ? Object(s.d)("Sent", "DashboardFeedbackForm") : Object(s.d)("Send Feedback", "DashboardFeedbackForm"))))
                }, n
            }(r.Component);
        var p = Object(l.b)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            })(v),
            k = (t("Nwhx"), function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.selectFeedbackForm = function() {
                        t.setState({
                            isFeedbackFormSelected: !0
                        }), u({
                            action: i.OpenSendFeedback,
                            location: "dashboard/" + t.props.page
                        })
                    }, t.unselectFeedbackForm = function() {
                        t.setState({
                            isFeedbackFormSelected: !1
                        })
                    }, t.handleLearnMoreClick = function() {
                        u({
                            action: i.LearnMore,
                            location: "dashboard/" + t.props.page
                        })
                    }, t.handleToggle = function(e) {
                        e ? t.setState({
                            isFeedbackFormSelected: !1
                        }) : u({
                            action: i.OpenHelp,
                            location: "dashboard/" + t.props.page
                        })
                    }, t.state = {
                        isFeedbackFormSelected: !1
                    }, t
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    var e;
                    return e = this.state.isFeedbackFormSelected ? r.createElement(p, {
                        page: this.props.page,
                        onClose: this.unselectFeedbackForm,
                        key: 0
                    }) : r.createElement(m._35, {
                        padding: {
                            top: .5,
                            bottom: .5
                        },
                        color: m.K.Base
                    }, r.createElement(m._6, {
                        linkTo: this.props.learnMoreUrl,
                        onClick: this.handleLearnMoreClick,
                        targetBlank: !0
                    }, r.createElement(m._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(m.Q, null, Object(s.d)("Learn More", "DashboardHelpMenu")))), r.createElement(m._6, {
                        onClick: this.selectFeedbackForm
                    }, r.createElement(m._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(m.Q, null, Object(s.d)("Send Feedback", "DashboardHelpMenu"))))), r.createElement(m._35, {
                        className: "help-menu",
                        position: m._15.Absolute,
                        margin: {
                            bottom: 2,
                            right: 2
                        },
                        zIndex: m._62.Above,
                        background: m.n.Overlay,
                        elevation: 3,
                        attachBottom: !0,
                        attachRight: !0
                    }, r.createElement(o.a, {
                        onToggle: this.handleToggle,
                        tooltipProps: {
                            align: m._53.Right,
                            direction: m._54.Top,
                            label: Object(s.d)("Help & Feedback", "DashboardHelpMenu"),
                            offsetX: "6px",
                            offsetY: "10px"
                        }
                    }, r.createElement(m.w, {
                        ariaLabel: Object(s.d)("Feedback", "DashboardHelpMenu"),
                        icon: m._25.QuestionMark,
                        "data-a-target": "help-button",
                        overlay: !0
                    }), r.createElement(m.q, {
                        direction: m.r.TopRight,
                        size: this.state.isFeedbackFormSelected ? m.s.Large : m.s.Small,
                        "data-a-target": "help-balloon",
                        offsetX: "6px"
                    }, e)))
                }, n
            }(r.Component));
        t.d(n, "a", function() {
            return k
        })
    },
    XwK1: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_InstallExtension"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "InstallExtensionInput"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "installExtension"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "installedExtension"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "self"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "canActivate"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 491
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_InstallExtension ($input: InstallExtensionInput!) {\ninstallExtension(input: $input) {\ninstalledExtension {\nid\nactivationConfig {\nslot\nstate\nanchor\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    deLJ: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_ActivateExtension"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ActivateExtensionInput"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "activateExtension"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "installedExtensions"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "redirectURI"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "self"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "canActivate"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 532
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_ActivateExtension ($input: ActivateExtensionInput!) {\nactivateExtension(input: $input) {\ninstalledExtensions {\nid\nactivationConfig {\nslot\nstate\nanchor\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\nredirectURI\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    eyrD: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_InstalledExtensionList"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "cheer"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isExtensionsApprover"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isExtensionsDeveloper"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "installedExtensions"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "x"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "y"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "aspectWidth"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "aspectHeight"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hasZoom"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "zoomPixels"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "redirectURI"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "self"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "canActivate"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "panels"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ExtensionPanel"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slotID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 670
            }
        };
        t.loc.source = {
            body: "query ExtensionManager_InstalledExtensionList {\ncurrentUser {\nid\ncheer {\nid\n}\nroles {\nisAffiliate\nisPartner\nisExtensionsApprover\nisExtensionsDeveloper\n}\ninstalledExtensions {\nid\nactivationConfig {\nslot\nstate\nanchor\nx\ny\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\naspectWidth\naspectHeight\nhasZoom\nzoomPixels\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\nredirectURI\ntype\n}\nself {\ncanActivate\n}\n}\npanels {\nid\ntype\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    hd33: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_DeactivateExtension"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DeactivateExtensionInput"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "deactivateExtension"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "installedExtension"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "redirectURI"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "self"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "canActivate"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 537
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_DeactivateExtension ($input: DeactivateExtensionInput!) {\ndeactivateExtension(input: $input) {\ninstalledExtension {\nid\nactivationConfig {\nslot\nstate\nanchor\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\nredirectURI\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    nP5L: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return r
        });
        var i = t("6sO2"),
            a = t("G8hb"),
            r = function(e, n) {
                var t;
                switch (e) {
                    case a.b.Component:
                        t = n ? Object(i.d)("COMPONENT", "ExtensionAnchorType") : Object(i.d)("Component", "ExtensionAnchorType");
                        break;
                    case a.b.Panel:
                        t = n ? Object(i.d)("PANEL", "ExtensionAnchorType") : Object(i.d)("Panel", "ExtensionAnchorType");
                        break;
                    case a.b.VideoOverlay:
                        t = n ? Object(i.d)("OVERLAY", "ExtensionAnchorType") : Object(i.d)("Overlay", "ExtensionAnchorType");
                        break;
                    default:
                        t = ""
                }
                return t
            }
    },
    sfWM: function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("Odds"),
            r = (t("Oxrw"), function(e) {
                return i.createElement(a._35, {
                    className: e.className || "extension-manager-modal-container",
                    background: a.n.Base,
                    padding: 2
                }, e.children)
            });
        r.displayName = "ModalContainer", t.d(n, "a", function() {
            return r
        })
    },
    yJuJ: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("TToO"),
            a = t("RH2O"),
            r = t("2KeS"),
            s = t("V5M+"),
            o = t("Aj/L"),
            l = t("GiK3"),
            d = t("+8VM"),
            c = t("sfWM"),
            u = t("6sO2"),
            m = t("Odds"),
            v = function(e) {
                var n = e.activations,
                    t = e.onConfirm;
                return l.createElement(m._8, null, l.createElement(m.Q, {
                    type: m._49.H5
                }, Object(u.d)("{count, plural, one {Extension is now Active!} other {Extensions are now Active!}}", {
                    count: n.length
                }, "ExtensionActivatedModal")), l.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, n.map(function(e) {
                    var n = e.extensionName,
                        t = e.slot;
                    return l.createElement(m.Q, {
                        key: t
                    }, Object(u.d)("The extension {extensionName} is now active on slot {anchorSlot}", {
                        extensionName: l.createElement(m.Q, {
                            bold: !0,
                            type: m._49.Span
                        }, n),
                        anchorSlot: l.createElement(m.Q, {
                            bold: !0,
                            type: m._49.Span,
                            transform: m._48.Uppercase
                        }, t)
                    }, "ExtensionActivatedModal"))
                })), l.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, l.createElement(m.v, {
                    onClick: t
                }, Object(u.d)("Done", "ExtensionActivatedModal"))))
            };
        v.displayName = "ExtensionActivatedModalPresentation";
        var p = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return l.createElement(c.a, null, l.createElement(v, {
                    activations: this.props.activations,
                    onConfirm: this.props.closeModal
                }), l.createElement(d.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(l.Component);
        var k = Object(a.b)(null, function(e) {
                return Object(r.b)({
                    closeModal: s.c
                }, e)
            })(p),
            E = t("BwgW"),
            g = 768,
            h = 432,
            b = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    t.renderPositionPreview = function() {
                        var e = t.state.currentActivationSettings,
                            n = t.getSlotListSorted().map(function(n) {
                                var t = e[n],
                                    i = t.componentConfig,
                                    a = t.installationID,
                                    r = t.x,
                                    s = t.y,
                                    o = Object(E.getComponentSizeFromView)(g, h, {
                                        aspectHeight: i.aspectHeight,
                                        aspectWidth: i.aspectWidth,
                                        zoom: i.hasZoom,
                                        zoomPixels: i.zoomPixels || E.DefaultZoomPixelWidth
                                    }),
                                    d = Object(E.getComponentPositionFromView)(g, h, {
                                        x: 100 * r,
                                        y: 100 * s
                                    }),
                                    c = {
                                        top: d.y + "px",
                                        left: d.x + "px",
                                        height: o.height + "px",
                                        width: o.width + "px"
                                    };
                                return l.createElement("div", {
                                    key: a,
                                    className: "extension-component-preview",
                                    style: c
                                })
                            });
                        return l.createElement(m._2, {
                            position: m._15.Relative
                        }, l.createElement("div", {
                            className: "extension-component-player-preview",
                            style: {
                                width: g,
                                height: h
                            }
                        }, n))
                    }, t.renderCoordinateInputs = function() {
                        var e = t.state.currentActivationSettings;
                        return t.getSlotListSorted().map(function(n) {
                            var i = e[n],
                                a = i.componentConfig,
                                r = i.extensionName,
                                s = i.x,
                                o = i.y,
                                d = t.getComponentMaxCoordinates(a),
                                c = d.maxX,
                                u = d.maxY;
                            return l.createElement(m._8, {
                                key: n
                            }, l.createElement(m._8, {
                                padding: 1
                            }, l.createElement(m.Q, {
                                bold: !0
                            }, n, " : ", r)), l.createElement(m._8, {
                                padding: 1
                            }, l.createElement(m.W, {
                                label: "X",
                                orientation: m.X.Horizontal
                            }, l.createElement(m._4, {
                                type: m._5.Number,
                                value: s.toString(),
                                min: 0,
                                max: c,
                                step: .01,
                                onChange: t.onCoordinateChange,
                                "data-coordinate": "x",
                                "data-slot": n,
                                name: n + ":x"
                            }))), l.createElement(m._8, {
                                padding: 1
                            }, l.createElement(m.W, {
                                label: "Y",
                                orientation: m.X.Horizontal
                            }, l.createElement(m._4, {
                                type: m._5.Number,
                                value: o.toString(),
                                min: 0,
                                max: u,
                                step: .01,
                                onChange: t.onCoordinateChange,
                                "data-coordinate": "y",
                                "data-slot": n,
                                name: n + ":y"
                            }))))
                        })
                    }, t.activateComponentsWithCurrentSettings = function() {
                        var e = t.state.currentActivationSettings,
                            n = t.getSlotListSorted().map(function(n) {
                                var t = e[n];
                                return {
                                    installationID: t.installationID,
                                    component: {
                                        slot: n,
                                        x: 100 * t.x,
                                        y: 100 * t.y
                                    }
                                }
                            });
                        t.props.onConfirm(n), t.props.closeModal()
                    }, t.onCoordinateChange = function(e) {
                        var n = e.target.value,
                            a = e.currentTarget.name.split(":"),
                            r = a[0],
                            s = a[1];
                        if (r && s) {
                            var o = parseFloat(n) || 0,
                                l = i.__assign({}, t.state.currentActivationSettings[r]),
                                d = l.componentConfig;
                            if ("x" === s) {
                                var c = t.getComponentMaxCoordinates(d).maxX,
                                    u = Math.max(0, Math.min(o, c));
                                l.x = u
                            } else if ("y" === s) {
                                var m = t.getComponentMaxCoordinates(d).maxY;
                                u = Math.max(0, Math.min(o, m));
                                l.y = u
                            }
                            var v, p = i.__assign({}, t.state.currentActivationSettings, ((v = {})[r] = l, v));
                            t.setState({
                                currentActivationSettings: p
                            })
                        }
                    };
                    var a = n.activatedComponentData,
                        r = n.idToActivate,
                        s = n.extensionNameToActivate,
                        o = n.slotToActivate,
                        d = n.componentConfigToActivate,
                        c = a.reduce(function(e, n) {
                            return n.installationID === r ? e : (e[n.slot] = i.__assign({}, n, {
                                x: n.x / 100,
                                y: n.y / 100
                            }), e)
                        }, {});
                    return c[o] = {
                        installationID: r,
                        extensionName: s,
                        componentConfig: d,
                        slot: o,
                        x: 0,
                        y: 0
                    }, t.state = {
                        currentActivationSettings: c
                    }, t
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return l.createElement(m._8, null, l.createElement(m.Q, {
                        type: m._49.H5
                    }, Object(u.d)("Activate a Component Extension", "ExtensionComponentActivateModal")), l.createElement(m._35, {
                        borderTop: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, this.renderPositionPreview()), l.createElement(m._35, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        },
                        display: m.R.Flex,
                        flexDirection: m.T.Row
                    }, this.renderCoordinateInputs()), l.createElement(m._8, {
                        display: m.R.Flex,
                        justifyContent: m._7.Center
                    }, l.createElement(m._8, {
                        padding: {
                            right: 1
                        }
                    }, l.createElement(m.v, {
                        type: m.B.Hollow,
                        onClick: this.props.closeModal
                    }, Object(u.d)("Cancel", "ExtensionComponentActivateModal"))), l.createElement(m.v, {
                        onClick: this.activateComponentsWithCurrentSettings
                    }, Object(u.d)("Activate", "ExtensionComponentActivateModal"))))
                }, n.prototype.getComponentMaxCoordinates = function(e) {
                    return {
                        maxX: 100 - e.aspectWidth / 100,
                        maxY: 100 - e.aspectHeight / 100
                    }
                }, n.prototype.getSlotListSorted = function() {
                    return Object.keys(this.state.currentActivationSettings).sort()
                }, n
            }(l.Component),
            x = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return l.createElement(c.a, {
                        className: "extension-manager-modal-container--expand"
                    }, l.createElement(b, {
                        activatedComponentData: this.props.activatedComponentData,
                        componentConfigToActivate: this.props.componentConfigToActivate,
                        extensionNameToActivate: this.props.extensionNameToActivate,
                        idToActivate: this.props.idToActivate,
                        slotToActivate: this.props.slotToActivate,
                        onConfirm: this.props.onConfirm,
                        closeModal: this.props.closeModal
                    }), l.createElement(d.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(l.Component);
        var f = Object(a.b)(null, function(e) {
                return Object(r.b)({
                    closeModal: s.c
                }, e)
            })(x),
            N = function(e) {
                var n = e.extensionName,
                    t = e.onCancel,
                    i = e.onConfirm;
                return l.createElement(m._8, null, l.createElement(m.Q, {
                    type: m._49.H5
                }, Object(u.d)("Are you sure you want to deactivate?", "ExtensionDeactivateMonetizedModal")), l.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, l.createElement(m.Q, null, Object(u.d)("You are deactivating {extensionName} ", {
                    extensionName: l.createElement(m.Q, {
                        bold: !0,
                        type: m._49.P
                    }, n)
                }, "ExtensionDeactivateMonetizedModal")), l.createElement(m._8, {
                    padding: {
                        top: 1
                    }
                }, l.createElement(m.Q, {
                    type: m._49.P
                }, Object(u.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivateMonetizedModal")))), l.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, l.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, l.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: t
                }, Object(u.d)("Cancel", "ExtensionDeactivateMonetizedModal"))), l.createElement(m.v, {
                    onClick: i
                }, Object(u.d)("Deactivate", "ExtensionDeactivateMonetizedModal"))))
            };
        N.displayName = "ExtensionDeactivateMonetizedModalPresentation";
        var y = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.onConfirm = function() {
                    return i.__awaiter(n, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.props.onConfirm(this.props.monetizedInstallation)];
                                case 1:
                                    return e.sent(), this.props.closeModal(), [2]
                            }
                        })
                    })
                }, n
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return l.createElement(c.a, null, l.createElement(N, {
                    extensionName: this.props.monetizedInstallation.extension.name,
                    onCancel: this.props.closeModal,
                    onConfirm: this.onConfirm
                }), l.createElement(d.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(l.Component);
        var S = Object(a.b)(null, function(e) {
                return Object(r.b)({
                    closeModal: s.c
                }, e)
            })(y),
            _ = t("9Gfr"),
            F = t("SfDx"),
            C = function(e) {
                var n = e.existingExtensionName,
                    t = e.activationSlot,
                    i = e.isExistingExtensionMonetized,
                    a = e.closeModal,
                    r = e.onConfirm;
                return l.createElement(m._8, null, l.createElement(m.Q, {
                    type: m._49.H5
                }, Object(u.d)("You are replacing an active extension", "ExtensionReplacementModal")), l.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, l.createElement(m.Q, null, Object(u.d)("Performing this action will cause the following extension to be deactivated", "ExtensionReplacementModal")), l.createElement(m._8, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(m.Q, null, Object(u.d)("{extensionName} on {anchorSlot}", {
                    extensionName: l.createElement(m.Q, {
                        bold: !0,
                        type: m._49.Span
                    }, n),
                    anchorSlot: l.createElement(m.Q, {
                        bold: !0,
                        type: m._49.Span,
                        transform: m._48.Uppercase
                    }, t)
                }, "ExtensionReplacementModal"))), l.createElement(m.Q, {
                    type: m._49.P
                }, i ? Object(u.d)("This extension enables in-extension purchases. If you replace this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionReplacementModal") : Object(u.d)("Are you sure you want to proceed?", "ExtensionReplacementModal"))), l.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, l.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, l.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: a
                }, Object(u.d)("Cancel", "ExtensionReplacementModal"))), l.createElement(m.v, {
                    onClick: r
                }, Object(u.d)("Replace", "ExtensionReplacementModal"))))
            };
        C.displayName = "ExtensionReplacementModalPresentation";
        var O = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.onConfirm = function() {
                    n.props.onConfirm(), n.props.closeModal()
                }, n
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return l.createElement(c.a, null, l.createElement(C, {
                    existingExtensionName: this.props.existingExtensionName,
                    isExistingExtensionMonetized: this.props.isExistingExtensionMonetized,
                    activationSlot: this.props.activationSlot,
                    closeModal: this.props.closeModal,
                    onConfirm: this.onConfirm
                }), l.createElement(d.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(l.Component);
        var A = Object(a.b)(null, function(e) {
                return Object(r.b)({
                    closeModal: s.c
                }, e)
            })(O),
            R = t("FF3k"),
            w = t("3zLD"),
            D = t("CIox"),
            I = t("N221"),
            L = t("7vx8"),
            M = t("j7/Y"),
            U = t("oIkB"),
            P = t("w9tK"),
            j = t("vH/s"),
            T = t("G8hb"),
            B = t("XwK1"),
            Q = t("GeUc"),
            V = t("q7Ag"),
            W = t("CSlQ"),
            z = t("PJs0"),
            H = t("WmaG"),
            G = t("zCIC"),
            q = t("F8kA"),
            K = t("+Znq"),
            Y = t("nP5L"),
            $ = t("VHHT"),
            J = function(e) {
                return e.anchorType ? l.createElement(m._12, {
                    label: Object(Y.a)(e.anchorType, !0)
                }) : e.mobile ? l.createElement(m._12, {
                    label: Object($.a)(E.ExtensionPlatform.Mobile, !0)
                }) : null
            };
        J.displayName = "AnchorPill";
        var X = function(e) {
            var n;
            switch (e.state) {
                case T.c.InTest:
                    n = Object(u.d)("TESTING", "ExtensionStatusPill");
                    break;
                case T.c.ReadyForReview:
                    n = Object(u.d)("READY FOR REVIEW", "ExtensionStatusPill");
                    break;
                case T.c.InReview:
                    n = Object(u.d)("IN REVIEW", "ExtensionStatusPill");
                    break;
                case T.c.Rejected:
                    n = Object(u.d)("REJECTED", "ExtensionStatusPill");
                    break;
                case T.c.Approved:
                    n = Object(u.d)("APPROVED", "ExtensionStatusPill");
                    break;
                case T.c.Deprecated:
                    n = Object(u.d)("DEPRECATED", "ExtensionStatusPill");
                    break;
                case T.c.PendingAction:
                    n = Object(u.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                    break;
                case T.c.Uploading:
                    n = Object(u.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                    break;
                case T.c.AssetsUploaded:
                    n = Object(u.d)("ASSETS UPLOADED", "ExtensionStatusPill");
                    break;
                default:
                    n = ""
            }
            return l.createElement(m._12, {
                type: m._13.Brand,
                label: n
            })
        };
        X.displayName = "ExtensionStatusPill";
        t("AI7U");
        var Z = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props.extension,
                            t = Object(T.e)(e.views).map(function(e) {
                                return l.createElement(m._8, {
                                    key: e,
                                    display: m.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, l.createElement(J, {
                                    anchorType: e
                                }))
                            });
                        return Object(T.f)(e.views).includes(E.ExtensionPlatform.Mobile) && t.push(l.createElement(m._8, {
                            key: "mobile",
                            display: m.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, l.createElement(J, {
                            mobile: !0
                        }))), t
                    }, n.renderMonetizableMessage = function() {
                        var e = Object(u.d)("In-Extension Purchases", "AvailableExtensionCard");
                        return l.createElement(m._8, {
                            textAlign: m._45.Center
                        }, l.createElement(K.a, null, l.createElement("a", null, e), l.createElement(m.q, {
                            direction: m.r.LeftCenter,
                            size: m.s.Large
                        }, l.createElement(m._8, {
                            padding: 1,
                            textAlign: m._45.Left
                        }, l.createElement(m.Q, {
                            type: m._49.H4
                        }, e), l.createElement(m._8, {
                            padding: {
                                top: .5
                            }
                        }, l.createElement(m.Q, {
                            type: m._49.P
                        }, Object(u.d)("This extension enables the sale of digital goods. You may be eligible for a revenue share.", "AvailableExtensionCard"), l.createElement(m._2, {
                            padding: {
                                x: .5
                            }
                        }, l.createElement("a", {
                            rel: "noopener",
                            target: "_blank",
                            href: "https://help.twitch.tv/customer/portal/articles/2901058-earning-revenue-from-in-extension-purchases-beta"
                        }, n.learnMoreMessage()))))))))
                    }, n.renderBitsMessage = function() {
                        var e = Object(u.d)("In-Extension Bits", "AvailableExtensionCard");
                        return l.createElement(m._8, {
                            textAlign: m._45.Center
                        }, l.createElement(K.a, null, l.createElement("a", null, e), l.createElement(m.q, {
                            direction: m.r.LeftCenter,
                            size: m.s.Large
                        }, l.createElement(m._8, {
                            padding: 1,
                            textAlign: m._45.Left
                        }, l.createElement(m._8, {
                            display: m.R.Flex,
                            alignItems: m.c.Center
                        }, l.createElement(m._24, {
                            asset: m._25.Bits
                        }), l.createElement(m._8, {
                            display: m.R.InlineBlock,
                            padding: {
                                left: .5
                            }
                        }, l.createElement(m.Q, {
                            type: m._49.H4
                        }, e))), l.createElement(m._8, {
                            padding: {
                                top: .5
                            }
                        }, l.createElement(m.Q, {
                            type: m._49.P
                        }, Object(u.d)("This extension enables the use of Bits. For each eligible use of Bits in this extension, subject to Twitch’s legal terms and policies, the extension developer and the streamer will receive 20% and 80%, respectively, of 1 U.S. cent per Bit. You as a streamer may be eligible for a revenue share if you are a partner or an affiliate.", "AvailableExtensionCard"), l.createElement(m._8, null, l.createElement("a", {
                            rel: "noopener",
                            target: "_blank",
                            href: "https://help.twitch.tv/customer/portal/articles/2927987-earning-revenue-from-in-extension-bits-beta"
                        }, n.learnMoreMessage()))))))))
                    }, n.learnMoreMessage = function() {
                        return Object(u.d)("Learn More.", "AvailableExtensionCard")
                    }, n.onInstall = function() {
                        n.props.onInstall(n.props.extension)
                    }, n.onCardImageError = function() {
                        n.setState({
                            hasCardImageError: !0
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e, n = this.props,
                        t = n.isInstalled,
                        i = n.isChannelCheeringEnabled,
                        a = n.extension,
                        r = a.clientID,
                        s = a.version,
                        o = Object(u.d)("Install", "AvailableExtensionCard");
                    if (a.state === T.c.Released && a.isBitsEnabled && !i) {
                        var d = Object(u.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "AvailableExtensionCard");
                        e = l.createElement(m._52, {
                            label: d,
                            direction: m._54.Left
                        }, l.createElement(m.v, {
                            onClick: this.onInstall,
                            disabled: !0
                        }, o))
                    } else e = l.createElement(m.v, {
                        onClick: this.onInstall
                    }, o);
                    return l.createElement(m._35, {
                        display: m.R.Flex,
                        flexWrap: m.U.NoWrap,
                        justifyContent: m._7.Between,
                        background: m.n.Base,
                        padding: {
                            left: 1
                        },
                        flexGrow: 1,
                        border: !0
                    }, l.createElement(m.C, {
                        row: !0,
                        border: !1
                    }, l.createElement(m.E, {
                        alt: a.name,
                        src: this.state.hasCardImageError ? u.a.defaultAvatarURL : a.iconURL,
                        aspect: m.l.Aspect1x1,
                        size: m.F.Size6,
                        onError: this.onCardImageError
                    }), l.createElement(m.D, null, l.createElement(m._8, {
                        padding: 1
                    }, l.createElement(m.Q, {
                        type: m._49.H4
                    }, a.name), l.createElement(m.Q, {
                        type: m._49.Span,
                        color: m.K.Alt2
                    }, a.authorName), l.createElement(m.Q, {
                        type: m._49.P
                    }, a.summary), this.renderAnchorTypePills(), a.state !== T.c.Released && l.createElement(X, {
                        state: a.state
                    })))), l.createElement(m._35, {
                        borderLeft: !0,
                        display: m.R.Flex,
                        alignItems: m.c.Center,
                        justifyContent: m._7.Center,
                        flexGrow: 0,
                        flexShrink: 0,
                        margin: {
                            y: 1
                        }
                    }, l.createElement(m._8, {
                        className: "available-extension-card__buttons"
                    }, l.createElement(m._8, {
                        display: m.R.Flex,
                        flexWrap: m.U.NoWrap,
                        justifyContent: m._7.Center,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, l.createElement(q.a, {
                        to: Object(V.c)(r, s)
                    }, l.createElement(m.v, {
                        type: m.B.Hollow
                    }, Object(u.d)("Details", "AvailableExtensionCard"))), l.createElement(m._8, {
                        padding: {
                            left: 1
                        }
                    }, t ? l.createElement(m.v, {
                        disabled: !0
                    }, Object(u.d)("Installed", "AvailableExtensionCard")) : e)), a.isBitsEnabled && this.renderBitsMessage(), Object(T.g)(a) && this.renderMonetizableMessage())))
                }, n
            }(l.Component),
            ee = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onSearchInputChange = function(e) {
                        var t = e.target.value;
                        n.props.searchQuery !== t && n.props.onSearchQueryChange(t)
                    }, n.onReleasedCheckboxChange = function(e) {
                        var t = e.target.checked;
                        n.props.showReleasedOnly !== t && n.props.onShowReleasedOnlyChange(t)
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.canLoadMore,
                        t = e.displayShowReleasedOnlyCheckbox,
                        i = e.extensions,
                        a = e.installedExtensions,
                        r = e.isChannelCheeringEnabled,
                        s = e.isLoading,
                        o = e.loadMore,
                        d = e.onInstall,
                        c = e.searchQuery,
                        v = e.showReleasedOnly;
                    return l.createElement(m._35, {
                        border: !0,
                        background: m.n.Alt,
                        padding: 1,
                        fullWidth: !0
                    }, l.createElement(m._8, {
                        display: m.R.Flex,
                        flexWrap: m.U.Wrap
                    }, l.createElement(m._8, {
                        display: m.R.Flex,
                        justifyContent: m._7.Between,
                        alignItems: m.c.Baseline,
                        flexGrow: 4,
                        padding: {
                            bottom: .5,
                            right: 1
                        }
                    }, l.createElement(m._8, {
                        display: m.R.Flex,
                        alignItems: m.c.Baseline,
                        flexWrap: m.U.NoWrap,
                        padding: {
                            right: 1
                        }
                    }, l.createElement(m._8, {
                        padding: {
                            right: 1
                        }
                    }, l.createElement(m.Q, {
                        type: m._49.H4,
                        noWrap: !0
                    }, Object(u.d)("Available Extensions", "AvailableExtensionList"))), l.createElement(m.Q, {
                        type: m._49.Span,
                        color: m.K.Alt2,
                        noWrap: !0
                    }, Object(u.d)("(Sorted by Popularity)", "AvailableExtensionList"))), t && l.createElement(m.J, {
                        label: Object(u.d)("Show only released", "AvailableExtensionList"),
                        onChange: this.onReleasedCheckboxChange,
                        checked: v
                    })), l.createElement(m._8, {
                        flexGrow: 1
                    }, l.createElement(m._27, {
                        placeholder: Object(u.d)("Filter extensions", "AvailableExtensionList"),
                        value: this.props.searchQuery,
                        onChange: this.onSearchInputChange
                    }))), l.createElement(m._8, {
                        padding: {
                            top: 1
                        },
                        fullWidth: !0
                    }, i.map(function(e) {
                        var n = void 0 !== a.find(function(n) {
                            return n.extension.id === e.id
                        });
                        return l.createElement(m._8, {
                            key: e.id + e.version,
                            padding: {
                                bottom: 1
                            }
                        }, l.createElement(Z, {
                            isInstalled: n,
                            extension: e,
                            isChannelCheeringEnabled: r,
                            onInstall: d
                        }))
                    }), l.createElement(G.a, {
                        key: c + v,
                        pixelThreshold: 200,
                        enabled: n(),
                        loadMore: o
                    }), !s && 0 === i.length && l.createElement(m.Q, {
                        type: m._49.P
                    }, Object(u.d)("No extensions are available to install.", "AvailableExtensionList"))))
                }, n
            }(l.Component),
            ne = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.onDismiss = function() {
                        t.setState(function(e) {
                            return i.__assign({}, e, {
                                dismissed: !0
                            })
                        }, function() {
                            u.l.set(t.props.dismissedStorageKey, !0)
                        })
                    }, t.state = {
                        dismissed: u.l.get(n.dismissedStorageKey, !1),
                        enabled: u.b.get(n.enabledDynamicKey, !1)
                    }, t
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return this.state.enabled ? this.state.dismissed ? null : l.createElement(m._35, {
                        alignItems: m.c.Center,
                        "data-test-selector": "announcement-banner",
                        display: m.R.Flex,
                        flexDirection: m.T.Column,
                        justifyContent: m._7.Around,
                        background: m.n.Base,
                        padding: 1,
                        position: m._15.Relative,
                        margin: {
                            top: .5
                        },
                        border: !0
                    }, l.createElement(m._8, {
                        position: m._15.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, l.createElement(m.w, {
                        ariaLabel: "close",
                        "data-test-selector": "announcement-banner-dismiss",
                        icon: m._25.Close,
                        onClick: this.onDismiss
                    })), this.props.children) : null
                }, n
            }(l.Component),
            te = function() {
                return l.createElement(ne, {
                    dismissedStorageKey: "extensions_dashboard_bits_banner_dismissed",
                    enabledDynamicKey: "extensions_bits_banner_enabled"
                }, l.createElement(m.Q, {
                    fontSize: m.V.Size5,
                    type: m._49.P
                }, Object(u.d)("Your viewers can now use Bits in Extensions to power amazing new experiences on Twitch. Use Bits-enabled Extensions to keep your audience engaged and grow your revenue.", "BitsAnnouncementBanner"), " ", l.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://blog.twitch.tv/bits-in-extensions-a036151cc309"
                }, Object(u.d)("Learn more.", "BitsAnnouncementBanner"))))
            };
        te.displayName = "BitsAnnouncementBanner";
        var ie = t("Tc6d"),
            ae = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.renderAnchorOptions = function() {
                        var e = n.props,
                            t = e.installedExtension,
                            i = e.availableSlots,
                            a = t.extension.views,
                            r = Object(T.e)(a),
                            s = [];
                        if (r.includes(T.b.Component)) {
                            var o = n.renderComponentAnchorOptions(i);
                            o.length && s.push(o)
                        }
                        if (r.includes(T.b.VideoOverlay)) {
                            var d = n.renderOverlayAnchorOptions(i);
                            d.length && s.push(d)
                        }
                        if (r.includes(T.b.Panel)) {
                            var c = n.renderPanelAnchorOptions(i);
                            c.length && s.push(c)
                        }
                        return t.activationConfig.state === T.a.Active && s.push(n.renderDeactivate()), s.reduce(function(e, n, t) {
                            var i = l.createElement(m._35, {
                                key: t,
                                borderTop: !0,
                                margin: {
                                    top: .5
                                },
                                padding: {
                                    top: .5
                                }
                            });
                            return 0 === e.length ? [n] : e.concat([i, n])
                        }, [])
                    }, n.renderActivePresence = function(e) {
                        return l.createElement(m._8, {
                            display: m.R.Flex,
                            flexWrap: m.U.NoWrap,
                            alignItems: m.c.Center
                        }, l.createElement(m._16, {
                            status: m._17.Online
                        }), l.createElement(m._8, {
                            padding: {
                                left: 1
                            }
                        }, Object(u.d)("Active {slot}", {
                            slot: e.toUpperCase()
                        }, "ActivateExtensionDropdown")))
                    }, n.renderDeactivate = function() {
                        return l.createElement(m._6, {
                            key: "deactivate",
                            blurAfterClick: !0,
                            onClick: n.onDeactivate
                        }, l.createElement(m._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(u.d)("Deactivate", "ActivateExtensionDropdown")))
                    }, n.renderComponentAnchorOptions = function(e) {
                        return e.components.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, T.b.Component);
                            return i && e.push(i), e
                        }, [])
                    }, n.renderOverlayAnchorOptions = function(e) {
                        return e.overlays.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, T.b.VideoOverlay);
                            return i && e.push(i), e
                        }, [])
                    }, n.renderPanelAnchorOptions = function(e) {
                        var t = e.panels.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, T.b.Panel);
                            return i && e.push(i), e
                        }, []);
                        return e.panels.length < ie.a && t.push(l.createElement(m._6, {
                            blurAfterClick: !0,
                            onClick: n.onCreatePanelAndActivate
                        }, l.createElement(m._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(u.d)("Add as a new panel", "ActivateExtensionDropdown")))), t
                    }, n.renderSetAnchorLocationInteractable = function(e, t) {
                        var i = n.props.installedExtension.activationConfig;
                        return i.state === T.a.Active && i.slot === e ? null : l.createElement(m._6, {
                            key: e,
                            blurAfterClick: !0,
                            onClick: n.onActivate,
                            "data-slot": e,
                            "data-anchor": t
                        }, l.createElement(m._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(u.d)("Set as {slot}", {
                            slot: e.toUpperCase()
                        }, "ActivateExtensionDropdown")))
                    }, n.onCreatePanelAndActivate = function() {
                        n.props.onCreatePanelAndActivate(n.props.installedExtension)
                    }, n.onActivate = function(e) {
                        var t = n.props,
                            i = t.installedExtension,
                            a = t.onActivate,
                            r = t.onActivateComponent,
                            s = e.currentTarget.dataset,
                            o = s.slot,
                            l = s.anchor;
                        if (o && l) {
                            if (l === T.b.Component) return void r(i, o);
                            a(i, o, l)
                        }
                    }, n.onDeactivate = function() {
                        n.props.onDeactivate(n.props.installedExtension), n.dropdown && n.dropdown.toggleBalloon(!1)
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this,
                        n = this.props.installedExtension;
                    return l.createElement(K.a, {
                        openByDefault: this.props.openByDefault,
                        ref: function(n) {
                            e.dropdown = n
                        }
                    }, l.createElement(m.v, {
                        dropdown: !0,
                        type: m.B.Text
                    }, n.activationConfig.state === T.a.Active ? this.renderActivePresence(n.activationConfig.slot) : Object(u.d)("Activate", "ActivateExtensionDropdown")), l.createElement(m.q, {
                        size: m.s.Medium,
                        offsetY: "-0.1rem",
                        noTail: !0
                    }, l.createElement(m._35, {
                        color: m.K.Link,
                        padding: 1
                    }, this.renderAnchorOptions())))
                }, n
            }(l.Component),
            re = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onUninstall = function() {
                        return n.props.onUninstall(n.props.installedExtension)
                    }, n.renderActivationStatus = function() {
                        var e = n.props.installedExtension,
                            t = e.self && e.self.canActivate,
                            i = l.createElement(ae, {
                                installedExtension: e,
                                availableSlots: n.props.availableSlots,
                                onActivate: n.props.onActivate,
                                onActivateComponent: n.props.onActivateComponent,
                                onCreatePanelAndActivate: n.props.onCreatePanelAndActivate,
                                onDeactivate: n.props.onDeactivate
                            });
                        return t ? i : Object(T.h)(e) ? l.createElement(m._8, {
                            display: m.R.Flex,
                            alignItems: m.c.Center
                        }, l.createElement(m.Q, {
                            color: m.K.Alt2
                        }, Object(u.d)("Needs Configuration", "InstalledExtensionActions"))) : l.createElement(m._8, {
                            display: m.R.Flex,
                            alignItems: m.c.Center
                        }, l.createElement(m.Q, {
                            color: m.K.Alt2
                        }, Object(u.d)("Activation Disabled", "InstalledExtensionActions")))
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.installedExtension,
                        t = e.channelName,
                        i = n.extension,
                        a = i.clientID,
                        r = i.version;
                    return l.createElement(m._8, {
                        padding: 1,
                        display: m.R.Flex,
                        flexWrap: m.U.NoWrap,
                        justifyContent: m._7.Between
                    }, this.renderActivationStatus(), l.createElement(m._8, {
                        display: m.R.Flex,
                        flexWrap: m.U.NoWrap
                    }, l.createElement(q.a, {
                        to: Object(V.a)(t, a, r)
                    }, l.createElement(m.w, {
                        ariaLabel: Object(u.d)("Configure", "InstalledExtensionActions"),
                        icon: m._25.Gear
                    })), l.createElement(m.w, {
                        ariaLabel: Object(u.d)("Uninstall", "InstalledExtensionActions"),
                        icon: m._25.Trash,
                        onClick: this.onUninstall
                    })))
                }, n
            }(l.Component),
            se = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props.installedExtension.extension,
                            t = Object(T.e)(e.views).map(function(e) {
                                return l.createElement(m._8, {
                                    key: e,
                                    display: m.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, l.createElement(J, {
                                    anchorType: e
                                }))
                            });
                        return Object(T.f)(e.views).includes(E.ExtensionPlatform.Mobile) && t.push(l.createElement(m._8, {
                            key: "mobile",
                            display: m.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, l.createElement(J, {
                            mobile: !0
                        }))), t
                    }, n.onCardImageError = function() {
                        n.setState({
                            hasCardImageError: !0
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.installedExtension,
                        t = e.channelName,
                        i = e.availableSlots,
                        a = e.onUninstall,
                        r = e.onActivate,
                        s = e.onCreatePanelAndActivate,
                        o = e.onDeactivate,
                        d = n.extension;
                    return l.createElement(m._35, {
                        background: m.n.Base,
                        border: !0
                    }, l.createElement(m._35, {
                        padding: 1,
                        borderBottom: !0
                    }, l.createElement(m.C, {
                        row: !0,
                        border: !1
                    }, l.createElement(m.E, {
                        alt: d.name,
                        src: this.state.hasCardImageError ? u.a.defaultAvatarURL : d.iconURL,
                        aspect: m.l.Aspect1x1,
                        size: m.F.Size6,
                        onError: this.onCardImageError
                    }), l.createElement(m.D, null, l.createElement(m._8, {
                        padding: 1
                    }, l.createElement(q.a, {
                        to: Object(V.c)(d.clientID, d.version)
                    }, l.createElement(m.Q, {
                        type: m._49.H5
                    }, d.name)), this.renderAnchorTypePills(), d.state !== T.c.Released && l.createElement(X, {
                        state: d.state
                    }))))), l.createElement(re, {
                        channelName: t,
                        installedExtension: n,
                        availableSlots: i,
                        onUninstall: a,
                        onActivate: r,
                        onActivateComponent: this.props.onActivateComponent,
                        onCreatePanelAndActivate: s,
                        onDeactivate: o
                    }))
                }, n
            }(l.Component),
            oe = function(e) {
                return l.createElement(m._8, {
                    padding: 1,
                    fullWidth: !0
                }, l.createElement(m._8, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement(m.Q, {
                    type: m._49.H4,
                    noWrap: !0
                }, Object(u.d)("Installed Extensions", "InstalledExtensionList"))), e.installedExtensions.map(function(n) {
                    return l.createElement(m._8, {
                        key: n.id,
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(se, {
                        channelName: e.channelName,
                        installedExtension: n,
                        availableSlots: e.availableSlots,
                        onCreatePanelAndActivate: e.onCreatePanelAndActivate,
                        onActivate: e.onActivate,
                        onActivateComponent: e.onActivateComponent,
                        onDeactivate: e.onDeactivate,
                        onUninstall: e.onUninstall
                    }))
                }), !e.isLoading && 0 === e.installedExtensions.length && l.createElement(m.Q, {
                    type: m._49.P
                }, Object(u.d)("No installed extensions.", "InstalledExtensionList")))
            };
        oe.displayName = "InstalledExtensionList";
        var le = function() {
            return l.createElement(ne, {
                dismissedStorageKey: "extensions_dashboard_mobile_banner_dismissed",
                enabledDynamicKey: "extensions_mobile_banner_enabled"
            }, l.createElement(m.Q, {
                fontSize: m.V.Size5,
                type: m._49.P
            }, Object(u.d)("Extensions are now available on mobile. See which Extensions are mobile-ready in the manager below.", "MobileExtensionsBanner"), " ", l.createElement("a", {
                target: "_blank",
                rel: "noopener",
                href: "https://blog.twitch.tv/extensions-on-mobile-d6cf9e3be759"
            }, Object(u.d)("Learn more.", "MobileExtensionsBanner"))))
        };
        le.displayName = "MobileExtensionsBanner";
        var de = t("eyrD"),
            ce = this,
            ue = function(e, n, t, a, r, s) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var o, l, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!(s && e.self && e.self.canActivate)) return [3, 6];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 5, , 6]), [4, n(Object(U.a)({
                                    channelID: s.currentUser.id,
                                    type: z.a.Extension
                                }))];
                            case 2:
                                return (o = i.sent().data).createPanel && o.createPanel.panel && o.createPanel.panel.type === z.a.Extension ? (l = o.createPanel.panel, [4, ve(e, l.slotID, T.b.Panel, t, a, r)]) : [3, 4];
                            case 3:
                                i.sent(), d = function(e) {
                                    return e.currentUser.panels.push(l), e
                                }, Object(U.e)(de, {}, d), i.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return i.sent(), r(), [3, 6];
                            case 6:
                                return [2]
                        }
                    })
                })
            },
            me = function(e, n, t, a, r, s, o, l) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var d, c;
                    return i.__generator(this, function(i) {
                        if (l && e.self && e.self.canActivate) {
                            if (d = l.currentUser.installedExtensions.find(function(e) {
                                    var i = e.activationConfig;
                                    return i.state === T.a.Active && i.slot === n && i.anchor === t
                                }), c = function() {
                                    return ve(e, n, t, a, s, o)
                                }, !d) return [2, c()];
                            r({
                                onConfirm: c,
                                existingExtensionName: d.extension.name,
                                isExistingExtensionMonetized: Object(T.g)(d.extension),
                                activationSlot: n
                            })
                        }
                        return [2]
                    })
                })
            },
            ve = function(e, n, t, a, r, s) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, a(Object(U.a)({
                                    extensionInstallationID: e.id,
                                    slot: n,
                                    anchor: t
                                }))];
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                return i.sent(), s(), [3, 3];
                            case 3:
                                return r({
                                    activations: [{
                                        extensionName: e.extension.name,
                                        slot: n
                                    }]
                                }), [2]
                        }
                    })
                })
            },
            pe = function(e, n, t, a) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        return Object(T.g)(e.extension) ? (t({
                            monetizedInstallation: e,
                            onConfirm: function(e) {
                                return ke(e, n, a)
                            }
                        }), [2]) : [2, ke(e, n, a)]
                    })
                })
            },
            ke = function(e, n, t) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n(Object(U.a)({
                                    extensionInstallationID: e.id
                                }))];
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                return i.sent(), t(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Ee = function(e, n, t, a, r, s) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var o, l, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!s) return [3, 4];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, t(Object(U.a)({
                                    extensionID: e.id,
                                    channelID: s.currentUser.id
                                }))];
                            case 2:
                                return (o = i.sent().data).installExtension && o.installExtension.installedExtension && (l = o.installExtension.installedExtension, d = function(e) {
                                    return e.currentUser.installedExtensions.push(l), e
                                }, Object(U.e)(de, {}, d), a({
                                    extensionClientID: l.extension.clientID,
                                    extensionVersion: l.extension.version,
                                    login: n
                                })), [3, 4];
                            case 3:
                                return i.sent(), r(), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            ge = function(e, n, t, a) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var r;
                    return i.__generator(this, function(i) {
                        return r = function() {
                            return he(e.id, n, a)
                        }, t({
                            isExtensionMonetized: Object(T.g)(e.extension),
                            extensionName: e.extension.name,
                            onConfirm: r
                        }), [2]
                    })
                })
            },
            he = function(e, n, t) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var a, r, s;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n(Object(U.a)({
                                    extensionInstallationID: e
                                }))];
                            case 1:
                                return (a = i.sent().data).uninstallExtension && a.uninstallExtension.id && (r = a.uninstallExtension.id, s = function(e) {
                                    var n = e.currentUser.installedExtensions;
                                    return e.currentUser.installedExtensions = n.filter(function(e) {
                                        return e.id !== r
                                    }), e
                                }, Object(U.e)(de, {}, s)), [3, 3];
                            case 2:
                                return i.sent(), t(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            be = function(e, n, t, a, r, s, o) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var l, d, c;
                    return i.__generator(this, function(u) {
                        if (l = function(e) {
                                ! function(e, n, t, a, r) {
                                    i.__awaiter(ce, void 0, void 0, function() {
                                        var s, o, l;
                                        return i.__generator(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    if (!r) return [2];
                                                    i.label = 1;
                                                case 1:
                                                    return i.trys.push([1, 3, , 4]), [4, n(Object(U.a)({
                                                        channelID: r.currentUser.id,
                                                        activations: e
                                                    }))];
                                                case 2:
                                                    return (s = i.sent().data).applyExtensionActivations && s.applyExtensionActivations.installedExtensions && (o = s.applyExtensionActivations.installedExtensions, l = o.filter(function(n) {
                                                        var t = n.id;
                                                        return e.some(function(e) {
                                                            return e.installationID === t
                                                        })
                                                    }).map(function(e) {
                                                        var n = e.activationConfig;
                                                        return {
                                                            extensionName: e.extension.name,
                                                            slot: n.slot
                                                        }
                                                    }), t({
                                                        activations: l
                                                    })), [3, 4];
                                                case 3:
                                                    return i.sent(), a(), [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    })
                                }(e.filter(function(e) {
                                    return void 0 !== e.component
                                }), a, r, s, o)
                            }, o) {
                            if (!(d = e.extension.views.component)) return [2];
                            c = o.currentUser.installedExtensions.filter(function(e) {
                                var n = e.activationConfig;
                                return n.state === T.a.ACTIVE && n.anchor === T.b.COMPONENT
                            }).map(function(e) {
                                var n = e.id,
                                    t = e.activationConfig,
                                    i = e.extension;
                                return {
                                    installationID: n,
                                    componentConfig: i.views.component,
                                    extensionName: i.name,
                                    slot: t.slot,
                                    x: t.x,
                                    y: t.y
                                }
                            }), t({
                                activatedComponentData: c,
                                extensionNameToActivate: e.extension.name,
                                idToActivate: e.id,
                                slotToActivate: n,
                                componentConfigToActivate: d,
                                onConfirm: l
                            })
                        }
                        return [2]
                    })
                })
            },
            xe = t("deLJ"),
            fe = t("MD1s"),
            Ne = t("Mtzm"),
            ye = t("hd33"),
            Se = t("448H"),
            _e = (t("D/X5"), function(e, n) {
                return e.extension.clientID > n.extension.clientID ? 1 : e.extension.clientID < n.extension.clientID ? -1 : e.extension.version < n.extension.version ? 1 : e.extension.version > n.extension.version ? -1 : 0
            }),
            Fe = "extensions_dashboard_show_released_only",
            Ce = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        availableExtensions: [],
                        availableExtensionsSearchQuery: "",
                        availableExtensionsShowReleasedOnly: u.l.get(Fe, !1),
                        availableSlots: {
                            components: [],
                            overlays: [],
                            panels: []
                        },
                        installedExtensions: []
                    }, n.searchQueryDebounceDurationMS = 250, n.onCreatePanelAndActivateExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, r, s, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.createPanel, a = n.activateExtension, r = n.showActivatedModal, s = n.showErrorModal, o = n.userData, [4, ue(e, t, a, r, s, o)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onActivateComponentExtensions = function(e, t) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, a, r, s, o, l;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, a = n.applyExtensionActivations, r = n.userData, s = n.showComponentActivateModal, o = n.showActivatedModal, l = n.showErrorModal, [4, be(e, t, s, a, o, l, r)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onActivateExtension = function(e, t, a) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, r, s, o, l, d;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, r = n.activateExtension, s = n.showReplacementModal, o = n.showActivatedModal, l = n.showErrorModal, d = n.userData, [4, me(e, t, a, r, s, o, l, d)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onDeactivateExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.deactivateExtension, a = n.showDeactivateMonetizedModal, r = n.showErrorModal, [4, pe(e, t, a, r)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onUninstallExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.uninstallExtension, a = n.showUninstallModal, r = n.showErrorModal, [4, ge(e, t, a, r)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onInstallExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, r, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.userData, a = n.showInstalledModal, r = n.showErrorModal, s = this.props.installExtension, [4, Ee(e, this.props.channelName, s, a, r, t)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.canLoadMoreAvailableExtensions = function() {
                        var e = n.props.availableExtensionListData;
                        return void 0 !== e && !e.loading && !e.error && !!e.extensions.pageInfo.hasNextPage
                    }, n.loadMoreAvailableExtensions = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return (e = this.props.availableExtensionListData) && this.canLoadMoreAvailableExtensions() ? [4, e.fetchMore({
                                            query: Se,
                                            variables: {
                                                afterCursor: e.extensions.edges[e.extensions.edges.length - 1].cursor,
                                                search: this.state.availableExtensionsSearchQuery,
                                                state: this.state.availableExtensionsShowReleasedOnly ? T.c.Released : null
                                            },
                                            updateQuery: function(e, n) {
                                                var t = n.fetchMoreResult;
                                                return i.__assign({}, t, {
                                                    extensions: i.__assign({}, t.extensions, {
                                                        edges: Object(U.c)(e.extensions.edges, t.extensions.edges)
                                                    })
                                                })
                                            }
                                        })] : [3, 2];
                                    case 1:
                                        n.sent(), n.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, n.updateSearchQuery = function(e) {
                        n.setState({
                            availableExtensionsSearchQuery: e
                        }), clearTimeout(n.searchQueryDebounceID), n.searchQueryDebounceID = setTimeout(function() {
                            n.updateExtensionsFilters(e, n.state.availableExtensionsShowReleasedOnly)
                        }, n.searchQueryDebounceDurationMS)
                    }, n.updateReleasedStatusQuery = function(e) {
                        n.setState({
                            availableExtensionsShowReleasedOnly: e
                        }), u.l.set(Fe, e), n.updateExtensionsFilters(n.state.availableExtensionsSearchQuery, e)
                    }, n.updateExtensionsFilters = function(e, t) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, a, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = this.props, a = n.availableExtensionListData, r = n.showErrorModal, !a || a.error || a.loading) return [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, a.refetch({
                                            search: e,
                                            state: t ? T.c.Released : null
                                        })];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return i.sent(), r(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.componentDidMount = function() {
                    u.o.setPageTitle(Object(u.d)("Extensions", "DashboardExtensionsManagerPageTitle"))
                }, n.prototype.componentWillReceiveProps = function(e) {
                    if (e !== this.props) {
                        var n = this.props.userData,
                            t = e.userData;
                        if (n !== t && t && !t.loading && !t.error) {
                            var i = t.currentUser.installedExtensions.slice();
                            i.sort(_e), this.setState({
                                installedExtensions: i,
                                availableSlots: (o = t.currentUser.panels, {
                                    components: ["extension-component-1", "extension-component-2"],
                                    overlays: ["extension-overlay-1"],
                                    panels: o.reduce(function(e, n) {
                                        return n.type === z.a.Extension && e.push(n.slotID), e
                                    }, []).sort()
                                })
                            })
                        }
                        var a = this.props.availableExtensionListData,
                            r = e.availableExtensionListData;
                        if (a !== r && r && !r.loading && !r.error) {
                            var s = r.extensions.edges.map(function(e) {
                                return e.node
                            });
                            this.setState({
                                availableExtensions: s
                            })
                        }
                    }
                    var o
                }, n.prototype.componentDidUpdate = function() {
                    this.props.userData && !this.props.userData.loading && this.props.availableExtensionListData && !this.props.availableExtensionListData.loading && this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e = this.props,
                        n = e.availableExtensionListData,
                        t = e.channelName,
                        i = e.userData,
                        a = e.userLogin;
                    if (t !== a) return l.createElement(D.b, {
                        to: Object(V.b)(a)
                    });
                    var r = void 0 !== i && i.loading,
                        s = void 0 !== n && n.loading,
                        o = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.roles.isExtensionsApprover && !e.currentUser.roles.isExtensionsDeveloper)
                        }(i),
                        d = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.cheer)
                        }(i),
                        c = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.roles.isAffiliate && !e.currentUser.roles.isPartner)
                        }(i);
                    return l.createElement(I.b, null, l.createElement(m._35, {
                        padding: 2,
                        background: m.n.Alt
                    }, l.createElement(m._8, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(m.Q, {
                        type: m._49.H3
                    }, Object(u.d)("Extensions", "DashboardExtensionsManagerPage"))), l.createElement(le, null), c && l.createElement(te, null), l.createElement(m._8, {
                        display: m.R.Flex,
                        flexWrap: m.U.NoWrap,
                        padding: {
                            top: 1
                        }
                    }, l.createElement(m._35, {
                        className: "installed-extension-list-container",
                        border: !0,
                        display: m.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(oe, {
                        channelName: t,
                        installedExtensions: this.state.installedExtensions,
                        isLoading: r,
                        availableSlots: this.state.availableSlots,
                        onCreatePanelAndActivate: this.onCreatePanelAndActivateExtension,
                        onActivate: this.onActivateExtension,
                        onActivateComponent: this.onActivateComponentExtensions,
                        onDeactivate: this.onDeactivateExtension,
                        onUninstall: this.onUninstallExtension
                    })), l.createElement(m._8, {
                        display: m.R.Flex,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        }
                    }, l.createElement(ee, {
                        extensions: this.state.availableExtensions,
                        installedExtensions: this.state.installedExtensions,
                        isChannelCheeringEnabled: d,
                        isLoading: s,
                        searchQuery: this.state.availableExtensionsSearchQuery,
                        displayShowReleasedOnlyCheckbox: o,
                        showReleasedOnly: this.state.availableExtensionsShowReleasedOnly,
                        onInstall: this.onInstallExtension,
                        canLoadMore: this.canLoadMoreAvailableExtensions,
                        loadMore: this.loadMoreAvailableExtensions,
                        onSearchQueryChange: this.updateSearchQuery,
                        onShowReleasedOnlyChange: this.updateReleasedStatusQuery
                    }))), l.createElement(H.a, {
                        learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                        page: "extension-manager"
                    })))
                }, n
            }(l.Component);
        var Oe = Object(w.compose)(Object(W.d)("ExtensionManagerPage", {
            destination: P.a.ChannelDashboardExtensions
        }), Object(M.a)({
            location: j.PageviewLocation.DashboardExtensions
        }), Object(L.a)(Se, {
            name: "availableExtensionListData",
            options: {
                variables: {get state() {
                        return u.l.get(Fe, !1) ? T.c.Released : null
                    }
                }
            }
        }), Object(L.a)(de, {
            options: {
                fetchPolicy: "network-only"
            },
            name: "userData"
        }), Object(L.a)(B, {
            name: "installExtension"
        }), Object(L.a)(Q, {
            name: "uninstallExtension"
        }), Object(L.a)(fe, {
            name: "applyExtensionActivations"
        }), Object(L.a)(xe, {
            name: "activateExtension"
        }), Object(L.a)(ye, {
            name: "deactivateExtension"
        }), Object(L.a)(Ne, {
            name: "createPanel"
        }))(Ce);
        var Ae = Object(a.b)(function(e) {
            var n = Object(o.c)(e);
            return {
                userLogin: n && n.login || ""
            }
        }, function(e) {
            return Object(r.b)({
                showReplacementModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(A, n)
                },
                showActivatedModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(k, n)
                },
                showInstalledModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(F.a, n)
                },
                showUninstallModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(R.a, n)
                },
                showDeactivateMonetizedModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(S, n)
                },
                showErrorModal: function() {
                    return Object(s.d)(_.a, {})
                },
                showComponentActivateModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(f, n)
                }
            }, e)
        })(Oe);
        t.d(n, "ExtensionManagerPage", function() {
            return Ae
        })
    }
});
//# sourceMappingURL=pages.extension-manager-86d4134c50bba890631371449302008b.js.map