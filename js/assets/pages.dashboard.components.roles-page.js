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
            var a, i, r = t("mrSG"),
                s = t("q1tI"),
                l = t("fvjX"),
                o = t("V+GM"),
                d = t("NvVO"),
                u = t("2xye"),
                c = t("GnwI"),
                m = t("IFXb"),
                p = t("/7QA"),
                h = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return ""
                    }, n
                }(s.Component),
                v = t("NAv5"),
                k = t("yR8l"),
                g = t("1rIY"),
                f = t("Ue10"),
                y = t("3nJb");
            ! function(e) {
                e.IS_EDITOR = "isEditor", e.IS_MOD = "isMod", e.IS_VIP = "isVIP"
            }(i || (i = {}));
            var N = (a = Object(g.a)("UserRolesContext", {
                    userCache: {}
                })).InnerProvider,
                S = a.withContext,
                C = function(e) {
                    return e
                };
            var b, E = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            loading: !0,
                            userCache: {}
                        }, n.setUserCache = function(e, n, t) {
                            for (var a, r, s = 0, l = n; s < l.length; s++) {
                                var o = l[s],
                                    d = o.node;
                                if (d) {
                                    var u = d.id;
                                    if (u) {
                                        r = o.cursor;
                                        var c = o.grantedAt,
                                            m = e[u] || ((a = {
                                                displayName: d.displayName,
                                                channelLogin: d.login,
                                                lastModified: c,
                                                profileImageURL: d.profileImageURL
                                            })[i.IS_EDITOR] = !1, a[i.IS_MOD] = !1, a[i.IS_VIP] = !1, a);
                                        m[t] = !0, m.lastModified = Object(v.max)(m.lastModified, new Date(c)), e[u] = m
                                    }
                                }
                            }
                            return {
                                cursor: r,
                                userCache: e
                            }
                        }, n.fetchMore = function(e, t) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, this.props.data.fetchMore({
                                                query: y,
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
                                                        a = t.mods,
                                                        i = t.vips;
                                                    return {
                                                        user: r.__assign({}, n.fetchMoreResult.user, {
                                                            mods: a || null,
                                                            vips: i || null
                                                        })
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n = a.sent(), this.updateUserCache(n.data), [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.updateUserCache()
                    }, n.prototype.componentDidUpdate = function(e) {
                        e.channelLogin !== this.props.channelLogin && this.setState({
                            loading: !0,
                            userCache: {}
                        }), e.data.loading && this.updateUserCache()
                    }, n.prototype.render = function() {
                        return this.state.loading ? s.createElement(f.Ya, {
                            fillContent: !0
                        }) : s.createElement(N, {
                            value: this.state
                        }, this.props.children)
                    }, n.prototype.updateUserCache = function(e) {
                        var n = this;
                        void 0 === e && (e = this.props.data);
                        var t, a, s = e.error,
                            l = e.loading,
                            o = e.user;
                        !s && !l && o && this.state.loading && this.setState(function(e) {
                            var s = r.__assign({}, e);
                            if (s.userCache || (s.userCache = {}), o.editors && o.editors.edges) {
                                var l = n.setUserCache(s.userCache, o.editors.edges, i.IS_EDITOR).userCache;
                                s.userCache = r.__assign({}, s.userCache, l)
                            }
                            if (o.mods && o.mods.edges) {
                                var d = n.setUserCache(s.userCache, o.mods.edges, i.IS_MOD),
                                    u = d.cursor;
                                l = d.userCache;
                                t = u, s.userCache = r.__assign({}, s.userCache, l)
                            }
                            if (o.vips && o.vips.edges) {
                                var c = n.setUserCache(s.userCache, o.vips.edges, i.IS_VIP);
                                u = c.cursor, l = c.userCache;
                                a = u, s.userCache = r.__assign({}, s.userCache, l)
                            }
                            var m = o.id;
                            return m && s.userCache && s.userCache[m] && delete s.userCache[m], s
                        }, function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t || a ? [4, this.fetchMore(t, a)] : [3, 2];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            this.props.latencyTracking.reportInteractive(), this.setState({
                                                loading: !1
                                            }), e.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, n
                }(s.Component),
                U = Object(l.compose)(Object(c.b)("WithUserRolesContext"), Object(k.a)(y, {
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
                }))(E),
                I = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.props.user;
                        return s.createElement(f.Wa, null, e[i.IS_EDITOR] && s.createElement(h, null), e[i.IS_MOD] && s.createElement(h, null), e[i.IS_VIP] && s.createElement(h, null), s.createElement(f.A, {
                            icon: f.ob.Plus,
                            size: f.B.Small
                        }))
                    }, n
                }(s.Component),
                _ = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(f.yb, {
                            alignItems: f.f.Center,
                            background: f.r.Base,
                            borderBottom: !0,
                            borderRadius: f.x.Large,
                            display: f.X.Flex,
                            fullWidth: !0,
                            padding: 1
                        }, this.props.children)
                    }, n
                }(s.Component),
                D = t("9C/b"),
                F = t("u5aL"),
                O = t("f00E"),
                V = t("H/lO"),
                w = t("NZDK"),
                A = t("8/mp"),
                R = (t("sZ5a"), "data-component-type"),
                x = "roles-page-search-user-option",
                L = function(e) {
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
                        }, ((e = {})[R] = [x], e)), s.createElement(f.Ta, r.__assign({
                            hover: this.state.hovered,
                            onClick: this.handleClick,
                            selected: this.state.focused,
                            tabIndex: -1,
                            type: f.Ua.Base
                        }, ((n = {})[R] = [x], n)), s.createElement(f.Wa, {
                            alignItems: f.f.Center,
                            display: f.X.Flex,
                            justifyContent: f.Va.Start,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(f.Wa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(f.q, {
                            alt: Object(p.d)("Avatar", "RolesPageOption"),
                            src: t.profile_image,
                            size: 30
                        })), t.name)))
                    }, n
                }(s.Component),
                T = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this,
                            n = this.props.users;
                        return s.createElement(f.u, {
                            noTail: !0,
                            offsetY: "-0.5px",
                            show: !!n && this.props.show
                        }, s.createElement(A.b, null, s.createElement(f.Wa, {
                            alignItems: f.f.Center,
                            display: f.X.Flex,
                            flexDirection: f.Z.Column,
                            justifyContent: f.Va.Center
                        }, n && n.length > 0 ? n.map(function(n, t) {
                            return s.createElement(L, {
                                key: t,
                                onBlur: e.props.onOptionBlur,
                                onClick: e.props.onOptionClick,
                                user: n
                            })
                        }) : s.createElement(f.Wa, {
                            alignItems: f.f.Center,
                            display: f.X.Flex,
                            flexDirection: f.Z.Column,
                            justifyContent: f.Va.Center,
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, s.createElement(f.nb, {
                            asset: f.ob.SearchNoResults
                        }), s.createElement(f.W, null, Object(p.d)("No users found", "SearchUser"))))))
                    }, n
                }(s.Component),
                B = t("gD7V"),
                M = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            defaultSelectedUserName: "",
                            showDropdown: !1,
                            searchedUsers: null
                        }, n.searchClient = new w.a({
                            appId: p.a.algoliaApplicationID,
                            apiKey: p.a.algoliaAPIKey,
                            apolloClient: p.p.apollo.client,
                            logger: p.k,
                            config: p.a,
                            stats: p.p.stats
                        }), n.filterUsersResults = function(e) {
                            var t = n.props.data.user,
                                a = t && t.id,
                                i = n.props.userCache;
                            return e.hits.filter(function(e) {
                                var n = e.objectID;
                                return n && n !== a && !i[n]
                            })
                        }, n.handleChange = function(e) {
                            var t = e.currentTarget.value;
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t ? [4, this.searchClient.queryForType(V.a.Users, t, Object(O.a)(), {
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
                                showDropdown: e && e.getAttribute(R) === x
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
                            n = s.createElement(f.Wa, {
                                margin: {
                                    right: e ? 1 : .5
                                }
                            }, s.createElement(f.q, {
                                alt: Object(p.d)("Avatar", "SearchUser"),
                                size: 30,
                                src: e && e.profileImageURL
                            }));
                        return s.createElement(f.Wa, null, e && s.createElement(f.Ta, {
                            onClick: this.handleUserDeselected,
                            type: f.Ua.Overlay
                        }, s.createElement(f.Wa, {
                            alignItems: f.f.Center,
                            display: f.X.Flex
                        }, n, s.createElement(f.W, {
                            bold: !0,
                            type: f.Ob.P
                        }, e.displayName))), !e && s.createElement(F.a, {
                            onClickOut: this.handleClickOut
                        }, s.createElement(f.Wa, {
                            alignItems: f.f.Center,
                            display: f.X.Flex
                        }, n, s.createElement(f.Wa, {
                            position: f.eb.Relative
                        }, s.createElement(f.Qa, {
                            autoFocus: !0,
                            defaultValue: this.state.defaultSelectedUserName,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            placeholder: Object(p.d)("Search", "SearchUser"),
                            type: f.Sa.Text
                        }), s.createElement(T, {
                            onOptionClick: this.props.onUserSelected,
                            onOptionBlur: this.handleOptionBlur,
                            show: this.state.showDropdown,
                            users: this.state.searchedUsers
                        })))))
                    }, n
                }(s.Component),
                P = Object(l.compose)(function(e) {
                    return S(C)(e)
                }, D.a, Object(k.a)(B, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(M),
                j = function(e) {
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
                                }, t[i.IS_EDITOR] = !1, t[i.IS_MOD] = !1, t[i.IS_VIP] = !1, t)
                            })
                        }, n.handleUserDeselected = function() {
                            n.setState({
                                selectedUser: null
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.state.selectedUser;
                        return s.createElement(f.Ia, null, s.createElement(_, null, s.createElement(f.P, {
                            cols: 3
                        }, s.createElement(P, {
                            onUserDeselected: this.handleUserDeselected,
                            onUserSelected: this.handleUserSelected,
                            selectedUser: e
                        })), s.createElement(f.P, {
                            cols: 7
                        }, e && s.createElement(I, {
                            user: e
                        })), s.createElement(f.P, {
                            cols: 2
                        }, s.createElement(f.Wa, {
                            alignItems: f.f.Center,
                            display: f.X.Flex,
                            justifyContent: f.Va.End
                        }, s.createElement(f.Wa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(f.z, {
                            onClick: this.props.onCancel,
                            type: f.F.Hollow
                        }, Object(p.d)("Cancel", "AddUser"))), s.createElement(f.z, {
                            onClick: this.props.onSave,
                            type: f.F.Success
                        }, Object(p.d)("Save", "AddUser"))))))
                    }, n
                }(s.Component),
                W = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(f.Wa, {
                            alignItems: f.f.Center,
                            display: f.X.Flex
                        }, s.createElement(f.Wa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(f.W, null, Object(p.d)("Display", "FilterUsers"))), s.createElement(f.tb, null, [s.createElement("option", {
                            key: 0,
                            value: "TODO"
                        })]))
                    }, n
                }(s.Component);
            ! function(e) {
                e[e.ADD_USER = 0] = "ADD_USER", e[e.DEFAULT = 1] = "DEFAULT"
            }(b || (b = {}));
            var $ = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            view: b.DEFAULT
                        }, n.handleAddUserCancel = function() {
                            n.setState({
                                view: b.DEFAULT
                            })
                        }, n.handleAddUserSave = function() {}, n.handleButtonClick = function() {
                            n.setState({
                                view: b.ADD_USER
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this.state.view === b.ADD_USER;
                        return s.createElement(s.Fragment, null, s.createElement(f.Wa, {
                            alignItems: f.f.Center,
                            display: f.X.Flex,
                            fullWidth: !0,
                            justifyContent: f.Va.Between
                        }, s.createElement(W, null), s.createElement(f.z, {
                            disabled: e,
                            onClick: this.handleButtonClick
                        }, Object(p.d)("Add New", "TopBar"))), s.createElement(f.Xb, {
                            baseFontSize: f.Ba.Size8
                        }, s.createElement("hr", null)), e && s.createElement(j, {
                            onCancel: this.handleAddUserCancel,
                            onSave: this.handleAddUserSave
                        }))
                    }, n
                }(s.Component),
                q = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(1)
                    }, n.prototype.render = function() {
                        return s.createElement(U, {
                            channelLogin: this.props.match.params.channelLogin
                        }, s.createElement(m.a, null, s.createElement($, null)))
                    }, n
                }(s.Component),
                X = Object(l.compose)(Object(c.b)("RolesPage", {
                    destination: d.a.RolesPage
                }), Object(o.a)({
                    location: u.PageviewLocation.DashboardSettingsRolesPage
                }))(q);
            t.d(n, "RolesPage", function() {
                return X
            })
        },
        sZ5a: function(e, n, t) {}
    }
]);