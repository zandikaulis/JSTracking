(window.webpackJsonp = window.webpackJsonp || []).push([
    [117], {
        bpxw: function(e, n, i) {
            "use strict";
            i.r(n);
            var r = i("mrSG"),
                t = i("q1tI"),
                o = i("fvjX"),
                a = i("yR8l"),
                l = i("geRD"),
                s = i("rdDs"),
                d = i("GnwI"),
                u = i("h/iw"),
                c = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.componentDidUpdate = function() {
                        var e = this.props.data;
                        if (!e.loading) {
                            var n = 0;
                            !e.error && e.user && e.user.follows && e.user.follows.edges && (n = e.user.follows.edges.length), this.props.latencyTracking.reportInteractive(n)
                        }
                    }, n.prototype.render = function() {
                        var e = this.props.data;
                        return t.createElement(s.a, {
                            loading: e.loading,
                            channelLogin: this.props.channelLogin,
                            hasNextPage: !!(e.user && e.user.follows && e.user.follows.pageInfo && e.user.follows.pageInfo.hasNextPage),
                            error: e.error,
                            loadMore: this.props.loadMore,
                            followEdge: e.user && e.user.follows && e.user.follows.edges,
                            userExist: !(!e.user || !e.user.id)
                        })
                    }, n
                }(t.Component),
                m = Object(o.compose)(Object(d.b)("ChannelFollowingContent"), Object(a.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: 15,
                                login: e.channelLogin,
                                order: s.b.DESC
                            }
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                var n = e.data.user && e.data.user.follows && e.data.user.follows.edges,
                                    i = null;
                                if (n) {
                                    var t = n.filter(function(e) {
                                        return !!e
                                    });
                                    t.length > 0 && (i = t[t.length - 1].cursor)
                                }
                                return e.data.fetchMore({
                                    query: u,
                                    variables: {
                                        cursor: i,
                                        limit: 7,
                                        login: e.ownProps.channelLogin,
                                        order: s.b.DESC
                                    },
                                    updateQuery: function(e, n) {
                                        var i = n.fetchMoreResult,
                                            t = i.user && i.user.follows || e.user && e.user.follows,
                                            o = (e.user && e.user.follows && e.user.follows.edges || []).filter(function(e) {
                                                return e && e.node && e.node.id
                                            }),
                                            a = (i.user && i.user.follows && i.user.follows.edges || []).filter(function(e) {
                                                return e && e.node && e.node.id
                                            });
                                        return {
                                            user: r.__assign({}, i.user, {
                                                follows: r.__assign({}, t, {
                                                    edges: Object(l.c)(o, a)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }))(c);
            i.d(n, "REQUEST_LIMIT", function() {
                return 15
            }), i.d(n, "ChannelFollowingContentComponent", function() {
                return c
            }), i.d(n, "ChannelFollowingContent", function() {
                return m
            })
        },
        "h/iw": function(e, n, i) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelFollows"
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
                                value: "limit"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "cursor"
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
                                value: "order"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "SortOrder"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "follows"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "limit"
                                            }
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
                                                value: "cursor"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "order"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "order"
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
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "userCardFragment"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
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
                    end: 312
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/user-card/queries/user-card-fragment.gql"\nquery ChannelFollows($login: String $limit: Int $cursor: Cursor $order: SortOrder) {\nuser(login: $login) {\nid\nfollows(first: $limit after: $cursor order: $order) {\nedges {\ncursor\nnode {\nid\n...userCardFragment\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var t = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !t[n] && (t[n] = !0, !0)
                })
            }(i("xXGc").definitions)), e.exports = r
        },
        rdDs: function(e, n, i) {
            "use strict";
            var r, t = i("mrSG"),
                o = i("q1tI"),
                a = i("/7QA"),
                l = i("ZDlU"),
                s = i("8/mp"),
                d = i("bdHe"),
                u = i("jytb"),
                c = i("Ue10");
            ! function(e) {
                e.DESC = "DESC", e.ASC = "ASC"
            }(r || (r = {}));
            var m = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return t.__extends(n, e), n.prototype.render = function() {
                    return o.createElement(c.Ya, {
                        fullWidth: !0,
                        padding: {
                            x: 3,
                            y: 2
                        }
                    }, this.getFollowCards(), o.createElement(s.a, {
                        loadMore: this.props.loadMore,
                        enabled: this.props.hasNextPage && !this.props.loading,
                        pixelThreshold: 100
                    }), this.props.loading && o.createElement(c.ab, {
                        fillContent: !0
                    }))
                }, n.prototype.getFollowCards = function() {
                    if (this.props.error) return o.createElement(l.a, {
                        message: Object(a.d)("Error loading Follow List", "ChannelFollowListing")
                    });
                    if (!this.props.loading && !this.props.userExist) return o.createElement(l.a, {
                        message: Object(a.d)("User does not exist", "ChannelFollowListing")
                    });
                    if (this.props.loading && !this.props.followEdge) return o.createElement(d.a, null);
                    var e = !0,
                        n = this.props.followEdge && this.props.followEdge.filter(function(e) {
                            return e && e.node && e.node.id
                        }).map(function(n) {
                            return n && n.node && n.node.id ? (e = !1, o.createElement(c.Ya, {
                                key: n.node.id,
                                margin: {
                                    bottom: 2
                                }
                            }, o.createElement(u.b, {
                                id: n.node.id,
                                balloonDirection: c.v.Right,
                                showButtonsOnHover: !0,
                                userData: {
                                    user: n.node
                                }
                            }))) : null
                        });
                    return n && n.length && !e ? o.createElement(c.Ya, {
                        display: c.X.Flex,
                        flexGrow: 1,
                        fullHeight: !0
                    }, o.createElement(c.cc, {
                        placeholderItems: 10,
                        center: !0,
                        gutterSize: c.ec.Small,
                        childWidth: c.dc.Large
                    }, n)) : o.createElement(c.Ya, {
                        "data-test-selector": "no-follow-users",
                        margin: {
                            top: 5
                        },
                        display: c.X.Flex,
                        flexDirection: c.Aa.Row,
                        justifyContent: c.Xa.Center
                    }, o.createElement(c.W, {
                        type: c.Wb.H4,
                        color: c.O.Alt2,
                        italic: !0
                    }, Object(a.d)("No Users Found", "ChannelFollowListing")))
                }, n
            }(o.Component);
            i.d(n, !1, function() {
                return 15
            }), i.d(n, "b", function() {
                return r
            }), i.d(n, !1, function() {
                return "no-follow-users"
            }), i.d(n, "a", function() {
                return m
            })
        }
    }
]);