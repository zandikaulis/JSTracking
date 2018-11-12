(window.webpackJsonp = window.webpackJsonp || []).push([
    [82, 74], {
        "+pBb": function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return r
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "i", function() {
                return i
            }), n.d(t, "j", function() {
                return o
            }), n.d(t, "q", function() {
                return s
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "g", function() {
                return d
            }), n.d(t, "h", function() {
                return u
            }), n.d(t, "f", function() {
                return m
            }), n.d(t, "l", function() {
                return p
            }), n.d(t, "k", function() {
                return h
            }), n.d(t, "n", function() {
                return f
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "r", function() {
                return v
            }), n.d(t, "t", function() {
                return b
            }), n.d(t, "s", function() {
                return k
            }), n.d(t, "w", function() {
                return y
            }), n.d(t, "v", function() {
                return S
            }), n.d(t, "a", function() {
                return E
            }), n.d(t, "o", function() {
                return _
            }), n.d(t, "p", function() {
                return C
            }), n.d(t, "u", function() {
                return O
            }), n.d(t, "J", function() {
                return D
            }), n.d(t, "E", function() {
                return N
            }), n.d(t, "K", function() {
                return T
            }), n.d(t, "F", function() {
                return w
            }), n.d(t, "O", function() {
                return j
            }), n.d(t, "L", function() {
                return I
            }), n.d(t, "H", function() {
                return M
            }), n.d(t, "C", function() {
                return R
            }), n.d(t, "I", function() {
                return A
            }), n.d(t, "D", function() {
                return F
            }), n.d(t, "G", function() {
                return x
            }), n.d(t, "B", function() {
                return U
            }), n.d(t, "y", function() {
                return P
            }), n.d(t, "A", function() {
                return L
            }), n.d(t, "M", function() {
                return W
            }), n.d(t, "z", function() {
                return B
            }), n.d(t, "P", function() {
                return V
            }), n.d(t, "S", function() {
                return z
            }), n.d(t, "x", function() {
                return G
            }), n.d(t, "N", function() {
                return X
            }), n.d(t, "R", function() {
                return H
            }), n.d(t, "Q", function() {
                return q
            });
            var r = "chat.CHAT_HIDDEN",
                a = "chat.CHAT_SHOWN",
                i = "chat.EMOTE_SETS_UPDATED",
                o = "chat.FOLLOWER_MODE_DURATION_PREFERENCE_CHANGED",
                s = "chat.ROOM_STATE_UPDATED",
                c = "chat.AUTOMOD_ACTIONS_ENABLED",
                l = "chat.AUTOMOD_ACTIONS_DISABLED",
                d = "chat.EMOTE_PICKER_CLOSED",
                u = "chat.EMOTE_PICKER_OPENED",
                m = "chat.CLOSE_CHAT_RULES",
                p = "chat.MODERATION_ACTIONS_ENABLED",
                h = "chat.MODERATION_ACTIONS_DISABLED",
                f = "chat.MOD_ICONS_ENABLED",
                g = "chat.MOD_ICONS_DISABLED",
                v = "chat.SHOW_CHAT_RULES",
                b = "chat.TIMESTAMPS_ENABLED",
                k = "chat.TIMESTAMPS_DISABLED",
                y = "chat.USERNAME_CONTRAST_ENABLED",
                S = "chat.USERNAME_CONTRAST_DISABLED",
                E = "chat.ADD_COMMAND",
                _ = "chat.REMOVE_COMMAND",
                C = "chat.RENDER_SENT_CHAT_MESSAGE",
                O = "chat.UNHIDE_IGNORED_COMMAND";

            function D() {
                return {
                    type: b
                }
            }

            function N() {
                return {
                    type: k
                }
            }

            function T() {
                return {
                    type: y
                }
            }

            function w() {
                return {
                    type: S
                }
            }

            function j() {
                return {
                    type: a
                }
            }

            function I() {
                return {
                    type: r
                }
            }

            function M() {
                return {
                    type: c
                }
            }

            function R() {
                return {
                    type: l
                }
            }

            function A() {
                return {
                    type: p
                }
            }

            function F() {
                return {
                    type: h
                }
            }

            function x() {
                return {
                    type: f
                }
            }

            function U() {
                return {
                    type: g
                }
            }

            function P(e, t) {
                return {
                    type: o,
                    channelLogin: e,
                    duration: t
                }
            }

            function L() {
                return {
                    type: d
                }
            }

            function W() {
                return {
                    type: u
                }
            }

            function B() {
                return {
                    type: m
                }
            }

            function V() {
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

            function G(e, t) {
                return {
                    type: E,
                    command: e.toLowerCase(),
                    handler: t
                }
            }

            function X(e, t) {
                return {
                    type: _,
                    command: e.toLowerCase(),
                    handler: t
                }
            }

            function H(e) {
                return {
                    type: C,
                    customEvent: e
                }
            }

            function q(e) {
                return {
                    type: O,
                    userID: e
                }
            }
        },
        "/HY+": function(e, t, n) {
            "use strict";
            var r = n("dAHa"),
                a = n("mrSG"),
                i = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                c = n("cZKs"),
                l = n("aCAx"),
                d = n("GnwI"),
                u = n("Ue10"),
                m = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.Eb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, i.createElement(r.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), i.createElement(c.a, null))
                    }, t
                }(i.Component));
            var p = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: l.c
                }, e)
            }))(m);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.c
            }), n.d(t, !1, function() {
                return r.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.b
            }), n.d(t, !1, function() {
                return m
            }), n.d(t, "a", function() {
                return p
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
                return l
            });
            var r, a = n("RcPG"),
                i = n("a1OF");
            ! function(e) {
                e[e.Position = 0] = "Position", e[e.Token = 1] = "Token"
            }(r || (r = {}));
            var o = "0";

            function s(e, t, n) {
                var o = n.type === r.Position ? t : e,
                    s = n.map[o];
                if (s) {
                    var c = function(e, t) {
                        return {
                            images: {
                                sources: {
                                    "1x": Object(i.d)(t, 1),
                                    "2x": Object(i.d)(t, 2),
                                    "4x": Object(i.d)(t, 4)
                                },
                                themed: !1
                            },
                            alt: e
                        }
                    }(e, s.id);
                    return {
                        type: a.a.Emote,
                        content: c
                    }
                }
                return null
            }
            var c = {
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

            function l(e) {
                for (var t = {}, n = 0, r = e; n < r.length; n++) {
                    var a = r[n];
                    if (a && a.emotes)
                        for (var i = 0, s = a.emotes; i < s.length; i++) {
                            var l = s[i];
                            if (l && l.id && l.token)
                                for (var d = 0, u = c[l.token] || [l.token]; d < u.length; d++) {
                                    var m = u[d];
                                    t[m] && a.id === o || (t[m] = {
                                        id: l.id,
                                        token: m
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
                return a
            });
            var r = n("3Bft");

            function a(e) {
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
        "0us7": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("GIFg"),
                o = n("kYmV"),
                s = n("cuu2"),
                c = "https://help.twitch.tv/customer/portal/articles/2877822",
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(i.a, null, a.createElement(s.a, {
                            learnMoreUrl: c,
                            page: o.b.StreamSummary
                        }))
                    }, t
                }(a.Component);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return l
            })
        },
        "0yOi": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardRoot"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 81
                }
            };
            n.loc.source = {
                body: "query DashboardRoot($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "1rIY": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("2Ygb");

            function s(e, t) {
                var n = a.createContext(t),
                    s = n.Consumer,
                    c = n.Provider;
                return {
                    withContext: function(t) {
                        return function(n) {
                            var i;
                            return (i = function(e) {
                                function i() {
                                    return null !== e && e.apply(this, arguments) || this
                                }
                                return r.__extends(i, e), i.prototype.render = function() {
                                    var e = this;
                                    return a.createElement(s, null, function(i) {
                                        var o = t(i);
                                        return a.createElement(n, r.__assign({}, e.props, o))
                                    })
                                }, i
                            }(a.Component)).displayName = Object(o.a)("With" + e, n), i
                        }
                    },
                    InnerProvider: function(t) {
                        function n() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return r.__extends(n, t), n.prototype.componentDidMount = function() {
                            "object" === typeof this.props.value && this.props.value || i.k.error(new Error(n.displayName + " rendered without an appropriate initial value"), "Set an initial value in your provider component at mount time.")
                        }, n.prototype.render = function() {
                            return a.createElement(c, {
                                value: this.props.value
                            }, this.props.children)
                        }, n.displayName = "Inner" + e + "Provider", n
                    }(a.Component)
                }
            }
        },
        "22qk": function(e, t, n) {
            "use strict";

            function r(e, t) {
                return "/ext/" + u(e, t)
            }

            function a(e, t, n) {
                return {
                    pathname: "" + o(e),
                    search: "?configure=true&extensionID=" + u(t, n)
                }
            }

            function i(e) {
                return "/" + e + "/dashboard/extensions"
            }

            function o(e) {
                return "/" + e + "/dashboard/extensions/manage"
            }

            function s(e) {
                return "/" + e + "/dashboard/extensions/whitelisted"
            }

            function c(e, t) {
                return {
                    pathname: "/" + e + "/dashboard/extensions/permissions",
                    state: t
                }
            }

            function l(e) {
                return "/ext/categories/" + e
            }

            function d(e) {
                return "/ext/search?q=" + encodeURIComponent(e)
            }

            function u(e, t) {
                return t ? e + "-" + t : e
            }
            n.d(t, "d", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "e", function() {
                return o
            }), n.d(t, "h", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "g", function() {
                return d
            })
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
        "2psh": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "j", function() {
                return c
            }), n.d(t, "i", function() {
                return l
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "g", function() {
                return u
            }), n.d(t, "f", function() {
                return m
            }), n.d(t, "e", function() {
                return p
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "h", function() {
                return f
            }), n.d(t, "d", function() {
                return g
            });
            var r, a = n("/7QA"),
                i = n("2xye");
            ! function(e) {
                e.OpenStreamPicker = "open_stream_picker", e.VisitPreviousStream = "visit_previous_stream", e.VisitNextStream = "visit_next_stream", e.ExportDataStream = "export_data_stream", e.ViewDetailsReferrers = "view_details_referrers", e.ViewDetailsClips = "view_details_clips", e.ViewDetailsAchievements = "view_details_achievements", e.PlayVOD = "play_vod", e.ViewDetailsVOD = "view_details_vod", e.TopClipsClip = "topclips_clip"
            }(r || (r = {}));
            var o = function(e) {
                    a.p.tracking.track(i.SpadeEventType.StreamSummaryInteraction, {
                        action: e
                    })
                },
                s = function() {
                    return o(r.OpenStreamPicker)
                },
                c = function() {
                    return o(r.VisitPreviousStream)
                },
                l = function() {
                    return o(r.VisitNextStream)
                },
                d = function() {
                    return o(r.ExportDataStream)
                },
                u = function() {
                    return o(r.ViewDetailsReferrers)
                },
                m = function() {
                    return o(r.ViewDetailsClips)
                },
                p = function() {
                    return o(r.ViewDetailsAchievements)
                },
                h = function() {
                    return o(r.PlayVOD)
                },
                f = function() {
                    return o(r.ViewDetailsVOD)
                },
                g = function() {
                    return o(r.TopClipsClip)
                }
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
                a = n("/7QA"),
                i = n("mrSG"),
                o = n("G1cX"),
                s = n("CzFK"),
                c = 234,
                l = 310;

            function d(e) {
                if (0 === e.openedIDs.length) return 0;
                for (var t = 0, n = 0, r = e.openedIDs; n < r.length; n++) {
                    var a = r[n],
                        i = e.byID[a];
                    i.hidden || (t += i.collapsed ? c : l)
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

            function m(e, t) {
                var n = e.orderedIDs.filter(function(t) {
                    return !e.openedIDs.includes(t)
                });
                return n.length > 0 ? p(e, n[0], t) : e
            }

            function p(e, t, n) {
                var r = n - d(e),
                    a = i.__assign({}, e);
                return a.openedIDs.includes(t) || (r < l && (a = u(a)), a = o(a, function(e) {
                    return e.openedIDs
                }, function(e) {
                    return e.push(t), e
                })), a
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
                            var n = (a = i.__assign({}, e)).byID[t.data.threadID],
                                r = a.openedIDs.includes(t.data.threadID);
                            return n || (a = o(a, function(e) {
                                return e.orderedIDs
                            }, function(e) {
                                return e.push(t.data.threadID), e
                            }), a = o(a, function(e) {
                                return e.byID
                            }, function(e) {
                                return e[t.data.threadID] = t.data, e
                            })), a.openedIDs.includes(t.data.threadID) && !a.byID[t.data.threadID].hidden || (a.byID[t.data.threadID].hidden = t.data.hidden), t.data.ignoreCollapseIfOpen || t.data.collapsed || (a.focusedID = t.data.threadID), a = p(a, t.data.threadID, t.contentWidth), (!r || r && !t.data.ignoreCollapseIfOpen) && (t.data.collapsed || (a = h(a, t.data.threadID, t.contentWidth))), a;
                        case s.b:
                            if (!e.byID[t.threadID]) return e;
                            var a = o(e, function(e) {
                                return e.byID
                            }, function(e) {
                                return delete e[t.threadID], e
                            });
                            return a = o(a, function(e) {
                                return e.orderedIDs
                            }, function(e) {
                                return e.filter(function(e) {
                                    return e !== t.threadID
                                })
                            }), a = o(a, function(e) {
                                return e.openedIDs
                            }, function(e) {
                                return e.filter(function(e) {
                                    return e !== t.threadID
                                })
                            }), e.focusedID === t.threadID && (a.focusedID = a.openedIDs[0]), m(a, t.contentWidth);
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
                            var c = d(e);
                            if (c > t.contentWidth) {
                                if (e.openedIDs.length <= 1) return e;
                                for (var f = i.__assign({}, e); c > t.contentWidth && f.openedIDs.length > 1;) c = d(f = u(f));
                                return f
                            }
                            if (t.contentWidth - c >= l) {
                                var g = Math.floor((t.contentWidth - c) / l),
                                    v = Math.min(g, e.orderedIDs.length - e.openedIDs.length);
                                if (0 === v) return e;
                                f = i.__assign({}, e);
                                for (var b = 0; b < v; b++)
                                    if ((f = m(f, t.contentWidth)).openedIDs.length > 1)
                                        for (var k = f.openedIDs, y = k.length, S = 0, E = f.orderedIDs; S < E.length; S++) {
                                            var _ = E[S];
                                            if (k[y - 1] === _) {
                                                var C = k.splice(y - 2, 1);
                                                k.push(C[0]);
                                                break
                                            }
                                            if (k[y - 2] === _) break
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
                                return i.__assign(((n = {})[t.threadID] = [{
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
            var b = [];
            a.p.store.registerReducer("whispers", v);
            var k = n("/MKj"),
                y = n("XDQu"),
                S = n("l1Uh"),
                E = n("TSYQ"),
                _ = n("q1tI"),
                C = n("yR8l"),
                O = n("eDVu"),
                D = n("0Log"),
                N = n("geRD"),
                T = n("/aPz"),
                w = n("u5aL"),
                j = n("8/mp"),
                I = n("eJ65"),
                M = n("yLwq"),
                R = n("f00E"),
                A = n("kz7j"),
                F = n("GnwI"),
                x = n("H/lO"),
                U = n("NZDK"),
                P = n("oe5X"),
                L = n("0FG4"),
                W = n("cys1"),
                B = n("Ue10");

            function V(e, t) {
                return Object(W.f)(Object(P.a)(e, {
                    emotes: {
                        type: L.a.Position,
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e, t, n, r = this.props.user,
                            i = this.props.lastMessage ? V(this.props.lastMessage.content.content, this.props.lastMessage.content.emotes) : null,
                            o = this.props.unreadMessageCount,
                            s = Object(a.d)("Unknown", "ThreadListItem");
                        return r ? ((e = r.displayName || r.login) || (e = s), t = r.login, n = r.profileImageURL) : (e = s, t = s, n = null), _.createElement("div", {
                            onClick: this.handleThreadClick,
                            role: "listitem"
                        }, _.createElement(B.Eb, {
                            className: "whispers-list-item",
                            borderBottom: !0,
                            padding: 1,
                            display: B.X.Flex,
                            flexDirection: B.Aa.Row,
                            flexWrap: B.Ba.NoWrap,
                            fullWidth: !0,
                            alignItems: B.f.Center,
                            "data-a-target": "whisper-with-" + t
                        }, _.createElement(B.Xa, {
                            className: "whispers-list-item__avatar",
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, _.createElement(B.q, {
                            size: 30,
                            alt: Object(a.d)("{interlocutorName}'s Avatar", {
                                interlocutorName: e
                            }, "WhisperThreadListItem"),
                            src: n,
                            onLoad: this.props.avatarOnLoadCallback
                        })), _.createElement(B.Xa, {
                            fullWidth: !0,
                            display: B.X.Inline
                        }, _.createElement(B.W, {
                            fontSize: B.Ca.Size5,
                            bold: !0,
                            italic: e === s
                        }, e), _.createElement(B.Xa, {
                            className: "whispers-list-item__last-message",
                            ellipsis: !0
                        }, i)), _.createElement(B.Xa, {
                            className: "whispers-list-item__unread-count",
                            margin: {
                                right: 1
                            },
                            textAlign: B.Rb.Right
                        }, _.createElement(B.W, {
                            bold: !0
                        }, o > 0 && !this.props.muted ? o : null), this.props.muted && _.createElement(B.Xa, {
                            display: B.X.Flex,
                            alignItems: B.f.Center,
                            justifyContent: B.Wa.Center
                        }, _.createElement(B.sb, {
                            type: B.ub.Alt2,
                            asset: B.tb.WhisperMuted
                        }))), _.createElement("div", {
                            className: "whispers-list-item__archive"
                        }, _.createElement(B.A, {
                            ariaLabel: Object(a.d)("Archive Thread", "WhisperThreadListItem"),
                            tabIndex: -1,
                            icon: B.tb.Close,
                            "data-a-target": "whispers-list-item__archive-button",
                            onClick: this.handleArchiveClick,
                            "data-click-out-id": "whispers-list-item__archive-button"
                        }))))
                    }, t
                }(_.Component),
                G = n("PrJw"),
                X = n("N6NX"),
                H = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.markAllWhispersAsRead = function() {
                            var e = Object(N.a)({
                                markAllAsRead: !0
                            });
                            n.props.markAllWhispersAsRead && (Object(G.i)(), n.props.markAllWhispersAsRead(e)), n.props.onMarkAllMessagesRead && n.props.onMarkAllMessagesRead()
                        }, n.toggleDoNotDisturb = function() {
                            n.state.doNotDisturb ? (a.n.set("whisperDoNotDisturb", !1), Object(G.f)(), n.setState({
                                doNotDisturb: !1
                            })) : (a.n.set("whisperDoNotDisturb", !0), Object(G.g)(), n.setState({
                                doNotDisturb: !0
                            }))
                        }, n.state = {
                            doNotDisturb: a.n.get("whisperDoNotDisturb", !1)
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.doNotDisturb ? Object(a.d)("Disable Do Not Disturb", "ThreadsBoxSettings") : Object(a.d)("Enable Do Not Disturb", "ThreadsBoxSettings"),
                            t = Object(a.d)("Mark All Whispers as Read", "ThreadsBoxSettings");
                        return _.createElement(B.Xa, {
                            className: "threads-box-settings",
                            display: B.X.Flex,
                            flexDirection: B.Aa.Column,
                            margin: 1
                        }, _.createElement(B.Ua, {
                            ariaLabel: e,
                            onClick: this.toggleDoNotDisturb
                        }, _.createElement(B.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, e)), _.createElement(B.Ua, {
                            ariaLabel: t,
                            onClick: this.markAllWhispersAsRead
                        }, _.createElement(B.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, t)))
                    }, t = i.__decorate([Object(C.a)(X, {
                        name: "markAllWhispersAsRead"
                    })], t)
                }(_.Component);

            function q(e, t) {
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
                            var r = Object(a.d)("{username}'s avatar", {
                                    username: e.name
                                }, "ThreadsBox"),
                                i = e.profile_image || Object(M.c)(e.objectID, 30);
                            return _.createElement("div", {
                                key: "searchResult:" + e.objectID,
                                onClick: n.handleUserSearchResultClick(e, t)
                            }, _.createElement(B.Eb, {
                                className: "whispers-list-item",
                                borderBottom: !0,
                                padding: 1,
                                "data-a-target": "whisper-search-result-" + e.login,
                                display: B.X.Flex,
                                flexDirection: B.Aa.Row,
                                flexWrap: B.Ba.NoWrap,
                                fullWidth: !0,
                                alignItems: B.f.Center
                            }, _.createElement(B.Xa, {
                                margin: {
                                    right: .5
                                },
                                flexShrink: 0
                            }, _.createElement(B.q, {
                                size: 30,
                                src: i,
                                alt: r
                            })), _.createElement(B.Xa, {
                                fullWidth: !0,
                                display: B.X.Flex,
                                flexDirection: B.Aa.Column
                            }, _.createElement(B.W, {
                                fontSize: B.Ca.Size5,
                                bold: !0
                            }, e.login), _.createElement(B.Xa, null, " "))))
                        }, n.saveSettingsMenuRef = function(e) {
                            return n.settingsMenu = e
                        }, n.handleConversationsClick = function() {
                            n.state.open || (n.props.latencyTracking.resetCustomEvents(A.a.Whispers), n.whispersHistoryLatencyEvent = n.props.latencyTracking.registerCustomEvent({
                                benchmark: 200,
                                group: A.a.Whispers,
                                key: A.b.WhispersHistory,
                                label: A.c.History,
                                start: A.d.Registration
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
                            return i.__awaiter(n, void 0, void 0, function() {
                                var t, n = this;
                                return i.__generator(this, function(r) {
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
                                    var a = Object(K.a)(n.props.currentUserID, r);
                                    Object(G.e)({
                                        threadID: a,
                                        targetUserlogin: e.login,
                                        searchResultRank: t
                                    }), Object(G.b)({
                                        searchResultRank: t,
                                        searchQuery: n.state.searchText,
                                        isConversation: !1
                                    }), n.props.selectThread(a)
                                }
                            }
                        }, n.filterExistingThreads = function(e) {
                            var t = e.toLowerCase();
                            return n.props.orderedThreadIDs.filter(function(e) {
                                var r = q(n.props.threadsByID[e].participants, n.props.currentUserID);
                                return !(!r || !r.displayName) && r.displayName.toLowerCase().indexOf(t) >= 0
                            })
                        }, n.searchClient = new U.a({
                            appId: a.a.algoliaApplicationID,
                            apiKey: a.a.algoliaAPIKey,
                            apolloClient: a.p.apollo.client,
                            logger: a.k,
                            config: a.a,
                            stats: a.p.stats
                        }), n.state = {
                            open: !1,
                            searchText: "",
                            searching: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return _.createElement(w.a, {
                            onClickOut: this.handleClose
                        }, _.createElement(B.Qa, {
                            className: "whispers-threads-box__container " + (this.state.open ? "whispers-threads-box__container--open" : ""),
                            display: B.X.Flex,
                            flexDirection: B.Aa.Column,
                            flexWrap: B.Ba.NoWrap,
                            borderTop: !0,
                            borderRight: !0,
                            borderLeft: !0,
                            background: B.r.Base,
                            position: B.jb.Absolute,
                            attachBottom: !0,
                            attachRight: !0,
                            "data-click-out-id": "threads-box",
                            "data-a-target": "threads-box-" + (this.state.open ? "open" : "closed"),
                            borderRadius: {
                                topLeft: B.x.Medium,
                                topRight: B.x.Medium
                            }
                        }, _.createElement("div", {
                            "aria-labelledby": "whispers-box-header"
                        }, this.renderHeader(), this.renderList(), this.renderFooter())))
                    }, t.prototype.renderOpenCloseButton = function() {
                        var e = null;
                        if (this.props.unreadCount > 0) {
                            var t = this.props.unreadCount > 99 ? "99+" : this.props.unreadCount.toString();
                            e = _.createElement(B.Xa, {
                                className: "whispers-threads-box__unread",
                                margin: {
                                    y: .5
                                }
                            }, _.createElement("span", {
                                className: "whispers-threads-box__unread--count",
                                "data-a-target": "whisper-unreads"
                            }, t))
                        }
                        return _.createElement(B.Eb, {
                            className: "whispers-threads-box__open-close",
                            position: B.jb.Relative,
                            background: B.r.Alt,
                            display: B.X.Flex,
                            alignItems: B.f.Center,
                            justifyContent: B.Wa.Center
                        }, e, _.createElement(B.A, {
                            ariaLabel: Object(a.d)("Close Threads", "WhisperThreadsBox"),
                            icon: B.tb.Conversations,
                            onClick: this.handleConversationsClick,
                            "data-a-target": "whisper-box-button"
                        }))
                    }, t.prototype.renderList = function() {
                        var e, t = this;
                        if (!this.state.open) return null;
                        var n = null;
                        "" !== this.state.searchText && (n = _.createElement(B.Eb, {
                            key: "otherPeopleDivider",
                            borderBottom: !0,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(a.d)("Other People", "WhispersThreadBox")));
                        var r = null;
                        if (this.state.searching ? r = _.createElement(B.Xa, {
                                display: B.X.Flex,
                                flexDirection: B.Aa.Column,
                                margin: {
                                    top: 4
                                },
                                alignItems: B.f.Center
                            }, _.createElement(B.Za, {
                                delay: 0
                            })) : this.state.searchResults && this.state.searchResults.users && "" !== this.state.searchText && (r = this.state.searchResults.users.hits.filter(function(e) {
                                return !t.props.threadsByID[e.objectID]
                            }).map(this.renderUserSearchResult)), this.props.error) e = _.createElement(B.Xa, {
                            margin: {
                                x: "auto"
                            },
                            display: B.X.Flex,
                            justifyContent: B.Wa.Center,
                            alignItems: B.f.Center,
                            fullHeight: !0
                        }, _.createElement(B.W, {
                            color: B.O.Error
                        }, Object(a.d)("There was a problem loading whispers.", "WhisperThreadsBox")));
                        else if (this.props.loading) e = _.createElement(B.Za, null);
                        else {
                            var i = this.props.orderedThreadIDs;
                            "" !== this.state.searchText && (i = this.filterExistingThreads(this.state.searchText)), e = i.filter(function(e) {
                                return t.props.threadsByID[e] && !t.props.threadsByID[e].archived
                            }).map(function(e, n) {
                                var r = 0 === n ? function() {
                                        t.props.latencyTracking.reportCustomEvent(t.whispersHistoryLatencyEvent)
                                    } : void 0,
                                    a = t.props.threadsByID[e],
                                    i = q(a.participants, t.props.currentUserID);
                                return i ? _.createElement(z, {
                                    key: "whisperThread:" + a.id,
                                    user: i,
                                    threadID: a.id,
                                    lastMessage: a.lastMessage,
                                    archiveThread: t.props.archiveThread,
                                    selectThread: t.selectThread,
                                    unreadMessageCount: a.unreadMessagesCount,
                                    muted: a.muted,
                                    avatarOnLoadCallback: r
                                }) : null
                            })
                        }
                        return _.createElement(j.b, {
                            suppressScrollX: !0
                        }, _.createElement("div", {
                            role: "list"
                        }, e, n, r, _.createElement(j.a, {
                            enabled: this.state.open,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        })))
                    }, t.prototype.renderHeader = function() {
                        return this.state.open ? _.createElement(B.Eb, {
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
                        }, _.createElement(B.Pa, {
                            flexGrow: 1,
                            display: B.X.Flex
                        }, _.createElement("div", {
                            id: "whispers-box-header"
                        }, _.createElement(B.W, {
                            type: B.Vb.Span,
                            bold: !0
                        }, Object(a.d)("Whispers", "WhisperThreadsBox")))), _.createElement(I.a, {
                            ref: this.saveSettingsMenuRef
                        }, _.createElement(B.A, {
                            ariaLabel: Object(a.d)("Settings", "WhisperThreadsBox"),
                            icon: B.tb.Gear,
                            "data-a-target": "whisper-settings-button"
                        }), _.createElement(B.u, {
                            size: B.w.Small,
                            direction: B.v.BottomRight,
                            offsetX: "0.5rem"
                        }, _.createElement(H, {
                            onMarkAllMessagesRead: this.onMarkAllMessagesRead
                        }))), _.createElement(B.A, {
                            ariaLabel: Object(a.d)("Minimize", "WhisperThreadsBox"),
                            icon: B.tb.Minimize,
                            onClick: this.handleClose,
                            "data-a-target": "whisper-close-button"
                        })) : null
                    }, t.prototype.renderFooter = function() {
                        return this.state.open ? _.createElement(B.Eb, {
                            display: B.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            alignItems: B.f.Center,
                            borderTop: !0,
                            background: B.r.Alt
                        }, _.createElement(B.Xa, {
                            flexGrow: 1,
                            padding: {
                                top: .5,
                                bottom: .5,
                                left: 1
                            }
                        }, _.createElement(B.vb, {
                            onChange: this.onSearchInputChange,
                            value: this.state.searchText,
                            placeholder: Object(a.d)("Search for People", "WhisperThreadsBox"),
                            id: "threads-box-filter",
                            autoFocus: !0,
                            "data-a-target": "whisper-search-input"
                        })), this.renderOpenCloseButton()) : this.renderOpenCloseButton()
                    }, t.prototype.search = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e ? [4, this.searchClient.queryForType(x.a.Users, e, R.a())] : [2];
                                    case 1:
                                        return t = n.sent(), this.setState({
                                            searchResults: t,
                                            searching: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t = i.__decorate([Object(F.b)("WhisperCenter", {
                        autoReportInteractive: !0
                    })], t)
                }(_.Component)),
                Z = n("MJbm"),
                $ = n("aCAx"),
                J = n("kRBY"),
                ee = n("/HY+"),
                te = n("ZDlU"),
                ne = n("x7UT"),
                re = n("8Ad5"),
                ae = n("Mj6i"),
                ie = n("DMoW"),
                oe = n("okS7"),
                se = n("mmRu"),
                ce = n("cpJf"),
                le = n("2xye");
            ! function(e) {
                e.StrangerWarningConfirmationButton = "stranger-confirmation"
            }(Q || (Q = {}));
            var de = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        ! function(e) {
                            var t = {
                                target_user_id: e.targetUserID
                            };
                            a.o.track(le.SpadeEventType.WhisperStrangerWarningImpression, t)
                        }({
                            targetUserID: this.props.targetUserID
                        })
                    }, t.prototype.render = function() {
                        var e;
                        return e = this.props.targetDisplayName ? Object(a.d)("You have blocked whispers from strangers. By sending a whisper to {username}, you will allow them to whisper you for 48 hours. You can disable their access again in whisper settings.", {
                            username: this.props.targetDisplayName
                        }, "WhisperThread") : Object(a.d)("You have blocked whispers from strangers. By sending a whisper to this user, you will allow them to whisper you for 48 hours. You can disable their access again in whisper settings.", "WhisperThread"), _.createElement(B.Xa, {
                            attachBottom: !0,
                            padding: 1,
                            position: B.jb.Absolute
                        }, _.createElement(B.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, _.createElement(B.W, {
                            color: B.O.Alt2,
                            fontSize: B.Ca.Size6
                        }, e)), _.createElement(B.z, {
                            onClick: this.props.onStrangerWarningConfirmation,
                            "data-test-selector": Q.StrangerWarningConfirmationButton
                        }, Object(a.d)("Got it!", "WhisperThread")))
                    }, t
                }(_.Component),
                ue = n("NSwr"),
                me = n("BhFH"),
                pe = n("EvYO"),
                he = n("D7An"),
                fe = n("TvOw"),
                ge = n("m98o"),
                ve = n("as+V"),
                be = n("oJmH"),
                ke = n("iS14"),
                ye = n("lZZ2"),
                Se = n("0tEc"),
                Ee = n("/rr3"),
                _e = n("RQ6e"),
                Ce = n("Gu45"),
                Oe = n("dr/4"),
                De = "whispers-report-user-button",
                Ne = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderReportButton = function() {
                            var e = t.props.displayName || t.props.login,
                                n = Object(a.d)("Report {displayName}", {
                                    displayName: e
                                }, "ThreadSettings");
                            return _.createElement(B.Ua, {
                                "data-test-selector": De,
                                ariaLabel: n,
                                onClick: t.reportUser
                            }, _.createElement(B.Xa, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, n))
                        }, t.onChannelRedirect = function() {
                            t.props.collapseThread && t.props.collapseThread()
                        }, t.toggleMutethread = function() {
                            var e = !t.props.isMuted,
                                n = i.__assign({}, Object(N.a)({
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
                            e ? Object(G.j)(t.props.threadID) : Object(G.k)(t.props.threadID), t.props.setMuteThread(n)
                        }, t.onRevokeButtonClicked = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            e = i.__assign({}, Object(N.a)({
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
                                    contentType: ie.N.WHISPER_REPORT,
                                    targetUserID: t.props.userID,
                                    contentID: t.props.threadID
                                },
                                title: Object(a.d)("Report {displayName}", {
                                    displayName: e
                                }, "ReportUserModal")
                            })
                        }, t.onReportModalClose = function(e, n) {
                            e === _e.a.Success && n && t.props.onBlock && t.props.onBlock(t.props.threadID)
                        }, t.blockUser = function() {
                            t.props.showBlockModal({
                                context: ie.e.WHISPER,
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.displayName || this.props.login,
                            t = this.props.isMuted ? Object(a.d)("Turn Notifications On", "ThreadSettings") : Object(a.d)("Turn Notifications Off", "ThreadSettings"),
                            n = Object(a.d)("Go to {displayName}'s Channel", {
                                displayName: e
                            }, "ThreadSettings");
                        return _.createElement(B.Xa, {
                            display: B.X.Flex,
                            flexDirection: B.Aa.Column,
                            margin: 1
                        }, _.createElement(B.Ua, {
                            ariaLabel: t,
                            onClick: this.toggleMutethread
                        }, _.createElement(B.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, t)), _.createElement(B.Eb, {
                            borderBottom: !0,
                            margin: {
                                y: 1,
                                left: .5
                            }
                        }), _.createElement(Se.a, {
                            friendButtonUIType: Ee.a.WhisperSettings,
                            targetID: this.props.userID
                        }), this.renderRevokeButton(), this.renderBlockButton(), this.renderReportButton(), _.createElement(B.Ua, {
                            linkTo: "/" + this.props.login,
                            onClick: this.onChannelRedirect,
                            ariaLabel: n
                        }, _.createElement(B.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, n)))
                    }, t.prototype.renderRevokeButton = function() {
                        return this.props.hasTemporaryWhisperAccess ? _.createElement(B.Ua, {
                            onClick: this.onRevokeButtonClicked,
                            "data-test-selector": "whispers-revoke-access-button"
                        }, _.createElement(B.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(a.d)("Revoke Whisper Access", "ThreadSettings"))) : null
                    }, t.prototype.renderBlockButton = function() {
                        var e, t, n = this.props.displayName || this.props.login;
                        return this.isBlocked ? (e = Object(a.d)("Unblock {displayName}", {
                            displayName: n
                        }, "ThreadSettings"), t = this.unblockUser) : (e = Object(a.d)("Block {displayName}", {
                            displayName: n
                        }, "ThreadSettings"), t = this.blockUser), _.createElement(B.Ua, {
                            "data-test-selector": "whispers-block-user-button",
                            ariaLabel: e,
                            onClick: t
                        }, _.createElement(B.Xa, {
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
                }(_.Component);
            var Te = Object(be.compose)(Object(k.connect)(null, function(e) {
                    return {
                        onCloseThread: function(t) {
                            return e(Object(s.h)(t, Object(S.a)()))
                        }
                    }
                }), Object(C.a)(Ce, {
                    name: "revokeWhisperAccess"
                }), Object(C.a)(Oe, {
                    name: "setMuteThread"
                }), ye.a, Object(ke.a)())(Ne),
                we = n("pORx");
            var je = n("NKxy");
            var Ie, Me = n("vGFN"),
                Re = (n("hRS0"), "report-as-spam-button"),
                Ae = "mark-not-spam-button",
                Fe = "dismiss-prompt-button",
                xe = "spam-prompt-pending-target",
                Ue = "spam-prompt-reported-target",
                Pe = {
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
                                if ("pending" === n.state.potentialSpamResolution) return _.createElement(B.Xa, {
                                    "data-a-target": xe,
                                    className: "thread-header__potential-spam-prompt",
                                    attachRight: !0,
                                    attachLeft: !0,
                                    attachTop: !0
                                }, _.createElement(B.Eb, {
                                    background: B.r.Alt2,
                                    padding: .5,
                                    elevation: 2
                                }, _.createElement(B.Xa, {
                                    display: B.X.InlineBlock,
                                    margin: .5
                                }, _.createElement(B.W, {
                                    type: B.Vb.Span,
                                    fontSize: B.Ca.Size6,
                                    color: B.O.Alt2
                                }, Object(a.d)("It looks like this conversation triggered our spam detector. If it is spam, please report it!", "ThreadHeader"))), _.createElement(B.Xa, {
                                    display: B.X.InlineBlock,
                                    margin: .5
                                }, _.createElement(B.z, {
                                    "data-a-target": Re,
                                    type: B.F.Alert,
                                    onClick: n.reportSpam,
                                    size: B.D.Small
                                }, Object(a.d)("Report spam", "ThreadHeader"))), _.createElement(B.Xa, {
                                    display: B.X.InlineBlock,
                                    margin: .5
                                }, _.createElement(B.z, {
                                    "data-a-target": Ae,
                                    onClick: n.markNotSpam,
                                    size: B.D.Small
                                }, Object(a.d)("This is not spam", "ThreadHeader")))));
                                if ("reported" === n.state.potentialSpamResolution && n.interlocutor.displayName) return _.createElement(B.Xa, {
                                    "data-a-target": Ue,
                                    className: "thread-header__potential-spam-prompt",
                                    attachRight: !0,
                                    attachLeft: !0,
                                    attachTop: !0
                                }, _.createElement(B.Eb, {
                                    background: B.r.Alt2,
                                    padding: .5,
                                    elevation: 2
                                }, _.createElement(B.Xa, {
                                    display: B.X.InlineBlock,
                                    margin: .5
                                }, _.createElement(B.W, {
                                    type: B.Vb.Span,
                                    fontSize: B.Ca.Size6,
                                    color: B.O.Alt2
                                }, Object(a.d)("Thank you for helping us fight spam. We've blocked {user} from sending you further whispers. You can undo this from the Whisper Settings Menu.", {
                                    user: n.interlocutor.displayName
                                }, "ThreadHeader"))), _.createElement(B.Xa, {
                                    display: B.X.InlineBlock,
                                    margin: .5
                                }, _.createElement(B.z, {
                                    "data-a-target": Fe,
                                    type: B.F.Text,
                                    onClick: n.dismissSpamPrompt,
                                    size: B.D.Small
                                }, Object(a.d)("Dismiss", "ThreadHeader")))))
                            }
                            return null
                        }, n.reportSpam = function() {
                            n.props.reportUserMutation(n.interlocutor.id, fe.b.Spam, n.props.threadID), n.props.blockUserMutation(n.interlocutor.id, fe.a.Other, ie.e.WHISPER, n.props.currentUser), n.props.setThreadSpamStatusMutation(n.props.threadID, !0), Object(Me.l)(n.interlocutor.login, Me.a.SpamPropmt), n.setState({
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
                            t.stopPropagation(), n.props.interlocutor && n.props.interlocutorActivity ? Object(pe.b)({
                                context: e,
                                friendActivity: n.props.interlocutorActivity,
                                friendLogin: n.props.interlocutor.login
                            }) : a.k.warn("[ThreadHeader] Attempted to track presence click without required data.")
                        };
                        var r = a.p.experiments.getAssignment(he.b.ExtendedPresence);
                        return n.state = {
                            potentialSpamResolution: "pending",
                            hasExtendedRichPresence: "variant_a" === r,
                            isElementFocused: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.isHighlighted && !this.state.isElementFocused,
                            t = E({
                                "thread-header__title-bar-container": !0,
                                "thread-header__title-bar-container--highlighted": this.props.isHighlighted,
                                "thread-header__title-bar-container--focused": this.props.isFocused
                            }),
                            n = E({
                                "thread-header": !0,
                                "thread-header--collapsed": this.props.isCollapsed
                            }),
                            r = E({
                                "thread-header__display-name--highlighted": this.props.isHighlighted
                            }),
                            i = Object(a.d)("Close", "WhisperThreadHeader"),
                            o = Object(a.d)("Settings", "WhisperThreadHeader");
                        if (this.props.isLoading || !this.props.currentUser || !this.interlocutor) return _.createElement(B.Xa, {
                            className: t,
                            display: B.X.Flex,
                            justifyContent: B.Wa.Between,
                            fullWidth: !0,
                            alignItems: B.f.Center,
                            padding: {
                                y: .5,
                                x: 1
                            },
                            flexShrink: 0,
                            flexGrow: 0,
                            flexWrap: B.Ba.NoWrap
                        }, _.createElement(B.ib, {
                            height: 20,
                            width: 80
                        }), _.createElement(B.Xa, {
                            display: B.X.Flex
                        }, _.createElement(B.A, {
                            ariaLabel: i,
                            icon: B.tb.RemoveTag,
                            "data-a-target": "whispers-thread__close-button-" + this.props.threadID,
                            onClick: this.props.onClose
                        })));
                        var s = null,
                            c = null,
                            l = null,
                            d = null;
                        if (this.props.interlocutorActivity) {
                            var u = this.props.interlocutorAvailability,
                                m = this.props.interlocutorActivity;
                            if (c = _.createElement(B.Xa, {
                                    margin: {
                                        left: 1
                                    },
                                    display: B.X.Flex,
                                    alignItems: B.f.Center
                                }, _.createElement(B.kb, {
                                    status: function(e) {
                                        switch (e) {
                                            case ue.a.Online:
                                                return B.lb.Online;
                                            case ue.a.Away:
                                            case ue.a.Idle:
                                                return B.lb.Away;
                                            case ue.a.Busy:
                                                return B.lb.Busy;
                                            case ue.a.Offline:
                                            case ue.a.Invisible:
                                            default:
                                                return B.lb.Offline
                                        }
                                    }(u || ue.a.Offline)
                                })), m) {
                                var p = {
                                        activity: m,
                                        availability: this.state.hasExtendedRichPresence ? u : void 0
                                    },
                                    h = Object(ge.b)(p, !0),
                                    f = null,
                                    g = Object(ge.c)(this.interlocutor.login, m);
                                if (g && (f = {
                                        pathname: g,
                                        state: {
                                            content: le.PageviewContent.Presence,
                                            medium: le.PageviewMedium.Whispers
                                        }
                                    }), f) {
                                    var v = E({
                                        "thread-header__activity-link--highlighted": this.props.isHighlighted
                                    });
                                    l = _.createElement(B.U, {
                                        className: v,
                                        title: Object(ge.b)(p) || "",
                                        onClick: this.onPresenceClick.bind(this, pe.a.WhisperHeaderLink),
                                        to: f,
                                        "data-test-selector": "whispers-thread__presence-link"
                                    }, h)
                                } else l = h;
                                this.props.isCollapsed || (d = _.createElement(B.Xa, {
                                    padding: {
                                        right: .5
                                    }
                                }, _.createElement(ve.a, {
                                    availability: u || ue.a.Offline,
                                    link: f,
                                    onClick: this.onPresenceClick.bind(this, pe.a.WhisperHeaderButton),
                                    shouldHollowOverlay: this.props.isHighlighted
                                })))
                            }
                        }
                        this.props.isCollapsed || !this.props.currentUser || this.props.interactionsDisabled || (s = _.createElement(I.a, null, _.createElement(B.A, {
                            ariaLabel: o,
                            icon: B.tb.Gear,
                            overlay: e
                        }), _.createElement(B.u, {
                            direction: B.v.BottomRight,
                            offsetX: "0.5rem",
                            size: B.w.Small
                        }, _.createElement(Te, {
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
                            hasTemporaryWhisperAccess: !!this.interlocutor.self && this.interlocutor.self.whisperPermissions.receive === ie.Da.TEMPORARY
                        }))));
                        var b = this.interlocutor.displayBadges.map(function(e) {
                            return _.createElement(B.Pa, {
                                key: e.id,
                                flexShrink: 0,
                                margin: {
                                    right: .5
                                }
                            }, _.createElement("img", {
                                alt: e.title,
                                title: e.title,
                                className: "thread-header__badge",
                                src: e.imageURL
                            }))
                        });
                        return _.createElement(B.Xa, {
                            className: n,
                            position: B.jb.Relative,
                            fullWidth: !0
                        }, _.createElement("div", {
                            className: "thread-header__click-area",
                            onClick: this.props.onHeaderInteract,
                            onKeyPress: this.onHeaderActivate,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur,
                            "data-a-target": "thread-header__click-area",
                            tabIndex: 0
                        }, _.createElement(B.Xa, {
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
                        }, _.createElement(B.Xa, {
                            display: B.X.Flex,
                            flexDirection: B.Aa.Column,
                            flexGrow: 1,
                            fullHeight: !0,
                            overflow: B.cb.Hidden
                        }, _.createElement(B.Xa, {
                            display: B.X.Flex,
                            flexGrow: 1,
                            alignItems: B.f.Center,
                            flexWrap: B.Ba.NoWrap,
                            padding: {
                                right: 1
                            },
                            ellipsis: !0
                        }, b, _.createElement(B.W, {
                            className: r,
                            type: B.Vb.Span,
                            bold: !0,
                            ellipsis: !0
                        }, this.interlocutor.displayName ? this.interlocutor.displayName : Pe.displayName), c), _.createElement(B.Eb, {
                            className: "thread-header__activity",
                            color: this.props.isHighlighted ? B.O.Overlay : B.O.Base,
                            padding: {
                                right: 1
                            },
                            ellipsis: !0
                        }, l)), _.createElement(B.Xa, {
                            display: B.X.Flex,
                            flexShrink: 0,
                            flexDirection: B.Aa.Row,
                            alignItems: B.f.Center
                        }, d, _.createElement("div", {
                            onClick: this.onSettingsClick
                        }, s), _.createElement(B.A, {
                            ariaLabel: i,
                            icon: B.tb.RemoveTag,
                            "data-a-target": "thread-close-button-" + (this.interlocutor && this.interlocutor.login),
                            "data-test-selector": "thread-header__close-button-" + this.props.threadID,
                            onClick: this.props.onClose,
                            overlay: e
                        })))), this.renderPotentialSpamPrompt())
                    }, Object.defineProperty(t.prototype, "interlocutor", {
                        get: function() {
                            return this.props.interlocutor || Pe
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(_.Component),
                We = Object(r.compose)(Object(me.a)(), function() {
                    var e = this;
                    return Object(C.a)(we, {
                        props: function(t) {
                            return {
                                reportUserMutation: function(n, r, o) {
                                    return i.__awaiter(e, void 0, void 0, function() {
                                        var e;
                                        return i.__generator(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    if (!t.mutate) return [3, 4];
                                                    i.label = 1;
                                                case 1:
                                                    return i.trys.push([1, 3, , 4]), [4, t.mutate({
                                                        variables: {
                                                            input: {
                                                                targetUserID: n,
                                                                reason: r,
                                                                threadID: o
                                                            }
                                                        }
                                                    })];
                                                case 2:
                                                    return i.sent(), [3, 4];
                                                case 3:
                                                    return e = i.sent(), a.k.error(e, "Unable to report user"), [3, 4];
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
                    return Object(C.a)(je, {
                        props: function(t) {
                            return {
                                setThreadSpamStatusMutation: function(n, r) {
                                    return i.__awaiter(e, void 0, void 0, function() {
                                        var e;
                                        return i.__generator(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    if (!t.mutate) return [3, 4];
                                                    i.label = 1;
                                                case 1:
                                                    return i.trys.push([1, 3, , 4]), [4, t.mutate({
                                                        variables: {
                                                            input: {
                                                                threadID: n,
                                                                isSpam: r
                                                            }
                                                        }
                                                    })];
                                                case 2:
                                                    return i.sent(), [3, 4];
                                                case 3:
                                                    return e = i.sent(), a.k.error(e, "Unable to modify threads spam status user"), [3, 4];
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
                Be = n("HAa/");
            ! function(e) {
                e[e.Timestamp = 0] = "Timestamp", e[e.Whisper = 1] = "Whisper", e[e.Warning = 2] = "Warning", e[e.InactiveUserNotice = 3] = "InactiveUserNotice", e[e.NewMessages = 4] = "NewMessages", e[e.Notification = 5] = "Notification"
            }(Ie || (Ie = {}));
            n("0JUI");
            var Ve = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.message;
                        switch (e.type) {
                            case Ie.Timestamp:
                                return _.createElement(B.Eb, {
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
                                        s = i.__assign({}, o, {
                                            year: "numeric",
                                            month: "numeric",
                                            day: "numeric"
                                        });
                                    r = e.timestamp.toDateString() === t.toDateString() ? Object(a.d)("Today, {timestamp, time, medium}", {
                                        timestamp: e.timestamp
                                    }, "ThreadMessage") : e.timestamp < n ? Object(a.j)(e.timestamp, s) : Object(a.j)(e.timestamp, i.__assign({}, o, {
                                        weekday: "long"
                                    }));
                                    var c = Object(a.j)(e.timestamp, i.__assign({}, s, {
                                        timeZoneName: "short"
                                    }));
                                    return _.createElement(B.Xa, {
                                        padding: {
                                            y: 1
                                        },
                                        textAlign: B.Rb.Center
                                    }, _.createElement("span", {
                                        title: c
                                    }, "" + r))
                                }(e));
                            case Ie.Warning:
                                return _.createElement(B.Eb, {
                                    className: "thread-message__warning",
                                    color: B.O.Alt2
                                }, _.createElement(B.Xa, {
                                    padding: {
                                        y: .5,
                                        x: 1
                                    }
                                }, Object(a.d)("Please don't share passwords or personal information.", "whispers")));
                            case Ie.InactiveUserNotice:
                                return _.createElement(B.Eb, {
                                    className: "thread-message__inactive-user",
                                    color: B.O.Alt2
                                }, _.createElement(B.Xa, {
                                    padding: {
                                        y: .5,
                                        x: 1
                                    }
                                }, Object(a.d)("This account is no longer active.", "whispers")));
                            case Ie.Whisper:
                                return this.props.reportOutgoingWhisperRendered && this.props.reportOutgoingWhisperRendered(e.content), _.createElement(B.Xa, {
                                    className: "thread-message__message",
                                    "data-a-target": "whisper-message"
                                }, function(e) {
                                    if (e.deletedAt) return null;
                                    var t = "/me " === e.content.substr(0, 4);
                                    t && (e.content = e.content.substr(4), e.emotes = e.emotes.map(function(e) {
                                        return i.__assign({}, e, {
                                            from: e.from - 4,
                                            to: e.to - 4
                                        })
                                    }));
                                    var n = [_.createElement("span", {
                                        key: "str-separator"
                                    }, t ? " " : ": ")];
                                    if (n.push.apply(n, V(e.content, e.emotes)), e.editedAt) {
                                        var r = Object(a.d)("edited", "ThreadMessage"),
                                            o = Object(a.d)("{timestamp, date, full} {timestamp, time, long}", {
                                                timestamp: new Date(e.editedAt)
                                            }, "ThreadMessage");
                                        n.push(_.createElement(B.Pa, {
                                            key: "editedAt",
                                            margin: {
                                                left: 1
                                            }
                                        }, _.createElement(B.W, {
                                            type: B.Vb.Span,
                                            className: "thread-message__message--edited",
                                            title: o,
                                            color: B.O.Alt2
                                        }, "(" + r + ")")))
                                    }
                                    var s = e.from && e.from.chatColor || "",
                                        c = e.from && e.from.displayName || _.createElement(B.W, {
                                            type: B.Vb.Span,
                                            italic: !0
                                        }, Object(a.d)("Unknown", "ThreadMessage")),
                                        l = t ? s : "";
                                    return _.createElement(B.Xa, {
                                        padding: {
                                            x: 1,
                                            y: .5
                                        }
                                    }, _.createElement("span", {
                                        className: "thread-message__message--user-name",
                                        "data-a-target": "whisper-message-name",
                                        style: {
                                            color: s
                                        }
                                    }, c), _.createElement("span", {
                                        style: {
                                            color: l
                                        }
                                    }, n))
                                }(e));
                            case Ie.NewMessages:
                                return _.createElement(B.Eb, {
                                    className: "thread-message__new-messages",
                                    color: B.O.OverlayAlt,
                                    fontSize: B.Ca.Size7
                                }, _.createElement(B.Xa, {
                                    textAlign: B.Rb.Center,
                                    padding: {
                                        y: .5
                                    }
                                }, Object(a.d)("New Whispers", "whispers")));
                            case Ie.Notification:
                                return _.createElement(B.Xa, {
                                    className: "thread-message__notification"
                                }, function(e) {
                                    return _.createElement(B.Xa, {
                                        padding: {
                                            y: .5,
                                            x: 1
                                        }
                                    }, _.createElement(B.W, {
                                        type: B.Vb.Span,
                                        color: B.O.Alt2
                                    }, e.content))
                                }(e));
                            default:
                                return null
                        }
                    }, t
                }(_.Component),
                ze = function(e) {
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
                                return _.createElement(Ve, {
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
                                    type: Ie.Whisper,
                                    content: e.node.content.content,
                                    from: e.node.from && t.props.participantsByID[+e.node.from.id],
                                    emotes: e.node.content.emotes,
                                    id: e.node.id,
                                    nonce: e.node.nonce,
                                    sentAt: new Date(e.node.sentAt),
                                    editedAt: e.node.editedAt,
                                    deletedAt: e.node.deletedAt
                                }
                            }).reduce(function(n, r, a, i) {
                                if (t.notificationsFor(r.id).forEach(function(e) {
                                        n.push(e)
                                    }), n.push(r), 0 == --e && n.push(t.createNewMessagesIndicator()), a < i.length - 1) {
                                    var o = i[a + 1];
                                    !r.deletedAt && t.shouldAddTimestamp(r, o) && n.push(t.createTimestampMessage(r))
                                }
                                return a !== i.length - 1 || r.deletedAt || n.push(t.createTimestampMessage(r)), n
                            }, []).reverse()), t.props.hasUnknownParticipant && n.push(t.createInactiveUserMessage()), n
                        }, t.shouldAddTimestamp = function(e, t) {
                            return e.sentAt.valueOf() - t.sentAt.valueOf() > 6e5 || e.sentAt.toDateString() !== t.sentAt.toDateString()
                        }, t.createTimestampMessage = function(e) {
                            return {
                                type: Ie.Timestamp,
                                timestamp: new Date(e.sentAt)
                            }
                        }, t.notificationsFor = function(e) {
                            return t.props.notifications.filter(function(t) {
                                return t.afterMessageID === e
                            }).map(t.createNotificationLine)
                        }, t.createNotificationLine = function(e) {
                            return {
                                type: Ie.Notification,
                                content: e.content
                            }
                        }, t.createNewMessagesIndicator = function() {
                            return {
                                type: Ie.NewMessages
                            }
                        }, t.createWarningMessage = function() {
                            return {
                                type: Ie.Warning
                            }
                        }, t.createInactiveUserMessage = function() {
                            return {
                                type: Ie.InactiveUserNotice
                            }
                        }, t.saveScrollRef = function(e) {
                            return t.scroll = e
                        }, t.scrollToBottom = function() {
                            t.scroll.scrollToBottom()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        return _.createElement(B.Xa, {
                            fullHeight: !0
                        }, _.createElement(j.b, {
                            scrollRef: this.saveScrollRef,
                            suppressScrollX: !0
                        }, _.createElement(B.Xa, null, _.createElement(j.a, {
                            enabled: !this.state.disableInfiniteTrigger,
                            loadMore: this.loadMore,
                            pixelThreshold: 200,
                            orientation: Be.b.Down,
                            contentLength: e.length
                        }), this.renderMessages(e))))
                    }, t.prototype.generateMessageKey = function(e, t) {
                        switch (e.type) {
                            case Ie.NewMessages:
                            case Ie.Warning:
                            case Ie.InactiveUserNotice:
                                return "" + e.type;
                            case Ie.Timestamp:
                                return e.type + "-" + e.timestamp.getTime();
                            case Ie.Whisper:
                                return e.type + "-" + e.id;
                            case Ie.Notification:
                                return e.type + "-" + t;
                            default:
                                return a.k.warn("[ThreadMessages] Encountered an unknown message type."), t
                        }
                    }, t
                }(_.Component);
            var Ge = Object(k.connect)(function(e, t) {
                    return {
                        notifications: function(e, t) {
                            return e.whispers.notifications.byThreadID[t] || b
                        }(e, t.thread.id)
                    }
                })(ze),
                Xe = n("Wcon"),
                He = {};

            function qe(e, t) {
                var n = He[e.threadID];
                if (n) {
                    if (n.lastReadCursorID >= t) return;
                    clearTimeout(n.timeoutHandle)
                }
                var r = setTimeout(function() {
                    var t = i.__assign({
                        mutation: Xe
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
                    a.p.apollo.client.mutate(t), delete He[e.threadID]
                }, 250);
                He[e.threadID] = {
                    timeoutHandle: r,
                    lastReadCursorID: t
                }
            }
            var Qe = n("TOso");

            function Ke(e) {
                return e.type === D.PubsubMessageType.WhisperSent
            }

            function Ye(e) {
                return e.type === D.PubsubMessageType.WhisperReceived
            }
            n("28vT");
            var Ze, $e, Je = n("Jpf8"),
                et = n("4VGW");
            ($e || ($e = {})).Wrapper = "thread__wrapper";
            var tt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            strangerWarningDismissed: !1
                        }, t.hadError = !1, t.onEmoticonClick = function(e) {
                            var n = t.autocompleteInput.getValue();
                            n && n.length > 0 && !n.endsWith(" ") && (n += " "), n += e + " ", t.autocompleteInput.setValue(n)
                        }, t.onBlock = function(e) {
                            t.addNotification(Object(a.d)("User successfully blocked", "whispers")), t.props.onBlock && t.props.onBlock(e)
                        }, t.onUnblock = function() {
                            t.addNotification(Object(a.d)("User successfully unblocked", "whispers"))
                        }, t.loadMore = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
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
                            t.props.data.currentUser && Object(G.h)(t.props.threadID), t.props.onExpand(t.props.threadID)
                        }, t.onClickOut = function() {
                            t.props.focused && t.props.onUnfocus(t.props.threadID)
                        }, t.handleClose = function() {
                            t.props.data.currentUser && Object(G.c)(t.props.threadID), t.props.onClose(t.props.threadID)
                        }, t.collapse = function() {
                            t.props.data.currentUser && Object(G.d)(t.props.threadID), t.props.onCollapse(t.props.threadID)
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
                                t.props.latencyTracking.resetCustomEvents(A.a.Whispers), t.outgoingWhisperRenderedEvent = t.props.latencyTracking.registerCustomEvent({
                                    benchmark: 150,
                                    group: A.a.Whispers,
                                    key: A.b.WhispersRenderSent,
                                    label: A.c.RenderSent,
                                    start: A.d.Registration
                                }), t.outgoingWhisperMessage = e;
                                var n = Object(K.b)(t.props.threadID, t.props.currentUserID);
                                n ? (t.props.data.currentUser && t.interlocutor && Object(G.m)({
                                    threadID: t.props.threadID,
                                    targetUserLogin: t.interlocutor.login,
                                    inChannelChat: !1
                                }), Object(Qe.b)({
                                    currentUserID: t.props.currentUserID,
                                    emotes: t.props.emoteSetsData && t.props.emoteSetsData.emoteMap || {},
                                    message: e,
                                    recipientUserID: n
                                }).then(function(e) {
                                    if (e.data.sendWhisper.error) throw new Error(e.data.sendWhisper.error.code)
                                }).catch(function(e) {
                                    var n, r;
                                    switch (e.message) {
                                        case Qe.a.RestrictedRecipient:
                                            n = Object(a.d)("Your whisper was not delivered because the recipient's settings prevent them from receiving it.", "Thread");
                                            break;
                                        case Qe.a.BodyEmpty:
                                            n = Object(a.d)("Your whisper was not delivered because it was empty.", "Thread");
                                            break;
                                        case Qe.a.TargetBanned:
                                            n = Object(a.d)("Your whisper was not delivered because the recipient is suspended.", "Thread");
                                            break;
                                        default:
                                            n = Object(a.d)("Your whisper was not delivered.", "Thread")
                                    }
                                    t.props.data.whisperThread && t.props.data.whisperThread.messages.edges.length > 0 && (r = t.props.data.whisperThread.messages.edges[0].node.id), t.props.notifyWhisperThread(t.props.threadID, n, r)
                                })) : a.k.warn("Unable to parse whisper recipient ID.")
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
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.data.error && (this.hadError = !0), e.data.error || e.data.loading || !e.data.whisperThread || this.props.reportThreadData(e.threadID, e.data.whisperThread)
                    }, Object.defineProperty(t.prototype, "interlocutor", {
                        get: function() {
                            return this.otherParticipant()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        var e = E({
                            "whispers-thread": !0,
                            "whispers-thread--collapsed": this.props.collapsed,
                            "whispers-thread--focused": this.props.focused
                        });
                        if (this.props.hidden) return null;
                        var t, n = this.props.activityData.loading ? void 0 : this.props.activityData.user,
                            r = n && n.availability,
                            a = n && n.activity;
                        return t = !this.state.strangerWarningDismissed && this.interlocutor && this.interlocutor.id && this.interlocutor.self && this.interlocutor.self.whisperPermissions.receive === ie.Da.NOT_PERMITTED ? _.createElement(de, {
                            onStrangerWarningConfirmation: this.onStrangerWarningConfirmation,
                            targetDisplayName: this.interlocutor.displayName,
                            targetUserID: this.interlocutor.id
                        }) : this.renderMessageArea(), _.createElement(w.a, {
                            onClickOut: this.onClickOut
                        }, _.createElement(B.Eb, {
                            className: e,
                            display: B.X.Flex,
                            flexShrink: 0,
                            flexGrow: 0,
                            position: B.jb.Relative,
                            overflow: B.cb.Hidden,
                            background: B.r.Base,
                            margin: {
                                left: 1
                            },
                            alignItems: B.f.Center,
                            justifyContent: B.Wa.Center,
                            "data-test-selector": $e.Wrapper,
                            "data-a-target": "whisper-thread-" + (this.interlocutor && this.interlocutor.login) + (this.props.collapsed ? "-collapsed" : ""),
                            elevation: 3
                        }, t, _.createElement(B.Xa, {
                            position: B.jb.Absolute,
                            fullWidth: !0,
                            flexShrink: 0,
                            display: B.X.Flex,
                            alignItems: B.f.Center,
                            attachTop: !0,
                            attachLeft: !0
                        }, _.createElement(We, {
                            isHighlighted: !!(this.props.data.whisperThread && this.props.data.whisperThread.unreadMessagesCount > 0),
                            isFocused: !!this.props.focused,
                            isMuted: !!this.props.data.whisperThread && this.props.data.whisperThread.isMuted,
                            isCollapsed: this.props.collapsed,
                            isLoading: this.props.data.loading || this.props.activityData.loading,
                            interactionsDisabled: this.shouldDisableInteractions(),
                            currentUser: this.props.data.currentUser,
                            interlocutor: this.interlocutor,
                            interlocutorAvailability: r,
                            interlocutorActivity: a,
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
                        return [_.createElement(B.Xa, {
                            className: "whispers-thread__autocomplete-container",
                            position: B.jb.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            refDelegate: this.setContainerRef,
                            key: "whispers-input"
                        }, _.createElement(B.Xa, {
                            position: B.jb.Absolute,
                            fullWidth: !0,
                            padding: {
                                x: 1,
                                bottom: 1
                            },
                            attachBottom: !0,
                            attachLeft: !0
                        }, _.createElement(oe.b, {
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
                        }, _.createElement(oe.d, {
                            emotes: e
                        })), _.createElement(se.a, {
                            attachBottom: !0,
                            attachRight: !0,
                            inputRef: this.textInput,
                            emotePickerSource: ce.a.Whisper,
                            onClickEmote: this.onEmoticonClick,
                            padding: {
                                x: 1,
                                bottom: 1
                            },
                            position: B.jb.Absolute,
                            shouldCloseOnClickOut: !0
                        }))), _.createElement(B.Pa, {
                            fullWidth: !0,
                            attachLeft: !0,
                            key: "whispers-content"
                        }, _.createElement("div", {
                            className: "whispers-thread__content",
                            onClick: this.handleContentClick
                        }, this.renderContent()))]
                    }, t.prototype.renderContent = function() {
                        return this.hadError ? _.createElement(te.a, {
                            message: Object(a.d)("Sorry, something went wrong loading this conversation.", "WhisperThread")
                        }) : this.props.data.loading || this.props.activityData.loading || !this.props.data.whisperThread ? _.createElement(B.Xa, {
                            display: B.X.Flex,
                            justifyContent: B.Wa.Center,
                            alignItems: B.f.Center,
                            margin: 2,
                            fullHeight: !0,
                            flexGrow: 1
                        }, _.createElement(B.Za, null)) : _.createElement(Ge, {
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
                            var a = r[n];
                            a && (t[a.id] = a)
                        }
                        return t
                    }, t
                }(_.Component),
                nt = Object(r.compose)(Object(C.a)(et, {
                    options: function(e) {
                        return {
                            variables: {
                                targetUserID: Object(K.b)(e.threadID, e.currentUserID) || ""
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
                        return i.__assign({}, e, {
                            loadMore: function() {
                                var t = "";
                                return e.data.whisperThread && e.data.whisperThread.messages.edges.length > 0 && (t = e.data.whisperThread.messages.edges[e.data.whisperThread.messages.edges.length - 1].cursor), e.data.fetchMore({
                                    query: Je,
                                    variables: i.__assign({}, e.data.variables, {
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
                                        var r = i.__assign({}, n.whisperThread.messages, {
                                            edges: Object(N.c)(e.whisperThread.messages.edges, n.whisperThread.messages.edges)
                                        });
                                        return {
                                            whisperThread: i.__assign({}, n.whisperThread, {
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
                        return Object(T.L)(e.currentUserID)
                    },
                    mapMessageTypesToProps: (Ze = {}, Ze[D.PubsubMessageType.WhisperReceived] = "whisperReceived", Ze[D.PubsubMessageType.WhisperSent] = "whisperSent", Ze),
                    skipMessage: function(e, t) {
                        return !Ke(e) && !Ye(e) || e.data_object.thread_id !== t.threadID
                    }
                }]), Object(ae.a)(), Object(F.b)("WhispersThread", {
                    autoReportInteractive: !0
                }))(tt);
            var rt = Object(k.connect)(function(e) {
                    return {
                        isLoggedIn: Object(J.f)(e)
                    }
                }, function(e) {
                    return Object(r.bindActionCreators)({
                        notifyWhisperThread: g,
                        showReportUserModal: function(e) {
                            var t = i.__rest(e, []);
                            return Object($.d)(ee.a, t)
                        }
                    }, e)
                })(nt),
                at = (n("J45U"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.resizeAnimationHandle = null, t.renderThread = function(e) {
                            return e ? _.createElement(rt, {
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.openedThreads.map(function(t) {
                                return e.renderThread(t)
                            });
                        return _.createElement(B.Xa, {
                            className: "whispers-open-threads",
                            display: B.X.Flex,
                            flexDirection: B.Aa.RowReverse,
                            alignItems: B.f.End,
                            position: B.jb.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            refDelegate: S.b
                        }, t, _.createElement(Z.a, {
                            onResize: this.handleContentResize
                        }))
                    }, t
                }(_.Component));
            var it = Object(k.connect)(function(e) {
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
            })(at);

            function ot(e) {
                return Object.keys(e).reduce(function(t, n) {
                    var r = e[n];
                    return r.muted || r.archived ? t : t + r.unreadMessagesCount
                }, 0)
            }
            var st = n("U1yz"),
                ct = function(e) {
                    for (var t = {}, n = 0, r = e; n < r.length; n++) {
                        var a = r[n];
                        t[a.id] = i.__assign({}, lt(a))
                    }
                    return t
                },
                lt = function(e) {
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
                mt = n("WcC5"),
                pt = n("PRj+"),
                ht = (n("c/47"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.erroredLoadingMore = !1, n.logger = a.k.withCategory("whispers"), n.archiveThread = function(e) {
                            if (n.state.threadsByID[e]) {
                                var t = i.__assign({}, Object(N.a)({
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
                                n.props.archiveThread && (n.props.closeThread(e), n.props.data.currentUser && Object(G.a)(e), n.props.archiveThread(t))
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
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return i.__generator(this, function(t) {
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
                            n.state.threadsByID[e] || Object(N.e)(pt, {
                                cursor: null
                            }, function(e) {
                                return e.currentUser && e.currentUser.whisperThreads && e.currentUser.whisperThreads.edges.unshift({
                                    cursor: "0",
                                    node: i.__assign({}, t, {
                                        isArchived: !1
                                    }),
                                    __typename: "WhisperThreadEdge"
                                }), e
                            });
                            var a = i.__assign({}, n.state.threadsByID[e]);
                            t.messages && (a.messageHistory = t.messages.edges.map(function(e) {
                                return e.node
                            }).slice(0, -1)), !1 !== t.isMuted && !0 !== t.isMuted || (a.muted = t.isMuted);
                            var o = i.__assign({}, n.state.threadsByID, ((r = {})[e] = a, r));
                            n.setState({
                                threadsByID: o,
                                unreadCount: ot(o)
                            })
                        };
                        var r = n.props.data.currentUser && n.props.data.currentUser.whisperThreads && ct(n.props.data.currentUser.whisperThreads.edges.map(function(e) {
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
                    return i.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                        var n = this;
                        this.setState({
                            renderError: !0
                        }, function() {
                            a.p.stats.recordComponentError("Whispers"), n.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                                info: t
                            })
                        })
                    }, t.prototype.componentDidMount = function() {
                        a.p.integrations.notifications && a.p.integrations.notifications.onNotificationInteracted(this.onNotificationInteracted)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (e.data.error) this.setState({
                            error: !!e.data.error
                        });
                        else if (!e.data.loading && e.data.currentUser && e.data.currentUser.whisperThreads) {
                            var t = ct(e.data.currentUser.whisperThreads.edges.map(function(e) {
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
                        var e = E({
                            whispers: !0,
                            "whispers--theatre-mode": this.props.theatreModeEnabled,
                            "whispers--right-column-expanded": this.props.rightColumnExpanded
                        });
                        return _.createElement(B.Xa, {
                            className: e,
                            position: B.jb.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            margin: {
                                right: 1
                            }
                        }, _.createElement(it, {
                            currentUserID: this.props.data.currentUser.id,
                            reportThreadData: this.handleThreadDataReport,
                            archiveThread: this.archiveThread
                        }), _.createElement(Y, {
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
                    }, t = i.__decorate([Object(C.a)(pt, {
                        props: function(e) {
                            return i.__assign({}, e, {
                                loadMore: function() {
                                    return e.data.fetchMore({
                                        query: pt,
                                        variables: i.__assign({}, e.data.variables, {
                                            cursor: e.data.currentUser && e.data.currentUser.whisperThreads && e.data.currentUser.whisperThreads.edges.length > 0 ? e.data.currentUser.whisperThreads.edges[e.data.currentUser.whisperThreads.edges.length - 1].cursor : null
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            return n.currentUser ? e.currentUser && e.currentUser.whisperThreads ? n.currentUser.whisperThreads ? {
                                                currentUser: i.__assign({}, n.currentUser, {
                                                    whisperThreads: i.__assign({}, n.currentUser.whisperThreads, {
                                                        edges: Object(N.c)(e.currentUser.whisperThreads.edges, n.currentUser.whisperThreads.edges)
                                                    })
                                                })
                                            } : {
                                                currentUser: i.__assign({}, n.currentUser, {
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
                    }), Object(O.a)(function(e) {
                        return {
                            query: pt,
                            types: [D.PubsubMessageType.WhisperDeleted, D.PubsubMessageType.WhisperEdited, D.PubsubMessageType.WhisperSent, D.PubsubMessageType.WhisperAllThreadsUpdate, D.PubsubMessageType.WhisperReceived, D.PubsubMessageType.WhisperThreadUpdate],
                            variables: i.__assign({}, e.data.variables),
                            skip: !e.data.currentUser || void 0 === e.data.currentUser.id,
                            topic: Object(T.L)(e.data.currentUser && e.data.currentUser.id || ""),
                            mutator: function(t, n) {
                                if (!n.currentUser || !n.currentUser.whisperThreads) return n;
                                if (Ke(t) || Ye(t)) {
                                    if (Ye(t)) {
                                        var r = n.currentUser.whisperThreads.edges.find(function(e) {
                                            return e.node.id === t.data_object.thread_id
                                        });
                                        if (r) {
                                            var i = r.node.participants.find(function(e) {
                                                return !!e && e.id === "" + t.data_object.from_id
                                            });
                                            i && (Object(G.l)({
                                                targetUserLogin: i.login,
                                                threadID: t.data_object.thread_id
                                            }), a.p.integrations.notifications && a.p.integrations.notifications.send({
                                                body_md: "**" + i.displayName + "** " + t.data_object.body,
                                                thumbnail_url: i.profileImageURL,
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
                                        var i = a.n.get("whisperDoNotDisturb", !1),
                                            o = t.currentUser.whisperThreads.edges.find(function(t) {
                                                return t.node.id === e.data_object.thread_id
                                            });
                                        if (o) {
                                            var s = Object(dt.c)(e);
                                            o.node.messages.edges.unshift(s), Ye(e) && (e.data_object.thread_id !== n ? o.node.unreadMessagesCount += 1 : qe({
                                                threadID: e.data_object.thread_id,
                                                lastReadMessageID: e.data_object.message_id
                                            }, e.data_object.id), r({
                                                threadID: e.data_object.thread_id,
                                                collapsed: !0,
                                                hidden: i
                                            })), o.node.isArchived = !1;
                                            var c = t.currentUser.whisperThreads.edges.filter(function(t) {
                                                return t.node.id !== e.data_object.thread_id
                                            });
                                            c.unshift(o), t.currentUser.whisperThreads.edges = c
                                        } else r({
                                            threadID: e.data_object.thread_id,
                                            collapsed: !0,
                                            hidden: i
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
                                        var a = t.currentUser.whisperThreads.edges[r],
                                            i = a.node.messages.edges[0].cursor,
                                            o = parseInt(i, 10) - e.data_object.last_read;
                                        a.node.unreadMessagesCount = o >= 0 ? o : 0, a.node.isMuted = e.data_object.muted, !a.node.isArchived && e.data_object.archived && n(e.data_object.id), a.node.isArchived = e.data_object.archived
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
                                if (Ke(e)) {
                                    if (!t.currentUser || !t.currentUser.whisperThreads) return !1;
                                    var n = void 0;
                                    try {
                                        n = Object(st.a)(a.p.apollo.client.cache, e.data_object.thread_id, !0)
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
                }(_.Component));
            var ft = Object(k.connect)(function(e) {
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
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var r = n("L9xt");
            n.o(r, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return r.PageviewContent
            }), n.o(r, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return r.PageviewLocation
            }), n.o(r, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return r.PageviewMedium
            }), n.o(r, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return r.SpadeEventType
            }), n.o(r, "TwitchDataType") && n.d(t, "TwitchDataType", function() {
                return r.TwitchDataType
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
            var a = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("wsiY").definitions)), e.exports = r
        },
        "5NYc": function(e, t, n) {
            "use strict";
            var r, a;
            n.d(t, "b", function() {
                    return r
                }), n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.IT_BEGINS = "it_begins", e.PATH_TO_AFFILIATE = "path_to_affiliate", e.PATH_TO_PARTNER = "path_to_partner", e.VIP_BADGE = "vip_badge"
                }(r || (r = {})),
                function(e) {
                    e.AVERAGE_CCU = "average_ccu", e.DASHBOARD_VISITED = "dashboard_visited", e.FOLLOW_COUNT = "follow_count", e.GAME_COMMUNITY_TITLE_UPDATED = "game_community_title_updated", e.HAS_FIRST_STREAM = "has_first_stream", e.HOUR_COUNT = "hour_count", e.STREAM_TITLE_UPDATED = "stream_title_updated", e.UNIQUE_CHATTERS = "unique_chatters", e.UNIQUE_DAYS = "unique_days"
                }(a || (a = {}))
        },
        "5g1g": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("wUQP"),
                o = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.incremental && Object(i.c)(this.props.name) || Object(i.b)(this.props.name) ? this.props.children : null
                    }, t
                }(a.Component),
                s = o;
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            })
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return c
            });
            var r, a, i = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(i.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(i.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(i.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(i.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(i.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(i.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(i.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(i.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(i.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(i.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(i.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(i.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function c(e, t) {
                var n;
                switch (void 0 === t && (t = a.Humanized), t === a.ClockAuto && (t = e >= 3600 ? a.ClockHMS : a.ClockMS), t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        n = r.Hour;
                        break;
                    case a.ClockMS:
                        n = r.Minute
                }
                var c = 2;
                t === a.ClockHMS && (c = 3);
                var d = function(e, t) {
                        void 0 === t && (t = r.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === r.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === r.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === r.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === r.Day ? n : n.days <= 26 || t === r.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== a.Humanized && t !== a.HumanizedShort || d[e] || delete d[e], n < u.length - c && delete d[e]
                    }), t === a.Humanized) return function(e) {
                    return e.months ? o(r.Month, e.months) : e.weeks && e.days ? o(r.Week, e.weeks) + " " + o(r.Day, e.days) : e.weeks ? o(r.Week, e.weeks) : e.days && e.hours ? o(r.Day, e.days) + " " + o(r.Hour, e.hours) : e.days ? o(r.Day, e.days) : e.hours && e.minutes ? o(r.Hour, e.hours) + " " + o(r.Minute, e.minutes) : e.hours ? o(r.Hour, e.hours) : e.minutes && e.seconds ? o(r.Minute, e.minutes) + " " + o(r.Second, e.seconds) : e.minutes ? o(r.Minute, e.minutes) : o(r.Second, e.seconds || 0)
                }(d);
                if (t === a.HumanizedShort) return function(e) {
                    return e.months ? s(r.Month, e.months) : e.weeks && e.days ? "" + s(r.Week, e.weeks) + s(r.Day, e.days) : e.weeks ? s(r.Week, e.weeks) : e.days && e.hours ? "" + s(r.Day, e.days) + s(r.Hour, e.hours) : e.days ? s(r.Day, e.days) : e.hours && e.minutes ? "" + s(r.Hour, e.hours) + s(r.Minute, e.minutes) : e.hours ? s(r.Hour, e.hours) : e.minutes && e.seconds ? "" + s(r.Minute, e.minutes) + s(r.Second, e.seconds) : e.minutes ? s(r.Minute, e.minutes) : s(r.Second, e.seconds || 0)
                }(d);
                var m = ":",
                    p = !1;
                switch (i.p.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        m = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        p = !0
                }
                var h = d.seconds || 0,
                    f = d.minutes || 0,
                    g = d.hours || 0;
                switch (t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        var v = (p ? l(g, 2) : g) + m + l(f, 2);
                        return t === a.ClockHMS && (v += m + l(h, 2)), v;
                    case a.ClockMS:
                        return (p ? l(f, 2) : f) + m + l(h, 2)
                }
            }

            function l(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(r || (r = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(a || (a = {}))
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
        "6D3P": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("yR8l"),
                o = n("u2gS"),
                s = n("l0Eh"),
                c = n("yCxs"),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            channel: void 0,
                            streamSummaries: [],
                            interval: t.props.interval,
                            isLoading: !0
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.query()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.channel && e.data.channel.id) === (this.props.data.channel && this.props.data.channel.id) && Object(o.f)(e.interval, this.props.interval) || this.query()
                    }, t.prototype.render = function() {
                        return this.props.children(this.state)
                    }, t.prototype.query = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return (e = o.c.fromChannelData(this.props.data)) ? (this.setState({
                                            isLoading: !0,
                                            channel: e
                                        }), [4, Object(c.b)(e, this.props.interval)]) : [2];
                                    case 1:
                                        return t = n.sent(), this.setState({
                                            streamSummaries: t.streamSummaries,
                                            isLoading: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(a.Component),
                d = Object(i.a)(s, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.channelName
                            }
                        }
                    }
                })(l);
            n("ILsx");
            n.d(t, !1, function() {
                return l
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "b", function() {
                return c.a
            }), n.d(t, !1, function() {})
        },
        "6XEL": function(e, t, n) {
            "use strict";
            var r = {};

            function a(e) {
                return "/" + e + "/dashboard/achievements/"
            }

            function i(e) {
                return "/" + e.channelLogin + "/dashboard/achievements/" + e.id
            }
            n.d(r, "channelAchievements", function() {
                return a
            }), n.d(r, "achievement", function() {
                return i
            });
            var o, s = n("dG1e"),
                c = n("rSo7"),
                l = n("eAwD");

            function d(e, t, n) {
                return e.sort(function(e, r) {
                    for (var a = 0; a < t.length; a++) {
                        var i = t[a],
                            s = n[a] || o.Ascending,
                            c = u(i(e), i(r)) * s;
                        if (0 !== c) return c
                    }
                    return 0
                })
            }

            function u(e, t) {
                var n = null !== e && void 0 !== e,
                    r = null !== t && void 0 !== t;
                return n && r ? e > t ? 1 : e < t ? -1 : 0 : n ? -1 : r ? 1 : 0
            }! function(e) {
                e[e.Ascending = 1] = "Ascending", e[e.Descending = -1] = "Descending"
            }(o || (o = {})), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return s.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return c.a
            }), n.d(t, !1, function() {
                return l.a
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "d", function() {
                return d
            })
        },
        "6j5V": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("RcPG");

            function a(e) {
                return {
                    type: r.a.Text,
                    content: e
                }
            }
        },
        "7Lz0": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardNavBountyBoard_Notification"
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
                                        value: "bountyBoardSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasNotification"
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
                    end: 145
                }
            };
            n.loc.source = {
                body: "query DashboardNavBountyBoard_Notification ($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\nbountyBoardSettings {\nhasNotification\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "7SjK": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("TSYQ"),
                o = n("/7QA"),
                s = n("GnwI"),
                c = n("Ue10"),
                l = (n("GOKC"), a.createElement(c.Eb, {
                    alignItems: c.f.Center,
                    background: c.r.Overlay,
                    borderRadius: c.x.Small,
                    className: "emote-button__lock",
                    color: c.O.Overlay,
                    "data-test-selector": "emote-button-lock",
                    display: c.X.InlineFlex,
                    justifyContent: c.Wa.Center,
                    position: c.jb.Absolute,
                    zIndex: c.ic.Above
                }, a.createElement(c.sb, {
                    asset: c.tb.Lock,
                    height: 10,
                    width: 10
                }))),
                d = function(e) {
                    var t = i("emote-button__link", {
                            "emote-button__link--locked": !e.onClick
                        }),
                        n = e.emote,
                        r = n.displayName,
                        d = n.srcSet;
                    if (!d) return null;
                    var u = a.createElement("img", {
                        className: "emote-picker__image",
                        srcSet: d,
                        alt: r
                    });
                    if (e.isCriticalImage) {
                        for (var m = d.split(" ")[0], p = {}, h = 0, f = d.split(","); h < f.length; h++) {
                            var g = f[h].trim().split(" "),
                                v = g[1],
                                b = g[0];
                            p[v] = b
                        }
                        u = a.createElement(s.a, {
                            className: "emote-picker__emote-image",
                            src: m,
                            srcSet: p,
                            alt: r || ""
                        })
                    }
                    return a.createElement("div", {
                        className: "emote-button"
                    }, a.createElement(c.Yb, {
                        label: r || Object(o.d)("Emote", "EmoteButton"),
                        direction: c.ac.Bottom
                    }, a.createElement(c.Pa, {
                        display: c.X.Flex,
                        alignItems: c.f.Center,
                        justifyContent: c.Wa.Center
                    }, a.createElement("button", {
                        "data-test-selector": "emote-button-clickable",
                        className: t,
                        "aria-label": r,
                        name: r,
                        onClick: e.onClick ? e.onClick.bind(null, e.emote) : void 0,
                        "data-a-target": r
                    }, a.createElement("figure", null, e.locked ? l : null, u)))))
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
                                return a.createElement(c.Xa, {
                                    key: "emote-button-padder-" + t.id + "--" + t.setID,
                                    padding: {
                                        left: e.props.spaced ? .5 : 0
                                    }
                                }, a.createElement(d, {
                                    key: "emote-button-" + t.id + "--" + t.setID,
                                    emote: t,
                                    isCriticalImage: 0 === n,
                                    locked: e.props.locked || t.isLocked,
                                    onClick: e.props.locked ? void 0 : e.handleClickEmote
                                }))
                            });
                        return a.createElement(c.Xa, {
                            display: c.X.Flex,
                            flexWrap: c.Ba.Wrap,
                            justifyContent: c.Wa.Center
                        }, t)
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return u
            })
        },
        "8SJZ": function(e, t, n) {},
        "8dXP": function(e, t, n) {},
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
                return c
            });
            var r = n("mrSG"),
                a = n("yR8l"),
                i = n("8jSG"),
                o = n("cMjZ"),
                s = n("kSkr");

            function c() {
                var e = this;
                return Object(a.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, a, s, c) {
                                return r.__awaiter(e, void 0, void 0, function() {
                                    return r.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n,
                                                            sourceContext: s,
                                                            reason: a
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
                                                            id: Object(o.a)(c),
                                                            fragment: i
                                                        });
                                                        t && (t.blockedUsers.push({
                                                            id: n,
                                                            __typename: "User"
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(c),
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
        CFgy: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return i
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            }), n.d(t, "i", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "g", function() {
                return d
            }), n.d(t, "h", function() {
                return u
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "e", function() {
                return p
            });
            var r = n("NAv5"),
                a = n("rSo7");

            function i(e, t) {
                return Object(r.isEqual)(e.start, t.start) && Object(r.isEqual)(e.end, t.end)
            }

            function o(e, t) {
                return e.end.getTime() - e.start.getTime() == t.end.getTime() - t.start.getTime()
            }

            function s(e) {
                return Object(r.differenceInMinutes)(e.end, e.start)
            }

            function c(e) {
                return {
                    start_time: e.start.toJSON(),
                    end_time: e.end.toJSON()
                }
            }

            function l(e) {
                var t = Object(r.differenceInMinutes)(e.end, e.start);
                return Object(a.a)(t)
            }

            function d(e, t) {
                void 0 === t && (t = new Date);
                var n = Object(r.endOfDay)(t);
                return {
                    start: Object(r.subDays)(n, e),
                    end: n
                }
            }

            function u(e, t) {
                var n = (Object(r.differenceInDays)(e.end, e.start) + 1) * t;
                return {
                    start: Object(r.addDays)(e.start, n),
                    end: Object(r.addDays)(e.end, n)
                }
            }

            function m(e, t) {
                return t.start.getTime() < e.start.getTime()
            }

            function p(e) {
                return Object(r.isValid)(e.start) && Object(r.isValid)(e.end) && e.start.getTime() <= e.end.getTime()
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
        DZoA: function(e, t, n) {},
        DnOo: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("oJmH"),
                o = n("/7QA"),
                s = n("UUve"),
                c = n("GnwI"),
                l = n("br9A"),
                d = n("Ue10"),
                u = "subscribe-button__subscribe-tier-button",
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.openCheckout(), t.props.handleSubAction({
                                action: l.a.ClickCheckout,
                                checkoutButtonTier: t.props.tierPrice
                            })
                        }, t.openCheckout = function() {
                            t.props.isMobileCheckout || o.n.set(s.c, t.props.productName)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.props.isSubbedToTier) {
                            var e = Object(o.d)("Subscribed", "SubTierButton");
                            return a.createElement(d.z, {
                                ariaLabel: e,
                                "data-test-selector": u,
                                disabled: !0,
                                icon: d.tb.Star
                            }, e)
                        }
                        var t;
                        return t = this.props.isEsportChannel ? Object(o.d)("Get the All-Access Pass", "SubTierButton") : this.props.customSubscribeNowMessage ? this.props.customSubscribeNowMessage : Object(o.d)("Subscribe Now", "SubTierButton"), a.createElement(d.z, r.__assign({
                            ariaLabel: t + " " + this.props.tierPrice,
                            "data-test-selector": u,
                            linkTo: this.props.isMobileCheckout ? this.props.url : void 0,
                            onClick: this.handleClick,
                            purchase: this.props.tierPrice
                        }, Object(d.jc)(this.props), {
                            fullWidth: this.props.fullWidth
                        }), t)
                    }, t
                }(a.Component),
                p = Object(i.compose)(Object(c.b)("SubTierButton", {
                    autoReportInteractive: !0
                }))(m);
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return p
            })
        },
        Epr8: function(e, t, n) {},
        GIFg: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("3iFw"),
                o = n("Ue10"),
                s = (n("DZoA"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.withWhispersButton;
                        return a.createElement(a.Fragment, null, a.createElement(o.Xa, {
                            className: "dashboard-menu-container" + (e ? " dashboard-menu-container__with-whispers-button" : ""),
                            display: o.X.Flex,
                            flexDirection: o.Aa.Column,
                            position: o.jb.Fixed,
                            zIndex: o.ic.Above
                        }, this.props.children), e && a.createElement(i.Whispers, null))
                    }, t.defaultProps = {
                        withWhispersButton: !1
                    }, t
                }(a.Component));
            n.d(t, !1, function() {
                return "dashboard-menu-container__with-whispers-button"
            }), n.d(t, "a", function() {
                return s
            })
        },
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
                return l
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "d", function() {
                return m
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("OpME"),
                o = "twilight.emote_picker_history",
                s = 24,
                c = [{
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

            function l(e) {
                var t = a.m.get(o, {}),
                    n = t[e.id];
                n ? (n.uses++, n.lastUpdatedAt = Date.now()) : t[e.id] = {
                    emote: e,
                    lastUpdatedAt: Date.now(),
                    uses: 1
                }, a.m.set(o, t)
            }

            function d() {
                var e = a.m.get(o, {});
                if (!(Object.keys(e).length >= s)) {
                    for (var t = {}, n = 0; n < c.length; n++) {
                        var i = c[n];
                        e[i.id] || (t[i.id] = {
                            emote: i,
                            lastUpdatedAt: n,
                            uses: 0
                        })
                    }
                    var l = r.__assign({}, t, e);
                    a.m.set(o, l)
                }
            }

            function u(e) {
                var t = a.m.get(o, {}) || {},
                    n = [];
                return Object.keys(t).forEach(function(r) {
                    var a = t[r];
                    void 0 !== a && void 0 !== e[a.emote.token] && n.push(a)
                }), n.sort(function(e, t) {
                    return e.uses > t.uses ? -1 : t.uses > e.uses ? 1 : e.lastUpdatedAt > t.lastUpdatedAt ? -1 : t.lastUpdatedAt > e.lastUpdatedAt ? 1 : 0
                }), Object(i.b)(n.slice(0, 24).map(function(e) {
                    return e.emote
                }))
            }

            function m() {
                var e = a.m.get(o, {}) || {},
                    t = {};
                return Object.keys(e).forEach(function(n) {
                    void 0 !== e[n] && (t[e[n].emote.token] = {
                        count: e[n].uses
                    })
                }), t
            }
        },
        IFXb: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("8/mp"),
                o = n("Ue10"),
                s = (n("wPMx"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(i.b, null, a.createElement(o.Xa, {
                            className: "dashboard-centered-page",
                            margin: {
                                y: 4
                            },
                            padding: {
                                x: 4
                            },
                            position: o.jb.Relative
                        }, this.props.children))
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return s
            })
        },
        ILsx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return l
            });
            var r = n("NAv5"),
                a = n("CFgy"),
                i = n("nlSm");

            function o(e, t) {
                var n = [];
                return e.sessions.forEach(function(e) {
                    var r = l.fromPayload(e, t);
                    r.isCompleted && n.push(r)
                }), n
            }
            var s = ["google", "youtube", "facebook", "t.co", "reddit"];

            function c(e) {
                return s.find(function(t) {
                    return e.indexOf(t) >= 0
                }) || e
            }
            var l = function() {
                function e(e) {
                    this.interval = {
                        start: e.start,
                        end: e.end
                    }, this.now = new Date, this.id = e.start.getTime() + "-" + e.end.getTime(), this.isCompleted = this.getIsCompleted(), this.channel = e.channel, this.avgViewerCount = e.avgViewerCount, this.maxViewerCount = e.maxViewerCount, this.followersChange = e.followersChange, this.totalViewers = e.totalViewers, this.uniqueViewers = e.uniqueViewers, this.totalMinutesWatched = e.totalMinutesWatched, this.uniqueChatters = e.uniqueChatters, this.incomingRaids = e.incomingRaids, this.hostedRaidedPercentage = e.hostedRaidedPercentage, this.peakViewershipTime = e.peakViewershipTime, this.startChannelStatus = e.startChannelStatus, this.messagesTotal = e.messagesTotal, this.videoId = e.videoId, this.videoRecordedAt = e.videoRecordedAt, this.videoViews = e.videoViews, this.videoSmallThumbnail = e.videoSmallThumbnail, this.videoMediumThumbnail = e.videoMediumThumbnail, this.clipCreatesTotal = e.clipCreatesTotal, this.clipPlaysTotal = e.clipPlaysTotal, this.clipPlaysBreakdown = e.clipPlaysBreakdown, this.commercialCount = e.commercialCount, this.commercialDensity = e.commercialDensity, this.commercialLengthTotal = e.commercialLengthTotal, this.subscriptionsNew = e.subscriptionsNew, this.videoPlayExternalReferrers = e.videoPlayExternalReferrers, this.videoPlayInternalChannelsReferrers = e.videoPlayInternalChannelsReferrers, this.videoPlayInternalTwitchReferrers = e.videoPlayInternalTwitchReferrers, this.videoPlayAllReferrers = e.videoPlayAllReferrers, this.videoPlayGeographics = e.videoPlayGeographics, this.videoPlayPlatforms = e.videoPlayPlatforms
                }
                return e.fromPayload = function(t, n) {
                    var r = t.videos[0],
                        a = r && r._id,
                        o = r && new Date(r.recorded_at),
                        s = r && r.views,
                        l = r && r.thumbnails && r.thumbnails.small && r.thumbnails.small.length && r.thumbnails.small[0].url || "",
                        d = r && r.thumbnails && r.thumbnails.medium && r.thumbnails.medium.length && r.thumbnails.medium[0].url || "",
                        u = r && r.title || "",
                        m = {
                            twitch: 0,
                            reddit: 0,
                            facebook: 0,
                            twitter: 0,
                            other: 0
                        };
                    (t.stats.clip_plays_breakdown || []).forEach(function(e) {
                        return m[e.key] = Number(e.value)
                    });
                    var p = t.summary,
                        h = t.stats,
                        f = Object(i.b)((h.video_play_external_referrers || []).concat(h.video_play_internal_channels_referrers || [], h.video_play_internal_twitch_referrers || []));
                    return new e({
                        start: new Date(t.start_time),
                        end: new Date(t.end_time),
                        avgViewerCount: Number(p.concurrents_average),
                        maxViewerCount: Number(p.concurrents_max),
                        followersChange: Number(p.followers_change),
                        totalViewers: Number(p.video_play_total),
                        uniqueViewers: Number(p.video_play_unique),
                        totalMinutesWatched: Number(p.minutes_watched_total),
                        clipCreatesTotal: Number(p.clip_creates_total),
                        clipPlaysTotal: Number(p.clip_plays_total),
                        clipPlaysBreakdown: m,
                        commercialCount: Number(p.commercial_count),
                        commercialDensity: Number(p.commercial_density),
                        commercialLengthTotal: Number(p.commercial_length_total),
                        subscriptionsNew: Number(p.subscriptions_new),
                        uniqueChatters: Number(p.chatters_unique),
                        peakViewershipTime: new Date(p.concurrents_peak_time),
                        incomingRaids: Number(p.raids_incoming),
                        hostedRaidedPercentage: Number(p.hosted_raided_pct),
                        startChannelStatus: u,
                        messagesTotal: Number(p.messages_total),
                        videoId: a,
                        videoRecordedAt: o,
                        videoViews: s,
                        videoSmallThumbnail: l,
                        videoMediumThumbnail: d,
                        channel: n,
                        videoPlayExternalReferrers: Object(i.b)(h.video_play_external_referrers, c),
                        videoPlayInternalChannelsReferrers: Object(i.b)(h.video_play_internal_channels_referrers),
                        videoPlayInternalTwitchReferrers: Object(i.b)(h.video_play_internal_twitch_referrers),
                        videoPlayAllReferrers: f,
                        videoPlayGeographics: Object(i.b)(h.video_play_geographics),
                        videoPlayPlatforms: Object(i.b)(h.video_play_platforms)
                    })
                }, e.intervalFromID = function(e) {
                    var t = e.split("-"),
                        n = t[0],
                        r = t[1],
                        i = {
                            start: new Date(Number(n)),
                            end: new Date(Number(r))
                        };
                    if (Object(a.e)(i)) return i
                }, e.prototype.getIsCompleted = function() {
                    return this.interval.end < Object(r.subMinutes)(this.now, 15)
                }, e
            }()
        },
        J45U: function(e, t, n) {},
        JGCS: function(e, t, n) {},
        Jgup: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            });
            var r = n("/7QA");

            function a(e) {
                switch (e.toUpperCase()) {
                    case "A1":
                        return Object(r.d)("Anonymous Proxy", "format-country");
                    case "A2":
                        return Object(r.d)("Satellite Provider", "format-country");
                    case "AD":
                        return Object(r.d)("Andorra", "format-country");
                    case "AE":
                        return Object(r.d)("United Arab Emirates", "format-country");
                    case "AF":
                        return Object(r.d)("Afghanistan", "format-country");
                    case "AG":
                        return Object(r.d)("Antigua and Barbuda", "format-country");
                    case "AI":
                        return Object(r.d)("Anguilla", "format-country");
                    case "AL":
                        return Object(r.d)("Albania", "format-country");
                    case "AM":
                        return Object(r.d)("Armenia", "format-country");
                    case "AO":
                        return Object(r.d)("Angola", "format-country");
                    case "AP":
                        return Object(r.d)("Asia/Pacific Region", "format-country");
                    case "AQ":
                        return Object(r.d)("Antarctica", "format-country");
                    case "AR":
                        return Object(r.d)("Argentina", "format-country");
                    case "AS":
                        return Object(r.d)("American Samoa", "format-country");
                    case "AT":
                        return Object(r.d)("Austria", "format-country");
                    case "AU":
                        return Object(r.d)("Australia", "format-country");
                    case "AW":
                        return Object(r.d)("Aruba", "format-country");
                    case "AX":
                        return Object(r.d)("Aland Islands", "format-country");
                    case "AZ":
                        return Object(r.d)("Azerbaijan", "format-country");
                    case "BA":
                        return Object(r.d)("Bosnia and Herzegovina", "format-country");
                    case "BB":
                        return Object(r.d)("Barbados", "format-country");
                    case "BD":
                        return Object(r.d)("Bangladesh", "format-country");
                    case "BE":
                        return Object(r.d)("Belgium", "format-country");
                    case "BF":
                        return Object(r.d)("Burkina Faso", "format-country");
                    case "BG":
                        return Object(r.d)("Bulgaria", "format-country");
                    case "BH":
                        return Object(r.d)("Bahrain", "format-country");
                    case "BI":
                        return Object(r.d)("Burundi", "format-country");
                    case "BJ":
                        return Object(r.d)("Benin", "format-country");
                    case "BL":
                        return Object(r.d)("Saint Bartelemey", "format-country");
                    case "BM":
                        return Object(r.d)("Bermuda", "format-country");
                    case "BN":
                        return Object(r.d)("Brunei", "format-country");
                    case "BO":
                        return Object(r.d)("Bolivia", "format-country");
                    case "BQ":
                        return Object(r.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                    case "BR":
                        return Object(r.d)("Brazil", "format-country");
                    case "BS":
                        return Object(r.d)("Bahamas", "format-country");
                    case "BT":
                        return Object(r.d)("Bhutan", "format-country");
                    case "BV":
                        return Object(r.d)("Bouvet Island", "format-country");
                    case "BW":
                        return Object(r.d)("Botswana", "format-country");
                    case "BY":
                        return Object(r.d)("Belarus", "format-country");
                    case "BZ":
                        return Object(r.d)("Belize", "format-country");
                    case "CA":
                        return Object(r.d)("Canada", "format-country");
                    case "CC":
                        return Object(r.d)("Cocos (Keeling) Islands", "format-country");
                    case "CD":
                        return Object(r.d)("Congo, The Democratic Republic of the", "format-country");
                    case "CF":
                        return Object(r.d)("Central African Republic", "format-country");
                    case "CG":
                        return Object(r.d)("Congo", "format-country");
                    case "CH":
                        return Object(r.d)("Switzerland", "format-country");
                    case "CI":
                        return Object(r.d)("Ivory Coast", "format-country");
                    case "CK":
                        return Object(r.d)("Cook Islands", "format-country");
                    case "CL":
                        return Object(r.d)("Chile", "format-country");
                    case "CM":
                        return Object(r.d)("Cameroon", "format-country");
                    case "CN":
                        return Object(r.d)("China", "format-country");
                    case "CO":
                        return Object(r.d)("Colombia", "format-country");
                    case "CR":
                        return Object(r.d)("Costa Rica", "format-country");
                    case "CU":
                        return Object(r.d)("Cuba", "format-country");
                    case "CV":
                        return Object(r.d)("Cape Verde", "format-country");
                    case "CW":
                        return Object(r.d)("Curacao", "format-country");
                    case "CX":
                        return Object(r.d)("Christmas Island", "format-country");
                    case "CY":
                        return Object(r.d)("Cyprus", "format-country");
                    case "CZ":
                        return Object(r.d)("Czech Republic", "format-country");
                    case "DE":
                        return Object(r.d)("Germany", "format-country");
                    case "DJ":
                        return Object(r.d)("Djibouti", "format-country");
                    case "DK":
                        return Object(r.d)("Denmark", "format-country");
                    case "DM":
                        return Object(r.d)("Dominica", "format-country");
                    case "DO":
                        return Object(r.d)("Dominican Republic", "format-country");
                    case "DZ":
                        return Object(r.d)("Algeria", "format-country");
                    case "EC":
                        return Object(r.d)("Ecuador", "format-country");
                    case "EE":
                        return Object(r.d)("Estonia", "format-country");
                    case "EG":
                        return Object(r.d)("Egypt", "format-country");
                    case "EH":
                        return Object(r.d)("Western Sahara", "format-country");
                    case "ER":
                        return Object(r.d)("Eritrea", "format-country");
                    case "ES":
                        return Object(r.d)("Spain", "format-country");
                    case "ET":
                        return Object(r.d)("Ethiopia", "format-country");
                    case "EU":
                        return Object(r.d)("Europe", "format-country");
                    case "FI":
                        return Object(r.d)("Finland", "format-country");
                    case "FJ":
                        return Object(r.d)("Fiji", "format-country");
                    case "FK":
                        return Object(r.d)("Falkland Islands (Malvinas)", "format-country");
                    case "FM":
                        return Object(r.d)("Micronesia", "format-country");
                    case "FO":
                        return Object(r.d)("Faroe Islands", "format-country");
                    case "FR":
                        return Object(r.d)("France", "format-country");
                    case "GA":
                        return Object(r.d)("Gabon", "format-country");
                    case "GB":
                        return Object(r.d)("United Kingdom", "format-country");
                    case "GD":
                        return Object(r.d)("Grenada", "format-country");
                    case "GE":
                        return Object(r.d)("Georgia", "format-country");
                    case "GF":
                        return Object(r.d)("French Guiana", "format-country");
                    case "GG":
                        return Object(r.d)("Guernsey", "format-country");
                    case "GH":
                        return Object(r.d)("Ghana", "format-country");
                    case "GI":
                        return Object(r.d)("Gibraltar", "format-country");
                    case "GL":
                        return Object(r.d)("Greenland", "format-country");
                    case "GM":
                        return Object(r.d)("Gambia", "format-country");
                    case "GN":
                        return Object(r.d)("Guinea", "format-country");
                    case "GP":
                        return Object(r.d)("Guadeloupe", "format-country");
                    case "GQ":
                        return Object(r.d)("Equatorial Guinea", "format-country");
                    case "GR":
                        return Object(r.d)("Greece", "format-country");
                    case "GS":
                        return Object(r.d)("South Georgia and the South Sandwich Islands", "format-country");
                    case "GT":
                        return Object(r.d)("Guatemala", "format-country");
                    case "GU":
                        return Object(r.d)("Guam", "format-country");
                    case "GW":
                        return Object(r.d)("Guinea-Bissau", "format-country");
                    case "GY":
                        return Object(r.d)("Guyana", "format-country");
                    case "HK":
                        return Object(r.d)("Hong Kong", "format-country");
                    case "HM":
                        return Object(r.d)("Heard Island and McDonald Islands", "format-country");
                    case "HN":
                        return Object(r.d)("Honduras", "format-country");
                    case "HR":
                        return Object(r.d)("Croatia", "format-country");
                    case "HT":
                        return Object(r.d)("Haiti", "format-country");
                    case "HU":
                        return Object(r.d)("Hungary", "format-country");
                    case "ID":
                        return Object(r.d)("Indonesia", "format-country");
                    case "IE":
                        return Object(r.d)("Ireland", "format-country");
                    case "IL":
                        return Object(r.d)("Israel", "format-country");
                    case "IM":
                        return Object(r.d)("Isle of Man", "format-country");
                    case "IN":
                        return Object(r.d)("India", "format-country");
                    case "IO":
                        return Object(r.d)("British Indian Ocean Territory", "format-country");
                    case "IQ":
                        return Object(r.d)("Iraq", "format-country");
                    case "IR":
                        return Object(r.d)("Iran", "format-country");
                    case "IS":
                        return Object(r.d)("Iceland", "format-country");
                    case "IT":
                        return Object(r.d)("Italy", "format-country");
                    case "JE":
                        return Object(r.d)("Jersey", "format-country");
                    case "JM":
                        return Object(r.d)("Jamaica", "format-country");
                    case "JO":
                        return Object(r.d)("Jordan", "format-country");
                    case "JP":
                        return Object(r.d)("Japan", "format-country");
                    case "KE":
                        return Object(r.d)("Kenya", "format-country");
                    case "KG":
                        return Object(r.d)("Kyrgyzstan", "format-country");
                    case "KH":
                        return Object(r.d)("Cambodia", "format-country");
                    case "KI":
                        return Object(r.d)("Kiribati", "format-country");
                    case "KM":
                        return Object(r.d)("Comoros", "format-country");
                    case "KN":
                        return Object(r.d)("Saint Kitts and Nevis", "format-country");
                    case "KP":
                        return Object(r.d)("North Korea", "format-country");
                    case "KR":
                        return Object(r.d)("South Korea", "format-country");
                    case "KW":
                        return Object(r.d)("Kuwait", "format-country");
                    case "KY":
                        return Object(r.d)("Cayman Islands", "format-country");
                    case "KZ":
                        return Object(r.d)("Kazakhstan", "format-country");
                    case "LA":
                        return Object(r.d)("Laos", "format-country");
                    case "LB":
                        return Object(r.d)("Lebanon", "format-country");
                    case "LC":
                        return Object(r.d)("Saint Lucia", "format-country");
                    case "LI":
                        return Object(r.d)("Liechtenstein", "format-country");
                    case "LK":
                        return Object(r.d)("Sri Lanka", "format-country");
                    case "LR":
                        return Object(r.d)("Liberia", "format-country");
                    case "LS":
                        return Object(r.d)("Lesotho", "format-country");
                    case "LT":
                        return Object(r.d)("Lithuania", "format-country");
                    case "LU":
                        return Object(r.d)("Luxembourg", "format-country");
                    case "LV":
                        return Object(r.d)("Latvia", "format-country");
                    case "LY":
                        return Object(r.d)("Libya", "format-country");
                    case "MA":
                        return Object(r.d)("Morocco", "format-country");
                    case "MC":
                        return Object(r.d)("Monaco", "format-country");
                    case "MD":
                        return Object(r.d)("Moldova", "format-country");
                    case "ME":
                        return Object(r.d)("Montenegro", "format-country");
                    case "MF":
                        return Object(r.d)("Saint Martin", "format-country");
                    case "MG":
                        return Object(r.d)("Madagascar", "format-country");
                    case "MH":
                        return Object(r.d)("Marshall Islands", "format-country");
                    case "MK":
                        return Object(r.d)("Macedonia", "format-country");
                    case "ML":
                        return Object(r.d)("Mali", "format-country");
                    case "MM":
                        return Object(r.d)("Myanmar", "format-country");
                    case "MN":
                        return Object(r.d)("Mongolia", "format-country");
                    case "MO":
                        return Object(r.d)("Macao", "format-country");
                    case "MP":
                        return Object(r.d)("Northern Mariana Islands", "format-country");
                    case "MQ":
                        return Object(r.d)("Martinique", "format-country");
                    case "MR":
                        return Object(r.d)("Mauritania", "format-country");
                    case "MS":
                        return Object(r.d)("Montserrat", "format-country");
                    case "MT":
                        return Object(r.d)("Malta", "format-country");
                    case "MU":
                        return Object(r.d)("Mauritius", "format-country");
                    case "MV":
                        return Object(r.d)("Maldives", "format-country");
                    case "MW":
                        return Object(r.d)("Malawi", "format-country");
                    case "MX":
                        return Object(r.d)("Mexico", "format-country");
                    case "MY":
                        return Object(r.d)("Malaysia", "format-country");
                    case "MZ":
                        return Object(r.d)("Mozambique", "format-country");
                    case "NA":
                        return Object(r.d)("Namibia", "format-country");
                    case "NC":
                        return Object(r.d)("New Caledonia", "format-country");
                    case "NE":
                        return Object(r.d)("Niger", "format-country");
                    case "NF":
                        return Object(r.d)("Norfolk Island", "format-country");
                    case "NG":
                        return Object(r.d)("Nigeria", "format-country");
                    case "NI":
                        return Object(r.d)("Nicaragua", "format-country");
                    case "NL":
                        return Object(r.d)("Netherlands", "format-country");
                    case "NO":
                        return Object(r.d)("Norway", "format-country");
                    case "NP":
                        return Object(r.d)("Nepal", "format-country");
                    case "NR":
                        return Object(r.d)("Nauru", "format-country");
                    case "NU":
                        return Object(r.d)("Niue", "format-country");
                    case "NZ":
                        return Object(r.d)("New Zealand", "format-country");
                    case "O1":
                        return Object(r.d)("Other Country", "format-country");
                    case "OM":
                        return Object(r.d)("Oman", "format-country");
                    case "PA":
                        return Object(r.d)("Panama", "format-country");
                    case "PE":
                        return Object(r.d)("Peru", "format-country");
                    case "PF":
                        return Object(r.d)("French Polynesia", "format-country");
                    case "PG":
                        return Object(r.d)("Papua New Guinea", "format-country");
                    case "PH":
                        return Object(r.d)("Philippines", "format-country");
                    case "PK":
                        return Object(r.d)("Pakistan", "format-country");
                    case "PL":
                        return Object(r.d)("Poland", "format-country");
                    case "PM":
                        return Object(r.d)("Saint Pierre and Miquelon", "format-country");
                    case "PN":
                        return Object(r.d)("Pitcairn", "format-country");
                    case "PR":
                        return Object(r.d)("Puerto Rico", "format-country");
                    case "PS":
                        return Object(r.d)("Palestine", "format-country");
                    case "PT":
                        return Object(r.d)("Portugal", "format-country");
                    case "PW":
                        return Object(r.d)("Palau", "format-country");
                    case "PY":
                        return Object(r.d)("Paraguay", "format-country");
                    case "QA":
                        return Object(r.d)("Qatar", "format-country");
                    case "RE":
                        return Object(r.d)("Reunion", "format-country");
                    case "RO":
                        return Object(r.d)("Romania", "format-country");
                    case "RS":
                        return Object(r.d)("Serbia", "format-country");
                    case "RU":
                        return Object(r.d)("Russia", "format-country");
                    case "RW":
                        return Object(r.d)("Rwanda", "format-country");
                    case "SA":
                        return Object(r.d)("Saudi Arabia", "format-country");
                    case "SB":
                        return Object(r.d)("Solomon Islands", "format-country");
                    case "SC":
                        return Object(r.d)("Seychelles", "format-country");
                    case "SD":
                        return Object(r.d)("Sudan", "format-country");
                    case "SE":
                        return Object(r.d)("Sweden", "format-country");
                    case "SG":
                        return Object(r.d)("Singapore", "format-country");
                    case "SH":
                        return Object(r.d)("Saint Helena", "format-country");
                    case "SI":
                        return Object(r.d)("Slovenia", "format-country");
                    case "SJ":
                        return Object(r.d)("Svalbard and Jan Mayen", "format-country");
                    case "SK":
                        return Object(r.d)("Slovakia", "format-country");
                    case "SL":
                        return Object(r.d)("Sierra Leone", "format-country");
                    case "SM":
                        return Object(r.d)("San Marino", "format-country");
                    case "SN":
                        return Object(r.d)("Senegal", "format-country");
                    case "SO":
                        return Object(r.d)("Somalia", "format-country");
                    case "SR":
                        return Object(r.d)("Suriname", "format-country");
                    case "SS":
                        return Object(r.d)("South Sudan", "format-country");
                    case "ST":
                        return Object(r.d)("Sao Tome and Principe", "format-country");
                    case "SV":
                        return Object(r.d)("El Salvador", "format-country");
                    case "SX":
                        return Object(r.d)("Sint Maarten", "format-country");
                    case "SY":
                        return Object(r.d)("Syria", "format-country");
                    case "SZ":
                        return Object(r.d)("Swaziland", "format-country");
                    case "TC":
                        return Object(r.d)("Turks and Caicos Islands", "format-country");
                    case "TD":
                        return Object(r.d)("Chad", "format-country");
                    case "TF":
                        return Object(r.d)("French Southern Territories", "format-country");
                    case "TG":
                        return Object(r.d)("Togo", "format-country");
                    case "TH":
                        return Object(r.d)("Thailand", "format-country");
                    case "TJ":
                        return Object(r.d)("Tajikistan", "format-country");
                    case "TK":
                        return Object(r.d)("Tokelau", "format-country");
                    case "TL":
                        return Object(r.d)("East Timor", "format-country");
                    case "TM":
                        return Object(r.d)("Turkmenistan", "format-country");
                    case "TN":
                        return Object(r.d)("Tunisia", "format-country");
                    case "TO":
                        return Object(r.d)("Tonga", "format-country");
                    case "TR":
                        return Object(r.d)("Turkey", "format-country");
                    case "TT":
                        return Object(r.d)("Trinidad and Tobago", "format-country");
                    case "TV":
                        return Object(r.d)("Tuvalu", "format-country");
                    case "TW":
                        return Object(r.d)("Taiwan", "format-country");
                    case "TZ":
                        return Object(r.d)("Tanzania", "format-country");
                    case "UA":
                        return Object(r.d)("Ukraine", "format-country");
                    case "UG":
                        return Object(r.d)("Uganda", "format-country");
                    case "UM":
                        return Object(r.d)("United States Minor Outlying Islands", "format-country");
                    case "US":
                        return Object(r.d)("United States", "format-country");
                    case "UY":
                        return Object(r.d)("Uruguay", "format-country");
                    case "UZ":
                        return Object(r.d)("Uzbekistan", "format-country");
                    case "VA":
                        return Object(r.d)("Vatican City", "format-country");
                    case "VC":
                        return Object(r.d)("Saint Vincent and the Grenadines", "format-country");
                    case "VE":
                        return Object(r.d)("Venezuela", "format-country");
                    case "VG":
                        return Object(r.d)("British Virgin Islands", "format-country");
                    case "VI":
                        return Object(r.d)("U.S. Virgin Islands", "format-country");
                    case "VN":
                        return Object(r.d)("Vietnam", "format-country");
                    case "VU":
                        return Object(r.d)("Vanuatu", "format-country");
                    case "WF":
                        return Object(r.d)("Wallis and Futuna", "format-country");
                    case "WS":
                        return Object(r.d)("Samoa", "format-country");
                    case "YE":
                        return Object(r.d)("Yemen", "format-country");
                    case "YT":
                        return Object(r.d)("Mayotte", "format-country");
                    case "ZA":
                        return Object(r.d)("South Africa", "format-country");
                    case "ZM":
                        return Object(r.d)("Zambia", "format-country");
                    case "ZW":
                        return Object(r.d)("Zimbabwe", "format-country");
                    default:
                        return e
                }
            }
            var i = ["US", "CA", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "A1", "AQ", "AG", "AR", "AM", "AW", "AP", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "O1", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "A2", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "UM", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"]
        },
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
                return i
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            });
            var r = n("/7QA"),
                a = n("2xye");

            function i(e) {
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
                    checkout_source: e.trackingContext.source
                };
                e.trackingContext.detail && (t.checkout_source_detail = e.trackingContext.detail), r.o.track(a.SpadeEventType.PaymentFormInteraction, t)
            }
            var o, s, c, l, d, u = function() {
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
                        r.o.track(a.SpadeEventType.PaymentFormDisplay, t)
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
            }(c || (c = {})),
            function(e) {
                e.VendorLoginClick = "vendor_login_click", e.CompletePurchaseClick = "complete_purchase_click", e.PaypalTokenError = "paypal_token_error", e.RadioButtonClick = "radio_button_click", e.TokenError = "token_error", e.PriceChangeAlert = "price_change_alert", e.UnsupportedCountryAlert = "unsupported_country_alert"
            }(l || (l = {})),
            function(e) {
                e.ChannelSubscribeButton = "channel_subscribe_button_click", e.Direct = "direct_url_link", e.EmotePicker = "emote_picker_click", e.Extension = "extension_click", e.TurboSubscribeButton = "turbo_subscribe_button_click", e.ViewerCard = "viewer_card_click"
            }(d || (d = {}))
        },
        LLjY: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r, a = n("/7QA"),
                i = n("2xye");

            function o(e) {
                a.o.track(i.SpadeEventType.DashboardHelpInteraction, e)
            }! function(e) {
                e.OpenHelp = "open_help", e.LearnMore = "learn_more", e.OpenSendFeedback = "open_send_feedback", e.CancelFeedback = "cancel_feedback", e.SentFeedback = "sent_feedback"
            }(r || (r = {}))
        },
        MJbm: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = i.p.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                r = e.offsetHeight,
                                a = e.offsetLeft,
                                i = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && r === t.height && i === t.top && a === t.left || (t.width = n, t.height = r, t.props.onResize(n, r, i, a)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", {
                            className: "resize-detector"
                        }, a.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, a.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), a.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, a.createElement("div", {
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
                }(a.Component));
            n.d(t, "a", function() {
                return o
            })
        },
        MPK0: function(e, t, n) {},
        Map9: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("6D3P"),
                o = n("yCxs"),
                s = n("CFgy"),
                c = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this,
                            r = i.b.intervalFromID(n.props.summaryID);
                        return r && Object(s.e)(r) && (n.summaryInterval = r), n.needsQuery = Boolean(n.summaryInterval && Object(s.c)(n.props.streamSummaryQuery.interval, n.summaryInterval)), n.state = {
                            isLoading: n.needsQuery,
                            streamSummaries: []
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.query()
                    }, t.prototype.componentDidUpdate = function() {
                        this.query()
                    }, t.prototype.render = function() {
                        return this.props.children(r.__assign({}, this.props.streamSummaryQuery, {
                            isLoading: this.props.streamSummaryQuery.isLoading || this.state.isLoading,
                            historicalStreamSummary: this.state.streamSummaries[0]
                        }))
                    }, t.prototype.query = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.needsQuery && this.props.streamSummaryQuery.channel ? (this.needsQuery = !1, [4, Object(o.b)(this.props.streamSummaryQuery.channel, this.summaryInterval)]) : [2];
                                    case 1:
                                        return (e = t.sent()).isError && this.setState({
                                            isLoading: !1
                                        }), this.setState({
                                            streamSummaries: e.streamSummaries,
                                            isLoading: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(a.Component),
                l = n("mLw1"),
                d = n("/7QA"),
                u = n("Snp4"),
                m = n("bket"),
                p = n("2psh"),
                h = n("Ue10"),
                f = {
                    "data-test-selector": "stream-summary-date-time"
                },
                g = function(e) {
                    var t = e.currentStreamSummary,
                        n = e.streamSummaries,
                        i = e.getURLForStreamSummary;
                    return a.createElement(h.Xa, {
                        position: h.jb.Relative,
                        fullWidth: !0
                    }, a.createElement(m.a, {
                        control: function(e) {
                            var n = e.toggle;
                            return a.createElement(h.Xa, {
                                display: h.X.Flex,
                                fullHeight: !0
                            }, a.createElement(h.Ua, r.__assign({
                                type: h.Va.Base
                            }, f, {
                                onClick: n
                            }), a.createElement(h.Xa, {
                                justifyContent: h.Wa.Center,
                                display: h.X.Flex,
                                flexDirection: h.Aa.Column,
                                alignItems: h.f.Center
                            }, a.createElement(h.W, {
                                color: h.O.Link,
                                fontSize: h.Ca.Size4
                            }, Object(d.c)(t.interval.start, {
                                weekday: "long",
                                month: "long",
                                day: "numeric"
                            })), a.createElement(h.W, {
                                fontSize: h.Ca.Size6,
                                color: h.O.Alt2
                            }, function(e) {
                                return Object(d.d)("{start, time, short} – {end, time, short}", {
                                    start: e.start,
                                    end: e.end
                                }, "StreamSummaryNav")
                            }(t.interval)))))
                        },
                        onOpen: p.b
                    }, function(e) {
                        var r = e.close;
                        return a.createElement(h.u, {
                            direction: h.v.BottomCenter,
                            noTail: !0,
                            offsetY: "-2rem",
                            size: h.w.Medium,
                            show: !0
                        }, a.createElement(h.Xa, {
                            padding: {
                                y: .5
                            }
                        }, n.slice().reverse().map(function(e) {
                            return a.createElement(v, {
                                href: i(e),
                                isActive: t === e,
                                key: e.id,
                                onClick: r
                            }, b(e.interval))
                        }), !n.includes(t) && a.createElement(a.Fragment, null, a.createElement(h.ib, {
                            height: 5
                        }), a.createElement(v, {
                            href: i(t),
                            isActive: !0,
                            onClick: r
                        }, b(t.interval)))))
                    }))
                },
                v = function(e) {
                    var t, n = e.href,
                        r = e.isActive,
                        i = e.children,
                        o = e.onClick;
                    return t = r ? a.createElement(h.Xa, {
                        display: h.X.Flex
                    }, a.createElement(h.Xa, {
                        display: h.X.Flex,
                        padding: {
                            right: 1
                        }
                    }, a.createElement(h.sb, {
                        asset: h.tb.Check,
                        width: 10,
                        height: 10,
                        type: h.ub.Alt2
                    })), a.createElement(h.W, {
                        fontSize: h.Ca.Size6,
                        color: h.O.Alt2
                    }, i)) : a.createElement(h.Xa, {
                        display: h.X.Flex
                    }, a.createElement(h.W, {
                        fontSize: h.Ca.Size6
                    }, i)), a.createElement(h.Ua, {
                        linkTo: n,
                        onClick: o,
                        disabled: r
                    }, a.createElement(h.Xa, {
                        display: h.X.Flex,
                        flexDirection: h.Aa.Row,
                        alignItems: h.f.Center,
                        justifyContent: h.Wa.Between,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, t))
                };

            function b(e) {
                var t = Object(d.c)(e.start, {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                });
                return Object(d.d)("{localizedStartDate} {start, time, short} – {end, time, short}", {
                    localizedStartDate: t,
                    start: e.start,
                    end: e.end
                }, "StreamSummaryNav")
            }
            var k = function() {
                    return function(e, t) {
                        if (this.isLast = !1, this.streamSummaries = e, this.last = this.streamSummaries[this.streamSummaries.length - 1], this.current = this.streamSummaries.find(function(e) {
                                return e.id === t
                            }), this.current && this.current) {
                            var n = this.streamSummaries.indexOf(this.current);
                            this.previous = this.streamSummaries[n - 1], this.next = this.streamSummaries[n + 1], this.isLast = this.last === this.current
                        }
                    }
                }(),
                y = (n("VlZV"), function(e) {
                    var t, n = new k(e.query.streamSummaries, e.summaryID);
                    if (!n.current && e.query.historicalStreamSummary) {
                        var r = e.query.historicalStreamSummary;
                        n = new k([r], e.summaryID)
                    }
                    if (e.query.isLoading) t = a.createElement("div", null, a.createElement(h.ib, {
                        width: 200,
                        lineCount: 2
                    }));
                    else if (n.current) t = a.createElement(g, {
                        currentStreamSummary: n.current,
                        streamSummaries: e.query.streamSummaries,
                        getURLForStreamSummary: e.getURLForStreamSummary
                    });
                    else if (e.query.streamSummaries.length) {
                        var i = e.query.streamSummaries[e.query.streamSummaries.length - 1];
                        t = a.createElement(l.a, {
                            to: e.getURLForStreamSummary(i)
                        })
                    } else t = a.createElement(S, null);
                    return a.createElement(h.Xa, {
                        position: h.jb.Relative
                    }, a.createElement(h.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(u.a, {
                        previousPath: n.previous ? e.getURLForStreamSummary(n.previous) : "",
                        nextPath: n.next ? e.getURLForStreamSummary(n.next) : "",
                        onPrevious: p.j,
                        onNext: p.i
                    }, t)), e.children(n))
                }),
                S = function() {
                    return a.createElement(h.Pa, {
                        display: h.X.InlineFlex,
                        alignItems: h.f.Center
                    }, a.createElement(h.W, {
                        className: "sm-nav__placeholder-text",
                        type: h.Vb.H4,
                        color: h.O.Alt2,
                        ellipsis: !0
                    }, Object(d.d)("Today would be a good day to start streaming!", "StreamSummaryNav")))
                },
                E = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return a.createElement(c, {
                            streamSummaryQuery: this.props.query,
                            summaryID: this.props.summaryID
                        }, function(t) {
                            return a.createElement(y, {
                                summaryID: e.props.summaryID,
                                query: t,
                                getURLForStreamSummary: e.props.getURLForStreamSummary
                            }, e.props.children)
                        })
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return E
            })
        },
        Mj6i: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("yR8l"),
                o = n("0FG4"),
                s = n("D7An"),
                c = n("S4w9");

            function l() {
                return Object(i.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                withOwner: "on" === a.p.experiments.getAssignment(s.b.EmotePickerV2)
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
        "O3/n": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("Ue10"),
                i = function(e) {
                    return r.createElement(a.Xa, {
                        margin: {
                            top: 2,
                            bottom: 1,
                            x: 1
                        }
                    }, r.createElement(a.W, {
                        bold: !0,
                        color: a.O.Alt,
                        fontSize: a.Ca.Size7,
                        transform: a.Ub.Uppercase,
                        type: a.Vb.H4
                    }, e.children))
                };
            n.d(t, "a", function() {
                return i
            })
        },
        OTJN: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("N0BP"),
                o = n("Ue10"),
                s = (n("xWpe"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(o.Xa, r.__assign({
                            display: o.X.InlineBlock,
                            margin: {
                                left: .5
                            },
                            className: "side-nav-hotspot"
                        }, Object(i.a)(this.props)))
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return s
            })
        },
        OpME: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "f", function() {
                return h
            }), n.d(t, "d", function() {
                return f
            });
            var r = n("mrSG"),
                a = n("lZdE"),
                i = n("cpJf"),
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
                c = new Set([457, 33, 42, 0]);

            function l(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = o[e.token] || e.token,
                            a = s.reduce(function(t, n) {
                                var r = t;
                                return r && (r = r.concat(", ")), r.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(r.__assign({
                            displayName: n,
                            srcSet: a
                        }, e))
                    }, a = 0, i = e; a < i.length; a++) {
                    n(i[a])
                }
                return t
            }

            function d(e, t) {
                var n = l(e);
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

            function m(e) {
                for (var t = [], n = 0, r = e; n < r.length; n++) {
                    var a = r[n];
                    if (a && a.id && a.emotes) {
                        for (var i = {
                                id: a.id,
                                emotes: []
                            }, o = 0, s = a.emotes; o < s.length; o++) {
                            var c = s[o];
                            c && c.id && c.token && i.emotes.push(c)
                        }
                        t.push(i)
                    }
                }
                return t
            }

            function p(e) {
                for (var t = [], n = [], r = 0, a = e; r < a.length; r++) {
                    var i = a[r];
                    if (i && i.id && i.emotes) {
                        var o = {
                            id: i.id,
                            emotes: d(u(i.emotes), i.id)
                        };
                        i.owner && (o.owner = i.owner), c.has(parseInt(i.id, 10)) ? t.push(o) : n.push(o)
                    }
                }
                return n.concat(t)
            }
            var h = function(e, t, n) {
                    var r = n || i.d,
                        o = [],
                        s = [],
                        c = [],
                        l = new RegExp("^" + Object(a.a)(t), "i");
                    return e.forEach(function(e) {
                        r[e.token] ? c.push(e) : e.token.match(l) ? o.push(e) : s.push(e)
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), s.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), c.sort(function(e, t) {
                        return r[t.token].count - r[e.token].count
                    }), c.concat(o).concat(s)
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
        Pp1Y: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("uNOt"),
                o = n("Ue10"),
                s = (n("obKW"), function(e) {
                    return a.createElement(o.Qa, {
                        borderRadius: o.x.Medium,
                        display: o.X.Block,
                        fontSize: o.Ca.Size5,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, a.createElement(i.a, r.__assign({
                        activeClassName: "dashboard-side-nav__link--active",
                        className: "dashboard-side-nav__link",
                        exact: e.exact,
                        to: e.linkTo
                    }, Object(o.jc)(e)), e.children))
                });
            n.d(t, "a", function() {
                return s
            })
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
                a = n("TSYQ"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("fvjX"),
                c = n("yR8l"),
                l = n("GnwI");
            var d = n("Ue10"),
                u = n("gIsd"),
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
                        this.props.data.loading ? e = [i.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(o.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return i.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return i.createElement(d.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, i.createElement(d.zb, {
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
                p = Object(s.compose)(Object(c.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(l.b)("ReportReasonSelect"))(m);
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
                        br: i.createElement("br", null),
                        tosLink: i.createElement("a", {
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
                    return i.createElement(d.Xa, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? i.createElement("div", null, i.createElement(d.z, {
                        onClick: this.props.onClose
                    }, i.createElement(d.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : i.createElement("div", null, i.createElement(d.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, i.createElement(d.W, {
                        type: d.Vb.H4
                    }, this.props.title), i.createElement(d.Eb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), i.createElement("form", null, i.createElement(d.Eb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, i.createElement(p, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), i.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, i.createElement(d.Sb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), i.createElement(d.Eb, {
                        display: d.X.Flex,
                        justifyContent: d.Wa.Center
                    }, i.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, i.createElement(d.Xa, {
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
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return i.createElement(d.Eb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(i.Component)
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
        Snp4: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("Ue10"),
                o = (n("k0be"), {
                    "data-test-selector": "nav-bar-navigate-back"
                }),
                s = {
                    "data-test-selector": "nav-bar-navigate-forward"
                },
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(i.Eb, {
                            elevation: 1,
                            background: i.r.Base,
                            display: i.X.Flex,
                            flexWrap: i.Ba.NoWrap,
                            alignItems: i.f.Stretch,
                            className: "nav-bar-layout__height"
                        }, a.createElement(l, r.__assign({}, o, {
                            to: this.props.previousPath,
                            onClick: this.props.onPrevious
                        }), a.createElement(i.sb, {
                            asset: i.tb.GlyphArrLeft,
                            type: i.ub.Inherit
                        })), a.createElement(i.Eb, {
                            display: i.X.Flex,
                            flexGrow: 1,
                            flexWrap: i.Ba.NoWrap,
                            justifyContent: i.Wa.Center,
                            alignItems: i.f.Stretch,
                            borderRight: !0,
                            borderLeft: !0
                        }, this.props.children), a.createElement(l, r.__assign({}, s, {
                            to: this.props.nextPath,
                            onClick: this.props.onNext
                        }), a.createElement(i.sb, {
                            asset: i.tb.GlyphArrRight,
                            type: i.ub.Inherit
                        })))
                    }, t
                }(a.Component),
                l = function(e) {
                    return a.createElement(i.Xa, {
                        flexGrow: 0,
                        display: i.X.Flex,
                        alignItems: i.f.Stretch
                    }, a.createElement(i.Ua, r.__assign({
                        linkTo: e.to,
                        onClick: function(t) {
                            e.to || t.preventDefault(), e.onClick && e.onClick()
                        },
                        type: i.Va.Base,
                        disabled: !e.to
                    }, Object(i.jc)(e)), a.createElement(i.Eb, {
                        padding: 1,
                        flexWrap: i.Ba.NoWrap,
                        color: i.O.Link,
                        display: i.X.Flex,
                        alignItems: i.f.Center,
                        fullHeight: !0
                    }, a.createElement(i.Xa, {
                        padding: {
                            x: .5
                        },
                        display: i.X.Flex,
                        alignItems: i.f.Center
                    }, e.children))))
                };
            n.d(t, !1, function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, "a", function() {
                return c
            })
        },
        TOso: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("cMjZ"),
                o = n("geRD"),
                s = n("f00E"),
                c = n("DMoW"),
                l = n("U1yz"),
                d = n("xXlL"),
                u = n("a1OF");
            var m, p = n("3YIm"),
                h = n("NMMG"),
                f = n("Vl9+");

            function g(e) {
                var t = e.currentUserID,
                    n = e.emotes,
                    m = e.message,
                    g = e.recipientUserID;
                if ("" === t || "" === m || "" === g) return Promise.reject(new Error("Tried to send a whisper with nonsensical parameters."));
                var v = Object(s.b)(),
                    b = r.__assign({
                        mutation: p
                    }, Object(o.a)({
                        message: m,
                        nonce: v,
                        recipientUserID: g
                    })),
                    k = Object(h.a)(t, g),
                    y = Object(l.a)(a.p.apollo.client.cache, k, !0);
                if (y) {
                    var S = function(e, t) {
                        for (var n = [], r = /\S+/g, a = r.exec(e); a;) {
                            var i = a[0],
                                o = t[i];
                            if (o) {
                                var s = Object(u.c)(e.slice(0, a.index)),
                                    c = s ? s.length : a.index;
                                n.push({
                                    id: o.id,
                                    start: c,
                                    end: c + i.length - 1
                                })
                            }
                            a = r.exec(e)
                        }
                        return n
                    }(m, n).map(d.a);
                    b.optimisticResponse = {
                        sendWhisper: {
                            __typename: "SendWhisperPayload",
                            message: {
                                content: {
                                    content: m,
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
                                    id: k,
                                    __typename: "WhisperThread",
                                    participants: [{
                                        id: t,
                                        __typename: "User",
                                        self: {
                                            __typename: "UserSelfConnection",
                                            whisperPermissions: {
                                                receive: c.Da.NOT_PERMITTED,
                                                __typename: "WhisperPermissions"
                                            }
                                        }
                                    }, {
                                        id: g,
                                        __typename: "User",
                                        self: {
                                            __typename: "UserSelfConnection",
                                            whisperPermissions: {
                                                receive: c.Da.PERMITTED,
                                                __typename: "WhisperPermissions"
                                            }
                                        }
                                    }]
                                },
                                __typename: "WhisperMessage"
                            },
                            error: null
                        }
                    }, b.update = function(e, t) {
                        if (t.data) {
                            var n = t.data;
                            if (n.sendWhisper.message && !n.sendWhisper.error) {
                                var a = n.sendWhisper.message,
                                    o = Object(l.a)(e, k);
                                if (o) {
                                    var s = o.messages.edges.findIndex(function(e) {
                                        return e.node.id === v || e.node.nonce === v || e.node.id === a.id
                                    });
                                    if (s < 0) {
                                        var c = {
                                            cursor: (1 + y.messages.edges.reduce(function(e, t) {
                                                return Math.max(parseInt(t.cursor, 10), e)
                                            }, 0)).toString(),
                                            node: a,
                                            __typename: "WhisperMessageEdge"
                                        };
                                        o.messages.edges.unshift(c)
                                    } else o.messages.edges[s].node = a;
                                    o.userLastMessageRead && (o.userLastMessageRead.sentAt = a.sentAt), o.unreadMessagesCount = 0, e.writeFragment({
                                        id: Object(i.a)(o),
                                        fragment: f,
                                        data: r.__assign({}, o)
                                    })
                                }
                            }
                        }
                    }
                }
                return a.p.apollo.client.mutate(b)
            }
            n.d(t, "a", function() {
                    return m
                }), n.d(t, "b", function() {
                    return g
                }),
                function(e) {
                    e.TargetBanned = "TARGET_BANNED", e.BodyEmpty = "BODY_EMPTY", e.RestrictedRecipient = "TARGET_RESTRICTED", e.NotDelivered = "NOT_DELIVERED"
                }(m || (m = {}))
        },
        TvOw: function(e, t, n) {
            "use strict";
            var r, a;
            n.d(t, "b", function() {
                    return r
                }), n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Spam = "Spam", e.Harassment = "Harassment"
                }(r || (r = {})),
                function(e) {
                    e.Spam = "spam", e.Harassment = "harassment", e.Other = "other"
                }(a || (a = {}))
        },
        U1yz: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("2Dht");

            function a(e, t, n) {
                try {
                    var a = e.readQuery({
                        query: r,
                        variables: {
                            id: t
                        }
                    }, n);
                    return a ? a.whisperThread : null
                } catch (e) {
                    return null
                }
            }
        },
        UUve: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "f", function() {
                return u
            });
            var r = n("/7QA"),
                a = n("y5D0"),
                i = "SUB_CHECKOUT__PRODUCT",
                o = "SUB_CHECKOUT__RECIPIENT",
                s = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                c = "SUB_CHECKOUT__GIFTING_ANONYMOUSLY",
                l = [i, o, s, c];

            function d() {
                l.forEach(function(e) {
                    return r.n.remove(e)
                })
            }

            function u(e) {
                return function() {
                    return Object(a.e)(e, {
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
        VlZV: function(e, t, n) {},
        VrOd: function(e, t, n) {},
        W8Fi: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.promotion
                })
            }

            function a(e) {
                return e.some(function(e) {
                    return !!e.giftPromotion
                })
            }

            function i(e) {
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

            function c(e) {
                return e.self && e.self.paidUpgradePromotion ? e.self.paidUpgradePromotion.newPrice : e.price
            }

            function l(e) {
                return e.find(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                }) || null
            }
            n.d(t, "g", function() {
                return r
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "f", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return l
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
                return a
            }), n.d(t, "e", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            });
            var r, a, i, o, s = n("0Log");
            n.d(t, "d", function() {
                    return s.ModerationActions
                }),
                function(e) {
                    e[e.Message = 0] = "Message", e[e.ExtensionMessage = 1] = "ExtensionMessage", e[e.Moderation = 2] = "Moderation", e[e.ModerationAction = 3] = "ModerationAction", e[e.TargetedModerationAction = 4] = "TargetedModerationAction", e[e.AutoMod = 5] = "AutoMod", e[e.SubscriberOnlyMode = 6] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 7] = "FollowerOnlyMode", e[e.SlowMode = 8] = "SlowMode", e[e.EmoteOnlyMode = 9] = "EmoteOnlyMode", e[e.R9KMode = 10] = "R9KMode", e[e.Connected = 11] = "Connected", e[e.Disconnected = 12] = "Disconnected", e[e.Reconnect = 13] = "Reconnect", e[e.Hosting = 14] = "Hosting", e[e.Unhost = 15] = "Unhost", e[e.Hosted = 16] = "Hosted", e[e.Subscription = 17] = "Subscription", e[e.Resubscription = 18] = "Resubscription", e[e.GiftPaidUpgrade = 19] = "GiftPaidUpgrade", e[e.AnonGiftPaidUpgrade = 20] = "AnonGiftPaidUpgrade", e[e.SubGift = 21] = "SubGift", e[e.AnonSubGift = 22] = "AnonSubGift", e[e.Clear = 23] = "Clear", e[e.RoomMods = 24] = "RoomMods", e[e.RoomState = 25] = "RoomState", e[e.Raid = 26] = "Raid", e[e.Unraid = 27] = "Unraid", e[e.Ritual = 28] = "Ritual", e[e.Notice = 29] = "Notice", e[e.Info = 30] = "Info", e[e.BadgesUpdated = 31] = "BadgesUpdated", e[e.Purchase = 32] = "Purchase", e[e.BitsCharity = 33] = "BitsCharity", e[e.CrateGift = 34] = "CrateGift", e[e.RewardGift = 35] = "RewardGift", e[e.SubMysteryGift = 36] = "SubMysteryGift", e[e.AnonSubMysteryGift = 37] = "AnonSubMysteryGift"
                }(r || (r = {})),
                function(e) {
                    e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
                }(a || (a = {})),
                function(e) {
                    e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout", e[e.Delete = 2] = "Delete"
                }(i || (i = {})),
                function(e) {
                    e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.CheerMessageRejectedPrompt = 1] = "CheerMessageRejectedPrompt", e[e.MessageRejected = 2] = "MessageRejected", e[e.MessageAllowed = 3] = "MessageAllowed", e[e.MessageDenied = 4] = "MessageDenied", e[e.CheerMessageDenied = 5] = "CheerMessageDenied", e[e.CheerMessageTimeout = 6] = "CheerMessageTimeout", e[e.MessageModApproved = 7] = "MessageModApproved", e[e.MessageModDenied = 8] = "MessageModDenied"
                }(o || (o = {}))
        },
        a1OF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return m
            }), n.d(t, "e", function() {
                return p
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "d", function() {
                return f
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("oe5X"),
                o = n("0FG4"),
                s = n("kRBY"),
                c = n("60o1"),
                l = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
                d = {};

            function u(e, t, n, a, i, o, s) {
                void 0 === i && (i = !1), void 0 === o && (o = !1), void 0 === s && (s = !1);
                var l = Object(c.a)(t.displayName, t.username);
                return {
                    badges: t.badges || {},
                    bits: t.bits,
                    user: r.__assign({}, l, {
                        userLogin: t.username,
                        userID: t.userID,
                        userType: t.userType,
                        color: t.color || m(t.userID)
                    }),
                    messageParts: p(e, t.emotes || {}, t.bits, n, a, t.username),
                    deleted: i,
                    banned: s,
                    hidden: o,
                    timestamp: Date.now()
                }
            }

            function m(e, t) {
                return void 0 === t && (t = 15), "number" != typeof d[e] && (d[e] = Math.floor(Math.random() * t)), l[d[e]]
            }

            function p(e, t, n, r, c, l) {
                var d = Object(s.e)(a.p.store.getState()),
                    u = {
                        cheers: n ? r : void 0,
                        emotes: {
                            type: o.a.Position,
                            map: t
                        },
                        links: {
                            blockLinks: c,
                            parseClips: !0,
                            parseVods: !0
                        },
                        mentions: {
                            senderLogin: l,
                            sessionUser: d
                        }
                    };
                return Object(i.a)(e, u)
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
                return a
            }), n.d(t, "a", function() {
                return i
            });
            var r = n("/7QA");

            function a(e, t) {
                return e / Math.pow(10, t)
            }

            function i(e, t) {
                return Object(r.f)(e, {
                    style: "currency",
                    currency: t
                })
            }
        },
        "b+ID": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                i = n("q1tI"),
                o = n("8Ad5"),
                s = n("1rIY"),
                c = (r = Object(s.a)("ExpandedViewButtonContext", {
                    isExpandedView: !1,
                    toggleExpandedView: function() {
                        return null
                    }
                })).InnerProvider,
                l = r.withContext,
                d = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleKeyUp = function(e) {
                            e.keyCode === o.a.Esc && n.state.isExpandedView && n.toggleExpandedView()
                        }, n.toggleExpandedView = function(e) {
                            n.setState(function(t) {
                                return {
                                    isExpandedView: void 0 !== e ? e : !t.isExpandedView
                                }
                            })
                        }, n.state = {
                            isExpandedView: !1,
                            toggleExpandedView: n.toggleExpandedView
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("keyup", this.handleKeyUp)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("keyup", this.handleKeyUp)
                    }, t.prototype.render = function() {
                        return i.createElement(c, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(i.Component);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return d
            })
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var a, i, o, s;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, a), o = r.__assign({}, t, {
                                            body: i
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((a = i.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, r.__assign({}, a, {
                                            body: a.body
                                        })];
                                    case 2:
                                        throw i.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, a.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
                            var t, n, a, i;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return a = r.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = a), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = a.p.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(i.e)(n);
                        return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        bRMw: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var r = n("/7QA"),
                a = n("kRBY"),
                i = "cc_v2_whitelist";

            function o(e, t) {
                var n = r.b.get(e, []),
                    i = r.p.store.getState();
                return n.includes(t) || n.includes(t + "-staff") && Object(a.g)(i)
            }
        },
        bket: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("u5aL"),
                o = n("Ue10"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDisclosed: !1
                        }, t.toggle = function() {
                            t.setState(function(e) {
                                return e.isDisclosed || t.handleOpen(), {
                                    isDisclosed: !e.isDisclosed
                                }
                            })
                        }, t.close = function() {
                            t.setState({
                                isDisclosed: !1
                            })
                        }, t.handleOpen = function() {
                            t.props.onOpen && t.props.onOpen()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            toggle: this.toggle,
                            close: this.close
                        };
                        return a.createElement(o.Pa, {
                            fullHeight: !0
                        }, a.createElement(i.a, {
                            onClickOut: this.close
                        }, this.props.control(e), this.state.isDisclosed && this.props.children(e)))
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        br9A: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("2xye"),
                o = n("I6K6"),
                s = n("RuiO"),
                c = {
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

            function l(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, n, c, l, d, u, m, p, h, f, g, v, b;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                t = a.o.getVideoPlayerTrackingData().vodID, n = !!t, c = {
                                    channelID: e.channelID,
                                    withVideo: !1
                                }, n && (c.withVideo = !0, c.videoID = t), l = null, r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, a.p.apollo.client.query({
                                    query: s,
                                    variables: c
                                })];
                            case 2:
                                return l = r.sent(), [3, 4];
                            case 3:
                                return d = r.sent(), a.k.error(d, "Failed to make query for channel info in FollowEvent reporting.", {
                                    channelID: e.channelID
                                }), [3, 4];
                            case 4:
                                return u = l && l.data && l.data.user || null, l && !u && a.k.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                    channelID: e.channelID
                                }), m = null, l && n && ((p = l && l.data && l.data.video) ? m = Object(o.a)(p.broadcastType) : a.k.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
                                    currentVideoID: t
                                })), h = u && u.self, f = h ? !!h.subscriptionBenefit : null, g = h && h.subscriptionBenefit && h.subscriptionBenefit.purchasedWithPrime || !1, v = h ? h.canPrimeSubscribe : null, b = {
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
                                    vod_type: m,
                                    viewport_height: window.innerHeight,
                                    viewport_width: window.innerWidth
                                }, a.o.track(i.SpadeEventType.Subscription, b), [2]
                        }
                    })
                })
            }
        },
        "c/47": function(e, t, n) {},
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("o4DC");

            function a(e) {
                return e && Object(r.c)(e) || ""
            }
        },
        cSnd: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            });
            var r = n("/7QA"),
                a = function() {
                    return Object(r.d)("Other", "DemographicsData")
                },
                i = function(e) {
                    return {
                        unknown: Object(r.d)("Unknown", "DemographicsData"),
                        tv: Object(r.d)("TV", "DemographicsData"),
                        ios: Object(r.d)("iOS App", "DemographicsData"),
                        web: Object(r.d)("Web", "DemographicsData"),
                        android: Object(r.d)("Android App", "DemographicsData"),
                        mobile_web: Object(r.d)("Mobile Web", "DemographicsData"),
                        mobile_aggregated: Object(r.d)("Mobile", "DemographicsData"),
                        console: Object(r.d)("Console", "DemographicsData"),
                        other: a()
                    }[e] || e
                },
                o = function(e) {
                    return {
                        other: a(),
                        front_page_featured: Object(r.d)("Featured Section - Front Page", "DemographicsData"),
                        creative_page_featured: Object(r.d)("Featured Section - Creative Page", "DemographicsData"),
                        hosted: Object(r.d)("Hosts", "DemographicsData"),
                        email_live_notification: Object(r.d)("Notifications - Email", "DemographicsData"),
                        onsite_notification: Object(r.d)("Notifications - Onsite", "DemographicsData"),
                        followed_channel: Object(r.d)("Followers", "DemographicsData"),
                        directory_browse: Object(r.d)("Browse Page", "DemographicsData"),
                        search: Object(r.d)("Searches", "DemographicsData"),
                        clips_live: Object(r.d)("Clips", "DemographicsData"),
                        friend_presence: Object(r.d)("Friends", "DemographicsData"),
                        top_nav_bar: Object(r.d)("Your Channel Page", "DemographicsData"),
                        recommended_channel: Object(r.d)("Other Recommendations", "DemographicsData"),
                        homepage_carousel: Object(r.d)("Homepage Carousel", "DemographicsData"),
                        homepage_recommendations: Object(r.d)("Homepage Recommendations", "DemographicsData"),
                        other_channel_page: Object(r.d)("Other Channel Page", "DemographicsData")
                    }[e] || Object(r.d)("{name}'s Channel Page", {
                        name: e
                    }, "DemographicsData")
                },
                s = function(e) {
                    var t;
                    return ((t = {
                        facebook: Object(r.d)("Facebook", "DemographicsData"),
                        google: Object(r.d)("Google", "DemographicsData"),
                        reddit: Object(r.d)("Reddit", "DemographicsData"),
                        youtube: Object(r.d)("Youtube", "DemographicsData")
                    })["t.co"] = Object(r.d)("Twitter", "DemographicsData"), t.unknown = Object(r.d)("Direct", "DemographicsData"), t.twitch_aggregate = Object(r.d)("Twitch", "DemographicsData"), t.external_aggregate = Object(r.d)("External", "DemographicsData"), t)[e] || e
                }
        },
        cpGa: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("/7QA"),
                i = n("Jgup"),
                o = n("cSnd"),
                s = n("nlSm"),
                c = n("g3ZN"),
                l = n("Ue10"),
                d = (n("ffsR"), function(e) {
                    return e
                }),
                u = function(e) {
                    var t = e.streamSummaries,
                        n = e.isLoading,
                        c = Object(s.a)(t.map(function(e) {
                            return e.videoPlayPlatforms
                        })),
                        u = Object(s.a)(t.map(function(e) {
                            return e.videoPlayGeographics
                        })),
                        p = Object(s.a)(t.map(function(e) {
                            return e.videoPlayInternalChannelsReferrers
                        })),
                        h = Object(s.a)(t.map(function(e) {
                            return e.videoPlayInternalTwitchReferrers
                        })),
                        f = Object(s.a)(t.map(function(e) {
                            return e.videoPlayExternalReferrers
                        }));
                    return r.createElement(l.Xa, {
                        className: "referral-detail-panels",
                        display: l.X.Flex,
                        flexDirection: l.Aa.Column,
                        flexWrap: l.Ba.NoWrap,
                        alignItems: l.f.Stretch,
                        breakpointMedium: {
                            flexDirection: l.Aa.Row
                        },
                        margin: {
                            top: 3
                        }
                    }, r.createElement(l.Xa, {
                        className: "referral-detail-panels__col",
                        display: l.X.Flex,
                        flexWrap: l.Ba.NoWrap,
                        flexDirection: l.Aa.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, r.createElement(m, {
                        isLoading: n,
                        referrals: u.items.slice(0, 15),
                        total: c.total,
                        translationFunc: i.b,
                        title: Object(a.d)("Views by Location", "ChannelAnalyticsReferralPage")
                    }), r.createElement(m, {
                        isLoading: n,
                        referrals: c.items.slice(0, 15),
                        total: c.total,
                        translationFunc: o.c,
                        title: Object(a.d)("Views by Platform", "ChannelAnalyticsReferralPage")
                    })), r.createElement(l.Xa, {
                        className: "referral-detail-panels__col",
                        display: l.X.Flex,
                        flexWrap: l.Ba.NoWrap,
                        flexDirection: l.Aa.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, r.createElement(m, {
                        isLoading: n,
                        referrals: h.items.slice(0, 15),
                        total: h.total,
                        translationFunc: o.b,
                        title: Object(a.d)("Views from Twitch", "ChannelAnalyticsReferralPage")
                    }), r.createElement(m, {
                        isLoading: n,
                        referrals: p.items.slice(0, 15),
                        total: p.total,
                        translationFunc: d,
                        title: Object(a.d)("Views from Channels", "ChannelAnalyticsReferralPage")
                    }), r.createElement(m, {
                        isLoading: n,
                        referrals: f.items.slice(0, 15),
                        total: f.total,
                        translationFunc: o.a,
                        title: Object(a.d)("Views from Outside Twitch", "ChannelAnalyticsReferralPage")
                    })))
                };

            function m(e) {
                var t = e.isLoading,
                    n = e.referrals,
                    a = e.total,
                    i = e.translationFunc,
                    o = e.title;
                return t ? r.createElement(l.Xa, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(l.ib, {
                    height: 350
                })) : r.createElement(l.Eb, {
                    padding: {
                        bottom: 1
                    },
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    background: l.r.Base
                }, r.createElement(c.a, {
                    referrals: n,
                    total: a,
                    translationFunc: i,
                    title: o
                }))
            }
            n.d(t, "a", function() {
                return u
            })
        },
        cpJf: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "d", function() {
                    return i
                }), n.d(t, "c", function() {
                    return o
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.Chat = "stream_chat", e.Feeds = "feeds", e.Room = "chatroom", e.Whisper = "whisper", e.VodChat = "vod-chat"
                }(r || (r = {}));
            var a, i = {
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
            }(a || (a = {}))
        },
        cr2a: function(e, t, n) {},
        cuu2: function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("eJ65"),
                c = n("kYmV"),
                l = n("ziIX"),
                d = n("LLjY"),
                u = n("Ue10");
            ! function(e) {
                e.LearnMore = "learn-more", e.SendFeedback = "send-feedback"
            }(r || (r = {}));
            var m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        feedbackFormSelected: !1
                    }, t.selectFeedbackForm = function() {
                        t.setState({
                            feedbackFormSelected: !0
                        }), t.trackDashboardHelpInteraction(d.a.OpenSendFeedback)
                    }, t.unselectFeedbackForm = function() {
                        t.setState({
                            feedbackFormSelected: !1
                        })
                    }, t.handleLearnMoreClick = function() {
                        t.trackDashboardHelpInteraction(d.a.LearnMore)
                    }, t.handleToggle = function(e) {
                        e ? t.setState({
                            feedbackFormSelected: !1
                        }) : t.trackDashboardHelpInteraction(d.a.OpenHelp)
                    }, t.trackDashboardHelpInteraction = function(e) {
                        Object(d.b)({
                            action: e,
                            location: "dashboard/" + t.props.page
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.state.feedbackFormSelected;
                    return i.createElement(s.a, {
                        onToggle: this.handleToggle,
                        tooltipProps: {
                            direction: u.ac.Left,
                            label: Object(o.d)("Help & Feedback", "DashboardHelpButton")
                        }
                    }, i.createElement(l.a, {
                        ariaLabel: Object(o.d)("Feedback", "DashboardHelpButton"),
                        "data-a-target": "help-button"
                    }, i.createElement(u.sb, {
                        asset: u.tb.QuestionMark,
                        height: 16,
                        type: u.ub.Inherit
                    })), i.createElement(u.u, {
                        direction: u.v.TopRight,
                        size: e ? u.w.Large : u.w.Small,
                        "data-a-target": "help-balloon",
                        offsetX: "8px",
                        offsetY: "-4px"
                    }, e && i.createElement(c.a, {
                        page: this.props.page,
                        onClose: this.unselectFeedbackForm
                    }), !e && i.createElement(u.Eb, {
                        padding: {
                            top: .5,
                            bottom: .5
                        },
                        color: u.O.Base
                    }, i.createElement(u.Ua, {
                        "data-test-selector": r.LearnMore,
                        linkTo: this.props.learnMoreUrl,
                        onClick: this.handleLearnMoreClick,
                        targetBlank: !0
                    }, i.createElement(u.Xa, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, i.createElement(u.W, null, Object(o.d)("Learn More", "DashboardHelpButton")))), i.createElement(u.Ua, {
                        "data-test-selector": r.SendFeedback,
                        onClick: this.selectFeedbackForm
                    }, i.createElement(u.Xa, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, i.createElement(u.W, null, Object(o.d)("Send Feedback", "DashboardHelpButton")))), i.createElement(u.Ua, {
                        linkTo: "https://www.twitch.tv/creatorcamp?tt_medium=owned_onsite_twitch&tt_content=creator_camp_creators_all_all_Dashboard&ttid=cd402988e1"
                    }, i.createElement(u.Xa, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, i.createElement(u.W, null, Object(o.d)("Creator Camp", "DashboardHelpButton")))))))
                }, t
            }(i.Component);
            n.d(t, !1, function() {
                return r
            }), n.d(t, "a", function() {
                return m
            })
        },
        cys1: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("/7QA"),
                i = n("gvGA"),
                o = n("5zf8"),
                s = n("4rCz"),
                c = n("x0+1"),
                l = n("j0ar"),
                d = function(e) {
                    var t, n = e.emote,
                        a = n.alt || "";
                    return n.cheerAmount && (a += " " + n.cheerAmount.toString(), t = r.createElement("strong", {
                        className: "chat-line__message--cheer-amount",
                        style: {
                            color: n.cheerColor
                        }
                    }, n.cheerAmount)), r.createElement(l.a, {
                        alt: a,
                        cheerText: t,
                        className: "chat-line__message--emote",
                        srcKey: "1x",
                        srcSet: n.images
                    })
                };
            d.displayName = "Emote";
            var u, m = function(e) {
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
                h = n("RcPG"),
                f = (n("VN3V"), function(e) {
                    var t, n = e.content,
                        a = e.highlightType,
                        i = p("text-fragment", ((t = {})["text-fragment--moderated-highlight"] = a === h.a.ModeratedText, t));
                    return r.createElement("span", {
                        className: i,
                        "data-a-target": "chat-message-text"
                    }, n)
                }),
                g = n("mrSG"),
                v = n("yR8l"),
                b = n("+GjP"),
                k = n("2xye"),
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
                        var e = a.a.defaultStreamPreviewURL;
                        return !this.state.hasImageLoadingError && this.props.imageURL && (e = this.props.imageURL), r.createElement(y.I, {
                            aspect: y.p.Aspect16x9,
                            alt: this.props.altText,
                            src: e,
                            onError: this.handleImageError
                        })
                    }, t
                }(r.Component),
                E = (n("Epr8"), "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"),
                _ = {
                    ERROR: "chat-card-error",
                    TITLE: "chat-card-title",
                    DESCRIPTION: "chat-card-description"
                },
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderErrorCard = function() {
                            var e = r.createElement("img", {
                                "data-test-selector": _.ERROR,
                                src: E,
                                className: "chat-card__error-img"
                            });
                            return t.renderCardContent(e, t.props.error)
                        }, t.renderCardContent = function(e, t) {
                            var n, a;
                            return t ? (n = r.createElement(y.W, {
                                type: y.Vb.Span,
                                fontSize: y.Ca.Size5,
                                "data-test-selector": _.TITLE,
                                title: t.title
                            }, t.title), a = r.createElement(y.W, {
                                type: y.Vb.Span,
                                fontSize: y.Ca.Size6,
                                color: y.O.Alt2,
                                "data-test-selector": _.DESCRIPTION
                            }, t.description)) : (e = r.createElement(y.ib, {
                                overlay: !0
                            }), n = r.createElement(y.ib, {
                                width: 180
                            }), a = r.createElement(y.ib, {
                                width: 120
                            })), r.createElement(y.Eb, {
                                background: y.r.Base,
                                display: y.X.Flex,
                                flexWrap: y.Ba.NoWrap,
                                padding: .5
                            }, r.createElement(y.Eb, {
                                className: "chat-card__preview-img",
                                background: y.r.Alt2,
                                display: y.X.Flex,
                                alignItems: y.f.Center,
                                justifyContent: y.Wa.Center,
                                flexShrink: 0
                            }, e), r.createElement(y.Xa, {
                                display: y.X.Flex,
                                alignItems: y.f.Center,
                                overflow: y.cb.Hidden
                            }, r.createElement(y.Xa, {
                                padding: {
                                    left: 1
                                },
                                fullWidth: !0
                            }, r.createElement(y.Xa, {
                                className: "chat-card__title",
                                ellipsis: !0
                            }, n), r.createElement(y.Xa, {
                                ellipsis: !0
                            }, a))))
                        }, t
                    }
                    return g.__extends(t, e), t.prototype.render = function() {
                        var e;
                        if (this.props.error) e = this.renderErrorCard();
                        else if (this.props.data) {
                            var t = Object(b.e)(this.props.data.contentURL, {
                                    tt_medium: k.PageviewMedium.Chat,
                                    tt_content: k.PageviewContent.ChatCard
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
                        return r.createElement(y.Eb, {
                            elevation: 1,
                            margin: {
                                top: .5
                            }
                        }, e)
                    }, t
                }(r.Component),
                O = n("SceP"),
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
                            i = e.loading;
                        return n || this.state.isTimedOut ? r.createElement(C, {
                            error: {
                                title: Object(a.d)("Something went wrong", "ClipsChatCard"),
                                description: Object(a.d)("We couldn't find that Clip", "ClipsChatCard")
                            }
                        }) : i || !t ? r.createElement(C, null) : r.createElement(C, {
                            data: {
                                title: t.title || (t.broadcaster && t.broadcaster.displayName ? Object(a.d)("Clip of {broadcaster}", {
                                    broadcaster: t.broadcaster.displayName
                                }, "ClipsChatCard") : ""),
                                description: t.curator && t.curator.displayName ? Object(a.d)("Clipped by {curator}", {
                                    curator: t.curator.displayName
                                }, "ClipsChatCard") : "",
                                previewImageURL: t.thumbnailURL,
                                contentURL: t.url
                            }
                        })
                    }, t
                }(r.Component),
                T = Object(v.a)(O, {
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
                w = n("gTu3"),
                j = (n("lpj/"), (u = {})[w.a.Default] = "", u[w.a.Recipient] = "mention-fragment--recipient", u[w.a.Sender] = "mention-fragment--sender", u),
                I = function(e) {
                    var t = e.isAtMention ? "@" : "",
                        n = p("mention-fragment", j[e.currentUserMentionRelation]);
                    return r.createElement("span", {
                        className: n,
                        "data-a-target": "chat-message-mention"
                    }, "" + t + e.recipient)
                };
            I.displayName = "MentionFragment";
            var M = n("QVaV"),
                R = n("sU0Q"),
                A = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return g.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.video,
                            n = e.error,
                            i = e.loading;
                        if (n || t && !t.owner) return r.createElement(C, {
                            error: {
                                title: Object(a.d)("Something went wrong", "VideoChatCard"),
                                description: Object(a.d)("We couldn't find that video", "VideoChatCard")
                            }
                        });
                        if (i || !t) return r.createElement(C, null);
                        var o = r.createElement(y.W, null, Object(a.c)(new Date(t.publishedAt), "medium"), r.createElement("span", null, " · "), Object(M.a)(t.owner.login, t.owner.displayName));
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
                F = Object(v.a)(R, {
                    options: function(e) {
                        return {
                            variables: {
                                videoID: e.id
                            },
                            notifyOnNetworkStatusChange: !0,
                            fetchPolicy: "cache-first"
                        }
                    }
                })(A),
                x = n("ZtEv");

            function U(e, t, n) {
                void 0 === n && (n = !1);
                var a = t.content,
                    i = a.displayText,
                    o = a.url;
                return n ? r.createElement(f, {
                    key: "message-span-" + e,
                    content: i
                }) : r.createElement(m, {
                    key: e,
                    displayText: i,
                    url: o
                })
            }

            function P(e, t) {
                void 0 === t && (t = {});
                var n = null,
                    a = e.reduce(function(a, o, s) {
                        var c = [];
                        switch (s > 0 && e[s - 1].type !== h.a.Text && o.type !== h.a.Text && c.push(" "), o.type) {
                            case h.a.Text:
                            case h.a.ModeratedText:
                                var l = o.content,
                                    u = o.type;
                                c.push(r.createElement(f, {
                                    key: s,
                                    content: l,
                                    highlightType: u
                                }));
                                break;
                            case h.a.CurrentUserHighlight:
                                c.push(r.createElement(I, {
                                    isAtMention: !1,
                                    currentUserMentionRelation: w.a.Recipient,
                                    recipient: o.content,
                                    key: s
                                }));
                                break;
                            case h.a.Mention:
                                c.push(r.createElement(I, {
                                    isAtMention: !0,
                                    currentUserMentionRelation: o.content.currentUserMentionRelation,
                                    recipient: o.content.recipient,
                                    key: s
                                }));
                                break;
                            case h.a.Emote:
                                c.push(r.createElement(d, {
                                    key: s,
                                    emote: o.content
                                }));
                                break;
                            case h.a.Link:
                                c.push(U(s, o, t.disableLinks));
                                break;
                            case h.a.ClipLink:
                                n || (n = r.createElement(i.a, {
                                    key: s
                                }, r.createElement(T, {
                                    slug: o.content.slug,
                                    forceNetworkRequest: t.forceClipsNetworkRequest
                                }))), c.push(U(s, o, t.disableLinks));
                                break;
                            case h.a.VideoLink:
                                n || (n = r.createElement(F, {
                                    key: s,
                                    id: o.content.id,
                                    url: o.content.url
                                })), c.push(U(s, o, t.disableLinks))
                        }
                        return a.concat(c)
                    }, []);
                return n && (a = a.concat(n)), a
            }

            function L(e) {
                if (e.moderationType === x.e.Delete) {
                    var t = e,
                        n = t.userLogin,
                        i = t.body;
                    return r.createElement(c.a, {
                        targetLogin: n,
                        messageBody: i
                    })
                }
                if ((e = e).moderationType === x.e.Ban) return e.reason ? r.createElement("span", {
                    className: "chat-line__moderation--ban-with-reason"
                }, Object(a.d)("{userLogin} has been banned. Reason: {reason}", {
                    userLogin: e.userLogin,
                    reason: e.reason
                }, "ChatLine")) : r.createElement("span", {
                    className: "chat-line__moderation--ban"
                }, Object(a.d)("{userLogin} is now banned from this channel.", {
                    userLogin: e.userLogin
                }, "ChatLine"));
                if (e.reason && e.duration) {
                    var o = Object(a.d)("{userLogin} has been timed out for {duration} seconds. Reason: {reason}", {
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
                }, Object(a.d)("{userLogin} has been timed out for {duration} seconds.", {
                    userLogin: e.userLogin,
                    duration: e.duration
                }, "ChatLine")) : void 0
            }

            function W(e) {
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
                    return Object(a.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more hours to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                        bitsTotal: e.bitsTotal,
                        charityName: e.charityName,
                        timeRemaining: e.timeRemaining,
                        hashtag: e.hashtag,
                        learnMoreURL: e.learnMoreURL
                    }, "ChatLine")
                }(n) : function(e) {
                    return Object(a.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more days to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                        bitsTotal: e.bitsTotal,
                        charityName: e.charityName,
                        timeRemaining: e.timeRemaining,
                        hashtag: e.hashtag,
                        learnMoreURL: e.learnMoreURL
                    }, "ChatLine")
                }(n))
            }

            function B(e) {
                var t = e.enabled ? Object(a.d)("This room is now in slow mode. You may send messages every {length} seconds.", {
                    length: e.length
                }, "ChatLine") : Object(a.d)("This room is no longer in slow mode.", "ChatLine");
                return r.createElement("span", null, t)
            }

            function V(e) {
                var t;
                if (e.length > 0) {
                    var n = e.join(", ");
                    t = Object(a.d)("The moderators of this channel are: {moderatorList}", {
                        moderatorList: n
                    }, "ChatLine")
                } else t = Object(a.d)("There are no moderators of this channel.", "ChatLine");
                return r.createElement("span", null, t)
            }

            function z(e) {
                if (e.enabled) {
                    var t = 0 === e.length ? Object(a.d)("This room is in followers-only mode.", "ChatLine") : Object(a.d)("This room is now in {length} followers-only mode.", {
                        length: Object(o.b)(60 * e.length)
                    }, "ChatLine");
                    return r.createElement("span", null, t)
                }
                return r.createElement("span", null, Object(a.d)("This room is no longer in followers-only mode.", "ChatLine"))
            }

            function G(e) {
                return e.enabled ? r.createElement("span", null, Object(a.d)("This room is now in emote-only mode.", "ChatLine")) : r.createElement("span", null, Object(a.d)("This room is no longer in emote-only mode.", "ChatLine"))
            }

            function X(e) {
                var t = e.enabled ? Object(a.d)("This room is now in subscriber-only mode.", "ChatLine") : Object(a.d)("This room is no longer in subscriber-only mode.", "ChatLine");
                return r.createElement("span", null, t)
            }

            function H(e) {
                return e.enabled ? r.createElement("span", null, Object(a.d)("r9k mode has been enabled for this room.", "ChatLine")) : r.createElement("span", null, Object(a.d)("r9k mode has been disabled for this room.", "ChatLine"))
            }

            function q(e) {
                return e.isAutohost ? Object(a.d)("{host} is now auto hosting you for up to {viewerCount, number} viewers.", {
                    host: e.hostingChannel,
                    viewerCount: e.viewerCount
                }, "ChatLine") : e.viewerCount <= 2 ? Object(a.d)("{host} is now hosting you.", {
                    host: e.hostingChannel
                }, "ChatLine") : Object(a.d)("{host} is now hosting you for up to {viewerCount, number} viewers.", {
                    host: e.hostingChannel,
                    viewerCount: e.viewerCount
                }, "ChatLine")
            }

            function Q(e) {
                var t = e.getHours() % 12;
                0 === t && (t = 12);
                var n = e.getMinutes(),
                    r = n.toString();
                return n < 10 && (r = "0" + r), t + ":" + r
            }

            function K(e) {
                return r.createElement("span", {
                    key: "timestamp",
                    className: "chat-line__timestamp",
                    "data-a-target": "chat-timestamp",
                    "data-test-selector": "chat-timestamp"
                }, Q(new Date(e)))
            }

            function Y(e) {
                return r.createElement("span", {
                    key: "timestamp",
                    className: "chat-line__timestamp",
                    "data-a-target": "chat-timestamp",
                    "data-test-selector": "chat-timestamp"
                }, function(e, t) {
                    void 0 === t && (t = {});
                    var n = a.p.intl.getLanguageCode() || "en";
                    return Intl.DateTimeFormat(n, t).format(e)
                }(new Date(e), {
                    hour: "numeric",
                    minute: "numeric"
                }))
            }
            n.d(t, "f", function() {
                return P
            }), n.d(t, "g", function() {
                return L
            }), n.d(t, "b", function() {
                return W
            }), n.d(t, "j", function() {
                return B
            }), n.d(t, "i", function() {
                return V
            }), n.d(t, "d", function() {
                return z
            }), n.d(t, "c", function() {
                return G
            }), n.d(t, "k", function() {
                return X
            }), n.d(t, "h", function() {
                return H
            }), n.d(t, "e", function() {
                return q
            }), n.d(t, "a", function() {
                return Q
            }), n.d(t, "l", function() {
                return K
            }), n.d(t, "m", function() {
                return Y
            })
        },
        dAHa: function(e, t, n) {
            "use strict";
            var r, a, i = n("mrSG"),
                o = n("q1tI"),
                s = n("/MKj"),
                c = n("fvjX"),
                l = n("/7QA"),
                d = n("yR8l"),
                u = n("BhFH"),
                m = n("iS14"),
                p = n("geRD"),
                h = n("f00E"),
                f = n("D7An"),
                g = n("DMoW"),
                v = n("2xye"),
                b = n("GnwI"),
                k = n("QVaV"),
                y = n("Ue10"),
                S = (n("MPK0"), "report-wizard-block"),
                E = "report-wizard-unblock",
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return o.createElement(y.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": S
                            }, o.createElement(y.Xa, {
                                display: y.X.Flex,
                                alignItems: y.f.Center
                            }, o.createElement(y.sb, {
                                type: y.ub.Brand,
                                asset: y.tb.Ban
                            }), o.createElement(y.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return o.createElement(y.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: y.X.Flex,
                                alignItems: y.f.Center
                            }, o.createElement(y.sb, {
                                type: y.ub.Success,
                                asset: y.tb.FollowCheck
                            }), o.createElement(y.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(y.W, {
                                className: "block-user__success",
                                type: y.Vb.Span
                            }, Object(l.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), o.createElement(y.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": E
                            }, o.createElement(y.Xa, {
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
                        }, t.displayName = function() {
                            var e = t.props.targetUser.displayName,
                                n = t.props.targetUser.login;
                            return e || (n || "")
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(k.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return o.createElement(y.Eb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, o.createElement(y.Xa, null, Object(l.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement(y.Eb, {
                            color: y.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(y.ec, {
                            baseFontSize: y.Ca.Size6
                        }, o.createElement("p", null, Object(l.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement("ul", null, o.createElement("li", null, Object(l.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), o.createElement("li", null, Object(l.d)("Prevent them from hosting you", "ReportWizardBlockActions")), o.createElement("li", null, Object(l.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), o.createElement("li", null, Object(l.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), o.createElement(y.Xa, {
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
            }(a || (a = {}));
            var C, O = {
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
                D = {
                    input_description: {
                        getTitle: function() {
                            return Object(l.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: a.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: a.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: a.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: a.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: a.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: a.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: a.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: a.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: a.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: a.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: a.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: a.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: a.Link
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
                        reportReason: r.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: r.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: r.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: r.Other
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
                        reportReason: r.Spam
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
                        reportReason: r.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: r.Underaged
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
                        reportReason: r.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: r.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: r.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: r.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: r.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: r.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: r.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: r.Miscategorized
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
                        reportReason: r.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "threatening violence",
                        reportReason: r.Harm
                    },
                    commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "committing violence",
                        reportReason: r.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: r.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(l.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: r.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(l.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: r.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(l.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: r.Harm
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
                        reportReason: r.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: r.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: r.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: r.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: r.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: r.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: r.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: r.Other
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
                        reportReason: r.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: r.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(l.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: r.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: O.me,
                        value: "impersonating me",
                        reportReason: r.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: r.Impersonation
                    },
                    impersonation_other: {
                        getTitle: O.someoneElse,
                        value: "impersonating someone else",
                        reportReason: r.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: r.SelfHarm
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
                        reportContext: g.N.WHISPER_REPORT
                    },
                    username: {
                        getTitle: function() {
                            return Object(l.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: r.OffensiveUsername
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
                        reportReason: r.Harassment,
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
                        reportReason: r.Harm
                    },
                    external_commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: r.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(l.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: r.Spam
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
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                r = n.name,
                                a = n.value;
                            t.props.onChangeText(r, a)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    r = t.props.currentCard.items[n];
                                t.props.onChangeRadio(r)
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? o.createElement(y.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return o.createElement(y.Xa, {
                            className: "reporting-wizard-card"
                        }, e, o.createElement(y.Ea, {
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
                                case a.Text:
                                    return o.createElement(y.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case a.Link:
                                    return o.createElement(y.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(y.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, o.createElement(y.Xa, {
                                        display: y.X.Flex
                                    }, o.createElement(y.Xa, {
                                        display: y.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, o.createElement(y.sb, {
                                        asset: y.tb.Document
                                    })), t.getTitle())));
                                case a.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        i = t.required && (!r || !!r && 0 === r.trim().length);
                                    return o.createElement(y.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(y.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                    }, o.createElement(y.Sb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && i,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case a.MultipleChoice:
                                default:
                                    return o.createElement(y.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, o.createElement(y.pb, {
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
                T = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(C || (C = {}));
            var w, j, I, M = {
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
                R = {
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
                A = {
                    getDescription: function() {
                        return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: R.thanks,
                    type: C.Info,
                    value: "end card"
                },
                F = {
                    socialMedia: i.__assign({}, A, {
                        items: [D.endBlurb_socialmedia]
                    }),
                    violence: i.__assign({}, A, {
                        items: [D.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: R.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [D.endLink_DMCA, D.endLink_trademark, D.endLink_devAgreement],
                        type: C.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: R.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [D.endLink_selfharm],
                        type: C.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: R.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [D.endLink_eventCoC],
                        value: "twitch event end",
                        type: C.Info
                    }
                },
                x = {
                    getTitle: R.report,
                    getLabel: function() {
                        return Object(l.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [D.video, D.whisper, D.chat, D.room, D.profile, D.username, D.report_other],
                    type: C.MultipleChoice,
                    value: "content type"
                },
                U = {
                    identifyUser: {
                        getTitle: R.reportVideo,
                        getLabel: M.identifyUser,
                        items: [D.video_streamer, D.video_someoneElse, D.video_chatSomeone],
                        type: C.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: R.reportVideo,
                        getLabel: M.contentGeneral,
                        items: [D.revealPersonalInfo, D.video_labeling, D.video_inactive, D.video_general, D.report_ip, D.violateDevAgreement, D.selfharm],
                        type: C.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: R.reportVideo,
                        getLabel: M.content,
                        items: [D.report_username, D.violence, D.abusive, D.cheating, D.scam, D.inappropriateContent, D.evasion, D.impersonation, D.underage, D.bitsViolation],
                        type: C.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                P = {
                    content: {
                        getTitle: R.reportMessage,
                        getLabel: M.contentGeneral,
                        items: [D.revealPersonalInfo, D.evasion, D.spam, D.maliciousRaid, D.report_username, D.messaging_general, D.selfharm],
                        type: C.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: R.reportMessage,
                        getLabel: M.content,
                        items: [D.report_emotes, D.violence, D.abusive, D.inappropriateContent, D.impersonation, D.underage, D.bitsViolation],
                        type: C.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                L = i.__assign({}, P.content, {
                    getDescription: function() {
                        return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                W = {
                    content: {
                        getTitle: R.reportProfile,
                        getLabel: M.contentGeneral,
                        items: [D.revealPersonalInfo, D.inappropriateBadge, D.inappropriateExtension, D.noModeration, D.profile_general, D.report_ip, D.violateDevAgreement, D.selfharm],
                        type: C.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: R.reportProfile,
                        getLabel: M.content,
                        items: [D.report_username, D.violence, D.abusive, D.scam, D.inappropriateContent, D.evasion, D.impersonation, D.underage, D.bitsViolation],
                        type: C.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                B = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: M.identifyUser,
                    items: [D.report_channelOwner, D.report_member],
                    value: "room report user",
                    type: C.MultipleChoice
                },
                V = {
                    getTitle: R.tellUsMore,
                    items: [D.input_description],
                    type: C.Confirm,
                    value: "tell us more"
                },
                z = {
                    banEvasion: i.__assign({}, V, {
                        items: [D.input_usernames, D.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: i.__assign({}, V, {
                        items: [D.input_link, D.input_connection, D.input_description],
                        nextCard: F.socialMedia,
                        value: "social media tell us more"
                    })
                },
                G = {
                    content: {
                        getTitle: R.reportAbusive,
                        getLabel: M.relevantStatements,
                        items: [D.hateSpeech, D.harassment, D.abusiveViolence, D.commitingViolence, D.swatting, D.personalInfo],
                        type: C.MultipleChoice,
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
                        items: [D.threat_me, D.threat_person, D.threat_group, D.threat_selfharm],
                        type: C.MultipleChoice,
                        value: "violence type"
                    }
                },
                X = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [D.location_onTwitch, D.location_anotherSite, D.location_TwitchEvent],
                        type: C.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: M.thisPersonIs,
                        getDescription: function() {
                            return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [D.external_incitingRaids, D.external_threatening, D.external_harassment],
                        type: C.MultipleChoice,
                        nextCard: z.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: i.__assign({}, G.violence, {
                        items: [D.threat_me, D.threat_person, D.threat_group],
                        nextCard: z.socialMedia
                    }),
                    external_abusive: i.__assign({}, G.content, {
                        items: [D.hateSpeech, D.harassment, D.external_abusiveViolence, D.external_commitingViolence, D.swatting, D.personalInfo],
                        nextCard: z.socialMedia
                    })
                },
                H = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: M.contentGeneral,
                    items: [D.spam_bot, D.spam_scam, D.spam_repeated],
                    type: C.MultipleChoice,
                    value: "spam type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: M.relevantStatements,
                    items: [D.inappropriate_game, D.gory, D.sexuallyViolent, D.childAnimal, D.pornographic, D.suggestive, D.nudity, D.other],
                    type: C.MultipleChoice,
                    value: "inappropriate content type"
                },
                Q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [D.evasion_chat, D.evasion_sitewide, D.evasion_messaging],
                    type: C.MultipleChoice,
                    nextCard: z.banEvasion
                },
                K = {
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
                    items: [D.impersonation_me, D.impersonation_brand, D.impersonation_other],
                    type: C.MultipleChoice,
                    value: "impersonation type"
                },
                Y = x,
                Z = V,
                $ = A,
                J = {
                    video: U.identifyUser,
                    whisper: L,
                    chat: P.content,
                    profile: W.content,
                    room: B,
                    "somewhere else": X.identifyLocation,
                    streamer: U.content,
                    "someone else in video": U.content,
                    "someone in chat": P.content,
                    general_video: U.general,
                    general_messaging: P.general,
                    general_profile: W.general,
                    "channel owner": W.content,
                    "community member": P.content,
                    "on twitch": W.content,
                    "another site": X.externalSite,
                    "twitch event": F.twitchEvent,
                    "brigading/raids": z.socialMedia,
                    threatening: X.external_violence,
                    "hateful/harassing": X.external_abusive,
                    "external site; threatening violence": X.external_violence,
                    "external site; committing violence": X.external_violence,
                    "external site; scam": z.socialMedia,
                    "ban evasion": Q,
                    spam: H,
                    hateful: G.content,
                    impersonation: K,
                    "violence/threats": G.violence,
                    "threatening violence": G.violence,
                    "committing violence": G.violence,
                    abusive: G.content,
                    "inappropriate content": q,
                    "intellectual property": F.legal,
                    "violating developer agreement": F.legal
                },
                ee = {
                    selfharm: F.selfharm,
                    harm: F.violence,
                    other: $
                },
                te = {
                    CHANNEL_FEED_POST_REPORT: W.content,
                    COMMUNITY_REPORT: W.content,
                    CHAT_REPORT: P.content,
                    CLIP_REPORT: U.content,
                    EVENT_REPORT: W.content,
                    EXTENSION_REPORT: W.content,
                    LIVE_UP_REPORT: W.content,
                    ROOM_REPORT: B,
                    WHISPER_REPORT: L,
                    VOD_COMMENT_REPORT: P.content
                },
                ne = "report-wizard-back",
                re = "report-wizard-close",
                ae = "report-wizard-next",
                ie = "report-wizard-submit",
                oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || te[t.props.reportContentType] || Y,
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
                            return o.createElement(y.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, o.createElement(y.W, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(l.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = re,
                                a = !1,
                                i = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case C.MultipleChoice:
                                    e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, r = ae, a = !t.state.currentSelection;
                                    break;
                                case C.Confirm:
                                    e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, a = !t.state.userTextInput, r = ie
                            }
                            return o.createElement(y.Xa, null, i, o.createElement(y.z, {
                                onClick: n,
                                disabled: a,
                                "data-test-selector": r
                            }, o.createElement(y.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return o.createElement(y.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: y.X.InlineBlock
                            }, o.createElement(y.z, {
                                type: y.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": ne
                            }, o.createElement(y.Xa, {
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
                                return t.props.trackClose(I.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    a = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    i = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || Z;
                                J[t.state.currentSelection.value] && (s = J[t.state.currentSelection.value]);
                                var c = t.state.currentSelection.reportReason || t.state.reportReason,
                                    l = s.type === C.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: c,
                                    prevCards: l ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: i,
                                    currentSelection: a || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(j.Next, e.value)
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
                                if (e.type !== a.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    r = n && 0 === n.trim().length;
                                return !n || r
                            }).length
                        }, t.handleSubmit = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a = this;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (i.sent(), this.props.submitStatus) {
                                                case T.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case T.a.Success:
                                                    r = $, ee[t] && (r = ee[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return a.trackNavigation(j.Submit)
                                                    });
                                                    break;
                                                case T.a.UserError:
                                                    this.setState({
                                                        error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case T.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(T.a.FormError), this.setState({
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
                                        return o.trackNavigation(j.Back, e.value)
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
                        this.state.modalCloseTracked || this.props.trackClose(I.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === C.Info && this.state.currentCard.blockPrompt ? o.createElement(_, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? o.createElement(y.Eb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === C.Info ? null : this.renderPrimer();
                        return o.createElement(y.Eb, {
                            className: "reporting-wizard",
                            display: y.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: y.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, o.createElement(y.W, {
                            bold: !0,
                            fontSize: y.Ca.Size4
                        }, this.getTitle()), n, o.createElement(y.Xa, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(N, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === T.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(o.Component),
                se = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return j
                }), n.d(t, "a", function() {
                    return I
                }), n.d(t, "b", function() {
                    return de
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(w || (w = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(j || (j = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(I || (I = {}));
            var le = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, a, o, s, c = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = r === g.N.WHISPER_REPORT ? r : this.props.reportContext.contentType, a = g.N[n], null === (o = {
                                                description: t,
                                                reason: e,
                                                content: a,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: T.a.UserError
                                        }), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(p.a)(o))];
                                    case 2:
                                        return i.sent(), this.setState({
                                            submitStatus: T.a.Success
                                        }, function() {
                                            c.state.showWizard || c.trackAction(w.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = i.sent(), l.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: T.a.MutationError
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
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(j.Open, void 0, e) : n.trackAction(w.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(j.Close, t, void 0, e) : n.trackAction(w.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, a) {
                        l.p.tracking.track(v.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === T.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: a,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        l.p.tracking.track(v.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === T.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(h.a)();
                    var r = l.p.experiments.getAssignment(f.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: T.a.Unsubmitted,
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
                    if (this.props.data.error) return o.createElement(y.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, {
                        fontSize: y.Ca.Size5
                    }, Object(l.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return o.createElement(y.ib, {
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
                        return this.state.showWizard ? this.props.data.loading ? o.createElement(y.Za, null) : o.createElement(oe, i.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : o.createElement(T.b, i.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return o.createElement(y.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, {
                        fontSize: y.Ca.Size5
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
            }(o.Component);
            var de = Object(c.compose)(Object(d.a)(se, {
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
            }), Object(u.a)(), Object(m.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(le)
        },
        dG1e: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("mrSG"),
                a = n("b6Yk");

            function i(e, t) {
                return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, a.a.request(e.path, e, t)];
                            case 1:
                                return n = r.sent(), [2, new o(n, e)]
                        }
                    })
                })
            }
            var o = function() {
                function e(e, t) {
                    this.status = e.status, this.body = e.body, this.error = e.error, this.requestError = e.requestError, this.request = t
                }
                return e.prototype.isSuccess = function() {
                    return this.status >= 200 && this.status < 400 && !this.requestError
                }, e.prototype.isError = function() {
                    return !this.isSuccess()
                }, e
            }()
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
        eAwD: function(e, t, n) {
            "use strict";

            function r(e) {
                e && requestAnimationFrame(function() {
                    e.scrollIntoView({
                        behavior: "smooth"
                    })
                })
            }
            n.d(t, "a", function() {
                return r
            })
        },
        efEE: function(e, t, n) {},
        fbdC: function(e, t, n) {
            "use strict";
            var r, a = n("/MKj"),
                i = n("fvjX"),
                o = n("aCAx"),
                s = n("mrSG"),
                c = n("q1tI"),
                l = n("/7QA"),
                d = n("cZKs"),
                u = n("Ue10");
            ! function(e) {
                e.Message = "confirmation-modal__message", e.ConfirmButton = "confirmation-modal__confirm-button"
            }(r || (r = {}));
            var m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCancelClick = function() {
                        t.props.closeModal()
                    }, t.renderConfirmButton = function() {
                        return c.cloneElement(t.props.confirmButton, {
                            onClick: t.handleConfirmClick,
                            "data-test-selector": r.ConfirmButton
                        })
                    }, t.handleConfirmClick = function() {
                        t.props.closeModal(), t.props.onConfirmClick()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(u.Eb, {
                        background: u.r.Base,
                        padding: {
                            x: 3,
                            top: 3,
                            bottom: 2
                        },
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column
                    }, c.createElement(u.Xa, {
                        "data-test-selector": r.Message
                    }, this.props.message), c.createElement(u.Xa, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Row,
                        justifyContent: u.Wa.Center,
                        padding: {
                            top: 2
                        }
                    }, c.createElement(u.Xa, {
                        padding: {
                            right: .5
                        }
                    }, c.createElement(u.z, {
                        type: u.F.Text,
                        onClick: this.handleCancelClick
                    }, Object(l.d)("Cancel", "SettingsConfirmationModal"))), c.createElement(u.Xa, {
                        padding: {
                            left: .5
                        }
                    }, this.renderConfirmButton())), c.createElement(d.a, null))
                }, t
            }(c.Component);
            var p = Object(a.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    closeModal: o.c
                }, e)
            })(m);
            n.d(t, "a", function() {
                return p
            }), n.d(t, !1, function() {})
        },
        ffsR: function(e, t, n) {},
        g3ZN: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("vxFv"),
                s = n("Ue10"),
                c = (n("o9uN"), {
                    "data-test-selector": "referral-percentage"
                }),
                l = {
                    "data-test-selector": "report-item-name"
                },
                d = {
                    "data-test-selector": "referral-subtitle"
                };

            function u(e) {
                return Object(i.d)("{totalViewCount, plural, one {# view} other {# views}}", {
                    totalViewCount: e
                }, "ReferralGroup")
            }
            var m = function(e) {
                var t = e.referrals,
                    n = e.total,
                    o = e.translationFunc,
                    c = e.title,
                    l = e.subtitle;
                return 0 === n ? function(e) {
                    var t = e.title,
                        n = e.subtitle;
                    return a.createElement(a.Fragment, null, a.createElement(s.Xa, {
                        padding: {
                            top: 2,
                            bottom: 1,
                            x: 2
                        }
                    }, t && a.createElement(s.W, {
                        type: s.Vb.H3,
                        fontSize: s.Ca.Size5,
                        bold: !0
                    }, t)), a.createElement(s.Xa, {
                        margin: {
                            x: 2,
                            bottom: 1
                        }
                    }, a.createElement(s.W, r.__assign({}, d, {
                        fontSize: s.Ca.Size5,
                        color: s.O.Alt2
                    }), void 0 !== n ? n : Object(i.d)("Not enough data for us to display", "ReferralGroup"))))
                }({
                    subtitle: l,
                    title: c
                }) : a.createElement(a.Fragment, null, a.createElement(s.Xa, {
                    margin: {
                        top: .5
                    },
                    padding: {
                        top: 2,
                        bottom: 1,
                        x: 2
                    }
                }, c && a.createElement(s.W, {
                    type: s.Vb.H3,
                    fontSize: s.Ca.Size5,
                    bold: !0
                }, c), a.createElement(s.W, r.__assign({}, d, {
                    fontSize: s.Ca.Size5,
                    color: s.O.Alt2
                }), void 0 !== l ? l : u(n))), a.createElement(s.Xa, {
                    margin: {
                        bottom: 1
                    }
                }, t.map(function(e, t) {
                    return a.createElement(p, {
                        referral: e,
                        total: n,
                        translationFunc: o,
                        key: t
                    })
                })))
            };

            function p(e) {
                var t = e.referral,
                    n = e.total,
                    i = e.translationFunc;
                return a.createElement(s.Eb, {
                    className: "referral-group-row",
                    padding: {
                        y: 1,
                        right: 2,
                        left: 2
                    },
                    fontSize: s.Ca.Size5
                }, a.createElement(s.Ja, null, a.createElement(s.P, {
                    cols: {
                        default: 5,
                        xs: 5,
                        sm: 5
                    }
                }, a.createElement(s.Xa, {
                    padding: {
                        left: 0,
                        right: 1
                    }
                }, a.createElement(s.W, r.__assign({
                    fontSize: s.Ca.Size5,
                    ellipsis: !0
                }, l), i(t.name)))), a.createElement(s.P, {
                    cols: {
                        default: 2,
                        xs: 3,
                        sm: 2
                    }
                }, a.createElement(s.Xa, {
                    padding: {
                        right: 1
                    },
                    textAlign: s.Rb.Right
                }, a.createElement(s.W, r.__assign({
                    color: s.O.Alt2,
                    ellipsis: !0
                }, c), Object(o.a)(t.count / n)))), a.createElement(s.P, {
                    cols: {
                        default: 5,
                        xs: 4,
                        sm: 5
                    }
                }, a.createElement(s.Xa, {
                    padding: {
                        top: .5
                    }
                }, a.createElement(s.Yb, {
                    label: u(t.count),
                    direction: s.ac.Top,
                    align: s.Zb.Center,
                    display: s.X.Block
                }, a.createElement(s.Eb, {
                    background: s.r.Alt2,
                    borderRadius: s.x.Large
                }, a.createElement(s.mb, {
                    value: Math.max(Math.round(t.count / n * 100), 1)
                })))))))
            }
            n.d(t, !1, function() {
                return c
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return m
            })
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
        gq0V: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            });
            var r = n("q1tI"),
                a = n("/7QA"),
                i = n("5g1g"),
                o = n("wUQP"),
                s = function(e) {
                    var t = e.children;
                    return r.createElement(i.a, {
                        name: "vip_badge_gate"
                    }, t)
                },
                c = function() {
                    return o.a.On === a.b.get("vip_badge_gate", o.a.Off)
                }
        },
        hRS0: function(e, t, n) {},
        i6WW: function(e, t, n) {
            "use strict";
            var r = n("/7QA"),
                a = n("RcPG"),
                i = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?"),
                o = new RegExp("(?:^|\\s)(?:https?:\\/\\/)?(?:www\\.)?twitch\\.tv\\/(\\w+)\\/clip\\/(\\w+)(?:$|\\s)?");
            var s = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?");
            n.d(t, "a", function() {
                return l
            });
            var c = /^(?:(https?:\/\/)?((?:[\w#%\-+=:~]+\.)+[a-z]{2,8}(?:\/[\w./#%&()\-+=:?~]*)?))$/;

            function l(e, t) {
                var n = e.match(c);
                if (!n) return null;
                if (t.blockLinks) return {
                    type: a.a.Text,
                    content: " <" + Object(r.d)("deleted link", "CreateMessageData") + "> "
                };
                var l = n[1],
                    d = n[2],
                    u = "" + (l || "https://") + d;
                if (t.parseClips && function(e) {
                        void 0 === e && (e = "");
                        var t = i.test(e) && !e.includes("clips.twitch.tv/2017/"),
                            n = o.test(e);
                        return t || n
                    }(u)) {
                    var m = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(i);
                        if (t && t.length > 0 && void 0 !== t.index) return t[1];
                        var n = e.match(o);
                        return n && n.length > 0 && void 0 !== n.index ? n[2] : ""
                    }(u);
                    return {
                        type: a.a.ClipLink,
                        content: {
                            slug: m,
                            url: u,
                            displayText: e
                        }
                    }
                }
                if (t.parseVods && function(e) {
                        return void 0 === e && (e = ""), s.test(e)
                    }(u)) {
                    var p = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(s);
                        return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                    }(u);
                    return {
                        type: a.a.VideoLink,
                        content: {
                            id: p,
                            url: u,
                            displayText: e
                        }
                    }
                }
                return {
                    type: a.a.Link,
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
                return c
            });
            var r = n("mrSG"),
                a = n("yR8l"),
                i = n("8jSG"),
                o = n("cMjZ"),
                s = n("zixI");

            function c() {
                var e = this;
                return Object(a.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, a) {
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
                                                            id: Object(o.a)(a),
                                                            fragment: i
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(a),
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
        idPT: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("8/mp"),
                i = n("Ue10"),
                o = (n("8dXP"), function(e) {
                    return r.createElement(i.Qa, {
                        background: i.r.Alt,
                        borderRight: !0,
                        flexShrink: 0,
                        flexGrow: 0,
                        fullHeight: !0,
                        position: i.jb.Relative
                    }, r.createElement("nav", {
                        className: "dashboard-side-nav"
                    }, r.createElement(a.b, {
                        suppressScrollX: !0,
                        contentClassName: "dashboard-side-nav-display-flex"
                    }, e.children)))
                });
            n.d(t, "a", function() {
                return o
            })
        },
        j0ar: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("TSYQ"),
                i = n("q1tI"),
                o = n("x1M1"),
                s = n("Ue10"),
                c = (n("9KaG"), function(e) {
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
                                t = a("chat-image", {
                                    "chat-image__animated": !!n.props.cheerText && n.state.imageLoaded
                                }, n.props.className);
                            if (n.props.srcSet.themed) e = i.createElement(s.Pa, {
                                display: n.state.imageLoaded ? s.X.InlineBlock : s.X.Hide
                            }, i.createElement(o.a, {
                                alt: n.props.alt,
                                className: t,
                                defaultRes: n.props.srcKey,
                                onLoad: n.onImageLoad,
                                onMouseOver: n.onMouseOver,
                                onMouseOut: n.onMouseOut,
                                sources: n.props.srcSet
                            }));
                            else {
                                for (var r = [], c = 0, l = Object.keys(n.props.srcSet.sources); c < l.length; c++) {
                                    var d = l[c];
                                    r.push(n.props.srcSet.sources[d] + " " + d)
                                }
                                e = i.createElement(s.Pa, {
                                    display: n.state.imageLoaded ? s.X.InlineBlock : s.X.Hide
                                }, i.createElement("img", {
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
                            return n.state.imageLoaded ? null : i.createElement(s.Pa, {
                                display: s.X.InlineBlock
                            }, i.createElement(s.W, {
                                type: s.Vb.Span,
                                className: "chat-image__placeholder",
                                align: s.fc.Top
                            }, i.createElement(s.ib, {
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
                        return e = this.state.isHovering && this.state.imageLoaded ? i.createElement(s.Yb, {
                            direction: this.props.tooltipDirection || s.ac.Top,
                            label: this.props.alt,
                            display: s.X.Inline,
                            offsetY: "0.9rem",
                            "data-a-target": "emote-name"
                        }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText) : i.createElement("span", {
                            "data-a-target": "emote-name"
                        }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText), this.props.cheerText ? i.createElement(s.W, {
                            type: s.Vb.Span,
                            noWrap: !0
                        }, e) : e
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return c
            })
        },
        j8bx: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("5NYc"),
                a = n("u2gS"),
                i = function() {
                    function e(e) {
                        Object.assign(this, e)
                    }
                    return e.sort = function(e) {
                        var t = [],
                            n = [];
                        return e.forEach(function(e) {
                            e.isComplete ? t.push(e) : n.push(e)
                        }), t.sort(function(e, t) {
                            return t.position - e.position
                        }), n.sort(function(e, t) {
                            return e.position - t.position
                        }), n.concat(t)
                    }, e.topCelebratable = function(e) {
                        return e.filter(function(e) {
                            return e.isComplete && !e.isCompleteByRole
                        }).reduce(function(e, t) {
                            return e && e.position >= t.position ? e : t
                        }, null)
                    }, e.prototype.finalize = function() {
                        this.isCompleteByRole = this.getIsCompletedByRole(), this.isComplete = this.isCompleteByRole || this.isComplete
                    }, e.prototype.getIsCompletedByRole = function() {
                        return this.role !== a.d.None && (this.role !== a.d.Affiliate || (this.key === r.b.IT_BEGINS || this.key === r.b.PATH_TO_AFFILIATE))
                    }, e
                }()
        },
        jPWu: function(e, t, n) {},
        jvBR: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("u2gS"),
                a = function() {
                    function e(e) {
                        Object.assign(this, e)
                    }
                    return e.fromChannelData = function(t) {
                        return t && t.channel && t.channel.id && t.channel.login ? new e({
                            id: t.channel.id,
                            name: t.channel.login,
                            role: function(e) {
                                if (e && e.roles) {
                                    if (e.roles.isAffiliate) return r.d.Affiliate;
                                    if (e.roles.isPartner) return r.d.Partner
                                }
                                return r.d.None
                            }(t.channel)
                        }) : null
                    }, e
                }()
        },
        k0be: function(e, t, n) {},
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
        kYmV: function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                i = n("q1tI"),
                o = n("/MKj"),
                s = n("/7QA"),
                c = n("LLjY"),
                l = n("6XEL"),
                d = n("Ue10");
            ! function(e) {
                e.Achievements = "achievements", e.Bounties = "bounties", e.ChannelAnalytics = "channel-analytics", e.Extensions = "extensions", e.Live = "live", e.Roles = "roles", e.StreamSummary = "stream-summary", e.Unknown = "unknown"
            }(r || (r = {}));
            var u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleCancel = function() {
                        Object(c.b)({
                            action: c.a.CancelFeedback,
                            location: "dashboard/" + n.props.page
                        }), n.props.onClose()
                    }, n.handleChange = function(e) {
                        n.setState({
                            body: e.currentTarget.value
                        })
                    }, n.sendFeedback = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            inFlight: !0,
                                            errorMessage: ""
                                        }), e = "https://api.twitch.tv/kraken/users/" + this.props.currentUserID + "/stats_feedbacks", [4, Object(l.c)({
                                            path: e,
                                            method: "POST",
                                            body: {
                                                message: this.state.body,
                                                page: this.props.page
                                            }
                                        })];
                                    case 1:
                                        return t = n.sent(), Object(c.b)({
                                            action: c.a.SentFeedback,
                                            location: "dashboard/" + this.props.page
                                        }), t.isError() ? this.setState({
                                            inFlight: !1,
                                            errorMessage: t.error.message
                                        }) : this.setState({
                                            body: "",
                                            inFlight: !1,
                                            errorMessage: "",
                                            successTimeout: setTimeout(this.props.onClose, 2e3)
                                        }), [2]
                                }
                            })
                        })
                    }, n.state = {
                        body: "",
                        inFlight: !1,
                        errorMessage: "",
                        successTimeout: 0
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.state.successTimeout)
                }, t.prototype.render = function() {
                    return i.createElement(d.Xa, {
                        padding: 2
                    }, i.createElement(d.Ea, {
                        label: Object(s.d)("How can we improve this page for you?", "DashboardFeedbackForm"),
                        error: Boolean(this.state.errorMessage.length),
                        errorMessage: this.state.errorMessage
                    }, i.createElement(d.Xa, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(d.Sb, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0,
                        onChange: this.handleChange,
                        placeholder: Object(s.d)("It would help me if this page...", "DashboardFeedbackForm"),
                        rows: 4,
                        noResize: !0
                    }))), i.createElement(d.Xa, {
                        display: d.X.Flex,
                        flexGrow: 1,
                        flexWrap: d.Ba.NoWrap,
                        justifyContent: d.Wa.End,
                        padding: {
                            top: 2
                        }
                    }, i.createElement(d.Xa, {
                        padding: {
                            right: 1
                        }
                    }, i.createElement(d.z, {
                        onClick: this.handleCancel,
                        type: d.F.Text,
                        "data-test-selector": "feedback-form-cancel"
                    }, Object(s.d)("Cancel", "DashboardFeedbackForm"))), i.createElement(d.z, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0 || 0 === this.state.body.length,
                        onClick: this.sendFeedback,
                        "data-test-selector": "feedback-form-submit"
                    }, this.state.successTimeout > 0 ? Object(s.d)("Sent", "DashboardFeedbackForm") : Object(s.d)("Send Feedback", "DashboardFeedbackForm"))))
                }, t
            }(i.Component);
            var m = Object(o.connect)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            })(u);
            n.d(t, "b", function() {
                return r
            }), n.d(t, !1, function() {
                return "feedback-form-submit"
            }), n.d(t, !1, function() {
                return "feedback-form-cancel"
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return m
            })
        },
        l0Eh: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardStreamSummary_Channel"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelName"
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
                            alias: {
                                kind: "Name",
                                value: "channel"
                            },
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
                                        value: "channelName"
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
                                                value: "isPartner"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isAffiliate"
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
                body: "query DashboardStreamSummary_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        lBsv: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("4p7I"),
                o = n("/7QA"),
                s = n("Ue10"),
                c = (n("8SJZ"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(s.Eb, {
                            elevation: 1,
                            background: s.r.Base,
                            display: s.X.Flex,
                            position: s.jb.Relative,
                            flexDirection: s.Aa.Row,
                            flexWrap: s.Ba.NoWrap,
                            className: "channel-analytics-sub-page-header-height",
                            borderBottom: !0
                        }, a.createElement(s.Eb, {
                            position: s.jb.Absolute,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            attachTop: !0,
                            attachLeft: !0,
                            attachBottom: !0
                        }, a.createElement(i.a, null, a.createElement(s.z, {
                            type: s.F.Text,
                            linkTo: this.props.backLinkTo
                        }, a.createElement(s.Xa, {
                            padding: {
                                left: 1,
                                right: 1
                            }
                        }, a.createElement(s.W, null, Object(o.d)("Back", "ChannelAnalyticsReferralPage")))))), a.createElement(s.Eb, {
                            display: s.X.Flex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            justifyContent: s.Wa.Center,
                            alignItems: s.f.Center
                        }, a.createElement(s.W, {
                            type: s.Vb.H2,
                            fontSize: s.Ca.Size4,
                            bold: !0
                        }, this.props.message)))
                    }, t
                }(a.Component))
        },
        lZZ2: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("fbdC"),
                l = n("BhFH"),
                d = n("QVaV"),
                u = n("aCAx"),
                m = n("Ue10");

            function p(e) {
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
                        return a.createElement(e, r.__assign({}, this.props, {
                            showBlockModal: this.showBlockModal
                        }))
                    }, n.prototype.renderBlockButton = function() {
                        return a.createElement(m.z, {
                            type: m.F.Alert
                        }, Object(s.d)("Block", "BlockModal"))
                    }, n.prototype.renderMessage = function(e, t) {
                        var n = Object(d.a)(e, t, !0);
                        return a.createElement(a.Fragment, null, a.createElement(m.Eb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            },
                            textAlign: m.Rb.Center
                        }, a.createElement(m.W, {
                            bold: !0,
                            type: m.Vb.H4
                        }, Object(s.d)("Block {displayName}?", {
                            displayName: n
                        }, "BlockModal"))), a.createElement(m.Eb, {
                            color: m.O.Alt2,
                            padding: {
                                top: 2
                            }
                        }, a.createElement(m.ec, {
                            baseFontSize: m.Ca.Size6
                        }, a.createElement("p", null, Object(s.d)("Blocking {displayName} will:", {
                            displayName: n
                        }, "BlockModal")), a.createElement("ul", null, a.createElement("li", null, Object(s.d)("Prevent them from sending you whispers", "BlockModal")), a.createElement("li", null, Object(s.d)("Prevent them from hosting you", "BlockModal")), a.createElement("li", null, Object(s.d)("Prevent them from adding you as a friend", "BlockModal")), a.createElement("li", null, Object(s.d)("Filter their messages out of chats you don’t moderate", "BlockModal"))))))
                    }, n
                }(a.Component)
            }
            var h = Object(o.compose)(Object(l.a)(), Object(i.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showConfirmationModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(u.d)(c.a, t)
                    }
                }, e)
            }), p);
            n.d(t, !1, function() {
                return p
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
        m9vr: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("Ue10"),
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(o.Xa, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(o.Xa, {
                            display: o.X.Flex,
                            flexGrow: 1,
                            alignItems: o.f.Center,
                            justifyContent: o.Wa.Center,
                            flexDirection: o.Aa.Column,
                            fullHeight: !0
                        }, a.createElement(o.sb, {
                            width: 48,
                            height: 48,
                            asset: o.tb.Lock,
                            type: o.ub.Alt2
                        }), a.createElement(o.Xa, {
                            display: o.X.Flex,
                            alignItems: o.f.Center,
                            flexDirection: o.Aa.Column,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(o.W, {
                            bold: !0,
                            fontSize: o.Ca.Size3
                        }, Object(i.d)("Access Denied", "DashboardAccessDenied")), a.createElement(o.W, {
                            fontSize: o.Ca.Size4,
                            color: o.O.Alt2
                        }, Object(i.d)("You don't have access to this dashboard", "DashboardAccessDenied")))))
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return s
            })
        },
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
        mdlQ: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("oJmH"),
                o = n("/MKj"),
                s = n("fvjX"),
                c = n("yR8l"),
                l = n("1/iK"),
                d = n("y5D0"),
                u = n("kRBY"),
                m = n("b+ID"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(m.a, null, this.props.children)
                    }, t
                }(a.Component),
                h = n("4p7I"),
                f = n("mLw1"),
                g = n("jKe7"),
                v = n("/7QA"),
                b = n("lZCe"),
                k = n("ZS2+"),
                y = n("ZDlU"),
                S = n("LA8z"),
                E = n("D7An"),
                _ = n("Gw3k"),
                C = n("nTF4"),
                O = n("EOHf"),
                D = n("gq0V"),
                N = n("m9vr"),
                T = n("6D3P"),
                w = n("9C/b"),
                j = n("DMoW"),
                I = n("idPT"),
                M = n("n/0j"),
                R = n("O3/n"),
                A = n("Pp1Y"),
                F = n("OTJN"),
                x = n("7Lz0"),
                U = {
                    "data-test-selector": "bounties-nav-link"
                },
                P = {
                    "data-test-selector": "bounties-nav-hotspot"
                },
                L = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.channelLogin;
                        return a.createElement(A.a, r.__assign({
                            linkTo: "/" + e + "/dashboard/bounties"
                        }, U), Object(v.d)("Bounty Board", "BountyBoardSideNavLink"), this.isNotificationVisible && a.createElement(F.a, r.__assign({}, P)))
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.isBountiesPage(e.location.pathname) && !this.isBountiesPage() && this.props.data.refetch()
                    }, Object.defineProperty(t.prototype, "isNotificationVisible", {
                        get: function() {
                            var e = this.props.data,
                                t = !!e.user && !!e.user.bountyBoardSettings && e.user.bountyBoardSettings.hasNotification;
                            return !e.loading && t && !this.isBountiesPage()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isBountiesPage = function(e) {
                        return void 0 === e && (e = this.props.location.pathname), !!e.match(/^(\/.*){2}\/bounties\/?$/i)
                    }, t
                }(a.Component),
                W = Object(s.compose)(w.a, Object(c.a)(x, {
                    options: function(e) {
                        return {
                            notifyOnNetworkStatusChange: !0,
                            fetchPolicy: "network-only",
                            variables: {
                                channeLogin: e.channelLogin
                            }
                        }
                    }
                }))(L),
                B = n("22qk"),
                V = n("3lt/"),
                z = "extensions_dashboard_notification_dismissed",
                G = function(e) {
                    var t = e.channelLogin,
                        n = {
                            pathname: Object(B.c)(t),
                            state: {
                                medium: V.PageviewMedium.DashboardLeftNav
                            }
                        };
                    return a.createElement(h.a, {
                        path: "/:channelLogin/dashboard/extensions"
                    }, function(e) {
                        var t = e.match;
                        return a.createElement("li", null, a.createElement(A.a, {
                            linkTo: n
                        }, Object(v.d)("Extensions", "DashboardNav"), function(e) {
                            if (e) return v.m.set(z, !0), !1;
                            return !v.m.get(z, !1)
                        }(t) && a.createElement(F.a, {
                            "data-test-selector": "extensions-nav-hotspot"
                        })))
                    })
                };
            var X, H = n("bRMw"),
                q = {
                    "data-test-selector": "activity-link-selector"
                },
                Q = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(a.Fragment, null, a.createElement(R.a, null, Object(v.d)("Dashboard", "DashboardNav")), a.createElement("ul", null, a.createElement("li", null, a.createElement(A.a, {
                            linkTo: "/" + this.props.channelLogin + "/dashboard/live"
                        }, Object(v.d)("Live", "DashboardNav"))), a.createElement(G, {
                            channelLogin: this.props.channelLogin
                        }), a.createElement("li", null, a.createElement(A.a, {
                            linkTo: "/" + this.props.channelLogin + "/dashboard/achievements"
                        }, Object(v.d)("Achievements", "DashboardNav"))), a.createElement("li", null, a.createElement(A.a, {
                            linkTo: "/" + this.props.channelLogin + "/dashboard/events"
                        }, Object(v.d)("Events", "DashboardNav"))), this.canAccessActivity && a.createElement("li", null, a.createElement(A.a, r.__assign({
                            linkTo: "/" + this.props.channelLogin + "/dashboard/activity"
                        }, q), Object(v.d)("Activity", "DashboardNav"))), a.createElement("li", null, a.createElement(A.a, {
                            linkTo: "/" + this.props.channelLogin + "/dashboard/broadcast"
                        }, Object(v.d)("Streaming Tools", "DashboardNav"))), this.canAccessBounties && a.createElement("li", null, a.createElement(W, {
                            channelLogin: this.props.channelLogin
                        })), Object(H.b)(H.a, this.props.channelLogin) && a.createElement("li", null, a.createElement(A.a, {
                            linkTo: "/" + this.props.channelLogin + "/dashboard/multiview"
                        }, Object(v.e)("Multiview", "DashboardNav")))))
                    }, Object.defineProperty(t.prototype, "canAccessBounties", {
                        get: function() {
                            var e = this.props.permissions,
                                t = e.isOwner,
                                n = e.isStaff,
                                r = e.isInBountyProgram;
                            return (t || n) && r
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "canAccessActivity", {
                        get: function() {
                            var e = this.props.permissions,
                                t = e.isOwner,
                                n = e.isStaff,
                                r = e.isSiteAdmin;
                            return t || n || r
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                K = n("5g1g"),
                Y = "consolidated_dashboard_settings",
                Z = {
                    "data-test-selector": "revenue-settings-link-selector"
                },
                $ = {
                    "data-test-selector": "settings-link-selector"
                },
                J = {
                    "data-test-selector": "moderation-link-selector"
                },
                ee = {
                    "data-test-selector": "moderation-settings-link-selector"
                },
                te = {
                    "data-test-selector": "permissions-link-selector"
                },
                ne = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isVIPBadgeEnabled = Object(D.b)(), t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.permissions.isOwner;
                        return e || this.canSeeAutoModSettings || this.hasRevenueSettings ? a.createElement(a.Fragment, null, a.createElement(R.a, null, Object(v.d)("Settings", "SettingsDashboardNav")), a.createElement("ul", null, e && a.createElement("li", null, a.createElement(A.a, r.__assign({
                            linkTo: "/" + this.props.channelLogin + "/dashboard/settings",
                            exact: !0
                        }, $), Object(v.d)("Channel", "SettingsDashboardNav"))), e && (this.isVIPBadgeEnabled ? a.createElement("li", null, a.createElement(A.a, {
                            linkTo: "/" + this.props.channelLogin + "/dashboard/roles"
                        }, Object(v.d)("Roles", "SettingsDashboardNav"))) : a.createElement("li", null, a.createElement(A.a, r.__assign({
                            linkTo: "/" + this.props.channelLogin + "/dashboard/permissions"
                        }, te), Object(v.d)("Permissions", "DashboardNav")))), this.canSeeAutoModSettings && a.createElement("li", null, a.createElement(A.a, r.__assign({
                            linkTo: "/" + this.props.channelLogin + "/dashboard/settings/automod"
                        }, J), Object(v.d)("Moderation", "SettingsDashboardNav"))), a.createElement(K.b, {
                            name: Y
                        }, a.createElement("li", null, a.createElement(A.a, r.__assign({
                            linkTo: "/" + this.props.channelLogin + "/dashboard/settings/moderation"
                        }, ee), Object(v.d)("Moderation Settings", "SettingsDashboardNav")))), this.hasRevenueSettings && a.createElement("li", null, a.createElement(A.a, r.__assign({
                            linkTo: "/" + this.props.channelLogin + "/dashboard/settings/revenue"
                        }, Z), this.revenueSettingsLabel)))) : null
                    }, Object.defineProperty(t.prototype, "canSeeAutoModSettings", {
                        get: function() {
                            return this.props.permissions.isOwner || this.props.permissions.isModerator || this.props.permissions.isStaff || this.props.permissions.isSiteAdmin
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasRevenueSettings", {
                        get: function() {
                            var e = this.props.permissions,
                                t = e.isOwner,
                                n = e.isStaff,
                                r = e.hasPayoutInvite,
                                a = e.isChannelAffiliate,
                                i = e.isChannelPartner;
                            return t && r || n && (a || i)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "revenueSettingsLabel", {
                        get: function() {
                            return this.props.permissions.hasExtensionsDeveloperInvite ? Object(v.d)("Extensions Developer", "SettingsDashboardNav") : Object(v.d)("Affiliate / Partner", "SettingsDashboardNav")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                re = n("kduP");
            ! function(e) {
                e.VideoProducerLink = "video-producer-link", e.VideoModerationLink = "video-moderation-link", e.CollectionsLink = "collections-link", e.ClipsLink = "clips-link"
            }(X || (X = {}));
            var ae = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(a.Fragment, null, a.createElement(R.a, null, Object(v.d)("Videos", "DashboardNav")), a.createElement("ul", null, a.createElement("li", null, a.createElement(A.a, {
                            "data-test-selector": X.VideoProducerLink,
                            linkTo: Object(re.d)(this.props.creatorLogin),
                            exact: !0
                        }, Object(v.d)("Video Producer", "DashboardNav"))), a.createElement("li", null, a.createElement(A.a, {
                            "data-test-selector": X.VideoModerationLink,
                            linkTo: "/" + this.props.creatorLogin + "/dashboard/moderation"
                        }, Object(v.d)("Video Moderation", "DashboardNav"))), a.createElement("li", null, a.createElement(A.a, {
                            "data-test-selector": X.CollectionsLink,
                            linkTo: "/" + this.props.creatorLogin + "/manager/collections"
                        }, Object(v.d)("Collections", "DashboardNav"))), a.createElement("li", null, a.createElement(A.a, {
                            "data-test-selector": X.ClipsLink,
                            linkTo: "/" + this.props.creatorLogin + "/manager/clips"
                        }, Object(v.d)("Clips", "DashboardNav")))))
                    }, t
                }(a.Component),
                ie = n("Ue10"),
                oe = function(e) {
                    var t = e.itemCount;
                    return a.createElement(a.Fragment, null, a.createElement(ie.Xa, {
                        margin: {
                            top: 2,
                            bottom: 1,
                            x: 1
                        }
                    }, a.createElement(ie.ib, {
                        height: 12,
                        width: 70
                    })), Array.from({
                        length: t
                    }).map(function(e, t) {
                        return a.createElement(ie.Xa, {
                            key: t,
                            margin: {
                                x: 1
                            },
                            padding: {
                                y: 1
                            }
                        }, a.createElement(ie.ib, {
                            height: 12,
                            width: 110
                        }))
                    }))
                },
                se = n("yyuU"),
                ce = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return a.createElement(le, null, a.createElement(oe, {
                            itemCount: 6
                        }), a.createElement(oe, {
                            itemCount: 2
                        }), a.createElement(oe, {
                            itemCount: 4
                        }), a.createElement(oe, {
                            itemCount: 3
                        }));
                        var e = this.props.match.params.channelLogin;
                        return a.createElement(le, null, a.createElement(Q, {
                            channelLogin: e,
                            permissions: this.permissions
                        }), a.createElement(M.b, {
                            channelLogin: e,
                            permissions: this.permissions,
                            streamSummaryQuery: this.props.streamSummaryQuery
                        }), a.createElement(ae, {
                            creatorLogin: e,
                            permissions: this.permissions
                        }), a.createElement(ne, {
                            channelLogin: e,
                            permissions: this.permissions
                        }))
                    }, Object.defineProperty(t.prototype, "permissions", {
                        get: function() {
                            var e = this.props,
                                t = e.data,
                                n = t.channel,
                                r = t.currentUser,
                                a = e.match.params.channelLogin,
                                i = e.sessionUser;
                            return {
                                isOwner: Boolean(i && i.login.toLowerCase() === a.toLowerCase()),
                                isSiteAdmin: Boolean(r && r.roles && r.roles.isSiteAdmin),
                                isStaff: Boolean(i && i.roles && i.roles.isStaff),
                                hasPayoutInvite: Boolean(n && n.payoutInvite && n.payoutInvite.category !== j.I.UNPAID_PARTNER),
                                hasExtensionsDeveloperInvite: Boolean(n && n.payoutInvite && n.payoutInvite.category === j.I.EXTENSIONS_DEVELOPER),
                                isInBountyProgram: Boolean(n && n.bountyBoardSettings && n.bountyBoardSettings.isEnabled),
                                isModerator: Boolean(n && n.self && n.self.isModerator),
                                isChannelAffiliate: Boolean(n && n.roles && n.roles.isAffiliate),
                                isChannelPartner: Boolean(n && n.roles && n.roles.isPartner)
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                le = function(e) {
                    var t = e.children;
                    return a.createElement(I.a, null, a.createElement(ie.Xa, {
                        display: ie.X.Flex,
                        flexDirection: ie.Aa.Column,
                        justifyContent: ie.Wa.Between
                    }, a.createElement(ie.Xa, {
                        margin: 1
                    }, t), a.createElement(ie.Eb, {
                        borderTop: !0,
                        padding: 2
                    }, a.createElement(ie.U, {
                        to: "https://www.twitch.tv/creatorcamp?tt_medium=owned_onsite_twitch&tt_content=creator_camp_creators_all_all_Dashboard&ttid=cd402988e1"
                    }, a.createElement(ie.W, {
                        fontSize: ie.Ca.Size5
                    }, Object(v.d)("Creator Camp", "DashboardSideNav"))))))
                };
            var de, ue = Object(s.compose)(w.a, Object(o.connect)(function(e) {
                    return {
                        sessionUser: Object(u.e)(e)
                    }
                }, void 0, void 0, {
                    areOwnPropsEqual: function(e, t) {
                        return e.location.pathname === t.location.pathname
                    }
                }), Object(c.a)(se, {
                    options: function(e) {
                        var t = e.match.params.channelLogin,
                            n = e.sessionUser;
                        return {
                            variables: {
                                channelLogin: t,
                                isChannelOwner: Boolean(n && n.login.toLowerCase() === t.toLowerCase())
                            }
                        }
                    }
                }))(ce),
                me = n("V+GM"),
                pe = n("NvVO"),
                he = n("2xye"),
                fe = n("GnwI"),
                ge = n("lBsv"),
                ve = n("IFXb"),
                be = n("cpGa"),
                ke = n("0us7"),
                ye = n("Map9"),
                Se = n("ybsN"),
                Ee = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(a.Fragment, null, a.createElement(ve.a, null, a.createElement(ge.a, {
                            message: Object(v.d)("Views by Source", "StreamSummaryReferralPage"),
                            backLinkTo: {
                                pathname: "/" + this.props.channelName + "/dashboard/stream-summary/" + this.props.streamSummaryID,
                                state: {
                                    content: he.PageviewContent.ReferralsBack,
                                    medium: he.PageviewMedium.StreamSummary
                                }
                            }
                        }), a.createElement(ye.a, {
                            query: this.props.streamSummaryQuery,
                            summaryID: this.props.streamSummaryID,
                            getURLForStreamSummary: Se.e
                        }, function(e) {
                            return a.createElement(be.a, {
                                isLoading: !e.current,
                                streamSummaries: e.current ? [e.current] : []
                            })
                        })), a.createElement(ke.a, null))
                    }, t
                }(a.Component),
                _e = Object(s.compose)(Object(fe.b)("StreamSummaryReferralsPage", {
                    destination: pe.a.ChannelDashboardStreamSummaryReferrals,
                    autoReportInteractive: !0
                }), Object(me.a)({
                    location: he.PageviewLocation.DashboardStreamSummaryReferrals
                }))(Ee),
                Ce = n("CFgy"),
                Oe = k.a.wrap(function() {
                    return n.e(183).then(n.bind(null, "5aAj"))
                }, "AchievementsPage"),
                De = k.a.wrap(function() {
                    return n.e(182).then(n.bind(null, "ffwK"))
                }, "ActivityPage"),
                Ne = k.a.wrap(function() {
                    return n.e(181).then(n.bind(null, "U5Uu"))
                }, "AutoModPage"),
                Te = k.a.wrap(function() {
                    return n.e(180).then(n.bind(null, "h4KP"))
                }, "BountiesPage"),
                we = k.a.wrap(function() {
                    return Promise.all([n.e(31), n.e(33), n.e(0), n.e(179)]).then(n.bind(null, "HURE"))
                }, "ChannelAnalyticsRoot"),
                je = k.a.wrap(function() {
                    return n.e(178).then(n.bind(null, "pC3c"))
                }, "ChannelClipsManagerPage"),
                Ie = k.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(177)]).then(n.bind(null, "RYh/"))
                }, "CollectionEditorPage"),
                Me = k.a.wrap(function() {
                    return n.e(176).then(n.bind(null, "/nn1"))
                }, "CollectionManagerPage"),
                Re = k.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(175)]).then(n.bind(null, "nLDR"))
                }, "CommentModeratorPage"),
                Ae = k.a.wrap(function() {
                    return n.e(174).then(n.bind(null, "7yAc"))
                }, "DashboardBroadcastPage"),
                Fe = k.a.wrap(function() {
                    return Promise.all([n.e(31), n.e(0), n.e(173)]).then(n.bind(null, "ZvSv"))
                }, "DashboardEventsRoot"),
                xe = k.a.wrap(function() {
                    return n.e(172).then(n.bind(null, "66IC"))
                }, "DashboardRevenueSettingsRoot"),
                Ue = k.a.wrap(function() {
                    return n.e(171).then(n.bind(null, "Le/2"))
                }, "DashboardModerationSettingsPage"),
                Pe = k.a.wrap(function() {
                    return n.e(170).then(n.bind(null, "hfrd"))
                }, "AutomodPage"),
                Le = k.a.wrap(function() {
                    return n.e(169).then(n.bind(null, "DUGL"))
                }, "BlockedTermsPage"),
                We = k.a.wrap(function() {
                    return n.e(168).then(n.bind(null, "G695"))
                }, "PermittedTermsPage"),
                Be = k.a.wrap(function() {
                    return n.e(167).then(n.bind(null, "m/zG"))
                }, "BannedChattersPage"),
                Ve = k.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(166)]).then(n.bind(null, "qNlw"))
                }, "DashboardSettingsRoot"),
                ze = k.a.wrap(function() {
                    return n.e(165).then(n.bind(null, "1Wpl"))
                }, "ExtensionDashboardRoot"),
                Ge = k.a.wrap(function() {
                    return n.e(164).then(n.bind(null, "mcoV"))
                }, "MultiviewPage"),
                Xe = k.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(163)]).then(n.bind(null, "gt/l"))
                }, "HighlighterPage"),
                He = k.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(162)]).then(n.bind(null, "5MA6"))
                }, "HighlighterPage"),
                qe = k.a.wrap(function() {
                    return Promise.all([n.e(31), n.e(33), n.e(0), n.e(161)]).then(n.bind(null, "QyLA"))
                }, "LivePage"),
                Qe = k.a.wrap(function() {
                    return n.e(178).then(n.bind(null, "pC3c"))
                }, "MyClipsManagerPage"),
                Ke = k.a.wrap(function() {
                    return n.e(160).then(n.bind(null, "Nly3"))
                }, "PermissionsPage"),
                Ye = k.a.wrap(function() {
                    return n.e(159).then(n.bind(null, "qcBk"))
                }, "RolesPage"),
                Ze = k.a.wrap(function() {
                    return n.e(158).then(n.bind(null, "djq7"))
                }, "RedirectToLatestArchiveHighlighter"),
                $e = k.a.wrap(function() {
                    return Promise.all([n.e(31), n.e(33), n.e(0), n.e(157)]).then(n.bind(null, "D5nk"))
                }, "StreamSummaryPage"),
                Je = k.a.wrap(function() {
                    return Promise.all([n.e(31), n.e(0), n.e(156)]).then(n.bind(null, "+AN2"))
                }, "VideoManagerPage");
            ! function(e) {
                e.TopNav = "top-nav", e.SideNav = "side-nav"
            }(de || (de = {}));
            var et = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isError: !1
                    }, t.consolidatedModerationSettingsFlag = "on" === v.b.get(Y, "off"), t.logger = v.p.logger.withCategory("dashboard-root"), t.isVIPBadgeEnabled = Object(D.b)(), t
                }
                return r.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                    var n = this;
                    this.setState({
                        isError: !0
                    }, function() {
                        v.p.stats.recordComponentError("DashboardRoot"), n.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                            info: t
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.data;
                    if (t.loading) return null;
                    if (this.state.isError || t.error) return a.createElement(y.a, {
                        message: Object(v.d)("An error occurred on this page", "DashboardRoot")
                    });
                    if (!this.props.isLoggedIn) return this.props.onAnonymousVisit(), a.createElement(y.a, {
                        message: Object(v.d)("You must be logged in to view this page", "DashboardRoot")
                    });
                    var n = t.user;
                    if (!n || !n.id) return a.createElement(S.a, null);
                    var i = this.props.isExpandedView;
                    return a.createElement(T.a, {
                        interval: Object(Ce.g)(30),
                        channelName: this.props.match.params.channelLogin
                    }, function(t) {
                        return a.createElement(ie.Xa, {
                            display: ie.X.Flex,
                            flexDirection: ie.Aa.Column,
                            flexWrap: ie.Ba.NoWrap,
                            fullHeight: !0
                        }, a.createElement(ie.Xa, {
                            "data-test-selector": de.TopNav,
                            display: i ? ie.X.Hide : void 0,
                            fullWidth: !0
                        }, a.createElement(_.a, null)), e.props.firstPageLoaded && a.createElement(C.a, null), a.createElement(ie.Xa, {
                            display: ie.X.Flex,
                            flexWrap: ie.Ba.NoWrap,
                            position: ie.jb.Relative,
                            overflow: ie.cb.Hidden,
                            fullHeight: !0
                        }, a.createElement(ie.Xa, {
                            "data-test-selector": de.SideNav,
                            display: i ? ie.X.Hide : void 0,
                            fullHeight: !0
                        }, a.createElement(ue, {
                            streamSummaryQuery: t
                        })), a.createElement(ie.Xa, {
                            position: ie.jb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            overflow: ie.cb.Hidden
                        }, a.createElement(g.a, null, a.createElement(h.a, {
                            path: "/:channelLogin/dashboard/achievements",
                            component: Oe
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/activity",
                            component: De
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/bounties/:selectedID",
                            component: Te
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/bounties",
                            component: Te
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/broadcast",
                            component: Ae
                        }), a.createElement(h.a, {
                            path: "/:channelName/dashboard/channel-analytics",
                            render: function(e) {
                                return a.createElement(we, r.__assign({
                                    streamSummaryQuery: t
                                }, e))
                            }
                        }), a.createElement(h.a, {
                            path: "/:channelName/dashboard/events",
                            component: Fe
                        }), a.createElement(h.a, {
                            path: "/:channelLogin/dashboard/extensions",
                            component: ze
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/live",
                            render: function() {
                                return a.createElement(qe, {
                                    streamSummariesQuery: t
                                })
                            }
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/moderation",
                            component: Re
                        }), a.createElement(h.a, {
                            path: "/:channelLogin/dashboard/multiview",
                            component: Ge
                        }), e.isVIPBadgeEnabled ? a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/roles",
                            render: function(t) {
                                return t.match.params.channelLogin === e.props.userLogin ? a.createElement(Ye, null) : a.createElement(N.a, null)
                            }
                        }) : a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/permissions",
                            component: Ke
                        }), e.isVIPBadgeEnabled && a.createElement(f.a, {
                            from: "/:channelLogin/dashboard/permissions",
                            to: "/:channelLogin/dashboard/settings/managed-channels"
                        }), !e.isVIPBadgeEnabled && a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/permissions",
                            component: Ke
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/revenue",
                            render: function(e) {
                                var t = e.match;
                                return a.createElement(f.a, {
                                    to: "/" + t.params.channelName + "/dashboard/channel-analytics"
                                })
                            }
                        }), e.consolidatedModerationSettingsFlag && a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings/moderation",
                            component: Ue
                        }), e.consolidatedModerationSettingsFlag && a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings/moderation/automod",
                            component: Pe
                        }), e.consolidatedModerationSettingsFlag && a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings/moderation/banned-chatters",
                            component: Be
                        }), e.consolidatedModerationSettingsFlag && a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings/moderation/blocked-terms",
                            component: Le
                        }), e.consolidatedModerationSettingsFlag && a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings/moderation/permitted-terms",
                            component: We
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/settings/automod",
                            component: Ne
                        }), a.createElement(h.a, {
                            path: "/:channelName/dashboard/settings/revenue",
                            component: xe
                        }), a.createElement(h.a, {
                            path: "/:channelLogin/dashboard/settings",
                            component: Ve
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/stats",
                            render: function(e) {
                                var t = e.match;
                                return a.createElement(f.a, {
                                    to: "/" + t.params.channelName + "/dashboard/channel-analytics"
                                })
                            }
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/stream-summary/:streamSummaryID/referrals",
                            render: function(e) {
                                var n = e.match;
                                return a.createElement(_e, {
                                    channelName: n.params.channelName,
                                    streamSummaryID: n.params.streamSummaryID,
                                    streamSummaryQuery: t
                                })
                            }
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/stream-summary/:streamSummaryID?",
                            render: function(e) {
                                var n = e.match;
                                return a.createElement($e, {
                                    channelName: n.params.channelName,
                                    streamSummaryID: n.params.streamSummaryID || "",
                                    streamSummaryQuery: t
                                })
                            }
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/streamkey",
                            render: function(e) {
                                var t = e.match;
                                return a.createElement(f.a, {
                                    to: "/" + t.params.channelName + "/dashboard/settings"
                                })
                            }
                        }), a.createElement(h.a, {
                            exact: !0,
                            path: "/:channelName/dashboard",
                            render: function(e) {
                                var t = e.match;
                                return a.createElement(f.a, {
                                    to: "/" + t.params.channelName + "/dashboard/live"
                                })
                            }
                        }), a.createElement(h.a, {
                            path: "/:channelName/dashboard",
                            component: O.a
                        }), a.createElement(h.a, {
                            path: "/:channelName/manager/clips/channel",
                            component: je
                        }), a.createElement(h.a, {
                            path: "/:channelName/manager/clips",
                            component: Qe
                        }), a.createElement(h.a, {
                            path: "/:channelName/manager/highlighter/:videoID",
                            render: function(e) {
                                return a.createElement(b.a, {
                                    name: E.b.VODCharizard,
                                    channel: e.match.params.channelName,
                                    assignments: {
                                        control: function() {
                                            return a.createElement(Xe, r.__assign({}, e))
                                        },
                                        variant1: function() {
                                            return a.createElement(He, r.__assign({}, e))
                                        },
                                        fallback: function() {
                                            return a.createElement(Xe, r.__assign({}, e))
                                        }
                                    }
                                })
                            }
                        }), a.createElement(h.a, {
                            path: "/:channelName/manager/highlighter",
                            component: Ze
                        }), a.createElement(h.a, {
                            path: "/:creatorLogin/manager/collections/:collectionID",
                            component: Ie
                        }), a.createElement(h.a, {
                            path: "/:creatorLogin/manager/collections",
                            component: Me
                        }), a.createElement(h.a, {
                            path: "/:channelName/manager",
                            component: Je
                        })))))
                    })
                }, t
            }(a.Component);
            var tt = Object(m.b)(function(e) {
                    return {
                        isExpandedView: e.isExpandedView
                    }
                })(et),
                nt = n("0yOi");
            var rt = Object(i.compose)(Object(c.a)(nt, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.match.params.channelLogin
                        }
                    }
                }
            }), Object(o.connect)(function(e) {
                var t = Object(u.e)(e);
                return {
                    isLoggedIn: Object(u.f)(e),
                    firstPageLoaded: e.session.firstPageLoaded,
                    userLogin: t && t.login,
                    userID: t && t.id,
                    isStaff: !!(t && t.roles && t.roles.isStaff)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    onAnonymousVisit: function() {
                        return Object(d.e)(l.a.DashboardPage)
                    }
                }, e)
            }))(function(e) {
                return a.createElement(p, null, a.createElement(tt, r.__assign({}, e)))
            });
            n.d(t, "DashboardRoot", function() {
                return rt
            })
        },
        mmRu: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                a = n("mrSG"),
                i = n("q1tI"),
                o = n("u5aL"),
                s = n("/7QA"),
                c = n("Ue10"),
                l = function(e) {
                    return i.createElement(c.A, {
                        icon: c.tb.Emoticons,
                        ariaLabel: Object(s.d)("Emote picker", "EmotePickerButton"),
                        type: e.isActive ? c.C.Default : c.C.Secondary,
                        onClick: e.onClick,
                        "data-a-target": "emote-picker-button"
                    })
                },
                d = n("oJmH"),
                u = n("fvjX"),
                m = n("lZCe"),
                p = n("ZS2+"),
                h = n("yR8l"),
                f = n("x7UT"),
                g = n("Mj6i"),
                v = n("UUve"),
                b = n("1/iK"),
                k = n("aCAx"),
                y = n("D7An"),
                S = n("kRBY"),
                E = n("+pBb"),
                _ = n("KriR"),
                C = n("GzyO"),
                O = n("OpME"),
                D = n("cpJf"),
                N = n("W8Fi"),
                T = n("0WFu"),
                w = function(e, t) {
                    return t.map(function(t) {
                        return t.emotes && t.emoteSetID && !e.has(parseInt(t.emoteSetID, 10)) ? a.__assign({}, t, {
                            emotes: t.emotes.map(function(e) {
                                return a.__assign({}, e, {
                                    isLocked: !0
                                })
                            })
                        }) : t
                    }).map(function(e) {
                        return a.__assign({}, e, {
                            emotes: Object(O.e)(e.emotes, e.emoteSetID)
                        })
                    })
                },
                j = function(e) {
                    return e.tier && !isNaN(parseInt(e.tier, 10)) ? parseInt(e.tier, 10) / 1e3 : 1
                },
                I = n("GnwI"),
                M = n("br9A"),
                R = n("TSYQ"),
                A = n("8/mp"),
                F = n("8Ad5");

            function x(e) {
                return e.charCode === F.a.Enter || e.charCode === F.a.Space
            }
            var U, P = n("2xye"),
                L = n("7SjK"),
                W = n("4rCz"),
                B = (n("/Kya"), function(e) {
                    var t = {
                            "emote-picker__tab": !0
                        },
                        n = null,
                        r = null;
                    if (e.channelTabVisible) {
                        var o = R(a.__assign({}, t, {
                            "emote-picker__tab--active": e.channelTabEnabled && e.channelTabSelected,
                            "emote-picker__tab--disabled": !e.channelTabEnabled
                        }));
                        n = i.createElement(c.Pa, {
                            padding: {
                                x: 1
                            }
                        }, i.createElement("div", {
                            key: "ChannelTabLink",
                            id: "emote-picker__channel",
                            className: o,
                            onClick: e.channelTabEnabled ? e.selectChannelTab : void 0,
                            onKeyPress: e.channelTabEnabled ? e.selectChannelTabKeypress : void 0,
                            "data-a-target": "emote-channel-tab",
                            tabIndex: 0
                        }, i.createElement("span", null, Object(W.d)("Channel", "EmotePicker"))))
                    }
                    if (e.allTabVisible) {
                        var s = R(a.__assign({}, t, {
                            "emote-picker__tab--active": !(e.channelTabSelected && e.channelTabEnabled)
                        }));
                        r = i.createElement(c.Pa, {
                            padding: {
                                x: 1
                            }
                        }, i.createElement("div", {
                            key: "allTabLink",
                            id: "emote-picker__all",
                            className: s,
                            onClick: e.selectAllTab,
                            onKeyPress: e.selectAllTabKeypress,
                            "data-a-target": "emote-all-tab",
                            tabIndex: 0
                        }, i.createElement("span", null, Object(W.d)("All", "EmotePicker"))))
                    }
                    return i.createElement(c.Eb, {
                        background: c.r.Base,
                        borderTop: !0,
                        className: "emote-picker__tabs-container"
                    }, n, r)
                }),
                V = n("DnOo"),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = [];
                        if (this.props.subscribeTexts)
                            for (var t = 0; t <= this.props.plan.level; t++) {
                                var n = this.props.subscribeTexts[t];
                                n && (t < this.props.plan.level ? (e.push(i.createElement("span", {
                                    key: "upsell-predicate:" + t
                                }, n)), e.push(i.createElement("span", {
                                    key: "upsell-plus:" + t
                                }, " + "))) : this.props.plan.level > 0 ? e.push(i.createElement("strong", {
                                    key: "upsell-strong-end:" + this.props.plan.level
                                }, n)) : e.push(i.createElement("span", {
                                    key: "upsell-end:" + t
                                }, n)))
                            }
                        if (!this.props.plan.emoteSetID) return null;
                        var r = {
                                id: this.props.plan.emoteSetID,
                                emotes: this.props.plan.emotes || []
                            },
                            a = {};
                        if (this.props.plan.tier) {
                            var o = Object(T.a)(this.props.plan.tier);
                            null === o && (o = 1), a.purchase = Object(s.d)("Tier { tierNum }", {
                                tierNum: o
                            }, "assembleSubscribeTexts")
                        }
                        return i.createElement(c.Xa, {
                            className: "emote-picker-plan-upsell",
                            display: c.X.Flex,
                            flexDirection: c.Aa.Column,
                            alignItems: c.f.Center,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(L.a, {
                            emotes: r.emotes,
                            locked: !0
                        }), i.createElement(c.Xa, {
                            margin: 1,
                            alignItems: c.f.Center
                        }, e), i.createElement(V.a, {
                            isSubbedToTier: !1,
                            tierPrice: a.purchase || "",
                            handleSubAction: this.props.handleSubAction,
                            productName: this.props.plan.name,
                            url: this.props.plan.url,
                            isEsportChannel: this.props.isEsportChannel
                        }))
                    }, t
                }(i.Component),
                G = (n("JGCS"), function(e) {
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
                                s.o.track(P.SpadeEventType.EmotePickerClickthrough, t)
                            }
                        }, n.closeOnEsc = function(e) {
                            e.keyCode === F.a.Esc && n.props.toggleVisibility()
                        }, n.handleFilterChange = function(e) {
                            var t = e.target.value,
                                r = t.toLowerCase(),
                                a = n.filterAvailableUpsells(n.props.availableUpsells, r),
                                i = n.filterEmoteSets(n.props.ownedChannelEmoteSets, r);
                            n.setState({
                                filter: r,
                                filteredAllEmoteSets: n.filterEmoteSets(n.props.allEmoteSets, r),
                                filteredAvailableUpsells: a,
                                filteredOwnedChannelEmoteSets: i,
                                inputValue: t,
                                channelTabEnabled: i.length > 0 || a.length > 0
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
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        if (e.channelID && e.emotePickerSessionID && !this.props.emotePickerSessionID) {
                            var t = {
                                channel_id: e.channelID,
                                emote_picker_sid: e.emotePickerSessionID,
                                generated_by: e.emotePickerSource,
                                chatroom_id: e.roomID
                            };
                            s.o.track(P.SpadeEventType.ViewedEmotePicker, t)
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
                        return i.createElement(c.u, {
                            "data-a-target": "emote-picker",
                            direction: this.props.direction ? this.props.direction : c.v.TopRight,
                            size: this.props.size ? this.props.size : c.w.Medium,
                            noTail: !0,
                            show: !0
                        }, i.createElement(c.Xa, {
                            className: R("emote-picker")
                        }, this.renderTabContent(), i.createElement(c.Xa, {
                            className: "emote-picker__controls-container",
                            position: c.jb.Relative
                        }, i.createElement(c.Eb, {
                            padding: 1,
                            borderTop: !0
                        }, i.createElement(c.Ra, {
                            autoFocus: !0,
                            onChange: this.handleFilterChange,
                            onKeyDown: this.closeOnEsc,
                            placeholder: Object(s.d)("Search for Emotes", "EmotePicker"),
                            type: c.Ta.Text,
                            value: this.state.inputValue
                        })), i.createElement(B, {
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
                        if (this.props.gqlError) t.push(i.createElement(c.Xa, {
                            key: "emotePicker-error"
                        }, i.createElement(c.W, {
                            color: c.O.Error
                        }, Object(s.d)("Unable to load available emotes.", "EmotePicker"))));
                        else if (this.props.loading) t.push(i.createElement(c.Xa, {
                            alignItems: c.f.Center,
                            display: c.X.Flex,
                            key: "loading",
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: c.Wa.Center
                        }, i.createElement(c.Za, {
                            key: "LoadingSpinner"
                        })));
                        else if (this.state.channelTabEnabled && this.state.channelTabSelected) {
                            if (this.state.filteredOwnedChannelEmoteSets.length > 0) {
                                var n = this.state.filteredOwnedChannelEmoteSets[0].emotes.map(function(t) {
                                    return t.setID = e.state.filteredOwnedChannelEmoteSets[0].id, t
                                });
                                t.push(i.createElement(c.Xa, {
                                    className: "emote-picker__content-block",
                                    key: "ownedChannelEmoteSets",
                                    padding: 1,
                                    position: c.jb.Relative
                                }, i.createElement(L.a, {
                                    emotes: n,
                                    onClickEmote: this.onClickEmote
                                })))
                            }
                            t = t.concat(this.state.filteredAvailableUpsells.map(function(t) {
                                return i.createElement(c.Xa, {
                                    className: "emote-picker__content-block",
                                    key: "planUpsell:" + t.level,
                                    padding: 1,
                                    position: c.jb.Relative
                                }, i.createElement(z, {
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
                            }), i.createElement(c.Xa, {
                                key: "emoteGrid" + t.id,
                                position: c.jb.Relative,
                                padding: {
                                    top: 1,
                                    bottom: 2
                                },
                                className: "emote-picker__content-block"
                            }, i.createElement(L.a, {
                                emotes: n,
                                onClickEmote: e.onClickEmote
                            }))
                        });
                        return t.length > 0 ? i.createElement(A.b, {
                            className: "emote-picker__tab-content"
                        }, i.createElement(c.Xa, {
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
                        for (var n = [], r = 0, a = e; r < a.length; r++) {
                            var i = a[r],
                                o = this.filterEmoteSet(i.emotes, t);
                            o.length > 0 && n.push({
                                id: i.id,
                                emotes: o
                            })
                        }
                        return n
                    }, t.prototype.filterAvailableUpsells = function(e, t) {
                        for (var n = [], r = 0, i = e; r < i.length; r++) {
                            var o = i[r];
                            if (o.emotes) {
                                var s = this.filterEmoteSet(o.emotes, t);
                                s.length > 0 && n.push(a.__assign({}, o, {
                                    emotes: s
                                }))
                            }
                        }
                        return n
                    }, t = a.__decorate([Object(I.b)("EmotePickerMenu", {
                        autoReportInteractive: !0
                    })], t)
                }(i.Component)),
                X = (n("zyUW"), function(e) {
                    var t = null;
                    return e.imgSrc && (t = i.createElement(i.Fragment, null, i.createElement(c.S, {
                        className: "emote-grid-section__header-image",
                        src: e.imgSrc,
                        alt: e.label
                    }), i.createElement(c.Xa, {
                        padding: {
                            right: .5
                        }
                    }))), i.createElement(c.Xa, {
                        position: c.jb.Relative,
                        padding: 1,
                        className: "emote-grid-section"
                    }, i.createElement(c.Eb, {
                        alignItems: c.f.Center,
                        display: c.X.Flex,
                        padding: {
                            x: 1,
                            bottom: .5
                        }
                    }, t, i.createElement(c.W, {
                        align: c.fc.Middle,
                        bold: !0,
                        color: c.O.Alt
                    }, e.label)), i.createElement(L.a, {
                        context: e.context,
                        emotes: e.emotes,
                        onClickEmote: e.onClickEmote,
                        spaced: !0
                    }))
                }),
                H = n("17x9"),
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.checkVisible = function(e, n) {
                            t.props.checkVisible(e, n)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.unregister = this.context.registerReceiver(this)
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return i.createElement(i.Fragment, null, this.props.children)
                    }, t.contextTypes = {
                        registerReceiver: H.func
                    }, t
                }(i.Component),
                Q = (n("cr2a"), function(e) {
                    return i.createElement(c.Xa, {
                        className: "emote-picker-tab-item " + (e.isActive ? "emote-picker-tab-item--active" : ""),
                        position: c.jb.Relative
                    }, i.createElement(c.Ua, {
                        "data-a-target": e.label,
                        onClick: e.onClick
                    }, i.createElement(c.Xa, {
                        padding: 1,
                        display: c.X.InlineFlex
                    }, i.createElement(c.sb, {
                        asset: e.icon
                    }))))
                }),
                K = n("a5fV"),
                Y = (n("GLn2"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
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
                                var n = j(e);
                                return j(t) - n
                            });
                        if (t && this.props.subUpsellClickedEmote.srcSet && this.props.channelDisplayName) {
                            var r = j(t),
                                o = Object(s.d)("Subscribe at Tier {tierNumber}", {
                                    tierNumber: r
                                }, "EmotePickerCard"),
                                l = [],
                                d = [];
                            n.forEach(function(e) {
                                if (j(e) <= r) {
                                    var t = e.emotes.map(function(e) {
                                        return a.__assign({}, e, {
                                            isLocked: !1
                                        })
                                    });
                                    d.push.apply(d, t)
                                } else l.push.apply(l, e.emotes)
                            });
                            var u = l.concat(d),
                                m = t.price.toString() || "";
                            if (t.priceInfo) {
                                var p = t.priceInfo;
                                m = Object(K.a)(Object(K.b)(p.total, p.exponent), p.currency)
                            }
                            return i.createElement(c.Xa, {
                                className: "emote-sub-upsell"
                            }, i.createElement(c.Eb, {
                                padding: {
                                    top: .5
                                }
                            }, i.createElement(c.z, {
                                type: c.F.Text,
                                icon: c.tb.AngleLeft,
                                onClick: this.props.onBackClick,
                                size: c.D.Small
                            }, Object(s.d)("Back", "EmotePickerCard"))), i.createElement(c.Eb, {
                                display: c.X.Flex,
                                padding: {
                                    x: 2,
                                    bottom: 1
                                }
                            }, i.createElement(c.Xa, {
                                flexGrow: 0,
                                flexShrink: 0,
                                padding: {
                                    top: .5
                                }
                            }, i.createElement(c.S, {
                                src: this.getBigImageSrc(this.props.subUpsellClickedEmote.srcSet),
                                alt: this.props.subUpsellClickedEmote.displayName || ""
                            })), i.createElement(c.Xa, {
                                flexGrow: 1,
                                flexShrink: 1,
                                padding: {
                                    left: 1
                                }
                            }, i.createElement(c.W, {
                                bold: !0
                            }, this.renderCopyHeader(r.toString())), i.createElement(c.W, null, this.renderCopyBody(r.toString(), d.length)))), i.createElement(c.Xa, {
                                display: c.X.Flex,
                                alignItems: c.f.Center,
                                justifyContent: c.Wa.Center,
                                padding: {
                                    x: 2
                                }
                            }, i.createElement(V.a, {
                                customSubscribeNowMessage: o,
                                isSubbedToTier: !1,
                                fullWidth: !0,
                                tierPrice: m,
                                handleSubAction: this.props.handleSubAction,
                                productName: t.name,
                                url: t.url,
                                isEsportChannel: this.props.isEsportChannel
                            })), i.createElement(c.ec, null, i.createElement("hr", {
                                className: "emote-sub-upsell__divider"
                            })), i.createElement(A.b, {
                                className: "emote-sub-upsell__content"
                            }, i.createElement(c.Xa, null, i.createElement(c.Xa, {
                                padding: {
                                    x: 2
                                }
                            }, i.createElement(c.W, {
                                bold: !0
                            }, Object(s.d)("{numUnlocked} Emotes Included", {
                                numUnlocked: d.length
                            }, "EmotePickerCard"))), i.createElement(c.Xa, {
                                padding: {
                                    x: 1,
                                    top: .5,
                                    bottom: 3
                                }
                            }, i.createElement(L.a, {
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
                }(i.Component)),
                Z = n("XQnt"),
                $ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        (!this.props.channelID || this.props.data && !this.props.data.loading) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return null === this.props.subUpsellClickedEmote ? null : i.createElement(Y, {
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
                                return w(this.props.ownedSetIDs, e)
                            }
                            return this.props.channelSubscriptionProducts
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                J = Object(d.compose)(Object(h.a)(Z, {
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
                }), Object(I.b)("EmoteSubUpsell"))($);
            ! function(e) {
                e.FrequentlyUsed = "frequently_used", e.CurrentChannel = "current_channel", e.OtherChannel = "other_subbed_channel", e.Unlocked = "unlocked", e.Global = "global"
            }(U || (U = {}));
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
                                s.o.track(P.SpadeEventType.EmotePickerClickthrough, r)
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
                                    return e.token.toLowerCase().includes(t)
                                }).forEach(function(t) {
                                    t.setID = e.id, n.push(t)
                                })
                            });
                            var r = Object(C.d)(),
                                a = 0 === Object.keys(r).length ? void 0 : r;
                            return Object(O.f)(n, t, a)
                        }, n.updateChannelEmotes = function(e) {
                            var t = e.channelSubscriptionProducts.reduce(function(e, t) {
                                return e.concat(t.emotes)
                            }, []);
                            if (0 === t.length || !e.channelDisplayName) return null;
                            var r = [],
                                a = [];
                            t.forEach(function(e) {
                                e.isLocked ? r.push(e) : a.push(e)
                            });
                            var i = a.concat(r);
                            n.setState({
                                sortedChannelEmotes: i
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.channelID) {
                            var e = {
                                channel_id: this.props.channelID,
                                emote_picker_sid: this.props.emotePickerSessionID,
                                generated_by: this.props.emotePickerSource,
                                chatroom_id: this.props.roomID
                            };
                            s.o.track(P.SpadeEventType.ViewedEmotePicker, e), this.updateChannelEmotes(this.props)
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.channelID !== e.channelID && this.updateChannelEmotes(e)
                    }, t.prototype.render = function() {
                        return i.createElement(c.u, {
                            "data-a-target": "emote-picker",
                            direction: this.props.direction ? this.props.direction : c.v.TopRight,
                            size: this.props.size ? this.props.size : c.w.Medium,
                            noTail: !0,
                            show: !0
                        }, i.createElement(c.Xa, {
                            className: "emote-picker"
                        }, this.renderView()))
                    }, t.prototype.renderView = function() {
                        var e = null;
                        return null === this.state.subUpsellClickedEmote && (e = i.createElement(i.Fragment, null, i.createElement(c.Eb, {
                            padding: {
                                top: 2,
                                x: 2
                            }
                        }, i.createElement(c.Ra, {
                            autoFocus: !0,
                            onChange: this.handleFilterChange,
                            placeholder: Object(s.d)("Search for Emotes", "EmotePickerCard"),
                            type: c.Ta.Text,
                            value: this.state.inputValue
                        })), this.renderTabContent())), i.createElement(i.Fragment, null, i.createElement(J, {
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
                        return this.props.gqlError ? i.createElement(c.Xa, null, i.createElement(c.W, {
                            "data-test-selector": "emote-picker-menu-error-text",
                            color: c.O.Error
                        }, Object(s.d)("Unable to load available emotes.", "EmotePickerCard"))) : this.props.loading ? i.createElement(c.Xa, {
                            alignItems: c.f.Center,
                            display: c.X.Flex,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: c.Wa.Center,
                            padding: 1
                        }, i.createElement(c.Za, null)) : "" !== this.state.filter ? this.renderSearchContent() : i.createElement(i.Fragment, null, i.createElement(A.b, {
                            scrollRef: this.saveScrollRef,
                            className: "emote-picker__tab-content"
                        }, i.createElement(c.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(q, {
                            checkVisible: this.checkVisible
                        }, this.getFrequentlyUsedEmoteGrid(), this.getCurrentChannelEmoteGrid(), this.getOtherSubEmoteGrids(), this.getResidualEmoteGrids()))), this.renderTabNav())
                    }, t.prototype.getFrequentlyUsedEmoteGrid = function() {
                        return 0 === this.props.frequentlyUsedEmotes.length ? null : i.createElement(c.Xa, {
                            refDelegate: this.saveFrequentlyUsedEmotesRef
                        }, i.createElement(X, {
                            context: U.FrequentlyUsed,
                            emotes: this.props.frequentlyUsedEmotes,
                            label: Object(s.d)("Frequently Used", "EmotePickerCard"),
                            onClickEmote: this.onClickEmote
                        }))
                    }, t.prototype.getCurrentChannelEmoteGrid = function() {
                        return 0 !== this.state.sortedChannelEmotes.length && this.props.channelDisplayName ? i.createElement(c.Xa, {
                            className: "emote-picker__content-block",
                            refDelegate: this.saveChannelEmotesRef
                        }, i.createElement(X, {
                            context: U.CurrentChannel,
                            emotes: this.state.sortedChannelEmotes,
                            imgSrc: this.props.channelProfileImageURL || void 0,
                            label: this.props.channelDisplayName,
                            onClickEmote: this.onClickEmote
                        })) : null
                    }, t.prototype.getOtherSubEmoteGrids = function() {
                        var e = this,
                            t = [];
                        return this.props.otherChannelEmoteSets.forEach(function(n) {
                            n.owner && n.owner.displayName && t.push(i.createElement(c.Xa, {
                                key: "emote-grid--" + n.id + "-emotes",
                                className: "emote-picker__content-block"
                            }, i.createElement(X, {
                                context: U.OtherChannel,
                                emotes: n.emotes,
                                imgSrc: n.owner.profileImageURL || void 0,
                                label: n.owner.displayName,
                                onClickEmote: e.onClickEmote
                            })))
                        }), i.createElement(i.Fragment, null, t)
                    }, t.prototype.getResidualEmoteGrids = function() {
                        var e = [];
                        return this.props.unlockedEmotes.length > 0 && e.push(i.createElement(c.Xa, {
                            key: "emote-grid--unlocked-emotes",
                            className: "emote-picker__content-block"
                        }, i.createElement(X, {
                            context: U.Unlocked,
                            emotes: this.props.unlockedEmotes,
                            label: Object(s.d)("Unlocked", "EmotePickerCard"),
                            onClickEmote: this.onClickEmote
                        }))), this.props.globalEmotes.length > 0 && e.push(i.createElement(c.Xa, {
                            key: "emote-grid--global-emotes",
                            className: "emote-picker__content-block"
                        }, i.createElement(X, {
                            context: U.Global,
                            emotes: this.props.globalEmotes,
                            label: Object(s.d)("Global", "EmotePickerCard"),
                            onClickEmote: this.onClickEmote
                        }))), i.createElement(c.Xa, {
                            refDelegate: this.saveAllEmotesRef
                        }, e)
                    }, t.prototype.renderSearchContent = function() {
                        var e = Object(s.d)('No Search Results for "{inputValue}"', {
                            inputValue: this.state.inputValue
                        }, "EmotePickerCard");
                        return this.state.filteredEmotes.length > 0 && (e = Object(s.d)('Search Results for "{inputValue}"', {
                            inputValue: this.state.inputValue
                        }, "EmotePickerCard")), i.createElement(A.b, {
                            className: "emote-picker__tab-content"
                        }, i.createElement(c.Xa, {
                            position: c.jb.Relative,
                            padding: {
                                x: 1,
                                top: 1,
                                bottom: 3
                            },
                            className: "emote-picker__content-block"
                        }, i.createElement(c.Eb, {
                            padding: {
                                x: 1
                            }
                        }, i.createElement(c.W, {
                            bold: !0
                        }, e)), i.createElement(L.a, {
                            emotes: this.state.filteredEmotes,
                            onClickEmote: this.onClickEmote,
                            spaced: !0
                        })))
                    }, t.prototype.renderTabNav = function() {
                        var e = null;
                        return this.state.sortedChannelEmotes.length > 0 && (e = i.createElement(Q, {
                            isActive: this.state.selectedNavTab === ee.ChannelEmotes,
                            label: ee.ChannelEmotes,
                            icon: c.tb.NavChannels,
                            onClick: this.onTabNavClick
                        })), i.createElement(c.Eb, {
                            background: c.r.Alt,
                            display: c.X.Flex,
                            className: "emote-picker__tab-nav-container"
                        }, i.createElement(Q, {
                            isActive: this.state.selectedNavTab === ee.FrequentlyUsedEmotes,
                            label: ee.FrequentlyUsedEmotes,
                            icon: c.tb.GlyphLength,
                            onClick: this.onTabNavClick
                        }), e, i.createElement(Q, {
                            isActive: this.state.selectedNavTab === ee.AllEmotes,
                            label: ee.AllEmotes,
                            icon: c.tb.EmoticonsAll,
                            onClick: this.onTabNavClick
                        }))
                    }, t
                }(i.Component),
                ne = n("DB+C"),
                re = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.handleSubEvent = function(e) {
                            e.action === M.a.ClickCheckout && n.checkAndDisplaySubscriptionCheckout(), Object(M.b)(a.__assign({}, e, {
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
                        return r = n.applyDataPropsToState(t, r), n.state = a.__assign({}, r), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(C.b)(), this.checkDataLoaded(this.props) && (this.props.onLoad && this.props.onLoad(this.checkForContent(this.props)), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (e.emoteSetsData && e.emoteSetsData.error || e.channelData && e.channelData.error) this.setState({
                            gqlError: !0
                        });
                        else {
                            var t = this.applyDataPropsToState(e, this.state);
                            this.props.pubsub.messages.subscriptionInfo !== e.pubsub.messages.subscriptionInfo && (this.props.channelData && this.props.channelData.refetch(), this.props.emoteSetsData && this.props.emoteSetsData.refetch()), this.checkDataLoaded(e) && (e.latencyTracking.reportInteractive(), e.onLoad && e.onLoad(this.checkForContent(e)), t.gqlLoading = !1), this.setState(a.__assign({}, t, {
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
                            t = i.createElement(G, {
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
                            n = i.createElement(te, {
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
                        return i.createElement(m.a, {
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
                        var n = a.__assign({}, t);
                        if (e.emoteSetsData && e.emoteSetsData.emoteSets && e.emoteSetsData.emoteSets.length > 0) {
                            n.ownedSetIDs = new Set;
                            for (var r = 0, i = e.emoteSetsData.emoteSets; r < i.length; r++) {
                                var o = i[r];
                                o && o.id && n.ownedSetIDs.add(parseInt(o.id, 10))
                            }
                            n.allEmoteSets = Object(O.a)(e.emoteSetsData.emoteSets);
                            var c = [],
                                l = [],
                                d = [];
                            n.allEmoteSets.forEach(function(t) {
                                t.owner || "0" !== t.id ? t.owner && "" !== t.owner.id ? e.channelData && e.channelData.user && e.channelData.user.id === t.owner.id || c.push(t) : d.push.apply(d, t.emotes) : l.push.apply(l, t.emotes)
                            }), n.otherChannelEmoteSets = function(e) {
                                var t = {};
                                e.forEach(function(e) {
                                    var n;
                                    e.owner && e.owner.id && (t[e.owner.id] ? (n = t[e.owner.id].emotes).push.apply(n, e.emotes) : t[e.owner.id] = a.__assign({}, e))
                                });
                                var n = [];
                                return Object.keys(t).forEach(function(e) {
                                    n.push(t[e])
                                }), n
                            }(c), n.globalEmotes = l, n.unlockedEmotes = d
                        }
                        if (e.channelData && e.channelData.user) {
                            var u = void 0;
                            e.channelData.user.self && e.channelData.user.self.subscriptionBenefit && (u = e.channelData.user.self.subscriptionBenefit.platform), n.availableUpsells = function(e, t, n) {
                                var r = [];
                                return !n || n !== D.b.IOS && n !== D.b.Android ? (t.forEach(function(n, i) {
                                    var o = n.price;
                                    0 === i && Object(N.g)(t) && (o = Object(N.c)(t[0])), n.emotes && n.emotes.length && n.emoteSetID && !e.has(parseInt(n.emoteSetID, 10)) && r.push(a.__assign({}, n, {
                                        emotes: Object(O.e)(n.emotes, n.emoteSetID),
                                        level: i,
                                        price: o
                                    }))
                                }), r) : r
                            }(n.ownedSetIDs, e.channelData.user.subscriptionProducts, u), n.channelDisplayName = e.channelData.user.displayName, n.channelProfileImageURL = e.channelData.user.profileImageURL, n.channelSubscriptionProducts = w(n.ownedSetIDs, e.channelData.user.subscriptionProducts), n.ownedChannelEmoteSets = function(e, t) {
                                for (var n = [{
                                        id: "0",
                                        emotes: []
                                    }], r = 0, a = t; r < a.length; r++) {
                                    var i = a[r];
                                    i.emotes && i.emoteSetID && e.has(parseInt(i.emoteSetID, 10)) && (n[0].emotes = n[0].emotes.concat(Object(O.e)(i.emotes, i.emoteSetID)))
                                }
                                return n[0].emotes.length ? n : []
                            }(n.ownedSetIDs, e.channelData.user.subscriptionProducts), n.subscribeTexts = function(e) {
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var r = e[n],
                                        a = Object(T.a)(r.tier);
                                    null === a && (a = 1), 0 === n && r.emotes && r.emotes.length > 1 ? t[n] = Object(s.d)("Unlock {numEmotes, number} Sub Emotes", {
                                        numEmotes: r.emotes.length
                                    }, "assembleSubscribeTexts") : 0 === n ? t[n] = Object(s.d)("Unlock 1 Sub Emote", "assembleSubscribeTexts") : r.emotes && r.emotes.length > 1 ? t[n] = Object(s.d)("{numEmotes, number} Extra Tier {tier} Sub Emotes", {
                                        numEmotes: r.emotes.length,
                                        tier: a
                                    }, "assembleSubscribeTexts") : r.emotes && r.emotes.length && (t[n] = Object(s.d)("1 Extra Tier {tier} Sub Emote", {
                                        tier: a
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
                                source: _.c.EmotePicker
                            }
                        }) : this.props.showLoginModal() : Object(v.e)())
                    }, t
                }(i.Component);
            var ae = Object(d.compose)(Object(r.connect)(function(e) {
                    return {
                        currentUserID: e.session.user && e.session.user.id,
                        emotePickerSessionID: e.chat && e.chat.emotePickerSessionID || null,
                        sessionUser: e.session.user,
                        isLoggedIn: Object(S.f)(e)
                    }
                }, function(e) {
                    return Object(u.bindActionCreators)({
                        closeEmotePicker: E.A,
                        openEmotePicker: E.M,
                        showLoginModal: Object(v.f)(b.a.EmotePickerSubscriptionButton),
                        showSubscriptionCheckoutModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(k.d)(p.a, {
                                component: "CheckoutModal",
                                loader: function() {
                                    return Promise.all([n.e(0), n.e(212)]).then(n.bind(null, "KJv/"))
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
                }]), Object(I.b)("EmotePicker"), Object(g.a)())(re),
                ie = function(e) {
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.inputRef && (this.props.inputRef.addEventListener("mouseenter", this.onInteraction), this.props.inputRef.addEventListener("focus", this.onInteraction))
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.inputRef && (this.props.inputRef.removeEventListener("mouseenter", this.onInteraction), this.props.inputRef.removeEventListener("focus", this.onInteraction))
                    }, t.prototype.render = function() {
                        var e = null;
                        this.state.isEmotePickerButtonVisible && (e = i.createElement(l, {
                            onClick: this.toggleEmotePicker,
                            isActive: this.state.isEmotePickerMenuVisible
                        }));
                        var t = null;
                        this.hasInteractedOrPageload && (t = i.createElement(ae, {
                            channelOwnerID: this.props.channelOwnerID,
                            emotePickerSource: this.props.emotePickerSource,
                            onClickEmote: this.onClickEmote,
                            onLoad: this.onEmotePickerDataLoaded,
                            toggleVisibility: this.toggleEmotePicker,
                            visible: this.state.isEmotePickerMenuVisible,
                            direction: this.props.direction
                        }));
                        var n = i.createElement(c.Xa, a.__assign({
                            className: "emote-picker-and-button"
                        }, this.layoutProps), e, t);
                        return this.props.shouldCloseOnClickOut ? i.createElement(o.a, {
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
                }(i.Component),
                oe = Object(I.b)("EmotePicker")(ie);
            var se = Object(r.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(oe);
            n.d(t, "a", function() {
                return se
            }), n.d(t, "c", function() {
                return ae
            }), n.d(t, !1, function() {
                return D.a
            }), n.d(t, !1, function() {
                return D.d
            }), n.d(t, !1, function() {
                return D.c
            }), n.d(t, !1, function() {
                return D.b
            }), n.d(t, "b", function() {
                return l
            })
        },
        "n/0j": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("2xye"),
                s = n("O3/n"),
                c = n("Pp1Y"),
                l = n("OTJN"),
                d = n("4p7I"),
                u = n("6D3P"),
                m = n("NAv5"),
                p = n("p46w"),
                h = {
                    get: function(e) {
                        var t = p.get("streamSummary" + e),
                            n = 0;
                        if (t) try {
                            n = JSON.parse(t).endTime
                        } catch (e) {}
                        return n
                    },
                    set: function(e, t) {
                        p.set("streamSummary" + e, {
                            wasSeen: !0,
                            endTime: t
                        }, {
                            expires: Object(m.addDays)(new Date, 30),
                            domain: "." + location.hostname.split(".").reverse().slice(0, 2).reverse().join(".")
                        })
                    }
                };
            var f = function(e) {
                return a.createElement(d.a, {
                    path: "/:channelName/dashboard/stream-summary/:sessionID?"
                }, function(t) {
                    return function(e, t) {
                        var n = t.streamSummaryQuery;
                        if (n.isLoading) return !1;
                        var r = t.lastSeenStore || h,
                            a = n.channel.id,
                            i = n.streamSummaries[n.streamSummaries.length - 1],
                            o = i && i.interval.end.getTime() || 0;
                        if (e && !e.params.sessionID) return r.set(a, o), !1;
                        var s = e && e.params.sessionID && u.b.intervalFromID(e.params.sessionID),
                            c = s && s.end.getTime();
                        if (c && c === o) return r.set(a, o), !1;
                        var l = r.get(a);
                        if (o <= l) return !1;
                        return !0
                    }(t.match, e) && e.children
                })
            };
            var g = {
                    "data-test-selector": "stream-summary-hotspot-selector"
                },
                v = {
                    "data-test-selector": "channel-analytics-hotspot-selector"
                },
                b = {
                    "data-test-selector": "channel-analytics-link-selector"
                },
                k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(a.Fragment, null, a.createElement(s.a, null, Object(i.d)("Analytics", "DashboardNav")), a.createElement("ul", null, a.createElement("li", null, a.createElement(c.a, r.__assign({}, b, {
                            linkTo: {
                                pathname: "/" + this.props.channelLogin + "/dashboard/channel-analytics",
                                state: {
                                    medium: o.PageviewMedium.DashboardLeftNav
                                }
                            }
                        }), Object(i.d)("Channel", "DashboardNav"), this.isChannelAnalyticsNew && a.createElement(l.a, r.__assign({}, v)))), a.createElement("li", null, a.createElement(c.a, {
                            linkTo: "/" + this.props.channelLogin + "/dashboard/stream-summary"
                        }, Object(i.d)("Stream Summary", "DashboardNav"), a.createElement(f, {
                            streamSummaryQuery: this.props.streamSummaryQuery
                        }, a.createElement(l.a, r.__assign({}, g)))))))
                    }, Object.defineProperty(t.prototype, "isChannelAnalyticsNew", {
                        get: function() {
                            return !i.m.get("seenChannelAnalytics", !1)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component);
            n.d(t, "a", function() {
                return "seenChannelAnalytics"
            }), n.d(t, !1, function() {
                return g
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, !1, function() {
                return b
            }), n.d(t, "b", function() {
                return k
            })
        },
        nlSm: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            });
            var r = function(e) {
                return e
            };

            function a(e, t) {
                void 0 === t && (t = r);
                var n = {
                    total: 0,
                    items: []
                };
                return e ? (n.items = e.map(function(e) {
                    return n.total += Number(e.value), {
                        name: t(e.key),
                        count: Number(e.value)
                    }
                }), n.items = n.items.sort(o), n) : n
            }

            function i(e) {
                var t = {
                        total: 0,
                        items: []
                    },
                    n = new Map;
                return e.forEach(function(e) {
                    t.total += e.total, e.items.forEach(function(e) {
                        n.set(e.name, (n.get(e.name) || 0) + e.count)
                    })
                }), n.forEach(function(e, n) {
                    t.items.push({
                        name: n,
                        count: e
                    })
                }), t.items = t.items.sort(o), t
            }

            function o(e, t) {
                return e.count === t.count ? e.name.localeCompare(t.name) : e.count > t.count ? -1 : 1
            }
        },
        o9uN: function(e, t, n) {},
        obKW: function(e, t, n) {},
        oe5X: function(e, t, n) {
            "use strict";
            var r = n("XmgI"),
                a = n("RcPG"),
                i = n("0FG4"),
                o = n("i6WW"),
                s = n("gTu3"),
                c = n("6j5V"),
                l = /^(['"*([{</]*)@((?:[^\u0000-\u007F]|[\w-])+)/;

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
                    v = p(e),
                    b = "",
                    k = 0;
                return m(v.reduce(function(e, t, m) {
                    if (h(t)) return b = "", e;
                    if (0 === b.length && (k = m), b += t, m !== v.length - 1 && !h(v[m + 1])) return e;
                    var p = u && Object(i.c)(b, k, u);
                    if (p) return e.concat(p);
                    var y = n && Object(r.e)(b, n);
                    if (y) return e.concat(y);
                    var S = f && Object(o.a)(b, f);
                    if (S) return e.concat(S);
                    var E = g && function(e, t) {
                        var n = e.match(l);
                        if (!n) return d(e, t.sessionUser) ? [{
                            type: a.a.CurrentUserHighlight,
                            content: e
                        }] : null;
                        var r = [],
                            i = n[1],
                            o = n[2],
                            u = e.slice(n[0].length);
                        i.length && r.push(Object(c.a)(i));
                        var m = s.a.Default;
                        return d(o, t.sessionUser) ? m = s.a.Recipient : t.sessionUser && t.sessionUser.login === t.senderLogin && (m = s.a.Sender), r.push({
                            type: a.a.Mention,
                            content: {
                                recipient: o,
                                currentUserMentionRelation: m
                            }
                        }), u.length && r.push(Object(c.a)(u)), r
                    }(b, g);
                    return E ? e.concat([E]) : e.concat(Object(c.a)(b))
                }, []))
            }

            function m(e) {
                return e.reduce(function(e, t, n) {
                    return 0 === n ? [].concat.call(e, t) : [].concat.call(e, Object(c.a)(" "), t)
                }, []).reduce(function(e, t, n) {
                    if (0 === n) return e.concat(t);
                    var r = e[e.length - 1];
                    return t.type === a.a.Text && r.type === a.a.Text ? (r.content = "" + r.content + t.content, e) : e.concat(t)
                }, [])
            }

            function p(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g) || []
            }

            function h(e) {
                return /\s/.test(e)
            }
            n.d(t, "a", function() {
                return u
            }), n.d(t, !1, function() {
                return m
            }), n.d(t, !1, function() {
                return p
            })
        },
        okS7: function(e, t, n) {
            "use strict";
            n("kPBf");
            var r, a = n("mrSG"),
                i = n("17x9"),
                o = n("q1tI"),
                s = n("8Ad5"),
                c = n("TSYQ"),
                l = n("/7QA"),
                d = n("u5aL"),
                u = n("8/mp"),
                m = n("Ue10"),
                p = (n("JzSO"), "autocomplete-balloon-matches"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.resizeAnimationFrame = 0, t.messages = {
                            noMatches: Object(l.d)("No matches.", "AutocompleteBalloon")
                        }, t.logger = l.k.withCategory("AutocompleteBalloon"), t.renderMatches = function() {
                            return t.props.matches.map(function(e, n) {
                                var r = t.state.selectedMatch,
                                    a = r && r.replacement === e.replacement,
                                    i = c("autocomplete-balloon__item", {
                                        "autocomplete-balloon__item--selected": a
                                    });
                                return o.createElement(m.Xa, {
                                    key: "autocomplete-match-" + n,
                                    refDelegate: a ? t.focusOnOption : void 0,
                                    "data-test-selector": p
                                }, o.createElement(m.Pa, {
                                    display: m.X.Block,
                                    fullWidth: !0
                                }, o.createElement("button", {
                                    onMouseEnter: t.handleMatchMouseEnter,
                                    className: i,
                                    "data-a-target": e.replacement,
                                    "data-click-index": n,
                                    onClick: t.onMatchClick
                                }, o.createElement(m.Xa, {
                                    padding: {
                                        x: .5
                                    },
                                    display: m.X.Flex,
                                    alignItems: m.f.Center
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
                                    var a = t.props.matches.indexOf(t.state.selectedMatch);
                                    if (-1 === a) return void t.logger.error(new Error, "The selected match was not found in props.matches.");
                                    r();
                                    var i = n === s.a.Up ? -1 : 1,
                                        o = t.getIndexWithinLength(a + i, t.props.matches.length),
                                        c = t.props.matches[o];
                                    t.setState({
                                        selectedMatch: c
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        return e = 0 === this.props.matches.length ? o.createElement(m.Xa, {
                            padding: {
                                x: .5
                            },
                            "data-test-selector": "autocomplete-balloon-no-matches"
                        }, o.createElement(m.W, {
                            type: m.Vb.Span,
                            color: m.O.Alt2
                        }, this.messages.noMatches)) : this.renderMatches(), o.createElement(m.Xa, {
                            position: m.jb.Relative
                        }, o.createElement(d.a, {
                            onClickOut: this.props.onDismiss
                        }, o.createElement(m.u, {
                            direction: m.v.TopLeft,
                            "data-a-target": "autocomplete-balloon",
                            "data-test-selector": "autocomplete-balloon",
                            show: !0
                        }, o.createElement(m.Pa, {
                            "data-test-selector": "autocomplete-matches-container",
                            className: "autocomplete-balloon",
                            overflow: m.cb.Hidden,
                            display: m.X.Flex,
                            flexDirection: m.Aa.Column
                        }, o.createElement("div", {
                            style: {
                                maxHeight: this.state.containerHeight
                            },
                            ref: this.setAutocompleteBalloonElement
                        }, o.createElement(u.b, null, o.createElement(m.Xa, {
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
                b = ":",
                k = "#",
                y = "@",
                S = function(e) {
                    switch (e) {
                        case f.a.Emote:
                            return b;
                        case f.a.Hashtag:
                            return k;
                        case f.a.Mention:
                            return y;
                        default:
                            return void l.k.warn("Chat Suggestions tracking was passed an unknown autocomplete type.")
                    }
                },
                E = function(e) {
                    var t = S(e.autocompleteType);
                    if (t) {
                        var n = {
                            channel: e.channelLogin,
                            completed_text: e.completedText,
                            source: e.source,
                            start_character: t
                        };
                        l.o.track(g.SpadeEventType.ChatSuggestionComplete, n)
                    }
                };
            ! function(e) {
                e.Input = "input", e.TextArea = "textarea"
            }(r || (r = {}));
            var _ = function(e) {
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
                                a = e.charCode || e.keyCode;
                            if (a !== s.a.Enter) {
                                switch (a) {
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
                            var a = n.substring(0, r);
                            if (0 === a.length || /\s/.test(a.substring(a.length - 1))) return t.resetDisplayState(), !1;
                            for (var i = a.split(/\s/), o = i[i.length - 1], s = 0, c = t.providers; s < c.length; s++) {
                                var l = c[s];
                                if (!e || l.canBeTriggeredByTab) {
                                    var d = l.getMatches(o, e);
                                    if (d) return t.setState({
                                        autocompleteType: l.autocompleteType,
                                        matchedCursorPosition: r,
                                        matches: d
                                    }), !0
                                }
                            }
                            return t.resetDisplayState(), !1
                        }, t.resetDisplayState = function(e, n) {
                            var r = a.__assign({}, t.state, {
                                autocompleteType: f.a.None,
                                matches: null
                            }, e || {});
                            t.setState(r, n)
                        }, t.insertReplacement = function(e) {
                            var n = t.state.value,
                                r = t.state.matchedCursorPosition,
                                i = n.substring(0, r),
                                o = i.lastIndexOf(e.current);
                            if (-1 === o) i = i.concat(e.replacement + " "), r = i.length;
                            else {
                                var s = i.substring(0, o),
                                    c = n.length > o + e.current.length ? n.substring(o + e.current.length) : "",
                                    l = c.startsWith(" ") ? e.replacement : e.replacement + " ";
                                i = "" + s + l + c, r = s.length + l.length
                            }
                            E(a.__assign({}, t.props.trackingParams || {}, {
                                autocompleteType: t.state.autocompleteType,
                                completedText: e.replacement,
                                source: t.props.suggestionSource
                            })), t.resetDisplayState({
                                value: i
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
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
                                l.o.track(g.SpadeEventType.ChatSuggestion, n)
                            }
                        }({
                            autocompleteType: t.autocompleteType,
                            source: e.suggestionSource
                        })
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        t.value !== this.state.value && this.props.onValueUpdate && this.props.onValueUpdate(this.state.value)
                    }, t.prototype.render = function() {
                        var e = a.__assign({}, this.props, {
                            onChange: this.onChange,
                            onKeyDown: this.onKeyDown,
                            refDelegate: this.setComponentRefDelegate,
                            value: this.state.value
                        });
                        return o.createElement(m.Xa, null, this.state.matches && o.createElement(h, {
                            matches: this.state.matches,
                            onMatchSelect: this.insertReplacement,
                            onDismiss: this.resetDisplayState,
                            containerElement: this.props.containerElement
                        }), this.props.componentType === r.Input ? o.createElement(m.Ra, a.__assign({}, e, {
                            type: e.type || m.Ta.Text
                        })) : o.createElement(m.Sb, a.__assign({}, e)), this.props.children)
                    }, t.prototype.getValue = function() {
                        return this.state.value
                    }, t.prototype.setValue = function(e) {
                        this.resetDisplayState({
                            value: e
                        })
                    }, t.childContextTypes = {
                        registerAutocompleteProvider: i.func
                    }, t
                }(o.Component),
                C = n("lZdE"),
                O = n("OpME"),
                D = (n("gDzh"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.autocompleteType = f.a.Emote, t.canBeTriggeredByTab = !1, t.getMatches = function(e) {
                            return e.startsWith(":") ? e.length < 3 ? null : t.getMatchedEmotes(e) : null
                        }, t.getMatchedEmotes = function(e) {
                            var n = t.state.hydratedEmotes;
                            if (!n || 0 === n.length) return null;
                            var r = e.substring(1),
                                a = n.reduce(function(e, n) {
                                    var a = n.emotes.filter(function(e) {
                                        if (e.token) return t.doesEmoteMatchTerm(e, r)
                                    });
                                    return e.concat([a])
                                }, []).filter(function(e) {
                                    return e.length > 0
                                }).reduce(function(e, t) {
                                    return e.concat(t)
                                }, []);
                            return a = Object(O.d)(a), (a = Object(O.f)(a, r)).map(function(e) {
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
                                a = new RegExp("^" + Object(C.a)(t.slice(1)), "i"),
                                i = e.token.match(r);
                            return !!(i && i.index && e.token.slice(i.index + 1).match(a))
                        }, t.renderEmoteSuggestion = function(e) {
                            return [o.createElement(m.Xa, {
                                padding: {
                                    right: .5
                                },
                                flexShrink: 0,
                                key: "emote-img-" + e.id
                            }, o.createElement("img", {
                                className: "emote-autocomplete-provider__image",
                                srcSet: e.srcSet
                            })), o.createElement(m.W, {
                                type: m.Vb.Span,
                                key: "emote-text-" + e.id,
                                ellipsis: !0
                            }, e.token)]
                        }, t.hydrateEmotes = function(e) {
                            for (var n = [], r = 0, a = e; r < a.length; r++) {
                                var i = a[r];
                                i && i.id && i.emotes && n.push({
                                    id: i.id,
                                    emotes: Object(O.b)(i.emotes)
                                })
                            }
                            t.setState({
                                hydratedEmotes: n
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
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
                        registerAutocompleteProvider: i.func
                    }, t
                }(o.Component));
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return _
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
        rSo7: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("/7QA");

            function a(e) {
                var t = Math.floor(e / 60),
                    n = e % 60;
                return t && n ? Object(r.d)("{hours, number}h{minutes, number}m", {
                    hours: t,
                    minutes: n
                }, "StreamSummaryDuration") : t ? Object(r.d)("{hours, number}h", {
                    hours: t
                }, "StreamSummaryDuration") : Object(r.d)("{minutes, number}m", {
                    minutes: n
                }, "StreamSummaryDuration")
            }
        },
        s3Y6: function(e, t, n) {},
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
        u2gS: function(e, t, n) {
            "use strict";
            var r, a = n("NAv5"),
                i = function() {
                    function e(e) {
                        Object.assign(this, e), this.progressRatio = e.progress / e.progressCap, this.isComplete = Boolean(this.completedAt)
                    }
                    return Object.defineProperty(e.prototype, "wasRecentlyCompleted", {
                        get: function() {
                            return Boolean(this.completedAt && Object(a.isAfter)(this.completedAt, Object(a.subDays)(new Date, 14)))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e
                }(),
                o = n("6XEL"),
                s = function() {
                    function e(e) {
                        void 0 === e && (e = []), this.topRecentlyCompleted = [], this.notCompleted = [], this.pastCompleted = [], this.all = [], this.topRecentlyCompletedMap = new Map, this.all = e, this.buildExclusiveGroups(), this.sortExclusiveGroups()
                    }
                    return e.prototype.nCompletedInRange = function(e, t) {
                        return this.all.filter(function(e) {
                            return e.completedAt && Object(a.isWithinRange)(e.completedAt, t.start, t.end)
                        }).sort(function(e, t) {
                            return Object(a.compareDesc)(e.completedAt, t.completedAt)
                        }).slice(0, e)
                    }, e.prototype.topNInProgress = function(e) {
                        return this.all.filter(function(e) {
                            return !e.completedAt && e.progressRatio
                        }).sort(function(e, t) {
                            return t.progressRatio - e.progressRatio
                        }).slice(0, e)
                    }, e.prototype.buildExclusiveGroups = function() {
                        var e = this;
                        this.all.forEach(function(t) {
                            if (t.wasRecentlyCompleted) {
                                var n = e.topRecentlyCompletedMap.get(t.key);
                                n ? n.level < t.level ? (e.topRecentlyCompletedMap.set(t.key, t), e.pastCompleted.push(n)) : e.pastCompleted.push(t) : e.topRecentlyCompletedMap.set(t.key, t)
                            } else t.isComplete ? e.pastCompleted.push(t) : e.notCompleted.push(t)
                        })
                    }, e.prototype.sortExclusiveGroups = function() {
                        this.topRecentlyCompleted = Object(o.d)(Array.from(this.topRecentlyCompletedMap.values()), [function(e) {
                            return e.completedAt
                        }, function(e) {
                            return e.level
                        }, function(e) {
                            return e.title
                        }], [o.a.Descending, o.a.Descending, o.a.Ascending]), this.notCompleted = Object(o.d)(this.notCompleted, [function(e) {
                            return e.progressRatio
                        }, function(e) {
                            return e.level
                        }, function(e) {
                            return e.title
                        }], [o.a.Descending, o.a.Ascending, o.a.Ascending]), this.pastCompleted = Object(o.d)(this.pastCompleted, [function(e) {
                            return e.completedAt
                        }, function(e) {
                            return e.level
                        }, function(e) {
                            return e.title
                        }], [o.a.Descending, o.a.Descending, o.a.Ascending])
                    }, e
                }(),
                c = n("jvBR");
            ! function(e) {
                e[e.None = 0] = "None", e[e.Affiliate = 1] = "Affiliate", e[e.Partner = 2] = "Partner"
            }(r || (r = {}));
            var l = n("CFgy"),
                d = n("j8bx");
            n("uRkz");
            n.d(t, "a", function() {
                return i
            }), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return c.a
            }), n.d(t, !1, function() {}), n.d(t, "d", function() {
                return r
            }), n.d(t, !1, function() {}), n.d(t, "f", function() {
                return l.d
            }), n.d(t, "e", function() {
                return d.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {})
        },
        uRkz: function(e, t) {},
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
                return b
            }), n.d(t, "g", function() {
                return k
            }), n.d(t, "l", function() {
                return y
            }), n.d(t, "o", function() {
                return S
            }), n.d(t, "n", function() {
                return E
            }), n.d(t, "k", function() {
                return _
            }), n.d(t, "m", function() {
                return C
            }), n.d(t, "i", function() {
                return O
            }), n.d(t, "e", function() {
                return D
            }), n.d(t, "d", function() {
                return N
            }), n.d(t, "b", function() {
                return T
            }), n.d(t, "f", function() {
                return w
            }), n.d(t, "c", function() {
                return j
            }), n.d(t, "q", function() {
                return M
            }), n.d(t, "p", function() {
                return R
            });
            var r, a, i, o, s, c, l = n("mrSG"),
                d = n("/7QA"),
                u = n("2xye"),
                m = n("mBWp");

            function p(e) {
                d.p.tracking.track(u.SpadeEventType.WhisperThreadMod, {
                    conversation_id: e.threadID,
                    action: e.action
                })
            }

            function h(e) {
                return l.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, I()];
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
                return l.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return l.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, I()];
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
                g(a.MarkAllRead)
            }

            function b() {
                g(a.EnableDoNotDisturb)
            }

            function k() {
                g(a.DisableDoNotDisturb)
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

            function E(e) {
                f(e, s.Archive)
            }

            function _(e) {
                p({
                    threadID: e,
                    action: i.Mute
                })
            }

            function C(e) {
                p({
                    threadID: e,
                    action: i.Unmute
                })
            }

            function O(e) {
                p({
                    threadID: e,
                    action: i.Expand
                })
            }

            function D(e) {
                p({
                    threadID: e,
                    action: i.Collapse
                })
            }

            function N(e) {
                p({
                    threadID: e,
                    action: i.Close
                })
            }

            function T(e) {
                p({
                    threadID: e,
                    action: i.Archive
                })
            }

            function w(e) {
                d.p.tracking.track(u.SpadeEventType.WhisperThreadCreate, {
                    conversation_id: e.threadID,
                    target_login: e.targetUserlogin,
                    source: "search_target_result",
                    search_result_rank: e.searchResultRank
                })
            }

            function j(e) {
                d.p.tracking.track(u.SpadeEventType.WhisperSearchClick, {
                    query: e.searchQuery,
                    source: "conversation_list",
                    rank: e.searchResultRank,
                    is_conversation: e.isConversation
                })
            }

            function I() {
                var e = this;
                return new Promise(function(t) {
                    setTimeout(function() {
                        return l.__awaiter(e, void 0, void 0, function() {
                            var e, n, r;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        e = null, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, d.p.apollo.client.query({
                                            query: m
                                        })];
                                    case 2:
                                        return e = a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), d.k.error(n, "Failed to make query for current user info in WhisperSent reporting"), [3, 4];
                                    case 4:
                                        return r = e && e.data && e.data.currentUser, t(r), [2]
                                }
                            })
                        })
                    })
                })
            }

            function M(e) {
                return l.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, I()];
                            case 1:
                                return t = n.sent(), d.p.tracking.track(u.SpadeEventType.WhisperSent, {
                                    to: e.targetUserLogin,
                                    from: t && t.login,
                                    player: "web",
                                    is_turbo: t && t.hasTurbo,
                                    conversation_id: e.threadID,
                                    availability: t && t.availability,
                                    room_type: e.inChannelChat ? c.Channel : c.Conversation
                                }), [2]
                        }
                    })
                })
            }

            function R(e) {
                return l.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, I()];
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
            }(a || (a = {})),
            function(e) {
                e.Mute = "mute", e.Unmute = "unmute", e.Expand = "maximize", e.Collapse = "minimize", e.Close = "close", e.Archive = "archive", e.Open = "open"
            }(i || (i = {})),
            function(e) {
                e.Dock = "dock", e.SpamPropmt = "dock_spam_cta"
            }(o || (o = {})),
            function(e) {
                e.Archive = "archive", e.MarkNotSpam = "mark_not_spam"
            }(s || (s = {})),
            function(e) {
                e.Channel = "channel", e.Conversation = "conversation"
            }(c || (c = {}))
        },
        vxFv: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("/7QA");

            function a(e) {
                var t = Math.round(100 * e) / 100;
                return .01 <= t ? Object(r.f)(t, "percent") : Object(r.d)("< 1%", "ReferralGroup")
            }
        },
        wPMx: function(e, t, n) {},
        "x0+1": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            alwaysShowMessage: !1
                        }, t.renderBody = function() {
                            return t.state.alwaysShowMessage ? t.props.messageBody : a.createElement("span", {
                                key: "deleted",
                                className: "chat-line__message--deleted"
                            }, a.createElement("a", {
                                href: "",
                                onClick: t.alwaysShowMessage
                            }, "<" + Object(i.d)("click to show", "MessageDeletedLine") + ">"))
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
                        return n ? Object(i.d)("{moderatorLogin} deleted {targetLogin}'s message: {body}", {
                            moderatorLogin: n,
                            targetLogin: t,
                            body: this.renderBody()
                        }, "MessageDeletedLine") : Object(i.d)("A moderator deleted {targetLogin}'s message: {body}", {
                            targetLogin: t,
                            body: this.renderBody()
                        }, "MessageDeletedLine")
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return o
            })
        },
        xWpe: function(e, t, n) {},
        xXlL: function(e, t, n) {
            "use strict";

            function r(e) {
                return {
                    id: "" + e.id,
                    start: e.start,
                    end: e.end
                }
            }

            function a(e) {
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

            function i(e) {
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
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            })
        },
        y4Ne: function(e, t, n) {},
        yCxs: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            });
            var r = n("mrSG"),
                a = n("cr+I"),
                i = n("CFgy"),
                o = n("dG1e"),
                s = n("ILsx");

            function c(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, c, l, d;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = "/v5/channels/" + e.id + "/analytics/sessions_summary", c = a.stringify(Object(i.i)(t)), l = [n, c].join("?"), [4, Object(o.a)({
                                    path: l
                                })];
                            case 1:
                                return (d = r.sent()).isError() ? [2, {
                                    isError: !0,
                                    streamSummaries: []
                                }] : [2, {
                                    isError: !1,
                                    streamSummaries: Object(s.b)(d.body, e)
                                }]
                        }
                    })
                })
            }
            n.d(t, "a", function() {
                return s.a
            })
        },
        ybsN: function(e, t, n) {
            "use strict";

            function r(e) {
                return "/" + e.channel.name + "/dashboard/stream-summary/" + e.id
            }

            function a(e) {
                return "/" + e.channel.name + "/dashboard/stream-summary/" + e.id + "/referrals"
            }
            var i = n("/7QA"),
                o = n("2xye");

            function s(e, t) {
                l(o.SpadeEventType.StreamSummarySpotlightImpression, {
                    type: e,
                    streamSummary: t
                })
            }

            function c(e, t) {
                l(o.SpadeEventType.StreamSummarySpotlightClick, {
                    type: e,
                    streamSummary: t
                })
            }

            function l(e, t) {
                var n = {
                    spotlight_type: t.type,
                    stream_time: t.streamSummary.interval.start.getTime() / 1e3
                };
                i.o.track(e, n)
            }
            n.d(t, "d", function() {
                return r
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "b", function() {
                return "clip"
            }), n.d(t, "c", function() {
                return "quest"
            }), n.d(t, "a", function() {
                return "achievement"
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            })
        },
        yyuU: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardSideNav"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isChannelOwner"
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
                                                value: "isSiteAdmin"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "channel"
                            },
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
                                        value: "payoutInvite"
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
                                                    value: "isChannelOwner"
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
                                                value: "category"
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
                                                value: "isModerator"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "bountyBoardSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isEnabled"
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
                                                value: "isAffiliate"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPartner"
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
                    end: 306
                }
            };
            n.loc.source = {
                body: "query DashboardSideNav($channelLogin: String! $isChannelOwner: Boolean!) {\ncurrentUser {\nid\nroles {\nisSiteAdmin\n}\n}\nchannel: user(login: $channelLogin) {\nid\npayoutInvite @include(if: $isChannelOwner) {\nid\ncategory\n}\nself {\nisModerator\n}\nbountyBoardSettings {\nisEnabled\n}\nroles {\nisAffiliate\nisPartner\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ziIX: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("Ue10"),
                o = (n("s3Y6"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(i.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(i.Ua, {
                            ariaLabel: this.props.ariaLabel,
                            border: !0,
                            borderRadius: i.x.Rounded,
                            onClick: this.props.onClick,
                            type: i.Va.Base
                        }, a.createElement(i.Eb, {
                            alignItems: i.f.Center,
                            borderRadius: i.x.Rounded,
                            className: "dashboard-menu-styled-button",
                            display: i.X.Flex,
                            elevation: 3,
                            justifyContent: i.Wa.Center
                        }, this.props.children)))
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return o
            })
        },
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