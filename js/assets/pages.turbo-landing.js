(window.webpackJsonp = window.webpackJsonp || []).push([
    [84], {
        "+Mtq": function(e, t, n) {},
        "/aPz": function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return o
            }), n.d(t, "h", function() {
                return s
            }), n.d(t, "i", function() {
                return c
            }), n.d(t, "j", function() {
                return l
            }), n.d(t, "H", function() {
                return u
            }), n.d(t, "I", function() {
                return d
            }), n.d(t, "n", function() {
                return p
            }), n.d(t, "A", function() {
                return m
            }), n.d(t, "G", function() {
                return f
            }), n.d(t, "r", function() {
                return h
            }), n.d(t, "s", function() {
                return g
            }), n.d(t, "o", function() {
                return v
            }), n.d(t, "t", function() {
                return b
            }), n.d(t, "v", function() {
                return y
            }), n.d(t, "l", function() {
                return k
            }), n.d(t, "d", function() {
                return S
            }), n.d(t, "c", function() {
                return _
            }), n.d(t, "B", function() {
                return C
            }), n.d(t, "b", function() {
                return E
            }), n.d(t, "a", function() {
                return N
            }), n.d(t, "E", function() {
                return O
            }), n.d(t, "F", function() {
                return w
            }), n.d(t, "m", function() {
                return x
            }), n.d(t, "C", function() {
                return T
            }), n.d(t, "D", function() {
                return D
            }), n.d(t, "J", function() {
                return I
            }), n.d(t, "q", function() {
                return A
            }), n.d(t, "w", function() {
                return F
            }), n.d(t, "f", function() {
                return P
            }), n.d(t, "g", function() {
                return R
            }), n.d(t, "x", function() {
                return B
            }), n.d(t, "k", function() {
                return U
            }), n.d(t, "p", function() {
                return L
            }), n.d(t, "u", function() {
                return j
            }), n.d(t, "z", function() {
                return X
            }), n.d(t, "y", function() {
                return W
            });
            var i = n("/7QA"),
                r = n("0Log"),
                a = n("geRD");

            function o(e) {
                return r.PubsubTopic.BroadcastSettingsUpdate + "." + e
            }

            function s(e) {
                return r.PubsubTopic.ChatRoom + "." + e
            }

            function c(e) {
                return r.PubsubTopic.ChatRoomsChannel + "." + e
            }

            function l(e) {
                return r.PubsubTopic.ChatRoomsUser + "." + e
            }

            function u(e) {
                return r.PubsubTopic.VideoPlayback + "." + e
            }

            function d(e) {
                return r.PubsubTopic.VideoThumbnailProcessing + "." + e
            }

            function p(e) {
                return r.PubsubTopic.ImageUpload + "." + e
            }

            function m(e) {
                return r.PubsubTopic.UploadService + "." + e
            }

            function f(e) {
                return r.PubsubTopic.VideoPlaybackById + "." + e
            }

            function h(e) {
                return r.PubsubTopic.PayoutOnboardingEvents + "." + e
            }

            function g(e) {
                return r.PubsubTopic.Presence + "." + e
            }

            function v(e, t) {
                return r.PubsubTopic.ModerationActionsByUserAndChannel + "." + e + "." + t
            }

            function b(e) {
                return r.PubsubTopic.Raid + "." + e
            }

            function y(e) {
                return r.PubsubTopic.StreamChange + "." + e
            }

            function k(e) {
                return r.PubsubTopic.Friendship + "." + e
            }

            function S(e) {
                return r.PubsubTopic.ChannelBitsPinEvents + "." + e
            }

            function _(e) {
                return r.PubsubTopic.BitsLeaderboardEvents + "." + e.id
            }

            function C(e) {
                return r.PubsubTopic.UserBitsUpdates + "." + e
            }

            function E() {
                return r.PubsubTopic.BitsCampaignEvents + ".updates"
            }

            function N(e) {
                return r.PubsubTopic.ChannelBitsPinEvents + "." + e
            }

            function O(e) {
                return r.PubsubTopic.UserPropertiesUpdates + "." + e
            }

            function w(e) {
                return r.PubsubTopic.UserSubscribeEvents + "." + e
            }

            function x(e) {
                return r.PubsubTopic.CampaignGlobalEvents + "." + e
            }

            function T(e) {
                return r.PubsubTopic.CampaignUserEvents + "." + e
            }

            function D(e) {
                return r.PubsubTopic.UserCommerceEvents + "." + e
            }

            function I(e) {
                return r.PubsubTopic.Whispers + "." + e
            }

            function A(e) {
                return r.PubsubTopic.OnsiteNotifications + "." + e
            }

            function F(e) {
                return r.PubsubTopic.StreamChatRoom + "." + e
            }

            function P(e) {
                return r.PubsubTopic.ChannelEventUpdates + "." + e
            }

            function R(e) {
                return r.PubsubTopic.ChannelSquadUpdates + "." + e
            }

            function B(e) {
                return r.PubsubTopic.SubscribersCSV + "." + e
            }

            function U(e) {
                return r.PubsubTopic.CheerbombEventsTopic + "." + e
            }

            function L(e) {
                return r.PubsubTopic.MysteryGift + "." + e
            }

            function j(e) {
                return r.PubsubTopic.SquadUpdates + "." + e
            }

            function X(e) {
                return i.l.subscribe({
                    topic: e.topic,
                    onMessage: function(t) {
                        t.type && !e.type && !e.types || t.type && e.type && t.type !== e.type || t.type && e.types && !e.types.includes(t.type) || Object(a.e)(e.query, e.variables, function(n) {
                            return e.mutator(t, n)
                        }, function(n) {
                            return !!e.skipMessage && e.skipMessage(t, n)
                        })
                    }
                })
            }

            function W(e) {
                return i.l.subscribe({
                    topic: e.topic,
                    onMessage: function(t) {
                        t.type && t.type !== e.type || Object(a.d)({
                            fragment: e.fragment,
                            id: e.id,
                            mutator: function(n) {
                                return e.mutator(t, n)
                            }
                        })
                    }
                })
            }
        },
        "0LAi": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("MXoD"),
                o = n("2xye"),
                s = n("Ue10"),
                c = function(e) {
                    var t = e.tags;
                    return void 0 !== e.tagNumberLimit && e.tagNumberLimit > 0 && (t = t.slice(0, e.tagNumberLimit)), r.createElement(s.Xa, {
                        display: s.X.InlineBlock,
                        fullWidth: !0
                    }, t.map(function(t) {
                        var n = i.__assign({}, e.linkTo) || {};
                        e.linkPath && (n.pathname = e.linkPath), n.pathname && (n.pathname = n.pathname.replace(":tagID", t.id));
                        return r.createElement(s.zb, {
                            key: t.id,
                            fontSize: s.Ca.Size7,
                            display: s.X.InlineBlock,
                            margin: {
                                right: .5,
                                bottom: .5
                            }
                        }, r.createElement(s.Ib, {
                            label: t.localizedName,
                            type: e.style,
                            linkTo: Object(a.a)({
                                content: o.PageviewContent.Tag
                            }, n),
                            onClick: function() {
                                e.callback && e.callback(t)
                            },
                            "data-a-target": t.localizedName
                        }))
                    }))
                };
            n.d(t, "a", function() {
                return c
            })
        },
        "0Log": function(e, t, n) {
            "use strict";
            var i = n("VSaV");
            n.o(i, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
                return i.FrienshipChangeType
            }), n.o(i, "ModerationActions") && n.d(t, "ModerationActions", function() {
                return i.ModerationActions
            }), n.o(i, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
                return i.PubsubMessageType
            }), n.o(i, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
                return i.PubsubTopic
            }), n.o(i, "SquadStatus") && n.d(t, "SquadStatus", function() {
                return i.SquadStatus
            }), n.o(i, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
                return i.TargetedModerationActions
            });
            var r = n("By5U");
            n.o(r, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
                return r.FrienshipChangeType
            }), n.o(r, "ModerationActions") && n.d(t, "ModerationActions", function() {
                return r.ModerationActions
            }), n.o(r, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
                return r.PubsubMessageType
            }), n.o(r, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
                return r.PubsubTopic
            }), n.o(r, "SquadStatus") && n.d(t, "SquadStatus", function() {
                return r.SquadStatus
            }), n.o(r, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
                return r.TargetedModerationActions
            });
            var a = n("WQCf");
            n.d(t, "FrienshipChangeType", function() {
                return a.a
            }), n.d(t, "ModerationActions", function() {
                return a.b
            }), n.d(t, "PubsubMessageType", function() {
                return a.c
            }), n.d(t, "PubsubTopic", function() {
                return a.d
            }), n.d(t, "SquadStatus", function() {
                return a.e
            }), n.d(t, "TargetedModerationActions", function() {
                return a.f
            })
        },
        "0Lz3": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var i = n("mrSG"),
                r = n("uYEN"),
                a = n("5zXJ");

            function o(e) {
                var t = [],
                    n = {};
                return e.forEach(function(e) {
                    var o = e.tiers.map(function(e) {
                        return c(e)
                    });
                    "Cheer" === e.prefix && o.push(function() {
                        var e = ["DARK", "LIGHT"],
                            t = ["static", "animated"],
                            n = [];
                        return [1, 1.5, 2, 3, 4].forEach(function(i) {
                            e.forEach(function(e) {
                                t.forEach(function(t) {
                                    n.push({
                                        url: a.a + "/cheer/" + e.toLowerCase() + "/" + t + "/100000/" + i + "." + ("static" === t ? "png" : "gif"),
                                        isAnimated: "animated" === t,
                                        theme: e,
                                        dpiScale: i
                                    })
                                })
                            })
                        }), c({
                            id: "Cheer:100000",
                            bits: 1e5,
                            canCheer: !1,
                            canShowInBitsCard: !1,
                            color: a.k[r.a.Yellow],
                            images: n
                        })
                    }()), o.sort(function(e, t) {
                        return t.bits - e.bits
                    });
                    var s = i.__assign({}, e, {
                        indexedTiers: new Map(o.map(function(e) {
                            return [e.bits, e]
                        })),
                        orderedTiers: o
                    });
                    t.push(s), n[s.prefix.toLowerCase()] = s
                }), {
                    indexedActions: n,
                    orderedActions: t
                }
            }

            function s(e, t) {
                return {
                    cursor: "" + e.rank,
                    node: {
                        id: t + "_" + e.entry_key,
                        entryKey: e.entry_key,
                        rank: e.rank,
                        score: e.score,
                        __typename: "BitsLeaderboardItem"
                    },
                    __typename: "BitsLeaderboardItemEdge"
                }
            }

            function c(e) {
                var t = new Map,
                    n = new Map,
                    r = new Map,
                    a = new Map;
                return e.images.forEach(function(e) {
                    "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? a.set(e.dpiScale, e.url) : r.set(e.dpiScale, e.url)
                }), i.__assign({
                    indexedImages: {
                        LIGHT: {
                            static: t,
                            animated: n
                        },
                        DARK: {
                            static: r,
                            animated: a
                        }
                    }
                }, e)
            }
        },
        "0uWp": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Search_SearchGameResultCard_Video"
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
                                value: "video"
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
                                        value: "contentTags"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "tagFragment"
                                            },
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
                    end: 160
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery Search_SearchGameResultCard_Video($id: ID!) {\nvideo(id: $id) {\ncontentTags {\n...tagFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = i
        },
        "1Ot3": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "OnsiteNotifications_Summary"
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
                                        value: "notifications"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "summary"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unseenCount"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "lastSeenAt"
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
                                        value: "incomingFriendRequests"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "1"
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalUnreadCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "newestEdge"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "createdAt"
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
                    end: 188
                }
            };
            n.loc.source = {
                body: "query OnsiteNotifications_Summary {\ncurrentUser {\nid\nnotifications {\nsummary {\nunseenCount\nlastSeenAt\n}\n}\nincomingFriendRequests(first: 1) {\ntotalUnreadCount\nnewestEdge {\ncreatedAt\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "1i0o": function(e, t, n) {},
        "222m": function(e, t, n) {},
        "25n4": function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return m
            }), n.d(t, "c", function() {
                return f
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "a", function() {
                return g
            }), n.d(t, "e", function() {
                return v
            });
            var i, r, a = n("mrSG"),
                o = n("17x9"),
                s = n("q1tI"),
                c = n("rEFn");
            ! function(e) {
                e.UI = "ui", e.Result = "result"
            }(r || (r = {}));
            var l = ((i = {})[c.b.Game] = "game", i[c.b.Live] = "channelID", i[c.b.Channel] = "channelID", i[c.b.VOD] = "vodID", i[c.b.Tag] = "tagID", i),
                u = {
                    searchSessionID: "",
                    queryID: "",
                    term: "",
                    videoOptions: void 0
                };

            function d(e) {
                return function(t, n) {
                    var i = t.itemRow,
                        r = t.itemIndex,
                        o = t.linkTo,
                        s = n ? n() : u,
                        d = s.searchSessionID,
                        p = s.queryID,
                        m = s.term,
                        f = s.videoOptions;
                    return a.__assign({}, o && {
                        linkTo: function(e, t, n) {
                            var i = {};
                            return i = "string" == typeof e ? {
                                pathname: e
                            } : e, a.__assign({}, i, {
                                state: a.__assign({}, i.state, {
                                    search_session_id: t,
                                    search_query_id: n
                                })
                            })
                        }(o, d, p)
                    }, {
                        trackImpression: function(t) {
                            var n;
                            return Object(c.h)(d, p, m, ((n = {
                                itemRow: i,
                                itemIndex: r,
                                contentType: e,
                                subSection: e
                            })[l[e]] = t, n.vodFilter = f && f.type, n.lengthFilter = f && f.length, n))
                        },
                        trackClick: function(t) {
                            var n;
                            return Object(c.g)(d, p, m, ((n = {
                                itemRow: i,
                                itemIndex: r,
                                contentType: e,
                                subSection: e
                            })[l[e]] = t, n.vodFilter = f && f.type, n.lengthFilter = f && f.length, n))
                        }
                    })
                }
            }

            function p(e, t) {
                var n = e.itemRow,
                    i = e.itemIndex;
                t || (t = function() {
                    return u
                });
                var r = t(),
                    a = r.searchSessionID,
                    o = r.queryID,
                    s = r.term,
                    l = r.videoOptions;
                return {
                    trackImpression: function(e, t) {
                        return Object(c.k)(a, o, s, {
                            videoOptions: l,
                            itemRow: n,
                            itemIndex: i,
                            buttonType: e,
                            searchIndex: t
                        })
                    },
                    trackClick: function(e, t) {
                        return Object(c.j)(a, o, s, {
                            videoOptions: l,
                            itemRow: n,
                            itemIndex: i,
                            buttonType: e,
                            searchIndex: t
                        })
                    }
                }
            }
            var m = function() {
                    return y(p)
                },
                f = function() {
                    return b(c.b.Live)
                },
                h = function() {
                    return b(c.b.Game)
                },
                g = function() {
                    return b(c.b.Channel)
                },
                v = function() {
                    return b(c.b.VOD)
                },
                b = function(e) {
                    return y(d(e))
                };

            function y(e) {
                return function(t) {
                    return function(n) {
                        function i() {
                            return null !== n && n.apply(this, arguments) || this
                        }
                        return a.__extends(i, n), i.prototype.render = function() {
                            return s.createElement(t, a.__assign({}, this.props, e(this.props, this.context.getSearchTrackingProps)))
                        }, i.contextTypes = {
                            getSearchTrackingProps: o.func
                        }, i
                    }(s.Component)
                }
            }
        },
        "25vm": function(e, t, n) {},
        "3KNA": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "TopNav_User_UpdateIsSharingActivity"
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
                                    value: "UpdateIsSharingActivityInput"
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
                                value: "updateIsSharingActivity"
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
                                        value: "user"
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
                                                        value: "isSharingActivity"
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
                    end: 173
                }
            };
            n.loc.source = {
                body: "mutation TopNav_User_UpdateIsSharingActivity($input: UpdateIsSharingActivityInput!) {\nupdateIsSharingActivity(input: $input) {\nuser {\nid\nsettings {\nisSharingActivity\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var i = n("L9xt");
            n.o(i, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return i.PageviewContent
            }), n.o(i, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return i.PageviewLocation
            }), n.o(i, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return i.PageviewMedium
            }), n.o(i, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return i.SpadeEventType
            })
        },
        "3qZk": function(e, t, n) {
            e.exports = n.p + "assets/friend_requests-aec9595d7e19764bc23d.png"
        },
        "4/kP": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ChannelPage_SetSessionStatus"
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
                                    value: "SetSessionStatusInput"
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
                                value: "setSessionStatus"
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
                                        value: "setAgainInSeconds"
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
                    end: 127
                }
            };
            n.loc.source = {
                body: "mutation ChannelPage_SetSessionStatus($input: SetSessionStatusInput!) {\nsetSessionStatus(input: $input) {\nsetAgainInSeconds\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "487o": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_BlueBar_CurrentUser"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "stringIds"
                            }
                        },
                        type: {
                            kind: "ListType",
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
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "primePromotions"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "stringIds"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dateOverride"
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
                                        value: "text"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "externalURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isExternalLink"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 231
                }
            };
            n.loc.source = {
                body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!] $dateOverride: Time) {\ncurrentUser {\nid\nhasPrime\n}\nprimePromotions (ids: $stringIds dateOverride: $dateOverride) {\nid\ntext\nexternalURL\nisExternalLink\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "49TI": function(e, t, n) {},
        "4HIT": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Communities = "/directory/communities", e.CreativeCommunities = "/directory/creative", e.Games = "/directory", e.DirectoryCategory = "/directory/:category?", e.DirectoryTag = "/directory/tags/:tagID", e.Popular = "/directory/all", e.PopularEncodedLanguage = "/directory/all/:encodedLanguage", e.PopularPlaystation = "/directory/all/ps4", e.PopularTag = "/directory/all/tags/:tagID", e.PopularXbox = "/directory/all/xbox", e.TagCreative = "/directory/tags/e36d0169-268a-4c62-a4f4-ddf61a0b3ae4"
                }(i || (i = {}))
        },
        "4NwI": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("mrSG"),
                a = n("q1tI"),
                o = n("oJmH"),
                s = n("/7QA"),
                c = n("8/mp"),
                l = n("yR8l"),
                u = n("GnwI"),
                d = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                            hearthstone: a.createElement(d.W, {
                                italic: !0,
                                type: d.Pb.Span
                            }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                            smite: a.createElement(d.W, {
                                italic: !0,
                                type: d.Pb.Span
                            }, Object(s.d)("Smite", "PrimeEmpty"))
                        }, "PrimeEmpty");
                        return a.createElement(d.Xa, {
                            className: "prime-empty",
                            margin: 2
                        }, a.createElement(d.Xa, {
                            textAlign: d.Lb.Center,
                            margin: 2
                        }, a.createElement("img", {
                            className: "prime-empty__image",
                            src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                            alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                        })), a.createElement(d.W, {
                            type: d.Pb.P,
                            bold: !0
                        }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                    }, t
                }(a.Component),
                m = Object(u.b)("PrimeEmpty", {
                    autoReportInteractive: !0
                })(p),
                f = n("6x+I"),
                h = n("geRD"),
                g = n("JVUd"),
                v = n("cinR"),
                b = n("Rjl4"),
                y = n("O4UZ"),
                k = n("cx1G"),
                S = (n("5ZOr"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            Object(b.i)({
                                offerID: t.props.offerID,
                                externalURL: t.props.externalURL,
                                hasPrime: !0,
                                index: t.props.index
                            }, t.props.offerType), t.props.claimCallback && t.props.offerType !== y.e.EXTERNAL_OFFER && !t.props.externalURL && t.props.claimCallback(e)
                        }, t.onHover = function() {
                            Object(b.j)({
                                offerID: t.props.offerID,
                                externalURL: t.props.externalURL,
                                hasPrime: !0,
                                index: t.props.index
                            }, t.props.offerType)
                        }, t.isGifted = function() {
                            return t.props.data && t.props.data.currentUser && t.props.data.currentUser.primeGift
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || y.c.Default,
                            t = y.l(e),
                            n = y.h("prime-claim-button", e);
                        return a.createElement(d.Xa, {
                            fullWidth: !0,
                            className: n,
                            display: t ? d.X.Block : d.X.InlineBlock
                        }, this.renderClaimButton())
                    }, t.prototype.renderClaimButton = function() {
                        var e = this.props,
                            t = e.externalURL,
                            n = e.claiming,
                            i = e.offerType,
                            r = this.getButtonText();
                        if (t || i === y.e.EXTERNAL_OFFER) return a.createElement(v.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            linkTo: t,
                            targetBlank: !0,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button"
                        }, r));
                        var o = a.createElement(v.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            state: n ? d.E.Loading : d.E.Default,
                            disabled: n,
                            linkTo: t,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button",
                            icon: this.isGifted() ? d.pb.Gift : void 0
                        }, r));
                        return a.createElement(d.Xa, {
                            position: d.fb.Relative
                        }, o)
                    }, t.prototype.getButtonText = function() {
                        var e = Object(s.d)("Learn More", "PrimeClaimButton");
                        if (this.props.externalURL) return e;
                        switch (this.props.offerType) {
                            case y.e.CLAIM_CODE:
                                return Object(s.d)("Get Code", "PrimeClaimButton");
                            case y.e.EXTERNAL_OFFER:
                                return e;
                            case y.e.DIRECT_ENTITLEMENT:
                            default:
                                return this.isGifted() ? Object(s.d)("Claim Gift", "PrimeClaimButton") : Object(s.d)("Claim Offer", "PrimeClaimButton")
                        }
                    }, t
                }(a.Component)),
                _ = Object(o.compose)(Object(l.a)(k, {
                    skip: function(e) {
                        return !Object(y.k)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }), Object(u.b)("PrimeClaimButton"))(S),
                C = (n("KbPt"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.toggleShowDescription = function() {
                            var e = !n.state.showDescription;
                            Object(b.l)(e, {
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            }), n.setState({
                                showDescription: e
                            })
                        }, n.onHover = function() {
                            n.state.showDescription ? Object(b.k)({
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            }) : Object(b.m)({
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            })
                        }, n.renderVerticalDescriptionBlock = function() {
                            return a.createElement(d.zb, {
                                className: "prime-claim-description__body",
                                background: d.r.Alt2,
                                border: !0,
                                position: d.fb.Relative
                            }, n.renderDescription())
                        }, n.renderHorizontalDescriptionBlock = function() {
                            return a.createElement(d.zb, {
                                className: "prime-claim-description__body",
                                background: d.r.Base,
                                border: !0,
                                position: d.fb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                },
                                overflow: d.ab.Scroll
                            }, n.renderDescription())
                        }, n.renderDescription = function() {
                            return a.createElement(d.Xa, {
                                "data-a-target": "prime-claim-description-body",
                                margin: {
                                    bottom: 2
                                },
                                padding: 1
                            }, a.createElement(f, {
                                source: n.props.description || ""
                            }))
                        }, n.state = {
                            showDescription: !1
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || y.c.Default,
                            t = Object(y.h)("prime-claim-description", e);
                        return a.createElement(d.Xa, {
                            fullWidth: !0,
                            className: t,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(v.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            "data-a-target": "prime-claim-description-button",
                            fullWidth: !0,
                            type: d.F.Hollow,
                            onClick: this.toggleShowDescription
                        }, this.getDescriptionButtonText())), this.getDescriptionBlock(e))
                    }, t.prototype.getDescriptionButtonText = function() {
                        return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                    }, t.prototype.getDescriptionBlock = function(e) {
                        var t = null,
                            n = Object(y.l)(e);
                        return this.state.showDescription && (t = n ? this.renderVerticalDescriptionBlock() : this.renderHorizontalDescriptionBlock()), t
                    }, t
                }(a.Component)),
                E = Object(u.b)("PrimeClaimDescription", {
                    autoReportInteractive: !0
                })(C),
                N = n("fvjX"),
                O = n("aCAx"),
                w = n("kRBY"),
                x = n("ZS2+"),
                T = n("cZKs"),
                D = x.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(83)]).then(n.bind(null, "+Zk8"))
                }, "GiftForm"),
                I = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.Xa, {
                            className: "prime-gift-modal",
                            position: d.fb.Relative,
                            "data-a-target": "passport-modal"
                        }, a.createElement(D, {
                            action: this.props.action,
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            getGiftRecipientList: this.props.getGiftRecipientList,
                            updateGiftRecipientList: this.props.updateGiftRecipientList
                        }), a.createElement(T.a, {
                            closeOnBackdropClick: !0,
                            onClose: this.props.onClose
                        }))
                    }, t
                }(a.Component),
                A = Object(u.b)("PrimeGiftModal", {
                    autoReportInteractive: !0
                })(I),
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            recipients: t.getGiftLogins(),
                            newRecipients: new Set
                        }, t.onClick = function() {
                            t.props.isLoggedIn && (t.props.giftPrimeOffer(t.getGiftRecipients.bind(t), t.updateGiftRecipients.bind(t)), t.props.toggleCrownMenu && t.props.toggleCrownMenu(!1))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.z, {
                            type: d.F.Hollow,
                            icon: d.pb.Gift,
                            onClick: this.onClick,
                            fullWidth: !0,
                            targetBlank: !0,
                            "data-a-target": "prime-gift-button"
                        }, Object(s.d)("Send as a Gift", "PrimeGiftExperiment"))
                    }, t.prototype.getGiftRecipients = function() {
                        return this.state.recipients.concat(Array.from(this.state.newRecipients.values()))
                    }, t.prototype.updateGiftRecipients = function(e) {
                        this.state.newRecipients.add(e)
                    }, t.prototype.getGiftLogins = function() {
                        var e = [];
                        return this.props.offer && this.props.offer.self && this.props.offer.self.gifts && this.props.offer.self.gifts.forEach(function(t) {
                            t.to && t.to.login && e.push(t.to.login)
                        }), e
                    }, t
                }(a.Component),
                P = Object(o.compose)(Object(u.b)("PrimeGiftButton", {
                    autoReportInteractive: !0
                }))(F);
            var R = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(w.f)(e)
                    }
                }, function(e, t) {
                    return Object(N.bindActionCreators)({
                        giftPrimeOffer: function(e, n) {
                            return Object(O.d)(A, {
                                offerID: t.offerID,
                                offer: t.offer,
                                getGiftRecipientList: e,
                                updateGiftRecipientList: n
                            })
                        }
                    }, e)
                })(P),
                B = n("9pSj"),
                U = n("j3KY"),
                L = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            Object(b.q)({
                                offerID: t.props.offerID,
                                externalURL: t.getLink(),
                                hasPrime: !1,
                                index: t.props.index
                            })
                        }, t.onHover = function() {
                            Object(b.r)({
                                offerID: t.props.offerID,
                                externalURL: t.getLink(),
                                hasPrime: !1,
                                index: t.props.index
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.Xa, {
                            className: "prime-upsell-button",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(v.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            linkTo: this.getLink(),
                            targetBlank: !0,
                            onClick: this.onClick
                        }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                    }, t.prototype.getLink = function() {
                        if (this.props.externalURL) return this.props.externalURL;
                        var e = (this.props.orientation || B.b.Default) === B.b.Vertical ? U.d : U.b,
                            t = this.props.externalReftag || e,
                            n = window.location.pathname.substring(1);
                        return Object(U.e)(t, n)
                    }, t
                }(a.Component),
                j = Object(u.b)("PrimeUpsellButton", {
                    autoReportInteractive: !0
                })(L),
                X = n("zUQL"),
                W = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || y.c.Default,
                            t = Object(y.h)("prime-claim", e);
                        return a.createElement(d.Xa, {
                            className: t,
                            margin: {
                                bottom: 1
                            }
                        }, this.getCallToAction(), this.getClaimDescriptionSection())
                    }, t.prototype.getCallToAction = function() {
                        var e = this.props.data;
                        return Object(y.n)(e) || this.props.isGifted ? Object(y.n)(e) && Object(y.k)(this.props.offerID) ? a.createElement(d.Xa, {
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, a.createElement(d.Xa, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, this.renderPrimeClaimButton()), a.createElement(d.Xa, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(R, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderPrimeClaimButton() : a.createElement(j, {
                            externalReftag: this.props.externalReftag,
                            externalURL: this.props.externalURL,
                            offerID: this.props.offerID,
                            index: this.props.index,
                            orientation: this.props.orientation
                        })
                    }, t.prototype.getClaimDescriptionSection = function() {
                        if (this.props.offerType === y.e.EXTERNAL_OFFER || this.props.externalURL) return null;
                        var e = this.props.data;
                        return a.createElement(E, {
                            description: this.props.offerDescription,
                            offerID: this.props.offerID,
                            externalURL: this.props.externalURL,
                            index: this.props.index,
                            orientation: this.props.orientation,
                            hasPrime: Object(y.n)(e)
                        })
                    }, t.prototype.renderPrimeClaimButton = function() {
                        return a.createElement(_, {
                            offerType: this.props.offerType,
                            offerID: this.props.offerID,
                            claimCallback: this.props.claimCallback,
                            claiming: this.props.claiming,
                            orientation: this.props.orientation,
                            externalURL: this.props.externalURL,
                            index: this.props.index
                        })
                    }, t
                }(a.Component),
                M = Object(o.compose)(Object(l.a)(X), Object(u.b)("PrimeInstructions"))(W),
                q = n("z8lI"),
                G = (n("25vm"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.setRef = function(e) {
                            n.setState({
                                clipboardInput: e
                            })
                        }, n.copy = function() {
                            var e;
                            try {
                                n.state.clipboardInput && n.state.clipboardInput.select(), e = document.execCommand("copy")
                            } catch (t) {
                                e = !1
                            }
                            return n.setState({
                                copied: e
                            }), e
                        }, n.state = {
                            copied: !1,
                            clipboardInput: null
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.state.copied ? Object(s.d)("copied", "CopyButton") : Object(s.d)("copy", "CopyButton");
                        return a.createElement(d.Xa, {
                            className: "copy-button copy-btn",
                            display: d.X.Flex
                        }, a.createElement(d.Pa, {
                            className: "copy-button__btn"
                        }, a.createElement(d.z, {
                            onClick: this.copy,
                            type: this.state.copied ? d.F.Success : d.F.Default
                        }, e)), a.createElement("input", {
                            className: "copy-button__copy-input",
                            ref: this.setRef,
                            value: this.props.clipboardText,
                            readOnly: !0
                        }))
                    }, t
                }(a.Component)),
                z = Object(N.compose)(Object(u.b)("CopyButton"))(G),
                V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.setState({
                                value: e.currentTarget.value,
                                copied: !1
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillMount = function() {
                        this.props.initialText && this.setState({
                            value: this.props.initialText,
                            copied: !1
                        })
                    }, t.prototype.render = function() {
                        return this.state && this.state.value ? a.createElement(d.Xa, {
                            className: "copyable-item",
                            display: d.X.Flex,
                            flexGrow: 1
                        }, a.createElement(d.Xa, {
                            flexGrow: 1
                        }, a.createElement(d.Ra, {
                            type: d.Ta.Text,
                            onChange: this.onChange,
                            value: this.state.value,
                            disabled: this.props.disabled,
                            readOnly: this.props.readOnly
                        })), a.createElement(d.Xa, null, a.createElement(z, {
                            clipboardText: this.state.value
                        }))) : null
                    }, t
                }(a.Component),
                H = Object(N.compose)(Object(u.b)("CopyableItem"))(V),
                Q = (n("Sb+K"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getClaimInstructions = function() {
                            return a.createElement(d.Yb, null, a.createElement(f, {
                                source: n.props.claimInstructions || "",
                                escapeHtml: !0,
                                renderers: {
                                    Link: function(e) {
                                        return a.createElement("a", {
                                            href: e.href,
                                            target: "_blank",
                                            rel: "nofollow noopener noreferrer"
                                        }, e.children)
                                    }
                                }
                            }))
                        }, n.renderVerticalLayout = function() {
                            return a.createElement(d.zb, {
                                className: "prime-claim-instructions prime-claim-instructions--vertical",
                                "data-a-target": "prime-claim-instructions--vertical",
                                background: d.r.Alt2,
                                border: !0,
                                padding: 1,
                                fontSize: d.Ca.Size6
                            }, n.getClaimInstructions())
                        }, n.renderHorizontalLayout = function() {
                            return a.createElement(d.zb, {
                                fullWidth: !0,
                                className: "prime-claim-instructions prime-claim-instructions--horizontal",
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(d.Xa, {
                                fullWidth: !0,
                                justifyContent: d.Wa.Center,
                                textAlign: d.Lb.Center
                            }, a.createElement(d.U, {
                                onClick: n.toggleShowDescription
                            }, n.getDescriptionButtonText())), n.state.showDescription && a.createElement(d.zb, {
                                className: "prime-claim-instructions__body",
                                "data-a-target": "prime-claim-instructions--horizontal",
                                border: !0,
                                position: d.fb.Absolute,
                                padding: 1,
                                background: d.r.Alt,
                                overflow: d.ab.Scroll,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                }
                            }, n.getClaimInstructions()))
                        }, n.toggleShowDescription = function() {
                            n.setState({
                                showDescription: !n.state.showDescription
                            })
                        }, n.getDescriptionButtonText = function() {
                            return n.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimInstruction") : Object(s.d)("Click here for Claim Instructions", "PrimeClaimInsctuction")
                        }, n.state = {
                            showDescription: !1
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || y.c.Default;
                        return Object(y.l)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                    }, t
                }(a.Component)),
                K = Object(u.b)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })(Q),
                Y = n("UFVY"),
                $ = (n("PCo6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGiftRedeemedButton = function(e) {
                            if (!t.props.data || t.props.data.loading || t.props.data.error) return a.createElement(d.eb, null);
                            var n = t.props.data.currentUser && t.props.data.currentUser.primeGift;
                            return a.createElement(d.zb, {
                                fullWidth: !0,
                                display: d.X.Flex,
                                justifyContent: d.Wa.Center,
                                margin: {
                                    bottom: e,
                                    right: .5
                                },
                                className: "prime-redeem__confirmation",
                                alignItems: d.f.Center,
                                borderRadius: d.x.Medium
                            }, a.createElement(d.W, {
                                type: d.Pb.Span,
                                align: d.Zb.Middle,
                                color: d.O.Overlay
                            }, a.createElement(d.Xa, {
                                display: d.X.InlineFlex,
                                flexWrap: d.Ba.NoWrap,
                                alignItems: d.f.Center,
                                "data-test-target": "prime-redeem-check",
                                "data-a-target": "prime-redeem-check"
                            }, a.createElement(d.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: d.X.InlineFlex,
                                flexWrap: d.Ba.NoWrap,
                                padding: {
                                    y: .5
                                },
                                alignItems: d.f.Center
                            }, a.createElement(d.ob, {
                                asset: n ? d.pb.Gift : d.pb.Check,
                                width: 20,
                                height: 20
                            })), n ? Object(s.d)("Gift Claimed", "PrimeRedeem") : Object(s.d)("Claimed", "PrimeRedeem"))))
                        }, t.getPrimeClaimInstructions = function() {
                            return a.createElement(K, {
                                claimInstructions: t.props.claimInstructions || "",
                                orientation: t.props.orientation
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || y.c.Default,
                            t = Object(y.h)("prime-redeem", e);
                        return a.createElement(d.Xa, {
                            className: t
                        }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                    }, t.prototype.getCodeOrConfirmation = function(e) {
                        var t = Object(y.l)(e);
                        if (this.props.code && this.props.deliveryMethod === y.e.CLAIM_CODE) return a.createElement(d.Xa, {
                            "data-a-target": "prime-redeem-code-container"
                        }, a.createElement(H, {
                            initialText: this.props.code,
                            readOnly: !0,
                            textCenter: !0
                        }));
                        var n = t ? 1 : 0;
                        return Object(y.k)(this.props.offerID) ? this.props.isPrime ? a.createElement(d.Xa, {
                            display: d.X.Flex
                        }, this.renderGiftRedeemedButton(n), a.createElement(d.Xa, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                left: .5,
                                bottom: n
                            }
                        }, a.createElement(R, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderGiftRedeemedButton(n) : a.createElement(d.zb, {
                            display: d.X.Flex,
                            justifyContent: d.Wa.Center,
                            margin: {
                                bottom: n
                            },
                            padding: {
                                y: n
                            },
                            className: "prime-redeem__confirmation",
                            borderRadius: d.x.Medium
                        }, a.createElement(d.W, {
                            type: t ? d.Pb.H4 : d.Pb.H6,
                            align: d.Zb.Middle,
                            color: d.O.Overlay
                        }, a.createElement(d.Xa, {
                            display: d.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: d.Ba.NoWrap,
                            alignItems: d.f.Center,
                            "data-test-target": "prime-redeem-check",
                            "data-a-target": "prime-redeem-check",
                            padding: {
                                left: n
                            }
                        }, a.createElement(d.Xa, {
                            margin: {
                                right: 1
                            },
                            display: d.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: d.Ba.NoWrap,
                            padding: {
                                y: .5
                            },
                            alignItems: d.f.Center
                        }, a.createElement(d.ob, {
                            asset: d.pb.Check,
                            width: 20,
                            height: 20
                        })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                    }, t
                }(a.Component)),
                J = Object(o.compose)(Object(u.b)("PrimeRedeem", {
                    autoReportInteractive: !0
                }), Object(l.a)(Y, {
                    skip: function(e) {
                        return !Object(y.k)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }))($),
                Z = n("SStD"),
                ee = n("QK1T"),
                te = n("9k8c"),
                ne = n("PsVi"),
                ie = (n("oj5W"), "prime-offer__video"),
                re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            claimed: !1,
                            claiming: !1,
                            error: void 0,
                            claimData: void 0,
                            status: void 0
                        }, t.renderVerticalLayout = function(e) {
                            var n = t.props.isLast || !1,
                                i = e.content,
                                r = i && i.game && i.game.name || "",
                                o = i && i.categories && i.categories[0] || "",
                                s = i && i.publisher || "";
                            return a.createElement(d.zb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--vertical",
                                alignItems: d.f.Center,
                                display: d.X.Block,
                                borderBottom: !n,
                                textAlign: d.Lb.Left,
                                position: d.fb.Relative,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, a.createElement(d.Xa, {
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e), a.createElement(d.W, null, t.renderGiftText())), t.renderOfferImageOrVideo(e.imageURL), a.createElement(d.zb, {
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(d.Xa, {
                                className: "prime-offer__description",
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(d.W, {
                                type: d.Pb.P
                            }, r, " ", o)), a.createElement(d.Xa, {
                                className: "prime-offer__publisher"
                            }, a.createElement(d.W, {
                                type: d.Pb.P,
                                color: d.O.Alt2,
                                fontSize: d.Ca.Size7
                            }, s))), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderHorizontalLayout = function(e) {
                            var n = e.content,
                                i = n && n.game && n.game.name || "",
                                r = n && n.categories && n.categories[0] || "",
                                o = n && n.publisher || "";
                            return a.createElement(d.zb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--horizontal",
                                alignItems: d.f.Center,
                                display: d.X.InlineBlock,
                                textAlign: d.Lb.Left,
                                position: d.fb.Relative,
                                padding: {
                                    right: 1,
                                    y: .5
                                },
                                fullWidth: !0
                            }, a.createElement(d.zb, {
                                className: "prime-offer__content",
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(d.zb, {
                                className: "prime-offer__content__text",
                                background: d.r.Base
                            }, a.createElement(d.Xa, {
                                className: "prime-offer__publisher"
                            }, a.createElement(d.W, {
                                type: d.Pb.P,
                                color: d.O.OverlayAlt,
                                fontSize: d.Ca.Size7,
                                transform: d.Ob.Uppercase
                            }, o)), a.createElement(d.Xa, {
                                className: "prime-offer__title",
                                alignItems: d.f.Start,
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e)), a.createElement(d.Xa, {
                                className: "prime-offer__description"
                            }, a.createElement(d.W, {
                                type: d.Pb.P,
                                color: d.O.Alt2
                            }, i, " ", r, " ", t.renderGiftText()))), t.renderOfferImageOrVideo(e.imageURL)), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderOfferImageOrVideo = function(e) {
                            var n;
                            return n = "mp4" === t.getExtensionFromURL(e) ? a.createElement("video", {
                                preload: "auto",
                                ref: function(e) {
                                    t.offerVideo = e || void 0
                                },
                                loop: !0,
                                playsInline: !0,
                                muted: !0,
                                autoPlay: !0,
                                controls: Object(ee.c)(window.navigator.userAgent),
                                "data-test-selector": ie,
                                poster: "https://m.media-amazon.com/images/G/01/sm/Evergreen_Shared/crown_video_evergreen.jpg"
                            }, a.createElement("source", {
                                src: e,
                                type: "video/mp4"
                            })) : a.createElement("img", {
                                src: e
                            }), a.createElement(d.Qa, {
                                borderRadius: d.x.Medium
                            }, n)
                        }, t.getExtensionFromURL = function(e) {
                            if (!e) return e;
                            var t = e.split(".");
                            return t[t.length - 1]
                        }, t.renderRedeemUpsellOrClaimSection = function(e) {
                            var n = e.content,
                                i = n && n.externalURL || "",
                                r = e.self || {
                                    claimData: ""
                                };
                            if (t.state.error) {
                                var o = t.getErrorType();
                                return a.createElement(q.a, {
                                    fontSize: d.Ca.Size6,
                                    testTarget: "prime-offer-error",
                                    errorType: o
                                })
                            }
                            if (!i && (t.isCurrentOfferClaimed(e) || t.state.claimed)) {
                                var s = t.state.claimData || r.claimData;
                                return a.createElement(J, {
                                    claimInstructions: e.claimInstructions,
                                    isPrime: Object(y.n)(t.props.data),
                                    offerID: e.id,
                                    offer: e,
                                    code: s,
                                    deliveryMethod: e.deliveryMethod,
                                    orientation: t.props.orientation,
                                    toggleCrownMenu: t.props.toggleCrownMenu
                                })
                            }
                            return a.createElement(M, {
                                offerID: e.id,
                                offer: e,
                                offerDescription: e.description,
                                offerType: e.deliveryMethod,
                                isGifted: !!(t.props.giftData && t.props.giftData.currentUser && t.props.giftData.currentUser.primeGift),
                                externalReftag: t.props.externalReftag,
                                externalURL: i,
                                claimCallback: t.claimOffer,
                                claiming: t.state.claiming,
                                index: t.props.index,
                                orientation: t.props.orientation,
                                toggleCrownMenu: t.props.toggleCrownMenu
                            })
                        }, t.getErrorType = function() {
                            return t.state.error || y.b.UNKNOWN_ERROR
                        }, t.claimOffer = function(e) {
                            e.nativeEvent.stopImmediatePropagation(), t.setState({
                                claiming: !0
                            }), t.props.giftData && t.props.giftData.currentUser && t.props.giftData.currentUser.primeGift && t.props.giftData.currentUser.primeGift && t.props.claimGift(Object(h.a)({
                                giftID: t.props.giftData.currentUser.primeGift.id
                            })).then(function(e) {
                                t.setState({
                                    claiming: !1,
                                    claimed: !0,
                                    error: void 0
                                })
                            }).catch(function(e) {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: y.b.UNKNOWN_ERROR
                                })
                            });
                            var n = t.props.data;
                            if (n && !n.loading && !n.error && n.currentUser && n.currentUser.id) {
                                var i = t.props.offer,
                                    r = Object(h.a)({
                                        offerID: i.id
                                    });
                                t.props.claimPrimeOffer(r).then(function(e) {
                                    var n = (e.data || {}).claimPrimeOffer || {},
                                        r = n.self || {},
                                        a = n.error || {};
                                    if (r && r.hasEntitlement && i && t.setState({
                                            claimData: r.claimData,
                                            claiming: !1,
                                            claimed: !0,
                                            error: void 0
                                        }), a && a.code) {
                                        var o = y.b[a.code];
                                        t.setState({
                                            claiming: !1,
                                            claimed: !1,
                                            error: o || y.b.UNKNOWN_ERROR
                                        })
                                    }
                                }).catch(function() {
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: y.b.UNKNOWN_ERROR
                                    })
                                })
                            }
                        }, t.trackImpression = function() {
                            var e = null;
                            t.props.offer.content && (e = t.props.offer.content.externalURL), Object(b.p)({
                                offerID: t.props.offer.id,
                                externalURL: e || "",
                                index: t.props.index,
                                hasPrime: Object(y.n)(t.props.data),
                                displayWidthType: t.props.displayWidthType
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractiveIfReady(), this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractiveIfReady(), this.offerVideo && (this.offerVideo.setAttribute("muted", "muted"), this.offerVideo.play())
                    }, t.prototype.reportInteractiveIfReady = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.offer;
                        if (e) {
                            var t = this.props.orientation || y.c.Default;
                            return y.l(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                        }
                        return null
                    }, t.prototype.renderTitle = function(e) {
                        var t = null;
                        return !!(this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift) && !!(this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login) && (t = a.createElement(d.Xa, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(d.ob, {
                            asset: d.pb.Gift
                        }))), a.createElement(d.Xa, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            alignItems: d.f.Start,
                            display: d.X.Flex
                        }, t, a.createElement(f, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        }))
                    }, t.prototype.renderGiftText = function() {
                        return this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login ? Object(s.d)("from <x:bold>{gifterLogin}</x:bold>", {
                            "x:bold": function(e) {
                                return a.createElement(d.W, {
                                    type: d.Pb.Span,
                                    bold: !0
                                }, e)
                            },
                            gifterLogin: this.props.giftData.currentUser.primeGift.from.login
                        }, "PrimeClaimButton") : null
                    }, t.prototype.isCurrentOfferClaimed = function(e) {
                        return (e.self || {
                            hasEntitlement: !1
                        }).hasEntitlement
                    }, t
                }(a.Component),
                ae = Object(o.compose)(Object(l.a)(ne, {
                    name: "giftData",
                    skip: function(e) {
                        return !Object(y.k)(e.offer.id)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offer.id
                            }
                        }
                    }
                }), Object(l.a)(X, {
                    name: "data"
                }), Object(l.a)(Z, {
                    name: "claimPrimeOffer"
                }), Object(l.a)(te, {
                    name: "claimGift"
                }), Object(u.b)("PrimeOffer"), Object(g.a)("PrimeOffer", {
                    pixels: 100
                }))(re),
                oe = (n("WGf9"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || y.c.Default,
                            t = Object(y.l)(e);
                        return a.createElement(d.zb, {
                            className: "prime-offer-placeholder",
                            alignItems: d.f.Center,
                            borderBottom: t,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            display: t ? d.X.Block : d.X.InlineBlock,
                            fullWidth: t
                        }, a.createElement(d.Xa, {
                            className: "prime-offer-placeholder__title",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(d.eb, {
                            height: 20
                        })), a.createElement(d.eb, {
                            height: 160
                        }), a.createElement(d.Xa, {
                            className: "prime-offer-placeholder__description",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(d.eb, {
                            height: 20,
                            width: 160
                        })), a.createElement(d.Xa, {
                            className: "prime-offer-placeholder__publisher"
                        }, a.createElement(d.eb, {
                            height: 20,
                            width: 80
                        })), a.createElement(d.Xa, {
                            className: "prime-offer-placeholder__claim",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(d.eb, {
                            height: 40
                        })))
                    }, t
                }(a.Component)),
                se = Object(u.b)("PrimeOfferPlaceholder", {
                    autoReportInteractive: !0
                })(oe),
                ce = (n("6sE4"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.zb, {
                            "data-test-target": "prime-offers-upsell",
                            "data-a-target": "prime-offers-upsell",
                            className: "prime-offers-upsell",
                            alignItems: d.f.Center,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            borderBottom: !0
                        }, a.createElement(d.W, {
                            type: d.Pb.H4
                        }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(d.Xa, {
                            className: "prime-upsell__logo-container",
                            fullWidth: !0,
                            margin: {
                                y: 2
                            },
                            textAlign: d.Lb.Center
                        }, a.createElement(d.ob, {
                            asset: d.pb.LogoTwitchPrime,
                            width: 330,
                            height: 150,
                            type: d.qb.Brand
                        })), a.createElement(d.W, {
                            type: d.Pb.P
                        }, Object(s.d)("Support your favorite streamer, plus get monthly games and in-game loot, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(j, null))
                    }, t
                }(a.Component)),
                le = Object(u.b)("PrimeUpsell", {
                    autoReportInteractive: !0
                })(ce),
                ue = n("RfIv"),
                de = n("OeOm"),
                pe = (n("iuxt"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.shouldShowOffersSection = function() {
                            if (t.isOffersDataLoading) return !0;
                            var e = t.props.offersData,
                                n = e && e.primeOffers && e.primeOffers.length && t.getSortedOffers(),
                                i = n && n.length;
                            return i || !i && !t.props.hideWithNoOffers
                        }, t.renderDesktopOffers = function() {
                            return a.createElement(d.Xa, {
                                className: "prime-offer-list__content--desktop"
                            }, t.renderSectionTitle(), a.createElement(d.Vb, {
                                childWidth: d.Wb.Large,
                                gutterSize: d.Xb.Small,
                                center: !0,
                                placeholderItems: 20
                            }, t.renderOfferExperience(b.a.Wide)))
                        }, t.renderSectionTitle = function() {
                            return t.props.sectionTitle ? t.shouldShowPlaceholders ? a.createElement(d.Xa, {
                                padding: {
                                    x: 1
                                },
                                className: "prime-offers__title__placeholder"
                            }, a.createElement(d.eb, {
                                height: 28,
                                width: 300
                            })) : a.createElement(d.Xa, {
                                margin: {
                                    y: 1
                                },
                                className: "prime-offers__title"
                            }, a.createElement(d.W, {
                                type: d.Pb.H3,
                                color: d.O.Base,
                                bold: !0
                            }, t.props.sectionTitle)) : null
                        }, t.renderMobileOffers = function() {
                            return a.createElement(d.Xa, {
                                className: "prime-offer-list__content--mobile"
                            }, t.renderSectionTitle(), t.renderOfferExperience(b.a.Narrow))
                        }, t.getOfferListOrientation = function() {
                            return t.props.listDirection || y.c.Default
                        }, t.getHiddenOfferIdsByPlacement = function(e) {
                            switch (e) {
                                case y.d.Crown:
                                    return s.b.get("prime-crown-hidden-ids", []);
                                case y.d.LootPage:
                                    return s.b.get("prime-loot-page-hidden-ids", []);
                                default:
                                    return []
                            }
                        }, t.renderOfferPlaceholders = function() {
                            for (var e = [], n = 0; n < 3; ++n) {
                                var i = a.createElement(se, {
                                    key: n,
                                    orientation: t.getOfferListOrientation()
                                });
                                e.push(i)
                            }
                            return e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldReportInteractive && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.shouldReportInteractive && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.getOfferListOrientation(),
                            t = e.toLowerCase(),
                            n = Object(y.h)("prime-offer-list", e),
                            i = "prime-offer-list__content prime-offer-list__content--" + t,
                            r = this.props.listDirection === y.c.Horizontal,
                            o = this.props.listDirection === y.c.Vertical;
                        return this.shouldShowOffersSection() ? a.createElement(c.b, {
                            className: n,
                            suppressScrollX: o,
                            suppressScrollY: r
                        }, a.createElement(d.Xa, {
                            className: i,
                            alignItems: d.f.Center,
                            padding: {
                                top: 1,
                                bottom: 2,
                                x: 1
                            }
                        }, this.renderUpsell(), this.props.listDirection === y.c.Horizontal && this.renderDesktopOffers(), this.renderMobileOffers())) : null
                    }, t.prototype.renderUpsell = function() {
                        var e = this.props.userData;
                        if (e && !Object(y.m)(e) && !Object(y.n)(e) && !this.props.hideUpsell) return a.createElement(le, null)
                    }, t.prototype.renderOfferExperience = function(e) {
                        var t = this,
                            n = this.props.offersData;
                        if (this.shouldShowPlaceholders) return this.renderOfferPlaceholders();
                        if (n && n.primeOffers && n.primeOffers.length) {
                            var i = this.getSortedOffers(),
                                r = i[i.length - 1];
                            return i.map(function(n, i) {
                                return a.createElement(d.Xa, {
                                    display: d.X.InlineBlock,
                                    key: n.id
                                }, a.createElement(ae, {
                                    externalReftag: t.props.externalReftag,
                                    key: n.id,
                                    offer: n,
                                    isLast: r.id === n.id,
                                    index: i,
                                    orientation: t.getOfferListOrientation(),
                                    displayWidthType: e,
                                    toggleCrownMenu: t.props.toggleCrownMenu
                                }))
                            })
                        }
                        return a.createElement(m, null)
                    }, t.prototype.getFreeGamesWithPrimeOfferIds = function() {
                        return this.props.offersData ? this.props.offersData.primeOffers.filter(function(e) {
                            return e.tags.includes("FGWP")
                        }).map(function(e) {
                            return e.id
                        }) : []
                    }, t.prototype.getSortedOffers = function() {
                        var e = this;
                        if (!this.props.offersData || !this.props.offersData.primeOffers) return [];
                        var t = this.props.offersData.primeOffers,
                            n = this.getHiddenOfferIdsByPlacement(this.props.placement),
                            i = t.filter(function(e) {
                                return !n.includes(e.id)
                            });
                        if (this.getUserId()) {
                            var r = i.filter(function(t) {
                                    return e.isClaimedOffer(t)
                                }).sort(y.q),
                                a = this.filterOffersByOfferType(r),
                                o = i.filter(function(t) {
                                    return !e.isClaimedOffer(t)
                                }).sort(y.q);
                            return this.filterOffersByOfferType(o).concat(a)
                        }
                        return this.filterOffersByOfferType(i).slice().sort(y.q)
                    }, t.prototype.isClaimedOffer = function(e) {
                        return !this.offerHasExternalURL(e) && this.offerHasEntitlement(e)
                    }, t.prototype.offerHasEntitlement = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.prototype.offerHasExternalURL = function(e) {
                        return e.content && e.content.externalURL
                    }, t.prototype.filterOffersByOfferType = function(e) {
                        var t = this.getFreeGamesWithPrimeOfferIds() || [];
                        return this.props.offerFilterType === ue.a.Game ? e.filter(function(e) {
                            return t.includes(e.id)
                        }).sort(y.q) : this.props.offerFilterType === ue.a.InGameLoot ? e.filter(function(e) {
                            return !t.includes(e.id)
                        }).sort(y.q) : e
                    }, t.prototype.getUserId = function() {
                        var e = this.props.userData;
                        return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                    }, Object.defineProperty(t.prototype, "shouldShowPlaceholders", {
                        get: function() {
                            var e = this.props.offersData;
                            return !e || e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "shouldReportInteractive", {
                        get: function() {
                            return (!this.isUserDataLoading || this.isUserDataError) && (!this.isOffersDataLoading || this.isOffersDataError)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isUserDataLoading", {
                        get: function() {
                            var e = this.props.userData;
                            return e && e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isUserDataError", {
                        get: function() {
                            var e = this.props.userData;
                            return e && e.error
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isOffersDataLoading", {
                        get: function() {
                            var e = this.props.offersData;
                            return e && e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isOffersDataError", {
                        get: function() {
                            var e = this.props.offersData;
                            return e && e.error
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component)),
                me = Object(o.compose)(Object(l.a)(de, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(y.i)(y.f.DateOverride),
                                countryCode: Object(y.i)(y.f.CountryCode)
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(l.a)(X, {
                    name: "userData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(u.b)("PrimeOfferList"))(pe);
            var fe = Object(i.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(me);
            n.d(t, "a", function() {
                return fe
            })
        },
        "4S1L": function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("J4y2"),
                o = n("eJ65"),
                s = n("GnwI"),
                c = n("Ue10"),
                l = (n("49TI"), function() {
                    return i.createElement(c.Xa, {
                        className: "footer",
                        padding: {
                            y: 3
                        }
                    }, i.createElement(c.Xa, {
                        className: "footer__link-container",
                        display: c.X.Flex,
                        alignItems: c.f.Center,
                        justifyContent: c.Wa.Center,
                        flexWrap: c.Ba.Wrap,
                        margin: "auto",
                        padding: {
                            y: 3
                        }
                    }, i.createElement(c.Xa, {
                        className: "footer__glitch",
                        display: c.X.Flex,
                        alignItems: c.f.Center,
                        margin: {
                            right: 2
                        }
                    }, i.createElement(c.ob, {
                        asset: c.pb.LogoGlitch,
                        width: 30,
                        height: 30
                    })), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/about/",
                        "data-a-target": "frontpage-footer-about-link"
                    }, Object(r.d)("About", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://blog.twitch.tv/",
                        "data-a-target": "frontpage-footer-blog-link"
                    }, Object(r.d)("Blog", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/products/turbo/ticket?ref=footer",
                        "data-a-target": "frontpage-footer-turbo-link"
                    }, Object(r.d)("Turbo", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://music.twitch.tv/",
                        "data-a-target": "frontpage-footer-music-link"
                    }, Object(r.d)("Music", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "http://twitchadvertising.tv/",
                        "data-a-target": "frontpage-footer-advertising-link"
                    }, Object(r.d)("Advertise", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://dev.twitch.tv/",
                        "data-a-target": "frontpage-footer-developers-link"
                    }, Object(r.d)("Developers", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/partners/",
                        "data-a-target": "frontpage-footer-partners-link"
                    }, Object(r.d)("Partners", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/platforms/",
                        "data-a-target": "frontpage-footer-mobile-link"
                    }, Object(r.d)("Mobile", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/jobs/",
                        "data-a-target": "frontpage-footer-jobs-link"
                    }, Object(r.d)("Jobs", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://help.twitch.tv/",
                        "data-a-target": "frontpage-footer-help-link"
                    }, Object(r.d)("Help", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/terms-of-service/",
                        "data-a-target": "frontpage-footer-terms-link"
                    }, Object(r.d)("Terms", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/privacy-policy/",
                        "data-a-target": "frontpage-footer-privacy-link"
                    }, Object(r.d)("Privacy Policy", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/ad-choices/",
                        "data-a-target": "frontpage-footer-choices-link"
                    }, Object(r.d)("Ad Choices", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/cookie-policy/",
                        "data-a-target": "frontpage-footer-cookie-link"
                    }, Object(r.d)("Cookie Policy", "Footer"))), i.createElement(c.Xa, {
                        margin: {
                            left: 5
                        }
                    }, i.createElement(o.a, null, i.createElement("span", {
                        className: "footer__link",
                        "data-a-target": "frontpage-footer-language-link"
                    }, Object(r.d)("Language", "Footer")), i.createElement(c.u, {
                        "data-a-target": "frontpage-footer-language-options",
                        size: c.w.Medium,
                        direction: c.v.TopRight
                    }, i.createElement(a.a, null))))))
                }),
                u = Object(s.b)("Footer", {
                    autoReportInteractive: !0
                })(l);
            n.d(t, !1, function() {
                return l
            }), n.d(t, "a", function() {
                return u
            })
        },
        "4VQm": function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("TSYQ"),
                o = n("17x9"),
                s = n("q1tI"),
                c = n("GxwZ"),
                l = n("N0BP"),
                u = (n("+Mtq"), 100);
            ! function(e) {
                e[e.Resize = 0] = "Resize", e[e.Scroll = 1] = "Scroll", e[e.Wheel = 2] = "Wheel"
            }(i || (i = {}));
            var d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.root = null, n.scrollContent = null, n.xScrollContent = null, n.resizeTimeout = 0, n.receivers = [], n.scrollTimeout = 0, n.wheelTimeout = 0, n.getChildContext = function() {
                        return {
                            registerReceiver: n.registerReceiver,
                            requestVisibilityCheck: n.requestVisibilityCheck,
                            getScrollContent: n.getScrollContent,
                            scrollToTop: n.scrollToTop,
                            yScrollTo: n.yScrollTo
                        }
                    }, n.scrollToBottom = function() {
                        n.scrollContent && n.yScrollTo(n.scrollContent.scrollHeight)
                    }, n.scrollToTop = function() {
                        n.yScrollTo(0)
                    }, n.notifyReceivers = function(e) {
                        requestAnimationFrame(function() {
                            if (n.scrollContent) {
                                var t = n.scrollContent.getBoundingClientRect();
                                e && (e.offset = n.scrollContent.scrollTop), n.receivers.forEach(function(n) {
                                    n.checkVisible(t, e)
                                })
                            }
                        })
                    }, n.onResize = function() {
                        if (!n.resizeTimeout && n.scrollContent) {
                            var e = {
                                type: i.Resize,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.resizeTimeout = setTimeout(function() {
                                n.resizeTimeout = 0, n.notifyReceivers(e)
                            }, u)
                        }
                    }, n.onScroll = function() {
                        if (!n.scrollTimeout && n.scrollContent) {
                            var e = {
                                type: i.Scroll,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.scrollTimeout = setTimeout(function() {
                                n.scrollTimeout = 0, n.notifyReceivers(e)
                            }, u)
                        }
                    }, n.onWheel = function(e) {
                        if (!n.wheelTimeout && n.scrollContent) {
                            var t = {
                                type: i.Wheel,
                                offset: n.scrollContent.scrollTop,
                                wheelEvent: e
                            };
                            n.props.disableDebounce ? n.notifyReceivers(t) : n.wheelTimeout = setTimeout(function() {
                                n.wheelTimeout = 0, n.notifyReceivers(t)
                            }, u)
                        }
                    }, n.registerReceiver = function(e) {
                        return n.scrollContext && n.scrollContext.registerReceiver && n.scrollContext.registerReceiver(e), n.receivers.push(e), n.requestVisibilityCheck(e),
                            function() {
                                var t = n.receivers.indexOf(e);
                                n.receivers.splice(t, 1)
                            }
                    }, n.requestVisibilityCheck = function(e) {
                        requestAnimationFrame(function() {
                            var t = n.scrollContent;
                            if (t) {
                                var i = t.getBoundingClientRect();
                                e.checkVisible(i)
                            }
                        })
                    }, n.setRef = function(e) {
                        return n.root = e
                    }, n.yScrollTo = function(e) {
                        n.scrollContent && (n.scrollContent.scrollTop = e), n.onScroll()
                    }, n.getScrollContent = function() {
                        return n.scrollContent
                    }, n.createSimpleBarOptions = function() {
                        return {
                            autoHide: void 0 === n.props.autoHide || n.props.autoHide
                        }
                    }, t.scrollRef && t.scrollRef(n), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scrollContext = this.context, this.root) {
                        if (this.simplebarRef = new c(this.root, this.createSimpleBarOptions()), this.scrollContent = this.simplebarRef.getScrollElement(), this.xScrollContent = this.simplebarRef.getContentElement(), this.props.contentRef && this.props.contentRef(this.scrollContent), this.props.contentClassName) {
                            var e = this.scrollContent.querySelector(".simplebar-content");
                            e && e.classList.add(this.props.contentClassName)
                        }
                        this.props.scrollContentClassName && this.scrollContent.classList.add(this.props.scrollContentClassName), window.addEventListener("resize", this.onResize), this.scrollContent.addEventListener("scroll", this.onScroll), this.xScrollContent.addEventListener("scroll", this.onScroll), this.scrollContent.addEventListener("wheel", this.onWheel), this.notifyReceivers()
                    }
                }, t.prototype.componentWillUnmount = function() {
                    this.root && (delete this.simplebarRef, window.removeEventListener("resize", this.onResize), this.scrollContent && this.scrollContent.removeEventListener("scroll", this.onScroll), this.xScrollContent && this.xScrollContent.removeEventListener("scroll", this.onScroll))
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = (e.disableDebounce, e.suppressScrollX, e.suppressScrollY, e.scrollRef, e.scrollContentClassName, e.contentClassName, r.__rest(e, ["disableDebounce", "suppressScrollX", "suppressScrollY", "scrollRef", "scrollContentClassName", "contentClassName"])),
                        n = {
                            "scrollable-area": !0,
                            "scrollable-area--suppress-scroll-x": this.props.suppressScrollX,
                            "scrollable-area--suppress-scroll-y": this.props.suppressScrollY
                        };
                    return s.createElement("div", r.__assign({
                        className: a(t.className, n),
                        "data-test-selector": "scrollable-area-wrapper",
                        ref: this.setRef
                    }, Object(l.a)(this.props), {
                        style: this.props.style
                    }), s.Children.only(this.props.children))
                }, t.contextTypes = {
                    registerReceiver: o.func
                }, t.childContextTypes = {
                    registerReceiver: o.func,
                    requestVisibilityCheck: o.func,
                    getScrollContent: o.func,
                    scrollToTop: o.func,
                    yScrollTo: o.func
                }, t
            }(s.Component);
            n.d(t, !1, function() {
                return "scrollable-area-wrapper"
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return d
            })
        },
        "4Wd7": function(e, t, n) {
            "use strict";
            var i, r = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("XmgI"),
                c = n("4h+t"),
                l = n("x1M1"),
                u = n("Ue10");
            n("RRSb");
            ! function(e) {
                e[e.Large = 4] = "Large", e[e.Medium = 3] = "Medium", e[e.Small = 2] = "Small", e[e.ExtraSmall = 1.5] = "ExtraSmall", e[e.ExtremelySmall = 1] = "ExtremelySmall"
            }(i || (i = {}));
            var d = function(e) {
                var t = e.bitsConfig && e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
                t || (t = Object(c.b)());
                var n = t.orderedTiers.find(function(t) {
                    return t.bits <= (e.amount || 100)
                });
                n || (n = t.orderedTiers[0]);
                var d = e.display === u.X.Inline || e.display === u.X.InlineFlex || e.display === u.X.InlineBlock,
                    p = null,
                    m = r("cheermote-for-amount__cheer-amount", {
                        "cheermote-for-amount__display--table-cell": !d
                    }, {
                        "cheermote-for-amount__cheer-amount--medium": e.size === i.Medium
                    }, {
                        "cheermote-for-amount__cheer-amount--small": e.size === i.Small || e.size === i.ExtraSmall
                    }, {
                        "cheermote-for-amount__cheer-amount--extremely-small": e.size === i.ExtremelySmall
                    });
                if (void 0 !== e.amount && e.showAmount) {
                    var f = e.formattedNumber ? Object(o.f)(e.amount) : e.amount;
                    p = a.createElement(u.Pa, {
                        padding: e.size === i.Small ? 0 : void 0,
                        textAlign: e.size === i.Small ? u.Lb.Center : void 0
                    }, a.createElement("strong", {
                        className: m,
                        style: {
                            color: n.color
                        }
                    }, f))
                }
                var h = r("cheermote-for-amount__cheer-image", {
                        "cheermote-for-amount__display--table-cell": !d
                    }, {
                        "cheermote-for-amount__cheer--inline": d
                    }, {
                        "cheermote-for-amount__cheer-image--small": e.size === i.Small
                    }, {
                        "cheermote-for-amount__cheer-image--extra-small": e.size === i.ExtraSmall
                    }, {
                        "cheermote-for-amount__cheer-image--extremely-small": e.size === i.ExtremelySmall
                    }),
                    g = a.createElement(l.a, {
                        className: h,
                        sources: Object(s.c)(n, e.size || i.Large, e.animated)
                    });
                return e.showImage || (g = null), a.createElement(u.Pa, {
                    className: "cheermote-for-amount",
                    alignItems: e.alignItems,
                    display: e.display
                }, a.createElement("span", null, g, p))
            };
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return d
            })
        },
        "4h+t": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return d
            });
            var i = n("uYEN"),
                r = n("5zXJ"),
                a = {
                    Cheer: r.g,
                    Kreygasm: r.g,
                    Kappa: r.g,
                    Muxy: r.h,
                    Streamlabs: r.h,
                    SwiftRage: r.g,
                    VoHiYo: r.g
                },
                o = ["LIGHT", "DARK"],
                s = [1, 1.5, 2, 3, 4],
                c = null;

            function l() {
                if (!c) {
                    var e = [],
                        t = {};
                    Object.keys(a).forEach(function(n) {
                        var i = p(n, a[n]);
                        e.push(i), t[n.toLowerCase()] = i
                    }), c = {
                        orderedActions: e,
                        indexedActions: t
                    }
                }
                return c
            }
            var u = null;

            function d() {
                return u || (u = function(e) {
                    if (c) return c.indexedActions[e.toLowerCase()];
                    return p(e, a[e])
                }("Cheer")), u
            }

            function p(e, t) {
                var n = [i.a.Red, i.a.Blue, i.a.Green, i.a.Purple, i.a.Gray],
                    r = new Map,
                    a = [];
                if ("Cheer" === e) {
                    var o = m(e, i.a.Yellow);
                    r.set(i.a.Yellow, o), a.push(o)
                }
                return a.push.apply(a, n.map(function(t) {
                    var n = m(e, t);
                    return r.set(t, n), n
                })), {
                    prefix: e,
                    type: t,
                    tiers: a,
                    orderedTiers: a,
                    indexedTiers: r
                }
            }

            function m(e, t) {
                for (var n = [], i = {}, a = 0, c = o; a < c.length; a++)
                    for (var l = c[a], u = 0, d = s; u < d.length; u++) {
                        var p = d[u];
                        i[l] || (i[l] = {
                            animated: new Map,
                            static: new Map
                        });
                        var m = f(e, l, !0, t, p);
                        n.push(m), i[l].animated.set(p, m.url);
                        var h = f(e, l, !1, t, p);
                        n.push(h), i[l].static.set(p, h.url)
                    }
                return {
                    id: e + ";" + t,
                    canCheer: t <= r.p,
                    canShowInBitsCard: !0,
                    bits: t,
                    color: r.k[t],
                    images: n,
                    indexedImages: i
                }
            }

            function f(e, t, n, i, r) {
                var a = n ? "gif" : "png";
                return {
                    theme: t,
                    isAnimated: n,
                    dpiScale: r,
                    url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + i + "/" + r + "." + a
                }
            }
        },
        "5IL7": function(e, t, n) {},
        "5SyA": function(e, t, n) {},
        "5ZOr": function(e, t, n) {},
        "5hPa": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Search_SearchGameResultCard_Game"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "game"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
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
                                        value: "boxArtURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "40"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "55"
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
                    end: 115
                }
            };
            n.loc.source = {
                body: "query Search_SearchGameResultCard_Game($name: String!) {\ngame(name: $name) {\nid\nboxArtURL(width: 40 height: 55)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5zXJ": function(e, t, n) {
            "use strict";
            n.d(t, "v", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "t", function() {
                return l
            }), n.d(t, "n", function() {
                return u
            }), n.d(t, "p", function() {
                return d
            }), n.d(t, "q", function() {
                return p
            }), n.d(t, "o", function() {
                return m
            }), n.d(t, "r", function() {
                return f
            }), n.d(t, "l", function() {
                return h
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "j", function() {
                return v
            }), n.d(t, "g", function() {
                return b
            }), n.d(t, "e", function() {
                return y
            }), n.d(t, "i", function() {
                return k
            }), n.d(t, "h", function() {
                return S
            }), n.d(t, "f", function() {
                return _
            }), n.d(t, "k", function() {
                return C
            }), n.d(t, "u", function() {
                return E
            }), n.d(t, "s", function() {
                return N
            }), n.d(t, "d", function() {
                return O
            });
            var i, r = n("uYEN"),
                a = {
                    ERROR_DISPLAY_TIMEOUT: 5e3,
                    GET_BALANCE_RATE_LIMIT: 5e3,
                    UNDO_PROMPT_DURATION: 5e3
                },
                o = "https://d3aqoihi2n8ty8.cloudfront.net",
                s = o + "/cheer",
                c = o + "/actions",
                l = "bonus",
                u = 8e5,
                d = 1e5,
                p = 25e4,
                m = 500,
                f = 1e3,
                h = "cheer",
                g = r.a.Purple,
                v = "UNKNOWN",
                b = "FIRST_PARTY",
                y = "CUSTOM",
                k = "SPONSORED",
                S = "THIRD_PARTY",
                _ = "DISPLAY_ONLY",
                C = ((i = {})[r.a.Gray] = "#979797", i[r.a.Purple] = "#9c3ee8", i[r.a.Green] = "#1db2a5", i[r.a.Blue] = "#0099fe", i[r.a.Red] = "#f43021", i[r.a.Yellow] = "#f3a71a", i),
                E = "bits_sponsored_cheermotes",
                N = "bits_sponsored_cheermotes_announcement",
                O = "bits_charity_event"
        },
        "6qmu": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TopNav_UserMenu_Dropdown"
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
                                        value: "availability"
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
                                                value: "isSharingActivity"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "visibility"
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
                    end: 144
                }
            };
            n.loc.source = {
                body: "query TopNav_UserMenu_Dropdown {\ncurrentUser {\nid\ndisplayName\nlogin\navailability\nsettings {\nisSharingActivity\nvisibility\n}\nroles {\nisStaff\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "6sE4": function(e, t, n) {},
        "7APm": function(e, t, n) {},
        "7CcZ": function(e, t, n) {},
        "7fv/": function(e, t, n) {},
        "8/mp": function(e, t, n) {
            "use strict";
            var i = n("4VQm"),
                r = n("HAa/"),
                a = n("/MKj"),
                o = n("mrSG"),
                s = n("17x9"),
                c = n("q1tI"),
                l = n("/7QA"),
                u = n("Ue10"),
                d = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getStyles = function() {
                            if (n.props.disableStickiness) return {
                                position: "relative"
                            };
                            var e = n.state,
                                t = e.anchoredBottom,
                                i = e.anchoredTop,
                                r = e.top,
                                a = e.width,
                                o = t || i,
                                s = "absolute";
                            return window.outerWidth < (n.props.disableStickinessBelowWidth || 0) ? (s = "inherit", o = !1) : o && (s = "fixed"), {
                                position: s,
                                top: i ? "inherit" : r,
                                width: o ? a : "inherit"
                            }
                        }, n.lockBottom = function(e) {
                            n.element && n.setState({
                                anchoredBottom: !0,
                                top: window.innerHeight - e,
                                width: n.element.getBoundingClientRect().width
                            })
                        }, n.lockTop = function() {
                            n.element && n.setState({
                                anchoredTop: !0,
                                width: n.element.getBoundingClientRect().width
                            })
                        }, n.resizeStickyColumn = function() {
                            n.unlock(n.state.lastOffset || 0), n.checkBounding(!0, 0)
                        }, n.setRef = function(e) {
                            return n.element = e
                        }, n.state = {
                            anchoredBottom: !1,
                            anchoredTop: !1,
                            lastOffset: void 0,
                            offsetTop: void 0,
                            top: void 0,
                            width: void 0
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.element) {
                            var e = this.element.getBoundingClientRect();
                            this.setState({
                                offsetTop: e.top
                            })
                        }
                        var t = this.context.registerReceiver;
                        t ? this.unregister = t(this) : l.k.warn("<StickyContainer /> initialized missing a <ScrollableArea /> provider")
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.resizeStickyColumn()
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return c.createElement(u.Xa, {
                            position: u.fb.Relative,
                            fullWidth: !0
                        }, c.createElement("div", {
                            className: "sticky-container",
                            ref: this.setRef,
                            style: this.getStyles()
                        }, this.props.children))
                    }, t.prototype.checkVisible = function(e, t) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e, n, r, a, s;
                            return o.__generator(this, function(o) {
                                return !t || t.type !== i.a.Resize && t.type !== i.a.Wheel && t.type !== i.a.Scroll || (e = this.state.anchoredBottom || this.state.anchoredTop, n = t.offset >= (this.state.lastOffset || 0), t.type === i.a.Resize ? (this.unlock(t.offset), this.checkBounding(n, t.offset)) : t.wheelEvent && t.type === i.a.Wheel && e ? (r = t.wheelEvent, a = void 0, a = 0 === r.deltaMode ? r.deltaY || r.wheelDelta : 16 * r.deltaY, s = a + t.offset, this.context.yScrollTo(s), this.checkBounding(a > 0, t.offset)) : t.type !== i.a.Scroll || t.offset === this.state.lastOffset || e || this.checkBounding(n, t.offset)), [2]
                            })
                        })
                    }, t.prototype.checkBounding = function(e, t) {
                        e && this.state.anchoredTop && this.unlock(t), !e && this.state.anchoredBottom && this.unlock(t), this.state.anchoredBottom || this.state.anchoredTop || this.shouldLock(e), this.setState({
                            lastOffset: t
                        })
                    }, t.prototype.shouldLock = function(e) {
                        if (this.element) {
                            var t = this.element.getBoundingClientRect(),
                                n = this.state.offsetTop || 0;
                            if (t.height < window.innerHeight - n) this.lockTop();
                            else {
                                var i = t.top < n,
                                    r = t.top >= window.innerHeight,
                                    a = t.bottom < n,
                                    o = t.bottom + (this.props.bottomPixelThreshold || 0) >= window.innerHeight,
                                    s = !r && !i,
                                    c = !o && !a;
                                !s && !c || s && c || (!e && s && this.lockTop(), e && c && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0))), i && a && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0)), r && o && this.lockTop()
                            }
                        }
                    }, t.prototype.unlock = function(e) {
                        if (this.element) {
                            var t, n = this.state,
                                i = n.offsetTop,
                                r = n.width,
                                a = this.element.getBoundingClientRect(),
                                o = window.innerHeight - (i || 0),
                                s = r;
                            t = "inherit", a.height <= o ? s = "inherit" : this.state.anchoredTop ? t = e : this.state.anchoredBottom && (t = e - a.height + o - (this.props.bottomPixelThreshold || 0)), this.setState({
                                top: t,
                                width: s,
                                anchoredBottom: !1,
                                anchoredTop: !1
                            })
                        }
                    }, t.contextTypes = {
                        registerReceiver: s.func,
                        yScrollTo: s.func
                    }, t
                }(c.Component);
            var p = Object(a.connect)(function(e) {
                return {
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(d);
            n.d(t, "b", function() {
                return i.b
            }), n.d(t, "a", function() {
                return r.a
            }), n.d(t, "c", function() {
                return p
            })
        },
        "9aiH": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FriendRequestsNotification_Query"
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
                                        value: "incomingFriendRequests"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "1"
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalUnreadCount"
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
                    end: 115
                }
            };
            n.loc.source = {
                body: "query FriendRequestsNotification_Query {\ncurrentUser {\nid\nincomingFriendRequests(first: 1) {\ntotalUnreadCount\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "9fsF": function(e, t, n) {},
        "9k8c": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "PrimeOffer_ClaimGiftMutation"
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
                                    value: "ClaimGiftedOfferInput"
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
                                value: "claimGiftedOffer"
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
                                        value: "claimedGift"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "status"
                                            },
                                            arguments: [],
                                            directives: []
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 186
                }
            };
            n.loc.source = {
                body: "mutation PrimeOffer_ClaimGiftMutation($input: ClaimGiftedOfferInput!) {\nclaimGiftedOffer(input: $input) {\nclaimedGift {\nid\nto {\nlogin\n}\nofferID\nfrom {\nlogin\n}\nstatus\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "9kXc": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            });
            var i = n("/7QA"),
                r = n("yLwq"),
                a = n("kduP"),
                o = n("2xye"),
                s = n("sLmD");

            function c(e) {
                var t, n, s, c, d = e.append,
                    p = void 0 !== d && d,
                    m = e.searchResults,
                    f = e.currentGameResults,
                    h = e.currentUserResults,
                    g = e.currentVideoResults,
                    v = e.currentLiveResults;
                if (m.games && (t = {
                        totalHits: m.games.totalHits,
                        results: p && f ? f.results : []
                    }, p && m.exhaustedHits && f && !m.games.totalHits && (t.totalHits = f.totalHits), t.results = t.results.concat(m.games.hits.map(function(e, t) {
                        var n, r = i.p.intl.getLanguageCode();
                        n = r && void 0 !== e.localizations && r in e.localizations ? e.localizations[r] : e.name;
                        var s = u(e.tags);
                        return {
                            title: n,
                            thumbnailAltText: e.name,
                            linkTo: {
                                pathname: Object(a.c)(e.name),
                                state: {
                                    content: o.PageviewContent.Game,
                                    content_index: t,
                                    medium: o.PageviewMedium.NavSearch
                                }
                            },
                            id: e.objectID,
                            popularity: e.popularity,
                            tags: s
                        }
                    }))), m.videos) {
                    var b = p && g ? g.results : [],
                        y = m.videos.totalHits;
                    p && m.exhaustedHits && g && !m.videos.totalHits && (y = g.totalHits), s = function(e, t, n) {
                        return {
                            results: e.concat(t.hits.map(l)),
                            totalHits: t.totalHits || n
                        }
                    }(b, m.videos, y)
                }
                return m.users && (n = {
                    totalHits: p && h ? h.totalHits : m.users.totalHits,
                    results: p && h ? h.results : []
                }, p && m.exhaustedHits && h && !m.users.totalHits && (n.totalHits = h.totalHits), n.results = n.results.concat(m.users.hits.map(function(e, t) {
                    return {
                        login: e.login,
                        name: e.name,
                        thumbnail: e.profile_image || Object(r.c)(e.objectID, 64),
                        thumbnailAltText: e.name,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: o.PageviewContent.User,
                                content_index: t,
                                medium: o.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        followers: e.followers
                    }
                }))), m.channels && ((c = {
                    totalHits: p && v ? v.totalHits : m.channels.totalHits,
                    results: p && v ? v.results : []
                }).results = c.results.concat(m.channels.hits.map(function(e, t) {
                    var n = u(e.graffiti);
                    return {
                        viewerCount: e.channel_count,
                        login: e.login,
                        name: e.name,
                        thumbnailAltText: e.status,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: o.PageviewContent.Live,
                                content_index: t,
                                medium: o.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        status: e.status,
                        tags: n
                    }
                }))), {
                    currentGameResults: t,
                    currentUserResults: n,
                    currentLiveResults: c,
                    currentVideoResults: s,
                    exhaustedHits: m.exhaustedHits
                }
            }

            function l(e, t) {
                return {
                    title: e.title,
                    thumbnail: e.thumbnail,
                    thumbnailAltText: e.title,
                    linkTo: {
                        pathname: "/videos/" + e.objectID,
                        state: {
                            content: o.PageviewContent.Video,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    login: e.broadcaster_login,
                    name: e.broadcaster_name,
                    createdAt: e.created_at,
                    length: e.length,
                    id: e.objectID
                }
            }

            function u(e) {
                if (e) return e.map(function(e) {
                    var t, n = Object(s.a)();
                    return t = n && void 0 !== e.localizations && n in e.localizations ? e.localizations[n] : e.name, {
                        id: e.id,
                        isLanguageTag: e.name.includes("auto___lang"),
                        localizedName: t,
                        tagName: e.name
                    }
                })
            }
        },
        "9pSj": function(e, t, n) {
            "use strict";
            var i, r = n("/MKj"),
                a = n("mrSG"),
                o = n("cr+I"),
                s = n("q1tI"),
                c = n("oJmH"),
                l = n("/7QA"),
                u = n("eJ65"),
                d = n("yR8l"),
                p = n("ht6z"),
                m = n("geRD"),
                f = n("kz7j"),
                h = n("GnwI"),
                g = n("cinR"),
                v = n("Ue10"),
                b = (n("Wu8b"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(v.Xa, null, s.createElement(v.zb, {
                            className: "prime-offer-header",
                            borderBottom: !0,
                            background: v.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(v.W, {
                            bold: !0,
                            type: v.Pb.H6
                        }, Object(l.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                    }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                        var e = this.props.numOfUnseenOffers;
                        if (e) return s.createElement(v.zb, {
                            className: "prime-offer__new-offer-header",
                            borderBottom: !0,
                            background: v.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(v.Xa, {
                            fullWidth: !0,
                            display: v.X.Flex,
                            alignItems: v.f.Center
                        }, s.createElement(v.Xa, {
                            flexGrow: 1
                        }, s.createElement(v.W, {
                            bold: !0,
                            type: v.Pb.H6
                        }, Object(l.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(v.Xa, {
                            className: "prime-offer__new-offer-header-count",
                            textAlign: v.Lb.Center
                        }, s.createElement(v.zb, {
                            className: "prime-offer__new-offer-header-count__text",
                            background: v.r.Base,
                            color: v.O.Base,
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            justifyContent: v.Wa.Center
                        }, s.createElement(v.W, null, e.toString())))))
                    }, t
                }(s.Component)),
                y = Object(h.b)("PrimeOfferHeader", {
                    autoReportInteractive: !0
                })(b),
                k = n("4NwI"),
                S = n("Rjl4"),
                _ = n("O4UZ");
            ! function(e) {
                e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
            }(i || (i = {}));
            var C = n("QAxy"),
                E = n("SXud"),
                N = (n("l0e4"), n("yO+B")),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numOfUnseenOffers: 0,
                            updated: !1,
                            status: void 0,
                            error: void 0
                        }, t.saveCrownMenuRef = function(e) {
                            return t.crownMenuRef = e
                        }, t.toggleCrownMenu = function(e) {
                            t.crownMenuRef.toggleBalloon(e)
                        }, t.showOffersByDefault = function() {
                            var e = location.search,
                                n = o.parse(e);
                            return n && !!n.expandoffers || t.props.openByDefault
                        }, t.onToggleMenu = function(e) {
                            t.seeOffers(), e && t.setState({
                                numOfUnseenOffers: 0
                            }), Object(S.d)(!e, {
                                hasPrime: t.hasPrime(),
                                numberOfOffers: t.getNumberOfOffers()
                            }), t.refreshImpressionTracking()
                        }, t.refreshImpressionTracking = function() {
                            window.dispatchEvent(new Event("resize"))
                        }, t.getHiddenCrownOfferIds = function() {
                            return l.b.get("prime-crown-hidden-ids", [])
                        }, t.getNumberOfOffers = function() {
                            var e = t.props.offersData,
                                n = e && e.primeOffers;
                            return n && n.length || 0
                        }, t.onHover = function() {
                            Object(S.c)({
                                hasPrime: t.hasPrime()
                            })
                        }, t.hasPrime = function() {
                            return !!(t.props.userData && t.props.userData.currentUser && t.props.userData.currentUser.hasPrime)
                        }, t.registerOffersLoadedEvent = function() {
                            return t.props.latencyTracking.registerCustomEvent({
                                benchmark: 1e3,
                                group: f.a.TwitchPrime,
                                key: f.b.PrimeOfferLoaded,
                                label: f.c.Loaded,
                                start: f.d.Registration
                            })
                        }, t.getUnseenOffers = function(e) {
                            var n = e.offersData;
                            if (n && !n.loading && !n.error) {
                                var i = n.primeOffers || [];
                                t.setState({
                                    numOfUnseenOffers: i.filter(t.offerIsUnseen).length
                                })
                            }
                        }, t.offerIsUnseen = function(e) {
                            var n = Object(_.j)();
                            return !(t.getHiddenCrownOfferIds().includes(e.id) || n.includes(e.id) || t.offerIsSeen(e))
                        }, t.seeOffers = function() {
                            var e = t.props.offersData;
                            if (e && !e.loading && !e.error) {
                                var n = (e.primeOffers || []).map(function(e) {
                                    return "" + e.id
                                });
                                t.updateOfferStatus(), Object(_.o)(n)
                            }
                        }, t.updateOfferStatus = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, o, s, c, l;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (e = this.props.userData, !(t = e && e.currentUser && e.currentUser.id)) return [2];
                                            n = this.props.offersData && this.props.offersData.primeOffers || [], r = n.map(function(e) {
                                                return {
                                                    offerID: e.id,
                                                    status: _.a.Seen
                                                }
                                            }), o = Object(m.a)({
                                                userID: t,
                                                statusChanges: r
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updatePrimeOfferStatus(o)];
                                        case 2:
                                            return s = a.sent(), (c = s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.error) && c.code ? (l = i[c.code], this.setState({
                                                updated: !1,
                                                error: l || i.UNKNOWN
                                            }), [2]) : s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.self ? (this.setState({
                                                updated: !0,
                                                error: void 0
                                            }), [3, 4]) : (this.setState({
                                                updated: !1,
                                                error: i.UNKNOWN
                                            }), [2]);
                                        case 3:
                                            return a.sent(), this.setState({
                                                updated: !1,
                                                error: i.UNKNOWN
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.renderOfferList = function() {
                            return s.createElement(v.Xa, {
                                "data-a-target": "offers-list",
                                className: "prime-offers__list"
                            }, s.createElement(y, {
                                numOfUnseenOffers: t.state.numOfUnseenOffers
                            }), s.createElement(k.a, {
                                placement: _.d.Crown,
                                toggleCrownMenu: t.toggleCrownMenu
                            }))
                        }, t.shouldReportInteractive = function() {
                            return (!t.isUserDataLoading || t.isUserDataError) && (!t.isOffersDataLoading || t.isOffersDataError)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive(), this.offersLoadedEvent = this.registerOffersLoadedEvent(), this.getUnseenOffers(this.props)
                    }, t.prototype.componentDidUpdate = function() {
                        this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.getUnseenOffers(e);
                        var t = this.props.offersData,
                            n = e.offersData;
                        if (t && t.loading && n && !n.loading && n.primeOffers) {
                            this.props.latencyTracking.reportCustomEvent(this.offersLoadedEvent);
                            var i = n.primeOffers,
                                r = i && i.length;
                            Object(S.e)({
                                hasPrime: this.hasPrime(),
                                numberOfOffers: r || 0
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.userData && this.props.userData.requestInfo && Object(p.a)(this.props.userData.requestInfo.countryCode),
                            t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                        if (!e && !t) return null;
                        var n = {
                            align: v.Tb.Center,
                            direction: v.Ub.Bottom,
                            label: ""
                        };
                        return this.state.numOfUnseenOffers > 0 ? n.label = Object(l.d)("New Prime Loot", "PrimeOffers") : n.label = Object(l.d)("Prime Loot", "PrimeOffers"), s.createElement(v.Xa, {
                            className: "prime-offers",
                            position: v.fb.Relative
                        }, s.createElement(u.a, {
                            onToggle: this.onToggleMenu,
                            openByDefault: this.showOffersByDefault(),
                            tooltipProps: n,
                            ref: this.saveCrownMenuRef
                        }, s.createElement(g.a, {
                            onHover: this.onHover
                        }, s.createElement(v.A, {
                            ariaLabel: Object(l.d)("Prime offers", "PrimeOffers"),
                            overlay: !0,
                            icon: v.pb.Crown,
                            "data-a-target": "prime-offers-icon",
                            "data-target": "prime-offers-icon"
                        })), s.createElement(v.u, {
                            direction: v.v.BottomRight,
                            size: v.w.Large,
                            offsetX: "7px"
                        }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                    }, t.prototype.offerIsSeen = function(e) {
                        return e.self && e.self.status === _.a.Seen
                    }, t.prototype.renderUnseenOffersDisplay = function() {
                        var e = this.state.numOfUnseenOffers;
                        if (e && !this.state.error) return s.createElement(v.Xa, {
                            className: "prime-offers__pill",
                            position: v.fb.Absolute
                        }, s.createElement(v.i, {
                            type: v.n.BounceIn,
                            duration: v.k.Medium,
                            timing: v.m.EaseIn,
                            enabled: e > 0
                        }, s.createElement(v.cb, {
                            label: e.toString(),
                            type: v.db.Notification
                        })))
                    }, Object.defineProperty(t.prototype, "isUserDataLoading", {
                        get: function() {
                            var e = this.props.userData;
                            return e && e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isUserDataError", {
                        get: function() {
                            var e = this.props.userData;
                            return e && e.error
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isOffersDataLoading", {
                        get: function() {
                            var e = this.props.offersData;
                            return e && e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isOffersDataError", {
                        get: function() {
                            var e = this.props.offersData;
                            return e && e.error
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(s.Component),
                w = Object(c.compose)(Object(d.a)(E, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.openByDefault
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(_.i)(_.f.DateOverride),
                                countryCode: Object(_.i)(_.f.CountryCode)
                            }
                        }
                    }
                }), Object(d.a)(N, {
                    name: "userData"
                }), Object(d.a)(C, {
                    name: "updatePrimeOfferStatus"
                }), Object(h.b)("PrimeOffers"))(O);
            var x = Object(r.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded
                    }
                })(w),
                T = n("6x+I"),
                D = n("KxT4"),
                I = n("j3KY"),
                A = (n("gQ2q"), n("487o")),
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.reportInteractive = function() {
                            var e = t.props,
                                n = e.data,
                                i = e.latencyTracking;
                            n.loading && !n.error || i.reportInteractive()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive(), Object(S.h)()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.data,
                            n = e.blockBannerForGDPR,
                            i = !!t.currentUser && t.currentUser.hasPrime,
                            r = t.requestInfo && t.requestInfo.countryCode;
                        if (!Object(_.p)(i, r) || t.loading || n) return null;
                        var a = Object(I.e)(I.a, ""),
                            o = Object(l.d)("Twitch Prime", "BlueBar"),
                            c = s.createElement("span", null, Object(l.d)("Monthly games and in-game loot, exclusives, and access to hundreds of movies & TV shows with Prime Video.", "BlueBar")),
                            u = Object(I.e)(I.a, ""),
                            d = Object(l.d)("Start Your Free Trial", "BlueBar");
                        return t.loading || t.error || t.primePromotions && t.primePromotions.forEach(function(e) {
                            if (e) {
                                var t = e.externalURL ? e.externalURL : "";
                                switch (e.id) {
                                    case "twitch.prime.bluebar.left1":
                                        a = t, o = e.text;
                                        break;
                                    case "twitch.prime.bluebar.center1":
                                        c = s.createElement(T, {
                                            source: e.text,
                                            renderers: {
                                                Link: function(e) {
                                                    return s.createElement("a", {
                                                        href: e.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer"
                                                    }, e.children)
                                                }
                                            }
                                        });
                                        break;
                                    case "twitch.prime.bluebar.right1":
                                        u = t, d = e.text
                                }
                            }
                        }), s.createElement(g.a, {
                            onHover: S.g,
                            onClick: S.f
                        }, s.createElement(v.zb, {
                            color: v.O.Base,
                            className: "blue-bar",
                            "data-a-target": "blue-bar",
                            position: v.fb.Relative,
                            fullWidth: !0,
                            zIndex: v.cc.Above
                        }, s.createElement(v.Xa, {
                            className: "blue-bar__bar",
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap,
                            margin: "auto",
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, s.createElement(v.Xa, {
                            display: v.X.InlineFlex,
                            alignItems: v.f.Center,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(v.Xa, {
                            className: "blue-bar__logo",
                            display: v.X.InlineFlex,
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, s.createElement(v.ob, {
                            asset: v.pb.Crown
                        })), s.createElement(v.W, {
                            bold: !0,
                            type: v.Pb.Span,
                            noWrap: !0,
                            fontSize: v.Ca.Size6
                        }, s.createElement(v.Pa, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            "data-a-target": "blue-bar__link",
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, o))), s.createElement(v.W, {
                            className: "blue-bar__headline",
                            type: v.Pb.Span,
                            fontSize: v.Ca.Size6
                        }, c)), s.createElement(v.Xa, {
                            display: v.X.InlineFlex,
                            flexShrink: 0
                        }, s.createElement(v.W, {
                            bold: !0,
                            type: v.Pb.Span,
                            noWrap: !0,
                            fontSize: v.Ca.Size6,
                            color: v.O.Base
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            href: u,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, d))))))
                    }, t
                }(s.Component),
                P = Object(c.compose)(Object(r.connect)(function(e) {
                    return {
                        blockBannerForGDPR: Object(D.h)(e)
                    }
                }), Object(d.a)(A, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(_.i)(_.f.DateOverride)
                            }
                        }
                    }
                }), Object(h.b)("BlueBarComponent"))(F),
                R = n("z8lI");
            n.d(t, "d", function() {
                return x
            }), n.d(t, "a", function() {
                return P
            }), n.d(t, "c", function() {
                return R.a
            }), n.d(t, "f", function() {
                return _.i
            }), n.d(t, "b", function() {
                return _.c
            }), n.d(t, "e", function() {
                return _.f
            })
        },
        BK8n: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("Ue10"),
                a = function(e) {
                    var t = null;
                    return e.title && (t = i.createElement(r.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, i.createElement(r.W, {
                        fontSize: r.Ca.Size6,
                        color: e.error ? r.O.Error : r.O.Base,
                        bold: !0
                    }, e.title))), i.createElement(r.zb, {
                        padding: 2,
                        className: "settings-row",
                        fullWidth: !0
                    }, t, e.children, e.errorMessage && i.createElement(r.W, {
                        color: r.O.Error,
                        fontSize: r.Ca.Size7
                    }, e.errorMessage))
                };
            n.d(t, "a", function() {
                return a
            })
        },
        BLPV: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return c
            });
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("Ue10");
            ! function(e) {
                e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
            }(i || (i = {}));
            var c = function(e) {
                var t = e.status,
                    n = e.children,
                    c = r.__rest(e, ["status", "children"]),
                    l = s.E.Default,
                    u = s.F.Default,
                    d = !1;
                return t === i.Working ? l = s.E.Loading : t === i.Success ? l = s.E.Success : t === i.Error ? u = s.F.Alert : t === i.NoChanges && (d = !0), n || (n = t === i.Error ? Object(o.d)("Error", "Save Button") : Object(o.d)("Save", "Save Button")), a.createElement(s.z, r.__assign({
                    disabled: d,
                    state: l,
                    type: u
                }, c), n)
            }
        },
        BSTw: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Algolia_RequestInfo"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 57
                }
            };
            n.loc.source = {
                body: "query Algolia_RequestInfo {\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        By5U: function(e, t) {},
        "D2+s": function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                c = n("/7QA"),
                l = n("ZS2+"),
                u = n("/0dD"),
                d = n("76Lv"),
                p = n("D7An"),
                m = n("jUl1"),
                f = n("8/mp"),
                h = n("oUNp"),
                g = n("Ue10"),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openEditing = function(e) {
                            t.props.openEditing(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = this,
                            i = this.props.override,
                            r = void 0 !== i;
                        return "boolean" == typeof this.props.settingData ? t = a.createElement(g.Xa, null, this.renderToggle(this.props.settingKey, !!this.props.settingData, i)) : (t = a.createElement(g.W, {
                            wordBreak: g.bc.BreakAll
                        }, r ? JSON.stringify(i) : JSON.stringify(this.props.settingData)), e = a.createElement(g.Xa, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(g.A, {
                            ariaLabel: "Edit",
                            icon: g.pb.Edit,
                            key: this.props.settingKey,
                            onClick: function() {
                                return n.openEditing(n.props.settingKey)
                            },
                            blurAfterClick: !0
                        }))), a.createElement(g.zb, {
                            margin: {
                                bottom: 1,
                                right: 1
                            },
                            padding: 1,
                            color: g.O.Base,
                            display: g.X.Flex,
                            justifyContent: g.Wa.Between,
                            border: !0,
                            borderMarked: r,
                            key: this.props.settingKey
                        }, a.createElement(g.Ea, {
                            label: this.props.settingKey
                        }, t), e)
                    }, t.prototype.renderToggle = function(e, t, n) {
                        var i = this;
                        return a.createElement(g.Rb, {
                            onChange: function(n) {
                                var r = n.currentTarget.checked;
                                i.props.setOverride(e, r === t ? void 0 : r)
                            },
                            checked: void 0 === n ? t : !!n
                        })
                    }, t
                }(a.Component),
                b = (n("ZHMB"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            value: t.props.value
                        }, t.onValueChange = function(e) {
                            t.setState({
                                value: e.target.value
                            })
                        }, t.saveOverride = function() {
                            t.props.saveOverride(t.props.overrideKey, t.state.value)
                        }, t.removeOverride = function() {
                            t.props.saveOverride(t.props.overrideKey, void 0), t.props.close()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = "string" == typeof this.state.value ? this.state.value : JSON.stringify(this.props.value);
                        return a.createElement(f.b, {
                            contentClassName: "dynamic-setting-edit__content"
                        }, a.createElement(g.zb, {
                            background: g.r.Alt,
                            padding: 1,
                            fullWidth: !0,
                            display: g.X.Flex,
                            flexDirection: g.Aa.Column,
                            overflow: g.ab.Hidden
                        }, a.createElement(g.W, {
                            fontSize: g.Ca.Size3,
                            color: g.O.Alt
                        }, this.props.overrideKey), a.createElement(g.Xa, {
                            display: g.X.Flex,
                            alignItems: g.f.Stretch,
                            margin: {
                                y: 1
                            },
                            fullHeight: !0
                        }, a.createElement(g.Mb, {
                            placeholder: "(undefined)",
                            onChange: this.onValueChange,
                            value: e,
                            noResize: !0
                        })), a.createElement(g.Xa, {
                            flexShrink: 0,
                            display: g.X.Flex,
                            flexDirection: g.Aa.Column,
                            alignItems: g.f.End
                        }, this.props.error && a.createElement(g.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(g.W, {
                            color: g.O.Error
                        }, this.props.error)), a.createElement(g.Xa, {
                            display: g.X.Flex,
                            justifyContent: g.Wa.End
                        }, a.createElement(g.Xa, {
                            display: g.X.InlineBlock,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.z, {
                            onClick: this.props.close,
                            type: g.F.Hollow
                        }, "Cancel")), this.props.hasOverride && a.createElement(g.Xa, {
                            display: g.X.InlineBlock,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.z, {
                            type: g.F.Alert,
                            onClick: this.removeOverride
                        }, "Remove Override")), a.createElement(g.z, {
                            disabled: this.props.value === e,
                            onClick: this.saveOverride
                        }, "Save Override")))))
                    }, t
                }(a.Component));

            function y(e) {
                return e.toLowerCase().replace(/\s|_/g, "")
            }! function(e) {
                e.OverridesOnLoad = "PAGE LOADED WITH OVERRIDES ACTIVE", e.OverridesRequireRefresh = "Refresh the page to see your changes.", e.None = ""
            }(i || (i = {}));
            var k = n("kgc7"),
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            searchQuery: "",
                            dynamicSettingError: "",
                            overrides: Object(k.a)(),
                            editingOverrideKey: ""
                        }, t.dynamicSettings = window.__twilightSettings, t.filteredDynamicSettings = function() {
                            return "" === t.state.searchQuery ? Object.keys(t.dynamicSettings) : Object.keys(t.dynamicSettings).filter(function(e) {
                                return y(e).includes(t.state.searchQuery)
                            })
                        }, t.openEditing = function(e) {
                            t.setState({
                                editingOverrideKey: e
                            })
                        }, t.closeEditing = function() {
                            t.setState({
                                editingOverrideKey: "",
                                dynamicSettingError: ""
                            })
                        }, t.setOverride = function(e, n) {
                            var a = r.__assign({}, t.state.overrides);
                            if (void 0 === n) delete a[e];
                            else {
                                var o = void 0;
                                try {
                                    o = JSON.parse(n)
                                } catch (e) {
                                    o = n
                                }
                                var s = typeof t.dynamicSettings[e],
                                    l = typeof o;
                                if (s !== l) return void t.setState({
                                    dynamicSettingError: "Invalid entry: <" + l + "> is not of type <" + s + ">"
                                });
                                a[e] = o
                            }
                            t.closeEditing(), t.setState({
                                overrides: a
                            }), c.m.set(h.b, a), t.props.showUrgentMessage(i.OverridesRequireRefresh)
                        }, t.onSearchTextChange = function(e) {
                            t.setState({
                                searchQuery: y(e.target.value)
                            })
                        }, t.clearOverrides = function() {
                            c.m.set(h.b, {}), t.setState({
                                overrides: {}
                            }), t.props.showUrgentMessage(i.OverridesRequireRefresh)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = Object.keys(this.state.overrides).length,
                            n = this.state.editingOverrideKey ? this.dynamicSettings[this.state.editingOverrideKey] : void 0,
                            i = this.state.editingOverrideKey ? this.state.overrides[this.state.editingOverrideKey] : void 0,
                            r = void 0 !== i,
                            o = r ? i : n;
                        return a.createElement(g.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            overflow: g.ab.Hidden,
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(g.Xa, {
                            padding: {
                                right: 1
                            },
                            display: g.X.Flex,
                            fullWidth: !0
                        }, a.createElement(g.Xa, {
                            flexGrow: 1
                        }, a.createElement(g.Ra, {
                            autoFocus: this.props.autoFocusInput,
                            type: g.Ta.Search,
                            onChange: this.onSearchTextChange,
                            placeholder: "Search for Dynamic Settings"
                        })), a.createElement(g.Xa, {
                            flexShrink: 1,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(g.z, {
                            onClick: this.clearOverrides,
                            disabled: 0 === t
                        }, "clear overrides (", t, ")"))), a.createElement(g.Pa, {
                            fullWidth: !0
                        }, a.createElement(f.b, {
                            suppressScrollX: !0
                        }, a.createElement(g.Xa, {
                            padding: {
                                y: 1
                            }
                        }, this.filteredDynamicSettings().map(function(t) {
                            return a.createElement(v, {
                                key: t,
                                settingKey: t,
                                override: e.state.overrides[t],
                                settingData: window.__twilightSettings[t],
                                openEditing: e.openEditing,
                                setOverride: e.setOverride
                            })
                        })))), this.state.editingOverrideKey && a.createElement(g.zb, {
                            position: g.fb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0,
                            fullWidth: !0,
                            padding: 1,
                            background: g.r.Overlay
                        }, a.createElement(b, {
                            close: this.closeEditing,
                            saveOverride: this.setOverride,
                            overrideKey: this.state.editingOverrideKey,
                            value: o,
                            hasOverride: r,
                            error: this.state.dynamicSettingError
                        })))
                    }, t
                }(a.Component),
                _ = n("p46w"),
                C = n("pCxu"),
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onOverrideSelect = function(e) {
                            var n = t.props.override === e ? void 0 : e;
                            t.props.setOverride(t.props.experimentData.id, n)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = c.p.experiments.getAssignments();
                        if (!t) return null;
                        var n = this.props.experimentData,
                            i = void 0 !== this.props.override;
                        return a.createElement(g.zb, {
                            margin: {
                                bottom: 1,
                                right: 1
                            },
                            padding: 1,
                            color: g.O.Base,
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Wa.Between,
                            border: !0,
                            borderMarked: i
                        }, a.createElement(g.Ea, {
                            label: n.name
                        }, a.createElement(g.Xa, {
                            display: g.X.Flex,
                            flexDirection: g.Aa.Column,
                            fullWidth: !0,
                            ellipsis: !0
                        }, n.groups.map(function(r) {
                            var o = i ? e.props.override : t[n.id];
                            return a.createElement(g.Xa, {
                                margin: {
                                    bottom: .5
                                },
                                key: r.value
                            }, a.createElement(g.lb, {
                                onChange: function() {
                                    return e.onOverrideSelect(r.value)
                                },
                                label: r.value,
                                name: n.name,
                                checked: o === r.value
                            }))
                        }))))
                    }, t
                }(a.Component);
            var N = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.experiments = Object.keys(window.__twilightSettings.experiments).filter(function(e) {
                            return !!p.a[e]
                        }).reduce(function(e, t) {
                            return e[t] = r.__assign({
                                id: t
                            }, window.__twilightSettings.experiments[t]), e
                        }, {}), n.renderExperimentsDisabled = function() {
                            return a.createElement(g.Xa, null, a.createElement(g.W, {
                                fontSize: g.Ca.Size5
                            }, "Experiments are disabled from local storage."), a.createElement(g.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(g.z, {
                                onClick: n.enableExperiments
                            }, "Enable experiments and reload")))
                        }, n.enableExperiments = function() {
                            c.p.storage.set(C.b, !1), window.location.reload()
                        }, n.filteredExperiments = function() {
                            return "" === n.state.searchQuery ? Object.keys(n.experiments) : Object.keys(n.experiments).filter(function(e) {
                                return y(n.experiments[e].name).includes(n.state.searchQuery)
                            })
                        }, n.onExperimentSearchTextChange = function(e) {
                            n.setState({
                                searchQuery: y(e.target.value)
                            })
                        }, n.setOverride = function(e, t) {
                            var a = r.__assign({}, n.state.overrides);
                            t ? a[e] = t : delete a[e], n.setState({
                                overrides: a
                            }), _.set(c.a.experimentsOverrideCookie, JSON.stringify(a)), n.props.showUrgentMessage(i.OverridesRequireRefresh)
                        }, n.clearOverrides = function() {
                            _.set(c.a.experimentsOverrideCookie, JSON.stringify({})), n.setState({
                                overrides: {}
                            }), n.props.showUrgentMessage(i.OverridesRequireRefresh)
                        }, n.state = {
                            searchQuery: "",
                            overrides: Object(k.b)()
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (!c.p.experiments.getAssignments()) return this.renderExperimentsDisabled();
                        var t = Object.keys(this.state.overrides).length;
                        return a.createElement(g.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            overflow: g.ab.Hidden,
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(g.Xa, {
                            padding: {
                                right: 1
                            },
                            display: g.X.Flex,
                            fullWidth: !0
                        }, a.createElement(g.Xa, {
                            flexGrow: 1
                        }, a.createElement(g.Ra, {
                            autoFocus: this.props.autoFocusInput,
                            type: g.Ta.Search,
                            onChange: this.onExperimentSearchTextChange,
                            placeholder: "Search for Experiments"
                        })), a.createElement(g.Xa, {
                            flexShrink: 1,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(g.z, {
                            onClick: this.clearOverrides,
                            disabled: 0 === t
                        }, "Clear overrides (", t, ")"))), a.createElement(g.Pa, {
                            fullWidth: !0
                        }, a.createElement(f.b, null, a.createElement(g.Xa, {
                            padding: {
                                y: 1
                            }
                        }, this.filteredExperiments().map(function(t) {
                            var n = e.state.overrides[t];
                            return a.createElement(E, {
                                key: t,
                                experimentData: e.experiments[t],
                                override: n,
                                setOverride: e.setOverride
                            })
                        })))))
                    }, t
                }(a.Component),
                O = n("EuNP");
            n("d048");
            n.d(t, "a", function() {
                return x
            }), n.d(t, "b", function() {
                return P
            });
            var w, x = "twilight.perf-hide",
                T = "twilight.perf-size",
                D = "twilight.staff-tab",
                I = 3,
                A = l.a.wrap(function() {
                    return n.e(32).then(n.bind(null, "Msj/"))
                }, "DesktopInformation");
            ! function(e) {
                e.Latency = "Latency", e.Experiments = "Experiments", e.DynamicSettings = "Dynamic Settings", e.Desktop = "Desktop Latency"
            }(w || (w = {}));
            var F = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.showUrgentMessage = function(e) {
                            n.setState({
                                urgentMessage: e
                            })
                        }, n.renderDesktopStaffTabButton = function() {
                            return c.p.integrations.app ? n.renderStaffTabButton(w.Desktop, g.pb.Desktop) : null
                        }, n.renderStaffTabButton = function(e, t, i) {
                            void 0 === i && (i = !1);
                            var r = n.state.selectedTab === e;
                            return a.createElement(g.Sb, {
                                label: e,
                                direction: g.Ub.Right
                            }, a.createElement(g.A, {
                                onClick: function() {
                                    n.setState({
                                        selectedTab: e
                                    }), c.m.set(D, e)
                                },
                                icon: t,
                                size: g.B.Large,
                                overlay: !r,
                                ariaLabel: "Go To " + e,
                                type: r ? g.C.Primary : g.C.Default,
                                blurAfterClick: !0
                            }), i && a.createElement(g.Xa, {
                                position: g.fb.Relative
                            }, a.createElement(g.Xa, {
                                position: g.fb.Absolute,
                                attachTop: !0,
                                attachRight: !0
                            }, a.createElement(g.cb, {
                                label: "!",
                                type: g.db.Notification
                            }))))
                        }, n.onReload = function() {
                            location.reload()
                        }, n.onClickWindowSize = function() {
                            var e = n.state.size + 1;
                            e > I && (e = 0), c.m.set(T, e.toString()), n.setState({
                                size: e
                            })
                        }, n.onClickClose = function() {
                            n.props.hideStaffConsole()
                        };
                        var r = Object.keys(Object(k.b)()).length > 0,
                            o = Object.keys(Object(k.a)()).length > 0,
                            s = r || o ? i.OverridesOnLoad : i.None;
                        return n.state = {
                            size: c.m.get(T, 0),
                            selectedTab: c.m.get(D, w.Latency),
                            urgentMessage: s
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentWillMount = function() {
                        c.p.experiments.getAssignment(p.b.ClipsOnTheBrain)
                    }, t.prototype.render = function() {
                        if (this.props.hidden) return null;
                        var e = Object.keys(Object(k.b)()).length > 0,
                            t = Object.keys(Object(k.a)()).length > 0;
                        return a.createElement(g.zb, {
                            className: "staff-console staff-console--size-" + this.state.size + " " + Object(d.b)(u.a.Dark),
                            position: g.fb.Fixed,
                            display: g.X.Flex
                        }, a.createElement(g.zb, {
                            display: g.X.Flex,
                            border: !0,
                            fullWidth: !0
                        }, a.createElement(g.zb, {
                            className: "staff-consol__select-bar",
                            flexShrink: 1,
                            flexGrow: 0,
                            display: g.X.Flex,
                            flexDirection: g.Aa.Column,
                            borderRight: !0
                        }, this.renderStaffTabButton(w.Latency, g.pb.OP), this.renderStaffTabButton(w.Experiments, g.pb.Experiment, e), this.renderStaffTabButton(w.DynamicSettings, g.pb.NavSettings, t), this.renderDesktopStaffTabButton()), a.createElement(g.Xa, {
                            flexGrow: 1,
                            display: g.X.Flex,
                            flexDirection: g.Aa.Column,
                            overflow: g.ab.Hidden
                        }, a.createElement(g.zb, {
                            className: "staff-console__top-bar",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: g.X.Flex,
                            justifyContent: g.Wa.Between,
                            flexWrap: g.Ba.NoWrap,
                            alignItems: g.f.Center,
                            borderBottom: !0
                        }, a.createElement(g.Xa, {
                            padding: {
                                left: 1
                            }
                        }, a.createElement(g.W, {
                            bold: !0,
                            fontSize: g.Ca.Size4,
                            type: g.Pb.Span
                        }, this.state.selectedTab)), a.createElement(g.Xa, {
                            display: g.X.Flex,
                            padding: {
                                right: .5
                            }
                        }, a.createElement(g.A, {
                            onClick: this.onClickWindowSize,
                            icon: g.pb.Maximize,
                            overlay: !0,
                            ariaLabel: "Change Size"
                        }), a.createElement(g.A, {
                            onClick: this.onClickClose,
                            icon: g.pb.Close,
                            overlay: !0,
                            ariaLabel: "Close"
                        }))), a.createElement(g.Xa, {
                            display: g.X.Flex,
                            position: g.fb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            padding: {
                                left: 1,
                                top: 1
                            },
                            overflow: g.ab.Hidden
                        }, this.renderTabContent(this.state.selectedTab)), a.createElement(g.zb, {
                            flexShrink: 0,
                            flexGrow: 0,
                            borderTop: !0
                        }, this.state.urgentMessage && a.createElement(g.zb, {
                            background: g.r.Accent,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Wa.Between
                        }, a.createElement(g.W, null, this.state.urgentMessage), this.state.urgentMessage === i.OverridesRequireRefresh && a.createElement(g.z, {
                            onClick: this.onReload,
                            size: g.D.Small,
                            type: g.F.Hollow,
                            overlay: !0
                        }, "Reload Page")), a.createElement(g.Xa, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            className: "staff-console__hint-text"
                        }, 'Press "Ctr/Cmd + Shift + S" to toggle Staff Console')))))
                    }, t.prototype.renderTabContent = function(e) {
                        switch (e) {
                            case w.Latency:
                                return a.createElement(O.a, {
                                    benchmarking: c.p.benchmarking
                                });
                            case w.Experiments:
                                return a.createElement(N, {
                                    showUrgentMessage: this.showUrgentMessage,
                                    autoFocusInput: this.props.hasBeenShownFromUI
                                });
                            case w.DynamicSettings:
                                return a.createElement(S, {
                                    showUrgentMessage: this.showUrgentMessage,
                                    autoFocusInput: this.props.hasBeenShownFromUI
                                });
                            case w.Desktop:
                                return a.createElement(A, null);
                            default:
                                return null
                        }
                    }, t
                }(a.Component),
                P = Object(o.connect)(function(e) {
                    return {
                        hidden: e.staffConsole.hidden,
                        hasBeenShownFromUI: e.staffConsole.hasBeenShownFromUI
                    }
                }, function(e) {
                    return Object(s.bindActionCreators)({
                        hideStaffConsole: m.b,
                        showStaffConsole: m.c
                    }, e)
                })(F)
        },
        DS6v: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TopNav_CurrentUser"
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
                                        value: "createdAt"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasPrime"
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
                    end: 66
                }
            };
            n.loc.source = {
                body: "query TopNav_CurrentUser {\ncurrentUser {\nid\ncreatedAt\nhasPrime\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        EMHe: function(e, t, n) {
            "use strict";
            var i = n("BLPV");
            n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            })
        },
        EpBn: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("BK8n"),
                o = n("Ue10"),
                s = (n("9fsF"), function(e) {
                    return i.createElement(a.a, null, i.createElement(o.Ea, {
                        error: e.error,
                        errorMessage: e.errorMessage || Object(r.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                        hint: e.hint,
                        id: e.id,
                        label: e.label,
                        labelOptional: e.labelOptional,
                        orientation: e.orientation || o.Fa.Horizontal
                    }, e.children))
                });
            n.d(t, "a", function() {
                return s
            })
        },
        EuNP: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("8/mp"),
                s = n("kz7j"),
                c = n("DiGQ"),
                l = function() {
                    function e() {}
                    return e.getComponentStats = function(t) {
                        var n = 0,
                            i = 0,
                            r = 0,
                            a = 0;
                        e.updateLatencyStatus(t.rootInitDuration, 800), e.updateLatencyStatus(t.pageLoadDuration, 2e3), e.updateLatencyStatus(t.componentDuration, 2e3);
                        var o = e.flattenTrackers(t);
                        o.forEach(function(t) {
                            e.updateLatencyStatus(t.componentDuration, 400)
                        });
                        var s = o.map(function(e) {
                            return e.componentDuration.value || 0
                        });
                        s.length > 0 && (n = s.reduce(function(e, t) {
                            return e + t
                        }), i = Math.max.apply(Math, s), a = Math.min.apply(Math, s), r = n / s.length);
                        var c = {};
                        return o.forEach(function(e) {
                            c[e.componentDuration.latencyStatus] || (c[e.componentDuration.latencyStatus] = 0), c[e.componentDuration.latencyStatus]++
                        }), {
                            rootTracker: t,
                            average: e.getLatencyStatus(r, 400),
                            count: e.getLatencyStatus(o.length, 200),
                            max: e.getLatencyStatus(i, 400),
                            min: e.getLatencyStatus(a, 400),
                            countByStatus: c
                        }
                    }, e.getNetworkStats = function(t) {
                        var n = t.networkEvents.filter(function(e) {
                            return e.isPrePageload
                        });
                        n.forEach(function(t) {
                            e.updateLatencyStatus(t.duration, 150)
                        });
                        var i = n.map(function(e) {
                                return e.networkEvent.duration
                            }),
                            r = n.map(function(e) {
                                return e.networkEvent.transfer_size || 0
                            }),
                            a = 0,
                            o = 0,
                            s = 0,
                            c = 0,
                            l = 0;
                        i.length && (a = i.reduce(function(e, t) {
                            return e + t
                        }), o = r.reduce(function(e, t) {
                            return e + t
                        }), s = Math.max.apply(Math, i), c = Math.min.apply(Math, i), l = a / i.length), n.sort(function(e, t) {
                            return (t.duration.value || 0) - (e.duration.value || 0)
                        });
                        var u = {};
                        return n.forEach(function(e) {
                            u[e.duration.latencyStatus] || (u[e.duration.latencyStatus] = 0), u[e.duration.latencyStatus]++
                        }), {
                            metrics: n,
                            average: e.getLatencyStatus(l, 150),
                            count: e.getLatencyStatus(n.length, 200),
                            max: e.getLatencyStatus(s, 150),
                            min: e.getLatencyStatus(c, 150),
                            totalSize: o,
                            countByStatus: u
                        }
                    }, e.getQueryBatchStats = function(t) {
                        var n = t.queryBatchMetrics,
                            i = n.map(function(e) {
                                return e.slowestQueryInBatch || 0
                            }),
                            r = Math.max.apply(Math, i),
                            a = {
                                batchCount: {
                                    value: n.length,
                                    latencyStatus: c.a.Unknown
                                },
                                slowestQuery: {
                                    value: r,
                                    latencyStatus: c.a.Unknown
                                }
                            };
                        return e.updateLatencyStatus(a.batchCount, 3), e.updateLatencyStatus(a.slowestQuery, 150), a
                    }, e.getQueryStats = function(t) {
                        var n = 0,
                            i = 0,
                            r = 0,
                            a = t.queryEvents;
                        a.forEach(function(t) {
                            e.updateLatencyStatus(t.requestDuration, 150), e.updateLatencyStatus(t.queryDuration, 150)
                        });
                        var o = a.map(function(e) {
                            return e.queryDuration.value || 0
                        });
                        o.length > 0 && (n = o.reduce(function(e, t) {
                            return e + t
                        }), i = Math.max.apply(Math, o), r = n / o.length), a.sort(function(e, t) {
                            return (t.queryDuration.value || 0) - (e.queryDuration.value || 0)
                        });
                        var s = {};
                        return a.forEach(function(e) {
                            s[e.queryDuration.latencyStatus] || (s[e.queryDuration.latencyStatus] = 0), s[e.queryDuration.latencyStatus]++
                        }), {
                            metrics: a,
                            count: e.getLatencyStatus(a.length, 200),
                            max: e.getLatencyStatus(i, 150),
                            average: e.getLatencyStatus(r, 150),
                            min: e.getLatencyStatus(0, 150),
                            countByStatus: s
                        }
                    }, e.getLatencyStatus = function(e, t) {
                        return void 0 === e ? {
                            value: e,
                            latencyStatus: c.a.Unknown
                        } : {
                            value: e,
                            latencyStatus: e > t ? c.a.Fail : c.a.Pass
                        }
                    }, e.updateLatencyStatus = function(e, t) {
                        e && void 0 !== e.value && (e.latencyStatus = e.value > t ? c.a.Fail : c.a.Pass)
                    }, e.flattenTrackers = function(t, n) {
                        return n || (n = []), t.isRoot || n.push(t), t.children.forEach(function(t) {
                            e.flattenTrackers(t, n)
                        }), n
                    }, e
                }(),
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("span", null, this.bytesToSize(this.props.totalSize))
                    }, t.prototype.bytesToSize = function(e) {
                        if (0 === e) return "0 Bytes";
                        var t = Math.floor(Math.log(e) / Math.log(1024));
                        return Math.round(e / Math.pow(1024, t)) + " " + ["Bytes", "KB", "MB", "GB", "TB"][t]
                    }, t
                }(r.Component),
                d = n("TSYQ"),
                p = n("j9uj"),
                m = (n("hiYg"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.onClickExpand = function() {
                            n.setState({
                                isExpanded: !n.state.isExpanded
                            })
                        };
                        var i = t.tracker.depth < 2;
                        return n.state = {
                            isExpanded: i
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.tracker.isRoot ? r.createElement("div", {
                            className: "latency-metrics-component"
                        }, r.createElement("div", {
                            className: "request-latency-metrics__header"
                        }, r.createElement("div", {
                            className: "request-latency-metrics__header-url"
                        }, "Component"), r.createElement("div", {
                            className: "request-latency-metrics__header-time"
                        }, "Started"), r.createElement("div", {
                            className: "request-latency-metrics__header-size"
                        }, "Duration")), r.createElement("ul", null, this.renderItem())) : this.renderItem()
                    }, t.prototype.renderItem = function() {
                        var e = this.props.tracker,
                            t = e.children.length > 0,
                            n = {
                                "latency-metrics-component__metrics": !0,
                                "latency-metrics-component__metrics-with-children": t
                            };
                        return r.createElement("li", null, r.createElement("div", {
                            className: d(n),
                            onClick: this.onClickExpand
                        }, r.createElement("div", {
                            className: "latency-metrics-component__left"
                        }, r.createElement("span", {
                            className: "latency-metrics-component__name"
                        }, e.componentName), " ", t && r.createElement("span", null, "(", e.children.length, ")")), r.createElement("div", {
                            className: "latency-metrics-component__time"
                        }, Math.round(e.relativeStartTime), " ms"), r.createElement("div", {
                            className: "latency-metrics-component__duration"
                        }, r.createElement(p.a, {
                            metric: e.componentDuration
                        }))), r.createElement("ul", null, this.state.isExpanded && e.children.map(function(e) {
                            return r.createElement(m, {
                                tracker: e,
                                key: e.id
                            })
                        })))
                    }, t
                }(r.Component)),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.props.metric.latencyStatus === c.a.Unknown || void 0 === this.props.metric.value) return r.createElement("span", {
                            className: "latency-metrics__dot-animation"
                        }, " ");
                        var e = this.props.metric.latencyStatus === c.a.Fail ? "red" : "green";
                        return r.createElement("span", {
                            className: "latency-metrics__item-number latency-metrics__item-" + e
                        }, this.props.metric.value)
                    }, t
                }(r.Component),
                h = (n("L/sm"), function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return r.createElement("div", {
                            className: "query-metrics"
                        }, r.createElement("div", {
                            className: "query-metrics__header"
                        }, r.createElement("div", {
                            className: "query-metrics__header-batch"
                        }, "Batch"), r.createElement("div", {
                            className: "query-metrics__header-name"
                        }, "Name"), r.createElement("div", {
                            className: "query-metrics__header-time"
                        }, "Started"), r.createElement("div", {
                            className: "query-metrics__header-time"
                        }, "Request"), r.createElement("div", {
                            className: "query-metrics__header-time"
                        }, "Query")), this.props.queryMetrics.map(function(t) {
                            return e.renderItem(t)
                        }))
                    }, t.prototype.renderItem = function(e) {
                        var t = e.queryID;
                        return r.createElement("div", {
                            className: "query-metrics__item",
                            key: t
                        }, r.createElement("div", {
                            className: "query-metrics__item-batch"
                        }, e.batchID), r.createElement("div", {
                            className: "query-metrics__item-name"
                        }, this.renderQueryTitle(e)), r.createElement("div", {
                            className: "query-metrics__item-time"
                        }, Math.round(e.relativeStartTime), " ms"), r.createElement("div", {
                            className: "query-metrics__item-time"
                        }, e.requestDuration && e.requestDuration.latencyStatus && r.createElement(p.a, {
                            metric: e.requestDuration
                        })), r.createElement("div", {
                            className: "query-metrics__item-time"
                        }, r.createElement(p.a, {
                            metric: e.queryDuration
                        })))
                    }, t.prototype.renderQueryTitle = function(e) {
                        var t = e.variables && e.variables;
                        return t && t.id ? r.createElement("span", null, e.operationName, " (id: ", t.id, ")") : r.createElement("span", null, e.operationName)
                    }, t
                }(r.Component)),
                g = (n("cIQa"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return r.createElement("div", {
                            className: "request-latency-metrics"
                        }, r.createElement("div", {
                            className: "request-latency-metrics__header"
                        }, r.createElement("div", {
                            className: "request-latency-metrics__header-url"
                        }, "Url"), r.createElement("div", {
                            className: "request-latency-metrics__header-time"
                        }, "Started"), r.createElement("div", {
                            className: "request-latency-metrics__header-size"
                        }, "Size"), r.createElement("div", {
                            className: "request-latency-metrics__header-time"
                        }, "Time")), this.props.metricsGroup.metrics.map(function(t) {
                            return e.renderItem(t)
                        }))
                    }, t.prototype.getDisplayLink = function(e) {
                        var t = new URL(e),
                            n = t.hostname + t.pathname;
                        if (n.length < 24) return n;
                        var i = t.pathname.substring(t.pathname.lastIndexOf("/"));
                        i || a.k.warn("Failed to parse url", {
                            url: t,
                            fileName: i
                        });
                        var r = i.split(".");
                        return 3 === r.length && (i = r[0] + "." + r[2]), i.length > 24 && (i = i.substring(0, 16) + "..." + i.substring(i.lastIndexOf(".") - 4)), t.hostname + i
                    }, t.prototype.renderItem = function(e) {
                        var t = e.networkEvent,
                            n = t.request_url + ":" + t.duration + ":" + t.start_time;
                        return r.createElement("div", {
                            className: "request-latency-metrics__item",
                            key: n
                        }, r.createElement("div", {
                            className: "request-latency-metrics__item-url",
                            title: t.request_url
                        }, r.createElement("div", null, this.getDisplayLink(t.request_url))), r.createElement("div", {
                            className: "request-latency-metrics__item-time"
                        }, Math.round(e.relativeStartTime), " ms"), r.createElement("div", {
                            className: "request-latency-metrics__item-size"
                        }, t.transfer_size && t.transfer_size > 0 ? r.createElement(u, {
                            totalSize: t.transfer_size
                        }) : r.createElement("span", null)), r.createElement("div", {
                            className: "request-latency-metrics__item-time"
                        }, r.createElement(p.a, {
                            metric: e.duration
                        })))
                    }, t
                }(r.Component)),
                v = n("Ue10"),
                b = (n("LQTS"), "twilight.perf-tab"),
                y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderTab = function(e, t, i) {
                            var a = n.state.selectedTab === e;
                            return r.createElement(v.Ab, {
                                active: a,
                                onClick: function() {
                                    return n.onClickTab(e)
                                }
                            }, r.createElement(v.Xa, {
                                display: v.X.Flex
                            }, t, i && n.renderTabBubble(i)))
                        }, n.renderTabBubble = function(e) {
                            return r.createElement(v.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, r.createElement(v.cb, {
                                label: e.toString(),
                                type: v.db.Notification
                            }))
                        }, n.onClickTab = function(e) {
                            a.m.set(b, e), n.setState({
                                selectedTab: e
                            })
                        }, n.onLatencyUpdate = function() {
                            var e = l.getComponentStats(n.tracker),
                                t = l.getNetworkStats(n.tracker),
                                i = l.getQueryStats(n.tracker),
                                r = l.getQueryBatchStats(n.tracker),
                                a = n.tracker.getCustomEvents();
                            n.setState({
                                componentStats: e,
                                networkStats: t,
                                queryStats: i,
                                queryBatchStats: r,
                                customEvents: a
                            })
                        }, n.tracker = t.benchmarking.getRootLatencyTracker(), n.state = {
                            selectedTab: a.m.get(b, "overview"),
                            componentStats: l.getComponentStats(n.tracker),
                            networkStats: l.getNetworkStats(n.tracker),
                            queryStats: l.getQueryStats(n.tracker),
                            queryBatchStats: l.getQueryBatchStats(n.tracker),
                            customEvents: n.tracker.getCustomEvents()
                        }, n.tracker.subscribeToUpdates(n.onLatencyUpdate), n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(v.Xa, {
                            display: v.X.Flex,
                            flexDirection: v.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0
                        }, r.createElement(v.Xa, {
                            className: "latency-metrics__header-container",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap,
                            alignItems: v.f.Start
                        }, r.createElement(v.Bb, null, this.renderTab("overview", "Overview"), this.renderTab("components", "Components", this.state.componentStats.countByStatus[c.a.Fail]), this.renderTab("queries", "Queries", this.state.queryStats.countByStatus[c.a.Fail]), this.renderTab("requests", "Requests", this.state.networkStats.countByStatus[c.a.Fail]))), r.createElement(v.Xa, {
                            className: "latency-metrics__body",
                            display: v.X.Flex,
                            flexDirection: v.Aa.Column,
                            flexGrow: 1,
                            overflow: v.ab.Hidden,
                            fullHeight: !0
                        }, r.createElement(o.b, {
                            className: "latency-metrics__scroller"
                        }, r.createElement(v.Xa, {
                            margin: {
                                y: 1,
                                right: 1
                            }
                        }, "overview" === this.state.selectedTab && this.renderOverviewTab(), "components" === this.state.selectedTab && this.renderComponentsTab(), "queries" === this.state.selectedTab && this.renderQueriesTab(), "requests" === this.state.selectedTab && this.renderRequestsTab()))))
                    }, t.prototype.renderOverviewTab = function() {
                        var e = this,
                            t = this.state.networkStats,
                            n = this.state.queryStats,
                            i = this.state.queryBatchStats,
                            a = this.state.componentStats;
                        return r.createElement(v.Xa, null, r.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, r.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, r.createElement("span", null, s.c.FirstPaint)), r.createElement(v.Xa, {
                            className: "latency-metrics__item-right",
                            display: v.X.Flex,
                            flexWrap: v.Ba.NoWrap,
                            flexShrink: 0
                        }, r.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.tracker.isFirstLoad ? r.createElement(p.a, {
                            metric: this.tracker.firstPaint
                        }) : r.createElement("span", null, "n/a")))), r.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, r.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, r.createElement("span", null, "Initialize")), r.createElement(v.Xa, {
                            className: "latency-metrics__item-right",
                            display: v.X.Flex,
                            flexWrap: v.Ba.NoWrap,
                            flexShrink: 0
                        }, r.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.tracker.isFirstLoad ? r.createElement(p.a, {
                            metric: this.tracker.rootInitDuration
                        }) : r.createElement("span", null, "n/a")))), r.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, r.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, r.createElement("span", null, this.tracker.isFirstLoad ? "Page Load" : "App Transition")), r.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, r.createElement(p.a, {
                            metric: this.tracker.pageLoadDuration
                        }))), r.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, r.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, r.createElement("span", null, "Components (", a.count.value, ")")), r.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, r.createElement("span", {
                            className: "latency-metrics__item-stats"
                        }, r.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Slowest:"), r.createElement(p.a, {
                            metric: a.max
                        }), r.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Average:"), r.createElement(p.a, {
                            metric: a.average
                        })))), r.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, r.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, r.createElement("span", null, "Queries (", n.count.value, ")")), r.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, r.createElement("span", {
                            className: "latency-metrics__item-stats"
                        }, r.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Batches:"), r.createElement(f, {
                            metric: i.batchCount
                        }), r.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Slowest:"), r.createElement(p.a, {
                            metric: n.max
                        }), r.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Average:"), r.createElement(p.a, {
                            metric: n.average
                        })))), r.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, r.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, r.createElement("span", null, "Requests (", t.count.value, ")")), r.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, r.createElement("span", {
                            className: "latency-metrics__item-stats"
                        }, r.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Slowest:"), r.createElement(p.a, {
                            metric: t.max
                        }), r.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Average:"), r.createElement(p.a, {
                            metric: t.average
                        }), r.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Size:"), " ", r.createElement(u, {
                            totalSize: t.totalSize
                        })))), Object.keys(this.state.customEvents).map(function(t) {
                            return e.renderCustomEventGroup(t, e.state.customEvents[t])
                        }))
                    }, t.prototype.renderCustomEventGroup = function(e, t) {
                        var n = this;
                        return r.createElement(v.Xa, {
                            key: e,
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, r.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, r.createElement("span", null, e)), r.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, t.map(function(e) {
                            return n.renderCustomEvent(e)
                        })))
                    }, t.prototype.renderCustomEvent = function(e) {
                        return r.createElement("span", {
                            key: e.key
                        }, r.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, e.label, ":"), " ", r.createElement(p.a, {
                            metric: e.duration
                        }))
                    }, t.prototype.renderComponentsTab = function() {
                        return r.createElement(m, {
                            tracker: this.tracker
                        })
                    }, t.prototype.renderRequestsTab = function() {
                        return r.createElement(g, {
                            metricsGroup: this.state.networkStats
                        })
                    }, t.prototype.renderQueriesTab = function() {
                        return r.createElement(h, {
                            queryMetrics: this.tracker.queryEvents
                        })
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return y
            })
        },
        F9eG: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "cheer"
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
                                        value: "emotes"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "includeUpperTiers"
                                        },
                                        value: {
                                            kind: "BooleanValue",
                                            value: !0
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "includeSponsored"
                                        },
                                        value: {
                                            kind: "BooleanValue",
                                            value: !0
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
                                                value: "prefix"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "campaign"
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
                                                        value: "brandImageURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "brandName"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "thresholds"
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
                                                                value: "minimumBits"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "matchedPercent"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "minimumBitsAmount"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "bitsTotal"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "bitsUsed"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "bitsPercentageRemaining"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "userLimit"
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
                                                                value: "id"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "bitsUsed"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "canBeSponsored"
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
                                                value: "tiers"
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
                                                        value: "bits"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "color"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "canCheer"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "canShowInBitsCard"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "images"
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
                                                                value: "url"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "theme"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isAnimated"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "dpiScale"
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
                }],
                loc: {
                    start: 0,
                    end: 401
                }
            };
            n.loc.source = {
                body: "fragment cheer on User {\ncheer {\nid\nemotes (includeUpperTiers: true includeSponsored: true) {\nid\nprefix\ntype\ncampaign {\nid\nbrandImageURL\nbrandName\nthresholds {\nid\nminimumBits\nmatchedPercent\n}\nminimumBitsAmount\nbitsTotal\nbitsUsed\nbitsPercentageRemaining\nuserLimit\nself {\nid\nbitsUsed\ncanBeSponsored\n}\n}\ntiers {\nid\nbits\ncolor\ncanCheer\ncanShowInBitsCard\nimages {\nid\nurl\ntheme\nisAnimated\ndpiScale\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        FGgD: function(e, t, n) {},
        GcG5: function(e, t, n) {
            e.exports = n.p + "assets/brush-2dfd387528f390c8d077.svg"
        },
        GgTn: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "OnsiteNotifications_ReadNotifications"
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
                                    value: "ReadNotificationsInput"
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
                                value: "readNotifications"
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
                                        value: "notifications"
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
                                                value: "isRead"
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
                    end: 148
                }
            };
            n.loc.source = {
                body: "mutation OnsiteNotifications_ReadNotifications($input: ReadNotificationsInput!) {\nreadNotifications(input: $input) {\nnotifications {\nid\nisRead\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Gw3k: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("wIs1"),
                a = n("fvjX"),
                o = n("1/iK"),
                s = n("y5D0"),
                c = n("kRBY"),
                l = n("mrSG"),
                u = n("q1tI"),
                d = n("uNOt"),
                p = n("2iEm"),
                m = n("2INN"),
                f = n("/7QA"),
                h = n("J4y2"),
                g = n("eJ65"),
                v = n("yR8l"),
                b = n("2xye"),
                y = n("oJmH"),
                k = n("4VQm"),
                S = n("edgk"),
                _ = n("KtNF"),
                C = n("opIq"),
                E = n("dx/T"),
                N = n("ebRM"),
                O = n("RiD7"),
                w = n("Ue10"),
                x = (n("wsby"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handlePromoBuy = function(e) {
                            var n = Object(N.b)({
                                trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                                channelID: t.props.channelID,
                                purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                                bitsAmount: e.currentTarget.dataset.bitsAmount,
                                location: O.b.GetBitsButtonTopNav
                            });
                            n && t.props.onPromoBuyClose(n)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = u.createElement(w.Xa, {
                            "data-test-selector": "first-time-user-intro"
                        }, u.createElement(w.Xa, {
                            padding: {
                                x: 5,
                                y: 2
                            },
                            textAlign: w.Lb.Center
                        }, u.createElement(w.W, {
                            type: w.Pb.H4,
                            bold: !0
                        }, Object(f.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), u.createElement(w.Xa, {
                            padding: {
                                x: 2,
                                bottom: 1
                            }
                        }, u.createElement(w.W, {
                            type: w.Pb.Span,
                            color: w.O.Alt
                        }, Object(f.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), u.createElement(w.Pa, {
                            margin: {
                                left: .5
                            }
                        }, u.createElement("a", {
                            onClick: this.props.toggleShowTutorial
                        }, Object(f.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), u.createElement(w.Xa, {
                            padding: {
                                bottom: 2
                            },
                            textAlign: w.Lb.Center
                        }, u.createElement(w.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(w.W, {
                            type: w.Pb.H6,
                            bold: !0,
                            className: "bits-first-time-user-prompt__promo-header"
                        }, Object(f.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), u.createElement(w.z, {
                            onClick: this.handlePromoBuy,
                            "data-purchase-url": this.props.promo.url,
                            "data-bits-amount": this.props.promo.bits,
                            "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                        }, Object(f.d)("{price} For {amount} Bits", {
                            price: this.props.promo.price,
                            amount: this.props.promo.bits
                        }, "Bits--FirstTimeUserPrompt"))));
                        return this.props.isShowingTutorial ? u.createElement(w.Xa, {
                            className: "bits-first-time-user-prompt",
                            fullWidth: !0
                        }, u.createElement(w.Xa, {
                            className: "bits-first-time-user-prompt__tutorial-back-button"
                        }, u.createElement(w.z, {
                            onClick: this.props.toggleShowTutorial,
                            type: w.F.Text
                        }, u.createElement(w.ob, {
                            asset: w.pb.Play,
                            height: 8
                        }), " ", Object(f.d)("Back", "Bits--FirstTimeUserPrompt"))), u.createElement(w.Xa, {
                            textAlign: w.Lb.Center,
                            padding: {
                                x: 2,
                                bottom: 2,
                                top: 5
                            },
                            fullHeight: !0
                        }, u.createElement(w.i, {
                            type: w.n.SlideInLeft,
                            duration: w.k.Long,
                            enabled: !0
                        }, u.createElement(E.a, null)))) : this.props.animateFirstTimeUserIntro ? u.createElement(w.Pa, {
                            className: "bits-first-time-user-prompt"
                        }, u.createElement(w.i, {
                            type: w.n.SlideInRight,
                            duration: w.k.Long,
                            enabled: this.props.animateFirstTimeUserIntro
                        }, e)) : u.createElement(w.Xa, {
                            className: "bits-first-time-user-prompt"
                        }, e)
                    }, t
                }(u.Component)),
                T = n("lhih"),
                D = n("0Lz3"),
                I = n("GnwI"),
                A = n("Gw6o"),
                F = (n("IvMc"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hideFirstTimeUserIntro: !1
                        }, t.trackBitsCardInteraction = function(e, n) {
                            var i = {
                                actionName: e,
                                emoteType: n && n.emoteType,
                                emoteLevel: n && n.emoteLevel,
                                location: O.b.GetBitsButtonTopNav,
                                displayedBalance: t.props.bitsBalance || 0
                            };
                            Object(O.h)(i)
                        }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                            Object(S.a)(e, function() {
                                t.props.data && t.props.data.refetch()
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.loading) return u.createElement(w.zb, {
                            "data-a-target": "get-bits-button-content-loading",
                            display: w.X.Flex,
                            flexDirection: w.Aa.Column,
                            alignItems: w.f.Center,
                            justifyContent: w.Wa.Center,
                            textAlign: w.Lb.Center,
                            padding: {
                                y: 5
                            }
                        }, u.createElement(w.Za, {
                            delay: 0
                        }), u.createElement(w.Xa, {
                            padding: {
                                top: 2
                            }
                        }, u.createElement(w.W, {
                            italic: !0
                        }, Object(f.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                        var e = null;
                        if (this.props.bitsOffers) {
                            var t = this.props.bitsOffers.find(function(e) {
                                return Object(N.c)(e)
                            });
                            t && t.type === T.b && !this.state.hideFirstTimeUserIntro && (e = u.createElement(x, {
                                promo: t,
                                animateFirstTimeUserIntro: this.props.animateFirstTimeUserIntro,
                                isShowingTutorial: this.props.isShowingTutorial,
                                toggleShowTutorial: this.props.toggleShowTutorial,
                                trackBitsCardInteraction: this.trackBitsCardInteraction,
                                channelID: this.props.channelID || "",
                                onPromoBuyClose: this.onPromoBuyClose
                            }))
                        }
                        var n = null;
                        return void 0 !== this.props.bitsBalance ? n = u.createElement(w.Xa, {
                            textAlign: w.Lb.Center,
                            fullWidth: !0,
                            padding: {
                                y: .5
                            }
                        }, u.createElement(w.W, {
                            type: w.Pb.Span
                        }, Object(f.d)("You have {bitsBalance}", {
                            bitsBalance: u.createElement(_.a, {
                                withImage: !0,
                                withText: !0,
                                count: this.props.bitsBalance,
                                bitsConfig: this.props.bitsConfig
                            })
                        }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && (n = u.createElement(w.Xa, {
                            textAlign: w.Lb.Center,
                            fullWidth: !0,
                            padding: {
                                y: .5
                            }
                        }, u.createElement(w.W, {
                            type: w.Pb.Span
                        }, Object(f.d)("{bitsGem} Log in to see your Bits balance", {
                            bitsGem: u.createElement(_.a, {
                                count: 100,
                                withImage: !0,
                                bitsConfig: this.props.bitsConfig
                            })
                        }, "Bits--GetBitsButton")))), u.createElement(k.b, {
                            className: "get-bits-button-content"
                        }, u.createElement(w.Xa, null, n, e, u.createElement(w.zb, {
                            borderTop: !0,
                            fullWidth: !0
                        }, u.createElement(C.a, {
                            bitsConfig: this.props.bitsConfig,
                            channelLogin: this.props.channelLogin || "",
                            closeAllBits: this.onClose,
                            onClose: this.onClose,
                            trackBitsCardInteraction: this.trackBitsCardInteraction,
                            location: O.b.GetBitsButtonTopNav,
                            hidePromos: !0,
                            hideWateb: !0,
                            fullsize: !0
                        }))))
                    }, t
                }(u.Component)),
                P = Object(y.compose)(Object(I.b)("GetBitsButtonContent"), Object(v.a)(A, {
                    props: function(e) {
                        var t, n, i, r;
                        return e.data && e.data.user && e.data.user.cheer && (t = Object(D.a)(e.data.user.cheer.emotes), n = e.data.user.id), e.data && e.data.currentUser ? (r = e.data.currentUser.bitsBalance, i = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (i = e.data.bitsOffers), {
                            loading: !(!e.data || !e.data.loading),
                            bitsOffers: i,
                            bitsBalance: r,
                            bitsConfig: t,
                            channelID: n
                        }
                    },
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                }))(F),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isShowingTutorial: !1,
                            animateFirstTimeUserIntro: !1
                        }, t.renderButton = function() {
                            return u.createElement(w.z, {
                                type: w.F.Hollow,
                                overlay: !0,
                                dropdown: !0,
                                icon: w.pb.Bits
                            }, Object(f.d)("Get Bits", "Bits--GetBitsButton"))
                        }, t.toggleBalloon = function(e) {
                            t.setState({
                                animateFirstTimeUserIntro: !1
                            }), e || Object(O.h)({
                                actionName: O.a.BuyMain,
                                location: O.b.GetBitsButtonTopNav,
                                displayedBalance: 0
                            })
                        }, t.toggleShowTutorial = function() {
                            t.setState({
                                isShowingTutorial: !t.state.isShowingTutorial,
                                animateFirstTimeUserIntro: !0
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return u.createElement(g.a, {
                            onToggle: this.toggleBalloon
                        }, this.renderButton(), u.createElement(w.u, {
                            direction: w.v.BottomRight,
                            size: w.w.Large,
                            offsetX: "5px"
                        }, u.createElement(P, {
                            isLoggedIn: this.props.isLoggedIn,
                            channelLogin: this.props.channelLogin,
                            toggleShowTutorial: this.toggleShowTutorial,
                            isShowingTutorial: this.state.isShowingTutorial,
                            animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                        })))
                    }, t
                }(u.Component),
                B = Object(y.compose)(Object(I.b)("GetBitsButton"))(R);
            var U = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(c.f)(e)
                    }
                })(B),
                L = n("VwD5"),
                j = n("aCAx"),
                X = n("KxT4"),
                W = n("v2f3"),
                M = function(e) {
                    return u.createElement(w.Ua, l.__assign({
                        onClick: e.onClick,
                        linkTo: e.linkTo,
                        targetBlank: e.targetBlank
                    }, Object(w.dc)(e), {
                        borderRadius: w.x.Small
                    }), u.createElement(w.Xa, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, e.title))
                },
                q = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.status === X.b.ConsentSaved || this.props.status === X.b.ConsentRequired;
                        return Object(X.f)() && e ? u.createElement(M, {
                            title: Object(f.d)("Consent Management Tool", "TopNavGDPRLink"),
                            "data-a-target": "gdpr-link",
                            onClick: this.props.showConsentTool
                        }) : null
                    }, t
                }(u.Component),
                G = Object(i.connect)(function(e) {
                    return {
                        status: e.gdpr.status
                    }
                }, function(e) {
                    return Object(a.bindActionCreators)({
                        showConsentTool: function() {
                            return Object(j.d)(W.a, {})
                        }
                    }, e)
                })(q),
                z = n("oSPo");
            var V = Object(i.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded,
                        languageCode: Object(c.b)(e),
                        currentUser: Object(c.e)(e)
                    }
                })(z.b),
                H = n("17x9"),
                Q = n("9C/b"),
                K = n("8Ad5"),
                Y = n("f00E"),
                $ = n("kz7j"),
                J = n("NZDK"),
                Z = n("9kXc"),
                ee = n("rEFn"),
                te = n("u5aL"),
                ne = n("TSYQ"),
                ie = n("8/mp"),
                re = n("QVaV"),
                ae = n("fk61"),
                oe = n("N0BP"),
                se = n("JVUd"),
                ce = n("25n4"),
                le = n("0LAi"),
                ue = n("4HIT"),
                de = (n("5IL7"), n("KRR4")),
                pe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            t.props.trackClick(parseInt(t.props.id, 10)), t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.props.impressionListener.registerImpressionCallback(function() {
                            e.props.trackImpression(parseInt(e.props.id, 10))
                        })
                    }, t.prototype.render = function() {
                        var e;
                        return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.user.stream && (e = this.props.data.user.stream.previewImageURL), u.createElement(w.Ua, l.__assign({
                            linkTo: this.props.linkTo,
                            onClick: this.onClick,
                            tabIndex: -1
                        }, Object(oe.a)(this.props)), u.createElement(w.Xa, {
                            className: "search-results-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(w.zb, {
                            display: w.X.Flex,
                            flexDirection: w.Aa.Row,
                            alignItems: w.f.Start,
                            flexWrap: w.Ba.NoWrap,
                            position: w.fb.Relative
                        }, u.createElement(w.Xa, null, u.createElement(w.I, {
                            src: e || f.a.defaultStreamPreviewURL,
                            alt: this.props.imageAlt,
                            aspect: w.p.Aspect16x9,
                            size: w.J.Size12,
                            borderRadius: w.x.Large
                        }), u.createElement(w.Xa, {
                            position: w.fb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            margin: {
                                x: .5,
                                y: 4
                            }
                        }, u.createElement(w.zb, {
                            color: w.O.Overlay,
                            background: w.r.Overlay,
                            padding: {
                                x: .5
                            },
                            margin: {
                                y: .5
                            },
                            borderRadius: w.x.Small,
                            display: w.X.Flex
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: {
                                right: .5
                            }
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center
                        }, u.createElement(w.K, {
                            status: w.M.Live,
                            size: w.L.Small
                        }))), u.createElement(w.W, {
                            type: w.Pb.Span
                        }, Object(f.f)(this.props.viewerCount))))), u.createElement(w.H, {
                            overflow: w.ab.Hidden
                        }, u.createElement(w.Pa, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(w.W, {
                            type: w.Pb.H5,
                            ellipsis: !0
                        }, this.props.channelName)), u.createElement(w.Pa, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(w.W, {
                            className: "search-results-panel__link",
                            ellipsis: !0
                        }, this.props.title)), this.props.tags && this.props.tags.length > 0 && u.createElement(w.Pa, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(w.Xa, {
                            padding: {
                                top: .5
                            }
                        }, u.createElement(le.a, {
                            tags: this.props.tags,
                            linkPath: ue.a.PopularTag,
                            tagNumberLimit: 3
                        })))))))
                    }, t
                }(u.Component),
                me = Object(y.compose)(Object(v.a)(de, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                }), Object(se.a)("SearchLiveResultCard", {
                    percentage: 75
                }), Object(ce.c)())(pe),
                fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onHeaderClick = function() {
                            t.props.trackClick(ee.a.More, t.props.index), t.props.onClick && t.props.onClick()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.props.impressionListener.registerImpressionCallback(function() {
                            e.props.trackImpression(ee.a.More, e.props.index)
                        })
                    }, t.prototype.render = function() {
                        var e = this.props.children;
                        return u.createElement(w.Xa, {
                            className: "search-result-section__titlesep"
                        }, u.createElement(w.Ua, l.__assign({
                            onClick: this.onHeaderClick,
                            tabIndex: -1,
                            type: w.Va.Alpha
                        }, Object(w.dc)(this.props), {
                            "data-ts_selectable": !0
                        }), u.createElement(w.Xa, {
                            display: w.X.Flex,
                            padding: {
                                left: 1,
                                right: 2,
                                y: .5
                            }
                        }, e)))
                    }, t
                }(u.Component),
                he = Object(y.compose)(Object(se.a)("SearchResultTitle", {
                    percentage: 25
                }), Object(ce.d)())(fe),
                ge = n("H/lO");
            n("uvqV");

            function ve(e) {
                switch (e) {
                    case ge.a.Games:
                        return Object(f.d)("Categories", "SearchResultPanel");
                    case ge.a.Users:
                        return Object(f.d)("Channels", "SearchResultPanel");
                    case ge.a.Videos:
                        return Object(f.d)("Videos", "SearchResultPanel");
                    case ge.a.Channels:
                        return Object(f.d)("Live", "SearchResultPanel");
                    default:
                        return Object(f.d)("Top Results", "SearchResultPanel")
                }
            }
            var be = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBackClick = function(e) {
                            t.props.trackClick(ee.a.Back, t.props.searchIndex), t.props.onBackClick && t.props.onBackClick(e)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.showBack && this.props.trackImpression(ee.a.Back, this.props.searchIndex)
                    }, t.prototype.render = function() {
                        var e = this.props.searchIndex;
                        return u.createElement(w.zb, {
                            className: "search-title-bar " + (this.props.showBack ? "search-title-bar--show" : ""),
                            background: w.r.Alt2,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            position: w.fb.Relative,
                            zIndex: w.cc.Above,
                            borderBottom: !0,
                            "data-a-target": "nav-search-title-bar"
                        }, u.createElement(w.Xa, {
                            className: "search-title-bar__back-container",
                            display: w.X.Flex,
                            alignContent: w.e.Stretch
                        }, u.createElement(w.A, {
                            icon: w.pb.AngleLeft,
                            type: w.C.Secondary,
                            size: w.B.Large,
                            onClick: this.onBackClick,
                            ariaLabel: Object(f.d)("Back button", "SearchTitleBar"),
                            "data-ts_selectable": this.props.showBack,
                            "data-a-target": "nav-search-back"
                        })), u.createElement(w.Xa, {
                            className: "search-title-bar__title",
                            position: w.fb.Relative,
                            padding: {
                                left: 1
                            }
                        }, u.createElement(w.W, {
                            fontSize: w.Ca.Size5
                        }, ve(e))))
                    }, t
                }(u.Component),
                ye = Object(y.compose)(Object(se.a)("SearchTitleBar", {
                    percentage: 25
                }), Object(ce.d)())(be),
                ke = (n("vh9t"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e, t, n, i, r = this.props,
                            a = r.children,
                            o = r.index,
                            s = r.hitsCount,
                            c = r.totalHitsCount;
                        return o && (s && s > 0 ? e = Object(f.d)("more", "SearchResultSection") : c && c > 0 && (e = Object(f.d)("Show", "SearchResultSection")), void 0 !== c && (n = u.createElement(w.cb, {
                            type: w.db.Brand,
                            label: c < 100 ? Object(f.f)(c) : "99+"
                        })), t = u.createElement(he, l.__assign({
                            onClick: this.props.onHeaderClick,
                            index: o
                        }, Object(w.dc)(this.props)), u.createElement(w.Xa, {
                            display: w.X.Inline,
                            margin: {
                                right: 1
                            }
                        }, u.createElement(w.W, {
                            type: w.Pb.Span,
                            color: w.O.Link,
                            fontSize: w.Ca.Size7,
                            transform: w.Ob.Uppercase
                        }, ve(o))), u.createElement("div", null, n), u.createElement(w.Xa, {
                            textAlign: w.Lb.Right,
                            flexGrow: 1
                        }, u.createElement(w.W, {
                            fontSize: w.Ca.Size7,
                            transform: w.Ob.Uppercase
                        }, e)))), (Array.isArray(a) && a.length > 0 || a && !Array.isArray(a)) && (i = u.createElement(w.Xa, {
                            className: "search-result-section__listing-wrapper",
                            margin: {
                                top: .5,
                                bottom: .5
                            }
                        }, a)), u.createElement("div", {
                            className: "search-result-section__block"
                        }, t, i)
                    }, t
                }(u.Component)),
                Se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            t.props.trackClick(parseInt(t.props.user.id, 10)), t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.props.impressionListener.registerImpressionCallback(function() {
                            e.props.trackImpression(parseInt(e.props.user.id, 10))
                        })
                    }, t.prototype.render = function() {
                        var e = this.props.user,
                            t = Object(re.a)(e.login || "", e.name || "");
                        return u.createElement(w.Ua, {
                            linkTo: e.linkTo,
                            onClick: this.onClick,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: e.id
                        }, u.createElement(w.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(w.G, {
                            row: !0
                        }, u.createElement(w.I, {
                            alt: e.thumbnailAltText,
                            src: e.thumbnail || "",
                            size: w.J.Size4,
                            aspect: w.p.Aspect1x1
                        }), u.createElement(w.H, {
                            overflow: w.ab.Hidden
                        }, u.createElement(w.Pa, {
                            padding: {
                                x: 1
                            }
                        }, u.createElement(w.W, {
                            type: w.Pb.H5,
                            ellipsis: !0
                        }, t))))))
                    }, t
                }(u.Component),
                _e = Object(y.compose)(Object(se.a)("SearchUserResultCard", {
                    percentage: 75
                }), Object(ce.a)())(Se),
                Ce = n("hyVY"),
                Ee = n("0uWp"),
                Ne = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            t.props.trackClick(t.props.video.id), t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.props.impressionListener.registerImpressionCallback(function() {
                            e.props.trackImpression(e.props.video.id)
                        })
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.linkTo,
                            n = e.video,
                            i = Object(re.a)(n.login || "", n.name || ""),
                            r = Object(Ce.b)(n.length || 0);
                        return u.createElement(w.Ua, {
                            linkTo: t,
                            onClick: this.onClick,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, u.createElement(w.Xa, {
                            className: "search-results-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(w.G, {
                            row: !0
                        }, u.createElement(w.I, {
                            src: n.thumbnail ? n.thumbnail : "",
                            alt: n.thumbnailAltText,
                            size: w.J.Size12,
                            borderRadius: w.x.Large,
                            aspect: w.p.Aspect16x9
                        }), u.createElement(w.H, {
                            overflow: w.ab.Hidden
                        }, u.createElement(w.Pa, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(w.W, {
                            type: w.Pb.H5,
                            ellipsis: !0
                        }, n.title)), u.createElement(w.Pa, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(w.W, {
                            className: "search-results-panel__link",
                            ellipsis: !0
                        }, u.createElement(w.W, {
                            className: "search-results-panel__highlight-link",
                            type: w.Pb.Span
                        }, i), "· ", r || "", "· ", n.createdAt ? Object(f.c)(new Date(1e3 * n.createdAt), "medium") : "")), this.props.data && this.props.data.video && this.props.data.video.contentTags && this.props.data.video.contentTags.length > 0 && u.createElement(w.Pa, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(w.Xa, {
                            padding: {
                                top: .5
                            }
                        }, u.createElement(le.a, {
                            tags: this.props.data.video.contentTags,
                            linkPath: ue.a.PopularTag,
                            tagNumberLimit: 3
                        })))))))
                    }, t
                }(u.Component),
                Oe = Object(y.compose)(Object(v.a)(Ee, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.video.id
                            }
                        }
                    }
                }), Object(se.a)("SearchVideoResultCard", {
                    percentage: 75
                }), Object(ce.e)())(Ne),
                we = n("opSz"),
                xe = (n("dApd"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getGameCards = function(e) {
                            return t.props.gameResults ? t.props.gameResults.results.map(function(n, i) {
                                return u.createElement(ae.a, {
                                    onClick: t.onClick,
                                    id: n.id,
                                    key: "game_" + n.id,
                                    imageAlt: n.thumbnailAltText,
                                    linkTo: n.linkTo,
                                    title: n.title,
                                    tags: n.tags,
                                    "data-ts_selectable": !0,
                                    "data-tt_content": !0,
                                    itemRow: e,
                                    itemIndex: i
                                })
                            }) : []
                        }, t.getLiveCards = function(e) {
                            return t.props.liveResults ? t.props.liveResults.results.map(function(n, i) {
                                var r = Object(re.a)(n.login || "", n.name || "");
                                return u.createElement(me, {
                                    onClick: t.onClick,
                                    id: n.id,
                                    imageAlt: n.thumbnailAltText,
                                    linkTo: n.linkTo,
                                    title: n.status || "",
                                    login: n.login ? n.login : "",
                                    channelName: r,
                                    viewerCount: n.viewerCount || 0,
                                    "data-ts_selectable": !0,
                                    "data-tt_content": !0,
                                    itemRow: e,
                                    itemIndex: i,
                                    tags: n.tags
                                })
                            }) : []
                        }, t.getUserCards = function(e) {
                            return t.props.userResults ? t.props.userResults.results.map(function(n, i) {
                                return u.createElement(_e, {
                                    user: n,
                                    linkTo: n.linkTo,
                                    onClick: t.onClick,
                                    "data-ts_selectable": !0,
                                    "data-tt_content": !0,
                                    key: n.id,
                                    itemRow: e,
                                    itemIndex: i
                                })
                            }) : []
                        }, t.getVideoCards = function(e) {
                            return t.props.videoResults ? t.props.videoResults.results.map(function(n, i) {
                                return u.createElement(Oe, {
                                    video: n,
                                    linkTo: n.linkTo,
                                    onClick: t.onClick,
                                    "data-ts_selectable": !0,
                                    "data-tt_content": !0,
                                    key: n.id,
                                    itemRow: e,
                                    itemIndex: i
                                })
                            }) : []
                        }, t.onBackClick = function() {
                            return t.headerSelect(null)
                        }, t.gameHeaderSelect = function() {
                            return t.headerSelect(ge.a.Games)
                        }, t.liveHeaderSelect = function() {
                            return t.headerSelect(ge.a.Channels)
                        }, t.userHeaderSelect = function() {
                            return t.headerSelect(ge.a.Users)
                        }, t.videoHeaderSelect = function() {
                            return t.headerSelect(ge.a.Videos)
                        }, t.headerSelect = function(e) {
                            t.props.onCategorySelected(e)
                        }, t.onClick = function(e) {
                            if (e.nativeEvent.stopImmediatePropagation(), e.target !== e.currentTarget) {
                                var n = e.target,
                                    i = n.querySelector("a"),
                                    r = i ? i.querySelector("[data-tt_content]") : null;
                                r || (i = n.closest("a")), (r = i && i.dataset.tt_content ? i : null) && t.props.onResultSelected()
                            }
                        }, t.setScrollRef = function(e) {
                            return t.scroll = e
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.previousCategory !== this.props.currentCategory && (this.previousCategory = this.props.currentCategory, this.scroll.scrollToTop())
                    }, t.prototype.render = function() {
                        var e, t, n, i = {
                            "search-results-panel": !0,
                            "search-results-panel--active": !0,
                            "search-results-panel--closed": !this.props.isOpen,
                            "search-results-panel--filtered": this.props.currentCategory === ge.a.Videos
                        };
                        return e = this.props.currentCategory && null !== this.props.currentCategory ? u.createElement(ye, {
                            searchIndex: this.props.currentCategory,
                            showBack: !0,
                            onBackClick: this.onBackClick
                        }) : u.createElement(ye, {
                            showBack: !1
                        }), t = this.props.isWaiting ? u.createElement(w.Za, {
                            fillContent: !0
                        }) : this.props.isErrored ? this.getErrorMessage() : this.props.currentCategory && null !== this.props.currentCategory ? this.getCategoryDrillDown(this.props.currentCategory) : this.props.gameResults && this.props.gameResults.totalHits > 0 || this.props.userResults && this.props.userResults.totalHits > 0 || this.props.videoResults && this.props.videoResults.totalHits > 0 || this.props.liveResults && this.props.liveResults.totalHits > 0 ? this.getResultSections() : this.getNoResultsMessage(), this.props.currentCategory === ge.a.Videos && (n = u.createElement(we.a, {
                            key: "video-filters",
                            onOptionsChange: this.props.onVideoOptionsChange
                        })), u.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.props.onKeyDown
                        }, u.createElement(w.zb, {
                            className: ne(i),
                            background: w.r.Base,
                            overflow: w.ab.Hidden,
                            elevation: 5,
                            display: w.X.Flex,
                            flexDirection: w.Aa.Column,
                            flexWrap: w.Ba.NoWrap
                        }, e, n, u.createElement(ie.b, {
                            className: "search-results-panel__wrapper",
                            contentClassName: "search-results-panel__content",
                            onClick: this.onClick,
                            scrollRef: this.setScrollRef,
                            suppressScrollX: !0,
                            "data-a-target": "search-scroller"
                        }, u.createElement(w.Xa, {
                            fullWidth: !0
                        }, t, u.createElement(ie.a, {
                            key: this.props.currentCategory || "none",
                            enabled: !this.props.isWaiting && this.props.isOpen,
                            loadMore: this.props.loadMore
                        })))))
                    }, t.prototype.getResultSections = function() {
                        var e = [],
                            t = [];
                        return [{
                            key: "categories-section",
                            getCardsFn: this.getGameCards,
                            index: ge.a.Games,
                            hitsCount: this.props.gameResults ? this.props.gameResults.results.length : 0,
                            headerSelect: this.gameHeaderSelect,
                            results: this.props.gameResults
                        }, {
                            key: "live-section",
                            getCardsFn: this.getLiveCards,
                            index: ge.a.Channels,
                            hitsCount: this.props.liveResults ? this.props.liveResults.results.length : 0,
                            headerSelect: this.liveHeaderSelect,
                            results: this.props.liveResults
                        }, {
                            key: "channels-section",
                            getCardsFn: this.getUserCards,
                            index: ge.a.Users,
                            hitsCount: this.props.userResults ? this.props.userResults.results.length : 0,
                            headerSelect: this.userHeaderSelect,
                            results: this.props.userResults
                        }, {
                            key: "videos-section",
                            getCardsFn: this.getVideoCards,
                            index: ge.a.Videos,
                            hitsCount: this.props.videoResults ? this.props.videoResults.results.length : 0,
                            headerSelect: this.videoHeaderSelect,
                            results: this.props.videoResults
                        }].forEach(function(n) {
                            n.hitsCount ? e.push(n) : t.push(n)
                        }), e.concat(t).map(function(e, t) {
                            return u.createElement(ke, {
                                key: e.key,
                                totalHitsCount: e.results ? e.results.totalHits : 0,
                                hitsCount: e.hitsCount,
                                index: e.index,
                                onHeaderClick: e.headerSelect,
                                "data-a-target": e.key
                            }, e.getCardsFn(t))
                        })
                    }, t.prototype.getCategoryDrillDown = function(e) {
                        var t;
                        switch (e) {
                            case ge.a.Games:
                                if (!this.props.gameResults || 0 === this.props.gameResults.totalHits) return this.getNoResultsMessage();
                                t = this.getGameCards();
                                break;
                            case ge.a.Users:
                                if (!this.props.userResults || 0 === this.props.userResults.totalHits) return this.getNoResultsMessage();
                                t = this.getUserCards();
                                break;
                            case ge.a.Videos:
                                if (!this.props.videoResults || 0 === this.props.videoResults.totalHits) return this.getNoResultsMessage();
                                t = this.getVideoCards();
                                break;
                            case ge.a.Channels:
                                if (!this.props.liveResults || 0 === this.props.liveResults.totalHits) return this.getNoResultsMessage();
                                t = this.getLiveCards();
                                break;
                            default:
                                return this.getNoResultsMessage()
                        }
                        return u.createElement(ke, null, t)
                    }, t.prototype.getNoResultsMessage = function() {
                        return u.createElement(w.Xa, {
                            display: w.X.Flex,
                            flexDirection: w.Aa.Column,
                            justifyContent: w.Wa.Center,
                            alignItems: w.f.Center,
                            flexGrow: 1,
                            fullHeight: !0,
                            zIndex: w.cc.Above,
                            className: "search-results-panel__notice-wrap"
                        }, u.createElement(w.zb, {
                            color: w.O.Alt2,
                            textAlign: w.Lb.Center,
                            flexShrink: 1
                        }, u.createElement(w.ob, {
                            asset: w.pb.SearchNoResults,
                            width: 46,
                            height: 48
                        })), u.createElement(w.Pa, {
                            margin: {
                                top: 1
                            },
                            textAlign: w.Lb.Center
                        }, u.createElement(w.W, {
                            type: w.Pb.H4,
                            "data-a-target": "nav-search-no-results",
                            "data-test-selector": "panel-body-no-results"
                        }, Object(f.d)("No results found", "SearchResultPanel"))), u.createElement(w.W, {
                            type: w.Pb.P
                        }, Object(f.d)("They're probably in another castle", "SearchResultPanel")))
                    }, t.prototype.getErrorMessage = function() {
                        return u.createElement(w.Xa, {
                            display: w.X.Flex,
                            flexDirection: w.Aa.Column,
                            justifyContent: w.Wa.Center,
                            alignItems: w.f.Center,
                            flexGrow: 1,
                            fullHeight: !0,
                            zIndex: w.cc.Above,
                            className: "search-results-panel__notice-wrap"
                        }, u.createElement(w.zb, {
                            color: w.O.Alt2,
                            textAlign: w.Lb.Center,
                            flexShrink: 1
                        }, u.createElement(w.ob, {
                            asset: w.pb.DeadGlitch,
                            width: 46,
                            height: 48
                        })), u.createElement(w.Pa, {
                            margin: {
                                top: 1
                            },
                            textAlign: w.Lb.Center
                        }, u.createElement(w.W, {
                            type: w.Pb.H4,
                            "data-test-selector": "search-error-message"
                        }, Object(f.d)("Search is not available at this time", "SearchResultPanel"))), u.createElement(w.W, {
                            type: w.Pb.P
                        }, Object(f.d)("Please try again later", "SearchResultPanel")))
                    }, t.contextTypes = {
                        requestVisibilityCheck: H.func
                    }, t
                }(u.Component)),
                Te = (n("PLUE"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isAnimating: !1,
                            currentCategory: t.currentCategory
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this;
                        e.currentCategory && e.currentCategory !== this.props.currentCategory && this.setState({
                            currentCategory: e.currentCategory
                        }), this.props.isVisible !== e.isVisible && (this.animationTimeout && window.clearTimeout(this.animationTimeout), this.setState({
                            isAnimating: !0
                        }), this.animationTimeout = window.setTimeout(function() {
                            t.setState({
                                isAnimating: !1
                            })
                        }, 300))
                    }, t.prototype.componentWillUnmount = function() {
                        this.animationTimeout && window.clearTimeout(this.animationTimeout)
                    }, t.prototype.render = function() {
                        if (!this.state.currentCategory) return null;
                        var e = this.getAssetName(this.state.currentCategory);
                        return this.props.isVisible || this.state.isAnimating ? u.createElement(w.Xa, {
                            className: "search-tag",
                            display: w.X.Flex,
                            position: w.fb.Absolute,
                            attachTop: !0,
                            attachBottom: !0
                        }, u.createElement(w.i, {
                            enabled: !0,
                            type: this.props.isVisible ? w.n.BounceIn : w.n.BounceOut
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            fullHeight: !0
                        }, u.createElement(w.Ib, {
                            type: w.Kb.Accent,
                            action: w.Jb.Remove,
                            label: this.state.currentCategory,
                            icon: e,
                            onClick: this.props.onClick,
                            "data-test-selector": "filter-icon",
                            "data-a-target": "nav-search-clear"
                        })))) : null
                    }, t.prototype.getAssetName = function(e) {
                        switch (e) {
                            case ge.a.Games:
                                return w.pb.NavGames;
                            case ge.a.Users:
                                return w.pb.NavProfile;
                            case ge.a.Videos:
                                return w.pb.NavVideos;
                            case ge.a.Channels:
                            default:
                                return w.pb.NavChannels
                        }
                    }, t
                }(u.Component)),
                De = (n("1i0o"), "nav-search-input"),
                Ie = {
                    align: w.Tb.Center,
                    direction: w.Ub.Bottom,
                    label: ""
                },
                Ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleKeydown = function(e) {
                            if (e.keyCode === K.a.F && e.altKey) {
                                if (e.preventDefault(), !t.NavSearchInputRef) return;
                                t.NavSearchInputRef.focus()
                            }
                        }, t.focusInput = function(e) {
                            if (!e) {
                                if (!t.NavSearchInputRef) return;
                                t.NavSearchInputRef.focus()
                            }
                        }, t.renderSearchInput = function() {
                            return u.createElement(w.rb, {
                                onChange: t.handleChange,
                                onFocus: t.props.onFocus,
                                onKeyDown: t.props.onKeyDown,
                                placeholder: Ie.label,
                                id: De,
                                "data-a-target": "nav-search-input",
                                spellCheck: !1,
                                refDelegate: t.setNavSearchInputRef
                            })
                        }, t.getSearchPanelProps = function() {
                            return {
                                isOpen: !!t.props.truncated || t.props.isOpen,
                                gameResults: t.props.gameResults,
                                userResults: t.props.userResults,
                                videoResults: t.props.videoResults,
                                liveResults: t.props.liveResults,
                                isErrored: t.props.isErrored,
                                isWaiting: t.props.isWaiting,
                                onResultSelected: t.props.onResultSelected,
                                onCategorySelected: t.props.onCategorySelected,
                                currentCategory: t.props.currentCategory,
                                onVideoOptionsChange: t.props.onVideoOptionsChange,
                                loadMore: t.props.loadMore,
                                onKeyDown: t.props.onKeyDown
                            }
                        }, t.setNavSearchInputRef = function(e) {
                            return t.NavSearchInputRef = e
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t.categoryTagClicked = function(e) {
                            e.nativeEvent.stopImmediatePropagation(), t.props.onCategorySelected(null)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        window.addEventListener("keydown", this.handleKeydown)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("keydown", this.handleKeydown)
                    }, t.prototype.render = function() {
                        return Ie.label = Object(f.d)("Search", "NavSearch"), this.props.truncated ? u.createElement(g.a, {
                            onToggle: this.focusInput,
                            tooltipProps: Ie
                        }, u.createElement(w.A, {
                            ariaLabel: Ie.label,
                            icon: w.pb.NavSearch,
                            overlay: !0
                        }), u.createElement(w.u, {
                            direction: w.v.BottomRight,
                            size: w.w.Large,
                            tailOffset: 7,
                            tailBackground: w.r.Alt2,
                            "data-a-target": "nav-search-balloon"
                        }, u.createElement(w.zb, {
                            background: w.r.Alt2,
                            padding: 1,
                            borderBottom: !0
                        }, this.renderSearchInput()), u.createElement(xe, l.__assign({}, this.getSearchPanelProps())))) : u.createElement("div", {
                            className: "top-nav__search-container",
                            "data-click-out-id": "nav-search-balloon"
                        }, u.createElement(te.a, {
                            onClickOut: this.props.onClickOut
                        }, this.renderSearchInput(), u.createElement(w.u, {
                            direction: w.v.Bottom,
                            noTail: !0,
                            size: w.w.Large,
                            show: this.props.isOpen,
                            offsetY: "5px",
                            "data-a-target": "nav-search-balloon"
                        }, u.createElement(xe, l.__assign({}, this.getSearchPanelProps()))), u.createElement(Te, {
                            isVisible: this.props.isOpen && !!this.props.currentCategory,
                            currentCategory: this.props.currentCategory,
                            onClick: this.categoryTagClicked
                        })))
                    }, t
                }(u.Component),
                Fe = 175,
                Pe = 1e3,
                Re = 1e3,
                Be = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.searchResultsFirstPage = null, n.searchSessionID = "", n.getChildContext = function() {
                            return {
                                getSearchTrackingProps: function() {
                                    var e = n.state,
                                        t = e.term,
                                        i = e.queryID,
                                        r = e.videoOptions;
                                    return {
                                        term: t,
                                        queryID: i,
                                        searchSessionID: n.searchSessionID,
                                        videoOptions: r
                                    }
                                }
                            }
                        }, n.onCategorySelected = function(e) {
                            n.setState(function(t) {
                                return l.__assign({}, n.getEmptyState(), {
                                    term: t.term,
                                    currentCategory: e,
                                    isOpen: !0,
                                    isWaiting: !0
                                })
                            }, function() {
                                n.doSearch(n.state.term)
                            })
                        }, n.onChange = function(e) {
                            n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.props.latencyTracking.resetCustomEvents($.a.Search), "" === n.searchSessionID ? "" !== e && (n.searchSessionID = Y.a(), Object(ee.c)(n.searchSessionID, n.props.location.state)) : "" === e && (n.searchSessionID = "", Object(ee.f)(n.searchSessionID, n.state.queryID, n.state.term)), e ? (n.searchResultsFirstPage = n.props.latencyTracking.registerCustomEvent({
                                benchmark: Pe,
                                group: $.a.Search,
                                key: $.b.SearchResultsFirstPage,
                                label: $.c.FirstPageLoaded,
                                start: $.d.Registration
                            }), n.inputTimer = setTimeout(function() {
                                n.setState({
                                    topGameResults: null,
                                    topUserResults: null,
                                    topLiveResults: null,
                                    topVideoResults: null,
                                    isWaiting: !0,
                                    term: e
                                }, function() {
                                    n.state.videoOptions ? n.doVideosSearch(e, n.state.videoOptions) : n.doSearch(e)
                                })
                            }, Fe)) : n.setState(n.getEmptyState())
                        }, n.onHistoryChange = function() {
                            n.state.isOpen && n.setState({
                                isOpen: !1
                            })
                        }, n.onClickOut = function() {
                            n.state.isOpen && n.setState({
                                isOpen: !1
                            })
                        }, n.onFocus = function() {
                            n.state.term && !n.state.isOpen && n.setState({
                                isOpen: !0
                            }), Object(ee.d)(n.searchSessionID, n.props.location.state)
                        }, n.onKeyDown = function(e) {
                            if (n.state.term) {
                                var t = function() {
                                    e.preventDefault(), e.stopPropagation()
                                };
                                e.keyCode === K.a.Esc ? n.setState({
                                    isOpen: !1
                                }) : e.keyCode === K.a.Up ? (t(), n.focusNext(-1)) : e.keyCode === K.a.Down && (t(), n.focusNext(1))
                            }
                        }, n.onResultSelected = function() {
                            n.setState({
                                isOpen: !1
                            })
                        }, n.loadMore = function() {
                            return l.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, i, r, a = this;
                                return l.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (this.state.queryID || null === this.state.currentCategory || !0 === this.state.exhaustedHits || this.state.videoOptions) return [2];
                                            e = this.state.currentPage + 1, this.props.latencyTracking.resetCustomEvents($.a.Search), n = this.props.latencyTracking.registerCustomEvent({
                                                benchmark: Re,
                                                group: $.a.Search,
                                                key: $.b.SearchResultsLaterPage,
                                                label: $.c.LaterPageLoaded,
                                                start: $.d.Registration
                                            }), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(this.state.currentCategory, this.state.term, "", {
                                                page: e
                                            })];
                                        case 2:
                                            return t = o.sent(), [3, 4];
                                        case 3:
                                            return i = o.sent(), f.k.error(i, "Algolia page search failed"), this.setState(l.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                isOpen: !0
                                            })), [2];
                                        case 4:
                                            return t ? (r = Object(Z.b)({
                                                searchResults: t,
                                                append: e > 0,
                                                currentGameResults: this.state.currentGameResults,
                                                currentUserResults: this.state.currentUserResults,
                                                currentVideoResults: this.state.currentVideoResults,
                                                currentLiveResults: this.state.currentLiveResults
                                            }), this.setState(l.__assign({}, r, {
                                                isOpen: !0,
                                                isWaiting: !1,
                                                currentPage: e,
                                                exhaustedHits: r.exhaustedHits
                                            }), function() {
                                                a.props.latencyTracking.reportCustomEvent(n)
                                            }), [2]) : (this.setState(l.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                isOpen: !0
                                            })), [2])
                                    }
                                })
                            })
                        }, n.doVideosSearch = function(e, t) {
                            return l.__awaiter(n, void 0, void 0, function() {
                                var n, i, r, a = this;
                                return l.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            n = Y.a(), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), Object(ee.i)(this.searchSessionID, n, e, "videos"), [4, this.searchClient.queryVideos(e, n, t)];
                                        case 2:
                                            return i = o.sent(), Object(ee.e)(this.searchSessionID, n, e, !1, {
                                                vodResults: i.totalHits
                                            }), i.hits && this.setState({
                                                topGameResults: null,
                                                topUserResults: null,
                                                topLiveResults: null,
                                                topVideoResults: null,
                                                currentVideoResults: {
                                                    totalHits: i.totalHits,
                                                    results: i.hits.map(Z.a)
                                                },
                                                isWaiting: !1
                                            }, function() {
                                                a.searchResultsFirstPage && (a.props.latencyTracking.reportCustomEvent(a.searchResultsFirstPage), a.searchResultsFirstPage = null)
                                            }), [3, 4];
                                        case 3:
                                            return r = o.sent(), f.k.error(r, "Algolia video search failed"), this.setState({
                                                isErrored: !0,
                                                isWaiting: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.changeVideoOptions = function(e) {
                            n.setState({
                                videoOptions: e
                            }, function() {
                                n.doVideosSearch(n.state.term, e)
                            })
                        }, n.searchClient = new J.a({
                            appId: f.a.algoliaApplicationID,
                            apiKey: f.a.algoliaAPIKey,
                            apolloClient: f.p.apollo.client,
                            logger: f.k,
                            config: f.a,
                            stats: f.p.stats
                        }), n.state = n.getEmptyState(), n
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.history.listen(this.onHistoryChange)
                    }, t.prototype.componentDidUpdate = function() {
                        !this.state.focusSelectable || this.state.queryID || this.inputTimer || (this.focusNext(1), this.setState({
                            focusSelectable: !1
                        }))
                    }, t.prototype.render = function() {
                        return u.createElement(Ae, {
                            onChange: this.onChange,
                            onClickOut: this.onClickOut,
                            onFocus: this.onFocus,
                            onKeyDown: this.onKeyDown,
                            onResultSelected: this.onResultSelected,
                            gameResults: this.state.currentGameResults,
                            userResults: this.state.currentUserResults,
                            videoResults: this.state.currentVideoResults,
                            liveResults: this.state.currentLiveResults,
                            isOpen: this.state.isOpen,
                            isErrored: this.state.isErrored,
                            isWaiting: this.state.isWaiting,
                            onCategorySelected: this.onCategorySelected,
                            currentCategory: this.state.currentCategory,
                            onVideoOptionsChange: this.changeVideoOptions,
                            loadMore: this.loadMore,
                            truncated: this.props.truncated
                        })
                    }, t.prototype.focusNext = function(e) {
                        var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                            i = document.activeElement,
                            r = Array.prototype.indexOf.call(n, i);
                        if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                            var a = n.item(t);
                            a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: a
                            })
                        }
                    }, t.prototype.doSearch = function(e) {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var t, n, i, r, a, o, s = this;
                            return l.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        this.inputTimer = 0, t = -1, n = Y.a(), i = document.activeElement && "INPUT" === document.activeElement.tagName.toUpperCase(), this.setState({
                                            queryID: n,
                                            focusSelectable: !i && !!this.state.currentFocus
                                        }), Object(ee.i)(this.searchSessionID, n, e, this.state.currentCategory ? Object(ee.l)(this.state.currentCategory) : ""), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 6, , 7]), this.state.currentCategory && null !== this.state.currentCategory ? (t = 0, [4, this.searchClient.queryForType(this.state.currentCategory, e, n)]) : [3, 3];
                                    case 2:
                                        return r = c.sent(), [3, 5];
                                    case 3:
                                        return this.state.topGameResults && this.state.topUserResults && this.state.topLiveResults && this.state.topVideoResults ? (this.setState({
                                            currentGameResults: this.state.topGameResults,
                                            currentUserResults: this.state.topUserResults,
                                            currentLiveResults: this.state.topLiveResults,
                                            currentVideoResults: this.state.topVideoResults,
                                            term: e,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        }), [2]) : [4, this.searchClient.queryTopResults(e, n)];
                                    case 4:
                                        r = c.sent(), c.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return a = c.sent(), f.k.error(a, "Algolia top results search failed"), this.setState(l.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0,
                                            term: e
                                        })), [2];
                                    case 7:
                                        return r ? (Object(ee.e)(this.searchSessionID, this.state.queryID, e, !1, {
                                            liveResults: r.channels && r.channels.totalHits,
                                            channelResults: r.users && r.users.totalHits,
                                            vodResults: r.videos && r.videos.totalHits,
                                            gameResults: r.games && r.games.totalHits
                                        }), this.state.queryID !== r.id ? [2] : (o = Object(Z.b)({
                                            searchResults: r,
                                            append: !1,
                                            currentGameResults: this.state.currentGameResults,
                                            currentUserResults: this.state.currentUserResults,
                                            currentVideoResults: this.state.currentVideoResults,
                                            currentLiveResults: this.state.currentLiveResults
                                        }), this.setState(l.__assign({}, o, {
                                            term: e,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        }), function() {
                                            s.searchResultsFirstPage && (s.props.latencyTracking.reportCustomEvent(s.searchResultsFirstPage), s.searchResultsFirstPage = null)
                                        }), this.state.currentCategory && null === this.state.currentCategory && this.setState({
                                            topGameResults: o.currentGameResults,
                                            topUserResults: o.currentUserResults,
                                            topLiveResults: o.currentLiveResults,
                                            topVideoResults: o.currentVideoResults,
                                            exhaustedHits: o.exhaustedHits
                                        }), [2])) : (this.setState(l.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0,
                                            term: e
                                        })), Object(ee.e)(this.searchSessionID, this.state.queryID, e, !0), [2])
                                }
                            })
                        })
                    }, t.prototype.getEmptyState = function() {
                        return {
                            term: "",
                            currentGameResults: {
                                totalHits: 0,
                                results: []
                            },
                            currentUserResults: {
                                totalHits: 0,
                                results: []
                            },
                            currentLiveResults: {
                                totalHits: 0,
                                results: []
                            },
                            currentVideoResults: {
                                totalHits: 0,
                                results: []
                            },
                            isOpen: !1,
                            isErrored: !1,
                            queryID: "",
                            isWaiting: !1,
                            currentCategory: null,
                            currentPage: -1,
                            focusSelectable: !1,
                            exhaustedHits: !1,
                            videoOptions: void 0
                        }
                    }, t.childContextTypes = {
                        getSearchTrackingProps: H.func
                    }, t = l.__decorate([Object(I.b)("NavSearch")], t)
                }(u.Component),
                Ue = Object(Q.a)(Be),
                Le = n("RVih"),
                je = n("YSKX"),
                Xe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = !1;
                        if (this.props.data) {
                            if (this.props.data.loading || this.props.data.error) return null;
                            e = !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                        }
                        return !this.props.isLoggedIn || e ? u.createElement("a", {
                            href: L.a,
                            target: "_blank",
                            className: "top-nav__nav-link",
                            "data-a-target": "store-link"
                        }, Object(f.d)("Store", "TopNavStore")) : null
                    }, t = l.__decorate([Object(v.a)(je, {
                        skip: function(e) {
                            return !e.isLoggedIn
                        }
                    }), Object(I.b)("TopNavStoreComponent", {
                        autoReportInteractive: !0
                    })], t)
                }(u.Component);
            var We, Me = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(c.f)(e)
                    }
                })(Xe),
                qe = n("ht6z"),
                Ge = n("j3KY"),
                ze = n("myUo"),
                Ve = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || this.props.data.error) return null;
                        var e = this.props.data.requestInfo && !Object(qe.a)(this.props.data.requestInfo.countryCode),
                            t = !this.props.data.currentUser || !this.props.data.currentUser.hasTurbo;
                        if (e && t) return u.createElement(w.U, {
                            to: "/products/turbo?ref=top_nav",
                            targetBlank: !0,
                            className: "top-nav__nav-link",
                            "data-a-target": "try-prime-link"
                        }, Object(f.d)("Go Turbo", "TopNavUpsell"));
                        if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                            var n = Object(Ge.e)(Ge.c, window.location.pathname.substring(1));
                            return u.createElement("a", {
                                href: n,
                                target: "_blank",
                                className: "top-nav__nav-link",
                                "data-a-target": "try-prime-link"
                            }, Object(f.d)("Try Prime", "TopNavUpsell"))
                        }
                        return null
                    }, t = l.__decorate([Object(v.a)(ze), Object(I.b)("TopNavUpsellComponent")], t)
                }(u.Component),
                He = n("x7UT"),
                Qe = n("eDVu"),
                Ke = n("NSwr"),
                Ye = n("0Log"),
                $e = n("/0dD"),
                Je = n("/aPz"),
                Ze = n("daa2"),
                et = n("76Lv"),
                tt = n("JOxF"),
                nt = n("jZLd"),
                it = n("XDQu"),
                rt = n("geRD");
            ! function(e) {
                e.Disable = "disable", e.Enable = "enable"
            }(We || (We = {}));
            var at, ot, st = n("dUi4"),
                ct = (n("zhJx"), {
                    x: 2,
                    y: .5
                }),
                lt = {
                    height: 20,
                    width: 20
                },
                ut = {
                    right: 1
                };
            ! function(e) {
                e.ChannelLink = "user-menu__channel-link", e.DarkModeToggle = "user-menu__dark-mode-toggle", e.DashboardLink = "user-menu__dashboard-link", e.DropdownDown = "user-menu__dropdown-down", e.DropdownUp = "user-menu__dropdown-up", e.FriendsLink = "user-menu__friends-link", e.InboxLink = "user-menu__inbox-link", e.InventoryLink = "user-menu__inventory-link", e.InvisibleAvailability = "user-menu__invisible-availability", e.LogoutButton = "user-menu__logout-button", e.OnlineAvailability = "user-menu__online-availability", e.PaymentsLink = "user-menu__payments-link", e.SettingsLink = "user-menu__settings-link", e.ShareActivityToggle = "user-menu__share-activity-toggle", e.SubscriptionsLink = "user-menu__subscriptions-link", e.VideoManagerLink = "user-menu__video-manager-link"
            }(at || (at = {})),
            function(e) {
                e.DropdownDown = "dropdown-down", e.DropdownUp = "dropdown-up"
            }(ot || (ot = {}));
            var dt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderAppExit = function() {
                            return f.p.integrations.process && f.p.integrations.process.quit ? u.createElement(w.Ua, {
                                "data-a-target": "dropdown-exit",
                                onClick: t.onAppExitClick
                            }, u.createElement(w.zb, {
                                color: w.O.Alt,
                                display: w.X.Flex,
                                alignItems: w.f.Center,
                                padding: ct
                            }, u.createElement(w.Xa, {
                                display: w.X.Flex,
                                alignItems: w.f.Center,
                                margin: ut
                            }, u.createElement(w.ob, {
                                asset: w.pb.Close,
                                height: lt.height,
                                width: lt.width
                            })), u.createElement(w.W, null, Object(f.d)("Exit", "UserMenuDropdown")))) : null
                        }, t.onLogoutClick = function(e) {
                            e.preventDefault(), t.props.logout()
                        }, t.onAppExitClick = function(e) {
                            f.p.integrations.process && f.p.integrations.process.quit && (e.preventDefault(), f.p.integrations.process.quit())
                        }, t.onShareCheckboxClick = function() {
                            t.props.data && !t.props.data.error && t.props.data.currentUser && t.props.toggleShareActivity()
                        }, t.onDarkModeCheckboxClick = function() {
                            var e = t.props.theme === $e.a.Dark ? $e.a.Light : $e.a.Dark;
                            t.props.changeTheme(e, nt.a.UserMenu)
                        }, t.onOnlineClick = function(e) {
                            t.props.data && !t.props.data.error && t.props.data.currentUser && (e && e.stopPropagation(), t.props.toggleVisibility(Ke.a.Online))
                        }, t.onInvisibleClick = function(e) {
                            t.props.data && !t.props.data.error && t.props.data.currentUser && (e && e.stopPropagation(), t.props.toggleVisibility(Ke.a.Offline))
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = ne("top-nav-user-menu-dropdown", {
                                "top-nav-user-menu-dropdown--toggled": this.props.dropdownOpen
                            }),
                            t = this.props.dropdownOpen ? ot.DropdownDown : ot.DropdownUp,
                            n = this.props.dropdownOpen ? at.DropdownDown : at.DropdownUp,
                            i = !1,
                            r = w.O.Alt2,
                            a = w.O.Alt2,
                            o = !1,
                            s = !0,
                            c = !1,
                            l = !1,
                            d = void 0,
                            p = void 0,
                            m = void 0;
                        this.props.data && !this.props.data.error && this.props.data.currentUser && (i = !0, r = this.props.data.currentUser.availability === Ke.a.Offline ? w.O.Base : w.O.Alt2, a = this.props.data.currentUser.availability === Ke.a.Online ? w.O.Base : w.O.Alt2, o = !!this.props.data.currentUser.settings && this.props.data.currentUser.settings.isSharingActivity, s = this.props.data.currentUser.availability === Ke.a.Offline, c = this.props.data.currentUser.availability === Ke.a.Online, l = this.props.data.currentUser.availability === Ke.a.Offline, d = {
                            pathname: "/" + this.props.data.currentUser.login,
                            state: {
                                content: b.PageviewContent.SelfChannel,
                                medium: b.PageviewMedium.TopNav
                            }
                        }, p = "/" + this.props.data.currentUser.login + "/manager", m = "/" + this.props.data.currentUser.login + "/dashboard/live");
                        var h = !i || this.props.visibilityWorking;
                        return u.createElement(w.zb, {
                            overflow: w.ab.Hidden,
                            position: w.fb.Absolute,
                            className: e,
                            background: w.r.Base,
                            color: w.O.Base,
                            "data-a-target": t,
                            "data-test-selector": n,
                            attachRight: !0,
                            zIndex: w.cc.Below
                        }, u.createElement(ie.b, {
                            className: "top-nav-user-menu-dropdown__scrollable",
                            suppressScrollX: !0
                        }, u.createElement(w.Xa, null, u.createElement(w.zb, {
                            padding: {
                                y: 1
                            },
                            background: w.r.Alt
                        }, u.createElement(w.Ua, {
                            disabled: h,
                            onClick: this.onOnlineClick,
                            "data-a-target": "online-dropdown-button",
                            "data-test-selector": at.OnlineAvailability
                        }, u.createElement(w.zb, {
                            color: w.O.Alt2,
                            display: w.X.Flex,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            alignItems: w.f.Center,
                            display: w.X.InlineFlex,
                            margin: ut
                        }, u.createElement(w.gb, {
                            status: w.hb.Online
                        })), u.createElement(w.W, {
                            bold: c,
                            color: a
                        }, Object(f.d)("Online", "UserMenuDropdown")))), u.createElement(w.Ua, {
                            disabled: h,
                            onClick: this.onInvisibleClick,
                            "data-a-target": "invisible-dropdown-button",
                            "data-test-selector": at.InvisibleAvailability
                        }, u.createElement(w.zb, {
                            color: w.O.Base,
                            display: w.X.Flex,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            alignItems: w.f.Center,
                            display: w.X.InlineFlex,
                            margin: ut
                        }, u.createElement(w.gb, {
                            status: w.hb.Invisible
                        })), u.createElement(w.W, {
                            bold: l,
                            color: r
                        }, Object(f.d)("Invisible", "UserMenuDropdown")))), u.createElement(w.Xa, {
                            margin: {
                                x: 2,
                                bottom: 1,
                                top: .5
                            },
                            "data-test-selector": at.ShareActivityToggle
                        }, u.createElement(w.N, {
                            id: "share-activity-toggle",
                            label: Object(f.d)("Share my activity", "UserMenuDropdown"),
                            "data-a-target": "share-activity-toggle",
                            "data-a-value": o,
                            checked: o,
                            onChange: this.onShareCheckboxClick,
                            disabled: s
                        }), u.createElement(w.W, {
                            type: w.Pb.Span,
                            color: w.O.Alt
                        }, Object(f.d)("Share what you're watching, playing, or streaming with your friends.", "UserMenuDropdown"))), u.createElement(w.zb, {
                            borderBottom: !0,
                            margin: {
                                x: 2,
                                y: 1
                            }
                        }), u.createElement(w.Xa, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, u.createElement(w.N, {
                            id: "dark-mode-toggle",
                            label: Object(f.d)("Dark Mode", "UserMenuDropdown"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": at.DarkModeToggle,
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === $e.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        })), u.createElement(st.a, null)), u.createElement(w.Xa, {
                            margin: {
                                y: 1
                            }
                        }, u.createElement(w.Ua, {
                            disabled: !i,
                            linkTo: d,
                            "data-a-target": "channel-dropdown-link",
                            "data-test-selector": at.ChannelLink
                        }, u.createElement(w.zb, {
                            color: w.O.Alt,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: ut
                        }, u.createElement(w.ob, {
                            asset: w.pb.NavMyChannel,
                            height: lt.height,
                            width: lt.width
                        })), u.createElement(w.W, null, Object(f.d)("Channel", "UserMenuDropdown")))), u.createElement(w.Ua, {
                            disabled: !i,
                            linkTo: p,
                            "data-a-target": "video-manager-dropdown-link",
                            "data-test-selector": at.VideoManagerLink
                        }, u.createElement(w.zb, {
                            color: w.O.Alt,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: ut
                        }, u.createElement(w.ob, {
                            asset: w.pb.NavManager,
                            height: lt.height,
                            width: lt.width
                        })), u.createElement(w.W, null, Object(f.d)("Video Producer", "UserMenuDropdown")))), u.createElement(w.Ua, {
                            disabled: !i,
                            linkTo: m,
                            "data-a-target": "dashboard-dropdown-link",
                            "data-test-selector": at.DashboardLink
                        }, u.createElement(w.zb, {
                            color: w.O.Alt,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: ut
                        }, u.createElement(w.ob, {
                            asset: w.pb.NavDashboard,
                            height: lt.height,
                            width: lt.width
                        })), u.createElement(w.W, null, Object(f.d)("Dashboard", "UserMenuDropdown")))), u.createElement(w.zb, {
                            borderBottom: !0,
                            margin: {
                                x: 2,
                                y: 1
                            }
                        }), u.createElement(w.Ua, {
                            linkTo: "/friends",
                            "data-a-target": "friends-dropdown-link",
                            "data-test-selector": at.FriendsLink
                        }, u.createElement(w.zb, {
                            color: w.O.Alt,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: ut
                        }, u.createElement(w.ob, {
                            asset: w.pb.Friends,
                            height: lt.height,
                            width: lt.width
                        })), u.createElement(w.W, null, Object(f.d)("Friends", "UserMenuDropdown")))), u.createElement(w.Ua, {
                            linkTo: "/messages/inbox",
                            "data-a-target": "inbox-dropdown-link",
                            "data-test-selector": at.InboxLink
                        }, u.createElement(w.zb, {
                            color: w.O.Alt,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: ut
                        }, u.createElement(w.ob, {
                            asset: w.pb.NavMessages,
                            height: lt.height,
                            width: lt.width
                        })), u.createElement(w.W, null, Object(f.d)("Messages", "UserMenuDropdown")))), u.createElement(w.Ua, {
                            linkTo: "/subscriptions",
                            "data-a-target": "subscriptions-dropdown-link",
                            "data-test-selector": at.SubscriptionsLink
                        }, u.createElement(w.zb, {
                            color: w.O.Alt,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: ut
                        }, u.createElement(w.ob, {
                            asset: w.pb.Star,
                            height: lt.height,
                            width: lt.width
                        })), u.createElement(w.W, null, Object(f.d)("Subscriptions", "UserMenuDropdown")))), u.createElement(w.Ua, {
                            linkTo: "/inventory",
                            "data-a-target": "inventory-dropdown-link",
                            "data-test-selector": at.InventoryLink
                        }, u.createElement(w.zb, {
                            color: w.O.Alt,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: ut
                        }, u.createElement(w.ob, {
                            asset: w.pb.Crate,
                            height: lt.height,
                            width: lt.width
                        })), u.createElement(w.W, null, Object(f.d)("Inventory", "UserMenuDropdown")))), u.createElement(w.Ua, {
                            linkTo: "/payments",
                            "data-a-target": "payments-dropdown-link",
                            "data-test-selector": at.PaymentsLink
                        }, u.createElement(w.zb, {
                            color: w.O.Alt,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: ut
                        }, u.createElement(w.ob, {
                            asset: w.pb.NavBackpack,
                            height: lt.height,
                            width: lt.width
                        })), u.createElement(w.W, null, Object(f.d)("Payments", "UserMenuDropdown")))), u.createElement(w.zb, {
                            borderBottom: !0,
                            margin: {
                                x: 2,
                                y: 1
                            }
                        }), u.createElement(w.Ua, {
                            linkTo: "/settings",
                            "data-a-target": "settings-dropdown-link",
                            "data-test-selector": at.SettingsLink
                        }, u.createElement(w.zb, {
                            color: w.O.Alt,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: ut
                        }, u.createElement(w.ob, {
                            asset: w.pb.NavSettings,
                            height: lt.height,
                            width: lt.width
                        })), u.createElement(w.W, null, Object(f.d)("Settings", "UserMenuDropdown")))), u.createElement(w.Ua, {
                            onClick: this.onLogoutClick,
                            "data-a-target": "dropdown-logout",
                            "data-test-selector": at.LogoutButton
                        }, u.createElement(w.zb, {
                            color: w.O.Alt,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: ct
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: ut
                        }, u.createElement(w.ob, {
                            asset: w.pb.NavLogout,
                            height: lt.height,
                            width: lt.width
                        })), u.createElement(w.W, null, Object(f.d)("Log Out", "UserMenuDropdown")))), f.p.integrations.process && this.renderAppExit()))))
                    }, t
                }(u.Component),
                pt = Object(I.b)("UserMenuDropdown")(dt),
                mt = n("6qmu"),
                ft = n("3KNA"),
                ht = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            shareActivityWorking: !1,
                            visibilityWorking: !1
                        }, t.logger = f.p.logger.withCategory("user-menu-dropdown"), t.toggleShareActivity = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return l.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (this.state.shareActivityWorking || !this.props.data || this.props.data.error || !this.props.data.currentUser) return [2];
                                            this.setState({
                                                shareActivityWorking: !0
                                            }), e = !!this.props.data.currentUser.settings && !this.props.data.currentUser.settings.isSharingActivity, t = l.__assign({}, Object(rt.a)({
                                                isSharingActivity: e
                                            }), {
                                                optimisticResponse: {
                                                    updateIsSharingActivity: {
                                                        __typename: "UpdateIsSharingActivityPayload",
                                                        user: {
                                                            __typename: "User",
                                                            id: this.props.data.currentUser.id,
                                                            settings: {
                                                                isSharingActivity: e,
                                                                __typename: "UserSettings"
                                                            }
                                                        }
                                                    }
                                                }
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, 4, 5]), [4, this.props.updateIsSharingActivity(t)];
                                        case 2:
                                            return i.sent(), [3, 5];
                                        case 3:
                                            return n = i.sent(), this.logger.warn("Failed to update isSharingActivity", {
                                                err: n
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                shareActivityWorking: !1
                                            }), [7];
                                        case 5:
                                            return function(e) {
                                                var t = {
                                                    login: e.login,
                                                    action: e.isSharingEnabled ? We.Enable : We.Disable
                                                };
                                                f.o.track(b.SpadeEventType.PresenceToggle, t)
                                            }({
                                                login: this.props.data.currentUser.login,
                                                isSharingEnabled: e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.toggleVisibility = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.data || this.props.data.error || !this.props.data.currentUser || this.props.data.currentUser.availability === e || this.state.visibilityWorking) return [2];
                                            this.setState({
                                                visibilityWorking: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, 4, 5]), [4, Object(Ze.e)(e)];
                                        case 2:
                                            return n.sent(), [3, 5];
                                        case 3:
                                            return t = n.sent(), this.logger.warn("Failed to update visibility", {
                                                err: t
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                visibilityWorking: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(pt, {
                            data: this.props.data,
                            dropdownOpen: this.props.dropdownOpen,
                            toggleShareActivity: this.toggleShareActivity,
                            toggleVisibility: this.toggleVisibility,
                            visibilityWorking: this.state.visibilityWorking,
                            changeTheme: this.props.changeTheme,
                            logout: this.props.logout,
                            theme: this.props.theme
                        })
                    }, t = l.__decorate([Object(v.a)(mt, {
                        skip: function(e) {
                            return !e.firstPageLoaded
                        }
                    }), Object(v.a)(ft, {
                        name: "updateIsSharingActivity"
                    }), Object(Qe.a)(function(e) {
                        return {
                            query: mt,
                            topic: e.data && e.data.currentUser ? Object(Je.s)(e.data.currentUser.id) : "",
                            skip: !(e.data && !e.data.loading && !e.data.error && e.data.currentUser),
                            type: Ye.PubsubMessageType.PresenceSettings,
                            mutator: function(e, t) {
                                return t.currentUser && t.currentUser.settings && (t.currentUser.settings.visibility = e.data.availability_override.toUpperCase(), t.currentUser.settings.isSharingActivity = e.data.share_activity), t
                            }
                        }
                    })], t)
                }(u.Component);
            var gt, vt = Object(i.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    theme: Object(it.a)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    changeTheme: nt.b,
                    logout: s.f
                }, e)
            })(ht);
            n("wG9U");
            (gt || (gt = {})).Toggle = "user-menu-placeholder__toggle";
            var bt, yt = function(e) {
                    return u.createElement(w.Xa, {
                        position: w.fb.Relative,
                        display: w.X.Flex,
                        flexGrow: 1,
                        alignItems: w.f.Stretch,
                        fullHeight: !0,
                        className: Object(et.b)($e.a.Dark)
                    }, u.createElement(w.Xa, {
                        display: w.X.Flex,
                        flexGrow: 1,
                        alignItems: w.f.Stretch,
                        fullHeight: !0
                    }, u.createElement(w.Ua, {
                        onClick: e.onMenuCardClick,
                        "data-a-target": "user-menu-toggle",
                        "data-test-selector": gt.Toggle
                    }, u.createElement(w.Xa, {
                        display: w.X.Flex,
                        flexGrow: 1,
                        alignItems: w.f.Center,
                        fullHeight: !0,
                        className: "top-nav-user-menu-placeholder",
                        "data-a-target": "user-card"
                    }, u.createElement(w.Xa, {
                        display: w.X.Flex,
                        flexWrap: w.Ba.NoWrap,
                        alignItems: w.f.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0
                    }, u.createElement(w.Xa, {
                        margin: {
                            x: 1
                        }
                    }, u.createElement(w.eb, {
                        width: 30,
                        height: 30,
                        overlay: !0
                    })), u.createElement(w.Xa, {
                        flexGrow: 1,
                        display: w.X.Hide,
                        flexDirection: w.Aa.Column,
                        justifyContent: w.Wa.Center,
                        breakpointSmall: {
                            display: w.X.Flex
                        }
                    }, u.createElement(w.zb, {
                        margin: {
                            y: .5
                        }
                    }, u.createElement(w.eb, {
                        width: 80,
                        height: 4,
                        overlay: !0
                    })), u.createElement(w.Xa, null, u.createElement(w.Xa, {
                        ellipsis: !0,
                        display: w.X.Flex,
                        alignItems: w.f.Center
                    }, u.createElement(w.zb, {
                        display: w.X.InlineFlex,
                        margin: {
                            y: .5
                        }
                    }, u.createElement(w.eb, {
                        width: 40,
                        height: 4,
                        overlay: !0
                    }))))), u.createElement(w.zb, {
                        display: w.X.Flex,
                        flexShrink: 0,
                        color: w.O.Base,
                        className: "top-nav-user-menu__dropdown-arrow",
                        "data-a-target": "top-nav-dropdown-arrow"
                    }, u.createElement(w.ob, {
                        asset: w.pb.GlyphArrDown
                    })))))))
                },
                kt = n("m98o");
            n("oOol");
            ! function(e) {
                e.Toggle = "user-menu__toggle", e.DisplayName = "user-menu__display-name"
            }(bt || (bt = {}));
            var St, _t = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onCardClick = function() {
                            t.props.onMenuCardClick()
                        }, t.getUserStatus = function(e) {
                            var t = w.hb.Online;
                            switch (e) {
                                case Ke.a.Idle:
                                case Ke.a.Away:
                                    t = w.hb.Away;
                                    break;
                                case Ke.a.Busy:
                                    t = w.hb.Busy;
                                    break;
                                case Ke.a.Invisible:
                                    t = w.hb.Invisible;
                                    break;
                                case Ke.a.Offline:
                                    t = w.hb.Offline;
                                    break;
                                case Ke.a.Online:
                                    t = w.hb.Online;
                                    break;
                                default:
                                    t = w.hb.Online
                            }
                            return t
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data.currentUser,
                            t = e && e.profileImageURL || f.a.defaultAvatarURL,
                            n = e && e.displayName || "",
                            i = Ke.a.Offline;
                        return e && (e.availability ? i = e.availability : e.settings && e.settings.visibility && (i = e.settings.visibility)), u.createElement(w.Xa, {
                            position: w.fb.Relative,
                            display: w.X.Flex,
                            flexGrow: 1,
                            alignItems: w.f.Stretch,
                            fullHeight: !0
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            flexGrow: 1,
                            alignItems: w.f.Stretch,
                            fullHeight: !0
                        }, u.createElement(w.Ua, {
                            onClick: this.onCardClick,
                            "data-a-target": "user-menu-toggle",
                            "data-test-selector": bt.Toggle
                        }, u.createElement(w.Xa, {
                            display: w.X.Flex,
                            flexWrap: w.Ba.NoWrap,
                            alignItems: w.f.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0,
                            className: "top-nav-user-menu"
                        }, u.createElement(w.Xa, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, u.createElement(w.Xa, {
                            className: "top-nav-user-menu__avatar-container"
                        }, u.createElement(w.q, {
                            size: 30,
                            src: t,
                            alt: Object(f.d)("User avatar", "UserMenuToggle"),
                            "data-a-target": "top-nav-avatar",
                            presenceIndicator: !0,
                            presenceStatus: this.getUserStatus(i)
                        }))), u.createElement(w.Xa, {
                            className: "top-nav-user-menu__info",
                            overflow: w.ab.Hidden,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: w.Aa.Column,
                            display: w.X.Hide,
                            breakpointSmall: {
                                display: w.X.Block
                            }
                        }, u.createElement(w.zb, {
                            color: w.O.Base,
                            fontSize: w.Ca.Size5,
                            className: "top-nav-user-menu__username",
                            "data-a-target": "user-display-name",
                            "data-test-selector": bt.DisplayName
                        }, u.createElement(w.W, {
                            lineHeight: w.Ya.Heading
                        }, n)), u.createElement(w.zb, {
                            className: "top-nav-user-menu__status-wrapper",
                            ellipsis: !0,
                            fullWidth: !0,
                            alignItems: w.f.Center,
                            display: w.X.Flex,
                            flexWrap: w.Ba.NoWrap
                        }, u.createElement(w.zb, {
                            ellipsis: !0,
                            color: w.O.Alt,
                            fontSize: w.Ca.Size7
                        }, u.createElement(w.W, {
                            type: w.Pb.Span,
                            noWrap: !0,
                            "data-a-target": "online-status",
                            lineHeight: w.Ya.Heading
                        }, this.props.data.currentUser && u.createElement(kt.a, {
                            activity: this.props.data.currentUser.activity,
                            availability: i === Ke.a.Offline ? Ke.a.Invisible : i
                        }))))), u.createElement(w.zb, {
                            display: w.X.Flex,
                            flexShrink: 0,
                            color: w.O.Base,
                            className: "top-nav-user-menu__dropdown-arrow",
                            "data-a-target": "top-nav-dropdown-arrow"
                        }, u.createElement(w.ob, {
                            asset: w.pb.GlyphArrDown
                        }))))))
                    }, t
                }(u.Component),
                Ct = n("jeWT"),
                Et = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.isSettingNewSession = !1, n.onMenuCardClick = function() {
                            n.props.data.loading && !n.props.data.currentUser || n.setState({
                                dropdownOpen: !n.state.dropdownOpen
                            })
                        }, n.onClickOut = function() {
                            n.setState({
                                dropdownOpen: !1
                            })
                        }, n.dataIsReady = function(e) {
                            return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                        }, n.setUserToOffline = function() {
                            Object(Ze.c)(Ke.a.Offline), Object(Ze.a)()
                        }, n.setNewSession = function() {
                            return l.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (this.isSettingNewSession) return [2];
                                            this.isSettingNewSession = !0, t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, 4, 5]), [4, Object(Ze.g)()];
                                        case 2:
                                            return t.sent(), this.props.initialUserAvailabilitySet(), [3, 5];
                                        case 3:
                                            return e = t.sent(), f.k.warn("Failed to set new user availability session.", e), [3, 5];
                                        case 4:
                                            return this.isSettingNewSession = !1, [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, n.maybeRefetchData = function(e) {
                            var t = e.pubsub.messages.presence;
                            t && e.data.currentUser && e.data.currentUser.id && t.data.user_id === +e.data.currentUser.id && n.props.pubsub.messages.presence !== t && e.data.refetch()
                        }, n.unsubscribeFromHistory = n.props.history.listen(function() {
                            n.setState({
                                dropdownOpen: !1
                            })
                        }), n.state = {
                            dropdownOpen: !1
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.maybeRefetchData(this.props), this.props.firstPageLoaded && this.dataIsReady(this.props) && !this.props.initialUserAvailabilityIsSet && this.setNewSession(), this.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.maybeRefetchData(e), e.firstPageLoaded && this.dataIsReady(e) && !e.initialUserAvailabilityIsSet && this.setNewSession()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        this.unsubscribeFromHistory(), this.setUserToOffline()
                    }, t.prototype.render = function() {
                        var e = ne(Object(et.b)($e.a.Dark), {
                                "top-nav-user-menu--dropdown-open": this.state.dropdownOpen
                            }),
                            t = null;
                        return t = this.props.data.loading && !this.props.data.currentUser || this.props.data.error ? u.createElement(yt, {
                            onMenuCardClick: this.onMenuCardClick
                        }) : u.createElement(_t, {
                            data: this.props.data,
                            onMenuCardClick: this.onMenuCardClick,
                            theme: this.props.theme
                        }), u.createElement(w.Xa, {
                            position: w.fb.Relative,
                            display: w.X.Flex,
                            flexGrow: 1,
                            alignItems: w.f.Stretch,
                            fullHeight: !0
                        }, u.createElement(te.a, {
                            onClickOut: this.onClickOut,
                            className: e
                        }, t, u.createElement(vt, {
                            dropdownOpen: this.state.dropdownOpen
                        })))
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t = l.__decorate([Object(v.a)(Ct), Object(Qe.a)(function(e) {
                        return {
                            query: Ct,
                            topic: e.data.currentUser ? Object(Je.s)(e.data.currentUser.id) : "",
                            skip: !(e.data && !e.data.loading && !e.data.error && e.data.currentUser),
                            type: Ye.PubsubMessageType.PresenceSettings,
                            mutator: function(e, t) {
                                return t.currentUser && t.currentUser.settings && (t.currentUser.settings.visibility = e.data.availability_override.toUpperCase(), t.currentUser.settings.isSharingActivity = e.data.share_activity), t
                            }
                        }
                    }), Object(He.a)([{
                        topic: function(e) {
                            return e.data.currentUser ? Object(Je.s)(e.data.currentUser.id) : ""
                        },
                        mapMessageTypesToProps: (St = {}, St[Ye.PubsubMessageType.Presence] = "presence", St),
                        skip: function(e) {
                            return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                        }
                    }]), Object(I.b)("User")], t)
                }(u.Component);
            var Nt, Ot = Object(i.connect)(function(e) {
                    return {
                        theme: Object(it.a)(e),
                        firstPageLoaded: e.session.firstPageLoaded,
                        initialUserAvailabilityIsSet: e.session.initialUserAvailabilityIsSet
                    }
                }, function(e) {
                    return Object(a.bindActionCreators)({
                        changeTheme: nt.b,
                        initialUserAvailabilitySet: tt.g
                    }, e)
                })(Object(r.a)(Et)),
                wt = n("9pSj"),
                xt = n("DS6v");
            n("tUtL");
            ! function(e) {
                e.BrowseLink = "top-nav__browse-link", e.DropdownStoreLink = "top-nav__dropdown-store-link", e.FollowingLink = "top-nav__following-link", e.LanguageBalloonWrapper = "top-nav__language-balloon-Wrapper", e.LanguageMenuItem = "top-nav__language-menu-item"
            }(Nt || (Nt = {}));
            var Tt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = f.p.logger.withCategory("top-nav"), n.renderBitsButton = function() {
                            return u.createElement(w.Xa, {
                                flexGrow: 0,
                                alignSelf: w.g.Center,
                                flexWrap: w.Ba.NoWrap,
                                flexShrink: 0,
                                margin: {
                                    x: 1
                                }
                            }, u.createElement(U, {
                                channelLogin: null
                            }))
                        }, n.renderOnsiteNotifications = function() {
                            return n.props.isLoggedIn ? u.createElement(w.Xa, {
                                flexGrow: 0,
                                alignSelf: w.g.Center,
                                flexWrap: w.Ba.NoWrap,
                                padding: {
                                    left: .5,
                                    right: 1
                                },
                                flexShrink: 0
                            }, u.createElement(V, null)) : null
                        }, n.renderTwitchPrimeCrown = function(e) {
                            return u.createElement(w.Xa, {
                                className: "top-nav__prime",
                                flexGrow: 0,
                                flexShrink: 0,
                                padding: {
                                    x: .5
                                },
                                alignSelf: w.g.Center,
                                flexWrap: w.Ba.NoWrap
                            }, !e && u.createElement(wt.d, null))
                        }, n.renderStoreLink = function() {
                            var e = !1;
                            if (n.props.data) {
                                if (n.props.data.loading || n.props.data.error) return null;
                                e = !!n.props.data.currentUser && n.props.data.currentUser.hasPrime
                            }
                            return n.props.isLoggedIn && !e || f.p.integrations.app ? u.createElement(M, {
                                targetBlank: !0,
                                linkTo: L.a,
                                "data-a-target": "store-link-dropdown",
                                "data-test-selector": Nt.DropdownStoreLink,
                                title: Object(f.d)("Store", "TopNav")
                            }) : null
                        }, n.saveEllipsisRef = function(e) {
                            return n.ellipsisMenu = e
                        }, n.onNavigationClicked = function() {
                            n.ellipsisMenu.toggleBalloon(!1)
                        }, n.renderBrowseLink = function(e) {
                            var t = e.match,
                                n = t && "following" !== t.params.subpage,
                                i = Object(f.d)("Browse", "TopNav");
                            return u.createElement(p.a, {
                                className: "top-nav__nav-link" + (n ? " active" : ""),
                                "data-a-target": "browse-link",
                                "data-test-selector": Nt.BrowseLink,
                                title: i,
                                to: {
                                    pathname: "/directory",
                                    state: {
                                        medium: b.PageviewMedium.TopNav,
                                        content: b.PageviewContent.Games
                                    }
                                }
                            }, i)
                        }, n.renderModsLink = function() {
                            var e = Object(f.d)("Mods", "TopNav");
                            return u.createElement(d.a, {
                                activeClassName: "active",
                                to: {
                                    pathname: "/mods",
                                    state: {
                                        medium: b.PageviewMedium.TopNav
                                    }
                                },
                                className: "top-nav__nav-link",
                                "data-a-target": "mods-link",
                                title: e
                            }, e)
                        }, n.state = {
                            isError: !1
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                        var n = this;
                        this.setState({
                            isError: !0
                        }, function() {
                            f.p.stats.recordComponentError("TopNav"), n.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                                info: t
                            })
                        })
                    }, t.prototype.render = function() {
                        var e = null;
                        if (this.props.isLoggedIn) {
                            var t = Object(f.d)("Following", "TopNav");
                            e = u.createElement(d.a, {
                                activeClassName: "active",
                                to: {
                                    pathname: "/directory/following",
                                    state: {
                                        medium: b.PageviewMedium.TopNav,
                                        content: b.PageviewContent.Following
                                    }
                                },
                                className: "top-nav__nav-link",
                                "data-a-target": "following-link",
                                "data-test-selector": Nt.FollowingLink,
                                title: t
                            }, t)
                        }
                        return u.createElement(w.Pa, {
                            position: w.fb.Relative,
                            flexShrink: 0
                        }, u.createElement("nav", {
                            className: "top-nav",
                            "data-a-target": "top-nav-container",
                            style: {
                                height: "5rem"
                            }
                        }, u.createElement(w.Xa, {
                            className: "top-nav__menu",
                            display: w.X.Flex,
                            alignItems: w.f.Stretch,
                            flexWrap: w.Ba.NoWrap,
                            fullHeight: !0
                        }, u.createElement(w.Pa, {
                            display: w.X.InlineFlex,
                            alignItems: w.f.Center,
                            flexShrink: 0
                        }, u.createElement(w.U, {
                            to: {
                                pathname: "/",
                                state: {
                                    medium: b.PageviewMedium.TopNav,
                                    content: b.PageviewContent.Logo
                                }
                            },
                            "data-a-target": "home-link"
                        }, u.createElement("div", {
                            className: "top-nav__home-link-logo"
                        }, u.createElement(w.h, {
                            width: 30,
                            height: 30,
                            padding: 1
                        })))), u.createElement(w.Xa, {
                            className: "top-nav__nav-items-container",
                            display: w.X.Flex,
                            alignItems: w.f.Stretch,
                            flexGrow: 1,
                            flexWrap: w.Ba.NoWrap,
                            flexShrink: 0
                        }, u.createElement(w.Xa, {
                            alignItems: w.f.Stretch,
                            flexWrap: w.Ba.NoWrap,
                            flexShrink: 0,
                            display: w.X.Flex
                        }, e, u.createElement(m.a, {
                            path: "/directory/:subpage?",
                            children: this.renderBrowseLink
                        }), !f.p.integrations.app && u.createElement(w.Pa, {
                            display: w.X.Hide,
                            breakpointMedium: {
                                display: w.X.Flex
                            }
                        }, u.createElement("a", {
                            href: "https://app.twitch.tv/download",
                            "data-a-target": "get-desktop-link",
                            className: "top-nav__nav-link"
                        }, Object(f.d)("Get Desktop", "TopNav"))), f.p.integrations.mods && this.renderModsLink(), u.createElement(w.Xa, {
                            display: w.X.Hide,
                            breakpointSmall: {
                                display: w.X.Flex
                            }
                        }, u.createElement(Ve, null), !f.p.integrations.app && u.createElement(Me, null))), u.createElement(w.Xa, {
                            className: "top-nav__ellipsis-button",
                            display: w.X.Flex,
                            alignItems: w.f.Center
                        }, u.createElement(g.a, {
                            ref: this.saveEllipsisRef
                        }, u.createElement(w.A, {
                            icon: w.pb.NavMore,
                            overlay: !0,
                            ariaLabel: Object(f.d)("More nav items", "TopNav"),
                            "data-a-target": "ellipsis-button"
                        }), u.createElement(w.u, {
                            direction: w.v.Bottom,
                            tailOffset: 7,
                            size: w.w.Small,
                            "data-a-target": "overflow-menu"
                        }, u.createElement(w.Xa, {
                            padding: 1
                        }, u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://www.twitch.tv/p/about",
                            "data-a-target": "about-link",
                            title: Object(f.d)("About", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://www.twitch.tv/p/legal/ad-choices",
                            "data-a-target": "ad-choices-link",
                            title: Object(f.d)("Ad Choices", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "http://twitchadvertising.tv/",
                            "data-a-target": "advertisers-link",
                            title: Object(f.d)("Advertisers", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://blog.twitch.tv/",
                            "data-a-target": "blog-link",
                            title: Object(f.d)("Blog", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://www.twitch.tv/p/legal/community-guidelines",
                            "data-a-target": "community-guidelines-link",
                            title: Object(f.d)("Community Guidelines", "TopNav")
                        }), u.createElement(G, null), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://www.twitch.tv/p/cookie-policy",
                            "data-a-target": "cookie-policy-link",
                            title: Object(f.d)("Cookie Policy", "TopNav")
                        }), u.createElement(M, {
                            onClick: this.onNavigationClicked,
                            linkTo: "/directory/game/Creative",
                            "data-a-target": "creative-link",
                            title: Object(f.d)("Creative", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://dev.twitch.tv/",
                            "data-a-target": "developers-link",
                            title: Object(f.d)("Developers", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://help.twitch.tv/",
                            "data-a-target": "help-link",
                            title: Object(f.d)("Help", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://www.twitch.tv/jobs",
                            "data-a-target": "jobs-link",
                            title: Object(f.d)("Jobs", "TopNav")
                        }), u.createElement(g.a, {
                            display: w.X.Block,
                            "data-test-selector": Nt.LanguageBalloonWrapper
                        }, u.createElement(M, {
                            "data-test-selector": Nt.LanguageMenuItem,
                            "data-a-target": "language-selector",
                            title: Object(f.d)("Language", "TopNav")
                        }), u.createElement(w.u, {
                            size: w.w.Small,
                            direction: w.v.Right,
                            tailOffset: 270,
                            offsetY: "-263px",
                            offsetX: "20px",
                            "data-a-target": "language-selector-menu"
                        }, u.createElement(h.a, null))), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://music.twitch.tv/",
                            "data-a-target": "music-link",
                            title: Object(f.d)("Music", "TopNav")
                        }), this.renderStoreLink(), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://www.twitch.tv/p/partners",
                            "data-a-target": "partners-link",
                            title: Object(f.d)("Partners", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://www.twitch.tv/p/press",
                            "data-a-target": "press-link",
                            title: Object(f.d)("Press", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://www.twitch.tv/p/legal/privacy-policy",
                            "data-a-target": "privacy-policy-link",
                            title: Object(f.d)("Privacy Policy", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://www.twitch.tv/p/security",
                            "data-a-target": "security-link",
                            title: Object(f.d)("Security", "TopNav")
                        }), u.createElement(M, {
                            targetBlank: !0,
                            linkTo: "https://www.twitch.tv/p/terms-of-service",
                            "data-a-target": "terms-link",
                            title: Object(f.d)("Terms", "TopNav")
                        }))))), u.createElement(w.Xa, {
                            className: "top-nav__search",
                            display: w.X.Hide,
                            flexGrow: 1,
                            alignSelf: w.g.Center,
                            breakpointMedium: {
                                display: w.X.Block
                            }
                        }, !this.state.isError && u.createElement(Ue, null))), u.createElement(w.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                x: .5
                            },
                            alignSelf: w.g.Center,
                            flexWrap: w.Ba.NoWrap,
                            breakpointMedium: {
                                display: w.X.Hide
                            }
                        }, u.createElement(Ue, {
                            truncated: !0
                        })), !this.state.isError && this.renderTwitchPrimeCrown(), !this.state.isError && this.renderOnsiteNotifications(), this.renderBitsButton(), !this.state.isError && u.createElement(w.Xa, {
                            className: "top-nav__nav-items-container",
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            flexWrap: w.Ba.NoWrap,
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.props.isLoggedIn ? u.createElement(Ot, null) : u.createElement(Le.a, {
                            login: this.props.login,
                            signup: this.props.signup
                        })))))
                    }, t
                }(u.Component),
                Dt = Object(a.compose)(Object(v.a)(xt, {
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(I.b)("TopNav", {
                    autoReportInteractive: !0
                }))(Tt);
            var It = Object(r.a)(Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(c.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(s.e)(o.a.TopNavSignupButton)
                    },
                    logout: s.f,
                    signup: function() {
                        return Object(s.g)(o.a.TopNavSignupButton)
                    }
                }, e)
            })(Dt));
            n.d(t, !1, function() {
                return "5rem"
            }), n.d(t, !1, function() {
                return "9.5rem"
            }), n.d(t, "a", function() {
                return It
            })
        },
        Gw6o: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "GetBitsButton_Bits"
                    },
                    variableDefinitions: [{
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
                                value: "withChannel"
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
                                value: "login"
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
                                value: "bitsOffers"
                            },
                            arguments: [],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "skip"
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "bitsOffersFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "currentUser"
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
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "idSHA1"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "bitsOffers"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "bitsOffersFragment"
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
                                        value: "login"
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
                                            value: "withChannel"
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "cheer"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 748
                }
            };
            i.loc.source = {
                body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery GetBitsButton_Bits($isLoggedIn: Boolean! $withChannel: Boolean! $login: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $login) @include(if: $withChannel) {\nid\n...cheer\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(a(n("hWzS").definitions)), i.definitions = i.definitions.concat(a(n("F9eG").definitions)), e.exports = i
        },
        "H/lO": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Games = "game", e.Videos = "vod", e.Users = "user", e.Channels = "live_channel", e.StreamTags = "stream_tag", e.Tags = "tag"
                }(i || (i = {}))
        },
        "HAa/": function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("TSYQ"),
                o = n("17x9"),
                s = n("q1tI"),
                c = n("/7QA");
            n("miXC");
            ! function(e) {
                e[e.Up = 0] = "Up", e[e.Down = 1] = "Down"
            }(i || (i = {}));
            var l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasPendingLoadMoreRequest: !1,
                        loadedMore: !0
                    }, t.isTriggerVisible = function(e, t) {
                        var n = t.top,
                            i = t.top + t.height;
                        return !(e.bottom < n || e.top > i)
                    }, t.getOrientation = function() {
                        return void 0 === t.props.orientation ? i.Up : t.props.orientation
                    }, t.setWrapRef = function(e) {
                        return t.wrapElement = e
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.getOrientation(),
                        t = a({
                            "scrollable-trigger__trigger-area": !0,
                            "scrollable-trigger__trigger-area--up": e === i.Up,
                            "scrollable-trigger__trigger-area--down": e === i.Down
                        }),
                        n = {
                            height: this.props.pixelThreshold || 100
                        };
                    return s.createElement("div", {
                        className: "scrollable-trigger__wrapper",
                        ref: this.setWrapRef
                    }, s.createElement("div", {
                        className: t,
                        ref: this.setRef,
                        style: n
                    }))
                }, t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : c.k.warn("<InfiniteScrollTrigger /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.enabled && e.enabled && this.context.requestVisibilityCheck && this.context.requestVisibilityCheck(this)
                }, t.prototype.checkVisible = function(e, t, n) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, i, a, o, s = this;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (void 0 === n && (n = this.props.requestCap || 5), !(this.wrapElement && this.element && (this.state.loadedMore || this.props.forceLoadMoreContent) && !this.state.hasPendingLoadMoreRequest && this.props.enabled && n > 0)) return [3, 4];
                                    if (t = this.element.getBoundingClientRect(), i = this.props.contentLength, a = this.wrapElement.offsetTop, !this.isTriggerVisible(t, e)) return [3, 4];
                                    this.setState({
                                        hasPendingLoadMoreRequest: !0
                                    }), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, this.props.loadMore()];
                                case 2:
                                    return r.sent(), this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), requestAnimationFrame(function() {
                                        var t;
                                        s.element && (t = void 0 !== s.props.contentLength && void 0 !== i ? s.props.contentLength > i : s.wrapElement.offsetTop > a, s.setState({
                                            loadedMore: t
                                        }), n && (t || s.props.forceLoadMoreContent) && s.checkVisible(e, void 0, n - 1))
                                    }), [3, 4];
                                case 3:
                                    throw o = r.sent(), this.element && this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), o;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: o.func,
                    requestVisibilityCheck: o.func
                }, t
            }(s.Component);
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return l
            })
        },
        IX50: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "b", function() {
                return f
            });
            var i = n("/7QA"),
                r = n("KxT4"),
                a = n("u0aY"),
                o = n("t5Gm"),
                s = n("SmhC"),
                c = n("ClZk"),
                l = n("06uF"),
                u = n("Mn7C"),
                d = i.p.logger.withCategory("gdpr-consent-actions");

            function p() {
                var e = Object(s.b)(),
                    t = Object(r.e)(e, !0);
                return h(u.a.Given, t)
            }

            function m(e) {
                var t = u.a.Mixed;
                return Object(c.a)(e, !0) ? t = u.a.Given : Object(c.a)(e, !1) && (t = u.a.Denied), h(t, e)
            }

            function f() {
                return d.debug("resetting GDPR vendor preferences"), Object(o.a)(),
                    function(e) {
                        return e(Object(a.d)())
                    }
            }

            function h(e, t) {
                return d.debug("updating GDPR vendor preferences", t), Object(u.c)(e, t), l.c(t),
                    function(e) {
                        e(Object(a.f)(t)), e(Object(a.e)(r.b.ConsentSaved))
                    }
            }
        },
        IrUU: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "OnsiteNotifications_ListNotifications"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "language"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                                        value: "notifications"
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
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "language"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "language"
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
                                        }, {
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
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "type"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "body"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "createdAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "updatedAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isRead"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "thumbnailURL"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "actions"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "body"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "type"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "url"
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
                }],
                loc: {
                    start: 0,
                    end: 311
                }
            };
            n.loc.source = {
                body: "query OnsiteNotifications_ListNotifications($limit: Int $cursor: Cursor $language: String) {\ncurrentUser {\nid\nnotifications(first: $limit after: $cursor language: $language) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\ntype\nbody\ncreatedAt\nupdatedAt\nisRead\nthumbnailURL\nactions {\nbody\ntype\nurl\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        IvMc: function(e, t, n) {},
        "J/lh": function(e, t, n) {
            e.exports = n.p + "assets/emote-9379106f961aa27cfb94.svg"
        },
        J4y2: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("fvjX"),
                a = n("mrSG"),
                o = n("5e4V"),
                s = n("Pmew");

            function c(e, t) {
                var n = this;
                return function() {
                    return a.__awaiter(n, void 0, void 0, function() {
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return t ? [4, Object(s.c)({
                                        userID: t,
                                        preferredLanguageTag: Object(s.b)(e)
                                    })] : [3, 2];
                                case 1:
                                    n.sent(), n.label = 2;
                                case 2:
                                    return Object(o.c)(e), window.location.reload(!0), [2]
                            }
                        })
                    })
                }
            }
            var l, u = n("q1tI"),
                d = n("/7QA"),
                p = n("Ue10");
            n("d/K1");
            ! function(e) {
                e.LeftColumn = "language-selector__left-column", e.RightColumn = "language-selector__right-column"
            }(l || (l = {}));
            var m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        return u.createElement(p.Ua, {
                            key: e.languageCode,
                            onClick: t.handleLanguageClick,
                            "data-target": "language-selector-link",
                            "data-language": e.languageCode
                        }, u.createElement(p.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            "data-a-target": "language-" + e.languageCode
                        }, e.name))
                    }, t.handleLanguageClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-language");
                        n && t.props.changeLanguage(n, t.props.currentUserID)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(d.a.locales.length / 2);
                    return u.createElement(p.Xa, {
                        className: "language-selector",
                        display: p.X.Flex,
                        padding: {
                            y: 1
                        }
                    }, u.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right",
                        "data-test-selector": l.LeftColumn
                    }, d.a.locales.slice(0, e).map(this.renderLink)), u.createElement("div", {
                        className: "language-selector__list",
                        "data-test-selector": l.RightColumn
                    }, d.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(u.Component);
            var f = Object(i.connect)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    changeLanguage: c
                }, e)
            })(m);
            n.d(t, "a", function() {
                return f
            })
        },
        JVUd: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("17x9"),
                a = n("q1tI"),
                o = n("/7QA");

            function s(e) {
                var t = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: 0,
                        width: 0
                    },
                    n = function() {
                        if (window.innerWidth) return window.innerWidth;
                        if (document.documentElement.clientWidth) return document.documentElement.clientWidth;
                        return screen.width
                    }(),
                    i = function() {
                        if (window.innerHeight) return window.innerHeight;
                        if (document.documentElement.clientHeight) return document.documentElement.clientHeight;
                        return screen.height
                    }();
                return e.bottom <= 0 || e.top > i || e.right < 0 || e.left > n ? t : (t.top = Math.max(0, e.top), t.left = Math.max(0, e.left), t.right = Math.min(e.right, n), t.bottom = Math.min(e.bottom, i), t.width = t.right - t.left, t.height = t.bottom - t.top, t)
            }

            function c(e, t) {
                return function(n) {
                    return function(c) {
                        function l() {
                            var e = null !== c && c.apply(this, arguments) || this;
                            return e.state = {
                                hadImpression: !1,
                                didScroll: !1
                            }, e.logger = o.k.withCategory("with-impression-listener"), e.setRef = function(t) {
                                return e.element = t
                            }, e.registerImpressionCallback = function(t) {
                                e.reportImpression = t
                            }, e
                        }
                        return i.__extends(l, c), l.prototype.componentDidMount = function() {
                            this.scrollContext = this.context;
                            var n = this.scrollContext.registerReceiver;
                            n ? t && void 0 !== t.percentage && void 0 !== t.pixels ? this.logger.warn("<" + e + " /> should only be initialized with percentage or pixel thresholds, not both") : this.unregister = n(this) : this.logger.warn("<" + e + " /> initialized missing a <ScrollableArea /> provider")
                        }, l.prototype.componentWillUnmount = function() {
                            this.unregister && this.unregister()
                        }, l.prototype.render = function() {
                            var e = {
                                impressionListener: {
                                    hadImpression: this.state.hadImpression,
                                    didScroll: this.state.didScroll,
                                    registerImpressionCallback: this.registerImpressionCallback
                                }
                            };
                            return a.createElement("div", {
                                ref: this.setRef
                            }, a.createElement(n, i.__assign({}, this.props, e)))
                        }, l.prototype.checkVisible = function(e) {
                            return i.__awaiter(this, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(i) {
                                    return this.state.hadImpression || (t = this.isVisible(e)) && (n = this.isScrolled(), this.setState({
                                        hadImpression: t,
                                        didScroll: n
                                    }), this.reportImpression && this.reportImpression(n)), [2]
                                })
                            })
                        }, l.prototype.isVisible = function(e) {
                            if (!this.element) return !1;
                            var n = s(e),
                                i = this.element.getBoundingClientRect();
                            if (i.left < n.right && i.right > n.left && i.top < n.bottom && i.bottom > n.top) {
                                if (!t || 0 === t.percentage || 0 === t.pixels) return !0;
                                var r = t.percentage,
                                    a = t.pixels,
                                    o = i.bottom - i.top,
                                    c = n.bottom - n.top,
                                    l = Math.min(n.bottom - i.top, o, c);
                                if (a) {
                                    if (o >= a) return l >= a;
                                    r = 100
                                }
                                return !r || 100 * (l / o) >= r
                            }
                            return !1
                        }, l.prototype.isScrolled = function() {
                            if (!this.scrollContext) return !1;
                            var e = this.scrollContext.getScrollContent();
                            return !(!e || 0 === e.scrollTop)
                        }, l.contextTypes = {
                            registerReceiver: r.func,
                            getScrollContent: r.func
                        }, l
                    }(a.Component)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        JbHs: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("ua1/");

            function r(e, t) {
                switch (e.type) {
                    case i.b.Playing:
                        return {
                            type: i.a.Playing,
                            "Symbol(id)": t,
                            __typename: "Playing",
                            game: {
                                id: e.game_id,
                                name: e.game,
                                "Symbol(id)": t + ".game",
                                __typename: "Game"
                            }
                        };
                    case i.b.Streaming:
                        if (!e.stream_id) return null;
                        var n = {
                            type: i.a.Streaming,
                            "Symbol(id)": t,
                            __typename: "Streaming",
                            stream: {
                                id: e.stream_id,
                                game: null,
                                "Symbol(id)": t + ".stream",
                                __typename: "Stream"
                            }
                        };
                        return e.game && e.game_id && (n.stream.game = {
                            id: e.game_id,
                            name: e.game,
                            "Symbol(id)": t + ".stream.game",
                            __typename: "Game"
                        }), n;
                    case i.b.Watching:
                        if (!e.stream_id) return null;
                        var r = {
                            type: i.a.Watching,
                            "Symbol(id)": t,
                            __typename: "Watching",
                            user: {
                                id: e.channel_id,
                                login: e.channel_login,
                                displayName: e.channel_display_name,
                                "Symbol(id)": t + ".user",
                                __typename: "User",
                                stream: {
                                    id: e.stream_id,
                                    game: null,
                                    "Symbol(id)": t + ".user.stream",
                                    __typename: "Stream"
                                },
                                hosting: null
                            }
                        };
                        return e.game && e.game_id && (r.user.stream.game = {
                            id: e.game_id,
                            name: e.game,
                            "Symbol(id)": t + ".user.stream.game",
                            __typename: "Game"
                        }), e.hosted_channel_id && e.hosted_channel_login && e.hosted_channel_display_name && (r.user.hosting = {
                            id: e.hosted_channel_id,
                            displayName: e.hosted_channel_display_name,
                            login: e.hosted_channel_login,
                            "Symbol(id)": t + ".user.hosting",
                            __typename: "User"
                        }), r;
                    default:
                        return null
                }
            }
        },
        Je81: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "OnsiteNotifications_DeleteNotification"
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
                                    value: "DeleteNotificationInput"
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
                                value: "deleteNotification"
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
                                        value: "notification"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 143
                }
            };
            n.loc.source = {
                body: "mutation OnsiteNotifications_DeleteNotification($input: DeleteNotificationInput!) {\ndeleteNotification(input: $input) {\nnotification {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        KRR4: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Search_SearchLiveResultCard_UserStream"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "login"
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
                                        value: "login"
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
                                        value: "stream"
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
                                                value: "previewImageURL"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "width"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "156"
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "height"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "88"
                                                }
                                            }],
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
                    end: 145
                }
            };
            n.loc.source = {
                body: "query Search_SearchLiveResultCard_UserStream($login: String!) {\nuser(login: $login) {\nid\nstream {\nid\npreviewImageURL(width: 156 height: 88)\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        KbPt: function(e, t, n) {},
        KtNF: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("/0dD"),
                o = n("5zXJ"),
                s = n("XmgI"),
                c = n("4h+t"),
                l = n("x1M1");
            n("oijJ");

            function u(e) {
                var t, n = Object(r.d)("{bitsAmount} Bits", {
                    bitsAmount: e.count.toString()
                }, "Bits--BitsCount");
                if (e.withImage) {
                    var u = e.bitsConfig && e.bitsConfig.indexedActions[o.l];
                    u || (u = Object(c.b)());
                    var d = u.orderedTiers.find(function(t) {
                        return t.bits <= e.count
                    });
                    if (d) {
                        var p = Object(s.c)(d, void 0, e.animated);
                        return void 0 !== e.themeOverride && (e.themeOverride === a.a.Light ? p.dark = p.light : p.light = p.dark), t = i.createElement(l.a, {
                            className: "bits-count--img",
                            sources: p
                        }), i.createElement("strong", {
                            className: "bits-count",
                            "data-a-target": "bits-count"
                        }, i.createElement("span", null, t, " ", e.withText ? n : ""))
                    }
                }
                return i.createElement("strong", {
                    className: "bits-count",
                    "data-a-target": "bits-count"
                }, i.createElement("span", null, n))
            }
            n.d(t, "a", function() {
                return u
            })
        },
        "L/sm": function(e, t, n) {},
        LQTS: function(e, t, n) {},
        MXoD: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                r = n("cr+I"),
                a = function(e, t) {
                    if (!(e.content || e.content_index || e.medium) || !t) return t;
                    if ("string" == typeof t && (/^\w+:\/\//.test(t) || t.startsWith("//"))) {
                        var n = new URL(t),
                            a = "" !== n.search ? r.parse(n.search) : {};
                        return e.content && (a.tt_content = e.content), e.content_index && (a.tt_content_index = e.content_index), e.medium && (a.tt_medium = e.medium), n.search = r.stringify(a), n.toString()
                    }
                    var o = "string" == typeof t ? {
                        pathname: t
                    } : t;
                    return i.__assign({}, o, {
                        state: i.__assign({}, o.state, {
                            content: e.content || o.state && o.state.content,
                            content_index: e.content_index || o.state && o.state.content_index,
                            medium: e.medium || o.state && o.state.medium
                        })
                    })
                }
        },
        N0BP: function(e, t, n) {
            "use strict";

            function i(e) {
                for (var t = {}, n = 0, i = Object.keys(e).filter(function(e) {
                        return e.startsWith("data-")
                    }); n < i.length; n++) {
                    var r = i[n];
                    t[r] = e[r]
                }
                return t
            }
            n.d(t, "a", function() {
                return i
            })
        },
        NSwr: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var i = {
                Away: "AWAY",
                Busy: "BUSY",
                Idle: "IDLE",
                Invisible: "INVISIBLE",
                Offline: "OFFLINE",
                Online: "ONLINE"
            }
        },
        NZDK: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            });
            var i = n("mrSG"),
                r = n("hnrd"),
                a = n("/7QA"),
                o = n("D7An"),
                s = n("H/lO"),
                c = n("vR4/"),
                l = n("BSTw"),
                u = n("Z9JJ"),
                d = {
                    games: {
                        indexName: s.a.Games,
                        hitsPerPage: 2,
                        topNumericFilters: ["popularity>1"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    videos: {
                        indexName: s.a.Videos,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["created_at>" + f(function() {
                                var e = new Date;
                                return e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3)
                            }())]
                        },
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    users: {
                        indexName: s.a.Users,
                        hitsPerPage: 2,
                        topNumericFilters: ["followers>50"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    channels: {
                        indexName: s.a.Channels,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["channel_count>10", "updated_on>" + f(m())]
                        },
                        get singleTypeNumericFilters() {
                            return ["updated_on>" + f(m())]
                        },
                        optionalFacetFilters: ""
                    },
                    streamTags: {
                        indexName: s.a.StreamTags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    tags: {
                        indexName: s.a.Tags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    }
                },
                p = function() {
                    function e(e) {
                        this.apolloClient = e.apolloClient, this.client = r(e.appId, e.apiKey), this.stats = e.stats, this.logger = e.logger.withCategory("search-client"), this.sendSearchRequestToForage = "variant" === a.p.experiments.getAssignment(o.b.NewSearchBackend), this.getCountryCode()
                    }
                    return e.prototype.queryTopResults = function(e, t) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var n, r, a, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return r = [], (n = []).push(this.getTopResult(d.games, e)), n.push(this.getTopResult(d.videos, e)), n.push(this.getTopResult(d.users, e)), n.push(this.getTopResult(d.channels, e)), r.push(this.getTotalResult(d.games, e)), r.push(this.getTotalResult(d.videos, e)), r.push(this.getTotalResult(d.users, e)), r.push(this.getTotalResult(d.channels, e)), [4, this.query(n.concat(r))];
                                    case 1:
                                        return (a = i.sent()) ? (o = a.results, [2, {
                                            id: t,
                                            games: {
                                                totalHits: o[4].nbHits,
                                                hits: o[0].hits
                                            },
                                            videos: {
                                                totalHits: o[5].nbHits,
                                                hits: o[1].hits
                                            },
                                            users: {
                                                totalHits: o[6].nbHits,
                                                hits: o[2].hits
                                            },
                                            channels: {
                                                totalHits: o[7].nbHits,
                                                hits: o[3].hits
                                            }
                                        }]) : [2, function(e) {
                                            return {
                                                id: e,
                                                games: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                videos: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                users: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                channels: {
                                                    totalHits: 0,
                                                    hits: []
                                                }
                                            }
                                        }(t)]
                                }
                            })
                        })
                    }, e.prototype.queryForType = function(e, t, n, r) {
                        var a = void 0 === r ? {} : r,
                            o = a.page,
                            c = void 0 === o ? 0 : o,
                            l = a.hitsPerPage,
                            u = void 0 === l ? 50 : l,
                            p = a.facetFilters,
                            m = void 0 === p ? "" : p,
                            f = a.numericFilters,
                            h = a.restrictSearchableAttributes,
                            g = void 0 === h ? [] : h;
                        return i.__awaiter(this, void 0, void 0, function() {
                            var r, a, o, l, p, h, v, b, y = this;
                            return i.__generator(this, function(k) {
                                switch (k.label) {
                                    case 0:
                                        switch (r = {
                                            id: n,
                                            currentPage: c
                                        }, a = function(e) {
                                            return i.__awaiter(y, void 0, void 0, function() {
                                                var n, a;
                                                return i.__generator(this, function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return n = {
                                                                indexName: e.indexName,
                                                                query: t,
                                                                params: {
                                                                    page: c,
                                                                    hitsPerPage: u,
                                                                    numericFilters: f || e.singleTypeNumericFilters,
                                                                    facets: "*",
                                                                    facetFilters: m,
                                                                    restrictSearchableAttributes: g
                                                                }
                                                            }, [4, this.query([n])];
                                                        case 1:
                                                            return (a = i.sent()) ? (r.exhaustedHits = !a.results[0].nbHits || a.results[0].hits.length < u, [2, {
                                                                totalHits: a.results[0].nbHits,
                                                                hits: a.results[0].hits
                                                            }]) : (r.exhaustedHits = !0, [2, {
                                                                totalHits: 0,
                                                                hits: []
                                                            }])
                                                    }
                                                })
                                            })
                                        }, e) {
                                            case s.a.Games:
                                                return [3, 1];
                                            case s.a.Users:
                                                return [3, 3];
                                            case s.a.Channels:
                                                return [3, 5];
                                            case s.a.Videos:
                                                return [3, 7];
                                            case s.a.StreamTags:
                                                return [3, 9];
                                            case s.a.Tags:
                                                return [3, 11]
                                        }
                                        return [3, 13];
                                    case 1:
                                        return o = r, [4, a(d.games)];
                                    case 2:
                                        return o.games = k.sent(), [3, 14];
                                    case 3:
                                        return l = r, [4, a(d.users)];
                                    case 4:
                                        return l.users = k.sent(), [3, 14];
                                    case 5:
                                        return p = r, [4, a(d.channels)];
                                    case 6:
                                        return p.channels = k.sent(), [3, 14];
                                    case 7:
                                        return h = r, [4, a(d.videos)];
                                    case 8:
                                        return h.videos = k.sent(), [3, 14];
                                    case 9:
                                        return v = r, [4, a(d.streamTags)];
                                    case 10:
                                        return v.streamTags = k.sent(), [3, 14];
                                    case 11:
                                        return b = r, [4, a(d.tags)];
                                    case 12:
                                        return b.tags = k.sent(), [3, 14];
                                    case 13:
                                        return [2, null];
                                    case 14:
                                        return [2, r]
                                }
                            })
                        })
                    }, e.prototype.queryVideos = function(e, t, n) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var r, a, o, l;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        switch (r = s.a.Videos, a = [], n.length) {
                                            case c.a.Short:
                                                a.push("length<=900");
                                                break;
                                            case c.a.Long:
                                                a.push("length>900")
                                        }
                                        switch (o = {
                                            indexName: r,
                                            query: e,
                                            params: {
                                                page: 0,
                                                hitsPerPage: 50,
                                                numericFilters: a,
                                                facets: "*",
                                                facetFilters: ""
                                            }
                                        }, n.type) {
                                            case c.b.PastBroadcasts:
                                                o.params.facetFilters = "broadcast_type:archive";
                                                break;
                                            case c.b.Uploads:
                                                o.params.facetFilters = "broadcast_type:upload";
                                                break;
                                            case c.b.Highlights:
                                                o.params.facetFilters = "broadcast_type:highlight"
                                        }
                                        return [4, this.query([o])];
                                    case 1:
                                        return (l = i.sent()) ? [2, {
                                            id: t,
                                            totalHits: l.results[0].nbHits,
                                            hits: l.results[0].hits
                                        }] : [2, {
                                            id: t,
                                            totalHits: 0,
                                            hits: []
                                        }]
                                }
                            })
                        })
                    }, e.prototype.getCountryCode = function() {
                        var e = this;
                        this.apolloClient.query({
                            query: l
                        }).then(function(t) {
                            e.countryCode = t.data.requestInfo.countryCode
                        }).catch(function(t) {
                            e.logger.error(t, "Failed to get country code")
                        })
                    }, e.prototype.getSearchResults = function(e) {
                        var t = this,
                            n = {
                                query: e,
                                platform: "web"
                            };
                        return this.apolloClient.query({
                            query: u,
                            variables: n,
                            fetchPolicy: "network-only"
                        }).then(function(e) {
                            if (e.data.search) return {
                                results: JSON.parse(e.data.search.result)
                            }
                        }).catch(function(e) {
                            return t.logger.error(e, "Failed to get search results"), e
                        })
                    }, e.prototype.getTopResult = function(e, t) {
                        return {
                            indexName: e.indexName,
                            query: t,
                            params: {
                                page: 0,
                                hitsPerPage: e.hitsPerPage,
                                numericFilters: e.topNumericFilters
                            }
                        }
                    }, e.prototype.getTotalResult = function(e, t) {
                        return {
                            indexName: e.indexName,
                            query: t,
                            params: {
                                hitsPerPage: 0,
                                numericFilters: e.singleTypeNumericFilters
                            }
                        }
                    }, e.prototype.query = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, a, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        n = Date.now(), a = !1, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 6, , 7]), this.sendSearchRequestToForage && e.length > 7 ? (o = e[0].query, [4, this.getSearchResults(o)]) : [3, 3];
                                    case 2:
                                        return t = i.sent(), [3, 5];
                                    case 3:
                                        return [4, this.client.search(e)];
                                    case 4:
                                        t = i.sent(), i.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return i.sent(), a = !0, t = null, [3, 7];
                                    case 7:
                                        return r = Date.now(), this.countryCode && (a ? this.stats.recordSearchError(this.countryCode, r - n) : this.stats.recordSearchSuccess(this.countryCode, r - n)), [2, t]
                                }
                            })
                        })
                    }, e
                }();

            function m() {
                return Math.floor(((new Date).getTime() - 6e5) / 1e3)
            }

            function f(e) {
                return e <= 100 ? e : 100 * Math.round(e / 100)
            }
        },
        NvZ5: function(e, t, n) {},
        O4UZ: function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return d
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return r
            }), n.d(t, "b", function() {
                return m
            }), n.d(t, "g", function() {
                return f
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "l", function() {
                return g
            }), n.d(t, "h", function() {
                return v
            }), n.d(t, "j", function() {
                return b
            }), n.d(t, "o", function() {
                return y
            }), n.d(t, "q", function() {
                return k
            }), n.d(t, "p", function() {
                return _
            }), n.d(t, "f", function() {
                return h
            }), n.d(t, "i", function() {
                return C
            }), n.d(t, "n", function() {
                return E
            }), n.d(t, "m", function() {
                return N
            }), n.d(t, "k", function() {
                return O
            });
            var i, r, a = n("TSYQ"),
                o = n("cr+I"),
                s = n("q1tI"),
                c = n("/7QA"),
                l = n("ht6z"),
                u = n("Ue10"),
                d = {
                    DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                    CLAIM_CODE: "CLAIM_CODE",
                    EXTERNAL_OFFER: "EXTERNAL_OFFER"
                };
            ! function(e) {
                e.Vertical = "Vertical", e.Horizontal = "Horizontal", e.Default = "Vertical"
            }(i || (i = {})),
            function(e) {
                e.Crown = "Crown", e.LootPage = "LootPage"
            }(r || (r = {}));
            var p, m = {
                    UNKNOWN_ERROR: "UNKNOWN_ERROR",
                    OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
                    UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
                    TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
                },
                f = function(e) {
                    switch (e || m.UNKNOWN_ERROR) {
                        case m.OFFER_ALREADY_CLAIMED:
                            return Object(c.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click <x:link>here to learn more</x:link>.", {
                                "x:link": function(e) {
                                    return s.createElement(u.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                        targetBlank: !0,
                                        className: "prime-error__link",
                                        "data-a-target": "prime-error_link"
                                    }, e)
                                }
                            }, "PrimeError");
                        case m.UNABLE_TO_SPEND:
                        case m.TOO_MANY_RECENT_SPENDS:
                        default:
                            return Object(c.d)("Something has gone wrong. Please try again later.", "PrimeError")
                    }
                };
            ! function(e) {
                e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
            }(p || (p = {}));
            var h, g = function(e) {
                    return e === i.Vertical
                },
                v = function(e, t) {
                    var n = t === i.Horizontal ? "horizontal" : "vertical";
                    return a(e, e + "--" + n)
                },
                b = function() {
                    return S("seenOffers")
                },
                y = function(e) {
                    c.m.set("seenOffers", e)
                },
                k = function(e, t) {
                    return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
                },
                S = function(e) {
                    return c.m.get(e, [])
                },
                _ = function(e, t) {
                    return void 0 !== e && void 0 !== t && (!e && Object(l.a)(t))
                };
            ! function(e) {
                e.DateOverride = "dateOverride", e.CountryCode = "countryCode"
            }(h || (h = {}));
            var C = function(e) {
                    var t = location.search,
                        n = o.parse(t);
                    return n && n[e] || void 0
                },
                E = function(e) {
                    return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
                },
                N = function(e) {
                    return e && e.loading
                },
                O = function(e) {
                    return w().includes(e)
                },
                w = function() {
                    return c.b.get("prime_gift_experiment_offer_ids", [])
                }
        },
        OeOm: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_PrimeOfferList_PrimeOffers"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "countryCode"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                                value: "primeOffers"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dateOverride"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                                        value: "title"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "imageURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "claimInstructions"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "description"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "deliveryMethod"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "priority"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
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
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "game"
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
                                                        value: "name"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "externalURL"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "publisher"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "categories"
                                            },
                                            arguments: [],
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
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasEntitlement"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "claimData"
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
                                                value: "gifts"
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
                                                        value: "to"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "login"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "from"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "login"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "offerID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "offerConnection"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "status"
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
                }],
                loc: {
                    start: 0,
                    end: 411
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time $countryCode: String) {\nprimeOffers(dateOverride: $dateOverride countryCode: $countryCode) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ntags\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\nstatus\ngifts {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferID\nofferConnection {\nstatus\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        PCo6: function(e, t, n) {},
        PLUE: function(e, t, n) {},
        PsVi: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeOffer_GiftsQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offerID"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "primeGift"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offerID"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerConnection"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "status"
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
                    end: 169
                }
            };
            n.loc.source = {
                body: "query PrimeOffer_GiftsQuery($offerID: String!) {\ncurrentUser {\nid\nhasPrime\nprimeGift(offerID: $offerID) {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferConnection {\nstatus\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        QAxy: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "updatePrimeOfferStatus"
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
                                    value: "UpdatePrimeOfferStatusInput"
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
                                value: "updatePrimeOfferStatus"
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
                                                value: "hasEntitlement"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "claimData"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 171
                }
            };
            n.loc.source = {
                body: "mutation updatePrimeOfferStatus($input: UpdatePrimeOfferStatusInput!) {\nupdatePrimeOfferStatus(input: $input) {\nself {\nhasEntitlement\nclaimData\nstatus\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        QK1T: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return f
            });
            var i = /Android/i,
                r = /chrome/i,
                a = /webOS/i,
                o = /iPhone/i,
                s = /iPad/i,
                c = /iPod/i,
                l = /BlackBerry/i,
                u = /Windows Phone/i,
                d = /Mobile/i;

            function p(e) {
                return m(e) || a.test(e) || o.test(e) || s.test(e) || c.test(e) || l.test(e) || u.test(e) || d.test(e)
            }

            function m(e) {
                return i.test(e)
            }

            function f(e) {
                return r.test(e)
            }
        },
        QVaV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var i = n("q1tI"),
                r = /^[\x00-\x7F]*$/,
                a = function(e, t, n) {
                    return void 0 === n && (n = !1), t && e && !o(t) ? n ? t + " (" + e + ")" : i.createElement("span", null, t, " ", i.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function o(e) {
                return r.test(e)
            }
        },
        RRSb: function(e, t, n) {},
        RVih: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("GnwI"),
                c = n("Ue10");
            ! function(e) {
                e.LoginButton = "anon-user__login-button", e.SignUpButton = "anon-user__sign-up-button"
            }(i || (i = {}));
            var l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onLoginClick = function(e) {
                            e.preventDefault(), t.props.login()
                        }, t.onSignUpClick = function(e) {
                            e.preventDefault(), t.props.signup()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return a.createElement(c.Xa, {
                            className: "anon-user",
                            flexWrap: c.Ba.NoWrap,
                            display: c.X.Flex,
                            margin: {
                                left: 1
                            },
                            "data-a-target": "user-card"
                        }, a.createElement(c.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(c.z, {
                            onClick: this.onLoginClick,
                            "data-a-target": "login-button",
                            "data-test-selector": i.LoginButton
                        }, Object(o.d)("Log in", "top-nav"))), a.createElement(c.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(c.z, {
                            onClick: this.onSignUpClick,
                            "data-a-target": "signup-button",
                            "data-test-selector": i.SignUpButton
                        }, Object(o.d)("Sign up", "top-nav"))))
                    }, t
                }(a.Component),
                u = Object(s.b)("AnonUser")(l);
            n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "a", function() {
                return u
            })
        },
        RcPG: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Text = 0] = "Text", e[e.ModeratedText = 1] = "ModeratedText", e[e.CurrentUserHighlight = 2] = "CurrentUserHighlight", e[e.Mention = 3] = "Mention", e[e.Link = 4] = "Link", e[e.Emote = 5] = "Emote", e[e.ClipLink = 6] = "ClipLink", e[e.VideoLink = 7] = "VideoLink"
                }(i || (i = {}))
        },
        RfIv: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Game = "Game", e.InGameLoot = "InGameLoot", e.All = "All"
                }(i || (i = {}))
        },
        RiD7: function(e, t, n) {
            "use strict";
            n.d(t, "h", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "f", function() {
                return p
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "g", function() {
                return m
            }), n.d(t, "i", function() {
                return f
            });
            var i = n("/7QA"),
                r = n("2xye");

            function a(e) {
                var t = {
                    action_name: e.actionName,
                    action_type: "click",
                    displayed_balance: e.displayedBalance,
                    emote_level: e.emoteLevel,
                    emote_type: e.emoteType,
                    bits_location: e.location || s.ChatTooltip
                };
                i.o.track(r.SpadeEventType.BitsCardInteraction, t)
            }
            var o, s = {
                    ChatTooltip: "card",
                    GetBitsButton: "get_bits_button",
                    GetBitsButtonTopNav: "topnav",
                    BitsLandingPage: "bits_landing_page"
                },
                c = {
                    BuyMain: "buy_main",
                    Buy100: "buy_100",
                    Buy500: "buy_500",
                    Buy1000: "buy_1000",
                    Buy1500: "buy_1500",
                    Buy5000: "buy_5000",
                    Buy10000: "buy_10000",
                    Buy25000: "buy_25000",
                    CloseCard: "menu_close",
                    OpenCard: "menu_open",
                    PreviewEmote: "emote_preview",
                    WatchAd: "watch_ad",
                    WatchAnotherAd: "watch_another_ad",
                    CheeringInRoom: "cheering_in_room"
                },
                l = {
                    100: c.Buy100,
                    500: c.Buy500,
                    1000: c.Buy1000,
                    1500: c.Buy1500,
                    5000: c.Buy5000,
                    10000: c.Buy10000,
                    25000: c.Buy25000
                };

            function u(e) {
                return e && l[e] ? l[e] : (i.k.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), c.Buy100)
            }

            function d(e) {
                var t = {
                    channel: e.channel,
                    channel_id: e.channelID,
                    available: e.available,
                    host: "twitch.tv"
                };
                i.o.track(r.SpadeEventType.BitsAdsAvailability, t)
            }

            function p(e) {
                var t = {
                    distinct_id: i.p.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    campaign_id: e.campaignID,
                    adblock: e.adblock
                };
                i.o.track(r.SpadeEventType.BitsAdsImpression, t)
            }

            function m(e) {
                var t = i.o.getLastPageview(),
                    n = {
                        location: t && t.location || "",
                        ad_returned: null,
                        campaign_id: e.campaignID,
                        distinct_id: i.p.session.deviceID,
                        host: "twitch.tv",
                        request_id: e.requestID,
                        request_method: e.requestMethod
                    };
                i.o.track(r.SpadeEventType.BitsAdsRequest, n)
            }

            function f(e) {
                var t = {
                    leaderboard_size: e.leaderboardSize,
                    leaderboard_mode: e.leaderboardMode,
                    user_present_in_leaderboard: e.userPresentInLeaderboard,
                    user_id: e.userID,
                    channel_id: e.channelID
                };
                i.o.track(r.SpadeEventType.LeaderboardExpandClick, t)
            }! function(e) {
                e.ShowAdButton = "show_ad_button"
            }(o || (o = {}))
        },
        Rjl4: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "e", function() {
                return f
            }), n.d(t, "q", function() {
                return h
            }), n.d(t, "r", function() {
                return g
            }), n.d(t, "l", function() {
                return v
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, "m", function() {
                return y
            }), n.d(t, "k", function() {
                return k
            }), n.d(t, "j", function() {
                return S
            }), n.d(t, "p", function() {
                return _
            }), n.d(t, "n", function() {
                return N
            }), n.d(t, "o", function() {
                return O
            }), n.d(t, "h", function() {
                return w
            }), n.d(t, "g", function() {
                return x
            }), n.d(t, "f", function() {
                return T
            });
            var i, r, a, o, s, c, l = n("/7QA"),
                u = n("2xye"),
                d = n("O4UZ");

            function p(e) {
                l.o.track(u.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    action: i.Hover,
                    user_agent: navigator.userAgent
                })
            }

            function m(e, t) {
                l.o.track(u.SpadeEventType.CrownInteraction, {
                    has_prime: t.hasPrime,
                    number_of_offers: t.numberOfOffers,
                    action: e ? i.Open : i.Close,
                    user_agent: navigator.userAgent
                })
            }

            function f(e) {
                l.o.track(u.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    number_of_offers: e.numberOfOffers,
                    action: i.OffersLoaded,
                    user_agent: navigator.userAgent
                })
            }

            function h(e) {
                E(e, r.Click, o.StartYourFreeTrial)
            }

            function g(e) {
                E(e, r.Hover, o.StartYourFreeTrial)
            }

            function v(e, t) {
                E(t, r.Click, e ? o.MoreInfo : o.CloseInfo)
            }

            function b(e, t) {
                C(e, r.Click, t)
            }

            function y(e) {
                E(e, r.Hover, o.MoreInfo)
            }

            function k(e) {
                E(e, r.Hover, o.CloseInfo)
            }

            function S(e, t) {
                C(e, r.Hover, t)
            }

            function _(e) {
                E(e, r.Impression, o.Offer)
            }

            function C(e, t, n) {
                var i;
                switch (n) {
                    case d.e.CLAIM_CODE:
                        i = o.GetCode;
                        break;
                    case d.e.EXTERNAL_OFFER:
                        i = o.LearnMore;
                        break;
                    case d.e.DIRECT_ENTITLEMENT:
                        i = o.ClaimOffer
                }
                i && E(e, t, i)
            }

            function E(e, t, n) {
                l.o.track(u.SpadeEventType.PrimeOfferInteraction, {
                    offer_id: e.offerID,
                    external_url: e.externalURL,
                    index: e.index,
                    element: n,
                    action: t,
                    user_agent: navigator.userAgent,
                    has_prime: e.hasPrime,
                    display_width_type: e.displayWidthType
                })
            }

            function N(e) {
                l.o.track(u.SpadeEventType.PrimeLootPagePageview, {
                    reftag: e.reftag,
                    user_agent: navigator.userAgent
                })
            }

            function O(e) {
                l.o.track(u.SpadeEventType.PrimeLootPageTryPrimeClick, {
                    button_position: e.buttonPosition,
                    user_agent: navigator.userAgent
                })
            }

            function w() {
                D(a.Impression)
            }

            function x() {
                D(a.Hover)
            }

            function T() {
                D(a.Click)
            }

            function D(e) {
                l.o.track(u.SpadeEventType.PrimeBlueBarInteraction, {
                    client_time: Date.now(),
                    action: e
                })
            }! function(e) {
                e.Open = "click_open", e.Close = "click_close", e.Hover = "hover", e.OffersLoaded = "offers_loaded"
            }(i || (i = {})),
            function(e) {
                e.Hover = "hover", e.Click = "click", e.Impression = "impression"
            }(r || (r = {})),
            function(e) {
                e.Hover = "hover", e.Click = "click", e.Impression = "impression"
            }(a || (a = {})),
            function(e) {
                e.StartYourFreeTrial = "start_your_free_trial", e.MoreInfo = "more_info", e.CloseInfo = "close_info", e.ClaimOffer = "claim_offer", e.LearnMore = "learn_more", e.GetCode = "get_code", e.Offer = "offer"
            }(o || (o = {})),
            function(e) {
                e.TopNav = "top-nav", e.CenterBanner = "center-banner", e.CenterFooter = "center-footer"
            }(s || (s = {})),
            function(e) {
                e.Wide = "wide", e.Narrow = "narrow"
            }(c || (c = {}))
        },
        RmgP: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "TopNav_User_UpdateVisibility"
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
                                    value: "UpdateVisibilityInput"
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
                                value: "updateVisibility"
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
                                        value: "user"
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
                                                value: "availability"
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
                    end: 134
                }
            };
            n.loc.source = {
                body: "mutation TopNav_User_UpdateVisibility($input: UpdateVisibilityInput!) {\nupdateVisibility(input: $input) {\nuser {\nid\navailability\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        SDEh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = /\scurse\/\d/;

            function r(e) {
                return e || (e = navigator.userAgent), !!i.exec(e)
            }
        },
        SStD: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "claimPrimeOffer"
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
                                    value: "ClaimPrimeOfferInput"
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
                                value: "claimPrimeOffer"
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
                                                value: "claimData"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasEntitlement"
                                            },
                                            arguments: [],
                                            directives: []
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 143
                }
            };
            n.loc.source = {
                body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nclaimData\nhasEntitlement\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        SXud: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_PrimeOffers_PrimeOfferIds"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "countryCode"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                                value: "primeOffers"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dateOverride"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                                                value: "status"
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
                    end: 173
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time $countryCode: String) {\nprimeOffers(dateOverride: $dateOverride countryCode: $countryCode) {\nid\nself {\nstatus\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "Sb+K": function(e, t, n) {},
        UFVY: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeRedeem_GiftsQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offerID"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "primeGift"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offerID"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerConnection"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "status"
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
                    end: 170
                }
            };
            n.loc.source = {
                body: "query PrimeRedeem_GiftsQuery($offerID: String!) {\ncurrentUser {\nid\nhasPrime\nprimeGift(offerID: $offerID) {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferConnection {\nstatus\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        UUve: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "e", function() {
                return u
            });
            var i = n("/7QA"),
                r = n("y5D0"),
                a = "SUB_CHECKOUT__PRODUCT",
                o = "SUB_CHECKOUT__RECIPIENT",
                s = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                c = [a, o, s];

            function l() {
                c.forEach(function(e) {
                    return i.n.remove(e)
                })
            }

            function u(e) {
                return function() {
                    return Object(r.e)(e, {
                        onClose: l
                    })
                }
            }
        },
        UptD: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ClearUnreadFriendRequests"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "clearUnreadFriendRequests"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "user"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 80
                }
            };
            n.loc.source = {
                body: "mutation ClearUnreadFriendRequests {\nclearUnreadFriendRequests {\nuser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                a = n("q1tI"),
                o = n("wIs1"),
                s = n("/7QA");

            function c(e) {
                return function(t) {
                    var n = function(n) {
                        function o(t) {
                            var r = n.call(this, t) || this;
                            return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                                if (!(r.tracked || e.skip && e.skip(r.props))) {
                                    r.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                    var n = i.__assign({}, r.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = r.referenceTracking,
                                        o = a.content,
                                        c = a.medium,
                                        l = a.content_index,
                                        u = a.email_id;
                                    s.p.tracking.trackPageview(i.__assign({
                                        content: o,
                                        medium: c,
                                        content_index: l,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                        }
                        return i.__extends(o, n), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return a.createElement(t, i.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? r.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    a = r.stringify(t);
                                a.length > 0 && (i = "?" + a), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                            return n
                        }, o
                    }(a.Component);
                    return Object(o.a)(n)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        V2by: function(e, t, n) {
            e.exports = n.p + "assets/turbo-background-c4d95587026af736719a.png"
        },
        VR5Q: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "WatchAdModal_Redeeem"
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
                                    value: "RedeemTrueXAdInput"
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
                                value: "redeemTrueXAd"
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
                                        value: "grantedBits"
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
                    end: 105
                }
            };
            n.loc.source = {
                body: "mutation WatchAdModal_Redeeem($input:RedeemTrueXAdInput!) {\nredeemTrueXAd(input:$input) {\ngrantedBits\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        VSaV: function(e, t) {},
        VwD5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var i = "https://www.amazon.com/twitchmerch?channel=tpn&ref_=tw_or_web_tpn_ms"
        },
        WGf9: function(e, t, n) {},
        WQCf: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return c
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "f", function() {
                return r
            }), n.d(t, "e", function() {
                return s
            });
            var i, r, a, o, s, c = {
                    BitsLeaderboardEvents: "leaderboard-events-v1",
                    BitsCampaignEvents: "bits-campaigns-v1",
                    CampaignGlobalEvents: "campaign-events",
                    CampaignUserEvents: "user-campaign-events",
                    ChannelBitsEvents: "channel-bits-events-v1",
                    ChannelBitsPinEvents: "channel-bit-events-public",
                    ChannelEventUpdates: "channel-event-updates",
                    ChannelSquadUpdates: "channel-squad-updates",
                    ChannelSubscribeEvents: "channel-subscribe-events-v1",
                    CheerbombEventsTopic: "channel-cheer-events-public-v1",
                    BroadcastSettingsUpdate: "broadcast-settings-update",
                    ChatRoom: "chatrooms-room-v1",
                    ChatRoomsChannel: "chatrooms-channel-v1",
                    ChatRoomsUser: "chatrooms-user-v1",
                    Friendship: "friendship",
                    ImageUpload: "user-image-update",
                    ModerationActionsByUserAndChannel: "chat_moderator_actions",
                    MysteryGift: "channel-sub-gifts-v1",
                    OnsiteNotifications: "onsite-notifications",
                    PayoutOnboardingEvents: "payout-onboarding-events",
                    Presence: "presence",
                    Raid: "raid",
                    SquadUpdates: "squad-updates",
                    StreamChange: "stream-change-v1",
                    StreamChatRoom: "stream-chat-room-v1",
                    SubscribersCSV: "subscribers-csv-v1",
                    UploadService: "upload",
                    UserBitsUpdates: "user-bits-updates-v1",
                    UserCommerceEvents: "user-commerce-events",
                    UserCrateEvents: "user-crate-events-v1",
                    UserPropertiesUpdates: "user-properties-update",
                    UserSubscribeEvents: "user-subscribe-events-v1",
                    VideoPlayback: "video-playback",
                    VideoPlaybackById: "video-playback-by-id",
                    VideoThumbnailProcessing: "video-thumbnail-processing",
                    Whispers: "whispers"
                },
                l = {
                    BitsChannelSettingsEvent: "channel_settings_update",
                    BitsCampaignAddCheermoteEvent: "sponsored-cheermote-add",
                    BitsCampaignRemoveCheermoteEvent: "sponsored-cheermote-remove",
                    BitsCampaignTotalUpdate: "sponsored-cheermote-update-used",
                    BitsCampaignComplete: "sponsored-cheermote-campaign-complete",
                    BitsPinEvent: "bits-pin-event",
                    BitsLeaderboardEvent: "bits-leaderboard-event",
                    ChannelStreamDown: "stream-down",
                    ChannelStreamUp: "stream-up",
                    BroadcastSettingsUpdate: "broadcast_settings_update",
                    ChatNotification: "chat-notification",
                    ChatRoomCreated: "created_room",
                    ChatRoomDeleted: "deleted_room",
                    ChatRoomUpdated: "updated_room",
                    ChatRoomsUserModAction: "user_moderation_action",
                    ChatRoomMessageCreated: "created_room_message",
                    ChatRoomMessageEdited: "edited_room_message",
                    ChatRoomMessageDeleted: "deleted_room_message",
                    ChatRoomsRoomViewUpdated: "updated_room_view",
                    CheerbombEvent: "cheerbomb",
                    Commercial: "commercial",
                    ImageUploadSuccess: "imageuploadsuccess",
                    LiveEvent: "live-event",
                    ModerationAction: "moderation_action",
                    MysteryGiftPurchase: "mystery-gift-purchase",
                    OnsiteNotificationCreate: "create-notification",
                    OnsiteNotificationDelete: "delete-notification",
                    OnsiteNotificationsRead: "read-notifications",
                    OnsiteNotificationSummaryUpdate: "update-summary",
                    OnsiteNotificationUpdate: "update-notification",
                    PayoutOnboardingEvent: "payout-onboarding-event",
                    Presence: "presence",
                    PresenceSettings: "settings",
                    PurgeMessageRequest: "purge_messages_request",
                    RaidCancel: "raid_cancel",
                    RaidUpdate: "raid_update",
                    RaidCancelV2: "raid_cancel_v2",
                    RaidUpdateV2: "raid_update_v2",
                    RaidGoV2: "raid_go_v2",
                    Squad: "squad",
                    StreamChatRoomChatRichEmbed: "chat_rich_embed",
                    StreamChatRoomHostTargetChange: "host_target_change",
                    StreamChatRoomExtensionMessage: "extension_message",
                    StreamDown: "stream_down",
                    StreamUp: "stream_up",
                    SubscribersCSVComplete: "subscribers_csv_complete_v1",
                    SubscribersCSVInProgress: "subscribers_csv_in_progress_v1",
                    UpdatedChannelChatProperty: "updated_channel_chat_property",
                    UploadService: "upload",
                    UserBitsBalanceUpdate: "balance_update",
                    UserBitsBadgeUpdate: "badge_update",
                    UserCampaignProgressEvent: "progress",
                    UserCampaignRewardEvent: "reward",
                    UserCrateEvent: "crate-event",
                    UserGiftEvent: "gift-event",
                    UserMention: "user_mention",
                    VideoThumbnailProcessingComplete: "processing_complete",
                    VideoThumbnailProcessingError: "processing_error",
                    ViewCount: "viewcount",
                    Vodcast: "watchparty-vod",
                    WhisperAllThreadsUpdate: "threads",
                    WhisperDeleted: "whisper_deleted",
                    WhisperEdited: "whisper_edited",
                    WhisperReceived: "whisper_received",
                    WhisperSent: "whisper_sent",
                    WhisperThreadUpdate: "thread"
                },
                u = {
                    Accepted: "accepted",
                    Requested: "requested",
                    Removed: "removed",
                    SelfAccepted: "self_accepted",
                    SelfRemoved: "self_removed",
                    SelfRequested: "self_requested"
                };
            ! function(e) {
                e.AddBlockedTerm = "add_blocked_term", e.AddPermittedTerm = "add_permitted_term", e.AutoModEnabled = "automod_enabled", e.AutoModRejected = "automod_rejected", e.DeniedAutoModMessage = "denied_automod_message", e.ApprovedAutoModMessage = "approved_automod_message", e.AutoModCheerRejected = "automod_cheer_rejected", e.Ban = "ban", e.Clear = "clear", e.Delete = "delete", e.DeleteBlockedTerm = "delete_blocked_term", e.DeletePermittedTerm = "delete_permitted_term", e.EmoteOnly = "emoteonly", e.EmoteOnlyOff = "emoteonlyoff", e.FollowersOnly = "followers", e.FollowersOnlyOff = "followersoff", e.Host = "host", e.Mod = "mod", e.ModifiedAutoModProperties = "modified_automod_properties", e.R9kBeta = "r9kbeta", e.R9kBetaOff = "r9kbetaoff", e.Raid = "raid", e.Slow = "slow", e.SlowOff = "slowoff", e.SubsBeta = "subsbeta", e.SubscribersOnly = "subscribers", e.SubscribersOnlyOff = "subscribersoff", e.Timeout = "timeout", e.Unban = "unban", e.Unhost = "unhost", e.Unmod = "unmod", e.Unraid = "unraid", e.Untimeout = "untimeout"
            }(i || (i = {})),
            function(e) {
                e.AutoModMessageRejected = "automod_message_rejected", e.AutoModMessageApproved = "automod_message_approved", e.AutoModMessageDenied = "automod_message_denied", e.AutoModCheerDenied = "automod_cheer_message_denied", e.AutoModCheerTimeout = "automod_cheer_message_timeout"
            }(r || (r = {})),
            function(e) {
                e.Archive = "archive", e.Highlight = "highlight", e.Upload = "upload", e.Premiere = "premiere", e.Rerun = "rerun", e.WatchPartyPremiere = "watch_party_premiere", e.WatchPartyRerun = "watch_party_rerun"
            }(a || (a = {})),
            function(e) {
                e.Private = "private", e.Public = "public"
            }(o || (o = {})),
            function(e) {
                e.Pending = "PENDING", e.Live = "LIVE", e.Ended = "ENDED"
            }(s || (s = {}))
        },
        WpKR: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TurboPageSubscriptionProduct"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "subscriptionProduct"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "productName"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
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
                                        value: "priceInfo"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "price"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "currency"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "exponent"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "total"
                                            },
                                            arguments: [],
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
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "benefit"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 169
                }
            };
            n.loc.source = {
                body: "query TurboPageSubscriptionProduct($name: String!) {\nsubscriptionProduct(productName: $name) {\nid\npriceInfo {\nprice\ncurrency\nexponent\ntotal\n}\nself {\nbenefit {\nid\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Wu8b: function(e, t, n) {},
        Ww25: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("Ue10"),
                a = function(e) {
                    return i.createElement(r.Xa, {
                        margin: {
                            top: 1
                        }
                    }, i.createElement(r.W, {
                        color: r.O.Alt,
                        "data-a-target": e.textDataTarget
                    }, e.text), e.extraText && i.createElement(r.Xa, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(r.W, {
                        color: r.O.Alt2
                    }, e.extraText)))
                };
            n.d(t, "a", function() {
                return a
            })
        },
        XmgI: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return u
            });
            var i = n("5zXJ"),
                r = n("RcPG"),
                a = {
                    indexedActions: {},
                    orderedActions: []
                },
                o = /^((?:[A-Za-z0-9]+)(?:[A-Za-z]))([\d]+)$/;

            function s(e, t) {
                var n = [],
                    i = e.split(/\s+/);
                return i.forEach(function(e, a) {
                    var o = c(e, t);
                    if (o) n.push(o);
                    else {
                        var s = n.length && n[n.length - 1],
                            l = "";
                        if (a < i.length - 1 && (l = " "), s && s.type === r.a.Text) s.content += e + l;
                        else {
                            var u = "";
                            a && (u = " "), n.push({
                                type: r.a.Text,
                                content: u + e + l
                            })
                        }
                    }
                }), n
            }

            function c(e, t) {
                var n = e.match(o);
                if (!n) return null;
                var i = n[1].toLowerCase(),
                    a = Number(n[2]),
                    s = t.indexedActions[i];
                if (s) {
                    var c = s.orderedTiers.find(function(e) {
                        return e.bits <= a
                    });
                    if (!c && a && (c = s.orderedTiers[0]), c) return {
                        type: r.a.Emote,
                        content: {
                            images: u(c),
                            alt: s.prefix,
                            cheerAmount: a,
                            cheerColor: c.color
                        }
                    }
                }
                return null
            }

            function l(e, t) {
                var n = function(e) {
                        var t = new Map;
                        return e.orderedActions.forEach(function(e) {
                            e.campaign && t.set(e.prefix, e.campaign)
                        }), t
                    }(t),
                    r = new Map;
                e.forEach(function(e, t) {
                    if (e.alt && n.has(e.alt))
                        if (r.has(e.alt)) {
                            (i = r.get(e.alt)) && (i.total += e.cheerAmount || 0, i.lastAppearance = t)
                        } else {
                            var i = {
                                total: e.cheerAmount || 0,
                                lastAppearance: t,
                                campaign: n.get(e.alt)
                            };
                            r.set(e.alt, i)
                        }
                });
                var a = 1;
                return r.forEach(function(n) {
                    var r = 0;
                    n.campaign.thresholds.forEach(function(e) {
                        n.total >= e.minimumBits && (r = e.matchedPercent)
                    });
                    var o = Math.trunc(n.total * r);
                    if (o > 0) {
                        var s = c(i.t + o, t);
                        s && e.splice(n.lastAppearance + a++, 0, s.content)
                    }
                }), e
            }

            function u(e, t, n) {
                var i, r;
                void 0 === n && (n = !0);
                var a = n ? "animated" : "static";
                return t ? {
                    themed: !0,
                    dark: (i = {}, i[t + "x"] = e.indexedImages.DARK[a].get(t), i),
                    light: (r = {}, r[t + "x"] = e.indexedImages.LIGHT[a].get(t), r)
                } : {
                    themed: !0,
                    dark: {
                        "1x": e.indexedImages.DARK[a].get(1),
                        "1.5x": e.indexedImages.DARK[a].get(1.5),
                        "2x": e.indexedImages.DARK[a].get(2),
                        "3x": e.indexedImages.DARK[a].get(3),
                        "4x": e.indexedImages.DARK[a].get(4)
                    },
                    light: {
                        "1x": e.indexedImages.LIGHT[a].get(1),
                        "1.5x": e.indexedImages.LIGHT[a].get(1.5),
                        "2x": e.indexedImages.LIGHT[a].get(2),
                        "3x": e.indexedImages.LIGHT[a].get(3),
                        "4x": e.indexedImages.LIGHT[a].get(4)
                    }
                }
            }
        },
        YSKX: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TopNav_Store_CurrentUser"
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
                                        value: "hasPrime"
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
                    end: 62
                }
            };
            n.loc.source = {
                body: "query TopNav_Store_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Z9JJ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "NavSearch"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "query"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "platform"
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
                                value: "search"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userQuery"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "query"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "platform"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "platform"
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
                                        value: "result"
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
                    end: 112
                }
            };
            n.loc.source = {
                body: "query NavSearch($query: String! $platform: String!) {\nsearch(userQuery: $query platform: $platform) {\nresult\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ZHMB: function(e, t, n) {},
        a5fV: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            });
            var i = n("/7QA");

            function r(e, t) {
                return e / Math.pow(10, t)
            }

            function a(e, t) {
                return Object(i.f)(e, {
                    style: "currency",
                    currency: t
                })
            }
        },
        aMXE: function(e, t, n) {
            e.exports = n.p + "assets/battery-66b5325477c0c20bf900.svg"
        },
        bjGK: function(e, t, n) {},
        bq0i: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("f00E"),
                s = n("Ue10");
            ! function(e) {
                e.BalloonInsideClickDetector = "balloon-inside-click-detector", e.MouseEnterDetector = "toggle-balloon-wrapper__mouse-enter-detector"
            }(i || (i = {}));
            var c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(o.a)(), t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.handleGlobalClick = function(e) {
                        e.target.matches('[data-toggle-balloon-id="' + t.toggleBalloonId + '"] *') || t.hideBalloon()
                    }, t.handleInsideBalloonClick = function() {
                        t.hideBalloon()
                    }, t.handleMouseEnter = function() {
                        t.state.hasInteracted || t.setState({
                            hasInteracted: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.openByDefault && document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.state.showBalloon !== t.showBalloon && (t.showBalloon ? document.addEventListener("click", this.handleGlobalClick, !0) : document.removeEventListener("click", this.handleGlobalClick, !0))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = a.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var t = e[0],
                        n = e[1];
                    if (n.type !== s.u) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var o = a.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        c = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (c = a.cloneElement(n, {
                        show: this.state.showBalloon
                    }), this.props.hideBalloonOnInsideClick && (c = a.createElement("div", {
                        "data-test-selector": i.BalloonInsideClickDetector,
                        onClick: this.handleInsideBalloonClick
                    }, c)));
                    var l = o;
                    return this.props.tooltipProps && (l = a.createElement(s.Sb, r.__assign({}, this.props.tooltipProps), o)), a.createElement(s.Xa, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: s.fb.Relative
                    }, a.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.handleMouseEnter,
                        "data-test-selector": i.MouseEnterDetector
                    }, l), c)
                }, t.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, t.prototype.hideBalloon = function() {
                    var e = this;
                    this.setState({
                        showBalloon: !1
                    }, function() {
                        e.props.onToggle && e.props.onToggle(!0)
                    })
                }, t
            }(a.Component)
        },
        byRF: function(e, t, n) {},
        cIQa: function(e, t, n) {},
        cinR: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI");
            ! function(e) {
                e.PrimeTrackingButtonWrapper = "test_selector_prime_tracking_button_wrapper"
            }(i || (i = {}));
            var o = 200,
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.hoverTimer = 0, t.onMouseEnter = function(e) {
                            t.clearTimeout(), t.hoverTimer = setTimeout(function() {
                                t.props.onHover && t.props.onHover(e)
                            }, o)
                        }, t.onMouseLeave = function() {
                            t.clearTimeout()
                        }, t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e), t.clearTimeout()
                        }, t.clearTimeout = function() {
                            t.hoverTimer && (clearTimeout(t.hoverTimer), t.hoverTimer = 0)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.clearTimeout()
                    }, t.prototype.render = function() {
                        return a.createElement("div", {
                            "data-test-selector": i.PrimeTrackingButtonWrapper,
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onClick: this.onClick
                        }, this.props.children)
                    }, t
                }(a.Component);
            n.d(t, !1, function() {
                return i
            }), n.d(t, "a", function() {
                return s
            })
        },
        cx1G: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeClaimButton_GiftsQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offerID"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "primeGift"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offerID"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerConnection"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "status"
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
                    end: 175
                }
            };
            n.loc.source = {
                body: "query PrimeClaimButton_GiftsQuery($offerID: String!) {\ncurrentUser {\nid\nhasPrime\nprimeGift(offerID: $offerID) {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferConnection {\nstatus\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "d/K1": function(e, t, n) {},
        d048: function(e, t, n) {},
        dApd: function(e, t, n) {},
        dSAD: function(e, t, n) {
            e.exports = n.p + "assets/turbo-logo-66d866ee53a7a96f726a.svg"
        },
        dUi4: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("fvjX"),
                a = n("kRBY"),
                o = n("jUl1"),
                s = n("mrSG"),
                c = n("q1tI"),
                l = n("/7QA"),
                u = n("zB42"),
                d = n("NdhY"),
                p = n("D2+s"),
                m = n("Ue10"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isEnabled: l.a.forceBenchmarkingTools || l.m.get(d.b.forceToolsStorageKey, l.a.forceBenchmarkingTools)
                        }, t.toggleLocalCookie = function() {
                            l.m.set(p.a, t.state.isEnabled), l.m.set(d.b.forceToolsStorageKey, !t.state.isEnabled), location.reload()
                        }, t.onStaffConsoleToggle = function() {
                            t.props.staffConsoleHidden ? t.props.showStaffConsole() : t.props.hideStaffConsole()
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return this.props.isStaff || l.a.buildType !== u.a.Production ? c.createElement(m.zb, {
                            margin: {
                                bottom: 1
                            },
                            padding: {
                                x: 2
                            },
                            color: m.O.Alt
                        }, c.createElement(m.Xa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, c.createElement(m.Xa, {
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, c.createElement(m.N, {
                            checked: this.state.isEnabled,
                            disabled: l.a.forceBenchmarkingTools,
                            onChange: this.toggleLocalCookie,
                            label: "Staff Console"
                        })), c.createElement(m.Xa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            fullWidth: !0
                        }, !l.a.forceBenchmarkingTools && !this.state.isEnabled && c.createElement(m.Sb, {
                            label: "Enabling will reload the page"
                        }, c.createElement(m.ob, {
                            asset: m.pb.NotificationInfo,
                            width: 16,
                            height: 16
                        })), l.a.forceBenchmarkingTools && c.createElement(m.Sb, {
                            label: "Always enabled in dev"
                        }, c.createElement(m.ob, {
                            asset: m.pb.NotificationInfo,
                            width: 16,
                            height: 16
                        })), (this.state.isEnabled || l.a.forceBenchmarkingTools) && c.createElement(m.Xa, {
                            display: m.X.Flex,
                            margin: {
                                left: .5
                            },
                            fullWidth: !0,
                            justifyContent: m.Wa.End
                        }, c.createElement(m.A, {
                            onClick: this.onStaffConsoleToggle,
                            ariaLabel: "Staff Console Toggle",
                            icon: this.props.staffConsoleHidden ? m.pb.VisibilityShown : m.pb.VisibilityHidden,
                            blurAfterClick: !0,
                            size: m.B.Small
                        }))))) : null
                    }, t
                }(c.Component);
            var h = Object(i.connect)(function(e) {
                var t = Object(a.e)(e);
                return {
                    isStaff: t && t.roles && t.roles.isStaff,
                    staffConsoleHidden: e.staffConsole && e.staffConsole.hidden
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    hideStaffConsole: o.b,
                    showStaffConsole: o.c
                }, e)
            })(f);
            n.d(t, "a", function() {
                return h
            })
        },
        daa2: function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return f
            }), n.d(t, "e", function() {
                return h
            }), n.d(t, "c", function() {
                return g
            }), n.d(t, "b", function() {
                return v
            }), n.d(t, "d", function() {
                return b
            }), n.d(t, "a", function() {
                return y
            }), n.d(t, "g", function() {
                return k
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("NSwr"),
                o = n("kRBY"),
                s = n("4/kP"),
                c = n("RmgP"),
                l = "twilight.sessionID",
                u = 0,
                d = r.k.withCategory("Session Status"),
                p = {
                    sessionID: r.p.session.tabID,
                    availability: "",
                    activity: null
                },
                m = p;

            function f(e) {
                return d.debug("Updating activity", e), m = i.__assign({}, m, {
                    activity: e
                }), S()
            }

            function h(e) {
                return d.debug("Updating visibility", e),
                    function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!Object(o.f)(r.p.store.getState())) return [2];
                                        d.debug("Setting visibility on server", {
                                            visibility: e
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, r.p.apollo.client.mutate({
                                            mutation: c,
                                            variables: {
                                                input: {
                                                    visibility: e
                                                }
                                            }
                                        })];
                                    case 2:
                                        if (!(t = i.sent()) || !t.data) throw Error("EmptyResponse");
                                        return d.debug("Visibility set", {
                                            visibility: t.data.updateVisibility.user.availability
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), d.warn("Failed to update visibility.", n), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }(e)
            }

            function g(e) {
                d.debug("Saving current availability", e), m = i.__assign({}, m, {
                    availability: e
                })
            }

            function v() {
                g(a.a.Online)
            }

            function b() {
                g(a.a.Idle)
            }

            function y() {
                d.debug("Clearing activity"), m = i.__assign({}, m, {
                    activity: null
                }), S()
            }

            function k() {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return d.debug("Clearing previous session"), m = {
                                    sessionID: r.m.get(l, ""),
                                    availability: a.a.Online,
                                    activity: null
                                }, [4, S()];
                            case 1:
                                return e.sent(), d.debug("Setting new session"), m = i.__assign({}, m, {
                                        sessionID: r.p.session.tabID
                                    }),
                                    function(e) {
                                        r.m.set(l, e)
                                    }(r.p.session.tabID), [4, S()];
                            case 2:
                                return [2, e.sent()]
                        }
                    })
                })
            }

            function S() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!Object(o.f)(r.p.store.getState())) return [2];
                                d.debug("Setting status on server", {
                                    state: m
                                }), u && clearTimeout(u), i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, r.p.apollo.client.mutate({
                                    mutation: s,
                                    variables: {
                                        input: m
                                    }
                                })];
                            case 2:
                                if (!(e = i.sent()) || !e.data) throw Error("EmptyResponse");
                                if (!e.data.setSessionStatus.setAgainInSeconds) throw Error("InvalidSetAgainInSeconds");
                                return t = e.data.setSessionStatus.setAgainInSeconds, d.debug("Status scheduled to be set again", {
                                    setAgainInSeconds: t
                                }), u = setTimeout(S, 1e3 * t), [3, 4];
                            case 3:
                                return n = i.sent(), d.warn("Failed to update status. Trying again in 60 seconds.", n), u = setTimeout(S, 6e4), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
        },
        "dx/T": function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("5zXJ"),
                o = n("x1M1"),
                s = n("Ue10"),
                c = (n("222m"), {
                    themed: !0,
                    dark: {
                        "1x": a.b + "/dark/animated/1/cheertutorial.gif"
                    },
                    light: {
                        "1x": a.b + "/light/animated/1/cheertutorial.gif"
                    }
                }),
                l = function() {
                    return i.createElement(s.Xa, {
                        display: s.X.Flex,
                        padding: {
                            top: 5,
                            bottom: 3
                        },
                        flexGrow: 1,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Wa.Center,
                        alignItems: s.f.Center
                    }, i.createElement(s.W, {
                        type: s.Pb.H4,
                        bold: !0
                    }, i.createElement(o.a, {
                        className: "cheermote-help__tutorial-image",
                        sources: c
                    }), Object(r.d)("How to Cheer", "Bits--CheermoteHelp")), i.createElement(s.Xa, {
                        padding: {
                            x: 3
                        }
                    }, i.createElement(s.W, null, Object(r.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp"))))
                };
            n.d(t, "a", function() {
                return l
            })
        },
        eDVu: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/aPz");

            function o(e) {
                return function(t) {
                    return function(n) {
                        function o(t) {
                            var i = n.call(this, t) || this;
                            return i.mutator = function(e, t) {
                                return i.options.mutator(e, t)
                            }, i.typesChanged = function(e) {
                                if (e.types && !i.options.types || !e.types && i.options.types) return !0;
                                if (e.types && i.options.types) {
                                    if (e.types.length !== i.options.types.length) return !0;
                                    var t = new Set(i.options.types);
                                    return e.types.some(function(e) {
                                        return !t.has(e)
                                    })
                                }
                                return !1
                            }, i.options = e(t), i
                        }
                        return i.__extends(o, n), o.prototype.componentDidMount = function() {
                            this.options.skip || this.subscribe(this.options)
                        }, o.prototype.componentWillReceiveProps = function(t) {
                            var n = e(t);
                            n.skip !== this.options.skip && (n.skip ? this.unsubscribe() : this.subscribe(n)), n.skip || (n.topic !== this.options.topic || n.type !== this.options.type || this.typesChanged(n)) && (this.unsubscribe(), this.subscribe(n)), this.options = n
                        }, o.prototype.componentWillUnmount = function() {
                            this.unsubscribe()
                        }, o.prototype.render = function() {
                            return r.createElement(t, i.__assign({}, this.props))
                        }, o.prototype.subscribe = function(e) {
                            this.unsubscriber = Object(a.z)({
                                query: e.query,
                                variables: e.variables,
                                topic: e.topic,
                                type: e.type,
                                types: e.types,
                                mutator: this.mutator,
                                skipMessage: e.skipMessage
                            })
                        }, o.prototype.unsubscribe = function() {
                            this.unsubscriber && (this.unsubscriber(), this.unsubscriber = null)
                        }, o
                    }(r.Component)
                }
            }
            n.d(t, "a", function() {
                return o
            })
        },
        eJ65: function(e, t, n) {
            "use strict";
            var i = n("bq0i");
            n.d(t, "a", function() {
                return i.a
            })
        },
        ebRM: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return c
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "f", function() {
                return p
            }), n.d(t, "b", function() {
                return m
            });
            var i = n("mrSG"),
                r = n("SDEh"),
                a = n("lhih"),
                o = n("5zXJ"),
                s = n("RiD7");

            function c(e) {
                return e.type !== a.a && (u(e) && null !== e.promotion && e.promotion.type === a.e)
            }

            function l(e) {
                return e.type !== a.a && (u(e) && null !== e.promotion && (e.promotion.type === a.g || e.promotion.type === a.f))
            }

            function u(e) {
                return e.type === a.b && null !== e.promotion && !!e.promotion
            }

            function d(e) {
                var t = 0,
                    n = 0,
                    i = 0,
                    r = 0;
                return e.forEach(function(e) {
                    e.cheerAmount && (e.alt !== o.t ? (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, i += e.cheerAmount) : r += e.cheerAmount)
                }), {
                    total: i,
                    bonus: r,
                    smallestCheermote: n,
                    largestCheermote: t
                }
            }

            function p(e) {
                var t = e.messageBits,
                    n = t.total,
                    r = t.largestCheermote,
                    a = t.smallestCheermote;
                if (n) {
                    var s = {
                        cheerAboveMaxBitsPerEmote: r > o.p,
                        totalAboveBalance: n > e.balance,
                        totalBelowCheerMinimum: n < e.cheerMinimumBits,
                        totalBelowEmoteMinimum: a < e.emoteMinimumBits,
                        inputLongerThanMaxBitsMessage: e.inputValue.length > o.o,
                        inputStartsWithCommand: e.inputValue.startsWith("/")
                    };
                    if (Object.keys(s).some(function(e) {
                            return s[e]
                        })) return i.__assign({
                        canSpend: !1
                    }, s)
                }
                return {
                    canSpend: !0
                }
            }

            function m(e) {
                var t = e.purchaseUrl;
                if (t) {
                    e.trackBitsCardInteraction(Object(s.d)(e.bitsAmount), {
                        location: e.location
                    });
                    var n = t.replace("{channelID}", e.channelID),
                        i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                    return !i || Object(r.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(s.a.CloseCard, {
                        location: e.location
                    })) : (i.focus(), i)
                }
            }
        },
        fWal: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("Ww25"),
                o = n("EpBn"),
                s = n("Ue10"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderBody = function() {
                            return t.props.showPlaceholder ? r.createElement(s.Xa, null, r.createElement(s.eb, null), t.props.children) : r.createElement(s.Xa, null, r.createElement(s.Rb, {
                                checked: t.props.checked,
                                error: t.props.error,
                                disabled: t.props.disabled,
                                onChange: t.onChange,
                                name: t.props.name,
                                id: t.props.id
                            }), t.props.description && r.createElement(a.a, {
                                text: t.props.description,
                                extraText: t.props.extraDescription
                            }), t.props.children)
                        }, t.onChange = function(e) {
                            t.props.onChange && t.props.onChange(e.currentTarget.checked)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(o.a, {
                            id: this.props.id,
                            label: this.props.label,
                            error: this.props.error,
                            errorMessage: this.props.errorMessage,
                            orientation: s.Fa.Horizontal
                        }, this.renderBody())
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return c
            })
        },
        fk61: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                o = n("/7QA"),
                s = n("yR8l"),
                c = n("N0BP"),
                l = n("JVUd"),
                u = n("25n4"),
                d = n("0LAi"),
                p = n("4HIT"),
                m = n("Ue10"),
                f = n("5hPa"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            t.props.trackClick(t.props.id), t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.props.impressionListener.registerImpressionCallback(function() {
                            e.props.trackImpression(e.props.id)
                        })
                    }, t.prototype.render = function() {
                        return r.createElement(m.Ua, i.__assign({
                            onClick: this.onClick,
                            linkTo: this.props.linkTo,
                            hover: this.props.hover,
                            tabIndex: -1
                        }, Object(c.a)(this.props)), r.createElement(m.Xa, {
                            className: "search-game-result-card",
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(m.G, {
                            row: !0
                        }, r.createElement(m.I, {
                            alt: this.props.imageAlt,
                            src: this.props.data.game && this.props.data.game.boxArtURL ? this.props.data.game.boxArtURL : o.a.defaultBoxArtURL,
                            size: m.J.Size4,
                            aspect: m.p.BoxArt,
                            borderRadius: m.x.Small
                        }), r.createElement(m.H, {
                            overflow: m.ab.Hidden
                        }, r.createElement(m.Xa, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(m.W, {
                            type: m.Pb.H5,
                            ellipsis: !0
                        }, this.props.title), this.props.tags && r.createElement(m.Xa, {
                            padding: {
                                top: .5
                            }
                        }, r.createElement(d.a, {
                            tags: this.props.tags,
                            linkPath: p.a.DirectoryTag,
                            tagNumberLimit: 3
                        })))))))
                    }, t
                }(r.Component),
                g = Object(a.compose)(Object(s.a)(f, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                }), Object(l.a)("SearchGameResultCard", {
                    percentage: 75
                }), Object(u.b)())(h);
            n.d(t, "a", function() {
                return g
            })
        },
        gQ2q: function(e, t, n) {},
        gYQG: function(e, t, n) {
            e.exports = n.p + "assets/play-712630e8c851073edf47.svg"
        },
        hWzS: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "bitsOffersFragment"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BitsOffer"
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
                                value: "type"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "bits"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "InlineFragment",
                            typeCondition: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BitsBundleOffer"
                                }
                            },
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "price"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "discount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isPromo"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "url"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "includesVAT"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "currencyCode"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "promotion"
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
                }],
                loc: {
                    start: 0,
                    end: 158
                }
            };
            n.loc.source = {
                body: "fragment bitsOffersFragment on BitsOffer {\nid\ntype\nbits\n... on BitsBundleOffer {\nprice\ndiscount\nisPromo\nurl\nincludesVAT\ncurrencyCode\npromotion {\nid\ntype\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hiYg: function(e, t, n) {},
        hkLn: function(e, t, n) {},
        ht6z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("/7QA");

            function r(e) {
                var t = i.b.get("prime_blocked_regions", []);
                return !!e && !t.includes(e.toUpperCase())
            }
        },
        hyVY: function(e, t, n) {
            "use strict";

            function i(e, t) {
                var n = Math.floor(e % 60),
                    i = Math.floor(e % 3600 / 60),
                    a = Math.floor(e / 3600);
                return t && t.zeroPadAll ? r(a, 2) + ":" + r(i, 2) + ":" + r(n, 2) : a ? a + ":" + r(i, 2) + ":" + r(n, 2) : i + ":" + r(n, 2)
            }

            function r(e, t) {
                return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
            }

            function a(e) {
                if ("" === e) return 0;
                var t = e.split(":");
                return t.length > 3 ? NaN : t.reduce(function(e, t) {
                    return 60 * e + ("-" === t[0] ? NaN : Math.round(parseInt(t, 10)))
                }, 0)
            }
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            })
        },
        "iLa+": function(e, t, n) {},
        iiOx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "tagFragment"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Tag"
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
                                value: "isLanguageTag"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "localizedName"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "tagName"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 70
                }
            };
            n.loc.source = {
                body: "fragment tagFragment on Tag {\nid\nisLanguageTag\nlocalizedName\ntagName\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        iuxt: function(e, t, n) {},
        j3KY: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "e", function() {
                return c
            });
            var i = "sm_tw_tup_ntp_t_all",
                r = "sm_tw_thp_blue_t_all",
                a = "sm_w_tup_ntp_t_c",
                o = "sm_om_tpltp",
                s = n("/7QA").k.withCategory("PrimeUtilsLogger");

            function c(e, t) {
                return function(e, t, n) {
                    var i = "";
                    try {
                        i = btoa(n)
                    } catch (e) {
                        s.error(e, "Could not decode location pathname substring for redirect")
                    }
                    return i ? e + "?ref_=" + t + "&redirectRoute=" + i : e + "?ref_=" + t
                }("https://twitch.amazon.com/prime/country", e, t)
            }
        },
        j9uj: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("DiGQ"),
                o = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.props.metric.latencyStatus === a.a.Unknown || void 0 === this.props.metric.value) return r.createElement("span", {
                            className: "latency-metrics__dot-animation"
                        }, " ");
                        var e = this.props.metric.latencyStatus === a.a.Fail ? "red" : "green";
                        return r.createElement("span", {
                            className: "latency-metrics__item-number latency-metrics__item-" + e
                        }, Math.round(this.props.metric.value), " ms")
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return o
            })
        },
        jeWT: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TopNav_User_CurrentUser"
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
                                                value: "isSharingActivity"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "visibility"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "presenceFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 209
                }
            };
            i.loc.source = {
                body: '#import "twilight/common/queries/presence-fragment.gql"\nquery TopNav_User_CurrentUser {\ncurrentUser {\nid\ndisplayName\nprofileImageURL(width: 70)\nsettings {\nisSharingActivity\nvisibility\n}\n...presenceFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("wsiY").definitions)), e.exports = i
        },
        jv9u: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("Ue10"),
                o = function() {
                    return i.createElement(a.Xa, {
                        padding: 1,
                        display: a.X.Flex,
                        alignItems: a.f.Center,
                        justifyContent: a.Wa.Center,
                        flexDirection: a.Aa.Column,
                        fullWidth: !0
                    }, i.createElement(a.Za, {
                        delay: 0
                    }), i.createElement(a.Xa, {
                        padding: {
                            top: 2
                        }
                    }, i.createElement(a.W, {
                        italic: !0
                    }, Object(r.d)("Fetching Bits", "BitsCard"))))
                };
            n.d(t, "a", function() {
                return o
            })
        },
        kduP: function(e, t, n) {
            "use strict";

            function i(e) {
                return "/directory/game/" + encodeURIComponent(e)
            }

            function r(e) {
                return "/communities/" + encodeURIComponent(e)
            }

            function a(e) {
                return "/events/" + encodeURIComponent(e)
            }

            function o(e) {
                return "/" + encodeURIComponent(e) + "/manager"
            }
            n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "d", function() {
                return o
            })
        },
        l0e4: function(e, t, n) {},
        lhih: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "g", function() {
                return o
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "d", function() {
                return l
            });
            var i = "AD",
                r = "BUNDLE",
                a = "first_time_purchase",
                o = "single_purchase",
                s = "prime_single_purchase",
                c = "black_friday_2017",
                l = "twitch_prime_2018"
        },
        "m+uL": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("mrSG"),
                a = n("/MKj"),
                o = n("fvjX"),
                s = n("ZS2+"),
                c = n("UUve"),
                l = n("1/iK"),
                u = n("aCAx"),
                d = n("kRBY"),
                p = n("q1tI"),
                m = n("oJmH"),
                f = n("/7QA"),
                h = n("4S1L"),
                g = n("8/mp"),
                v = n("yR8l"),
                b = n("V+GM"),
                y = n("NvVO"),
                k = n("GnwI"),
                S = n("5ELF"),
                _ = n("a5fV"),
                C = n("Gw3k"),
                E = n("V2by"),
                N = n.n(E),
                O = n("dSAD"),
                w = n.n(O),
                x = n("Ue10");
            n("FGgD");
            ! function(e) {
                e.Background = "turbo-banner-background"
            }(i || (i = {}));
            var T, D = function() {
                    var e = {
                        backgroundImage: "url(" + N.a + ")"
                    };
                    return p.createElement(x.Xa, {
                        className: "turbo-benefits__background",
                        position: x.fb.Relative
                    }, p.createElement("div", {
                        "data-test-selector": i.Background,
                        className: "turbo-benefits__banner",
                        style: e
                    }), p.createElement(x.Xa, {
                        position: x.fb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        display: x.X.Flex,
                        alignItems: x.f.Center,
                        justifyContent: x.Wa.Center
                    }, p.createElement(x.Xa, {
                        padding: 2
                    }, p.createElement("img", {
                        className: "turbo-benefits__logo",
                        src: w.a
                    }))))
                },
                I = n("aMXE"),
                A = n.n(I),
                F = n("GcG5"),
                P = n.n(F),
                R = n("J/lh"),
                B = n.n(R),
                U = n("z5eY"),
                L = n.n(U),
                j = n("gYQG"),
                X = n.n(j);
            n("hkLn");
            ! function(e) {
                e.Header = "turbo-benefits-header", e.List = "turbo-benefits-list"
            }(T || (T = {}));
            var W, M = function() {
                    var e = Object(f.d)("What's Included", "TurboLandingPage_Benefits"),
                        t = Object(f.d)("With Turbo, Twitch gets even better with features you can't get anywhere else.", "TurboLandingPage_Benefits"),
                        n = [{
                            title: Object(f.d)("Ad Free Viewing", "TurboLandingPage_Benefits"),
                            text: Object(f.d)("Watching with Turbo means no pre-rolls, no mid-rolls, no companions, and no display ads. You may still see promotions and ads that are directly embedded into a broadcast", "TurboLandingPage_Benefits"),
                            image: L.a
                        }, {
                            title: Object(f.d)("Chat Badge", "TurboLandingPage_Benefits"),
                            text: Object(f.d)("Represent Turbo proudly with an exclusive chat badge.", "TurboLandingPage_Benefits"),
                            image: A.a
                        }, {
                            title: Object(f.d)("Expanded Emote Set", "TurboLandingPage_Benefits"),
                            text: Object(f.d)("Choose from 2 additional sets of emotes. Glitch or monkeys; choose wisely (you can always change it later).", "TurboLandingPage_Benefits"),
                            image: B.a
                        }, {
                            title: Object(f.d)("Custom Chat Username Colors", "TurboLandingPage_Benefits"),
                            text: Object(f.d)("Stand out in chat with a custom username color.", "TurboLandingPage_Benefits"),
                            image: P.a
                        }, {
                            title: Object(f.d)("Extended Broadcast Storage", "TurboLandingPage_Benefits"),
                            text: Object(f.d)("Save your past broadcasts on Twitch for 60 days instead of the standard 14.", "TurboLandingPage_Benefits"),
                            image: X.a
                        }];
                    return p.createElement(x.Xa, {
                        alignItems: x.f.Center,
                        display: x.X.Flex,
                        justifyContent: x.Wa.Center,
                        overflow: x.ab.Visible,
                        margin: 1
                    }, p.createElement(x.Xa, null, p.createElement(x.Xa, {
                        margin: 1,
                        textAlign: x.Lb.Center,
                        "data-test-selector": T.Header
                    }, p.createElement(x.Xa, null, p.createElement(x.W, {
                        color: x.O.Alt2,
                        fontSize: x.Ca.Size5,
                        type: x.Pb.Strong
                    }, " ", e, " ")), p.createElement(x.Xa, {
                        margin: {
                            top: 1
                        }
                    }, p.createElement(x.W, {
                        fontSize: x.Ca.Size5
                    }, " ", t, " "))), p.createElement(x.Xa, {
                        className: "turbo-benefits__benefits-list",
                        "data-test-selector": T.List
                    }, n.map(function(e, t) {
                        return p.createElement(x.zb, {
                            key: t,
                            margin: {
                                bottom: 1
                            },
                            display: x.X.Flex,
                            elevation: 1,
                            background: x.r.Base,
                            alignItems: x.f.Center
                        }, p.createElement(x.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                left: 2
                            }
                        }, p.createElement(x.S, {
                            alt: e.title,
                            src: e.image
                        })), p.createElement(x.Xa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: 2
                        }, p.createElement(x.W, {
                            color: x.O.Alt2,
                            fontSize: x.Ca.Size5,
                            type: x.Pb.Strong
                        }, e.title), p.createElement(x.Xa, {
                            margin: {
                                top: 1
                            }
                        }, p.createElement(x.W, null, e.text))))
                    }))))
                },
                q = n("9C/b"),
                G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.props.isSubscribed ? t.props.history.push({
                                pathname: "subscriptions?tab=other"
                            }) : t.props.showSubscriptionCheckoutModal ? t.checkAndDisplaySubscriptionCheckout() : t.props.history.push({
                                pathname: "/products/turbo"
                            })
                        }, t.renderButton = function() {
                            return t.props.isSubscribed ? p.createElement(x.z, {
                                fullWidth: !0,
                                size: x.D.Large,
                                onClick: t.handleClick
                            }, Object(f.d)("View Your Subscription", "TurboPageSubscribe")) : p.createElement(x.z, {
                                fullWidth: !0,
                                size: x.D.Large,
                                onClick: t.handleClick
                            }, Object(f.d)("Subscribe Now", "TurboPageSubscribe"))
                        }, t.checkAndDisplaySubscriptionCheckout = function() {
                            Object(c.d)(), f.n.set(c.b, "turbo");
                            var e = f.n.get(c.b, "");
                            t.props.sessionUser && t.props.showSubscriptionCheckoutModal ? t.props.showSubscriptionCheckoutModal({
                                productName: e
                            }) : t.props.showLoginModal && t.props.showLoginModal()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.renderButton()
                    }, t
                }(p.Component),
                z = Object(q.a)(G),
                V = n("3lt/"),
                H = (n("7CcZ"), n("WpKR"));
            ! function(e) {
                e.MinimalHeader = "turbolandingpage-minheader", e.FullHeader = "turbolandingpage-fullheader", e.MobileButton = "turbolandingpage-mobilebutton", e.WebButton = "turbolandingpage-webbutton", e.Price = "turbolandingpage-price"
            }(W || (W = {}));
            var Q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.componentDidMount = function() {
                            t.props.data && t.props.latencyTracking.reportInteractive()
                        }, t.componentDidUpdate = function() {
                            (t.props.data.subscriptionProduct || t.props.data.error) && t.props.latencyTracking.reportInteractive()
                        }, t.renderPrice = function() {
                            if (!t.props.data.subscriptionProduct || t.isSubscribed()) return null;
                            var e = t.props.data.subscriptionProduct,
                                n = Object(_.a)(Object(_.b)(e.priceInfo.total, e.priceInfo.exponent), e.priceInfo.currency);
                            return p.createElement(x.Xa, {
                                "data-test-selector": W.Price
                            }, Object(f.d)("<x:strong>{price}</x:strong> / Month", {
                                "x:strong": function(e) {
                                    return p.createElement("strong", null, e)
                                },
                                price: n
                            }, "TurboLandingPage"))
                        }, t.isSubscribed = function() {
                            var e = t.props.data.subscriptionProduct;
                            return !!(e && e.self && e.self.benefit)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return p.createElement(x.zb, {
                            fullHeight: !0,
                            fullWidth: !0,
                            background: x.r.Alt2
                        }, p.createElement(g.b, null, p.createElement(p.Fragment, null, p.createElement(x.Xa, {
                            display: x.X.Hide,
                            breakpointMedium: {
                                display: x.X.Inline
                            },
                            "data-test-selector": W.FullHeader
                        }, p.createElement(C.a, null)), p.createElement(x.Xa, {
                            display: x.X.Inline,
                            breakpointMedium: {
                                display: x.X.Hide
                            },
                            "data-test-selector": W.MinimalHeader
                        }, p.createElement(S.a, null)), p.createElement(D, null), p.createElement(M, null), p.createElement(x.Xa, {
                            alignItems: x.f.Center,
                            display: x.X.Flex,
                            justifyContent: x.Wa.Center,
                            margin: 1,
                            flexDirection: x.Aa.Column
                        }, p.createElement(x.Xa, {
                            className: "turbo-landing__web-sub",
                            display: x.X.Hide,
                            breakpointMedium: {
                                display: x.X.Flex
                            },
                            "data-test-selector": W.WebButton
                        }, p.createElement(z, {
                            isSubscribed: this.isSubscribed(),
                            showSubscriptionCheckoutModal: this.props.showSubscriptionCheckoutModal,
                            showLoginModal: this.props.showLoginModal,
                            sessionUser: this.props.sessionUser
                        })), p.createElement(x.Xa, {
                            className: "turbo-landing__mobile-sub",
                            display: x.X.Flex,
                            breakpointMedium: {
                                display: x.X.Hide
                            },
                            "data-test-selector": W.MobileButton
                        }, p.createElement(z, {
                            isSubscribed: this.isSubscribed(),
                            sessionUser: this.props.sessionUser
                        })), this.renderPrice()), p.createElement(x.Xa, {
                            display: x.X.Hide,
                            breakpointMedium: {
                                display: x.X.Inline
                            }
                        }, p.createElement(h.a, null)))))
                    }, t
                }(p.Component),
                K = Object(m.compose)(Object(v.a)(H, {
                    options: function() {
                        return {
                            variables: {
                                name: "turbo"
                            }
                        }
                    }
                }), Object(k.b)("TurboLandingPage", {
                    destination: y.a.TurboLandingPage
                }), Object(b.a)({
                    location: V.PageviewLocation.TurboLandingPage
                }))(Q);
            var Y = Object(a.connect)(function(e) {
                return {
                    sessionUser: Object(d.e)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    showLoginModal: Object(c.e)(l.a.ChannelSubscriptionButton),
                    showSubscriptionCheckoutModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(u.d)(s.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([n.e(0), n.e(191)]).then(n.bind(null, "KJv/"))
                            },
                            componentProps: t
                        })
                    }
                }, e)
            })(K);
            n.d(t, "TurboLandingPage", function() {
                return Y
            })
        },
        m98o: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("D7An"),
                s = n("ua1/"),
                c = n("NSwr");

            function l(e, t) {
                var n = e.activity,
                    i = e.availability;
                if (!n) return null;
                switch (n.type) {
                    case s.a.Playing:
                        return n.game && n.game.name ? Object(a.d)("playing {game}", {
                            game: n.game.name
                        }, "PresenceActivity") : Object(a.d)("playing", "PresenceActivity");
                    case s.a.Watching:
                        var r = function(e) {
                            if (e && e.type === s.a.Watching && e.user) return e.user.hosting && e.user.hosting.displayName ? {
                                isHost: !0,
                                displayName: e.user.hosting.displayName
                            } : {
                                isHost: !1,
                                displayName: e.user.displayName
                            };
                            return null
                        }(n);
                        return r ? i && i === c.a.Offline ? !t && r.isHost ? Object(a.d)("was watching {user} with the {community} community", {
                            user: r.displayName,
                            community: n.user.displayName
                        }, "PresenceActivity") : !t && n.user.stream && n.user.stream.game && n.user.stream.game.name ? Object(a.d)("was watching {user} stream {game}", {
                            user: r.displayName,
                            game: n.user.stream.game.name
                        }, "PresenceActivity") : Object(a.d)("was watching {user}", {
                            user: r.displayName
                        }, "PresenceActivity") : !t && r.isHost ? Object(a.d)("watching {user} with the {community} community", {
                            user: r.displayName,
                            community: n.user.displayName
                        }, "PresenceActivity") : !t && n.user.stream && n.user.stream.game && n.user.stream.game.name ? Object(a.d)("watching {user} stream {game}", {
                            user: r.displayName,
                            game: n.user.stream.game.name
                        }, "PresenceActivity") : Object(a.d)("watching {user}", {
                            user: r.displayName
                        }, "PresenceActivity") : null;
                    case s.a.Streaming:
                        return n.stream && n.stream.game && n.stream.game.name ? Object(a.d)("streaming {game}", {
                            game: n.stream.game.name
                        }, "PresenceActivity") : Object(a.d)("streaming", "PresenceActivity");
                    default:
                        return null
                }
            }

            function u(e, t) {
                if (!t) return null;
                switch (t.type) {
                    case s.a.Streaming:
                        return "/" + e;
                    case s.a.Watching:
                        return "/" + t.user.login;
                    default:
                        return null
                }
            }

            function d(e) {
                var t = Object(a.d)("Online", "PresenceAvailability");
                switch (e) {
                    case c.a.Idle:
                    case c.a.Away:
                        return Object(a.d)("Away", "PresenceAvailability");
                    case c.a.Busy:
                        return Object(a.d)("Busy", "PresenceAvailability");
                    case c.a.Offline:
                        return Object(a.d)("Offline", "PresenceAvailability");
                    case c.a.Invisible:
                        return Object(a.d)("Invisible", "PresenceAvailability");
                    case c.a.Online:
                    default:
                        return t
                }
            }
            var p = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this,
                            i = a.p.experiments.getAssignment(o.b.ExtendedPresence);
                        return n.state = {
                            hasExtendedRichPresence: "variant_a" === i
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.activity,
                            n = e.availability,
                            i = e.condensed,
                            a = this.state.hasExtendedRichPresence ? {
                                activity: t,
                                availability: n
                            } : {
                                activity: t
                            };
                        return r.createElement("span", {
                            "data-a-target": "presence-text"
                        }, l(a, i) || d(n))
                    }, t
                }(r.Component),
                m = n("Ue10"),
                f = function(e) {
                    var t = m.hb.Online;
                    switch (e.availability) {
                        case c.a.Idle:
                        case c.a.Away:
                            t = m.hb.Away;
                            break;
                        case c.a.Busy:
                            t = m.hb.Busy;
                            break;
                        case c.a.Invisible:
                            t = m.hb.Invisible;
                            break;
                        case c.a.Offline:
                            t = m.hb.Offline;
                            break;
                        case c.a.Online:
                            t = m.hb.Online;
                            break;
                        default:
                            t = m.hb.Online
                    }
                    return r.createElement(m.gb, {
                        status: t,
                        "data-test-selector": "presence-indicator"
                    })
                },
                h = n("/aPz");
            var g = n("0Log"),
                v = n("JbHs"),
                b = n("mR7g");

            function y(e) {
                return function(t) {
                    return function(e) {
                        return function(t) {
                            return function(n) {
                                function a(t) {
                                    var i = n.call(this, t) || this;
                                    return i.options = e(t), i
                                }
                                return i.__extends(a, n), a.prototype.componentDidMount = function() {
                                    this.options.skip || this.subscribe(this.options)
                                }, a.prototype.componentWillReceiveProps = function(t) {
                                    var n = e(t);
                                    n.topic === this.options.topic || n.skip || (this.unsubscribe(), this.subscribe(n)), this.options = n
                                }, a.prototype.componentWillUnmount = function() {
                                    this.unsubscribe()
                                }, a.prototype.render = function() {
                                    return r.createElement(t, i.__assign({}, this.props))
                                }, a.prototype.subscribe = function(e) {
                                    this.unsubscriber = Object(h.y)({
                                        fragment: e.fragment,
                                        id: e.id,
                                        topic: e.topic,
                                        type: e.type,
                                        mutator: e.mutator
                                    })
                                }, a.prototype.unsubscribe = function() {
                                    this.unsubscriber && this.unsubscriber()
                                }, a
                            }(r.Component)
                        }
                    }(function(t) {
                        var n = e(t);
                        return {
                            id: "User:" + n.id,
                            skip: n.skip,
                            fragment: b,
                            topic: Object(h.s)(n.currentUserID),
                            type: g.PubsubMessageType.Presence,
                            mutator: function(e, t) {
                                if (!t) return null;
                                var i = n.id;
                                if (e.data.user_id !== +i) return t;
                                var r = "$User:" + i + ".activity";
                                return t.availability = e.data.availability.toUpperCase(), t.activity = Object(v.a)(e.data.activity, r), t
                            }
                        }
                    })(t)
                }
            }
            n.d(t, "a", function() {
                return p
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, !1, function() {
                return y
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, !1, function() {
                return d
            })
        },
        mHh5: function(e, t, n) {},
        mR7g: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "currentUser"
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
                                value: "availability"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "activity"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Watching"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "user"
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
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Streaming"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "stream"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "game"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "name"
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
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Playing"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "game"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "name"
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
                    end: 204
                }
            };
            n.loc.source = {
                body: "fragment currentUser on User {\nid\nlogin\ndisplayName\navailability\nactivity {\ntype\n... on Watching {\nuser {\ndisplayName\n}\n}\n... on Streaming {\nstream {\ngame {\nname\n}\n}\n}\n... on Playing {\ngame {\nname\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        mZsS: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
                }(i || (i = {}))
        },
        miXC: function(e, t, n) {},
        myUo: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TopNav_PrimeUpsell_CurrentUser"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasTurbo"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 105
                }
            };
            n.loc.source = {
                body: "query TopNav_PrimeUpsell_CurrentUser {\ncurrentUser {\nid\nhasPrime\nhasTurbo\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        oOol: function(e, t, n) {},
        oSPo: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("eJ65"),
                c = n("yR8l"),
                l = n("eDVu"),
                u = n("zB42"),
                d = n("0Log"),
                p = n("geRD"),
                m = n("/aPz"),
                f = n("kz7j"),
                h = n("GnwI"),
                g = n("8/mp"),
                v = n("oJmH"),
                b = n("3qZk"),
                y = n.n(b),
                k = n("UptD"),
                S = n("17x9"),
                _ = n("6x+I"),
                C = n("2xye"),
                E = new Set(["affiliateinvite", "chatroommention", "feedcomment", "partneragreementupdate", "partnerinvite"]);

            function N(e, t) {
                var n, i = {},
                    a = function(e) {
                        var t = e.actions.filter(function(e) {
                            return "click" === e.type
                        });
                        return t.length > 0 ? t[0].url : ""
                    }(e);
                if (!a) return i;
                try {
                    n = new URL(a)
                } catch (t) {
                    return o.k.error(t.toString(), a + " was malformed from notification id:[" + e.id + "]"), i
                }
                return ! function(e, t) {
                    if (E.has(e)) return !1;
                    return "https://www.twitch.tv" === t.origin
                }(e.type, n) ? (i.linkTo = function(e, t, n) {
                    var i = e.split("?");
                    if (1 === i.length) return e + "?tt_content=" + t + "&tt_medium=" + n;
                    var a = r.parse(i[1]);
                    return a.tt_content = a.tt_content ? a.tt_content : t, a.tt_medium = a.tt_medium ? a.tt_medium : n, [i[0], r.stringify(a, {
                        encode: !1
                    })].join("?")
                }(n.toString(), e.type, t), i.targetBlank = !0) : i.linkTo = {
                    pathname: n.pathname,
                    search: n.search,
                    state: {
                        content: e.type,
                        medium: t
                    }
                }, i
            }
            var O = {};
            var w = {
                    Center: "center",
                    Toast: "toast",
                    Browser: "browser"
                },
                x = {
                    Open: "open",
                    Close: "close",
                    MarkAllRead: "mark_all_read",
                    SettingsLink: "settings_click"
                },
                T = {
                    PrimaryCta: "primary_cta",
                    Dismiss: "dismiss"
                },
                D = function(e) {
                    var t = {
                        notification_id: e.notification.id,
                        notification_type: e.notification.type,
                        ui_context: e.uiContext
                    };
                    o.o.track(C.SpadeEventType.NotificationImpression, t)
                },
                I = function(e) {
                    var t = {
                        unseen_view_count: e.unseenCount,
                        action: e.action
                    };
                    o.o.track(C.SpadeEventType.NotificationCenterInteraction, t)
                },
                A = function(e) {
                    var t = {
                        notification_id: e.notification.id,
                        notification_type: e.notification.type,
                        ui_context: e.uiContext,
                        action: e.action
                    };
                    o.o.track(C.SpadeEventType.NotificationInteraction, t)
                },
                F = n("Ue10"),
                P = (n("vfD6"), "persistent-notification__delete"),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.impressionEventFired = !1, t.isVisible = function(e) {
                            if (null !== t.element) {
                                var n = t.element.getBoundingClientRect();
                                return n.top < e.bottom && n.bottom > e.top
                            }
                            return !1
                        }, t.setRef = function(e) {
                            return t.element = e
                        }, t.deleteNotification = function() {
                            A({
                                uiContext: w.Center,
                                notification: t.props.data,
                                action: T.Dismiss
                            }), t.props.onDeleteNotification(t.props.data.id)
                        }, t.clickNotification = function() {
                            A({
                                uiContext: w.Center,
                                notification: t.props.data,
                                action: T.PrimaryCta
                            }), t.props.onViewNotification(t.props.data.id)
                        }, t.renderDeleteNotification = function() {
                            return a.createElement(F.Xa, {
                                className: "persistent-notification__delete",
                                padding: {
                                    top: 1,
                                    left: 1,
                                    right: .5
                                },
                                position: F.fb.Absolute
                            }, a.createElement(F.Xa, {
                                display: F.X.Flex,
                                flexWrap: F.Ba.NoWrap,
                                alignItems: F.f.Start
                            }, a.createElement(F.A, {
                                ariaLabel: "delete-notification",
                                "data-test-selector": P,
                                icon: F.pb.Close,
                                size: F.B.Small,
                                onClick: t.deleteNotification
                            })))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive();
                        var e = this.context.registerReceiver;
                        e ? this.unregister = e(this) : o.k.warn("<PersistentNotification /> initialized missing a <ScrollableArea /> provider")
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return a.createElement(F.Xa, {
                            className: "persistent-notification",
                            position: F.fb.Relative,
                            refDelegate: this.setRef,
                            "data-test-selector": "persistent-notification"
                        }, a.createElement(F.zb, {
                            display: F.X.Flex,
                            className: this.props.data.isRead ? "persistent-notification__read" : "persistent-notification__unread",
                            borderBottom: !0,
                            flexWrap: F.Ba.NoWrap
                        }, a.createElement(F.Ua, i.__assign({
                            "data-test-selector": "persistent-notification__click",
                            onClick: this.clickNotification
                        }, N(this.props.data, C.PageviewMedium.NotificationCenter), {
                            type: F.Va.Alpha
                        }), a.createElement(F.Xa, {
                            className: "persistent-notification__area",
                            display: F.X.Flex,
                            flexWrap: F.Ba.NoWrap,
                            padding: {
                                top: 1,
                                bottom: 1,
                                left: 1,
                                right: 3
                            }
                        }, a.createElement(F.Xa, null, a.createElement(F.I, {
                            aspect: F.p.Aspect1x1,
                            src: this.props.data.thumbnailURL,
                            alt: Object(o.d)("Notification center item thumbnail", "OnsiteNotifications"),
                            size: F.J.Size4,
                            borderRadius: F.x.Medium
                        })), a.createElement(F.Xa, {
                            display: F.X.Flex,
                            flexDirection: F.Aa.Column,
                            flexWrap: F.Ba.NoWrap,
                            margin: {
                                x: 1
                            }
                        }, a.createElement(F.Xa, {
                            className: "persistent-notification__body",
                            overflow: F.ab.Hidden,
                            "data-test-selector": "persistent-notification__body"
                        }, a.createElement(F.W, {
                            type: F.Pb.Span,
                            color: F.O.Alt
                        }, a.createElement(_, {
                            source: this.props.data.body || ""
                        }))), a.createElement(F.Xa, {
                            display: F.X.Flex,
                            alignItems: F.f.Center,
                            flexShrink: 0,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(F.ob, {
                            asset: function(e, t) {
                                return e in O ? O[e] : t
                            }(this.props.data.type, F.pb.MessagesSC),
                            height: 12,
                            width: 12,
                            type: F.qb.Alt2
                        }), a.createElement(F.Xa, {
                            margin: {
                                left: .5
                            }
                        }, a.createElement(F.W, {
                            type: F.Pb.Span,
                            color: F.O.Alt2
                        }, Object(o.h)(new Date(this.props.data.updatedAt)))))))), this.renderDeleteNotification()))
                    }, t.prototype.checkVisible = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            return i.__generator(this, function(t) {
                                return !this.impressionEventFired && this.isVisible(e) && (D({
                                    uiContext: w.Center,
                                    notification: this.props.data
                                }), this.impressionEventFired = !0), [2]
                            })
                        })
                    }, t.contextTypes = {
                        registerReceiver: S.func
                    }, t = i.__decorate([Object(h.b)("PersistentNotification")], t)
                }(a.Component),
                B = n("9aiH"),
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isRead: !1
                        }, t.createNotificationData = function() {
                            return {
                                id: "friendrequests",
                                type: "friendrequests",
                                body: Object(o.d)("{count, plural, one {You have # new friend request} other {You have # new friend requests}}", {
                                    count: t.props.count
                                }, "FriendRequestsNotification"),
                                createdAt: t.props.date,
                                updatedAt: t.props.date,
                                isRead: t.props.isOldNotification || t.state.isRead,
                                thumbnailURL: y.a,
                                actions: [{
                                    body: "View",
                                    type: "click",
                                    url: "https://www.twitch.tv/friends/requests"
                                }]
                            }
                        }, t.clearUnseenCount = function() {
                            Object(p.e)(B, {}, function(e) {
                                return e.currentUser.incomingFriendRequests.totalUnreadCount = 0, e
                            }), t.props.clearUnreadFriendRequests().then(function() {}).catch(function(e) {
                                return o.k.error(e, "[FriendRequestsNotification] Failed to clear unread requests.")
                            })
                        }, t.viewFriendRequests = function() {
                            t.setState({
                                isRead: !0
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(R, {
                            key: "friendRequestsNotification",
                            data: this.createNotificationData(),
                            onDeleteNotification: this.clearUnseenCount,
                            onViewNotification: this.viewFriendRequests
                        })
                    }, t
                }(a.Component),
                L = Object(v.compose)(Object(c.a)(k, {
                    name: "clearUnreadFriendRequests"
                }))(U),
                j = (n("5SyA"), "center-window__empty"),
                X = o.k.withCategory("onsite-notifications-center-window"),
                W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoadingMore: !1
                        }, t.renderContent = function() {
                            return !t.props.hasInitiallyLoaded || t.props.data.length || t.props.friendRequestsData ? [t.mapPersistentNotificationElements(), t.renderContentFooter()] : t.renderEmptyCenterWindowElement()
                        }, t.renderContentFooter = function() {
                            var e = !t.props.hasInitiallyLoaded || t.state.isLoadingMore ? a.createElement(F.Za, {
                                delay: 0,
                                fillContent: !0
                            }) : a.createElement(F.ob, {
                                asset: F.pb.LogoGlitch,
                                width: 24,
                                height: 24,
                                type: F.qb.Alt2
                            });
                            return a.createElement(F.Xa, {
                                className: "center-window__content-footer",
                                key: "center-window__content-footer",
                                display: F.X.Flex,
                                flexDirection: F.Aa.Column,
                                justifyContent: F.Wa.Center,
                                alignItems: F.f.Center,
                                textAlign: F.Lb.Center,
                                padding: 1,
                                flexGrow: 1
                            }, e)
                        }, t.mapPersistentNotificationElements = function() {
                            var e = t.props.data.map(function(e) {
                                return a.createElement(R, {
                                    key: "onsite-notification-" + e.node.id,
                                    data: e.node,
                                    onDeleteNotification: t.props.onDeleteNotification,
                                    onViewNotification: t.props.onViewNotification
                                })
                            });
                            return t.props.friendRequestsData && e.unshift(a.createElement(L, i.__assign({
                                key: "friend-requests"
                            }, t.props.friendRequestsData))), e
                        }, t.renderEmptyCenterWindowElement = function() {
                            return a.createElement(F.zb, {
                                "data-test-selector": j,
                                className: "center-window__empty-state",
                                background: F.r.Alt,
                                display: F.X.Flex,
                                justifyContent: F.Wa.Center,
                                alignItems: F.f.Center,
                                textAlign: F.Lb.Center,
                                flexDirection: F.Aa.Column,
                                padding: 2,
                                fullWidth: !0
                            }, a.createElement(F.ob, {
                                asset: F.pb.LogoGlitch,
                                width: 100,
                                height: 100,
                                type: F.qb.Placeholder
                            }), a.createElement(F.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(F.W, {
                                type: F.Pb.H5,
                                color: F.O.Alt2
                            }, Object(o.d)("Hooray! You're in the clear!", "OnsiteNotifications"))))
                        }, t.areAllNotificationsRead = function() {
                            var e = t.props.data.filter(function(e) {
                                    return e.node.isRead
                                }).length === t.props.data.length,
                                n = !t.props.friendRequestsData || !!t.props.friendRequestsData && t.props.friendRequestsData.isOldNotification;
                            return e && n
                        }, t.loadMore = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (this.state.isLoadingMore) return [3, 5];
                                            this.setState({
                                                isLoadingMore: !0
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onLoadMore()];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), X.error(e, "unexpected loadMore failure"), [3, 4];
                                        case 4:
                                            this.setState({
                                                isLoadingMore: !1
                                            }), t.label = 5;
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return a.createElement(F.zb, {
                            className: "center-window",
                            background: F.r.Alt
                        }, this.renderNotificationsHeaderElement(), a.createElement(g.b, {
                            className: "center-window__scroll",
                            contentClassName: "center-window__scroll-container",
                            suppressScrollX: !0
                        }, a.createElement(F.Xa, {
                            "data-test-selector": "center-window__content",
                            display: F.X.Flex,
                            alignItems: F.f.Center,
                            flexDirection: F.Aa.Column,
                            flexWrap: F.Ba.NoWrap,
                            flexGrow: 1
                        }, this.renderContent(), a.createElement(g.a, {
                            enabled: this.props.data.length > 0 && !!this.props.data[this.props.data.length - 1].cursor,
                            contentLength: this.props.data.length,
                            loadMore: this.loadMore,
                            pixelThreshold: 200
                        }))), this.renderUnreadNotificationsFooterElement())
                    }, t.prototype.renderMarkAsRead = function() {
                        return 0 !== this.props.data.length || this.props.friendRequestsData ? a.createElement(a.Fragment, null, a.createElement(F.U, {
                            disabled: this.areAllNotificationsRead(),
                            onClick: this.props.onReadAllNotifications
                        }, Object(o.d)("Mark All as Read", "OnsiteNotifications")), a.createElement(F.Xa, {
                            margin: {
                                x: 1
                            }
                        }, " • ")) : null
                    }, t.prototype.renderSettingsLink = function() {
                        return a.createElement(F.U, {
                            onClick: this.props.onRedirectToSettings
                        }, Object(o.d)("Settings", "OnsiteNotifications"))
                    }, t.prototype.renderNotificationsHeaderElement = function() {
                        return a.createElement(F.zb, {
                            className: "center-window__header",
                            "data-test-selector": "center-window__header",
                            background: F.r.Alt,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: F.X.Flex,
                            alignItems: F.f.Center,
                            justifyContent: F.Wa.Between,
                            borderBottom: !0
                        }, a.createElement(F.W, {
                            type: F.Pb.H6,
                            color: F.O.Alt2,
                            bold: !0
                        }, Object(o.d)("Notifications", "OnsiteNotifications")), a.createElement(F.zb, {
                            color: F.O.Alt,
                            display: F.X.Flex
                        }, this.renderMarkAsRead(), this.renderSettingsLink()))
                    }, t.prototype.renderUnreadNotificationsFooterElement = function() {
                        var e = 0 === this.props.newNotificationsCount ? null : a.createElement(F.W, {
                            type: F.Pb.H6,
                            color: F.O.Alt2
                        }, Object(o.d)("{num, plural, one {1 New Notification} other {{num, number} New Notifications} }", {
                            num: this.props.newNotificationsCount
                        }, "OnsiteNotifications"));
                        return a.createElement(F.zb, {
                            className: "center-window__footer",
                            "data-test-selector": "center-window__footer",
                            background: F.r.Alt,
                            padding: .5,
                            alignItems: F.f.Center,
                            textAlign: F.Lb.Center,
                            borderTop: !0
                        }, e)
                    }, t
                }(a.Component),
                M = Object(h.b)("OnsiteNotificationsCenterWindow")(W),
                q = n("/MKj"),
                G = n("kRBY"),
                z = n("x7UT"),
                V = (n("bjGK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.closeTimeout = 0, t.close = function() {
                            A({
                                uiContext: w.Toast,
                                notification: t.props.item,
                                action: T.Dismiss
                            }), t.props.close(t.props.index)
                        }, t.onMouseEnter = function() {
                            t.cancelCloseTimer()
                        }, t.onMouseLeave = function() {
                            t.scheduleCloseTimer()
                        }, t.view = function() {
                            A({
                                uiContext: w.Toast,
                                notification: t.props.item,
                                action: T.PrimaryCta
                            }), t.props.view(t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.scheduleCloseTimer()
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), D({
                            uiContext: w.Toast,
                            notification: this.props.item
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        this.cancelCloseTimer()
                    }, t.prototype.render = function() {
                        return a.createElement(F.i, {
                            type: F.n.BounceIn,
                            duration: F.k.Medium,
                            enabled: !0
                        }, a.createElement("div", {
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            "data-test-selector": "onsite-notification-toast__mouse-enter-detector"
                        }, a.createElement(F.zb, {
                            className: "onsite-notification-toast",
                            background: F.r.Base,
                            display: F.X.Flex,
                            flexWrap: F.Ba.NoWrap,
                            margin: {
                                bottom: 1
                            },
                            border: !0
                        }, a.createElement(F.Ua, i.__assign({
                            onClick: this.view,
                            type: F.Va.Alpha
                        }, N(this.props.item, C.PageviewMedium.NotificationToast)), a.createElement(F.Xa, {
                            className: "onsite-notification-toast__container",
                            display: F.X.Flex,
                            flexWrap: F.Ba.NoWrap
                        }, a.createElement(F.Xa, {
                            padding: {
                                y: 1,
                                left: 1
                            },
                            display: F.X.Flex,
                            flexShrink: 0
                        }, a.createElement(F.I, {
                            aspect: F.p.Aspect1x1,
                            src: this.props.item.thumbnailURL,
                            alt: Object(o.d)("Notification toast thumbnail", "OnsiteNotifications"),
                            size: F.J.Size4
                        })), a.createElement(F.Xa, {
                            display: F.X.Flex,
                            flexDirection: F.Aa.Column,
                            flexWrap: F.Ba.NoWrap,
                            flexGrow: 1,
                            padding: 1
                        }, a.createElement(F.Xa, {
                            className: "onsite-notification-toast__body",
                            overflow: F.ab.Hidden
                        }, a.createElement(F.zb, {
                            color: F.O.Alt
                        }, a.createElement(_, {
                            source: this.props.item.body
                        }))), a.createElement(F.Xa, {
                            margin: {
                                top: .5
                            },
                            flexShrink: 0
                        }, a.createElement(F.zb, {
                            color: F.O.Alt2
                        }, Object(o.h)(new Date(this.props.item.updatedAt))))))), this.renderActions())))
                    }, t.prototype.renderActions = function() {
                        return a.createElement(F.zb, {
                            className: "onsite-notification-toast__action-wrapper",
                            display: F.X.Flex,
                            alignContent: F.e.Stretch,
                            flexGrow: 0,
                            flexShrink: 0,
                            flexDirection: F.Aa.Column,
                            borderLeft: !0
                        }, a.createElement(F.zb, {
                            className: "onsite-notification-toast__action",
                            display: F.X.Flex,
                            alignContent: F.e.Stretch,
                            flexGrow: 1,
                            borderBottom: !0
                        }, a.createElement(F.Ua, i.__assign({
                            onClick: this.view,
                            "data-test-selector": "onsite-notification-toast__view",
                            type: F.Va.Alpha
                        }, N(this.props.item, C.PageviewMedium.NotificationToast)), a.createElement(F.zb, {
                            display: F.X.Flex,
                            alignItems: F.f.Center,
                            justifyContent: F.Wa.Center,
                            fullHeight: !0,
                            flexGrow: 1,
                            padding: .5
                        }, a.createElement(F.W, {
                            color: F.O.Link
                        }, this.primaryCTAText())))), a.createElement(F.zb, {
                            className: "onsite-notification-toast__action",
                            display: F.X.Flex,
                            alignContent: F.e.Stretch,
                            flexGrow: 1
                        }, a.createElement(F.Ua, {
                            onClick: this.close,
                            "data-test-selector": "onsite-notification-toast__close",
                            type: F.Va.Alpha
                        }, a.createElement(F.zb, {
                            display: F.X.Flex,
                            alignItems: F.f.Center,
                            justifyContent: F.Wa.Center,
                            fullHeight: !0,
                            flexGrow: 1,
                            padding: .5
                        }, a.createElement(F.W, {
                            color: F.O.Alt2
                        }, Object(o.d)("Close", "OnsiteNotifications"))))))
                    }, t.prototype.primaryCTAText = function() {
                        var e = this.props.item.actions.find(function(e) {
                            return "click" === e.type
                        });
                        return e ? e.body : Object(o.d)("View", "OnsiteNotifications")
                    }, t.prototype.scheduleCloseTimer = function() {
                        var e = this;
                        this.cancelCloseTimer(), this.closeTimeout = setTimeout(function() {
                            e.props.close(e.props.index), e.closeTimeout = 0
                        }, 1e4)
                    }, t.prototype.cancelCloseTimer = function() {
                        this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = 0)
                    }, t
                }(a.Component)),
                H = Object(h.b)("OnsiteNotificationToast")(V);

            function Q(e, t) {
                return {
                    id: e.id,
                    body: e.body_md,
                    type: e.type,
                    thumbnailURL: e.thumbnail_url,
                    createdAt: e.created_at,
                    updatedAt: e.updated_at,
                    isRead: e.read,
                    actions: e.actions.map(function(e) {
                        return {
                            body: e.body,
                            type: e.type,
                            url: e.url,
                            __typename: "OnsiteNotificationAction"
                        }
                    }),
                    isTransient: !t,
                    __typename: "OnsiteNotification"
                }
            }
            n("iLa+");
            var K, Y = o.k.withCategory("toast-manager"),
                $ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            notifications: []
                        }, t.view = function(e) {
                            var n = t.state.notifications[e];
                            t.props.onViewNotification(n.id, !n.isTransient), t.close(e)
                        }, t.close = function(e) {
                            var n = t.state.notifications.slice();
                            n.splice(e, 1), t.setState({
                                notifications: n
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.conditionallyInsertTestData()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.pubsub.messages.info,
                            n = e.pubsub.messages.info;
                        if (n && n.data.toast && (!t || n.data.notification.id !== t.data.notification.id || n.data.notification.updated_at !== t.data.notification.updated_at)) {
                            Y.debug("Received pubsub update", e.pubsub.messages.info);
                            var i = Q(n.data.notification, n.data.persistent);
                            this.onNewNotification(i)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(F.Xa, {
                            className: "onsite-notifications-toast-manager",
                            position: F.fb.Absolute,
                            margin: {
                                top: 5
                            },
                            "data-test-selector": "onsite-notifications-toast-manager"
                        }, this.renderToasts())
                    }, t.prototype.conditionallyInsertTestData = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return o.a.buildType !== u.a.Production && r.parse(window.location.search).onsite_test_data ? [4, n.e(82).then(n.bind(null, "Pm5e"))] : [3, 2];
                                    case 1:
                                        e = i.sent().MockOnsiteNotifications, t = e.getMockOnsiteNotificationModels(3), this.setState({
                                            notifications: t
                                        }), i.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.renderToasts = function() {
                        var e = this,
                            t = this.state.notifications.map(function(t, n) {
                                return a.createElement(H, {
                                    key: t.id,
                                    item: t,
                                    index: n,
                                    view: e.view,
                                    close: e.close
                                })
                            });
                        return 0 === t.length ? null : t
                    }, t.prototype.onNewNotification = function(e) {
                        var t = this.state.notifications.slice(),
                            n = t.findIndex(function(t) {
                                return t.id === e.id
                            });
                        n > -1 && t.splice(n, 1), t.unshift(e), t.length > 3 && t.pop(), this.setState({
                            notifications: t
                        })
                    }, t = i.__decorate([Object(h.b)("OnsiteNotificationToastManager"), Object(z.a)([{
                        topic: function(e) {
                            return Object(m.q)("" + (e.currentUser && e.currentUser.id))
                        },
                        mapMessageTypesToProps: (K = {}, K[d.PubsubMessageType.OnsiteNotificationCreate] = "info", K[d.PubsubMessageType.OnsiteNotificationUpdate] = "info", K),
                        skip: function(e) {
                            return !e.currentUser
                        }
                    }])], t)
                }(a.Component);
            var J = Object(q.connect)(function(e) {
                return {
                    currentUser: Object(G.e)(e)
                }
            })($);
            var Z = o.k.withCategory("onsite-pubsub-mutators");

            function ee(e, t) {
                return Z.debug("Received pubsub summary update", e), t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.summary && e.data.summary ? (t.currentUser.notifications.summary.lastSeenAt = e.data.summary.last_seen_at, t.currentUser.notifications.summary.unseenCount = e.data.summary.unseen_view_count, t) : t
            }

            function te(e, t) {
                if (Z.debug("Received pubsub notification update", e), !(t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.edges && t.currentUser.notifications.edges)) return t;
                if (function(e) {
                        return e.type === d.PubsubMessageType.OnsiteNotificationsRead
                    }(e)) {
                    var n = new Set(e.data.notification_ids),
                        r = t.currentUser.notifications.edges.map(function(e) {
                            return n.has(e.node.id) ? i.__assign({}, e, {
                                node: i.__assign({}, e.node, {
                                    isRead: !0
                                })
                            }) : e
                        });
                    t.currentUser.notifications.edges = r
                } else if (function(e) {
                        return e.type === d.PubsubMessageType.OnsiteNotificationCreate || e.type === d.PubsubMessageType.OnsiteNotificationUpdate
                    }(e)) {
                    if (e.data.persistent) {
                        var a = Q(e.data.notification, !0);
                        (r = ne(t.currentUser.notifications.edges, a.id)).unshift({
                            cursor: null,
                            node: a,
                            __typename: "OnsiteNotificationEdge"
                        }), t.currentUser.notifications.edges = r
                    }
                } else(function(e) {
                    return e.type === d.PubsubMessageType.OnsiteNotificationDelete
                })(e) && (t.currentUser.notifications.edges = ne(t.currentUser.notifications.edges, e.data.notification_id));
                return t
            }

            function ne(e, t) {
                return e.filter(function(e) {
                    return e.node.id !== t
                })
            }
            var ie = n("Je81"),
                re = n("IrUU"),
                ae = n("GgTn"),
                oe = n("1Ot3"),
                se = n("x73c");
            n("y3nP");
            n.d(t, "a", function() {
                return pe
            }), n.d(t, "b", function() {
                return ge
            });
            var ce = o.k.withCategory("onsite-notifications"),
                le = "onsite-notifications__badge",
                ue = "99+",
                de = 5e3,
                pe = 10,
                me = 100,
                fe = {
                    align: F.Tb.Center,
                    direction: F.Ub.Bottom,
                    label: ""
                },
                he = {
                    limit: pe,
                    cursor: ""
                },
                ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            newNotificationsCount: 0,
                            newFriendRequestsBadgeCount: 0,
                            isFriendRequestsNotificationUnread: !1
                        }, t.newNotificationsCountTimer = 0, t.hasInsertedSummaryData = !1, t.hasInsertedListNotificationsData = !1, t.hasReportedListNotificationsLoaded = !1, t.viewNotification = function(e, n) {
                            void 0 === n && (n = !0), t.centerWindowToggleBalloon.toggleBalloon(!1), n && t.readNotification(e)
                        }, t.conditionallyInsertSummaryTestData = function() {
                            t.summaryDataLoaded(t.props) && !t.hasInsertedSummaryData && o.a.buildType !== u.a.Production && r.parse(window.location.search).onsite_test_data && (t.hasInsertedSummaryData = !0, Object(p.e)(oe, i.__assign({}, t.props.summaryData.variables), function(e) {
                                return e.currentUser.notifications.summary.unseenCount = r.parse(window.location.search).onsite_test_data, e
                            }))
                        }, t.conditionallyInsertListNotificationsTestData = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.listDataLoaded() && !this.hasInsertedListNotificationsData && o.a.buildType !== u.a.Production && r.parse(window.location.search).onsite_test_data ? (this.hasInsertedListNotificationsData = !0, [4, n.e(82).then(n.bind(null, "Pm5e"))]) : [3, 2];
                                        case 1:
                                            e = t.sent().MockOnsiteNotifications, Object(p.e)(re, i.__assign({}, this.props.listData.variables), function(t) {
                                                return t.currentUser.notifications.edges = e.getMockOnsiteNotificationEdges(r.parse(window.location.search).onsite_test_data), t
                                            }), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t.summaryDataLoaded = function(e) {
                            return e.summaryData && !e.summaryData.loading && !e.summaryData.error && e.summaryData.currentUser && e.summaryData.currentUser.notifications && e.summaryData.currentUser.notifications.summary && e.summaryData.currentUser.incomingFriendRequests
                        }, t.listDataLoaded = function() {
                            return t.props.listData && t.props.listData.currentUser && t.props.listData.currentUser.notifications && void 0 !== t.props.listData.currentUser.notifications.edges
                        }, t.hasNewFriendRequests = function(e) {
                            var t = e.summaryData.currentUser;
                            if (t.incomingFriendRequests && t.incomingFriendRequests.newestEdge && t.incomingFriendRequests.newestEdge.createdAt) {
                                var n = new Date(t.incomingFriendRequests.newestEdge.createdAt),
                                    i = new Date(t.notifications.summary.lastSeenAt);
                                return t.incomingFriendRequests.totalUnreadCount > 0 && n > i
                            }
                            return !1
                        }, t.getFriendRequestsData = function() {
                            if (t.summaryDataLoaded(t.props)) {
                                var e = t.props.summaryData.currentUser;
                                if (e.incomingFriendRequests && e.incomingFriendRequests.newestEdge) {
                                    var n = e.incomingFriendRequests.totalUnreadCount,
                                        i = e.incomingFriendRequests.newestEdge.createdAt;
                                    return n && i ? {
                                        count: n,
                                        date: i,
                                        isOldNotification: !t.state.isFriendRequestsNotificationUnread
                                    } : void 0
                                }
                            }
                        }, t.toggleCenter = function(e) {
                            e || (t.props.stopDeferring(), t.getUnseenNotificationsAndApplyTimer(), t.viewNotifications()), I({
                                unseenCount: t.getUnseenNotificationsCount(t.props),
                                action: e ? x.Close : x.Open
                            })
                        }, t.getUnseenNotificationsAndApplyTimer = function() {
                            var e = t.state.newNotificationsCount;
                            t.summaryDataLoaded(t.props) && (e = t.getUnseenNotificationsCount(t.props), t.setState({
                                newNotificationsCount: e
                            })), t.clearTimeout(), e > 0 && (t.newNotificationsCountTimer = setTimeout(function() {
                                t.setState({
                                    newNotificationsCount: 0
                                }), t.clearTimeout()
                            }, de))
                        }, t.viewNotifications = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.summaryDataLoaded(this.props)) return [2];
                                            this.setState({
                                                newFriendRequestsBadgeCount: 0
                                            }), e = i.__assign({}, Object(p.a)({}), {
                                                optimisticResponse: {
                                                    viewedNotifications: {
                                                        user: {
                                                            notifications: {
                                                                summary: {
                                                                    unseenCount: 0,
                                                                    lastSeenAt: new Date,
                                                                    __typename: "OnsiteNotificationsSummary"
                                                                },
                                                                __typename: "OnsiteNotificationConnection"
                                                            },
                                                            __typename: "User"
                                                        },
                                                        __typename: "ViewedNotificationsPayload"
                                                    }
                                                }
                                            }), Object(p.e)(oe, i.__assign({}, this.props.summaryData.variables), function(e) {
                                                return e.currentUser.notifications.summary.unseenCount = 0, e
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.viewNotifications(e)];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            return t = n.sent(), ce.error(t, "failure to read message..."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.getUnseenNotificationsCount = function(e) {
                            return t.summaryDataLoaded(e) ? e.summaryData.currentUser.notifications.summary.unseenCount + t.state.newFriendRequestsBadgeCount : 0
                        }, t.renderUnseenNotificationsBadge = function() {
                            var e = t.getUnseenNotificationsCount(t.props);
                            if (e > 0) {
                                var n = e >= 100 ? ue : e.toString();
                                return a.createElement(F.Xa, {
                                    className: "onsite-notifications__badge",
                                    "data-test-selector": le,
                                    position: F.fb.Absolute
                                }, a.createElement(F.cb, {
                                    label: n,
                                    type: F.db.Notification
                                }))
                            }
                        }, t.deleteNotification = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            t = i.__assign({}, Object(p.a)({
                                                id: e
                                            }), {
                                                optimisticResponse: {
                                                    deleteNotification: {
                                                        __typename: "DeleteNotificationPayload",
                                                        notification: {
                                                            __typename: "OnsiteNotification",
                                                            id: e
                                                        }
                                                    }
                                                }
                                            }), this.listDataLoaded() && Object(p.e)(re, i.__assign({}, this.props.listData.variables), function(t) {
                                                return t.currentUser.notifications.edges = t.currentUser.notifications.edges.filter(function(t) {
                                                    return t.node.id !== e
                                                }), t
                                            }), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.deleteOnsiteNotification(t)];
                                        case 2:
                                            return r.sent(), [3, 4];
                                        case 3:
                                            return n = r.sent(), ce.error(n, "Unable to delete notification " + e), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.readAllNotifications = function() {
                            if (t.setState({
                                    isFriendRequestsNotificationUnread: !1
                                }), t.listDataLoaded()) {
                                I({
                                    unseenCount: t.getUnseenNotificationsCount(t.props),
                                    action: x.MarkAllRead
                                });
                                var e = t.props.listData.currentUser.notifications.edges.filter(function(e) {
                                    return !e.node.isRead
                                }).map(function(e) {
                                    return e.node.id
                                });
                                if (0 !== e.length) {
                                    var n = function(e, t) {
                                        for (var n = [], i = 0; i < e.length; i += t) {
                                            var r = e.slice(i, i + t);
                                            n.push(r)
                                        }
                                        return n
                                    }(e, me);
                                    Object(p.e)(re, i.__assign({}, t.props.listData.variables), function(e) {
                                        return e.currentUser.notifications.edges = e.currentUser.notifications.edges.map(function(e) {
                                            return i.__assign({}, e, {
                                                node: i.__assign({}, e.node, {
                                                    isRead: !0
                                                })
                                            })
                                        }), e
                                    });
                                    for (var r = 0, a = n; r < a.length; r++) {
                                        var o = a[r];
                                        t.markIDsAsRead(o)
                                    }
                                }
                            }
                        }, t.markIDsAsRead = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            t = e.map(function(e) {
                                                return {
                                                    id: e,
                                                    isRead: !0,
                                                    __typename: "OnsiteNotification"
                                                }
                                            }), n = i.__assign({}, Object(p.a)({
                                                ids: e
                                            }), {
                                                optimisticResponse: {
                                                    readNotifications: {
                                                        __typename: "ReadNotificationsPayload",
                                                        notifications: t,
                                                        count: e.length
                                                    }
                                                }
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(n)];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return r = a.sent(), ce.error(r, "Unable to read notifications", {
                                                ids: e
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.readNotification = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            t = i.__assign({}, Object(p.a)({
                                                ids: [e]
                                            }), {
                                                optimisticResponse: {
                                                    readNotifications: {
                                                        __typename: "ReadNotificationsPayload",
                                                        notifications: [{
                                                            id: e,
                                                            isRead: !0,
                                                            __typename: "OnsiteNotification"
                                                        }],
                                                        count: 1
                                                    }
                                                }
                                            }), this.listDataLoaded() && Object(p.e)(re, i.__assign({}, this.props.listData.variables), function(t) {
                                                return t.currentUser.notifications.edges = t.currentUser.notifications.edges.map(function(t) {
                                                    return t.node.id === e ? i.__assign({}, t, {
                                                        node: i.__assign({}, t.node, {
                                                            isRead: !0
                                                        })
                                                    }) : t
                                                }), t
                                            }), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(t)];
                                        case 2:
                                            return r.sent(), [3, 4];
                                        case 3:
                                            return n = r.sent(), ce.error(n, "Unable to read notification", {
                                                id: e
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.redirectToNotificationsSettings = function() {
                            o.p.history.push("/settings/notifications"), I({
                                unseenCount: t.getUnseenNotificationsCount(t.props),
                                action: x.SettingsLink
                            }), t.centerWindowToggleBalloon.toggleBalloon(!1)
                        }, t.loadMore = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    return this.props.listData.loading ? [2] : [2, this.props.loadMore()]
                                })
                            })
                        }, t.clearTimeout = function() {
                            t.newNotificationsCountTimer && (clearTimeout(t.newNotificationsCountTimer), t.newNotificationsCountTimer = 0)
                        }, t.saveCenterWindowToggleBalloonRef = function(e) {
                            return t.centerWindowToggleBalloon = e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.conditionallyInsertSummaryTestData(), this.conditionallyInsertListNotificationsTestData(), this.listNotificationsLoaded && !this.hasReportedListNotificationsLoaded && this.listDataLoaded() && (this.hasReportedListNotificationsLoaded = !0, this.props.latencyTracking.reportCustomEvent(this.listNotificationsLoaded))
                    }, t.prototype.componentWillUnmount = function() {
                        this.clearTimeout()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (this.summaryDataLoaded(e)) {
                            var t = this.hasNewFriendRequests(e);
                            this.setState({
                                newFriendRequestsBadgeCount: t ? 1 : 0
                            }), this.summaryDataLoaded(this.props) || this.setState({
                                isFriendRequestsNotificationUnread: t
                            }), o.p.setBadgeCount(this.getUnseenNotificationsCount(e))
                        }
                        e.shouldDefer || this.listNotificationsLoaded || (this.listNotificationsLoaded = this.registerListNotificationsLoadedEvent())
                    }, t.prototype.render = function() {
                        var e = this.props.shouldDefer || !this.listDataLoaded() ? [] : this.props.listData.currentUser.notifications.edges;
                        return fe.label = Object(o.d)("Notifications", "OnsiteNotificationsToolTip"), a.createElement(F.Xa, {
                            className: "onsite-notifications"
                        }, a.createElement(J, {
                            onViewNotification: this.viewNotification
                        }), a.createElement(F.Xa, {
                            position: F.fb.Relative
                        }, a.createElement(s.a, {
                            onToggle: this.toggleCenter,
                            ref: this.saveCenterWindowToggleBalloonRef,
                            tooltipProps: fe
                        }, a.createElement(F.A, {
                            ariaLabel: Object(o.d)("Open Notifications", "OnsiteNotifications"),
                            icon: F.pb.NotificationBell,
                            overlay: !0
                        }), a.createElement(F.u, {
                            "data-test-selector": "center-window__balloon",
                            direction: F.v.BottomRight,
                            size: F.w.Large,
                            offsetX: "7px"
                        }, a.createElement(M, {
                            newNotificationsCount: this.state.newNotificationsCount,
                            hasInitiallyLoaded: this.listDataLoaded(),
                            data: e,
                            friendRequestsData: this.getFriendRequestsData(),
                            onLoadMore: this.loadMore,
                            onViewNotification: this.viewNotification,
                            onReadAllNotifications: this.readAllNotifications,
                            onDeleteNotification: this.deleteNotification,
                            onRedirectToSettings: this.redirectToNotificationsSettings
                        }))), this.renderUnseenNotificationsBadge()))
                    }, t.prototype.registerListNotificationsLoadedEvent = function() {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: f.a.OnsiteNotifications,
                            key: f.b.OnsiteNotificationsLoaded,
                            label: f.c.Init,
                            start: f.d.Registration
                        })
                    }, t = i.__decorate([function(e) {
                        return function(t) {
                            function n() {
                                var e = null !== t && t.apply(this, arguments) || this;
                                return e.state = {
                                    shouldDefer: !0
                                }, e.stopDeferring = function() {
                                    e.state.shouldDefer && e.setState({
                                        shouldDefer: !1
                                    })
                                }, e
                            }
                            return i.__extends(n, t), n.prototype.render = function() {
                                var t = {
                                    shouldDefer: this.state.shouldDefer,
                                    stopDeferring: this.stopDeferring
                                };
                                return a.createElement(e, i.__assign({}, this.props, t))
                            }, n
                        }(a.Component)
                    }, Object(c.a)(oe, {
                        name: "summaryData",
                        skip: function(e) {
                            return !e.firstPageLoaded
                        }
                    }), Object(c.a)(se, {
                        name: "viewNotifications"
                    }), Object(c.a)(re, {
                        name: "listData",
                        options: function(e) {
                            return {
                                variables: i.__assign({}, he, {
                                    language: e.languageCode
                                })
                            }
                        },
                        skip: function(e) {
                            return e.shouldDefer
                        },
                        props: function(e) {
                            return i.__assign({}, e, {
                                loadMore: function() {
                                    return e.listData.fetchMore({
                                        query: re,
                                        variables: i.__assign({}, e.listData.variables, {
                                            cursor: e.listData.currentUser ? e.listData.currentUser.notifications.edges[e.listData.currentUser.notifications.edges.length - 1].cursor : ""
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            return {
                                                currentUser: i.__assign({}, n.currentUser, {
                                                    notifications: i.__assign({}, n.currentUser.notifications, {
                                                        edges: e.currentUser.notifications.edges.concat(n.currentUser.notifications.edges)
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    }), Object(c.a)(ie, {
                        name: "deleteOnsiteNotification"
                    }), Object(c.a)(ae, {
                        name: "readOnsiteNotification"
                    }), Object(l.a)(function(e) {
                        return {
                            query: oe,
                            skip: !e.currentUser,
                            topic: Object(m.q)("" + (e.currentUser && e.currentUser.id)),
                            types: [d.PubsubMessageType.OnsiteNotificationSummaryUpdate, d.PubsubMessageType.OnsiteNotificationUpdate, d.PubsubMessageType.OnsiteNotificationCreate, d.PubsubMessageType.OnsiteNotificationDelete],
                            mutator: ee
                        }
                    }), Object(l.a)(function(e) {
                        return {
                            query: re,
                            variables: i.__assign({}, he, {
                                language: e.languageCode
                            }),
                            skip: !(e.currentUser && e.listData && e.listData.currentUser && e.listData.currentUser.notifications && e.listData.currentUser.notifications.edges),
                            topic: Object(m.q)("" + (e.currentUser && e.currentUser.id)),
                            types: [d.PubsubMessageType.OnsiteNotificationsRead, d.PubsubMessageType.OnsiteNotificationUpdate, d.PubsubMessageType.OnsiteNotificationCreate, d.PubsubMessageType.OnsiteNotificationDelete],
                            mutator: te
                        }
                    }), Object(h.b)("OnsiteNotifications", {
                        autoReportInteractive: !0
                    })], t)
                }(a.Component)
        },
        oijJ: function(e, t, n) {},
        oj5W: function(e, t, n) {},
        opIq: function(e, t, n) {
            "use strict";
            var i, r = n("/MKj"),
                a = n("aCAx"),
                o = n("YV3K"),
                s = n("kRBY"),
                c = n("mrSG"),
                l = n("q1tI"),
                u = n("fvjX"),
                d = n("/7QA"),
                p = n("cZKs"),
                m = n("yR8l"),
                f = n("geRD");
            ! function(e) {
                e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
            }(i || (i = {}));
            var h = n("mZsS"),
                g = n("RiD7"),
                v = n("Ue10"),
                b = n("VR5Q"),
                y = (n("yGGv"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                            return c.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, o;
                                return c.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (e.origin !== window.location.origin) return [2];
                                            if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                            switch (t.type) {
                                                case h.a.Ready:
                                                    return [3, 1];
                                                case h.a.RequestAd:
                                                    return [3, 2];
                                                case h.a.Dimensions:
                                                    return [3, 3];
                                                case h.a.OnStart:
                                                    return [3, 4];
                                                case h.a.OnCredit:
                                                    return [3, 5];
                                                case h.a.OnClose:
                                                case h.a.OnFinish:
                                                case h.a.LimitReached:
                                                case h.a.Adblock:
                                                case h.a.OnError:
                                                    return [3, 9]
                                            }
                                            return [3, 10];
                                        case 1:
                                            return n = {
                                                msgSrc: "wateb-ad-modal",
                                                tuid: this.props.tuid
                                            }, e.source && e.source.postMessage(n, "*"), [2];
                                        case 2:
                                            try {
                                                if (!(r = JSON.parse(t.activityJSON))) return [2];
                                                Object(g.g)({
                                                    campaignID: r.campaign_id.toString(),
                                                    requestID: t.requestID,
                                                    requestMethod: this.props.requestRef
                                                })
                                            } catch (e) {}
                                            return [2];
                                        case 3:
                                            return t.height && t.width && this.setState({
                                                customDimensions: {
                                                    height: t.height,
                                                    width: t.width
                                                }
                                            }), [3, 10];
                                        case 4:
                                            try {
                                                if (!(r = JSON.parse(t.activityJSON))) return [2];
                                                Object(g.f)({
                                                    requestID: t.requestID,
                                                    adblock: !1,
                                                    campaignID: r.campaign_id.toString()
                                                })
                                            } catch (e) {}
                                            return [2];
                                        case 5:
                                            return s.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(f.a)({
                                                args: t.engagement.signature_argument_string,
                                                signature: t.engagement.signature,
                                                trueXAd: {
                                                    creativeID: t.engagement.ad.creative_id,
                                                    campaignID: t.engagement.ad.campaign_id,
                                                    name: t.engagement.ad.name,
                                                    currencyAmount: t.engagement.ad.currency_amount
                                                },
                                                targetID: this.props.channelID
                                            }))];
                                        case 6:
                                            return a = s.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(a.data.redeemTrueXAd.grantedBits), [3, 8];
                                        case 7:
                                            return o = s.sent(), d.k.warn("Error while redeeming bits for truex ad", o), this.props.onError && this.props.onError(i.Unknown), [3, 8];
                                        case 8:
                                            return [3, 10];
                                        case 9:
                                            return this.props.onError && (t.type === h.a.LimitReached ? this.props.onError(i.LimitReached) : t.type === h.a.Adblock ? this.props.onError(i.Adblock) : t.type === h.a.OnError ? this.props.onError(i.Unknown) : this.hasAwarded || this.props.onError(i.ExitEarly)), this.props.closeModal(), [3, 10];
                                        case 10:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentWillMount = function() {
                        window.addEventListener("message", this.messageHandler)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("message", this.messageHandler)
                    }, t.prototype.render = function() {
                        return l.createElement(v.zb, {
                            background: v.r.Base
                        }, l.createElement("div", {
                            className: "t-watch-ads-modal",
                            style: this.state.customDimensions
                        }, l.createElement(p.a, null), l.createElement("iframe", {
                            src: "/products/bits/ad"
                        })))
                    }, t = c.__decorate([Object(m.a)(b, {
                        name: "redeemTrueXAd"
                    })], t)
                }(l.Component));
            var k, S = Object(r.connect)(null, function(e) {
                    return Object(u.bindActionCreators)({
                        closeModal: a.c
                    }, e)
                })(y),
                _ = n("TSYQ"),
                C = n("oJmH"),
                E = n("edgk"),
                N = n("jv9u"),
                O = n("8/mp");

            function w(e) {
                return c.__awaiter(this, void 0, void 0, function() {
                    var t, n, i, r, a;
                    return c.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (t = d.b.get("bits_truex_partner_hash", ""), !(n = d.b.get("bits_truex_api_url", "")) || !t) return d.k.warn("Truex API info missing from dynamic settings"), [2, k.Error];
                                o.label = 1;
                            case 1:
                                return o.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                            case 2:
                                return (i = o.sent()).ok ? [4, i.json()] : [3, 4];
                            case 3:
                                if ((r = o.sent()) && Array.isArray(r) && r.length) return [2, k.Available];
                                o.label = 4;
                            case 4:
                                return [2, k.Unavailable];
                            case 5:
                                return a = o.sent(), d.k.warn("Failed checking ad availability from TrueX, probably due to AdBlock", a), [2, k.AdBlocked];
                            case 6:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
            }(k || (k = {}));
            var x, T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onWatchAdClick = function() {
                            t.props.trackBitsCardInteraction(g.a.WatchAd), t.props.onWatchAdClick()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        return this.props.disableWatchAd && (e = Object(d.d)("Try again later", "Bits--WatchAdOffer")), l.createElement(v.zb, {
                            className: "bits-buy-card__offer-row",
                            display: v.X.Flex,
                            flexShrink: 0,
                            borderBottom: !0,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, l.createElement(v.Xa, {
                            padding: {
                                right: 4
                            }
                        }, l.createElement("strong", null, Object(d.d)("Get {minBitsCount} or more Bits by watching short ads", {
                            minBitsCount: this.props.minPayout
                        }, "Bits--WatchAdOffer"))), l.createElement(v.Xa, {
                            flexShrink: 0,
                            display: v.X.Flex,
                            flexDirection: v.Aa.Column,
                            alignItems: v.f.End
                        }, l.createElement(v.z, {
                            type: v.F.Hollow,
                            "data-a-target": "bits-watch-ad",
                            onClick: this.onWatchAdClick,
                            disabled: this.props.disableWatchAd
                        }, Object(d.d)("Watch Ad", "Bits--WatchAdOffer")), e && l.createElement(v.Xa, {
                            className: "bits-buy-card__sub-text",
                            alignSelf: v.g.Stretch,
                            textAlign: v.Lb.Center,
                            margin: {
                                top: .5
                            }
                        }, e)))
                    }, t
                }(l.Component),
                D = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            enableWatchAd: !0
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentWillMount = function() {
                        return c.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, w(this.props.truexUserID)];
                                    case 1:
                                        return e = t.sent(), Object(g.e)({
                                            channel: this.props.channelLogin,
                                            channelID: this.props.channelID,
                                            available: e === k.Available
                                        }), e !== k.Available && e !== k.AdBlocked && this.setState({
                                            enableWatchAd: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return D.test(navigator.userAgent) ? null : l.createElement(T, c.__assign({}, this.props, {
                            disableWatchAd: !this.state.enableWatchAd
                        }))
                    }, t
                }(l.Component),
                A = n("lhih"),
                F = n("5zXJ"),
                P = n("XmgI"),
                R = n("ebRM"),
                B = n("4h+t"),
                U = n("x1M1"),
                L = (n("byRF"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleBuyClick = function(e) {
                            var n = t.props.channelID || "",
                                i = Object(R.b)({
                                    trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                                    channelID: n,
                                    purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                                    bitsAmount: e.currentTarget.dataset.bitsAmount,
                                    closeAllBits: t.props.closeAllBits,
                                    location: t.props.location
                                });
                            i && (t.props.onBuyPopupClose(i), t.props.onClose())
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        if (this.props.offer.type === A.a) {
                            if (!this.props.channelLogin) return null;
                            var e = this.props.currentUserSHA || "";
                            return l.createElement(I, {
                                key: "wateb",
                                minPayout: this.props.offer.bits,
                                onWatchAdClick: this.props.handleWatchAdClick,
                                truexUserID: e,
                                channelID: this.props.channelID || "",
                                channelLogin: this.props.channelLogin,
                                trackBitsCardInteraction: this.props.trackBitsCardInteraction
                            })
                        }
                        var t = null;
                        Object(R.c)(this.props.offer) ? t = l.createElement(v.Xa, {
                            className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                            "data-test-selector": "first-time-promo-form"
                        }, l.createElement(v.W, {
                            type: v.Pb.Strong,
                            fontSize: v.Ca.Size6
                        }, Object(d.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(R.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === A.c ? t = l.createElement(v.Xa, {
                            className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                            "data-test-selector": "black-friday-promo-form"
                        }, l.createElement(v.W, {
                            type: v.Pb.Strong,
                            fontSize: v.Ca.Size6
                        }, Object(d.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))) : Object(R.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === A.d && (t = l.createElement(v.Xa, {
                            className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                            "data-test-selector": "prime-promo-promo-form"
                        }, l.createElement(v.W, {
                            type: v.Pb.Strong,
                            fontSize: v.Ca.Size6
                        }, Object(d.d)("Twitch Prime Bits Discount", "Bits--BuyCard"))));
                        var n = null;
                        this.props.offer.discount && (n = l.createElement("div", {
                            className: "bits-buy-card-offer-row__sub-text",
                            "data-test-selector": "discount-subtext-form"
                        }, Object(d.d)("{percentOff,number,percent} discount", {
                            percentOff: this.props.offer.discount
                        }, "Bits--BuyCard")));
                        var i = null;
                        (Object(R.c)(this.props.offer) || Object(R.e)(this.props.offer)) && (i = l.createElement("div", {
                            className: "bits-buy-card-offer-row__sub-text",
                            "data-test-selector": "one-per-account-form"
                        }, Object(d.d)("one per account", "Bits--BuyCard")));
                        var r = {
                                className: "bits-buy-card-offer-row",
                                flexShrink: 0,
                                display: v.X.Flex,
                                justifyContent: v.Wa.Center,
                                flexDirection: v.Aa.Column,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            },
                            a = l.createElement(l.Fragment, null, t, l.createElement(v.Xa, {
                                display: v.X.Flex,
                                justifyContent: v.Wa.Between,
                                alignItems: v.f.Center
                            }, l.createElement(v.Xa, {
                                flexGrow: 1
                            }, l.createElement(v.W, {
                                type: v.Pb.H5,
                                color: v.O.Base,
                                bold: !0
                            }, Object(d.d)("{bits} Bits", {
                                bits: this.props.offer.bits
                            }, "Bits--BuyCard")), this.getAvailableTiers(this.props.offer.bits)), l.createElement(v.Xa, {
                                flexShrink: 0,
                                display: v.X.Flex,
                                flexDirection: v.Aa.Column,
                                alignItems: v.f.End
                            }, l.createElement(v.z, {
                                onClick: this.handleBuyClick,
                                "data-purchase-url": this.props.offer.url,
                                "data-bits-amount": this.props.offer.bits,
                                "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                            }, this.props.offer.price), (n || i) && l.createElement(v.Xa, {
                                alignSelf: v.g.Stretch,
                                textAlign: v.Lb.Right,
                                margin: {
                                    top: .5
                                }
                            }, n, i))));
                        return l.createElement(l.Fragment, null, this.props.isLastRow ? l.createElement(v.Xa, c.__assign({}, r), a) : l.createElement(v.zb, c.__assign({}, r, {
                            borderBottom: !0
                        }), a))
                    }, t.prototype.getAvailableTiers = function(e) {
                        var t = this.props.bitsConfig && this.props.bitsConfig.indexedActions[F.l];
                        t || (t = Object(B.b)());
                        var n = t.orderedTiers.filter(function(t) {
                            return t.bits <= e
                        }).reverse();
                        return l.createElement(v.Xa, {
                            padding: {
                                top: .5
                            },
                            className: "bits-buy-card-offer-row__tier-bits-images"
                        }, n.map(function(e) {
                            return l.createElement(U.a, {
                                key: e.bits,
                                sources: Object(P.c)(e, 2, !1)
                            })
                        }))
                    }, t
                }(l.Component)),
                j = (n("mHh5"), function(e) {
                    var t = [],
                        n = [],
                        i = null;
                    return e.offers.forEach(function(r, a) {
                        var o = l.createElement(L, {
                                key: r.id,
                                offer: r,
                                isLastRow: a >= e.offers.length,
                                bitsConfig: e.bitsConfig,
                                channelID: e.channelID,
                                channelLogin: e.channelLogin,
                                currentUserSHA: e.currentUserSHA,
                                location: e.location,
                                onClose: e.onClose,
                                onBuyPopupClose: e.onBuyPopupClose,
                                handleWatchAdClick: e.handleWatchAdClick,
                                closeAllBits: e.closeAllBits,
                                trackBitsCardInteraction: e.trackBitsCardInteraction
                            }),
                            s = Object(R.d)(r),
                            c = Object(R.c)(r),
                            u = r.type === A.a;
                        c && !e.hidePromos ? t.push(o) : s && !c ? t.push(o) : u && !e.hideWateb ? i = o : u || s || n.push(o)
                    }), e.fullsize ? l.createElement(v.Xa, {
                        className: "bits-buy-card-offers__full-size",
                        flexGrow: 1,
                        flexWrap: v.Ba.NoWrap,
                        display: v.X.Flex,
                        flexDirection: v.Aa.Column,
                        fullWidth: !0
                    }, i, t, n) : l.createElement(O.b, {
                        className: "bits-buy-card-offers__scroll-view"
                    }, l.createElement(v.Xa, {
                        flexGrow: 1,
                        flexWrap: v.Ba.NoWrap,
                        display: v.X.Flex,
                        flexDirection: v.Aa.Column
                    }, i, t, n))
                }),
                X = function(e) {
                    var t = l.createElement(v.W, {
                        type: v.Pb.P,
                        color: v.O.Alt
                    }, Object(d.d)("Prices are shown in <x:bold>{currencyCode}</x:bold>", {
                        "x:bold": function(e) {
                            return l.createElement(v.W, {
                                type: v.Pb.Span,
                                bold: !0
                            }, e)
                        },
                        currencyCode: e.currencyCode
                    }, "Bits--BuyCard"));
                    e.pricesIncludeVAT && (t = l.createElement(v.W, {
                        "data-test-selector": "prices-include-vat-selector",
                        type: v.Pb.P,
                        color: v.O.Alt
                    }, Object(d.d)("Prices are shown in <x:bold>{currencyCode}</x:bold> and <x:bold>include VAT</x:bold>", {
                        "x:bold": function(e) {
                            return l.createElement(v.W, {
                                type: v.Pb.Span,
                                bold: !0
                            }, e)
                        },
                        currencyCode: e.currencyCode
                    }, "Bits--BuyCard")));
                    var n = null;
                    e.minBitsToCheer && e.minBitsToCheer > 1 && (n = l.createElement(v.W, {
                        "data-test-selector": "min-bits-to-cheer-selector",
                        color: v.O.Alt
                    }, Object(d.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                        displayName: e.displayName,
                        minBits: e.minBitsToCheer
                    }, "Bits--BuyCard")));
                    var i = null;
                    return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = l.createElement(v.W, {
                        "data-test-selector": "bits-balance-header-selector",
                        color: v.O.Alt
                    }, Object(d.d)("You have {totalBits} Bits", {
                        totalBits: l.createElement("strong", {
                            "data-a-target": "buy-card-bits-count"
                        }, e.bitsBalance)
                    }, "Bits--BuyCard"))), l.createElement(v.zb, {
                        className: "bits-buy-card-header",
                        padding: 1,
                        borderBottom: !0,
                        flexShrink: 0,
                        fullWidth: !0
                    }, l.createElement(v.Xa, null, e.location === g.b.ChatTooltip && l.createElement(v.W, {
                        type: v.Pb.H4,
                        color: v.O.Alt
                    }, Object(d.d)("Purchase Bits", "Bits--BuyCard")), t), e.location === g.b.ChatTooltip && l.createElement(v.Xa, {
                        margin: {
                            top: 1
                        }
                    }, i, n))
                },
                W = n("4Wd7"),
                M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onWatchAnother = function() {
                            t.props.trackBitsCardInteraction(g.a.WatchAnotherAd), t.props.onWatchAnother && t.props.onWatchAnother()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(v.Xa, {
                            display: v.X.Flex,
                            flexGrow: 1,
                            flexDirection: v.Aa.Column,
                            alignItems: v.f.Center,
                            fullWidth: !0,
                            flexWrap: v.Ba.NoWrap,
                            padding: {
                                y: 1
                            }
                        }, l.createElement(W.a, {
                            prefix: "cheer",
                            amount: this.props.amount,
                            bitsConfig: this.props.bitsConfig,
                            showAmount: !0,
                            showImage: !0
                        }), l.createElement(v.Xa, {
                            display: v.X.Flex,
                            padding: {
                                top: 1
                            },
                            flexGrow: 1,
                            flexDirection: v.Aa.Column,
                            alignItems: v.f.Center,
                            flexWrap: v.Ba.NoWrap
                        }, l.createElement(v.W, {
                            type: v.Pb.H4,
                            bold: !0
                        }, Object(d.d)("You got {bitsAmount,number} Bits!", {
                            bitsAmount: this.props.amount
                        }, "Bits--WatchAdAward")), l.createElement(v.Pa, {
                            padding: {
                                top: 1
                            }
                        }, l.createElement(v.W, {
                            color: v.O.Alt2
                        }, Object(d.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                            bitsAmount: this.props.amount
                        }, "Bits--WatchAdAward"), l.createElement("br", null), Object(d.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), l.createElement(v.Xa, {
                            display: v.X.Flex,
                            padding: {
                                x: 1,
                                top: 3
                            },
                            alignSelf: v.g.Stretch,
                            justifyContent: v.Wa.Between
                        }, l.createElement(v.z, {
                            onClick: this.props.onStartCheering
                        }, Object(d.d)("Start Cheering", "Bits--WatchAdAward")), l.createElement(v.z, {
                            type: v.F.Hollow,
                            "data-a-target": "bits-watch-another-ad",
                            onClick: this.onWatchAnother,
                            disabled: !this.props.hasAdAvailable
                        }, Object(d.d)("Watch Another", "Bits--WatchAdAward"))))
                    }, t
                }(l.Component),
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasAdAvailable: !0
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentWillMount = function() {
                        return c.__awaiter(this, void 0, void 0, function() {
                            return c.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, w(this.props.truexUserID)];
                                    case 1:
                                        return e.sent() !== k.Available && this.setState({
                                            hasAdAvailable: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return l.createElement(M, c.__assign({}, this.props, {
                            hasAdAvailable: this.state.hasAdAvailable
                        }))
                    }, t
                }(l.Component),
                G = (n("7APm"), function(e) {
                    var t = Object(d.d)("Something's wrong!", "Bits--WatchAdError"),
                        n = Object(d.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                        r = "adserrorgeneric";
                    switch (e.type) {
                        case i.Adblock:
                            r = "adserroradblock", n = Object(d.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                            break;
                        case i.LimitReached:
                            r = "adserrorlimit", t = Object(d.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(d.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                            break;
                        case i.ExitEarly:
                            n = Object(d.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                    }
                    var a = l.createElement(v.Xa, {
                        className: "watch-ad-error__footer",
                        display: v.X.Flex,
                        padding: {
                            top: 2
                        },
                        alignSelf: v.g.Stretch,
                        justifyContent: v.Wa.Center
                    }, l.createElement(v.z, {
                        onClick: e.onTryAgain
                    }, Object(d.d)("Try Again", "Bits--WatchAdError")));
                    return e.type === i.LimitReached && (a = l.createElement(v.Xa, {
                        className: "watch-ad-error__footer",
                        display: v.X.Flex,
                        padding: {
                            top: 2
                        },
                        alignSelf: v.g.Stretch,
                        justifyContent: v.Wa.Between
                    }, l.createElement(v.z, {
                        onClick: e.onClose
                    }, Object(d.d)("Got It", "Bits--WatchAdError")), l.createElement(v.z, {
                        onClick: e.onTryAgain,
                        type: v.F.Hollow
                    }, Object(d.d)("Buy Bits", "Bits--WatchAdError")))), l.createElement(v.Xa, {
                        padding: {
                            x: 1
                        },
                        display: v.X.Flex,
                        flexGrow: 1,
                        flexDirection: v.Aa.Column,
                        alignItems: v.f.Center,
                        fullWidth: !0,
                        flexWrap: v.Ba.NoWrap
                    }, l.createElement(v.Xa, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement("img", {
                        className: "watch-ad-error__error-image",
                        src: F.b + "/light/static/1/" + r + ".png"
                    })), l.createElement(v.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(v.W, {
                        type: v.Pb.H4,
                        bold: !0
                    }, t)), l.createElement(v.W, {
                        color: v.O.Alt2
                    }, n), a)
                }),
                z = n("GnwI"),
                V = n("zmay"),
                H = (n("NvZ5"), "storage.wateb.agreedToWatebTerms.v1"),
                Q = "bits-show-wateb-terms",
                K = "bits-agree-wateb-terms";
            ! function(e) {
                e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
            }(x || (x = {}));
            var Y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            wateb: x.Inactive,
                            watebError: null,
                            bitsAwarded: 0,
                            showWatebTerms: !1,
                            agreedToWatebTerms: d.m.get(H, !1)
                        }, t.onBuyPopupClose = function(e) {
                            Object(E.a)(e, function() {
                                t.props.data && t.props.data.refetch()
                            })
                        }, t.onAdBitsAwarded = function(e) {
                            t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                                wateb: x.Awarded,
                                bitsAwarded: e
                            })
                        }, t.renderWatebTerms = function(e) {
                            return l.createElement(v.Xa, {
                                className: e,
                                textAlign: v.Lb.Left,
                                fullWidth: !0,
                                padding: {
                                    x: 2,
                                    bottom: 2,
                                    top: 5
                                },
                                "data-a-target": Q
                            }, l.createElement(v.Xa, {
                                position: v.fb.Absolute,
                                padding: {
                                    top: .5,
                                    left: .5
                                },
                                attachLeft: !0,
                                attachTop: !0
                            }, l.createElement("div", {
                                key: "Bits--back-edit",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: t.onCloseWatebTerms
                            }, l.createElement(v.W, {
                                color: v.O.Link,
                                type: v.Pb.Span
                            }, l.createElement(v.ob, {
                                asset: v.pb.ChatSettingsBack,
                                height: 10,
                                width: 10
                            }), Object(d.d)("Back", "Bits--Watch-Ad-Terms")))), l.createElement(v.Xa, {
                                padding: {
                                    bottom: 2
                                }
                            }, l.createElement(v.W, {
                                type: v.Pb.Span
                            }, Object(d.d)("Before continuing to watch ads to earn Bits, we remind you that the <x:link>Bits Acceptable Use Policy</x:link> applies to your participation with this feature and any Bits you may obtain. As a reminder, you may not:", {
                                "x:link": function(e) {
                                    return l.createElement("a", {
                                        href: "https://www.twitch.tv/p/legal/bits-acceptable-use/",
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, e)
                                }
                            }, "Bits--Watch-Ad-Terms")), l.createElement(v.Xa, {
                                margin: {
                                    y: 1
                                }
                            }, l.createElement("li", null, Object(d.d)("Obtain Bits to Cheer on your own channel via this feature", "Bits--Watch-Ad-Terms")), l.createElement("li", null, Object(d.d)("Collect Bits via this feature through the use of multiple accounts, robots, or other automated means", "Bits--Watch-Ad-Terms")))), l.createElement(v.Xa, {
                                display: v.X.Flex,
                                justifyContent: v.Wa.Center
                            }, l.createElement(v.z, {
                                size: v.D.Small,
                                onClick: t.onAgreeToWatebTerms,
                                "data-a-target": K
                            }, Object(d.d)("Continue", "Bits--Watch-Ad-Terms"))))
                        }, t.onAgreeToWatebTerms = function() {
                            d.m.set(H, !0), t.setState({
                                agreedToWatebTerms: !0,
                                showWatebTerms: !1
                            }), t.showWatchAdModal()
                        }, t.onCloseWatebTerms = function() {
                            t.setState({
                                showWatebTerms: !1
                            })
                        }, t.handleWatchAdClick = function() {
                            return c.__awaiter(t, void 0, void 0, function() {
                                return c.__generator(this, function(e) {
                                    return this.state.agreedToWatebTerms ? (this.showWatchAdModal(), [2]) : (this.setState({
                                        showWatebTerms: !0
                                    }), [2])
                                })
                            })
                        }, t.receiveAdErrorState = function(e) {
                            t.setState({
                                wateb: x.Error,
                                watebError: e
                            })
                        }, t.resetAdErrorState = function() {
                            t.state.wateb === x.Error && (t.setState({
                                wateb: x.Inactive
                            }), t.props.data && t.props.data.refetch())
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return !e.adModalOpen
                    }, t.prototype.render = function() {
                        var e = this.props.location === g.b.ChatTooltip,
                            t = _({
                                "bits-buy-card": !0,
                                "bits-buy-card__chat-tooltip": e
                            });
                        if (!this.props.data || this.props.data.loading) return l.createElement(N.a, null);
                        if (this.props.data.error) return l.createElement(v.Xa, {
                            className: _(t, "bits-buy-card--shorter"),
                            textAlign: v.Lb.Center,
                            "data-a-target": "bits-buy-card-error",
                            alignItems: v.f.Center,
                            justifyContent: v.Wa.Center,
                            display: v.X.Flex,
                            padding: 1,
                            fullWidth: !0
                        }, l.createElement(v.W, {
                            italic: !0
                        }, Object(d.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                        if (this.state.showWatebTerms) return this.renderWatebTerms(t);
                        var n = this.renderWatebCard();
                        if (n) return l.createElement(v.Xa, {
                            textAlign: v.Lb.Center,
                            className: _(t, "bits-buy-card--shorter"),
                            fullWidth: !0
                        }, n);
                        var i = [];
                        this.props.data.currentUser && this.props.data.currentUser.bitsOffers ? i = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (i = this.props.data.bitsOffers);
                        var r = i.filter(function(e) {
                                return e.type === A.b
                            }).some(function(e) {
                                return e.includesVAT
                            }),
                            a = "",
                            o = i.filter(function(e) {
                                return e.type === A.b
                            }).pop();
                        o && o.type === A.b && (a = o.currencyCode);
                        var s = this.props.data.user ? this.props.data.user.id : "",
                            c = l.createElement(j, {
                                offers: i,
                                fullsize: this.props.fullsize,
                                hidePromos: this.props.hidePromos,
                                hideWateb: this.props.hideWateb,
                                bitsConfig: this.props.bitsConfig,
                                channelID: s,
                                channelLogin: this.props.channelLogin,
                                closeAllBits: this.props.closeAllBits,
                                currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                                handleWatchAdClick: this.handleWatchAdClick,
                                location: this.props.location,
                                onBuyPopupClose: this.onBuyPopupClose,
                                onClose: this.props.onClose,
                                trackBitsCardInteraction: this.props.trackBitsCardInteraction
                            }),
                            u = l.createElement(X, {
                                bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                                displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                                minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                                pricesIncludeVAT: r,
                                currencyCode: a,
                                location: this.props.location
                            });
                        return l.createElement(v.Xa, {
                            className: t,
                            "data-a-target": "bits-buy-card",
                            fullWidth: !0
                        }, u, c)
                    }, t.prototype.renderWatebCard = function() {
                        if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                            case x.Awarded:
                                return l.createElement(q, {
                                    bitsConfig: this.props.bitsConfig,
                                    amount: this.state.bitsAwarded,
                                    onStartCheering: this.props.onClose,
                                    onWatchAnother: this.handleWatchAdClick,
                                    truexUserID: this.props.data.currentUser.idSHA1,
                                    trackBitsCardInteraction: this.props.trackBitsCardInteraction
                                });
                            case x.Error:
                                return l.createElement(G, {
                                    type: this.state.watebError || i.Unknown,
                                    onClose: this.props.onClose,
                                    onTryAgain: this.resetAdErrorState
                                });
                            default:
                                return !1
                        }
                    }, t.prototype.showWatchAdModal = function() {
                        this.props.data && this.props.data.currentUser && this.props.data.user && this.props.showWatchAdModal({
                            tuid: this.props.data.currentUser.idSHA1,
                            onBitsAwarded: this.onAdBitsAwarded,
                            onError: this.receiveAdErrorState,
                            requestRef: g.c.ShowAdButton,
                            channelID: this.props.data.user.id
                        })
                    }, t = c.__decorate([Object(m.a)(V, {
                        name: "data",
                        options: function(e) {
                            return {
                                variables: {
                                    channelLogin: e.channelLogin,
                                    withChannel: !!e.channelLogin,
                                    isLoggedIn: e.isLoggedIn
                                }
                            }
                        }
                    })], t)
                }(l.Component),
                $ = Object(C.compose)(Object(z.b)("BitsBuyCard", {
                    autoReportInteractive: !0
                }))(Y);

            function J(e) {
                return {
                    adModalOpen: Object(o.b)(e, S),
                    isLoggedIn: Object(s.f)(e)
                }
            }

            function Z(e) {
                return {
                    showWatchAdModal: function(t) {
                        return e(Object(a.d)(S, t))
                    }
                }
            }
            var ee = Object(r.connect)(J, Z)($);
            n.d(t, !1, function() {
                return J
            }), n.d(t, !1, function() {
                return Z
            }), n.d(t, "a", function() {
                return ee
            })
        },
        opSz: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("vR4/"),
                s = n("Ue10"),
                c = function() {
                    return Object(a.d)("All Videos", "search__video-filters")
                },
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleOptionChange = function(e) {
                            var n = e.currentTarget.elements;
                            t.props.onOptionsChange({
                                type: +n.type.value,
                                length: +n.video_length.value
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.zb, {
                            className: "search__video-filters",
                            background: s.r.Alt,
                            padding: {
                                top: .5,
                                x: 1
                            }
                        }, r.createElement(s.Pa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Between,
                            flexWrap: s.Ba.Wrap
                        }, r.createElement("form", {
                            onInput: this.handleOptionChange
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex
                        }, r.createElement(s.Xa, {
                            display: s.X.InlineFlex,
                            margin: {
                                right: 1,
                                bottom: .5
                            },
                            flexShrink: 0
                        }, r.createElement(s.vb, {
                            name: "type"
                        }, r.createElement("option", {
                            value: o.b.AllVideos
                        }, c()), r.createElement("option", {
                            value: o.b.PastBroadcasts
                        }, Object(a.d)("Past Broadcasts", "search__video-filters")), r.createElement("option", {
                            value: o.b.Uploads
                        }, Object(a.d)("Uploads", "search__video-filters")), r.createElement("option", {
                            value: o.b.Highlights
                        }, Object(a.d)("Highlights", "search__video-filters")))), r.createElement(s.Xa, {
                            display: s.X.InlineFlex,
                            margin: {
                                right: 1,
                                bottom: .5
                            }
                        }, r.createElement(s.vb, {
                            name: "video_length"
                        }, r.createElement("option", {
                            value: o.a.AnyLength
                        }, Object(a.d)("Any Length", "search__video-filters")), r.createElement("option", {
                            value: o.a.Short
                        }, Object(a.d)("Short", "search__video-filters")), r.createElement("option", {
                            value: o.a.Long
                        }, Object(a.d)("Long", "search__video-filters"))))))))
                    }, t
                }(r.Component)
        },
        rEFn: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "f", function() {
                return S
            }), n.d(t, "d", function() {
                return _
            }), n.d(t, "c", function() {
                return C
            }), n.d(t, "i", function() {
                return E
            }), n.d(t, "e", function() {
                return N
            }), n.d(t, "h", function() {
                return O
            }), n.d(t, "g", function() {
                return w
            }), n.d(t, "k", function() {
                return x
            }), n.d(t, "j", function() {
                return T
            }), n.d(t, "l", function() {
                return D
            });
            var i, r, a, o, s = n("mrSG"),
                c = n("/7QA"),
                l = n("2xye"),
                u = n("H/lO"),
                d = "search_tracking_enabled";
            ! function(e) {
                e.More = "more", e.Back = "back"
            }(r || (r = {})),
            function(e) {
                e.Game = "game", e.Live = "live", e.Channel = "channel", e.VOD = "vod", e.StreamTag = "stream-tag", e.Tag = "tag"
            }(a || (a = {})),
            function(e) {
                e.Popular = "popular", e.Newest = "newest"
            }(o || (o = {}));
            var p, m = ((i = {})[u.a.Videos] = a.VOD, i[u.a.Users] = a.Live, i[u.a.Channels] = a.Channel, i[u.a.Games] = a.Game, i[u.a.StreamTags] = a.StreamTag, i[u.a.Tags] = a.Tag, i),
                f = {
                    0: "all",
                    1: "past_broadcast",
                    2: "upload",
                    3: "highlight"
                },
                h = {
                    0: "any",
                    1: "short",
                    2: "long"
                };

            function g(e) {
                return {
                    sub_section: e.searchIndex && m[e.searchIndex],
                    button_type: e.buttonType
                }
            }

            function v(e) {
                var t = e.vodFilter ? e.vodFilter : 0,
                    n = e.lengthFilter ? e.lengthFilter : 0;
                return {
                    sub_section: e.subSection,
                    content_type: e.contentType,
                    item_row: e.itemRow,
                    item_index: e.itemIndex,
                    channel_id: e.channelID,
                    vod_id: e.vodID,
                    game: e.game,
                    tag_id: e.tagID,
                    vod_filter: f[t],
                    length_filter: h[n]
                }
            }

            function b(e) {
                var t = Date.now();
                return {
                    distinct_id: c.p.session.deviceID,
                    search_session_id: e,
                    time: t
                }
            }

            function y(e, t, n) {
                return s.__assign({}, b(e), {
                    search_query_id: t,
                    query: n
                })
            }

            function k() {
                return c.p.dynamicSettings.get(d, !1)
            }

            function S(e, t, n) {
                k() && c.p.tracking.track(l.SpadeEventType.SearchReset, y(e, t, n))
            }

            function _(e, t) {
                k() && c.p.tracking.track(l.SpadeEventType.FocusSearch, s.__assign({}, b(e), {
                    location: t && t.medium
                }))
            }

            function C(e, t) {
                k() && c.p.tracking.track(l.SpadeEventType.SearchBegin, s.__assign({}, b(e), {
                    location: t && t.medium
                }))
            }

            function E(e, t, n, i) {
                k() && c.p.tracking.track(l.SpadeEventType.SearchQuerySubmit, s.__assign({}, y(e, t, n), {
                    filter: i
                }))
            }

            function N(e, t, n, i, r) {
                void 0 === r && (r = {}), k() && c.p.tracking.track(l.SpadeEventType.SearchQueryResult, s.__assign({}, y(e, t, n), function(e) {
                    return {
                        live_results: e.liveResults || 0,
                        channel_results: e.channelResults || 0,
                        vod_results: e.vodResults || 0,
                        tag_results: e.tagResults || 0,
                        games_results: e.gameResults || 0
                    }
                }(r), {
                    status: i ? p.Fail : p.Success
                }))
            }

            function O(e, t, n, i) {
                k() && c.p.tracking.track(l.SpadeEventType.SearchResultImpression, s.__assign({}, y(e, t, n), v(i)))
            }

            function w(e, t, n, i) {
                k() && c.p.tracking.track(l.SpadeEventType.SearchResultClick, s.__assign({}, y(e, t, n), v(i)))
            }

            function x(e, t, n, i) {
                k() && c.p.tracking.track(l.SpadeEventType.SearchUIImpression, s.__assign({}, y(e, t, n), g(i)))
            }

            function T(e, t, n, i) {
                k() && c.p.tracking.track(l.SpadeEventType.SearchUIClick, s.__assign({}, y(e, t, n), g(i)))
            }

            function D(e) {
                switch (e) {
                    case u.a.Channels:
                        return "channels";
                    case u.a.Games:
                        return "games";
                    case u.a.Users:
                        return "users";
                    case u.a.Videos:
                        return "videos";
                    default:
                        return ""
                }
            }! function(e) {
                e.Fail = "fail", e.Success = "success"
            }(p || (p = {}))
        },
        rwxT: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("EMHe"),
                c = n("Ue10");
            ! function(e) {
                e.SaveButton = "save-settings-footer__save-button", e.CancelButton = "save-settings-footer__cancel-button"
            }(i || (i = {}));
            var l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return this.props.onClickCancel && (e = a.createElement(c.Xa, {
                        padding: {
                            left: 1
                        },
                        display: c.X.Inline
                    }, a.createElement(c.z, {
                        disabled: !(this.props.status === s.b.DirtyChanges || this.props.status === s.b.Error),
                        type: c.F.Text,
                        "data-test-selector": i.CancelButton,
                        "data-a-target": this.props.cancelDataATarget,
                        onClick: this.props.onClickCancel
                    }, Object(o.d)("Cancel", "SaveSettingsFooter")))), a.createElement(c.Xa, null, a.createElement(s.a, {
                        status: this.props.status,
                        onClick: this.props.onClickSave,
                        "data-a-target": this.props.saveDataATarget || "save-user-settings-button",
                        "data-test-selector": i.SaveButton
                    }, this.props.status === s.b.Error ? Object(o.d)("Failed to save settings. Try again.", "SaveButton") : Object(o.d)("Save Changes", "SaveSettingsFooter")), e)
                }, t
            }(a.Component);
            n.d(t, !1, function() {
                return i
            }), n.d(t, "a", function() {
                return l
            })
        },
        sLmD: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            });
            var i = n("/7QA"),
                r = "en-us",
                a = {
                    bg: "bg-bg",
                    cs: "cs-cz",
                    da: "da-dk",
                    de: "de-de",
                    el: "el-gr",
                    en: r,
                    "en-gb": r,
                    es: "es-es",
                    "es-mx": "es-mx",
                    fi: "fi-fi",
                    fr: "fr-fr",
                    hu: "hu-hu",
                    it: "it-it",
                    ja: "ja-jp",
                    ko: "ko-kr",
                    nl: "nl-nl",
                    no: "no-no",
                    pl: "pl-pl",
                    "pt-br": "pt-br",
                    pt: "pt-pt",
                    ro: "ro-ro",
                    ru: "ru-ru",
                    sk: "sk-sk",
                    sv: "sv-se",
                    th: "th-th",
                    tr: "tr-tr",
                    vi: "vi-vn",
                    "zh-cn": "zh-cn",
                    "zh-tw": "zh-tw"
                },
                o = function(e) {
                    var t, n = s();
                    return t = function(e) {
                        return void 0 !== e.tag_id
                    }(e) ? {
                        id: e.tag_id,
                        isLanguageTag: e.tag_name.includes("auto___lang"),
                        localizedName: "",
                        tagName: e.tag_name
                    } : {
                        id: e.objectID,
                        tagName: e.tag_name,
                        isAutomated: e.automated || !1,
                        localizedDescription: e.description_localizations && e.description_localizations[n] || "",
                        localizedName: ""
                    }, e.localizations && e.localizations[n] ? t.localizedName = e.localizations[n] : e.localizations && e.localizations[r] ? t.localizedName = e.localizations[r] : t.localizedName = t.tagName, t
                };

            function s() {
                return a[i.p.intl.getLanguageCode() || ""] || r
            }
        },
        tUtL: function(e, t, n) {},
        uNOt: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n.n(i),
                a = n("nNZz"),
                o = n.n(a),
                s = n("2INN"),
                c = n("2iEm"),
                l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
            var d = function(e) {
                var t = e.to,
                    n = e.exact,
                    i = e.strict,
                    a = e.location,
                    o = e.activeClassName,
                    d = e.className,
                    p = e.activeStyle,
                    m = e.style,
                    f = e.isActive,
                    h = e["aria-current"],
                    g = function(e, t) {
                        var n = {};
                        for (var i in e) t.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        return n
                    }(e, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]),
                    v = "object" === (void 0 === t ? "undefined" : u(t)) ? t.pathname : t,
                    b = v && v.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
                return r.a.createElement(s.a, {
                    path: b,
                    exact: n,
                    strict: i,
                    location: a,
                    children: function(e) {
                        var n = e.location,
                            i = e.match,
                            a = !!(f ? f(i, n) : i);
                        return r.a.createElement(c.a, l({
                            to: t,
                            className: a ? [d, o].filter(function(e) {
                                return e
                            }).join(" ") : d,
                            style: a ? l({}, m, p) : m,
                            "aria-current": a && h || null
                        }, g))
                    }
                })
            };
            d.propTypes = {
                to: c.a.propTypes.to,
                exact: o.a.bool,
                strict: o.a.bool,
                location: o.a.object,
                activeClassName: o.a.string,
                className: o.a.string,
                activeStyle: o.a.object,
                style: o.a.object,
                isActive: o.a.func,
                "aria-current": o.a.oneOf(["page", "step", "location", "date", "time", "true"])
            }, d.defaultProps = {
                activeClassName: "active",
                "aria-current": "page"
            }, t.a = d
        },
        uYEN: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
                }(i || (i = {}))
        },
        "ua1/": function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Playing = "PLAYING", e.Streaming = "STREAMING", e.Watching = "WATCHING"
                }(i || (i = {})),
                function(e) {
                    e.Playing = "playing", e.Streaming = "broadcasting", e.Watching = "watching"
                }(r || (r = {}))
        },
        uvqV: function(e, t, n) {},
        v2f3: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("cZKs"),
                l = n("aCAx"),
                u = n("KxT4"),
                d = n("IX50"),
                p = n("SmhC"),
                m = n("EMHe"),
                f = n("rwxT"),
                h = n("fWal"),
                g = n("Ue10"),
                v = (n("7fv/"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.renderBodyText = function(e) {
                            return r.createElement(g.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(g.W, null, e))
                        }, n.renderToggles = function() {
                            var e = Object.keys(n.state.vendorPreferences);
                            return r.createElement(g.zb, {
                                padding: {
                                    x: 2,
                                    top: 2
                                },
                                borderTop: !0
                            }, e.map(function(e) {
                                return n.renderToggle(e)
                            }))
                        }, n.renderToggle = function(e) {
                            return r.createElement(g.Xa, {
                                margin: {
                                    bottom: 2
                                },
                                key: e
                            }, r.createElement(g.Ea, {
                                label: n.getToggleTitle(e),
                                orientation: g.Fa.Horizontal
                            }, r.createElement(g.Rb, {
                                checked: !!n.state.vendorPreferences[e],
                                onChange: function() {
                                    return n.onToggle(e)
                                },
                                "data-test-selector": e
                            })))
                        }, n.onToggleAllConsent = function() {
                            n.setState(function(e) {
                                return {
                                    vendorPreferences: e.showPersonalizedAds ? Object(u.e)(e.vendorPreferences, !1) : Object(u.e)(e.vendorPreferences, !0),
                                    showPersonalizedAds: !e.showPersonalizedAds
                                }
                            })
                        }, n.onToggle = function(e) {
                            n.setState(function(t) {
                                var n, r = i.__assign({}, t.vendorPreferences, ((n = {})[e] = !t.vendorPreferences[e], n));
                                return {
                                    vendorPreferences: r,
                                    showPersonalizedAds: !Object(u.d)(r, !1)
                                }
                            })
                        }, n.onClickSave = function() {
                            n.props.saveVendorPreferences(n.state.vendorPreferences), n.props.closeModal()
                        };
                        var a = t.status === u.b.ConsentRequired,
                            o = function(e) {
                                var t = Object(p.a)();
                                return Object.keys(t).reduce(function(n, r) {
                                    var a;
                                    if (!t[r].enabled) return n;
                                    var o = Object(u.i)(t, e, r);
                                    return i.__assign({}, n, ((a = {})[r] = o, a))
                                }, {})
                            }(t.initialPreferences),
                            s = a ? Object(u.e)(o, !0) : o,
                            c = !Object(u.d)(s, !1);
                        return n.state = {
                            showPersonalizedAds: c,
                            vendorPreferences: s
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(g.zb, {
                            background: g.r.Base,
                            className: "gdpr-consent-modal"
                        }, r.createElement(g.zb, {
                            padding: 2,
                            borderBottom: !0,
                            textAlign: g.Lb.Center
                        }, r.createElement(g.W, {
                            bold: !0,
                            fontSize: g.Ca.Size3
                        }, Object(s.d)("Consent Management Tool", "GDPRConsentModal"))), r.createElement(g.Xa, {
                            padding: 2
                        }, this.renderBodyText(Object(s.d)("Twitch respects your privacy. Visiting our site with your browser settings adjusted to accept cookies tells us that you want to use Twitch’s services and that you consent to our use of cookies and other technologies as described in our <x:privacy>Privacy Policy</x:privacy>. You can control your cookies by changing the cookie settings in your browser. Consult our <x:cookies>Cookie Policy</x:cookies> for more information.", {
                            "x:cookies": function(e) {
                                return r.createElement(g.U, {
                                    to: "https://www.twitch.tv/p/legal/cookie-policy/",
                                    targetBlank: !0
                                }, e)
                            },
                            "x:privacy": function(e) {
                                return r.createElement(g.U, {
                                    to: "https://www.twitch.tv/p/legal/privacy-policy/",
                                    targetBlank: !0
                                }, e)
                            }
                        }, "GDPRConsentModal")), this.renderBodyText(Object(s.d)('Additionally, Twitch engages in third-party interest-based ("personalized") advertising activities to support our services and to provide more relevant ad experiences. Thus, not providing or withdrawing your consent may result in seeing advertising that is not as relevant to you. You can turn off personalized ads using the toggle below.', "GDPRConsentModal")), this.renderBodyText(Object(s.d)("Please note that if you turn off personalized ads from third parties you may still see personalized ads from Amazon, which owns Twitch. You can learn more about Amazon’s interest-based ads policy and how to set your advertising preferences <x:link>here</x:link>.", {
                            "x:link": function(e) {
                                return r.createElement(g.U, {
                                    to: "https://www.amazon.co.uk/gp/help/customer/display.html/ref=footer_Interest_Based_Ads_Notice?ie=UTF8&nodeId=201909150",
                                    targetBlank: !0
                                }, e)
                            }
                        }, "GDPRConsentModal")), this.renderBodyText(Object(s.d)("Please note that, if you elect to participate with incentivized ad products (e.g., Watch Ads for Bits), Twitch may show you personalized ads.", "GDPRConsentModal")), r.createElement(g.zb, {
                            border: !0,
                            borderRadius: g.x.Small
                        }, r.createElement(h.a, {
                            id: "show_personalized_ads",
                            checked: this.state.showPersonalizedAds,
                            onChange: this.onToggleAllConsent,
                            label: Object(s.d)("Show me personalized ads", "GDPRConsentModal"),
                            "data-a-target": "gdpr-modal-change-all",
                            description: Object(s.d)("You can elect to opt out of the collection of information to engage in personalized advertising with all third parties by toggling personalized ads on or off. To customize your opt in options you may pick which specific third parties you'd like to have on or off below.", "GDPRConsentModal")
                        }), this.renderToggles())), r.createElement(g.zb, {
                            padding: 2,
                            background: g.r.Alt2
                        }, r.createElement(f.a, {
                            status: m.b.DirtyChanges,
                            onClickSave: this.onClickSave,
                            onClickCancel: this.props.closeModal,
                            saveDataATarget: "gdpr-modal-save",
                            cancelDataATarget: "gdpr-modal-cancel"
                        })), r.createElement(c.a, null))
                    }, t.prototype.getToggleTitle = function(e) {
                        switch (e) {
                            case u.c.Amazon:
                                return "Amazon";
                            case u.c.ComScore:
                                return "ComScore";
                            case u.c.Google:
                                return "Google";
                            case u.c.Nielsen:
                                return "Nielsen";
                            case u.c.SalesforceDMP:
                                return "Salesforce DMP";
                            default:
                                return Object(s.d)("Unknown", "GDPRConsentModal")
                        }
                    }, t
                }(r.Component));
            var b = Object(a.connect)(function(e) {
                var t = e.gdpr;
                return {
                    initialPreferences: t.vendorPreferences,
                    status: t.status
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    saveVendorPreferences: d.c,
                    closeModal: l.c
                }, e)
            })(v);
            n.d(t, !1, function() {
                return "show_personalized_ads"
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, "a", function() {
                return b
            })
        },
        "vR4/": function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, "b", function() {
                    return i
                }), n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
                }(i || (i = {})),
                function(e) {
                    e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
                }(r || (r = {}))
        },
        vfD6: function(e, t, n) {},
        vh9t: function(e, t, n) {},
        wG9U: function(e, t, n) {},
        wsby: function(e, t, n) {},
        wsiY: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "presenceFragment"
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
                                value: "activity"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Playing"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "game"
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
                                                        value: "name"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Streaming"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "stream"
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
                                                        value: "game"
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
                                                                value: "name"
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
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Watching"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "user"
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
                                                        value: "stream"
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
                                                                value: "game"
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
                                                                        value: "name"
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
                                                        value: "hosting"
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
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "availability"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 328
                }
            };
            n.loc.source = {
                body: "# Queries the fields necessary to render presence data\nfragment presenceFragment on User {\nid\nactivity {\ntype\n... on Playing {\ngame {\nid\nname\n}\n}\n... on Streaming {\nstream {\nid\ngame {\nid\nname\n}\n}\n}\n... on Watching {\nuser {\nid\ndisplayName\nlogin\nstream {\nid\ngame {\nid\nname\n}\n}\nhosting {\nid\ndisplayName\nlogin\n}\n}\n}\n}\navailability\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        x1M1: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/MKj"),
                o = n("/0dD"),
                s = n("XDQu"),
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = (e.defaultRes, e.sources),
                            n = (e.darkModeEnabled, i.__rest(e, ["defaultRes", "sources", "darkModeEnabled"])),
                            a = this.props.darkModeEnabled ? t.dark : t.light,
                            o = Object.keys(a);
                        delete n.dispatch;
                        var s = i.__assign({}, n, {
                            src: a[this.props.defaultRes || o[0]],
                            srcSet: o.map(function(e) {
                                return a[e] + " " + e
                            }).join(",")
                        });
                        return r.createElement("img", i.__assign({}, s, {
                            onLoad: this.props.onLoad
                        }))
                    }, t
                }(r.Component);
            var l = Object(a.connect)(function(e) {
                return {
                    darkModeEnabled: Object(s.a)(e) === o.a.Dark
                }
            })(c);
            n.d(t, "a", function() {
                return l
            })
        },
        x73c: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "OnsiteNotifications_View"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "viewedNotifications"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "user"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "notifications"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "summary"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "unseenCount"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "lastSeenAt"
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
                }],
                loc: {
                    start: 0,
                    end: 123
                }
            };
            n.loc.source = {
                body: "mutation OnsiteNotifications_View {\nviewedNotifications {\nuser {\nnotifications {\nsummary {\nunseenCount\nlastSeenAt\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        x7UT: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA");

            function o(e) {
                return function(t) {
                    return function(n) {
                        function o(t) {
                            var i = n.call(this, t) || this;
                            i.unsubscribers = {};
                            var r = {};
                            return e.map(function(e) {
                                e.skip && e.skip(t) || (r[i.getTopic(e.topic, t)] = {
                                    isSubscribing: !0
                                })
                            }), i.state = {
                                status: r,
                                messages: {}
                            }, i
                        }
                        return i.__extends(o, n), o.prototype.componentDidMount = function() {
                            var t = this;
                            e.forEach(function(e) {
                                if (!e.skip || !e.skip(t.props)) {
                                    var n = t.getTopic(e.topic, t.props);
                                    t.unsubscribers[n] = t.subscribe(e, n)
                                }
                            })
                        }, o.prototype.componentWillReceiveProps = function(t) {
                            var n = this,
                                r = {},
                                a = {};
                            e.forEach(function(e) {
                                if (!e.skip || !e.skip(t)) {
                                    var i = n.getTopic(e.topic, t);
                                    r[i] || (r[i] = {
                                        isSubscribing: !0
                                    }), n.unsubscribers[i] ? a[i] = n.unsubscribers[i] : a[i] = n.subscribe(e, i)
                                }
                            }), Object.keys(this.unsubscribers).forEach(function(e) {
                                a[e] || n.unsubscribers[e]()
                            }), this.unsubscribers = a, this.setState(function(e) {
                                return {
                                    status: i.__assign({}, e.status, r)
                                }
                            })
                        }, o.prototype.componentWillUnmount = function() {
                            var e = this;
                            Object.keys(this.unsubscribers).map(function(t) {
                                return e.unsubscribers[t]()
                            })
                        }, o.prototype.render = function() {
                            var e = {
                                pubsub: {
                                    messages: this.state.messages,
                                    status: this.state.status
                                }
                            };
                            return r.createElement(t, i.__assign({}, this.props, e))
                        }, o.prototype.getTopic = function(e, t) {
                            return "string" == typeof e ? e : e(t)
                        }, o.prototype.subscribe = function(e, t) {
                            var n = this;
                            return a.l.subscribe({
                                topic: t,
                                success: function() {
                                    n.setState(function(e) {
                                        var n;
                                        return {
                                            status: i.__assign({}, e.status, (n = {}, n[t] = {
                                                isSubscribing: !1
                                            }, n))
                                        }
                                    })
                                },
                                failure: function(e) {
                                    n.setState(function(n) {
                                        var r;
                                        return {
                                            status: i.__assign({}, n.status, (r = {}, r[t] = {
                                                error: e,
                                                isSubscribing: !1
                                            }, r))
                                        }
                                    })
                                },
                                onMessage: function(t) {
                                    var r = e.mapMessageTypesToProps[t.type || ""] || e.mapMessageTypesToProps["*"];
                                    r && (e.skipMessage && e.skipMessage(t, n.props) || n.setState(function(e) {
                                        var n;
                                        return {
                                            messages: i.__assign({}, e.messages, (n = {}, n[r] = t, n))
                                        }
                                    }))
                                }
                            })
                        }, o
                    }(r.Component)
                }
            }
            n.d(t, "a", function() {
                return o
            })
        },
        y3nP: function(e, t, n) {},
        yGGv: function(e, t, n) {},
        yLwq: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            });
            var i = [{
                id: "profile_image_001",
                urlSlug: "bb97f7e6-f11a-4194-9708-52bf5a5125e8"
            }, {
                id: "profile_image_002",
                urlSlug: "27103734-3cda-44d6-a384-f2ab71e4bb85"
            }, {
                id: "profile_image_003",
                urlSlug: "49988c7b-57bc-4dee-bd4f-6df4ad215d3a"
            }, {
                id: "profile_image_004",
                urlSlug: "0ecbb6c3-fecb-4016-8115-aa467b7c36ed"
            }, {
                id: "profile_image_005",
                urlSlug: "cd618d3e-f14d-4960-b7cf-094231b04735"
            }, {
                id: "profile_image_006",
                urlSlug: "4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5"
            }, {
                id: "profile_image_007",
                urlSlug: "b83b1794-7df9-4878-916c-88c2ad2e4f9f"
            }];

            function r(e, t) {
                var n = 70;
                return 300 === t ? n = 300 : 96 !== t && 80 !== t || (n = 150), "https://static-cdn.jtvnw.net/user-default-pictures/" + e.urlSlug + "-profile_image-" + n + "x" + n + ".jpg"
            }

            function a(e, t) {
                var n = parseInt(e, 10) % i.length;
                return r(i[n], t)
            }
        },
        "yO+B": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_PrimeOffers_CurrentUser"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 95
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOffers_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        z5eY: function(e, t, n) {
            e.exports = n.p + "assets/no-ads-3dc986300153a731584a.svg"
        },
        z8lI: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("GnwI"),
                o = n("O4UZ"),
                s = n("Ue10"),
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.g)(this.props.errorType);
                        return r.createElement(s.zb, {
                            background: s.r.Alt2,
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            padding: {
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            textAlign: s.Lb.Center,
                            "data-test-selector": this.props.testTarget,
                            "data-a-target": this.props.testTarget
                        }, r.createElement(s.W, {
                            type: s.Pb.H4,
                            align: s.Zb.Middle
                        }, r.createElement(s.zb, {
                            padding: 1,
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center,
                            textAlign: s.Lb.Left,
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Ca.Size5,
                            "data-a-target": "prime-error-glitch"
                        }, r.createElement(s.Xa, {
                            margin: {
                                right: 1
                            },
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center
                        }, r.createElement(s.ob, {
                            asset: s.pb.DeadGlitch,
                            type: s.qb.Alert,
                            width: 20,
                            height: 20
                        })), r.createElement(s.W, {
                            type: s.Pb.P
                        }, e))))
                    }, t
                }(r.Component),
                l = Object(a.b)("PrimeError", {
                    autoReportInteractive: !0
                })(c);
            n.d(t, "a", function() {
                return l
            })
        },
        zUQL: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_Current_User"
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
                                        value: "hasPrime"
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
                    end: 56
                }
            };
            n.loc.source = {
                body: "query Prime_Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        zhJx: function(e, t, n) {},
        zmay: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Bits_BuyCard_Offers"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "withChannel"
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
                                value: "bitsOffers"
                            },
                            arguments: [],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "skip"
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "bitsOffersFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "currentUser"
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
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "idSHA1"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "bitsOffers"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "bitsOffersFragment"
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
                                            value: "withChannel"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
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
                                                        value: "cheerMinimumBits"
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
                    end: 440
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\nquery Bits_BuyCard_Offers($withChannel: Boolean! $isLoggedIn: Boolean! $channelLogin: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $channelLogin) @include(if: $withChannel) {\nid\ndisplayName\ncheer {\nid\nsettings {\ncheerMinimumBits\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("hWzS").definitions)), e.exports = i
        }
    }
]);