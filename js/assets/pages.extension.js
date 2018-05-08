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
            l = t("9Gfr"),
            d = t("SfDx"),
            c = t("FF3k"),
            u = t("S/9j"),
            m = t("GiK3"),
            p = t("3zLD"),
            v = t("6sO2"),
            E = t("yWCw"),
            g = t("68hr"),
            f = t("7vx8"),
            k = t("j7/Y"),
            h = t("oIkB"),
            x = t("w9tK"),
            b = t("vH/s"),
            _ = t("HrG2"),
            N = t("G8hb"),
            y = t("XwK1"),
            O = t("GeUc"),
            R = t("q7Ag"),
            S = t("CSlQ"),
            C = t("KqsW"),
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
                    linkTo: Object(R.a)(n, s, l),
                    type: I.B.Text,
                    size: I.z.Large
                }, Object(v.d)("Configure", "ExtensionPage"))), m.createElement(I.v, {
                    type: I.B.Hollow,
                    onClick: r
                }, Object(v.d)("Uninstall", "ExtensionPage")));
                var d = void 0,
                    c = Object(v.d)("Install", "ExtensionPage");
                if (t.state === N.c.Released && t.isBitsEnabled && !i) {
                    var u = Object(v.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "ExtensionPage");
                    d = m.createElement(I._52, {
                        label: u,
                        direction: I._54.Left
                    }, m.createElement(I.v, {
                        size: I.z.Large,
                        icon: I._25.Plus,
                        disabled: !0
                    }, c))
                } else d = m.createElement(I.v, {
                    size: I.z.Large,
                    icon: I._25.Plus,
                    onClick: o
                }, c);
                return m.createElement(I._8, {
                    display: I.R.Flex,
                    alignItems: I.c.Center,
                    justifyContent: I._7.Center,
                    flexGrow: 0,
                    flexShrink: 0
                }, d)
            };
        w.displayName = "ExtensionButtons";
        var D = t("BwgW"),
            L = t("nP5L"),
            P = t("VHHT"),
            F = function(e) {
                var n = e.extension,
                    t = Object(N.e)(n.views).map(function(e) {
                        return Object(L.a)(e, !1)
                    }).concat(Object(N.f)(n.views).filter(function(e) {
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
                }, e.extension.description)), m.createElement(I._35, {
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
                    types: t.join(", "),
                    typesCount: t.length
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
                }, "ExtensionDetails"))), Object(N.g)(n) && m.createElement(I._35, {
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
                }, "ExtensionDetailsPurchases"))), n.isBitsEnabled && m.createElement(I._35, {
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
        F.displayName = "ExtensionDetails";
        var U = t("Rb5r"),
            T = (t("GazO"), function(e) {
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
                            var e, n, t, a, r, o, s, l, d, c;
                            return i.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (e = this.props, n = e.data, t = e.installExtension, a = e.loginName, r = e.showInstalledModal, o = e.showErrorModal, !(n && n.extension && n.currentUser)) return [3, 4];
                                        s = n.extension, u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 3, , 4]), [4, t(i.__assign({}, Object(h.a)({
                                            extensionID: s.id,
                                            channelID: n.currentUser.id
                                        })))];
                                    case 2:
                                        return (l = u.sent()).data.installExtension && l.data.installExtension.installedExtension && (d = l.data.installExtension.installedExtension, c = function(e) {
                                            return e.currentUser && e.currentUser.installedExtensions.push({
                                                id: d.id,
                                                extension: {
                                                    id: d.extension.id
                                                }
                                            }), e
                                        }, Object(h.e)(U, i.__assign({}, j(this.props)), c), r({
                                            extensionClientID: d.extension.clientID,
                                            extensionVersion: d.extension.version,
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
                                n.props.showUninstallModal({
                                    extensionName: t.name,
                                    isExtensionMonetized: Object(N.g)(t),
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
                                        return o.trys.push([1, 3, , 4]), [4, this.props.uninstallExtension(i.__assign({}, Object(h.a)({
                                            extensionInstallationID: e
                                        })))];
                                    case 2:
                                        return (t = o.sent().data).uninstallExtension && t.uninstallExtension.id && (a = t.uninstallExtension.id, r = function(e) {
                                            return e.currentUser && (e.currentUser.installedExtensions = e.currentUser.installedExtensions.filter(function(e) {
                                                return e.id !== a
                                            })), e
                                        }, Object(h.e)(U, i.__assign({}, j(this.props)), r)), [3, 4];
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
                    var a = m.createElement(_.a, {
                        showDashboardLink: t,
                        dashboardURL: Object(R.b)(i),
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
                    }, m.createElement(C.a, {
                        insetStyle: !0,
                        items: this.renderScreenshots(r)
                    }))), m.createElement(I.L, {
                        cols: 5
                    }, m.createElement(F, {
                        extension: r
                    })))))
                }, n
            }(m.Component));

        function j(e) {
            var n = e.match,
                t = e.isLoggedIn,
                i = n.params.extensionID.split("-");
            return {
                extensionID: i[0],
                extensionVersion: i[1],
                isLoggedIn: t
            }
        }
        var A = Object(p.compose)(Object(S.d)("ExtensionDetailsPage", {
            destination: x.a.ExtensionDetails
        }), Object(k.a)({
            location: b.PageviewLocation.ExtensionDetails
        }), Object(f.a)(U, {
            options: function(e) {
                return {
                    variables: i.__assign({}, j(e))
                }
            }
        }), Object(f.a)(y, {
            name: "installExtension"
        }), Object(f.a)(O, {
            name: "uninstallExtension"
        }))(T);
        var M = Object(a.b)(function(e) {
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
                showUninstallModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(o.d)(c.a, n)
                },
                showErrorModal: function() {
                    return Object(o.d)(l.a, {})
                },
                showImageViewerModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(o.d)(u.a, n)
                }
            }, e)
        })(A);
        t.d(n, "ExtensionPage", function() {
            return M
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
            d = function() {
                return a.createElement(l._8, null, a.createElement(l.Q, null, Object(s.d)("There was an error. Please try again later.", "ExtensionErrorModal")))
            };
        d.displayName = "ExtensionErrorModalPresentation";
        var c = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(o.a, null, a.createElement(d, null), a.createElement(r.a, {
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
    FF3k: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            r = t("RH2O"),
            o = t("2KeS"),
            s = t("+8VM"),
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
        var p = function(e) {
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
            var n = [s.ExtensionPlatform.Web];
            e.mobile && e.mobile.viewerURL && n.push(s.ExtensionPlatform.Mobile);
            return n
        }, n.d = function(e) {
            return e.extension.id + ":" + e.extension.version
        }, n.h = function(e) {
            if (e.requiredActions) return e.requiredActions.some(function(e) {
                var n = e.type;
                return n === o.RequiresConfiguration
            });
            return !1
        };
        var i, a, r, o, s = t("BwgW");
        t.n(s);
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
        }(o || (o = {}))
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
            d = t("Odds"),
            c = t("M4d4"),
            u = (t.n(c), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(i || (i = {}));
        var m, p = ((m = {})[i.Previous] = d._25.AngleLeft, m[i.Next] = d._25.AngleRight, m),
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
                        var l, c = ((l = {})[i.Previous] = Object(s.d)("previous", "MediaCarouselNavButton"), l[i.Next] = Object(s.d)("next", "MediaCarouselNavButton"), l),
                            u = r("media-carousel__button", {
                                "media-carousel__button--previous": e === i.Previous,
                                "media-carousel__button--next": e === i.Next,
                                "media-carousel__button--disabled": t
                            }, {
                                "media-carousel__button--inset": !0 === n.props.insetStyle
                            });
                        return o.createElement(d._8, {
                            className: u,
                            position: d._15.Relative,
                            display: d.R.Flex,
                            alignItems: d.c.Stretch
                        }, o.createElement(d.w, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: a,
                            disabled: t,
                            ariaLabel: c[e],
                            icon: p[e],
                            size: d.x.Large
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
                    return o.createElement(d._2, a.__assign({}, this.props, {
                        position: d._15.Relative
                    }), o.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, o.createElement(d._8, {
                        className: "media-carousel__child-container",
                        overflow: d._11.Hidden,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, o.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            marginLeft: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, o.createElement(d._2, {
                        className: "media-carousel__content",
                        display: d.R.Flex,
                        flexWrap: d.U.NoWrap,
                        flexDirection: d.T.Row,
                        alignItems: d.c.Center,
                        "data-js-selector": "carousel-content"
                    }, o.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), o.createElement(d._8, {
                        className: "media-carousel__nav",
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        position: d._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(d._8, {
                        className: "media-carousel__nav",
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        position: d._15.Absolute,
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
            d = t("Odds"),
            c = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(d._35, {
                        padding: {
                            x: 2,
                            y: 3
                        },
                        background: d.n.Base
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
        }))(c)
    },
    SfDx: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            r = t("RH2O"),
            o = t("2KeS"),
            s = t("+8VM"),
            l = t("V5M+"),
            d = t("sfWM"),
            c = t("6sO2"),
            u = t("q7Ag"),
            m = t("Odds"),
            p = function(e) {
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
        p.displayName = "ExtensionInstalledModalPresentation";
        var v = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return a.createElement(d.a, null, a.createElement(p, {
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
                                    d = r.content_index;
                                s.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: d,
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
        n.c = function(e, n) {
            return "/ext/" + a(e, n)
        }, n.a = function(e, n, t) {
            return i(e) + "/" + a(n, t) + "/configure"
        }, n.b = i, n.d = function(e) {
            return "/" + e + "/dashboard/extensions-discovery"
        }, n.e = function(e) {
            return "/" + e + "/dashboard/extensions-discovery/installed"
        }, n.f = function(e) {
            return "/" + e + "/dashboard/extensions-discovery/whitelisted"
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
    }
});
//# sourceMappingURL=pages.extension-5d4875e69bd85c3dd3f519a08a2815b5.js.map