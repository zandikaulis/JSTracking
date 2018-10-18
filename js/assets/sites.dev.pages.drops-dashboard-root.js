(window.webpackJsonp = window.webpackJsonp || []).push([
    [200], {
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("Ue10"),
                i = (n("sL9O"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDraggingOver: !1
                        }, t.onDragEnter = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !0
                            })
                        }, t.onDragLeave = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !1
                            })
                        }, t.onFileInputChange = function(e) {
                            e.preventDefault(), t.finalizeSelections(e.target.files), e.target.value = ""
                        }, t.onFileDrop = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !1
                            }), t.finalizeSelections(e.dataTransfer.files)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, r.createElement(s.Pa, {
                            position: s.fb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: s.cc.Above
                        }, r.createElement("input", {
                            "data-a-target": "file-picker-input",
                            "data-test-selector": "file-picker-input",
                            className: "drag-and-drop-file-picker__input",
                            accept: this.props.allowedFileTypes.join(","),
                            multiple: this.props.multiFile || !1,
                            onChange: this.onFileInputChange,
                            type: "file",
                            onDragLeave: this.onDragLeave,
                            onDragEnter: this.onDragEnter,
                            onDrop: this.onFileDrop
                        })), this.props.children)
                    }, t.prototype.finalizeSelections = function(e) {
                        e && this.props.onFilesSubmitted(Array.from(e))
                    }, t
                }(r.Component))
        },
        "/aPz": function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return i
            }), n.d(t, "h", function() {
                return o
            }), n.d(t, "i", function() {
                return c
            }), n.d(t, "j", function() {
                return u
            }), n.d(t, "H", function() {
                return l
            }), n.d(t, "I", function() {
                return p
            }), n.d(t, "n", function() {
                return d
            }), n.d(t, "A", function() {
                return E
            }), n.d(t, "G", function() {
                return m
            }), n.d(t, "r", function() {
                return h
            }), n.d(t, "s", function() {
                return g
            }), n.d(t, "o", function() {
                return _
            }), n.d(t, "t", function() {
                return f
            }), n.d(t, "v", function() {
                return T
            }), n.d(t, "l", function() {
                return I
            }), n.d(t, "d", function() {
                return D
            }), n.d(t, "c", function() {
                return N
            }), n.d(t, "B", function() {
                return O
            }), n.d(t, "b", function() {
                return S
            }), n.d(t, "a", function() {
                return R
            }), n.d(t, "E", function() {
                return A
            }), n.d(t, "F", function() {
                return C
            }), n.d(t, "m", function() {
                return b
            }), n.d(t, "C", function() {
                return v
            }), n.d(t, "D", function() {
                return L
            }), n.d(t, "J", function() {
                return P
            }), n.d(t, "q", function() {
                return U
            }), n.d(t, "w", function() {
                return y
            }), n.d(t, "f", function() {
                return F
            }), n.d(t, "g", function() {
                return M
            }), n.d(t, "x", function() {
                return w
            }), n.d(t, "k", function() {
                return j
            }), n.d(t, "p", function() {
                return k
            }), n.d(t, "u", function() {
                return G
            }), n.d(t, "z", function() {
                return V
            }), n.d(t, "y", function() {
                return B
            });
            var a = n("/7QA"),
                r = n("0Log"),
                s = n("geRD");

            function i(e) {
                return r.PubsubTopic.BroadcastSettingsUpdate + "." + e
            }

            function o(e) {
                return r.PubsubTopic.ChatRoom + "." + e
            }

            function c(e) {
                return r.PubsubTopic.ChatRoomsChannel + "." + e
            }

            function u(e) {
                return r.PubsubTopic.ChatRoomsUser + "." + e
            }

            function l(e) {
                return r.PubsubTopic.VideoPlayback + "." + e
            }

            function p(e) {
                return r.PubsubTopic.VideoThumbnailProcessing + "." + e
            }

            function d(e) {
                return r.PubsubTopic.ImageUpload + "." + e
            }

            function E(e) {
                return r.PubsubTopic.UploadService + "." + e
            }

            function m(e) {
                return r.PubsubTopic.VideoPlaybackById + "." + e
            }

            function h(e) {
                return r.PubsubTopic.PayoutOnboardingEvents + "." + e
            }

            function g(e) {
                return r.PubsubTopic.Presence + "." + e
            }

            function _(e, t) {
                return r.PubsubTopic.ModerationActionsByUserAndChannel + "." + e + "." + t
            }

            function f(e) {
                return r.PubsubTopic.Raid + "." + e
            }

            function T(e) {
                return r.PubsubTopic.StreamChange + "." + e
            }

            function I(e) {
                return r.PubsubTopic.Friendship + "." + e
            }

            function D(e) {
                return r.PubsubTopic.ChannelBitsPinEvents + "." + e
            }

            function N(e) {
                return r.PubsubTopic.BitsLeaderboardEvents + "." + e.id
            }

            function O(e) {
                return r.PubsubTopic.UserBitsUpdates + "." + e
            }

            function S() {
                return r.PubsubTopic.BitsCampaignEvents + ".updates"
            }

            function R(e) {
                return r.PubsubTopic.ChannelBitsPinEvents + "." + e
            }

            function A(e) {
                return r.PubsubTopic.UserPropertiesUpdates + "." + e
            }

            function C(e) {
                return r.PubsubTopic.UserSubscribeEvents + "." + e
            }

            function b(e) {
                return r.PubsubTopic.CampaignGlobalEvents + "." + e
            }

            function v(e) {
                return r.PubsubTopic.CampaignUserEvents + "." + e
            }

            function L(e) {
                return r.PubsubTopic.UserCommerceEvents + "." + e
            }

            function P(e) {
                return r.PubsubTopic.Whispers + "." + e
            }

            function U(e) {
                return r.PubsubTopic.OnsiteNotifications + "." + e
            }

            function y(e) {
                return r.PubsubTopic.StreamChatRoom + "." + e
            }

            function F(e) {
                return r.PubsubTopic.ChannelEventUpdates + "." + e
            }

            function M(e) {
                return r.PubsubTopic.ChannelSquadUpdates + "." + e
            }

            function w(e) {
                return r.PubsubTopic.SubscribersCSV + "." + e
            }

            function j(e) {
                return r.PubsubTopic.CheerbombEventsTopic + "." + e
            }

            function k(e) {
                return r.PubsubTopic.MysteryGift + "." + e
            }

            function G(e) {
                return r.PubsubTopic.SquadUpdates + "." + e
            }

            function V(e) {
                return a.l.subscribe({
                    topic: e.topic,
                    onMessage: function(t) {
                        t.type && !e.type && !e.types || t.type && e.type && t.type !== e.type || t.type && e.types && !e.types.includes(t.type) || Object(s.e)(e.query, e.variables, function(n) {
                            return e.mutator(t, n)
                        }, function(n) {
                            return !!e.skipMessage && e.skipMessage(t, n)
                        })
                    }
                })
            }

            function B(e) {
                return a.l.subscribe({
                    topic: e.topic,
                    onMessage: function(t) {
                        t.type && t.type !== e.type || Object(s.d)({
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
        "0Log": function(e, t, n) {
            "use strict";
            var a = n("VSaV");
            n.o(a, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
                return a.FrienshipChangeType
            }), n.o(a, "ModerationActions") && n.d(t, "ModerationActions", function() {
                return a.ModerationActions
            }), n.o(a, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
                return a.PubsubMessageType
            }), n.o(a, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
                return a.PubsubTopic
            }), n.o(a, "SquadStatus") && n.d(t, "SquadStatus", function() {
                return a.SquadStatus
            }), n.o(a, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
                return a.TargetedModerationActions
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
            var s = n("WQCf");
            n.d(t, "FrienshipChangeType", function() {
                return s.a
            }), n.d(t, "ModerationActions", function() {
                return s.b
            }), n.d(t, "PubsubMessageType", function() {
                return s.c
            }), n.d(t, "PubsubTopic", function() {
                return s.d
            }), n.d(t, "SquadStatus", function() {
                return s.e
            }), n.d(t, "TargetedModerationActions", function() {
                return s.f
            })
        },
        "0xbx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                r = n("Svt6"),
                s = n("+GjP"),
                i = n("1mFg");

            function o(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, n, o;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                t = Object(s.e)(r.a + "/v5/rbac/drops/jwt", {
                                    operation: e
                                }), a.label = 1;
                            case 1:
                                return a.trys.push([1, 6, , 7]), [4, Object(i.a)(t)];
                            case 2:
                                return 200 !== (n = a.sent()).status ? [3, 4] : [4, n.json()];
                            case 3:
                                return o = a.sent(), [2, o.token];
                            case 4:
                                return [2, null];
                            case 5:
                                return [3, 7];
                            case 6:
                                return a.sent(), [2, null];
                            case 7:
                                return [2]
                        }
                    })
                })
            }
        },
        "2/NB": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.JPEG = "image/jpeg", e.PNG = "image/png", e.GIF = "image/gif"
                }(a || (a = {}));
            var r = [a.JPEG, a.PNG]
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
        DMoW: function(e, t, n) {
            "use strict";
            var a, r, s, i, o, c, u, l, p, d, E, m, h, g, _, f, T, I, D, N, O, S, R, A, C, b, v, L, P, U, y, F, M, w, j, k, G, V, B, H, x, W, X, Y, z, K, q, Z, J, Q, $, ee, te, ne, ae, re, se, ie, oe, ce, ue, le, pe, de, Ee, me, he, ge, _e, fe, Te, Ie, De, Ne, Oe, Se, Re, Ae, Ce, be, ve, Le, Pe, Ue, ye, Fe, Me, we, je, ke, Ge, Ve, Be, He, xe, We, Xe, Ye, ze, Ke, qe, Ze, Je, Qe, $e, et, tt, nt, at, rt, st;
            n.d(t, "c", function() {
                    return r
                }), n.d(t, "F", function() {
                    return o
                }), n.d(t, "y", function() {
                    return c
                }), n.d(t, "g", function() {
                    return h
                }), n.d(t, "e", function() {
                    return T
                }), n.d(t, "f", function() {
                    return I
                }), n.d(t, "k", function() {
                    return O
                }), n.d(t, "O", function() {
                    return S
                }), n.d(t, "H", function() {
                    return R
                }), n.d(t, "o", function() {
                    return A
                }), n.d(t, "i", function() {
                    return v
                }), n.d(t, "G", function() {
                    return L
                }), n.d(t, "b", function() {
                    return w
                }), n.d(t, "q", function() {
                    return j
                }), n.d(t, "p", function() {
                    return G
                }), n.d(t, "J", function() {
                    return V
                }), n.d(t, "L", function() {
                    return B
                }), n.d(t, "A", function() {
                    return H
                }), n.d(t, "M", function() {
                    return x
                }), n.d(t, "r", function() {
                    return Y
                }), n.d(t, "n", function() {
                    return z
                }), n.d(t, "K", function() {
                    return K
                }), n.d(t, "a", function() {
                    return q
                }), n.d(t, "u", function() {
                    return Z
                }), n.d(t, "w", function() {
                    return J
                }), n.d(t, "C", function() {
                    return $
                }), n.d(t, "D", function() {
                    return ee
                }), n.d(t, "B", function() {
                    return ne
                }), n.d(t, "E", function() {
                    return ae
                }), n.d(t, "N", function() {
                    return he
                }), n.d(t, "m", function() {
                    return Se
                }), n.d(t, "l", function() {
                    return Re
                }), n.d(t, "P", function() {
                    return ve
                }), n.d(t, "z", function() {
                    return Me
                }), n.d(t, "t", function() {
                    return ke
                }), n.d(t, "j", function() {
                    return Ve
                }), n.d(t, "h", function() {
                    return Be
                }), n.d(t, "v", function() {
                    return He
                }), n.d(t, "I", function() {
                    return We
                }), n.d(t, "x", function() {
                    return qe
                }), n.d(t, "d", function() {
                    return at
                }), n.d(t, "s", function() {
                    return rt
                }),
                function(e) {
                    e.CHANNEL_FEED_COMMENT_REPORT = "CHANNEL_FEED_COMMENT_REPORT", e.CHANNEL_FEED_POST_REPORT = "CHANNEL_FEED_POST_REPORT", e.CHAT_REPORT = "CHAT_REPORT", e.CLIP_REPORT = "CLIP_REPORT", e.COLLECTION_REPORT = "COLLECTION_REPORT", e.CURSE_PRIVATE_GROUP = "CURSE_PRIVATE_GROUP", e.CURSE_PUBLIC_GROUP = "CURSE_PUBLIC_GROUP", e.CURSE_WHISPER = "CURSE_WHISPER", e.EVENT_REPORT = "EVENT_REPORT", e.EXTENSION_REPORT = "EXTENSION_REPORT", e.LIVE_UP_REPORT = "LIVE_UP_REPORT", e.RAID_REPORT = "RAID_REPORT", e.ROOM_REPORT = "ROOM_REPORT", e.SINGS_DUET_SEED_REPORT = "SINGS_DUET_SEED_REPORT", e.SINGS_GROUP_BIO_REPORT = "SINGS_GROUP_BIO_REPORT", e.SINGS_GROUP_CHAT_REPORT = "SINGS_GROUP_CHAT_REPORT", e.SINGS_GROUP_NAME_REPORT = "SINGS_GROUP_NAME_REPORT", e.SINGS_VOD_COMMENT_REPORT = "SINGS_VOD_COMMENT_REPORT", e.USER_REPORT = "USER_REPORT", e.VOD_COMMENT_REPORT = "VOD_COMMENT_REPORT", e.VOD_REPORT = "VOD_REPORT", e.WHISPER_REPORT = "WHISPER_REPORT"
                }(a || (a = {})),
                function(e) {
                    e.CHAT = "CHAT", e.WHISPER = "WHISPER"
                }(r || (r = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_MOD = "TARGET_ALREADY_MOD", e.TARGET_IS_CHAT_BANNED = "TARGET_IS_CHAT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(s || (s = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND", e.TARGET_NOT_MOD = "TARGET_NOT_MOD"
                }(i || (i = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.REVOKEE_NOT_FOUND = "REVOKEE_NOT_FOUND", e.REVOKEE_NOT_VIP = "REVOKEE_NOT_VIP"
                }(o || (o = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.GRANTEE_ALREADY_VIP = "GRANTEE_ALREADY_VIP", e.GRANTEE_CHAT_BANNED = "GRANTEE_CHAT_BANNED", e.GRANTEE_NOT_FOUND = "GRANTEE_NOT_FOUND", e.MAX_VIPS_REACHED = "MAX_VIPS_REACHED", e.VIP_ACHIEVEMENT_INCOMPLETE = "VIP_ACHIEVEMENT_INCOMPLETE"
                }(c || (c = {})),
                function(e) {
                    e.PLAYING = "PLAYING", e.STREAMING = "STREAMING", e.WATCHING = "WATCHING"
                }(u || (u = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(l || (l = {})),
                function(e) {
                    e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(p || (p = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(d || (d = {})),
                function(e) {
                    e.AR = "AR", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.EN_GB = "EN_GB", e.ES = "ES", e.ES_MX = "ES_MX", e.FI = "FI", e.FR = "FR", e.HI = "HI", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.PL = "PL", e.PT = "PT", e.PT_BR = "PT_BR", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_CN = "ZH_CN", e.ZH_TW = "ZH_TW"
                }(E || (E = {})),
                function(e) {
                    e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_HK = "ZH_HK"
                }(m || (m = {})),
                function(e) {
                    e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
                }(h || (h = {})),
                function(e) {
                    e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
                }(g || (g = {})),
                function(e) {
                    e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
                }(_ || (_ = {})),
                function(e) {
                    e.AD = "AD", e.BUNDLE = "BUNDLE"
                }(f || (f = {})),
                function(e) {
                    e.GAME_TRAILER = "GAME_TRAILER", e.MISC_TRAILER = "MISC_TRAILER", e.PAY_TO_STREAM = "PAY_TO_STREAM"
                }(T || (T = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
                }(I || (I = {})),
                function(e) {
                    e.FIXED_VALUE_OFF = "FIXED_VALUE_OFF", e.NONE = "NONE", e.PERCENT_OFF = "PERCENT_OFF"
                }(D || (D = {})),
                function(e) {
                    e.CHEER = "CHEER"
                }(N || (N = {})),
                function(e) {
                    e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
                }(O || (O = {})),
                function(e) {
                    e.PRIVATE = "PRIVATE", e.PUBLIC = "PUBLIC"
                }(S || (S = {})),
                function(e) {
                    e.ENDED = "ENDED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.UNKNOWN = "UNKNOWN"
                }(R || (R = {})),
                function(e) {
                    e.ARCHIVES_DISABLED = "ARCHIVES_DISABLED", e.BROADCASTER_NOT_LIVE = "BROADCASTER_NOT_LIVE", e.BROADCAST_FORMAT_INVALID_PREMIERE = "BROADCAST_FORMAT_INVALID_PREMIERE", e.BROADCAST_FORMAT_INVALID_RERUN = "BROADCAST_FORMAT_INVALID_RERUN", e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.MAX_DESCRIPTION_LENGTH_EXCEEDED = "MAX_DESCRIPTION_LENGTH_EXCEEDED", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED", e.VOD_NOT_READY = "VOD_NOT_READY"
                }(A || (A = {})),
                function(e) {
                    e.DARK = "DARK", e.LIGHT = "LIGHT"
                }(C || (C = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.DISPLAY_ONLY = "DISPLAY_ONLY", e.FIRST_PARTY = "FIRST_PARTY", e.RENDER_ONLY = "RENDER_ONLY", e.SPONSORED = "SPONSORED", e.THIRD_PARTY = "THIRD_PARTY", e.UNKNOWN = "UNKNOWN"
                }(b || (b = {})),
                function(e) {
                    e.BANNED = "BANNED", e.FOLLOWERS_ONLY = "FOLLOWERS_ONLY", e.SLOW_MODE = "SLOW_MODE", e.SUBSCRIBERS_ONLY = "SUBSCRIBERS_ONLY", e.VERIFIED_ONLY = "VERIFIED_ONLY"
                }(v || (v = {})),
                function(e) {
                    e.AMOUNT_BELOW_MIN_BITS = "AMOUNT_BELOW_MIN_BITS", e.AUTO_MOD_MESSAGE = "AUTO_MOD_MESSAGE", e.AUTO_MOD_PENDING = "AUTO_MOD_PENDING", e.CHANNEL_BLOCKED_TERMS = "CHANNEL_BLOCKED_TERMS", e.CHANNEL_INELIGIBLE = "CHANNEL_INELIGIBLE", e.EMOTE_AMOUNT_BELOW_MIN_BITS = "EMOTE_AMOUNT_BELOW_MIN_BITS", e.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE", e.INVALID_BITS_AMOUNT = "INVALID_BITS_AMOUNT", e.INVALID_BITS_MESSAGE = "INVALID_BITS_MESSAGE", e.INVALID_EVENT_ID = "INVALID_EVENT_ID", e.MESSAGE_LENGTH_EXCEEDED = "MESSAGE_LENGTH_EXCEEDED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.TOO_LARGE_BITS_EMOTE = "TOO_LARGE_BITS_EMOTE", e.TOO_LARGE_CHEER = "TOO_LARGE_CHEER", e.UNKNOWN = "UNKNOWN", e.USER_BANNED = "USER_BANNED", e.USER_INELIGIBLE = "USER_INELIGIBLE", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_MESSAGE = "ZALGO_MESSAGE"
                }(L || (L = {})),
                function(e) {
                    e.NEW_CHATTER = "NEW_CHATTER"
                }(P || (P = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(U || (U = {})),
                function(e) {
                    e.FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.SUB_ONLY_MODE_ENFORCEMENT_FAILED = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT"
                }(y || (y = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(F || (F = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.DISMISSED = "DISMISSED", e.ELIGIBLE = "ELIGIBLE", e.REDEEMED = "REDEEMED"
                }(M || (M = {})),
                function(e) {
                    e.DURATION_INVALID = "DURATION_INVALID", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_BANNED = "TARGET_ALREADY_BANNED", e.TARGET_IS_ADMIN = "TARGET_IS_ADMIN", e.TARGET_IS_ANONYMOUS = "TARGET_IS_ANONYMOUS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_GLOBAL_MOD = "TARGET_IS_GLOBAL_MOD", e.TARGET_IS_MOD = "TARGET_IS_MOD", e.TARGET_IS_SELF = "TARGET_IS_SELF", e.TARGET_IS_STAFF = "TARGET_IS_STAFF", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(w || (w = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.SUCCESS = "SUCCESS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_MODERATOR = "TARGET_IS_MODERATOR"
                }(j || (j = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_BANNED = "TARGET_NOT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(k || (k = {})),
                function(e) {
                    e.EUR = "EUR", e.GBP = "GBP", e.USD = "USD"
                }(G || (G = {})),
                function(e) {
                    e.MONTH = "MONTH", e.ONE_TIME = "ONE_TIME", e.WEEK = "WEEK", e.YEAR = "YEAR"
                }(V || (V = {})),
                function(e) {
                    e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
                }(B || (B = {})),
                function(e) {
                    e.GOOGLE_IAB = "GOOGLE_IAB", e.PRIME = "PRIME", e.RECURLY = "RECURLY", e.XSOLLA_V3 = "XSOLLA_V3", e.ZUORA = "ZUORA"
                }(H || (H = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
                }(x || (x = {})),
                function(e) {
                    e.AMAZON = "AMAZON", e.CREDIT_CARD = "CREDIT_CARD", e.GOOGLE_IAB = "GOOGLE_IAB", e.PAYPAL = "PAYPAL"
                }(W || (W = {})),
                function(e) {
                    e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.DISCOVER = "DISCOVER", e.MASTERCARD = "MASTERCARD", e.VISA = "VISA"
                }(X || (X = {})),
                function(e) {
                    e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
                }(Y || (Y = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CLIP = "CLIP", e.LIVE_CHANNEL = "LIVE_CHANNEL", e.VOD = "VOD"
                }(z || (z = {})),
                function(e) {
                    e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
                }(K || (K = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
                }(q || (q = {})),
                function(e) {
                    e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
                }(Z || (Z = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
                }(J || (J = {})),
                function(e) {
                    e.GAME_COMMERCE = "GAME_COMMERCE", e.GAME_COMMERCE_V2 = "GAME_COMMERCE_V2"
                }(Q || (Q = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
                }($ || ($ = {})),
                function(e) {
                    e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
                }(ee || (ee = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_AGREEMENT_VERSION = "INVALID_AGREEMENT_VERSION", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(te || (te = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
                }(ne || (ne = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
                }(ae || (ae = {})),
                function(e) {
                    e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.EMAIL = "EMAIL", e.NAME = "NAME", e.POSTAL = "POSTAL", e.STATE = "STATE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(re || (re = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_FORMAT = "INVALID_FORMAT", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(se || (se = {})),
                function(e) {
                    e.BIRTHDATE = "BIRTHDATE", e.CITY = "CITY", e.COMPANY_NAME = "COMPANY_NAME", e.COUNTRY_CODE = "COUNTRY_CODE", e.EMAIL = "EMAIL", e.FIRST_NAME = "FIRST_NAME", e.LAST_NAME = "LAST_NAME", e.MIDDLE_NAME = "MIDDLE_NAME", e.PARENT_EMAIL = "PARENT_EMAIL", e.PARENT_NAME = "PARENT_NAME", e.POSTAL = "POSTAL", e.STATE_CODE = "STATE_CODE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ie || (ie = {})),
                function(e) {
                    e.ROYALTY = "ROYALTY", e.SERVICE = "SERVICE"
                }(oe || (oe = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EVERYONE = "EVERYONE", e.MODERATOR = "MODERATOR", e.SUBSCRIBER = "SUBSCRIBER"
                }(ce || (ce = {})),
                function(e) {
                    e.MAX_ROOMS_LIMIT_EXCEEDED = "MAX_ROOMS_LIMIT_EXCEEDED", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(ue || (ue = {})),
                function(e) {
                    e.ADMIN = "ADMIN", e.BROADCASTER = "BROADCASTER", e.GLOBALMOD = "GLOBALMOD", e.MOD = "MOD", e.REGULAR = "REGULAR", e.STAFF = "STAFF"
                }(le || (le = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(pe || (pe = {})),
                function(e) {
                    e.AUTO_MOD_ENFORCEMENT_FAILED = "AUTO_MOD_ENFORCEMENT_FAILED", e.EMOTE_ONLY_MODE_ENFORCEMENT_FAILED = "EMOTE_ONLY_MODE_ENFORCEMENT_FAILED", e.FORBIDDEN = "FORBIDDEN", e.R9K_MODE_ENFORCEMENT_FAILED = "R9K_MODE_ENFORCEMENT_FAILED", e.RATE_LIMIT_FAILED = "RATE_LIMIT_FAILED", e.SLOW_MODE_ENFORCEMENT_FAILED = "SLOW_MODE_ENFORCEMENT_FAILED", e.SPAM_ENFORCEMENT_FAILED = "SPAM_ENFORCEMENT_FAILED", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_ENFORCEMENT_FAILED = "ZALGO_ENFORCEMENT_FAILED"
                }(de || (de = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.SLOW_MODE_DURATION_INVALID = "SLOW_MODE_DURATION_INVALID"
                }(Ee || (Ee = {})),
                function(e) {
                    e.CSGO_SKILL = "CSGO_SKILL", e.LOL_SUMMONER_RANK = "LOL_SUMMONER_RANK", e.RELEVANCE = "RELEVANCE", e.VIEWER_COUNT = "VIEWER_COUNT"
                }(me || (me = {})),
                function(e) {
                    e.CONTENT = "CONTENT", e.TOP = "TOP"
                }(he || (he = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(ge || (ge = {})),
                function(e) {
                    e.CLAIMABLE_GIFT_CREATION_ERROR = "CLAIMABLE_GIFT_CREATION_ERROR", e.GIFT_CREATION_ERROR = "GIFT_CREATION_ERROR", e.MAX_GIFTS_FOR_OFFER_EXCEEDED = "MAX_GIFTS_FOR_OFFER_EXCEEDED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(_e || (_e = {})),
                function(e) {
                    e.CLAIM_CODE = "CLAIM_CODE", e.DIRECT_ENTITLEMENT = "DIRECT_ENTITLEMENT", e.EXTERNAL = "EXTERNAL"
                }(fe || (fe = {})),
                function(e) {
                    e.ERROR_STATUS = "ERROR_STATUS", e.GIFT_CLAIMED = "GIFT_CLAIMED", e.GIFT_CLAIM_PENDING = "GIFT_CLAIM_PENDING"
                }(Te || (Te = {})),
                function(e) {
                    e.GIFT_NOT_CLAIMABLE = "GIFT_NOT_CLAIMABLE", e.NON_EXISTENT_GIFT = "NON_EXISTENT_GIFT", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.USER_DOES_NOT_OWN_GIFT = "USER_DOES_NOT_OWN_GIFT"
                }(Ie || (Ie = {})),
                function(e) {
                    e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
                }(De || (De = {})),
                function(e) {
                    e.TOO_MANY_RECENT_SPENDS = "TOO_MANY_RECENT_SPENDS", e.UNABLE_TO_SPEND = "UNABLE_TO_SPEND"
                }(Ne || (Ne = {})),
                function(e) {
                    e.OFFER_ALREADY_CLAIMED = "OFFER_ALREADY_CLAIMED", e.UNKNOWN = "UNKNOWN"
                }(Oe || (Oe = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.SERIES = "SERIES"
                }(Se || (Se = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK", e.TRENDING = "TRENDING"
                }(Re || (Re = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK"
                }(Ae || (Ae = {})),
                function(e) {
                    e.CREATED_AT_ASC = "CREATED_AT_ASC", e.CREATED_AT_DESC = "CREATED_AT_DESC", e.TRENDING = "TRENDING", e.VIEWS_ASC = "VIEWS_ASC", e.VIEWS_DESC = "VIEWS_DESC"
                }(Ce || (Ce = {})),
                function(e) {
                    e.HIGH = "HIGH", e.LOW = "LOW", e.MEDIUM = "MEDIUM"
                }(be || (be = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.NOT_RESTRICTED = "NOT_RESTRICTED", e.PERMITTED = "PERMITTED", e.TEMPORARY = "TEMPORARY"
                }(ve || (ve = {})),
                function(e) {
                    e.BODY_EMPTY = "BODY_EMPTY", e.NOT_DELIVERED = "NOT_DELIVERED", e.TARGET_BANNED = "TARGET_BANNED", e.TARGET_RESTRICTED = "TARGET_RESTRICTED"
                }(Le || (Le = {})),
                function(e) {
                    e.ALREADY_LINKED = "ALREADY_LINKED", e.CODE_EXPIRED = "CODE_EXPIRED", e.CODE_INCORRECT = "CODE_INCORRECT"
                }(Pe || (Pe = {})),
                function(e) {
                    e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
                }(Ue || (Ue = {})),
                function(e) {
                    e.ASC = "ASC", e.DESC = "DESC"
                }(ye || (ye = {})),
                function(e) {
                    e.TIME = "TIME", e.VIEWS = "VIEWS"
                }(Fe || (Fe = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
                }(Me || (Me = {})),
                function(e) {
                    e.ALREADY_CLAIMED = "ALREADY_CLAIMED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN = "UNKNOWN"
                }(we || (we = {})),
                function(e) {
                    e.BITS_KEY_CODE = "BITS_KEY_CODE"
                }(je || (je = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
                }(ke || (ke = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING"
                }(Ge || (Ge = {})),
                function(e) {
                    e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ve || (Ve = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Be || (Be = {})),
                function(e) {
                    e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
                }(He || (He = {})),
                function(e) {
                    e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(xe || (xe = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(We || (We = {})),
                function(e) {
                    e.BASELINE = "BASELINE", e.HIGH = "HIGH", e.MAIN = "MAIN"
                }(Xe || (Xe = {})),
                function(e) {
                    e.HYPE = "HYPE", e.STARTTIME = "STARTTIME"
                }(Ye || (Ye = {})),
                function(e) {
                    e.CANCELLED = "CANCELLED", e.FAILED = "FAILED", e.SCHEDULED = "SCHEDULED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UNSCHEDULED = "UNSCHEDULED"
                }(ze || (ze = {})),
                function(e) {
                    e.PREMIERE = "PREMIERE", e.SEGMENT = "SEGMENT", e.SINGLE = "SINGLE", e.TIMETABLE = "TIMETABLE"
                }(Ke || (Ke = {})),
                function(e) {
                    e.ALL = "ALL", e.LIVE = "LIVE"
                }(qe || (qe = {})),
                function(e) {
                    e.PRICE_ASC = "PRICE_ASC", e.PRICE_DESC = "PRICE_DESC", e.PURCHASE_DATE_ASC = "PURCHASE_DATE_ASC", e.PURCHASE_DATE_DESC = "PURCHASE_DATE_DESC"
                }(Ze || (Ze = {})),
                function(e) {
                    e.ALL = "ALL", e.SUBSCRIPTIONS = "SUBSCRIPTIONS"
                }(Je || (Je = {})),
                function(e) {
                    e.SUBSCRIPTION = "SUBSCRIPTION"
                }(Qe || (Qe = {})),
                function(e) {
                    e.MONKEYS = "MONKEYS", e.PURPLE = "PURPLE", e.ROBOTS = "ROBOTS"
                }($e || ($e = {})),
                function(e) {
                    e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
                }(et || (et = {})),
                function(e) {
                    e.INVALID_USER_ID = "INVALID_USER_ID", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(tt || (tt = {})),
                function(e) {
                    e.DELETED = "DELETED", e.PENDING_REVIEW = "PENDING_REVIEW", e.PENDING_REVIEW_SPAM = "PENDING_REVIEW_SPAM", e.PUBLISHED = "PUBLISHED", e.UNPUBLISHED = "UNPUBLISHED"
                }(nt || (nt = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED"
                }(at || (at = {})),
                function(e) {
                    e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
                }(rt || (rt = {})),
                function(e) {
                    e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
                }(st || (st = {}))
        },
        GD6M: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("fvjX"),
                i = n("u5aL"),
                o = n("GnwI"),
                c = n("Ue10"),
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            e.preventDefault(), t.props.onClick(t.props.game)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(c.Ua, {
                            onClick: this.onClick
                        }, r.createElement(c.Xa, {
                            padding: 1
                        }, r.createElement(c.W, null, this.props.game.name)))
                    }, t
                }(r.Component),
                l = Object(s.compose)(Object(o.b)("DevGameSuggestion", {
                    autoReportInteractive: !0
                }))(u),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            t.props.onLabelRemove(t.props.game)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(c.Ib, {
                            onClick: this.onClick,
                            label: this.props.game.name
                        })
                    }, t
                }(r.Component),
                d = 100,
                E = "GAME_SEARCH_INPUT_SELECTOR",
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            searchTerm: "",
                            showSuggestions: !1,
                            games: []
                        }, n.onGameSearch = function(e) {
                            e.preventDefault(), n.setState({
                                searchTerm: e.target.value,
                                showSuggestions: e.target.value.length > 0
                            }, function() {
                                n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.inputTimer = setTimeout(function() {
                                    return n.props.onInputChange(n.state.searchTerm)
                                }, d)
                            })
                        }, n.onClickOut = function() {
                            n.setState({
                                showSuggestions: !1
                            })
                        }, n.onFocus = function(e) {
                            e.preventDefault(), n.props.gameSuggestions.length && n.setState({
                                showSuggestions: !0
                            })
                        }, n.onLabelClick = function(e) {
                            n.setState(function(t) {
                                var n = t.games.findIndex(function(t) {
                                    return t._id === e._id
                                });
                                return n > -1 ? {
                                    games: t.games.slice(0, n).concat(t.games.slice(n + 1))
                                } : {
                                    games: t.games
                                }
                            }, n.reportGames)
                        }, n.renderSuggestions = function() {
                            return n.props.gameSuggestions.map(function(e, t) {
                                return r.createElement(l, {
                                    key: t,
                                    game: e,
                                    onClick: n.onSuggestionClick
                                })
                            })
                        }, n.renderSelections = function() {
                            return n.state.games.map(function(e, t) {
                                return r.createElement(c.Xa, {
                                    display: c.X.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, r.createElement(p, {
                                    game: e,
                                    key: t,
                                    onLabelRemove: n.onLabelClick
                                }))
                            })
                        }, n.onSuggestionClick = function(e) {
                            n.props.multi ? n.setState(function(t) {
                                return t.games.some(function(t) {
                                    return t._id === e._id
                                }) ? {
                                    games: t.games,
                                    showSuggestions: !1,
                                    searchTerm: ""
                                } : {
                                    games: t.games.concat([e]),
                                    showSuggestions: !1,
                                    searchTerm: ""
                                }
                            }, n.reportGames) : n.setState({
                                games: [e],
                                showSuggestions: !1,
                                searchTerm: ""
                            }, n.reportGames)
                        }, n.reportGames = function() {
                            n.props.onGameSelect(n.state.games)
                        }, n.state.games = t.defaultGames || [], n
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.gameSuggestions.length !== this.props.gameSuggestions.length;
                        this.setState(function(n) {
                            return !t && n.showSuggestions || t && e.gameSuggestions.length > 0 ? {
                                showSuggestions: !0
                            } : {
                                showSuggestions: n.showSuggestions
                            }
                        })
                    }, t.prototype.render = function() {
                        var e = this.renderSuggestions(),
                            t = this.renderSelections(),
                            n = !this.props.multi && this.state.games.length > 0;
                        return r.createElement(c.Xa, null, r.createElement(i.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(c.Xa, {
                            position: c.fb.Relative,
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(c.Ra, {
                            "data-test-selector": E,
                            value: this.state.searchTerm,
                            onChange: this.onGameSearch,
                            type: c.Ta.Text,
                            onFocus: this.onFocus,
                            disabled: n
                        }), r.createElement(c.u, {
                            show: this.state.showSuggestions
                        }, e)), r.createElement(c.Xa, {
                            padding: {
                                bottom: .5
                            }
                        }, t)))
                    }, t
                }(r.Component),
                h = Object(s.compose)(Object(o.b)("DevGameSearch", {
                    autoReportInteractive: !0
                }))(m),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            games: t.props.games || []
                        }, t.findGames = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
                                    return e.length ? (t = this.props.games.filter(function(t) {
                                        return t.name.toLowerCase().includes(e.toLowerCase())
                                    }), this.setState({
                                        games: t
                                    }), [2]) : (this.setState({
                                        games: this.props.games
                                    }), [2])
                                })
                            })
                        }, t.onGameSelect = function(e) {
                            t.setState({
                                games: []
                            }), e.length || t.setState({
                                games: t.props.games
                            }), t.props.onGameSelect(e)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(h, {
                            onGameSelect: this.onGameSelect,
                            gameSuggestions: this.state.games,
                            onInputChange: this.findGames,
                            multi: this.props.multi,
                            defaultGames: this.props.defaultGames
                        })
                    }, t
                }(r.Component),
                _ = n("Svt6"),
                f = n("+GjP"),
                T = n("1mFg"),
                I = _.a + "/kraken/search/games",
                D = 7,
                N = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            games: []
                        }, n.findGames = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n, r, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 4, , 5]), e.length ? (t = Object(f.e)(I, {
                                                query: e.trim(),
                                                type: "suggest"
                                            }), [4, Object(T.a)(t)]) : (this.setState({
                                                games: []
                                            }), [2]);
                                        case 1:
                                            return n = a.sent(), r = [], 200 !== n.status ? [3, 3] : [4, n.json()];
                                        case 2:
                                            s = a.sent(), r = s.games, a.label = 3;
                                        case 3:
                                            return r = r.slice(0, this.props.limit || D), this.setState({
                                                games: r
                                            }), [3, 5];
                                        case 4:
                                            return a.sent(), this.setState({
                                                games: []
                                            }), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, n.onGameSelect = function(e) {
                            n.setState({
                                games: []
                            }), n.props.onGameSelect(e)
                        }, n.state.games = t.defaultGames || [], n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(h, {
                            onGameSelect: this.onGameSelect,
                            gameSuggestions: this.state.games,
                            onInputChange: this.findGames,
                            multi: this.props.multi
                        })
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return g
            }), n.d(t, "b", function() {
                return N
            })
        },
        GIun: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = function(e) {
                    var t = a.Children.only(e.children);
                    return a.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            n.d(t, "a", function() {
                return r
            })
        },
        "H/lO": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Games = "game", e.Videos = "vod", e.Users = "user", e.Channels = "live_channel", e.StreamTags = "stream_tag", e.Tags = "tag"
                }(a || (a = {}))
        },
        HEnu: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("NAv5"),
                s = n("FOa4"),
                i = n("q1tI"),
                o = n("Ue10"),
                c = (n("WHSC"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setInputRef = function(e) {
                            return t.textInput = e
                        }, t.setContainerRef = function(e) {
                            return t.containerElement = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this._picker = new s({
                            field: this.textInput,
                            onSelect: this.props.onChange,
                            theme: "inline",
                            minDate: this.props.minDate,
                            maxDate: this.props.maxDate,
                            defaultDate: this.props.defaultDate,
                            setDefaultDate: !0,
                            container: this.containerElement,
                            format: "MMMM D, YYYY",
                            toString: function(e, t) {
                                return Object(r.format)(e, t)
                            }
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        (this.dateDidChange(e.minDate, this.props.minDate) || this.dateDidChange(e.maxDate, this.props.maxDate)) && this.setDateRangeIfPresent(this.props.minDate, this.props.maxDate), this.dateDidChange(e.defaultDate, this.props.defaultDate) && this.setDate(this.props.defaultDate)
                    }, t.prototype.render = function() {
                        var e = this.props.inputProps;
                        return i.createElement(o.Xa, {
                            className: "date-picker",
                            "data-a-target": "date-picker"
                        }, i.createElement(o.Ra, a.__assign({
                            type: o.Ta.Text,
                            refDelegate: this.setInputRef
                        }, e)), i.createElement("div", {
                            className: "date-picker__container",
                            ref: this.setContainerRef
                        }))
                    }, t.prototype.setDate = function(e) {
                        e || (this.textInput.value = ""), this._picker.setDate(e || new Date, !0)
                    }, t.prototype.setDateRangeIfPresent = function(e, t) {
                        e && this._picker.setMinDate(e), t && this._picker.setMaxDate(t)
                    }, t.prototype.dateDidChange = function(e, t) {
                        return (e ? e.getTime() : null) !== (t ? t.getTime() : null)
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return c
            })
        },
        HGFl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            });
            var a = n("NAv5"),
                r = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function s(e, t) {
                return Object(a.format)(e, t)
            }

            function i(e) {
                return Object(a.parse)(e)
            }

            function o(e, t) {
                var n = e.split(":");
                if (2 !== n.length) throw new Error("invalid time string: " + e);
                var a = parseInt(n[0], 10),
                    r = parseInt(n[1].substring(0, 2), 10),
                    s = n[1].substring(n[1].length - 2);
                if (12 === a && "am" === s && (a = 0), "pm" === s && a < 12 && (a += 12), isNaN(a) || a < 0 || a > 23 || isNaN(r) || r < 0 || r > 59) throw new Error("invalid time string: " + e);
                var i = t || new Date;
                return i.setHours(a, r), i
            }
        },
        Ji7V: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevWhitedDropsChannels"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "ids"
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "users"
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
                                        value: "ids"
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
                                            value: "50"
                                        }
                                    }],
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
                }],
                loc: {
                    start: 0,
                    end: 108
                }
            };
            n.loc.source = {
                body: "query DevWhitedDropsChannels($ids: [ID!]) {\nusers(ids: $ids) {\nid\nprofileImageURL(width: 50)\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        LFRE: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("/MKj"),
                i = n("/7QA"),
                o = n("f00E"),
                c = n("kRBY"),
                u = n("H/lO"),
                l = n("NZDK"),
                p = n("fvjX"),
                d = n("N3I0"),
                E = n("GIun"),
                m = n("8/mp"),
                h = n("GnwI"),
                g = n("N0BP"),
                _ = n("yLwq"),
                f = n("Ue10"),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSelect = function(e) {
                            e.preventDefault(), t.props.onSelect(t.props.user)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.user.avatar || Object(_.c)(this.props.user.id, 64);
                        return r.createElement(f.Xa, a.__assign({
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(g.a)(this.props)), r.createElement(f.Ua, {
                            onClick: this.onSelect
                        }, r.createElement(f.G, {
                            row: !0
                        }, r.createElement(f.I, {
                            alt: this.props.user.name,
                            src: e,
                            size: f.J.Size4,
                            aspect: f.p.Aspect1x1
                        }), r.createElement(f.Xa, {
                            flexGrow: 1,
                            display: f.X.Flex,
                            position: f.fb.Relative
                        }, r.createElement(f.Pa, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, r.createElement(f.W, {
                            type: f.Pb.Span,
                            ellipsis: !0
                        }, this.props.user.name))))))
                    }, t
                }(r.Component),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.userSearch = null, t.renderSearchContent = function() {
                            var e = null;
                            return t.props.waiting ? e = r.createElement(f.Za, {
                                fillContent: !0
                            }) : t.props.userResults && (e = t.props.userResults.map(function(e) {
                                return r.createElement(E.a, {
                                    key: e.id
                                }, r.createElement(T, {
                                    user: e,
                                    onSelect: t.onSelect
                                }))
                            })), e
                        }, t.onSelect = function(e) {
                            t.userSearch && t.userSearch.setValue(e.login), t.props.onUserSelect(e)
                        }, t.setUserSearchRef = function(e) {
                            t.userSearch = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.userSearch && e.open !== this.props.open && this.userSearch.toggle(e.open)
                    }, t.prototype.render = function() {
                        var e = this.renderSearchContent();
                        return r.createElement(f.Xa, null, r.createElement(d.a, {
                            onChange: this.props.onInputChange,
                            onFocusInput: this.props.onFocusInput,
                            ref: this.setUserSearchRef,
                            placeholder: Object(i.d)("Search Users", "DevUserSearch"),
                            balloonProps: {
                                show: this.props.open,
                                direction: f.v.Bottom,
                                size: f.w.Large
                            },
                            onClose: this.props.onSearchClose
                        }, r.createElement(f.Xa, {
                            className: "user-search__user-search"
                        }, r.createElement(m.b, {
                            contentClassName: "user-search__user-search-content",
                            suppressScrollX: !0
                        }, r.createElement(f.Xa, {
                            fullWidth: !0
                        }, e)))))
                    }, t
                }(r.Component),
                D = Object(p.compose)(Object(h.b)("DevUserSearchDropdown", {
                    autoReportInteractive: !0
                }))(I),
                N = 100,
                O = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            searchTerm: "",
                            userResult: [],
                            searchOpen: !1,
                            waiting: !1,
                            selected: !1
                        }, n.onInputChange = function(e) {
                            n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.props.onReset && n.props.onReset(), e ? (n.setState({
                                userResult: [],
                                searchTerm: e,
                                waiting: !0
                            }), n.inputTimer = setTimeout(function() {
                                return n.doUserSearch(e)
                            }, N)) : n.setState({
                                userResult: [],
                                waiting: !1,
                                searchTerm: ""
                            })
                        }, n.doUserSearch = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n, r, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            this.inputTimer = 0, t = Object(o.a)(), n = null, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(u.a.Users, e, t)];
                                        case 2:
                                            return n = a.sent(), [3, 4];
                                        case 3:
                                            return r = a.sent(), i.p.logger.error(r, "Algolia User Search failed"), this.setState({
                                                waiting: !1,
                                                searchOpen: !1
                                            }), [2];
                                        case 4:
                                            return n && n.users ? (s = this.deserializeUserResults(n), this.props.limit && (s = s.splice(0, this.props.limit)), this.setState({
                                                userResult: s,
                                                searchOpen: !0,
                                                waiting: !1
                                            }), [2]) : [2]
                                    }
                                })
                            })
                        }, n.deserializeUserResults = function(e) {
                            return e.users ? e.users.hits.filter(function(e) {
                                return !(n.props.user && !n.props.includeCurrentUser) || e.objectID !== n.props.user.id
                            }).map(function(e) {
                                return {
                                    id: e.objectID,
                                    avatar: e.profile_image,
                                    name: e.name,
                                    login: e.login
                                }
                            }) : []
                        }, n.onFocusInput = function() {
                            n.setState(function(e) {
                                return e.searchTerm && !e.searchOpen ? {
                                    searchOpen: !0
                                } : {
                                    searchOpen: e.searchOpen
                                }
                            })
                        }, n.onSearchClose = function() {
                            n.setState({
                                searchOpen: !1
                            })
                        }, n.onUserSelect = function(e) {
                            n.props.onUserSelect(e), n.setState({
                                userResult: [],
                                searchTerm: e.login,
                                searchOpen: !1,
                                waiting: !1,
                                selected: !0
                            })
                        }, n.searchClient = new l.a({
                            appId: i.p.config.algoliaApplicationID,
                            apiKey: i.p.config.algoliaAPIKey,
                            apolloClient: i.p.apollo.client,
                            logger: i.p.logger,
                            config: i.p.config,
                            stats: i.p.stats
                        }), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(D, {
                            userResults: this.state.userResult,
                            open: this.state.searchOpen,
                            waiting: this.state.waiting,
                            onInputChange: this.onInputChange,
                            onSearchClose: this.onSearchClose,
                            onFocusInput: this.onFocusInput,
                            onUserSelect: this.onUserSelect
                        })
                    }, t
                }(r.Component);
            var S = Object(s.connect)(function(e) {
                return {
                    user: Object(c.e)(e)
                }
            })(O);
            n.d(t, !1, function() {
                return N
            }), n.d(t, !1, function() {
                return O
            }), n.d(t, "a", function() {
                return S
            })
        },
        Lxz1: function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return i
            }), n.d(t, "g", function() {
                return o
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "d", function() {
                return p
            }), n.d(t, "b", function() {
                return E
            });
            var a, r = n("/7QA"),
                s = n("2/NB"),
                i = function(e, t) {
                    return Object(r.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                        imageDimensions: e,
                        imageFileMegabytes: t
                    }, "ImageUploader")
                },
                o = function(e, t) {
                    return Object(r.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                        imageDimensions: e,
                        imageFileMegabytes: t
                    }, "ImageUploader")
                },
                c = function(e) {
                    return Object(r.d)("Couldn't upload image. Request returned {statusCode, number}", {
                        statusCode: e
                    }, "ImageUploader")
                },
                u = function() {
                    return Object(r.d)("The provided image does not have the required dimensions.", "ImageUploader")
                },
                l = function() {
                    return Object(r.d)("File too large.", "ImageUploader")
                },
                p = function() {
                    return Object(r.d)("Unexpected error while uploading your image. Please try again later", "ImageUploader")
                },
                d = ((a = {})[s.a.JPEG] = "JPG", a[s.a.PNG] = "PNG", a[s.a.GIF] = "GIF", a),
                E = function(e) {
                    var t = e.map(function(e) {
                        return d[e]
                    });
                    return t.length > 1 && (t[t.length - 1] = "or " + t[t.length - 1]), Object(r.d)("Incompatible format. File must be an image in {allowedTypes} format.", {
                        allowedTypes: t.join(", ")
                    }, "ImageUploader")
                }
        },
        N3I0: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("u5aL"),
                i = n("/7QA"),
                o = n("Ue10"),
                c = function() {
                    return r.createElement(o.Xa, {
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column,
                        justifyContent: o.Wa.Center,
                        alignItems: o.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: o.cc.Above
                    }, r.createElement(o.zb, {
                        color: o.O.Alt2,
                        textAlign: o.Lb.Center,
                        flexShrink: 1
                    }, r.createElement(o.ob, {
                        asset: o.pb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), r.createElement(o.Pa, {
                        margin: {
                            top: 1
                        },
                        textAlign: o.Lb.Center
                    }, r.createElement(o.W, {
                        type: o.Pb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(i.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(o.W, {
                        type: o.Pb.P
                    }, Object(i.d)("Please try again later", "DropdownSearchError")))
                },
                u = n("8Ad5"),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focusSelectable: !1,
                            isInputFocused: !1,
                            isOpen: !1
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t.handleFocus = function() {
                            t.props.onFocusInput && t.props.onFocusInput(), t.setState({
                                isInputFocused: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isInputFocused: !1
                            })
                        }, t.onKeyDown = function(e) {
                            var n = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === u.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === u.a.Up ? (n(), t.focusNext(-1)) : e.keyCode === u.a.Down && (n(), t.focusNext(1))
                        }, t.onClickOut = function() {
                            t.state.isOpen && t.setState({
                                isOpen: !1
                            }), t.props.onClose && t.props.onClose()
                        }, t.onMouseOver = function(e) {
                            var n = e.target.closest("[data-selectable]");
                            n && (n.focus(), n.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                                currentFocus: n
                            }), t.props.onFocusChange && t.props.onFocusChange(n))
                        }, t.getInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 === this.props.showDropdown || this.props.showDropdown,
                            t = this.props.isErrored ? r.createElement(c, null) : r.Children.only(this.props.children),
                            n = r.createElement(o.rb, {
                                onChange: this.handleChange,
                                onKeyDown: this.onKeyDown,
                                onBlur: this.handleBlur,
                                onFocus: this.handleFocus,
                                placeholder: this.props.placeholder,
                                id: "nav-search-input",
                                "data-a-target": "nav-search-input",
                                spellCheck: !1,
                                refDelegate: this.getInputRef,
                                size: this.props.inputSize,
                                autoFocus: this.props.autoFocus
                            });
                        return this.props.inline ? r.createElement(s.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(o.zb, {
                            background: this.state.isInputFocused || this.state.isOpen ? o.r.Base : void 0,
                            borderRadius: o.x.Large,
                            padding: .5,
                            position: o.fb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && r.createElement(o.zb, {
                            attachLeft: !0,
                            background: o.r.Base,
                            borderRadius: o.x.Large,
                            display: this.state.isOpen ? o.X.Block : o.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: o.fb.Absolute,
                            zIndex: o.cc.Above,
                            elevation: 3
                        }, r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : r.createElement(s.a, {
                            onClickOut: this.onClickOut
                        }, n, e && r.createElement(o.u, a.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))
                    }, t.prototype.toggle = function(e) {
                        e !== this.state.isOpen && this.setState({
                            isOpen: e
                        })
                    }, t.prototype.setValue = function(e) {
                        this.inputRef.value = e
                    }, t.prototype.focusNext = function(e) {
                        var t, n = document.querySelectorAll("[data-selectable=true]"),
                            a = document.activeElement,
                            r = Array.prototype.indexOf.call(n, a);
                        if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                            var s = n.item(t);
                            s.focus(), s.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: s
                            }), this.props.onFocusChange && this.props.onFocusChange(s)
                        }
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return l
            })
        },
        NLLf: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("/7QA"),
                i = n("/ZC1"),
                o = n("Ue10"),
                c = (n("aDUZ"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(i.a, {
                            allowedFileTypes: this.props.allowedFileTypes,
                            onFilesSubmitted: this.props.processFiles,
                            error: !!this.props.errorMessage
                        }, r.createElement(o.Xa, {
                            className: "image-uploader",
                            textAlign: o.Lb.Center,
                            display: o.X.Flex,
                            flexDirection: o.Aa.Column,
                            alignItems: o.f.Center,
                            justifyContent: o.Wa.Center,
                            position: o.fb.Relative,
                            fullHeight: !0,
                            fullWidth: !0
                        }, this.renderErrorMessage(), r.createElement(o.Xa, {
                            position: o.fb.Relative
                        }, r.createElement(o.Xa, {
                            className: "image-uploader__upload-svg--anim-backfill"
                        }, r.createElement(o.ob, {
                            asset: o.pb.Upload,
                            type: o.qb.Alt2,
                            width: this.props.iconWidth || 99,
                            height: this.props.iconWidth || 76
                        })), r.createElement(o.Xa, {
                            className: "image-uploader__upload-svg--anim-fill",
                            position: o.fb.Absolute,
                            display: this.props.isLoading ? o.X.Block : o.X.Hide,
                            attachTop: !0
                        }, r.createElement(o.ob, {
                            asset: o.pb.Upload,
                            type: o.qb.Brand,
                            width: this.props.iconWidth || 99,
                            height: this.props.iconHeight || 76
                        }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                    }, t.prototype.renderLoadingState = function() {
                        return r.createElement(o.Xa, {
                            margin: 1,
                            "data-test-selector": "image-uploader-loading"
                        }, r.createElement(o.W, {
                            type: o.Pb.H4
                        }, Object(s.d)("Uploading", "ImageUploader")))
                    }, t.prototype.renderNormalState = function() {
                        var e = Object(s.d)("Browse", "ImageUploader");
                        return r.createElement(o.Xa, null, r.createElement(o.Xa, null, r.createElement(o.W, {
                            type: o.Pb.H4
                        }, Object(s.d)("Drag and drop your image here", "ImageUploader"))), r.createElement(o.Xa, {
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                x: 1,
                                y: 0
                            },
                            fullWidth: !0,
                            "data-test-selector": "image-uploader-hint"
                        }, r.createElement(o.W, {
                            type: o.Pb.P,
                            fontSize: o.Ca.Size7,
                            color: o.O.Alt2
                        }, this.props.hintMessage)), r.createElement(o.Xa, null, r.createElement(o.z, {
                            ariaLabel: e,
                            type: o.F.Hollow
                        }, e)))
                    }, t.prototype.renderErrorMessage = function() {
                        if (this.props.errorMessage) return r.createElement(o.Xa, {
                            margin: {
                                bottom: 1
                            },
                            "data-test-selector": "image-uploader-error"
                        }, r.createElement(o.W, {
                            type: o.Pb.H5,
                            color: o.O.Error,
                            bold: !0
                        }, this.props.errorMessage))
                    }, t
                }(r.Component)),
                u = n("2/NB"),
                l = n("Lxz1"),
                p = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isLoading: !1,
                            errorMessage: "",
                            hintMessage: "",
                            allowedFileTypes: u.b
                        }, n.processFiles = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = e[0], this.setState({
                                                errorMessage: "",
                                                isLoading: !0
                                            }), this.isFileTypeAcceptable(t) ? [3, 1] : (this.setState({
                                                errorMessage: Object(l.b)(this.state.allowedFileTypes),
                                                isLoading: !1
                                            }), [3, 5]);
                                        case 1:
                                            return this.isFileSizeAcceptable(t) ? [3, 2] : (this.setState({
                                                errorMessage: Object(l.a)(),
                                                isLoading: !1
                                            }), [3, 5]);
                                        case 2:
                                            return a.trys.push([2, 4, , 5]), [4, this.props.provider.uploadFile(t)];
                                        case 3:
                                            return a.sent(), this.props.onClose && this.props.onClose(), [3, 5];
                                        case 4:
                                            return n = a.sent(), this.setState({
                                                errorMessage: n.message,
                                                isLoading: !1
                                            }), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.allowedFileTypes && (n.state.allowedFileTypes = t.allowedFileTypes), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = "";
                        e = this.props.isRequiredImageDimensions ? Object(l.g)(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : Object(l.f)(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
                            hintMessage: e
                        })
                    }, t.prototype.render = function() {
                        return r.createElement(c, {
                            allowedFileTypes: this.state.allowedFileTypes,
                            errorMessage: this.state.errorMessage,
                            hintMessage: this.state.hintMessage,
                            isLoading: this.state.isLoading,
                            processFiles: this.processFiles,
                            iconHeight: this.props.iconHeight,
                            iconWidth: this.props.iconWidth
                        })
                    }, t.prototype.isFileTypeAcceptable = function(e) {
                        return this.state.allowedFileTypes.includes(e.type)
                    }, t.prototype.isFileSizeAcceptable = function(e) {
                        var t = 1048576 * this.props.maxFileSizeMegabytes;
                        return e.size <= t
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return p
            })
        },
        NZDK: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var a = n("mrSG"),
                r = n("hnrd"),
                s = n("/7QA"),
                i = n("D7An"),
                o = n("H/lO"),
                c = n("vR4/"),
                u = n("BSTw"),
                l = n("Z9JJ"),
                p = {
                    games: {
                        indexName: o.a.Games,
                        hitsPerPage: 2,
                        topNumericFilters: ["popularity>1"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    videos: {
                        indexName: o.a.Videos,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["created_at>" + m(function() {
                                var e = new Date;
                                return e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3)
                            }())]
                        },
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    users: {
                        indexName: o.a.Users,
                        hitsPerPage: 2,
                        topNumericFilters: ["followers>50"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    channels: {
                        indexName: o.a.Channels,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["channel_count>10", "updated_on>" + m(E())]
                        },
                        get singleTypeNumericFilters() {
                            return ["updated_on>" + m(E())]
                        },
                        optionalFacetFilters: ""
                    },
                    streamTags: {
                        indexName: o.a.StreamTags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    tags: {
                        indexName: o.a.Tags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    }
                },
                d = function() {
                    function e(e) {
                        this.apolloClient = e.apolloClient, this.client = r(e.appId, e.apiKey), this.stats = e.stats, this.logger = e.logger.withCategory("search-client"), this.sendSearchRequestToForage = "variant" === s.p.experiments.getAssignment(i.b.NewSearchBackend), this.getCountryCode()
                    }
                    return e.prototype.queryTopResults = function(e, t) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var n, r, s, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return r = [], (n = []).push(this.getTopResult(p.games, e)), n.push(this.getTopResult(p.videos, e)), n.push(this.getTopResult(p.users, e)), n.push(this.getTopResult(p.channels, e)), r.push(this.getTotalResult(p.games, e)), r.push(this.getTotalResult(p.videos, e)), r.push(this.getTotalResult(p.users, e)), r.push(this.getTotalResult(p.channels, e)), [4, this.query(n.concat(r))];
                                    case 1:
                                        return (s = a.sent()) ? (i = s.results, [2, {
                                            id: t,
                                            games: {
                                                totalHits: i[4].nbHits,
                                                hits: i[0].hits
                                            },
                                            videos: {
                                                totalHits: i[5].nbHits,
                                                hits: i[1].hits
                                            },
                                            users: {
                                                totalHits: i[6].nbHits,
                                                hits: i[2].hits
                                            },
                                            channels: {
                                                totalHits: i[7].nbHits,
                                                hits: i[3].hits
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
                        var s = void 0 === r ? {} : r,
                            i = s.page,
                            c = void 0 === i ? 0 : i,
                            u = s.hitsPerPage,
                            l = void 0 === u ? 50 : u,
                            d = s.facetFilters,
                            E = void 0 === d ? "" : d,
                            m = s.numericFilters,
                            h = s.restrictSearchableAttributes,
                            g = void 0 === h ? [] : h;
                        return a.__awaiter(this, void 0, void 0, function() {
                            var r, s, i, u, d, h, _, f, T = this;
                            return a.__generator(this, function(I) {
                                switch (I.label) {
                                    case 0:
                                        switch (r = {
                                            id: n,
                                            currentPage: c
                                        }, s = function(e) {
                                            return a.__awaiter(T, void 0, void 0, function() {
                                                var n, s;
                                                return a.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return n = {
                                                                indexName: e.indexName,
                                                                query: t,
                                                                params: {
                                                                    page: c,
                                                                    hitsPerPage: l,
                                                                    numericFilters: m || e.singleTypeNumericFilters,
                                                                    facets: "*",
                                                                    facetFilters: E,
                                                                    restrictSearchableAttributes: g
                                                                }
                                                            }, [4, this.query([n])];
                                                        case 1:
                                                            return (s = a.sent()) ? (r.exhaustedHits = !s.results[0].nbHits || s.results[0].hits.length < l, [2, {
                                                                totalHits: s.results[0].nbHits,
                                                                hits: s.results[0].hits
                                                            }]) : (r.exhaustedHits = !0, [2, {
                                                                totalHits: 0,
                                                                hits: []
                                                            }])
                                                    }
                                                })
                                            })
                                        }, e) {
                                            case o.a.Games:
                                                return [3, 1];
                                            case o.a.Users:
                                                return [3, 3];
                                            case o.a.Channels:
                                                return [3, 5];
                                            case o.a.Videos:
                                                return [3, 7];
                                            case o.a.StreamTags:
                                                return [3, 9];
                                            case o.a.Tags:
                                                return [3, 11]
                                        }
                                        return [3, 13];
                                    case 1:
                                        return i = r, [4, s(p.games)];
                                    case 2:
                                        return i.games = I.sent(), [3, 14];
                                    case 3:
                                        return u = r, [4, s(p.users)];
                                    case 4:
                                        return u.users = I.sent(), [3, 14];
                                    case 5:
                                        return d = r, [4, s(p.channels)];
                                    case 6:
                                        return d.channels = I.sent(), [3, 14];
                                    case 7:
                                        return h = r, [4, s(p.videos)];
                                    case 8:
                                        return h.videos = I.sent(), [3, 14];
                                    case 9:
                                        return _ = r, [4, s(p.streamTags)];
                                    case 10:
                                        return _.streamTags = I.sent(), [3, 14];
                                    case 11:
                                        return f = r, [4, s(p.tags)];
                                    case 12:
                                        return f.tags = I.sent(), [3, 14];
                                    case 13:
                                        return [2, null];
                                    case 14:
                                        return [2, r]
                                }
                            })
                        })
                    }, e.prototype.queryVideos = function(e, t, n) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var r, s, i, u;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        switch (r = o.a.Videos, s = [], n.length) {
                                            case c.a.Short:
                                                s.push("length<=900");
                                                break;
                                            case c.a.Long:
                                                s.push("length>900")
                                        }
                                        switch (i = {
                                            indexName: r,
                                            query: e,
                                            params: {
                                                page: 0,
                                                hitsPerPage: 50,
                                                numericFilters: s,
                                                facets: "*",
                                                facetFilters: ""
                                            }
                                        }, n.type) {
                                            case c.b.PastBroadcasts:
                                                i.params.facetFilters = "broadcast_type:archive";
                                                break;
                                            case c.b.Uploads:
                                                i.params.facetFilters = "broadcast_type:upload";
                                                break;
                                            case c.b.Highlights:
                                                i.params.facetFilters = "broadcast_type:highlight"
                                        }
                                        return [4, this.query([i])];
                                    case 1:
                                        return (u = a.sent()) ? [2, {
                                            id: t,
                                            totalHits: u.results[0].nbHits,
                                            hits: u.results[0].hits
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
                            query: u
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
                            query: l,
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
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, s, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        n = Date.now(), s = !1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 6, , 7]), this.sendSearchRequestToForage && e.length > 7 ? (i = e[0].query, [4, this.getSearchResults(i)]) : [3, 3];
                                    case 2:
                                        return t = a.sent(), [3, 5];
                                    case 3:
                                        return [4, this.client.search(e)];
                                    case 4:
                                        t = a.sent(), a.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return a.sent(), s = !0, t = null, [3, 7];
                                    case 7:
                                        return r = Date.now(), this.countryCode && (s ? this.stats.recordSearchError(this.countryCode, r - n) : this.stats.recordSearchSuccess(this.countryCode, r - n)), [2, t]
                                }
                            })
                        })
                    }, e
                }();

            function E() {
                return Math.floor(((new Date).getTime() - 6e5) / 1e3)
            }

            function m(e) {
                return e <= 100 ? e : 100 * Math.round(e / 100)
            }
        },
        PZVp: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.REQUESTED = 0] = "REQUESTED", e[e.POSTPROCESS_STARTED = 1] = "POSTPROCESS_STARTED", e[e.POSTPROCESS_COMPLETE = 2] = "POSTPROCESS_COMPLETE", e[e.COMPLETE = 3] = "COMPLETE", e[e.VALIDATION_FAILED = 4] = "VALIDATION_FAILED", e[e.POSTPROCESS_FAILED = 5] = "POSTPROCESS_FAILED", e[e.POSTPROCESS_RETRYING = 6] = "POSTPROCESS_RETRYING", e[e.FEATURE_SERVICE_FAILED = 7] = "FEATURE_SERVICE_FAILED", e[e.IS_IMAGE_VALIDATION_FAILED = 110] = "IS_IMAGE_VALIDATION_FAILED", e[e.ASPECT_RATIO_VALIDATION_FAILED = 111] = "ASPECT_RATIO_VALIDATION_FAILED", e[e.WIDTH_VALIDATION_FAILED = 112] = "WIDTH_VALIDATION_FAILED", e[e.HEIGHT_VALIDATION_FAILED = 113] = "HEIGHT_VALIDATION_FAILED", e[e.IMAGE_FORMAT_VALIDATION_FAILED = 114] = "IMAGE_FORMAT_VALIDATION_FAILED", e[e.FILE_SIZE_VALIDATION_FAILED = 120] = "FILE_SIZE_VALIDATION_FAILED", e[e.TRANSFORMATION_FAILED = 210] = "TRANSFORMATION_FAILED", e[e.PROCESSING_FAILED = 220] = "PROCESSING_FAILED"
                }(a || (a = {}))
        },
        QH5d: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("2INN"),
                i = n("jKe7"),
                o = n("/7QA"),
                c = n("coZW"),
                u = n("uLRL"),
                l = n("fvjX"),
                p = n("V+GM"),
                d = n("Svt6"),
                E = n("NvVO"),
                m = n("2xye"),
                h = n("GnwI"),
                g = n("1mFg");

            function _(e) {
                return !e.legacy && e.curseCompanyId ? e.curseCompanyId.toString() : e.id
            }
            var f = n("fy8Z");

            function T(e, t) {
                return {
                    id: e.id ? e.id : void 0,
                    account_id: t,
                    end_time: e.endTime.getTime() / 1e3,
                    start_time: e.startTime.getTime() / 1e3,
                    enabled: e.enabled,
                    item_ids: e.itemIds,
                    item_name: e.itemName,
                    click_through_url: e.connectionURL,
                    whitelisted_channels: e.whitelistedChannels,
                    games: e.games
                }
            }

            function I(e, t, n) {
                return {
                    default_language: e.default_language,
                    active: e.active,
                    translations: e.translations,
                    account_id: t,
                    jwt: n
                }
            }
            var D = n("0xbx"),
                N = n("Ue10"),
                O = n("HGFl");

            function S() {
                return R(new Date)
            }

            function R(e) {
                return new Date(function(e) {
                    return e.getTime() + 6e4 * e.getTimezoneOffset()
                }(e))
            }

            function A(e) {
                return new Date(function(e) {
                    return e.getTime() - 6e4 * e.getTimezoneOffset()
                }(e))
            }
            var C, b = function(e) {
                var t = Object(O.b)(R(e.campaign.startDate), "MM/DD/YYYY, hh:mm a"),
                    n = Object(O.b)(R(e.campaign.endDate), "MM/DD/YYYY, hh:mm a"),
                    a = "/console/drops/" + e.campaign.id;
                return r.createElement(N.Hb, null, r.createElement(N.Eb, null, r.createElement(N.U, {
                    linkTo: a
                }, e.campaign.name)), r.createElement(N.Eb, null, e.campaign.id), r.createElement(N.Eb, null, t), r.createElement(N.Eb, null, n), r.createElement(N.Eb, null, e.campaign.enabled.toString()))
            };
            ! function(e) {
                e[e.Enabled = 0] = "Enabled", e[e.EndDate = 1] = "EndDate", e[e.Id = 2] = "Id", e[e.Name = 3] = "Name", e[e.StartDate = 4] = "StartDate"
            }(C || (C = {}));
            var v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sortingName: N.wb.Default,
                            sortingId: N.wb.Default,
                            sortingStartDate: N.wb.Default,
                            sortingEndDate: N.wb.Default,
                            sortingEnabled: N.wb.Default
                        }, t.renderCampaignItems = function() {
                            return t.props.campaigns.map(function(e) {
                                return r.createElement(b, {
                                    campaign: e,
                                    key: e.id
                                })
                            })
                        }, t.sortName = function() {
                            t.setState(function(e) {
                                return {
                                    sortingName: t.toggleSorting(e.sortingName)
                                }
                            }, function() {
                                t.props.onSort(C.Name, t.state.sortingName)
                            })
                        }, t.sortStartDate = function() {
                            t.setState(function(e) {
                                return {
                                    sortingStartDate: t.toggleSorting(e.sortingStartDate)
                                }
                            }, function() {
                                t.props.onSort(C.StartDate, t.state.sortingStartDate)
                            })
                        }, t.sortEndDate = function() {
                            t.setState(function(e) {
                                return {
                                    sortingEndDate: t.toggleSorting(e.sortingEndDate)
                                }
                            }, function() {
                                t.props.onSort(C.EndDate, t.state.sortingEndDate)
                            })
                        }, t.sortEnabled = function() {
                            t.setState(function(e) {
                                return {
                                    sortingEnabled: t.toggleSorting(e.sortingEnabled)
                                }
                            }, function() {
                                t.props.onSort(C.Enabled, t.state.sortingEnabled)
                            })
                        }, t.toggleSorting = function(e) {
                            return e === N.wb.Default || e === N.wb.Ascending ? N.wb.Descending : N.wb.Ascending
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderCampaignItems();
                        return r.createElement(N.Xa, {
                            className: "drops-campaigns"
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.End,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(N.z, {
                            onClick: Object(c.c)(c.a.CreateDropsProcessStart),
                            linkTo: "/console/drops/create",
                            icon: N.pb.Plus
                        }, Object(o.d)("Create Drops Campaign", "DevDropsCampaigns"))), r.createElement(N.Cb, null, r.createElement(N.Fb, null, r.createElement(N.Gb, {
                            label: Object(o.d)("Campaign Name", "DevDropsCampaigns"),
                            sorting: this.state.sortingName,
                            onClick: this.sortName
                        }), r.createElement(N.Gb, {
                            label: Object(o.d)("Campaign ID", "DevDropsCampaigns")
                        }), r.createElement(N.Gb, {
                            label: Object(o.d)("Start Date (UTC)", "DevDropsCampaigns"),
                            sorting: this.state.sortingStartDate,
                            onClick: this.sortStartDate
                        }), r.createElement(N.Gb, {
                            label: Object(o.d)("End Date (UTC)", "DevDropsCampaigns"),
                            sorting: this.state.sortingEndDate,
                            onClick: this.sortEndDate
                        }), r.createElement(N.Gb, {
                            label: Object(o.d)("Enabled", "DevDropsCampaigns"),
                            sorting: this.state.sortingEnabled,
                            onClick: this.sortEnabled
                        })), r.createElement(N.Db, null, e)))
                    }, t
                }(r.Component),
                L = Object(l.compose)(Object(h.b)("DevDropsCampaignsComponent", {
                    autoReportInteractive: !0
                }))(v),
                P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            campaigns: []
                        }, t.getCampaigns = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, s, i;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, Object(D.a)(f.a.GetCampaignsByCompany)];
                                        case 1:
                                            return (e = a.sent()) ? (t = _(this.props.company), n = d.a + "/kraken/accounts/" + t + "/campaigns", [4, Object(g.a)(n, {
                                                headers: {
                                                    "X-Twitch-VHSCF": e
                                                }
                                            })]) : [3, 4];
                                        case 2:
                                            return 200 !== (r = a.sent()).status ? [3, 4] : [4, r.json()];
                                        case 3:
                                            s = a.sent(), i = s.campaigns.map(function(e) {
                                                return function(e) {
                                                    return {
                                                        name: e.item_name,
                                                        id: e.id,
                                                        games: e.games,
                                                        startDate: new Date(e.start_date / 1e6),
                                                        endDate: new Date(e.end_date / 1e6),
                                                        enabled: e.enabled
                                                    }
                                                }(e)
                                            }).sort(function(e, t) {
                                                return e.name.localeCompare(t.name)
                                            }), this.setState({
                                                campaigns: i
                                            }), a.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onSort = function(e, n) {
                            switch (e) {
                                case C.Name:
                                    n === N.wb.Ascending ? t.setState(function(e) {
                                        return {
                                            campaigns: e.campaigns.sort(function(e, t) {
                                                return e.name.localeCompare(t.name)
                                            })
                                        }
                                    }) : t.setState(function(e) {
                                        return {
                                            campaigns: e.campaigns.sort(function(e, t) {
                                                return t.name.localeCompare(e.name)
                                            })
                                        }
                                    });
                                    break;
                                case C.Id:
                                    n === N.wb.Ascending ? t.setState(function(e) {
                                        return {
                                            campaigns: e.campaigns.sort(function(e, t) {
                                                return e.id.localeCompare(t.id)
                                            })
                                        }
                                    }) : t.setState(function(e) {
                                        return {
                                            campaigns: e.campaigns.sort(function(e, t) {
                                                return t.id.localeCompare(e.id)
                                            })
                                        }
                                    });
                                    break;
                                case C.StartDate:
                                    n === N.wb.Ascending ? t.setState(function(e) {
                                        return {
                                            campaigns: e.campaigns.sort(function(e, t) {
                                                return e.startDate.getTime() - t.startDate.getTime()
                                            })
                                        }
                                    }) : t.setState(function(e) {
                                        return {
                                            campaigns: e.campaigns.sort(function(e, t) {
                                                return t.startDate.getTime() - e.startDate.getTime()
                                            })
                                        }
                                    });
                                    break;
                                case C.EndDate:
                                    n === N.wb.Ascending ? t.setState(function(e) {
                                        return {
                                            campaigns: e.campaigns.sort(function(e, t) {
                                                return e.endDate.getTime() - t.endDate.getTime()
                                            })
                                        }
                                    }) : t.setState(function(e) {
                                        return {
                                            campaigns: e.campaigns.sort(function(e, t) {
                                                return t.endDate.getTime() - e.endDate.getTime()
                                            })
                                        }
                                    });
                                    break;
                                case C.Enabled:
                                    n === N.wb.Ascending ? t.setState(function(e) {
                                        return {
                                            campaigns: e.campaigns.sort(function(e, t) {
                                                return Number(e.enabled) - Number(t.enabled)
                                            })
                                        }
                                    }) : t.setState(function(e) {
                                        return {
                                            campaigns: e.campaigns.sort(function(e, t) {
                                                return Number(t.enabled) - Number(e.enabled)
                                            })
                                        }
                                    })
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(L, {
                            campaigns: this.state.campaigns,
                            onSort: this.onSort
                        })
                    }, t.prototype.componentDidMount = function() {
                        this.getCampaigns()
                    }, t
                }(r.Component),
                U = Object(l.compose)(Object(h.b)("DevDropsCampaignsPage", {
                    autoReportInteractive: !0,
                    destination: E.a.DevSiteDropsCampaigns
                }), Object(p.a)({
                    location: m.PageviewLocation.DevSiteDropsCampaigns
                }), Object(u.a)())(P),
                y = n("9C/b"),
                F = n("DMoW"),
                M = n("PZVp"),
                w = n("/aPz"),
                j = n("2/NB"),
                k = n("Lxz1"),
                G = 1e4,
                V = function() {
                    return function(e, t) {
                        var n = this;
                        this.getUploadURL = e, this.onFinishUploading = t, this.uploadFile = function(e) {
                            return new Promise(function(t, r) {
                                return a.__awaiter(n, void 0, void 0, function() {
                                    var n, s, i, c, u, l = this;
                                    return a.__generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return a.trys.push([0, 3, , 4]), [4, this.getUploadURL(e)];
                                            case 1:
                                                return n = a.sent(), s = n.url, i = n.uploadID, [4, fetch(s, {
                                                    body: e,
                                                    method: "PUT"
                                                })];
                                            case 2:
                                                return (c = a.sent()).status > 300 && r(new Error(Object(k.e)(c.status))), this.unsubscribe = o.l.subscribe({
                                                    topic: Object(w.A)(i),
                                                    success: function() {
                                                        l.timeoutID = setTimeout(function() {
                                                            l.unsubscribe(), r(new Error(Object(k.d)()))
                                                        }, G)
                                                    },
                                                    failure: function() {
                                                        clearTimeout(l.timeoutID), r(new Error(Object(k.d)()))
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === i) {
                                                            switch (clearTimeout(l.timeoutID), e.status) {
                                                                case M.a.POSTPROCESS_COMPLETE:
                                                                    l.onFinishUploading && l.onFinishUploading(), t();
                                                                    break;
                                                                case M.a.WIDTH_VALIDATION_FAILED:
                                                                case M.a.HEIGHT_VALIDATION_FAILED:
                                                                    r(new Error(Object(k.c)()));
                                                                    break;
                                                                case M.a.FILE_SIZE_VALIDATION_FAILED:
                                                                    r(new Error(Object(k.a)()));
                                                                    break;
                                                                case M.a.IS_IMAGE_VALIDATION_FAILED:
                                                                    r(new Error(Object(k.b)(j.b)));
                                                                    break;
                                                                default:
                                                                    r(new Error(Object(k.d)()))
                                                            }
                                                            l.unsubscribe && l.unsubscribe()
                                                        }
                                                    }
                                                }), [3, 4];
                                            case 3:
                                                return u = a.sent(), o.k.error(u, "unable to upload image"), r(new Error(Object(k.d)())), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }
                    }
                }();
            var B = d.a + "/v5/rbac/current-games";

            function H() {
                return a.__awaiter(this, void 0, void 0, function() {
                    var e, t, n;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return e = [], [4, Object(g.a)(B)];
                            case 1:
                                return 200 !== (t = a.sent()).status ? [3, 3] : [4, t.json()];
                            case 2:
                                n = a.sent(), e = n.games.map(function(e) {
                                    return function(e) {
                                        return {
                                            name: e.name,
                                            locale: "",
                                            localized_name: e.name,
                                            popularity: 0,
                                            _id: e.id,
                                            giantbomb_id: e.giantbomb_id
                                        }
                                    }(e)
                                }), a.label = 3;
                            case 3:
                                return [2, e]
                        }
                    })
                })
            }
            var x = n("cr+I");

            function W(e) {
                return a.__awaiter(this, void 0, Promise, function() {
                    var t, n, r, s, i, o, c, u, l, p;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return t = e.activeOnly, n = e.companyId, r = e.prevCursor, s = e.nextCursor, i = e.limit, [4, Object(D.a)(f.a.GetItemsByCompany)];
                            case 1:
                                return (o = a.sent()) ? (c = d.a + "/kraken/accounts/" + n + "/items", (u = x.stringify({
                                    active_only: t,
                                    after: s,
                                    before: r,
                                    limit: i
                                })) && (c += "?" + u), [4, Object(g.a)(c, {
                                    headers: {
                                        "X-Twitch-VHSCF": o
                                    }
                                })]) : [3, 4];
                            case 2:
                                return 200 !== (l = a.sent()).status ? [3, 4] : [4, l.json()];
                            case 3:
                                return p = a.sent(), [2, {
                                    items: p.Items.map(function(e) {
                                        return function(e) {
                                            return {
                                                id: e.ItemID,
                                                defaultLanguage: e.DefaultLanguage,
                                                active: !0 === e.Active,
                                                translations: e.Translations,
                                                createdAt: new Date(e.CreatedAt),
                                                updatedAt: new Date(e.UpdatedAt)
                                            }
                                        }(e)
                                    }).sort(function(e, t) {
                                        return e.id.localeCompare(t.id)
                                    }),
                                    prevCursor: p.Before,
                                    nextCursor: p.After
                                }];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
            var X = n("/MKj"),
                Y = n("aCAx"),
                z = n("HEnu"),
                K = n("cZKs"),
                q = n("NLLf"),
                Z = (n("TofP"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(N.zb, {
                            className: "image-uploader-modal",
                            background: N.r.Base
                        }, r.createElement(q.a, a.__assign({}, this.props)), r.createElement(K.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(r.Component));
            var J = Object(X.connect)(null, function(e) {
                    return Object(l.bindActionCreators)({
                        onClose: Y.c
                    }, e)
                })(Z),
                Q = n("u5aL");
            n("ev0B");
            var $, ee = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onFocus = function() {
                            n.setState({
                                isOpen: !0
                            })
                        }, n.onClickOut = function() {
                            n.setState({
                                isOpen: !1
                            })
                        }, n.onClickTime = function(e) {
                            var t = e.currentTarget.getAttribute("data-time");
                            n.setState({
                                isOpen: !1,
                                selectedTime: t
                            }), n.notifyChange(t)
                        }, n.setInputRef = function(e) {
                            return n.textInput = e
                        }, n.state = {
                            isOpen: !1,
                            selectedTime: t.defaultDate ? n.timeToString(t.defaultDate) : ""
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            n = t.timeOptions.map(function(t) {
                                return r.createElement(N.Ua, {
                                    hover: e.state.selectedTime === t,
                                    key: t,
                                    "data-time": t,
                                    onClick: e.onClickTime
                                }, r.createElement(N.Xa, {
                                    padding: .5
                                }, t))
                            });
                        return r.createElement(N.Xa, {
                            position: N.fb.Relative,
                            className: "time-picker"
                        }, r.createElement(Q.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(N.Ra, {
                            type: N.Ta.Text,
                            onFocus: this.onFocus,
                            readOnly: !0,
                            refDelegate: this.setInputRef,
                            value: this.state.selectedTime
                        }), r.createElement(N.u, {
                            noTail: !0,
                            show: this.state.isOpen,
                            "data-a-target": "time-selector-balloon"
                        }, r.createElement(N.zb, {
                            color: N.O.Link,
                            fontSize: N.Ca.Size5,
                            className: "time-picker__dropdown"
                        }, n))))
                    }, t.prototype.notifyChange = function(e) {
                        this.props.onChange && this.props.onChange(Object(O.d)(e, this.props.defaultDate))
                    }, t.prototype.timeToString = function(e) {
                        return Object(O.b)(e, O.a.timeString)
                    }, t.timeOptions = function() {
                        for (var e = [], t = ["00", "30"], n = 0, a = ["am", "pm"]; n < a.length; n++)
                            for (var r = a[n], s = 0; s < 12; ++s)
                                for (var i = 0, o = t; i < o.length; i++) {
                                    var c = o[i];
                                    e.push((0 === s ? 12 : s) + ":" + c + r)
                                }
                        return e
                    }(), t
                }(r.Component),
                te = n("tl6o"),
                ne = n("yR8l"),
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            e.preventDefault(), t.props.onClick(t.props.id)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(N.Ua, {
                            onClick: this.onClick
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            alignItems: N.f.Center,
                            fullHeight: !0
                        }, r.createElement(N.Xa, {
                            margin: {
                                right: 2
                            }
                        }, r.createElement(N.q, {
                            size: 40,
                            alt: this.props.name,
                            src: this.props.avatarURL
                        })), r.createElement(N.Xa, null, r.createElement(N.W, null, this.props.name))))
                    }, t
                }(r.Component),
                re = n("Ji7V");
            ! function(e) {
                e.Error = "dev-channel-list-error"
            }($ || ($ = {}));
            var se, ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderChannels = function() {
                            return t.props.data && t.props.data.users ? t.props.data.users.map(function(e) {
                                return r.createElement(ae, {
                                    name: e.displayName,
                                    avatarURL: e.profileImageURL,
                                    id: e.id,
                                    key: e.id,
                                    onClick: t.props.onChannelClick
                                })
                            }) : null
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data && this.props.data.loading && !this.props.data.users && !this.props.data.error) return r.createElement(N.Za, null);
                        if (this.props.data && this.props.data.error) return r.createElement(N.Xa, {
                            "data-test-selector": $.Error
                        });
                        var e = this.renderChannels();
                        return r.createElement(N.Xa, null, e)
                    }, t
                }(r.Component),
                oe = Object(ne.a)(re, {
                    options: function(e) {
                        return {
                            variables: {
                                ids: e.channels
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channels.length
                    }
                })(ie),
                ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            loadError: !1
                        }, t.preventRender = function() {
                            t.setState({
                                loadError: !0
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.state.loadError) return null;
                        var e = "https://twitch-ds-vhs-drops-campaign-images-us-west-2-prod.s3-us-west-2.amazonaws.com/" + this.props.id + "/account_link_notification_image_" + this.props.size + "x" + this.props.size + ".jpg";
                        return r.createElement(N.S, {
                            src: e,
                            alt: this.props.name,
                            onError: this.preventRender
                        })
                    }, t
                }(r.Component),
                ue = n("GD6M"),
                le = n("LFRE");
            n("xYlS");
            ! function(e) {
                e.ConnectionURL = "dev-drops-campaign-form-connection-url", e.Error = "dev-drops-campaign-form-error", e.FileButton = "dev-drops-campaign-form-file-button", e.NameField = "dev-drops-campaign-form-name-field", e.SubmitButton = "dev-drops-campaign-form-submit-button"
            }(se || (se = {}));
            var pe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    if (n.renderDropsLinkImage = function() {
                            return n.props.campaign ? r.createElement(ce, {
                                id: n.props.campaign.id,
                                name: n.props.campaign.item_name,
                                size: 80
                            }) : null
                        }, n.renderErrorMessage = function() {
                            if (n.props.errorMessage) return r.createElement(N.zb, {
                                className: "dev-drops-campaign-form__error",
                                color: N.O.Overlay,
                                "data-test-selector": se.Error,
                                margin: {
                                    top: 1
                                },
                                padding: 1
                            }, n.props.errorMessage)
                        }, n.onClickCancel = function() {
                            var e = n.props.onCancel;
                            e && e()
                        }, n.findGamesForCampaign = function() {
                            var e = n.props,
                                t = e.campaign,
                                a = e.games;
                            return t && t.games && t.games.map(function(e) {
                                return a.find(function(t) {
                                    return t._id === parseInt(e, 10)
                                })
                            }).filter(function(e) {
                                return !!e
                            }) || []
                        }, n.onItemChange = function(e) {
                            var t = e.target,
                                a = t.checked,
                                r = t.value;
                            n.setState(function(e) {
                                var t;
                                return a && e.itemIds.size < te.b ? ((t = new Set(e.itemIds)).add(r), {
                                    itemIds: t
                                }) : a ? null : ((t = new Set(e.itemIds)).delete(r), {
                                    itemIds: t
                                })
                            }, n.handleFormChange)
                        }, n.onStartDate = function(e) {
                            n.setState({
                                startDate: e
                            }, n.handleFormChange)
                        }, n.onStartTime = function(e) {
                            n.setState({
                                startTime: e
                            }, n.handleFormChange)
                        }, n.onEndDate = function(e) {
                            n.setState({
                                endDate: e
                            }, n.handleFormChange)
                        }, n.onEndTime = function(e) {
                            n.setState({
                                endTime: e
                            }, n.handleFormChange)
                        }, n.onGameSelect = function(e) {
                            n.setState({
                                games: e
                            }, n.handleFormChange)
                        }, n.onUserSelect = function(e) {
                            n.setState(function(t) {
                                return {
                                    channels: t.channels.concat([e.id])
                                }
                            }, n.handleFormChange)
                        }, n.setEnabled = function(e) {
                            n.setState({
                                enabled: e.target.checked
                            }, n.handleFormChange)
                        }, n.setItemName = function(e) {
                            n.setState({
                                itemName: e.target.value
                            }, n.handleFormChange)
                        }, n.setConnectURL = function(e) {
                            n.setState({
                                connectionURL: e.target.value
                            }, n.handleFormChange)
                        }, n.onChannelClick = function(e) {
                            n.setState(function(t) {
                                var n = t.channels.findIndex(function(t) {
                                    return t === e
                                });
                                return {
                                    channels: t.channels.slice(0, n).concat(t.channels.slice(n + 1))
                                }
                            }, n.handleFormChange)
                        }, n.onUploadButtonClick = function(e) {
                            e.preventDefault();
                            var t = {
                                imageDimensions: "120x120",
                                isRequiredImageDimensions: !0,
                                maxFileSizeMegabytes: 1,
                                provider: {
                                    uploadFile: n.setFile
                                },
                                allowedFileTypes: [j.a.JPEG]
                            };
                            n.props.showModal(J, t)
                        }, n.setFile = function(e) {
                            return n.setState({
                                image: e
                            }, n.handleFormChange), Promise.resolve()
                        }, n.validate = function() {
                            n.setState(function(e) {
                                var t = !0;
                                return null !== e.startDate && null !== e.startTime || (t = !1), null !== e.endDate && null !== e.endTime || (t = !1), e.games.length || (t = !1), e.itemIds.size || (t = !1), e.connectionURL || (t = !1), e.itemName.length || (t = !1), {
                                    valid: t
                                }
                            })
                        }, n.handleFormChange = function() {
                            n.props.onFormChange && n.props.onFormChange(), n.validate()
                        }, n.onSubmit = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e.preventDefault(), t = this.timeWithoutSeconds(this.state.startDate, A(this.state.startTime)), n = this.timeWithoutSeconds(this.state.endDate, A(this.state.endTime)), r = {
                                                connectionURL: this.state.connectionURL,
                                                enabled: this.state.enabled,
                                                endTime: n,
                                                games: this.state.games.map(function(e) {
                                                    return String(e._id)
                                                }),
                                                image: this.state.image,
                                                itemIds: Array.from(this.state.itemIds),
                                                itemName: this.state.itemName,
                                                startTime: t,
                                                whitelistedChannels: this.state.channels
                                            }, this.props.campaign && (r.id = this.props.campaign.id), this.setState({
                                                isSubmitting: !0
                                            }), [4, this.props.onSubmit(r)];
                                        case 1:
                                            return a.sent(), this.setState({
                                                isSubmitting: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t.campaign) {
                        var s = n.findGamesForCampaign(),
                            i = new Date(t.campaign.start_date / 1e6),
                            o = new Date(t.campaign.end_date / 1e6);
                        n.state = {
                            campaignId: t.campaign.id,
                            startDate: R(i),
                            startTime: R(i),
                            endDate: R(o),
                            endTime: R(o),
                            games: s,
                            isSubmitting: !1,
                            itemIds: new Set(t.campaign.item_ids),
                            enabled: t.campaign.enabled,
                            connectionURL: t.campaign.click_thru_url,
                            channels: t.campaign.whitelisted_channel_ids && t.campaign.whitelisted_channel_ids.filter(function(e) {
                                return e.length
                            }) || [],
                            itemName: t.campaign.item_name,
                            valid: !1
                        }
                    } else n.state = {
                        channels: [],
                        connectionURL: "",
                        enabled: !1,
                        endDate: new Date,
                        endTime: S(),
                        games: [],
                        isSubmitting: !1,
                        itemIds: new Set,
                        itemName: "",
                        startDate: new Date,
                        startTime: S(),
                        valid: !1
                    };
                    return n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = Object(o.d)("This is to whitelist channels to notify about this drop campaign. Leaving  this empty will enable for everyone who broadcasts the game.", "DevDropsCampaignForm");
                    this.state.games.length && (t = Object(o.d)("{games, plural, one { This is to whitelist channels to notify about this drop campaign. Leaving this empty will enable for everyone who broadcasts the game. } other { This is to whitelist channels to notify about this drop campaign. Leaving this empty will enable for everyone who broadcasts the games. } }", {
                        games: this.state.games.length
                    }, "DevDropsCampaignForm"));
                    var n = N.E.Default;
                    this.state.isSubmitting ? n = N.E.Loading : this.props.updateSuccess && (n = N.E.Success);
                    var a = this.renderDropsLinkImage();
                    return r.createElement(N.Xa, {
                        className: "dev-drops-campaign-form"
                    }, this.renderErrorMessage(), r.createElement(N.Xa, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(N.N, {
                        checked: this.state.enabled,
                        label: Object(o.d)("Enabled", "DevDropsCampaignForm"),
                        onChange: this.setEnabled
                    })), r.createElement(N.Xa, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("Campaign Name", "DevDropsCampaignForm")
                    }, r.createElement(N.Ra, {
                        type: N.Ta.Text,
                        value: this.state.itemName,
                        onChange: this.setItemName,
                        "data-test-selector": se.NameField
                    }))), this.state.campaignId && r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("Campaign ID", "DevDropsCampaignForm")
                    }, r.createElement(N.Ra, {
                        type: N.Ta.Text,
                        value: this.state.campaignId
                    }))), r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(N.Ja, null, r.createElement(N.P, {
                        cols: {
                            default: 12,
                            md: 6
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("Start Date/Time (UTC)", "DevDropsCampaignForm")
                    }, r.createElement(z.a, {
                        onChange: this.onStartDate,
                        defaultDate: this.state.startDate
                    }), r.createElement(ee, {
                        onChange: this.onStartTime,
                        defaultDate: this.state.startTime
                    }))), r.createElement(N.P, {
                        cols: {
                            default: 12,
                            md: 6
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("End Date/Time (UTC)", "DevDropsCampaignForm")
                    }, r.createElement(z.a, {
                        onChange: this.onEndDate,
                        defaultDate: this.state.endDate
                    }), r.createElement(ee, {
                        onChange: this.onEndTime,
                        defaultDate: this.state.endTime
                    }))))), r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("Games", "DevDropsCampaignForm")
                    }, r.createElement(ue.a, {
                        onGameSelect: this.onGameSelect,
                        multi: !0,
                        games: this.props.games,
                        defaultGames: this.state.games
                    }), r.createElement(N.W, {
                        color: N.O.Alt2
                    }, Object(o.d)("If your game does not appear in this list, please add it to your company <x:link>here</x:link>.", {
                        "x:link": function(e) {
                            return r.createElement(N.U, {
                                key: e,
                                to: "/console/games"
                            }, e)
                        }
                    }, "DevDropsCampaignForm")))), r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("Drops Connection URL", "DevDropsCampaignForm"),
                        hint: Object(o.d)("The URL users go to connect their account.", "DevDropsCampaignForm")
                    }, r.createElement(N.Ra, {
                        "data-test-selector": se.ConnectionURL,
                        type: N.Ta.Text,
                        value: this.state.connectionURL,
                        onChange: this.setConnectURL
                    }))), r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("Whitelisted Channels", "DevDropsCampaignForm"),
                        hint: t
                    }, r.createElement(le.a, {
                        onUserSelect: this.onUserSelect,
                        includeCurrentUser: !0
                    }))), r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(oe, {
                        channels: this.state.channels,
                        onChannelClick: this.onChannelClick
                    })), r.createElement(N.Xa, null, r.createElement(N.Ea, {
                        label: Object(o.d)("Campaign Image", "DevDropsCampaignForm"),
                        hint: Object(o.d)("This is the image for Drops Campaign Notifications. Required image size is 120x120. Please note that it may take up to 15 minutes for image changes to take effect.", "DevDropsCampaignForm")
                    }, a, r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        },
                        display: N.X.Flex,
                        alignItems: N.f.Center
                    }, r.createElement(N.z, {
                        "data-test-selector": se.FileButton,
                        onClick: this.onUploadButtonClick
                    }, Object(o.d)("Upload Image", "DevDropsCampaignForm")), this.state.image && r.createElement(N.Xa, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(N.W, {
                        color: N.O.Alt
                    }, this.state.image.name))))), r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(N.W, {
                        type: N.Pb.H3
                    }, Object(o.d)("Items", "DevDropsCampaignForm"))), r.createElement("fieldset", null, r.createElement(N.Pa, {
                        padding: {
                            y: 1
                        }
                    }, r.createElement("legend", null, r.createElement(N.W, null, Object(o.d)("Select up to {MAX_DROPS_ITEMS_PER_CAMPAIGN} of your currently active items", {
                        MAX_DROPS_ITEMS_PER_CAMPAIGN: te.b
                    }, "DevDropsCampaignForm")))), r.createElement(N.Vb, {
                        childWidth: N.Wb.ExtraSmall,
                        gutterSize: N.Xb.Small,
                        placeholderItems: 20
                    }, this.props.availableItems.map(function(t, n) {
                        var a = t.translations[t.defaultLanguage],
                            s = e.state.itemIds.has(t.id);
                        return r.createElement(N.Xa, {
                            key: n,
                            position: N.fb.Relative,
                            className: "drops-item-selector-container",
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(N.o, {
                            ratio: N.p.Aspect1x1
                        }, r.createElement(N.La, {
                            alt: a,
                            checked: s,
                            label: a,
                            name: "item-selector-checkbox",
                            onChange: e.onItemChange,
                            src: te.a + "/items/" + e.props.companyId + "/" + t.id + "-120x120.jpg",
                            type: N.Ma.Checkbox,
                            value: t.id
                        })), s && r.createElement(N.zb, {
                            display: N.X.InlineFlex,
                            alignItems: N.f.Center,
                            justifyContent: N.Wa.Center,
                            background: N.r.Accent,
                            position: N.fb.Absolute,
                            color: N.O.Overlay,
                            attachTop: !0
                        }, r.createElement(N.ob, {
                            asset: N.pb.Check
                        })), r.createElement(N.W, {
                            bold: s,
                            ellipsis: !0
                        }, a))
                    })))), r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(N.Xa, {
                        display: N.X.InlineBlock,
                        padding: {
                            right: 1
                        }
                    }, r.createElement(N.z, {
                        type: N.F.Hollow,
                        onClick: this.onClickCancel
                    }, Object(o.d)("Cancel", "DevDropsCampaignForm"))), r.createElement(N.z, {
                        disabled: !this.state.valid,
                        "data-test-selector": se.SubmitButton,
                        onClick: this.onSubmit,
                        state: n
                    }, Object(o.d)("Submit", "DevDropsCampaignForm"))))
                }, t.prototype.timeWithoutSeconds = function(e, t) {
                    var n = 0;
                    return t.getHours() + t.getTimezoneOffset() / 60 > 24 && (n = -1), new Date(e.getFullYear(), e.getMonth(), e.getDate() + n, t.getHours(), t.getMinutes())
                }, t
            }(r.Component);
            var de = Object(X.connect)(null, function(e) {
                    return Object(l.bindActionCreators)({
                        showModal: Y.d
                    }, e)
                })(pe),
                Ee = n("QKmf");

            function me() {
                var e = this;
                return Object(ne.a)(Ee, {
                    props: function(t) {
                        return {
                            createUploadURLMutation: function(n) {
                                return a.__awaiter(e, void 0, void 0, function() {
                                    var e;
                                    return a.__generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: n
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                if ((e = a.sent()).data.createDropImageUploadURL && !e.data.createDropImageUploadURL.error) return [2, {
                                                    url: e.data.createDropImageUploadURL.url,
                                                    uploadID: e.data.createDropImageUploadURL.uploadID
                                                }];
                                                throw new Error("Upload failed");
                                            case 2:
                                                throw new Error("Unable to upload image");
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
            var he, ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            games: [],
                            gamesLoaded: !1,
                            items: []
                        }, t.fetchGames = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, H()];
                                        case 1:
                                            return e = t.sent(), this.setState({
                                                games: e,
                                                gamesLoaded: !0
                                            }), [3, 3];
                                        case 2:
                                            return t.sent(), this.setState({
                                                gamesLoaded: !0
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.fetchItems = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            e = _(this.props.company), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, W({
                                                activeOnly: !0,
                                                companyId: e,
                                                limit: 100
                                            })];
                                        case 2:
                                            return (t = n.sent()) && this.setState({
                                                items: t.items
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onCancel = function() {
                            t.props.history.push("/console/drops")
                        }, t.onSubmit = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, s, i, u, l, p;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 12, , 13]), t = _(this.props.company), n = T(e, t), [4, Object(D.a)(f.a.PostCampaign)];
                                        case 1:
                                            return (r = a.sent()) ? (s = d.a + "/kraken/accounts/" + t + "/campaigns", [4, Object(g.a)(s, {
                                                method: "POST",
                                                body: JSON.stringify(n),
                                                headers: {
                                                    "X-Twitch-VHSCF": r
                                                }
                                            })]) : [3, 10];
                                        case 2:
                                            return 200 !== (i = a.sent()).status ? [3, 7] : (Object(c.d)(c.a.CreateDropsProcessComplete, n.id || ""), e.image ? [4, i.json()] : [3, 5]);
                                        case 3:
                                            return u = a.sent(), [4, this.uploadFile(e.image, u.id)];
                                        case 4:
                                            return a.sent(), [3, 6];
                                        case 5:
                                            this.props.history.push("/console/drops"), a.label = 6;
                                        case 6:
                                            return [3, 9];
                                        case 7:
                                            return 400 !== i.status ? [3, 9] : [4, i.json()];
                                        case 8:
                                            l = a.sent(), this.setState({
                                                errorMessage: l.message
                                            }), a.label = 9;
                                        case 9:
                                            return [3, 11];
                                        case 10:
                                            this.setState({
                                                errorMessage: Object(o.d)("You are not allowed to perform this action", "DevDropsCreateCampaign")
                                            }), a.label = 11;
                                        case 11:
                                            return [3, 13];
                                        case 12:
                                            return p = a.sent(), this.setState({
                                                errorMessage: p.message
                                            }), [3, 13];
                                        case 13:
                                            return [2]
                                    }
                                })
                            })
                        }, t.uploadFile = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            t = new V(this.generateUploadURL(n), this.onFinishUpload), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, t.uploadFile(e)];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return a.sent(), this.props.history.push("/console/drops"), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.generateUploadURL = function(e) {
                            if (!t.props.company) throw new Error("Failed to upload");
                            return function(n) {
                                return a.__awaiter(t, void 0, void 0, function() {
                                    var t, n;
                                    return a.__generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return [4, Object(D.a)(f.a.PostCampaignImageUrl)];
                                            case 1:
                                                if (t = a.sent()) return n = {
                                                    campaignID: e,
                                                    imageType: F.s.LINK_NOTIFICATION,
                                                    serviceID: _(this.props.company),
                                                    token: t
                                                }, [2, this.props.createUploadURLMutation(n)];
                                                throw new Error("Failed to upload")
                                        }
                                    })
                                })
                            }
                        }, t.onFinishUpload = function() {
                            t.props.history.push("/console/drops")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Promise.all([this.fetchGames(), this.fetchItems()])];
                                    case 1:
                                        return e.sent(), this.props.latencyTracking.reportInteractive(), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return this.state.gamesLoaded ? r.createElement(N.Xa, {
                            padding: {
                                top: 1
                            }
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Between
                        }, r.createElement(N.W, {
                            type: N.Pb.H2
                        }, Object(o.d)("Drops Campaign", "DevDropsCreateCampaign")), r.createElement(N.z, {
                            targetBlank: !0,
                            linkTo: "https://dev.twitch.tv/docs/drops",
                            type: N.F.Hollow
                        }, Object(o.d)("Need Help?", "DevDropsCreateCampaign"))), r.createElement(N.Ja, null, r.createElement(N.P, {
                            cols: {
                                default: 12,
                                md: 5
                            }
                        }, r.createElement(de, {
                            companyId: this.props.company.id,
                            games: this.state.games,
                            availableItems: this.state.items,
                            onCancel: this.onCancel,
                            onSubmit: this.onSubmit,
                            errorMessage: this.state.errorMessage
                        })))) : r.createElement(N.Za, null)
                    }, t
                }(r.Component),
                _e = Object(l.compose)(Object(h.b)("DevDropsCreateCampaignPage", {
                    destination: E.a.DevSiteDropsCreateCampaign
                }), Object(p.a)({
                    location: m.PageviewLocation.DevSiteDropsCreateCampaign
                }), me(), Object(u.a)(), y.a)(ge),
                fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            loadError: !1
                        }, t.preventRender = function() {
                            t.setState({
                                loadError: !0
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.state.loadError) return null;
                        var e = te.a + "/items/" + this.props.companyId + "/" + this.props.id + "-" + this.props.size + "x" + this.props.size + ".jpg";
                        return r.createElement(N.S, {
                            src: e,
                            alt: this.props.name,
                            onError: this.preventRender
                        })
                    }, t
                }(r.Component);
            n("WM9t");
            ! function(e) {
                e.DefaultLocaleSelect = "dev-drops-item-form-language-field", e.Error = "dev-drops-item-form-error", e.FileButton = "dev-drops-item-form-file-button", e.SubmitButton = "dev-drops-item-form-submit-button"
            }(he || (he = {}));
            var Te = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderDropsItemImage = function() {
                        return n.props.item ? r.createElement(fe, {
                            id: n.props.item.ItemID,
                            companyId: n.props.companyId,
                            name: n.props.item.Translations[n.props.item.DefaultLanguage],
                            size: 120
                        }) : null
                    }, n.renderErrorMessage = function() {
                        if (n.props.errorMessage) return r.createElement(N.zb, {
                            className: "dev-drops-item-form__error",
                            color: N.O.Overlay,
                            "data-test-selector": he.Error,
                            margin: {
                                top: 1
                            },
                            padding: 1
                        }, n.props.errorMessage)
                    }, n.onClickCancel = function() {
                        var e = n.props.onCancel;
                        e && e()
                    }, n.addLocalizedName = function() {
                        var e = n.localeSelectRef.value,
                            t = n.localizedNameInputRef.value;
                        t && n.setState(function(n) {
                            var r;
                            return {
                                translations: a.__assign({}, n.translations, ((r = {})[e] = t, r))
                            }
                        }, function() {
                            n.localizedNameInputRef.value = "", n.handleFormChange()
                        })
                    }, n.removeLocalizedName = function(e) {
                        var t = e.currentTarget.dataset.locale;
                        n.setState(function(e) {
                            var n = a.__assign({}, e.translations);
                            return delete n[t], {
                                translations: n
                            }
                        }, n.handleFormChange)
                    }, n.setActive = function(e) {
                        n.setState({
                            active: e.target.checked
                        }, n.handleFormChange)
                    }, n.setDefaultLocale = function(e) {
                        n.setState({
                            defaultLocale: e.target.value
                        }, n.handleFormChange)
                    }, n.onUploadButtonClick = function(e) {
                        e.preventDefault();
                        var t = {
                            imageDimensions: "120x120",
                            isRequiredImageDimensions: !0,
                            maxFileSizeMegabytes: 1,
                            provider: {
                                uploadFile: n.setFile
                            },
                            allowedFileTypes: [j.a.JPEG]
                        };
                        n.props.showModal(J, t)
                    }, n.setFile = function(e) {
                        return n.setState({
                            image: e
                        }, n.handleFormChange), Promise.resolve()
                    }, n.setLocaleSelectorRef = function(e) {
                        n.localeSelectRef = e
                    }, n.setLocalizedNameInputRef = function(e) {
                        n.localizedNameInputRef = e
                    }, n.validate = function() {
                        n.setState(function(e) {
                            var t = !0;
                            return e.defaultLocale || (t = !1), e.translations[e.defaultLocale] || (t = !1), {
                                valid: t
                            }
                        })
                    }, n.onSubmit = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e.preventDefault(), t = {
                                            default_language: this.state.defaultLocale,
                                            active: this.state.active,
                                            translations: this.state.translations,
                                            image: this.state.image
                                        }, this.props.item && (t.item_id = this.props.item.ItemID), this.setState({
                                            isSubmitting: !0
                                        }), [4, this.props.onSubmit(t)];
                                    case 1:
                                        return n.sent(), this.setState({
                                            isSubmitting: !1
                                        }), [2]
                                }
                            })
                        })
                    }, n.handleFormChange = function() {
                        n.props.onFormChange && n.props.onFormChange(), n.validate()
                    }, t.item ? n.state = {
                        active: t.item.Active,
                        defaultLocale: t.item.DefaultLanguage,
                        isSubmitting: !1,
                        itemId: t.item.ItemID,
                        translations: t.item.Translations,
                        valid: !1
                    } : n.state = {
                        active: !1,
                        defaultLocale: "en-US",
                        isSubmitting: !1,
                        translations: {},
                        valid: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = N.E.Default;
                    this.state.isSubmitting ? t = N.E.Loading : this.props.updateSuccess && (t = N.E.Success);
                    var n = this.renderDropsItemImage();
                    return r.createElement(N.Xa, {
                        className: "dev-drops-item-form"
                    }, this.renderErrorMessage(), r.createElement(N.Xa, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(N.N, {
                        checked: this.state.active,
                        label: Object(o.d)("Enabled", "DevDropsItemForm"),
                        onChange: this.setActive
                    })), r.createElement(N.Xa, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("Item Image", "DevDropsItemForm"),
                        hint: Object(o.d)("Required image size is 120x120. Please note that it may take up to 15 minutes for image changes to take effect.", "DevDropsItemForm")
                    }, n, r.createElement(N.Xa, {
                        padding: {
                            top: 1
                        },
                        display: N.X.Flex,
                        alignItems: N.f.Center
                    }, r.createElement(N.z, {
                        "data-test-selector": he.FileButton,
                        onClick: this.onUploadButtonClick
                    }, Object(o.d)("Upload Image", "DevDropsItemForm")), this.state.image && r.createElement(N.Xa, {
                        padding: {
                            x: 1
                        }
                    }, r.createElement(N.W, {
                        color: N.O.Alt
                    }, this.state.image.name))))), this.state.itemId && r.createElement(N.Xa, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("Item ID", "DevDropsItemForm")
                    }, r.createElement(N.Ra, {
                        type: N.Ta.Text,
                        value: this.state.itemId
                    }))), r.createElement(N.Xa, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("Localized Item Names", "DevDropsItemForm"),
                        hint: Object(o.d)("The name of the item a viewer will see for the reward.", "DevDropsItemForm")
                    }, Object.keys(this.state.translations).map(function(t) {
                        var n = o.a.locales.find(function(e) {
                            return e.locale === t
                        });
                        if (n) return r.createElement(N.zb, {
                            key: t,
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(N.Ja, null, r.createElement(N.P, {
                            cols: 4
                        }, r.createElement(N.Pa, {
                            padding: .5
                        }, r.createElement(N.W, {
                            bold: !0
                        }, n.name))), r.createElement(N.P, {
                            cols: 8
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            padding: {
                                left: 2
                            },
                            alignItems: N.f.Center,
                            justifyContent: N.Wa.Between
                        }, r.createElement(N.W, null, e.state.translations[t]), r.createElement(N.z, {
                            "data-locale": t,
                            onClick: e.removeLocalizedName,
                            type: N.F.Hollow
                        }, Object(o.d)("Remove", "DevDropsItemForm"))))))
                    }), r.createElement(N.Ja, null, r.createElement(N.P, {
                        cols: 4
                    }, r.createElement(N.vb, {
                        refDelegate: this.setLocaleSelectorRef
                    }, o.a.locales.filter(function(t) {
                        return !e.state.translations[t.locale]
                    }).map(function(e) {
                        return r.createElement("option", {
                            key: e.locale,
                            value: e.locale
                        }, e.name)
                    }))), r.createElement(N.P, {
                        cols: 8
                    }, r.createElement(N.Xa, {
                        display: N.X.Flex,
                        padding: {
                            left: 1
                        }
                    }, r.createElement(N.Xa, {
                        flexGrow: 1,
                        padding: {
                            right: 2
                        }
                    }, r.createElement(N.Ra, {
                        refDelegate: this.setLocalizedNameInputRef,
                        type: N.Ta.Text,
                        placeholder: Object(o.d)("Localized Item Name", "DevDropsItemForm")
                    })), r.createElement(N.z, {
                        onClick: this.addLocalizedName
                    }, Object(o.d)("Add", "DevDropsItemForm"))))))), r.createElement(N.Xa, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(N.Ea, {
                        label: Object(o.d)("Default Locale for Item Name", "DevDropsItemForm"),
                        hint: Object(o.d)("The locale to use when no value is provided in the viewer's locale.", "DevDropsItemForm")
                    }, r.createElement(N.vb, {
                        value: this.state.defaultLocale,
                        onChange: this.setDefaultLocale,
                        "data-test-selector": he.DefaultLocaleSelect
                    }, o.a.locales.map(function(e) {
                        return r.createElement("option", {
                            key: e.locale,
                            value: e.locale
                        }, e.name)
                    })))), r.createElement(N.Xa, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(N.Xa, {
                        display: N.X.InlineBlock,
                        padding: {
                            right: 1
                        }
                    }, r.createElement(N.z, {
                        type: N.F.Hollow,
                        onClick: this.onClickCancel
                    }, Object(o.d)("Cancel", "DevDropsItemForm"))), r.createElement(N.z, {
                        "data-test-selector": he.SubmitButton,
                        disabled: !this.state.valid,
                        onClick: this.onSubmit,
                        state: t
                    }, Object(o.d)("Submit", "DevDropsItemForm"))))
                }, t
            }(r.Component);
            var Ie, De, Ne = Object(X.connect)(null, function(e) {
                    return Object(l.bindActionCreators)({
                        showModal: Y.d
                    }, e)
                })(Te),
                Oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onCancel = function() {
                            t.props.history.push("/console/drops/items")
                        }, t.onSubmit = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, s, i, u, l, p;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 13, , 14]), t = _(this.props.company), [4, Object(D.a)(f.a.CreateItem)];
                                        case 1:
                                            return (n = a.sent()) ? (r = I(e, t, n), s = d.a + "/kraken/accounts/" + t + "/items", [4, Object(g.a)(s, {
                                                method: "POST",
                                                body: JSON.stringify(r),
                                                headers: {
                                                    "X-Twitch-VHSCF": n
                                                }
                                            })]) : [3, 11];
                                        case 2:
                                            return 200 !== (i = a.sent()).status ? [3, 7] : (Object(c.d)(c.a.CreateDropsItemProcessComplete, e.item_id), e.image ? [4, i.json()] : [3, 5]);
                                        case 3:
                                            return u = a.sent(), [4, this.uploadFile(e.image, u.ItemID)];
                                        case 4:
                                            return a.sent(), [3, 6];
                                        case 5:
                                            this.props.history.push("/console/drops/items"), a.label = 6;
                                        case 6:
                                            return [3, 10];
                                        case 7:
                                            return 400 !== i.status ? [3, 9] : [4, i.json()];
                                        case 8:
                                            return l = a.sent(), this.setState({
                                                errorMessage: l.message
                                            }), [3, 10];
                                        case 9:
                                            this.setState({
                                                errorMessage: Object(o.d)("Unexpected error", "DevDropsCreateItem")
                                            }), a.label = 10;
                                        case 10:
                                            return [3, 12];
                                        case 11:
                                            this.setState({
                                                errorMessage: Object(o.d)("You are not allowed to perform this action", "DevDropsCreateItem")
                                            }), a.label = 12;
                                        case 12:
                                            return [3, 14];
                                        case 13:
                                            return p = a.sent(), this.setState({
                                                errorMessage: p.message
                                            }), [3, 14];
                                        case 14:
                                            return [2]
                                    }
                                })
                            })
                        }, t.uploadFile = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            t = new V(this.generateUploadURL(n), this.onFinishUpload), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, t.uploadFile(e)];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return a.sent(), this.props.history.push("/console/drops/items"), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.generateUploadURL = function(e) {
                            if (!t.props.company) throw new Error("Failed to upload");
                            return function(n) {
                                return a.__awaiter(t, void 0, void 0, function() {
                                    var t, n;
                                    return a.__generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return [4, Object(D.a)(f.a.PostItemImageUrl)];
                                            case 1:
                                                if (t = a.sent()) return n = {
                                                    imageType: F.s.ITEM,
                                                    itemID: e,
                                                    serviceID: _(this.props.company),
                                                    token: t
                                                }, [2, this.props.createUploadURLMutation(n)];
                                                throw new Error("Failed to upload")
                                        }
                                    })
                                })
                            }
                        }, t.onFinishUpload = function() {
                            t.props.history.push("/console/drops/items")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(N.Xa, {
                            padding: {
                                top: 1
                            }
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Between
                        }, r.createElement(N.W, {
                            type: N.Pb.H2
                        }, Object(o.d)("Drops Item", "DevDropsCreateItem")), r.createElement(N.z, {
                            targetBlank: !0,
                            linkTo: "https://dev.twitch.tv/docs/drops",
                            type: N.F.Hollow
                        }, Object(o.d)("Need Help?", "DevDropsCreateItem"))), r.createElement(N.Ja, null, r.createElement(N.P, {
                            cols: {
                                default: 12,
                                md: 5
                            }
                        }, r.createElement(Ne, {
                            companyId: _(this.props.company),
                            onCancel: this.onCancel,
                            onSubmit: this.onSubmit,
                            errorMessage: this.state.errorMessage
                        }))))
                    }, t
                }(r.Component),
                Se = Object(l.compose)(Object(h.b)("DevDropsCreateItemPage", {
                    autoReportInteractive: !0,
                    destination: E.a.DevSiteDropsCreateItem
                }), Object(p.a)({
                    location: m.PageviewLocation.DevSiteDropsCreateItem
                }), me(), Object(u.a)(), y.a)(Oe),
                Re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            games: [],
                            gamesLoaded: !1,
                            items: [],
                            updateSuccess: !1
                        }, t.onCancel = function() {
                            t.props.history.push("/console/drops")
                        }, t.fetchGames = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, H()];
                                        case 1:
                                            return e = t.sent(), this.setState({
                                                games: e,
                                                gamesLoaded: !0
                                            }), [3, 3];
                                        case 2:
                                            return t.sent(), this.setState({
                                                gamesLoaded: !0
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.fetchItems = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            e = _(this.props.company), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, W({
                                                activeOnly: !0,
                                                companyId: e,
                                                limit: 100
                                            })];
                                        case 2:
                                            return (t = n.sent()) && this.setState({
                                                items: t.items
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.fetchCampaign = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 6, , 7]), e = d.a + "/kraken/campaigns/" + this.props.match.params.campaignId, [4, Object(D.a)(f.a.GetCampaignById)];
                                        case 1:
                                            return (t = a.sent()) ? [4, Object(g.a)(e, {
                                                headers: {
                                                    "X-Twitch-VHSCF": t
                                                }
                                            })] : [3, 5];
                                        case 2:
                                            return 200 !== (n = a.sent()).status ? [3, 4] : [4, n.json()];
                                        case 3:
                                            return r = a.sent(), this.setState({
                                                campaign: r
                                            }), [3, 5];
                                        case 4:
                                            this.props.history.push("/console/drops"), a.label = 5;
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return a.sent(), this.props.history.push("/console/drops"), [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onSubmit = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, s, i, u, l;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 10, , 11]), t = _(this.props.company), n = T(e, String(t)), [4, Object(D.a)(f.a.PutCampaign)];
                                        case 1:
                                            return (r = a.sent()) ? (s = d.a + "/kraken/accounts/" + t + "/campaigns/" + e.id, [4, Object(g.a)(s, {
                                                method: "PUT",
                                                body: JSON.stringify(n),
                                                headers: {
                                                    "X-Twitch-VHSCF": r
                                                }
                                            })]) : [3, 9];
                                        case 2:
                                            return 204 !== (i = a.sent()).status ? [3, 6] : (Object(c.d)(c.a.DropUpdated, n.id || ""), e.image ? [4, this.uploadFile(e.image)] : [3, 4]);
                                        case 3:
                                            return a.sent(), [3, 5];
                                        case 4:
                                            this.setState({
                                                updateSuccess: !0
                                            }), a.label = 5;
                                        case 5:
                                            return [3, 9];
                                        case 6:
                                            return 400 !== i.status ? [3, 8] : [4, i.json()];
                                        case 7:
                                            return u = a.sent(), this.setState({
                                                errorMessage: u.message
                                            }), [3, 9];
                                        case 8:
                                            Object(c.d)(c.a.DropNotFilledCorrectly, n.id || ""), this.setState({
                                                errorMessage: Object(o.d)("An error occurred while updating your campaign, please try again", "DevDropsEditCampaign")
                                            }), a.label = 9;
                                        case 9:
                                            return [3, 11];
                                        case 10:
                                            return l = a.sent(), this.setState({
                                                errorMessage: l.message
                                            }), [3, 11];
                                        case 11:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onFormChange = function() {
                            t.setState({
                                updateSuccess: !1
                            })
                        }, t.getUploadURL = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.state.campaign) throw new Error("Failed to upload");
                                            return [4, Object(D.a)(f.a.PostCampaignImageUrl)];
                                        case 1:
                                            if (e = a.sent()) return t = _(this.props.company), n = {
                                                campaignID: this.state.campaign.id,
                                                imageType: F.s.LINK_NOTIFICATION,
                                                serviceID: t,
                                                token: e
                                            }, [2, this.props.createUploadURLMutation(n)];
                                            throw new Error("Failed to upload")
                                    }
                                })
                            })
                        }, t.onFinishUpload = function() {
                            t.setState({
                                updateSuccess: !0
                            })
                        }, t.uploadFile = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            t = new V(this.getUploadURL, this.onFinishUpload), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, t.uploadFile(e)];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return n = a.sent(), this.setState({
                                                errorMessage: n.message,
                                                updateSuccess: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Promise.all([this.fetchGames(), this.fetchItems(), this.fetchCampaign()])];
                                    case 1:
                                        return e.sent(), this.props.latencyTracking.reportInteractive(), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return this.state.gamesLoaded && this.state.campaign ? r.createElement(N.Xa, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Between
                        }, r.createElement(N.W, {
                            type: N.Pb.H2
                        }, Object(o.d)("Drops Campaign: {title}", {
                            title: this.state.campaign.item_name
                        }, "DevDropsEditCampaign")), r.createElement(N.z, {
                            targetBlank: !0,
                            linkTo: "https://dev.twitch.tv/docs/drops",
                            type: N.F.Hollow
                        }, Object(o.d)("Need Help?", "DevDropsEditCampaign"))), r.createElement(N.Ja, null, r.createElement(N.P, {
                            cols: {
                                default: 12,
                                md: 5
                            }
                        }, r.createElement(de, {
                            campaign: this.state.campaign,
                            companyId: this.props.company.id,
                            games: this.state.games,
                            errorMessage: this.state.errorMessage,
                            availableItems: this.state.items,
                            onCancel: this.onCancel,
                            onFormChange: this.onFormChange,
                            onSubmit: this.onSubmit,
                            updateSuccess: this.state.updateSuccess
                        })))) : r.createElement(N.Za, null)
                    }, t
                }(r.Component),
                Ae = Object(l.compose)(Object(h.b)("DevDropsEditCampaignPage", {
                    destination: E.a.DevSiteDropsEditCampaign
                }), Object(p.a)({
                    location: m.PageviewLocation.DevSiteDropsEditCampaign
                }), me(), Object(u.a)(), y.a)(Re);
            ! function(e) {
                e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
            }(Ie || (Ie = {})),
            function(e) {
                e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
            }(De || (De = {}));
            var Ce, be = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            updateSuccess: !1
                        }, t.fetchItem = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 6, , 7]), e = _(this.props.company), t = d.a + "/kraken/accounts/" + e + "/items/" + this.props.match.params.itemId, [4, Object(D.a)(f.a.GetItemByID)];
                                        case 1:
                                            return (n = a.sent()) ? [4, Object(g.a)(t, {
                                                headers: {
                                                    "X-Twitch-VHSCF": n
                                                }
                                            })] : [3, 5];
                                        case 2:
                                            return 200 !== (r = a.sent()).status ? [3, 4] : [4, r.json()];
                                        case 3:
                                            return s = a.sent(), this.setState({
                                                item: s
                                            }), [3, 5];
                                        case 4:
                                            this.props.history.push("/console/drops/items"), a.label = 5;
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return a.sent(), this.props.history.push("/console/drops/items"), [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onCancel = function() {
                            t.props.history.push("/console/drops/items")
                        }, t.onSubmit = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, s, i, u, l;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 10, , 11]), t = _(this.props.company), [4, Object(D.a)(f.a.UpdateItem)];
                                        case 1:
                                            return (n = a.sent()) ? (r = I(e, String(t), n), s = d.a + "/kraken/accounts/" + t + "/items/" + e.item_id, [4, Object(g.a)(s, {
                                                method: "PUT",
                                                body: JSON.stringify(r),
                                                headers: {
                                                    "X-Twitch-VHSCF": n
                                                }
                                            })]) : [3, 9];
                                        case 2:
                                            return 200 !== (i = a.sent()).status ? [3, 6] : (Object(c.d)(c.a.DropItemUpdated), e.image ? [4, this.uploadFile(e.image)] : [3, 4]);
                                        case 3:
                                            return a.sent(), this.setState({
                                                updateSuccess: !0
                                            }), [3, 5];
                                        case 4:
                                            this.setState({
                                                updateSuccess: !0
                                            }), a.label = 5;
                                        case 5:
                                            return [3, 9];
                                        case 6:
                                            return 400 !== i.status ? [3, 8] : [4, i.json()];
                                        case 7:
                                            return u = a.sent(), this.setState({
                                                errorMessage: u.message
                                            }), [3, 9];
                                        case 8:
                                            Object(c.d)(c.a.DropItemNotFilledCorrectly), this.setState({
                                                errorMessage: Object(o.d)("An error occurred while updating your item, please try again", "DevDropsEditItem")
                                            }), a.label = 9;
                                        case 9:
                                            return [3, 11];
                                        case 10:
                                            return l = a.sent(), this.setState({
                                                errorMessage: l.message
                                            }), [3, 11];
                                        case 11:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onFormChange = function() {
                            t.setState({
                                updateSuccess: !1
                            })
                        }, t.getUploadURL = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.state.item) throw new Error("Failed to upload");
                                            return [4, Object(D.a)(f.a.PostItemImageUrl)];
                                        case 1:
                                            if (e = a.sent()) return t = _(this.props.company), n = {
                                                imageType: Ie.ITEM,
                                                itemID: this.state.item.ItemID,
                                                serviceID: t,
                                                token: e
                                            }, [2, this.props.createUploadURLMutation(n)];
                                            throw new Error("Failed to upload")
                                    }
                                })
                            })
                        }, t.onFinishUpload = function() {
                            t.setState({
                                updateSuccess: !0
                            })
                        }, t.uploadFile = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            t = new V(this.getUploadURL, this.onFinishUpload), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, t.uploadFile(e)];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return n = a.sent(), this.setState({
                                                errorMessage: n.message,
                                                updateSuccess: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.fetchItem()];
                                    case 1:
                                        return e.sent(), this.props.latencyTracking.reportInteractive(), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return this.state.item ? r.createElement(N.Xa, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Between
                        }, r.createElement(N.W, {
                            type: N.Pb.H2
                        }, Object(o.d)("Drops Item: {name}", {
                            name: this.state.item.Translations[this.state.item.DefaultLanguage]
                        }, "DevDropsEditItem")), r.createElement(N.z, {
                            targetBlank: !0,
                            linkTo: "https://dev.twitch.tv/docs/drops",
                            type: N.F.Hollow
                        }, Object(o.d)("Need Help?", "DevDropsEditItem"))), r.createElement(N.Ja, null, r.createElement(N.P, {
                            cols: {
                                default: 12,
                                md: 5
                            }
                        }, r.createElement(Ne, {
                            onSubmit: this.onSubmit,
                            companyId: _(this.props.company),
                            item: this.state.item,
                            onCancel: this.onCancel,
                            onFormChange: this.onFormChange,
                            errorMessage: this.state.errorMessage,
                            updateSuccess: this.state.updateSuccess
                        })))) : r.createElement(N.Za, null)
                    }, t
                }(r.Component),
                ve = Object(l.compose)(Object(h.b)("DevDropsEditItemPage", {
                    destination: E.a.DevSiteDropsEditItem
                }), Object(p.a)({
                    location: m.PageviewLocation.DevSiteDropsEditItems
                }), me(), Object(u.a)(), y.a)(be),
                Le = function(e) {
                    var t = Object(O.b)(R(e.item.createdAt), "MM/DD/YYYY, hh:mm a"),
                        n = Object(O.b)(R(e.item.updatedAt), "MM/DD/YYYY, hh:mm a"),
                        a = "/console/drops/items/" + e.item.id;
                    return r.createElement(N.Hb, null, r.createElement(N.Eb, null, r.createElement(N.U, {
                        linkTo: a
                    }, e.item.translations[e.item.defaultLanguage])), r.createElement(N.Eb, null, e.item.id), r.createElement(N.Eb, null, t), r.createElement(N.Eb, null, n), r.createElement(N.Eb, null, e.item.active.toString()))
                };
            ! function(e) {
                e[e.Enabled = 0] = "Enabled", e[e.CreationDate = 1] = "CreationDate", e[e.UpdatedDate = 2] = "UpdatedDate", e[e.Name = 3] = "Name"
            }(Ce || (Ce = {}));
            var Pe, Ue = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleClickNext = function() {
                            var e = n.props,
                                t = e.currentPage,
                                a = e.maxPages,
                                r = e.nextCursor;
                            t !== a && n.props.onClickPagination(t + 1, "", r)
                        }, n.handleClickPrev = function() {
                            var e = n.props,
                                t = e.currentPage,
                                a = e.prevCursor;
                            1 !== n.props.currentPage && n.props.onClickPagination(t - 1, a, "")
                        }, n.handleClickIndex = function(e) {
                            if (!(e.goToPage > n.props.maxPages || e.goToPage < 1)) {
                                var t = n.props,
                                    a = t.currentPage,
                                    r = t.nextCursor,
                                    s = t.prevCursor;
                                e.goToPage > a ? n.props.onClickPagination(e.goToPage, "", r) : n.props.onClickPagination(e.goToPage, s, "")
                            }
                        }, n.renderCampaignItems = function() {
                            return n.props.items.map(function(e) {
                                return r.createElement(Le, {
                                    item: e,
                                    key: e.id
                                })
                            })
                        }, n.sortName = function() {
                            n.setState(function(e) {
                                return {
                                    sortingName: n.toggleSorting(e.sortingName)
                                }
                            }, function() {
                                n.props.onSort(Ce.Name, n.state.sortingName)
                            })
                        }, n.sortEnabled = function() {
                            n.setState(function(e) {
                                return {
                                    sortingEnabled: n.toggleSorting(e.sortingEnabled)
                                }
                            }, function() {
                                n.props.onSort(Ce.Enabled, n.state.sortingEnabled)
                            })
                        }, n.sortCreationDate = function() {
                            n.setState(function(e) {
                                return {
                                    sortingCreationDate: n.toggleSorting(e.sortingCreationDate)
                                }
                            }, function() {
                                n.props.onSort(Ce.CreationDate, n.state.sortingCreationDate)
                            })
                        }, n.sortUpdatedDate = function() {
                            n.setState(function(e) {
                                return {
                                    sortingUpdatedDate: n.toggleSorting(e.sortingUpdatedDate)
                                }
                            }, function() {
                                n.props.onSort(Ce.UpdatedDate, n.state.sortingUpdatedDate)
                            })
                        }, n.toggleSorting = function(e) {
                            return e === N.wb.Default || e === N.wb.Ascending ? N.wb.Descending : N.wb.Ascending
                        }, n.state = {
                            sortingName: N.wb.Default,
                            sortingEnabled: N.wb.Default,
                            sortingCreationDate: N.wb.Default,
                            sortingUpdatedDate: N.wb.Default
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderCampaignItems();
                        return r.createElement(N.Xa, null, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Between,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(N.bb, {
                            currentPage: this.props.currentPage,
                            totalPages: this.props.maxPages,
                            onClickIndex: this.handleClickIndex,
                            onClickNext: this.handleClickNext,
                            onClickPrevious: this.handleClickPrev,
                            nextPageButtonAriaLabel: "Next Page",
                            previousPageButtonAriaLabel: "Previous Page"
                        }), r.createElement(N.z, {
                            onClick: Object(c.c)(c.a.CreateDropsItemProcessStart),
                            linkTo: "/console/drops/items/create",
                            icon: N.pb.Plus
                        }, Object(o.d)("Create Drops Item", "DevDropsItems"))), r.createElement(N.Cb, null, r.createElement(N.Fb, null, r.createElement(N.Gb, {
                            label: Object(o.d)("Item Name", "DevDropsItems"),
                            sorting: this.state.sortingName,
                            onClick: this.sortName
                        }), r.createElement(N.Gb, {
                            label: Object(o.d)("Item ID", "DevDropsItems")
                        }), r.createElement(N.Gb, {
                            label: Object(o.d)("Creation Date (UTC)", "DevDropsItems"),
                            sorting: this.state.sortingCreationDate,
                            onClick: this.sortCreationDate
                        }), r.createElement(N.Gb, {
                            label: Object(o.d)("Last Updated Date (UTC)", "DevDropsItems"),
                            sorting: this.state.sortingUpdatedDate,
                            onClick: this.sortUpdatedDate
                        }), r.createElement(N.Gb, {
                            label: Object(o.d)("Enabled", "DevDropsItems"),
                            sorting: this.state.sortingEnabled,
                            onClick: this.sortEnabled
                        })), r.createElement(N.Db, null, e)))
                    }, t
                }(r.Component),
                ye = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentPage: 1,
                            pageCursors: {},
                            seenAllPages: !1
                        }, t.getItems = function(e, n, r) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, s, i, o;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.state.pageCursors[e]) return this.setState({
                                                currentPage: e
                                            }), [2];
                                            t = _(this.props.company), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, W({
                                                companyId: t,
                                                prevCursor: n,
                                                nextCursor: r
                                            })];
                                        case 2:
                                            return (s = a.sent()) && (i = {
                                                items: s.items,
                                                prevCursor: s.prevCursor,
                                                nextCursor: s.nextCursor
                                            }, (o = this.state.pageCursors)[e] = i, this.setState({
                                                currentPage: e,
                                                pageCursors: o,
                                                seenAllPages: !s.nextCursor
                                            })), [3, 4];
                                        case 3:
                                            return a.sent(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onSort = function(e, n) {
                            var a = t.state.pageCursors[t.state.currentPage].items;
                            switch (e) {
                                case Ce.Name:
                                    a = n === N.wb.Ascending ? a.sort(function(e, t) {
                                        return e.translations[e.defaultLanguage].localeCompare(t.translations[t.defaultLanguage])
                                    }) : a.sort(function(e, t) {
                                        return t.translations[t.defaultLanguage].localeCompare(e.translations[e.defaultLanguage])
                                    });
                                    break;
                                case Ce.Enabled:
                                    a = n === N.wb.Ascending ? a.sort(function(e, t) {
                                        return Number(e.active) - Number(t.active)
                                    }) : a.sort(function(e, t) {
                                        return Number(t.active) - Number(e.active)
                                    });
                                    break;
                                case Ce.CreationDate:
                                    a = n === N.wb.Ascending ? a.sort(function(e, t) {
                                        return e.createdAt.getTime() - t.createdAt.getTime()
                                    }) : a.sort(function(e, t) {
                                        return t.createdAt.getTime() - e.createdAt.getTime()
                                    });
                                    break;
                                case Ce.UpdatedDate:
                                    a = n === N.wb.Ascending ? a.sort(function(e, t) {
                                        return e.updatedAt.getTime() - t.updatedAt.getTime()
                                    }) : a.sort(function(e, t) {
                                        return t.updatedAt.getTime() - e.updatedAt.getTime()
                                    })
                            }
                            var r = t.state.pageCursors;
                            r[t.state.currentPage].items = a, t.setState({
                                pageCursors: r
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.pageCursors[this.state.currentPage];
                        return e ? r.createElement(Ue, {
                            items: e.items,
                            onSort: this.onSort,
                            onClickPagination: this.getItems,
                            prevCursor: e.prevCursor,
                            nextCursor: e.nextCursor,
                            currentPage: this.state.currentPage,
                            maxPages: this.state.seenAllPages ? Object.keys(this.state.pageCursors).length : Object.keys(this.state.pageCursors).length + 1
                        }) : null
                    }, t.prototype.componentDidMount = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.getItems(1)];
                                    case 1:
                                        return e.sent(), this.props.latencyTracking.reportInteractive(), [2]
                                }
                            })
                        })
                    }, t
                }(r.Component),
                Fe = Object(l.compose)(Object(h.b)("DevDropsItemsPage", {
                    destination: E.a.DevSiteDropsItems
                }), Object(p.a)({
                    location: m.PageviewLocation.DevSiteDropsItems
                }), Object(u.a)())(ye),
                Me = n("mLw1");
            (Pe || (Pe = {})).SubmitButton = "dev-drops-settings-submit";
            var we = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            clientId: t.props.currentSettings.clientId,
                            endpoint: t.props.currentSettings.endpoint,
                            isSubmitting: !1,
                            sendReport: t.props.currentSettings.sendReport,
                            submitSuccess: t.props.submitSuccess
                        }, t.setClientId = function(e) {
                            t.setState({
                                clientId: e.target.value,
                                submitSuccess: !1
                            })
                        }, t.setEndpoint = function(e) {
                            t.setState({
                                endpoint: e.target.value,
                                submitSuccess: !1
                            })
                        }, t.setReport = function(e) {
                            t.setState({
                                sendReport: e.target.checked,
                                submitSuccess: !1
                            })
                        }, t.saveChanges = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return e.preventDefault(), t = {
                                                sendReport: this.state.sendReport,
                                                endpoint: this.state.endpoint,
                                                clientId: this.state.clientId
                                            }, this.setState({
                                                isSubmitting: !0
                                            }), [4, this.props.onUpdate(t)];
                                        case 1:
                                            return n.sent(), this.setState({
                                                isSubmitting: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t.renderSubmitButton = function() {
                            var e = N.E.Default;
                            return t.state.isSubmitting ? e = N.E.Loading : t.state.submitSuccess && (e = N.E.Success), r.createElement(N.z, {
                                "data-test-selector": Pe.SubmitButton,
                                disabled: t.state.submitSuccess,
                                onClick: t.saveChanges,
                                state: e
                            }, Object(o.d)("Submit", "DevDropsSettings"))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = !1;
                        this.state.clientId !== e.currentSettings.clientId && (this.setState({
                            clientId: e.currentSettings.clientId
                        }), t = !0), this.state.endpoint !== e.currentSettings.endpoint && (this.setState({
                            endpoint: e.currentSettings.endpoint
                        }), t = !0), this.state.sendReport !== e.currentSettings.sendReport && (this.setState({
                            sendReport: e.currentSettings.sendReport
                        }), t = !0), this.state.submitSuccess !== e.submitSuccess && this.setState({
                            submitSuccess: e.submitSuccess
                        }), t && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.renderSubmitButton();
                        return r.createElement(N.Xa, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(N.Pa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Between,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement("header", null, r.createElement(N.Xa, null, r.createElement(N.W, {
                            type: N.Pb.H2
                        }, Object(o.d)("VHS Configuration for Drops", "DevDropsSettings"))), r.createElement(N.z, {
                            targetBlank: !0,
                            linkTo: "https://dev.twitch.tv/docs/drops",
                            type: N.F.Hollow
                        }, Object(o.d)("Need Help?", "DevDropsSettings")))), r.createElement(N.Ja, null, r.createElement(N.P, {
                            cols: {
                                default: 12,
                                md: 8,
                                lg: 5
                            }
                        }, r.createElement(N.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(N.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(N.Ea, {
                            label: Object(o.d)("Client ID", "DevDropsSettings")
                        }, r.createElement(N.Ra, {
                            type: N.Ta.Text,
                            value: this.state.clientId,
                            onChange: this.setClientId
                        }))), r.createElement(N.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(N.Ea, {
                            label: Object(o.d)("Endpoint", "DevDropsSettings")
                        }, r.createElement(N.Ra, {
                            type: N.Ta.Text,
                            value: this.state.endpoint,
                            onChange: this.setEndpoint
                        }))), r.createElement(N.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(N.N, {
                            label: Object(o.d)("Send periodic VHS reports to Endpoint (uncheck to stop getting reports)", "DevDropsSettings"),
                            checked: this.state.sendReport,
                            onChange: this.setReport
                        }))), e)))
                    }, t
                }(r.Component),
                je = Object(l.compose)(Object(h.b)("DevDropsSettingsComponent"))(we),
                ke = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            settings: {
                                sendReport: !1,
                                clientId: "",
                                endpoint: ""
                            },
                            submitSuccess: !1
                        }, t.onUpdate = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, Object(D.a)(f.a.PutService)];
                                        case 1:
                                            if (!(t = a.sent())) return [3, 5];
                                            a.label = 2;
                                        case 2:
                                            return a.trys.push([2, 4, , 5]), n = _(this.props.company), r = d.a + "/kraken/service/" + n, s = {
                                                client_id: e.clientId,
                                                enabled: e.sendReport,
                                                endpoint: e.endpoint,
                                                readable_name: this.props.company.companyName,
                                                sign_request: !1
                                            }, [4, Object(g.a)(r, {
                                                body: JSON.stringify(s),
                                                method: "PUT",
                                                headers: {
                                                    "X-Twitch-VHSCF": t
                                                }
                                            })];
                                        case 3:
                                            return 204 === a.sent().status && this.setState({
                                                submitSuccess: !0,
                                                settings: e
                                            }), [3, 5];
                                        case 4:
                                            return a.sent(), [2];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.loadSettings = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, s, i;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, Object(D.a)(f.a.GetService)];
                                        case 1:
                                            if (!(e = a.sent())) return [3, 7];
                                            a.label = 2;
                                        case 2:
                                            return a.trys.push([2, 6, , 7]), t = _(this.props.company), n = d.a + "/kraken/service/" + t, [4, Object(g.a)(n, {
                                                headers: {
                                                    "X-Twitch-VHSCF": e
                                                }
                                            })];
                                        case 3:
                                            return 200 !== (r = a.sent()).status ? [3, 5] : [4, r.json()];
                                        case 4:
                                            s = a.sent(), i = {
                                                clientId: s.client_id,
                                                endpoint: s.endpoint,
                                                sendReport: s.enabled
                                            }, this.setState({
                                                settings: i
                                            }), a.label = 5;
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return a.sent(), [2];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.loadSettings()
                    }, t.prototype.render = function() {
                        return this.props.company ? r.createElement(je, {
                            onUpdate: this.onUpdate,
                            currentSettings: this.state.settings,
                            submitSuccess: this.state.submitSuccess
                        }) : r.createElement(Me.a, {
                            to: "/request-access"
                        })
                    }, t
                }(r.Component),
                Ge = Object(l.compose)(Object(h.b)("DevDropsSettingsPage", {
                    autoReportInteractive: !0,
                    destination: E.a.DevSiteDropsSettings
                }), Object(p.a)({
                    location: m.PageviewLocation.DevSiteDropsSettings
                }), Object(u.a)())(ke),
                Ve = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = "/console/drops/items";
                        return r.createElement(N.Xa, null, r.createElement(N.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(N.Bb, null, r.createElement(s.a, {
                            path: "/console/drops",
                            exact: !0
                        }, function(e) {
                            var t = e.match;
                            return r.createElement(N.Ab, {
                                linkTo: "/console/drops",
                                active: Boolean(t)
                            }, Object(o.d)("Campaign Manager", "DevDropsDashboardRoot"))
                        }), r.createElement(s.a, {
                            path: e,
                            exact: !0
                        }, function(t) {
                            var n = t.match;
                            return r.createElement(N.Ab, {
                                linkTo: e,
                                active: Boolean(n)
                            }, Object(o.d)("Item Manager", "DevDropsDashboardRoot"))
                        }), r.createElement(s.a, {
                            path: "/console/drops/settings",
                            exact: !0
                        }, function(e) {
                            var t = e.match;
                            return r.createElement(N.Ab, {
                                onClick: Object(c.c)(c.a.ConfigureDropsSettings),
                                linkTo: "/console/drops/settings",
                                active: Boolean(t)
                            }, Object(o.d)("Settings", "DevDropsDashboardRoot"))
                        }))), r.createElement(i.a, null, r.createElement(s.a, {
                            exact: !0,
                            path: "/console/drops",
                            component: U
                        }), r.createElement(s.a, {
                            exact: !0,
                            path: e,
                            component: Fe
                        }), r.createElement(s.a, {
                            exact: !0,
                            path: "/console/drops/settings",
                            component: Ge
                        }), r.createElement(s.a, {
                            exact: !0,
                            path: "/console/drops/items/create",
                            component: Se
                        }), r.createElement(s.a, {
                            exact: !0,
                            path: "/console/drops/items/:itemId",
                            component: ve
                        }), r.createElement(s.a, {
                            exact: !0,
                            path: "/console/drops/create",
                            component: _e
                        }), r.createElement(s.a, {
                            exact: !0,
                            path: "/console/drops/:campaignId",
                            component: Ae
                        })))
                    }, t
                }(r.Component),
                Be = Object(u.a)()(Ve);
            n.d(t, "DevDropsDashboardRoot", function() {
                return Be
            })
        },
        QKmf: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CreateDropImageUploadURL"
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
                                    value: "CreateDropImageUploadURLInput"
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
                                value: "createDropImageUploadURL"
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
                                        value: "uploadID"
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
                                        value: "error"
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
                    end: 140
                }
            };
            n.loc.source = {
                body: "mutation CreateDropImageUploadURL($input: CreateDropImageUploadURLInput!) {\ncreateDropImageUploadURL(input: $input) {\nuploadID\nurl\nerror\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        RnhZ: function(e, t, n) {
            var a = {
                "./af": "K/tc",
                "./af.js": "K/tc",
                "./ar": "jnO4",
                "./ar-dz": "o1bE",
                "./ar-dz.js": "o1bE",
                "./ar-kw": "Qj4J",
                "./ar-kw.js": "Qj4J",
                "./ar-ly": "HP3h",
                "./ar-ly.js": "HP3h",
                "./ar-ma": "CoRJ",
                "./ar-ma.js": "CoRJ",
                "./ar-sa": "gjCT",
                "./ar-sa.js": "gjCT",
                "./ar-tn": "bYM6",
                "./ar-tn.js": "bYM6",
                "./ar.js": "jnO4",
                "./az": "SFxW",
                "./az.js": "SFxW",
                "./be": "H8ED",
                "./be.js": "H8ED",
                "./bg": "hKrs",
                "./bg.js": "hKrs",
                "./bn": "kEOa",
                "./bn.js": "kEOa",
                "./bo": "0mo+",
                "./bo.js": "0mo+",
                "./br": "aIdf",
                "./br.js": "aIdf",
                "./bs": "JVSJ",
                "./bs.js": "JVSJ",
                "./ca": "1xZ4",
                "./ca.js": "1xZ4",
                "./cs": "PA2r",
                "./cs.js": "PA2r",
                "./cv": "A+xa",
                "./cv.js": "A+xa",
                "./cy": "l5ep",
                "./cy.js": "l5ep",
                "./da": "DxQv",
                "./da.js": "DxQv",
                "./de": "tGlX",
                "./de-at": "s+uk",
                "./de-at.js": "s+uk",
                "./de-ch": "u3GI",
                "./de-ch.js": "u3GI",
                "./de.js": "tGlX",
                "./dv": "WYrj",
                "./dv.js": "WYrj",
                "./el": "jUeY",
                "./el.js": "jUeY",
                "./en-au": "Dmvi",
                "./en-au.js": "Dmvi",
                "./en-ca": "OIYi",
                "./en-ca.js": "OIYi",
                "./en-gb": "Oaa7",
                "./en-gb.js": "Oaa7",
                "./en-ie": "4dOw",
                "./en-ie.js": "4dOw",
                "./en-nz": "b1Dy",
                "./en-nz.js": "b1Dy",
                "./eo": "Zduo",
                "./eo.js": "Zduo",
                "./es": "iYuL",
                "./es-do": "CjzT",
                "./es-do.js": "CjzT",
                "./es.js": "iYuL",
                "./et": "7BjC",
                "./et.js": "7BjC",
                "./eu": "D/JM",
                "./eu.js": "D/JM",
                "./fa": "jfSC",
                "./fa.js": "jfSC",
                "./fi": "gekB",
                "./fi.js": "gekB",
                "./fo": "ByF4",
                "./fo.js": "ByF4",
                "./fr": "nyYc",
                "./fr-ca": "2fjn",
                "./fr-ca.js": "2fjn",
                "./fr-ch": "Dkky",
                "./fr-ch.js": "Dkky",
                "./fr.js": "nyYc",
                "./fy": "cRix",
                "./fy.js": "cRix",
                "./gd": "9rRi",
                "./gd.js": "9rRi",
                "./gl": "iEDd",
                "./gl.js": "iEDd",
                "./gom-latn": "DKr+",
                "./gom-latn.js": "DKr+",
                "./he": "x6pH",
                "./he.js": "x6pH",
                "./hi": "3E1r",
                "./hi.js": "3E1r",
                "./hr": "S6ln",
                "./hr.js": "S6ln",
                "./hu": "WxRl",
                "./hu.js": "WxRl",
                "./hy-am": "1rYy",
                "./hy-am.js": "1rYy",
                "./id": "UDhR",
                "./id.js": "UDhR",
                "./is": "BVg3",
                "./is.js": "BVg3",
                "./it": "bpih",
                "./it.js": "bpih",
                "./ja": "B55N",
                "./ja.js": "B55N",
                "./jv": "tUCv",
                "./jv.js": "tUCv",
                "./ka": "IBtZ",
                "./ka.js": "IBtZ",
                "./kk": "bXm7",
                "./kk.js": "bXm7",
                "./km": "6B0Y",
                "./km.js": "6B0Y",
                "./kn": "PpIw",
                "./kn.js": "PpIw",
                "./ko": "Ivi+",
                "./ko.js": "Ivi+",
                "./ky": "lgnt",
                "./ky.js": "lgnt",
                "./lb": "RAwQ",
                "./lb.js": "RAwQ",
                "./lo": "sp3z",
                "./lo.js": "sp3z",
                "./lt": "JvlW",
                "./lt.js": "JvlW",
                "./lv": "uXwI",
                "./lv.js": "uXwI",
                "./me": "KTz0",
                "./me.js": "KTz0",
                "./mi": "aIsn",
                "./mi.js": "aIsn",
                "./mk": "aQkU",
                "./mk.js": "aQkU",
                "./ml": "AvvY",
                "./ml.js": "AvvY",
                "./mr": "Ob0Z",
                "./mr.js": "Ob0Z",
                "./ms": "6+QB",
                "./ms-my": "ZAMP",
                "./ms-my.js": "ZAMP",
                "./ms.js": "6+QB",
                "./my": "honF",
                "./my.js": "honF",
                "./nb": "bOMt",
                "./nb.js": "bOMt",
                "./ne": "OjkT",
                "./ne.js": "OjkT",
                "./nl": "+s0g",
                "./nl-be": "2ykv",
                "./nl-be.js": "2ykv",
                "./nl.js": "+s0g",
                "./nn": "uEye",
                "./nn.js": "uEye",
                "./pa-in": "8/+R",
                "./pa-in.js": "8/+R",
                "./pl": "jVdC",
                "./pl.js": "jVdC",
                "./pt": "8mBD",
                "./pt-br": "0tRk",
                "./pt-br.js": "0tRk",
                "./pt.js": "8mBD",
                "./ro": "lyxo",
                "./ro.js": "lyxo",
                "./ru": "lXzo",
                "./ru.js": "lXzo",
                "./sd": "Z4QM",
                "./sd.js": "Z4QM",
                "./se": "//9w",
                "./se.js": "//9w",
                "./si": "7aV9",
                "./si.js": "7aV9",
                "./sk": "e+ae",
                "./sk.js": "e+ae",
                "./sl": "gVVK",
                "./sl.js": "gVVK",
                "./sq": "yPMs",
                "./sq.js": "yPMs",
                "./sr": "zx6S",
                "./sr-cyrl": "E+lV",
                "./sr-cyrl.js": "E+lV",
                "./sr.js": "zx6S",
                "./ss": "Ur1D",
                "./ss.js": "Ur1D",
                "./sv": "X709",
                "./sv.js": "X709",
                "./sw": "dNwA",
                "./sw.js": "dNwA",
                "./ta": "PeUW",
                "./ta.js": "PeUW",
                "./te": "XLvN",
                "./te.js": "XLvN",
                "./tet": "V2x9",
                "./tet.js": "V2x9",
                "./th": "EOgW",
                "./th.js": "EOgW",
                "./tl-ph": "Dzi0",
                "./tl-ph.js": "Dzi0",
                "./tlh": "z3Vd",
                "./tlh.js": "z3Vd",
                "./tr": "DoHr",
                "./tr.js": "DoHr",
                "./tzl": "z1FC",
                "./tzl.js": "z1FC",
                "./tzm": "wQk9",
                "./tzm-latn": "tT3J",
                "./tzm-latn.js": "tT3J",
                "./tzm.js": "wQk9",
                "./uk": "raLr",
                "./uk.js": "raLr",
                "./ur": "UpQW",
                "./ur.js": "UpQW",
                "./uz": "Loxo",
                "./uz-latn": "AQ68",
                "./uz-latn.js": "AQ68",
                "./uz.js": "Loxo",
                "./vi": "KSF8",
                "./vi.js": "KSF8",
                "./x-pseudo": "/X5v",
                "./x-pseudo.js": "/X5v",
                "./yo": "fzPg",
                "./yo.js": "fzPg",
                "./zh-cn": "XDpg",
                "./zh-cn.js": "XDpg",
                "./zh-hk": "SatO",
                "./zh-hk.js": "SatO",
                "./zh-tw": "kOpN",
                "./zh-tw.js": "kOpN"
            };

            function r(e) {
                var t = s(e);
                return n(t)
            }

            function s(e) {
                var t = a[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            r.keys = function() {
                return Object.keys(a)
            }, r.resolve = s, e.exports = r, r.id = "RnhZ"
        },
        TofP: function(e, t, n) {},
        "V+GM": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("cr+I"),
                s = n("q1tI"),
                i = n("wIs1"),
                o = n("/7QA");

            function c(e) {
                return function(t) {
                    var n = function(n) {
                        function i(t) {
                            var r = n.call(this, t) || this;
                            return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                                if (!(r.tracked || e.skip && e.skip(r.props))) {
                                    r.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = a.__assign({}, e.properties));
                                    var n = a.__assign({}, r.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var s = r.referenceTracking,
                                        i = s.content,
                                        c = s.medium,
                                        u = s.content_index,
                                        l = s.email_id;
                                    o.p.tracking.trackPageview(a.__assign({
                                        content: i,
                                        medium: c,
                                        content_index: u,
                                        email_id: l,
                                        location: e.location
                                    }, t))
                                }
                            }, o.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                        }
                        return a.__extends(i, n), i.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, i.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, i.prototype.render = function() {
                            return s.createElement(t, a.__assign({}, this.props))
                        }, i.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? r.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var a = "",
                                    s = r.stringify(t);
                                s.length > 0 && (a = "?" + s), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: a
                                })
                            }
                            return n
                        }, i
                    }(s.Component);
                    return Object(i.a)(n)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        VSaV: function(e, t) {},
        WHSC: function(e, t, n) {},
        WM9t: function(e, t, n) {},
        WQCf: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return c
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "f", function() {
                return r
            }), n.d(t, "e", function() {
                return o
            });
            var a, r, s, i, o, c = {
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
                u = {
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
                l = {
                    Accepted: "accepted",
                    Requested: "requested",
                    Removed: "removed",
                    SelfAccepted: "self_accepted",
                    SelfRemoved: "self_removed",
                    SelfRequested: "self_requested"
                };
            ! function(e) {
                e.AddBlockedTerm = "add_blocked_term", e.AddPermittedTerm = "add_permitted_term", e.AutoModEnabled = "automod_enabled", e.AutoModRejected = "automod_rejected", e.DeniedAutoModMessage = "denied_automod_message", e.ApprovedAutoModMessage = "approved_automod_message", e.AutoModCheerRejected = "automod_cheer_rejected", e.Ban = "ban", e.Clear = "clear", e.Delete = "delete", e.DeleteBlockedTerm = "delete_blocked_term", e.DeletePermittedTerm = "delete_permitted_term", e.EmoteOnly = "emoteonly", e.EmoteOnlyOff = "emoteonlyoff", e.FollowersOnly = "followers", e.FollowersOnlyOff = "followersoff", e.Host = "host", e.Mod = "mod", e.ModifiedAutoModProperties = "modified_automod_properties", e.R9kBeta = "r9kbeta", e.R9kBetaOff = "r9kbetaoff", e.Raid = "raid", e.Slow = "slow", e.SlowOff = "slowoff", e.SubsBeta = "subsbeta", e.SubscribersOnly = "subscribers", e.SubscribersOnlyOff = "subscribersoff", e.Timeout = "timeout", e.Unban = "unban", e.Unhost = "unhost", e.Unmod = "unmod", e.Unraid = "unraid", e.Untimeout = "untimeout"
            }(a || (a = {})),
            function(e) {
                e.AutoModMessageRejected = "automod_message_rejected", e.AutoModMessageApproved = "automod_message_approved", e.AutoModMessageDenied = "automod_message_denied", e.AutoModCheerDenied = "automod_cheer_message_denied", e.AutoModCheerTimeout = "automod_cheer_message_timeout"
            }(r || (r = {})),
            function(e) {
                e.Archive = "archive", e.Highlight = "highlight", e.Upload = "upload", e.Premiere = "premiere", e.Rerun = "rerun", e.WatchPartyPremiere = "watch_party_premiere", e.WatchPartyRerun = "watch_party_rerun"
            }(s || (s = {})),
            function(e) {
                e.Private = "private", e.Public = "public"
            }(i || (i = {})),
            function(e) {
                e.Pending = "PENDING", e.Live = "LIVE", e.Ended = "ENDED"
            }(o || (o = {}))
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
        aDUZ: function(e, t, n) {},
        ev0B: function(e, t, n) {},
        fy8Z: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.GetCampaignsByCompany = "get_campaigns_by_account", e.GetCampaignById = "get_campaign_by_id", e.PostCampaign = "post_campaign", e.PutCampaign = "put_campaign", e.GetService = "get_service", e.PutService = "put_service", e.PostCampaignImageUrl = "post_campaign_image_url", e.PostItemImageUrl = "post_item_image_url", e.GetItemsByCompany = "get_all_items", e.GetItemByID = "get_item", e.CreateItem = "create_item", e.UpdateItem = "update_item"
                }(a || (a = {}))
        },
        sL9O: function(e, t, n) {},
        tl6o: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return s
            });
            var a = "d3b9f0d8-68e2-4557-8f73-dd0ea151eef3",
                r = 20,
                s = "https://gds-vhs-drops-campaign-images.twitch.tv"
        },
        uLRL: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("/MKj"),
                i = n("mLw1"),
                o = n("2Ygb"),
                c = n("dEJ+"),
                u = n("Ue10");

            function l() {
                return function(e) {
                    var t = function(t) {
                        function n() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return a.__extends(n, t), n.prototype.render = function() {
                            if (this.props.loaded && this.props.company) {
                                var t = {
                                    company: this.props.company
                                };
                                return r.createElement(e, a.__assign({}, this.props, t))
                            }
                            return this.props.loaded && !this.props.company ? r.createElement(i.a, {
                                to: "/request-access"
                            }) : r.createElement(u.Za, null)
                        }, n.displayName = Object(o.a)(n.name, e), n
                    }(r.Component);
                    return Object(s.connect)(function(e) {
                        return {
                            loaded: Object(c.b)(e),
                            company: Object(c.c)(e)
                        }
                    })(t)
                }
            }
        },
        "vR4/": function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "b", function() {
                    return a
                }), n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
                }(a || (a = {})),
                function(e) {
                    e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
                }(r || (r = {}))
        },
        xYlS: function(e, t, n) {},
        yLwq: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return s
            });
            var a = [{
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

            function s(e, t) {
                var n = parseInt(e, 10) % a.length;
                return r(a[n], t)
            }
        }
    }
]);