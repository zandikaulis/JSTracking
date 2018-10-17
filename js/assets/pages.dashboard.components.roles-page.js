(window.webpackJsonp = window.webpackJsonp || []).push([
    [141], {
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
            var k, g, C, y = function(e) {
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
                b = t("NAv5"),
                E = t("/7QA"),
                S = t("ZDlU"),
                N = t("yR8l"),
                O = t("Ue10"),
                I = t("3nJb");
            ! function(e) {
                e[e.ALL_ROLES = 0] = "ALL_ROLES", e[e.EDITOR = 1] = "EDITOR", e[e.MODERATOR = 2] = "MODERATOR", e[e.VIP = 3] = "VIP"
            }(g || (g = {})),
            function(e) {
                e.IS_EDITOR = "isEditor", e.IS_MOD = "isMod", e.IS_VIP = "isVIP"
            }(C || (C = {}));
            var D = (k = Object(m.a)("UserRolesContext", {
                    filterType: g.ALL_ROLES,
                    setFilterType: function() {
                        return null
                    },
                    userCache: {}
                })).InnerProvider,
                _ = k.withContext,
                U = function(e) {
                    return e
                };

            function R(e) {
                return _(U)(e)
            }
            var F, A = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.setUserCache = function(e, n, t) {
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
                                            })[C.IS_EDITOR] = !1, i[C.IS_MOD] = !1, i[C.IS_VIP] = !1, i);
                                        c[t] = !0, c.lastModified = Object(b.max)(c.lastModified, new Date(u)), e[d] = c
                                    }
                                }
                            }
                            return {
                                cursor: a,
                                userCache: e
                            }
                        }, t.fetchMore = function(e, n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, this.props.data.fetchMore({
                                                query: I,
                                                variables: {
                                                    channelLogin: this.props.channelLogin,
                                                    includeEditors: !1,
                                                    includeMods: !!e,
                                                    includeVIPs: !!n,
                                                    modsCursor: e,
                                                    vipsCursor: n
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
                                            return t = i.sent(), this.updateUserCache(t.data), [2]
                                    }
                                })
                            })
                        }, t.setFilterType = function(e) {
                            e !== t.state.filterType && t.setState(function(n) {
                                var t = n.userCache;
                                return {
                                    filterType: e,
                                    userCache: Object.keys(t).reduce(function(e, n) {
                                        var i = t[n];
                                        return (i[C.IS_EDITOR] || i[C.IS_MOD] || i[C.IS_VIP]) && (e[n] = i), e
                                    }, {})
                                }
                            })
                        }, t.state = {
                            filterType: g.ALL_ROLES,
                            setFilterType: t.setFilterType,
                            userCache: {}
                        }, t
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.updateUserCache()
                    }, n.prototype.componentDidUpdate = function(e) {
                        e.channelLogin !== this.props.channelLogin && this.setState({
                            userCache: {}
                        }), e.data.loading && this.updateUserCache()
                    }, n.prototype.render = function() {
                        return this.props.data.error ? s.createElement(S.a, {
                            message: Object(E.d)("Whoops, something went wrong.", "UserRolesContext")
                        }) : this.props.view === a.LOADING ? s.createElement(O.Za, {
                            fillContent: !0
                        }) : s.createElement(D, {
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
                                var s = n.setUserCache(a.userCache, o.editors.edges, C.IS_EDITOR).userCache;
                                a.userCache = r.__assign({}, a.userCache, s)
                            }
                            if (o.mods && o.mods.edges) {
                                var l = n.setUserCache(a.userCache, o.mods.edges, C.IS_MOD),
                                    d = l.cursor;
                                s = l.userCache;
                                t = d, a.userCache = r.__assign({}, a.userCache, s)
                            }
                            if (o.vips && o.vips.edges) {
                                var u = n.setUserCache(a.userCache, o.vips.edges, C.IS_VIP);
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
                w = Object(l.compose)(f, Object(c.b)("WithUserRolesContext"), Object(N.a)(I, {
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
                }))(A),
                L = t("IFXb"),
                T = t("9C/b"),
                V = (t("vsHg"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            fullWidth: !0,
                            justifyContent: O.Wa.Center,
                            position: O.fb.Absolute,
                            zIndex: O.bc.Above
                        }, s.createElement(O.i, {
                            type: O.n.SlideInBottom,
                            duration: O.k.Medium,
                            enabled: !0,
                            timing: O.m.EaseInOut
                        }, s.createElement(O.yb, {
                            background: O.r.Base,
                            borderBottom: !0,
                            borderRadius: O.x.Medium,
                            className: "dashboard-centered-banner",
                            display: O.X.Flex,
                            elevation: 3,
                            flexDirection: O.Aa.Column,
                            padding: 2
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Start,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(O.q, {
                            alt: Object(E.d)("VoHiYo", "CenteredBanner"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                            size: 30
                        })), s.createElement(O.W, {
                            bold: !0,
                            type: O.Ob.H5
                        }, this.props.title)), s.createElement(O.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(O.W, {
                            fontSize: O.Ca.Size5
                        }, this.props.body)), this.props.children)))
                    }, n
                }(s.Component));
            ! function(e) {
                e.ADD_A_ROLE = "no-users-banner-add-a-role", e.LEARN_MORE = "no-users-banner-learn-more"
            }(F || (F = {}));
            var x = function(e) {
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
                            body: Object(E.d)("Manage the permissions users have for your community. Start by adding your first role.", "NoUsersBanner"),
                            title: Object(E.d)("Welcome to Roles", "NoUsersBanner")
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Start
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(O.z, {
                            "data-test-selector": F.ADD_A_ROLE,
                            onClick: this.handleAddARoleClick
                        }, Object(E.d)("Add a Role", "NoUsersBanner"))), s.createElement(O.z, {
                            "data-test-selector": F.LEARN_MORE,
                            onClick: this.handleLearnMoreClick,
                            type: O.F.Text
                        }, Object(E.d)("Learn More", "NoUsersBanner"))))
                    }, n
                }(s.Component),
                M = Object(l.compose)(f, T.a)(x),
                j = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return ""
                    }, n
                }(s.Component),
                X = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.props.user;
                        return s.createElement(O.Xa, null, e[C.IS_EDITOR] && s.createElement(j, null), e[C.IS_MOD] && s.createElement(j, null), e[C.IS_VIP] && s.createElement(j, null), s.createElement(O.A, {
                            icon: O.pb.Plus,
                            size: O.B.Small
                        }))
                    }, n
                }(s.Component),
                B = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(O.yb, {
                            alignItems: O.f.Center,
                            background: O.r.Base,
                            borderBottom: !0,
                            borderRadius: O.x.Large,
                            display: O.X.Flex,
                            fullWidth: !0,
                            padding: 1
                        }, this.props.children)
                    }, n
                }(s.Component),
                P = t("u5aL"),
                W = t("f00E"),
                z = t("H/lO"),
                $ = t("NZDK"),
                q = t("8/mp"),
                G = (t("sZ5a"), "data-component-type"),
                Q = "roles-page-search-user-option",
                H = function(e) {
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
                        }, ((e = {})[G] = [Q], e)), s.createElement(O.Ua, r.__assign({
                            hover: this.state.hovered,
                            onClick: this.handleClick,
                            selected: this.state.focused,
                            tabIndex: -1,
                            type: O.Va.Base
                        }, ((n = {})[G] = [Q], n)), s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Start,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(O.q, {
                            alt: Object(E.d)("Avatar", "SearchUsersOption"),
                            src: t.profile_image,
                            size: 30
                        })), t.name)))
                    }, n
                }(s.Component),
                J = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this,
                            n = this.props.users;
                        return s.createElement(O.u, {
                            noTail: !0,
                            offsetY: "-0.5px",
                            show: !!n && this.props.show
                        }, s.createElement(q.b, null, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            flexDirection: O.Aa.Column,
                            justifyContent: O.Wa.Center
                        }, n && n.length > 0 ? n.map(function(n, t) {
                            return s.createElement(H, {
                                key: t,
                                onBlur: e.props.onOptionBlur,
                                onClick: e.props.onOptionClick,
                                user: n
                            })
                        }) : s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            flexDirection: O.Aa.Column,
                            justifyContent: O.Wa.Center,
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, s.createElement(O.ob, {
                            asset: O.pb.SearchNoResults
                        }), s.createElement(O.W, null, Object(E.d)("No users found", "SearchUsersDropdown"))))))
                    }, n
                }(s.Component),
                Z = t("gD7V"),
                Y = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            defaultSelectedUserName: "",
                            showDropdown: !1,
                            searchedUsers: null
                        }, n.searchClient = new $.a({
                            appId: E.a.algoliaApplicationID,
                            apiKey: E.a.algoliaAPIKey,
                            apolloClient: E.p.apollo.client,
                            logger: E.k,
                            config: E.a,
                            stats: E.p.stats
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
                                            return t ? [4, this.searchClient.queryForType(z.a.Users, t, Object(W.a)(), {
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
                                showDropdown: e && e.getAttribute(G) === Q
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
                            n = s.createElement(O.Xa, {
                                margin: {
                                    right: e ? 1 : .5
                                }
                            }, s.createElement(O.q, {
                                alt: Object(E.d)("Avatar", "SearchUsers"),
                                size: 30,
                                src: e && e.profileImageURL
                            }));
                        return s.createElement(O.Xa, null, e && s.createElement(O.Ua, {
                            onClick: this.handleUserDeselected,
                            type: O.Va.Overlay
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, n, s.createElement(O.W, {
                            bold: !0,
                            type: O.Ob.P
                        }, e.displayName))), !e && s.createElement(P.a, {
                            onClickOut: this.handleClickOut
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, n, s.createElement(O.Xa, {
                            position: O.fb.Relative
                        }, s.createElement(O.Ra, {
                            autoFocus: !0,
                            defaultValue: this.state.defaultSelectedUserName,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            placeholder: Object(E.d)("Search", "SearchUsers"),
                            type: O.Ta.Text
                        }), s.createElement(J, {
                            onOptionClick: this.props.onUserSelected,
                            onOptionBlur: this.handleOptionBlur,
                            show: this.state.showDropdown,
                            users: this.state.searchedUsers
                        })))))
                    }, n
                }(s.Component),
                K = Object(l.compose)(R, T.a, Object(N.a)(Z, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(Y),
                ee = function(e) {
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
                                }, t[C.IS_EDITOR] = !1, t[C.IS_MOD] = !1, t[C.IS_VIP] = !1, t)
                            })
                        }, n.handleUserDeselected = function() {
                            n.setState({
                                selectedUser: null
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.state.selectedUser;
                        return s.createElement(O.Ja, null, s.createElement(O.Xa, {
                            fullWidth: !0
                        }, s.createElement(O.i, {
                            duration: O.k.Medium,
                            enabled: !0,
                            type: O.n.SlideInBottom
                        }, s.createElement(B, null, s.createElement(O.P, {
                            cols: 3
                        }, s.createElement(K, {
                            onUserDeselected: this.handleUserDeselected,
                            onUserSelected: this.handleUserSelected,
                            selectedUser: e
                        })), s.createElement(O.P, {
                            cols: 7
                        }, e && s.createElement(X, {
                            user: e
                        })), s.createElement(O.P, {
                            cols: 2
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.End
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(O.z, {
                            onClick: this.props.onCancel,
                            type: O.F.Hollow
                        }, Object(E.d)("Cancel", "AddUserComponent"))), s.createElement(O.z, {
                            onClick: this.props.onSave,
                            type: O.F.Success
                        }, Object(E.d)("Save", "AddUserComponent"))))))))
                    }, n
                }(s.Component),
                ne = R(function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            showDropDownMenu: !1
                        }, n.handleOptionClick = function(e) {
                            n.setState({
                                showDropDownMenu: !1
                            }, function() {
                                n.props.setFilterType(e)
                            })
                        }, n.handleButtonClick = function() {
                            n.setState(function(e) {
                                return {
                                    showDropDownMenu: !e.showDropDownMenu
                                }
                            })
                        }, n.handleClickOut = function() {
                            n.setState({
                                showDropDownMenu: !1
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.props.filterType;
                        return s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(O.W, null, Object(E.d)("Display", "FilterUsersComponent"))), s.createElement(O.Xa, null, s.createElement(P.a, {
                            onClickOut: this.handleClickOut
                        }, s.createElement(O.z, {
                            onClick: this.handleButtonClick,
                            type: O.F.Text
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(O.W, {
                            bold: !0
                        }, this.getFilterText(e))), s.createElement(O.ob, {
                            asset: O.pb.Carat,
                            height: 16,
                            width: 16
                        }))), s.createElement(O.Xa, {
                            position: O.fb.Relative
                        }, s.createElement(O.Y, {
                            items: [{
                                disabled: e === g.ALL_ROLES,
                                onClick: this.handleOptionClick.bind(this, g.ALL_ROLES),
                                title: this.getFilterText(g.ALL_ROLES)
                            }, {
                                disabled: e === g.MODERATOR,
                                figure: {
                                    alt: this.getFilterText(g.MODERATOR),
                                    src: "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1"
                                },
                                figureRight: !0,
                                onClick: this.handleOptionClick.bind(this, g.MODERATOR),
                                title: this.getFilterText(g.MODERATOR)
                            }, {
                                disabled: e === g.VIP,
                                figure: {
                                    alt: this.getFilterText(g.VIP),
                                    src: "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1"
                                },
                                figureRight: !0,
                                onClick: this.handleOptionClick.bind(this, g.VIP),
                                title: this.getFilterText(g.VIP)
                            }, {
                                disabled: e === g.EDITOR,
                                onClick: this.handleOptionClick.bind(this, g.EDITOR),
                                title: this.getFilterText(g.EDITOR)
                            }],
                            show: this.state.showDropDownMenu
                        })))))
                    }, n.prototype.getFilterText = function(e) {
                        switch (e) {
                            default:
                                case g.ALL_ROLES:
                                return Object(E.d)("All Roles", "FilterUsersComponent");
                            case g.EDITOR:
                                    return Object(E.d)("Editor", "FilterUsersComponent");
                            case g.MODERATOR:
                                    return Object(E.d)("Moderator", "FilterUsersComponent");
                            case g.VIP:
                                    return Object(E.d)("VIP", "FilterUsersComponent")
                        }
                    }, n
                }(s.Component)),
                te = f(function(e) {
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
                        return s.createElement(s.Fragment, null, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            fullWidth: !0,
                            justifyContent: O.Wa.Between
                        }, s.createElement(ne, null), s.createElement(O.z, {
                            disabled: e,
                            onClick: this.handleButtonClick
                        }, Object(E.d)("Add New", "TopBar"))), s.createElement(O.Xb, {
                            baseFontSize: O.Ca.Size8
                        }, s.createElement("hr", null)), e && s.createElement(ee, {
                            onCancel: this.handleAddUserCancel,
                            onSave: this.handleAddUserSave
                        }))
                    }, n
                }(s.Component)),
                ie = f(function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return this.props.view === a.NO_USERS ? s.createElement(M, null) : s.createElement(L.a, null, s.createElement(te, null))
                    }, n
                }(s.Component)),
                ae = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(1)
                    }, n.prototype.render = function() {
                        return s.createElement(y, null, s.createElement(w, {
                            channelLogin: this.props.match.params.channelLogin
                        }, s.createElement(ie, null)))
                    }, n
                }(s.Component),
                re = Object(l.compose)(Object(c.b)("RolesPage", {
                    destination: d.a.RolesPage
                }), Object(o.a)({
                    location: u.PageviewLocation.DashboardSettingsRolesPage
                }))(ae);
            t.d(n, "RolesPage", function() {
                return re
            })
        },
        sZ5a: function(e, n, t) {},
        vsHg: function(e, n, t) {}
    }
]);