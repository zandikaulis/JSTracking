webpackJsonp([71], {
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
    "j7/Y": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("OAwv"),
            o = n("GiK3"),
            a = n("F8kA"),
            s = n("6sO2");

        function d(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var o = i.referenceTracking,
                                    a = o.content,
                                    d = o.medium,
                                    c = o.content_index;
                                s.o.tracking.trackPageview(r.__assign({
                                    content: a,
                                    medium: d,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return o.createElement(t, r.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var r = "",
                                o = i.stringify(t);
                            o.length > 0 && (r = "?" + o), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return n
                    }, a
                }(o.Component);
                return Object(a.f)(n)
            }
        }
        n.d(t, "a", function() {
            return d
        })
    },
    mlfa: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            i = n("GiK3"),
            o = n("3zLD"),
            a = n("RH2O"),
            s = n("2KeS"),
            d = n("6sO2"),
            c = n("7vx8"),
            u = n("j7/Y"),
            l = n("+xm8"),
            p = n("f2i/"),
            f = n("w9tK"),
            m = n("Aj/L"),
            g = n("CSlQ"),
            h = n("9+OC"),
            v = n("yWCw"),
            k = n("sgJd"),
            _ = n("iPhu"),
            y = n("Odds"),
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
                    return this.props.isLoggedIn ? i.createElement(y._8, {
                        padding: {
                            x: 3,
                            y: 2
                        }
                    }, i.createElement(k.a, {
                        activeTab: k.b.Friends
                    }), this.renderContent(), i.createElement(y._8, {
                        display: y.R.Flex,
                        justifyContent: y._7.Center
                    }, this.props.loading && i.createElement(y._10, null))) : (this.props.login(), i.createElement(v.a, {
                        message: Object(d.d)("You must be logged in to view this page", "FriendsPage")
                    }))
                }, t.prototype.renderContent = function() {
                    if (!this.props.isLoggedIn || this.props.loading) return null;
                    if (this.props.error) return i.createElement(v.a, {
                        message: Object(d.d)("Failed to load friends", "FriendRequestsPage")
                    });
                    if (0 === this.state.filteredUsers.length) return i.createElement(y._8, {
                        textAlign: y._45.Center,
                        padding: {
                            y: 5
                        }
                    }, i.createElement(y.Q, {
                        color: y.K.Alt2,
                        fontSize: y.V.Size4,
                        italic: !0
                    }, Object(d.d)("You don't have any friends yet. :(", "FriendsPage")));
                    var e = this.state.filteredUsers.map(function(e) {
                        return e.id ? i.createElement(y._8, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(_.a, {
                            id: e.id,
                            showButtonsOnHover: !0,
                            userData: {
                                user: e
                            }
                        })) : null
                    });
                    return i.createElement(y._55, {
                        center: !0,
                        childWidth: y._56.Large,
                        gutterSize: y._57.Small,
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
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.o.setPageTitle(Object(d.d)("Friends", "FriendsPage")), S(this.props) && this.props.latencyTracking.reportInteractive()
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

        function S(e) {
            return !e.isLoggedIn
        }
        var T = Object(o.compose)(Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(m.d)(e)
            }
        }, function(e) {
            return Object(s.b)({
                login: function() {
                    return Object(p.f)(l.a.FriendsPage)
                }
            }, e)
        }), Object(c.a)(O, {
            skip: S,
            options: {
                notifyOnNetworkStatusChange: !0
            }
        }), Object(g.d)("FriendsPage", {
            destination: f.a.Friends
        }), Object(u.a)({
            location: h.PageviewLocation.Friends
        }))(b);
        n.d(t, "FriendsPage", function() {
            return T
        })
    },
    sgJd: function(e, t, n) {
        "use strict";
        var r, i = n("GiK3"),
            o = n("6sO2"),
            a = n("Odds");
        ! function(e) {
            e[e.Friends = 0] = "Friends", e[e.Requests = 1] = "Requests"
        }(r || (r = {}));
        var s = function(e) {
            return i.createElement(a._8, {
                margin: {
                    bottom: 2
                }
            }, i.createElement(a.Q, {
                type: a._49.H2
            }, Object(o.d)("Friends", "FriendsHeader")), i.createElement(a._8, {
                margin: {
                    top: 1
                }
            }, i.createElement(a._37, null, i.createElement(a._36, {
                active: e.activeTab === r.Friends,
                linkTo: "/friends"
            }, Object(o.d)("Your Friends", "FriendsHeader")), i.createElement(a._36, {
                active: e.activeTab === r.Requests,
                linkTo: "/friends/requests"
            }, Object(o.d)("Friend Requests", "FriendsHeader")))))
        };
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return s
        })
    }
});
//# sourceMappingURL=pages.friends-3ba2777d79d9b0d67e66ca0350d6aecb.js.map