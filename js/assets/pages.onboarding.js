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
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = a.n.getLastPageview();
                    return e && e.location || i.PageviewLocation.None
                },
                l = function(e) {
                    a.n.trackItemSectionClick({
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
                    a.n.trackItemSectionClick({
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
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, c, d, u = this;
                        return r.__generator(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    return p.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return r.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return r.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, a.o.apollo.client.query({
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
                                    }), c = l.map(function() {
                                        return i.TwitchDataType.Game
                                    }), d = l.map(function() {
                                        return null
                                    }), a.n.trackItemSectionLoad({
                                        carousel_content: i.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: l.length,
                                        rendered_item_list: l,
                                        rendered_item_types: c,
                                        rendered_items_viewcounts: d,
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
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
                }(r || (r = {}))
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
                return a
            }), n.d(t, "b", function() {
                return l
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

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = a.Humanized), t === a.ClockAuto && (t = e >= 3600 ? a.ClockHMS : a.ClockMS), t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        n = r.Hour;
                        break;
                    case a.ClockMS:
                        n = r.Minute
                }
                var l = 2;
                t === a.ClockHMS && (l = 3);
                var d = function(e, t) {
                        void 0 === t && (t = r.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === r.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === r.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === r.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === r.Day ? n : n.days <= 26 || t === r.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== a.Humanized && t !== a.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                    }), t === a.Humanized) return function(e) {
                    return e.months ? o(r.Month, e.months) : e.weeks && e.days ? o(r.Week, e.weeks) + " " + o(r.Day, e.days) : e.weeks ? o(r.Week, e.weeks) : e.days && e.hours ? o(r.Day, e.days) + " " + o(r.Hour, e.hours) : e.days ? o(r.Day, e.days) : e.hours && e.minutes ? o(r.Hour, e.hours) + " " + o(r.Minute, e.minutes) : e.hours ? o(r.Hour, e.hours) : e.minutes && e.seconds ? o(r.Minute, e.minutes) + " " + o(r.Second, e.seconds) : e.minutes ? o(r.Minute, e.minutes) : o(r.Second, e.seconds || 0)
                }(d);
                if (t === a.HumanizedShort) return function(e) {
                    return e.months ? s(r.Month, e.months) : e.weeks && e.days ? "" + s(r.Week, e.weeks) + s(r.Day, e.days) : e.weeks ? s(r.Week, e.weeks) : e.days && e.hours ? "" + s(r.Day, e.days) + s(r.Hour, e.hours) : e.days ? s(r.Day, e.days) : e.hours && e.minutes ? "" + s(r.Hour, e.hours) + s(r.Minute, e.minutes) : e.hours ? s(r.Hour, e.hours) : e.minutes && e.seconds ? "" + s(r.Minute, e.minutes) + s(r.Second, e.seconds) : e.minutes ? s(r.Minute, e.minutes) : s(r.Second, e.seconds || 0)
                }(d);
                var p = ":",
                    m = !1;
                switch (i.o.intl.getLanguageCode()) {
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
                var g = d.seconds || 0,
                    h = d.minutes || 0,
                    f = d.hours || 0;
                switch (t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        var v = (m ? c(f, 2) : f) + p + c(h, 2);
                        return t === a.ClockHMS && (v += p + c(g, 2)), v;
                    case a.ClockMS:
                        return (m ? c(h, 2) : h) + p + c(g, 2)
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
            }(a || (a = {}))
        },
        "6H22": function(e, t, n) {
            e.exports = n.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "7sjZ": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("rShu"),
                a = function(e) {
                    return e === r.a.Communities ? "COMMUNITY" : "GAME"
                }
        },
        "80G/": function(e, t, n) {},
        "8n14": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("D7An"),
                s = n("TDc0"),
                l = n("/MKj"),
                c = n("yR8l"),
                d = n("V+GM"),
                u = n("f00E"),
                p = n("NvVO"),
                m = n("2xye"),
                g = n("kRBY"),
                h = n("GnwI");
            var f = n("H/lO"),
                v = n("NZDK"),
                y = n("9kXc"),
                k = n("roU9"),
                b = n("jkql"),
                w = n("oJmH"),
                C = n("8/mp"),
                _ = n("HAa/"),
                S = n("Uive"),
                T = n("cTNz"),
                E = n("7sjZ"),
                O = n("0OKo"),
                I = n("kduP"),
                x = n("yziQ"),
                D = n("Ue10"),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return null === this.props.game ? a.createElement(D.Va, {
                            "data-test-selector": "community-card__placeholder",
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(D.Va, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(D.o, {
                            ratio: D.p.BoxArt
                        }, a.createElement(D.cb, null)))) : this.props.followGameCardOptions ? a.createElement(D.Va, {
                            key: this.props.followGameCardOptions.category + "-game-" + this.props.game.id
                        }, a.createElement(x.a, {
                            "data-a-target": "follow-game-card-" + this.props.game.id,
                            "data-test-selector": q,
                            info: this.props.game.viewersCount ? Object(i.d)("{viewerCount,number} viewers", {
                                viewerCount: this.props.game.viewersCount
                            }, "CommunitySelectionFollowCard") : "",
                            title: this.props.game.name,
                            imageAlt: this.props.game.name,
                            imageSrc: this.props.game.boxArtURL,
                            onFollow: this.props.followGameCardOptions.onFollow,
                            onUnfollow: this.props.followGameCardOptions.onUnfollow,
                            categoryChange: this.props.followGameCardOptions.categoryChange
                        })) : a.createElement(D.Va, {
                            key: "game-" + this.props.game.id,
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement(D.y, {
                            title: this.props.game.name,
                            info: this.props.game.viewersCount ? Object(i.d)("{viewerCount,number} viewers", {
                                viewerCount: this.props.game.viewersCount
                            }, "CommunitySelectionBoxCard") : "",
                            linkTo: this.props.isCommunity ? Object(I.a)(this.props.game.name) : Object(I.c)(this.props.game.name),
                            alt: this.props.game.name + " cover image",
                            src: this.props.game.boxArtURL
                        }))
                    }, t
                }(a.Component),
                L = n("rShu"),
                G = n("3H/7"),
                P = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
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
                        return a.createElement(N, {
                            game: e,
                            isCommunity: this.props.directoryType === L.a.Communities,
                            followGameCardOptions: this.props.followGameCardOptions
                        })
                    }, t = r.__decorate([Object(c.a)(G, {
                        options: function(e) {
                            return {
                                variables: {
                                    name: e.name,
                                    type: Object(E.a)(e.directoryType)
                                }
                            }
                        }
                    }), Object(O.a)("CommunityCard")], t)
                }(a.Component),
                A = "community-card-row__ad",
                F = 6,
                j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            adDisplayed: !1
                        }, t.renderCards = function(e) {
                            return t.props.withAd ? t.renderCardGridWithAdSlot() : t.renderCardsWithoutAdSlot(e)
                        }, t.renderCardsWithoutAdSlot = function(e) {
                            var n = t.renderCardsFromProps(),
                                r = 1 === n.length ? 1 : 0;
                            return a.createElement(D.Va, {
                                padding: {
                                    x: 1,
                                    top: 2
                                }
                            }, a.createElement(D.Tb, {
                                gutterSize: D.Vb.Small,
                                childWidth: t.props.cardSize,
                                placeholderItems: t.props.placeholderItems ? t.props.placeholderItems : r,
                                noWrap: e
                            }, n))
                        }, t.renderCardGridWithAdSlot = function() {
                            var e = a.createElement(D.Va, {
                                    key: "ad",
                                    "data-test-selector": A,
                                    display: D.W.Flex,
                                    flexGrow: 1,
                                    justifyContent: D.Ua.Center,
                                    padding: {
                                        bottom: t.state.adDisplayed ? 2 : 0,
                                        left: t.state.adDisplayed ? 1 : 0
                                    }
                                }, a.createElement(S.a, {
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
                                    return a.createElement(D.P, {
                                        key: "game-" + t.toString(),
                                        cols: 2
                                    }, e)
                                });
                            return n.splice(4, 0, e), a.createElement(D.Va, {
                                padding: {
                                    x: 1
                                }
                            }, a.createElement(D.Ha, null, n))
                        }, t.renderCardsFromProps = function() {
                            if (t.props.games) {
                                var e = t.props.games;
                                return t.props.withAd && !t.state.adDisplayed && (e = e.slice(0, F)), e.map(function(e, n) {
                                    return a.createElement(N, {
                                        key: "community-card-" + e.id + "-" + n,
                                        game: e,
                                        isCommunity: t.props.directoryType === L.a.Communities,
                                        followGameCardOptions: t.props.followGameCardOptions
                                    })
                                })
                            }
                            if (t.props.names) {
                                var n = t.props.names;
                                return t.props.withAd && !t.state.adDisplayed && (n = n.slice(0, F)), n.map(function(e, n) {
                                    return a.createElement(P, {
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.isScrollable ? a.createElement(C.b, null, this.renderCards(!0)) : this.renderCards(!1)
                    }, t
                }(a.Component),
                V = Object(h.c)("CommunityCardRow")(j),
                M = n("Hz/u"),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFollow = function() {
                            t.props.onFollowCategoryChange(t.props.category, !0)
                        }, t.onUnfollow = function() {
                            t.props.onFollowCategoryChange(t.props.category, !1)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.props.isFollowingAllGamesInCategory) return a.createElement(D.A, {
                            ariaLabel: Object(i.d)("Unfollow All", "OnboardingFollowCategory"),
                            "data-test-selector": "onboarding-follow-category-button-component",
                            icon: D.nb.Heart,
                            onClick: this.onUnfollow,
                            statusAlertIcon: D.nb.Unheart
                        });
                        var e = Object(i.d)("Follow All", "OnboardingFollowCategory");
                        return a.createElement(D.z, {
                            icon: D.nb.Heart,
                            ariaLabel: e,
                            "data-test-selector": "onboarding-follow-category-button-component",
                            onClick: this.onFollow
                        }, e)
                    }, t
                }(a.Component),
                U = 3,
                W = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.renderCategoryContent = function() {
                            if (n.props.withStreams) {
                                var e = n.props.data.games.slice(0, U);
                                return a.createElement(M.a, {
                                    names: e,
                                    withAd: n.props.withAd,
                                    directoryType: L.a.Games,
                                    trackingMedium: n.props.trackingMedium
                                })
                            }
                            var t = void 0;
                            return n.props.withStreams || n.props.withBoxArtGameCards || (t = {
                                category: n.props.data.name,
                                categoryChange: n.state.categoryChange,
                                onFollow: n.props.onFollow,
                                onUnfollow: n.props.onUnfollow
                            }), a.createElement(V, {
                                names: n.props.data.games,
                                directoryType: L.a.Games,
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
                        var r = i.o.experiments.getAssignment(o.b.WebOnboardingFollowCategories);
                        return n.state = {
                            categoryChange: null,
                            isFollowCategoriesExperimentEnabled: r === s.c.ENABLED
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(D.Va, {
                            "data-test-selector": "community-category",
                            flexShrink: 0
                        }, a.createElement(D.Va, {
                            alignItems: D.f.Center,
                            display: D.W.Flex,
                            flexWrap: D.Z.NoWrap
                        }, a.createElement(D.Va, {
                            margin: {
                                x: 1,
                                bottom: .5
                            }
                        }, a.createElement(D.V, {
                            "data-test-selector": "community-category__title",
                            color: D.O.Base,
                            fontSize: D.Aa.Size3,
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
                        }(this.props.data.name))), this.state.isFollowCategoriesExperimentEnabled && !this.props.withStreams && !this.props.withBoxArtGameCards && a.createElement(D.xb, {
                            margin: {
                                left: 2
                            }
                        }, a.createElement(R, {
                            category: this.props.data,
                            onFollowCategoryChange: this.onFollowCategoryChange,
                            isFollowingAllGamesInCategory: this.props.isFollowingAllGamesInCategory
                        }))), a.createElement(D.Va, null, a.createElement(D.Na, {
                            flexGrow: 1
                        }, this.renderCategoryContent())))
                    }, t
                }(a.Component),
                H = Object(h.c)("CommunityCategory", {
                    autoReportInteractive: !0
                })(W),
                B = n("AO3T"),
                z = n("R+eK"),
                q = (n("JJ+Z"), "onboarding_game"),
                Y = 100,
                Q = 500,
                X = function(e) {
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
                                        a = t.currentUser.followedGames.nodes.slice();
                                    return a.push(n), r.__assign({}, t, {
                                        currentUser: r.__assign({}, t.currentUser, {
                                            followedGames: r.__assign({}, t.currentUser.followedGames, {
                                                nodes: a
                                            })
                                        })
                                    })
                                }
                                return t
                            }), Object(B.e)(m.SpadeEventType.GameFollow, e)
                        }, n.onUnfollow = function(e) {
                            n.props.data.updateQuery(function(t) {
                                return t.currentUser && t.currentUser.followedGames && t.currentUser.followedGames.nodes ? r.__assign({}, t, {
                                    currentUser: r.__assign({}, t.currentUser, {
                                        followedGames: r.__assign({}, t.currentUser.followedGames, {
                                            nodes: t.currentUser.followedGames.nodes.filter(function(t) {
                                                return t.name !== e
                                            })
                                        })
                                    })
                                }) : t
                            }), Object(B.e)(m.SpadeEventType.GameUnfollow, e)
                        }, n.completeAndRedirectToForYou = function() {
                            Object(B.d)();
                            var e = "" === location.search ? "?tt_medium=onboarding" : location.search + "&tt_medium=onboarding";
                            n.state.inDiscoveryFrontpageExperiment ? window.location.assign("/" + e) : window.location.assign("/directory/following/foryou" + e)
                        }, n.moveNextToChannelSurfing = function() {
                            i.o.history.push("/hi/surf" + location.search)
                        }, n.redirectToFrontPage = function() {
                            window.location.assign("/" + location.search)
                        }, n.onGameInputChange = function(e) {
                            e.persist(), n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.inputTimer = setTimeout(function() {
                                n.props.onSearchChange(e.target.value), n.inputTimer = 0
                            }, Q)
                        }, n.userFollowedGamesDataLoaded = function(e) {
                            return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                        };
                        var a = i.o.experiments.getAssignment(o.b.WebOnboarding),
                            l = i.o.experiments.getAssignment(o.b.WebOnboardingChannelSurfing),
                            c = i.o.experiments.getAssignment(o.b.DiscoveryFrontpageMVP);
                        return n.state = {
                            inOnboardingExperiment: Object(s.g)(a),
                            inChannelSurfingExperiment: Object(s.e)(a, l),
                            inDiscoveryFrontpageExperiment: Object(s.f)(c)
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldRedirect(this.props, this.state) && this.redirectToFrontPage(), i.o.setPageTitle(Object(i.d)("Welcome", "CommunitySelectionPage"))
                    }, t.prototype.componentWillUpdate = function(e, t) {
                        this.shouldRedirect(e, t) && this.redirectToFrontPage(), (!this.props.categoryData && e.categoryData || this.props.categoryData && e.categoryData && this.props.categoryData.length !== e.categoryData.length) && this.mapGamesToCategories(e.categoryData)
                    }, t.prototype.componentDidUpdate = function() {
                        this.userFollowedGamesDataLoaded(this.props) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.userFollowedGamesDataLoaded(this.props) && this.state.inOnboardingExperiment ? a.createElement(D.xb, {
                            className: "community-selection-page",
                            "data-a-target": "community-selection-page",
                            "data-test-selector": "onboarding-community-selection",
                            background: D.r.Alt2,
                            display: D.W.Flex,
                            flexDirection: D.Y.Column,
                            fullHeight: !0
                        }, a.createElement(D.xb, {
                            background: D.r.Base,
                            display: D.W.Flex,
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
                            justifyContent: D.Ua.Between,
                            flexShrink: 0,
                            fullWidth: !0,
                            borderBottom: !0
                        }, a.createElement(D.Va, {
                            className: "community-selection-page__search",
                            margin: {
                                left: 1
                            },
                            flexShrink: 1,
                            attachLeft: !0
                        }, a.createElement(D.pb, {
                            id: "onboarding-community-selection__search",
                            "data-a-target": "onboarding-community-selection__search",
                            onChange: this.onGameInputChange,
                            placeholder: Object(i.d)("Search Games", "CommunitySelectionPage"),
                            spellCheck: !1
                        })), this.renderTitleText(), this.renderCTA()), a.createElement(D.gb, {
                            size: D.ib.Small,
                            value: this.calculateProgress()
                        }), a.createElement(C.b, null, a.createElement(D.xb, {
                            background: D.r.Alt2,
                            overflow: D.Ya.Hidden,
                            padding: {
                                left: 1,
                                y: 2
                            },
                            fullHeight: !0
                        }, this.renderGameCardsOrCategories(), a.createElement(C.a, {
                            enabled: this.props.categoriesInfiniteScrollEnabled,
                            loadMore: this.props.onLoadMoreCategories,
                            orientation: _.b.Down,
                            pixelThreshold: 20
                        })))) : this.props.data.error ? (i.j.warn("Data Error in Onboarding Community Selection", this.props.data.error), a.createElement(D.Va, {
                            display: D.W.Flex
                        }, a.createElement(D.V, {
                            fontSize: D.Aa.Size5,
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
                        return a.createElement(D.Va, {
                            display: D.W.Flex,
                            alignItems: D.f.Center,
                            flexDirection: D.Y.Column,
                            flexShrink: 1
                        }, a.createElement(D.Va, {
                            margin: {
                                top: .5,
                                x: 1
                            }
                        }, a.createElement(D.V, {
                            color: D.O.Base,
                            fontSize: D.Aa.Size5,
                            breakpointLarge: {
                                fontSize: D.Aa.Size4
                            },
                            breakpointExtraExtraLarge: {
                                fontSize: D.Aa.Size3
                            }
                        }, Object(i.d)("First, pick three or more you’d like to watch.", "CommunitySelectionPage"))), a.createElement(D.Va, {
                            margin: {
                                y: .5
                            },
                            display: D.W.Hide,
                            breakpointMedium: {
                                display: D.W.Block
                            }
                        }, a.createElement(D.V, {
                            color: D.O.Alt,
                            fontSize: D.Aa.Size6,
                            breakpointLarge: {
                                fontSize: D.Aa.Size5
                            },
                            breakpointExtraExtraLarge: {
                                fontSize: D.Aa.Size4
                            }
                        }, Object(i.d)("We have tons of games, hobbies, and activities being streamed right now.", "CommunitySelectionPage"))))
                    }, t.prototype.renderCTA = function() {
                        return a.createElement(D.Va, {
                            margin: {
                                right: 1
                            },
                            attachRight: !0
                        }, a.createElement(D.z, {
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
                            return a.createElement(V, {
                                games: this.props.gameData,
                                directoryType: L.a.Games,
                                cardSize: D.Ub.Small,
                                followGameCardOptions: t,
                                placeholderItems: 99
                            })
                        }
                        if (this.props.categoryData) {
                            var n = this.getCategoryFollowCounts();
                            return this.props.categoryData.map(function(t) {
                                var r = !!n && (n[t.name] || 0) === t.games.length;
                                return a.createElement(H, {
                                    key: t.name,
                                    data: t,
                                    cardSize: D.Ub.ExtraSmall,
                                    trackingMedium: m.PageviewMedium.BrowseForYou,
                                    isFollowingAllGamesInCategory: r,
                                    onFollow: e.onFollow,
                                    onUnfollow: e.onUnfollow
                                })
                            })
                        }
                    }, t
                }(a.Component),
                Z = Object(w.compose)(Object(c.a)(z, {
                    options: {
                        variables: {
                            limit: 10
                        }
                    }
                }), Object(h.c)("CommunitySelectionPageComponent"))(X),
                J = "285x380",
                $ = 5,
                K = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            searching: !1,
                            categoryEndIndex: $
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
                            return r.__awaiter(n, void 0, void 0, function() {
                                var t, n, a, o;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            t = Object(u.a)(), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(f.a.Games, e, t, {
                                                hitsPerPage: Y
                                            })];
                                        case 2:
                                            return (n = r.sent()) && (a = Object(y.b)({
                                                searchResults: n
                                            }), this.setState({
                                                searchGameResults: a.currentGameResults ? a.currentGameResults.results : []
                                            })), [3, 4];
                                        case 3:
                                            return o = r.sent(), i.j.error(o, "Algolia top results search failed"), this.setState({
                                                searchGameResults: []
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.loadMoreCategories = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(t) {
                                    return this.state.categoryData && (e = Math.min(this.state.categoryEndIndex + $, this.state.categoryData.length)) > this.state.categoryEndIndex && this.setState({
                                        categoryEndIndex: e
                                    }), [2]
                                })
                            })
                        }, n.mapDataToGame = function(e, t, n) {
                            return {
                                id: n || e.toString(),
                                name: e,
                                boxArtURL: k.a + "/" + encodeURIComponent(e) + "-" + J + ".jpg",
                                viewersCount: t
                            }
                        }, n.searchClient = new v.a({
                            appId: i.a.algoliaApplicationID,
                            apiKey: i.a.algoliaAPIKey,
                            apolloClient: i.o.apollo.client,
                            logger: i.j,
                            config: i.a,
                            stats: i.o.stats
                        }), n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
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
                        return a.createElement(Z, {
                            gameData: this.getData(),
                            categoryData: this.state.categoryData && this.state.categoryData.slice(0, this.state.categoryEndIndex),
                            onSearchChange: this.onSearchChange,
                            categoriesInfiniteScrollEnabled: !!this.state.categoryData && this.state.categoryEndIndex !== this.state.categoryData.length,
                            onLoadMoreCategories: this.loadMoreCategories
                        })
                    }, t.prototype.fetchCategories = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, function() {
                                            return r.__awaiter(this, void 0, void 0, function() {
                                                return r.__generator(this, function(e) {
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
                                        return e = a.sent(), t = e.map(function(e) {
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
                    }, t = r.__decorate([Object(c.a)(b, {
                        options: {
                            variables: {
                                limit: Y
                            }
                        },
                        skip: function(e) {
                            return !e.isLoggedIn || e.isCategoriesExperimentEnabled
                        }
                    }), Object(d.a)({
                        location: m.PageviewLocation.OnboardingCommunitySelection
                    }), Object(h.c)("CommunitySelectionPage", {
                        destination: p.a.OnboardingIndex
                    })], t)
                }(a.Component);
            var ee = Object(l.connect)(function(e) {
                    return {
                        isLoggedIn: Object(g.f)(e)
                    }
                })(K),
                te = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this,
                            r = i.o.experiments.getAssignment(o.b.WebOnboardingCategories) === s.a.Yes;
                        return n.state = {
                            isCategoriesExperimentEnabled: r
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return null === this.state.isCategoriesExperimentEnabled ? null : a.createElement(ee, {
                            isCategoriesExperimentEnabled: this.state.isCategoriesExperimentEnabled
                        })
                    }, t
                }(a.Component),
                ne = n("wIs1"),
                re = n("2INN"),
                ae = n("jKe7"),
                ie = n("ZS2+"),
                oe = n("/0dD"),
                se = n("76Lv"),
                le = n("/8Zs"),
                ce = n("W2HU"),
                de = (n("T6t+"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.isLoggedIn ? a.createElement(D.Na, {
                            position: D.db.Relative,
                            attachTop: !0,
                            fullWidth: !0
                        }, a.createElement("nav", {
                            className: "top-nav",
                            "data-a-target": "top-nav-container"
                        }, a.createElement(D.Va, {
                            className: "top-nav__menu",
                            display: D.W.Flex,
                            alignItems: D.f.Stretch,
                            flexWrap: D.Z.NoWrap,
                            fullHeight: !0
                        }, a.createElement(D.Na, {
                            display: D.W.InlineFlex,
                            alignItems: D.f.Center,
                            flexShrink: 0
                        }, a.createElement("span", {
                            className: "top-nav__home-link"
                        }, a.createElement(D.mb, {
                            asset: D.nb.LogoGlitch,
                            width: 30,
                            height: 30
                        }))), a.createElement(D.Va, {
                            className: "top-nav__nav-items-container",
                            display: D.W.Flex,
                            flexGrow: 1,
                            flexWrap: D.Z.NoWrap,
                            flexShrink: 0
                        }, ""), a.createElement(D.Va, {
                            className: "top-nav__nav-items-container",
                            display: D.W.Flex,
                            alignItems: D.f.Stretch,
                            flexWrap: D.Z.NoWrap,
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(ce.a, {
                            isOnboarding: !0
                        }))))) : (i.j.warn("OnboardingTopNavComponent is only meant to be used for logged in users."), null)
                    }, t = r.__decorate([Object(h.c)("OnboardingTopNav")], t)
                }(a.Component));
            var ue = Object(l.connect)(function(e) {
                    return {
                        isLoggedIn: Object(g.f)(e)
                    }
                })(de),
                pe = ie.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(164)]).then(n.bind(null, "6tis"))
                }, "ChannelSurfingPage"),
                me = ie.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "8n14"))
                }, "CommunitySelectionPage"),
                ge = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.isLoggedIn || window.location.assign("/" + location.search)
                    }, t.prototype.render = function() {
                        return a.createElement(D.Va, {
                            className: Object(se.b)(oe.a.Dark),
                            display: D.W.Flex,
                            flexDirection: D.Y.Column,
                            flexWrap: D.Z.NoWrap,
                            fullHeight: !0,
                            fullWidth: !0
                        }, a.createElement(ue, null), a.createElement(D.Va, {
                            display: D.W.Flex,
                            flexWrap: D.Z.NoWrap,
                            position: D.db.Relative,
                            fullHeight: !0,
                            fullWidth: !0
                        }, a.createElement(D.Na, {
                            overflow: D.Ya.Hidden,
                            position: D.db.Relative,
                            display: D.W.Flex,
                            flexDirection: D.Y.Column,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0
                        }, a.createElement("main", {
                            className: le.a
                        }, a.createElement(ae.a, null, a.createElement(re.a, {
                            path: "/hi/surf",
                            component: pe
                        }), a.createElement(re.a, {
                            path: "/hi",
                            component: me
                        }))))))
                    }, t = r.__decorate([Object(h.c)("OnboardingRoot", {
                        autoReportInteractive: !0
                    })], t)
                }(a.Component);
            var he = Object(ne.a)(Object(l.connect)(function(e) {
                return {
                    isLoggedIn: Object(g.f)(e)
                }
            })(ge));
            n.d(t, "CommunitySelectionPage", function() {
                return te
            }), n.d(t, "OnboardingRoot", function() {
                return he
            })
        },
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
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
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games"
                }(r || (r = {}))
        },
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("yI6f"),
                o = n("x75U");

            function s() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.trackImpression = function(t) {
                                e.context.trackImpression(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t)
                            }, e.trackClick = function(t, n, r) {
                                "string" != typeof r && (r = void 0), e.context.trackClick(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t, n, r)
                            }, e
                        }
                        return r.__extends(n, t), n.prototype.render = function() {
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
                            return a.createElement(e, r.__assign({}, this.props, d))
                        }, n.contextTypes = o.a, n
                    }(a.Component)
                }
            }
        },
        AO3T: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "c", function() {
                return u
            });
            var r, a, i = n("/7QA"),
                o = n("2xye");
            ! function(e) {
                e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
            }(r || (r = {})),
            function(e) {
                e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
            }(a || (a = {}));
            var s = function(e) {
                    var t = {
                        source: e.source,
                        action: a.Start
                    };
                    i.n.track(o.SpadeEventType.OnboardingEvent, t)
                },
                l = function() {
                    var e = {
                        source: r.HomepageCTA,
                        action: a.Dismissed
                    };
                    i.n.track(o.SpadeEventType.OnboardingEvent, e)
                },
                c = function() {
                    var e = {
                        source: r.HomepageCTA,
                        action: a.Completed
                    };
                    i.n.track(o.SpadeEventType.OnboardingEvent, e)
                },
                d = function(e, t) {
                    var n = {
                        src: o.SpadeEventType.OnboardingEvent,
                        game: t
                    };
                    i.n.track(e, n)
                },
                u = function(e) {
                    i.n.track(o.SpadeEventType.BrowseForYou, e)
                }
        },
        AXwV: function(e, t, n) {},
        B3R5: function(e, t, n) {},
        CCqK: function(e, t, n) {},
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("/MKj"),
                s = n("TSYQ"),
                l = n("YhoA"),
                c = n("Ue10"),
                d = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        r = e.game.toLowerCase(),
                        i = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = r === l.a.CounterStrike, t)),
                        o = r === l.a.CounterStrike ? 40 : 20;
                    return a.createElement(c.Va, {
                        className: i
                    }, a.createElement("div", {
                        style: {
                            backgroundImage: "url(" + n.spriteURL + ")",
                            backgroundPositionX: n.spriteOffsetX ? -1 * n.spriteOffsetX : 0,
                            backgroundPositionY: n.spriteOffsetY ? -1 * n.spriteOffsetY : 0,
                            width: n.imageWidth ? n.imageWidth + "px" : "2rem",
                            height: n.imageWidth ? n.imageHeight + "px" : "2rem",
                            transform: "scale(" + (n.imageWidth > 0 ? o / n.imageWidth : 1) + ")",
                            transformOrigin: "0 0"
                        }
                    }))
                }),
                u = n("On2s"),
                p = (n("CCqK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            metadataDetails: null
                        }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Object(u.b)(this.props.streamMetadata, this.props.game)];
                                        case 2:
                                            if (e = n.sent()) {
                                                if (this.didUnmount) return [2];
                                                this.setState({
                                                    metadataDetails: e
                                                })
                                            }
                                            return [3, 4];
                                        case 3:
                                            return t = n.sent(), i.j.error(t, "Failed to get metadata details."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.loadStreamMetadataDetails()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                    }, t.prototype.componentWillUnmount = function() {
                        this.didUnmount = !0
                    }, t.prototype.render = function() {
                        return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? a.createElement(c.Va, {
                            className: "preview-card-appendage",
                            display: c.W.Flex
                        }, a.createElement(c.Va, {
                            className: "preview-card-appendage__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: c.W.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Ua.End
                        }, a.createElement("div", null, a.createElement(d, {
                            game: this.props.game,
                            spriteDetails: this.state.metadataDetails.spriteDetails
                        }))), a.createElement(c.xb, {
                            flexGrow: 1,
                            flexShrink: 1,
                            borderTop: !0,
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: c.W.Flex,
                            overflow: c.Ya.Hidden
                        }, a.createElement(c.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: c.Ya.Hidden
                        }, a.createElement(c.V, {
                            ellipsis: !0
                        }, this.state.metadataDetails.name)), a.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(c.V, null, this.state.metadataDetails.label)))) : null
                    }, t
                }(a.Component));
            var m = Object(o.connect)(function(e) {
                    return {
                        leagueOfLegends: {
                            championsMap: e.directory.leagueOfLegends.championsMap
                        }
                    }
                })(p),
                g = n("5zf8"),
                h = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return a.createElement(c.Va, {
                            className: "preview-card-game-balloon-row",
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap
                        }, a.createElement(c.Sa, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row,
                            padding: .5
                        }, a.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: c.x.Small,
                            overflow: c.Ya.Hidden,
                            position: c.db.Relative
                        }, a.createElement(c.o, {
                            align: c.d.Center,
                            ratio: c.p.BoxArt
                        }, a.createElement(c.S, r.__assign({}, e))), a.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: c.f.Center,
                            background: c.r.Overlay,
                            color: c.O.Overlay,
                            display: c.W.Flex,
                            justifyContent: c.Ua.Center,
                            position: c.db.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(c.mb, {
                            asset: c.nb.Play,
                            type: c.ob.Inherit
                        }))), a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, a.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, a.createElement(c.V, null, this.props.gameChange.label)), a.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, a.createElement(c.V, null, Object(g.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                f = n("0INk"),
                v = n("8/mp"),
                y = n("eJ65"),
                k = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(f.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(c.Va, {
                            className: "preview-card-game-balloon",
                            display: c.W.InlineBlock,
                            position: c.db.Relative,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(y.a, {
                            key: "game-balloon",
                            display: c.W.Inline,
                            onToggle: this.onBalloonToggle
                        }, a.createElement(c.z, {
                            type: c.F.Hollow,
                            icon: c.nb.ViewerList
                        }, a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row
                        }, a.createElement(c.V, null, Object(i.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(c.Va, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(c.ab, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), a.createElement(c.u, {
                            direction: c.v.TopLeft,
                            size: c.w.Medium
                        }, a.createElement(c.Va, {
                            overflow: c.Ya.Hidden,
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap
                        }, a.createElement(c.Va, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, a.createElement(c.V, {
                            color: c.O.Alt2
                        }, Object(i.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(c.Va, {
                            className: "preview-card-game-balloon__content",
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: c.Z.NoWrap
                        }, a.createElement(v.b, null, a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return a.createElement(h, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(a.Component)),
                b = n("kduP"),
                w = n("2xye"),
                C = function(e) {
                    return a.createElement(c.Va, null, a.createElement(c.V, {
                        color: c.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, r) {
                        return a.createElement(c.Na, {
                            key: n
                        }, a.createElement(c.T, {
                            to: {
                                pathname: Object(b.c)(t.label),
                                state: {
                                    content: w.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: c.U.Inherit
                        }, t.label, _(n, r.length - 1) ? null : ", "))
                    })))
                },
                _ = function(e, t) {
                    return e === t
                },
                S = n("N0BP"),
                T = (n("XA5B"), function(e) {
                    var t = a.createElement(c.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: c.x.Small,
                        overflow: c.Ya.Hidden
                    }, a.createElement(c.o, {
                        ratio: e.aspect || c.p.BoxArt,
                        align: c.d.Center
                    }, a.createElement(c.S, r.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(c.T, r.__assign({}, Object(S.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            T.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var E, O = function(e) {
                    var t = s("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return a.createElement(c.Va, {
                        display: c.W.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: c.Ua.Between,
                        alignItems: c.f.Center,
                        className: t
                    }, a.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, a.createElement(c.V, {
                        "data-test-selector": "top-bar-title-selector",
                        color: c.O.Overlay,
                        bold: !0,
                        transform: c.Mb.Uppercase
                    }, e.title)), e.subTitle && a.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, a.createElement(c.V, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: c.O.Overlay
                    }, e.subTitle)))
                },
                I = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, a.createElement(c.gb, {
                        borderRadius: c.x.None,
                        size: c.ib.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var i = 1,
                        o = null;
                    return e.topBar && (o = a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(O, r.__assign({}, e.topBar))), i = 3), a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                x = (n("kF1+"), function(e) {
                    var t = e.icon && a.createElement(c.Va, {
                        display: c.W.Flex,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(c.mb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? a.createElement(c.xb, {
                        alignItems: c.f.Center,
                        background: c.r.Overlay,
                        borderRadius: c.x.Small,
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        fontSize: c.Aa.Size6,
                        justifyContent: c.Ua.Center
                    }, t, a.createElement(c.V, null, e.value)) : a.createElement(c.xb, {
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, a.createElement(c.V, null, e.value))
                }),
                D = n("GnwI"),
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), a.createElement("div", r.__assign({}, e, {
                            onClick: this.props.onClick
                        }), a.createElement(c.xb, {
                            background: c.r.Alt2,
                            overflow: c.Ya.Hidden
                        }, a.createElement(c.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                            className: n
                        }, a.createElement(c.S, r.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : a.createElement("div", {
                            className: n
                        }, a.createElement(c.S, r.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(a.Component)),
                L = Object(D.c)("PreviewCardThumbnail")(N),
                G = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return a.createElement(c.Va, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, a.createElement(c.V, {
                            color: c.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : a.createElement(c.T, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: c.U.Inherit
                        }, e.text)))
                    })), a.createElement("div", null, a.createElement(c.T, r.__assign({}, Object(S.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: c.U.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), a.createElement(c.V, {
                        type: c.Nb.H3,
                        fontSize: c.Aa.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), a.createElement(c.Va, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                P = n("H1ft"),
                A = n("ZbA5"),
                F = n("QVaV"),
                j = n("hyVY"),
                V = n("MXoD"),
                M = n("0LAi"),
                R = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(E || (E = {}));
            var U, W, H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(i.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(i.d)("unlocked", "VideoPreviewCardRestriction") : Object(i.d)("locked", "VideoPreviewCardRestriction"),
                        r = t ? c.nb.Unlock : c.nb.Lock;
                    return a.createElement(c.Va, null, !t && a.createElement(c.xb, {
                        background: c.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: c.ac.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: c.Jb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: c.f.Center,
                        alignContent: c.e.Center,
                        flexDirection: c.Y.Column,
                        flexWrap: c.Z.Wrap,
                        justifyContent: c.Ua.Center,
                        "data-test-selector": E.LockSelector
                    }, a.createElement(c.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(c.V, {
                        color: c.O.Overlay,
                        fontSize: c.Aa.Size5,
                        "data-test-selector": E.UpsellSelector
                    }, Object(i.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), a.createElement(c.Va, null, a.createElement(c.z, {
                        type: c.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), a.createElement(c.xb, {
                        display: c.W.InlineFlex,
                        position: c.db.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: c.ac.Default,
                        fontSize: c.Aa.Size6,
                        background: c.r.Overlay,
                        borderRadius: c.x.Medium,
                        color: c.O.Overlay
                    }, a.createElement(c.Qb, {
                        direction: this.props.attachTop ? c.Sb.Bottom : c.Sb.Top,
                        align: c.Rb.Right,
                        label: n
                    }, a.createElement(c.mb, {
                        asset: r,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(a.PureComponent);
            n("5NSO");

            function B(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function z(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(U || (U = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(W || (W = {}));
            var q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(R.b)(), t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", r.__assign({
                            className: "preview-card"
                        }, Object(S.a)(this.props)), a.createElement(c.xb, {
                            position: c.db.Relative,
                            borderRadius: c.x.Medium,
                            overflow: c.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(c.T, {
                            to: Object(V.a)(this.getTrackingContext(w.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(L, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: B(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), a.createElement(c.Va, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && a.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(this.props.contextualCardActionProps.component, r.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? a.createElement(I, {
                            topLeft: a.createElement(A.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(x, {
                                value: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : B(this.props) ? a.createElement(I, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(x, {
                                value: Object(j.b)(this.props.durationInSeconds),
                                icon: c.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(x, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(x, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: a.createElement(x, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : z(this.props) ? a.createElement(I, {
                            topLeft: a.createElement(x, {
                                value: Object(j.b)(this.props.durationInSeconds),
                                icon: c.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(x, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: a.createElement(x, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return B(this.props) && this.props.listPosition ? Object(i.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return B(this.props) || z(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === W.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(T, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(V.a)(this.getTrackingContext(w.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: c.p.BoxArt,
                            "data-test-selector": U.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === W.SingleGameList || this.props.context === W.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(T, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(V.a)(this.getTrackingContext(w.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: c.p.Aspect1x1,
                            "data-test-selector": U.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(F.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(V.a)(this.getTrackingContext(w.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), z(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(i.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : B(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== W.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(V.a)(this.getTrackingContext(w.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(G, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(V.a)(this.getTrackingContext(w.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(c.Va, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(M.a, r.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderAppendages = function() {
                        if (this.props.playerMetadata && this.props.playerMetadataGame) return a.createElement(c.Va, {
                            margin: {
                                top: this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? .5 : 0
                            }
                        }, a.createElement(m, {
                            streamMetadata: this.props.playerMetadata,
                            game: this.props.playerMetadataGame
                        }))
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return B(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(H, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!B(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === P.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, r) {
                        switch (e) {
                            case P.a.Balloon:
                                return a.createElement(k, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: r
                                });
                            case P.a.Inline:
                                return a.createElement(C, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case P.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                Y = Object(D.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(q);
            n.d(t, !1, function() {
                return U
            }), n.d(t, "b", function() {
                return W
            }), n.d(t, !1, function() {
                return q
            }), n.d(t, "a", function() {
                return Y
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r, a = n("/7QA"),
                i = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(r || (r = {}));
            var o = function() {
                switch (a.o.experiments.getAssignment(i.b.Archer)) {
                    case "balloon":
                        return r.Balloon;
                    case "inline":
                        return r.Inline;
                    case "control":
                    default:
                        return r.None
                }
            }
        },
        "Hz/u": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("Uive"),
                o = n("cTNz"),
                s = n("GnwI"),
                l = n("yR8l"),
                c = n("7sjZ"),
                d = n("0OKo"),
                u = n("ZbA5"),
                p = n("oB8h"),
                m = n("17x9"),
                g = n("/7QA"),
                h = n("AO3T"),
                f = n("hX9f"),
                v = n("Ue10"),
                y = function(e) {
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
                                action: h.a.Impression,
                                parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                                content_index: t.props.streamIndex
                            };
                            Object(h.c)(e)
                        }, t.trackClickEvent = function() {
                            var e = {
                                channel_id: t.props.streamNode.id,
                                action: h.a.Click,
                                parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                                content_index: t.props.streamIndex
                            };
                            Object(h.c)(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.context.registerReceiver;
                        e ? this.unregister = e(this) : g.j.warn("<StreamThumbnailWithTrackingComponent /> initialized missing a <ScrollableArea /> provider")
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return a.createElement("div", {
                            onClick: this.trackClickEvent
                        }, a.createElement(v.Va, {
                            refDelegate: this.setRef
                        }, a.createElement(f.b, {
                            key: this.props.streamIndex,
                            directoryName: this.props.directoryName,
                            directoryType: this.props.directoryType,
                            streamIndex: this.props.streamIndex,
                            streamNode: this.props.streamNode,
                            trackingMedium: this.props.trackingMedium
                        })))
                    }, t.prototype.checkVisible = function(e) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                return !this.impressionEventFired && this.isVisible(e) && (this.trackImpression(), this.impressionEventFired = !0), [2]
                            })
                        })
                    }, t.contextTypes = {
                        registerReceiver: m.func
                    }, t
                }(a.Component),
                k = "community-stream__placeholder",
                b = "community-stream",
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderStream = function() {
                            return t.props.data ? a.createElement(v.Va, {
                                "data-test-selector": b,
                                position: v.db.Relative
                            }, a.createElement(v.Va, {
                                padding: .5,
                                position: v.db.Absolute,
                                zIndex: v.ac.Above
                            }, a.createElement(u.a, {
                                type: p.a.Live
                            })), a.createElement(y, {
                                key: t.props.data.id,
                                trackingMedium: t.props.trackingMedium,
                                directoryName: t.props.directoryName,
                                directoryType: t.props.directoryType,
                                streamIndex: t.props.index,
                                streamNode: t.props.data
                            })) : a.createElement(v.Va, {
                                "data-test-selector": k,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(v.Va, {
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(v.o, {
                                ratio: v.p.Aspect16x9
                            }, a.createElement(v.cb, null))), a.createElement(v.V, null, a.createElement(v.cb, {
                                width: 150
                            })), a.createElement(v.V, {
                                fontSize: v.Aa.Size7
                            }, a.createElement(v.cb, {
                                width: 100
                            })))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(v.Va, null, this.renderStream())
                    }, t
                }(a.Component),
                C = n("chV5"),
                _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
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
                        return a.createElement(w, {
                            data: e,
                            index: this.props.index,
                            directoryName: t,
                            directoryType: this.props.directoryType,
                            trackingMedium: this.props.trackingMedium
                        })
                    }, t = r.__decorate([Object(l.a)(C, {
                        options: function(e) {
                            return {
                                fetchPolicy: "network-only",
                                variables: {
                                    name: e.name,
                                    limit: e.limit ? e.limit : 3,
                                    type: Object(c.a)(e.directoryType)
                                }
                            }
                        }
                    }), Object(d.a)("CommunityStream")], t)
                }(a.Component),
                S = "community-streams-row__ad",
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            adDisplayed: !1
                        }, t.renderStreamGridWithAdSlot = function() {
                            var e = a.createElement(v.Va, {
                                    key: "ad",
                                    "data-test-selector": S,
                                    display: v.W.Flex,
                                    flexGrow: 1,
                                    justifyContent: v.Ua.Center,
                                    padding: {
                                        bottom: t.state.adDisplayed ? 2 : 0,
                                        left: t.state.adDisplayed ? .5 : 0
                                    }
                                }, a.createElement(i.a, {
                                    adSize: o.c.anonFront.rect,
                                    adUnit: o.d.frontpage,
                                    slotID: o.b.anonFront.rect,
                                    targeting: {
                                        pagetype: o.a.frontpage
                                    },
                                    slotRendered: t.onSlotRendered,
                                    autoEnable: !1
                                })),
                                n = t.renderStreams().map(function(e, t) {
                                    return a.createElement(v.P, {
                                        key: "stream-" + t.toString(),
                                        cols: 4
                                    }, e)
                                });
                            return n.splice(2, 0, e), a.createElement(v.Va, {
                                padding: {
                                    x: 1
                                }
                            }, a.createElement(v.Ha, {
                                gutterSize: v.Ia.Medium
                            }, n))
                        }, t.renderStreams = function() {
                            if (t.props.data) {
                                var e = t.props.data;
                                return t.props.withAd && t.state.adDisplayed && (e = e.slice(0, 2)), e.map(function(e, n) {
                                    return a.createElement(w, {
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
                                    return a.createElement(_, {
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.withAd) return this.renderStreamGridWithAdSlot();
                        var e = this.props.data && 1 === this.props.data.length || this.props.names && 1 === this.props.names.length ? 1 : 0;
                        return a.createElement(v.Va, {
                            margin: {
                                x: 1
                            }
                        }, a.createElement(v.Tb, {
                            gutterSize: v.Vb.Small,
                            childWidth: v.Ub.Large,
                            placeholderItems: e,
                            noWrap: !0
                        }, this.renderStreams()))
                    }, t
                }(a.Component),
                E = Object(s.c)("CommunityStreamsRow")(T);
            n.d(t, !1, function() {
                return S
            }), n.d(t, !1, function() {
                return T
            }), n.d(t, "a", function() {
                return E
            })
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "g", function() {
                return c
            }), n.d(t, "i", function() {
                return d
            }), n.d(t, "j", function() {
                return u
            }), n.d(t, "k", function() {
                return p
            }), n.d(t, "l", function() {
                return m
            }), n.d(t, "h", function() {
                return g
            }), n.d(t, "m", function() {
                return h
            });
            var r = "directory.LANGUAGE_TAGS_UPDATED",
                a = "directory.LOL_CHAMPIONS_CHANGED",
                i = "directory.LOL_CHAMPIONS_LOADING",
                o = "directory.LOL_CHAMPIONS_ERRORED",
                s = "directory.TAG_FILTER_ADDED",
                l = "directory.TAG_FILTER_CHANGED",
                c = "directory.TAG_FILTER_REMOVED";

            function d(e) {
                return {
                    type: r,
                    languageTags: e
                }
            }

            function u(e) {
                return {
                    type: o,
                    leagueOfLegendsChampionsErrored: e
                }
            }

            function p(e) {
                return {
                    type: i,
                    leagueOfLegendsChampionsLoading: e
                }
            }

            function m(e) {
                var t = {},
                    n = e.data;
                for (var r in n) n.hasOwnProperty(r) && (t[n[r].id] = n[r]);
                return {
                    type: a,
                    apiData: e,
                    championsMap: t,
                    apiVersion: e.version
                }
            }

            function g(e, t) {
                return {
                    type: s,
                    addedTag: e,
                    categoryName: t
                }
            }

            function h(e, t) {
                return {
                    type: c,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        "JJ+Z": function(e, t, n) {},
        On2s: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return v
            });
            var r, a = n("mrSG"),
                i = n("/7QA"),
                o = n("8rUg"),
                s = n.n(o),
                l = n("ZrRH"),
                c = n.n(l),
                d = n("6H22"),
                u = n.n(d),
                p = n("X7a7"),
                m = n("YhoA"),
                g = n("Pcnk"),
                h = n("mz1O"),
                f = i.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(r || (r = {}));
            var v = function(e, t) {
                    return a.__awaiter(void 0, void 0, Promise, function() {
                        var n, r, o, s, l, c;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return n = t.toLowerCase(), r = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, r && n === m.a.CounterStrike ? [4, y(r)] : [3, 2];
                                case 1:
                                    return [2, a.sent()];
                                case 2:
                                    return o && n === m.a.Hearthstone ? [4, k(o)] : [3, 4];
                                case 3:
                                    return [2, a.sent()];
                                case 4:
                                    return l && n === m.a.Overwatch ? [4, b(l)] : [3, 6];
                                case 5:
                                    return [2, a.sent()];
                                case 6:
                                    if (s && n === m.a.LeagueOfLegends && (c = i.o.store.getState()).directory)
                                        if (c.directory.leagueOfLegends.championsMap) {
                                            if (c.directory.leagueOfLegends.championsMap) return [2, w(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                        } else i.o.store.dispatch(Object(p.b)());
                                    a.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                y = function(e) {
                    return a.__awaiter(void 0, void 0, Promise, function() {
                        var t, n, r;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(h.a)()];
                                case 1:
                                    return t = a.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                        name: n[e].display_name,
                                        label: Object(g.b)(g.a.CSGOSkillGroup),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: s.a
                                        }
                                    }];
                                case 2:
                                    return r = a.sent(), f.error(r, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                k = function(e) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, r;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(h.b)()];
                                case 1:
                                    return t = a.sent(), n = {}, t[0].Class.forEach(function(e) {
                                        n[e.class] = e
                                    }), [2, {
                                        name: n[e].display_name,
                                        label: Object(g.b)(g.a.HearthstoneClass),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: c.a
                                        }
                                    }];
                                case 2:
                                    return r = a.sent(), f.error(r, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                b = function(e) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, r, i, o, s, l, c, d, p, m, v;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(h.d)()];
                                case 1:
                                    for (n = a.sent(), r = void 0, i = 0, o = n; i < o.length; i++)
                                        for (s in r = o[i])
                                            if (r.hasOwnProperty(s))
                                                for (l = r[s], c = 0, d = l; c < d.length; c++)
                                                    if ((p = d[c]).character === e) return (t = {})[p.character] = p, [2, {
                                                        name: (m = t)[e].display_name,
                                                        label: Object(g.b)(g.a.OverwatchCharacter),
                                                        spriteDetails: {
                                                            imageWidth: m[e].image_width,
                                                            imageHeight: m[e].image_height,
                                                            spriteOffsetX: m[e].sprite_x_offset,
                                                            spriteOffsetY: m[e].sprite_y_offset,
                                                            spriteURL: u.a
                                                        }
                                                    }];
                                    return [2, null];
                                case 2:
                                    return v = a.sent(), f.error(v, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                w = function(e, t, n) {
                    if (!t || !e) return null;
                    var r = t[e],
                        a = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + r.image.sprite;
                    return {
                        name: r.name,
                        label: Object(g.b)(g.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: r.image.w,
                            imageHeight: r.image.h,
                            spriteOffsetX: r.image.x,
                            spriteOffsetY: r.image.y,
                            spriteURL: a
                        }
                    }
                }
        },
        Pcnk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            });
            var r, a = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(r || (r = {}));
            var i = function(e) {
                switch (e) {
                    case r.CSGOMap:
                        return Object(a.d)("Map", "CSGOMapFilter");
                    case r.CSGOSkillGroup:
                        return Object(a.d)("Rank", "CSGORankFilter");
                    case r.HearthstoneClass:
                        return Object(a.d)("Class", "HearthstoneClassFilter");
                    case r.HearthstoneMode:
                        return Object(a.d)("Mode", "HearthstoneModeFilter");
                    case r.LeagueChampion:
                        return Object(a.d)("Champion", "LeagueFilter");
                    case r.OverwatchCharacter:
                        return Object(a.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
        },
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
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("2Ygb"),
                c = n("2xye"),
                d = n("oJov"),
                u = n("JVUd"),
                p = n("WRGI"),
                m = n("moLQ"),
                g = n("yI6f");

            function h(e, t) {
                if (t) {
                    var n = {};
                    return n = "string" == typeof t ? {
                        pathname: t
                    } : t, r.__assign({}, n, {
                        state: r.__assign({}, n.state, e)
                    })
                }
            }

            function f(e, t, n) {
                return n || (n = function() {}),
                    function(a) {
                        n && n(a), s.n.track(c.SpadeEventType.ItemClick, r.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function v(e, t) {
                return r.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), s.n.track(c.SpadeEventType.ItemClick, r.__assign({}, e, {
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
                                s.n.track(c.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return r.__extends(o, i), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (y === d.a) {
                                var e = this.props;
                                return a.createElement(y, r.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return a.createElement(y, r.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
                        }, o.prototype.getTrackingLocationState = function() {
                            var t = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [],
                                n = this.props.tagFilters.map(function(e) {
                                    return e.id
                                }),
                                r = e;
                            this.props.tagFilters.length > 0 && (r === c.PageviewMedium.Browse ? r = c.PageviewMedium.BrowseDirectoryTags : r === c.PageviewMedium.Game && (r = c.PageviewMedium.GameDirectoryTags));
                            var a = {
                                tag_set: JSON.stringify(t),
                                tag_filter_set: JSON.stringify(n),
                                tag_streamer_set: "[]",
                                medium: r
                            };
                            return "POP" === s.o.history.action ? a : (s.o.history.location.state && s.o.history.location.state.medium === c.PageviewMedium.TwitchHome && (a.item_tracking_id = s.o.history.location.state.item_tracking_id, a.medium = s.o.history.location.state.medium, a.content = s.o.history.location.state.content), a)
                        }, o.prototype.getCommonTrackingParams = function() {
                            var r = this.props.trackingProps || {},
                                a = r.itemID,
                                i = r.category,
                                o = r.channelID,
                                s = r.itemPosition,
                                l = r.rowPosition,
                                c = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [];
                            return {
                                channel_id: void 0 !== o ? Number(o) : null,
                                component: null,
                                content_type: t,
                                item_tracking_id: this.itemTrackingID,
                                item_id: void 0 !== a ? a : null,
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
                            return r.__assign({
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
                            return r.__assign({
                                linkTo: h(n, e.linkTo),
                                onClick: f(t, c.PageviewContent.GameBoxart, this.props.onClick)
                            }, e.tagListProps && {
                                tagListProps: v(t, e.tagListProps)
                            })
                        }, o.displayName = Object(l.a)(o.name, y), o
                    }(a.Component);
                    return Object(o.compose)(Object(u.a)("PreviewCard-" + e + "-" + t, {
                        percentage: 75
                    }), Object(i.connect)(function(t, n) {
                        var r = [];
                        if (e === c.PageviewMedium.Game) {
                            var a = n.trackingProps && n.trackingProps.categoryName;
                            r = a ? Object(m.a)(t, a) : []
                        } else r = Object(p.a)(t);
                        return {
                            tagFilters: r
                        }
                    }))(k)
                }
            }
        },
        "T6t+": function(e, t, n) {},
        Uive: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                a = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("N0BP"),
                l = n("MPw5"),
                c = n("cTNz"),
                d = n("KxT4"),
                u = n("YUvD"),
                p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
                m = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
                g = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = o.j.withCategory("ad-slot"), n.createSlot = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
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
                                var r;
                                if (n.props.slotID === c.b.directory.banner) return void((r = n.slotRef.querySelector(p)) && 1 !== r.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                if (n.props.slotID === c.b.directory.rectangle) return void((r = n.slotRef.querySelector(m)) && 1 !== r.clientWidth && n.setState({
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        c.g.addListener(c.f, this.onSlotRenderEnd), this.shouldCreateSlot(this.props) ? (this.logger.debug("Consent ready. Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Consent not ready or Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.state.slotCreated || (!this.shouldCreateSlot(e) || e.gdpr.status === this.props.gdpr.status && e.trackingSet === this.props.trackingSet ? this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID) : (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return t.shouldDisplay !== this.state.shouldDisplay
                    }, t.prototype.render = function() {
                        var e = a.__assign({}, this.props.injectStyles);
                        return this.state.shouldDisplay || (e.display = "none"), i.createElement("div", a.__assign({
                            style: e,
                            id: this.props.slotID,
                            ref: this.setRef
                        }, Object(s.a)(this.props)))
                    }, t
                }(i.Component),
                h = Object(u.a)(d.c.Amazon)(g);
            var f = Object(r.connect)(function(e) {
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
            var r, a = n("/MKj"),
                i = n("fvjX"),
                o = n("1/iK"),
                s = n("y5D0"),
                l = n("jZLd"),
                c = n("kRBY"),
                d = n("mrSG"),
                u = n("TSYQ"),
                p = n("q1tI"),
                m = n("/7QA"),
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
            }(r || (r = {}));
            var w = function(e) {
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
                        if (this.props.data.loading || !this.props.data.currentUser || this.props.data.error) return p.createElement(k.cb, null);
                        if (this.props.isOnboarding) return p.createElement(k.Va, {
                            display: k.W.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, p.createElement(k.Va, {
                            display: k.W.Flex,
                            flexWrap: k.Z.NoWrap,
                            alignItems: k.f.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, p.createElement(k.Va, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, p.createElement(k.Va, null, this.renderAvatar())), p.createElement(k.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: k.Y.Column,
                            ellipsis: !0
                        }, p.createElement(k.V, {
                            className: "minimal-top-nav__username",
                            ellipsis: !0
                        }, this.props.data.currentUser.displayName))));
                        if (this.props.isLoggedIn) {
                            var e = null;
                            this.props.darkModeEnabled && (e = p.createElement(k.xb, {
                                borderBottom: !0,
                                margin: {
                                    y: 1
                                }
                            }, p.createElement(k.Va, {
                                margin: {
                                    x: 2,
                                    bottom: 1
                                }
                            }, p.createElement(k.N, {
                                id: "dark-mode-toggle",
                                label: Object(m.d)("Dark Mode", "MinimalUser"),
                                "data-a-target": "dark-mode-toggle",
                                "data-test-selector": r.DarkModeToggle,
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
                            return p.createElement(g.a, {
                                onClickOut: this.onClickOut,
                                className: t
                            }, p.createElement(k.Va, {
                                display: k.W.Flex,
                                className: "minimal-top-nav__user",
                                fullHeight: !0
                            }, p.createElement(k.Sa, {
                                onClick: this.onCardClick,
                                "data-test-selector": r.UserMenu
                            }, p.createElement(k.Va, {
                                display: k.W.Flex,
                                flexWrap: k.Z.NoWrap,
                                alignItems: k.f.Center,
                                flexGrow: 1,
                                padding: {
                                    right: 1
                                },
                                fullHeight: !0
                            }, p.createElement(k.Va, {
                                margin: {
                                    x: 1
                                },
                                flexShrink: 0
                            }, p.createElement(k.Va, null, this.renderAvatar())), p.createElement(k.Va, {
                                flexGrow: 1,
                                flexShrink: 1,
                                flexDirection: k.Y.Column,
                                ellipsis: !0
                            }, p.createElement(k.V, {
                                className: "minimal-top-nav__username",
                                "data-a-target": "user-display-name",
                                ellipsis: !0
                            }, this.props.data.currentUser.displayName)), p.createElement(k.xb, {
                                display: k.W.Flex,
                                flexShrink: 0,
                                className: "minimal-top-nav__expand"
                            }, p.createElement(k.mb, {
                                asset: k.nb.GlyphArrDown
                            }))))), p.createElement(k.xb, {
                                fullWidth: !0,
                                overflow: k.Ya.Hidden,
                                position: k.db.Absolute,
                                padding: {
                                    y: 1
                                },
                                background: k.r.Base,
                                className: n,
                                "data-test-selector": r.DropdownDown
                            }, e, p.createElement(k.Sa, {
                                onClick: this.onLogoutClick,
                                "data-test-selector": r.Logout
                            }, p.createElement(k.xb, {
                                color: k.O.Alt,
                                display: k.W.Flex,
                                alignItems: k.f.Center,
                                padding: {
                                    x: 2,
                                    y: .5
                                }
                            }, p.createElement(k.Va, {
                                display: k.W.Flex,
                                alignItems: k.f.Center,
                                margin: {
                                    right: 1
                                }
                            }, p.createElement(k.mb, {
                                asset: k.nb.NavLogout,
                                height: 20,
                                width: 20
                            })), p.createElement(k.V, null, Object(m.d)("Log Out", "MinimalUser"))))))
                        }
                        return p.createElement(k.Va, {
                            margin: 1
                        }, p.createElement(k.z, {
                            onClick: this.onLoginClick,
                            "data-test-selector": r.Login
                        }, Object(m.d)("Log in", "MinimalUser")))
                    }, t.prototype.renderAvatar = function() {
                        return this.props.data.currentUser ? p.createElement(k.q, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: Object(m.d)("Your Avatar", "Minimaluser")
                        }) : null
                    }, t.prototype.reportInteractive = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t
                }(p.Component),
                C = Object(i.compose)(Object(y.c)("MinimalUser"), Object(h.a)(b))(w);
            var _ = Object(a.connect)(function(e) {
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
            })(C);
            n.d(t, "a", function() {
                return _
            })
        },
        WRGI: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("oA7Y"),
                o = n("9x/k");

            function s(e) {
                return e.browse.browseType
            }

            function l(e) {
                return e.browse.tagFilters
            }
            a.o.store.registerReducer("browse", function(e, t) {
                switch (void 0 === e && (e = {
                    browseType: o.a.Games,
                    lastBrowsePath: "/directory",
                    tagFilters: []
                }), t.type) {
                    case i.a:
                        return r.__assign({}, e, {
                            browseType: t.browseType
                        });
                    case i.c:
                        var n = e.tagFilters.every(function(e) {
                                return e.id !== t.addedTag.id
                            }),
                            a = e.tagFilters.slice();
                        return n && a.push(t.addedTag), r.__assign({}, e, {
                            tagFilters: a
                        });
                    case i.d:
                        return r.__assign({}, e, {
                            tagFilters: t.tagFilters
                        });
                    case i.e:
                        var s = e.tagFilters.filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return r.__assign({}, e, {
                            tagFilters: s
                        });
                    case i.b:
                        return r.__assign({}, e, {
                            lastBrowsePath: t.lastBrowsePath
                        });
                    default:
                        return e
                }
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("cr+I"),
                i = n("/7QA"),
                o = n("b6Yk"),
                s = {
                    en: "en_US",
                    de: "de_DE",
                    es: "es_ES",
                    "es-mx": "es_ES",
                    fr: "fr_FR",
                    it: "it_IT",
                    hu: "hu_HU",
                    pl: "pl_PL",
                    pt: "pt_BR",
                    "pt-br": "pt_BR",
                    vi: "vn_VN",
                    tr: "tr_TR",
                    ro: "ro_RO",
                    cs: "cs_CZ",
                    el: "el_GR",
                    ru: "ru_RU",
                    th: "th_TH",
                    "zh-cn": "zh_CN",
                    "zh-tw": "zh_TW",
                    ja: "ja_JP",
                    ko: "ko_KR"
                },
                l = function(e) {
                    return e && s[e] || "en_US"
                },
                c = n("Igt5");
            n.d(t, "b", function() {
                return m
            }), n.d(t, "d", function() {
                return g
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "a", function() {
                return f
            });
            var d = "languageTags",
                u = 0,
                p = 350;

            function m() {
                var e = this;
                return function(t) {
                    clearTimeout(u), u = setTimeout(function() {
                        return r.__awaiter(e, void 0, void 0, function() {
                            var e, n, s, d, u, p;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        e = i.o.logger.withCategory("leagueoflegends-api"), t(Object(c.k)(!0)), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), n = i.o.intl.getLanguageCode(), s = l(n), d = o.a.getAPIURL("/api/lol/champions?" + a.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, o.a.get(d)];
                                    case 2:
                                        return (u = r.sent()).body ? t(Object(c.l)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.j)(!0))), [3, 4];
                                    case 3:
                                        throw p = r.sent(), t(Object(c.j)(!0)), e.error(p, "Failed to load LoL champion data"), p;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, p)
                }
            }

            function g(e, t) {
                var n = this;
                return function(a) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, o;
                        return r.__generator(this, function(r) {
                            return n = new Set(f()), t ? n.add(e) : n.delete(e), o = Array.from(n), i.l.set(d, o), a(Object(c.i)(o)), [2]
                        })
                    })
                }
            }

            function h(e) {
                var t = this;
                return function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return i.l.set(d, e), n(Object(c.i)(e)), [2]
                        })
                    })
                }
            }

            function f() {
                return i.l.get(d, [])
            }
        },
        XA5B: function(e, t, n) {},
        YhoA: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
                }(r || (r = {}))
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var r, a, i, o, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("oB8h"),
                p = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((r = {})[u.a.Live] = "stream-type-indicator--live", r[u.a.Premiere] = "stream-type-indicator--premiere", r[u.a.Rerun] = "stream-type-indicator--rerun", r[u.a.WatchParty] = "stream-type-indicator--rerun", r),
                g = ((a = {})[u.a.Premiere] = p.nb.VideoPremiere, a[u.a.Rerun] = p.nb.VideoRerun, a[u.a.WatchParty] = p.nb.VideoRerun, a),
                h = ((i = {})[u.a.Premiere] = p.ob.Live, i[u.a.Rerun] = p.ob.Inherit, i[u.a.WatchParty] = p.ob.Inherit, i),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(p.xb, {
                            className: this.getClassNames(),
                            color: p.O.Overlay,
                            background: p.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: p.x.Small,
                            display: p.W.Flex
                        }, c.createElement(p.Va, {
                            display: p.W.Flex,
                            alignItems: p.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(p.V, {
                            type: p.Nb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(p.xb, {
                            borderRadius: p.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? c.createElement(p.Va, {
                            className: "stream-type-indicator__live-wrapper",
                            display: p.W.Flex,
                            alignItems: p.f.Center
                        }, c.createElement(p.K, {
                            status: p.M.Live,
                            size: p.L.Small
                        })) : c.createElement(p.mb, {
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
        ZrRH: function(e, t, n) {
            e.exports = n.p + "assets/hearthstone-classes-d5c707fb47547e9585bc.png"
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
                            return r.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, a), o = r.__assign({}, t, {
                                            body: i
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, l.sent()]
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
                        return new URL(e, a.o.config.apiBaseURL)
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
                        var n = a.o.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.o.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(i.e)(n);
                        return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = a.o.logger.withCategory("legacy-api"), e
                }()
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
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("GFmA"),
                c = n("kduP"),
                d = n("2xye"),
                u = n("fVj5"),
                p = n("rShu"),
                m = n("yI6f"),
                g = n("T2RZ"),
                h = n("Ue10"),
                f = (n("zrz1"), Object(g.a)(d.PageviewMedium.Game, m.b.Live, m.c.BrowseInCategoryChannels)(l.a)),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(u.b)(), t.untitledBroadcastString = Object(s.d)("Untitled Broadcast", "StreamThumbnail"), t.getLinkTo = function(e, n) {
                            var a = t.props.trackingContent ? t.props.trackingContent : d.PageviewContent.Live,
                                i = d.PageviewMedium.Game;
                            t.props.trackingMedium && (i = t.props.trackingMedium);
                            var o = t.props.history.location && t.props.history.location.state || {};
                            return {
                                pathname: e,
                                state: r.__assign({}, o, {
                                    medium: i,
                                    content: a,
                                    content_index: n
                                })
                            }
                        }, t.shouldShowGame = function(e) {
                            return t.props.directoryType !== p.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                        }, t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e, t.props.streamNode.broadcaster && t.props.streamNode.broadcaster.id)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var n = {
                            context: this.props.directoryType === p.a.Games ? l.b.SingleGameList : l.b.MixedGameAndChannelList,
                            title: e.title || this.untitledBroadcastString,
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            onVideoTitleClick: this.onClick,
                            thumbnailImageProps: {
                                src: e.previewImageURL || s.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            onThumbnailClick: this.onClick,
                            channelDisplayName: e.broadcaster.displayName || "",
                            channelLogin: e.broadcaster.login || "",
                            channelLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            onChannelLoginClick: this.onClick,
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
                            playerMetadata: !this.isTagsExperiment && e.streamMetadata || void 0,
                            playerMetadataGame: e.streamMetadata ? this.props.directoryName : void 0,
                            streamType: e.type,
                            currentViewerCount: e.viewersCount || 0,
                            trackImageLatency: this.props.trackImageLatency,
                            tagListProps: this.props.tagListProps
                        };
                        return a.createElement("div", {
                            className: "stream-thumbnail",
                            "data-target": t ? "" : "directory-first-item",
                            style: {
                                order: t
                            }
                        }, a.createElement(h.Va, {
                            className: "stream-thumbnail__card",
                            position: h.db.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, a.createElement(f, r.__assign({}, n, {
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
                }(a.Component),
                y = Object(o.compose)(i.a)(v);
            n.d(t, "a", function() {
                return "directory-first-item"
            }), n.d(t, !1, function() {
                return "directory-game__card_container"
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, "b", function() {
                return y
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
        lRiI: function(e, t, n) {},
        m493: function(e, t, n) {},
        moLQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("Igt5"),
                o = n("X7a7");

            function s(e, t) {
                return e.directory.tagFilters[t] || []
            }

            function l(e) {
                return e.directory.languageTags
            }
            a.o.store.registerReducer("directory", function(e, t) {
                switch (void 0 === e && (e = {
                    languageTags: Object(o.a)(),
                    leagueOfLegends: {
                        apiData: null,
                        championsMap: null,
                        isError: !1,
                        isLoading: !1,
                        version: ""
                    },
                    tagFilters: {}
                }), t.type) {
                    case i.a:
                        return r.__assign({}, e, {
                            languageTags: t.languageTags
                        });
                    case i.b:
                        return r.__assign({}, e, {
                            leagueOfLegends: {
                                apiData: t.apiData,
                                championsMap: t.championsMap,
                                isError: !1,
                                isLoading: !1,
                                version: t.apiVersion
                            }
                        });
                    case i.c:
                        return r.__assign({}, e, {
                            leagueOfLegends: r.__assign({}, e.leagueOfLegends, {
                                isError: t.leagueOfLegendsChampionsErrored,
                                isLoading: !1
                            })
                        });
                    case i.d:
                        return r.__assign({}, e, {
                            leagueOfLegends: r.__assign({}, e.leagueOfLegends, {
                                isError: !1,
                                isLoading: t.leagueOfLegendsChampionsLoading
                            })
                        });
                    case i.e:
                        var n = r.__assign({}, e.tagFilters),
                            a = n[t.categoryName];
                        return (void 0 === a || a.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[t.categoryName] = (n[t.categoryName] || []).concat([t.addedTag])), r.__assign({}, e, {
                            tagFilters: n
                        });
                    case i.f:
                        return e.tagFilters[t.categoryName] = t.tagFilters.slice(), r.__assign({}, e);
                    case i.g:
                        if (void 0 === e.tagFilters[t.categoryName]) return r.__assign({}, e);
                        var s = e.tagFilters[t.categoryName].filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return e.tagFilters[t.categoryName] = s, r.__assign({}, e);
                    default:
                        return e
                }
            })
        },
        mz1O: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "f", function() {
                return c
            });
            var r = n("mrSG"),
                a = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(172).then(function() {
                                        var e = n("vrl6");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                i = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(171).then(function() {
                                        var e = n("+4ZJ");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                o = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(170).then(function() {
                                        var e = n("nSs0");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                s = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(169).then(function() {
                                        var e = n("1Bro");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                l = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(168).then(function() {
                                        var e = n("Dpq/");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                c = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(167).then(function() {
                                        var e = n("bVYI");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                }
        },
        oA7Y: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
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
                return p
            });
            var r = "browse.BROWSE_TYPE_CHANGED",
                a = "browse.LAST_BROWSE_PATH",
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
                    type: r,
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
                    type: a,
                    lastBrowsePath: e
                }
            }

            function p(e) {
                return {
                    type: s,
                    removedTag: e
                }
            }
        },
        oJov: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return a.createElement(o.Va, r.__assign({
                        className: "drops-badge",
                        position: o.db.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.bc)(e)), a.createElement(o.Qb, {
                        direction: o.Sb.Top,
                        align: o.Rb.Right,
                        label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                    }, a.createElement(o.xb, {
                        className: "drops-badge__drops-icon",
                        position: o.db.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.Ya.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.ac.Default
                    }, a.createElement(o.T, {
                        type: o.U.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, a.createElement(o.mb, {
                        asset: o.nb.Drops
                    })))))
                }),
                l = n("0LAi"),
                c = n("fVj5"),
                d = function(e) {
                    return a.createElement(o.Va, null, a.createElement(o.y, r.__assign({}, e)), Object(c.a)() && e.tagListProps && 0 !== e.tagListProps.tags.length && a.createElement(o.Va, {
                        margin: {
                            top: .5
                        }
                    }, a.createElement(l.a, r.__assign({}, e.tagListProps, {
                        tagNumberLimit: 3
                    }))), !0 === e.showDropsBadge && a.createElement(s, null))
                };
            n.d(t, "a", function() {
                return d
            })
        },
        rShu: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
                }(r || (r = {}))
        },
        roU9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            });
            var r = "//static-cdn.jtvnw.net/ttv-boxart",
                a = "52x72"
        },
        vDRX: function(e, t, n) {},
        x75U: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            });
            var r = n("mrSG"),
                a = n("17x9"),
                i = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                l = {
                    cardIDtoItemTrackingIDMap: a.object,
                    trackTitleClick: a.func,
                    trackTitleImpression: a.func,
                    trackImpression: a.func,
                    trackClick: a.func
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
                                    r = t.reasonType,
                                    a = t.reasonTarget,
                                    i = t.rowName,
                                    l = Object(s.e)(),
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: l,
                                        itemPosition: null,
                                        reasonType: r,
                                        reasonTarget: a,
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
                                    r = t.reasonType,
                                    a = t.reasonTarget,
                                    i = t.reasonTargetType,
                                    l = t.rowName,
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: r,
                                        reasonTarget: a,
                                        reasonTargetType: i,
                                        rowName: l,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.g)(c, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, r, a) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var i = Object(s.e)(),
                                        o = Object(s.f)(e.title),
                                        l = o.reasonType,
                                        c = o.reasonTarget,
                                        d = o.reasonTargetType,
                                        u = o.rowName,
                                        p = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: i,
                                            itemPosition: r,
                                            reasonType: l,
                                            reasonTarget: c,
                                            reasonTargetType: d,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: u,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(a),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.h)(p), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = i, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, r, a, i, o) {
                                if (t.node) {
                                    var l = n.state,
                                        c = l.cardIDtoRequestIDMap,
                                        d = l.cardIDtoItemTrackingIDMap,
                                        u = Object(s.f)(e.title),
                                        p = u.reasonType,
                                        m = u.reasonTarget,
                                        g = u.reasonTargetType,
                                        h = u.rowName,
                                        f = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: d[t.node.id] || null,
                                            requestID: c[t.node.id],
                                            itemPosition: r,
                                            rowPosition: n.props.position,
                                            reasonType: p,
                                            reasonTarget: m,
                                            reasonTargetType: g,
                                            rowName: h,
                                            tagID: void 0 !== o ? o : null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(i),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.g)(f, a)
                                }
                            }, n.state = {
                                cardIDtoItemTrackingIDMap: {},
                                cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {}),
                                headerImpressionID: null,
                                headerRequestID: e.requestID
                            }, n
                        }
                        return r.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                            var t = this,
                                n = e.shelf,
                                r = e.requestID;
                            n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                                return {
                                    cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], r, e.cardIDtoRequestIDMap)
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
                            return i.createElement(e, r.__assign({}, this.props, n))
                        }, n.childContextTypes = l, n
                    }(i.Component)
                }
            }
        },
        yI6f: function(e, t, n) {
            "use strict";
            var r, a, i, o, s, l, c, d = n("/7QA"),
                u = n("f00E"),
                p = n("2xye"),
                m = n("3sMy"),
                g = function() {
                    return Object(u.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(a || (a = {})),
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
            var h = ((r = {})[m.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, r[m.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, r[m.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, r[m.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, r[m.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, r[m.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, r[m.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, r[m.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Clip,
                    rowName: e
                }
            }, r[m.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Vod,
                    rowName: e
                }
            }, r);

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
                var n, r = null,
                    o = null,
                    s = null,
                    l = e.contentEdge && e.contentEdge.node && e.contentEdge.node.id || "";
                if (e.contentEdge) switch (e.contentEdge.node && e.contentEdge.node.__typename) {
                    case "Stream":
                        r = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = i.Live, l = String(n.broadcaster && n.broadcaster.id), s = n.game ? n.game.id : null;
                        break;
                    case "Clip":
                        r = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = i.Clip, s = n.game ? n.game.id : null;
                        break;
                    case "Video":
                        r = (n = e.contentEdge.node).owner && n.owner.id, o = i.Vod, s = n.game ? n.game.id : null;
                        break;
                    case "Game":
                        n = e.contentEdge.node, r = null, o = i.Game, s = n.id
                }
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: a.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: l,
                    channel_id: null === r ? null : Number(r),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: p.PageviewMedium.TwitchHome,
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
                d.n.track(p.SpadeEventType.ItemClick, n)
            }

            function k(e, t) {
                var n = v(e, t);
                d.n.track(p.SpadeEventType.ItemDisplay, n)
            }

            function b(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                d.n.track(p.SpadeEventType.RecRequestClient, t)
            }
            var w = n("x75U"),
                C = n("A65o");
            n.d(t, "e", function() {
                return g
            }), n.d(t, "c", function() {
                return a
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
                return w.a
            }), n.d(t, "j", function() {
                return w.b
            }), n.d(t, !1, function() {
                return C.a
            })
        },
        yziQ: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("yR8l"),
                o = n("geRD"),
                s = n("G1cX");

            function l(e, t, n, r) {
                void 0 === n && (n = {});
                var a = e.readQuery({
                    query: t,
                    variables: n
                });
                if (a) {
                    var i = s(a, function(e) {
                        return e
                    }, function(e) {
                        return r(e)
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
                p = (n("AXwV"), n("g3/t"));
            n.d(t, "a", function() {
                return m
            });
            var m = function(e) {
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
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
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
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !e.categoryChange || this.props.categoryChange && this.props.categoryChange.timestampMs === e.categoryChange.timestampMs || !e.categoryChange.category.games.includes(this.props.title) || this.isFollowing() !== e.categoryChange.shouldFollow && this.onClick()
                }, t.prototype.render = function() {
                    return a.createElement(c.Na, {
                        position: c.db.Relative,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement("div", r.__assign({
                        className: "follow-game-card",
                        "data-test-selector": "follow-game-card",
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.onClick
                    }, Object(c.bc)(this.props)), a.createElement(c.G, {
                        key: this.props.title
                    }, a.createElement(c.Va, {
                        position: c.db.Relative
                    }, this.renderOverlay(), a.createElement(c.I, {
                        aspect: c.p.Aspect3x4,
                        alt: this.props.imageAlt,
                        src: this.props.imageSrc
                    })), a.createElement(c.H, null, a.createElement(c.Va, {
                        margin: {
                            top: .5,
                            bottom: 1
                        }
                    }, a.createElement(c.V, {
                        color: c.O.Base,
                        fontSize: c.Aa.Size5
                    }, this.props.title), a.createElement(c.V, {
                        color: c.O.Alt,
                        fontSize: c.Aa.Size6
                    }, this.props.info))))))
                }, t.prototype.renderOverlay = function() {
                    var e, t = this.isFollowing();
                    return this.state.inProgress ? e = a.createElement(c.Xa, {
                        delay: 0
                    }) : this.state.hovered ? e = a.createElement(c.mb, {
                        width: 50,
                        height: 50,
                        asset: t ? c.nb.Unheart : c.nb.Heart
                    }) : t && (e = a.createElement(c.mb, {
                        width: 50,
                        height: 50,
                        asset: c.nb.Heart
                    })), e ? a.createElement(c.xb, {
                        className: "follow-game-card__overlay " + (t ? "follow-game-card__overlay--followed" : ""),
                        background: c.r.Overlay,
                        color: c.O.Overlay,
                        "data-a-target": t ? "follow-game-card--followed" : "",
                        display: c.W.Flex,
                        alignItems: c.f.Center,
                        justifyContent: c.Ua.Center,
                        position: c.db.Absolute,
                        zIndex: c.ac.Above,
                        attachBottom: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, e) : null
                }, t.prototype.followGame = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n = this;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = r.__assign({}, Object(o.a)({
                                        gameID: e
                                    }), {
                                        update: function(e, t) {
                                            var r = t.data.followGame;
                                            l(e, u, {
                                                name: n.props.title
                                            }, function(e) {
                                                return e.game && r && r.game ? (e.game.self.follow = r.game.self.follow, e) : e
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
                                    }), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, this.props.followGame(t)];
                                case 2:
                                    return a.sent(), this.setState({
                                        inProgress: !1
                                    }, function() {
                                        n.props.onFollow && n.props.onFollow(n.props.title)
                                    }), [3, 4];
                                case 3:
                                    return a.sent(), this.setState({
                                        inProgress: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.unfollowGame = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n = this;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = r.__assign({}, Object(o.a)({
                                        gameID: e
                                    }), {
                                        update: function(e, t) {
                                            var r = t.data.unfollowGame;
                                            l(e, u, {
                                                name: n.props.title
                                            }, function(e) {
                                                return e.game && r && r.game ? (e.game.self.follow = r.game.self.follow, e) : e
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
                                    }), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, this.props.unfollowGame(t)];
                                case 2:
                                    return a.sent(), this.setState({
                                        inProgress: !1
                                    }, function() {
                                        n.props.onUnfollow && n.props.onUnfollow(n.props.title)
                                    }), [3, 4];
                                case 3:
                                    return a.sent(), this.setState({
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
                }, t = r.__decorate([Object(i.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                }), Object(i.a)(d, {
                    name: "followGame"
                }), Object(i.a)(p, {
                    name: "unfollowGame"
                })], t)
            }(a.Component)
        },
        zrz1: function(e, t, n) {}
    }
]);