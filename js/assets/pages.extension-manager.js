webpackJsonp([109], {
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
    "5Neo": function(e, n, t) {
        "use strict";
        var i = t("BwgW"),
            a = t("GiK3"),
            s = t("nP5L"),
            r = t("VHHT"),
            o = t("Odds"),
            l = function(e) {
                return e.anchorType ? a.createElement(o._12, {
                    label: Object(s.a)(e.anchorType, !0)
                }) : e.mobile ? a.createElement(o._12, {
                    label: Object(r.a)(i.ExtensionPlatform.Mobile, !0)
                }) : null
            };
        l.displayName = "AnchorPill", t.d(n, "a", function() {
            return l
        })
    },
    "9Gfr": function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            s = t("+8VM"),
            r = t("sfWM"),
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
                    return a.createElement(r.a, null, a.createElement(d, null), a.createElement(s.a, {
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
    G8hb: function(e, n, t) {
        "use strict";
        t.d(n, "d", function() {
            return i
        }), t.d(n, "c", function() {
            return a
        }), t.d(n, "a", function() {
            return s
        }), t.d(n, "f", function() {
            return r
        }), t.d(n, "b", function() {
            return o
        }), t.d(n, "e", function() {
            return l
        }), n.h = function(e) {
            if (e.isBitsEnabled) return i.Bits;
            if (e.vendorCode && e.sku) return i.InExtensionPurchases;
            return null
        }, n.i = function(e) {
            var n = [];
            e.component && e.component.viewerURL && n.push(o.Component);
            e.panel && e.panel.viewerURL && n.push(o.Panel);
            e.videoOverlay && e.videoOverlay.viewerURL && n.push(o.VideoOverlay);
            return n
        }, n.j = function(e) {
            var n = [d.ExtensionPlatform.Web];
            e.mobile && e.mobile.viewerURL && n.push(d.ExtensionPlatform.Mobile);
            return n
        }, n.g = function(e) {
            return e.extension.id + ":" + e.extension.version
        }, n.k = function(e) {
            if (e.requiredActions) return e.requiredActions.some(function(e) {
                var n = e.type;
                return n === l.RequiresConfiguration
            });
            return !1
        };
        var i, a, s, r, o, l, d = t("BwgW");
        t.n(d);
        ! function(e) {
            e[e.Bits = 0] = "Bits", e[e.InExtensionPurchases = 1] = "InExtensionPurchases"
        }(i || (i = {})),
        function(e) {
            e[e.Deactivate = 0] = "Deactivate", e[e.Replace = 1] = "Replace", e[e.Uninstall = 2] = "Uninstall"
        }(a || (a = {})),
        function(e) {
            e.Active = "ACTIVE", e.Inactive = "INACTIVE", e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
        }(s || (s = {})),
        function(e) {
            e.Approved = "APPROVED", e.AssetsUploaded = "ASSETS_UPLOADED", e.Deleted = "DELETED", e.Deprecated = "DEPRECATED", e.InReview = "IN_REVIEW", e.InTest = "IN_TEST", e.PendingAction = "PENDING_ACTION", e.ReadyForReview = "READY_FOR_REVIEW", e.Rejected = "REJECTED", e.Released = "RELEASED", e.Uploading = "UPLOADING", e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
        }(r || (r = {})),
        function(e) {
            e.Component = "COMPONENT", e.Hidden = "HIDDEN", e.Panel = "PANEL", e.VideoOverlay = "VIDEO_OVERLAY", e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
        }(o || (o = {})),
        function(e) {
            e.RequiresConfiguration = "REQUIRES_CONFIGURATION", e.PromptForPermissions = "PROMPT_FOR_PERMISSIONS", e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
        }(l || (l = {}))
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
            s = t("RH2O"),
            r = t("2KeS"),
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
                    s = e.login;
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
                    linkTo: Object(u.b)(s, t, i),
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
        var k = Object(s.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(p);
        t.d(n, !1, function() {
            return p
        }), t.d(n, "a", function() {
            return k
        })
    },
    VHHT: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return s
        });
        var i = t("BwgW"),
            a = (t.n(i), t("6sO2")),
            s = function(e, n) {
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
    YJkA: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            s = t("RH2O"),
            r = t("2KeS"),
            o = t("+8VM"),
            l = t("V5M+"),
            d = t("sfWM"),
            c = t("6sO2"),
            u = t("Odds"),
            m = function(e) {
                var n = e.activations,
                    t = e.onConfirm;
                return a.createElement(u._8, null, a.createElement(u.Q, {
                    type: u._49.H5
                }, Object(c.d)("{count, plural, one {Extension is now Active!} other {Extensions are now Active!}}", {
                    count: n.length
                }, "ExtensionActivatedModal")), a.createElement(u._35, {
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
                    return a.createElement(u.Q, {
                        key: t
                    }, Object(c.d)("The extension {extensionName} is now active on slot {anchorSlot}", {
                        extensionName: a.createElement(u.Q, {
                            bold: !0,
                            type: u._49.Span
                        }, n),
                        anchorSlot: a.createElement(u.Q, {
                            bold: !0,
                            type: u._49.Span,
                            transform: u._48.Uppercase
                        }, t)
                    }, "ExtensionActivatedModal"))
                })), a.createElement(u._8, {
                    display: u.R.Flex,
                    justifyContent: u._7.Center
                }, a.createElement(u.v, {
                    onClick: t
                }, Object(c.d)("Done", "ExtensionActivatedModal"))))
            };
        m.displayName = "ExtensionActivatedModalPresentation";
        var v = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return a.createElement(d.a, null, a.createElement(m, {
                    activations: this.props.activations,
                    onConfirm: this.props.closeModal
                }), a.createElement(o.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var p = Object(s.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(v);
        t.d(n, !1, function() {
            return v
        }), t.d(n, "a", function() {
            return p
        })
    },
    bpr6: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            s = t("RH2O"),
            r = t("2KeS"),
            o = t("+8VM"),
            l = t("V5M+"),
            d = t("sfWM"),
            c = t("BwgW"),
            u = t("6sO2"),
            m = t("Odds"),
            v = 768,
            p = 432,
            k = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    t.renderPositionPreview = function() {
                        var e = t.state.currentActivationSettings,
                            n = t.getSlotListSorted().map(function(n) {
                                var t = e[n],
                                    i = t.componentConfig,
                                    s = t.installationID,
                                    r = t.x,
                                    o = t.y,
                                    l = Object(c.getComponentSizeFromView)(v, p, {
                                        aspectHeight: i.aspectHeight,
                                        aspectWidth: i.aspectWidth,
                                        zoom: i.hasZoom,
                                        zoomPixels: i.zoomPixels || c.DefaultZoomPixelWidth
                                    }),
                                    d = Object(c.getComponentPositionFromView)(v, p, {
                                        x: 100 * r,
                                        y: 100 * o
                                    }),
                                    u = {
                                        top: d.y + "px",
                                        left: d.x + "px",
                                        height: l.height + "px",
                                        width: l.width + "px"
                                    };
                                return a.createElement("div", {
                                    key: s,
                                    className: "extension-component-preview",
                                    style: u
                                })
                            });
                        return a.createElement(m._2, {
                            position: m._15.Relative
                        }, a.createElement("div", {
                            className: "extension-component-player-preview",
                            style: {
                                width: v,
                                height: p
                            }
                        }, n))
                    }, t.renderCoordinateInputs = function() {
                        var e = t.state.currentActivationSettings;
                        return t.getSlotListSorted().map(function(n) {
                            var i = e[n],
                                s = i.componentConfig,
                                r = i.extensionName,
                                o = i.x,
                                l = i.y,
                                d = t.getComponentMaxCoordinates(s),
                                c = d.maxX,
                                u = d.maxY;
                            return a.createElement(m._8, {
                                key: n
                            }, a.createElement(m._8, {
                                padding: 1
                            }, a.createElement(m.Q, {
                                bold: !0
                            }, n, " : ", r)), a.createElement(m._8, {
                                padding: 1
                            }, a.createElement(m.W, {
                                label: "X",
                                orientation: m.X.Horizontal
                            }, a.createElement(m._4, {
                                type: m._5.Number,
                                value: o.toString(),
                                min: 0,
                                max: c,
                                step: .01,
                                onChange: t.onCoordinateChange,
                                "data-coordinate": "x",
                                "data-slot": n,
                                name: n + ":x"
                            }))), a.createElement(m._8, {
                                padding: 1
                            }, a.createElement(m.W, {
                                label: "Y",
                                orientation: m.X.Horizontal
                            }, a.createElement(m._4, {
                                type: m._5.Number,
                                value: l.toString(),
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
                            s = a[0],
                            r = a[1];
                        if (s && r) {
                            var o = parseFloat(n) || 0,
                                l = i.__assign({}, t.state.currentActivationSettings[s]),
                                d = l.componentConfig;
                            if ("x" === r) {
                                var c = t.getComponentMaxCoordinates(d).maxX,
                                    u = Math.max(0, Math.min(o, c));
                                l.x = u
                            } else if ("y" === r) {
                                var m = t.getComponentMaxCoordinates(d).maxY;
                                u = Math.max(0, Math.min(o, m));
                                l.y = u
                            }
                            var v, p = i.__assign({}, t.state.currentActivationSettings, ((v = {})[s] = l, v));
                            t.setState({
                                currentActivationSettings: p
                            })
                        }
                    };
                    var s = n.activatedComponentData,
                        r = n.idToActivate,
                        o = n.extensionNameToActivate,
                        l = n.slotToActivate,
                        d = n.componentConfigToActivate,
                        u = s.reduce(function(e, n) {
                            return n.installationID === r ? e : (e[n.slot] = i.__assign({}, n, {
                                x: n.x / 100,
                                y: n.y / 100
                            }), e)
                        }, {});
                    return u[l] = {
                        installationID: r,
                        extensionName: o,
                        componentConfig: d,
                        slot: l,
                        x: 0,
                        y: 0
                    }, t.state = {
                        currentActivationSettings: u
                    }, t
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(m._8, null, a.createElement(m.Q, {
                        type: m._49.H5
                    }, Object(u.d)("Activate a Component Extension", "ExtensionComponentActivateModal")), a.createElement(m._35, {
                        borderTop: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, this.renderPositionPreview()), a.createElement(m._35, {
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
                    }, this.renderCoordinateInputs()), a.createElement(m._8, {
                        display: m.R.Flex,
                        justifyContent: m._7.Center
                    }, a.createElement(m._8, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(m.v, {
                        type: m.B.Hollow,
                        onClick: this.props.closeModal
                    }, Object(u.d)("Cancel", "ExtensionComponentActivateModal"))), a.createElement(m.v, {
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
            }(a.Component),
            E = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(d.a, {
                        className: "extension-manager-modal-container--expand"
                    }, a.createElement(k, {
                        activatedComponentData: this.props.activatedComponentData,
                        componentConfigToActivate: this.props.componentConfigToActivate,
                        extensionNameToActivate: this.props.extensionNameToActivate,
                        idToActivate: this.props.idToActivate,
                        slotToActivate: this.props.slotToActivate,
                        onConfirm: this.props.onConfirm,
                        closeModal: this.props.closeModal
                    }), a.createElement(o.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(a.Component);
        var g = Object(s.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(E);
        t.d(n, !1, function() {
            return E
        }), t.d(n, "a", function() {
            return g
        })
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
            return s
        });
        var i = t("6sO2"),
            a = t("G8hb"),
            s = function(e, n) {
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
    "ry+I": function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("6sO2"),
            s = t("G8hb"),
            r = t("Odds"),
            o = function(e) {
                var n;
                switch (e.state) {
                    case s.f.InTest:
                        n = Object(a.d)("TESTING", "ExtensionStatusPill");
                        break;
                    case s.f.ReadyForReview:
                        n = Object(a.d)("READY FOR REVIEW", "ExtensionStatusPill");
                        break;
                    case s.f.InReview:
                        n = Object(a.d)("IN REVIEW", "ExtensionStatusPill");
                        break;
                    case s.f.Rejected:
                        n = Object(a.d)("REJECTED", "ExtensionStatusPill");
                        break;
                    case s.f.Approved:
                        n = Object(a.d)("APPROVED", "ExtensionStatusPill");
                        break;
                    case s.f.Deprecated:
                        n = Object(a.d)("DEPRECATED", "ExtensionStatusPill");
                        break;
                    case s.f.PendingAction:
                        n = Object(a.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                        break;
                    case s.f.Uploading:
                        n = Object(a.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                        break;
                    case s.f.AssetsUploaded:
                        n = Object(a.d)("ASSETS UPLOADED", "ExtensionStatusPill");
                        break;
                    default:
                        n = ""
                }
                return i.createElement(r._12, {
                    type: r._13.Brand,
                    label: n
                })
            };
        o.displayName = "ExtensionStatusPill", t.d(n, "a", function() {
            return o
        })
    },
    sfWM: function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("Odds"),
            s = (t("Oxrw"), function(e) {
                return i.createElement(a._35, {
                    className: e.className || "extension-manager-modal-container",
                    background: a.n.Base,
                    padding: 2
                }, e.children)
            });
        s.displayName = "ModalContainer", t.d(n, "a", function() {
            return s
        })
    },
    twC3: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            s = t("RH2O"),
            r = t("2KeS"),
            o = t("+8VM"),
            l = t("V5M+"),
            d = t("sfWM"),
            c = t("G8hb"),
            u = t("6sO2"),
            m = t("Odds"),
            v = function(e) {
                var n = e.closeModal,
                    t = e.extensionName,
                    i = e.monetizationType,
                    s = e.onConfirm,
                    r = i === c.d.InExtensionPurchases,
                    o = i === c.d.Bits,
                    l = Object(u.d)("Are you sure you want to deactivate?", "ExtensionDeactivationWarning"),
                    d = l;
                return r ? d = Object(u.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning") : o && (d = Object(u.d)("This extension is Bits-enabled. If you deactivate this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
                    type: m._49.H5
                }, l), a.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(u.d)("You are deactivating {extensionName} ", {
                    extensionName: a.createElement(m.Q, {
                        bold: !0,
                        type: m._49.P
                    }, t)
                }, "ExtensionDeactivationWarning")), a.createElement(m._8, {
                    padding: {
                        top: 1
                    }
                }, a.createElement(m.Q, {
                    type: m._49.P
                }, d))), a.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, a.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: n
                }, Object(u.d)("Cancel", "ExtensionDeactivationWarning"))), a.createElement(m.v, {
                    onClick: s
                }, Object(u.d)("Deactivate", "ExtensionDeactivationWarning"))))
            },
            p = function(e) {
                var n = e.existingExtensionName,
                    t = e.activationSlot,
                    i = e.existingMonetizationType,
                    s = e.closeModal,
                    r = e.onConfirm,
                    o = i === c.d.InExtensionPurchases,
                    l = i === c.d.Bits,
                    d = Object(u.d)("Are you sure you want to uninstall?", "ExtensionDeactivationWarning");
                return o ? d = Object(u.d)("This extension enables in-extension purchases. If you replace this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionDeactivationWarning") : l && (d = Object(u.d)("This extension is Bits-enabled. If you replace this extension, your viewers may not be able to enjoy items and experiences they’ve exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionDeactivationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
                    type: m._49.H5
                }, Object(u.d)("You are replacing an active extension", "ExtensionReplacementWarning")), a.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(u.d)("Performing this action will cause the following extension to be deactivated", "ExtensionReplacementWarning")), a.createElement(m._8, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(u.d)("{extensionName} on {anchorSlot}", {
                    extensionName: a.createElement(m.Q, {
                        bold: !0,
                        type: m._49.Span
                    }, n),
                    anchorSlot: a.createElement(m.Q, {
                        bold: !0,
                        type: m._49.Span,
                        transform: m._48.Uppercase
                    }, t)
                }, "ExtensionReplacementWarning"))), a.createElement(m.Q, {
                    type: m._49.P
                }, d)), a.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, a.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: s
                }, Object(u.d)("Cancel", "ExtensionReplacementWarning"))), a.createElement(m.v, {
                    onClick: r
                }, Object(u.d)("Replace", "ExtensionReplacementWarning"))))
            };
        p.displayName = "ExtensionReplacementWarning";
        var k = function(e) {
                var n = e.closeModal,
                    t = e.extensionName,
                    i = e.monetizationType,
                    s = e.onConfirm,
                    r = i === c.d.InExtensionPurchases,
                    o = i === c.d.Bits,
                    l = Object(u.d)("Are you sure you want to uninstall?", "ExtensionUninstallationWarning"),
                    d = l;
                return r ? d = Object(u.d)("This extension enables in-extension purchases. If you uninstall this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning") : o && (d = Object(u.d)("This extension is Bits-enabled. If you uninstall this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
                    type: m._49.H5
                }, l), a.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(u.d)("You are uninstalling {extensionName} ", {
                    extensionName: a.createElement(m.Q, {
                        bold: !0,
                        type: m._49.P
                    }, t)
                }, "ExtensionUninstallationWarning")), a.createElement(m._8, {
                    padding: {
                        top: 1
                    }
                }, a.createElement(m.Q, {
                    type: m._49.P
                }, d))), a.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, a.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: n
                }, Object(u.d)("Cancel", "ExtensionUninstallationWarning"))), a.createElement(m.v, {
                    onClick: s
                }, Object(u.d)("Uninstall", "ExtensionUninstallationWarning"))))
            },
            E = function(e) {
                switch (e.destructionType) {
                    case c.c.Deactivate:
                        return a.createElement(v, {
                            closeModal: e.closeModal,
                            extensionName: e.extensionName,
                            monetizationType: e.monetizationType,
                            onConfirm: e.onConfirm
                        });
                    case c.c.Replace:
                        return a.createElement(p, {
                            closeModal: e.closeModal,
                            existingExtensionName: e.existingExtensionName,
                            existingMonetizationType: e.existingMonetizationType,
                            activationSlot: e.activationSlot,
                            onConfirm: e.onConfirm
                        });
                    case c.c.Uninstall:
                        return a.createElement(k, {
                            closeModal: e.closeModal,
                            extensionName: e.extensionName,
                            monetizationType: e.monetizationType,
                            onConfirm: e.onConfirm
                        });
                    default:
                        return null
                }
            };
        E.displayName = "ExtensionDestructionWarningModalComponent";
        var g = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.onConfirm = function() {
                    n.props.onConfirm(), n.props.closeModal()
                }, n
            }
            return i.__extends(n, e), n.prototype.render = function() {
                var e = null;
                switch (this.props.destructionType) {
                    case c.c.Deactivate:
                        e = a.createElement(E, {
                            closeModal: this.props.closeModal,
                            destructionType: this.props.destructionType,
                            extensionName: this.props.extensionName,
                            monetizationType: this.props.monetizationType,
                            onConfirm: this.onConfirm
                        });
                        break;
                    case c.c.Replace:
                        e = a.createElement(E, {
                            closeModal: this.props.closeModal,
                            destructionType: this.props.destructionType,
                            existingExtensionName: this.props.existingExtensionName,
                            existingMonetizationType: this.props.existingMonetizationType,
                            activationSlot: this.props.activationSlot,
                            onConfirm: this.props.onConfirm
                        });
                        break;
                    case c.c.Uninstall:
                        e = a.createElement(E, {
                            closeModal: this.props.closeModal,
                            destructionType: this.props.destructionType,
                            extensionName: this.props.extensionName,
                            monetizationType: this.props.monetizationType,
                            onConfirm: this.onConfirm
                        })
                }
                return a.createElement(d.a, null, e, a.createElement(o.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var x = Object(s.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(g);
        t.d(n, !1, function() {
            return g
        }), t.d(n, "a", function() {
            return x
        })
    },
    yJuJ: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("TToO"),
            a = t("RH2O"),
            s = t("2KeS"),
            r = t("V5M+"),
            o = t("Aj/L"),
            l = t("YJkA"),
            d = t("bpr6"),
            c = t("twC3"),
            u = t("9Gfr"),
            m = t("SfDx"),
            v = t("GiK3"),
            p = t("3zLD"),
            k = t("CIox"),
            E = t("6sO2"),
            g = t("N221"),
            x = t("7vx8"),
            h = t("j7/Y"),
            f = t("oIkB"),
            b = t("w9tK"),
            y = t("vH/s"),
            N = t("G8hb"),
            S = t("XwK1"),
            _ = t("GeUc"),
            C = t("q7Ag"),
            F = t("CSlQ"),
            A = t("PJs0"),
            O = t("WmaG"),
            R = t("Odds"),
            w = t("zCIC"),
            D = t("BwgW"),
            I = t("F8kA"),
            L = t("+Znq"),
            U = t("5Neo"),
            P = t("ry+I"),
            T = (t("AI7U"), function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props.extension,
                            t = Object(N.i)(e.views).map(function(e) {
                                return v.createElement(R._8, {
                                    key: e,
                                    display: R.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, v.createElement(U.a, {
                                    anchorType: e
                                }))
                            });
                        return Object(N.j)(e.views).includes(D.ExtensionPlatform.Mobile) && t.push(v.createElement(R._8, {
                            key: "mobile",
                            display: R.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, v.createElement(U.a, {
                            mobile: !0
                        }))), t
                    }, n.renderMonetizableMessage = function() {
                        var e = Object(E.d)("In-Extension Purchases", "AvailableExtensionCard");
                        return v.createElement(R._8, {
                            textAlign: R._45.Center
                        }, v.createElement(L.a, null, v.createElement("a", null, e), v.createElement(R.q, {
                            direction: R.r.LeftCenter,
                            size: R.s.Large
                        }, v.createElement(R._8, {
                            padding: 1,
                            textAlign: R._45.Left
                        }, v.createElement(R.Q, {
                            type: R._49.H4
                        }, e), v.createElement(R._8, {
                            padding: {
                                top: .5
                            }
                        }, v.createElement(R.Q, {
                            type: R._49.P
                        }, Object(E.d)("This extension enables the sale of digital goods. You may be eligible for a revenue share.", "AvailableExtensionCard"), v.createElement(R._2, {
                            padding: {
                                x: .5
                            }
                        }, v.createElement("a", {
                            rel: "noopener",
                            target: "_blank",
                            href: "https://help.twitch.tv/customer/portal/articles/2901058-earning-revenue-from-in-extension-purchases-beta"
                        }, n.learnMoreMessage()))))))))
                    }, n.renderBitsMessage = function() {
                        var e = Object(E.d)("In-Extension Bits", "AvailableExtensionCard");
                        return v.createElement(R._8, {
                            textAlign: R._45.Center
                        }, v.createElement(L.a, null, v.createElement("a", null, e), v.createElement(R.q, {
                            direction: R.r.LeftCenter,
                            size: R.s.Large
                        }, v.createElement(R._8, {
                            padding: 1,
                            textAlign: R._45.Left
                        }, v.createElement(R._8, {
                            display: R.R.Flex,
                            alignItems: R.c.Center
                        }, v.createElement(R._24, {
                            asset: R._25.Bits
                        }), v.createElement(R._8, {
                            display: R.R.InlineBlock,
                            padding: {
                                left: .5
                            }
                        }, v.createElement(R.Q, {
                            type: R._49.H4
                        }, e))), v.createElement(R._8, {
                            padding: {
                                top: .5
                            }
                        }, v.createElement(R.Q, {
                            type: R._49.P
                        }, Object(E.d)("This extension enables the use of Bits. For each eligible use of Bits in this extension, subject to Twitch’s legal terms and policies, the extension developer and the streamer will receive 20% and 80%, respectively, of 1 U.S. cent per Bit. You as a streamer may be eligible for a revenue share if you are a partner or an affiliate.", "AvailableExtensionCard"), v.createElement(R._8, null, v.createElement("a", {
                            rel: "noopener",
                            target: "_blank",
                            href: "https://help.twitch.tv/customer/portal/articles/2927987-earning-revenue-from-in-extension-bits-beta"
                        }, n.learnMoreMessage()))))))))
                    }, n.learnMoreMessage = function() {
                        return Object(E.d)("Learn More.", "AvailableExtensionCard")
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
                        s = a.clientID,
                        r = a.version,
                        o = Object(N.h)(a),
                        l = Object(E.d)("Install", "AvailableExtensionCard");
                    if (a.state !== N.f.Released || o !== N.d.Bits || i) e = v.createElement(R.v, {
                        onClick: this.onInstall
                    }, l);
                    else {
                        var d = Object(E.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "AvailableExtensionCard");
                        e = v.createElement(R._52, {
                            label: d,
                            direction: R._54.Left
                        }, v.createElement(R.v, {
                            onClick: this.onInstall,
                            disabled: !0
                        }, l))
                    }
                    return v.createElement(R._35, {
                        display: R.R.Flex,
                        flexWrap: R.U.NoWrap,
                        justifyContent: R._7.Between,
                        background: R.n.Base,
                        padding: {
                            left: 1
                        },
                        flexGrow: 1,
                        border: !0
                    }, v.createElement(R.C, {
                        row: !0,
                        border: !1
                    }, v.createElement(R.E, {
                        alt: a.name,
                        src: this.state.hasCardImageError ? E.a.defaultAvatarURL : a.iconURL,
                        aspect: R.l.Aspect1x1,
                        size: R.F.Size6,
                        onError: this.onCardImageError
                    }), v.createElement(R.D, null, v.createElement(R._8, {
                        padding: 1
                    }, v.createElement(R.Q, {
                        type: R._49.H4
                    }, a.name), v.createElement(R.Q, {
                        type: R._49.Span,
                        color: R.K.Alt2
                    }, a.authorName), v.createElement(R.Q, {
                        type: R._49.P
                    }, a.summary), this.renderAnchorTypePills(), a.state !== N.f.Released && v.createElement(P.a, {
                        state: a.state
                    })))), v.createElement(R._35, {
                        borderLeft: !0,
                        display: R.R.Flex,
                        alignItems: R.c.Center,
                        justifyContent: R._7.Center,
                        flexGrow: 0,
                        flexShrink: 0,
                        margin: {
                            y: 1
                        }
                    }, v.createElement(R._8, {
                        className: "available-extension-card__buttons"
                    }, v.createElement(R._8, {
                        display: R.R.Flex,
                        flexWrap: R.U.NoWrap,
                        justifyContent: R._7.Center,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, v.createElement(I.a, {
                        to: Object(C.d)(s, r)
                    }, v.createElement(R.v, {
                        type: R.B.Hollow
                    }, Object(E.d)("Details", "AvailableExtensionCard"))), v.createElement(R._8, {
                        padding: {
                            left: 1
                        }
                    }, t ? v.createElement(R.v, {
                        disabled: !0
                    }, Object(E.d)("Installed", "AvailableExtensionCard")) : e)), o === N.d.Bits && this.renderBitsMessage(), o === N.d.InExtensionPurchases && this.renderMonetizableMessage())))
                }, n
            }(v.Component)),
            M = function(e) {
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
                        s = e.isChannelCheeringEnabled,
                        r = e.isLoading,
                        o = e.loadMore,
                        l = e.onInstall,
                        d = e.searchQuery,
                        c = e.showReleasedOnly;
                    return v.createElement(R._35, {
                        border: !0,
                        background: R.n.Alt,
                        padding: 1,
                        fullWidth: !0
                    }, v.createElement(R._8, {
                        display: R.R.Flex,
                        flexWrap: R.U.Wrap
                    }, v.createElement(R._8, {
                        display: R.R.Flex,
                        justifyContent: R._7.Between,
                        alignItems: R.c.Baseline,
                        flexGrow: 4,
                        padding: {
                            bottom: .5,
                            right: 1
                        }
                    }, v.createElement(R._8, {
                        display: R.R.Flex,
                        alignItems: R.c.Baseline,
                        flexWrap: R.U.NoWrap,
                        padding: {
                            right: 1
                        }
                    }, v.createElement(R._8, {
                        padding: {
                            right: 1
                        }
                    }, v.createElement(R.Q, {
                        type: R._49.H4,
                        noWrap: !0
                    }, Object(E.d)("Available Extensions", "AvailableExtensionList"))), v.createElement(R.Q, {
                        type: R._49.Span,
                        color: R.K.Alt2,
                        noWrap: !0
                    }, Object(E.d)("(Sorted by Popularity)", "AvailableExtensionList"))), t && v.createElement(R.J, {
                        label: Object(E.d)("Show only released", "AvailableExtensionList"),
                        onChange: this.onReleasedCheckboxChange,
                        checked: c
                    })), v.createElement(R._8, {
                        flexGrow: 1
                    }, v.createElement(R._27, {
                        placeholder: Object(E.d)("Filter extensions", "AvailableExtensionList"),
                        value: this.props.searchQuery,
                        onChange: this.onSearchInputChange
                    }))), v.createElement(R._8, {
                        padding: {
                            top: 1
                        },
                        fullWidth: !0
                    }, i.map(function(e) {
                        var n = void 0 !== a.find(function(n) {
                            return n.extension.id === e.id
                        });
                        return v.createElement(R._8, {
                            key: e.id + e.version,
                            padding: {
                                bottom: 1
                            }
                        }, v.createElement(T, {
                            isInstalled: n,
                            extension: e,
                            isChannelCheeringEnabled: s,
                            onInstall: l
                        }))
                    }), v.createElement(w.a, {
                        key: d + c,
                        pixelThreshold: 200,
                        enabled: n(),
                        loadMore: o
                    }), !r && 0 === i.length && v.createElement(R.Q, {
                        type: R._49.P
                    }, Object(E.d)("No extensions are available to install.", "AvailableExtensionList"))))
                }, n
            }(v.Component),
            j = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.onDismiss = function() {
                        t.setState(function(e) {
                            return i.__assign({}, e, {
                                dismissed: !0
                            })
                        }, function() {
                            E.l.set(t.props.dismissedStorageKey, !0)
                        })
                    }, t.state = {
                        dismissed: E.l.get(n.dismissedStorageKey, !1),
                        enabled: E.b.get(n.enabledDynamicKey, !1)
                    }, t
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return this.state.enabled ? this.state.dismissed ? null : v.createElement(R._35, {
                        alignItems: R.c.Center,
                        "data-test-selector": "announcement-banner",
                        display: R.R.Flex,
                        flexDirection: R.T.Column,
                        justifyContent: R._7.Around,
                        background: R.n.Base,
                        padding: 1,
                        position: R._15.Relative,
                        margin: {
                            top: .5
                        },
                        border: !0
                    }, v.createElement(R._8, {
                        position: R._15.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, v.createElement(R.w, {
                        ariaLabel: "close",
                        "data-test-selector": "announcement-banner-dismiss",
                        icon: R._25.Close,
                        onClick: this.onDismiss
                    })), this.props.children) : null
                }, n
            }(v.Component),
            B = function() {
                return v.createElement(j, {
                    dismissedStorageKey: "extensions_dashboard_bits_banner_dismissed",
                    enabledDynamicKey: "extensions_bits_banner_enabled"
                }, v.createElement(R.Q, {
                    fontSize: R.V.Size5,
                    type: R._49.P
                }, Object(E.d)("Your viewers can now use Bits in Extensions to power amazing new experiences on Twitch. Use Bits-enabled Extensions to keep your audience engaged and grow your revenue.", "BitsAnnouncementBanner"), " ", v.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://blog.twitch.tv/bits-in-extensions-a036151cc309"
                }, Object(E.d)("Learn more.", "BitsAnnouncementBanner"))))
            };
        B.displayName = "BitsAnnouncementBanner";
        var W = t("Tc6d"),
            V = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.renderAnchorOptions = function() {
                        var e = n.props,
                            t = e.installedExtension,
                            i = e.availableSlots,
                            a = t.extension.views,
                            s = Object(N.i)(a),
                            r = [];
                        if (s.includes(N.b.Component) && i.components) {
                            var o = n.renderComponentAnchorOptions(i.components);
                            o.length && r.push(o)
                        }
                        if (s.includes(N.b.VideoOverlay) && i.overlays) {
                            var l = n.renderOverlayAnchorOptions(i.overlays);
                            l.length && r.push(l)
                        }
                        if (s.includes(N.b.Panel) && i.panels) {
                            var d = n.renderPanelAnchorOptions(i.panels);
                            d.length && r.push(d)
                        }
                        return t.activationConfig.state === N.a.Active && r.push(n.renderDeactivate()), r.reduce(function(e, n, t) {
                            var i = v.createElement(R._35, {
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
                        return v.createElement(R._8, {
                            display: R.R.Flex,
                            flexWrap: R.U.NoWrap,
                            alignItems: R.c.Center
                        }, v.createElement(R._16, {
                            status: R._17.Online
                        }), v.createElement(R._8, {
                            padding: {
                                left: 1
                            }
                        }, Object(E.d)("Active {slot}", {
                            slot: e.toUpperCase()
                        }, "ActivateExtensionDropdown")))
                    }, n.renderDeactivate = function() {
                        return v.createElement(R._6, {
                            key: "deactivate",
                            blurAfterClick: !0,
                            onClick: n.onDeactivate
                        }, v.createElement(R._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(E.d)("Deactivate", "ActivateExtensionDropdown")))
                    }, n.renderComponentAnchorOptions = function(e) {
                        return e.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, N.b.Component);
                            return i && e.push(i), e
                        }, [])
                    }, n.renderOverlayAnchorOptions = function(e) {
                        return e.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, N.b.VideoOverlay);
                            return i && e.push(i), e
                        }, [])
                    }, n.renderPanelAnchorOptions = function(e) {
                        var t = e.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, N.b.Panel);
                            return i && e.push(i), e
                        }, []);
                        return e.length < W.b && t.push(v.createElement(R._6, {
                            blurAfterClick: !0,
                            onClick: n.onCreatePanelAndActivate
                        }, v.createElement(R._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(E.d)("Add as a new panel", "ActivateExtensionDropdown")))), t
                    }, n.renderSetAnchorLocationInteractable = function(e, t) {
                        var i = n.props.installedExtension.activationConfig;
                        return i.state === N.a.Active && i.slot === e ? null : v.createElement(R._6, {
                            key: e,
                            blurAfterClick: !0,
                            onClick: n.onActivate,
                            "data-slot": e,
                            "data-anchor": t
                        }, v.createElement(R._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(E.d)("Set as {slot}", {
                            slot: e.toUpperCase()
                        }, "ActivateExtensionDropdown")))
                    }, n.onCreatePanelAndActivate = function() {
                        n.props.onCreatePanelAndActivate(n.props.installedExtension)
                    }, n.onActivate = function(e) {
                        var t = n.props,
                            i = t.installedExtension,
                            a = t.onActivate,
                            s = t.onActivateComponent,
                            r = e.currentTarget.dataset,
                            o = r.slot,
                            l = r.anchor;
                        if (o && l) {
                            if (l === N.b.Component) return void s(i, o);
                            a(i, o, l)
                        }
                    }, n.onDeactivate = function() {
                        n.props.onDeactivate(n.props.installedExtension), n.dropdown && n.dropdown.toggleBalloon(!1)
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this,
                        n = this.props.installedExtension;
                    return v.createElement(L.a, {
                        openByDefault: this.props.openByDefault,
                        ref: function(n) {
                            e.dropdown = n
                        }
                    }, v.createElement(R.v, {
                        dropdown: !0,
                        type: R.B.Text
                    }, n.activationConfig.state === N.a.Active ? this.renderActivePresence(n.activationConfig.slot) : Object(E.d)("Activate", "ActivateExtensionDropdown")), v.createElement(R.q, {
                        size: R.s.Medium,
                        offsetY: "-0.1rem",
                        noTail: !0
                    }, v.createElement(R._35, {
                        color: R.K.Link,
                        padding: 1
                    }, this.renderAnchorOptions())))
                }, n
            }(v.Component),
            Q = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onUninstall = function() {
                        return n.props.onUninstall(n.props.installedExtension)
                    }, n.renderActivationStatus = function() {
                        var e = n.props.installedExtension,
                            t = e.self && e.self.canActivate,
                            i = v.createElement(V, {
                                installedExtension: e,
                                availableSlots: n.props.availableSlots,
                                onActivate: n.props.onActivate,
                                onActivateComponent: n.props.onActivateComponent,
                                onCreatePanelAndActivate: n.props.onCreatePanelAndActivate,
                                onDeactivate: n.props.onDeactivate
                            });
                        return t ? i : Object(N.k)(e) ? v.createElement(R._8, {
                            display: R.R.Flex,
                            alignItems: R.c.Center
                        }, v.createElement(R.Q, {
                            color: R.K.Alt2
                        }, Object(E.d)("Needs Configuration", "InstalledExtensionActions"))) : v.createElement(R._8, {
                            display: R.R.Flex,
                            alignItems: R.c.Center
                        }, v.createElement(R.Q, {
                            color: R.K.Alt2
                        }, Object(E.d)("Activation Disabled", "InstalledExtensionActions")))
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.installedExtension,
                        t = e.channelName,
                        i = n.extension,
                        a = i.clientID,
                        s = i.version;
                    return v.createElement(R._8, {
                        padding: 1,
                        display: R.R.Flex,
                        flexWrap: R.U.NoWrap,
                        justifyContent: R._7.Between
                    }, this.renderActivationStatus(), v.createElement(R._8, {
                        display: R.R.Flex,
                        flexWrap: R.U.NoWrap
                    }, v.createElement(I.a, {
                        to: Object(C.b)(t, a, s)
                    }, v.createElement(R.w, {
                        ariaLabel: Object(E.d)("Configure", "InstalledExtensionActions"),
                        icon: R._25.Gear
                    })), v.createElement(R.w, {
                        ariaLabel: Object(E.d)("Uninstall", "InstalledExtensionActions"),
                        icon: R._25.Trash,
                        onClick: this.onUninstall
                    })))
                }, n
            }(v.Component),
            z = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props.installedExtension.extension,
                            t = Object(N.i)(e.views).map(function(e) {
                                return v.createElement(R._8, {
                                    key: e,
                                    display: R.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, v.createElement(U.a, {
                                    anchorType: e
                                }))
                            });
                        return Object(N.j)(e.views).includes(D.ExtensionPlatform.Mobile) && t.push(v.createElement(R._8, {
                            key: "mobile",
                            display: R.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, v.createElement(U.a, {
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
                        s = e.onActivate,
                        r = e.onCreatePanelAndActivate,
                        o = e.onDeactivate,
                        l = n.extension;
                    return v.createElement(R._35, {
                        background: R.n.Base,
                        border: !0
                    }, v.createElement(R._35, {
                        padding: 1,
                        borderBottom: !0
                    }, v.createElement(R.C, {
                        row: !0,
                        border: !1
                    }, v.createElement(R.E, {
                        alt: l.name,
                        src: this.state.hasCardImageError ? E.a.defaultAvatarURL : l.iconURL,
                        aspect: R.l.Aspect1x1,
                        size: R.F.Size6,
                        onError: this.onCardImageError
                    }), v.createElement(R.D, null, v.createElement(R._8, {
                        padding: 1
                    }, v.createElement(I.a, {
                        to: Object(C.d)(l.clientID, l.version)
                    }, v.createElement(R.Q, {
                        type: R._49.H5
                    }, l.name)), this.renderAnchorTypePills(), l.state !== N.f.Released && v.createElement(P.a, {
                        state: l.state
                    }))))), v.createElement(Q, {
                        channelName: t,
                        installedExtension: n,
                        availableSlots: i,
                        onUninstall: a,
                        onActivate: s,
                        onActivateComponent: this.props.onActivateComponent,
                        onCreatePanelAndActivate: r,
                        onDeactivate: o
                    }))
                }, n
            }(v.Component),
            G = function(e) {
                return v.createElement(R._8, {
                    padding: 1,
                    fullWidth: !0
                }, v.createElement(R._8, {
                    padding: {
                        bottom: 1
                    }
                }, v.createElement(R.Q, {
                    type: R._49.H4,
                    noWrap: !0
                }, Object(E.d)("Installed Extensions", "InstalledExtensionList"))), e.installedExtensions.map(function(n) {
                    return v.createElement(R._8, {
                        key: n.id,
                        padding: {
                            bottom: 1
                        }
                    }, v.createElement(z, {
                        channelName: e.channelName,
                        installedExtension: n,
                        availableSlots: e.availableSlots,
                        onCreatePanelAndActivate: e.onCreatePanelAndActivate,
                        onActivate: e.onActivate,
                        onActivateComponent: e.onActivateComponent,
                        onDeactivate: e.onDeactivate,
                        onUninstall: e.onUninstall
                    }))
                }), !e.isLoading && 0 === e.installedExtensions.length && v.createElement(R.Q, {
                    type: R._49.P
                }, Object(E.d)("No installed extensions.", "InstalledExtensionList")))
            };
        G.displayName = "InstalledExtensionList";
        var H = function() {
            return v.createElement(j, {
                dismissedStorageKey: "extensions_dashboard_mobile_banner_dismissed",
                enabledDynamicKey: "extensions_mobile_banner_enabled"
            }, v.createElement(R.Q, {
                fontSize: R.V.Size5,
                type: R._49.P
            }, Object(E.d)("Extensions are now available on mobile. See which Extensions are mobile-ready in the manager below.", "MobileExtensionsBanner"), " ", v.createElement("a", {
                target: "_blank",
                rel: "noopener",
                href: "https://blog.twitch.tv/extensions-on-mobile-d6cf9e3be759"
            }, Object(E.d)("Learn more.", "MobileExtensionsBanner"))))
        };
        H.displayName = "MobileExtensionsBanner";
        var q = t("eyrD"),
            K = this,
            Y = function(e, n, t, a, s, r) {
                return i.__awaiter(K, void 0, void 0, function() {
                    var o, l, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!(r && e.self && e.self.canActivate)) return [3, 6];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 5, , 6]), [4, n(Object(f.a)({
                                    channelID: r.currentUser.id,
                                    type: A.a.Extension
                                }))];
                            case 2:
                                return (o = i.sent().data).createPanel && o.createPanel.panel && o.createPanel.panel.type === A.a.Extension ? (l = o.createPanel.panel, [4, J(e, l.slotID, N.b.Panel, t, a, s)]) : [3, 4];
                            case 3:
                                i.sent(), d = function(e) {
                                    return e.currentUser.panels.push(l), e
                                }, Object(f.e)(q, {}, d), i.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return i.sent(), s(), [3, 6];
                            case 6:
                                return [2]
                        }
                    })
                })
            },
            $ = function(e, n, t, a, s, r, o, l) {
                return i.__awaiter(K, void 0, void 0, function() {
                    var d, c;
                    return i.__generator(this, function(i) {
                        if (l && e.self && e.self.canActivate) {
                            if (d = l.currentUser.installedExtensions.find(function(e) {
                                    var i = e.activationConfig;
                                    return i.state === N.a.Active && i.slot === n && i.anchor === t
                                }), c = function() {
                                    return J(e, n, t, a, r, o)
                                }, !d) return [2, c()];
                            s({
                                activationSlot: n,
                                destructionType: N.c.Replace,
                                existingExtensionName: d.extension.name,
                                existingMonetizationType: Object(N.h)(d.extension),
                                onConfirm: c
                            })
                        }
                        return [2]
                    })
                })
            },
            J = function(e, n, t, a, s, r) {
                return i.__awaiter(K, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, a(Object(f.a)({
                                    extensionInstallationID: e.id,
                                    slot: n,
                                    anchor: t
                                }))];
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                return i.sent(), r(), [3, 3];
                            case 3:
                                return s({
                                    activations: [{
                                        extensionName: e.extension.name,
                                        slot: n
                                    }]
                                }), [2]
                        }
                    })
                })
            },
            X = function(e, n, t, a) {
                return i.__awaiter(K, void 0, void 0, function() {
                    var s, r;
                    return i.__generator(this, function(i) {
                        return (s = Object(N.h)(e.extension)) ? (r = function() {
                            return Z(e, n, a)
                        }, t({
                            destructionType: N.c.Deactivate,
                            extensionName: e.extension.name,
                            monetizationType: s,
                            onConfirm: r
                        }), [2]) : [2, Z(e, n, a)]
                    })
                })
            },
            Z = function(e, n, t) {
                return i.__awaiter(K, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n(Object(f.a)({
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
            ee = function(e, n, t, a, s, r) {
                return i.__awaiter(K, void 0, void 0, function() {
                    var o, l, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!r) return [3, 4];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, t(Object(f.a)({
                                    extensionID: e.id,
                                    channelID: r.currentUser.id
                                }))];
                            case 2:
                                return (o = i.sent().data).installExtension && o.installExtension.installedExtension && (l = o.installExtension.installedExtension, d = function(e) {
                                    return e.currentUser.installedExtensions.push(l), e
                                }, Object(f.e)(q, {}, d), a({
                                    extensionClientID: l.extension.clientID,
                                    extensionVersion: l.extension.version,
                                    login: n
                                })), [3, 4];
                            case 3:
                                return i.sent(), s(), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            ne = function(e, n, t, a) {
                return i.__awaiter(K, void 0, void 0, function() {
                    var s;
                    return i.__generator(this, function(i) {
                        return s = function() {
                            return te(e.id, n, a)
                        }, t({
                            destructionType: N.c.Uninstall,
                            extensionName: e.extension.name,
                            monetizationType: Object(N.h)(e.extension),
                            onConfirm: s
                        }), [2]
                    })
                })
            },
            te = function(e, n, t) {
                return i.__awaiter(K, void 0, void 0, function() {
                    var a, s, r;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n(Object(f.a)({
                                    extensionInstallationID: e
                                }))];
                            case 1:
                                return (a = i.sent().data).uninstallExtension && a.uninstallExtension.id && (s = a.uninstallExtension.id, r = function(e) {
                                    var n = e.currentUser.installedExtensions;
                                    return e.currentUser.installedExtensions = n.filter(function(e) {
                                        return e.id !== s
                                    }), e
                                }, Object(f.e)(q, {}, r)), [3, 3];
                            case 2:
                                return i.sent(), t(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            ie = function(e, n, t, a, s, r, o) {
                return i.__awaiter(K, void 0, void 0, function() {
                    var l, d, c;
                    return i.__generator(this, function(u) {
                        if (l = function(e) {
                                ! function(e, n, t, a, s) {
                                    i.__awaiter(K, void 0, void 0, function() {
                                        var r, o, l;
                                        return i.__generator(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    if (!s) return [2];
                                                    i.label = 1;
                                                case 1:
                                                    return i.trys.push([1, 3, , 4]), [4, n(Object(f.a)({
                                                        channelID: s.currentUser.id,
                                                        activations: e
                                                    }))];
                                                case 2:
                                                    return (r = i.sent().data).applyExtensionActivations && r.applyExtensionActivations.installedExtensions && (o = r.applyExtensionActivations.installedExtensions, l = o.filter(function(n) {
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
                                }), a, s, r, o)
                            }, o) {
                            if (!(d = e.extension.views.component)) return [2];
                            c = o.currentUser.installedExtensions.filter(function(e) {
                                var n = e.activationConfig;
                                return n.state === N.a.ACTIVE && n.anchor === N.b.COMPONENT
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
            ae = t("deLJ"),
            se = t("MD1s"),
            re = t("Mtzm"),
            oe = t("hd33"),
            le = t("448H"),
            de = (t("D/X5"), function(e, n) {
                return e.extension.clientID > n.extension.clientID ? 1 : e.extension.clientID < n.extension.clientID ? -1 : e.extension.version < n.extension.version ? 1 : e.extension.version > n.extension.version ? -1 : 0
            }),
            ce = "extensions_dashboard_show_released_only",
            ue = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        availableExtensions: [],
                        availableExtensionsSearchQuery: "",
                        availableExtensionsShowReleasedOnly: E.l.get(ce, !1),
                        availableSlots: {
                            components: [],
                            overlays: [],
                            panels: []
                        },
                        installedExtensions: []
                    }, n.searchQueryDebounceDurationMS = 250, n.onCreatePanelAndActivateExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, s, r, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.createPanel, a = n.activateExtension, s = n.showActivatedModal, r = n.showErrorModal, o = n.userData, [4, Y(e, t, a, s, r, o)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onActivateComponentExtensions = function(e, t) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, a, s, r, o, l;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, a = n.applyExtensionActivations, s = n.userData, r = n.showComponentActivateModal, o = n.showActivatedModal, l = n.showErrorModal, [4, ie(e, t, r, a, o, l, s)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onActivateExtension = function(e, t, a) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, s, r, o, l, d;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, s = n.activateExtension, r = n.showDestructionWarningModal, o = n.showActivatedModal, l = n.showErrorModal, d = n.userData, [4, $(e, t, a, s, r, o, l, d)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onDeactivateExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.deactivateExtension, a = n.showDestructionWarningModal, s = n.showErrorModal, [4, X(e, t, a, s)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onUninstallExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.uninstallExtension, a = n.showDestructionWarningModal, s = n.showErrorModal, [4, ne(e, t, a, s)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onInstallExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, s, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.userData, a = n.showInstalledModal, s = n.showErrorModal, r = this.props.installExtension, [4, ee(e, this.props.channelName, r, a, s, t)];
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
                                            query: le,
                                            variables: {
                                                afterCursor: e.extensions.edges[e.extensions.edges.length - 1].cursor,
                                                search: this.state.availableExtensionsSearchQuery,
                                                state: this.state.availableExtensionsShowReleasedOnly ? N.f.Released : null
                                            },
                                            updateQuery: function(e, n) {
                                                var t = n.fetchMoreResult;
                                                return i.__assign({}, t, {
                                                    extensions: i.__assign({}, t.extensions, {
                                                        edges: Object(f.c)(e.extensions.edges, t.extensions.edges)
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
                        }), E.l.set(ce, e), n.updateExtensionsFilters(n.state.availableExtensionsSearchQuery, e)
                    }, n.updateExtensionsFilters = function(e, t) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, a, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = this.props, a = n.availableExtensionListData, s = n.showErrorModal, !a || a.error || a.loading) return [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, a.refetch({
                                            search: e,
                                            state: t ? N.f.Released : null
                                        })];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return i.sent(), s(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.componentDidMount = function() {
                    E.o.setPageTitle(Object(E.d)("Extensions", "DashboardExtensionsManagerPageTitle"))
                }, n.prototype.componentWillReceiveProps = function(e) {
                    if (e !== this.props) {
                        var n = this.props.userData,
                            t = e.userData;
                        if (n !== t && t && !t.loading && !t.error) {
                            var i = t.currentUser.installedExtensions.slice();
                            i.sort(de), this.setState({
                                installedExtensions: i,
                                availableSlots: (o = t.currentUser.panels, {
                                    components: ["extension-component-1", "extension-component-2"],
                                    overlays: ["extension-overlay-1"],
                                    panels: o.reduce(function(e, n) {
                                        return n.type === A.a.Extension && e.push(n.slotID), e
                                    }, []).sort()
                                })
                            })
                        }
                        var a = this.props.availableExtensionListData,
                            s = e.availableExtensionListData;
                        if (a !== s && s && !s.loading && !s.error) {
                            var r = s.extensions.edges.map(function(e) {
                                return e.node
                            });
                            this.setState({
                                availableExtensions: r
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
                    if (t !== a) return v.createElement(k.b, {
                        to: Object(C.c)(a)
                    });
                    var s = void 0 !== i && i.loading,
                        r = void 0 !== n && n.loading,
                        o = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.roles.isExtensionsApprover && !e.currentUser.roles.isExtensionsDeveloper)
                        }(i),
                        l = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.cheer)
                        }(i),
                        d = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.roles.isAffiliate && !e.currentUser.roles.isPartner)
                        }(i);
                    return v.createElement(g.b, null, v.createElement(R._35, {
                        padding: 2,
                        background: R.n.Alt
                    }, v.createElement(R._8, {
                        padding: {
                            bottom: 1
                        }
                    }, v.createElement(R.Q, {
                        type: R._49.H3
                    }, Object(E.d)("Extensions", "DashboardExtensionsManagerPage"))), v.createElement(H, null), d && v.createElement(B, null), v.createElement(R._8, {
                        display: R.R.Flex,
                        flexWrap: R.U.NoWrap,
                        padding: {
                            top: 1
                        }
                    }, v.createElement(R._35, {
                        className: "installed-extension-list-container",
                        border: !0,
                        display: R.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, v.createElement(G, {
                        channelName: t,
                        installedExtensions: this.state.installedExtensions,
                        isLoading: s,
                        availableSlots: this.state.availableSlots,
                        onCreatePanelAndActivate: this.onCreatePanelAndActivateExtension,
                        onActivate: this.onActivateExtension,
                        onActivateComponent: this.onActivateComponentExtensions,
                        onDeactivate: this.onDeactivateExtension,
                        onUninstall: this.onUninstallExtension
                    })), v.createElement(R._8, {
                        display: R.R.Flex,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        }
                    }, v.createElement(M, {
                        extensions: this.state.availableExtensions,
                        installedExtensions: this.state.installedExtensions,
                        isChannelCheeringEnabled: l,
                        isLoading: r,
                        searchQuery: this.state.availableExtensionsSearchQuery,
                        displayShowReleasedOnlyCheckbox: o,
                        showReleasedOnly: this.state.availableExtensionsShowReleasedOnly,
                        onInstall: this.onInstallExtension,
                        canLoadMore: this.canLoadMoreAvailableExtensions,
                        loadMore: this.loadMoreAvailableExtensions,
                        onSearchQueryChange: this.updateSearchQuery,
                        onShowReleasedOnlyChange: this.updateReleasedStatusQuery
                    }))), v.createElement(O.a, {
                        learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                        page: "extension-manager"
                    })))
                }, n
            }(v.Component);
        var me = Object(p.compose)(Object(F.d)("ExtensionManagerPage", {
            destination: b.a.ChannelDashboardExtensions
        }), Object(h.a)({
            location: y.PageviewLocation.DashboardExtensions
        }), Object(x.a)(le, {
            name: "availableExtensionListData",
            options: {
                variables: {get state() {
                        return E.l.get(ce, !1) ? N.f.Released : null
                    }
                }
            }
        }), Object(x.a)(q, {
            options: {
                fetchPolicy: "network-only"
            },
            name: "userData"
        }), Object(x.a)(S, {
            name: "installExtension"
        }), Object(x.a)(_, {
            name: "uninstallExtension"
        }), Object(x.a)(se, {
            name: "applyExtensionActivations"
        }), Object(x.a)(ae, {
            name: "activateExtension"
        }), Object(x.a)(oe, {
            name: "deactivateExtension"
        }), Object(x.a)(re, {
            name: "createPanel"
        }))(ue);
        var ve = Object(a.b)(function(e) {
            var n = Object(o.c)(e);
            return {
                userLogin: n && n.login || ""
            }
        }, function(e) {
            return Object(s.b)({
                showActivatedModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(r.d)(l.a, n)
                },
                showInstalledModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(r.d)(m.a, n)
                },
                showDestructionWarningModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(r.d)(c.a, n)
                },
                showErrorModal: function() {
                    return Object(r.d)(u.a, {})
                },
                showComponentActivateModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(r.d)(d.a, n)
                }
            }, e)
        })(me);
        t.d(n, "ExtensionManagerPage", function() {
            return ve
        })
    }
});
//# sourceMappingURL=pages.extension-manager-1de034114e1efd311af94d7a7127eaab.js.map