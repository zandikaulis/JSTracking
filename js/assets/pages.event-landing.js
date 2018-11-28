(window.webpackJsonp = window.webpackJsonp || []).push([
    [61], {
        "/HY+": function(e, t, n) {
            "use strict";
            var i = n("dAHa"),
                a = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                d = n("aCAx"),
                c = n("GnwI"),
                u = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.Fb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, r.createElement(i.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), r.createElement(l.a, null))
                    }, t
                }(r.Component));
            var m = Object(s.compose)(Object(c.b)("ReportUserModal"), Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: d.c
                }, e)
            }))(p);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return i.c
            }), n.d(t, !1, function() {
                return i.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return i.b
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return m
            })
        },
        "/nm5": function(e, t, n) {},
        "0FG4": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return d
            });
            var i, a = n("RcPG"),
                r = n("a1OF");
            ! function(e) {
                e[e.Position = 0] = "Position", e[e.Token = 1] = "Token"
            }(i || (i = {}));
            var o = "0";

            function s(e, t, n) {
                var o = n.type === i.Position ? t : e,
                    s = n.map[o];
                if (s) {
                    var l = function(e, t) {
                        return {
                            images: {
                                sources: {
                                    "1x": Object(r.d)(t, 1),
                                    "2x": Object(r.d)(t, 2),
                                    "4x": Object(r.d)(t, 4)
                                },
                                themed: !1
                            },
                            alt: e
                        }
                    }(e, s.id);
                    return {
                        type: a.a.Emote,
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

            function d(e) {
                for (var t = {}, n = 0, i = e; n < i.length; n++) {
                    var a = i[n];
                    if (a && a.emotes)
                        for (var r = 0, s = a.emotes; r < s.length; r++) {
                            var d = s[r];
                            if (d && d.id && d.token)
                                for (var c = 0, u = l[d.token] || [d.token]; c < u.length; c++) {
                                    var p = u[c];
                                    t[p] && a.id === o || (t[p] = {
                                        id: d.id,
                                        token: p
                                    })
                                }
                        }
                }
                return t
            }
        },
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return c
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = a.o.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                l = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                d = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, d, c, u = this;
                        return i.__generator(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    return p.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return i.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return i.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, a.p.apollo.client.query({
                                                            query: o,
                                                            variables: {
                                                                name: e
                                                            }
                                                        })];
                                                    case 1:
                                                        return [2, (t = n.sent().data).game && t.game.id]
                                                }
                                            })
                                        })
                                    }), [4, Promise.all(t)];
                                case 1:
                                    return n = p.sent(), l = n.filter(function(e) {
                                        return !!e
                                    }), d = l.map(function() {
                                        return r.TwitchDataType.Game
                                    }), c = l.map(function() {
                                        return null
                                    }), a.o.trackItemSectionLoad({
                                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: l.length,
                                        rendered_item_list: l,
                                        rendered_item_types: d,
                                        rendered_items_viewcounts: c,
                                        location: s()
                                    }), [3, 3];
                                case 2:
                                    return p.sent(), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
        },
        "0Rl0": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                a = n("Ue10"),
                r = function() {
                    return i.createElement(a.G, null, i.createElement(a.o, {
                        ratio: a.p.Aspect16x9
                    }, i.createElement(a.jb, null)), i.createElement(a.H, null, i.createElement(a.Ya, {
                        display: a.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(a.Ya, {
                        display: a.X.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, i.createElement(a.jb, {
                        width: 40,
                        height: 56
                    })), i.createElement(a.Ya, {
                        display: a.X.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(a.W, null, i.createElement(a.jb, {
                        width: 150
                    })), i.createElement(a.W, {
                        fontSize: a.Ca.Size7
                    }, i.createElement(a.jb, {
                        width: 100
                    }))))))
                }
        },
        "0T/G": function(e, t) {},
        "0WFu": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return r
            });
            n("/7QA");
            var i = n("3Bft");

            function a(e) {
                return [i.a.Prime, i.a.Custom].includes(e) ? null : parseInt(e, 10) / 1e3
            }

            function r(e) {
                var t = e instanceof Date ? e : new Date(e);
                return Math.round((t.getTime() - Date.now()) / 864e5)
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
        "1Ijn": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoPreviewCard__VideoMoments"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoId"
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
                                        value: "videoId"
                                    }
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
                                        value: "moments"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "momentRequestType"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "VIDEO_CHAPTER_MARKERS"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "videoMomentEdge"
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "videoMomentEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoMomentEdge"
                        }
                    },
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "videoChapter"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "videoChapter"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoMoment"
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
                                value: "durationMilliseconds"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "positionMilliseconds"
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
                                value: "description"
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
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: "momentDetails"
                            },
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
                                        value: "lengthSeconds"
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
                        value: "momentDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoMoment"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "details"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "gameChangeDetails"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "hearthstoneDetails"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "overwatchDetails"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "pubgDetails"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "gameChangeDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameChangeMomentDetails"
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
                                        value: "displayName"
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
                                            value: "53"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "hearthstoneDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "HearthstoneMomentDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "broadcasterHero"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "class"
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
                                value: "opponentHero"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "class"
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
                                value: "gameMode"
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
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "value"
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
                        value: "overwatchDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "OverwatchMomentDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "role"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "heroName"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "pubgDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PUBGMomentDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "maxPlayerCount"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "minPlayerCount"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 946
                }
            };
            n.loc.source = {
                body: "query VideoPreviewCard__VideoMoments($videoId: ID!) {\nvideo(id: $videoId) {\nid\nmoments(momentRequestType: VIDEO_CHAPTER_MARKERS) {\nedges {\n...videoMomentEdge\n}\n}\n}\n}\nfragment videoMomentEdge on VideoMomentEdge {\ncursor\nnode {\n...videoChapter\n}\n}\nfragment videoChapter on VideoMoment {\nid\ndurationMilliseconds\npositionMilliseconds\ntype\ndescription\nthumbnailURL\n...momentDetails\nvideo {\nid\nlengthSeconds\n}\n}\nfragment momentDetails on VideoMoment {\ndetails {\n...gameChangeDetails\n...hearthstoneDetails\n...overwatchDetails\n...pubgDetails\n}\n}\nfragment gameChangeDetails on GameChangeMomentDetails {\ngame {\nid\ndisplayName\nboxArtURL(width: 40 height: 53)\n}\n}\nfragment hearthstoneDetails on HearthstoneMomentDetails {\nbroadcasterHero {\nid\nclass\nname\n}\nopponentHero {\nid\nclass\nname\n}\ngameMode {\ntype\nvalue\n}\n}\nfragment overwatchDetails on OverwatchMomentDetails {\nrole\nheroName\n}\nfragment pubgDetails on PUBGMomentDetails {\nmaxPlayerCount\nminPlayerCount\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "2hLa": function(e, t, n) {},
        "3Bft": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var i = {
                Prime: "prime",
                Tier1: "1000",
                Tier2: "2000",
                Tier3: "3000",
                Custom: "Custom"
            }
        },
        "41XU": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelBanner"
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
                                        value: "bannerImageURL"
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
                    end: 100
                }
            };
            n.loc.source = {
                body: "query ChannelBanner($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nlogin\nbannerImageURL\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "4c/Z": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("ZDlU"),
                s = n("yR8l"),
                l = n("V+GM"),
                d = n("NvVO"),
                c = n("2xye"),
                u = n("GnwI"),
                p = n("8/mp"),
                m = n("Bh3T"),
                h = n("irYM"),
                v = n("LfZz"),
                g = n("Jhye"),
                f = n("ug+5"),
                k = n("RcPG"),
                b = n("a1OF");
            n("p52R"), n("ZtEv"), n("60o1");

            function y(e) {
                var t = {};
                return e.forEach(function(e) {
                    t[e.from] = {
                        startIndex: e.from,
                        id: e.emoteID
                    }
                }), t
            }
            var S = n("Ue10"),
                C = /^(https?:\/\/)?(www.)?twitch\.tv/;

            function E(e, t, n, i) {
                void 0 === t && (t = []);
                for (var r, o = [], s = e.split(/\n/), l = function(e, l) {
                        if (e > 0 && (l += s[e - 1].length + 1), i && "" === s[e]) return o.push(a.createElement(S.W, {
                            key: e
                        }, "\n")), r = l, "continue";
                        var d = t.map(function(e) {
                                return function(e, t) {
                                    return {
                                        emoteID: e.emoteID,
                                        from: e.from - t,
                                        to: e.to - t,
                                        setID: e.setID
                                    }
                                }(e, l)
                            }).filter(function(t) {
                                return ! function(e, t) {
                                    return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
                                }(t, s[e].length)
                            }),
                            c = Object(b.e)(s[e], y(d), 0, {}, !1, n);
                        o.push(a.createElement(S.W, {
                            key: e
                        }, function(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var i = e[n];
                                switch (i.type) {
                                    case k.a.ClipLink:
                                        t.push(a.createElement("a", {
                                            key: n,
                                            href: i.content.url,
                                            target: "_blank"
                                        }, i.content.url));
                                        break;
                                    case k.a.VideoLink:
                                    case k.a.Link:
                                        i.content.url.match(C) ? t.push(a.createElement(S.U, {
                                            key: n,
                                            to: i.content.url.replace(C, "")
                                        }, i.content.displayText)) : t.push(a.createElement("a", {
                                            key: n,
                                            href: i.content.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                        }, i.content.displayText));
                                        break;
                                    case k.a.Mention:
                                        t.push(a.createElement(S.U, {
                                            key: n,
                                            to: "/" + i.content.recipient
                                        }, i.content.recipient));
                                        break;
                                    case k.a.Emote:
                                        i.content.images.themed || t.push(a.createElement("img", {
                                            key: n,
                                            src: i.content.images.sources["1x"],
                                            alt: i.content.alt
                                        }));
                                        break;
                                    case k.a.Text:
                                        t.push(a.createElement("span", {
                                            key: n
                                        }, i.content))
                                }
                            }
                            return t
                        }(c))), r = l
                    }, d = 0, c = 0; d < s.length; d++) l(d, c), c = r;
                return o
            }
            n("z8L7");
            var w, _, N, T, O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = Object(r.d)("No description listed", "EventLandingDescription");
                        return "" !== this.props.description && (e = this.props.description), a.createElement(S.Ya, null, a.createElement(S.W, {
                            transform: S.Vb.Uppercase,
                            type: S.Wb.H5,
                            color: S.O.Alt2
                        }, Object(r.d)("Description", "EventLandingDescription")), a.createElement(S.Ya, {
                            margin: {
                                top: 1
                            },
                            className: "event-landing-description__text"
                        }, E(e, [], "", !0)))
                    }, t = i.__decorate([Object(u.b)("EventLandingDescription")], t)
                }(a.Component),
                I = Object(u.b)("TimetableHeader", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = a.createElement(h.a, {
                        eventID: e.event.id,
                        eventTypename: "EventCollection",
                        areNotificationsEnabled: e.event.self.isFollowing,
                        channelID: e.event.owner && e.event.owner.id || void 0,
                        channelLogin: e.event.owner && e.event.owner.login || void 0,
                        eventLocation: f.a.EventDetails
                    });
                    e.event.isLive && (t = a.createElement(S.z, {
                        linkTo: {
                            pathname: "/" + e.event.liveChannelLogin,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, Object(r.d)("Watch Now", "TimetableHeader")));
                    var n = a.createElement(S.Ya, {
                            display: S.X.Flex
                        }, a.createElement(S.Ya, {
                            margin: {
                                right: 1
                            }
                        }, t), a.createElement(S.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.a, {
                            id: e.event.id,
                            title: e.event.title,
                            eventLocation: f.a.EventDetails
                        })), e.event.owner && a.createElement(v.a, {
                            targetUser: {
                                id: e.event.owner.id,
                                displayName: e.event.owner.displayName
                            },
                            eventID: e.event.id,
                            balloonDirection: S.v.Bottom
                        })),
                        i = a.createElement(S.Ya, null, Object(r.d)("To Be Announced", "TimetableHeader"));
                    e.event.startAt && (i = e.event.isLive ? a.createElement(S.Ya, {
                        display: S.X.Flex
                    }, a.createElement(S.Ya, null, a.createElement(S.K, {
                        status: S.M.Live
                    })), a.createElement(S.Fb, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(S.W, null, Object(r.d)("Happening Now", "TimetableHeader")))) : a.createElement(S.Ya, null, a.createElement(S.W, null, Object(r.j)(e.event.startAt, {
                        weekday: "long",
                        month: "short",
                        day: "numeric"
                    }))));
                    var o = null;
                    if (e.event.startAt && e.event.endAt) {
                        var s = Object(r.j)(e.event.endAt, {
                            weekday: "long",
                            month: "short",
                            day: "numeric",
                            timeZoneName: "short"
                        });
                        o = a.createElement(S.Ya, null, a.createElement(S.W, null, Object(r.d)("to {endDate}", {
                            endDate: s
                        }, "TimetableHeader")))
                    }
                    return a.createElement(S.Ya, {
                        margin: .5
                    }, a.createElement(S.Fb, {
                        border: !0,
                        background: S.r.Base
                    }, a.createElement(S.Ya, null, a.createElement("img", {
                        src: e.event.imageURL
                    })), a.createElement(S.Ya, {
                        margin: 1
                    }, a.createElement(S.Fb, {
                        borderBottom: !0,
                        padding: {
                            y: 1
                        }
                    }, a.createElement(S.W, {
                        type: S.Wb.H3
                    }, e.event.title)), a.createElement(S.Fb, {
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: .5
                        }
                    }, i, o), a.createElement(S.Ya, {
                        margin: {
                            y: 1
                        }
                    }, n))), a.createElement(S.Fb, {
                        border: !0,
                        background: S.r.Base,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(S.Ya, {
                        margin: 1
                    }, a.createElement(O, {
                        description: e.event.description
                    }))))
                }),
                F = n("ZbA5"),
                L = n("oB8h"),
                R = n("yWUM"),
                x = n("TSYQ"),
                D = n("hyVY"),
                M = (n("Ljgq"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hovered: !1,
                            didAnimatedPreviewLoad: !1,
                            didAnimatedPreviewFailToLoad: !1
                        }, t.onMouseEnterHandler = function() {
                            t.setState({
                                hovered: !0
                            })
                        }, t.onMouseLeaveHandler = function() {
                            t.setState({
                                hovered: !1
                            })
                        }, t.onPreviewImageLoad = function(e) {
                            t.props.latencyTracking.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                                didAnimatedPreviewLoad: !0
                            })
                        }, t.onPreviewImageLoadError = function(e) {
                            e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                                didAnimatedPreviewFailToLoad: !0
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = "?t=";
                        return this.props.offsetSeconds && this.props.offsetSeconds > 0 && (e += Object(R.a)(this.props.offsetSeconds)), a.createElement("div", i.__assign({
                            onMouseEnter: this.onMouseEnterHandler,
                            onMouseLeave: this.onMouseLeaveHandler
                        }, Object(S.kc)(this.props)), a.createElement(S.G, null, a.createElement(S.U, {
                            to: {
                                pathname: "/videos/" + this.props.video.id,
                                search: e,
                                state: this.props.tracking
                            },
                            title: this.props.video.title || "",
                            "data-test-selector": "preview-image-link",
                            hoverUnderlineNone: !0
                        }, a.createElement(S.Ya, {
                            fullWidth: !0
                        }, a.createElement(S.o, {
                            overflow: !0
                        }, a.createElement("div", null, a.createElement(S.Fb, {
                            display: S.X.InlineFlex,
                            position: S.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: .5,
                            zIndex: S.jc.Default,
                            fontSize: S.Ca.Size6,
                            background: S.r.Overlay,
                            color: S.O.Overlay,
                            className: "event-video-card__preview-overlay-stat"
                        }, a.createElement(S.Eb, {
                            "data-test-selector": "video-view-count",
                            icon: S.ub.GlyphViews,
                            label: Object(r.d)("views", "EventVideoCard"),
                            value: Object(r.g)(this.props.video.viewCount || 0)
                        })), a.createElement(S.Fb, {
                            display: S.X.InlineFlex,
                            position: S.kb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            margin: .5,
                            zIndex: S.jc.Default,
                            fontSize: S.Ca.Size6,
                            background: S.r.Overlay,
                            color: S.O.Overlay,
                            className: "event-video-card__preview-overlay-stat"
                        }, a.createElement(S.Eb, {
                            "data-test-selector": "video-length",
                            icon: S.ub.GlyphLength,
                            label: Object(r.d)("length", "EventVideoCard"),
                            value: Object(D.b)(this.props.video.lengthSeconds || 0)
                        })), this.videoPreviewImage()))))))
                    }, t.prototype.videoPreviewImage = function() {
                        var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                            t = x("event-video-card__image-wrapper"),
                            n = x("event-video-card__preview-image", {
                                "event-video-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                            });
                        return a.createElement(S.o, {
                            overflow: !0
                        }, a.createElement("div", {
                            className: t
                        }, a.createElement(S.Qa, {
                            flexShrink: 0
                        }, a.createElement("figure", null, a.createElement(S.o, {
                            ratio: S.p.Aspect16x9
                        }, a.createElement("img", {
                            alt: this.props.video.title || "",
                            className: n,
                            "data-test-selector": "preview-image",
                            onLoad: this.onPreviewImageLoad,
                            onError: this.onPreviewImageLoadError,
                            src: e || ""
                        }))))))
                    }, t
                }(a.Component)),
                A = Object(u.b)("EventVideoCard")(M);

            function j(e) {
                var t = null;
                e.videos && e.videos.edges && e.videos.edges.length > 0 && (t = function(e) {
                    var t = e.offsetSeconds,
                        n = e.node,
                        i = null;
                    if (n) {
                        var a = null;
                        n.owner && n.owner.displayName && n.owner.id && n.owner.login && (a = n.owner), i = {
                            __typename: "Video",
                            id: n.id,
                            game: null,
                            lengthSeconds: n.lengthSeconds || 0,
                            owner: a,
                            animatedPreviewURL: n.animatedPreviewURL,
                            previewThumbnailURL: n.previewThumbnailURL,
                            publishedAt: n.publishedAt || "",
                            self: null,
                            title: n.title || "",
                            viewCount: n.viewCount || 0,
                            restriction: null,
                            contentTags: null
                        }
                    }
                    return {
                        offsetSeconds: t,
                        node: i
                    }
                }(e.videos.edges[0]));
                var n = null;
                null !== e.channel && (n = {
                    id: e.channel.id || "",
                    login: e.channel.login || "",
                    displayName: e.channel.displayName || "",
                    profileImageURL: e.channel.profileImageURL || ""
                });
                var i = null;
                null !== e.owner && (i = {
                    id: e.owner.id || "",
                    login: e.owner.login || "",
                    displayName: e.owner.displayName || ""
                });
                var a = null;
                null !== e.game && (a = {
                    id: e.game.id,
                    name: e.game.name,
                    displayName: e.game.displayName || e.game.name,
                    boxArtURL: e.game.boxArtURL || ""
                });
                var r = _.SINGLE;
                return "PREMIERE" === e.type && (r = _.PREMIERE), {
                    id: e.id,
                    type: r,
                    owner: i,
                    title: e.title,
                    description: e.description,
                    imageURL: e.imageURL,
                    startAt: e.startAt,
                    endAt: e.endAt,
                    channel: n,
                    game: a,
                    self: {
                        isFollowing: e.self && e.self.isFollowing || !1
                    },
                    parent: e.parent,
                    video: t,
                    premiere: function(e) {
                        if (!e.premiere) return null;
                        return {
                            status: e.premiere.status,
                            pastPremiere: e.premiere.pastPremiere
                        }
                    }(e)
                }
            }

            function U(e, t) {
                var n = new Date;
                return t && (n = t),
                    function(e, t) {
                        if (t < e.endAt) return e.premiere ? e.premiere.status === N.STARTED : t > e.startAt;
                        return !1
                    }(e, n) ? T.LIVE : function(e, t) {
                        if (e.premiere) return t < e.endAt;
                        return t < e.startAt
                    }(e, n) ? T.FUTURE : T.PAST
            }! function(e) {
                e.EVENT_LEAF = "EventLeaf", e.EVENT_COLLECTION = "EventCollection"
            }(w || (w = {})),
            function(e) {
                e.PREMIERE = "Premiere", e.SINGLE = "Live Stream"
            }(_ || (_ = {})),
            function(e) {
                e.UNSCHEDULED = "UNSCHEDULED", e.SCHEDULED = "SCHEDULED", e.CANCELLED = "CANCELLED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.FAILED = "FAILED", e.UNKNOWN = "UNKNOWN"
            }(N || (N = {})),
            function(e) {
                e.LIVE = "LIVE", e.FUTURE = "FUTURE", e.PAST = "PAST"
            }(T || (T = {}));
            n("9Gue");
            var P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onExpandClick = function() {
                            return t.props.onExpand(t.props.event.id)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.expanded ? this.expandedSegment() : this.collapsedSegment()
                    }, t.prototype.collapsedSegment = function() {
                        var e = Object(r.c)(this.props.event.startAt, {
                                month: "short"
                            }),
                            t = Object(r.c)(this.props.event.startAt, {
                                day: "numeric"
                            }),
                            n = U({
                                startAt: this.props.event.startAt,
                                endAt: this.props.event.endAt
                            }),
                            i = null;
                        n === T.LIVE && (i = a.createElement(S.Ya, {
                            flexShrink: 0
                        }, a.createElement(S.hb, {
                            label: Object(r.d)("Live", "EventLandingPage"),
                            type: S.ib.Live
                        })));
                        var o, s, l = a.createElement(S.Fb, {
                            display: S.X.Flex,
                            borderBottom: !0,
                            padding: {
                                y: 1
                            }
                        }, a.createElement("button", {
                            "data-test-selector": "collapsed-segment-title",
                            onClick: this.onExpandClick
                        }, a.createElement(S.W, {
                            className: "timetable-segment__title-link",
                            bold: !0,
                            color: S.O.Link,
                            type: S.Wb.H5,
                            ellipsis: !0
                        }, this.props.event.title)));
                        i && (l = a.createElement(S.Fb, {
                            borderBottom: !0,
                            padding: {
                                y: 1
                            },
                            display: S.X.Flex,
                            flexWrap: S.Ba.NoWrap,
                            alignItems: S.f.Center
                        }, i, a.createElement(S.Ya, {
                            display: S.X.Flex,
                            margin: {
                                left: .5
                            }
                        }, a.createElement("button", {
                            onClick: this.onExpandClick
                        }, a.createElement(S.W, {
                            className: "timetable-segment__title-link",
                            bold: !0,
                            color: S.O.Link,
                            type: S.Wb.H5,
                            ellipsis: !0
                        }, this.props.event.title))))), this.props.event.channel && (o = this.props.event.channel.id || void 0, s = this.props.event.channel.login || void 0);
                        var d = a.createElement(h.a, {
                            eventID: this.props.event.id,
                            eventTypename: "EventLeaf",
                            areNotificationsEnabled: this.props.event.self.isFollowing,
                            eventLocation: f.a.EventDetails,
                            channelID: o,
                            channelLogin: s,
                            small: !0
                        });
                        n === T.LIVE ? d = a.createElement(S.Ya, null, a.createElement(S.z, {
                            linkTo: {
                                pathname: "/" + s,
                                state: {
                                    content: "call_to_action",
                                    medium: "event_page"
                                }
                            },
                            size: S.D.Small
                        }, this.getWatchNowText())) : n === T.PAST && (d = null);
                        var c = null;
                        return this.props.event.game && (c = a.createElement(a.Fragment, null, a.createElement(S.Ya, {
                            margin: {
                                x: 1
                            }
                        }, "•"), a.createElement(S.Ya, {
                            margin: {
                                right: 1
                            },
                            display: S.X.Flex,
                            alignItems: S.f.Center,
                            overflow: S.db.Hidden
                        }, a.createElement(S.Ya, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(S.Fb, {
                            display: S.X.Flex,
                            alignItems: S.f.Center,
                            color: S.O.Alt2
                        }, a.createElement(S.tb, {
                            asset: S.ub.NavGames,
                            width: 18,
                            height: 18
                        }))), a.createElement(S.W, {
                            fontSize: S.Ca.Size5,
                            ellipsis: !0
                        }, a.createElement(S.U, {
                            to: "/directory/game/" + encodeURIComponent(this.props.event.game.name)
                        }, this.props.event.game.displayName))))), a.createElement("div", null, a.createElement(S.Fb, {
                            className: "timetable-segment__row",
                            border: !0,
                            fullWidth: !0,
                            margin: {
                                y: 1
                            },
                            display: S.X.Flex,
                            flexWrap: S.Ba.NoWrap,
                            alignItems: S.f.Center,
                            background: S.r.Base
                        }, a.createElement(S.Ya, {
                            className: "timetable-segment__calendar-date",
                            display: S.X.Flex,
                            flexShrink: 0,
                            flexDirection: S.Aa.Column,
                            justifyContent: S.Xa.Center,
                            alignItems: S.f.Center
                        }, a.createElement(S.W, {
                            fontSize: S.Ca.Size6,
                            transform: S.Vb.Uppercase
                        }, e), a.createElement(S.W, {
                            fontSize: S.Ca.Size3
                        }, t)), a.createElement(S.Ya, {
                            overflow: S.db.Hidden,
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, l, a.createElement(S.Ya, {
                            display: S.X.Flex,
                            justifyContent: S.Xa.Between,
                            alignItems: S.f.Center,
                            flexWrap: S.Ba.NoWrap,
                            overflow: S.db.Hidden
                        }, a.createElement(S.Ya, {
                            padding: {
                                y: 1
                            },
                            display: S.X.Flex,
                            overflow: S.db.Hidden
                        }, a.createElement(S.Ya, {
                            flexShrink: 0
                        }, a.createElement(S.W, {
                            type: S.Wb.H5
                        }, Object(r.j)(this.props.event.startAt, {
                            weekday: "long",
                            timezoneName: "short"
                        }))), c), d))))
                    }, t.prototype.expandedSegment = function() {
                        var e, t, n = {
                                backgroundImage: "url(" + this.props.event.imageURL + ")"
                            },
                            i = U({
                                startAt: this.props.event.startAt,
                                endAt: this.props.event.endAt
                            });
                        this.props.event.channel && (e = this.props.event.channel.id || void 0, t = this.props.event.channel.login || void 0);
                        var o = a.createElement(h.a, {
                            eventID: this.props.event.id,
                            eventTypename: "EventSegment",
                            areNotificationsEnabled: this.props.event.self.isFollowing,
                            channelID: e,
                            channelLogin: t,
                            eventLocation: f.a.EventDetails
                        });
                        if (i === T.LIVE) o = a.createElement(S.z, {
                            linkTo: {
                                pathname: "/" + t,
                                state: {
                                    content: "call_to_action",
                                    medium: "event_page"
                                }
                            }
                        }, this.getWatchNowText());
                        else if (i === T.PAST && this.props.event.video && this.props.event.video.node) {
                            var s = "";
                            this.props.event.video.offsetSeconds && (s = "t=" + Object(R.a)(this.props.event.video.offsetSeconds)), o = a.createElement(S.z, {
                                linkTo: {
                                    pathname: "/videos/" + this.props.event.video.node.id,
                                    search: s,
                                    state: {
                                        content: c.PageviewContent.EventPast,
                                        medium: c.PageviewMedium.EventDetails
                                    }
                                }
                            }, Object(r.d)("Watch Video", "TimetableSegment"))
                        } else i === T.PAST && (o = a.createElement(S.z, {
                            disabled: !0
                        }, Object(r.d)("Past Event", "TimetableSegment")));
                        var l = null;
                        if (this.props.event.game && this.props.event.game.boxArtURL && (l = a.createElement(S.Ya, {
                                className: "timetable-segment__expanded-image",
                                flexShrink: 0,
                                margin: {
                                    right: 2
                                }
                            }, a.createElement("img", {
                                src: this.props.event.game.boxArtURL,
                                height: 130,
                                width: 93
                            }))), i === T.LIVE && this.props.event.channel && this.props.event.channel.stream && this.props.event.channel.stream.previewImageURL && (l = a.createElement(S.Ya, {
                                position: S.kb.Relative
                            }, a.createElement(S.Ya, {
                                position: S.kb.Absolute,
                                attachLeft: !0,
                                attachTop: !0,
                                padding: .5
                            }, a.createElement(F.a, {
                                type: L.a.Live
                            })), a.createElement("img", {
                                src: this.props.event.channel.stream.previewImageURL,
                                height: 120,
                                width: 190
                            }))), i === T.PAST && this.props.event.video && this.props.event.video.node) {
                            var d = {
                                content: c.PageviewContent.EventPast,
                                medium: c.PageviewMedium.EventDetails
                            };
                            l = a.createElement("div", {
                                className: "timetable-segment__video-embed"
                            }, a.createElement(A, {
                                video: this.props.event.video.node,
                                offsetSeconds: this.props.event.video.offsetSeconds,
                                tracking: d
                            }))
                        }
                        var u = a.createElement(S.W, {
                            color: S.O.Overlay
                        }, Object(r.j)(this.props.event.startAt, {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            timeZoneName: "short"
                        }));
                        i === T.LIVE && (u = a.createElement(S.Ya, {
                            position: S.kb.Relative
                        }, a.createElement(S.W, {
                            color: S.O.Overlay
                        }, "" + Object(r.c)(this.props.event.startAt, {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                        })), a.createElement(S.W, {
                            color: S.O.Overlay
                        }, Object(r.d)("Happening Now until", "TimeTableSegment") + " " + Object(r.j)(this.props.event.endAt, {
                            timeZoneName: "short"
                        }))));
                        var p = null;
                        return this.props.event.game && (p = a.createElement(S.Ya, {
                            className: "events-landing-collection__game-link",
                            margin: {
                                right: 1
                            },
                            display: S.X.Flex,
                            alignItems: S.f.Center
                        }, a.createElement(S.Ya, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(S.Fb, {
                            display: S.X.Flex,
                            alignItems: S.f.Center,
                            color: S.O.Alt2,
                            overflow: S.db.Hidden
                        }, a.createElement(S.tb, {
                            asset: S.ub.NavGames,
                            width: 18,
                            height: 18
                        }))), a.createElement(S.W, {
                            fontSize: S.Ca.Size5,
                            ellipsis: !0
                        }, a.createElement(S.U, {
                            to: "/directory/game/" + encodeURIComponent(this.props.event.game.name)
                        }, this.props.event.game.displayName)))), a.createElement(S.Fb, {
                            border: !0,
                            elevation: 2,
                            fullWidth: !0,
                            margin: {
                                y: 1
                            },
                            background: S.r.Base,
                            position: S.kb.Relative
                        }, a.createElement(S.Ya, {
                            position: S.kb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            padding: {
                                top: .5,
                                right: .5
                            }
                        }, a.createElement(S.z, {
                            overlay: !0,
                            type: S.F.Text,
                            icon: S.ub.Close,
                            onClick: this.props.onDismissExpand
                        })), a.createElement(S.Fb, {
                            borderBottom: !0
                        }, a.createElement("div", {
                            style: n
                        }, a.createElement("div", {
                            className: "events-landing-collection__expanded-segment-header"
                        }, a.createElement(S.Ya, {
                            display: S.X.Flex,
                            alignItems: S.f.End,
                            flexWrap: S.Ba.NoWrap,
                            padding: {
                                top: 3,
                                x: 2,
                                bottom: 1
                            }
                        }, l, a.createElement(S.Ya, {
                            className: "events-landing-collection__meta",
                            flexGrow: 1
                        }, a.createElement(S.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(S.Ya, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(S.W, {
                            color: S.O.Overlay,
                            type: S.Wb.H3
                        }, this.props.event.title)), u), a.createElement(S.Ya, {
                            display: S.X.Flex,
                            alignItems: S.f.Center,
                            flexWrap: S.Ba.NoWrap,
                            justifyContent: S.Xa.Between
                        }, p, a.createElement(S.Ya, {
                            display: S.X.Flex,
                            flexWrap: S.Ba.NoWrap,
                            flexShrink: 0
                        }, a.createElement(S.Ya, {
                            margin: {
                                right: 1
                            }
                        }, o), a.createElement(S.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.a, {
                            id: this.props.event.id,
                            title: this.props.event.title,
                            channelID: e,
                            channelLogin: t,
                            eventLocation: f.a.EventDetails
                        })), a.createElement(v.a, {
                            targetUser: {
                                id: t || "",
                                displayName: this.props.event.channel && this.props.event.channel.displayName || "User"
                            },
                            eventID: this.props.event.id,
                            balloonDirection: S.v.BottomRight,
                            tailOffset: 10
                        })))))))), a.createElement(S.Ya, {
                            margin: 2
                        }, a.createElement(O, {
                            description: this.props.event.description
                        })))
                    }, t.prototype.getWatchNowText = function() {
                        return Object(r.d)("Watch Now", "TimetableSegment")
                    }, t
                }(a.PureComponent),
                B = Object(u.b)("EventCollectionSegment", {
                    autoReportInteractive: !0
                })(P);

            function W(e) {
                return null !== e
            }
            var z = n("IxV+"),
                V = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.loadNextPage = function() {
                            return n.setState({
                                loadingForward: !0
                            }), n.props.loadNextPage()
                        }, n.loadPreviousPage = function() {
                            return n.setState({
                                loadingForward: !1
                            }), n.props.loadPreviousPage()
                        }, n.unexpand = function() {
                            n.setState({
                                expandedEvent: null
                            })
                        }, n.setExpanded = function(e) {
                            r.p.history.replace(i.__assign({}, r.p.history.location, {
                                state: i.__assign({}, r.p.history.location.state, {
                                    expandedSegmentID: e
                                })
                            })), n.setState({
                                expandedEvent: e
                            })
                        };
                        var a = null;
                        return n.props.defaultLeaves && n.props.defaultLeaves.length && (a = n.props.defaultLeaves[0].id), n.state = {
                            expandedEvent: a,
                            loadingForward: !0
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.props.eventLeaves && this.props.eventLeaves.length || null === this.state.expandedEvent && e.eventLeaves && e.eventLeaves.length && this.setState({
                            expandedEvent: e.eventLeaves[0].id
                        })
                    }, t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.eventLeaves.map(function(t) {
                                return a.createElement(B, {
                                    key: t.id,
                                    expanded: t.id === e.state.expandedEvent,
                                    event: t,
                                    onDismissExpand: e.unexpand,
                                    onExpand: e.setExpanded
                                })
                            }),
                            n = null;
                        this.props.hasPreviousPage && (n = a.createElement(S.Ya, {
                            fullWidth: !0,
                            display: S.X.Flex,
                            justifyContent: S.Xa.Center
                        }, a.createElement(S.z, {
                            type: S.F.Text,
                            icon: S.ub.GlyphArrUp,
                            onClick: this.loadPreviousPage
                        }, Object(r.d)("Load Earlier Events", "TimetableSchedule"))));
                        var i = null;
                        return this.props.loading && (i = a.createElement(S.ab, null)), a.createElement(S.Ya, {
                            className: "events-landing-collection__main-col",
                            position: S.kb.Relative,
                            margin: {
                                left: 3
                            }
                        }, a.createElement(S.Fb, {
                            display: S.X.Flex,
                            justifyContent: S.Xa.Between,
                            margin: {
                                y: 1
                            },
                            padding: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, a.createElement(S.W, {
                            transform: S.Vb.Uppercase,
                            color: S.O.Alt2,
                            type: S.Wb.H5
                        }, Object(r.d)("Schedule", "TimetableSchedule"))), a.createElement(S.Ya, null, n, !this.state.loadingForward && i, t, this.state.loadingForward && i, a.createElement(p.a, {
                            enabled: this.props.hasNextPage,
                            loadMore: this.loadNextPage
                        })))
                    }, t.prototype.onRender = function() {
                        this.props.eventLeaves.length && this.props.latencyTracking.reportInteractive()
                    }, t = i.__decorate([Object(s.a)(z, {
                        options: function(e) {
                            var t = null;
                            return e.defaultLeaves && e.defaultLeaves.length && (t = e.defaultLeaves[e.defaultLeaves.length - 1].id), {
                                variables: {
                                    eventID: e.event.id,
                                    nextCount: 10,
                                    nextCursor: "",
                                    prevCount: null,
                                    prevCursor: null,
                                    criteria: {
                                        firstPageOptions: {
                                            eventID: t,
                                            endsAfter: e.now
                                        }
                                    }
                                }
                            }
                        },
                        props: function(e) {
                            var t = e.ownProps.defaultLeaves || [];
                            return {
                                eventLeaves: function(e, t) {
                                    var n = new Map;
                                    return e.forEach(function(e) {
                                        n.set(e.id, e)
                                    }), e.concat(t.filter(function(e) {
                                        return !n.has(e.id)
                                    }))
                                }(function(e) {
                                    return (e.event && e.event.__typename === w.EVENT_COLLECTION && e.event.leaves && e.event.leaves.edges || []).map(function(e) {
                                        if (!e.node) return null;
                                        var t;
                                        if (!e.node.channel) return null;
                                        var n = null;
                                        e.node.channel.stream && (n = {
                                            previewImageURL: e.node.channel.stream.previewImageURL
                                        }), t = {
                                            id: e.node.channel.id || "",
                                            login: e.node.channel.login || "",
                                            displayName: e.node.channel.displayName || "",
                                            profileImageURL: e.node.channel.profileImageURL || "",
                                            stream: n
                                        };
                                        var i = null;
                                        e.node.game && (i = {
                                            id: e.node.game.id,
                                            name: e.node.game.name,
                                            displayName: e.node.game.displayName,
                                            boxArtURL: e.node.game.boxArtURL || ""
                                        });
                                        var a = null;
                                        return e.node.videos && e.node.videos.edges && e.node.videos.edges.length && (a = {
                                            node: e.node.videos.edges[0].node,
                                            offsetSeconds: e.node.videos.edges[0].offsetSeconds
                                        }), {
                                            id: e.node.id,
                                            title: e.node.title,
                                            description: e.node.description,
                                            imageURL: e.node.imageURL,
                                            startAt: new Date(e.node.startAt),
                                            endAt: new Date(e.node.endAt),
                                            channel: t,
                                            game: i,
                                            video: a,
                                            self: {
                                                isFollowing: e.node.self && e.node.self.isFollowing || !1
                                            }
                                        }
                                    }).filter(W)
                                }(e.data), t),
                                hasNextPage: e.data.event && e.data.event.__typename === w.EVENT_COLLECTION && e.data.event.leaves && e.data.event.leaves.pageInfo.hasNextPage,
                                hasPreviousPage: e.data.event && e.data.event.__typename === w.EVENT_COLLECTION && e.data.event.leaves && e.data.event.leaves.pageInfo.hasPreviousPage,
                                loading: e.data.loading,
                                loadNextPage: function() {
                                    return e.data.fetchMore({
                                        variables: {
                                            eventID: e.data.event && e.data.event.__typename === w.EVENT_COLLECTION && e.data.event.id,
                                            nextCount: 10,
                                            nextCursor: function(e) {
                                                return e.event && e.event.__typename === w.EVENT_COLLECTION && e.event.leaves && e.event.leaves.edges && 0 !== e.event.leaves.edges.length ? e.event.leaves.edges[e.event.leaves.edges.length - 1].cursor : ""
                                            }(e.data),
                                            prevCount: null,
                                            prevCursor: null
                                        },
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            if (!(n && n.event && e.event && n.event.__typename === w.EVENT_COLLECTION && e.event.__typename === w.EVENT_COLLECTION && e.event.leaves && n.event.leaves)) return e;
                                            var a = e.event.leaves.edges || [],
                                                r = n.event.leaves.edges || [];
                                            return i.__assign({}, e, {
                                                event: i.__assign({}, e.event, {
                                                    leaves: i.__assign({}, e.event.leaves, {
                                                        edges: a.concat(r),
                                                        pageInfo: i.__assign({}, e.event.leaves.pageInfo, {
                                                            hasNextPage: n.event.leaves.pageInfo.hasNextPage,
                                                            hasPreviousPage: e.event.leaves.pageInfo.hasPreviousPage
                                                        })
                                                    })
                                                })
                                            })
                                        }
                                    })
                                },
                                loadPreviousPage: function() {
                                    return e.data.fetchMore({
                                        variables: {
                                            eventID: e.data.event && e.data.event.__typename === w.EVENT_COLLECTION && e.data.event.id,
                                            nextCount: null,
                                            nextCursor: null,
                                            prevCount: 10,
                                            prevCursor: function(e) {
                                                return e.event && e.event.__typename === w.EVENT_COLLECTION && e.event.leaves && e.event.leaves.edges && 0 !== e.event.leaves.edges.length ? e.event.leaves.edges[0].cursor : ""
                                            }(e.data)
                                        },
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            if (!(n && n.event && e.event && n.event.__typename === w.EVENT_COLLECTION && e.event.__typename === w.EVENT_COLLECTION && e.event.leaves && n.event.leaves)) return e;
                                            var a = e.event.leaves.edges || [],
                                                r = n.event.leaves.edges || [];
                                            return i.__assign({}, e, {
                                                event: i.__assign({}, e.event, {
                                                    leaves: i.__assign({}, e.event.leaves, {
                                                        edges: r.concat(a),
                                                        pageInfo: i.__assign({}, e.event.leaves.pageInfo, {
                                                            hasNextPage: e.event.leaves.pageInfo.hasNextPage,
                                                            hasPreviousPage: n.event.leaves.pageInfo.hasPreviousPage
                                                        })
                                                    })
                                                })
                                            })
                                        }
                                    })
                                }
                            }
                        }
                    })], t)
                }(a.Component),
                G = Object(u.b)("EventCollectionSchedule")(V),
                H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            now: new Date
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(G, i.__assign({}, this.props, {
                            now: this.state.now
                        }))
                    }, t
                }(a.Component),
                Y = (n("gl36"), Object(u.b)("EventCollectionPageComponent", {
                    autoReportInteractive: !0
                })(function(e) {
                    return a.createElement(S.Ya, {
                        className: "events-landing-collection",
                        margin: {
                            top: 3
                        }
                    }, a.createElement(m.b, {
                        suppressScrollX: !0,
                        disableDebounce: !0
                    }), a.createElement(S.Ya, {
                        className: "events-landing-collection__info-col"
                    }, a.createElement(p.c, null, a.createElement(I, {
                        event: e.event
                    }))), a.createElement(H, {
                        event: e.event,
                        defaultLeaves: e.defaultLeaves
                    }))
                })),
                X = n("zxEZ"),
                q = n("sSlw"),
                Q = (n("jKKg"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            countdownActive: !0
                        }, t.cancelCountdown = function() {
                            t.setState({
                                countdownActive: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = x({
                                "event-landing-action__progress": this.state.countdownActive
                            }),
                            t = "";
                        "function" == typeof r.d && (t = Object(r.d)("This event is Live! Head to the channel page to watch and chat.", "EventLandingAction"), this.state.countdownActive && (t = Object(r.d)("This event is Live! Redirecting to the channel page in 5 seconds.", "EventLandingAction")));
                        var n = a.createElement(S.Ya, {
                                margin: {
                                    left: 1
                                }
                            }, a.createElement(S.z, {
                                linkTo: {
                                    pathname: "/" + this.props.login,
                                    state: {
                                        content: "cancelled_countdown",
                                        medium: "event_page"
                                    }
                                }
                            }, Object(r.d)("Go to Channel", "EventLandingAction"))),
                            i = null;
                        this.state.countdownActive && (n = a.createElement(S.Ya, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(S.z, {
                            onClick: this.cancelCountdown
                        }, Object(r.d)("Cancel", "EventLandingAction"))), i = a.createElement(S.nb, {
                            animationDirection: S.ob.Down,
                            animationDuration: 5,
                            onAnimationEnd: this.props.onCountdownSuccess,
                            size: S.pb.Small
                        }));
                        var o = a.createElement(S.K, {
                            status: S.M.Live
                        });
                        return this.props.premiere && (o = a.createElement(S.tb, {
                            asset: S.ub.VideoPremiere,
                            type: S.vb.Live,
                            width: 10
                        })), a.createElement(S.Ya, null, a.createElement(S.Fb, {
                            display: S.X.Flex,
                            flexWrap: S.Ba.NoWrap,
                            border: !0,
                            margin: {
                                top: 2
                            },
                            alignItems: S.f.Center,
                            className: "event-landing-action__strip",
                            background: S.r.Base
                        }, a.createElement(S.Ya, {
                            display: S.X.InlineFlex,
                            flexShrink: 0,
                            margin: {
                                right: 1
                            }
                        }, o), a.createElement(S.Ya, {
                            className: "event-landing-action__message",
                            display: S.X.InlineFlex,
                            flexWrap: S.Ba.Wrap,
                            flexGrow: 1
                        }, t), a.createElement(S.Ya, {
                            display: S.X.InlineFlex,
                            flexShrink: 0
                        }, n)), a.createElement(S.Ya, {
                            className: e
                        }, i))
                    }, t
                }(a.Component)),
                K = Object(u.b)("EventLandingAction")(Q),
                $ = (n("2hLa"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = U({
                                startAt: new Date(this.props.startAt),
                                endAt: new Date(this.props.endAt),
                                premiere: this.props.premiere ? {
                                    status: this.props.premiere.status
                                } : void 0
                            }),
                            t = a.createElement(S.z, {
                                disabled: !0
                            }, Object(r.d)("Past Event", "EventLandingTitle"));
                        return e === T.LIVE ? t = a.createElement(S.z, {
                            linkTo: {
                                pathname: "/" + this.props.channel.login,
                                state: {
                                    content: "call_to_action",
                                    medium: "event_page"
                                }
                            }
                        }, Object(r.d)("Watch Now", "EventLandingTitle")) : e === T.FUTURE && (t = a.createElement(h.a, {
                            eventID: this.props.id,
                            eventTypename: "EventLeaf",
                            areNotificationsEnabled: !(!this.props.self || !this.props.self.isFollowing),
                            channelID: this.props.channel.id || "",
                            channelLogin: this.props.channel.login || "",
                            eventLocation: f.a.EventDetails
                        })), a.createElement(S.Fb, {
                            borderBottom: !0
                        }, a.createElement(S.W, {
                            type: S.Wb.H2,
                            className: "event-landing-title__heading"
                        }, this.props.title), a.createElement(S.Ya, {
                            display: S.X.Flex,
                            margin: {
                                top: 2,
                                bottom: 3
                            }
                        }, a.createElement(S.Ya, {
                            margin: {
                                right: 1
                            }
                        }, t), a.createElement(S.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.a, {
                            id: this.props.id,
                            title: this.props.title,
                            channelID: this.props.channel.id || "",
                            channelLogin: this.props.channel.login || "",
                            eventLocation: f.a.EventDetails
                        })), a.createElement(v.a, {
                            targetUser: {
                                id: this.props.channel.id || "",
                                displayName: this.props.channel.displayName || this.props.channel.login || ""
                            },
                            eventID: this.props.id,
                            balloonDirection: S.v.Bottom
                        })))
                    }, t
                }(a.Component)),
                Z = Object(u.b)("EventLandingTitle")($),
                J = n("GFmA"),
                ee = n("daWW"),
                te = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null;
                        return this.props.pastPremiere && (e = a.createElement(ee.a, {
                            listContext: J.b.MixedGameAndChannelList,
                            trackingContent: c.PageviewContent.EventPast,
                            trackingMedium: c.PageviewMedium.EventDetails,
                            videos: [this.props.pastPremiere]
                        })), a.createElement(S.Fb, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(S.W, {
                            transform: S.Vb.Uppercase,
                            type: S.Wb.H5,
                            color: S.O.Alt2
                        }, Object(r.d)("Videos", "EventLandingVideos")), a.createElement(S.Ya, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(S.Ya, null, e)))
                    }, t = i.__decorate([Object(u.b)("EventLandingVideos")], t)
                }(a.Component),
                ne = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onCountdownSuccess = function() {
                            t.props.goToVideo(t.props.channel.login || "")
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        U({
                            startAt: new Date(this.props.startAt),
                            endAt: new Date(this.props.endAt),
                            premiere: this.props.premiere ? {
                                status: this.props.premiere.status
                            } : void 0
                        }) !== T.LIVE || this.props.noRedirect || (e = a.createElement(K, {
                            id: this.props.id,
                            login: this.props.channel.login || "",
                            premiere: this.props.premiere || null,
                            onCountdownSuccess: this.onCountdownSuccess
                        }));
                        var t = null;
                        return this.props.premiere && this.props.premiere.pastPremiere && this.props.premiere.pastPremiere.id && (t = a.createElement(te, {
                            pastPremiere: this.props.premiere.pastPremiere
                        })), a.createElement(S.Ya, null, a.createElement(Z, {
                            id: this.props.id,
                            title: this.props.title,
                            startAt: this.props.startAt,
                            endAt: this.props.endAt,
                            channel: this.props.channel,
                            self: this.props.self,
                            premiere: this.props.premiere
                        }), e, t, a.createElement(O, {
                            description: this.props.description
                        }))
                    }, t = i.__decorate([Object(u.b)("EventLandingBody", {
                        autoReportInteractive: !0
                    })], t)
                }(a.Component),
                ie = n("rO6o"),
                ae = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = new Date(this.props.startAt);
                        return a.createElement(S.G, {
                            row: !0
                        }, a.createElement(S.Qa, {
                            flexShrink: 0
                        }, a.createElement(S.I, {
                            size: S.J.Size32,
                            aspect: S.p.Aspect16x9,
                            src: this.props.imageURL,
                            alt: "" !== this.props.imageURL ? this.props.title : ""
                        }, a.createElement(ie.a, {
                            date: e
                        }))))
                    }, t = i.__decorate([Object(u.b)("EventLandingImage", {
                        autoReportInteractive: !0
                    })], t)
                }(a.Component),
                re = n("kduP"),
                oe = n("5zf8");
            var se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGameBoxArt = function(e, t) {
                            return a.createElement(S.I, {
                                src: e,
                                alt: t,
                                aspect: S.p.Aspect3x4,
                                size: S.J.Size4
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e, t, n = new Date(this.props.startAt),
                            o = new Date(this.props.endAt),
                            s = null,
                            l = null,
                            d = null;
                        return t = this.props.eventType === _.PREMIERE ? Object(r.d)("Premiere", "EventLandingInfo") : Object(r.d)("Live Stream", "EventLandingInfo"), e = a.createElement(S.Ya, {
                            margin: {
                                top: 3
                            }
                        }, a.createElement(S.W, {
                            transform: S.Vb.Uppercase,
                            type: S.Wb.H5,
                            color: S.O.Alt2
                        }, Object(r.d)("Event Type", "EventLandingInfo")), a.createElement(S.Ya, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(S.W, {
                            fontSize: S.Ca.Size5
                        }, t))), this.props.game && (this.props.game.boxArtURL && this.props.game.displayName && (l = a.createElement(S.Ya, {
                            display: S.X.InlineFlex
                        }, this.renderGameBoxArt(this.props.game.boxArtURL, this.props.game.displayName))), s = a.createElement(S.Ya, {
                            margin: {
                                top: 3
                            }
                        }, a.createElement(S.W, {
                            transform: S.Vb.Uppercase,
                            type: S.Wb.H5,
                            color: S.O.Alt2
                        }, Object(r.d)("Streaming", "EventLandingInfo")), a.createElement(S.U, {
                            to: {
                                pathname: Object(re.c)(this.props.game.displayName),
                                state: {
                                    content: "event_game",
                                    medium: "event_page"
                                }
                            }
                        }, a.createElement(S.Ya, {
                            display: S.X.Flex,
                            flexWrap: S.Ba.Wrap,
                            alignItems: S.f.Center,
                            margin: {
                                top: 1
                            }
                        }, l, a.createElement(S.Ya, {
                            display: S.X.InlineFlex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(S.W, {
                            fontSize: S.Ca.Size5
                        }, this.props.game.displayName)))))), this.props.channel.profileImageURL && this.props.channel.displayName && (d = a.createElement(S.Ya, {
                            display: S.X.InlineFlex
                        }, a.createElement(S.q, {
                            size: 40,
                            src: this.props.channel.profileImageURL,
                            alt: Object(r.d)("{channelDisplayName}'s profile picture", {
                                channelDisplayName: this.props.channel.displayName
                            }, "EventLandingInfo")
                        }))), a.createElement(S.Ya, {
                            margin: {
                                x: 3
                            },
                            padding: {
                                y: 2
                            }
                        }, a.createElement(S.Ya, null, a.createElement(S.W, {
                            transform: S.Vb.Uppercase,
                            type: S.Wb.H5,
                            color: S.O.Alt2
                        }, Object(r.d)("Date & Time", "EventLandingInfo")), a.createElement(S.Ya, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(S.W, {
                            fontSize: S.Ca.Size5
                        }, function(e, t) {
                            var n = new Date;
                            t && (n = t);
                            var a = {
                                weekday: "long",
                                month: "short",
                                day: "numeric"
                            };
                            return n.getFullYear() !== e.getFullYear() && (a = i.__assign({}, a, {
                                year: "numeric"
                            })), Object(r.c)(e, a)
                        }(n))), a.createElement(S.Ya, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(S.W, {
                            fontSize: S.Ca.Size5
                        }, function(e) {
                            return Object(r.j)(e, {
                                timeZoneName: "short"
                            })
                        }(n))), a.createElement(S.Ya, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(S.W, {
                            fontSize: S.Ca.Size5
                        }, function(e, t) {
                            var n = Math.abs(e.getTime() / 1e3 - t.getTime() / 1e3);
                            return Object(oe.b)(n)
                        }(n, o)))), e, a.createElement(S.Ya, {
                            margin: {
                                top: 3
                            }
                        }, a.createElement(S.W, {
                            transform: S.Vb.Uppercase,
                            type: S.Wb.H5,
                            color: S.O.Alt2
                        }, Object(r.d)("Starring", "EventLandingInfo")), a.createElement(S.U, {
                            to: {
                                pathname: "/" + this.props.channel.login,
                                state: {
                                    content: "author_avatar",
                                    medium: "event_page"
                                }
                            }
                        }, a.createElement(S.Ya, {
                            display: S.X.Flex,
                            flexWrap: S.Ba.Wrap,
                            alignItems: S.f.Center,
                            margin: {
                                top: 1
                            }
                        }, d, a.createElement(S.Ya, {
                            display: S.X.InlineFlex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(S.W, {
                            fontSize: S.Ca.Size5
                        }, "" !== this.props.channel.displayName ? this.props.channel.displayName : this.props.channel.login))))), s)
                    }, t = i.__decorate([Object(u.b)("EventLandingInfo")], t)
                }(a.Component),
                le = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return a.createElement(S.Fb, {
                            background: S.r.Base
                        }, a.createElement(S.Fb, {
                            border: !0
                        }, a.createElement(ae, {
                            title: this.props.title,
                            imageURL: this.props.imageURL,
                            startAt: this.props.startAt
                        })), a.createElement(S.Fb, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0
                        }, a.createElement(se, {
                            startAt: this.props.startAt,
                            endAt: this.props.endAt,
                            channel: this.props.channel,
                            game: this.props.game,
                            eventType: this.props.eventType
                        })))
                    }, t = i.__decorate([Object(u.b)("EventLandingSidePanel")], t)
                }(a.Component),
                de = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.eventLeaf.channel ? a.createElement(S.Ya, {
                            position: S.kb.Relative
                        }, this.renderChannelInfo(this.props.eventLeaf.channel), a.createElement(S.Ya, {
                            display: S.X.Flex,
                            flexWrap: S.Ba.NoWrap,
                            margin: {
                                left: 3,
                                top: 3,
                                right: 3
                            }
                        }, a.createElement(S.Ya, {
                            flexShrink: 0,
                            flexGrow: 0,
                            margin: {
                                right: 3
                            }
                        }, a.createElement(le, {
                            title: this.props.eventLeaf.title,
                            imageURL: this.props.eventLeaf.imageURL,
                            startAt: this.props.eventLeaf.startAt,
                            endAt: this.props.eventLeaf.endAt,
                            channel: this.props.eventLeaf.channel,
                            game: this.props.eventLeaf.game,
                            eventType: this.props.eventLeaf.type
                        })), a.createElement(S.Ya, {
                            flexGrow: 1
                        }, a.createElement(ne, {
                            id: this.props.eventLeaf.id,
                            title: this.props.eventLeaf.title,
                            description: this.props.eventLeaf.description,
                            startAt: this.props.eventLeaf.startAt,
                            endAt: this.props.eventLeaf.endAt,
                            channel: this.props.eventLeaf.channel,
                            self: this.props.eventLeaf.self,
                            premiere: this.props.eventLeaf.premiere,
                            noRedirect: this.props.noRedirect,
                            goToVideo: this.props.goToVideo
                        })))) : null
                    }, t.prototype.renderChannelInfo = function(e) {
                        return a.createElement(q.a, null, a.createElement(X.a, {
                            currentPage: X.b.Events,
                            channelLogin: e.login
                        }))
                    }, t
                }(a.Component),
                ce = Object(u.b)("EventLeafPageComponent", {
                    autoReportInteractive: !0
                })(de);

            function ue(e) {
                var t = null;
                null !== e.owner && (t = {
                    id: e.owner.id || "",
                    login: e.owner.login || "",
                    displayName: e.owner.displayName || ""
                });
                var n = T.FUTURE,
                    i = null;
                if (e.nextLeaf && e.nextLeaf.edges && e.nextLeaf.edges.length) {
                    var a = e.nextLeaf.edges[0];
                    a.node && (n = U({
                        startAt: new Date(a.node.startAt),
                        endAt: new Date(a.node.endAt)
                    }), i = a.node.channel && a.node.channel.login || null)
                }
                var r = null;
                e.collectionStart && (r = new Date(e.collectionStart));
                var o = null;
                return e.collectionEnd && (o = new Date(e.collectionEnd)), {
                    id: e.id,
                    title: e.title,
                    description: e.description,
                    imageURL: e.collectionImageURL,
                    startAt: r,
                    endAt: o,
                    isLive: n === T.LIVE,
                    liveChannelLogin: i,
                    owner: t,
                    self: {
                        isFollowing: e.self && e.self.isFollowing || !1
                    }
                }
            }
            var pe = n("8n2l"),
                me = (n("axFM"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.clearExpandedSegmentHistory = function() {
                            t.props.location.state && r.p.history.replace(i.__assign({}, r.p.history.location, {
                                state: i.__assign({}, r.p.history.location.state, {
                                    expandedSegmentID: void 0
                                })
                            }))
                        }, t.goToVideo = function(e) {
                            t.props.history.push("/" + e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return this.loadingSpinner();
                        if (this.props.data.error || !this.props.data.event) return this.errorPage();
                        if (function(e) {
                                return e.event && e.event.__typename && e.event.__typename === w.EVENT_LEAF || !1
                            }(this.props.data)) {
                            if (j(this.props.data.event).parent) {
                                var e = function(e) {
                                    var t = null;
                                    return e.channel && (t = i.__assign({}, e.channel, {
                                        stream: null
                                    })), {
                                        id: e.id,
                                        title: e.title,
                                        description: e.description,
                                        imageURL: e.imageURL,
                                        startAt: new Date(e.startAt),
                                        endAt: new Date(e.endAt),
                                        channel: t,
                                        game: e.game,
                                        video: e.video,
                                        self: {
                                            isFollowing: e.self.isFollowing
                                        }
                                    }
                                }(j(this.props.data.event));
                                return this.eventCollection(ue(this.props.data.event.parent), [e])
                            }
                            return this.eventLeaf(j(this.props.data.event))
                        }
                        return function(e) {
                            return e.event && e.event.__typename && e.event.__typename === w.EVENT_COLLECTION || !1
                        }(this.props.data) ? this.eventCollection(ue(this.props.data.event)) : this.errorPage()
                    }, t.prototype.eventLeaf = function(e) {
                        return this.canRenderLeaf(e) ? a.createElement(S.Ya, {
                            position: S.kb.Relative
                        }, a.createElement(ce, {
                            eventLeaf: e,
                            noRedirect: this.props.location.state && this.props.location.state.noRedirect,
                            goToVideo: this.goToVideo
                        })) : this.errorPage()
                    }, t.prototype.canRenderLeaf = function(e) {
                        return e.channel && e.channel.id && e.channel.login
                    }, t.prototype.eventCollection = function(e, t) {
                        return a.createElement(Y, {
                            event: e,
                            defaultLeaves: t
                        })
                    }, t.prototype.errorPage = function() {
                        return a.createElement(o.a, {
                            message: Object(r.d)("Error loading data.", "EventLandingPage")
                        })
                    }, t.prototype.loadingSpinner = function() {
                        return a.createElement(S.Ya, {
                            margin: {
                                top: 3
                            }
                        }, a.createElement(S.ab, {
                            fillContent: !0
                        }))
                    }, t.prototype.onRender = function() {
                        this.props.data.event && (this.props.latencyTracking.reportInteractive(), this.props.data.event.title && r.p.setPageTitle(this.props.data.event.title)), this.clearExpandedSegmentHistory()
                    }, t = i.__decorate([Object(s.a)(pe, {
                        options: function(e) {
                            return {
                                variables: {
                                    eventName: e.location.state && e.location.state.expandedSegmentID || e.match.params.eventName
                                }
                            }
                        }
                    }), Object(u.b)("EventLandingPage", {
                        destination: d.a.EventDetails
                    }), Object(l.a)({
                        location: c.PageviewLocation.EventDetails,
                        skip: function(e) {
                            return e.data.loading || !!e.data.error
                        }
                    })], t)
                }(a.Component)),
                he = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return e.match.params.eventName !== this.props.match.params.eventName
                    }, t.prototype.render = function() {
                        return a.createElement(me, i.__assign({}, this.props))
                    }, t
                }(a.Component);
            n.d(t, "EventLandingPage", function() {
                return he
            })
        },
        "5NSO": function(e, t, n) {},
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return l
            });
            var i, a, r = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(r.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(r.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(r.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(r.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(r.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(r.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = a.Humanized), t === a.ClockAuto && (t = e >= 3600 ? a.ClockHMS : a.ClockMS), t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        n = i.Hour;
                        break;
                    case a.ClockMS:
                        n = i.Minute
                }
                var l = 2;
                t === a.ClockHMS && (l = 3);
                var c = function(e, t) {
                        void 0 === t && (t = i.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === i.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === i.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === i.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === i.Day ? n : n.days <= 26 || t === i.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(c);
                if (u.forEach(function(e, n) {
                        t !== a.Humanized && t !== a.HumanizedShort || c[e] || delete c[e], n < u.length - l && delete c[e]
                    }), t === a.Humanized) return function(e) {
                    return e.months ? o(i.Month, e.months) : e.weeks && e.days ? o(i.Week, e.weeks) + " " + o(i.Day, e.days) : e.weeks ? o(i.Week, e.weeks) : e.days && e.hours ? o(i.Day, e.days) + " " + o(i.Hour, e.hours) : e.days ? o(i.Day, e.days) : e.hours && e.minutes ? o(i.Hour, e.hours) + " " + o(i.Minute, e.minutes) : e.hours ? o(i.Hour, e.hours) : e.minutes && e.seconds ? o(i.Minute, e.minutes) + " " + o(i.Second, e.seconds) : e.minutes ? o(i.Minute, e.minutes) : o(i.Second, e.seconds || 0)
                }(c);
                if (t === a.HumanizedShort) return function(e) {
                    return e.months ? s(i.Month, e.months) : e.weeks && e.days ? "" + s(i.Week, e.weeks) + s(i.Day, e.days) : e.weeks ? s(i.Week, e.weeks) : e.days && e.hours ? "" + s(i.Day, e.days) + s(i.Hour, e.hours) : e.days ? s(i.Day, e.days) : e.hours && e.minutes ? "" + s(i.Hour, e.hours) + s(i.Minute, e.minutes) : e.hours ? s(i.Hour, e.hours) : e.minutes && e.seconds ? "" + s(i.Minute, e.minutes) + s(i.Second, e.seconds) : e.minutes ? s(i.Minute, e.minutes) : s(i.Second, e.seconds || 0)
                }(c);
                var p = ":",
                    m = !1;
                switch (r.p.intl.getLanguageCode()) {
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
                var h = c.seconds || 0,
                    v = c.minutes || 0,
                    g = c.hours || 0;
                switch (t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        var f = (m ? d(g, 2) : g) + p + d(v, 2);
                        return t === a.ClockHMS && (f += p + d(h, 2)), f;
                    case a.ClockMS:
                        return (m ? d(v, 2) : v) + p + d(h, 2)
                }
            }

            function d(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(i || (i = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(a || (a = {}))
        },
        "60o1": function(e, t, n) {
            "use strict";

            function i(e, t) {
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
            n.d(t, "a", function() {
                return i
            })
        },
        "6j5V": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("RcPG");

            function a(e) {
                return {
                    type: i.a.Text,
                    content: e
                }
            }
        },
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("H1ft"),
                o = n("yR8l"),
                s = function(e) {
                    return e.map(function(e, t, n) {
                        var a, r = e.node;
                        if ("GAME_CHANGE" !== r.type || 0 !== r.durationMilliseconds) return l(r);
                        var o = n[t + 1] && n[t + 1].node;
                        a = o ? o.positionMilliseconds - r.positionMilliseconds : r.video && r.video.lengthSeconds && 1e3 * r.video.lengthSeconds - r.positionMilliseconds || 0;
                        var s = i.__assign({}, r, {
                            durationMilliseconds: a
                        });
                        return l(s)
                    })
                },
                l = function(e) {
                    return {
                        duration: e.durationMilliseconds / 1e3,
                        label: e.description || "",
                        offset: e.positionMilliseconds / 1e3,
                        thumbnailUrl: d(e),
                        videoID: e.video && e.video.id || ""
                    }
                },
                d = function(e) {
                    return e.thumbnailURL ? e.thumbnailURL : e.details && c(e.details) && e.details.game && e.details.game.boxArtURL ? e.details.game.boxArtURL : "https://static-cdn.jtvnw.net/ttv-static/404_boxart-285x380.jpg"
                },
                c = function(e) {
                    return !!e.game
                },
                u = n("cr+I"),
                p = n("/7QA"),
                m = n("GFmA"),
                h = n("0INk"),
                v = n("yWUM"),
                g = n("vRsq"),
                f = n("2xye"),
                k = n("GnwI"),
                b = n("4HIT"),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var n = {
                                    t: Object(v.a)(e.offset)
                                };
                                return t.props.collectionID && (n.collection = t.props.collectionID), i.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: u.stringify(n),
                                        state: {
                                            content: f.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function() {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(h.b)({
                                videoID: t.props.video.id,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(h.c)({
                                videoID: t.props.video.id,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: e,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            context: this.props.context,
                            onClick: this.onClickHandler,
                            title: this.props.video.title,
                            linkTo: {
                                pathname: Object(g.i)(void 0, this.props.video.id),
                                state: this.getLinkState(),
                                search: this.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: this.props.video.previewThumbnailURL,
                                alt: this.props.video.title || ""
                            },
                            channelDisplayName: this.props.video.owner && this.props.video.owner.displayName || "",
                            channelLogin: this.props.video.owner && this.props.video.owner.login || "",
                            channelLinkTo: {
                                pathname: "/" + (this.props.video.owner ? this.props.video.owner.login : ""),
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.video.owner && this.props.video.owner.profileImageURL || "",
                                alt: this.props.video.owner && this.props.video.owner.displayName || ""
                            },
                            gameTitle: this.props.video.game && this.props.video.game.name || "",
                            gameTitleLinkTo: {
                                pathname: "/directory/game/" + encodeURI(this.props.video.game && this.props.video.game.name || ""),
                                state: this.getLinkState()
                            },
                            gameBoxArtImageProps: {
                                src: this.props.video.game && this.props.video.game.boxArtURL || p.a.defaultBoxArtURL,
                                alt: this.props.video.game ? this.props.video.game.displayName : ""
                            },
                            videoGameChanges: this.gameChangesWithLinks(),
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            datePublished: this.props.video.publishedAt,
                            viewCount: this.props.video.viewCount || 0,
                            durationInSeconds: !this.props.hideDuration && this.props.video.lengthSeconds ? this.props.video.lengthSeconds : void 0,
                            animatedImageProps: this.props.video.animatedPreviewURL ? {
                                src: this.props.video.animatedPreviewURL,
                                alt: ""
                            } : void 0,
                            watchedProgressPercent: this.getVideoPreviousWatchPercentage() || 0,
                            listPosition: this.props.listPosition,
                            topBar: this.props.topBar,
                            restriction: this.getRestrictionProps(),
                            trackImageLatency: this.props.trackImageLatency,
                            onVideoGameBalloonClick: this.trackVideoGameBalloonClick,
                            onVideoGameBalloonItemClick: this.trackVideoGameBalloonItemClick,
                            trackingContext: this.props.tracking,
                            tagListProps: !0 !== this.props.hideTags && this.props.video.contentTags ? {
                                tags: this.props.video.contentTags,
                                linkPath: b.a.PopularTag
                            } : void 0
                        };
                        return a.createElement(m.a, i.__assign({}, e))
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = u.stringify(e);
                        return t ? "?" + t : ""
                    }, t.prototype.getVideoPreviousWatchPercentage = function() {
                        return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / (this.props.video.lengthSeconds || 1 / 0) * 100 : null
                    }, t.prototype.getRestrictionProps = function() {
                        var e = this.props.video.restriction && this.props.video.restriction.productName ? "/products/" + this.props.video.restriction.productName : "";
                        return {
                            productName: this.props.video.restriction && this.props.video.restriction.productName,
                            title: this.props.video.restriction && this.props.video.restriction.productTitle,
                            canViewRestricted: this.props.video.self && !this.props.video.self.isRestricted || !1,
                            upsellLinkTo: {
                                pathname: e,
                                state: this.getLinkState()
                            }
                        }
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(a.Component),
                S = Object(k.b)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(y),
                C = n("1Ijn");
            n.d(t, "a", function() {
                return w
            });
            var E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.convertMomentEdgesToChanges = function() {
                            var e = s(t.props.data && t.props.data.video && t.props.data.video.moments && t.props.data.video.moments.edges || []);
                            return e.length > 1 ? e : []
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(S, i.__assign({
                            videoGameChanges: this.convertMomentEdgesToChanges()
                        }, this.props))
                    }, t
                }(a.Component),
                w = Object(o.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                videoId: e.video.id
                            }
                        }
                    },
                    skip: function(e) {
                        return !(e.multipleVideoGameMarkersType && (e.multipleVideoGameMarkersType !== r.a.None || e.video.id))
                    }
                })(E)
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
        "8n2l": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EventLandingPage_Event"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "eventName"
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
                                value: "now"
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
                                value: "event"
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
                                        value: "eventName"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "__typename"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "EventLeaf"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "EventLeafContent"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "EventCollection"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "EventCollectionContent"
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
                    end: 335
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/event-landing/models/event-leaf-fragment.gql"\n#import "twilight/pages/event-landing/models/event-collection-fragment.gql"\nquery EventLandingPage_Event($eventName: ID! $now: Time) {\nevent(id: $eventName) {\n__typename\n...on EventLeaf {\n...EventLeafContent\n}\n...on EventCollection {\n...EventCollectionContent\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("DzcT").definitions)), i.definitions = i.definitions.concat(r(n("cESk").definitions)), e.exports = i
        },
        "94Uw": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
                }(i || (i = {}))
        },
        "9Gue": function(e, t, n) {},
        "9RDd": function(e, t, n) {},
        B3R5: function(e, t, n) {},
        BOil: function(e, t, n) {},
        BhFH: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                a = n("yR8l"),
                r = n("8jSG"),
                o = n("cMjZ"),
                s = n("kSkr");

            function l() {
                var e = this;
                return Object(a.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, a, s, l) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
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
                                                            id: Object(o.a)(l),
                                                            fragment: r
                                                        });
                                                        t && (t.blockedUsers.push({
                                                            id: n,
                                                            __typename: "User"
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(l),
                                                            fragment: r,
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
        "CFw/": function(e, t, n) {
            e.exports = n.p + "assets/notification_upsell_arrow-c9d4ff7c87444b45d813.png"
        },
        DXJk: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Events_FollowEvent"
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
                                    value: "FollowEventInput"
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
                                value: "followEvent"
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
                                        value: "event"
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
                                                    value: "EventCollection"
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
                                                                value: "isFollowing"
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
                                                    value: "EventLeaf"
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
                                                                value: "isFollowing"
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
                    end: 193
                }
            };
            n.loc.source = {
                body: "mutation Events_FollowEvent($input: FollowEventInput!) {\nfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        DzcT: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "EventLeafContent"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "EventLeaf"
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
                                            value: "300"
                                        }
                                    }],
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
                                value: "imageURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "320"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "180"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "startAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "endAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "channel"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
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
                                            value: "300"
                                        }
                                    }],
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
                                            value: "285"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "380"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "parent"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "EventCollectionContent"
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
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isFollowing"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "premiere"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "PremiereContent"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "videos"
                            },
                            arguments: [],
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
                                                value: "offsetSeconds"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "PreviewCardVideo"
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PremiereContent"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Premiere"
                        }
                    },
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "pastPremiere"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "PreviewCardVideo"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 693
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/event-landing/models/event-collection-fragment.gql"\n#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment EventLeafContent on EventLeaf {\nid\ntype\nowner {\nid\nlogin\ndisplayName\nprofileImageURL(width:300)\n}\ntitle\ndescription\nimageURL(width:320 height:180)\nstartAt\nendAt\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width:300)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width:285 height:380)\n}\nparent {\n...EventCollectionContent\n}\nself {\nisFollowing\n}\npremiere {\n...PremiereContent\n}\nvideos {\nedges {\noffsetSeconds\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\nfragment PremiereContent on Premiere {\nstatus\npastPremiere {\n...PreviewCardVideo\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("cESk").definitions)), i.definitions = i.definitions.concat(r(n("he03").definitions)), e.exports = i
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("5zf8"),
                s = n("Ue10"),
                l = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return a.createElement(s.Ya, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(s.Va, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, a.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            padding: .5
                        }, a.createElement(s.Fb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.db.Hidden,
                            position: s.kb.Relative
                        }, a.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, a.createElement(s.S, i.__assign({}, e))), a.createElement(s.Fb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center,
                            position: s.kb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(s.tb, {
                            asset: s.ub.Play,
                            type: s.vb.Inherit
                        }))), a.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, a.createElement(s.Ya, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, a.createElement(s.W, null, this.props.gameChange.label)), a.createElement(s.Ya, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, a.createElement(s.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                d = n("0INk"),
                c = n("8/mp"),
                u = n("eJ65"),
                p = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(d.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(s.Ya, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.kb.Relative,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle,
                            hideBalloonOnInsideClick: !0
                        }, a.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.ub.ViewerList
                        }, a.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row
                        }, a.createElement(s.W, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(s.Ya, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(s.hb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), a.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, a.createElement(s.Ya, {
                            overflow: s.db.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(s.Ya, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, a.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(s.Ya, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(c.b, null, a.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return a.createElement(l, {
                                index: n,
                                gameChange: e,
                                key: e.offset,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(a.Component)),
                m = n("kduP"),
                h = n("2xye"),
                v = function(e) {
                    return a.createElement(s.Ya, null, a.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return a.createElement(s.Qa, {
                            key: n
                        }, a.createElement(s.U, {
                            to: {
                                pathname: Object(m.c)(t.label),
                                state: {
                                    content: h.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: s.V.Inherit
                        }, t.label, g(n, i.length - 1) ? null : ", "))
                    })))
                },
                g = function(e, t) {
                    return e === t
                },
                f = n("N0BP"),
                k = (n("XA5B"), function(e) {
                    var t = a.createElement(s.Fb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.db.Hidden
                    }, a.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, a.createElement(s.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(s.U, i.__assign({}, Object(f.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            k.displayName = "PreviewCardIconicImage";
            var b, y = n("TSYQ"),
                S = (n("cRsL"), function(e) {
                    var t = y("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return a.createElement(s.Ya, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Xa.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, a.createElement(s.Ya, {
                        display: s.X.InlineFlex
                    }, a.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Vb.Uppercase
                    }, e.title)), e.subTitle && a.createElement(s.Ya, {
                        display: s.X.InlineFlex
                    }, a.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                C = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, a.createElement(s.nb, {
                        borderRadius: s.x.None,
                        size: s.pb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(S, i.__assign({}, e.topBar))), r = 3), a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                E = (n("kF1+"), function(e) {
                    var t = e.icon && a.createElement(s.Ya, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(s.tb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? a.createElement(s.Fb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ca.Size6,
                        justifyContent: s.Xa.Center
                    }, t, a.createElement(s.W, null, e.value)) : a.createElement(s.Fb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, a.createElement(s.W, null, e.value))
                }),
                w = n("GnwI"),
                _ = (n("B3R5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            didAnimatedPreviewLoad: !1,
                            didAnimatedPreviewFailToLoad: !1,
                            isHovered: !1
                        }, t.onImageError = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onImageLoad = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onAnimatedImageLoad = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewLoad: !0
                            })
                        }, t.onAnimatedImageLoadError = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewFailToLoad: !0
                            })
                        }, t.handleFocus = function() {
                            t.setState({
                                isHovered: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isHovered: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), a.createElement("div", i.__assign({}, e, {
                            onClick: this.props.onClick
                        }), a.createElement(s.Fb, {
                            background: s.r.Alt2,
                            overflow: s.db.Hidden
                        }, a.createElement(s.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = y("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                            className: n
                        }, a.createElement(s.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : a.createElement("div", {
                            className: n
                        }, a.createElement(s.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(a.Component)),
                N = Object(w.b)("PreviewCardThumbnail")(_),
                T = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return a.createElement(s.Ya, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, a.createElement(s.W, {
                            color: s.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : a.createElement(s.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: s.V.Inherit
                        }, e.text)))
                    })), a.createElement("div", null, a.createElement(s.U, i.__assign({}, Object(f.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: s.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), a.createElement(s.W, {
                        type: s.Wb.H3,
                        fontSize: s.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), a.createElement(s.Ya, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                O = n("H1ft"),
                I = n("ZbA5"),
                F = n("QVaV"),
                L = n("hyVY"),
                R = n("MXoD"),
                x = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(b || (b = {}));
            var D, M, A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? s.ub.Unlock : s.ub.Lock;
                    return a.createElement(s.Ya, null, !t && a.createElement(s.Fb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.jc.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Sb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Aa.Column,
                        flexWrap: s.Ba.Wrap,
                        justifyContent: s.Xa.Center,
                        "data-test-selector": b.LockSelector
                    }, a.createElement(s.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ca.Size5,
                        "data-test-selector": b.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), a.createElement(s.Ya, null, a.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), a.createElement(s.Fb, {
                        display: s.X.InlineFlex,
                        position: s.kb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.jc.Default,
                        fontSize: s.Ca.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, a.createElement(s.Zb, {
                        direction: this.props.attachTop ? s.bc.Bottom : s.bc.Top,
                        align: s.ac.Right,
                        label: n
                    }, a.createElement(s.tb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(a.PureComponent);
            n("5NSO");

            function j(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function U(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(D || (D = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(M || (M = {}));
            var P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", i.__assign({
                            className: "preview-card"
                        }, Object(f.a)(this.props)), a.createElement(s.Fb, {
                            position: s.kb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.db.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(s.U, {
                            to: Object(R.a)(this.getTrackingContext(h.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(N, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: j(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), a.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(s.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), a.createElement(s.Ya, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && a.createElement(s.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? a.createElement(C, {
                            topLeft: a.createElement(I.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(E, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : j(this.props) ? a.createElement(C, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(E, {
                                value: Object(L.b)(this.props.durationInSeconds),
                                icon: s.ub.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(E, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(E, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(E, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : U(this.props) ? a.createElement(C, {
                            topLeft: a.createElement(E, {
                                value: Object(L.b)(this.props.durationInSeconds),
                                icon: s.ub.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(E, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(E, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return j(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return j(this.props) || U(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === M.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(s.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(k, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(R.a)(this.getTrackingContext(h.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": D.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === M.SingleGameList || this.props.context === M.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(s.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(k, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(R.a)(this.getTrackingContext(h.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": D.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(F.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(R.a)(this.getTrackingContext(h.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), U(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : j(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== M.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(R.a)(this.getTrackingContext(h.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(T, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(R.a)(this.getTrackingContext(h.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(s.Ya, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(x.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return j(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(A, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!j(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === O.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case O.a.Balloon:
                                return a.createElement(p, {
                                    videoGameChanges: t,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case O.a.Inline:
                                return a.createElement(v, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case O.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                B = Object(w.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(P);
            n.d(t, !1, function() {
                return D
            }), n.d(t, "b", function() {
                return M
            }), n.d(t, !1, function() {
                return P
            }), n.d(t, "a", function() {
                return B
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var i, a = n("/7QA"),
                r = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "moments_with_images"
            }(i || (i = {}));
            var o = function() {
                switch (a.p.experiments.getAssignment(r.b.Archer)) {
                    case "moments_with_images":
                        return i.Balloon;
                    case "inline":
                        return i.Inline;
                    case "control":
                    default:
                        return i.None
                }
            }
        },
        HXcb: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelPage_ChannelHeader"
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
                                        }]
                                    }
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "videos"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followers"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "follows"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
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
                                        }]
                                    }
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "followButtonFragment"
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
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
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
                                                value: "isStaff"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 375
                }
            };
            i.loc.source = {
                body: '#import "twilight/common/queries/follow-button-fragment.gql"\nquery ChannelPage_ChannelHeader($login: String!) {\nuser(login: $login) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\nroles {\nisPartner\n}\nstream {\nid\n}\nvideos {\ntotalCount\n}\nfollowers {\ntotalCount\n}\nfollows {\ntotalCount\n}\ncheer {\nid\n}\n...followButtonFragment\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        HrG3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("q1tI"),
                a = n("/7QA"),
                r = n("Ue10"),
                o = (n("RFKy"), "view-all-button-selector");

            function s(e) {
                var t = i.createElement(r.Ya, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: r.Aa.Column,
                    justifyContent: r.Xa.Center,
                    display: r.X.Flex
                }, i.createElement(r.W, {
                    color: r.O.Link,
                    fontSize: r.Ca.Size4,
                    noWrap: !0
                }, Object(a.d)("View All", "Following--ViewAllButton")), i.createElement(r.W, {
                    color: r.O.Alt2,
                    fontSize: r.Ca.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = i.createElement(r.U, {
                    to: e.linkTo,
                    className: "following__view-all__link",
                    hoverUnderlineNone: !0
                }, t)), i.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": o
                }, i.createElement(r.Ya, {
                    margin: {
                        bottom: 5
                    }
                }, i.createElement(r.o, {
                    ratio: e.aspectRatio
                }, i.createElement(r.Fb, {
                    background: r.r.Alt2,
                    fullHeight: !0
                }, t))))
            }
        },
        "IxV+": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EventLandingPage_Schedule"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "eventID"
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
                                value: "nextCount"
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
                                value: "nextCursor"
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
                                value: "prevCount"
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
                                value: "prevCursor"
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
                                value: "criteria"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "EventConnectionCriteriaInput"
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "event"
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
                                        value: "eventID"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "__typename"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "EventCollection"
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
                                                value: "leaves"
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
                                                        value: "nextCount"
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
                                                        value: "nextCursor"
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
                                                        value: "prevCount"
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
                                                        value: "prevCursor"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "criteria"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "criteria"
                                                    }
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
                                                                        value: "title"
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
                                                                        value: "imageURL"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "320"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "180"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "startAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "endAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "channel"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
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
                                                                                    value: "300"
                                                                                }
                                                                            }],
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
                                                                                            value: "380"
                                                                                        }
                                                                                    }, {
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "height"
                                                                                        },
                                                                                        value: {
                                                                                            kind: "IntValue",
                                                                                            value: "240"
                                                                                        }
                                                                                    }],
                                                                                    directives: []
                                                                                }]
                                                                            }
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
                                                                                    value: "285"
                                                                                }
                                                                            }, {
                                                                                kind: "Argument",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "height"
                                                                                },
                                                                                value: {
                                                                                    kind: "IntValue",
                                                                                    value: "380"
                                                                                }
                                                                            }],
                                                                            directives: []
                                                                        }]
                                                                    }
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "videos"
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
                                                                                            kind: "FragmentSpread",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "PreviewCardVideo"
                                                                                            },
                                                                                            directives: []
                                                                                        }]
                                                                                    }
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
                                                                                value: "isFollowing"
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
                                                                value: "cursor"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "hasPreviousPage"
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
                    end: 826
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery EventLandingPage_Schedule($eventID: ID! $nextCount: Int $nextCursor: Cursor $prevCount: Int $prevCursor: Cursor $criteria: EventConnectionCriteriaInput) {\nevent(id: $eventID) {\n__typename\n...on EventCollection {\nid\nleaves(first: $nextCount after: $nextCursor last: $prevCount before: $prevCursor criteria: $criteria) {\nedges {\nnode {\nid\ntitle\ndescription\nimageURL(width: 320 height: 180)\nstartAt\nendAt\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\nstream {\nid\npreviewImageURL(width: 380 height: 240)\n}\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 285 height: 380)\n}\nvideos(first: 1) {\nedges {\nnode {\n...PreviewCardVideo\n}\noffsetSeconds\n}\n}\nself {\nisFollowing\n}\n}\ncursor\n}\npageInfo {\nhasNextPage\nhasPreviousPage\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("he03").definitions)), e.exports = i
        },
        Jhye: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("X7Ac"),
                s = n("eJ65");
            var l = n("ug+5"),
                d = n("Ue10"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onShareClicked = function(e) {
                            var n = "";
                            switch (e) {
                                case o.b.Twitter:
                                    n = "twitter";
                                    break;
                                case o.b.Facebook:
                                    n = "facebook";
                                    break;
                                case o.b.Reddit:
                                    n = "reddit";
                                    break;
                                case o.b.VKontakte:
                                    n = "vk";
                                    break;
                                case o.b.Copy:
                                    n = "url";
                                    break;
                                default:
                                    n = "unknown"
                            }
                            Object(l.c)({
                                shareMedium: n,
                                eventID: t.props.id,
                                channelLogin: t.props.channelLogin || "undefined",
                                channelID: t.props.channelID || "undefined",
                                location: t.props.eventLocation
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = function(e) {
                                return "https://www.twitch.tv/events/" + e
                            }(this.props.id),
                            t = this.props.children;
                        return this.props.children || (t = a.createElement(d.z, {
                            dropdown: !0,
                            type: d.F.Hollow
                        }, Object(r.d)("Share", "ShareEvent"))), a.createElement(s.a, null, t, a.createElement(d.u, {
                            direction: this.props.balloonDirection
                        }, a.createElement(d.Ya, {
                            padding: 1
                        }, a.createElement(d.Ya, {
                            display: d.X.Flex,
                            flexDirection: d.Aa.Row,
                            flexWrap: d.Ba.NoWrap,
                            justifyContent: d.Xa.Center
                        }, a.createElement(o.a, {
                            type: o.b.Twitter,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(o.a, {
                            type: o.b.Facebook,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(o.a, {
                            type: o.b.Reddit,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(o.a, {
                            type: o.b.VKontakte,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(o.a, {
                            type: o.b.Copy,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        })))))
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return c
            })
        },
        "Jxh/": function(e, t, n) {
            "use strict";

            function i(e) {
                var t = document.createElement("textarea");
                t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
                var n = !0;
                try {
                    n = document.execCommand("copy")
                } catch (e) {
                    n = !1
                }
                return document.body.removeChild(t), n
            }
            n.d(t, "a", function() {
                return i
            })
        },
        KriR: function(e, t, n) {
            "use strict";
            n.d(t, "g", function() {
                return r
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "c", function() {
                return c
            });
            var i = n("/7QA"),
                a = n("2xye");

            function r(e) {
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
                e.trackingContext.detail && (t.checkout_source_detail = e.trackingContext.detail), i.o.track(a.SpadeEventType.PaymentFormInteraction, t)
            }
            var o, s, l, d, c, u = function() {
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
                        i.o.track(a.SpadeEventType.PaymentFormDisplay, t)
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
            }(d || (d = {})),
            function(e) {
                e.ChannelSubscribeButton = "channel_subscribe_button_click", e.Direct = "direct_url_link", e.EmotePicker = "emote_picker_click", e.Extension = "extension_click", e.TurboSubscribeButton = "turbo_subscribe_button_click", e.ViewerCard = "viewer_card_click"
            }(c || (c = {}))
        },
        L5dg: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                a = n("0Rl0"),
                r = function(e) {
                    for (var t = [], n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, r = 0; r < n; r++) t.push(i.createElement(a.a, {
                        key: r
                    }));
                    return i.createElement(i.Fragment, null, t)
                }
        },
        LfZz: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("/MKj"),
                r = n("fvjX"),
                o = n("1/iK"),
                s = n("aCAx"),
                l = n("y5D0"),
                d = n("kRBY"),
                c = n("/HY+"),
                u = n("q1tI"),
                p = n("/7QA"),
                m = n("eJ65"),
                h = n("DMoW"),
                v = n("Ue10"),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleReportClick = function() {
                            if (!t.props.isLoggedIn) return t.props.login();
                            if (t.props.targetUser) {
                                var e = "https://www.twitch.tv/events/" + t.props.eventID;
                                t.props.showReportUserModal({
                                    reportContext: {
                                        contentType: h.O.USER_REPORT,
                                        targetUserID: t.props.targetUser.id
                                    },
                                    title: Object(p.d)("Report {channelName}", {
                                        channelName: t.props.targetUser.displayName
                                    }, "EventMoreMenu"),
                                    defaultDescription: "Report event: " + e
                                })
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(m.a, null, u.createElement(v.z, {
                            icon: v.ub.More,
                            type: v.F.Hollow
                        }), u.createElement(v.u, {
                            direction: this.props.balloonDirection,
                            tailOffset: this.props.tailOffset
                        }, u.createElement(v.Ya, {
                            padding: {
                                y: 1
                            }
                        }, u.createElement(v.Va, {
                            disabled: !this.props.targetUser,
                            onClick: this.handleReportClick
                        }, u.createElement(v.Ya, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(p.d)("Report", "EventMoreMenu"))))))
                    }, t
                }(u.Component);
            var f = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(d.f)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(l.e)(o.a.ReportChannel)
                    },
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(s.d)(c.a, t)
                    }
                }, e)
            })(g);
            n.d(t, "a", function() {
                return f
            })
        },
        Ljgq: function(e, t, n) {},
        MJbm: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = r.p.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                i = e.offsetHeight,
                                a = e.offsetLeft,
                                r = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && i === t.height && r === t.top && a === t.left || (t.width = n, t.height = i, t.props.onResize(n, i, r, a)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
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
        O3Y9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var i, a = n("/7QA"),
                r = n("2xye");

            function o(e) {
                a.p.tracking.track(r.SpadeEventType.WhisperIgnoreUser, {
                    ui_context: e.context,
                    from_login: e.currentUserLogin,
                    ignored_login: e.targetUserLogin
                })
            }! function(e) {
                e.ViewerCard = "chat_card", e.ReportWizard = "report_wizard"
            }(i || (i = {}))
        },
        Oy4H: function(e, t, n) {},
        PfQt: function(e, t, n) {
            "use strict";
            var i = n("HrG3");
            n.d(t, "a", function() {
                return i.a
            })
        },
        QjI3: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/MKj"),
                o = n("fvjX"),
                s = n("ZS2+"),
                l = n("UUve"),
                d = n("1/iK"),
                c = n("aCAx"),
                u = n("kRBY"),
                p = n("GnwI"),
                m = n("d0xR"),
                h = n("oJmH"),
                v = n("/7QA"),
                g = n("2+sX"),
                f = n("u5aL"),
                k = n("eJ65"),
                b = n("yR8l"),
                y = n("x7UT"),
                S = n("3Bft"),
                C = n("tIid"),
                E = n("ht6z"),
                w = n("/aPz"),
                _ = n("KriR"),
                N = n("D7An"),
                T = n("4rCz"),
                O = n("0WFu");
            var I, F = n("br9A"),
                L = n("Ue10"),
                R = (n("a7aT"), n("z+dA"));
            ! function(e) {
                e.SubButton = "subscribe-button__dropdown", e.BalloonLayerButton = "subscribe-button__balloon-layer-btn", e.DefaultButton = "subscribe-button__default-btn", e.SubscribeBalloon = "subscribe-button__subscribe-balloon"
            }(I || (I = {}));
            var x = s.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(199)]).then(n.bind(null, "f+qK"))
                }, "SubscribeBalloon"),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            inPrimeRegion: !1
                        }, t.modalLevel = "top_page", t.renderBalloonContentForBalloonLayer = function() {
                            return a.createElement(f.a, {
                                onClickOut: t.handleBalloonClickOut
                            }, a.createElement(L.Ya, {
                                "data-a-target": "sub-balloon",
                                refDelegate: t.setBalloonContentRefDelegate
                            }, t.balloonWrapperContent))
                        }, t.handleButtonClick = function() {
                            t.balloonContentRef || (t.props.useModal && t.props.channelLogin ? (t.props.showSubscriptionModal({
                                channelLogin: t.props.channelLogin,
                                onClose: t.handleModalClose
                            }), t.handleSubMenuAction({
                                action: F.a.OpenSubMenu
                            })) : (t.props.balloonLayer.show({
                                direction: t.getBalloonDirection(),
                                ref: t.containerRef,
                                content: t.renderBalloonContentForBalloonLayer(),
                                contentHeight: 0,
                                closeOnScroll: !0
                            }), t.handleMenuToggle(!1)))
                        }, t.handleBalloonClickOut = function() {
                            t.handleMenuToggle(!0), t.props.balloonLayer.hide({
                                force: !0
                            })
                        }, t.handleModalClose = function() {
                            t.handleSubMenuAction({
                                action: F.a.CloseSubMenu
                            })
                        }, t.setBalloonWrapperContent = function(e) {
                            t.balloonWrapperContent = e
                        }, t.handleSubMenuAction = function(e) {
                            new Set([F.a.ClickCheckout, F.a.BuyGiftSub, F.a.BuyMysteryGift, F.a.BuyCustomMysteryGift, F.a.BuyGiftToPaidUpgrade, F.a.BuyPaidUpgrade, F.a.BuyDNRToResub]).has(e.action) && t.checkAndDisplaySubscriptionCheckout();
                            var n = t.props.data,
                                i = n.user,
                                a = !!(i && i.self && i.self.subscriptionBenefit),
                                r = n.requestInfo && Object(E.a)(n.requestInfo.countryCode);
                            Object(F.b)({
                                action: e.action || "",
                                channelLogin: t.props.channelLogin || "",
                                channelID: i && i.id || "",
                                checkoutButtonTier: e.checkoutButtonTier,
                                hasSubCredit: i && i.self && i.self.canPrimeSubscribe,
                                hostChannelID: t.props.hostChannelID,
                                hostChannelLogin: t.props.hostChannelLogin,
                                isAnonymous: e.isAnonymous,
                                isMenuOpen: e.action !== F.a.OpenSubMenu,
                                mysteryGiftCount: e.mysteryGiftCount,
                                sub_location: "channel_page",
                                modal: !a,
                                modalLevel: a ? "" : t.modalLevel.slice(),
                                showPrimeContent: r,
                                giftRecipient: e.giftRecipient || null
                            }), !e.modalLevel || e.action !== F.a.ClickMoreSubOptions && e.action !== F.a.ClickBack || (t.modalLevel = e.modalLevel)
                        }, t.handleMenuToggle = function(e) {
                            t.handleSubMenuAction({
                                action: e ? F.a.CloseSubMenu : F.a.OpenSubMenu
                            })
                        }, t.getBalloonDirection = function() {
                            var e = t.props.balloonDirection || L.v.BottomRight;
                            return t.props.hostChannelID && (e = L.v.TopLeft), e
                        }, t.setContainerRefDelegate = function(e) {
                            t.containerRef = e
                        }, t.setBalloonContentRefDelegate = function(e) {
                            t.balloonContentRef = e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive(), this.checkAndDisplaySubscriptionCheckout()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.props.data && !this.props.data.loading && this.props.reportInteractive(), !this.isUserDataReady(e) && this.isUserDataReady(this.props) && this.checkAndDisplaySubscriptionCheckout()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch()
                    }, t.prototype.componentWillUnmount = function() {
                        Object(l.f)()
                    }, t.prototype.render = function() {
                        var e = this.props.data;
                        if (!e || e.loading || e.error) return null;
                        var t = e.user;
                        if (!t) return null;
                        var n = t.self,
                            i = t.subscriptionProducts;
                        if (!i) return null;
                        var r = i.filter(function(e) {
                            return e
                        });
                        if (0 === r.length) return null;
                        if (this.props.hideEsportsSubscription && Object(C.a)(t.id || "", this.props.sessionUser)) return null;
                        var o = e.requestInfo && Object(E.a)(e.requestInfo.countryCode),
                            s = !(!n || !n.subscriptionBenefit),
                            l = Object(C.a)(t.id || "", this.props.sessionUser),
                            d = 1 === r.length;
                        r.some(function(e) {
                            return !e.emoteSetID
                        }) && (d = !0);
                        var c = null;
                        n && n.subscriptionBenefit && (c = n.subscriptionBenefit.purchasedWithPrime ? S.a.Prime : n.subscriptionBenefit.tier, this.modalLevel = "");
                        var u = function(e) {
                            var t = T.q.experiments.getAssignment(N.b.SubsReanimator);
                            if (e.isSubscribed) {
                                if (e.hasInsiderPass) return Object(T.d)("All-Access Pass", "SubscribeButton");
                                if (e.isNonStandardSub) return Object(T.d)("Subscribed", "SubscribeButton");
                                if (e.hostedDisplayName) return Object(T.d)("Subscribed to {username}", {
                                    username: e.hostedDisplayName
                                }, "SubscribeButton");
                                if ("control" !== t && e.benefitIsDNRd && e.benefitEndsAt && !e.hasPendingSub) {
                                    var n = Object(O.a)(e.benefitEndsAt);
                                    if (n <= 15 && n > 7) return Object(T.d)("Continue Sub", "SubscribeButton");
                                    if (n <= 7 && 0 !== n) return Object(T.d)("{daysRemaining, plural, one {Continue Sub - {daysRemaining} Day Remaining} other {Continue Sub - {daysRemaining} Days Remaining}}", {
                                        daysRemaining: n
                                    }, "SubscribeButton");
                                    if (0 === n) return Object(T.d)("Continue Sub - Ends Today", "SubscribeButton")
                                }
                                return Object(T.d)("Gift A Sub", "SubscribeButton")
                            }
                            return e.hasInsiderPass ? Object(T.d)("Get the All-Access Pass", "SubscribeButton") : e.hostedDisplayName ? Object(T.d)("Subscribe to {username}", {
                                username: e.hostedDisplayName
                            }, "SubscribeButton") : Object(T.d)("Subscribe", "SubscribeButton")
                        }({
                            isSubscribed: s,
                            isNonStandardSub: d,
                            hasInsiderPass: l,
                            hasPendingSub: !!(n && n.subscriptionBenefit && n.subscriptionBenefit.pendingSubscription),
                            benefitIsDNRd: !(!n || !n.subscriptionBenefit) && n.subscriptionBenefit.isDNRd,
                            benefitEndsAt: n && n.subscriptionBenefit && n.subscriptionBenefit.endsAt,
                            hostedDisplayName: this.props.hostChannelID ? t.displayName || "" : void 0
                        });
                        if (s && d && !l) return a.createElement(L.z, {
                            disabled: !0,
                            ariaLabel: u,
                            icon: L.ub.Star
                        }, u);
                        var p = a.createElement(L.z, {
                            ariaLabel: u,
                            "data-a-target": s ? "subscribed-button" : "subscribe-button",
                            "data-test-selector": I.SubButton,
                            dropdown: !this.props.hideDropdownArrow,
                            fullWidth: !0,
                            icon: this.getButtonIcon(s, c),
                            onClick: this.props.renderBalloonInBalloonLayer || this.props.useModal ? this.handleButtonClick : void 0,
                            type: this.getButtonType(s)
                        }, u);
                        if (this.props.useModal) return p;
                        var m = r[0];
                        return this.setBalloonWrapperContent(a.createElement(x, {
                            authToken: this.props.authToken,
                            channelLogin: this.props.channelLogin || "",
                            "data-test-selector": I.SubscribeBalloon,
                            handleSubMenuAction: this.handleSubMenuAction,
                            inPrimeRegion: o,
                            isEsportChannel: l,
                            isNonStandardSub: d,
                            isStaff: !(!this.props.sessionUser || !this.props.sessionUser.roles) && this.props.sessionUser.roles.isStaff,
                            isSubscribed: s,
                            productId: m ? m.id : "",
                            subbedTier: c || S.a.Prime,
                            userHasPrime: !1
                        })), this.props.renderBalloonInBalloonLayer ? a.createElement(L.Ya, {
                            "data-test-selector": I.BalloonLayerButton,
                            refDelegate: this.setContainerRefDelegate
                        }, p) : a.createElement(L.Ya, null, a.createElement(k.a, {
                            "data-test-selector": I.DefaultButton,
                            onToggle: this.handleMenuToggle
                        }, p, a.createElement(L.u, {
                            "data-a-target": "sub-balloon",
                            direction: this.getBalloonDirection(),
                            size: L.w.Large
                        }, this.balloonWrapperContent)))
                    }, t.prototype.getButtonType = function(e) {
                        L.F.Default;
                        return e && void 0 !== this.props.subscribedButtonType ? this.props.subscribedButtonType : e ? L.F.Success : this.props.unsubscribedButtonType || L.F.Default
                    }, t.prototype.getButtonIcon = function(e, t) {
                        var n = void 0;
                        return e ? n = t === S.a.Prime ? L.ub.Crown : L.ub.Star : this.props.forceIcon && (n = L.ub.StarHollow), n
                    }, t.prototype.isUserDataReady = function(e) {
                        return e.data && e.data.user && !e.data.loading && !e.data.error
                    }, t.prototype.checkAndDisplaySubscriptionCheckout = function() {
                        var e = v.n.get(l.d, "");
                        if (e) {
                            var t = this.props.data.user;
                            if (t && t.subscriptionProducts) t.subscriptionProducts.filter(function(e) {
                                return e
                            }).map(function(e) {
                                return e.name
                            }).includes(e) ? this.props.sessionUser ? this.props.showSubscriptionCheckoutModal({
                                isAnonymous: v.n.get(l.a, !1),
                                mysteryGiftCount: Number(v.n.get(l.c, "")),
                                productName: e,
                                recipientLogin: v.n.get(l.e, ""),
                                trackingContext: {
                                    source: _.c.ChannelSubscribeButton
                                }
                            }) : this.props.showLoginModal() : Object(l.f)()
                        }
                    }, t
                }(a.Component),
                M = Object(h.compose)(Object(b.a)(R, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(y.a)([{
                    topic: function(e) {
                        return Object(w.I)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(g.e)())(D),
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.reportInteractive = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(M, {
                            authToken: this.props.authToken,
                            balloonDirection: this.props.balloonDirection,
                            channelLogin: this.props.channelLogin,
                            forceIcon: this.props.forceIcon,
                            hideEsportsSubscription: this.props.hideEsportsSubscription,
                            hideDropdownArrow: this.props.hideDropdownArrow,
                            hostChannelID: this.props.hostChannelID,
                            hostChannelLogin: this.props.hostChannelLogin,
                            renderBalloonInBalloonLayer: this.props.renderBalloonInBalloonLayer,
                            reportInteractive: this.reportInteractive,
                            sessionUser: this.props.sessionUser,
                            showLoginModal: this.props.showLoginModal,
                            showSubscriptionCheckoutModal: this.props.showSubscriptionCheckoutModal,
                            showSubscriptionModal: this.props.showSubscriptionModal,
                            subscribedButtonType: this.props.subscribedButtonType,
                            unsubscribedButtonType: this.props.unsubscribedButtonType,
                            updateContainerWidth: this.props.updateContainerWidth,
                            useModal: this.props.useModal
                        })
                    }, t = i.__decorate([Object(p.b)("SubscribeButton")], t)
                }(a.Component);
            var j = Object(r.connect)(function(e) {
                return {
                    authToken: Object(u.a)(e),
                    sessionUser: Object(u.e)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    showLoginModal: Object(l.g)(d.a.ChannelSubscriptionButton),
                    showSubscriptionModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(c.d)(m.a, t)
                    },
                    showSubscriptionCheckoutModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(c.d)(s.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([n.e(0), n.e(210)]).then(n.bind(null, "KJv/"))
                            },
                            componentProps: t
                        })
                    }
                }, e)
            })(A);
            n.d(t, !1, function() {
                return A
            }), n.d(t, "a", function() {
                return j
            }), n.d(t, !1, function() {
                return I
            }), n.d(t, !1, function() {
                return D
            }), n.d(t, !1, function() {
                return M
            })
        },
        RFKy: function(e, t, n) {},
        RQ6e: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("TSYQ"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                d = n("GnwI");
            var c = n("Ue10"),
                u = n("gIsd"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = Object(o.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [r.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(o.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return r.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return r.createElement(c.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(c.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, r.createElement(c.Ab, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, r.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(r.Component),
                m = Object(s.compose)(Object(l.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(d.b)("ReportReasonSelect"))(p);
            n("y4Ne");
            n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return v
            });
            var h;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(h || (h = {}));
            var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        description: "",
                        reason: null
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: r.createElement("br", null),
                        tosLink: r.createElement("a", {
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
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c.Ya, {
                        display: c.X.Flex,
                        flexDirection: c.Aa.Column,
                        alignItems: c.f.Center,
                        justifyContent: c.Xa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? r.createElement("div", null, r.createElement(c.z, {
                        onClick: this.props.onClose
                    }, r.createElement(c.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : r.createElement("div", null, r.createElement(c.Ya, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, r.createElement(c.W, {
                        type: c.Wb.H4
                    }, this.props.title), r.createElement(c.Fb, {
                        color: c.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), r.createElement("form", null, r.createElement(c.Fb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, r.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), r.createElement(c.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, r.createElement(c.Tb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), r.createElement(c.Fb, {
                        display: c.X.Flex,
                        justifyContent: c.Xa.Center
                    }, r.createElement(c.z, {
                        onClick: this.handleSubmit
                    }, r.createElement(c.Ya, {
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
                    return r.createElement(c.Fb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(r.Component)
        },
        RXle: function(e, t, n) {
            "use strict";
            var i = n("86FS");
            n.d(t, "VideoPreviewCard", function() {
                return i.a
            });
            n("0T/G");
            var a = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return a.a
            })
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
        UUve: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return r
            }), n.d(t, "e", function() {
                return o
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "f", function() {
                return u
            }), n.d(t, "g", function() {
                return p
            });
            var i = n("/7QA"),
                a = n("y5D0"),
                r = "SUB_CHECKOUT__PRODUCT",
                o = "SUB_CHECKOUT__RECIPIENT",
                s = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                l = "SUB_CHECKOUT__GIFTING_ANONYMOUSLY",
                d = "SUB_CHECKOUT__IS_ONE_TIME",
                c = [r, o, s, l, d];

            function u() {
                c.forEach(function(e) {
                    return i.n.remove(e)
                })
            }

            function p(e) {
                return function() {
                    return Object(a.e)(e, {
                        onClose: u
                    })
                }
            }
        },
        X7Ac: function(e, t, n) {
            "use strict";
            var i = n("wbMx");
            n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            })
        },
        XA5B: function(e, t, n) {},
        ZbA5: function(e, t, n) {
            "use strict";
            var i, a, r, o, s = n("mrSG"),
                l = n("TSYQ"),
                d = n("q1tI"),
                c = n("/7QA"),
                u = n("oB8h"),
                p = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((i = {})[u.a.Live] = "stream-type-indicator--live", i[u.a.Premiere] = "stream-type-indicator--premiere", i[u.a.Rerun] = "stream-type-indicator--rerun", i[u.a.WatchParty] = "stream-type-indicator--rerun", i),
                h = ((a = {})[u.a.Premiere] = p.ub.VideoPremiere, a[u.a.Rerun] = p.ub.VideoRerun, a[u.a.WatchParty] = p.ub.VideoRerun, a),
                v = ((r = {})[u.a.Premiere] = p.vb.Live, r[u.a.Rerun] = p.vb.Inherit, r[u.a.WatchParty] = p.vb.Inherit, r),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(p.Fb, {
                            className: this.getClassNames(),
                            color: p.O.Overlay,
                            background: p.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: p.x.Small,
                            display: p.X.Flex
                        }, d.createElement(p.Ya, {
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), d.createElement(p.W, {
                            type: p.Wb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? d.createElement(p.Fb, {
                            borderRadius: p.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? d.createElement(p.Ya, {
                            className: "stream-type-indicator__live-wrapper",
                            display: p.X.Flex,
                            alignItems: p.f.Center
                        }, d.createElement(p.K, {
                            status: p.M.Live,
                            size: p.L.Small
                        })) : d.createElement(p.tb, {
                            asset: h[this.props.type],
                            type: v[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case u.a.Live:
                                return Object(c.d)("LIVE", "StreamTypeIndicator");
                            case u.a.Premiere:
                                return Object(c.d)("Premiere", "StreamTypeIndicator");
                            case u.a.Rerun:
                            case u.a.WatchParty:
                                return Object(c.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(d.Component);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return g
            })
        },
        ZtEv: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "e", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            });
            var i, a, r, o, s = n("0Log");
            n.d(t, "d", function() {
                    return s.ModerationActions
                }),
                function(e) {
                    e[e.Message = 0] = "Message", e[e.ExtensionMessage = 1] = "ExtensionMessage", e[e.Moderation = 2] = "Moderation", e[e.ModerationAction = 3] = "ModerationAction", e[e.TargetedModerationAction = 4] = "TargetedModerationAction", e[e.AutoMod = 5] = "AutoMod", e[e.SubscriberOnlyMode = 6] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 7] = "FollowerOnlyMode", e[e.SlowMode = 8] = "SlowMode", e[e.EmoteOnlyMode = 9] = "EmoteOnlyMode", e[e.R9KMode = 10] = "R9KMode", e[e.Connected = 11] = "Connected", e[e.Disconnected = 12] = "Disconnected", e[e.Reconnect = 13] = "Reconnect", e[e.Hosting = 14] = "Hosting", e[e.Unhost = 15] = "Unhost", e[e.Hosted = 16] = "Hosted", e[e.Subscription = 17] = "Subscription", e[e.Resubscription = 18] = "Resubscription", e[e.GiftPaidUpgrade = 19] = "GiftPaidUpgrade", e[e.AnonGiftPaidUpgrade = 20] = "AnonGiftPaidUpgrade", e[e.SubGift = 21] = "SubGift", e[e.AnonSubGift = 22] = "AnonSubGift", e[e.Clear = 23] = "Clear", e[e.RoomMods = 24] = "RoomMods", e[e.RoomState = 25] = "RoomState", e[e.Raid = 26] = "Raid", e[e.Unraid = 27] = "Unraid", e[e.Ritual = 28] = "Ritual", e[e.Notice = 29] = "Notice", e[e.Info = 30] = "Info", e[e.BadgesUpdated = 31] = "BadgesUpdated", e[e.Purchase = 32] = "Purchase", e[e.BitsCharity = 33] = "BitsCharity", e[e.CrateGift = 34] = "CrateGift", e[e.RewardGift = 35] = "RewardGift", e[e.SubMysteryGift = 36] = "SubMysteryGift", e[e.AnonSubMysteryGift = 37] = "AnonSubMysteryGift", e[e.FirstCheerMessage = 38] = "FirstCheerMessage"
                }(i || (i = {})),
                function(e) {
                    e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
                }(a || (a = {})),
                function(e) {
                    e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout", e[e.Delete = 2] = "Delete"
                }(r || (r = {})),
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
                return v
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("oe5X"),
                o = n("0FG4"),
                s = n("kRBY"),
                l = n("60o1"),
                d = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
                c = {};

            function u(e, t, n, a, r, o, s) {
                void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === s && (s = !1);
                var d = Object(l.a)(t.displayName, t.username);
                return {
                    badges: t.badges || {},
                    bits: t.bits,
                    user: i.__assign({}, d, {
                        userLogin: t.username,
                        userID: t.userID,
                        userType: t.userType,
                        color: t.color || p(t.userID)
                    }),
                    messageParts: m(e, t.emotes || {}, t.bits, n, a, t.username),
                    deleted: r,
                    banned: s,
                    hidden: o,
                    timestamp: Date.now()
                }
            }

            function p(e, t) {
                return void 0 === t && (t = 15), "number" != typeof c[e] && (c[e] = Math.floor(Math.random() * t)), d[c[e]]
            }

            function m(e, t, n, i, l, d) {
                var c = Object(s.e)(a.p.store.getState()),
                    u = {
                        cheers: n ? i : void 0,
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
                            senderLogin: d,
                            sessionUser: c
                        }
                    };
                return Object(r.a)(e, u)
            }

            function h(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
            }

            function v(e, t) {
                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
            }
        },
        a7aT: function(e, t, n) {},
        axFM: function(e, t, n) {},
        br9A: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return d
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("2xye"),
                o = n("I6K6"),
                s = n("RuiO"),
                l = {
                    BuyCustomMysteryGift: "buy_custom_mystery_gift",
                    BuyGiftSub: "buy_gift_sub",
                    BuyGiftToPaidUpgrade: "buy_gift_to_paid_upgrade",
                    BuyMysteryGift: "buy_mystery_gift",
                    BuyPaidUpgrade: "buy_paid_upgrade",
                    BuyDNRToResub: "buy_dnr_to_resub",
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

            function d(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, l, d, c, u, p, m, h, v, g, f, k;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = a.o.getVideoPlayerTrackingData().vodID, n = !!t, l = {
                                    channelID: e.channelID,
                                    withVideo: !1
                                }, n && (l.withVideo = !0, l.videoID = t), d = null, i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, a.p.apollo.client.query({
                                    query: s,
                                    variables: l
                                })];
                            case 2:
                                return d = i.sent(), [3, 4];
                            case 3:
                                return c = i.sent(), a.k.error(c, "Failed to make query for channel info in FollowEvent reporting.", {
                                    channelID: e.channelID
                                }), [3, 4];
                            case 4:
                                return u = d && d.data && d.data.user || null, d && !u && a.k.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                    channelID: e.channelID
                                }), p = null, d && n && ((m = d && d.data && d.data.video) ? p = Object(o.a)(m.broadcastType) : a.k.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
                                    currentVideoID: t
                                })), h = u && u.self, v = h ? !!h.subscriptionBenefit : null, g = h && h.subscriptionBenefit && h.subscriptionBenefit.purchasedWithPrime || !1, f = h ? h.canPrimeSubscribe : null, k = {
                                    action: e.action,
                                    can_subscribe: f,
                                    channel: e.channelLogin,
                                    channel_id: e.channelID,
                                    checkout_button_tier: e.checkoutButtonTier,
                                    has_sub_credit: e.hasSubCredit,
                                    host_channel: e.hostChannelLogin,
                                    host_channel_id: e.hostChannelID,
                                    is_anonymous: e.isAnonymous,
                                    is_menu_open: e.isMenuOpen,
                                    is_subscribed: v,
                                    is_subscribed_current_tier: h && h.subscriptionBenefit && h.subscriptionBenefit.tier,
                                    mystery_gift_count: e.mysteryGiftCount || null,
                                    sub_location: e.sub_location,
                                    sub_recipient: e.giftRecipient,
                                    modal: e.modal,
                                    modal_level: e.modalLevel || "",
                                    show_prime_content: e.showPrimeContent,
                                    show_resub: u ? f && g : null,
                                    vod_id: t,
                                    vod_type: p,
                                    viewport_height: window.innerHeight,
                                    viewport_width: window.innerWidth
                                }, a.o.track(r.SpadeEventType.Subscription, k), [2]
                        }
                    })
                })
            }
        },
        cESk: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "EventCollectionContent"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "EventCollection"
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
                                value: "description"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "collectionImageURL"
                            },
                            name: {
                                kind: "Name",
                                value: "imageURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "720"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "405"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "collectionStart"
                            },
                            name: {
                                kind: "Name",
                                value: "startAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "collectionEnd"
                            },
                            name: {
                                kind: "Name",
                                value: "endAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "nextLeaf"
                            },
                            name: {
                                kind: "Name",
                                value: "leaves"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "criteria"
                                },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [{
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "firstPageOptions"
                                        },
                                        value: {
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAfter"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "now"
                                                    }
                                                }
                                            }]
                                        }
                                    }]
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
                                                        value: "startAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "endAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "channel"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
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
                                        value: "isFollowing"
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
                    end: 364
                }
            };
            n.loc.source = {
                body: "fragment EventCollectionContent on EventCollection {\nid\ntitle\ndescription\ncollectionImageURL: imageURL(width:720 height:405)\ncollectionStart: startAt\ncollectionEnd: endAt\nnextLeaf: leaves(first: 1 criteria: { firstPageOptions: { endsAfter: $now } }) {\nedges {\nnode {\nid\nstartAt\nendAt\nchannel {\nid\nlogin\n}\n}\n}\n}\nowner {\nid\nlogin\ndisplayName\n}\nself {\nisFollowing\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("o4DC");

            function a(e) {
                return e && Object(i.c)(e) || ""
            }
        },
        cRsL: function(e, t, n) {},
        d0xR: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("ZS2+"),
                d = n("cZKs"),
                c = n("UUve"),
                u = n("1/iK"),
                p = n("aCAx"),
                m = n("kRBY"),
                h = n("Ue10"),
                v = n("/7QA"),
                g = n("yR8l"),
                f = n("3Bft"),
                k = n("/0dD"),
                b = n("tIid"),
                y = n("ht6z"),
                S = n("76Lv"),
                C = n("KriR"),
                E = n("br9A"),
                w = (n("y2dA"), n("eaNi"));
            ! function(e) {
                e.SubButton = "subscribe-button__dropdown", e.BalloonLayerButton = "subscribe-button__balloon-layer-btn", e.DefaultButton = "subscribe-button__default-btn", e.SubscribeBalloon = "subscribe-button__subscribe-balloon"
            }(i || (i = {}));
            var _ = l.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(199)]).then(n.bind(null, "f+qK"))
                }, "SubscribeBalloon"),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.modalLevel = "top_page", t.handleSubMenuAction = function(e) {
                            new Set([E.a.ClickCheckout, E.a.BuyGiftSub, E.a.BuyMysteryGift, E.a.BuyCustomMysteryGift, E.a.BuyGiftToPaidUpgrade, E.a.BuyPaidUpgrade]).has(e.action) && t.checkAndDisplaySubscriptionCheckout();
                            var n = t.props.data,
                                i = n.user,
                                a = !!(i && i.self && i.self.subscriptionBenefit),
                                r = n.requestInfo && Object(y.a)(n.requestInfo.countryCode);
                            Object(E.b)({
                                action: e.action || "",
                                channelLogin: t.props.channelLogin || "",
                                channelID: i && i.id || "",
                                checkoutButtonTier: e.checkoutButtonTier,
                                hasSubCredit: i && i.self && i.self.canPrimeSubscribe,
                                hostChannelID: t.props.data.user && t.props.data.user.id || "",
                                hostChannelLogin: t.props.channelLogin,
                                isMenuOpen: e.action !== E.a.OpenSubMenu,
                                mysteryGiftCount: e.mysteryGiftCount,
                                sub_location: "squad_page",
                                modal: !a,
                                modalLevel: a ? "" : t.modalLevel.slice(),
                                showPrimeContent: r,
                                giftRecipient: e.giftRecipient || null
                            }), !e.modalLevel || e.action !== E.a.ClickMoreSubOptions && e.action !== E.a.ClickBack || (t.modalLevel = e.modalLevel)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.checkAndDisplaySubscriptionCheckout()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !this.isUserDataReady(e) && this.isUserDataReady(this.props) && this.checkAndDisplaySubscriptionCheckout()
                    }, t.prototype.render = function() {
                        if (!(this.props.data && this.props.data.user && this.props.data.user.id && this.props.data.user.subscriptionProducts && this.props.data.requestInfo)) return null;
                        var e = this.props.data.user,
                            t = e.self,
                            n = e.subscriptionProducts.filter(function(e) {
                                return e
                            });
                        if (0 === n.length) return null;
                        if (this.props.hideEsportsSubscription && Object(b.a)(this.props.data.user.id || "", this.props.sessionUser)) return null;
                        var i = Object(y.a)(this.props.data.requestInfo.countryCode),
                            a = !(!t || !t.subscriptionBenefit),
                            o = Object(b.a)(this.props.data.user.id || "", this.props.sessionUser),
                            s = 1 === n.length;
                        n.some(function(e) {
                            return !e.emoteSetID
                        }) && (s = !0);
                        var l = null;
                        t && t.subscriptionBenefit && (l = t.subscriptionBenefit.purchasedWithPrime ? f.a.Prime : t.subscriptionBenefit.tier, this.modalLevel = "");
                        var d = this.props.data.user.displayName || this.props.channelLogin,
                            c = n[0];
                        return r.createElement(h.Fb, {
                            className: Object(S.b)(k.a.Light)
                        }, r.createElement(h.Fb, {
                            overflow: h.db.Hidden,
                            fullWidth: !0,
                            className: "subscribe-modal__banner"
                        }, this.props.data.user.bannerImageURL && r.createElement(h.S, {
                            src: this.props.data.user.bannerImageURL,
                            alt: Object(v.d)("{channelName}'s banner image", {
                                channelName: d
                            }, "SubscribeModal")
                        })), this.props.data.user.profileImageURL && r.createElement(h.Fb, {
                            className: "subscribe-modal__avatar",
                            background: h.r.Alt,
                            position: h.kb.Absolute,
                            borderRadius: h.x.Small,
                            overflow: h.db.Hidden
                        }, r.createElement(h.q, {
                            size: 80,
                            src: this.props.data.user.profileImageURL,
                            alt: Object(v.d)("{channelName}'s profile image", {
                                channelName: d
                            }, "SubscribeModal")
                        })), r.createElement(h.Ya, {
                            padding: {
                                x: 2
                            },
                            margin: {
                                top: 3
                            }
                        }, r.createElement(h.W, {
                            fontSize: h.Ca.Size3
                        }, Object(v.d)("Subscribe to {channelName}", {
                            channelName: d
                        }, "SubscribeModal"))), r.createElement(_, {
                            authToken: this.props.authToken,
                            channelLogin: this.props.channelLogin,
                            inPrimeRegion: i,
                            isEsportChannel: o,
                            isNonStandardSub: s,
                            isStaff: !(!this.props.sessionUser || !this.props.sessionUser.roles) && this.props.sessionUser.roles.isStaff,
                            isSubscribed: a,
                            userHasPrime: !1,
                            productId: c ? c.id : "",
                            subbedTier: l || f.a.Prime,
                            handleSubMenuAction: this.handleSubMenuAction
                        }))
                    }, t.prototype.isUserDataReady = function(e) {
                        return e.data && e.data.user && !e.data.loading && !e.data.error
                    }, t.prototype.checkAndDisplaySubscriptionCheckout = function() {
                        var e = v.n.get(c.d, "");
                        if (e) {
                            var t = this.props.data.user;
                            if (t && t.subscriptionProducts)
                                if (this.props.showSubscriptionCheckoutModal && this.props.showLoginModal) t.subscriptionProducts.filter(function(e) {
                                    return e
                                }).map(function(e) {
                                    return e.name
                                }).includes(e) ? this.props.sessionUser ? this.props.showSubscriptionCheckoutModal({
                                    isAnonymous: v.n.get(c.a, !1),
                                    mysteryGiftCount: Number(v.n.get(c.c, "")),
                                    productName: e,
                                    recipientLogin: v.n.get(c.e, ""),
                                    trackingContext: {
                                        source: C.c.ChannelSubscribeButton
                                    }
                                }) : (v.n.set("subscription-target-login", this.props.channelLogin), this.props.showLoginModal()) : Object(c.f)()
                        }
                    }, t
                }(r.Component),
                T = Object(g.a)(w, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                })(N);
            var O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function() {
                        t.props.closeModal()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.props.onClose && this.props.onClose()
                }, t.prototype.render = function() {
                    return r.createElement(h.Fb, {
                        className: "subscribe-modal",
                        background: h.r.Base
                    }, r.createElement(T, {
                        authToken: this.props.authToken,
                        sessionUser: this.props.sessionUser,
                        onClose: this.handleClose,
                        channelLogin: this.props.channelLogin,
                        showLoginModal: this.props.showLoginModal,
                        showSubscriptionCheckoutModal: this.props.showSubscriptionCheckoutModal
                    }), r.createElement(d.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, t
            }(r.Component);
            var I = Object(o.connect)(function(e) {
                return {
                    authToken: Object(m.a)(e),
                    sessionUser: Object(m.e)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: p.c,
                    showLoginModal: Object(c.g)(u.a.ChannelSubscriptionButton),
                    showSubscriptionCheckoutModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(p.d)(l.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([n.e(0), n.e(210)]).then(n.bind(null, "KJv/"))
                            },
                            componentProps: t
                        })
                    }
                }, e)
            })(O);
            n.d(t, !1, function() {
                return O
            }), n.d(t, "a", function() {
                return I
            }), n.d(t, !1, function() {
                return "subscription-target-login"
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return N
            }), n.d(t, !1, function() {
                return T
            })
        },
        dAHa: function(e, t, n) {
            "use strict";
            var i, a, r = n("mrSG"),
                o = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                d = n("/7QA"),
                c = n("yR8l"),
                u = n("BhFH"),
                p = n("iS14"),
                m = n("geRD"),
                h = n("O3Y9"),
                v = n("f00E"),
                g = n("D7An"),
                f = n("DMoW"),
                k = n("2xye"),
                b = n("GnwI"),
                y = n("QVaV"),
                S = n("Ue10"),
                C = (n("MPK0"), "report-wizard-block"),
                E = "report-wizard-unblock",
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return o.createElement(S.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": C
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
                            }, Object(d.d)("Block {user}", {
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
                            }, Object(d.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), o.createElement(S.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": E
                            }, o.createElement(S.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(d.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
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
                        }, o.createElement(S.Ya, null, Object(d.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement(S.Fb, {
                            color: S.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(S.fc, {
                            baseFontSize: S.Ca.Size6
                        }, o.createElement("p", null, Object(d.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement("ul", null, o.createElement("li", null, Object(d.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), o.createElement("li", null, Object(d.d)("Prevent them from hosting you", "ReportWizardBlockActions")), o.createElement("li", null, Object(d.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), o.createElement("li", null, Object(d.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), o.createElement(S.Ya, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(o.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(i || (i = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(a || (a = {}));
            var _, N = {
                    generalFilter: function() {
                        return Object(d.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(d.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(d.d)("Someone else", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(d.d)("Threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(d.d)("Committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(d.d)("Threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(d.d)("Being hateful, harassing, or abusive", "ReportModalWizard")
                    },
                    harassment: function() {
                        return Object(d.d)("Hate speech, harassment, or abuse", "ReportModalWizard")
                    },
                    moreOptions: function() {
                        return Object(d.d)("Give me more options...", "ReportModalWizard")
                    },
                    scam: function() {
                        return Object(d.d)("Attempts to scam other community members", "ReportModalWizard")
                    }
                },
                T = {
                    input_description: {
                        getTitle: function() {
                            return Object(d.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: a.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(d.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: a.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(d.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: a.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(d.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: a.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(d.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: a.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(d.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: a.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(d.d)("Please submit a report on the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: a.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(d.d)("If you feel you are in immediate danger, please contact your local law enforcement. To protect yourself on Twitch, you may also block the user.", "ReportModalWizard")
                        },
                        type: a.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(d.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: a.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(d.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: a.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(d.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: a.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(d.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: a.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(d.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: a.Link
                    },
                    messaging_general: {
                        getTitle: N.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: N.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(d.d)("Participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: i.Harassment
                    },
                    automod: {
                        getTitle: function() {
                            return Object(d.d)("It's being used to bypass AutoMod", "ReportModalWizard")
                        },
                        value: "bypass automod",
                        reportReason: i.Other
                    },
                    violence: {
                        getTitle: function() {
                            return Object(d.d)("Threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: i.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(d.d)("The username is inappropriate", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: i.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(d.d)("The emotes or badges", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: i.Other
                    },
                    emotes_break_guidelines: {
                        getTitle: function() {
                            return Object(d.d)("The emotes break Twitch's guidelines", "ReportModalWizard")
                        },
                        value: "emotes break guidelines",
                        reportReason: i.Other
                    },
                    abusive: {
                        getTitle: N.harassment,
                        value: "abusive"
                    },
                    scam: {
                        getTitle: N.scam,
                        value: "scam",
                        reportReason: i.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(d.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(d.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: i.Impersonation
                    },
                    impersonating: {
                        getTitle: function() {
                            return Object(d.d)("Impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: i.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(d.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: i.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(d.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    itsInappropriateContent: {
                        getTitle: function() {
                            return Object(d.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(d.d)("Inappropriate or obscene content", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(d.d)("They're breaking Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(d.d)("Revealing someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: i.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(d.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: i.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(d.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: i.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(d.d)("The extensions are inappropriate or malicious", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: i.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(d.d)("Cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: i.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(d.d)("They're breaking Twitch's Bits Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: i.BitsViolation
                    },
                    compromisedAccount: {
                        getTitle: function() {
                            return Object(d.d)("The account is stolen or compromised", "ReportModalWizard")
                        },
                        value: "account compromised",
                        reportReason: i.Other
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(d.d)("Their content is misclassified (wrong category or tags)", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: i.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(d.d)("There's no streamer, or the streamer is inactive", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: i.Miscategorized
                    },
                    video_general: {
                        getTitle: N.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeechSymbols: {
                        getTitle: function() {
                            return Object(d.d)("It contains hate speech or hate symbols", "ReportModalWizard")
                        },
                        value: "hate speech symbols",
                        reportReason: i.HatefulConduct
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(d.d)("Hate speech, hateful symbols, or other hateful conduct", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: i.HatefulConduct
                    },
                    harassing: {
                        getTitle: function() {
                            return Object(d.d)("It's harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: i.Harassment
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(d.d)("Harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: i.Harassment
                    },
                    abusiveViolence: {
                        getTitle: N.abusiveViolence,
                        value: "threatening violence",
                        reportReason: i.Harm
                    },
                    commitingViolence: {
                        getTitle: N.commitingViolence,
                        value: "committing violence",
                        reportReason: i.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(d.d)("Involvement in swatting or DDOS attacks", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: i.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(d.d)("Doxxing (purposely revealing personal information)", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: i.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(d.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: i.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(d.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: i.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(d.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: i.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(d.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(d.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: i.Prohibited
                    },
                    sexuallyViolentChildAnimal: {
                        getTitle: function() {
                            return Object(d.d)("Sexual conduct involving violence, children, or animals", "ReportModalWizard")
                        },
                        value: "sexual conduct: violent, child, or animal",
                        reportReason: i.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(d.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: i.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(d.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: i.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(d.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: i.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(d.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: i.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(d.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: i.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(d.d)("Evading a block, ban, or suspension", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(d.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: i.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(d.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: i.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(d.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: i.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: N.me,
                        value: "impersonating me",
                        reportReason: i.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(d.d)("Someone I represent, or a company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: i.Impersonation
                    },
                    impersonation_other: {
                        getTitle: N.someoneElse,
                        value: "Impersonating someone else",
                        reportReason: i.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(d.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: i.SelfHarm
                    },
                    video: {
                        getTitle: function() {
                            return Object(d.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    video_more_options: {
                        getTitle: N.moreOptions,
                        value: "video more options"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(d.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: f.O.WHISPER_REPORT
                    },
                    whisper_more_options: {
                        getTitle: N.moreOptions,
                        value: "whisper more options"
                    },
                    chat: {
                        getTitle: function() {
                            return Object(d.d)("In a chat message or room", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    chat_more_options: {
                        getTitle: N.moreOptions,
                        value: "chat more options"
                    },
                    moderating: {
                        getTitle: function(e) {
                            return Object(d.d)("{username} isn't moderating their chat", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "moderating",
                        reportReason: i.Other
                    },
                    otherContent: {
                        getTitle: function(e) {
                            return Object(d.d)("In {username}'s other content (profile, emotes, etc.)", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "other content"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(d.d)("The profile content (avatar, panels, etc.)", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    profile_more_options: {
                        getTitle: N.moreOptions,
                        value: "profile more options"
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(d.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(d.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(d.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(d.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(d.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(d.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(d.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(d.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(d.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(d.d)("Inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: i.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: N.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: N.harassment,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: N.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: i.Harm
                    },
                    external_commitingViolence: {
                        getTitle: N.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: i.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(d.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: i.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(d.d)("Spam, malicious links, or bot accounts", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: i.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(d.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_links: {
                        getTitle: function() {
                            return Object(d.d)("Sending malicious links", "ReportModalWizard")
                        },
                        value: "malicious links"
                    },
                    spam_scam: {
                        getTitle: N.scam,
                        value: "scam"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(d.d)("Sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                i = n.name,
                                a = n.value;
                            t.props.onChangeText(i, a)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    i = t.props.currentCard.items[n];
                                t.props.onChangeRadio(i)
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
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
                                case a.Text:
                                    return o.createElement(S.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case a.Link:
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
                                case a.Textarea:
                                    var i = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        r = t.required && (!i || !!i && 0 === i.trim().length);
                                    return o.createElement(S.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(S.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(d.d)("Optional", "ReportModalWizardCard")
                                    }, o.createElement(S.Tb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && r,
                                        value: i,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case a.MultipleChoice:
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
            }(_ || (_ = {}));
            var F, L, R, x = {
                    contentGeneral: function() {
                        return Object(d.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(d.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(d.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(d.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(d.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                D = {
                    report: function(e) {
                        return Object(d.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(d.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(d.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportWhisper: function(e) {
                        return Object(d.d)("Report {username}'s Whisper", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfileOrOtherContent: function(e) {
                        return Object(d.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(d.d)("Report {username}'s Profile Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportEmotesBadges: function(e) {
                        return Object(d.d)("Report {username}'s Emotes or Badges", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(d.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(d.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(d.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(d.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                M = {
                    getDescription: function() {
                        return Object(d.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: D.thanks,
                    type: _.Info,
                    value: "end card"
                },
                A = {
                    socialMedia: r.__assign({}, M, {
                        items: [T.endBlurb_socialmedia]
                    }),
                    violence: r.__assign({}, M, {
                        items: [T.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: D.thanksConcern,
                        getDescription: function() {
                            return Object(d.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [T.endLink_DMCA, T.endLink_trademark, T.endLink_devAgreement],
                        type: _.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: D.thanksConcern,
                        getDescription: function() {
                            return Object(d.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [T.endLink_selfharm],
                        type: _.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: D.thanksConcern,
                        getDescription: function() {
                            return Object(d.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [T.endLink_eventCoC],
                        value: "twitch event end",
                        type: _.Info
                    }
                },
                j = {
                    getTitle: D.report,
                    getLabel: function() {
                        return Object(d.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [T.video, T.whisper, T.chat, T.moderating, T.otherContent, T.report_username, T.report_other],
                    type: _.MultipleChoice,
                    value: "content type"
                },
                U = {
                    identifyUser: {
                        getTitle: D.reportVideo,
                        getLabel: x.identifyUser,
                        items: [T.video_streamer, T.video_someoneElse, T.video_chatSomeone],
                        type: _.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: D.reportVideo,
                        getLabel: x.contentGeneral,
                        items: [T.violence, T.abusive, T.video_inactive, T.video_labeling, T.inappropriateContent, T.selfharm, T.video_more_options],
                        type: _.MultipleChoice,
                        value: "video report reason"
                    },
                    moreOptions: {
                        getTitle: D.reportVideo,
                        getLabel: x.contentGeneral,
                        items: [T.revealPersonalInfo, T.cheating, T.impersonating, T.underage, T.bitsViolation, T.report_ip, T.other],
                        type: _.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                P = {
                    content: {
                        getTitle: D.reportMessage,
                        getLabel: x.contentGeneral,
                        items: [T.report_username, T.violence, T.abusive, T.evasion, T.spam, T.selfharm, T.chat_more_options],
                        type: _.MultipleChoice,
                        value: "message report reason"
                    },
                    moreOptions: {
                        getTitle: D.reportMessage,
                        getLabel: x.contentGeneral,
                        items: [T.emotes_break_guidelines, T.inappropriateContent, T.revealPersonalInfo, T.maliciousRaid, T.underage, T.bitsViolation, T.other],
                        type: _.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                B = {
                    general: {
                        getTitle: D.reportWhisper,
                        getLabel: x.contentGeneral,
                        items: [T.report_username, T.violence, T.abusive, T.spam, T.selfharm, T.whisper_more_options],
                        type: _.MultipleChoice,
                        value: "whisper report reason",
                        getDescription: function() {
                            return Object(d.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                        }
                    },
                    moreOptions: {
                        getTitle: D.reportWhisper,
                        getLabel: x.contentGeneral,
                        items: [T.emotes_break_guidelines, T.evasion, T.inappropriateContent, T.revealPersonalInfo, T.underage, T.other],
                        type: _.MultipleChoice,
                        value: "whisper general report reason"
                    }
                },
                W = {
                    profile: {
                        getTitle: D.reportProfile,
                        getLabel: x.contentGeneral,
                        items: [T.revealPersonalInfo, T.violence, T.abusive, T.inappropriateContent, T.selfharm, T.profile_more_options],
                        type: _.MultipleChoice,
                        value: "profile report reason"
                    },
                    profileMoreOptions: {
                        getTitle: D.reportProfile,
                        getLabel: x.contentGeneral,
                        items: [T.scam, T.evasion, T.impersonation, T.underage, T.report_ip, T.other],
                        type: _.MultipleChoice,
                        value: "profile general report reason"
                    },
                    emotes: {
                        getTitle: D.reportEmotesBadges,
                        getLabel: x.content,
                        items: [T.hateSpeechSymbols, T.harassing, T.itsInappropriateContent, T.automod, T.report_ip, T.other],
                        type: _.MultipleChoice,
                        value: "emote report reason"
                    },
                    general: {
                        getTitle: D.reportProfileOrOtherContent,
                        getLabel: x.content,
                        items: [T.report_username, T.profile, T.report_emotes, T.inappropriateExtension, T.compromisedAccount, T.violateDevAgreement],
                        type: _.MultipleChoice,
                        value: "profile content location"
                    }
                },
                z = {
                    getTitle: function(e) {
                        return Object(d.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: x.identifyUser,
                    items: [T.report_channelOwner, T.report_member],
                    value: "room report user",
                    type: _.MultipleChoice
                },
                V = {
                    getTitle: D.tellUsMore,
                    items: [T.input_description],
                    type: _.Confirm,
                    value: "tell us more"
                },
                G = {
                    banEvasion: r.__assign({}, V, {
                        items: [T.input_usernames, T.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: r.__assign({}, V, {
                        items: [T.input_link, T.input_connection, T.input_description],
                        nextCard: A.socialMedia,
                        value: "social media tell us more"
                    })
                },
                H = {
                    content: {
                        getTitle: D.reportAbusive,
                        getLabel: x.relevantStatements,
                        items: [T.hateSpeech, T.harassment, T.abusiveViolence, T.commitingViolence, T.swatting, T.personalInfo],
                        type: _.MultipleChoice,
                        value: "abuse type"
                    }
                },
                Y = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(d.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(d.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [T.location_onTwitch, T.location_anotherSite, T.location_TwitchEvent],
                        type: _.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(d.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: x.contentGeneral,
                        getDescription: function() {
                            return Object(d.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [T.external_incitingRaids, T.external_threatening, T.external_harassment],
                        type: _.MultipleChoice,
                        nextCard: G.socialMedia,
                        value: "external site conduct"
                    },
                    external_abusive: r.__assign({}, H.content, {
                        items: [T.hateSpeech, T.harassment, T.external_abusiveViolence, T.external_commitingViolence, T.swatting, T.personalInfo],
                        nextCard: G.socialMedia
                    })
                },
                X = {
                    getTitle: function(e) {
                        return Object(d.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: x.contentGeneral,
                    items: [T.spam_bot, T.spam_scam, T.spam_links, T.spam_repeated],
                    type: _.MultipleChoice,
                    value: "spam type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(d.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: x.relevantStatements,
                    items: [T.inappropriate_game, T.gory, T.sexuallyViolentChildAnimal, T.pornographic, T.suggestive, T.nudity, T.other],
                    type: _.MultipleChoice,
                    value: "inappropriate content type"
                },
                Q = {
                    getTitle: function(e) {
                        return Object(d.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(d.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [T.evasion_chat, T.evasion_sitewide, T.evasion_messaging],
                    type: _.MultipleChoice,
                    nextCard: G.banEvasion
                },
                K = {
                    getTitle: function(e) {
                        return Object(d.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(d.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(d.d)("Please note that parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [T.impersonation_me, T.impersonation_brand, T.impersonation_other],
                    type: _.MultipleChoice,
                    value: "impersonation type"
                },
                $ = j,
                Z = V,
                J = M,
                ee = {
                    video: U.content,
                    "video more options": U.moreOptions,
                    whisper: B.general,
                    "whisper more options": B.moreOptions,
                    chat: P.content,
                    "chat more options": P.moreOptions,
                    "other content": W.general,
                    profile: W.profile,
                    "profile more options": W.profileMoreOptions,
                    room: z,
                    "somewhere else": Y.identifyLocation,
                    streamer: U.content,
                    "someone else in video": U.content,
                    "someone in chat": P.content,
                    general_video: U.moreOptions,
                    general_messaging: P.content,
                    general_profile: W.profile,
                    "channel owner": W.general,
                    "community member": P.content,
                    "on twitch": W.general,
                    "another site": Y.externalSite,
                    "twitch event": A.twitchEvent,
                    "brigading/raids": G.socialMedia,
                    "hateful/harassing": Y.external_abusive,
                    "external site; scam": G.socialMedia,
                    "ban evasion": Q,
                    spam: X,
                    hateful: H.content,
                    impersonation: K,
                    abusive: H.content,
                    "inappropriate content": q,
                    "inappropriate emotes": W.emotes,
                    "intellectual property": A.legal,
                    "violating developer agreement": A.legal
                },
                te = {
                    selfharm: A.selfharm,
                    harm: A.violence,
                    other: J
                },
                ne = {
                    CHANNEL_FEED_POST_REPORT: W.general,
                    COMMUNITY_REPORT: W.general,
                    CHAT_REPORT: P.content,
                    CLIP_REPORT: U.content,
                    EVENT_REPORT: W.general,
                    EXTENSION_REPORT: W.general,
                    LIVE_UP_REPORT: W.general,
                    ROOM_REPORT: z,
                    WHISPER_REPORT: B.general,
                    VOD_COMMENT_REPORT: P.content
                },
                ie = "report-wizard-back",
                ae = "report-wizard-close",
                re = "report-wizard-next",
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
                            }, o.createElement(S.W, null, Object(d.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(d.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                i = ae,
                                a = !1,
                                r = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case _.MultipleChoice:
                                    e = Object(d.d)("Next", "ReportModalWizard"), n = t.handleNext, i = re, a = !t.state.currentSelection;
                                    break;
                                case _.Confirm:
                                    e = Object(d.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, a = !t.state.userTextInput, i = oe
                            }
                            return o.createElement(S.Ya, null, r, o.createElement(S.z, {
                                onClick: n,
                                disabled: a,
                                "data-test-selector": i
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
                                "data-test-selector": ie
                            }, o.createElement(S.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, Object(d.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(d.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(d.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(R.Finish, t.state.currentCard.value, t.getChoiceIndex())
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
                                    i = t.state.prevSelections.concat(t.state.currentSelection),
                                    a = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    r = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = t.getChoiceIndex(),
                                    l = e.nextCard || Z;
                                ee[t.state.currentSelection.value] && (l = ee[t.state.currentSelection.value]);
                                var d = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = l.type === _.Info;
                                t.setState({
                                    currentCard: l,
                                    reportReason: d,
                                    prevCards: c ? [] : n,
                                    prevSelections: i,
                                    targetUnknown: r,
                                    currentSelection: a || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(L.Next, e.value, s)
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
                                    i = n && 0 === n.trim().length;
                                return !n || i
                            }).length
                        }, t.handleSubmit = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a, o = this;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = Object(d.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (r.sent(), this.props.submitStatus) {
                                                case I.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case I.a.Success:
                                                    i = J, te[t] && (i = te[t]), this.state.currentCard.nextCard && (i = this.state.currentCard.nextCard), a = this.getChoiceIndex(), this.setState({
                                                        currentCard: i,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return o.trackNavigation(L.Submit, void 0, a)
                                                    });
                                                    break;
                                                case I.a.UserError:
                                                    this.setState({
                                                        error: Object(d.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case I.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(d.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(I.a.FormError), this.setState({
                                                error: e
                                            }), r.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a, o, s = this;
                                return r.__generator(this, function(r) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], i = !n.differentTarget && this.state.targetUnknown, a = this.getChoiceIndex(), o = this.state.displacedSelections, this.state.currentSelection && (o = o.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: o,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: i
                                    }, function() {
                                        return s.trackNavigation(L.Back, e.value, a)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var i = t.state.userTextInput;
                            i[e] = n, t.setState({
                                userTextInput: i
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var i = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (i = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: i
                                })
                            }
                        }, t.trackNavigation = function(e, n, i) {
                            t.props.trackAction(e, n, t.state.currentCard.value, i)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(R.Close, this.state.currentCard.value, this.getChoiceIndex())
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === _.Info && this.state.currentCard.blockPrompt ? o.createElement(w, {
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
                            n = this.state.prevCards.length || this.state.currentCard.type === _.Info ? null : this.renderPrimer();
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
                        }, o.createElement(O, {
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
                de = n("0hI/");
            n.d(t, "c", function() {
                    return L
                }), n.d(t, "a", function() {
                    return R
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(F || (F = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(L || (L = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(R || (R = {}));
            var ce = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, i) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var n, a, o, s, l = this;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (n = i === f.O.WHISPER_REPORT ? i : this.props.reportContext.contentType, a = f.O[n], null === (o = {
                                                description: t,
                                                reason: e,
                                                content: a,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: I.a.UserError
                                        }), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(o))];
                                    case 2:
                                        return r.sent(), this.setState({
                                            submitStatus: I.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(F.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = r.sent(), d.k.error(s, "ReportUser Mutation failed."), this.setState({
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, r.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        }), n.props.sessionUser && n.props.sessionUser.login && n.props.data.targetUser && n.props.data.targetUser.login && Object(h.b)({
                            context: h.a.ReportWizard,
                            targetUserLogin: n.props.data.targetUser.login,
                            currentUserLogin: n.props.sessionUser.login
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, r.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(L.Open, void 0, e) : n.trackAction(F.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t, i) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(L.Close, t, void 0, i, e) : n.trackAction(F.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, i, a, r) {
                        d.p.tracking.track(k.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === I.a.Success,
                            modal_type: "wizard_v2",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: r,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: i,
                            choice_index: a
                        })
                    }, n.trackAction = function(e) {
                        d.p.tracking.track(k.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === I.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(v.a)();
                    var i = d.p.experiments.getAssignment(g.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: I.a.Unsubmitted,
                        showWizard: "yes" === i,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    }, Object(d.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
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
                        return this.state.showWizard ? this.props.data.loading ? o.createElement(S.ab, null) : o.createElement(se, r.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : o.createElement(I.b, r.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return o.createElement(S.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(S.W, {
                        fontSize: S.Ca.Size5
                    }, Object(d.d)("The user you are trying to report does not exist", "ReportUser")))
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
            var ue = Object(l.compose)(Object(c.a)(le, {
                name: "reportUser"
            }), Object(c.a)(de, {
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
            }, null))(ce)
        },
        daWW: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("GFmA"),
                o = n("PfQt"),
                s = n("GnwI"),
                l = n("RXle"),
                d = n("L5dg"),
                c = n("Ue10"),
                u = function(e) {
                    var t = null,
                        n = null;
                    if (null === e.videos) t = a.createElement(d.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (n = a.createElement(o.a, i.__assign({}, e.viewAllButtonProps)));
                        var s = e.videos.map(function(t, n) {
                            return a.createElement(c.Ya, {
                                "data-a-target": "video-tower-card-" + n,
                                key: "video-" + n,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(l.VideoPreviewCard, {
                                hideGameArt: e.hideGameArt,
                                context: e.listContext || r.b.MixedGameAndChannelList,
                                tracking: {
                                    content: e.trackingContent,
                                    content_index: n,
                                    medium: e.trackingMedium
                                },
                                video: t,
                                trackImageLatency: 0 === n,
                                multipleVideoGameMarkersType: e.multipleVideoGameMarkersType,
                                hideTags: e.hideTags
                            }))
                        });
                        t = a.createElement(a.Fragment, null, s)
                    }
                    return a.createElement(c.cc, {
                        gutterSize: c.ec.Small,
                        childWidth: e.videoCardSize || c.dc.Large,
                        placeholderItems: 20
                    }, t, n)
                },
                p = Object(s.b)("VideoTower", {
                    autoReportInteractive: !0
                })(u);
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return p
            })
        },
        eaNi: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "MultiStream_SubscribeModal_User"
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
                                        value: "bannerImageURL"
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
                                            value: "300"
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
                                                value: "emoteSetID"
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
                                                        value: "purchasedWithPrime"
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
                                                        value: "pendingSubscription"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "startsAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "gift"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isGift"
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
                                                value: "isStaff"
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
                    end: 418
                }
            };
            n.loc.source = {
                body: "query MultiStream_SubscribeModal_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nbannerImageURL\nprofileImageURL(width:300)\nsubscriptionProducts {\nid\nemoteSetID\nname\nself {\npaidUpgradePromotion {\nnewPrice\n}\n}\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\npendingSubscription {\nstartsAt\n}\ngift {\nisGift\n}\n}\n}\n}\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        efEE: function(e, t, n) {},
        gAd6: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoPreviewCardGameID"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 73
                }
            };
            n.loc.source = {
                body: "query VideoPreviewCardGameID($name: String!) {\ngame(name: $name) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
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
        gTu3: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Default = 0] = "Default", e[e.Recipient = 1] = "Recipient", e[e.Sender = 2] = "Sender"
                }(i || (i = {}))
        },
        gl36: function(e, t, n) {},
        he03: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCardVideo"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Video"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "animatedPreviewURL"
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
                                            value: "56"
                                        }
                                    }],
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
                                }]
                            }
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
                                value: "lengthSeconds"
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
                                }]
                            }
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
                                    value: "320"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "180"
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
                                        value: "isRestricted"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "viewingHistory"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "position"
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
                                        }]
                                    }
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
                                value: "restriction"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "productName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "productTitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
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
                }],
                loc: {
                    start: 0,
                    end: 454
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\ndisplayName\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\nprofileImageURL(width: 50)\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nisRestricted\nviewingHistory {\nposition\nupdatedAt\n}\n}\ntitle\nviewCount\nrestriction {\nproductName\nproductTitle\n}\ncontentTags {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = i
        },
        i6WW: function(e, t, n) {
            "use strict";
            var i = n("/7QA"),
                a = n("RcPG"),
                r = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?"),
                o = new RegExp("(?:^|\\s)(?:https?:\\/\\/)?(?:www\\.)?twitch\\.tv\\/(\\w+)\\/clip\\/(\\w+)(?:$|\\s)?");
            var s = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?");
            n.d(t, "a", function() {
                return d
            });
            var l = /^(?:(https?:\/\/)?((?:[\w#%\-+=:~]+\.)+[a-z]{2,8}(?:\/[\w./#%&()\-+=:?~]*)?))$/;

            function d(e, t) {
                var n = e.match(l);
                if (!n) return null;
                if (t.blockLinks) return {
                    type: a.a.Text,
                    content: " <" + Object(i.d)("deleted link", "CreateMessageData") + "> "
                };
                var d = n[1],
                    c = n[2],
                    u = "" + (d || "https://") + c;
                if (t.parseClips && function(e) {
                        void 0 === e && (e = "");
                        var t = r.test(e) && !e.includes("clips.twitch.tv/2017/"),
                            n = o.test(e);
                        return t || n
                    }(u)) {
                    var p = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(r);
                        if (t && t.length > 0 && void 0 !== t.index) return t[1];
                        var n = e.match(o);
                        return n && n.length > 0 && void 0 !== n.index ? n[2] : ""
                    }(u);
                    return {
                        type: a.a.ClipLink,
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
                        type: a.a.VideoLink,
                        content: {
                            id: m,
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
                return l
            });
            var i = n("mrSG"),
                a = n("yR8l"),
                r = n("8jSG"),
                o = n("cMjZ"),
                s = n("zixI");

            function l() {
                var e = this;
                return Object(a.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, a) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
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
                                                            fragment: r
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(a),
                                                            fragment: r,
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
        irYM: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                a = n("fvjX"),
                r = n("1/iK"),
                o = n("y5D0"),
                s = n("kRBY"),
                l = n("mrSG"),
                d = n("q1tI"),
                c = n("/7QA"),
                u = n("yR8l"),
                p = n("geRD"),
                m = n("ug+5"),
                h = n("Ue10"),
                v = n("DXJk"),
                g = n("wSZZ"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleButton = function(e) {
                            return e && (e.stopPropagation(), e.preventDefault()), t.toggleFollowing()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = Object(c.d)("Remind Me", "FollowEvent"),
                            t = Object(c.d)("Reminder Set", "FollowEvent");
                        if (this.props.small) {
                            var n = e,
                                i = h.ub.Heart;
                            return this.props.areNotificationsEnabled && (n = t, i = h.ub.FollowCheck), d.createElement(h.Zb, {
                                label: n,
                                direction: this.props.tooltipDirection
                            }, d.createElement(h.A, {
                                size: h.B.Default,
                                icon: i,
                                onClick: this.handleButton,
                                ariaLabel: n
                            }))
                        }
                        return d.createElement(h.z, {
                            type: this.props.areNotificationsEnabled ? h.F.Success : h.F.Default,
                            onClick: this.handleButton,
                            icon: this.props.areNotificationsEnabled ? h.ub.FollowCheck : h.ub.Heart,
                            ariaLabel: this.props.areNotificationsEnabled ? t : e
                        }, this.props.areNotificationsEnabled ? t : e)
                    }, t.prototype.toggleFollowing = function() {
                        if (!this.props.isLoggedIn) return this.props.login();
                        this.props.areNotificationsEnabled ? this.triggerUnfollowMutation() : this.triggerFollowMutation(), Object(m.d)({
                            action: this.props.areNotificationsEnabled ? m.b.EmailReminderOff : m.b.EmailReminderOn,
                            channelLogin: this.props.channelLogin || "undefined",
                            channelID: this.props.channelID || "undefined",
                            eventID: this.props.eventID,
                            location: this.props.eventLocation
                        })
                    }, t.prototype.triggerFollowMutation = function() {
                        var e, t = {
                            eventID: this.props.eventID
                        };
                        e = "EventCollection" === this.props.eventTypename ? {
                            followEvent: {
                                __typename: "FollowEventPayload",
                                event: {
                                    __typename: "EventCollection",
                                    id: this.props.eventID,
                                    self: {
                                        __typename: "EventSelfConnection",
                                        isFollowing: !0
                                    }
                                }
                            }
                        } : {
                            followEvent: {
                                __typename: "FollowEventPayload",
                                event: {
                                    __typename: "EventLeaf",
                                    id: this.props.eventID,
                                    self: {
                                        __typename: "EventSelfConnection",
                                        isFollowing: !0
                                    }
                                }
                            }
                        };
                        var n = Object(p.b)(t, e);
                        this.props.followEvent(n)
                    }, t.prototype.triggerUnfollowMutation = function() {
                        var e, t = {
                            eventID: this.props.eventID
                        };
                        e = "EventCollection" === this.props.eventTypename ? {
                            unfollowEvent: {
                                __typename: "UnfollowEventPayload",
                                event: {
                                    __typename: "EventCollection",
                                    id: this.props.eventID,
                                    self: {
                                        __typename: "EventSelfConnection",
                                        isFollowing: !1
                                    }
                                }
                            }
                        } : {
                            unfollowEvent: {
                                __typename: "UnfollowEventPayload",
                                event: {
                                    __typename: "EventLeaf",
                                    id: this.props.eventID,
                                    self: {
                                        __typename: "EventSelfConnection",
                                        isFollowing: !1
                                    }
                                }
                            }
                        };
                        var n = Object(p.b)(t, e);
                        this.props.unfollowEvent(n)
                    }, t
                }(d.PureComponent),
                k = Object(a.compose)(Object(u.a)(v, {
                    name: "followEvent"
                }), Object(u.a)(g, {
                    name: "unfollowEvent"
                }))(f);
            var b = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(s.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(o.e)(r.a.EventFollowButton)
                    }
                }, e)
            })(k);
            n.d(t, "a", function() {
                return b
            })
        },
        jKKg: function(e, t, n) {},
        jeZI: function(e, t, n) {},
        "kF1+": function(e, t, n) {},
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
        kVMo: function(e, t, n) {},
        km1c: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("TSYQ"),
                r = n("q1tI"),
                o = n("oJmH"),
                s = n("/7QA"),
                l = n("ZS2+"),
                d = n("MJbm"),
                c = n("eJ65"),
                u = n("yR8l"),
                p = n("x7UT"),
                m = n("0Log"),
                h = n("/aPz"),
                v = n("D7An"),
                g = n("gOYK"),
                f = n("d2C5"),
                k = n("jSzL"),
                b = n("Ahlu"),
                y = n("/MKj"),
                S = n("fvjX"),
                C = n("aCAx"),
                E = n("7CzK"),
                w = n("94Uw"),
                _ = n("Ue10"),
                N = (n("/nm5"), n("41XU")),
                T = l.a.wrap(function() {
                    return n.e(143).then(n.bind(null, "7lJP"))
                }, "UserImageUploader"),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t.props.data && t.props.data.user;
                            e && e.id && e.login && t.props.showModal(T, {
                                userID: e.id,
                                login: e.login,
                                displayName: e.displayName || e.login,
                                imageType: w.a.ProfileBanner,
                                showCloser: !0,
                                successCallback: t.imageUploaded
                            })
                        }, t.imageUploaded = function() {
                            t.props.data && t.props.data.refetch()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = "channel-banner__image-default",
                            i = "channel-banner__header-type",
                            o = {
                                "channel-banner--open": !this.props.collapsed,
                                "channel-banner--side-nav": this.props.isSideNavBanner
                            },
                            l = {
                                "channel-banner__image--side-nav": this.props.isSideNavBanner
                            },
                            d = {
                                "channel-banner__edit-overlay-button--side-nav": this.props.isSideNavBanner
                            },
                            c = this.props.data;
                        c && !c.loading && this.props.firstPageLoaded && c.user && c.user.bannerImageURL ? (n = "channel-banner__image-loaded", t = {
                            backgroundImage: "url(" + c.user.bannerImageURL + ")"
                        }) : (l["channel-banner__image--default"] = !0, t = {
                            backgroundImage: "url(" + E + ")"
                        }), this.props.isSideNavBanner && (i = "channel-banner__side-nav-type");
                        var u = null;
                        if (this.props.canEdit) {
                            var p = this.props.isSideNavBanner ? r.createElement(_.Ya, {
                                display: _.X.Flex,
                                padding: {
                                    x: 3
                                },
                                justifyContent: _.Xa.Between,
                                fullWidth: !0
                            }, r.createElement(_.tb, {
                                asset: _.ub.Edit
                            }), r.createElement(_.W, null, Object(s.d)("Edit", "ChannelBanner"))) : r.createElement(_.Ya, null, r.createElement(_.Ya, null, r.createElement(_.tb, {
                                asset: _.ub.Edit
                            })), Object(s.d)("Update Profile Banner", "ChannelBanner"));
                            u = r.createElement(_.Fb, {
                                className: a("channel-banner__edit-overlay", d),
                                background: _.r.Overlay,
                                position: _.kb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                fullWidth: !0
                            }, r.createElement("button", {
                                className: "channel-banner__edit-overlay-button",
                                "data-test-selector": "channel-banner__edit-overlay-interactable",
                                onClick: this.openModal
                            }, r.createElement(_.Ya, {
                                display: _.X.Flex,
                                alignItems: _.f.Center,
                                flexDirection: _.Aa.Column,
                                justifyContent: _.Xa.Center
                            }, p)))
                        }
                        return e = r.createElement("div", {
                            className: a("channel-banner__image", l),
                            "data-test-selector": n,
                            style: t
                        }, u), r.createElement("div", {
                            className: a("channel-banner", o),
                            "data-test-selector": i,
                            onTransitionEnd: this.props.onTransitionEnd
                        }, r.createElement(_.Qa, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, e))
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.closeModal()
                    }, t
                }(r.Component),
                I = Object(u.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin || !e.firstPageLoaded
                    }
                })(O);
            var F, L = Object(y.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                }, function(e) {
                    return Object(S.bindActionCreators)({
                        closeModal: C.c,
                        showModal: C.d
                    }, e)
                })(I),
                R = n("tuvy"),
                x = n("i4un"),
                D = n("dIU+"),
                M = n("GnwI"),
                A = n("Ba7Q"),
                j = n("QjI3"),
                U = (n("BOil"), n("HXcb"));
            n.d(t, "a", function() {
                return H
            }), n.d(t, "b", function() {
                return Y
            }), n.d(t, "d", function() {
                return W
            }), n.d(t, "c", function() {
                return q
            });
            var P, B = l.a.wrap(function() {
                return n.e(144).then(n.bind(null, "g9Rq"))
            }, "EditProfileOverlay");
            ! function(e) {
                e.SocialButtonsDefault = "channel-header__social-buttons-default", e.SocialButtonsVariantB = "channel-header__social-buttons-variant-b"
            }(P || (P = {}));
            var W, z = "channel-header__edit-profile-overlay",
                V = "channel-header__verified-badge",
                G = "channel-header__live-indicator",
                H = "yes",
                Y = "browser-notifications-upsell-seen";
            ! function(e) {
                e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
            }(W || (W = {}));
            var X = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.verifiedBadgeElement = r.createElement(_.Zb, {
                            label: Object(s.d)("Verified", "ChannelHeader"),
                            direction: _.bc.Right
                        }, r.createElement(_.Ya, {
                            className: "channel-header__verified",
                            "data-target": V,
                            display: _.X.Flex,
                            alignItems: _.f.Center,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(_.tb, {
                            asset: _.ub.Verified
                        }))), n.ChannelStatusIndicatorElement = r.createElement(_.Ya, {
                            margin: {
                                left: 1
                            },
                            "data-target": G
                        }, r.createElement(_.Zb, {
                            label: Object(s.d)("Live Now", "ChannelHeader"),
                            direction: _.bc.Right
                        }, r.createElement(_.K, {
                            status: _.M.Live,
                            pulse: !0
                        }))), n.onResetOffline = function() {
                            n.resetOfflineTimer = void 0, n.setState({
                                live: !1
                            })
                        }, n.renderAvatarEditButton = function() {
                            return n.props.data && n.props.data.user && n.props.data.user.id && n.props.data.user.login && n.isChannelEditor() ? r.createElement(_.Fb, {
                                className: z,
                                background: _.r.Overlay,
                                position: _.kb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                fullHeight: !0,
                                fullWidth: !0,
                                display: _.X.InlineFlex,
                                alignItems: _.f.Center,
                                justifyContent: _.Xa.Center
                            }, r.createElement(B, {
                                userID: n.props.data.user.id,
                                login: n.props.data.user.login,
                                displayName: n.props.data.user.displayName || n.props.data.user.login
                            })) : null
                        }, n.toggleChannelBanner = function() {
                            n.setState(function(e) {
                                var t = !e.bannerSlideIn;
                                return t ? {
                                    bannerHidden: !e.bannerHidden,
                                    bannerSlideIn: t
                                } : {
                                    bannerSlideIn: t
                                }
                            })
                        }, n.completedBannerAnimation = function() {
                            n.setState(function(e) {
                                return e.bannerSlideIn ? e : {
                                    bannerHidden: !0
                                }
                            })
                        }, n.onUpdateDebounce = function() {
                            if (n.resizeAnimationFrame && (clearTimeout(n.resizeAnimationFrame), n.resizeAnimationFrame = null), n.channelHeader) {
                                var e = n.channelHeader.querySelector('[data-target="channel-header-left"]');
                                n.updateWidth(n.getWidth(e).width), n.resizeAnimationFrame = setTimeout(n.handleWindowResize, 0)
                            }
                        }, n.handleWindowResize = function() {
                            n.resizeAnimationFrame = null, n.getChannelHeaderSize()
                        }, n.maybeShowBrowserNotificationsUpsell = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return !s.m.get(Y, !1) && Object(f.a)() && Object(k.c)() && s.p.experiments.getAssignment(v.b.BrowserNotificationsUpsell) === H ? [4, g.a.hasPushSubscription()] : [3, 3];
                                        case 1:
                                            return e.sent() ? [3, 3] : (s.m.set(Y, !0), this.props.showBrowserNotificationsUpsellModal(), [4, g.a.userSubscribe(b.a.Channel)]);
                                        case 2:
                                            e.sent(), this.props.closeBrowserNotificationsUpsellModal(), e.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, n.saveChannelHeaderRef = function(e) {
                            return n.channelHeader = e
                        }, n.toggleLiveNotificationsBtnShown = function(e) {
                            n.setState({
                                showLiveNotificationsButton: e
                            })
                        }, n.state = {
                            live: !1,
                            bannerHidden: !0,
                            bannerSlideIn: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.setState({
                            live: this.isLiveGraphQL(this.props)
                        })
                    }, t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onUpdateDebounce), !this.props.data || this.props.data.loading || this.props.data.error || this.getChannelHeaderSize(), this.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props,
                            n = e.pubsub.messages.viewCount,
                            i = t.pubsub.messages.viewCount;
                        e.channelLogin !== t.channelLogin ? (this.clearResetOfflineTimer(), this.setState({
                            live: this.isLiveGraphQL(e),
                            showLiveNotificationsButton: void 0
                        })) : n && n !== i ? (this.clearResetOfflineTimer(), this.resetOfflineTimer = setTimeout(this.onResetOffline, 6e4), this.setState({
                            live: !0
                        })) : this.isLiveGraphQL(e) !== this.isLiveGraphQL(t) && (this.clearResetOfflineTimer(), this.setState({
                            live: this.isLiveGraphQL(e)
                        })), e.data && !e.data.loading && void 0 === this.state.showLiveNotificationsButton && this.setState({
                            showLiveNotificationsButton: this.getFollowingState(e)
                        })
                    }, t.prototype.componentDidUpdate = function() {
                        this.channelHeader && this.updateWidth(this.getWidth(this.channelHeader.querySelector('[data-target="channel-header-left"]')).width), this.onUpdateDebounce(), this.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        this.clearResetOfflineTimer(), this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce)
                    }, t.prototype.updateWidth = function(e) {
                        var t = e !== this.width || this.width !== this.prevWidth;
                        void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (clearTimeout(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
                    }, t.prototype.render = function() {
                        var e, t, n = 0,
                            i = 0,
                            o = 0,
                            l = s.a.defaultAvatarURL;
                        this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos && this.props.data.user.videos.totalCount || 0, i = this.props.data.user.followers && this.props.data.user.followers.totalCount || 0, o = this.props.data.user.follows && this.props.data.user.follows.totalCount || 0, l = this.props.data.user.profileImageURL || s.a.defaultAvatarURL, e = this.props.data.user.displayName, t = this.props.data.user.roles && this.props.data.user.roles.isPartner);
                        var u, p = this.state.live && !this.isActiveTab(W.Channel),
                            m = this.createChannelLinks(n, i, o),
                            h = {
                                "channel-header__user": !0,
                                "channel-header__user--selected": this.isActiveTab(W.Channel)
                            },
                            v = r.createElement(_.Ya, {
                                display: _.X.Flex,
                                flexWrap: _.Ba.NoWrap,
                                alignItems: _.f.Center,
                                flexShrink: 0
                            }, r.createElement(_.Ya, {
                                className: "channel-header__user-avatar channel-header__user-avatar--active",
                                margin: {
                                    right: 1
                                },
                                display: _.X.Flex,
                                flexShrink: 0,
                                alignItems: _.f.Stretch
                            }, r.createElement(_.Ya, {
                                position: _.kb.Relative
                            }, r.createElement(_.q, {
                                size: 36,
                                src: l,
                                alt: e || ""
                            }), this.renderAvatarEditButton())), e ? r.createElement(_.W, {
                                type: _.Wb.H5
                            }, e) : r.createElement(_.Ya, {
                                alignItems: _.f.Center
                            }, r.createElement(_.jb, {
                                lineCount: 1,
                                width: 120
                            })), p && this.ChannelStatusIndicatorElement, t && this.verifiedBadgeElement);
                        u = this.isActiveTab(W.Channel) ? r.createElement("div", {
                            className: "channel-header__banner-toggle",
                            onClick: this.toggleChannelBanner,
                            "data-target": "channel-header__channel-link",
                            "data-a-target": "user-channel-header-item"
                        }, v) : this.props.channelLogin ? r.createElement(_.U, {
                            to: "/" + this.props.channelLogin || "#",
                            "data-target": "channel-header__channel-link",
                            "data-a-target": "user-channel-header-item",
                            hoverUnderlineNone: !0
                        }, v) : v;
                        var g = this.state.bannerHidden ? _.X.HideAccessible : _.X.Block,
                            f = null,
                            k = this.renderSocialButtons();
                        return this.isActiveTab(W.Channel) && (f = r.createElement(_.Ya, {
                            display: g
                        }, r.createElement(L, {
                            channelLogin: this.props.channelLogin,
                            canEdit: this.isChannelEditor(),
                            collapsed: !this.state.bannerSlideIn,
                            onTransitionEnd: this.completedBannerAnimation
                        }))), r.createElement(_.Ya, {
                            className: "channel-header",
                            flexShrink: 0
                        }, f, r.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Between,
                            flexWrap: _.Ba.NoWrap,
                            fullHeight: !0,
                            refDelegate: this.saveChannelHeaderRef,
                            margin: {
                                x: 3
                            }
                        }, r.createElement(_.Ya, {
                            display: _.X.Flex,
                            alignItems: _.f.Stretch,
                            flexShrink: 0,
                            flexWrap: _.Ba.NoWrap,
                            "data-target": "channel-header-left"
                        }, r.createElement(_.Qa, {
                            className: a(h),
                            padding: {
                                y: .5,
                                right: 2
                            },
                            display: _.X.Flex,
                            flexWrap: _.Ba.NoWrap,
                            alignItems: _.f.Center,
                            flexShrink: 0
                        }, u), this.renderTabs(m), r.createElement(_.Ya, {
                            className: "channel-header__item channel-header__item--no-underline",
                            padding: {
                                x: 1
                            },
                            flexShrink: 0,
                            alignSelf: _.g.Center,
                            "data-target": "channel-header-button"
                        }, r.createElement(c.a, {
                            alwaysMountBalloonContent: !0
                        }, r.createElement(_.A, {
                            icon: _.ub.NavMore,
                            ariaLabel: Object(s.d)("More", "ChannelHeader")
                        }), r.createElement(_.u, {
                            direction: _.v.Bottom,
                            noTail: !0
                        }, r.createElement(_.Ya, {
                            padding: {
                                y: 1
                            }
                        }, this.renderDropdown(m)))))), k), r.createElement(d.a, {
                            onResize: this.onUpdateDebounce
                        }))
                    }, t.prototype.isLiveGraphQL = function(e) {
                        if (e.data && e.data.user) return !!e.data.user.stream && "" !== e.data.user.stream.id
                    }, t.prototype.clearResetOfflineTimer = function() {
                        this.resetOfflineTimer && (clearTimeout(this.resetOfflineTimer), this.resetOfflineTimer = void 0)
                    }, t.prototype.generateUserLink = function(e) {
                        void 0 === e && (e = "");
                        var t = this.props.channelLogin;
                        return t ? "/" + t + "/" + e : "#"
                    }, t.prototype.renderTabs = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            var n = e.count ? r.createElement(_.Ya, {
                                    className: "channel-header__item-count",
                                    display: _.X.Flex,
                                    margin: {
                                        left: .5
                                    }
                                }, r.createElement(_.W, {
                                    type: _.Wb.Span,
                                    fontSize: _.Ca.Size5
                                }, e.count)) : null,
                                i = t.generateUserLink(e.pathSuffix),
                                a = e.label.toLowerCase() + "-channel-header-item";
                            return r.createElement(_.Qa, {
                                key: "channel-header__item--" + e.label,
                                alignItems: _.f.Center,
                                flexShrink: 0
                            }, r.createElement(_.U, {
                                className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : ""),
                                to: i,
                                "data-target": "channel-header-item",
                                "data-a-target": a,
                                "data-test-selector": a,
                                hoverUnderlineNone: !0
                            }, r.createElement(_.Ya, {
                                padding: {
                                    x: 2,
                                    y: .5
                                },
                                display: _.X.Flex
                            }, r.createElement(_.W, {
                                type: _.Wb.Span,
                                fontSize: _.Ca.Size5
                            }, e.label), n)))
                        })
                    }, t.prototype.renderDropdown = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            var n = e.count ? r.createElement(_.Ya, {
                                    className: "channel-header__item-count",
                                    display: _.X.Flex,
                                    margin: {
                                        left: .5
                                    }
                                }, r.createElement(_.W, {
                                    type: _.Wb.Span
                                }, e.count)) : null,
                                i = t.generateUserLink(e.pathSuffix);
                            return r.createElement(_.Ya, {
                                key: "channel-header__dropdown-item--" + e.label,
                                "data-target": "channel-header-dropdown-item"
                            }, r.createElement(_.Va, {
                                linkTo: i,
                                disabled: "#" === i
                            }, r.createElement(_.Ya, {
                                className: "channel-header__dropdown-hover-target",
                                padding: {
                                    y: .5,
                                    x: 1
                                },
                                display: _.X.Flex
                            }, r.createElement(_.W, {
                                type: _.Wb.Span
                            }, e.label), n)))
                        })
                    }, t.prototype.createChannelLinks = function(e, t, n) {
                        var i = [{
                            label: Object(s.d)("Videos", "ChannelHeader"),
                            count: Object(s.f)(e),
                            pathSuffix: Object(R.b)() ? "videos" : "videos/all",
                            isSelected: this.isActiveTab(W.Videos)
                        }];
                        return Object(R.b)() || Object(R.a)() || (i = i.concat([{
                            label: Object(s.d)("Clips", "ChannelHeader"),
                            pathSuffix: "clips",
                            isSelected: this.isActiveTab(W.Clips)
                        }, {
                            label: Object(s.d)("Collections", "ChannelHeader"),
                            pathSuffix: "collections",
                            isSelected: this.isActiveTab(W.Collections)
                        }])), i.concat([{
                            label: Object(s.d)("Events", "ChannelHeader"),
                            pathSuffix: "events",
                            isSelected: this.isActiveTab(W.Events)
                        }, {
                            label: Object(s.d)("Followers", "ChannelHeader"),
                            count: Object(s.f)(t),
                            pathSuffix: "followers",
                            isSelected: this.isActiveTab(W.Followers)
                        }, {
                            label: Object(s.d)("Following", "ChannelHeader"),
                            count: Object(s.f)(n),
                            pathSuffix: "following",
                            isSelected: this.isActiveTab(W.Following)
                        }])
                    }, t.prototype.isActiveTab = function(e) {
                        return W[this.props.currentPage] === W[e]
                    }, t.prototype.isChannelEditor = function() {
                        return !!(this.props.data && this.props.data.currentUser && this.props.data.user && this.props.data.currentUser.roles && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin))
                    }, t.prototype.getChannelHeaderSize = function() {
                        if (this.channelHeader) {
                            var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                                t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                                n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                                i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                            if (n.length) {
                                for (var a = 0; a < n.length; a++) {
                                    var r = n[a];
                                    r.classList.contains("channel-header__item--hide") && (r.classList.remove("channel-header__item--hide"), i[a].classList.add("channel-header__item--hide"))
                                }
                                var o = this.getWidth(this.channelHeader).width,
                                    s = this.getWidth(e).width + this.getWidth(t).width + 20 - o,
                                    l = [];
                                if (s > 0) {
                                    var d = function(e) {
                                            var t = n[e];
                                            if (!t.classList.contains("channel-header__item--hide")) {
                                                var a = c.getWidth(t);
                                                if (l.push(function() {
                                                        t.classList.add("channel-header__item--hide"), i[e].classList.remove("channel-header__item--hide")
                                                    }), (s -= a.width) <= 0) return "break"
                                            }
                                        },
                                        c = this;
                                    for (a = n.length - 1; a >= 0; a--) {
                                        if ("break" === d(a)) break
                                    }
                                }
                                l.forEach(function(e) {
                                    return e()
                                });
                                var u = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                                if (u) {
                                    var p = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].channel-header__item--hide').length;
                                    u.classList.toggle("channel-header__item--hide", p)
                                }
                            }
                        }
                    }, t.prototype.getWidth = function(e) {
                        return e ? {
                            width: e.clientWidth
                        } : {
                            width: 0
                        }
                    }, t.prototype.reportInteractive = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderSocialButtons = function() {
                        var e = this.getFollowingState(),
                            t = this.props.data && this.props.data.user && this.props.data.user.displayName || void 0,
                            n = null,
                            i = P.SocialButtonsDefault;
                        if (Object(x.c)()) {
                            var o = a("channel-header__follow-btn", {
                                    "channel-header__follow-btn--following": !!this.state.showLiveNotificationsButton
                                }),
                                s = a("channel-header__notification-toggle-container", {
                                    "channel-header__notification-toggle-container--visible": !!this.state.showLiveNotificationsButton
                                });
                            i = P.SocialButtonsVariantB, n = r.createElement(r.Fragment, null, r.createElement(_.Ya, {
                                className: "channel-header__follow-btn-container",
                                display: _.X.Flex,
                                overflow: _.db.Hidden,
                                alignItems: _.f.Center,
                                padding: {
                                    x: 1
                                },
                                fullHeight: !0
                            }, r.createElement(_.Ya, {
                                display: _.X.Flex,
                                justifyContent: _.Xa.Center,
                                flexDirection: _.Aa.Column,
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(_.Ya, {
                                display: _.X.InlineFlex,
                                justifyContent: _.Xa.Center
                            }, r.createElement("div", {
                                className: o
                            }, r.createElement(D.a, {
                                updateContainerWidth: this.onUpdateDebounce,
                                channelLogin: this.props.channelLogin,
                                onFollow: this.maybeShowBrowserNotificationsUpsell,
                                followUIType: D.b.IconAndText,
                                unfollowUIType: D.b.IconOnly,
                                onToggleAnimationComplete: this.toggleLiveNotificationsBtnShown,
                                channelName: t,
                                hideDropdownWhenFollowing: !0,
                                fullWidthButton: !0,
                                hollowIcons: !0,
                                animatedButton: !0,
                                useContextualModals: !0
                            })))), r.createElement("div", {
                                className: s
                            }, r.createElement(A.a, {
                                channelLogin: this.props.channelLogin,
                                toggleType: A.b.Button,
                                tabIndex: this.state.showLiveNotificationsButton ? 0 : -1,
                                followData: this.getFollowData(),
                                showTooltips: !0
                            }))), r.createElement(_.Ya, null, r.createElement(j.a, {
                                updateContainerWidth: this.onUpdateDebounce,
                                channelLogin: this.props.channelLogin,
                                hideEsportsSubscription: this.props.hideEsportsSubscription,
                                subscribedButtonType: _.F.Default,
                                unsubscribedButtonType: e ? _.F.Default : _.F.Hollow,
                                forceIcon: !0
                            })))
                        } else(this.props.channelIsHosting || Object(x.e)()) && (i = P.SocialButtonsDefault, n = r.createElement(r.Fragment, null, r.createElement(_.Ya, {
                            display: _.X.Flex,
                            alignItems: _.f.Stretch,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(D.a, {
                            updateContainerWidth: this.onUpdateDebounce,
                            channelLogin: this.props.channelLogin,
                            onFollow: this.maybeShowBrowserNotificationsUpsell,
                            followUIType: D.b.IconAndText,
                            unfollowUIType: D.b.IconOnly,
                            channelName: t,
                            useContextualModals: !0
                        })), r.createElement(_.Ya, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(j.a, {
                            updateContainerWidth: this.onUpdateDebounce,
                            channelLogin: this.props.channelLogin,
                            hideEsportsSubscription: this.props.hideEsportsSubscription
                        }))));
                        return r.createElement(_.Ya, {
                            display: _.X.Flex,
                            flexWrap: _.Ba.NoWrap,
                            flexShrink: 0,
                            alignItems: _.f.Center,
                            className: "channel-header__right",
                            "data-test-selector": i,
                            "data-target": "channel-header-right"
                        }, n)
                    }, t.prototype.getFollowingState = function(e) {
                        return void 0 === e && (e = this.props), !!(e.data && e.data.user && e.data.user.self && e.data.user.self.follower) && null !== e.data.user.self.follower.disableNotifications
                    }, t.prototype.getFollowData = function() {
                        if (this.props.data && this.props.data.user && this.props.data.user.id) return this.props.data.user
                    }, t
                }(r.Component),
                q = Object(o.compose)(Object(u.a)(U, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(p.a)([{
                    topic: function(e) {
                        return e.channelLogin ? Object(h.K)(e.channelLogin) : ""
                    },
                    skip: function(e) {
                        return !e.channelLogin || !e.firstPageLoaded
                    },
                    mapMessageTypesToProps: (F = {}, F[m.PubsubMessageType.ViewCount] = "viewCount", F)
                }]), Object(M.b)("ChannelHeader"))(X)
        },
        m493: function(e, t, n) {},
        mSxK: function(e, t, n) {
            "use strict";
            var i = n("km1c"),
                a = n("/MKj"),
                r = n("fvjX"),
                o = n("aCAx"),
                s = n("wxwP");
            var l = Object(a.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    showBrowserNotificationsUpsellModal: function() {
                        return Object(o.d)(s.a, {})
                    },
                    closeBrowserNotificationsUpsellModal: o.c
                }, e)
            })(i.c);
            n.d(t, "d", function() {
                return i.d
            }), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            }), n.d(t, "c", function() {
                return l
            })
        },
        oe5X: function(e, t, n) {
            "use strict";
            var i = n("XmgI"),
                a = n("RcPG"),
                r = n("0FG4"),
                o = n("i6WW"),
                s = n("gTu3"),
                l = n("6j5V"),
                d = /^(['"*([{</]*)@((?:[^\u0000-\u007F]|[\w-])+)/;

            function c(e, t) {
                if (!t) return !1;
                var n = t.displayName,
                    i = t.login;
                return e === n || e.toLowerCase() === i
            }

            function u(e, t) {
                void 0 === t && (t = {});
                var n = t.cheers,
                    u = t.emotes,
                    v = t.links,
                    g = t.mentions,
                    f = m(e),
                    k = "",
                    b = 0;
                return p(f.reduce(function(e, t, p) {
                    if (h(t)) return k = "", e;
                    if (0 === k.length && (b = p), k += t, p !== f.length - 1 && !h(f[p + 1])) return e;
                    var m = u && Object(r.c)(k, b, u);
                    if (m) return e.concat(m);
                    var y = n && Object(i.e)(k, n);
                    if (y) return e.concat(y);
                    var S = v && Object(o.a)(k, v);
                    if (S) return e.concat(S);
                    var C = g && function(e, t) {
                        var n = e.match(d);
                        if (!n) return c(e, t.sessionUser) ? [{
                            type: a.a.CurrentUserHighlight,
                            content: e
                        }] : null;
                        var i = [],
                            r = n[1],
                            o = n[2],
                            u = e.slice(n[0].length);
                        r.length && i.push(Object(l.a)(r));
                        var p = s.a.Default;
                        return c(o, t.sessionUser) ? p = s.a.Recipient : t.sessionUser && t.sessionUser.login === t.senderLogin && (p = s.a.Sender), i.push({
                            type: a.a.Mention,
                            content: {
                                recipient: o,
                                currentUserMentionRelation: p
                            }
                        }), u.length && i.push(Object(l.a)(u)), i
                    }(k, g);
                    return C ? e.concat([C]) : e.concat(Object(l.a)(k))
                }, []))
            }

            function p(e) {
                return e.reduce(function(e, t, n) {
                    return 0 === n ? [].concat.call(e, t) : [].concat.call(e, Object(l.a)(" "), t)
                }, []).reduce(function(e, t, n) {
                    if (0 === n) return e.concat(t);
                    var i = e[e.length - 1];
                    return t.type === a.a.Text && i.type === a.a.Text ? (i.content = "" + i.content + t.content, e) : e.concat(t)
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
        p52R: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
                }(i || (i = {}))
        },
        r62z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "d", function() {
                return u
            });
            var i = n("+GjP"),
                a = "https://www.facebook.com/sharer/sharer.php",
                r = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(i.e)(a, {
                    u: e
                })
            }

            function d(e, t) {
                return Object(i.e)(r, {
                    url: e,
                    text: t
                })
            }

            function c(e, t) {
                return Object(i.e)(o, {
                    url: e,
                    title: t
                })
            }

            function u(e) {
                return Object(i.e)(s, {
                    url: e
                })
            }
        },
        rO6o: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                a = n("/7QA"),
                r = n("Ue10"),
                o = (n("z3xZ"), function(e) {
                    var t = Object(a.c)(e.date, {
                            month: "short"
                        }),
                        n = Object(a.c)(e.date, {
                            day: "numeric"
                        });
                    return i.createElement(r.Fb, {
                        background: r.r.Base,
                        elevation: 2,
                        display: r.X.Flex,
                        flexDirection: r.Aa.Column,
                        className: "event-calendar-date",
                        margin: {
                            top: .5,
                            left: .5
                        },
                        position: r.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        flexWrap: r.Ba.NoWrap
                    }, i.createElement(r.Fb, {
                        className: "event-calendar-date__month",
                        display: r.X.Flex,
                        justifyContent: r.Xa.Center,
                        background: r.r.AccentAlt2
                    }, i.createElement(r.W, {
                        fontSize: r.Ca.Size6,
                        transform: r.Vb.Uppercase,
                        color: r.O.Overlay
                    }, t)), i.createElement(r.Ya, {
                        display: r.X.Flex,
                        justifyContent: r.Xa.Center
                    }, i.createElement(r.W, {
                        fontSize: r.Ca.Size3,
                        color: r.O.Base
                    }, n)))
                });
            n.d(t, "a", function() {
                return o
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
        tIid: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var i = n("/7QA"),
                a = "esport_insider_pass_whitelist",
                r = "esports_room_cheering_whitelist";

            function o(e, t, n) {
                return void 0 === n && (n = !1), l(a, e, t, n)
            }

            function s(e, t) {
                return l(r, e, t)
            }

            function l(e, t, n, a) {
                void 0 === a && (a = !1);
                var r = i.b.get(e, []),
                    o = n && n.roles && n.roles.isStaff || a;
                return r.includes(t) || r.includes(t + "-staff") && o
            }
        },
        "ug+5": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            });
            var i, a, r = n("/7QA"),
                o = n("2xye");

            function s(e) {
                var t = {
                    share_medium: e.shareMedium,
                    event_id: e.eventID,
                    channel: e.channelLogin,
                    channel_id: e.channelID,
                    location: e.location
                };
                return r.p.tracking.track(o.SpadeEventType.EventShare, t)
            }

            function l(e) {
                var t = {
                    action: e.action,
                    channel: e.channelLogin,
                    channel_id: e.channelID,
                    event_id: e.eventID,
                    location: e.location
                };
                return r.p.tracking.track(o.SpadeEventType.EventFollowing, t)
            }! function(e) {
                e.ChannelEvents = "channel_events", e.DashboardEvents = "dashboard_events", e.EventDetails = "event_details", e.EventManagment = "event_managment", e.EventSidebar = "event_sidebar"
            }(i || (i = {})),
            function(e) {
                e.RemindMeOpen = "remind_me_open_modal", e.EmailReminderOn = "email_reminder_on", e.EmailReminderOff = "email_reminder_off"
            }(a || (a = {}))
        },
        vDRX: function(e, t, n) {},
        wSZZ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Events_UnfollowEvent"
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
                                    value: "UnfollowEventInput"
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
                                value: "unfollowEvent"
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
                                        value: "event"
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
                                                    value: "EventCollection"
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
                                                                value: "isFollowing"
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
                                                    value: "EventLeaf"
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
                                                                value: "isFollowing"
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
                    end: 199
                }
            };
            n.loc.source = {
                body: "mutation Events_UnfollowEvent($input: UnfollowEventInput!) {\nunfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return c
            });
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("Jxh/"),
                l = n("r62z"),
                d = n("Ue10");
            n("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(i || (i = {}));
            var c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderLink = function() {
                        var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                        return n.props.type === i.Download ? r.createElement("a", a.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(d.kc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? r.createElement("a", a.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(d.kc)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(d.kc)(n.props)), n.renderIcon())
                    }, n.onShareClickHandler = function() {
                        n.props.onShareClick && n.props.onShareClick(n.props.type)
                    }, n.clearIsCopiedStatus = function() {
                        n.setState({
                            isCopied: !1
                        })
                    }, n.getUrl = function() {
                        return n.props.url || window.location.href
                    }, n.copyPageUrl = function(e) {
                        e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(s.a)(n.getUrl()), n.setState({
                            isCopied: !0
                        })
                    }, n.renderIcon = function() {
                        var e = n.getAssetFromType();
                        return r.createElement(d.Ya, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            justifyContent: d.Xa.Center
                        }, r.createElement(d.tb, {
                            asset: e
                        }))
                    }, n.isLink = function() {
                        return n.props.type !== i.Copy
                    }, n.getTooltipFromType = function() {
                        switch (n.props.type) {
                            case i.Twitter:
                                return "Twitter";
                            case i.Reddit:
                                return "Reddit";
                            case i.Facebook:
                                return "Facebook";
                            case i.VKontakte:
                                return "VKontakte";
                            case i.Download:
                                return Object(o.d)("Download", "SocialButton");
                            case i.Copy:
                                return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, n.getAssetFromType = function() {
                        switch (n.props.type) {
                            case i.Twitter:
                                return d.ub.Twitter;
                            case i.Facebook:
                                return d.ub.Facebook;
                            case i.VKontakte:
                                return d.ub.VKontakte;
                            case i.Reddit:
                                return d.ub.Reddit;
                            case i.Download:
                                return d.ub.Download;
                            case i.Copy:
                            default:
                                return d.ub.Copy
                        }
                    }, n.addSocialClassModifier = function(e) {
                        switch (n.props.type) {
                            case i.Twitter:
                                return e + "--twitter";
                            case i.Reddit:
                                return e + "--reddit";
                            case i.Facebook:
                                return e + "--facebook";
                            case i.VKontakte:
                                return e + "--vkontakte";
                            case i.Download:
                                return e + "--download";
                            case i.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, n.getLinkTarget = function() {
                        var e = n.props,
                            t = e.text,
                            a = e.type,
                            r = n.getUrl(),
                            o = t || "";
                        switch (a) {
                            case i.Reddit:
                                return Object(l.b)(r, o);
                            case i.VKontakte:
                                return Object(l.d)(r);
                            case i.Facebook:
                                return Object(l.a)(r);
                            case i.Twitter:
                                return Object(l.c)(r, o);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(d.Ya, {
                        className: "social-button"
                    }, r.createElement(d.Zb, {
                        label: this.getTooltipFromType(),
                        direction: d.bc.Bottom
                    }, this.renderLink()))
                }, t
            }(r.Component)
        },
        wxwP: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("CFw/"),
                d = n.n(l),
                c = n("aCAx"),
                u = n("Ue10"),
                p = (n("9RDd"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", {
                            onClick: this.props.closeModal
                        }, a.createElement(u.i, {
                            type: u.n.FadeIn,
                            duration: u.k.Long,
                            timing: u.m.EaseInOut,
                            enabled: !0
                        }, a.createElement(u.Fb, {
                            className: "browser-push-notifications-upsell",
                            alignItems: u.f.Center,
                            justifyContent: u.Xa.Center,
                            position: u.kb.Fixed,
                            display: u.X.Flex,
                            background: u.r.Overlay,
                            fullHeight: !0,
                            fullWidth: !0,
                            attachTop: !0,
                            attachLeft: !0
                        }, a.createElement(u.Ya, {
                            className: "browser-push-notifications-upsell__container",
                            display: u.X.Flex,
                            textAlign: u.Sb.Center,
                            padding: {
                                x: 1
                            },
                            position: u.kb.Relative
                        }, a.createElement(u.i, {
                            type: u.n.SlideInBottom,
                            duration: u.k.Long,
                            timing: u.m.EaseInOut,
                            enabled: !0
                        }, a.createElement(u.W, {
                            type: u.Wb.H3,
                            fontSize: u.Ca.Size3,
                            lineHeight: u.Za.Body
                        }, Object(s.d)("Don't miss out when your favorite streamers go live!", "BrowserNotificationsUpsellModal")), a.createElement(u.Ya, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(u.W, {
                            type: u.Wb.H4,
                            fontSize: u.Ca.Size4,
                            color: u.O.OverlayAlt,
                            lineHeight: u.Za.Body
                        }, Object(s.d)("Turn on Browser Notifications to get updates even when your browser window is minimized", "BrowserNotificationsUpsellModal")))), a.createElement(u.Ya, {
                            className: "browser-push-notifications-upsell__arrow",
                            position: u.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0
                        }, a.createElement(u.i, {
                            type: u.n.SlideInBottom,
                            delay: u.j.Short,
                            duration: u.k.Long,
                            timing: u.m.EaseInOut,
                            enabled: !0
                        }, a.createElement("img", {
                            src: d.a
                        })))))))
                    }, t
                }(a.Component));
            var m = Object(r.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    closeModal: c.c
                }, e)
            })(p);
            n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return m
            })
        },
        y2dA: function(e, t, n) {},
        y4Ne: function(e, t, n) {},
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = "0h0m1s";

            function a(e) {
                if (0 === e) return i;
                if (!e || e < 0) return "";
                var t = e,
                    n = Math.floor(t / 3600);
                return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        },
        "z+dA": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelPage_SubscribeButton_User"
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
                                                value: "emoteSetID"
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
                                                        value: "purchasedWithPrime"
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
                                                        value: "endsAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isDNRd"
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "pendingSubscription"
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
                                                                value: "startsAt"
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
                                                                value: "type"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "gift"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isGift"
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
                    end: 355
                }
            };
            n.loc.source = {
                body: "query ChannelPage_SubscribeButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nsubscriptionProducts {\nid\nemoteSetID\nname\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nendsAt\nisDNRd\nplatform\npendingSubscription {\nprice\nstartsAt\ntier\ntype\n}\ngift {\nisGift\n}\n}\n}\n}\ncurrentUser {\nid\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        z3xZ: function(e, t, n) {},
        z8L7: function(e, t, n) {},
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
        zxEZ: function(e, t, n) {
            "use strict";
            var i = n("mSxK");
            n.d(t, "a", function() {
                return i.c
            }), n.d(t, "b", function() {
                return i.d
            })
        }
    }
]);