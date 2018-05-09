webpackJsonp([61], {
    "0QnV": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("TToO"),
            a = t("RH2O"),
            r = t("2KeS"),
            o = t("V5M+"),
            s = t("Aj/L"),
            l = t("twC3"),
            c = t("9Gfr"),
            d = t("SfDx"),
            u = t("S/9j"),
            m = t("GiK3"),
            p = t("3zLD"),
            v = t("6sO2"),
            E = t("yWCw"),
            g = t("68hr"),
            f = t("7vx8"),
            h = t("j7/Y"),
            x = t("oIkB"),
            k = t("w9tK"),
            b = t("vH/s"),
            y = t("HrG2"),
            _ = t("G8hb"),
            N = t("XwK1"),
            O = t("GeUc"),
            R = t("q7Ag"),
            C = t("CSlQ"),
            S = t("KqsW"),
            I = t("Odds"),
            w = function(e) {
                var n = e.loginName,
                    t = e.extension,
                    i = e.isChannelCheeringEnabled,
                    a = e.isExtensionInstalled,
                    r = e.onUninstall,
                    o = e.onInstall,
                    s = t.clientID,
                    l = t.version;
                if (a) return m.createElement(I._8, {
                    display: I.R.Flex,
                    alignItems: I.c.Center,
                    justifyContent: I._7.Center,
                    flexGrow: 0,
                    flexShrink: 0
                }, m.createElement(I._8, {
                    padding: {
                        right: 1
                    }
                }, m.createElement(I.v, {
                    linkTo: Object(R.b)(n, s, l),
                    type: I.B.Text,
                    size: I.z.Large
                }, Object(v.d)("Configure", "ExtensionPage"))), m.createElement(I.v, {
                    type: I.B.Hollow,
                    onClick: r
                }, Object(v.d)("Uninstall", "ExtensionPage")));
                var c = void 0,
                    d = Object(v.d)("Install", "ExtensionPage");
                if (t.state === _.e.Released && t.isBitsEnabled && !i) {
                    var u = Object(v.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "ExtensionPage");
                    c = m.createElement(I._52, {
                        label: u,
                        direction: I._54.Left
                    }, m.createElement(I.v, {
                        size: I.z.Large,
                        icon: I._25.Plus,
                        disabled: !0
                    }, d))
                } else c = m.createElement(I.v, {
                    size: I.z.Large,
                    icon: I._25.Plus,
                    onClick: o
                }, d);
                return m.createElement(I._8, {
                    display: I.R.Flex,
                    alignItems: I.c.Center,
                    justifyContent: I._7.Center,
                    flexGrow: 0,
                    flexShrink: 0
                }, c)
            };
        w.displayName = "ExtensionButtons";
        var D = t("BwgW"),
            T = t("nP5L"),
            P = t("VHHT"),
            j = function(e) {
                var n = e.extension,
                    t = Object(_.g)(n),
                    i = Object(_.h)(n.views).map(function(e) {
                        return Object(T.a)(e, !1)
                    }).concat(Object(_.i)(n.views).filter(function(e) {
                        return e !== D.ExtensionPlatform.Web
                    }).map(function(e) {
                        return Object(P.a)(e, !1)
                    }));
                return m.createElement(I._35, {
                    background: I.n.Base,
                    border: !0,
                    padding: 1
                }, m.createElement(I._8, null, m.createElement(I._8, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(I.Q, {
                    type: I._49.Strong
                }, Object(v.d)("Details", "ExtensionDetails"))), m.createElement(I.Q, {
                    type: I._49.P,
                    wordBreak: I._61.BreakWord
                }, n.description)), m.createElement(I._35, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, m.createElement(I._8, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(I.Q, {
                    type: I._49.Strong
                }, Object(v.d)("Additional Information", "ExtensionDetails"))), m.createElement(I.Q, {
                    type: I._49.P
                }, Object(v.d)("Version: {extensionVersion}", {
                    extensionVersion: n.version
                }, "ExtensionDetails")), m.createElement(I.Q, {
                    type: I._49.P
                }, Object(v.d)("Support: {supportEmail}", {
                    supportEmail: m.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: "mailto:" + n.supportEmail
                    }, n.supportEmail)
                }, "ExtensionDetails")), m.createElement(I.Q, {
                    type: I._49.P
                }, Object(v.d)("{typesCount, plural, one {Type: {types}} other {Types: {types}}}", {
                    types: i.join(", "),
                    typesCount: i.length
                }, "ExtensionDetails")), "" !== n.privacyPolicyURL && m.createElement(I.Q, {
                    type: I._49.P,
                    wordBreak: I._61.BreakWord
                }, Object(v.d)("Privacy Policy: {privacyPolicyURL}", {
                    privacyPolicyURL: m.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: n.privacyPolicyURL
                    }, n.privacyPolicyURL)
                }, "ExtensionDetails")), "" !== n.termsURL && m.createElement(I.Q, {
                    type: I._49.P,
                    wordBreak: I._61.BreakWord
                }, Object(v.d)("User Agreement: {termsOfServiceURL}", {
                    termsOfServiceURL: m.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: n.termsURL
                    }, n.termsURL)
                }, "ExtensionDetails"))), t === _.d.InExtensionPurchases && m.createElement(I._35, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, m.createElement(I._8, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(I.Q, {
                    type: I._49.Strong
                }, Object(v.d)("In-Extension Purchases", "ExtensionDetails"))), m.createElement(I.Q, {
                    type: I._49.P
                }, Object(v.d)("This extension enables the sale of digital goods. You may be eligible for a revenue share.", "ExtensionDetails"), m.createElement(I._2, {
                    padding: {
                        left: .5
                    }
                }, m.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://help.twitch.tv/customer/portal/articles/2901058-earning-revenue-from-in-extension-purchases-beta"
                }, Object(v.d)("Learn More.", "ExtensionDetails")))), m.createElement(I.Q, {
                    type: I._49.P
                }, Object(v.d)("For questions regarding your In-Extension Purchase orders, please contact {amazonCustomerService} team.", {
                    amazonCustomerService: m.createElement("a", {
                        href: "https://www.amazon.com/gp/help/customer/contact-us?",
                        target: "_blank",
                        rel: "noopener"
                    }, Object(v.d)("Amazon's Twitch Customer Service", "ExtensionDetails"))
                }, "ExtensionDetailsPurchases"))), t === _.d.Bits && m.createElement(I._35, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, m.createElement(I._8, {
                    display: I.R.Flex,
                    alignItems: I.c.Center,
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(I._24, {
                    asset: I._25.Bits
                }), m.createElement(I._8, {
                    display: I.R.InlineBlock,
                    padding: {
                        left: .5
                    }
                }, m.createElement(I.Q, {
                    type: I._49.Strong
                }, Object(v.d)("In-Extension Bits", "ExtensionDetails")))), m.createElement(I.Q, {
                    type: I._49.P
                }, Object(v.d)("This extension enables the use of Bits. For each eligible use of Bits in this extension, subject to Twitch’s legal terms and policies, the extension developer and the streamer will receive 20% and 80%, respectively, of 1 U.S. cent per Bit. You as a streamer may be eligible for a revenue share if you are a partner or an affiliate.", "ExtensionDetails"), m.createElement(I._8, null, m.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://help.twitch.tv/customer/portal/articles/2927987-earning-revenue-from-in-extension-bits-beta"
                }, Object(v.d)("Learn More.", "ExtensionDetailsBits"))))))
            };
        j.displayName = "ExtensionDetails";
        var L = t("Rb5r"),
            U = (t("GazO"), function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1,
                        isExtensionInstalled: !1
                    }, n.renderScreenshots = function(e) {
                        return e.screenshotURLs.map(function(e) {
                            return m.createElement(I._8, {
                                className: "extension-page__screenshot",
                                padding: {
                                    right: 1
                                },
                                key: e
                            }, m.createElement(I._6, {
                                onClick: n.onScreenshotClick,
                                "data-full": e
                            }, m.createElement(I.k, {
                                ratio: I.l.Aspect4x3
                            }, m.createElement("img", {
                                src: e
                            }))))
                        })
                    }, n.renderPlaceholders = function() {
                        return m.createElement(I._35, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0,
                            padding: 2
                        }, m.createElement(I._8, {
                            display: I.R.Flex,
                            alignItems: I.c.Center,
                            padding: {
                                y: 1
                            }
                        }, m.createElement(I._8, null, m.createElement(I._14, {
                            width: 60,
                            height: 60
                        })), m.createElement(I._8, {
                            padding: {
                                left: 1
                            }
                        }, m.createElement(I._14, {
                            lineCount: 2,
                            width: 200
                        }))), m.createElement(I.Y, null, m.createElement(I.L, {
                            cols: 7
                        }, m.createElement(I._35, {
                            border: !0,
                            background: I.n.Base,
                            display: I.R.Flex,
                            padding: 1
                        }, m.createElement(I._8, null, m.createElement(I._14, {
                            height: 300
                        })))), m.createElement(I.L, {
                            cols: 5
                        }, m.createElement(I._35, {
                            border: !0,
                            background: I.n.Base,
                            padding: 1
                        }, m.createElement(I._8, null, m.createElement(I._14, {
                            width: 100
                        }), m.createElement(I._8, {
                            padding: {
                                top: 1
                            }
                        }, m.createElement(I._14, {
                            lineCount: 2
                        }))), m.createElement(I._35, {
                            borderTop: !0,
                            padding: {
                                top: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, m.createElement(I._14, {
                            width: 100
                        }), m.createElement(I._8, {
                            padding: {
                                top: 1
                            }
                        }, m.createElement(I._14, {
                            width: 300,
                            lineCount: 2
                        })))))))
                    }, n.onScreenshotClick = function(e) {
                        n.props.showImageViewerModal({
                            screenshotURL: e.currentTarget.dataset.full || ""
                        })
                    }, n.onCardImageError = function() {
                        n.setState({
                            hasCardImageError: !0
                        })
                    }, n.onInstallExtension = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var e, n, t, a, r, o, s, l, c, d;
                            return i.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (e = this.props, n = e.data, t = e.installExtension, a = e.loginName, r = e.showInstalledModal, o = e.showErrorModal, !(n && n.extension && n.currentUser)) return [3, 4];
                                        s = n.extension, u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 3, , 4]), [4, t(i.__assign({}, Object(x.a)({
                                            extensionID: s.id,
                                            channelID: n.currentUser.id
                                        })))];
                                    case 2:
                                        return (l = u.sent()).data.installExtension && l.data.installExtension.installedExtension && (c = l.data.installExtension.installedExtension, d = function(e) {
                                            return e.currentUser && e.currentUser.installedExtensions.push({
                                                id: c.id,
                                                extension: {
                                                    id: c.extension.id
                                                }
                                            }), e
                                        }, Object(x.e)(L, i.__assign({}, F(this.props)), d), r({
                                            extensionClientID: c.extension.clientID,
                                            extensionVersion: c.extension.version,
                                            login: a
                                        })), [3, 4];
                                    case 3:
                                        return u.sent(), o(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.confirmExtensionUninstallation = function() {
                        var e = n.props.data;
                        if (e && e.extension && e.currentUser) {
                            var t = e.extension,
                                i = e.currentUser.installedExtensions.find(function(e) {
                                    return e.extension.id === t.id
                                });
                            if (i) {
                                n.props.showDestructionWarningModal({
                                    destructionType: _.c.Uninstall,
                                    extensionName: t.name,
                                    monetizationType: Object(_.g)(t),
                                    onConfirm: function() {
                                        return n.uninstallExtension(i.id)
                                    }
                                })
                            }
                        }
                    }, n.uninstallExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, r;
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        n = this.props.showErrorModal, o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.props.uninstallExtension(i.__assign({}, Object(x.a)({
                                            extensionInstallationID: e
                                        })))];
                                    case 2:
                                        return (t = o.sent().data).uninstallExtension && t.uninstallExtension.id && (a = t.uninstallExtension.id, r = function(e) {
                                            return e.currentUser && (e.currentUser.installedExtensions = e.currentUser.installedExtensions.filter(function(e) {
                                                return e.id !== a
                                            })), e
                                        }, Object(x.e)(L, i.__assign({}, F(this.props)), r)), [3, 4];
                                    case 3:
                                        return o.sent(), n(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.componentDidMount = function() {
                    v.o.setPageTitle(Object(v.d)("Extensions", "ExtensionPageTitle"))
                }, n.prototype.componentWillReceiveProps = function(e) {
                    if (e !== this.props) {
                        var n = this.props.data,
                            t = e.data;
                        if (n !== t && t && !t.loading && !t.error && t.extension && t.currentUser) {
                            var i = !!t.currentUser.installedExtensions.find(function(e) {
                                return e.extension.id === t.extension.id
                            });
                            this.state.isExtensionInstalled !== i && this.setState({
                                isExtensionInstalled: i
                            })
                        }
                    }
                }, n.prototype.componentDidUpdate = function() {
                    var e = this.props.data;
                    e && !e.loading && this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e = this.props,
                        n = e.data,
                        t = e.isLoggedIn,
                        i = e.loginName;
                    if (!n || n.error) return m.createElement(E.a, {
                        message: Object(v.d)("An error occurred on this page", "ExtensionPage")
                    });
                    var a = m.createElement(y.a, {
                        showDashboardLink: t,
                        dashboardURL: Object(R.c)(i),
                        title: Object(v.d)("Details", "ExtensionPageTitle")
                    });
                    if (n.loading) return m.createElement(I._35, {
                        padding: 4,
                        background: I.n.Alt
                    }, a, this.renderPlaceholders());
                    if (!n.extension) return m.createElement(g.a, null);
                    var r = n.extension,
                        o = !(!n.currentUser || !n.currentUser.cheer);
                    return m.createElement(I._35, {
                        padding: 4,
                        background: I.n.Alt
                    }, a, m.createElement(I._35, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderBottom: !0,
                        padding: 2
                    }, m.createElement(I._8, {
                        display: I.R.Flex,
                        flexWrap: I.U.NoWrap,
                        justifyContent: I._7.Between,
                        flexGrow: 1,
                        padding: {
                            bottom: 1
                        }
                    }, m.createElement(I.C, {
                        row: !0,
                        border: !1
                    }, m.createElement(I.E, {
                        alt: r.name,
                        src: this.state.hasCardImageError ? v.a.defaultAvatarURL : r.iconURL,
                        aspect: I.l.Aspect1x1,
                        size: I.F.Size6,
                        onError: this.onCardImageError
                    }), m.createElement(I.D, null, m.createElement(I._8, {
                        padding: 1
                    }, m.createElement(I.Q, {
                        type: I._49.H4
                    }, r.name), m.createElement(I.Q, {
                        type: I._49.Span,
                        color: I.K.Alt2
                    }, Object(v.d)("Created by {extensionAuthor}", {
                        extensionAuthor: r.authorName
                    }, "ExtensionPage"))))), t && r.self && r.self.canInstall && m.createElement(w, {
                        loginName: i,
                        extension: r,
                        isExtensionInstalled: this.state.isExtensionInstalled,
                        isChannelCheeringEnabled: o,
                        onInstall: this.onInstallExtension,
                        onUninstall: this.confirmExtensionUninstallation
                    })), m.createElement(I.Y, null, m.createElement(I.L, {
                        cols: 7
                    }, m.createElement(I._35, {
                        background: I.n.Base,
                        border: !0,
                        padding: 1
                    }, m.createElement(S.a, {
                        insetStyle: !0,
                        items: this.renderScreenshots(r)
                    }))), m.createElement(I.L, {
                        cols: 5
                    }, m.createElement(j, {
                        extension: r
                    })))))
                }, n
            }(m.Component));

        function F(e) {
            var n = e.match,
                t = e.isLoggedIn,
                i = n.params.extensionID.split("-");
            return {
                extensionID: i[0],
                extensionVersion: i[1],
                isLoggedIn: t
            }
        }
        var A = Object(p.compose)(Object(C.d)("ExtensionDetailsPage", {
            destination: k.a.ExtensionDetails
        }), Object(h.a)({
            location: b.PageviewLocation.ExtensionDetails
        }), Object(f.a)(L, {
            options: function(e) {
                return {
                    variables: i.__assign({}, F(e))
                }
            }
        }), Object(f.a)(N, {
            name: "installExtension"
        }), Object(f.a)(O, {
            name: "uninstallExtension"
        }))(U);
        var B = Object(a.b)(function(e) {
            var n = Object(s.d)(e),
                t = Object(s.c)(e);
            return {
                isLoggedIn: n,
                loginName: t && t.login || ""
            }
        }, function(e) {
            return Object(r.b)({
                showInstalledModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(o.d)(d.a, n)
                },
                showDestructionWarningModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(o.d)(l.a, n)
                },
                showErrorModal: function() {
                    return Object(o.d)(c.a, {})
                },
                showImageViewerModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(o.d)(u.a, n)
                }
            }, e)
        })(A);
        t.d(n, "ExtensionPage", function() {
            return B
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
    GazO: function(e, n) {},
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
    KqsW: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return v
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
    M4d4: function(e, n) {},
    Oxrw: function(e, n) {},
    Rb5r: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionPage_ExtensionDetails"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "extensionID"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "extensionVersion"
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
                            value: "isLoggedIn"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
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
                            value: "extension"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "extensionID"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "version"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "extensionVersion"
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
                                            value: "canInstall"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
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
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
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
                end: 564
            }
        };
        t.loc.source = {
            body: "query ExtensionPage_ExtensionDetails($extensionID: ID! $extensionVersion: String $isLoggedIn: Boolean!) {\nextension(id: $extensionID version: $extensionVersion) {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nself {\ncanInstall\n}\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\ncheer {\nid\n}\ninstalledExtensions {\nid\nextension {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "S/9j": function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return u
        });
        var i = t("TToO"),
            a = t("GiK3"),
            r = (t.n(a), t("RH2O")),
            o = t("2KeS"),
            s = t("+8VM"),
            l = t("V5M+"),
            c = t("Odds"),
            d = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(c._35, {
                        padding: {
                            x: 2,
                            y: 3
                        },
                        background: c.n.Base
                    }, a.createElement("img", {
                        src: this.props.screenshotURL
                    }), a.createElement(s.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, n
            }(a.Component);
        var u = Object(o.d)(Object(r.b)(null, function(e) {
            return Object(o.b)({
                closeModal: l.c
            }, e)
        }))(d)
    },
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
            p = function(e) {
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
        p.displayName = "ExtensionInstalledModalPresentation";
        var v = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return a.createElement(c.a, null, a.createElement(p, {
                    closeModal: this.props.closeModal,
                    extensionClientID: this.props.extensionClientID,
                    extensionVersion: this.props.extensionVersion,
                    login: this.props.login
                }), a.createElement(s.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var E = Object(r.b)(null, function(e) {
            return Object(o.b)({
                closeModal: l.c
            }, e)
        })(v);
        t.d(n, !1, function() {
            return v
        }), t.d(n, "a", function() {
            return E
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
    "j7/Y": function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("OAwv"),
            r = t("GiK3"),
            o = t("F8kA"),
            s = t("6sO2");

        function l(e) {
            return function(n) {
                var t = function(t) {
                    function o(n) {
                        var a = t.call(this, n) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0;
                                var n = {};
                                "function" == typeof e.properties ? n = e.properties(a.props) : e.properties && (n = i.__assign({}, e.properties));
                                var t = i.__assign({}, a.props);
                                t.location && t.location.state && (n.medium = t.location.state.medium, n.content = t.location.state.content, n.content_index = t.location.state.content_index);
                                var r = a.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    c = r.content_index;
                                s.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: c,
                                    location: e.location
                                }, n))
                            }
                        }, s.j.debug("pageViewTracking", e), n.rootLatencyTracker ? n.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(o, t), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(n, t) {
                            "REPLACE" !== t && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return r.createElement(n, i.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var n = "" !== e.search ? a.parse(e.search) : {},
                            t = {
                                content: n.tt_content,
                                content_index: n.tt_content_index,
                                medium: n.tt_medium
                            };
                        if (delete n.tt_content, delete n.tt_content_index, delete n.tt_medium, t.medium || t.content) {
                            var i = "",
                                r = a.stringify(n);
                            r.length > 0 && (i = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return t
                    }, o
                }(r.Component);
                return Object(o.f)(t)
            }
        }
        t.d(n, "a", function() {
            return l
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
    q7Ag: function(e, n, t) {
        "use strict";

        function i(e) {
            return "/" + e + "/dashboard/extensions"
        }

        function a(e, n) {
            return e + "-" + n
        }
        n.d = function(e, n) {
            return "/ext/" + a(e, n)
        }, n.b = function(e, n, t) {
            return i(e) + "/" + a(n, t) + "/configure"
        }, n.c = i, n.e = function(e) {
            return "/" + e + "/dashboard/extensions-discovery"
        }, n.f = function(e) {
            return "/" + e + "/dashboard/extensions-discovery/installed"
        }, n.g = function(e) {
            return "/" + e + "/dashboard/extensions-discovery/whitelisted"
        }, n.a = function(e, n) {
            return "/" + e + "/dashboard/extensions-discovery/" + n
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
    twC3: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            r = t("RH2O"),
            o = t("2KeS"),
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
                    r = e.onConfirm,
                    o = i === d.d.InExtensionPurchases,
                    s = i === d.d.Bits,
                    l = Object(u.d)("Are you sure you want to deactivate?", "ExtensionDeactivationWarning"),
                    c = l;
                return o ? c = Object(u.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning") : s && (c = Object(u.d)("This extension is Bits-enabled. If you deactivate this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
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
                    onClick: r
                }, Object(u.d)("Deactivate", "ExtensionDeactivationWarning"))))
            },
            v = function(e) {
                var n = e.existingExtensionName,
                    t = e.activationSlot,
                    i = e.existingMonetizationType,
                    r = e.closeModal,
                    o = e.onConfirm,
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
                    onClick: r
                }, Object(u.d)("Cancel", "ExtensionReplacementWarning"))), a.createElement(m.v, {
                    onClick: o
                }, Object(u.d)("Replace", "ExtensionReplacementWarning"))))
            };
        v.displayName = "ExtensionReplacementWarning";
        var E = function(e) {
                var n = e.closeModal,
                    t = e.extensionName,
                    i = e.monetizationType,
                    r = e.onConfirm,
                    o = i === d.d.InExtensionPurchases,
                    s = i === d.d.Bits,
                    l = Object(u.d)("Are you sure you want to uninstall?", "ExtensionUninstallationWarning"),
                    c = l;
                return o ? c = Object(u.d)("This extension enables in-extension purchases. If you uninstall this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning") : s && (c = Object(u.d)("This extension is Bits-enabled. If you uninstall this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
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
                    onClick: r
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
        var f = function(e) {
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
        var h = Object(r.b)(null, function(e) {
            return Object(o.b)({
                closeModal: l.c
            }, e)
        })(f);
        t.d(n, !1, function() {
            return f
        }), t.d(n, "a", function() {
            return h
        })
    }
});
//# sourceMappingURL=pages.extension-2b0e5bcfee8f9cb28a7525afdc5d7cd7.js.map