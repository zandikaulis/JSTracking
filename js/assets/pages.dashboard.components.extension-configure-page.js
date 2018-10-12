(window.webpackJsonp = window.webpackJsonp || []).push([
    [138], {
        Pz3T: function(e, n) {
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
                                value: "channelLogin"
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
                                        value: "channelLogin"
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
                    end: 117
                }
            };
            t.loc.source = {
                body: "query ExtensionConfigPage_User($channelLogin: String!) {\ncurrentUser {\nid\nlogin\n}\nuser(login: $channelLogin) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        t1ne: function(e, n, t) {
            "use strict";
            t.r(n);
            var i = t("/MKj"),
                a = t("kRBY"),
                o = t("mrSG"),
                r = t("1hWM"),
                s = t("q1tI"),
                l = t("oJmH"),
                c = t("mLw1"),
                d = t("/7QA"),
                u = t("4VQm"),
                m = t("yR8l"),
                p = t("V+GM"),
                g = t("NvVO"),
                h = t("2xye"),
                f = t("5zC2"),
                E = t("1IJ0"),
                x = t("22qk"),
                v = t("GnwI"),
                b = t("Ue10"),
                C = t("Pz3T"),
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
                    return o.__extends(n, e), n.prototype.componentDidMount = function() {
                        d.o.setPageTitle(this.getFormattedPageTitle())
                    }, n.prototype.componentDidUpdate = function() {
                        this.isLoading() || this.props.latencyTracking.reportInteractive()
                    }, n.prototype.componentWillMount = function() {
                        var e = this.props.extensionsForChannel;
                        e && !e.loading && e.installedExtensions && this.setState({
                            installation: this.findExtensionFromInstallations(e.installedExtensions)
                        })
                    }, n.prototype.componentWillReceiveProps = function(e) {
                        !this.state.installation && e.extensionsForChannel && !e.extensionsForChannel.loading && e.extensionsForChannel.installedExtensions && this.setState({
                            installation: this.findExtensionFromInstallations(e.extensionsForChannel.installedExtensions)
                        })
                    }, n.prototype.render = function() {
                        var e = this.props,
                            n = e.data,
                            t = e.languageCode,
                            i = e.locale,
                            a = e.match,
                            o = this.isLoading(),
                            l = n.user && n.user.id ? n.user.id : "",
                            c = n.currentUser && n.currentUser.id ? n.currentUser.id : "",
                            m = n.currentUser && n.currentUser.login ? n.currentUser.login : "",
                            p = null;
                        if (o) p = this.renderPlaceholders();
                        else {
                            if (!this.state.installation) return this.renderRedirect(m);
                            if (l !== c) return this.renderRedirect(m);
                            var g = this.state.installation,
                                h = g.extension;
                            p = s.createElement(b.Va, {
                                fullWidth: !0
                            }, s.createElement(b.Va, {
                                padding: {
                                    bottom: 1
                                }
                            }, s.createElement(b.G, {
                                row: !0,
                                border: !1
                            }, s.createElement(b.I, {
                                alt: h.name,
                                src: this.state.hasCardImageError ? d.a.defaultAvatarURL : h.iconUrl,
                                aspect: b.p.Aspect1x1,
                                size: b.J.Size6,
                                onError: this.onCardImageError
                            }), s.createElement(b.H, null, s.createElement(b.Va, {
                                padding: 1
                            }, s.createElement(b.V, {
                                type: b.Nb.H4
                            }, h.name), s.createElement(b.V, {
                                type: b.Nb.Span,
                                color: b.O.Alt2
                            }, Object(d.d)("Created by {extensionAuthor}", {
                                extensionAuthor: h.authorName
                            }, "ExtensionConfigureComponent")))))), s.createElement(b.Va, null, s.createElement(f.a, {
                                className: "extension-configure-extension-frame",
                                installation: g,
                                extensionMode: r.ExtensionMode.Config,
                                channelID: l,
                                channelLogin: a.params.channelLogin,
                                languageCode: t,
                                locale: i,
                                login: a.params.channelLogin,
                                loginID: l,
                                isPopout: !1
                            })))
                        }
                        var x = s.createElement(E.a, {
                            channelLogin: a.params.channelLogin,
                            showBackLink: !0,
                            title: Object(d.d)("Configure", "ExtensionConfigureComponent")
                        });
                        return s.createElement(u.b, null, s.createElement(b.Va, {
                            padding: 2
                        }, x, s.createElement(b.xb, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0,
                            padding: 2
                        }, p)))
                    }, n.prototype.findExtensionFromInstallations = function(e) {
                        var n = this;
                        return e.find(function(e) {
                            var t = e.extension;
                            return n.props.match.params.extensionID === t.clientId + "-" + t.version
                        })
                    }, n.prototype.getFormattedPageTitle = function() {
                        return Object(d.d)("Extensions", "ExtensionConfigureComponent")
                    }, n.prototype.renderRedirect = function(e) {
                        return s.createElement(c.a, {
                            to: Object(x.c)(e)
                        })
                    }, n.prototype.renderPlaceholders = function() {
                        return s.createElement(b.Va, {
                            fullWidth: !0
                        }, s.createElement(b.Va, {
                            display: b.W.Flex,
                            alignItems: b.f.Center,
                            padding: {
                                y: 1
                            }
                        }, s.createElement(b.Va, null, s.createElement(b.cb, {
                            width: 60,
                            height: 60
                        })), s.createElement(b.Va, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(b.cb, {
                            lineCount: 2,
                            width: 200
                        }))))
                    }, n.prototype.isLoading = function() {
                        var e = this.props.data.loading,
                            n = !this.props.extensionsForChannel || !this.props.extensionsForChannel.installedExtensions;
                        return e || n
                    }, n
                }(s.Component),
                y = Object(l.compose)(Object(v.c)("ExtensionConfigurePage", {
                    destination: g.a.ChannelDashboardExtensionsConfigure
                }), Object(p.a)({
                    location: h.PageviewLocation.DashboardExtensionsConfigure
                }), Object(m.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.match.params.channelLogin
                            }
                        }
                    }
                }), Object(f.c)({
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

            function L(e) {
                return {
                    languageCode: Object(a.b)(e),
                    locale: Object(a.d)(e)
                }
            }
            var F = Object(i.connect)(L)(y);
            t.d(n, "mapStateToProps", function() {
                return L
            }), t.d(n, "ExtensionConfigurePage", function() {
                return F
            })
        }
    }
]);