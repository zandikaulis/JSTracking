(window.webpackJsonp = window.webpackJsonp || []).push([
    [74], {
        "+PZR": function(e, t, n) {
            "use strict";
            var r = function(e, t) {
                    var n = "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e);
                    return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, n).replace(/{description}/, t)
                },
                i = n("/7QA");

            function a() {
                return [{
                    id: "other",
                    text: Object(i.d)("Other Terms of Service Violation", "ReportUserModal")
                }]
            }
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            })
        },
        "+pBb": function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return r
            }), n.d(t, "e", function() {
                return i
            }), n.d(t, "i", function() {
                return a
            }), n.d(t, "j", function() {
                return o
            }), n.d(t, "q", function() {
                return s
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "g", function() {
                return d
            }), n.d(t, "h", function() {
                return u
            }), n.d(t, "f", function() {
                return p
            }), n.d(t, "l", function() {
                return m
            }), n.d(t, "k", function() {
                return h
            }), n.d(t, "n", function() {
                return f
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "r", function() {
                return v
            }), n.d(t, "t", function() {
                return k
            }), n.d(t, "s", function() {
                return b
            }), n.d(t, "w", function() {
                return y
            }), n.d(t, "v", function() {
                return S
            }), n.d(t, "a", function() {
                return _
            }), n.d(t, "o", function() {
                return E
            }), n.d(t, "p", function() {
                return C
            }), n.d(t, "u", function() {
                return T
            }), n.d(t, "J", function() {
                return D
            }), n.d(t, "E", function() {
                return N
            }), n.d(t, "K", function() {
                return O
            }), n.d(t, "F", function() {
                return I
            }), n.d(t, "O", function() {
                return w
            }), n.d(t, "L", function() {
                return R
            }), n.d(t, "H", function() {
                return M
            }), n.d(t, "C", function() {
                return U
            }), n.d(t, "I", function() {
                return j
            }), n.d(t, "D", function() {
                return x
            }), n.d(t, "G", function() {
                return F
            }), n.d(t, "B", function() {
                return W
            }), n.d(t, "y", function() {
                return A
            }), n.d(t, "A", function() {
                return P
            }), n.d(t, "M", function() {
                return V
            }), n.d(t, "z", function() {
                return L
            }), n.d(t, "P", function() {
                return B
            }), n.d(t, "S", function() {
                return z
            }), n.d(t, "x", function() {
                return H
            }), n.d(t, "N", function() {
                return G
            }), n.d(t, "R", function() {
                return q
            }), n.d(t, "Q", function() {
                return $
            });
            var r = "chat.CHAT_HIDDEN",
                i = "chat.CHAT_SHOWN",
                a = "chat.EMOTE_SETS_UPDATED",
                o = "chat.FOLLOWER_MODE_DURATION_PREFERENCE_CHANGED",
                s = "chat.ROOM_STATE_UPDATED",
                l = "chat.AUTOMOD_ACTIONS_ENABLED",
                c = "chat.AUTOMOD_ACTIONS_DISABLED",
                d = "chat.EMOTE_PICKER_CLOSED",
                u = "chat.EMOTE_PICKER_OPENED",
                p = "chat.CLOSE_CHAT_RULES",
                m = "chat.MODERATION_ACTIONS_ENABLED",
                h = "chat.MODERATION_ACTIONS_DISABLED",
                f = "chat.MOD_ICONS_ENABLED",
                g = "chat.MOD_ICONS_DISABLED",
                v = "chat.SHOW_CHAT_RULES",
                k = "chat.TIMESTAMPS_ENABLED",
                b = "chat.TIMESTAMPS_DISABLED",
                y = "chat.USERNAME_CONTRAST_ENABLED",
                S = "chat.USERNAME_CONTRAST_DISABLED",
                _ = "chat.ADD_COMMAND",
                E = "chat.REMOVE_COMMAND",
                C = "chat.RENDER_SENT_CHAT_MESSAGE",
                T = "chat.UNHIDE_IGNORED_COMMAND";

            function D() {
                return {
                    type: k
                }
            }

            function N() {
                return {
                    type: b
                }
            }

            function O() {
                return {
                    type: y
                }
            }

            function I() {
                return {
                    type: S
                }
            }

            function w() {
                return {
                    type: i
                }
            }

            function R() {
                return {
                    type: r
                }
            }

            function M() {
                return {
                    type: l
                }
            }

            function U() {
                return {
                    type: c
                }
            }

            function j() {
                return {
                    type: m
                }
            }

            function x() {
                return {
                    type: h
                }
            }

            function F() {
                return {
                    type: f
                }
            }

            function W() {
                return {
                    type: g
                }
            }

            function A(e, t) {
                return {
                    type: o,
                    channelLogin: e,
                    duration: t
                }
            }

            function P() {
                return {
                    type: d
                }
            }

            function V() {
                return {
                    type: u
                }
            }

            function L() {
                return {
                    type: p
                }
            }

            function B() {
                return {
                    type: v
                }
            }

            function z(e) {
                return {
                    type: s,
                    roomState: e
                }
            }

            function H(e, t) {
                return {
                    type: _,
                    command: e.toLowerCase(),
                    handler: t
                }
            }

            function G(e, t) {
                return {
                    type: E,
                    command: e.toLowerCase(),
                    handler: t
                }
            }

            function q(e) {
                return {
                    type: C,
                    customEvent: e
                }
            }

            function $(e) {
                return {
                    type: T,
                    userID: e
                }
            }
        },
        "/HY+": function(e, t, n) {
            "use strict";
            var r = n("dAHa"),
                i = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                c = n("aCAx"),
                d = n("GnwI"),
                u = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.xb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, a.createElement(r.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), a.createElement(l.a, null))
                    }, t
                }(a.Component));
            var m = Object(s.compose)(Object(d.c)("ReportUserModal"), Object(o.connect)(null, function(e) {
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
        "/Kya": function(e, t, n) {},
        "0FG4": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            });
            var r, i = n("RcPG"),
                a = n("a1OF");
            ! function(e) {
                e[e.Position = 0] = "Position", e[e.Token = 1] = "Token"
            }(r || (r = {}));
            var o = "0";

            function s(e, t, n) {
                var o = n.type === r.Position ? t : e,
                    s = n.map[o];
                if (s) {
                    var l = function(e, t) {
                        return {
                            images: {
                                sources: {
                                    "1x": Object(a.d)(t, 1),
                                    "2x": Object(a.d)(t, 2),
                                    "4x": Object(a.d)(t, 4)
                                },
                                themed: !1
                            },
                            alt: e
                        }
                    }(e, s.id);
                    return {
                        type: i.a.Emote,
                        content: l
                    }
                }
                return null
            }
            var l = {
                "\\:\\&gt\\;": [":>"],
                "\\&gt\\;\\(": [">("],
                "\\&lt\\;\\]": ["<]"],
                "\\&lt\\;3": ["<3"],
                ":-?(?:7|L)": [":-7", ":-L", ":7", ":L"],
                "[oO](_|\\.)[oO]": ["o_o", "O_O", "o_O", "O_o", "o.o", "O.O", "o.O", "O.o"],
                "\\;-?(p|P)": [";-p", ";-P", ";p", ";P"],
                "\\;-?\\)": [";-)", ";)"],
                "\\:-?(o|O)": [":-o", ":-O", ":o", ":O"],
                "\\:-?(p|P)": [":-p", ":-P", ":p", ":P"],
                "\\:-?(S|s)": [":-S", ":-s", ":s", ":S"],
                "\\:-?[\\\\/]": [":-/", ":-\\", ":/", ":\\"],
                "\\:-?[z|Z|\\|]": [":-|", ":-Z", ":-z", ":|", ":Z", ":z"],
                "\\:-?\\(": [":-(", ":("],
                "\\:-?\\)": [":-)", ":)"],
                "\\:-?D": [":-D", ":D"],
                "#-?[\\\\/]": ["#-/", "#-\\", "#/", "#\\"],
                "B-?\\)": ["B-)", "B)"],
                "R-?\\)": ["R-)", "R)"]
            };

            function c(e) {
                for (var t = {}, n = 0, r = e; n < r.length; n++) {
                    var i = r[n];
                    if (i && i.emotes)
                        for (var a = 0, s = i.emotes; a < s.length; a++) {
                            var c = s[a];
                            if (c && c.id && c.token)
                                for (var d = 0, u = l[c.token] || [c.token]; d < u.length; d++) {
                                    var p = u[d];
                                    t[p] && i.id === o || (t[p] = {
                                        id: c.id,
                                        token: p
                                    })
                                }
                        }
                }
                return t
            }
        },
        "0JUI": function(e, t, n) {},
        "0WFu": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("3Bft");

            function i(e) {
                return [r.b.Prime, r.b.Custom].includes(e) ? null : parseInt(e, 10) / 1e3
            }
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "directories"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "nodes"
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
                                                        value: "directoryType"
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
                    end: 236
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\ndirectories {\nnodes {\nid\nname\ndisplayName\ndirectoryType\n}\n}\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "28vT": function(e, t, n) {},
        "2Dht": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "WhisperThread"
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
                                value: "whisperThread"
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
                                        value: "userLastMessageRead"
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
                                                value: "sentAt"
                                            },
                                            arguments: [],
                                            directives: []
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "unreadMessagesCount"
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
                                            kind: "IntValue",
                                            value: "20"
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
                                                                value: "nonce"
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
                                                                        value: "content"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "emotes"
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
                                                                                value: "emoteID"
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
                                                                                value: "from"
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
                                                                            directives: []
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
                                                                        value: "id"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "sentAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "editedAt"
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
                                                                value: "__typename"
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
                }],
                loc: {
                    start: 0,
                    end: 347
                }
            };
            n.loc.source = {
                body: "query WhisperThread($id: ID!) {\nwhisperThread(id: $id) {\nid\nuserLastMessageRead {\nid\nsentAt\n__typename\n}\nunreadMessagesCount\nmessages(first: 20) {\nedges {\ncursor\nnode {\nid\nnonce\ncontent {\ncontent\nemotes {\nid\nemoteID\nsetID\nfrom\nto\n__typename\n}\n__typename\n}\nfrom {\nid\n}\nsentAt\neditedAt\ndeletedAt\n__typename\n}\n__typename\n}\n__typename\n}\n__typename\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "3Bft": function(e, t, n) {
            "use strict";
            var r, i;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.Week = "WEEK", e.Month = "MONTH", e.Year = "YEAR", e.OneTime = "ONE_TIME"
                }(r || (r = {})),
                function(e) {
                    e.PercentOff = "percent_off", e.FixedValueOff = "fixed_value_off"
                }(i || (i = {}));
            var a = {
                Prime: "prime",
                Tier1: "1000",
                Tier2: "2000",
                Tier3: "3000",
                Custom: "Custom"
            }
        },
        "3YIm": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "SendWhisper"
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
                                    value: "SendWhisperInput"
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
                                value: "sendWhisper"
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
                                                value: "nonce"
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
                                                        value: "content"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "emotes"
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
                                                                value: "emoteID"
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
                                                                value: "from"
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
                                                            directives: []
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
                                                        value: "id"
                                                    },
                                                    arguments: [],
                                                    directives: []
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sentAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "editedAt"
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
                                                value: "thread"
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
                                                        value: "participants"
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
                                                                        value: "whisperPermissions"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "receive"
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
                                                value: "__typename"
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
                }],
                loc: {
                    start: 0,
                    end: 352
                }
            };
            n.loc.source = {
                body: "mutation SendWhisper($input: SendWhisperInput!) {\nsendWhisper(input: $input) {\nmessage {\nid\nnonce\ncontent {\ncontent\nemotes {\nid\nemoteID\nsetID\nfrom\nto\n__typename\n}\n__typename\n}\nfrom {\nid\n__typename\n}\nsentAt\neditedAt\ndeletedAt\nthread {\nid\nparticipants {\nid\nself {\nwhisperPermissions {\nreceive\n}\n}\n}\n}\n__typename\n}\nerror {\ncode\n__typename\n}\n__typename\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "3iFw": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("fvjX"),
                i = n("/7QA"),
                a = n("mrSG"),
                o = n("G1cX"),
                s = n("CzFK"),
                l = 234,
                c = 310;

            function d(e) {
                if (0 === e.openedIDs.length) return 0;
                for (var t = 0, n = 0, r = e.openedIDs; n < r.length; n++) {
                    var i = r[n],
                        a = e.byID[i];
                    a.hidden || (t += a.collapsed ? l : c)
                }
                return t
            }

            function u(e) {
                var t = e.openedIDs.slice(),
                    n = t.pop();
                return n && e.focusedID === n && t.length > 0 && (t.pop(), t.push(n)), o(e, function(e) {
                    return e.openedIDs
                }, function() {
                    return t
                })
            }

            function p(e, t) {
                var n = e.orderedIDs.filter(function(t) {
                    return !e.openedIDs.includes(t)
                });
                return n.length > 0 ? m(e, n[0], t) : e
            }

            function m(e, t, n) {
                var r = n - d(e),
                    i = a.__assign({}, e);
                return i.openedIDs.includes(t) || (r < c && (i = u(i)), i = o(i, function(e) {
                    return e.openedIDs
                }, function(e) {
                    return e.push(t), e
                })), i
            }

            function h(e, t, n) {
                if (!e.byID[t]) return e;
                var r = o(e, function(e) {
                    return e.byID
                }, function(e) {
                    return e[t].collapsed = !1, e
                });
                return r.focusedID = t, d(e) > n && (r = u(r)), r
            }
            var f = "whisperNotifications.WHISPER_THREAD_NOTIFIED";

            function g(e, t, n) {
                return {
                    type: f,
                    threadID: e,
                    afterMessageID: n,
                    content: t
                }
            }
            var v = Object(r.combineReducers)({
                display: function(e, t) {
                    switch (void 0 === e && (e = {
                        byID: {},
                        orderedIDs: [],
                        openedIDs: [],
                        focusedID: ""
                    }), t.type) {
                        case s.f:
                            var n = (i = a.__assign({}, e)).byID[t.data.threadID],
                                r = i.openedIDs.includes(t.data.threadID);
                            return n || (i = o(i, function(e) {
                                return e.orderedIDs
                            }, function(e) {
                                return e.push(t.data.threadID), e
                            }), i = o(i, function(e) {
                                return e.byID
                            }, function(e) {
                                return e[t.data.threadID] = t.data, e
                            })), i.openedIDs.includes(t.data.threadID) && !i.byID[t.data.threadID].hidden || (i.byID[t.data.threadID].hidden = t.data.hidden), t.data.ignoreCollapseIfOpen || t.data.collapsed || (i.focusedID = t.data.threadID), i = m(i, t.data.threadID, t.contentWidth), (!r || r && !t.data.ignoreCollapseIfOpen) && (t.data.collapsed || (i = h(i, t.data.threadID, t.contentWidth))), i;
                        case s.b:
                            if (!e.byID[t.threadID]) return e;
                            var i = o(e, function(e) {
                                return e.byID
                            }, function(e) {
                                return delete e[t.threadID], e
                            });
                            return i = o(i, function(e) {
                                return e.orderedIDs
                            }, function(e) {
                                return e.filter(function(e) {
                                    return e !== t.threadID
                                })
                            }), i = o(i, function(e) {
                                return e.openedIDs
                            }, function(e) {
                                return e.filter(function(e) {
                                    return e !== t.threadID
                                })
                            }), e.focusedID === t.threadID && (i.focusedID = i.openedIDs[0]), p(i, t.contentWidth);
                        case s.c:
                            return e.byID[t.threadID] ? (e.focusedID === t.threadID && (e.focusedID = ""), o(e, function(e) {
                                return e.byID
                            }, function(e) {
                                return e[t.threadID].collapsed = !0, e
                            })) : e;
                        case s.d:
                            return h(e, t.threadID, t.contentWidth);
                        case s.e:
                            return o(e, function(e) {
                                return e.focusedID
                            }, function() {
                                return t.threadID
                            });
                        case s.g:
                            return o(e, function(e) {
                                return e.focusedID
                            }, function(e) {
                                return e === t.threadID ? "" : e
                            });
                        case s.a:
                            var l = d(e);
                            if (l > t.contentWidth) {
                                if (e.openedIDs.length <= 1) return e;
                                for (var f = a.__assign({}, e); l > t.contentWidth && f.openedIDs.length > 1;) l = d(f = u(f));
                                return f
                            }
                            if (t.contentWidth - l >= c) {
                                var g = Math.floor((t.contentWidth - l) / c),
                                    v = Math.min(g, e.orderedIDs.length - e.openedIDs.length);
                                if (0 === v) return e;
                                f = a.__assign({}, e);
                                for (var k = 0; k < v; k++)
                                    if ((f = p(f, t.contentWidth)).openedIDs.length > 1)
                                        for (var b = f.openedIDs, y = b.length, S = 0, _ = f.orderedIDs; S < _.length; S++) {
                                            var E = _[S];
                                            if (b[y - 1] === E) {
                                                var C = b.splice(y - 2, 1);
                                                b.push(C[0]);
                                                break
                                            }
                                            if (b[y - 2] === E) break
                                        }
                                    return f
                            }
                            return e;
                        default:
                            return e
                    }
                },
                notifications: function(e, t) {
                    switch (void 0 === e && (e = {
                        byThreadID: {}
                    }), t.type) {
                        case f:
                            return e.byThreadID[t.threadID] ? o(e, function(e) {
                                return e.byThreadID[t.threadID]
                            }, function(e) {
                                return [{
                                    threadID: t.threadID,
                                    afterMessageID: t.afterMessageID,
                                    content: t.content
                                }].concat(e)
                            }) : o(e, function(e) {
                                return e.byThreadID
                            }, function(e) {
                                var n;
                                return a.__assign(((n = {})[t.threadID] = [{
                                    threadID: t.threadID,
                                    afterMessageID: t.afterMessageID,
                                    content: t.content
                                }], n), e)
                            });
                        default:
                            return e
                    }
                }
            });
            var k = [];
            i.o.store.registerReducer("whispers", v);
            var b = n("/MKj"),
                y = n("XDQu"),
                S = n("l1Uh"),
                _ = n("TSYQ"),
                E = n("q1tI"),
                C = n("yR8l"),
                T = n("eDVu"),
                D = n("0Log"),
                N = n("geRD"),
                O = n("/aPz"),
                I = n("u5aL"),
                w = n("8/mp"),
                R = n("eJ65"),
                M = n("yLwq"),
                U = n("f00E"),
                j = n("kz7j"),
                x = n("GnwI"),
                F = n("H/lO"),
                W = n("NZDK"),
                A = n("oe5X"),
                P = n("0FG4"),
                V = n("cys1"),
                L = n("Ue10");

            function B(e, t) {
                return Object(V.f)(Object(A.a)(e, {
                    emotes: {
                        type: P.a.Position,
                        map: function(e) {
                            var t = {};
                            return e.forEach(function(e) {
                                t[e.from] = {
                                    startIndex: e.from,
                                    id: e.emoteID
                                }
                            }), t
                        }(t)
                    },
                    links: {
                        blockLinks: !1
                    }
                }))
            }
            n("jPWu");
            var z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleThreadClick = function() {
                            t.props.selectThread(t.props.threadID)
                        }, t.handleArchiveClick = function(e) {
                            e.stopPropagation(), t.props.archiveThread(t.props.threadID)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e, t, n, r = this.props.user,
                            a = this.props.lastMessage ? B(this.props.lastMessage.content.content, this.props.lastMessage.content.emotes) : null,
                            o = this.props.unreadMessageCount,
                            s = Object(i.d)("Unknown", "ThreadListItem");
                        return r ? ((e = r.displayName || r.login) || (e = s), t = r.login, n = r.profileImageURL) : (e = s, t = s, n = null), E.createElement("div", {
                            onClick: this.handleThreadClick,
                            role: "listitem"
                        }, E.createElement(L.xb, {
                            className: "whispers-list-item",
                            borderBottom: !0,
                            padding: 1,
                            display: L.W.Flex,
                            flexDirection: L.Y.Row,
                            flexWrap: L.Z.NoWrap,
                            fullWidth: !0,
                            alignItems: L.f.Center,
                            "data-a-target": "whisper-with-" + t
                        }, E.createElement(L.Va, {
                            className: "whispers-list-item__avatar",
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, E.createElement(L.q, {
                            size: 30,
                            alt: Object(i.d)("{interlocutorName}'s Avatar", {
                                interlocutorName: e
                            }, "WhisperThreadListItem"),
                            src: n,
                            onLoad: this.props.avatarOnLoadCallback
                        })), E.createElement(L.Va, {
                            fullWidth: !0,
                            display: L.W.Inline
                        }, E.createElement(L.V, {
                            fontSize: L.Aa.Size5,
                            bold: !0,
                            italic: e === s
                        }, e), E.createElement(L.Va, {
                            className: "whispers-list-item__last-message",
                            ellipsis: !0
                        }, a)), E.createElement(L.Va, {
                            className: "whispers-list-item__unread-count",
                            margin: {
                                right: 1
                            },
                            textAlign: L.Jb.Right
                        }, E.createElement(L.V, {
                            bold: !0
                        }, o > 0 && !this.props.muted ? o : null), this.props.muted && E.createElement(L.Va, {
                            display: L.W.Flex,
                            alignItems: L.f.Center,
                            justifyContent: L.Ua.Center
                        }, E.createElement(L.mb, {
                            type: L.ob.Alt2,
                            asset: L.nb.WhisperMuted
                        }))), E.createElement("div", {
                            className: "whispers-list-item__archive"
                        }, E.createElement(L.A, {
                            ariaLabel: Object(i.d)("Archive Thread", "WhisperThreadListItem"),
                            tabIndex: -1,
                            icon: L.nb.Close,
                            "data-a-target": "whispers-list-item__archive-button",
                            onClick: this.handleArchiveClick,
                            "data-click-out-id": "whispers-list-item__archive-button"
                        }))))
                    }, t
                }(E.Component),
                H = n("PrJw"),
                G = n("N6NX"),
                q = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.markAllWhispersAsRead = function() {
                            var e = Object(N.a)({
                                markAllAsRead: !0
                            });
                            n.props.markAllWhispersAsRead && (Object(H.i)(), n.props.markAllWhispersAsRead(e)), n.props.onMarkAllMessagesRead && n.props.onMarkAllMessagesRead()
                        }, n.toggleDoNotDisturb = function() {
                            n.state.doNotDisturb ? (i.m.set("whisperDoNotDisturb", !1), Object(H.f)(), n.setState({
                                doNotDisturb: !1
                            })) : (i.m.set("whisperDoNotDisturb", !0), Object(H.g)(), n.setState({
                                doNotDisturb: !0
                            }))
                        }, n.state = {
                            doNotDisturb: i.m.get("whisperDoNotDisturb", !1)
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.doNotDisturb ? Object(i.d)("Disable Do Not Disturb", "ThreadsBoxSettings") : Object(i.d)("Enable Do Not Disturb", "ThreadsBoxSettings"),
                            t = Object(i.d)("Mark All Whispers as Read", "ThreadsBoxSettings");
                        return E.createElement(L.Va, {
                            className: "threads-box-settings",
                            display: L.W.Flex,
                            flexDirection: L.Y.Column,
                            margin: 1
                        }, E.createElement(L.Sa, {
                            ariaLabel: e,
                            onClick: this.toggleDoNotDisturb
                        }, E.createElement(L.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, e)), E.createElement(L.Sa, {
                            ariaLabel: t,
                            onClick: this.markAllWhispersAsRead
                        }, E.createElement(L.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, t)))
                    }, t = a.__decorate([Object(C.a)(G, {
                        name: "markAllWhispersAsRead"
                    })], t)
                }(E.Component);

            function $(e, t) {
                return e.find(function(e) {
                    return !!e && e.id !== t
                }) || void 0
            }
            var Q, K = n("NMMG"),
                Y = (n("dNN/"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onMarkAllMessagesRead = function() {
                            n.settingsMenu.toggleBalloon(!1)
                        }, n.renderUserSearchResult = function(e, t) {
                            var r = Object(i.d)("{username}'s avatar", {
                                    username: e.name
                                }, "ThreadsBox"),
                                a = e.profile_image || Object(M.c)(e.objectID, 30);
                            return E.createElement("div", {
                                key: "searchResult:" + e.objectID,
                                onClick: n.handleUserSearchResultClick(e, t)
                            }, E.createElement(L.xb, {
                                className: "whispers-list-item",
                                borderBottom: !0,
                                padding: 1,
                                "data-a-target": "whisper-search-result-" + e.login,
                                display: L.W.Flex,
                                flexDirection: L.Y.Row,
                                flexWrap: L.Z.NoWrap,
                                fullWidth: !0,
                                alignItems: L.f.Center
                            }, E.createElement(L.Va, {
                                margin: {
                                    right: .5
                                },
                                flexShrink: 0
                            }, E.createElement(L.q, {
                                size: 30,
                                src: a,
                                alt: r
                            })), E.createElement(L.Va, {
                                fullWidth: !0,
                                display: L.W.Flex,
                                flexDirection: L.Y.Column
                            }, E.createElement(L.V, {
                                fontSize: L.Aa.Size5,
                                bold: !0
                            }, e.login), E.createElement(L.Va, null, " "))))
                        }, n.saveSettingsMenuRef = function(e) {
                            return n.settingsMenu = e
                        }, n.handleConversationsClick = function() {
                            n.state.open || (n.props.latencyTracking.resetCustomEvents(j.a.Whispers), n.whispersHistoryLatencyEvent = n.props.latencyTracking.registerCustomEvent({
                                benchmark: 200,
                                group: j.a.Whispers,
                                key: j.b.WhispersHistory,
                                label: j.c.History,
                                start: j.d.Registration
                            })), n.setState(function(e) {
                                return {
                                    open: !e.open
                                }
                            })
                        }, n.selectThread = function(e) {
                            n.handleClose(), n.clearSearchText(), n.props.selectThread(e)
                        }, n.handleClose = function() {
                            n.setState({
                                open: !1
                            })
                        }, n.clearSearchText = function() {
                            n.setState({
                                searchText: "",
                                searching: !1
                            })
                        }, n.onSearchInputChange = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n = this;
                                return a.__generator(this, function(r) {
                                    return t = e.currentTarget.value, clearTimeout(this.inputTimeout), t && 0 !== t.length ? (this.setState({
                                        searchText: t,
                                        searching: !0
                                    }), this.inputTimeout = setTimeout(function() {
                                        n.search(n.state.searchText)
                                    }, 200), [2]) : (this.inputTimeout = 0, this.clearSearchText(), [2])
                                })
                            })
                        }, n.handleUserSearchResultClick = function(e, t) {
                            return function() {
                                var r = e.objectID;
                                if (null !== n.props.currentUserID && r !== n.props.currentUserID) {
                                    n.handleClose(), n.clearSearchText();
                                    var i = Object(K.a)(n.props.currentUserID, r);
                                    Object(H.e)({
                                        threadID: i,
                                        targetUserlogin: e.login,
                                        searchResultRank: t
                                    }), Object(H.b)({
                                        searchResultRank: t,
                                        searchQuery: n.state.searchText,
                                        isConversation: !1
                                    }), n.props.selectThread(i)
                                }
                            }
                        }, n.filterExistingThreads = function(e) {
                            var t = e.toLowerCase();
                            return n.props.orderedThreadIDs.filter(function(e) {
                                var r = $(n.props.threadsByID[e].participants, n.props.currentUserID);
                                return !(!r || !r.displayName) && r.displayName.toLowerCase().indexOf(t) >= 0
                            })
                        }, n.searchClient = new W.a({
                            appId: i.a.algoliaApplicationID,
                            apiKey: i.a.algoliaAPIKey,
                            apolloClient: i.o.apollo.client,
                            logger: i.j,
                            config: i.a,
                            stats: i.o.stats
                        }), n.state = {
                            open: !1,
                            searchText: "",
                            searching: !1
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return E.createElement(I.a, {
                            onClickOut: this.handleClose
                        }, E.createElement(L.Oa, {
                            className: "whispers-threads-box__container " + (this.state.open ? "whispers-threads-box__container--open" : ""),
                            display: L.W.Flex,
                            flexDirection: L.Y.Column,
                            flexWrap: L.Z.NoWrap,
                            border: !0,
                            background: L.r.Base,
                            position: L.db.Absolute,
                            attachBottom: !0,
                            attachRight: !0,
                            "data-click-out-id": "threads-box",
                            "data-a-target": "threads-box-" + (this.state.open ? "open" : "closed"),
                            borderRadius: {
                                topLeft: L.x.Medium,
                                topRight: L.x.Medium
                            }
                        }, E.createElement("div", {
                            "aria-labelledby": "whispers-box-header"
                        }, this.renderHeader(), this.renderList(), this.renderFooter())))
                    }, t.prototype.renderOpenCloseButton = function() {
                        var e = null;
                        if (this.props.unreadCount > 0) {
                            var t = this.props.unreadCount > 99 ? "99+" : this.props.unreadCount.toString();
                            e = E.createElement(L.Va, {
                                className: "whispers-threads-box__unread",
                                margin: {
                                    y: .5
                                }
                            }, E.createElement("span", {
                                className: "whispers-threads-box__unread--count",
                                "data-a-target": "whisper-unreads"
                            }, t))
                        }
                        return E.createElement(L.xb, {
                            className: "whispers-threads-box__open-close",
                            position: L.db.Relative,
                            background: L.r.Alt2,
                            display: L.W.Flex,
                            alignItems: L.f.Center,
                            justifyContent: L.Ua.Center
                        }, e, E.createElement(L.A, {
                            ariaLabel: Object(i.d)("Close Threads", "WhisperThreadsBox"),
                            icon: L.nb.Conversations,
                            onClick: this.handleConversationsClick,
                            "data-a-target": "whisper-box-button"
                        }))
                    }, t.prototype.renderList = function() {
                        var e, t = this;
                        if (!this.state.open) return null;
                        var n = null;
                        "" !== this.state.searchText && (n = E.createElement(L.xb, {
                            key: "otherPeopleDivider",
                            borderBottom: !0,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(i.d)("Other People", "WhispersThreadBox")));
                        var r = null;
                        if (this.state.searching ? r = E.createElement(L.Va, {
                                display: L.W.Flex,
                                flexDirection: L.Y.Column,
                                margin: {
                                    top: 4
                                },
                                alignItems: L.f.Center
                            }, E.createElement(L.Xa, {
                                delay: 0
                            })) : this.state.searchResults && this.state.searchResults.users && "" !== this.state.searchText && (r = this.state.searchResults.users.hits.filter(function(e) {
                                return !t.props.threadsByID[e.objectID]
                            }).map(this.renderUserSearchResult)), this.props.error) e = E.createElement(L.Va, {
                            margin: {
                                x: "auto"
                            },
                            display: L.W.Flex,
                            justifyContent: L.Ua.Center,
                            alignItems: L.f.Center,
                            fullHeight: !0
                        }, E.createElement(L.V, {
                            color: L.O.Error
                        }, Object(i.d)("There was a problem loading whispers.", "WhisperThreadsBox")));
                        else if (this.props.loading) e = E.createElement(L.Xa, null);
                        else {
                            var a = this.props.orderedThreadIDs;
                            "" !== this.state.searchText && (a = this.filterExistingThreads(this.state.searchText)), e = a.filter(function(e) {
                                return t.props.threadsByID[e] && !t.props.threadsByID[e].archived
                            }).map(function(e, n) {
                                var r = 0 === n ? function() {
                                        t.props.latencyTracking.reportCustomEvent(t.whispersHistoryLatencyEvent)
                                    } : void 0,
                                    i = t.props.threadsByID[e],
                                    a = $(i.participants, t.props.currentUserID);
                                return a ? E.createElement(z, {
                                    key: "whisperThread:" + i.id,
                                    user: a,
                                    threadID: i.id,
                                    lastMessage: i.lastMessage,
                                    archiveThread: t.props.archiveThread,
                                    selectThread: t.selectThread,
                                    unreadMessageCount: i.unreadMessagesCount,
                                    muted: i.muted,
                                    avatarOnLoadCallback: r
                                }) : null
                            })
                        }
                        return E.createElement(w.b, {
                            suppressScrollX: !0
                        }, E.createElement("div", {
                            role: "list"
                        }, e, n, r, E.createElement(w.a, {
                            enabled: this.state.open,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        })))
                    }, t.prototype.renderHeader = function() {
                        return this.state.open ? E.createElement(L.xb, {
                            className: "whispers-threads-box__header",
                            "data-a-target": "whispers-threads-box__header",
                            alignItems: L.f.Center,
                            background: L.r.Alt,
                            borderBottom: !0,
                            color: L.O.Base,
                            display: L.W.Flex,
                            flexDirection: L.Y.Row,
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                y: .5,
                                x: 1
                            },
                            "data-click-hide-id": "threads-box-header"
                        }, E.createElement(L.Na, {
                            flexGrow: 1,
                            display: L.W.Flex
                        }, E.createElement("div", {
                            id: "whispers-box-header"
                        }, E.createElement(L.V, {
                            type: L.Nb.Span,
                            bold: !0
                        }, Object(i.d)("Whispers", "WhisperThreadsBox")))), E.createElement(R.a, {
                            ref: this.saveSettingsMenuRef
                        }, E.createElement(L.A, {
                            ariaLabel: Object(i.d)("Settings", "WhisperThreadsBox"),
                            icon: L.nb.Gear,
                            "data-a-target": "whisper-settings-button"
                        }), E.createElement(L.u, {
                            size: L.w.Small,
                            direction: L.v.BottomRight,
                            offsetX: "0.5rem"
                        }, E.createElement(q, {
                            onMarkAllMessagesRead: this.onMarkAllMessagesRead
                        }))), E.createElement(L.A, {
                            ariaLabel: Object(i.d)("Minimize", "WhisperThreadsBox"),
                            icon: L.nb.Minimize,
                            onClick: this.handleClose,
                            "data-a-target": "whisper-close-button"
                        })) : null
                    }, t.prototype.renderFooter = function() {
                        return this.state.open ? E.createElement(L.xb, {
                            display: L.W.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            alignItems: L.f.Center,
                            borderTop: !0,
                            background: L.r.Alt
                        }, E.createElement(L.Va, {
                            flexGrow: 1,
                            padding: {
                                top: .5,
                                bottom: .5,
                                left: 1
                            }
                        }, E.createElement(L.pb, {
                            onChange: this.onSearchInputChange,
                            value: this.state.searchText,
                            placeholder: Object(i.d)("Search for People", "WhisperThreadsBox"),
                            id: "threads-box-filter",
                            autoFocus: !0,
                            "data-a-target": "whisper-search-input"
                        })), this.renderOpenCloseButton()) : this.renderOpenCloseButton()
                    }, t.prototype.search = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e ? [4, this.searchClient.queryForType(F.a.Users, e, U.a())] : [2];
                                    case 1:
                                        return t = n.sent(), this.setState({
                                            searchResults: t,
                                            searching: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t = a.__decorate([Object(x.c)("WhisperCenter", {
                        autoReportInteractive: !0
                    })], t)
                }(E.Component)),
                Z = n("MJbm"),
                J = n("aCAx"),
                X = n("kRBY"),
                ee = n("/HY+"),
                te = n("ZDlU"),
                ne = n("x7UT"),
                re = n("8Ad5"),
                ie = n("Mj6i"),
                ae = n("DMoW"),
                oe = n("okS7"),
                se = n("mmRu"),
                le = n("cpJf"),
                ce = n("2xye");
            ! function(e) {
                e.StrangerWarningConfirmationButton = "stranger-confirmation"
            }(Q || (Q = {}));
            var de = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        ! function(e) {
                            var t = {
                                target_user_id: e.targetUserID
                            };
                            i.n.track(ce.SpadeEventType.WhisperStrangerWarningImpression, t)
                        }({
                            targetUserID: this.props.targetUserID
                        })
                    }, t.prototype.render = function() {
                        var e;
                        return e = this.props.targetDisplayName ? Object(i.d)("You have blocked whispers from strangers. By sending a whisper to {username}, you will allow them to whisper you for 48 hours. You can disable their access again in whisper settings.", {
                            username: this.props.targetDisplayName
                        }, "WhisperThread") : Object(i.d)("You have blocked whispers from strangers. By sending a whisper to this user, you will allow them to whisper you for 48 hours. You can disable their access again in whisper settings.", "WhisperThread"), E.createElement(L.Va, {
                            attachBottom: !0,
                            padding: 1,
                            position: L.db.Absolute
                        }, E.createElement(L.Va, {
                            padding: {
                                bottom: 1
                            }
                        }, E.createElement(L.V, {
                            color: L.O.Alt2,
                            fontSize: L.Aa.Size6
                        }, e)), E.createElement(L.z, {
                            onClick: this.props.onStrangerWarningConfirmation,
                            "data-test-selector": Q.StrangerWarningConfirmationButton
                        }, Object(i.d)("Got it!", "WhisperThread")))
                    }, t
                }(E.Component),
                ue = n("2iEm"),
                pe = n("NSwr"),
                me = n("BhFH"),
                he = n("EvYO"),
                fe = n("D7An"),
                ge = n("TvOw"),
                ve = n("m98o"),
                ke = n("as+V"),
                be = n("oJmH"),
                ye = n("iS14"),
                Se = n("lZZ2"),
                _e = n("0tEc"),
                Ee = n("/rr3"),
                Ce = n("RQ6e"),
                Te = n("4qQ0"),
                De = n("Gu45"),
                Ne = n("dr/4"),
                Oe = "whispers-report-user-button",
                Ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderReportButton = function() {
                            var e = t.props.displayName || t.props.login,
                                n = Object(i.d)("Report {displayName}", {
                                    displayName: e
                                }, "ThreadSettings");
                            return E.createElement(L.Sa, {
                                "data-test-selector": Oe,
                                ariaLabel: n,
                                onClick: t.reportUser
                            }, E.createElement(L.Va, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, n))
                        }, t.onChannelRedirect = function() {
                            t.props.collapseThread && t.props.collapseThread()
                        }, t.toggleMutethread = function() {
                            var e = !t.props.isMuted,
                                n = a.__assign({}, Object(N.a)({
                                    threadID: t.props.threadID,
                                    isMuted: !t.props.isMuted
                                }), {
                                    optimisticResponse: {
                                        updateWhisperThread: {
                                            thread: {
                                                id: t.props.threadID,
                                                isMuted: e,
                                                __typename: "WhisperThread"
                                            },
                                            __typename: "UpdateWhisperThreadPayload"
                                        }
                                    }
                                });
                            e ? Object(H.j)(t.props.threadID) : Object(H.k)(t.props.threadID), t.props.setMuteThread(n)
                        }, t.onRevokeButtonClicked = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            e = a.__assign({}, Object(N.a)({
                                                threadID: this.props.threadID,
                                                removeWhitelist: !0
                                            })), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.revokeWhisperAccess(e)];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return t.sent(), [2];
                                        case 4:
                                            return this.props.onCloseThread(this.props.threadID), [2]
                                    }
                                })
                            })
                        }, t.reportUser = function() {
                            var e = t.props.displayName || t.props.login;
                            t.props.showReportUserModal({
                                onClose: t.onReportModalClose,
                                reportContext: {
                                    contentType: Te.a.Whisper,
                                    targetUserID: t.props.userID,
                                    contentID: t.props.threadID
                                },
                                title: Object(i.d)("Report {displayName}", {
                                    displayName: e
                                }, "ReportUserModal")
                            })
                        }, t.onReportModalClose = function(e, n) {
                            e === Ce.b.Success && n && t.props.onBlock && t.props.onBlock(t.props.threadID)
                        }, t.blockUser = function() {
                            t.props.showBlockModal({
                                context: ae.c.WHISPER,
                                currentUserData: t.props.currentUser,
                                displayName: t.props.displayName || t.props.login,
                                login: t.props.login,
                                onBlock: function() {
                                    return t.props.onBlock(t.props.threadID)
                                },
                                reason: ge.a.Other,
                                userID: t.props.userID
                            })
                        }, t.unblockUser = function() {
                            t.props.unblockUserMutation(t.props.userID, t.props.currentUser), t.props.onUnblock && t.props.onUnblock(t.props.threadID)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.displayName || this.props.login,
                            t = this.props.isMuted ? Object(i.d)("Turn Notifications On", "ThreadSettings") : Object(i.d)("Turn Notifications Off", "ThreadSettings"),
                            n = Object(i.d)("Go to {displayName}'s Channel", {
                                displayName: e
                            }, "ThreadSettings");
                        return E.createElement(L.Va, {
                            display: L.W.Flex,
                            flexDirection: L.Y.Column,
                            margin: 1
                        }, E.createElement(L.Sa, {
                            ariaLabel: t,
                            onClick: this.toggleMutethread
                        }, E.createElement(L.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, t)), E.createElement(L.xb, {
                            borderBottom: !0,
                            margin: {
                                y: 1,
                                left: .5
                            }
                        }), E.createElement(_e.a, {
                            friendButtonUIType: Ee.a.WhisperSettings,
                            targetID: this.props.userID
                        }), this.renderRevokeButton(), this.renderBlockButton(), this.renderReportButton(), E.createElement(L.Sa, {
                            linkTo: "/" + this.props.login,
                            onClick: this.onChannelRedirect,
                            ariaLabel: n
                        }, E.createElement(L.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, n)))
                    }, t.prototype.renderRevokeButton = function() {
                        return this.props.hasTemporaryWhisperAccess ? E.createElement(L.Sa, {
                            onClick: this.onRevokeButtonClicked,
                            "data-test-selector": "whispers-revoke-access-button"
                        }, E.createElement(L.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(i.d)("Revoke Whisper Access", "ThreadSettings"))) : null
                    }, t.prototype.renderBlockButton = function() {
                        var e, t, n = this.props.displayName || this.props.login;
                        return this.isBlocked ? (e = Object(i.d)("Unblock {displayName}", {
                            displayName: n
                        }, "ThreadSettings"), t = this.unblockUser) : (e = Object(i.d)("Block {displayName}", {
                            displayName: n
                        }, "ThreadSettings"), t = this.blockUser), E.createElement(L.Sa, {
                            "data-test-selector": "whispers-block-user-button",
                            ariaLabel: e,
                            onClick: t
                        }, E.createElement(L.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, e))
                    }, Object.defineProperty(t.prototype, "isBlocked", {
                        get: function() {
                            var e = this;
                            return !(!this.props.currentUser.blockedUsers || !this.props.currentUser.blockedUsers.find(function(t) {
                                return !!t && t.id === e.props.userID
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(E.Component);
            var we = Object(be.compose)(Object(b.connect)(null, function(e) {
                    return {
                        onCloseThread: function(t) {
                            return e(Object(s.h)(t, Object(S.a)()))
                        }
                    }
                }), Object(C.a)(De, {
                    name: "revokeWhisperAccess"
                }), Object(C.a)(Ne, {
                    name: "setMuteThread"
                }), Se.a, Object(ye.a)())(Ie),
                Re = n("pORx");
            var Me = n("NKxy");
            var Ue, je = n("vGFN"),
                xe = (n("hRS0"), "report-as-spam-button"),
                Fe = "mark-not-spam-button",
                We = "dismiss-prompt-button",
                Ae = "spam-prompt-pending-target",
                Pe = "spam-prompt-reported-target",
                Ve = {
                    displayName: "???",
                    login: "???",
                    displayBadges: [],
                    id: "",
                    self: null
                },
                Le = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.renderPotentialSpamPrompt = function() {
                            if (n.props.spamInfo && "low" !== n.props.spamInfo.likelihood && null === n.props.spamInfo.lastMarkedNotSpamAt) {
                                if ("pending" === n.state.potentialSpamResolution) return E.createElement(L.Va, {
                                    "data-a-target": Ae,
                                    className: "thread-header__potential-spam-prompt",
                                    attachRight: !0,
                                    attachLeft: !0,
                                    attachTop: !0
                                }, E.createElement(L.xb, {
                                    background: L.r.Alt2,
                                    padding: .5,
                                    elevation: 2
                                }, E.createElement(L.Va, {
                                    display: L.W.InlineBlock,
                                    margin: .5
                                }, E.createElement(L.V, {
                                    type: L.Nb.Span,
                                    fontSize: L.Aa.Size6,
                                    color: L.O.Alt2
                                }, Object(i.d)("It looks like this conversation triggered our spam detector. If it is spam, please report it!", "ThreadHeader"))), E.createElement(L.Va, {
                                    display: L.W.InlineBlock,
                                    margin: .5
                                }, E.createElement(L.z, {
                                    "data-a-target": xe,
                                    type: L.F.Alert,
                                    onClick: n.reportSpam,
                                    size: L.D.Small
                                }, Object(i.d)("Report spam", "ThreadHeader"))), E.createElement(L.Va, {
                                    display: L.W.InlineBlock,
                                    margin: .5
                                }, E.createElement(L.z, {
                                    "data-a-target": Fe,
                                    onClick: n.markNotSpam,
                                    size: L.D.Small
                                }, Object(i.d)("This is not spam", "ThreadHeader")))));
                                if ("reported" === n.state.potentialSpamResolution && n.interlocutor.displayName) return E.createElement(L.Va, {
                                    "data-a-target": Pe,
                                    className: "thread-header__potential-spam-prompt",
                                    attachRight: !0,
                                    attachLeft: !0,
                                    attachTop: !0
                                }, E.createElement(L.xb, {
                                    background: L.r.Alt2,
                                    padding: .5,
                                    elevation: 2
                                }, E.createElement(L.Va, {
                                    display: L.W.InlineBlock,
                                    margin: .5
                                }, E.createElement(L.V, {
                                    type: L.Nb.Span,
                                    fontSize: L.Aa.Size6,
                                    color: L.O.Alt2
                                }, Object(i.d)("Thank you for helping us fight spam. We've blocked {user} from sending you further whispers. You can undo this from the Whisper Settings Menu.", {
                                    user: n.interlocutor.displayName
                                }, "ThreadHeader"))), E.createElement(L.Va, {
                                    display: L.W.InlineBlock,
                                    margin: .5
                                }, E.createElement(L.z, {
                                    "data-a-target": We,
                                    type: L.F.Text,
                                    onClick: n.dismissSpamPrompt,
                                    size: L.D.Small
                                }, Object(i.d)("Dismiss", "ThreadHeader")))))
                            }
                            return null
                        }, n.reportSpam = function() {
                            n.props.reportUserMutation(n.interlocutor.id, ge.b.Spam, n.props.threadID), n.props.blockUserMutation(n.interlocutor.id, ge.a.Other, ae.c.WHISPER, n.props.currentUser), n.props.setThreadSpamStatusMutation(n.props.threadID, !0), Object(je.l)(n.interlocutor.login, je.a.SpamPropmt), n.setState({
                                potentialSpamResolution: "reported"
                            })
                        }, n.markNotSpam = function() {
                            n.props.setThreadSpamStatusMutation(n.props.threadID, !1), Object(je.o)(n.props.threadID), n.setState({
                                potentialSpamResolution: "dismissed"
                            })
                        }, n.dismissSpamPrompt = function() {
                            n.props.onBlock && n.props.onBlock(n.props.threadID), Object(je.n)(n.props.threadID), n.setState({
                                potentialSpamResolution: "dismissed"
                            })
                        }, n.onSettingsClick = function(e) {
                            e.stopPropagation()
                        }, n.onHeaderActivate = function(e) {
                            e.target === e.currentTarget && (e.charCode !== re.a.Enter && e.charCode !== re.a.Space || (n.props.onHeaderInteract(), e.stopPropagation()))
                        }, n.onFocus = function() {
                            n.setState({
                                isElementFocused: !0
                            })
                        }, n.onBlur = function() {
                            n.setState({
                                isElementFocused: !1
                            })
                        }, n.onPresenceClick = function(e, t) {
                            t.stopPropagation(), n.props.interlocutor && n.props.interlocutorActivity ? Object(he.b)({
                                context: e,
                                friendActivity: n.props.interlocutorActivity,
                                friendLogin: n.props.interlocutor.login
                            }) : i.j.warn("[ThreadHeader] Attempted to track presence click without required data.")
                        };
                        var r = i.o.experiments.getAssignment(fe.b.ExtendedPresence);
                        return n.state = {
                            potentialSpamResolution: "pending",
                            hasExtendedRichPresence: "variant_a" === r,
                            isElementFocused: !1
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.isHighlighted && !this.state.isElementFocused,
                            t = _({
                                "thread-header__title-bar-container": !0,
                                "thread-header__title-bar-container--highlighted": this.props.isHighlighted,
                                "thread-header__title-bar-container--focused": this.props.isFocused
                            }),
                            n = _({
                                "thread-header": !0,
                                "thread-header--collapsed": this.props.isCollapsed
                            }),
                            r = _({
                                "thread-header__display-name--highlighted": this.props.isHighlighted
                            }),
                            a = Object(i.d)("Close", "WhisperThreadHeader"),
                            o = Object(i.d)("Settings", "WhisperThreadHeader");
                        if (this.props.isLoading || !this.props.currentUser || !this.interlocutor) return E.createElement(L.Va, {
                            className: t,
                            display: L.W.Flex,
                            justifyContent: L.Ua.Between,
                            fullWidth: !0,
                            alignItems: L.f.Center,
                            padding: {
                                y: .5,
                                x: 1
                            },
                            flexShrink: 0,
                            flexGrow: 0,
                            flexWrap: L.Z.NoWrap
                        }, E.createElement(L.cb, {
                            height: 20,
                            width: 80
                        }), E.createElement(L.Va, {
                            display: L.W.Flex
                        }, E.createElement(L.A, {
                            ariaLabel: a,
                            icon: L.nb.RemoveTag,
                            "data-a-target": "whispers-thread__close-button-" + this.props.threadID,
                            onClick: this.props.onClose
                        })));
                        var s = null,
                            l = null,
                            c = null,
                            d = null;
                        if (this.props.interlocutorActivity) {
                            var u = this.props.interlocutorAvailability,
                                p = this.props.interlocutorActivity;
                            if (l = E.createElement(L.Va, {
                                    margin: {
                                        left: 1
                                    },
                                    display: L.W.Flex,
                                    alignItems: L.f.Center
                                }, E.createElement(L.eb, {
                                    status: function(e) {
                                        switch (e) {
                                            case pe.a.Online:
                                                return L.fb.Online;
                                            case pe.a.Away:
                                            case pe.a.Idle:
                                                return L.fb.Away;
                                            case pe.a.Busy:
                                                return L.fb.Busy;
                                            case pe.a.Offline:
                                            case pe.a.Invisible:
                                            default:
                                                return L.fb.Offline
                                        }
                                    }(u || pe.a.Offline)
                                })), p) {
                                var m = {
                                        activity: p,
                                        availability: this.state.hasExtendedRichPresence ? u : void 0
                                    },
                                    h = Object(ve.b)(m, !0),
                                    f = null,
                                    g = Object(ve.c)(this.interlocutor.login, p);
                                if (g && (f = {
                                        pathname: g,
                                        state: {
                                            content: ce.PageviewContent.Presence,
                                            medium: ce.PageviewMedium.Whispers
                                        }
                                    }), f) {
                                    var v = _({
                                        "thread-header__activity-link--highlighted": this.props.isHighlighted
                                    });
                                    c = E.createElement(ue.a, {
                                        className: v,
                                        title: Object(ve.b)(m) || "",
                                        onClick: this.onPresenceClick.bind(this, he.a.WhisperHeaderLink),
                                        to: f,
                                        "data-test-selector": "whispers-thread__presence-link"
                                    }, h)
                                } else c = h;
                                this.props.isCollapsed || (d = E.createElement(L.Va, {
                                    padding: {
                                        right: .5
                                    }
                                }, E.createElement(ke.a, {
                                    availability: u || pe.a.Offline,
                                    link: f,
                                    onClick: this.onPresenceClick.bind(this, he.a.WhisperHeaderButton),
                                    shouldHollowOverlay: this.props.isHighlighted
                                })))
                            }
                        }
                        this.props.isCollapsed || !this.props.currentUser || this.props.interactionsDisabled || (s = E.createElement(R.a, null, E.createElement(L.A, {
                            ariaLabel: o,
                            icon: L.nb.Gear,
                            overlay: e
                        }), E.createElement(L.u, {
                            direction: L.v.BottomRight,
                            offsetX: "0.5rem",
                            size: L.w.Small
                        }, E.createElement(we, {
                            login: this.interlocutor.login,
                            displayName: this.interlocutor.displayName,
                            currentUser: this.props.currentUser,
                            userID: this.interlocutor.id,
                            isMuted: this.props.isMuted,
                            threadID: this.props.threadID,
                            collapseThread: this.props.collapse,
                            onBlock: this.props.onBlock,
                            onUnblock: this.props.onUnblock,
                            showReportUserModal: this.props.showReportUserModal,
                            hasTemporaryWhisperAccess: !!this.interlocutor.self && this.interlocutor.self.whisperPermissions.receive === ae.O.TEMPORARY
                        }))));
                        var k = this.interlocutor.displayBadges.map(function(e) {
                            return E.createElement(L.Na, {
                                key: e.id,
                                flexShrink: 0,
                                margin: {
                                    right: .5
                                }
                            }, E.createElement("img", {
                                alt: e.title,
                                title: e.title,
                                className: "thread-header__badge",
                                src: e.imageURL
                            }))
                        });
                        return E.createElement(L.Va, {
                            className: n,
                            position: L.db.Relative,
                            fullWidth: !0
                        }, E.createElement("div", {
                            className: "thread-header__click-area",
                            onClick: this.props.onHeaderInteract,
                            onKeyPress: this.onHeaderActivate,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur,
                            "data-a-target": "thread-header__click-area",
                            tabIndex: 0
                        }, E.createElement(L.Va, {
                            className: t,
                            fullWidth: !0,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            alignItems: L.f.Center,
                            flexGrow: 1,
                            display: L.W.Flex,
                            "data-a-target": "whisper-thread-title-bar-" + (this.interlocutor && this.interlocutor.login),
                            "data-click-out-id": "thread-expand-close",
                            flexWrap: L.Z.NoWrap
                        }, E.createElement(L.Va, {
                            display: L.W.Flex,
                            flexDirection: L.Y.Column,
                            flexGrow: 1,
                            fullHeight: !0,
                            overflow: L.Ya.Hidden
                        }, E.createElement(L.Va, {
                            display: L.W.Flex,
                            flexGrow: 1,
                            alignItems: L.f.Center,
                            flexWrap: L.Z.NoWrap,
                            padding: {
                                right: 1
                            },
                            ellipsis: !0
                        }, k, E.createElement(L.V, {
                            className: r,
                            type: L.Nb.Span,
                            bold: !0,
                            ellipsis: !0
                        }, this.interlocutor.displayName ? this.interlocutor.displayName : Ve.displayName), l), E.createElement(L.xb, {
                            className: "thread-header__activity",
                            color: this.props.isHighlighted ? L.O.Overlay : L.O.Base,
                            padding: {
                                right: 1
                            },
                            ellipsis: !0
                        }, c)), E.createElement(L.Va, {
                            display: L.W.Flex,
                            flexShrink: 0,
                            flexDirection: L.Y.Row,
                            alignItems: L.f.Center
                        }, d, E.createElement("div", {
                            onClick: this.onSettingsClick
                        }, s), E.createElement(L.A, {
                            ariaLabel: a,
                            icon: L.nb.RemoveTag,
                            "data-a-target": "thread-close-button-" + (this.interlocutor && this.interlocutor.login),
                            "data-test-selector": "thread-header__close-button-" + this.props.threadID,
                            onClick: this.props.onClose,
                            overlay: e
                        })))), this.renderPotentialSpamPrompt())
                    }, Object.defineProperty(t.prototype, "interlocutor", {
                        get: function() {
                            return this.props.interlocutor || Ve
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(E.Component),
                Be = Object(r.compose)(Object(me.a)(), function() {
                    var e = this;
                    return Object(C.a)(Re, {
                        props: function(t) {
                            return {
                                reportUserMutation: function(n, r, o) {
                                    return a.__awaiter(e, void 0, void 0, function() {
                                        var e;
                                        return a.__generator(this, function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    if (!t.mutate) return [3, 4];
                                                    a.label = 1;
                                                case 1:
                                                    return a.trys.push([1, 3, , 4]), [4, t.mutate({
                                                        variables: {
                                                            input: {
                                                                targetUserID: n,
                                                                reason: r,
                                                                threadID: o
                                                            }
                                                        }
                                                    })];
                                                case 2:
                                                    return a.sent(), [3, 4];
                                                case 3:
                                                    return e = a.sent(), i.j.error(e, "Unable to report user"), [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    })
                                }
                            }
                        }
                    })
                }(), function() {
                    var e = this;
                    return Object(C.a)(Me, {
                        props: function(t) {
                            return {
                                setThreadSpamStatusMutation: function(n, r) {
                                    return a.__awaiter(e, void 0, void 0, function() {
                                        var e;
                                        return a.__generator(this, function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    if (!t.mutate) return [3, 4];
                                                    a.label = 1;
                                                case 1:
                                                    return a.trys.push([1, 3, , 4]), [4, t.mutate({
                                                        variables: {
                                                            input: {
                                                                threadID: n,
                                                                isSpam: r
                                                            }
                                                        }
                                                    })];
                                                case 2:
                                                    return a.sent(), [3, 4];
                                                case 3:
                                                    return e = a.sent(), i.j.error(e, "Unable to modify threads spam status user"), [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    })
                                }
                            }
                        }
                    })
                }())(Le),
                ze = n("HAa/");
            ! function(e) {
                e[e.Timestamp = 0] = "Timestamp", e[e.Whisper = 1] = "Whisper", e[e.Warning = 2] = "Warning", e[e.InactiveUserNotice = 3] = "InactiveUserNotice", e[e.NewMessages = 4] = "NewMessages", e[e.Notification = 5] = "Notification"
            }(Ue || (Ue = {}));
            n("0JUI");
            var He = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.message;
                        switch (e.type) {
                            case Ue.Timestamp:
                                return E.createElement(L.xb, {
                                    className: "thread-message__timestamp",
                                    color: L.O.Alt2,
                                    fontSize: L.Aa.Size7
                                }, function(e) {
                                    var t = new Date,
                                        n = new Date;
                                    n.setDate(n.getDate() - 7);
                                    var r = "",
                                        o = {
                                            hour: "numeric",
                                            minute: "numeric",
                                            second: "numeric"
                                        },
                                        s = a.__assign({}, o, {
                                            year: "numeric",
                                            month: "numeric",
                                            day: "numeric"
                                        });
                                    r = e.timestamp.toDateString() === t.toDateString() ? Object(i.d)("Today, {timestamp, time, medium}", {
                                        timestamp: e.timestamp
                                    }, "ThreadMessage") : e.timestamp < n ? Object(i.i)(e.timestamp, s) : Object(i.i)(e.timestamp, a.__assign({}, o, {
                                        weekday: "long"
                                    }));
                                    var l = Object(i.i)(e.timestamp, a.__assign({}, s, {
                                        timeZoneName: "short"
                                    }));
                                    return E.createElement(L.Va, {
                                        padding: {
                                            y: 1
                                        },
                                        textAlign: L.Jb.Center
                                    }, E.createElement("span", {
                                        title: l
                                    }, "" + r))
                                }(e));
                            case Ue.Warning:
                                return E.createElement(L.xb, {
                                    className: "thread-message__warning",
                                    color: L.O.Alt2
                                }, E.createElement(L.Va, {
                                    padding: {
                                        y: .5,
                                        x: 1
                                    }
                                }, Object(i.d)("Please don't share passwords or personal information.", "whispers")));
                            case Ue.InactiveUserNotice:
                                return E.createElement(L.xb, {
                                    className: "thread-message__inactive-user",
                                    color: L.O.Alt2
                                }, E.createElement(L.Va, {
                                    padding: {
                                        y: .5,
                                        x: 1
                                    }
                                }, Object(i.d)("This account is no longer active.", "whispers")));
                            case Ue.Whisper:
                                return this.props.reportOutgoingWhisperRendered && this.props.reportOutgoingWhisperRendered(e.content), E.createElement(L.Va, {
                                    className: "thread-message__message",
                                    "data-a-target": "whisper-message"
                                }, function(e) {
                                    if (e.deletedAt) return null;
                                    var t = "/me " === e.content.substr(0, 4);
                                    t && (e.content = e.content.substr(4), e.emotes = e.emotes.map(function(e) {
                                        return a.__assign({}, e, {
                                            from: e.from - 4,
                                            to: e.to - 4
                                        })
                                    }));
                                    var n = [E.createElement("span", {
                                        key: "str-separator"
                                    }, t ? " " : ": ")];
                                    if (n.push.apply(n, B(e.content, e.emotes)), e.editedAt) {
                                        var r = Object(i.d)("edited", "ThreadMessage"),
                                            o = Object(i.d)("{timestamp, date, full} {timestamp, time, long}", {
                                                timestamp: new Date(e.editedAt)
                                            }, "ThreadMessage");
                                        n.push(E.createElement(L.Na, {
                                            key: "editedAt",
                                            margin: {
                                                left: 1
                                            }
                                        }, E.createElement(L.V, {
                                            type: L.Nb.Span,
                                            className: "thread-message__message--edited",
                                            title: o,
                                            color: L.O.Alt2
                                        }, "(" + r + ")")))
                                    }
                                    var s = e.from && e.from.chatColor || "",
                                        l = e.from && e.from.displayName || E.createElement(L.V, {
                                            type: L.Nb.Span,
                                            italic: !0
                                        }, Object(i.d)("Unknown", "ThreadMessage")),
                                        c = t ? s : "";
                                    return E.createElement(L.Va, {
                                        padding: {
                                            x: 1,
                                            y: .5
                                        }
                                    }, E.createElement("span", {
                                        className: "thread-message__message--user-name",
                                        "data-a-target": "whisper-message-name",
                                        style: {
                                            color: s
                                        }
                                    }, l), E.createElement("span", {
                                        style: {
                                            color: c
                                        }
                                    }, n))
                                }(e));
                            case Ue.NewMessages:
                                return E.createElement(L.xb, {
                                    className: "thread-message__new-messages",
                                    color: L.O.OverlayAlt,
                                    fontSize: L.Aa.Size7
                                }, E.createElement(L.Va, {
                                    textAlign: L.Jb.Center,
                                    padding: {
                                        y: .5
                                    }
                                }, Object(i.d)("New Whispers", "whispers")));
                            case Ue.Notification:
                                return E.createElement(L.Va, {
                                    className: "thread-message__notification"
                                }, function(e) {
                                    return E.createElement(L.Va, {
                                        padding: {
                                            y: .5,
                                            x: 1
                                        }
                                    }, E.createElement(L.V, {
                                        type: L.Nb.Span,
                                        color: L.O.Alt2
                                    }, e.content))
                                }(e));
                            default:
                                return null
                        }
                    }, t
                }(E.Component),
                Ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            disableInfiniteTrigger: !0
                        }, t.loadMore = function() {
                            if (t.scroll && t.scroll.scrollContent) {
                                var e = t.scroll.scrollContent.scrollHeight;
                                t.setState({
                                    prevScrollHeight: e
                                })
                            }
                            return t.props.loadMore()
                        }, t.renderMessages = function(e) {
                            return e.map(function(e, n) {
                                return E.createElement(He, {
                                    message: e,
                                    reportOutgoingWhisperRendered: t.props.reportOutgoingWhisperRendered || void 0,
                                    key: t.generateMessageKey(e, n.toString())
                                })
                            })
                        }, t.getMessages = function() {
                            var e = t.props.unreadMessagesCount,
                                n = [t.createWarningMessage()];
                            return n = (n = n.concat(t.notificationsFor())).concat(t.props.thread.messages.edges.map(function(e) {
                                return {
                                    type: Ue.Whisper,
                                    content: e.node.content.content,
                                    from: e.node.from && t.props.participantsByID[+e.node.from.id],
                                    emotes: e.node.content.emotes,
                                    id: e.node.id,
                                    nonce: e.node.nonce,
                                    sentAt: new Date(e.node.sentAt),
                                    editedAt: e.node.editedAt,
                                    deletedAt: e.node.deletedAt
                                }
                            }).reduce(function(n, r, i, a) {
                                if (t.notificationsFor(r.id).forEach(function(e) {
                                        n.push(e)
                                    }), n.push(r), 0 == --e && n.push(t.createNewMessagesIndicator()), i < a.length - 1) {
                                    var o = a[i + 1];
                                    !r.deletedAt && t.shouldAddTimestamp(r, o) && n.push(t.createTimestampMessage(r))
                                }
                                return i !== a.length - 1 || r.deletedAt || n.push(t.createTimestampMessage(r)), n
                            }, []).reverse()), t.props.hasUnknownParticipant && n.push(t.createInactiveUserMessage()), n
                        }, t.shouldAddTimestamp = function(e, t) {
                            return e.sentAt.valueOf() - t.sentAt.valueOf() > 6e5 || e.sentAt.toDateString() !== t.sentAt.toDateString()
                        }, t.createTimestampMessage = function(e) {
                            return {
                                type: Ue.Timestamp,
                                timestamp: new Date(e.sentAt)
                            }
                        }, t.notificationsFor = function(e) {
                            return t.props.notifications.filter(function(t) {
                                return t.afterMessageID === e
                            }).map(t.createNotificationLine)
                        }, t.createNotificationLine = function(e) {
                            return {
                                type: Ue.Notification,
                                content: e.content
                            }
                        }, t.createNewMessagesIndicator = function() {
                            return {
                                type: Ue.NewMessages
                            }
                        }, t.createWarningMessage = function() {
                            return {
                                type: Ue.Warning
                            }
                        }, t.createInactiveUserMessage = function() {
                            return {
                                type: Ue.InactiveUserNotice
                            }
                        }, t.saveScrollRef = function(e) {
                            return t.scroll = e
                        }, t.scrollToBottom = function() {
                            t.scroll.scrollToBottom()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.scrollToBottom(), this.setState({
                            disableInfiniteTrigger: !1
                        })
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.thread.messages.edges.length > 0,
                            n = e.thread.messages.edges.length > 0;
                        if (!t && n || t && n && this.props.thread.messages.edges[0].cursor !== e.thread.messages.edges[0].cursor) {
                            if (!this.scroll || !this.scroll.scrollContent) return;
                            this.setState({
                                prevScrollHeight: this.scroll.scrollContent.scrollHeight
                            })
                        }
                    }, t.prototype.componentDidUpdate = function(e) {
                        if (this.props.thread.messages.edges.length > e.thread.messages.edges.length)
                            if (this.props.thread.messages.edges[0] && e.thread.messages.edges[0] && this.props.thread.messages.edges[0].cursor === e.thread.messages.edges[0].cursor && this.props.thread.messages.edges[0].node.id === e.thread.messages.edges[0].node.id) {
                                if (this.scroll && this.scroll.scrollContent && this.state.prevScrollHeight && this.state.prevScrollHeight !== this.scroll.scrollContent.scrollHeight) {
                                    var t = this.scroll.scrollContent.scrollHeight - this.state.prevScrollHeight;
                                    this.scroll.scrollContent.scrollTop = t
                                }
                            } else this.scrollToBottom();
                        this.props.notifications.length > e.notifications.length && this.scrollToBottom(), e.collapsed && !this.props.collapsed && this.scrollToBottom()
                    }, t.prototype.render = function() {
                        var e = this.getMessages();
                        return E.createElement(L.Va, {
                            fullHeight: !0
                        }, E.createElement(w.b, {
                            scrollRef: this.saveScrollRef,
                            suppressScrollX: !0
                        }, E.createElement(L.Va, null, E.createElement(w.a, {
                            enabled: !this.state.disableInfiniteTrigger,
                            loadMore: this.loadMore,
                            pixelThreshold: 200,
                            orientation: ze.b.Down,
                            contentLength: e.length
                        }), this.renderMessages(e))))
                    }, t.prototype.generateMessageKey = function(e, t) {
                        switch (e.type) {
                            case Ue.NewMessages:
                            case Ue.Warning:
                            case Ue.InactiveUserNotice:
                                return "" + e.type;
                            case Ue.Timestamp:
                                return e.type + "-" + e.timestamp.getTime();
                            case Ue.Whisper:
                                return e.type + "-" + e.id;
                            case Ue.Notification:
                                return e.type + "-" + t;
                            default:
                                return i.j.warn("[ThreadMessages] Encountered an unknown message type."), t
                        }
                    }, t
                }(E.Component);
            var qe = Object(b.connect)(function(e, t) {
                    return {
                        notifications: function(e, t) {
                            return e.whispers.notifications.byThreadID[t] || k
                        }(e, t.thread.id)
                    }
                })(Ge),
                $e = n("Wcon"),
                Qe = {};

            function Ke(e, t) {
                var n = Qe[e.threadID];
                if (n) {
                    if (n.lastReadCursorID >= t) return;
                    clearTimeout(n.timeoutHandle)
                }
                var r = setTimeout(function() {
                    var t = a.__assign({
                        mutation: $e
                    }, Object(N.a)({
                        threadID: e.threadID,
                        lastReadMessageID: e.lastReadMessageID
                    }), {
                        optimisticResponse: {
                            updateWhisperThread: {
                                thread: {
                                    __typename: "WhisperThread",
                                    id: e.threadID,
                                    unreadMessagesCount: 0
                                },
                                __typename: "UpdateWhisperThreadPayload"
                            }
                        }
                    });
                    i.o.apollo.client.mutate(t), delete Qe[e.threadID]
                }, 250);
                Qe[e.threadID] = {
                    timeoutHandle: r,
                    lastReadCursorID: t
                }
            }
            var Ye = n("TOso");

            function Ze(e) {
                return e.type === D.PubsubMessageType.WhisperSent
            }

            function Je(e) {
                return e.type === D.PubsubMessageType.WhisperReceived
            }
            n("28vT");
            var Xe, et, tt = n("Jpf8"),
                nt = n("4VGW");
            (et || (et = {})).Wrapper = "thread__wrapper";
            var rt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            strangerWarningDismissed: !1
                        }, t.hadError = !1, t.onEmoticonClick = function(e) {
                            var n = t.autocompleteInput.getValue();
                            n && n.length > 0 && !n.endsWith(" ") && (n += " "), n += e + " ", t.autocompleteInput.setValue(n)
                        }, t.onBlock = function(e) {
                            t.addNotification(Object(i.d)("User successfully blocked", "whispers")), t.props.onBlock && t.props.onBlock(e)
                        }, t.onUnblock = function() {
                            t.addNotification(Object(i.d)("User successfully unblocked", "whispers"))
                        }, t.loadMore = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return this.props.data.loading || this.hadError ? [2] : [2, this.props.loadMore()]
                                })
                            })
                        }, t.addNotification = function(e) {
                            t.props.notifyWhisperThread(t.props.threadID, e, t.getLastMessageID())
                        }, t.getLastMessageID = function() {
                            if (t.props.data.whisperThread && t.props.data.whisperThread.messages.edges[0]) return t.props.data.whisperThread.messages.edges[0].node.id
                        }, t.handleHeaderInteract = function() {
                            t.props.collapsed ? t.expand() : t.collapse()
                        }, t.expand = function() {
                            t.props.data.currentUser && Object(H.h)(t.props.threadID), t.props.onExpand(t.props.threadID)
                        }, t.onClickOut = function() {
                            t.props.focused && t.props.onUnfocus(t.props.threadID)
                        }, t.handleClose = function() {
                            t.props.data.currentUser && Object(H.c)(t.props.threadID), t.props.onClose(t.props.threadID)
                        }, t.collapse = function() {
                            t.props.data.currentUser && Object(H.d)(t.props.threadID), t.props.onCollapse(t.props.threadID)
                        }, t.handleKeydown = function(e) {
                            if ((e.charCode || e.keyCode) === re.a.Enter) {
                                var n = t.autocompleteInput.getValue();
                                t.autocompleteInput.setValue(""), t.sendWhisper(n)
                            }
                        }, t.handleClick = function() {
                            t.props.onFocus(t.props.threadID), t.markThreadMessagesAsRead()
                        }, t.onStrangerWarningConfirmation = function() {
                            t.setState({
                                strangerWarningDismissed: !0
                            })
                        }, t.markThreadMessagesAsRead = function() {
                            if (!t.props.data.loading && !t.hadError && t.props.data.whisperThread && 0 !== t.props.data.whisperThread.messages.edges.length && 0 !== t.props.data.whisperThread.unreadMessagesCount) {
                                var e = t.props.data.whisperThread && +t.props.data.whisperThread.messages.edges[0].cursor;
                                e && !isNaN(e) || (e = 0), Ke({
                                    threadID: t.props.threadID,
                                    lastReadMessageID: t.props.data.whisperThread && t.props.data.whisperThread.messages.edges[0].node.id || ""
                                }, e)
                            }
                        }, t.sendWhisper = function(e) {
                            if ("" !== e) {
                                t.props.latencyTracking.resetCustomEvents(j.a.Whispers), t.outgoingWhisperRenderedEvent = t.props.latencyTracking.registerCustomEvent({
                                    benchmark: 150,
                                    group: j.a.Whispers,
                                    key: j.b.WhispersRenderSent,
                                    label: j.c.RenderSent,
                                    start: j.d.Registration
                                }), t.outgoingWhisperMessage = e;
                                var n = Object(K.b)(t.props.threadID, t.props.currentUserID);
                                n ? (t.props.data.currentUser && t.interlocutor && Object(H.m)({
                                    threadID: t.props.threadID,
                                    targetUserLogin: t.interlocutor.login,
                                    inChannelChat: !1
                                }), Object(Ye.b)({
                                    currentUserID: t.props.currentUserID,
                                    emotes: t.props.emoteSetsData && t.props.emoteSetsData.emoteMap || {},
                                    message: e,
                                    recipientUserID: n
                                }).then(function(e) {
                                    if (e.data.sendWhisper.error) throw new Error(e.data.sendWhisper.error.code)
                                }).catch(function(e) {
                                    var n, r;
                                    switch (e.message) {
                                        case Ye.a.RestrictedRecipient:
                                            n = Object(i.d)("Your whisper was not delivered because the recipient's settings prevent them from receiving it.", "Thread");
                                            break;
                                        case Ye.a.BodyEmpty:
                                            n = Object(i.d)("Your whisper was not delivered because it was empty.", "Thread");
                                            break;
                                        case Ye.a.TargetBanned:
                                            n = Object(i.d)("Your whisper was not delivered because the recipient is suspended.", "Thread");
                                            break;
                                        default:
                                            n = Object(i.d)("Your whisper was not delivered.", "Thread")
                                    }
                                    t.props.data.whisperThread && t.props.data.whisperThread.messages.edges.length > 0 && (r = t.props.data.whisperThread.messages.edges[0].node.id), t.props.notifyWhisperThread(t.props.threadID, n, r)
                                })) : i.j.warn("Unable to parse whisper recipient ID.")
                            }
                        }, t.setAutocompleteInnerComponentRef = function(e) {
                            t.textInput = e
                        }, t.setAutocompleteInputRef = function(e) {
                            return t.autocompleteInput = e
                        }, t.handleContentClick = function() {
                            document.getSelection().toString() || t.textInput.focus()
                        }, t.setContainerRef = function(e) {
                            t.autocompleteContainer = e
                        }, t.reportOutgoingWhisperRendered = function(e) {
                            t.outgoingWhisperRenderedEvent && e === t.outgoingWhisperMessage && t.props.latencyTracking.reportCustomEvent(t.outgoingWhisperRenderedEvent)
                        }, t.otherParticipant = function() {
                            var e = t.props.data.whisperThread;
                            if (e) return $(e.participants, t.props.currentUserID)
                        }, t.hasUnknownParticipant = function() {
                            var e = t.otherParticipant();
                            return !(e && e.login)
                        }, t.shouldDisableInteractions = function() {
                            return t.hasUnknownParticipant()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.data.error && (this.hadError = !0), e.data.error || e.data.loading || !e.data.whisperThread || this.props.reportThreadData(e.threadID, e.data.whisperThread)
                    }, Object.defineProperty(t.prototype, "interlocutor", {
                        get: function() {
                            return this.otherParticipant()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        var e = _({
                            "whispers-thread": !0,
                            "whispers-thread--collapsed": this.props.collapsed,
                            "whispers-thread--focused": this.props.focused
                        });
                        if (this.props.hidden) return null;
                        var t, n = this.props.activityData.loading ? void 0 : this.props.activityData.user,
                            r = n && n.availability,
                            i = n && n.activity;
                        return t = !this.state.strangerWarningDismissed && this.interlocutor && this.interlocutor.id && this.interlocutor.self && this.interlocutor.self.whisperPermissions.receive === ae.O.NOT_PERMITTED ? E.createElement(de, {
                            onStrangerWarningConfirmation: this.onStrangerWarningConfirmation,
                            targetDisplayName: this.interlocutor.displayName,
                            targetUserID: this.interlocutor.id
                        }) : this.renderMessageArea(), E.createElement(I.a, {
                            onClickOut: this.onClickOut
                        }, E.createElement(L.xb, {
                            className: e,
                            display: L.W.Flex,
                            flexShrink: 0,
                            flexGrow: 0,
                            position: L.db.Relative,
                            overflow: L.Ya.Hidden,
                            background: L.r.Base,
                            margin: {
                                left: 1
                            },
                            alignItems: L.f.Center,
                            justifyContent: L.Ua.Center,
                            "data-test-selector": et.Wrapper,
                            "data-a-target": "whisper-thread-" + (this.interlocutor && this.interlocutor.login) + (this.props.collapsed ? "-collapsed" : ""),
                            elevation: 3
                        }, t, E.createElement(L.Va, {
                            position: L.db.Absolute,
                            fullWidth: !0,
                            flexShrink: 0,
                            display: L.W.Flex,
                            alignItems: L.f.Center,
                            attachTop: !0,
                            attachLeft: !0
                        }, E.createElement(Be, {
                            isHighlighted: !!(this.props.data.whisperThread && this.props.data.whisperThread.unreadMessagesCount > 0),
                            isFocused: !!this.props.focused,
                            isMuted: !!this.props.data.whisperThread && this.props.data.whisperThread.isMuted,
                            isCollapsed: this.props.collapsed,
                            isLoading: this.props.data.loading || this.props.activityData.loading,
                            interactionsDisabled: this.shouldDisableInteractions(),
                            currentUser: this.props.data.currentUser,
                            interlocutor: this.interlocutor,
                            interlocutorAvailability: r,
                            interlocutorActivity: i,
                            spamInfo: this.props.data.whisperThread && this.props.data.whisperThread.spamInfo,
                            threadID: this.props.threadID,
                            collapse: this.collapse,
                            onHeaderInteract: this.handleHeaderInteract,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            onClose: this.handleClose,
                            showReportUserModal: this.props.showReportUserModal
                        }))))
                    }, t.prototype.renderMessageArea = function() {
                        var e = this.props.emoteSetsData && this.props.emoteSetsData.emoteSets || [];
                        return [E.createElement(L.Va, {
                            className: "whispers-thread__autocomplete-container",
                            position: L.db.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            refDelegate: this.setContainerRef,
                            key: "whispers-input"
                        }, E.createElement(L.Va, {
                            position: L.db.Absolute,
                            fullWidth: !0,
                            padding: {
                                x: 1,
                                bottom: 1
                            },
                            attachBottom: !0,
                            attachLeft: !0
                        }, E.createElement(oe.b, {
                            disabled: this.shouldDisableInteractions(),
                            componentType: oe.a.Input,
                            suggestionSource: oe.c.Whisper,
                            iconRight: !0,
                            onFocus: this.handleClick,
                            onClick: this.handleClick,
                            onKeyDown: this.handleKeydown,
                            componentRefDelegate: this.setAutocompleteInnerComponentRef,
                            refDelegate: this.setAutocompleteInputRef,
                            containerElement: this.autocompleteContainer
                        }, E.createElement(oe.d, {
                            emotes: e
                        })), E.createElement(se.a, {
                            attachBottom: !0,
                            attachRight: !0,
                            inputRef: this.textInput,
                            emotePickerSource: le.a.Whisper,
                            onClickEmote: this.onEmoticonClick,
                            padding: {
                                x: 1,
                                bottom: 1
                            },
                            position: L.db.Absolute,
                            shouldCloseOnClickOut: !0
                        }))), E.createElement(L.Na, {
                            fullWidth: !0,
                            attachLeft: !0,
                            key: "whispers-content"
                        }, E.createElement("div", {
                            className: "whispers-thread__content",
                            onClick: this.handleContentClick
                        }, this.renderContent()))]
                    }, t.prototype.renderContent = function() {
                        return this.hadError ? E.createElement(te.a, {
                            message: Object(i.d)("Sorry, something went wrong loading this conversation.", "WhisperThread")
                        }) : this.props.data.loading || this.props.activityData.loading || !this.props.data.whisperThread ? E.createElement(L.Va, {
                            display: L.W.Flex,
                            justifyContent: L.Ua.Center,
                            alignItems: L.f.Center,
                            margin: 2,
                            fullHeight: !0,
                            flexGrow: 1
                        }, E.createElement(L.Xa, null)) : E.createElement(qe, {
                            thread: this.props.data.whisperThread,
                            participantsByID: this.getUsersByID(this.props.data.whisperThread.participants),
                            unreadMessagesCount: this.props.data.whisperThread.unreadMessagesCount,
                            loadMore: this.loadMore,
                            reportOutgoingWhisperRendered: this.reportOutgoingWhisperRendered,
                            collapsed: this.props.collapsed,
                            hasUnknownParticipant: this.hasUnknownParticipant()
                        })
                    }, t.prototype.getUsersByID = function(e) {
                        for (var t = {}, n = 0, r = e; n < r.length; n++) {
                            var i = r[n];
                            i && (t[i.id] = i)
                        }
                        return t
                    }, t
                }(E.Component),
                it = Object(r.compose)(Object(C.a)(nt, {
                    options: function(e) {
                        return {
                            variables: {
                                targetUserID: Object(K.b)(e.threadID, e.currentUserID) || ""
                            },
                            skip: !e.currentUserID || !e.threadID
                        }
                    },
                    name: "activityData"
                }), Object(C.a)(tt, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.threadID
                            }
                        }
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function() {
                                var t = "";
                                return e.data.whisperThread && e.data.whisperThread.messages.edges.length > 0 && (t = e.data.whisperThread.messages.edges[e.data.whisperThread.messages.edges.length - 1].cursor), e.data.fetchMore({
                                    query: tt,
                                    variables: a.__assign({}, e.data.variables, {
                                        cursor: t
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        if (!n.whisperThread) return {
                                            whisperThread: null,
                                            currentUser: e.currentUser
                                        };
                                        if (!e.whisperThread) return {
                                            whisperThread: n.whisperThread,
                                            currentUser: e.currentUser
                                        };
                                        var r = a.__assign({}, n.whisperThread.messages, {
                                            edges: Object(N.c)(e.whisperThread.messages.edges, n.whisperThread.messages.edges)
                                        });
                                        return {
                                            whisperThread: a.__assign({}, n.whisperThread, {
                                                messages: r
                                            }),
                                            currentUser: e.currentUser
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(ne.a)([{
                    topic: function(e) {
                        return Object(O.I)(e.currentUserID)
                    },
                    mapMessageTypesToProps: (Xe = {}, Xe[D.PubsubMessageType.WhisperReceived] = "whisperReceived", Xe[D.PubsubMessageType.WhisperSent] = "whisperSent", Xe),
                    skipMessage: function(e, t) {
                        return !Ze(e) && !Je(e) || e.data_object.thread_id !== t.threadID
                    }
                }]), Object(ie.a)(), Object(x.c)("WhispersThread", {
                    autoReportInteractive: !0
                }))(rt);
            var at = Object(b.connect)(function(e) {
                    return {
                        isLoggedIn: Object(X.f)(e)
                    }
                }, function(e) {
                    return Object(r.bindActionCreators)({
                        notifyWhisperThread: g,
                        showReportUserModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(J.d)(ee.a, t)
                        }
                    }, e)
                })(it),
                ot = (n("J45U"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.resizeAnimationHandle = null, t.renderThread = function(e) {
                            return e ? E.createElement(at, {
                                key: e.threadID,
                                currentUserID: t.props.currentUserID,
                                collapsed: e.collapsed,
                                hidden: e.hidden,
                                threadID: e.threadID,
                                onBlock: t.onBlock,
                                onCollapse: t.props.onCollapseThread,
                                onClose: t.props.onCloseThread,
                                onExpand: t.props.onExpandThread,
                                onFocus: t.props.onFocusThread,
                                onUnfocus: t.props.onUnfocusThread,
                                focused: t.props.focusedThreadID === e.threadID,
                                reportThreadData: t.props.reportThreadData
                            }) : null
                        }, t.onBlock = function(e) {
                            t.props.archiveThread(e), t.props.onBlockThread(e)
                        }, t.handleContentResize = function() {
                            t.resizeAnimationHandle || (t.resizeAnimationHandle = requestAnimationFrame(function() {
                                t.props.onResizeContent(), t.resizeAnimationHandle = null
                            }))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.openedThreads.map(function(t) {
                                return e.renderThread(t)
                            });
                        return E.createElement(L.Va, {
                            className: "whispers-open-threads",
                            display: L.W.Flex,
                            flexDirection: L.Y.RowReverse,
                            alignItems: L.f.End,
                            position: L.db.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            refDelegate: S.b
                        }, t, E.createElement(Z.a, {
                            onResize: this.handleContentResize
                        }))
                    }, t
                }(E.Component));
            var st = Object(b.connect)(function(e) {
                return {
                    openedThreads: e.whispers.display.openedIDs.map(function(t) {
                        return function(e, t) {
                            return e.whispers ? e.whispers.display.byID[t] : null
                        }(e, t)
                    }),
                    focusedThreadID: e.whispers.display.focusedID
                }
            }, function(e) {
                return {
                    onBlockThread: function(t) {
                        return e(s.h(t, Object(S.a)()))
                    },
                    onCloseThread: function(t) {
                        return e(s.h(t, Object(S.a)()))
                    },
                    onCollapseThread: function(t) {
                        return e(s.i(t, Object(S.a)()))
                    },
                    onExpandThread: function(t) {
                        return e(s.j(t, Object(S.a)()))
                    },
                    onFocusThread: function(t) {
                        return e(s.k(t, Object(S.a)()))
                    },
                    onUnfocusThread: function(t) {
                        return e(s.n(t, Object(S.a)()))
                    },
                    onResizeContent: function() {
                        return e(s.m(Object(S.a)()))
                    }
                }
            }, void 0, {
                areStatesEqual: function(e, t) {
                    return e.whispers.display === t.whispers.display
                }
            })(ot);

            function lt(e) {
                return Object.keys(e).reduce(function(t, n) {
                    var r = e[n];
                    return r.muted || r.archived ? t : t + r.unreadMessagesCount
                }, 0)
            }
            var ct = n("U1yz"),
                dt = function(e) {
                    for (var t = {}, n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        t[i.id] = a.__assign({}, ut(i))
                    }
                    return t
                },
                ut = function(e) {
                    return {
                        id: e.id,
                        messageHistory: e.messages.edges.map(function(e) {
                            return e.node
                        }).slice(0, -1),
                        lastMessage: e.messages.edges.map(function(e) {
                            return e.node
                        }).find(function(e) {
                            return !e.deletedAt
                        }) || null,
                        spamInfo: e.spamInfo,
                        participants: e.participants,
                        muted: e.isMuted,
                        archived: e.isArchived,
                        unreadMessagesCount: e.unreadMessagesCount
                    }
                },
                pt = n("xXlL");
            var mt = n("WcC5"),
                ht = n("PRj+"),
                ft = (n("c/47"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.erroredLoadingMore = !1, n.logger = i.j.withCategory("whispers"), n.archiveThread = function(e) {
                            if (n.state.threadsByID[e]) {
                                var t = a.__assign({}, Object(N.a)({
                                    threadID: e,
                                    isArchived: !0
                                }), {
                                    optimisticResponse: {
                                        updateWhisperThread: {
                                            thread: {
                                                __typename: "WhisperThread",
                                                id: e,
                                                isArchived: !0
                                            },
                                            __typename: "UpdateWhisperThreadPayload"
                                        }
                                    }
                                });
                                n.props.archiveThread && (n.props.closeThread(e), n.props.data.currentUser && Object(H.a)(e), n.props.archiveThread(t))
                            }
                        }, n.selectThread = function(e) {
                            n.props.openThread({
                                threadID: e,
                                collapsed: !1
                            })
                        }, n.loadMore = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (this.props.data.loading || this.props.data.error || this.erroredLoadingMore) return [3, 4];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.loadMore()];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), this.logger.warn("Load more whisper threads failed", {
                                                error: e
                                            }), this.erroredLoadingMore = !0, [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.handleThreadDataReport = function(e, t) {
                            var r;
                            n.state.threadsByID[e] || Object(N.e)(ht, {
                                cursor: null
                            }, function(e) {
                                return e.currentUser && e.currentUser.whisperThreads && e.currentUser.whisperThreads.edges.unshift({
                                    cursor: "0",
                                    node: a.__assign({}, t, {
                                        isArchived: !1
                                    }),
                                    __typename: "WhisperThreadEdge"
                                }), e
                            });
                            var i = a.__assign({}, n.state.threadsByID[e]);
                            t.messages && (i.messageHistory = t.messages.edges.map(function(e) {
                                return e.node
                            }).slice(0, -1)), !1 !== t.isMuted && !0 !== t.isMuted || (i.muted = t.isMuted);
                            var o = a.__assign({}, n.state.threadsByID, ((r = {})[e] = i, r));
                            n.setState({
                                threadsByID: o,
                                unreadCount: lt(o)
                            })
                        };
                        var r = n.props.data.currentUser && n.props.data.currentUser.whisperThreads && dt(n.props.data.currentUser.whisperThreads.edges.map(function(e) {
                            return e.node
                        })) || {};
                        return n.state = {
                            error: !!n.props.data.error,
                            orderedThreadIDs: n.props.data.currentUser && n.props.data.currentUser.whisperThreads && n.props.data.currentUser.whisperThreads.edges.map(function(e) {
                                return e.node.id
                            }) || [],
                            renderError: !1,
                            threadsByID: r,
                            unreadCount: lt(r)
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                        var n = this;
                        this.setState({
                            renderError: !0
                        }, function() {
                            i.o.stats.recordComponentError("Whispers"), n.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                                info: t
                            })
                        })
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (e.data.error) this.setState({
                            error: !!e.data.error
                        });
                        else if (!e.data.loading && e.data.currentUser && e.data.currentUser.whisperThreads) {
                            var t = dt(e.data.currentUser.whisperThreads.edges.map(function(e) {
                                return e.node
                            }));
                            this.setState({
                                threadsByID: t,
                                orderedThreadIDs: e.data.currentUser.whisperThreads.edges.map(function(e) {
                                    return e.node.id
                                }),
                                unreadCount: lt(t)
                            })
                        }
                    }, t.prototype.render = function() {
                        if (!this.props.data.currentUser || this.state.renderError || !this.props.isVisible) return null;
                        var e = _({
                            whispers: !0,
                            "whispers--theatre-mode": this.props.theatreModeEnabled,
                            "whispers--right-column-expanded": this.props.rightColumnExpanded
                        });
                        return E.createElement(L.Va, {
                            className: e,
                            position: L.db.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            margin: {
                                right: 1
                            }
                        }, E.createElement(st, {
                            currentUserID: this.props.data.currentUser.id,
                            reportThreadData: this.handleThreadDataReport,
                            archiveThread: this.archiveThread
                        }), E.createElement(Y, {
                            currentUserID: this.props.data.currentUser.id,
                            error: this.state.error,
                            loading: this.props.data.loading,
                            unreadCount: this.state.unreadCount,
                            orderedThreadIDs: this.state.orderedThreadIDs,
                            threadsByID: this.state.threadsByID,
                            selectThread: this.selectThread,
                            archiveThread: this.archiveThread,
                            loadMore: this.loadMore
                        }))
                    }, t = a.__decorate([Object(C.a)(ht, {
                        props: function(e) {
                            return a.__assign({}, e, {
                                loadMore: function() {
                                    return e.data.fetchMore({
                                        query: ht,
                                        variables: a.__assign({}, e.data.variables, {
                                            cursor: e.data.currentUser && e.data.currentUser.whisperThreads && e.data.currentUser.whisperThreads.edges.length > 0 ? e.data.currentUser.whisperThreads.edges[e.data.currentUser.whisperThreads.edges.length - 1].cursor : null
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            return n.currentUser ? e.currentUser && e.currentUser.whisperThreads ? n.currentUser.whisperThreads ? {
                                                currentUser: a.__assign({}, n.currentUser, {
                                                    whisperThreads: a.__assign({}, n.currentUser.whisperThreads, {
                                                        edges: Object(N.c)(e.currentUser.whisperThreads.edges, n.currentUser.whisperThreads.edges)
                                                    })
                                                })
                                            } : {
                                                currentUser: a.__assign({}, n.currentUser, {
                                                    whisperThreads: e.currentUser.whisperThreads
                                                })
                                            } : {
                                                currentUser: n.currentUser
                                            } : {
                                                currentUser: null
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    }), Object(C.a)(mt, {
                        name: "archiveThread"
                    }), Object(T.a)(function(e) {
                        return {
                            query: ht,
                            types: [D.PubsubMessageType.WhisperDeleted, D.PubsubMessageType.WhisperEdited, D.PubsubMessageType.WhisperSent, D.PubsubMessageType.WhisperAllThreadsUpdate, D.PubsubMessageType.WhisperReceived, D.PubsubMessageType.WhisperThreadUpdate],
                            variables: a.__assign({}, e.data.variables),
                            skip: !e.data.currentUser || void 0 === e.data.currentUser.id,
                            topic: Object(O.I)(e.data.currentUser && e.data.currentUser.id || ""),
                            mutator: function(t, n) {
                                if (!n.currentUser || !n.currentUser.whisperThreads) return n;
                                if (Ze(t) || Je(t)) {
                                    if (Je(t)) {
                                        var r = n.currentUser.whisperThreads.edges.find(function(e) {
                                            return e.node.id === t.data_object.thread_id
                                        });
                                        if (r) {
                                            var a = r.node.participants.find(function(e) {
                                                return !!e && e.id === "" + t.data_object.from_id
                                            });
                                            a && Object(H.l)({
                                                targetUserLogin: a.login,
                                                threadID: t.data_object.thread_id
                                            })
                                        }
                                    }
                                    return function(e, t, n, r) {
                                        if (!t.currentUser || !t.currentUser.whisperThreads) return t;
                                        var a = i.m.get("whisperDoNotDisturb", !1),
                                            o = t.currentUser.whisperThreads.edges.find(function(t) {
                                                return t.node.id === e.data_object.thread_id
                                            });
                                        if (o) {
                                            var s = Object(pt.c)(e);
                                            o.node.messages.edges.unshift(s), Je(e) && (e.data_object.thread_id !== n ? o.node.unreadMessagesCount += 1 : Ke({
                                                threadID: e.data_object.thread_id,
                                                lastReadMessageID: e.data_object.message_id
                                            }, e.data_object.id), r({
                                                threadID: e.data_object.thread_id,
                                                collapsed: !0,
                                                hidden: a
                                            })), o.node.isArchived = !1;
                                            var l = t.currentUser.whisperThreads.edges.filter(function(t) {
                                                return t.node.id !== e.data_object.thread_id
                                            });
                                            l.unshift(o), t.currentUser.whisperThreads.edges = l
                                        } else r({
                                            threadID: e.data_object.thread_id,
                                            collapsed: !0,
                                            hidden: a
                                        });
                                        return t
                                    }(t, n, e.focusedThreadID, e.openThread)
                                }
                                return function(e) {
                                    return e.type === D.PubsubMessageType.WhisperDeleted
                                }(t) ? function(e, t) {
                                    if (!t.currentUser || !t.currentUser.whisperThreads) return t;
                                    var n = t.currentUser.whisperThreads.edges.find(function(t) {
                                        return t.node.id === e.data_object.thread_id
                                    });
                                    if (n) {
                                        var r = n.node.messages.edges.find(function(t) {
                                            return t.node.id === e.data_object.message_id
                                        });
                                        r && (r.node.deletedAt = new Date(1e3 * e.data_object.deleted_at).toISOString(), r.node.content.content = e.data_object.body, r.node.content.emotes = Object(pt.b)(e.data_object.tags.emotes))
                                    }
                                    return t
                                }(t, n) : function(e) {
                                    return e.type === D.PubsubMessageType.WhisperEdited
                                }(t) ? function(e, t) {
                                    if (!t.currentUser || !t.currentUser.whisperThreads) return t;
                                    var n = t.currentUser.whisperThreads.edges.find(function(t) {
                                        return t.node.id === e.data_object.thread_id
                                    });
                                    if (n) {
                                        var r = n.node.messages.edges.find(function(t) {
                                            return t.node.id === e.data_object.message_id
                                        });
                                        r && (r.node.editedAt = new Date(1e3 * e.data_object.edited_at).toISOString(), r.node.content.content = e.data_object.body, r.node.content.emotes = Object(pt.b)(e.data_object.tags.emotes))
                                    }
                                    return t
                                }(t, n) : function(e) {
                                    return e.type === D.PubsubMessageType.WhisperThreadUpdate
                                }(t) ? function(e, t, n) {
                                    if (!t.currentUser || !t.currentUser.whisperThreads) return t;
                                    var r = t.currentUser.whisperThreads.edges.findIndex(function(t) {
                                        return t.node.id === e.data_object.id
                                    });
                                    if (r >= 0) {
                                        var i = t.currentUser.whisperThreads.edges[r],
                                            a = i.node.messages.edges[0].cursor,
                                            o = parseInt(a, 10) - e.data_object.last_read;
                                        i.node.unreadMessagesCount = o >= 0 ? o : 0, i.node.isMuted = e.data_object.muted, !i.node.isArchived && e.data_object.archived && n(e.data_object.id), i.node.isArchived = e.data_object.archived
                                    }
                                    return t
                                }(t, n, e.closeThread) : function(e) {
                                    return e.type === D.PubsubMessageType.WhisperAllThreadsUpdate
                                }(t) ? function(e, t) {
                                    return t.currentUser && t.currentUser.whisperThreads ? (e.data_object.mark_all_read && t.currentUser.whisperThreads.edges.forEach(function(e) {
                                        e.node.unreadMessagesCount = 0
                                    }), t) : t
                                }(t, n) : n
                            },
                            skipMessage: function(e, t) {
                                if (Ze(e)) {
                                    if (!t.currentUser || !t.currentUser.whisperThreads) return !1;
                                    var n = void 0;
                                    try {
                                        n = Object(ct.a)(i.o.apollo.client.cache, e.data_object.thread_id, !0)
                                    } catch (e) {
                                        return !1
                                    }
                                    if (n && n.messages.edges.findIndex(function(t) {
                                            return "" !== t.node.nonce && t.node.nonce === e.data_object.nonce
                                        }) >= 0) return !0
                                }
                                return !1
                            }
                        }
                    })], t)
                }(E.Component));
            var gt = Object(b.connect)(function(e) {
                return {
                    isVisible: Object(y.b)(e),
                    rightColumnExpanded: e.ui.rightColumnExpanded,
                    theatreModeEnabled: e.ui.theatreModeEnabled,
                    focusedThreadID: e.whispers.display.focusedID
                }
            }, function(e) {
                return {
                    openThread: function(t) {
                        return e(s.l(t, Object(S.a)()))
                    },
                    closeThread: function(t) {
                        return e(s.h(t, Object(S.a)()))
                    }
                }
            })(ft);
            n.d(t, "Whispers", function() {
                return gt
            })
        },
        "4VGW": function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Whispers_Thread_User_Activity"
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
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
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
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "targetUserID"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayBadges"
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
                    end: 256
                }
            };
            r.loc.source = {
                body: '#import "twilight/common/queries/presence-fragment.gql"\nquery Whispers_Thread_User_Activity($targetUserID: ID) {\nuser(id: $targetUserID) {\nid\nchatColor\ndisplayName\nprofileImageURL(width: 70)\nlogin\ndisplayBadges {\nid\ntitle\nimageURL\n}\n...presenceFragment\n}\n}',
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
            }(n("wsiY").definitions)), e.exports = r
        },
        "4qQ0": function(e, t, n) {
            "use strict";
            var r, i;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return i
                }),
                function(e) {
                    e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
                }(r || (r = {})),
                function(e) {
                    e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
                }(i || (i = {}))
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return l
            });
            var r, i, a = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(a.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(a.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(a.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(a.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(a.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(a.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = i.Humanized), t === i.ClockAuto && (t = e >= 3600 ? i.ClockHMS : i.ClockMS), t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        n = r.Hour;
                        break;
                    case i.ClockMS:
                        n = r.Minute
                }
                var l = 2;
                t === i.ClockHMS && (l = 3);
                var d = function(e, t) {
                        void 0 === t && (t = r.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === r.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === r.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === r.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === r.Day ? n : n.days <= 26 || t === r.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== i.Humanized && t !== i.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                    }), t === i.Humanized) return function(e) {
                    return e.months ? o(r.Month, e.months) : e.weeks && e.days ? o(r.Week, e.weeks) + " " + o(r.Day, e.days) : e.weeks ? o(r.Week, e.weeks) : e.days && e.hours ? o(r.Day, e.days) + " " + o(r.Hour, e.hours) : e.days ? o(r.Day, e.days) : e.hours && e.minutes ? o(r.Hour, e.hours) + " " + o(r.Minute, e.minutes) : e.hours ? o(r.Hour, e.hours) : e.minutes && e.seconds ? o(r.Minute, e.minutes) + " " + o(r.Second, e.seconds) : e.minutes ? o(r.Minute, e.minutes) : o(r.Second, e.seconds || 0)
                }(d);
                if (t === i.HumanizedShort) return function(e) {
                    return e.months ? s(r.Month, e.months) : e.weeks && e.days ? "" + s(r.Week, e.weeks) + s(r.Day, e.days) : e.weeks ? s(r.Week, e.weeks) : e.days && e.hours ? "" + s(r.Day, e.days) + s(r.Hour, e.hours) : e.days ? s(r.Day, e.days) : e.hours && e.minutes ? "" + s(r.Hour, e.hours) + s(r.Minute, e.minutes) : e.hours ? s(r.Hour, e.hours) : e.minutes && e.seconds ? "" + s(r.Minute, e.minutes) + s(r.Second, e.seconds) : e.minutes ? s(r.Minute, e.minutes) : s(r.Second, e.seconds || 0)
                }(d);
                var p = ":",
                    m = !1;
                switch (a.o.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        p = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        m = !0
                }
                var h = d.seconds || 0,
                    f = d.minutes || 0,
                    g = d.hours || 0;
                switch (t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        var v = (m ? c(g, 2) : g) + p + c(f, 2);
                        return t === i.ClockHMS && (v += p + c(h, 2)), v;
                    case i.ClockMS:
                        return (m ? c(f, 2) : f) + p + c(h, 2)
                }
            }

            function c(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(r || (r = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(i || (i = {}))
        },
        "60o1": function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = e,
                    r = !1;
                return n ? function(e) {
                    return e.split("").map(function(e) {
                        return e.charCodeAt(0) > 127
                    }).reduce(function(e, t) {
                        return e || t
                    })
                }(n) && (r = !0) : n = t, {
                    userDisplayName: n,
                    isIntl: r
                }
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "6j5V": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("RcPG");

            function i(e) {
                return {
                    type: r.a.Text,
                    content: e
                }
            }
        },
        "7SjK": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("TSYQ"),
                o = n("/7QA"),
                s = n("GnwI"),
                l = n("Ue10"),
                c = (n("GOKC"), i.createElement(l.xb, {
                    alignItems: l.f.Center,
                    background: l.r.Overlay,
                    borderRadius: l.x.Small,
                    className: "emote-button__lock",
                    color: l.O.Overlay,
                    "data-test-selector": "emote-button-lock",
                    display: l.W.InlineFlex,
                    justifyContent: l.Ua.Center,
                    position: l.db.Absolute,
                    zIndex: l.ac.Above
                }, i.createElement(l.mb, {
                    asset: l.nb.Lock,
                    height: 10,
                    width: 10
                }))),
                d = function(e) {
                    var t = a("emote-button__link", {
                            "emote-button__link--locked": !e.onClick
                        }),
                        n = e.emote,
                        r = n.displayName,
                        d = n.srcSet;
                    if (!d) return null;
                    var u = i.createElement("img", {
                        className: "emote-picker__image",
                        srcSet: d,
                        alt: r
                    });
                    if (e.isCriticalImage) {
                        for (var p = d.split(" ")[0], m = {}, h = 0, f = d.split(","); h < f.length; h++) {
                            var g = f[h].trim().split(" "),
                                v = g[1],
                                k = g[0];
                            m[v] = k
                        }
                        u = i.createElement(s.b, {
                            className: "emote-picker__emote-image",
                            src: p,
                            srcSet: m,
                            alt: r || ""
                        })
                    }
                    return i.createElement("div", {
                        className: "emote-button"
                    }, i.createElement(l.Qb, {
                        label: r || Object(o.d)("Emote", "EmoteButton"),
                        direction: l.Sb.Bottom
                    }, i.createElement(l.Na, {
                        display: l.W.Flex,
                        alignItems: l.f.Center,
                        justifyContent: l.Ua.Center
                    }, i.createElement("button", {
                        "data-test-selector": "emote-button-clickable",
                        className: t,
                        "aria-label": r,
                        name: r,
                        onClick: e.onClick ? e.onClick.bind(null, e.emote) : void 0,
                        "data-a-target": r
                    }, i.createElement("figure", null, e.locked ? c : null, u)))))
                },
                u = (n("VrOd"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClickEmote = function(e) {
                            t.props.onClickEmote && t.props.onClickEmote(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.emotes.map(function(t, n) {
                                return i.createElement(d, {
                                    key: "emote-button-" + t.id + "--" + t.setID,
                                    emote: t,
                                    isCriticalImage: 0 === n,
                                    locked: e.props.locked || t.isLocked,
                                    onClick: e.props.locked ? void 0 : e.handleClickEmote
                                })
                            });
                        return i.createElement(l.Va, {
                            display: l.W.Flex,
                            flexWrap: l.Z.Wrap,
                            justifyContent: l.Ua.Center
                        }, t)
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return u
            })
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
        "9KaG": function(e, t, n) {},
        BhFH: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                i = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("kSkr");

            function l() {
                var e = this;
                return Object(i.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, i, s, l) {
                                return r.__awaiter(e, void 0, void 0, function() {
                                    return r.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n,
                                                            sourceContext: s,
                                                            reason: i
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
                                                            id: Object(o.a)(l),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers.push({
                                                            id: n,
                                                            __typename: "User"
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(l),
                                                            fragment: a,
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
        "DB+C": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EmotePicker_EmotePicker_UserSubscriptionProducts"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelOwnerID"
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
                                        value: "channelOwnerID"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subscriptionProducts"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "tier"
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
                                                value: "emotes"
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
                                                        value: "token"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "emoteSetID"
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
                                                value: "subscriptionBenefit"
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
                                                        value: "platform"
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
                    end: 280
                }
            };
            n.loc.source = {
                body: "query EmotePicker_EmotePicker_UserSubscriptionProducts($channelOwnerID: ID!) {\nuser(id: $channelOwnerID) {\nid\nlogin\ncampaignProperties {\ndomains\n}\ndisplayName\nsubscriptionProducts {\nid\nname\ntier\nurl\nemotes {\nid\ntoken\n}\nemoteSetID\n}\nself {\nsubscriptionBenefit {\nid\nplatform\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        DnOo: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("oJmH"),
                o = n("/7QA"),
                s = n("UUve"),
                l = n("D7An"),
                c = n("GnwI"),
                d = n("br9A"),
                u = n("Ue10"),
                p = "subscribe-button__subscribe-tier-button",
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        if (n.state = {
                                hasPopupExperiment: !1
                            }, n.handleClick = function() {
                                n.openCheckout(), n.props.handleSubAction({
                                    action: d.a.ClickCheckout,
                                    checkoutButtonTier: n.props.tierPrice
                                })
                            }, n.openCheckout = function() {
                                n.state.hasPopupExperiment && o.m.set(s.b, n.props.productName)
                            }, !1 === n.props.targetBlank) return n;
                        var r = o.o.experiments.getAssignment(l.b.InstreamCheckout);
                        return n.state = {
                            hasPopupExperiment: "yes" === r
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.props.isSubbedToTier) {
                            var e = Object(o.d)("Subscribed", "SubTierButton");
                            return i.createElement(u.z, {
                                ariaLabel: e,
                                "data-test-selector": p,
                                disabled: !0,
                                icon: u.nb.Star
                            }, e)
                        }
                        var t = this.props.isEsportChannel ? Object(o.d)("Get the All-Access Pass", "SubTierButton") : Object(o.d)("Subscribe Now", "SubTierButton");
                        return i.createElement(u.z, r.__assign({
                            ariaLabel: t + " " + this.props.tierPrice,
                            "data-test-selector": p,
                            linkTo: this.state.hasPopupExperiment ? void 0 : this.props.url,
                            onClick: this.handleClick,
                            purchase: this.props.tierPrice
                        }, Object(u.bc)(this.props), {
                            targetBlank: void 0 === this.props.targetBlank || this.props.targetBlank
                        }), t)
                    }, t
                }(i.Component),
                h = Object(a.compose)(Object(c.c)("SubTierButton", {
                    autoReportInteractive: !0
                }))(m);
            n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return h
            })
        },
        Epr8: function(e, t, n) {},
        GOKC: function(e, t, n) {},
        Gu45: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Thread_RevokeWhisperAccess"
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
                                    value: "UpdateWhisperThreadInput"
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
                                value: "updateWhisperThread"
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
                                        value: "thread"
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
                                                value: "participants"
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
                                                                value: "whisperPermissions"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "receive"
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
                    end: 187
                }
            };
            n.loc.source = {
                body: "mutation Thread_RevokeWhisperAccess($input: UpdateWhisperThreadInput!) {\nupdateWhisperThread(input: $input) {\nthread {\nid\nparticipants {\nid\nself {\nwhisperPermissions {\nreceive\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        GzyO: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "d", function() {
                return p
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("OpME"),
                o = "twilight.emote_picker_history",
                s = 24,
                l = [{
                    id: "64138",
                    token: "SeemsGood"
                }, {
                    id: "41",
                    token: "Kreygasm"
                }, {
                    id: "245",
                    token: "ResidentSleeper"
                }, {
                    id: "28087",
                    token: "WutFace"
                }, {
                    id: "86",
                    token: "BibleThump"
                }, {
                    id: "9",
                    token: "<3"
                }, {
                    id: "58765",
                    token: "NotLikeThis"
                }, {
                    id: "81274",
                    token: "VoHiYo"
                }, {
                    id: "88",
                    token: "PogChamp"
                }, {
                    id: "425618",
                    token: "LUL"
                }, {
                    id: "25",
                    token: "Kappa"
                }, {
                    id: "30259",
                    token: "HeyGuys"
                }];

            function c(e) {
                var t = i.l.get(o, {}),
                    n = t[e.id];
                n ? (n.uses++, n.lastUpdatedAt = Date.now()) : t[e.id] = {
                    emote: e,
                    lastUpdatedAt: Date.now(),
                    uses: 1
                }, i.l.set(o, t)
            }

            function d() {
                var e = i.l.get(o, {});
                if (!(Object.keys(e).length >= s)) {
                    for (var t = {}, n = 0; n < l.length; n++) {
                        var a = l[n];
                        e[a.id] || (t[a.id] = {
                            emote: a,
                            lastUpdatedAt: n,
                            uses: 0
                        })
                    }
                    var c = r.__assign({}, t, e);
                    i.l.set(o, c)
                }
            }

            function u() {
                var e = i.l.get(o, {}) || {},
                    t = [];
                return Object.keys(e).forEach(function(n) {
                    var r = e[n];
                    void 0 !== r && t.push(r)
                }), t.sort(function(e, t) {
                    return e.uses > t.uses ? -1 : t.uses > e.uses ? 1 : e.lastUpdatedAt > t.lastUpdatedAt ? -1 : t.lastUpdatedAt > e.lastUpdatedAt ? 1 : 0
                }), Object(a.b)(t.slice(0, 24).map(function(e) {
                    return e.emote
                }))
            }

            function p() {
                var e = i.l.get(o, {}) || {},
                    t = {};
                return Object.keys(e).forEach(function(n) {
                    void 0 !== e[n] && (t[e[n].emote.token] = {
                        count: e[n].uses
                    })
                }), t
            }
        },
        J45U: function(e, t, n) {},
        JGCS: function(e, t, n) {},
        Jpf8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Whispers_Thread_WhisperThread"
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "whisperThread"
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
                                        value: "userLastMessageRead"
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
                                                value: "sentAt"
                                            },
                                            arguments: [],
                                            directives: []
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "participants"
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
                                                value: "login"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "displayBadges"
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
                                                        value: "whisperPermissions"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "receive"
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
                                                value: "__typename"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "spamInfo"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "lastMarkedNotSpamAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "likelihood"
                                            },
                                            arguments: [],
                                            directives: []
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isMuted"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isArchived"
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
                                            kind: "IntValue",
                                            value: "20"
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
                                                                value: "nonce"
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
                                                                        value: "content"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "emotes"
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
                                                                                value: "emoteID"
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
                                                                                value: "from"
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
                                                                            directives: []
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
                                                                        value: "id"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "sentAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "editedAt"
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
                                                                value: "__typename"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "__typename"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "unreadMessagesCount"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayBadges"
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
                                        }]
                                    }
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
                    end: 771
                }
            };
            n.loc.source = {
                body: "query Whispers_Thread_WhisperThread($id: ID! $cursor: Cursor) {\nwhisperThread(id: $id) {\nid\nuserLastMessageRead {\nid\nsentAt\n__typename\n}\nparticipants {\nid\nchatColor\ndisplayName\nprofileImageURL(width: 70)\nlogin\ndisplayBadges {\nid\ntitle\nimageURL\n}\nself {\nwhisperPermissions {\nreceive\n}\n}\n__typename\n}\nspamInfo {\nlastMarkedNotSpamAt\nlikelihood\n__typename\n}\nisMuted\nisArchived\nmessages(first: 20 after: $cursor) {\nedges {\ncursor\nnode {\nid\nnonce\ncontent {\ncontent\nemotes {\nid\nemoteID\nsetID\nfrom\nto\n__typename\n}\n__typename\n}\nfrom {\nid\n__typename\n}\nsentAt\neditedAt\ndeletedAt\n__typename\n}\n__typename\n}\n__typename\n}\n__typename\nunreadMessagesCount\n}\ncurrentUser {\nid\nchatColor\ndisplayName\nprofileImageURL(width: 70)\nlogin\ndisplayBadges {\nid\ntitle\nimageURL\n}\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        JzSO: function(e, t, n) {},
        MJbm: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = a.o.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                r = e.offsetHeight,
                                i = e.offsetLeft,
                                a = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && r === t.height && a === t.top && i === t.left || (t.width = n, t.height = r, t.props.onResize(n, r, a, i)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement("div", {
                            className: "resize-detector"
                        }, i.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, i.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), i.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, i.createElement("div", {
                            className: "resize-detector__shrink"
                        })))
                    }, t.prototype.componentDidMount = function() {
                        if (this.growDiv) {
                            this.growDiv.parentElement || this.logger.warn("growDiv.parentElement is undefined!"), this.container = this.growDiv.parentElement.parentElement;
                            var e = this.container.style.position;
                            if ("relative" !== e && "absolute" !== e && "fixed" !== e) {
                                var t = window.getComputedStyle(this.container);
                                t && "static" === t.getPropertyValue("position") && (this.container.style.position = "relative")
                            }
                            this.onScroll(), this.growDiv.addEventListener("scroll", this.onScroll), this.shrinkDiv.addEventListener("scroll", this.onScroll)
                        } else this.logger.warn("growDiv is undefined!")
                    }, t.prototype.componentWillUnmount = function() {
                        this.growDiv.removeEventListener("scroll", this.onScroll), this.shrinkDiv.removeEventListener("scroll", this.onScroll)
                    }, t.prototype.reset = function() {
                        var e = this.growDiv,
                            t = this.shrinkDiv,
                            n = this.growChildDiv.style;
                        n.width = "100000px", n.height = "100000px", e.scrollLeft = 1e5, e.scrollTop = 1e5, t.scrollLeft = 1e5, t.scrollTop = 1e5
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return o
            })
        },
        MPK0: function(e, t, n) {},
        Mj6i: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                i = n("yR8l"),
                a = n("0FG4"),
                o = n("S4w9");

            function s() {
                return Object(i.a)(o, {
                    props: function(e) {
                        if (e.data) {
                            var t = e.data.currentUser && e.data.currentUser.emoteSets || [],
                                n = t && Object(a.b)(t);
                            return {
                                emoteSetsData: r.__assign({}, e.data, {
                                    currentUser: e.data.currentUser || null,
                                    emoteMap: n,
                                    emoteSets: t
                                })
                            }
                        }
                        return {}
                    },
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                })
            }
        },
        N6NX: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Threads_MarkAllWhispersAsRead"
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
                                    value: "UpdateAllWhisperThreadsInput"
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
                                value: "updateAllWhisperThreads"
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
                                        value: "count"
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
                    end: 130
                }
            };
            n.loc.source = {
                body: "mutation Threads_MarkAllWhispersAsRead($input: UpdateAllWhisperThreadsInput!) {\nupdateAllWhisperThreads(input: $input) {\ncount\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        NKxy: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "WhisperThread_SetThreadSpamStatus"
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
                                    value: "UpdateWhisperThreadInput"
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
                                value: "updateWhisperThread"
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
                                        value: "thread"
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
                                                value: "spamInfo"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "lastMarkedNotSpamAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "likelihood"
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
                    end: 178
                }
            };
            n.loc.source = {
                body: "mutation WhisperThread_SetThreadSpamStatus($input: UpdateWhisperThreadInput!) {\nupdateWhisperThread(input: $input) {\nthread {\nid\nspamInfo {\nlastMarkedNotSpamAt\nlikelihood\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        OpME: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "d", function() {
                return g
            });
            var r = n("mrSG"),
                i = n("lZdE"),
                a = n("cpJf"),
                o = {
                    "^B-?\\)$": "B)",
                    "^:-?[z|Z|\\|]$": ":|",
                    "^:-?\\)$": ":)",
                    "^:-?\\($": ":(",
                    "^:-?(p|P)$": ":P",
                    "^;-?(p|P)$": ";P",
                    "^:-?[\\\\/]$": ":/",
                    "^;-?\\)$": ";)",
                    "^R-?\\)$": "R)",
                    "^:>$": ":>",
                    "^:&gt;$": ":>",
                    "^[oO](_|\\.)[oO]$": "O_o",
                    "^:-?D$": ":D",
                    "^:-?(o|O)$": ":O",
                    "^>\\($": ">(",
                    "^:-?(?:7|L)$": ":7",
                    "^:-?(S|s)$": ":S",
                    "^#-?[\\\\/]$": "#/",
                    "^<\\]$": "<]",
                    "^<3$": "<3",
                    "^&lt;3$": "<3",
                    "^&lt;\\]$": "<]",
                    "^&gt;\\($": ">("
                },
                s = ["1.0", "2.0", "3.0"],
                l = new Set([457, 33, 42, 0]);

            function c(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = h(e.token),
                            i = o[n] || n,
                            a = s.reduce(function(t, n) {
                                var r = t;
                                return r && (r = r.concat(", ")), r.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(r.__assign({
                            displayName: i,
                            srcSet: a
                        }, e))
                    }, i = 0, a = e; i < a.length; i++) {
                    n(a[i])
                }
                return t
            }

            function d(e, t) {
                var n = c(e);
                return t && (n = function(e, t) {
                    return e.map(function(e) {
                        return r.__assign({}, e, {
                            setID: t
                        })
                    })
                }(n, t)), n
            }

            function u(e) {
                return e.filter(function(e) {
                    return !!e && !!e.id && !!e.token
                }).sort(function(e, t) {
                    return parseInt(e.id, 10) - parseInt(t.id, 10)
                })
            }

            function p(e) {
                for (var t = [], n = 0, r = e; n < r.length; n++) {
                    var i = r[n];
                    if (i && i.id && i.emotes) {
                        for (var a = {
                                id: i.id,
                                emotes: []
                            }, o = 0, s = i.emotes; o < s.length; o++) {
                            var l = s[o];
                            l && l.id && l.token && a.emotes.push(l)
                        }
                        t.push(a)
                    }
                }
                return t
            }

            function m(e) {
                for (var t = [], n = [], r = 0, i = e; r < i.length; r++) {
                    var a = i[r];
                    if (a && a.id && a.emotes) {
                        var o = {
                            id: a.id,
                            emotes: d(u(a.emotes), a.id)
                        };
                        l.has(parseInt(a.id, 10)) ? t.push(o) : n.push(o)
                    }
                }
                return n.concat(t)
            }
            var h = function(e) {
                    return function(e) {
                        return /[\|\\\^\$\*\+\?\:\#]/.test(e)
                    }(e) ? "^" + e.replace(/\\(?=[&;:])/g, "") + "$" : e
                },
                f = function(e, t, n) {
                    var r = n || a.d,
                        o = [],
                        s = [],
                        l = [],
                        c = new RegExp("^" + Object(i.a)(t), "i");
                    return e.forEach(function(e) {
                        r[e.token] ? l.push(e) : e.token.match(c) ? o.push(e) : s.push(e)
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), s.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), l.sort(function(e, t) {
                        return r[t.token].count - r[e.token].count
                    }), l.concat(o).concat(s)
                },
                g = function(e) {
                    var t = {};
                    return e.filter(function(e) {
                        return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                    })
                }
        },
        Oy4H: function(e, t, n) {},
        PDCe: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUserCommunity"
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
                                    value: "ReportUserInCommunityInput"
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
                                value: "reportUserInCommunity"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 138
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\nreportUserInCommunity(input: $input) {\nuser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "PRj+": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Whispers_Whispers_UserWhisperThreads"
                    },
                    variableDefinitions: [{
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "emoteSets"
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
                                                        value: "token"
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
                                        value: "whisperThreads"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "10"
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
                                                                value: "participants"
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
                                                                        value: "login"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "spamInfo"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "lastMarkedNotSpamAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "likelihood"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
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
                                                                    kind: "IntValue",
                                                                    value: "20"
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
                                                                                        value: "nonce"
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
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "editedAt"
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
                                                                                                value: "id"
                                                                                            },
                                                                                            arguments: [],
                                                                                            directives: []
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
                                                                                                value: "content"
                                                                                            },
                                                                                            arguments: [],
                                                                                            directives: []
                                                                                        }, {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "emotes"
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
                                                                                                        value: "emoteID"
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
                                                                                                        value: "from"
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
                                                                                                    directives: []
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "userLastMessageRead"
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
                                                                        value: "sentAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isMuted"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isArchived"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "unreadMessagesCount"
                                                            },
                                                            arguments: [],
                                                            directives: []
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
                }],
                loc: {
                    start: 0,
                    end: 676
                }
            };
            n.loc.source = {
                body: "query Whispers_Whispers_UserWhisperThreads($cursor: Cursor) {\ncurrentUser {\nid\nlogin\nemoteSets {\nid\nemotes {\nid\ntoken\n}\n}\nwhisperThreads(first: 10 after: $cursor) {\nedges {\ncursor\nnode {\nid\nparticipants {\nid\nchatColor\ndisplayName\nprofileImageURL(width: 70)\nlogin\n__typename\n}\nspamInfo {\nlastMarkedNotSpamAt\nlikelihood\n__typename\n}\nmessages(first: 20) {\nedges {\ncursor\nnode {\nid\nnonce\nsentAt\neditedAt\ndeletedAt\nfrom {\nid\n__typename\n}\ncontent {\ncontent\nemotes {\nid\nemoteID\nsetID\nfrom\nto\n__typename\n}\n__typename\n}\n__typename\n}\n__typename\n}\n__typename\n}\nuserLastMessageRead {\nid\nsentAt\n__typename\n}\nisMuted\nisArchived\nunreadMessagesCount\n__typename\n}\n__typename\n}\n__typename\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        PrJw: function(e, t, n) {
            "use strict";
            var r = n("vGFN");
            n.d(t, "a", function() {
                return r.b
            }), n.d(t, "b", function() {
                return r.c
            }), n.d(t, "c", function() {
                return r.d
            }), n.d(t, "d", function() {
                return r.e
            }), n.d(t, "e", function() {
                return r.f
            }), n.d(t, "f", function() {
                return r.g
            }), n.d(t, "g", function() {
                return r.h
            }), n.d(t, "h", function() {
                return r.i
            }), n.d(t, "i", function() {
                return r.j
            }), n.d(t, "j", function() {
                return r.k
            }), n.d(t, "k", function() {
                return r.m
            }), n.d(t, "l", function() {
                return r.p
            }), n.d(t, "m", function() {
                return r.q
            })
        },
        RQ6e: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                c = n("GnwI"),
                d = n("+PZR"),
                u = n("Ue10"),
                p = n("gIsd"),
                m = function(e) {
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
                            t = Object(o.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [a.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || Object(d.b)()).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return a.createElement(u.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.Ca, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(u.sb, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, a.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(a.Component),
                h = Object(s.compose)(Object(l.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(c.c)("ReportReasonSelect"))(m);
            n("y4Ne");
            n.d(t, "a", function() {
                return g
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, "c", function() {
                return v
            });
            var f, g = "community_rules_violation";
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError", e[e.CommunityError = 5] = "CommunityError"
            }(f || (f = {}));
            var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(o.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        if (e.preventDefault(), t.state.reason && t.state.description.length > 0) {
                            if (t.state.reason === g && !t.state.selectedCommunityID) {
                                if (!t.props.targetUser.directories.nodes.length) return void t.props.onError(f.CommunityError);
                                t.props.onError(f.FormError)
                            }
                            t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName)
                        } else t.props.onError(f.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u.Va, {
                        display: u.W.Flex,
                        flexDirection: u.Y.Column,
                        alignItems: u.f.Center,
                        justifyContent: u.Ua.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === f.Success ? a.createElement("div", null, a.createElement(u.z, {
                        onClick: this.props.onClose
                    }, a.createElement(u.Va, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(u.Va, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(u.V, {
                        type: u.Nb.H4
                    }, this.props.title), a.createElement(u.xb, {
                        color: u.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(u.xb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(h, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), a.createElement(u.Ca, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(u.Kb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(u.xb, {
                        display: u.W.Flex,
                        justifyContent: u.Ua.Center
                    }, a.createElement(u.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(u.Va, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case f.FormError:
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case f.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case f.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        case f.UserError:
                            e = Object(o.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        case f.CommunityError:
                            e = Object(o.d)("A report of this type could not be sent because this user has not selected a Community.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = i({
                        "reporting__error-container": this.props.submitStatus !== f.Success,
                        "reporting__success-container": this.props.submitStatus === f.Success
                    });
                    return a.createElement(u.xb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== f.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component)
        },
        RuiO: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Core_Services_Spade_SubEvent_User"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "withVideo"
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
                                value: "videoID"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
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
                                                value: "canPrimeSubscribe"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionBenefit"
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
                                                        value: "tier"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "purchasedWithPrime"
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
                                        value: "videoID"
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
                                            value: "withVideo"
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
                                        value: "broadcastType"
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
                    end: 266
                }
            };
            n.loc.source = {
                body: "query Core_Services_Spade_SubEvent_User($channelID: ID! $withVideo: Boolean! $videoID: ID) {\nuser(id: $channelID) {\nid\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\ntier\npurchasedWithPrime\n}\n}\n}\nvideo(id: $videoID) @include(if: $withVideo) {\nid\nbroadcastType\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        S4w9: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UserEmotes"
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
                                        value: "emoteSets"
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
                                                        value: "token"
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
                    end: 76
                }
            };
            n.loc.source = {
                body: "query UserEmotes {\ncurrentUser {\nid\nemoteSets {\nid\nemotes {\nid\ntoken\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        SceP: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsChatCard_Clip"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "thumbnailURL"
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
                                        value: "slug"
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
                                        value: "curator"
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
                                        value: "broadcaster"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 151
                }
            };
            n.loc.source = {
                body: "query ClipsChatCard_Clip($slug: ID!) {\nclip(slug: $slug) {\nid\nthumbnailURL\ntitle\nslug\nurl\ncurator {\nid\ndisplayName\n}\nbroadcaster {\nid\ndisplayName\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        TOso: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("cMjZ"),
                o = n("geRD"),
                s = n("f00E"),
                l = n("DMoW"),
                c = n("U1yz"),
                d = n("xXlL"),
                u = n("a1OF");
            var p, m = n("3YIm"),
                h = n("NMMG"),
                f = n("Vl9+");

            function g(e) {
                var t = e.currentUserID,
                    n = e.emotes,
                    p = e.message,
                    g = e.recipientUserID;
                if ("" === t || "" === p || "" === g) return Promise.reject(new Error("Tried to send a whisper with nonsensical parameters."));
                var v = Object(s.b)(),
                    k = r.__assign({
                        mutation: m
                    }, Object(o.a)({
                        message: p,
                        nonce: v,
                        recipientUserID: g
                    })),
                    b = Object(h.a)(t, g),
                    y = Object(c.a)(i.o.apollo.client.cache, b, !0);
                if (y) {
                    var S = function(e, t) {
                        for (var n = [], r = /\S+/g, i = r.exec(e); i;) {
                            var a = i[0],
                                o = t[a];
                            if (o) {
                                var s = Object(u.c)(e.slice(0, i.index)),
                                    l = s ? s.length : i.index;
                                n.push({
                                    id: o.id,
                                    start: l,
                                    end: l + a.length - 1
                                })
                            }
                            i = r.exec(e)
                        }
                        return n
                    }(p, n).map(d.a);
                    k.optimisticResponse = {
                        sendWhisper: {
                            __typename: "SendWhisperPayload",
                            message: {
                                content: {
                                    content: p,
                                    emotes: S,
                                    __typename: "MessageBody"
                                },
                                from: {
                                    id: t,
                                    __typename: "User"
                                },
                                id: v,
                                nonce: v,
                                sentAt: (new Date).toISOString(),
                                deletedAt: null,
                                editedAt: null,
                                thread: {
                                    id: b,
                                    __typename: "WhisperThread",
                                    participants: [{
                                        id: t,
                                        __typename: "User",
                                        self: {
                                            __typename: "UserSelfConnection",
                                            whisperPermissions: {
                                                receive: l.O.NOT_PERMITTED,
                                                __typename: "WhisperPermissions"
                                            }
                                        }
                                    }, {
                                        id: g,
                                        __typename: "User",
                                        self: {
                                            __typename: "UserSelfConnection",
                                            whisperPermissions: {
                                                receive: l.O.PERMITTED,
                                                __typename: "WhisperPermissions"
                                            }
                                        }
                                    }]
                                },
                                __typename: "WhisperMessage"
                            },
                            error: null
                        }
                    }, k.update = function(e, t) {
                        if (t.data) {
                            var n = t.data;
                            if (n.sendWhisper.message && !n.sendWhisper.error) {
                                var i = n.sendWhisper.message,
                                    o = Object(c.a)(e, b);
                                if (o) {
                                    var s = o.messages.edges.findIndex(function(e) {
                                        return e.node.id === v || e.node.nonce === v || e.node.id === i.id
                                    });
                                    if (s < 0) {
                                        var l = {
                                            cursor: (1 + y.messages.edges.reduce(function(e, t) {
                                                return Math.max(parseInt(t.cursor, 10), e)
                                            }, 0)).toString(),
                                            node: i,
                                            __typename: "WhisperMessageEdge"
                                        };
                                        o.messages.edges.unshift(l)
                                    } else o.messages.edges[s].node = i;
                                    o.userLastMessageRead && (o.userLastMessageRead.sentAt = i.sentAt), o.unreadMessagesCount = 0, e.writeFragment({
                                        id: Object(a.a)(o),
                                        fragment: f,
                                        data: r.__assign({}, o)
                                    })
                                }
                            }
                        }
                    }
                }
                return i.o.apollo.client.mutate(k)
            }
            n.d(t, "a", function() {
                    return p
                }), n.d(t, "b", function() {
                    return g
                }),
                function(e) {
                    e.TargetBanned = "TARGET_BANNED", e.BodyEmpty = "BODY_EMPTY", e.RestrictedRecipient = "TARGET_RESTRICTED", e.NotDelivered = "NOT_DELIVERED"
                }(p || (p = {}))
        },
        TvOw: function(e, t, n) {
            "use strict";
            var r, i;
            n.d(t, "b", function() {
                    return r
                }), n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Spam = "Spam", e.Harassment = "Harassment"
                }(r || (r = {})),
                function(e) {
                    e.Spam = "spam", e.Harassment = "harassment", e.Other = "other"
                }(i || (i = {}))
        },
        U1yz: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("2Dht");

            function i(e, t, n) {
                try {
                    var i = e.readQuery({
                        query: r,
                        variables: {
                            id: t
                        }
                    }, n);
                    return i ? i.whisperThread : null
                } catch (e) {
                    return null
                }
            }
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
                return c
            }), n.d(t, "e", function() {
                return d
            });
            var r = n("/7QA"),
                i = n("y5D0"),
                a = "SUB_CHECKOUT__PRODUCT",
                o = "SUB_CHECKOUT__RECIPIENT",
                s = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                l = [a, o, s];

            function c() {
                l.forEach(function(e) {
                    return r.m.remove(e)
                })
            }

            function d(e) {
                return function() {
                    return Object(i.e)(e, {
                        onClose: c
                    })
                }
            }
        },
        VN3V: function(e, t, n) {},
        "Vl9+": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "thread"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "WhisperThread"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                    kind: "IntValue",
                                    value: "20"
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
                                                        value: "nonce"
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
                                                                value: "content"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "emotes"
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
                                                                        value: "emoteID"
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
                                                                        value: "from"
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
                                                                    directives: []
                                                                }]
                                                            }
                                                        }]
                                                    }
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
                                                        value: "editedAt"
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "unreadMessagesCount"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "userLastMessageRead"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sentAt"
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
                    end: 240
                }
            };
            n.loc.source = {
                body: "fragment thread on WhisperThread {\nmessages(first: 20) {\nedges {\ncursor\nnode {\nid\nnonce\ncontent {\ncontent\nemotes {\nid\nemoteID\nsetID\nfrom\nto\n}\n}\ndeletedAt\neditedAt\nsentAt\nfrom {\nid\n}\n}\n}\n}\nunreadMessagesCount\nuserLastMessageRead {\nsentAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        VrOd: function(e, t, n) {},
        W8Fi: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.promotion
                })
            }

            function i(e) {
                return e.some(function(e) {
                    return !!e.giftPromotion
                })
            }

            function a(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                })
            }

            function o(e, t) {
                var n;
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? n.newPrice : e.price
            }

            function s(e, t) {
                var n;
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? n.discountValue : 0
            }

            function l(e) {
                return e.self && e.self.paidUpgradePromotion ? e.self.paidUpgradePromotion.newPrice : e.price
            }

            function c(e) {
                return e.find(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                }) || null
            }

            function d(e, t) {
                return !!e && !!t && a(e) && !t.paidUpgrade && !!t.gift && t.gift.isGift
            }
            n.d(t, "g", function() {
                return r
            }), n.d(t, "e", function() {
                return i
            }), n.d(t, "f", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "h", function() {
                return d
            })
        },
        WcC5: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Thread_ArchiveThread"
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
                                    value: "UpdateWhisperThreadInput"
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
                                value: "updateWhisperThread"
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
                                        value: "thread"
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
                                                value: "isArchived"
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
                    end: 132
                }
            };
            n.loc.source = {
                body: "mutation Thread_ArchiveThread($input: UpdateWhisperThreadInput!) {\nupdateWhisperThread(input: $input) {\nthread {\nid\nisArchived\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Wcon: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Whispers_MarkThreadMessageRead"
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
                                    value: "UpdateWhisperThreadInput"
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
                                value: "updateWhisperThread"
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
                                        value: "thread"
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
                                                value: "unreadMessagesCount"
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
                    end: 151
                }
            };
            n.loc.source = {
                body: "mutation Whispers_MarkThreadMessageRead($input: UpdateWhisperThreadInput!) {\nupdateWhisperThread(input: $input) {\nthread {\nid\nunreadMessagesCount\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ZtEv: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            });
            var r, i, a, o, s = n("0Log");
            n.d(t, "d", function() {
                    return s.ModerationActions
                }),
                function(e) {
                    e[e.Message = 0] = "Message", e[e.ExtensionMessage = 1] = "ExtensionMessage", e[e.Moderation = 2] = "Moderation", e[e.ModerationAction = 3] = "ModerationAction", e[e.TargetedModerationAction = 4] = "TargetedModerationAction", e[e.AutoMod = 5] = "AutoMod", e[e.SubscriberOnlyMode = 6] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 7] = "FollowerOnlyMode", e[e.SlowMode = 8] = "SlowMode", e[e.EmoteOnlyMode = 9] = "EmoteOnlyMode", e[e.R9KMode = 10] = "R9KMode", e[e.Connected = 11] = "Connected", e[e.Disconnected = 12] = "Disconnected", e[e.Reconnect = 13] = "Reconnect", e[e.Hosting = 14] = "Hosting", e[e.Unhost = 15] = "Unhost", e[e.Hosted = 16] = "Hosted", e[e.Subscription = 17] = "Subscription", e[e.Resubscription = 18] = "Resubscription", e[e.GiftPaidUpgrade = 19] = "GiftPaidUpgrade", e[e.SubGift = 20] = "SubGift", e[e.Clear = 21] = "Clear", e[e.RoomMods = 22] = "RoomMods", e[e.RoomState = 23] = "RoomState", e[e.Raid = 24] = "Raid", e[e.Unraid = 25] = "Unraid", e[e.Ritual = 26] = "Ritual", e[e.Notice = 27] = "Notice", e[e.Info = 28] = "Info", e[e.BadgesUpdated = 29] = "BadgesUpdated", e[e.Purchase = 30] = "Purchase", e[e.BitsCharity = 31] = "BitsCharity", e[e.CrateGift = 32] = "CrateGift", e[e.RewardGift = 33] = "RewardGift", e[e.SubMysteryGift = 34] = "SubMysteryGift"
                }(r || (r = {})),
                function(e) {
                    e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
                }(i || (i = {})),
                function(e) {
                    e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout"
                }(a || (a = {})),
                function(e) {
                    e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.CheerMessageRejectedPrompt = 1] = "CheerMessageRejectedPrompt", e[e.MessageRejected = 2] = "MessageRejected", e[e.MessageAllowed = 3] = "MessageAllowed", e[e.MessageDenied = 4] = "MessageDenied", e[e.CheerMessageDenied = 5] = "CheerMessageDenied", e[e.CheerMessageTimeout = 6] = "CheerMessageTimeout"
                }(o || (o = {}))
        },
        a1OF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "e", function() {
                return m
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "d", function() {
                return f
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("oe5X"),
                o = n("0FG4"),
                s = n("kRBY"),
                l = n("60o1"),
                c = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
                d = {};

            function u(e, t, n, i, a, o) {
                void 0 === a && (a = !1), void 0 === o && (o = !1);
                var s = Object(l.a)(t.displayName, t.username);
                return {
                    badges: t.badges || {},
                    bits: t.bits,
                    user: r.__assign({}, s, {
                        userLogin: t.username,
                        userID: t.userID,
                        userType: t.userType,
                        color: t.color || p(t.userID)
                    }),
                    messageParts: m(e, t.emotes || {}, t.bits, n, i, t.username),
                    deleted: a,
                    hidden: o,
                    timestamp: Date.now()
                }
            }

            function p(e, t) {
                return void 0 === t && (t = 15), "number" != typeof d[e] && (d[e] = Math.floor(Math.random() * t)), c[d[e]]
            }

            function m(e, t, n, r, l, c) {
                var d = Object(s.e)(i.o.store.getState()),
                    u = {
                        cheers: n ? r : void 0,
                        emotes: {
                            type: o.a.Position,
                            map: t
                        },
                        links: {
                            blockLinks: l,
                            parseClips: !0,
                            parseVods: !0
                        },
                        mentions: {
                            senderLogin: c,
                            sessionUser: d
                        }
                    };
                return Object(a.a)(e, u)
            }

            function h(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
            }

            function f(e, t) {
                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
            }
        },
        br9A: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("2xye"),
                o = n("I6K6"),
                s = n("RuiO"),
                l = {
                    BuyCustomMysteryGift: "buy_custom_mystery_gift",
                    BuyGiftSub: "buy_gift_sub",
                    BuyGiftToPaidUpgrade: "buy_gift_to_paid_upgrade",
                    BuyMysteryGift: "buy_mystery_gift",
                    BuyPaidUpgrade: "buy_paid_upgrade",
                    ChangeTier: "change_tier",
                    ClickCheckout: "click_checkout_button",
                    ClickMoreSubOptions: "more_options_click",
                    ClickGiftSubOptions: "gift_options_click",
                    ClickPrimeFAQ: "click_prime_faq",
                    ClickSignupForPrime: "click_signup_for_prime",
                    ClickBack: "back_top_level",
                    CloseSubMenu: "close_subscribe_menu",
                    GiftASub: "gift_a_sub",
                    OpenSubMenu: "open_subscribe_menu",
                    SubWithPrime: "samus_spend_credit"
                };

            function c(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, n, l, c, d, u, p, m, h, f, g, v, k;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                t = i.n.getVideoPlayerTrackingData().vodID, n = !!t, l = {
                                    channelID: e.channelID,
                                    withVideo: !1
                                }, n && (l.withVideo = !0, l.videoID = t), c = null, r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, i.o.apollo.client.query({
                                    query: s,
                                    variables: l
                                })];
                            case 2:
                                return c = r.sent(), [3, 4];
                            case 3:
                                return d = r.sent(), i.j.error(d, "Failed to make query for channel info in FollowEvent reporting.", {
                                    channelID: e.channelID
                                }), [3, 4];
                            case 4:
                                return u = c && c.data && c.data.user || null, c && !u && i.j.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                    channelID: e.channelID
                                }), p = null, c && n && ((m = c && c.data && c.data.video) ? p = Object(o.a)(m.broadcastType) : i.j.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
                                    currentVideoID: t
                                })), h = u && u.self, f = h ? !!h.subscriptionBenefit : null, g = h && h.subscriptionBenefit && h.subscriptionBenefit.purchasedWithPrime || !1, v = h ? h.canPrimeSubscribe : null, k = {
                                    action: e.action,
                                    can_subscribe: v,
                                    channel: e.channelLogin,
                                    channel_id: e.channelID,
                                    checkout_button_tier: e.checkoutButtonTier,
                                    has_sub_credit: e.hasSubCredit,
                                    host_channel: e.hostChannelLogin,
                                    host_channel_id: e.hostChannelID,
                                    is_menu_open: e.isMenuOpen,
                                    is_subscribed: f,
                                    is_subscribed_current_tier: h && h.subscriptionBenefit && h.subscriptionBenefit.tier,
                                    mystery_gift_count: e.mysteryGiftCount || null,
                                    sub_location: e.sub_location,
                                    sub_recipient: e.giftRecipient,
                                    modal: e.modal,
                                    modal_level: e.modalLevel || "",
                                    show_prime_content: e.showPrimeContent,
                                    show_resub: u ? v && g : null,
                                    vod_id: t,
                                    vod_type: p,
                                    viewport_height: window.innerHeight,
                                    viewport_width: window.innerWidth
                                }, i.n.track(a.SpadeEventType.Subscription, k), [2]
                        }
                    })
                })
            }
        },
        "c/47": function(e, t, n) {},
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("o4DC");

            function i(e) {
                return e && Object(r.c)(e) || ""
            }
        },
        cpJf: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "d", function() {
                    return a
                }), n.d(t, "c", function() {
                    return o
                }), n.d(t, "b", function() {
                    return i
                }),
                function(e) {
                    e.Chat = "stream_chat", e.Feeds = "feeds", e.Room = "chatroom", e.Whisper = "whisper", e.VodChat = "vod-chat"
                }(r || (r = {}));
            var i, a = {
                    TriHard: {
                        count: 196568036
                    },
                    Kappa: {
                        count: 192158118
                    },
                    "4Head": {
                        count: 155758710
                    },
                    PogChamp: {
                        count: 151485090
                    },
                    cmonBruh: {
                        count: 146352878
                    },
                    BibleThump: {
                        count: 56472964
                    },
                    WutFace: {
                        count: 45069031
                    },
                    Kreygasm: {
                        count: 41387580
                    },
                    DansGame: {
                        count: 38097659
                    },
                    hi5F: {
                        count: 34986404
                    },
                    SMOrc: {
                        count: 34734484
                    },
                    KappaPride: {
                        count: 34262839
                    },
                    VoHiYo: {
                        count: 27886434
                    },
                    SwiftRage: {
                        count: 24561900
                    },
                    ResidentSleeper: {
                        count: 24438298
                    },
                    EleGiggle: {
                        count: 19891526
                    },
                    FailFish: {
                        count: 19118343
                    },
                    NotLikeThis: {
                        count: 18802905
                    },
                    Keepo: {
                        count: 18351415
                    },
                    BabyRage: {
                        count: 18220906
                    },
                    MingLee: {
                        count: 18026207
                    },
                    pbfSSH: {
                        count: 16911241
                    },
                    forsenE: {
                        count: 14960299
                    },
                    HeyGuys: {
                        count: 14851569
                    },
                    ANELE: {
                        count: 14648986
                    },
                    PJSalt: {
                        count: 14438861
                    }
                },
                o = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"];
            ! function(e) {
                e.Web = "WEB", e.IOS = "IOS", e.Android = "ANDROID"
            }(i || (i = {}))
        },
        cys1: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                i = n("/7QA"),
                a = n("gvGA"),
                o = n("5zf8"),
                s = n("4rCz"),
                l = n("j0ar"),
                c = function(e) {
                    var t, n = e.emote,
                        i = n.alt || "";
                    return n.cheerAmount && (i += " " + n.cheerAmount.toString(), t = r.createElement("strong", {
                        className: "chat-line__message--cheer-amount",
                        style: {
                            color: n.cheerColor
                        }
                    }, n.cheerAmount)), r.createElement(l.a, {
                        alt: i,
                        cheerText: t,
                        className: "chat-line__message--emote",
                        srcKey: "1x",
                        srcSet: n.images
                    })
                };
            c.displayName = "Emote";
            var d, u = function(e) {
                    var t = e.displayText,
                        n = e.url;
                    return r.createElement("a", {
                        className: "link-fragment",
                        href: n,
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }, t)
                },
                p = n("TSYQ"),
                m = n("RcPG"),
                h = (n("VN3V"), function(e) {
                    var t, n = e.content,
                        i = e.highlightType,
                        a = p("text-fragment", ((t = {})["text-fragment--moderated-highlight"] = i === m.a.ModeratedText, t));
                    return r.createElement("span", {
                        className: a,
                        "data-a-target": "chat-message-text"
                    }, n)
                }),
                f = n("mrSG"),
                g = n("yR8l"),
                v = n("+GjP"),
                k = n("2xye"),
                b = n("Ue10"),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasImageLoadingError: !1
                        }, t.handleImageError = function() {
                            t.setState({
                                hasImageLoadingError: !0
                            })
                        }, t
                    }
                    return f.__extends(t, e), t.prototype.componentWillReceiveProps = function() {
                        this.setState({
                            hasImageLoadingError: !1
                        })
                    }, t.prototype.render = function() {
                        var e = i.a.defaultStreamPreviewURL;
                        return !this.state.hasImageLoadingError && this.props.imageURL && (e = this.props.imageURL), r.createElement(b.I, {
                            aspect: b.p.Aspect16x9,
                            alt: this.props.altText,
                            src: e,
                            onError: this.handleImageError
                        })
                    }, t
                }(r.Component),
                S = (n("Epr8"), "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"),
                _ = {
                    ERROR: "chat-card-error",
                    TITLE: "chat-card-title",
                    DESCRIPTION: "chat-card-description"
                },
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderErrorCard = function() {
                            var e = r.createElement("img", {
                                "data-test-selector": _.ERROR,
                                src: S,
                                className: "chat-card__error-img"
                            });
                            return t.renderCardContent(e, t.props.error)
                        }, t.renderCardContent = function(e, t) {
                            var n, i;
                            return t ? (n = r.createElement(b.V, {
                                type: b.Nb.Span,
                                fontSize: b.Aa.Size5,
                                "data-test-selector": _.TITLE,
                                title: t.title
                            }, t.title), i = r.createElement(b.V, {
                                type: b.Nb.Span,
                                fontSize: b.Aa.Size6,
                                color: b.O.Alt2,
                                "data-test-selector": _.DESCRIPTION
                            }, t.description)) : (e = r.createElement(b.cb, {
                                overlay: !0
                            }), n = r.createElement(b.cb, {
                                width: 180
                            }), i = r.createElement(b.cb, {
                                width: 120
                            })), r.createElement(b.xb, {
                                background: b.r.Base,
                                display: b.W.Flex,
                                flexWrap: b.Z.NoWrap,
                                padding: .5
                            }, r.createElement(b.xb, {
                                className: "chat-card__preview-img",
                                background: b.r.Alt2,
                                display: b.W.Flex,
                                alignItems: b.f.Center,
                                justifyContent: b.Ua.Center,
                                flexShrink: 0
                            }, e), r.createElement(b.Va, {
                                display: b.W.Flex,
                                alignItems: b.f.Center,
                                overflow: b.Ya.Hidden
                            }, r.createElement(b.Va, {
                                padding: {
                                    left: 1
                                },
                                fullWidth: !0
                            }, r.createElement(b.Va, {
                                className: "chat-card__title",
                                ellipsis: !0
                            }, n), r.createElement(b.Va, {
                                ellipsis: !0
                            }, i))))
                        }, t
                    }
                    return f.__extends(t, e), t.prototype.render = function() {
                        var e;
                        if (this.props.error) e = this.renderErrorCard();
                        else if (this.props.data) {
                            var t = Object(v.e)(this.props.data.contentURL, {
                                    tt_medium: k.PageviewMedium.Chat,
                                    tt_content: k.PageviewContent.ChatCard
                                }),
                                n = r.createElement(y, {
                                    altText: this.props.data.title,
                                    imageURL: this.props.data.previewImageURL
                                });
                            e = r.createElement(b.T, {
                                className: "chat-card__link",
                                to: t,
                                targetBlank: !0
                            }, this.renderCardContent(n, {
                                title: this.props.data.title,
                                description: this.props.data.description
                            }))
                        } else e = this.renderCardContent();
                        return r.createElement(b.xb, {
                            elevation: 1,
                            margin: {
                                top: .5
                            }
                        }, e)
                    }, t
                }(r.Component),
                C = n("SceP"),
                T = {
                    isTimedOut: !1
                },
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = T, t.timeoutID = null, t
                    }
                    return f.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.props.data.clip || (this.timeoutID = setTimeout(function() {
                            e.setState({
                                isTimedOut: !0
                            })
                        }, 5e3))
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !this.props.data.clip && e.data.clip && (this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null), this.setState({
                            isTimedOut: !1
                        }))
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.clip,
                            n = e.error,
                            a = e.loading;
                        return n || this.state.isTimedOut ? r.createElement(E, {
                            error: {
                                title: Object(i.d)("Something went wrong", "ClipsChatCard"),
                                description: Object(i.d)("We couldn't find that Clip", "ClipsChatCard")
                            }
                        }) : a || !t ? r.createElement(E, null) : r.createElement(E, {
                            data: {
                                title: t.title || (t.broadcaster ? Object(i.d)("Clip of {broadcaster}", {
                                    broadcaster: t.broadcaster.displayName
                                }, "ClipsChatCard") : ""),
                                description: t.curator ? Object(i.d)("Clipped by {curator}", {
                                    curator: t.curator.displayName
                                }, "ClipsChatCard") : "",
                                previewImageURL: t.thumbnailURL,
                                contentURL: t.url
                            }
                        })
                    }, t
                }(r.Component),
                N = Object(g.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                slug: e.slug
                            },
                            notifyOnNetworkStatusChange: !0,
                            fetchPolicy: e.forceNetworkRequest ? "cache-first" : "cache-only"
                        }
                    }
                })(D),
                O = n("gTu3"),
                I = (n("lpj/"), (d = {})[O.a.Default] = "", d[O.a.Recipient] = "mention-fragment--recipient", d[O.a.Sender] = "mention-fragment--sender", d),
                w = function(e) {
                    var t = e.isAtMention ? "@" : "",
                        n = p("mention-fragment", I[e.currentUserMentionRelation]);
                    return r.createElement("span", {
                        className: n,
                        "data-a-target": "chat-message-mention"
                    }, "" + t + e.recipient)
                };
            w.displayName = "MentionFragment";
            var R = n("QVaV"),
                M = n("sU0Q"),
                U = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return f.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.video,
                            n = e.error,
                            a = e.loading;
                        if (n || t && !t.owner) return r.createElement(E, {
                            error: {
                                title: Object(i.d)("Something went wrong", "VideoChatCard"),
                                description: Object(i.d)("We couldn't find that video", "VideoChatCard")
                            }
                        });
                        if (a || !t) return r.createElement(E, null);
                        var o = r.createElement(b.V, null, Object(i.c)(new Date(t.publishedAt), "medium"), r.createElement("span", null, " · "), Object(R.a)(t.owner.login, t.owner.displayName));
                        return r.createElement(E, {
                            data: {
                                title: t.title,
                                description: o,
                                previewImageURL: t.previewThumbnailURL,
                                contentURL: this.props.url
                            }
                        })
                    }, t
                }(r.Component),
                j = Object(g.a)(M, {
                    options: function(e) {
                        return {
                            variables: {
                                videoID: e.id
                            },
                            notifyOnNetworkStatusChange: !0,
                            fetchPolicy: "cache-first"
                        }
                    }
                })(U),
                x = n("ZtEv");

            function F(e, t, n) {
                void 0 === n && (n = !1);
                var i = t.content,
                    a = i.displayText,
                    o = i.url;
                return n ? r.createElement(h, {
                    key: "message-span-" + e,
                    content: a
                }) : r.createElement(u, {
                    key: e,
                    displayText: a,
                    url: o
                })
            }

            function W(e, t) {
                void 0 === t && (t = {});
                var n = null,
                    i = e.reduce(function(i, o, s) {
                        var l = [];
                        switch (s > 0 && e[s - 1].type !== m.a.Text && o.type !== m.a.Text && l.push(" "), o.type) {
                            case m.a.Text:
                            case m.a.ModeratedText:
                                var d = o.content,
                                    u = o.type;
                                l.push(r.createElement(h, {
                                    key: s,
                                    content: d,
                                    highlightType: u
                                }));
                                break;
                            case m.a.CurrentUserHighlight:
                                l.push(r.createElement(w, {
                                    isAtMention: !1,
                                    currentUserMentionRelation: O.a.Recipient,
                                    recipient: o.content,
                                    key: s
                                }));
                                break;
                            case m.a.Mention:
                                l.push(r.createElement(w, {
                                    isAtMention: !0,
                                    currentUserMentionRelation: o.content.currentUserMentionRelation,
                                    recipient: o.content.recipient,
                                    key: s
                                }));
                                break;
                            case m.a.Emote:
                                l.push(r.createElement(c, {
                                    key: s,
                                    emote: o.content
                                }));
                                break;
                            case m.a.Link:
                                l.push(F(s, o, t.disableLinks));
                                break;
                            case m.a.ClipLink:
                                n || (n = r.createElement(a.a, {
                                    key: s
                                }, r.createElement(N, {
                                    slug: o.content.slug,
                                    forceNetworkRequest: t.forceClipsNetworkRequest
                                }))), l.push(F(s, o, t.disableLinks));
                                break;
                            case m.a.VideoLink:
                                n || (n = r.createElement(j, {
                                    key: s,
                                    id: o.content.id,
                                    url: o.content.url
                                })), l.push(F(s, o, t.disableLinks))
                        }
                        return i.concat(l)
                    }, []);
                return n && (i = i.concat(n)), i
            }

            function A(e) {
                if (e.moderationType === x.e.Ban) return e.reason ? r.createElement("span", {
                    className: "chat-line__moderation--ban-with-reason"
                }, Object(i.d)("{userLogin} has been banned. Reason: {reason}", {
                    userLogin: e.userLogin,
                    reason: e.reason
                }, "ChatLine")) : r.createElement("span", {
                    className: "chat-line__moderation--ban"
                }, Object(i.d)("{userLogin} is now banned from this channel.", {
                    userLogin: e.userLogin
                }, "ChatLine"));
                if (e.reason && e.duration) {
                    var t = Object(i.d)("{userLogin} has been timed out for {duration} seconds. Reason: {reason}", {
                        duration: e.duration,
                        reason: e.reason,
                        userLogin: e.userLogin
                    }, "ChatLine");
                    return r.createElement("span", {
                        className: "chat-line__moderation--timeout-with-reason"
                    }, t)
                }
                return e.duration ? r.createElement("span", {
                    className: "chat-line__moderation--timeout"
                }, Object(i.d)("{userLogin} has been timed out for {duration} seconds.", {
                    userLogin: e.userLogin,
                    duration: e.duration
                }, "ChatLine")) : void 0
            }

            function P(e) {
                var t = e.daysLeft;
                0 === t && (t = e.hoursLeft);
                var n = {
                    bitsTotal: r.createElement("strong", null, Object(s.e)(e.total, {
                        style: "currency",
                        currency: "USD"
                    })),
                    charityName: r.createElement("strong", null, e.charityName),
                    learnMoreURL: r.createElement("a", {
                        href: e.learnMore,
                        target: "_blank"
                    }, e.learnMore),
                    hashtag: r.createElement("strong", null, e.hashtag),
                    timeRemaining: Object(s.e)(t)
                };
                return r.createElement("span", null, 0 === e.daysLeft ? function(e) {
                    return Object(i.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more hours to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                        bitsTotal: e.bitsTotal,
                        charityName: e.charityName,
                        timeRemaining: e.timeRemaining,
                        hashtag: e.hashtag,
                        learnMoreURL: e.learnMoreURL
                    }, "ChatLine")
                }(n) : function(e) {
                    return Object(i.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more days to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                        bitsTotal: e.bitsTotal,
                        charityName: e.charityName,
                        timeRemaining: e.timeRemaining,
                        hashtag: e.hashtag,
                        learnMoreURL: e.learnMoreURL
                    }, "ChatLine")
                }(n))
            }

            function V(e) {
                var t = e.enabled ? Object(i.d)("This room is now in slow mode. You may send messages every {length} seconds.", {
                    length: e.length
                }, "ChatLine") : Object(i.d)("This room is no longer in slow mode.", "ChatLine");
                return r.createElement("span", null, t)
            }

            function L(e) {
                var t;
                if (e.length > 0) {
                    var n = e.join(", ");
                    t = Object(i.d)("The moderators of this channel are: {moderatorList}", {
                        moderatorList: n
                    }, "ChatLine")
                } else t = Object(i.d)("There are no moderators of this channel.", "ChatLine");
                return r.createElement("span", null, t)
            }

            function B(e) {
                if (e.enabled) {
                    var t = 0 === e.length ? Object(i.d)("This room is in followers-only mode.", "ChatLine") : Object(i.d)("This room is now in {length} followers-only mode.", {
                        length: Object(o.b)(60 * e.length)
                    }, "ChatLine");
                    return r.createElement("span", null, t)
                }
                return r.createElement("span", null, Object(i.d)("This room is no longer in followers-only mode.", "ChatLine"))
            }

            function z(e) {
                return e.enabled ? r.createElement("span", null, Object(i.d)("This room is now in emote-only mode.", "ChatLine")) : r.createElement("span", null, Object(i.d)("This room is no longer in emote-only mode.", "ChatLine"))
            }

            function H(e) {
                var t = e.enabled ? Object(i.d)("This room is now in subscriber-only mode.", "ChatLine") : Object(i.d)("This room is no longer in subscriber-only mode.", "ChatLine");
                return r.createElement("span", null, t)
            }

            function G(e) {
                return e.enabled ? r.createElement("span", null, Object(i.d)("r9k mode has been enabled for this room.", "ChatLine")) : r.createElement("span", null, Object(i.d)("r9k mode has been disabled for this room.", "ChatLine"))
            }

            function q(e) {
                return e.isAutohost ? Object(i.d)("{host} is now auto hosting you for up to {viewerCount, number} viewers.", {
                    host: e.hostingChannel,
                    viewerCount: e.viewerCount
                }, "ChatLine") : e.viewerCount <= 2 ? Object(i.d)("{host} is now hosting you.", {
                    host: e.hostingChannel
                }, "ChatLine") : Object(i.d)("{host} is now hosting you for up to {viewerCount, number} viewers.", {
                    host: e.hostingChannel,
                    viewerCount: e.viewerCount
                }, "ChatLine")
            }

            function $(e) {
                var t = e.getHours() % 12;
                0 === t && (t = 12);
                var n = e.getMinutes(),
                    r = n.toString();
                return n < 10 && (r = "0" + r), t + ":" + r
            }

            function Q(e) {
                return r.createElement("span", {
                    key: "timestamp",
                    className: "chat-line__timestamp",
                    "data-a-target": "chat-timestamp",
                    "data-test-selector": "chat-timestamp"
                }, $(new Date(e)))
            }

            function K(e) {
                return r.createElement("span", {
                    key: "timestamp",
                    className: "chat-line__timestamp",
                    "data-a-target": "chat-timestamp",
                    "data-test-selector": "chat-timestamp"
                }, function(e, t) {
                    void 0 === t && (t = {});
                    var n = i.o.intl.getLanguageCode() || "en";
                    return Intl.DateTimeFormat(n, t).format(e)
                }(new Date(e), {
                    hour: "numeric",
                    minute: "numeric"
                }))
            }
            n.d(t, "f", function() {
                return W
            }), n.d(t, "g", function() {
                return A
            }), n.d(t, "b", function() {
                return P
            }), n.d(t, "j", function() {
                return V
            }), n.d(t, "i", function() {
                return L
            }), n.d(t, "d", function() {
                return B
            }), n.d(t, "c", function() {
                return z
            }), n.d(t, "k", function() {
                return H
            }), n.d(t, "h", function() {
                return G
            }), n.d(t, "e", function() {
                return q
            }), n.d(t, "a", function() {
                return $
            }), n.d(t, "l", function() {
                return Q
            }), n.d(t, "m", function() {
                return K
            })
        },
        dAHa: function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("BhFH"),
                u = n("iS14"),
                p = n("geRD"),
                m = n("f00E"),
                h = n("D7An"),
                f = n("2xye"),
                g = n("GnwI"),
                v = n("QVaV"),
                k = n("Ue10"),
                b = (n("MPK0"), "report-wizard-block"),
                y = "report-wizard-unblock",
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return a.createElement(k.T, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": b
                            }, a.createElement(k.Va, {
                                display: k.W.Flex,
                                alignItems: k.f.Center
                            }, a.createElement(k.mb, {
                                type: k.ob.Brand,
                                asset: k.nb.Ban
                            }), a.createElement(k.Va, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Block {user}", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return a.createElement(k.Va, {
                                className: "reporting-wizard__block-actions",
                                display: k.W.Flex,
                                alignItems: k.f.Center
                            }, a.createElement(k.mb, {
                                type: k.ob.Success,
                                asset: k.nb.FollowCheck
                            }), a.createElement(k.Va, {
                                margin: {
                                    right: 1
                                }
                            }, a.createElement(k.V, {
                                className: "block-user__success",
                                type: k.Nb.Span
                            }, Object(l.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), a.createElement(k.T, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": y
                            }, a.createElement(k.Va, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
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
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(v.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return a.createElement(k.xb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, a.createElement(k.Va, null, Object(l.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement(k.xb, {
                            color: k.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(k.Wb, {
                            baseFontSize: k.Aa.Size6
                        }, a.createElement("p", null, Object(l.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement("ul", null, a.createElement("li", null, Object(l.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Prevent them from hosting you", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), a.createElement(k.Va, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(a.Component),
                _ = n("4qQ0");
            ! function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(r || (r = {}));
            var E, C = {
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
                T = {
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
                            return Object(l.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: _.b.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: _.b.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: _.b.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: _.b.Other
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
                        reportReason: _.b.Spam
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
                        reportReason: _.b.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: _.b.Underaged
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
                        reportReason: _.b.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: _.b.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: _.b.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: _.b.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: _.b.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: _.b.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: _.b.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: _.b.Miscategorized
                    },
                    video_general: {
                        getTitle: C.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(l.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: _.b.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: _.b.Harassment
                    },
                    abusiveViolence: {
                        getTitle: C.abusiveViolence,
                        value: "threatening violence",
                        reportReason: _.b.Harm
                    },
                    commitingViolence: {
                        getTitle: C.commitingViolence,
                        value: "committing violence",
                        reportReason: _.b.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: _.b.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: _.b.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(l.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: _.b.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(l.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: _.b.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(l.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: _.b.Harm
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
                        reportReason: _.b.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: _.b.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: _.b.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: _.b.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: _.b.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: _.b.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: _.b.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: _.b.Other
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
                        reportReason: _.b.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: _.b.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(l.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: _.b.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: C.me,
                        value: "impersonating me",
                        reportReason: _.b.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: _.b.Impersonation
                    },
                    impersonation_other: {
                        getTitle: C.someoneElse,
                        value: "impersonating someone else",
                        reportReason: _.b.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: _.b.SelfHarm
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
                        reportContext: _.a.Whisper
                    },
                    username: {
                        getTitle: function() {
                            return Object(l.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: _.b.OffensiveUsername
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
                        reportReason: _.b.Harassment,
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
                        reportReason: _.b.Harm
                    },
                    external_commitingViolence: {
                        getTitle: C.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: _.b.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(l.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: _.b.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: _.b.Spam
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
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                r = n.name,
                                i = n.value;
                            t.props.onChangeText(r, i)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    r = t.props.currentCard.items[n];
                                t.props.onChangeRadio(r)
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? a.createElement(k.Va, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return a.createElement(k.Va, {
                            className: "reporting-wizard-card"
                        }, e, a.createElement(k.Ca, {
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
                                    return a.createElement(k.Va, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case r.Link:
                                    return a.createElement(k.Va, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(k.T, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, a.createElement(k.Va, {
                                        display: k.W.Flex
                                    }, a.createElement(k.Va, {
                                        display: k.W.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, a.createElement(k.mb, {
                                        asset: k.nb.Document
                                    })), t.getTitle())));
                                case r.Textarea:
                                    var i = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        o = t.required && (!i || !!i && 0 === i.trim().length);
                                    return a.createElement(k.Va, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(k.Ca, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                    }, a.createElement(k.Kb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && o,
                                        value: i,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case r.MultipleChoice:
                                default:
                                    return a.createElement(k.Va, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, a.createElement(k.jb, {
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
                N = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(E || (E = {}));
            var O, I, w, R = {
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
                M = {
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
                U = {
                    getDescription: function() {
                        return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: M.thanks,
                    type: E.Info,
                    value: "end card"
                },
                j = {
                    socialMedia: i.__assign({}, U, {
                        items: [T.endBlurb_socialmedia]
                    }),
                    violence: i.__assign({}, U, {
                        items: [T.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: M.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [T.endLink_DMCA, T.endLink_trademark, T.endLink_devAgreement],
                        type: E.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: M.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [T.endLink_selfharm],
                        type: E.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: M.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [T.endLink_eventCoC],
                        value: "twitch event end",
                        type: E.Info
                    }
                },
                x = {
                    getTitle: M.report,
                    getLabel: function() {
                        return Object(l.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [T.video, T.whisper, T.chat, T.room, T.profile, T.username, T.report_other],
                    type: E.MultipleChoice,
                    value: "content type"
                },
                F = {
                    identifyUser: {
                        getTitle: M.reportVideo,
                        getLabel: R.identifyUser,
                        items: [T.video_streamer, T.video_someoneElse, T.video_chatSomeone],
                        type: E.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: M.reportVideo,
                        getLabel: R.contentGeneral,
                        items: [T.revealPersonalInfo, T.video_labeling, T.video_inactive, T.video_general, T.report_ip, T.violateDevAgreement, T.selfharm],
                        type: E.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: M.reportVideo,
                        getLabel: R.content,
                        items: [T.report_username, T.violence, T.abusive, T.cheating, T.scam, T.inappropriateContent, T.evasion, T.impersonation, T.underage, T.bitsViolation],
                        type: E.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                W = {
                    content: {
                        getTitle: M.reportMessage,
                        getLabel: R.contentGeneral,
                        items: [T.revealPersonalInfo, T.evasion, T.spam, T.maliciousRaid, T.report_username, T.messaging_general, T.selfharm],
                        type: E.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: M.reportMessage,
                        getLabel: R.content,
                        items: [T.report_emotes, T.violence, T.abusive, T.inappropriateContent, T.impersonation, T.underage, T.bitsViolation],
                        type: E.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                A = i.__assign({}, W.content, {
                    getDescription: function() {
                        return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                P = {
                    content: {
                        getTitle: M.reportProfile,
                        getLabel: R.contentGeneral,
                        items: [T.revealPersonalInfo, T.inappropriateBadge, T.inappropriateExtension, T.noModeration, T.profile_general, T.report_ip, T.violateDevAgreement, T.selfharm],
                        type: E.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: M.reportProfile,
                        getLabel: R.content,
                        items: [T.report_username, T.violence, T.abusive, T.scam, T.inappropriateContent, T.evasion, T.impersonation, T.underage, T.bitsViolation],
                        type: E.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                V = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: R.identifyUser,
                    items: [T.report_channelOwner, T.report_member],
                    value: "room report user",
                    type: E.MultipleChoice
                },
                L = {
                    getTitle: M.tellUsMore,
                    items: [T.input_description],
                    type: E.Confirm,
                    value: "tell us more"
                },
                B = {
                    banEvasion: i.__assign({}, L, {
                        items: [T.input_usernames, T.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: i.__assign({}, L, {
                        items: [T.input_link, T.input_connection, T.input_description],
                        nextCard: j.socialMedia,
                        value: "social media tell us more"
                    })
                },
                z = {
                    content: {
                        getTitle: M.reportAbusive,
                        getLabel: R.relevantStatements,
                        items: [T.hateSpeech, T.harassment, T.abusiveViolence, T.commitingViolence, T.swatting, T.personalInfo],
                        type: E.MultipleChoice,
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
                        items: [T.threat_me, T.threat_person, T.threat_group, T.threat_selfharm],
                        type: E.MultipleChoice,
                        value: "violence type"
                    }
                },
                H = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [T.location_onTwitch, T.location_anotherSite, T.location_TwitchEvent],
                        type: E.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: R.thisPersonIs,
                        getDescription: function() {
                            return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [T.external_incitingRaids, T.external_threatening, T.external_harassment],
                        type: E.MultipleChoice,
                        nextCard: B.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: i.__assign({}, z.violence, {
                        items: [T.threat_me, T.threat_person, T.threat_group],
                        nextCard: B.socialMedia
                    }),
                    external_abusive: i.__assign({}, z.content, {
                        items: [T.hateSpeech, T.harassment, T.external_abusiveViolence, T.external_commitingViolence, T.swatting, T.personalInfo],
                        nextCard: B.socialMedia
                    })
                },
                G = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: R.contentGeneral,
                    items: [T.spam_bot, T.spam_scam, T.spam_repeated],
                    type: E.MultipleChoice,
                    value: "spam type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: R.relevantStatements,
                    items: [T.inappropriate_game, T.gory, T.sexuallyViolent, T.childAnimal, T.pornographic, T.suggestive, T.nudity, T.other],
                    type: E.MultipleChoice,
                    value: "inappropriate content type"
                },
                $ = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [T.evasion_chat, T.evasion_sitewide, T.evasion_messaging],
                    type: E.MultipleChoice,
                    nextCard: B.banEvasion
                },
                Q = {
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
                    items: [T.impersonation_me, T.impersonation_brand, T.impersonation_other],
                    type: E.MultipleChoice,
                    value: "impersonation type"
                },
                K = x,
                Y = L,
                Z = U,
                J = {
                    video: F.identifyUser,
                    whisper: A,
                    chat: W.content,
                    profile: P.content,
                    room: V,
                    "somewhere else": H.identifyLocation,
                    streamer: F.content,
                    "someone else in video": F.content,
                    "someone in chat": W.content,
                    general_video: F.general,
                    general_messaging: W.general,
                    general_profile: P.general,
                    "channel owner": P.content,
                    "community member": W.content,
                    "on twitch": P.content,
                    "another site": H.externalSite,
                    "twitch event": j.twitchEvent,
                    "brigading/raids": B.socialMedia,
                    threatening: H.external_violence,
                    "hateful/harassing": H.external_abusive,
                    "external site; threatening violence": H.external_violence,
                    "external site; committing violence": H.external_violence,
                    "external site; scam": B.socialMedia,
                    "ban evasion": $,
                    spam: G,
                    hateful: z.content,
                    impersonation: Q,
                    "violence/threats": z.violence,
                    "threatening violence": z.violence,
                    "committing violence": z.violence,
                    abusive: z.content,
                    "inappropriate content": q,
                    "intellectual property": j.legal,
                    "violating developer agreement": j.legal
                },
                X = {
                    selfharm: j.selfharm,
                    harm: j.violence,
                    other: Z
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: P.content,
                    COMMUNITY_REPORT: P.content,
                    CHAT_REPORT: W.content,
                    CLIP_REPORT: F.content,
                    EVENT_REPORT: P.content,
                    EXTENSION_REPORT: P.content,
                    LIVE_UP_REPORT: P.content,
                    ROOM_REPORT: V,
                    WHISPER_REPORT: A,
                    VOD_COMMENT_REPORT: W.content
                },
                te = "report-wizard-back",
                ne = "report-wizard-close",
                re = "report-wizard-next",
                ie = "report-wizard-submit",
                ae = function(e) {
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
                            return a.createElement(k.Va, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(k.V, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(l.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = ne,
                                i = !1,
                                o = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case E.MultipleChoice:
                                    e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, r = re, i = !t.state.currentSelection;
                                    break;
                                case E.Confirm:
                                    e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, i = !t.state.userTextInput, r = ie
                            }
                            return a.createElement(k.Va, null, o, a.createElement(k.z, {
                                onClick: n,
                                disabled: i,
                                "data-test-selector": r
                            }, a.createElement(k.Va, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return a.createElement(k.Va, {
                                margin: {
                                    right: 1
                                },
                                display: k.W.InlineBlock
                            }, a.createElement(k.z, {
                                type: k.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": te
                            }, a.createElement(k.Va, {
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
                                return t.props.trackClose(w.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    i = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || Y;
                                J[t.state.currentSelection.value] && (s = J[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === E.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: c ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: a,
                                    currentSelection: i || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(I.Next, e.value)
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
                                    i = n && 0 === n.trim().length;
                                return !n || i
                            }).length
                        }, t.handleSubmit = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a = this;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, null, null, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (i.sent(), this.props.submitStatus) {
                                                case N.b.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case N.b.Success:
                                                    r = Z, X[t] && (r = X[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return a.trackNavigation(I.Submit)
                                                    });
                                                    break;
                                                case N.b.UserError:
                                                    this.setState({
                                                        error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case N.b.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(N.b.FormError), this.setState({
                                                error: e
                                            }), i.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a, o = this;
                                return i.__generator(this, function(i) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, a = this.state.displacedSelections, this.state.currentSelection && (a = a.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: a,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return o.trackNavigation(I.Back, e.value)
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
                        this.state.modalCloseTracked || this.props.trackClose(w.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === E.Info && this.state.currentCard.blockPrompt ? a.createElement(S, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? a.createElement(k.xb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === E.Info ? null : this.renderPrimer();
                        return a.createElement(k.xb, {
                            className: "reporting-wizard",
                            display: k.W.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: k.Y.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, a.createElement(k.V, {
                            bold: !0,
                            fontSize: k.Aa.Size4
                        }, this.getTitle()), n, a.createElement(k.Va, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(D, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === N.b.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(a.Component),
                oe = n("+PZR"),
                se = n("PDCe"),
                le = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return I
                }), n.d(t, "a", function() {
                    return w
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(O || (O = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(I || (I = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(w || (w = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r, a, o) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, s, c, d, u = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e !== N.a) return [3, 5];
                                        c = {
                                            userID: this.props.data.targetUser.id,
                                            communityID: r || "",
                                            reason: t
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(p.a)(c))];
                                    case 2:
                                        return i.sent(), l.o.tracking.track(f.SpadeEventType.CommunityModeration, {
                                            community_id: r,
                                            name: a,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: N.b.Success
                                        }, function() {
                                            u.state.showWizard || u.trackAction(O.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), l.j.error(n, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: N.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        if (s = o === _.a.Whisper ? o : this.props.reportContext.contentType, c = {
                                                description: t,
                                                reason: e,
                                                content: s,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }, this.props.reportContext.contentType === _.a.Community && this.props.reportContext.extra && (c.description = Object(oe.a)(this.props.reportContext.extra, t)), null === c.targetID) return this.setState({
                                            submitStatus: N.b.UserError
                                        }), [2];
                                        i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(c))];
                                    case 7:
                                        return i.sent(), this.props.reportContext.contentType === _.a.Community && l.o.tracking.track(f.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: N.b.Success
                                        }, function() {
                                            u.state.showWizard || u.trackAction(O.Submit)
                                        }), [3, 9];
                                    case 8:
                                        return d = i.sent(), l.j.error(d, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: N.b.MutationError
                                        }), [3, 9];
                                    case 9:
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
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(I.Open, void 0, e) : n.trackAction(O.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(I.Close, t, void 0, e) : n.trackAction(O.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, i) {
                        l.o.tracking.track(f.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === N.b.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: i,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        l.o.tracking.track(f.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === N.b.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var r = l.o.experiments.getAssignment(h.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: N.b.Unsubmitted,
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
                    if (this.props.data.error) return a.createElement(k.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k.V, {
                        fontSize: k.Aa.Size5
                    }, Object(l.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return a.createElement(k.cb, {
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
                        return this.state.showWizard ? this.props.data.loading ? a.createElement(k.Xa, null) : a.createElement(ae, i.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : a.createElement(N.c, i.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return a.createElement(k.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k.V, {
                        fontSize: k.Aa.Size5
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
            }(a.Component);
            var ue = Object(s.compose)(Object(c.a)(se, {
                name: "reportUserInCommunity"
            }), Object(c.a)(le, {
                name: "reportUser"
            }), Object(c.a)(ce, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(g.c)("ReportUser", {
                autoReportInteractive: !0
            }), Object(d.a)(), Object(u.a)(), Object(o.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(de)
        },
        "dNN/": function(e, t, n) {},
        "dr/4": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Thread_SetMuteThread"
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
                                    value: "UpdateWhisperThreadInput"
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
                                value: "updateWhisperThread"
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
                                        value: "thread"
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
                                                value: "isMuted"
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
                    end: 129
                }
            };
            n.loc.source = {
                body: "mutation Thread_SetMuteThread($input: UpdateWhisperThreadInput!) {\nupdateWhisperThread(input: $input) {\nthread {\nid\nisMuted\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        efEE: function(e, t, n) {},
        fbdC: function(e, t, n) {
            "use strict";
            var r, i = n("/MKj"),
                a = n("fvjX"),
                o = n("aCAx"),
                s = n("mrSG"),
                l = n("q1tI"),
                c = n("/7QA"),
                d = n("cZKs"),
                u = n("Ue10");
            ! function(e) {
                e.Message = "confirmation-modal__message", e.ConfirmButton = "confirmation-modal__confirm-button"
            }(r || (r = {}));
            var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCancelClick = function() {
                        t.props.closeModal()
                    }, t.renderConfirmButton = function() {
                        return l.cloneElement(t.props.confirmButton, {
                            onClick: t.handleConfirmClick,
                            "data-test-selector": r.ConfirmButton
                        })
                    }, t.handleConfirmClick = function() {
                        t.props.closeModal(), t.props.onConfirmClick()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u.xb, {
                        background: u.r.Base,
                        padding: {
                            x: 3,
                            top: 3,
                            bottom: 2
                        },
                        display: u.W.Flex,
                        flexDirection: u.Y.Column
                    }, l.createElement(u.Va, {
                        "data-test-selector": r.Message
                    }, this.props.message), l.createElement(u.Va, {
                        display: u.W.Flex,
                        flexDirection: u.Y.Row,
                        justifyContent: u.Ua.Center,
                        padding: {
                            top: 2
                        }
                    }, l.createElement(u.Va, {
                        padding: {
                            right: .5
                        }
                    }, l.createElement(u.z, {
                        type: u.F.Text,
                        onClick: this.handleCancelClick
                    }, Object(c.d)("Cancel", "SettingsConfirmationModal"))), l.createElement(u.Va, {
                        padding: {
                            left: .5
                        }
                    }, this.renderConfirmButton())), l.createElement(d.a, null))
                }, t
            }(l.Component);
            var m = Object(i.connect)(null, function(e) {
                return Object(a.bindActionCreators)({
                    closeModal: o.c
                }, e)
            })(p);
            n.d(t, "a", function() {
                return m
            }), n.d(t, !1, function() {})
        },
        gDzh: function(e, t, n) {},
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
        gTu3: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Default = 0] = "Default", e[e.Recipient = 1] = "Recipient", e[e.Sender = 2] = "Sender"
                }(r || (r = {}))
        },
        hRS0: function(e, t, n) {},
        i6WW: function(e, t, n) {
            "use strict";
            var r = n("/7QA"),
                i = n("RcPG"),
                a = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?"),
                o = new RegExp("(?:^|\\s)(?:https?:\\/\\/)?(?:www\\.)?twitch\\.tv\\/(\\w+)\\/clip\\/(\\w+)(?:$|\\s)?");
            var s = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?");
            n.d(t, "a", function() {
                return c
            });
            var l = /^(?:(https?:\/\/)?((?:[\w#%\-+=:~]+\.)+[a-z]{2,8}(?:\/[\w./#%&()\-+=:?~]*)?))$/;

            function c(e, t) {
                var n = e.match(l);
                if (!n) return null;
                if (t.blockLinks) return {
                    type: i.a.Text,
                    content: " <" + Object(r.d)("deleted link", "CreateMessageData") + "> "
                };
                var c = n[1],
                    d = n[2],
                    u = "" + (c || "https://") + d;
                if (t.parseClips && function(e) {
                        void 0 === e && (e = "");
                        var t = a.test(e) && !e.includes("clips.twitch.tv/2017/"),
                            n = o.test(e);
                        return t || n
                    }(u)) {
                    var p = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(a);
                        if (t && t.length > 0 && void 0 !== t.index) return t[1];
                        var n = e.match(o);
                        return n && n.length > 0 && void 0 !== n.index ? n[2] : ""
                    }(u);
                    return {
                        type: i.a.ClipLink,
                        content: {
                            slug: p,
                            url: u,
                            displayText: e
                        }
                    }
                }
                if (t.parseVods && function(e) {
                        return void 0 === e && (e = ""), s.test(e)
                    }(u)) {
                    var m = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(s);
                        return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                    }(u);
                    return {
                        type: i.a.VideoLink,
                        content: {
                            id: m,
                            url: u,
                            displayText: e
                        }
                    }
                }
                return {
                    type: i.a.Link,
                    content: {
                        displayText: e,
                        url: u
                    }
                }
            }
        },
        iS14: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                i = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("zixI");

            function l() {
                var e = this;
                return Object(i.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, i) {
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
                                                            id: Object(o.a)(i),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(i),
                                                            fragment: a,
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
        j0ar: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("TSYQ"),
                a = n("q1tI"),
                o = n("x1M1"),
                s = n("Ue10"),
                l = (n("9KaG"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onImageLoad = function() {
                            n.setState({
                                imageLoaded: !0
                            })
                        }, n.onMouseOver = function() {
                            n.setState({
                                isHovering: !0
                            })
                        }, n.onMouseOut = function() {
                            n.setState({
                                isHovering: !1
                            })
                        }, n.renderImage = function() {
                            var e = null,
                                t = i("chat-image", {
                                    "chat-image__animated": !!n.props.cheerText && n.state.imageLoaded
                                }, n.props.className);
                            if (n.props.srcSet.themed) e = a.createElement(s.Na, {
                                display: n.state.imageLoaded ? s.W.InlineBlock : s.W.Hide
                            }, a.createElement(o.a, {
                                alt: n.props.alt,
                                className: t,
                                defaultRes: n.props.srcKey,
                                onLoad: n.onImageLoad,
                                onMouseOver: n.onMouseOver,
                                onMouseOut: n.onMouseOut,
                                sources: n.props.srcSet
                            }));
                            else {
                                for (var r = [], l = 0, c = Object.keys(n.props.srcSet.sources); l < c.length; l++) {
                                    var d = c[l];
                                    r.push(n.props.srcSet.sources[d] + " " + d)
                                }
                                e = a.createElement(s.Na, {
                                    display: n.state.imageLoaded ? s.W.InlineBlock : s.W.Hide
                                }, a.createElement("img", {
                                    className: t,
                                    onLoad: n.onImageLoad,
                                    onMouseOver: n.onMouseOver,
                                    onMouseOut: n.onMouseOut,
                                    src: n.props.srcSet.sources[n.props.srcKey],
                                    srcSet: r.join(","),
                                    alt: n.props.alt
                                }))
                            }
                            return e
                        }, n.renderPlaceholder = function() {
                            return n.state.imageLoaded ? null : a.createElement(s.Na, {
                                display: s.W.InlineBlock
                            }, a.createElement(s.V, {
                                type: s.Nb.Span,
                                className: "chat-image__placeholder",
                                align: s.Xb.Top
                            }, a.createElement(s.cb, {
                                height: 28,
                                width: 28
                            })))
                        }, n.state = {
                            imageLoaded: !1,
                            isHovering: !1
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.state.isHovering && this.state.imageLoaded ? a.createElement(s.Qb, {
                            direction: this.props.tooltipDirection || s.Sb.Top,
                            label: this.props.alt,
                            display: s.W.Inline,
                            offsetY: "0.9rem",
                            "data-a-target": "emote-name"
                        }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText) : a.createElement("span", {
                            "data-a-target": "emote-name"
                        }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText), this.props.cheerText ? a.createElement(s.V, {
                            type: s.Nb.Span,
                            noWrap: !0
                        }, e) : e
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        jPWu: function(e, t, n) {},
        kPBf: function(e, t) {},
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
        lZZ2: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("fbdC"),
                c = n("BhFH"),
                d = n("QVaV"),
                u = n("aCAx"),
                p = n("Ue10");

            function m(e) {
                return function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.showBlockModal = function(t) {
                            return e.props.showConfirmationModal({
                                confirmButton: e.renderBlockButton(),
                                onConfirmClick: function() {
                                    e.props.blockUserMutation(t.userID, t.reason, t.context, t.currentUserData), t.onBlock && t.onBlock()
                                },
                                message: e.renderMessage(t.login, t.displayName)
                            })
                        }, e
                    }
                    return r.__extends(n, t), n.prototype.render = function() {
                        return i.createElement(e, r.__assign({}, this.props, {
                            showBlockModal: this.showBlockModal
                        }))
                    }, n.prototype.renderBlockButton = function() {
                        return i.createElement(p.z, {
                            type: p.F.Alert
                        }, Object(s.d)("Block", "BlockModal"))
                    }, n.prototype.renderMessage = function(e, t) {
                        var n = Object(d.a)(e, t, !0);
                        return i.createElement(i.Fragment, null, i.createElement(p.xb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            },
                            textAlign: p.Jb.Center
                        }, i.createElement(p.V, {
                            bold: !0,
                            type: p.Nb.H4
                        }, Object(s.d)("Block {displayName}?", {
                            displayName: n
                        }, "BlockModal"))), i.createElement(p.xb, {
                            color: p.O.Alt2,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(p.Wb, {
                            baseFontSize: p.Aa.Size6
                        }, i.createElement("p", null, Object(s.d)("Blocking {displayName} will:", {
                            displayName: n
                        }, "BlockModal")), i.createElement("ul", null, i.createElement("li", null, Object(s.d)("Prevent them from sending you whispers", "BlockModal")), i.createElement("li", null, Object(s.d)("Prevent them from hosting you", "BlockModal")), i.createElement("li", null, Object(s.d)("Prevent them from adding you as a friend", "BlockModal")), i.createElement("li", null, Object(s.d)("Filter their messages out of chats you don’t moderate", "BlockModal"))))))
                    }, n
                }(i.Component)
            }
            var h = Object(o.compose)(Object(c.a)(), Object(a.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showConfirmationModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(u.d)(l.a, t)
                    }
                }, e)
            }), m);
            n.d(t, !1, function() {
                return m
            }), n.d(t, "a", function() {
                return h
            })
        },
        lZdE: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "lpj/": function(e, t, n) {},
        mBWp: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Whispers_Tracking_CurrentUser"
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
                                        value: "hasTurbo"
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
                    end: 86
                }
            };
            n.loc.source = {
                body: "query Whispers_Tracking_CurrentUser {\ncurrentUser {\nid\nhasTurbo\navailability\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        mmRu: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("mrSG"),
                a = n("q1tI"),
                o = n("u5aL"),
                s = n("/7QA"),
                l = n("Ue10"),
                c = function(e) {
                    return a.createElement(l.A, {
                        icon: l.nb.Emoticons,
                        ariaLabel: Object(s.d)("Emote picker", "EmotePickerButton"),
                        type: l.C.Secondary,
                        onClick: e.onClick,
                        "data-a-target": "emote-picker-button"
                    })
                },
                d = n("oJmH"),
                u = n("fvjX"),
                p = n("lZCe"),
                m = n("ZS2+"),
                h = n("yR8l"),
                f = n("x7UT"),
                g = n("Mj6i"),
                v = n("UUve"),
                k = n("1/iK"),
                b = n("aCAx"),
                y = n("D7An"),
                S = n("kRBY"),
                _ = n("+pBb"),
                E = n("GzyO"),
                C = n("OpME"),
                T = n("cpJf"),
                D = n("W8Fi"),
                N = n("0WFu"),
                O = n("GnwI"),
                I = n("br9A"),
                w = n("TSYQ"),
                R = n("8/mp"),
                M = n("8Ad5");

            function U(e) {
                return e.charCode === M.a.Enter || e.charCode === M.a.Space
            }
            var j = n("2xye"),
                x = n("7SjK"),
                F = n("4rCz"),
                W = (n("/Kya"), function(e) {
                    var t = {
                            "emote-picker__tab": !0
                        },
                        n = null,
                        r = null;
                    if (e.channelTabVisible) {
                        var o = w(i.__assign({}, t, {
                            "emote-picker__tab--active": e.channelTabEnabled && e.channelTabSelected,
                            "emote-picker__tab--disabled": !e.channelTabEnabled
                        }));
                        n = a.createElement(l.Na, {
                            padding: {
                                x: 1
                            }
                        }, a.createElement("div", {
                            key: "ChannelTabLink",
                            id: "emote-picker__channel",
                            className: o,
                            onClick: e.channelTabEnabled ? e.selectChannelTab : void 0,
                            onKeyPress: e.channelTabEnabled ? e.selectChannelTabKeypress : void 0,
                            "data-a-target": "emote-channel-tab",
                            tabIndex: 0
                        }, a.createElement("span", null, Object(F.d)("Channel", "EmotePicker"))))
                    }
                    if (e.allTabVisible) {
                        var s = w(i.__assign({}, t, {
                            "emote-picker__tab--active": !(e.channelTabSelected && e.channelTabEnabled)
                        }));
                        r = a.createElement(l.Na, {
                            padding: {
                                x: 1
                            }
                        }, a.createElement("div", {
                            key: "allTabLink",
                            id: "emote-picker__all",
                            className: s,
                            onClick: e.selectAllTab,
                            onKeyPress: e.selectAllTabKeypress,
                            "data-a-target": "emote-all-tab",
                            tabIndex: 0
                        }, a.createElement("span", null, Object(F.d)("All", "EmotePicker"))))
                    }
                    return a.createElement(l.xb, {
                        background: l.r.Base,
                        borderTop: !0,
                        className: "emote-picker__tabs-container"
                    }, n, r)
                }),
                A = n("DnOo"),
                P = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = [];
                        if (this.props.subscribeTexts)
                            for (var t = 0; t <= this.props.plan.level; t++) {
                                var n = this.props.subscribeTexts[t];
                                n && (t < this.props.plan.level ? (e.push(a.createElement("span", {
                                    key: "upsell-predicate:" + t
                                }, n)), e.push(a.createElement("span", {
                                    key: "upsell-plus:" + t
                                }, " + "))) : this.props.plan.level > 0 ? e.push(a.createElement("strong", {
                                    key: "upsell-strong-end:" + this.props.plan.level
                                }, n)) : e.push(a.createElement("span", {
                                    key: "upsell-end:" + t
                                }, n)))
                            }
                        if (!this.props.plan.emoteSetID) return null;
                        var r = {
                                id: this.props.plan.emoteSetID,
                                emotes: this.props.plan.emotes || []
                            },
                            i = {};
                        if (this.props.plan.tier) {
                            var o = Object(N.a)(this.props.plan.tier);
                            null === o && (o = 1), i.purchase = Object(s.d)("Tier { tierNum }", {
                                tierNum: o
                            }, "assembleSubscribeTexts")
                        }
                        return a.createElement(l.Va, {
                            className: "emote-picker-plan-upsell",
                            display: l.W.Flex,
                            flexDirection: l.Y.Column,
                            alignItems: l.f.Center,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(x.a, {
                            emotes: r.emotes,
                            locked: !0
                        }), a.createElement(l.Va, {
                            margin: 1,
                            alignItems: l.f.Center
                        }, e), a.createElement(A.a, {
                            isSubbedToTier: !1,
                            tierPrice: i.purchase || "",
                            handleSubAction: this.props.handleSubAction,
                            productName: this.props.plan.name,
                            url: this.props.plan.url,
                            isEsportChannel: this.props.isEsportChannel
                        }))
                    }, t
                }(a.Component),
                V = (n("JGCS"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.channelTabSelectionKeypress = function(e) {
                            U(e) && n.selectChannelTab(e)
                        }, n.allTabSelectionKeypress = function(e) {
                            U(e) && n.selectAllTab(e)
                        }, n.onClickEmote = function(e) {
                            if (n.props.onClickEmote) {
                                n.props.onClickEmote(e.displayName || e.token, e.id);
                                var t = {
                                    channel_id: n.props.channelID,
                                    chatroom_id: n.props.roomID,
                                    emote_picker_sid: n.props.emotePickerSessionID,
                                    emote_id: e.id,
                                    emoticon_set_id: e.setID,
                                    generated_by: n.props.emotePickerSource
                                };
                                s.n.track(j.SpadeEventType.EmotePickerClickthrough, t)
                            }
                        }, n.closeOnEsc = function(e) {
                            e.keyCode === M.a.Esc && n.props.toggleVisibility()
                        }, n.handleFilterChange = function(e) {
                            var t = e.target.value,
                                r = t.toLowerCase(),
                                i = n.filterAvailableUpsells(n.props.availableUpsells, r),
                                a = n.filterEmoteSets(n.props.ownedChannelEmoteSets, r);
                            n.setState({
                                filter: r,
                                filteredAllEmoteSets: n.filterEmoteSets(n.props.allEmoteSets, r),
                                filteredAvailableUpsells: i,
                                filteredOwnedChannelEmoteSets: a,
                                inputValue: t,
                                channelTabEnabled: a.length > 0 || i.length > 0
                            })
                        }, n.state = {
                            filter: "",
                            filteredOwnedChannelEmoteSets: t.ownedChannelEmoteSets,
                            filteredAvailableUpsells: t.availableUpsells,
                            filteredAllEmoteSets: t.allEmoteSets,
                            inputValue: "",
                            channelTabSelected: !0,
                            channelTabEnabled: t.ownedChannelEmoteSets.length > 0 || t.availableUpsells.length > 0
                        }, n.selectAllTab = function() {
                            return n.setChannelTabSelected(!1)
                        }, n.selectChannelTab = function() {
                            return n.setChannelTabSelected(!0)
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        if (e.channelID && e.emotePickerSessionID && !this.props.emotePickerSessionID) {
                            var t = {
                                channel_id: e.channelID,
                                emote_picker_sid: e.emotePickerSessionID,
                                generated_by: e.emotePickerSource,
                                chatroom_id: e.roomID
                            };
                            s.n.track(j.SpadeEventType.ViewedEmotePicker, t)
                        }
                        if (!e.gqlError)
                            if (this.state.filter.length > 0) {
                                var n = this.filterAvailableUpsells(this.props.availableUpsells, this.state.filter),
                                    r = this.filterEmoteSets(this.props.ownedChannelEmoteSets, this.state.filter);
                                this.setState({
                                    filteredAllEmoteSets: this.filterEmoteSets(this.props.allEmoteSets, this.state.filter),
                                    filteredAvailableUpsells: n,
                                    filteredOwnedChannelEmoteSets: r,
                                    channelTabEnabled: r.length > 0 || n.length > 0
                                })
                            } else this.setState({
                                filteredOwnedChannelEmoteSets: e.ownedChannelEmoteSets,
                                filteredAvailableUpsells: e.availableUpsells,
                                filteredAllEmoteSets: e.allEmoteSets,
                                channelTabEnabled: e.ownedChannelEmoteSets.length > 0 || e.availableUpsells.length > 0
                            })
                    }, t.prototype.render = function() {
                        return a.createElement(l.u, {
                            "data-a-target": "emote-picker",
                            direction: this.props.direction ? this.props.direction : l.v.TopRight,
                            size: this.props.size ? this.props.size : l.w.Medium,
                            noTail: !0,
                            show: !0
                        }, a.createElement(l.Va, {
                            className: w("emote-picker")
                        }, this.renderTabContent(), a.createElement(l.Va, {
                            className: "emote-picker__controls-container",
                            position: l.db.Relative
                        }, a.createElement(l.xb, {
                            padding: 1,
                            borderTop: !0
                        }, a.createElement(l.Pa, {
                            autoFocus: !0,
                            onChange: this.handleFilterChange,
                            onKeyDown: this.closeOnEsc,
                            placeholder: Object(s.d)("Search for Emotes", "EmotePicker"),
                            type: l.Ra.Text,
                            value: this.state.inputValue
                        })), a.createElement(W, {
                            allTabVisible: this.props.allEmoteSets.length > 0,
                            channelTabEnabled: this.state.channelTabEnabled,
                            channelTabSelected: this.state.channelTabSelected,
                            channelTabVisible: !!this.props.channelTabVisible,
                            selectAllTab: this.selectAllTab,
                            selectAllTabKeypress: this.allTabSelectionKeypress,
                            selectChannelTab: this.selectChannelTab,
                            selectChannelTabKeypress: this.channelTabSelectionKeypress
                        }))))
                    }, t.prototype.renderTabContent = function() {
                        var e = this,
                            t = [];
                        if (this.props.gqlError) t.push(a.createElement(l.Va, {
                            key: "emotePicker-error"
                        }, a.createElement(l.V, {
                            color: l.O.Error
                        }, Object(s.d)("Unable to load available emotes.", "EmotePicker"))));
                        else if (this.props.loading) t.push(a.createElement(l.Va, {
                            alignItems: l.f.Center,
                            display: l.W.Flex,
                            key: "loading",
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: l.Ua.Center
                        }, a.createElement(l.Xa, {
                            key: "LoadingSpinner"
                        })));
                        else if (this.state.channelTabEnabled && this.state.channelTabSelected) {
                            if (this.state.filteredOwnedChannelEmoteSets.length > 0) {
                                var n = this.state.filteredOwnedChannelEmoteSets[0].emotes.map(function(t) {
                                    return t.setID = e.state.filteredOwnedChannelEmoteSets[0].id, t
                                });
                                t.push(a.createElement(l.Va, {
                                    className: "emote-picker__content-block",
                                    key: "ownedChannelEmoteSets",
                                    padding: 1,
                                    position: l.db.Relative
                                }, a.createElement(x.a, {
                                    emotes: n,
                                    onClickEmote: this.onClickEmote,
                                    locked: !1
                                })))
                            }
                            t = t.concat(this.state.filteredAvailableUpsells.map(function(t) {
                                return a.createElement(l.Va, {
                                    className: "emote-picker__content-block",
                                    key: "planUpsell:" + t.level,
                                    padding: 1,
                                    position: l.db.Relative
                                }, a.createElement(P, {
                                    plan: t,
                                    isEsportChannel: e.props.isEsportChannel,
                                    subscribeTexts: e.props.subscribeTexts,
                                    handleSubAction: e.props.handleSubAction
                                }))
                            }))
                        } else t = this.state.filteredAllEmoteSets.map(function(t) {
                            var n = [];
                            return t.emotes.forEach(function(e) {
                                e.setID = t.id, n.push(e)
                            }), a.createElement(l.Va, {
                                key: "emoteGrid" + t.id,
                                position: l.db.Relative,
                                padding: {
                                    top: 1,
                                    bottom: 2
                                },
                                className: "emote-picker__content-block"
                            }, a.createElement(x.a, {
                                emotes: n,
                                onClickEmote: e.onClickEmote,
                                locked: !1
                            }))
                        });
                        return t.length > 0 ? a.createElement(R.b, {
                            className: "emote-picker__tab-content"
                        }, a.createElement(l.Va, {
                            padding: 1
                        }, t)) : null
                    }, t.prototype.filterEmoteSet = function(e, t) {
                        return e.filter(function(e) {
                            return e.token.toLowerCase().includes(t)
                        })
                    }, t.prototype.setChannelTabSelected = function(e) {
                        this.setState({
                            channelTabSelected: e
                        })
                    }, t.prototype.filterEmoteSets = function(e, t) {
                        for (var n = [], r = 0, i = e; r < i.length; r++) {
                            var a = i[r],
                                o = this.filterEmoteSet(a.emotes, t);
                            o.length > 0 && n.push({
                                id: a.id,
                                emotes: o
                            })
                        }
                        return n
                    }, t.prototype.filterAvailableUpsells = function(e, t) {
                        for (var n = [], r = 0, a = e; r < a.length; r++) {
                            var o = a[r];
                            if (o.emotes) {
                                var s = this.filterEmoteSet(o.emotes, t);
                                s.length > 0 && n.push(i.__assign({}, o, {
                                    emotes: s
                                }))
                            }
                        }
                        return n
                    }, t = i.__decorate([Object(O.c)("EmotePickerMenu", {
                        autoReportInteractive: !0
                    })], t)
                }(a.Component)),
                L = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onClickEmote = function(e) {
                            if (n.props.onClickEmote) {
                                n.props.onClickEmote(e.displayName || e.token, e.id);
                                var t = {
                                    channel_id: n.props.channelID,
                                    chatroom_id: n.props.roomID,
                                    emote_picker_sid: n.props.emotePickerSessionID,
                                    emote_id: e.id,
                                    emoticon_set_id: e.setID,
                                    generated_by: n.props.emotePickerSource
                                };
                                s.n.track(j.SpadeEventType.EmotePickerClickthrough, t)
                            }
                        }, n.handleFilterChange = function(e) {
                            var t = e.target.value,
                                r = t.toLowerCase();
                            n.setState({
                                filter: r,
                                inputValue: t,
                                filteredEmotes: n.filterEmoteSets(n.props.allEmoteSets, r)
                            })
                        }, n.filterEmoteSets = function(e, t) {
                            var n = [];
                            e.forEach(function(e) {
                                e.emotes.filter(function(e) {
                                    return e.token.toLowerCase().includes(t)
                                }).forEach(function(t) {
                                    t.setID = e.id, n.push(t)
                                })
                            });
                            var r = Object(E.d)(),
                                i = 0 === Object.keys(r).length ? void 0 : r;
                            return Object(C.f)(n, t, i)
                        }, n.state = {
                            filter: "",
                            filteredEmotes: [],
                            inputValue: ""
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.channelID) {
                            var e = {
                                channel_id: this.props.channelID,
                                emote_picker_sid: this.props.emotePickerSessionID,
                                generated_by: this.props.emotePickerSource,
                                chatroom_id: this.props.roomID
                            };
                            s.n.track(j.SpadeEventType.ViewedEmotePicker, e)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(o.a, {
                            onClickOut: this.props.toggleVisibility
                        }, a.createElement(l.u, {
                            "data-a-target": "emote-picker",
                            direction: this.props.direction ? this.props.direction : l.v.TopRight,
                            size: this.props.size ? this.props.size : l.w.Medium,
                            noTail: !0,
                            show: !0
                        }, a.createElement(l.Va, {
                            className: "emote-picker"
                        }, a.createElement(l.xb, {
                            padding: {
                                x: 1,
                                top: 1
                            },
                            borderTop: !0
                        }, a.createElement(l.Pa, {
                            autoFocus: !0,
                            onChange: this.handleFilterChange,
                            placeholder: Object(s.d)("Search for Emotes", "EmotePickerCard"),
                            type: l.Ra.Text,
                            value: this.state.inputValue
                        })), this.renderTabContent())))
                    }, t.prototype.renderTabContent = function() {
                        return this.props.gqlError ? a.createElement(l.Va, null, a.createElement(l.V, {
                            "data-test-selector": "emote-picker-menu-error-text",
                            color: l.O.Error
                        }, Object(s.d)("Unable to load available emotes.", "EmotePickerCard"))) : this.props.loading ? a.createElement(l.Va, {
                            alignItems: l.f.Center,
                            display: l.W.Flex,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: l.Ua.Center
                        }, a.createElement(l.Xa, null)) : "" !== this.state.filter ? this.renderSearchContent() : a.createElement(R.b, {
                            className: "emote-picker__tab-content"
                        }, a.createElement(l.Va, {
                            padding: {
                                x: 1
                            }
                        }, this.getFrequentEmotesGrid(), this.getChannelEmoteGrid(), this.getResidualEmoteGrids()))
                    }, t.prototype.getFrequentEmotesGrid = function() {
                        return this.props.frequentlyUsedEmotes.length > 0 ? a.createElement(l.Va, {
                            key: "emote-grid--frequent-emotes",
                            position: l.db.Relative,
                            padding: {
                                y: 1
                            },
                            className: "emote-picker__content-block"
                        }, a.createElement(l.Va, {
                            padding: {
                                x: 2
                            }
                        }, a.createElement(l.V, {
                            bold: !0,
                            color: l.O.Alt
                        }, Object(s.d)("Frequently Used Emotes", "EmotePickerCard"))), a.createElement(x.a, {
                            emotes: this.props.frequentlyUsedEmotes,
                            onClickEmote: this.onClickEmote,
                            locked: !1
                        })) : null
                    }, t.prototype.getChannelEmoteGrid = function() {
                        var e = this.props.channelSubscriptionProducts.reduce(function(e, t) {
                            return e.concat(t.emotes)
                        }, []);
                        return e.length > 0 ? a.createElement(l.Va, {
                            key: "emote-grid--channel-emotes",
                            position: l.db.Relative,
                            padding: {
                                y: 1
                            },
                            className: "emote-picker__content-block"
                        }, a.createElement(l.Va, {
                            padding: {
                                x: 2
                            }
                        }, a.createElement(l.V, {
                            bold: !0,
                            color: l.O.Alt
                        }, Object(s.d)("ThisChannel Placeholder", "EmotePickerCard"))), a.createElement(x.a, {
                            emotes: e,
                            onClickEmote: this.onClickEmote,
                            locked: !1
                        })) : null
                    }, t.prototype.getResidualEmoteGrids = function() {
                        var e = new Set;
                        this.props.channelSubscriptionProducts.forEach(function(t) {
                            t.emoteSetID && e.add(t.emoteSetID)
                        });
                        var t = [],
                            n = [];
                        this.props.allEmoteSets.filter(function(t) {
                            return !e.has(t.id)
                        }).reduce(function(e, t) {
                            return e.concat(t.emotes)
                        }, []).forEach(function(e) {
                            "0" === e.setID ? t.push(e) : n.push(e)
                        });
                        var r = [];
                        return n.length > 0 && r.push(a.createElement(l.Va, {
                            key: "emote-grid--non-global-emotes",
                            position: l.db.Relative,
                            padding: {
                                y: 1
                            },
                            className: "emote-picker__content-block"
                        }, a.createElement(l.Va, {
                            padding: {
                                x: 2
                            }
                        }, a.createElement(l.V, {
                            bold: !0,
                            color: l.O.Alt
                        }, Object(s.d)("Placeholder for Residual Emotes", "EmotePickerCard"))), a.createElement(x.a, {
                            emotes: n,
                            onClickEmote: this.onClickEmote,
                            locked: !1
                        }))), t.length > 0 && r.push(a.createElement(l.Va, {
                            key: "emote-grid--global-emotes",
                            position: l.db.Relative,
                            padding: {
                                y: 1
                            },
                            className: "emote-picker__content-block"
                        }, a.createElement(l.Va, {
                            padding: {
                                x: 2
                            }
                        }, a.createElement(l.V, {
                            bold: !0,
                            color: l.O.Alt
                        }, Object(s.d)("Global Twitch Emotes", "EmotePickerCard"))), a.createElement(x.a, {
                            emotes: t,
                            onClickEmote: this.onClickEmote,
                            locked: !1
                        }))), a.createElement(a.Fragment, null, r)
                    }, t.prototype.renderSearchContent = function() {
                        var e;
                        return e = this.state.filteredEmotes.length > 0 ? a.createElement(l.V, null, Object(s.d)('Search Results for "{inputValue}"', {
                            inputValue: this.state.inputValue
                        }, "EmotePickerCard")) : a.createElement(l.V, null, Object(s.d)('No Search Results for "{inputValue}"', {
                            inputValue: this.state.inputValue
                        }, "EmotePickerCard")), a.createElement(R.b, {
                            className: "emote-picker__tab-content"
                        }, a.createElement(l.Va, {
                            padding: 1
                        }, a.createElement(l.Va, {
                            position: l.db.Relative,
                            padding: {
                                top: 1,
                                bottom: 2
                            },
                            className: "emote-picker__content-block"
                        }, e, a.createElement(x.a, {
                            emotes: this.state.filteredEmotes,
                            onClickEmote: this.onClickEmote,
                            locked: !1
                        }))))
                    }, t
                }(a.Component),
                B = n("DB+C"),
                z = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.handleSubEvent = function(e) {
                            e.action === I.a.ClickCheckout && n.checkAndDisplaySubscriptionCheckout(), Object(I.b)(i.__assign({}, e, {
                                action: I.a.ClickCheckout,
                                channelID: n.props.channelData && n.props.channelData.user && n.props.channelData.user.id || "",
                                channelLogin: n.props.channelData && n.props.channelData.user && n.props.channelData.user.displayName || "",
                                isMenuOpen: null,
                                hasSubCredit: null,
                                sub_location: "emote_picker",
                                modal: !1,
                                showPrimeContent: !0,
                                giftRecipient: null
                            }))
                        };
                        var r = {
                            allEmoteSets: [],
                            availableUpsells: [],
                            channelSubscriptionProducts: [],
                            channelTabVisible: !1,
                            frequentlyUsedEmotes: [],
                            gqlError: t.emoteSetsData && !!t.emoteSetsData.error || t.channelData && !!t.channelData.error || !1,
                            gqlLoading: t.emoteSetsData && !!t.emoteSetsData.loading || t.channelData && !!t.channelData.loading || !1,
                            subscribeTexts: [],
                            ownedChannelEmoteSets: [],
                            ownedSetIDs: new Set([])
                        };
                        return r = n.applyDataPropsToState(t, r), n.state = i.__assign({}, r), n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(E.b)(), this.checkDataLoaded(this.props) && (this.props.onLoad && this.props.onLoad(this.checkForContent(this.props)), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (e.emoteSetsData && e.emoteSetsData.error || e.channelData && e.channelData.error) this.setState({
                            gqlError: !0
                        });
                        else {
                            var t = this.applyDataPropsToState(e, this.state);
                            this.props.pubsub.messages.subscriptionInfo !== e.pubsub.messages.subscriptionInfo && (this.props.channelData && this.props.channelData.refetch(), this.props.emoteSetsData && this.props.emoteSetsData.refetch()), this.checkDataLoaded(e) && (e.latencyTracking.reportInteractive(), e.onLoad && e.onLoad(this.checkForContent(e)), t.gqlLoading = !1), this.setState(i.__assign({}, t, {
                                gqlError: !1
                            }))
                        }
                        e.visible && !this.props.visible ? (this.props.openEmotePicker(), this.setState({
                            frequentlyUsedEmotes: Object(E.c)()
                        })) : this.props.visible && !e.visible && this.props.closeEmotePicker()
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.closeEmotePicker()
                    }, t.prototype.render = function() {
                        if (!this.props.visible) return null;
                        var e = this.props.channelData && this.props.channelData.user && this.props.channelData.user.campaignProperties && this.props.channelData.user.campaignProperties.domains && this.props.channelData.user.campaignProperties.domains.length > 0 || !1,
                            t = a.createElement(V, {
                                allEmoteSets: this.state.allEmoteSets,
                                availableUpsells: this.state.availableUpsells,
                                channelTabVisible: this.state.channelTabVisible,
                                channelID: this.props.channelOwnerID,
                                direction: this.props.direction,
                                emotePickerSessionID: this.props.emotePickerSessionID,
                                emotePickerSource: this.props.emotePickerSource,
                                gqlError: this.state.gqlError,
                                handleSubAction: this.handleSubEvent,
                                isEsportChannel: e,
                                loading: this.state.gqlLoading,
                                onClickEmote: this.props.onClickEmote,
                                ownedChannelEmoteSets: this.state.ownedChannelEmoteSets,
                                roomID: this.props.roomID,
                                size: this.props.size,
                                subscribeTexts: this.state.subscribeTexts,
                                toggleVisibility: this.props.toggleVisibility
                            }),
                            n = a.createElement(L, {
                                allEmoteSets: this.state.allEmoteSets,
                                channelID: this.props.channelOwnerID,
                                channelSubscriptionProducts: this.state.channelSubscriptionProducts,
                                direction: this.props.direction,
                                emotePickerSessionID: this.props.emotePickerSessionID,
                                emotePickerSource: this.props.emotePickerSource,
                                frequentlyUsedEmotes: this.state.frequentlyUsedEmotes,
                                gqlError: this.state.gqlError,
                                loading: this.state.gqlLoading,
                                onClickEmote: this.props.onClickEmote,
                                roomID: this.props.roomID,
                                size: this.props.size,
                                toggleVisibility: this.props.toggleVisibility
                            });
                        return a.createElement(p.a, {
                            assignments: {
                                fallback: function() {
                                    return t
                                },
                                off: function() {
                                    return t
                                },
                                on: function() {
                                    return n
                                }
                            },
                            name: y.b.EmotePickerV2
                        })
                    }, t.prototype.checkDataLoaded = function(e) {
                        var t = !e.channelOwnerID || e.channelData && !e.channelData.loading,
                            n = !e.isLoggedIn || e.emoteSetsData && !e.emoteSetsData.loading;
                        return t && n
                    }, t.prototype.checkForContent = function(e) {
                        var t = e.emoteSetsData && e.emoteSetsData.emoteSets && e.emoteSetsData.emoteSets.length > 0 || !1,
                            n = e.channelData && e.channelData.user && e.channelData.user.subscriptionProducts.filter(this.subscriptionProductHasEmotes).length > 0 || !1;
                        return t || n
                    }, t.prototype.applyDataPropsToState = function(e, t) {
                        var n = i.__assign({}, t);
                        if (e.emoteSetsData && e.emoteSetsData.emoteSets) {
                            n.ownedSetIDs = new Set;
                            for (var r = 0, a = e.emoteSetsData.emoteSets; r < a.length; r++) {
                                var o = a[r];
                                o && o.id && n.ownedSetIDs.add(parseInt(o.id, 10))
                            }
                            n.allEmoteSets = Object(C.a)(e.emoteSetsData.emoteSets)
                        }
                        if (e.channelData && e.channelData.user) {
                            var l = void 0;
                            e.channelData.user.self && e.channelData.user.self.subscriptionBenefit && (l = e.channelData.user.self.subscriptionBenefit.platform), n.availableUpsells = function(e, t, n) {
                                var r = [];
                                return !n || n !== T.b.IOS && n !== T.b.Android ? (t.forEach(function(n, a) {
                                    var o = n.price;
                                    0 === a && Object(D.g)(t) && (o = Object(D.c)(t[0])), n.emotes && n.emotes.length && n.emoteSetID && !e.has(parseInt(n.emoteSetID, 10)) && r.push(i.__assign({}, n, {
                                        emotes: Object(C.e)(n.emotes, n.emoteSetID),
                                        level: a,
                                        price: o
                                    }))
                                }), r) : r
                            }(n.ownedSetIDs, e.channelData.user.subscriptionProducts, l), n.channelSubscriptionProducts = function(e, t) {
                                return t.map(function(t) {
                                    return t.emotes && t.emoteSetID && !e.has(parseInt(t.emoteSetID, 10)) ? i.__assign({}, t, {
                                        emotes: t.emotes.map(function(e) {
                                            return i.__assign({}, e, {
                                                isLocked: !0
                                            })
                                        })
                                    }) : t
                                }).map(function(e) {
                                    return i.__assign({}, e, {
                                        emotes: Object(C.e)(e.emotes, e.emoteSetID)
                                    })
                                })
                            }(n.ownedSetIDs, e.channelData.user.subscriptionProducts), n.subscribeTexts = function(e) {
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var r = e[n],
                                        i = Object(N.a)(r.tier);
                                    null === i && (i = 1), 0 === n && r.emotes && r.emotes.length > 1 ? t[n] = Object(s.d)("Unlock {numEmotes, number} Sub Emotes", {
                                        numEmotes: r.emotes.length
                                    }, "assembleSubscribeTexts") : 0 === n ? t[n] = Object(s.d)("Unlock 1 Sub Emote", "assembleSubscribeTexts") : r.emotes && r.emotes.length > 1 ? t[n] = Object(s.d)("{numEmotes, number} Extra Tier {tier} Sub Emotes", {
                                        numEmotes: r.emotes.length,
                                        tier: i
                                    }, "assembleSubscribeTexts") : r.emotes && r.emotes.length && (t[n] = Object(s.d)("1 Extra Tier {tier} Sub Emote", {
                                        tier: i
                                    }, "assembleSubscribeTexts"))
                                }
                                return t
                            }(e.channelData.user.subscriptionProducts), n.ownedChannelEmoteSets = function(e, t) {
                                for (var n = [{
                                        id: "0",
                                        emotes: []
                                    }], r = 0, i = t; r < i.length; r++) {
                                    var a = i[r];
                                    a.emotes && a.emoteSetID && e.has(parseInt(a.emoteSetID, 10)) && (n[0].emotes = n[0].emotes.concat(Object(C.e)(a.emotes, a.emoteSetID)))
                                }
                                return n[0].emotes.length ? n : []
                            }(n.ownedSetIDs, e.channelData.user.subscriptionProducts)
                        }
                        return n.channelTabVisible = e.channelData && e.channelData.user && e.channelData.user.subscriptionProducts.filter(this.subscriptionProductHasEmotes).length > 0 || !1, n
                    }, t.prototype.subscriptionProductHasEmotes = function(e) {
                        return void 0 !== e.emoteSetID && !!e.emotes && e.emotes.length > 0
                    }, t.prototype.checkAndDisplaySubscriptionCheckout = function() {
                        if ("yes" === s.o.experiments.getAssignment(y.b.InstreamCheckout)) {
                            var e = s.m.get(v.b, ""),
                                t = s.m.get(v.c, ""),
                                n = s.m.get(v.a, ""),
                                r = Number(n);
                            e && (this.props.channelData && this.props.channelData.user && this.props.channelData.user.subscriptionProducts.map(function(e) {
                                return e.name
                            }).includes(e) ? this.props.sessionUser ? this.props.showSubscriptionCheckoutModal({
                                recipientLogin: t,
                                productName: e,
                                mysteryGiftCount: r
                            }) : this.props.showLoginModal() : Object(v.d)())
                        }
                    }, t
                }(a.Component);
            var H = Object(d.compose)(Object(r.connect)(function(e) {
                    return {
                        currentUserID: e.session.user && e.session.user.id,
                        emotePickerSessionID: e.chat && e.chat.emotePickerSessionID || null,
                        sessionUser: e.session.user,
                        isLoggedIn: Object(S.f)(e)
                    }
                }, function(e) {
                    return Object(u.bindActionCreators)({
                        closeEmotePicker: _.A,
                        openEmotePicker: _.M,
                        showLoginModal: Object(v.e)(k.a.EmotePickerSubscriptionButton),
                        showSubscriptionCheckoutModal: function(e) {
                            var t = i.__rest(e, []);
                            return Object(b.d)(m.a, {
                                component: "CheckoutModal",
                                loader: function() {
                                    return Promise.all([n.e(0), n.e(198)]).then(n.bind(null, "KJv/"))
                                },
                                componentProps: t
                            })
                        }
                    }, e)
                }), Object(h.a)(B, {
                    name: "channelData",
                    skip: function(e) {
                        return !e.channelOwnerID
                    },
                    options: function(e) {
                        return {
                            variables: {
                                channelOwnerID: e.channelOwnerID
                            }
                        }
                    }
                }), Object(f.a)([{
                    topic: function(e) {
                        return "user-subscribe-events-v1." + e.currentUserID
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !e.currentUserID
                    }
                }]), Object(O.c)("EmotePicker"), Object(g.a)())(z),
                G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasInteracted: !1,
                            isEmotePickerMenuVisible: !1,
                            isEmotePickerButtonVisible: !1
                        }, t.onClickOut = function() {
                            t.setState({
                                isEmotePickerMenuVisible: !1
                            })
                        }, t.onClickEmote = function(e, n) {
                            t.props.onClickEmote && t.props.onClickEmote(e, n)
                        }, t.toggleEmotePicker = function() {
                            t.setState(function(e) {
                                return {
                                    isEmotePickerMenuVisible: !e.isEmotePickerMenuVisible
                                }
                            })
                        }, t.onEmotePickerDataLoaded = function(e) {
                            e && t.setState({
                                isEmotePickerButtonVisible: !0
                            })
                        }, t.onInteraction = function() {
                            return t.setState({
                                hasInteracted: !0
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.inputRef && (this.props.inputRef.addEventListener("mouseenter", this.onInteraction), this.props.inputRef.addEventListener("focus", this.onInteraction))
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.inputRef && (this.props.inputRef.removeEventListener("mouseenter", this.onInteraction), this.props.inputRef.removeEventListener("focus", this.onInteraction))
                    }, t.prototype.render = function() {
                        var e = null;
                        this.state.isEmotePickerButtonVisible && (e = a.createElement(c, {
                            onClick: this.toggleEmotePicker
                        }));
                        var t = null;
                        this.hasInteractedOrPageload && (t = a.createElement(H, {
                            channelOwnerID: this.props.channelOwnerID,
                            emotePickerSource: this.props.emotePickerSource,
                            onClickEmote: this.onClickEmote,
                            onLoad: this.onEmotePickerDataLoaded,
                            toggleVisibility: this.toggleEmotePicker,
                            visible: this.state.isEmotePickerMenuVisible,
                            direction: this.props.direction
                        }));
                        var n = a.createElement(l.Va, i.__assign({
                            className: "emote-picker-and-button"
                        }, this.layoutProps), e, t);
                        return this.props.shouldCloseOnClickOut ? a.createElement(o.a, {
                            onClickOut: this.onClickOut
                        }, n) : n
                    }, Object.defineProperty(t.prototype, "hasInteractedOrPageload", {
                        get: function() {
                            return !(!this.props.firstPageLoaded && !this.state.hasInteracted)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "layoutProps", {
                        get: function() {
                            var e = {
                                attachTop: !!this.props.attachTop,
                                attachRight: !!this.props.attachRight,
                                attachBottom: !!this.props.attachBottom,
                                attachLeft: !!this.props.attachLeft,
                                padding: this.props.padding
                            };
                            return this.props.position && (e.position = this.props.position), e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                q = Object(O.c)("EmotePicker")(G);
            var $ = Object(r.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(q);
            n.d(t, "a", function() {
                return $
            }), n.d(t, "c", function() {
                return H
            }), n.d(t, !1, function() {
                return T.a
            }), n.d(t, !1, function() {
                return T.d
            }), n.d(t, !1, function() {
                return T.c
            }), n.d(t, !1, function() {
                return T.b
            }), n.d(t, "b", function() {
                return c
            })
        },
        oe5X: function(e, t, n) {
            "use strict";
            var r = n("XmgI"),
                i = n("RcPG"),
                a = n("0FG4"),
                o = n("i6WW"),
                s = n("gTu3"),
                l = n("6j5V"),
                c = /^(['"*([{</]*)@((?:[^\u0000-\u007F]|[\w-])+)/;

            function d(e, t) {
                if (!t) return !1;
                var n = t.displayName,
                    r = t.login;
                return e === n || e.toLowerCase() === r
            }

            function u(e, t) {
                void 0 === t && (t = {});
                var n = t.cheers,
                    u = t.emotes,
                    f = t.links,
                    g = t.mentions,
                    v = m(e),
                    k = "",
                    b = 0;
                return p(v.reduce(function(e, t, p) {
                    if (h(t)) return k = "", e;
                    if (0 === k.length && (b = p), k += t, p !== v.length - 1 && !h(v[p + 1])) return e;
                    var m = u && Object(a.c)(k, b, u);
                    if (m) return e.concat(m);
                    var y = n && Object(r.d)(k, n);
                    if (y) return e.concat(y);
                    var S = f && Object(o.a)(k, f);
                    if (S) return e.concat(S);
                    var _ = g && function(e, t) {
                        var n = e.match(c);
                        if (!n) return d(e, t.sessionUser) ? [{
                            type: i.a.CurrentUserHighlight,
                            content: e
                        }] : null;
                        var r = [],
                            a = n[1],
                            o = n[2],
                            u = e.slice(n[0].length);
                        a.length && r.push(Object(l.a)(a));
                        var p = s.a.Default;
                        return d(o, t.sessionUser) ? p = s.a.Recipient : t.sessionUser && t.sessionUser.login === t.senderLogin && (p = s.a.Sender), r.push({
                            type: i.a.Mention,
                            content: {
                                recipient: o,
                                currentUserMentionRelation: p
                            }
                        }), u.length && r.push(Object(l.a)(u)), r
                    }(k, g);
                    return _ ? e.concat([_]) : e.concat(Object(l.a)(k))
                }, []))
            }

            function p(e) {
                return e.reduce(function(e, t, n) {
                    return 0 === n ? [].concat.call(e, t) : [].concat.call(e, Object(l.a)(" "), t)
                }, []).reduce(function(e, t, n) {
                    if (0 === n) return e.concat(t);
                    var r = e[e.length - 1];
                    return t.type === i.a.Text && r.type === i.a.Text ? (r.content = "" + r.content + t.content, e) : e.concat(t)
                }, [])
            }

            function m(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g) || []
            }

            function h(e) {
                return /\s/.test(e)
            }
            n.d(t, "a", function() {
                return u
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, !1, function() {
                return m
            })
        },
        okS7: function(e, t, n) {
            "use strict";
            n("kPBf");
            var r, i = n("mrSG"),
                a = n("17x9"),
                o = n("q1tI"),
                s = n("8Ad5"),
                l = n("TSYQ"),
                c = n("/7QA"),
                d = n("u5aL"),
                u = n("8/mp"),
                p = n("Ue10"),
                m = (n("JzSO"), "autocomplete-balloon-matches"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.resizeAnimationFrame = 0, t.messages = {
                            noMatches: Object(c.d)("No matches.", "AutocompleteBalloon")
                        }, t.logger = c.j.withCategory("AutocompleteBalloon"), t.renderMatches = function() {
                            return t.props.matches.map(function(e, n) {
                                var r = t.state.selectedMatch,
                                    i = r && r.replacement === e.replacement,
                                    a = l("autocomplete-balloon__item", {
                                        "autocomplete-balloon__item--selected": i
                                    });
                                return o.createElement(p.Va, {
                                    key: "autocomplete-match-" + n,
                                    refDelegate: i ? t.focusOnOption : void 0,
                                    "data-test-selector": m
                                }, o.createElement(p.Na, {
                                    display: p.W.Block,
                                    fullWidth: !0
                                }, o.createElement("button", {
                                    onMouseEnter: t.handleMatchMouseEnter,
                                    className: a,
                                    "data-a-target": e.replacement,
                                    "data-click-index": n,
                                    onClick: t.onMatchClick
                                }, o.createElement(p.Va, {
                                    padding: {
                                        x: .5
                                    },
                                    display: p.W.Flex,
                                    alignItems: p.f.Center
                                }, e.element))))
                            })
                        }, t.handleMatchMouseEnter = function(e) {
                            var n = t.getMatchFromEvent(e);
                            n && t.setState({
                                selectedMatch: n
                            })
                        }, t.onMatchClick = function(e) {
                            var n = t.getMatchFromEvent(e);
                            n && t.props.onMatchSelect(n)
                        }, t.getMatchFromEvent = function(e) {
                            var n = t.props.matches,
                                r = e.currentTarget.getAttribute("data-click-index");
                            return !r || +r >= n.length ? (t.logger.error(new Error, "The index received from the UI element was not found in props.matches."), null) : n[+r]
                        }, t.handleKeydown = function(e) {
                            var n = e.charCode || e.keyCode,
                                r = function() {
                                    e.preventDefault(), e.stopPropagation()
                                };
                            switch (n) {
                                case s.a.Tab:
                                case s.a.Enter:
                                    r(), t.props.matches.length && t.state.selectedMatch ? t.props.onMatchSelect(t.state.selectedMatch) : t.props.onDismiss();
                                    break;
                                case s.a.Up:
                                case s.a.Down:
                                    if (!t.state.selectedMatch || !t.props.matches.length) return;
                                    var i = t.props.matches.indexOf(t.state.selectedMatch);
                                    if (-1 === i) return void t.logger.error(new Error, "The selected match was not found in props.matches.");
                                    r();
                                    var a = n === s.a.Up ? -1 : 1,
                                        o = t.getIndexWithinLength(i + a, t.props.matches.length),
                                        l = t.props.matches[o];
                                    t.setState({
                                        selectedMatch: l
                                    })
                            }
                        }, t.getIndexWithinLength = function(e, t) {
                            var n = e % t;
                            return n < 0 ? n + t : n
                        }, t.onResize = function() {
                            t.resizeAnimationFrame || (t.resizeAnimationFrame = requestAnimationFrame(t.setContainerHeight))
                        }, t.setContainerHeight = function() {
                            var e = t.props.containerElement && t.props.containerElement.clientHeight || 1080;
                            t.setState({
                                containerHeight: e
                            }), t.resizeAnimationFrame = 0
                        }, t.focusOnOption = function(e) {
                            if (e && t.autocompleteBalloonElement) {
                                var n = e.getBoundingClientRect(),
                                    r = t.autocompleteBalloonElement.getBoundingClientRect();
                                (n.bottom > r.bottom || n.top < r.top) && e.scrollIntoView()
                            }
                        }, t.setAutocompleteBalloonElement = function(e) {
                            t.autocompleteBalloonElement = e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("keydown", this.handleKeydown, !0), window.addEventListener("resize", this.onResize, !0), this.setContainerHeight(), this.props.matches.length > 0 && this.setState({
                            selectedMatch: this.props.matches[0]
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onResize, !0), window.removeEventListener("keydown", this.handleKeydown, !0), this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this,
                            n = e.matches.reduce(function(e, n, r) {
                                return t.state.selectedMatch ? n.replacement === t.state.selectedMatch.replacement ? r : e : 0
                            }, 0);
                        this.setState({
                            selectedMatch: e.matches[n]
                        })
                    }, t.prototype.render = function() {
                        var e;
                        return e = 0 === this.props.matches.length ? o.createElement(p.Va, {
                            padding: {
                                x: .5
                            },
                            "data-test-selector": "autocomplete-balloon-no-matches"
                        }, o.createElement(p.V, {
                            type: p.Nb.Span,
                            color: p.O.Alt2
                        }, this.messages.noMatches)) : this.renderMatches(), o.createElement(p.Va, {
                            position: p.db.Relative
                        }, o.createElement(d.a, {
                            onClickOut: this.props.onDismiss
                        }, o.createElement(p.u, {
                            direction: p.v.TopLeft,
                            "data-a-target": "autocomplete-balloon",
                            "data-test-selector": "autocomplete-balloon",
                            show: !0
                        }, o.createElement(p.Na, {
                            "data-test-selector": "autocomplete-matches-container",
                            className: "autocomplete-balloon",
                            overflow: p.Ya.Hidden,
                            display: p.W.Flex,
                            flexDirection: p.Y.Column
                        }, o.createElement("div", {
                            style: {
                                maxHeight: this.state.containerHeight
                            },
                            ref: this.setAutocompleteBalloonElement
                        }, o.createElement(u.b, null, o.createElement(p.Va, {
                            padding: {
                                y: 1
                            }
                        }, e)))))))
                    }, t
                }(o.Component),
                f = n("uu1w"),
                g = n("2xye"),
                v = {
                    Chat: "chat",
                    Feed: "feed",
                    Whisper: "whisper"
                },
                k = ":",
                b = "#",
                y = "@",
                S = function(e) {
                    switch (e) {
                        case f.a.Emote:
                            return k;
                        case f.a.Hashtag:
                            return b;
                        case f.a.Mention:
                            return y;
                        default:
                            return void c.j.warn("Chat Suggestions tracking was passed an unknown autocomplete type.")
                    }
                },
                _ = function(e) {
                    var t = S(e.autocompleteType);
                    if (t) {
                        var n = {
                            channel: e.channelLogin,
                            completed_text: e.completedText,
                            source: e.source,
                            start_character: t
                        };
                        c.n.track(g.SpadeEventType.ChatSuggestionComplete, n)
                    }
                };
            ! function(e) {
                e.Input = "input", e.TextArea = "textarea"
            }(r || (r = {}));
            var E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            autocompleteType: f.a.None,
                            matchedCursorPosition: 0,
                            matches: null,
                            value: ""
                        }, t.providers = [], t.onChange = function(e) {
                            t.setState({
                                value: e.target.value
                            }, function() {
                                t.getMatches()
                            }), t.props.onChange && t.props.onChange(e)
                        }, t.onKeyDown = function(e) {
                            var n = function() {
                                    t.props.onKeyDown && t.props.onKeyDown(e)
                                },
                                r = function() {
                                    e.preventDefault(), e.stopPropagation()
                                },
                                i = e.charCode || e.keyCode;
                            if (i !== s.a.Enter) {
                                switch (i) {
                                    case s.a.Tab:
                                        if (!t.state.matches) t.getMatches(!0) && r();
                                        break;
                                    case s.a.Esc:
                                        t.state.matches && (r(), t.resetDisplayState())
                                }
                                n()
                            } else n()
                        }, t.setComponentRefDelegate = function(e) {
                            t.componentRef = e, t.props.componentRefDelegate && t.props.componentRefDelegate(e)
                        }, t.getMatches = function(e) {
                            var n = t.state.value;
                            if (0 === t.providers.length || 0 === n.length) return t.resetDisplayState(), !1;
                            var r = t.getCurrentCursorPosition();
                            if (r > n.length);
                            else
                                for (; r < n.length && !/\s/.test(n.charAt(r));) r++;
                            var i = n.substring(0, r);
                            if (0 === i.length || /\s/.test(i.substring(i.length - 1))) return t.resetDisplayState(), !1;
                            for (var a = i.split(/\s/), o = a[a.length - 1], s = 0, l = t.providers; s < l.length; s++) {
                                var c = l[s];
                                if (!e || c.canBeTriggeredByTab) {
                                    var d = c.getMatches(o, e);
                                    if (d) return t.setState({
                                        autocompleteType: c.autocompleteType,
                                        matchedCursorPosition: r,
                                        matches: d
                                    }), !0
                                }
                            }
                            return t.resetDisplayState(), !1
                        }, t.resetDisplayState = function(e, n) {
                            var r = i.__assign({}, t.state, {
                                autocompleteType: f.a.None,
                                matches: null
                            }, e || {});
                            t.setState(r, n)
                        }, t.insertReplacement = function(e) {
                            var n = t.state.value,
                                r = t.state.matchedCursorPosition,
                                a = n.substring(0, r),
                                o = a.lastIndexOf(e.current);
                            if (-1 === o) a = a.concat(e.replacement + " "), r = a.length;
                            else {
                                var s = a.substring(0, o),
                                    l = n.length > o + e.current.length ? n.substring(o + e.current.length) : "",
                                    c = l.startsWith(" ") ? e.replacement : e.replacement + " ";
                                a = "" + s + c + l, r = s.length + c.length
                            }
                            _(i.__assign({}, t.props.trackingParams || {}, {
                                autocompleteType: t.state.autocompleteType,
                                completedText: e.replacement,
                                source: t.props.suggestionSource
                            })), t.resetDisplayState({
                                value: a
                            }, function() {
                                t.setCursorPosition(r)
                            })
                        }, t.getCurrentCursorPosition = function() {
                            return t.componentRef.selectionStart || 0
                        }, t.setCursorPosition = function(e) {
                            t.componentRef && (t.componentRef.setSelectionRange(e, e), t.componentRef.focus())
                        }, t.registerAutocompleteProvider = function(e) {
                            return t.providers.push(e),
                                function() {
                                    var n = t.providers.indexOf(e);
                                    t.providers.splice(n, 1)
                                }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.refDelegate && this.props.refDelegate(this)
                    }, t.prototype.getChildContext = function() {
                        return {
                            registerAutocompleteProvider: this.registerAutocompleteProvider
                        }
                    }, t.prototype.componentWillUpdate = function(e, t) {
                        !this.state.matches && t.matches && function(e) {
                            var t = S(e.autocompleteType);
                            if (t) {
                                var n = {
                                    source: e.source,
                                    start_character: t
                                };
                                c.n.track(g.SpadeEventType.ChatSuggestion, n)
                            }
                        }({
                            autocompleteType: t.autocompleteType,
                            source: e.suggestionSource
                        })
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        t.value !== this.state.value && this.props.onValueUpdate && this.props.onValueUpdate(this.state.value)
                    }, t.prototype.render = function() {
                        var e = i.__assign({}, this.props, {
                            onChange: this.onChange,
                            onKeyDown: this.onKeyDown,
                            refDelegate: this.setComponentRefDelegate,
                            value: this.state.value
                        });
                        return o.createElement(p.Va, null, this.state.matches && o.createElement(h, {
                            matches: this.state.matches,
                            onMatchSelect: this.insertReplacement,
                            onDismiss: this.resetDisplayState,
                            containerElement: this.props.containerElement
                        }), this.props.componentType === r.Input ? o.createElement(p.Pa, i.__assign({}, e, {
                            type: e.type || p.Ra.Text
                        })) : o.createElement(p.Kb, i.__assign({}, e)), this.props.children)
                    }, t.prototype.getValue = function() {
                        return this.state.value
                    }, t.prototype.setValue = function(e) {
                        this.resetDisplayState({
                            value: e
                        })
                    }, t.childContextTypes = {
                        registerAutocompleteProvider: a.func
                    }, t
                }(o.Component),
                C = n("lZdE"),
                T = n("OpME"),
                D = (n("gDzh"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.autocompleteType = f.a.Emote, t.canBeTriggeredByTab = !1, t.getMatches = function(e) {
                            return e.startsWith(":") ? e.length < 3 ? null : t.getMatchedEmotes(e) : null
                        }, t.getMatchedEmotes = function(e) {
                            var n = t.state.hydratedEmotes;
                            if (!n || 0 === n.length) return null;
                            var r = e.substring(1),
                                i = n.reduce(function(e, n) {
                                    var i = n.emotes.filter(function(e) {
                                        if (e.token) return t.doesEmoteMatchTerm(e, r)
                                    });
                                    return e.concat([i])
                                }, []).filter(function(e) {
                                    return e.length > 0
                                }).reduce(function(e, t) {
                                    return e.concat(t)
                                }, []);
                            return i = Object(T.d)(i), (i = Object(T.f)(i, r)).map(function(e) {
                                return {
                                    current: ":" + r,
                                    replacement: e.token,
                                    element: t.renderEmoteSuggestion(e)
                                }
                            })
                        }, t.doesEmoteMatchTerm = function(e, t) {
                            var n = new RegExp("^" + Object(C.a)(t), "i");
                            if (e.token.match(n)) return !0;
                            var r = new RegExp("" + Object(C.a)(t.charAt(0)).toUpperCase()),
                                i = new RegExp("^" + Object(C.a)(t.slice(1)), "i"),
                                a = e.token.match(r);
                            return !!(a && a.index && e.token.slice(a.index + 1).match(i))
                        }, t.renderEmoteSuggestion = function(e) {
                            return [o.createElement(p.Va, {
                                padding: {
                                    right: .5
                                },
                                flexShrink: 0,
                                key: "emote-img-" + e.id
                            }, o.createElement("img", {
                                className: "emote-autocomplete-provider__image",
                                srcSet: e.srcSet
                            })), o.createElement(p.V, {
                                type: p.Nb.Span,
                                key: "emote-text-" + e.id,
                                ellipsis: !0
                            }, e.token)]
                        }, t.hydrateEmotes = function(e) {
                            for (var n = [], r = 0, i = e; r < i.length; r++) {
                                var a = i[r];
                                a && a.id && a.emotes && n.push({
                                    id: a.id,
                                    emotes: Object(T.b)(a.emotes)
                                })
                            }
                            t.setState({
                                hydratedEmotes: n
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.emotes && this.props.emotes !== e.emotes && this.hydrateEmotes(e.emotes)
                    }, t.prototype.componentWillMount = function() {
                        this.hydrateEmotes(this.props.emotes)
                    }, t.prototype.componentDidMount = function() {
                        this.unregister = this.context.registerAutocompleteProvider(this)
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister()
                    }, t.prototype.render = function() {
                        return null
                    }, t.contextTypes = {
                        registerAutocompleteProvider: a.func
                    }, t
                }(o.Component));
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return E
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, !1, function() {}), n.d(t, "d", function() {
                return D
            }), n.d(t, "c", function() {
                return v
            })
        },
        pORx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "WhisperThread_ReportUser"
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
                                    value: "ReportWhisperThreadInput"
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
                                value: "reportWhisperThread"
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
                                        value: "thread"
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
                    end: 125
                }
            };
            n.loc.source = {
                body: "mutation WhisperThread_ReportUser($input: ReportWhisperThreadInput!) {\nreportWhisperThread(input: $input) {\nthread {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
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
        sU0Q: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoChatCard_Video"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                                        value: "videoID"
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
                                        value: "previewThumbnailURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "90"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "51"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "publishedAt"
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
                                                value: "displayName"
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
                    end: 162
                }
            };
            n.loc.source = {
                body: "query VideoChatCard_Video($videoID: ID!) {\nvideo(id: $videoID) {\nid\ntitle\npreviewThumbnailURL(width: 90 height: 51)\npublishedAt\nowner {\nid\nlogin\ndisplayName\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        uu1w: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Emote = "emote", e.Mention = "mention", e.Hashtag = "hashtag", e.None = "none"
                }(r || (r = {}))
        },
        vGFN: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "j", function() {
                return v
            }), n.d(t, "h", function() {
                return k
            }), n.d(t, "g", function() {
                return b
            }), n.d(t, "l", function() {
                return y
            }), n.d(t, "o", function() {
                return S
            }), n.d(t, "n", function() {
                return _
            }), n.d(t, "k", function() {
                return E
            }), n.d(t, "m", function() {
                return C
            }), n.d(t, "i", function() {
                return T
            }), n.d(t, "e", function() {
                return D
            }), n.d(t, "d", function() {
                return N
            }), n.d(t, "b", function() {
                return O
            }), n.d(t, "f", function() {
                return I
            }), n.d(t, "c", function() {
                return w
            }), n.d(t, "q", function() {
                return M
            }), n.d(t, "p", function() {
                return U
            });
            var r, i, a, o, s, l, c = n("mrSG"),
                d = n("/7QA"),
                u = n("2xye"),
                p = n("mBWp");

            function m(e) {
                d.o.tracking.track(u.SpadeEventType.WhisperThreadMod, {
                    conversation_id: e.threadID,
                    action: e.action
                })
            }

            function h(e) {
                return c.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return c.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, R()];
                            case 1:
                                return t = n.sent(), d.o.tracking.track(u.SpadeEventType.WhisperIgnoreUser, {
                                    ui_context: e.context,
                                    from_login: t && t.login,
                                    ignored_login: e.targetUserLogin,
                                    reason: e.reason || r.Other,
                                    source: e.source
                                }), [2]
                        }
                    })
                })
            }

            function f(e, t) {
                return c.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return c.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, R()];
                            case 1:
                                return n = r.sent(), d.o.tracking.track(u.SpadeEventType.WhisperThreadMod, {
                                    conversation_id: e,
                                    action: t,
                                    login: n && n.login
                                }), [2]
                        }
                    })
                })
            }

            function g(e) {
                d.o.tracking.track(u.SpadeEventType.WhisperAllThreadsMod, {
                    action: e
                })
            }

            function v() {
                g(i.MarkAllRead)
            }

            function k() {
                g(i.EnableDoNotDisturb)
            }

            function b() {
                g(i.DisableDoNotDisturb)
            }

            function y(e, t) {
                h({
                    context: t,
                    targetUserLogin: e,
                    reason: r.Spam,
                    source: "conversations_button"
                })
            }

            function S(e) {
                f(e, s.MarkNotSpam)
            }

            function _(e) {
                f(e, s.Archive)
            }

            function E(e) {
                m({
                    threadID: e,
                    action: a.Mute
                })
            }

            function C(e) {
                m({
                    threadID: e,
                    action: a.Unmute
                })
            }

            function T(e) {
                m({
                    threadID: e,
                    action: a.Expand
                })
            }

            function D(e) {
                m({
                    threadID: e,
                    action: a.Collapse
                })
            }

            function N(e) {
                m({
                    threadID: e,
                    action: a.Close
                })
            }

            function O(e) {
                m({
                    threadID: e,
                    action: a.Archive
                })
            }

            function I(e) {
                d.o.tracking.track(u.SpadeEventType.WhisperThreadCreate, {
                    conversation_id: e.threadID,
                    target_login: e.targetUserlogin,
                    source: "search_target_result",
                    search_result_rank: e.searchResultRank
                })
            }

            function w(e) {
                d.o.tracking.track(u.SpadeEventType.WhisperSearchClick, {
                    query: e.searchQuery,
                    source: "conversation_list",
                    rank: e.searchResultRank,
                    is_conversation: e.isConversation
                })
            }

            function R() {
                var e = this;
                return new Promise(function(t) {
                    setTimeout(function() {
                        return c.__awaiter(e, void 0, void 0, function() {
                            var e, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        e = null, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, d.o.apollo.client.query({
                                            query: p
                                        })];
                                    case 2:
                                        return e = i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), d.j.error(n, "Failed to make query for current user info in WhisperSent reporting"), [3, 4];
                                    case 4:
                                        return r = e && e.data && e.data.currentUser, t(r), [2]
                                }
                            })
                        })
                    })
                })
            }

            function M(e) {
                return c.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return c.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, R()];
                            case 1:
                                return t = n.sent(), d.o.tracking.track(u.SpadeEventType.WhisperSent, {
                                    to: e.targetUserLogin,
                                    from: t && t.login,
                                    player: "web",
                                    is_turbo: t && t.hasTurbo,
                                    conversation_id: e.threadID,
                                    availability: t && t.availability,
                                    room_type: e.inChannelChat ? l.Channel : l.Conversation
                                }), [2]
                        }
                    })
                })
            }

            function U(e) {
                return c.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return c.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, R()];
                            case 1:
                                return t = n.sent(), d.o.tracking.track(u.SpadeEventType.WhisperReceived, {
                                    to: t && t.login,
                                    from: e.targetUserLogin,
                                    player: "web",
                                    is_turbo: t && t.hasTurbo,
                                    conversation_id: e.threadID
                                }), [2]
                        }
                    })
                })
            }! function(e) {
                e.Harassment = "Harassment", e.Spam = "Spam", e.Other = "Other"
            }(r || (r = {})),
            function(e) {
                e.MarkAllRead = "mark_all_read", e.EnableDoNotDisturb = "do_not_disturb_on", e.DisableDoNotDisturb = "do_not_disturb_off"
            }(i || (i = {})),
            function(e) {
                e.Mute = "mute", e.Unmute = "unmute", e.Expand = "maximize", e.Collapse = "minimize", e.Close = "close", e.Archive = "archive", e.Open = "open"
            }(a || (a = {})),
            function(e) {
                e.Dock = "dock", e.SpamPropmt = "dock_spam_cta"
            }(o || (o = {})),
            function(e) {
                e.Archive = "archive", e.MarkNotSpam = "mark_not_spam"
            }(s || (s = {})),
            function(e) {
                e.Channel = "channel", e.Conversation = "conversation"
            }(l || (l = {}))
        },
        xXlL: function(e, t, n) {
            "use strict";

            function r(e) {
                return {
                    id: "" + e.id,
                    start: e.start,
                    end: e.end
                }
            }

            function i(e) {
                return {
                    __typename: "WhisperMessageEdge",
                    cursor: "" + e.data_object.id,
                    node: {
                        __typename: "WhisperMessage",
                        id: e.data_object.message_id,
                        nonce: e.data_object.nonce,
                        sentAt: new Date(1e3 * e.data_object.sent_ts).toISOString(),
                        editedAt: null,
                        deletedAt: null,
                        content: {
                            __typename: "MessageBody",
                            content: e.data_object.body,
                            emotes: e.data_object.tags.emotes.map(function(e) {
                                return o(r(e))
                            })
                        },
                        from: {
                            __typename: "User",
                            id: "" + e.data_object.from_id
                        }
                    }
                }
            }

            function a(e) {
                return e.map(function(e) {
                    return o(r(e))
                })
            }

            function o(e) {
                return {
                    from: e.start,
                    to: e.end,
                    emoteID: e.id,
                    id: e.id + ";" + e.start + ";" + e.end,
                    setID: "0",
                    __typename: "EmbeddedEmote"
                }
            }
            n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return o
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