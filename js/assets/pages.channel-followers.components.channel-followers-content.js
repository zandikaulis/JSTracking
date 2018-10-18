(window.webpackJsonp = window.webpackJsonp || []).push([
    [115], {
        EJeP: function(e, n, r) {
            "use strict";
            r.r(n);
            var i = r("mrSG"),
                t = r("q1tI"),
                o = r("fvjX"),
                a = r("yR8l"),
                l = r("geRD"),
                s = r("rdDs"),
                d = r("GnwI"),
                u = r("ghdf"),
                c = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(n, e), n.prototype.componentDidUpdate = function() {
                        var e = this.props.data;
                        if (!e.loading) {
                            var n = 0;
                            !e.error && e.user && e.user.followers && e.user.followers.edges && (n = e.user.followers.edges.length), this.props.latencyTracking.reportInteractive(n)
                        }
                    }, n.prototype.render = function() {
                        var e = this.props.data;
                        return t.createElement(s.a, {
                            loading: e.loading,
                            channelLogin: this.props.channelLogin,
                            hasNextPage: !!(e.user && e.user.followers && e.user.followers.edges && e.user.followers.pageInfo && e.user.followers.pageInfo.hasNextPage),
                            error: e.error,
                            loadMore: this.props.loadMore,
                            followEdge: e.user && e.user.followers && e.user.followers.edges,
                            userExist: !(!e.user || !e.user.id)
                        })
                    }, n
                }(t.Component),
                m = Object(o.compose)(Object(d.b)("ChannelFollowersContent"), Object(a.a)(u, {
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
                        return i.__assign({}, e, {
                            loadMore: function() {
                                var n = e.data.user && e.data.user.followers && e.data.user.followers.edges,
                                    r = null;
                                if (n) {
                                    var t = n.filter(function(e) {
                                        return !!e
                                    });
                                    t.length > 0 && (r = t[t.length - 1].cursor)
                                }
                                return e.data.fetchMore({
                                    query: u,
                                    variables: {
                                        cursor: r,
                                        limit: 7,
                                        login: e.ownProps.channelLogin,
                                        order: s.b.DESC
                                    },
                                    updateQuery: function(e, n) {
                                        var r = n.fetchMoreResult,
                                            t = r.user && r.user.followers || e.user && e.user.followers,
                                            o = (e.user && e.user.followers && e.user.followers.edges || []).filter(function(e) {
                                                return e && e.node && e.node.id
                                            }),
                                            a = (r.user && r.user.followers && r.user.followers.edges || []).filter(function(e) {
                                                return e && e.node && e.node.id
                                            });
                                        return {
                                            user: i.__assign({}, r.user, {
                                                followers: i.__assign({}, t, {
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
            r.d(n, "REQUEST_LIMIT", function() {
                return 15
            }), r.d(n, "ChannelFollowersContentComponent", function() {
                return c
            }), r.d(n, "ChannelFollowersContent", function() {
                return m
            })
        },
        ghdf: function(e, n, r) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelFollowers"
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
                                        value: "followers"
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
                    end: 316
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/user-card/queries/user-card-fragment.gql"\nquery ChannelFollowers($login: String $limit: Int $cursor: Cursor $order: SortOrder) {\nuser(login: $login) {\nid\nfollowers(first: $limit after: $cursor order: $order) {\nedges {\ncursor\nnode {\nid\n...userCardFragment\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var t = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !t[n] && (t[n] = !0, !0)
                })
            }(r("xXGc").definitions)), e.exports = i
        },
        rdDs: function(e, n, r) {
            "use strict";
            var i, t = r("mrSG"),
                o = r("q1tI"),
                a = r("/7QA"),
                l = r("ZDlU"),
                s = r("8/mp"),
                d = r("bdHe"),
                u = r("jytb"),
                c = r("Ue10");
            ! function(e) {
                e.DESC = "DESC", e.ASC = "ASC"
            }(i || (i = {}));
            var m = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return t.__extends(n, e), n.prototype.render = function() {
                    return o.createElement(c.Xa, {
                        fullWidth: !0,
                        padding: {
                            x: 3,
                            y: 2
                        }
                    }, this.getFollowCards(), o.createElement(s.a, {
                        loadMore: this.props.loadMore,
                        enabled: this.props.hasNextPage && !this.props.loading,
                        pixelThreshold: 100
                    }), this.props.loading && o.createElement(c.Za, {
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
                        n = this.props.followEdge && this.props.followEdge.map(function(n) {
                            return n && n.node && n.node.id ? (e = !1, o.createElement(c.Xa, {
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
                    return n && n.length && !e ? o.createElement(c.Xa, {
                        display: c.X.Flex,
                        flexGrow: 1,
                        fullHeight: !0
                    }, o.createElement(c.Vb, {
                        placeholderItems: 10,
                        center: !0,
                        gutterSize: c.Xb.Small,
                        childWidth: c.Wb.Large
                    }, n)) : o.createElement(c.Xa, {
                        "data-test-selector": "no-follow-users",
                        margin: {
                            top: 5
                        },
                        display: c.X.Flex,
                        flexDirection: c.Aa.Row,
                        justifyContent: c.Wa.Center
                    }, o.createElement(c.W, {
                        type: c.Pb.H4,
                        color: c.O.Alt2,
                        italic: !0
                    }, Object(a.d)("No Users Found", "ChannelFollowListing")))
                }, n
            }(o.Component);
            r.d(n, !1, function() {
                return 15
            }), r.d(n, "b", function() {
                return i
            }), r.d(n, !1, function() {
                return "no-follow-users"
            }), r.d(n, "a", function() {
                return m
            })
        }
    }
]);