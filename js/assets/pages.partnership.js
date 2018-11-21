(window.webpackJsonp = window.webpackJsonp || []).push([
    [74, 72], {
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
                return w
            }), n.d(t, "F", function() {
                return I
            }), n.d(t, "O", function() {
                return O
            }), n.d(t, "L", function() {
                return R
            }), n.d(t, "H", function() {
                return M
            }), n.d(t, "C", function() {
                return U
            }), n.d(t, "I", function() {
                return F
            }), n.d(t, "D", function() {
                return j
            }), n.d(t, "G", function() {
                return x
            }), n.d(t, "B", function() {
                return A
            }), n.d(t, "y", function() {
                return W
            }), n.d(t, "A", function() {
                return P
            }), n.d(t, "M", function() {
                return L
            }), n.d(t, "z", function() {
                return B
            }), n.d(t, "P", function() {
                return z
            }), n.d(t, "S", function() {
                return V
            }), n.d(t, "x", function() {
                return H
            }), n.d(t, "N", function() {
                return G
            }), n.d(t, "R", function() {
                return Y
            }), n.d(t, "Q", function() {
                return q
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

            function w() {
                return {
                    type: y
                }
            }

            function I() {
                return {
                    type: S
                }
            }

            function O() {
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

            function F() {
                return {
                    type: m
                }
            }

            function j() {
                return {
                    type: h
                }
            }

            function x() {
                return {
                    type: f
                }
            }

            function A() {
                return {
                    type: g
                }
            }

            function W(e, t) {
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

            function L() {
                return {
                    type: u
                }
            }

            function B() {
                return {
                    type: p
                }
            }

            function z() {
                return {
                    type: v
                }
            }

            function V(e) {
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

            function Y(e) {
                return {
                    type: C,
                    customEvent: e
                }
            }

            function q(e) {
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
                        return a.createElement(u.Fb, {
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
            var m = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(o.connect)(null, function(e) {
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
            n("/7QA");
            var r = n("3Bft");

            function i(e) {
                return [r.a.Prime, r.a.Custom].includes(e) ? null : parseInt(e, 10) / 1e3
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
            n.d(t, "a", function() {
                return r
            });
            var r = {
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
            i.p.store.registerReducer("whispers", v);
            var b = n("/MKj"),
                y = n("XDQu"),
                S = n("l1Uh"),
                _ = n("TSYQ"),
                E = n("q1tI"),
                C = n("yR8l"),
                T = n("eDVu"),
                D = n("0Log"),
                N = n("geRD"),
                w = n("/aPz"),
                I = n("u5aL"),
                O = n("8/mp"),
                R = n("eJ65"),
                M = n("yLwq"),
                U = n("f00E"),
                F = n("kz7j"),
                j = n("GnwI"),
                x = n("H/lO"),
                A = n("NZDK"),
                W = n("oe5X"),
                P = n("0FG4"),
                L = n("cys1"),
                B = n("Ue10");

            function z(e, t) {
                return Object(L.f)(Object(W.a)(e, {
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
            var V = function(e) {
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
                            a = this.props.lastMessage ? z(this.props.lastMessage.content.content, this.props.lastMessage.content.emotes) : null,
                            o = this.props.unreadMessageCount,
                            s = Object(i.d)("Unknown", "ThreadListItem");
                        return r ? ((e = r.displayName || r.login) || (e = s), t = r.login, n = r.profileImageURL) : (e = s, t = s, n = null), E.createElement("div", {
                            onClick: this.handleThreadClick,
                            role: "listitem"
                        }, E.createElement(B.Fb, {
                            className: "whispers-list-item",
                            borderBottom: !0,
                            padding: 1,
                            display: B.X.Flex,
                            flexDirection: B.Aa.Row,
                            flexWrap: B.Ba.NoWrap,
                            fullWidth: !0,
                            alignItems: B.f.Center,
                            "data-a-target": "whisper-with-" + t
                        }, E.createElement(B.Ya, {
                            className: "whispers-list-item__avatar",
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, E.createElement(B.q, {
                            size: 30,
                            alt: Object(i.d)("{interlocutorName}'s Avatar", {
                                interlocutorName: e
                            }, "WhisperThreadListItem"),
                            src: n,
                            onLoad: this.props.avatarOnLoadCallback
                        })), E.createElement(B.Ya, {
                            fullWidth: !0,
                            display: B.X.Inline
                        }, E.createElement(B.W, {
                            fontSize: B.Ca.Size5,
                            bold: !0,
                            italic: e === s
                        }, e), E.createElement(B.Ya, {
                            className: "whispers-list-item__last-message",
                            ellipsis: !0
                        }, a)), E.createElement(B.Ya, {
                            className: "whispers-list-item__unread-count",
                            margin: {
                                right: 1
                            },
                            textAlign: B.Sb.Right
                        }, E.createElement(B.W, {
                            bold: !0
                        }, o > 0 && !this.props.muted ? o : null), this.props.muted && E.createElement(B.Ya, {
                            display: B.X.Flex,
                            alignItems: B.f.Center,
                            justifyContent: B.Xa.Center
                        }, E.createElement(B.tb, {
                            type: B.vb.Alt2,
                            asset: B.ub.WhisperMuted
                        }))), E.createElement("div", {
                            className: "whispers-list-item__archive"
                        }, E.createElement(B.A, {
                            ariaLabel: Object(i.d)("Archive Thread", "WhisperThreadListItem"),
                            tabIndex: -1,
                            icon: B.ub.Close,
                            "data-a-target": "whispers-list-item__archive-button",
                            onClick: this.handleArchiveClick,
                            "data-click-out-id": "whispers-list-item__archive-button"
                        }))))
                    }, t
                }(E.Component),
                H = n("PrJw"),
                G = n("N6NX"),
                Y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.markAllWhispersAsRead = function() {
                            var e = Object(N.a)({
                                markAllAsRead: !0
                            });
                            n.props.markAllWhispersAsRead && (Object(H.i)(), n.props.markAllWhispersAsRead(e)), n.props.onMarkAllMessagesRead && n.props.onMarkAllMessagesRead()
                        }, n.toggleDoNotDisturb = function() {
                            n.state.doNotDisturb ? (i.n.set("whisperDoNotDisturb", !1), Object(H.f)(), n.setState({
                                doNotDisturb: !1
                            })) : (i.n.set("whisperDoNotDisturb", !0), Object(H.g)(), n.setState({
                                doNotDisturb: !0
                            }))
                        }, n.state = {
                            doNotDisturb: i.n.get("whisperDoNotDisturb", !1)
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.doNotDisturb ? Object(i.d)("Disable Do Not Disturb", "ThreadsBoxSettings") : Object(i.d)("Enable Do Not Disturb", "ThreadsBoxSettings"),
                            t = Object(i.d)("Mark All Whispers as Read", "ThreadsBoxSettings");
                        return E.createElement(B.Ya, {
                            className: "threads-box-settings",
                            display: B.X.Flex,
                            flexDirection: B.Aa.Column,
                            margin: 1
                        }, E.createElement(B.Va, {
                            ariaLabel: e,
                            onClick: this.toggleDoNotDisturb
                        }, E.createElement(B.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, e)), E.createElement(B.Va, {
                            ariaLabel: t,
                            onClick: this.markAllWhispersAsRead
                        }, E.createElement(B.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, t)))
                    }, t = a.__decorate([Object(C.a)(G, {
                        name: "markAllWhispersAsRead"
                    })], t)
                }(E.Component);

            function q(e, t) {
                return e.find(function(e) {
                    return !!e && e.id !== t
                }) || void 0
            }
            var X, Q = n("NMMG"),
                K = (n("dNN/"), function(e) {
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
                            }, E.createElement(B.Fb, {
                                className: "whispers-list-item",
                                borderBottom: !0,
                                padding: 1,
                                "data-a-target": "whisper-search-result-" + e.login,
                                display: B.X.Flex,
                                flexDirection: B.Aa.Row,
                                flexWrap: B.Ba.NoWrap,
                                fullWidth: !0,
                                alignItems: B.f.Center
                            }, E.createElement(B.Ya, {
                                margin: {
                                    right: .5
                                },
                                flexShrink: 0
                            }, E.createElement(B.q, {
                                size: 30,
                                src: a,
                                alt: r
                            })), E.createElement(B.Ya, {
                                fullWidth: !0,
                                display: B.X.Flex,
                                flexDirection: B.Aa.Column
                            }, E.createElement(B.W, {
                                fontSize: B.Ca.Size5,
                                bold: !0
                            }, e.login), E.createElement(B.Ya, null, " "))))
                        }, n.saveSettingsMenuRef = function(e) {
                            return n.settingsMenu = e
                        }, n.handleConversationsClick = function() {
                            n.state.open || (n.props.latencyTracking.resetCustomEvents(F.a.Whispers), n.whispersHistoryLatencyEvent = n.props.latencyTracking.registerCustomEvent({
                                benchmark: 200,
                                group: F.a.Whispers,
                                key: F.b.WhispersHistory,
                                label: F.c.History,
                                start: F.d.Registration
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
                                    var i = Object(Q.a)(n.props.currentUserID, r);
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
                                var r = q(n.props.threadsByID[e].participants, n.props.currentUserID);
                                return !(!r || !r.displayName) && r.displayName.toLowerCase().indexOf(t) >= 0
                            })
                        }, n.searchClient = new A.a({
                            appId: i.a.algoliaApplicationID,
                            apiKey: i.a.algoliaAPIKey,
                            apolloClient: i.p.apollo.client,
                            logger: i.k,
                            config: i.a,
                            stats: i.p.stats
                        }), n.state = {
                            open: !1,
                            searchText: "",
                            searching: !1
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return E.createElement(I.a, {
                            onClickOut: this.handleClose
                        }, E.createElement(B.Ra, {
                            className: "whispers-threads-box__container " + (this.state.open ? "whispers-threads-box__container--open" : ""),
                            display: B.X.Flex,
                            flexDirection: B.Aa.Column,
                            flexWrap: B.Ba.NoWrap,
                            borderTop: !0,
                            borderRight: !0,
                            borderLeft: !0,
                            background: B.r.Base,
                            position: B.kb.Absolute,
                            attachBottom: !0,
                            attachRight: !0,
                            "data-click-out-id": "threads-box",
                            "data-a-target": "threads-box-" + (this.state.open ? "open" : "closed"),
                            borderRadius: {
                                topLeft: B.x.Medium,
                                topRight: B.x.Medium
                            }
                        }, E.createElement("div", {
                            "aria-labelledby": "whispers-box-header"
                        }, this.renderHeader(), this.renderList(), this.renderFooter())))
                    }, t.prototype.renderOpenCloseButton = function() {
                        var e = null;
                        if (this.props.unreadCount > 0) {
                            var t = this.props.unreadCount > 99 ? "99+" : this.props.unreadCount.toString();
                            e = E.createElement(B.Ya, {
                                className: "whispers-threads-box__unread",
                                position: B.kb.Absolute
                            }, E.createElement(B.hb, {
                                "data-a-target": "whisper-unreads",
                                label: t,
                                type: B.ib.Notification
                            }))
                        }
                        return E.createElement(B.Fb, {
                            position: B.kb.Relative,
                            background: B.r.Alt,
                            display: B.X.Flex,
                            alignItems: B.f.Center,
                            justifyContent: B.Xa.Center
                        }, e, E.createElement(B.Va, {
                            ariaLabel: Object(i.d)("Close Threads", "WhisperThreadsBox"),
                            onClick: this.handleConversationsClick,
                            type: B.Wa.Alt,
                            "data-a-target": "whisper-box-button"
                        }, E.createElement(B.Fb, {
                            display: B.X.Flex,
                            padding: 1,
                            color: B.O.Link
                        }, E.createElement(B.tb, {
                            asset: B.ub.Conversations
                        }))))
                    }, t.prototype.renderList = function() {
                        var e, t = this;
                        if (!this.state.open) return null;
                        var n = null;
                        "" !== this.state.searchText && (n = E.createElement(B.Fb, {
                            key: "otherPeopleDivider",
                            borderBottom: !0,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(i.d)("Other People", "WhispersThreadBox")));
                        var r = null;
                        if (this.state.searching ? r = E.createElement(B.Ya, {
                                display: B.X.Flex,
                                flexDirection: B.Aa.Column,
                                margin: {
                                    top: 4
                                },
                                alignItems: B.f.Center
                            }, E.createElement(B.ab, {
                                delay: 0
                            })) : this.state.searchResults && this.state.searchResults.users && "" !== this.state.searchText && (r = this.state.searchResults.users.hits.filter(function(e) {
                                return !t.props.threadsByID[e.objectID]
                            }).map(this.renderUserSearchResult)), this.props.error) e = E.createElement(B.Ya, {
                            margin: {
                                x: "auto"
                            },
                            display: B.X.Flex,
                            justifyContent: B.Xa.Center,
                            alignItems: B.f.Center,
                            fullHeight: !0
                        }, E.createElement(B.W, {
                            color: B.O.Error
                        }, Object(i.d)("There was a problem loading whispers.", "WhisperThreadsBox")));
                        else if (this.props.loading) e = E.createElement(B.ab, null);
                        else {
                            var a = this.props.orderedThreadIDs;
                            "" !== this.state.searchText && (a = this.filterExistingThreads(this.state.searchText)), e = a.filter(function(e) {
                                return t.props.threadsByID[e] && !t.props.threadsByID[e].archived
                            }).map(function(e, n) {
                                var r = 0 === n ? function() {
                                        t.props.latencyTracking.reportCustomEvent(t.whispersHistoryLatencyEvent)
                                    } : void 0,
                                    i = t.props.threadsByID[e],
                                    a = q(i.participants, t.props.currentUserID);
                                return a ? E.createElement(V, {
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
                        return E.createElement(O.b, {
                            suppressScrollX: !0
                        }, E.createElement("div", {
                            role: "list"
                        }, e, n, r, E.createElement(O.a, {
                            enabled: this.state.open,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        })))
                    }, t.prototype.renderHeader = function() {
                        return this.state.open ? E.createElement(B.Fb, {
                            className: "whispers-threads-box__header",
                            "data-a-target": "whispers-threads-box__header",
                            alignItems: B.f.Center,
                            background: B.r.Alt,
                            borderBottom: !0,
                            color: B.O.Base,
                            display: B.X.Flex,
                            flexDirection: B.Aa.Row,
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                y: .5,
                                x: 1
                            },
                            "data-click-hide-id": "threads-box-header"
                        }, E.createElement(B.Qa, {
                            flexGrow: 1,
                            display: B.X.Flex
                        }, E.createElement("div", {
                            id: "whispers-box-header"
                        }, E.createElement(B.W, {
                            type: B.Wb.Span,
                            bold: !0
                        }, Object(i.d)("Whispers", "WhisperThreadsBox")))), E.createElement(R.a, {
                            ref: this.saveSettingsMenuRef
                        }, E.createElement(B.A, {
                            ariaLabel: Object(i.d)("Settings", "WhisperThreadsBox"),
                            icon: B.ub.Gear,
                            "data-a-target": "whisper-settings-button"
                        }), E.createElement(B.u, {
                            size: B.w.Small,
                            direction: B.v.BottomRight,
                            offsetX: "0.5rem"
                        }, E.createElement(Y, {
                            onMarkAllMessagesRead: this.onMarkAllMessagesRead
                        }))), E.createElement(B.A, {
                            ariaLabel: Object(i.d)("Minimize", "WhisperThreadsBox"),
                            icon: B.ub.Minimize,
                            onClick: this.handleClose,
                            "data-a-target": "whisper-close-button"
                        })) : null
                    }, t.prototype.renderFooter = function() {
                        return this.state.open ? E.createElement(B.Fb, {
                            display: B.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            alignItems: B.f.Center,
                            borderTop: !0,
                            background: B.r.Alt
                        }, E.createElement(B.Ya, {
                            flexGrow: 1,
                            padding: {
                                top: .5,
                                bottom: .5,
                                left: 1
                            }
                        }, E.createElement(B.wb, {
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
                                        return e ? [4, this.searchClient.queryForType(x.a.Users, e, U.a())] : [2];
                                    case 1:
                                        return t = n.sent(), this.setState({
                                            searchResults: t,
                                            searching: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t = a.__decorate([Object(j.b)("WhisperCenter", {
                        autoReportInteractive: !0
                    })], t)
                }(E.Component)),
                $ = n("MJbm"),
                Z = n("aCAx"),
                J = n("kRBY"),
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
            }(X || (X = {}));
            var de = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        ! function(e) {
                            var t = {
                                target_user_id: e.targetUserID
                            };
                            i.o.track(ce.SpadeEventType.WhisperStrangerWarningImpression, t)
                        }({
                            targetUserID: this.props.targetUserID
                        })
                    }, t.prototype.render = function() {
                        var e;
                        return e = this.props.targetDisplayName ? Object(i.d)("You have blocked whispers from strangers. By sending a whisper to {username}, you will allow them to whisper you for 48 hours. You can disable their access again in whisper settings.", {
                            username: this.props.targetDisplayName
                        }, "WhisperThread") : Object(i.d)("You have blocked whispers from strangers. By sending a whisper to this user, you will allow them to whisper you for 48 hours. You can disable their access again in whisper settings.", "WhisperThread"), E.createElement(B.Ya, {
                            attachBottom: !0,
                            padding: 1,
                            position: B.kb.Absolute
                        }, E.createElement(B.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, E.createElement(B.W, {
                            color: B.O.Alt2,
                            fontSize: B.Ca.Size6
                        }, e)), E.createElement(B.z, {
                            onClick: this.props.onStrangerWarningConfirmation,
                            "data-test-selector": X.StrangerWarningConfirmationButton
                        }, Object(i.d)("Got it!", "WhisperThread")))
                    }, t
                }(E.Component),
                ue = n("NSwr"),
                pe = n("BhFH"),
                me = n("EvYO"),
                he = n("D7An"),
                fe = n("TvOw"),
                ge = n("m98o"),
                ve = n("as+V"),
                ke = n("oJmH"),
                be = n("iS14"),
                ye = n("lZZ2"),
                Se = n("0tEc"),
                _e = n("/rr3"),
                Ee = n("RQ6e"),
                Ce = n("Gu45"),
                Te = n("dr/4"),
                De = "whispers-report-user-button",
                Ne = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderReportButton = function() {
                            var e = t.props.displayName || t.props.login,
                                n = Object(i.d)("Report {displayName}", {
                                    displayName: e
                                }, "ThreadSettings");
                            return E.createElement(B.Va, {
                                "data-test-selector": De,
                                ariaLabel: n,
                                onClick: t.reportUser
                            }, E.createElement(B.Ya, {
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
                                    contentType: ae.N.WHISPER_REPORT,
                                    targetUserID: t.props.userID,
                                    contentID: t.props.threadID
                                },
                                title: Object(i.d)("Report {displayName}", {
                                    displayName: e
                                }, "ReportUserModal")
                            })
                        }, t.onReportModalClose = function(e, n) {
                            e === Ee.a.Success && n && t.props.onBlock && t.props.onBlock(t.props.threadID)
                        }, t.blockUser = function() {
                            t.props.showBlockModal({
                                context: ae.e.WHISPER,
                                currentUserData: t.props.currentUser,
                                displayName: t.props.displayName || t.props.login,
                                login: t.props.login,
                                onBlock: function() {
                                    return t.props.onBlock(t.props.threadID)
                                },
                                reason: fe.a.Other,
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
                        return E.createElement(B.Ya, {
                            display: B.X.Flex,
                            flexDirection: B.Aa.Column,
                            margin: 1
                        }, E.createElement(B.Va, {
                            ariaLabel: t,
                            onClick: this.toggleMutethread
                        }, E.createElement(B.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, t)), E.createElement(B.Fb, {
                            borderBottom: !0,
                            margin: {
                                y: 1,
                                left: .5
                            }
                        }), E.createElement(Se.a, {
                            friendButtonUIType: _e.a.WhisperSettings,
                            targetID: this.props.userID
                        }), this.renderRevokeButton(), this.renderBlockButton(), this.renderReportButton(), E.createElement(B.Va, {
                            linkTo: "/" + this.props.login,
                            onClick: this.onChannelRedirect,
                            ariaLabel: n
                        }, E.createElement(B.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, n)))
                    }, t.prototype.renderRevokeButton = function() {
                        return this.props.hasTemporaryWhisperAccess ? E.createElement(B.Va, {
                            onClick: this.onRevokeButtonClicked,
                            "data-test-selector": "whispers-revoke-access-button"
                        }, E.createElement(B.Ya, {
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
                        }, "ThreadSettings"), t = this.blockUser), E.createElement(B.Va, {
                            "data-test-selector": "whispers-block-user-button",
                            ariaLabel: e,
                            onClick: t
                        }, E.createElement(B.Ya, {
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
            var we = Object(ke.compose)(Object(b.connect)(null, function(e) {
                    return {
                        onCloseThread: function(t) {
                            return e(Object(s.h)(t, Object(S.a)()))
                        }
                    }
                }), Object(C.a)(Ce, {
                    name: "revokeWhisperAccess"
                }), Object(C.a)(Te, {
                    name: "setMuteThread"
                }), ye.a, Object(be.a)())(Ne),
                Ie = n("pORx");
            var Oe = n("NKxy");
            var Re, Me = n("vGFN"),
                Ue = (n("hRS0"), "report-as-spam-button"),
                Fe = "mark-not-spam-button",
                je = "dismiss-prompt-button",
                xe = "spam-prompt-pending-target",
                Ae = "spam-prompt-reported-target",
                We = {
                    displayName: "???",
                    login: "???",
                    displayBadges: [],
                    id: "",
                    self: null
                },
                Pe = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.renderPotentialSpamPrompt = function() {
                            if (n.props.spamInfo && "low" !== n.props.spamInfo.likelihood && null === n.props.spamInfo.lastMarkedNotSpamAt) {
                                if ("pending" === n.state.potentialSpamResolution) return E.createElement(B.Ya, {
                                    "data-a-target": xe,
                                    className: "thread-header__potential-spam-prompt",
                                    attachRight: !0,
                                    attachLeft: !0,
                                    attachTop: !0
                                }, E.createElement(B.Fb, {
                                    background: B.r.Alt2,
                                    padding: .5,
                                    elevation: 2
                                }, E.createElement(B.Ya, {
                                    display: B.X.InlineBlock,
                                    margin: .5
                                }, E.createElement(B.W, {
                                    type: B.Wb.Span,
                                    fontSize: B.Ca.Size6,
                                    color: B.O.Alt2
                                }, Object(i.d)("It looks like this conversation triggered our spam detector. If it is spam, please report it!", "ThreadHeader"))), E.createElement(B.Ya, {
                                    display: B.X.InlineBlock,
                                    margin: .5
                                }, E.createElement(B.z, {
                                    "data-a-target": Ue,
                                    type: B.F.Alert,
                                    onClick: n.reportSpam,
                                    size: B.D.Small
                                }, Object(i.d)("Report spam", "ThreadHeader"))), E.createElement(B.Ya, {
                                    display: B.X.InlineBlock,
                                    margin: .5
                                }, E.createElement(B.z, {
                                    "data-a-target": Fe,
                                    onClick: n.markNotSpam,
                                    size: B.D.Small
                                }, Object(i.d)("This is not spam", "ThreadHeader")))));
                                if ("reported" === n.state.potentialSpamResolution && n.interlocutor.displayName) return E.createElement(B.Ya, {
                                    "data-a-target": Ae,
                                    className: "thread-header__potential-spam-prompt",
                                    attachRight: !0,
                                    attachLeft: !0,
                                    attachTop: !0
                                }, E.createElement(B.Fb, {
                                    background: B.r.Alt2,
                                    padding: .5,
                                    elevation: 2
                                }, E.createElement(B.Ya, {
                                    display: B.X.InlineBlock,
                                    margin: .5
                                }, E.createElement(B.W, {
                                    type: B.Wb.Span,
                                    fontSize: B.Ca.Size6,
                                    color: B.O.Alt2
                                }, Object(i.d)("Thank you for helping us fight spam. We've blocked {user} from sending you further whispers. You can undo this from the Whisper Settings Menu.", {
                                    user: n.interlocutor.displayName
                                }, "ThreadHeader"))), E.createElement(B.Ya, {
                                    display: B.X.InlineBlock,
                                    margin: .5
                                }, E.createElement(B.z, {
                                    "data-a-target": je,
                                    type: B.F.Text,
                                    onClick: n.dismissSpamPrompt,
                                    size: B.D.Small
                                }, Object(i.d)("Dismiss", "ThreadHeader")))))
                            }
                            return null
                        }, n.reportSpam = function() {
                            n.props.reportUserMutation(n.interlocutor.id, fe.b.Spam, n.props.threadID), n.props.blockUserMutation(n.interlocutor.id, fe.a.Other, ae.e.WHISPER, n.props.currentUser), n.props.setThreadSpamStatusMutation(n.props.threadID, !0), Object(Me.l)(n.interlocutor.login, Me.a.SpamPropmt), n.setState({
                                potentialSpamResolution: "reported"
                            })
                        }, n.markNotSpam = function() {
                            n.props.setThreadSpamStatusMutation(n.props.threadID, !1), Object(Me.o)(n.props.threadID), n.setState({
                                potentialSpamResolution: "dismissed"
                            })
                        }, n.dismissSpamPrompt = function() {
                            n.props.onBlock && n.props.onBlock(n.props.threadID), Object(Me.n)(n.props.threadID), n.setState({
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
                            t.stopPropagation(), n.props.interlocutor && n.props.interlocutorActivity ? Object(me.b)({
                                context: e,
                                friendActivity: n.props.interlocutorActivity,
                                friendLogin: n.props.interlocutor.login
                            }) : i.k.warn("[ThreadHeader] Attempted to track presence click without required data.")
                        };
                        var r = i.p.experiments.getAssignment(he.b.ExtendedPresence);
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
                        if (this.props.isLoading || !this.props.currentUser || !this.interlocutor) return E.createElement(B.Ya, {
                            className: t,
                            display: B.X.Flex,
                            justifyContent: B.Xa.Between,
                            fullWidth: !0,
                            alignItems: B.f.Center,
                            padding: {
                                y: .5,
                                x: 1
                            },
                            flexShrink: 0,
                            flexGrow: 0,
                            flexWrap: B.Ba.NoWrap
                        }, E.createElement(B.jb, {
                            height: 20,
                            width: 80
                        }), E.createElement(B.Ya, {
                            display: B.X.Flex
                        }, E.createElement(B.A, {
                            ariaLabel: a,
                            icon: B.ub.RemoveTag,
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
                            if (l = E.createElement(B.Ya, {
                                    margin: {
                                        left: 1
                                    },
                                    display: B.X.Flex,
                                    alignItems: B.f.Center
                                }, E.createElement(B.lb, {
                                    status: function(e) {
                                        switch (e) {
                                            case ue.a.Online:
                                                return B.mb.Online;
                                            case ue.a.Away:
                                            case ue.a.Idle:
                                                return B.mb.Away;
                                            case ue.a.Busy:
                                                return B.mb.Busy;
                                            case ue.a.Offline:
                                            case ue.a.Invisible:
                                            default:
                                                return B.mb.Offline
                                        }
                                    }(u || ue.a.Offline)
                                })), p) {
                                var m = {
                                        activity: p,
                                        availability: this.state.hasExtendedRichPresence ? u : void 0
                                    },
                                    h = Object(ge.b)(m, !0),
                                    f = null,
                                    g = Object(ge.c)(this.interlocutor.login, p);
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
                                    c = E.createElement(B.U, {
                                        className: v,
                                        title: Object(ge.b)(m) || "",
                                        onClick: this.onPresenceClick.bind(this, me.a.WhisperHeaderLink),
                                        to: f,
                                        "data-test-selector": "whispers-thread__presence-link"
                                    }, h)
                                } else c = h;
                                this.props.isCollapsed || (d = E.createElement(B.Ya, {
                                    padding: {
                                        right: .5
                                    }
                                }, E.createElement(ve.a, {
                                    availability: u || ue.a.Offline,
                                    link: f,
                                    onClick: this.onPresenceClick.bind(this, me.a.WhisperHeaderButton),
                                    shouldHollowOverlay: this.props.isHighlighted
                                })))
                            }
                        }
                        this.props.isCollapsed || !this.props.currentUser || this.props.interactionsDisabled || (s = E.createElement(R.a, null, E.createElement(B.A, {
                            ariaLabel: o,
                            icon: B.ub.Gear,
                            overlay: e
                        }), E.createElement(B.u, {
                            direction: B.v.BottomRight,
                            offsetX: "0.5rem",
                            size: B.w.Small
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
                            hasTemporaryWhisperAccess: !!this.interlocutor.self && this.interlocutor.self.whisperPermissions.receive === ae.Da.TEMPORARY
                        }))));
                        var k = this.interlocutor.displayBadges.map(function(e) {
                            return E.createElement(B.Qa, {
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
                        return E.createElement(B.Ya, {
                            className: n,
                            position: B.kb.Relative,
                            fullWidth: !0
                        }, E.createElement("div", {
                            className: "thread-header__click-area",
                            onClick: this.props.onHeaderInteract,
                            onKeyPress: this.onHeaderActivate,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur,
                            "data-a-target": "thread-header__click-area",
                            tabIndex: 0
                        }, E.createElement(B.Ya, {
                            className: t,
                            fullWidth: !0,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            alignItems: B.f.Center,
                            flexGrow: 1,
                            display: B.X.Flex,
                            "data-a-target": "whisper-thread-title-bar-" + (this.interlocutor && this.interlocutor.login),
                            "data-click-out-id": "thread-expand-close",
                            flexWrap: B.Ba.NoWrap
                        }, E.createElement(B.Ya, {
                            display: B.X.Flex,
                            flexDirection: B.Aa.Column,
                            flexGrow: 1,
                            fullHeight: !0,
                            overflow: B.db.Hidden
                        }, E.createElement(B.Ya, {
                            display: B.X.Flex,
                            flexGrow: 1,
                            alignItems: B.f.Center,
                            flexWrap: B.Ba.NoWrap,
                            padding: {
                                right: 1
                            },
                            ellipsis: !0
                        }, k, E.createElement(B.W, {
                            className: r,
                            type: B.Wb.Span,
                            bold: !0,
                            ellipsis: !0
                        }, this.interlocutor.displayName ? this.interlocutor.displayName : We.displayName), l), E.createElement(B.Fb, {
                            className: "thread-header__activity",
                            color: this.props.isHighlighted ? B.O.Overlay : B.O.Base,
                            padding: {
                                right: 1
                            },
                            ellipsis: !0
                        }, c)), E.createElement(B.Ya, {
                            display: B.X.Flex,
                            flexShrink: 0,
                            flexDirection: B.Aa.Row,
                            alignItems: B.f.Center
                        }, d, E.createElement("div", {
                            onClick: this.onSettingsClick
                        }, s), E.createElement(B.A, {
                            ariaLabel: a,
                            icon: B.ub.RemoveTag,
                            "data-a-target": "thread-close-button-" + (this.interlocutor && this.interlocutor.login),
                            "data-test-selector": "thread-header__close-button-" + this.props.threadID,
                            onClick: this.props.onClose,
                            overlay: e
                        })))), this.renderPotentialSpamPrompt())
                    }, Object.defineProperty(t.prototype, "interlocutor", {
                        get: function() {
                            return this.props.interlocutor || We
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(E.Component),
                Le = Object(r.compose)(Object(pe.a)(), function() {
                    var e = this;
                    return Object(C.a)(Ie, {
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
                                                    return e = a.sent(), i.k.error(e, "Unable to report user"), [3, 4];
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
                    return Object(C.a)(Oe, {
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
                                                    return e = a.sent(), i.k.error(e, "Unable to modify threads spam status user"), [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    })
                                }
                            }
                        }
                    })
                }())(Pe),
                Be = n("HAa/");
            ! function(e) {
                e[e.Timestamp = 0] = "Timestamp", e[e.Whisper = 1] = "Whisper", e[e.Warning = 2] = "Warning", e[e.InactiveUserNotice = 3] = "InactiveUserNotice", e[e.NewMessages = 4] = "NewMessages", e[e.Notification = 5] = "Notification"
            }(Re || (Re = {}));
            n("0JUI");
            var ze = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.message;
                        switch (e.type) {
                            case Re.Timestamp:
                                return E.createElement(B.Fb, {
                                    className: "thread-message__timestamp",
                                    color: B.O.Alt2,
                                    fontSize: B.Ca.Size7
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
                                    }, "ThreadMessage") : e.timestamp < n ? Object(i.j)(e.timestamp, s) : Object(i.j)(e.timestamp, a.__assign({}, o, {
                                        weekday: "long"
                                    }));
                                    var l = Object(i.j)(e.timestamp, a.__assign({}, s, {
                                        timeZoneName: "short"
                                    }));
                                    return E.createElement(B.Ya, {
                                        padding: {
                                            y: 1
                                        },
                                        textAlign: B.Sb.Center
                                    }, E.createElement("span", {
                                        title: l
                                    }, "" + r))
                                }(e));
                            case Re.Warning:
                                return E.createElement(B.Fb, {
                                    className: "thread-message__warning",
                                    color: B.O.Alt2
                                }, E.createElement(B.Ya, {
                                    padding: {
                                        y: .5,
                                        x: 1
                                    }
                                }, Object(i.d)("Please don't share passwords or personal information.", "whispers")));
                            case Re.InactiveUserNotice:
                                return E.createElement(B.Fb, {
                                    className: "thread-message__inactive-user",
                                    color: B.O.Alt2
                                }, E.createElement(B.Ya, {
                                    padding: {
                                        y: .5,
                                        x: 1
                                    }
                                }, Object(i.d)("This account is no longer active.", "whispers")));
                            case Re.Whisper:
                                return this.props.reportOutgoingWhisperRendered && this.props.reportOutgoingWhisperRendered(e.content), E.createElement(B.Ya, {
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
                                    if (n.push.apply(n, z(e.content, e.emotes)), e.editedAt) {
                                        var r = Object(i.d)("edited", "ThreadMessage"),
                                            o = Object(i.d)("{timestamp, date, full} {timestamp, time, long}", {
                                                timestamp: new Date(e.editedAt)
                                            }, "ThreadMessage");
                                        n.push(E.createElement(B.Qa, {
                                            key: "editedAt",
                                            margin: {
                                                left: 1
                                            }
                                        }, E.createElement(B.W, {
                                            type: B.Wb.Span,
                                            className: "thread-message__message--edited",
                                            title: o,
                                            color: B.O.Alt2
                                        }, "(" + r + ")")))
                                    }
                                    var s = e.from && e.from.chatColor || "",
                                        l = e.from && e.from.displayName || E.createElement(B.W, {
                                            type: B.Wb.Span,
                                            italic: !0
                                        }, Object(i.d)("Unknown", "ThreadMessage")),
                                        c = t ? s : "";
                                    return E.createElement(B.Ya, {
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
                            case Re.NewMessages:
                                return E.createElement(B.Fb, {
                                    className: "thread-message__new-messages",
                                    color: B.O.OverlayAlt,
                                    fontSize: B.Ca.Size7
                                }, E.createElement(B.Ya, {
                                    textAlign: B.Sb.Center,
                                    padding: {
                                        y: .5
                                    }
                                }, Object(i.d)("New Whispers", "whispers")));
                            case Re.Notification:
                                return E.createElement(B.Ya, {
                                    className: "thread-message__notification"
                                }, function(e) {
                                    return E.createElement(B.Ya, {
                                        padding: {
                                            y: .5,
                                            x: 1
                                        }
                                    }, E.createElement(B.W, {
                                        type: B.Wb.Span,
                                        color: B.O.Alt2
                                    }, e.content))
                                }(e));
                            default:
                                return null
                        }
                    }, t
                }(E.Component),
                Ve = function(e) {
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
                                return E.createElement(ze, {
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
                                    type: Re.Whisper,
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
                                type: Re.Timestamp,
                                timestamp: new Date(e.sentAt)
                            }
                        }, t.notificationsFor = function(e) {
                            return t.props.notifications.filter(function(t) {
                                return t.afterMessageID === e
                            }).map(t.createNotificationLine)
                        }, t.createNotificationLine = function(e) {
                            return {
                                type: Re.Notification,
                                content: e.content
                            }
                        }, t.createNewMessagesIndicator = function() {
                            return {
                                type: Re.NewMessages
                            }
                        }, t.createWarningMessage = function() {
                            return {
                                type: Re.Warning
                            }
                        }, t.createInactiveUserMessage = function() {
                            return {
                                type: Re.InactiveUserNotice
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
                        return E.createElement(B.Ya, {
                            fullHeight: !0
                        }, E.createElement(O.b, {
                            scrollRef: this.saveScrollRef,
                            suppressScrollX: !0
                        }, E.createElement(B.Ya, null, E.createElement(O.a, {
                            enabled: !this.state.disableInfiniteTrigger,
                            loadMore: this.loadMore,
                            pixelThreshold: 200,
                            orientation: Be.b.Down,
                            contentLength: e.length
                        }), this.renderMessages(e))))
                    }, t.prototype.generateMessageKey = function(e, t) {
                        switch (e.type) {
                            case Re.NewMessages:
                            case Re.Warning:
                            case Re.InactiveUserNotice:
                                return "" + e.type;
                            case Re.Timestamp:
                                return e.type + "-" + e.timestamp.getTime();
                            case Re.Whisper:
                                return e.type + "-" + e.id;
                            case Re.Notification:
                                return e.type + "-" + t;
                            default:
                                return i.k.warn("[ThreadMessages] Encountered an unknown message type."), t
                        }
                    }, t
                }(E.Component);
            var He = Object(b.connect)(function(e, t) {
                    return {
                        notifications: function(e, t) {
                            return e.whispers.notifications.byThreadID[t] || k
                        }(e, t.thread.id)
                    }
                })(Ve),
                Ge = n("Wcon"),
                Ye = {};

            function qe(e, t) {
                var n = Ye[e.threadID];
                if (n) {
                    if (n.lastReadCursorID >= t) return;
                    clearTimeout(n.timeoutHandle)
                }
                var r = setTimeout(function() {
                    var t = a.__assign({
                        mutation: Ge
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
                    i.p.apollo.client.mutate(t), delete Ye[e.threadID]
                }, 250);
                Ye[e.threadID] = {
                    timeoutHandle: r,
                    lastReadCursorID: t
                }
            }
            var Xe = n("TOso");

            function Qe(e) {
                return e.type === D.PubsubMessageType.WhisperSent
            }

            function Ke(e) {
                return e.type === D.PubsubMessageType.WhisperReceived
            }
            n("28vT");
            var $e, Ze, Je = n("Jpf8"),
                et = n("4VGW");
            (Ze || (Ze = {})).Wrapper = "thread__wrapper";
            var tt = function(e) {
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
                                e && !isNaN(e) || (e = 0), qe({
                                    threadID: t.props.threadID,
                                    lastReadMessageID: t.props.data.whisperThread && t.props.data.whisperThread.messages.edges[0].node.id || ""
                                }, e)
                            }
                        }, t.sendWhisper = function(e) {
                            if ("" !== e) {
                                t.props.latencyTracking.resetCustomEvents(F.a.Whispers), t.outgoingWhisperRenderedEvent = t.props.latencyTracking.registerCustomEvent({
                                    benchmark: 150,
                                    group: F.a.Whispers,
                                    key: F.b.WhispersRenderSent,
                                    label: F.c.RenderSent,
                                    start: F.d.Registration
                                }), t.outgoingWhisperMessage = e;
                                var n = Object(Q.b)(t.props.threadID, t.props.currentUserID);
                                n ? (t.props.data.currentUser && t.interlocutor && Object(H.m)({
                                    threadID: t.props.threadID,
                                    targetUserLogin: t.interlocutor.login,
                                    inChannelChat: !1
                                }), Object(Xe.b)({
                                    currentUserID: t.props.currentUserID,
                                    emotes: t.props.emoteSetsData && t.props.emoteSetsData.emoteMap || {},
                                    message: e,
                                    recipientUserID: n
                                }).then(function(e) {
                                    if (e.data.sendWhisper.error) throw new Error(e.data.sendWhisper.error.code)
                                }).catch(function(e) {
                                    var n, r;
                                    switch (e.message) {
                                        case Xe.a.RestrictedRecipient:
                                            n = Object(i.d)("Your whisper was not delivered because the recipient's settings prevent them from receiving it.", "Thread");
                                            break;
                                        case Xe.a.BodyEmpty:
                                            n = Object(i.d)("Your whisper was not delivered because it was empty.", "Thread");
                                            break;
                                        case Xe.a.TargetBanned:
                                            n = Object(i.d)("Your whisper was not delivered because the recipient is suspended.", "Thread");
                                            break;
                                        default:
                                            n = Object(i.d)("Your whisper was not delivered.", "Thread")
                                    }
                                    t.props.data.whisperThread && t.props.data.whisperThread.messages.edges.length > 0 && (r = t.props.data.whisperThread.messages.edges[0].node.id), t.props.notifyWhisperThread(t.props.threadID, n, r)
                                })) : i.k.warn("Unable to parse whisper recipient ID.")
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
                            if (e) return q(e.participants, t.props.currentUserID)
                        }, t.hasUnknownParticipant = function() {
                            var e = t.otherParticipant();
                            return !(e && e.login)
                        }, t.shouldDisableInteractions = function() {
                            return t.hasUnknownParticipant()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.data.error && (this.hadError = !0), e.data.error || e.data.loading || !e.data.whisperThread || this.props.reportThreadData(e.threadID, e.data.whisperThread)
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.markSuspendedUserThreadRead()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.markSuspendedUserThreadRead()
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
                        return t = !this.state.strangerWarningDismissed && this.interlocutor && this.interlocutor.id && this.interlocutor.self && this.interlocutor.self.whisperPermissions.receive === ae.Da.NOT_PERMITTED ? E.createElement(de, {
                            onStrangerWarningConfirmation: this.onStrangerWarningConfirmation,
                            targetDisplayName: this.interlocutor.displayName,
                            targetUserID: this.interlocutor.id
                        }) : this.renderMessageArea(), E.createElement(I.a, {
                            onClickOut: this.onClickOut
                        }, E.createElement(B.Fb, {
                            className: e,
                            display: B.X.Flex,
                            flexShrink: 0,
                            flexGrow: 0,
                            position: B.kb.Relative,
                            overflow: B.db.Hidden,
                            background: B.r.Base,
                            margin: {
                                left: 1
                            },
                            alignItems: B.f.Center,
                            justifyContent: B.Xa.Center,
                            "data-test-selector": Ze.Wrapper,
                            "data-a-target": "whisper-thread-" + (this.interlocutor && this.interlocutor.login) + (this.props.collapsed ? "-collapsed" : ""),
                            elevation: 3
                        }, t, E.createElement(B.Ya, {
                            position: B.kb.Absolute,
                            fullWidth: !0,
                            flexShrink: 0,
                            display: B.X.Flex,
                            alignItems: B.f.Center,
                            attachTop: !0,
                            attachLeft: !0
                        }, E.createElement(Le, {
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
                    }, t.prototype.markSuspendedUserThreadRead = function() {
                        this.hasUnknownParticipant() && this.markThreadMessagesAsRead()
                    }, t.prototype.renderMessageArea = function() {
                        var e = this.props.emoteSetsData && this.props.emoteSetsData.emoteSets || [];
                        return [E.createElement(B.Ya, {
                            className: "whispers-thread__autocomplete-container",
                            position: B.kb.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            refDelegate: this.setContainerRef,
                            key: "whispers-input"
                        }, E.createElement(B.Ya, {
                            position: B.kb.Absolute,
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
                            position: B.kb.Absolute,
                            shouldCloseOnClickOut: !0
                        }))), E.createElement(B.Qa, {
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
                        }) : this.props.data.loading || this.props.activityData.loading || !this.props.data.whisperThread ? E.createElement(B.Ya, {
                            display: B.X.Flex,
                            justifyContent: B.Xa.Center,
                            alignItems: B.f.Center,
                            margin: 2,
                            fullHeight: !0,
                            flexGrow: 1
                        }, E.createElement(B.ab, null)) : E.createElement(He, {
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
                nt = Object(r.compose)(Object(C.a)(et, {
                    options: function(e) {
                        return {
                            variables: {
                                targetUserID: Object(Q.b)(e.threadID, e.currentUserID) || ""
                            },
                            skip: !e.currentUserID || !e.threadID
                        }
                    },
                    name: "activityData"
                }), Object(C.a)(Je, {
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
                                    query: Je,
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
                        return Object(w.M)(e.currentUserID)
                    },
                    mapMessageTypesToProps: ($e = {}, $e[D.PubsubMessageType.WhisperReceived] = "whisperReceived", $e[D.PubsubMessageType.WhisperSent] = "whisperSent", $e),
                    skipMessage: function(e, t) {
                        return !Qe(e) && !Ke(e) || e.data_object.thread_id !== t.threadID
                    }
                }]), Object(ie.a)(), Object(j.b)("WhispersThread", {
                    autoReportInteractive: !0
                }))(tt);
            var rt = Object(b.connect)(function(e) {
                    return {
                        isLoggedIn: Object(J.f)(e)
                    }
                }, function(e) {
                    return Object(r.bindActionCreators)({
                        notifyWhisperThread: g,
                        showReportUserModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Z.d)(ee.a, t)
                        }
                    }, e)
                })(nt),
                it = (n("J45U"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.resizeAnimationHandle = null, t.renderThread = function(e) {
                            return e ? E.createElement(rt, {
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
                        return E.createElement(B.Ya, {
                            className: "whispers-open-threads",
                            display: B.X.Flex,
                            flexDirection: B.Aa.RowReverse,
                            alignItems: B.f.End,
                            position: B.kb.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            refDelegate: S.b
                        }, t, E.createElement($.a, {
                            onResize: this.handleContentResize
                        }))
                    }, t
                }(E.Component));
            var at = Object(b.connect)(function(e) {
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
            })(it);

            function ot(e) {
                return Object.keys(e).reduce(function(t, n) {
                    var r = e[n];
                    return r.muted || r.archived ? t : t + r.unreadMessagesCount
                }, 0)
            }
            var st = n("U1yz"),
                lt = function(e) {
                    for (var t = {}, n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        t[i.id] = a.__assign({}, ct(i))
                    }
                    return t
                },
                ct = function(e) {
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
                dt = n("xXlL");
            var ut = n("Ideu"),
                pt = n("WcC5"),
                mt = n("PRj+"),
                ht = (n("c/47"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.erroredLoadingMore = !1, n.logger = i.k.withCategory("whispers"), n.archiveThread = function(e) {
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
                        }, n.onNotificationInteracted = function(e) {
                            var t = /(.*)-whisper-body/.exec(e.actionID);
                            if (t && t.length > 1) {
                                var r = t[1];
                                n.selectThread(r)
                            }
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
                            n.state.threadsByID[e] || Object(N.e)(mt, {
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
                                unreadCount: ot(o)
                            })
                        };
                        var r = n.props.data.currentUser && n.props.data.currentUser.whisperThreads && lt(n.props.data.currentUser.whisperThreads.edges.map(function(e) {
                            return e.node
                        })) || {};
                        return n.state = {
                            error: !!n.props.data.error,
                            orderedThreadIDs: n.props.data.currentUser && n.props.data.currentUser.whisperThreads && n.props.data.currentUser.whisperThreads.edges.map(function(e) {
                                return e.node.id
                            }) || [],
                            renderError: !1,
                            threadsByID: r,
                            unreadCount: ot(r)
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                        var n = this;
                        this.setState({
                            renderError: !0
                        }, function() {
                            i.p.stats.recordComponentError("Whispers"), n.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                                info: t
                            })
                        })
                    }, t.prototype.componentDidMount = function() {
                        i.p.integrations.notifications && i.p.integrations.notifications.onNotificationInteracted(this.onNotificationInteracted)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (e.data.error) this.setState({
                            error: !!e.data.error
                        });
                        else if (!e.data.loading && e.data.currentUser && e.data.currentUser.whisperThreads) {
                            var t = lt(e.data.currentUser.whisperThreads.edges.map(function(e) {
                                return e.node
                            }));
                            this.setState({
                                threadsByID: t,
                                orderedThreadIDs: e.data.currentUser.whisperThreads.edges.map(function(e) {
                                    return e.node.id
                                }),
                                unreadCount: ot(t)
                            })
                        }
                    }, t.prototype.render = function() {
                        if (!this.props.data.currentUser || this.state.renderError || !this.props.isVisible) return null;
                        var e = _({
                            whispers: !0,
                            "whispers--theatre-mode": this.props.theatreModeEnabled,
                            "whispers--right-column-expanded": this.props.rightColumnExpanded
                        });
                        return E.createElement(B.Ya, {
                            className: e,
                            position: B.kb.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            margin: {
                                right: 1
                            }
                        }, E.createElement(at, {
                            currentUserID: this.props.data.currentUser.id,
                            reportThreadData: this.handleThreadDataReport,
                            archiveThread: this.archiveThread
                        }), E.createElement(K, {
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
                    }, t = a.__decorate([Object(C.a)(mt, {
                        props: function(e) {
                            return a.__assign({}, e, {
                                loadMore: function() {
                                    return e.data.fetchMore({
                                        query: mt,
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
                    }), Object(C.a)(pt, {
                        name: "archiveThread"
                    }), Object(T.a)(function(e) {
                        return {
                            query: mt,
                            types: [D.PubsubMessageType.WhisperDeleted, D.PubsubMessageType.WhisperEdited, D.PubsubMessageType.WhisperSent, D.PubsubMessageType.WhisperAllThreadsUpdate, D.PubsubMessageType.WhisperReceived, D.PubsubMessageType.WhisperThreadUpdate],
                            variables: a.__assign({}, e.data.variables),
                            skip: !e.data.currentUser || void 0 === e.data.currentUser.id,
                            topic: Object(w.M)(e.data.currentUser && e.data.currentUser.id || ""),
                            mutator: function(t, n) {
                                if (!n.currentUser || !n.currentUser.whisperThreads) return n;
                                if (Qe(t) || Ke(t)) {
                                    if (Ke(t)) {
                                        var r = n.currentUser.whisperThreads.edges.find(function(e) {
                                            return e.node.id === t.data_object.thread_id
                                        });
                                        if (r) {
                                            var a = r.node.participants.find(function(e) {
                                                return !!e && e.id === "" + t.data_object.from_id
                                            });
                                            a && (Object(H.l)({
                                                targetUserLogin: a.login,
                                                threadID: t.data_object.thread_id
                                            }), i.p.integrations.notifications && i.p.integrations.notifications.send({
                                                body_md: "**" + a.displayName + "** " + t.data_object.body,
                                                thumbnail_url: a.profileImageURL,
                                                id: t.data_object.thread_id,
                                                actions: [{
                                                    id: t.data_object.thread_id + "-whisper-body",
                                                    type: ut.NotificationsIntegrationNotificationActionType.Body
                                                }],
                                                created_at: Date.now(),
                                                updated_at: Date.now(),
                                                type: "whisper",
                                                read: !1
                                            }))
                                        }
                                    }
                                    return function(e, t, n, r) {
                                        if (!t.currentUser || !t.currentUser.whisperThreads) return t;
                                        var a = i.n.get("whisperDoNotDisturb", !1),
                                            o = t.currentUser.whisperThreads.edges.find(function(t) {
                                                return t.node.id === e.data_object.thread_id
                                            });
                                        if (o) {
                                            var s = Object(dt.c)(e);
                                            o.node.messages.edges.unshift(s), Ke(e) && (e.data_object.thread_id !== n ? o.node.unreadMessagesCount += 1 : qe({
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
                                        r && (r.node.deletedAt = new Date(1e3 * e.data_object.deleted_at).toISOString(), r.node.content.content = e.data_object.body, r.node.content.emotes = Object(dt.b)(e.data_object.tags.emotes))
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
                                        r && (r.node.editedAt = new Date(1e3 * e.data_object.edited_at).toISOString(), r.node.content.content = e.data_object.body, r.node.content.emotes = Object(dt.b)(e.data_object.tags.emotes))
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
                                if (Qe(e)) {
                                    if (!t.currentUser || !t.currentUser.whisperThreads) return !1;
                                    var n = void 0;
                                    try {
                                        n = Object(st.a)(i.p.apollo.client.cache, e.data_object.thread_id, !0)
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
            var ft = Object(b.connect)(function(e) {
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
            })(ht);
            n.d(t, "Whispers", function() {
                return ft
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
                switch (a.p.intl.getLanguageCode()) {
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
                c = (n("GOKC"), i.createElement(l.Fb, {
                    alignItems: l.f.Center,
                    background: l.r.Overlay,
                    borderRadius: l.x.Small,
                    className: "emote-button__lock",
                    color: l.O.Overlay,
                    "data-test-selector": "emote-button-lock",
                    display: l.X.InlineFlex,
                    justifyContent: l.Xa.Center,
                    position: l.kb.Absolute,
                    zIndex: l.jc.Above
                }, i.createElement(l.tb, {
                    asset: l.ub.Lock,
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
                        u = i.createElement(s.a, {
                            className: "emote-picker__emote-image",
                            src: p,
                            srcSet: m,
                            alt: r || ""
                        })
                    }
                    return i.createElement("div", {
                        className: "emote-button"
                    }, i.createElement(l.Zb, {
                        label: r || Object(o.d)("Emote", "EmoteButton"),
                        direction: l.bc.Bottom
                    }, i.createElement(l.Qa, {
                        display: l.X.Flex,
                        alignItems: l.f.Center,
                        justifyContent: l.Xa.Center
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
                            t.props.onClickEmote && t.props.onClickEmote(e, t.props.context)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.emotes.map(function(t, n) {
                                return i.createElement(l.Ya, {
                                    key: "emote-button-padder-" + t.id + "--" + t.setID,
                                    padding: {
                                        left: e.props.spaced ? .5 : 0
                                    }
                                }, i.createElement(d, {
                                    key: "emote-button-" + t.id + "--" + t.setID,
                                    emote: t,
                                    isCriticalImage: 0 === n,
                                    locked: e.props.locked || t.isLocked,
                                    onClick: e.props.locked ? void 0 : e.handleClickEmote
                                }))
                            });
                        return i.createElement(l.Ya, {
                            display: l.X.Flex,
                            flexWrap: l.Ba.Wrap,
                            justifyContent: l.Xa.Center
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
                                            value: "28"
                                        }
                                    }],
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
                                                value: "price"
                                            },
                                            arguments: [],
                                            directives: []
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
                    end: 313
                }
            };
            n.loc.source = {
                body: "query EmotePicker_EmotePicker_UserSubscriptionProducts($channelOwnerID: ID!) {\nuser(id: $channelOwnerID) {\nid\nlogin\ncampaignProperties {\ndomains\n}\ndisplayName\nprofileImageURL(width: 28)\nsubscriptionProducts {\nid\nname\ntier\nurl\nemotes {\nid\ntoken\n}\nprice\nemoteSetID\n}\nself {\nsubscriptionBenefit {\nid\nplatform\n}\n}\n}\n}",
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
                l = n("GnwI"),
                c = n("br9A"),
                d = n("Ue10"),
                u = "subscribe-button__subscribe-tier-button",
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.openCheckout(), t.props.handleSubAction({
                                action: c.a.ClickCheckout,
                                checkoutButtonTier: t.props.tierPrice
                            })
                        }, t.openCheckout = function() {
                            t.props.isMobileCheckout || o.n.set(s.c, t.props.productName)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.props.isSubbedToTier) {
                            var e = Object(o.d)("Subscribed", "SubTierButton");
                            return i.createElement(d.z, {
                                ariaLabel: e,
                                "data-test-selector": u,
                                disabled: !0,
                                icon: d.ub.Star
                            }, e)
                        }
                        var t;
                        return t = this.props.isEsportChannel ? Object(o.d)("Get the All-Access Pass", "SubTierButton") : this.props.customSubscribeNowMessage ? this.props.customSubscribeNowMessage : Object(o.d)("Subscribe Now", "SubTierButton"), i.createElement(d.z, r.__assign({
                            ariaLabel: t + " " + this.props.tierPrice,
                            "data-test-selector": u,
                            linkTo: this.props.isMobileCheckout ? this.props.url : void 0,
                            onClick: this.handleClick,
                            purchase: this.props.tierPrice
                        }, Object(d.kc)(this.props), {
                            fullWidth: this.props.fullWidth
                        }), t)
                    }, t
                }(i.Component),
                m = Object(a.compose)(Object(l.b)("SubTierButton", {
                    autoReportInteractive: !0
                }))(p);
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return m
            })
        },
        Epr8: function(e, t, n) {},
        GLn2: function(e, t, n) {},
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
                var t = i.m.get(o, {}),
                    n = t[e.id];
                n ? (n.uses++, n.lastUpdatedAt = Date.now()) : t[e.id] = {
                    emote: e,
                    lastUpdatedAt: Date.now(),
                    uses: 1
                }, i.m.set(o, t)
            }

            function d() {
                var e = i.m.get(o, {});
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
                    i.m.set(o, c)
                }
            }

            function u(e) {
                var t = i.m.get(o, {}) || {},
                    n = [];
                return Object.keys(t).forEach(function(r) {
                    var i = t[r];
                    void 0 !== i && void 0 !== e[i.emote.token] && n.push(i)
                }), n.sort(function(e, t) {
                    return e.uses > t.uses ? -1 : t.uses > e.uses ? 1 : e.lastUpdatedAt > t.lastUpdatedAt ? -1 : t.lastUpdatedAt > e.lastUpdatedAt ? 1 : 0
                }), Object(a.b)(n.slice(0, 24).map(function(e) {
                    return e.emote
                }))
            }

            function p() {
                var e = i.m.get(o, {}) || {},
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
        KriR: function(e, t, n) {
            "use strict";
            n.d(t, "g", function() {
                return a
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "c", function() {
                return d
            });
            var r = n("/7QA"),
                i = n("2xye");

            function a(e) {
                var t = {
                    channel: e.channelLogin,
                    channel_id: e.channelId,
                    payment_type: e.paymentType,
                    payment_flow: e.paymentFlow,
                    quantity: e.quantity,
                    action: e.action,
                    action_detail: e.actionDetail,
                    product_id: e.productId,
                    ticket_price: e.ticketPrice,
                    currency: e.currency,
                    saved_payment: e.savedPayment,
                    is_anonymous: e.isAnonymous,
                    checkout_source: e.trackingContext.source
                };
                e.trackingContext.detail && (t.checkout_source_detail = e.trackingContext.detail), r.o.track(i.SpadeEventType.PaymentFormInteraction, t)
            }
            var o, s, l, c, d, u = function() {
                function e(e) {
                    this.store = {
                        savedPaymentAvailable: null,
                        savedPaymentDisplayed: null
                    }, this.counter = 0, this.config = {
                        allowDuplicateEvents: !(!e || !e.allowDuplicateEvents)
                    }
                }
                return e.prototype.get = function(e) {
                    return this.store[e]
                }, e.prototype.set = function(e) {
                    this.store = Object.assign(this.store, e)
                }, e.prototype.reportEvent = function() {
                    (0 === this.counter || this.config.allowDuplicateEvents) && (this.counter++, function(e) {
                        var t = {
                            saved_payment_available: e.savedPaymentAvailable,
                            saved_payment_displayed: e.savedPaymentDisplayed
                        };
                        r.o.track(i.SpadeEventType.PaymentFormDisplay, t)
                    }(this.store))
                }, e
            }();
            ! function(e) {
                e.Failed = "failed", e.Pending = "pending", e.Success = "success"
            }(o || (o = {})),
            function(e) {
                e.MysteryGifting = "mystery_gifting", e.Gifting = "gifting", e.Personal = "personal"
            }(s || (s = {})),
            function(e) {
                e.RecurlyCreditCard = "recurly_credit_card", e.RecurlyPaypal = "recurly_paypal", e.RecurlyPayWithAmazon = "recurly_pay_with_amazon", e.ZuoraCreditCard = "zuora_credit_card", e.Xsolla = "xsolla"
            }(l || (l = {})),
            function(e) {
                e.VendorLoginClick = "vendor_login_click", e.CompletePurchaseClick = "complete_purchase_click", e.PaypalTokenError = "paypal_token_error", e.RadioButtonClick = "radio_button_click", e.TokenError = "token_error", e.PriceChangeAlert = "price_change_alert", e.UnsupportedCountryAlert = "unsupported_country_alert"
            }(c || (c = {})),
            function(e) {
                e.ChannelSubscribeButton = "channel_subscribe_button_click", e.Direct = "direct_url_link", e.EmotePicker = "emote_picker_click", e.Extension = "extension_click", e.TurboSubscribeButton = "turbo_subscribe_button_click", e.ViewerCard = "viewer_card_click"
            }(d || (d = {}))
        },
        MJbm: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = a.p.logger.withCategory("resize-detector"), t.onScroll = function() {
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
                return c
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("yR8l"),
                o = n("0FG4"),
                s = n("D7An"),
                l = n("S4w9");

            function c() {
                return Object(a.a)(l, {
                    options: function(e) {
                        return {
                            variables: {
                                withOwner: "on" === i.p.experiments.getAssignment(s.b.EmotePickerV2)
                            }
                        }
                    },
                    props: function(e) {
                        if (e.data) {
                            var t = e.data.currentUser && e.data.currentUser.emoteSets || [],
                                n = t && Object(o.b)(t);
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
        O3Y9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r, i = n("/7QA"),
                a = n("2xye");

            function o(e) {
                i.p.tracking.track(a.SpadeEventType.WhisperIgnoreUser, {
                    ui_context: e.context,
                    from_login: e.currentUserLogin,
                    ignored_login: e.targetUserLogin
                })
            }! function(e) {
                e.ViewerCard = "chat_card", e.ReportWizard = "report_wizard"
            }(r || (r = {}))
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
                return h
            }), n.d(t, "d", function() {
                return f
            });
            var r = n("mrSG"),
                i = n("lZdE"),
                a = n("cpJf"),
                o = {
                    "B-?\\)": "B)",
                    "\\:-?[z|Z|\\|]": ":|",
                    "\\:-?\\)": ":)",
                    "\\:-?\\(": ":(",
                    "\\:-?(p|P)": ":P",
                    "\\;-?(p|P)": ";P",
                    "\\:-?[\\\\/]": ":/",
                    "\\;-?\\)": ";)",
                    "R-?\\)": "R)",
                    ":>": ":>",
                    "\\:\\&gt\\;": ":>",
                    "[oO](_|\\.)[oO]": "O_o",
                    "\\:-?D": ":D",
                    "\\:-?(o|O)": ":O",
                    ">\\\\(": ">(",
                    ":-?(?:7|L)": ":7",
                    "\\:-?(S|s)": ":S",
                    "#-?[\\\\/]": "#/",
                    "<\\]": "<]",
                    "<3": "<3",
                    "\\&lt\\;3": "<3",
                    "\\&lt\\;\\]": "<]",
                    "\\&gt\\;\\(": ">("
                },
                s = ["1.0", "2.0", "3.0"],
                l = new Set([457, 33, 42, 0]);

            function c(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = o[e.token] || e.token,
                            i = s.reduce(function(t, n) {
                                var r = t;
                                return r && (r = r.concat(", ")), r.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(r.__assign({
                            displayName: n,
                            srcSet: i
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
                        a.owner && (o.owner = a.owner), l.has(parseInt(a.id, 10)) ? t.push(o) : n.push(o)
                    }
                }
                return n.concat(t)
            }
            var h = function(e, t, n) {
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
                f = function(e) {
                    var t = {};
                    return e.filter(function(e) {
                        return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                    })
                }
        },
        Oy4H: function(e, t, n) {},
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
                    end: 639
                }
            };
            n.loc.source = {
                body: "query Whispers_Whispers_UserWhisperThreads($cursor: Cursor) {\ncurrentUser {\nid\nlogin\nwhisperThreads(first: 10 after: $cursor) {\nedges {\ncursor\nnode {\nid\nparticipants {\nid\nchatColor\ndisplayName\nprofileImageURL(width: 70)\nlogin\n__typename\n}\nspamInfo {\nlastMarkedNotSpamAt\nlikelihood\n__typename\n}\nmessages(first: 20) {\nedges {\ncursor\nnode {\nid\nnonce\nsentAt\neditedAt\ndeletedAt\nfrom {\nid\n__typename\n}\ncontent {\ncontent\nemotes {\nid\nemoteID\nsetID\nfrom\nto\n__typename\n}\n__typename\n}\n__typename\n}\n__typename\n}\n__typename\n}\nuserLastMessageRead {\nid\nsentAt\n__typename\n}\nisMuted\nisArchived\nunreadMessagesCount\n__typename\n}\n__typename\n}\n__typename\n}\n}\n}",
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
                c = n("GnwI");
            var d = n("Ue10"),
                u = n("gIsd"),
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
                            t = Object(o.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [a.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(o.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return a.createElement(d.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(d.Ab, {
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
                m = Object(s.compose)(Object(l.a)(u, {
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
                return h
            }), n.d(t, "b", function() {
                return f
            });
            var h;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(h || (h = {}));
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        description: "",
                        reason: null
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(o.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(h.FormError)
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
                    return a.createElement(d.Ya, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Xa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? a.createElement("div", null, a.createElement(d.z, {
                        onClick: this.props.onClose
                    }, a.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(d.Ya, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(d.W, {
                        type: d.Wb.H4
                    }, this.props.title), a.createElement(d.Fb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(d.Fb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), a.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(d.Tb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(d.Fb, {
                        display: d.X.Flex,
                        justifyContent: d.Xa.Center
                    }, a.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case h.FormError:
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case h.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case h.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        case h.UserError:
                            e = Object(o.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = i({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return a.createElement(d.Fb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
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
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "withOwner"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "owner"
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
                                                            value: "withOwner"
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
                                                            value: "28"
                                                        }
                                                    }],
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
                    end: 182
                }
            };
            n.loc.source = {
                body: "query UserEmotes ($withOwner: Boolean!) {\ncurrentUser {\nid\nemoteSets {\nid\nemotes {\nid\ntoken\n}\nowner @include(if: $withOwner) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 28)\n}\n}\n}\n}",
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
                    y = Object(c.a)(i.p.apollo.client.cache, b, !0);
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
                                                receive: l.Da.NOT_PERMITTED,
                                                __typename: "WhisperPermissions"
                                            }
                                        }
                                    }, {
                                        id: g,
                                        __typename: "User",
                                        self: {
                                            __typename: "UserSelfConnection",
                                            whisperPermissions: {
                                                receive: l.Da.PERMITTED,
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
                return i.p.apollo.client.mutate(k)
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
            n.d(t, "c", function() {
                return a
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "f", function() {
                return u
            });
            var r = n("/7QA"),
                i = n("y5D0"),
                a = "SUB_CHECKOUT__PRODUCT",
                o = "SUB_CHECKOUT__RECIPIENT",
                s = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                l = "SUB_CHECKOUT__GIFTING_ANONYMOUSLY",
                c = [a, o, s, l];

            function d() {
                c.forEach(function(e) {
                    return r.n.remove(e)
                })
            }

            function u(e) {
                return function() {
                    return Object(i.e)(e, {
                        onClose: d
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
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? parseInt(n.discountValue, 10) : 0
            }

            function l(e) {
                return e.self && e.self.paidUpgradePromotion ? e.self.paidUpgradePromotion.newPrice : e.price
            }

            function c(e) {
                return e.find(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                }) || null
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
        XQnt: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EmotePicker_SubUpsell_PriceInfo"
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
                                                value: "displayName"
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
                                                value: "price"
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
                                                        value: "price"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isTaxInclusive"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
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
                                                        value: "tax"
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
                                                                value: "newPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "oldPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountValue"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "paidUpgradePromotion"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "newPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "oldPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountValue"
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
                    end: 393
                }
            };
            n.loc.source = {
                body: "query EmotePicker_SubUpsell_PriceInfo($channelID: ID!) {\nuser(id: $channelID) {\nid\nsubscriptionProducts {\nid\ndisplayName\nname\ntier\nurl\nemotes {\nid\ntoken\n}\nprice\npriceInfo {\ncurrency\nexponent\ntotal\ndescription\nprice\nisTaxInclusive\nid\ntax\n}\nemoteSetID\nself {\npromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\npaidUpgradePromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\n}\n}\n}",
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
                    e[e.Message = 0] = "Message", e[e.ExtensionMessage = 1] = "ExtensionMessage", e[e.Moderation = 2] = "Moderation", e[e.ModerationAction = 3] = "ModerationAction", e[e.TargetedModerationAction = 4] = "TargetedModerationAction", e[e.AutoMod = 5] = "AutoMod", e[e.SubscriberOnlyMode = 6] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 7] = "FollowerOnlyMode", e[e.SlowMode = 8] = "SlowMode", e[e.EmoteOnlyMode = 9] = "EmoteOnlyMode", e[e.R9KMode = 10] = "R9KMode", e[e.Connected = 11] = "Connected", e[e.Disconnected = 12] = "Disconnected", e[e.Reconnect = 13] = "Reconnect", e[e.Hosting = 14] = "Hosting", e[e.Unhost = 15] = "Unhost", e[e.Hosted = 16] = "Hosted", e[e.Subscription = 17] = "Subscription", e[e.Resubscription = 18] = "Resubscription", e[e.GiftPaidUpgrade = 19] = "GiftPaidUpgrade", e[e.AnonGiftPaidUpgrade = 20] = "AnonGiftPaidUpgrade", e[e.SubGift = 21] = "SubGift", e[e.AnonSubGift = 22] = "AnonSubGift", e[e.Clear = 23] = "Clear", e[e.RoomMods = 24] = "RoomMods", e[e.RoomState = 25] = "RoomState", e[e.Raid = 26] = "Raid", e[e.Unraid = 27] = "Unraid", e[e.Ritual = 28] = "Ritual", e[e.Notice = 29] = "Notice", e[e.Info = 30] = "Info", e[e.BadgesUpdated = 31] = "BadgesUpdated", e[e.Purchase = 32] = "Purchase", e[e.BitsCharity = 33] = "BitsCharity", e[e.CrateGift = 34] = "CrateGift", e[e.RewardGift = 35] = "RewardGift", e[e.SubMysteryGift = 36] = "SubMysteryGift", e[e.AnonSubMysteryGift = 37] = "AnonSubMysteryGift", e[e.FirstCheerMessage = 38] = "FirstCheerMessage"
                }(r || (r = {})),
                function(e) {
                    e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
                }(i || (i = {})),
                function(e) {
                    e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout", e[e.Delete = 2] = "Delete"
                }(a || (a = {})),
                function(e) {
                    e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.CheerMessageRejectedPrompt = 1] = "CheerMessageRejectedPrompt", e[e.MessageRejected = 2] = "MessageRejected", e[e.MessageAllowed = 3] = "MessageAllowed", e[e.MessageDenied = 4] = "MessageDenied", e[e.CheerMessageDenied = 5] = "CheerMessageDenied", e[e.CheerMessageTimeout = 6] = "CheerMessageTimeout", e[e.MessageModApproved = 7] = "MessageModApproved", e[e.MessageModDenied = 8] = "MessageModDenied"
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

            function u(e, t, n, i, a, o, s) {
                void 0 === a && (a = !1), void 0 === o && (o = !1), void 0 === s && (s = !1);
                var c = Object(l.a)(t.displayName, t.username);
                return {
                    badges: t.badges || {},
                    bits: t.bits,
                    user: r.__assign({}, c, {
                        userLogin: t.username,
                        userID: t.userID,
                        userType: t.userType,
                        color: t.color || p(t.userID)
                    }),
                    messageParts: m(e, t.emotes || {}, t.bits, n, i, t.username),
                    deleted: a,
                    banned: s,
                    hidden: o,
                    timestamp: Date.now()
                }
            }

            function p(e, t) {
                return void 0 === t && (t = 15), "number" != typeof d[e] && (d[e] = Math.floor(Math.random() * t)), c[d[e]]
            }

            function m(e, t, n, r, l, c) {
                var d = Object(s.e)(i.p.store.getState()),
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
        a5fV: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            });
            var r = n("/7QA");

            function i(e, t) {
                return e / Math.pow(10, t)
            }

            function a(e, t) {
                return Object(r.f)(e, {
                    style: "currency",
                    currency: t
                })
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
                    ClickAnonymousGiftCheckbox: "anonymous_gift_click",
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
                                t = i.o.getVideoPlayerTrackingData().vodID, n = !!t, l = {
                                    channelID: e.channelID,
                                    withVideo: !1
                                }, n && (l.withVideo = !0, l.videoID = t), c = null, r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, i.p.apollo.client.query({
                                    query: s,
                                    variables: l
                                })];
                            case 2:
                                return c = r.sent(), [3, 4];
                            case 3:
                                return d = r.sent(), i.k.error(d, "Failed to make query for channel info in FollowEvent reporting.", {
                                    channelID: e.channelID
                                }), [3, 4];
                            case 4:
                                return u = c && c.data && c.data.user || null, c && !u && i.k.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                    channelID: e.channelID
                                }), p = null, c && n && ((m = c && c.data && c.data.video) ? p = Object(o.a)(m.broadcastType) : i.k.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
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
                                    is_anonymous: e.isAnonymous,
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
                                }, i.o.track(a.SpadeEventType.Subscription, k), [2]
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
        cr2a: function(e, t, n) {},
        cys1: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                i = n("/7QA"),
                a = n("gvGA"),
                o = n("5zf8"),
                s = n("4rCz"),
                l = n("x0+1"),
                c = n("j0ar"),
                d = function(e) {
                    var t, n = e.emote,
                        i = n.alt || "";
                    return n.cheerAmount && (i += " " + n.cheerAmount.toString(), t = r.createElement("strong", {
                        className: "chat-line__message--cheer-amount",
                        style: {
                            color: n.cheerColor
                        }
                    }, n.cheerAmount)), r.createElement(c.a, {
                        alt: i,
                        cheerText: t,
                        className: "chat-line__message--emote",
                        srcKey: "1x",
                        srcSet: n.images
                    })
                };
            d.displayName = "Emote";
            var u, p = function(e) {
                    var t = e.displayText,
                        n = e.url;
                    return r.createElement("a", {
                        className: "link-fragment",
                        href: n,
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }, t)
                },
                m = n("TSYQ"),
                h = n("RcPG"),
                f = (n("VN3V"), function(e) {
                    var t, n = e.content,
                        i = e.highlightType,
                        a = m("text-fragment", ((t = {})["text-fragment--moderated-highlight"] = i === h.a.ModeratedText, t));
                    return r.createElement("span", {
                        className: a,
                        "data-a-target": "chat-message-text"
                    }, n)
                }),
                g = n("mrSG"),
                v = n("yR8l"),
                k = n("+GjP"),
                b = n("2xye"),
                y = n("Ue10"),
                S = function(e) {
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
                    return g.__extends(t, e), t.prototype.componentWillReceiveProps = function() {
                        this.setState({
                            hasImageLoadingError: !1
                        })
                    }, t.prototype.render = function() {
                        var e = i.a.defaultStreamPreviewURL;
                        return !this.state.hasImageLoadingError && this.props.imageURL && (e = this.props.imageURL), r.createElement(y.I, {
                            aspect: y.p.Aspect16x9,
                            alt: this.props.altText,
                            src: e,
                            onError: this.handleImageError
                        })
                    }, t
                }(r.Component),
                _ = (n("Epr8"), "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"),
                E = {
                    ERROR: "chat-card-error",
                    TITLE: "chat-card-title",
                    DESCRIPTION: "chat-card-description"
                },
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderErrorCard = function() {
                            var e = r.createElement("img", {
                                "data-test-selector": E.ERROR,
                                src: _,
                                className: "chat-card__error-img"
                            });
                            return t.renderCardContent(e, t.props.error)
                        }, t.renderCardContent = function(e, t) {
                            var n, i;
                            return t ? (n = r.createElement(y.W, {
                                type: y.Wb.Span,
                                fontSize: y.Ca.Size5,
                                "data-test-selector": E.TITLE,
                                title: t.title
                            }, t.title), i = r.createElement(y.W, {
                                type: y.Wb.Span,
                                fontSize: y.Ca.Size6,
                                color: y.O.Alt2,
                                "data-test-selector": E.DESCRIPTION
                            }, t.description)) : (e = r.createElement(y.jb, {
                                overlay: !0
                            }), n = r.createElement(y.jb, {
                                width: 180
                            }), i = r.createElement(y.jb, {
                                width: 120
                            })), r.createElement(y.Fb, {
                                background: y.r.Base,
                                display: y.X.Flex,
                                flexWrap: y.Ba.NoWrap,
                                padding: .5
                            }, r.createElement(y.Fb, {
                                className: "chat-card__preview-img",
                                background: y.r.Alt2,
                                display: y.X.Flex,
                                alignItems: y.f.Center,
                                justifyContent: y.Xa.Center,
                                flexShrink: 0
                            }, e), r.createElement(y.Ya, {
                                display: y.X.Flex,
                                alignItems: y.f.Center,
                                overflow: y.db.Hidden
                            }, r.createElement(y.Ya, {
                                padding: {
                                    left: 1
                                },
                                fullWidth: !0
                            }, r.createElement(y.Ya, {
                                className: "chat-card__title",
                                ellipsis: !0
                            }, n), r.createElement(y.Ya, {
                                ellipsis: !0
                            }, i))))
                        }, t
                    }
                    return g.__extends(t, e), t.prototype.render = function() {
                        var e;
                        if (this.props.error) e = this.renderErrorCard();
                        else if (this.props.data) {
                            var t = Object(k.e)(this.props.data.contentURL, {
                                    tt_medium: b.PageviewMedium.Chat,
                                    tt_content: b.PageviewContent.ChatCard
                                }),
                                n = r.createElement(S, {
                                    altText: this.props.data.title,
                                    imageURL: this.props.data.previewImageURL
                                });
                            e = r.createElement(y.U, {
                                className: "chat-card__link",
                                to: t,
                                targetBlank: !0
                            }, this.renderCardContent(n, {
                                title: this.props.data.title,
                                description: this.props.data.description
                            }))
                        } else e = this.renderCardContent();
                        return r.createElement(y.Fb, {
                            elevation: 1,
                            margin: {
                                top: .5
                            }
                        }, e)
                    }, t
                }(r.Component),
                T = n("SceP"),
                D = {
                    isTimedOut: !1
                },
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = D, t.timeoutID = null, t
                    }
                    return g.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        return n || this.state.isTimedOut ? r.createElement(C, {
                            error: {
                                title: Object(i.d)("Something went wrong", "ClipsChatCard"),
                                description: Object(i.d)("We couldn't find that Clip", "ClipsChatCard")
                            }
                        }) : a || !t ? r.createElement(C, null) : r.createElement(C, {
                            data: {
                                title: t.title || (t.broadcaster && t.broadcaster.displayName ? Object(i.d)("Clip of {broadcaster}", {
                                    broadcaster: t.broadcaster.displayName
                                }, "ClipsChatCard") : ""),
                                description: t.curator && t.curator.displayName ? Object(i.d)("Clipped by {curator}", {
                                    curator: t.curator.displayName
                                }, "ClipsChatCard") : "",
                                previewImageURL: t.thumbnailURL,
                                contentURL: t.url
                            }
                        })
                    }, t
                }(r.Component),
                w = Object(v.a)(T, {
                    options: function(e) {
                        return {
                            variables: {
                                slug: e.slug
                            },
                            notifyOnNetworkStatusChange: !0,
                            fetchPolicy: e.forceNetworkRequest ? "cache-first" : "cache-only"
                        }
                    }
                })(N),
                I = n("gTu3"),
                O = (n("lpj/"), (u = {})[I.a.Default] = "", u[I.a.Recipient] = "mention-fragment--recipient", u[I.a.Sender] = "mention-fragment--sender", u),
                R = function(e) {
                    var t = e.isAtMention ? "@" : "",
                        n = m("mention-fragment", O[e.currentUserMentionRelation]);
                    return r.createElement("span", {
                        className: n,
                        "data-a-target": "chat-message-mention"
                    }, "" + t + e.recipient)
                };
            R.displayName = "MentionFragment";
            var M = n("QVaV"),
                U = n("sU0Q"),
                F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return g.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.video,
                            n = e.error,
                            a = e.loading;
                        if (n || t && !t.owner) return r.createElement(C, {
                            error: {
                                title: Object(i.d)("Something went wrong", "VideoChatCard"),
                                description: Object(i.d)("We couldn't find that video", "VideoChatCard")
                            }
                        });
                        if (a || !t) return r.createElement(C, null);
                        var o = r.createElement(y.W, null, Object(i.c)(new Date(t.publishedAt), "medium"), r.createElement("span", null, " · "), Object(M.a)(t.owner.login, t.owner.displayName));
                        return r.createElement(C, {
                            data: {
                                title: t.title,
                                description: o,
                                previewImageURL: t.previewThumbnailURL,
                                contentURL: this.props.url
                            }
                        })
                    }, t
                }(r.Component),
                j = Object(v.a)(U, {
                    options: function(e) {
                        return {
                            variables: {
                                videoID: e.id
                            },
                            notifyOnNetworkStatusChange: !0,
                            fetchPolicy: "cache-first"
                        }
                    }
                })(F),
                x = n("ZtEv");

            function A(e, t, n) {
                void 0 === n && (n = !1);
                var i = t.content,
                    a = i.displayText,
                    o = i.url;
                return n ? r.createElement(f, {
                    key: "message-span-" + e,
                    content: a
                }) : r.createElement(p, {
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
                        switch (s > 0 && e[s - 1].type !== h.a.Text && o.type !== h.a.Text && l.push(" "), o.type) {
                            case h.a.Text:
                            case h.a.ModeratedText:
                                var c = o.content,
                                    u = o.type;
                                l.push(r.createElement(f, {
                                    key: s,
                                    content: c,
                                    highlightType: u
                                }));
                                break;
                            case h.a.CurrentUserHighlight:
                                l.push(r.createElement(R, {
                                    isAtMention: !1,
                                    currentUserMentionRelation: I.a.Recipient,
                                    recipient: o.content,
                                    key: s
                                }));
                                break;
                            case h.a.Mention:
                                l.push(r.createElement(R, {
                                    isAtMention: !0,
                                    currentUserMentionRelation: o.content.currentUserMentionRelation,
                                    recipient: o.content.recipient,
                                    key: s
                                }));
                                break;
                            case h.a.Emote:
                                l.push(r.createElement(d, {
                                    key: s,
                                    emote: o.content
                                }));
                                break;
                            case h.a.Link:
                                l.push(A(s, o, t.disableLinks));
                                break;
                            case h.a.ClipLink:
                                n || (n = r.createElement(a.a, {
                                    key: s
                                }, r.createElement(w, {
                                    slug: o.content.slug,
                                    forceNetworkRequest: t.forceClipsNetworkRequest
                                }))), l.push(A(s, o, t.disableLinks));
                                break;
                            case h.a.VideoLink:
                                n || (n = r.createElement(j, {
                                    key: s,
                                    id: o.content.id,
                                    url: o.content.url
                                })), l.push(A(s, o, t.disableLinks))
                        }
                        return i.concat(l)
                    }, []);
                return n && (i = i.concat(n)), i
            }

            function P(e) {
                if (e.moderationType === x.e.Delete) {
                    var t = e,
                        n = t.userLogin,
                        a = t.body;
                    return r.createElement(l.a, {
                        targetLogin: n,
                        messageBody: a
                    })
                }
                if ((e = e).moderationType === x.e.Ban) return e.reason ? r.createElement("span", {
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
                    var o = Object(i.d)("{userLogin} has been timed out for {duration} seconds. Reason: {reason}", {
                        duration: e.duration,
                        reason: e.reason,
                        userLogin: e.userLogin
                    }, "ChatLine");
                    return r.createElement("span", {
                        className: "chat-line__moderation--timeout-with-reason"
                    }, o)
                }
                return e.duration ? r.createElement("span", {
                    className: "chat-line__moderation--timeout"
                }, Object(i.d)("{userLogin} has been timed out for {duration} seconds.", {
                    userLogin: e.userLogin,
                    duration: e.duration
                }, "ChatLine")) : void 0
            }

            function L(e) {
                var t = e.daysLeft;
                0 === t && (t = e.hoursLeft);
                var n = {
                    bitsTotal: r.createElement("strong", null, Object(s.f)(e.total, {
                        style: "currency",
                        currency: "USD"
                    })),
                    charityName: r.createElement("strong", null, e.charityName),
                    learnMoreURL: r.createElement("a", {
                        href: e.learnMore,
                        target: "_blank"
                    }, e.learnMore),
                    hashtag: r.createElement("strong", null, e.hashtag),
                    timeRemaining: Object(s.f)(t)
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

            function B(e) {
                var t = e.enabled ? Object(i.d)("This room is now in slow mode. You may send messages every {length} seconds.", {
                    length: e.length
                }, "ChatLine") : Object(i.d)("This room is no longer in slow mode.", "ChatLine");
                return r.createElement("span", null, t)
            }

            function z(e) {
                var t;
                if (e.length > 0) {
                    var n = e.join(", ");
                    t = Object(i.d)("The moderators of this channel are: {moderatorList}", {
                        moderatorList: n
                    }, "ChatLine")
                } else t = Object(i.d)("There are no moderators of this channel.", "ChatLine");
                return r.createElement("span", null, t)
            }

            function V(e) {
                if (e.enabled) {
                    var t = 0 === e.length ? Object(i.d)("This room is in followers-only mode.", "ChatLine") : Object(i.d)("This room is now in {length} followers-only mode.", {
                        length: Object(o.b)(60 * e.length)
                    }, "ChatLine");
                    return r.createElement("span", null, t)
                }
                return r.createElement("span", null, Object(i.d)("This room is no longer in followers-only mode.", "ChatLine"))
            }

            function H(e) {
                return e.enabled ? r.createElement("span", null, Object(i.d)("This room is now in emote-only mode.", "ChatLine")) : r.createElement("span", null, Object(i.d)("This room is no longer in emote-only mode.", "ChatLine"))
            }

            function G(e) {
                var t = e.enabled ? Object(i.d)("This room is now in subscriber-only mode.", "ChatLine") : Object(i.d)("This room is no longer in subscriber-only mode.", "ChatLine");
                return r.createElement("span", null, t)
            }

            function Y(e) {
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

            function X(e) {
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
                }, X(new Date(e)))
            }

            function K(e) {
                return r.createElement("span", {
                    key: "timestamp",
                    className: "chat-line__timestamp",
                    "data-a-target": "chat-timestamp",
                    "data-test-selector": "chat-timestamp"
                }, function(e, t) {
                    void 0 === t && (t = {});
                    var n = i.p.intl.getLanguageCode() || "en";
                    return Intl.DateTimeFormat(n, t).format(e)
                }(new Date(e), {
                    hour: "numeric",
                    minute: "numeric"
                }))
            }
            n.d(t, "f", function() {
                return W
            }), n.d(t, "g", function() {
                return P
            }), n.d(t, "b", function() {
                return L
            }), n.d(t, "j", function() {
                return B
            }), n.d(t, "i", function() {
                return z
            }), n.d(t, "d", function() {
                return V
            }), n.d(t, "c", function() {
                return H
            }), n.d(t, "k", function() {
                return G
            }), n.d(t, "h", function() {
                return Y
            }), n.d(t, "e", function() {
                return q
            }), n.d(t, "a", function() {
                return X
            }), n.d(t, "l", function() {
                return Q
            }), n.d(t, "m", function() {
                return K
            })
        },
        dAHa: function(e, t, n) {
            "use strict";
            var r, i, a = n("mrSG"),
                o = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                d = n("yR8l"),
                u = n("BhFH"),
                p = n("iS14"),
                m = n("geRD"),
                h = n("O3Y9"),
                f = n("f00E"),
                g = n("D7An"),
                v = n("DMoW"),
                k = n("2xye"),
                b = n("GnwI"),
                y = n("QVaV"),
                S = n("Ue10"),
                _ = (n("MPK0"), "report-wizard-block"),
                E = "report-wizard-unblock",
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return o.createElement(S.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": _
                            }, o.createElement(S.Ya, {
                                display: S.X.Flex,
                                alignItems: S.f.Center
                            }, o.createElement(S.tb, {
                                type: S.vb.Brand,
                                asset: S.ub.Ban
                            }), o.createElement(S.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return o.createElement(S.Ya, {
                                className: "reporting-wizard__block-actions",
                                display: S.X.Flex,
                                alignItems: S.f.Center
                            }, o.createElement(S.tb, {
                                type: S.vb.Success,
                                asset: S.ub.FollowCheck
                            }), o.createElement(S.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(S.W, {
                                className: "block-user__success",
                                type: S.Wb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), o.createElement(S.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": E
                            }, o.createElement(S.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(y.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return o.createElement(S.Fb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, o.createElement(S.Ya, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement(S.Fb, {
                            color: S.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(S.fc, {
                            baseFontSize: S.Ca.Size6
                        }, o.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement("ul", null, o.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), o.createElement(S.Ya, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(o.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(r || (r = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(i || (i = {}));
            var T, D = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("Threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("Committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("Threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("Being hateful, harassing, or abusive", "ReportModalWizard")
                    },
                    harassment: function() {
                        return Object(c.d)("Hate speech, harassment, or abuse", "ReportModalWizard")
                    },
                    moreOptions: function() {
                        return Object(c.d)("Give me more options...", "ReportModalWizard")
                    },
                    scam: function() {
                        return Object(c.d)("Attempts to scam other community members", "ReportModalWizard")
                    }
                },
                N = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: i.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: i.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: i.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: i.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: i.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: i.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report on the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: i.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement. To protect yourself on Twitch, you may also block the user.", "ReportModalWizard")
                        },
                        type: i.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: i.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: i.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: i.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: i.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: i.Link
                    },
                    messaging_general: {
                        getTitle: D.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: D.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("Participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: r.Harassment
                    },
                    automod: {
                        getTitle: function() {
                            return Object(c.d)("It's being used to bypass AutoMod", "ReportModalWizard")
                        },
                        value: "bypass automod",
                        reportReason: r.Other
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("Threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: r.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("The username is inappropriate", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: r.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes or badges", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: r.Other
                    },
                    emotes_break_guidelines: {
                        getTitle: function() {
                            return Object(c.d)("The emotes break Twitch's guidelines", "ReportModalWizard")
                        },
                        value: "emotes break guidelines",
                        reportReason: r.Other
                    },
                    abusive: {
                        getTitle: D.harassment,
                        value: "abusive"
                    },
                    scam: {
                        getTitle: D.scam,
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
                    impersonating: {
                        getTitle: function() {
                            return Object(c.d)("Impersonating someone", "ReportModalWizard")
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
                    itsInappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("Inappropriate or obscene content", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Revealing someone's personal information", "ReportModalWizard")
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
                            return Object(c.d)("The extensions are inappropriate or malicious", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: r.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("Cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: r.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Bits Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: r.BitsViolation
                    },
                    compromisedAccount: {
                        getTitle: function() {
                            return Object(c.d)("The account is stolen or compromised", "ReportModalWizard")
                        },
                        value: "account compromised",
                        reportReason: r.Other
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is misclassified (wrong category or tags)", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: r.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("There's no streamer, or the streamer is inactive", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: r.Miscategorized
                    },
                    video_general: {
                        getTitle: D.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeechSymbols: {
                        getTitle: function() {
                            return Object(c.d)("It contains hate speech or hate symbols", "ReportModalWizard")
                        },
                        value: "hate speech symbols",
                        reportReason: r.HatefulConduct
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("Hate speech, hateful symbols, or other hateful conduct", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: r.HatefulConduct
                    },
                    harassing: {
                        getTitle: function() {
                            return Object(c.d)("It's harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("Harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    abusiveViolence: {
                        getTitle: D.abusiveViolence,
                        value: "threatening violence",
                        reportReason: r.Harm
                    },
                    commitingViolence: {
                        getTitle: D.commitingViolence,
                        value: "committing violence",
                        reportReason: r.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("Involvement in swatting or DDOS attacks", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: r.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Doxxing (purposely revealing personal information)", "ReportModalWizard")
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
                    sexuallyViolentChildAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving violence, children, or animals", "ReportModalWizard")
                        },
                        value: "sexual conduct: violent, child, or animal",
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
                            return Object(c.d)("Evading a block, ban, or suspension", "ReportModalWizard")
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
                        getTitle: D.me,
                        value: "impersonating me",
                        reportReason: r.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: r.Impersonation
                    },
                    impersonation_other: {
                        getTitle: D.someoneElse,
                        value: "Impersonating someone else",
                        reportReason: r.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: r.SelfHarm
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    video_more_options: {
                        getTitle: D.moreOptions,
                        value: "video more options"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: v.N.WHISPER_REPORT
                    },
                    whisper_more_options: {
                        getTitle: D.moreOptions,
                        value: "whisper more options"
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a chat message or room", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    chat_more_options: {
                        getTitle: D.moreOptions,
                        value: "chat more options"
                    },
                    moderating: {
                        getTitle: function(e) {
                            return Object(c.d)("{username} isn't moderating their chat", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "moderating",
                        reportReason: r.Other
                    },
                    otherContent: {
                        getTitle: function(e) {
                            return Object(c.d)("In {username}'s other content (profile, emotes, etc.)", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "other content"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("The profile content (avatar, panels, etc.)", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    profile_more_options: {
                        getTitle: D.moreOptions,
                        value: "profile more options"
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
                            return Object(c.d)("Inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: r.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: D.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: D.harassment,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: D.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: r.Harm
                    },
                    external_commitingViolence: {
                        getTitle: D.commitingViolence,
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
                            return Object(c.d)("Spam, malicious links, or bot accounts", "ReportModalWizard")
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
                    spam_links: {
                        getTitle: function() {
                            return Object(c.d)("Sending malicious links", "ReportModalWizard")
                        },
                        value: "malicious links"
                    },
                    spam_scam: {
                        getTitle: D.scam,
                        value: "scam"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("Sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                w = function(e) {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? o.createElement(S.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return o.createElement(S.Ya, {
                            className: "reporting-wizard-card"
                        }, e, o.createElement(S.Ea, {
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
                                case i.Text:
                                    return o.createElement(S.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case i.Link:
                                    return o.createElement(S.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(S.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, o.createElement(S.Ya, {
                                        display: S.X.Flex
                                    }, o.createElement(S.Ya, {
                                        display: S.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, o.createElement(S.tb, {
                                        asset: S.ub.Document
                                    })), t.getTitle())));
                                case i.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        a = t.required && (!r || !!r && 0 === r.trim().length);
                                    return o.createElement(S.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(S.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, o.createElement(S.Tb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && a,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case i.MultipleChoice:
                                default:
                                    return o.createElement(S.Ya, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, o.createElement(S.qb, {
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
                }(o.Component),
                I = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(T || (T = {}));
            var O, R, M, U = {
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
                F = {
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
                    reportWhisper: function(e) {
                        return Object(c.d)("Report {username}'s Whisper", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfileOrOtherContent: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportEmotesBadges: function(e) {
                        return Object(c.d)("Report {username}'s Emotes or Badges", {
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
                j = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: F.thanks,
                    type: T.Info,
                    value: "end card"
                },
                x = {
                    socialMedia: a.__assign({}, j, {
                        items: [N.endBlurb_socialmedia]
                    }),
                    violence: a.__assign({}, j, {
                        items: [N.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: F.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [N.endLink_DMCA, N.endLink_trademark, N.endLink_devAgreement],
                        type: T.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: F.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [N.endLink_selfharm],
                        type: T.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: F.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [N.endLink_eventCoC],
                        value: "twitch event end",
                        type: T.Info
                    }
                },
                A = {
                    getTitle: F.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [N.video, N.whisper, N.chat, N.moderating, N.otherContent, N.report_username, N.report_other],
                    type: T.MultipleChoice,
                    value: "content type"
                },
                W = {
                    identifyUser: {
                        getTitle: F.reportVideo,
                        getLabel: U.identifyUser,
                        items: [N.video_streamer, N.video_someoneElse, N.video_chatSomeone],
                        type: T.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: F.reportVideo,
                        getLabel: U.contentGeneral,
                        items: [N.violence, N.abusive, N.video_inactive, N.video_labeling, N.inappropriateContent, N.selfharm, N.video_more_options],
                        type: T.MultipleChoice,
                        value: "video report reason"
                    },
                    moreOptions: {
                        getTitle: F.reportVideo,
                        getLabel: U.contentGeneral,
                        items: [N.revealPersonalInfo, N.cheating, N.impersonating, N.underage, N.bitsViolation, N.report_ip, N.other],
                        type: T.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                P = {
                    content: {
                        getTitle: F.reportMessage,
                        getLabel: U.contentGeneral,
                        items: [N.report_username, N.violence, N.abusive, N.evasion, N.spam, N.selfharm, N.chat_more_options],
                        type: T.MultipleChoice,
                        value: "message report reason"
                    },
                    moreOptions: {
                        getTitle: F.reportMessage,
                        getLabel: U.contentGeneral,
                        items: [N.emotes_break_guidelines, N.inappropriateContent, N.revealPersonalInfo, N.maliciousRaid, N.underage, N.bitsViolation, N.other],
                        type: T.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                L = {
                    general: {
                        getTitle: F.reportWhisper,
                        getLabel: U.contentGeneral,
                        items: [N.report_username, N.violence, N.abusive, N.spam, N.selfharm, N.whisper_more_options],
                        type: T.MultipleChoice,
                        value: "whisper report reason",
                        getDescription: function() {
                            return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                        }
                    },
                    moreOptions: {
                        getTitle: F.reportWhisper,
                        getLabel: U.contentGeneral,
                        items: [N.emotes_break_guidelines, N.evasion, N.inappropriateContent, N.revealPersonalInfo, N.underage, N.other],
                        type: T.MultipleChoice,
                        value: "whisper general report reason"
                    }
                },
                B = {
                    profile: {
                        getTitle: F.reportProfile,
                        getLabel: U.contentGeneral,
                        items: [N.revealPersonalInfo, N.violence, N.abusive, N.inappropriateContent, N.selfharm, N.profile_more_options],
                        type: T.MultipleChoice,
                        value: "profile report reason"
                    },
                    profileMoreOptions: {
                        getTitle: F.reportProfile,
                        getLabel: U.contentGeneral,
                        items: [N.scam, N.evasion, N.impersonation, N.underage, N.report_ip, N.other],
                        type: T.MultipleChoice,
                        value: "profile general report reason"
                    },
                    emotes: {
                        getTitle: F.reportEmotesBadges,
                        getLabel: U.content,
                        items: [N.hateSpeechSymbols, N.harassing, N.itsInappropriateContent, N.automod, N.report_ip, N.other],
                        type: T.MultipleChoice,
                        value: "emote report reason"
                    },
                    general: {
                        getTitle: F.reportProfileOrOtherContent,
                        getLabel: U.content,
                        items: [N.report_username, N.profile, N.report_emotes, N.inappropriateExtension, N.compromisedAccount, N.violateDevAgreement],
                        type: T.MultipleChoice,
                        value: "profile content location"
                    }
                },
                z = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.identifyUser,
                    items: [N.report_channelOwner, N.report_member],
                    value: "room report user",
                    type: T.MultipleChoice
                },
                V = {
                    getTitle: F.tellUsMore,
                    items: [N.input_description],
                    type: T.Confirm,
                    value: "tell us more"
                },
                H = {
                    banEvasion: a.__assign({}, V, {
                        items: [N.input_usernames, N.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: a.__assign({}, V, {
                        items: [N.input_link, N.input_connection, N.input_description],
                        nextCard: x.socialMedia,
                        value: "social media tell us more"
                    })
                },
                G = {
                    content: {
                        getTitle: F.reportAbusive,
                        getLabel: U.relevantStatements,
                        items: [N.hateSpeech, N.harassment, N.abusiveViolence, N.commitingViolence, N.swatting, N.personalInfo],
                        type: T.MultipleChoice,
                        value: "abuse type"
                    }
                },
                Y = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [N.location_onTwitch, N.location_anotherSite, N.location_TwitchEvent],
                        type: T.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: U.contentGeneral,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [N.external_incitingRaids, N.external_threatening, N.external_harassment],
                        type: T.MultipleChoice,
                        nextCard: H.socialMedia,
                        value: "external site conduct"
                    },
                    external_abusive: a.__assign({}, G.content, {
                        items: [N.hateSpeech, N.harassment, N.external_abusiveViolence, N.external_commitingViolence, N.swatting, N.personalInfo],
                        nextCard: H.socialMedia
                    })
                },
                q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.contentGeneral,
                    items: [N.spam_bot, N.spam_scam, N.spam_links, N.spam_repeated],
                    type: T.MultipleChoice,
                    value: "spam type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.relevantStatements,
                    items: [N.inappropriate_game, N.gory, N.sexuallyViolentChildAnimal, N.pornographic, N.suggestive, N.nudity, N.other],
                    type: T.MultipleChoice,
                    value: "inappropriate content type"
                },
                Q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [N.evasion_chat, N.evasion_sitewide, N.evasion_messaging],
                    type: T.MultipleChoice,
                    nextCard: H.banEvasion
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
                        return Object(c.d)("Please note that parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [N.impersonation_me, N.impersonation_brand, N.impersonation_other],
                    type: T.MultipleChoice,
                    value: "impersonation type"
                },
                $ = A,
                Z = V,
                J = j,
                ee = {
                    video: W.content,
                    "video more options": W.moreOptions,
                    whisper: L.general,
                    "whisper more options": L.moreOptions,
                    chat: P.content,
                    "chat more options": P.moreOptions,
                    "other content": B.general,
                    profile: B.profile,
                    "profile more options": B.profileMoreOptions,
                    room: z,
                    "somewhere else": Y.identifyLocation,
                    streamer: W.content,
                    "someone else in video": W.content,
                    "someone in chat": P.content,
                    general_video: W.moreOptions,
                    general_messaging: P.content,
                    general_profile: B.profile,
                    "channel owner": B.general,
                    "community member": P.content,
                    "on twitch": B.general,
                    "another site": Y.externalSite,
                    "twitch event": x.twitchEvent,
                    "brigading/raids": H.socialMedia,
                    "hateful/harassing": Y.external_abusive,
                    "external site; scam": H.socialMedia,
                    "ban evasion": Q,
                    spam: q,
                    hateful: G.content,
                    impersonation: K,
                    abusive: G.content,
                    "inappropriate content": X,
                    "inappropriate emotes": B.emotes,
                    "intellectual property": x.legal,
                    "violating developer agreement": x.legal
                },
                te = {
                    selfharm: x.selfharm,
                    harm: x.violence,
                    other: J
                },
                ne = {
                    CHANNEL_FEED_POST_REPORT: B.general,
                    COMMUNITY_REPORT: B.general,
                    CHAT_REPORT: P.content,
                    CLIP_REPORT: W.content,
                    EVENT_REPORT: B.general,
                    EXTENSION_REPORT: B.general,
                    LIVE_UP_REPORT: B.general,
                    ROOM_REPORT: z,
                    WHISPER_REPORT: L.general,
                    VOD_COMMENT_REPORT: P.content
                },
                re = "report-wizard-back",
                ie = "report-wizard-close",
                ae = "report-wizard-next",
                oe = "report-wizard-submit",
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ne[t.props.reportContentType] || $,
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
                            return o.createElement(S.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, o.createElement(S.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = ie,
                                i = !1,
                                a = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case T.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, r = ae, i = !t.state.currentSelection;
                                    break;
                                case T.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, i = !t.state.userTextInput, r = oe
                            }
                            return o.createElement(S.Ya, null, a, o.createElement(S.z, {
                                onClick: n,
                                disabled: i,
                                "data-test-selector": r
                            }, o.createElement(S.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return o.createElement(S.Ya, {
                                margin: {
                                    right: 1
                                },
                                display: S.X.InlineBlock
                            }, o.createElement(S.z, {
                                type: S.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": re
                            }, o.createElement(S.Ya, {
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
                                return t.props.trackClose(M.Finish, t.state.currentCard.value, t.getChoiceIndex())
                            }), t.props.onClose()
                        }, t.getChoiceIndex = function() {
                            var e = 0;
                            return t.state.currentCard && t.state.currentCard.items && (e = t.state.currentCard.items.findIndex(function(e) {
                                return t.state.currentSelection === e
                            }) + 1), e >= 1 ? e : void 0
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    i = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = t.getChoiceIndex(),
                                    l = e.nextCard || Z;
                                ee[t.state.currentSelection.value] && (l = ee[t.state.currentSelection.value]);
                                var c = t.state.currentSelection.reportReason || t.state.reportReason,
                                    d = l.type === T.Info;
                                t.setState({
                                    currentCard: l,
                                    reportReason: c,
                                    prevCards: d ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: a,
                                    currentSelection: i || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(R.Next, e.value, s)
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
                                if (e.type !== i.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    r = n && 0 === n.trim().length;
                                return !n || r
                            }).length
                        }, t.handleSubmit = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i, o = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (a.sent(), this.props.submitStatus) {
                                                case I.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case I.a.Success:
                                                    r = J, te[t] && (r = te[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), i = this.getChoiceIndex(), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return o.trackNavigation(R.Submit, void 0, i)
                                                    });
                                                    break;
                                                case I.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case I.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(I.a.FormError), this.setState({
                                                error: e
                                            }), a.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i, o, s = this;
                                return a.__generator(this, function(a) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, i = this.getChoiceIndex(), o = this.state.displacedSelections, this.state.currentSelection && (o = o.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: o,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return s.trackNavigation(R.Back, e.value, i)
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
                        }, t.trackNavigation = function(e, n, r) {
                            t.props.trackAction(e, n, t.state.currentCard.value, r)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(M.Close, this.state.currentCard.value, this.getChoiceIndex())
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === T.Info && this.state.currentCard.blockPrompt ? o.createElement(C, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? o.createElement(S.Fb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === T.Info ? null : this.renderPrimer();
                        return o.createElement(S.Fb, {
                            className: "reporting-wizard",
                            display: S.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: S.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, o.createElement(S.W, {
                            bold: !0,
                            fontSize: S.Ca.Size4
                        }, this.getTitle()), n, o.createElement(S.Ya, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(w, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === I.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(o.Component),
                le = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return R
                }), n.d(t, "a", function() {
                    return M
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(O || (O = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(R || (R = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(M || (M = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, i, o, s, l = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = r === v.N.WHISPER_REPORT ? r : this.props.reportContext.contentType, i = v.N[n], null === (o = {
                                                description: t,
                                                reason: e,
                                                content: i,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: I.a.UserError
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(o))];
                                    case 2:
                                        return a.sent(), this.setState({
                                            submitStatus: I.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(O.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = a.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: I.a.MutationError
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        }), n.props.sessionUser && n.props.sessionUser.login && n.props.data.targetUser && n.props.data.targetUser.login && Object(h.b)({
                            context: h.a.ReportWizard,
                            targetUserLogin: n.props.data.targetUser.login,
                            currentUserLogin: n.props.sessionUser.login
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(R.Open, void 0, e) : n.trackAction(O.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t, r) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(R.Close, t, void 0, r, e) : n.trackAction(O.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, i, a) {
                        c.p.tracking.track(k.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === I.a.Success,
                            modal_type: "wizard_v2",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: a,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r,
                            choice_index: i
                        })
                    }, n.trackAction = function(e) {
                        c.p.tracking.track(k.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === I.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(f.a)();
                    var r = c.p.experiments.getAssignment(g.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: I.a.Unsubmitted,
                        showWizard: "yes" === r,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return o.createElement(S.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(S.W, {
                        fontSize: S.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return o.createElement(S.jb, {
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
                        return this.state.showWizard ? this.props.data.loading ? o.createElement(S.ab, null) : o.createElement(se, a.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : o.createElement(I.b, a.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return o.createElement(S.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(S.W, {
                        fontSize: S.Ca.Size5
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
            }(o.Component);
            var ue = Object(l.compose)(Object(d.a)(le, {
                name: "reportUser"
            }), Object(d.a)(ce, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(b.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(p.a)(), Object(s.connect)(function(e) {
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
                    return l.createElement(u.Fb, {
                        background: u.r.Base,
                        padding: {
                            x: 3,
                            top: 3,
                            bottom: 2
                        },
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column
                    }, l.createElement(u.Ya, {
                        "data-test-selector": r.Message
                    }, this.props.message), l.createElement(u.Ya, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Row,
                        justifyContent: u.Xa.Center,
                        padding: {
                            top: 2
                        }
                    }, l.createElement(u.Ya, {
                        padding: {
                            right: .5
                        }
                    }, l.createElement(u.z, {
                        type: u.F.Text,
                        onClick: this.handleCancelClick
                    }, Object(c.d)("Cancel", "SettingsConfirmationModal"))), l.createElement(u.Ya, {
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
                            if (n.props.srcSet.themed) e = a.createElement(s.Qa, {
                                display: n.state.imageLoaded ? s.X.InlineBlock : s.X.Hide
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
                                e = a.createElement(s.Qa, {
                                    display: n.state.imageLoaded ? s.X.InlineBlock : s.X.Hide
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
                            return n.state.imageLoaded ? null : a.createElement(s.Qa, {
                                display: s.X.InlineBlock
                            }, a.createElement(s.W, {
                                type: s.Wb.Span,
                                className: "chat-image__placeholder",
                                align: s.gc.Top
                            }, a.createElement(s.jb, {
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
                        return e = this.state.isHovering && this.state.imageLoaded ? a.createElement(s.Zb, {
                            direction: this.props.tooltipDirection || s.bc.Top,
                            label: this.props.alt,
                            display: s.X.Inline,
                            offsetY: "0.9rem",
                            "data-a-target": "emote-name"
                        }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText) : a.createElement("span", {
                            "data-a-target": "emote-name"
                        }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText), this.props.cheerText ? a.createElement(s.W, {
                            type: s.Wb.Span,
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
                        return i.createElement(i.Fragment, null, i.createElement(p.Fb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            },
                            textAlign: p.Sb.Center
                        }, i.createElement(p.W, {
                            bold: !0,
                            type: p.Wb.H4
                        }, Object(s.d)("Block {displayName}?", {
                            displayName: n
                        }, "BlockModal"))), i.createElement(p.Fb, {
                            color: p.O.Alt2,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(p.fc, {
                            baseFontSize: p.Ca.Size6
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
                        icon: l.ub.Emoticons,
                        ariaLabel: Object(s.d)("Emote picker", "EmotePickerButton"),
                        type: e.isActive ? l.C.Default : l.C.Secondary,
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
                E = n("KriR"),
                C = n("GzyO"),
                T = n("OpME"),
                D = n("cpJf"),
                N = n("W8Fi"),
                w = n("0WFu"),
                I = function(e, t) {
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
                            emotes: Object(T.e)(e.emotes, e.emoteSetID)
                        })
                    })
                },
                O = function(e) {
                    return e.tier && !isNaN(parseInt(e.tier, 10)) ? parseInt(e.tier, 10) / 1e3 : 1
                },
                R = n("GnwI"),
                M = n("br9A"),
                U = n("TSYQ"),
                F = n("8/mp"),
                j = n("8Ad5");

            function x(e) {
                return e.charCode === j.a.Enter || e.charCode === j.a.Space
            }
            var A, W = n("2xye"),
                P = n("7SjK"),
                L = n("4rCz"),
                B = (n("/Kya"), function(e) {
                    var t = {
                            "emote-picker__tab": !0
                        },
                        n = null,
                        r = null;
                    if (e.channelTabVisible) {
                        var o = U(i.__assign({}, t, {
                            "emote-picker__tab--active": e.channelTabEnabled && e.channelTabSelected,
                            "emote-picker__tab--disabled": !e.channelTabEnabled
                        }));
                        n = a.createElement(l.Qa, {
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
                        }, a.createElement("span", null, Object(L.d)("Channel", "EmotePicker"))))
                    }
                    if (e.allTabVisible) {
                        var s = U(i.__assign({}, t, {
                            "emote-picker__tab--active": !(e.channelTabSelected && e.channelTabEnabled)
                        }));
                        r = a.createElement(l.Qa, {
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
                        }, a.createElement("span", null, Object(L.d)("All", "EmotePicker"))))
                    }
                    return a.createElement(l.Fb, {
                        background: l.r.Base,
                        borderTop: !0,
                        className: "emote-picker__tabs-container"
                    }, n, r)
                }),
                z = n("DnOo"),
                V = function(e) {
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
                            var o = Object(w.a)(this.props.plan.tier);
                            null === o && (o = 1), i.purchase = Object(s.d)("Tier { tierNum }", {
                                tierNum: o
                            }, "assembleSubscribeTexts")
                        }
                        return a.createElement(l.Ya, {
                            className: "emote-picker-plan-upsell",
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            alignItems: l.f.Center,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(P.a, {
                            emotes: r.emotes,
                            locked: !0
                        }), a.createElement(l.Ya, {
                            margin: 1,
                            alignItems: l.f.Center
                        }, e), a.createElement(z.a, {
                            isSubbedToTier: !1,
                            tierPrice: i.purchase || "",
                            handleSubAction: this.props.handleSubAction,
                            productName: this.props.plan.name,
                            url: this.props.plan.url,
                            isEsportChannel: this.props.isEsportChannel
                        }))
                    }, t
                }(a.Component),
                H = (n("JGCS"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.channelTabSelectionKeypress = function(e) {
                            x(e) && n.selectChannelTab(e)
                        }, n.allTabSelectionKeypress = function(e) {
                            x(e) && n.selectAllTab(e)
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
                                s.o.track(W.SpadeEventType.EmotePickerClickthrough, t)
                            }
                        }, n.closeOnEsc = function(e) {
                            e.keyCode === j.a.Esc && n.props.toggleVisibility()
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
                            s.o.track(W.SpadeEventType.ViewedEmotePicker, t)
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
                        }, a.createElement(l.Ya, {
                            className: U("emote-picker")
                        }, this.renderTabContent(), a.createElement(l.Ya, {
                            className: "emote-picker__controls-container",
                            position: l.kb.Relative
                        }, a.createElement(l.Fb, {
                            padding: 1,
                            borderTop: !0
                        }, a.createElement(l.Sa, {
                            autoFocus: !0,
                            onChange: this.handleFilterChange,
                            onKeyDown: this.closeOnEsc,
                            placeholder: Object(s.d)("Search for Emotes", "EmotePicker"),
                            type: l.Ua.Text,
                            value: this.state.inputValue
                        })), a.createElement(B, {
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
                        if (this.props.gqlError) t.push(a.createElement(l.Ya, {
                            key: "emotePicker-error"
                        }, a.createElement(l.W, {
                            color: l.O.Error
                        }, Object(s.d)("Unable to load available emotes.", "EmotePicker"))));
                        else if (this.props.loading) t.push(a.createElement(l.Ya, {
                            alignItems: l.f.Center,
                            display: l.X.Flex,
                            key: "loading",
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: l.Xa.Center
                        }, a.createElement(l.ab, {
                            key: "LoadingSpinner"
                        })));
                        else if (this.state.channelTabEnabled && this.state.channelTabSelected) {
                            if (this.state.filteredOwnedChannelEmoteSets.length > 0) {
                                var n = this.state.filteredOwnedChannelEmoteSets[0].emotes.map(function(t) {
                                    return t.setID = e.state.filteredOwnedChannelEmoteSets[0].id, t
                                });
                                t.push(a.createElement(l.Ya, {
                                    className: "emote-picker__content-block",
                                    key: "ownedChannelEmoteSets",
                                    padding: 1,
                                    position: l.kb.Relative
                                }, a.createElement(P.a, {
                                    emotes: n,
                                    onClickEmote: this.onClickEmote
                                })))
                            }
                            t = t.concat(this.state.filteredAvailableUpsells.map(function(t) {
                                return a.createElement(l.Ya, {
                                    className: "emote-picker__content-block",
                                    key: "planUpsell:" + t.level,
                                    padding: 1,
                                    position: l.kb.Relative
                                }, a.createElement(V, {
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
                            }), a.createElement(l.Ya, {
                                key: "emoteGrid" + t.id,
                                position: l.kb.Relative,
                                padding: {
                                    top: 1,
                                    bottom: 2
                                },
                                className: "emote-picker__content-block"
                            }, a.createElement(P.a, {
                                emotes: n,
                                onClickEmote: e.onClickEmote
                            }))
                        });
                        return t.length > 0 ? a.createElement(F.b, {
                            className: "emote-picker__tab-content"
                        }, a.createElement(l.Ya, {
                            padding: 1
                        }, t)) : null
                    }, t.prototype.filterEmoteSet = function(e, t) {
                        return e.filter(function(e) {
                            return !(!e.displayName || !e.displayName.toLowerCase().includes(t)) || e.token.toLowerCase().includes(t)
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
                    }, t = i.__decorate([Object(R.b)("EmotePickerMenu", {
                        autoReportInteractive: !0
                    })], t)
                }(a.Component)),
                G = (n("zyUW"), function(e) {
                    var t = null;
                    return e.imgSrc && (t = a.createElement(a.Fragment, null, a.createElement(l.S, {
                        className: "emote-grid-section__header-image",
                        src: e.imgSrc,
                        alt: e.label
                    }), a.createElement(l.Ya, {
                        padding: {
                            right: .5
                        }
                    }))), a.createElement(l.Ya, {
                        position: l.kb.Relative,
                        padding: 1,
                        className: "emote-grid-section"
                    }, a.createElement(l.Fb, {
                        alignItems: l.f.Center,
                        display: l.X.Flex,
                        padding: {
                            x: 1,
                            bottom: .5
                        }
                    }, t, a.createElement(l.W, {
                        align: l.gc.Middle,
                        bold: !0,
                        color: l.O.Alt
                    }, e.label)), a.createElement(P.a, {
                        context: e.context,
                        emotes: e.emotes,
                        onClickEmote: e.onClickEmote,
                        spaced: !0
                    }))
                }),
                Y = n("17x9"),
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.checkVisible = function(e, n) {
                            t.props.checkVisible(e, n)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.unregister = this.context.registerReceiver(this)
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return a.createElement(a.Fragment, null, this.props.children)
                    }, t.contextTypes = {
                        registerReceiver: Y.func
                    }, t
                }(a.Component),
                X = (n("cr2a"), function(e) {
                    return a.createElement(l.Ya, {
                        className: "emote-picker-tab-item " + (e.isActive ? "emote-picker-tab-item--active" : ""),
                        position: l.kb.Relative
                    }, a.createElement(l.Va, {
                        "data-a-target": e.label,
                        onClick: e.onClick,
                        blurAfterClick: !0
                    }, a.createElement(l.Ya, {
                        padding: 1,
                        display: l.X.InlineFlex
                    }, a.createElement(l.tb, {
                        asset: e.icon
                    }))))
                }),
                Q = n("a5fV"),
                K = (n("GLn2"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.channelSubscriptionProducts.find(function(t) {
                                return !!t.emotes.find(function(t) {
                                    return e.props.subUpsellClickedEmote.id === t.id
                                })
                            }),
                            n = this.props.channelSubscriptionProducts.filter(function(e) {
                                return !e.emotes.find(function(e) {
                                    return !e.isLocked
                                })
                            }).sort(function(e, t) {
                                var n = O(e);
                                return O(t) - n
                            });
                        if (t && this.props.subUpsellClickedEmote.srcSet && this.props.channelDisplayName) {
                            var r = O(t),
                                o = Object(s.d)("Subscribe at Tier {tierNumber}", {
                                    tierNumber: r
                                }, "EmotePickerCard"),
                                c = [],
                                d = [];
                            n.forEach(function(e) {
                                if (O(e) <= r) {
                                    var t = e.emotes.map(function(e) {
                                        return i.__assign({}, e, {
                                            isLocked: !1
                                        })
                                    });
                                    d.push.apply(d, t)
                                } else c.push.apply(c, e.emotes)
                            });
                            var u = c.concat(d),
                                p = t.price.toString() || "";
                            if (t.priceInfo) {
                                var m = t.priceInfo;
                                p = Object(Q.a)(Object(Q.b)(m.total, m.exponent), m.currency)
                            }
                            return a.createElement(l.Ya, {
                                className: "emote-sub-upsell"
                            }, a.createElement(l.Fb, {
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(l.z, {
                                type: l.F.Text,
                                icon: l.ub.AngleLeft,
                                onClick: this.props.onBackClick,
                                size: l.D.Small
                            }, Object(s.d)("Back", "EmotePickerCard"))), a.createElement(l.Fb, {
                                display: l.X.Flex,
                                padding: {
                                    x: 2,
                                    bottom: 1
                                }
                            }, a.createElement(l.Ya, {
                                flexGrow: 0,
                                flexShrink: 0,
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(l.S, {
                                src: this.getBigImageSrc(this.props.subUpsellClickedEmote.srcSet),
                                alt: this.props.subUpsellClickedEmote.displayName || ""
                            })), a.createElement(l.Ya, {
                                flexGrow: 1,
                                flexShrink: 1,
                                padding: {
                                    left: 1
                                }
                            }, a.createElement(l.W, {
                                bold: !0
                            }, this.renderCopyHeader(r.toString())), a.createElement(l.W, null, this.renderCopyBody(r.toString(), d.length)))), a.createElement(l.Ya, {
                                display: l.X.Flex,
                                alignItems: l.f.Center,
                                justifyContent: l.Xa.Center,
                                padding: {
                                    x: 2
                                }
                            }, a.createElement(z.a, {
                                customSubscribeNowMessage: o,
                                isSubbedToTier: !1,
                                fullWidth: !0,
                                tierPrice: p,
                                handleSubAction: this.props.handleSubAction,
                                productName: t.name,
                                url: t.url,
                                isEsportChannel: this.props.isEsportChannel
                            })), a.createElement(l.fc, null, a.createElement("hr", {
                                className: "emote-sub-upsell__divider"
                            })), a.createElement(F.b, {
                                className: "emote-sub-upsell__content"
                            }, a.createElement(l.Ya, null, a.createElement(l.Ya, {
                                padding: {
                                    x: 2
                                }
                            }, a.createElement(l.W, {
                                bold: !0
                            }, Object(s.d)("{numUnlocked} Emotes Included", {
                                numUnlocked: d.length
                            }, "EmotePickerCard"))), a.createElement(l.Ya, {
                                padding: {
                                    x: 1,
                                    top: .5,
                                    bottom: 3
                                }
                            }, a.createElement(P.a, {
                                emotes: u,
                                spaced: !0,
                                onClickEmote: this.props.onClickEmote
                            })))))
                        }
                        return null
                    }, t.prototype.renderCopyHeader = function(e) {
                        return Object(s.d)("{channelDisplayName} - Tier {tierNumber} Subscription", {
                            tierNumber: e,
                            channelDisplayName: this.props.channelDisplayName
                        }, "EmotePickerCard")
                    }, t.prototype.renderCopyBody = function(e, t) {
                        return 1 === t ? Object(s.d)("To unlock 1 emote and more subscriber benefits, subscribe at Tier {tierNumber}", {
                            tierNumber: e
                        }, "EmotePickerCard") : Object(s.d)("To unlock {numEmotes} emotes and more subscriber benefits, subscribe at Tier {tierNumber}.", {
                            tierNumber: e,
                            numEmotes: t
                        }, "EmotePickercard")
                    }, t.prototype.getBigImageSrc = function(e) {
                        var t = e.split(" ");
                        return 6 === t.length ? t[2] : t[0]
                    }, t
                }(a.Component)),
                $ = n("XQnt"),
                Z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        (!this.props.channelID || this.props.data && !this.props.data.loading) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return null === this.props.subUpsellClickedEmote ? null : a.createElement(K, {
                            channelDisplayName: this.props.channelDisplayName,
                            channelSubscriptionProducts: this.subscriptionProducts,
                            handleSubAction: this.props.handleSubAction,
                            isEsportChannel: this.props.isEsportChannel,
                            onBackClick: this.props.onBackClick,
                            onClickEmote: this.props.onClickEmote,
                            subUpsellClickedEmote: this.props.subUpsellClickedEmote
                        })
                    }, Object.defineProperty(t.prototype, "subscriptionProducts", {
                        get: function() {
                            if (this.props.data && this.props.data.user && this.props.data.user.subscriptionProducts) {
                                var e = this.props.data.user.subscriptionProducts.filter(function(e) {
                                    return e
                                });
                                return I(this.props.ownedSetIDs, e)
                            }
                            return this.props.channelSubscriptionProducts
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                J = Object(d.compose)(Object(h.a)($, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelID
                    }
                }), Object(R.b)("EmoteSubUpsell"))(Z);
            ! function(e) {
                e.FrequentlyUsed = "frequently_used", e.CurrentChannel = "current_channel", e.OtherChannel = "other_subbed_channel", e.Unlocked = "unlocked", e.Global = "global"
            }(A || (A = {}));
            var ee;
            ! function(e) {
                e.FrequentlyUsedEmotes = "FREQUENTLY_USED_EMOTES", e.ChannelEmotes = "CHANNEL_EMOTES", e.AllEmotes = "ALL_EMOTES"
            }(ee || (ee = {}));
            var te = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onTabNavClick = function(e) {
                            if (n.scroll && n.scroll.scrollContent && e.currentTarget.getAttribute("data-a-target")) {
                                var t = e.currentTarget.getAttribute("data-a-target"),
                                    r = ee.FrequentlyUsedEmotes;
                                switch (t) {
                                    case ee.FrequentlyUsedEmotes:
                                        n.frequentlyUsedEmotesRef && (n.frequentlyUsedEmotesRef.scrollIntoView(), r = ee.FrequentlyUsedEmotes);
                                        break;
                                    case ee.ChannelEmotes:
                                        n.channelEmotesRef && (n.channelEmotesRef.scrollIntoView(), r = ee.ChannelEmotes);
                                        break;
                                    case ee.AllEmotes:
                                        n.allEmotesRef && (n.allEmotesRef.scrollIntoView(), r = ee.AllEmotes)
                                }
                                n.setState({
                                    selectedNavTab: r
                                })
                            }
                        }, n.onClickEmote = function(e, t) {
                            if (n.props.onClickEmote && !e.isLocked) {
                                n.props.onClickEmote(e.displayName || e.token, e.id);
                                var r = {
                                    channel_id: n.props.channelID,
                                    chatroom_id: n.props.roomID,
                                    context: t,
                                    emote_picker_sid: n.props.emotePickerSessionID,
                                    emote_id: e.id,
                                    emoticon_set_id: e.setID,
                                    generated_by: n.props.emotePickerSource
                                };
                                s.o.track(W.SpadeEventType.EmotePickerClickthrough, r)
                            } else e.isLocked && n.onClickLockedEmote(e)
                        }, n.saveScrollRef = function(e) {
                            return n.scroll = e
                        }, n.saveAllEmotesRef = function(e) {
                            return n.allEmotesRef = e
                        }, n.saveChannelEmotesRef = function(e) {
                            return n.channelEmotesRef = e
                        }, n.saveFrequentlyUsedEmotesRef = function(e) {
                            return n.frequentlyUsedEmotesRef = e
                        }, n.checkVisible = function(e, t) {
                            if (t) {
                                var r = n.state.selectedNavTab;
                                n.channelEmotesRef ? t.offset > 0 && t.offset < n.channelEmotesRef.offsetTop ? r = ee.FrequentlyUsedEmotes : t.offset > n.channelEmotesRef.offsetTop && t.offset < n.allEmotesRef.offsetTop ? r = ee.ChannelEmotes : t.offset > n.allEmotesRef.offsetTop && (r = ee.AllEmotes) : t.offset > 0 && t.offset < n.allEmotesRef.offsetTop ? r = ee.FrequentlyUsedEmotes : t.offset > n.allEmotesRef.offsetTop && (r = ee.AllEmotes), n.state.selectedNavTab !== r && n.setState({
                                    selectedNavTab: r
                                })
                            }
                        }, n.onClickLockedEmote = function(e) {
                            n.setState({
                                subUpsellClickedEmote: e
                            })
                        }, n.onBackClick = function() {
                            n.setState({
                                subUpsellClickedEmote: null,
                                selectedNavTab: ee.FrequentlyUsedEmotes
                            })
                        }, n.handleFilterChange = function(e) {
                            var t = e.target.value,
                                r = t.toLowerCase();
                            n.setState({
                                filter: r,
                                inputValue: t,
                                filteredEmotes: n.filterEmoteSets(n.props.allEmoteSets, r),
                                selectedNavTab: ee.FrequentlyUsedEmotes
                            })
                        }, n.filterEmoteSets = function(e, t) {
                            var n = [];
                            e.forEach(function(e) {
                                e.emotes.filter(function(e) {
                                    return !(!e.displayName || !e.displayName.toLowerCase().includes(t)) || e.token.toLowerCase().includes(t)
                                }).forEach(function(t) {
                                    t.setID = e.id, n.push(t)
                                })
                            });
                            var r = Object(C.d)(),
                                i = 0 === Object.keys(r).length ? void 0 : r,
                                a = Object(T.f)(n, t, i);
                            return Object(T.d)(a)
                        }, n.updateChannelEmotes = function(e) {
                            var t = e.channelSubscriptionProducts.reduce(function(e, t) {
                                return e.concat(t.emotes)
                            }, []);
                            if (0 === t.length || !e.channelDisplayName) return null;
                            var r = [],
                                i = [];
                            t.forEach(function(e) {
                                e.isLocked ? r.push(e) : i.push(e)
                            });
                            var a = i.concat(r);
                            n.setState({
                                sortedChannelEmotes: a
                            })
                        }, n.state = {
                            filter: "",
                            filteredEmotes: [],
                            inputValue: "",
                            selectedNavTab: ee.FrequentlyUsedEmotes,
                            sortedChannelEmotes: [],
                            subUpsellClickedEmote: null
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return this.props.emotePickerSessionID === e.emotePickerSessionID || this.props.channelSubscriptionProducts !== e.channelSubscriptionProducts || this.props.globalEmotes !== e.globalEmotes || this.props.frequentlyUsedEmotes !== e.frequentlyUsedEmotes || this.props.otherChannelEmoteSets !== e.otherChannelEmoteSets || this.props.unlockedEmotes !== e.unlockedEmotes
                    }, t.prototype.componentDidMount = function() {
                        if (this.props.channelID && this.updateChannelEmotes(this.props), this.props.emotePickerSessionID && this.props.channelID) {
                            var e = {
                                channel_id: this.props.channelID,
                                emote_picker_sid: this.props.emotePickerSessionID,
                                generated_by: this.props.emotePickerSource,
                                chatroom_id: this.props.roomID
                            };
                            s.o.track(W.SpadeEventType.ViewedEmotePicker, e)
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (this.props.channelID === e.channelID && this.props.channelSubscriptionProducts === e.channelSubscriptionProducts || this.updateChannelEmotes(e), e.channelID && e.emotePickerSessionID && !this.props.emotePickerSessionID) {
                            var t = {
                                channel_id: e.channelID,
                                emote_picker_sid: e.emotePickerSessionID,
                                generated_by: e.emotePickerSource,
                                chatroom_id: e.roomID
                            };
                            s.o.track(W.SpadeEventType.ViewedEmotePicker, t)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(l.u, {
                            "data-a-target": "emote-picker",
                            direction: this.props.direction ? this.props.direction : l.v.TopRight,
                            size: this.props.size ? this.props.size : l.w.Medium,
                            noTail: !0,
                            show: !0
                        }, a.createElement(l.Ya, {
                            className: "emote-picker"
                        }, this.renderView()))
                    }, t.prototype.renderView = function() {
                        var e = null;
                        return null === this.state.subUpsellClickedEmote && (e = a.createElement(a.Fragment, null, a.createElement(l.Fb, {
                            padding: {
                                top: 2,
                                x: 2
                            }
                        }, a.createElement(l.wb, {
                            autoFocus: !0,
                            onChange: this.handleFilterChange,
                            placeholder: Object(s.d)("Search for Emotes", "EmotePickerCard"),
                            value: this.state.inputValue
                        })), this.renderTabContent())), a.createElement(a.Fragment, null, a.createElement(J, {
                            channelDisplayName: this.props.channelDisplayName,
                            channelID: this.props.channelID,
                            channelSubscriptionProducts: this.props.channelSubscriptionProducts,
                            isEsportChannel: this.props.isEsportChannel || !1,
                            handleSubAction: this.props.handleSubAction,
                            onBackClick: this.onBackClick,
                            onClickEmote: this.onClickLockedEmote,
                            ownedSetIDs: this.props.ownedSetIDs,
                            subUpsellClickedEmote: this.state.subUpsellClickedEmote
                        }), e)
                    }, t.prototype.renderTabContent = function() {
                        return this.props.gqlError ? a.createElement(l.Ya, null, a.createElement(l.W, {
                            "data-test-selector": "emote-picker-menu-error-text",
                            color: l.O.Error
                        }, Object(s.d)("Unable to load available emotes.", "EmotePickerCard"))) : this.props.loading ? a.createElement(l.Ya, {
                            alignItems: l.f.Center,
                            display: l.X.Flex,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: l.Xa.Center,
                            padding: 1
                        }, a.createElement(l.ab, null)) : "" !== this.state.filter ? this.renderSearchContent() : a.createElement(a.Fragment, null, a.createElement(F.b, {
                            scrollRef: this.saveScrollRef,
                            className: "emote-picker__tab-content"
                        }, a.createElement(l.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(q, {
                            checkVisible: this.checkVisible
                        }, this.getFrequentlyUsedEmoteGrid(), this.getCurrentChannelEmoteGrid(), this.getOtherSubEmoteGrids(), this.getResidualEmoteGrids()))), this.renderTabNav())
                    }, t.prototype.getFrequentlyUsedEmoteGrid = function() {
                        return 0 === this.props.frequentlyUsedEmotes.length ? null : a.createElement(l.Ya, {
                            className: "emote-picker__content-block",
                            refDelegate: this.saveFrequentlyUsedEmotesRef
                        }, a.createElement(G, {
                            context: A.FrequentlyUsed,
                            emotes: this.props.frequentlyUsedEmotes,
                            label: Object(s.d)("Frequently Used", "EmotePickerCard"),
                            onClickEmote: this.onClickEmote
                        }))
                    }, t.prototype.getCurrentChannelEmoteGrid = function() {
                        return 0 !== this.state.sortedChannelEmotes.length && this.props.channelDisplayName ? a.createElement(l.Ya, {
                            className: "emote-picker__content-block",
                            refDelegate: this.saveChannelEmotesRef
                        }, a.createElement(G, {
                            context: A.CurrentChannel,
                            emotes: this.state.sortedChannelEmotes,
                            imgSrc: this.props.channelProfileImageURL || void 0,
                            label: this.props.channelDisplayName,
                            onClickEmote: this.onClickEmote
                        })) : null
                    }, t.prototype.getOtherSubEmoteGrids = function() {
                        var e = this,
                            t = [];
                        return this.props.otherChannelEmoteSets.forEach(function(n) {
                            n.owner && n.owner.displayName && t.push(a.createElement(l.Ya, {
                                key: "emote-grid--" + n.id + "-emotes",
                                className: "emote-picker__content-block"
                            }, a.createElement(G, {
                                context: A.OtherChannel,
                                emotes: n.emotes,
                                imgSrc: n.owner.profileImageURL || void 0,
                                label: n.owner.displayName,
                                onClickEmote: e.onClickEmote
                            })))
                        }), a.createElement(a.Fragment, null, t)
                    }, t.prototype.getResidualEmoteGrids = function() {
                        var e = [];
                        return this.props.unlockedEmotes.length > 0 && e.push(a.createElement(l.Ya, {
                            key: "emote-grid--unlocked-emotes",
                            className: "emote-picker__content-block"
                        }, a.createElement(G, {
                            context: A.Unlocked,
                            emotes: this.props.unlockedEmotes,
                            label: Object(s.d)("Unlocked", "EmotePickerCard"),
                            onClickEmote: this.onClickEmote
                        }))), this.props.globalEmotes.length > 0 && e.push(a.createElement(l.Ya, {
                            key: "emote-grid--global-emotes"
                        }, a.createElement(G, {
                            context: A.Global,
                            emotes: this.props.globalEmotes,
                            label: Object(s.d)("Global", "EmotePickerCard"),
                            onClickEmote: this.onClickEmote
                        }))), a.createElement(l.Ya, {
                            refDelegate: this.saveAllEmotesRef
                        }, e)
                    }, t.prototype.renderSearchContent = function() {
                        var e = Object(s.d)('No Search Results for "{inputValue}"', {
                            inputValue: this.state.inputValue
                        }, "EmotePickerCard");
                        return this.state.filteredEmotes.length > 0 && (e = Object(s.d)('Search Results for "{inputValue}"', {
                            inputValue: this.state.inputValue
                        }, "EmotePickerCard")), a.createElement(F.b, {
                            className: "emote-picker__tab-content"
                        }, a.createElement(l.Ya, {
                            position: l.kb.Relative,
                            padding: {
                                x: 1,
                                top: 1,
                                bottom: 3
                            },
                            className: "emote-picker__content-block"
                        }, a.createElement(l.Fb, {
                            padding: {
                                x: 1
                            }
                        }, a.createElement(l.W, {
                            bold: !0
                        }, e)), a.createElement(P.a, {
                            emotes: this.state.filteredEmotes,
                            onClickEmote: this.onClickEmote,
                            spaced: !0
                        })))
                    }, t.prototype.renderTabNav = function() {
                        var e = null;
                        return this.state.sortedChannelEmotes.length > 0 && (e = a.createElement(X, {
                            isActive: this.state.selectedNavTab === ee.ChannelEmotes,
                            label: ee.ChannelEmotes,
                            icon: l.ub.NavChannels,
                            onClick: this.onTabNavClick
                        })), a.createElement(l.Fb, {
                            background: l.r.Alt,
                            display: l.X.Flex,
                            className: "emote-picker__tab-nav-container"
                        }, a.createElement(X, {
                            isActive: this.state.selectedNavTab === ee.FrequentlyUsedEmotes,
                            label: ee.FrequentlyUsedEmotes,
                            icon: l.ub.GlyphLength,
                            onClick: this.onTabNavClick
                        }), e, a.createElement(X, {
                            isActive: this.state.selectedNavTab === ee.AllEmotes,
                            label: ee.AllEmotes,
                            icon: l.ub.EmoticonsAll,
                            onClick: this.onTabNavClick
                        }))
                    }, t
                }(a.Component),
                ne = n("DB+C"),
                re = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.handleSubEvent = function(e) {
                            e.action === M.a.ClickCheckout && n.checkAndDisplaySubscriptionCheckout(), Object(M.b)(i.__assign({}, e, {
                                action: M.a.ClickCheckout,
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
                            channelDisplayName: void 0,
                            channelTabVisible: !1,
                            frequentlyUsedEmotes: [],
                            globalEmotes: [],
                            gqlError: t.emoteSetsData && !!t.emoteSetsData.error || t.channelData && !!t.channelData.error || !1,
                            gqlLoading: t.emoteSetsData && !!t.emoteSetsData.loading || t.channelData && !!t.channelData.loading || !1,
                            otherChannelEmoteSets: [],
                            ownedChannelEmoteSets: [],
                            ownedSetIDs: new Set([]),
                            subscribeTexts: [],
                            unlockedEmotes: []
                        };
                        return r = n.applyDataPropsToState(t, r), n.state = i.__assign({}, r), n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(C.b)(), this.checkDataLoaded(this.props) && (this.props.onLoad && this.props.onLoad(this.checkForContent(this.props)), this.props.latencyTracking.reportInteractive())
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
                        if (e.visible && !this.props.visible && e.emoteSetsData && e.emoteSetsData.emoteMap) {
                            var n = Object(C.c)(e.emoteSetsData.emoteMap);
                            this.props.openEmotePicker(), this.setState({
                                frequentlyUsedEmotes: n
                            })
                        } else this.props.visible && !e.visible && this.props.closeEmotePicker()
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.closeEmotePicker()
                    }, t.prototype.render = function() {
                        if (!this.props.visible) return null;
                        var e = this.props.channelData && this.props.channelData.user && this.props.channelData.user.campaignProperties && this.props.channelData.user.campaignProperties.domains && this.props.channelData.user.campaignProperties.domains.length > 0 || !1,
                            t = a.createElement(H, {
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
                            n = a.createElement(te, {
                                allEmoteSets: this.state.allEmoteSets,
                                channelID: this.props.channelOwnerID,
                                channelDisplayName: this.state.channelDisplayName,
                                channelProfileImageURL: this.state.channelProfileImageURL,
                                channelSubscriptionProducts: this.state.channelSubscriptionProducts,
                                direction: this.props.direction,
                                emotePickerSessionID: this.props.emotePickerSessionID,
                                emotePickerSource: this.props.emotePickerSource,
                                frequentlyUsedEmotes: this.state.frequentlyUsedEmotes,
                                globalEmotes: this.state.globalEmotes,
                                gqlError: this.state.gqlError,
                                handleSubAction: this.handleSubEvent,
                                isEsportChannel: e,
                                loading: this.state.gqlLoading,
                                onClickEmote: this.props.onClickEmote,
                                ownedSetIDs: this.state.ownedSetIDs,
                                otherChannelEmoteSets: this.state.otherChannelEmoteSets,
                                roomID: this.props.roomID,
                                size: this.props.size,
                                toggleVisibility: this.props.toggleVisibility,
                                unlockedEmotes: this.state.unlockedEmotes
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
                        if (e.emoteSetsData && e.emoteSetsData.emoteSets && e.emoteSetsData.emoteSets.length > 0) {
                            n.ownedSetIDs = new Set;
                            for (var r = 0, a = e.emoteSetsData.emoteSets; r < a.length; r++) {
                                var o = a[r];
                                o && o.id && n.ownedSetIDs.add(parseInt(o.id, 10))
                            }
                            n.allEmoteSets = Object(T.a)(e.emoteSetsData.emoteSets);
                            var l = [],
                                c = [],
                                d = [];
                            n.allEmoteSets.forEach(function(t) {
                                t.owner || "0" !== t.id ? t.owner && "" !== t.owner.id ? e.channelData && e.channelData.user && e.channelData.user.id === t.owner.id || l.push(t) : d.push.apply(d, t.emotes) : c.push.apply(c, t.emotes)
                            }), n.otherChannelEmoteSets = function(e) {
                                var t = {};
                                e.forEach(function(e) {
                                    var n;
                                    e.owner && e.owner.id && (t[e.owner.id] ? (n = t[e.owner.id].emotes).push.apply(n, e.emotes) : t[e.owner.id] = i.__assign({}, e))
                                });
                                var n = [];
                                return Object.keys(t).forEach(function(e) {
                                    n.push(t[e])
                                }), n
                            }(l), n.globalEmotes = c, n.unlockedEmotes = d
                        }
                        if (e.channelData && e.channelData.user) {
                            var u = void 0;
                            e.channelData.user.self && e.channelData.user.self.subscriptionBenefit && (u = e.channelData.user.self.subscriptionBenefit.platform), n.availableUpsells = function(e, t, n) {
                                var r = [];
                                return !n || n !== D.b.IOS && n !== D.b.Android ? (t.forEach(function(n, a) {
                                    var o = n.price;
                                    0 === a && Object(N.g)(t) && (o = Object(N.c)(t[0])), n.emotes && n.emotes.length && n.emoteSetID && !e.has(parseInt(n.emoteSetID, 10)) && r.push(i.__assign({}, n, {
                                        emotes: Object(T.e)(n.emotes, n.emoteSetID),
                                        level: a,
                                        price: o
                                    }))
                                }), r) : r
                            }(n.ownedSetIDs, e.channelData.user.subscriptionProducts, u), n.channelDisplayName = e.channelData.user.displayName, n.channelProfileImageURL = e.channelData.user.profileImageURL, n.channelSubscriptionProducts = I(n.ownedSetIDs, e.channelData.user.subscriptionProducts), n.ownedChannelEmoteSets = function(e, t) {
                                for (var n = [{
                                        id: "0",
                                        emotes: []
                                    }], r = 0, i = t; r < i.length; r++) {
                                    var a = i[r];
                                    a.emotes && a.emoteSetID && e.has(parseInt(a.emoteSetID, 10)) && (n[0].emotes = n[0].emotes.concat(Object(T.e)(a.emotes, a.emoteSetID)))
                                }
                                return n[0].emotes.length ? n : []
                            }(n.ownedSetIDs, e.channelData.user.subscriptionProducts), n.subscribeTexts = function(e) {
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var r = e[n],
                                        i = Object(w.a)(r.tier);
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
                            }(e.channelData.user.subscriptionProducts)
                        }
                        return n.channelTabVisible = e.channelData && e.channelData.user && e.channelData.user.subscriptionProducts.filter(this.subscriptionProductHasEmotes).length > 0 || !1, n
                    }, t.prototype.subscriptionProductHasEmotes = function(e) {
                        return void 0 !== e.emoteSetID && !!e.emotes && e.emotes.length > 0
                    }, t.prototype.checkAndDisplaySubscriptionCheckout = function() {
                        var e = s.n.get(v.c, ""),
                            t = s.n.get(v.d, ""),
                            n = s.n.get(v.b, ""),
                            r = Number(n);
                        e && (this.props.channelData && this.props.channelData.user && this.props.channelData.user.subscriptionProducts.map(function(e) {
                            return e.name
                        }).includes(e) ? this.props.sessionUser ? this.props.showSubscriptionCheckoutModal({
                            recipientLogin: t,
                            productName: e,
                            mysteryGiftCount: r,
                            trackingContext: {
                                source: E.c.EmotePicker
                            }
                        }) : this.props.showLoginModal() : Object(v.e)())
                    }, t
                }(a.Component);
            var ie = Object(d.compose)(Object(r.connect)(function(e) {
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
                        showLoginModal: Object(v.f)(k.a.EmotePickerSubscriptionButton),
                        showSubscriptionCheckoutModal: function(e) {
                            var t = i.__rest(e, []);
                            return Object(b.d)(m.a, {
                                component: "CheckoutModal",
                                loader: function() {
                                    return Promise.all([n.e(0), n.e(209)]).then(n.bind(null, "KJv/"))
                                },
                                componentProps: t
                            })
                        }
                    }, e)
                }), Object(h.a)(ne, {
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
                }]), Object(R.b)("EmotePicker"), Object(g.a)())(re),
                ae = function(e) {
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
                            onClick: this.toggleEmotePicker,
                            isActive: this.state.isEmotePickerMenuVisible
                        }));
                        var t = null;
                        this.hasInteractedOrPageload && (t = a.createElement(ie, {
                            channelOwnerID: this.props.channelOwnerID,
                            emotePickerSource: this.props.emotePickerSource,
                            onClickEmote: this.onClickEmote,
                            onLoad: this.onEmotePickerDataLoaded,
                            toggleVisibility: this.toggleEmotePicker,
                            visible: this.state.isEmotePickerMenuVisible,
                            direction: this.props.direction
                        }));
                        var n = a.createElement(l.Ya, i.__assign({
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
                oe = Object(R.b)("EmotePicker")(ae);
            var se = Object(r.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(oe);
            n.d(t, "a", function() {
                return se
            }), n.d(t, "c", function() {
                return ie
            }), n.d(t, !1, function() {
                return D.a
            }), n.d(t, !1, function() {
                return D.d
            }), n.d(t, !1, function() {
                return D.c
            }), n.d(t, !1, function() {
                return D.b
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
                    var y = n && Object(r.e)(k, n);
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
                        }, t.logger = c.k.withCategory("AutocompleteBalloon"), t.renderMatches = function() {
                            return t.props.matches.map(function(e, n) {
                                var r = t.state.selectedMatch,
                                    i = r && r.replacement === e.replacement,
                                    a = l("autocomplete-balloon__item", {
                                        "autocomplete-balloon__item--selected": i
                                    });
                                return o.createElement(p.Ya, {
                                    key: "autocomplete-match-" + n,
                                    refDelegate: i ? t.focusOnOption : void 0,
                                    "data-test-selector": m
                                }, o.createElement(p.Qa, {
                                    display: p.X.Block,
                                    fullWidth: !0
                                }, o.createElement("button", {
                                    onMouseEnter: t.handleMatchMouseEnter,
                                    className: a,
                                    "data-a-target": e.replacement,
                                    "data-click-index": n,
                                    onClick: t.onMatchClick
                                }, o.createElement(p.Ya, {
                                    padding: {
                                        x: .5
                                    },
                                    display: p.X.Flex,
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
                        return e = 0 === this.props.matches.length ? o.createElement(p.Ya, {
                            padding: {
                                x: .5
                            },
                            "data-test-selector": "autocomplete-balloon-no-matches"
                        }, o.createElement(p.W, {
                            type: p.Wb.Span,
                            color: p.O.Alt2
                        }, this.messages.noMatches)) : this.renderMatches(), o.createElement(p.Ya, {
                            position: p.kb.Relative
                        }, o.createElement(d.a, {
                            onClickOut: this.props.onDismiss
                        }, o.createElement(p.u, {
                            direction: p.v.TopLeft,
                            "data-a-target": "autocomplete-balloon",
                            "data-test-selector": "autocomplete-balloon",
                            show: !0
                        }, o.createElement(p.Qa, {
                            "data-test-selector": "autocomplete-matches-container",
                            className: "autocomplete-balloon",
                            overflow: p.db.Hidden,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column
                        }, o.createElement("div", {
                            style: {
                                maxHeight: this.state.containerHeight
                            },
                            ref: this.setAutocompleteBalloonElement
                        }, o.createElement(u.b, null, o.createElement(p.Ya, {
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
                            return void c.k.warn("Chat Suggestions tracking was passed an unknown autocomplete type.")
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
                        c.o.track(g.SpadeEventType.ChatSuggestionComplete, n)
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
                                c.o.track(g.SpadeEventType.ChatSuggestion, n)
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
                        return o.createElement(p.Ya, null, this.state.matches && o.createElement(h, {
                            matches: this.state.matches,
                            onMatchSelect: this.insertReplacement,
                            onDismiss: this.resetDisplayState,
                            containerElement: this.props.containerElement
                        }), this.props.componentType === r.Input ? o.createElement(p.Sa, i.__assign({}, e, {
                            type: e.type || p.Ua.Text
                        })) : o.createElement(p.Tb, i.__assign({}, e)), this.props.children)
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
                            return [o.createElement(p.Ya, {
                                padding: {
                                    right: .5
                                },
                                flexShrink: 0,
                                key: "emote-img-" + e.id
                            }, o.createElement("img", {
                                className: "emote-autocomplete-provider__image",
                                srcSet: e.srcSet
                            })), o.createElement(p.W, {
                                type: p.Wb.Span,
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
        uHYy: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                i = n("ZS2+"),
                a = n("4VQm"),
                o = n("+Nla"),
                s = n("Gw3k"),
                l = n("3iFw"),
                c = n("Ue10"),
                d = i.a.wrap(function() {
                    return n.e(183).then(n.bind(null, "bsVm"))
                }, "PartnershipSignupPage"),
                u = function() {
                    return r.createElement(c.Ya, {
                        display: c.X.Flex,
                        flexDirection: c.Aa.Column,
                        flexWrap: c.Ba.NoWrap,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(o.a, null), r.createElement(s.a, null), r.createElement(c.Qa, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement("main", null, r.createElement(a.b, null, r.createElement(c.Ya, {
                        position: c.kb.Relative
                    }, r.createElement(d, null))), r.createElement(l.Whispers, null))))
                };
            n.d(t, "PartnerSignupRoot", function() {
                return u
            })
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
                return w
            }), n.d(t, "f", function() {
                return I
            }), n.d(t, "c", function() {
                return O
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
                d.p.tracking.track(u.SpadeEventType.WhisperThreadMod, {
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
                                return t = n.sent(), d.p.tracking.track(u.SpadeEventType.WhisperIgnoreUser, {
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
                                return n = r.sent(), d.p.tracking.track(u.SpadeEventType.WhisperThreadMod, {
                                    conversation_id: e,
                                    action: t,
                                    login: n && n.login
                                }), [2]
                        }
                    })
                })
            }

            function g(e) {
                d.p.tracking.track(u.SpadeEventType.WhisperAllThreadsMod, {
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

            function w(e) {
                m({
                    threadID: e,
                    action: a.Archive
                })
            }

            function I(e) {
                d.p.tracking.track(u.SpadeEventType.WhisperThreadCreate, {
                    conversation_id: e.threadID,
                    target_login: e.targetUserlogin,
                    source: "search_target_result",
                    search_result_rank: e.searchResultRank
                })
            }

            function O(e) {
                d.p.tracking.track(u.SpadeEventType.WhisperSearchClick, {
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
                                        return i.trys.push([1, 3, , 4]), [4, d.p.apollo.client.query({
                                            query: p
                                        })];
                                    case 2:
                                        return e = i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), d.k.error(n, "Failed to make query for current user info in WhisperSent reporting"), [3, 4];
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
                                return t = n.sent(), d.p.tracking.track(u.SpadeEventType.WhisperSent, {
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
                                return t = n.sent(), d.p.tracking.track(u.SpadeEventType.WhisperReceived, {
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
        "x0+1": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            alwaysShowMessage: !1
                        }, t.renderBody = function() {
                            return t.state.alwaysShowMessage ? t.props.messageBody : i.createElement("span", {
                                key: "deleted",
                                className: "chat-line__message--deleted"
                            }, i.createElement("a", {
                                href: "",
                                onClick: t.alwaysShowMessage
                            }, "<" + Object(a.d)("click to show", "MessageDeletedLine") + ">"))
                        }, t.alwaysShowMessage = function(e) {
                            e && e.preventDefault(), t.setState({
                                alwaysShowMessage: !0
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.targetLogin,
                            n = e.moderatorLogin;
                        return n ? Object(a.d)("{moderatorLogin} deleted {targetLogin}'s message: {body}", {
                            moderatorLogin: n,
                            targetLogin: t,
                            body: this.renderBody()
                        }, "MessageDeletedLine") : Object(a.d)("A moderator deleted {targetLogin}'s message: {body}", {
                            targetLogin: t,
                            body: this.renderBody()
                        }, "MessageDeletedLine")
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return o
            })
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
        },
        zyUW: function(e, t, n) {}
    }
]);