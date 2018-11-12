(window.webpackJsonp = window.webpackJsonp || []).push([
    [94], {
        "/HY+": function(e, t, n) {
            "use strict";
            var r = n("dAHa"),
                o = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                c = n("aCAx"),
                u = n("GnwI"),
                d = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(d.Eb, {
                            className: "reporting-modal__container",
                            background: d.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, i.createElement(r.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), i.createElement(l.a, null))
                    }, t
                }(i.Component));
            var E = Object(s.compose)(Object(u.b)("ReportUserModal"), Object(a.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: c.c
                }, e)
            }))(p);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.c
            }), n.d(t, !1, function() {
                return r.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.b
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return E
            })
        },
        "/aPz": function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return a
            }), n.d(t, "h", function() {
                return s
            }), n.d(t, "i", function() {
                return l
            }), n.d(t, "j", function() {
                return c
            }), n.d(t, "J", function() {
                return u
            }), n.d(t, "K", function() {
                return d
            }), n.d(t, "n", function() {
                return p
            }), n.d(t, "C", function() {
                return E
            }), n.d(t, "I", function() {
                return m
            }), n.d(t, "s", function() {
                return f
            }), n.d(t, "t", function() {
                return h
            }), n.d(t, "o", function() {
                return g
            }), n.d(t, "v", function() {
                return _
            }), n.d(t, "x", function() {
                return T
            }), n.d(t, "l", function() {
                return R
            }), n.d(t, "d", function() {
                return I
            }), n.d(t, "c", function() {
                return v
            }), n.d(t, "D", function() {
                return b
            }), n.d(t, "b", function() {
                return O
            }), n.d(t, "a", function() {
                return C
            }), n.d(t, "G", function() {
                return y
            }), n.d(t, "H", function() {
                return S
            }), n.d(t, "m", function() {
                return A
            }), n.d(t, "E", function() {
                return N
            }), n.d(t, "F", function() {
                return D
            }), n.d(t, "L", function() {
                return P
            }), n.d(t, "r", function() {
                return L
            }), n.d(t, "y", function() {
                return M
            }), n.d(t, "f", function() {
                return U
            }), n.d(t, "g", function() {
                return k
            }), n.d(t, "z", function() {
                return x
            }), n.d(t, "k", function() {
                return w
            }), n.d(t, "q", function() {
                return B
            }), n.d(t, "w", function() {
                return F
            }), n.d(t, "u", function() {
                return V
            }), n.d(t, "p", function() {
                return W
            }), n.d(t, "B", function() {
                return j
            }), n.d(t, "A", function() {
                return G
            });
            var r = n("/7QA"),
                o = n("0Log"),
                i = n("geRD");

            function a(e) {
                return o.PubsubTopic.BroadcastSettingsUpdate + "." + e
            }

            function s(e) {
                return o.PubsubTopic.ChatRoom + "." + e
            }

            function l(e) {
                return o.PubsubTopic.ChatRoomsChannel + "." + e
            }

            function c(e) {
                return o.PubsubTopic.ChatRoomsUser + "." + e
            }

            function u(e) {
                return o.PubsubTopic.VideoPlayback + "." + e
            }

            function d(e) {
                return o.PubsubTopic.VideoThumbnailProcessing + "." + e
            }

            function p(e) {
                return o.PubsubTopic.ImageUpload + "." + e
            }

            function E(e) {
                return o.PubsubTopic.UploadService + "." + e
            }

            function m(e) {
                return o.PubsubTopic.VideoPlaybackById + "." + e
            }

            function f(e) {
                return o.PubsubTopic.PayoutOnboardingEvents + "." + e
            }

            function h(e) {
                return o.PubsubTopic.Presence + "." + e
            }

            function g(e, t) {
                return o.PubsubTopic.ModerationActionsByUserAndChannel + "." + e + "." + t
            }

            function _(e) {
                return o.PubsubTopic.Raid + "." + e
            }

            function T(e) {
                return o.PubsubTopic.StreamChange + "." + e
            }

            function R(e) {
                return o.PubsubTopic.Friendship + "." + e
            }

            function I(e) {
                return o.PubsubTopic.ChannelBitsPinEvents + "." + e
            }

            function v(e) {
                return o.PubsubTopic.BitsLeaderboardEvents + "." + e.id
            }

            function b(e) {
                return o.PubsubTopic.UserBitsUpdates + "." + e
            }

            function O() {
                return o.PubsubTopic.BitsCampaignEvents + ".updates"
            }

            function C(e) {
                return o.PubsubTopic.ChannelBitsPinEvents + "." + e
            }

            function y(e) {
                return o.PubsubTopic.UserPropertiesUpdates + "." + e
            }

            function S(e) {
                return o.PubsubTopic.UserSubscribeEvents + "." + e
            }

            function A(e) {
                return o.PubsubTopic.CampaignGlobalEvents + "." + e
            }

            function N(e) {
                return o.PubsubTopic.CampaignUserEvents + "." + e
            }

            function D(e) {
                return o.PubsubTopic.UserCommerceEvents + "." + e
            }

            function P(e) {
                return o.PubsubTopic.Whispers + "." + e
            }

            function L(e) {
                return o.PubsubTopic.OnsiteNotifications + "." + e
            }

            function M(e) {
                return o.PubsubTopic.StreamChatRoom + "." + e
            }

            function U(e) {
                return o.PubsubTopic.ChannelEventUpdates + "." + e
            }

            function k(e) {
                return o.PubsubTopic.ChannelSquadUpdates + "." + e
            }

            function x(e) {
                return o.PubsubTopic.SubscribersCSV + "." + e
            }

            function w(e) {
                return o.PubsubTopic.CheerbombEventsTopic + "." + e
            }

            function B(e) {
                return o.PubsubTopic.MysteryGift + "." + e
            }

            function F(e) {
                return o.PubsubTopic.SquadUpdates + "." + e
            }

            function V(e) {
                return o.PubsubTopic.PurchaseFulfillmentEvents + "." + e
            }

            function W(e) {
                return o.PubsubTopic.MultiviewChanletUpdate + "." + e
            }

            function j(e) {
                return r.l.subscribe({
                    topic: e.topic,
                    onMessage: function(t) {
                        t.type && !e.type && !e.types || t.type && e.type && t.type !== e.type || t.type && e.types && !e.types.includes(t.type) || Object(i.e)(e.query, e.variables, function(n) {
                            return e.mutator(t, n)
                        }, function(n) {
                            return !!e.skipMessage && e.skipMessage(t, n)
                        })
                    }
                })
            }

            function G(e) {
                return r.l.subscribe({
                    topic: e.topic,
                    onMessage: function(t) {
                        t.type && t.type !== e.type || Object(i.d)({
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
        "0HeA": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r, o, i = n("/7QA"),
                a = n("DMoW");
            ! function(e) {
                e.Default = "default", e.Extension = "extension"
            }(o || (o = {}));
            var s = ((r = {})[a.D.DEFAULT] = o.Default, r[a.D.EXTENSION] = o.Extension, r);

            function l(e, t) {
                i.o.track(e, {
                    panel_id: t.panelID,
                    panel_type: s[t.panelType],
                    channel_id: t.channelID,
                    panel_target: t.panelTarget || null
                })
            }
        },
        "0Log": function(e, t, n) {
            "use strict";
            var r = n("VSaV");
            n.o(r, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
                return r.FrienshipChangeType
            }), n.o(r, "ModerationActions") && n.d(t, "ModerationActions", function() {
                return r.ModerationActions
            }), n.o(r, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
                return r.PubsubMessageType
            }), n.o(r, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
                return r.PubsubTopic
            }), n.o(r, "PurchaseFulfillmentStatus") && n.d(t, "PurchaseFulfillmentStatus", function() {
                return r.PurchaseFulfillmentStatus
            }), n.o(r, "SquadStatus") && n.d(t, "SquadStatus", function() {
                return r.SquadStatus
            }), n.o(r, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
                return r.TargetedModerationActions
            });
            var o = n("By5U");
            n.o(o, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
                return o.FrienshipChangeType
            }), n.o(o, "ModerationActions") && n.d(t, "ModerationActions", function() {
                return o.ModerationActions
            }), n.o(o, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
                return o.PubsubMessageType
            }), n.o(o, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
                return o.PubsubTopic
            }), n.o(o, "PurchaseFulfillmentStatus") && n.d(t, "PurchaseFulfillmentStatus", function() {
                return o.PurchaseFulfillmentStatus
            }), n.o(o, "SquadStatus") && n.d(t, "SquadStatus", function() {
                return o.SquadStatus
            }), n.o(o, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
                return o.TargetedModerationActions
            });
            var i = n("WQCf");
            n.d(t, "FrienshipChangeType", function() {
                return i.a
            }), n.d(t, "ModerationActions", function() {
                return i.b
            }), n.d(t, "PubsubMessageType", function() {
                return i.c
            }), n.d(t, "PubsubTopic", function() {
                return i.d
            }), n.d(t, "PurchaseFulfillmentStatus", function() {
                return i.e
            }), n.d(t, "SquadStatus", function() {
                return i.f
            }), n.d(t, "TargetedModerationActions", function() {
                return i.g
            })
        },
        "0bws": function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                o = n("mrSG"),
                i = n("1hWM"),
                a = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.updateContext({}, t), n
                    }
                    return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.updateContext(this.props, e)
                    }, t.prototype.shouldComponentUpdate = function() {
                        return !1
                    }, t.prototype.render = function() {
                        return null
                    }, t.prototype.updateContext = function(e, t) {
                        var n = {};
                        t.theme !== e.theme && (n.theme = t.theme), t.game !== e.game && (n.game = t.game), t.hostingInfo !== e.hostingInfo && (n.hostingInfo = t.hostingInfo), Object.keys(n).length > 0 && i.extensionService.postContext(n)
                    }, t
                }(n("q1tI").Component);

            function s(e) {
                return {
                    theme: e.ui.theme
                }
            }
            var l = Object(r.connect)(s)(a);
            n.d(t, !1, function() {
                return s
            }), n.d(t, "a", function() {
                return l
            })
        },
        "0hI/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUserData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetUserID"
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
                                value: "targetUser"
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
                                        value: "targetUserID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "lookupType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "ALL"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "blockedUsers"
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
                    end: 176
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "0iXB": function(e, t, n) {},
        "1+HG": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PopoutExtension_UserQuery"
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
                                        value: "login"
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
                    end: 110
                }
            };
            n.loc.source = {
                body: "query PopoutExtension_UserQuery($login: String!) {\ncurrentUser {\nid\nlogin\n}\nuser(login: $login) {\nid\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "22qk": function(e, t, n) {
            "use strict";

            function r(e, t) {
                return "/ext/" + d(e, t)
            }

            function o(e, t, n) {
                return {
                    pathname: "" + a(e),
                    search: "?configure=true&extensionID=" + d(t, n)
                }
            }

            function i(e) {
                return "/" + e + "/dashboard/extensions"
            }

            function a(e) {
                return "/" + e + "/dashboard/extensions/manage"
            }

            function s(e) {
                return "/" + e + "/dashboard/extensions/whitelisted"
            }

            function l(e, t) {
                return {
                    pathname: "/" + e + "/dashboard/extensions/permissions",
                    state: t
                }
            }

            function c(e) {
                return "/ext/categories/" + e
            }

            function u(e) {
                return "/ext/search?q=" + encodeURIComponent(e)
            }

            function d(e, t) {
                return t ? e + "-" + t : e
            }
            n.d(t, "d", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "h", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "g", function() {
                return u
            })
        },
        "3CMh": function(e, t, n) {
            "use strict";
            var r, o = n("TSYQ"),
                i = n("q1tI"),
                a = n("/7QA"),
                s = n("XmgI"),
                l = n("4h+t"),
                c = n("x1M1"),
                u = n("Ue10");
            n("0iXB");
            ! function(e) {
                e[e.Large = 4] = "Large", e[e.Medium = 3] = "Medium", e[e.Small = 2] = "Small", e[e.ExtraSmall = 1.5] = "ExtraSmall", e[e.ExtremelySmall = 1] = "ExtremelySmall"
            }(r || (r = {}));
            var d = function(e) {
                var t = e.bitsConfig && e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
                t || (t = Object(l.b)());
                var n = t.orderedTiers.find(function(t) {
                    return t.bits <= (e.amount || 100)
                });
                n || (n = t.orderedTiers[0]);
                var d = e.display === u.X.Inline || e.display === u.X.InlineFlex || e.display === u.X.InlineBlock,
                    p = null,
                    E = o("cheermote-for-amount__cheer-amount", {
                        "cheermote-for-amount__display--table-cell": !d
                    }, {
                        "cheermote-for-amount__cheer-amount--medium": e.size === r.Medium
                    }, {
                        "cheermote-for-amount__cheer-amount--small": e.size === r.Small || e.size === r.ExtraSmall
                    }, {
                        "cheermote-for-amount__cheer-amount--extremely-small": e.size === r.ExtremelySmall
                    });
                if (void 0 !== e.amount && e.showAmount) {
                    var m = e.formattedNumber ? Object(a.f)(e.amount) : e.amount;
                    p = i.createElement(u.Pa, {
                        padding: e.size === r.Small ? 0 : void 0,
                        textAlign: e.size === r.Small ? u.Rb.Center : void 0
                    }, i.createElement("strong", {
                        className: E,
                        style: {
                            color: n.color
                        }
                    }, m))
                }
                var f = o("cheermote-for-amount__cheer-image", {
                        "cheermote-for-amount__display--table-cell": !d
                    }, {
                        "cheermote-for-amount__cheer--inline": d
                    }, {
                        "cheermote-for-amount__cheer-image--small": e.size === r.Small
                    }, {
                        "cheermote-for-amount__cheer-image--extra-small": e.size === r.ExtraSmall
                    }, {
                        "cheermote-for-amount__cheer-image--extremely-small": e.size === r.ExtremelySmall
                    }),
                    h = i.createElement(c.a, {
                        className: f,
                        sources: Object(s.d)(n, e.size || r.Large, e.animated)
                    });
                return e.showImage || (h = null), i.createElement(u.Pa, {
                    className: "cheermote-for-amount",
                    alignItems: e.alignItems,
                    display: e.display
                }, i.createElement("span", null, h, p))
            };
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return d
            })
        },
        "4h+t": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            });
            var r = n("uYEN"),
                o = n("5zXJ"),
                i = {
                    Cheer: o.g,
                    Kreygasm: o.g,
                    Kappa: o.g,
                    Muxy: o.h,
                    Streamlabs: o.h,
                    SwiftRage: o.g,
                    VoHiYo: o.g
                },
                a = ["LIGHT", "DARK"],
                s = [1, 1.5, 2, 3, 4],
                l = null;

            function c() {
                if (!l) {
                    var e = [],
                        t = {};
                    Object.keys(i).forEach(function(n) {
                        var r = p(n, i[n]);
                        e.push(r), t[n.toLowerCase()] = r
                    }), l = {
                        orderedActions: e,
                        indexedActions: t
                    }
                }
                return l
            }
            var u = null;

            function d() {
                return u || (u = function(e) {
                    if (l) return l.indexedActions[e.toLowerCase()];
                    return p(e, i[e])
                }("Cheer")), u
            }

            function p(e, t) {
                var n = [r.a.Red, r.a.Blue, r.a.Green, r.a.Purple, r.a.Gray],
                    o = new Map,
                    i = [];
                if ("Cheer" === e) {
                    var a = E(e, r.a.Yellow);
                    o.set(r.a.Yellow, a), i.push(a)
                }
                return i.push.apply(i, n.map(function(t) {
                    var n = E(e, t);
                    return o.set(t, n), n
                })), {
                    prefix: e,
                    type: t,
                    tiers: i,
                    orderedTiers: i,
                    indexedTiers: o
                }
            }

            function E(e, t) {
                for (var n = [], r = {}, i = 0, l = a; i < l.length; i++)
                    for (var c = l[i], u = 0, d = s; u < d.length; u++) {
                        var p = d[u];
                        r[c] || (r[c] = {
                            animated: new Map,
                            static: new Map
                        });
                        var E = m(e, c, !0, t, p);
                        n.push(E), r[c].animated.set(p, E.url);
                        var f = m(e, c, !1, t, p);
                        n.push(f), r[c].static.set(p, f.url)
                    }
                return {
                    id: e + ";" + t,
                    canCheer: t <= o.p,
                    canShowInBitsCard: !0,
                    bits: t,
                    color: o.k[t],
                    images: n,
                    indexedImages: r
                }
            }

            function m(e, t, n, r, o) {
                var i = n ? "gif" : "png";
                return {
                    theme: t,
                    isAnimated: n,
                    dpiScale: o,
                    url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + r + "/" + o + "." + i
                }
            }
        },
        "5IFo": function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return a
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return u
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "g", function() {
                return E
            }), n.d(t, "f", function() {
                return m
            });
            var r, o = n("/7QA"),
                i = n("2xye");

            function a(e) {
                var t = {
                    category_id: e.categoryID,
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                o.o.track(i.SpadeEventType.ExtensionInstall, t)
            }

            function s(e) {
                var t = {
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                o.o.track(i.SpadeEventType.ExtensionConfigureView, t)
            }

            function l(e, t) {
                return {
                    action: e,
                    extension_id: t.extensionId,
                    extension_version: t.extensionVersion,
                    extension_anchor: "component",
                    extension_slot: function(e) {
                        if (!e) return null;
                        var t = e.split("-");
                        return t && 3 === t.length ? parseInt(t[2], 10) : null
                    }(t.slotName)
                }
            }

            function c(e) {
                o.o.track(i.SpadeEventType.ExtensionStreamerComponentSettings, l(r.Open, e))
            }

            function u(e) {
                o.o.track(i.SpadeEventType.ExtensionStreamerComponentSettings, l(r.Close, e))
            }

            function d(e) {
                o.o.track(i.SpadeEventType.ExtensionStreamerComponentSettings, l(r.Save, e))
            }

            function p(e) {
                return {
                    extension_id: e.extensionID,
                    extension_version: e.extensionVersion,
                    extension_anchor: e.anchor,
                    extension_mode: e.mode,
                    user_id: e.loginID,
                    channel_id: e.channelID
                }
            }

            function E(e) {
                o.o.track(i.SpadeEventType.ExtensionPopoutClicked, p(e))
            }

            function m(e) {
                o.o.track(i.SpadeEventType.ExtensionPopinClicked, p(e))
            }! function(e) {
                e.Open = "open", e.Close = "close", e.Save = "save"
            }(r || (r = {}))
        },
        "5cw2": function(e, t, n) {},
        "5zC2": function(e, t, n) {
            "use strict";
            n("k8pZ");
            var r = n("qCDY"),
                o = n("YyE3"),
                i = n("/MKj"),
                a = n("kRBY"),
                s = n("mrSG"),
                l = n("1hWM"),
                c = n("q1tI"),
                u = n("/7QA"),
                d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.extensionService.setEnvironmentOptions({
                            apiUrl: u.a.apiBaseURL,
                            dynamicSettings: u.b
                        }), this.setExtensionServiceAuthToken()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.authToken !== this.props.authToken && this.setExtensionServiceAuthToken()
                    }, t.prototype.render = function() {
                        return null
                    }, t.prototype.setExtensionServiceAuthToken = function() {
                        var e = this.props.authToken || "";
                        l.extensionService.setEnvironmentOptions({
                            authToken: e
                        })
                    }, t
                }(c.Component);

            function p(e) {
                return {
                    authToken: Object(a.a)(e)
                }
            }
            var E = Object(i.connect)(p)(d);
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return r.a
            }), n.d(t, "c", function() {
                return o.a
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "b", function() {
                return E
            })
        },
        "5zXJ": function(e, t, n) {
            "use strict";
            n.d(t, "v", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "t", function() {
                return c
            }), n.d(t, "n", function() {
                return u
            }), n.d(t, "p", function() {
                return d
            }), n.d(t, "q", function() {
                return p
            }), n.d(t, "o", function() {
                return E
            }), n.d(t, "r", function() {
                return m
            }), n.d(t, "l", function() {
                return f
            }), n.d(t, "m", function() {
                return h
            }), n.d(t, "j", function() {
                return g
            }), n.d(t, "g", function() {
                return _
            }), n.d(t, "e", function() {
                return T
            }), n.d(t, "i", function() {
                return R
            }), n.d(t, "h", function() {
                return I
            }), n.d(t, "f", function() {
                return v
            }), n.d(t, "k", function() {
                return b
            }), n.d(t, "u", function() {
                return O
            }), n.d(t, "s", function() {
                return C
            }), n.d(t, "d", function() {
                return y
            });
            var r, o = n("uYEN"),
                i = {
                    ERROR_DISPLAY_TIMEOUT: 5e3,
                    GET_BALANCE_RATE_LIMIT: 5e3,
                    UNDO_PROMPT_DURATION: 5e3
                },
                a = "https://d3aqoihi2n8ty8.cloudfront.net",
                s = a + "/cheer",
                l = a + "/actions",
                c = "bonus",
                u = 8e5,
                d = 1e5,
                p = 25e4,
                E = 500,
                m = 1e3,
                f = "cheer",
                h = o.a.Purple,
                g = "UNKNOWN",
                _ = "FIRST_PARTY",
                T = "CUSTOM",
                R = "SPONSORED",
                I = "THIRD_PARTY",
                v = "DISPLAY_ONLY",
                b = ((r = {})[o.a.Gray] = "#979797", r[o.a.Purple] = "#9c3ee8", r[o.a.Green] = "#1db2a5", r[o.a.Blue] = "#0099fe", r[o.a.Red] = "#f43021", r[o.a.Yellow] = "#f3a71a", r),
                O = "bits_sponsored_cheermotes",
                C = "bits_sponsored_cheermotes_announcement",
                y = "bits_charity_event"
        },
        "8jSG": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "blockedUsers"
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
                                value: "blockedUsers"
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
                    end: 56
                }
            };
            n.loc.source = {
                body: "fragment blockedUsers on User {\nid\nblockedUsers {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        AKMF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("mrSG"),
                o = n("/7QA"),
                i = n("S1Za");

            function a(e) {
                return e.videoPlayer.activeVideoPlayerInstanceRefID
            }
            o.p.store.registerReducer("videoPlayer", function(e, t) {
                switch (void 0 === e && (e = {
                    activeVideoPlayerInstanceRefID: void 0
                }), t.type) {
                    case i.a:
                        return r.__assign({}, e, {
                            activeVideoPlayerInstanceRefID: t.playerRefID
                        });
                    default:
                        return e
                }
            })
        },
        Addw: function(e, t, n) {
            "use strict";

            function r(e) {
                var t = Math.floor(e / 3600),
                    n = Math.floor((e - 3600 * t) / 60),
                    r = e - 3600 * t - 60 * n;
                return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), t + "h" + n + "m" + r + "s"
            }
            n.d(t, "a", function() {
                return r
            })
        },
        BaCc: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionPanel_BitsBalance"
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
                                        value: "bitsBalance"
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
                    end: 67
                }
            };
            n.loc.source = {
                body: "query ExtensionPanel_BitsBalance {\ncurrentUser {\nid\nbitsBalance\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        BhFH: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                o = n("yR8l"),
                i = n("8jSG"),
                a = n("cMjZ"),
                s = n("kSkr");

            function l() {
                var e = this;
                return Object(o.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, o, s, l) {
                                return r.__awaiter(e, void 0, void 0, function() {
                                    return r.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n,
                                                            sourceContext: s,
                                                            reason: o
                                                        }
                                                    },
                                                    optimisticResponse: {
                                                        blockUser: {
                                                            __typename: "BlockUserPayload",
                                                            targetUser: {
                                                                __typename: "User",
                                                                id: n
                                                            }
                                                        }
                                                    },
                                                    update: function(e) {
                                                        var t = e.readFragment({
                                                            id: Object(a.a)(l),
                                                            fragment: i
                                                        });
                                                        t && (t.blockedUsers.push({
                                                            id: n,
                                                            __typename: "User"
                                                        }), e.writeFragment({
                                                            id: Object(a.a)(l),
                                                            fragment: i,
                                                            data: t
                                                        }))
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                throw new Error("blockUserMutation is not ready");
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
        },
        By5U: function(e, t) {},
        C94G: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            }), n.d(t, "b", function() {
                return p
            });
            var r, o, i = n("mrSG"),
                a = n("ix15"),
                s = n("cr+I"),
                l = n("/7QA"),
                c = n("D7An"),
                u = {
                    key: "cvp-log",
                    validValues: ["debug", "error", "info", "warn"],
                    defaultValue: "error"
                };

            function d(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (r) return e && e(r), [2];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, Promise.all([n.e(0), n.e(97)]).then(function() {
                                    var e = n("zK2r");
                                    return "object" == typeof e && e && e.__esModule ? e : Object.assign({}, "object" == typeof e && e, {
                                        default: e
                                    })
                                })];
                            case 2:
                                return t = i.sent(), r = t.Player, e && e(r), [3, 4];
                            case 3:
                                return o = i.sent(), l.p.logger.error(o, "Unable to load twitch-player-ui chunk"), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }

            function p() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (e = l.p.logger.withCategory("player-core"), !(t = function() {
                                        var e = l.p.store.getState(),
                                            t = !(!e.session.user || !e.session.user.roles) && e.session.user.roles.isStaff,
                                            n = l.p.experiments.getAssignment(t ? c.b.CVPStaffVersion : c.b.CVPPlayerVersion),
                                            r = l.p.experiments.getAssignment(c.b.CVPPlayerType);
                                        if (!n) return;
                                        return {
                                            forceAsmJs: r === o.ASM,
                                            logLevel: function() {
                                                var e = s.parse(window.location.search)[u.key];
                                                if (!e || -1 === u.validValues.indexOf(e)) return u.defaultValue;
                                                return e
                                            }(),
                                            value: n
                                        }
                                    }())) return e.warn("Player core load options are invalid", {
                                    playerCoreOptions: t
                                }), [2];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, Object(a.loadMediaPlayer)(t, !0)];
                            case 2:
                                return n.sent(), [3, 4];
                            case 3:
                                return n.sent(), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.ASM = "asmjs"
            }(o || (o = {}))
        },
        DMoW: function(e, t, n) {
            "use strict";
            var r, o, i, a, s, l, c, u, d, p, E, m, f, h, g, _, T, R, I, v, b, O, C, y, S, A, N, D, P, L, M, U, k, x, w, B, F, V, W, j, G, H, z, X, Y, q, K, Q, Z, J, $, ee, te, ne, re, oe, ie, ae, se, le, ce, ue, de, pe, Ee, me, fe, he, ge, _e, Te, Re, Ie, ve, be, Oe, Ce, ye, Se, Ae, Ne, De, Pe, Le, Me, Ue, ke, xe, we, Be, Fe, Ve, We, je, Ge, He, ze, Xe, Ye, qe, Ke, Qe, Ze, Je, $e, et, tt, nt, rt, ot, it, at, st, lt, ct, ut, dt, pt, Et, mt, ft, ht, gt, _t, Tt;
            n.d(t, "N", function() {
                    return r
                }), n.d(t, "e", function() {
                    return o
                }), n.d(t, "O", function() {
                    return s
                }), n.d(t, "B", function() {
                    return l
                }), n.d(t, "b", function() {
                    return u
                }), n.d(t, "i", function() {
                    return f
                }), n.d(t, "d", function() {
                    return g
                }), n.d(t, "g", function() {
                    return R
                }), n.d(t, "h", function() {
                    return I
                }), n.d(t, "Z", function() {
                    return b
                }), n.d(t, "n", function() {
                    return O
                }), n.d(t, "Ba", function() {
                    return C
                }), n.d(t, "R", function() {
                    return y
                }), n.d(t, "s", function() {
                    return S
                }), n.d(t, "l", function() {
                    return D
                }), n.d(t, "P", function() {
                    return P
                }), n.d(t, "c", function() {
                    return w
                }), n.d(t, "u", function() {
                    return B
                }), n.d(t, "Aa", function() {
                    return F
                }), n.d(t, "t", function() {
                    return V
                }), n.d(t, "T", function() {
                    return W
                }), n.d(t, "V", function() {
                    return j
                }), n.d(t, "G", function() {
                    return G
                }), n.d(t, "W", function() {
                    return H
                }), n.d(t, "F", function() {
                    return z
                }), n.d(t, "E", function() {
                    return X
                }), n.d(t, "q", function() {
                    return Y
                }), n.d(t, "U", function() {
                    return q
                }), n.d(t, "a", function() {
                    return K
                }), n.d(t, "x", function() {
                    return Q
                }), n.d(t, "z", function() {
                    return Z
                }), n.d(t, "I", function() {
                    return $
                }), n.d(t, "J", function() {
                    return ee
                }), n.d(t, "H", function() {
                    return ne
                }), n.d(t, "K", function() {
                    return re
                }), n.d(t, "Y", function() {
                    return ae
                }), n.d(t, "X", function() {
                    return he
                }), n.d(t, "p", function() {
                    return Ce
                }), n.d(t, "o", function() {
                    return ye
                }), n.d(t, "Da", function() {
                    return De
                }), n.d(t, "D", function() {
                    return we
                }), n.d(t, "Ca", function() {
                    return Be
                }), n.d(t, "C", function() {
                    return We
                }), n.d(t, "k", function() {
                    return je
                }), n.d(t, "w", function() {
                    return Ge
                }), n.d(t, "m", function() {
                    return ze
                }), n.d(t, "j", function() {
                    return Xe
                }), n.d(t, "y", function() {
                    return Ye
                }), n.d(t, "S", function() {
                    return Ke
                }), n.d(t, "r", function() {
                    return Qe
                }), n.d(t, "Q", function() {
                    return et
                }), n.d(t, "A", function() {
                    return st
                }), n.d(t, "L", function() {
                    return lt
                }), n.d(t, "M", function() {
                    return ct
                }), n.d(t, "f", function() {
                    return gt
                }), n.d(t, "v", function() {
                    return _t
                }),
                function(e) {
                    e.CHANNEL_FEED_COMMENT_REPORT = "CHANNEL_FEED_COMMENT_REPORT", e.CHANNEL_FEED_POST_REPORT = "CHANNEL_FEED_POST_REPORT", e.CHAT_REPORT = "CHAT_REPORT", e.CLIP_REPORT = "CLIP_REPORT", e.COLLECTION_REPORT = "COLLECTION_REPORT", e.CURSE_PRIVATE_GROUP = "CURSE_PRIVATE_GROUP", e.CURSE_PUBLIC_GROUP = "CURSE_PUBLIC_GROUP", e.CURSE_WHISPER = "CURSE_WHISPER", e.EVENT_REPORT = "EVENT_REPORT", e.EXTENSION_REPORT = "EXTENSION_REPORT", e.LIVE_UP_REPORT = "LIVE_UP_REPORT", e.RAID_REPORT = "RAID_REPORT", e.ROOM_REPORT = "ROOM_REPORT", e.SINGS_DUET_SEED_REPORT = "SINGS_DUET_SEED_REPORT", e.SINGS_GROUP_BIO_REPORT = "SINGS_GROUP_BIO_REPORT", e.SINGS_GROUP_CHAT_REPORT = "SINGS_GROUP_CHAT_REPORT", e.SINGS_GROUP_NAME_REPORT = "SINGS_GROUP_NAME_REPORT", e.SINGS_VOD_COMMENT_REPORT = "SINGS_VOD_COMMENT_REPORT", e.USER_REPORT = "USER_REPORT", e.VOD_COMMENT_REPORT = "VOD_COMMENT_REPORT", e.VOD_REPORT = "VOD_REPORT", e.WHISPER_REPORT = "WHISPER_REPORT"
                }(r || (r = {})),
                function(e) {
                    e.CHAT = "CHAT", e.WHISPER = "WHISPER"
                }(o || (o = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_MOD = "TARGET_ALREADY_MOD", e.TARGET_IS_CHAT_BANNED = "TARGET_IS_CHAT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(i || (i = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND", e.TARGET_NOT_MOD = "TARGET_NOT_MOD"
                }(a || (a = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.REVOKEE_NOT_FOUND = "REVOKEE_NOT_FOUND", e.REVOKEE_NOT_VIP = "REVOKEE_NOT_VIP"
                }(s || (s = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.GRANTEE_ALREADY_VIP = "GRANTEE_ALREADY_VIP", e.GRANTEE_CHAT_BANNED = "GRANTEE_CHAT_BANNED", e.GRANTEE_NOT_FOUND = "GRANTEE_NOT_FOUND", e.MAX_VIPS_REACHED = "MAX_VIPS_REACHED", e.VIP_ACHIEVEMENT_INCOMPLETE = "VIP_ACHIEVEMENT_INCOMPLETE"
                }(l || (l = {})),
                function(e) {
                    e.PLAYING = "PLAYING", e.STREAMING = "STREAMING", e.WATCHING = "WATCHING"
                }(c || (c = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(u || (u = {})),
                function(e) {
                    e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(d || (d = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(p || (p = {})),
                function(e) {
                    e.AR = "AR", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.EN_GB = "EN_GB", e.ES = "ES", e.ES_MX = "ES_MX", e.FI = "FI", e.FR = "FR", e.HI = "HI", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.PL = "PL", e.PT = "PT", e.PT_BR = "PT_BR", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_CN = "ZH_CN", e.ZH_TW = "ZH_TW"
                }(E || (E = {})),
                function(e) {
                    e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_HK = "ZH_HK"
                }(m || (m = {})),
                function(e) {
                    e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
                }(f || (f = {})),
                function(e) {
                    e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
                }(h || (h = {})),
                function(e) {
                    e.ACQUIRED = "ACQUIRED", e.CHEERED = "CHEERED", e.NEW_USER = "NEW_USER", e.SKIPPED = "SKIPPED", e.UNKNOWN = "UNKNOWN"
                }(g || (g = {})),
                function(e) {
                    e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
                }(_ || (_ = {})),
                function(e) {
                    e.AD = "AD", e.BUNDLE = "BUNDLE"
                }(T || (T = {})),
                function(e) {
                    e.GAME_TRAILER = "GAME_TRAILER", e.MISC_TRAILER = "MISC_TRAILER", e.PAY_TO_STREAM = "PAY_TO_STREAM"
                }(R || (R = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
                }(I || (I = {})),
                function(e) {
                    e.FIXED_VALUE_OFF = "FIXED_VALUE_OFF", e.NONE = "NONE", e.PERCENT_OFF = "PERCENT_OFF"
                }(v || (v = {})),
                function(e) {
                    e.CHEER = "CHEER"
                }(b || (b = {})),
                function(e) {
                    e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
                }(O || (O = {})),
                function(e) {
                    e.PRIVATE = "PRIVATE", e.PUBLIC = "PUBLIC"
                }(C || (C = {})),
                function(e) {
                    e.ENDED = "ENDED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.UNKNOWN = "UNKNOWN"
                }(y || (y = {})),
                function(e) {
                    e.ARCHIVES_DISABLED = "ARCHIVES_DISABLED", e.BROADCASTER_NOT_LIVE = "BROADCASTER_NOT_LIVE", e.BROADCAST_FORMAT_INVALID_PREMIERE = "BROADCAST_FORMAT_INVALID_PREMIERE", e.BROADCAST_FORMAT_INVALID_RERUN = "BROADCAST_FORMAT_INVALID_RERUN", e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.MAX_DESCRIPTION_LENGTH_EXCEEDED = "MAX_DESCRIPTION_LENGTH_EXCEEDED", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED", e.VOD_NOT_READY = "VOD_NOT_READY"
                }(S || (S = {})),
                function(e) {
                    e.DARK = "DARK", e.LIGHT = "LIGHT"
                }(A || (A = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.DISPLAY_ONLY = "DISPLAY_ONLY", e.FIRST_PARTY = "FIRST_PARTY", e.RENDER_ONLY = "RENDER_ONLY", e.SPONSORED = "SPONSORED", e.THIRD_PARTY = "THIRD_PARTY", e.UNKNOWN = "UNKNOWN"
                }(N || (N = {})),
                function(e) {
                    e.FOLLOWERS_ONLY = "FOLLOWERS_ONLY", e.SLOW_MODE = "SLOW_MODE", e.SUBSCRIBERS_ONLY = "SUBSCRIBERS_ONLY", e.VERIFIED_ONLY = "VERIFIED_ONLY"
                }(D || (D = {})),
                function(e) {
                    e.AMOUNT_BELOW_MIN_BITS = "AMOUNT_BELOW_MIN_BITS", e.AUTO_MOD_MESSAGE = "AUTO_MOD_MESSAGE", e.AUTO_MOD_PENDING = "AUTO_MOD_PENDING", e.CHANNEL_BLOCKED_TERMS = "CHANNEL_BLOCKED_TERMS", e.CHANNEL_INELIGIBLE = "CHANNEL_INELIGIBLE", e.EMOTE_AMOUNT_BELOW_MIN_BITS = "EMOTE_AMOUNT_BELOW_MIN_BITS", e.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE", e.INVALID_BITS_AMOUNT = "INVALID_BITS_AMOUNT", e.INVALID_BITS_MESSAGE = "INVALID_BITS_MESSAGE", e.INVALID_EVENT_ID = "INVALID_EVENT_ID", e.MESSAGE_LENGTH_EXCEEDED = "MESSAGE_LENGTH_EXCEEDED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.TOO_LARGE_BITS_EMOTE = "TOO_LARGE_BITS_EMOTE", e.TOO_LARGE_CHEER = "TOO_LARGE_CHEER", e.UNKNOWN = "UNKNOWN", e.USER_BANNED = "USER_BANNED", e.USER_INELIGIBLE = "USER_INELIGIBLE", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_MESSAGE = "ZALGO_MESSAGE"
                }(P || (P = {})),
                function(e) {
                    e.NEW_CHATTER = "NEW_CHATTER"
                }(L || (L = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(M || (M = {})),
                function(e) {
                    e.FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.SUB_ONLY_MODE_ENFORCEMENT_FAILED = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT"
                }(U || (U = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(k || (k = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.DISMISSED = "DISMISSED", e.ELIGIBLE = "ELIGIBLE", e.REDEEMED = "REDEEMED"
                }(x || (x = {})),
                function(e) {
                    e.DURATION_INVALID = "DURATION_INVALID", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_BANNED = "TARGET_ALREADY_BANNED", e.TARGET_IS_ADMIN = "TARGET_IS_ADMIN", e.TARGET_IS_ANONYMOUS = "TARGET_IS_ANONYMOUS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_GLOBAL_MOD = "TARGET_IS_GLOBAL_MOD", e.TARGET_IS_MOD = "TARGET_IS_MOD", e.TARGET_IS_SELF = "TARGET_IS_SELF", e.TARGET_IS_STAFF = "TARGET_IS_STAFF", e.TARGET_IS_VIP = "TARGET_IS_VIP", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(w || (w = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.SUCCESS = "SUCCESS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_MODERATOR = "TARGET_IS_MODERATOR"
                }(B || (B = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_BANNED = "TARGET_NOT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(F || (F = {})),
                function(e) {
                    e.EUR = "EUR", e.GBP = "GBP", e.USD = "USD"
                }(V || (V = {})),
                function(e) {
                    e.MONTH = "MONTH", e.ONE_TIME = "ONE_TIME", e.WEEK = "WEEK", e.YEAR = "YEAR"
                }(W || (W = {})),
                function(e) {
                    e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
                }(j || (j = {})),
                function(e) {
                    e.GOOGLE_IAB = "GOOGLE_IAB", e.PRIME = "PRIME", e.RECURLY = "RECURLY", e.XSOLLA_V3 = "XSOLLA_V3", e.ZUORA = "ZUORA"
                }(G || (G = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
                }(H || (H = {})),
                function(e) {
                    e.AMAZON = "AMAZON", e.CREDIT_CARD = "CREDIT_CARD", e.GOOGLE_IAB = "GOOGLE_IAB", e.PAYPAL = "PAYPAL"
                }(z || (z = {})),
                function(e) {
                    e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.DISCOVER = "DISCOVER", e.MASTERCARD = "MASTERCARD", e.VISA = "VISA"
                }(X || (X = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CLIP = "CLIP", e.LIVE_CHANNEL = "LIVE_CHANNEL", e.VOD = "VOD"
                }(Y || (Y = {})),
                function(e) {
                    e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
                }(q || (q = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
                }(K || (K = {})),
                function(e) {
                    e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
                }(Q || (Q = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
                }(Z || (Z = {})),
                function(e) {
                    e.GAME_COMMERCE = "GAME_COMMERCE", e.GAME_COMMERCE_V2 = "GAME_COMMERCE_V2"
                }(J || (J = {})),
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
                }(re || (re = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_FORMAT = "INVALID_FORMAT", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(oe || (oe = {})),
                function(e) {
                    e.BIRTHDATE = "BIRTHDATE", e.CITY = "CITY", e.COMPANY_NAME = "COMPANY_NAME", e.COUNTRY_CODE = "COUNTRY_CODE", e.EMAIL = "EMAIL", e.FIRST_NAME = "FIRST_NAME", e.LAST_NAME = "LAST_NAME", e.MIDDLE_NAME = "MIDDLE_NAME", e.PARENT_EMAIL = "PARENT_EMAIL", e.PARENT_NAME = "PARENT_NAME", e.POSTAL = "POSTAL", e.STATE_CODE = "STATE_CODE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ie || (ie = {})),
                function(e) {
                    e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.EMAIL = "EMAIL", e.NAME = "NAME", e.POSTAL = "POSTAL", e.STATE = "STATE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ae || (ae = {})),
                function(e) {
                    e.ROYALTY = "ROYALTY", e.SERVICE = "SERVICE"
                }(se || (se = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EVERYONE = "EVERYONE", e.MODERATOR = "MODERATOR", e.SUBSCRIBER = "SUBSCRIBER"
                }(le || (le = {})),
                function(e) {
                    e.MAX_ROOMS_LIMIT_EXCEEDED = "MAX_ROOMS_LIMIT_EXCEEDED", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(ce || (ce = {})),
                function(e) {
                    e.ADMIN = "ADMIN", e.BROADCASTER = "BROADCASTER", e.GLOBALMOD = "GLOBALMOD", e.MOD = "MOD", e.REGULAR = "REGULAR", e.STAFF = "STAFF"
                }(ue || (ue = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(de || (de = {})),
                function(e) {
                    e.AUTO_MOD_ENFORCEMENT_FAILED = "AUTO_MOD_ENFORCEMENT_FAILED", e.EMOTE_ONLY_MODE_ENFORCEMENT_FAILED = "EMOTE_ONLY_MODE_ENFORCEMENT_FAILED", e.FORBIDDEN = "FORBIDDEN", e.R9K_MODE_ENFORCEMENT_FAILED = "R9K_MODE_ENFORCEMENT_FAILED", e.RATE_LIMIT_FAILED = "RATE_LIMIT_FAILED", e.SLOW_MODE_ENFORCEMENT_FAILED = "SLOW_MODE_ENFORCEMENT_FAILED", e.SPAM_ENFORCEMENT_FAILED = "SPAM_ENFORCEMENT_FAILED", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_ENFORCEMENT_FAILED = "ZALGO_ENFORCEMENT_FAILED"
                }(pe || (pe = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.SLOW_MODE_DURATION_INVALID = "SLOW_MODE_DURATION_INVALID"
                }(Ee || (Ee = {})),
                function(e) {
                    e.CSGO_SKILL = "CSGO_SKILL", e.LOL_SUMMONER_RANK = "LOL_SUMMONER_RANK", e.RELEVANCE = "RELEVANCE", e.VIEWER_COUNT = "VIEWER_COUNT"
                }(me || (me = {})),
                function(e) {
                    e.DNR_TO_RESUB = "DNR_TO_RESUB", e.GIFT_TO_PAID = "GIFT_TO_PAID"
                }(fe || (fe = {})),
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
                }(Te || (Te = {})),
                function(e) {
                    e.ERROR_STATUS = "ERROR_STATUS", e.GIFT_CLAIMED = "GIFT_CLAIMED", e.GIFT_CLAIM_PENDING = "GIFT_CLAIM_PENDING"
                }(Re || (Re = {})),
                function(e) {
                    e.GIFT_NOT_CLAIMABLE = "GIFT_NOT_CLAIMABLE", e.NON_EXISTENT_GIFT = "NON_EXISTENT_GIFT", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.USER_DOES_NOT_OWN_GIFT = "USER_DOES_NOT_OWN_GIFT"
                }(Ie || (Ie = {})),
                function(e) {
                    e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
                }(ve || (ve = {})),
                function(e) {
                    e.TOO_MANY_RECENT_SPENDS = "TOO_MANY_RECENT_SPENDS", e.UNABLE_TO_SPEND = "UNABLE_TO_SPEND"
                }(be || (be = {})),
                function(e) {
                    e.OFFER_ALREADY_CLAIMED = "OFFER_ALREADY_CLAIMED", e.UNKNOWN = "UNKNOWN"
                }(Oe || (Oe = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.SERIES = "SERIES"
                }(Ce || (Ce = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK", e.TRENDING = "TRENDING"
                }(ye || (ye = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK"
                }(Se || (Se = {})),
                function(e) {
                    e.CREATED_AT_ASC = "CREATED_AT_ASC", e.CREATED_AT_DESC = "CREATED_AT_DESC", e.TRENDING = "TRENDING", e.VIEWS_ASC = "VIEWS_ASC", e.VIEWS_DESC = "VIEWS_DESC"
                }(Ae || (Ae = {})),
                function(e) {
                    e.HIGH = "HIGH", e.LOW = "LOW", e.MEDIUM = "MEDIUM"
                }(Ne || (Ne = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.NOT_RESTRICTED = "NOT_RESTRICTED", e.PERMITTED = "PERMITTED", e.TEMPORARY = "TEMPORARY"
                }(De || (De = {})),
                function(e) {
                    e.BODY_EMPTY = "BODY_EMPTY", e.NOT_DELIVERED = "NOT_DELIVERED", e.TARGET_BANNED = "TARGET_BANNED", e.TARGET_RESTRICTED = "TARGET_RESTRICTED"
                }(Pe || (Pe = {})),
                function(e) {
                    e.ALREADY_LINKED = "ALREADY_LINKED", e.CODE_EXPIRED = "CODE_EXPIRED", e.CODE_INCORRECT = "CODE_INCORRECT"
                }(Le || (Le = {})),
                function(e) {
                    e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
                }(Me || (Me = {})),
                function(e) {
                    e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
                }(Ue || (Ue = {})),
                function(e) {
                    e.ASC = "ASC", e.DESC = "DESC"
                }(ke || (ke = {})),
                function(e) {
                    e.TIME = "TIME", e.VIEWS = "VIEWS"
                }(xe || (xe = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
                }(we || (we = {})),
                function(e) {
                    e.ALL_VIDEOS = "ALL_VIDEOS", e.COLLECTION = "COLLECTION", e.GAME_VIDEOS = "GAME_VIDEOS", e.LATEST_BROADCASTS = "LATEST_BROADCASTS", e.LONG_VIDEOS = "LONG_VIDEOS", e.SHORT_VIDEOS = "SHORT_VIDEOS", e.TOP_CLIPS = "TOP_CLIPS"
                }(Be || (Be = {})),
                function(e) {
                    e.ALREADY_CLAIMED = "ALREADY_CLAIMED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN = "UNKNOWN"
                }(Fe || (Fe = {})),
                function(e) {
                    e.BITS_KEY_CODE = "BITS_KEY_CODE"
                }(Ve || (Ve = {})),
                function(e) {
                    e.NONE = "NONE", e.READ = "READ", e.WRITE = "WRITE"
                }(We || (We = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EDITOR = "EDITOR", e.MODERATOR = "MODERATOR", e.REGULAR = "REGULAR", e.SUBSCRIBER = "SUBSCRIBER"
                }(je || (je = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
                }(Ge || (Ge = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING"
                }(He || (He = {})),
                function(e) {
                    e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(ze || (ze = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Xe || (Xe = {})),
                function(e) {
                    e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
                }(Ye || (Ye = {})),
                function(e) {
                    e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(qe || (qe = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ke || (Ke = {})),
                function(e) {
                    e.INVITATION_ALREADY_EXISTS = "INVITATION_ALREADY_EXISTS", e.INVITATION_INVALID = "INVITATION_INVALID", e.SQUAD_FULL = "SQUAD_FULL", e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_ALREADY_IN_SQUAD = "USER_ALREADY_IN_SQUAD"
                }(Qe || (Qe = {})),
                function(e) {
                    e.SQUAD_CANNOT_BE_UPDATED = "SQUAD_CANNOT_BE_UPDATED", e.SQUAD_NOT_FOUND = "SQUAD_NOT_FOUND", e.SQUAD_TOO_FEW_MEMBERS = "SQUAD_TOO_FEW_MEMBERS", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(Ze || (Ze = {})),
                function(e) {
                    e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_NOT_IN_SQUAD = "USER_NOT_IN_SQUAD"
                }(Je || (Je = {})),
                function(e) {
                    e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_NOT_IN_SQUAD = "USER_NOT_IN_SQUAD"
                }($e || ($e = {})),
                function(e) {
                    e.ACCEPTED = "ACCEPTED", e.DELETED = "DELETED", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN"
                }(et || (et = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.TARGET_USER_ALREADY_EDITOR = "TARGET_USER_ALREADY_EDITOR", e.TARGET_USER_NOT_FOUND = "TARGET_USER_NOT_FOUND"
                }(tt || (tt = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.TARGET_USER_NOT_FOUND = "TARGET_USER_NOT_FOUND"
                }(nt || (nt = {})),
                function(e) {
                    e.BASELINE = "BASELINE", e.HIGH = "HIGH", e.MAIN = "MAIN"
                }(rt || (rt = {})),
                function(e) {
                    e.HYPE = "HYPE", e.STARTTIME = "STARTTIME"
                }(ot || (ot = {})),
                function(e) {
                    e.PREMIERE = "PREMIERE", e.SEGMENT = "SEGMENT", e.SINGLE = "SINGLE", e.TIMETABLE = "TIMETABLE"
                }(it || (it = {})),
                function(e) {
                    e.CANCELLED = "CANCELLED", e.FAILED = "FAILED", e.SCHEDULED = "SCHEDULED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UNSCHEDULED = "UNSCHEDULED"
                }(at || (at = {})),
                function(e) {
                    e.ALL = "ALL", e.LIVE = "LIVE"
                }(st || (st = {})),
                function(e) {
                    e.ALREADY_WATCHED = "ALREADY_WATCHED", e.NOT_INTERESTED = "NOT_INTERESTED", e.OFFENSIVE = "OFFENSIVE", e.OTHER = "OTHER", e.UNSPECIFIED = "UNSPECIFIED"
                }(lt || (lt = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CHANNEL = "CHANNEL", e.SHELF = "SHELF", e.UNSPECIFIED = "UNSPECIFIED", e.VOD = "VOD"
                }(ct || (ct = {})),
                function(e) {
                    e.PRICE_ASC = "PRICE_ASC", e.PRICE_DESC = "PRICE_DESC", e.PURCHASE_DATE_ASC = "PURCHASE_DATE_ASC", e.PURCHASE_DATE_DESC = "PURCHASE_DATE_DESC"
                }(ut || (ut = {})),
                function(e) {
                    e.ALL = "ALL", e.SUBSCRIPTIONS = "SUBSCRIPTIONS"
                }(dt || (dt = {})),
                function(e) {
                    e.SUBSCRIPTION = "SUBSCRIPTION"
                }(pt || (pt = {})),
                function(e) {
                    e.MONKEYS = "MONKEYS", e.PURPLE = "PURPLE", e.ROBOTS = "ROBOTS"
                }(Et || (Et = {})),
                function(e) {
                    e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
                }(mt || (mt = {})),
                function(e) {
                    e.INVALID_USER_ID = "INVALID_USER_ID", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(ft || (ft = {})),
                function(e) {
                    e.DELETED = "DELETED", e.PENDING_REVIEW = "PENDING_REVIEW", e.PENDING_REVIEW_SPAM = "PENDING_REVIEW_SPAM", e.PUBLISHED = "PUBLISHED", e.UNPUBLISHED = "UNPUBLISHED"
                }(ht || (ht = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED"
                }(gt || (gt = {})),
                function(e) {
                    e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
                }(_t || (_t = {})),
                function(e) {
                    e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
                }(Tt || (Tt = {}))
        },
        Fxe2: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && "v" === e.charAt(0) ? e.substring(1) : e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        H31v: function(e, t, n) {
            "use strict";
            var r, o;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return o
                }),
                function(e) {
                    e.Bits = "bits", e.Leaderboard = "bits-leader"
                }(r || (r = {})),
                function(e) {
                    e.Badge = "badge_update", e.Balance = "balance_update", e.FirstPurchase = "first_bits_purchase"
                }(o || (o = {}))
        },
        JVUd: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("17x9"),
                i = n("q1tI"),
                a = n("/7QA");

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
                    r = function() {
                        if (window.innerHeight) return window.innerHeight;
                        if (document.documentElement.clientHeight) return document.documentElement.clientHeight;
                        return screen.height
                    }();
                return e.bottom <= 0 || e.top > r || e.right < 0 || e.left > n ? t : (t.top = Math.max(0, e.top), t.left = Math.max(0, e.left), t.right = Math.min(e.right, n), t.bottom = Math.min(e.bottom, r), t.width = t.right - t.left, t.height = t.bottom - t.top, t)
            }

            function l(e, t) {
                return function(n) {
                    return function(l) {
                        function c() {
                            var e = null !== l && l.apply(this, arguments) || this;
                            return e.hadImpression = !1, e.logger = a.k.withCategory("with-impression-listener"), e.setRef = function(t) {
                                return e.element = t
                            }, e.registerImpressionCallback = function(t) {
                                e.reportImpression = t
                            }, e
                        }
                        return r.__extends(c, l), c.prototype.componentDidMount = function() {
                            this.scrollContext = this.context;
                            var n = this.scrollContext.registerReceiver;
                            n ? t && void 0 !== t.percentage && void 0 !== t.pixels ? this.logger.warn("<" + e + " /> should only be initialized with percentage or pixel thresholds, not both") : this.unregister = n(this) : this.logger.warn("<" + e + " /> initialized missing a <ScrollableArea /> provider")
                        }, c.prototype.componentWillUnmount = function() {
                            this.unregister && this.unregister()
                        }, c.prototype.render = function() {
                            var e = {
                                    impressionListener: {
                                        registerImpressionCallback: this.registerImpressionCallback
                                    }
                                },
                                o = t && t.impressionWrapperClassName,
                                a = o ? {
                                    className: o
                                } : {};
                            return i.createElement("div", r.__assign({
                                ref: this.setRef
                            }, a), i.createElement(n, r.__assign({}, this.props, e)))
                        }, c.prototype.checkVisible = function(e) {
                            return r.__awaiter(this, void 0, void 0, function() {
                                var t, n;
                                return r.__generator(this, function(r) {
                                    return this.hadImpression || (t = this.isVisible(e)) && (n = this.isScrolled(), this.hadImpression = t, this.reportImpression && this.reportImpression(n)), [2]
                                })
                            })
                        }, c.prototype.isVisible = function(e) {
                            if (!this.element) return !1;
                            var n = s(e),
                                r = this.element.getBoundingClientRect();
                            if (r.left < n.right && r.right > n.left && r.top < n.bottom && r.bottom > n.top) {
                                if (!t || 0 === t.percentage || 0 === t.pixels) return !0;
                                var o = t.percentage,
                                    i = t.pixels,
                                    a = r.bottom - r.top,
                                    l = n.bottom - n.top,
                                    c = Math.min(n.bottom - r.top, a, l);
                                if (i) {
                                    if (a >= i) return c >= i;
                                    o = 100
                                }
                                return !o || 100 * (c / a) >= o
                            }
                            return !1
                        }, c.prototype.isScrolled = function() {
                            if (!this.scrollContext) return !1;
                            var e = this.scrollContext.getScrollContent();
                            return !(!e || 0 === e.scrollTop)
                        }, c.contextTypes = {
                            registerReceiver: o.func,
                            getScrollContent: o.func
                        }, c
                    }(i.Component)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        MPK0: function(e, t, n) {},
        NAeX: function(e, t, n) {},
        Oy4H: function(e, t, n) {},
        QVaV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            });
            var r = n("q1tI"),
                o = /^[\x00-\x7F]*$/,
                i = function(e, t, n) {
                    return void 0 === n && (n = !1), t && e && !a(t) ? n ? t + " (" + e + ")" : r.createElement("span", null, t, " ", r.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function a(e) {
                return o.test(e)
            }
        },
        Qqhu: function(e, t, n) {},
        RQ6e: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("TSYQ"),
                i = n("q1tI"),
                a = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                c = n("GnwI");
            var u = n("Ue10"),
                d = n("gIsd"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = Object(a.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [i.createElement("option", {
                            key: "Loading"
                        }, Object(a.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(a.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return i.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            id: "reporting-modal__select",
                            label: Object(a.d)("Select Reason (required)", "ReportUserModal")
                        }, i.createElement(u.zb, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, i.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(i.Component),
                E = Object(s.compose)(Object(l.a)(d, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(c.b)("ReportReasonSelect"))(p);
            n("y4Ne");
            n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return f
            });
            var m;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(m || (m = {}));
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        description: "",
                        reason: null
                    }, t.headerMessage = Object(a.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: i.createElement("br", null),
                        tosLink: i.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(a.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(m.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(u.Xa, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column,
                        alignItems: u.f.Center,
                        justifyContent: u.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === m.Success ? i.createElement("div", null, i.createElement(u.z, {
                        onClick: this.props.onClose
                    }, i.createElement(u.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(a.d)("Close", "ReportUser")))) : i.createElement("div", null, i.createElement(u.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, i.createElement(u.W, {
                        type: u.Vb.H4
                    }, this.props.title), i.createElement(u.Eb, {
                        color: u.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), i.createElement("form", null, i.createElement(u.Eb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, i.createElement(E, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), i.createElement(u.Ea, {
                        id: "reporting__text-area",
                        label: Object(a.d)("Description (required)", "ReportUser")
                    }, i.createElement(u.Sb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), i.createElement(u.Eb, {
                        display: u.X.Flex,
                        justifyContent: u.Wa.Center
                    }, i.createElement(u.z, {
                        onClick: this.handleSubmit
                    }, i.createElement(u.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(a.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case m.FormError:
                            e = Object(a.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case m.MutationError:
                            e = Object(a.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case m.Success:
                            e = Object(a.d)("Thank you for your report.", "ReportUser");
                            break;
                        case m.UserError:
                            e = Object(a.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = o({
                        "reporting__error-container": this.props.submitStatus !== m.Success,
                        "reporting__success-container": this.props.submitStatus === m.Success
                    });
                    return i.createElement(u.Eb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== m.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(i.Component)
        },
        RcPG: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Text = 0] = "Text", e[e.ModeratedText = 1] = "ModeratedText", e[e.CurrentUserHighlight = 2] = "CurrentUserHighlight", e[e.Mention = 3] = "Mention", e[e.Link = 4] = "Link", e[e.Emote = 5] = "Emote", e[e.ClipLink = 6] = "ClipLink", e[e.VideoLink = 7] = "VideoLink"
                }(r || (r = {}))
        },
        S1Za: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r = "video-player.VIDEO_PLAYER_INSTANCE_STARTED";

            function o(e) {
                return {
                    type: r,
                    playerRefID: e
                }
            }
        },
        TVJu: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("/MKj"),
                i = n("fvjX"),
                a = n("1/iK"),
                s = n("aCAx"),
                l = n("y5D0"),
                c = n("kRBY"),
                u = n("/HY+"),
                d = n("TSYQ"),
                p = n("1hWM"),
                E = n("q1tI"),
                m = n("oJmH"),
                f = n("/7QA"),
                h = n("eJ65"),
                g = n("edgk"),
                _ = n("DMoW"),
                T = n("2xye"),
                R = n("3CMh"),
                I = n("0Log"),
                v = n("geRD"),
                b = n("/aPz"),
                O = n("H31v");

            function C(e, t, n) {
                Object(v.e)(e, void 0, function(e) {
                    return e ? (e.currentUser && e.currentUser.bitsBalance && (e.currentUser.bitsBalance = n), e) : e
                }, function() {
                    return !t
                })
            }
            var y, S = n("4h+t"),
                A = n("BaCc"),
                N = n("Ue10"),
                D = "test_selector_legal_disclaimer",
                P = "test_selector_confirm_button",
                L = "test_selector_buy_bits_button",
                M = "test_selector_cancel_button",
                U = function(e) {
                    var t = Object(S.a)(),
                        n = Object(f.d)("Confirm", "BitsConfrimationDialogue"),
                        r = Object(f.d)("Settings", "BitsConfrimationDialogue"),
                        o = E.createElement(N.U, {
                            to: "https://www.twitch.tv/settings/connections"
                        }, r),
                        i = E.createElement(N.Pa, {
                            display: N.X.InlineFlex,
                            alignContent: N.e.Center,
                            alignItems: N.f.Center,
                            margin: {
                                left: .5
                            }
                        }, E.createElement("span", null, E.createElement(R.a, {
                            animated: !1,
                            showImage: !0,
                            showAmount: !0,
                            prefix: "Cheer",
                            bitsConfig: t,
                            size: R.b.ExtremelySmall,
                            display: N.X.InlineFlex,
                            amount: e.newBalance,
                            alignItems: N.f.Center,
                            formattedNumber: !0
                        }))),
                        a = Object(f.d)("After confirming, your Bits balance will be {newBalance}", {
                            newBalance: i
                        }, "BitsConfrimationDialogue"),
                        s = Object(f.d)('By clicking "{ConfirmText}," you agree to share your Twitch ID with {ExtensionName}. You can manage account connections under {Settings}.', {
                            ConfirmText: n,
                            ExtensionName: e.extensionName,
                            Settings: o
                        }, "BitsConfrimationDialogue");
                    return E.createElement(N.Xa, {
                        className: "bits-confirmation-dialog"
                    }, E.createElement(N.Xa, {
                        padding: 1
                    }, E.createElement(N.Xa, {
                        margin: {
                            bottom: 1
                        },
                        display: N.X.Flex,
                        justifyContent: N.Wa.Between
                    }, E.createElement(N.Xa, null, E.createElement(N.W, {
                        fontSize: N.Ca.Size5,
                        bold: !0
                    }, e.extensionItemLabel), E.createElement(N.W, null, e.extensionName)), E.createElement("span", null, E.createElement(R.a, {
                        animated: !1,
                        showImage: !0,
                        showAmount: !0,
                        prefix: "Cheer",
                        bitsConfig: t,
                        size: R.b.ExtraSmall,
                        display: N.X.InlineFlex,
                        amount: e.cost,
                        alignItems: N.f.Center
                    }))), E.createElement(N.Xa, {
                        display: N.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, E.createElement(N.Pa, {
                        display: N.X.Flex
                    }, E.createElement(N.W, null, a))), E.createElement(N.Xa, {
                        display: N.X.Inline
                    }, E.createElement(N.Xa, {
                        display: N.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, E.createElement(N.z, {
                        "data-test-selector": P,
                        onClick: function() {
                            e.onConfirm().then(function(t) {
                                "number" == typeof t && Number.isInteger(t) && C(A, e.userID, t)
                            }), C(A, e.userID, e.newBalance)
                        }
                    }, n)), E.createElement(N.Xa, {
                        display: N.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, E.createElement(N.z, {
                        "data-test-selector": L,
                        linkTo: e.bitsLandingPageUrl,
                        targetBlank: !0,
                        type: N.F.Hollow
                    }, e.buyBitsText)), E.createElement(N.Xa, {
                        display: N.X.InlineBlock
                    }, E.createElement(N.z, {
                        "data-test-selector": M,
                        onClick: e.onClose,
                        type: N.F.Hollow
                    }, e.cancelText)))), E.createElement(N.Eb, {
                        borderTop: !0,
                        padding: 1
                    }, E.createElement(N.W, {
                        "data-test-selector": D
                    }, s)))
                },
                k = "test_selector_buy_bits_button",
                x = "test_selector_cancel_button",
                w = Object(S.a)(),
                B = function(e) {
                    var t, n = e.bitsBalance - e.cost,
                        r = Math.abs(n),
                        o = E.createElement(N.Pa, {
                            display: N.X.InlineFlex,
                            margin: {
                                x: .5
                            }
                        }, E.createElement("span", null, E.createElement(R.a, {
                            animated: !1,
                            showImage: !0,
                            showAmount: !0,
                            prefix: "Cheer",
                            bitsConfig: w,
                            size: R.b.ExtremelySmall,
                            display: N.X.InlineFlex,
                            amount: r,
                            alignItems: N.f.Center,
                            formattedNumber: !0
                        })));
                    return t = E.createElement(N.Pa, {
                        display: N.X.Flex
                    }, E.createElement(N.W, null, Object(f.d)("You need {BitsRequired} more Bits to proceed.", {
                        BitsRequired: o
                    }, "BitsUpsellDialog"))), E.createElement(N.Xa, {
                        className: "bits-upsell-dialog",
                        padding: 1
                    }, E.createElement(N.Xa, {
                        margin: {
                            bottom: 1
                        },
                        display: N.X.Flex,
                        justifyContent: N.Wa.Between
                    }, E.createElement(N.Xa, null, E.createElement(N.W, {
                        fontSize: N.Ca.Size5,
                        bold: !0
                    }, e.extensionItemLabel), E.createElement(N.W, null, e.extensionName)), E.createElement("span", null, E.createElement(R.a, {
                        animated: !1,
                        showImage: !0,
                        showAmount: !0,
                        prefix: "Cheer",
                        bitsConfig: w,
                        size: R.b.ExtraSmall,
                        display: N.X.InlineFlex,
                        amount: e.cost,
                        alignItems: N.f.Center
                    }))), E.createElement(N.Xa, {
                        display: N.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, t), E.createElement(N.Xa, {
                        display: N.X.Inline
                    }, E.createElement(N.Xa, {
                        display: N.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, E.createElement(N.z, {
                        "data-test-selector": k,
                        linkTo: e.bitsLandingPageUrl,
                        targetBlank: !0,
                        type: N.F.Default
                    }, e.buyBitsText)), E.createElement(N.Xa, {
                        display: N.X.InlineBlock
                    }, E.createElement(N.z, {
                        "data-test-selector": x,
                        onClick: e.onClose,
                        type: N.F.Hollow
                    }, e.cancelText))))
                },
                F = function(e) {
                    var t = Object(f.d)("Buy Bits", "UseBitsDialog"),
                        n = Object(f.d)("Cancel", "UseBitsDialog"),
                        r = null;
                    if (e)
                        if (e.bitsBalance >= e.cost) {
                            var o = e.bitsBalance - e.cost;
                            r = E.createElement(U, {
                                cost: e.cost,
                                extensionName: e.extensionName,
                                extensionItemLabel: e.extensionItemLabel,
                                newBalance: o,
                                bitsBalance: e.bitsBalance,
                                bitsLandingPageUrl: "https://twitch.tv/bits",
                                buyBitsText: t,
                                cancelText: n,
                                onConfirm: e.onConfirm,
                                onClose: e.onClose,
                                userID: e.userID
                            })
                        } else r = E.createElement(B, {
                            cost: e.cost,
                            extensionName: e.extensionName,
                            extensionItemLabel: e.extensionItemLabel,
                            bitsBalance: e.bitsBalance,
                            bitsLandingPageUrl: "https://twitch.tv/bits",
                            buyBitsText: t,
                            cancelText: n,
                            onConfirm: e.onConfirm,
                            onClose: e.onClose
                        });
                    return E.createElement(N.Xa, {
                        className: "use-bits-dialog"
                    }, r)
                },
                V = "test_selectors_close_button",
                W = function(e) {
                    var t = Object(f.d)("Sorry, something went wrong. Please try again.", "UseBitsErrorDialog"),
                        n = Object(f.d)("Close", "UseBitsErrorDialog");
                    return E.createElement(N.Xa, {
                        className: "use-bits-error-dialog",
                        padding: 1
                    }, E.createElement(N.Pa, {
                        display: N.X.Flex,
                        alignContent: N.e.Center,
                        margin: {
                            bottom: 1
                        }
                    }, E.createElement(N.W, null, t)), E.createElement(N.z, {
                        "data-test-selector": V,
                        onClick: e.onClose
                    }, n))
                },
                j = n("5zC2"),
                G = n("22qk"),
                H = n("5IFo"),
                z = n("JVUd"),
                X = n("0HeA"),
                Y = n("yR8l"),
                q = n("eDVu"),
                K = n("VeT4"),
                Q = (n("NAeX"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.data.currentUser && this.props.startTimer && this.props.startTimer()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || !this.props.data.currentUser) return null;
                        var e = this.props.showSuccessText ? E.createElement(N.W, {
                                type: N.Vb.Span,
                                className: "extension-bits-balance-success"
                            }, Object(f.d)("Success!", "ExtensionPanelBitsBalanceDialog")) : null,
                            t = E.createElement(K.a, {
                                withImage: !0,
                                withText: !0,
                                animated: !1,
                                count: this.props.data.currentUser.bitsBalance || 0,
                                bitsConfig: Object(S.a)()
                            });
                        return E.createElement(N.Xa, {
                            margin: {
                                top: 0,
                                right: 1,
                                bottom: .5,
                                left: 1
                            }
                        }, e, Object(f.d)("Bits Balance: {bitsComponent}", {
                            bitsComponent: t
                        }, "ExtensionPanelBitsBalanceDialog"))
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.currentUser && this.props.startTimer && this.props.startTimer()
                    }, t
                }(E.Component)),
                Z = Object(m.compose)(Object(q.a)(function(e) {
                    return function(e, t, n) {
                        return {
                            topic: n ? Object(b.D)(n) : "",
                            type: I.PubsubMessageType.UserBitsBalanceUpdate,
                            mutator: function(e, t) {
                                return t && e.message_type === O.b.Balance ? (t.currentUser && e.data && (t.currentUser.bitsBalance = e.data.balance), t) : t
                            },
                            skip: !t || !n,
                            query: e
                        }
                    }(A, e.channelID, e.userID)
                }), Object(Y.a)(A))(Q);
            ! function(e) {
                e.ExtensionName = "extension_name_selector", e.ShowExtensionButton = "show_extension_button_selector"
            }(y || (y = {}));
            var J = function(e) {
                var t = e.extension.views.panel ? e.extension.views.panel.height : 300;
                return E.createElement(N.Qa, {
                    alignItems: N.f.Center,
                    background: N.r.Alt2,
                    borderLeft: !0,
                    borderTop: !0,
                    borderRight: !0,
                    display: N.X.Flex,
                    flexDirection: N.Aa.Column,
                    fullWidth: !0,
                    justifyContent: N.Wa.Center,
                    color: N.O.Base,
                    position: N.jb.Relative
                }, E.createElement("div", {
                    style: {
                        height: t
                    }
                }, E.createElement("img", {
                    src: e.extension.iconUrl
                }), E.createElement(N.Xa, {
                    margin: 1,
                    textAlign: N.Rb.Center
                }, E.createElement(N.W, {
                    fontSize: N.Ca.Size5
                }, Object(f.d)("{name} is popped out.", {
                    name: E.createElement(N.W, {
                        "data-test-selector": y.ExtensionName,
                        type: N.Vb.Span,
                        bold: !0
                    }, e.extension.name)
                }, "ExtensionPopoutPlaceholder"))), E.createElement(N.z, {
                    "data-test-selector": y.ShowExtensionButton,
                    onClick: e.onExtensionShowClicked
                }, Object(f.d)("Show Extension", "ExtensionPopoutPlaceholder"))))
            };
            J.displayName = "ExtensionPopoutPlaceholder";
            var $, ee = function(e) {
                    return E.createElement(N.Xa, {
                        padding: 1
                    }, E.createElement(N.Xa, null, E.createElement("span", null, Object(f.d)("You must be logged in to use this extension feature.", "FeatureNeedsAuthDialog")), E.createElement(N.Eb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), E.createElement(N.Xa, {
                        display: N.X.Flex,
                        justifyContent: N.Wa.Start
                    }, E.createElement(N.z, {
                        "data-test-selector": "qa-needs-auth-close-selector",
                        type: N.F.Hollow,
                        onClick: e.close
                    }, Object(f.d)("Close", "FeatureNeedsAuthDialog")))))
                },
                te = function(e) {
                    var t = function(t) {
                        return E.createElement(N.Xa, null, E.createElement("span", {
                            "data-test-selector": "confirmation_message_selector"
                        }, t), E.createElement(N.Eb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), E.createElement(N.Xa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Start
                        }, E.createElement(N.z, {
                            type: N.F.Hollow,
                            onClick: e.cancelFollow
                        }, Object(f.d)("Close", "FollowDialog"))))
                    };
                    if (null === e.currentFollowRequest.options.channel) return E.createElement(N.Xa, {
                        padding: 1
                    }, t(Object(f.d)("The channel you are attempting to follow does not exist.", "FollowDialog")));
                    var n = Object(f.d)("You are about to follow {name}.", {
                            name: E.createElement(N.W, {
                                type: N.Vb.Span,
                                bold: !0
                            }, e.currentFollowRequest.options.channel)
                        }, "FollowDialog"),
                        r = Object(f.d)("Receive updates on {name}'s activity, including when they go live and upload videos or clips, on mobile, email, and web.", {
                            name: e.currentFollowRequest.options.channel
                        }, "FollowDialog"),
                        o = E.createElement(N.Xa, null, E.createElement("span", {
                            "data-test-selector": "confirmation_message_selector"
                        }, n), E.createElement(N.Eb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), E.createElement(N.Xa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Start
                        }, E.createElement(N.Xa, {
                            margin: {
                                right: 1
                            }
                        }, E.createElement(N.z, {
                            type: N.F.Default,
                            "data-test-selector": "toggle_follow_button_selector",
                            onClick: e.confirmFollow
                        }, Object(f.d)("Follow", "FollowDialog"))), E.createElement(N.z, {
                            type: N.F.Hollow,
                            onClick: e.cancelFollow
                        }, Object(f.d)("Cancel", "FollowDialog"))), E.createElement(N.Eb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), E.createElement(N.Xa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Start
                        }, E.createElement(N.Xa, {
                            flexGrow: 1
                        }, E.createElement(N.W, {
                            type: N.Vb.Span,
                            fontSize: N.Ca.Size5
                        }, Object(f.d)("Notifications", "FollowDialog"))), E.createElement(N.Xb, {
                            id: "ext-follow-notification",
                            checked: e.currentFollowRequest.notifications,
                            onChange: e.onNotificationsChanged
                        })), E.createElement(N.W, {
                            type: N.Vb.Span,
                            color: N.O.Alt2,
                            fontSize: N.Ca.Size7
                        }, r)),
                        i = Object(f.d)("You are already following {name}.", {
                            name: E.createElement(N.W, {
                                type: N.Vb.Span,
                                bold: !0
                            }, e.currentFollowRequest.options.channel)
                        }, "FollowDialog"),
                        a = e.currentFollowRequest.options.isFollowing ? t(i) : o;
                    return E.createElement(N.Xa, {
                        padding: 1
                    }, a)
                };
            ! function(e) {
                e.ManagePermissionsLink = "manage_permissions_link_selector", e.ToggleIdentityBalloon = "toggle_identity_balloon_selector", e.ToggleIdentityButton = "toggle_identity_button_selector"
            }($ || ($ = {}));
            var ne, re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderGrantPermissionsButton = function() {
                        var e = Object(f.d)("Grant Permissions", "ExtensionPanel");
                        return E.createElement(N.Yb, {
                            label: e,
                            direction: N.ac.Top,
                            align: N.Zb.Right,
                            offsetX: ".6rem"
                        }, E.createElement(N.Xa, {
                            display: N.X.Flex,
                            alignItems: N.f.Center
                        }, E.createElement(N.A, {
                            ariaLabel: e,
                            icon: N.tb.PermissionsAdd
                        })))
                    }, t.renderRevokePermissionsButton = function() {
                        var e = Object(f.d)("Revoke Permissions", "ExtensionPanel");
                        return E.createElement(N.Yb, {
                            label: e,
                            direction: N.ac.Top,
                            align: N.Zb.Right,
                            offsetX: ".6rem"
                        }, E.createElement(N.Xa, {
                            display: N.X.Flex,
                            alignItems: N.f.Center
                        }, E.createElement(N.A, {
                            ariaLabel: e,
                            icon: N.tb.PermissionsAdded,
                            statusAlertIcon: N.tb.PermissionsRemove
                        })))
                    }, t.saveGrantPermissionsBalloonRef = function(e) {
                        t.grantPermissionsBalloon = e
                    }, t.onCancelIdentityLink = function() {
                        t.grantPermissionsBalloon.toggleBalloon(!1)
                    }, t.toggleIdentity = function() {
                        t.props.isLinked ? t.props.onUnlinkIdentity && t.props.onUnlinkIdentity() : t.props.onLinkIdentity && t.props.onLinkIdentity(), t.grantPermissionsBalloon.toggleBalloon(!1)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.grantPermissionsBalloon && this.grantPermissionsBalloon.toggleBalloon(this.props.isDialogOpen)
                }, t.prototype.componentDidUpdate = function(e) {
                    e.isDialogOpen !== this.props.isDialogOpen && this.grantPermissionsBalloon && this.grantPermissionsBalloon.toggleBalloon(this.props.isDialogOpen)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.isLinked;
                    if (!e.isLinkEnabled) return null;
                    var n = t ? this.renderRevokePermissionsButton() : this.renderGrantPermissionsButton(),
                        r = Object(f.d)("You are granting {name} the following access:", {
                            name: E.createElement(N.W, {
                                type: N.Vb.Strong
                            }, this.props.extension.name)
                        }, "Extension Panel"),
                        o = Object(f.d)("You are revoking the following access for {name}:", {
                            name: E.createElement(N.W, {
                                type: N.Vb.Strong
                            }, this.props.extension.name)
                        }, "Extension Panel");
                    return E.createElement(h.a, {
                        display: N.X.InlineFlex,
                        ref: this.saveGrantPermissionsBalloonRef,
                        onToggle: this.props.onDialogToggle
                    }, E.createElement("span", {
                        "data-test-selector": $.ToggleIdentityBalloon
                    }, n), E.createElement(N.u, {
                        direction: N.v.TopRight,
                        size: N.w.Small
                    }, E.createElement(N.Xa, {
                        padding: 1
                    }, E.createElement(N.Xa, null, t ? o : r), E.createElement(N.Eb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), E.createElement(N.Xa, null, E.createElement(N.W, {
                        type: N.Vb.P,
                        bold: !0
                    }, Object(f.d)("Your Twitch User ID", "Extension Panel")), E.createElement(N.W, {
                        type: N.Vb.P
                    }, Object(f.d)("Allows this extension to know your User ID on Twitch.", "Extension Panel")), E.createElement("a", {
                        "data-test-selector": $.ManagePermissionsLink,
                        href: "https://twitch.tv/settings/connections",
                        target: "_blank"
                    }, Object(f.d)("Manage Permissions", "Extension Panel"))), E.createElement(N.Eb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), E.createElement(N.Xa, {
                        display: N.X.Flex,
                        justifyContent: N.Wa.Center
                    }, E.createElement(N.Xa, {
                        margin: {
                            right: 1
                        }
                    }, E.createElement(N.z, {
                        type: N.F.Hollow,
                        onClick: this.onCancelIdentityLink
                    }, Object(f.d)("Cancel", "Extension Panel"))), E.createElement(N.z, {
                        type: t ? N.F.Alert : N.F.Default,
                        "data-test-selector": $.ToggleIdentityButton,
                        onClick: this.toggleIdentity
                    }, t ? Object(f.d)("Revoke", "Extension Panel") : Object(f.d)("Grant", "Extension Panel"))))))
                }, t
            }(E.Component);
            (ne || (ne = {})).PopoutButton = "popout_button_selector";
            var oe, ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(f.d)("Pop Out Extension", "PopoutButton");
                        return E.createElement("span", null, E.createElement(N.Yb, {
                            label: e,
                            direction: N.ac.Top,
                            align: N.Zb.Right,
                            offsetX: ".6rem"
                        }, E.createElement(N.Xa, {
                            display: N.X.Flex,
                            alignItems: N.f.Center
                        }, E.createElement(N.A, {
                            "data-test-selector": ne.PopoutButton,
                            onClick: this.onClick,
                            ariaLabel: e,
                            icon: N.tb.Popout
                        }))))
                    }, t
                }(E.Component),
                ae = function(e) {
                    var t, n = e.cancel,
                        r = e.confirm,
                        o = e.isLoggedIn,
                        i = e.isLinked,
                        a = e.isLinkEnabled,
                        s = e.purchaseIntentPayload;
                    return t = o ? E.createElement(N.Xa, {
                        padding: {
                            x: 1,
                            bottom: 1,
                            top: .5
                        },
                        fullWidth: !0
                    }, E.createElement(N.Xa, {
                        padding: {
                            bottom: 2
                        }
                    }, E.createElement(N.W, {
                        fontSize: N.Ca.Size5,
                        bold: !0
                    }, Object(f.d)("In-Extension Purchase", "PurchaseConfirmation"))), E.createElement(N.Xa, null, E.createElement(N.Ja, {
                        gutterSize: N.Ka.Default
                    }, E.createElement(N.P, {
                        cols: {
                            default: 9
                        }
                    }, E.createElement(N.W, {
                        fontSize: N.Ca.Size6,
                        bold: !0
                    }, s.title)), E.createElement(N.P, {
                        cols: {
                            default: 3
                        }
                    }, E.createElement(N.Xa, {
                        fullWidth: !0,
                        textAlign: N.Rb.Right
                    }, E.createElement(N.W, {
                        fontSize: N.Ca.Size6,
                        bold: !0
                    }, s.displayPrice))))), E.createElement(N.Xa, {
                        fullWidth: !0,
                        padding: {
                            bottom: 1
                        }
                    }, E.createElement(N.W, {
                        color: N.O.Alt2
                    }, Object(f.d)("{name} extension", {
                        name: s.extensionName
                    }, "PurchaseConfirmation"))), E.createElement(N.Xa, {
                        fullWidth: !0
                    }, E.createElement(N.W, {
                        className: "t-extension-panel__description",
                        color: N.O.Alt2
                    }, s.description), E.createElement(N.Eb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), E.createElement(N.Xa, null, E.createElement(N.Ja, {
                        gutterSize: N.Ka.Default
                    }, E.createElement(N.P, {
                        cols: {
                            default: 4
                        }
                    }, E.createElement(N.z, {
                        "data-test-selector": "purchase_ui_buy_selector",
                        onClick: r,
                        fullWidth: !0
                    }, Object(f.d)("Buy", "PurchaseConfirmation"))), E.createElement(N.P, {
                        cols: {
                            default: 3
                        }
                    }, E.createElement(N.z, {
                        "data-test-selector": "purchase_ui_cancel_selector",
                        onClick: n,
                        type: N.F.Hollow
                    }, Object(f.d)("Cancel", "PurchaseConfirmation")))), !i && E.createElement(N.Xa, null, E.createElement(N.Eb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), E.createElement(N.W, {
                        fontSize: N.Ca.Size8,
                        color: N.O.Alt2
                    }, Object(f.d)('By clicking "Buy", you agree to share your Twitch ID with {name}. You can manage account connections under', {
                        name: s.extensionName
                    }, "PurchaseConfirmation"), " ", E.createElement("a", {
                        href: "/settings/connections"
                    }, Object(f.d)("Settings", "PurchaseConfirmation")), "."))))) : E.createElement(N.Xa, {
                        padding: {
                            x: 1,
                            bottom: 1,
                            top: .5
                        },
                        fullWidth: !0
                    }, E.createElement(N.Xa, {
                        padding: {
                            top: 2
                        }
                    }, E.createElement(N.W, {
                        fontSize: N.Ca.Size5
                    }, Object(f.d)("You must be logged in to use this extension feature.", "PurchaseConfirmation"))), E.createElement(N.Eb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), E.createElement(N.z, {
                        "data-test-selector": "purchase_ui_cancel_selector",
                        onClick: n,
                        type: N.F.Hollow
                    }, Object(f.d)("Close", "PurchaseConfirmation"))), E.createElement(N.u, {
                        direction: N.v.TopRight,
                        "data-test-selector": "purchase_ui_selector",
                        noTail: !a,
                        offsetX: "10px",
                        offsetY: "-2px",
                        tailOffset: 33,
                        show: !0,
                        size: N.w.Medium
                    }, E.createElement("button", {
                        className: "t-extension-panel__close t-extension-panel__top-controls",
                        onClick: n
                    }, E.createElement(N.sb, {
                        asset: N.tb.Close,
                        height: 11,
                        width: 11
                    })), E.createElement(N.Xa, {
                        display: N.X.Flex,
                        flexGrow: 1,
                        flexDirection: N.Aa.Column,
                        justifyContent: N.Wa.Center,
                        alignItems: N.f.Center
                    }, t))
                };
            (oe || (oe = {})).RestoreDefaultSizeButton = "restore-default-size-button";
            var se, le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isRestoreDefaultSizeVisible: !1
                    }, t.defaultPopoutWidth = window.outerWidth, t.defaultPopoutHeight = window.outerHeight, t.onClick = function() {
                        window.resizeTo(t.defaultPopoutWidth, t.defaultPopoutHeight)
                    }, t.onWindowResize = function() {
                        var e = window.outerWidth,
                            n = window.outerHeight,
                            r = e !== t.defaultPopoutWidth || n !== t.defaultPopoutHeight;
                        t.setState({
                            isRestoreDefaultSizeVisible: r
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onWindowResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize)
                }, t.prototype.render = function() {
                    if (!this.props.isPopout || !this.state.isRestoreDefaultSizeVisible) return null;
                    var e = Object(f.d)("Resize to Default", "RestoreDefaultSizeButton");
                    return E.createElement("span", null, E.createElement(N.Yb, {
                        label: e,
                        direction: N.ac.Top,
                        align: N.Zb.Right,
                        offsetX: ".6rem"
                    }, E.createElement(N.Xa, {
                        display: N.X.Flex,
                        alignItems: N.f.Center
                    }, E.createElement(N.A, {
                        "data-test-selector": oe.RestoreDefaultSizeButton,
                        onClick: this.onClick,
                        ariaLabel: e,
                        icon: N.tb.FullscreenExit
                    }))))
                }, t
            }(E.Component);
            ! function(e) {
                e.AcceptButton = "accept-button", e.DeclineButton = "decline-button", e.DeclinedMessage = "declined-message", e.WarningMessage = "warning-message"
            }(se || (se = {}));
            var ce, ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        declined: !1
                    }, t.onDeclined = function() {
                        t.setState({
                            declined: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return e = this.state.declined ? E.createElement(E.Fragment, null, E.createElement(N.W, {
                        type: N.Vb.P,
                        "data-test-selector": se.DeclinedMessage
                    }, Object(f.d)("You’ve declined to use this test extension. To use it, please refresh this page and select accept.", "TestExtensionDialog")), E.createElement(N.Xa, {
                        padding: {
                            top: 2
                        },
                        display: N.X.Flex,
                        justifyContent: N.Wa.Center
                    }, E.createElement(N.z, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                        type: N.F.Hollow
                    }, Object(f.d)("Learn More", "TestExtensionDialog")))) : E.createElement(E.Fragment, null, E.createElement(N.W, {
                        type: N.Vb.P,
                        "data-test-selector": se.WarningMessage
                    }, Object(f.d)("This is a Test Extension that Twitch has not evaluated; it may not be ready for primetime. Proceed only if you are familiar with the developer, the Extension, or Channel.", "TestExtensionDialog"), E.createElement(N.Pa, {
                        padding: {
                            left: .5
                        }
                    }, E.createElement(N.U, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                    }, Object(f.d)("Learn More.", "TestExtensionDialog")))), E.createElement(N.Xa, {
                        padding: {
                            top: 2
                        },
                        display: N.X.Flex,
                        justifyContent: N.Wa.Center
                    }, E.createElement(N.z, {
                        onClick: this.onDeclined,
                        type: N.F.Hollow,
                        "data-test-selector": se.DeclineButton
                    }, Object(f.d)("Decline", "TestExtensionDialog")), E.createElement(N.Xa, {
                        padding: {
                            left: 1
                        }
                    }, E.createElement(N.z, {
                        onClick: this.props.onAccepted,
                        "data-test-selector": se.AcceptButton
                    }, Object(f.d)("Accept", "TestExtensionDialog"))))), E.createElement(N.o, {
                        ratio: N.p.Aspect3x4
                    }, E.createElement(N.Eb, {
                        alignItems: N.f.Center,
                        border: !0,
                        display: N.X.Flex,
                        justifyContent: N.Wa.Center,
                        padding: 2
                    }, E.createElement(N.Xa, null, E.createElement(N.W, {
                        type: N.Vb.Strong
                    }, this.props.extensionName), e)))
                }, t
            }(E.Component);
            n("bVvr");
            ! function(e) {
                e.ExtensionDescriptionButton = "extension_description_button_selector", e.ExtensionReportButton = "extension_report_button_selector", e.ExtensionPanel = "extension_panel_selector", e.ExtensionDetailsLink = "extension_details_link_selector", e.ToggleFollowButton = "toggle_follow_button_selector", e.ConfirmationMessage = "confirmation_message_selector", e.PopoutButton = "popout_button_selector", e.UseBitsConfirmationToggleBalloonWrapper = "confirmation_message_selector"
            }(ce || (ce = {}));
            var de = 3e3,
                pe = 32,
                Ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            bitsBalance: null,
                            currentFollowRequest: null,
                            currentUseBitsRequest: null,
                            isIdentityLinkOpen: !1,
                            isLinked: !1,
                            isLinkEnabled: !1,
                            popoutRestoreIntentTracked: !1,
                            purchaseIntent: null,
                            testExtensionAccepted: !1
                        }, t.renderExtensionFrame = function() {
                            var e, n = d("extension-panel-extension-frame", ((e = {})["extension-panel-extension-frame__popout"] = t.props.isPopout, e));
                            return t.extension.state === p.ExtensionState.Released || t.state.testExtensionAccepted ? E.createElement(N.Xa, null, E.createElement(N.Eb, {
                                borderTop: !0,
                                borderRight: !0,
                                borderLeft: !0
                            }, E.createElement(j.a, {
                                channelID: t.props.channelID,
                                channelLogin: t.props.channelName,
                                className: n,
                                extensionMode: t.props.mode,
                                installation: t.props.installation,
                                languageCode: t.props.languageCode,
                                locale: t.props.locale,
                                login: t.props.login,
                                loginID: t.props.loginID,
                                isPopout: t.props.isPopout,
                                onBeginPurchase: t.onBeginPurchase,
                                saveExtensionAPI: t.saveExtensionAPI
                            })), E.createElement(N.Xa, {
                                position: N.jb.Relative,
                                fullWidth: !0
                            }, t.purchaseUI())) : E.createElement(ue, {
                                extensionName: t.extension.name,
                                onAccepted: t.onTestExtensionAccepted
                            })
                        }, t.renderFollowConfirmation = function() {
                            return null === t.state.currentFollowRequest ? null : E.createElement(h.a, {
                                ref: t.saveFollowConfirmationBalloonRef
                            }, E.createElement("span", null), E.createElement(N.u, {
                                direction: N.v.TopRight,
                                size: N.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, E.createElement(te, {
                                currentFollowRequest: t.state.currentFollowRequest,
                                confirmFollow: t.confirmFollow,
                                onNotificationsChanged: t.onNotificationsChanged,
                                cancelFollow: t.cancelFollow
                            })))
                        }, t.renderFeatureNeedsAuthBalloon = function() {
                            return E.createElement(h.a, {
                                ref: t.saveFeatureNeedsAuthBalloonRef
                            }, E.createElement("span", null), E.createElement(N.u, {
                                direction: N.v.TopRight,
                                size: N.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, E.createElement(ee, {
                                close: t.dismissLoginPrompt
                            })))
                        }, t.renderUseBitsConfirmation = function() {
                            if (!t.state.currentUseBitsRequest || !t.state.currentUseBitsRequest.options) return null;
                            var e = null;
                            if (t.state.currentUseBitsRequest.options.error) e = E.createElement(W, {
                                error: t.state.currentUseBitsRequest.options.error,
                                onClose: t.cancelUseBits
                            });
                            else if (t.state.currentUseBitsRequest.options.payload) {
                                var n = t.state.currentUseBitsRequest.options.payload,
                                    r = n.bitsBalance,
                                    o = n.extensionItemLabel,
                                    i = n.extensionName,
                                    a = t.state.currentUseBitsRequest.options.payload.bitsRequired;
                                void 0 === a && (a = 0), e = E.createElement(F, {
                                    bitsBalance: r,
                                    cost: a,
                                    extensionItemLabel: o,
                                    extensionName: i,
                                    userID: t.props.loginID,
                                    onClose: t.cancelUseBits,
                                    onConfirm: t.confirmUseBits
                                })
                            }
                            return E.createElement(h.a, {
                                "data-test-selector": ce.UseBitsConfirmationToggleBalloonWrapper,
                                ref: t.saveUseBitsConfirmationBalloonRef,
                                onToggle: t.onToggleUseBitsConfirmationBalloon
                            }, E.createElement("span", null), E.createElement(N.u, {
                                direction: N.v.TopRight,
                                size: N.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, e))
                        }, t.onTestExtensionAccepted = function() {
                            t.setState({
                                testExtensionAccepted: !0
                            })
                        }, t.getCurrentMedium = function() {
                            if (t.props.isPopout) return T.PageviewMedium.ExtensionPage;
                            switch (t.props.mode) {
                                case p.ExtensionMode.Dashboard:
                                    return T.PageviewMedium.DashboardLive;
                                case p.ExtensionMode.Config:
                                    return T.PageviewMedium.ExtensionConfiguration;
                                case p.ExtensionMode.Viewer:
                            }
                            return T.PageviewMedium.Channel
                        }, t.subscribeFrameEvents = function() {
                            t.extensionFrameAPI && (t.extensionFrameAPI.on(p.ExtensionFrameEvents.ShowBitsBalance, t.onShowBitsBalance), t.extensionFrameAPI.on(p.ExtensionFrameEvents.ShowUseBitsSuccess, t.onShowUseBitsSuccess), t.extensionFrameAPI.on(p.ExtensionFrameEvents.IdentityLinked, t.onIdentityLinked), t.extensionFrameAPI.on(p.ExtensionFrameEvents.ExtensionFrameLoaded, t.onExtensionLoaded), t.extensionFrameAPI.on(p.ExtensionFrameEvents.RequestModal, t.onModalRequested))
                        }, t.unsubscribeFrameEvents = function() {
                            t.extensionFrameAPI && (t.extensionFrameAPI.off(p.ExtensionFrameEvents.ShowBitsBalance, t.onShowBitsBalance), t.extensionFrameAPI.off(p.ExtensionFrameEvents.ShowUseBitsSuccess, t.onShowUseBitsSuccess), t.extensionFrameAPI.off(p.ExtensionFrameEvents.IdentityLinked, t.onIdentityLinked), t.extensionFrameAPI.off(p.ExtensionFrameEvents.ExtensionFrameLoaded, t.onExtensionLoaded), t.extensionFrameAPI.off(p.ExtensionFrameEvents.RequestModal, t.onModalRequested))
                        }, t.getPopoutHeight = function() {
                            var e = 300;
                            return t.extension.views.panel && (e = t.extension.views.panel.height), e + pe
                        }, t.getExtensionPopoutUrl = function() {
                            var e = t.props.installation.activationConfig,
                                n = t.extension.clientId + "-" + t.extension.version;
                            t.extension.state === p.ExtensionState.Released && (n = t.extension.clientId);
                            var r = "/popout/" + t.props.channelName + "/extensions/" + n + "/" + e.anchor;
                            return t.props.mode !== p.ExtensionMode.Viewer && (r = r + "/" + t.props.mode), r
                        }, t.onExtensionPopoutClosed = function() {
                            if (!t.state.popoutRestoreIntentTracked) {
                                var e = t.props.installation.activationConfig;
                                Object(H.f)({
                                    extensionID: t.extension.clientId,
                                    extensionVersion: t.extension.version,
                                    anchor: e.anchor,
                                    mode: t.props.mode,
                                    loginID: t.props.loginID,
                                    channelID: t.props.channelID
                                }), t.setState({
                                    popoutRestoreIntentTracked: !0
                                })
                            }
                            if (t.props.onExtensionPopoutClosed) {
                                var n = t.extension,
                                    r = n.id,
                                    o = n.version;
                                t.props.onExtensionPopoutClosed(r, o)
                            }
                        }, t.onExtensionPopout = function() {
                            var e = t.props.installation.activationConfig;
                            Object(H.g)({
                                extensionID: t.extension.clientId,
                                extensionVersion: t.extension.version,
                                anchor: e.anchor,
                                mode: t.props.mode,
                                loginID: t.props.loginID,
                                channelID: t.props.channelID
                            });
                            var n = "width=320,height=" + t.getPopoutHeight() + ",resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no",
                                r = window.open(t.getExtensionPopoutUrl(), "_blank", n);
                            if (r && (t.onExtensionPopoutClosed && Object(g.a)(r, t.onExtensionPopoutClosed), r.opener = null), t.props.onExtensionPoppedOut) {
                                var o = t.extension,
                                    i = o.id,
                                    a = o.version;
                                t.props.onExtensionPoppedOut(i, a, r)
                            }
                        }, t.onFollowRequested = function(e, n, r) {
                            t.setState({
                                currentFollowRequest: {
                                    options: e,
                                    defaultResult: r,
                                    notifications: !0,
                                    onResult: n
                                }
                            }), t.followConfirmationBalloon.toggleBalloon(!0)
                        }, t.onLoginRequested = function(e, n) {
                            t.onDismissLoginPrompt = function() {
                                e && void 0 !== n && e(n), t.featureNeedsAuthBalloon.toggleBalloon(!1)
                            }, t.featureNeedsAuthBalloon.toggleBalloon(!0)
                        }, t.confirmFollow = function() {
                            null !== t.state.currentFollowRequest && (t.state.currentFollowRequest.onResult({
                                didFollow: !0,
                                notifications: t.state.currentFollowRequest.notifications
                            }), t.setState({
                                currentFollowRequest: null
                            }), t.followConfirmationBalloon.toggleBalloon(!1))
                        }, t.cancelFollow = function() {
                            if (null === t.state.currentFollowRequest) return null;
                            t.state.currentFollowRequest.onResult(t.state.currentFollowRequest.defaultResult), t.setState({
                                currentFollowRequest: null
                            })
                        }, t.onUseBitsRequested = function(e, n, r) {
                            t.setState({
                                currentUseBitsRequest: {
                                    options: e,
                                    defaultResult: r,
                                    onResult: n
                                }
                            }), t.useBitsConfirmationBalloon.toggleBalloon(!0)
                        }, t.confirmUseBits = function() {
                            if (null === t.state.currentUseBitsRequest) return Promise.reject("no Bits request");
                            var e = function() {
                                t.useBitsConfirmationBalloon.toggleBalloon(!1), t.setState({
                                    currentUseBitsRequest: null
                                })
                            };
                            return t.state.currentUseBitsRequest.onResult({
                                didConfirm: !0,
                                didUseBits: !0
                            }).then(function(t) {
                                return e(), t
                            }).catch(function() {
                                return e(), Promise.reject("error using bits in extension")
                            })
                        }, t.cancelUseBits = function() {
                            if (null === t.state.currentUseBitsRequest) return null;
                            t.state.currentUseBitsRequest.onResult(t.state.currentUseBitsRequest.defaultResult), t.setState({
                                currentUseBitsRequest: null
                            })
                        }, t.saveExtensionAPI = function(e) {
                            t.unsubscribeFrameEvents(), t.extensionFrameAPI = e, t.subscribeFrameEvents()
                        }, t.saveFollowConfirmationBalloonRef = function(e) {
                            t.followConfirmationBalloon = e
                        }, t.saveFeatureNeedsAuthBalloonRef = function(e) {
                            t.featureNeedsAuthBalloon = e
                        }, t.saveUseBitsConfirmationBalloonRef = function(e) {
                            t.useBitsConfirmationBalloon = e
                        }, t.onToggleUseBitsConfirmationBalloon = function(e) {
                            e && null !== t.state.currentUseBitsRequest && t.state.currentUseBitsRequest.onResult({
                                didConfirm: !1,
                                didUseBits: !1
                            })
                        }, t.onExtensionLoaded = function() {
                            t.props.onExtensionLoaded && t.props.onExtensionLoaded()
                        }, t.onIdentityLinked = function(e, n) {
                            t.setState({
                                isLinked: e,
                                isLinkEnabled: n
                            })
                        }, t.onLinkIdentity = function() {
                            t.extensionFrameAPI.linkIdentity()
                        }, t.onUnlinkIdentity = function() {
                            t.extensionFrameAPI.unlinkIdentity()
                        }, t.onIdentityLinkDialogToggle = function(e) {
                            t.setState({
                                isIdentityLinkOpen: !e
                            })
                        }, t.cancelPurchase = function() {
                            t.setState({
                                purchaseIntent: null
                            })
                        }, t.renderBitsBalanceUI = function() {
                            var e = t.state && t.state.bitsBalance;
                            if (null !== e) {
                                var n = e.showSuccessText;
                                return t.hideBitsBalanceTimeout && (clearTimeout(t.hideBitsBalanceTimeout), t.hideBitsBalanceTimeout = null, t.startHideBitsBalanceTimer()), E.createElement(Z, {
                                    showSuccessText: n,
                                    startTimer: t.startHideBitsBalanceTimer,
                                    channelID: t.props.channelID,
                                    userID: t.props.loginID
                                })
                            }
                        }, t.startHideBitsBalanceTimer = function() {
                            t.hideBitsBalanceTimeout || (t.hideBitsBalanceTimeout = setTimeout(t.hideBitsBalance, de))
                        }, t.hideBitsBalance = function() {
                            t.hideBitsBalanceTimeout = null, t.setState({
                                bitsBalance: null
                            })
                        }, t.onShowBitsBalance = function() {
                            t.setState({
                                bitsBalance: {
                                    showSuccessText: !1
                                }
                            })
                        }, t.onShowUseBitsSuccess = function() {
                            t.setState({
                                bitsBalance: {
                                    showSuccessText: !0
                                }
                            })
                        }, t.onBeginPurchase = function(e, n) {
                            t.setState({
                                purchaseIntent: {
                                    payload: e,
                                    makePurchase: n
                                }
                            })
                        }, t.onNotificationsChanged = function(e) {
                            var n = t.state.currentFollowRequest;
                            null !== n && t.setState({
                                currentFollowRequest: r.__assign({}, n, {
                                    notifications: e.currentTarget.checked
                                })
                            })
                        }, t.onModalRequested = function(e) {
                            switch (e.action) {
                                case p.FunctionAction.FollowAction:
                                    var n = e,
                                        r = n.options;
                                    t.onFollowRequested(r, n.resultCallback, n.defaultResult);
                                    break;
                                case p.FunctionAction.LoginRequest:
                                    t.featureNeedsAuthBalloon && t.onLoginRequested(e.resultCallback, e.defaultResult);
                                    break;
                                case p.FunctionAction.UseBits:
                                    var o = e,
                                        i = o.options;
                                    t.onUseBitsRequested(i, o.resultCallback, o.defaultResult);
                                    break;
                                case p.FunctionAction.IdShareRequest:
                                    t.setState({
                                        isIdentityLinkOpen: !0
                                    })
                            }
                        }, t.handleReportExtensionClick = function() {
                            var e = t.extension,
                                n = e.id,
                                r = e.version,
                                o = e.name;
                            t.props.isLoggedIn ? t.props.showReportExtensionModal({
                                reportContext: {
                                    contentType: _.N.EXTENSION_REPORT,
                                    contentID: n + "-" + r,
                                    targetUserID: t.props.channelID
                                },
                                title: Object(f.d)("Report {extensionName}", {
                                    extensionName: o
                                }, "ReportExtensionModal")
                            }) : t.props.promptLogin()
                        }, t.dismissLoginPrompt = function() {
                            t.onDismissLoginPrompt && t.onDismissLoginPrompt(), t.onDismissLoginPrompt = null
                        }, t.trackImpression = function() {
                            if (t.props.panel) {
                                var e = t.props.panel.id;
                                e && Object(X.a)(T.SpadeEventType.PanelImpression, {
                                    panelID: e,
                                    channelID: t.props.channelID,
                                    panelType: t.props.panel.type
                                })
                            }
                        }, t
                    }
                    return r.__extends(t, e), Object.defineProperty(t.prototype, "extension", {
                        get: function() {
                            return this.props.installation.extension
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.componentDidMount = function() {
                        this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                    }, t.prototype.componentDidUpdate = function(e) {
                        !1 === e.isFramePoppedOut && !0 === this.props.isFramePoppedOut && this.setState({
                            popoutRestoreIntentTracked: !1
                        })
                    }, t.prototype.render = function() {
                        var e, t = Object(f.d)("More Info", "ExtensionPanel"),
                            n = Object(f.d)("Report Extension", "ExtensionPanel"),
                            r = Object(G.d)(this.extension.id, this.extension.version) + "?tt_medium=" + this.getCurrentMedium() + "&tt_content=" + T.PageviewContent.ExtensionPanel,
                            o = d(this.props.className || "extension-panel", ((e = {})["extension-panel__popout"] = this.props.isPopout, e)),
                            i = this.props.isFramePoppedOut ? E.createElement(J, {
                                extension: this.extension,
                                onExtensionShowClicked: this.onExtensionPopoutClosed
                            }) : this.renderExtensionFrame();
                        return E.createElement(N.Xa, {
                            className: o,
                            margin: {
                                bottom: 2,
                                right: 2
                            },
                            "data-test-selector": ce.ExtensionPanel
                        }, i, E.createElement(N.Eb, {
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0,
                            flexDirection: N.Aa.Column,
                            display: N.X.Flex
                        }, E.createElement(N.Eb, {
                            display: N.X.Flex,
                            alignItems: N.f.Center
                        }, E.createElement(N.Xa, {
                            flexGrow: 1,
                            margin: {
                                x: 1
                            }
                        }, E.createElement("a", {
                            href: r,
                            target: "_blank",
                            "data-test-selector": ce.ExtensionDetailsLink
                        }, this.extension.name)), this.props.isFramePoppedOut || this.props.isPopout ? null : E.createElement(ie, {
                            "data-test-selector": ce.PopoutButton,
                            onClick: this.onExtensionPopout
                        }), E.createElement(le, {
                            isPopout: this.props.isPopout
                        }), E.createElement(re, {
                            extension: this.extension,
                            isDialogOpen: this.state.isIdentityLinkOpen,
                            onDialogToggle: this.onIdentityLinkDialogToggle,
                            isLinked: this.state.isLinked,
                            isLinkEnabled: this.state.isLinkEnabled,
                            onLinkIdentity: this.onLinkIdentity,
                            onUnlinkIdentity: this.onUnlinkIdentity
                        }), this.renderFollowConfirmation(), this.renderFeatureNeedsAuthBalloon(), this.renderUseBitsConfirmation(), E.createElement(h.a, null, E.createElement("span", null, E.createElement(N.Yb, {
                            label: t,
                            direction: N.ac.Top,
                            align: N.Zb.Right,
                            offsetX: ".6rem"
                        }, E.createElement(N.Xa, {
                            display: N.X.Flex,
                            alignItems: N.f.Center
                        }, E.createElement(N.A, {
                            "data-test-selector": ce.ExtensionDescriptionButton,
                            icon: N.tb.More,
                            ariaLabel: t
                        })))), E.createElement(N.u, {
                            direction: N.v.TopRight,
                            size: N.w.Medium,
                            offsetX: ".6rem"
                        }, E.createElement(N.Xa, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Between,
                            flexWrap: N.Ba.NoWrap
                        }, E.createElement(N.Eb, {
                            padding: 1,
                            flexShrink: 3
                        }, E.createElement(N.W, null, this.extension.summary)), E.createElement(N.Eb, {
                            borderLeft: !0,
                            margin: 1
                        }, E.createElement(N.A, {
                            "data-test-selector": ce.ExtensionReportButton,
                            ariaLabel: n,
                            icon: N.tb.ChatRiskFlag,
                            onClick: this.handleReportExtensionClick
                        })))))), this.renderBitsBalanceUI()))
                    }, t.prototype.purchaseUI = function() {
                        var e = this,
                            t = this.state && this.state.purchaseIntent;
                        if (null !== t) {
                            var n = this.state,
                                r = n.isLinked,
                                o = n.isLinkEnabled,
                                i = t,
                                a = i.payload,
                                s = i.makePurchase;
                            return E.createElement(ae, {
                                confirm: function() {
                                    s(), e.setState({
                                        purchaseIntent: null
                                    })
                                },
                                cancel: this.cancelPurchase,
                                isLinked: r,
                                isLinkEnabled: o,
                                purchaseIntentPayload: a,
                                isLoggedIn: this.props.isLoggedIn
                            })
                        }
                    }, t
                }(E.Component),
                me = Object(m.compose)(Object(z.a)("ExtensionPanel", {
                    pixels: 100
                }))(Ee);

            function fe(e) {
                return {
                    isLoggedIn: Object(c.f)(e),
                    languageCode: Object(c.b)(e),
                    locale: e.session.locale
                }
            }

            function he(e) {
                return Object(i.bindActionCreators)({
                    promptLogin: function() {
                        return Object(l.e)(a.a.ReportHoster)
                    },
                    showReportExtensionModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(s.d)(u.a, t)
                    }
                }, e)
            }
            var ge = Object(o.connect)(fe, he)(me);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return fe
            }), n.d(t, !1, function() {
                return he
            }), n.d(t, "a", function() {
                return ge
            })
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("cr+I"),
                i = n("q1tI"),
                a = n("wIs1"),
                s = n("/7QA");

            function l(e) {
                return function(t) {
                    var n = function(n) {
                        function a(t) {
                            var o = n.call(this, t) || this;
                            return o.tracked = !1, o.referenceTracking = {}, o.trackPageview = function() {
                                if (!(o.tracked || e.skip && e.skip(o.props))) {
                                    o.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(o.props) : e.properties && (t = r.__assign({}, e.properties));
                                    var n = r.__assign({}, o.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var i = o.referenceTracking,
                                        a = i.content,
                                        l = i.medium,
                                        c = i.content_index,
                                        u = i.email_id;
                                    s.p.tracking.trackPageview(r.__assign({
                                        content: a,
                                        medium: l,
                                        content_index: c,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), o
                        }
                        return r.__extends(a, n), a.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, a.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, a.prototype.render = function() {
                            return i.createElement(t, r.__assign({}, this.props))
                        }, a.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? o.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var r = "",
                                    i = o.stringify(t);
                                i.length > 0 && (r = "?" + i), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                            return n
                        }, a
                    }(i.Component);
                    return Object(a.a)(n)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        VSaV: function(e, t) {},
        VeT4: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("/7QA"),
                i = n("/0dD"),
                a = n("5zXJ"),
                s = n("XmgI"),
                l = n("4h+t"),
                c = n("x1M1");
            n("5cw2");

            function u(e) {
                var t, n = Object(o.d)("{bitsAmount} Bits", {
                    bitsAmount: e.count.toString()
                }, "Bits--BitsCount");
                if (e.withImage) {
                    var u = e.bitsConfig && e.bitsConfig.indexedActions[a.l];
                    u || (u = Object(l.b)());
                    var d = void 0;
                    if (d = 0 === e.count ? u.orderedTiers.find(function(e) {
                            return e.bits === a.m
                        }) : u.orderedTiers.find(function(t) {
                            return t.bits <= e.count
                        })) {
                        var p = Object(s.d)(d, void 0, e.animated);
                        return void 0 !== e.themeOverride && (e.themeOverride === i.a.Light ? p.dark = p.light : p.light = p.dark), t = r.createElement(c.a, {
                            className: "bits-count--img",
                            sources: p
                        }), r.createElement("strong", {
                            className: "bits-count",
                            "data-a-target": "bits-count"
                        }, r.createElement("span", null, t, " ", e.withText ? n : ""))
                    }
                }
                return r.createElement("strong", {
                    className: "bits-count",
                    "data-a-target": "bits-count"
                }, r.createElement("span", null, n))
            }
            n.d(t, "a", function() {
                return u
            })
        },
        WQCf: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return u
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "g", function() {
                return o
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            });
            var r, o, i, a, s, l, c, u = {
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
                    MultiviewChanletUpdate: "multiview-chanlet-update",
                    MysteryGift: "channel-sub-gifts-v1",
                    OnsiteNotifications: "onsite-notifications",
                    PayoutOnboardingEvents: "payout-onboarding-events",
                    Presence: "presence",
                    PurchaseFulfillmentEvents: "purchase-fulfillment-events",
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
                d = {
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
                    MultiviewChanletUpdate: "chanlet",
                    MysteryGiftPurchase: "mystery-gift-purchase",
                    OnsiteNotificationCreate: "create-notification",
                    OnsiteNotificationDelete: "delete-notification",
                    OnsiteNotificationsRead: "read-notifications",
                    OnsiteNotificationSummaryUpdate: "update-summary",
                    OnsiteNotificationUpdate: "update-notification",
                    PayoutOnboardingEvent: "payout-onboarding-event",
                    Presence: "presence",
                    PresenceSettings: "settings",
                    PurchaseFulfillmentEvents: "purchase_fulfillment_events",
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
                    UserBitsFirstPurchase: "first_bits_purchase",
                    UserCampaignProgressEvent: "progress",
                    UserCampaignRewardEvent: "reward",
                    UserCrateEvent: "crate-event",
                    UserGiftEvent: "gift-event",
                    UserMention: "user_mention",
                    UserPropertiesUpdate: "user_properties_update",
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
                p = {
                    Accepted: "accepted",
                    Requested: "requested",
                    Removed: "removed",
                    SelfAccepted: "self_accepted",
                    SelfRemoved: "self_removed",
                    SelfRequested: "self_requested"
                };
            ! function(e) {
                e.AddBlockedTerm = "add_blocked_term", e.AddPermittedTerm = "add_permitted_term", e.AutoModEnabled = "automod_enabled", e.AutoModRejected = "automod_rejected", e.DeniedAutoModMessage = "denied_automod_message", e.ApprovedAutoModMessage = "approved_automod_message", e.AutoModCheerRejected = "automod_cheer_rejected", e.Ban = "ban", e.Clear = "clear", e.Delete = "delete", e.DeleteBlockedTerm = "delete_blocked_term", e.DeletePermittedTerm = "delete_permitted_term", e.EmoteOnly = "emoteonly", e.EmoteOnlyOff = "emoteonlyoff", e.FollowersOnly = "followers", e.FollowersOnlyOff = "followersoff", e.Host = "host", e.Mod = "mod", e.ModifiedAutoModProperties = "modified_automod_properties", e.R9kBeta = "r9kbeta", e.R9kBetaOff = "r9kbetaoff", e.Raid = "raid", e.Slow = "slow", e.SlowOff = "slowoff", e.SubsBeta = "subsbeta", e.SubscribersOnly = "subscribers", e.SubscribersOnlyOff = "subscribersoff", e.Timeout = "timeout", e.Unban = "unban", e.Unhost = "unhost", e.Unmod = "unmod", e.Unraid = "unraid", e.Untimeout = "untimeout"
            }(r || (r = {})),
            function(e) {
                e.AutoModMessageRejected = "automod_message_rejected", e.AutoModMessageApproved = "automod_message_approved", e.AutoModMessageDenied = "automod_message_denied", e.AutoModCheerDenied = "automod_cheer_message_denied", e.AutoModCheerTimeout = "automod_cheer_message_timeout"
            }(o || (o = {})),
            function(e) {
                e.Archive = "archive", e.Highlight = "highlight", e.Upload = "upload", e.Premiere = "premiere", e.Rerun = "rerun", e.WatchPartyPremiere = "watch_party_premiere", e.WatchPartyRerun = "watch_party_rerun"
            }(i || (i = {})),
            function(e) {
                e.Private = "private", e.Public = "public"
            }(a || (a = {})),
            function(e) {
                e.Pending = "PENDING", e.Live = "LIVE", e.Ended = "ENDED"
            }(s || (s = {})),
            function(e) {
                e.Success = "fulfilled", e.Failure = "failed"
            }(l || (l = {})),
            function(e) {
                e.Subs = "subs"
            }(c || (c = {}))
        },
        XKWF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            });
            var r, o = n("vRsq");

            function i(e) {
                switch (e.toUpperCase()) {
                    case r.Popular:
                        return r.Popular;
                    case r.Newest:
                        return r.Newest;
                    default:
                        return null
                }
            }

            function a(e) {
                switch (e) {
                    case o.f.Newest:
                        return r.Newest;
                    case o.f.Popular:
                        return r.Popular;
                    default:
                        return e
                }
            }! function(e) {
                e.Popular = "VIEWS", e.Newest = "TIME"
            }(r || (r = {}))
        },
        XmgI: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "d", function() {
                return d
            });
            var r = n("5zXJ"),
                o = n("RcPG"),
                i = {
                    indexedActions: {},
                    orderedActions: []
                },
                a = /^((?:[A-Za-z0-9]+)(?:[A-Za-z]))([\d]+)$/;

            function s(e, t, n) {
                void 0 === n && (n = !0);
                var r = [],
                    i = e.split(/\s+/);
                return i.forEach(function(e, a) {
                    var s = l(e, t, n);
                    if (s) r.push(s);
                    else {
                        var c = r.length && r[r.length - 1],
                            u = "";
                        if (a < i.length - 1 && (u = " "), c && c.type === o.a.Text) c.content += e + u;
                        else {
                            var d = "";
                            a && (d = " "), r.push({
                                type: o.a.Text,
                                content: d + e + u
                            })
                        }
                    }
                }), r
            }

            function l(e, t, n) {
                void 0 === n && (n = !0);
                var i = e.match(a);
                if (!i) return null;
                var s = i[1].toLowerCase(),
                    l = Number(i[2]),
                    c = t.indexedActions[s];
                if (c && (c.type !== r.f || n)) {
                    var u = c.orderedTiers.find(function(e) {
                        return e.bits <= l
                    });
                    if (!u && l && (u = c.orderedTiers[0]), u) return {
                        type: o.a.Emote,
                        content: {
                            images: d(u),
                            alt: c.prefix,
                            cheerAmount: l,
                            cheerColor: u.color
                        }
                    }
                }
                return null
            }

            function c(e, t) {
                var n = function(e) {
                        var t = new Map;
                        return e.orderedActions.forEach(function(e) {
                            e.campaign && t.set(e.prefix, e.campaign)
                        }), t
                    }(t),
                    o = new Map;
                e.forEach(function(e, t) {
                    if (e.alt && n.has(e.alt))
                        if (o.has(e.alt)) {
                            (r = o.get(e.alt)) && (r.total += e.cheerAmount || 0, r.lastAppearance = t)
                        } else {
                            var r = {
                                total: e.cheerAmount || 0,
                                lastAppearance: t,
                                campaign: n.get(e.alt)
                            };
                            o.set(e.alt, r)
                        }
                });
                var i = 1;
                return o.forEach(function(n) {
                    var o = 0;
                    n.campaign.thresholds.forEach(function(e) {
                        n.total >= e.minimumBits && (o = e.matchedPercent)
                    });
                    var a = Math.trunc(n.total * o);
                    if (a > 0) {
                        var s = l(r.t + a, t, !0);
                        s && e.splice(n.lastAppearance + i++, 0, s.content)
                    }
                }), e
            }

            function u(e, t) {
                return s(e, t, !0).reduce(function(e, t) {
                    return t.type === o.a.Emote && e.push(t.content), e
                }, []).some(function(e) {
                    var n = t.orderedActions.find(function(t) {
                        return !!e.alt && e.alt === t.prefix
                    });
                    return !!n && n.type === r.f
                })
            }

            function d(e, t, n) {
                var r, o;
                void 0 === n && (n = !0);
                var i = n ? "animated" : "static";
                return t ? {
                    themed: !0,
                    dark: (r = {}, r[t + "x"] = e.indexedImages.DARK[i].get(t), r),
                    light: (o = {}, o[t + "x"] = e.indexedImages.LIGHT[i].get(t), o)
                } : {
                    themed: !0,
                    dark: {
                        "1x": e.indexedImages.DARK[i].get(1),
                        "1.5x": e.indexedImages.DARK[i].get(1.5),
                        "2x": e.indexedImages.DARK[i].get(2),
                        "3x": e.indexedImages.DARK[i].get(3),
                        "4x": e.indexedImages.DARK[i].get(4)
                    },
                    light: {
                        "1x": e.indexedImages.LIGHT[i].get(1),
                        "1.5x": e.indexedImages.LIGHT[i].get(1.5),
                        "2x": e.indexedImages.LIGHT[i].get(2),
                        "3x": e.indexedImages.LIGHT[i].get(3),
                        "4x": e.indexedImages.LIGHT[i].get(4)
                    }
                }
            }
        },
        YyE3: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("1hWM"),
                i = n("lBSt"),
                a = n("q1tI"),
                s = n("/7QA"),
                l = n("g/rS");

            function c(e) {
                return function(t) {
                    return function(n) {
                        function c() {
                            var t = null !== n && n.apply(this, arguments) || this;
                            return t.state = {
                                error: null,
                                installedExtensionsData: null,
                                loading: !1
                            }, t.fetchExtensions = function(n) {
                                return r.__awaiter(t, void 0, void 0, function() {
                                    var t, a;
                                    return r.__generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                this.setState({
                                                    loading: !0
                                                }), r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 3, , 4]), n = n || e.options(this.props).variables.channelID, [4, o.extensionService.getInstalledExtensions(n)];
                                            case 2:
                                                return t = r.sent(), [3, 4];
                                            case 3:
                                                return r.sent(), this.setState({
                                                    loading: !1,
                                                    error: new Error("Failed to load data.")
                                                }), [2];
                                            case 4:
                                                return a = Object(i.extensionInstallationsFromRest)(t), s.p.store.dispatch(Object(l.d)(n, a)), this.setState({
                                                    error: null,
                                                    installedExtensionsData: a,
                                                    loading: !1
                                                }), [2]
                                        }
                                    })
                                })
                            }, t.onShouldFetchExtensions = function() {
                                t.fetchExtensions(t.currentChannelID)
                            }, t.onDestroyExtension = function(e) {
                                if (s.p.store.dispatch(Object(l.c)(t.currentChannelID, e)), t.state.installedExtensionsData) {
                                    var n = t.state.installedExtensionsData.filter(function(t) {
                                        return t.extension.id !== e
                                    });
                                    t.setState({
                                        installedExtensionsData: n
                                    })
                                }
                            }, t
                        }
                        return r.__extends(c, n), Object.defineProperty(c.prototype, "currentChannelID", {
                            get: function() {
                                return e.options(this.props).variables.channelID
                            },
                            enumerable: !0,
                            configurable: !0
                        }), c.prototype.componentDidMount = function() {
                            if (!this.shouldSkip(this.props)) {
                                var e = this.currentChannelID;
                                this.fetchExtensions(e), o.extensionService.subscribeToExtensionControl(e, {
                                    onDestroyExtension: this.onDestroyExtension,
                                    onShouldFetchExtensions: this.onShouldFetchExtensions
                                })
                            }
                        }, c.prototype.componentWillUnmount = function() {
                            o.extensionService.unsubscribeFromExtensionControl(this.currentChannelID)
                        }, c.prototype.componentDidUpdate = function(t) {
                            if (!this.shouldSkip(this.props)) {
                                var n = e.options(t).variables.channelID,
                                    r = this.currentChannelID,
                                    i = n !== r,
                                    a = null !== this.state.installedExtensionsData || null !== this.state.error || this.state.loading;
                                !i && a || (this.setState({
                                    installedExtensionsData: null
                                }), this.fetchExtensions(r), o.extensionService.unsubscribeFromExtensionControl(n), o.extensionService.subscribeToExtensionControl(r, {
                                    onDestroyExtension: this.onDestroyExtension,
                                    onShouldFetchExtensions: this.onShouldFetchExtensions
                                }))
                            }
                        }, c.prototype.render = function() {
                            var n;
                            if (this.shouldSkip(this.props)) return a.createElement(t, r.__assign({}, this.props));
                            var o = ((n = {})[e.name || "data"] = {
                                loading: this.state.loading,
                                error: this.state.error,
                                refetch: this.fetchExtensions,
                                installedExtensions: this.state.installedExtensionsData
                            }, n);
                            return a.createElement(t, r.__assign({}, this.props, o))
                        }, c.prototype.shouldSkip = function(t) {
                            return void 0 !== e.skip && ("function" == typeof e.skip ? e.skip(t) : e.skip)
                        }, c
                    }(a.Component)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        bVvr: function(e, t, n) {},
        bq0i: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r, o = n("mrSG"),
                i = n("q1tI"),
                a = n("f00E"),
                s = n("Ue10");
            ! function(e) {
                e.BalloonInsideClickDetector = "balloon-inside-click-detector", e.MouseEnterDetector = "toggle-balloon-wrapper__mouse-enter-detector"
            }(r || (r = {}));
            var l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(a.a)(), t.handleButtonClick = function(e) {
                        t.props.preventDefault && e.preventDefault(), t.props.stopPropagation && e.stopPropagation(), t.setState(function(e) {
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
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.openByDefault && document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.state.showBalloon !== t.showBalloon && (t.showBalloon ? document.addEventListener("click", this.handleGlobalClick, !0) : document.removeEventListener("click", this.handleGlobalClick, !0))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = i.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var t = e[0],
                        n = e[1],
                        a = i.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        l = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (l = i.cloneElement(n, {
                        show: this.state.showBalloon
                    }), this.props.hideBalloonOnInsideClick && (l = i.createElement("div", {
                        "data-test-selector": r.BalloonInsideClickDetector,
                        onClick: this.handleInsideBalloonClick
                    }, l)));
                    var c = a;
                    return this.props.tooltipProps && (c = i.createElement(s.Yb, o.__assign({}, this.props.tooltipProps), a)), i.createElement(s.Xa, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: s.jb.Relative
                    }, i.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.handleMouseEnter,
                        "data-test-selector": r.MouseEnterDetector
                    }, c), l)
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
            }(i.Component)
        },
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("o4DC");

            function o(e) {
                return e && Object(r.c)(e) || ""
            }
        },
        dAHa: function(e, t, n) {
            "use strict";
            var r, o, i = n("mrSG"),
                a = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                u = n("yR8l"),
                d = n("BhFH"),
                p = n("iS14"),
                E = n("geRD"),
                m = n("f00E"),
                f = n("D7An"),
                h = n("DMoW"),
                g = n("2xye"),
                _ = n("GnwI"),
                T = n("QVaV"),
                R = n("Ue10"),
                I = (n("MPK0"), "report-wizard-block"),
                v = "report-wizard-unblock",
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return a.createElement(R.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": I
                            }, a.createElement(R.Xa, {
                                display: R.X.Flex,
                                alignItems: R.f.Center
                            }, a.createElement(R.sb, {
                                type: R.ub.Brand,
                                asset: R.tb.Ban
                            }), a.createElement(R.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return a.createElement(R.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: R.X.Flex,
                                alignItems: R.f.Center
                            }, a.createElement(R.sb, {
                                type: R.ub.Success,
                                asset: R.tb.FollowCheck
                            }), a.createElement(R.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, a.createElement(R.W, {
                                className: "block-user__success",
                                type: R.Vb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), a.createElement(R.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": v
                            }, a.createElement(R.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t.displayName = function() {
                            var e = t.props.targetUser.displayName,
                                n = t.props.targetUser.login;
                            return e || (n || "")
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(T.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return a.createElement(R.Eb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, a.createElement(R.Xa, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement(R.Eb, {
                            color: R.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(R.ec, {
                            baseFontSize: R.Ca.Size6
                        }, a.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement("ul", null, a.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), a.createElement(R.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(a.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(r || (r = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(o || (o = {}));
            var O, C = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(c.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                y = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: o.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: o.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: o.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: o.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: o.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: o.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: o.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: o.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: o.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: o.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: o.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: o.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: o.Link
                    },
                    messaging_general: {
                        getTitle: C.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: C.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: r.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: r.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: r.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: r.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(c.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(c.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: r.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(c.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(c.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(c.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: r.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(c.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(c.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: r.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(c.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: r.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(c.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: r.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: r.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: r.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: r.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: r.Miscategorized
                    },
                    video_general: {
                        getTitle: C.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: r.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    abusiveViolence: {
                        getTitle: C.abusiveViolence,
                        value: "threatening violence",
                        reportReason: r.Harm
                    },
                    commitingViolence: {
                        getTitle: C.commitingViolence,
                        value: "committing violence",
                        reportReason: r.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: r.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(c.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: r.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(c.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: r.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(c.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: r.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(c.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: r.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(c.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: r.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: r.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(c.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: r.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(c.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: r.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(c.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: r.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(c.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: r.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(c.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: r.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(c.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(c.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: r.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(c.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: r.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(c.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: r.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: C.me,
                        value: "impersonating me",
                        reportReason: r.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: r.Impersonation
                    },
                    impersonation_other: {
                        getTitle: C.someoneElse,
                        value: "impersonating someone else",
                        reportReason: r.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: r.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(c.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: h.N.WHISPER_REPORT
                    },
                    username: {
                        getTitle: function() {
                            return Object(c.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: r.OffensiveUsername
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(c.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(c.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(c.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(c.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(c.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(c.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(c.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(c.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(c.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(c.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: r.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: C.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: C.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: C.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: r.Harm
                    },
                    external_commitingViolence: {
                        getTitle: C.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: r.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(c.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(c.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: r.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(c.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(c.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                r = n.name,
                                o = n.value;
                            t.props.onChangeText(r, o)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    r = t.props.currentCard.items[n];
                                t.props.onChangeRadio(r)
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? a.createElement(R.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return a.createElement(R.Xa, {
                            className: "reporting-wizard-card"
                        }, e, a.createElement(R.Ea, {
                            label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                        }, this.renderCardItems()))
                    }, t.prototype.renderCardItems = function() {
                        var e = this,
                            t = this.props.currentCard,
                            n = [];
                        return t.items && t.type && (n = t.items.filter(function(e) {
                            return !!e
                        }).map(function(t, n) {
                            switch (t.type) {
                                case o.Text:
                                    return a.createElement(R.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case o.Link:
                                    return a.createElement(R.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(R.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, a.createElement(R.Xa, {
                                        display: R.X.Flex
                                    }, a.createElement(R.Xa, {
                                        display: R.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, a.createElement(R.sb, {
                                        asset: R.tb.Document
                                    })), t.getTitle())));
                                case o.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        i = t.required && (!r || !!r && 0 === r.trim().length);
                                    return a.createElement(R.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(R.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, a.createElement(R.Sb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && i,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case o.MultipleChoice:
                                default:
                                    return a.createElement(R.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, a.createElement(R.pb, {
                                        checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                        onChange: e.onSelect,
                                        label: t.getTitle(e.props.targetUser.displayName),
                                        "data-a-index": n,
                                        name: "card",
                                        value: t.value
                                    }))
                            }
                        })), n
                    }, t
                }(a.Component),
                A = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(O || (O = {}));
            var N, D, P, L = {
                    contentGeneral: function() {
                        return Object(c.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(c.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(c.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(c.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(c.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                M = {
                    report: function(e) {
                        return Object(c.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(c.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(c.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(c.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(c.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(c.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(c.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                U = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: M.thanks,
                    type: O.Info,
                    value: "end card"
                },
                k = {
                    socialMedia: i.__assign({}, U, {
                        items: [y.endBlurb_socialmedia]
                    }),
                    violence: i.__assign({}, U, {
                        items: [y.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: M.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [y.endLink_DMCA, y.endLink_trademark, y.endLink_devAgreement],
                        type: O.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: M.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [y.endLink_selfharm],
                        type: O.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: M.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [y.endLink_eventCoC],
                        value: "twitch event end",
                        type: O.Info
                    }
                },
                x = {
                    getTitle: M.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [y.video, y.whisper, y.chat, y.room, y.profile, y.username, y.report_other],
                    type: O.MultipleChoice,
                    value: "content type"
                },
                w = {
                    identifyUser: {
                        getTitle: M.reportVideo,
                        getLabel: L.identifyUser,
                        items: [y.video_streamer, y.video_someoneElse, y.video_chatSomeone],
                        type: O.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: M.reportVideo,
                        getLabel: L.contentGeneral,
                        items: [y.revealPersonalInfo, y.video_labeling, y.video_inactive, y.video_general, y.report_ip, y.violateDevAgreement, y.selfharm],
                        type: O.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: M.reportVideo,
                        getLabel: L.content,
                        items: [y.report_username, y.violence, y.abusive, y.cheating, y.scam, y.inappropriateContent, y.evasion, y.impersonation, y.underage, y.bitsViolation],
                        type: O.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                B = {
                    content: {
                        getTitle: M.reportMessage,
                        getLabel: L.contentGeneral,
                        items: [y.revealPersonalInfo, y.evasion, y.spam, y.maliciousRaid, y.report_username, y.messaging_general, y.selfharm],
                        type: O.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: M.reportMessage,
                        getLabel: L.content,
                        items: [y.report_emotes, y.violence, y.abusive, y.inappropriateContent, y.impersonation, y.underage, y.bitsViolation],
                        type: O.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                F = i.__assign({}, B.content, {
                    getDescription: function() {
                        return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                V = {
                    content: {
                        getTitle: M.reportProfile,
                        getLabel: L.contentGeneral,
                        items: [y.revealPersonalInfo, y.inappropriateBadge, y.inappropriateExtension, y.noModeration, y.profile_general, y.report_ip, y.violateDevAgreement, y.selfharm],
                        type: O.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: M.reportProfile,
                        getLabel: L.content,
                        items: [y.report_username, y.violence, y.abusive, y.scam, y.inappropriateContent, y.evasion, y.impersonation, y.underage, y.bitsViolation],
                        type: O.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                W = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: L.identifyUser,
                    items: [y.report_channelOwner, y.report_member],
                    value: "room report user",
                    type: O.MultipleChoice
                },
                j = {
                    getTitle: M.tellUsMore,
                    items: [y.input_description],
                    type: O.Confirm,
                    value: "tell us more"
                },
                G = {
                    banEvasion: i.__assign({}, j, {
                        items: [y.input_usernames, y.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: i.__assign({}, j, {
                        items: [y.input_link, y.input_connection, y.input_description],
                        nextCard: k.socialMedia,
                        value: "social media tell us more"
                    })
                },
                H = {
                    content: {
                        getTitle: M.reportAbusive,
                        getLabel: L.relevantStatements,
                        items: [y.hateSpeech, y.harassment, y.abusiveViolence, y.commitingViolence, y.swatting, y.personalInfo],
                        type: O.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [y.threat_me, y.threat_person, y.threat_group, y.threat_selfharm],
                        type: O.MultipleChoice,
                        value: "violence type"
                    }
                },
                z = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [y.location_onTwitch, y.location_anotherSite, y.location_TwitchEvent],
                        type: O.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: L.thisPersonIs,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [y.external_incitingRaids, y.external_threatening, y.external_harassment],
                        type: O.MultipleChoice,
                        nextCard: G.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: i.__assign({}, H.violence, {
                        items: [y.threat_me, y.threat_person, y.threat_group],
                        nextCard: G.socialMedia
                    }),
                    external_abusive: i.__assign({}, H.content, {
                        items: [y.hateSpeech, y.harassment, y.external_abusiveViolence, y.external_commitingViolence, y.swatting, y.personalInfo],
                        nextCard: G.socialMedia
                    })
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: L.contentGeneral,
                    items: [y.spam_bot, y.spam_scam, y.spam_repeated],
                    type: O.MultipleChoice,
                    value: "spam type"
                },
                Y = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: L.relevantStatements,
                    items: [y.inappropriate_game, y.gory, y.sexuallyViolent, y.childAnimal, y.pornographic, y.suggestive, y.nudity, y.other],
                    type: O.MultipleChoice,
                    value: "inappropriate content type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [y.evasion_chat, y.evasion_sitewide, y.evasion_messaging],
                    type: O.MultipleChoice,
                    nextCard: G.banEvasion
                },
                K = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(c.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [y.impersonation_me, y.impersonation_brand, y.impersonation_other],
                    type: O.MultipleChoice,
                    value: "impersonation type"
                },
                Q = x,
                Z = j,
                J = U,
                $ = {
                    video: w.identifyUser,
                    whisper: F,
                    chat: B.content,
                    profile: V.content,
                    room: W,
                    "somewhere else": z.identifyLocation,
                    streamer: w.content,
                    "someone else in video": w.content,
                    "someone in chat": B.content,
                    general_video: w.general,
                    general_messaging: B.general,
                    general_profile: V.general,
                    "channel owner": V.content,
                    "community member": B.content,
                    "on twitch": V.content,
                    "another site": z.externalSite,
                    "twitch event": k.twitchEvent,
                    "brigading/raids": G.socialMedia,
                    threatening: z.external_violence,
                    "hateful/harassing": z.external_abusive,
                    "external site; threatening violence": z.external_violence,
                    "external site; committing violence": z.external_violence,
                    "external site; scam": G.socialMedia,
                    "ban evasion": q,
                    spam: X,
                    hateful: H.content,
                    impersonation: K,
                    "violence/threats": H.violence,
                    "threatening violence": H.violence,
                    "committing violence": H.violence,
                    abusive: H.content,
                    "inappropriate content": Y,
                    "intellectual property": k.legal,
                    "violating developer agreement": k.legal
                },
                ee = {
                    selfharm: k.selfharm,
                    harm: k.violence,
                    other: J
                },
                te = {
                    CHANNEL_FEED_POST_REPORT: V.content,
                    COMMUNITY_REPORT: V.content,
                    CHAT_REPORT: B.content,
                    CLIP_REPORT: w.content,
                    EVENT_REPORT: V.content,
                    EXTENSION_REPORT: V.content,
                    LIVE_UP_REPORT: V.content,
                    ROOM_REPORT: W,
                    WHISPER_REPORT: F,
                    VOD_COMMENT_REPORT: B.content
                },
                ne = "report-wizard-back",
                re = "report-wizard-close",
                oe = "report-wizard-next",
                ie = "report-wizard-submit",
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || te[t.props.reportContentType] || Q,
                            prevCards: [],
                            currentSelection: null,
                            prevSelections: [],
                            displacedSelections: [],
                            userTextInput: {},
                            error: "",
                            reportReason: t.props.reportReason || "",
                            modalCloseTracked: !1,
                            targetUnknown: !1,
                            reportContext: t.props.reportContentType
                        }, t.renderPrimer = function() {
                            return a.createElement(R.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(R.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = re,
                                o = !1,
                                i = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case O.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, r = oe, o = !t.state.currentSelection;
                                    break;
                                case O.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, o = !t.state.userTextInput, r = ie
                            }
                            return a.createElement(R.Xa, null, i, a.createElement(R.z, {
                                onClick: n,
                                disabled: o,
                                "data-test-selector": r
                            }, a.createElement(R.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return a.createElement(R.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: R.X.InlineBlock
                            }, a.createElement(R.z, {
                                type: R.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": ne
                            }, a.createElement(R.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, Object(c.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(c.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(c.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(P.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    o = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    i = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    a = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || Z;
                                $[t.state.currentSelection.value] && (s = $[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === O.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: c ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: i,
                                    currentSelection: o || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: a
                                }, function() {
                                    return t.trackNavigation(D.Next, e.value)
                                })
                            }
                        }, t.createReportDescription = function() {
                            return "" + (t.state.reportContext !== t.props.reportContentType ? "report context: " + t.props.reportContentType + "\n\n" : "") + t.state.prevSelections.map(function(e) {
                                if (!e.omitFromDescription) return e.value
                            }).filter(function(e) {
                                return !!e
                            }).join(" > ") + "\n\n" + Object.keys(t.state.userTextInput).map(function(e) {
                                return e + ": " + t.state.userTextInput[e]
                            }).join("\n")
                        }, t.requiredInputsNonEmpty = function() {
                            if (t.state.currentCard.items) return 0 === t.state.currentCard.items.filter(function(e) {
                                if (e.type !== o.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    r = n && 0 === n.trim().length;
                                return !n || r
                            }).length
                        }, t.handleSubmit = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, o = this;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (i.sent(), this.props.submitStatus) {
                                                case A.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case A.a.Success:
                                                    r = J, ee[t] && (r = ee[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return o.trackNavigation(D.Submit)
                                                    });
                                                    break;
                                                case A.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case A.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(A.a.FormError), this.setState({
                                                error: e
                                            }), i.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, o, a = this;
                                return i.__generator(this, function(i) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, o = this.state.displacedSelections, this.state.currentSelection && (o = o.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: o,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return a.trackNavigation(D.Back, e.value)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var r = t.state.userTextInput;
                            r[e] = n, t.setState({
                                userTextInput: r
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var r = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (r = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: r
                                })
                            }
                        }, t.trackNavigation = function(e, n) {
                            t.props.trackAction(e, n, t.state.currentCard.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(P.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === O.Info && this.state.currentCard.blockPrompt ? a.createElement(b, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? a.createElement(R.Eb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === O.Info ? null : this.renderPrimer();
                        return a.createElement(R.Eb, {
                            className: "reporting-wizard",
                            display: R.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: R.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, a.createElement(R.W, {
                            bold: !0,
                            fontSize: R.Ca.Size4
                        }, this.getTitle()), n, a.createElement(R.Xa, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(S, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === A.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(a.Component),
                se = n("s8Ou"),
                le = n("0hI/");
            n.d(t, "c", function() {
                    return D
                }), n.d(t, "a", function() {
                    return P
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(N || (N = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(D || (D = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(P || (P = {}));
            var ce = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, o, a, s, l = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = r === h.N.WHISPER_REPORT ? r : this.props.reportContext.contentType, o = h.N[n], null === (a = {
                                                description: t,
                                                reason: e,
                                                content: o,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: A.a.UserError
                                        }), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(E.a)(a))];
                                    case 2:
                                        return i.sent(), this.setState({
                                            submitStatus: A.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(N.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = i.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: A.a.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.handleChildError = function(e) {
                        return n.setState({
                            submitStatus: e
                        })
                    }, n.handleClose = function() {
                        n.props.onClose && n.props.onClose(n.state.submitStatus, n.state.userBlocked)
                    }, n.onBlock = function() {
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, i.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, i.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(D.Open, void 0, e) : n.trackAction(N.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(D.Close, t, void 0, e) : n.trackAction(N.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, o) {
                        c.p.tracking.track(g.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === A.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: o,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        c.p.tracking.track(g.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === A.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var r = c.p.experiments.getAssignment(f.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: A.a.Unsubmitted,
                        showWizard: "yes" === r,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return a.createElement(R.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(R.W, {
                        fontSize: R.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return a.createElement(R.ib, {
                        lineCount: 3
                    });
                    if (this.props.data.targetUser) {
                        var e = {
                            onClose: this.handleClose,
                            onError: this.handleChildError,
                            onSubmit: this.handleSubmit,
                            reportContentType: this.props.reportContext.contentType,
                            submitStatus: this.state.submitStatus,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        };
                        return this.state.showWizard ? this.props.data.loading ? a.createElement(R.Za, null) : a.createElement(ae, i.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : a.createElement(A.b, i.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return a.createElement(R.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(R.W, {
                        fontSize: R.Ca.Size5
                    }, Object(c.d)("The user you are trying to report does not exist", "ReportUser")))
                }, Object.defineProperty(t.prototype, "userBlocked", {
                    get: function() {
                        var e = this;
                        return !!(this.props.data.currentUser && this.props.data.currentUser.blockedUsers && this.props.data.currentUser.blockedUsers.find(function(t) {
                            return !!t && t.id === e.props.reportContext.targetUserID
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component);
            var ue = Object(l.compose)(Object(u.a)(se, {
                name: "reportUser"
            }), Object(u.a)(le, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(_.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(d.a)(), Object(p.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(ce)
        },
        dvC7: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, o = n("mrSG"),
                i = n("1hWM"),
                a = n("q1tI"),
                s = n("oJmH"),
                l = n("yR8l"),
                c = n("V+GM"),
                u = n("76Lv"),
                d = n("NvVO"),
                p = n("2xye"),
                E = n("5zC2"),
                m = n("0bws"),
                f = n("GnwI"),
                h = n("fvjX"),
                g = n("/7QA"),
                _ = n("TVJu"),
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.extensionsForChannel,
                            n = t.error,
                            r = t.installedExtensions;
                        if (t.loading || n || !r) return null;
                        var o = r.find(function(t) {
                            return t.extension.clientId === e.props.extensionID && (!e.props.extensionVersion || t.extension.version === e.props.extensionVersion) && t.activationConfig.anchor === e.props.anchor
                        });
                        return o && o.extension ? (g.p.setPageTitle(o.extension.name), a.createElement(_.a, {
                            installation: o,
                            channelID: this.props.channelID,
                            channelName: this.props.channelLogin,
                            login: this.props.viewerLogin,
                            loginID: this.props.viewerID,
                            isPopout: !0,
                            isFramePoppedOut: !1,
                            mode: this.props.mode
                        })) : null
                    }, t
                }(a.Component),
                R = Object(h.compose)(Object(E.c)({
                    name: "extensionsForChannel",
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }))(T),
                I = n("Ue10"),
                v = n("1+HG");
            ! function(e) {
                e.PopoutExtensionPageRootLayout = "popout-extension-page__root-layout"
            }(r || (r = {}));
            var b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            theme: Object(u.d)()
                        }, t.updateTheme = function(e) {
                            if (e.key === u.a) {
                                var n = Object(u.d)();
                                t.setState({
                                    theme: n
                                })
                            }
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("storage", this.updateTheme), this.props.userQuery.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("storage", this.updateTheme)
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.userQuery.loading && !this.props.userQuery.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.userQuery.loading || !this.props.userQuery.user) return null;
                        var e = this.props.userQuery.user;
                        if (!e.id || !e.login) return null;
                        var t = this.props.userQuery.currentUser,
                            n = this.props.match.params.extensionID.split("-"),
                            o = n[0],
                            s = n[1];
                        return a.createElement(I.Xa, {
                            "data-test-selector": r.PopoutExtensionPageRootLayout,
                            className: Object(u.b)(this.state.theme),
                            display: I.X.Flex,
                            fullHeight: !0,
                            fullWidth: !0
                        }, a.createElement(E.b, null), a.createElement(m.a, null), a.createElement(I.Eb, {
                            background: I.r.Alt2,
                            color: I.O.Base,
                            display: I.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            overflow: I.cb.Hidden,
                            fullHeight: !0,
                            fullWidth: !0
                        }, a.createElement(R, {
                            extensionID: o,
                            extensionVersion: s,
                            anchor: this.props.match.params.anchor,
                            mode: this.props.match.params.mode || i.ExtensionMode.Viewer,
                            channelID: e.id,
                            channelLogin: e.login,
                            viewerLogin: t && t.login,
                            viewerID: t && t.id
                        })))
                    }, t
                }(a.Component),
                O = Object(s.compose)(Object(f.b)("PopoutExtensionPage", {
                    destination: d.a.ExtensionsPopout
                }), Object(c.a)({
                    location: p.PageviewLocation.ExtensionsPopout
                }), Object(l.a)(v, {
                    name: "userQuery",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(b);
            n.d(t, "PopoutExtensionPage", function() {
                return O
            })
        },
        eDVu: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("q1tI"),
                i = n("/aPz");

            function a(e) {
                return function(t) {
                    return function(n) {
                        function a(t) {
                            var r = n.call(this, t) || this;
                            return r.mutator = function(e, t) {
                                return r.options.mutator(e, t)
                            }, r.typesChanged = function(e) {
                                if (e.types && !r.options.types || !e.types && r.options.types) return !0;
                                if (e.types && r.options.types) {
                                    if (e.types.length !== r.options.types.length) return !0;
                                    var t = new Set(r.options.types);
                                    return e.types.some(function(e) {
                                        return !t.has(e)
                                    })
                                }
                                return !1
                            }, r.options = e(t), r
                        }
                        return r.__extends(a, n), a.prototype.componentDidMount = function() {
                            this.options.skip || this.subscribe(this.options)
                        }, a.prototype.componentWillReceiveProps = function(t) {
                            var n = e(t);
                            n.skip !== this.options.skip && (n.skip ? this.unsubscribe() : this.subscribe(n)), n.skip || (n.topic !== this.options.topic || n.type !== this.options.type || this.typesChanged(n)) && (this.unsubscribe(), this.subscribe(n)), this.options = n
                        }, a.prototype.componentWillUnmount = function() {
                            this.unsubscribe()
                        }, a.prototype.render = function() {
                            return o.createElement(t, r.__assign({}, this.props))
                        }, a.prototype.subscribe = function(e) {
                            this.unsubscriber = Object(i.B)({
                                query: e.query,
                                variables: e.variables,
                                topic: e.topic,
                                type: e.type,
                                types: e.types,
                                mutator: this.mutator,
                                skipMessage: e.skipMessage
                            })
                        }, a.prototype.unsubscribe = function() {
                            this.unsubscriber && (this.unsubscriber(), this.unsubscriber = null)
                        }, a
                    }(o.Component)
                }
            }
            n.d(t, "a", function() {
                return a
            })
        },
        eFQ3: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                o = n("9C/b"),
                i = n("fvjX"),
                a = n("mrSG"),
                s = n("Pw1c"),
                l = n("q1tI"),
                c = [];
            s.onchange = function() {
                c.forEach(function(e) {
                    e()
                })
            };
            var u, d = n("1/iK"),
                p = n("y5D0"),
                E = n("d0ua"),
                m = n("kRBY"),
                f = n("XDQu"),
                h = n("KxT4"),
                g = n("S1Za"),
                _ = n("AKMF"),
                T = n("TSYQ"),
                R = n("1hWM"),
                I = n("imBb"),
                v = n("cr+I"),
                b = n("/7QA"),
                O = n("Fxe2"),
                C = n("f00E"),
                y = n("vRsq"),
                S = n("2xye"),
                A = n("kz7j"),
                N = n("ndwU"),
                D = n("GnwI");
            ! function(e) {
                e.LoadStart = "loadstart", e.Error = "error", e.LoadedMetadata = "loadedmetadata", e.CanPlay = "canplay", e.Playing = "playing", e.Waiting = "waiting", e.Seeking = "seeking", e.Seeked = "seeked", e.Ended = "ended", e.DurationChange = "durationchange", e.TimeUpdate = "timeupdate", e.Play = "play", e.Pause = "pause", e.VolumeChange = "volumechange", e.RateChange = "ratechange"
            }(u || (u = {}));
            var P = n("kxrW"),
                L = n("oKCn"),
                M = n("lTz2"),
                U = n("C94G"),
                k = (n("Qqhu"), n("Addw")),
                x = "debug",
                w = {
                    amazon: !1,
                    comscore: !1,
                    google: !1,
                    nielsen: !1
                },
                B = {
                    allowfullscreen: !0,
                    externalfullscreen: !1,
                    autoplay: !0,
                    branding: !1,
                    channelInfo: !1,
                    controls: !0,
                    debug: !1,
                    height: "100%",
                    playsinline: !0,
                    player: L.f.Site,
                    showInfo: !1,
                    showtheatre: !1,
                    trackingProperties: {
                        client_build_id: b.p.config.buildID,
                        client_app: b.p.session.clientApp
                    },
                    width: "100%",
                    oauth_token: "",
                    gdpr: w
                },
                F = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.lastGDPR = w, n.hasInitializedOffsets = !1, n.logger = b.k.withCategory("video-player"), n.initializePlayer = function(e) {
                            var t = a.__assign({}, B, {
                                allowfullscreen: !n.props.disableFullscreen,
                                autoplay: !n.props.paused,
                                externalfullscreen: n.props.fullscreen.supported(),
                                gdpr: n.createPlayerGDPROptions(n.props),
                                muted: n.props.muted,
                                showtheatre: !n.props.disableTheatreButton,
                                trackingProperties: a.__assign({}, B.trackingProperties, {
                                    platform: b.o.getPlatform()
                                })
                            });
                            n.playerBuffering = n.registerBufferingEvent(!!n.props.paused), n.playerPlayed = n.registerPlayedEvent(!!n.props.paused);
                            var r = n.props.playerTypeOverride;
                            r && (t.player = r, n.playerType = r, r === L.f.ClipsEditing && (t.muted = !0)), n.props.channelLogin && (t.channel = n.props.channelLogin, n.lastSetChannel = n.props.channelLogin), n.props.collectionID && (t.collection = n.props.collectionID), n.props.clipSlug && (t.clip = n.props.clipSlug), n.props.vodID && (t.video = Object(y.p)(n.props.vodID), b.o.setVideoPlayerTrackingData({
                                vodID: n.props.vodID
                            })), n.props.showChannelInfoOnHover && (t.showInfo = n.props.showChannelInfoOnHover), void 0 !== n.props.persistUserPreferences && (t.persistUserPreferences = n.props.persistUserPreferences), void 0 !== n.props.nextVideoOffset && n.props.nextVideoOffset >= 0 && (t.time = Object(k.a)(n.props.nextVideoOffset)), t.oauth_token = n.props.authToken || "", t.debug = "true" === v.parse(window.location.search)[x], n.logger.debug("Initializing", t);
                            var o = new e(n.playerRef, t);
                            n.player = o, o.addEventListener(P.a.PlayerReady, n.onPlayerReady), o.addEventListener(P.a.CompanionAdBuffered, n.companionAdBuffered), o.addEventListener(P.a.Online, n.onStreamStatusOnline), o.addEventListener(P.a.Offline, n.onStreamStatusOffline), o.addEventListener(u.Ended, n.onStreamStatusOffline), o.addEventListener(u.Play, n.onPlayerPlay), o.addEventListener(u.Playing, n.onPlayerPlaying), o.addEventListener(u.Seeking, n.onSeeking), o.addEventListener(u.Seeked, n.onSeek), o.addEventListener(u.TimeUpdate, n.onTimeUpdate), o.addEventListener(P.a.TheatreChange, n.onTheatreChange), o.addEventListener(P.a.FullscreenChange, n.onFullScreenChange), o.addEventListener(P.a.ExternalFullscreenChange, n.onExternalFullScreenChange), o.addEventListener(P.a.ClipsModerationOpen, n.onClipsModerationOpen), o.addEventListener(P.a.TransitionToCollectionVOD, n.onTransitionToCollectionVod), o.addEventListener(P.a.TransitionToRecommendedVOD, n.onTransitionToRecommendedVod), o.addEventListener(P.a.OpenStream, n.onOpenStream), o.addEventListener(u.Pause, n.onPause), o.addEventListener(P.a.PersistenPlayerToggle, n.onPersistentPlayerToggled), o.addEventListener(u.LoadedMetadata, n.onMetadataLoaded), o.addEventListener(u.VolumeChange, n.onVolumeChange), o.addEventListener(P.a.PromptLoginModal, n.props.promptLogin), o.addEventListener(P.a.FocusPlayer, n.onFocusPlayer), o.addEventListener(P.a.FollowChannel, n.followChannel), o.addEventListener(P.a.UnfollowChannel, n.unfollowChannel), o.addEventListener(P.a.ContentRestricted, n.onContentRestricted), R.extensionService.registerPlayer(n.player), R.extensionService.setPlayerWindow(window), n.props.onInit && n.props.onInit(o), n.maybeAttachToWindow(n.props)
                        }, n.attachRef = function(e) {
                            return n.playerRef = e
                        }, n.onMetadataLoaded = function() {
                            var e = n.player && n.player.getSessionInfo();
                            e && (n.logger.debug("Got player session info from player instance", e), b.o.setVideoPlayerTrackingData({
                                broadcastID: e.broadcastId,
                                playSessionID: e.playSessionId
                            })), n.setState({
                                metadataLoaded: !0
                            })
                        }, n.onOpenStream = function() {
                            if (n.props.playerTypeOverride === L.f.Frontpage && n.player)
                                if (n.props.channelLogin) b.p.history.push("/" + n.props.channelLogin);
                                else if (n.props.vodID) {
                                var e = Math.floor(n.player.getCurrentTime());
                                b.p.history.push("/videos/" + n.props.vodID + "?t=" + Object(k.a)(e))
                            } else n.props.collectionID && b.p.history.push("/collections/" + n.props.collectionID)
                        }, n.onFocusPlayer = function() {
                            n.player && n.props.onFocusPlayer && n.props.channelLogin && n.props.onFocusPlayer()
                        }, n.followChannel = function() {
                            n.player && n.props.followChannel && n.props.channelLogin && n.props.followChannel()
                        }, n.unfollowChannel = function() {
                            n.player && n.props.unfollowChannel && n.props.channelLogin && n.props.unfollowChannel()
                        }, n.onPlayerReady = function() {
                            n.player && (n.logger.debug("Ready"), n.props.latencyTracking.reportInteractive(), n.hasPlayed = !1, n.playerLoaded && n.props.latencyTracking.reportCustomEvent(n.playerLoaded), n.lastFollowingProp && n.player.setFollowing(n.lastFollowingProp), n.setState({
                                playerInitialized: !0
                            }, n.updatePlayerTrackingDataFromProps))
                        }, n.onPlayerPlay = function() {
                            n.logger.debug("onPlay"), n.reportPlayerBuffering(), n.lastPausedProp = !1, n.togglePause(!1)
                        }, n.companionAdBuffered = function(e) {
                            n.props.onCompanionAdBuffered && e && n.props.onCompanionAdBuffered(e)
                        }, n.onPlayerPlaying = function() {
                            n.logger.debug("onPlaying"), n.reportPlayerPlayed(), n.hasPlayed || n.onStreamStatusOnline(), n.hasPlayed = !0, n.lastPausedProp = !1, n.state.playerRefID !== n.props.activeVideoPlayerRefID && n.props.reportPlayerInstanceStarted && n.props.reportPlayerInstanceStarted(n.state.playerRefID), n.togglePause(!1)
                        }, n.onPause = function() {
                            n.logger.debug("onPause"), n.lastPausedProp = !0, n.togglePause(!0)
                        }, n.togglePause = function(e) {
                            n.logger.debug("togglePause", e), n.state.playerPaused !== e && (n.setState({
                                playerPaused: e
                            }), n.props.onPauseToggled && n.props.onPauseToggled(e))
                        }, n.onVolumeChange = function(e) {
                            if (n.logger.debug("Volume Change"), n.player) {
                                var t = e.muted;
                                n.lastMutedProp = t, n.toggleMute(t)
                            }
                        }, n.toggleMute = function(e) {
                            n.setState({
                                playerMuted: e
                            }), n.props.onMuteToggled && n.props.onMuteToggled(e)
                        }, n.onStreamStatusOnline = function() {
                            n.props.onStreamStatusChange && n.props.onStreamStatusChange(P.a.Online)
                        }, n.onStreamStatusOffline = function() {
                            n.props.onStreamStatusChange && n.props.onStreamStatusChange(P.a.Offline)
                        }, n.onTheatreChange = function(e) {
                            e ? (n.logger.debug("Theatre Entered"), n.props.enableTheatreMode && !n.props.theatreModeEnabled && n.props.enableTheatreMode()) : (n.logger.debug("Theatre Exited"), n.props.disableTheatreMode && n.props.theatreModeEnabled && n.props.disableTheatreMode())
                        }, n.onFullScreenChange = function() {
                            n.player && (n.logger.debug("Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && n.setState({
                                isFullScreen: n.player.fullscreen
                            }))
                        }, n.onExternalFullScreenChange = function() {
                            n.player && (n.logger.debug("External Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && (n.player.fullscreen ? n.enterFullscreen() : n.exitFullscreen()))
                        }, n.onClipsModerationOpen = function(e) {
                            n.player && (n.logger.debug("Clips Moderation Open", e), n.props.onClipsModerationOpen && n.props.onClipsModerationOpen(e))
                        }, n.onTwilightFullscreenChange = function() {
                            var e = n.props.fullscreen.element(),
                                t = !!e && !!n.playerRef && e.contains(n.playerRef);
                            n.state.isFullScreen && !t && n.exitFullscreen()
                        }, n.onSeek = function() {
                            n.props.onSeek && n.player && n.props.onSeek(n.player.getCurrentTime())
                        }, n.onSeeking = function() {
                            n.props.onSeeking && n.player && n.props.onSeeking(n.player.getCurrentTime())
                        }, n.onTimeUpdate = function() {
                            n.props.onVideoTimeChange && n.player && n.props.onVideoTimeChange(n.player.getCurrentTime())
                        }, n.onHistoryChange = function() {
                            n.state.isFullScreen && n.exitFullscreen()
                        }, n.onTransitionToCollectionVod = function(e) {
                            if (n.props.onNavigationRequest) {
                                var t = {};
                                e.vodId && (t.videoID = Object(O.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                            }
                        }, n.onTransitionToRecommendedVod = function(e) {
                            if (n.props.onNavigationRequest) {
                                var t = {};
                                e.vodId && (t.videoID = Object(O.a)(e.vodId)), n.props.onNavigationRequest(t)
                            }
                        }, n.onPersistentPlayerToggled = function() {
                            n.props.togglePersistentPlayer && n.props.togglePersistentPlayer()
                        }, n.onContentRestricted = function() {
                            n.logger.debug("onContentRestricted - a restriction gate has prevented video playback."), n.hasRestrictedContent = !0
                        }, n.updatePlayerTrackingData = function(e) {
                            n.state.playerInitialized && n.player && n.player.setTrackingProperties(function(e, t) {
                                var n = b.o.getLastPageview(),
                                    r = {
                                        host_channel: e.hostChannel,
                                        collapse_right: !e.rightColumnExpanded,
                                        collapse_left: !e.sideNavExpanded,
                                        squad_stream_id: e.squadStreamID,
                                        squad_stream_session_id: e.squadStreamSessionID,
                                        squad_stream_presentation_id: e.squadStreamPresentationID
                                    },
                                    o = e.history.location && e.history.location.state || {},
                                    i = {
                                        item_tracking_id: o.item_tracking_id,
                                        item_position: o.item_position,
                                        row_position: o.row_position,
                                        row_name: o.row_name,
                                        search_query_id: o.search_query_id,
                                        search_session_id: o.search_session_id,
                                        tag_filter_set: o.tag_filter_set,
                                        tag_set: o.tag_set,
                                        tag_streamer_set: o.tag_streamer_set
                                    };
                                return t && (n ? t.debug("Tracking data updated.", {
                                    pageviewProperties: n,
                                    updates: r,
                                    locationStateTrackingProps: i
                                }) : t.debug("pageviewProperties not found; only hosting status updated", {
                                    pageviewProperties: n,
                                    updates: r,
                                    locationStateTrackingProps: i
                                })), a.__assign({}, i, n, r)
                            }(e, b.k))
                        }, n.updatePlayerTrackingDataFromProps = function() {
                            n.updatePlayerTrackingData(n.props)
                        }, n.updatePlayerType = function(e) {
                            var t = e || B.player;
                            n.player && n.playerType !== t && (n.player.setPlayerType(t), n.playerType = t)
                        }, n.maybeRecordClip = function() {
                            n.player && n.state.playerInitialized && !Object(N.a)() && n.player.recordClip()
                        }, n.createPlayerGDPROptions = function(e) {
                            return {
                                amazon: !e.gdprBlockAmazonContent,
                                comscore: !e.gdprBlockComScoreContent,
                                google: !e.gdprBlockGoogleContent,
                                nielsen: !e.gdprBlockNielsenContent
                            }
                        }, n.updatePlayerGDPRConsent = function(e) {
                            if (n.player) try {
                                var t = n.createPlayerGDPROptions(e);
                                t.amazon !== n.lastGDPR.amazon && n.player.setAmazonGDPRConsent(t.amazon), t.comscore !== n.lastGDPR.comscore && n.player.setComscoreGDPRConsent(t.comscore), t.google !== n.lastGDPR.google && n.player.setGoogleGDPRConsent(t.google), t.nielsen !== n.lastGDPR.nielsen && n.player.setNielsenGDPRConsent(t.nielsen), n.lastGDPR = t
                            } catch (e) {
                                var r = {
                                        playerHasGDPR: "function" == typeof n.player.setAmazonGDPRConsent,
                                        userAgent: navigator.userAgent
                                    },
                                    o = "Failed to set player GDPR consent. Data: " + JSON.stringify(r);
                                n.logger.error(new Error("Failed to set player GDPR consent"), o, {
                                    data: r
                                })
                            }
                        }, n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.state = {
                            playerInitialized: !1,
                            isFullScreen: !1,
                            playerPaused: !!t.paused,
                            playerMuted: t.muted,
                            playerRefID: Object(C.a)(),
                            metadataLoaded: !1
                        }, n.playerType = t.playerTypeOverride || B.player, n.lastSetChannel = t.channelLogin, n.lastPausedProp = t.paused, n.lastMutedProp = t.muted, n.lastFollowingProp = t.viewerIsFollowing, n.lastGDPR = n.createPlayerGDPROptions(t), t.fullscreen.addChangeListener(n.onTwilightFullscreenChange), t.instanceRef && t.instanceRef(n), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.playerCreated && this.props.latencyTracking.reportCustomEvent(this.playerCreated), this.bindHotKeys(), this.historyUnlistener = this.props.history.listen(this.onHistoryChange), Object(U.b)(), Object(U.a)(this.initializePlayer), b.o.eventEmitter.addListener(S.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps)
                    }, t.prototype.componentWillUpdate = function(e, t) {
                        if (t.playerInitialized) {
                            if (this.updatePlayerTrackingData(e), this.updatePlayerType(e.playerTypeOverride), this.player && t.isFullScreen !== this.player.fullscreen && this.player.setFullscreen(t.isFullScreen), this.player) {
                                var n = this.props.editing || {},
                                    r = e.editing || {},
                                    o = n.startOffset,
                                    i = n.endOffset,
                                    a = n.videoUrl,
                                    s = n.isPostEdit;
                                a !== r.videoUrl && r.slug && this.player.setEditClipStream({
                                    videoUrl: r.videoUrl,
                                    slug: r.slug
                                }), s !== r.isPostEdit && this.player.updateClipsEditing({
                                    isPostEdit: r.isPostEdit
                                }), (!(this.hasInitializedOffsets || !r.startOffset || !r.endOffset) || o !== r.startOffset || i !== r.endOffset) && (this.player.updateEditingOffsets([{
                                    startOffset: r.startOffset,
                                    endOffset: r.endOffset
                                }]), this.hasInitializedOffsets || (this.hasInitializedOffsets = !0))
                            }
                            this.player && e.clipSlug && this.props.clipSlug !== e.clipSlug && this.player.setClip(e.clipSlug), this.player && e.theatreModeEnabled !== this.player.getTheatre() && this.player.setTheatre(e.theatreModeEnabled), this.player && e.miniModeEnabled !== this.props.miniModeEnabled && this.player.setMiniPlayerMode(!!e.miniModeEnabled), this.player && t.playerPaused !== this.lastPausedProp && (t.playerPaused ? this.player.pause() : t.playerPaused || this.player.play(), this.lastPausedProp = t.playerPaused), this.player && t.playerMuted !== this.lastMutedProp && (this.player.setMuted(!!t.playerMuted), this.lastMutedProp = !!t.playerMuted), this.player && e.viewerIsFollowing !== this.lastFollowingProp && (this.player.setFollowing(!!e.viewerIsFollowing), this.lastFollowingProp = !!e.viewerIsFollowing), this.updatePlayerGDPRConsent(e);
                            var l = e.channelLogin !== this.lastSetChannel;
                            if (this.player && e.channelLogin && (l || Object(M.b)(this.props, e))) return this.player.pause(), this.resetLatencyTracking(!!e.paused), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void b.o.setVideoPlayerTrackingData({
                                vodID: void 0
                            });
                            var c = e.collectionID && this.props.collectionID !== e.collectionID,
                                u = e.vodID && this.props.vodID !== e.vodID;
                            if (c || u) {
                                var d = e.vodID ? Object(y.p)(e.vodID) : "";
                                if ("" !== d && b.o.setVideoPlayerTrackingData({
                                        vodID: e.vodID
                                    }), !this.player) return;
                                return this.player.pause(), this.resetLatencyTracking(!!e.paused), void(c || e.collectionID && u ? this.player.setCollection(e.collectionID, d, e.nextVideoOffset) : this.player.setVideo(d, e.nextVideoOffset))
                            }
                            void 0 !== e.nextVideoOffset && e.nextVideoOffset >= 0 && this.props.nextVideoOffset !== e.nextVideoOffset && this.player && this.player.setCurrentTime(e.nextVideoOffset), this.player && e.videoMarkers && this.lastVideoMarkersProp !== e.videoMarkers && (this.lastVideoMarkersProp = e.videoMarkers, this.player.setVideoMarkers(e.videoMarkers));
                            var p = e.playerQualityOverride;
                            this.player && t.metadataLoaded && p && p !== this.lastPlayerQualityOverride && (this.player.setQuality(p), this.lastPlayerQualityOverride = p);
                            var E = e.playerMaxAutoOverride;
                            this.player && t.metadataLoaded && E && E.group !== this.lastPlayerMaxAutoOverride && (this.player.setAutoMaxVideoSize(E.width, E.height), this.lastPlayerMaxAutoOverride = E.group)
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (void 0 !== e.paused && this.props.paused !== e.paused) this.togglePause(e.paused);
                        else {
                            var t = this.props.activeVideoPlayerRefID,
                                n = e.activeVideoPlayerRefID;
                            this.props.allowSimultaneousPlaying || t === n || (n === this.state.playerRefID ? this.togglePause(!1) : n !== this.state.playerRefID && this.togglePause(!0))
                        }
                        void 0 !== e.muted && this.props.muted !== e.muted && this.toggleMute(e.muted)
                    }, t.prototype.render = function() {
                        var e = T("video-player", {
                                "video-player--theatre": this.props.theatreModeEnabled,
                                "video-player--theatre-whispers": this.props.theatreModeEnabled && this.props.isWhispersBottomBarVisible && !this.state.isFullScreen,
                                "video-player--logged-in": this.props.isLoggedIn,
                                "video-player--fullscreen": this.state.isFullScreen
                            }),
                            t = T("video-player__container", {
                                "video-player__container--clips": L.a.includes(this.playerType)
                            });
                        return l.createElement("div", {
                            className: T(e),
                            "data-test-selector": "video-player"
                        }, l.createElement("div", {
                            className: t,
                            ref: this.attachRef
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.state.playerRefID === this.props.activeVideoPlayerRefID && this.props.reportPlayerInstanceStarted && this.props.reportPlayerInstanceStarted(void 0), this.unbindHotKeys(), this.historyUnlistener && this.historyUnlistener(), this.maybeDetachFromWindow(), this.state.isFullScreen && this.exitFullscreen(), this.props.fullscreen.removeChangeListener(this.onTwilightFullscreenChange), this.props.onDestroy && this.props.onDestroy(), b.o.eventEmitter.removeListener(S.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps), this.player && (this.player.removeEventListener(P.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(P.a.CompanionAdBuffered, this.companionAdBuffered), this.player.removeEventListener(P.a.Online, this.onStreamStatusOnline), this.player.removeEventListener(P.a.Offline, this.onStreamStatusOffline), this.player.removeEventListener(u.Ended, this.onStreamStatusOffline), this.player.removeEventListener(u.Play, this.onPlayerPlay), this.player.removeEventListener(u.Playing, this.onPlayerPlaying), this.player.removeEventListener(P.a.TheatreChange, this.onTheatreChange), this.player.removeEventListener(P.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(P.a.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(P.a.ExternalFullscreenChange, this.onExternalFullScreenChange), this.player.removeEventListener(u.Seeking, this.onSeeking), this.player.removeEventListener(u.Seeked, this.onSeek), this.player.removeEventListener(u.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(P.a.OpenStream, this.onOpenStream), this.player.removeEventListener(u.Pause, this.onPause), this.player.removeEventListener(P.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), this.player.removeEventListener(u.LoadedMetadata, this.onMetadataLoaded), this.player.removeEventListener(u.VolumeChange, this.onVolumeChange), this.player.removeEventListener(P.a.PromptLoginModal, this.props.promptLogin), this.player.removeEventListener(P.a.FocusPlayer, this.onFocusPlayer), this.player.removeEventListener(P.a.FollowChannel, this.followChannel), this.player.removeEventListener(P.a.UnfollowChannel, this.unfollowChannel), this.player.removeEventListener(P.a.ContentRestricted, this.onContentRestricted), R.extensionService.unregisterPlayer(), this.player.destroy()), b.o.setVideoPlayerTrackingData({
                            vodID: void 0
                        })
                    }, t.prototype.trackMiniPlayerAction = function(e, t) {
                        this.player && this.state.playerInitialized && this.player.trackMiniPlayerAction(e, t)
                    }, t.prototype.resetLatencyTracking = function(e) {
                        this.logger.debug("Resetting latency tracking."), this.hasBuffered = !1, this.hasPlayed = !1, this.hasPaused = !1, this.hasRestrictedContent = !1, this.props.latencyTracking.resetCustomEvents(A.a.Player), this.playerBuffering = this.registerBufferingEvent(e), this.playerPlayed = this.registerPlayedEvent(e), this.playerCreated = void 0, this.playerLoaded = void 0
                    }, t.prototype.registerBufferingEvent = function(e) {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: A.a.Player,
                            key: A.b.PlayerBuffering,
                            label: A.c.Buffering,
                            doNotTrack: e
                        })
                    }, t.prototype.registerCreatedEvent = function() {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: A.a.Player,
                            key: A.b.PlayerCreated,
                            label: A.c.Created
                        })
                    }, t.prototype.registerLoadedEvent = function() {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 2500,
                            group: A.a.Player,
                            key: A.b.PlayerLoaded,
                            label: A.c.Init
                        })
                    }, t.prototype.registerPlayedEvent = function(e) {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 4e3,
                            group: A.a.Player,
                            key: A.b.PlayerPlayed,
                            label: A.c.FirstFrame,
                            doNotTrack: e
                        })
                    }, t.prototype.shouldSuppressPlaybackTracking = function() {
                        return this.hasPaused || this.hasRestrictedContent || !this.player || !this.player.autoplay
                    }, t.prototype.reportPlayerBuffering = function() {
                        if (!this.hasBuffered && (this.hasBuffered = !0, this.playerBuffering)) {
                            if (this.shouldSuppressPlaybackTracking() && !this.playerBuffering.doNotTrack) return void this.logger.warn("Playback tracking has been suppressed. Buffering latency data will be not be tracked.");
                            this.props.latencyTracking.reportCustomEvent(this.playerBuffering)
                        }
                    }, t.prototype.reportPlayerPlayed = function() {
                        if (!this.hasPlayed && this.playerPlayed) {
                            if (this.shouldSuppressPlaybackTracking() && !this.playerPlayed.doNotTrack) return void this.logger.warn("Playback tracking has been suppressed. First frame latency data will be not be tracked.");
                            this.props.latencyTracking.reportCustomEvent(this.playerPlayed)
                        }
                    }, t.prototype.enterFullscreen = function() {
                        this.setState({
                            isFullScreen: !0
                        }), this.props.fullscreenRef ? this.props.fullscreen.enable(this.props.fullscreenRef) : this.props.fullscreen.enable(this.playerRef), this.props.onFullscreenChange && this.props.onFullscreenChange(!0)
                    }, t.prototype.exitFullscreen = function() {
                        this.state.isFullScreen && (this.setState({
                            isFullScreen: !1
                        }), this.props.fullscreen.disable(), this.props.onFullscreenChange && this.props.onFullscreenChange(!1))
                    }, t.prototype.maybeAttachToWindow = function(e) {
                        v.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                    }, t.prototype.maybeDetachFromWindow = function() {
                        window.player = void 0
                    }, t.prototype.bindHotKeys = function() {
                        I.bind("alt+x", this.maybeRecordClip)
                    }, t.prototype.unbindHotKeys = function() {
                        I.unbind("alt+x")
                    }, t.defaultProps = {
                        paused: !1
                    }, t
                }(l.Component),
                V = Object(D.b)("VideoPlayer")(F);
            var W = Object(i.compose)(Object(r.connect)(function(e) {
                return {
                    isWhispersBottomBarVisible: Object(f.b)(e),
                    theatreModeEnabled: e.ui.theatreModeEnabled,
                    rightColumnExpanded: e.ui.rightColumnExpanded,
                    sideNavExpanded: e.ui.sideNavExpanded,
                    isLoggedIn: Object(m.f)(e),
                    authToken: Object(m.a)(e),
                    activeVideoPlayerRefID: Object(_.a)(e),
                    gdprBlockAmazonContent: Object(h.g)(e, h.c.Amazon),
                    gdprBlockComScoreContent: Object(h.g)(e, h.c.ComScore),
                    gdprBlockGoogleContent: Object(h.g)(e, h.c.Google),
                    gdprBlockNielsenContent: Object(h.g)(e, h.c.Nielsen)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    enableTheatreMode: E.F,
                    disableTheatreMode: E.C,
                    togglePersistentPlayer: E.N,
                    reportPlayerInstanceStarted: g.b,
                    promptLogin: function() {
                        return Object(p.e)(d.a.ReportHoster)
                    }
                }, e)
            }), function(e) {
                return function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.addChangeListener = function(e) {
                            c.push(e)
                        }, e.removeChangeListener = function(e) {
                            c = c.filter(function(t) {
                                return t !== e
                            })
                        }, e
                    }
                    return a.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            fullscreen: {
                                addChangeListener: this.addChangeListener,
                                removeChangeListener: this.removeChangeListener,
                                supported: this.supported,
                                element: this.element,
                                enable: this.enable,
                                disable: this.disable
                            }
                        };
                        return l.createElement(e, a.__assign({}, t, this.props))
                    }, n.prototype.supported = function() {
                        return !!s.enabled
                    }, n.prototype.element = function() {
                        return s.element
                    }, n.prototype.enable = function(e) {
                        s.request(e)
                    }, n.prototype.disable = function() {
                        s.exit()
                    }, n
                }(l.Component)
            }, o.a)(V);

            function j(e, t, n) {
                if (e.collectionID || !e.videoID)
                    if (e.collectionID && e.videoID) {
                        if (n && n.currentVideoID && n.currentCollectionID && n.currentVideoID === e.videoID && n.currentCollectionID === e.collectionID) return;
                        t.push("/videos/" + e.videoID + "?collection=" + e.collectionID)
                    } else !e.collectionID || e.videoID ? b.k.withCategory("video-player").error(new Error("No collection or video specified from the emitted player transition event."), "No collection or video specified from the emitted player transition event.") : t.push("/collections/" + e.collectionID);
                else t.push("/videos/" + e.videoID)
            }
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return W
            }), n.d(t, "c", function() {
                return j
            }), n.d(t, "a", function() {
                return L.f
            })
        },
        eJ65: function(e, t, n) {
            "use strict";
            var r = n("bq0i");
            n.d(t, "a", function() {
                return r.a
            })
        },
        "g/rS": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            });
            var r = "extensions.EXTENSION_INSTALLATIONS_FETCHED",
                o = "extensions.DESTROY_CHANNEL_INSTALLATION";

            function i(e, t) {
                return {
                    type: r,
                    channelID: e,
                    installedExtensions: t
                }
            }

            function a(e, t) {
                return {
                    type: o,
                    channelID: e,
                    extensionID: t
                }
            }
        },
        gIsd: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportReasons"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "content"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ReportContentType"
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
                                value: "reportReasons"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "content"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "content"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 114
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        iS14: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                o = n("yR8l"),
                i = n("8jSG"),
                a = n("cMjZ"),
                s = n("zixI");

            function l() {
                var e = this;
                return Object(o.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, o) {
                                return r.__awaiter(e, void 0, void 0, function() {
                                    return r.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n
                                                        }
                                                    },
                                                    optimisticResponse: {
                                                        unblockUser: {
                                                            __typename: "UnblockUserPayload",
                                                            targetUser: {
                                                                __typename: "User",
                                                                id: n
                                                            }
                                                        }
                                                    },
                                                    update: function(e) {
                                                        var t = e.readFragment({
                                                            id: Object(a.a)(o),
                                                            fragment: i
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(a.a)(o),
                                                            fragment: i,
                                                            data: t
                                                        }))
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                throw new Error("unblockUserMutation is not ready");
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
        },
        k8pZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("mrSG"),
                o = n("/7QA"),
                i = n("g/rS");

            function a(e, t) {
                return e.extensions.installations[t]
            }
            o.p.store.registerReducer("extensions", function(e, t) {
                var n, o;
                switch (void 0 === e && (e = {
                    installations: {}
                }), t.type) {
                    case i.b:
                        return r.__assign({}, e, {
                            installations: r.__assign({}, e.installations, (n = {}, n[t.channelID] = t.installedExtensions, n))
                        });
                    case i.a:
                        var a = e.installations[t.channelID];
                        if (!a) return e;
                        var s = a.filter(function(e) {
                            return e.extension.clientId !== t.extensionID
                        });
                        return r.__assign({}, e, {
                            installations: r.__assign({}, e.installations, (o = {}, o[t.channelID] = s, o))
                        });
                    default:
                        return e
                }
            })
        },
        kSkr: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "BlockUser"
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
                                    value: "BlockUserInput"
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
                                value: "blockUser"
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
                                        value: "targetUser"
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
                    end: 94
                }
            };
            n.loc.source = {
                body: "mutation BlockUser($input: BlockUserInput!) {\nblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kxrW: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.PlayerInit = "init", e.ContentShowing = "contentShowing", e.CompanionAdBuffered = "companionadbuffered", e.PlaybackStatistics = "playbackStatistics", e.ChansubRequired = "chansubRequired", e.VideoFailure = "videoFailure", e.Formats = "videoFormats", e.ABSStreamFormatChange = "abs_stream_format_change", e.FormatChanged = "videoFormatChanged", e.TimeChange = "timeChange", e.BufferChange = "bufferChange", e.SegmentChange = "segmentchange", e.UsherFailError = "usherFail", e.CaptionUpdate = "captions", e.SeekFailed = "seekfailed", e.VariantSwitchRequest = "variantSwitchRequested", e.ViewersChange = "viewerschange", e.StreamLoaded = "streamLoaded", e.VideoLoaded = "videoLoaded", e.VideoPaused = "videoPaused", e.QualityChange = "qualitychange", e.Online = "online", e.Offline = "offline", e.Restricted = "restricted", e.CastingChange = "castingchange", e.TheatreChange = "theatrechange", e.MidrollRequested = "midrollrequested", e.ManifestExtraInfo = "manifestExtraInfo", e.TransitionToCollectionVOD = "transitionToCollectionVod", e.TransitionToRecommendedVOD = "transitionToRecommendedVod", e.StitchedAdStart = "stitchedadstart", e.StichedAdEnd = "stitchedadend", e.PersistenPlayerToggle = "persistentPlayerEnableToggle", e.StatsUpdate = "statsupdate", e.PromptLoginModal = "prompt login modal", e.OpenStream = "openStream", e.PlayerReady = "ready", e.FullscreenChange = "fullscreenchange", e.ExternalFullscreenChange = "externalfullscreenchange", e.ClipsModerationOpen = "clips-moderation-open", e.FocusPlayer = "focusPlayer", e.FollowChannel = "followChannel", e.UnfollowChannel = "unfollowChannel", e.ContentRestricted = "contentRestricted"
                }(r || (r = {}))
        },
        lTz2: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return !(!e && !t) && (!t || !e || (t.channelLogin !== e.channelLogin || t.vodID !== e.vodID || t.collectionID !== e.collectionID))
            }

            function o(e) {
                return {
                    channelLogin: e.channelLogin,
                    vodID: e.vodID,
                    collectionID: e.collectionID
                }
            }

            function i(e, t) {
                return !(!e && !t) && (!t || !e || (e.vodID && !t.vodID || e.collectionID && !t.collectionID))
            }
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            })
        },
        ndwU: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("/7QA"),
                o = n("D7An");

            function i() {
                return "variant1" === r.p.experiments.getAssignment(o.b.ClipsOnTheBrain)
            }
        },
        oKCn: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "f", function() {
                    return r
                }), n.d(t, "a", function() {
                    return i
                }), n.d(t, "e", function() {
                    return o
                }), n.d(t, "b", function() {
                    return s
                }), n.d(t, "c", function() {
                    return l
                }), n.d(t, "d", function() {
                    return a
                }),
                function(e) {
                    e.Embed = "embed", e.Feed = "feed", e.Frontpage = "frontpage", e.Site = "site", e.Highlighter = "highlighter", e.Onboarding = "onboarding", e.ClipsViewing = "clips-viewing", e.ClipsWatchPage = "clips-watch", e.ClipsEditing = "clips-editing", e.ClipsEmbed = "clips-embed", e.Dashboard = "dashboard", e.SquadStreamPrimary = "squad-primary", e.SquadStreamSecondary = "squad-secondary", e.MultiviewPrimary = "multiview-primary", e.MultiviewSecondary = "multiview-secondary"
                }(r || (r = {}));
            var o, i = [r.ClipsEditing, r.ClipsViewing, r.ClipsEmbed];
            ! function(e) {
                e.Auto = "auto", e.HighHighFPS = "1080p60", e.High = "1080p30", e.MediumHighFPS = "720p60", e.Medium = "720p30", e.Low = "360p30", e.VeryLow = "160p30"
            }(o || (o = {}));
            var a, s = {
                    group: "auto",
                    width: 1e5,
                    height: 1e5
                },
                l = {
                    group: "360p30",
                    width: 640,
                    height: 360
                };
            ! function(e) {
                e.Delete = "delete", e.DeleteAll = "deleteAll", e.ReportUser = "report"
            }(a || (a = {}))
        },
        qCDY: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("1hWM"),
                i = n("17x9"),
                a = n("q1tI"),
                s = n("/7QA"),
                l = n("GnwI"),
                c = n("eFQ3"),
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setIframeContainer = function(e) {
                            t.iframeContainer = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.props.installation,
                            t = this.context.registerReceiver;
                        t ? this.unregister = t(this) : s.k.warn("<ExtensionFrame /> initialized missing a <ScrollableArea /> provider"), this.props.latencyTracking.reportInteractive();
                        var n = this.props,
                            r = n.languageCode,
                            i = n.locale;
                        this.extensionFrameAPI = new o.ExtensionFrame({
                            anchor: e.activationConfig.anchor,
                            channelId: parseInt(this.props.channelID, 10),
                            configuration: e.configuration,
                            dobbin: {
                                trackEvent: s.o.track.bind(s.o)
                            },
                            extension: e.extension,
                            features: {
                                bits: !0,
                                sharePubsub: !0
                            },
                            iframeClassName: this.props.className,
                            installationAbilities: e.abilities,
                            locale: i,
                            loginId: this.props.loginID ? parseInt(this.props.loginID, 10) : null,
                            language: r,
                            mode: this.props.extensionMode,
                            onBeginPurchase: this.props.onBeginPurchase,
                            parentElement: this.iframeContainer,
                            platform: o.ExtensionPlatform.Web,
                            isPopout: this.props.isPopout,
                            trackingProperties: {
                                channel: this.props.channelLogin,
                                device_id: s.p.session.deviceID,
                                login: this.props.login,
                                platform: s.p.tracking.getPlatform(),
                                player_type: c.a.Site
                            }
                        }), this.props.saveExtensionAPI && this.props.saveExtensionAPI(this.extensionFrameAPI)
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister(), this.extensionFrameAPI && this.extensionFrameAPI.destroy()
                    }, t.prototype.render = function() {
                        return a.createElement("div", {
                            ref: this.setIframeContainer,
                            "data-test-selector": "iframe_container_selector"
                        })
                    }, t.prototype.checkVisible = function() {
                        this.extensionFrameAPI && this.extensionFrameAPI.visibilityChanged()
                    }, t.contextTypes = {
                        registerReceiver: i.func
                    }, t
                }(a.Component),
                d = Object(l.b)("ExtensionFrame")(u);
            n.d(t, !1, function() {
                return "iframe_container_selector"
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return d
            })
        },
        s8Ou: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUser"
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
                                    value: "ReportContentInput"
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
                                value: "reportContent"
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
                                        value: "contentID"
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
                    end: 111
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        tuvy: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            }), n.d(t, "e", function() {
                return E
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, "c", function() {
                return h
            });
            var r = n("/7QA"),
                o = n("D7An"),
                i = null,
                a = null,
                s = null,
                l = null,
                c = "variant_a",
                u = "on",
                d = new RegExp("^/(" + ["overwatchleague", "overwatchleague_allaccess", "overwatchleague_kr", "overwatchleague_fr", "overwatchleague_zh", "overwatchleague_zhtw", "blizzheroes", "BlizzHeroesKR", "BlizzHeroesDE", "BlizzHeroesRU", "BlizzHeroesFR", "camhux", "Hgg_cheering_test", "PlayHearthstone", "PlayHearthstoneRU", "PlayhearthstoneKR", "PlayhearthstoneJP", "PlayHearthstoneFR", "Hearthstoneth", "Hearthstonezhtw"].join("|") + ")", "i");

            function p() {
                return null !== i ? i : i = r.p.experiments.getAssignment(o.b.FrenchVanilla) === c
            }

            function E() {
                return null !== a ? a : a = r.p.experiments.getAssignment(o.b.WatchSombra) === u
            }

            function m(e) {
                return !!e.match(d)
            }

            function f() {
                return null !== s ? s : s = r.p.experiments.getAssignment(o.b.VODMrPotatoHead) === u
            }

            function h() {
                return null !== l ? l : l = r.p.experiments.getAssignment(o.b.VODTopShelf) === u
            }
        },
        uYEN: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
                }(r || (r = {}))
        },
        vRsq: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return f
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "a", function() {
                return g
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "e", function() {
                return i
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "u", function() {
                return _
            }), n.d(t, "r", function() {
                return T
            }), n.d(t, "t", function() {
                return R
            }), n.d(t, "m", function() {
                return I
            }), n.d(t, "p", function() {
                return v
            }), n.d(t, "o", function() {
                return b
            }), n.d(t, "B", function() {
                return O
            }), n.d(t, "z", function() {
                return C
            }), n.d(t, "A", function() {
                return y
            }), n.d(t, "w", function() {
                return S
            }), n.d(t, "v", function() {
                return A
            }), n.d(t, "y", function() {
                return N
            }), n.d(t, "x", function() {
                return D
            }), n.d(t, "q", function() {
                return P
            }), n.d(t, "i", function() {
                return L
            }), n.d(t, "h", function() {
                return M
            }), n.d(t, "j", function() {
                return U
            }), n.d(t, "k", function() {
                return k
            }), n.d(t, "s", function() {
                return w
            }), n.d(t, "n", function() {
                return B
            }), n.d(t, "l", function() {
                return F
            });
            var r, o, i, a, s, l = n("cr+I"),
                c = n("/7QA"),
                u = n("QzU5"),
                d = n("+GjP"),
                p = n("DMoW"),
                E = n("tuvy"),
                m = n("XKWF"),
                f = "sort",
                h = "filter",
                g = "range";

            function _(e, t, n, r) {
                var i = r || T(t),
                    a = "";
                i && (a = "?" + f + "=" + function(e) {
                    switch (e) {
                        case m.a.Popular:
                            return o.Popular;
                        case m.a.Newest:
                            return o.Newest;
                        default:
                            var t = e;
                            return t
                    }
                }(i));
                var s = n ? n.toLowerCase() : function(e) {
                    var t = R(e);
                    return t ? t.toLowerCase() : "all"
                }(t);
                c.p.history.push(e + "/" + s + a)
            }

            function T(e) {
                var t = l.parse(e.location.search);
                return Object(m.b)(t.sort || "")
            }

            function R(e) {
                switch (e.match.params.filter) {
                    case u.a.Archive.toLowerCase():
                        return u.a.Archive;
                    case u.a.Highlight.toLowerCase():
                        return u.a.Highlight;
                    case u.a.Upload.toLowerCase():
                        return u.a.Upload;
                    case u.a.PastPremiere.toLowerCase():
                        return u.a.PastPremiere;
                    default:
                        return
                }
            }

            function I(e) {
                var t = l.parse(e.location.search);
                return e.match.params.collectionID || t.collection || null
            }

            function v(e) {
                return "" === e ? "" : e.startsWith("v") ? e : "v" + e
            }

            function b() {
                return Object(E.b)() ? "videos" : "videos/all"
            }

            function O(e) {
                switch (e) {
                    case u.a.Archive:
                        return i.PastBroadcasts;
                    case u.a.Highlight:
                        return i.Highlights;
                    case u.a.PastPremiere:
                        return i.PastPremieres;
                    case u.a.PremiereUpload:
                        return null;
                    case u.a.Upload:
                        return i.Uploads;
                    default:
                        return e
                }
            }

            function C(e) {
                switch (e) {
                    case i.Clips:
                        return a.Clips;
                    case i.Collections:
                        return a.Collections;
                    case i.Highlights:
                        return a.Highlights;
                    case i.PastBroadcasts:
                        return a.PastBroadcasts;
                    case i.PastPremieres:
                        return a.PastPremieres;
                    case i.Uploads:
                        return a.Uploads;
                    case i.All:
                        return a.All;
                    default:
                        return e
                }
            }

            function y(e) {
                switch (e) {
                    case a.Clips:
                        return i.Clips;
                    case a.Collections:
                        return i.Collections;
                    case a.Highlights:
                        return i.Highlights;
                    case a.PastBroadcasts:
                        return i.PastBroadcasts;
                    case a.PastPremieres:
                        return i.PastPremieres;
                    case a.Uploads:
                        return i.Uploads;
                    case a.All:
                        return i.All;
                    default:
                        return e
                }
            }

            function S(e) {
                return e.includes(a.Clips) ? a.Clips : e.includes(a.Collections) ? a.Collections : e.includes(a.Highlights) ? a.Highlights : e.includes(a.PastBroadcasts) ? a.PastBroadcasts : e.includes(a.PastPremieres) ? a.PastPremieres : e.includes(a.Uploads) ? a.Uploads : null
            }

            function A(e) {
                var t = Object(d.a)(e, g);
                if (!t) return null;
                switch (t.toLowerCase()) {
                    case r.All:
                        return r.All;
                    case r.Day:
                        return r.Day;
                    case r.Week:
                        return r.Week;
                    case r.Month:
                        return r.Month;
                    case r.Trending:
                        return r.Trending;
                    default:
                        return null
                }
            }

            function N(e) {
                var t = Object(d.a)(e, f);
                if (!t) return null;
                switch (t.toLowerCase()) {
                    case o.Newest:
                        return o.Newest;
                    case o.Popular:
                        return o.Popular;
                    default:
                        return null
                }
            }

            function D(e) {
                var t = Object(d.a)(e, h);
                if (!t) return null;
                switch (t.toLowerCase()) {
                    case i.Clips:
                        return i.Clips;
                    case i.Collections:
                        return i.Collections;
                    case i.Highlights:
                        return i.Highlights;
                    case i.PastBroadcasts:
                        return i.PastBroadcasts;
                    case i.PastPremieres:
                        return i.PastPremieres;
                    case i.Uploads:
                        return i.Uploads;
                    case i.All:
                        return i.All;
                    default:
                        return null
                }
            }

            function P(e, t) {
                var n = "" + b();
                t && t.filter && (n = t.filter);
                var r = "";
                return t && t.sort && (r = "?" + f + "=" + t.sort), "/" + e + "/" + n + r
            }

            function L(e, t, n) {
                return !t && n ? e ? "/" + e + "/" + s.Collection + "/" + n : "/collections/" + n : e ? "/" + e + "/" + s.Video + "/" + t + (n ? "?collection=" + n : "") : "/videos/" + t + (n ? "?collection=" + n : "")
            }

            function M(e, t) {
                return "/" + e + "/" + s.Clip + "/" + t
            }

            function U(e, t, n) {
                var r = "/" + e,
                    o = w(t),
                    i = function(e) {
                        return e.match.params.contentType === s.Clip && e.match.params.contentID || null
                    }(t),
                    a = B(t),
                    c = l.parse(t.location.search).collection;
                if (r = o ? r.concat("/" + s.Video + "/" + o + (c ? "?collection=" + c : "")) : i ? r.concat("/" + s.Clip + "/" + i) : a && !c ? r.concat("/" + s.Collection + "/" + a) : r.concat("/videos"), n) {
                    var u = x(n);
                    if (Object.keys(u).length > 0) return c ? r + "&" + l.stringify(u) : r + "?" + l.stringify(u)
                }
                return k(e, n)
            }

            function k(e, t) {
                var n = "/" + e + "/videos";
                if (t) {
                    var r = x(t);
                    if (Object.keys(r).length > 0) return n + "?" + l.stringify(r)
                }
                return n
            }

            function x(e) {
                var t = {};
                return e.sort && (t[f] = e.sort), e.filter && (t[h] = e.filter), e.range && (t[g] = e.range), t
            }

            function w(e) {
                return e.match.params.contentType === s.Video && e.match.params.contentID || e.match.params.videoID || null
            }

            function B(e) {
                var t = l.parse(location.search);
                return e.match.params.contentType === s.Collection && e.match.params.contentID || e.match.params.collectionID || t.collection || null
            }

            function F(e) {
                switch (e) {
                    case r.All:
                        return p.o.ALL_TIME;
                    case r.Day:
                        return p.o.LAST_DAY;
                    case r.Week:
                        return p.o.LAST_WEEK;
                    case r.Month:
                        return p.o.LAST_MONTH;
                    case r.Trending:
                        return p.o.TRENDING;
                    default:
                        return e
                }
            }! function(e) {
                e.All = "all", e.Month = "30d", e.Week = "7d", e.Day = "24hr", e.Trending = "trending"
            }(r || (r = {})),
            function(e) {
                e.Popular = "views", e.Newest = "time"
            }(o || (o = {})),
            function(e) {
                e.Clips = "clips", e.Collections = "collections", e.Highlights = "highlights", e.PastBroadcasts = "archives", e.PastPremieres = "past_premieres", e.Uploads = "uploads", e.All = "all"
            }(i || (i = {})),
            function(e) {
                e.Clips = "clips", e.Collections = "collections", e.Highlights = "videos/highlight", e.PastBroadcasts = "videos/archive", e.PastPremieres = "videos/past_premiere", e.Uploads = "videos/upload", e.All = "videos/all"
            }(a || (a = {})),
            function(e) {
                e.Video = "video", e.Clip = "clip", e.Collection = "collection"
            }(s || (s = {}))
        },
        x1M1: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("q1tI"),
                i = n("/MKj"),
                a = n("/0dD"),
                s = n("XDQu"),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = (e.defaultRes, e.sources),
                            n = (e.darkModeEnabled, r.__rest(e, ["defaultRes", "sources", "darkModeEnabled"])),
                            i = this.props.darkModeEnabled ? t.dark : t.light,
                            a = Object.keys(i);
                        delete n.dispatch;
                        var s = r.__assign({}, n, {
                            src: i[this.props.defaultRes || a[0]],
                            srcSet: a.map(function(e) {
                                return i[e] + " " + e
                            }).join(",")
                        });
                        return o.createElement("img", r.__assign({}, s, {
                            onLoad: this.props.onLoad
                        }))
                    }, t
                }(o.Component);
            var c = Object(i.connect)(function(e) {
                return {
                    darkModeEnabled: Object(s.a)(e) === a.a.Dark
                }
            })(l);
            n.d(t, "a", function() {
                return c
            })
        },
        y4Ne: function(e, t, n) {},
        zixI: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnblockUser"
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
                                    value: "UnblockUserInput"
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
                                value: "unblockUser"
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
                                        value: "targetUser"
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
                    end: 100
                }
            };
            n.loc.source = {
                body: "mutation UnblockUser($input: UnblockUserInput!) {\nunblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        }
    }
]);