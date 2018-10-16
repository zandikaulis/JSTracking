(window.webpackJsonp = window.webpackJsonp || []).push([
    [58], {
        "2W9R": function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t("mrSG"),
                i = t("q1tI"),
                a = t("oJmH"),
                o = t("/MKj"),
                s = t("fvjX"),
                d = t("/7QA"),
                c = t("yR8l"),
                u = t("V+GM"),
                l = t("1/iK"),
                f = t("y5D0"),
                p = t("NvVO"),
                g = t("kRBY"),
                m = t("GnwI"),
                v = t("3lt/"),
                h = t("ZDlU"),
                b = t("ff13"),
                y = t("jytb"),
                k = t("Ue10"),
                F = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        t.state = {
                            filteredUsers: []
                        };
                        var r = n.friendsData.filter(function(e) {
                            return e && e.node && e.node.id
                        }).map(function(e) {
                            return e.node
                        });
                        return t.state = {
                            filteredUsers: t.sortUserData(r)
                        }, t
                    }
                    return r.__extends(n, e), n.prototype.componentWillReceiveProps = function(e) {
                        if (this.detectUserDataChange(this.props, e)) {
                            var n = e.friendsData.filter(function(e) {
                                return e && e.node && e.node.id
                            }).map(function(e) {
                                return e.node
                            });
                            this.setState({
                                filteredUsers: this.sortUserData(n)
                            })
                        }
                    }, n.prototype.render = function() {
                        return this.props.isLoggedIn ? i.createElement(k.Wa, {
                            padding: {
                                x: 3,
                                y: 2
                            }
                        }, i.createElement(b.a, {
                            activeTab: b.b.Friends
                        }), this.renderContent(), i.createElement(k.Wa, {
                            display: k.X.Flex,
                            justifyContent: k.Va.Center
                        }, this.props.loading && i.createElement(k.Ya, null))) : (this.props.login(), i.createElement(h.a, {
                            message: Object(d.d)("You must be logged in to view this page", "FriendsPage")
                        }))
                    }, n.prototype.renderContent = function() {
                        if (!this.props.isLoggedIn || this.props.loading) return null;
                        if (this.props.error) return i.createElement(h.a, {
                            message: Object(d.d)("Failed to load friends", "FriendRequestsPage")
                        });
                        if (0 === this.state.filteredUsers.length) return i.createElement(k.Wa, {
                            textAlign: k.Jb.Center,
                            padding: {
                                y: 5
                            }
                        }, i.createElement(k.W, {
                            color: k.O.Alt2,
                            fontSize: k.Ba.Size4,
                            italic: !0
                        }, Object(d.d)("You don't have any friends yet. :(", "FriendsPage")));
                        var e = this.state.filteredUsers.map(function(e) {
                            return e.id ? i.createElement(k.Wa, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(y.b, {
                                id: e.id,
                                bodyType: y.c.Presence,
                                showButtonsOnHover: !0,
                                userData: {
                                    user: e
                                }
                            })) : null
                        });
                        return i.createElement(k.Tb, {
                            center: !0,
                            childWidth: k.Ub.Large,
                            gutterSize: k.Vb.Small,
                            placeholderItems: 10
                        }, e)
                    }, n.prototype.detectUserDataChange = function(e, n) {
                        if (e.friendsData.length !== n.friendsData.length) return !0;
                        var t = e.friendsData.filter(function(e) {
                                return e && e.node && e.node.id
                            }),
                            r = n.friendsData.filter(function(e) {
                                return e && e.node && e.node.id
                            });
                        if (t.length !== r.length) return !0;
                        var i = new Set(t.map(function(e) {
                            return e.node.id
                        }));
                        return !!r.find(function(e) {
                            return !i.has(e.node.id)
                        })
                    }, n.prototype.sortUserData = function(e) {
                        return e.length > 500 ? e : e.sort(function(e, n) {
                            return e.displayName && n.displayName ? e.displayName.localeCompare(n.displayName) : 0
                        })
                    }, n
                }(i.Component),
                S = t("IPTG"),
                w = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        d.p.setPageTitle(Object(d.d)("Friends", "FriendsPage")), P(this.props) && this.props.latencyTracking.reportInteractive()
                    }, n.prototype.componentWillReceiveProps = function(e) {
                        this.props.data && 1 === this.props.data.networkStatus && e.data && 1 !== e.data.networkStatus && this.props.latencyTracking.reportInteractive()
                    }, n.prototype.render = function() {
                        var e = this.props.data,
                            n = {
                                error: e && !e.loading && !(e.currentUser && e.currentUser.friends && e.currentUser.friends.edges) || !1,
                                friendsData: e && e.currentUser && e.currentUser.friends && e.currentUser.friends.edges || [],
                                isLoggedIn: this.props.isLoggedIn,
                                loading: e && e.loading || !1,
                                login: this.props.login
                            };
                        return i.createElement(F, r.__assign({}, n))
                    }, n
                }(i.Component);

            function P(e) {
                return !e.isLoggedIn
            }
            var U = Object(a.compose)(Object(o.connect)(function(e) {
                return {
                    isLoggedIn: Object(g.f)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    login: function() {
                        return Object(f.e)(l.a.FriendsPage)
                    }
                }, e)
            }), Object(c.a)(S, {
                skip: P,
                options: {
                    notifyOnNetworkStatusChange: !0
                }
            }), Object(m.b)("FriendsPage", {
                destination: p.a.Friends
            }), Object(u.a)({
                location: v.PageviewLocation.Friends
            }))(w);
            t.d(n, "FriendsPage", function() {
                return U
            })
        },
        "3lt/": function(e, n, t) {
            "use strict";
            t("mrSG"), t("uhBA");
            var r = t("L9xt");
            t.o(r, "PageviewContent") && t.d(n, "PageviewContent", function() {
                return r.PageviewContent
            }), t.o(r, "PageviewLocation") && t.d(n, "PageviewLocation", function() {
                return r.PageviewLocation
            }), t.o(r, "PageviewMedium") && t.d(n, "PageviewMedium", function() {
                return r.PageviewMedium
            }), t.o(r, "SpadeEventType") && t.d(n, "SpadeEventType", function() {
                return r.SpadeEventType
            })
        },
        IPTG: function(e, n, t) {
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
                    var n = e.name.value;
                    return !i[n] && (i[n] = !0, !0)
                })
            }(t("xXGc").definitions)), e.exports = r
        },
        ff13: function(e, n, t) {
            "use strict";
            var r, i = t("q1tI"),
                a = t("/7QA"),
                o = t("Ue10");
            ! function(e) {
                e[e.Friends = 0] = "Friends", e[e.Requests = 1] = "Requests"
            }(r || (r = {}));
            var s = function(e) {
                return i.createElement(o.Wa, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(o.W, {
                    type: o.Nb.H2
                }, Object(a.d)("Friends", "FriendsHeader")), i.createElement(o.Wa, {
                    margin: {
                        top: 1
                    }
                }, i.createElement(o.zb, null, i.createElement(o.yb, {
                    active: e.activeTab === r.Friends,
                    linkTo: "/friends"
                }, Object(a.d)("Your Friends", "FriendsHeader")), i.createElement(o.yb, {
                    active: e.activeTab === r.Requests,
                    linkTo: "/friends/requests"
                }, Object(a.d)("Friend Requests", "FriendsHeader")))))
            };
            t.d(n, "b", function() {
                return r
            }), t.d(n, "a", function() {
                return s
            })
        }
    }
]);