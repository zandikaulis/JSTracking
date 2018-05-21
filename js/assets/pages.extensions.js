webpackJsonp([59], {
    "/4p0": function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionSearchPage_InstallExtension"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 178
            }
        };
        t.loc.source = {
            body: "mutation ExtensionSearchPage_InstallExtension ($input: InstallExtensionInput!) {\ninstallExtension(input: $input) {\ninstalledExtension {\nid\nextension {\nid\nclientID\nversion\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "0894": function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionCategoryPage_InstallExtension"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 180
            }
        };
        t.loc.source = {
            body: "mutation ExtensionCategoryPage_InstallExtension ($input: InstallExtensionInput!) {\ninstallExtension(input: $input) {\ninstalledExtension {\nid\nextension {\nid\nclientID\nversion\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "0QnV": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("GiK3"),
            a = t("CIox"),
            r = t("F8kA"),
            s = t("6sO2"),
            o = t("Tc6d"),
            l = t("TToO"),
            d = t("RH2O"),
            c = t("2KeS"),
            u = t("V5M+"),
            m = t("Aj/L"),
            v = t("9Gfr"),
            p = t("SfDx"),
            g = t("3zLD"),
            E = t("zCIC"),
            k = t("N221"),
            x = t("7vx8"),
            h = t("j7/Y"),
            f = t("oIkB"),
            b = t("w9tK"),
            y = t("UIT8"),
            N = t("l0vj"),
            S = t("G8hb"),
            _ = t("CSlQ"),
            I = t("9+OC"),
            O = t("Odds"),
            R = t("0894"),
            C = t("YeOT"),
            D = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.canLoadMoreExtensions = function() {
                        var e = n.props.extensionCategoryData;
                        return !!(!e.loading && !e.error && e.extensions && e.extensions.pageInfo.hasNextPage)
                    }, n.loadMoreExtensions = function() {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var e, n, t, i, a, r;
                            return l.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return e = this.props, n = e.extensionCategoryData, t = e.isLoggedIn, this.canLoadMoreExtensions() ? (i = n.extensions.edges, a = i[i.length - 1], r = {
                                            afterCursor: a && a.cursor,
                                            isLoggedIn: t
                                        }, [4, n.fetchMore({
                                            query: C,
                                            variables: r,
                                            updateQuery: function(e, n) {
                                                var t = n.fetchMoreResult,
                                                    i = e.extensions ? e.extensions.edges : [],
                                                    a = t.extensions ? t.extensions.edges : [];
                                                return l.__assign({}, t, {
                                                    extensions: l.__assign({}, t.extensions, {
                                                        edges: Object(f.c)(i, a)
                                                    })
                                                })
                                            }
                                        })]) : [3, 2];
                                    case 1:
                                        s.sent(), s.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, n.installExtension = function(e) {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var n, t, i, a, r, s, o, d, c;
                            return l.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (n = this.props, t = n.extensionCategoryData, i = n.installExtension, a = n.isLoggedIn, r = n.showExtensionErrorModal, s = n.showExtensionInstalledModal, !(o = t.currentUser) || !o.id || !o.login) return [2];
                                        l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), [4, i(Object(f.a)({
                                            channelID: o.id,
                                            extensionID: e
                                        }))];
                                    case 2:
                                        return (d = l.sent().data).installExtension && d.installExtension.installedExtension && (c = d.installExtension.installedExtension, Object(f.e)(C, {
                                            isLoggedIn: a
                                        }, function(e) {
                                            return e.currentUser && e.currentUser.installedExtensions && e.currentUser.installedExtensions.push(c), e
                                        }), s({
                                            extensionClientID: c.extension.clientID,
                                            extensionVersion: c.extension.version,
                                            login: o.login
                                        })), [3, 4];
                                    case 3:
                                        return l.sent(), r(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return l.__extends(n, e), n.prototype.componentDidUpdate = function() {
                    this.checkAndReportPageInteractive()
                }, n.prototype.componentDidMount = function() {
                    this.checkAndReportPageInteractive()
                }, n.prototype.render = function() {
                    var e = this.props.extensionCategoryData,
                        n = e.extensions,
                        t = [];
                    if (e.loading)
                        for (var a = 0; a < 6; a++) t.push(i.createElement(O._8, {
                            key: a,
                            padding: 1
                        }, i.createElement(N.a, null)));
                    else n && (t = n.edges.map(this.renderCard, this));
                    return i.createElement(k.b, null, i.createElement(O._8, {
                        padding: {
                            x: 3,
                            top: 4
                        }
                    }, i.createElement(O._8, {
                        padding: {
                            left: 1
                        }
                    }, i.createElement(O.Q, {
                        type: O._49.H3
                    }, "Extensions Category")), i.createElement(O._8, {
                        display: O.R.Flex,
                        flexWrap: O.U.Wrap,
                        padding: {
                            top: 3
                        }
                    }, t, i.createElement(E.a, {
                        pixelThreshold: 200,
                        enabled: this.canLoadMoreExtensions(),
                        loadMore: this.loadMoreExtensions
                    }))))
                }, n.prototype.renderCard = function(e) {
                    var n = e.node;
                    return i.createElement(O._8, {
                        key: n.id,
                        padding: 1
                    }, i.createElement(y.a, {
                        authorName: n.authorName,
                        extensionClientID: n.clientID,
                        extensionID: n.id,
                        extensionName: n.name,
                        extensionVersion: n.version,
                        splashImageURL: n.iconURLs.discoverySplash,
                        iconURL: n.iconURLs.square100,
                        isInstalled: this.isExtensionInstalled(n.id),
                        installExtension: this.installExtension,
                        extensionState: n.state,
                        summary: n.summary,
                        supportedAnchors: Object(S.i)(n.views),
                        supportedPlatforms: Object(S.j)(n.views)
                    }))
                }, n.prototype.isExtensionInstalled = function(e) {
                    var n = this.props.extensionCategoryData.currentUser;
                    return !(!n || !n.installedExtensions) && (n && n.installedExtensions && n.installedExtensions.some(function(n) {
                        return n.extension.id === e
                    }))
                }, n.prototype.checkAndReportPageInteractive = function() {
                    var e = this.props,
                        n = e.extensionCategoryData,
                        t = e.latencyTracking;
                    n.loading || t.reportInteractive()
                }, n
            }(i.Component),
            L = Object(g.compose)(Object(_.d)("ExtensionCategoryPage", {
                destination: b.a.ExtensionsCategory
            }), Object(h.a)({
                location: I.PageviewLocation.ExtensionsCategory
            }), Object(x.a)(C, {
                name: "extensionCategoryData",
                options: function(e) {
                    return {
                        variables: {
                            isLoggedIn: e.isLoggedIn
                        }
                    }
                }
            }), Object(x.a)(R, {
                name: "installExtension"
            }))(D);
        var F = Object(d.b)(function(e) {
                return {
                    isLoggedIn: Object(m.d)(e)
                }
            }, function(e) {
                return Object(c.b)({
                    showExtensionInstalledModal: function(e) {
                        var n = l.__rest(e, []);
                        return Object(u.d)(p.a, n)
                    },
                    showExtensionErrorModal: function() {
                        return Object(u.d)(v.a, {})
                    }
                }, e)
            })(L),
            w = t("twC3"),
            T = t("S/9j"),
            P = t("yWCw"),
            U = t("68hr"),
            j = t("vH/s"),
            A = t("HrG2"),
            M = t("XwK1"),
            B = t("GeUc"),
            V = t("q7Ag"),
            W = t("KqsW"),
            Q = function(e) {
                var n = e.loginName,
                    t = e.extension,
                    a = e.isChannelCheeringEnabled,
                    r = e.isExtensionInstalled,
                    o = e.onUninstall,
                    l = e.onInstall,
                    d = t.clientID,
                    c = t.version;
                if (r) return i.createElement(O._8, {
                    display: O.R.Flex,
                    alignItems: O.c.Center,
                    justifyContent: O._7.Center,
                    flexGrow: 0,
                    flexShrink: 0
                }, i.createElement(O._8, {
                    padding: {
                        right: 1
                    }
                }, i.createElement(O.v, {
                    linkTo: Object(V.b)(n, d, c),
                    type: O.B.Text,
                    size: O.z.Large
                }, Object(s.d)("Configure", "ExtensionPage"))), i.createElement(O.v, {
                    type: O.B.Hollow,
                    onClick: o
                }, Object(s.d)("Uninstall", "ExtensionPage")));
                var u = void 0,
                    m = Object(s.d)("Install", "ExtensionPage");
                if (t.state === S.f.Released && t.isBitsEnabled && !a) {
                    var v = Object(s.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "ExtensionPage");
                    u = i.createElement(O._52, {
                        label: v,
                        direction: O._54.Left
                    }, i.createElement(O.v, {
                        size: O.z.Large,
                        icon: O._25.Plus,
                        disabled: !0
                    }, m))
                } else u = i.createElement(O.v, {
                    size: O.z.Large,
                    icon: O._25.Plus,
                    onClick: l
                }, m);
                return i.createElement(O._8, {
                    display: O.R.Flex,
                    alignItems: O.c.Center,
                    justifyContent: O._7.Center,
                    flexGrow: 0,
                    flexShrink: 0
                }, u)
            };
        Q.displayName = "ExtensionButtons";
        var G = t("BwgW"),
            z = t("nP5L"),
            H = t("VHHT"),
            q = function(e) {
                var n = e.extension,
                    t = Object(S.h)(n),
                    a = Object(S.i)(n.views).map(function(e) {
                        return Object(z.a)(e, !1)
                    }).concat(Object(S.j)(n.views).filter(function(e) {
                        return e !== G.ExtensionPlatform.Web
                    }).map(function(e) {
                        return Object(H.a)(e, !1)
                    }));
                return i.createElement(O._35, {
                    background: O.n.Base,
                    border: !0,
                    padding: 1
                }, i.createElement(O._8, null, i.createElement(O._8, {
                    padding: {
                        bottom: 1
                    }
                }, i.createElement(O.Q, {
                    type: O._49.Strong
                }, Object(s.d)("Details", "ExtensionDetails"))), i.createElement(O.Q, {
                    type: O._49.P,
                    wordBreak: O._61.BreakWord
                }, n.description)), i.createElement(O._35, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, i.createElement(O._8, {
                    padding: {
                        bottom: 1
                    }
                }, i.createElement(O.Q, {
                    type: O._49.Strong
                }, Object(s.d)("Additional Information", "ExtensionDetails"))), i.createElement(O.Q, {
                    type: O._49.P
                }, Object(s.d)("Version: {extensionVersion}", {
                    extensionVersion: n.version
                }, "ExtensionDetails")), i.createElement(O.Q, {
                    type: O._49.P
                }, Object(s.d)("Support: {supportEmail}", {
                    supportEmail: i.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: "mailto:" + n.supportEmail
                    }, n.supportEmail)
                }, "ExtensionDetails")), i.createElement(O.Q, {
                    type: O._49.P
                }, Object(s.d)("{typesCount, plural, one {Type: {types}} other {Types: {types}}}", {
                    types: a.join(", "),
                    typesCount: a.length
                }, "ExtensionDetails")), "" !== n.privacyPolicyURL && i.createElement(O.Q, {
                    type: O._49.P,
                    wordBreak: O._61.BreakWord
                }, Object(s.d)("Privacy Policy: {privacyPolicyURL}", {
                    privacyPolicyURL: i.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: n.privacyPolicyURL
                    }, n.privacyPolicyURL)
                }, "ExtensionDetails")), "" !== n.termsURL && i.createElement(O.Q, {
                    type: O._49.P,
                    wordBreak: O._61.BreakWord
                }, Object(s.d)("User Agreement: {termsOfServiceURL}", {
                    termsOfServiceURL: i.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: n.termsURL
                    }, n.termsURL)
                }, "ExtensionDetails"))), t === S.d.InExtensionPurchases && i.createElement(O._35, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, i.createElement(O._8, {
                    padding: {
                        bottom: 1
                    }
                }, i.createElement(O.Q, {
                    type: O._49.Strong
                }, Object(s.d)("In-Extension Purchases", "ExtensionDetails"))), i.createElement(O.Q, {
                    type: O._49.P
                }, Object(s.d)("This extension enables the sale of digital goods. You may be eligible for a revenue share.", "ExtensionDetails"), i.createElement(O._2, {
                    padding: {
                        left: .5
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://help.twitch.tv/customer/portal/articles/2901058-earning-revenue-from-in-extension-purchases-beta"
                }, Object(s.d)("Learn More.", "ExtensionDetails")))), i.createElement(O.Q, {
                    type: O._49.P
                }, Object(s.d)("For questions regarding your In-Extension Purchase orders, please contact {amazonCustomerService} team.", {
                    amazonCustomerService: i.createElement("a", {
                        href: "https://www.amazon.com/gp/help/customer/contact-us?",
                        target: "_blank",
                        rel: "noopener"
                    }, Object(s.d)("Amazon's Twitch Customer Service", "ExtensionDetails"))
                }, "ExtensionDetailsPurchases"))), t === S.d.Bits && i.createElement(O._35, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, i.createElement(O._8, {
                    display: O.R.Flex,
                    alignItems: O.c.Center,
                    padding: {
                        bottom: 1
                    }
                }, i.createElement(O._24, {
                    asset: O._25.Bits
                }), i.createElement(O._8, {
                    display: O.R.InlineBlock,
                    padding: {
                        left: .5
                    }
                }, i.createElement(O.Q, {
                    type: O._49.Strong
                }, Object(s.d)("In-Extension Bits", "ExtensionDetails")))), i.createElement(O.Q, {
                    type: O._49.P
                }, Object(s.d)("This extension enables the use of Bits. For each eligible use of Bits in this extension, subject to Twitch’s legal terms and policies, the extension developer and the streamer will receive 20% and 80%, respectively, of 1 U.S. cent per Bit. You as a streamer may be eligible for a revenue share if you are a partner or an affiliate.", "ExtensionDetails"), i.createElement(O._8, null, i.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://help.twitch.tv/customer/portal/articles/2927987-earning-revenue-from-in-extension-bits-beta"
                }, Object(s.d)("Learn More.", "ExtensionDetailsBits"))))))
            };
        q.displayName = "ExtensionDetails";
        var K = t("Rb5r"),
            $ = (t("GazO"), function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1,
                        isExtensionInstalled: !1
                    }, n.renderScreenshots = function(e) {
                        return e.screenshotURLs.map(function(e) {
                            return i.createElement(O._8, {
                                className: "extension-page__screenshot",
                                padding: {
                                    right: 1
                                },
                                key: e
                            }, i.createElement(O._6, {
                                onClick: n.onScreenshotClick,
                                "data-full": e
                            }, i.createElement(O.k, {
                                ratio: O.l.Aspect4x3
                            }, i.createElement("img", {
                                src: e
                            }))))
                        })
                    }, n.renderPlaceholders = function() {
                        return i.createElement(O._35, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0,
                            padding: 2
                        }, i.createElement(O._8, {
                            display: O.R.Flex,
                            alignItems: O.c.Center,
                            padding: {
                                y: 1
                            }
                        }, i.createElement(O._8, null, i.createElement(O._14, {
                            width: 60,
                            height: 60
                        })), i.createElement(O._8, {
                            padding: {
                                left: 1
                            }
                        }, i.createElement(O._14, {
                            lineCount: 2,
                            width: 200
                        }))), i.createElement(O.Y, null, i.createElement(O.L, {
                            cols: 7
                        }, i.createElement(O._35, {
                            border: !0,
                            background: O.n.Base,
                            display: O.R.Flex,
                            padding: 1
                        }, i.createElement(O._8, null, i.createElement(O._14, {
                            height: 300
                        })))), i.createElement(O.L, {
                            cols: 5
                        }, i.createElement(O._35, {
                            border: !0,
                            background: O.n.Base,
                            padding: 1
                        }, i.createElement(O._8, null, i.createElement(O._14, {
                            width: 100
                        }), i.createElement(O._8, {
                            padding: {
                                top: 1
                            }
                        }, i.createElement(O._14, {
                            lineCount: 2
                        }))), i.createElement(O._35, {
                            borderTop: !0,
                            padding: {
                                top: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, i.createElement(O._14, {
                            width: 100
                        }), i.createElement(O._8, {
                            padding: {
                                top: 1
                            }
                        }, i.createElement(O._14, {
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
                        return l.__awaiter(n, void 0, void 0, function() {
                            var e, n, t, i, a, r, s, o, d, c;
                            return l.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (e = this.props, n = e.data, t = e.installExtension, i = e.loginName, a = e.showInstalledModal, r = e.showErrorModal, !(n && n.extension && n.currentUser)) return [3, 4];
                                        s = n.extension, u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 3, , 4]), [4, t(l.__assign({}, Object(f.a)({
                                            extensionID: s.id,
                                            channelID: n.currentUser.id
                                        })))];
                                    case 2:
                                        return (o = u.sent()).data.installExtension && o.data.installExtension.installedExtension && (d = o.data.installExtension.installedExtension, c = function(e) {
                                            return e.currentUser && e.currentUser.installedExtensions.push({
                                                id: d.id,
                                                extension: {
                                                    id: d.extension.id
                                                }
                                            }), e
                                        }, Object(f.e)(K, l.__assign({}, Y(this.props)), c), a({
                                            extensionClientID: d.extension.clientID,
                                            extensionVersion: d.extension.version,
                                            login: i
                                        })), [3, 4];
                                    case 3:
                                        return u.sent(), r(), [3, 4];
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
                                    destructionType: S.c.Uninstall,
                                    extensionName: t.name,
                                    monetizationType: Object(S.h)(t),
                                    onConfirm: function() {
                                        return n.uninstallExtension(i.id)
                                    }
                                })
                            }
                        }
                    }, n.uninstallExtension = function(e) {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var n, t, i, a;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        n = this.props.showErrorModal, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.uninstallExtension(l.__assign({}, Object(f.a)({
                                            extensionInstallationID: e
                                        })))];
                                    case 2:
                                        return (t = r.sent().data).uninstallExtension && t.uninstallExtension.id && (i = t.uninstallExtension.id, a = function(e) {
                                            return e.currentUser && (e.currentUser.installedExtensions = e.currentUser.installedExtensions.filter(function(e) {
                                                return e.id !== i
                                            })), e
                                        }, Object(f.e)(K, l.__assign({}, Y(this.props)), a)), [3, 4];
                                    case 3:
                                        return r.sent(), n(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return l.__extends(n, e), n.prototype.componentDidMount = function() {
                    s.o.setPageTitle(Object(s.d)("Extensions", "ExtensionPageTitle"))
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
                        a = e.loginName;
                    if (!n || n.error) return i.createElement(P.a, {
                        message: Object(s.d)("An error occurred on this page", "ExtensionPage")
                    });
                    var r = i.createElement(A.a, {
                        showDashboardLink: t,
                        dashboardURL: Object(V.c)(a),
                        title: Object(s.d)("Details", "ExtensionPageTitle")
                    });
                    if (n.loading) return i.createElement(O._35, {
                        padding: 4,
                        background: O.n.Alt
                    }, r, this.renderPlaceholders());
                    if (!n.extension) return i.createElement(U.a, null);
                    var o = n.extension,
                        l = !(!n.currentUser || !n.currentUser.cheer);
                    return i.createElement(O._35, {
                        padding: 4,
                        background: O.n.Alt
                    }, r, i.createElement(O._35, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderBottom: !0,
                        padding: 2
                    }, i.createElement(O._8, {
                        display: O.R.Flex,
                        flexWrap: O.U.NoWrap,
                        justifyContent: O._7.Between,
                        flexGrow: 1,
                        padding: {
                            bottom: 1
                        }
                    }, i.createElement(O.C, {
                        row: !0,
                        border: !1
                    }, i.createElement(O.E, {
                        alt: o.name,
                        src: this.state.hasCardImageError ? s.a.defaultAvatarURL : o.iconURL,
                        aspect: O.l.Aspect1x1,
                        size: O.F.Size6,
                        onError: this.onCardImageError
                    }), i.createElement(O.D, null, i.createElement(O._8, {
                        padding: 1
                    }, i.createElement(O.Q, {
                        type: O._49.H4
                    }, o.name), i.createElement(O.Q, {
                        type: O._49.Span,
                        color: O.K.Alt2
                    }, Object(s.d)("Created by {extensionAuthor}", {
                        extensionAuthor: o.authorName
                    }, "ExtensionPage"))))), t && o.self && o.self.canInstall && i.createElement(Q, {
                        loginName: a,
                        extension: o,
                        isExtensionInstalled: this.state.isExtensionInstalled,
                        isChannelCheeringEnabled: l,
                        onInstall: this.onInstallExtension,
                        onUninstall: this.confirmExtensionUninstallation
                    })), i.createElement(O.Y, null, i.createElement(O.L, {
                        cols: 7
                    }, i.createElement(O._35, {
                        background: O.n.Base,
                        border: !0,
                        padding: 1
                    }, i.createElement(W.a, {
                        insetStyle: !0,
                        items: this.renderScreenshots(o)
                    }))), i.createElement(O.L, {
                        cols: 5
                    }, i.createElement(q, {
                        extension: o
                    })))))
                }, n
            }(i.Component));

        function Y(e) {
            var n = e.match,
                t = e.isLoggedIn,
                i = n.params.extensionID.split("-");
            return {
                extensionID: i[0],
                extensionVersion: i[1],
                isLoggedIn: t
            }
        }
        var J = Object(g.compose)(Object(_.d)("ExtensionDetailsPage", {
            destination: b.a.ExtensionDetails
        }), Object(h.a)({
            location: j.PageviewLocation.ExtensionDetails
        }), Object(x.a)(K, {
            options: function(e) {
                return {
                    variables: l.__assign({}, Y(e))
                }
            }
        }), Object(x.a)(M, {
            name: "installExtension"
        }), Object(x.a)(B, {
            name: "uninstallExtension"
        }))($);
        var X = Object(d.b)(function(e) {
                var n = Object(m.d)(e),
                    t = Object(m.c)(e);
                return {
                    isLoggedIn: n,
                    loginName: t && t.login || ""
                }
            }, function(e) {
                return Object(c.b)({
                    showInstalledModal: function(e) {
                        var n = l.__rest(e, []);
                        return Object(u.d)(p.a, n)
                    },
                    showDestructionWarningModal: function(e) {
                        var n = l.__rest(e, []);
                        return Object(u.d)(w.a, n)
                    },
                    showErrorModal: function() {
                        return Object(u.d)(v.a, {})
                    },
                    showImageViewerModal: function(e) {
                        var n = l.__rest(e, []);
                        return Object(u.d)(T.a, n)
                    }
                }, e)
            })(J),
            Z = t("OAwv"),
            ee = t("gAaz"),
            ne = t("/4p0"),
            te = t("oUek"),
            ie = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.canLoadMoreExtensions = function() {
                        var e = t.props.extensionSearchData;
                        return !!(e && !e.loading && !e.error && e.extensions && e.extensions.pageInfo.hasNextPage)
                    }, t.loadMoreExtensions = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, n, t, i, a, r, s;
                            return l.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return e = this.props, n = e.extensionSearchData, t = e.isLoggedIn, i = this.state.searchTerm, this.canLoadMoreExtensions() ? (a = n.extensions.edges, r = a[a.length - 1], s = {
                                            afterCursor: r && r.cursor,
                                            search: i,
                                            isLoggedIn: t
                                        }, [4, n.fetchMore({
                                            query: te,
                                            variables: s,
                                            updateQuery: function(e, n) {
                                                var t = n.fetchMoreResult,
                                                    i = e.extensions ? e.extensions.edges : [],
                                                    a = t.extensions ? t.extensions.edges : [];
                                                return l.__assign({}, t, {
                                                    extensions: l.__assign({}, t.extensions, {
                                                        edges: Object(f.c)(i, a)
                                                    })
                                                })
                                            }
                                        })]) : [3, 2];
                                    case 1:
                                        o.sent(), o.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.installExtension = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var n, t, i, a, r, s, o, d;
                            return l.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (n = this.props, t = n.extensionSearchData, i = n.installExtension, a = n.isLoggedIn, r = n.showExtensionErrorModal, s = n.showExtensionInstalledModal, !(t && t.currentUser && t.currentUser.id && t.currentUser.login)) return [2];
                                        l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), [4, i(Object(f.a)({
                                            channelID: t.currentUser.id,
                                            extensionID: e
                                        }))];
                                    case 2:
                                        return (o = l.sent().data).installExtension && o.installExtension.installedExtension && (d = o.installExtension.installedExtension, Object(f.e)(te, {
                                            isLoggedIn: a,
                                            search: this.state.searchTerm
                                        }, function(e) {
                                            return e.currentUser && e.currentUser.installedExtensions && e.currentUser.installedExtensions.push(d), e
                                        }), s({
                                            extensionClientID: d.extension.clientID,
                                            extensionVersion: d.extension.version,
                                            login: t.currentUser.id
                                        })), [3, 4];
                                    case 3:
                                        return l.sent(), r(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = {
                        searchTerm: ae(n)
                    }, t
                }
                return l.__extends(n, e), n.prototype.componentWillReceiveProps = function(e) {
                    var n = ae(e);
                    n !== this.state.searchTerm && this.setState({
                        searchTerm: n
                    })
                }, n.prototype.componentDidUpdate = function(e, n) {
                    this.checkAndReportPageInteractive();
                    var t = this.props.extensionSearchData;
                    t && n.searchTerm !== this.state.searchTerm && t.refetch({
                        search: this.state.searchTerm,
                        isLoggedIn: this.props.isLoggedIn
                    })
                }, n.prototype.componentDidMount = function() {
                    this.checkAndReportPageInteractive()
                }, n.prototype.render = function() {
                    var e = this.props.extensionSearchData,
                        n = [];
                    if (e && e.loading)
                        for (var t = 0; t < 6; t++) n.push(i.createElement(O._8, {
                            key: t,
                            padding: 1
                        }, i.createElement(N.a, null)));
                    else e && e.extensions && (n = e.extensions.edges.map(this.renderCard, this));
                    return i.createElement(k.b, null, i.createElement(O._8, {
                        padding: {
                            x: 3,
                            top: 4
                        }
                    }, i.createElement(O._8, {
                        padding: {
                            left: 1
                        }
                    }, i.createElement(O.Q, {
                        type: O._49.H3
                    }, Object(s.d)("Extension Search Results", "ExtensionSearchPage")), i.createElement(O._8, {
                        padding: {
                            top: 2
                        }
                    }, i.createElement(ee.a, {
                        initialSearchTerm: this.state.searchTerm
                    }))), i.createElement(O._8, {
                        display: O.R.Flex,
                        flexWrap: O.U.Wrap,
                        padding: {
                            top: 3
                        }
                    }, n, i.createElement(E.a, {
                        key: this.state.searchTerm,
                        pixelThreshold: 200,
                        enabled: this.canLoadMoreExtensions(),
                        loadMore: this.loadMoreExtensions
                    }))))
                }, n.prototype.renderCard = function(e) {
                    var n = e.node;
                    return i.createElement(O._8, {
                        key: n.id,
                        padding: 1
                    }, i.createElement(y.a, {
                        authorName: n.authorName,
                        extensionClientID: n.clientID,
                        extensionID: n.id,
                        extensionName: n.name,
                        extensionVersion: n.version,
                        splashImageURL: n.iconURLs.discoverySplash,
                        iconURL: n.iconURLs.square100,
                        isInstalled: this.isExtensionInstalled(n.id),
                        installExtension: this.installExtension,
                        extensionState: n.state,
                        summary: n.summary,
                        supportedAnchors: Object(S.i)(n.views),
                        supportedPlatforms: Object(S.j)(n.views)
                    }))
                }, n.prototype.isExtensionInstalled = function(e) {
                    var n = this.props.extensionSearchData;
                    if (n && n.currentUser && n.currentUser.installedExtensions) {
                        var t = n.currentUser;
                        return null !== t && null !== t.installedExtensions && t.installedExtensions.some(function(n) {
                            return n.extension.id === e
                        })
                    }
                    return !1
                }, n.prototype.checkAndReportPageInteractive = function() {
                    var e = this.props,
                        n = e.extensionSearchData,
                        t = e.latencyTracking;
                    n && !n.loading && t.reportInteractive()
                }, n
            }(i.Component);

        function ae(e) {
            return Z.parse(e.location.search).q || ""
        }
        var re = Object(g.compose)(Object(_.d)("ExtensionSearchPage", {
            destination: b.a.ExtensionsSearch
        }), Object(h.a)({
            location: I.PageviewLocation.ExtensionsSearch
        }), Object(x.a)(te, {
            name: "extensionSearchData",
            options: function(e) {
                return {
                    variables: {
                        search: ae(e),
                        isLoggedIn: e.isLoggedIn
                    }
                }
            },
            skip: function(e) {
                return "" === ae(e)
            }
        }), Object(x.a)(ne, {
            name: "installExtension"
        }))(ie);
        var se = Object(d.b)(function(e) {
                return {
                    isLoggedIn: Object(m.d)(e)
                }
            }, function(e) {
                return Object(c.b)({
                    showExtensionInstalledModal: function(e) {
                        var n = l.__rest(e, []);
                        return Object(u.d)(p.a, n)
                    },
                    showExtensionErrorModal: function() {
                        return Object(u.d)(v.a, {})
                    }
                }, e)
            })(re),
            oe = function() {
                var e = s.b.get(o.a, !1);
                return i.createElement(r.e, null, e && i.createElement(a.c, {
                    path: "/ext/search",
                    component: se
                }), e && i.createElement(a.c, {
                    path: "/ext/categories/:categoryID",
                    component: F
                }), i.createElement(a.c, {
                    path: "/ext/:extensionID",
                    component: X
                }))
            };
        oe.displayName = "ExtensionsRoot", t.d(n, "ExtensionsRoot", function() {
            return oe
        })
    },
    "5Neo": function(e, n, t) {
        "use strict";
        var i = t("BwgW"),
            a = t("GiK3"),
            r = t("nP5L"),
            s = t("VHHT"),
            o = t("Odds"),
            l = function(e) {
                return e.anchorType ? a.createElement(o._12, {
                    label: Object(r.a)(e.anchorType, !0)
                }) : e.mobile ? a.createElement(o._12, {
                    label: Object(s.a)(i.ExtensionPlatform.Mobile, !0)
                }) : null
            };
        l.displayName = "AnchorPill", t.d(n, "a", function() {
            return l
        })
    },
    "9+OC": function(e, n, t) {
        "use strict";
        t("TToO");
        var i = t("BzvE"),
            a = (t.n(i), t("IWpL"));
        t.o(a, "PageviewLocation") && t.d(n, "PageviewLocation", function() {
            return a.PageviewLocation
        })
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
    Ar47: function(e, n) {},
    G8hb: function(e, n, t) {
        "use strict";
        t.d(n, "d", function() {
            return i
        }), t.d(n, "c", function() {
            return a
        }), t.d(n, "a", function() {
            return r
        }), t.d(n, "f", function() {
            return s
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
        var i, a, r, s, o, l, d = t("BwgW");
        t.n(d);
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
        }(s || (s = {})),
        function(e) {
            e.Component = "COMPONENT", e.Hidden = "HIDDEN", e.Panel = "PANEL", e.VideoOverlay = "VIDEO_OVERLAY", e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
        }(o || (o = {})),
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
            s = function(e) {
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
        s.displayName = "ExtensionPageHeader", t.d(n, "a", function() {
            return s
        })
    },
    KqsW: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return p
        });
        var i, a = t("TToO"),
            r = t("HW6M"),
            s = (t.n(r), t("GiK3")),
            o = (t.n(s), t("6sO2")),
            l = t("CSlQ"),
            d = t("Odds"),
            c = t("M4d4"),
            u = (t.n(c), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(i || (i = {}));
        var m, v = ((m = {})[i.Previous] = d._25.AngleLeft, m[i.Next] = d._25.AngleRight, m),
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
                        var l, c = ((l = {})[i.Previous] = Object(o.d)("previous", "MediaCarouselNavButton"), l[i.Next] = Object(o.d)("next", "MediaCarouselNavButton"), l),
                            u = r("media-carousel__button", {
                                "media-carousel__button--previous": e === i.Previous,
                                "media-carousel__button--next": e === i.Next,
                                "media-carousel__button--disabled": t
                            }, {
                                "media-carousel__button--inset": !0 === n.props.insetStyle
                            });
                        return s.createElement(d._8, {
                            className: u,
                            position: d._15.Relative,
                            display: d.R.Flex,
                            alignItems: d.c.Stretch
                        }, s.createElement(d.w, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: a,
                            disabled: t,
                            ariaLabel: c[e],
                            icon: v[e],
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
                    return s.createElement(d._2, a.__assign({}, this.props, {
                        position: d._15.Relative
                    }), s.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, s.createElement(d._8, {
                        className: "media-carousel__child-container",
                        overflow: d._11.Hidden,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, s.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            marginLeft: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, s.createElement(d._2, {
                        className: "media-carousel__content",
                        display: d.R.Flex,
                        flexWrap: d.U.NoWrap,
                        flexDirection: d.T.Row,
                        alignItems: d.c.Center,
                        "data-js-selector": "carousel-content"
                    }, s.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), s.createElement(d._8, {
                        className: "media-carousel__nav",
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        position: d._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), s.createElement(d._8, {
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
            }(s.Component)
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
            s = t("2KeS"),
            o = t("+8VM"),
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
                    }), a.createElement(o.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, n
            }(a.Component);
        var u = Object(s.d)(Object(r.b)(null, function(e) {
            return Object(s.b)({
                closeModal: l.c
            }, e)
        }))(c)
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
                    linkTo: Object(u.b)(r, t, i),
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
        var g = Object(r.b)(null, function(e) {
            return Object(s.b)({
                closeModal: l.c
            }, e)
        })(p);
        t.d(n, !1, function() {
            return p
        }), t.d(n, "a", function() {
            return g
        })
    },
    Tc6d: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return i
        }), t.d(n, "b", function() {
            return a
        });
        var i = "extensions_discovery_enabled",
            a = 3
    },
    UIT8: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("BwgW"),
            r = t("GiK3"),
            s = t("F8kA"),
            o = t("6sO2"),
            l = t("zGVe"),
            d = t.n(l),
            c = t("5Neo"),
            u = t("G8hb"),
            m = t("ry+I"),
            v = t("Odds"),
            p = (t("Ar47"), function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        imageURL: n.props.splashImageURL || n.props.iconURL || d.a,
                        isInstalling: !1
                    }, n.renderHoverElement = function() {
                        var e = n.state.isInstalling,
                            t = n.props,
                            i = t.extensionClientID,
                            a = t.extensionVersion,
                            l = t.isInstalled,
                            d = t.summary;
                        return r.createElement(v._35, {
                            className: "extension-card__details-preview",
                            background: v.n.Alt2,
                            position: v._15.Absolute,
                            attachRight: !0,
                            attachTop: !0,
                            attachLeft: !0,
                            attachBottom: !0
                        }, r.createElement(v._8, {
                            display: v.R.Flex,
                            flexDirection: v.T.Column,
                            justifyContent: v._7.Between,
                            alignItems: v.c.Center,
                            padding: 4,
                            fullHeight: !0
                        }, r.createElement(v._8, {
                            className: "extension-card__summary",
                            overflow: v._11.Hidden
                        }, r.createElement(v.Q, {
                            type: v._49.P
                        }, d)), r.createElement(v._8, {
                            display: v.R.Flex,
                            flexWrap: v.U.NoWrap,
                            padding: {
                                top: 1
                            }
                        }, r.createElement(s.a, {
                            to: "/ext/" + i + "-" + a
                        }, r.createElement(v.v, {
                            type: v.B.Hollow
                        }, Object(o.d)("Details", "ExtensionCard"))), r.createElement(v._8, {
                            padding: {
                                left: 1
                            }
                        }, l ? r.createElement(v.v, {
                            disabled: !0
                        }, Object(o.d)("Installed", "ExtensionCard")) : r.createElement(v.v, {
                            onClick: n.installExtension,
                            state: e ? v.A.Loading : v.A.Default
                        }, Object(o.d)("Install", "ExtensionCard"))))))
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props,
                            t = e.supportedAnchors,
                            i = e.supportedPlatforms,
                            s = t.map(function(e) {
                                return r.createElement(v._8, {
                                    key: e,
                                    display: v.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, r.createElement(c.a, {
                                    anchorType: e
                                }))
                            });
                        return i.includes(a.ExtensionPlatform.Mobile) && s.push(r.createElement(v._8, {
                            key: "mobile",
                            display: v.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, r.createElement(c.a, {
                            mobile: !0
                        }))), s
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
                            imageURL: d.a
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.state.imageURL,
                        n = this.props,
                        t = n.authorName,
                        i = n.extensionName,
                        a = n.extensionState,
                        s = n.iconURL,
                        o = s && e === s;
                    return r.createElement(v._8, {
                        className: "extension-card"
                    }, r.createElement(v.C, null, r.createElement(v._35, {
                        border: !0,
                        background: v.n.Base,
                        position: v._15.Relative,
                        overflow: v._11.Hidden
                    }, r.createElement(v._35, {
                        className: o ? "extension-card__icon-bg" : "",
                        background: v.n.AccentAlt2
                    }, r.createElement(v.E, {
                        src: e,
                        alt: i,
                        aspect: v.l.Aspect3x2,
                        onError: this.onCardImageError
                    })), o && r.createElement(v._8, {
                        display: v.R.Flex,
                        alignItems: v.c.Center,
                        justifyContent: v._7.Center,
                        position: v._15.Absolute,
                        attachRight: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        attachBottom: !0
                    }, r.createElement(v.N, {
                        className: "extension-card__icon",
                        src: e,
                        alt: i
                    })), this.renderHoverElement()), r.createElement(v._8, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(v.Q, {
                        type: v._49.H6
                    }, i), r.createElement(v.Q, {
                        type: v._49.Span,
                        color: v.K.Alt2,
                        fontSize: v.V.Size7
                    }, t), r.createElement(v._8, {
                        padding: {
                            top: .5
                        }
                    }, this.renderAnchorTypePills(), a !== u.f.RELEASED && r.createElement(m.a, {
                        state: a
                    })))))
                }, n
            }(r.Component));
        t.d(n, "a", function() {
            return p
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
    YeOT: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionCategoryPage"
                },
                variableDefinitions: [{
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
                }, {
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
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "extensionEdge"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
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
                                    value: "login"
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
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "extensionEdge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ExtensionEdge"
                    }
                },
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
            }],
            loc: {
                start: 0,
                end: 573
            }
        };
        t.loc.source = {
            body: "query ExtensionCategoryPage($isLoggedIn: Boolean! $afterCursor: Cursor ) {\nextensions(first: 20 after: $afterCursor state: RELEASED) {\nedges {\n...extensionEdge\n}\npageInfo {\nhasNextPage\nhasPreviousPage\n}\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nlogin\ninstalledExtensions {\nid\nextension {\nid\n}\n}\n}\n}\nfragment extensionEdge on ExtensionEdge {\ncursor\nnode {\nid\nauthorName\nclientID\niconURLs {\ndiscoverySplash\nsquare100\n}\nname\nstate\nsummary\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    gAaz: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            r = t("CIox"),
            s = t("6sO2"),
            o = t("q7Ag"),
            l = t("Odds"),
            d = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        searchTerm: n.props.initialSearchTerm || ""
                    }, n.onSubmit = function(e) {
                        e.preventDefault(), n.state.searchTerm && n.props.history.push(Object(o.g)(n.state.searchTerm))
                    }, n.onSearchInputChange = function(e) {
                        n.setState({
                            searchTerm: e.currentTarget.value
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(l._35, {
                        border: !0,
                        background: l.n.Base,
                        padding: 1
                    }, a.createElement(l.Y, null, a.createElement(l.L, {
                        cols: 8
                    }), a.createElement(l.L, {
                        cols: 4
                    }, a.createElement("form", {
                        onSubmit: this.onSubmit
                    }, a.createElement(l._27, {
                        placeholder: Object(s.d)("Search store", "ExtensionSearchBar"),
                        value: this.state.searchTerm,
                        onChange: this.onSearchInputChange
                    })))))
                }, n
            }(a.Component),
            c = Object(r.f)(d);
        t.d(n, !1, function() {
            return d
        }), t.d(n, "a", function() {
            return c
        })
    },
    l0vj: function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("Odds"),
            r = function() {
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
        r.displayName = "ExtensionCardPlaceholder", t.d(n, "a", function() {
            return r
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
    oUek: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionSearchPage"
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
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "extensionEdge"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
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
                                    value: "login"
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
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "extensionEdge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ExtensionEdge"
                    }
                },
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
            }],
            loc: {
                start: 0,
                end: 602
            }
        };
        t.loc.source = {
            body: "query ExtensionSearchPage($afterCursor: Cursor $search: String $isLoggedIn: Boolean!) {\nextensions(first: 20 after: $afterCursor search: $search state: RELEASED) {\nedges {\n...extensionEdge\n}\npageInfo {\nhasNextPage\nhasPreviousPage\n}\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nlogin\ninstalledExtensions {\nid\nextension {\nid\n}\n}\n}\n}\nfragment extensionEdge on ExtensionEdge {\ncursor\nnode {\nid\nauthorName\nclientID\niconURLs {\ndiscoverySplash\nsquare100\n}\nname\nstate\nsummary\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    q7Ag: function(e, n, t) {
        "use strict";

        function i(e) {
            return "/" + e + "/dashboard/extensions"
        }

        function a(e, n) {
            return n ? e + "-" + n : e
        }
        n.d = function(e, n) {
            return "/ext/" + a(e, n)
        }, n.b = function(e, n, t) {
            return i(e) + "/" + a(n, t) + "/configure"
        }, n.c = i, n.e = function(e) {
            return "/" + e + "/dashboard/extensions-discovery"
        }, n.f = function(e) {
            return "/" + e + "/dashboard/extensions-discovery/installed"
        }, n.h = function(e) {
            return "/" + e + "/dashboard/extensions-discovery/whitelisted"
        }, n.a = function(e) {
            return "/ext/categories/" + e
        }, n.g = function(e) {
            return "/ext/search?q=" + encodeURIComponent(e)
        }
    },
    "ry+I": function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("6sO2"),
            r = t("G8hb"),
            s = t("Odds"),
            o = function(e) {
                var n;
                switch (e.state) {
                    case r.f.InTest:
                        n = Object(a.d)("TESTING", "ExtensionStatusPill");
                        break;
                    case r.f.ReadyForReview:
                        n = Object(a.d)("READY FOR REVIEW", "ExtensionStatusPill");
                        break;
                    case r.f.InReview:
                        n = Object(a.d)("IN REVIEW", "ExtensionStatusPill");
                        break;
                    case r.f.Rejected:
                        n = Object(a.d)("REJECTED", "ExtensionStatusPill");
                        break;
                    case r.f.Approved:
                        n = Object(a.d)("APPROVED", "ExtensionStatusPill");
                        break;
                    case r.f.Deprecated:
                        n = Object(a.d)("DEPRECATED", "ExtensionStatusPill");
                        break;
                    case r.f.PendingAction:
                        n = Object(a.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                        break;
                    case r.f.Uploading:
                        n = Object(a.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                        break;
                    case r.f.AssetsUploaded:
                        n = Object(a.d)("ASSETS UPLOADED", "ExtensionStatusPill");
                        break;
                    default:
                        n = ""
                }
                return i.createElement(s._12, {
                    type: s._13.Brand,
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
            s = t("2KeS"),
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
                    r = e.onConfirm,
                    s = i === c.d.InExtensionPurchases,
                    o = i === c.d.Bits,
                    l = Object(u.d)("Are you sure you want to deactivate?", "ExtensionDeactivationWarning"),
                    d = l;
                return s ? d = Object(u.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning") : o && (d = Object(u.d)("This extension is Bits-enabled. If you deactivate this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
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
                    onClick: r
                }, Object(u.d)("Deactivate", "ExtensionDeactivationWarning"))))
            },
            p = function(e) {
                var n = e.existingExtensionName,
                    t = e.activationSlot,
                    i = e.existingMonetizationType,
                    r = e.closeModal,
                    s = e.onConfirm,
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
                    onClick: r
                }, Object(u.d)("Cancel", "ExtensionReplacementWarning"))), a.createElement(m.v, {
                    onClick: s
                }, Object(u.d)("Replace", "ExtensionReplacementWarning"))))
            };
        p.displayName = "ExtensionReplacementWarning";
        var g = function(e) {
                var n = e.closeModal,
                    t = e.extensionName,
                    i = e.monetizationType,
                    r = e.onConfirm,
                    s = i === c.d.InExtensionPurchases,
                    o = i === c.d.Bits,
                    l = Object(u.d)("Are you sure you want to uninstall?", "ExtensionUninstallationWarning"),
                    d = l;
                return s ? d = Object(u.d)("This extension enables in-extension purchases. If you uninstall this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning") : o && (d = Object(u.d)("This extension is Bits-enabled. If you uninstall this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
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
                    onClick: r
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
                        return a.createElement(g, {
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
        var k = function(e) {
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
        var x = Object(r.b)(null, function(e) {
            return Object(s.b)({
                closeModal: l.c
            }, e)
        })(k);
        t.d(n, !1, function() {
            return k
        }), t.d(n, "a", function() {
            return x
        })
    },
    zGVe: function(e, n, t) {
        e.exports = t.p + "assets/discovery-splash-fallback-d5c69de700c33441b513b34421ad3d16.png"
    }
});
//# sourceMappingURL=pages.extensions-69d3610a9ff78dc4033700b2aa798f96.js.map