webpackJsonp([118], {
    bcqU: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("RH2O"),
            i = t("TToO"),
            r = t("BwgW"),
            o = t("GiK3"),
            s = t("3zLD"),
            l = t("CIox"),
            d = t("6sO2"),
            c = t("N221"),
            u = t("7vx8"),
            m = t("j7/Y"),
            p = t("w9tK"),
            h = t("vH/s"),
            g = t("zezF"),
            f = t("HrG2"),
            E = t("q7Ag"),
            v = t("CSlQ"),
            x = t("Odds"),
            C = t("yjkL"),
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
                return i.__extends(n, e), n.prototype.componentDidMount = function() {
                    d.o.setPageTitle(this.getFormattedPageTitle())
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
                        i = e.currentUser && e.currentUser.login ? e.currentUser.login : "",
                        s = null;
                    if (n) s = this.renderPlaceholders();
                    else {
                        if (!this.state.installation) return this.renderRedirect(i);
                        if (t !== a) return this.renderRedirect(i);
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
                            src: this.state.hasCardImageError ? d.a.defaultAvatarURL : u.iconUrl,
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
                        }, Object(d.d)("Created by {extensionAuthor}", {
                            extensionAuthor: u.authorName
                        }, "ExtensionConfigureComponent")))))), o.createElement(x._8, null, o.createElement(g.a, {
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
                    var p = o.createElement(f.a, {
                        showDashboardLink: !0,
                        dashboardURL: Object(E.b)(this.props.match.params.channelName),
                        title: Object(d.d)("Configure", "ExtensionConfigureComponent")
                    });
                    return o.createElement(c.b, null, o.createElement(x._8, {
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
                    return Object(d.d)("Extensions", "ExtensionConfigureComponent")
                }, n.prototype.renderRedirect = function(e) {
                    return o.createElement(l.b, {
                        to: Object(E.b)(e)
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
            k = Object(s.compose)(Object(v.d)("ExtensionConfigurePage", {
                destination: p.a.ChannelDashboardExtensionsConfigure
            }), Object(m.a)({
                location: h.PageviewLocation.DashboardExtensionsConfigure
            }), Object(u.a)(C, {
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

        function y(e) {
            return {
                languageCode: e.session.languageCode,
                locale: e.session.locale
            }
        }
        var N = Object(a.b)(y)(k);
        t.d(n, "mapStateToProps", function() {
            return y
        }), t.d(n, "ExtensionConfigurePage", function() {
            return N
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
//# sourceMappingURL=pages.extension-configure-10c7140d4038f00eb34da86db885b97e.js.map