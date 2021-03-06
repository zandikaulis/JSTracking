(window.webpackJsonp = window.webpackJsonp || []).push([
    [205, 194], {
        "+djN": function(e, n, t) {
            "use strict";
            t.d(n, "c", function() {
                return d
            }), t.d(n, "b", function() {
                return l
            }), t.d(n, "d", function() {
                return c
            }), t.d(n, "f", function() {
                return m
            }), t.d(n, "e", function() {
                return u
            }), t.d(n, "a", function() {
                return p
            });
            var i = t("mrSG"),
                o = t("/7QA"),
                a = t("oK83"),
                r = t("aF6k"),
                s = t("aU+G");

            function d(e) {
                return i.__assign({}, e, {
                    kind: s.a.RoomMessageEvent
                })
            }

            function l(e) {
                return {
                    kind: s.a.DeletedMessageEvent,
                    id: e.id
                }
            }

            function c(e, n, t) {
                return {
                    kind: s.a.ModerationEvent,
                    id: Object(r.a)(n + "-moderation-event"),
                    channelID: e,
                    userID: n,
                    purgeAfter: t
                }
            }

            function m(e) {
                return {
                    kind: s.a.SystemMessageEvent,
                    id: Object(r.a)("roomSystemMessage"),
                    text: e
                }
            }

            function u(e) {
                var n = Object(o.d)('Broadcaster set this room\'s topic to "{topic}"', {
                    topic: e
                }, "RoomTopic");
                return {
                    kind: s.a.SystemMessageEvent,
                    id: Object(r.a)("initialRoomTopicMessage"),
                    text: n
                }
            }

            function p(e, n, t, i, o, d, l, c) {
                return {
                    kind: s.a.CheerbombEvent,
                    id: Object(r.a)(n + "-cheerbomb-event"),
                    messageID: e,
                    userID: n,
                    displayName: t,
                    userLogin: i,
                    minCheerAmount: d,
                    selectedCount: o,
                    bitsAmount: l,
                    domain: c,
                    sourceType: a.a.room_message
                }
            }
        },
        "+oKn": function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateLastReadAt"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "UpdateRoomViewInput"
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
                                value: "updateRoomView"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
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
                                        value: "roomView"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "unreadMentionCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "lastReadAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 136
                }
            };
            t.loc.source = {
                body: "mutation UpdateLastReadAt($input: UpdateRoomViewInput!) {\nupdateRoomView(input: $input) {\nroomView {\nunreadMentionCount\nlastReadAt\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "46lC": function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "roomMessageContent"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "RoomMessage"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "text"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "fragments"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "text"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "content"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "InlineFragment",
                                                    typeCondition: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "CheermoteToken"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "bitsAmount"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "prefix"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "tier"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "InlineFragment",
                                                    typeCondition: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "Emote"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            alias: {
                                                                kind: "Name",
                                                                value: "emoteID"
                                                            },
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
                                                                value: "setID"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "token"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "InlineFragment",
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
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "__typename"
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
                    end: 232
                }
            };
            t.loc.source = {
                body: "fragment roomMessageContent on RoomMessage {\ncontent {\ntext\nfragments {\ntext\ncontent {\n... on CheermoteToken {\nbitsAmount\nprefix\ntier\n}\n... on Emote {\nemoteID: id\nsetID\ntoken\n}\n... on User {\nid\nlogin\ndisplayName\n}\n__typename\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "6TSi": function(e, n) {},
        "6UMh": function(e, n, t) {},
        "6XEL": function(e, n, t) {
            "use strict";
            var i = {};

            function o(e) {
                return "/" + e + "/dashboard/achievements/"
            }

            function a(e) {
                return "/" + e.channelLogin + "/dashboard/achievements/" + e.id
            }
            t.d(i, "channelAchievements", function() {
                return o
            }), t.d(i, "achievement", function() {
                return a
            });
            var r, s = t("dG1e"),
                d = t("rSo7"),
                l = t("eAwD");

            function c(e, n, t) {
                return e.sort(function(e, i) {
                    for (var o = 0; o < n.length; o++) {
                        var a = n[o],
                            s = t[o] || r.Ascending,
                            d = m(a(e), a(i)) * s;
                        if (0 !== d) return d
                    }
                    return 0
                })
            }

            function m(e, n) {
                var t = null !== e && void 0 !== e,
                    i = null !== n && void 0 !== n;
                return t && i ? e > n ? 1 : e < n ? -1 : 0 : t ? -1 : i ? 1 : 0
            }! function(e) {
                e[e.Ascending = 1] = "Ascending", e[e.Descending = -1] = "Descending"
            }(r || (r = {})), t.d(n, "b", function() {
                return i
            }), t.d(n, "c", function() {
                return s.a
            }), t.d(n, !1, function() {}), t.d(n, !1, function() {
                return d.a
            }), t.d(n, !1, function() {
                return l.a
            }), t.d(n, "a", function() {
                return r
            }), t.d(n, "d", function() {
                return c
            })
        },
        "7htX": function(e, n, t) {
            "use strict";
            t.r(n);
            var i = t("mrSG"),
                o = t("q1tI"),
                a = t("Kukq"),
                r = t("oJmH"),
                s = t("/MKj"),
                d = t("9C/b"),
                l = t("kRBY"),
                c = t("yR8l"),
                m = t("oMhb");
            var u = Object(c.a)(m, {
                options: function(e) {
                    return {
                        variables: {
                            sourceChannelID: e.raid.sourceChannelID,
                            targetChannelID: e.raid.targetChannelID
                        }
                    }
                }
            })(function(e) {
                if (e.data.loading || e.data.error) return o.createElement("div", null);
                var n = e.component,
                    t = i.__rest(e, ["component"]);
                return o.createElement(n, i.__assign({}, t))
            });
            var p = t("/7QA"),
                h = t("5zf8"),
                f = t("Ue10"),
                g = function(e) {
                    var n = e.sourceChannel,
                        t = e.targetChannel;
                    return o.createElement(f.Ya, {
                        display: f.X.Flex
                    }, o.createElement(f.q, {
                        size: 36,
                        src: n.profileImageURL,
                        alt: n.displayName
                    }), o.createElement(f.tb, {
                        asset: f.ub.AngleRight,
                        height: 10
                    }), o.createElement(f.q, {
                        size: 36,
                        src: t.profileImageURL,
                        alt: t.displayName
                    }))
                },
                v = function(e) {
                    var n = e.seconds;
                    return o.createElement(f.Fb, {
                        display: f.X.Flex,
                        alignItems: f.f.Center,
                        justifyContent: f.Xa.Center,
                        color: f.O.Overlay
                    }, o.createElement(f.ab, {
                        size: f.Db.Large,
                        delay: 0,
                        inheritColor: !0
                    }), o.createElement(f.Ya, {
                        position: f.kb.Absolute
                    }, n))
                },
                b = t("2xye"),
                k = {
                    raid_type: "now"
                },
                y = {
                    medium: "twitch_channel",
                    content: "raid_channel"
                };

            function D(e, n) {
                N(b.SpadeEventType.RaidPromptImpression, e, n)
            }

            function N(e, n, t) {
                var o = i.__assign({
                    raid_creator_id: Number(n.creatorID),
                    raid_source_id: Number(n.sourceChannelID),
                    raid_target_id: Number(n.targetChannelID),
                    raid_id: n.id
                }, t);
                p.o.track(e, o)
            }
            var S = t("eRLD"),
                I = {
                    "data-test-selector": "raid-message"
                },
                C = {
                    "data-test-selector": "raid-cancel-button"
                },
                E = {
                    "data-test-selector": "raid-now-button"
                },
                M = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(n, e), n.prototype.componentDidMount = function() {
                        D(this.props.raid, k)
                    }, n.prototype.componentDidUpdate = function() {
                        this.props.raid.isGoing && this.props.onRaidGo(this.props.targetChannel.login), this.props.timerPhase.isForced && this.props.onRaidNow()
                    }, n.prototype.render = function() {
                        return o.createElement(o.Fragment, null, o.createElement(f.Ya, {
                            display: f.X.Flex,
                            justifyContent: f.Xa.Between
                        }, o.createElement(f.Ya, {
                            alignItems: f.f.Center,
                            display: f.X.Flex
                        }, o.createElement(g, {
                            sourceChannel: this.props.sourceChannel,
                            targetChannel: this.props.targetChannel
                        }), o.createElement(f.Ya, i.__assign({
                            padding: {
                                left: 1
                            }
                        }, I), this.props.timerPhase.isWaiting ? w(this.props, this.props.timerPhase.secondsUntilTransition) : R(this.props))), this.props.timerPhase.isReady && this.props.timerPhase.secondsUntilTransition <= 10 && o.createElement(v, {
                            seconds: this.props.timerPhase.secondsUntilTransition
                        })), o.createElement(f.Ya, {
                            display: f.X.Flex,
                            justifyContent: f.Xa.End,
                            margin: {
                                top: 1
                            }
                        }, o.createElement(f.Ya, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(f.z, i.__assign({
                            type: f.F.Hollow,
                            size: f.D.Small,
                            onClick: this.props.onCancelRaid
                        }, C), o.createElement(f.Fb, {
                            padding: {
                                x: 1
                            },
                            color: f.O.Overlay
                        }, Object(p.d)("Cancel", "RaidCreatorButton")))), o.createElement(f.Ya, null, o.createElement(f.z, i.__assign({
                            size: f.D.Small,
                            onClick: this.props.onRaidNow,
                            disabled: this.props.timerPhase.isWaiting
                        }, E), o.createElement(f.Ya, {
                            padding: {
                                x: 1
                            }
                        }, Object(p.d)("Raid Now", "RaidCreatorButton"))))))
                    }, n
                }(o.Component),
                w = function(e, n) {
                    return Object(p.d)("{raiderCount, plural,       one {<x:strong># viewer </x:strong><x:span>is ready to raid</x:span><x:block>{targetDisplayName} in {secondsRemaining}</x:block>}       other {<x:strong># viewers </x:strong><x:span>are ready to raid</x:span><x:block>{targetDisplayName} in {secondsRemaining}</x:block>}}", {
                        "x:block": function(e) {
                            return o.createElement(f.W, {
                                bold: !0
                            }, e)
                        },
                        "x:strong": function(e) {
                            return o.createElement(f.W, {
                                key: "raid-count",
                                type: f.Wb.Strong
                            }, e)
                        },
                        "x:span": function(e) {
                            return o.createElement(f.W, {
                                type: f.Wb.Span
                            }, e)
                        },
                        raiderCount: e.raid.viewerCount,
                        secondsRemaining: Object(h.b)(n, h.a.HumanizedShort),
                        targetDisplayName: e.targetChannel.displayName
                    }, "RaidCreatorMessageTimeLeft")
                },
                R = function(e) {
                    return Object(p.d)("{raiderCount, plural,       one {<x:strong># viewer </x:strong><x:span>is ready to raid</x:span><x:block>{targetDisplayName} now</x:block>}       other {<x:strong># viewers </x:strong><x:span>are ready to raid</x:span><x:block>{targetDisplayName} now</x:block>}}", {
                        "x:block": function(e) {
                            return o.createElement(f.W, {
                                bold: !0
                            }, e)
                        },
                        "x:strong": function(e) {
                            return o.createElement(f.W, {
                                key: "raid-count",
                                type: f.Wb.Strong
                            }, e)
                        },
                        "x:span": function(e) {
                            return o.createElement(f.W, {
                                type: f.Wb.Span
                            }, e)
                        },
                        raiderCount: e.raid.viewerCount,
                        targetDisplayName: e.targetChannel.displayName
                    }, "RaidCreatorMessageCanRaid")
                },
                _ = function(e) {
                    return o.createElement(S.a, {
                        raid: e.raid
                    }, function(n) {
                        return o.createElement(M, i.__assign({}, e, {
                            timerPhase: n
                        }))
                    })
                },
                O = t("ll/k"),
                T = t("nIRf"),
                F = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            remainingSeconds: n.props.from
                        }, n.handleIntervalUpdate = function() {
                            if (n.state.remainingSeconds <= 0) return n.props.onCountdownEnd && n.props.onCountdownEnd(), n.countdownTimer.stop();
                            n.setState(function(e) {
                                return {
                                    remainingSeconds: e.remainingSeconds - 1
                                }
                            }, function() {
                                n.props.onSecondsUpdate(n.state.remainingSeconds)
                            })
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.countdownTimer = new T.a({
                            onInterval: this.handleIntervalUpdate,
                            intervalMillis: 1e3
                        }), this.countdownTimer.start()
                    }, n.prototype.componentWillUnmount = function() {
                        this.countdownTimer.stop()
                    }, n.prototype.render = function() {
                        return null
                    }, n
                }(o.Component),
                A = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            remainingJitterSeconds: n.props.raid.jitterSeconds
                        }, n.handleLeaveRaid = function() {
                            clearTimeout(n.joinDelayTimerID), n.props.onLeaveRaid()
                        }, n.handleCountdownEnd = function() {
                            n.props.onRaidGo(n.props.targetChannel.login)
                        }, n.handleSecondsUpdate = function(e) {
                            n.setState({
                                remainingJitterSeconds: e
                            })
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.hasJoined && (this.joinDelayTimerID = setTimeout(this.props.onJoinRaid, Object(O.a)(5e3))), D(this.props.raid, k)
                    }, n.prototype.componentWillUnmount = function() {
                        clearTimeout(this.joinDelayTimerID)
                    }, n.prototype.render = function() {
                        return o.createElement(o.Fragment, null, o.createElement(f.Ya, {
                            justifyContent: f.Xa.Between,
                            display: f.X.Flex
                        }, o.createElement(f.Ya, {
                            alignItems: f.f.Center,
                            display: f.X.Flex
                        }, o.createElement(g, {
                            sourceChannel: this.props.sourceChannel,
                            targetChannel: this.props.targetChannel
                        }), o.createElement(f.Ya, {
                            padding: {
                                left: 1
                            }
                        }, L(this.props))), o.createElement(f.Ya, {
                            alignSelf: f.g.Center
                        }, this.renderActionable())), this.props.raid.isGoing && o.createElement(F, {
                            from: this.props.raid.jitterSeconds,
                            onSecondsUpdate: this.handleSecondsUpdate,
                            onCountdownEnd: this.handleCountdownEnd
                        }))
                    }, n.prototype.renderActionable = function() {
                        return this.props.raid.isGoing && this.props.raid.jitterSeconds > 2 ? o.createElement(v, {
                            seconds: this.state.remainingJitterSeconds
                        }) : this.props.hasJoined ? o.createElement(j, {
                            onLeaveRaid: this.handleLeaveRaid
                        }) : o.createElement(U, {
                            onJoinRaid: this.props.onJoinRaid
                        })
                    }, n
                }(o.Component),
                L = function(e) {
                    return Object(p.d)("{viewerCount, plural,     one {<x:block>{sourceDisplayName} is</x:block><x:block>raiding {targetDisplayName}</x:block><x:block>with # raider</x:block>}     other {<x:block>{sourceDisplayName} is</x:block><x:block>raiding {targetDisplayName}</x:block><x:block>with # raiders</x:block>}}", {
                        "x:block": function(e) {
                            return o.createElement(f.W, null, e)
                        },
                        sourceDisplayName: o.createElement(f.W, {
                            type: f.Wb.Strong
                        }, e.sourceChannel.displayName),
                        targetDisplayName: o.createElement(f.W, {
                            type: f.Wb.Strong
                        }, e.targetChannel.displayName),
                        viewerCount: e.raid.viewerCount
                    }, "RaidViewerMessage")
                },
                j = function(e) {
                    var n = e.onLeaveRaid;
                    return o.createElement(f.z, {
                        size: f.D.Small,
                        type: f.F.Hollow,
                        onClick: n
                    }, o.createElement(f.Fb, {
                        padding: {
                            x: 1
                        },
                        color: f.O.Overlay
                    }, Object(p.d)("Leave", "RaidViewerButton")))
                },
                U = function(e) {
                    var n = e.onJoinRaid;
                    return o.createElement(f.z, {
                        size: f.D.Small,
                        onClick: n
                    }, o.createElement(f.Ya, {
                        padding: {
                            x: 1
                        }
                    }, Object(p.d)("Join", "RaidViewerButton")))
                },
                x = t("cr+I");
            var B = {
                    "data-test-selector": "raid-banner"
                },
                P = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleRaidGo = function(e) {
                            if (n.props.onExpire(n.props.raid), n.hasJoinedCurrentRaid) {
                                var t = function(e, n) {
                                    var t;
                                    if (function(e) {
                                            return !e.split("/")[2]
                                        }(e.pathname)) t = "/" + n;
                                    else {
                                        if (! function(e) {
                                                return /^\/.+\/chat$/.test(e)
                                            }(e.pathname)) return "";
                                        t = "/" + n + "/chat"
                                    }
                                    var o = i.__assign({}, x.parse(e.search), {
                                        referrer: "raid"
                                    });
                                    return t + "?" + x.stringify(o)
                                }(n.props.history.location, e);
                                t && n.props.history.push(t, y)
                            }
                        }, n.handleJoinRaid = function() {
                            ! function(e, n) {
                                N(b.SpadeEventType.RaidPromptJoin, e, n)
                            }(n.props.raid, k), n.props.onJoin(n.props.raid)
                        }, n.handleLeaveRaid = function() {
                            ! function(e, n) {
                                N(b.SpadeEventType.RaidPromptLeave, e, n)
                            }(n.props.raid, k), n.props.onLeave(n.props.raid)
                        }, n.handleRaidNow = function() {
                            ! function(e) {
                                N(b.SpadeEventType.RaidPromptNow, e, k)
                            }(n.props.raid), n.props.onRaidNow(n.props.raid)
                        }, n.handleCancelRaid = function() {
                            ! function(e, n) {
                                N(b.SpadeEventType.RaidPromptCancel, e, n)
                            }(n.props.raid, k), n.props.onCancel(n.props.raid)
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        if (this.shouldRenderRaidBanner) {
                            var e = this.props.raid,
                                n = this.props.data,
                                t = n.sourceChannel,
                                a = n.targetChannel,
                                r = o.createElement(A, {
                                    hasJoined: this.hasJoinedCurrentRaid,
                                    onJoinRaid: this.handleJoinRaid,
                                    onLeaveRaid: this.handleLeaveRaid,
                                    onRaidGo: this.handleRaidGo,
                                    raid: e,
                                    sourceChannel: t,
                                    targetChannel: a
                                });
                            return this.isRaidCreator && (r = o.createElement(_, {
                                onCancelRaid: this.handleCancelRaid,
                                onRaidNow: this.handleRaidNow,
                                onRaidGo: this.handleRaidGo,
                                raid: e,
                                sourceChannel: t,
                                targetChannel: a
                            })), o.createElement(f.Fb, i.__assign({
                                background: f.r.AccentAlt2,
                                color: f.O.Overlay,
                                position: f.kb.Absolute,
                                zIndex: f.jc.Above,
                                fullWidth: !0
                            }, B), o.createElement(f.Ya, {
                                padding: {
                                    y: 1,
                                    x: 2
                                }
                            }, r))
                        }
                        return null
                    }, Object.defineProperty(n.prototype, "shouldRenderRaidBanner", {
                        get: function() {
                            var e = this.props.raid,
                                n = e.isGoing && this.hasJoinedCurrentRaid;
                            return (e.isAnnouncing || n) && !e.isExpired
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isRaidCreator", {
                        get: function() {
                            var e = this.props.raid;
                            return Boolean(e && this.props.user && this.props.user.id === e.creatorID)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "hasJoinedCurrentRaid", {
                        get: function() {
                            var e = this.props.raid;
                            return !!e && (this.isRaidCreator || e.hasJoined)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n
                }(o.Component);
            var V = Object(r.compose)(Object(s.connect)(function(e) {
                    return {
                        user: Object(l.e)(e)
                    }
                }), d.a, function(e) {
                    return function(n) {
                        return o.createElement(u, i.__assign({}, n, {
                            component: e
                        }))
                    }
                })(P),
                H = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        return this.props.raid ? o.createElement(V, {
                            raid: this.props.raid,
                            onJoin: this.props.onJoin,
                            onLeave: this.props.onLeave,
                            onExpire: this.props.onExpire,
                            onCancel: this.props.onCancel,
                            onRaidNow: this.props.onRaidNow
                        }) : null
                    }, n
                }(o.Component),
                W = function(e) {
                    return o.createElement(a.a, {
                        channelID: e.channelID
                    }, function(n) {
                        return o.createElement(H, i.__assign({}, e, n))
                    })
                };
            t.d(n, "RaidNotificationComponent", function() {
                return H
            }), t.d(n, "RaidNotification", function() {
                return W
            })
        },
        "7qJZ": function(e, n, t) {
            "use strict";
            t.d(n, "c", function() {
                return o
            }), t.d(n, "a", function() {
                return a
            }), t.d(n, "b", function() {
                return r
            }), t.d(n, "d", function() {
                return s
            });
            var i = t("ll/k"),
                o = "raid_update_v2",
                a = "raid_cancel_v2",
                r = "raid_go_v2",
                s = function() {
                    function e(e, n, t) {
                        this.message = e, this.id = e.raid.id, this.type = e.type, this.creatorID = e.raid.creator_id, this.sourceChannelID = e.raid.source_id, this.targetChannelID = e.raid.target_id, this.viewerCount = e.raid.viewer_count, this.remainingDurationSeconds = e.raid.remaining_duration_seconds, this.targetLogin = e.raid.target_login, this.targetDisplayName = e.raid.target_display_name, this.targetProfileImage = e.raid.target_profile_image, this.storage = n, this.hasJoined = n.hasJoined(this), this.isExpired = n.isExpired(this), this.jitterSeconds = t ? t.jitterSeconds : Object(i.a)(e.raid.transition_jitter_seconds), this.isAnnouncing = e.type === o, this.isGoing = Boolean(t && t.isAnnouncing) && e.type === r, this.hasEnded = e.type === r || e.type === a, t && t.hasEnded && (this.isAnnouncing = !1, this.isGoing = t.isGoing, this.hasEnded = !0)
                    }
                    return e.prototype.withMessage = function(n) {
                        return this.id !== n.raid.id ? new e(n, this.storage) : new e(n, this.storage, this)
                    }, e.prototype.withStorage = function(n) {
                        return new e(this.message, n, this)
                    }, e
                }()
        },
        "8EgP": function(e, n, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoomMessages"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "roomID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "first"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "last"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "before"
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
                                value: "after"
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
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "roomID"
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
                                        value: "messages"
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
                                                value: "first"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "last"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "last"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "before"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "before"
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
                                                value: "after"
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
                                                            kind: "InlineFragment",
                                                            typeCondition: {
                                                                kind: "NamedType",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "RoomMessage"
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
                                                                        value: "deletedAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "sentAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "roomMessageContent"
                                                                    },
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "sender"
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
                                                                                value: "login"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "chatColor"
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
                                                                                value: "displayBadges"
                                                                            },
                                                                            arguments: [{
                                                                                kind: "Argument",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "channelID"
                                                                                },
                                                                                value: {
                                                                                    kind: "Variable",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "channelID"
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
                                                                                        value: "setID"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "version"
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
                    end: 466
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/rooms/models/room-message-content-fragment.gql"\nquery RoomMessages($roomID: ID! $channelID: ID! $first: Int! $last: Int! $before: Cursor $after: Cursor) {\nroom(id: $roomID) {\nid\nmessages(first: $first last: $last before: $before after: $after) {\nedges {\ncursor\nnode {\n... on RoomMessage {\nid\ndeletedAt\nsentAt\n...roomMessageContent\nsender {\nid\nlogin\nchatColor\ndisplayName\ndisplayBadges(channelID: $channelID) {\nsetID\nversion\n}\n}\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !o[n] && (o[n] = !0, !0)
                })
            }(t("46lC").definitions)), e.exports = i
        },
        BsQe: function(e, n, t) {},
        CFPd: function(e, n, t) {},
        "FV/7": function(e, n, t) {},
        G8UE: function(e, n, t) {
            "use strict";
            var i = t("J1ZQ");
            t.d(n, "RaidStorage", function() {
                return i.a
            });
            var o = t("6TSi");
            t.o(o, "RAID_CANCEL_V2") && t.d(n, "RAID_CANCEL_V2", function() {
                return o.RAID_CANCEL_V2
            }), t.o(o, "RAID_GO_V2") && t.d(n, "RAID_GO_V2", function() {
                return o.RAID_GO_V2
            }), t.o(o, "RAID_UPDATE_V2") && t.d(n, "RAID_UPDATE_V2", function() {
                return o.RAID_UPDATE_V2
            }), t.o(o, "RaidV2") && t.d(n, "RaidV2", function() {
                return o.RaidV2
            }), t.o(o, "TimerPhase") && t.d(n, "TimerPhase", function() {
                return o.TimerPhase
            });
            var a = t("7qJZ");
            t.d(n, "RAID_CANCEL_V2", function() {
                return a.a
            }), t.d(n, "RAID_GO_V2", function() {
                return a.b
            }), t.d(n, "RAID_UPDATE_V2", function() {
                return a.c
            }), t.d(n, "RaidV2", function() {
                return a.d
            });
            var r = t("Tn5u");
            t.d(n, "TimerPhase", function() {
                return r.a
            })
        },
        J1ZQ: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return a
            });
            var i, o = t("/7QA"),
                a = function() {
                    function e(e) {
                        this.expiredRaids = new Set, this.leftRaids = new Set, e && (this.expiredRaids = e.expiredRaids, this.leftRaids = e.leftRaids)
                    }
                    return Object.defineProperty(e, "instance", {
                        get: function() {
                            return i || (i = new e), i
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isExpired = function(e) {
                        return this.expiredRaids.has(e.id)
                    }, e.prototype.hasJoined = function(e) {
                        return !this.leftRaids.has(e.id) && !this.getStorageData()[e.id]
                    }, e.prototype.expireRaid = function(n) {
                        var t = new Set(this.expiredRaids);
                        return t.add(n.id), new e({
                            expiredRaids: t,
                            leftRaids: this.leftRaids
                        })
                    }, e.prototype.joinRaid = function(n) {
                        var t = new Set(this.leftRaids);
                        t.delete(n.id);
                        var i = this.getStorageData();
                        return delete i[n.id], this.setStorageData(i), new e({
                            expiredRaids: this.expiredRaids,
                            leftRaids: t
                        })
                    }, e.prototype.leaveRaid = function(n) {
                        var t = new Set(this.leftRaids);
                        t.add(n.id);
                        var i = this.getStorageData();
                        return i[n.id] = !0, this.setStorageData(i), new e({
                            expiredRaids: this.expiredRaids,
                            leftRaids: t
                        })
                    }, e.prototype.destroy = function() {
                        i = void 0
                    }, e.prototype.setStorageData = function(e) {
                        o.m.set("raids-left", e)
                    }, e.prototype.getStorageData = function() {
                        return o.m.get("raids-left", {})
                    }, e
                }()
        },
        JrF4: function(e, n, t) {},
        Kukq: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                o = t("q1tI"),
                a = t("/7QA"),
                r = t("/aPz"),
                s = t("G8UE"),
                d = t("aUoe"),
                l = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {}, n.raidStorage = s.RaidStorage.instance, n.handleJoin = function(e) {
                            return n.setState({
                                raid: e.withStorage(n.raidStorage.joinRaid(e))
                            }), d.c(e.id)
                        }, n.handleExpire = function(e) {
                            n.setState({
                                raid: e.withStorage(n.raidStorage.expireRaid(e))
                            })
                        }, n.handleLeave = function(e) {
                            return n.setState({
                                raid: e.withStorage(n.raidStorage.leaveRaid(e))
                            }), d.d(e.id)
                        }, n.handleCancel = function(e) {
                            return d.a(e.sourceChannelID)
                        }, n.handleRaidNow = function(e) {
                            return d.e(e.sourceChannelID)
                        }, n.unsubscribe = function() {}, n.handlePubsubMessage = function(e) {
                            if (n.props.channelID === e.raid.source_id) switch (e.type) {
                                case s.RAID_UPDATE_V2:
                                case s.RAID_CANCEL_V2:
                                case s.RAID_GO_V2:
                                    return n.setState(function(t) {
                                        return t.raid ? i.__assign({}, t, {
                                            raid: t.raid.withMessage(e)
                                        }) : i.__assign({}, t, {
                                            raid: new s.RaidV2(e, n.raidStorage)
                                        })
                                    });
                                default:
                                    return
                            }
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.subscribe(this.props.channelID)
                    }, n.prototype.render = function() {
                        return this.props.children({
                            raid: this.state.raid,
                            onJoin: this.handleJoin,
                            onLeave: this.handleLeave,
                            onCancel: this.handleCancel,
                            onExpire: this.handleExpire,
                            onRaidNow: this.handleRaidNow
                        })
                    }, n.prototype.componentWillUnmount = function() {
                        this.unsubscribe()
                    }, n.prototype.componentDidUpdate = function(e) {
                        var n = this;
                        this.props.channelID !== e.channelID && (this.unsubscribe(), this.setState({
                            raid: void 0
                        }, function() {
                            return n.subscribe(n.props.channelID)
                        }))
                    }, n.prototype.subscribe = function(e) {
                        this.unsubscribe = a.p.pubsub.subscribe({
                            topic: Object(r.w)(e),
                            onMessage: this.handlePubsubMessage
                        })
                    }, n
                }(o.Component);
            t.d(n, "a", function() {
                return l
            })
        },
        MHUA: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                o = t("q1tI"),
                a = t("/7QA"),
                r = t("8/mp"),
                s = t("HAa/"),
                d = t("yZCp"),
                l = t("uIkQ"),
                c = t("cys1"),
                m = t("QVaV"),
                u = t("oK83"),
                p = (t("6UMh"), function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleUsernameClick = function(e) {
                            n.props.onUsernameClick(n.props.sender.login, u.a.room_message, n.props.roomID, e.currentTarget.getBoundingClientRect().bottom)
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        var e = this.props.sender,
                            n = [o.createElement("span", {
                                key: "username-display",
                                className: "message-author__display-name",
                                "data-test-selector": "message-username",
                                style: {
                                    color: e.chatColor
                                }
                            }, e.displayName)];
                        return Object(m.b)(e.displayName) || n.push(o.createElement("span", {
                            key: "username-login",
                            style: {
                                color: e.chatColor
                            },
                            className: "message-author__intl-login",
                            "data-test-selector": "message-username-canonical"
                        }, " (" + e.login + ")")), o.createElement("button", {
                            onClick: this.handleUsernameClick,
                            className: "message-author__username"
                        }, o.createElement("span", {
                            key: e.id + "-messageauthor"
                        }, n))
                    }, n
                }(o.Component)),
                h = t("Ue10"),
                f = (t("kK7i"), function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.onBanUser = function() {
                            n.props.sendMessage("/ban " + n.props.message.sender.login)
                        }, n.onTimeoutUser = function() {
                            n.props.sendMessage("/timeout " + n.props.message.sender.login)
                        }, n.onUnbanUser = function() {
                            n.props.sendMessage("/unban " + n.props.message.sender.login)
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        var e = this.props.message.deletedAt,
                            n = this.onBanUser,
                            t = h.ub.Ban,
                            i = Object(a.d)("Ban", "RoomMessageModIcons");
                        return e && (n = this.onUnbanUser, t = h.ub.FollowCheck, i = Object(a.d)("Unban", "RoomMessageModIcons")), o.createElement(h.Ya, {
                            display: h.X.InlineFlex,
                            margin: {
                                right: .5
                            },
                            className: "room-message-mod-icons"
                        }, o.createElement(h.Ra, {
                            color: h.O.Alt2,
                            display: h.X.InlineFlex
                        }, o.createElement("button", {
                            className: "room-message-mod-icons__mod-icon",
                            "data-test-selector": "default-action-button",
                            onClick: n
                        }, o.createElement(h.Zb, {
                            label: i
                        }, o.createElement(h.tb, {
                            width: 20,
                            height: 20,
                            type: h.vb.Inherit,
                            asset: t
                        })))), o.createElement(h.Ra, {
                            color: h.O.Alt2,
                            display: h.X.InlineFlex
                        }, o.createElement("button", {
                            className: "room-message-mod-icons__mod-icon",
                            "data-test-selector": "timeout-action-button",
                            onClick: this.onTimeoutUser
                        }, o.createElement(h.Zb, {
                            label: Object(a.d)("Timeout", "RoomMessageModIcons")
                        }, o.createElement(h.tb, {
                            width: 20,
                            height: 20,
                            type: h.vb.Inherit,
                            asset: h.ub.Timeout
                        })))))
                    }, n
                }(o.Component)),
                g = t("VS9Q"),
                v = (t("FV/7"), function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            shouldShowDeletedBody: !1
                        }, n.showDeleted = function(e) {
                            e && e.preventDefault(), n.setState({
                                shouldShowDeletedBody: !0
                            })
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.shouldComponentUpdate = function(e, n) {
                        return e.showModerationIcons !== this.props.showModerationIcons || (e.showTimestamps !== this.props.showTimestamps || (n.shouldShowDeletedBody !== this.state.shouldShowDeletedBody || (e.hasModPermissions !== this.props.hasModPermissions || e.message.deletedAt !== this.props.message.deletedAt)))
                    }, n.prototype.render = function() {
                        var e = this.props.message.sender.displayBadges,
                            n = {},
                            t = ": ";
                        return this.props.message.content.text.startsWith(g.a) && (n = {
                            color: this.props.message.sender.chatColor
                        }, t = " "), o.createElement(h.Ya, {
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, o.createElement("div", {
                            id: this.props.message.id,
                            className: "room-message",
                            style: n
                        }, this.renderTimestamp(), this.renderModerationIcons(), o.createElement(l.b, {
                            badgeSets: this.props.badgeSets,
                            badgesToRender: e
                        }), o.createElement(p, {
                            roomID: this.props.roomID,
                            messageID: this.props.message.id,
                            sender: this.props.message.sender,
                            onUsernameClick: this.props.onUsernameClick
                        }), o.createElement("span", {
                            key: "separator"
                        }, t), this.renderMessageBody()))
                    }, n.prototype.renderMessageBody = function() {
                        if (!this.props.message.deletedAt || this.state.shouldShowDeletedBody) return Object(c.f)(Object(g.f)(this.props.message, this.props.bitsConfig, this.props.currentUserLogin), {
                            forceClipsNetworkRequest: !0
                        });
                        var e = Object(a.d)("message deleted", "RoomMessage"),
                            n = this.props.hasModPermissions ? o.createElement(h.U, {
                                onClick: this.showDeleted,
                                "data-test-selector": "show-deleted"
                            }, "<" + e + ">") : "<" + e + ">";
                        return o.createElement("span", {
                            key: "deleted",
                            className: "room-message--deleted",
                            "data-test-selector": "deleted-message"
                        }, n)
                    }, n.prototype.renderTimestamp = function() {
                        return this.props.showTimestamps ? o.createElement("span", {
                            key: "timestamp",
                            className: "room-message__timestamp",
                            "data-test-selector": "room-message-timestamp"
                        }, Object(c.a)(new Date(this.props.message.sentAt))) : null
                    }, n.prototype.renderModerationIcons = function() {
                        return this.props.showModerationIcons && this.props.hasModPermissions ? o.createElement(f, {
                            channelID: this.props.channelID,
                            message: this.props.message,
                            sendMessage: this.props.sendMessage
                        }) : null
                    }, n
                }(o.Component)),
                b = (t("JrF4"), function(e) {
                    return o.createElement(h.Fb, {
                        className: "room-system-message",
                        color: h.O.Alt2,
                        key: e.message.id,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, o.createElement(h.W, null, e.message.text))
                }),
                k = t("aU+G"),
                y = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        switch (this.props.message.kind) {
                            case k.a.SystemMessageEvent:
                                return o.createElement(b, {
                                    message: this.props.message
                                });
                            case k.a.RoomMessageEvent:
                                return o.createElement(v, {
                                    showModerationIcons: this.props.showModerationIcons,
                                    showTimestamps: this.props.showTimestamps,
                                    badgeSets: this.props.badgeSets,
                                    bitsConfig: this.props.bitsConfig,
                                    channelID: this.props.channelID,
                                    currentUserLogin: this.props.currentUserLogin,
                                    roomID: this.props.roomID,
                                    hasModPermissions: this.props.hasModPermissions,
                                    message: this.props.message,
                                    sendMessage: this.props.sendMessage,
                                    onUsernameClick: this.props.onUsernameClick
                                });
                            case k.a.CheerbombEvent:
                                return o.createElement(d.a, {
                                    channelID: this.props.channelID,
                                    event: this.props.message
                                });
                            default:
                                return null
                        }
                    }, n
                }(o.Component),
                D = t("+djN"),
                N = (t("CFPd"), ["scroll", "wheel", "mousewheel", "DOMMouseScroll", "keyup", "mousedown"]),
                S = 10,
                I = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            disableInfiniteTrigger: !0,
                            isAutoScrolling: !0
                        }, n.saveScrollRef = function(e) {
                            return n.scroll = e
                        }, n.handleScrollEvent = function(e) {
                            if (n.scroll && n.scroll.scrollContent && (e.which > 0 || "mousedown" === e.type || "mousewheel" === e.type || "wheel" === e.type)) {
                                var t = n.scroll.scrollContent.scrollHeight - n.scroll.scrollContent.scrollTop - n.scroll.scrollContent.offsetHeight;
                                t <= S && !n.state.isAutoScrolling ? n.setState({
                                    isAutoScrolling: !0
                                }) : t > S && n.state.isAutoScrolling && n.setState({
                                    isAutoScrolling: !1
                                })
                            }
                        }, n.handleClickMoreMessages = function() {
                            n.setState({
                                isAutoScrolling: !0
                            }, n.scrollToBottom), n.props.loadNewest()
                        }, n.loadOlder = function() {
                            return n.isLoadingOlder = !0, n.props.loadOlder()
                        }, n.loadNewer = function() {
                            return n.isLoadingOlder = !1, n.props.loadNewer()
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.componentDidMount = function() {
                        var e = this;
                        this.setState({
                            disableInfiniteTrigger: !1
                        }), this.scroll && this.scroll.scrollContent && (this.scrollToBottom(), N.forEach(function(n) {
                            e.scroll.scrollContent && e.scroll.scrollContent.addEventListener(n, e.handleScrollEvent)
                        }))
                    }, n.prototype.componentWillUnmount = function() {
                        var e = this;
                        N.forEach(function(n) {
                            e.scroll && e.scroll.scrollContent && e.scroll.scrollContent.removeEventListener(n, e.handleScrollEvent)
                        })
                    }, n.prototype.componentWillReceiveProps = function(e) {
                        if (e.isBulkLoad && this.isLoadingOlder && this.scroll && this.scroll.scrollContent && (this.prevScrollTop = this.scroll.scrollContent.scrollTop), e.isBulkLoad && !this.isLoadingOlder && this.scroll && this.scroll.scrollContent) {
                            var n = this.props.messages[this.props.messages.length - 1] && this.props.messages[this.props.messages.length - 1].id;
                            if (n && document.getElementById(n)) {
                                var t = document.getElementById(n).offsetTop;
                                this.prevScrollTop = this.scroll.scrollContent.scrollTop - t
                            } else this.prevScrollTop = this.scroll.scrollContent.scrollTop
                        }
                    }, n.prototype.componentDidUpdate = function(e) {
                        if (e.messages !== this.props.messages && (this.state.isAutoScrolling && this.scrollToBottom(), this.props.isBulkLoad && e.messages && this.props.messages))
                            if (this.isLoadingOlder) {
                                var n = e.messages[0] && e.messages[0].id,
                                    t = this.props.messages[0] && this.props.messages[0].id;
                                if (n && t && n !== t) {
                                    var i = document.getElementById(n);
                                    if (i && this.scroll && this.scroll.scrollContent) {
                                        var o = i.offsetTop;
                                        this.scroll.scrollContent.scrollTop = this.prevScrollTop + o
                                    }
                                }
                            } else {
                                var a = e.messages[e.messages.length - 1] && e.messages[e.messages.length - 1].id,
                                    r = this.props.messages[this.props.messages.length - 1] && this.props.messages[this.props.messages.length - 1].id;
                                if (a && r && a !== r) {
                                    var s = document.getElementById(a);
                                    if (s && this.scroll && this.scroll.scrollContent) {
                                        o = s.offsetTop;
                                        this.scroll.scrollContent.scrollTop = this.prevScrollTop + o
                                    }
                                }
                            }
                    }, n.prototype.render = function() {
                        var e = this.getRoomLines();
                        return o.createElement(h.Ya, {
                            className: "room-list",
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            flexWrap: h.Ba.NoWrap,
                            overflow: h.db.Hidden,
                            flexGrow: 1
                        }, o.createElement(r.b, {
                            className: "room-list__lines",
                            scrollRef: this.saveScrollRef
                        }, o.createElement(h.Ya, {
                            flexGrow: 1,
                            fullHeight: !0,
                            overflow: h.db.Hidden,
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(r.a, {
                            "data-test-selector": "backward-infinite-scroll",
                            enabled: !this.state.disableInfiniteTrigger,
                            loadMore: this.loadOlder,
                            pixelThreshold: 400,
                            orientation: s.b.Down,
                            contentLength: e.length,
                            forceLoadMoreContent: this.props.hasOlderLeft,
                            requestCap: 2
                        }), e, o.createElement(r.a, {
                            "data-test-selector": "forward-infinite-scroll",
                            enabled: !this.state.disableInfiniteTrigger,
                            loadMore: this.loadNewer,
                            pixelThreshold: 400,
                            orientation: s.b.Up,
                            contentLength: e.length,
                            forceLoadMoreContent: this.props.hasNewerLeft,
                            requestCap: 2
                        }))), o.createElement(h.Ya, {
                            className: "room-list__more-messages-placeholder",
                            position: h.kb.Relative,
                            margin: {
                                x: 2
                            }
                        }, this.moreMessages()))
                    }, n.prototype.moreMessages = function() {
                        return this.state.isAutoScrolling ? null : o.createElement(h.Fb, {
                            alignItems: h.f.Center,
                            attachBottom: !0,
                            display: h.X.Flex,
                            fullWidth: !0,
                            background: h.r.Overlay,
                            justifyContent: h.Xa.Center,
                            position: h.kb.Absolute,
                            borderRadius: h.x.Medium
                        }, o.createElement(h.z, {
                            onClick: this.handleClickMoreMessages,
                            overlay: !0,
                            type: h.F.Text,
                            fullWidth: !0
                        }, Object(a.d)("More messages below.", "RoomList")))
                    }, n.prototype.scrollToBottom = function() {
                        this.scroll.scrollToBottom()
                    }, n.prototype.getRoomLines = function() {
                        var e = this,
                            n = this.props.messages;
                        return 0 === n.length && (n = [Object(D.f)(Object(a.d)("Welcome to the chat room!", "RoomList"))]), n.map(function(n) {
                            return o.createElement(y, {
                                key: n.id,
                                badgeSets: e.props.badgeSets,
                                bitsConfig: e.props.bitsConfig,
                                channelID: e.props.channelID,
                                currentUserLogin: e.props.currentUserLogin,
                                roomID: e.props.roomID,
                                hasModPermissions: e.props.hasModPermissions,
                                message: n,
                                showModerationIcons: e.props.showModerationIcons,
                                showTimestamps: e.props.showTimestamps,
                                sendMessage: e.props.sendMessage,
                                onUsernameClick: e.props.onUsernameClick
                            })
                        })
                    }, n
                }(o.Component);
            t.d(n, !1, function() {
                return "backward-infinite-scroll"
            }), t.d(n, !1, function() {
                return "forward-infinite-scroll"
            }), t.d(n, "a", function() {
                return I
            })
        },
        N4Vp: function(e, n, t) {},
        Q8Sx: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateRoomModes"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "UpdateRoomModesInput"
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
                                value: "updateRoomModes"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
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
                                        value: "room"
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
                                                value: "modes"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "slowModeDurationSeconds"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "r9kModeEnabled"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "emotesOnlyModeEnabled"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "minimumSlowModeDurationSeconds"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "maximumSlowModeDurationSeconds"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 254
                }
            };
            t.loc.source = {
                body: "mutation UpdateRoomModes($input: UpdateRoomModesInput!) {\nupdateRoomModes(input: $input) {\nroom {\nid\nmodes {\nslowModeDurationSeconds\nr9kModeEnabled\nemotesOnlyModeEnabled\n}\n}\nerror {\ncode\nminimumSlowModeDurationSeconds\nmaximumSlowModeDurationSeconds\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        Qp14: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoomSettings"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "roomID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "userID"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isLoggedIn"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "roomID"
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
                                                value: "self"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isModerator"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "modes"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "slowModeDurationSeconds"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "userID"
                                    }
                                }
                            }],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "include"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "if"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "isLoggedIn"
                                        }
                                    }
                                }]
                            }],
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
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isGlobalMod"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isSiteAdmin"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 262
                }
            };
            t.loc.source = {
                body: "query RoomSettings($roomID: ID! $userID: ID $isLoggedIn: Boolean!) {\nroom(id: $roomID) {\nid\nowner {\nid\nlogin\nself {\nisModerator\n}\n}\nmodes {\nslowModeDurationSeconds\n}\n}\nuser(id: $userID) @include(if: $isLoggedIn) {\nid\nroles {\nisGlobalMod\nisSiteAdmin\nisStaff\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "SO+K": function(e, n, t) {},
        Tn5u: function(e, n, t) {
            "use strict";
            var i;
            t.d(n, "a", function() {
                    return o
                }),
                function(e) {
                    e[e.Waiting = 0] = "Waiting", e[e.Ready = 1] = "Ready", e[e.Forced = 2] = "Forced"
                }(i || (i = {}));
            var o = function() {
                function e(e) {
                    this.status = e.status, this.secondsUntilTransition = e.secondsUntilTransition
                }
                return e.waitingFor = function(n) {
                    return new e({
                        status: i.Waiting,
                        secondsUntilTransition: n
                    })
                }, e.readyFor = function(n) {
                    return new e({
                        status: i.Ready,
                        secondsUntilTransition: n
                    })
                }, e.forced = function() {
                    return new e({
                        status: i.Forced,
                        secondsUntilTransition: 1 / 0
                    })
                }, Object.defineProperty(e.prototype, "isWaiting", {
                    get: function() {
                        return this.status === i.Waiting
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isReady", {
                    get: function() {
                        return this.status === i.Ready
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isForced", {
                    get: function() {
                        return this.status === i.Forced
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }()
        },
        Vgpr: function(e, n, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoomPane"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "roomID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isLoggedIn"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "userID"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "badges"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "badge"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "roomID"
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
                                        value: "topic"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "minimumAllowedRole"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "lastReadAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "unreadMentionCount"
                                            },
                                            arguments: [],
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
                                                value: "login"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "broadcastBadges"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "badge"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "self"
                                            },
                                            arguments: [],
                                            directives: [{
                                                kind: "Directive",
                                                name: {
                                                    kind: "Name",
                                                    value: "include"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "if"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isLoggedIn"
                                                        }
                                                    }
                                                }]
                                            }],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isModerator"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "userID"
                                    }
                                }
                            }],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "include"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "if"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "isLoggedIn"
                                        }
                                    }
                                }]
                            }],
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
                                        value: "campaignProperties"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "domains"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayBadges"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "channelID"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "channelID"
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
                                                value: "setID"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "version"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isGlobalMod"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isSiteAdmin"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 544
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery RoomPane($roomID: ID! $isLoggedIn: Boolean! $userID: ID $channelID: ID!) {\nbadges {\n...badge\n}\nroom(id: $roomID) {\nid\ntopic\nminimumAllowedRole\nself {\nlastReadAt\nunreadMentionCount\n}\nowner {\nid\ndisplayName\nlogin\nbroadcastBadges {\n...badge\n}\nself @include(if: $isLoggedIn) {\nisModerator\n}\n}\n}\nuser(id: $userID) @include(if: $isLoggedIn) {\nid\nlogin\ncampaignProperties {\ndomains\n}\ndisplayBadges(channelID: $channelID) {\nsetID\nversion\n}\nroles {\nisGlobalMod\nisSiteAdmin\nisStaff\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !o[n] && (o[n] = !0, !0)
                })
            }(t("IKE4").definitions)), e.exports = i
        },
        Xf1I: function(e, n, t) {
            "use strict";
            t.r(n);
            var i, o = t("/MKj"),
                a = t("kRBY"),
                r = t("mrSG"),
                s = t("q1tI"),
                d = t("oJmH"),
                l = t("/7QA"),
                c = t("yR8l"),
                m = t("eDVu"),
                u = t("0Log"),
                p = t("/aPz"),
                h = t("GnwI"),
                f = t("Ue10"),
                g = t("YVMW");
            t("YQMO");
            ! function(e) {
                e[e.BadPermissions = 0] = "BadPermissions", e[e.Banned = 1] = "Banned", e[e.Deleted = 2] = "Deleted", e[e.NoPreview = 3] = "NoPreview"
            }(i || (i = {}));
            var v = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return this.props.data && this.props.data.loading ? s.createElement(f.jb, {
                            lineCount: 4,
                            width: 160
                        }) : this.props.data && this.props.data.error ? s.createElement(f.Ya, null) : s.createElement(f.Fb, {
                            borderLeft: !0,
                            fullHeight: !0,
                            fullWidth: !0,
                            className: "invalid-room-view"
                        }, s.createElement(f.Ya, {
                            display: f.X.Flex,
                            justifyContent: f.Xa.Center,
                            padding: 1
                        }, s.createElement("img", {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/86/3.0",
                            width: "54",
                            height: "45"
                        })), this.getCopy(), s.createElement(f.Ya, {
                            textAlign: f.Sb.Center,
                            padding: {
                                y: 3,
                                x: 2
                            }
                        }, s.createElement(f.z, {
                            type: f.F.Hollow,
                            onClick: this.props.handleStreamChatClick
                        }, Object(l.d)("Back to Stream Chat", "InvalidRoomView"))))
                    }, n.prototype.getCopy = function() {
                        var e = null,
                            n = Object(l.d)("You don't have to go home, but you can't stay here. This room has been deleted.", "InvalidRoomView"),
                            t = Object(l.d)("The broadcaster's settings mean you can't participate in this room.", "InvalidRoomView");
                        switch (this.props.type) {
                            case i.Deleted:
                                e = s.createElement(f.W, null, n);
                                break;
                            case i.BadPermissions:
                                e = s.createElement(f.W, null, t);
                                break;
                            case i.Banned:
                                e = s.createElement(f.W, null, Object(l.d)("You are banned and can't join Rooms", "InvalidRoomView"));
                                break;
                            case i.NoPreview:
                                var o = this.props.data.room.owner.displayName,
                                    a = this.props.data.room.name,
                                    r = Object(l.d)("You are viewing {displayName}’s #{roomName}. Chat participation is restricted to channel subscribers to chat or preview.", {
                                        displayName: o,
                                        roomName: a
                                    }, "InvalidRoomView");
                                e = s.createElement(f.W, null, r);
                                break;
                            default:
                                e = s.createElement(f.W, null, t)
                        }
                        return s.createElement(f.Ya, {
                            textAlign: f.Sb.Center
                        }, s.createElement(f.Ya, {
                            padding: {
                                y: 1,
                                x: 2
                            }
                        }, e))
                    }, n = r.__decorate([Object(c.a)(g, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        },
                        skip: function(e) {
                            return e.type !== i.NoPreview
                        }
                    }), Object(h.b)("InvalidRoomView")], n)
                }(s.Component),
                b = t("lw3P"),
                k = t("fezU"),
                y = t("r538"),
                D = t("aU+G"),
                N = t("8EgP"),
                S = t("+djN"),
                I = 900,
                C = 300,
                E = 100,
                M = function() {
                    function e(e, n, t, i, o, a) {
                        void 0 === o && (o = C), void 0 === a && (a = I);
                        var s = this;
                        this.roomID = e, this.channelID = n, this.onBufferUpdate = t, this.onInitialLoad = i, this.maxVisibleSize = o, this.maxBufferSize = a, this.consumeRoomEvent = function(e, n, t) {
                            if (s.processRoomEvent(e)) {
                                var i = !t && s.offset + s.maxVisibleSize === s.buffer.length,
                                    o = !t && s.offset + s.maxVisibleSize >= s.buffer.length;
                                if (s.buffer.length >= s.maxBufferSize && i) {
                                    var a = s.buffer.shift();
                                    s.eventMap.delete(a.id), s._hasOlderLeft = !0, i = !1, s.oldestCursor = void 0;
                                    for (var r = 0, d = s.buffer; r < d.length; r++) {
                                        var l = d[r];
                                        if (l && s.eventMap.get(l.id)) {
                                            s.oldestCursor = s.eventMap.get(l.id);
                                            break
                                        }
                                    }
                                }
                                s.buffer.length < s.maxBufferSize && (s.addRoomEventToBuffer(e, n, t), s._isBulkLoad = !1, o && (i && (s.offset = s.offset + 1), s._isDirty = !0, s.onBufferUpdate()))
                            }
                        }, this.loadNewest = function() {
                            s._hasNewerLeft ? s.resetBufferState() : s.offset = Math.max(s.buffer.length - s.maxVisibleSize, 0), s._isDirty = !0, s.onBufferUpdate()
                        }, this.loadOlder = function() {
                            return r.__awaiter(s, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    return this.offset > 0 ? (this.offset = Math.max(this.offset - E, 0), this._isBulkLoad = !0, this._isDirty = !0, this.onBufferUpdate(), [2]) : [2, this.loadMore(!0)]
                                })
                            })
                        }, this.loadNewer = function() {
                            return r.__awaiter(s, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    if (this.newestCursor) {
                                        if (this.offset + this.maxVisibleSize < this.buffer.length) return this.offset = Math.min(this.offset + E, this.buffer.length - this.maxVisibleSize), this._isBulkLoad = !0, this._isDirty = !0, this.onBufferUpdate(), [2];
                                        if (this._hasNewerLeft) return [2, this.loadMore(!1)]
                                    }
                                    return [2]
                                })
                            })
                        }, this.resetBufferState = function() {
                            s.buffer = [], s.eventMap = new Map, s.offset = 0, s._isDirty = !1, s._hasNewerLeft = !0, s._hasOlderLeft = !0, s.newestCursor = void 0, s.oldestCursor = void 0
                        }, this.loadMore = function(e) {
                            return Object(y.e)(Object(y.c)(l.p.apollo.client.link, {
                                query: N,
                                variables: {
                                    roomID: s.roomID,
                                    channelID: s.channelID,
                                    last: e ? E : void 0,
                                    before: e ? s.oldestCursor : void 0,
                                    first: e ? void 0 : E,
                                    after: e ? void 0 : s.newestCursor
                                }
                            })).then(function(n) {
                                if (n.data && n.data.room.messages) {
                                    var t = !1;
                                    if (n.data.room.messages.edges.forEach(function(n) {
                                            if (!s.eventMap.has(n.node.id)) {
                                                var i = Object(S.c)(n.node),
                                                    o = s.processRoomEvent(i);
                                                o && (t = !0, s.addRoomEventToBuffer(o, n.cursor, e), s._isBulkLoad = !0)
                                            }
                                        }), e && s._hasOlderLeft && n.data.room.messages.edges.length < E && (s._hasOlderLeft = !1, t = !0), !e && s._hasNewerLeft && n.data.room.messages.edges.length < E && (s._hasNewerLeft = !1, t = !0), s.buffer.length > s.maxBufferSize) {
                                        if (e) {
                                            for (var i = 0, o = s.buffer.splice(s.maxBufferSize, s.buffer.length - s.maxBufferSize); i < o.length; i++) {
                                                d = o[i];
                                                s.eventMap.delete(d.id)
                                            }
                                            s._hasNewerLeft = !0, s.newestCursor = void 0;
                                            for (d = 0; d < s.buffer.length; d++) {
                                                if ((m = s.buffer[s.buffer.length - d - 1]) && s.eventMap.get(m.id)) {
                                                    s.newestCursor = s.eventMap.get(m.id);
                                                    break
                                                }
                                            }
                                        } else {
                                            for (var a = 0, r = s.buffer.splice(0, s.buffer.length - s.maxBufferSize); a < r.length; a++) {
                                                var d = r[a];
                                                s.eventMap.delete(d.id)
                                            }
                                            s._hasOlderLeft = !0, s.oldestCursor = void 0;
                                            for (var l = 0, c = s.buffer; l < c.length; l++) {
                                                var m;
                                                if ((m = c[l]) && s.eventMap.get(m.id)) {
                                                    s.oldestCursor = s.eventMap.get(m.id);
                                                    break
                                                }
                                            }
                                        }
                                    }
                                    t && (e || (s.offset = Math.max(s.buffer.length - s.maxVisibleSize, 0)), s._isDirty = !0, s.onBufferUpdate())
                                }
                                s._loadedOnce || (s._loadedOnce = !0, s.onInitialLoad())
                            })
                        }, this.addRoomEventToBuffer = function(e, n, t) {
                            n || (n = t ? s.oldestCursor : s.newestCursor), s.eventMap.has(e.id) || (t ? (s.oldestCursor = n, s.buffer.unshift(e)) : (s.newestCursor = n, s.buffer.push(e)), s.oldestCursor = s.oldestCursor || s.newestCursor, s.newestCursor = s.newestCursor || s.oldestCursor), s.eventMap.set(e.id, n || null)
                        }, this.processRoomEvent = function(e) {
                            switch (e.kind) {
                                case D.a.ModerationEvent:
                                    for (var n = new Date(e.purgeAfter), t = 0; t < s.buffer.length; t++) {
                                        var i = s.buffer[t];
                                        i.kind === D.a.RoomMessageEvent && i.sender.id === e.userID && n <= new Date(i.sentAt) && (s.buffer[t] = r.__assign({}, i, {
                                            deletedAt: (new Date).toISOString()
                                        }), s._isDirty = !0, s.onBufferUpdate())
                                    }
                                    return null;
                                case D.a.DeletedMessageEvent:
                                    var o = s.buffer.findIndex(function(n) {
                                        return n.kind === D.a.RoomMessageEvent && n.id === e.id
                                    });
                                    return o && (s.buffer[o] = r.__assign({}, s.buffer[o], {
                                        deletedAt: (new Date).toISOString()
                                    }), s._isDirty = !0, s.onBufferUpdate()), null;
                                case D.a.RoomMessageEvent:
                                    return e.sender.id && s.blockedUsers.has(e.sender.id) ? null : e;
                                case D.a.SystemMessageEvent:
                                case D.a.CheerbombEvent:
                                    return e;
                                default:
                                    return null
                            }
                        }, this.resetBufferState(), this._loadedOnce = !1, this.blockedUsers = new Set
                    }
                    return e.prototype.toArray = function() {
                        this._isDirty = !1;
                        var e = Math.min(this.offset + this.maxVisibleSize, this.buffer.length);
                        return this.buffer.slice(this.offset, e)
                    }, Object.defineProperty(e.prototype, "length", {
                        get: function() {
                            return this.buffer.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "isDirty", {
                        get: function() {
                            return this._isDirty
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "isBulkLoad", {
                        get: function() {
                            return this._isBulkLoad
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "hasNewerLeft", {
                        get: function() {
                            return !!this.newestCursor && (this._hasNewerLeft || this.offset + this.maxVisibleSize < this.buffer.length)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "hasOlderLeft", {
                        get: function() {
                            return this._hasOlderLeft || this.offset > 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.setBlockedUsers = function(e) {
                        this.blockedUsers = new Set(e)
                    }, e
                }(),
                w = t("VS9Q"),
                R = function() {
                    return function(e, n, t) {
                        var i = this;
                        this.roomID = e, this.channelID = n, this.consumeRoomEvent = t, this.unsubscribe = function() {
                            i.unsubscribeChatRoomTopic && i.unsubscribeChatRoomTopic(), i.unsubscribeChatRoomsChanneTopic && i.unsubscribeChatRoomsChanneTopic(), i.unsubscribeCheerbombEvents && i.unsubscribeCheerbombEvents()
                        }, this.unsubscribeChatRoomTopic = l.l.subscribe({
                            topic: Object(p.h)(this.roomID),
                            onMessage: function(e) {
                                var n = Object(w.d)(e);
                                switch (e.type) {
                                    case u.PubsubMessageType.ChatRoomMessageCreated:
                                        i.consumeRoomEvent(Object(S.c)(n.node), n.cursor);
                                        break;
                                    case u.PubsubMessageType.ChatRoomMessageDeleted:
                                        i.consumeRoomEvent(Object(S.b)(n.node))
                                }
                            }
                        }), this.unsubscribeChatRoomsChanneTopic = l.l.subscribe({
                            topic: Object(p.i)(this.channelID),
                            onMessage: function(e) {
                                switch (e.type) {
                                    case u.PubsubMessageType.PurgeMessageRequest:
                                        var n = e;
                                        i.consumeRoomEvent(Object(S.d)(n.data.channel_id, n.data.user_id, n.data.purge_after))
                                }
                            }
                        }), this.unsubscribeCheerbombEvents = l.l.subscribe({
                            topic: Object(p.k)(this.channelID),
                            onMessage: function(e) {
                                switch (e.type) {
                                    case u.PubsubMessageType.CheerbombEvent:
                                        var n = e;
                                        i.consumeRoomEvent(Object(S.a)(i.roomID, n.data.userID, n.data.displayName, n.data.userLogin, n.data.selectedCount, n.data.minCheerAmount, n.data.bitsAmount, n.data.domain))
                                }
                            }
                        })
                    }
                }(),
                _ = t("lZCe"),
                O = t("Mj6i"),
                T = t("tIid"),
                F = t("geRD"),
                A = t("oe5X"),
                L = t("D7An"),
                j = t("uIkQ"),
                U = t("qnat"),
                x = t("/i69"),
                B = t("IRJ5"),
                P = t("bhOa"),
                V = t("gcd7"),
                H = t("Q8Sx"),
                W = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.setEmoteOnlyMode = function(e) {
                            return e && e.trim().length > 0 ? {
                                deferred: Promise.resolve({
                                    notice: Object(l.d)('Usage: "/emoteonly" - Enables emote-only mode (only emoticons may be used in chat). Use "emoteonlyoff" to disable.', "EmoteOnlyCommandHandler")
                                })
                            } : {
                                deferred: n.props.updateRoomModes({
                                    variables: {
                                        input: {
                                            roomID: n.props.roomID,
                                            enableEmotesOnlyMode: !0
                                        }
                                    }
                                }).then(function() {
                                    return {
                                        notice: Object(l.d)("emote-only mode has been enabled for this room.", "EmoteOnlyCommandHandler")
                                    }
                                }).catch(function() {
                                    return {
                                        notice: Object(l.d)("Unable to set emote-only mode.", "EmoteOnlyCommandHandler")
                                    }
                                })
                            }
                        }, n.unsetEmoteOnlyMode = function(e) {
                            return e && e.trim().length > 0 ? {
                                deferred: Promise.resolve({
                                    notice: Object(l.d)('Usage: "/emoteonlyoff" - Disables emote-only mode.', "EmoteOnlyCommandHandler")
                                })
                            } : {
                                deferred: n.props.updateRoomModes({
                                    variables: {
                                        input: {
                                            roomID: n.props.roomID,
                                            enableEmotesOnlyMode: !1
                                        }
                                    }
                                }).then(function() {
                                    return {
                                        notice: Object(l.d)("emote-only mode has been disabled for this room.", "EmoteOnlyCommandHandler")
                                    }
                                }).catch(function() {
                                    return {
                                        notice: Object(l.d)("Unable to unset emote-only mode.", "EmoteOnlyCommandHandler")
                                    }
                                })
                            }
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(f.Ya, {
                            display: f.X.Hide
                        }, s.createElement(V.a, {
                            command: "emoteonly",
                            handler: this.setEmoteOnlyMode
                        }), s.createElement(V.a, {
                            command: "emoteonlyoff",
                            handler: this.unsetEmoteOnlyMode
                        }))
                    }, n
                }(s.Component),
                Y = Object(c.a)(H, {
                    name: "updateRoomModes"
                })(W),
                q = t("DLhE"),
                G = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.showHelp = function(e) {
                            var t = n.props.chatCommands.sort().map(function(e) {
                                return "/" + e
                            });
                            return {
                                deferred: Promise.resolve({
                                    notice: Object(l.d)("Available commands: {commands}.", {
                                        commands: t.join(", ")
                                    }, "HelpCommandHandler")
                                })
                            }
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(f.Ya, {
                            display: f.X.Hide
                        }, s.createElement(V.a, {
                            command: "help",
                            handler: this.showHelp
                        }))
                    }, n
                }(s.Component);
            var X, $ = Object(o.connect)(function(e) {
                    return {
                        chatCommands: Object(q.a)(e)
                    }
                })(G),
                z = t("D91L"),
                Q = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.sendMessage = function(e) {
                            return n.props.sendMessage("/me " + e), {}
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(f.Ya, {
                            display: f.X.Hide
                        }, s.createElement(V.a, {
                            command: "me",
                            handler: this.sendMessage
                        }))
                    }, n
                }(s.Component),
                J = t("PtXu"),
                K = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.setR9kMode = function(e) {
                            return e && e.trim().length > 0 ? {
                                deferred: Promise.resolve({
                                    notice: Object(l.d)('Usage: "/r9k" - Enables r9k mode. See http://link.twitch.tv/r9k for details. Use "r9koff" to disable.', "R9kCommandHandler")
                                })
                            } : {
                                deferred: n.props.updateRoomModes({
                                    variables: {
                                        input: {
                                            roomID: n.props.roomID,
                                            enableR9KMode: !0
                                        }
                                    }
                                }).then(function() {
                                    return {
                                        notice: Object(l.d)("r9k mode has been enabled for this room.", "R9kCommandHandler")
                                    }
                                }).catch(function() {
                                    return {
                                        notice: Object(l.d)("Unable to set r9k mode.", "R9kCommandHandler")
                                    }
                                })
                            }
                        }, n.unsetR9kMode = function(e) {
                            return e && e.trim().length > 0 ? {
                                deferred: Promise.resolve({
                                    notice: Object(l.d)('Usage: "/r9koff" - Disables r9k mode.', "R9kCommandHandler")
                                })
                            } : {
                                deferred: n.props.updateRoomModes({
                                    variables: {
                                        input: {
                                            roomID: n.props.roomID,
                                            enableR9KMode: !1
                                        }
                                    }
                                }).then(function() {
                                    return {
                                        notice: Object(l.d)("r9k mode has been disabled for this room.", "R9kCommandHandler")
                                    }
                                }).catch(function() {
                                    return {
                                        notice: Object(l.d)("Unable to unset r9k mode.", "R9kCommandHandler")
                                    }
                                })
                            }
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(f.Ya, {
                            display: f.X.Hide
                        }, s.createElement(V.a, {
                            command: "r9k",
                            handler: this.setR9kMode
                        }), s.createElement(V.a, {
                            command: "r9koff",
                            handler: this.unsetR9kMode
                        }))
                    }, n
                }(s.Component),
                Z = Object(c.a)(H, {
                    name: "updateRoomModes"
                })(K),
                ee = t("WytW"),
                ne = 120,
                te = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.setSlowMode = function(e) {
                            var t = Object(ee.n)("/slow " + e);
                            return t ? {
                                deferred: n.props.updateRoomModes({
                                    variables: {
                                        input: {
                                            roomID: n.props.roomID,
                                            enableSlowMode: !0,
                                            slowModeDurationSeconds: t.duration || ne
                                        }
                                    }
                                }).then(function() {
                                    return {
                                        notice: Object(l.d)("This room is now in slow mode. You may send messages every {length} seconds.", {
                                            length: t.duration || ne
                                        }, "SlowCommandHandler")
                                    }
                                }).catch(function() {
                                    return {
                                        notice: Object(l.d)("Unable to set slow mode.", "SlowCommandHandler")
                                    }
                                })
                            } : {
                                deferred: Promise.resolve({
                                    notice: Object(l.d)('Usage: "/slow [duration]" - Enables slow mode (limit how often users may send messages). Duration (optional, default=120) must be a positive number of seconds. Use "slowoff" to disable.', "SlowCommandHandler")
                                })
                            }
                        }, n.unsetSlowMode = function(e) {
                            return e && e.trim().length > 0 ? {
                                deferred: Promise.resolve({
                                    notice: Object(l.d)('Usage: "/slowoff" - Disables slow mode.', "SlowCommandHandler")
                                })
                            } : {
                                deferred: n.props.updateRoomModes({
                                    variables: {
                                        input: {
                                            roomID: n.props.roomID,
                                            enableSlowMode: !1
                                        }
                                    }
                                }).then(function() {
                                    return {
                                        notice: Object(l.d)("This room is no longer in slow mode.", "SlowCommandHandler")
                                    }
                                }).catch(function() {
                                    return {
                                        notice: Object(l.d)("Unable to unset slow mode.", "SlowCommandHandler")
                                    }
                                })
                            }
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(f.Ya, {
                            display: f.X.Hide
                        }, s.createElement(V.a, {
                            command: "slow",
                            handler: this.setSlowMode
                        }), s.createElement(V.a, {
                            command: "slowoff",
                            handler: this.unsetSlowMode
                        }))
                    }, n
                }(s.Component),
                ie = Object(c.a)(H, {
                    name: "updateRoomModes"
                })(te),
                oe = t("vKai"),
                ae = t("7htX"),
                re = t("8in3"),
                se = t("gTu3"),
                de = t("RcPG"),
                le = t("YXxK"),
                ce = t("lNGo"),
                me = t("ySk3"),
                ue = t("oi4T"),
                pe = function() {
                    var e = Array.from(Array(21).keys()).map(function(e) {
                        return he(e)
                    });
                    return s.createElement(f.Ya, {
                        className: "fake-room-list",
                        display: f.X.Flex,
                        flexDirection: f.Aa.Column,
                        flexWrap: f.Ba.NoWrap,
                        overflow: f.db.Hidden,
                        flexGrow: 1
                    }, s.createElement(f.Ya, {
                        className: "fake-room-list__lines"
                    }, e))
                },
                he = function(e) {
                    return s.createElement(f.Ya, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        key: e
                    }, s.createElement(f.Qa, {
                        display: f.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, s.createElement(f.W, {
                        type: f.Wb.Span
                    }, s.createElement(f.jb, {
                        width: 70
                    }))), s.createElement(f.Qa, {
                        display: f.X.InlineBlock
                    }, s.createElement(f.W, {
                        type: f.Wb.Span
                    }, s.createElement(f.jb, {
                        width: 50 + 89 * e % 151
                    }))))
                },
                fe = t("8/mp"),
                ge = t("oK83"),
                ve = (t("SO+K"), function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.usernameClickHandler = function(e) {
                            var t = e.currentTarget.getAttribute("data-username");
                            t && n.props.onUsernameClick(t, ge.a.member_list, "", e.currentTarget.getBoundingClientRect().bottom)
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = this,
                            n = this.props,
                            t = n.viewers,
                            i = n.header,
                            o = t.map(function(n) {
                                return s.createElement("div", {
                                    key: "member-list-group-item-" + n
                                }, s.createElement("button", {
                                    className: "member-list-group__button",
                                    "data-username": n,
                                    onClick: e.usernameClickHandler
                                }, s.createElement(f.W, {
                                    transform: f.Vb.Capitalize
                                }, n)))
                            });
                        return s.createElement(f.Ya, {
                            className: "member-list-group",
                            padding: {
                                bottom: 2
                            }
                        }, s.createElement(f.W, {
                            transform: f.Vb.Uppercase
                        }, i), o)
                    }, n
                }(s.Component)),
                be = t("mc7N");
            t("bvt6");
            ! function(e) {
                e.Admin = "ADMIN", e.GlobalMod = "GLOBALMOD", e.Moderator = "MOD", e.Broadcaster = "BROADCASTER", e.Staff = "STAFF", e.Regular = "REGULAR"
            }(X || (X = {}));
            var ke = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {}, n
                }
                return r.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e = this.props.data.loading && s.createElement(f.ab, {
                        fillContent: !0
                    });
                    return s.createElement(f.Ya, {
                        className: "member-list",
                        fullWidth: !0,
                        fullHeight: !0,
                        flexShrink: 0,
                        zIndex: f.jc.Default
                    }, s.createElement(f.Ya, {
                        className: "member-list__pane",
                        display: f.X.Flex,
                        flexDirection: f.Aa.Column,
                        flexWrap: f.Ba.NoWrap,
                        position: f.kb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, s.createElement(f.Ya, {
                        className: "member-list__header",
                        display: f.X.Flex,
                        justifyContent: f.Xa.Center,
                        alignItems: f.f.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 2
                        },
                        flexShrink: 0
                    }, s.createElement(f.Ya, {
                        position: f.kb.Absolute,
                        attachLeft: !0,
                        margin: {
                            left: 1
                        }
                    }, s.createElement(f.A, {
                        icon: f.ub.Close,
                        ariaLabel: Object(l.d)("Close", "MemberList"),
                        onClick: this.props.closeMemberList,
                        "data-test-selector": "member-list-close-button"
                    })), s.createElement(f.W, null, Object(l.d)("Member List", "MemberList"))), this.renderMembers(), e))
                }, n.prototype.renderMembers = function() {
                    if (this.props.data.loading || this.props.data.error) return null;
                    var e = [],
                        n = this.props.data.room.members.edges,
                        t = this.props.onUsernameClick,
                        i = {
                            broadcaster: n.filter(function(e) {
                                return e.type === X.Broadcaster
                            }).map(function(e) {
                                return e.node.displayName
                            }),
                            staff: n.filter(function(e) {
                                return e.type === X.Staff
                            }).map(function(e) {
                                return e.node.displayName
                            }),
                            admin: n.filter(function(e) {
                                return e.type === X.Admin
                            }).map(function(e) {
                                return e.node.displayName
                            }),
                            globalMod: n.filter(function(e) {
                                return e.type === X.GlobalMod
                            }).map(function(e) {
                                return e.node.displayName
                            }),
                            moderator: n.filter(function(e) {
                                return e.type === X.Moderator
                            }).map(function(e) {
                                return e.node.displayName
                            }),
                            member: n.filter(function(e) {
                                return e.type === X.Regular
                            }).map(function(e) {
                                return e.node.displayName
                            })
                        };
                    return i.broadcaster.length > 0 && e.push(s.createElement(ve, {
                        key: "member-group-broadcaster",
                        header: Object(l.d)("Broadcaster", "MemberList"),
                        viewers: i.broadcaster,
                        onUsernameClick: t
                    })), i.staff.length > 0 && e.push(s.createElement(ve, {
                        key: "member-group-staff",
                        header: Object(l.d)("Staff", "MemberList"),
                        viewers: i.staff,
                        onUsernameClick: t
                    })), i.admin.length > 0 && e.push(s.createElement(ve, {
                        key: "member-group-admins",
                        header: Object(l.d)("Admins", "MemberList"),
                        viewers: i.admin,
                        onUsernameClick: t
                    })), i.globalMod.length > 0 && e.push(s.createElement(ve, {
                        key: "member-group-global-mods",
                        header: Object(l.d)("Global Moderators", "MemberList"),
                        viewers: i.globalMod,
                        onUsernameClick: t
                    })), i.moderator.length > 0 && e.push(s.createElement(ve, {
                        key: "member-group-moderators",
                        header: Object(l.d)("Moderators", "MemberList"),
                        viewers: i.moderator,
                        onUsernameClick: t
                    })), i.member.length > 0 && e.push(s.createElement(ve, {
                        key: "member-group-members",
                        header: Object(l.d)("Members", "MemberList"),
                        viewers: i.member,
                        onUsernameClick: t
                    })), s.createElement(fe.b, {
                        className: "member-list__list"
                    }, s.createElement(f.Ya, {
                        padding: {
                            x: 2
                        }
                    }, e))
                }, n = r.__decorate([Object(h.b)("MemberList"), Object(c.a)(be, {
                    options: function(e) {
                        return {
                            variables: {
                                roomID: e.roomID
                            }
                        }
                    }
                })], n)
            }(s.Component);
            var ye = Object(k.b)(function(e) {
                    return {
                        onUsernameClick: e.onShowViewerCard
                    }
                })(ke),
                De = t("eJ65"),
                Ne = t("8Ad5"),
                Se = t("f00E"),
                Ie = t("DMoW"),
                Ce = t("okS7"),
                Ee = t("ry0r"),
                Me = t("5zXJ"),
                we = t("XmgI"),
                Re = t("ebRM"),
                _e = t("RiD7"),
                Oe = t("mmRu"),
                Te = t("cpJf"),
                Fe = t("17x9"),
                Ae = t("QVaV"),
                Le = t("lZdE"),
                je = t("uu1w"),
                Ue = t("60o1"),
                xe = 5,
                Be = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.autocompleteType = je.a.Mention, t.canBeTriggeredByTab = !0, t.getMatches = function(e, n) {
                            return n || e.startsWith("@") ? t.getMentions(e, n) : null
                        }, t.getMentions = function(e, n) {
                            var i = n ? e : e.substring(1),
                                o = new RegExp("^" + Object(Le.a)(i), "i");
                            return t.state.sortedRoomMembers.filter(function(e) {
                                return o.test(e.login) || o.test(e.displayName)
                            }).slice(0, xe).map(function(i) {
                                return {
                                    current: e,
                                    replacement: (n ? "" : "@") + i.displayName,
                                    element: t.renderMention(i)
                                }
                            })
                        }, t.renderMention = function(e) {
                            return s.createElement("span", null, Object(Ae.a)(e.login, e.displayName))
                        }, t.sortChatMembers = function(e) {
                            var n = [{
                                    id: e.channelID,
                                    login: e.channelLogin,
                                    chatColor: "",
                                    displayName: Object(Ue.a)(e.channelDisplayName, e.channelLogin).userDisplayName,
                                    displayBadges: [],
                                    __typename: "User"
                                }],
                                t = e.roomMembers;
                            return t.sort(function(e, n) {
                                return e.login < n.login ? -1 : e.login > n.login ? 1 : 0
                            }), n.concat(t)
                        }, t.state = {
                            sortedRoomMembers: t.sortChatMembers(n)
                        }, t
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.unregister = this.context.registerAutocompleteProvider(this)
                    }, n.prototype.componentWillUnmount = function() {
                        this.unregister()
                    }, n.prototype.componentWillReceiveProps = function(e) {
                        this.props.roomMembers === e.roomMembers && this.props.channelDisplayName === e.channelDisplayName && this.props.channelLogin === e.channelLogin && this.props.channelID === e.channelID || this.setState({
                            sortedRoomMembers: this.sortChatMembers(e)
                        })
                    }, n.prototype.render = function() {
                        return null
                    }, n.contextTypes = {
                        registerAutocompleteProvider: Fe.func
                    }, n
                }(s.Component),
                Pe = (t("BsQe"), function() {
                    return s.createElement(f.Ya, {
                        fullWidth: !0,
                        position: f.kb.Absolute,
                        className: "rooms-bits-prompt"
                    }, s.createElement(f.Fb, {
                        border: !0,
                        background: f.r.Base,
                        elevation: 3,
                        fullWidth: !0,
                        padding: 1,
                        textAlign: f.Sb.Center,
                        className: "rooms-bits-prompt__content"
                    }, s.createElement(f.Ya, {
                        padding: {
                            y: 1
                        }
                    }, s.createElement(f.W, {
                        color: f.O.Link,
                        type: f.Wb.H4,
                        bold: !0
                    }, Object(l.d)("Cheering is not available in Rooms", "DisabledBitsCard"))), s.createElement(f.Ya, {
                        display: f.X.Flex,
                        justifyContent: f.Xa.Center
                    }, s.createElement("img", {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/86/3.0",
                        width: "42",
                        height: "35"
                    })), s.createElement(f.Ya, {
                        padding: {
                            y: 1
                        }
                    }, s.createElement(f.W, null, Object(l.d)("To Cheer in this channel to support the streamer, please cheer in Stream Chat", "DisabledBitsCard")))))
                }),
                Ve = t("fvjX"),
                He = t("/0dD"),
                We = t("jZLd"),
                Ye = t("XDQu"),
                qe = t("+pBb"),
                Ge = t("SDEh"),
                Xe = t("edgk"),
                $e = t("F6GT"),
                ze = t("Qp14"),
                Qe = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.onDarkModeToggle = function() {
                            var e = n.props.darkModeEnabled ? He.a.Light : He.a.Dark;
                            n.props.onThemeChanged(e, !n.props.isPopout)
                        }, n.onModIconsToggle = function() {
                            Object($e.b)("showModIcons", !n.props.showModerationIcons), n.props.showModerationIcons ? n.props.onModIconsDisable() : n.props.onModIconsEnable()
                        }, n.onSlowModeToggle = function() {
                            0 === n.props.data.room.modes.slowModeDurationSeconds ? n.props.sendMessage("/slow") : n.props.sendMessage("/slowoff")
                        }, n.onTimestampToggle = function() {
                            Object($e.b)("showTimestamps", !n.props.showTimestamps), n.props.showTimestamps ? n.props.onTimestampsDisable() : n.props.onTimestampsEnable()
                        }, n.onChatPopout = function() {
                            n.props.onChatHide();
                            var e = window.open("/popout/" + n.props.data.room.owner.login + "/chat?popout=", "_blank", "right=50,top=50,width=400,height=600,resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
                            e && !Object(Ge.a)() && (e.focus(), Object(Xe.a)(e, function() {
                                n.props.onChatUnhide()
                            }))
                        }, n.hasModPermissions = function() {
                            var e = n.props.sessionUser,
                                t = n.props.data,
                                i = t.room,
                                o = t.user;
                            return !!e && (o.roles.isGlobalMod || o.roles.isSiteAdmin || e.id === i.owner.id || !!i.owner.self && i.owner.self.isModerator)
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, n.prototype.render = function() {
                        return this.props.data.loading ? s.createElement(f.jb, {
                            lineCount: 4
                        }) : this.props.data.error ? s.createElement(f.Ya, null) : s.createElement(fe.b, {
                            className: "room-settings"
                        }, s.createElement(f.Fb, {
                            className: "room-settings__content",
                            background: f.r.Base,
                            color: f.O.Base,
                            padding: 2
                        }, this.renderChatOptions(), this.renderModTools()))
                    }, n.prototype.renderChatOptions = function() {
                        if (!this.props.data) return null;
                        var e = this.props.isPopout && s.createElement(f.N, {
                            checked: this.props.darkModeEnabled,
                            "data-test-selector": "dark-mode-checkbox",
                            id: "room-settings-dark-mode",
                            label: Object(l.d)("Dark Mode", "RoomSettings"),
                            onChange: this.onDarkModeToggle
                        });
                        return s.createElement(f.Ya, null, s.createElement(f.Fb, {
                            padding: {
                                bottom: 2
                            }
                        }, s.createElement(f.W, {
                            color: f.O.Alt2,
                            transform: f.Vb.Uppercase
                        }, Object(l.d)("Chat Options", "RoomSettings"))), s.createElement(f.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(f.N, {
                            checked: this.props.showTimestamps,
                            "data-test-selector": "timestamps-selector",
                            id: "room-settings-timestamp",
                            label: Object(l.d)("Timestamps", "RoomSettings"),
                            onChange: this.onTimestampToggle
                        })), s.createElement(f.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, e), s.createElement(f.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement("button", {
                            onClick: this.onChatPopout,
                            "data-test-selector": "popout-button"
                        }, Object(l.d)("Popout", "RoomSettings"))))
                    }, n.prototype.renderModTools = function() {
                        if (this.hasModPermissions()) return s.createElement(f.Fb, {
                            borderTop: !0,
                            "data-test-selector": "mod-tools",
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            }
                        }, s.createElement(f.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(f.W, {
                            color: f.O.Alt2,
                            transform: f.Vb.Uppercase
                        }, Object(l.d)("Mod Tools", "RoomSettings"))), s.createElement(f.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(f.N, {
                            checked: this.props.showModerationIcons,
                            "data-test-selector": "mod-icons-checkbox",
                            id: "room-settings-mod-icons",
                            label: Object(l.d)("Mod Icons", "RoomSettings"),
                            onChange: this.onModIconsToggle
                        })), s.createElement(f.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(f.N, {
                            checked: 0 !== this.props.data.room.modes.slowModeDurationSeconds,
                            id: "room-settings-slow-mode",
                            label: Object(l.d)("Slow Mode", "RoomSettings"),
                            onChange: this.onSlowModeToggle
                        })))
                    }, n = r.__decorate([Object(c.a)(ze, {
                        options: function(e) {
                            return {
                                variables: {
                                    roomID: e.roomID,
                                    isLoggedIn: !!e.sessionUser,
                                    userID: e.sessionUser && e.sessionUser.id
                                }
                            }
                        }
                    }), Object(h.b)("RoomSettings")], n)
                }(s.Component);
            var Je, Ke = Object(o.connect)(function(e) {
                    return {
                        darkModeEnabled: Object(Ye.a)(e) === He.a.Dark,
                        showModerationIcons: e.chat.showModIcons,
                        showTimestamps: e.chat.showTimestamps,
                        theatreModeEnabled: e.ui.theatreModeEnabled,
                        sessionUser: Object(a.e)(e)
                    }
                }, function(e) {
                    return Object(Ve.bindActionCreators)({
                        onChatHide: function() {
                            return qe.L()
                        },
                        onChatUnhide: function() {
                            return qe.O()
                        },
                        onModIconsDisable: function() {
                            return qe.B()
                        },
                        onModIconsEnable: function() {
                            return qe.G()
                        },
                        onTimestampsDisable: function() {
                            return qe.E()
                        },
                        onTimestampsEnable: function() {
                            return qe.J()
                        },
                        onThemeChanged: function(e) {
                            return Object(We.b)(e, void 0, !1)
                        }
                    }, e)
                })(Qe),
                Ze = t("xwyu"),
                en = t("bAna"),
                nn = /\S/;
            ! function(e) {
                e[e.Bits = 0] = "Bits", e[e.Emotes = 1] = "Emotes", e[e.None = 2] = "None"
            }(Je || (Je = {}));
            var tn = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.cancelDelayedSend = null, t.confirmDelayedSend = null, t.onKeyDown = function(e) {
                            switch (e.charCode || e.keyCode) {
                                case Ne.a.Enter:
                                    return void(e.shiftKey || (e.preventDefault(), t.handleMessageSend()))
                            }
                        }, t.onMessageValueUpdate = function(e) {
                            t.setState({
                                currentMessageInput: e
                            })
                        }, t.handleMessageSend = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, n, t, i = this;
                                return r.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return nn.test(this.state.currentMessageInput) ? this.state.isSendingBits ? [2] : 0 === (e = Object(Re.a)(this.state.messageCheers)).total ? (this.props.sendMessage(this.state.currentMessageInput), this.setState({
                                                currentMessageInput: ""
                                            }), this.chatInputRef.focus(), this.autocompleteInputRef.setValue(""), [2]) : (n = this.props.data.user && this.props.data.user.campaignProperties && this.props.data.user.campaignProperties.domains && this.props.data.user.campaignProperties.domains.length > 0 || !1, this.props.bitsConfig.orderedActions.length && n && Object(T.b)(this.props.channelID, this.props.user) && "on" === l.p.experiments.getAssignment(L.b.OWLRoomCheering) && this.props.data.currentUser && null !== this.props.data.currentUser.bitsBalance && this.props.data.user && null !== this.props.data.user.cheer && this.props.bitsConfig && Object(Re.g)({
                                                messageBits: e,
                                                balance: this.props.data.currentUser.bitsBalance,
                                                cheerMinimumBits: this.props.data.user.cheer.settings.cheerMinimumBits,
                                                emoteMinimumBits: this.props.data.user.cheer.settings.emoteMinimumBits,
                                                inputValue: this.state.currentMessageInput,
                                                bitsConfig: this.props.bitsConfig
                                            }).canSpend ? (this.setState({
                                                isSendingBits: !0
                                            }), e.total >= Me.r ? [4, new Promise(function(e) {
                                                var n = setTimeout(e, Me.v.UNDO_PROMPT_DURATION),
                                                    t = function(t) {
                                                        void 0 === t && (t = !1), clearTimeout(n), i.cancelDelayedSend = null, i.confirmDelayedSend = null, e(t)
                                                    };
                                                i.cancelDelayedSend = function() {
                                                    return t(!0)
                                                }, i.confirmDelayedSend = function() {
                                                    return t(!1)
                                                }
                                            })] : [3, 2]) : [2]) : [2];
                                        case 1:
                                            if (o.sent()) return this.setState({
                                                isSendingBits: !1
                                            }), this.chatInputRef.focus(), [2];
                                            o.label = 2;
                                        case 2:
                                            t = Object(Se.a)(), o.label = 3;
                                        case 3:
                                            return o.trys.push([3, 5, , 6]), [4, this.props.sendCheer({
                                                variables: {
                                                    input: {
                                                        id: t,
                                                        roomID: this.props.roomID,
                                                        targetID: this.props.channelID,
                                                        bits: e.total,
                                                        content: this.state.currentMessageInput
                                                    }
                                                }
                                            })];
                                        case 4:
                                            return o.sent(), [3, 6];
                                        case 5:
                                            return o.sent(), this.setState({
                                                isSendingBits: !1
                                            }), this.chatInputRef.focus(), [2];
                                        case 6:
                                            return this.setState({
                                                isSendingBits: !1,
                                                showCard: Je.None,
                                                currentMessageInput: ""
                                            }), this.chatInputRef.focus(), this.autocompleteInputRef.setValue(""), [2]
                                    }
                                })
                            })
                        }, t.onBitsIconClick = function() {
                            t.state.showCard === Je.Bits ? t.trackBitsCardInteraction(_e.a.CloseCard) : t.trackBitsCardInteraction(_e.a.OpenCard), t.setState({
                                showCard: t.state.showCard === Je.Bits ? Je.None : Je.Bits
                            })
                        }, t.onBitsClose = function() {
                            t.state.showCard === Je.Bits && t.setState({
                                showCard: Je.None
                            }), t.trackBitsCardInteraction(_e.a.CloseCard)
                        }, t.trackBitsCardInteraction = function(e, n) {
                            var t = {
                                actionName: e,
                                emoteType: n && n.emoteType,
                                emoteLevel: n && n.emoteLevel,
                                location: n && n.location,
                                displayedBalance: 0
                            };
                            Object(_e.h)(t)
                        }, t.onClickEmote = function(e) {
                            var n = t.state.currentMessageInput;
                            t.state.currentMessageInput.length > 0 && !t.state.currentMessageInput.endsWith(" ") && (n += " "), n += e + " ", t.setState({
                                currentMessageInput: n
                            }), t.autocompleteInputRef.setValue(n)
                        }, t.onShowMemberList = function() {
                            t.state.showCard !== Je.None && t.setState({
                                showCard: Je.None
                            }), t.props.showMemberList()
                        }, t.onEmotePickerToggle = function() {
                            t.setState(function(e) {
                                return {
                                    showCard: e.showCard !== Je.Emotes ? Je.Emotes : Je.None
                                }
                            })
                        }, t.syncMembers = function() {
                            t.props.activeMembers.isDirty && t.setState({
                                roomMembers: t.props.activeMembers.getActiveMembers()
                            })
                        }, t.setChatInputRef = function(e) {
                            return t.chatInputRef = e
                        }, t.setAutocompleteInputRef = function(e) {
                            return t.autocompleteInputRef = e
                        }, t.state = {
                            roomMembers: n.activeMembers.getActiveMembers(),
                            currentMessageInput: "",
                            showCard: Je.None,
                            messageCheers: [],
                            isSendingBits: !1
                        }, t
                    }
                    return r.__extends(n, e), n.prototype.componentWillMount = function() {
                        this.syncMembersHandle = setInterval(this.syncMembers, 250)
                    }, n.prototype.componentWillUnmount = function() {
                        this.syncMembersHandle && (clearInterval(this.syncMembersHandle), this.syncMembersHandle = 0)
                    }, n.prototype.componentWillUpdate = function(e, n) {
                        if (n.currentMessageInput !== this.state.currentMessageInput && e.bitsConfig.orderedActions.length) {
                            var t = [];
                            Object(we.f)(n.currentMessageInput, e.bitsConfig).forEach(function(e) {
                                e.type === de.a.Emote && t.push(e.content)
                            }), t.length ? (this.setState({
                                showCard: Je.Bits,
                                messageCheers: t
                            }), Object(_e.h)({
                                actionName: _e.a.CheeringInRoom,
                                displayedBalance: 0
                            })) : this.setState({
                                showCard: Je.None,
                                messageCheers: t
                            })
                        }
                    }, n.prototype.render = function() {
                        var e = this,
                            n = [s.createElement(Oe.b, {
                                key: "emote-picker",
                                onClick: this.onEmotePickerToggle,
                                isActive: this.state.showCard === Je.Emotes
                            })],
                            t = null,
                            i = this.props.data.user && this.props.data.user.campaignProperties && this.props.data.user.campaignProperties.domains && this.props.data.user.campaignProperties.domains.length > 0 || !1,
                            o = this.props.bitsConfig.orderedActions.length && i && Object(T.b)(this.props.channelID, this.props.user);
                        return o && (n.unshift(s.createElement(_.a, {
                            key: "cheer",
                            assignments: {
                                fallback: function() {
                                    return null
                                },
                                off: function() {
                                    return null
                                },
                                on: function() {
                                    return s.createElement(f.A, {
                                        key: "bits",
                                        icon: f.ub.Bits,
                                        ariaLabel: Object(l.d)("Bits", "RoomInput"),
                                        type: f.C.Secondary,
                                        onClick: e.onBitsIconClick,
                                        "data-a-target": "bits-button"
                                    })
                                }
                            },
                            name: L.b.OWLRoomCheering
                        })), t = s.createElement(_.a, {
                            assignments: {
                                fallback: function() {
                                    return s.createElement(f.Ya, {
                                        display: e.state.showCard === Je.Bits ? f.X.Block : f.X.Hide
                                    }, s.createElement(Pe, null))
                                },
                                off: function() {
                                    return s.createElement(f.Ya, {
                                        display: e.state.showCard === Je.Bits ? f.X.Block : f.X.Hide
                                    }, s.createElement(Pe, null))
                                },
                                on: function() {
                                    return s.createElement(Ee.a, {
                                        bitsConfig: e.props.bitsConfig,
                                        channelID: e.props.channelID,
                                        channelLogin: e.props.channelLogin,
                                        currentCheers: e.state.messageCheers,
                                        isSending: e.state.isSendingBits,
                                        isStaff: e.props.user && e.props.user.roles && e.props.user.roles.isStaff || !1,
                                        onCancelSend: e.cancelDelayedSend,
                                        onClickCheermote: e.onClickEmote,
                                        onConfirmSend: e.confirmDelayedSend,
                                        onUserClose: e.onBitsClose,
                                        trackBitsCardInteraction: e.trackBitsCardInteraction,
                                        visible: e.state.showCard === Je.Bits,
                                        cheerMessageAutoModded: !1,
                                        bitsSendErrorCode: Ie.Q.UNKNOWN,
                                        bitsSendHasError: !1
                                    })
                                }
                            },
                            name: L.b.OWLRoomCheering
                        })), s.createElement(f.Ya, {
                            className: "room-input",
                            padding: {
                                x: 2,
                                bottom: 2
                            }
                        }, s.createElement(f.Ya, {
                            position: f.kb.Relative,
                            zIndex: f.jc.Default
                        }, this.state.showCard === Je.Bits && !o && s.createElement(Pe, null), s.createElement(Oe.c, {
                            channelOwnerID: this.props.channelID,
                            roomID: this.props.roomID,
                            emotePickerSource: Te.a.Room,
                            onClickEmote: this.onClickEmote,
                            toggleVisibility: this.onEmotePickerToggle,
                            visible: this.state.showCard === Je.Emotes
                        }), t, s.createElement(Ce.b, {
                            componentType: Ce.a.TextArea,
                            suggestionSource: Ce.c.Chat,
                            onValueUpdate: this.onMessageValueUpdate,
                            onKeyDown: this.onKeyDown,
                            componentRefDelegate: this.setChatInputRef,
                            refDelegate: this.setAutocompleteInputRef,
                            noResize: !0,
                            paddingRight: 30 * n.length,
                            placeholder: Object(l.d)("Send a message", "RoomInput"),
                            "data-test-selector": "room-input-textarea"
                        }, s.createElement(Ce.d, {
                            emotes: this.props.emotes
                        }), s.createElement(Be, {
                            channelDisplayName: this.props.channelDisplayName,
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelLogin,
                            roomMembers: this.state.roomMembers
                        })), s.createElement(f.Ya, {
                            position: f.kb.Absolute,
                            attachRight: !0,
                            attachTop: !0
                        }, n)), s.createElement(f.Ya, {
                            display: f.X.Flex,
                            justifyContent: f.Xa.Between,
                            margin: {
                                top: 1
                            }
                        }, s.createElement(f.Ya, {
                            display: f.X.Flex,
                            flexDirection: f.Aa.Row
                        }, s.createElement(De.a, null, s.createElement(f.A, {
                            icon: f.ub.Gear,
                            ariaLabel: Object(l.d)("Room Settings", "RoomInput")
                        }), s.createElement(f.u, {
                            direction: f.v.Top,
                            noTail: !0,
                            offsetY: "11px"
                        }, s.createElement(Ke, {
                            roomID: this.props.roomID,
                            isPopout: this.props.isPopout,
                            sendMessage: this.props.sendMessage
                        }))), s.createElement(f.A, {
                            ariaLabel: Object(l.d)("Member List", "RoomInput"),
                            icon: f.ub.ViewerList,
                            onClick: this.onShowMemberList
                        })), s.createElement(f.z, {
                            onClick: this.handleMessageSend,
                            "data-test-selector": "room-input-button"
                        }, Object(l.d)("Chat", "RoomInput"))))
                    }, n
                }(s.Component),
                on = Object(d.compose)(Object(h.b)("RoomInput", {
                    autoReportInteractive: !0
                }), Object(c.a)(Ze, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(c.a)(en, {
                    name: "sendCheer"
                }))(tn);
            var an = Object(o.connect)(function(e) {
                    return {
                        user: Object(a.e)(e)
                    }
                })(on),
                rn = t("v148"),
                sn = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, n.prototype.render = function() {
                        if (this.props.data && this.props.data.loading) return s.createElement(f.Ya, null);
                        if (this.props.data && this.props.data.error) return s.createElement(f.Ya, null);
                        if (this.props.data && !this.props.allowedToChat) {
                            var e = this.props.data.room,
                                n = Object(l.d)("You are viewing {displayName}’s #{roomName}. You have to subscribe to chat here! Subscribe above the player.", {
                                    displayName: e.owner.displayName,
                                    roomName: e.name
                                }, "RoomInteractionPane");
                            return s.createElement(f.Ya, {
                                padding: {
                                    bottom: 2,
                                    x: 2
                                }
                            }, s.createElement(f.Fb, {
                                padding: {
                                    bottom: 1,
                                    x: 2
                                },
                                borderTop: !0
                            }), s.createElement(f.Ya, {
                                padding: {
                                    bottom: 1
                                }
                            }, s.createElement(f.Ya, {
                                display: f.X.Flex,
                                flexDirection: f.Aa.Column,
                                fullHeight: !0,
                                justifyContent: f.Xa.Center
                            }, s.createElement(f.W, {
                                "data-test-selector": "subscription-upsell",
                                color: f.O.Alt
                            }, n))), s.createElement(f.z, {
                                type: f.F.Hollow,
                                onClick: this.props.handleStreamChatClick
                            }, Object(l.d)("Back to Stream Chat", "RoomInteractionPane")))
                        }
                        return s.createElement(f.Ya, {
                            "data-test-selector": "interaction-enabled"
                        }, s.createElement(an, {
                            activeMembers: this.props.activeMembers,
                            bitsConfig: this.props.bitsConfig,
                            channelDisplayName: this.props.channelDisplayName,
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelLogin,
                            emotes: this.props.emotes,
                            isPopout: this.props.isPopout,
                            roomID: this.props.roomID,
                            sendMessage: this.props.sendMessage,
                            showMemberList: this.props.showMemberList
                        }))
                    }, n = r.__decorate([Object(c.a)(rn, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        },
                        skip: function(e) {
                            return e.allowedToChat
                        }
                    }), Object(h.b)("RoomInteractionPane")], n)
                }(s.Component),
                dn = t("MHUA");
            var ln = t("+oKn"),
                cn = 200,
                mn = function() {
                    return function(e) {
                        var n = this;
                        this.resetWithRoomOwnerID = function(e) {
                            n.activeMemberIDs = new Set, n.activeMembers = {}, n.roomOwnerID = e, n.currentUserID = null, n.isDirty = !0
                        }, this.getActiveMembers = function() {
                            return n.isDirty = !1, Object.keys(n.activeMembers).map(function(e) {
                                return n.activeMembers[e]
                            })
                        }, this.setCurrentUserID = function(e) {
                            n.currentUserID = e, n.activeMemberIDs.has(e) && (n.isDirty = !0, n.removeActiveMember(e))
                        }, this.consumeRoomMessage = function(e) {
                            n.handleActiveMember(e.sender)
                        }, this.userLoginFromDisplayName = function(e) {
                            var t = Object.keys(n.activeMembers).find(function(t) {
                                return n.activeMembers[t] && n.activeMembers[t].displayName === e
                            });
                            return t ? n.activeMembers[t].login || null : e
                        }, this.handleActiveMember = function(e) {
                            e.id !== n.roomOwnerID && e.id !== n.currentUserID && (n.activeMemberIDs.has(e.id) ? (n.activeMemberIDs.delete(e.id), n.addActiveMember(e)) : (n.addActiveMember(e), n.trimActiveMembers(), n.isDirty = !0))
                        }, this.addActiveMember = function(e) {
                            n.activeMemberIDs.add(e.id), n.activeMembers[e.id] = e
                        }, this.removeActiveMember = function(e) {
                            n.activeMemberIDs.delete(e), delete n.activeMembers[e]
                        }, this.trimActiveMembers = function() {
                            if (!(n.activeMemberIDs.size <= cn))
                                for (var e = n.activeMemberIDs.size - cn, t = n.activeMemberIDs.values(), i = 0; i < e; i++) {
                                    var o = t.next().value;
                                    n.removeActiveMember(o)
                                }
                        }, this.resetWithRoomOwnerID(e)
                    }
                }(),
                un = t("vcHY"),
                pn = t("UJc8"),
                hn = t("Vgpr"),
                fn = t("pbBk"),
                gn = (t("N4Vp"), ["137512364", "188864445", "188863650", "190160460", "192718746"]),
                vn = 3e4,
                bn = 6e4,
                kn = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.state = {
                            showMemberList: !1,
                            hasSeenFirstTimeRoomTopic: !1
                        }, t.hasQueuedUpdate = !1, t.isLastReadAtThrottled = !1, t.lastReadAtThrottleTimer = null, t.renderPlaceholders = function() {
                            return s.createElement(f.Fb, {
                                className: "room-pane",
                                display: f.X.Flex,
                                flexDirection: f.Aa.Column,
                                flexWrap: f.Ba.NoWrap,
                                position: f.kb.Relative,
                                flexGrow: 1,
                                fullHeight: !0,
                                overflow: f.db.Hidden,
                                color: f.O.Base,
                                borderLeft: !0
                            }, s.createElement(pe, null))
                        }, t.sendMessage = function(e) {
                            if (e && 0 !== e.length && t.props.sessionUser) {
                                var n = Object(ee.i)(e, t.props.channel && t.props.channel.login || "");
                                if (n.command)
                                    if (n.handled) n.result && n.result.deferred && n.result.deferred.then(function(e) {
                                        var n = e.notice;
                                        n && t.props.onRoomEvent(Object(S.f)(n))
                                    });
                                    else {
                                        var i = Object(l.d)("Unrecognized command: /{command}", {
                                            command: n.command
                                        }, "RoomPane");
                                        t.props.onRoomEvent(Object(S.f)(i))
                                    }
                                else t.sendRoomMessage(e);
                                Object(ce.a)({
                                    channelID: t.props.channelID,
                                    channelLogin: t.props.channel && t.props.channel.login || "",
                                    emotePickerSessionID: t.props.emotePickerSessionID,
                                    isHostMode: t.props.isHostMode,
                                    roomID: t.props.roomID,
                                    roomMinimumRole: t.props.minimumAllowedRole,
                                    player: t.props.isPopout ? le.a.Embed : le.a.Web,
                                    subOnlyMode: t.props.minimumAllowedRole === pn.b.Subscriber
                                });
                                for (var o = 0, a = Object(A.a)(e, {
                                        mentions: {
                                            senderLogin: t.props.sessionUser.login,
                                            sessionUser: t.props.sessionUser
                                        }
                                    }); o < a.length; o++) {
                                    var r = a[o];
                                    r.type === de.a.Mention && r.content.currentUserMentionRelation !== se.a.Recipient && Object(me.a)({
                                        channelLogin: t.props.channel && t.props.channel.login || "",
                                        isHostMode: t.props.isHostMode,
                                        mentionedUserDisplayName: r.content.recipient,
                                        roomID: t.props.roomID,
                                        roomMinimumRole: t.props.minimumAllowedRole,
                                        userLogin: t.props.sessionUser.login
                                    })
                                }
                            }
                        }, t.sendRoomMessage = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var n, t, i, o, a, s, d, l, c;
                                return r.__generator(this, function(m) {
                                    switch (m.label) {
                                        case 0:
                                            return [4, this.props.sendRoomMessage(Object(F.a)({
                                                roomID: this.props.roomID,
                                                message: e
                                            }))];
                                        case 1:
                                            return n = m.sent(), t = n.data.sendRoomMessage, i = t.message, o = t.error, null !== i ? (a = {
                                                sender: r.__assign({}, i.sender, {
                                                    displayBadges: this.props.user && this.props.user.displayBadges || []
                                                })
                                            }, s = r.__assign({}, i, a), this.props.onRoomEvent(Object(S.c)(s))) : null !== o && (d = o.code, l = o.remainingDurationSeconds, c = void 0, c = l ? Object(un.a)(d, {
                                                remainingDurationSeconds: l
                                            }) : Object(un.a)(d), this.props.onRoomEvent(Object(S.f)(c))), [2]
                                    }
                                })
                            })
                        }, t.showMemberList = function() {
                            t.props.closeRoomPicker && t.props.closeRoomPicker(), t.setState({
                                showMemberList: !0
                            })
                        }, t.closeMemberList = function() {
                            t.setState({
                                showMemberList: !1
                            })
                        }, t.hasModPermissions = function() {
                            var e = t.props,
                                n = e.channel,
                                i = e.channelID,
                                o = e.sessionUser,
                                a = e.user;
                            return !!o && !!a && !!n && (a.roles.isGlobalMod || a.roles.isSiteAdmin || o.id === i || !!n.self && n.self.isModerator)
                        }, t.onUpdateLastReadAt = function() {
                            Object(y.e)(Object(y.c)(l.p.apollo.client.link, r.__assign({
                                query: ln
                            }, function(e) {
                                return r.__assign({}, Object(F.a)({
                                    lastReadAt: (new Date).toISOString(),
                                    roomID: e
                                }))
                            }(t.props.roomID))))
                        }, t.throttleLastReadAtUpdate = function() {
                            t.onUpdateLastReadAt(), t.isLastReadAtThrottled = !0, t.lastReadAtThrottleTimer = setTimeout(t.unthrottleLastReadAtUpdate, vn)
                        }, t.unthrottleLastReadAtUpdate = function() {
                            t.hasQueuedUpdate ? (t.throttleLastReadAtUpdate(), t.hasQueuedUpdate = !1) : t.isLastReadAtThrottled = !1
                        }, t.activeMembers = new mn(n.channelID), n.sessionUser && t.activeMembers.setCurrentUserID(n.sessionUser.id), t.trackingIntervalHandle = setInterval(function() {
                            Object(ue.c)({
                                channelID: t.props.channelID,
                                channelLogin: t.props.channel && t.props.channel.login || "",
                                isHostMode: t.props.isHostMode,
                                roomID: t.props.roomID,
                                roomMinimumRole: t.props.minimumAllowedRole
                            })
                        }, bn), t
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, n.prototype.componentWillReceiveProps = function(e) {
                        var n = this,
                            t = this.props;
                        !e.loading && ((e.isFirstTimeVisit || gn.includes(this.props.channelID)) && e.roomTopic && e.roomTopic.length > 0 && !this.state.hasSeenFirstTimeRoomTopic || void 0 !== this.props.roomTopic && this.props.roomTopic !== e.roomTopic) && (this.setState({
                            hasSeenFirstTimeRoomTopic: !0
                        }), this.props.onRoomEvent(Object(S.e)(e.roomTopic && e.roomTopic || ""))), e.sessionUser && t.sessionUser !== e.sessionUser && this.activeMembers.setCurrentUserID(e.sessionUser.id), t.channelID !== e.channelID && this.activeMembers.resetWithRoomOwnerID(e.channelID);
                        var i = t.roomEvents.length;
                        (this.props.loading && !e.loading || i !== e.roomEvents.length) && t.roomEvents[i - 1] === e.roomEvents[i - 1] && e.roomEvents.slice(i).forEach(function(e) {
                            e.kind === D.a.RoomMessageEvent && n.activeMembers.consumeRoomMessage(Object(S.c)(e))
                        })
                    }, n.prototype.componentDidUpdate = function(e) {
                        (e.loading && !this.props.loading || e.roomEvents.length !== this.props.roomEvents.length) && (this.isLastReadAtThrottled ? this.hasQueuedUpdate = !0 : this.throttleLastReadAtUpdate())
                    }, n.prototype.componentWillUnmount = function() {
                        this.lastReadAtThrottleTimer && clearTimeout(this.lastReadAtThrottleTimer), this.trackingIntervalHandle && clearInterval(this.trackingIntervalHandle)
                    }, n.prototype.render = function() {
                        var e = this;
                        if (this.props.loading || !this.props.bufferLoaded) return this.renderPlaceholders();
                        if (this.props.error) return s.createElement(f.Ya, null);
                        var n = this.state.showMemberList && s.createElement(ye, {
                                roomID: this.props.roomID,
                                closeMemberList: this.closeMemberList
                            }),
                            t = this.props.emoteSetsData && this.props.emoteSetsData.emoteSets || [],
                            i = this.props.user && this.props.user.campaignProperties && this.props.user.campaignProperties.domains && this.props.user.campaignProperties.domains.length > 0 || !1,
                            o = null;
                        return this.props.bitsConfig.orderedActions.length && i && Object(T.b)(this.props.channelID, this.props.sessionUser) && (o = s.createElement(_.a, {
                            assignments: {
                                fallback: function() {
                                    return null
                                },
                                off: function() {
                                    return null
                                },
                                on: function() {
                                    return s.createElement(U.a, {
                                        bitsConfig: e.props.bitsConfig,
                                        blockLinks: !0,
                                        channelID: e.props.channelID,
                                        currentUserDisplayName: e.props.sessionUser && e.props.sessionUser.displayName,
                                        currentUserLogin: e.props.sessionUser && e.props.sessionUser.login,
                                        userID: e.props.sessionUser && e.props.sessionUser.id
                                    })
                                }
                            },
                            name: L.b.OWLRoomCheering
                        })), s.createElement(f.Fb, {
                            className: "room-pane",
                            display: f.X.Flex,
                            flexDirection: f.Aa.Column,
                            flexWrap: f.Ba.NoWrap,
                            position: f.kb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            overflow: f.db.Hidden,
                            color: f.O.Base,
                            borderLeft: !0
                        }, this.renderCommandHandlers(), s.createElement(ae.RaidNotification, {
                            channelID: this.props.channelID
                        }), o, s.createElement(dn.a, {
                            badgeSets: this.props.badgeSets || [],
                            bitsConfig: this.props.bitsConfig,
                            channelID: this.props.channelID,
                            currentUserLogin: this.props.sessionUser && this.props.sessionUser.login,
                            roomID: this.props.roomID,
                            hasModPermissions: this.hasModPermissions(),
                            isBulkLoad: this.props.isBulkLoad,
                            loadOlder: this.props.loadOlder,
                            loadNewer: this.props.loadNewer,
                            messages: this.props.roomEvents,
                            hasOlderLeft: this.props.hasOlderLeft,
                            hasNewerLeft: this.props.hasNewerLeft,
                            showModerationIcons: this.props.showModerationIcons,
                            showTimestamps: this.props.showTimestamps,
                            sendMessage: this.sendMessage,
                            onUsernameClick: this.props.onUsernameClick,
                            loadNewest: this.props.loadNewest
                        }), n, s.createElement(sn, {
                            activeMembers: this.activeMembers,
                            allowedToChat: this.props.allowedToChat,
                            bitsConfig: this.props.bitsConfig,
                            channelDisplayName: this.props.channel && this.props.channel.displayName || "",
                            channelID: this.props.channelID,
                            channelLogin: this.props.channel && this.props.channel.login || "",
                            emotes: t,
                            handleStreamChatClick: this.props.handleStreamChatClick,
                            isPopout: this.props.isPopout,
                            roomID: this.props.roomID,
                            sendMessage: this.sendMessage,
                            showMemberList: this.showMemberList
                        }), s.createElement(f.Ya, {
                            className: "room-pane__viewer-card",
                            fullHeight: !0,
                            fullWidth: !0,
                            position: f.kb.Absolute,
                            zIndex: f.jc.Default
                        }, s.createElement(re.a, {
                            isPopout: this.props.isPopout,
                            isEmbedded: !1,
                            onSendMessage: this.sendMessage,
                            channelID: this.props.channelID
                        })))
                    }, n.prototype.renderCommandHandlers = function() {
                        if (this.props.passThroughCommands) return null;
                        var e = this.props.emoteSetsData && this.props.emoteSetsData.emoteMap || {};
                        return s.createElement(s.Fragment, null, s.createElement(x.a, {
                            channelID: this.props.channelID,
                            displayNameToLogin: this.activeMembers.userLoginFromDisplayName
                        }), s.createElement(P.a, null), s.createElement(Y, {
                            roomID: this.props.roomID
                        }), s.createElement($, null), s.createElement(z.a, {
                            currentUserLogin: this.props.sessionUser && this.props.sessionUser.login
                        }), s.createElement(Q, {
                            sendMessage: this.sendRoomMessage
                        }), s.createElement(J.a, {
                            channelID: this.props.channelID,
                            displayNameToLogin: this.activeMembers.userLoginFromDisplayName
                        }), s.createElement(Z, {
                            roomID: this.props.roomID
                        }), s.createElement(ie, {
                            roomID: this.props.roomID
                        }), s.createElement(B.a, {
                            channelLogin: this.props.channelLogin,
                            isPopout: this.props.isPopout
                        }), s.createElement(oe.a, {
                            isEmbedded: this.props.isEmbedded,
                            isPopout: this.props.isPopout,
                            userLogin: this.props.user && this.props.user.login || "",
                            userID: this.props.user && this.props.user.id || "",
                            emoteMap: e
                        }))
                    }, n
                }(s.Component),
                yn = Object(d.compose)(Object(c.a)(hn, {
                    props: function(e) {
                        var n = new j.c([]);
                        return e.data && e.data.badges && e.data.room && e.data.room.owner.broadcastBadges && (n = new j.c(e.data.badges, e.data.room.owner.broadcastBadges, e.data.room.owner.login)), {
                            error: e.data && e.data.error,
                            loading: !e.data || e.data.loading,
                            badgeSets: n,
                            channel: e.data && e.data.room && e.data.room.owner,
                            roomTopic: e.data && e.data.room && e.data.room.topic,
                            user: e.data && e.data.user,
                            isFirstTimeVisit: !(!e.data || !e.data.room || null !== e.data.room.self.lastReadAt),
                            minimumAllowedRole: e.data && e.data.room && e.data.room.minimumAllowedRole
                        }
                    },
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                channelID: e.channelID,
                                roomID: e.roomID,
                                isLoggedIn: e.isLoggedIn,
                                userID: e.sessionUser && e.sessionUser.id
                            }
                        }
                    }
                }), Object(O.a)(), Object(c.a)(fn, {
                    name: "sendRoomMessage"
                }), Object(h.b)("RoomPane"))(kn),
                Dn = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.onRoomBufferUpdate = function() {
                            t.syncBufferHandle || (t.syncBufferHandle = setTimeout(t.syncBufferedMessages, 0))
                        }, t.onInitialLoad = function() {
                            t.syncBufferedMessages(!0)
                        }, t.syncBufferedMessages = function(e) {
                            void 0 === e && (e = !1), t.roomBuffer && t.roomBuffer.isDirty && (t.state.bufferLoaded || e) && t.setState({
                                bufferLoaded: t.state.bufferLoaded || e,
                                roomEvents: t.roomBuffer.toArray(),
                                hasOlderLeft: t.roomBuffer.hasOlderLeft,
                                hasNewerLeft: t.roomBuffer.hasNewerLeft,
                                isBulkLoad: t.roomBuffer.isBulkLoad
                            }, function() {
                                t.clearBufferHandle()
                            })
                        }, t.clearBufferHandle = function() {
                            t.syncBufferHandle && (clearTimeout(t.syncBufferHandle), t.syncBufferHandle = 0)
                        }, t.roomBuffer = new M(n.roomID, n.channelID, t.onRoomBufferUpdate, t.onInitialLoad), t.roomService = new R(n.roomID, n.channelID, t.roomBuffer.consumeRoomEvent), t.roomBuffer.setBlockedUsers(n.blockedUsers), t.state = {
                            roomEvents: [],
                            isBulkLoad: !1,
                            bufferLoaded: !1,
                            hasOlderLeft: !0,
                            hasNewerLeft: !0
                        }, t
                    }
                    return r.__extends(n, e), n.prototype.componentWillReceiveProps = function(e) {
                        this.props.blockedUsers !== e.blockedUsers && this.roomBuffer.setBlockedUsers(e.blockedUsers)
                    }, n.prototype.componentWillUnmount = function() {
                        this.roomService.unsubscribe(), this.clearBufferHandle()
                    }, n.prototype.componentDidMount = function() {
                        this.roomBuffer.loadOlder()
                    }, n.prototype.render = function() {
                        return s.createElement(yn, r.__assign({}, this.props, {
                            hasOlderLeft: this.state.hasOlderLeft,
                            hasNewerLeft: this.state.hasNewerLeft,
                            isBulkLoad: this.state.isBulkLoad,
                            bufferLoaded: this.state.bufferLoaded,
                            loadNewer: this.roomBuffer.loadNewer,
                            loadOlder: this.roomBuffer.loadOlder,
                            onRoomEvent: this.roomBuffer.consumeRoomEvent,
                            roomEvents: this.state.roomEvents,
                            closeRoomPicker: this.props.closeRoomPicker,
                            loadNewest: this.roomBuffer.loadNewest
                        }))
                    }, n
                }(s.Component);
            var Nn = Object(k.b)(function(e) {
                    return {
                        onUsernameClick: e.onShowViewerCard
                    }
                })(Dn),
                Sn = Object(d.compose)(Object(o.connect)(function(e) {
                    return {
                        sessionUser: Object(a.e)(e),
                        emotePickerSessionID: e.chat.emotePickerSessionID,
                        isLoggedIn: Object(a.f)(e),
                        showModerationIcons: e.chat.showModIcons,
                        showTimestamps: e.chat.showTimestamps
                    }
                }), Object(b.a)())(function(e) {
                    return s.createElement(k.a, null, s.createElement(Nn, r.__assign({}, e)))
                }),
                In = t("ZeiN"),
                Cn = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        var e = this;
                        l.l.subscribe({
                            topic: Object(p.i)(this.props.channelID),
                            onMessage: function(n) {
                                n.type === u.PubsubMessageType.ChatRoomDeleted && e.props.roomID === n.data.room.room_id && e.props.onDelete && e.props.onDelete()
                            }
                        })
                    }, n.prototype.componentWillReceiveProps = function(e) {
                        var n = this.props.data;
                        !n || !e.data || n.loading || e.data.loading || e.data.room.isPreviewable === n.room.isPreviewable && e.data.room.minimumAllowedRole === n.room.minimumAllowedRole || n.refetch()
                    }, n.prototype.render = function() {
                        return this.props.data ? this.props.data.loading ? s.createElement(f.Ya, null) : this.props.data.error || !this.props.data.room || this.props.data.room.minimumAllowedRole === pn.b.Moderator && !this.props.data.room.self.permissions.readMessages ? s.createElement(v, {
                            handleStreamChatClick: this.props.handleStreamChatClick,
                            roomID: this.props.roomID,
                            type: i.BadPermissions
                        }) : this.props.isDeleted ? s.createElement(v, {
                            handleStreamChatClick: this.props.handleStreamChatClick,
                            roomID: this.props.roomID,
                            type: i.Deleted
                        }) : this.props.data.room.self.permissions.readMessages || this.props.data.room.minimumAllowedRole !== pn.b.Subscriber ? this.props.data.chatRoomBanStatus && this.props.data.chatRoomBanStatus.isPermanent ? s.createElement(v, {
                            handleStreamChatClick: this.props.handleStreamChatClick,
                            roomID: this.props.roomID,
                            type: i.Banned
                        }) : s.createElement(Sn, {
                            key: this.props.roomID,
                            bitsConfig: this.props.bitsConfig,
                            allowedToChat: this.props.data.room.self.permissions.sendMessages,
                            channelLogin: this.props.channelLogin,
                            channelID: this.props.channelID,
                            handleStreamChatClick: this.props.handleStreamChatClick,
                            roomID: this.props.roomID,
                            isEmbedded: this.props.isEmbedded,
                            isPopout: this.props.isPopout,
                            closeRoomPicker: this.props.closeRoomPicker,
                            isHostMode: this.props.isHostMode,
                            passThroughCommands: this.props.passThroughCommands
                        }) : s.createElement(v, {
                            handleStreamChatClick: this.props.handleStreamChatClick,
                            roomID: this.props.roomID,
                            type: i.NoPreview
                        }) : null
                    }, n
                }(s.Component),
                En = Object(d.compose)(Object(c.a)(In, {
                    options: function(e) {
                        return {
                            variables: {
                                roomID: e.roomID,
                                channelID: e.channelID,
                                userID: e.sessionUser && e.sessionUser.id
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.sessionUser
                    }
                }), Object(m.a)(function(e) {
                    return {
                        query: In,
                        variables: {
                            roomID: e.roomID,
                            channelID: e.channelID,
                            userID: e.sessionUser && e.sessionUser.id
                        },
                        topic: Object(p.h)(e.roomID),
                        type: u.PubsubMessageType.ChatRoomUpdated,
                        mutator: function(e, n) {
                            return e.type === u.PubsubMessageType.ChatRoomUpdated && (n.room.name = e.data.room.name, n.room.topic = e.data.room.topic, n.room.isPreviewable = e.data.room.is_previewable, n.room.minimumAllowedRole = e.data.room.minimum_allowed_role), n
                        }
                    }
                }), Object(m.a)(function(e) {
                    return {
                        query: In,
                        variables: {
                            roomID: e.roomID,
                            channelID: e.channelID,
                            userID: e.sessionUser && e.sessionUser.id
                        },
                        topic: Object(p.j)("" + (e.sessionUser && e.sessionUser.id)),
                        type: u.PubsubMessageType.ChatRoomsRoomViewUpdated,
                        mutator: function(n, t) {
                            return n.data.room_view.room.room_id === e.roomID && (t.room.self.permissions.readMessages = n.data.room_view.permissions.read_messages, t.room.self.permissions.sendMessages = n.data.room_view.permissions.send_messages, t.user.self.isModerator = n.data.room_view.permissions.moderate), t
                        }
                    }
                }), Object(h.b)("Room"))(Cn);
            var Mn = Object(o.connect)(function(e) {
                return {
                    sessionUser: Object(a.e)(e)
                }
            })(En);
            t.d(n, "Room", function() {
                return Mn
            })
        },
        YQMO: function(e, n, t) {},
        YVMW: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "InvalidRoomView"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
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
                                                value: "displayName"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 89
                }
            };
            t.loc.source = {
                body: "query InvalidRoomView($id: ID!) {\nroom(id: $id) {\nid\nname\nowner {\ndisplayName\nlogin\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        ZeiN: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Room"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "roomID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "userID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "chatRoomBanStatus"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "channelID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "userID"
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
                                        value: "isPermanent"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "roomID"
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "topic"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isPreviewable"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "minimumAllowedRole"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "permissions"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "readMessages"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sendMessages"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
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
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isModerator"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 299
                }
            };
            t.loc.source = {
                body: "query Room($roomID: ID! $channelID: ID! $userID: ID!) {\nchatRoomBanStatus(channelID: $channelID userID: $userID) {\nisPermanent\n}\nroom(id: $roomID) {\nid\nname\ntopic\nisPreviewable\nminimumAllowedRole\nself {\npermissions {\nreadMessages\nsendMessages\n}\n}\n}\nuser(id: $channelID) {\nid\nself {\nisModerator\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "aU+G": function(e, n, t) {
            "use strict";
            var i;
            t.d(n, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.RoomMessageEvent = 0] = "RoomMessageEvent", e[e.ModerationEvent = 1] = "ModerationEvent", e[e.SystemMessageEvent = 2] = "SystemMessageEvent", e[e.DeletedMessageEvent = 3] = "DeletedMessageEvent", e[e.CheerbombEvent = 4] = "CheerbombEvent"
                }(i || (i = {}))
        },
        aUoe: function(e, n, t) {
            "use strict";
            t.d(n, "c", function() {
                return r
            }), t.d(n, "d", function() {
                return s
            }), t.d(n, "e", function() {
                return d
            }), t.d(n, "a", function() {
                return l
            }), t.d(n, "b", function() {
                return c
            });
            var i = t("mrSG"),
                o = t("/7QA"),
                a = t("6XEL");

            function r(e) {
                return Object(a.c)({
                    headers: m(),
                    path: "/kraken/raids/" + e + "/join",
                    method: "POST"
                })
            }

            function s(e) {
                return Object(a.c)({
                    headers: m(),
                    path: "/kraken/raids/" + e + "/leave",
                    method: "POST"
                })
            }

            function d(e) {
                return Object(a.c)({
                    headers: m(),
                    path: "/kraken/raids/go?source_id=" + e,
                    method: "POST"
                })
            }

            function l(e) {
                return Object(a.c)({
                    headers: m(),
                    path: "/kraken/raids?source_id=" + e,
                    method: "DELETE"
                })
            }

            function c(e, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Object(a.c)({
                                    headers: m(),
                                    path: "/kraken/raids?source_id=" + e + "&target_id=" + n,
                                    method: "POST"
                                })];
                            case 1:
                                return [2, t.sent()]
                        }
                    })
                })
            }

            function m() {
                return {
                    "X-Device-Id": o.p.session.deviceID
                }
            }
        },
        b6Yk: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            });
            var i = t("mrSG"),
                o = t("/7QA"),
                a = t("kRBY"),
                r = function() {
                    function e() {}
                    return e.get = function(e, n, t) {
                        return void 0 === n && (n = {}), void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, n, {
                                            method: "GET"
                                        }), t)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, n, t) {
                        return void 0 === n && (n = {}), void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, n, {
                                            method: "GET"
                                        }), t)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, n, t) {
                        return void 0 === n && (n = {}), void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, n, {
                                            method: "PUT"
                                        }), t)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, n, t) {
                        return void 0 === n && (n = {}), void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, n, {
                                            method: "PUT"
                                        }), t)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, n, t) {
                        return void 0 === n && (n = {}), void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, n, {
                                            method: "POST"
                                        }), t)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, n, t) {
                        return void 0 === n && (n = {}), void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, n, {
                                            method: "POST"
                                        }), t)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, n, t) {
                        return void 0 === n && (n = {}), void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, n, {
                                            method: "DELETE"
                                        }), t)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, n, t) {
                        return void 0 === n && (n = {}), void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, n, {
                                            method: "DELETE"
                                        }), t)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, n, t) {
                        return void 0 === n && (n = {}), void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            var o, a, r, s;
                            return i.__generator(this, function(d) {
                                switch (d.label) {
                                    case 0:
                                        return n = this.constructOptions(n, t), o = n.headers ? n.headers["Content-Type"] : void 0, a = this.serialize(n.body, o), r = i.__assign({}, n, {
                                            body: a
                                        }), [4, this._fetch(e, r)];
                                    case 1:
                                        return s = d.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, d.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, n, t) {
                        return void 0 === n && (n = {}), void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            var o;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.request(e, n, t)];
                                    case 1:
                                        if ((o = a.sent()).requestError) throw o.requestError;
                                        if (o.error) throw new Error("Error while sending legacy-api request: " + o.error.status + " - " + o.error.message);
                                        return [2, i.__assign({}, o, {
                                            body: o.body
                                        })];
                                    case 2:
                                        throw a.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, o.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var n, t, o, a;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        n = {
                                            status: e.status
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return t = i.sent(), e.ok ? n.body = t : n.error = t, [3, 4];
                                    case 3:
                                        return o = i.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (n.requestError = o), [3, 4];
                                    case 4:
                                        return [2, n]
                                }
                            })
                        })
                    }, e._fetch = function(e, n) {
                        return void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), n)];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, n) {
                        return e = Object.assign({}, e, {
                            headers: i.__assign({}, this.getDefaultHeaders(e, n), e.headers)
                        })
                    }, e.serialize = function(e, n) {
                        return "application/json; charset=UTF-8" === n ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: n
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, n) {
                        var t = o.p.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (n.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": o.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var r = Object(a.e)(t);
                        return r && (i.Authorization = "OAuth " + r.authToken, r.legacyCSRFToken && (i["Twitch-Api-Token"] = r.legacyCSRFToken)), n.excludeHeaders && n.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = o.p.logger.withCategory("legacy-api"), e
                }()
        },
        bAna: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "RoomInput_SendCheer"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "SendCheerInput"
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
                                value: "sendCheer"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
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
                                                value: "bitsBalance"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 120
                }
            };
            t.loc.source = {
                body: "mutation RoomInput_SendCheer($input: SendCheerInput!) {\nsendCheer(input: $input) {\nid\ncurrentUser {\nid\nbitsBalance\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        bvt6: function(e, n, t) {},
        dG1e: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return a
            });
            var i = t("mrSG"),
                o = t("b6Yk");

            function a(e, n) {
                return void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, o.a.request(e.path, e, n)];
                            case 1:
                                return t = i.sent(), [2, new r(t, e)]
                        }
                    })
                })
            }
            var r = function() {
                function e(e, n) {
                    this.status = e.status, this.body = e.body, this.error = e.error, this.requestError = e.requestError, this.request = n
                }
                return e.prototype.isSuccess = function() {
                    return this.status >= 200 && this.status < 400 && !this.requestError
                }, e.prototype.isError = function() {
                    return !this.isSuccess()
                }, e
            }()
        },
        eAwD: function(e, n, t) {
            "use strict";

            function i(e) {
                e && requestAnimationFrame(function() {
                    e.scrollIntoView({
                        behavior: "smooth"
                    })
                })
            }
            t.d(n, "a", function() {
                return i
            })
        },
        eRLD: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                o = t("q1tI"),
                a = t("G8UE"),
                r = 10,
                s = 90;

            function d(e) {
                return e < 10 ? a.TimerPhase.waitingFor(r - e) : e < s ? a.TimerPhase.readyFor(s - e) : a.TimerPhase.forced()
            }
            var l = new Map;
            var c = function() {},
                m = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            timerPhase: d(0)
                        }, n.stop = c, n
                    }
                    return i.__extends(n, e), n.prototype.componentDidMount = function() {
                        var e = this;
                        this.stop = function(e, n) {
                            var t = l.get(e);
                            if (t) t.listeners.add(n);
                            else {
                                var i = new Set([n]),
                                    o = 0,
                                    a = setInterval(function() {
                                        o++, i.forEach(function(e) {
                                            return e(o)
                                        })
                                    }, 1e3);
                                t = {
                                    listeners: i,
                                    timerID: a
                                }, l.set(e, t)
                            }
                            return function() {
                                t && (t.listeners.delete(n), 0 === t.listeners.size && (l.delete(e), clearInterval(t.timerID)))
                            }
                        }(this.props.raid.id, function(n) {
                            e.setState({
                                timerPhase: d(n)
                            })
                        })
                    }, n.prototype.componentWillUnmount = function() {
                        this.stop()
                    }, n.prototype.render = function() {
                        return this.props.children(this.state.timerPhase)
                    }, n
                }(o.Component);
            t.d(n, "a", function() {
                return m
            })
        },
        kK7i: function(e, n, t) {},
        "ll/k": function(e, n, t) {
            "use strict";

            function i(e, n) {
                if (void 0 === n && (n = 0), n > e) {
                    var t = n;
                    n = e, e = t
                }
                return n + Math.floor(Math.random() * (e - n + 1))
            }

            function o(e) {
                return e[i(e.length - 1)]
            }

            function a(e, n) {
                for (var t = 0, i = []; t < e;) i.push(n(t)), t += 1;
                return i
            }
            t.d(n, "a", function() {
                return i
            }), t.d(n, "b", function() {
                return o
            }), t.d(n, "c", function() {
                return a
            })
        },
        mc7N: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "MemberList"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "roomID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "roomID"
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
                                        value: "members"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "100"
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
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "displayName"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "type"
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
                    end: 122
                }
            };
            t.loc.source = {
                body: "query MemberList($roomID: ID!) {\nroom(id: $roomID) {\nid\nmembers(first: 100) {\nedges {\nnode {\nid\ndisplayName\n}\ntype\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        oMhb: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RaidNotification_Channels"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sourceChannelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetChannelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "sourceChannel"
                            },
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "sourceChannelID"
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
                                            value: "70"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "targetChannel"
                            },
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "targetChannelID"
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
                                            value: "70"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 268
                }
            };
            t.loc.source = {
                body: "query RaidNotification_Channels($sourceChannelID: ID! $targetChannelID: ID!) {\nsourceChannel: user(id: $sourceChannelID) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\n}\ntargetChannel: user(id: $targetChannelID) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        pbBk: function(e, n, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "RoomPane_SendRoomMessage"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "SendRoomMessageInput"
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
                                value: "sendRoomMessage"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
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
                                        value: "message"
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
                                                value: "deletedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sentAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "roomMessageContent"
                                            },
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sender"
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
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "chatColor"
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
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "slowModeDurationSeconds"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "remainingDurationSeconds"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 338
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/rooms/models/room-message-content-fragment.gql"\nmutation RoomPane_SendRoomMessage($input: SendRoomMessageInput!) {\nsendRoomMessage(input: $input) {\nmessage {\nid\ndeletedAt\nsentAt\n...roomMessageContent\nsender {\nid\nlogin\nchatColor\ndisplayName\n}\n}\nerror {\ncode\nslowModeDurationSeconds\nremainingDurationSeconds\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !o[n] && (o[n] = !0, !0)
                })
            }(t("46lC").definitions)), e.exports = i
        },
        rSo7: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var i = t("/7QA");

            function o(e) {
                var n = Math.floor(e / 60),
                    t = e % 60;
                return n && t ? Object(i.d)("{hours, number}h{minutes, number}m", {
                    hours: n,
                    minutes: t
                }, "StreamSummaryDuration") : n ? Object(i.d)("{hours, number}h", {
                    hours: n
                }, "StreamSummaryDuration") : Object(i.d)("{minutes, number}m", {
                    minutes: t
                }, "StreamSummaryDuration")
            }
        },
        v148: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoomInteractionPane"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
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
                                                value: "login"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 96
                }
            };
            t.loc.source = {
                body: "query RoomInteractionPane($id: ID!) {\nroom(id: $id) {\nid\nname\nowner {\nid\ndisplayName\nlogin\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        vcHY: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            });
            var i = t("/7QA"),
                o = {
                    NAME_LENGTH_INVALID: function(e) {
                        var n = e.maxChars,
                            t = e.minChars;
                        return Object(i.d)("The name must be between {minChars} and {maxChars} characters.", {
                            minChars: t,
                            maxChars: n
                        }, "RoomErrorCodes")
                    },
                    SLOW_MODE_ENFORCEMENT_FAILED: function(e) {
                        var n = e.remainingDurationSeconds;
                        return Object(i.d)("This room is in slow mode and you are sending messages too quickly. You will be able to talk again in {remainingDurationSeconds} seconds.", {
                            remainingDurationSeconds: n
                        }, "RoomErrorCodes")
                    },
                    TOPIC_LENGTH_INVALID: function(e) {
                        var n = e.maxChars;
                        return Object(i.d)("The topic may not exceed {maxChars} characters.", {
                            maxChars: n
                        }, "RoomErrorCodes")
                    },
                    USER_CHAT_TIMED_OUT: function(e) {
                        var n = e.remainingDurationSeconds;
                        return Object(i.d)("You are timed out and cannot chat for {remainingDurationSeconds} seconds.", {
                            remainingDurationSeconds: n
                        }, "RoomErrorCodes")
                    }
                },
                a = {
                    AUTO_MOD_ENFORCEMENT_FAILED: function() {
                        return Object(i.d)("Your message contains inappropriate content.", "RoomErrorCodes")
                    },
                    EMOTE_ONLY_MODE_ENFORCEMENT_FAILED: function() {
                        return Object(i.d)("This Room is in emote-only mode and your message does not contain only emoticons.", "RoomErrorCodes")
                    },
                    NAME_CONTAINS_INVALID_CHARACTERS: function() {
                        return Object(i.d)("The name contains invalid characters.", "RoomErrorCodes")
                    },
                    NAME_NOT_UNIQUE: function() {
                        return Object(i.d)("There is already a room with this name.", "RoomErrorCodes")
                    },
                    NAME_INAPPROPRIATE: function() {
                        return Object(i.d)("The name contains inappropriate content.", "RoomErrorCodes")
                    },
                    R9K_MODE_ENFORCEMENT_FAILED: function() {
                        return Object(i.d)("This Room is in R9K mode and your message is not unique enough.", "RoomErrorCodes")
                    },
                    RATE_LIMIT_FAILED: function() {
                        return Object(i.d)("Your message was not sent because you are sending messages too quickly.", "RoomErrorCodes")
                    },
                    SPAM_ENFORCEMENT_FAILED: function() {
                        return Object(i.d)("This message has been flagged as spam.", "RoomErrorCodes")
                    },
                    TOPIC_INAPPROPRIATE: function() {
                        return Object(i.d)("The topic contains inappropriate content.", "RoomErrorCodes")
                    },
                    USER_SUSPENDED: function() {
                        return Object(i.d)("Your account has been suspended.", "RoomErrorCodes")
                    }
                };

            function r(e, n) {
                return e in a ? a[e]() : e in o && n ? o[e](n) : Object(i.d)("Error", "RoomErrorCodes")
            }
        },
        xwyu: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoomInput_CheerSettings"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                        value: "bitsBalance"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
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
                                        value: "campaignProperties"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "domains"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "cheer"
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
                                                value: "settings"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "emoteMinimumBits"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cheerMinimumBits"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "event"
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
                    end: 206
                }
            };
            t.loc.source = {
                body: "query RoomInput_CheerSettings($channelID: ID!) {\ncurrentUser {\nid\nbitsBalance\n}\nuser(id: $channelID) {\nid\ncampaignProperties {\ndomains\n}\ncheer {\nid\nsettings {\nemoteMinimumBits\ncheerMinimumBits\nevent\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        }
    }
]);