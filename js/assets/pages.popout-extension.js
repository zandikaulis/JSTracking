(window.webpackJsonp = window.webpackJsonp || []).push([
    [93], {
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
                        return i.createElement(d.Bb, {
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
            var m = Object(s.compose)(Object(u.b)("ReportUserModal"), Object(a.connect)(null, function(e) {
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
                return m
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
            }), n.d(t, "H", function() {
                return u
            }), n.d(t, "I", function() {
                return d
            }), n.d(t, "n", function() {
                return p
            }), n.d(t, "A", function() {
                return m
            }), n.d(t, "G", function() {
                return E
            }), n.d(t, "r", function() {
                return h
            }), n.d(t, "s", function() {
                return f
            }), n.d(t, "o", function() {
                return g
            }), n.d(t, "t", function() {
                return T
            }), n.d(t, "v", function() {
                return _
            }), n.d(t, "l", function() {
                return R
            }), n.d(t, "d", function() {
                return b
            }), n.d(t, "c", function() {
                return v
            }), n.d(t, "B", function() {
                return I
            }), n.d(t, "b", function() {
                return O
            }), n.d(t, "a", function() {
                return C
            }), n.d(t, "E", function() {
                return y
            }), n.d(t, "F", function() {
                return S
            }), n.d(t, "m", function() {
                return A
            }), n.d(t, "C", function() {
                return N
            }), n.d(t, "D", function() {
                return D
            }), n.d(t, "J", function() {
                return P
            }), n.d(t, "q", function() {
                return L
            }), n.d(t, "w", function() {
                return M
            }), n.d(t, "f", function() {
                return k
            }), n.d(t, "g", function() {
                return x
            }), n.d(t, "x", function() {
                return U
            }), n.d(t, "k", function() {
                return B
            }), n.d(t, "p", function() {
                return w
            }), n.d(t, "u", function() {
                return F
            }), n.d(t, "z", function() {
                return V
            }), n.d(t, "y", function() {
                return W
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

            function m(e) {
                return o.PubsubTopic.UploadService + "." + e
            }

            function E(e) {
                return o.PubsubTopic.VideoPlaybackById + "." + e
            }

            function h(e) {
                return o.PubsubTopic.PayoutOnboardingEvents + "." + e
            }

            function f(e) {
                return o.PubsubTopic.Presence + "." + e
            }

            function g(e, t) {
                return o.PubsubTopic.ModerationActionsByUserAndChannel + "." + e + "." + t
            }

            function T(e) {
                return o.PubsubTopic.Raid + "." + e
            }

            function _(e) {
                return o.PubsubTopic.StreamChange + "." + e
            }

            function R(e) {
                return o.PubsubTopic.Friendship + "." + e
            }

            function b(e) {
                return o.PubsubTopic.ChannelBitsPinEvents + "." + e
            }

            function v(e) {
                return o.PubsubTopic.BitsLeaderboardEvents + "." + e.id
            }

            function I(e) {
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

            function k(e) {
                return o.PubsubTopic.ChannelEventUpdates + "." + e
            }

            function x(e) {
                return o.PubsubTopic.ChannelSquadUpdates + "." + e
            }

            function U(e) {
                return o.PubsubTopic.SubscribersCSV + "." + e
            }

            function B(e) {
                return o.PubsubTopic.CheerbombEventsTopic + "." + e
            }

            function w(e) {
                return o.PubsubTopic.MysteryGift + "." + e
            }

            function F(e) {
                return o.PubsubTopic.SquadUpdates + "." + e
            }

            function V(e) {
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

            function W(e) {
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
            var s = ((r = {})[a.y.DEFAULT] = o.Default, r[a.y.EXTENSION] = o.Extension, r);

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
            }), n.d(t, "SquadStatus", function() {
                return i.e
            }), n.d(t, "TargetedModerationActions", function() {
                return i.f
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
            n.d(t, "d", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "h", function() {
                return c
            }), n.d(t, "f", function() {
                return u
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "g", function() {
                return p
            });
            var r = n("/7QA"),
                o = n("D7An");

            function i(e, t) {
                return "/ext/" + m(e, t)
            }

            function a(e, t, n) {
                return "control" === r.p.experiments.getAssignment(o.b.ExtensionConfigureModal) ? {
                    pathname: s(e) + "/" + m(t, n) + "/configure"
                } : {
                    pathname: "" + l(e),
                    search: "?configure=true&extensionID=" + m(t, n)
                }
            }

            function s(e) {
                return "/" + e + "/dashboard/extensions"
            }

            function l(e) {
                return "/" + e + "/dashboard/extensions/manage"
            }

            function c(e) {
                return "/" + e + "/dashboard/extensions/whitelisted"
            }

            function u(e, t) {
                return {
                    pathname: "/" + e + "/dashboard/extensions/permissions",
                    state: t
                }
            }

            function d(e) {
                return "/ext/categories/" + e
            }

            function p(e) {
                return "/ext/search?q=" + encodeURIComponent(e)
            }

            function m(e, t) {
                return t ? e + "-" + t : e
            }
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
                    m = o("cheermote-for-amount__cheer-amount", {
                        "cheermote-for-amount__display--table-cell": !d
                    }, {
                        "cheermote-for-amount__cheer-amount--medium": e.size === r.Medium
                    }, {
                        "cheermote-for-amount__cheer-amount--small": e.size === r.Small || e.size === r.ExtraSmall
                    }, {
                        "cheermote-for-amount__cheer-amount--extremely-small": e.size === r.ExtremelySmall
                    });
                if (void 0 !== e.amount && e.showAmount) {
                    var E = e.formattedNumber ? Object(a.f)(e.amount) : e.amount;
                    p = i.createElement(u.Pa, {
                        padding: e.size === r.Small ? 0 : void 0,
                        textAlign: e.size === r.Small ? u.Nb.Center : void 0
                    }, i.createElement("strong", {
                        className: m,
                        style: {
                            color: n.color
                        }
                    }, E))
                }
                var h = o("cheermote-for-amount__cheer-image", {
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
                    f = i.createElement(c.a, {
                        className: h,
                        sources: Object(s.c)(n, e.size || r.Large, e.animated)
                    });
                return e.showImage || (f = null), i.createElement(u.Pa, {
                    className: "cheermote-for-amount",
                    alignItems: e.alignItems,
                    display: e.display
                }, i.createElement("span", null, f, p))
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
                    var a = m(e, r.a.Yellow);
                    o.set(r.a.Yellow, a), i.push(a)
                }
                return i.push.apply(i, n.map(function(t) {
                    var n = m(e, t);
                    return o.set(t, n), n
                })), {
                    prefix: e,
                    type: t,
                    tiers: i,
                    orderedTiers: i,
                    indexedTiers: o
                }
            }

            function m(e, t) {
                for (var n = [], r = {}, i = 0, l = a; i < l.length; i++)
                    for (var c = l[i], u = 0, d = s; u < d.length; u++) {
                        var p = d[u];
                        r[c] || (r[c] = {
                            animated: new Map,
                            static: new Map
                        });
                        var m = E(e, c, !0, t, p);
                        n.push(m), r[c].animated.set(p, m.url);
                        var h = E(e, c, !1, t, p);
                        n.push(h), r[c].static.set(p, h.url)
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

            function E(e, t, n, r, o) {
                var i = n ? "gif" : "png";
                return {
                    theme: t,
                    isAnimated: n,
                    dpiScale: o,
                    url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + r + "/" + o + "." + i
                }
            }
        },
        "4qQ0": function(e, t, n) {
            "use strict";
            var r, o;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return o
                }),
                function(e) {
                    e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
                }(r || (r = {})),
                function(e) {
                    e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
                }(o || (o = {}))
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
                return m
            }), n.d(t, "f", function() {
                return E
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

            function m(e) {
                o.o.track(i.SpadeEventType.ExtensionPopoutClicked, p(e))
            }

            function E(e) {
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
            var m = Object(i.connect)(p)(d);
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return r.a
            }), n.d(t, "c", function() {
                return o.a
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "b", function() {
                return m
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
                return m
            }), n.d(t, "r", function() {
                return E
            }), n.d(t, "l", function() {
                return h
            }), n.d(t, "m", function() {
                return f
            }), n.d(t, "j", function() {
                return g
            }), n.d(t, "g", function() {
                return T
            }), n.d(t, "e", function() {
                return _
            }), n.d(t, "i", function() {
                return R
            }), n.d(t, "h", function() {
                return b
            }), n.d(t, "f", function() {
                return v
            }), n.d(t, "k", function() {
                return I
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
                m = 500,
                E = 1e3,
                h = "cheer",
                f = o.a.Purple,
                g = "UNKNOWN",
                T = "FIRST_PARTY",
                _ = "CUSTOM",
                R = "SPONSORED",
                b = "THIRD_PARTY",
                v = "DISPLAY_ONLY",
                I = ((r = {})[o.a.Gray] = "#979797", r[o.a.Purple] = "#9c3ee8", r[o.a.Green] = "#1db2a5", r[o.a.Blue] = "#0099fe", r[o.a.Red] = "#f43021", r[o.a.Yellow] = "#f3a71a", r),
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
                                return i.trys.push([1, 3, , 4]), [4, Promise.all([n.e(0), n.e(96)]).then(function() {
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
            var r, o, i, a, s, l, c, u, d, p, m, E, h, f, g, T, _, R, b, v, I, O, C, y, S, A, N, D, P, L, M, k, x, U, B, w, F, V, W, j, G, z, H, X, Y, q, K, Q, Z, J, $, ee, te, ne, re, oe, ie, ae, se, le, ce, ue, de, pe, me, Ee, he, fe, ge, Te, _e, Re, be, ve, Ie, Oe, Ce, ye, Se, Ae, Ne, De, Pe, Le, Me, ke, xe, Ue, Be, we, Fe, Ve, We, je, Ge, ze, He, Xe, Ye, qe, Ke, Qe, Ze, Je, $e, et, tt, nt, rt, ot, it, at, st, lt;
            n.d(t, "c", function() {
                    return o
                }), n.d(t, "G", function() {
                    return s
                }), n.d(t, "x", function() {
                    return l
                }), n.d(t, "g", function() {
                    return h
                }), n.d(t, "e", function() {
                    return _
                }), n.d(t, "f", function() {
                    return R
                }), n.d(t, "k", function() {
                    return I
                }), n.d(t, "Q", function() {
                    return O
                }), n.d(t, "I", function() {
                    return C
                }), n.d(t, "o", function() {
                    return y
                }), n.d(t, "i", function() {
                    return N
                }), n.d(t, "H", function() {
                    return D
                }), n.d(t, "b", function() {
                    return U
                }), n.d(t, "q", function() {
                    return B
                }), n.d(t, "p", function() {
                    return F
                }), n.d(t, "K", function() {
                    return V
                }), n.d(t, "M", function() {
                    return W
                }), n.d(t, "B", function() {
                    return j
                }), n.d(t, "N", function() {
                    return G
                }), n.d(t, "A", function() {
                    return z
                }), n.d(t, "z", function() {
                    return H
                }), n.d(t, "n", function() {
                    return X
                }), n.d(t, "L", function() {
                    return Y
                }), n.d(t, "a", function() {
                    return q
                }), n.d(t, "t", function() {
                    return K
                }), n.d(t, "v", function() {
                    return Q
                }), n.d(t, "D", function() {
                    return J
                }), n.d(t, "E", function() {
                    return $
                }), n.d(t, "C", function() {
                    return te
                }), n.d(t, "F", function() {
                    return ne
                }), n.d(t, "P", function() {
                    return ie
                }), n.d(t, "O", function() {
                    return Ee
                }), n.d(t, "m", function() {
                    return Ie
                }), n.d(t, "l", function() {
                    return Oe
                }), n.d(t, "R", function() {
                    return Ae
                }), n.d(t, "y", function() {
                    return xe
                }), n.d(t, "s", function() {
                    return we
                }), n.d(t, "j", function() {
                    return Ve
                }), n.d(t, "h", function() {
                    return We
                }), n.d(t, "u", function() {
                    return je
                }), n.d(t, "J", function() {
                    return ze
                }), n.d(t, "w", function() {
                    return Je
                }), n.d(t, "d", function() {
                    return at
                }), n.d(t, "r", function() {
                    return st
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
                }(m || (m = {})),
                function(e) {
                    e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_HK = "ZH_HK"
                }(E || (E = {})),
                function(e) {
                    e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
                }(h || (h = {})),
                function(e) {
                    e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
                }(f || (f = {})),
                function(e) {
                    e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
                }(g || (g = {})),
                function(e) {
                    e.AD = "AD", e.BUNDLE = "BUNDLE"
                }(T || (T = {})),
                function(e) {
                    e.GAME_TRAILER = "GAME_TRAILER", e.MISC_TRAILER = "MISC_TRAILER", e.PAY_TO_STREAM = "PAY_TO_STREAM"
                }(_ || (_ = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
                }(R || (R = {})),
                function(e) {
                    e.FIXED_VALUE_OFF = "FIXED_VALUE_OFF", e.NONE = "NONE", e.PERCENT_OFF = "PERCENT_OFF"
                }(b || (b = {})),
                function(e) {
                    e.CHEER = "CHEER"
                }(v || (v = {})),
                function(e) {
                    e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
                }(I || (I = {})),
                function(e) {
                    e.PRIVATE = "PRIVATE", e.PUBLIC = "PUBLIC"
                }(O || (O = {})),
                function(e) {
                    e.ENDED = "ENDED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.UNKNOWN = "UNKNOWN"
                }(C || (C = {})),
                function(e) {
                    e.ARCHIVES_DISABLED = "ARCHIVES_DISABLED", e.BROADCASTER_NOT_LIVE = "BROADCASTER_NOT_LIVE", e.BROADCAST_FORMAT_INVALID_PREMIERE = "BROADCAST_FORMAT_INVALID_PREMIERE", e.BROADCAST_FORMAT_INVALID_RERUN = "BROADCAST_FORMAT_INVALID_RERUN", e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.MAX_DESCRIPTION_LENGTH_EXCEEDED = "MAX_DESCRIPTION_LENGTH_EXCEEDED", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED", e.VOD_NOT_READY = "VOD_NOT_READY"
                }(y || (y = {})),
                function(e) {
                    e.DARK = "DARK", e.LIGHT = "LIGHT"
                }(S || (S = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.DISPLAY_ONLY = "DISPLAY_ONLY", e.FIRST_PARTY = "FIRST_PARTY", e.RENDER_ONLY = "RENDER_ONLY", e.SPONSORED = "SPONSORED", e.THIRD_PARTY = "THIRD_PARTY", e.UNKNOWN = "UNKNOWN"
                }(A || (A = {})),
                function(e) {
                    e.FOLLOWERS_ONLY = "FOLLOWERS_ONLY", e.SLOW_MODE = "SLOW_MODE", e.SUBSCRIBERS_ONLY = "SUBSCRIBERS_ONLY", e.VERIFIED_ONLY = "VERIFIED_ONLY"
                }(N || (N = {})),
                function(e) {
                    e.AMOUNT_BELOW_MIN_BITS = "AMOUNT_BELOW_MIN_BITS", e.AUTO_MOD_MESSAGE = "AUTO_MOD_MESSAGE", e.AUTO_MOD_PENDING = "AUTO_MOD_PENDING", e.CHANNEL_BLOCKED_TERMS = "CHANNEL_BLOCKED_TERMS", e.CHANNEL_INELIGIBLE = "CHANNEL_INELIGIBLE", e.EMOTE_AMOUNT_BELOW_MIN_BITS = "EMOTE_AMOUNT_BELOW_MIN_BITS", e.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE", e.INVALID_BITS_AMOUNT = "INVALID_BITS_AMOUNT", e.INVALID_BITS_MESSAGE = "INVALID_BITS_MESSAGE", e.INVALID_EVENT_ID = "INVALID_EVENT_ID", e.MESSAGE_LENGTH_EXCEEDED = "MESSAGE_LENGTH_EXCEEDED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.TOO_LARGE_BITS_EMOTE = "TOO_LARGE_BITS_EMOTE", e.TOO_LARGE_CHEER = "TOO_LARGE_CHEER", e.UNKNOWN = "UNKNOWN", e.USER_BANNED = "USER_BANNED", e.USER_INELIGIBLE = "USER_INELIGIBLE", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_MESSAGE = "ZALGO_MESSAGE"
                }(D || (D = {})),
                function(e) {
                    e.NEW_CHATTER = "NEW_CHATTER"
                }(P || (P = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(L || (L = {})),
                function(e) {
                    e.FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.SUB_ONLY_MODE_ENFORCEMENT_FAILED = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT"
                }(M || (M = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(k || (k = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.DISMISSED = "DISMISSED", e.ELIGIBLE = "ELIGIBLE", e.REDEEMED = "REDEEMED"
                }(x || (x = {})),
                function(e) {
                    e.DURATION_INVALID = "DURATION_INVALID", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_BANNED = "TARGET_ALREADY_BANNED", e.TARGET_IS_ADMIN = "TARGET_IS_ADMIN", e.TARGET_IS_ANONYMOUS = "TARGET_IS_ANONYMOUS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_GLOBAL_MOD = "TARGET_IS_GLOBAL_MOD", e.TARGET_IS_MOD = "TARGET_IS_MOD", e.TARGET_IS_SELF = "TARGET_IS_SELF", e.TARGET_IS_STAFF = "TARGET_IS_STAFF", e.TARGET_IS_VIP = "TARGET_IS_VIP", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(U || (U = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.SUCCESS = "SUCCESS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_MODERATOR = "TARGET_IS_MODERATOR"
                }(B || (B = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_BANNED = "TARGET_NOT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(w || (w = {})),
                function(e) {
                    e.EUR = "EUR", e.GBP = "GBP", e.USD = "USD"
                }(F || (F = {})),
                function(e) {
                    e.MONTH = "MONTH", e.ONE_TIME = "ONE_TIME", e.WEEK = "WEEK", e.YEAR = "YEAR"
                }(V || (V = {})),
                function(e) {
                    e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
                }(W || (W = {})),
                function(e) {
                    e.GOOGLE_IAB = "GOOGLE_IAB", e.PRIME = "PRIME", e.RECURLY = "RECURLY", e.XSOLLA_V3 = "XSOLLA_V3", e.ZUORA = "ZUORA"
                }(j || (j = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
                }(G || (G = {})),
                function(e) {
                    e.AMAZON = "AMAZON", e.CREDIT_CARD = "CREDIT_CARD", e.GOOGLE_IAB = "GOOGLE_IAB", e.PAYPAL = "PAYPAL"
                }(z || (z = {})),
                function(e) {
                    e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.DISCOVER = "DISCOVER", e.MASTERCARD = "MASTERCARD", e.VISA = "VISA"
                }(H || (H = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CLIP = "CLIP", e.LIVE_CHANNEL = "LIVE_CHANNEL", e.VOD = "VOD"
                }(X || (X = {})),
                function(e) {
                    e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
                }(Y || (Y = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
                }(q || (q = {})),
                function(e) {
                    e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
                }(K || (K = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
                }(Q || (Q = {})),
                function(e) {
                    e.GAME_COMMERCE = "GAME_COMMERCE", e.GAME_COMMERCE_V2 = "GAME_COMMERCE_V2"
                }(Z || (Z = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
                }(J || (J = {})),
                function(e) {
                    e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
                }($ || ($ = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_AGREEMENT_VERSION = "INVALID_AGREEMENT_VERSION", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(ee || (ee = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
                }(te || (te = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
                }(ne || (ne = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_FORMAT = "INVALID_FORMAT", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(re || (re = {})),
                function(e) {
                    e.BIRTHDATE = "BIRTHDATE", e.CITY = "CITY", e.COMPANY_NAME = "COMPANY_NAME", e.COUNTRY_CODE = "COUNTRY_CODE", e.EMAIL = "EMAIL", e.FIRST_NAME = "FIRST_NAME", e.LAST_NAME = "LAST_NAME", e.MIDDLE_NAME = "MIDDLE_NAME", e.PARENT_EMAIL = "PARENT_EMAIL", e.PARENT_NAME = "PARENT_NAME", e.POSTAL = "POSTAL", e.STATE_CODE = "STATE_CODE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(oe || (oe = {})),
                function(e) {
                    e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.EMAIL = "EMAIL", e.NAME = "NAME", e.POSTAL = "POSTAL", e.STATE = "STATE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ie || (ie = {})),
                function(e) {
                    e.ROYALTY = "ROYALTY", e.SERVICE = "SERVICE"
                }(ae || (ae = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EVERYONE = "EVERYONE", e.MODERATOR = "MODERATOR", e.SUBSCRIBER = "SUBSCRIBER"
                }(se || (se = {})),
                function(e) {
                    e.MAX_ROOMS_LIMIT_EXCEEDED = "MAX_ROOMS_LIMIT_EXCEEDED", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(le || (le = {})),
                function(e) {
                    e.ADMIN = "ADMIN", e.BROADCASTER = "BROADCASTER", e.GLOBALMOD = "GLOBALMOD", e.MOD = "MOD", e.REGULAR = "REGULAR", e.STAFF = "STAFF"
                }(ce || (ce = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(ue || (ue = {})),
                function(e) {
                    e.AUTO_MOD_ENFORCEMENT_FAILED = "AUTO_MOD_ENFORCEMENT_FAILED", e.EMOTE_ONLY_MODE_ENFORCEMENT_FAILED = "EMOTE_ONLY_MODE_ENFORCEMENT_FAILED", e.FORBIDDEN = "FORBIDDEN", e.R9K_MODE_ENFORCEMENT_FAILED = "R9K_MODE_ENFORCEMENT_FAILED", e.RATE_LIMIT_FAILED = "RATE_LIMIT_FAILED", e.SLOW_MODE_ENFORCEMENT_FAILED = "SLOW_MODE_ENFORCEMENT_FAILED", e.SPAM_ENFORCEMENT_FAILED = "SPAM_ENFORCEMENT_FAILED", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_ENFORCEMENT_FAILED = "ZALGO_ENFORCEMENT_FAILED"
                }(de || (de = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.SLOW_MODE_DURATION_INVALID = "SLOW_MODE_DURATION_INVALID"
                }(pe || (pe = {})),
                function(e) {
                    e.CSGO_SKILL = "CSGO_SKILL", e.LOL_SUMMONER_RANK = "LOL_SUMMONER_RANK", e.RELEVANCE = "RELEVANCE", e.VIEWER_COUNT = "VIEWER_COUNT"
                }(me || (me = {})),
                function(e) {
                    e.CONTENT = "CONTENT", e.TOP = "TOP"
                }(Ee || (Ee = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(he || (he = {})),
                function(e) {
                    e.CLAIMABLE_GIFT_CREATION_ERROR = "CLAIMABLE_GIFT_CREATION_ERROR", e.GIFT_CREATION_ERROR = "GIFT_CREATION_ERROR", e.MAX_GIFTS_FOR_OFFER_EXCEEDED = "MAX_GIFTS_FOR_OFFER_EXCEEDED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(fe || (fe = {})),
                function(e) {
                    e.CLAIM_CODE = "CLAIM_CODE", e.DIRECT_ENTITLEMENT = "DIRECT_ENTITLEMENT", e.EXTERNAL = "EXTERNAL"
                }(ge || (ge = {})),
                function(e) {
                    e.ERROR_STATUS = "ERROR_STATUS", e.GIFT_CLAIMED = "GIFT_CLAIMED", e.GIFT_CLAIM_PENDING = "GIFT_CLAIM_PENDING"
                }(Te || (Te = {})),
                function(e) {
                    e.GIFT_NOT_CLAIMABLE = "GIFT_NOT_CLAIMABLE", e.NON_EXISTENT_GIFT = "NON_EXISTENT_GIFT", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.USER_DOES_NOT_OWN_GIFT = "USER_DOES_NOT_OWN_GIFT"
                }(_e || (_e = {})),
                function(e) {
                    e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
                }(Re || (Re = {})),
                function(e) {
                    e.TOO_MANY_RECENT_SPENDS = "TOO_MANY_RECENT_SPENDS", e.UNABLE_TO_SPEND = "UNABLE_TO_SPEND"
                }(be || (be = {})),
                function(e) {
                    e.OFFER_ALREADY_CLAIMED = "OFFER_ALREADY_CLAIMED", e.UNKNOWN = "UNKNOWN"
                }(ve || (ve = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.SERIES = "SERIES"
                }(Ie || (Ie = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK", e.TRENDING = "TRENDING"
                }(Oe || (Oe = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK"
                }(Ce || (Ce = {})),
                function(e) {
                    e.CREATED_AT_ASC = "CREATED_AT_ASC", e.CREATED_AT_DESC = "CREATED_AT_DESC", e.TRENDING = "TRENDING", e.VIEWS_ASC = "VIEWS_ASC", e.VIEWS_DESC = "VIEWS_DESC"
                }(ye || (ye = {})),
                function(e) {
                    e.HIGH = "HIGH", e.LOW = "LOW", e.MEDIUM = "MEDIUM"
                }(Se || (Se = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.NOT_RESTRICTED = "NOT_RESTRICTED", e.PERMITTED = "PERMITTED", e.TEMPORARY = "TEMPORARY"
                }(Ae || (Ae = {})),
                function(e) {
                    e.BODY_EMPTY = "BODY_EMPTY", e.NOT_DELIVERED = "NOT_DELIVERED", e.TARGET_BANNED = "TARGET_BANNED", e.TARGET_RESTRICTED = "TARGET_RESTRICTED"
                }(Ne || (Ne = {})),
                function(e) {
                    e.ALREADY_LINKED = "ALREADY_LINKED", e.CODE_EXPIRED = "CODE_EXPIRED", e.CODE_INCORRECT = "CODE_INCORRECT"
                }(De || (De = {})),
                function(e) {
                    e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
                }(Pe || (Pe = {})),
                function(e) {
                    e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
                }(Le || (Le = {})),
                function(e) {
                    e.ASC = "ASC", e.DESC = "DESC"
                }(Me || (Me = {})),
                function(e) {
                    e.TIME = "TIME", e.VIEWS = "VIEWS"
                }(ke || (ke = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
                }(xe || (xe = {})),
                function(e) {
                    e.ALREADY_CLAIMED = "ALREADY_CLAIMED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN = "UNKNOWN"
                }(Ue || (Ue = {})),
                function(e) {
                    e.BITS_KEY_CODE = "BITS_KEY_CODE"
                }(Be || (Be = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
                }(we || (we = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING"
                }(Fe || (Fe = {})),
                function(e) {
                    e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ve || (Ve = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(We || (We = {})),
                function(e) {
                    e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
                }(je || (je = {})),
                function(e) {
                    e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ge || (Ge = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(ze || (ze = {})),
                function(e) {
                    e.SQUAD_NOT_FOUND = "SQUAD_NOT_FOUND", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(He || (He = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.TARGET_USER_ALREADY_EDITOR = "TARGET_USER_ALREADY_EDITOR", e.TARGET_USER_NOT_FOUND = "TARGET_USER_NOT_FOUND"
                }(Xe || (Xe = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.TARGET_USER_NOT_FOUND = "TARGET_USER_NOT_FOUND"
                }(Ye || (Ye = {})),
                function(e) {
                    e.BASELINE = "BASELINE", e.HIGH = "HIGH", e.MAIN = "MAIN"
                }(qe || (qe = {})),
                function(e) {
                    e.HYPE = "HYPE", e.STARTTIME = "STARTTIME"
                }(Ke || (Ke = {})),
                function(e) {
                    e.CANCELLED = "CANCELLED", e.FAILED = "FAILED", e.SCHEDULED = "SCHEDULED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UNSCHEDULED = "UNSCHEDULED"
                }(Qe || (Qe = {})),
                function(e) {
                    e.PREMIERE = "PREMIERE", e.SEGMENT = "SEGMENT", e.SINGLE = "SINGLE", e.TIMETABLE = "TIMETABLE"
                }(Ze || (Ze = {})),
                function(e) {
                    e.ALL = "ALL", e.LIVE = "LIVE"
                }(Je || (Je = {})),
                function(e) {
                    e.PRICE_ASC = "PRICE_ASC", e.PRICE_DESC = "PRICE_DESC", e.PURCHASE_DATE_ASC = "PURCHASE_DATE_ASC", e.PURCHASE_DATE_DESC = "PURCHASE_DATE_DESC"
                }($e || ($e = {})),
                function(e) {
                    e.ALL = "ALL", e.SUBSCRIPTIONS = "SUBSCRIPTIONS"
                }(et || (et = {})),
                function(e) {
                    e.SUBSCRIPTION = "SUBSCRIPTION"
                }(tt || (tt = {})),
                function(e) {
                    e.MONKEYS = "MONKEYS", e.PURPLE = "PURPLE", e.ROBOTS = "ROBOTS"
                }(nt || (nt = {})),
                function(e) {
                    e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
                }(rt || (rt = {})),
                function(e) {
                    e.INVALID_USER_ID = "INVALID_USER_ID", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(ot || (ot = {})),
                function(e) {
                    e.DELETED = "DELETED", e.PENDING_REVIEW = "PENDING_REVIEW", e.PENDING_REVIEW_SPAM = "PENDING_REVIEW_SPAM", e.PUBLISHED = "PUBLISHED", e.UNPUBLISHED = "UNPUBLISHED"
                }(it || (it = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED"
                }(at || (at = {})),
                function(e) {
                    e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
                }(st || (st = {})),
                function(e) {
                    e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
                }(lt || (lt = {}))
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
                    e.Badge = "badge_update", e.Balance = "balance_update"
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
                            return e.state = {
                                hadImpression: !1,
                                didScroll: !1
                            }, e.logger = a.k.withCategory("with-impression-listener"), e.setRef = function(t) {
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
                                    hadImpression: this.state.hadImpression,
                                    didScroll: this.state.didScroll,
                                    registerImpressionCallback: this.registerImpressionCallback
                                }
                            };
                            return i.createElement("div", {
                                ref: this.setRef
                            }, i.createElement(n, r.__assign({}, this.props, e)))
                        }, c.prototype.checkVisible = function(e) {
                            return r.__awaiter(this, void 0, void 0, function() {
                                var t, n;
                                return r.__generator(this, function(r) {
                                    return this.state.hadImpression || (t = this.isVisible(e)) && (n = this.isScrolled(), this.setState({
                                        hadImpression: t,
                                        didScroll: n
                                    }), this.reportImpression && this.reportImpression(n)), [2]
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
                        }, i.createElement(u.xb, {
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
                m = Object(s.compose)(Object(l.a)(d, {
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
                return E
            }), n.d(t, "b", function() {
                return h
            });
            var E;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(E || (E = {}));
            var h = function(e) {
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
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(E.FormError)
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
                    return this.props.submitStatus === E.Success ? i.createElement("div", null, i.createElement(u.z, {
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
                        type: u.Rb.H4
                    }, this.props.title), i.createElement(u.Bb, {
                        color: u.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), i.createElement("form", null, i.createElement(u.Bb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, i.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), i.createElement(u.Ea, {
                        id: "reporting__text-area",
                        label: Object(a.d)("Description (required)", "ReportUser")
                    }, i.createElement(u.Ob, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), i.createElement(u.Bb, {
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
                        case E.FormError:
                            e = Object(a.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case E.MutationError:
                            e = Object(a.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case E.Success:
                            e = Object(a.d)("Thank you for your report.", "ReportUser");
                            break;
                        case E.UserError:
                            e = Object(a.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = o({
                        "reporting__error-container": this.props.submitStatus !== E.Success,
                        "reporting__success-container": this.props.submitStatus === E.Success
                    });
                    return i.createElement(u.Bb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== E.Success,
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
                m = n("q1tI"),
                E = n("oJmH"),
                h = n("/7QA"),
                f = n("eJ65"),
                g = n("edgk"),
                T = n("2xye"),
                _ = n("3CMh"),
                R = n("0Log"),
                b = n("geRD"),
                v = n("/aPz"),
                I = n("H31v");

            function O(e, t, n) {
                Object(b.e)(e, void 0, function(e) {
                    return e ? (e.currentUser && e.currentUser.bitsBalance && (e.currentUser.bitsBalance = n), e) : e
                }, function() {
                    return !t
                })
            }
            var C, y = n("4h+t"),
                S = n("BaCc"),
                A = n("Ue10"),
                N = "test_selector_legal_disclaimer",
                D = "test_selector_confirm_button",
                P = "test_selector_buy_bits_button",
                L = "test_selector_cancel_button",
                M = function(e) {
                    var t = Object(y.a)(),
                        n = Object(h.d)("Confirm", "BitsConfrimationDialogue"),
                        r = Object(h.d)("Settings", "BitsConfrimationDialogue"),
                        o = m.createElement(A.U, {
                            to: "https://www.twitch.tv/settings/connections"
                        }, r),
                        i = m.createElement(A.Pa, {
                            display: A.X.InlineFlex,
                            alignContent: A.e.Center,
                            alignItems: A.f.Center,
                            margin: {
                                left: .5
                            }
                        }, m.createElement("span", null, m.createElement(_.a, {
                            animated: !1,
                            showImage: !0,
                            showAmount: !0,
                            prefix: "Cheer",
                            bitsConfig: t,
                            size: _.b.ExtremelySmall,
                            display: A.X.InlineFlex,
                            amount: e.newBalance,
                            alignItems: A.f.Center,
                            formattedNumber: !0
                        }))),
                        a = Object(h.d)("After confirming, your Bits balance will be {newBalance}", {
                            newBalance: i
                        }, "BitsConfrimationDialogue"),
                        s = Object(h.d)('By clicking "{ConfirmText}," you agree to share your Twitch ID with {ExtensionName}. You can manage account connections under {Settings}.', {
                            ConfirmText: n,
                            ExtensionName: e.extensionName,
                            Settings: o
                        }, "BitsConfrimationDialogue");
                    return m.createElement(A.Xa, {
                        className: "bits-confirmation-dialog"
                    }, m.createElement(A.Xa, {
                        padding: 1
                    }, m.createElement(A.Xa, {
                        margin: {
                            bottom: 1
                        },
                        display: A.X.Flex,
                        justifyContent: A.Wa.Between
                    }, m.createElement(A.Xa, null, m.createElement(A.W, {
                        fontSize: A.Ca.Size5,
                        bold: !0
                    }, e.extensionItemLabel), m.createElement(A.W, null, e.extensionName)), m.createElement("span", null, m.createElement(_.a, {
                        animated: !1,
                        showImage: !0,
                        showAmount: !0,
                        prefix: "Cheer",
                        bitsConfig: t,
                        size: _.b.ExtraSmall,
                        display: A.X.InlineFlex,
                        amount: e.cost,
                        alignItems: A.f.Center
                    }))), m.createElement(A.Xa, {
                        display: A.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, m.createElement(A.Pa, {
                        display: A.X.Flex
                    }, m.createElement(A.W, null, a))), m.createElement(A.Xa, {
                        display: A.X.Inline
                    }, m.createElement(A.Xa, {
                        display: A.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, m.createElement(A.z, {
                        "data-test-selector": D,
                        onClick: function() {
                            e.onConfirm().then(function(t) {
                                "number" == typeof t && Number.isInteger(t) && O(S, e.userID, t)
                            }), O(S, e.userID, e.newBalance)
                        }
                    }, n)), m.createElement(A.Xa, {
                        display: A.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, m.createElement(A.z, {
                        "data-test-selector": P,
                        linkTo: e.bitsLandingPageUrl,
                        targetBlank: !0,
                        type: A.F.Hollow
                    }, e.buyBitsText)), m.createElement(A.Xa, {
                        display: A.X.InlineBlock
                    }, m.createElement(A.z, {
                        "data-test-selector": L,
                        onClick: e.onClose,
                        type: A.F.Hollow
                    }, e.cancelText)))), m.createElement(A.Bb, {
                        borderTop: !0,
                        padding: 1
                    }, m.createElement(A.W, {
                        "data-test-selector": N
                    }, s)))
                },
                k = "test_selector_buy_bits_button",
                x = "test_selector_cancel_button",
                U = Object(y.a)(),
                B = function(e) {
                    var t, n = e.bitsBalance - e.cost,
                        r = Math.abs(n),
                        o = m.createElement(A.Pa, {
                            display: A.X.InlineFlex,
                            margin: {
                                x: .5
                            }
                        }, m.createElement("span", null, m.createElement(_.a, {
                            animated: !1,
                            showImage: !0,
                            showAmount: !0,
                            prefix: "Cheer",
                            bitsConfig: U,
                            size: _.b.ExtremelySmall,
                            display: A.X.InlineFlex,
                            amount: r,
                            alignItems: A.f.Center,
                            formattedNumber: !0
                        })));
                    return t = m.createElement(A.Pa, {
                        display: A.X.Flex
                    }, m.createElement(A.W, null, Object(h.d)("You need {BitsRequired} more Bits to proceed.", {
                        BitsRequired: o
                    }, "BitsUpsellDialog"))), m.createElement(A.Xa, {
                        className: "bits-upsell-dialog",
                        padding: 1
                    }, m.createElement(A.Xa, {
                        margin: {
                            bottom: 1
                        },
                        display: A.X.Flex,
                        justifyContent: A.Wa.Between
                    }, m.createElement(A.Xa, null, m.createElement(A.W, {
                        fontSize: A.Ca.Size5,
                        bold: !0
                    }, e.extensionItemLabel), m.createElement(A.W, null, e.extensionName)), m.createElement("span", null, m.createElement(_.a, {
                        animated: !1,
                        showImage: !0,
                        showAmount: !0,
                        prefix: "Cheer",
                        bitsConfig: U,
                        size: _.b.ExtraSmall,
                        display: A.X.InlineFlex,
                        amount: e.cost,
                        alignItems: A.f.Center
                    }))), m.createElement(A.Xa, {
                        display: A.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, t), m.createElement(A.Xa, {
                        display: A.X.Inline
                    }, m.createElement(A.Xa, {
                        display: A.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, m.createElement(A.z, {
                        "data-test-selector": k,
                        linkTo: e.bitsLandingPageUrl,
                        targetBlank: !0,
                        type: A.F.Default
                    }, e.buyBitsText)), m.createElement(A.Xa, {
                        display: A.X.InlineBlock
                    }, m.createElement(A.z, {
                        "data-test-selector": x,
                        onClick: e.onClose,
                        type: A.F.Hollow
                    }, e.cancelText))))
                },
                w = function(e) {
                    var t = Object(h.d)("Buy Bits", "UseBitsDialog"),
                        n = Object(h.d)("Cancel", "UseBitsDialog"),
                        r = null;
                    if (e)
                        if (e.bitsBalance >= e.cost) {
                            var o = e.bitsBalance - e.cost;
                            r = m.createElement(M, {
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
                        } else r = m.createElement(B, {
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
                    return m.createElement(A.Xa, {
                        className: "use-bits-dialog"
                    }, r)
                },
                F = "test_selectors_close_button",
                V = function(e) {
                    var t = Object(h.d)("Sorry, something went wrong. Please try again.", "UseBitsErrorDialog"),
                        n = Object(h.d)("Close", "UseBitsErrorDialog");
                    return m.createElement(A.Xa, {
                        className: "use-bits-error-dialog",
                        padding: 1
                    }, m.createElement(A.Pa, {
                        display: A.X.Flex,
                        alignContent: A.e.Center,
                        margin: {
                            bottom: 1
                        }
                    }, m.createElement(A.W, null, t)), m.createElement(A.z, {
                        "data-test-selector": F,
                        onClick: e.onClose
                    }, n))
                },
                W = n("5zC2"),
                j = n("22qk"),
                G = n("5IFo"),
                z = n("JVUd"),
                H = n("4qQ0"),
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
                        var e = this.props.showSuccessText ? m.createElement(A.W, {
                                type: A.Rb.Span,
                                className: "extension-bits-balance-success"
                            }, Object(h.d)("Success!", "ExtensionPanelBitsBalanceDialog")) : null,
                            t = m.createElement(K.a, {
                                withImage: !0,
                                withText: !0,
                                animated: !1,
                                count: this.props.data.currentUser.bitsBalance || 0,
                                bitsConfig: Object(y.a)()
                            });
                        return m.createElement(A.Xa, {
                            margin: {
                                top: 0,
                                right: 1,
                                bottom: .5,
                                left: 1
                            }
                        }, e, Object(h.d)("Bits Balance: {bitsComponent}", {
                            bitsComponent: t
                        }, "ExtensionPanelBitsBalanceDialog"))
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.currentUser && this.props.startTimer && this.props.startTimer()
                    }, t
                }(m.Component)),
                Z = Object(E.compose)(Object(q.a)(function(e) {
                    return function(e, t, n) {
                        return {
                            topic: n ? Object(v.B)(n) : "",
                            type: R.PubsubMessageType.UserBitsBalanceUpdate,
                            mutator: function(e, t) {
                                return t && e.message_type === I.b.Balance ? (t.currentUser && e.data && (t.currentUser.bitsBalance = e.data.balance), t) : t
                            },
                            skip: !t || !n,
                            query: e
                        }
                    }(S, e.channelID, e.userID)
                }), Object(Y.a)(S))(Q);
            ! function(e) {
                e.ExtensionName = "extension_name_selector", e.ShowExtensionButton = "show_extension_button_selector"
            }(C || (C = {}));
            var J = function(e) {
                var t = e.extension.views.panel ? e.extension.views.panel.height : 300;
                return m.createElement(A.Qa, {
                    alignItems: A.f.Center,
                    background: A.r.Alt2,
                    borderLeft: !0,
                    borderTop: !0,
                    borderRight: !0,
                    display: A.X.Flex,
                    flexDirection: A.Aa.Column,
                    fullWidth: !0,
                    justifyContent: A.Wa.Center,
                    color: A.O.Base,
                    position: A.hb.Relative
                }, m.createElement("div", {
                    style: {
                        height: t
                    }
                }, m.createElement("img", {
                    src: e.extension.iconUrl
                }), m.createElement(A.Xa, {
                    margin: 1,
                    textAlign: A.Nb.Center
                }, m.createElement(A.W, {
                    fontSize: A.Ca.Size5
                }, Object(h.d)("{name} is popped out.", {
                    name: m.createElement(A.W, {
                        "data-test-selector": C.ExtensionName,
                        type: A.Rb.Span,
                        bold: !0
                    }, e.extension.name)
                }, "ExtensionPopoutPlaceholder"))), m.createElement(A.z, {
                    "data-test-selector": C.ShowExtensionButton,
                    onClick: e.onExtensionShowClicked
                }, Object(h.d)("Show Extension", "ExtensionPopoutPlaceholder"))))
            };
            J.displayName = "ExtensionPopoutPlaceholder";
            var $, ee = function(e) {
                    return m.createElement(A.Xa, {
                        padding: 1
                    }, m.createElement(A.Xa, null, m.createElement("span", null, Object(h.d)("You must be logged in to use this extension feature.", "FeatureNeedsAuthDialog")), m.createElement(A.Bb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(A.Xa, {
                        display: A.X.Flex,
                        justifyContent: A.Wa.Start
                    }, m.createElement(A.z, {
                        "data-test-selector": "qa-needs-auth-close-selector",
                        type: A.F.Hollow,
                        onClick: e.close
                    }, Object(h.d)("Close", "FeatureNeedsAuthDialog")))))
                },
                te = function(e) {
                    var t = function(t) {
                        return m.createElement(A.Xa, null, m.createElement("span", {
                            "data-test-selector": "confirmation_message_selector"
                        }, t), m.createElement(A.Bb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), m.createElement(A.Xa, {
                            display: A.X.Flex,
                            justifyContent: A.Wa.Start
                        }, m.createElement(A.z, {
                            type: A.F.Hollow,
                            onClick: e.cancelFollow
                        }, Object(h.d)("Close", "FollowDialog"))))
                    };
                    if (null === e.currentFollowRequest.options.channel) return m.createElement(A.Xa, {
                        padding: 1
                    }, t(Object(h.d)("The channel you are attempting to follow does not exist.", "FollowDialog")));
                    var n = Object(h.d)("You are about to follow {name}.", {
                            name: m.createElement(A.W, {
                                type: A.Rb.Span,
                                bold: !0
                            }, e.currentFollowRequest.options.channel)
                        }, "FollowDialog"),
                        r = Object(h.d)("Receive updates on {name}'s activity, including when they go live and upload videos or clips, on mobile, email, and web.", {
                            name: e.currentFollowRequest.options.channel
                        }, "FollowDialog"),
                        o = m.createElement(A.Xa, null, m.createElement("span", {
                            "data-test-selector": "confirmation_message_selector"
                        }, n), m.createElement(A.Bb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), m.createElement(A.Xa, {
                            display: A.X.Flex,
                            justifyContent: A.Wa.Start
                        }, m.createElement(A.Xa, {
                            margin: {
                                right: 1
                            }
                        }, m.createElement(A.z, {
                            type: A.F.Default,
                            "data-test-selector": "toggle_follow_button_selector",
                            onClick: e.confirmFollow
                        }, Object(h.d)("Follow", "FollowDialog"))), m.createElement(A.z, {
                            type: A.F.Hollow,
                            onClick: e.cancelFollow
                        }, Object(h.d)("Cancel", "FollowDialog"))), m.createElement(A.Bb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), m.createElement(A.Xa, {
                            display: A.X.Flex,
                            justifyContent: A.Wa.Start
                        }, m.createElement(A.Xa, {
                            flexGrow: 1
                        }, m.createElement(A.W, {
                            type: A.Rb.Span,
                            fontSize: A.Ca.Size5
                        }, Object(h.d)("Notifications", "FollowDialog"))), m.createElement(A.Tb, {
                            id: "ext-follow-notification",
                            checked: e.currentFollowRequest.notifications,
                            onChange: e.onNotificationsChanged
                        })), m.createElement(A.W, {
                            type: A.Rb.Span,
                            color: A.O.Alt2,
                            fontSize: A.Ca.Size7
                        }, r)),
                        i = Object(h.d)("You are already following {name}.", {
                            name: m.createElement(A.W, {
                                type: A.Rb.Span,
                                bold: !0
                            }, e.currentFollowRequest.options.channel)
                        }, "FollowDialog"),
                        a = e.currentFollowRequest.options.isFollowing ? t(i) : o;
                    return m.createElement(A.Xa, {
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
                        var e = Object(h.d)("Grant Permissions", "ExtensionPanel");
                        return m.createElement(A.Ub, {
                            label: e,
                            direction: A.Wb.Top,
                            align: A.Vb.Right,
                            offsetX: ".6rem"
                        }, m.createElement(A.Xa, {
                            display: A.X.Flex,
                            alignItems: A.f.Center
                        }, m.createElement(A.A, {
                            ariaLabel: e,
                            icon: A.rb.PermissionsAdd
                        })))
                    }, t.renderRevokePermissionsButton = function() {
                        var e = Object(h.d)("Revoke Permissions", "ExtensionPanel");
                        return m.createElement(A.Ub, {
                            label: e,
                            direction: A.Wb.Top,
                            align: A.Vb.Right,
                            offsetX: ".6rem"
                        }, m.createElement(A.Xa, {
                            display: A.X.Flex,
                            alignItems: A.f.Center
                        }, m.createElement(A.A, {
                            ariaLabel: e,
                            icon: A.rb.PermissionsAdded,
                            statusAlertIcon: A.rb.PermissionsRemove
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
                        r = Object(h.d)("You are granting {name} the following access:", {
                            name: m.createElement(A.W, {
                                type: A.Rb.Strong
                            }, this.props.extension.name)
                        }, "Extension Panel"),
                        o = Object(h.d)("You are revoking the following access for {name}:", {
                            name: m.createElement(A.W, {
                                type: A.Rb.Strong
                            }, this.props.extension.name)
                        }, "Extension Panel");
                    return m.createElement(f.a, {
                        display: A.X.InlineFlex,
                        ref: this.saveGrantPermissionsBalloonRef,
                        onToggle: this.props.onDialogToggle
                    }, m.createElement("span", {
                        "data-test-selector": $.ToggleIdentityBalloon
                    }, n), m.createElement(A.u, {
                        direction: A.v.TopRight,
                        size: A.w.Small
                    }, m.createElement(A.Xa, {
                        padding: 1
                    }, m.createElement(A.Xa, null, t ? o : r), m.createElement(A.Bb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(A.Xa, null, m.createElement(A.W, {
                        type: A.Rb.P,
                        bold: !0
                    }, Object(h.d)("Your Twitch User ID", "Extension Panel")), m.createElement(A.W, {
                        type: A.Rb.P
                    }, Object(h.d)("Allows this extension to know your User ID on Twitch.", "Extension Panel")), m.createElement("a", {
                        "data-test-selector": $.ManagePermissionsLink,
                        href: "https://twitch.tv/settings/connections",
                        target: "_blank"
                    }, Object(h.d)("Manage Permissions", "Extension Panel"))), m.createElement(A.Bb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(A.Xa, {
                        display: A.X.Flex,
                        justifyContent: A.Wa.Center
                    }, m.createElement(A.Xa, {
                        margin: {
                            right: 1
                        }
                    }, m.createElement(A.z, {
                        type: A.F.Hollow,
                        onClick: this.onCancelIdentityLink
                    }, Object(h.d)("Cancel", "Extension Panel"))), m.createElement(A.z, {
                        type: t ? A.F.Alert : A.F.Default,
                        "data-test-selector": $.ToggleIdentityButton,
                        onClick: this.toggleIdentity
                    }, t ? Object(h.d)("Revoke", "Extension Panel") : Object(h.d)("Grant", "Extension Panel"))))))
                }, t
            }(m.Component);
            (ne || (ne = {})).PopoutButton = "popout_button_selector";
            var oe, ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(h.d)("Pop Out Extension", "PopoutButton");
                        return m.createElement("span", null, m.createElement(A.Ub, {
                            label: e,
                            direction: A.Wb.Top,
                            align: A.Vb.Right,
                            offsetX: ".6rem"
                        }, m.createElement(A.Xa, {
                            display: A.X.Flex,
                            alignItems: A.f.Center
                        }, m.createElement(A.A, {
                            "data-test-selector": ne.PopoutButton,
                            onClick: this.onClick,
                            ariaLabel: e,
                            icon: A.rb.Popout
                        }))))
                    }, t
                }(m.Component),
                ae = function(e) {
                    var t, n = e.cancel,
                        r = e.confirm,
                        o = e.isLoggedIn,
                        i = e.isLinked,
                        a = e.isLinkEnabled,
                        s = e.purchaseIntentPayload;
                    return t = o ? m.createElement(A.Xa, {
                        padding: {
                            x: 1,
                            bottom: 1,
                            top: .5
                        },
                        fullWidth: !0
                    }, m.createElement(A.Xa, {
                        padding: {
                            bottom: 2
                        }
                    }, m.createElement(A.W, {
                        fontSize: A.Ca.Size5,
                        bold: !0
                    }, Object(h.d)("In-Extension Purchase", "PurchaseConfirmation"))), m.createElement(A.Xa, null, m.createElement(A.Ja, {
                        gutterSize: A.Ka.Default
                    }, m.createElement(A.P, {
                        cols: {
                            default: 9
                        }
                    }, m.createElement(A.W, {
                        fontSize: A.Ca.Size6,
                        bold: !0
                    }, s.title)), m.createElement(A.P, {
                        cols: {
                            default: 3
                        }
                    }, m.createElement(A.Xa, {
                        fullWidth: !0,
                        textAlign: A.Nb.Right
                    }, m.createElement(A.W, {
                        fontSize: A.Ca.Size6,
                        bold: !0
                    }, s.displayPrice))))), m.createElement(A.Xa, {
                        fullWidth: !0,
                        padding: {
                            bottom: 1
                        }
                    }, m.createElement(A.W, {
                        color: A.O.Alt2
                    }, Object(h.d)("{name} extension", {
                        name: s.extensionName
                    }, "PurchaseConfirmation"))), m.createElement(A.Xa, {
                        fullWidth: !0
                    }, m.createElement(A.W, {
                        className: "t-extension-panel__description",
                        color: A.O.Alt2
                    }, s.description), m.createElement(A.Bb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(A.Xa, null, m.createElement(A.Ja, {
                        gutterSize: A.Ka.Default
                    }, m.createElement(A.P, {
                        cols: {
                            default: 4
                        }
                    }, m.createElement(A.z, {
                        "data-test-selector": "purchase_ui_buy_selector",
                        onClick: r,
                        fullWidth: !0
                    }, Object(h.d)("Buy", "PurchaseConfirmation"))), m.createElement(A.P, {
                        cols: {
                            default: 3
                        }
                    }, m.createElement(A.z, {
                        "data-test-selector": "purchase_ui_cancel_selector",
                        onClick: n,
                        type: A.F.Hollow
                    }, Object(h.d)("Cancel", "PurchaseConfirmation")))), !i && m.createElement(A.Xa, null, m.createElement(A.Bb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(A.W, {
                        fontSize: A.Ca.Size8,
                        color: A.O.Alt2
                    }, Object(h.d)('By clicking "Buy", you agree to share your Twitch ID with {name}. You can manage account connections under', {
                        name: s.extensionName
                    }, "PurchaseConfirmation"), " ", m.createElement("a", {
                        href: "/settings/connections"
                    }, Object(h.d)("Settings", "PurchaseConfirmation")), "."))))) : m.createElement(A.Xa, {
                        padding: {
                            x: 1,
                            bottom: 1,
                            top: .5
                        },
                        fullWidth: !0
                    }, m.createElement(A.Xa, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(A.W, {
                        fontSize: A.Ca.Size5
                    }, Object(h.d)("You must be logged in to use this extension feature.", "PurchaseConfirmation"))), m.createElement(A.Bb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(A.z, {
                        "data-test-selector": "purchase_ui_cancel_selector",
                        onClick: n,
                        type: A.F.Hollow
                    }, Object(h.d)("Close", "PurchaseConfirmation"))), m.createElement(A.u, {
                        direction: A.v.TopRight,
                        "data-test-selector": "purchase_ui_selector",
                        noTail: !a,
                        offsetX: "10px",
                        offsetY: "-2px",
                        tailOffset: 33,
                        show: !0,
                        size: A.w.Medium
                    }, m.createElement("button", {
                        className: "t-extension-panel__close t-extension-panel__top-controls",
                        onClick: n
                    }, m.createElement(A.qb, {
                        asset: A.rb.Close,
                        height: 11,
                        width: 11
                    })), m.createElement(A.Xa, {
                        display: A.X.Flex,
                        flexGrow: 1,
                        flexDirection: A.Aa.Column,
                        justifyContent: A.Wa.Center,
                        alignItems: A.f.Center
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
                    var e = Object(h.d)("Resize to Default", "RestoreDefaultSizeButton");
                    return m.createElement("span", null, m.createElement(A.Ub, {
                        label: e,
                        direction: A.Wb.Top,
                        align: A.Vb.Right,
                        offsetX: ".6rem"
                    }, m.createElement(A.Xa, {
                        display: A.X.Flex,
                        alignItems: A.f.Center
                    }, m.createElement(A.A, {
                        "data-test-selector": oe.RestoreDefaultSizeButton,
                        onClick: this.onClick,
                        ariaLabel: e,
                        icon: A.rb.FullscreenExit
                    }))))
                }, t
            }(m.Component);
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
                    return e = this.state.declined ? m.createElement(m.Fragment, null, m.createElement(A.W, {
                        type: A.Rb.P,
                        "data-test-selector": se.DeclinedMessage
                    }, Object(h.d)("You’ve declined to use this test extension. To use it, please refresh this page and select accept.", "TestExtensionDialog")), m.createElement(A.Xa, {
                        padding: {
                            top: 2
                        },
                        display: A.X.Flex,
                        justifyContent: A.Wa.Center
                    }, m.createElement(A.z, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                        type: A.F.Hollow
                    }, Object(h.d)("Learn More", "TestExtensionDialog")))) : m.createElement(m.Fragment, null, m.createElement(A.W, {
                        type: A.Rb.P,
                        "data-test-selector": se.WarningMessage
                    }, Object(h.d)("This is a Test Extension that Twitch has not evaluated; it may not be ready for primetime. Proceed only if you are familiar with the developer, the Extension, or Channel.", "TestExtensionDialog"), m.createElement(A.Pa, {
                        padding: {
                            left: .5
                        }
                    }, m.createElement(A.U, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                    }, Object(h.d)("Learn More.", "TestExtensionDialog")))), m.createElement(A.Xa, {
                        padding: {
                            top: 2
                        },
                        display: A.X.Flex,
                        justifyContent: A.Wa.Center
                    }, m.createElement(A.z, {
                        onClick: this.onDeclined,
                        type: A.F.Hollow,
                        "data-test-selector": se.DeclineButton
                    }, Object(h.d)("Decline", "TestExtensionDialog")), m.createElement(A.Xa, {
                        padding: {
                            left: 1
                        }
                    }, m.createElement(A.z, {
                        onClick: this.props.onAccepted,
                        "data-test-selector": se.AcceptButton
                    }, Object(h.d)("Accept", "TestExtensionDialog"))))), m.createElement(A.o, {
                        ratio: A.p.Aspect3x4
                    }, m.createElement(A.Bb, {
                        alignItems: A.f.Center,
                        border: !0,
                        display: A.X.Flex,
                        justifyContent: A.Wa.Center,
                        padding: 2
                    }, m.createElement(A.Xa, null, m.createElement(A.W, {
                        type: A.Rb.Strong
                    }, this.props.extensionName), e)))
                }, t
            }(m.Component);
            n("bVvr");
            ! function(e) {
                e.ExtensionDescriptionButton = "extension_description_button_selector", e.ExtensionReportButton = "extension_report_button_selector", e.ExtensionPanel = "extension_panel_selector", e.ExtensionDetailsLink = "extension_details_link_selector", e.ToggleFollowButton = "toggle_follow_button_selector", e.ConfirmationMessage = "confirmation_message_selector", e.PopoutButton = "popout_button_selector", e.UseBitsConfirmationToggleBalloonWrapper = "confirmation_message_selector"
            }(ce || (ce = {}));
            var de = 3e3,
                pe = 32,
                me = function(e) {
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
                            return t.extension.state === p.ExtensionState.Released || t.state.testExtensionAccepted ? m.createElement(A.Xa, null, m.createElement(A.Bb, {
                                borderTop: !0,
                                borderRight: !0,
                                borderLeft: !0
                            }, m.createElement(W.a, {
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
                            })), m.createElement(A.Xa, {
                                position: A.hb.Relative,
                                fullWidth: !0
                            }, t.purchaseUI())) : m.createElement(ue, {
                                extensionName: t.extension.name,
                                onAccepted: t.onTestExtensionAccepted
                            })
                        }, t.renderFollowConfirmation = function() {
                            return null === t.state.currentFollowRequest ? null : m.createElement(f.a, {
                                ref: t.saveFollowConfirmationBalloonRef
                            }, m.createElement("span", null), m.createElement(A.u, {
                                direction: A.v.TopRight,
                                size: A.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, m.createElement(te, {
                                currentFollowRequest: t.state.currentFollowRequest,
                                confirmFollow: t.confirmFollow,
                                onNotificationsChanged: t.onNotificationsChanged,
                                cancelFollow: t.cancelFollow
                            })))
                        }, t.renderFeatureNeedsAuthBalloon = function() {
                            return m.createElement(f.a, {
                                ref: t.saveFeatureNeedsAuthBalloonRef
                            }, m.createElement("span", null), m.createElement(A.u, {
                                direction: A.v.TopRight,
                                size: A.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, m.createElement(ee, {
                                close: t.dismissLoginPrompt
                            })))
                        }, t.renderUseBitsConfirmation = function() {
                            if (!t.state.currentUseBitsRequest || !t.state.currentUseBitsRequest.options) return null;
                            var e = null;
                            if (t.state.currentUseBitsRequest.options.error) e = m.createElement(V, {
                                error: t.state.currentUseBitsRequest.options.error,
                                onClose: t.cancelUseBits
                            });
                            else if (t.state.currentUseBitsRequest.options.payload) {
                                var n = t.state.currentUseBitsRequest.options.payload,
                                    r = n.bitsBalance,
                                    o = n.extensionItemLabel,
                                    i = n.extensionName,
                                    a = t.state.currentUseBitsRequest.options.payload.bitsRequired;
                                void 0 === a && (a = 0), e = m.createElement(w, {
                                    bitsBalance: r,
                                    cost: a,
                                    extensionItemLabel: o,
                                    extensionName: i,
                                    userID: t.props.loginID,
                                    onClose: t.cancelUseBits,
                                    onConfirm: t.confirmUseBits
                                })
                            }
                            return m.createElement(f.a, {
                                "data-test-selector": ce.UseBitsConfirmationToggleBalloonWrapper,
                                ref: t.saveUseBitsConfirmationBalloonRef,
                                onToggle: t.onToggleUseBitsConfirmationBalloon
                            }, m.createElement("span", null), m.createElement(A.u, {
                                direction: A.v.TopRight,
                                size: A.w.Medium,
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
                                Object(G.f)({
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
                            Object(G.g)({
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
                                return t.hideBitsBalanceTimeout && (clearTimeout(t.hideBitsBalanceTimeout), t.hideBitsBalanceTimeout = null, t.startHideBitsBalanceTimer()), m.createElement(Z, {
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
                                    contentType: H.a.Extension,
                                    contentID: n + "-" + r,
                                    targetUserID: t.props.channelID
                                },
                                title: Object(h.d)("Report {extensionName}", {
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
                        var e, t = Object(h.d)("More Info", "ExtensionPanel"),
                            n = Object(h.d)("Report Extension", "ExtensionPanel"),
                            r = Object(j.d)(this.extension.id, this.extension.version) + "?tt_medium=" + this.getCurrentMedium() + "&tt_content=" + T.PageviewContent.ExtensionPanel,
                            o = d(this.props.className || "extension-panel", ((e = {})["extension-panel__popout"] = this.props.isPopout, e)),
                            i = this.props.isFramePoppedOut ? m.createElement(J, {
                                extension: this.extension,
                                onExtensionShowClicked: this.onExtensionPopoutClosed
                            }) : this.renderExtensionFrame();
                        return m.createElement(A.Xa, {
                            className: o,
                            margin: {
                                bottom: 2,
                                right: 2
                            },
                            "data-test-selector": ce.ExtensionPanel
                        }, i, m.createElement(A.Bb, {
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0,
                            flexDirection: A.Aa.Column,
                            display: A.X.Flex
                        }, m.createElement(A.Bb, {
                            display: A.X.Flex,
                            alignItems: A.f.Center
                        }, m.createElement(A.Xa, {
                            flexGrow: 1,
                            margin: {
                                x: 1
                            }
                        }, m.createElement("a", {
                            href: r,
                            target: "_blank",
                            "data-test-selector": ce.ExtensionDetailsLink
                        }, this.extension.name)), this.props.isFramePoppedOut || this.props.isPopout ? null : m.createElement(ie, {
                            "data-test-selector": ce.PopoutButton,
                            onClick: this.onExtensionPopout
                        }), m.createElement(le, {
                            isPopout: this.props.isPopout
                        }), m.createElement(re, {
                            extension: this.extension,
                            isDialogOpen: this.state.isIdentityLinkOpen,
                            onDialogToggle: this.onIdentityLinkDialogToggle,
                            isLinked: this.state.isLinked,
                            isLinkEnabled: this.state.isLinkEnabled,
                            onLinkIdentity: this.onLinkIdentity,
                            onUnlinkIdentity: this.onUnlinkIdentity
                        }), this.renderFollowConfirmation(), this.renderFeatureNeedsAuthBalloon(), this.renderUseBitsConfirmation(), m.createElement(f.a, null, m.createElement("span", null, m.createElement(A.Ub, {
                            label: t,
                            direction: A.Wb.Top,
                            align: A.Vb.Right,
                            offsetX: ".6rem"
                        }, m.createElement(A.Xa, {
                            display: A.X.Flex,
                            alignItems: A.f.Center
                        }, m.createElement(A.A, {
                            "data-test-selector": ce.ExtensionDescriptionButton,
                            icon: A.rb.More,
                            ariaLabel: t
                        })))), m.createElement(A.u, {
                            direction: A.v.TopRight,
                            size: A.w.Medium,
                            offsetX: ".6rem"
                        }, m.createElement(A.Xa, {
                            display: A.X.Flex,
                            justifyContent: A.Wa.Between,
                            flexWrap: A.Ba.NoWrap
                        }, m.createElement(A.Bb, {
                            padding: 1,
                            flexShrink: 3
                        }, m.createElement(A.W, null, this.extension.summary)), m.createElement(A.Bb, {
                            borderLeft: !0,
                            margin: 1
                        }, m.createElement(A.A, {
                            "data-test-selector": ce.ExtensionReportButton,
                            ariaLabel: n,
                            icon: A.rb.ChatRiskFlag,
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
                            return m.createElement(ae, {
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
                }(m.Component),
                Ee = Object(E.compose)(Object(z.a)("ExtensionPanel", {
                    pixels: 100
                }))(me);

            function he(e) {
                return {
                    isLoggedIn: Object(c.f)(e),
                    languageCode: Object(c.b)(e),
                    locale: e.session.locale
                }
            }

            function fe(e) {
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
            var ge = Object(o.connect)(he, fe)(Ee);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return he
            }), n.d(t, !1, function() {
                return fe
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
                    var d = u.orderedTiers.find(function(t) {
                        return t.bits <= e.count
                    });
                    if (d) {
                        var p = Object(s.c)(d, void 0, e.animated);
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
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            });
            var r, o, i, a, s, l = {
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
                c = {
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
            }(s || (s = {}))
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
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return u
            });
            var r = n("5zXJ"),
                o = n("RcPG"),
                i = {
                    indexedActions: {},
                    orderedActions: []
                },
                a = /^((?:[A-Za-z0-9]+)(?:[A-Za-z]))([\d]+)$/;

            function s(e, t) {
                var n = [],
                    r = e.split(/\s+/);
                return r.forEach(function(e, i) {
                    var a = l(e, t);
                    if (a) n.push(a);
                    else {
                        var s = n.length && n[n.length - 1],
                            c = "";
                        if (i < r.length - 1 && (c = " "), s && s.type === o.a.Text) s.content += e + c;
                        else {
                            var u = "";
                            i && (u = " "), n.push({
                                type: o.a.Text,
                                content: u + e + c
                            })
                        }
                    }
                }), n
            }

            function l(e, t) {
                var n = e.match(a);
                if (!n) return null;
                var r = n[1].toLowerCase(),
                    i = Number(n[2]),
                    s = t.indexedActions[r];
                if (s) {
                    var l = s.orderedTiers.find(function(e) {
                        return e.bits <= i
                    });
                    if (!l && i && (l = s.orderedTiers[0]), l) return {
                        type: o.a.Emote,
                        content: {
                            images: u(l),
                            alt: s.prefix,
                            cheerAmount: i,
                            cheerColor: l.color
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
                        var s = l(r.t + a, t);
                        s && e.splice(n.lastAppearance + i++, 0, s.content)
                    }
                }), e
            }

            function u(e, t, n) {
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
                    }, t.toggleBalloonId = Object(a.a)(), t.handleButtonClick = function() {
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
                        n = e[1];
                    if (n.type !== s.u) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var a = i.cloneElement(t, {
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
                    return this.props.tooltipProps && (c = i.createElement(s.Ub, o.__assign({}, this.props.tooltipProps), a)), i.createElement(s.Xa, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: s.hb.Relative
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
            var r, o = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("yR8l"),
                u = n("BhFH"),
                d = n("iS14"),
                p = n("geRD"),
                m = n("f00E"),
                E = n("D7An"),
                h = n("2xye"),
                f = n("GnwI"),
                g = n("QVaV"),
                T = n("Ue10"),
                _ = (n("MPK0"), "report-wizard-block"),
                R = "report-wizard-unblock",
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return i.createElement(T.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": _
                            }, i.createElement(T.Xa, {
                                display: T.X.Flex,
                                alignItems: T.f.Center
                            }, i.createElement(T.qb, {
                                type: T.sb.Brand,
                                asset: T.rb.Ban
                            }), i.createElement(T.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Block {user}", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return i.createElement(T.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: T.X.Flex,
                                alignItems: T.f.Center
                            }, i.createElement(T.qb, {
                                type: T.sb.Success,
                                asset: T.rb.FollowCheck
                            }), i.createElement(T.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(T.W, {
                                className: "block-user__success",
                                type: T.Rb.Span
                            }, Object(l.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), i.createElement(T.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": R
                            }, i.createElement(T.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(g.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return i.createElement(T.Bb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, i.createElement(T.Xa, null, Object(l.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement(T.Bb, {
                            color: T.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, i.createElement(T.ac, {
                            baseFontSize: T.Ca.Size6
                        }, i.createElement("p", null, Object(l.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement("ul", null, i.createElement("li", null, Object(l.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), i.createElement("li", null, Object(l.d)("Prevent them from hosting you", "ReportWizardBlockActions")), i.createElement("li", null, Object(l.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), i.createElement("li", null, Object(l.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), i.createElement(T.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(i.Component),
                v = n("4qQ0");
            ! function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(r || (r = {}));
            var I, O = {
                    generalFilter: function() {
                        return Object(l.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(l.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(l.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(l.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(l.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(l.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(l.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(l.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                C = {
                    input_description: {
                        getTitle: function() {
                            return Object(l.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: r.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: r.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: r.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: r.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: r.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: r.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: r.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: r.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: r.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: r.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: r.Link
                    },
                    messaging_general: {
                        getTitle: O.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: O.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(l.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: v.b.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: v.b.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: v.b.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: v.b.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(l.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(l.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: v.b.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(l.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(l.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: v.b.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: v.b.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(l.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(l.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(l.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: v.b.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: v.b.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: v.b.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: v.b.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: v.b.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: v.b.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: v.b.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: v.b.Miscategorized
                    },
                    video_general: {
                        getTitle: O.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(l.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: v.b.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: v.b.Harassment
                    },
                    abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "threatening violence",
                        reportReason: v.b.Harm
                    },
                    commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "committing violence",
                        reportReason: v.b.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: v.b.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: v.b.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(l.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: v.b.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(l.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: v.b.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(l.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: v.b.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(l.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: v.b.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: v.b.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: v.b.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: v.b.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: v.b.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: v.b.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: v.b.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: v.b.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(l.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(l.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: v.b.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: v.b.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(l.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: v.b.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: O.me,
                        value: "impersonating me",
                        reportReason: v.b.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: v.b.Impersonation
                    },
                    impersonation_other: {
                        getTitle: O.someoneElse,
                        value: "impersonating someone else",
                        reportReason: v.b.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: v.b.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(l.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(l.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(l.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(l.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(l.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: v.a.Whisper
                    },
                    username: {
                        getTitle: function() {
                            return Object(l.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: v.b.OffensiveUsername
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(l.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(l.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(l.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(l.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(l.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(l.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(l.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(l.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(l.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(l.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: v.b.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: O.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: O.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: v.b.Harm
                    },
                    external_commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: v.b.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(l.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: v.b.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: v.b.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(l.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(l.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(l.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                y = function(e) {
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? i.createElement(T.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return i.createElement(T.Xa, {
                            className: "reporting-wizard-card"
                        }, e, i.createElement(T.Ea, {
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
                                case r.Text:
                                    return i.createElement(T.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case r.Link:
                                    return i.createElement(T.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(T.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, i.createElement(T.Xa, {
                                        display: T.X.Flex
                                    }, i.createElement(T.Xa, {
                                        display: T.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, i.createElement(T.qb, {
                                        asset: T.rb.Document
                                    })), t.getTitle())));
                                case r.Textarea:
                                    var o = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        a = t.required && (!o || !!o && 0 === o.trim().length);
                                    return i.createElement(T.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(T.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                    }, i.createElement(T.Ob, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && a,
                                        value: o,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case r.MultipleChoice:
                                default:
                                    return i.createElement(T.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, i.createElement(T.nb, {
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
                }(i.Component),
                S = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(I || (I = {}));
            var A, N, D, P = {
                    contentGeneral: function() {
                        return Object(l.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(l.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(l.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(l.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(l.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                L = {
                    report: function(e) {
                        return Object(l.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(l.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(l.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(l.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(l.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(l.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(l.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(l.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                M = {
                    getDescription: function() {
                        return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: L.thanks,
                    type: I.Info,
                    value: "end card"
                },
                k = {
                    socialMedia: o.__assign({}, M, {
                        items: [C.endBlurb_socialmedia]
                    }),
                    violence: o.__assign({}, M, {
                        items: [C.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: L.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [C.endLink_DMCA, C.endLink_trademark, C.endLink_devAgreement],
                        type: I.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: L.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [C.endLink_selfharm],
                        type: I.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: L.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [C.endLink_eventCoC],
                        value: "twitch event end",
                        type: I.Info
                    }
                },
                x = {
                    getTitle: L.report,
                    getLabel: function() {
                        return Object(l.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [C.video, C.whisper, C.chat, C.room, C.profile, C.username, C.report_other],
                    type: I.MultipleChoice,
                    value: "content type"
                },
                U = {
                    identifyUser: {
                        getTitle: L.reportVideo,
                        getLabel: P.identifyUser,
                        items: [C.video_streamer, C.video_someoneElse, C.video_chatSomeone],
                        type: I.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: L.reportVideo,
                        getLabel: P.contentGeneral,
                        items: [C.revealPersonalInfo, C.video_labeling, C.video_inactive, C.video_general, C.report_ip, C.violateDevAgreement, C.selfharm],
                        type: I.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: L.reportVideo,
                        getLabel: P.content,
                        items: [C.report_username, C.violence, C.abusive, C.cheating, C.scam, C.inappropriateContent, C.evasion, C.impersonation, C.underage, C.bitsViolation],
                        type: I.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                B = {
                    content: {
                        getTitle: L.reportMessage,
                        getLabel: P.contentGeneral,
                        items: [C.revealPersonalInfo, C.evasion, C.spam, C.maliciousRaid, C.report_username, C.messaging_general, C.selfharm],
                        type: I.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: L.reportMessage,
                        getLabel: P.content,
                        items: [C.report_emotes, C.violence, C.abusive, C.inappropriateContent, C.impersonation, C.underage, C.bitsViolation],
                        type: I.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                w = o.__assign({}, B.content, {
                    getDescription: function() {
                        return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                F = {
                    content: {
                        getTitle: L.reportProfile,
                        getLabel: P.contentGeneral,
                        items: [C.revealPersonalInfo, C.inappropriateBadge, C.inappropriateExtension, C.noModeration, C.profile_general, C.report_ip, C.violateDevAgreement, C.selfharm],
                        type: I.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: L.reportProfile,
                        getLabel: P.content,
                        items: [C.report_username, C.violence, C.abusive, C.scam, C.inappropriateContent, C.evasion, C.impersonation, C.underage, C.bitsViolation],
                        type: I.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                V = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: P.identifyUser,
                    items: [C.report_channelOwner, C.report_member],
                    value: "room report user",
                    type: I.MultipleChoice
                },
                W = {
                    getTitle: L.tellUsMore,
                    items: [C.input_description],
                    type: I.Confirm,
                    value: "tell us more"
                },
                j = {
                    banEvasion: o.__assign({}, W, {
                        items: [C.input_usernames, C.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: o.__assign({}, W, {
                        items: [C.input_link, C.input_connection, C.input_description],
                        nextCard: k.socialMedia,
                        value: "social media tell us more"
                    })
                },
                G = {
                    content: {
                        getTitle: L.reportAbusive,
                        getLabel: P.relevantStatements,
                        items: [C.hateSpeech, C.harassment, C.abusiveViolence, C.commitingViolence, C.swatting, C.personalInfo],
                        type: I.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [C.threat_me, C.threat_person, C.threat_group, C.threat_selfharm],
                        type: I.MultipleChoice,
                        value: "violence type"
                    }
                },
                z = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [C.location_onTwitch, C.location_anotherSite, C.location_TwitchEvent],
                        type: I.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: P.thisPersonIs,
                        getDescription: function() {
                            return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [C.external_incitingRaids, C.external_threatening, C.external_harassment],
                        type: I.MultipleChoice,
                        nextCard: j.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: o.__assign({}, G.violence, {
                        items: [C.threat_me, C.threat_person, C.threat_group],
                        nextCard: j.socialMedia
                    }),
                    external_abusive: o.__assign({}, G.content, {
                        items: [C.hateSpeech, C.harassment, C.external_abusiveViolence, C.external_commitingViolence, C.swatting, C.personalInfo],
                        nextCard: j.socialMedia
                    })
                },
                H = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: P.contentGeneral,
                    items: [C.spam_bot, C.spam_scam, C.spam_repeated],
                    type: I.MultipleChoice,
                    value: "spam type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: P.relevantStatements,
                    items: [C.inappropriate_game, C.gory, C.sexuallyViolent, C.childAnimal, C.pornographic, C.suggestive, C.nudity, C.other],
                    type: I.MultipleChoice,
                    value: "inappropriate content type"
                },
                Y = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [C.evasion_chat, C.evasion_sitewide, C.evasion_messaging],
                    type: I.MultipleChoice,
                    nextCard: j.banEvasion
                },
                q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(l.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [C.impersonation_me, C.impersonation_brand, C.impersonation_other],
                    type: I.MultipleChoice,
                    value: "impersonation type"
                },
                K = x,
                Q = W,
                Z = M,
                J = {
                    video: U.identifyUser,
                    whisper: w,
                    chat: B.content,
                    profile: F.content,
                    room: V,
                    "somewhere else": z.identifyLocation,
                    streamer: U.content,
                    "someone else in video": U.content,
                    "someone in chat": B.content,
                    general_video: U.general,
                    general_messaging: B.general,
                    general_profile: F.general,
                    "channel owner": F.content,
                    "community member": B.content,
                    "on twitch": F.content,
                    "another site": z.externalSite,
                    "twitch event": k.twitchEvent,
                    "brigading/raids": j.socialMedia,
                    threatening: z.external_violence,
                    "hateful/harassing": z.external_abusive,
                    "external site; threatening violence": z.external_violence,
                    "external site; committing violence": z.external_violence,
                    "external site; scam": j.socialMedia,
                    "ban evasion": Y,
                    spam: H,
                    hateful: G.content,
                    impersonation: q,
                    "violence/threats": G.violence,
                    "threatening violence": G.violence,
                    "committing violence": G.violence,
                    abusive: G.content,
                    "inappropriate content": X,
                    "intellectual property": k.legal,
                    "violating developer agreement": k.legal
                },
                $ = {
                    selfharm: k.selfharm,
                    harm: k.violence,
                    other: Z
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: F.content,
                    COMMUNITY_REPORT: F.content,
                    CHAT_REPORT: B.content,
                    CLIP_REPORT: U.content,
                    EVENT_REPORT: F.content,
                    EXTENSION_REPORT: F.content,
                    LIVE_UP_REPORT: F.content,
                    ROOM_REPORT: V,
                    WHISPER_REPORT: w,
                    VOD_COMMENT_REPORT: B.content
                },
                te = "report-wizard-back",
                ne = "report-wizard-close",
                re = "report-wizard-next",
                oe = "report-wizard-submit",
                ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ee[t.props.reportContentType] || K,
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
                            return i.createElement(T.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, i.createElement(T.W, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(l.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = ne,
                                o = !1,
                                a = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case I.MultipleChoice:
                                    e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, r = re, o = !t.state.currentSelection;
                                    break;
                                case I.Confirm:
                                    e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, o = !t.state.userTextInput, r = oe
                            }
                            return i.createElement(T.Xa, null, a, i.createElement(T.z, {
                                onClick: n,
                                disabled: o,
                                "data-test-selector": r
                            }, i.createElement(T.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return i.createElement(T.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: T.X.InlineBlock
                            }, i.createElement(T.z, {
                                type: T.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": te
                            }, i.createElement(T.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, Object(l.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(l.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(l.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(D.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    o = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    i = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    a = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || Q;
                                J[t.state.currentSelection.value] && (s = J[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === I.Info;
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
                                    return t.trackNavigation(N.Next, e.value)
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
                                if (e.type !== r.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    o = n && 0 === n.trim().length;
                                return !n || o
                            }).length
                        }, t.handleSubmit = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i = this;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (o.sent(), this.props.submitStatus) {
                                                case S.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case S.a.Success:
                                                    r = Z, $[t] && (r = $[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return i.trackNavigation(N.Submit)
                                                    });
                                                    break;
                                                case S.a.UserError:
                                                    this.setState({
                                                        error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case S.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(S.a.FormError), this.setState({
                                                error: e
                                            }), o.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i, a = this;
                                return o.__generator(this, function(o) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, i = this.state.displacedSelections, this.state.currentSelection && (i = i.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: i,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return a.trackNavigation(N.Back, e.value)
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
                    return o.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(D.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === I.Info && this.state.currentCard.blockPrompt ? i.createElement(b, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? i.createElement(T.Bb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === I.Info ? null : this.renderPrimer();
                        return i.createElement(T.Bb, {
                            className: "reporting-wizard",
                            display: T.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: T.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, i.createElement(T.W, {
                            bold: !0,
                            fontSize: T.Ca.Size4
                        }, this.getTitle()), n, i.createElement(T.Xa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(y, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === S.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(i.Component),
                ae = n("s8Ou"),
                se = n("0hI/");
            n.d(t, "c", function() {
                    return N
                }), n.d(t, "a", function() {
                    return D
                }), n.d(t, "b", function() {
                    return ce
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(A || (A = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(N || (N = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(D || (D = {}));
            var le = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return o.__awaiter(n, void 0, void 0, function() {
                            var n, i, a, s = this;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (n = r === v.a.Whisper ? r : this.props.reportContext.contentType, null === (i = {
                                                description: t,
                                                reason: e,
                                                content: n,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: S.a.UserError
                                        }), [2];
                                        o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(p.a)(i))];
                                    case 2:
                                        return o.sent(), this.setState({
                                            submitStatus: S.a.Success
                                        }, function() {
                                            s.state.showWizard || s.trackAction(A.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return a = o.sent(), l.k.error(a, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: S.a.MutationError
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, o.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, o.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(N.Open, void 0, e) : n.trackAction(A.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(N.Close, t, void 0, e) : n.trackAction(A.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, o) {
                        l.p.tracking.track(h.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === S.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: o,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        l.p.tracking.track(h.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === S.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var r = l.p.experiments.getAssignment(E.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: S.a.Unsubmitted,
                        showWizard: "yes" === r,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return i.createElement(T.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(T.W, {
                        fontSize: T.Ca.Size5
                    }, Object(l.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return i.createElement(T.gb, {
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
                        return this.state.showWizard ? this.props.data.loading ? i.createElement(T.Za, null) : i.createElement(ie, o.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : i.createElement(S.b, o.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return i.createElement(T.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(T.W, {
                        fontSize: T.Ca.Size5
                    }, Object(l.d)("The user you are trying to report does not exist", "ReportUser")))
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
            }(i.Component);
            var ce = Object(s.compose)(Object(c.a)(ae, {
                name: "reportUser"
            }), Object(c.a)(se, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(f.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(d.a)(), Object(a.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(le)
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
                m = n("5zC2"),
                E = n("0bws"),
                h = n("GnwI"),
                f = n("fvjX"),
                g = n("/7QA"),
                T = n("TVJu"),
                _ = function(e) {
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
                        return o && o.extension ? (g.p.setPageTitle(o.extension.name), a.createElement(T.a, {
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
                R = Object(f.compose)(Object(m.c)({
                    name: "extensionsForChannel",
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }))(_),
                b = n("Ue10"),
                v = n("1+HG");
            ! function(e) {
                e.PopoutExtensionPageRootLayout = "popout-extension-page__root-layout"
            }(r || (r = {}));
            var I = function(e) {
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
                        return a.createElement(b.Xa, {
                            "data-test-selector": r.PopoutExtensionPageRootLayout,
                            className: Object(u.b)(this.state.theme),
                            display: b.X.Flex,
                            fullHeight: !0,
                            fullWidth: !0
                        }, a.createElement(m.b, null), a.createElement(E.a, null), a.createElement(b.Bb, {
                            background: b.r.Alt2,
                            color: b.O.Base,
                            display: b.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            overflow: b.cb.Hidden,
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
                O = Object(s.compose)(Object(h.b)("PopoutExtensionPage", {
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
                }))(I);
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
                            this.unsubscriber = Object(i.z)({
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
                m = n("d0ua"),
                E = n("kRBY"),
                h = n("XDQu"),
                f = n("KxT4"),
                g = n("S1Za"),
                T = n("AKMF"),
                _ = n("TSYQ"),
                R = n("1hWM"),
                b = n("imBb"),
                v = n("cr+I"),
                I = n("/7QA"),
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
                k = n("C94G"),
                x = (n("Qqhu"), n("Addw")),
                U = "debug",
                B = {
                    amazon: !1,
                    comscore: !1,
                    google: !1,
                    nielsen: !1
                },
                w = {
                    allowfullscreen: !0,
                    externalfullscreen: !1,
                    autoplay: !0,
                    branding: !1,
                    channelInfo: !1,
                    controls: !0,
                    debug: !1,
                    height: "100%",
                    playsinline: !0,
                    player: L.e.Site,
                    showInfo: !1,
                    showtheatre: !1,
                    trackingProperties: {
                        client_build_id: I.p.config.buildID,
                        client_app: I.p.session.clientApp
                    },
                    width: "100%",
                    oauth_token: "",
                    gdpr: B
                },
                F = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.lastGDPR = B, n.hasInitializedOffsets = !1, n.logger = I.k.withCategory("video-player"), n.initializePlayer = function(e) {
                            var t = a.__assign({}, w, {
                                allowfullscreen: !n.props.disableFullscreen,
                                autoplay: !n.props.paused,
                                externalfullscreen: n.props.fullscreen.supported(),
                                gdpr: n.createPlayerGDPROptions(n.props),
                                muted: n.props.muted,
                                showtheatre: !n.props.disableTheatreButton
                            });
                            n.playerBuffering = n.registerBufferingEvent(!!n.props.paused), n.playerPlayed = n.registerPlayedEvent(!!n.props.paused);
                            var r = n.props.playerTypeOverride;
                            r && (t.player = r, n.playerType = r, r === L.e.ClipsEditing && (t.muted = !0)), n.props.channelLogin && (t.channel = n.props.channelLogin, n.lastSetChannel = n.props.channelLogin), n.props.collectionID && (t.collection = n.props.collectionID), n.props.clipSlug && (t.clip = n.props.clipSlug), n.props.vodID && (t.video = Object(y.p)(n.props.vodID), I.o.setVideoPlayerTrackingData({
                                vodID: n.props.vodID
                            })), n.props.showChannelInfoOnHover && (t.showInfo = n.props.showChannelInfoOnHover), void 0 !== n.props.persistUserPreferences && (t.persistUserPreferences = n.props.persistUserPreferences), void 0 !== n.props.nextVideoOffset && n.props.nextVideoOffset >= 0 && (t.time = Object(x.a)(n.props.nextVideoOffset)), t.oauth_token = n.props.authToken || "", t.debug = "true" === v.parse(window.location.search)[U], n.logger.debug("Initializing", t);
                            var o = new e(n.playerRef, t);
                            n.player = o, o.addEventListener(P.a.PlayerReady, n.onPlayerReady), o.addEventListener(P.a.CompanionAdBuffered, n.companionAdBuffered), o.addEventListener(P.a.Online, n.onStreamStatusOnline), o.addEventListener(P.a.Offline, n.onStreamStatusOffline), o.addEventListener(u.Ended, n.onStreamStatusOffline), o.addEventListener(u.Play, n.onPlayerPlay), o.addEventListener(u.Playing, n.onPlayerPlaying), o.addEventListener(u.Seeking, n.onSeeking), o.addEventListener(u.Seeked, n.onSeek), o.addEventListener(u.TimeUpdate, n.onTimeUpdate), o.addEventListener(P.a.TheatreChange, n.onTheatreChange), o.addEventListener(P.a.FullscreenChange, n.onFullScreenChange), o.addEventListener(P.a.ExternalFullscreenChange, n.onExternalFullScreenChange), o.addEventListener(P.a.ClipsModerationOpen, n.onClipsModerationOpen), o.addEventListener(P.a.TransitionToCollectionVOD, n.onTransitionToCollectionVod), o.addEventListener(P.a.TransitionToRecommendedVOD, n.onTransitionToRecommendedVod), o.addEventListener(P.a.OpenStream, n.onOpenStream), o.addEventListener(u.Pause, n.onPause), o.addEventListener(P.a.PersistenPlayerToggle, n.onPersistentPlayerToggled), o.addEventListener(u.LoadedMetadata, n.onMetadataLoaded), o.addEventListener(u.VolumeChange, n.onVolumeChange), o.addEventListener(P.a.PromptLoginModal, n.props.promptLogin), o.addEventListener(P.a.FocusPlayer, n.onFocusPlayer), o.addEventListener(P.a.FollowChannel, n.followChannel), o.addEventListener(P.a.UnfollowChannel, n.unfollowChannel), o.addEventListener(P.a.ContentRestricted, n.onContentRestricted), R.extensionService.registerPlayer(n.player), R.extensionService.setPlayerWindow(window), n.props.onInit && n.props.onInit(o), n.maybeAttachToWindow(n.props)
                        }, n.attachRef = function(e) {
                            return n.playerRef = e
                        }, n.onMetadataLoaded = function() {
                            var e = n.player && n.player.getSessionInfo();
                            e && (n.logger.debug("Got player session info from player instance", e), I.o.setVideoPlayerTrackingData({
                                broadcastID: e.broadcastId,
                                playSessionID: e.playSessionId
                            })), n.setState({
                                metadataLoaded: !0
                            })
                        }, n.onOpenStream = function() {
                            if (n.props.playerTypeOverride === L.e.Frontpage && n.player)
                                if (n.props.channelLogin) I.p.history.push("/" + n.props.channelLogin);
                                else if (n.props.vodID) {
                                var e = Math.floor(n.player.getCurrentTime());
                                I.p.history.push("/videos/" + n.props.vodID + "?t=" + Object(x.a)(e))
                            } else n.props.collectionID && I.p.history.push("/collections/" + n.props.collectionID)
                        }, n.onFocusPlayer = function() {
                            n.props.playerTypeOverride !== L.e.SquadStreamPrimary && n.props.playerTypeOverride !== L.e.SquadStreamSecondary || !n.player || n.props.onFocusPlayer && n.props.channelLogin && n.props.onFocusPlayer()
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
                                var n = I.o.getLastPageview(),
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
                            }(e, I.k))
                        }, n.updatePlayerTrackingDataFromProps = function() {
                            n.updatePlayerTrackingData(n.props)
                        }, n.updatePlayerType = function(e) {
                            var t = e || w.player;
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
                        }, n.playerType = t.playerTypeOverride || w.player, n.lastSetChannel = t.channelLogin, n.lastPausedProp = t.paused, n.lastMutedProp = t.muted, n.lastFollowingProp = t.viewerIsFollowing, n.lastGDPR = n.createPlayerGDPROptions(t), t.fullscreen.addChangeListener(n.onTwilightFullscreenChange), t.instanceRef && t.instanceRef(n), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.playerCreated && this.props.latencyTracking.reportCustomEvent(this.playerCreated), this.bindHotKeys(), this.historyUnlistener = this.props.history.listen(this.onHistoryChange), Object(k.b)(), Object(k.a)(this.initializePlayer), I.o.eventEmitter.addListener(S.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps)
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
                            if (this.player && e.channelLogin && (l || Object(M.a)(this.props, e))) return this.player.pause(), this.resetLatencyTracking(!!e.paused), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void I.o.setVideoPlayerTrackingData({
                                vodID: void 0
                            });
                            var c = e.collectionID && this.props.collectionID !== e.collectionID,
                                u = e.vodID && this.props.vodID !== e.vodID;
                            if (c || u) {
                                var d = e.vodID ? Object(y.p)(e.vodID) : "";
                                if ("" !== d && I.o.setVideoPlayerTrackingData({
                                        vodID: e.vodID
                                    }), !this.player) return;
                                return this.player.pause(), this.resetLatencyTracking(!!e.paused), void(c || e.collectionID && u ? this.player.setCollection(e.collectionID, d, e.nextVideoOffset) : this.player.setVideo(d, e.nextVideoOffset))
                            }
                            void 0 !== e.nextVideoOffset && e.nextVideoOffset >= 0 && this.props.nextVideoOffset !== e.nextVideoOffset && this.player && this.player.setCurrentTime(e.nextVideoOffset), this.player && e.videoMarkers && this.lastVideoMarkersProp !== e.videoMarkers && (this.lastVideoMarkersProp = e.videoMarkers, this.player.setVideoMarkers(e.videoMarkers));
                            var p = e.playerQualityOverride;
                            this.player && t.metadataLoaded && p && p !== this.lastPlayerQualityOverride && (this.player.setQuality(p), this.lastPlayerQualityOverride = p);
                            var m = e.playerMaxAutoOverride;
                            this.player && t.metadataLoaded && m && m.group !== this.lastPlayerMaxAutoOverride && (this.player.setAutoMaxVideoSize(m.width, m.height), this.lastPlayerMaxAutoOverride = m.group)
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
                        var e = _("video-player", {
                                "video-player--theatre": this.props.theatreModeEnabled,
                                "video-player--theatre-whispers": this.props.theatreModeEnabled && this.props.isWhispersBottomBarVisible && !this.state.isFullScreen,
                                "video-player--logged-in": this.props.isLoggedIn,
                                "video-player--fullscreen": this.state.isFullScreen
                            }),
                            t = _("video-player__container", {
                                "video-player__container--clips": L.a.includes(this.playerType)
                            });
                        return l.createElement("div", {
                            className: _(e),
                            "data-test-selector": "video-player"
                        }, l.createElement("div", {
                            className: t,
                            ref: this.attachRef
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.state.playerRefID === this.props.activeVideoPlayerRefID && this.props.reportPlayerInstanceStarted && this.props.reportPlayerInstanceStarted(void 0), this.unbindHotKeys(), this.historyUnlistener && this.historyUnlistener(), this.maybeDetachFromWindow(), this.state.isFullScreen && this.exitFullscreen(), this.props.fullscreen.removeChangeListener(this.onTwilightFullscreenChange), this.props.onDestroy && this.props.onDestroy(), I.o.eventEmitter.removeListener(S.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps), this.player && (this.player.removeEventListener(P.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(P.a.CompanionAdBuffered, this.companionAdBuffered), this.player.removeEventListener(P.a.Online, this.onStreamStatusOnline), this.player.removeEventListener(P.a.Offline, this.onStreamStatusOffline), this.player.removeEventListener(u.Ended, this.onStreamStatusOffline), this.player.removeEventListener(u.Play, this.onPlayerPlay), this.player.removeEventListener(u.Playing, this.onPlayerPlaying), this.player.removeEventListener(P.a.TheatreChange, this.onTheatreChange), this.player.removeEventListener(P.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(P.a.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(P.a.ExternalFullscreenChange, this.onExternalFullScreenChange), this.player.removeEventListener(u.Seeking, this.onSeeking), this.player.removeEventListener(u.Seeked, this.onSeek), this.player.removeEventListener(u.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(P.a.OpenStream, this.onOpenStream), this.player.removeEventListener(u.Pause, this.onPause), this.player.removeEventListener(P.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), this.player.removeEventListener(u.LoadedMetadata, this.onMetadataLoaded), this.player.removeEventListener(u.VolumeChange, this.onVolumeChange), this.player.removeEventListener(P.a.PromptLoginModal, this.props.promptLogin), this.player.removeEventListener(P.a.FocusPlayer, this.onFocusPlayer), this.player.removeEventListener(P.a.FollowChannel, this.followChannel), this.player.removeEventListener(P.a.UnfollowChannel, this.unfollowChannel), this.player.removeEventListener(P.a.ContentRestricted, this.onContentRestricted), R.extensionService.unregisterPlayer(), this.player.destroy()), I.o.setVideoPlayerTrackingData({
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
                        b.bind("alt+x", this.maybeRecordClip)
                    }, t.prototype.unbindHotKeys = function() {
                        b.unbind("alt+x")
                    }, t.defaultProps = {
                        paused: !1
                    }, t
                }(l.Component),
                V = Object(D.b)("VideoPlayer")(F);
            var W = Object(i.compose)(Object(r.connect)(function(e) {
                return {
                    isWhispersBottomBarVisible: Object(h.b)(e),
                    theatreModeEnabled: e.ui.theatreModeEnabled,
                    rightColumnExpanded: e.ui.rightColumnExpanded,
                    sideNavExpanded: e.ui.sideNavExpanded,
                    isLoggedIn: Object(E.f)(e),
                    authToken: Object(E.a)(e),
                    activeVideoPlayerRefID: Object(T.a)(e),
                    gdprBlockAmazonContent: Object(f.g)(e, f.c.Amazon),
                    gdprBlockComScoreContent: Object(f.g)(e, f.c.ComScore),
                    gdprBlockGoogleContent: Object(f.g)(e, f.c.Google),
                    gdprBlockNielsenContent: Object(f.g)(e, f.c.Nielsen)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    enableTheatreMode: m.F,
                    disableTheatreMode: m.C,
                    togglePersistentPlayer: m.N,
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
                    } else !e.collectionID || e.videoID ? I.k.withCategory("video-player").error(new Error("No collection or video specified from the emitted player transition event."), "No collection or video specified from the emitted player transition event.") : t.push("/collections/" + e.collectionID);
                else t.push("/videos/" + e.videoID)
            }
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return W
            }), n.d(t, "c", function() {
                return j
            }), n.d(t, "a", function() {
                return L.e
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

            function o(e, t) {
                return !(!e && !t) && (!t || !e || (e.vodID && !t.vodID || e.collectionID && !t.collectionID))
            }
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
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
            n.d(t, "e", function() {
                    return r
                }), n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return s
                }), n.d(t, "c", function() {
                    return l
                }), n.d(t, "d", function() {
                    return a
                }),
                function(e) {
                    e.Embed = "embed", e.Feed = "feed", e.Frontpage = "frontpage", e.Site = "site", e.Highlighter = "highlighter", e.Onboarding = "onboarding", e.ClipsViewing = "clips-viewing", e.ClipsWatchPage = "clips-watch", e.ClipsEditing = "clips-editing", e.ClipsEmbed = "clips-embed", e.Dashboard = "dashboard", e.SquadStreamPrimary = "squad-primary", e.SquadStreamSecondary = "squad-secondary"
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
                return m
            }), n.d(t, "e", function() {
                return E
            }), n.d(t, "d", function() {
                return h
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, "c", function() {
                return g
            });
            var r = n("/7QA"),
                o = n("D7An"),
                i = null,
                a = null,
                s = null,
                l = null,
                c = "variant_a",
                u = "variant1",
                d = "on",
                p = new RegExp("^/(" + ["overwatchleague", "overwatchleague_allaccess", "overwatchleague_kr", "overwatchleague_fr", "overwatchleague_zh", "overwatchleague_zhtw", "blizzheroes", "BlizzHeroesKR", "BlizzHeroesDE", "BlizzHeroesRU", "BlizzHeroesFR", "camhux", "Hgg_cheering_test", "PlayHearthstone", "PlayHearthstoneRU", "PlayhearthstoneKR", "PlayhearthstoneJP", "PlayHearthstoneFR", "Hearthstoneth", "Hearthstonezhtw"].join("|") + ")", "i");

            function m() {
                return null !== i ? i : i = r.p.experiments.getAssignment(o.b.FrenchVanilla) === c
            }

            function E() {
                return null !== a ? a : a = r.p.experiments.getAssignment(o.b.WatchSombra) === d
            }

            function h(e) {
                return !!e.match(p)
            }

            function f() {
                return null !== s ? s : s = r.p.experiments.getAssignment(o.b.VODVoltron) === u
            }

            function g() {
                return null !== l ? l : l = r.p.experiments.getAssignment(o.b.VODTopShelf) === d
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
                return h
            }), n.d(t, "c", function() {
                return f
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
                return T
            }), n.d(t, "r", function() {
                return _
            }), n.d(t, "t", function() {
                return R
            }), n.d(t, "m", function() {
                return b
            }), n.d(t, "p", function() {
                return v
            }), n.d(t, "o", function() {
                return I
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
                return k
            }), n.d(t, "k", function() {
                return x
            }), n.d(t, "s", function() {
                return B
            }), n.d(t, "n", function() {
                return w
            }), n.d(t, "l", function() {
                return F
            });
            var r, o, i, a, s, l = n("cr+I"),
                c = n("/7QA"),
                u = n("QzU5"),
                d = n("+GjP"),
                p = n("DMoW"),
                m = n("tuvy"),
                E = n("XKWF"),
                h = "sort",
                f = "filter",
                g = "range";

            function T(e, t, n, r) {
                var i = r || _(t),
                    a = "";
                i && (a = "?" + h + "=" + function(e) {
                    switch (e) {
                        case E.a.Popular:
                            return o.Popular;
                        case E.a.Newest:
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

            function _(e) {
                var t = l.parse(e.location.search);
                return Object(E.b)(t.sort || "")
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

            function b(e) {
                var t = l.parse(e.location.search);
                return e.match.params.collectionID || t.collection || null
            }

            function v(e) {
                return "" === e ? "" : e.startsWith("v") ? e : "v" + e
            }

            function I() {
                return Object(m.b)() ? "videos" : "videos/all"
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
                var t = Object(d.a)(e, h);
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
                var t = Object(d.a)(e, f);
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
                var n = "" + I();
                t && t.filter && (n = t.filter);
                var r = "";
                return t && t.sort && (r = "?" + h + "=" + t.sort), "/" + e + "/" + n + r
            }

            function L(e, t, n) {
                return !t && n ? e ? "/" + e + "/" + s.Collection + "/" + n : "/collections/" + n : e ? "/" + e + "/" + s.Video + "/" + t + (n ? "?collection=" + n : "") : "/videos/" + t + (n ? "?collection=" + n : "")
            }

            function M(e, t) {
                return "/" + e + "/" + s.Clip + "/" + t
            }

            function k(e, t, n) {
                var r = "/" + e,
                    o = B(t),
                    i = function(e) {
                        return e.match.params.contentType === s.Clip && e.match.params.contentID || null
                    }(t),
                    a = w(t),
                    c = l.parse(t.location.search).collection;
                if (r = o ? r.concat("/" + s.Video + "/" + o + (c ? "?collection=" + c : "")) : i ? r.concat("/" + s.Clip + "/" + i) : a && !c ? r.concat("/" + s.Collection + "/" + a) : r.concat("/videos"), n) {
                    var u = U(n);
                    if (Object.keys(u).length > 0) return c ? r + "&" + l.stringify(u) : r + "?" + l.stringify(u)
                }
                return x(e, n)
            }

            function x(e, t) {
                var n = "/" + e + "/videos";
                if (t) {
                    var r = U(t);
                    if (Object.keys(r).length > 0) return n + "?" + l.stringify(r)
                }
                return n
            }

            function U(e) {
                var t = {};
                return e.sort && (t[h] = e.sort), e.filter && (t[f] = e.filter), e.range && (t[g] = e.range), t
            }

            function B(e) {
                return e.match.params.contentType === s.Video && e.match.params.contentID || e.match.params.videoID || null
            }

            function w(e) {
                var t = l.parse(location.search);
                return e.match.params.contentType === s.Collection && e.match.params.contentID || e.match.params.collectionID || t.collection || null
            }

            function F(e) {
                switch (e) {
                    case r.All:
                        return p.l.ALL_TIME;
                    case r.Day:
                        return p.l.LAST_DAY;
                    case r.Week:
                        return p.l.LAST_WEEK;
                    case r.Month:
                        return p.l.LAST_MONTH;
                    case r.Trending:
                        return p.l.TRENDING;
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