webpackJsonp([87], {
    "0mrB": function(e, n) {},
    "1ZLG": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, a = t("TToO"),
            o = t("GiK3"),
            r = t("CIox"),
            s = t("F8kA"),
            l = t("N221"),
            c = t("Odds"),
            d = t("6sO2"),
            u = t("vH/s"),
            m = t("q7Ag");

        function p(e) {
            var n = e.channelName,
                t = e.selectedTab,
                a = {
                    medium: u.PageviewMedium.ExtensionDashboardTopNav,
                    content: u.PageviewContent.ExtensionNavTabLink
                };
            return o.createElement(c._8, {
                display: c.R.InlineBlock,
                padding: {
                    bottom: 2
                }
            }, o.createElement(c._37, null, o.createElement(c._36, {
                linkTo: {
                    pathname: Object(m.e)(n),
                    state: a
                },
                active: t === i.Store
            }, o.createElement(c._2, {
                padding: {
                    right: 1
                }
            }, o.createElement(c.Q, {
                type: c._49.H4
            }, Object(d.d)("Store", "DiscoveryNavBar")))), o.createElement(c._36, {
                linkTo: {
                    pathname: Object(m.f)(n),
                    state: a
                },
                active: t === i.MyExtensions
            }, o.createElement(c._2, {
                padding: {
                    x: 1
                }
            }, o.createElement(c.Q, {
                type: c._49.H4
            }, Object(d.d)("My Extensions", "DiscoveryNavBar")))), o.createElement(c._36, {
                linkTo: {
                    pathname: Object(m.h)(n),
                    state: a
                },
                active: t === i.Whitelisted
            }, o.createElement(c._2, {
                padding: {
                    left: 1
                }
            }, o.createElement(c.Q, {
                type: c._49.H4
            }, Object(d.d)("Whitelisted", "DiscoveryNavBar"))))))
        }! function(e) {
            e[e.Store = 0] = "Store", e[e.MyExtensions = 1] = "MyExtensions", e[e.Whitelisted = 2] = "Whitelisted"
        }(i || (i = {}));
        var v = t("RH2O"),
            E = t("2KeS"),
            g = t("V5M+"),
            h = t("9Gfr"),
            f = t("SfDx"),
            x = t("3zLD"),
            y = t("7vx8"),
            k = t("j7/Y"),
            b = t("oIkB"),
            C = t("w9tK"),
            _ = t("gAaz"),
            N = t("G8hb"),
            S = t("CSlQ"),
            O = t("l0vj"),
            I = function(e) {
                for (var n = e.count, t = [], i = 0; i < n; i++) t.push(o.createElement(c._8, {
                    key: i,
                    padding: {
                        right: 2
                    }
                }, o.createElement(O.a, null)));
                return o.createElement(c._8, {
                    padding: {
                        bottom: .5
                    }
                }, o.createElement(c._8, {
                    padding: {
                        bottom: 1
                    }
                }, o.createElement(c._14, {
                    width: 120,
                    height: 24
                })), o.createElement(c._8, {
                    display: c.R.Flex,
                    padding: {
                        bottom: 2
                    }
                }, t))
            },
            D = t("UIT8"),
            A = t("KqsW"),
            R = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    var e = this.props.categoryID;
                    return o.createElement(c._8, null, o.createElement(c._8, {
                        display: c.R.Flex,
                        justifyContent: c._7.Between,
                        alignItems: c.c.Baseline
                    }, o.createElement(c.Q, {
                        type: c._49.H4
                    }, "Category Name"), o.createElement(c._35, {
                        fontSize: c.V.Size5
                    }, o.createElement(c.O, {
                        to: {
                            pathname: Object(m.a)(e),
                            state: {
                                medium: u.PageviewMedium.ExtensionDiscovery,
                                content: u.PageviewContent.ExtensionCategoryPreview
                            }
                        }
                    }, Object(d.d)("View all", "ExtensionCategoryCarousel")))), o.createElement(c._2, {
                        margin: {
                            top: 1,
                            bottom: 2
                        }
                    }, o.createElement(A.a, {
                        items: this.renderCards(),
                        insetStyle: !0
                    })))
                }, n.prototype.renderCards = function() {
                    var e = this;
                    return this.props.extensions.map(function(n, t) {
                        return o.createElement(c._8, {
                            margin: {
                                right: 2
                            },
                            key: n.extensionID
                        }, o.createElement(D.a, {
                            authorName: n.authorName,
                            extensionClientID: n.extensionClientID,
                            extensionID: n.extensionID,
                            extensionName: n.extensionName,
                            extensionVersion: n.extensionVersion,
                            iconURL: n.iconURL,
                            isInstalled: n.isInstalled,
                            installExtension: e.props.installExtension,
                            extensionState: n.extensionState,
                            trackingContext: {
                                medium: u.PageviewMedium.ExtensionDiscovery,
                                content: u.PageviewContent.ExtensionCategoryPreview,
                                contentIndex: t
                            },
                            splashImageURL: n.splashImageURL,
                            summary: n.summary,
                            supportedAnchors: n.supportedAnchors,
                            supportedPlatforms: n.supportedPlatforms
                        }))
                    })
                }, n
            }(o.Component),
            P = t("L2iG"),
            T = t("Igge"),
            w = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.installExtension = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, t, i, o, r, s, l, c;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = this.props, t = n.extensionDiscoveryData, i = n.installExtension, o = n.showExtensionErrorModal, r = n.showExtensionInstalledModal, !(s = t.currentUser) || !s.id || !s.login) return [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, i(Object(b.a)({
                                            channelID: s.id,
                                            extensionID: e
                                        }))];
                                    case 2:
                                        return (l = a.sent().data).installExtension && l.installExtension.installedExtension && (c = l.installExtension.installedExtension, Object(b.e)(T, {}, function(e) {
                                            return e.currentUser && e.currentUser.installedExtensions && e.currentUser.installedExtensions.push(c), e
                                        }), r({
                                            extensionClientID: c.extension.clientID,
                                            extensionVersion: c.extension.version,
                                            login: s.login
                                        })), [3, 4];
                                    case 3:
                                        return a.sent(), o(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return a.__extends(n, e), n.prototype.componentDidUpdate = function() {
                    this.checkAndReportPageInteractive()
                }, n.prototype.componentDidMount = function() {
                    this.checkAndReportPageInteractive()
                }, n.prototype.render = function() {
                    var e, n = this,
                        t = this.props.extensionDiscoveryData,
                        i = t.extensions;
                    if (t.loading) {
                        e = [];
                        for (var a = 0; a < 3; a++) e.push(o.createElement(I, {
                            key: a,
                            count: 8
                        }))
                    } else {
                        var r = [];
                        i && i.edges.forEach(function(e) {
                            var t = e.node;
                            t && r.push({
                                authorName: t.authorName,
                                splashImageURL: t.iconURLs.discoverySplash,
                                iconURL: t.iconURLs.square100,
                                extensionClientID: t.clientID,
                                extensionID: t.id,
                                extensionName: t.name,
                                extensionState: t.state,
                                extensionVersion: t.version,
                                isInstalled: n.isExtensionInstalled(t.id),
                                summary: t.summary,
                                supportedAnchors: Object(N.i)(t.views),
                                supportedPlatforms: Object(N.j)(t.views)
                            })
                        }), e = [1, 2, 3].map(function(e, t) {
                            return o.createElement(R, {
                                key: t,
                                categoryID: t.toString(),
                                extensions: r,
                                installExtension: n.installExtension
                            })
                        })
                    }
                    return o.createElement(c._8, null, o.createElement(_.a, {
                        trackingContext: {
                            medium: u.PageviewMedium.ExtensionDiscovery
                        }
                    }), o.createElement(c._8, {
                        padding: {
                            top: 2
                        }
                    }, e))
                }, n.prototype.checkAndReportPageInteractive = function() {
                    var e = this.props,
                        n = e.extensionDiscoveryData,
                        t = e.latencyTracking;
                    n.loading || t.reportInteractive()
                }, n.prototype.isExtensionInstalled = function(e) {
                    var n = this.props.extensionDiscoveryData.currentUser;
                    return !(!n || !n.installedExtensions) && n.installedExtensions.some(function(n) {
                        return n.extension.id === e
                    })
                }, n
            }(o.Component),
            F = Object(x.compose)(Object(S.d)("ExtensionDiscoveryPage", {
                destination: C.a.ExtensionsDiscovery
            }), Object(k.a)({
                location: u.PageviewLocation.ExtensionsDiscovery
            }), Object(y.a)(T, {
                name: "extensionDiscoveryData"
            }), Object(y.a)(P, {
                name: "installExtension"
            }))(w);
        var M = Object(v.b)(null, function(e) {
                return Object(E.b)({
                    showExtensionErrorModal: function() {
                        return Object(g.d)(h.a, {})
                    },
                    showExtensionInstalledModal: function(e) {
                        var n = a.__rest(e, []);
                        return Object(g.d)(f.a, n)
                    }
                }, e)
            })(F),
            j = t("YJkA"),
            L = t("bpr6"),
            U = t("twC3");
        var V = t("BwgW"),
            B = t("5Neo"),
            W = t("ry+I"),
            H = t("+Znq"),
            G = t("Tc6d"),
            Q = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.renderAnchorOptions = function() {
                        var e = n.props,
                            t = e.activationConfig,
                            i = e.availableSlots,
                            a = [];
                        if (i.components) {
                            var r = n.renderComponentAnchorOptions(i.components);
                            r.length && a.push(r)
                        }
                        if (i.overlays) {
                            var s = n.renderOverlayAnchorOptions(i.overlays);
                            s.length && a.push(s)
                        }
                        if (i.panels) {
                            var l = n.renderPanelAnchorOptions(i.panels);
                            l.length && a.push(l)
                        }
                        return t.state === N.a.ACTIVE && a.push(n.renderDeactivate()), a.reduce(function(e, n, t) {
                            var i = o.createElement(c._35, {
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
                        return o.createElement(c._8, {
                            display: c.R.Flex,
                            flexWrap: c.U.NoWrap,
                            alignItems: c.c.Center
                        }, o.createElement(c._16, {
                            status: c._17.Online
                        }), o.createElement(c._8, {
                            padding: {
                                left: 1
                            }
                        }, Object(d.d)("Active {slot}", {
                            slot: e.toUpperCase()
                        }, "ActivateExtensionDropdownV2")))
                    }, n.renderDeactivate = function() {
                        return o.createElement(c._6, {
                            key: "deactivate",
                            blurAfterClick: !0,
                            onClick: n.deactivateExtension
                        }, o.createElement(c._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(d.d)("Deactivate", "ActivateExtensionDropdownV2")))
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
                        return e.length < G.b && t.push(o.createElement(c._6, {
                            key: "new-panel",
                            blurAfterClick: !0,
                            onClick: n.createPanelAndActivate
                        }, o.createElement(c._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(d.d)("Add as a new panel", "ActivateExtensionDropdownV2")))), t
                    }, n.renderSetAnchorLocationInteractable = function(e, t) {
                        var i = n.props.activationConfig;
                        return i.state === N.a.ACTIVE && i.slot === e ? null : o.createElement(c._6, {
                            key: e,
                            blurAfterClick: !0,
                            onClick: n.activateExtension,
                            "data-slot": e,
                            "data-anchor": t
                        }, o.createElement(c._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(d.d)("Set as {slot}", {
                            slot: e.toUpperCase()
                        }, "ActivateExtensionDropdownV2")))
                    }, n.createPanelAndActivate = function() {
                        n.props.activateExtension("", N.b.PANEL, !0)
                    }, n.activateExtension = function(e) {
                        var t = e.currentTarget.dataset,
                            i = t.slot,
                            a = t.anchor;
                        i && a && n.props.activateExtension(i, a)
                    }, n.deactivateExtension = function() {
                        n.props.deactivateExtension()
                    }, n
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.activationConfig,
                        t = e.canActivate,
                        i = e.requiredActions;
                    return i && i.some(function(e) {
                        return e.type === N.e.REQUIRES_CONFIGURATION
                    }) ? o.createElement(c._8, {
                        display: c.R.Flex,
                        alignItems: c.c.Center
                    }, o.createElement(c.Q, {
                        color: c.K.Alt2
                    }, Object(d.d)("Needs Configuration", "ActivateExtensionDropdownV2"))) : t ? o.createElement(H.a, {
                        openByDefault: this.props.openByDefault
                    }, o.createElement(c.v, {
                        dropdown: !0,
                        type: c.B.Text
                    }, n.state === N.a.ACTIVE ? this.renderActivePresence(n.slot) : Object(d.d)("Activate", "ActivateExtensionDropdownV2")), o.createElement(c.q, {
                        size: c.s.Medium,
                        offsetY: "-0.1rem",
                        noTail: !0
                    }, o.createElement(c._35, {
                        color: c.K.Link,
                        padding: 1
                    }, this.renderAnchorOptions()))) : o.createElement(c._8, {
                        display: c.R.Flex,
                        alignItems: c.c.Center
                    }, o.createElement(c.Q, {
                        color: c.K.Alt2
                    }, Object(d.d)("Activation Disabled", "ActivateExtensionDropdownV2")))
                }, n
            }(o.Component),
            z = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        extensionIcon: n.props.extensionIcon
                    }, n.onCardImageError = function() {
                        n.setState({
                            extensionIcon: d.a.defaultAvatarURL
                        })
                    }, n.renderExtensionTagPills = function() {
                        var e = n.props,
                            t = e.supportedAnchors,
                            i = e.supportPlatforms,
                            a = t.map(function(e) {
                                return o.createElement(c._8, {
                                    key: e,
                                    display: c.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, o.createElement(B.a, {
                                    anchorType: e
                                }))
                            });
                        return i.includes(V.ExtensionPlatform.Mobile) && a.push(o.createElement(c._8, {
                            key: "mobile",
                            display: c.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, o.createElement(B.a, {
                            mobile: !0
                        }))), a
                    }, n.activateExtension = function(e, t, i) {
                        void 0 === i && (i = !1);
                        var a = n.props.installationID;
                        n.props.activateExtension(a, e, t, i)
                    }, n.deactivateExtension = function() {
                        var e = n.props.installationID;
                        n.props.deactivateExtension(e)
                    }, n.uninstallExtension = function() {
                        var e = n.props.installationID;
                        n.props.uninstallExtension(e)
                    }, n
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.channelName,
                        t = e.extensionClientID,
                        i = e.extensionName,
                        a = e.extensionState,
                        r = e.extensionVersion,
                        s = e.trackingContext;
                    return o.createElement(c._35, {
                        background: c.n.Base,
                        border: !0
                    }, o.createElement(c._35, {
                        padding: 1,
                        borderBottom: !0
                    }, o.createElement(c.C, {
                        row: !0,
                        border: !1
                    }, o.createElement(c.E, {
                        alt: i,
                        src: this.state.extensionIcon,
                        aspect: c.l.Aspect1x1,
                        size: c.F.Size6,
                        onError: this.onCardImageError
                    }), o.createElement(c.D, null, o.createElement(c._8, {
                        padding: 1
                    }, o.createElement(c.O, {
                        to: {
                            pathname: Object(m.d)(t, r),
                            state: {
                                medium: s.medium,
                                content: u.PageviewContent.InstalledExtensionCard
                            }
                        }
                    }, o.createElement(c.Q, {
                        type: c._49.H5
                    }, i)), this.renderExtensionTagPills(), a !== N.f.Released && o.createElement(W.a, {
                        state: a
                    }))))), o.createElement(c._8, {
                        display: c.R.Flex,
                        justifyContent: c._7.Between,
                        padding: 1
                    }, o.createElement(Q, {
                        activationConfig: this.props.activationConfig,
                        availableSlots: this.props.availableSlots,
                        canActivate: this.props.canActivate,
                        requiredActions: this.props.requiredActions,
                        activateExtension: this.activateExtension,
                        deactivateExtension: this.deactivateExtension
                    }), o.createElement(c._8, null, o.createElement(c.w, {
                        ariaLabel: Object(d.d)("Configure", "InstalledExtensionCardComponent"),
                        icon: c._25.Gear,
                        linkTo: {
                            pathname: Object(m.b)(n, t, r),
                            state: {
                                medium: s.medium,
                                content: u.PageviewContent.InstalledExtensionCard
                            }
                        }
                    }), o.createElement(c.w, {
                        ariaLabel: Object(d.d)("Uninstall", "InstalledExtensionCardComponent"),
                        icon: c._25.Trash,
                        onClick: this.uninstallExtension
                    }))))
                }, n
            }(o.Component),
            q = function() {
                return o.createElement(c._35, {
                    margin: {
                        bottom: 1
                    },
                    background: c.n.Base,
                    border: !0
                }, o.createElement(c._35, {
                    display: c.R.Flex,
                    padding: 1,
                    borderBottom: !0
                }, o.createElement(c._8, {
                    margin: {
                        right: 1
                    }
                }, o.createElement(c._14, {
                    height: 60,
                    width: 60
                })), o.createElement(c._8, {
                    display: c.R.Flex,
                    flexDirection: c.T.Column,
                    justifyContent: c._7.Center
                }, o.createElement(c._8, {
                    margin: {
                        bottom: 1
                    }
                }, o.createElement(c._14, {
                    height: 20,
                    width: 225
                })), o.createElement(c._8, {
                    display: c.R.Flex,
                    flexDirection: c.T.Row
                }, o.createElement(c._8, {
                    margin: {
                        right: .5
                    }
                }, o.createElement(c._14, {
                    width: 80,
                    height: 15
                })), o.createElement(c._8, {
                    margin: {
                        right: .5
                    }
                }, o.createElement(c._14, {
                    width: 80,
                    height: 15
                })), o.createElement(c._8, null, o.createElement(c._14, {
                    width: 80,
                    height: 15
                }))))), o.createElement(c._35, {
                    display: c.R.Flex,
                    padding: 1,
                    justifyContent: c._7.Between
                }, o.createElement(c._8, {
                    padding: .5
                }, o.createElement(c._14, {
                    height: 20,
                    width: 125
                })), o.createElement(c._8, {
                    display: c.R.Flex,
                    padding: .5
                }, o.createElement(c._8, {
                    margin: {
                        right: .5
                    }
                }, o.createElement(c._14, {
                    height: 20,
                    width: 20
                })), o.createElement(c._8, null, o.createElement(c._14, {
                    height: 20,
                    width: 20
                })))))
            };
        q.displayName = "InstalledExtensionPlaceHolder";
        var Y, K, X, J, $, Z = t("7fT8"),
            ee = t("POf9"),
            ne = t("SHGE");
        ! function(e) {
            e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
        }(Y || (Y = {})),
        function(e) {
            e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
        }(K || (K = {})),
        function(e) {
            e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
        }(X || (X = {})),
        function(e) {
            e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
        }(J || (J = {})),
        function(e) {
            e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
        }($ || ($ = {}));
        var te = t("8EVf");
        t("0mrB");
        var ie = "ExtensionPanel",
            ae = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.activateExtension = function(e, t, i, o) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, r, s, l, c, d;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = this.props, r = n.extensionManagementPageData, s = n.showExtensionErrorModal, !(l = r.currentUser) || !l.id || !l.installedExtensions) return [2];
                                        c = {
                                            id: e,
                                            slot: t,
                                            anchor: i
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 6, , 7]), [4, this.confirmActivation(c)];
                                    case 2:
                                        return a.sent(), o ? [4, this.createPanel()] : [3, 4];
                                    case 3:
                                        return (d = a.sent()) ? (c.slot = d && d.slotID, [3, 5]) : [2, s()];
                                    case 4:
                                        if (i === N.b.COMPONENT) return [2, this.activateComponentExtensions(e, t)];
                                        a.label = 5;
                                    case 5:
                                        return this.applyActivation((u = [], [c].forEach(function(e) {
                                            var n = e.anchor,
                                                t = e.id,
                                                i = e.position,
                                                a = e.slot,
                                                o = {
                                                    installationID: t
                                                };
                                            switch (n) {
                                                case N.b.COMPONENT:
                                                    if (!i) return;
                                                    o.component = {
                                                        slot: a,
                                                        x: i.x,
                                                        y: i.y
                                                    };
                                                    break;
                                                case N.b.PANEL:
                                                    o.panel = {
                                                        slot: a
                                                    };
                                                    break;
                                                case N.b.VIDEO_OVERLAY:
                                                    o.videoOverlay = {
                                                        slot: a
                                                    }
                                            }
                                            u.push(o)
                                        }), u)), [3, 7];
                                    case 6:
                                        return a.sent(), s(), [3, 7];
                                    case 7:
                                        return [2]
                                }
                                var u
                            })
                        })
                    }, n.confirmActivation = function(e) {
                        var t = n.props,
                            i = t.extensionManagementPageData,
                            a = t.showExtensionDestructionWarningModal,
                            o = i.currentUser;
                        return new Promise(function(n, t) {
                            if (!o || !o.id || !o.installedExtensions) return t();
                            var i = o.installedExtensions.find(function(n) {
                                var t = n.activationConfig;
                                return t.state === N.a.ACTIVE && t.anchor === e.anchor && t.slot === e.slot
                            });
                            i ? a({
                                activationSlot: e.slot,
                                destructionType: N.c.Replace,
                                existingExtensionName: i.extension.name,
                                existingMonetizationType: Object(N.h)(i.extension),
                                onConfirm: n
                            }) : n()
                        })
                    }, n.applyActivation = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, t, i, o, r, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = this.props, t = n.extensionManagementPageData, i = n.showExtensionActivatedModal, o = n.showExtensionErrorModal, !t.currentUser || !t.currentUser.id) return [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.applyExtensionActivations(Object(b.a)({
                                            activations: e,
                                            channelID: t.currentUser.id
                                        }))];
                                    case 2:
                                        return (r = a.sent().data).applyExtensionActivations ? (s = e.map(function(e) {
                                            var n = e.installationID,
                                                t = {
                                                    extensionName: "",
                                                    slot: ""
                                                };
                                            if (!r.applyExtensionActivations) return t;
                                            var i = r.applyExtensionActivations.installedExtensions.find(function(e) {
                                                return e.id === n
                                            });
                                            return i ? {
                                                extensionName: i.extension.name,
                                                slot: i.activationConfig.slot
                                            } : t
                                        }), i({
                                            activations: s
                                        })) : o(), [3, 4];
                                    case 3:
                                        return a.sent(), o(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.deactivateExtension = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, t, i, o, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = this.props, t = n.applyExtensionActivations, i = n.extensionManagementPageData, o = n.showExtensionErrorModal, !(r = i.currentUser) || !r.id) return [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 4, , 5]), [4, this.confirmExtensionDestruction(e, N.c.Deactivate)];
                                    case 2:
                                        return a.sent(), [4, t(Object(b.a)({
                                            channelID: r.id,
                                            activations: [{
                                                installationID: e
                                            }]
                                        }))];
                                    case 3:
                                        return a.sent(), [3, 5];
                                    case 4:
                                        return a.sent(), o(), [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, n.uninstallExtension = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, t, i, o, r, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = this.props, t = n.extensionManagementPageData, i = n.showExtensionErrorModal, o = n.uninstallExtension, !(r = t.currentUser) || !r.id) return [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 4, , 5]), [4, this.confirmExtensionDestruction(e, N.c.Uninstall)];
                                    case 2:
                                        return a.sent(), [4, o(Object(b.a)({
                                            extensionInstallationID: e
                                        }))];
                                    case 3:
                                        return (s = a.sent().data).uninstallExtension && s.uninstallExtension.id && Object(b.e)(te, {}, function(e) {
                                            return e.currentUser && e.currentUser.installedExtensions && (e.currentUser.installedExtensions = e.currentUser.installedExtensions.filter(function(e) {
                                                var n = e.id;
                                                return s.uninstallExtension && s.uninstallExtension.id !== n
                                            })), e
                                        }), [3, 5];
                                    case 4:
                                        return a.sent(), i(), [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return a.__extends(n, e), n.prototype.componentDidUpdate = function() {
                    this.checkAndReportPageInteractive()
                }, n.prototype.componentDidMount = function() {
                    this.checkAndReportPageInteractive()
                }, n.prototype.render = function() {
                    var e, n = this,
                        t = this.props.extensionManagementPageData,
                        i = t.loading,
                        a = o.createElement(c.Q, {
                            type: c._49.P
                        }, Object(d.d)("No installed extensions.", "ExtensionManagementPagePresentation"));
                    if (i) a = o.createElement(o.Fragment, null, o.createElement(q, null), o.createElement(q, null), o.createElement(q, null));
                    else {
                        var r = (e = t.currentUser) && e.installedExtensions ? e.installedExtensions.slice().sort(function(e, n) {
                            var t = e.extension,
                                i = n.extension;
                            return t.clientID > i.clientID ? 1 : t.clientID < i.clientID ? -1 : t.version < i.version ? 1 : t.version > i.version ? -1 : 0
                        }) : [];
                        r.length && (a = o.createElement(o.Fragment, null, r.map(function(e) {
                            var i = e.activationConfig,
                                a = e.extension,
                                r = e.id,
                                s = e.requiredActions,
                                l = e.self,
                                d = Object(N.i)(a.views);
                            return o.createElement(c._8, {
                                key: r,
                                margin: {
                                    bottom: 1
                                }
                            }, o.createElement(z, {
                                channelName: n.props.channelName,
                                extensionClientID: a.clientID,
                                extensionName: a.name,
                                extensionIcon: a.iconURLs.square100,
                                extensionState: a.state,
                                extensionVersion: a.version,
                                installationID: r,
                                trackingContext: {
                                    medium: u.PageviewMedium.ExtensionManagement
                                },
                                supportedAnchors: Object(N.i)(a.views),
                                supportPlatforms: Object(N.j)(a.views),
                                activationConfig: i,
                                availableSlots: function(e, n) {
                                    var t = {};
                                    if (n.includes(N.b.COMPONENT) && (t.components = ["extension-component-1", "extension-component-2"]), n.includes(N.b.VIDEO_OVERLAY) && (t.overlays = ["extension-overlay-1"]), n.includes(N.b.PANEL) && e.currentUser) {
                                        var i = e.currentUser.panels.reduce(function(e, n) {
                                            return n && n.__typename === ie && e.push(n.slotID), e
                                        }, []);
                                        t.panels = i.sort()
                                    }
                                    return t
                                }(t, d),
                                canActivate: !!l && l.canActivate,
                                requiredActions: s,
                                activateExtension: n.activateExtension,
                                deactivateExtension: n.deactivateExtension,
                                uninstallExtension: n.uninstallExtension
                            }))
                        })))
                    }
                    return o.createElement(c._35, {
                        className: "installed-extensions-list",
                        padding: 1,
                        border: !0
                    }, o.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(c.Q, {
                        type: c._49.H4
                    }, Object(d.d)("My Extensions", "ExtensionManagementPagePresentation"))), o.createElement(c._8, null, a))
                }, n.prototype.checkAndReportPageInteractive = function() {
                    var e = this.props,
                        n = e.extensionManagementPageData,
                        t = e.latencyTracking;
                    n.loading || t.reportInteractive()
                }, n.prototype.createPanel = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, n, t;
                        return a.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return (e = this.props.extensionManagementPageData.currentUser) && e.id ? [4, this.props.createPanel(Object(b.a)({
                                        channelID: e.id,
                                        type: $.EXTENSION
                                    }))] : [2, Promise.reject("No user id.")];
                                case 1:
                                    return n = i.sent(), (t = n.data.createPanel) && t.panel.__typename === ie ? [2, t.panel] : [2]
                            }
                        })
                    })
                }, n.prototype.activateComponentExtensions = function(e, n) {
                    var t = this.props.extensionManagementPageData.currentUser;
                    if (t && t.id && t.installedExtensions) {
                        var i = t.installedExtensions.find(function(n) {
                            return n.id === e
                        });
                        if (i) {
                            var a = t.installedExtensions.filter(function(e) {
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
                                }),
                                o = i.extension,
                                r = o.name,
                                s = o.views;
                            s.component && this.props.showComponentActivationModal({
                                activatedComponentData: a,
                                extensionNameToActivate: r,
                                idToActivate: e,
                                slotToActivate: n,
                                componentConfigToActivate: s.component,
                                onConfirm: this.applyActivation
                            })
                        }
                    }
                }, n.prototype.confirmExtensionDestruction = function(e, n) {
                    var t = this.props,
                        i = t.extensionManagementPageData,
                        a = t.showExtensionDestructionWarningModal,
                        o = i.currentUser;
                    return new Promise(function(t, i) {
                        if (!o || !o.id || !o.installedExtensions) return i();
                        var r = o.installedExtensions.find(function(n) {
                            return n.id === e
                        });
                        if (!r) return i();
                        var s = Object(N.h)(r.extension);
                        n === N.c.Uninstall ? a({
                            destructionType: N.c.Uninstall,
                            extensionName: r.extension.name,
                            monetizationType: s,
                            onConfirm: t
                        }) : null !== s && n === N.c.Deactivate ? a({
                            destructionType: N.c.Deactivate,
                            extensionName: r.extension.name,
                            monetizationType: s,
                            onConfirm: t
                        }) : t()
                    })
                }, n
            }(o.Component),
            oe = Object(x.compose)(Object(S.d)("ExtensionManagementPage", {
                destination: C.a.ChannelDashboardExtensionsManagement
            }), Object(k.a)({
                location: u.PageviewLocation.DashboardExtensionsManagement
            }), Object(y.a)(te, {
                name: "extensionManagementPageData"
            }), Object(y.a)(ee, {
                name: "createPanel"
            }), Object(y.a)(Z, {
                name: "applyExtensionActivations"
            }), Object(y.a)(ne, {
                name: "uninstallExtension"
            }))(ae);
        var re = Object(v.b)(null, function(e) {
                return Object(E.b)({
                    showComponentActivationModal: function(e) {
                        var n = a.__rest(e, []);
                        return Object(g.d)(L.a, n)
                    },
                    showExtensionActivatedModal: function(e) {
                        var n = a.__rest(e, []);
                        return Object(g.d)(j.a, n)
                    },
                    showExtensionDestructionWarningModal: function(e) {
                        var n = a.__rest(e, []);
                        return Object(g.d)(U.a, n)
                    },
                    showExtensionErrorModal: function() {
                        return Object(g.d)(h.a, {})
                    }
                }, e)
            })(oe),
            se = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.renderExtensionManagementPage = function(e) {
                        var n = e.match;
                        return o.createElement(o.Fragment, null, o.createElement(p, {
                            channelName: n.params.channelName,
                            selectedTab: i.MyExtensions
                        }), o.createElement(re, {
                            channelName: n.params.channelName
                        }))
                    }, n.renderExtensionDiscoveryPage = function(e) {
                        var n = e.match;
                        return o.createElement(o.Fragment, null, o.createElement(p, {
                            channelName: n.params.channelName,
                            selectedTab: i.Store
                        }), o.createElement(M, null))
                    }, n
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    return o.createElement(l.b, {
                        suppressScrollX: !0
                    }, o.createElement(c._8, {
                        padding: {
                            x: 4,
                            top: 2
                        }
                    }, o.createElement(s.e, null, o.createElement(r.c, {
                        path: "/:channelName/dashboard/extensions-discovery/installed",
                        render: this.renderExtensionManagementPage
                    }), o.createElement(r.c, {
                        path: "/:channelName/dashboard/extensions-discovery",
                        render: this.renderExtensionDiscoveryPage
                    }))))
                }, n
            }(o.Component);
        t.d(n, "ExtensionDashboardRoot", function() {
            return se
        })
    },
    "5Neo": function(e, n, t) {
        "use strict";
        var i = t("BwgW"),
            a = t("GiK3"),
            o = t("nP5L"),
            r = t("VHHT"),
            s = t("Odds"),
            l = function(e) {
                return e.anchorType ? a.createElement(s._12, {
                    label: Object(o.a)(e.anchorType, !0)
                }) : e.mobile ? a.createElement(s._12, {
                    label: Object(r.a)(i.ExtensionPlatform.Mobile, !0)
                }) : null
            };
        l.displayName = "AnchorPill", t.d(n, "a", function() {
            return l
        })
    },
    "7fT8": function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManagementPage_ApplyExtensionActivations"
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
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                    value: "name"
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
                end: 287
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManagementPage_ApplyExtensionActivations ($input: ApplyExtensionActivationsInput!) {\napplyExtensionActivations(input: $input) {\ninstalledExtensions {\nid\nactivationConfig {\nanchor\nslot\nstate\nx\ny\n}\nextension {\nid\nname\n}\nrequiredActions {\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "8EVf": function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionManagementPage"
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
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                    value: "clientID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURLs"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "square100"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
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
                                                                    value: "aspectHeight"
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
                                                                    value: "hasZoom"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
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
                end: 483
            }
        };
        t.loc.source = {
            body: "query ExtensionManagementPage {\ncurrentUser {\nid\ninstalledExtensions {\nid\nactivationConfig {\nanchor\nslot\nstate\nx\ny\n}\nextension {\nid\nclientID\niconURLs {\nsquare100\n}\nisBitsEnabled\nname\nsku\nstate\nvendorCode\nversion\nviews {\ncomponent {\naspectHeight\naspectWidth\nhasZoom\nviewerURL\nzoomPixels\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\ntype\n}\nself {\ncanActivate\n}\n}\npanels {\nid\ntype\n...on ExtensionPanel {\nslotID\n}\n}\n}\n}",
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
            o = t("+8VM"),
            r = t("sfWM"),
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
                    return a.createElement(r.a, null, a.createElement(c, null), a.createElement(o.a, {
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
    Ar47: function(e, n) {},
    G8hb: function(e, n, t) {
        "use strict";
        t.d(n, "d", function() {
            return i
        }), t.d(n, "c", function() {
            return a
        }), t.d(n, "a", function() {
            return o
        }), t.d(n, "f", function() {
            return r
        }), t.d(n, "b", function() {
            return s
        }), t.d(n, "e", function() {
            return l
        }), n.h = function(e) {
            if (e.isBitsEnabled) return i.Bits;
            if (e.vendorCode && e.sku) return i.InExtensionPurchases;
            return null
        }, n.i = function(e) {
            var n = [];
            e.component && e.component.viewerURL && n.push(s.Component);
            e.panel && e.panel.viewerURL && n.push(s.Panel);
            e.videoOverlay && e.videoOverlay.viewerURL && n.push(s.VideoOverlay);
            return n
        }, n.j = function(e) {
            var n = [c.ExtensionPlatform.Web];
            e.mobile && e.mobile.viewerURL && n.push(c.ExtensionPlatform.Mobile);
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
        var i, a, o, r, s, l, c = t("BwgW");
        t.n(c);
        ! function(e) {
            e[e.Bits = 0] = "Bits", e[e.InExtensionPurchases = 1] = "InExtensionPurchases"
        }(i || (i = {})),
        function(e) {
            e[e.Deactivate = 0] = "Deactivate", e[e.Replace = 1] = "Replace", e[e.Uninstall = 2] = "Uninstall"
        }(a || (a = {})),
        function(e) {
            e.Active = "ACTIVE", e.Inactive = "INACTIVE", e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
        }(o || (o = {})),
        function(e) {
            e.Approved = "APPROVED", e.AssetsUploaded = "ASSETS_UPLOADED", e.Deleted = "DELETED", e.Deprecated = "DEPRECATED", e.InReview = "IN_REVIEW", e.InTest = "IN_TEST", e.PendingAction = "PENDING_ACTION", e.ReadyForReview = "READY_FOR_REVIEW", e.Rejected = "REJECTED", e.Released = "RELEASED", e.Uploading = "UPLOADING", e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
        }(r || (r = {})),
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
            o = t("Odds"),
            r = function(e) {
                return i.createElement(o._35, {
                    background: o.n.Alt2,
                    display: o.R.Flex,
                    alignItems: o.c.Stretch
                }, e.showDashboardLink && i.createElement(o._35, {
                    border: !0,
                    display: o.R.Flex,
                    flexGrow: 0
                }, i.createElement(o.w, {
                    ariaLabel: Object(a.d)("View all extensions", "ExtensionPageHeader"),
                    size: o.x.Large,
                    linkTo: e.dashboardURL,
                    icon: o._25.AngleLeft
                })), i.createElement(o._35, {
                    border: !0,
                    display: o.R.Flex,
                    flexGrow: 1,
                    padding: 2
                }, i.createElement(o.Q, {
                    type: o._49.H4
                }, e.title)))
            };
        r.displayName = "ExtensionPageHeader", t.d(n, "a", function() {
            return r
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
                                                    value: "iconURLs"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "discoverySplash"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "square100"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
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
                end: 382
            }
        };
        t.loc.source = {
            body: "query ExtensionDiscoveryPage {\ncurrentUser {\nid\ninstalledExtensions {\nid\nextension {\nid\nversion\n}\n}\nlogin\n}\nextensions(first: 10 state: RELEASED) {\nedges {\nnode {\nid\nauthorName\nclientID\niconURLs {\ndiscoverySplash\nsquare100\n}\nname\nstate\nsummary\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    KqsW: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return v
        });
        var i, a = t("TToO"),
            o = t("HW6M"),
            r = (t.n(o), t("GiK3")),
            s = (t.n(r), t("6sO2")),
            l = t("CSlQ"),
            c = t("Odds"),
            d = t("M4d4"),
            u = (t.n(d), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(i || (i = {}));
        var m, p = ((m = {})[i.Previous] = c._25.AngleLeft, m[i.Next] = c._25.AngleRight, m),
            v = function(e) {
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
                            u = o("media-carousel__button", {
                                "media-carousel__button--previous": e === i.Previous,
                                "media-carousel__button--next": e === i.Next,
                                "media-carousel__button--disabled": t
                            }, {
                                "media-carousel__button--inset": !0 === n.props.insetStyle
                            });
                        return r.createElement(c._8, {
                            className: u,
                            position: c._15.Relative,
                            display: c.R.Flex,
                            alignItems: c.c.Stretch
                        }, r.createElement(c.w, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: a,
                            disabled: t,
                            ariaLabel: d[e],
                            icon: p[e],
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
                    return r.createElement(c._2, a.__assign({}, this.props, {
                        position: c._15.Relative
                    }), r.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, r.createElement(c._8, {
                        className: "media-carousel__child-container",
                        overflow: c._11.Hidden,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, r.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            marginLeft: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, r.createElement(c._2, {
                        className: "media-carousel__content",
                        display: c.R.Flex,
                        flexWrap: c.U.NoWrap,
                        flexDirection: c.T.Row,
                        alignItems: c.c.Center,
                        "data-js-selector": "carousel-content"
                    }, r.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), r.createElement(c._8, {
                        className: "media-carousel__nav",
                        display: c.R.Flex,
                        alignItems: c.c.Center,
                        position: c._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), r.createElement(c._8, {
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
            }(r.Component)
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
    POf9: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManagementPage_CreatePanel"
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
                end: 157
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManagementPage_CreatePanel($input: CreatePanelInput!) {\ncreatePanel(input: $input) {\npanel {\nid\ntype\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    SHGE: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManagementPage_UninstallExtension"
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
                end: 131
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManagementPage_UninstallExtension ($input: UninstallExtensionInput!) {\nuninstallExtension(input: $input) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    SfDx: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            o = t("RH2O"),
            r = t("2KeS"),
            s = t("+8VM"),
            l = t("V5M+"),
            c = t("sfWM"),
            d = t("6sO2"),
            u = t("vH/s"),
            m = t("q7Ag"),
            p = t("Odds"),
            v = function(e) {
                var n = e.closeModal,
                    t = e.extensionClientID,
                    i = e.extensionVersion,
                    o = e.login;
                return a.createElement(p._8, null, a.createElement(p.Q, {
                    type: p._49.H5
                }, Object(d.d)("Extension Installed Successfully!", "ExtensionInstalledModal")), a.createElement(p._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(p.Q, null, Object(d.d)("Your extension will not display on your page until it is activated on the Extensions page.", "ExtensionInstalledModal")), a.createElement(p._8, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(p.Q, null, Object(d.d)("Your extension may require additional configuration before it can be activated.", "ExtensionInstalledModal"))), a.createElement(p.Q, null, Object(d.d)("Would you like to configure this extension now?", "ExtensionInstalledModal"))), a.createElement(p._8, {
                    display: p.R.Flex,
                    justifyContent: p._7.Center
                }, a.createElement(p._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(p.v, {
                    type: p.B.Hollow,
                    onClick: n
                }, Object(d.d)("Continue Browsing", "ExtensionInstalledModal"))), a.createElement(p.v, {
                    linkTo: {
                        pathname: Object(m.b)(o, t, i),
                        state: {
                            medium: u.PageviewMedium.ExtensionInstalledModal,
                            content: u.PageviewContent.ExtensionConfigureButton
                        }
                    },
                    onClick: n
                }, Object(d.d)("Configure", "ExtensionInstalledModal"))))
            };
        v.displayName = "ExtensionInstalledModalPresentation";
        var E = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return a.createElement(c.a, null, a.createElement(v, {
                    closeModal: this.props.closeModal,
                    extensionClientID: this.props.extensionClientID,
                    extensionVersion: this.props.extensionVersion,
                    login: this.props.login
                }), a.createElement(s.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var g = Object(o.b)(null, function(e) {
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
    UIT8: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("BwgW"),
            o = t("GiK3"),
            r = t("6sO2"),
            s = t("zGVe"),
            l = t.n(s),
            c = t("vH/s"),
            d = t("5Neo"),
            u = t("G8hb"),
            m = t("q7Ag"),
            p = t("ry+I"),
            v = t("Odds"),
            E = (t("Ar47"), function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        imageURL: n.props.splashImageURL || n.props.iconURL || l.a,
                        isInstalling: !1
                    }, n.renderHoverElement = function() {
                        var e = n.state.isInstalling,
                            t = n.props,
                            i = t.extensionClientID,
                            a = t.extensionVersion,
                            s = t.isInstalled,
                            l = t.trackingContext,
                            d = t.summary,
                            u = l.content,
                            p = l.contentIndex,
                            E = l.medium;
                        return o.createElement(v._35, {
                            className: "extension-card__details-preview",
                            background: v.n.Alt2,
                            position: v._15.Absolute,
                            attachRight: !0,
                            attachTop: !0,
                            attachLeft: !0,
                            attachBottom: !0
                        }, o.createElement(v._8, {
                            display: v.R.Flex,
                            flexDirection: v.T.Column,
                            justifyContent: v._7.Between,
                            alignItems: v.c.Center,
                            padding: 4,
                            fullHeight: !0
                        }, o.createElement(v._8, {
                            className: "extension-card__summary",
                            overflow: v._11.Hidden
                        }, o.createElement(v.Q, {
                            type: v._49.P
                        }, d)), o.createElement(v._8, {
                            display: v.R.Flex,
                            flexWrap: v.U.NoWrap,
                            padding: {
                                top: 1
                            }
                        }, o.createElement(v.O, {
                            to: {
                                pathname: Object(m.d)(i, a),
                                state: {
                                    medium: E,
                                    content: u || c.PageviewContent.ExtensionCard,
                                    content_index: p
                                }
                            }
                        }, o.createElement(v.v, {
                            type: v.B.Hollow
                        }, Object(r.d)("Details", "ExtensionCard"))), o.createElement(v._8, {
                            padding: {
                                left: 1
                            }
                        }, s ? o.createElement(v.v, {
                            disabled: !0
                        }, Object(r.d)("Installed", "ExtensionCard")) : o.createElement(v.v, {
                            onClick: n.installExtension,
                            state: e ? v.A.Loading : v.A.Default
                        }, Object(r.d)("Install", "ExtensionCard"))))))
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props,
                            t = e.supportedAnchors,
                            i = e.supportedPlatforms,
                            r = t.map(function(e) {
                                return o.createElement(v._8, {
                                    key: e,
                                    display: v.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, o.createElement(d.a, {
                                    anchorType: e
                                }))
                            });
                        return i.includes(a.ExtensionPlatform.Mobile) && r.push(o.createElement(v._8, {
                            key: "mobile",
                            display: v.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, o.createElement(d.a, {
                            mobile: !0
                        }))), r
                    }, n.installExtension = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var e, n, t;
                            return i.__generator(this, function(i) {
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
                            imageURL: l.a
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.state.imageURL,
                        n = this.props,
                        t = n.authorName,
                        i = n.extensionName,
                        a = n.extensionState,
                        r = n.iconURL,
                        s = r && e === r;
                    return o.createElement(v._8, {
                        className: "extension-card"
                    }, o.createElement(v.C, null, o.createElement(v._35, {
                        border: !0,
                        background: v.n.Base,
                        position: v._15.Relative,
                        overflow: v._11.Hidden
                    }, o.createElement(v._35, {
                        className: s ? "extension-card__icon-bg" : "",
                        background: v.n.AccentAlt2
                    }, o.createElement(v.E, {
                        src: e,
                        alt: i,
                        aspect: v.l.Aspect3x2,
                        onError: this.onCardImageError
                    })), s && o.createElement(v._8, {
                        display: v.R.Flex,
                        alignItems: v.c.Center,
                        justifyContent: v._7.Center,
                        position: v._15.Absolute,
                        attachRight: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        attachBottom: !0
                    }, o.createElement(v.N, {
                        className: "extension-card__icon",
                        src: e,
                        alt: i
                    })), this.renderHoverElement()), o.createElement(v._8, {
                        padding: {
                            top: 1
                        }
                    }, o.createElement(v.Q, {
                        type: v._49.H6
                    }, i), o.createElement(v.Q, {
                        type: v._49.Span,
                        color: v.K.Alt2,
                        fontSize: v.V.Size7
                    }, t), o.createElement(v._8, {
                        padding: {
                            top: .5
                        }
                    }, this.renderAnchorTypePills(), a !== u.f.RELEASED && o.createElement(p.a, {
                        state: a
                    })))))
                }, n
            }(o.Component));
        t.d(n, "a", function() {
            return E
        })
    },
    VHHT: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return o
        });
        var i = t("BwgW"),
            a = (t.n(i), t("6sO2")),
            o = function(e, n) {
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
    YJkA: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            o = t("RH2O"),
            r = t("2KeS"),
            s = t("+8VM"),
            l = t("V5M+"),
            c = t("sfWM"),
            d = t("6sO2"),
            u = t("Odds"),
            m = function(e) {
                var n = e.activations,
                    t = e.onConfirm;
                return a.createElement(u._8, null, a.createElement(u.Q, {
                    type: u._49.H5
                }, Object(d.d)("{count, plural, one {Extension is now Active!} other {Extensions are now Active!}}", {
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
                    }, Object(d.d)("The extension {extensionName} is now active on slot {anchorSlot}", {
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
                }, Object(d.d)("Done", "ExtensionActivatedModal"))))
            };
        m.displayName = "ExtensionActivatedModalPresentation";
        var p = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return a.createElement(c.a, null, a.createElement(m, {
                    activations: this.props.activations,
                    onConfirm: this.props.closeModal
                }), a.createElement(s.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var v = Object(o.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(p);
        t.d(n, !1, function() {
            return p
        }), t.d(n, "a", function() {
            return v
        })
    },
    bcqU: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("RH2O"),
            a = t("TToO"),
            o = t("BwgW"),
            r = t("GiK3"),
            s = t("3zLD"),
            l = t("CIox"),
            c = t("6sO2"),
            d = t("N221"),
            u = t("7vx8"),
            m = t("j7/Y"),
            p = t("w9tK"),
            v = t("vH/s"),
            E = t("zezF"),
            g = t("HrG2"),
            h = t("q7Ag"),
            f = t("CSlQ"),
            x = t("Odds"),
            y = t("yjkL"),
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
                        s = r.createElement(x._8, {
                            fullWidth: !0
                        }, r.createElement(x._8, {
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(x.C, {
                            row: !0,
                            border: !1
                        }, r.createElement(x.E, {
                            alt: u.name,
                            src: this.state.hasCardImageError ? c.a.defaultAvatarURL : u.iconUrl,
                            aspect: x.l.Aspect1x1,
                            size: x.F.Size6,
                            onError: this.onCardImageError
                        }), r.createElement(x.D, null, r.createElement(x._8, {
                            padding: 1
                        }, r.createElement(x.Q, {
                            type: x._49.H4
                        }, u.name), r.createElement(x.Q, {
                            type: x._49.Span,
                            color: x.K.Alt2
                        }, Object(c.d)("Created by {extensionAuthor}", {
                            extensionAuthor: u.authorName
                        }, "ExtensionConfigureComponent")))))), r.createElement(x._8, null, r.createElement(E.a, {
                            anchor: m.anchor,
                            className: "extension-configure-extension-frame",
                            extension: u,
                            extensionMode: o.ExtensionMode.Config,
                            channelID: t,
                            channelName: this.props.match.params.channelName,
                            languageCode: this.props.languageCode,
                            locale: this.props.locale,
                            login: this.props.match.params.channelName,
                            loginID: t
                        })))
                    }
                    var p = r.createElement(g.a, {
                        showDashboardLink: !0,
                        dashboardURL: Object(h.c)(this.props.match.params.channelName),
                        title: Object(c.d)("Configure", "ExtensionConfigureComponent")
                    });
                    return r.createElement(d.b, null, r.createElement(x._8, {
                        padding: 2
                    }, r.createElement(x.Q, {
                        type: x._49.H3
                    }, this.getFormattedPageTitle()), r.createElement(x._8, {
                        padding: {
                            top: 2
                        }
                    }, p, r.createElement(x._35, {
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
                    return r.createElement(l.b, {
                        to: Object(h.c)(e)
                    })
                }, n.prototype.renderPlaceholders = function() {
                    return r.createElement(x._8, {
                        fullWidth: !0
                    }, r.createElement(x._8, {
                        display: x.R.Flex,
                        alignItems: x.c.Center,
                        padding: {
                            y: 1
                        }
                    }, r.createElement(x._8, null, r.createElement(x._14, {
                        width: 60,
                        height: 60
                    })), r.createElement(x._8, {
                        padding: {
                            left: 1
                        }
                    }, r.createElement(x._14, {
                        lineCount: 2,
                        width: 200
                    }))))
                }, n.prototype.isLoading = function() {
                    var e = this.props.data.loading,
                        n = !this.props.extensionsForChannel || !this.props.extensionsForChannel.data;
                    return e || n
                }, n
            }(r.Component),
            b = Object(s.compose)(Object(f.d)("ExtensionConfigurePage", {
                destination: p.a.ChannelDashboardExtensionsConfigure
            }), Object(m.a)({
                location: v.PageviewLocation.DashboardExtensionsConfigure
            }), Object(u.a)(y, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(E.c)({
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

        function C(e) {
            return {
                languageCode: e.session.languageCode,
                locale: e.session.locale
            }
        }
        var _ = Object(i.b)(C)(b);
        t.d(n, "mapStateToProps", function() {
            return C
        }), t.d(n, "ExtensionConfigurePage", function() {
            return _
        })
    },
    bpr6: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            o = t("RH2O"),
            r = t("2KeS"),
            s = t("+8VM"),
            l = t("V5M+"),
            c = t("sfWM"),
            d = t("BwgW"),
            u = t("6sO2");

        function m(e, n) {
            return !(e.minX > n.maxX || e.maxX < n.minX) && !(e.minY > n.maxY || e.maxY < n.minY)
        }

        function p(e, n, t, i) {
            return {
                minX: e,
                minY: n,
                maxX: e + t,
                maxY: n + i
            }
        }
        var v = t("Odds"),
            E = t("HW6M"),
            g = function(e) {
                var n, t = e.x,
                    i = e.y,
                    o = e.width,
                    r = e.height,
                    s = e.isGrabbed,
                    l = e.isOverlapped,
                    c = e.name,
                    d = e.slot,
                    u = e.tabIndex,
                    m = {
                        left: t + "px",
                        top: i + "px",
                        width: o + "px",
                        height: r + "px"
                    },
                    p = E("extension-component-preview", ((n = {})["extension-component-preview--active"] = s, n["extension-component-preview--overlapped"] = l, n));
                return a.createElement(v._3, {
                    position: v._15.Absolute,
                    textAlign: v._45.Center
                }, a.createElement("div", {
                    key: d,
                    tabIndex: u,
                    "data-slot": d,
                    className: p,
                    style: m
                }, a.createElement(v._35, {
                    fullHeight: !0,
                    display: v.R.Flex,
                    flexDirection: v.T.Column,
                    justifyContent: v._7.Center
                }, a.createElement(v.Q, {
                    color: v.K.Overlay,
                    type: v._49.Span,
                    fontSize: v.V.Size5
                }, c))))
            },
            h = 768,
            f = 432,
            x = 10,
            y = {
                w: {
                    x: 0,
                    y: -1
                },
                a: {
                    x: -1,
                    y: 0
                },
                s: {
                    x: 0,
                    y: 1
                },
                d: {
                    x: 1,
                    y: 0
                },
                k: {
                    x: 0,
                    y: -1
                },
                j: {
                    x: 0,
                    y: 1
                },
                h: {
                    x: -1,
                    y: 0
                },
                l: {
                    x: 1,
                    y: 0
                },
                arrowup: {
                    x: 0,
                    y: -1
                },
                arrowdown: {
                    x: 0,
                    y: 1
                },
                arrowleft: {
                    x: -1,
                    y: 0
                },
                arrowright: {
                    x: 1,
                    y: 0
                }
            },
            k = (t("p8So"), function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    t.renderOverlapError = function() {
                        var e = t.state.hasOverlappingComponents ? v.j.SlideInTop : v.j.SlideOutTop;
                        return t.state.hasOverlappingComponents || t.state.isAnimating ? a.createElement(v.e, {
                            enabled: !0,
                            onAnimationEnd: t.handleAnimationEnd,
                            type: e
                        }, a.createElement(v._35, {
                            position: v._15.Absolute,
                            attachTop: !0,
                            fullWidth: !0,
                            display: v.R.Flex,
                            justifyContent: v._7.Center
                        }, a.createElement(v._3, {
                            display: v.R.Flex,
                            padding: 1,
                            elevation: 5
                        }, a.createElement("div", {
                            className: "extension-component-error"
                        }, a.createElement(v._24, {
                            asset: v._25.NotificationError
                        }), a.createElement(v._3, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(v.Q, {
                            fontSize: v.V.Size4
                        }, Object(u.d)("Component Extensions cannot overlap", "ExtensionComponentActivateModal"))))))) : null
                    }, t.renderPositionPreview = function() {
                        var e = t.state.slotList.map(function(e, n) {
                            var i = t.state.currentActivationSettings[e],
                                o = i.componentConfig,
                                r = i.extensionName,
                                s = i.installationID,
                                l = i.x,
                                c = i.y,
                                u = Object(d.getComponentSizeFromView)(h, f, {
                                    aspectHeight: o.aspectHeight,
                                    aspectWidth: o.aspectWidth,
                                    zoom: o.hasZoom,
                                    zoomPixels: o.zoomPixels || d.DefaultZoomPixelWidth
                                }),
                                m = Object(d.getComponentPositionFromView)(h, f, {
                                    x: 100 * l,
                                    y: 100 * c
                                });
                            return a.createElement(g, {
                                slot: e,
                                name: r,
                                tabIndex: n + 1,
                                isGrabbed: t.state.grabbedSlot === e,
                                isOverlapped: t.state.collisionMap[e],
                                key: s,
                                x: m.x,
                                y: m.y,
                                width: u.width,
                                height: u.height
                            })
                        });
                        return a.createElement(v._3, {
                            position: v._15.Relative
                        }, a.createElement("div", {
                            ref: t.updatePositionContainerRef,
                            className: "extension-component-player",
                            style: {
                                width: h,
                                height: f
                            }
                        }, e, t.renderOverlapError()))
                    }, t.bringSlotToFront = function(e, n) {
                        var t = e.filter(function(e) {
                            return e !== n
                        });
                        return t.push(n), t
                    }, t.activateComponentsWithCurrentSettings = function() {
                        var e = t.state.sortedSlotList.map(function(e) {
                            var n = t.state.currentActivationSettings[e],
                                i = n.installationID,
                                a = n.x,
                                o = n.y;
                            return {
                                installationID: i,
                                component: {
                                    slot: e,
                                    x: Math.floor(100 * a),
                                    y: Math.floor(100 * o)
                                }
                            }
                        });
                        t.props.onConfirm(e), t.props.closeModal()
                    }, t.updateCollisionMap = function(e, n, t) {
                        e[n] = !1;
                        for (var i = t[n], a = i.x, o = i.y, r = i.componentConfig, s = p(a, o, r.aspectWidth / 100, r.aspectHeight / 100), l = 0, c = Object.keys(t).sort(); l < c.length; l++) {
                            var d = c[l];
                            if (n !== d) {
                                var u = t[d],
                                    v = u.x,
                                    E = u.y,
                                    g = u.componentConfig;
                                e[d] = !1, m(s, p(v, E, g.aspectWidth / 100, g.aspectHeight / 100)) && (e[n] = !0, e[d] = !0)
                            }
                        }
                        return e
                    }, t.updateCoordinates = function(e, n, a) {
                        if (t.state.currentActivationSettings[e]) {
                            var o = i.__assign({}, t.state.currentActivationSettings[e]),
                                r = o.componentConfig,
                                s = 100 - r.aspectWidth / 100,
                                l = 100 - r.aspectHeight / 100;
                            o.x = Math.max(0, Math.min(n, s)), o.y = Math.max(0, Math.min(a, l));
                            var c, d = i.__assign({}, t.state.currentActivationSettings, ((c = {})[e] = o, c)),
                                u = t.updateCollisionMap(t.state.collisionMap, e, d);
                            t.setState({
                                collisionMap: u,
                                currentActivationSettings: d
                            })
                        }
                    }, t.updatePositionContainerRef = function(e) {
                        t.setState({
                            positioningContainer: e
                        })
                    }, t.handleMouseDown = function(e) {
                        if (t.state.positioningContainer) {
                            var n = e.target,
                                i = t.findComponentPreview(n);
                            if (i) {
                                var a = t.state.positioningContainer.getBoundingClientRect(),
                                    o = i.getAttribute("data-slot");
                                if (o) {
                                    var r = i.getBoundingClientRect(),
                                        s = e.clientX - a.left,
                                        l = e.clientY - a.top,
                                        c = s - (r.left - a.left),
                                        d = l - (r.top - a.top),
                                        u = t.bringSlotToFront(t.state.slotList, o);
                                    t.setState({
                                        grabbedSlot: o,
                                        mouseOffsetX: c,
                                        mouseOffsetY: d,
                                        slotList: u
                                    })
                                }
                            } else t.setState({
                                grabbedSlot: null
                            })
                        }
                    }, t.handleMouseMove = function(e) {
                        if (t.state.grabbedSlot && t.state.positioningContainer) {
                            var n = t.state.positioningContainer.getBoundingClientRect(),
                                i = e.clientX - n.left,
                                a = e.clientY - n.top,
                                o = i - t.state.mouseOffsetX + window.scrollX,
                                r = a - t.state.mouseOffsetY + window.scrollY,
                                s = o / h,
                                l = r / f;
                            t.updateCoordinates(t.state.grabbedSlot, Math.floor(1e4 * s) / 100, Math.floor(1e4 * l) / 100)
                        }
                    }, t.handleAnimationEnd = function() {
                        t.setState({
                            isAnimating: !1
                        })
                    }, t.handleFinishMove = function() {
                        var e = t.state.sortedSlotList.some(function(e) {
                                return t.state.collisionMap[e]
                            }),
                            n = e !== t.state.hasOverlappingComponents;
                        t.setState({
                            hasOverlappingComponents: e,
                            isAnimating: n,
                            grabbedSlot: null
                        })
                    }, t.handleKeyDown = function(e) {
                        var n = document.activeElement ? document.activeElement.getAttribute("data-slot") : void 0;
                        if (n && t.state.positioningContainer && t.state.positioningContainer.contains(document.activeElement)) {
                            var i = t.state.positioningContainer.getBoundingClientRect(),
                                a = 1 / h,
                                o = 1 / f,
                                r = 0,
                                s = 0,
                                l = document.activeElement;
                            if (l) {
                                var c = l.getBoundingClientRect();
                                r = c.left, s = c.top
                            }
                            var d = 0,
                                u = 0,
                                m = e.key.toLowerCase(),
                                p = y[m];
                            p && (d = p.x * a, u = p.y * o);
                            var v = e.shiftKey ? x : 1,
                                E = r - i.left + (window.scrollX || 0),
                                g = s - i.top + (window.scrollY || 0),
                                k = d * v + E / h,
                                b = u * v + g / f;
                            t.updateCoordinates(n, Math.floor(1e4 * k) / 100, Math.floor(1e4 * b) / 100), t.handleFinishMove()
                        }
                    }, t.handleFocus = function() {
                        var e = document.activeElement ? document.activeElement.getAttribute("data-slot") : void 0;
                        if (e && t.state.positioningContainer && t.state.positioningContainer.contains(document.activeElement)) {
                            var n = t.bringSlotToFront(t.state.slotList, e);
                            t.setState({
                                slotList: n
                            })
                        }
                    };
                    var o = n.activatedComponentData.reduce(function(e, t) {
                        return t.installationID === n.idToActivate ? e : (e[t.slot] = i.__assign({}, t, {
                            x: t.x / 100,
                            y: t.y / 100
                        }), e)
                    }, {});
                    o[n.slotToActivate] = {
                        installationID: n.idToActivate,
                        extensionName: n.extensionNameToActivate,
                        componentConfig: n.componentConfigToActivate,
                        slot: n.slotToActivate,
                        x: 0,
                        y: 0
                    };
                    var r = Object.keys(o).sort(),
                        s = t.bringSlotToFront(r, n.slotToActivate),
                        l = t.updateCollisionMap({}, n.slotToActivate, o),
                        c = r.some(function(e) {
                            return l[e]
                        });
                    return t.state = {
                        slotList: s,
                        collisionMap: l,
                        sortedSlotList: r,
                        hasOverlappingComponents: c,
                        currentActivationSettings: o,
                        grabbedSlot: null,
                        mouseOffsetX: 0,
                        mouseOffsetY: 0,
                        positioningContainer: null,
                        isAnimating: !1
                    }, t
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement("div", {
                        onMouseDown: this.handleMouseDown,
                        onMouseMove: this.handleMouseMove,
                        onMouseUp: this.handleFinishMove,
                        onKeyDown: this.handleKeyDown,
                        onFocus: this.handleFocus
                    }, a.createElement(v._8, null, a.createElement(v.Q, {
                        type: v._49.H5
                    }, Object(u.d)("Set Component Location", "ExtensionComponentActivateModal")), a.createElement(v._35, {
                        borderTop: !0,
                        padding: {
                            y: 1
                        }
                    }, a.createElement(v.Q, null, Object(u.d)("Drag and drop the selected component to set a default anchor point within the video player", "ExtensionComponentActivateModal"))), a.createElement(v._35, {
                        background: v.n.Alt,
                        padding: {
                            bottom: 1
                        }
                    }, this.renderPositionPreview()), a.createElement(v._35, {
                        display: v.R.Flex,
                        justifyContent: v._7.Center,
                        borderTop: !0,
                        padding: {
                            top: 1
                        }
                    }, a.createElement(v._8, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(v.v, {
                        type: v.B.Hollow,
                        onClick: this.props.closeModal
                    }, Object(u.d)("Cancel", "ExtensionComponentActivateModal"))), a.createElement(v.v, {
                        disabled: this.state.hasOverlappingComponents,
                        onClick: this.activateComponentsWithCurrentSettings
                    }, Object(u.d)("Save", "ExtensionComponentActivateModal")))))
                }, n.prototype.findComponentPreview = function(e) {
                    if (e) {
                        if (e.getAttribute("data-slot")) return e;
                        if (e.parentElement) return this.findComponentPreview(e.parentElement)
                    }
                    return null
                }, n
            }(a.Component)),
            b = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(c.a, {
                        className: "extension-manager-modal-container--expand"
                    }, a.createElement(k, {
                        activatedComponentData: this.props.activatedComponentData,
                        componentConfigToActivate: this.props.componentConfigToActivate,
                        extensionNameToActivate: this.props.extensionNameToActivate,
                        idToActivate: this.props.idToActivate,
                        slotToActivate: this.props.slotToActivate,
                        onConfirm: this.props.onConfirm,
                        closeModal: this.props.closeModal
                    }), a.createElement(s.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(a.Component);
        var C = Object(o.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(b);
        t.d(n, !1, function() {
            return b
        }), t.d(n, "a", function() {
            return C
        })
    },
    gAaz: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            o = t("CIox"),
            r = t("6sO2"),
            s = t("vH/s"),
            l = t("q7Ag"),
            c = t("Odds"),
            d = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        searchTerm: n.props.initialSearchTerm || ""
                    }, n.onSubmit = function(e) {
                        e.preventDefault(), n.state.searchTerm && n.props.history.push(Object(l.g)(n.state.searchTerm), {
                            medium: n.props.trackingContext.medium,
                            content: s.PageviewContent.ExtensionSearchBar
                        })
                    }, n.onSearchInputChange = function(e) {
                        n.setState({
                            searchTerm: e.currentTarget.value
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(c._35, {
                        border: !0,
                        background: c.n.Base,
                        padding: 1
                    }, a.createElement(c.Y, null, a.createElement(c.L, {
                        cols: 8
                    }), a.createElement(c.L, {
                        cols: 4
                    }, a.createElement("form", {
                        onSubmit: this.onSubmit
                    }, a.createElement(c._27, {
                        placeholder: Object(r.d)("Search store", "ExtensionSearchBar"),
                        value: this.state.searchTerm,
                        onChange: this.onSearchInputChange
                    })))))
                }, n
            }(a.Component),
            u = Object(o.f)(d);
        t.d(n, !1, function() {
            return d
        }), t.d(n, "a", function() {
            return u
        })
    },
    l0vj: function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("Odds"),
            o = function() {
                return i.createElement(a._8, {
                    display: a.R.Flex,
                    flexDirection: a.T.Column
                }, i.createElement(a._14, {
                    width: 300,
                    height: 200
                }), i.createElement(a._8, {
                    padding: {
                        top: 1
                    }
                }, i.createElement(a._14, {
                    width: 250,
                    height: 15
                })), i.createElement(a._8, {
                    padding: {
                        top: .5
                    }
                }, i.createElement(a._14, {
                    width: 140,
                    height: 15
                })), i.createElement(a._8, {
                    padding: {
                        top: .5
                    }
                }, i.createElement(a._14, {
                    width: 60,
                    height: 15
                })))
            };
        o.displayName = "ExtensionCardPlaceholder", t.d(n, "a", function() {
            return o
        })
    },
    nP5L: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return o
        });
        var i = t("6sO2"),
            a = t("G8hb"),
            o = function(e, n) {
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
    p8So: function(e, n) {},
    "ry+I": function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("6sO2"),
            o = t("G8hb"),
            r = t("Odds"),
            s = function(e) {
                var n;
                switch (e.state) {
                    case o.f.InTest:
                        n = Object(a.d)("TESTING", "ExtensionStatusPill");
                        break;
                    case o.f.ReadyForReview:
                        n = Object(a.d)("READY FOR REVIEW", "ExtensionStatusPill");
                        break;
                    case o.f.InReview:
                        n = Object(a.d)("IN REVIEW", "ExtensionStatusPill");
                        break;
                    case o.f.Rejected:
                        n = Object(a.d)("REJECTED", "ExtensionStatusPill");
                        break;
                    case o.f.Approved:
                        n = Object(a.d)("APPROVED", "ExtensionStatusPill");
                        break;
                    case o.f.Deprecated:
                        n = Object(a.d)("DEPRECATED", "ExtensionStatusPill");
                        break;
                    case o.f.PendingAction:
                        n = Object(a.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                        break;
                    case o.f.Uploading:
                        n = Object(a.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                        break;
                    case o.f.AssetsUploaded:
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
        s.displayName = "ExtensionStatusPill", t.d(n, "a", function() {
            return s
        })
    },
    sfWM: function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("Odds"),
            o = (t("Oxrw"), function(e) {
                return i.createElement(a._35, {
                    className: e.className || "extension-manager-modal-container",
                    background: a.n.Base,
                    padding: 2
                }, e.children)
            });
        o.displayName = "ModalContainer", t.d(n, "a", function() {
            return o
        })
    },
    twC3: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            o = t("RH2O"),
            r = t("2KeS"),
            s = t("+8VM"),
            l = t("V5M+"),
            c = t("sfWM"),
            d = t("G8hb"),
            u = t("6sO2"),
            m = t("Odds"),
            p = function(e) {
                var n = e.closeModal,
                    t = e.extensionName,
                    i = e.monetizationType,
                    o = e.onConfirm,
                    r = i === d.d.InExtensionPurchases,
                    s = i === d.d.Bits,
                    l = Object(u.d)("Are you sure you want to deactivate?", "ExtensionDeactivationWarning"),
                    c = l;
                return r ? c = Object(u.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning") : s && (c = Object(u.d)("This extension is Bits-enabled. If you deactivate this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
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
                }, c))), a.createElement(m._8, {
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
                    onClick: o
                }, Object(u.d)("Deactivate", "ExtensionDeactivationWarning"))))
            },
            v = function(e) {
                var n = e.existingExtensionName,
                    t = e.activationSlot,
                    i = e.existingMonetizationType,
                    o = e.closeModal,
                    r = e.onConfirm,
                    s = i === d.d.InExtensionPurchases,
                    l = i === d.d.Bits,
                    c = Object(u.d)("Are you sure you want to uninstall?", "ExtensionDeactivationWarning");
                return s ? c = Object(u.d)("This extension enables in-extension purchases. If you replace this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionDeactivationWarning") : l && (c = Object(u.d)("This extension is Bits-enabled. If you replace this extension, your viewers may not be able to enjoy items and experiences they’ve exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionDeactivationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
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
                }, c)), a.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, a.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: o
                }, Object(u.d)("Cancel", "ExtensionReplacementWarning"))), a.createElement(m.v, {
                    onClick: r
                }, Object(u.d)("Replace", "ExtensionReplacementWarning"))))
            };
        v.displayName = "ExtensionReplacementWarning";
        var E = function(e) {
                var n = e.closeModal,
                    t = e.extensionName,
                    i = e.monetizationType,
                    o = e.onConfirm,
                    r = i === d.d.InExtensionPurchases,
                    s = i === d.d.Bits,
                    l = Object(u.d)("Are you sure you want to uninstall?", "ExtensionUninstallationWarning"),
                    c = l;
                return r ? c = Object(u.d)("This extension enables in-extension purchases. If you uninstall this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning") : s && (c = Object(u.d)("This extension is Bits-enabled. If you uninstall this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
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
                }, c))), a.createElement(m._8, {
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
                    onClick: o
                }, Object(u.d)("Uninstall", "ExtensionUninstallationWarning"))))
            },
            g = function(e) {
                switch (e.destructionType) {
                    case d.c.Deactivate:
                        return a.createElement(p, {
                            closeModal: e.closeModal,
                            extensionName: e.extensionName,
                            monetizationType: e.monetizationType,
                            onConfirm: e.onConfirm
                        });
                    case d.c.Replace:
                        return a.createElement(v, {
                            closeModal: e.closeModal,
                            existingExtensionName: e.existingExtensionName,
                            existingMonetizationType: e.existingMonetizationType,
                            activationSlot: e.activationSlot,
                            onConfirm: e.onConfirm
                        });
                    case d.c.Uninstall:
                        return a.createElement(E, {
                            closeModal: e.closeModal,
                            extensionName: e.extensionName,
                            monetizationType: e.monetizationType,
                            onConfirm: e.onConfirm
                        });
                    default:
                        return null
                }
            };
        g.displayName = "ExtensionDestructionWarningModalComponent";
        var h = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.onConfirm = function() {
                    n.props.onConfirm(), n.props.closeModal()
                }, n
            }
            return i.__extends(n, e), n.prototype.render = function() {
                var e = null;
                switch (this.props.destructionType) {
                    case d.c.Deactivate:
                        e = a.createElement(g, {
                            closeModal: this.props.closeModal,
                            destructionType: this.props.destructionType,
                            extensionName: this.props.extensionName,
                            monetizationType: this.props.monetizationType,
                            onConfirm: this.onConfirm
                        });
                        break;
                    case d.c.Replace:
                        e = a.createElement(g, {
                            closeModal: this.props.closeModal,
                            destructionType: this.props.destructionType,
                            existingExtensionName: this.props.existingExtensionName,
                            existingMonetizationType: this.props.existingMonetizationType,
                            activationSlot: this.props.activationSlot,
                            onConfirm: this.props.onConfirm
                        });
                        break;
                    case d.c.Uninstall:
                        e = a.createElement(g, {
                            closeModal: this.props.closeModal,
                            destructionType: this.props.destructionType,
                            extensionName: this.props.extensionName,
                            monetizationType: this.props.monetizationType,
                            onConfirm: this.onConfirm
                        })
                }
                return a.createElement(c.a, null, e, a.createElement(s.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var f = Object(o.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(h);
        t.d(n, !1, function() {
            return h
        }), t.d(n, "a", function() {
            return f
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
//# sourceMappingURL=pages.extension-configure-4563a1f8734e436c31671d78958160df.js.map