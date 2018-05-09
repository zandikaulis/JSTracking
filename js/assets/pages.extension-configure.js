webpackJsonp([91], {
    "1ZLG": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, a = t("TToO"),
            r = t("GiK3"),
            o = t("CIox"),
            s = t("F8kA"),
            l = t("Odds"),
            c = t("6sO2"),
            d = t("q7Ag");

        function u(e) {
            var n = e.channelName,
                t = e.selectedTab;
            return r.createElement(l._8, {
                display: l.R.InlineBlock,
                padding: {
                    bottom: 2
                }
            }, r.createElement(l._37, null, r.createElement(l._36, {
                linkTo: Object(d.e)(n),
                active: t === i.Store
            }, r.createElement(l._2, {
                padding: {
                    right: 1
                }
            }, r.createElement(l.Q, {
                type: l._49.H4
            }, Object(c.d)("Store", "DiscoveryNavBar")))), r.createElement(l._36, {
                linkTo: Object(d.f)(n),
                active: t === i.MyExtensions
            }, r.createElement(l._2, {
                padding: {
                    x: 1
                }
            }, r.createElement(l.Q, {
                type: l._49.H4
            }, Object(c.d)("My Extensions", "DiscoveryNavBar")))), r.createElement(l._36, {
                linkTo: Object(d.g)(n),
                active: t === i.Whitelisted
            }, r.createElement(l._2, {
                padding: {
                    left: 1
                }
            }, r.createElement(l.Q, {
                type: l._49.H4
            }, Object(c.d)("Whitelisted", "DiscoveryNavBar"))))))
        }! function(e) {
            e[e.Store = 0] = "Store", e[e.MyExtensions = 1] = "MyExtensions", e[e.Whitelisted = 2] = "Whitelisted"
        }(i || (i = {}));
        var m = t("RH2O"),
            E = t("2KeS"),
            p = t("V5M+"),
            v = t("9Gfr"),
            h = t("SfDx"),
            f = t("3zLD"),
            g = t("N221"),
            x = t("7vx8"),
            b = t("j7/Y"),
            k = t("oIkB"),
            _ = t("w9tK"),
            y = t("vH/s"),
            N = t("G8hb"),
            O = t("CSlQ"),
            S = function() {
                return r.createElement(l._8, {
                    margin: {
                        right: 1
                    }
                }, r.createElement(l._8, {
                    display: l.R.Flex,
                    flexDirection: l.T.Column
                }, r.createElement(l._14, {
                    width: 300,
                    height: 200
                }), r.createElement(l._8, {
                    margin: {
                        top: .5
                    }
                }, r.createElement(l._14, {
                    width: 280,
                    height: 20
                })), r.createElement(l._8, {
                    margin: {
                        top: .5
                    }
                }, r.createElement(l._14, {
                    width: 250,
                    height: 15
                })), r.createElement(l._8, {
                    display: l.R.Flex,
                    flexDirection: l.T.Row,
                    margin: {
                        top: .5
                    }
                }, r.createElement(l._8, {
                    margin: {
                        right: .5
                    }
                }, r.createElement(l._14, {
                    width: 80,
                    height: 15
                })), r.createElement(l._8, {
                    margin: {
                        right: .5
                    }
                }, r.createElement(l._14, {
                    width: 80,
                    height: 15
                })), r.createElement(l._8, null, r.createElement(l._14, {
                    width: 80,
                    height: 15
                })))))
            },
            C = function(e) {
                for (var n = e.count, t = [], i = 0; i < n; i++) t.push(r.createElement(S, {
                    key: i
                }));
                return r.createElement(l._8, null, r.createElement(l._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(l._14, {
                    width: 120,
                    height: 25
                })), r.createElement(l._8, {
                    display: l.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, t))
            },
            I = t("BwgW"),
            R = t("zGVe"),
            D = t.n(R),
            P = t("2QwI"),
            A = t("ry+I"),
            T = (t("KHnp"), function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        imageURL: n.props.discoverySplash || D.a,
                        isInstalling: !1
                    }, n.renderHoverElement = function() {
                        var e = n.state.isInstalling,
                            t = n.props,
                            i = t.extensionClientID,
                            a = t.extensionVersion,
                            o = t.isInstalled,
                            d = t.summary;
                        return r.createElement(l._35, {
                            className: "extension-card__details-preview",
                            background: l.n.AccentAlt2,
                            position: l._15.Absolute,
                            attachRight: !0,
                            attachTop: !0,
                            attachLeft: !0,
                            attachBottom: !0
                        }, r.createElement(l._8, {
                            display: l.R.Flex,
                            flexDirection: l.T.Column,
                            justifyContent: l._7.Center,
                            padding: 2,
                            fullHeight: !0
                        }, r.createElement(l.Q, {
                            type: l._49.P
                        }, d), r.createElement(l._8, {
                            display: l.R.Flex,
                            flexWrap: l.U.NoWrap,
                            justifyContent: l._7.Center,
                            padding: {
                                top: 1
                            }
                        }, r.createElement(s.a, {
                            to: "/ext/" + i + "-" + a
                        }, r.createElement(l.v, {
                            type: l.B.Hollow
                        }, Object(c.d)("Details", "ExtensionCard"))), r.createElement(l._8, {
                            padding: {
                                left: 1
                            }
                        }, o ? r.createElement(l.v, {
                            disabled: !0
                        }, Object(c.d)("Installed", "ExtensionCard")) : r.createElement(l.v, {
                            onClick: n.installExtension,
                            state: e ? l.A.Loading : l.A.Default
                        }, Object(c.d)("Install", "ExtensionCard"))))))
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props,
                            t = e.supportedAnchors,
                            i = e.supportedPlatforms,
                            a = t.map(function(e) {
                                return r.createElement(l._8, {
                                    key: e,
                                    display: l.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, r.createElement(P.a, {
                                    anchorType: e
                                }))
                            });
                        return i.includes(I.ExtensionPlatform.Mobile) && a.push(r.createElement(l._8, {
                            key: "mobile",
                            display: l.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, r.createElement(P.a, {
                            mobile: !0
                        }))), a
                    }, n.installExtension = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e, n, t;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e = this.props, n = e.installExtension, t = e.extensionID, !n) return [3, 5];
                                        this.setState({
                                            isInstalling: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, n(t)];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return i.sent(), [3, 4];
                                    case 4:
                                        this.setState({
                                            isInstalling: !1
                                        }), i.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, n.onCardImageError = function() {
                        n.setState({
                            imageURL: D.a
                        })
                    }, n
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.authorName,
                        t = e.extensionName,
                        i = e.extensionState;
                    return r.createElement(l._8, {
                        className: "extension-card"
                    }, r.createElement(l.C, null, r.createElement(l._35, {
                        border: !0,
                        background: l.n.Base,
                        position: l._15.Relative
                    }, r.createElement(l.E, {
                        src: this.state.imageURL,
                        alt: t,
                        aspect: l.l.Aspect4x3,
                        onError: this.onCardImageError
                    }), this.renderHoverElement()), r.createElement(l._8, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(l.Q, {
                        type: l._49.H6
                    }, t), r.createElement(l.Q, {
                        type: l._49.Span,
                        color: l.K.Alt2,
                        fontSize: l.V.Size7
                    }, n), r.createElement(l._8, {
                        padding: {
                            top: .5
                        }
                    }, this.renderAnchorTypePills(), i !== N.e.RELEASED && r.createElement(A.a, {
                        state: i
                    })))))
                }, n
            }(r.Component)),
            w = t("KqsW"),
            F = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.categoryID,
                        t = e.channelName;
                    return r.createElement(l._8, null, r.createElement(l._8, {
                        display: l.R.Flex,
                        justifyContent: l._7.Between,
                        alignItems: l.c.Baseline
                    }, r.createElement(l.Q, {
                        type: l._49.H4
                    }, "Category Name"), r.createElement(l._35, {
                        fontSize: l.V.Size5
                    }, r.createElement(l.O, {
                        to: Object(d.a)(t, n)
                    }, Object(c.d)("See more >", "CategoryPreview")))), r.createElement(l._2, {
                        margin: {
                            top: 1,
                            bottom: 2
                        }
                    }, r.createElement(w.a, {
                        items: this.renderCards(),
                        insetStyle: !0
                    })))
                }, n.prototype.renderCards = function() {
                    return this.props.extensions.map(function(e) {
                        return r.createElement(l._8, {
                            margin: {
                                right: 1
                            },
                            key: e.extensionID
                        }, r.createElement(T, a.__assign({}, e)))
                    })
                }, n
            }(r.Component),
            j = t("L2iG"),
            L = t("Igge"),
            M = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.installExtension = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, t, i, r, o, s, l, c;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = this.props, t = n.extensionDiscoveryData, i = n.installExtension, r = n.showExtensionErrorModal, o = n.showExtensionInstalledModal, !(s = t.currentUser) || !s.id || !s.login) return [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, i(Object(k.a)({
                                            channelID: s.id,
                                            extensionID: e
                                        }))];
                                    case 2:
                                        return (l = a.sent().data).installExtension && l.installExtension.installedExtension && (c = l.installExtension.installedExtension, Object(k.e)(L, {}, function(e) {
                                            return e.currentUser && e.currentUser.installedExtensions && e.currentUser.installedExtensions.push(c), e
                                        }), o({
                                            extensionClientID: c.extension.clientID,
                                            extensionVersion: c.extension.version,
                                            login: s.login
                                        })), [3, 4];
                                    case 3:
                                        return a.sent(), r(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return a.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e = this,
                        n = this.props.extensionDiscoveryData,
                        t = n.extensions;
                    if (n.loading) {
                        for (var i = [], a = 0; a < 4; a++) i.push(r.createElement(C, {
                            key: a,
                            count: 8
                        }));
                        return r.createElement(l._8, null, i)
                    }
                    var o = this.props.match.params.channelName,
                        s = [];
                    t && t.edges && t.edges.forEach(function(n) {
                        var t = n.node;
                        t && s.push({
                            authorName: t.authorName,
                            channelName: o,
                            discoverySplash: "",
                            extensionClientID: t.clientID,
                            extensionID: t.id,
                            extensionName: t.name,
                            extensionState: t.state,
                            extensionVersion: t.version,
                            isInstalled: e.isExtensionInstalled(t.id),
                            summary: t.summary,
                            supportedAnchors: Object(N.h)(t.views),
                            supportedPlatforms: Object(N.i)(t.views)
                        })
                    });
                    var c = [1, 2, 3].map(function(n, t) {
                        return r.createElement(F, {
                            key: t,
                            channelName: o,
                            categoryID: t.toString(),
                            extensions: s,
                            installExtension: e.installExtension
                        })
                    });
                    return r.createElement(g.b, null, r.createElement(l._8, null, c))
                }, n.prototype.isExtensionInstalled = function(e) {
                    var n = this.props.extensionDiscoveryData.currentUser;
                    return !(!n || !n.installedExtensions) && n.installedExtensions.some(function(n) {
                        return n.extension.id === e
                    })
                }, n
            }(r.Component),
            U = Object(f.compose)(Object(O.d)("ExtensionDiscoveryPage", {
                destination: _.a.ChannelDashboardExtensions
            }), Object(b.a)({
                location: y.PageviewLocation.DashboardExtensions
            }), Object(x.a)(L, {
                name: "extensionDiscoveryData"
            }), Object(x.a)(j, {
                name: "installExtension"
            }))(M);
        var B = Object(m.b)(null, function(e) {
                return Object(E.b)({
                    showExtensionErrorModal: function() {
                        return Object(p.d)(v.a, {})
                    },
                    showExtensionInstalledModal: function(e) {
                        var n = a.__rest(e, []);
                        return Object(p.d)(h.a, n)
                    }
                }, e)
            })(U),
            V = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    return r.createElement(l.Q, null, "Extension Management")
                }, n
            }(r.Component),
            W = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.renderExtensionManagementPage = function(e) {
                        var n = e.match;
                        return r.createElement(r.Fragment, null, r.createElement(u, {
                            channelName: n.params.channelName,
                            selectedTab: i.MyExtensions
                        }), r.createElement(V, null))
                    }, n.renderExtensionDiscoveryPage = function(e) {
                        var n = e.match;
                        return r.createElement(r.Fragment, null, r.createElement(u, {
                            channelName: n.params.channelName,
                            selectedTab: i.Store
                        }), r.createElement(B, null))
                    }, n
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    return r.createElement(l._8, {
                        padding: {
                            x: 4,
                            top: 2
                        }
                    }, r.createElement(s.e, null, r.createElement(o.c, {
                        path: "/:channelName/dashboard/extensions-discovery/installed",
                        render: this.renderExtensionManagementPage
                    }), r.createElement(o.c, {
                        path: "/:channelName/dashboard/extensions-discovery",
                        render: this.renderExtensionDiscoveryPage
                    })))
                }, n
            }(r.Component);
        t.d(n, "ExtensionDashboardRoot", function() {
            return W
        })
    },
    "2QwI": function(e, n, t) {
        "use strict";
        var i = t("BwgW"),
            a = t("GiK3"),
            r = t("nP5L"),
            o = t("VHHT"),
            s = t("Odds"),
            l = function(e) {
                return e.anchorType ? a.createElement(s._12, {
                    label: Object(r.a)(e.anchorType, !0)
                }) : e.mobile ? a.createElement(s._12, {
                    label: Object(o.a)(i.ExtensionPlatform.Mobile, !0)
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
            r = t("+8VM"),
            o = t("sfWM"),
            s = t("6sO2"),
            l = t("Odds"),
            c = function() {
                return a.createElement(l._8, null, a.createElement(l.Q, null, Object(s.d)("There was an error. Please try again later.", "ExtensionErrorModal")))
            };
        c.displayName = "ExtensionErrorModalPresentation";
        var d = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(o.a, null, a.createElement(c, null), a.createElement(r.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(a.Component),
            u = d;
        t.d(n, !1, function() {
            return d
        }), t.d(n, "a", function() {
            return u
        })
    },
    G8hb: function(e, n, t) {
        "use strict";
        t.d(n, "d", function() {
            return i
        }), t.d(n, "c", function() {
            return a
        }), t.d(n, "a", function() {
            return r
        }), t.d(n, "e", function() {
            return o
        }), t.d(n, "b", function() {
            return s
        }), n.g = function(e) {
            if (e.isBitsEnabled) return i.Bits;
            if (e.vendorCode && e.sku) return i.InExtensionPurchases;
            return null
        }, n.h = function(e) {
            var n = [];
            e.component && e.component.viewerURL && n.push(s.Component);
            e.panel && e.panel.viewerURL && n.push(s.Panel);
            e.videoOverlay && e.videoOverlay.viewerURL && n.push(s.VideoOverlay);
            return n
        }, n.i = function(e) {
            var n = [c.ExtensionPlatform.Web];
            e.mobile && e.mobile.viewerURL && n.push(c.ExtensionPlatform.Mobile);
            return n
        }, n.f = function(e) {
            return e.extension.id + ":" + e.extension.version
        }, n.j = function(e) {
            if (e.requiredActions) return e.requiredActions.some(function(e) {
                var n = e.type;
                return n === l.RequiresConfiguration
            });
            return !1
        };
        var i, a, r, o, s, l, c = t("BwgW");
        t.n(c);
        ! function(e) {
            e[e.Bits = 0] = "Bits", e[e.InExtensionPurchases = 1] = "InExtensionPurchases"
        }(i || (i = {})),
        function(e) {
            e[e.Deactivate = 0] = "Deactivate", e[e.Replace = 1] = "Replace", e[e.Uninstall = 2] = "Uninstall"
        }(a || (a = {})),
        function(e) {
            e.Active = "ACTIVE", e.Inactive = "INACTIVE", e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
        }(r || (r = {})),
        function(e) {
            e.Approved = "APPROVED", e.AssetsUploaded = "ASSETS_UPLOADED", e.Deleted = "DELETED", e.Deprecated = "DEPRECATED", e.InReview = "IN_REVIEW", e.InTest = "IN_TEST", e.PendingAction = "PENDING_ACTION", e.ReadyForReview = "READY_FOR_REVIEW", e.Rejected = "REJECTED", e.Released = "RELEASED", e.Uploading = "UPLOADING", e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
        }(o || (o = {})),
        function(e) {
            e.Component = "COMPONENT", e.Hidden = "HIDDEN", e.Panel = "PANEL", e.VideoOverlay = "VIDEO_OVERLAY", e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
        }(s || (s = {})),
        function(e) {
            e.RequiresConfiguration = "REQUIRES_CONFIGURATION", e.PromptForPermissions = "PROMPT_FOR_PERMISSIONS", e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
        }(l || (l = {}))
    },
    HrG2: function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("6sO2"),
            r = t("Odds"),
            o = function(e) {
                return i.createElement(r._35, {
                    background: r.n.Alt2,
                    display: r.R.Flex,
                    alignItems: r.c.Stretch
                }, e.showDashboardLink && i.createElement(r._35, {
                    border: !0,
                    display: r.R.Flex,
                    flexGrow: 0
                }, i.createElement(r.w, {
                    ariaLabel: Object(a.d)("View all extensions", "ExtensionPageHeader"),
                    size: r.x.Large,
                    linkTo: e.dashboardURL,
                    icon: r._25.AngleLeft
                })), i.createElement(r._35, {
                    border: !0,
                    display: r.R.Flex,
                    flexGrow: 1,
                    padding: 2
                }, i.createElement(r.Q, {
                    type: r._49.H4
                }, e.title)))
            };
        o.displayName = "ExtensionPageHeader", t.d(n, "a", function() {
            return o
        })
    },
    Igge: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionDiscoveryPage"
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
                                                    value: "version"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
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
                                value: "10"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "state"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "RELEASED"
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
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
                                                    value: "name"
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
                end: 343
            }
        };
        t.loc.source = {
            body: "query ExtensionDiscoveryPage {\ncurrentUser {\nid\ninstalledExtensions {\nid\nextension {\nid\nversion\n}\n}\nlogin\n}\nextensions(first: 10 state: RELEASED) {\nedges {\nnode {\nid\nauthorName\nclientID\nname\nstate\nsummary\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    KHnp: function(e, n) {},
    KqsW: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return p
        });
        var i, a = t("TToO"),
            r = t("HW6M"),
            o = (t.n(r), t("GiK3")),
            s = (t.n(o), t("6sO2")),
            l = t("CSlQ"),
            c = t("Odds"),
            d = t("M4d4"),
            u = (t.n(d), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(i || (i = {}));
        var m, E = ((m = {})[i.Previous] = c._25.AngleLeft, m[i.Next] = c._25.AngleRight, m),
            p = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1,
                        windowWidth: window.innerWidth
                    }, n.onResize = function() {
                        n.setState({
                            windowWidth: window.innerWidth
                        })
                    }, n.moveCarouselForward = function() {
                        if (!n.isForwardButtonDisabled() && n.props.items) {
                            for (var e = n.getCarouselChildren(), t = n.getCarouselWidth(), i = n.state.currentElementIndex + 1, a = i; a < e.length; a++) {
                                if (e[a].getBoundingClientRect().right - n.getBaseOffset() > t) {
                                    i = a;
                                    break
                                }
                            }
                            n.setState({
                                currentElementIndex: i
                            })
                        }
                    }, n.moveCarouselBackward = function() {
                        if (!n.isBackButtonDisabled()) {
                            for (var e = n.getCarouselChildren(), t = n.getCarouselWidth(), i = n.state.currentElementIndex - 1, a = i - 1; a >= 0; a--) {
                                if (t < -1 * (e[a].getBoundingClientRect().left - n.getBaseOffset())) break;
                                i = a
                            }
                            n.setState({
                                currentElementIndex: i
                            })
                        }
                    }, n.isForwardButtonDisabled = function() {
                        if (!n.carouselContainerRef) return !0;
                        if (n.props.items) {
                            var e = n.getCarouselWidth(),
                                t = n.getCarouselChildren();
                            if (n.state.currentElementIndex >= t.length - 1) return !0;
                            var i = t[n.state.currentElementIndex].getBoundingClientRect().left;
                            if (t[t.length - 1].getBoundingClientRect().right - i > e) return !1
                        }
                        return !0
                    }, n.isBackButtonDisabled = function() {
                        return 0 === n.state.currentElementIndex
                    }, n.getCarouselChildren = function() {
                        if (!n.carouselContainerRef) return [];
                        var e = n.getCarouselSlider();
                        return e && e.children.length ? Array.prototype.slice.call(e.children) : []
                    }, n.getCarouselSlider = function() {
                        return n.carouselContainerRef.querySelector(u)
                    }, n.getCarouselWidth = function() {
                        return n.carouselContainerRef ? n.carouselContainerRef.getBoundingClientRect().width : 0
                    }, n.getBaseOffset = function() {
                        return n.carouselContainerRef ? n.carouselContainerRef.getBoundingClientRect().left : 0
                    }, n.getSliderOffset = function() {
                        if (!n.carouselContainerRef) return 0;
                        var e = n.getCarouselSlider();
                        return e ? e.getBoundingClientRect().left : 0
                    }, n.getChildOffset = function(e) {
                        var t = n.getCarouselChildren();
                        return 0 === t.length || t.length <= e ? 0 : t[e].getBoundingClientRect().left
                    }, n.transformString = function() {
                        return -1 * (n.getChildOffset(n.state.currentElementIndex) - n.getSliderOffset()) + "px"
                    }, n.refHandler = function(e) {
                        return n.state.childrenRendered || null === n.props.items || n.setState({
                            childrenRendered: !0
                        }), n.carouselContainerRef = e
                    }, n.renderNavButton = function(e, t, a) {
                        var l, d = ((l = {})[i.Previous] = Object(s.d)("previous", "MediaCarouselNavButton"), l[i.Next] = Object(s.d)("next", "MediaCarouselNavButton"), l),
                            u = r("media-carousel__button", {
                                "media-carousel__button--previous": e === i.Previous,
                                "media-carousel__button--next": e === i.Next,
                                "media-carousel__button--disabled": t
                            }, {
                                "media-carousel__button--inset": !0 === n.props.insetStyle
                            });
                        return o.createElement(c._8, {
                            className: u,
                            position: c._15.Relative,
                            display: c.R.Flex,
                            alignItems: c.c.Stretch
                        }, o.createElement(c.w, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: a,
                            disabled: t,
                            ariaLabel: d[e],
                            icon: E[e],
                            size: c.x.Large
                        }))
                    }, n
                }
                return a.__extends(n, e), n.prototype.componentDidUpdate = function() {
                    this.state.childrenRendered || null === this.props.items || this.setState({
                        childrenRendered: !0
                    })
                }, n.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onResize)
                }, n.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onResize)
                }, n.prototype.render = function() {
                    return o.createElement(c._2, a.__assign({}, this.props, {
                        position: c._15.Relative
                    }), o.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, o.createElement(c._8, {
                        className: "media-carousel__child-container",
                        overflow: c._11.Hidden,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, o.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            marginLeft: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, o.createElement(c._2, {
                        className: "media-carousel__content",
                        display: c.R.Flex,
                        flexWrap: c.U.NoWrap,
                        flexDirection: c.T.Row,
                        alignItems: c.c.Center,
                        "data-js-selector": "carousel-content"
                    }, o.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), o.createElement(c._8, {
                        className: "media-carousel__nav",
                        display: c.R.Flex,
                        alignItems: c.c.Center,
                        position: c._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(c._8, {
                        className: "media-carousel__nav",
                        display: c.R.Flex,
                        alignItems: c.c.Center,
                        position: c._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                }, n = a.__decorate([Object(l.d)("MediaCarousel", {
                    autoReportInteractive: !0
                })], n)
            }(o.Component)
    },
    L2iG: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionDiscoveryPage_InstallExtension"
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
                                                    value: "clientID"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 206
            }
        };
        t.loc.source = {
            body: "mutation ExtensionDiscoveryPage_InstallExtension ($input: InstallExtensionInput!) {\ninstallExtension(input: $input) {\ninstalledExtension {\nid\nextension {\nid\nclientID\nversion\n}\nrequiredActions {\ntype\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    M4d4: function(e, n) {},
    Oxrw: function(e, n) {},
    SfDx: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            r = t("RH2O"),
            o = t("2KeS"),
            s = t("+8VM"),
            l = t("V5M+"),
            c = t("sfWM"),
            d = t("6sO2"),
            u = t("q7Ag"),
            m = t("Odds"),
            E = function(e) {
                var n = e.closeModal,
                    t = e.extensionClientID,
                    i = e.extensionVersion,
                    r = e.login;
                return a.createElement(m._8, null, a.createElement(m.Q, {
                    type: m._49.H5
                }, Object(d.d)("Extension Installed Successfully!", "ExtensionInstalledModal")), a.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(d.d)("Your extension will not display on your page until it is activated on the Extensions page.", "ExtensionInstalledModal")), a.createElement(m._8, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(d.d)("Your extension may require additional configuration before it can be activated.", "ExtensionInstalledModal"))), a.createElement(m.Q, null, Object(d.d)("Would you like to configure this extension now?", "ExtensionInstalledModal"))), a.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, a.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: n
                }, Object(d.d)("Continue Browsing", "ExtensionInstalledModal"))), a.createElement(m.v, {
                    linkTo: Object(u.b)(r, t, i),
                    onClick: n
                }, Object(d.d)("Configure", "ExtensionInstalledModal"))))
            };
        E.displayName = "ExtensionInstalledModalPresentation";
        var p = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return a.createElement(c.a, null, a.createElement(E, {
                    closeModal: this.props.closeModal,
                    extensionClientID: this.props.extensionClientID,
                    extensionVersion: this.props.extensionVersion,
                    login: this.props.login
                }), a.createElement(s.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var v = Object(r.b)(null, function(e) {
            return Object(o.b)({
                closeModal: l.c
            }, e)
        })(p);
        t.d(n, !1, function() {
            return p
        }), t.d(n, "a", function() {
            return v
        })
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
    bcqU: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("RH2O"),
            a = t("TToO"),
            r = t("BwgW"),
            o = t("GiK3"),
            s = t("3zLD"),
            l = t("CIox"),
            c = t("6sO2"),
            d = t("N221"),
            u = t("7vx8"),
            m = t("j7/Y"),
            E = t("w9tK"),
            p = t("vH/s"),
            v = t("zezF"),
            h = t("HrG2"),
            f = t("q7Ag"),
            g = t("CSlQ"),
            x = t("Odds"),
            b = t("yjkL"),
            k = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1
                    }, n.onCardImageError = function() {
                        n.setState({
                            hasCardImageError: !0
                        })
                    }, n
                }
                return a.__extends(n, e), n.prototype.componentDidMount = function() {
                    c.o.setPageTitle(this.getFormattedPageTitle())
                }, n.prototype.componentDidUpdate = function() {
                    this.isLoading() || this.props.latencyTracking.reportInteractive()
                }, n.prototype.componentWillMount = function() {
                    var e = this.props.extensionsForChannel;
                    e && !e.loading && e.data && this.setState({
                        installation: this.findExtensionFromExtensions(e)
                    })
                }, n.prototype.componentWillReceiveProps = function(e) {
                    !this.state.installation && e.extensionsForChannel && !e.extensionsForChannel.loading && e.extensionsForChannel.data && this.setState({
                        installation: this.findExtensionFromExtensions(e.extensionsForChannel)
                    })
                }, n.prototype.render = function() {
                    var e = this.props.data,
                        n = this.isLoading(),
                        t = e.user && e.user.id ? e.user.id : "",
                        i = e.currentUser && e.currentUser.id ? e.currentUser.id : "",
                        a = e.currentUser && e.currentUser.login ? e.currentUser.login : "",
                        s = null;
                    if (n) s = this.renderPlaceholders();
                    else {
                        if (!this.state.installation) return this.renderRedirect(a);
                        if (t !== i) return this.renderRedirect(a);
                        var l = this.state.installation,
                            u = l.extension,
                            m = l.activationConfig;
                        s = o.createElement(x._8, {
                            fullWidth: !0
                        }, o.createElement(x._8, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(x.C, {
                            row: !0,
                            border: !1
                        }, o.createElement(x.E, {
                            alt: u.name,
                            src: this.state.hasCardImageError ? c.a.defaultAvatarURL : u.iconUrl,
                            aspect: x.l.Aspect1x1,
                            size: x.F.Size6,
                            onError: this.onCardImageError
                        }), o.createElement(x.D, null, o.createElement(x._8, {
                            padding: 1
                        }, o.createElement(x.Q, {
                            type: x._49.H4
                        }, u.name), o.createElement(x.Q, {
                            type: x._49.Span,
                            color: x.K.Alt2
                        }, Object(c.d)("Created by {extensionAuthor}", {
                            extensionAuthor: u.authorName
                        }, "ExtensionConfigureComponent")))))), o.createElement(x._8, null, o.createElement(v.a, {
                            anchor: m.anchor,
                            className: "extension-configure-extension-frame",
                            extension: u,
                            extensionMode: r.ExtensionMode.Config,
                            channelID: t,
                            channelName: this.props.match.params.channelName,
                            languageCode: this.props.languageCode,
                            locale: this.props.locale,
                            login: this.props.match.params.channelName,
                            loginID: t
                        })))
                    }
                    var E = o.createElement(h.a, {
                        showDashboardLink: !0,
                        dashboardURL: Object(f.c)(this.props.match.params.channelName),
                        title: Object(c.d)("Configure", "ExtensionConfigureComponent")
                    });
                    return o.createElement(d.b, null, o.createElement(x._8, {
                        padding: 2
                    }, o.createElement(x.Q, {
                        type: x._49.H3
                    }, this.getFormattedPageTitle()), o.createElement(x._8, {
                        padding: {
                            top: 2
                        }
                    }, E, o.createElement(x._35, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderBottom: !0,
                        padding: 2
                    }, s))))
                }, n.prototype.findExtensionFromExtensions = function(e) {
                    var n = this;
                    return e.data ? e.data.find(function(e) {
                        var t = e.extension;
                        return n.props.match.params.extensionID === t.clientId + "-" + t.version
                    }) : null
                }, n.prototype.getFormattedPageTitle = function() {
                    return Object(c.d)("Extensions", "ExtensionConfigureComponent")
                }, n.prototype.renderRedirect = function(e) {
                    return o.createElement(l.b, {
                        to: Object(f.c)(e)
                    })
                }, n.prototype.renderPlaceholders = function() {
                    return o.createElement(x._8, {
                        fullWidth: !0
                    }, o.createElement(x._8, {
                        display: x.R.Flex,
                        alignItems: x.c.Center,
                        padding: {
                            y: 1
                        }
                    }, o.createElement(x._8, null, o.createElement(x._14, {
                        width: 60,
                        height: 60
                    })), o.createElement(x._8, {
                        padding: {
                            left: 1
                        }
                    }, o.createElement(x._14, {
                        lineCount: 2,
                        width: 200
                    }))))
                }, n.prototype.isLoading = function() {
                    var e = this.props.data.loading,
                        n = !this.props.extensionsForChannel || !this.props.extensionsForChannel.data;
                    return e || n
                }, n
            }(o.Component),
            _ = Object(s.compose)(Object(g.d)("ExtensionConfigurePage", {
                destination: E.a.ChannelDashboardExtensionsConfigure
            }), Object(m.a)({
                location: p.PageviewLocation.DashboardExtensionsConfigure
            }), Object(u.a)(b, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(v.c)({
                name: "extensionsForChannel",
                options: function(e) {
                    return {
                        variables: {
                            channelID: e.data.user && e.data.user.id ? e.data.user.id : ""
                        }
                    }
                },
                skip: function(e) {
                    return !e.data.user || !e.data.user.id
                }
            }))(k);

        function y(e) {
            return {
                languageCode: e.session.languageCode,
                locale: e.session.locale
            }
        }
        var N = Object(i.b)(y)(_);
        t.d(n, "mapStateToProps", function() {
            return y
        }), t.d(n, "ExtensionConfigurePage", function() {
            return N
        })
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
    "ry+I": function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("6sO2"),
            r = t("G8hb"),
            o = t("Odds"),
            s = function(e) {
                var n;
                switch (e.state) {
                    case r.e.InTest:
                        n = Object(a.d)("TESTING", "ExtensionStatusPill");
                        break;
                    case r.e.ReadyForReview:
                        n = Object(a.d)("READY FOR REVIEW", "ExtensionStatusPill");
                        break;
                    case r.e.InReview:
                        n = Object(a.d)("IN REVIEW", "ExtensionStatusPill");
                        break;
                    case r.e.Rejected:
                        n = Object(a.d)("REJECTED", "ExtensionStatusPill");
                        break;
                    case r.e.Approved:
                        n = Object(a.d)("APPROVED", "ExtensionStatusPill");
                        break;
                    case r.e.Deprecated:
                        n = Object(a.d)("DEPRECATED", "ExtensionStatusPill");
                        break;
                    case r.e.PendingAction:
                        n = Object(a.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                        break;
                    case r.e.Uploading:
                        n = Object(a.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                        break;
                    case r.e.AssetsUploaded:
                        n = Object(a.d)("ASSETS UPLOADED", "ExtensionStatusPill");
                        break;
                    default:
                        n = ""
                }
                return i.createElement(o._12, {
                    type: o._13.Brand,
                    label: n
                })
            };
        s.displayName = "ExtensionStatusPill", t.d(n, "a", function() {
            return s
        })
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
    yjkL: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionConfigPage_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelName"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelName"
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
                end: 115
            }
        };
        t.loc.source = {
            body: "query ExtensionConfigPage_User($channelName: String!) {\ncurrentUser {\nid\nlogin\n}\nuser(login: $channelName) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    zGVe: function(e, n, t) {
        e.exports = t.p + "assets/discovery-splash-fallback-d5c69de700c33441b513b34421ad3d16.png"
    }
});
//# sourceMappingURL=pages.extension-configure-300b619ee6c07e8e93ec108257096017.js.map