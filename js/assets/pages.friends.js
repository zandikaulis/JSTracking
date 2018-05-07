webpackJsonp([70], {
    "/ohK": function(e, t, n) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Friends"
                },
                variableDefinitions: [],
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
                                    value: "friends"
                                },
                                arguments: [],
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 159
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/user-card/queries/user-card-fragment.gql"\nquery Friends {\ncurrentUser {\nid\nfriends {\nedges {\nnode {\nid\n...userCardFragment\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        r.definitions = r.definitions.concat(n("Adn1").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !i[t] && (i[t] = !0, !0)
        })), e.exports = r
    },
    "9+OC": function(e, t, n) {
        "use strict";
        n("TToO");
        var r = n("BzvE"),
            i = (n.n(r), n("IWpL"));
        n.o(i, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
            return i.PageviewLocation
        })
    },
    mlfa: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            i = n("GiK3"),
            s = n("3zLD"),
            a = n("RH2O"),
            o = n("2KeS"),
            d = n("6sO2"),
            c = n("7vx8"),
            u = n("j7/Y"),
            l = n("+xm8"),
            f = n("f2i/"),
            p = n("w9tK"),
            g = n("Aj/L"),
            m = n("CSlQ"),
            v = n("9+OC"),
            h = n("yWCw"),
            F = n("sgJd"),
            k = n("iPhu"),
            b = n("Odds"),
            y = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.state = {
                        filteredUsers: []
                    };
                    var r = t.friendsData.filter(function(e) {
                        return e && e.node && e.node.id
                    }).map(function(e) {
                        return e.node
                    });
                    return n.state = {
                        filteredUsers: n.sortUserData(r)
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (this.detectUserDataChange(this.props, e)) {
                        var t = e.friendsData.filter(function(e) {
                            return e && e.node && e.node.id
                        }).map(function(e) {
                            return e.node
                        });
                        this.setState({
                            filteredUsers: this.sortUserData(t)
                        })
                    }
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? i.createElement(b._8, {
                        padding: {
                            x: 3,
                            y: 2
                        }
                    }, i.createElement(F.a, {
                        activeTab: F.b.Friends
                    }), this.renderContent(), i.createElement(b._8, {
                        display: b.R.Flex,
                        justifyContent: b._7.Center
                    }, this.props.loading && i.createElement(b._10, null))) : (this.props.login(), i.createElement(h.a, {
                        message: Object(d.d)("You must be logged in to view this page", "FriendsPage")
                    }))
                }, t.prototype.renderContent = function() {
                    if (!this.props.isLoggedIn || this.props.loading) return null;
                    if (this.props.error) return i.createElement(h.a, {
                        message: Object(d.d)("Failed to load friends", "FriendRequestsPage")
                    });
                    if (0 === this.state.filteredUsers.length) return i.createElement(b._8, {
                        textAlign: b._45.Center,
                        padding: {
                            y: 5
                        }
                    }, i.createElement(b.Q, {
                        color: b.K.Alt2,
                        fontSize: b.V.Size4,
                        italic: !0
                    }, Object(d.d)("You don't have any friends yet. :(", "FriendsPage")));
                    var e = this.state.filteredUsers.map(function(e) {
                        return e.id ? i.createElement(b._8, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(k.a, {
                            id: e.id,
                            showButtonsOnHover: !0,
                            userData: {
                                user: e
                            }
                        })) : null
                    });
                    return i.createElement(b._55, {
                        center: !0,
                        childWidth: b._56.Large,
                        gutterSize: b._57.Small,
                        placeholderItems: 10
                    }, e)
                }, t.prototype.detectUserDataChange = function(e, t) {
                    if (e.friendsData.length !== t.friendsData.length) return !0;
                    var n = e.friendsData.filter(function(e) {
                            return e && e.node && e.node.id
                        }),
                        r = t.friendsData.filter(function(e) {
                            return e && e.node && e.node.id
                        });
                    if (n.length !== r.length) return !0;
                    var i = new Set(n.map(function(e) {
                        return e.node.id
                    }));
                    return !!r.find(function(e) {
                        return !i.has(e.node.id)
                    })
                }, t.prototype.sortUserData = function(e) {
                    return e.length > 500 ? e : e.sort(function(e, t) {
                        return e.displayName && t.displayName ? e.displayName.localeCompare(t.displayName) : 0
                    })
                }, t
            }(i.Component),
            O = n("/ohK"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.o.setPageTitle(Object(d.d)("Friends", "FriendsPage")), _(this.props) && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.data && 1 === this.props.data.networkStatus && e.data && 1 !== e.data.networkStatus && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = {
                            error: e && !e.loading && !(e.currentUser && e.currentUser.friends && e.currentUser.friends.edges) || !1,
                            friendsData: e && e.currentUser && e.currentUser.friends && e.currentUser.friends.edges || [],
                            isLoggedIn: this.props.isLoggedIn,
                            loading: e && e.loading || !1,
                            login: this.props.login
                        };
                    return i.createElement(y, r.__assign({}, t))
                }, t
            }(i.Component);

        function _(e) {
            return !e.isLoggedIn
        }
        var j = Object(s.compose)(Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(g.d)(e)
            }
        }, function(e) {
            return Object(o.b)({
                login: function() {
                    return Object(f.f)(l.a.FriendsPage)
                }
            }, e)
        }), Object(c.a)(O, {
            skip: _,
            options: {
                notifyOnNetworkStatusChange: !0
            }
        }), Object(m.d)("FriendsPage", {
            destination: p.a.Friends
        }), Object(u.a)({
            location: v.PageviewLocation.Friends
        }))(S);
        n.d(t, "FriendsPage", function() {
            return j
        })
    },
    sgJd: function(e, t, n) {
        "use strict";
        var r, i = n("GiK3"),
            s = n("6sO2"),
            a = n("Odds");
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
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        })
    }
});
//# sourceMappingURL=pages.friends-b02077500c4ab124cec8c8eef5dc18c3.js.map