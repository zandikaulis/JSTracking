webpackJsonp([88], {
    "1ZLG": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r = t("TToO"),
            i = t("GiK3"),
            o = t("CIox"),
            s = t("F8kA"),
            l = t("Odds"),
            c = t("6sO2"),
            d = t("q7Ag");

        function u(e) {
            var n = e.channelName,
                t = e.selectedTab;
            return i.createElement(l._8, {
                display: l.R.InlineBlock,
                padding: {
                    bottom: 2
                }
            }, i.createElement(l._37, null, i.createElement(l._36, {
                linkTo: Object(d.d)(n),
                active: t === a.Store
            }, i.createElement(l._2, {
                padding: {
                    right: 1
                }
            }, i.createElement(l.Q, {
                type: l._49.H4
            }, Object(c.d)("Store", "DiscoveryNavBar")))), i.createElement(l._36, {
                linkTo: Object(d.e)(n),
                active: t === a.MyExtensions
            }, i.createElement(l._2, {
                padding: {
                    x: 1
                }
            }, i.createElement(l.Q, {
                type: l._49.H4
            }, Object(c.d)("My Extensions", "DiscoveryNavBar")))), i.createElement(l._36, {
                linkTo: Object(d.f)(n),
                active: t === a.Whitelisted
            }, i.createElement(l._2, {
                padding: {
                    left: 1
                }
            }, i.createElement(l.Q, {
                type: l._49.H4
            }, Object(c.d)("Whitelisted", "DiscoveryNavBar"))))))
        }! function(e) {
            e[e.Store = 0] = "Store", e[e.MyExtensions = 1] = "MyExtensions", e[e.Whitelisted = 2] = "Whitelisted"
        }(a || (a = {}));
        var m = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(n, e), n.prototype.render = function() {
                    return i.createElement(l.Q, null, "Extension Discovery")
                }, n
            }(i.Component),
            p = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(n, e), n.prototype.render = function() {
                    return i.createElement(l.Q, null, "Extension Management")
                }, n
            }(i.Component),
            h = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.renderExtensionManagementPage = function(e) {
                        var n = e.match;
                        return i.createElement(i.Fragment, null, i.createElement(u, {
                            channelName: n.params.channelName,
                            selectedTab: a.MyExtensions
                        }), i.createElement(p, null))
                    }, n.renderExtensionDiscoveryPage = function(e) {
                        var n = e.match;
                        return i.createElement(i.Fragment, null, i.createElement(u, {
                            channelName: n.params.channelName,
                            selectedTab: a.Store
                        }), i.createElement(m, null))
                    }, n
                }
                return r.__extends(n, e), n.prototype.render = function() {
                    return i.createElement(l._8, {
                        padding: {
                            x: 4,
                            top: 2
                        }
                    }, i.createElement(s.e, null, i.createElement(o.c, {
                        path: "/:channelName/dashboard/extensions-discovery/installed",
                        render: this.renderExtensionManagementPage
                    }), i.createElement(o.c, {
                        path: "/:channelName/dashboard/extensions-discovery",
                        render: this.renderExtensionDiscoveryPage
                    })))
                }, n
            }(i.Component);
        t.d(n, "ExtensionDashboardRoot", function() {
            return h
        })
    },
    bcqU: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("RH2O"),
            r = t("TToO"),
            i = t("BwgW"),
            o = t("GiK3"),
            s = t("3zLD"),
            l = t("CIox"),
            c = t("6sO2"),
            d = t("N221"),
            u = t("7vx8"),
            m = t("j7/Y"),
            p = t("w9tK"),
            h = t("vH/s"),
            g = t("zezF"),
            E = t("HrG2"),
            f = t("q7Ag"),
            v = t("CSlQ"),
            x = t("Odds"),
            y = t("yjkL"),
            b = function(e) {
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
                return r.__extends(n, e), n.prototype.componentDidMount = function() {
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
                        a = e.currentUser && e.currentUser.id ? e.currentUser.id : "",
                        r = e.currentUser && e.currentUser.login ? e.currentUser.login : "",
                        s = null;
                    if (n) s = this.renderPlaceholders();
                    else {
                        if (!this.state.installation) return this.renderRedirect(r);
                        if (t !== a) return this.renderRedirect(r);
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
                        }, "ExtensionConfigureComponent")))))), o.createElement(x._8, null, o.createElement(g.a, {
                            anchor: m.anchor,
                            className: "extension-configure-extension-frame",
                            extension: u,
                            extensionMode: i.ExtensionMode.Config,
                            channelID: t,
                            channelName: this.props.match.params.channelName,
                            languageCode: this.props.languageCode,
                            locale: this.props.locale,
                            login: this.props.match.params.channelName,
                            loginID: t
                        })))
                    }
                    var p = o.createElement(E.a, {
                        showDashboardLink: !0,
                        dashboardURL: Object(f.b)(this.props.match.params.channelName),
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
                    }, p, o.createElement(x._35, {
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
                        to: Object(f.b)(e)
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
            C = Object(s.compose)(Object(v.d)("ExtensionConfigurePage", {
                destination: p.a.ChannelDashboardExtensionsConfigure
            }), Object(m.a)({
                location: h.PageviewLocation.DashboardExtensionsConfigure
            }), Object(u.a)(y, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(g.c)({
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
            }))(b);

        function _(e) {
            return {
                languageCode: e.session.languageCode,
                locale: e.session.locale
            }
        }
        var k = Object(a.b)(_)(C);
        t.d(n, "mapStateToProps", function() {
            return _
        }), t.d(n, "ExtensionConfigurePage", function() {
            return k
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
    }
});
//# sourceMappingURL=pages.extension-configure-0dd64e42612ab4095eb9ea9f8cb59acf.js.map