(window.webpackJsonp = window.webpackJsonp || []).push([
    [59], {
        "2W9R": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("oJmH"),
                o = n("/MKj"),
                s = n("fvjX"),
                d = n("/7QA"),
                c = n("yR8l"),
                u = n("V+GM"),
                l = n("1/iK"),
                p = n("y5D0"),
                f = n("NvVO"),
                g = n("kRBY"),
                m = n("GnwI"),
                v = n("3lt/"),
                h = n("ZDlU"),
                b = n("ff13"),
                y = n("jytb"),
                k = n("Ue10"),
                F = function(e) {
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
                        return this.props.isLoggedIn ? i.createElement(k.Ya, {
                            padding: {
                                x: 3,
                                y: 2
                            }
                        }, i.createElement(b.a, {
                            activeTab: b.b.Friends
                        }), this.renderContent(), i.createElement(k.Ya, {
                            display: k.X.Flex,
                            justifyContent: k.Xa.Center
                        }, this.props.loading && i.createElement(k.ab, null))) : (this.props.login(), i.createElement(h.a, {
                            message: Object(d.d)("You must be logged in to view this page", "FriendsPage")
                        }))
                    }, t.prototype.renderContent = function() {
                        if (!this.props.isLoggedIn || this.props.loading) return null;
                        if (this.props.error) return i.createElement(h.a, {
                            message: Object(d.d)("Failed to load friends", "FriendRequestsPage")
                        });
                        if (0 === this.state.filteredUsers.length) return i.createElement(k.Ya, {
                            textAlign: k.Sb.Center,
                            padding: {
                                y: 5
                            }
                        }, i.createElement(k.W, {
                            color: k.O.Alt2,
                            fontSize: k.Ca.Size4,
                            italic: !0
                        }, Object(d.d)("You don't have any friends yet. :(", "FriendsPage")));
                        var e = this.state.filteredUsers.map(function(e) {
                            return e.id ? i.createElement(k.Ya, {
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
                        return i.createElement(k.cc, {
                            center: !0,
                            childWidth: k.dc.Large,
                            gutterSize: k.ec.Small,
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
                w = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        d.p.setPageTitle(Object(d.d)("Friends", "FriendsPage")), D(this.props) && this.props.latencyTracking.reportInteractive()
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
                        return i.createElement(F, r.__assign({}, t))
                    }, t
                }(i.Component);

            function D(e) {
                return !e.isLoggedIn
            }
            var P = Object(a.compose)(Object(o.connect)(function(e) {
                return {
                    isLoggedIn: Object(g.f)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    login: function() {
                        return Object(p.e)(l.a.FriendsPage)
                    }
                }, e)
            }), Object(c.a)(S, {
                skip: D,
                options: {
                    notifyOnNetworkStatusChange: !0
                }
            }), Object(m.b)("FriendsPage", {
                destination: f.a.Friends
            }), Object(u.a)({
                location: v.PageviewLocation.Friends
            }))(w);
            n.d(t, "FriendsPage", function() {
                return P
            })
        },
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var r = n("L9xt");
            n.o(r, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return r.PageviewContent
            }), n.o(r, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return r.PageviewLocation
            }), n.o(r, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return r.PageviewMedium
            }), n.o(r, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return r.SpadeEventType
            }), n.o(r, "TwitchDataType") && n.d(t, "TwitchDataType", function() {
                return r.TwitchDataType
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
                o = n("Ue10");
            ! function(e) {
                e[e.Friends = 0] = "Friends", e[e.Requests = 1] = "Requests"
            }(r || (r = {}));
            var s = function(e) {
                return i.createElement(o.Ya, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(o.W, {
                    type: o.Wb.H2
                }, Object(a.d)("Friends", "FriendsHeader")), i.createElement(o.Ya, {
                    margin: {
                        top: 1
                    }
                }, i.createElement(o.Hb, null, i.createElement(o.Gb, {
                    active: e.activeTab === r.Friends,
                    linkTo: "/friends"
                }, Object(a.d)("Your Friends", "FriendsHeader")), i.createElement(o.Gb, {
                    active: e.activeTab === r.Requests,
                    linkTo: "/friends/requests"
                }, Object(a.d)("Friend Requests", "FriendsHeader")))))
            };
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return s
            })
        }
    }
]);