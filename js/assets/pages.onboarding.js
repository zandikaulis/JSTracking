(window.webpackJsonp = window.webpackJsonp || []).push([
    [78], {
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
                r = n("/7QA"),
                i = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = r.o.getLastPageview();
                    return e && e.location || i.PageviewLocation.None
                },
                l = function(e) {
                    r.o.trackItemSectionClick({
                        carousel_content: i.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: i.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: i.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    r.o.trackItemSectionClick({
                        carousel_content: i.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: i.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: i.TwitchDataType.Video,
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
                                                        return [4, r.p.apollo.client.query({
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
                                        return i.TwitchDataType.Game
                                    }), d = l.map(function() {
                                        return null
                                    }), r.o.trackItemSectionLoad({
                                        carousel_content: i.PageviewContent.PreviewCardGameBalloonGame,
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
        "1mcJ": function(e, t, n) {},
        "2mE7": function(e, t, n) {},
        "3H/7": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunityCard_CommunityDetails"
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
                                value: "type"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DirectoryType"
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
                                value: "directory"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    }
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "viewersCount"
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
                    end: 172
                }
            };
            n.loc.source = {
                body: "query CommunityCard_CommunityDetails($name: String! $type: DirectoryType!) {\ndirectory(name: $name type: $type) {\nid\nname\navatarURL(width: 285 height: 380)\nviewersCount\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
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
        "4ErZ": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowGameCard_FollowGame"
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
                    end: 134
                }
            };
            n.loc.source = {
                body: "mutation FollowGameCard_FollowGame($input: FollowGameInput!) {\nfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5NSO": function(e, t, n) {},
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return l
            });
            var a, r, i = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case a.Second:
                        return Object(i.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case a.Minute:
                        return Object(i.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case a.Hour:
                        return Object(i.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case a.Day:
                        return Object(i.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case a.Week:
                        return Object(i.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case a.Month:
                        return Object(i.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case a.Second:
                        return Object(i.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case a.Minute:
                        return Object(i.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case a.Hour:
                        return Object(i.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case a.Day:
                        return Object(i.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case a.Week:
                        return Object(i.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case a.Month:
                        return Object(i.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = r.Humanized), t === r.ClockAuto && (t = e >= 3600 ? r.ClockHMS : r.ClockMS), t) {
                    case r.ClockHM:
                    case r.ClockHMS:
                        n = a.Hour;
                        break;
                    case r.ClockMS:
                        n = a.Minute
                }
                var l = 2;
                t === r.ClockHMS && (l = 3);
                var d = function(e, t) {
                        void 0 === t && (t = a.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === a.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === a.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === a.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === a.Day ? n : n.days <= 26 || t === a.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== r.Humanized && t !== r.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                    }), t === r.Humanized) return function(e) {
                    return e.months ? o(a.Month, e.months) : e.weeks && e.days ? o(a.Week, e.weeks) + " " + o(a.Day, e.days) : e.weeks ? o(a.Week, e.weeks) : e.days && e.hours ? o(a.Day, e.days) + " " + o(a.Hour, e.hours) : e.days ? o(a.Day, e.days) : e.hours && e.minutes ? o(a.Hour, e.hours) + " " + o(a.Minute, e.minutes) : e.hours ? o(a.Hour, e.hours) : e.minutes && e.seconds ? o(a.Minute, e.minutes) + " " + o(a.Second, e.seconds) : e.minutes ? o(a.Minute, e.minutes) : o(a.Second, e.seconds || 0)
                }(d);
                if (t === r.HumanizedShort) return function(e) {
                    return e.months ? s(a.Month, e.months) : e.weeks && e.days ? "" + s(a.Week, e.weeks) + s(a.Day, e.days) : e.weeks ? s(a.Week, e.weeks) : e.days && e.hours ? "" + s(a.Day, e.days) + s(a.Hour, e.hours) : e.days ? s(a.Day, e.days) : e.hours && e.minutes ? "" + s(a.Hour, e.hours) + s(a.Minute, e.minutes) : e.hours ? s(a.Hour, e.hours) : e.minutes && e.seconds ? "" + s(a.Minute, e.minutes) + s(a.Second, e.seconds) : e.minutes ? s(a.Minute, e.minutes) : s(a.Second, e.seconds || 0)
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
                var g = d.seconds || 0,
                    h = d.minutes || 0,
                    f = d.hours || 0;
                switch (t) {
                    case r.ClockHM:
                    case r.ClockHMS:
                        var v = (p ? c(f, 2) : f) + m + c(h, 2);
                        return t === r.ClockHMS && (v += m + c(g, 2)), v;
                    case r.ClockMS:
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
            }(r || (r = {}))
        },
        "7sjZ": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n("rShu"),
                r = function(e) {
                    return e === a.a.Communities ? "COMMUNITY" : "GAME"
                }
        },
        "80G/": function(e, t, n) {},
        "8n14": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("D7An"),
                s = n("TDc0"),
                l = n("/MKj"),
                c = n("yR8l"),
                d = n("V+GM"),
                u = n("f00E"),
                m = n("NvVO"),
                p = n("2xye"),
                g = n("kRBY"),
                h = n("GnwI");
            var f = n("H/lO"),
                v = n("NZDK"),
                y = n("9kXc"),
                k = n("roU9"),
                b = n("jkql"),
                C = n("oJmH"),
                w = n("8/mp"),
                S = n("HAa/"),
                _ = n("Uive"),
                T = n("cTNz"),
                E = n("7sjZ"),
                I = n("0OKo"),
                x = n("kduP"),
                N = n("yziQ"),
                D = n("Ue10"),
                O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return null === this.props.game ? r.createElement(D.Wa, {
                            "data-test-selector": "community-card__placeholder",
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(D.Wa, {
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(D.o, {
                            ratio: D.p.BoxArt
                        }, r.createElement(D.db, null)))) : this.props.followGameCardOptions ? r.createElement(D.Wa, {
                            key: this.props.followGameCardOptions.category + "-game-" + this.props.game.id
                        }, r.createElement(N.a, {
                            "data-a-target": "follow-game-card-" + this.props.game.id,
                            "data-test-selector": re,
                            info: this.props.game.viewersCount ? Object(i.d)("{viewerCount,number} viewers", {
                                viewerCount: this.props.game.viewersCount
                            }, "CommunitySelectionFollowCard") : "",
                            title: this.props.game.name,
                            imageAlt: this.props.game.name,
                            imageSrc: this.props.game.boxArtURL,
                            onFollow: this.props.followGameCardOptions.onFollow,
                            onUnfollow: this.props.followGameCardOptions.onUnfollow,
                            categoryChange: this.props.followGameCardOptions.categoryChange
                        })) : r.createElement(D.Wa, {
                            key: "game-" + this.props.game.id,
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(D.y, {
                            title: this.props.game.name,
                            info: this.props.game.viewersCount ? Object(i.d)("{viewerCount,number} viewers", {
                                viewerCount: this.props.game.viewersCount
                            }, "CommunitySelectionBoxCard") : "",
                            linkTo: this.props.isCommunity ? Object(x.a)(this.props.game.name) : Object(x.c)(this.props.game.name),
                            alt: this.props.game.name + " cover image",
                            src: this.props.game.boxArtURL
                        }))
                    }, t
                }(r.Component),
                G = n("rShu"),
                P = n("3H/7"),
                L = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null;
                        if (this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory) e = {
                            id: this.props.data.directory.id,
                            name: this.props.data.directory.name,
                            boxArtURL: this.props.data.directory.avatarURL,
                            viewersCount: this.props.data.directory.viewersCount
                        };
                        else if (null === this.props.data.directory) return null;
                        return r.createElement(O, {
                            game: e,
                            isCommunity: this.props.directoryType === G.a.Communities,
                            followGameCardOptions: this.props.followGameCardOptions
                        })
                    }, t = a.__decorate([Object(c.a)(P, {
                        options: function(e) {
                            return {
                                variables: {
                                    name: e.name,
                                    type: Object(E.a)(e.directoryType)
                                }
                            }
                        }
                    }), Object(I.a)("CommunityCard")], t)
                }(r.Component),
                A = "community-card-row__ad",
                F = 6,
                W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            adDisplayed: !1
                        }, t.renderCards = function(e) {
                            return t.props.withAd ? t.renderCardGridWithAdSlot() : t.renderCardsWithoutAdSlot(e)
                        }, t.renderCardsWithoutAdSlot = function(e) {
                            var n = t.renderCardsFromProps(),
                                a = 1 === n.length ? 1 : 0;
                            return r.createElement(D.Wa, {
                                padding: {
                                    x: 1,
                                    top: 2
                                }
                            }, r.createElement(D.Tb, {
                                gutterSize: D.Vb.Small,
                                childWidth: t.props.cardSize,
                                placeholderItems: t.props.placeholderItems ? t.props.placeholderItems : a,
                                noWrap: e
                            }, n))
                        }, t.renderCardGridWithAdSlot = function() {
                            var e = r.createElement(D.Wa, {
                                    key: "ad",
                                    "data-test-selector": A,
                                    display: D.X.Flex,
                                    flexGrow: 1,
                                    justifyContent: D.Va.Center,
                                    padding: {
                                        bottom: t.state.adDisplayed ? 2 : 0,
                                        left: t.state.adDisplayed ? 1 : 0
                                    }
                                }, r.createElement(_.a, {
                                    adSize: T.c.anonFront.rect,
                                    adUnit: T.d.frontpage,
                                    slotID: T.b.anonFront.rect,
                                    targeting: {
                                        pagetype: T.a.frontpage
                                    },
                                    slotRendered: t.onSlotRendered,
                                    autoEnable: !1
                                })),
                                n = t.renderCardsFromProps().map(function(e, t) {
                                    return r.createElement(D.P, {
                                        key: "game-" + t.toString(),
                                        cols: 2
                                    }, e)
                                });
                            return n.splice(4, 0, e), r.createElement(D.Wa, {
                                padding: {
                                    x: 1
                                }
                            }, r.createElement(D.Ia, null, n))
                        }, t.renderCardsFromProps = function() {
                            if (t.props.games) {
                                var e = t.props.games;
                                return t.props.withAd && !t.state.adDisplayed && (e = e.slice(0, F)), e.map(function(e, n) {
                                    return r.createElement(O, {
                                        key: "community-card-" + e.id + "-" + n,
                                        game: e,
                                        isCommunity: t.props.directoryType === G.a.Communities,
                                        followGameCardOptions: t.props.followGameCardOptions
                                    })
                                })
                            }
                            if (t.props.names) {
                                var n = t.props.names;
                                return t.props.withAd && !t.state.adDisplayed && (n = n.slice(0, F)), n.map(function(e, n) {
                                    return r.createElement(L, {
                                        key: "community-card-" + e + "-" + n,
                                        name: e,
                                        directoryType: t.props.directoryType,
                                        followGameCardOptions: t.props.followGameCardOptions
                                    })
                                })
                            }
                            throw new Error("Need to pass either games or names into CommunityCardRow")
                        }, t.onSlotRendered = function() {
                            t.state.adDisplayed || t.setState({
                                adDisplayed: !0
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.isScrollable ? r.createElement(w.b, null, this.renderCards(!0)) : this.renderCards(!1)
                    }, t
                }(r.Component),
                j = Object(h.b)("CommunityCardRow")(W),
                R = n("ZbA5"),
                M = n("oB8h"),
                B = n("17x9"),
                U = n("AO3T"),
                V = n("hX9f"),
                H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.impressionEventFired = !1, t.setRef = function(e) {
                            return t.element = e
                        }, t.isVisible = function(e) {
                            if (null !== t.element) {
                                var n = t.element.getBoundingClientRect();
                                return n.left < e.right && n.right > e.left
                            }
                            return !1
                        }, t.trackImpression = function() {
                            var e = {
                                channel_id: t.props.streamNode.id,
                                action: U.a.Impression,
                                parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                                content_index: t.props.streamIndex
                            };
                            Object(U.c)(e)
                        }, t.trackClickEvent = function() {
                            var e = {
                                channel_id: t.props.streamNode.id,
                                action: U.a.Click,
                                parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                                content_index: t.props.streamIndex
                            };
                            Object(U.c)(e)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.context.registerReceiver;
                        e ? this.unregister = e(this) : i.k.warn("<StreamThumbnailWithTrackingComponent /> initialized missing a <ScrollableArea /> provider")
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return r.createElement("div", {
                            onClick: this.trackClickEvent
                        }, r.createElement(D.Wa, {
                            refDelegate: this.setRef
                        }, r.createElement(V.b, {
                            key: this.props.streamIndex,
                            directoryName: this.props.directoryName,
                            directoryType: this.props.directoryType,
                            streamIndex: this.props.streamIndex,
                            streamNode: this.props.streamNode,
                            trackingMedium: this.props.trackingMedium
                        })))
                    }, t.prototype.checkVisible = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                return !this.impressionEventFired && this.isVisible(e) && (this.trackImpression(), this.impressionEventFired = !0), [2]
                            })
                        })
                    }, t.contextTypes = {
                        registerReceiver: B.func
                    }, t
                }(r.Component),
                z = "community-stream__placeholder",
                q = "community-stream",
                X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderStream = function() {
                            return t.props.data ? r.createElement(D.Wa, {
                                "data-test-selector": q,
                                position: D.eb.Relative
                            }, r.createElement(D.Wa, {
                                padding: .5,
                                position: D.eb.Absolute,
                                zIndex: D.ac.Above
                            }, r.createElement(R.a, {
                                type: M.a.Live
                            })), r.createElement(H, {
                                key: t.props.data.id,
                                trackingMedium: t.props.trackingMedium,
                                directoryName: t.props.directoryName,
                                directoryType: t.props.directoryType,
                                streamIndex: t.props.index,
                                streamNode: t.props.data
                            })) : r.createElement(D.Wa, {
                                "data-test-selector": z,
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(D.Wa, {
                                margin: {
                                    bottom: .5
                                }
                            }, r.createElement(D.o, {
                                ratio: D.p.Aspect16x9
                            }, r.createElement(D.db, null))), r.createElement(D.W, null, r.createElement(D.db, {
                                width: 150
                            })), r.createElement(D.W, {
                                fontSize: D.Ba.Size7
                            }, r.createElement(D.db, {
                                width: 100
                            })))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(D.Wa, null, this.renderStream())
                    }, t
                }(r.Component),
                Y = n("chV5"),
                Q = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = "/directory";
                        if (this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory && this.props.data.directory.streams && this.props.data.directory.streams.edges) {
                            t = this.props.data.directory.name;
                            var n = this.props.data.directory.streams.edges.filter(function(e) {
                                var t = e.node;
                                return t && t.broadcaster && t.broadcaster.login
                            }).slice(0, 1).map(function(e) {
                                return e.node
                            });
                            n.length && (e = n[0])
                        }
                        return r.createElement(X, {
                            data: e,
                            index: this.props.index,
                            directoryName: t,
                            directoryType: this.props.directoryType,
                            trackingMedium: this.props.trackingMedium
                        })
                    }, t = a.__decorate([Object(c.a)(Y, {
                        options: function(e) {
                            return {
                                fetchPolicy: "network-only",
                                variables: {
                                    name: e.name,
                                    limit: e.limit ? e.limit : 3,
                                    type: Object(E.a)(e.directoryType)
                                }
                            }
                        }
                    }), Object(I.a)("CommunityStream")], t)
                }(r.Component),
                Z = "community-streams-row__ad",
                $ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            adDisplayed: !1
                        }, t.renderStreamGridWithAdSlot = function() {
                            var e = r.createElement(D.Wa, {
                                    key: "ad",
                                    "data-test-selector": Z,
                                    display: D.X.Flex,
                                    flexGrow: 1,
                                    justifyContent: D.Va.Center,
                                    padding: {
                                        bottom: t.state.adDisplayed ? 2 : 0,
                                        left: t.state.adDisplayed ? .5 : 0
                                    }
                                }, r.createElement(_.a, {
                                    adSize: T.c.anonFront.rect,
                                    adUnit: T.d.frontpage,
                                    slotID: T.b.anonFront.rect,
                                    targeting: {
                                        pagetype: T.a.frontpage
                                    },
                                    slotRendered: t.onSlotRendered,
                                    autoEnable: !1
                                })),
                                n = t.renderStreams().map(function(e, t) {
                                    return r.createElement(D.P, {
                                        key: "stream-" + t.toString(),
                                        cols: 4
                                    }, e)
                                });
                            return n.splice(2, 0, e), r.createElement(D.Wa, {
                                padding: {
                                    x: 1
                                }
                            }, r.createElement(D.Ia, {
                                gutterSize: D.Ja.Medium
                            }, n))
                        }, t.renderStreams = function() {
                            if (t.props.data) {
                                var e = t.props.data;
                                return t.props.withAd && t.state.adDisplayed && (e = e.slice(0, 2)), e.map(function(e, n) {
                                    return r.createElement(X, {
                                        key: e.id,
                                        data: e,
                                        index: n,
                                        directoryName: e.title,
                                        directoryType: t.props.directoryType,
                                        trackingMedium: t.props.trackingMedium
                                    })
                                })
                            }
                            if (t.props.names) {
                                var n = t.props.names;
                                return t.props.withAd && t.state.adDisplayed && (n = n.slice(0, 2)), n.map(function(e, n) {
                                    return r.createElement(Q, {
                                        key: e,
                                        name: e,
                                        index: n,
                                        directoryType: t.props.directoryType,
                                        trackingMedium: t.props.trackingMedium
                                    })
                                })
                            }
                            throw new Error("Need to pass either data or names into CommunityStreamsRow")
                        }, t.onSlotRendered = function() {
                            t.state.adDisplayed || t.setState({
                                adDisplayed: !0
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.withAd) return this.renderStreamGridWithAdSlot();
                        var e = this.props.data && 1 === this.props.data.length || this.props.names && 1 === this.props.names.length ? 1 : 0;
                        return r.createElement(D.Wa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(D.Tb, {
                            gutterSize: D.Vb.Small,
                            childWidth: D.Ub.Large,
                            placeholderItems: e,
                            noWrap: !0
                        }, this.renderStreams()))
                    }, t
                }(r.Component),
                J = Object(h.b)("CommunityStreamsRow")($),
                K = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFollow = function() {
                            t.props.onFollowCategoryChange(t.props.category, !0)
                        }, t.onUnfollow = function() {
                            t.props.onFollowCategoryChange(t.props.category, !1)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.props.isFollowingAllGamesInCategory) return r.createElement(D.A, {
                            ariaLabel: Object(i.d)("Unfollow All", "OnboardingFollowCategory"),
                            "data-test-selector": "onboarding-follow-category-button-component",
                            icon: D.ob.Heart,
                            onClick: this.onUnfollow,
                            statusAlertIcon: D.ob.Unheart
                        });
                        var e = Object(i.d)("Follow All", "OnboardingFollowCategory");
                        return r.createElement(D.z, {
                            icon: D.ob.Heart,
                            ariaLabel: e,
                            "data-test-selector": "onboarding-follow-category-button-component",
                            onClick: this.onFollow
                        }, e)
                    }, t
                }(r.Component),
                ee = 3,
                te = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.renderCategoryContent = function() {
                            if (n.props.withStreams) {
                                var e = n.props.data.games.slice(0, ee);
                                return r.createElement(J, {
                                    names: e,
                                    withAd: n.props.withAd,
                                    directoryType: G.a.Games,
                                    trackingMedium: n.props.trackingMedium
                                })
                            }
                            var t = void 0;
                            return n.props.withStreams || n.props.withBoxArtGameCards || (t = {
                                category: n.props.data.name,
                                categoryChange: n.state.categoryChange,
                                onFollow: n.props.onFollow,
                                onUnfollow: n.props.onUnfollow
                            }), r.createElement(j, {
                                names: n.props.data.games,
                                directoryType: G.a.Games,
                                cardSize: n.props.cardSize,
                                withAd: n.props.withAd,
                                followGameCardOptions: t,
                                isScrollable: !0
                            })
                        }, n.onFollowCategoryChange = function(e, t) {
                            n.setState({
                                categoryChange: {
                                    timestampMs: Date.now(),
                                    shouldFollow: t,
                                    category: e
                                }
                            })
                        };
                        var a = i.p.experiments.getAssignment(o.b.WebOnboardingFollowCategories);
                        return n.state = {
                            categoryChange: null,
                            isFollowCategoriesExperimentEnabled: a === s.c.ENABLED
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(D.Wa, {
                            "data-test-selector": "community-category",
                            flexShrink: 0
                        }, r.createElement(D.Wa, {
                            alignItems: D.f.Center,
                            display: D.X.Flex,
                            flexWrap: D.Aa.NoWrap
                        }, r.createElement(D.Wa, {
                            margin: {
                                x: 1,
                                bottom: .5
                            }
                        }, r.createElement(D.W, {
                            "data-test-selector": "community-category__title",
                            color: D.O.Base,
                            fontSize: D.Ba.Size3,
                            bold: !0
                        }, function(e) {
                            switch (e) {
                                case "MOBA":
                                    return Object(i.d)("MOBA", "format-category");
                                case "Survival":
                                    return Object(i.d)("Survival", "format-category");
                                case "Sandbox":
                                    return Object(i.d)("Sandbox", "format-category");
                                case "Strategy":
                                    return Object(i.d)("Strategy", "format-category");
                                case "FPS":
                                    return Object(i.d)("FPS", "format-category");
                                case "Open World":
                                    return Object(i.d)("Open World", "format-category");
                                case "MMORPG":
                                    return Object(i.d)("MMORPG", "format-category");
                                case "Science Fiction":
                                    return Object(i.d)("Science Fiction", "format-category");
                                case "Hack and Slash":
                                    return Object(i.d)("Hack and Slash", "format-category");
                                case "Sports":
                                    return Object(i.d)("Sports", "format-category");
                                case "Platform":
                                    return Object(i.d)("Platform", "format-category");
                                case "Indie":
                                    return Object(i.d)("Indie", "format-category");
                                case "RPG":
                                    return Object(i.d)("RPG", "format-category");
                                case "Stealth":
                                    return Object(i.d)("Stealth", "format-category");
                                case "Horror":
                                    return Object(i.d)("Horror", "format-category");
                                case "Third-Person Shooter":
                                    return Object(i.d)("Third-Person Shooter", "format-category");
                                case "Fighting":
                                    return Object(i.d)("Fighting", "format-category");
                                case "Historical":
                                    return Object(i.d)("Historical", "format-category");
                                case "Music":
                                    return Object(i.d)("Music", "format-category");
                                case "Simulator":
                                    return Object(i.d)("Simulator", "format-category");
                                case "Adventure":
                                    return Object(i.d)("Adventure", "format-category");
                                case "Anime":
                                    return Object(i.d)("Anime", "format-category");
                                case "Party":
                                    return Object(i.d)("Party", "format-category");
                                case "Rogue-like":
                                    return Object(i.d)("Rogue-like", "format-category");
                                case "Racing":
                                    return Object(i.d)("Racing", "format-category");
                                case "Puzzle":
                                    return Object(i.d)("Puzzle", "format-category");
                                default:
                                    return e
                            }
                        }(this.props.data.name))), this.state.isFollowCategoriesExperimentEnabled && !this.props.withStreams && !this.props.withBoxArtGameCards && r.createElement(D.xb, {
                            margin: {
                                left: 2
                            }
                        }, r.createElement(K, {
                            category: this.props.data,
                            onFollowCategoryChange: this.onFollowCategoryChange,
                            isFollowingAllGamesInCategory: this.props.isFollowingAllGamesInCategory
                        }))), r.createElement(D.Wa, null, r.createElement(D.Oa, {
                            flexGrow: 1
                        }, this.renderCategoryContent())))
                    }, t
                }(r.Component),
                ne = Object(h.b)("CommunityCategory", {
                    autoReportInteractive: !0
                })(te),
                ae = n("R+eK"),
                re = (n("JJ+Z"), "onboarding_game"),
                ie = 100,
                oe = 500,
                se = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.doneInitialRedirectCheck = !1, n.gameToCategories = {}, n.onFollow = function(e) {
                            n.props.data.updateQuery(function(t) {
                                if (t.currentUser && t.currentUser.followedGames && t.currentUser.followedGames.nodes) {
                                    var n = {
                                            id: e,
                                            name: e,
                                            __typename: "Game"
                                        },
                                        r = t.currentUser.followedGames.nodes.slice();
                                    return r.push(n), a.__assign({}, t, {
                                        currentUser: a.__assign({}, t.currentUser, {
                                            followedGames: a.__assign({}, t.currentUser.followedGames, {
                                                nodes: r
                                            })
                                        })
                                    })
                                }
                                return t
                            }), Object(U.e)(p.SpadeEventType.GameFollow, e)
                        }, n.onUnfollow = function(e) {
                            n.props.data.updateQuery(function(t) {
                                return t.currentUser && t.currentUser.followedGames && t.currentUser.followedGames.nodes ? a.__assign({}, t, {
                                    currentUser: a.__assign({}, t.currentUser, {
                                        followedGames: a.__assign({}, t.currentUser.followedGames, {
                                            nodes: t.currentUser.followedGames.nodes.filter(function(t) {
                                                return t.name !== e
                                            })
                                        })
                                    })
                                }) : t
                            }), Object(U.e)(p.SpadeEventType.GameUnfollow, e)
                        }, n.completeAndRedirectToForYou = function() {
                            Object(U.d)();
                            var e = "" === location.search ? "?tt_medium=onboarding" : location.search + "&tt_medium=onboarding";
                            window.location.assign("/" + e)
                        }, n.moveNextToChannelSurfing = function() {
                            i.p.history.push("/hi/surf" + location.search)
                        }, n.redirectToFrontPage = function() {
                            window.location.assign("/" + location.search)
                        }, n.onGameInputChange = function(e) {
                            e.persist(), n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.inputTimer = setTimeout(function() {
                                n.props.onSearchChange(e.target.value), n.inputTimer = 0
                            }, oe)
                        }, n.userFollowedGamesDataLoaded = function(e) {
                            return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                        };
                        var r = i.p.experiments.getAssignment(o.b.WebOnboarding),
                            l = i.p.experiments.getAssignment(o.b.WebOnboardingChannelSurfing);
                        return n.state = {
                            inOnboardingExperiment: Object(s.e)(r),
                            inChannelSurfingExperiment: Object(s.d)(r, l)
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldRedirect(this.props, this.state) && this.redirectToFrontPage(), i.p.setPageTitle(Object(i.d)("Welcome", "CommunitySelectionPage"))
                    }, t.prototype.componentWillUpdate = function(e, t) {
                        this.shouldRedirect(e, t) && this.redirectToFrontPage(), (!this.props.categoryData && e.categoryData || this.props.categoryData && e.categoryData && this.props.categoryData.length !== e.categoryData.length) && this.mapGamesToCategories(e.categoryData)
                    }, t.prototype.componentDidUpdate = function() {
                        this.userFollowedGamesDataLoaded(this.props) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.userFollowedGamesDataLoaded(this.props) && this.state.inOnboardingExperiment ? r.createElement(D.xb, {
                            className: "community-selection-page",
                            "data-a-target": "community-selection-page",
                            "data-test-selector": "onboarding-community-selection",
                            background: D.r.Alt2,
                            display: D.X.Flex,
                            flexDirection: D.Z.Column,
                            fullHeight: !0
                        }, r.createElement(D.xb, {
                            background: D.r.Alt,
                            display: D.X.Flex,
                            alignItems: D.f.Center,
                            padding: {
                                x: 1,
                                y: 1
                            },
                            breakpointMedium: {
                                padding: {
                                    x: 2
                                }
                            },
                            justifyContent: D.Va.Between,
                            flexShrink: 0,
                            fullWidth: !0,
                            borderBottom: !0
                        }, r.createElement(D.Wa, {
                            className: "community-selection-page__search",
                            margin: {
                                left: 1
                            },
                            flexShrink: 1,
                            attachLeft: !0
                        }, r.createElement(D.qb, {
                            id: "onboarding-community-selection__search",
                            "data-a-target": "onboarding-community-selection__search",
                            onChange: this.onGameInputChange,
                            placeholder: Object(i.d)("Search Games", "CommunitySelectionPage"),
                            spellCheck: !1
                        })), this.renderTitleText(), this.renderCTA()), r.createElement(D.hb, {
                            size: D.jb.Small,
                            value: this.calculateProgress()
                        }), r.createElement(w.b, null, r.createElement(D.xb, {
                            background: D.r.Alt2,
                            overflow: D.Za.Hidden,
                            padding: {
                                left: 1,
                                y: 2
                            },
                            fullHeight: !0
                        }, this.renderGameCardsOrCategories(), r.createElement(w.a, {
                            enabled: this.props.categoriesInfiniteScrollEnabled,
                            loadMore: this.props.onLoadMoreCategories,
                            orientation: S.b.Down,
                            pixelThreshold: 20
                        })))) : this.props.data.error ? (i.k.warn("Data Error in Onboarding Community Selection", this.props.data.error), r.createElement(D.Wa, {
                            display: D.X.Flex
                        }, r.createElement(D.W, {
                            fontSize: D.Ba.Size5,
                            color: D.O.Alt
                        }, Object(i.d)("Hmm...having trouble loading right now.", "CommunitySelectionPage")))) : null
                    }, t.prototype.getNumFollowedGames = function() {
                        return this.props.data.currentUser.followedGames.nodes.length
                    }, t.prototype.mapGamesToCategories = function(e) {
                        var t = this;
                        this.gameToCategories = {}, e.forEach(function(e) {
                            e.games.forEach(function(n) {
                                t.gameToCategories[n] || (t.gameToCategories[n] = []), t.gameToCategories[n].push(e.name)
                            })
                        })
                    }, t.prototype.getCategoryFollowCounts = function() {
                        var e = this,
                            t = {};
                        return this.props.data.currentUser.followedGames.nodes.forEach(function(n) {
                            e.gameToCategories[n.name] && e.gameToCategories[n.name].forEach(function(e) {
                                t[e] || (t[e] = 0), t[e]++
                            })
                        }), t
                    }, t.prototype.calculateProgress = function() {
                        return Math.min(1 + this.getNumFollowedGames() / 3 * 99, 100)
                    }, t.prototype.shouldRedirect = function(e, t) {
                        return !(!this.userFollowedGamesDataLoaded(e) || !(!1 === t.inOnboardingExperiment || !this.doneInitialRedirectCheck && !e.data.currentUser || e.data.currentUser.followedGames.nodes.length >= 10)) && (this.doneInitialRedirectCheck = !0, !0)
                    }, t.prototype.renderTitleText = function() {
                        return r.createElement(D.Wa, {
                            display: D.X.Flex,
                            alignItems: D.f.Center,
                            flexDirection: D.Z.Column,
                            flexShrink: 1
                        }, r.createElement(D.Wa, {
                            margin: {
                                top: .5,
                                x: 1
                            }
                        }, r.createElement(D.W, {
                            color: D.O.Alt,
                            fontSize: D.Ba.Size5,
                            breakpointLarge: {
                                fontSize: D.Ba.Size4
                            },
                            breakpointExtraExtraLarge: {
                                fontSize: D.Ba.Size3
                            }
                        }, Object(i.d)("First, pick three or more you’d like to watch.", "CommunitySelectionPage"))), r.createElement(D.Wa, {
                            margin: {
                                y: .5
                            },
                            display: D.X.Hide,
                            breakpointMedium: {
                                display: D.X.Block
                            }
                        }, r.createElement(D.W, {
                            color: D.O.Alt2,
                            fontSize: D.Ba.Size6,
                            breakpointLarge: {
                                fontSize: D.Ba.Size5
                            },
                            breakpointExtraExtraLarge: {
                                fontSize: D.Ba.Size4
                            }
                        }, Object(i.d)("We have tons of games, hobbies, and activities being streamed right now.", "CommunitySelectionPage"))))
                    }, t.prototype.renderCTA = function() {
                        return r.createElement(D.Wa, {
                            margin: {
                                right: 1
                            },
                            attachRight: !0
                        }, r.createElement(D.z, {
                            size: D.D.Large,
                            "data-test-selector": "onboarding_cta",
                            disabled: this.getNumFollowedGames() < 3,
                            onClick: this.state.inChannelSurfingExperiment ? this.moveNextToChannelSurfing : this.completeAndRedirectToForYou
                        }, this.state.inChannelSurfingExperiment ? Object(i.d)("Next", "CommunitySelectionPage") : Object(i.d)("Done", "CommunitySelectionPage")))
                    }, t.prototype.renderGameCardsOrCategories = function() {
                        var e = this;
                        if (this.props.gameData) {
                            var t = {
                                onFollow: this.onFollow,
                                onUnfollow: this.onUnfollow
                            };
                            return r.createElement(j, {
                                games: this.props.gameData,
                                directoryType: G.a.Games,
                                cardSize: D.Ub.Small,
                                followGameCardOptions: t,
                                placeholderItems: 99
                            })
                        }
                        if (this.props.categoryData) {
                            var n = this.getCategoryFollowCounts();
                            return this.props.categoryData.map(function(t) {
                                var a = !!n && (n[t.name] || 0) === t.games.length;
                                return r.createElement(ne, {
                                    key: t.name,
                                    data: t,
                                    cardSize: D.Ub.ExtraSmall,
                                    trackingMedium: p.PageviewMedium.BrowseForYou,
                                    isFollowingAllGamesInCategory: a,
                                    onFollow: e.onFollow,
                                    onUnfollow: e.onUnfollow
                                })
                            })
                        }
                    }, t
                }(r.Component),
                le = Object(C.compose)(Object(c.a)(ae, {
                    options: {
                        variables: {
                            limit: 10
                        }
                    }
                }), Object(h.b)("CommunitySelectionPageComponent"))(se),
                ce = "285x380",
                de = 5,
                ue = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            searching: !1,
                            categoryEndIndex: de
                        }, n.getData = function() {
                            return n.state.searching && n.state.searchGameResults ? n.state.searchGameResults.map(function(e) {
                                return n.mapDataToGame(e.title, e.popularity, e.id)
                            }) : !n.props.isCategoriesExperimentEnabled && n.gameDataLoaded() ? n.props.data.games.edges.map(function(e) {
                                return {
                                    id: e.node.id,
                                    name: e.node.name,
                                    boxArtURL: e.node.boxArtURL,
                                    viewersCount: e.node.viewersCount
                                }
                            }) : void 0
                        }, n.gameDataLoaded = function() {
                            return n.props.data && !n.props.data.loading && !n.props.data.error && n.props.data.games && n.props.data.games.edges
                        }, n.onSearchChange = function(e) {
                            e ? (n.setState({
                                searching: !0
                            }), n.doGameSearch(e).then(function() {})) : n.setState({
                                searching: !1
                            })
                        }, n.doGameSearch = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n, r, o;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            t = Object(u.a)(), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(f.a.Games, e, t, {
                                                hitsPerPage: ie
                                            })];
                                        case 2:
                                            return (n = a.sent()) && (r = Object(y.b)({
                                                searchResults: n
                                            }), this.setState({
                                                searchGameResults: r.currentGameResults ? r.currentGameResults.results : []
                                            })), [3, 4];
                                        case 3:
                                            return o = a.sent(), i.k.error(o, "Algolia top results search failed"), this.setState({
                                                searchGameResults: []
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.loadMoreCategories = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    return this.state.categoryData && (e = Math.min(this.state.categoryEndIndex + de, this.state.categoryData.length)) > this.state.categoryEndIndex && this.setState({
                                        categoryEndIndex: e
                                    }), [2]
                                })
                            })
                        }, n.mapDataToGame = function(e, t, n) {
                            return {
                                id: n || e.toString(),
                                name: e,
                                boxArtURL: k.a + "/" + encodeURIComponent(e) + "-" + ce + ".jpg",
                                viewersCount: t
                            }
                        }, n.searchClient = new v.a({
                            appId: i.a.algoliaApplicationID,
                            apiKey: i.a.algoliaAPIKey,
                            apolloClient: i.p.apollo.client,
                            logger: i.k,
                            config: i.a,
                            stats: i.p.stats
                        }), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.props.isLoggedIn ? this.props.isCategoriesExperimentEnabled ? [4, this.fetchCategories()] : [3, 2] : (this.props.latencyTracking.reportInteractive(), window.location.assign("/" + location.search), [2]);
                                    case 1:
                                        e.sent(), e.label = 2;
                                    case 2:
                                        return this.props.latencyTracking.reportInteractive(), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return r.createElement(le, {
                            gameData: this.getData(),
                            categoryData: this.state.categoryData && this.state.categoryData.slice(0, this.state.categoryEndIndex),
                            onSearchChange: this.onSearchChange,
                            categoriesInfiniteScrollEnabled: !!this.state.categoryData && this.state.categoryEndIndex !== this.state.categoryData.length,
                            onLoadMoreCategories: this.loadMoreCategories
                        })
                    }, t.prototype.fetchCategories = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, function() {
                                            return a.__awaiter(this, void 0, void 0, function() {
                                                return a.__generator(this, function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, n.e(163).then(function() {
                                                                var e = n("pT6x");
                                                                return Object.assign({}, e, {
                                                                    default: e
                                                                })
                                                            })];
                                                        case 1:
                                                            return [2, e.sent().items]
                                                    }
                                                })
                                            })
                                        }()];
                                    case 1:
                                        return e = r.sent(), t = e.map(function(e) {
                                            return {
                                                name: e.name,
                                                games: e.games.slice(0, 7)
                                            }
                                        }), this.setState({
                                            categoryData: t
                                        }), [2]
                                }
                            })
                        })
                    }, t = a.__decorate([Object(c.a)(b, {
                        options: {
                            variables: {
                                limit: ie
                            }
                        },
                        skip: function(e) {
                            return !e.isLoggedIn || e.isCategoriesExperimentEnabled
                        }
                    }), Object(d.a)({
                        location: p.PageviewLocation.OnboardingCommunitySelection
                    }), Object(h.b)("CommunitySelectionPage", {
                        destination: m.a.OnboardingIndex
                    })], t)
                }(r.Component);
            var me = Object(l.connect)(function(e) {
                    return {
                        isLoggedIn: Object(g.f)(e)
                    }
                })(ue),
                pe = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this,
                            a = i.p.experiments.getAssignment(o.b.WebOnboardingCategories) === s.a.Yes;
                        return n.state = {
                            isCategoriesExperimentEnabled: a
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return null === this.state.isCategoriesExperimentEnabled ? null : r.createElement(me, {
                            isCategoriesExperimentEnabled: this.state.isCategoriesExperimentEnabled
                        })
                    }, t
                }(r.Component),
                ge = n("wIs1"),
                he = n("jKe7"),
                fe = n("2INN"),
                ve = n("ZS2+"),
                ye = n("/8Zs"),
                ke = n("W2HU"),
                be = (n("T6t+"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.isLoggedIn ? r.createElement(D.Oa, {
                            position: D.eb.Relative,
                            attachTop: !0,
                            fullWidth: !0
                        }, r.createElement("nav", {
                            className: "top-nav",
                            "data-a-target": "top-nav-container"
                        }, r.createElement(D.Wa, {
                            className: "top-nav__menu",
                            display: D.X.Flex,
                            alignItems: D.f.Stretch,
                            flexWrap: D.Aa.NoWrap,
                            fullHeight: !0
                        }, r.createElement(D.Oa, {
                            display: D.X.InlineFlex,
                            alignItems: D.f.Center,
                            flexShrink: 0
                        }, r.createElement("span", {
                            className: "top-nav__home-link"
                        }, r.createElement(D.nb, {
                            asset: D.ob.LogoGlitch,
                            width: 30,
                            height: 30
                        }))), r.createElement(D.Wa, {
                            className: "top-nav__nav-items-container",
                            display: D.X.Flex,
                            flexGrow: 1,
                            flexWrap: D.Aa.NoWrap,
                            flexShrink: 0
                        }, ""), r.createElement(D.Wa, {
                            className: "top-nav__nav-items-container",
                            display: D.X.Flex,
                            alignItems: D.f.Stretch,
                            flexWrap: D.Aa.NoWrap,
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(ke.a, {
                            isOnboarding: !0
                        }))))) : (i.k.warn("OnboardingTopNavComponent is only meant to be used for logged in users."), null)
                    }, t = a.__decorate([Object(h.b)("OnboardingTopNav")], t)
                }(r.Component));
            var Ce = Object(l.connect)(function(e) {
                    return {
                        isLoggedIn: Object(g.f)(e)
                    }
                })(be),
                we = ve.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(164)]).then(n.bind(null, "6tis"))
                }, "ChannelSurfingPage"),
                Se = ve.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "8n14"))
                }, "CommunitySelectionPage"),
                _e = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.isLoggedIn || window.location.assign("/" + location.search)
                    }, t.prototype.render = function() {
                        return r.createElement(D.Wa, {
                            display: D.X.Flex,
                            flexDirection: D.Z.Column,
                            flexWrap: D.Aa.NoWrap,
                            fullHeight: !0,
                            fullWidth: !0
                        }, r.createElement(Ce, null), r.createElement(D.Wa, {
                            display: D.X.Flex,
                            flexWrap: D.Aa.NoWrap,
                            position: D.eb.Relative,
                            fullHeight: !0,
                            fullWidth: !0
                        }, r.createElement(D.Oa, {
                            overflow: D.Za.Hidden,
                            position: D.eb.Relative,
                            display: D.X.Flex,
                            flexDirection: D.Z.Column,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0
                        }, r.createElement("main", {
                            className: ye.a
                        }, r.createElement(he.a, null, r.createElement(fe.a, {
                            path: "/hi/surf",
                            component: we
                        }), r.createElement(fe.a, {
                            path: "/hi",
                            component: Se
                        }))))))
                    }, t = a.__decorate([Object(h.b)("OnboardingRoot", {
                        autoReportInteractive: !0
                    })], t)
                }(r.Component);
            var Te = Object(ge.a)(Object(l.connect)(function(e) {
                return {
                    isLoggedIn: Object(g.f)(e)
                }
            })(_e));
            n.d(t, "CommunitySelectionPage", function() {
                return pe
            }), n.d(t, "OnboardingRoot", function() {
                return Te
            })
        },
        "8zqa": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "MinimalTopNav_MinimalUser"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 93
                }
            };
            n.loc.source = {
                body: "query MinimalTopNav_MinimalUser {\ncurrentUser {\nid\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "9x/k": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games"
                }(a || (a = {}))
        },
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("yI6f"),
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
                                c = Object(i.f)(l.title).rowName,
                                d = {
                                    trackImpression: this.trackImpression,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: c,
                                        row_position: s
                                    }
                                };
                            return r.createElement(e, a.__assign({}, this.props, d))
                        }, n.contextTypes = o.a, n
                    }(r.Component)
                }
            }
        },
        AO3T: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "c", function() {
                return d
            });
            var a, r, i = n("/7QA"),
                o = n("2xye");
            ! function(e) {
                e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
            }(a || (a = {})),
            function(e) {
                e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
            }(r || (r = {}));
            var s = function(e) {
                    var t = {
                        source: e.source,
                        action: r.Start
                    };
                    i.o.track(o.SpadeEventType.OnboardingEvent, t)
                },
                l = function() {
                    var e = {
                        source: a.HomepageCTA,
                        action: r.Completed
                    };
                    i.o.track(o.SpadeEventType.OnboardingEvent, e)
                },
                c = function(e, t) {
                    var n = {
                        src: o.SpadeEventType.OnboardingEvent,
                        game: t
                    };
                    i.o.track(e, n)
                },
                d = function(e) {
                    i.o.track(o.SpadeEventType.BrowseForYou, e)
                }
        },
        AXwV: function(e, t, n) {},
        B3R5: function(e, t, n) {},
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
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
                        return r.createElement(s.Wa, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Aa.NoWrap
                        }, r.createElement(s.Ta, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, r.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Row,
                            padding: .5
                        }, r.createElement(s.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.Za.Hidden,
                            position: s.eb.Relative
                        }, r.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, r.createElement(s.S, a.__assign({}, e))), r.createElement(s.xb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Va.Center,
                            position: s.eb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, r.createElement(s.nb, {
                            asset: s.ob.Play,
                            type: s.pb.Inherit
                        }))), r.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, r.createElement(s.Wa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, r.createElement(s.W, null, this.props.gameChange.label)), r.createElement(s.Wa, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, r.createElement(s.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(r.Component)),
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
                        return r.createElement(s.Wa, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.eb.Relative,
                            margin: {
                                top: .5
                            }
                        }, r.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, r.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.ob.ViewerList
                        }, r.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Row
                        }, r.createElement(s.W, null, Object(i.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(s.Wa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(s.bb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), r.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, r.createElement(s.Wa, {
                            overflow: s.Za.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexWrap: s.Aa.NoWrap
                        }, r.createElement(s.Wa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, r.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(i.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(s.Wa, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Aa.NoWrap
                        }, r.createElement(d.b, null, r.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexWrap: s.Aa.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return r.createElement(l, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(r.Component)),
                p = n("kduP"),
                g = n("2xye"),
                h = function(e) {
                    return r.createElement(s.Wa, null, r.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, a) {
                        return r.createElement(s.Oa, {
                            key: n
                        }, r.createElement(s.U, {
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
                y = (n("XA5B"), function(e) {
                    var t = r.createElement(s.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.Za.Hidden
                    }, r.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, r.createElement(s.S, a.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(s.U, a.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            y.displayName = "PreviewCardIconicImage";
            var k, b = n("TSYQ"),
                C = (n("cRsL"), function(e) {
                    var t = b("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return r.createElement(s.Wa, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Va.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, r.createElement(s.Wa, {
                        display: s.X.InlineFlex
                    }, r.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Mb.Uppercase
                    }, e.title)), e.subTitle && r.createElement(s.Wa, {
                        display: s.X.InlineFlex
                    }, r.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                w = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = r.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(s.hb, {
                        borderRadius: s.x.None,
                        size: s.jb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var i = 1,
                        o = null;
                    return e.topBar && (o = r.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(C, a.__assign({}, e.topBar))), i = 3), r.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, r.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), r.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), r.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                S = (n("kF1+"), function(e) {
                    var t = e.icon && r.createElement(s.Wa, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(s.nb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? r.createElement(s.xb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ba.Size6,
                        justifyContent: s.Va.Center
                    }, t, r.createElement(s.W, null, e.value)) : r.createElement(s.xb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, r.createElement(s.W, null, e.value))
                }),
                _ = n("GnwI"),
                T = (n("B3R5"), function(e) {
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
                        }), r.createElement("div", a.__assign({}, e, {
                            onClick: this.props.onClick
                        }), r.createElement(s.xb, {
                            background: s.r.Alt2,
                            overflow: s.Za.Hidden
                        }, r.createElement(s.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = b("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                            className: n
                        }, r.createElement(s.S, a.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : r.createElement("div", {
                            className: n
                        }, r.createElement(s.S, a.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(r.Component)),
                E = Object(_.b)("PreviewCardThumbnail")(T),
                I = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return r.createElement(s.Wa, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, r.createElement(s.W, {
                            color: s.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : r.createElement(s.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: s.V.Inherit
                        }, e.text)))
                    })), r.createElement("div", null, r.createElement(s.U, a.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: s.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), r.createElement(s.W, {
                        type: s.Nb.H3,
                        fontSize: s.Ba.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), r.createElement(s.Wa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                x = n("H1ft"),
                N = n("ZbA5"),
                D = n("QVaV"),
                O = n("hyVY"),
                G = n("MXoD"),
                P = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(k || (k = {}));
            var L, A, F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(i.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(i.d)("unlocked", "VideoPreviewCardRestriction") : Object(i.d)("locked", "VideoPreviewCardRestriction"),
                        a = t ? s.ob.Unlock : s.ob.Lock;
                    return r.createElement(s.Wa, null, !t && r.createElement(s.xb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.ac.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Jb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Z.Column,
                        flexWrap: s.Aa.Wrap,
                        justifyContent: s.Va.Center,
                        "data-test-selector": k.LockSelector
                    }, r.createElement(s.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ba.Size5,
                        "data-test-selector": k.UpsellSelector
                    }, Object(i.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), r.createElement(s.Wa, null, r.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), r.createElement(s.xb, {
                        display: s.X.InlineFlex,
                        position: s.eb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.ac.Default,
                        fontSize: s.Ba.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, r.createElement(s.Qb, {
                        direction: this.props.attachTop ? s.Sb.Bottom : s.Sb.Top,
                        align: s.Rb.Right,
                        label: n
                    }, r.createElement(s.nb, {
                        asset: a,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            n("5NSO");

            function W(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function j(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(L || (L = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(A || (A = {}));
            var R = function(e) {
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
                        return r.createElement("div", a.__assign({
                            className: "preview-card"
                        }, Object(v.a)(this.props)), r.createElement(s.xb, {
                            position: s.eb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.Za.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(s.U, {
                            to: Object(G.a)(this.getTrackingContext(g.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(E, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: W(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), r.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexWrap: s.Aa.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, r.createElement(s.Wa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), r.createElement(s.Wa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && r.createElement(s.Wa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(this.props.contextualCardActionProps.component, a.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(w, {
                            topLeft: r.createElement(N.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(S, {
                                value: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : W(this.props) ? r.createElement(w, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(S, {
                                value: Object(O.b)(this.props.durationInSeconds),
                                icon: s.ob.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(S, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(S, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : j(this.props) ? r.createElement(w, {
                            topLeft: r.createElement(S, {
                                value: Object(O.b)(this.props.durationInSeconds),
                                icon: s.ob.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(S, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return W(this.props) && this.props.listPosition ? Object(i.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return W(this.props) || j(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === A.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(s.Wa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(y, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(G.a)(this.getTrackingContext(g.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": L.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === A.SingleGameList || this.props.context === A.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(s.Wa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(y, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(G.a)(this.getTrackingContext(g.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": L.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(D.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(G.a)(this.getTrackingContext(g.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), j(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(i.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : W(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== A.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(G.a)(this.getTrackingContext(g.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(I, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(G.a)(this.getTrackingContext(g.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(s.Wa, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(P.a, a.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return W(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(F, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!W(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === x.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, a) {
                        switch (e) {
                            case x.a.Balloon:
                                return r.createElement(m, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: a
                                });
                            case x.a.Inline:
                                return r.createElement(h, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case x.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                M = Object(_.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(R);
            n.d(t, !1, function() {
                return L
            }), n.d(t, "b", function() {
                return A
            }), n.d(t, !1, function() {
                return R
            }), n.d(t, "a", function() {
                return M
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var a, r = n("/7QA"),
                i = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(a || (a = {}));
            var o = function() {
                switch (r.p.experiments.getAssignment(i.b.Archer)) {
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
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "g", function() {
                return c
            });
            var a = "directory.LANGUAGE_TAGS_UPDATED",
                r = "directory.TAG_FILTER_ADDED",
                i = "directory.TAG_FILTER_CHANGED",
                o = "directory.TAG_FILTER_REMOVED";

            function s(e) {
                return {
                    type: a,
                    languageTags: e
                }
            }

            function l(e, t) {
                return {
                    type: r,
                    addedTag: e,
                    categoryName: t
                }
            }

            function c(e, t) {
                return {
                    type: o,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        "JJ+Z": function(e, t, n) {},
        "R+eK": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunitySelectionPage_User"
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
                                        value: "followedGames"
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
                                    }],
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
                    end: 120
                }
            };
            n.loc.source = {
                body: "query CommunitySelectionPage_User($limit: Int) {\ncurrentUser {\nid\nfollowedGames(first: $limit) {\nnodes {\nid\nname\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        T2RZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return y
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("2Ygb"),
                c = n("2xye"),
                d = n("oJov"),
                u = n("JVUd"),
                m = n("WRGI"),
                p = n("moLQ"),
                g = n("yI6f");

            function h(e, t) {
                if (t) {
                    var n = {};
                    return n = "string" == typeof t ? {
                        pathname: t
                    } : t, a.__assign({}, n, {
                        state: a.__assign({}, n.state, e)
                    })
                }
            }

            function f(e, t, n) {
                return n || (n = function() {}),
                    function(r) {
                        n && n(r), s.o.track(c.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function v(e, t) {
                return a.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), s.o.track(c.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: c.PageviewContent.Tag,
                            tag_id: n.id
                        }))
                    }
                })
            }

            function y(e, t, n) {
                return function(y) {
                    var k = function(i) {
                        function o() {
                            var e = null !== i && i.apply(this, arguments) || this;
                            return e.itemTrackingID = Object(g.e)(), e.trackImpression = function() {
                                s.o.track(c.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return a.__extends(o, i), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (y === d.a) {
                                var e = this.props;
                                return r.createElement(y, a.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return r.createElement(y, a.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
                        }, o.prototype.getTrackingLocationState = function() {
                            var t = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [],
                                n = this.props.tagFilters.map(function(e) {
                                    return e.id
                                }),
                                a = e;
                            this.props.tagFilters.length > 0 && (a === c.PageviewMedium.Browse ? a = c.PageviewMedium.BrowseDirectoryTags : a === c.PageviewMedium.Game && (a = c.PageviewMedium.GameDirectoryTags));
                            var r = {
                                tag_set: JSON.stringify(t),
                                tag_filter_set: JSON.stringify(n),
                                tag_streamer_set: "[]",
                                medium: a
                            };
                            return "POP" === s.p.history.action ? r : (s.p.history.location.state && s.p.history.location.state.medium === c.PageviewMedium.TwitchHome && (r.item_tracking_id = s.p.history.location.state.item_tracking_id, r.medium = s.p.history.location.state.medium, r.content = s.p.history.location.state.content), r)
                        }, o.prototype.getCommonTrackingParams = function() {
                            var a = this.props.trackingProps || {},
                                r = a.itemID,
                                i = a.category,
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
                                item_id: void 0 !== r ? r : null,
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
                                category: void 0 !== i ? i : null,
                                tag_id: null
                            }
                        }, o.prototype.wrapPreviewCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return a.__assign({
                                onVideoTitleClick: f(t, c.PageviewContent.VideoTitle, e.onVideoTitleClick),
                                linkTo: h(n, this.props.linkTo),
                                onThumbnailClick: f(t, c.PageviewContent.VideoThumbnail, e.onThumbnailClick),
                                channelLinkTo: h(n, e.channelLinkTo),
                                onChannelLoginClick: f(t, c.PageviewContent.ChannelMetadata, e.onChannelLoginClick),
                                onChannelImageClick: f(t, c.PageviewContent.UserThumbnail, e.onChannelImageClick),
                                gameTitleLinkTo: h(n, e.gameTitleLinkTo),
                                onGameTitleClick: f(t, c.PageviewContent.GameName, e.onGameTitleClick)
                            }, e.tagListProps && {
                                tagListProps: v(t, e.tagListProps)
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
                                linkTo: h(n, e.linkTo),
                                onClick: f(t, c.PageviewContent.GameBoxart, this.props.onClick)
                            }, e.tagListProps && {
                                tagListProps: v(t, e.tagListProps)
                            })
                        }, o.displayName = Object(l.a)(o.name, y), o
                    }(r.Component);
                    return Object(o.compose)(Object(u.a)("PreviewCard-" + e + "-" + t, {
                        percentage: 75
                    }), Object(i.connect)(function(t, n) {
                        var a = [];
                        if (e === c.PageviewMedium.Game) {
                            var r = n.trackingProps && n.trackingProps.categoryName;
                            a = r ? Object(p.a)(t, r) : []
                        } else a = Object(m.a)(t);
                        return {
                            tagFilters: a
                        }
                    }))(k)
                }
            }
        },
        "T6t+": function(e, t, n) {},
        TDc0: function(e, t, n) {
            "use strict";
            var a, r, i, o, s;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "c", function() {
                    return o
                }), n.d(t, "b", function() {
                    return s
                }), n.d(t, "e", function() {
                    return c
                }), n.d(t, "d", function() {
                    return d
                }), n.d(t, "f", function() {
                    return u
                }),
                function(e) {
                    e.NoSkip = "no_skip"
                }(a || (a = {})),
                function(e) {
                    e.Yes = "yes"
                }(r || (r = {})),
                function(e) {
                    e.Yes = "yes"
                }(i || (i = {})),
                function(e) {
                    e.ENABLED = "enabled"
                }(o || (o = {})),
                function(e) {
                    e.Chat = "chat", e.NoChat = "no_chat"
                }(s || (s = {}));
            var l = new Set([s.Chat.toString(), s.NoChat.toString()]),
                c = function(e) {
                    return e === a.NoSkip
                },
                d = function(e, t) {
                    return c(e) && !!t && l.has(t)
                },
                u = function(e) {
                    return e.getTime() >= m().getTime()
                },
                m = function() {
                    return new Date((new Date).getTime() - 12096e5)
                }
        },
        Uive: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                r = n("mrSG"),
                i = n("q1tI"),
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
                            return r.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(n) {
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        c.g.addListener(c.f, this.onSlotRenderEnd), this.shouldCreateSlot(this.props) ? (this.logger.debug("Consent ready. Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Consent not ready or Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.state.slotCreated || (!this.shouldCreateSlot(e) || e.gdpr.status === this.props.gdpr.status && e.trackingSet === this.props.trackingSet ? this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID) : (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return t.shouldDisplay !== this.state.shouldDisplay
                    }, t.prototype.render = function() {
                        var e = r.__assign({}, this.props.injectStyles);
                        return this.state.shouldDisplay || (e.display = "none"), i.createElement("div", r.__assign({
                            style: e,
                            id: this.props.slotID,
                            ref: this.setRef
                        }, Object(s.a)(this.props)))
                    }, t
                }(i.Component),
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
        W2HU: function(e, t, n) {
            "use strict";
            var a, r = n("/MKj"),
                i = n("fvjX"),
                o = n("1/iK"),
                s = n("y5D0"),
                l = n("jZLd"),
                c = n("kRBY"),
                d = n("mrSG"),
                u = n("TSYQ"),
                m = n("q1tI"),
                p = n("/7QA"),
                g = n("u5aL"),
                h = n("yR8l"),
                f = n("/0dD"),
                v = n("76Lv"),
                y = n("GnwI"),
                k = n("Ue10"),
                b = n("8zqa");
            n("2mE7");
            ! function(e) {
                e.DarkModeToggle = "minimal-user__dark-mode-toggle", e.DropdownDown = "minimal-user__dropdown-down", e.UserMenu = "minimal-user__user-menu-toggle", e.Logout = "minimal-user__logout", e.Login = "minimal-user__login"
            }(a || (a = {}));
            var C = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onCardClick = function() {
                            n.setState({
                                dropdownOpen: !n.state.dropdownOpen
                            })
                        }, n.onClickOut = function() {
                            n.setState({
                                dropdownOpen: !1
                            })
                        }, n.onLoginClick = function(e) {
                            e.preventDefault(), n.props.login()
                        }, n.onLogoutClick = function(e) {
                            e.preventDefault(), n.props.logout()
                        }, n.onDarkModeCheckboxClick = function() {
                            var e = n.props.theme === f.a.Dark ? f.a.Light : f.a.Dark;
                            n.props.changeTheme(e, l.a.UserMenu)
                        }, n.state = {
                            dropdownOpen: !1
                        }, n
                    }
                    return d.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || !this.props.data.currentUser || this.props.data.error) return m.createElement(k.db, null);
                        if (this.props.isOnboarding) return m.createElement(k.Wa, {
                            display: k.X.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, m.createElement(k.Wa, {
                            display: k.X.Flex,
                            flexWrap: k.Aa.NoWrap,
                            alignItems: k.f.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, m.createElement(k.Wa, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, m.createElement(k.Wa, null, this.renderAvatar())), m.createElement(k.Wa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: k.Z.Column,
                            ellipsis: !0
                        }, m.createElement(k.W, {
                            className: "minimal-top-nav__username",
                            ellipsis: !0
                        }, this.props.data.currentUser.displayName))));
                        if (this.props.isLoggedIn) {
                            var e = null;
                            this.props.darkModeEnabled && (e = m.createElement(k.xb, {
                                borderBottom: !0,
                                margin: {
                                    y: 1
                                }
                            }, m.createElement(k.Wa, {
                                margin: {
                                    x: 2,
                                    bottom: 1
                                }
                            }, m.createElement(k.N, {
                                id: "dark-mode-toggle",
                                label: Object(p.d)("Dark Mode", "MinimalUser"),
                                "data-a-target": "dark-mode-toggle",
                                "data-test-selector": a.DarkModeToggle,
                                "data-a-value": this.props.theme,
                                checked: this.props.theme === f.a.Dark,
                                onChange: this.onDarkModeCheckboxClick
                            }))));
                            var t = u(Object(v.b)(f.a.Dark), {
                                    "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                                }),
                                n = u({
                                    "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                                }, {
                                    "minimal-top-nav__dropdown": !this.state.dropdownOpen
                                });
                            return m.createElement(g.a, {
                                onClickOut: this.onClickOut,
                                className: t
                            }, m.createElement(k.Wa, {
                                display: k.X.Flex,
                                className: "minimal-top-nav__user",
                                fullHeight: !0
                            }, m.createElement(k.Ta, {
                                onClick: this.onCardClick,
                                "data-test-selector": a.UserMenu
                            }, m.createElement(k.Wa, {
                                display: k.X.Flex,
                                flexWrap: k.Aa.NoWrap,
                                alignItems: k.f.Center,
                                flexGrow: 1,
                                padding: {
                                    right: 1
                                },
                                fullHeight: !0
                            }, m.createElement(k.Wa, {
                                margin: {
                                    x: 1
                                },
                                flexShrink: 0
                            }, m.createElement(k.Wa, null, this.renderAvatar())), m.createElement(k.Wa, {
                                flexGrow: 1,
                                flexShrink: 1,
                                flexDirection: k.Z.Column,
                                ellipsis: !0
                            }, m.createElement(k.W, {
                                className: "minimal-top-nav__username",
                                "data-a-target": "user-display-name",
                                ellipsis: !0
                            }, this.props.data.currentUser.displayName)), m.createElement(k.xb, {
                                display: k.X.Flex,
                                flexShrink: 0,
                                className: "minimal-top-nav__expand"
                            }, m.createElement(k.nb, {
                                asset: k.ob.GlyphArrDown
                            }))))), m.createElement(k.xb, {
                                fullWidth: !0,
                                overflow: k.Za.Hidden,
                                position: k.eb.Absolute,
                                padding: {
                                    y: 1
                                },
                                background: k.r.Base,
                                className: n,
                                "data-test-selector": a.DropdownDown
                            }, e, m.createElement(k.Ta, {
                                onClick: this.onLogoutClick,
                                "data-test-selector": a.Logout
                            }, m.createElement(k.xb, {
                                color: k.O.Alt,
                                display: k.X.Flex,
                                alignItems: k.f.Center,
                                padding: {
                                    x: 2,
                                    y: .5
                                }
                            }, m.createElement(k.Wa, {
                                display: k.X.Flex,
                                alignItems: k.f.Center,
                                margin: {
                                    right: 1
                                }
                            }, m.createElement(k.nb, {
                                asset: k.ob.NavLogout,
                                height: 20,
                                width: 20
                            })), m.createElement(k.W, null, Object(p.d)("Log Out", "MinimalUser"))))))
                        }
                        return m.createElement(k.Wa, {
                            margin: 1
                        }, m.createElement(k.z, {
                            onClick: this.onLoginClick,
                            "data-test-selector": a.Login
                        }, Object(p.d)("Log in", "MinimalUser")))
                    }, t.prototype.renderAvatar = function() {
                        return this.props.data.currentUser ? m.createElement(k.q, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: Object(p.d)("Your Avatar", "Minimaluser")
                        }) : null
                    }, t.prototype.reportInteractive = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t
                }(m.Component),
                w = Object(i.compose)(Object(y.b)("MinimalUser"), Object(h.a)(b))(C);
            var S = Object(r.connect)(function(e) {
                return {
                    isLoggedIn: Object(c.f)(e),
                    theme: e.ui.theme
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    logout: s.f,
                    login: function() {
                        return s.e(o.a.TopNavLoginButton)
                    },
                    changeTheme: l.b
                }, e)
            })(w);
            n.d(t, "a", function() {
                return S
            })
        },
        WRGI: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("oA7Y"),
                o = n("9x/k");

            function s(e) {
                return e.browse.browseType
            }

            function l(e) {
                return e.browse.tagFilters
            }
            r.p.store.registerReducer("browse", function(e, t) {
                switch (void 0 === e && (e = {
                    browseType: o.a.Games,
                    lastBrowsePath: "/directory",
                    tagFilters: []
                }), t.type) {
                    case i.a:
                        return a.__assign({}, e, {
                            browseType: t.browseType
                        });
                    case i.c:
                        var n = e.tagFilters.every(function(e) {
                                return e.id !== t.addedTag.id
                            }),
                            r = e.tagFilters.slice();
                        return n && r.push(t.addedTag), a.__assign({}, e, {
                            tagFilters: r
                        });
                    case i.d:
                        return a.__assign({}, e, {
                            tagFilters: t.tagFilters
                        });
                    case i.e:
                        var s = e.tagFilters.filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return a.__assign({}, e, {
                            tagFilters: s
                        });
                    case i.b:
                        return a.__assign({}, e, {
                            lastBrowsePath: t.lastBrowsePath
                        });
                    default:
                        return e
                }
            })
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
                r = n("/7QA"),
                i = n("Igt5"),
                o = "languageTags";

            function s(e, t) {
                var n = this;
                return function(s) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, l;
                        return a.__generator(this, function(a) {
                            return n = new Set(c()), t ? n.add(e) : n.delete(e), l = Array.from(n), r.m.set(o, l), s(Object(i.f)(l)), [2]
                        })
                    })
                }
            }

            function l(e) {
                var t = this;
                return function(n) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return r.m.set(o, e), n(Object(i.f)(e)), [2]
                        })
                    })
                }
            }

            function c() {
                return r.m.get(o, [])
            }
        },
        XA5B: function(e, t, n) {},
        ZbA5: function(e, t, n) {
            "use strict";
            var a, r, i, o, s = n("mrSG"),
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
                g = ((r = {})[u.a.Premiere] = m.ob.VideoPremiere, r[u.a.Rerun] = m.ob.VideoRerun, r[u.a.WatchParty] = m.ob.VideoRerun, r),
                h = ((i = {})[u.a.Premiere] = m.pb.Live, i[u.a.Rerun] = m.pb.Inherit, i[u.a.WatchParty] = m.pb.Inherit, i),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(m.xb, {
                            className: this.getClassNames(),
                            color: m.O.Overlay,
                            background: m.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: m.x.Small,
                            display: m.X.Flex
                        }, c.createElement(m.Wa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(m.W, {
                            type: m.Nb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[p[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(m.xb, {
                            borderRadius: m.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? c.createElement(m.Wa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, c.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : c.createElement(m.nb, {
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
        bSYX: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Game_FollowGameCard"
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
                }],
                loc: {
                    start: 0,
                    end: 100
                }
            };
            n.loc.source = {
                body: "query Game_FollowGameCard($name: String) {\ngame(name: $name) {\nid\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        cRsL: function(e, t, n) {},
        chV5: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunityStreams_Streams_RENAME2"
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
                                value: "type"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DirectoryType"
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "directory"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    }
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
                                                                value: "type"
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
                    end: 372
                }
            };
            n.loc.source = {
                body: "query CommunityStreams_Streams_RENAME2($name: String! $type: DirectoryType! $limit: Int) {\ndirectory(name: $name type: $type) {\nid\nname\nstreams(first: $limit) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 285 height: 380)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "g3/t": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowGameCard_UnfollowGame"
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
                    end: 140
                }
            };
            n.loc.source = {
                body: "mutation FollowGameCard_UnfollowGame($input: UnfollowGameInput!) {\nunfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
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
        hX9f: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("GFmA"),
                c = n("kduP"),
                d = n("2xye"),
                u = n("rShu"),
                m = n("yI6f"),
                p = n("T2RZ"),
                g = n("Ue10"),
                h = (n("zrz1"), Object(p.a)(d.PageviewMedium.Game, m.b.Live, m.c.BrowseInCategoryChannels)(l.a)),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.untitledBroadcastString = Object(s.d)("Untitled Broadcast", "StreamThumbnail"), t.getLinkTo = function(e, n) {
                            var r = t.props.trackingContent ? t.props.trackingContent : d.PageviewContent.Live,
                                i = d.PageviewMedium.Game;
                            t.props.trackingMedium && (i = t.props.trackingMedium);
                            var o = t.props.history.location && t.props.history.location.state || {};
                            return {
                                pathname: e,
                                state: a.__assign({}, o, {
                                    medium: i,
                                    content: r,
                                    content_index: n
                                })
                            }
                        }, t.shouldShowGame = function(e) {
                            return t.props.directoryType !== u.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var n = {
                            context: this.props.directoryType === u.a.Games ? l.b.SingleGameList : l.b.MixedGameAndChannelList,
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
                            gameTitleLinkTo: this.getLinkTo(Object(c.c)(this.shouldShowGame("name")), t),
                            gameBoxArtImageProps: {
                                src: this.shouldShowGame("boxArtURL") || s.a.defaultBoxArtURL,
                                alt: this.shouldShowGame("name")
                            },
                            streamType: e.type,
                            currentViewerCount: e.viewersCount || 0,
                            trackImageLatency: this.props.trackImageLatency,
                            tagListProps: this.props.tagListProps
                        };
                        return r.createElement("div", {
                            className: "stream-thumbnail",
                            "data-target": t ? "" : "directory-first-item",
                            style: {
                                order: t
                            }
                        }, r.createElement(g.Wa, {
                            className: "stream-thumbnail__card",
                            position: g.eb.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, r.createElement(h, a.__assign({}, n, {
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
                }(r.Component),
                v = Object(o.compose)(i.a)(f);
            n.d(t, "a", function() {
                return "directory-first-item"
            }), n.d(t, !1, function() {
                return "directory-game__card_container"
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, "b", function() {
                return v
            })
        },
        jkql: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunitySelectionPage"
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "games"
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
                                                        value: "name"
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "viewersCount"
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
                    end: 144
                }
            };
            n.loc.source = {
                body: "query CommunitySelectionPage($limit: Int) {\ngames(first: $limit) {\nedges {\nnode {\nid\nname\nboxArtURL(width: 285 height: 380)\nviewersCount\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        m493: function(e, t, n) {},
        moLQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("Igt5"),
                o = n("X7a7");

            function s(e, t) {
                return e.directory.tagFilters[t] || []
            }

            function l(e) {
                return e.directory.languageTags
            }
            r.p.store.registerReducer("directory", function(e, t) {
                switch (void 0 === e && (e = {
                    languageTags: Object(o.a)(),
                    tagFilters: {}
                }), t.type) {
                    case i.a:
                        return a.__assign({}, e, {
                            languageTags: t.languageTags
                        });
                    case i.b:
                        var n = a.__assign({}, e.tagFilters),
                            r = n[t.categoryName];
                        return (void 0 === r || r.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[t.categoryName] = (n[t.categoryName] || []).concat([t.addedTag])), a.__assign({}, e, {
                            tagFilters: n
                        });
                    case i.c:
                        return e.tagFilters[t.categoryName] = t.tagFilters.slice(), a.__assign({}, e);
                    case i.d:
                        if (void 0 === e.tagFilters[t.categoryName]) return a.__assign({}, e);
                        var s = e.tagFilters[t.categoryName].filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return e.tagFilters[t.categoryName] = s, a.__assign({}, e);
                    default:
                        return e
                }
            })
        },
        oA7Y: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "g", function() {
                return c
            }), n.d(t, "i", function() {
                return d
            }), n.d(t, "h", function() {
                return u
            }), n.d(t, "j", function() {
                return m
            });
            var a = "browse.BROWSE_TYPE_CHANGED",
                r = "browse.LAST_BROWSE_PATH",
                i = "browse.TAG_FILTER_ADDED",
                o = "browse.TAG_FILTER_CHANGED",
                s = "browse.TAG_FILTER_REMOVED";

            function l(e) {
                return {
                    type: i,
                    addedTag: e
                }
            }

            function c(e) {
                return {
                    type: a,
                    browseType: e
                }
            }

            function d(e) {
                return {
                    type: o,
                    tagFilters: e
                }
            }

            function u(e) {
                return {
                    type: r,
                    lastBrowsePath: e
                }
            }

            function m(e) {
                return {
                    type: s,
                    removedTag: e
                }
            }
        },
        oJov: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return r.createElement(o.Wa, a.__assign({
                        className: "drops-badge",
                        position: o.eb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.bc)(e)), r.createElement(o.Qb, {
                        direction: o.Sb.Top,
                        align: o.Rb.Right,
                        label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                    }, r.createElement(o.xb, {
                        className: "drops-badge__drops-icon",
                        position: o.eb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.Za.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.ac.Default
                    }, r.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, r.createElement(o.nb, {
                        asset: o.ob.Drops
                    })))))
                }),
                l = n("0LAi"),
                c = new Set(["alt", "src", "srcSet", "sizes", "onError", "onLoad", "refHandler"]);

            function d(e) {
                for (var t = {}, n = 0, a = Object.keys(e); n < a.length; n++) {
                    var r = a[n];
                    c.has(r) && (t[r] = e[r])
                }
                return t
            }
            var u = function(e) {
                var t;
                return e.placeholder ? r.createElement(r.Fragment, null, r.createElement(o.Wa, {
                    margin: {
                        bottom: .5
                    }
                }, r.createElement(o.o, {
                    ratio: o.p.Aspect3x4
                }, r.createElement(o.db, null))), r.createElement(o.W, null, r.createElement(o.db, {
                    width: 150
                })), r.createElement(o.W, {
                    fontSize: o.Ba.Size7
                }, r.createElement(o.db, {
                    width: 100
                }))) : (t = r.createElement(r.Fragment, null, r.createElement(o.Wa, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, r.createElement(o.I, a.__assign({
                    aspect: o.p.BoxArt,
                    borderRadius: o.x.Medium
                }, d(e)))), r.createElement(o.H, null, r.createElement(o.Wa, {
                    display: o.X.Flex
                }, r.createElement(o.Wa, {
                    "data-test-selector": "tw-card-title",
                    "data-a-target": "tw-card-title",
                    flexGrow: 1,
                    flexShrink: 1,
                    margin: {
                        top: .5
                    },
                    ellipsis: !0
                }, r.createElement(o.W, {
                    className: "tw-box-art-card__title",
                    type: o.Nb.H3,
                    fontSize: o.Ba.Size5,
                    lineHeight: o.Xa.Body,
                    ellipsis: !0
                }, e.title)), e.contextualCardActionProps && r.createElement(o.Wa, {
                    margin: {
                        top: .5
                    },
                    flexGrow: 0,
                    flexShrink: 0
                }, r.createElement(e.contextualCardActionProps.component, a.__assign({}, e.contextualCardActionProps.props)))), r.createElement(o.W, {
                    color: o.O.Alt2,
                    ellipsis: !0
                }, e.info))), (e.linkTo || e.onClick || e.disabled) && (t = r.createElement(o.T, {
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
                }, t)), r.createElement("div", a.__assign({
                    className: "tw-box-art-card"
                }, Object(o.bc)(e)), r.createElement(o.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && r.createElement(o.Wa, {
                    margin: {
                        top: .5
                    }
                }, r.createElement(l.a, a.__assign({}, e.tagListProps, {
                    tagNumberLimit: 3
                }))), !0 === e.showDropsBadge && r.createElement(s, null)))
            };
            n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
            })
        },
        rShu: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
                }(a || (a = {}))
        },
        roU9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            });
            var a = "//static-cdn.jtvnw.net/ttv-boxart",
                r = "52x72"
        },
        vDRX: function(e, t, n) {},
        x75U: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            });
            var a = n("mrSG"),
                r = n("17x9"),
                i = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                l = {
                    cardIDtoItemTrackingIDMap: r.object,
                    trackTitleClick: r.func,
                    trackTitleImpression: r.func,
                    trackImpression: r.func,
                    trackClick: r.func
                };

            function c() {
                return function(e) {
                    return function(t) {
                        function n(e) {
                            var n = t.call(this, e) || this;
                            return n.getChildContext = function() {
                                return {
                                    trackTitleClick: n.trackTitleClick,
                                    trackTitleImpression: n.trackTitleImpression,
                                    trackImpression: n.trackImpression,
                                    trackClick: n.trackClick,
                                    cardIDtoItemTrackingIDMap: n.state.cardIDtoItemTrackingIDMap
                                }
                            }, n.mapShelfCardsToRequestIDs = function(e, t, n) {
                                return void 0 === n && (n = {}), e.reduce(function(e, n) {
                                    return n.node && !e[n.node.id] && (e[n.node.id] = t), e
                                }, n)
                            }, n.trackTitleImpression = function(e) {
                                var t = Object(s.f)(e.title),
                                    a = t.reasonType,
                                    r = t.reasonTarget,
                                    i = t.rowName,
                                    l = Object(s.e)(),
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: l,
                                        itemPosition: null,
                                        reasonType: a,
                                        reasonTarget: r,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: i,
                                        rowPosition: n.props.position,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.h)(c, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: l
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.f)(e.title),
                                    a = t.reasonType,
                                    r = t.reasonTarget,
                                    i = t.reasonTargetType,
                                    l = t.rowName,
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: a,
                                        reasonTarget: r,
                                        reasonTargetType: i,
                                        rowName: l,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.g)(c, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, a, r) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var i = Object(s.e)(),
                                        o = Object(s.f)(e.title),
                                        l = o.reasonType,
                                        c = o.reasonTarget,
                                        d = o.reasonTargetType,
                                        u = o.rowName,
                                        m = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: i,
                                            itemPosition: a,
                                            reasonType: l,
                                            reasonTarget: c,
                                            reasonTargetType: d,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: u,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(r),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.h)(m), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = i, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, a, r, i, o) {
                                if (t.node) {
                                    var l = n.state,
                                        c = l.cardIDtoRequestIDMap,
                                        d = l.cardIDtoItemTrackingIDMap,
                                        u = Object(s.f)(e.title),
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
                                            tagSet: JSON.stringify(i),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.g)(f, r)
                                }
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
                            var t = Object(s.f)(this.props.shelf.title).rowName,
                                n = {
                                    trackTitleClick: this.getChildContext().trackTitleClick,
                                    trackTitleImpression: this.getChildContext().trackTitleImpression,
                                    trackImpression: this.getChildContext().trackImpression,
                                    trackClick: this.getChildContext().trackClick,
                                    shelfTrackingProps: {
                                        item_tracking_id: this.state.headerImpressionID,
                                        item_position: null,
                                        row_name: t,
                                        row_position: this.props.position
                                    }
                                };
                            return i.createElement(e, a.__assign({}, this.props, n))
                        }, n.childContextTypes = l, n
                    }(i.Component)
                }
            }
        },
        yI6f: function(e, t, n) {
            "use strict";
            var a, r, i, o, s, l, c, d = n("/7QA"),
                u = n("f00E"),
                m = n("2xye"),
                p = n("3sMy"),
                g = function() {
                    return Object(u.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(r || (r = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(i || (i = {})),
            function(e) {
                e.Card = "card", e.Header = "header"
            }(o || (o = {})),
            function(e) {
                e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
            }(s || (s = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(l || (l = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(c || (c = {}));
            var h = ((a = {})[p.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, a[p.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, a[p.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, a[p.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, a[p.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, a[p.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, a[p.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, a[p.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Clip,
                    rowName: e
                }
            }, a[p.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Vod,
                    rowName: e
                }
            }, a);

            function f(e) {
                var t = e.key;
                return h[t] ? h[t](t, e) : {
                    reasonType: null,
                    reasonTarget: "",
                    reasonTargetType: null,
                    rowName: t
                }
            }

            function v(e, t) {
                var n, a = null,
                    o = null,
                    s = null,
                    l = e.contentEdge && e.contentEdge.node && e.contentEdge.node.id || "";
                if (e.contentEdge) switch (e.contentEdge.node && e.contentEdge.node.__typename) {
                    case "Stream":
                        a = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = i.Live, l = String(n.broadcaster && n.broadcaster.id), s = n.game ? n.game.id : null;
                        break;
                    case "Clip":
                        a = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = i.Clip, s = n.game ? n.game.id : null;
                        break;
                    case "Video":
                        a = (n = e.contentEdge.node).owner && n.owner.id, o = i.Vod, s = n.game ? n.game.id : null;
                        break;
                    case "Game":
                        n = e.contentEdge.node, a = null, o = i.Game, s = n.id
                }
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: r.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: l,
                    channel_id: null === a ? null : Number(a),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: m.PageviewMedium.TwitchHome,
                    row_position: e.rowPosition,
                    content_type: o,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    tag_set: e.tagSet,
                    tag_streamer_set: e.tagStreamerSet,
                    filtered: e.filtered,
                    category: s,
                    tag_id: e.tagID
                }
            }

            function y(e, t) {
                var n = v(e, t);
                d.o.track(m.SpadeEventType.ItemClick, n)
            }

            function k(e, t) {
                var n = v(e, t);
                d.o.track(m.SpadeEventType.ItemDisplay, n)
            }

            function b(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                d.o.track(m.SpadeEventType.RecRequestClient, t)
            }
            var C = n("x75U"),
                w = n("A65o");
            n.d(t, "e", function() {
                return g
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "g", function() {
                return y
            }), n.d(t, "h", function() {
                return k
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, !1, function() {
                return C.a
            }), n.d(t, "j", function() {
                return C.b
            }), n.d(t, !1, function() {
                return w.a
            })
        },
        yziQ: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("yR8l"),
                o = n("geRD"),
                s = n("G1cX");

            function l(e, t, n, a) {
                void 0 === n && (n = {});
                var r = e.readQuery({
                    query: t,
                    variables: n
                });
                if (r) {
                    var i = s(r, function(e) {
                        return e
                    }, function(e) {
                        return a(e)
                    });
                    e.writeQuery({
                        query: t,
                        variables: n,
                        data: i
                    })
                }
            }
            var c = n("Ue10"),
                d = n("4ErZ"),
                u = n("bSYX"),
                m = (n("AXwV"), n("g3/t"));
            n.d(t, "a", function() {
                return p
            });
            var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        inProgress: !1
                    }, t.onClick = function() {
                        t.state.inProgress || t.setState({
                            inProgress: !0
                        }, t.mutateFollowGame)
                    }, t.mutateFollowGame = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.followGameDataLoadedWithoutError() && this.props.data.game ? this.isFollowing() ? [3, 2] : [4, this.followGame(this.props.data.game.id)] : [2];
                                    case 1:
                                        return e.sent(), [3, 4];
                                    case 2:
                                        return [4, this.unfollowGame(this.props.data.game.id)];
                                    case 3:
                                        e.sent(), e.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onMouseEnter = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeave = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !e.categoryChange || this.props.categoryChange && this.props.categoryChange.timestampMs === e.categoryChange.timestampMs || !e.categoryChange.category.games.includes(this.props.title) || this.isFollowing() !== e.categoryChange.shouldFollow && this.onClick()
                }, t.prototype.render = function() {
                    return r.createElement(c.Oa, {
                        position: c.eb.Relative,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement("div", a.__assign({
                        className: "follow-game-card",
                        "data-test-selector": "follow-game-card",
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.onClick
                    }, Object(c.bc)(this.props)), r.createElement(c.G, {
                        key: this.props.title
                    }, r.createElement(c.Wa, {
                        position: c.eb.Relative
                    }, this.renderOverlay(), r.createElement(c.I, {
                        aspect: c.p.Aspect3x4,
                        alt: this.props.imageAlt,
                        src: this.props.imageSrc
                    })), r.createElement(c.H, null, r.createElement(c.Wa, {
                        margin: {
                            top: .5,
                            bottom: 1
                        }
                    }, r.createElement(c.W, {
                        color: c.O.Base,
                        fontSize: c.Ba.Size5
                    }, this.props.title), r.createElement(c.W, {
                        color: c.O.Alt,
                        fontSize: c.Ba.Size6
                    }, this.props.info))))))
                }, t.prototype.renderOverlay = function() {
                    var e, t = this.isFollowing();
                    return this.state.inProgress ? e = r.createElement(c.Ya, {
                        delay: 0
                    }) : this.state.hovered ? e = r.createElement(c.nb, {
                        width: 50,
                        height: 50,
                        asset: t ? c.ob.Unheart : c.ob.Heart
                    }) : t && (e = r.createElement(c.nb, {
                        width: 50,
                        height: 50,
                        asset: c.ob.Heart
                    })), e ? r.createElement(c.xb, {
                        className: "follow-game-card__overlay " + (t ? "follow-game-card__overlay--followed" : ""),
                        background: c.r.Overlay,
                        color: c.O.Overlay,
                        "data-a-target": t ? "follow-game-card--followed" : "",
                        display: c.X.Flex,
                        alignItems: c.f.Center,
                        justifyContent: c.Va.Center,
                        position: c.eb.Absolute,
                        zIndex: c.ac.Above,
                        attachBottom: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, e) : null
                }, t.prototype.followGame = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n = this;
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = a.__assign({}, Object(o.a)({
                                        gameID: e
                                    }), {
                                        update: function(e, t) {
                                            var a = t.data.followGame;
                                            l(e, u, {
                                                name: n.props.title
                                            }, function(e) {
                                                return e.game && a && a.game ? (e.game.self.follow = a.game.self.follow, e) : e
                                            })
                                        },
                                        optimisticResponse: {
                                            followGame: {
                                                __typename: "FollowGamePayload",
                                                game: {
                                                    __typename: "Game",
                                                    self: {
                                                        __typename: "GameSelfConnection",
                                                        follow: {
                                                            __typename: "GameFollow",
                                                            followedAt: (new Date).toISOString()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, this.props.followGame(t)];
                                case 2:
                                    return r.sent(), this.setState({
                                        inProgress: !1
                                    }, function() {
                                        n.props.onFollow && n.props.onFollow(n.props.title)
                                    }), [3, 4];
                                case 3:
                                    return r.sent(), this.setState({
                                        inProgress: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.unfollowGame = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n = this;
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = a.__assign({}, Object(o.a)({
                                        gameID: e
                                    }), {
                                        update: function(e, t) {
                                            var a = t.data.unfollowGame;
                                            l(e, u, {
                                                name: n.props.title
                                            }, function(e) {
                                                return e.game && a && a.game ? (e.game.self.follow = a.game.self.follow, e) : e
                                            })
                                        },
                                        optimisticResponse: {
                                            unfollowGame: {
                                                __typename: "UnfollowGamePayload",
                                                game: {
                                                    __typename: "Game",
                                                    self: {
                                                        __typename: "GameSelfConnection",
                                                        follow: null
                                                    }
                                                }
                                            }
                                        }
                                    }), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, this.props.unfollowGame(t)];
                                case 2:
                                    return r.sent(), this.setState({
                                        inProgress: !1
                                    }, function() {
                                        n.props.onUnfollow && n.props.onUnfollow(n.props.title)
                                    }), [3, 4];
                                case 3:
                                    return r.sent(), this.setState({
                                        inProgress: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.isFollowing = function() {
                    return !!(this.followGameDataLoadedWithoutError() && this.props.data.game && this.props.data.game.self && this.props.data.game.self.follow)
                }, t.prototype.followGameDataLoadedWithoutError = function() {
                    return !(!this.props || !this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.game)
                }, t = a.__decorate([Object(i.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                }), Object(i.a)(d, {
                    name: "followGame"
                }), Object(i.a)(m, {
                    name: "unfollowGame"
                })], t)
            }(r.Component)
        },
        zrz1: function(e, t, n) {}
    }
]);