webpackJsonp([50], {
    "+Znq": function(e, t, n) {
        "use strict";
        var i = n("jetF");
        n.d(t, "a", function() {
            return i.a
        })
    },
    "0CQq": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsViewCount"
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
                                    value: "viewCount"
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
                end: 71
            }
        };
        n.loc.source = {
            body: "query ClipsViewCount($slug: ID!) {\nclip(slug: $slug) {\nid\nviewCount\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0Kuu": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsTitle"
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
                                    value: "title"
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
                end: 63
            }
        };
        n.loc.source = {
            body: "query ClipsTitle($slug: ID!) {\nclip(slug: $slug) {\nid\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0QL4": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsCurator"
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
                end: 92
            }
        };
        n.loc.source = {
            body: "query ClipsCurator($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\ndisplayName\nlogin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0Qe/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsInfoCard"
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
                end: 81
            }
        };
        n.loc.source = {
            body: "query ClipsInfoCard($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\nlogin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1EXI": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_UserCommunities"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                                    value: "userId"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 140
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_UserCommunities($userId: ID!) {\nuser(id: $userId) {\nid\ndirectories {\nnodes {\nid\nname\ndisplayName\ndirectoryType\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1OO3": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("7vx8"),
            r = 60,
            o = 60 * r,
            s = 24 * o,
            l = 7 * s,
            d = 4 * l,
            c = n("MApH");
        n.d(t, "a", function() {
            return u
        }), t.b = function(e) {
            var t = this;
            return Object(a.a)(c, {
                props: function(n) {
                    return {
                        banUserMutation: function(a, c) {
                            return void 0 === c && (c = null), i.__awaiter(t, void 0, void 0, function() {
                                var t, u;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, n.mutate({
                                                variables: {
                                                    input: {
                                                        channelID: t,
                                                        bannedUserLogin: a,
                                                        expiresIn: c && function(e) {
                                                            if (!e) return "0s";
                                                            var t = e,
                                                                n = "";
                                                            if (t > d) {
                                                                var i = Math.floor(t / d);
                                                                t -= i * d, n += i + "mo"
                                                            }
                                                            if (t > l) {
                                                                var a = Math.floor(t / l);
                                                                t -= a * l, n += a + "w"
                                                            }
                                                            if (t > s) {
                                                                var c = Math.floor(t / s);
                                                                t -= c * s, n += c + "d"
                                                            }
                                                            if (t > o) {
                                                                var u = Math.floor(t / o);
                                                                t -= u * o, n += u + "h"
                                                            }
                                                            if (t > r) {
                                                                var p = Math.floor(t / r);
                                                                t -= p * r, n += p + "m"
                                                            }
                                                            return t > 0 && (n += t + "s"), n
                                                        }(c)
                                                    }
                                                }
                                            })];
                                        case 2:
                                            return u = i.sent(), [2, u.data];
                                        case 3:
                                            throw i.sent(), new Error("Unable to ban user");
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            throw new Error("Ban user mutation is not ready");
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var u;
        ! function(e) {
            e.Forbidden = "FORBIDDEN", e.TargetNotFound = "TARGET_NOT_FOUND", e.TargetIsSelf = "TARGET_IS_SELF", e.TargetIsAnonymous = "TARGET_IS_ANONYMOUS", e.TargetIsMod = "TARGET_IS_MOD", e.TargetIsBroadcaster = "TARGET_IS_BROADCASTER", e.TargetIsStaff = "TARGET_IS_STAFF", e.TargetIsAdmin = "TARGET_IS_ADMIN", e.TargetIsGlobalMod = "TARGET_IS_GLOBAL_MOD", e.TargetIsAlreadyBanned = "TARGET_ALREADY_BANNED", e.DurationInvalid = "DURATION_INVALID"
        }(u || (u = {}))
    },
    "287o": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
        }(i || (i = {}))
    },
    "2BvQ": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Services_Spade_Video"
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
                end: 81
            }
        };
        n.loc.source = {
            body: "query Core_Services_Spade_Video($id: ID!) {\nvideo(id: $id) {\nid\nbroadcastType\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "2TZ0": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ClipsTitleEdit_UpdateClip"
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
                                value: "UpdateClipInput"
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
                            value: "updateClip"
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
                                    value: "clip"
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
                                    }]
                                }
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
            body: "mutation ClipsTitleEdit_UpdateClip($input: UpdateClipInput!) {\nupdateClip(input: $input) {\nclip {\nid\ntitle\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
    },
    "3Fw+": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (e < 0) return "";
            if (0 === e) return i;
            var t = e,
                n = Math.floor(t / 3600);
            return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
        };
        var i = "0h0m1s"
    },
    "3KVC": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return void 0 === e && (e = ""), i.test(e)
        }, t.b = function(e) {
            void 0 === e && (e = "");
            var t = e.match(i);
            if (null === t) return "";
            if (t && t.length > 0 && void 0 !== t.index) return t[1];
            return ""
        };
        var i = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?")
    },
    "3iBR": function(e, t, n) {
        "use strict";
        n.d(t, "m", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "i", function() {
            return d
        }), n.d(t, "k", function() {
            return c
        }), n.d(t, "j", function() {
            return u
        }), n.d(t, "l", function() {
            return p
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "h", function() {
            return v
        }), n.d(t, "d", function() {
            return h
        }), n.d(t, "e", function() {
            return f
        }), n.d(t, "f", function() {
            return k
        });
        var i, a = n("I89S"),
            r = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            o = "https://d3aqoihi2n8ty8.cloudfront.net",
            s = o + "/cheer",
            l = o + "/actions",
            d = 8e5,
            c = 1e4,
            u = 500,
            p = 1e3,
            m = "cheer",
            v = a.a.Purple,
            h = "FIRST_PARTY",
            f = "THIRD_PARTY",
            k = (i = {}, i[a.a.Gray] = "#979797", i[a.a.Purple] = "#9c3ee8", i[a.a.Green] = "#1db2a5", i[a.a.Blue] = "#0099fe", i[a.a.Red] = "#f43021", i[a.a.Yellow] = "#f3a71a", i)
    },
    "3ydF": function(e, t) {},
    "46tX": function(e, t, n) {
        "use strict";

        function i(e) {
            return a.test(e)
        }
        t.a = i, t.b = function(e) {
            return r.test(e)
        };
        var a = /Android/i,
            r = /chrome/i
    },
    "7B9K": function(e, t) {
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
    "8Wuk": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("2hJ3"),
            s = n("yDzg"),
            l = "https://www.facebook.com/sharer/sharer.php",
            d = "https://www.twitter.com/share",
            c = "https://www.reddit.com/submit",
            u = "https://vk.com/share.php",
            p = n("Odds");
        n("bdk8");
        n.d(t, "b", function() {
            return m
        }), n.d(t, "a", function() {
            return v
        });
        var m;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(m || (m = {}));
        var v = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? a.createElement("a", i.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(p._53)(n.props)), n.renderIcon()) : a.createElement("button", i.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(p._53)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(o.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return a.createElement(p._2, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, a.createElement(p._15, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== m.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case m.Twitter:
                            return "Twitter";
                        case m.Reddit:
                            return "Reddit";
                        case m.Facebook:
                            return "Facebook";
                        case m.VKontakte:
                            return "VKontakte";
                        case m.Copy:
                            return n.state.isCopied ? Object(r.d)("Copied", "SocialButton") : Object(r.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case m.Twitter:
                            return p._16.Twitter;
                        case m.Facebook:
                            return p._16.Facebook;
                        case m.VKontakte:
                            return p._16.VKontakte;
                        case m.Reddit:
                            return p._16.Reddit;
                        case m.Copy:
                        default:
                            return p._16.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case m.Twitter:
                            return e + "--twitter";
                        case m.Reddit:
                            return e + "--reddit";
                        case m.Facebook:
                            return e + "--facebook";
                        case m.VKontakte:
                            return e + "--vkontakte";
                        case m.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        i = e.type,
                        a = n.getUrl(),
                        r = t || "";
                    switch (i) {
                        case m.Reddit:
                            return function(e, t) {
                                return Object(s.a)(c, {
                                    url: e,
                                    title: t
                                })
                            }(a, r);
                        case m.VKontakte:
                            return function(e) {
                                return Object(s.a)(u, {
                                    url: e
                                })
                            }(a);
                        case m.Facebook:
                            return function(e) {
                                return Object(s.a)(l, {
                                    u: e
                                })
                            }(a);
                        case m.Twitter:
                            return function(e, t) {
                                return Object(s.a)(d, {
                                    url: e,
                                    text: t
                                })
                            }(a, r);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement(p._2, {
                    className: "social-button"
                }, a.createElement(p._43, {
                    label: this.getTooltipFromType(),
                    direction: p._45.Top
                }, this.renderLink()))
            }, t
        }(a.Component)
    },
    "A25+": function(e, t) {},
    A5Hr: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return b
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = (n.n(a), n("RH2O")),
            o = n("2KeS"),
            s = n("6sO2"),
            l = n("7vx8"),
            d = n("oIkB"),
            c = n("vH/s"),
            u = n("CSlQ"),
            p = n("LjAQ"),
            m = n("mw/a"),
            v = n("xwpJ"),
            h = n("LjAQ"),
            f = n("mmQh"),
            k = (n.n(f), n("mRH2")),
            g = (n.n(k), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        submitStatus: h.b.Unsubmitted
                    }, t.handleSubmit = function(e, n, a, r) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, o, l;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e !== p.a) return [3, 5];
                                        o = {
                                            userID: this.props.reportContext.targetUserID,
                                            communityID: a || "",
                                            reason: n
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(d.a)(o))];
                                    case 2:
                                        return i.sent(), s.n.tracking.track(c.SpadeEventType.CommunityModeration, {
                                            community_id: a,
                                            name: r,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: h.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), s.i.error(t, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: h.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        o = {
                                            description: n,
                                            reason: e,
                                            content: this.props.reportContext.contentType,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === m.a.Community && this.props.reportContext.extra && (o.description = Object(v.a)(this.props.reportContext.extra, n)), i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(d.a)(o))];
                                    case 7:
                                        return i.sent(), this.props.reportContext.contentType === m.a.Community && s.n.tracking.track(c.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: h.b.Success
                                        }), [3, 9];
                                    case 8:
                                        return l = i.sent(), s.i.error(l, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: h.b.MutationError
                                        }), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleChildError = function(e) {
                        return t.setState({
                            submitStatus: e
                        })
                    }, t.handleClose = function() {
                        t.props.onClose && t.props.onClose(t.state.submitStatus)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose()
                }, t.prototype.render = function() {
                    return a.createElement(h.c, {
                        onClose: this.handleClose,
                        onError: this.handleChildError,
                        onSubmit: this.handleSubmit,
                        reportContentType: this.props.reportContext.contentType,
                        submitStatus: this.state.submitStatus,
                        targetUserID: this.props.reportContext.targetUserID,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    })
                }, t
            }(a.Component)),
            b = Object(o.d)(Object(l.a)(f, {
                name: "reportUserInCommunity"
            }), Object(l.a)(k, {
                name: "reportUser"
            }), Object(u.d)("ReportUser"), Object(r.b)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(g)
    },
    CFVp: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = [r.a.Red, r.a.Blue, r.a.Green, r.a.Purple, r.a.Gray],
                i = new Map,
                s = n.map(function(t) {
                    var n = function(e, t) {
                        for (var n = [], i = {}, r = 0, s = l; r < s.length; r++)
                            for (var c = s[r], u = 0, p = d; u < p.length; u++) {
                                var m = p[u];
                                i[c] || (i[c] = {
                                    animated: new Map,
                                    static: new Map
                                });
                                var v = a(e, c, !0, t, m);
                                n.push(v), i[c].animated.set(m, v.url);
                                var h = a(e, c, !1, t, m);
                                n.push(h), i[c].static.set(m, h.url)
                            }
                        return {
                            id: e + ";" + t,
                            bits: t,
                            color: o.f[t],
                            images: n,
                            indexedImages: i
                        }
                    }(e, t);
                    return i.set(t, n), n
                });
            return {
                prefix: e,
                type: t,
                tiers: s,
                orderedTiers: s,
                indexedTiers: i
            }
        }

        function a(e, t, n, i, a) {
            var r = n ? "gif" : "png";
            return {
                theme: t,
                isAnimated: n,
                dpiScale: a,
                url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + i + "/" + a + "." + r
            }
        }
        t.a = function() {
            if (!c) {
                var e = [],
                    t = {};
                Object.keys(s).forEach(function(n) {
                    var a = i(n, s[n]);
                    e.push(a), t[n.toLowerCase()] = a
                }), c = {
                    orderedActions: e,
                    indexedActions: t
                }
            }
            return c
        }, t.b = function() {
            return u || (u = function(e) {
                return c ? c.indexedActions[e.toLowerCase()] : i(e, s[e])
            }("Cheer")), u
        };
        var r = n("I89S"),
            o = n("3iBR"),
            s = {
                Cheer: o.d,
                Kreygasm: o.d,
                Kappa: o.d,
                Muxy: o.e,
                Streamlabs: o.e,
                SwiftRage: o.d,
                VoHiYo: o.d
            },
            l = ["LIGHT", "DARK"],
            d = [1, 1.5, 2, 3, 4],
            c = null,
            u = null
    },
    E5Ip: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsViewTitleEdit"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "title"
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
                end: 90
            }
        };
        n.loc.source = {
            body: "query ClipsViewTitleEdit($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Ev5K: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsViewModerationModals"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 91
            }
        };
        n.loc.source = {
            body: "query ClipsViewModerationModals($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Fg4Y: function(e, t, n) {
        "use strict";

        function i(e) {
            return "https://www.twitch.tv/" + e
        }

        function a(e) {
            return function(e) {
                return i(y.c(e))
            }(e) + "/clips"
        }

        function r(e) {
            return i("/" + e)
        }

        function o(e, t) {
            var n = Object(b.a)(function(e) {
                return r(e) + "/clips"
            }(e), {
                tt_content: t
            });
            return Object(N.a)(window.navigator.userAgent) ? S(e, n) : n
        }

        function s(e) {
            return function(t) {
                return function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.messageHandlers = [], i.handlePlayerAdded = function() {
                            i.getPlayer() && !i.isConnected && (i.isConnected = !0, Ne.off(Ce, i.handlePlayerAdded), Ne.on(Se, i.handlePlayerRemoved), window.addEventListener("message", i.onIncomingPlayerMessage))
                        }, i.handlePlayerRemoved = function() {
                            !i.getPlayer() && i.isConnected && (i.isConnected = !1, Ne.off(Se, i.handlePlayerRemoved), Ne.on(Ce, i.handlePlayerAdded), window.removeEventListener("message", i.onIncomingPlayerMessage))
                        }, i.sendMessage = function(e) {
                            var t = i.getPlayer();
                            t && t.postMessage(e, C)
                        }, i.onIncomingPlayerMessage = function(e) {
                            e.origin === C && e.data.namespace === Te && i.messageHandlers.forEach(function(t) {
                                t(e.data)
                            })
                        }, i.updatePlayerProps = function(t) {
                            if (e.requestedPlayerProps && (t.method === _e || t.method === Ee)) {
                                var n = t.args[0],
                                    a = e.requestedPlayerProps.reduce(function(e, t) {
                                        var a = n[t];
                                        return void 0 !== a && i.state.playerProps[t] !== a && (e[t] = a), e
                                    }, {});
                                Object.keys(a).length && i.setState({
                                    playerProps: c.__assign({}, i.state.playerProps, a)
                                })
                            }
                        }, e.requestedPlayerProps && i.messageHandlers.push(i.updatePlayerProps), i.state = {
                            playerProps: {}
                        }, i
                    }
                    return c.__extends(i, n), i.prototype.componentWillMount = function() {
                        Ne.on(Ce, this.handlePlayerAdded)
                    }, i.prototype.componentWillUnmount = function() {
                        Ne.off(Ce, this.handlePlayerAdded), Ne.off(Se, this.handlePlayerRemoved)
                    }, i.prototype.render = function() {
                        var e = {
                            playerConnection: {
                                sendMessage: this.sendMessage,
                                registerMessageHandler: this.registerMessageHandler,
                                playerProps: this.state.playerProps
                            }
                        };
                        return u.createElement(t, c.__assign({}, this.props, e))
                    }, i.prototype.getPlayer = function() {
                        return ye[e.playerId(this.props)]
                    }, i.prototype.registerMessageHandler = function(e) {
                        this.messageHandlers.push(e)
                    }, i.displayName = s.name + "(" + (t.displayName || t.name) + ")", i
                }(u.Component)
            }
        }

        function l(e, t, n) {
            return {
                args: [n],
                method: e,
                namespace: t
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d, c = n("TToO"),
            u = n("U7vG"),
            p = n("6sO2"),
            m = n("7vx8"),
            v = n("CSlQ"),
            h = n("Odds"),
            f = n("tGx1");
        ! function(e) {
            e.top = "top", e.similar = "similar", e.game = "game", e.broadcaster = "broadcaster", e.curator = "curator"
        }(d || (d = {}));
        var k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderRowTypesOrdered = [d.similar, d.broadcaster, d.game, d.top], t.renderRow = function(e) {
                        return u.createElement("div", {
                            key: e
                        }, function(e, t) {
                            switch (e) {
                                case d.top:
                                    return Object(p.d)("Popular Clips", "ClipsRecommendations");
                                case d.similar:
                                    return Object(p.d)("Similar Clips", "ClipsRecommendations");
                                case d.game:
                                    return Object(p.d)("Popular Clips from {game}", {
                                        game: t.data.clip.game.displayName
                                    }, "ClipsRecommendations");
                                case d.broadcaster:
                                    return Object(p.d)("Popular Clips from {channel}", {
                                        channel: t.data.clip.broadcaster.displayName
                                    }, "ClipsRecommendations");
                                default:
                                    return null
                            }
                        }(e, t.props), t.props.data.clip.relatedClips[e].map(t.renderClip))
                    }, t.renderClip = function(e) {
                        return u.createElement("div", {
                            key: e.id
                        }, e.id)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.clip ? u.createElement(h._2, null, this.renderRowTypesOrdered.map(this.renderRow)) : u.createElement(h._2, null)
                }, t = c.__decorate([Object(v.d)("ClipsRecommendations"), Object(m.a)(f)], t)
            }(u.Component),
            g = n("hdYS"),
            b = n("yDzg"),
            y = n("NY9D"),
            C = "https://player.twitch.tv",
            S = function(e, t) {
                return "intent://stream/" + e + "#Intent;scheme=twitch;package=tv.twitch.android.app;S.browser_fallback_url=" + t + ";end"
            },
            N = n("46tX"),
            _ = n("U5tC"),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? u.createElement(h._2, {
                        padding: 1,
                        display: h.N.Flex,
                        alignItems: h.c.Center
                    }, u.createElement("a", {
                        target: "_blank",
                        href: o(this.props.data.clip.broadcaster.login, "player_profile_img")
                    }, u.createElement(h.l, {
                        src: this.props.data.clip.broadcaster.profileImageURL,
                        alt: Object(p.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                        size: 30
                    })), u.createElement(h._2, {
                        display: h.N.Flex,
                        flexDirection: h.P.Column,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        }
                    }, u.createElement("a", {
                        href: o(this.props.data.clip.broadcaster.login, "player_profile_img")
                    }, u.createElement(h._35, {
                        fontSize: h.R.Size4,
                        type: h._40.Span
                    }, this.props.data.clip.broadcaster.displayName), !!this.props.data.clip.broadcaster.stream && u.createElement(h._2, {
                        margin: {
                            left: .5
                        },
                        display: h.N.InlineBlock
                    }, u.createElement(h._6, {
                        label: Object(p.d)("LIVE", "ClipsBroadcasterInfo"),
                        type: h._7.Live
                    }))), u.createElement(h._2, null, u.createElement(h._35, {
                        color: h.I.Alt2,
                        fontSize: h.R.Size5
                    }, this.props.data.clip.game && Object(p.d)("playing {gameName}", {
                        gameName: u.createElement("a", {
                            target: "_blank",
                            href: Object(b.a)(a(this.props.data.clip.game.name), {
                                tt_medium: "clips_web"
                            })
                        }, this.props.data.clip.game.displayName)
                    }, "ClipsBroadcasterInfo")))), u.createElement(g.a, {
                        isHostedFollow: !1,
                        channelLogin: this.props.data.clip.broadcaster.login
                    })) : u.createElement(h._2, null)
                }, t = c.__decorate([Object(v.d)("ClipsBroadcasterInfo"), Object(m.a)(_)], t)
            }(u.Component),
            w = n("3Fw+"),
            T = n("J4ib"),
            I = n("dQ/z"),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.clip) return u.createElement(h._2, null);
                    var e;
                    return e = this.props.data.clip.video ? u.createElement(h.u, {
                        targetBlank: !0,
                        linkTo: Object(b.a)(function(e) {
                            return i("videos/" + e)
                        }(this.props.data.clip.video.id), {
                            t: Object(w.a)(this.props.data.clip.video.offsetSeconds),
                            tt_medium: "clips_web",
                            tt_content: "full_vod_button"
                        })
                    }, Object(T.d)("Watch Full Video", "ClipsFullVideoButton")) : u.createElement(h.u, {
                        disabled: !0
                    }, Object(T.d)("Full Video Unavailable", "ClipsFullVideoButton")), u.createElement(h._2, {
                        display: h.N.InlineBlock
                    }, e)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(v.d)("ClipsFullVideoButton"), Object(m.a)(I)], t)
            }(u.Component),
            D = n("RH2O"),
            F = n("Aj/L"),
            R = n("0QL4"),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.clip) return u.createElement(h._2, null);
                    var e = Object(b.a)(r(this.props.data.clip.curator.login), {
                        tt_medium: "clips_web",
                        tt_content: "curator_name"
                    });
                    return u.createElement(h._2, null, Object(p.d)("clipped by {curatorName}", {
                        curatorName: u.createElement("a", {
                            href: e,
                            target: "_blank"
                        }, this.props.data.clip.curator.displayName)
                    }, "ClipsCurator"))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(v.d)("ClipsCurator"), Object(m.a)(R)], t)
            }(u.Component),
            j = n("0Kuu"),
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? u.createElement(h._2, {
                        display: h.N.InlineBlock
                    }, this.props.data.clip.title) : u.createElement(h._2, null)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(v.d)("ClipsTitle"), Object(m.a)(j)], t)
            }(u.Component),
            M = n("0CQq"),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? u.createElement(h._2, {
                        display: h.N.Flex,
                        alignItems: h.c.Center
                    }, !this.props.hideSymbol && u.createElement(h._15, {
                        asset: h._16.GlyphViews,
                        type: h._17.Brand
                    }), u.createElement(h._35, {
                        bold: !0,
                        type: h._40.Span
                    }, Object(p.d)("{views} views", {
                        views: Object(p.e)(this.props.data.clip.viewCount)
                    }, "ClipsViewCount"))) : u.createElement(h._2, null)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(v.d)("ClipsViewCount"), Object(m.a)(M)], t)
            }(u.Component),
            A = n("vH/s"),
            V = n("QIXk"),
            B = n("E5Ip"),
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error ? u.createElement(h._2, null) : u.createElement(h._2, {
                        className: "clips-view-title-edit"
                    }, u.createElement(V.a, {
                        clipId: this.props.data.clip.id,
                        clipSlug: this.props.slug,
                        clipTitle: this.props.data.clip.title,
                        clipBroadcasterId: this.props.data.clip.broadcaster ? Number(this.props.data.clip.broadcaster.id) : 0,
                        location: A.PageviewLocation.ClipsViewing,
                        onCancel: this.props.editTitleToggle,
                        onSuccess: this.props.editTitleToggle
                    }))
                }, t = c.__decorate([Object(v.d)("ClipsViewTitleEdit"), Object(m.a)(B)], t)
            }(u.Component),
            q = n("0Qe/"),
            G = (n("kwWj"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingTitle: !1
                    }, t.renderClipTitleContent = function() {
                        var e = t.props.data.clip && t.props.data.clip.curator.login,
                            n = t.props.slug;
                        if (t.state.isEditingTitle) return u.createElement(P, {
                            slug: n,
                            editTitleToggle: t.editTitleToggle
                        });
                        var i = u.createElement(h._2, {
                            margin: {
                                y: 1
                            }
                        }, u.createElement(x, {
                            slug: n
                        }));
                        return t.props.userLogin !== e ? u.createElement(h._2, null, u.createElement(h._35, {
                            fontSize: h.R.Size2,
                            type: h._40.Span
                        }, u.createElement(U, {
                            slug: n
                        })), i) : u.createElement(h._2, {
                            display: h.N.InlineBlock
                        }, u.createElement("div", {
                            className: "clips-info-card-edit",
                            onClick: t.editTitleToggle,
                            "data-test-selector": "clips-info-card-edit"
                        }, u.createElement(h._35, {
                            fontSize: h.R.Size2,
                            type: h._40.Span
                        }, u.createElement(U, {
                            slug: n
                        }), u.createElement(h._15, {
                            asset: h._16.Edit
                        }))), i)
                    }, t.editTitleToggle = function() {
                        t.setState({
                            isEditingTitle: !t.state.isEditingTitle
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(h._2, {
                        className: "clips-info-card"
                    }, u.createElement(h._2, {
                        margin: 1
                    }, u.createElement(L, {
                        slug: this.props.slug
                    })), u.createElement(h._2, {
                        margin: {
                            x: .5
                        },
                        padding: {
                            x: .5
                        }
                    }, this.renderClipTitleContent()))
                }, t = c.__decorate([Object(m.a)(q), Object(v.d)("ClipsInfoCard", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component)),
            H = Object(D.b)(function(e) {
                var t = Object(F.c)(e);
                return {
                    userLogin: t && t.login
                }
            })(G),
            Q = n("2KeS"),
            $ = n("+xm8"),
            W = n("f2i/"),
            z = n("+Znq"),
            K = n("oIkB"),
            Y = n("287o"),
            J = function() {
                return function(e) {
                    var t = this;
                    this.timerId = null, this.start = function() {
                        t.timerId && t.stop(), t.timerId = setInterval(t.onInterval, t.intervalMillis)
                    }, this.stop = function() {
                        t.timerId && (clearInterval(t.timerId), t.timerId = null)
                    }, this.restart = function(e) {
                        void 0 === e && (e = 0), t.stop(), t.timerId = setTimeout(function() {
                            t.onInterval(), t.start()
                        }, e)
                    }, this.onInterval = e.onInterval, this.intervalMillis = e.intervalMillis
                }
            }(),
            X = n("HW6M"),
            Z = n("l21v"),
            ee = (n("A25+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.addReaction = function() {
                        return t.props.addClipReaction(t.props.emote)
                    }, t.removeReaction = function() {
                        return t.props.removeClipReaction(t.props.emote)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = X("clips-emote-button", {
                        "clips-emote-button-selected": this.props.hasReacted
                    });
                    return u.createElement(h.W, {
                        display: h.N.InlineBlock,
                        padding: .5
                    }, u.createElement("div", {
                        className: e,
                        onClick: this.props.hasReacted ? this.removeReaction : this.addReaction,
                        "data-test-selector": "clips-emote-button"
                    }, u.createElement(h._2, {
                        display: h.N.Flex,
                        alignContent: h.b.Center
                    }, u.createElement("img", {
                        height: "28",
                        width: "28",
                        src: Object(Z.e)(this.props.emote.id, 1)
                    }), u.createElement(h._2, {
                        display: h.N.InlineBlock
                    }, this.props.count))))
                }, t = c.__decorate([Object(v.d)("ClipsEmote", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component)),
            te = n("Ldv2"),
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        emoteSearchText: ""
                    }, t.renderEmoteSet = function(e) {
                        return u.createElement("div", {
                            key: e.id
                        }, e.emotes.filter(t.filterEmote).map(t.renderEmote))
                    }, t.renderEmote = function(e) {
                        var n = t.props.sortedReactions.find(function(t) {
                                return t.emote.id === e.id
                            }),
                            i = !(!n || !n.self.hasReacted);
                        return u.createElement(ee, {
                            key: e.id,
                            emote: e,
                            addClipReaction: t.props.addClipReaction,
                            removeClipReaction: t.props.removeClipReaction,
                            hasReacted: i
                        })
                    }, t.getEmoteSets = function() {
                        return t.props.emoteSetsData && t.props.emoteSetsData.emoteSets || []
                    }, t.filterEmote = function(e) {
                        return function(e, t) {
                            var n = t.length,
                                i = e.length;
                            if (i > n) return !1;
                            if (i === n) return e === t;
                            e: for (var a = 0, r = 0; a < i; a++) {
                                for (var o = e.charCodeAt(a); r < n;)
                                    if (t.charCodeAt(r++) === o) continue e;
                                return !1
                            }
                            return !0
                        }(t.state.emoteSearchText, e.token.toLowerCase())
                    }, t.onEmoteSearchTextChange = function(e) {
                        t.setState({
                            emoteSearchText: e.target.value.toLowerCase()
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.attemptReportInteractive()
                }, t.prototype.componentWillReceiveProps = function() {
                    this.attemptReportInteractive()
                }, t.prototype.render = function() {
                    return u.createElement(h._2, {
                        className: "clips-user-emotes"
                    }, this.getEmoteSets().map(this.renderEmoteSet), u.createElement(h.Y, {
                        type: h.Z.Search,
                        onChange: this.onEmoteSearchTextChange
                    }))
                }, t.prototype.attemptReportInteractive = function() {
                    this.getEmoteSets().length && this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(te.a)(), Object(v.d)("ClipsUserEmotes")], t)
            }(u.Component),
            ie = Object(D.b)(function(e) {
                return {
                    isLoggedIn: Object(F.d)(e)
                }
            })(ne),
            ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showHiddenReactions: !1
                    }, t.renderReaction = function(e) {
                        return u.createElement(ee, {
                            key: e.emote.id,
                            emote: e.emote,
                            addClipReaction: t.props.addClipReaction,
                            removeClipReaction: t.props.removeClipReaction,
                            hasReacted: e.self.hasReacted
                        })
                    }, t.toggleShowHiddenReactions = function() {
                        t.setState({
                            showHiddenReactions: !t.state.showHiddenReactions
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.sortedReactions.length >= 7,
                        t = this.state.showHiddenReactions || !e ? this.props.sortedReactions : this.props.sortedReactions.slice(0, 5);
                    return u.createElement(h._2, {
                        className: "clips-emote-picker"
                    }, t.map(this.renderReaction), e && u.createElement(h.u, {
                        onClick: this.toggleShowHiddenReactions,
                        "data-test-selector": "clips-emote-picker-toggler"
                    }, this.state.showHiddenReactions ? ">" : "<"), u.createElement(ie, {
                        addClipReaction: this.props.addClipReaction,
                        removeClipReaction: this.props.removeClipReaction,
                        sortedReactions: this.props.sortedReactions
                    }))
                }, t = c.__decorate([Object(v.d)("ClipsEmotePicker")], t)
            }(u.Component),
            re = n("xwy4"),
            oe = n("jFCw"),
            se = n("hMIs"),
            le = 3e3,
            de = {
                count: 0,
                emote: {
                    id: "62835",
                    token: "bleedPurple"
                },
                self: {
                    hasReacted: !1
                }
            },
            ce = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        activeReactionIndex: 0,
                        sortedReactions: []
                    }, n.hasInitializedSortedReactions = !1, n.showNextReaction = function() {
                        n.getActiveReaction() ? n.setState({
                            activeReactionIndex: n.getNextValidReactionIndex()
                        }) : n.setState({
                            activeReactionIndex: 0
                        })
                    }, n.addActiveClipReaction = function() {
                        n.getActiveReaction() && n.addClipReaction(n.getActiveReaction().emote)
                    }, n.removeActiveClipReaction = function() {
                        n.getActiveReaction() && n.removeClipReaction(n.getActiveReaction().emote)
                    }, n.addClipReaction = function(e) {
                        n.toggleReaction(Y.a.Add, e)
                    }, n.removeClipReaction = function(e) {
                        n.toggleReaction(Y.a.Remove, e)
                    }, n.toggleReaction = function(e, t) {
                        if (!n.props.isLoggedIn) return n.props.login(), Promise.reject(new Error("user not logged in"));
                        n.updateReactionLocal(e, t);
                        return (e === Y.a.Add ? n.props.addClipReaction : n.props.removeClipReaction)(Object(K.a)({
                            entityID: "clip:" + n.props.slug.toLowerCase(),
                            emoteID: t.id
                        }))
                    }, n.getActiveReaction = function() {
                        return n.state.sortedReactions[n.state.activeReactionIndex]
                    }, n.getNextValidReactionIndex = function() {
                        var e = n.state.activeReactionIndex + 1;
                        return e >= n.state.sortedReactions.length ? 0 : e
                    }, n.reactionCarouselTimer = new J({
                        intervalMillis: le,
                        onInterval: n.showNextReaction
                    }), n
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.initializeSortedReactions()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.initializeSortedReactions(e)
                }, t.prototype.render = function() {
                    var e = this.getActiveReaction();
                    return u.createElement(h._2, {
                        display: h.N.InlineBlock
                    }, u.createElement(z.a, {
                        display: h.N.InlineBlock
                    }, u.createElement(h.u, {
                        type: h.z.Hollow,
                        ariaLabel: Object(p.d)("Open Emote Picker", "ClipsReactionCarousel"),
                        "data-test-selector": "social-share-button"
                    }, "+"), u.createElement(h.p, {
                        direction: h.q.Top,
                        noTail: !0
                    }, u.createElement(ae, {
                        addClipReaction: this.addClipReaction,
                        removeClipReaction: this.removeClipReaction,
                        sortedReactions: this.state.sortedReactions
                    }))), e && u.createElement(h.W, {
                        display: h.N.InlineBlock
                    }, u.createElement("div", {
                        onMouseEnter: this.reactionCarouselTimer.stop,
                        onMouseLeave: this.reactionCarouselTimer.start,
                        "data-test-selector": "reaction-carousel-button"
                    }, u.createElement(ee, {
                        key: e.emote.id,
                        emote: e.emote,
                        addClipReaction: this.addActiveClipReaction,
                        removeClipReaction: this.removeActiveClipReaction,
                        hasReacted: e.self.hasReacted,
                        count: e.count
                    }))))
                }, t.prototype.initializeSortedReactions = function(e) {
                    if (void 0 === e && (e = this.props), e.data.clip && e.data.clip.reactions && !this.hasInitializedSortedReactions) {
                        this.hasInitializedSortedReactions = !0;
                        var t = 0 === e.data.clip.reactions.length ? [de] : e.data.clip.reactions.slice().sort(function(e, t) {
                            return t.count - e.count
                        });
                        this.setState({
                            sortedReactions: t
                        }), this.reactionCarouselTimer.start(), this.props.latencyTracking.reportInteractive()
                    }
                }, t.prototype.updateReactionLocal = function(e, t) {
                    var n = this.state.sortedReactions.findIndex(function(e) {
                            return e.emote.id === t.id
                        }),
                        i = this.state.sortedReactions.slice();
                    if (-1 !== n) {
                        var a = this.state.sortedReactions[n],
                            r = e === Y.a.Add,
                            o = {
                                count: a.count + (r ? 1 : -1),
                                emote: a.emote,
                                self: {
                                    hasReacted: r
                                }
                            };
                        i.splice(n, 1, o)
                    } else i.push({
                        count: 1,
                        emote: t,
                        self: {
                            hasReacted: !0
                        }
                    });
                    this.setState({
                        sortedReactions: i
                    }), this.getActiveReaction().emote.id === t.id && this.reactionCarouselTimer.restart(1e3)
                }, t = c.__decorate([Object(m.a)(re, {
                    name: "addClipReaction"
                }), Object(m.a)(se, {
                    name: "removeClipReaction"
                }), Object(m.a)(oe), Object(v.d)("ClipsReactionCarousel")], t)
            }(u.Component),
            ue = Object(D.b)(function(e) {
                return {
                    isLoggedIn: Object(F.d)(e)
                }
            }, function(e) {
                return Object(Q.b)({
                    login: function() {
                        return Object(W.f)($.a.FeedReactionToggle)
                    }
                }, e)
            })(ce),
            pe = (n("mK8J"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.slug;
                    return u.createElement(h._2, {
                        className: "clips-sidebar",
                        display: h.N.Flex,
                        flexDirection: h.P.Column
                    }, u.createElement(h._25, {
                        borderBottom: !0
                    }, u.createElement(E, {
                        slug: e
                    })), u.createElement(h._2, {
                        className: "clips-sidebar-info",
                        display: h.N.Flex,
                        flexDirection: h.P.Column,
                        justifyContent: h._1.Around,
                        padding: {
                            x: 1
                        }
                    }, u.createElement(H, {
                        slug: e
                    })), u.createElement(h._25, {
                        borderTop: !0
                    }, u.createElement(h._2, {
                        display: h.N.Flex,
                        justifyContent: h._1.Between,
                        alignItems: h.c.Center,
                        padding: 1
                    }, u.createElement(ue, {
                        slug: e
                    }), u.createElement(O, {
                        slug: e
                    }))))
                }, t
            }(u.Component)),
            me = Object(v.d)("ClipsSidebar", {
                autoReportInteractive: !0
            })(pe),
            ve = n("xX9u"),
            he = n("8Wuk"),
            fe = n("sEID"),
            ke = n("bnNq"),
            ge = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data.clip) return u.createElement(h._2, null);
                    var t = Object(p.d)("More", "ClipsSocialShare");
                    return u.createElement(h._2, {
                        display: h.N.Flex,
                        justifyContent: h._1.End,
                        alignItems: h.c.Center,
                        margin: {
                            y: 1
                        }
                    }, fe.b.map(function(t) {
                        return u.createElement(h._2, {
                            display: h.N.InlineBlock,
                            key: t.type,
                            margin: {
                                right: 1
                            }
                        }, u.createElement(he.a, {
                            key: t.type,
                            type: t.type,
                            text: e.props.data.clip.title,
                            url: Object(b.a)(e.props.data.clip.url, t.params)
                        }))
                    }), u.createElement(h._2, {
                        display: h.N.InlineBlock,
                        position: h._9.Relative
                    }, u.createElement(z.a, null, u.createElement(h.u, {
                        type: h.z.Hollow,
                        ariaLabel: t,
                        "data-test-selector": "social-share-button"
                    }, t), u.createElement(h.p, {
                        direction: h.q.BottomRight,
                        noTail: !0
                    }, u.createElement(h._2, {
                        padding: 1
                    }, u.createElement(h.S, {
                        id: "social-share-link",
                        orientation: h.T.Vertical,
                        label: Object(p.d)("Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-link"
                    }, u.createElement(ve.a, {
                        value: this.props.data.clip.url
                    })), u.createElement(h._2, {
                        padding: {
                            top: 1
                        }
                    }, u.createElement(h.S, {
                        id: "social-share-embed-link",
                        orientation: h.T.Vertical,
                        label: Object(p.d)("Embed Code", "ClipsSocialShare")
                    }, u.createElement(ve.a, {
                        value: this.props.data.clip.embedURL
                    }))))))))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(v.d)("ClipsSocialShare"), Object(m.a)(ke)], t)
            }(u.Component),
            be = n("BzvE"),
            ye = {},
            Ce = "player-storage-added",
            Se = "player-storage-removed",
            Ne = new be.EventEmitter,
            _e = "bridgestateupdate",
            Ee = "bridgestorestateupdate",
            we = "player.embed.host",
            Te = "player.embed.client",
            Ie = (n("vtXo"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setPlayerRef = function(e) {
                        t.playerRef = e
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.playerRef && (! function(e, t) {
                        ye[e] = t, Ne.emit(Ce)
                    }(this.props.slug, this.playerRef.contentWindow), this.playerRef.contentWindow.postMessage({
                        args: [],
                        method: "subscribe",
                        namespace: we
                    }, C)), this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    ! function(e) {
                        delete ye[e], Ne.emit(Se)
                    }(this.props.slug)
                }, t.prototype.render = function() {
                    return u.createElement(h._2, {
                        className: "clips-video-iframe",
                        position: h._9.Relative,
                        fullWidth: !0
                    }, u.createElement(h.W, {
                        display: h.N.Block,
                        position: h._9.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        fullWidth: !0,
                        fullHeight: !0
                    }, u.createElement("iframe", {
                        src: C + "/?player=clips-viewing&clip=" + this.props.slug + "&origin=" + window.location.origin,
                        width: "640",
                        height: "360",
                        frameBorder: "0",
                        scrolling: "no",
                        allowFullScreen: !0,
                        ref: this.setPlayerRef
                    })))
                }, t = c.__decorate([Object(v.d)("ClipsVideoIframe")], t)
            }(u.Component)),
            Oe = n("V5M+"),
            De = n("sikP"),
            Fe = n("oSFp"),
            Re = n("mw/a"),
            xe = n("Ev5K"),
            je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleModalOpened = function(e) {
                        return t.props.playerConnection.sendMessage(function(e) {
                            return l("closeModeration", we, e)
                        }(e))
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.playerConnection.playerProps.clipsModeration,
                        n = e.playerConnection.playerProps.clipsModeration;
                    if (!n || !t) return null;
                    if (!t.isClipsReportModalOpen && n.isClipsReportModalOpen) {
                        var i = this.props.data.clip && this.props.data.clip.broadcaster ? this.props.data.clip.broadcaster.id : "";
                        this.props.showModal(Fe.a, {
                            title: Object(p.d)("Report this Clip", "ClipsViewModerationModals"),
                            reportContext: {
                                contentType: Re.a.Clip,
                                contentID: this.props.slug,
                                targetUserID: i
                            },
                            onClose: this.props.closeModal
                        }), this.handleModalOpened("report")
                    }!t.isClipsDeleteModalOpen && n.isClipsDeleteModalOpen && (this.props.showModal(De.d, {
                        slug: this.props.slug,
                        onClose: this.props.closeModal
                    }), this.handleModalOpened("delete")), !t.isClipsDeleteAllModalOpen && n.isClipsDeleteAllModalOpen && (this.props.showModal(De.e, {
                        slug: this.props.slug,
                        onClose: this.props.closeModal
                    }), this.handleModalOpened("deleteAll"))
                }, t.prototype.render = function() {
                    return null
                }, t
            }(u.Component),
            Ue = s({
                playerId: function(e) {
                    return e.slug
                },
                requestedPlayerProps: ["clipsModeration"]
            })(Object(m.a)(xe)(Object(v.d)("ClipsViewModerationModals")(je))),
            Me = Object(D.b)(null, function(e) {
                return Object(Q.b)({
                    showModal: Oe.d,
                    closeModal: Oe.c
                }, e)
            })(Ue),
            Le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return u.createElement(h._2, {
                        flexGrow: 1
                    }, u.createElement(Ie, {
                        slug: this.props.slug
                    }), u.createElement(Me, {
                        slug: this.props.slug
                    }))
                }, t = c.__decorate([Object(v.d)("ClipsVideoPlayer")], t)
            }(u.Component),
            Ae = (n("vlO0"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.match.params.slug;
                    return u.createElement(h._2, {
                        className: "clips-watch",
                        padding: {
                            x: 2
                        },
                        breakpointSmall: {
                            padding: {
                                x: 5
                            }
                        },
                        breakpointLarge: {
                            padding: {
                                x: 0
                            }
                        }
                    }, u.createElement(ge, {
                        slug: e
                    }), u.createElement(h._25, {
                        background: h.m.Base,
                        display: h.N.Flex,
                        elevation: 3,
                        flexDirection: h.P.Column,
                        breakpointLarge: {
                            flexDirection: h.P.Row
                        }
                    }, u.createElement(Le, {
                        slug: e
                    }), u.createElement(me, {
                        slug: e
                    })), u.createElement(k, {
                        slug: e
                    }), ";")
                }, t
            }(u.Component));
        n.d(t, "ClipsWatch", function() {
            return Ae
        })
    },
    I4TS: function(e, t) {},
    I89S: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
        }(i || (i = {}))
    },
    Ldv2: function(e, t, n) {
        "use strict";
        t.a = function() {
            return Object(a.a)(o, {
                props: function(e) {
                    if (e.data) {
                        var t = e.data.currentUser && e.data.currentUser.emoteSets,
                            n = t && Object(r.a)(t);
                        return {
                            emoteSetsData: i.__assign({}, e.data, {
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
        };
        var i = n("TToO"),
            a = n("7vx8"),
            r = n("YhVV"),
            o = n("7B9K");
        n.n(o)
    },
    LjAQ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("U7vG"),
            o = n("2KeS"),
            s = n("6sO2"),
            l = n("7vx8"),
            d = n("CSlQ"),
            c = n("xwpJ"),
            u = n("Odds"),
            p = n("x6ny"),
            m = "reporting-modal__select",
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = Object(s.d)("Select One...", "ReportUserModal");
                    if (this.props.data.loading) e = [r.createElement("option", {
                        key: "Loading"
                    }, Object(s.d)("Loading...", "ReportReasonsSelect"))];
                    else {
                        e = (this.props.data.reportReasons || Object(c.b)()).map(function(e) {
                            return r.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        })
                    }
                    return r.createElement(u._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.S, {
                        id: m,
                        label: Object(s.d)("Select Reason (required)", "ReportUserModal")
                    }, r.createElement(u._21, {
                        id: m,
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, r.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t = i.__decorate([Object(d.d)("ReportReasonSelect")], t)
            }(r.Component),
            h = Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(v),
            f = (n("I4TS"), n("1EXI"));
        n.d(t, "a", function() {
            return b
        }), n.d(t, "b", function() {
            return k
        }), n.d(t, "c", function() {
            return C
        });
        var k, g = "reporting__select-community",
            b = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError"
        }(k || (k = {}));
        var y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(s.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: r.createElement("br", null),
                        tosLink: r.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(s.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.selectCommunity = function(e) {
                        t.setState({
                            selectedCommunityID: e.target.value,
                            selectedCommunityName: e.target.name
                        })
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName) : t.props.onError(k.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        });
                        n.length && e === b ? t.setState({
                            reason: e,
                            selectedCommunityID: n[0].id,
                            selectedCommunityName: n[0].name,
                            isCommunityReason: !0
                        }) : t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(u._2, {
                        display: u.N.Flex,
                        flexDirection: u.P.Column,
                        alignItems: u.c.Center,
                        justifyContent: u._1.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === k.Success ? r.createElement("div", null, r.createElement(u.u, {
                        onClick: this.props.onClose
                    }, r.createElement(u._2, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Close", "ReportUser")))) : r.createElement("div", null, r.createElement(u._2, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, r.createElement(u._35, {
                        type: u._40.H4
                    }, this.props.title), r.createElement(u._25, {
                        color: u.I.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), r.createElement("form", null, r.createElement(u._25, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, r.createElement(h, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), r.createElement(u.S, {
                        id: "reporting__text-area",
                        label: Object(s.d)("Description (required)", "ReportUser")
                    }, r.createElement(u._37, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), r.createElement(u._25, {
                        display: u.N.Flex,
                        justifyContent: u._1.Center
                    }, r.createElement(u.u, {
                        onClick: this.handleSubmit
                    }, r.createElement(u._2, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Send", "ReportUser"))))))
                }, t.prototype.renderCommunitiesSelector = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user) return null;
                    if (this.state.isCommunityReason) {
                        var e = this.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        }).map(function(e) {
                            return r.createElement("option", {
                                key: e.id,
                                value: e.id,
                                name: e.name
                            }, e.displayName)
                        });
                        return r.createElement(u._2, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.S, {
                            id: g,
                            label: Object(s.d)("Community", "ReportUser")
                        }, r.createElement(u._21, {
                            id: g,
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, e)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case k.FormError:
                            e = Object(s.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case k.MutationError:
                            e = Object(s.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case k.Success:
                            e = Object(s.d)("Thank you for your report.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== k.Success,
                        "reporting__success-container": this.props.submitStatus === k.Success
                    });
                    return r.createElement(u._25, {
                        className: t,
                        fullWidth: this.props.submitStatus !== k.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(r.Component),
            C = Object(o.d)(Object(l.a)(f, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            }))(y)
    },
    LnKh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Clips_ModalDelete"
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
                                    }]
                                }
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
                                    value: "thumbnailURL"
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
                                    value: "viewCount"
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
            body: "query Clips_ModalDelete($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\nlogin\n}\nthumbnailURL\ncreatedAt\nviewCount\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    MApH: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Chat_BanUserFromChatRoom"
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
                                value: "BanUserFromChatRoomInput"
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
                            value: "banUserFromChatRoom"
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
                end: 126
            }
        };
        n.loc.source = {
            body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    NY9D: function(e, t, n) {
        "use strict";
        t.c = function(e) {
            return "/directory/game/" + encodeURIComponent(e)
        }, t.a = function(e) {
            return "/communities/" + encodeURIComponent(e)
        }, t.b = function(e) {
            return "/events/" + encodeURIComponent(e)
        }, t.d = function(e) {
            return "/" + encodeURIComponent(e) + "/manager"
        }
    },
    QIXk: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("7vx8"),
            l = n("6BvN"),
            d = n("vH/s"),
            c = function(e, t, n, i, a) {
                var r = Date.now() / 1e3;
                o.n.tracking.track(d.SpadeEventType.ClipEdit, {
                    channel_id: e,
                    client_time: r,
                    clip_edit_session_id: t + "," + Math.floor(r),
                    clip_id: t,
                    clip_slug: n,
                    effect_name: "title",
                    effect_setting: i,
                    front_end: !0,
                    location: a
                })
            },
            u = n("Odds"),
            p = n("2TZ0"),
            m = this,
            v = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(i || (i = {}));
        var h = 100,
            f = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return r.createElement("div", null, n.renderInput(), n.renderSave(), r.createElement(u.u, {
                            "data-test-selector": v.TITLE_SAVE,
                            onClick: n.props.onCancel
                        }, Object(o.d)("Cancel", "ClipsTitleEdit")), n.state.showError ? n.getErrorMessage() : n.getRemainingCharacterText())
                    }, n.renderForManager = function() {
                        return r.createElement(u.S, {
                            id: v.TITLE_INPUT,
                            label: Object(o.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, r.createElement(u._2, {
                            display: u.N.Flex,
                            flexWrap: u.Q.NoWrap
                        }, r.createElement(u._2, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, n.renderInput()), r.createElement(u._2, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, r.createElement(u._2, {
                            position: u._9.Relative
                        }, n.renderSave(), r.createElement(u._0, {
                            onClick: n.dismissMessage,
                            "data-test-selector": v.TITLE_SAVE_TOOLTIP
                        }, r.createElement(u.p, {
                            direction: u.q.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, r.createElement(u._2, {
                            padding: 1
                        }, n.state.showSuccess ? r.createElement(u._35, {
                            color: u.I.Link
                        }, Object(o.d)("Title Saved!", "ClipsTitleEdit")) : r.createElement(u._35, {
                            color: u.I.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderInput = function() {
                        return r.createElement(u.Y, {
                            id: v.TITLE_INPUT,
                            "data-test-selector": v.TITLE_INPUT,
                            type: u.Z.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })
                    }, n.renderSave = function() {
                        return r.createElement(u.u, {
                            "data-test-selector": v.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(o.d)("Save", "ClipsTitleEdit"))
                    }, n.getRemainingCharacterText = function() {
                        return Object(o.d)("{characterCount, number} remaining", {
                            characterCount: h - n.state.title.length
                        }, "ClipsTitleEdit")
                    }, n.onSuccess = function() {
                        n.props.onSuccess && n.props.onSuccess(), n.setState({
                            showSuccess: !0,
                            showError: !1,
                            error: null
                        }), setTimeout(function() {
                            n.setState({
                                showSuccess: !1
                            })
                        }, 1500)
                    }, n.dismissMessage = function() {
                        n.setState({
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.handleTitleEdit = function(e) {
                        var t = e.currentTarget.value.slice(0, h);
                        n.setState({
                            title: t,
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.editClipTitle = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if ("" === this.state.title.trim()) return this.setState({
                                            showError: !0,
                                            error: i.emptySubmission
                                        }), [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.editTitle(this.state.title.trim())];
                                    case 2:
                                        return t.sent(), c(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.clipSlug, this.props.clipTitle, this.props.location), this.onSuccess(), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            showError: !0,
                                            error: this.errorMessageToError(e)
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.canSaveEditedTitle = function() {
                        return n.props.clipTitle !== n.state.title.trim()
                    }, n.handleKeyDown = function(e) {
                        switch (e.keyCode) {
                            case l.a.Enter:
                                return void(n.canSaveEditedTitle() && n.editClipTitle());
                            default:
                                return
                        }
                    }, n.state = {
                        title: t.clipTitle.trim(),
                        showError: !1,
                        showSuccess: !1,
                        error: null
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.location === d.PageviewLocation.MyClipsManager ? this.renderForManager() : this.renderForClipsViewing()
                }, t.prototype.getErrorMessage = function() {
                    switch (this.state.error) {
                        case i.channelViolation:
                            return Object(o.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                        case i.emptySubmission:
                            return Object(o.d)("Please add a title.", "ClipsTitleEdit");
                        default:
                            return Object(o.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                    }
                }, t.prototype.errorMessageToError = function(e) {
                    return e.message.includes("403:") ? i.channelViolation : i.unknown
                }, t
            }(r.Component),
            k = function(e) {
                return {
                    editTitle: function(t) {
                        return a.__awaiter(m, void 0, void 0, function() {
                            var n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                            variables: {
                                                input: {
                                                    slug: e.ownProps.clipSlug,
                                                    title: t
                                                }
                                            }
                                        })];
                                    case 1:
                                        return i.sent(), [3, 3];
                                    case 2:
                                        throw n = i.sent(), o.i.error(n, "Failed to edit clip title"), n;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            g = Object(s.a)(p, {
                props: k
            })(f);
        n.d(t, !1, function() {
            return v
        }), n.d(t, !1, function() {
            return i
        }), n.d(t, !1, function() {
            return f
        }), n.d(t, !1, function() {
            return k
        }), n.d(t, "a", function() {
            return g
        })
    },
    SUA7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowButton_UnfollowUser"
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
                                value: "UnfollowUserInput"
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
                            value: "unfollowUser"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "mutation FollowButton_UnfollowUser($input: UnfollowUserInput!) {\nunfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    U5tC: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsBroadcasterInfo"
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
                end: 174
            }
        };
        n.loc.source = {
            body: "query ClipsBroadcasterInfo($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nprofileImageURL(width: 28)\ndisplayName\nlogin\nstream {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    VNvG: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowButton_FollowUser"
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
                                value: "FollowUserInput"
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
                            value: "followUser"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
                end: 124
            }
        };
        n.loc.source = {
            body: "mutation FollowButton_FollowUser($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, "d", function() {
            return u
        }), n.d(t, "c", function() {
            return p
        });
        var i, a = n("6sO2"),
            r = n("8Wuk"),
            o = n("vH/s"),
            s = (i = {}, i[r.b.Twitter] = "twitter", i[r.b.Reddit] = "reddit", i[r.b.VKontakte] = "vkontakte", i[r.b.Facebook] = "facebook", i[r.b.Copy] = "link", i[r.b.CopyInput] = "option_link", i),
            l = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            d = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            c = {
                MyClips: o.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: o.PageviewLocation.ChannelClipsManager,
                TopClipsGame: o.PageviewLocation.ClipsGame,
                TopClipsChannel: o.PageviewLocation.ChannelClips
            },
            u = function(e, t) {
                return function(n) {
                    a.n.tracking.track(o.SpadeEventType.VideoShare, {
                        vod_id: e.id,
                        vod_type: "clip",
                        share_platform: s[n],
                        location: c[t],
                        game: e.game ? e.game.name : null,
                        channel_id: e.broadcaster ? Number(e.broadcaster.id) : 0,
                        channel: e.broadcaster ? e.broadcaster.login : "",
                        live: null
                    })
                }
            },
            p = function(e) {
                var t = e.targetURL,
                    n = e.type;
                a.n.tracking.track(o.SpadeEventType.ClipChampHelpClick, {
                    target_url: t,
                    type: n.toLowerCase()
                })
            }
    },
    XITx: function(e, t) {},
    YhVV: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = [];
            if (!e || !t) return n;
            for (var a = /\S+/g, r = a.exec(e); r;) {
                var o = r[0],
                    s = t[o];
                if (s && "function" != typeof s) {
                    var l = Object(i.d)(e.slice(0, r.index)),
                        d = l ? l.length : r.index;
                    n[d] = {
                        startIndex: d,
                        endIndex: d + o.length,
                        data: {
                            alt: o,
                            images: {
                                themed: !1,
                                sources: {
                                    "1x": Object(i.e)(s.id, 1),
                                    "2x": Object(i.e)(s.id, 2),
                                    "4x": Object(i.e)(s.id, 4)
                                }
                            }
                        }
                    }
                }
                r = a.exec(e)
            }
            return n
        }, t.a = function(e) {
            for (var t = {}, n = 0, i = e; n < i.length; n++)
                for (var o = i[n], s = 0, l = o.emotes; s < l.length; s++)
                    for (var d = l[s], c = 0, u = a[d.token] || [d.token]; c < u.length; c++) {
                        var p = u[c];
                        t[p] && o.id === r || (t[p] = {
                            id: d.id,
                            token: p
                        })
                    }
            return t
        };
        var i = n("l21v"),
            a = {
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
            },
            r = "0"
    },
    YugT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowButton_FollowEvent_User"
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
                                    value: "isPartner"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 157
            }
        };
        n.loc.source = {
            body: "query FollowButton_FollowEvent_User($id: ID!) {\nuser(id: $id) {\nid\nisPartner\nstream {\nid\ngame {\nid\nname\n}\n}\nhosting {\nid\nstream {\nid\ngame {\nid\nname\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bdk8: function(e, t) {},
    bnNq: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsSocialShare"
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
                                    value: "url"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "embedURL"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 82
            }
        };
        n.loc.source = {
            body: "query ClipsSocialShare($slug: ID!) {\nclip(slug: $slug) {\nid\nurl\nembedURL\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "dQ/z": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsFullVideoButton"
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
                                    value: "video"
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
                                            value: "offsetSeconds"
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
            body: "query ClipsFullVideoButton($slug: ID!) {\nclip(slug: $slug) {\nid\nvideo {\nid\noffsetSeconds\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    e1CU: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = e,
                i = !1;
            return n ? function(e) {
                return e.split("").map(function(e) {
                    return e.charCodeAt(0) > 127
                }).reduce(function(e, t) {
                    return e || t
                })
            }(n) && (i = !0) : n = t, {
                userDisplayName: n,
                isIntl: i
            }
        }
    },
    hMIs: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Remove_Clip_Reaction"
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
                                value: "RemoveReactionInput"
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
                            value: "removeReaction"
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
                                                value: "Clip"
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
                                                    value: "reactions"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "emote"
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
                                                            value: "count"
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
                                                                    value: "hasReacted"
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
            body: "mutation Remove_Clip_Reaction($input: RemoveReactionInput!) {\nremoveReaction(input: $input) {\ncontent {\n... on Clip {\nid\nreactions {\nemote {\nid\ntoken\n}\ncount\nself {\nhasReacted\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    hdYS: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("TToO"),
            d = n("U7vG"),
            c = n("6sO2"),
            u = n("+Znq"),
            p = n("7vx8"),
            m = n("oIkB"),
            v = n("2BvQ"),
            h = n("xrVp"),
            f = n("YugT"),
            k = {
                Channel: "channel"
            },
            g = n("vH/s"),
            b = n("CSlQ"),
            y = n("Odds"),
            C = n("VNvG"),
            S = (n("3ydF"), n("SUA7")),
            N = n("x4k6"),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isFollowing: !1,
                        showDropdown: !1,
                        disableNotifications: !0
                    }, t.userDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.user
                    }, t.toggleFollowing = function() {
                        var e;
                        t.state.isFollowing ? (t.unfollowUser(), e = g.SpadeEventType.Unfollow) : (t.followUser(), e = g.SpadeEventType.Follow);
                        var n = t.getFollowData();
                        n && function(e, t) {
                            l.__awaiter(this, void 0, void 0, function() {
                                var n, i, a, r, o, s, d, u, p, m;
                                return l.__generator(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            if (n = null, i = null, a = null, r = null, o = null, !t.channelID) return [3, 5];
                                            l.label = 1;
                                        case 1:
                                            return l.trys.push([1, 3, , 4]), [4, c.n.apollo.client.query({
                                                query: f,
                                                variables: {
                                                    id: t.channelID
                                                }
                                            })];
                                        case 2:
                                            return r = l.sent(), [3, 4];
                                        case 3:
                                            return d = l.sent(), c.i.error(d, "Failed to make query for channel info in FollowEvent reporting.", {
                                                channelID: t.channelID
                                            }), [3, 4];
                                        case 4:
                                            (a = r && r.data && r.data.user) ? o = a.hosting.stream && a.hosting.stream.game ? a.hosting.stream.game.name : a.stream && a.stream.game && a.stream.game.name: c.i.error(new Error("GraphQL empty response"), "Query for channel info in FollowEvent reporting return no data.", {
                                                channelID: t.channelID
                                            }), l.label = 5;
                                        case 5:
                                            if (!(u = c.m.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                            l.label = 6;
                                        case 6:
                                            return l.trys.push([6, 8, , 9]), [4, c.n.apollo.client.query({
                                                query: v,
                                                variables: {
                                                    id: u
                                                }
                                            })];
                                        case 7:
                                            return n = l.sent(), [3, 9];
                                        case 8:
                                            return p = l.sent(), c.i.error(p, "Failed to make query for VOd info in FollowEvent reporting.", {
                                                currentVODID: u
                                            }), [3, 9];
                                        case 9:
                                            (i = n && n.data && n.data.video) ? s = Object(h.a)(i.broadcastType): (s = null, c.i.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                                currentVODID: u
                                            })), l.label = 10;
                                        case 10:
                                            return m = {
                                                channel: t.channelLogin,
                                                channel_id: t.channelID,
                                                channel_game: o,
                                                cta_visible: c.m.getVideoPlayerTrackingData().followCTAVisible,
                                                host_channel: t.hostChannelLogin,
                                                host_channel_id: t.hostChannelID,
                                                game: t.game,
                                                partner: a ? a.isPartner : null,
                                                src: t.src,
                                                vod_id: u,
                                                vod_type: s
                                            }, c.m.track(e, m), [2]
                                    }
                                })
                            })
                        }(e, {
                            channelLogin: n.user.login,
                            channelID: n.user.id,
                            hostChannelLogin: t.props.hostChannelLogin,
                            hostChannelID: t.props.hostChannelID,
                            src: k.Channel
                        }), t.setState(function(e) {
                            return {
                                isFollowing: !e.isFollowing,
                                disableNotifications: !1
                            }
                        })
                    }, t.followUser = function() {
                        var e = t.getFollowData();
                        if (t.props.followUser && e) {
                            t.setState({
                                showDropdown: !0
                            });
                            var n = l.__assign({}, Object(m.a)({
                                disableNotifications: !1,
                                targetID: e.user.id
                            }), {
                                optimisticResponse: {
                                    followUser: {
                                        __typename: "FollowUserPayload",
                                        follow: {
                                            disableNotifications: !1,
                                            __typename: "Follow"
                                        }
                                    }
                                }
                            });
                            t.props.followUser(n).then(function(e) {
                                Object(m.d)(N, {
                                    login: t.props.channelLogin
                                }, function(t) {
                                    return t.user.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications, t
                                })
                            })
                        }
                    }, t.unfollowUser = function() {
                        var e = t.getFollowData();
                        if (t.props.unfollowUser && e) {
                            var n = l.__assign({}, Object(m.a)({
                                targetID: e.user.id
                            }), {
                                optimisticResponse: {
                                    unfollowUser: {
                                        __typename: "UnfollowUserPayload",
                                        follow: {
                                            disableNotifications: null,
                                            __typename: "Follow"
                                        }
                                    }
                                }
                            });
                            t.props.unfollowUser(n).then(function() {
                                Object(m.d)(N, {
                                    login: t.props.channelLogin
                                }, function(e) {
                                    return e.user.self.follower.disableNotifications = null, e
                                })
                            })
                        }
                    }, t.toggleNotificationsEnabled = function() {
                        var e = t.getFollowData();
                        if (t.props.followUser && e) {
                            var n = l.__assign({}, Object(m.a)({
                                disableNotifications: !t.state.disableNotifications,
                                targetID: e.user.id
                            }), {
                                optimisticResponse: {
                                    followUser: {
                                        __typename: "FollowUserPayload",
                                        follow: {
                                            disableNotifications: !t.state.disableNotifications,
                                            __typename: "Follow"
                                        }
                                    }
                                }
                            });
                            t.props.followUser(n).then(function(e) {
                                Object(m.d)(N, {
                                    login: t.props.channelLogin
                                }, function(t) {
                                    return t.user.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications, t
                                })
                            }), t.setState(function(e) {
                                return {
                                    disableNotifications: !e.disableNotifications
                                }
                            })
                        }
                    }, t.getFollowData = function() {
                        return t.props.followData ? t.props.followData : t.props.data
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.userDataLoaded() || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (e.data && !e.data.loading && !e.data.error || this.props.followData) {
                        var t = e.data || this.props.followData;
                        this.setState({
                            isFollowing: !!t && (t.user.self && null !== t.user.self.follower.disableNotifications),
                            disableNotifications: !t || t.user.self && t.user.self.follower.disableNotifications
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.isHostedFollow && this.props.channelName ? Object(c.d)("Follow {username}", {
                        username: this.props.channelName
                    }, "FollowButton") : Object(c.d)("Follow", "FollowButton");
                    if (!this.props.isLoggedIn) return d.createElement(y.u, l.__assign({
                        tabIndex: this.props.tabIndex,
                        ariaLabel: e,
                        icon: this.props.hideIcon ? void 0 : y._16.Heart,
                        onClick: this.props.login,
                        blurAfterClick: this.props.blurAfterClick,
                        "data-a-target": "follow-button"
                    }, Object(y._53)(this.props), {
                        size: this.props.size
                    }), e);
                    if (this.props.showLoadingPlaceholder && (!this.props.data || this.props.data.loading)) return d.createElement(y._8, {
                        width: 70,
                        height: 30
                    });
                    if (!this.props.followUser || !this.props.unfollowUser || !this.props.followData && (!this.props.data || this.props.data.loading || this.props.data.error || this.props.data.user.id === this.props.data.currentUser.id)) return null;
                    var t = this.state.disableNotifications ? Object(c.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(c.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
                    if (!this.state.isFollowing) return d.createElement(y.u, l.__assign({
                        blurAfterClick: this.props.blurAfterClick,
                        ariaLabel: e,
                        size: this.props.size,
                        "data-a-target": "follow-button",
                        "data-test-selector": "follow-button",
                        icon: this.props.hideIcon ? void 0 : y._16.Heart,
                        onClick: this.toggleFollowing
                    }, Object(y._53)(this.props), {
                        tabIndex: this.props.tabIndex
                    }), e);
                    if (this.props.hideWhenFollowing) return null;
                    var n = this.props.balloonDirection ? this.props.balloonDirection : y.q.BottomRight,
                        i = this.getFollowData(),
                        a = i ? i.user.displayName : "";
                    return d.createElement(y._2, {
                        display: y.N.Flex,
                        className: "follow-btn"
                    }, d.createElement(y._2, null, d.createElement(y.v, {
                        ariaLabel: Object(c.d)("Unfollow", "FollowButton"),
                        "data-a-target": "unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: y._16.Heart,
                        onClick: this.toggleFollowing,
                        statusAlertIcon: y._16.Unheart
                    })), d.createElement(u.a, {
                        display: y.N.InlineFlex,
                        openByDefault: this.state.showDropdown
                    }, d.createElement("button", {
                        tabIndex: this.props.tabIndex,
                        "aria-label": Object(c.d)("Dropdown", "FollowButton"),
                        className: "follow-btn__dropdown-toggle",
                        "data-a-target": "follow-dropdown-toggle"
                    }, d.createElement(y._2, {
                        justifyContent: y._1.Center,
                        display: y.N.Flex,
                        alignItems: y.c.Stretch,
                        fullHeight: !0
                    }, d.createElement(y._15, {
                        asset: y._16.GlyphArrDown
                    }))), d.createElement(y.p, {
                        size: y.r.Small,
                        direction: n,
                        "data-a-target": "follow-notifications-balloon"
                    }, d.createElement(y._25, {
                        color: y.I.Base,
                        display: y.N.Flex,
                        flexWrap: y.Q.Wrap,
                        padding: 1
                    }, d.createElement(y._2, {
                        display: y.N.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(y._35, {
                        type: y._40.H6
                    }, Object(c.d)("You are following {followingName}", {
                        followingName: a
                    }, "FollowButton"))), d.createElement(y._2, {
                        display: y.N.Flex,
                        flexWrap: y.Q.NoWrap,
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(y._2, {
                        display: y.N.Flex,
                        padding: {
                            right: 2
                        }
                    }, d.createElement("span", null, d.createElement(y._35, {
                        type: y._40.H6
                    }, Object(c.d)("Notifications", "FollowButton")))), d.createElement(y._2, {
                        display: y.N.Flex,
                        flexShrink: 0
                    }, d.createElement(y._42, {
                        onChange: this.toggleNotificationsEnabled,
                        checked: !this.state.disableNotifications,
                        "data-a-target": "notifications-toggle"
                    }))), d.createElement(y._2, {
                        display: y.N.InlineFlex,
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(y._35, {
                        type: y._40.Span,
                        color: y.I.Alt2
                    }, t))))))
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn ? (!this.props.channelLogin || this.userDataLoaded() || this.props.followData) && this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(p.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.channelLogin || !!e.followData
                    }
                }), Object(p.a)(C, {
                    name: "followUser"
                }), Object(p.a)(S, {
                    name: "unfollowUser"
                }), Object(b.d)("FollowButton")], t)
            }(d.Component),
            E = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e)
                }
            }, function(e) {
                return Object(a.b)({
                    login: function() {
                        return Object(o.f)(r.a.FollowButton)
                    }
                }, e)
            })(_);
        n.d(t, "a", function() {
            return E
        })
    },
    iydZ: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            void 0 === n && (n = !0);
            var i = n ? "animated" : "static";
            return t ? {
                themed: !0,
                dark: (a = {}, a[t + "x"] = e.indexedImages.DARK[i].get(t), a),
                light: (r = {}, r[t + "x"] = e.indexedImages.LIGHT[i].get(t), r)
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
            };
            var a, r
        }
        n.d(t, "a", function() {
            return s
        }), t.c = function(e, t) {
            var n = [],
                s = t.indexedActions,
                l = new RegExp("^(" + Object.keys(s).join("|") + ")(\\d+)$", "i"),
                d = e.split(/\s+/);
            return d.forEach(function(e, t) {
                var c = l.exec(e);
                if (c) {
                    var u = c[1].toLowerCase(),
                        p = +c[2],
                        m = s[u];
                    if (m || u !== a.g || (m = Object(r.b)()), m) {
                        var v = m.orderedTiers.find(function(e) {
                            return e.bits <= p
                        });
                        !v && p && (v = m.orderedTiers[0]), v && n.push({
                            type: o.a.Emote,
                            content: {
                                images: i(v),
                                alt: m.prefix,
                                cheerAmount: p,
                                cheerColor: v.color
                            }
                        })
                    }
                } else {
                    var h = n.length && n[n.length - 1],
                        f = "";
                    if (t < d.length - 1 && (f = " "), h && h.type === o.a.Text) h.content += e + f;
                    else {
                        var k = "";
                        t && (k = " "), n.push({
                            type: o.a.Text,
                            content: k + e + f
                        })
                    }
                }
            }), n
        }, t.b = i;
        var a = n("3iBR"),
            r = n("CFVp"),
            o = n("mwvJ"),
            s = {
                indexedActions: {},
                orderedActions: []
            }
    },
    jFCw: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsReactionCarousel"
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
                                    value: "reactions"
                                },
                                arguments: [],
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "emote"
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
                                                    value: "hasReacted"
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
                end: 127
            }
        };
        n.loc.source = {
            body: "query ClipsReactionCarousel($slug: ID!) {\nclip(slug: $slug) {\nid\nreactions {\ncount\nemote {\nid\ntoken\n}\nself {\nhasReacted\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jetF: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = (n.n(a), n("HM6l")),
            o = n("Odds"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(r.a)(), t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.handleGlobalClick = function(e) {
                        e.target.matches('[data-toggle-balloon-id="' + t.toggleBalloonId + '"] *') || t.setState({
                            showBalloon: !1
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.onMouseEnter = function() {
                        t.state.hasInteracted || t.setState({
                            hasInteracted: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    if (n.type !== o.p) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var r = a.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        s = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (s = a.cloneElement(n, {
                        show: this.state.showBalloon
                    }));
                    var l = r;
                    return this.props.tooltipProps && (l = a.createElement(o._43, i.__assign({}, this.props.tooltipProps), r)), a.createElement(o._2, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: o._9.Relative
                    }, a.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.onMouseEnter,
                        "data-test-selector": "toggle-balloon-wrapper__mouse-enter-detector"
                    }, l), s)
                }, t.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, t
            }(a.Component)
    },
    kwWj: function(e, t) {},
    l21v: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return void 0 === t && (t = 15), "number" != typeof g[e] && (g[e] = Math.floor(Math.random() * t)), k[g[e]]
        }

        function a(e, t, n, i, a, l) {
            void 0 === t && (t = []);
            var c = [],
                u = 0,
                m = r(e);
            t.forEach(function(t) {
                var r = m ? m.slice(u, t.startIndex).join("") : e.slice(u, t.startIndex);
                r && (c = n ? c.concat(o(r, l, a, i)) : c.concat(s(r, l, a))), c.push({
                    type: p.a.Emote,
                    content: d.__assign({
                        alt: m ? m.slice(t.startIndex, t.endIndex).join("") : e.slice(t.startIndex, t.endIndex)
                    }, t.data)
                }), u = t.endIndex
            });
            var v = m ? m.slice(u).join("") : e.slice(u);
            return v && (c = n ? c.concat(o(v, l, a, i)) : c.concat(s(v, l, a))), c
        }

        function r(e) {
            return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
        }

        function o(e, t, n, i) {
            if (!i) return s(e, t, n);
            var a = Object(u.c)(e, i).map(function(e) {
                return e.type === p.a.Text ? s(e.content, t, n) : e
            });
            return [].concat.apply([], a)
        }

        function s(e, t, n) {
            var i = /^(?:(https?:\/\/)?(?:[\w@#%\-+=:~]+\.)+[a-z]{2,6}(?:\/[\w./@#%&()\-+=:?~]*)?)$/g,
                a = /([^\w@#%\-+=:~])?(@)([^\u0000-\u007F]+|\w+)+([^\w./@#%&()\-+=:?~]|\s|$)/g,
                r = [],
                o = e.split(/\s+/);
            return o.forEach(function(e, s) {
                i.lastIndex = 0;
                var l = i.exec(e);
                a.lastIndex = 0;
                var d = a.exec(e);
                if (l) {
                    var u = l.index;
                    0 !== u && r.push({
                        type: p.a.Text,
                        content: "" + e.slice(0, u)
                    });
                    var v = i.lastIndex;
                    if (n) r.push({
                        type: p.a.Text,
                        content: " <" + Object(c.d)("deleted link", "CreateMessageData") + "> "
                    });
                    else {
                        var f = (l[1] ? "" : "https://") + e.slice(u, v);
                        if (function(e) {
                                return void 0 === e && (e = ""), m.test(e) && !e.includes("clips.twitch.tv/2017/")
                            }(f)) {
                            var k = function(e) {
                                void 0 === e && (e = "");
                                var t = e.match(m);
                                if (null === t) return "";
                                if (t && t.length > 0 && void 0 !== t.index) return t[1];
                                return ""
                            }(f);
                            r.push({
                                type: p.a.ClipLink,
                                content: {
                                    slug: k,
                                    url: f,
                                    displayText: e.slice(u, v)
                                }
                            })
                        } else if (Object(h.a)(f)) {
                            var g = Object(h.b)(f);
                            r.push({
                                type: p.a.VideoLink,
                                content: {
                                    id: g,
                                    url: f,
                                    displayText: e.slice(u, v)
                                }
                            })
                        } else r.push({
                            type: p.a.Link,
                            content: {
                                displayText: e.slice(u, v),
                                url: f
                            }
                        })
                    }
                    var b = e.slice(v),
                        y = "";
                    s < o.length - 1 && (y = " "), b && r.push({
                        type: p.a.Text,
                        content: "" + b + y
                    })
                } else {
                    if (!d) {
                        var C = r.length && r[r.length - 1];
                        y = "";
                        if (s < o.length - 1 && (y = " "), C && C.type === p.a.Text) C.content += e + y;
                        else {
                            var S = "";
                            s && (S = " "), r.push({
                                type: p.a.Text,
                                content: S + e + y
                            })
                        }
                        return
                    }
                    var N = d[3];
                    r.push({
                        type: p.a.Mention,
                        content: {
                            sender: t,
                            recipient: N
                        }
                    })
                }
            }), r
        }

        function l(e, t) {
            return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
        }
        var d = n("TToO"),
            c = n("6sO2"),
            u = n("iydZ"),
            p = n("mwvJ"),
            m = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?"),
            v = n("YhVV"),
            h = n("3KVC"),
            f = n("e1CU");
        t.a = function(e, t, n, r, o, s) {
            void 0 === s && (s = !1);
            var c;
            c = o ? Object(v.b)(e, o) : function(e) {
                var t = [];
                return e && Object.keys(e).forEach(function(n) {
                    var i = e[n];
                    i.forEach(function(e) {
                        t[e.startIndex] = {
                            startIndex: e.startIndex,
                            endIndex: e.endIndex + 1,
                            data: {
                                images: {
                                    themed: !1,
                                    sources: {
                                        "1x": l(n, 1),
                                        "2x": l(n, 2),
                                        "4x": l(n, 4)
                                    }
                                }
                            }
                        }
                    })
                }), t
            }(t.emotes);
            var u = Object(f.a)(t.displayName, t.username);
            return {
                badges: t.badges || {},
                bits: t.bits,
                user: d.__assign({}, u, {
                    userLogin: t.username,
                    userID: t.userID,
                    userType: t.userType,
                    color: t.color || i(t.userID)
                }),
                messageParts: e ? a(e, c, t.bits, n, r, u.userDisplayName) : [],
                deleted: s,
                timestamp: Date.now()
            }
        }, t.b = i, t.f = a, t.d = r, t.c = s, t.e = l;
        var k = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
            g = {}
    },
    lTii: function(e, t) {},
    mK8J: function(e, t) {},
    mRH2: function(e, t) {
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
    mmQh: function(e, t) {
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
    "mw/a": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT"
        }(i || (i = {}))
    },
    mwvJ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Text = 0] = "Text", e[e.Mention = 1] = "Mention", e[e.Link = 2] = "Link", e[e.Emote = 3] = "Emote", e[e.ClipLink = 4] = "ClipLink", e[e.VideoLink = 5] = "VideoLink"
        }(i || (i = {}))
    },
    oFw4: function(e, t) {},
    oIkB: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = new Set(e.map(function(e) {
                return e.node.id
            }));
            return e.concat(t.filter(function(e) {
                return !n.has(e.node.id)
            }))
        }, t.a = function(e) {
            return {
                variables: {
                    input: e
                }
            }
        }, t.d = function(e, t, n, r) {
            void 0 === t && (t = {});
            try {
                var o = a.n.apollo.client.readQuery({
                    query: e,
                    variables: t
                });
                if (!o || r && r(o)) return;
                var s = i(o, n);
                a.n.apollo.client.writeQuery({
                    query: e,
                    variables: t,
                    data: s
                })
            } catch (e) {
                a.i.warn("Failed writing updated query to Apollo", e)
            }
        }, t.c = function(e) {
            try {
                var t = e.id,
                    n = e.fragment,
                    r = e.mutator,
                    o = a.n.apollo.client.readFragment({
                        id: t,
                        fragment: n
                    }),
                    s = i(o, r);
                a.n.apollo.client.writeFragment({
                    fragment: n,
                    id: t,
                    data: s
                })
            } catch (e) {
                a.i.warn("Failed writing updated query to Apollo", e)
            }
        };
        n("+dIz");
        var i = n("LIeg"),
            a = (n.n(i), n("6sO2"))
    },
    oSFp: function(e, t, n) {
        "use strict";
        var i = n("A5Hr"),
            a = n("TToO"),
            r = n("U7vG"),
            o = n("RH2O"),
            s = n("2KeS"),
            l = n("+8VM"),
            d = n("V5M+"),
            c = n("CSlQ"),
            u = n("Odds"),
            p = (n("oFw4"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(u._25, {
                        className: "reporting-modal__container",
                        background: u.m.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, r.createElement(i.a, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), r.createElement(l.a, null))
                }, t
            }(r.Component)),
            m = Object(s.d)(Object(c.d)("ReportUserModal"), Object(o.b)(null, function(e) {
                return Object(s.b)({
                    closeModal: d.c
                }, e)
            }))(p);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return i.a
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return m
        })
    },
    sEID: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return d
        });
        var i = n("U7vG"),
            a = (n.n(i), n("8Wuk")),
            r = n("yDzg"),
            o = n("WNmM"),
            s = n("Odds"),
            l = [{
                type: a.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: a.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: a.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: a.b.Copy
            }],
            d = function(e) {
                return i.createElement(s._2, {
                    className: "clips-social-share",
                    display: s.N.Flex,
                    flexWrap: s.Q.NoWrap
                }, l.map(function(t) {
                    return i.createElement(s._2, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(a.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(r.a)(e.clip.url, t.params),
                        onShareClick: Object(o.d)(e.clip, e.pageType)
                    }))
                }))
            }
    },
    sikP: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(f.a)(k, e)
        }
        var a = n("TToO"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("rCmJ"),
            l = n("Odds"),
            d = (n("XITx"), {
                TITLE: "clips-modal-title",
                MAIN_BODY: "clips-modal-main-body",
                SUCCESS_BODY: "clips-modal-success-body",
                ERROR_BODY: "clips-modal-error-body",
                SUBMIT_BUTTON: "clips-modal-submit-button",
                CANCEL_BUTTON: "clips-modal-cancel-button"
            }),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? r.createElement(l._25, {
                            "data-test-selector": d.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: l.m.Alt,
                            fullWidth: !0
                        }, r.createElement(l._35, {
                            type: l._40.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? r.createElement(l._25, {
                            "data-test-selector": d.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: l.m.Alt,
                            fullWidth: !0
                        }, r.createElement(l._35, {
                            type: l._40.Strong,
                            color: l.I.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? r.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(l._25, {
                        padding: 2,
                        background: l.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), r.createElement(l._2, {
                        display: l.N.Flex,
                        justifyContent: l._1.Center
                    }, r.createElement(l._2, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(l.u, {
                        "data-test-selector": d.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(o.d)("Close", "ClipsModal")))))) : r.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(l._25, {
                        padding: 2,
                        background: l.m.Base,
                        className: "clip-modal"
                    }, r.createElement(l._25, {
                        "data-test-selector": d.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), r.createElement(l._25, {
                        "data-test-selector": d.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), r.createElement(l._2, {
                        display: l.N.Flex,
                        justifyContent: l._1.Center
                    }, r.createElement(l._2, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(l.u, {
                        "data-test-selector": d.CANCEL_BUTTON,
                        type: l.z.Text,
                        onClick: this.props.onClose
                    }, Object(o.d)("Cancel", "ClipsModal"))), r.createElement(l._2, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(l.u, {
                        "data-test-selector": d.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : l.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && r.createElement(l._4, {
                        delay: 0
                    })))))
                }, t
            }(r.Component),
            u = n("1OO3"),
            p = n("CSlQ"),
            m = 86400,
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        hasErrored: !1,
                        hasSucceeded: !1
                    }, t.renderTitle = function() {
                        return t.props.isTemporary ? r.createElement(l._35, {
                            type: l._40.H5,
                            ellipsis: !0
                        }, Object(o.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(l._35, {
                            type: l._40.H5,
                            ellipsis: !0
                        }, Object(o.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? r.createElement(l._35, null, Object(o.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser")) : r.createElement(l._35, null, Object(o.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(o.d)("Timeout User", "ClipsModalBanUser") : Object(o.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(o.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(o.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, m) : this.props.banUserMutation(e), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, t];
                                    case 2:
                                        return n.sent().banUserFromChatRoom.error ? this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }) : this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(c, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: l.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            h = Object(p.d)("ClipsModalBanUser")(Object(u.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(v)),
            f = n("7vx8"),
            k = n("wnjK"),
            g = n("LnKh"),
            b = (n("lTii"), this),
            y = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            C = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onDeleteClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), this.props.data.clip ? [4, this.props.deleteClip(this.props.slug)] : [2];
                                    case 2:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = y, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = [r.createElement(l._35, {
                        key: "title",
                        type: l._40.H4
                    }, Object(o.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(l._2, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, r.createElement(l._35, {
                        type: l._40.P,
                        color: l.I.Alt2
                    }, Object(o.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = r.createElement("span", null, " • ", Object(o.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = r.createElement(l._25, {
                        display: l.N.Flex,
                        flexWrap: l.Q.NoWrap
                    }, r.createElement(l._2, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, r.createElement(l.j, {
                        ratio: l.k.Aspect16x9
                    }, r.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), r.createElement(l._2, null, r.createElement(l._35, {
                        type: l._40.H5
                    }, this.props.data.clip.title), r.createElement(l._35, {
                        color: l.I.Alt2
                    }, Object(o.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), r.createElement(l._35, {
                        color: l.I.Alt2
                    }, Object(o.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return r.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: n,
                        buttonContent: Object(o.d)("Delete", "ClipsModalDelete"),
                        buttonType: l.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(o.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            S = Object(f.a)(g)(i({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return a.__awaiter(b, void 0, void 0, function() {
                                var n;
                                return a.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: [t]
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                        case 2:
                                            throw n = i.sent(), o.i.error(n, "Failed to delete clip"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(C)),
            N = n("3zLD"),
            _ = n("wqRA"),
            E = this,
            w = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            T = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.deleteAll = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.deleteAllClips(this.props.broadcastID, this.props.videoID)];
                                    case 2:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, t.state = w, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = r.createElement(l._35, {
                        type: l._40.P
                    }, Object(o.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return r.createElement(c, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: r.createElement(l._35, {
                            type: l._40.H4
                        }, Object(o.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(o.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: l.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(r.Component),
            I = Object(N.compose)(Object(p.d)("ClipsModalDeleteAll"), i({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return a.__awaiter(E, void 0, void 0, function() {
                                var i, r, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 6, , 7]), i = void 0, n ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        videoID: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return r = a.sent(), i = r.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return r = a.sent(), i = r.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(i.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw s = a.sent(), o.i.error(s, "Failed to delete clips from VOD"), s;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(f.a)(_, {
                props: function(e) {
                    var t = e.data.clip;
                    return t ? {
                        videoID: t.video ? t.video.id : null,
                        broadcastID: t.broadcast.id
                    } : {
                        videoID: null,
                        broadcastID: ""
                    }
                },
                options: function(e) {
                    return {
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }))(T),
            O = this,
            D = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            F = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, t.renderError = function() {
                        return t.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, t.onDeleteClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.deleteClips()];
                                    case 2:
                                        return e.sent(), this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = D, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(l._35, {
                            type: l._40.H4
                        }, Object(o.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = r.createElement(l._35, {
                            type: l._40.P
                        }, Object(o.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return r.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(o.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: l.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(r.Component),
            R = i({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return a.__awaiter(O, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: e.ownProps.clipSlugs
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                        case 2:
                                            throw t = n.sent(), o.i.error(t, "Failed to delete clips"), t;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(F);
        n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return h
        }), n.d(t, "d", function() {
            return S
        }), n.d(t, "e", function() {
            return I
        }), n.d(t, "c", function() {
            return R
        })
    },
    tGx1: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "recommendedClip"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Clip"
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
                            value: "title"
                        },
                        arguments: [],
                        directives: []
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
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }, {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsRecommendations"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "relatedClips"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "similar"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendedClip"
                                                },
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
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendedClip"
                                                },
                                                directives: []
                                            }]
                                        }
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
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendedClip"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "top"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendedClip"
                                                },
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
                end: 371
            }
        };
        n.loc.source = {
            body: "fragment recommendedClip on Clip {\nid\ntitle\nbroadcaster {\nid\ndisplayName\n}\ngame {\nid\ndisplayName\n}\nviewCount\n}\nquery ClipsRecommendations($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\nid\ndisplayName\n}\nbroadcaster {\nid\ndisplayName\n}\nrelatedClips {\nsimilar {\n...recommendedClip\n}\nbroadcaster {\n...recommendedClip\n}\ngame {\n...recommendedClip\n}\ntop {\n...recommendedClip\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    vlO0: function(e, t) {},
    vtXo: function(e, t) {},
    wnjK: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Clips_DeleteClips"
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
                                value: "DeleteClipsInput"
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
                            value: "deleteClips"
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
                                    value: "clips"
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
                                            value: "slug"
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
                end: 106
            }
        };
        n.loc.source = {
            body: "mutation Clips_DeleteClips($input: DeleteClipsInput!) {\ndeleteClips(input: $input) {\nclips {\nid\nslug\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wqRA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsModalDeleteAll_Clip"
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
                                    value: "video"
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
                                    value: "broadcast"
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
                end: 101
            }
        };
        n.loc.source = {
            body: "query ClipsModalDeleteAll_Clip($slug: ID!) {\nclip(slug: $slug) {\nid\nvideo {\nid\n}\nbroadcast {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    x4k6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowButton_User"
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
                                            value: "follower"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "disableNotifications"
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
            body: "query FollowButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nlogin\nself {\nfollower {\ndisableNotifications\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    x6ny: function(e, t) {
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
    xX9u: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("Odds"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(r.Y, {
                        readOnly: !0,
                        type: r.Z.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    xwpJ: function(e, t, n) {
        "use strict";

        function i() {
            return [{
                id: "other",
                text: Object(r.d)("Other Terms of Service Violation", "ReportUserModal")
            }]
        }
        var a = function(e, t) {
                var n = "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e);
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, n).replace(/{description}/, t)
            },
            r = n("6sO2");
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return i
        })
    },
    xwy4: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Add_Clip_Reaction"
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
                                value: "AddReactionInput"
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
                            value: "addReaction"
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
                                                value: "Clip"
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
                                                    value: "reactions"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "emote"
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
                                                            value: "count"
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
                                                                    value: "hasReacted"
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
                end: 178
            }
        };
        n.loc.source = {
            body: "mutation Add_Clip_Reaction($input: AddReactionInput!) {\naddReaction(input: $input) {\ncontent {\n... on Clip {\nid\nreactions {\nemote {\nid\ntoken\n}\ncount\nself {\nhasReacted\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=sites.clips.pages.clips-watch-040a57fa9e3465df2de4a86e13034b7d.js.map