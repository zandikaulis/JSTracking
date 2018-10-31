(window.webpackJsonp = window.webpackJsonp || []).push([
    [67], {
        "+U0Y": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED";

            function i(e) {
                return {
                    type: a,
                    languagePreferences: e
                }
            }
        },
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return d
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = i.o.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                l = function(e) {
                    i.o.trackItemSectionClick({
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
                c = function(e) {
                    i.o.trackItemSectionClick({
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
                d = function(e) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, c, d, u = this;
                        return a.__generator(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return m.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return a.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return a.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, i.p.apollo.client.query({
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
                                    return n = m.sent(), l = n.filter(function(e) {
                                        return !!e
                                    }), c = l.map(function() {
                                        return r.TwitchDataType.Game
                                    }), d = l.map(function() {
                                        return null
                                    }), i.o.trackItemSectionLoad({
                                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: l.length,
                                        rendered_item_list: l,
                                        rendered_item_types: c,
                                        rendered_items_viewcounts: d,
                                        location: s()
                                    }), [3, 3];
                                case 2:
                                    return m.sent(), [3, 3];
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
            var a = n("q1tI"),
                i = n("Ue10"),
                r = function() {
                    return a.createElement(i.G, null, a.createElement(i.o, {
                        ratio: i.p.Aspect16x9
                    }, a.createElement(i.gb, null)), a.createElement(i.H, null, a.createElement(i.Xa, {
                        display: i.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(i.Xa, {
                        display: i.X.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, a.createElement(i.gb, {
                        width: 40,
                        height: 56
                    })), a.createElement(i.Xa, {
                        display: i.X.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(i.W, null, a.createElement(i.gb, {
                        width: 150
                    })), a.createElement(i.W, {
                        fontSize: i.Ca.Size7
                    }, a.createElement(i.gb, {
                        width: 100
                    }))))))
                }
        },
        "1mcJ": function(e, t, n) {},
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var a = n("L9xt");
            n.o(a, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return a.PageviewContent
            }), n.o(a, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return a.PageviewLocation
            }), n.o(a, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return a.PageviewMedium
            }), n.o(a, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return a.SpadeEventType
            })
        },
        "3sMy": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
                }(a || (a = {}))
        },
        "5NSO": function(e, t, n) {},
        "5myU": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = 10;

            function i(e, t, n) {
                if (void 0 === n && (n = 1), !t || !e) return -1;
                var i = window.getComputedStyle(document.documentElement).fontSize || a.toString(),
                    r = parseFloat(i) / a;
                return Math.floor(e / (t * r)) * n
            }
        },
        "5xw2": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("HSqT"),
                o = n("+U0Y"),
                s = "languageDirectoryFilters";

            function l(e, t) {
                var n = this;
                return function(r) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, l;
                        return a.__generator(this, function(a) {
                            return n = new Set(d()), t ? n.add(e) : n.delete(e), l = Array.from(n), i.m.set(s, l), r(Object(o.b)(l)), [2]
                        })
                    })
                }
            }

            function c() {
                var e = this;
                return function(t) {
                    return a.__awaiter(e, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            return i.m.set(s, []), t(Object(o.b)([])), [2]
                        })
                    })
                }
            }

            function d() {
                return i.m.get(s, []).filter(function(e) {
                    return r.a.has(e)
                })
            }
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return l
            });
            var a, i, r = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case a.Second:
                        return Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case a.Minute:
                        return Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case a.Hour:
                        return Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case a.Day:
                        return Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case a.Week:
                        return Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case a.Month:
                        return Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case a.Second:
                        return Object(r.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case a.Minute:
                        return Object(r.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case a.Hour:
                        return Object(r.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case a.Day:
                        return Object(r.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case a.Week:
                        return Object(r.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case a.Month:
                        return Object(r.d)("{monthCount}mo", {
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
                        n = a.Hour;
                        break;
                    case i.ClockMS:
                        n = a.Minute
                }
                var l = 2;
                t === i.ClockHMS && (l = 3);
                var d = function(e, t) {
                        void 0 === t && (t = a.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === a.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === a.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === a.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === a.Day ? n : n.days <= 26 || t === a.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== i.Humanized && t !== i.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                    }), t === i.Humanized) return function(e) {
                    return e.months ? o(a.Month, e.months) : e.weeks && e.days ? o(a.Week, e.weeks) + " " + o(a.Day, e.days) : e.weeks ? o(a.Week, e.weeks) : e.days && e.hours ? o(a.Day, e.days) + " " + o(a.Hour, e.hours) : e.days ? o(a.Day, e.days) : e.hours && e.minutes ? o(a.Hour, e.hours) + " " + o(a.Minute, e.minutes) : e.hours ? o(a.Hour, e.hours) : e.minutes && e.seconds ? o(a.Minute, e.minutes) + " " + o(a.Second, e.seconds) : e.minutes ? o(a.Minute, e.minutes) : o(a.Second, e.seconds || 0)
                }(d);
                if (t === i.HumanizedShort) return function(e) {
                    return e.months ? s(a.Month, e.months) : e.weeks && e.days ? "" + s(a.Week, e.weeks) + s(a.Day, e.days) : e.weeks ? s(a.Week, e.weeks) : e.days && e.hours ? "" + s(a.Day, e.days) + s(a.Hour, e.hours) : e.days ? s(a.Day, e.days) : e.hours && e.minutes ? "" + s(a.Hour, e.hours) + s(a.Minute, e.minutes) : e.hours ? s(a.Hour, e.hours) : e.minutes && e.seconds ? "" + s(a.Minute, e.minutes) + s(a.Second, e.seconds) : e.minutes ? s(a.Minute, e.minutes) : s(a.Second, e.seconds || 0)
                }(d);
                var m = ":",
                    p = !1;
                switch (r.p.intl.getLanguageCode()) {
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
                var g = d.seconds || 0,
                    h = d.minutes || 0,
                    f = d.hours || 0;
                switch (t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        var v = (p ? c(f, 2) : f) + m + c(h, 2);
                        return t === i.ClockHMS && (v += m + c(g, 2)), v;
                    case i.ClockMS:
                        return (p ? c(h, 2) : h) + m + c(g, 2)
                }
            }

            function c(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(a || (a = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(i || (i = {}))
        },
        "79jw": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TopTags"
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
                                value: "showTopTagsByCategory"
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
                                value: "categoryName"
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
                                        value: "categoryName"
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
                                            value: "showTopTagsByCategory"
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
                                        value: "tags"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tagType"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "TOP"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "limit"
                                            }
                                        }
                                    }],
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "topTags"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "limit"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "limit"
                                    }
                                }
                            }],
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
                                            value: "showTopTagsByCategory"
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
                    end: 341
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery TopTags($limit: Int! $showTopTagsByCategory: Boolean! $categoryName: String) {\ngame(name: $categoryName) @include(if: $showTopTagsByCategory) {\nid\ntags(tagType: TOP limit: $limit) {\n...tagFragment\n}\n}\ntopTags(limit: $limit) @skip(if: $showTopTagsByCategory) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        "7ALk": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Directory_DirectoryBanner"
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
                                        value: "coverURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "1200"
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
                                        value: "avatarURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "130"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "173"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "viewersCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followersCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "streams"
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
                                                            kind: "Field",
                                                            name: {
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
                                        value: "activeDropCampaigns"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "applicableChannels"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
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
                                        value: "tags"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tagType"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "CONTENT"
                                        }
                                    }],
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
                    end: 481
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery Directory_DirectoryBanner($name: String!) {\ngame(name: $name) {\nid\nname\ndisplayName\ncoverURL(width: 1200 height: 180)\navatarURL(width: 130 height: 173)\nviewersCount\nfollowersCount\nstreams(first: 1) {\nedges {\nnode {\nid\npreviewImageURL(width: 320 height: 180)\n}\n}\n}\nactiveDropCampaigns {\napplicableChannels {\nid\n}\nisEnabled\n}\ntags(tagType: CONTENT) {\n...tagFragment\n}\n}\ncurrentUser {\nid\nroles {\nisSiteAdmin\nisStaff\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        "80G/": function(e, t, n) {},
        "8Ocm": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryHeader_GameID"
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
                body: "query DirectoryHeader_GameID($name: String!) {\ngame(name: $name) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "97MP": function(e, t, n) {},
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("yI6f"),
                o = n("x75U");

            function s() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.trackImpression = function(t) {
                                e.context.trackImpression(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t)
                            }, e.trackClick = function(t, n, a) {
                                "string" != typeof a && (a = void 0), e.context.trackClick(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t, n, a)
                            }, e
                        }
                        return a.__extends(n, t), n.prototype.render = function() {
                            var t = this.context.cardIDtoItemTrackingIDMap && this.props.contentEdge.node && this.context.cardIDtoItemTrackingIDMap[this.props.contentEdge.node.id],
                                n = this.props,
                                o = n.itemPosition,
                                s = n.rowPosition,
                                l = n.shelf,
                                c = Object(r.g)(l.title).rowName,
                                d = {
                                    trackImpression: this.trackImpression,
                                    trackRecFeedbackHideClick: this.context.trackRecFeedbackHideClick,
                                    trackRecFeedbackClickStep: this.context.trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: this.context.trackRecFeedbackClickStepPostSubmit,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: c,
                                        row_position: s
                                    }
                                };
                            return i.createElement(e, a.__assign({}, this.props, d))
                        }, n.contextTypes = o.a, n
                    }(i.Component)
                }
            }
        },
        AZIu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var a, i = n("/7QA"),
                r = n("2xye");

            function o(e) {
                var t = {
                    section: e.section,
                    tag_position: e.tagPosition,
                    item_page: "browse",
                    search_event: e.searchEvent,
                    tag_id: e.tagId,
                    dismiss: e.dismiss
                };
                i.o.track(r.SpadeEventType.BrowseFilter, t)
            }! function(e) {
                e.Categories = "browse_categories", e.LiveChannels = "browse_livechannels", e.IncategoryChannels = "browse_incategory_channels"
            }(a || (a = {}))
        },
        B3R5: function(e, t, n) {},
        BEfv: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "AnimatedTag_TagData"
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
                                value: "contentTag"
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
                    end: 135
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery AnimatedTag_TagData($id: ID!) {\ncontentTag(id: $id) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        BIFG: function(e, t, n) {},
        Bk78: function(e, t, n) {
            "use strict";

            function a(e) {
                var t = Date.now() - e;
                return function() {
                    var n = Date.now();
                    return t + e <= n ? (t = n, "network-only") : "cache-first"
                }
            }
            n.d(t, "a", function() {
                return a
            })
        },
        C29h: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("9C/b"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("N3I0"),
                d = n("8/mp"),
                u = n("f00E"),
                m = n("H/lO"),
                p = n("NZDK"),
                g = n("yR8l"),
                h = n("DMoW"),
                f = n("GIun"),
                v = n("Ue10"),
                k = function(e) {
                    var t, n = e.onClick,
                        a = e.tag;
                    n && (t = function() {
                        return n(a)
                    });
                    var i = "localizedDescription" in e.tag ? e.tag.localizedDescription : void 0;
                    return r.createElement(f.a, null, r.createElement(v.Ua, {
                        onClick: t
                    }, r.createElement(v.Xa, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(v.W, {
                        title: i
                    }, a.localizedName))))
                },
                b = n("y5I9"),
                y = n("Ryvb");
            ! function(e) {
                e.SuggestedTags = "suggested-tags"
            }(a || (a = {}));
            var T, S, C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            filteredTopTags: t.props.data.game && t.props.data.game.tags && t.props.data.game.tags.filter(function(e) {
                                return !e.isAutomated
                            }).filter(function(e) {
                                return !t.props.selectedTagIDs.includes(e.id)
                            }).slice(0, 7) || []
                        }, t.renderTags = function() {
                            if (!t.props.data.game || !t.props.data.game.tags || !t.state.filteredTopTags) return null;
                            var e;
                            return e = t.state.filteredTopTags.map(t.renderSuggestedTag), r.createElement(v.Xa, {
                                padding: {
                                    bottom: 1
                                }
                            }, e)
                        }, t.renderSuggestedTag = function(e) {
                            return r.createElement(k, {
                                "data-test-selector": a.SuggestedTags,
                                key: e.id,
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                },
                                tag: e
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.data.game,
                            n = e.data.game;
                        if (Object(b.a)(this.props.selectedTagIDs, e.selectedTagIDs) || Object(b.b)(t && t.tags, n && n.tags)) {
                            var a = n && n.tags && n.tags.filter(function(e) {
                                return !e.isAutomated
                            }).filter(function(t) {
                                return !e.selectedTagIDs.includes(t.id)
                            }).slice(0, 7) || [];
                            this.setState({
                                filteredTopTags: a
                            })
                        }
                    }, t.prototype.render = function() {
                        return this.props.data.loading || this.props.data.error ? null : this.props.data.game && this.props.data.game.tags && 0 !== this.props.data.game.tags.length && this.state.filteredTopTags && 0 !== this.state.filteredTopTags.length ? r.createElement(v.Xa, null, r.createElement(v.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.W, {
                            bold: !0
                        }, Object(l.d)("Suggestions", "TagSuggestions"))), this.renderTags(), r.createElement(v.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.W, {
                            bold: !0
                        }, Object(l.d)("All Tags", "AllTagsTitle")))) : null
                    }, t
                }(r.Component),
                w = Object(g.a)(y, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName,
                                tagType: h.Q.TOP,
                                limit: 50
                            }
                        }
                    }
                })(C),
                N = n("79jw"),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderTags = function() {
                            return t.props.categoryName ? t.props.data.game && t.props.data.game.tags && 0 !== t.props.data.game.tags.length ? t.props.data.game.tags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null : t.props.data.topTags && 0 !== t.props.data.topTags.length ? t.props.data.topTags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null
                        }, t.renderTag = function(e) {
                            return r.createElement(f.a, {
                                key: e.id
                            }, r.createElement(v.Ua, {
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                }
                            }, r.createElement(v.Xa, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, e.localizedName || e.tagName)))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.error ? null : this.props.data.loading ? r.createElement(v.Xa, {
                            display: v.X.Flex,
                            justifyContent: v.Wa.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.Za, null)) : r.createElement(v.Xa, null, this.renderTags())
                    }, t
                }(r.Component),
                _ = Object(s.compose)(Object(g.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                categoryName: e.categoryName,
                                limit: e.tagsLimit || 5,
                                showTopTagsByCategory: !!e.categoryName
                            }
                        }
                    }
                }))(I),
                D = n("sLmD"),
                E = n("AZIu"),
                x = n("4HIT");
            n("97MP");
            ! function(e) {
                e[e.TagAll = 0] = "TagAll", e[e.TagAllMinusAutomation = 1] = "TagAllMinusAutomation", e[e.TagCategory = 2] = "TagCategory", e[e.StreamTag = 3] = "StreamTag"
            }(T || (T = {})),
            function(e) {
                e.SearchContent = "tag-search-search-content", e.SearchDropdown = "search-dropdown-selector"
            }(S || (S = {}));
            var F = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isOpen: !1,
                            searching: !1,
                            searchTerm: ""
                        }, n.languageCode = Object(D.a)(), n.renderSearchContent = function() {
                            var e = null;
                            return e = n.props.type === T.StreamTag ? n.renderStreamTagResults() : n.renderTagResults(), r.createElement(d.b, {
                                className: "tag-search__scrollable-area",
                                suppressScrollX: !0
                            }, r.createElement(v.Xa, {
                                "data-test-selector": S.SearchContent
                            }, n.renderSuggestedTags(), e))
                        }, n.renderTagSearchResult = function(e) {
                            var t = Object(D.b)(e, n.props.type === T.TagAllMinusAutomation),
                                a = "tag_scope" in e ? e.tag_scope : void 0;
                            return r.createElement(k, {
                                key: t.id,
                                onClick: function() {
                                    return n.onTagResultSelected(t, a)
                                },
                                tag: t
                            })
                        }, n.renderStreamTagResults = function() {
                            return n.props.type === T.StreamTag && n.state.isOpen ? "" === n.state.searchTerm ? r.createElement(_, {
                                categoryName: n.props.categoryName,
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.streamTags && n.state.searchResults.streamTags.hits.length ? n.state.searchResults.streamTags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.renderTagResults = function() {
                            return n.state.isOpen ? n.props.type === T.TagAll && "" === n.state.searchTerm ? r.createElement(_, {
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.tags && n.state.searchResults.tags.hits.length ? n.state.searchResults.tags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.setTagSearchRef = function(e) {
                            n.tagSearch = e
                        }, n.onTagResultSelected = function(e, t) {
                            if (n.toggleTagSearch(!1), n.clearSearchTerm(), n.props.type === T.TagCategory && "SCOPE_ALL" === t ? l.p.history.push(x.a.Popular) : n.props.type === T.TagAll && "SCOPE_CATEGORY" === t && l.p.history.push(x.a.Games), n.props.onTagClick && (n.props.onTagClick(e), n.props.section && n.props.numSelectedTags)) {
                                var a = {
                                    section: n.props.section,
                                    tagPosition: n.props.numSelectedTags,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(E.b)(a)
                            }
                        }, n.onInputChange = function(e) {
                            n.props.onInputChange && n.props.onInputChange(e), clearTimeout(n.inputTimeout), n.toggleTagSearch(!0), n.setState({
                                searchTerm: e,
                                searching: !0
                            }, function() {
                                (n.props.type !== T.TagAll && n.props.type !== T.StreamTag || n.props.type === T.TagAll && "" !== n.state.searchTerm || n.props.type === T.StreamTag && "" !== n.state.searchTerm) && (n.inputTimeout = setTimeout(function() {
                                    n.search(n.state.searchTerm)
                                }, 200))
                            })
                        }, n.onFocusInput = function() {
                            "" === n.state.searchTerm ? n.onInputChange("") : n.toggleTagSearch(!0)
                        }, n.onSearchClose = function() {
                            n.toggleTagSearch(!1)
                        }, n.toggleTagSearch = function(e) {
                            n.tagSearch && n.tagSearch.toggle(e), n.setState({
                                isOpen: e
                            })
                        }, n.clearSearchTerm = function() {
                            n.tagSearch && n.tagSearch.setValue(""), n.setState({
                                searchTerm: "",
                                searching: !1
                            })
                        }, n.searchClient = new p.a({
                            appId: l.a.algoliaApplicationID,
                            apiKey: l.a.algoliaAPIKey,
                            apolloClient: l.p.apollo.client,
                            logger: l.k,
                            config: l.a,
                            stats: l.p.stats
                        }), n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(c.a, {
                            autoFocus: this.props.autoFocus,
                            "data-test-selector": S.SearchDropdown,
                            inline: this.props.inline,
                            inputSize: this.props.inputSize,
                            onChange: this.onInputChange,
                            onFocusInput: this.onFocusInput,
                            onClose: this.onSearchClose,
                            placeholder: Object(l.d)("Search Tags", "TagSearch"),
                            ref: this.setTagSearchRef
                        }, this.renderSearchContent())
                    }, t.prototype.renderLoading = function() {
                        return r.createElement(v.Xa, {
                            display: v.X.Flex,
                            justifyContent: v.Wa.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.Za, {
                            delay: 0
                        }))
                    }, t.prototype.renderNoResults = function() {
                        return this.state.searching ? null : r.createElement(v.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(l.d)("No results found", "TagSearch"))
                    }, t.prototype.renderSuggestedTags = function() {
                        if (this.props.type !== T.TagAllMinusAutomation || "" !== this.state.searchTerm) return null;
                        var e = this.props.selectedTags && this.props.selectedTags.map(function(e) {
                            return e.id
                        }) || [];
                        return r.createElement(v.Xa, null, r.createElement(w, {
                            gameName: this.props.categoryName,
                            onAddTag: this.onTagResultSelected,
                            selectedTagIDs: e
                        }))
                    }, t.prototype.search = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, a;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return e = e || "", t = {
                                            hitsPerPage: 100,
                                            restrictSearchableAttributes: ["localizations." + this.languageCode, "tag_name"]
                                        }, n = m.a.Tags, this.props.type === T.TagAllMinusAutomation ? (t.facetFilters = '["automated:false", "tag_scope:SCOPE_ALL"]', this.props.showAllDashboardTags && (t.hitsPerPage = 300)) : this.props.type === T.TagAll ? this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:SCOPE_ALL" : t.facetFilters = '[["tag_scope:SCOPE_ALL", "tag_scope:SCOPE_CATEGORY"]]' : this.props.type === T.TagCategory ? "" === e || this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:SCOPE_CATEGORY" : t.facetFilters = '[["tag_scope:SCOPE_ALL", "tag_scope:SCOPE_CATEGORY"]]' : this.props.type === T.StreamTag && (n = m.a.StreamTags, t.facetFilters = "category_id:" + this.props.categoryID), [4, this.searchClient.queryForType(n, e, u.a(), t)];
                                    case 1:
                                        return a = i.sent(), this.setState({
                                            searchResults: a,
                                            searching: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(r.Component),
                O = Object(s.compose)(o.a)(F);
            n.d(t, "b", function() {
                return T
            }), n.d(t, !1, function() {
                return S
            }), n.d(t, !1, function() {
                return F
            }), n.d(t, "a", function() {
                return O
            })
        },
        Fj9y: function(e, t, n) {},
        FpZF: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryPage_InternationalSection"
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
                    }, {
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
                                value: "languages"
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
                                        value: "String"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "streams"
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
                                            value: "languages"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "languages"
                                            }
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
                                                        value: "browsePagePopularStreamsWithTagsEdge"
                                                    },
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
                    end: 362
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/directory-popular/queries/popular-streams-edge.gql"\nquery DirectoryPage_InternationalSection($name: String! $limit: Int $languages: [String!] $cursor: Cursor) {\ngame(name: $name) {\nid\ndisplayName\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\n...browsePagePopularStreamsWithTagsEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("hKEm").definitions)), e.exports = a
        },
        GFmA: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("5zf8"),
                s = n("Ue10"),
                l = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return i.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, i.createElement(s.Ua, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, i.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            padding: .5
                        }, i.createElement(s.Cb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.cb.Hidden,
                            position: s.hb.Relative
                        }, i.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, i.createElement(s.S, a.__assign({}, e))), i.createElement(s.Cb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            position: s.hb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, i.createElement(s.qb, {
                            asset: s.rb.Play,
                            type: s.sb.Inherit
                        }))), i.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, i.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, i.createElement(s.W, null, this.props.gameChange.label)), i.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, i.createElement(s.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(i.Component)),
                c = n("0INk"),
                d = n("8/mp"),
                u = n("eJ65"),
                m = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(c.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return i.createElement(s.Xa, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.hb.Relative,
                            margin: {
                                top: .5
                            }
                        }, i.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, i.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.rb.ViewerList
                        }, i.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row
                        }, i.createElement(s.W, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), i.createElement(s.Xa, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(s.eb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), i.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, i.createElement(s.Xa, {
                            overflow: s.cb.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap
                        }, i.createElement(s.Xa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, i.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), i.createElement(s.Xa, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Ba.NoWrap
                        }, i.createElement(d.b, null, i.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return i.createElement(l, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(i.Component)),
                p = n("kduP"),
                g = n("2xye"),
                h = function(e) {
                    return i.createElement(s.Xa, null, i.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, a) {
                        return i.createElement(s.Pa, {
                            key: n
                        }, i.createElement(s.U, {
                            to: {
                                pathname: Object(p.c)(t.label),
                                state: {
                                    content: g.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: s.V.Inherit
                        }, t.label, f(n, a.length - 1) ? null : ", "))
                    })))
                },
                f = function(e, t) {
                    return e === t
                },
                v = n("N0BP"),
                k = (n("XA5B"), function(e) {
                    var t = i.createElement(s.Cb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.cb.Hidden
                    }, i.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, i.createElement(s.S, a.__assign({}, e.imageProps))));
                    return e.linkTo && (t = i.createElement(s.U, a.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            k.displayName = "PreviewCardIconicImage";
            var b, y = n("TSYQ"),
                T = (n("cRsL"), function(e) {
                    var t = y("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return i.createElement(s.Xa, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Wa.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, i.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, i.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Rb.Uppercase
                    }, e.title)), e.subTitle && i.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, i.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                S = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, i.createElement(s.kb, {
                        borderRadius: s.x.None,
                        size: s.mb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, i.createElement(T, a.__assign({}, e.topBar))), r = 3), i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                C = (n("kF1+"), function(e) {
                    var t = e.icon && i.createElement(s.Xa, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, i.createElement(s.qb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? i.createElement(s.Cb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ca.Size6,
                        justifyContent: s.Wa.Center
                    }, t, i.createElement(s.W, null, e.value)) : i.createElement(s.Cb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, i.createElement(s.W, null, e.value))
                }),
                w = n("GnwI"),
                N = (n("B3R5"), function(e) {
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), i.createElement("div", a.__assign({}, e, {
                            onClick: this.props.onClick
                        }), i.createElement(s.Cb, {
                            background: s.r.Alt2,
                            overflow: s.cb.Hidden
                        }, i.createElement(s.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = y("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? i.createElement("div", {
                            className: n
                        }, i.createElement(s.S, a.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : i.createElement("div", {
                            className: n
                        }, i.createElement(s.S, a.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(i.Component)),
                I = Object(w.b)("PreviewCardThumbnail")(N),
                _ = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return i.createElement(s.Xa, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, i.createElement(s.W, {
                            color: s.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : i.createElement(s.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: s.V.Inherit
                        }, e.text)))
                    })), i.createElement("div", null, i.createElement(s.U, a.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: s.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), i.createElement(s.W, {
                        type: s.Sb.H3,
                        fontSize: s.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), i.createElement(s.Xa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                D = n("H1ft"),
                E = n("ZbA5"),
                x = n("QVaV"),
                F = n("hyVY"),
                O = n("MXoD"),
                L = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(b || (b = {}));
            var P, A, j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        a = t ? s.rb.Unlock : s.rb.Lock;
                    return i.createElement(s.Xa, null, !t && i.createElement(s.Cb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.fc.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Ob.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Aa.Column,
                        flexWrap: s.Ba.Wrap,
                        justifyContent: s.Wa.Center,
                        "data-test-selector": b.LockSelector
                    }, i.createElement(s.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ca.Size5,
                        "data-test-selector": b.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), i.createElement(s.Xa, null, i.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), i.createElement(s.Cb, {
                        display: s.X.InlineFlex,
                        position: s.hb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.fc.Default,
                        fontSize: s.Ca.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, i.createElement(s.Vb, {
                        direction: this.props.attachTop ? s.Xb.Bottom : s.Xb.Top,
                        align: s.Wb.Right,
                        label: n
                    }, i.createElement(s.qb, {
                        asset: a,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(i.PureComponent);
            n("5NSO");

            function R(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function G(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(P || (P = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(A || (A = {}));
            var B = function(e) {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement("div", a.__assign({
                            className: "preview-card"
                        }, Object(v.a)(this.props)), i.createElement(s.Cb, {
                            position: s.hb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.cb.Hidden
                        }, this.renderVODRestrictionOverlay(), i.createElement(s.U, {
                            to: Object(O.a)(this.getTrackingContext(g.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && i.createElement(I, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: R(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), i.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), i.createElement(s.Xa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && i.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(this.props.contextualCardActionProps.component, a.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? i.createElement(S, {
                            topLeft: i.createElement(E.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(C, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : R(this.props) ? i.createElement(S, {
                            topLeft: void 0 !== this.props.durationInSeconds && i.createElement(C, {
                                value: Object(F.b)(this.props.durationInSeconds),
                                icon: s.rb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && i.createElement(C, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: i.createElement(C, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? i.createElement(C, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : G(this.props) ? i.createElement(S, {
                            topLeft: i.createElement(C, {
                                value: Object(F.b)(this.props.durationInSeconds),
                                icon: s.rb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(C, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? i.createElement(C, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return R(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return R(this.props) || G(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === A.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? i.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(k, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": P.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === A.SingleGameList || this.props.context === A.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? i.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(k, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": P.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(x.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), G(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : R(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== A.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), i.createElement(i.Fragment, null, i.createElement(_, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? i.createElement(s.Xa, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(L.a, a.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return R(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? i.createElement(j, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!R(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === D.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, a) {
                        switch (e) {
                            case D.a.Balloon:
                                return i.createElement(m, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: a
                                });
                            case D.a.Inline:
                                return i.createElement(h, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case D.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(i.Component),
                M = Object(w.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(B);
            n.d(t, !1, function() {
                return P
            }), n.d(t, "b", function() {
                return A
            }), n.d(t, !1, function() {
                return B
            }), n.d(t, "a", function() {
                return M
            })
        },
        GIun: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                i = function(e) {
                    var t = a.Children.only(e.children);
                    return a.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            n.d(t, "a", function() {
                return i
            })
        },
        GxR5: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            });
            var a = n("/7QA"),
                i = "https://passport.twitch.tv/forgot_username/new",
                r = "https://help.twitch.tv/customer/portal/emails/new",
                o = "https://help.twitch.tv/customer/portal/articles/1727973-about-site-suspensions-channel-bans-and-dmca",
                s = "https://www.twitch.tv/p/legal/terms-of-service/";

            function l() {
                return "https://passport.twitch.tv/password_resets/new?client_id=" + a.a.authSettings.clientID
            }
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var a, i = n("/7QA"),
                r = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(a || (a = {}));
            var o = function() {
                switch (i.p.experiments.getAssignment(r.b.Archer)) {
                    case "balloon":
                        return a.Balloon;
                    case "inline":
                        return a.Inline;
                    case "control":
                    default:
                        return a.None
                }
            }
        },
        HSqT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var a = n("/7QA"),
                i = [{
                    code: "ar",
                    label: "العربية"
                }, {
                    code: "bg",
                    label: "Български"
                }, {
                    code: "cs",
                    label: "Čeština"
                }, {
                    code: "da",
                    label: "Dansk"
                }, {
                    code: "de",
                    label: "Deutsch"
                }, {
                    code: "el",
                    label: "Ελληνικά"
                }, {
                    code: "en",
                    label: "English"
                }, {
                    code: "es",
                    label: "Español"
                }, {
                    code: "fi",
                    label: "Suomi"
                }, {
                    code: "fr",
                    label: "Français"
                }, {
                    code: "hu",
                    label: "Magyar"
                }, {
                    code: "it",
                    label: "Italiano"
                }, {
                    code: "ja",
                    label: "日本語"
                }, {
                    code: "ko",
                    label: "한국어"
                }, {
                    code: "nl",
                    label: "Nederlands"
                }, {
                    code: "no",
                    label: "Norsk"
                }, {
                    code: "pl",
                    label: "Polski"
                }, {
                    code: "pt",
                    label: "Português"
                }, {
                    code: "ro",
                    label: "Română"
                }, {
                    code: "ru",
                    label: "Русский"
                }, {
                    code: "sk",
                    label: "Slovenčina"
                }, {
                    code: "sv",
                    label: "Svenska"
                }, {
                    code: "th",
                    label: "ภาษาไทย"
                }, {
                    code: "tr",
                    label: "Türkçe"
                }, {
                    code: "vi",
                    label: "Tiếng Việt"
                }, {
                    code: "zh-hk",
                    label: "中文(粵語)"
                }, {
                    code: "zh",
                    label: "中文"
                }];

            function r(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(a.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(i.concat(r()).map(function(e) {
                return e.code
            }));

            function s() {
                var e = a.p.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return i.slice().sort(function(e, n) {
                    var a = t(e),
                        i = t(n);
                    return a !== i ? a - i : a + ":" + e.label < i + ":" + n.label ? -1 : 1
                }).concat(r(!0))
            }
        },
        HStj: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Live = "live", e.Videos = "videos", e.Clips = "clips", e.GameDetails = "game-details"
                }(a || (a = {}))
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "h", function() {
                return d
            });
            var a = "directory.LANGUAGE_TAGS_UPDATED",
                i = "directory.TAG_FILTER_ADDED",
                r = "directory.TAG_FILTER_CHANGED",
                o = "directory.TAG_FILTER_REMOVED";

            function s(e) {
                return {
                    type: a,
                    languageTagFilters: e
                }
            }

            function l(e, t) {
                return {
                    type: i,
                    addedTag: e,
                    categoryName: t
                }
            }

            function c(e, t) {
                return {
                    type: r,
                    categoryName: t,
                    tagFilters: e
                }
            }

            function d(e, t) {
                return {
                    type: o,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        Iqxx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "broadcastTagFragment"
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isAutomated"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "localizedDescription"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 98
                }
            };
            n.loc.source = {
                body: "fragment broadcastTagFragment on Tag {\nid\nlocalizedName\ntagName\nisAutomated\nlocalizedDescription\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Jl34: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowGameButton_FollowGame"
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
                                    value: "FollowGameInput"
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
                                value: "followGame"
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
                                                                value: "followedAt"
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
                    end: 136
                }
            };
            n.loc.source = {
                body: "mutation FollowGameButton_FollowGame($input: FollowGameInput!) {\nfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        JoTo: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("f00E"),
                s = n("/IfK"),
                l = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderPortal = function(e) {
                            s.b ? s.b.provideContent(e, n.contentID) : r.k.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.removePortal = function() {
                            s.b ? s.b.removeContent() : r.k.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.contentID = Object(o.a)(), n
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.children ? this.renderPortal(e.children) : this.removePortal()
                    }, t.prototype.componentDidMount = function() {
                        s.b || r.k.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content."), this.props.children && this.renderPortal(this.props.children)
                    }, t.prototype.componentWillUnmount = function() {
                        this.removePortal()
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return l
            })
        },
        KsLx: function(e, t, n) {},
        Lmqf: function(e, t, n) {
            e.exports = n.p + "assets/upsell-center-dark-6c092df86238db84cff1.png"
        },
        MJbm: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = r.p.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                a = e.offsetHeight,
                                i = e.offsetLeft,
                                r = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && a === t.height && r === t.top && i === t.left || (t.width = n, t.height = a, t.props.onResize(n, a, r, i)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
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
        N3I0: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("u5aL"),
                o = n("/7QA"),
                s = n("Ue10"),
                l = function() {
                    return i.createElement(s.Xa, {
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Wa.Center,
                        alignItems: s.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: s.fc.Above
                    }, i.createElement(s.Cb, {
                        color: s.O.Alt2,
                        textAlign: s.Ob.Center,
                        flexShrink: 1
                    }, i.createElement(s.qb, {
                        asset: s.rb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), i.createElement(s.Pa, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Ob.Center
                    }, i.createElement(s.W, {
                        type: s.Sb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), i.createElement(s.W, {
                        type: s.Sb.P
                    }, Object(o.d)("Please try again later", "DropdownSearchError")))
                },
                c = n("8Ad5"),
                d = function(e) {
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
                            e.keyCode === c.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === c.a.Up ? (n(), t.focusNext(-1)) : e.keyCode === c.a.Down && (n(), t.focusNext(1))
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
                            t = this.props.isErrored ? i.createElement(l, null) : i.Children.only(this.props.children),
                            n = i.createElement(s.tb, {
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
                        return this.props.inline ? i.createElement(r.a, {
                            onClickOut: this.onClickOut
                        }, i.createElement(s.Cb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.hb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && i.createElement(s.Cb, {
                            attachLeft: !0,
                            background: s.r.Base,
                            borderRadius: s.x.Large,
                            display: this.state.isOpen ? s.X.Block : s.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.hb.Absolute,
                            zIndex: s.fc.Above,
                            elevation: 3
                        }, i.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : i.createElement(r.a, {
                            onClickOut: this.onClickOut
                        }, n, e && i.createElement(s.u, a.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), i.createElement("div", {
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
                            i = Array.prototype.indexOf.call(n, a);
                        if ((t = i < 0 ? e > 0 ? 0 : n.length - 1 : i + e) < 0 && (t = 0), !(t >= n.length)) {
                            var r = n.item(t);
                            r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: r
                            }), this.props.onFocusChange && this.props.onFocusChange(r)
                        }
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return d
            })
        },
        OhOW: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("+U0Y"),
                o = n("5xw2");

            function s(e) {
                return e.userPreferences.languagePreferences
            }
            i.p.store.registerReducer("userPreferences", function(e, t) {
                switch (void 0 === e && (e = {
                    languagePreferences: Object(o.b)()
                }), t.type) {
                    case r.a:
                        return a.__assign({}, e, {
                            languagePreferences: t.languagePreferences
                        });
                    default:
                        return e
                }
            })
        },
        QV0j: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("oB8h"),
                i = function(e) {
                    switch (e) {
                        case a.a.Live:
                            return a.a.Live;
                        case a.a.Premiere:
                            return a.a.Premiere;
                        case a.a.Rerun:
                            return a.a.Rerun;
                        case a.a.WatchParty:
                            return a.a.WatchParty;
                        default:
                            return null
                    }
                }
        },
        Ryvb: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SuggestedTags"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "gameName"
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
                                value: "tagType"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "TagType"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "limit"
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
                                        value: "gameName"
                                    }
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
                                        value: "tags"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tagType"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "tagType"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "limit"
                                            }
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "broadcastTagFragment"
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
                    end: 237
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery SuggestedTags($gameName: String! $tagType: TagType! $limit: Int!) {\ngame(name: $gameName) {\nid\ntags(tagType: $tagType limit: $limit) {\n...broadcastTagFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("Iqxx").definitions)), e.exports = a
        },
        T2RZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return v
            });
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("2Ygb"),
                c = n("2xye"),
                d = n("oJov"),
                u = n("JVUd"),
                m = n("moLQ"),
                p = n("yI6f");

            function g(e, t) {
                if (t) {
                    var n = {};
                    return n = "string" == typeof t ? {
                        pathname: t
                    } : t, a.__assign({}, n, {
                        state: a.__assign({}, n.state, e)
                    })
                }
            }

            function h(e, t, n) {
                return n || (n = function() {}),
                    function(i) {
                        n && n(i), s.o.track(c.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function f(e, t) {
                return a.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), s.o.track(c.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: c.PageviewContent.Tag,
                            tag_id: n.id
                        }))
                    }
                })
            }

            function v(e, t, n) {
                return function(v) {
                    var k = function(r) {
                        function o() {
                            var e = null !== r && r.apply(this, arguments) || this;
                            return e.itemTrackingID = Object(p.f)(), e.trackImpression = function() {
                                s.o.track(c.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return a.__extends(o, r), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (v === d.a) {
                                var e = this.props;
                                return i.createElement(v, a.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return i.createElement(v, a.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
                        }, o.prototype.getTrackingLocationState = function() {
                            var t = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [],
                                n = this.props.tagFilters.map(function(e) {
                                    return e.id
                                }),
                                a = e;
                            this.props.tagFilters.length > 0 && (a === c.PageviewMedium.Browse ? a = c.PageviewMedium.BrowseDirectoryTags : a === c.PageviewMedium.Game && (a = c.PageviewMedium.GameDirectoryTags));
                            var i = {
                                tag_set: JSON.stringify(t),
                                tag_filter_set: JSON.stringify(n),
                                tag_streamer_set: "[]",
                                medium: a
                            };
                            return "POP" === s.p.history.action ? i : (s.p.history.location.state && s.p.history.location.state.medium === c.PageviewMedium.TwitchHome && (i.item_tracking_id = s.p.history.location.state.item_tracking_id, i.medium = s.p.history.location.state.medium, i.content = s.p.history.location.state.content), i)
                        }, o.prototype.getCommonTrackingParams = function() {
                            var a = this.props.trackingProps || {},
                                i = a.itemID,
                                r = a.category,
                                o = a.channelID,
                                s = a.itemPosition,
                                l = a.rowPosition,
                                c = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [];
                            return {
                                channel_id: void 0 !== o ? Number(o) : null,
                                component: null,
                                content_type: t,
                                item_tracking_id: this.itemTrackingID,
                                item_id: void 0 !== i ? i : null,
                                item_position: void 0 !== s ? s : null,
                                item_subsection: null,
                                item_page: e,
                                reason_target: null,
                                reason_target_type: null,
                                reason_type: null,
                                request_id: null,
                                row_name: null,
                                row_position: void 0 !== l ? l : null,
                                section: void 0 !== n ? n : null,
                                model_tracking_id: null,
                                tag_set: JSON.stringify(c),
                                tag_streamer_set: "[]",
                                filtered: this.props.tagFilters.length > 0,
                                category: void 0 !== r ? r : null,
                                tag_id: null
                            }
                        }, o.prototype.wrapPreviewCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return a.__assign({
                                onVideoTitleClick: h(t, c.PageviewContent.VideoTitle, e.onVideoTitleClick),
                                linkTo: g(n, this.props.linkTo),
                                onThumbnailClick: h(t, c.PageviewContent.VideoThumbnail, e.onThumbnailClick),
                                channelLinkTo: g(n, e.channelLinkTo),
                                onChannelLoginClick: h(t, c.PageviewContent.ChannelMetadata, e.onChannelLoginClick),
                                onChannelImageClick: h(t, c.PageviewContent.UserThumbnail, e.onChannelImageClick),
                                gameTitleLinkTo: g(n, e.gameTitleLinkTo),
                                onGameTitleClick: h(t, c.PageviewContent.GameName, e.onGameTitleClick)
                            }, e.tagListProps && {
                                tagListProps: f(t, e.tagListProps)
                            }, n.medium && {
                                trackingContext: {
                                    medium: n.medium,
                                    content: n.content
                                }
                            })
                        }, o.prototype.wrapGameCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return a.__assign({
                                linkTo: g(n, e.linkTo),
                                onClick: h(t, c.PageviewContent.GameBoxart, this.props.onClick)
                            }, e.tagListProps && {
                                tagListProps: f(t, e.tagListProps)
                            })
                        }, o.displayName = Object(l.a)(o.name, v), o
                    }(i.Component);
                    return Object(o.compose)(Object(u.a)("PreviewCard-" + e + "-" + t, {
                        percentage: 75
                    }), Object(r.connect)(function(n, a) {
                        var i = [];
                        if (e === c.PageviewMedium.Game) {
                            var r = a.trackingProps && a.trackingProps.categoryName;
                            i = r ? Object(m.b)(n, r) : []
                        } else i = t === p.b.Live ? Object(m.b)(n, m.a.LiveChannels) : Object(m.b)(n, m.a.Categories);
                        return {
                            tagFilters: i
                        }
                    }))(k)
                }
            }
        },
        TCeE: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = 5
        },
        TJgk: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryPage_Game"
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
                    }, {
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
                                value: "filters"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "StreamMetadataFilterInput"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sort"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "StreamSort"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "tags"
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
                                        value: "String"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "streams"
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
                                            value: "filters"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "filters"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "sort"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "sort"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tags"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "tags"
                                            }
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
                                                        value: "directoryPageGameStreamWithTagsEdge"
                                                    },
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
                        value: "directoryPageGameStreamWithTagsEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "StreamEdge"
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
                                    kind: "Field",
                                    name: {
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
                                        value: "viewersCount"
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
                                        value: "tags"
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
                }],
                loc: {
                    start: 0,
                    end: 698
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery DirectoryPage_Game($name: String! $limit: Int $cursor: Cursor $filters: StreamMetadataFilterInput $sort: StreamSort $tags: [String!]) {\ngame(name: $name) {\nid\ndisplayName\nstreams(first: $limit after: $cursor filters: $filters sort: $sort tags: $tags) {\nedges {\n...directoryPageGameStreamWithTagsEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}\nfragment directoryPageGameStreamWithTagsEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\nprofileImageURL(width: 50)\n}\ntags {\n...tagFragment\n}\ntype\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        Uive: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("N0BP"),
                l = n("MPw5"),
                c = n("cTNz"),
                d = n("KxT4"),
                u = n("YUvD"),
                m = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
                p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
                g = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = o.k.withCategory("ad-slot"), n.createSlot = function(e) {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (this.state.slotCreated) return [2];
                                            this.setState({
                                                slotCreated: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable, e.gdpr.blockConsentRequiredContent)];
                                        case 2:
                                            return t = n.sent(), Object(c.h)(t.getSlotElementId()), this.setState({
                                                slot: t
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.logger.warn("Unable to create ad slot", {
                                                slotID: e.slotID,
                                                adUnit: e.adUnit,
                                                adSize: e.adSize,
                                                targeting: e.targeting,
                                                autoEnable: e.autoEnable,
                                                blockConsentRequiredContent: e.gdpr.blockConsentRequiredContent
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.setRef = function(e) {
                            return n.slotRef = e
                        }, n.onSlotRenderEnd = function(e) {
                            var t = e.slot.getSlotElementId();
                            if (n.state.slot && t === n.props.slotID) {
                                if (n.logger.debug("Ad slot render ended", {
                                        elementID: t,
                                        lineItemID: e.lineItemId,
                                        createdID: e.creativeId,
                                        isEmpty: e.isEmpty,
                                        serviceName: e.serviceName,
                                        size: e.size
                                    }), e.isEmpty) return;
                                if (!n.slotRef) return;
                                if (n.props.slotID === c.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                var a;
                                if (n.props.slotID === c.b.directory.banner) return void((a = n.slotRef.querySelector(m)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                if (n.props.slotID === c.b.directory.rectangle) return void((a = n.slotRef.querySelector(p)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                })
                            }
                        }, n.slotRendered = function(e) {
                            n.props.slotRendered && n.props.slotRendered(e)
                        }, n.shouldCreateSlot = function(e) {
                            return e.gdpr.status !== d.b.Loading && e.trackingSet
                        }, n.state = {
                            shouldDisplay: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        c.g.addListener(c.f, this.onSlotRenderEnd), this.shouldCreateSlot(this.props) ? (this.logger.debug("Consent ready. Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Consent not ready or Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.state.slotCreated || (!this.shouldCreateSlot(e) || e.gdpr.status === this.props.gdpr.status && e.trackingSet === this.props.trackingSet ? this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID) : (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return t.shouldDisplay !== this.state.shouldDisplay
                    }, t.prototype.render = function() {
                        var e = i.__assign({}, this.props.injectStyles);
                        return this.state.shouldDisplay || (e.display = "none"), r.createElement("div", i.__assign({
                            style: e,
                            id: this.props.slotID,
                            ref: this.setRef
                        }, Object(s.a)(this.props)))
                    }, t
                }(r.Component),
                h = Object(u.a)(d.c.Amazon)(g);
            var f = Object(a.connect)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(h);
            n.d(t, "a", function() {
                return f
            })
        },
        VW9G: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("fvjX"),
                r = n("Igt5"),
                o = n("X7a7"),
                s = n("mrSG"),
                l = n("q1tI"),
                c = n("yR8l"),
                d = n("moLQ"),
                u = n("/7QA");
            var m = function(e) {
                    return e
                },
                p = n("Ue10"),
                g = n("fbOE"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.wrapText = function(e) {
                            var n = t.props,
                                a = n.addTagFilter,
                                i = n.data,
                                r = n.directoryName,
                                o = n.updateLanguageTags,
                                s = i && i.contentTag;
                            if (!s) return e;
                            var c = function() {
                                return a(s, r || d.a.LiveChannels)
                            };
                            return s.isLanguageTag && (c = function() {
                                o(s.id, !0)
                            }), l.createElement(p.U, {
                                onClick: c,
                                "data-test-selector": "international-section-header-link"
                            }, l.createElement("strong", null, e))
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.languageCode;
                        return l.createElement(p.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(p.W, {
                            type: p.Sb.H4,
                            color: p.O.Base,
                            "data-a-target": "international-section-header",
                            "data-test-selector": "international-section-header-tags"
                        }, function(e, t) {
                            switch (void 0 === t && (t = m), e) {
                                case "ar":
                                    return Object(u.d)("Channels in <x:bold>Arabic</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "asl":
                                    return Object(u.d)("Channels in <x:bold>American Sign Language</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "bg":
                                    return Object(u.d)("Channels in <x:bold>Bulgarian</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "cs":
                                    return Object(u.d)("Channels in <x:bold>Czech</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "da":
                                    return Object(u.d)("Channels in <x:bold>Danish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "de":
                                    return Object(u.d)("Channels in <x:bold>German</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "el":
                                    return Object(u.d)("Channels in <x:bold>Greek</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "es":
                                    return Object(u.d)("Channels in <x:bold>Spanish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "fi":
                                    return Object(u.d)("Channels in <x:bold>Finnish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "fr":
                                    return Object(u.d)("Channels in <x:bold>French</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "hu":
                                    return Object(u.d)("Channels in <x:bold>Hungarian</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "it":
                                    return Object(u.d)("Channels in <x:bold>Italian</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "ja":
                                    return Object(u.d)("Channels in <x:bold>Japanese</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "ko":
                                    return Object(u.d)("Channels in <x:bold>Korean</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "nl":
                                    return Object(u.d)("Channels in <x:bold>Dutch</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "no":
                                    return Object(u.d)("Channels in <x:bold>Norwegian</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "pl":
                                    return Object(u.d)("Channels in <x:bold>Polish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "pt":
                                    return Object(u.d)("Channels in <x:bold>Portuguese</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "ru":
                                    return Object(u.d)("Channels in <x:bold>Russian</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "sk":
                                    return Object(u.d)("Channels in <x:bold>Slovak</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "sv":
                                    return Object(u.d)("Channels in <x:bold>Swedish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "th":
                                    return Object(u.d)("Channels in <x:bold>Thai</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeaer");
                                case "tr":
                                    return Object(u.d)("Channels in <x:bold>Turkish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "vi":
                                    return Object(u.d)("Channels in <x:bold>Vietnamese</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "zh":
                                    return Object(u.d)("Channels in <x:bold>Chinese</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                default:
                                    return Object(u.d)("Channels in <x:bold>English</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader")
                            }
                        }(e, this.wrapText)))
                    }, t
                }(l.Component),
                f = Object(c.a)(g, {
                    options: function(e) {
                        var t = function(e) {
                            switch (e) {
                                case "en":
                                    return "6ea6bca4-4712-4ab9-a906-e3336a9d8039";
                                case "it":
                                    return "5b9935eb-1e9a-4217-98ad-62bda5cff0d1";
                                case "es":
                                    return "d4bb9c58-2141-4881-bcdc-3fe0505457d1";
                                case "ko":
                                    return "ab2975e3-b9ca-4b1a-a93e-fb61a5d5c3a4";
                                case "ru":
                                    return "0569b171-2a2b-476e-a596-5bdfb45a1327";
                                case "fi":
                                    return "220eb274-ab25-425b-8a9b-826103404997";
                                case "fr":
                                    return "6f655045-9989-4ef7-8f85-1edcec42d648";
                                case "hu":
                                    return "a298cca5-d408-47c7-a1e7-0c76ca878bc6";
                                case "sv":
                                    return "145b073b-cb70-4e91-b170-f5fab2ebba05";
                                case "pt":
                                    return "39ee8140-901a-4762-bfca-8260dea1310f";
                                case "de":
                                    return "9166ad14-41f1-4b04-a3b8-c8eb838c6be6";
                                case "ja":
                                    return "6ba1d230-e52f-4d81-b1e0-41f25a8a9f5d";
                                case "nl":
                                    return "e13e6734-37ae-4d85-897b-3015f0168355";
                                case "pl":
                                    return "f9d04efa-6e25-49bf-bf0a-da3e2addaf1b";
                                case "cs":
                                    return "a6cddaba-f0ce-4526-9087-6de2f603a24d";
                                case "no":
                                    return "5647bf35-f99e-49aa-8578-0e07d936188c";
                                case "tr":
                                    return "f08d5873-f0c7-4912-94ba-a41933b4c141";
                                case "sk":
                                    return "9b773670-05f8-4c06-ac99-e6649f906171";
                                case "th":
                                    return "f19c7524-c18d-41af-9f39-034c8d0b0fee";
                                case "ar":
                                    return "73cc486a-e56b-41ed-a1df-7afedbc84f6f";
                                case "da":
                                    return "43e598cc-918b-4247-b02c-b13543a1eac9";
                                case "el":
                                    return "902f6815-a655-4918-99e7-48c74a71feac";
                                case "zh":
                                    return "74c92063-a389-4fd2-8460-b1bb82b04ec7";
                                case "ro":
                                    return "75a99c80-0f15-4159-b1fd-3812c25b4aca";
                                case "bg":
                                    return "21d85c73-701f-4259-8c4e-4321265847b5";
                                case "asl":
                                    return "5ad4b978-495f-4093-9461-c194f58201ab";
                                case "zh-hk":
                                    return "0c8c6543-4019-47d0-9b8a-57a81ee6ace5";
                                case "vi":
                                    return "ba3b69fe-899c-4518-ac46-707275e3eba1";
                                case "other":
                                    return "fd76c790-0505-4c4c-865a-d6bd139c0901";
                                default:
                                    return null
                            }
                        }(e.languageCode);
                        return {
                            skip: !t,
                            variables: {
                                id: t
                            }
                        }
                    }
                })(h);
            var v = Object(a.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    addTagFilter: r.e,
                    updateLanguageTags: o.c
                }, e)
            })(f);
            n.d(t, "a", function() {
                return v
            })
        },
        Ve5Q: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UpsellCenter_Channel"
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
                                        value: "broadcastSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
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
                body: "query UpsellCenter_Channel($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nprofileImageURL(width: 70)\nbroadcastSettings {\nid\ngame {\nid\ndisplayName\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        X7a7: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("Igt5"),
                o = "languageTags";

            function s(e, t) {
                var n = this;
                return function(s) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, l;
                        return a.__generator(this, function(a) {
                            return n = new Set(c()), t ? n.add(e) : n.delete(e), l = Array.from(n), i.m.set(o, l), s(Object(r.g)(l)), [2]
                        })
                    })
                }
            }

            function l(e) {
                var t = this;
                return function(n) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return i.m.set(o, e), n(Object(r.g)(e)), [2]
                        })
                    })
                }
            }

            function c() {
                return i.m.get(o, [])
            }
        },
        XA5B: function(e, t, n) {},
        Z8yi: function(e, t, n) {},
        ZbA5: function(e, t, n) {
            "use strict";
            var a, i, r, o, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("oB8h"),
                m = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var p = ((a = {})[u.a.Live] = "stream-type-indicator--live", a[u.a.Premiere] = "stream-type-indicator--premiere", a[u.a.Rerun] = "stream-type-indicator--rerun", a[u.a.WatchParty] = "stream-type-indicator--rerun", a),
                g = ((i = {})[u.a.Premiere] = m.rb.VideoPremiere, i[u.a.Rerun] = m.rb.VideoRerun, i[u.a.WatchParty] = m.rb.VideoRerun, i),
                h = ((r = {})[u.a.Premiere] = m.sb.Live, r[u.a.Rerun] = m.sb.Inherit, r[u.a.WatchParty] = m.sb.Inherit, r),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(m.Cb, {
                            className: this.getClassNames(),
                            color: m.O.Overlay,
                            background: m.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: m.x.Small,
                            display: m.X.Flex
                        }, c.createElement(m.Xa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(m.W, {
                            type: m.Sb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[p[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(m.Cb, {
                            borderRadius: m.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? c.createElement(m.Xa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, c.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : c.createElement(m.qb, {
                            asset: g[this.props.type],
                            type: h[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case u.a.Live:
                                return Object(d.d)("LIVE", "StreamTypeIndicator");
                            case u.a.Premiere:
                                return Object(d.d)("Premiere", "StreamTypeIndicator");
                            case u.a.Rerun:
                            case u.a.WatchParty:
                                return Object(d.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(c.Component);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return f
            })
        },
        bUox: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("Ue10");
            ! function(e) {
                e[e.NoResults = 0] = "NoResults", e[e.TooManyTags = 1] = "TooManyTags"
            }(a || (a = {}));
            var l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderRemoveButton = function() {
                        if (t.props.tagFilters && t.props.tagFilters.length && t.props.onClickRemoveLastTag) {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1];
                            return r.createElement(s.Xa, {
                                margin: {
                                    top: 2
                                }
                            }, r.createElement(s.z, {
                                onClick: t.props.onClickRemoveLastTag,
                                type: s.F.Hollow
                            }, Object(o.d)("Remove the {lastAdded} tag and try again", {
                                lastAdded: e.localizedName || e.tagName
                            }, "TagError")))
                        }
                    }, t.getErrorMessage = function() {
                        switch (t.props.errorType) {
                            case a.NoResults:
                                return Object(o.d)("No results found", "TagError");
                            case a.TooManyTags:
                                return Object(o.d)("You cannot apply more than five tags", "TagError");
                            default:
                                return t.props.errorType
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s.Xa, null, r.createElement(s.W, {
                        type: s.Sb.H3
                    }, this.getErrorMessage()), r.createElement(s.W, {
                        color: s.O.Alt2,
                        fontSize: s.Ca.Size5
                    }, Object(o.d)("Try adjusting your tags to find what you're looking for.", "TagError")), this.renderRemoveButton())
                }, t
            }(r.Component);
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return l
            })
        },
        cRsL: function(e, t, n) {},
        cnlr: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("Lmqf"),
                d = n.n(c),
                u = n("yR8l"),
                m = n("1/iK"),
                p = n("y5D0"),
                g = n("ugtu"),
                h = n("D7An");
            ! function(e) {
                e.Learn = "learn", e.Support = "support", e.LiveUp = "liveup", e.Recommendation = "rec", e.Bullet = "bullet"
            }(a || (a = {}));
            var f, v, k = n("Ue10"),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            upsellCenterChannelsAssignment: t.props.showDefault ? null : function() {
                                var e = l.p.experiments.getAssignment(h.b.WebSideNavUpsellCenterChannels);
                                return e === a.Learn || e === a.Support || e === a.LiveUp || e === a.Recommendation || e === a.Bullet ? e : null
                            }()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(k.Xa, {
                            margin: {
                                y: 1
                            }
                        }, this.renderText())
                    }, t.prototype.renderText = function() {
                        if (!this.props.data || this.props.showDefault || !this.state.upsellCenterChannelsAssignment) return this.renderDefault();
                        switch (this.state.upsellCenterChannelsAssignment) {
                            case a.Learn:
                                return this.renderTextContent(Object(l.d)("Want to master <x:bold>{game}</x:bold>?", {
                                    game: this.props.data.game,
                                    "x:bold": g.j
                                }, "UpsellCenterText"), Object(l.d)("Sign up to learn from the best.", "UpsellCenterText"));
                            case a.Support:
                                return this.renderTextContent(Object(l.d)("Sign up and follow to support <x:bold>{name}</x:bold> and all your favorite streamers!", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": g.j
                                }, "UpsellCenterText"));
                            case a.LiveUp:
                                return this.renderTextContent(Object(l.d)("Late to the show?", "UpsellCenterText"), Object(l.d)("Sign up and get notifications next time <x:bold>{name}</x:bold> goes live.", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": g.j
                                }, "UpsellCenterText"));
                            case a.Recommendation:
                                return this.renderTextContent(Object(l.d)("Discover more streamers like <x:bold>{name}</x:bold>!", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": g.j
                                }, "UpsellCenterText"), Object(l.d)("Sign up to see which channels we've picked just for you.", "UpsellCenterText"));
                            case a.Bullet:
                                return this.renderBulletPoints(Object(l.d)("Sign up to experience the best of <x:bold>{name}</x:bold>:", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": g.j
                                }, "UpsellCenterText"), [Object(l.d)("Chat with other fans", "UpsellCenterText"), Object(l.d)("Capture your favorite moments", "UpsellCenterText"), Object(l.d)("Watch in Dark Mode!", "UpsellCenterText")]);
                            default:
                                return this.renderDefault()
                        }
                    }, t.prototype.renderDefault = function() {
                        return this.renderTextContent(Object(l.d)("Join the Twitch community!", "UpsellCenterText"), Object(l.d)("Discover the best live streams anywhere.", "UpsellCenterText"))
                    }, t.prototype.renderTextContent = function(e, t) {
                        return r.createElement(r.Fragment, null, r.createElement(k.W, {
                            color: k.O.Base,
                            fontSize: k.Ca.Size4
                        }, e), r.createElement(k.W, {
                            color: k.O.Alt2,
                            fontSize: k.Ca.Size5
                        }, t))
                    }, t.prototype.renderBulletPoints = function(e, t) {
                        var n = t.map(function(e, t) {
                            return r.createElement(k.Xa, {
                                key: "upsell-center-text-" + t,
                                display: k.X.Flex,
                                flexDirection: k.Aa.Row,
                                alignItems: k.f.Start
                            }, r.createElement(k.qb, {
                                type: k.sb.Alt2,
                                asset: k.rb.Check
                            }), r.createElement(k.Xa, {
                                margin: {
                                    left: 1
                                },
                                textAlign: k.Ob.Left
                            }, r.createElement(k.W, {
                                color: k.O.Alt2,
                                fontSize: k.Ca.Size6
                            }, e)))
                        });
                        return r.createElement(r.Fragment, null, r.createElement(k.W, {
                            color: k.O.Base,
                            fontSize: k.Ca.Size4
                        }, e), r.createElement(k.Xa, {
                            margin: {
                                top: 1
                            }
                        }, n))
                    }, t
                }(r.Component),
                y = n("2xye");
            ! function(e) {
                e.SideNav = "sidenav"
            }(f || (f = {})),
            function(e) {
                e.Upsell = "upsell"
            }(v || (v = {}));
            var T = n("Ve5Q"),
                S = (n("wqI2"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.impressionEventFired = !1, t.signup = function() {
                            ! function(e) {
                                var t = i.__assign({
                                    section: f.SideNav,
                                    click_subsection: v.Upsell
                                }, e);
                                l.o.track(y.SpadeEventType.ItemClick, t)
                            }(), t.props.signup()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.componentDidUpdate = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        return r.createElement(k.Cb, {
                            background: k.r.AccentAlt2,
                            display: k.X.Flex,
                            flexDirection: k.Aa.Column,
                            padding: {
                                y: 2,
                                x: 1
                            },
                            margin: 1
                        }, this.renderImage(), r.createElement(k.Xa, {
                            textAlign: k.Ob.Center
                        }, this.renderText(), r.createElement(k.z, {
                            onClick: this.signup,
                            size: k.D.Large
                        }, r.createElement(k.Xa, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(k.W, {
                            color: k.O.Base
                        }, Object(l.d)("Sign up", "UpsellCenter"))))))
                    }, t.prototype.renderText = function() {
                        if (!this.props.channelLogin) return r.createElement(b, {
                            showDefault: !0
                        });
                        if (this.props.data && this.props.data.user) {
                            var e = {
                                game: this.props.data.user.broadcastSettings && this.props.data.user.broadcastSettings.game && this.props.data.user.broadcastSettings.game.displayName || "",
                                channelDisplayName: this.props.data.user.displayName || ""
                            };
                            return r.createElement(b, {
                                data: e
                            })
                        }
                    }, t.prototype.renderImage = function() {
                        var e = r.createElement(k.S, {
                            alt: Object(l.d)("Upsell Center", "UpsellCenter"),
                            src: d.a
                        });
                        return this.props.channelLogin && this.props.data && this.props.data.user && this.props.data.user.profileImageURL ? r.createElement(k.Xa, {
                            position: k.hb.Relative
                        }, r.createElement(k.Xa, {
                            className: "upsell-center__avatar",
                            position: k.hb.Absolute,
                            zIndex: k.fc.Above
                        }, r.createElement(k.q, {
                            src: this.props.data.user.profileImageURL,
                            alt: Object(l.d)("{displayName}'s Profile Image", {
                                displayName: this.props.data.user.displayName || ""
                            }, "UpsellCenter"),
                            borderRadius: k.x.Large,
                            size: 40
                        })), e) : e
                    }, t.prototype.trackImpression = function() {
                        this.impressionEventFired || (! function(e) {
                            var t = i.__assign({
                                section: f.SideNav
                            }, e);
                            l.o.track(y.SpadeEventType.ItemDisplay, t)
                        }(), this.impressionEventFired = !0)
                    }, t
                }(r.PureComponent));
            var C = Object(s.compose)(Object(u.a)(T, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin || ""
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(o.connect)(null, function(e) {
                    return Object(s.bindActionCreators)({
                        signup: function() {
                            return Object(p.g)(m.a.SideNavUpsellCenter)
                        }
                    }, e)
                }))(S),
                w = n("kRBY"),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn || this.props.collapsed ? null : r.createElement(C, i.__assign({}, this.props))
                    }, t
                }(r.PureComponent);
            var I = Object(o.connect)(function(e) {
                return {
                    collapsed: !e.ui.sideNavExpanded,
                    isLoggedIn: Object(w.f)(e)
                }
            })(N);
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return S
            }), n.d(t, !1, function() {
                return N
            }), n.d(t, "a", function() {
                return I
            })
        },
        cras: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("fvjX"),
                o = n("/7QA"),
                s = n("vSJR"),
                l = n("yR8l"),
                c = n("kduP"),
                d = n("HStj");

            function u(e) {
                switch (e) {
                    case d.a.Live:
                        return Object(o.d)("Live Channels", "DirectoryContentDropdownLabels");
                    case d.a.Videos:
                        return Object(o.d)("Videos", "DirectoryContentDropdownLabels");
                    case d.a.Clips:
                        return Object(o.d)("Clips", "DirectoryContentDropdownLabels");
                    case d.a.GameDetails:
                        return Object(o.d)("Game Details", "DirectoryContentDropdownLabels");
                    default:
                        return e
                }
            }
            var m = n("GnwI"),
                p = n("Ue10"),
                g = n("lwN9"),
                h = (n("KsLx"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getLinkTo = function(e) {
                            var n = Object(c.c)(t.props.directoryName);
                            switch (e) {
                                case d.a.Live:
                                    return n;
                                case d.a.Videos:
                                    return n + "/videos/all";
                                case d.a.Clips:
                                    return n + "/clips";
                                case d.a.GameDetails:
                                    return n + "/details";
                                default:
                                    return e
                            }
                        }, t.clickHandler = function() {
                            t.balloonWrapperRef && t.balloonWrapperRef.toggleBalloon(!1)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = i.createElement(i.Fragment, null, this.renderContentItems(d.a.Live), this.renderContentItems(d.a.Videos), this.renderContentItems(d.a.Clips), this.renderContentItems(d.a.GameDetails)),
                            t = i.createElement(p.Xa, {
                                className: "content-type-dropdown__button-content"
                            }, u(this.props.contentType));
                        return i.createElement(p.Xa, null, i.createElement(p.Xa, {
                            margin: {
                                left: .5
                            }
                        }, i.createElement(p.W, null, Object(o.d)("Showing", "DirectoryHeader"))), i.createElement(s.a, {
                            buttonLabel: t,
                            "data-a-target": "content-type-dropdown"
                        }, e))
                    }, t.prototype.renderContentItems = function(e) {
                        if (e === d.a.GameDetails && this.props.data.game && !this.props.data.game.product) return null;
                        var t = this.props.contentType === e ? i.createElement(p.Xa, {
                                attachRight: !0,
                                position: p.hb.Absolute,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(p.qb, {
                                asset: p.rb.Check,
                                height: 18,
                                width: 18
                            })) : null,
                            n = u(e).replace(/ /g, "-").toLowerCase();
                        return i.createElement(p.Ua, {
                            "data-filter-type": e,
                            linkTo: this.getLinkTo(e),
                            onClick: this.clickHandler,
                            "data-a-target": "game-directory-" + n + "-tab",
                            selected: !1
                        }, i.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexWrap: p.Ba.Wrap,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u(e), t))
                    }, t
                }(i.Component)),
                f = Object(r.compose)(Object(l.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.directoryName
                            }
                        }
                    }
                }), Object(m.b)("DirectoryContentDropdown", {
                    autoReportInteractive: !0
                }))(h);
            n.d(t, !1, function() {
                return h
            }), n.d(t, "a", function() {
                return f
            })
        },
        efEE: function(e, t, n) {},
        fbOE: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "InternationalHeader_Tag"
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
                                value: "contentTag"
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
                    end: 139
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery InternationalHeader_Tag($id: ID!) {\ncontentTag(id: $id) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
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
        hKEm: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "browsePagePopularStreamsWithTagsEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "StreamEdge"
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
                                    kind: "Field",
                                    name: {
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
                                        value: "viewersCount"
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
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
                }],
                loc: {
                    start: 0,
                    end: 352
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment browsePagePopularStreamsWithTagsEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 40 height: 56)\n}\ntags {\n...tagFragment\n}\ntype\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        hX9f: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("GFmA"),
                c = n("oB8h"),
                d = n("kduP"),
                u = n("2xye"),
                m = n("rShu"),
                p = n("QV0j"),
                g = n("yI6f"),
                h = n("T2RZ"),
                f = n("Ue10"),
                v = (n("zrz1"), Object(h.a)(u.PageviewMedium.Game, g.b.Live, g.c.BrowseInCategoryChannels)(l.a)),
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.untitledBroadcastString = Object(s.d)("Untitled Broadcast", "StreamThumbnail"), t.getLinkTo = function(e, n) {
                            var i = t.props.trackingContent ? t.props.trackingContent : u.PageviewContent.Live,
                                r = u.PageviewMedium.Game;
                            t.props.trackingMedium && (r = t.props.trackingMedium);
                            var o = t.props.history.location && t.props.history.location.state || {};
                            return {
                                pathname: e,
                                state: a.__assign({}, o, {
                                    medium: r,
                                    content: i,
                                    content_index: n
                                })
                            }
                        }, t.shouldShowGame = function(e) {
                            if (t.props.directoryType !== m.a.Games && t.props.streamNode.game) {
                                var n = t.props.streamNode.game[e];
                                if (n) return n
                            }
                            return ""
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var n = {
                            context: l.b.SingleGameList,
                            title: e.title || this.untitledBroadcastString,
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            thumbnailImageProps: {
                                src: e.previewImageURL || s.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            channelDisplayName: e.broadcaster.displayName || "",
                            channelLogin: e.broadcaster.login || "",
                            channelLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            channelImageProps: {
                                src: e.broadcaster.profileImageURL || "",
                                alt: "" + e.broadcaster.login
                            },
                            gameTitle: this.shouldShowGame("name"),
                            gameTitleLinkTo: this.getLinkTo(Object(d.c)(this.shouldShowGame("name")), t),
                            gameBoxArtImageProps: {
                                src: this.shouldShowGame("boxArtURL") || s.a.defaultBoxArtURL,
                                alt: this.shouldShowGame("name")
                            },
                            streamType: Object(p.a)(e.type) || c.a.Live,
                            currentViewerCount: e.viewersCount || 0,
                            trackImageLatency: this.props.trackImageLatency,
                            tagListProps: this.props.tagListProps
                        };
                        return i.createElement("div", {
                            className: "stream-thumbnail",
                            "data-target": t ? "" : "directory-first-item",
                            style: {
                                order: t
                            }
                        }, i.createElement(f.Xa, {
                            className: "stream-thumbnail__card",
                            position: f.hb.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, i.createElement(v, a.__assign({}, n, {
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, ""),
                            trackingProps: {
                                category: e.game ? e.game.id : void 0,
                                categoryName: e.game ? e.game.name : void 0,
                                itemPosition: t,
                                rowPosition: 0,
                                channelID: e.broadcaster.id || void 0
                            }
                        }))))
                    }, t
                }(i.Component),
                b = Object(o.compose)(r.a)(k);
            n.d(t, "a", function() {
                return "directory-first-item"
            }), n.d(t, !1, function() {
                return "directory-game__card_container"
            }), n.d(t, !1, function() {
                return k
            }), n.d(t, "b", function() {
                return b
            })
        },
        k5cX: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowGameButton_UnfollowGame"
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
                                    value: "UnfollowGameInput"
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
                                value: "unfollowGame"
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
                                                value: "followedAt"
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
                body: "mutation FollowGameButton_UnfollowGame($input: UnfollowGameInput!) {\nunfollowGame(input: $input) {\nfollow {\nfollowedAt\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "kF1+": function(e, t, n) {},
        kJyr: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryRoot_Directory"
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
                    end: 86
                }
            };
            n.loc.source = {
                body: "query DirectoryRoot_Directory($name: String!) {\ngame(name: $name) {\nid\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "kRI/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            });
            var a, i, r, o = n("mrSG"),
                s = n("/7QA"),
                l = n("3lt/");

            function c(e) {
                s.p.tracking.track(l.SpadeEventType.RecFeedbackClick, o.__assign({}, e))
            }

            function d(e) {
                c({
                    click_step: a.NotInterested,
                    section: r.TwitchHome,
                    item_page: l.PageviewMedium.TwitchHome,
                    feedback_type: null,
                    feedbacked_item_id: null,
                    feedback_action: null,
                    feedback_reason: null,
                    item_name: null,
                    clicked_item_id: e.clickedItemID,
                    item_tracking_id: e.itemTrackingID,
                    item_position: e.itemPosition,
                    row_position: e.rowPosition,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    model_tracking_id: e.modelTrackingID,
                    clicked_content_type: e.clickedContentType
                })
            }

            function u(e) {
                c({
                    section: e.clickStep === a.SettingsChange ? null : r.TwitchHome,
                    item_page: e.clickStep === a.SettingsChange ? l.PageviewMedium.Settings : l.PageviewMedium.TwitchHome,
                    item_name: null,
                    click_step: e.clickStep,
                    feedback_type: e.feedbackType,
                    feedbacked_item_id: e.feedbackedItemID,
                    feedback_action: e.feedbackAction,
                    feedback_reason: e.feedbackReason,
                    clicked_item_id: e.clickedItemID,
                    item_tracking_id: e.itemTrackingID,
                    item_position: e.itemPosition,
                    row_position: e.rowPosition,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    model_tracking_id: e.modelTrackingID,
                    clicked_content_type: e.clickedContentType
                })
            }! function(e) {
                e.NotInterested = "not_interested", e.Close = "close", e.Submit = "submit", e.PostSubmit = "post_submit", e.SettingsChange = "settings_change"
            }(a || (a = {})),
            function(e) {
                e.Add = "add", e.Remove = "remove", e.Undo = "undo", e.Manage = "manage"
            }(i || (i = {})),
            function(e) {
                e.LeftNav = "leftnav", e.Carousel = "carousel", e.TwitchHome = "twitch_home"
            }(r || (r = {}))
        },
        kVMo: function(e, t, n) {},
        lwN9: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Directory_ContentTypeDropdown"
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
                                        value: "product"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                    end: 95
                }
            };
            n.loc.source = {
                body: "query Directory_ContentTypeDropdown($name: String!) {\ngame(name: $name) {\nid\nproduct {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        m493: function(e, t, n) {},
        "mHR/": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "d", function() {
                return o
            });
            var a = function(e) {
                    return "/communities/:encodedCommunityName" === e || "/directory/game/:encodedCommunityName" === e || "/directory/game/:encodedCommunityName/:encodedLanguage" === e
                },
                i = function(e) {
                    return "/directory/game/:encodedCommunityName/clips" === e
                },
                r = function(e) {
                    return "/communities/:encodedCommunityName/details" === e || "/directory/game/:encodedCommunityName/details" === e
                },
                o = function(e) {
                    return "/directory/game/:encodedCommunityName/videos/:filter" === e
                }
        },
        moLQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            });
            var a, i = n("mrSG"),
                r = n("/7QA"),
                o = n("Igt5"),
                s = n("X7a7");

            function l(e, t) {
                return t = t.toLowerCase(), e.directory.tagFilters[t] || []
            }

            function c(e) {
                return e.directory.languageTagFilters
            }! function(e) {
                e.Categories = "browse-categories", e.LiveChannels = "browse-live-channels"
            }(a || (a = {})), r.p.store.registerReducer("directory", function(e, t) {
                switch (void 0 === e && (e = {
                    languageTagFilters: Object(s.a)(),
                    tagFilters: {}
                }), t.type) {
                    case o.a:
                        return i.__assign({}, e, {
                            languageTagFilters: t.languageTagFilters
                        });
                    case o.b:
                        var n = i.__assign({}, e.tagFilters),
                            a = t.categoryName.toLowerCase(),
                            r = n[a];
                        return (void 0 === r || r.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[a] = (n[a] || []).concat([t.addedTag])), i.__assign({}, e, {
                            tagFilters: n
                        });
                    case o.c:
                        var l = t.categoryName.toLowerCase();
                        return e.tagFilters[l] = t.tagFilters.slice(), i.__assign({}, e);
                    case o.d:
                        var c = t.categoryName.toLowerCase();
                        if (void 0 === e.tagFilters[c]) return i.__assign({}, e);
                        var d = e.tagFilters[c].filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return e.tagFilters[c] = d, i.__assign({}, e);
                    default:
                        return e
                }
            })
        },
        mpcK: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("moLQ"),
                i = n("/MKj"),
                r = n("fvjX"),
                o = n("kRBY"),
                s = n("OhOW"),
                l = n("Igt5"),
                c = n("mrSG"),
                d = n("17x9"),
                u = n("q1tI"),
                m = n("/7QA"),
                p = n("ZDlU"),
                g = n("MJbm"),
                h = n("yR8l"),
                f = n("V+GM"),
                v = n("0GkP"),
                k = n("Bk78"),
                b = n("geRD"),
                y = n("NvVO"),
                T = n("MPw5"),
                S = n("2xye"),
                C = n("cTNz"),
                w = n("GnwI"),
                N = n("bUox"),
                I = n("TCeE"),
                _ = n("AZIu"),
                D = n("0Rl0"),
                E = n("rShu"),
                x = n("8/mp"),
                F = n("Uive"),
                O = n("hX9f"),
                L = n("Ue10"),
                P = "directory-container",
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.updateDisplayAdOrder = function() {
                            var e = document.querySelector('[data-target="' + P + '"]'),
                                t = document.querySelector('[data-target="' + O.a + '"]'),
                                n = document.querySelector("#" + C.b.directory.rectangle);
                            if (t && e && n) {
                                var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                                n.style.order !== a && "0" !== a && (n.style.order = a)
                            }
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.updateDisplayAdOrder), this.onRender(), this.updateDisplayAdOrder()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.updateDisplayAdOrder()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.updateDisplayAdOrder)
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        return u.createElement(L.Xa, {
                            flexShrink: 0,
                            "data-target": P,
                            "data-test-selector": "direectory-grid-grid-layout"
                        }, u.createElement(L.Yb, {
                            gutterSize: L.ac.Small,
                            childWidth: L.Zb.Large,
                            placeholderItems: 20
                        }, u.createElement(F.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: C.d.directory,
                            slotID: C.b.directory.rectangle,
                            adSize: C.c.directory.rectangle,
                            "data-a-target": "directory-card-ad-slot",
                            targeting: {
                                pagetype: C.a.games,
                                game: this.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        }), this.props.children), u.createElement(x.a, {
                            enabled: this.props.canLoadMore,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 500
                        }))
                    }, t.prototype.onRender = function() {
                        var e = u.Children.count(this.props.children);
                        this.props.latencyTracking.reportInteractive(e > 12 ? 12 : e)
                    }, t
                }(u.Component),
                j = Object(w.b)("DirectoryGrid")(A);
            var R = Object(i.connect)(function(e) {
                    return {
                        sideNavExpanded: e.ui.sideNavExpanded
                    }
                })(j),
                G = n("oJmH"),
                B = n("oB8h"),
                M = n("5myU"),
                X = n("FpZF"),
                V = n("VW9G"),
                U = n("x/sq"),
                W = n("QV0j"),
                H = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.loading && !this.props.data.game || this.props.data.error) return null;
                        var t = this.props.directoryWidth,
                            n = S.PageviewMedium.Game,
                            a = this.props.data.game && this.props.data.game.streams && this.props.data.game.streams.edges || [];
                        if (t && t > 0) {
                            var i = Object(M.a)(t, 300, 1);
                            if (i - 1 < a.length) {
                                a = a.slice(0, i - 0)
                            }
                        }
                        var r = a.filter(function(e) {
                            return e && e.node && e.node.broadcaster && e.node.broadcaster.login && e.node.broadcaster.id
                        }).map(function(t, a) {
                            if (t && t.node) {
                                var i = t.node,
                                    r = Object(U.a)({
                                        tags: i.tags,
                                        section: _.a.IncategoryChannels,
                                        onClickTag: e.props.addTagFilter,
                                        tagFilters: e.props.tagFilters,
                                        scrollToTop: e.props.scrollToTop
                                    });
                                return u.createElement(O.b, {
                                    directoryName: e.props.directoryName,
                                    directoryType: e.props.directoryType,
                                    streamIndex: a,
                                    streamNode: {
                                        __typename: "Stream",
                                        id: i.id,
                                        title: i.title || "",
                                        viewersCount: i.viewersCount || 0,
                                        previewImageURL: i.previewImageURL || m.a.defaultStreamPreviewURL,
                                        broadcaster: i.broadcaster ? {
                                            __typename: "User",
                                            id: i.broadcaster.id,
                                            login: i.broadcaster.login,
                                            displayName: i.broadcaster.displayName,
                                            roles: null,
                                            profileImageURL: i.broadcaster.profileImageURL || m.a.defaultAvatarURL
                                        } : null,
                                        game: i.game ? {
                                            __typename: "Game",
                                            id: i.game.id,
                                            boxArtURL: i.game.boxArtURL || m.a.defaultBoxArtURL,
                                            name: i.game.name
                                        } : null,
                                        type: Object(W.a)(i.type) || B.a.Live
                                    },
                                    key: i.id,
                                    trackingMedium: n,
                                    trackingContent: S.PageviewContent.LocalLiveChannel,
                                    trackImageLatency: 0 === a,
                                    tagListProps: r
                                })
                            }
                        });
                        return r.length > 0 ? u.createElement(L.Xa, null, u.createElement(V.a, {
                            languageCode: this.props.languageCode,
                            directoryName: this.props.directoryName
                        }), u.createElement(L.Yb, {
                            gutterSize: L.ac.Small,
                            childWidth: L.Zb.Large
                        }, r)) : null
                    }, t
                }(u.Component),
                q = Object(G.compose)(Object(h.a)(X, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                limit: 10,
                                languages: [e.languageCode]
                            }
                        }
                    }
                }), Object(w.b)("DirectoryInternationalSection", {
                    autoReportInteractive: !0
                }))(H),
                z = function(e) {
                    var t = e.game;
                    return (t && t.streams && t.streams.edges || []).filter(function(e) {
                        return e && e.node && e.node.id
                    })
                },
                Q = n("vuN2"),
                $ = n("TJgk"),
                Y = 0,
                J = Object(k.a)(3e5),
                K = Object(Q.a)();
            var Z = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.addTagFilter = function(e) {
                            n.props.addTagFilter(e, decodeURIComponent(n.props.match.params.encodedCommunityName))
                        }, n.onResize = function(e) {
                            e !== n.state.directoryWidth && (clearTimeout(Y), Y = setTimeout(function() {
                                n.setState({
                                    directoryWidth: e
                                })
                            }, 50))
                        }, n.renderPlaceholders = function() {
                            for (var e = [], t = 0; t < 20; t++) e.push(u.createElement(D.a, {
                                key: t
                            }));
                            return e
                        }, n.removeLastTag = function() {
                            var e = decodeURIComponent(n.props.match.params.encodedCommunityName),
                                t = n.props.tagFilters[n.props.tagFilters.length - 1];
                            n.props.removeTagFilter(t, e)
                        }, n.onSlotAdded = function() {
                            n.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(C.b.directory).length && T.a.display(C.b.directory.banner), {
                                    numSlotsAdded: t
                                }
                            })
                        }, n.canLoadMoreGames = function() {
                            var e = n.props.data.game;
                            return !(n.props.data.loading || n.props.data.error || !e || "" === e.id || !e.streams || !e.streams.pageInfo || !e.streams.pageInfo.hasNextPage)
                        }, n.state = {
                            directoryType: E.a.Games,
                            directoryWidth: -1,
                            numSlotsAdded: 0
                        }, n
                    }
                    return c.__extends(t, e), t.prototype.componentWillMount = function() {
                        C.g.addListener(C.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillUnmount = function() {
                        C.g.removeListener(C.e, this.onSlotAdded)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = null;
                        if (this.props.tagFilters.length > I.a ? t = u.createElement(N.a, {
                                errorType: N.b.TooManyTags,
                                onClickRemoveLastTag: this.removeLastTag,
                                tagFilters: this.props.tagFilters
                            }) : this.props.data.loading || this.props.data.game ? this.props.data.error ? t = u.createElement(p.a, {
                                message: Object(m.d)("Error loading data.", "DirectoryGamePage")
                            }) : this.props.data.game && this.props.data.game.streams && this.props.data.game.streams.edges && 0 === this.props.data.game.streams.edges.length && (t = u.createElement(N.a, {
                                errorType: N.b.NoResults,
                                onClickRemoveLastTag: this.removeLastTag,
                                tagFilters: this.props.tagFilters
                            })) : t = u.createElement(p.a, {
                                message: Object(m.d)("Game does not exist", "DirectoryGamePage")
                            }), t) return u.createElement(L.Xa, {
                            padding: 3
                        }, t);
                        var n = null,
                            a = null;
                        if ("en" !== this.props.languageCode) {
                            var i = {
                                color: L.O.Base
                            };
                            a = u.createElement(L.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, u.createElement(L.W, c.__assign({
                                type: L.Sb.H4
                            }, i, {
                                "data-a-target": "international-section-header"
                            }), Object(m.d)("All Channels", "DirectoryInternationalSection"))), this.props.tagFilters.length || this.props.languageTagFilters.length || (n = u.createElement(q, {
                                directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                                directoryType: E.a.Games,
                                directoryWidth: this.state.directoryWidth,
                                languageCode: this.props.languageCode,
                                addTagFilter: this.addTagFilter,
                                tagFilters: this.props.tagFilters,
                                scrollToTop: this.context.scrollToTop
                            }))
                        }
                        var r, o = this.props.data.game,
                            s = z(this.props.data).filter(function(e) {
                                var t = e.node;
                                return t && t.broadcaster && t.broadcaster.login && t.broadcaster.id
                            }).map(function(t, n) {
                                var a = function(e) {
                                    var t = null,
                                        n = e.node;
                                    return n && (t = {
                                        __typename: "Stream",
                                        id: n.id,
                                        title: n.title || "",
                                        viewersCount: n.viewersCount || 0,
                                        previewImageURL: n.previewImageURL || m.a.defaultStreamPreviewURL,
                                        broadcaster: n.broadcaster ? {
                                            __typename: "User",
                                            id: n.broadcaster.id,
                                            login: n.broadcaster.login,
                                            displayName: n.broadcaster.displayName,
                                            roles: null,
                                            profileImageURL: n.broadcaster.profileImageURL
                                        } : null,
                                        game: n.game ? {
                                            __typename: "Game",
                                            id: n.game.id,
                                            boxArtURL: n.game.boxArtURL || m.a.defaultBoxArtURL,
                                            name: n.game.name
                                        } : null,
                                        type: Object(W.a)(n.type) || B.a.Live
                                    }), t
                                }(t);
                                if (a && t.node) return u.createElement(O.b, {
                                    directoryName: decodeURIComponent(e.props.match.params.encodedCommunityName),
                                    directoryType: e.state.directoryType,
                                    streamIndex: n,
                                    streamNode: a,
                                    tagListProps: Object(U.a)({
                                        tags: t && t.node && t.node.tags,
                                        onClickTag: e.addTagFilter,
                                        tagFilters: e.props.tagFilters,
                                        section: _.a.IncategoryChannels,
                                        scrollToTop: e.context.scrollToTop
                                    }),
                                    key: t.node.id,
                                    trackImageLatency: 0 === n
                                })
                            });
                        if (s.length > 0) r = u.createElement(R, {
                            directoryName: o ? o.displayName : "",
                            communityName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            canLoadMore: this.canLoadMoreGames(),
                            loadMore: this.props.loadMore
                        }, s);
                        else if (0 === s.length && this.props.data.loading) {
                            var l = this.renderPlaceholders();
                            r = u.createElement(L.Xa, {
                                flexShrink: 0
                            }, u.createElement(L.Yb, {
                                gutterSize: L.ac.Small,
                                childWidth: L.Zb.Large,
                                placeholderItems: 20
                            }, l))
                        } else r = u.createElement(L.Xa, {
                            display: L.X.Flex,
                            alignItems: L.f.Center,
                            justifyContent: L.Wa.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, u.createElement(L.W, {
                            color: L.O.Alt2,
                            fontSize: L.Ca.Size4,
                            italic: !0
                        }, Object(m.d)("No live channels for this game", "DirectoryGamePage")));
                        return u.createElement(L.Xa, null, u.createElement(L.Xa, {
                            margin: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, n, a, r, u.createElement(g.a, {
                            onResize: this.onResize
                        })))
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || (this.props.latencyTracking.reportInteractive(), this.props.data.game && m.p.setPageTitle(this.props.data.game.displayName))
                    }, t.contextTypes = {
                        scrollToTop: d.func
                    }, t
                }(u.Component),
                ee = Object(r.compose)(Object(h.a)($, {
                    options: function(e) {
                        var t = decodeURIComponent(e.match.params.encodedCommunityName).toLowerCase(),
                            n = e.languageTagFilters.concat(e.tagFilters.map(function(e) {
                                return e.id
                            }));
                        return {
                            fetchPolicy: K() ? J() : "network-only",
                            variables: {
                                name: t,
                                limit: 30,
                                sort: v.a.ViewerCount,
                                tags: n
                            }
                        }
                    },
                    props: function(e) {
                        return c.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: $,
                                    variables: c.__assign({}, e.data.variables, {
                                        cursor: function(e) {
                                            var t = e.game;
                                            if (!t || !t.streams || !t.streams.edges) return null;
                                            var n = t.streams.edges,
                                                a = n[n.length - 5];
                                            return a ? a.cursor : null
                                        }(e.data)
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            game: c.__assign({}, n.game, {
                                                streams: c.__assign({}, n.game && n.game.streams, {
                                                    edges: Object(b.c)(z(e), z(n))
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(w.b)("DirectoryGamePage", {
                    destination: y.a.DirectoryGameIndex
                }), Object(f.a)({
                    location: S.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: S.PageviewDirectoryContentType.Games,
                            game: e.data.game ? e.data.game.displayName : null
                        }
                    }
                }))(Z);
            var te = Object(i.connect)(function(e, t) {
                    return {
                        languageCode: Object(o.b)(e),
                        languagePreferences: Object(s.a)(e),
                        languageTagFilters: Object(a.c)(e),
                        sideNavExpanded: e.ui.sideNavExpanded,
                        tagFilters: Object(a.b)(e, decodeURIComponent(t.match.params.encodedCommunityName))
                    }
                }, function(e) {
                    return Object(r.bindActionCreators)({
                        addTagFilter: l.e,
                        removeTagFilter: l.h
                    }, e)
                })(ee),
                ne = n("X7a7"),
                ae = n("4p7I"),
                ie = n("yoKv"),
                re = n("mLw1"),
                oe = n("ZS2+"),
                se = n("cras"),
                le = n("si2W"),
                ce = n("C29h"),
                de = n("HStj"),
                ue = n("8Ocm"),
                me = (n("yetU"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderFilteredBy = function() {
                            return t.props.selectedContentType !== de.a.Live ? null : t.props.data.game && t.props.data.game.id ? u.createElement(L.Xa, null, u.createElement(L.Xa, {
                                margin: {
                                    left: .5,
                                    top: 1
                                }
                            }, u.createElement(L.W, null, Object(m.d)("Filters", "DirectoryHeader"))), u.createElement(le.a, {
                                categoryID: t.props.data.game.id,
                                categoryName: t.props.directoryName,
                                onAddTagFilter: t.addTagFilter,
                                onRemoveTagFilter: t.removeTagFilter,
                                selectedTags: t.props.directoryTagFilters,
                                tagSearchType: ce.b.StreamTag,
                                section: _.a.IncategoryChannels
                            })) : null
                        }, t.addTagFilter = function(e) {
                            t.props.addTagFilter(e, t.props.directoryName)
                        }, t.removeTagFilter = function(e) {
                            t.props.removeTagFilter(e, t.props.directoryName)
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(L.Cb, {
                            className: "directory-header__filters",
                            display: L.X.Flex,
                            flexWrap: L.Ba.Wrap,
                            padding: {
                                right: 3
                            }
                        }, u.createElement(L.Xa, {
                            margin: {
                                top: 1
                            }
                        }, u.createElement(se.a, {
                            buttonSize: L.D.Large,
                            contentType: this.props.selectedContentType,
                            directoryType: E.a.Games,
                            directoryName: this.props.directoryName
                        })), this.renderFilteredBy())
                    }, t
                }(u.Component)),
                pe = Object(r.compose)(Object(h.a)(ue, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.directoryName
                            }
                        }
                    }
                }))(me);
            var ge = Object(i.connect)(function(e, t) {
                    return {
                        directoryTagFilters: Object(a.b)(e, t.directoryName)
                    }
                }, function(e) {
                    return Object(r.bindActionCreators)({
                        addTagFilter: l.e,
                        removeTagFilter: l.h
                    }, e)
                })(pe),
                he = n("TSYQ"),
                fe = n("1/iK"),
                ve = n("y5D0"),
                ke = n("JcRA"),
                be = n("Jl34"),
                ye = n("y5Wm"),
                Te = n("k5cX"),
                Se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.followClicked = function() {
                            t.props.isLoggedIn ? t.isFollowing ? t.unfollow() : t.follow() : t.props.showLoginModal()
                        }, t.showUnfollowButton = function() {
                            return t.props.isLoggedIn && t.isFollowing
                        }, t.follow = function() {
                            return c.__awaiter(t, void 0, void 0, function() {
                                var e, t = this;
                                return c.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.followGame && this.props.data && this.props.data.game ? (e = c.__assign({}, Object(b.a)({
                                                gameID: this.props.data.game.id
                                            }), {
                                                optimisticResponse: {
                                                    followGame: {
                                                        __typename: "FollowGamePayload",
                                                        game: {
                                                            self: {
                                                                follow: {
                                                                    followedAt: (new Date).toISOString(),
                                                                    __typename: "GameFollow"
                                                                },
                                                                __typename: "GameSelfConnection"
                                                            },
                                                            __typename: "Game"
                                                        }
                                                    }
                                                },
                                                update: function(e, n) {
                                                    var a = n.data.followGame,
                                                        i = e.readQuery({
                                                            query: ye,
                                                            variables: {
                                                                name: t.props.gameName
                                                            }
                                                        });
                                                    i && i.game && i.game.self && (i.game.self.follow = a && a.game && a.game.self && a.game.self.follow, e.writeQuery({
                                                        query: ye,
                                                        variables: {
                                                            name: t.props.gameName
                                                        },
                                                        data: i
                                                    }))
                                                }
                                            }), [4, this.props.followGame(e)]) : [2];
                                        case 1:
                                            return n.sent(), this.track(S.SpadeEventType.GameFollow), [2]
                                    }
                                })
                            })
                        }, t.unfollow = function() {
                            return c.__awaiter(t, void 0, void 0, function() {
                                var e, t = this;
                                return c.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = c.__assign({}, Object(b.a)({
                                                gameID: this.props.data.game.id
                                            }), {
                                                optimisticResponse: {
                                                    unfollowGame: {
                                                        __typename: "UnfollowGamePayload",
                                                        follow: null
                                                    }
                                                },
                                                update: function(e) {
                                                    var n = e.readQuery({
                                                        query: ye,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                    n && n.game && n.game.self && (n.game.self.follow = null, e.writeQuery({
                                                        query: ye,
                                                        variables: {
                                                            name: t.props.gameName
                                                        },
                                                        data: n
                                                    }))
                                                }
                                            }), [4, this.props.unfollowGame(e)]) : [2];
                                        case 1:
                                            return n.sent(), this.track(S.SpadeEventType.GameUnfollow), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        var e = Object(m.d)("Follow", "FollowGameButton"),
                            t = this.props.buttonType,
                            n = t && t === L.F.Hollow ? L.rb.FollowHollow : L.rb.Heart,
                            a = void 0 === this.props.fullWidthButton || this.props.fullWidthButton,
                            i = {};
                        if (a && (i.justifyContent = L.Wa.Center), this.props.isLoggedIn && this.isLoading) return u.createElement(L.Xa, c.__assign({
                            display: L.X.Flex
                        }, i), u.createElement(L.Xa, {
                            alignItems: L.f.Center
                        }, u.createElement(L.gb, {
                            width: 70,
                            height: 30
                        })));
                        var r = this.showUnfollowButton() ? Object(m.d)("Unfollow", "FollowGameButton") : e,
                            o = this.showUnfollowButton() ? "game-directory-unfollow-button" : "game-directory-follow-button",
                            s = this.showUnfollowButton() ? L.rb.Heart : n,
                            l = this.showUnfollowButton() ? L.rb.Unheart : L.rb.Heart,
                            d = this.showUnfollowButton() ? Object(m.d)("Following", "FollowGameButton") : e;
                        return this.props.animatedButton ? u.createElement(ke.a, {
                            ariaLabel: r,
                            "data-a-target": o,
                            "data-test-selector": "follow-game-button-component",
                            icon: s,
                            iconOnHover: l,
                            onClick: this.followClicked,
                            text: d,
                            type: t || L.F.Default,
                            fullWidthButton: a
                        }) : u.createElement(L.z, {
                            ariaLabel: r,
                            "data-a-target": o,
                            "data-test-selector": "follow-game-button-component",
                            icon: s,
                            onClick: this.followClicked,
                            statusAlertIcon: this.props.isLoggedIn ? l : void 0,
                            type: t || L.F.Default,
                            fullWidth: a
                        }, d)
                    }, Object.defineProperty(t.prototype, "isFollowing", {
                        get: function() {
                            return !!(this.props.data && this.props.data.game && this.props.data.game.self && null !== this.props.data.game.self.follow)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isLoading", {
                        get: function() {
                            return !this.props.data || this.props.data.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.track = function(e) {
                        m.p.tracking.track(e, {
                            src: this.props.src,
                            kind: e === S.SpadeEventType.GameFollow ? "follow" : "unfollow",
                            name: this.props.gameName
                        })
                    }, t
                }(u.Component),
                Ce = Object(G.compose)(Object(h.a)(ye, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.gameName
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.gameName
                    }
                }), Object(h.a)(be, {
                    name: "followGame"
                }), Object(h.a)(Te, {
                    name: "unfollowGame"
                }))(Se);
            var we = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(o.f)(e)
                    }
                }, function(e) {
                    return Object(r.bindActionCreators)({
                        showLoginModal: function() {
                            return Object(ve.e)(fe.a.FollowGameButton)
                        }
                    }, e)
                })(Ce),
                Ne = n("0LAi"),
                Ie = n("4HIT"),
                _e = n("7ALk");
            n("Z8yi");
            var De, Ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderDropsAvailable = function() {
                            var e = t.props.data.game;
                            if (e && e.activeDropCampaigns && e.activeDropCampaigns.some(function(e) {
                                    return !!e.applicableChannels && 0 === e.applicableChannels.length
                                })) return u.createElement(L.Xa, {
                                margin: {
                                    bottom: .5
                                },
                                "data-test-selector": "directory-header-new-drops"
                            }, u.createElement(L.W, {
                                color: L.O.Overlay
                            }, Object(m.d)("Offers in-game Drops. <x:link>Learn More.</x:link>", {
                                "x:link": function(e) {
                                    return u.createElement("a", {
                                        href: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops",
                                        className: "directory-header__link",
                                        target: "_blank"
                                    }, e)
                                }
                            }, "drops")))
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        if (this.props.data.game) {
                            var t = null;
                            null !== this.props.data.game.followersCount && (t = "" + function(e) {
                                return Object(m.d)("{followerCount,number} Followers", {
                                    followerCount: e
                                }, "DirectoryHeader")
                            }(this.props.data.game.followersCount)), null !== this.props.data.game.viewersCount && (t = t ? t + " · " + function(e) {
                                return Object(m.d)("{viewerCount,number} Viewers", {
                                    viewerCount: e
                                }, "DirectoryHeader")
                            }(this.props.data.game.viewersCount) : t), e = u.createElement(L.W, {
                                color: L.O.Base,
                                type: L.Sb.P
                            }, t)
                        }
                        var n = !1,
                            a = {
                                height: "100%",
                                position: "absolute",
                                width: "100%",
                                zIndex: -1
                            };
                        this.props.data.game && (this.props.data.game.coverURL ? a.backgroundImage = "url(" + this.props.data.game.coverURL + ")" : this.props.data.game.streams && this.props.data.game.streams.edges && (n = this.props.data.game.streams.edges.some(function(e) {
                            return !!(e && e.node && e.node.previewImageURL) && (a.backgroundImage = "url(" + e.node.previewImageURL + ")", !0)
                        })));
                        var i = he("directory-header-new__banner", {
                                "directory-header-new__banner--blur": n
                            }),
                            r = this.props.data && this.props.data.game && this.props.data.game.displayName,
                            o = this.props.data && this.props.data.game && this.props.data.game.avatarURL;
                        return u.createElement(L.Xa, {
                            position: L.hb.Relative,
                            overflow: L.cb.Hidden
                        }, u.createElement("div", {
                            className: i,
                            style: a,
                            "data-test-selector": "directory-banner-image"
                        }), u.createElement(L.Xa, {
                            className: "directory-header-new__banner-cover",
                            fullHeight: !0,
                            fullWidth: !0,
                            position: L.hb.Absolute,
                            zIndex: L.fc.Below
                        }), u.createElement(L.Xa, {
                            margin: {
                                top: 3,
                                x: 3,
                                bottom: 2
                            },
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, u.createElement(L.Xa, {
                            display: L.X.Flex
                        }, u.createElement(L.Xa, {
                            margin: {
                                right: 2
                            },
                            flexShrink: 1,
                            breakpointMedium: {
                                flexShrink: 0
                            }
                        }, o ? u.createElement(L.Qa, {
                            elevation: 3
                        }, u.createElement(L.S, {
                            className: "directory-header-new__box-image",
                            src: o,
                            alt: r || Object(m.d)("Game Image", "DirectoryHeader"),
                            "data-test-selector": "directory-header-new-avatar-image"
                        })) : u.createElement(L.gb, {
                            width: 130,
                            height: 173
                        })), u.createElement(L.Xa, {
                            display: L.X.Flex,
                            flexDirection: L.Aa.Column,
                            justifyContent: L.Wa.End
                        }, r ? u.createElement(u.Fragment, null, u.createElement(L.W, {
                            color: L.O.Base,
                            type: L.Sb.H1,
                            bold: !0
                        }, r), this.renderDropsAvailable(), u.createElement(L.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, e), this.renderTags()) : this.renderPlaceholders(), u.createElement(L.Xa, {
                            display: L.X.InlineFlex
                        }, u.createElement(we, {
                            animatedButton: !0,
                            fullWidthButton: !1,
                            gameName: this.props.directoryName,
                            src: "directory"
                        }))))))
                    }, t.prototype.renderPlaceholders = function() {
                        return u.createElement(u.Fragment, null, u.createElement(L.Xa, {
                            margin: {
                                bottom: 1,
                                top: .5
                            }
                        }, u.createElement(L.gb, {
                            width: 300,
                            height: 50
                        })), u.createElement(L.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(L.gb, {
                            width: 200,
                            height: 15
                        })), u.createElement(L.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(L.Xa, {
                            display: L.X.InlineBlock,
                            margin: {
                                right: .5
                            }
                        }, u.createElement(L.gb, {
                            width: 50,
                            height: 15
                        })), u.createElement(L.Xa, {
                            display: L.X.InlineBlock
                        }, u.createElement(L.gb, {
                            width: 50,
                            height: 15
                        }))))
                    }, t.prototype.renderTags = function() {
                        var e = this.props.data.game;
                        return !e || !e.tags || e.tags.length <= 0 ? null : u.createElement(L.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(Ne.a, {
                            tags: e.tags,
                            linkPath: Ie.a.DirectoryTag,
                            style: L.Nb.Default
                        }))
                    }, t
                }(u.Component),
                xe = Object(G.compose)(Object(h.a)(_e, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.directoryName
                            }
                        }
                    }
                }), Object(w.b)("TagsDirectoryBanner", {
                    autoReportInteractive: !0
                }))(Ee),
                Fe = n("Bh3T"),
                Oe = n("JoTo"),
                Le = n("cnlr"),
                Pe = n("y5I9"),
                Ae = n("mHR/"),
                je = n("kJyr"),
                Re = oe.a.wrap(function() {
                    return n.e(132).then(n.bind(null, "3f6U"))
                }, "DirectoryGameClipsPage"),
                Ge = oe.a.wrap(function() {
                    return n.e(131).then(n.bind(null, "N7a1"))
                }, "DirectoryGameDetailsPage"),
                Be = oe.a.wrap(function() {
                    return n.e(130).then(n.bind(null, "TH8Y"))
                }, "DirectoryGameVideosPage"),
                Me = oe.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "mpcK"))
                }, "DirectoryGamePage");
            ! function(e) {
                e.CLIPS = "clips-scroller", e.DEFAULT = "directory-root-scroller", e.GAME = "game-scroller"
            }(De || (De = {}));
            var Xe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderAdBanner = function() {
                            return Object(Ae.c)(t.props.match.path) && t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.game ? u.createElement(F.a, {
                                injectStyles: {
                                    textAlign: "center",
                                    marginBottom: 20,
                                    marginTop: 20
                                },
                                adUnit: C.d.directory,
                                slotID: C.b.directory.banner,
                                adSize: C.c.directory.banner,
                                "data-a-target": "directory-banner-ad-slot",
                                targeting: {
                                    pagetype: C.a.games,
                                    game: t.props.data.game.displayName
                                },
                                autoEnable: !1
                            }) : null
                        }, t.getContentType = function() {
                            return Object(Ae.a)(t.props.match.path) ? de.a.Clips : Object(Ae.b)(t.props.match.path) ? de.a.GameDetails : Object(Ae.d)(t.props.match.path) ? de.a.Videos : de.a.Live
                        }, t.getScrollerName = function() {
                            var e = De.DEFAULT;
                            return Object(Ae.a)(t.props.match.path) ? e = De.CLIPS : Object(Ae.c)(t.props.match.path) && (e = De.GAME), e
                        }, t.setTagFilters = function(e, n) {
                            var a = [],
                                i = [];
                            n ? (a = e.languageTagFilters, i = e.tagFilters) : (a = t.getLocationStateLanguageTagFilters(e), i = t.getLocationStateTagFilters(e));
                            var r = decodeURIComponent(t.props.match.params.encodedCommunityName);
                            Object(Pe.b)(e.tagFilters, i) && t.props.changeTagFilters(i, r), Object(Pe.a)(e.languageTagFilters, a) && t.props.replaceLanguageTags(a)
                        }, t.updateHistory = function(e, n) {
                            if (void 0 === n && (n = !1), Object(Pe.b)(e.tagFilters, t.getLocationStateTagFilters(e)) || Object(Pe.a)(e.languageTagFilters, t.getLocationStateLanguageTagFilters(e))) {
                                var a = e.tagFilters.length + e.languageTagFilters.length;
                                t.props.history[n ? "replace" : "push"]({
                                    pathname: e.location.pathname,
                                    search: a > 0 ? "?tl=" + a : void 0,
                                    state: {
                                        languageTagFilters: e.languageTagFilters,
                                        tagFilters: e.tagFilters
                                    }
                                })
                            }
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setTagFilters(this.props, !0), this.updateHistory(this.props, !0)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.match.path,
                            n = e.match.path;
                        t !== n ? this.setTagFilters(e, !0) : this.props.location.search !== e.location.search && this.setTagFilters(e), (Object(Pe.b)(this.props.tagFilters, e.tagFilters) || Object(Pe.a)(this.props.languageTagFilters, e.languageTagFilters)) && this.updateHistory(e, t !== n)
                    }, t.prototype.render = function() {
                        var e = decodeURIComponent(this.props.match.params.encodedCommunityName);
                        return u.createElement(L.Xa, {
                            "data-a-target": this.getScrollerName()
                        }, u.createElement(Oe.a, null, u.createElement(Le.a, null)), u.createElement(Fe.b, {
                            suppressScrollX: !0,
                            addPaddingWhenPlayerIsPersisting: !0
                        }), u.createElement(xe, {
                            directoryName: e
                        }), this.renderAdBanner(), Object(Ae.c)(this.props.match.path) && u.createElement(ge, {
                            directoryName: e,
                            selectedContentType: this.getContentType()
                        }), u.createElement(ie.a, null, u.createElement(ae.a, {
                            path: "/communities/:encodedCommunityName/details",
                            render: this.redirectToMainDirectory
                        }), u.createElement(ae.a, {
                            path: "/communities/:encodedCommunityName/:encodedLanguage",
                            render: this.redirectToMainDirectory
                        }), u.createElement(ae.a, {
                            path: "/communities/:encodedCommunityName",
                            render: this.redirectToMainDirectory
                        }), u.createElement(ae.a, {
                            path: "/directory/game/:encodedCommunityName/clips",
                            component: Re
                        }), u.createElement(ae.a, {
                            path: "/directory/game/:encodedCommunityName/details",
                            component: Ge
                        }), u.createElement(ae.a, {
                            path: "/directory/game/:encodedCommunityName/videos/:filter",
                            component: Be
                        }), u.createElement(ae.a, {
                            path: "/directory/game/:encodedCommunityName",
                            component: Me
                        })))
                    }, t.prototype.redirectToMainDirectory = function() {
                        return u.createElement(re.a, {
                            path: "/",
                            to: "/directory"
                        })
                    }, t.prototype.getLocationStateTagFilters = function(e) {
                        return e.location.state && e.location.state.tagFilters || []
                    }, t.prototype.getLocationStateLanguageTagFilters = function(e) {
                        return e.location.state && e.location.state.languageTagFilters || []
                    }, t
                }(u.Component),
                Ve = Object(r.compose)(Object(h.a)(je, {
                    options: function(e) {
                        return {
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName).toLowerCase()
                            }
                        }
                    }
                }))(Xe);
            var Ue = Object(i.connect)(function(e, t) {
                var n = decodeURIComponent(t.match.params.encodedCommunityName);
                return {
                    languageTagFilters: Object(a.c)(e),
                    tagFilters: Object(a.b)(e, n)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    changeTagFilters: l.f,
                    replaceLanguageTags: ne.b
                }, e)
            })(Ve);
            n.d(t, "DirectoryGamePage", function() {
                return te
            }), n.d(t, "DirectoryRootPage", function() {
                return Ue
            })
        },
        oJov: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return i.createElement(o.Xa, a.__assign({
                        className: "drops-badge",
                        position: o.hb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.gc)(e)), i.createElement(o.Vb, {
                        direction: o.Xb.Top,
                        align: o.Wb.Right,
                        label: Object(r.d)("Offers in-game Drops", "DropsBadge")
                    }, i.createElement(o.Cb, {
                        className: "drops-badge__drops-icon",
                        position: o.hb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.cb.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.fc.Default
                    }, i.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, i.createElement(o.qb, {
                        asset: o.rb.Drops
                    })))))
                }),
                l = n("0LAi"),
                c = new Set(["alt", "src", "srcSet", "sizes", "onError", "onLoad", "refHandler"]);

            function d(e) {
                for (var t = {}, n = 0, a = Object.keys(e); n < a.length; n++) {
                    var i = a[n];
                    c.has(i) && (t[i] = e[i])
                }
                return t
            }
            var u = function(e) {
                var t;
                return e.placeholder ? i.createElement(i.Fragment, null, i.createElement(o.Xa, {
                    margin: {
                        bottom: .5
                    }
                }, i.createElement(o.o, {
                    ratio: o.p.Aspect3x4
                }, i.createElement(o.gb, null))), i.createElement(o.W, null, i.createElement(o.gb, {
                    width: 150
                })), i.createElement(o.W, {
                    fontSize: o.Ca.Size7
                }, i.createElement(o.gb, {
                    width: 100
                }))) : (t = i.createElement(i.Fragment, null, i.createElement(o.Xa, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, i.createElement(o.I, a.__assign({
                    aspect: o.p.BoxArt,
                    borderRadius: o.x.Medium
                }, d(e)))), i.createElement(o.H, null, i.createElement(o.Xa, {
                    display: o.X.Flex
                }, i.createElement(o.Xa, {
                    "data-test-selector": "tw-card-title",
                    "data-a-target": "tw-card-title",
                    flexGrow: 1,
                    flexShrink: 1,
                    margin: {
                        top: .5
                    },
                    ellipsis: !0
                }, i.createElement(o.W, {
                    className: "tw-box-art-card__title",
                    type: o.Sb.H3,
                    fontSize: o.Ca.Size5,
                    lineHeight: o.Ya.Body,
                    ellipsis: !0
                }, e.title)), e.contextualCardActionProps && i.createElement(o.Xa, {
                    margin: {
                        top: .5
                    },
                    flexGrow: 0,
                    flexShrink: 0
                }, i.createElement(e.contextualCardActionProps.component, a.__assign({}, e.contextualCardActionProps.props)))), i.createElement(o.W, {
                    color: o.O.Alt2,
                    ellipsis: !0
                }, e.info))), (e.linkTo || e.onClick || e.disabled) && (t = i.createElement(o.T, {
                    className: "tw-box-art-card__link " + (e.disabled ? "tw-box-art-card__link--disabled" : ""),
                    "data-a-target": "tw-box-art-card-link",
                    disabled: e.disabled,
                    download: e.download,
                    linkTo: e.linkTo,
                    ariaLabel: e.title,
                    blurAfterClick: e.blurAfterClick,
                    onClick: e.onClick,
                    renderLink: e.renderLink,
                    targetBlank: e.targetBlank,
                    tabIndex: e.tabIndex
                }, t)), i.createElement("div", a.__assign({
                    className: "tw-box-art-card"
                }, Object(o.gc)(e)), i.createElement(o.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && i.createElement(o.Xa, {
                    margin: {
                        top: .5
                    }
                }, i.createElement(l.a, a.__assign({}, e.tagListProps, {
                    tagNumberLimit: 3
                }))), !0 === e.showDropsBadge && i.createElement(s, null)))
            };
            n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
            })
        },
        odjZ: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("fvjX"),
                s = n("yR8l"),
                l = n("GnwI"),
                c = n("Ue10"),
                d = (n("BIFG"), n("BEfv"));
            ! function(e) {
                e.Bounce = "animated-tag--bounce", e.NoBounce = "animated-tag--no-bounce"
            }(a || (a = {}));
            var u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null;
                        if (this.props.getTagFromGQL) {
                            if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.contentTag) return null;
                            var t = this.props.data.contentTag;
                            e = r.createElement(c.Ia, {
                                label: t.localizedName,
                                onClick: this.props.onClickForGQLTag && this.props.onClickForGQLTag.bind(this, t),
                                selected: !0,
                                size: c.Sa.Large
                            })
                        } else this.props.formTagProps && (e = r.createElement(c.Ia, i.__assign({}, this.props.formTagProps)));
                        return r.createElement("div", {
                            className: a.NoBounce,
                            "data-tag-filter": this.props.tagID
                        }, e)
                    }, t.prototype.reportInteractive = function() {
                        this.props.getTagFromGQL && this.props.data && (!this.props.data.loading || this.props.data.error) ? this.props.latencyTracking.reportInteractive() : this.props.getTagFromGQL || this.props.latencyTracking.reportInteractive()
                    }, t
                }(r.Component),
                m = Object(o.compose)(Object(s.a)(d, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.tagID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.getTagFromGQL
                    }
                }), Object(l.b)("AnimatedTag"))(u);
            n.d(t, "b", function() {
                return a
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return m
            })
        },
        rShu: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Games = "GAMES", e.Communities = "COMMUNITIES"
                }(a || (a = {}))
        },
        si2W: function(e, t, n) {
            "use strict";
            var a, i = n("/MKj"),
                r = n("fvjX"),
                o = n("X7a7"),
                s = n("moLQ"),
                l = n("mrSG"),
                c = n("q1tI"),
                d = n("wIs1"),
                u = n("/7QA"),
                m = n("GnwI"),
                p = n("odjZ"),
                g = n("C29h"),
                h = n("AZIu"),
                f = n("4HIT"),
                v = n("Ue10"),
                k = [f.a.Popular, f.a.PopularTag, "/directory/game/:encodedCommunityName"];
            ! function(e) {
                e.Tag = "tag-filter", e.TagAddButton = "tag-add-button-selector", e.TagAddButtonWrapper = "tag-add-button-wrapper-selector", e.TagSearchWrapper = "tag-search-wrapper-selector"
            }(a || (a = {}));
            var b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isShowingTagSearch: !1
                        }, t.renderLanguageTags = function() {
                            if (!k.includes(t.props.match.path)) return null;
                            var e = t.props.selectedTags.map(function(e) {
                                    return e.id
                                }),
                                n = t.props.languageTagFilters.slice();
                            return (n = n.filter(function(t) {
                                return !e.includes(t)
                            })).map(function(e) {
                                return c.createElement(v.Xa, {
                                    key: "language-tag-filter-" + e,
                                    margin: .5
                                }, c.createElement(p.a, {
                                    "data-test-selector": a.Tag,
                                    getTagFromGQL: !0,
                                    onClickForGQLTag: t.removeTagOnClick,
                                    tagID: e
                                }))
                            })
                        }, t.renderTags = function() {
                            return t.props.selectedTags.map(function(e) {
                                return c.createElement(v.Xa, {
                                    key: "tag-filter-" + e.id,
                                    margin: .5
                                }, c.createElement(p.a, {
                                    "data-test-selector": a.Tag,
                                    formTagProps: {
                                        label: e.localizedName || e.tagName,
                                        onClick: t.removeTagOnClick.bind(t, e),
                                        selected: !0,
                                        size: v.Sa.Large
                                    },
                                    tagID: e.id
                                }))
                            })
                        }, t.renderAddTags = function() {
                            return c.createElement(c.Fragment, null, c.createElement(v.Xa, {
                                "data-test-selector": a.TagSearchWrapper,
                                display: t.state.isShowingTagSearch ? v.X.Block : v.X.Hide,
                                margin: {
                                    right: 1
                                }
                            }, t.renderTagSearch()), c.createElement(v.Xa, {
                                "data-test-selector": a.TagAddButtonWrapper,
                                display: t.state.isShowingTagSearch ? v.X.Hide : v.X.Block,
                                margin: {
                                    left: .5,
                                    y: .5
                                }
                            }, c.createElement(v.Ia, {
                                "data-test-selector": a.TagAddButton,
                                label: Object(u.d)("Add Filter", "TagFilter"),
                                onClick: t.showTagSearch,
                                size: v.Sa.Large
                            })))
                        }, t.renderTagSearch = function() {
                            if (t.props.tagSearchType === g.b.StreamTag) {
                                var e = {
                                    autoFocus: t.state.isShowingTagSearch,
                                    categoryID: t.props.categoryID,
                                    categoryName: t.props.categoryName,
                                    inline: !0,
                                    inputSize: v.Sa.Large,
                                    onTagClick: t.addTagOnClick,
                                    type: t.props.tagSearchType,
                                    section: t.props.section,
                                    selectedTags: t.props.selectedTags,
                                    numSelectedTags: t.props.selectedTags.length
                                };
                                return c.createElement(g.a, l.__assign({}, e))
                            }
                            var n = {
                                autoFocus: t.state.isShowingTagSearch,
                                inline: !0,
                                inputSize: v.Sa.Large,
                                onTagClick: t.addTagOnClick,
                                type: t.props.tagSearchType,
                                section: t.props.section,
                                selectedTags: t.props.selectedTags,
                                numSelectedTags: t.props.selectedTags.length
                            };
                            return c.createElement(g.a, l.__assign({}, n))
                        }, t.showTagSearch = function() {
                            t.setState({
                                isShowingTagSearch: !0
                            })
                        }, t.addTagOnClick = function(e) {
                            e.isLanguageTag && t.props.updateLanguageTags(e.id, !0), t.props.onAddTagFilter(e)
                        }, t.removeTagOnClick = function(e) {
                            t.props.match.params.tagID === e.id && t.removeTagFromPath(), e.isLanguageTag && t.props.updateLanguageTags(e.id, !1);
                            var n = t.props.selectedTags.findIndex(function(t) {
                                    return t.id === e.id
                                }),
                                a = {
                                    section: t.props.section,
                                    tagPosition: n,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !0
                                };
                            Object(h.b)(a), t.props.onRemoveTagFilter(e)
                        }, t.removeTagFromPath = function() {
                            t.props.match.path === f.a.DirectoryTag ? u.p.history.push(f.a.Games) : t.props.match.path === f.a.PopularTag && u.p.history.push(f.a.Popular)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(v.Xa, {
                            display: v.X.Flex,
                            flexWrap: v.Ba.Wrap,
                            "data-a-target": "tags-filter-dropdown"
                        }, this.renderLanguageTags(), this.renderTags(), this.renderAddTags())
                    }, t
                }(c.Component),
                y = Object(r.compose)(Object(m.b)("TagFilter", {
                    autoReportInteractive: !0
                }), d.a)(b);
            var T = Object(i.connect)(function(e) {
                return {
                    languageTagFilters: Object(s.c)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    updateLanguageTags: o.c
                }, e)
            })(y);
            n.d(t, "a", function() {
                return T
            })
        },
        ugtu: function(e, t, n) {
            "use strict";
            n.d(t, "j", function() {
                return s
            }), n.d(t, "k", function() {
                return l
            }), n.d(t, "l", function() {
                return c
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "h", function() {
                return m
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "i", function() {
                return g
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "g", function() {
                return v
            }), n.d(t, "a", function() {
                return k
            });
            var a = n("q1tI"),
                i = n("/7QA"),
                r = n("GxR5"),
                o = n("Ue10");

            function s(e) {
                return a.createElement(o.W, {
                    type: o.Sb.Strong
                }, e)
            }

            function l(e, t) {
                return a.createElement(o.U, {
                    to: t,
                    targetBlank: !0
                }, e)
            }

            function c(e, t) {
                return a.createElement(o.U, {
                    onClick: t
                }, e)
            }

            function d() {
                return Object(i.d)("<x:link>Forgot your username</x:link>?", {
                    "x:link": function(e) {
                        return l(e, r.b)
                    }
                }, "ServerMessage")
            }

            function u() {
                return Object(i.d)("<x:link>Forgot your password</x:link>?", {
                    "x:link": function(e) {
                        return l(e, Object(r.e)())
                    }
                }, "ServerMessage")
            }

            function m() {
                return Object(i.d)("Please <x:link>reset your password</x:link>.", {
                    "x:link": function(e) {
                        return l(e, Object(r.e)())
                    }
                }, "ServerMessage")
            }

            function p() {
                return Object(i.d)("Please <x:link>contact support</x:link> for assistance.", {
                    "x:link": function(e) {
                        return l(e, r.a)
                    }
                }, "ServerMessage")
            }

            function g() {
                return Object(i.d)("To learn more, please read <x:link>this article</x:link>.", {
                    "x:link": function(e) {
                        return l(e, r.c)
                    }
                }, "ServerMessage")
            }

            function h(e) {
                return Object(i.d)("Want to <x:click>create a new account</x:click>?", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }

            function f(e) {
                return Object(i.d)("Want to <x:click>log in</x:click> instead?", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }

            function v(e) {
                return Object(i.d)("If you need a Twitch account, you can <x:click>create one here</x:click>.", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }

            function k(e) {
                return Object(i.d)("If you want to use an existing Twitch ID, you can <x:click>connect it here</x:click>.", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }
        },
        vDRX: function(e, t, n) {},
        vSJR: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("u5aL"),
                s = n("N0BP"),
                l = n("Ue10");
            ! function(e) {
                e.DropdownInsideClickDetector = "dropdown-inside-click-detector", e.DropdownWrapper = "dropdown-wrapper"
            }(a || (a = {}));
            var c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isOpen: !!t.props.openByDefault
                    }, t.handleOnClickOut = function() {
                        t.hideDropdown()
                    }, t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                isOpen: !e.isOpen,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.isOpen)
                        })
                    }, t.hideDropdown = function() {
                        t.setState({
                            isOpen: !1
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!0)
                        })
                    }, t.handleInsideDropdownClick = function() {
                        t.hideDropdown()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.children;
                    return this.props.hideDropdownOnInsideClick && (e = r.createElement("div", {
                        "data-test-selector": a.DropdownInsideClickDetector,
                        onClick: this.handleInsideDropdownClick
                    }, e)), r.createElement(o.a, {
                        onClickOut: this.handleOnClickOut
                    }, r.createElement(l.Cb, i.__assign({
                        background: this.state.isOpen ? l.r.Base : void 0,
                        borderRadius: l.x.Large,
                        className: "inline-dropdown",
                        elevation: this.state.isOpen ? 3 : void 0,
                        padding: .5,
                        position: l.hb.Relative
                    }, Object(s.a)(this.props)), r.createElement("div", {
                        className: "inline-dropdown__button-wrapper"
                    }, r.createElement(l.z, {
                        blurAfterClick: !0,
                        dropdown: !0,
                        onClick: this.handleButtonClick,
                        size: l.D.Large,
                        type: l.F.Hollow
                    }, this.props.buttonLabel)), r.createElement(l.Cb, {
                        attachLeft: !0,
                        background: l.r.Base,
                        borderRadius: l.x.Large,
                        "data-test-selector": a.DropdownWrapper,
                        display: this.state.isOpen ? l.X.Block : l.X.Hide,
                        elevation: 3,
                        fullWidth: !0,
                        padding: {
                            y: 1
                        },
                        position: l.hb.Absolute,
                        zIndex: l.fc.Above
                    }, e)))
                }, t.prototype.toggleDropdown = function(e) {
                    void 0 === e && (e = !this.state.isOpen), this.setState({
                        isOpen: e
                    })
                }, t
            }(r.Component);
            n.d(t, "a", function() {
                return c
            })
        },
        vuN2: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a, i = n("/7QA"),
                r = n("D7An");

            function o() {
                var e = null;
                return function() {
                    return null === e && (e = i.p.experiments.getAssignment(r.b.DirectoryTTL) === a.Experiment), e
                }
            }! function(e) {
                e.Control = "control", e.Experiment = "experiment"
            }(a || (a = {}))
        },
        wqI2: function(e, t, n) {},
        "x/sq": function(e, t, n) {
            "use strict";
            var a = n("/7QA"),
                i = n("odjZ"),
                r = {},
                o = n("AZIu"),
                s = n("X7a7");
            n.d(t, "a", function() {
                return l
            });
            var l = function(e) {
                var t = e.tags,
                    n = e.section,
                    l = e.onClickTag,
                    c = e.tagFilters,
                    d = void 0 === c ? [] : c,
                    u = e.scrollToTop;
                if (t) {
                    return {
                        tags: t,
                        callback: function(e) {
                            u && u(), e.isLanguageTag && a.p.store.dispatch(Object(s.c)(e.id, !0));
                            var t = d.every(function(t) {
                                    return t.id !== e.id
                                }),
                                c = Object(s.a)().every(function(t) {
                                    return t !== e.id
                                });
                            if (t && c) {
                                l && l(e);
                                var m = {
                                    section: n,
                                    tagPosition: d.length,
                                    searchEvent: !1,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(o.b)(m)
                            } else ! function(e) {
                                var t = document.querySelector('[data-tag-filter="' + e + '"]');
                                if (t) {
                                    var n = r[e];
                                    n && clearTimeout(n), t.classList.contains(i.b.NoBounce) && (t.classList.remove(i.b.NoBounce), t.classList.add(i.b.Bounce));
                                    var a = setTimeout(function() {
                                        t.classList.remove(i.b.Bounce), t.classList.add(i.b.NoBounce), delete r[e]
                                    }, 750);
                                    r[e] = a
                                }
                            }(e.id)
                        }
                    }
                }
            }
        },
        x75U: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            });
            var a = n("mrSG"),
                i = n("17x9"),
                r = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                l = n("kRI/"),
                c = {
                    cardIDtoItemTrackingIDMap: i.object,
                    trackTitleClick: i.func,
                    trackTitleImpression: i.func,
                    trackImpression: i.func,
                    trackClick: i.func,
                    trackRecFeedbackHideClick: i.func,
                    trackRecFeedbackClickStep: i.func,
                    trackRecFeedbackClickStepPostSubmit: i.func
                };

            function d() {
                return function(e) {
                    return function(t) {
                        function n(e) {
                            var n = t.call(this, e) || this;
                            return n.feedbackDataMap = {}, n.getChildContext = function() {
                                return {
                                    trackTitleClick: n.trackTitleClick,
                                    trackTitleImpression: n.trackTitleImpression,
                                    trackRecFeedbackHideClick: n.trackRecFeedbackHideClick,
                                    trackRecFeedbackClickStep: n.trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: n.trackRecFeedbackClickStepPostSubmit,
                                    trackImpression: n.trackImpression,
                                    trackClick: n.trackClick,
                                    cardIDtoItemTrackingIDMap: n.state.cardIDtoItemTrackingIDMap
                                }
                            }, n.mapShelfCardsToRequestIDs = function(e, t, n) {
                                return void 0 === n && (n = {}), e.reduce(function(e, n) {
                                    return n.node && !e[n.node.id] && (e[n.node.id] = t), e
                                }, n)
                            }, n.trackTitleImpression = function(e) {
                                var t = Object(s.g)(e.title),
                                    a = t.reasonType,
                                    i = t.reasonTarget,
                                    r = t.rowName,
                                    l = Object(s.f)(),
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: l,
                                        itemPosition: null,
                                        reasonType: a,
                                        reasonTarget: i,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: r,
                                        rowPosition: n.props.position,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.i)(c, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: l
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.g)(e.title),
                                    a = t.reasonType,
                                    i = t.reasonTarget,
                                    r = t.reasonTargetType,
                                    l = t.rowName,
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: a,
                                        reasonTarget: i,
                                        reasonTargetType: r,
                                        rowName: l,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.h)(c, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, a, i) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var r = Object(s.f)(),
                                        o = Object(s.g)(e.title),
                                        l = o.reasonType,
                                        c = o.reasonTarget,
                                        d = o.reasonTargetType,
                                        u = o.rowName,
                                        m = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: r,
                                            itemPosition: a,
                                            reasonType: l,
                                            reasonTarget: c,
                                            reasonTargetType: d,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: u,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(i),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.i)(m), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = r, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, a, i, r, o) {
                                if (t.node) {
                                    var l = n.state,
                                        c = l.cardIDtoRequestIDMap,
                                        d = l.cardIDtoItemTrackingIDMap,
                                        u = Object(s.g)(e.title),
                                        m = u.reasonType,
                                        p = u.reasonTarget,
                                        g = u.reasonTargetType,
                                        h = u.rowName,
                                        f = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: d[t.node.id] || null,
                                            requestID: c[t.node.id],
                                            itemPosition: a,
                                            rowPosition: n.props.position,
                                            reasonType: m,
                                            reasonTarget: p,
                                            reasonTargetType: g,
                                            rowName: h,
                                            tagID: void 0 !== o ? o : null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(r),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.h)(f, i)
                                }
                            }, n.trackRecFeedbackHideClick = function(e, t, i) {
                                var r, o = n.state.cardIDtoItemTrackingIDMap,
                                    c = Object(s.g)(e.title),
                                    d = c.reasonType,
                                    u = c.reasonTarget,
                                    m = c.reasonTargetType,
                                    p = c.rowName,
                                    g = Object(s.e)(t),
                                    h = g.itemID,
                                    f = g.contentType,
                                    v = h || e.id,
                                    k = {
                                        itemTrackingID: t && t.node ? o[t.node.id] : null,
                                        itemPosition: i,
                                        rowPosition: n.props.position,
                                        reasonType: d,
                                        reasonTarget: u,
                                        reasonTargetType: m,
                                        rowName: p,
                                        modelTrackingID: t ? t.trackingID : null,
                                        clickedContentType: f || s.b.Shelf,
                                        clickedItemID: h || e.id
                                    };
                                n.feedbackDataMap = a.__assign({}, n.feedbackDataMap, ((r = {})[v] = k, r)), Object(l.c)(k)
                            }, n.trackRecFeedbackClickStep = function(e, t) {
                                var i, r = a.__assign({}, n.feedbackDataMap[e], {
                                    clickStep: t.clickStep,
                                    feedbackAction: t.feedbackAction,
                                    feedbackType: t.feedbackType,
                                    feedbackedItemID: t.feedbackedItemID,
                                    feedbackReason: t.feedbackReason
                                });
                                n.feedbackDataMap = a.__assign({}, n.feedbackDataMap, ((i = {})[e] = r, i)), Object(l.d)(r)
                            }, n.trackRecFeedbackClickStepPostSubmit = function(e, t) {
                                Object(l.d)(a.__assign({}, n.feedbackDataMap[e], {
                                    clickStep: l.a.PostSubmit,
                                    feedbackAction: t
                                }))
                            }, n.state = {
                                cardIDtoItemTrackingIDMap: {},
                                cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {}),
                                headerImpressionID: null,
                                headerRequestID: e.requestID
                            }, n
                        }
                        return a.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                            var t = this,
                                n = e.shelf,
                                a = e.requestID;
                            n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                                return {
                                    cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], a, e.cardIDtoRequestIDMap)
                                }
                            })
                        }, n.prototype.render = function() {
                            var t = Object(s.g)(this.props.shelf.title).rowName,
                                n = {
                                    trackTitleClick: this.getChildContext().trackTitleClick,
                                    trackTitleImpression: this.getChildContext().trackTitleImpression,
                                    trackRecFeedbackHideClick: this.getChildContext().trackRecFeedbackHideClick,
                                    trackImpression: this.getChildContext().trackImpression,
                                    trackClick: this.getChildContext().trackClick,
                                    trackRecFeedbackClickStep: this.getChildContext().trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: this.getChildContext().trackRecFeedbackClickStepPostSubmit,
                                    shelfTrackingProps: {
                                        item_tracking_id: this.state.headerImpressionID,
                                        item_position: null,
                                        row_name: t,
                                        row_position: this.props.position
                                    }
                                };
                            return r.createElement(e, a.__assign({}, this.props, n))
                        }, n.childContextTypes = c, n
                    }(r.Component)
                }
            }
        },
        y5I9: function(e, t, n) {
            "use strict";

            function a(e, t) {
                return e.length !== t.length || e.some(function(e, n) {
                    return t[n] !== e
                })
            }

            function i(e, t) {
                var n = e || [],
                    a = t || [];
                return n.length !== a.length || n.some(function(e, t) {
                    return e.id !== a[t].id
                })
            }
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            })
        },
        y5Wm: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowGameButton_Game"
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
                                                        value: "followedAt"
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
                    end: 127
                }
            };
            n.loc.source = {
                body: "query FollowGameButton_Game($name: String!) {\ngame(name: $name) {\nid\nname\nself {\nfollow {\nfollowedAt\n}\n}\n}\ncurrentUser {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        yI6f: function(e, t, n) {
            "use strict";
            var a, i, r, o, s, l, c = n("/7QA"),
                d = n("f00E"),
                u = n("2xye"),
                m = n("3sMy"),
                p = function() {
                    return Object(d.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(i || (i = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game", e.Shelf = "shelf"
            }(r || (r = {})),
            function(e) {
                e.Card = "card", e.Header = "header"
            }(o || (o = {})),
            function(e) {
                e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
            }(s || (s = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(l || (l = {}));
            var g = ((a = {})[m.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: r.Live,
                    rowName: e
                }
            }, a[m.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: r.Game,
                    rowName: e
                }
            }, a[m.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: r.Game,
                    rowName: e
                }
            }, a[m.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: r.Live,
                    rowName: e
                }
            }, a[m.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: r.Game,
                    rowName: e
                }
            }, a[m.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: r.Game,
                    rowName: e
                }
            }, a[m.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, a[m.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: r.Clip,
                    rowName: e
                }
            }, a[m.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: r.Vod,
                    rowName: e
                }
            }, a);

            function h(e) {
                var t = e.key;
                return g[t] ? g[t](t, e) : {
                    reasonType: null,
                    reasonTarget: "",
                    reasonTargetType: null,
                    rowName: t
                }
            }

            function f(e, t) {
                var n = v(e.contentEdge),
                    a = n.itemID,
                    r = n.channelID,
                    o = n.category,
                    s = n.contentType;
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: i.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: a,
                    channel_id: null === r ? null : Number(r),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: u.PageviewMedium.TwitchHome,
                    row_position: e.rowPosition,
                    content_type: s,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    tag_set: e.tagSet,
                    tag_streamer_set: e.tagStreamerSet,
                    filtered: e.filtered,
                    category: o,
                    tag_id: e.tagID
                }
            }

            function v(e) {
                var t, n = null,
                    a = null,
                    i = null,
                    o = e && e.node && e.node.id || "";
                if (e) switch (e.node && e.node.__typename) {
                    case "Stream":
                        n = (t = e.node).broadcaster && t.broadcaster.id, a = r.Live, o = String(t.broadcaster && t.broadcaster.id), i = t.game ? t.game.id : null;
                        break;
                    case "Clip":
                        n = (t = e.node).broadcaster && t.broadcaster.id, a = r.Clip, i = t.game ? t.game.id : null;
                        break;
                    case "Video":
                        n = (t = e.node).owner && t.owner.id, a = r.Vod, i = t.game ? t.game.id : null;
                        break;
                    case "Game":
                        t = e.node, n = null, a = r.Game, i = t.id
                }
                return {
                    itemID: o,
                    channelID: n,
                    category: i,
                    contentType: a
                }
            }

            function k(e, t) {
                var n = f(e, t);
                c.o.track(u.SpadeEventType.ItemClick, n)
            }

            function b(e, t) {
                var n = f(e, t);
                c.o.track(u.SpadeEventType.ItemDisplay, n)
            }

            function y(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                c.o.track(u.SpadeEventType.RecRequestClient, t)
            }
            var T = n("x75U"),
                S = n("A65o");
            n.d(t, "f", function() {
                return p
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "g", function() {
                return h
            }), n.d(t, "e", function() {
                return v
            }), n.d(t, "h", function() {
                return k
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, "j", function() {
                return y
            }), n.d(t, !1, function() {
                return T.a
            }), n.d(t, "k", function() {
                return T.b
            }), n.d(t, !1, function() {
                return S.a
            })
        },
        yetU: function(e, t, n) {},
        zrz1: function(e, t, n) {}
    }
]);