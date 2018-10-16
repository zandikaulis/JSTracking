(window.webpackJsonp = window.webpackJsonp || []).push([
    [142], {
        "3nJb": function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UserRolesQuery"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "includeEditors"
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
                                value: "includeMods"
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
                                value: "includeVIPs"
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
                                value: "modsCursor"
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
                                value: "vipsCursor"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "editors"
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
                                                    value: "includeEditors"
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
                                                        value: "grantedAt"
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
                                                                value: "displayName"
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
                                                                value: "profileImageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "28"
                                                                }
                                                            }],
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
                                        value: "mods"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "100"
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
                                                value: "modsCursor"
                                            }
                                        }
                                    }],
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
                                                    value: "includeMods"
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
                                                        value: "grantedAt"
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
                                                                value: "displayName"
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
                                                                value: "profileImageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "28"
                                                                }
                                                            }],
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
                                        value: "vips"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "100"
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
                                                value: "vipsCursor"
                                            }
                                        }
                                    }],
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
                                                    value: "includeVIPs"
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
                                                        value: "grantedAt"
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
                                                                value: "displayName"
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
                                                                value: "profileImageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "28"
                                                                }
                                                            }],
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
                }],
                loc: {
                    start: 0,
                    end: 623
                }
            };
            t.loc.source = {
                body: "query UserRolesQuery ($channelLogin: String! $includeEditors: Boolean! $includeMods: Boolean! $includeVIPs: Boolean! $modsCursor: Cursor $vipsCursor: Cursor) {\nuser(login: $channelLogin) {\nid\neditors @include(if: $includeEditors) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 28)\n}\n}\n}\nmods(first: 100 after: $modsCursor) @include(if: $includeMods) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 28)\n}\n}\n}\nvips(first: 100 after: $vipsCursor) @include(if: $includeVIPs) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 28)\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        gD7V: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SearchUserQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "login"
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
                                        value: "login"
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
                    end: 69
                }
            };
            t.loc.source = {
                body: "query SearchUserQuery($login: String!) {\nuser(login: $login) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        qcBk: function(e, n, t) {
            "use strict";
            t.r(n);
            var i, a, r = t("mrSG"),
                s = t("q1tI"),
                l = t("fvjX"),
                o = t("V+GM"),
                d = t("NvVO"),
                u = t("2xye"),
                c = t("GnwI"),
                m = t("1rIY");
            ! function(e) {
                e[e.ADD_USER = 0] = "ADD_USER", e[e.DEFAULT = 1] = "DEFAULT", e[e.LOADING = 2] = "LOADING", e[e.NO_USERS = 3] = "NO_USERS"
            }(a || (a = {}));
            var p = (i = Object(m.a)("RolesPageViewContext", {
                    setView: function() {
                        return null
                    },
                    view: a.LOADING
                })).InnerProvider,
                h = i.withContext,
                v = function(e) {
                    return e
                };

            function f(e) {
                return h(v)(e)
            }
            var k, g, C = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.setView = function(e) {
                            t.setState({
                                view: e
                            })
                        }, t.state = {
                            setView: t.setView,
                            view: a.LOADING
                        }, t
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(p, {
                            value: this.state
                        }, this.props.children)
                    }, n
                }(s.Component),
                y = t("NAv5"),
                N = t("yR8l"),
                E = t("Ue10"),
                S = t("3nJb");
            ! function(e) {
                e.IS_EDITOR = "isEditor", e.IS_MOD = "isMod", e.IS_VIP = "isVIP"
            }(g || (g = {}));
            var b = (k = Object(m.a)("UserRolesContext", {
                    userCache: {}
                })).InnerProvider,
                I = k.withContext,
                O = function(e) {
                    return e
                };
            var _, U = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            userCache: {}
                        }, n.setUserCache = function(e, n, t) {
                            for (var i, a, r = 0, s = n; r < s.length; r++) {
                                var l = s[r],
                                    o = l.node;
                                if (o) {
                                    var d = o.id;
                                    if (d) {
                                        a = l.cursor;
                                        var u = l.grantedAt,
                                            c = e[d] || ((i = {
                                                displayName: o.displayName,
                                                channelLogin: o.login,
                                                lastModified: u,
                                                profileImageURL: o.profileImageURL
                                            })[g.IS_EDITOR] = !1, i[g.IS_MOD] = !1, i[g.IS_VIP] = !1, i);
                                        c[t] = !0, c.lastModified = Object(y.max)(c.lastModified, new Date(u)), e[d] = c
                                    }
                                }
                            }
                            return {
                                cursor: a,
                                userCache: e
                            }
                        }, n.fetchMore = function(e, t) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return r.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, this.props.data.fetchMore({
                                                query: S,
                                                variables: {
                                                    channelLogin: this.props.channelLogin,
                                                    includeEditors: !1,
                                                    includeMods: !!e,
                                                    includeVIPs: !!t,
                                                    modsCursor: e,
                                                    vipsCursor: t
                                                },
                                                updateQuery: function(e, n) {
                                                    if (!n.fetchMoreResult.user) return e;
                                                    var t = n.fetchMoreResult.user,
                                                        i = t.mods,
                                                        a = t.vips;
                                                    return {
                                                        user: r.__assign({}, n.fetchMoreResult.user, {
                                                            mods: i || null,
                                                            vips: a || null
                                                        })
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n = i.sent(), this.updateUserCache(n.data), [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.updateUserCache()
                    }, n.prototype.componentDidUpdate = function(e) {
                        e.channelLogin !== this.props.channelLogin && this.setState({
                            userCache: {}
                        }), e.data.loading && this.updateUserCache()
                    }, n.prototype.render = function() {
                        return this.props.view === a.LOADING ? s.createElement(E.Ya, {
                            fillContent: !0
                        }) : s.createElement(b, {
                            value: this.state
                        }, this.props.children)
                    }, n.prototype.updateUserCache = function(e) {
                        var n = this;
                        void 0 === e && (e = this.props.data);
                        var t, i, s = e.error,
                            l = e.loading,
                            o = e.user;
                        s || l || !o || this.props.view !== a.LOADING || this.setState(function(e) {
                            var a = r.__assign({}, e);
                            if (a.userCache || (a.userCache = {}), o.editors && o.editors.edges) {
                                var s = n.setUserCache(a.userCache, o.editors.edges, g.IS_EDITOR).userCache;
                                a.userCache = r.__assign({}, a.userCache, s)
                            }
                            if (o.mods && o.mods.edges) {
                                var l = n.setUserCache(a.userCache, o.mods.edges, g.IS_MOD),
                                    d = l.cursor;
                                s = l.userCache;
                                t = d, a.userCache = r.__assign({}, a.userCache, s)
                            }
                            if (o.vips && o.vips.edges) {
                                var u = n.setUserCache(a.userCache, o.vips.edges, g.IS_VIP);
                                d = u.cursor, s = u.userCache;
                                i = d, a.userCache = r.__assign({}, a.userCache, s)
                            }
                            var c = o.id;
                            return c && a.userCache && a.userCache[c] && delete a.userCache[c], a
                        }, function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t || i ? [4, this.fetchMore(t, i)] : [3, 2];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            this.props.latencyTracking.reportInteractive(), this.props.setView(0 === Object.keys(this.state.userCache).length ? a.NO_USERS : a.DEFAULT), e.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, n
                }(s.Component),
                D = Object(l.compose)(f, Object(c.b)("WithUserRolesContext"), Object(N.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                includeEditors: !0,
                                includeMods: !0,
                                includeVIPs: !0
                            }
                        }
                    }
                }))(U),
                A = t("IFXb"),
                F = t("9C/b"),
                R = t("/7QA"),
                V = (t("vsHg"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex,
                            fullWidth: !0,
                            justifyContent: E.Va.Center,
                            position: E.eb.Absolute,
                            zIndex: E.ac.Above
                        }, s.createElement(E.i, {
                            type: E.n.SlideInBottom,
                            duration: E.k.Medium,
                            enabled: !0,
                            timing: E.m.EaseInOut
                        }, s.createElement(E.xb, {
                            background: E.r.Base,
                            borderBottom: !0,
                            borderRadius: E.x.Medium,
                            className: "dashboard-centered-banner",
                            display: E.X.Flex,
                            elevation: 3,
                            flexDirection: E.Z.Column,
                            padding: 2
                        }, s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex,
                            justifyContent: E.Va.Start,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(E.Wa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(E.q, {
                            alt: Object(R.d)("VoHiYo", "CenteredBanner"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                            size: 30
                        })), s.createElement(E.W, {
                            bold: !0,
                            type: E.Nb.H5
                        }, this.props.title)), s.createElement(E.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(E.W, {
                            fontSize: E.Ba.Size5
                        }, this.props.body)), this.props.children)))
                    }, n
                }(s.Component));
            ! function(e) {
                e.ADD_A_ROLE = "no-users-banner-add-a-role", e.LEARN_MORE = "no-users-banner-learn-more"
            }(_ || (_ = {}));
            var w, L = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleAddARoleClick = function() {
                            n.props.setView(a.DEFAULT)
                        }, n.handleLearnMoreClick = function() {
                            n.props.history.push("https://help.twitch.tv/customer/en/portal/articles/659115-twitch-chat-badges-guide")
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(V, {
                            body: Object(R.d)("Manage the permissions users have for your community. Start by adding your first role.", "NoUsersBanner"),
                            title: Object(R.d)("Welcome to Roles", "NoUsersBanner")
                        }, s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex,
                            justifyContent: E.Va.Start
                        }, s.createElement(E.Wa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(E.z, {
                            "data-test-selector": _.ADD_A_ROLE,
                            onClick: this.handleAddARoleClick
                        }, Object(R.d)("Add a Role", "NoUsersBanner"))), s.createElement(E.z, {
                            "data-test-selector": _.LEARN_MORE,
                            onClick: this.handleLearnMoreClick,
                            type: E.F.Text
                        }, Object(R.d)("Learn More", "NoUsersBanner"))))
                    }, n
                }(s.Component),
                x = Object(l.compose)(f, F.a)(L),
                M = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return ""
                    }, n
                }(s.Component),
                j = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.props.user;
                        return s.createElement(E.Wa, null, e[g.IS_EDITOR] && s.createElement(M, null), e[g.IS_MOD] && s.createElement(M, null), e[g.IS_VIP] && s.createElement(M, null), s.createElement(E.A, {
                            icon: E.ob.Plus,
                            size: E.B.Small
                        }))
                    }, n
                }(s.Component),
                B = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(E.xb, {
                            alignItems: E.f.Center,
                            background: E.r.Base,
                            borderBottom: !0,
                            borderRadius: E.x.Large,
                            display: E.X.Flex,
                            fullWidth: !0,
                            padding: 1
                        }, this.props.children)
                    }, n
                }(s.Component),
                T = t("u5aL"),
                P = t("f00E"),
                W = t("H/lO"),
                X = t("NZDK"),
                z = t("8/mp"),
                $ = (t("sZ5a"), "data-component-type"),
                q = "roles-page-search-user-option",
                G = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            focused: !1,
                            hovered: !1
                        }, n.handleClick = function() {
                            n.props.onClick(n.props.user)
                        }, n.handleBlur = function(e) {
                            e.persist(), n.setState({
                                focused: !1
                            }, function() {
                                n.props.onBlur(e.relatedTarget)
                            })
                        }, n.handleFocus = function() {
                            n.setState({
                                focused: !0
                            })
                        }, n.handleMouseOver = function() {
                            n.setState({
                                hovered: !0
                            })
                        }, n.handleMouseOut = function() {
                            n.state.hovered && n.setState({
                                hovered: !1
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e, n, t = this.props.user;
                        return s.createElement("div", r.__assign({
                            className: "roles-page-search-user-option",
                            onBlur: this.handleBlur,
                            onFocus: this.handleFocus,
                            onMouseOver: this.handleMouseOver,
                            onMouseOut: this.handleMouseOut,
                            tabIndex: 0
                        }, ((e = {})[$] = [q], e)), s.createElement(E.Ta, r.__assign({
                            hover: this.state.hovered,
                            onClick: this.handleClick,
                            selected: this.state.focused,
                            tabIndex: -1,
                            type: E.Ua.Base
                        }, ((n = {})[$] = [q], n)), s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex,
                            justifyContent: E.Va.Start,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(E.Wa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(E.q, {
                            alt: Object(R.d)("Avatar", "SearchUsersOption"),
                            src: t.profile_image,
                            size: 30
                        })), t.name)))
                    }, n
                }(s.Component),
                Q = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this,
                            n = this.props.users;
                        return s.createElement(E.u, {
                            noTail: !0,
                            offsetY: "-0.5px",
                            show: !!n && this.props.show
                        }, s.createElement(z.b, null, s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex,
                            flexDirection: E.Z.Column,
                            justifyContent: E.Va.Center
                        }, n && n.length > 0 ? n.map(function(n, t) {
                            return s.createElement(G, {
                                key: t,
                                onBlur: e.props.onOptionBlur,
                                onClick: e.props.onOptionClick,
                                user: n
                            })
                        }) : s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex,
                            flexDirection: E.Z.Column,
                            justifyContent: E.Va.Center,
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, s.createElement(E.nb, {
                            asset: E.ob.SearchNoResults
                        }), s.createElement(E.W, null, Object(R.d)("No users found", "SearchUsersDropdown"))))))
                    }, n
                }(s.Component),
                H = t("gD7V"),
                Z = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            defaultSelectedUserName: "",
                            showDropdown: !1,
                            searchedUsers: null
                        }, n.searchClient = new X.a({
                            appId: R.a.algoliaApplicationID,
                            apiKey: R.a.algoliaAPIKey,
                            apolloClient: R.p.apollo.client,
                            logger: R.k,
                            config: R.a,
                            stats: R.p.stats
                        }), n.filterUsersResults = function(e) {
                            var t = n.props.data.user,
                                i = t && t.id,
                                a = n.props.userCache;
                            return e.hits.filter(function(e) {
                                var n = e.objectID;
                                return n && n !== i && !a[n]
                            })
                        }, n.handleChange = function(e) {
                            var t = e.currentTarget.value;
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t ? [4, this.searchClient.queryForType(W.a.Users, t, Object(P.a)(), {
                                                hitsPerPage: 10
                                            })] : [3, 2];
                                        case 1:
                                            return (e = n.sent()) && e.users && this.setState({
                                                searchedUsers: this.filterUsersResults(e.users)
                                            }), [3, 3];
                                        case 2:
                                            this.setState({
                                                searchedUsers: null
                                            }), n.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, n.handleBlur = function(e) {
                            n.setState({
                                showDropdown: e && e.getAttribute($) === q
                            })
                        }, n.handleInputBlur = function(e) {
                            e.persist(), n.handleBlur(e.relatedTarget)
                        }, n.handleOptionBlur = function(e) {
                            n.handleBlur(e)
                        }, n.handleFocus = function() {
                            n.setState({
                                showDropdown: !0
                            })
                        }, n.handleClickOut = function() {
                            n.setState({
                                showDropdown: !1
                            })
                        }, n.handleUserDeselected = function() {
                            n.setState({
                                defaultSelectedUserName: n.props.selectedUser.displayName
                            }, n.props.onUserDeselected)
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        if (this.props.data.loading) return null;
                        var e = this.props.selectedUser,
                            n = s.createElement(E.Wa, {
                                margin: {
                                    right: e ? 1 : .5
                                }
                            }, s.createElement(E.q, {
                                alt: Object(R.d)("Avatar", "SearchUsers"),
                                size: 30,
                                src: e && e.profileImageURL
                            }));
                        return s.createElement(E.Wa, null, e && s.createElement(E.Ta, {
                            onClick: this.handleUserDeselected,
                            type: E.Ua.Overlay
                        }, s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex
                        }, n, s.createElement(E.W, {
                            bold: !0,
                            type: E.Nb.P
                        }, e.displayName))), !e && s.createElement(T.a, {
                            onClickOut: this.handleClickOut
                        }, s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex
                        }, n, s.createElement(E.Wa, {
                            position: E.eb.Relative
                        }, s.createElement(E.Qa, {
                            autoFocus: !0,
                            defaultValue: this.state.defaultSelectedUserName,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            placeholder: Object(R.d)("Search", "SearchUsers"),
                            type: E.Sa.Text
                        }), s.createElement(Q, {
                            onOptionClick: this.props.onUserSelected,
                            onOptionBlur: this.handleOptionBlur,
                            show: this.state.showDropdown,
                            users: this.state.searchedUsers
                        })))))
                    }, n
                }(s.Component),
                J = Object(l.compose)(function(e) {
                    return I(O)(e)
                }, F.a, Object(N.a)(H, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(Z),
                Y = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            selectedUser: null
                        }, n.handleUserSelected = function(e) {
                            var t;
                            n.setState({
                                selectedUser: (t = {
                                    displayName: e.name,
                                    channelLogin: e.login,
                                    profileImageURL: e.profile_image || "",
                                    lastModified: new Date
                                }, t[g.IS_EDITOR] = !1, t[g.IS_MOD] = !1, t[g.IS_VIP] = !1, t)
                            })
                        }, n.handleUserDeselected = function() {
                            n.setState({
                                selectedUser: null
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.state.selectedUser;
                        return s.createElement(E.Ia, null, s.createElement(B, null, s.createElement(E.P, {
                            cols: 3
                        }, s.createElement(J, {
                            onUserDeselected: this.handleUserDeselected,
                            onUserSelected: this.handleUserSelected,
                            selectedUser: e
                        })), s.createElement(E.P, {
                            cols: 7
                        }, e && s.createElement(j, {
                            user: e
                        })), s.createElement(E.P, {
                            cols: 2
                        }, s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex,
                            justifyContent: E.Va.End
                        }, s.createElement(E.Wa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(E.z, {
                            onClick: this.props.onCancel,
                            type: E.F.Hollow
                        }, Object(R.d)("Cancel", "AddUserComponent"))), s.createElement(E.z, {
                            onClick: this.props.onSave,
                            type: E.F.Success
                        }, Object(R.d)("Save", "AddUserComponent"))))))
                    }, n
                }(s.Component);
            ! function(e) {
                e[e.ALL_ROLES = 0] = "ALL_ROLES", e[e.EDITOR = 1] = "EDITOR", e[e.MODERATOR = 2] = "MODERATOR", e[e.VIP = 3] = "VIP"
            }(w || (w = {}));
            var K = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex
                        }, s.createElement(E.Wa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(E.W, null, Object(R.d)("Display", "FilterUsersComponent"))), s.createElement(E.tb, null, s.createElement(s.Fragment, null, s.createElement("option", {
                            value: w.ALL_ROLES
                        }, Object(R.d)("All Roles", "FilterUsersComponent")), s.createElement("option", {
                            value: w.MODERATOR
                        }, Object(R.d)("Moderator", "FilterUsersComponent")), s.createElement("option", {
                            value: w.VIP
                        }, Object(R.d)("VIP", "FilterUsersComponent")), s.createElement("option", {
                            value: w.EDITOR
                        }, Object(R.d)("Editor", "FilterUsersComponent")))))
                    }, n
                }(s.Component),
                ee = f(function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleAddUserCancel = function() {
                            n.props.setView(a.DEFAULT)
                        }, n.handleAddUserSave = function() {}, n.handleButtonClick = function() {
                            n.props.setView(a.ADD_USER)
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.props.view === a.ADD_USER;
                        return s.createElement(s.Fragment, null, s.createElement(E.Wa, {
                            alignItems: E.f.Center,
                            display: E.X.Flex,
                            fullWidth: !0,
                            justifyContent: E.Va.Between
                        }, s.createElement(K, null), s.createElement(E.z, {
                            disabled: e,
                            onClick: this.handleButtonClick
                        }, Object(R.d)("Add New", "TopBar"))), s.createElement(E.Wb, {
                            baseFontSize: E.Ba.Size8
                        }, s.createElement("hr", null)), e && s.createElement(Y, {
                            onCancel: this.handleAddUserCancel,
                            onSave: this.handleAddUserSave
                        }))
                    }, n
                }(s.Component)),
                ne = f(function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return this.props.view === a.NO_USERS ? s.createElement(x, null) : s.createElement(A.a, null, s.createElement(ee, null))
                    }, n
                }(s.Component)),
                te = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(1)
                    }, n.prototype.render = function() {
                        return s.createElement(C, null, s.createElement(D, {
                            channelLogin: this.props.match.params.channelLogin
                        }, s.createElement(ne, null)))
                    }, n
                }(s.Component),
                ie = Object(l.compose)(Object(c.b)("RolesPage", {
                    destination: d.a.RolesPage
                }), Object(o.a)({
                    location: u.PageviewLocation.DashboardSettingsRolesPage
                }))(te);
            t.d(n, "RolesPage", function() {
                return ie
            })
        },
        sZ5a: function(e, n, t) {},
        vsHg: function(e, n, t) {}
    }
]);