webpackJsonp([73], {
    "9+OC": function(e, n, t) {
        "use strict";
        t("TToO");
        var r = t("BzvE"),
            i = (t.n(r), t("IWpL"));
        t.o(i, "PageviewLocation") && t.d(n, "PageviewLocation", function() {
            return i.PageviewLocation
        }), t.o(i, "PageviewMedium") && t.d(n, "PageviewMedium", function() {
            return i.PageviewMedium
        })
    },
    "H+V/": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("TToO"),
            i = t("GiK3"),
            s = t("3zLD"),
            a = t("RH2O"),
            o = t("2KeS"),
            d = t("6sO2"),
            u = t("7vx8"),
            c = t("j7/Y"),
            l = t("oIkB"),
            m = t("+xm8"),
            g = t("f2i/"),
            p = t("w9tK"),
            f = t("Aj/L"),
            v = t("aBcb"),
            k = t("CSlQ"),
            F = t("9+OC"),
            h = t("yWCw"),
            q = t("zCIC"),
            b = t("sgJd"),
            R = t("iPhu"),
            _ = t("Odds"),
            O = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(n, e), n.prototype.render = function() {
                    return this.props.isLoggedIn ? i.createElement(_._8, {
                        padding: {
                            x: 3,
                            y: 2
                        }
                    }, i.createElement(b.a, {
                        activeTab: b.b.Requests
                    }), this.renderContent(), i.createElement(_._8, {
                        display: _.R.Flex,
                        justifyContent: _._7.Center
                    }, this.props.loading && i.createElement(_._10, null))) : (this.props.login(), i.createElement(h.a, {
                        message: Object(d.d)("You must be logged in to view this page", "FriendRequestsPage")
                    }))
                }, n.prototype.renderContent = function() {
                    if (this.props.isLoggedIn && !this.props.hasLoaded) return null;
                    if (this.props.error) return i.createElement(h.a, {
                        message: Object(d.d)("Failed to load friend requests", "FriendRequestsPage")
                    });
                    if (0 === this.props.friendRequestsUserData.filter(function(e) {
                            return e && e.node && e.node.id
                        }).length) return i.createElement(_._8, {
                        textAlign: _._45.Center,
                        padding: {
                            y: 5
                        }
                    }, i.createElement(_.Q, {
                        color: _.K.Alt2,
                        fontSize: _.V.Size4,
                        italic: !0
                    }, Object(d.d)("You have no friend requests!", "FriendRequestsPage")));
                    var e = this.props.friendRequestsUserData.map(function(e) {
                        return e && e.node && e.node.id ? i.createElement(_._8, {
                            key: e.node.id,
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(R.a, {
                            id: e.node.id,
                            showButtonsOnHover: !0,
                            userData: {
                                user: e.node
                            }
                        })) : null
                    });
                    return i.createElement(_._55, {
                        center: !0,
                        childWidth: _._56.Large,
                        gutterSize: _._57.Small,
                        placeholderItems: 10
                    }, e, i.createElement(q.a, {
                        enabled: this.props.canLoadMore,
                        loadMore: this.props.onLoadMore,
                        pixelThreshold: 100
                    }))
                }, n
            }(i.Component),
            U = t("ouEZ"),
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
                                            query: U,
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
                                                            edges: Object(l.c)(s, a)
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
                    d.o.setPageTitle(Object(d.d)("Friend Requests", "FriendsPage")), y(this.props) && this.props.latencyTracking.reportInteractive()
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
                    return i.createElement(O, r.__assign({}, n))
                }, n
            }(i.Component);

        function y(e) {
            return !e.isLoggedIn
        }
        var N = Object(s.compose)(Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(f.d)(e)
            }
        }, function(e) {
            return Object(o.b)({
                login: function() {
                    return Object(g.f)(m.a.FriendsPage)
                }
            }, e)
        }), Object(u.a)(U, {
            skip: y,
            options: function() {
                return {
                    notifyOnNetworkStatusChange: !0,
                    variables: {
                        limit: 20
                    }
                }
            }
        }), Object(u.a)(v, {
            name: "clearUnreadFriendRequests"
        }), Object(k.d)("FriendRequestsPage", {
            destination: p.a.FriendRequests
        }), Object(c.a)({
            location: F.PageviewLocation.FriendRequests
        }))(S);
        t.d(n, "FriendRequestsPage", function() {
            return N
        })
    },
    ouEZ: function(e, n, t) {
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
        r.definitions = r.definitions.concat(t("Adn1").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var n = e.name.value;
            return !i[n] && (i[n] = !0, !0)
        })), e.exports = r
    },
    sgJd: function(e, n, t) {
        "use strict";
        var r, i = t("GiK3"),
            s = t("6sO2"),
            a = t("Odds");
        ! function(e) {
            e[e.Friends = 0] = "Friends", e[e.Requests = 1] = "Requests"
        }(r || (r = {}));
        var o = function(e) {
            return i.createElement(a._8, {
                margin: {
                    bottom: 2
                }
            }, i.createElement(a.Q, {
                type: a._49.H2
            }, Object(s.d)("Friends", "FriendsHeader")), i.createElement(a._8, {
                margin: {
                    top: 1
                }
            }, i.createElement(a._37, null, i.createElement(a._36, {
                active: e.activeTab === r.Friends,
                linkTo: "/friends"
            }, Object(s.d)("Your Friends", "FriendsHeader")), i.createElement(a._36, {
                active: e.activeTab === r.Requests,
                linkTo: "/friends/requests"
            }, Object(s.d)("Friend Requests", "FriendsHeader")))))
        };
        t.d(n, "b", function() {
            return r
        }), t.d(n, "a", function() {
            return o
        })
    }
});
//# sourceMappingURL=pages.friend-requests-e0086aa8d15d2325ca766d9fcdb3da4e.js.map