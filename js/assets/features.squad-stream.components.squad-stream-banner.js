(window.webpackJsonp = window.webpackJsonp || []).push([
    [126], {
        "/guG": function(e, n, a) {
            "use strict";
            a.d(n, "b", function() {
                return u
            }), a.d(n, "a", function() {
                return d
            }), a.d(n, "c", function() {
                return s
            });
            var t = a("mrSG"),
                i = a("/7QA"),
                r = a("2xye");

            function u(e) {
                return t.__awaiter(this, void 0, void 0, function() {
                    var n, a;
                    return t.__generator(this, function(t) {
                        return n = null, e.channelID && (n = parseInt(e.channelID, 10), isNaN(n) && (n = null)), a = {
                            squad_stream_id: e.squadStreamID || null,
                            squad_stream_session_id: e.squadStreamSessionID || null,
                            squad_stream_presentation_id: e.squadStreamPresentationID || null,
                            layout: e.layout || null,
                            channel_id: n,
                            player_order: e.playerOrder || null,
                            total_players: e.totalPlayers || null,
                            chat_shown: e.chatShown
                        }, [2, i.p.tracking.track(r.SpadeEventType.SquadStreamPresentation, a)]
                    })
                })
            }

            function d(e) {
                return t.__awaiter(this, void 0, void 0, function() {
                    var n, a, u;
                    return t.__generator(this, function(t) {
                        return n = null, e.userID && (n = parseInt(e.userID, 10), isNaN(n) && (n = null)), a = null, e.channelID && (a = parseInt(e.channelID, 10), isNaN(a) && (a = null)), u = {
                            action: e.action || null,
                            user_id: n,
                            channel: e.channel || null,
                            channel_id: a,
                            time: e.time || null,
                            squad_stream_id: e.squadStreamID || null
                        }, [2, i.p.tracking.track(r.SpadeEventType.SquadStreamBannerAction, u)]
                    })
                })
            }

            function s(e) {
                return t.__awaiter(this, void 0, void 0, function() {
                    var n, a, u;
                    return t.__generator(this, function(t) {
                        return n = null, e.userID && (n = parseInt(e.userID, 10), isNaN(n) && (n = null)), a = null, e.channelID && (a = parseInt(e.channelID, 10), isNaN(a) && (a = null)), u = {
                            element: e.element || null,
                            type: e.type || null,
                            location: e.location || null,
                            user_id: n,
                            channel_id: a,
                            player_order: e.playerOrder || null,
                            total_players: e.totalPlayers || null,
                            squad_stream_id: e.squadStreamID || null,
                            squad_stream_session_id: e.squadStreamSessionID || null,
                            is_active: e.isActive
                        }, [2, i.p.tracking.track(r.SpadeEventType.SquadStreamViewerAction, u)]
                    })
                })
            }
        },
        FfRw: function(e, n, a) {
            "use strict";
            a.d(n, "a", function() {
                return r
            });
            var t = a("0Log"),
                i = a("DMoW");

            function r(e) {
                if (!e || !e.squad) return null;
                for (var n = [], a = 0, r = e.squad.members; a < r.length; a++) {
                    var u = r[a],
                        d = {
                            __typename: "User",
                            id: u.id,
                            login: u.login,
                            displayName: u.display_name,
                            profileImageURL: u.profile_image_url_150
                        };
                    n.push(d)
                }
                return {
                    __typename: "SquadStream",
                    id: e.squad.id,
                    status: function(e) {
                        switch (e) {
                            case t.SquadStatus.Pending:
                                return i.G.PENDING;
                            case t.SquadStatus.Live:
                                return i.G.LIVE;
                            case t.SquadStatus.Ended:
                            default:
                                return i.G.ENDED
                        }
                    }(e.squad.status),
                    members: n
                }
            }
        },
        KGyh: function(e, n, a) {
            "use strict";
            a.r(n);
            var t = a("mrSG"),
                i = a("q1tI"),
                r = a("oJmH"),
                u = a("9C/b"),
                d = a("/7QA"),
                s = a("yR8l"),
                o = a("eDVu"),
                l = a("0Log"),
                c = a("/aPz"),
                m = a("DMoW"),
                p = a("GnwI"),
                S = a("aKsW"),
                f = a("FfRw"),
                v = a("egMT"),
                g = a("/guG"),
                h = a("Ue10"),
                k = a("qcLq"),
                q = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.goToSquadPage = function() {
                            n.trackBannerAction(S.a.Click), n.props.history.push("/" + n.props.channelLogin + "/squad")
                        }, n.trackBannerAction = function(e) {
                            Object(g.a)({
                                action: e,
                                userID: n.props.data.currentUser && n.props.data.currentUser.id,
                                channel: n.props.channelLogin,
                                channelID: n.props.channelID,
                                time: new Date,
                                squadStreamID: n.props.data.user && n.props.data.user.squadStream && n.props.data.user.squadStream.id
                            })
                        }, n
                    }
                    return t.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.shouldRender(this.props) && this.trackBannerAction(S.a.View), this.props.triggerPlayerReposition()
                    }, n.prototype.componentDidUpdate = function(e) {
                        !this.shouldRender(e) && this.shouldRender(this.props) && this.trackBannerAction(S.a.View), this.props.triggerPlayerReposition()
                    }, n.prototype.render = function() {
                        if (!this.shouldRender(this.props)) return null;
                        var e = this.props.data && this.props.data.user && this.props.data.user.squadStream && this.props.data.user.squadStream.members || [];
                        if (!e || 0 === e.length) return null;
                        var n = [];
                        return e.forEach(function(e) {
                            e.id && e.profileImageURL && n.push(i.createElement(h.Wa, {
                                key: e.id,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(h.q, {
                                size: 30,
                                alt: Object(d.d)("avatar", "SquadStreamBanner"),
                                src: e.profileImageURL
                            })))
                        }), i.createElement(h.i, {
                            type: h.n.SlideInBottom,
                            delay: h.j.Medium,
                            duration: h.k.Medium,
                            enabled: !0
                        }, i.createElement(h.xb, {
                            display: h.X.Flex,
                            background: h.r.AccentAlt2,
                            alignItems: h.f.Center,
                            padding: 1
                        }, i.createElement(h.xb, {
                            display: h.X.Flex,
                            color: h.O.Overlay
                        }, n), i.createElement(h.Wa, null, i.createElement(h.W, {
                            noWrap: !0,
                            type: h.Nb.Span,
                            color: h.O.Overlay,
                            fontSize: h.Ba.Size5
                        }, Object(d.d)("{squadLeader} is Squad Streaming", {
                            squadLeader: i.createElement(h.W, {
                                bold: !0,
                                noWrap: !0,
                                type: h.Nb.Span,
                                color: h.O.Overlay,
                                fontSize: h.Ba.Size5
                            }, this.props.channelDisplayName || this.props.channelLogin)
                        }, "SquadStreamBanner"))), i.createElement(h.Wa, {
                            display: h.X.Flex,
                            alignItems: h.f.Start,
                            flexGrow: 1
                        }), i.createElement(h.Wa, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(h.z, {
                            type: h.F.Hollow,
                            overlay: !0,
                            onClick: this.goToSquadPage
                        }, Object(d.d)("Watch Squad", "SquadStreamBanner")))))
                    }, n.prototype.shouldRender = function(e) {
                        return !!Object(v.a)(e.channelLogin) && (!e.data.loading && !e.data.error && (e.data.user && e.data.user.squadStream && e.data.user.squadStream.status === m.G.LIVE || !1))
                    }, n
                }(i.Component),
                y = Object(r.compose)(Object(s.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                }), Object(o.a)(function(e) {
                    return {
                        query: k,
                        variables: {
                            channelLogin: e.channelLogin
                        },
                        topic: Object(c.g)(e.channelID),
                        type: l.PubsubMessageType.Squad,
                        mutator: function(e, n) {
                            var a = Object(f.a)(e);
                            return n.user && (n.user.squadStream = a), n
                        }
                    }
                }), Object(p.b)("SquadStreamBanner", {
                    autoReportInteractive: !0
                }), u.a)(q);
            a.d(n, "SquadStreamBannerComponent", function() {
                return q
            }), a.d(n, "SquadStreamBanner", function() {
                return y
            })
        },
        aKsW: function(e, n, a) {
            "use strict";
            var t, i, r, u;
            a.d(n, "a", function() {
                    return t
                }), a.d(n, "b", function() {
                    return i
                }), a.d(n, "d", function() {
                    return r
                }), a.d(n, "c", function() {
                    return u
                }),
                function(e) {
                    e.View = "view", e.Click = "click"
                }(t || (t = {})),
                function(e) {
                    e.ExitSquadMode = "exit_squad_mode", e.ChannelLink = "channel_link", e.Player = "player", e.Avatar = "avatar", e.ProvideFeedback = "provide_feedback"
                }(i || (i = {})),
                function(e) {
                    e.Hover = "hover", e.Click = "click"
                }(r || (r = {})),
                function(e) {
                    e.TopBar = "top_bar", e.Player = "player", e.ProfileCard = "profile_card", e.EndedState = "ended_state"
                }(u || (u = {}))
        },
        egMT: function(e, n, a) {
            "use strict";
            a.d(n, "a", function() {
                return d
            }), a.d(n, "b", function() {
                return s
            });
            var t = a("/7QA"),
                i = "squad_stream_dashboard",
                r = "squad_stream_feature",
                u = "squad_stream_whitelist";

            function d(e) {
                return "on" === t.b.get(r, "off") && t.b.get(u, []).includes(e)
            }

            function s(e) {
                return "on" === t.b.get(i, "off") && t.b.get(u, []).includes(e)
            }
        },
        fnDh: function(e, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "squadStreamData"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "SquadStream"
                        }
                    },
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
                                value: "status"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "members"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "squadStreamMember"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "squadStreamMember"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User"
                        }
                    },
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
                                value: "login"
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
                                    value: "150"
                                }
                            }],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 173
                }
            };
            a.loc.source = {
                body: "fragment squadStreamData on SquadStream {\nid\nstatus\nmembers {\n...squadStreamMember\n}\n}\nfragment squadStreamMember on User {\nid\nlogin\ndisplayName\nprofileImageURL(width:150)\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        qcLq: function(e, n, a) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SquadStreamBanner_UserSquad"
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
                                        value: "squadStream"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "squadStreamData"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 223
                }
            };
            t.loc.source = {
                body: '#import "twilight/features/squad-stream/models/squad-stream-fragment.gql"\nquery SquadStreamBanner_UserSquad($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\nsquadStream {\n...squadStreamData\n}\n}\ncurrentUser {\nid\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            t.definitions = t.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !i[n] && (i[n] = !0, !0)
                })
            }(a("fnDh").definitions)), e.exports = t
        }
    }
]);