(window.webpackJsonp = window.webpackJsonp || []).push([
    [127], {
        "/guG": function(e, n, a) {
            "use strict";
            a.d(n, "b", function() {
                return d
            }), a.d(n, "a", function() {
                return u
            }), a.d(n, "c", function() {
                return s
            });
            var t = a("mrSG"),
                r = a("/7QA"),
                i = a("2xye");

            function d(e) {
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
                        }, [2, r.p.tracking.track(i.SpadeEventType.SquadStreamPresentation, a)]
                    })
                })
            }

            function u(e) {
                return t.__awaiter(this, void 0, void 0, function() {
                    var n, a, d;
                    return t.__generator(this, function(t) {
                        return n = null, e.userID && (n = parseInt(e.userID, 10), isNaN(n) && (n = null)), a = null, e.channelID && (a = parseInt(e.channelID, 10), isNaN(a) && (a = null)), d = {
                            action: e.action || null,
                            user_id: n,
                            channel: e.channel || null,
                            channel_id: a,
                            time: e.time || null,
                            squad_stream_id: e.squadStreamID || null
                        }, [2, r.p.tracking.track(i.SpadeEventType.SquadStreamBannerAction, d)]
                    })
                })
            }

            function s(e) {
                return t.__awaiter(this, void 0, void 0, function() {
                    var n, a, d;
                    return t.__generator(this, function(t) {
                        return n = null, e.userID && (n = parseInt(e.userID, 10), isNaN(n) && (n = null)), a = null, e.channelID && (a = parseInt(e.channelID, 10), isNaN(a) && (a = null)), d = {
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
                        }, [2, r.p.tracking.track(i.SpadeEventType.SquadStreamViewerAction, d)]
                    })
                })
            }
        },
        FfRw: function(e, n, a) {
            "use strict";
            a.d(n, "a", function() {
                return i
            });
            var t = a("0Log"),
                r = a("DMoW");

            function i(e) {
                if (!e || !e.squad) return null;
                for (var n = [], a = 0, i = e.squad.members; a < i.length; a++) {
                    var d = i[a],
                        u = {
                            __typename: "User",
                            id: d.id,
                            login: d.login,
                            displayName: d.display_name,
                            profileImageURL: d.profile_image_url_150
                        };
                    n.push(u)
                }
                return {
                    __typename: "SquadStream",
                    id: e.squad.id,
                    status: function(e) {
                        switch (e) {
                            case t.SquadStatus.Pending:
                                return r.N.PENDING;
                            case t.SquadStatus.Live:
                                return r.N.LIVE;
                            case t.SquadStatus.Ended:
                            default:
                                return r.N.ENDED
                        }
                    }(e.squad.status),
                    members: n,
                    owner: {
                        __typename: "User",
                        id: e.squad.owner_id
                    }
                }
            }
        },
        KGyh: function(e, n, a) {
            "use strict";
            a.r(n);
            var t = a("mrSG"),
                r = a("q1tI"),
                i = a("oJmH"),
                d = a("9C/b"),
                u = a("/7QA"),
                s = a("yR8l"),
                o = a("eDVu"),
                l = a("0Log"),
                c = a("/aPz"),
                m = a("DMoW"),
                p = a("GnwI"),
                S = a("aKsW"),
                f = a("FfRw"),
                q = a("egMT"),
                h = a("/guG"),
                v = a("Ue10"),
                g = a("qcLq"),
                k = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.goToSquadPage = function() {
                            n.trackBannerAction(S.a.Click), n.props.history.push("/" + n.props.channelLogin + "/squad")
                        }, n.trackBannerAction = function(e) {
                            Object(h.a)({
                                action: e,
                                userID: n.props.data.currentUser && n.props.data.currentUser.id,
                                channel: n.props.channelLogin,
                                channelID: n.props.channelID,
                                time: new Date,
                                squadStreamID: n.props.data.user && n.props.data.user.squadStream && n.props.data.user.squadStream.id
                            })
                        }, n.makeBannerText = function(e, n) {
                            var a = function(e) {
                                return e && e.displayName ? r.createElement(v.W, {
                                    bold: !0,
                                    noWrap: !0,
                                    type: v.Tb.Span,
                                    color: v.O.Base
                                }, e.displayName) : ""
                            };
                            switch (n.length) {
                                case 0:
                                    return Object(u.d)("{channelOwnerName} is Squad Streaming", {
                                        channelOwnerName: a(e)
                                    }, "SquadStreamBanner");
                                case 1:
                                    return Object(u.d)("{channelOwnerName} is Squad Streaming with {squadMemberIndex0}", {
                                        channelOwnerName: a(e),
                                        squadMemberIndex0: a(n[0])
                                    }, "SquadStreamBanner");
                                case 2:
                                    return Object(u.d)("{channelOwnerName} is Squad Streaming with {squadMemberIndex0}, {squadMemberIndex1}", {
                                        channelOwnerName: a(e),
                                        squadMemberIndex0: a(n[0]),
                                        squadMemberIndex1: a(n[1])
                                    }, "SquadStreamBanner");
                                default:
                                    return Object(u.d)("{channelOwnerName} is Squad Streaming with {squadMemberIndex0}, {squadMemberIndex1}, {squadMemberIndex2}", {
                                        channelOwnerName: a(e),
                                        squadMemberIndex0: a(n[0]),
                                        squadMemberIndex1: a(n[1]),
                                        squadMemberIndex2: a(n[2])
                                    }, "SquadStreamBanner")
                            }
                        }, n
                    }
                    return t.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.shouldRender(this.props) && this.trackBannerAction(S.a.View), this.props.triggerPlayerReposition()
                    }, n.prototype.componentDidUpdate = function(e) {
                        !this.shouldRender(e) && this.shouldRender(this.props) && this.trackBannerAction(S.a.View), this.props.triggerPlayerReposition()
                    }, n.prototype.render = function() {
                        if (!this.shouldRender(this.props)) return null;
                        var e = this.props.channelID,
                            n = this.props.data && this.props.data.user && this.props.data.user.squadStream && this.props.data.user.squadStream.members || [],
                            a = n.filter(function(n) {
                                return n.id === e
                            })[0],
                            t = n.filter(function(n) {
                                return n.id !== e
                            }),
                            i = [a].concat(t).map(function(e) {
                                return e && e.id && e.profileImageURL ? r.createElement(v.Xa, {
                                    key: e.id,
                                    margin: {
                                        right: 1
                                    }
                                }, r.createElement(v.q, {
                                    size: 30,
                                    alt: Object(u.d)("avatar", "SquadStreamBanner"),
                                    src: e.profileImageURL
                                })) : null
                            }).filter(function(e) {
                                return null !== e
                            });
                        return r.createElement(v.i, {
                            type: v.n.SlideInBottom,
                            delay: v.j.Medium,
                            duration: v.k.Medium,
                            enabled: !0
                        }, r.createElement(v.Cb, {
                            display: v.X.Flex,
                            background: v.r.Base,
                            alignItems: v.f.Center,
                            padding: 1,
                            margin: {
                                bottom: 1
                            },
                            borderRadius: v.x.Large,
                            elevation: 2
                        }, r.createElement(v.Cb, {
                            display: v.X.Flex,
                            color: v.O.Overlay
                        }, i), r.createElement(v.Xa, null, r.createElement(v.W, {
                            noWrap: !0,
                            type: v.Tb.Span,
                            color: v.O.Alt2,
                            fontSize: v.Ca.Size5
                        }, this.makeBannerText(a, t))), r.createElement(v.Xa, {
                            display: v.X.Flex,
                            alignItems: v.f.Start,
                            flexGrow: 1
                        }), r.createElement(v.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(v.z, {
                            onClick: this.goToSquadPage
                        }, Object(u.d)("Watch In Squad Mode", "SquadStreamBanner")))))
                    }, n.prototype.isSquadMember = function(e) {
                        var n = e.channelID,
                            a = e.data && e.data.user && e.data.user.squadStream && e.data.user.squadStream.members || [];
                        return !(!a || !a.some(function(e) {
                            return e.id === n
                        }))
                    }, n.prototype.shouldRender = function(e) {
                        return !!Object(q.a)(e.channelLogin) && (!!this.isSquadMember(e) && (!e.data.loading && !e.data.error && (e.data.user && e.data.user.squadStream && e.data.user.squadStream.status === m.N.LIVE || !1)))
                    }, n
                }(r.Component),
                b = Object(i.compose)(Object(s.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                }), Object(o.a)(function(e) {
                    return {
                        query: g,
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
                }), d.a)(k);
            a.d(n, "SquadStreamBannerComponent", function() {
                return k
            }), a.d(n, "SquadStreamBanner", function() {
                return b
            })
        },
        aKsW: function(e, n, a) {
            "use strict";
            var t, r, i, d;
            a.d(n, "a", function() {
                    return t
                }), a.d(n, "b", function() {
                    return r
                }), a.d(n, "d", function() {
                    return i
                }), a.d(n, "c", function() {
                    return d
                }),
                function(e) {
                    e.View = "view", e.Click = "click"
                }(t || (t = {})),
                function(e) {
                    e.ExitSquadMode = "exit_squad_mode", e.ChannelLink = "channel_link", e.Player = "player", e.Avatar = "avatar", e.ProvideFeedback = "provide_feedback"
                }(r || (r = {})),
                function(e) {
                    e.Hover = "hover", e.Click = "click"
                }(i || (i = {})),
                function(e) {
                    e.TopBar = "top_bar", e.Player = "player", e.ProfileCard = "profile_card", e.EndedState = "ended_state"
                }(d || (d = {}))
        },
        egMT: function(e, n, a) {
            "use strict";
            a.d(n, "a", function() {
                return s
            }), a.d(n, "b", function() {
                return o
            });
            var t = a("/7QA"),
                r = "squad_stream_dashboard",
                i = "squad_stream_feature",
                d = "squad_stream_whitelist";

            function u(e) {
                var n = t.b.get(d, []);
                return n.includes("*") || n.includes(e)
            }

            function s(e) {
                return "on" === t.b.get(i, "off") && u(e)
            }

            function o(e) {
                return "on" === t.b.get(r, "off") && u(e)
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "owner"
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
                    end: 186
                }
            };
            a.loc.source = {
                body: "fragment squadStreamData on SquadStream {\nid\nstatus\nmembers {\n...squadStreamMember\n}\nowner {\nid\n}\n}\nfragment squadStreamMember on User {\nid\nlogin\ndisplayName\nprofileImageURL(width:150)\n}",
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
            var r = {};
            t.definitions = t.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !r[n] && (r[n] = !0, !0)
                })
            }(a("fnDh").definitions)), e.exports = t
        }
    }
]);