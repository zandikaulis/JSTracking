(window.webpackJsonp = window.webpackJsonp || []).push([
    [58], {
        "O0y+": function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t("mrSG"),
                i = t("q1tI"),
                s = t("/MKj"),
                a = t("fvjX"),
                o = t("/7QA"),
                d = t("yR8l"),
                u = t("V+GM"),
                c = t("geRD"),
                l = t("1/iK"),
                m = t("y5D0"),
                g = t("NvVO"),
                p = t("kRBY"),
                f = t("UptD"),
                v = t("GnwI"),
                k = t("3lt/"),
                F = t("ZDlU"),
                b = t("8/mp"),
                h = t("ff13"),
                q = t("jytb"),
                R = t("Ue10"),
                U = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return this.props.isLoggedIn ? i.createElement(R.Ya, {
                            padding: {
                                x: 3,
                                y: 2
                            }
                        }, i.createElement(h.a, {
                            activeTab: h.b.Requests
                        }), this.renderContent(), i.createElement(R.Ya, {
                            display: R.X.Flex,
                            justifyContent: R.Xa.Center
                        }, this.props.loading && i.createElement(R.ab, null))) : (this.props.login(), i.createElement(F.a, {
                            message: Object(o.d)("You must be logged in to view this page", "FriendRequestsPage")
                        }))
                    }, n.prototype.renderContent = function() {
                        if (this.props.isLoggedIn && !this.props.hasLoaded) return null;
                        if (this.props.error) return i.createElement(F.a, {
                            message: Object(o.d)("Failed to load friend requests", "FriendRequestsPage")
                        });
                        if (0 === this.props.friendRequestsUserData.filter(function(e) {
                                return e && e.node && e.node.id
                            }).length) return i.createElement(R.Ya, {
                            textAlign: R.Sb.Center,
                            padding: {
                                y: 5
                            }
                        }, i.createElement(R.W, {
                            color: R.O.Alt2,
                            fontSize: R.Ca.Size4,
                            italic: !0
                        }, Object(o.d)("You have no friend requests!", "FriendRequestsPage")));
                        var e = this.props.friendRequestsUserData.map(function(e) {
                            return e && e.node && e.node.id ? i.createElement(R.Ya, {
                                key: e.node.id,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(q.b, {
                                id: e.node.id,
                                showButtonsOnHover: !0,
                                userData: {
                                    user: e.node
                                }
                            })) : null
                        });
                        return i.createElement(R.cc, {
                            center: !0,
                            childWidth: R.dc.Large,
                            gutterSize: R.ec.Small,
                            placeholderItems: 10
                        }, e, i.createElement(b.a, {
                            enabled: this.props.canLoadMore,
                            loadMore: this.props.onLoadMore,
                            pixelThreshold: 100
                        }))
                    }, n
                }(i.Component),
                y = t("nFAG"),
                S = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.loadMore = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e, n;
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return (e = this.props.data) && e.currentUser && e.currentUser.incomingFriendRequests ? (n = e.currentUser.incomingFriendRequests.edges, [4, e.fetchMore({
                                                query: y,
                                                variables: r.__assign({}, e.variables, {
                                                    cursor: n[n.length - 1].cursor
                                                }),
                                                updateQuery: function(n, t) {
                                                    var i = t.fetchMoreResult;
                                                    if (!i.currentUser || !i.currentUser.incomingFriendRequests) return n;
                                                    var s = (e.currentUser && e.currentUser.incomingFriendRequests && e.currentUser.incomingFriendRequests.edges || []).filter(function(e) {
                                                            return e.node && e.node.id
                                                        }),
                                                        a = i.currentUser.incomingFriendRequests.edges.filter(function(e) {
                                                            return e.node && e.node.id
                                                        });
                                                    return {
                                                        currentUser: r.__assign({}, i.currentUser, {
                                                            incomingFriendRequests: r.__assign({}, i.currentUser && i.currentUser.incomingFriendRequests, {
                                                                edges: Object(c.c)(s, a)
                                                            })
                                                        })
                                                    }
                                                }
                                            })]) : [2, Promise.resolve()];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        o.p.setPageTitle(Object(o.d)("Friend Requests", "FriendsPage")), N(this.props) && this.props.latencyTracking.reportInteractive()
                    }, n.prototype.componentWillReceiveProps = function(e) {
                        this.props.data && 1 === this.props.data.networkStatus && e.data && 1 !== e.data.networkStatus && (this.props.latencyTracking.reportInteractive(), e.data.currentUser && e.data.currentUser.incomingFriendRequests && this.props.clearUnreadFriendRequests())
                    }, n.prototype.render = function() {
                        var e = this.props.data,
                            n = {
                                canLoadMore: e && !e.loading && e.currentUser && e.currentUser.incomingFriendRequests && e.currentUser.incomingFriendRequests.pageInfo.hasNextPage || !1,
                                error: e && !e.loading && !(e.currentUser && e.currentUser.incomingFriendRequests && e.currentUser.incomingFriendRequests.edges) || !1,
                                friendRequestsUserData: e && e.currentUser && e.currentUser.incomingFriendRequests && e.currentUser.incomingFriendRequests.edges || [],
                                hasLoaded: e && 1 !== e.networkStatus || !1,
                                isLoggedIn: this.props.isLoggedIn,
                                loading: e && e.loading || !1,
                                login: this.props.login,
                                onLoadMore: this.loadMore
                            };
                        return i.createElement(U, r.__assign({}, n))
                    }, n
                }(i.Component);

            function N(e) {
                return !e.isLoggedIn
            }
            var O = Object(a.compose)(Object(s.connect)(function(e) {
                return {
                    isLoggedIn: Object(p.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(m.e)(l.a.FriendsPage)
                    }
                }, e)
            }), Object(d.a)(y, {
                skip: N,
                options: function() {
                    return {
                        notifyOnNetworkStatusChange: !0,
                        variables: {
                            limit: 20
                        }
                    }
                }
            }), Object(d.a)(f, {
                name: "clearUnreadFriendRequests"
            }), Object(v.b)("FriendRequestsPage", {
                destination: g.a.FriendRequests
            }), Object(u.a)({
                location: k.PageviewLocation.FriendRequests
            }))(S);
            t.d(n, "FriendRequestsPage", function() {
                return O
            })
        },
        ff13: function(e, n, t) {
            "use strict";
            var r, i = t("q1tI"),
                s = t("/7QA"),
                a = t("Ue10");
            ! function(e) {
                e[e.Friends = 0] = "Friends", e[e.Requests = 1] = "Requests"
            }(r || (r = {}));
            var o = function(e) {
                return i.createElement(a.Ya, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(a.W, {
                    type: a.Wb.H2
                }, Object(s.d)("Friends", "FriendsHeader")), i.createElement(a.Ya, {
                    margin: {
                        top: 1
                    }
                }, i.createElement(a.Hb, null, i.createElement(a.Gb, {
                    active: e.activeTab === r.Friends,
                    linkTo: "/friends"
                }, Object(s.d)("Your Friends", "FriendsHeader")), i.createElement(a.Gb, {
                    active: e.activeTab === r.Requests,
                    linkTo: "/friends/requests"
                }, Object(s.d)("Friend Requests", "FriendsHeader")))))
            };
            t.d(n, "b", function() {
                return r
            }), t.d(n, "a", function() {
                return o
            })
        },
        nFAG: function(e, n, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FriendRequests"
                    },
                    variableDefinitions: [{
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
                                        value: "incomingFriendRequests"
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
                    end: 272
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/user-card/queries/user-card-fragment.gql"\nquery FriendRequests($limit: Int $cursor: Cursor) {\ncurrentUser {\nid\nincomingFriendRequests(first: $limit after: $cursor) {\nedges {\ncursor\nnode {\nid\n...userCardFragment\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !i[n] && (i[n] = !0, !0)
                })
            }(t("xXGc").definitions)), e.exports = r
        }
    }
]);