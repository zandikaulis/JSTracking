(window.webpackJsonp = window.webpackJsonp || []).push([
    [57], {
        "2W9R": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("oJmH"),
                s = n("/MKj"),
                o = n("fvjX"),
                d = n("/7QA"),
                c = n("yR8l"),
                u = n("V+GM"),
                l = n("1/iK"),
                f = n("y5D0"),
                p = n("NvVO"),
                m = n("kRBY"),
                g = n("GnwI"),
                v = n("3lt/"),
                h = n("ZDlU"),
                b = n("ff13"),
                k = n("jytb"),
                F = n("Ue10"),
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
                        return this.props.isLoggedIn ? i.createElement(F.Ya, {
                            padding: {
                                x: 3,
                                y: 2
                            }
                        }, i.createElement(b.a, {
                            activeTab: b.b.Friends
                        }), this.renderContent(), i.createElement(F.Ya, {
                            display: F.X.Flex,
                            justifyContent: F.Xa.Center
                        }, this.props.loading && i.createElement(F.ab, null))) : (this.props.login(), i.createElement(h.a, {
                            message: Object(d.d)("You must be logged in to view this page", "FriendsPage")
                        }))
                    }, t.prototype.renderContent = function() {
                        if (!this.props.isLoggedIn || this.props.loading) return null;
                        if (this.props.error) return i.createElement(h.a, {
                            message: Object(d.d)("Failed to load friends", "FriendRequestsPage")
                        });
                        if (0 === this.state.filteredUsers.length) return i.createElement(F.Ya, {
                            textAlign: F.Sb.Center,
                            padding: {
                                y: 5
                            }
                        }, i.createElement(F.W, {
                            color: F.O.Alt2,
                            fontSize: F.Ca.Size4,
                            italic: !0
                        }, Object(d.d)("You don't have any friends yet. :(", "FriendsPage")));
                        var e = this.state.filteredUsers.map(function(e) {
                            return e.id ? i.createElement(F.Ya, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(k.b, {
                                id: e.id,
                                bodyType: k.c.Presence,
                                showButtonsOnHover: !0,
                                userData: {
                                    user: e
                                }
                            })) : null
                        });
                        return i.createElement(F.cc, {
                            center: !0,
                            childWidth: F.dc.Large,
                            gutterSize: F.ec.Small,
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
                S = n("IPTG"),
                O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        d.p.setPageTitle(Object(d.d)("Friends", "FriendsPage")), U(this.props) && this.props.latencyTracking.reportInteractive()
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

            function U(e) {
                return !e.isLoggedIn
            }
            var D = Object(a.compose)(Object(s.connect)(function(e) {
                return {
                    isLoggedIn: Object(m.f)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    login: function() {
                        return Object(f.e)(l.a.FriendsPage)
                    }
                }, e)
            }), Object(c.a)(S, {
                skip: U,
                options: {
                    notifyOnNetworkStatusChange: !0
                }
            }), Object(g.b)("FriendsPage", {
                destination: p.a.Friends
            }), Object(u.a)({
                location: v.PageviewLocation.Friends
            }))(O);
            n.d(t, "FriendsPage", function() {
                return D
            })
        },
        IPTG: function(e, t, n) {
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
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("xXGc").definitions)), e.exports = r
        },
        ff13: function(e, t, n) {
            "use strict";
            var r, i = n("q1tI"),
                a = n("/7QA"),
                s = n("Ue10");
            ! function(e) {
                e[e.Friends = 0] = "Friends", e[e.Requests = 1] = "Requests"
            }(r || (r = {}));
            var o = function(e) {
                return i.createElement(s.Ya, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(s.W, {
                    type: s.Wb.H2
                }, Object(a.d)("Friends", "FriendsHeader")), i.createElement(s.Ya, {
                    margin: {
                        top: 1
                    }
                }, i.createElement(s.Hb, null, i.createElement(s.Gb, {
                    active: e.activeTab === r.Friends,
                    linkTo: "/friends"
                }, Object(a.d)("Your Friends", "FriendsHeader")), i.createElement(s.Gb, {
                    active: e.activeTab === r.Requests,
                    linkTo: "/friends/requests"
                }, Object(a.d)("Friend Requests", "FriendsHeader")))))
            };
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            })
        }
    }
]);