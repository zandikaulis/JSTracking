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
        eqbG: function(e, n, t) {},
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
                l = t("q1tI"),
                s = t("fvjX"),
                o = t("V+GM"),
                d = t("NvVO"),
                c = t("2xye"),
                u = t("GnwI"),
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
                f = function(e) {
                    return e
                };

            function v(e) {
                return h(f)(e)
            }
            var g, k, C, b = function(e) {
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
                        return l.createElement(p, {
                            value: this.state
                        }, this.props.children)
                    }, n
                }(l.Component),
                E = t("NAv5"),
                y = t("/7QA"),
                S = t("ZDlU"),
                N = t("yR8l"),
                O = t("Ue10"),
                D = t("3nJb");
            ! function(e) {
                e[e.ALL_ROLES = 0] = "ALL_ROLES", e[e.EDITOR = 1] = "EDITOR", e[e.MODERATOR = 2] = "MODERATOR", e[e.VIP = 3] = "VIP"
            }(k || (k = {})),
            function(e) {
                e.IS_EDITOR = "isEditor", e.IS_MOD = "isMod", e.IS_VIP = "isVIP"
            }(C || (C = {}));
            var I = (g = Object(m.a)("UserRolesContext", {
                    filterType: k.ALL_ROLES,
                    setFilterType: function() {
                        return null
                    },
                    userCache: {}
                })).InnerProvider,
                R = g.withContext,
                _ = function(e) {
                    return e
                };

            function U(e) {
                return R(_)(e)
            }
            var F, A = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.setUserCache = function(e, n, t) {
                            for (var i, a = 0, r = n; a < r.length; a++) {
                                var l = r[a],
                                    s = l.node;
                                if (s) {
                                    var o = s.id;
                                    if (o) {
                                        i = l.cursor;
                                        var d = l.grantedAt,
                                            c = e[o] || {
                                                displayName: s.displayName,
                                                channelLogin: s.login,
                                                lastModified: d,
                                                profileImageURL: s.profileImageURL,
                                                isEditor: !1,
                                                isMod: !1,
                                                isVIP: !1
                                            };
                                        c[t] = !0, c.lastModified = Object(E.max)(c.lastModified, new Date(d)), e[o] = c
                                    }
                                }
                            }
                            return {
                                cursor: i,
                                userCache: e
                            }
                        }, t.fetchMore = function(e, n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, this.props.data.fetchMore({
                                                query: D,
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
                                        return (i.isEditor || i.isMod || i.isVIP) && (e[n] = i), e
                                    }, {})
                                }
                            })
                        }, t.state = {
                            filterType: k.ALL_ROLES,
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
                        return this.props.data.error ? l.createElement(S.a, {
                            message: Object(y.d)("Whoops, something went wrong.", "UserRolesContext")
                        }) : this.props.view === a.LOADING ? l.createElement(O.Za, {
                            fillContent: !0
                        }) : l.createElement(I, {
                            value: this.state
                        }, this.props.children)
                    }, n.prototype.updateUserCache = function(e) {
                        var n = this;
                        void 0 === e && (e = this.props.data);
                        var t, i, l = e.error,
                            s = e.loading,
                            o = e.user;
                        l || s || !o || this.props.view !== a.LOADING || this.setState(function(e) {
                            var a = r.__assign({}, e);
                            if (a.userCache || (a.userCache = {}), o.editors && o.editors.edges) {
                                var l = n.setUserCache(a.userCache, o.editors.edges, C.IS_EDITOR).userCache;
                                a.userCache = r.__assign({}, a.userCache, l)
                            }
                            if (o.mods && o.mods.edges) {
                                var s = n.setUserCache(a.userCache, o.mods.edges, C.IS_MOD),
                                    d = s.cursor;
                                l = s.userCache;
                                t = d, a.userCache = r.__assign({}, a.userCache, l)
                            }
                            if (o.vips && o.vips.edges) {
                                var c = n.setUserCache(a.userCache, o.vips.edges, C.IS_VIP);
                                d = c.cursor, l = c.userCache;
                                i = d, a.userCache = r.__assign({}, a.userCache, l)
                            }
                            var u = o.id;
                            return u && a.userCache && a.userCache[u] && delete a.userCache[u], a
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
                }(l.Component),
                w = Object(s.compose)(v, Object(u.b)("WithUserRolesContext"), Object(N.a)(D, {
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
                x = t("IFXb"),
                L = t("GIFg"),
                T = t("kYmV"),
                V = t("cuu2"),
                B = "https://help.twitch.tv/customer/en/portal/articles/659115-twitch-chat-badges-guide",
                M = "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1",
                P = "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1",
                X = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return l.createElement(L.a, null, l.createElement(V.a, {
                            learnMoreUrl: B,
                            page: T.b.Roles
                        }))
                    }, n
                }(l.Component),
                j = t("9C/b"),
                W = (t("vsHg"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            fullWidth: !0,
                            justifyContent: O.Wa.Center,
                            position: O.fb.Absolute,
                            zIndex: O.cc.Above
                        }, l.createElement(O.i, {
                            type: O.n.SlideInBottom,
                            duration: O.k.Medium,
                            enabled: !0,
                            timing: O.m.EaseInOut
                        }, l.createElement(O.zb, {
                            background: O.r.Base,
                            borderBottom: !0,
                            borderRadius: O.x.Medium,
                            className: "dashboard-centered-banner",
                            display: O.X.Flex,
                            elevation: 3,
                            flexDirection: O.Aa.Column,
                            padding: 2
                        }, l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Start,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, l.createElement(O.q, {
                            alt: Object(y.d)("VoHiYo", "CenteredBanner"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                            size: 30
                        })), l.createElement(O.W, {
                            bold: !0,
                            type: O.Pb.H5
                        }, this.props.title)), l.createElement(O.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(O.W, {
                            fontSize: O.Ca.Size5
                        }, this.props.body)), this.props.children)))
                    }, n
                }(l.Component));
            ! function(e) {
                e.ADD_A_ROLE = "no-users-banner-add-a-role", e.LEARN_MORE = "no-users-banner-learn-more"
            }(F || (F = {}));
            var z = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleAddARoleClick = function() {
                            n.props.setView(a.DEFAULT)
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return l.createElement(W, {
                            body: Object(y.d)("Manage the permissions users have for your community. Start by adding your first role.", "NoUsersBanner"),
                            title: Object(y.d)("Welcome to Roles", "NoUsersBanner")
                        }, l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Start
                        }, l.createElement(O.Xa, {
                            margin: {
                                right: 1
                            }
                        }, l.createElement(O.z, {
                            "data-test-selector": F.ADD_A_ROLE,
                            onClick: this.handleAddARoleClick
                        }, Object(y.d)("Add a Role", "NoUsersBanner"))), l.createElement(O.z, {
                            "data-test-selector": F.LEARN_MORE,
                            linkTo: B,
                            type: O.F.Text
                        }, Object(y.d)("Learn More", "NoUsersBanner"))))
                    }, n
                }(l.Component),
                q = Object(s.compose)(v, j.a)(z),
                G = t("u5aL"),
                $ = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.src,
                            t = e.title;
                        return l.createElement(O.zb, {
                            alignItems: O.f.Center,
                            background: O.r.Alt,
                            borderRadius: O.x.Medium,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Center,
                            margin: {
                                x: 1
                            }
                        }, n && l.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, l.createElement(O.S, {
                            alt: t,
                            src: n
                        })), l.createElement(O.Xa, {
                            margin: {
                                right: 1
                            }
                        }, l.createElement(O.W, {
                            bold: !0
                        }, t)), l.createElement(O.A, {
                            icon: O.pb.NotificationError,
                            onClick: this.props.onRolePillDismissed,
                            size: O.B.Small
                        }))
                    }, n
                }(l.Component),
                Q = (t("eqbG"), function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleCheckBoxChange = function(e) {
                            var t;
                            n.props.onCheckBoxChange(((t = {})[n.props.value] = e.currentTarget.checked, t))
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.disabled,
                            t = e.label,
                            i = e.src;
                        return l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Between,
                            margin: this.props.margin
                        }, l.createElement(O.N, {
                            checked: this.props.checked,
                            disabled: n,
                            label: t,
                            onChange: this.handleCheckBoxChange,
                            value: this.props.value
                        }), i && l.createElement(O.S, {
                            alt: t,
                            className: n ? "disabled-role-selector-icon" : "",
                            src: i
                        }))
                    }, n
                }(l.Component));

            function H() {
                return Object(y.d)("Editor", "FilterUsersComponent")
            }

            function Y() {
                return Object(y.d)("Moderator", "FilterUsersComponent")
            }

            function K() {
                return Object(y.d)("VIP", "FilterUsersComponent")
            }
            var J = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleLearnAboutRolesClick = function() {}, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.isEditor,
                            t = e.isMod,
                            i = e.isVIP,
                            a = e.onCheckBoxChange,
                            r = Y(),
                            s = K();
                        return l.createElement(O.Xa, {
                            position: O.fb.Relative
                        }, l.createElement(O.u, {
                            offsetY: "-0.5px",
                            noTail: !0,
                            show: this.props.show
                        }, l.createElement(O.zb, {
                            border: !0,
                            borderRadius: O.x.Small,
                            elevation: 2
                        }, l.createElement(Q, {
                            checked: t,
                            disabled: i,
                            label: r,
                            onCheckBoxChange: a,
                            margin: {
                                x: 1,
                                y: 2
                            },
                            src: M,
                            value: C.IS_MOD
                        }), l.createElement(Q, {
                            checked: i,
                            disabled: t,
                            label: s,
                            onCheckBoxChange: a,
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            src: P,
                            value: C.IS_VIP
                        }), l.createElement(Q, {
                            checked: n,
                            disabled: !1,
                            label: H(),
                            onCheckBoxChange: a,
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            value: C.IS_EDITOR
                        }), l.createElement(O.Ua, {
                            onClick: this.handleLearnAboutRolesClick
                        }, l.createElement(O.zb, {
                            alignItems: O.f.Center,
                            borderTop: !0,
                            display: O.X.Flex,
                            padding: 1
                        }, l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, l.createElement(O.ob, {
                            asset: O.pb.NotificationInfo
                        })), l.createElement(O.W, null, Object(y.e)("Learn about Roles", "RoleSelector")))))))
                    }, n
                }(l.Component),
                Z = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            isBalloonOpen: !1
                        }, n.handleAddRoleClick = function() {
                            n.setState(function(e) {
                                return {
                                    isBalloonOpen: !e.isBalloonOpen
                                }
                            })
                        }, n.handleClickOut = function() {
                            n.setState({
                                isBalloonOpen: !1
                            }, function() {
                                var e = n.props.onDropDownClickOut;
                                e && e()
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.onRolePillDismissed,
                            t = e.user,
                            i = this.state.isBalloonOpen,
                            a = H(),
                            r = Y(),
                            s = K(),
                            o = t.isEditor,
                            d = t.isMod,
                            c = t.isVIP;
                        return l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, l.createElement(G.a, {
                            onClickOut: this.handleClickOut
                        }, !i && l.createElement(O.A, {
                            onClick: this.handleAddRoleClick,
                            icon: O.pb.Plus,
                            size: O.B.Small
                        }), i && l.createElement(l.Fragment, null, l.createElement(O.z, {
                            icon: O.pb.Plus,
                            onClick: this.handleAddRoleClick,
                            size: O.D.Small,
                            type: i ? O.F.Hollow : O.F.Text
                        }, l.createElement(O.W, null, Object(y.d)("Add Role", "RoleSelector"))), l.createElement(J, {
                            isEditor: o,
                            isMod: d,
                            isVIP: c,
                            onCheckBoxChange: this.props.onCheckBoxChange,
                            show: i
                        }))), o && l.createElement($, {
                            onRolePillDismissed: n.bind(null, C.IS_EDITOR),
                            title: a
                        }), d && l.createElement($, {
                            onRolePillDismissed: n.bind(null, C.IS_MOD),
                            src: M,
                            title: r
                        }), c && l.createElement($, {
                            onRolePillDismissed: n.bind(null, C.IS_VIP),
                            src: P,
                            title: s
                        }))
                    }, n
                }(l.Component),
                ee = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return l.createElement(O.zb, {
                            alignItems: O.f.Center,
                            background: O.r.Base,
                            borderBottom: !0,
                            borderRadius: O.x.Large,
                            display: O.X.Flex,
                            fullWidth: !0,
                            padding: 1
                        }, this.props.children)
                    }, n
                }(l.Component),
                ne = t("f00E"),
                te = t("H/lO"),
                ie = t("NZDK"),
                ae = t("8/mp"),
                re = t("8Ad5"),
                le = (t("sZ5a"), "data-component-type"),
                se = "roles-page-search-user-option",
                oe = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            focused: !1,
                            hovered: !1
                        }, n.handleKeyDown = function(e) {
                            var t = e.keyCode;
                            t !== re.a.Space && t !== re.a.Enter || n.handleClick()
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
                        return l.createElement("div", r.__assign({
                            className: "roles-page-search-user-option",
                            onBlur: this.handleBlur,
                            onFocus: this.handleFocus,
                            onMouseOver: this.handleMouseOver,
                            onMouseOut: this.handleMouseOut,
                            onKeyDown: this.handleKeyDown,
                            tabIndex: 0
                        }, ((e = {})[le] = [se], e)), l.createElement(O.Ua, r.__assign({
                            hover: this.state.hovered,
                            onClick: this.handleClick,
                            selected: this.state.focused,
                            tabIndex: -1,
                            type: O.Va.Base
                        }, ((n = {})[le] = [se], n)), l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Start,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, l.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, l.createElement(O.q, {
                            alt: Object(y.d)("Avatar", "SearchUsersOption"),
                            src: t.profile_image,
                            size: 30
                        })), t.name)))
                    }, n
                }(l.Component),
                de = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this,
                            n = this.props.users;
                        return l.createElement(O.u, {
                            noTail: !0,
                            offsetY: "-0.5px",
                            show: !!n && this.props.show
                        }, l.createElement(ae.b, null, l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            flexDirection: O.Aa.Column,
                            justifyContent: O.Wa.Center
                        }, n && n.length > 0 ? n.map(function(n, t) {
                            return l.createElement(oe, {
                                key: t,
                                onBlur: e.props.onOptionBlur,
                                onClick: e.props.onOptionClick,
                                user: n
                            })
                        }) : l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            flexDirection: O.Aa.Column,
                            justifyContent: O.Wa.Center,
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, l.createElement(O.ob, {
                            asset: O.pb.SearchNoResults
                        }), l.createElement(O.W, null, Object(y.d)("No users found", "SearchUsersDropdown"))))))
                    }, n
                }(l.Component),
                ce = t("gD7V"),
                ue = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            defaultSelectedUserName: "",
                            showDropdown: !1,
                            searchedUsers: null
                        }, n.searchClient = new ie.a({
                            appId: y.a.algoliaApplicationID,
                            apiKey: y.a.algoliaAPIKey,
                            apolloClient: y.p.apollo.client,
                            logger: y.k,
                            config: y.a,
                            stats: y.p.stats
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
                                            return t ? [4, this.searchClient.queryForType(te.a.Users, t, Object(ne.a)(), {
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
                                showDropdown: e && e.getAttribute(le) === se
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
                            n = l.createElement(O.Xa, {
                                margin: {
                                    right: e ? 1 : .5
                                }
                            }, l.createElement(O.q, {
                                alt: Object(y.d)("Avatar", "SearchUsers"),
                                size: 30,
                                src: e && e.profileImageURL
                            }));
                        return l.createElement(O.Xa, null, e && l.createElement(O.Ua, {
                            onClick: this.handleUserDeselected,
                            type: O.Va.Overlay
                        }, l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, n, l.createElement(O.W, {
                            bold: !0,
                            type: O.Pb.P
                        }, e.displayName))), !e && l.createElement(G.a, {
                            onClickOut: this.handleClickOut
                        }, l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, n, l.createElement(O.Xa, {
                            position: O.fb.Relative
                        }, l.createElement(O.Ra, {
                            autoFocus: !0,
                            defaultValue: this.state.defaultSelectedUserName,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            placeholder: Object(y.d)("Search", "SearchUsers"),
                            type: O.Ta.Text
                        }), l.createElement(de, {
                            onOptionClick: this.props.onUserSelected,
                            onOptionBlur: this.handleOptionBlur,
                            show: this.state.showDropdown,
                            users: this.state.searchedUsers
                        })))))
                    }, n
                }(l.Component),
                me = Object(s.compose)(U, j.a, Object(N.a)(ce, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(ue),
                pe = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            selectedUser: null
                        }, n.handleCheckBoxChange = function(e) {
                            n.setState(function(n) {
                                var t = n.selectedUser;
                                return t ? {
                                    selectedUser: r.__assign({}, t, e)
                                } : null
                            })
                        }, n.handleRolePillDismissed = function(e) {
                            n.setState(function(n) {
                                var t, i = n.selectedUser;
                                return i ? {
                                    selectedUser: r.__assign({}, i, (t = {}, t[e] = !1, t))
                                } : null
                            })
                        }, n.handleUserSelected = function(e) {
                            n.setState({
                                selectedUser: {
                                    displayName: e.name,
                                    channelLogin: e.login,
                                    profileImageURL: e.profile_image || "",
                                    lastModified: new Date,
                                    isEditor: !1,
                                    isMod: !1,
                                    isVIP: !1
                                }
                            })
                        }, n.handleUserDeselected = function() {
                            n.setState({
                                selectedUser: null
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.state.selectedUser;
                        return l.createElement(O.Ja, null, l.createElement(O.Xa, {
                            fullWidth: !0
                        }, l.createElement(O.i, {
                            duration: O.k.Medium,
                            enabled: !0,
                            type: O.n.SlideInBottom
                        }, l.createElement(ee, null, l.createElement(O.P, {
                            cols: 3
                        }, l.createElement(me, {
                            onUserDeselected: this.handleUserDeselected,
                            onUserSelected: this.handleUserSelected,
                            selectedUser: e
                        })), l.createElement(O.P, {
                            cols: 7
                        }, e && l.createElement(Z, {
                            onCheckBoxChange: this.handleCheckBoxChange,
                            onRolePillDismissed: this.handleRolePillDismissed,
                            user: e
                        })), l.createElement(O.P, {
                            cols: 2
                        }, l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.End
                        }, l.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, l.createElement(O.z, {
                            onClick: this.props.onCancel,
                            type: O.F.Hollow
                        }, Object(y.d)("Cancel", "AddUserComponent"))), l.createElement(O.z, {
                            onClick: this.props.onSave,
                            type: O.F.Success
                        }, Object(y.d)("Save", "AddUserComponent"))))))))
                    }, n
                }(l.Component),
                he = U(function(e) {
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
                        return l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, l.createElement(O.Xa, {
                            margin: {
                                right: 1
                            }
                        }, l.createElement(O.W, null, Object(y.d)("Display", "FilterUsersComponent"))), l.createElement(O.Xa, null, l.createElement(G.a, {
                            onClickOut: this.handleClickOut
                        }, l.createElement(O.z, {
                            onClick: this.handleButtonClick,
                            type: O.F.Text
                        }, l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, l.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, l.createElement(O.W, {
                            bold: !0
                        }, this.getFilterText(e))), l.createElement(O.ob, {
                            asset: O.pb.Carat,
                            height: 16,
                            width: 16
                        }))), l.createElement(O.Xa, {
                            position: O.fb.Relative
                        }, l.createElement(O.Y, {
                            items: [{
                                disabled: e === k.ALL_ROLES,
                                onClick: this.handleOptionClick.bind(this, k.ALL_ROLES),
                                title: this.getFilterText(k.ALL_ROLES)
                            }, {
                                disabled: e === k.MODERATOR,
                                figure: {
                                    alt: this.getFilterText(k.MODERATOR),
                                    src: M
                                },
                                figureRight: !0,
                                onClick: this.handleOptionClick.bind(this, k.MODERATOR),
                                title: this.getFilterText(k.MODERATOR)
                            }, {
                                disabled: e === k.VIP,
                                figure: {
                                    alt: this.getFilterText(k.VIP),
                                    src: P
                                },
                                figureRight: !0,
                                onClick: this.handleOptionClick.bind(this, k.VIP),
                                title: this.getFilterText(k.VIP)
                            }, {
                                disabled: e === k.EDITOR,
                                onClick: this.handleOptionClick.bind(this, k.EDITOR),
                                title: this.getFilterText(k.EDITOR)
                            }],
                            show: this.state.showDropDownMenu
                        })))))
                    }, n.prototype.getFilterText = function(e) {
                        switch (e) {
                            default:
                                case k.ALL_ROLES:
                                return Object(y.d)("All Roles", "FilterUsersComponent");
                            case k.EDITOR:
                                    return H();
                            case k.MODERATOR:
                                    return Y();
                            case k.VIP:
                                    return K()
                        }
                    }, n
                }(l.Component)),
                fe = v(function(e) {
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
                        return l.createElement(l.Fragment, null, l.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            fullWidth: !0,
                            justifyContent: O.Wa.Between
                        }, l.createElement(he, null), l.createElement(O.z, {
                            disabled: e,
                            onClick: this.handleButtonClick
                        }, Object(y.d)("Add New", "TopBar"))), l.createElement(O.Yb, {
                            baseFontSize: O.Ca.Size8
                        }, l.createElement("hr", null)), e && l.createElement(pe, {
                            onCancel: this.handleAddUserCancel,
                            onSave: this.handleAddUserSave
                        }))
                    }, n
                }(l.Component)),
                ve = v(function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return l.createElement(l.Fragment, null, this.props.view === a.NO_USERS ? l.createElement(q, null) : l.createElement(x.a, null, l.createElement(fe, null)), l.createElement(X, null))
                    }, n
                }(l.Component)),
                ge = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(1)
                    }, n.prototype.render = function() {
                        return l.createElement(b, null, l.createElement(w, {
                            channelLogin: this.props.match.params.channelLogin
                        }, l.createElement(ve, null)))
                    }, n
                }(l.Component),
                ke = Object(s.compose)(Object(u.b)("RolesPage", {
                    destination: d.a.RolesPage
                }), Object(o.a)({
                    location: c.PageviewLocation.DashboardSettingsRolesPage
                }))(ge);
            t.d(n, "RolesPage", function() {
                return ke
            })
        },
        sZ5a: function(e, n, t) {},
        vsHg: function(e, n, t) {}
    }
]);