(window.webpackJsonp = window.webpackJsonp || []).push([
    [143], {
        VMNL: function(e, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelUserRolesQuery"
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
                    end: 612
                }
            };
            i.loc.source = {
                body: "query ChannelUserRolesQuery ($channelLogin: String! $includeEditors: Boolean! $includeMods: Boolean! $includeVIPs: Boolean! $modsCursor: Cursor $vipsCursor: Cursor) {\nuser(login: $channelLogin) {\nid\neditors @include(if: $includeEditors) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nprofileImageURL(width: 28)\n}\n}\n}\nmods(first: 100 after: $modsCursor) @include(if: $includeMods) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nprofileImageURL(width: 28)\n}\n}\n}\nvips(first: 100 after: $vipsCursor) @include(if: $includeVIPs) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nprofileImageURL(width: 28)\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = i
        },
        qcBk: function(e, n, i) {
            "use strict";
            i.r(n);
            var a, t, d = i("mrSG"),
                s = i("q1tI"),
                r = i("fvjX"),
                l = i("V+GM"),
                u = i("NvVO"),
                o = i("2xye"),
                m = i("GnwI"),
                c = i("NAv5"),
                v = i("yR8l"),
                k = i("1rIY"),
                g = i("Ue10"),
                p = i("VMNL");
            ! function(e) {
                e.IS_EDITOR = "isEditor", e.IS_MOD = "isMod", e.IS_VIP = "isVIP"
            }(t || (t = {}));
            var N = (a = Object(k.a)("ChannelUserRolesContext", {
                users: {}
            })).InnerProvider;
            a.withContext;
            var f = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            loading: !0,
                            users: null
                        }, n.setUsers = function(e, n, i) {
                            for (var a, d, s = 0, r = n; s < r.length; s++) {
                                var l = r[s],
                                    u = l.node;
                                if (u) {
                                    var o = u.id;
                                    if (o) {
                                        d = l.cursor;
                                        var m = l.grantedAt,
                                            v = e[o] || ((a = {
                                                displayName: u.displayName,
                                                lastModified: m,
                                                profileImageURL: u.profileImageURL
                                            })[t.IS_EDITOR] = !1, a[t.IS_MOD] = !1, a[t.IS_VIP] = !1, a);
                                        v[i] = !0, v.lastModified = Object(c.max)(v.lastModified, new Date(m)), e[o] = v
                                    }
                                }
                            }
                            return {
                                cursor: d,
                                users: e
                            }
                        }, n.fetchMore = function(e, i) {
                            return d.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return d.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, this.props.data.fetchMore({
                                                query: p,
                                                variables: {
                                                    channelLogin: this.props.channelLogin,
                                                    includeEditors: !1,
                                                    includeMods: !!e,
                                                    includeVIPs: !!i,
                                                    modsCursor: e,
                                                    vipsCursor: i
                                                },
                                                updateQuery: function(e, n) {
                                                    if (!n.fetchMoreResult.user) return e;
                                                    var i = n.fetchMoreResult.user,
                                                        a = i.mods,
                                                        t = i.vips;
                                                    return {
                                                        user: d.__assign({}, n.fetchMoreResult.user, {
                                                            mods: a || null,
                                                            vips: t || null
                                                        })
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n = a.sent(), this.updateUsers(n.data), [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return d.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.updateUsers()
                    }, n.prototype.componentDidUpdate = function(e) {
                        e.channelLogin !== this.props.channelLogin && this.setState({
                            loading: !0,
                            users: null
                        }), e.data.loading && this.updateUsers()
                    }, n.prototype.render = function() {
                        return this.state.loading ? s.createElement(g.Xa, {
                            fillContent: !0
                        }) : s.createElement(N, {
                            value: this.state
                        })
                    }, n.prototype.updateUsers = function(e) {
                        var n = this;
                        void 0 === e && (e = this.props.data);
                        var i, a, s = e.error,
                            r = e.loading,
                            l = e.user;
                        !s && !r && l && this.state.loading && this.setState(function(e) {
                            var s = d.__assign({}, e);
                            if (s.users || (s.users = {}), l.editors && l.editors.edges) {
                                var r = n.setUsers(s.users, l.editors.edges, t.IS_EDITOR).users;
                                s.users = d.__assign({}, s.users, r)
                            }
                            if (l.mods && l.mods.edges) {
                                var u = n.setUsers(s.users, l.mods.edges, t.IS_MOD),
                                    o = u.cursor;
                                r = u.users;
                                i = o, s.users = d.__assign({}, s.users, r)
                            }
                            if (l.vips && l.vips.edges) {
                                var m = n.setUsers(s.users, l.vips.edges, t.IS_VIP);
                                o = m.cursor, r = m.users;
                                a = o, s.users = d.__assign({}, s.users, r)
                            }
                            var c = l.id;
                            return c && s.users[c] && delete s.users[c], s
                        }, function() {
                            return d.__awaiter(n, void 0, void 0, function() {
                                return d.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return i || a ? [4, this.fetchMore(i, a)] : [3, 2];
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
                h = Object(r.compose)(Object(m.c)("WithChannelUserRolesContext"), Object(v.a)(p, {
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
                }))(f),
                S = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return d.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(1)
                    }, n.prototype.render = function() {
                        return s.createElement(h, {
                            channelLogin: this.props.match.params.channelLogin
                        }, s.createElement(g.Va, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, "skeleton page"))
                    }, n
                }(s.Component),
                y = Object(r.compose)(Object(m.c)("RolesPage", {
                    destination: u.a.RolesPage
                }), Object(l.a)({
                    location: o.PageviewLocation.DashboardSettingsRolesPage
                }))(S);
            i.d(n, "RolesPage", function() {
                return y
            })
        }
    }
]);