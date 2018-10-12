(window.webpackJsonp = window.webpackJsonp || []).push([
    [47, 120], {
        "+Vfn": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "CollectionConnectionFields"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CollectionConnection"
                        }
                    },
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
                        }, {
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
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment CollectionConnectionFields on CollectionConnection {\ntotalCount\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("he03").definitions)), e.exports = i
        },
        "/nm5": function(e, t, n) {},
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return d
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                o = n("2xye"),
                a = n("gAd6"),
                s = function() {
                    var e = r.n.getLastPageview();
                    return e && e.location || o.PageviewLocation.None
                },
                l = function(e) {
                    r.n.trackItemSectionClick({
                        carousel_content: o.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: o.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: o.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    r.n.trackItemSectionClick({
                        carousel_content: o.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: o.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: o.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                d = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, c, d, u = this;
                        return i.__generator(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    return p.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return i.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return i.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, r.o.apollo.client.query({
                                                            query: a,
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
                                        return o.TwitchDataType.Game
                                    }), d = l.map(function() {
                                        return null
                                    }), r.n.trackItemSectionLoad({
                                        carousel_content: o.PageviewContent.PreviewCardGameBalloonGame,
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
        "0Rl0": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("q1tI"),
                r = n("Ue10"),
                o = function() {
                    return i.createElement(r.G, null, i.createElement(r.o, {
                        ratio: r.p.Aspect16x9
                    }, i.createElement(r.cb, null)), i.createElement(r.H, null, i.createElement(r.Va, {
                        display: r.W.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(r.Va, {
                        display: r.W.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, i.createElement(r.cb, {
                        width: 40,
                        height: 56
                    })), i.createElement(r.Va, {
                        display: r.W.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(r.V, null, i.createElement(r.cb, {
                        width: 150
                    })), i.createElement(r.V, {
                        fontSize: r.Aa.Size7
                    }, i.createElement(r.cb, {
                        width: 100
                    }))))))
                }
        },
        "0T/G": function(e, t) {},
        "3Bft": function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return o
                }),
                function(e) {
                    e.Week = "WEEK", e.Month = "MONTH", e.Year = "YEAR", e.OneTime = "ONE_TIME"
                }(i || (i = {})),
                function(e) {
                    e.PercentOff = "percent_off", e.FixedValueOff = "fixed_value_off"
                }(r || (r = {}));
            var o = {
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
        "5NSO": function(e, t, n) {},
        "5qQ0": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("oJmH"),
                a = n("fvjX"),
                s = n("V+GM"),
                l = n("NvVO"),
                c = n("2xye"),
                d = n("zxEZ"),
                u = n("tuvy"),
                p = n("GnwI"),
                m = n("WfYB"),
                h = n("lmt/"),
                f = n("Ue10"),
                g = n("pJmx"),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(f.Va, {
                            fullHeight: !0,
                            "data-test-selector": "channel-collections-page"
                        }, r.createElement(h.a, {
                            currentPage: Object(u.b)() ? d.b.Videos : d.b.Collections,
                            ownerLogin: this.props.match.params.channelLogin
                        }, r.createElement(m.ChannelCollectionsContent, {
                            channelLogin: this.props.match.params.channelLogin
                        })))
                    }, t
                }(r.Component),
                b = Object(a.compose)(Object(p.c)("ChannelCollectionsPage", {
                    destination: l.a.ChannelCollections,
                    autoReportInteractive: !0
                }), Object(o.graphql)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                ownerLogin: e.match.params.channelLogin
                            }
                        }
                    }
                }), Object(s.a)({
                    location: c.PageviewLocation.ChannelCollections,
                    properties: function(e) {
                        return {
                            channel: e.match.params.channelLogin,
                            channel_id: e.data.user && e.data.user.id ? Number(e.data.user.id) : null
                        }
                    },
                    skip: function(e) {
                        return e.data.loading
                    }
                }))(v);
            n.d(t, "ChannelCollectionsPage", function() {
                return b
            })
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return l
            });
            var i, r, o = n("/7QA");

            function a(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(o.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(o.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(o.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(o.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(o.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(o.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(o.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(o.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(o.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(o.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(o.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(o.d)("{monthCount}mo", {
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
                        n = i.Hour;
                        break;
                    case r.ClockMS:
                        n = i.Minute
                }
                var l = 2;
                t === r.ClockHMS && (l = 3);
                var d = function(e, t) {
                        void 0 === t && (t = i.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === i.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === i.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === i.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === i.Day ? n : n.days <= 26 || t === i.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== r.Humanized && t !== r.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                    }), t === r.Humanized) return function(e) {
                    return e.months ? a(i.Month, e.months) : e.weeks && e.days ? a(i.Week, e.weeks) + " " + a(i.Day, e.days) : e.weeks ? a(i.Week, e.weeks) : e.days && e.hours ? a(i.Day, e.days) + " " + a(i.Hour, e.hours) : e.days ? a(i.Day, e.days) : e.hours && e.minutes ? a(i.Hour, e.hours) + " " + a(i.Minute, e.minutes) : e.hours ? a(i.Hour, e.hours) : e.minutes && e.seconds ? a(i.Minute, e.minutes) + " " + a(i.Second, e.seconds) : e.minutes ? a(i.Minute, e.minutes) : a(i.Second, e.seconds || 0)
                }(d);
                if (t === r.HumanizedShort) return function(e) {
                    return e.months ? s(i.Month, e.months) : e.weeks && e.days ? "" + s(i.Week, e.weeks) + s(i.Day, e.days) : e.weeks ? s(i.Week, e.weeks) : e.days && e.hours ? "" + s(i.Day, e.days) + s(i.Hour, e.hours) : e.days ? s(i.Day, e.days) : e.hours && e.minutes ? "" + s(i.Hour, e.hours) + s(i.Minute, e.minutes) : e.hours ? s(i.Hour, e.hours) : e.minutes && e.seconds ? "" + s(i.Minute, e.minutes) + s(i.Second, e.seconds) : e.minutes ? s(i.Minute, e.minutes) : s(i.Second, e.seconds || 0)
                }(d);
                var p = ":",
                    m = !1;
                switch (o.o.intl.getLanguageCode()) {
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
                    case r.ClockHM:
                    case r.ClockHMS:
                        var v = (m ? c(g, 2) : g) + p + c(f, 2);
                        return t === r.ClockHMS && (v += p + c(h, 2)), v;
                    case r.ClockMS:
                        return (m ? c(f, 2) : f) + p + c(h, 2)
                }
            }

            function c(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(i || (i = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(r || (r = {}))
        },
        "6H22": function(e, t, n) {
            e.exports = n.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "6h5w": function(e, t, n) {
            "use strict";
            var i, r = n("q1tI"),
                o = n("9C/b"),
                a = n("/7QA"),
                s = n("vRsq"),
                l = n("tuvy"),
                c = n("Ue10"),
                d = Object(o.a)(function(e) {
                    var t, n = e.options;
                    return t = Object(l.a)() ? Object(s.j)(e.channelLogin, e, n) : Object(s.q)(e.channelLogin, n && {
                        filter: n.filter ? Object(s.z)(n.filter) : void 0,
                        sort: n.sort
                    }), r.createElement(c.T, {
                        to: t,
                        hoverUnderlineNone: !0
                    }, r.createElement(c.Va, {
                        display: c.W.InlineFlex,
                        flexDirection: c.Y.Row,
                        alignItems: c.f.Center
                    }, r.createElement(c.V, {
                        type: c.Nb.H5
                    }, Object(a.d)("Expand All", "VideoShelfExpandLink")), r.createElement(c.mb, {
                        asset: c.nb.AngleRight,
                        height: 14
                    })))
                });
            n.d(t, "a", function() {
                    return u
                }),
                function(e) {
                    e.Title = "title", e.SubTitle = "subtitle"
                }(i || (i = {}));
            var u = function(e) {
                if (!e.titleMessage) return r.createElement(c.cb, {
                    width: 200
                });
                var t = r.createElement(c.V, {
                        type: c.Nb.H4,
                        color: c.O.Base,
                        bold: !0,
                        "data-test-selector": i.Title
                    }, e.titleMessage),
                    n = e.subTitle;
                return e.subTitle && "string" == typeof e.subTitle ? n = r.createElement(c.V, {
                    color: c.O.Alt2,
                    type: c.Nb.Span,
                    "data-test-selector": i.SubTitle
                }, e.subTitle) : e.subTitle && (n = r.createElement(c.Va, {
                    "data-test-selector": i.SubTitle
                }, n)), r.createElement(r.Fragment, null, r.createElement(c.Va, {
                    display: c.W.Flex,
                    flexDirection: c.Y.Row,
                    alignItems: c.f.End
                }, t, e.expandLink && r.createElement(c.Va, {
                    padding: {
                        left: 1
                    }
                }, r.createElement(d, {
                    channelLogin: e.expandLink.channelLogin,
                    options: e.expandLink.options
                }))), n)
            }
        },
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("H1ft"),
                a = n("SWMh"),
                s = n("cr+I"),
                l = n("/7QA"),
                c = n("GFmA"),
                d = n("0INk"),
                u = n("yWUM"),
                p = n("vRsq"),
                m = n("2xye"),
                h = n("3W+h"),
                f = n("GnwI"),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var n = {
                                    t: Object(u.a)(e.offset)
                                };
                                return t.props.collectionID && (n.collection = t.props.collectionID), i.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: s.stringify(n),
                                        state: {
                                            content: m.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(d.b)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e, n) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(d.c)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: n,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(c.a, {
                            context: this.props.context,
                            onClick: this.onClickHandler,
                            title: this.props.video.title,
                            linkTo: {
                                pathname: Object(p.i)(void 0, this.props.video.id),
                                state: this.getLinkState(),
                                search: this.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: this.props.video.previewThumbnailURL,
                                alt: this.props.video.title
                            },
                            channelDisplayName: this.props.video.owner && this.props.video.owner.displayName || "",
                            channelLogin: this.props.video.owner && this.props.video.owner.login || "",
                            channelLinkTo: {
                                pathname: "/" + (this.props.video.owner ? this.props.video.owner.login : ""),
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.video.owner && this.props.video.owner.profileImageURL || "",
                                alt: this.props.video.owner ? this.props.video.owner.displayName : ""
                            },
                            gameTitle: this.props.video.game && this.props.video.game.name || "",
                            gameTitleLinkTo: {
                                pathname: "/directory/game/" + encodeURI(this.props.video.game && this.props.video.game.name || ""),
                                state: this.getLinkState()
                            },
                            gameBoxArtImageProps: {
                                src: this.props.video.game && this.props.video.game.boxArtURL || l.a.defaultBoxArtURL,
                                alt: this.props.video.game ? this.props.video.game.displayName : ""
                            },
                            videoGameChanges: this.gameChangesWithLinks(),
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            datePublished: this.props.video.publishedAt,
                            viewCount: this.props.video.viewCount,
                            durationInSeconds: this.props.hideDuration ? void 0 : this.props.video.lengthSeconds,
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
                                linkPath: h.a.PopularTag
                            } : void 0
                        })
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = s.stringify(e);
                        return t ? "?" + t : ""
                    }, t.prototype.getVideoPreviousWatchPercentage = function() {
                        return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
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
                }(r.Component),
                v = Object(f.c)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(g);
            n.d(t, "a", function() {
                return b
            });
            var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        videoGameChanges: []
                    }, t.maybeFetchVideoMarkers = function(e, n) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.promise = Object(a.a)(e, n, this.props.video.game), [4, this.promise];
                                    case 1:
                                        return t = i.sent(), this.setState({
                                            videoGameChanges: t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(v, i.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== o.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds)
                }, t
            }(r.Component)
        },
        "8n0m": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "c", function() {
                return s
            });
            var i = n("/7QA"),
                r = n("2xye");

            function o(e) {
                i.n.track(r.SpadeEventType.CollectionCreate, {
                    channel_id: e.channelID,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    title: e.title
                })
            }

            function a(e) {
                i.n.track(r.SpadeEventType.CollectionAddItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    place: e.place
                })
            }

            function s(e) {
                i.n.track(r.SpadeEventType.CollectionRemoveItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID
                })
            }
        },
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
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
        "9RDd": function(e, t, n) {},
        "A7Y/": function(e, t, n) {},
        B3R5: function(e, t, n) {},
        BOil: function(e, t, n) {},
        Bucx: function(e, t, n) {},
        CCqK: function(e, t, n) {},
        "CFw/": function(e, t, n) {
            e.exports = n.p + "assets/notification_upsell_arrow-c9d4ff7c87444b45d813.png"
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                a = n("/MKj"),
                s = n("TSYQ"),
                l = n("YhoA"),
                c = n("Ue10"),
                d = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        i = e.game.toLowerCase(),
                        o = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = i === l.a.CounterStrike, t)),
                        a = i === l.a.CounterStrike ? 40 : 20;
                    return r.createElement(c.Va, {
                        className: o
                    }, r.createElement("div", {
                        style: {
                            backgroundImage: "url(" + n.spriteURL + ")",
                            backgroundPositionX: n.spriteOffsetX ? -1 * n.spriteOffsetX : 0,
                            backgroundPositionY: n.spriteOffsetY ? -1 * n.spriteOffsetY : 0,
                            width: n.imageWidth ? n.imageWidth + "px" : "2rem",
                            height: n.imageWidth ? n.imageHeight + "px" : "2rem",
                            transform: "scale(" + (n.imageWidth > 0 ? a / n.imageWidth : 1) + ")",
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
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return i.__generator(this, function(n) {
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
                                            return t = n.sent(), o.j.error(t, "Failed to get metadata details."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.loadStreamMetadataDetails()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                    }, t.prototype.componentWillUnmount = function() {
                        this.didUnmount = !0
                    }, t.prototype.render = function() {
                        return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? r.createElement(c.Va, {
                            className: "preview-card-appendage",
                            display: c.W.Flex
                        }, r.createElement(c.Va, {
                            className: "preview-card-appendage__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: c.W.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Ua.End
                        }, r.createElement("div", null, r.createElement(d, {
                            game: this.props.game,
                            spriteDetails: this.state.metadataDetails.spriteDetails
                        }))), r.createElement(c.xb, {
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
                        }, r.createElement(c.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: c.Ya.Hidden
                        }, r.createElement(c.V, {
                            ellipsis: !0
                        }, this.state.metadataDetails.name)), r.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(c.V, null, this.state.metadataDetails.label)))) : null
                    }, t
                }(r.Component));
            var m = Object(a.connect)(function(e) {
                    return {
                        leagueOfLegends: {
                            championsMap: e.directory.leagueOfLegends.championsMap
                        }
                    }
                })(p),
                h = n("5zf8"),
                f = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return r.createElement(c.Va, {
                            className: "preview-card-game-balloon-row",
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap
                        }, r.createElement(c.Sa, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row,
                            padding: .5
                        }, r.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: c.x.Small,
                            overflow: c.Ya.Hidden,
                            position: c.db.Relative
                        }, r.createElement(c.o, {
                            align: c.d.Center,
                            ratio: c.p.BoxArt
                        }, r.createElement(c.S, i.__assign({}, e))), r.createElement(c.xb, {
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
                        }, r.createElement(c.mb, {
                            asset: c.nb.Play,
                            type: c.ob.Inherit
                        }))), r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, r.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, r.createElement(c.V, null, this.props.gameChange.label)), r.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, r.createElement(c.V, null, Object(h.b)(this.props.gameChange.duration)))))))
                    }, t
                }(r.Component)),
                g = n("0INk"),
                v = n("8/mp"),
                b = n("eJ65"),
                k = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(g.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return r.createElement(c.Va, {
                            className: "preview-card-game-balloon",
                            display: c.W.InlineBlock,
                            position: c.db.Relative,
                            margin: {
                                top: .5
                            }
                        }, r.createElement(b.a, {
                            key: "game-balloon",
                            display: c.W.Inline,
                            onToggle: this.onBalloonToggle
                        }, r.createElement(c.z, {
                            type: c.F.Hollow,
                            icon: c.nb.ViewerList
                        }, r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row
                        }, r.createElement(c.V, null, Object(o.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(c.Va, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(c.ab, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), r.createElement(c.u, {
                            direction: c.v.TopLeft,
                            size: c.w.Medium
                        }, r.createElement(c.Va, {
                            overflow: c.Ya.Hidden,
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap
                        }, r.createElement(c.Va, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, r.createElement(c.V, {
                            color: c.O.Alt2
                        }, Object(o.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(c.Va, {
                            className: "preview-card-game-balloon__content",
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: c.Z.NoWrap
                        }, r.createElement(v.b, null, r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return r.createElement(f, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(r.Component)),
                y = n("kduP"),
                C = n("2xye"),
                w = function(e) {
                    return r.createElement(c.Va, null, r.createElement(c.V, {
                        color: c.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return r.createElement(c.Na, {
                            key: n
                        }, r.createElement(c.T, {
                            to: {
                                pathname: Object(y.c)(t.label),
                                state: {
                                    content: C.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: c.U.Inherit
                        }, t.label, S(n, i.length - 1) ? null : ", "))
                    })))
                },
                S = function(e, t) {
                    return e === t
                },
                _ = n("N0BP"),
                E = (n("XA5B"), function(e) {
                    var t = r.createElement(c.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: c.x.Small,
                        overflow: c.Ya.Hidden
                    }, r.createElement(c.o, {
                        ratio: e.aspect || c.p.BoxArt,
                        align: c.d.Center
                    }, r.createElement(c.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(c.T, i.__assign({}, Object(_.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            E.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var N, I = function(e) {
                    var t = s("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return r.createElement(c.Va, {
                        display: c.W.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: c.Ua.Between,
                        alignItems: c.f.Center,
                        className: t
                    }, r.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, r.createElement(c.V, {
                        "data-test-selector": "top-bar-title-selector",
                        color: c.O.Overlay,
                        bold: !0,
                        transform: c.Mb.Uppercase
                    }, e.title)), e.subTitle && r.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, r.createElement(c.V, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: c.O.Overlay
                    }, e.subTitle)))
                },
                x = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(c.gb, {
                        borderRadius: c.x.None,
                        size: c.ib.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var o = 1,
                        a = null;
                    return e.topBar && (a = r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(I, i.__assign({}, e.topBar))), o = 3), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, a, n, r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: o
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: o
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), r.createElement(c.Va, {
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
                O = (n("kF1+"), function(e) {
                    var t = e.icon && r.createElement(c.Va, {
                        display: c.W.Flex,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(c.mb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? r.createElement(c.xb, {
                        alignItems: c.f.Center,
                        background: c.r.Overlay,
                        borderRadius: c.x.Small,
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        fontSize: c.Aa.Size6,
                        justifyContent: c.Ua.Center
                    }, t, r.createElement(c.V, null, e.value)) : r.createElement(c.xb, {
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, r.createElement(c.V, null, e.value))
                }),
                L = n("GnwI"),
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), r.createElement("div", i.__assign({}, e, {
                            onClick: this.props.onClick
                        }), r.createElement(c.xb, {
                            background: c.r.Alt2,
                            overflow: c.Ya.Hidden
                        }, r.createElement(c.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                            className: n
                        }, r.createElement(c.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : r.createElement("div", {
                            className: n
                        }, r.createElement(c.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(r.Component)),
                D = Object(L.c)("PreviewCardThumbnail")(T),
                V = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return r.createElement(c.Va, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, r.createElement(c.V, {
                            color: c.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : r.createElement(c.T, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: c.U.Inherit
                        }, e.text)))
                    })), r.createElement("div", null, r.createElement(c.T, i.__assign({}, Object(_.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: c.U.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), r.createElement(c.V, {
                        type: c.Nb.H3,
                        fontSize: c.Aa.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), r.createElement(c.Va, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                P = n("H1ft"),
                F = n("ZbA5"),
                j = n("QVaV"),
                A = n("hyVY"),
                B = n("MXoD"),
                R = n("0LAi"),
                U = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(N || (N = {}));
            var W, M, G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(o.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(o.d)("unlocked", "VideoPreviewCardRestriction") : Object(o.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? c.nb.Unlock : c.nb.Lock;
                    return r.createElement(c.Va, null, !t && r.createElement(c.xb, {
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
                        "data-test-selector": N.LockSelector
                    }, r.createElement(c.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(c.V, {
                        color: c.O.Overlay,
                        fontSize: c.Aa.Size5,
                        "data-test-selector": N.UpsellSelector
                    }, Object(o.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), r.createElement(c.Va, null, r.createElement(c.z, {
                        type: c.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), r.createElement(c.xb, {
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
                    }, r.createElement(c.Qb, {
                        direction: this.props.attachTop ? c.Sb.Bottom : c.Sb.Top,
                        align: c.Rb.Right,
                        label: n
                    }, r.createElement(c.mb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            n("5NSO");

            function H(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function z(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(W || (W = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(M || (M = {}));
            var q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(U.b)(), t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", i.__assign({
                            className: "preview-card"
                        }, Object(_.a)(this.props)), r.createElement(c.xb, {
                            position: c.db.Relative,
                            borderRadius: c.x.Medium,
                            overflow: c.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(c.T, {
                            to: Object(B.a)(this.getTrackingContext(C.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(D, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: H(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, r.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), r.createElement(c.Va, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && r.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(x, {
                            topLeft: r.createElement(F.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(O, {
                                value: Object(o.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : H(this.props) ? r.createElement(x, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(O, {
                                value: Object(A.b)(this.props.durationInSeconds),
                                icon: c.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(O, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(O, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(O, {
                                value: Object(o.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : z(this.props) ? r.createElement(x, {
                            topLeft: r.createElement(O, {
                                value: Object(A.b)(this.props.durationInSeconds),
                                icon: c.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(O, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(O, {
                                value: Object(o.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return H(this.props) && this.props.listPosition ? Object(o.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return H(this.props) || z(this.props) ? Object(o.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === M.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(E, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(B.a)(this.getTrackingContext(C.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: c.p.BoxArt,
                            "data-test-selector": W.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === M.SingleGameList || this.props.context === M.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(E, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(B.a)(this.getTrackingContext(C.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: c.p.Aspect1x1,
                            "data-test-selector": W.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(j.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(B.a)(this.getTrackingContext(C.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), z(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(o.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : H(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== M.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(B.a)(this.getTrackingContext(C.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(V, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(B.a)(this.getTrackingContext(C.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(c.Va, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(R.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderAppendages = function() {
                        if (this.props.playerMetadata && this.props.playerMetadataGame) return r.createElement(c.Va, {
                            margin: {
                                top: this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? .5 : 0
                            }
                        }, r.createElement(m, {
                            streamMetadata: this.props.playerMetadata,
                            game: this.props.playerMetadataGame
                        }))
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return H(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(G, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!H(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === P.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case P.a.Balloon:
                                return r.createElement(k, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case P.a.Inline:
                                return r.createElement(w, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case P.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                Q = Object(L.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(q);
            n.d(t, !1, function() {
                return W
            }), n.d(t, "b", function() {
                return M
            }), n.d(t, !1, function() {
                return q
            }), n.d(t, "a", function() {
                return Q
            })
        },
        GxR5: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            });
            var i = n("/7QA"),
                r = "https://passport.twitch.tv/forgot_username/new",
                o = "https://help.twitch.tv/customer/portal/emails/new",
                a = "https://help.twitch.tv/customer/portal/articles/1727973-about-site-suspensions-channel-bans-and-dmca",
                s = "https://www.twitch.tv/p/legal/terms-of-service/";

            function l() {
                return "https://passport.twitch.tv/password_resets/new?client_id=" + i.a.authSettings.clientID
            }
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            });
            var i, r = n("/7QA"),
                o = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(i || (i = {}));
            var a = function() {
                switch (r.o.experiments.getAssignment(o.b.Archer)) {
                    case "balloon":
                        return i.Balloon;
                    case "inline":
                        return i.Inline;
                    case "control":
                    default:
                        return i.None
                }
            }
        },
        HNnW: function(e, t, n) {
            e.exports = n.p + "assets/missing-video-thumb-320x180-101fcbc1ff8445933141.png"
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
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "c", function() {
                return a
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
                return h
            }), n.d(t, "m", function() {
                return f
            });
            var i = "directory.LANGUAGE_TAGS_UPDATED",
                r = "directory.LOL_CHAMPIONS_CHANGED",
                o = "directory.LOL_CHAMPIONS_LOADING",
                a = "directory.LOL_CHAMPIONS_ERRORED",
                s = "directory.TAG_FILTER_ADDED",
                l = "directory.TAG_FILTER_CHANGED",
                c = "directory.TAG_FILTER_REMOVED";

            function d(e) {
                return {
                    type: i,
                    languageTags: e
                }
            }

            function u(e) {
                return {
                    type: a,
                    leagueOfLegendsChampionsErrored: e
                }
            }

            function p(e) {
                return {
                    type: o,
                    leagueOfLegendsChampionsLoading: e
                }
            }

            function m(e) {
                var t = {},
                    n = e.data;
                for (var i in n) n.hasOwnProperty(i) && (t[n[i].id] = n[i]);
                return {
                    type: r,
                    apiData: e,
                    championsMap: t,
                    apiVersion: e.version
                }
            }

            function h(e, t) {
                return {
                    type: s,
                    addedTag: e,
                    categoryName: t
                }
            }

            function f(e, t) {
                return {
                    type: c,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        IhxQ: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelCollectionsContent"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "ownerLogin"
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
                                        value: "ownerLogin"
                                    }
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
                                        value: "collections"
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
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "PreviewCollectionConnection"
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
                                                value: "isEditor"
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
                    end: 373
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/preview-collection-connection-fragment.gql"\nquery ChannelCollectionsContent($ownerLogin: String! $limit: Int $cursor: Cursor) {\nuser(login: $ownerLogin) {\nid\nlogin\ndisplayName\ncollections(first: $limit after: $cursor) {\n...PreviewCollectionConnection\n}\nself {\nisEditor\n}\n}\ncurrentUser {\nid\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("izJ5").definitions)), e.exports = i
        },
        JVvM: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return v
            });
            var i, r, o, a = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("u3aQ"),
                d = n.n(c),
                u = n("HNnW"),
                p = n.n(u),
                m = n("GnwI"),
                h = n("Ue10");
            n("Bucx");
            ! function(e) {
                e[e.VideoCountOverlayText = 0] = "VideoCountOverlayText"
            }(r || (r = {})),
            function(e) {
                e.Half = "160", e.Full = "320"
            }(o || (o = {}));
            var f = ((i = {})[o.Half] = d.a, i[o.Full] = p.a, i),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            imageLoadError: !1
                        }, t.onErrorHandler = function() {
                            t.props.latencyTracking.reportInteractive(), t.setState({
                                imageLoadError: !0
                            })
                        }, t.onLoadHandler = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e, t, n, i = null;
                        "number" == typeof this.props.videoCount && (i = s.createElement(h.Va, {
                            position: h.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0
                        }, s.createElement(h.xb, {
                            alignItems: h.f.Center,
                            attachRight: !0,
                            className: "collection-preview-image__wrapper",
                            color: h.O.Overlay,
                            display: h.W.InlineFlex,
                            flexDirection: h.Y.Column,
                            fontSize: h.Aa.Size5,
                            fullHeight: !0,
                            justifyContent: h.Ua.Center,
                            position: h.db.Absolute,
                            textAlign: h.Jb.Center
                        }, s.createElement(h.mb, {
                            asset: h.nb.Collections,
                            height: 20,
                            width: 20
                        }), s.createElement(h.V, {
                            "data-test-selector": r.VideoCountOverlayText
                        }, Object(l.d)("{videoCount, plural, one {# video} other {# videos}}", {
                            videoCount: this.props.videoCount.toString()
                        }, "CollectionCard")))));
                        var a = o.Full;
                        return this.props.fallbackSize && (a = this.props.fallbackSize), !this.props.src || this.state.imageLoadError ? (t = f[a], (e = {})[a + "w"] = t, n = e) : (t = this.props.src, n = this.props.srcSet), s.createElement(h.Va, {
                            position: h.db.Relative
                        }, s.createElement(h.S, {
                            alt: this.props.alt,
                            onError: this.onErrorHandler,
                            onLoad: this.onLoadHandler,
                            src: t,
                            srcSet: n,
                            sizes: this.props.sizes
                        }), i)
                    }, t
                }(s.Component),
                v = Object(m.c)("CollectionPreviewImage")(g)
        },
        JoTo: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                a = n("f00E"),
                s = n("/IfK"),
                l = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderPortal = function(e) {
                            s.b ? s.b.provideContent(e, n.contentID) : o.j.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.removePortal = function() {
                            s.b ? s.b.removeContent() : o.j.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.contentID = Object(a.a)(), n
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.children ? this.renderPortal(e.children) : this.removePortal()
                    }, t.prototype.componentDidMount = function() {
                        s.b || o.j.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content."), this.props.children && this.renderPortal(this.props.children)
                    }, t.prototype.componentWillUnmount = function() {
                        this.removePortal()
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return l
            })
        },
        Lmqf: function(e, t, n) {
            e.exports = n.p + "assets/upsell-center-dark-6c092df86238db84cff1.png"
        },
        MJbm: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                a = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = o.o.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                i = e.offsetHeight,
                                r = e.offsetLeft,
                                o = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && i === t.height && o === t.top && r === t.left || (t.width = n, t.height = i, t.props.onResize(n, i, o, r)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", {
                            className: "resize-detector"
                        }, r.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, r.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), r.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, r.createElement("div", {
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
                }(r.Component));
            n.d(t, "a", function() {
                return a
            })
        },
        MxAq: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("fvjX"),
                o = n("kRBY"),
                a = n("SiBg"),
                s = (n("zHWM"), n("mrSG")),
                l = n("q1tI"),
                c = n("/7QA"),
                d = n("hyVY"),
                u = n("GnwI"),
                p = n("Ue10"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChangeHandler = function() {
                            return t.props.onSelected(t.props.collection)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(p.Va, {
                            display: p.W.Flex
                        }, l.createElement(p.Va, {
                            padding: 2
                        }, l.createElement(p.N, {
                            label: "",
                            onChange: this.onChangeHandler,
                            checked: this.props.videoIsInCollection
                        })), l.createElement(p.Va, {
                            padding: 1
                        }, l.createElement(p.I, {
                            aspect: p.p.Aspect16x9,
                            alt: this.props.collection.title,
                            src: this.props.collection.thumbnailSrc || "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                            size: p.J.Size8
                        })), l.createElement(p.Va, {
                            padding: 1,
                            display: p.W.Flex,
                            flexDirection: p.Y.Column
                        }, l.createElement(p.Va, null, l.createElement(p.V, {
                            ellipsis: !0
                        }, this.props.collection.title)), l.createElement(p.Va, {
                            display: p.W.Flex
                        }, l.createElement(p.Va, {
                            padding: {
                                right: 1
                            }
                        }, l.createElement(p.V, null, Object(c.d)("{videoCount} video", {
                            videoCount: this.props.collection.itemsCount
                        }, "CollectionRowPresentation"))), l.createElement(p.Va, {
                            padding: {
                                x: 1
                            }
                        }, l.createElement(p.V, null, "·")), l.createElement(p.Va, {
                            padding: {
                                left: 1
                            }
                        }, l.createElement(p.V, null, Object(d.b)(this.props.collection.totalDuration))))))
                    }, t
                }(l.Component),
                h = Object(u.c)("CollectionRow")(m),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onCollectionRowChange = function(e) {
                            t.props.updateItemInCollection(e, t.props.videoID, t.props.channelID, t.props.trackingPlace)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.channelID && this.props.videoID && this.props.fetchCollectionsForVideo(this.props.channelID, this.props.videoID)
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.props.channelID && this.props.videoID && this.props.collections ? l.createElement(p.Va, null, this.props.collections.map(function(t) {
                            return l.createElement(h, {
                                key: t.id,
                                collection: t,
                                videoIsInCollection: e.props.containingCollections.map(function(e) {
                                    return e.id
                                }).indexOf(t.id) > -1,
                                onSelected: e.onCollectionRowChange
                            })
                        })) : l.createElement(p.Va, null)
                    }, t
                }(l.Component),
                g = Object(u.c)("CollectionsListPresentation")(f);
            var v = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(o.f)(e),
                        collections: e.collections.collections,
                        containingCollections: e.collections.containingCollections
                    }
                }, function(e) {
                    return Object(r.bindActionCreators)({
                        fetchCollectionsForVideo: a.e,
                        updateItemInCollection: a.f
                    }, e)
                })(g),
                b = n("JVvM");
            n.d(t, "b", function() {
                return v
            }), n.d(t, "a", function() {
                return b.a
            })
        },
        On2s: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return v
            });
            var i, r = n("mrSG"),
                o = n("/7QA"),
                a = n("8rUg"),
                s = n.n(a),
                l = n("ZrRH"),
                c = n.n(l),
                d = n("6H22"),
                u = n.n(d),
                p = n("X7a7"),
                m = n("YhoA"),
                h = n("Pcnk"),
                f = n("mz1O"),
                g = o.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(i || (i = {}));
            var v = function(e, t) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var n, i, a, s, l, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = t.toLowerCase(), i = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, a = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, i && n === m.a.CounterStrike ? [4, b(i)] : [3, 2];
                                case 1:
                                    return [2, r.sent()];
                                case 2:
                                    return a && n === m.a.Hearthstone ? [4, k(a)] : [3, 4];
                                case 3:
                                    return [2, r.sent()];
                                case 4:
                                    return l && n === m.a.Overwatch ? [4, y(l)] : [3, 6];
                                case 5:
                                    return [2, r.sent()];
                                case 6:
                                    if (s && n === m.a.LeagueOfLegends && (c = o.o.store.getState()).directory)
                                        if (c.directory.leagueOfLegends.championsMap) {
                                            if (c.directory.leagueOfLegends.championsMap) return [2, C(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                        } else o.o.store.dispatch(Object(p.b)());
                                    r.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                b = function(e) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var t, n, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(f.a)()];
                                case 1:
                                    return t = r.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                        name: n[e].display_name,
                                        label: Object(h.b)(h.a.CSGOSkillGroup),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: s.a
                                        }
                                    }];
                                case 2:
                                    return i = r.sent(), g.error(i, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                k = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(f.b)()];
                                case 1:
                                    return t = r.sent(), n = {}, t[0].Class.forEach(function(e) {
                                        n[e.class] = e
                                    }), [2, {
                                        name: n[e].display_name,
                                        label: Object(h.b)(h.a.HearthstoneClass),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: c.a
                                        }
                                    }];
                                case 2:
                                    return i = r.sent(), g.error(i, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, i, o, a, s, l, c, d, p, m, v;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(f.d)()];
                                case 1:
                                    for (n = r.sent(), i = void 0, o = 0, a = n; o < a.length; o++)
                                        for (s in i = a[o])
                                            if (i.hasOwnProperty(s))
                                                for (l = i[s], c = 0, d = l; c < d.length; c++)
                                                    if ((p = d[c]).character === e) return (t = {})[p.character] = p, [2, {
                                                        name: (m = t)[e].display_name,
                                                        label: Object(h.b)(h.a.OverwatchCharacter),
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
                                    return v = r.sent(), g.error(v, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                C = function(e, t, n) {
                    if (!t || !e) return null;
                    var i = t[e],
                        r = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + i.image.sprite;
                    return {
                        name: i.name,
                        label: Object(h.b)(h.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: i.image.w,
                            imageHeight: i.image.h,
                            spriteOffsetX: i.image.x,
                            spriteOffsetY: i.image.y,
                            spriteURL: r
                        }
                    }
                }
        },
        Pcnk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var i, r = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(i || (i = {}));
            var o = function(e) {
                switch (e) {
                    case i.CSGOMap:
                        return Object(r.d)("Map", "CSGOMapFilter");
                    case i.CSGOSkillGroup:
                        return Object(r.d)("Rank", "CSGORankFilter");
                    case i.HearthstoneClass:
                        return Object(r.d)("Class", "HearthstoneClassFilter");
                    case i.HearthstoneMode:
                        return Object(r.d)("Mode", "HearthstoneModeFilter");
                    case i.LeagueChampion:
                        return Object(r.d)("Champion", "LeagueFilter");
                    case i.OverwatchCharacter:
                        return Object(r.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
        },
        QjI3: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                o = n("q1tI"),
                a = n("/MKj"),
                s = n("fvjX"),
                l = n("ZS2+"),
                c = n("UUve"),
                d = n("1/iK"),
                u = n("aCAx"),
                p = n("kRBY"),
                m = n("GnwI"),
                h = n("oJmH"),
                f = n("/7QA"),
                g = n("2+sX"),
                v = n("u5aL"),
                b = n("eJ65"),
                k = n("yR8l"),
                y = n("x7UT"),
                C = n("3Bft"),
                w = n("tIid"),
                S = n("ht6z"),
                _ = n("/aPz"),
                E = n("D7An"),
                N = n("W8Fi"),
                I = n("br9A"),
                x = n("Ue10"),
                O = (n("a7aT"), n("z+dA"));
            ! function(e) {
                e.SubButton = "subscribe-button__dropdown", e.BalloonLayerButton = "subscribe-button__balloon-layer-btn", e.DefaultButton = "subscribe-button__default-btn", e.SubscribeBalloon = "subscribe-button__subscribe-balloon"
            }(i || (i = {}));
            var L = l.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(186)]).then(n.bind(null, "f+qK"))
                }, "SubscribeBalloon"),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeTierPrice: null,
                            inPrimeRegion: !1
                        }, t.modalLevel = "top_page", t.renderBalloonContentForBalloonLayer = function() {
                            return o.createElement(v.a, {
                                onClickOut: t.handleBalloonClickOut
                            }, o.createElement(x.Va, {
                                "data-a-target": "sub-balloon",
                                refDelegate: t.setBalloonContentRefDelegate
                            }, t.balloonWrapperContent))
                        }, t.handleButtonClick = function() {
                            t.balloonContentRef || (t.props.balloonLayer.show({
                                direction: t.getBalloonDirection(),
                                ref: t.containerRef,
                                content: t.renderBalloonContentForBalloonLayer(),
                                contentHeight: 0,
                                closeOnScroll: !0
                            }), t.handleMenuToggle(!1))
                        }, t.handleBalloonClickOut = function() {
                            t.handleMenuToggle(!0), t.props.balloonLayer.hide({
                                force: !0
                            })
                        }, t.setBalloonWrapperContent = function(e) {
                            t.balloonWrapperContent = e
                        }, t.handleSubMenuAction = function(e) {
                            new Set([I.a.ClickCheckout, I.a.BuyGiftSub, I.a.BuyMysteryGift, I.a.BuyCustomMysteryGift, I.a.BuyGiftToPaidUpgrade, I.a.BuyPaidUpgrade]).has(e.action) && t.checkAndDisplaySubscriptionCheckout();
                            var n = !!(t.props.data.user && t.props.data.user.self && t.props.data.user.self.subscriptionBenefit),
                                i = t.props.data.requestInfo && Object(S.a)(t.props.data.requestInfo.countryCode);
                            Object(I.b)({
                                action: e.action || "",
                                channelLogin: t.props.channelLogin || "",
                                channelID: t.props.data && t.props.data.user.id,
                                checkoutButtonTier: e.checkoutButtonTier || (t.state.activeTierPrice || C.b.Prime).slice(),
                                hasSubCredit: !!t.props.data.user.self && t.props.data.user.self.canPrimeSubscribe,
                                hostChannelID: t.props.hostChannelID,
                                hostChannelLogin: t.props.hostChannelLogin,
                                isMenuOpen: !(e.action === I.a.OpenSubMenu),
                                mysteryGiftCount: e.mysteryGiftCount,
                                sub_location: "channel_page",
                                modal: !n,
                                modalLevel: n ? "" : t.modalLevel.slice(),
                                showPrimeContent: i,
                                giftRecipient: e.giftRecipient || null
                            }), !e.modalLevel || e.action !== I.a.ClickMoreSubOptions && e.action !== I.a.ClickBack || (t.modalLevel = e.modalLevel, t.setState({
                                activeTierPrice: C.b.Prime
                            }))
                        }, t.handleMenuToggle = function(e) {
                            t.handleSubMenuAction({
                                action: e ? I.a.CloseSubMenu : I.a.OpenSubMenu
                            })
                        }, t.onSelectTierTab = function(e) {
                            t.state.activeTierPrice !== e && t.setState({
                                activeTierPrice: e
                            })
                        }, t.getBalloonDirection = function() {
                            var e = t.props.balloonDirection || x.v.BottomRight;
                            return t.props.hostChannelID && (e = x.v.TopLeft), e
                        }, t.setContainerRefDelegate = function(e) {
                            t.containerRef = e
                        }, t.setBalloonContentRefDelegate = function(e) {
                            t.balloonContentRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive(), this.checkAndDisplaySubscriptionCheckout()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.props.data && !this.props.data.loading && this.props.reportInteractive(), !this.isUserDataReady(e) && this.isUserDataReady(this.props) && this.checkAndDisplaySubscriptionCheckout()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch()
                    }, t.prototype.componentWillUnmount = function() {
                        Object(c.d)()
                    }, t.prototype.render = function() {
                        if (!this.isUserDataReady(this.props) || !this.hasSubscriptionProducts(this.props)) return null;
                        if (this.props.hideEsportsSubscription && Object(w.a)(this.props.data.user.id, this.props.sessionUser)) return null;
                        var e = this.props.data.requestInfo && Object(S.a)(this.props.data.requestInfo.countryCode),
                            t = !!(this.props.data.user && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit),
                            n = Object(w.a)(this.props.data.user.id, this.props.sessionUser),
                            r = 1 === this.props.data.user.subscriptionProducts.length,
                            a = null;
                        this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && (a = this.props.data.user.self.subscriptionBenefit.purchasedWithPrime ? C.b.Prime : this.props.data.user.self.subscriptionBenefit.tier, this.modalLevel = ""), this.props.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && (r = !0);
                        var s, l = t ? Object(f.d)("All-Access Pass", "SubscribeButton") : Object(f.d)("Get the All-Access Pass", "SubscribeButton"),
                            c = this.props.data.user.self && Object(N.h)(this.props.data.user.subscriptionProducts, this.props.data.user.self.subscriptionBenefit);
                        if (t) {
                            var d = "";
                            if (d = r ? Object(f.d)("Subscribed", "SubscribeButton") : c ? Object(f.d)("Continue Sub for $1", "SubscribeButton") : Object(f.d)("Gift A Sub", "SubscribeButton"), s = this.props.hostChannelID ? Object(f.d)("Subscribed to {username}", {
                                    username: this.props.data.user.displayName
                                }, "SubscribeButton") : d, r && !n) return o.createElement(x.z, {
                                disabled: !0,
                                ariaLabel: s,
                                icon: x.nb.Star
                            }, s);
                            n && (s = l)
                        } else s = n ? l : this.props.hostChannelID ? Object(f.d)("Subscribe to {username}", {
                            username: this.props.data.user.displayName
                        }, "SubscribeButton") : Object(f.d)("Subscribe", "SubscribeButton");
                        var u = t ? "subscribed-button" : "subscribe-button",
                            p = o.createElement(x.z, {
                                "data-a-target": u,
                                "data-test-selector": i.SubButton,
                                ariaLabel: s,
                                type: this.getButtonType(t),
                                dropdown: !this.props.hideDropdownArrow,
                                fullWidth: !0,
                                icon: this.getButtonIcon(t, a),
                                onClick: this.props.renderBalloonInBalloonLayer ? this.handleButtonClick : void 0
                            }, s);
                        return this.setBalloonWrapperContent(o.createElement(L, {
                            authToken: this.props.authToken,
                            channelLogin: this.props.channelLogin || "",
                            "data-test-selector": i.SubscribeBalloon,
                            handleSubMenuAction: this.handleSubMenuAction,
                            inPrimeRegion: e,
                            isEsportChannel: n,
                            isNonStandardSub: r,
                            isStaff: !!(this.props.sessionUser && this.props.sessionUser.roles && this.props.sessionUser.roles.isStaff),
                            isSubscribed: t,
                            onSelectTierTab: this.onSelectTierTab,
                            productId: this.props.data.user.subscriptionProducts[0].id,
                            subbedTier: a || C.b.Prime,
                            userHasPrime: !1
                        })), this.props.renderBalloonInBalloonLayer ? o.createElement(x.Va, {
                            "data-test-selector": i.BalloonLayerButton,
                            refDelegate: this.setContainerRefDelegate
                        }, p) : o.createElement(x.Va, {
                            className: c ? "subscribe-button--promo" : ""
                        }, o.createElement(b.a, {
                            "data-test-selector": i.DefaultButton,
                            onToggle: this.handleMenuToggle
                        }, p, o.createElement(x.u, {
                            "data-a-target": "sub-balloon",
                            direction: this.getBalloonDirection(),
                            size: x.w.Large
                        }, this.balloonWrapperContent)))
                    }, t.prototype.getButtonType = function(e) {
                        x.F.Default;
                        return e && void 0 !== this.props.subscribedButtonType ? this.props.subscribedButtonType : e ? x.F.Success : this.props.unsubscribedButtonType || x.F.Default
                    }, t.prototype.getButtonIcon = function(e, t) {
                        var n = void 0;
                        return e ? n = t === C.b.Prime ? x.nb.Crown : x.nb.Star : this.props.forceIcon && (n = x.nb.StarHollow), n
                    }, t.prototype.hasSubscriptionProducts = function(e) {
                        return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                    }, t.prototype.isUserDataReady = function(e) {
                        return e.data && e.data.user && !e.data.loading && !e.data.error
                    }, t.prototype.isSubscriptionProductInvalid = function(e) {
                        return !e.emoteSetID
                    }, t.prototype.checkAndDisplaySubscriptionCheckout = function() {
                        if ("yes" === f.o.experiments.getAssignment(E.b.InstreamCheckout)) {
                            var e = f.m.get(c.b, ""),
                                t = f.m.get(c.c, ""),
                                n = f.m.get(c.a, ""),
                                i = Number(n);
                            e && this.isUserDataReady(this.props) && (this.props.data.user.subscriptionProducts.map(function(e) {
                                return e.name
                            }).includes(e) ? this.props.sessionUser ? this.props.showSubscriptionCheckoutModal({
                                recipientLogin: t,
                                productName: e,
                                mysteryGiftCount: i
                            }) : this.props.showLoginModal() : Object(c.d)())
                        }
                    }, t
                }(o.Component),
                D = Object(h.compose)(Object(k.a)(O, {
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
                        return Object(_.E)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(g.e)())(T),
                V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.reportInteractive = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(D, {
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
                            subscribedButtonType: this.props.subscribedButtonType,
                            unsubscribedButtonType: this.props.unsubscribedButtonType,
                            updateContainerWidth: this.props.updateContainerWidth
                        })
                    }, t = r.__decorate([Object(m.c)("SubscribeButton")], t)
                }(o.Component);
            var P = Object(a.connect)(function(e) {
                return {
                    authToken: Object(p.a)(e),
                    sessionUser: Object(p.e)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    showLoginModal: Object(c.e)(d.a.ChannelSubscriptionButton),
                    showSubscriptionCheckoutModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(u.d)(l.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([n.e(0), n.e(198)]).then(n.bind(null, "KJv/"))
                            },
                            componentProps: t
                        })
                    }
                }, e)
            })(V);
            n.d(t, !1, function() {
                return V
            }), n.d(t, "a", function() {
                return P
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return T
            }), n.d(t, !1, function() {
                return D
            })
        },
        RXle: function(e, t, n) {
            "use strict";
            var i = n("86FS");
            n.d(t, "VideoPreviewCard", function() {
                return i.a
            });
            n("0T/G");
            var r = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return r.a
            })
        },
        RsJ2: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("q1tI"),
                r = n("/7QA"),
                o = n("VwyG"),
                a = n("Ue10"),
                s = function(e) {
                    return i.createElement(o.a, {
                        ownerLogin: e.channelLogin,
                        permittedRoles: {
                            owner: !0,
                            editor: !0,
                            staff: !0
                        }
                    }, function(t) {
                        return t.permitted ? i.createElement(a.z, {
                            type: a.F.Hollow,
                            linkTo: "/" + e.channelLogin + "/manager/collections"
                        }, Object(r.d)("Manage your collections", "collection-page")) : null
                    })
                }
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
        SWMh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                r = n("b6Yk"),
                o = function(e, t, n) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var o, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    o = null, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, r.a.get("/v5/videos/" + e + "/markers")];
                                case 2:
                                    return (a = i.sent()).body && a.body.markers.game_changes && (o = a.body.markers.game_changes.sort(function(e, t) {
                                        return e.time - t.time
                                    }).map(function(e, n, i) {
                                        var r = i[n + 1];
                                        return {
                                            duration: r ? r.time - e.time : t - e.time,
                                            offset: e.time,
                                            label: e.label,
                                            thumbnailUrl: e.thumbnail.sheet_url,
                                            videoID: a.body.vod_id
                                        }
                                    }), n && n.boxArtURL && o.unshift({
                                        duration: o[0].offset,
                                        videoID: e,
                                        offset: 0,
                                        label: n.name,
                                        thumbnailUrl: n.boxArtURL
                                    })), [3, 4];
                                case 3:
                                    return i.sent(), [3, 4];
                                case 4:
                                    return [2, o || []]
                            }
                        })
                    })
                }
        },
        SiBg: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("/7QA"),
                o = n("8n0m"),
                a = n("b6Yk"),
                s = n("kRBY"),
                l = n("rj3Y"),
                c = n("uzvh");

            function d(e) {
                return function(t, n) {
                    return e({
                        store: {
                            dispatch: t,
                            getState: n
                        }
                    })
                }
            }
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "e", function() {
                return g
            }), n.d(t, "d", function() {
                return b
            }), n.d(t, "f", function() {
                return k
            });
            var u = "collections.COLLECTIONS_FETCHED",
                p = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
                m = "collections.COLLECTIONS_FETCH_FAILED",
                h = "collections.COLLECTIONS_CREATE_FAILED",
                f = "collections.COLLECTIONS_UPDATE_FAILED";

            function g(e, t) {
                var n = this;
                return d(function(o) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, s, c;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 3, , 4]), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100")];
                                case 1:
                                    return n = i.sent(), o.store.dispatch({
                                        type: u,
                                        collections: Object(l.d)(n.body)
                                    }), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100&containing_item=" + l.b.Video + ":" + t)];
                                case 2:
                                    return s = i.sent(), o.store.dispatch({
                                        type: p,
                                        containingCollections: Object(l.d)(s.body),
                                        videoID: t
                                    }), [3, 4];
                                case 3:
                                    return c = i.sent(), r.j.error(c, "Failed to fetch collections"), o.store.dispatch({
                                        type: m,
                                        errorType: "Fetch Failed",
                                        errorMessage: "Fetching collections for channel " + e + " and video " + t + " failed."
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                })
            }
            var v = function(e, t) {
                return a.a.postOrThrow(e, {
                    body: t
                })
            };

            function b(e, t, n, a) {
                var c = this;
                return d(function(d) {
                    return i.__awaiter(c, void 0, void 0, function() {
                        var c, m, f, g, b, k, y, C;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    c = d.store.getState(), m = c.collections, f = Object(s.e)(c), g = f ? f.id : "", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, , 5]), [4, v("/v5/channels/" + e + "/collections/", {
                                        title: t
                                    })];
                                case 2:
                                    return b = i.sent(), k = Object(l.c)(b.body), m.collections = [k].concat(m.collections), d.store.dispatch({
                                        type: u,
                                        collections: m.collections
                                    }), Object(o.b)({
                                        channelID: e,
                                        playlistID: k.id,
                                        userID: g,
                                        title: k.title
                                    }), y = {
                                        type: l.b.Video,
                                        id: n
                                    }, [4, v("/v5/collections/" + k.id + "/items", y)];
                                case 3:
                                    return i.sent(), m.containingCollections = [k].concat(m.containingCollections), d.store.dispatch({
                                        type: p,
                                        containingCollections: m.containingCollections,
                                        videoID: n
                                    }), Object(o.a)({
                                        channelID: e,
                                        itemID: n,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: k.id,
                                        userID: g,
                                        place: a
                                    }), [3, 5];
                                case 4:
                                    return C = i.sent(), r.j.error(C, "Failed to add new collection with video"), d.store.dispatch({
                                        type: h,
                                        errorType: "Create Failed",
                                        errorMessage: "Creating collections for channel " + e + " and video " + n + " with title " + t + "."
                                    }), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function k(e, t, n, u) {
                var m = this;
                return d(function(d) {
                    return i.__awaiter(m, void 0, void 0, function() {
                        var m, h, g, b, k, y, C, w, S;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    m = d.store.getState(), h = Object(c.a)(m), g = Object(s.e)(m), b = g ? g.id : "", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 6, , 7]), h.map(function(e) {
                                        return e.id
                                    }).includes(e.id) ? (k = JSON.stringify({
                                        type: l.b.Video,
                                        id: t
                                    }), y = btoa(k), [4, a.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + y)]) : [3, 3];
                                case 2:
                                    return i.sent(), w = h.filter(function(t) {
                                        return t.id !== e.id
                                    }), d.store.dispatch({
                                        type: p,
                                        containingCollections: w,
                                        videoID: t
                                    }), Object(o.c)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: e.id,
                                        userID: b
                                    }), [3, 5];
                                case 3:
                                    return C = {
                                        type: l.b.Video,
                                        id: t
                                    }, [4, v("/v5/collections/" + e.id + "/items", C)];
                                case 4:
                                    i.sent(), w = h.concat([e]), d.store.dispatch({
                                        type: p,
                                        containingCollections: w,
                                        videoID: t
                                    }), Object(o.a)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: e.id,
                                        userID: b,
                                        place: u
                                    }), i.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return S = i.sent(), r.j.error(S, "Failed to fetch collections"), d.store.dispatch({
                                        type: f,
                                        errorType: "Update Failed",
                                        errorMessage: "Updating collection " + e.id + " for channel " + n + " and video " + t + " failed."
                                    }), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                })
            }
        },
        UUve: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return s
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "e", function() {
                return d
            });
            var i = n("/7QA"),
                r = n("y5D0"),
                o = "SUB_CHECKOUT__PRODUCT",
                a = "SUB_CHECKOUT__RECIPIENT",
                s = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                l = [o, a, s];

            function c() {
                l.forEach(function(e) {
                    return i.m.remove(e)
                })
            }

            function d(e) {
                return function() {
                    return Object(r.e)(e, {
                        onClose: c
                    })
                }
            }
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
        VwyG: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("kRBY"),
                o = n("mrSG"),
                a = n("q1tI"),
                s = n("oJmH"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("GnwI"),
                u = n("nt5g"),
                p = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = l.j.withCategory("role-restricted"), n.state = {
                            loading: t.isLoggedIn,
                            permitted: !1,
                            roles: {
                                staff: !1,
                                editor: !1,
                                owner: !1
                            },
                            error: null
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = e.data && e.data.loading,
                            n = this.props.data && this.props.data.loading;
                        (!this.props.isLoggedIn || t && !n) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.maybeSetRoleState(e)
                    }, t.prototype.componentDidMount = function() {
                        this.maybeSetRoleState(this.props)
                    }, t.prototype.render = function() {
                        return this.props.children(this.state)
                    }, t.prototype.maybeSetRoleState = function(e) {
                        if (e.isLoggedIn && e.data) {
                            var t = function(e) {
                                    var t = e.data,
                                        n = {
                                            staff: !1,
                                            editor: !1,
                                            owner: !1
                                        };
                                    t && !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id);
                                    return n
                                }(e),
                                n = {
                                    loading: e.data.loading,
                                    permitted: function(e, t) {
                                        if (e.owner) return !0;
                                        if (e.staff && t.staff) return !0;
                                        if (e.editor && t.editor) return !0;
                                        return !1
                                    }(t, e.permittedRoles),
                                    roles: t,
                                    error: null
                                };
                            e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                                err: n.error
                            })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                                err: n.error
                            })), this.setState(n)
                        }
                    }, t
                }(a.Component);
            var m = Object(s.compose)(Object(c.a)(u, {
                options: function(e) {
                    return {
                        variables: {
                            contentOwnerLogin: e.ownerLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn
                }
            }), Object(d.c)("RoleRestricted"))(p);
            var h = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(r.f)(e)
                }
            })(m);
            n.d(t, "a", function() {
                return h
            })
        },
        W8Fi: function(e, t, n) {
            "use strict";

            function i(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.promotion
                })
            }

            function r(e) {
                return e.some(function(e) {
                    return !!e.giftPromotion
                })
            }

            function o(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                })
            }

            function a(e, t) {
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
                return !!e && !!t && o(e) && !t.paidUpgrade && !!t.gift && t.gift.isGift
            }
            n.d(t, "g", function() {
                return i
            }), n.d(t, "e", function() {
                return r
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "c", function() {
                return a
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
        WfYB: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("mrSG"),
                o = n("q1tI"),
                a = n("fvjX"),
                s = n("/7QA"),
                l = n("ZDlU"),
                c = n("8/mp"),
                d = n("yR8l"),
                u = n("QVaV"),
                p = n("2xye"),
                m = n("tuvy"),
                h = n("GnwI"),
                f = n("hkkJ"),
                g = n("RsJ2"),
                v = n("2iEm"),
                b = n("MxAq"),
                k = n("Ue10"),
                y = 0,
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.computeViewsMessage = function() {
                            var e = t.props.totalViews || y;
                            return 0 === e || 1 === e ? Object(s.d)("{viewCount, plural, one {# view}  other {# views}}", {
                                viewCount: e
                            }, "CollectionCard") : Object(s.d)("{viewCount} views", {
                                viewCount: Object(s.f)(e)
                            }, "CollectionCard")
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("By {channelName}", {
                            channelName: o.createElement(k.T, {
                                "data-test-selector": "collection-card-channel-link",
                                to: this.props.channelLinkTo,
                                hoverUnderlineNone: !0
                            }, this.props.channelDisplayName)
                        }, "ChannelCollections");
                        return o.createElement(k.G, r.__assign({
                            key: this.props.title
                        }, Object(k.bc)(this.props)), o.createElement(k.Na, {
                            position: k.db.Relative
                        }, o.createElement(v.a, {
                            to: {
                                pathname: this.props.linkTo,
                                state: {
                                    content: p.PageviewContent.CollectionCard,
                                    medium: p.PageviewMedium.ChannelCollections
                                }
                            },
                            title: this.props.title,
                            "data-test-selector": 'collection-card-overlay-link"'
                        }, o.createElement(b.a, {
                            alt: this.props.title,
                            sizes: [{
                                size: "320px"
                            }],
                            src: this.props.imageSrc,
                            videoCount: this.props.videoCount
                        }))), o.createElement(k.H, {
                            "data-test-selector": "collection-card-body"
                        }, o.createElement(k.Va, {
                            display: k.W.Flex,
                            flexDirection: k.Y.Column,
                            flexWrap: k.Z.NoWrap,
                            padding: {
                                top: .5
                            }
                        }, o.createElement(k.V, {
                            fontSize: k.Aa.Size5,
                            ellipsis: !0
                        }, o.createElement(k.T, {
                            to: {
                                pathname: this.props.linkTo,
                                state: {
                                    content: p.PageviewContent.CollectionCard,
                                    medium: p.PageviewMedium.ChannelCollections
                                }
                            },
                            "data-test-selector": "collection-card-title-link",
                            hoverUnderlineNone: !0
                        }, this.props.title)), o.createElement(k.V, {
                            color: k.O.Alt2,
                            ellipsis: !0
                        }, o.createElement(k.V, {
                            type: k.Nb.Span
                        }, e), o.createElement(k.V, {
                            type: k.Nb.Span
                        }, " · " + this.computeViewsMessage())))))
                    }, t
                }(o.Component),
                w = Object(h.c)("CollectionCard", {
                    autoReportInteractive: !0
                })(C),
                S = n("VwyG");
            ! function(e) {
                e[e.NoCollections = 0] = "NoCollections", e[e.NoCollectionsUpSell = 1] = "NoCollectionsUpSell"
            }(i || (i = {}));
            var _, E = function(e) {
                    var t;
                    return t = e.canEdit ? o.createElement("div", {
                        "data-test-selector": i.NoCollectionsUpSell
                    }, o.createElement(k.V, {
                        type: k.Nb.H4
                    }, Object(s.d)("Create a collection of your videos from Video Producer.", "collection-page")), o.createElement(k.Va, {
                        padding: {
                            top: 2
                        }
                    }, o.createElement(k.z, {
                        type: k.F.Hollow,
                        linkTo: "/" + e.channelLogin + "/manager/collections"
                    }, Object(s.d)("Go to Video Producer", "collection-page")))) : o.createElement(k.V, {
                        type: k.Nb.H4,
                        italic: !0,
                        "data-test-selector": i.NoCollections
                    }, Object(s.d)("No collections found.", "collection-page")), o.createElement(k.xb, {
                        color: k.O.Alt2,
                        textAlign: k.Jb.Center
                    }, t)
                },
                N = function(e) {
                    return o.createElement(S.a, {
                        ownerLogin: e.channelLogin,
                        permittedRoles: {
                            owner: !0,
                            editor: !0,
                            staff: !0
                        }
                    }, function(t) {
                        var n = t.permitted;
                        return o.createElement(E, {
                            canEdit: n,
                            channelLogin: e.channelLogin
                        })
                    })
                },
                I = n("cERj"),
                x = n("IhxQ");
            ! function(e) {
                e[e.Filters = 0] = "Filters"
            }(_ || (_ = {}));
            var O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || (this.props.data.user && this.props.data.user.displayName && s.o.setPageTitle(this.props.data.user.displayName), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.render = function() {
                        if (!this.props.data.error && this.props.data.user) {
                            var e = this.props.data.user,
                                t = [];
                            e.collections && e.collections.edges && e.collections.edges.forEach(function(e) {
                                e && e.node && t.push(e.node)
                            });
                            var n = null;
                            return Object(m.a)() || (n = o.createElement(k.Va, {
                                alignItems: k.f.End,
                                "data-test-selector": _.Filters,
                                display: k.W.Flex,
                                flexDirection: k.Y.Row,
                                justifyContent: k.Ua.Between,
                                padding: {
                                    bottom: 2
                                }
                            }, Object(m.b)() ? o.createElement(I.a, {
                                channelLogin: this.props.channelLogin
                            }) : o.createElement("div", null), o.createElement(g.a, {
                                channelLogin: this.props.channelLogin
                            }))), o.createElement("div", null, n, this.renderCollections(e, t, this.props.data.currentUser))
                        }
                        if (this.props.data.loading && !this.props.data.user) {
                            for (var i = [], r = 0; r < 12; r++) i.push(o.createElement(k.Va, {
                                key: "collection-placeholder-" + r,
                                padding: {
                                    bottom: 2
                                },
                                "data-test-selector": "collections-placeholder"
                            }, o.createElement(k.Va, {
                                margin: {
                                    bottom: .5
                                }
                            }, o.createElement(k.o, {
                                ratio: k.p.Aspect16x9
                            }, o.createElement(k.cb, null))), o.createElement(k.V, null, o.createElement(k.cb, {
                                width: 150
                            })), o.createElement(k.V, {
                                fontSize: k.Aa.Size7
                            }, o.createElement(k.cb, {
                                width: 100
                            }))));
                            return o.createElement(k.Tb, {
                                gutterSize: k.Vb.Small,
                                childWidth: k.Ub.Medium,
                                placeholderItems: 20
                            }, i)
                        }
                        return o.createElement(k.Va, {
                            margin: {
                                top: 5
                            }
                        }, o.createElement(l.a, {
                            message: Object(s.d)("These collections are temporarily unavailable.", "channel-collections")
                        }))
                    }, t.prototype.renderCollections = function(e, t, n) {
                        var i, r = this;
                        if (0 === t.length) return o.createElement(k.Va, {
                            padding: {
                                y: 5
                            }
                        }, o.createElement(N, {
                            channelLogin: this.props.channelLogin
                        }));
                        if (Object(m.a)() || Object(m.b)()) {
                            var a = !(!n || n.id !== e.id) || !(!e.self || !e.self.isEditor);
                            i = t.map(function(e) {
                                return o.createElement(f.a, {
                                    collection: e,
                                    key: e.id,
                                    tracking: {
                                        content: p.PageviewContent.CollectionCarousel,
                                        location: p.PageviewLocation.ChannelCollections,
                                        medium: p.PageviewMedium.ChannelCollections,
                                        source: {
                                            source_channel: r.props.channelLogin
                                        },
                                        itemType: p.TwitchDataType.Collection
                                    },
                                    userCanEdit: a
                                })
                            })
                        } else {
                            var s = t.map(function(t, n) {
                                return o.createElement(k.Va, {
                                    key: t.id,
                                    margin: {
                                        bottom: 2
                                    }
                                }, o.createElement(w, {
                                    channelLinkTo: "/" + e.login,
                                    channelDisplayName: Object(u.a)(e.login, e.displayName),
                                    imageSrc: t.thumbnailURL || void 0,
                                    linkTo: "/collections/" + t.id,
                                    title: t.title,
                                    totalViews: t.viewCount,
                                    videoCount: t.items.totalCount,
                                    "data-a-target": "collection-card-" + n
                                }))
                            });
                            i = o.createElement(k.Tb, {
                                gutterSize: k.Vb.Small,
                                childWidth: k.Ub.Large,
                                placeholderItems: 20
                            }, s)
                        }
                        var l = !this.props.data.loading && !this.props.data.error && !!e.collections.pageInfo.hasNextPage;
                        return o.createElement(o.Fragment, null, i, o.createElement(c.a, {
                            enabled: l,
                            loadMore: this.props.loadMore
                        }))
                    }, t
                }(o.Component),
                L = Object(a.compose)(Object(h.c)("ChannelCollectionsContent"), Object(d.a)(x, {
                    options: function(e) {
                        return {
                            variables: {
                                ownerLogin: e.channelLogin,
                                limit: Object(m.a)() || Object(m.b)() ? 4 : 30
                            }
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                if (e.data.user && e.data.user.collections) {
                                    var t = e.data.user.collections.edges[Math.max(e.data.user.collections.edges.length - 1, 0)];
                                    if (t) return e.data.fetchMore({
                                        query: x,
                                        variables: r.__assign({}, e.data.variables, {
                                            cursor: t.cursor
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            return {
                                                user: r.__assign({}, n.user, {
                                                    collections: r.__assign({}, n.user.collections, {
                                                        edges: e.user.collections.edges.concat(n.user.collections.edges)
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                }))(O);
            n.d(t, "TestSelectors", function() {
                return _
            }), n.d(t, "COLLECTIONS_PLACEHOLDER_SELECTOR", function() {
                return "collections-placeholder"
            }), n.d(t, "COLLECTIONS_PLACEHOLDER_LIMIT", function() {
                return 12
            }), n.d(t, "ChannelCollectionsContentComponent", function() {
                return O
            }), n.d(t, "ChannelCollectionsContent", function() {
                return L
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                o = n("/7QA"),
                a = n("b6Yk"),
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
                return h
            }), n.d(t, "c", function() {
                return f
            }), n.d(t, "a", function() {
                return g
            });
            var d = "languageTags",
                u = 0,
                p = 350;

            function m() {
                var e = this;
                return function(t) {
                    clearTimeout(u), u = setTimeout(function() {
                        return i.__awaiter(e, void 0, void 0, function() {
                            var e, n, s, d, u, p;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        e = o.o.logger.withCategory("leagueoflegends-api"), t(Object(c.k)(!0)), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), n = o.o.intl.getLanguageCode(), s = l(n), d = a.a.getAPIURL("/api/lol/champions?" + r.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, a.a.get(d)];
                                    case 2:
                                        return (u = i.sent()).body ? t(Object(c.l)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.j)(!0))), [3, 4];
                                    case 3:
                                        throw p = i.sent(), t(Object(c.j)(!0)), e.error(p, "Failed to load LoL champion data"), p;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, p)
                }
            }

            function h(e, t) {
                var n = this;
                return function(r) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, a;
                        return i.__generator(this, function(i) {
                            return n = new Set(g()), t ? n.add(e) : n.delete(e), a = Array.from(n), o.l.set(d, a), r(Object(c.i)(a)), [2]
                        })
                    })
                }
            }

            function f(e) {
                var t = this;
                return function(n) {
                    return i.__awaiter(t, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            return o.l.set(d, e), n(Object(c.i)(e)), [2]
                        })
                    })
                }
            }

            function g() {
                return o.l.get(d, [])
            }
        },
        XA5B: function(e, t, n) {},
        XEwr: function(e, t, n) {
            "use strict";

            function i(e) {
                if (!e || 0 === e.edges.length) return [];
                var t = [];
                return e.edges.forEach(function(e) {
                    e.node.id && t.push(e.node)
                }), t
            }

            function r(e) {
                return "slug" in e
            }
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            })
        },
        YhoA: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
                }(i || (i = {}))
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var i, r, o, a, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("oB8h"),
                p = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(a || (a = {}));
            var m = ((i = {})[u.a.Live] = "stream-type-indicator--live", i[u.a.Premiere] = "stream-type-indicator--premiere", i[u.a.Rerun] = "stream-type-indicator--rerun", i[u.a.WatchParty] = "stream-type-indicator--rerun", i),
                h = ((r = {})[u.a.Premiere] = p.nb.VideoPremiere, r[u.a.Rerun] = p.nb.VideoRerun, r[u.a.WatchParty] = p.nb.VideoRerun, r),
                f = ((o = {})[u.a.Premiere] = p.ob.Live, o[u.a.Rerun] = p.ob.Inherit, o[u.a.WatchParty] = p.ob.Inherit, o),
                g = function(e) {
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
                            "data-test-selector": a.HostingDot
                        }) : this.props.type === u.a.Live ? c.createElement(p.Va, {
                            className: "stream-type-indicator__live-wrapper",
                            display: p.W.Flex,
                            alignItems: p.f.Center
                        }, c.createElement(p.K, {
                            status: p.M.Live,
                            size: p.L.Small
                        })) : c.createElement(p.mb, {
                            asset: h[this.props.type],
                            type: f[this.props.type],
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
                return a
            }), n.d(t, "a", function() {
                return g
            })
        },
        ZrRH: function(e, t, n) {
            e.exports = n.p + "assets/hearthstone-classes-d5c707fb47547e9585bc.png"
        },
        a7aT: function(e, t, n) {},
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                o = n("kRBY"),
                a = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var r, o, a, s;
                            return i.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, r), a = i.__assign({}, t, {
                                            body: o
                                        }), [4, this._fetch(e, a)];
                                    case 1:
                                        return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, l.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var r;
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((r = o.sent()).requestError) throw r.requestError;
                                        if (r.error) throw new Error("Error while sending legacy-api request: " + r.error.status + " - " + r.error.message);
                                        return [2, i.__assign({}, r, {
                                            body: r.body
                                        })];
                                    case 2:
                                        throw o.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, r.o.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var t, n, r, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return r = i.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = r), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
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
                            headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = r.o.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": r.o.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var a = Object(o.e)(n);
                        return a && (i.Authorization = "OAuth " + a.authToken, a.legacyCSRFToken && (i["Twitch-Api-Token"] = a.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = r.o.logger.withCategory("legacy-api"), e
                }()
        },
        b7X6: function(e, t, n) {},
        bdIb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                a = n("GFmA"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(a.a, {
                            context: this.props.context,
                            title: this.props.clip.title,
                            linkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login + "/clip/" + this.props.clip.slug : "",
                                state: this.getLinkState()
                            },
                            onClick: this.onClickHandler,
                            thumbnailImageProps: {
                                src: this.props.clip.thumbnailURL || o.o.config.defaultStreamPreviewURL,
                                alt: this.props.clip.title
                            },
                            channelDisplayName: this.props.clip.broadcaster && this.props.clip.broadcaster.displayName || "",
                            channelLogin: this.props.clip.broadcaster && this.props.clip.broadcaster.login || "",
                            channelLinkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login : "",
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.clip.broadcaster && this.props.clip.broadcaster.profileImageURL || "",
                                alt: this.props.clip.broadcaster && this.props.clip.broadcaster.login || ""
                            },
                            gameTitle: this.props.clip.game && this.props.clip.game.name || void 0,
                            gameTitleLinkTo: this.props.clip.game ? {
                                pathname: "/directory/game/" + encodeURI(this.props.clip.game.name),
                                state: this.getLinkState()
                            } : void 0,
                            gameBoxArtImageProps: this.props.clip.game ? {
                                src: this.props.clip.game.boxArtURL || o.a.defaultBoxArtURL,
                                alt: this.props.clip.game.name
                            } : void 0,
                            datePublished: this.props.clip.createdAt,
                            viewCount: this.props.clip.viewCount,
                            durationInSeconds: this.props.clip.durationSeconds,
                            clipCreatedByChannelLogin: this.props.clip.curator && this.props.clip.curator.login || "",
                            clipCreatedByChannelLoginLinkTo: this.props.clip.curator ? "/" + this.props.clip.curator.login : ""
                        })
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(r.Component)
        },
        br9A: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                o = n("2xye"),
                a = n("I6K6"),
                s = n("RuiO"),
                l = {
                    BuyCustomMysteryGift: "buy_custom_mystery_gift",
                    BuyGiftSub: "buy_gift_sub",
                    BuyGiftToPaidUpgrade: "buy_gift_to_paid_upgrade",
                    BuyMysteryGift: "buy_mystery_gift",
                    BuyPaidUpgrade: "buy_paid_upgrade",
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
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, l, c, d, u, p, m, h, f, g, v, b;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.n.getVideoPlayerTrackingData().vodID, n = !!t, l = {
                                    channelID: e.channelID,
                                    withVideo: !1
                                }, n && (l.withVideo = !0, l.videoID = t), c = null, i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, r.o.apollo.client.query({
                                    query: s,
                                    variables: l
                                })];
                            case 2:
                                return c = i.sent(), [3, 4];
                            case 3:
                                return d = i.sent(), r.j.error(d, "Failed to make query for channel info in FollowEvent reporting.", {
                                    channelID: e.channelID
                                }), [3, 4];
                            case 4:
                                return u = c && c.data && c.data.user || null, c && !u && r.j.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                    channelID: e.channelID
                                }), p = null, c && n && ((m = c && c.data && c.data.video) ? p = Object(a.a)(m.broadcastType) : r.j.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
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
                                    vod_type: p,
                                    viewport_height: window.innerHeight,
                                    viewport_width: window.innerWidth
                                }, r.n.track(o.SpadeEventType.Subscription, b), [2]
                        }
                    })
                })
            }
        },
        cERj: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return h
            });
            var i, r = n("mrSG"),
                o = n("q1tI"),
                a = n("9C/b"),
                s = n("/7QA"),
                l = n("eJ65"),
                c = n("+GjP"),
                d = n("vRsq"),
                u = n("tuvy"),
                p = n("Ue10");
            ! function(e) {
                e.ButtonText = "button-text", e.FilterText = "filter-text"
            }(i || (i = {}));
            var m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.getFilters(),
                            t = e.find(function(e) {
                                return !!e.selected
                            });
                        return o.createElement(p.Va, {
                            padding: {
                                right: 1
                            }
                        }, o.createElement(p.Va, {
                            padding: {
                                bottom: .5
                            }
                        }, o.createElement(p.V, {
                            bold: !0
                        }, Object(s.d)("Showing", "VideoFilter"))), o.createElement(l.a, {
                            hideBalloonOnInsideClick: !0
                        }, o.createElement(p.z, {
                            dropdown: !0,
                            type: p.F.Hollow,
                            "data-test-selector": i.ButtonText
                        }, t ? t.label : e[0].label), o.createElement(p.u, {
                            noTail: !0,
                            direction: p.v.Bottom
                        }, this.renderFilterList())))
                    }, t.prototype.renderFilterList = function() {
                        return this.getFilters().map(this.renderFilter.bind(this))
                    }, t.prototype.renderFilter = function(e) {
                        var t = !!e.selected;
                        return o.createElement(p.Sa, {
                            key: e.label,
                            linkTo: t ? this.props.location : this.filterLink(e.filter),
                            selected: t
                        }, o.createElement(p.Va, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            "data-test-selector": i.FilterText
                        }, e.label))
                    }, t.prototype.getFilters = function() {
                        var e = [{
                                label: Object(s.d)("All Videos", "VideoFilter2"),
                                filter: d.e.All
                            }, {
                                label: Object(s.d)("Past Broadcasts", "VideoFilter2"),
                                filter: d.e.PastBroadcasts
                            }, {
                                label: Object(s.d)("Clips", "VideoFilter2"),
                                filter: d.e.Clips
                            }, {
                                label: Object(s.d)("Collections", "VideoFilter2"),
                                filter: d.e.Collections
                            }, {
                                label: Object(s.d)("Highlights", "VideoFilter2"),
                                filter: d.e.Highlights
                            }],
                            t = null;
                        if (Object(u.a)()) t = Object(d.x)(this.props.location.search);
                        else {
                            var n = Object(d.w)(this.props.location.pathname);
                            t = n ? Object(d.A)(n) : null
                        }
                        return e.forEach(function(e) {
                            t || e.filter !== d.e.All ? t && t === e.filter && (e.selected = !0) : e.selected = !0
                        }), e
                    }, t.prototype.filterLink = function(e) {
                        var t;
                        return Object(u.a)() ? e ? Object(c.d)(this.props.location, ((t = {})[d.c] = e, t)) : Object(c.b)(this.props.location, d.c) : e ? Object(c.c)(this.props.location, "/" + this.props.channelLogin + "/" + Object(d.z)(e)) : Object(c.c)(this.props.location, "/" + this.props.channelLogin + "/" + Object(d.o)())
                    }, t
                }(o.Component),
                h = Object(a.a)(m)
        },
        cRsL: function(e, t, n) {},
        cnlr: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                o = n("q1tI"),
                a = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("Lmqf"),
                d = n.n(c),
                u = n("yR8l"),
                p = n("1/iK"),
                m = n("y5D0"),
                h = n("ugtu"),
                f = n("D7An");
            ! function(e) {
                e.Learn = "learn", e.Support = "support", e.LiveUp = "liveup", e.Recommendation = "rec", e.Bullet = "bullet"
            }(i || (i = {}));
            var g, v, b = n("Ue10"),
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            upsellCenterChannelsAssignment: t.props.showDefault ? null : function() {
                                var e = l.o.experiments.getAssignment(f.b.WebSideNavUpsellCenterChannels);
                                return e === i.Learn || e === i.Support || e === i.LiveUp || e === i.Recommendation || e === i.Bullet ? e : null
                            }()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(b.Va, {
                            margin: {
                                y: 1
                            }
                        }, this.renderText())
                    }, t.prototype.renderText = function() {
                        if (!this.props.data || this.props.showDefault || !this.state.upsellCenterChannelsAssignment) return this.renderDefault();
                        switch (this.state.upsellCenterChannelsAssignment) {
                            case i.Learn:
                                return this.renderTextContent(Object(l.d)("Want to master <x:bold>{game}</x:bold>?", {
                                    game: this.props.data.game,
                                    "x:bold": h.j
                                }, "UpsellCenterText"), Object(l.d)("Sign up to learn from the best.", "UpsellCenterText"));
                            case i.Support:
                                return this.renderTextContent(Object(l.d)("Sign up and follow to support <x:bold>{name}</x:bold> and all your favorite streamers!", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": h.j
                                }, "UpsellCenterText"));
                            case i.LiveUp:
                                return this.renderTextContent(Object(l.d)("Late to the show?", "UpsellCenterText"), Object(l.d)("Sign up and get notifications next time <x:bold>{name}</x:bold> goes live.", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": h.j
                                }, "UpsellCenterText"));
                            case i.Recommendation:
                                return this.renderTextContent(Object(l.d)("Discover more streamers like <x:bold>{name}</x:bold>!", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": h.j
                                }, "UpsellCenterText"), Object(l.d)("Sign up to see which channels we've picked just for you.", "UpsellCenterText"));
                            case i.Bullet:
                                return this.renderBulletPoints(Object(l.d)("Sign up to experience the best of <x:bold>{name}</x:bold>:", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": h.j
                                }, "UpsellCenterText"), [Object(l.d)("Chat with other fans", "UpsellCenterText"), Object(l.d)("Capture your favorite moments", "UpsellCenterText"), Object(l.d)("Watch in Dark Mode!", "UpsellCenterText")]);
                            default:
                                return this.renderDefault()
                        }
                    }, t.prototype.renderDefault = function() {
                        return this.renderTextContent(Object(l.d)("Join the Twitch community!", "UpsellCenterText"), Object(l.d)("Discover the best live streams anywhere.", "UpsellCenterText"))
                    }, t.prototype.renderTextContent = function(e, t) {
                        return o.createElement(o.Fragment, null, o.createElement(b.V, {
                            color: b.O.Base,
                            fontSize: b.Aa.Size4
                        }, e), o.createElement(b.V, {
                            color: b.O.Alt2,
                            fontSize: b.Aa.Size5
                        }, t))
                    }, t.prototype.renderBulletPoints = function(e, t) {
                        var n = t.map(function(e, t) {
                            return o.createElement(b.Va, {
                                key: "upsell-center-text-" + t,
                                display: b.W.Flex,
                                flexDirection: b.Y.Row,
                                alignItems: b.f.Start
                            }, o.createElement(b.mb, {
                                type: b.ob.Alt2,
                                asset: b.nb.Check
                            }), o.createElement(b.Va, {
                                margin: {
                                    left: 1
                                },
                                textAlign: b.Jb.Left
                            }, o.createElement(b.V, {
                                color: b.O.Alt2,
                                fontSize: b.Aa.Size6
                            }, e)))
                        });
                        return o.createElement(o.Fragment, null, o.createElement(b.V, {
                            color: b.O.Base,
                            fontSize: b.Aa.Size4
                        }, e), o.createElement(b.Va, {
                            margin: {
                                top: 1
                            }
                        }, n))
                    }, t
                }(o.Component),
                y = n("2xye");
            ! function(e) {
                e.SideNav = "sidenav"
            }(g || (g = {})),
            function(e) {
                e.Upsell = "upsell"
            }(v || (v = {}));
            var C = n("Ve5Q"),
                w = (n("wqI2"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.impressionEventFired = !1, t.signup = function() {
                            ! function(e) {
                                var t = r.__assign({
                                    section: g.SideNav,
                                    click_subsection: v.Upsell
                                }, e);
                                l.n.track(y.SpadeEventType.ItemClick, t)
                            }(), t.props.signup()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.componentDidUpdate = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        return o.createElement(b.xb, {
                            background: b.r.AccentAlt2,
                            display: b.W.Flex,
                            flexDirection: b.Y.Column,
                            padding: {
                                y: 2,
                                x: 1
                            },
                            margin: 1
                        }, this.renderImage(), o.createElement(b.Va, {
                            textAlign: b.Jb.Center
                        }, this.renderText(), o.createElement(b.z, {
                            onClick: this.signup,
                            size: b.D.Large
                        }, o.createElement(b.Va, {
                            padding: {
                                x: 1
                            }
                        }, o.createElement(b.V, {
                            color: b.O.Base
                        }, Object(l.d)("Sign up", "UpsellCenter"))))))
                    }, t.prototype.renderText = function() {
                        if (!this.props.channelLogin) return o.createElement(k, {
                            showDefault: !0
                        });
                        if (this.props.data && this.props.data.user) {
                            var e = {
                                game: this.props.data.user.broadcastSettings && this.props.data.user.broadcastSettings.game && this.props.data.user.broadcastSettings.game.displayName || "",
                                channelDisplayName: this.props.data.user.displayName || ""
                            };
                            return o.createElement(k, {
                                data: e
                            })
                        }
                    }, t.prototype.renderImage = function() {
                        var e = o.createElement(b.S, {
                            alt: Object(l.d)("Upsell Center", "UpsellCenter"),
                            src: d.a
                        });
                        return this.props.channelLogin && this.props.data && this.props.data.user && this.props.data.user.profileImageURL ? o.createElement(b.Va, {
                            position: b.db.Relative
                        }, o.createElement(b.Va, {
                            className: "upsell-center__avatar",
                            position: b.db.Absolute,
                            zIndex: b.ac.Above
                        }, o.createElement(b.q, {
                            src: this.props.data.user.profileImageURL,
                            alt: Object(l.d)("{displayName}'s Profile Image", {
                                displayName: this.props.data.user.displayName || ""
                            }, "UpsellCenter"),
                            borderRadius: b.x.Large,
                            size: 40
                        })), e) : e
                    }, t.prototype.trackImpression = function() {
                        this.impressionEventFired || (! function(e) {
                            var t = r.__assign({
                                section: g.SideNav
                            }, e);
                            l.n.track(y.SpadeEventType.ItemDisplay, t)
                        }(), this.impressionEventFired = !0)
                    }, t
                }(o.PureComponent));
            var S = Object(s.compose)(Object(u.a)(C, {
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
                }), Object(a.connect)(null, function(e) {
                    return Object(s.bindActionCreators)({
                        signup: function() {
                            return Object(m.g)(p.a.SideNavUpsellCenter)
                        }
                    }, e)
                }))(w),
                _ = n("kRBY"),
                E = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn || this.props.collapsed ? null : o.createElement(S, r.__assign({}, this.props))
                    }, t
                }(o.PureComponent);
            var N = Object(a.connect)(function(e) {
                return {
                    collapsed: !e.ui.sideNavExpanded,
                    isLoggedIn: Object(_.f)(e)
                }
            })(E);
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return w
            }), n.d(t, !1, function() {
                return E
            }), n.d(t, "a", function() {
                return N
            })
        },
        efEE: function(e, t, n) {},
        eqgM: function(e, t, n) {
            "use strict";
            var i, r, o = n("/MKj"),
                a = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("GnwI"),
                d = n("TSYQ"),
                u = n("17x9"),
                p = n("Ue10");
            n("A7Y/");
            var m = "carousel-content",
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentElementIndex: 0,
                            hasBeenVisible: !1
                        }, t.moveCarouselToCardIndex = function(e) {
                            if (t.props.children && !(t.props.children.length <= 1)) {
                                var n = t.getNumberOfVisibleElements();
                                t.props.children.length < n || (e < t.props.children.length && e > t.props.children.length - n ? t.setState({
                                    currentElementIndex: t.props.children.length - n
                                }) : t.setState({
                                    currentElementIndex: e
                                }))
                            }
                        }, t.moveCarouselForward = function() {
                            if (!t.isForwardButtonDisabled() && t.props.children) {
                                var e = t.getNumberOfVisibleElements();
                                t.state.currentElementIndex + 2 * e > t.props.children.length ? t.setState({
                                    currentElementIndex: t.props.children.length - e
                                }) : t.setState({
                                    currentElementIndex: t.state.currentElementIndex + e
                                })
                            }
                        }, t.moveCarouselBackward = function() {
                            if (!t.isBackButtonDisabled()) {
                                var e = t.getNumberOfVisibleElements();
                                t.setState({
                                    currentElementIndex: Math.max(t.state.currentElementIndex - e, 0)
                                })
                            }
                        }, t.isForwardButtonDisabled = function() {
                            if (!t.carouselContainerRef) return !1;
                            if (t.props.children) {
                                var e = 0,
                                    n = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                                return n && (e = n.childElementCount), t.getLastVisibleIndex() >= e
                            }
                            return !0
                        }, t.isBackButtonDisabled = function() {
                            return 0 === t.state.currentElementIndex
                        }, t.getLastVisibleIndex = function() {
                            return t.state.currentElementIndex + t.getNumberOfVisibleElements()
                        }, t.getNumberOfVisibleElements = function() {
                            var e = t.carouselContainerRef.getBoundingClientRect(),
                                n = e.left,
                                i = e.right - n,
                                r = t.getVideoCardEndPadding();
                            return Math.floor((i + r) / t.getChildWidth())
                        }, t.refHandler = function(e) {
                            return t.carouselContainerRef = e
                        }, t.getChildWidth = function() {
                            if (!t.carouselContainerRef) return 0;
                            var e = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                            return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                        }, t.getVideoCardEndPadding = function() {
                            var e = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                            if (!e || 0 === e.children.length) return 0;
                            var n = window.getComputedStyle(e.children[0]).paddingRight || "";
                            return 2 * parseInt(n, 10) || 0
                        }, t.pixelOffset = function() {
                            return t.getChildWidth() * t.state.currentElementIndex * -1
                        }, t.transformString = function() {
                            return "translate3d(" + t.pixelOffset() + "px, 0px, 0px)"
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.context.registerReceiver;
                        e && (this.unregisterScrollHandler = e(this)), null !== this.props.children && this.checkVisible()
                    }, t.prototype.componentDidUpdate = function(e) {
                        null === e.children && null !== this.props.children && this.checkVisible(), (!e.options && this.props.options || e.options && this.props.options && this.props.options.videoIndex !== e.options.videoIndex) && this.moveCarouselToCardIndex(this.props.options.videoIndex)
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregisterScrollHandler && this.unregisterScrollHandler()
                    }, t.prototype.render = function() {
                        return s.createElement(p.Na, {
                            margin: {
                                y: 1
                            },
                            position: p.db.Relative
                        }, s.createElement("div", {
                            className: "preview-card-carousel",
                            ref: this.refHandler
                        }, s.createElement(p.Va, {
                            className: "preview-card-carousel__child-container",
                            overflow: p.Ya.Hidden,
                            position: p.db.Relative,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, s.createElement(p.Na, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement("div", {
                            className: "preview-card-carousel__body",
                            style: {
                                transform: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, s.createElement(p.Tb, {
                            noWrap: !0,
                            noGrow: !0,
                            childWidth: this.props.cardWidth || p.Ub.Large,
                            gutterSize: p.Vb.Small,
                            "data-js-selector": m
                        }, this.props.children)))), s.createElement(p.Va, {
                            className: "preview-card-carousel__nav",
                            display: p.W.Flex,
                            alignItems: p.f.Center,
                            position: p.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, s.createElement(b, {
                            direction: f.DirectionPrevious,
                            disabled: !this.props.children || this.isBackButtonDisabled(),
                            onClickHandler: this.moveCarouselBackward
                        })), s.createElement(p.Va, {
                            className: "preview-card-carousel__nav",
                            display: p.W.Flex,
                            alignItems: p.f.Center,
                            position: p.db.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            fullHeight: !0
                        }, s.createElement(b, {
                            direction: f.DirectionNext,
                            disabled: !this.props.children || this.isForwardButtonDisabled(),
                            onClickHandler: this.moveCarouselForward
                        }))))
                    }, t.prototype.checkVisible = function(e) {
                        this.props.children && this.props.children.length > 0 && !this.state.hasBeenVisible && function(e) {
                            if (!e) return !1;
                            var t = e.getBoundingClientRect(),
                                n = window.innerWidth,
                                i = window.innerHeight;
                            return !(t.right < 0 || t.bottom < 0 || t.left > n || t.top > i)
                        }(this.carouselContainerRef) && this.props.onFirstVisible()
                    }, t.contextTypes = {
                        registerReceiver: u.func
                    }, t
                }(s.Component),
                f = {
                    DirectionPrevious: "previous",
                    DirectionNext: "next"
                },
                g = ((i = {})[f.DirectionPrevious] = "previous", i[f.DirectionNext] = "next", i),
                v = ((r = {})[f.DirectionPrevious] = p.nb.AngleLeft, r[f.DirectionNext] = p.nb.AngleRight, r),
                b = function(e) {
                    var t, n = g[e.direction],
                        i = ((t = {})[f.DirectionPrevious] = Object(l.d)("previous", "CarouselNavButton"), t[f.DirectionNext] = Object(l.d)("next", "CarouselNavButton"), t),
                        r = d("preview-card-carousel__button", "preview-card-carousel__button--" + n, {
                            "preview-card-carousel__button--disabled": e.disabled
                        });
                    return s.createElement(p.Va, {
                        className: r,
                        position: p.db.Relative,
                        display: p.W.Flex,
                        alignItems: p.f.Stretch
                    }, s.createElement(p.A, {
                        ariaLabel: i[e.direction],
                        blurAfterClick: !0,
                        "data-test-selector": n + "-button",
                        disabled: e.disabled,
                        icon: v[e.direction],
                        onClick: e.onClickHandler,
                        size: p.B.Large
                    }))
                },
                k = n("bdIb"),
                y = n("XEwr"),
                C = n("RXle"),
                w = 10,
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasTrackedItemSectionLoad: !1
                        }, t.handleFirstVisible = function() {
                            if (!t.state.hasTrackedItemSectionLoad) {
                                for (var e = t.props.videos ? t.props.videos : [], n = [], i = [], r = 0, o = e; r < o.length; r++) {
                                    var s = o[r];
                                    n.push(s.id), i.push(s.viewCount)
                                }
                                l.n.trackItemSectionLoad(a.__assign({
                                    carousel_content: t.props.tracking.content,
                                    location: t.props.tracking.location,
                                    rendered_item_count: e.length,
                                    rendered_item_list: n,
                                    rendered_item_types: [t.props.tracking.itemType],
                                    rendered_items_viewcounts: i
                                }, t.props.tracking.source)), t.setState({
                                    hasTrackedItemSectionLoad: !0
                                })
                            }
                        }, t.onPreviewCardClick = function(e) {
                            if (t.props.videos) {
                                var n = t.props.videos[e];
                                l.n.trackItemSectionClick(a.__assign({
                                    carousel_content: t.props.tracking.content,
                                    item_id: n.id,
                                    item_index: e,
                                    item_type: t.props.tracking.itemType,
                                    item_viewcount: n.viewCount,
                                    location: t.props.tracking.location
                                }, t.props.tracking.source)), t.props.scrollToCurrentlyWatching && t.props.videos.length > 0 && t.setCarouselOptions({
                                    videoIndex: e
                                })
                            }
                        }, t.setCarouselOptions = function(e) {
                            t.props.videos && t.props.videos.length > 0 && t.setState({
                                scrollToOptions: e
                            })
                        }, t.getCurrentlyWatchingVideoIndex = function() {
                            var e = 0;
                            if (t.props.videos && t.props.videos.length > 0)
                                for (var n = 0; n < t.props.videos.length; n++) {
                                    if (t.props.videos[n].id === t.props.currentlyWatchingVideoID) {
                                        e = n;
                                        break
                                    }
                                }
                            return e
                        }, t.getVideoCards = function() {
                            var e = t.props.videos;
                            if (null === e) {
                                for (var n = [], i = 0; i < w; i++) n.push(s.createElement(C.VideoPreviewCardPlaceholder, {
                                    key: "carousel-placeholder-" + i
                                }));
                                return n
                            }
                            var r = [];
                            if (t.props.spotlight) {
                                var o = s.createElement(C.VideoPreviewCard, {
                                    key: "spotlight",
                                    collectionID: t.props.collectionID,
                                    topBar: {
                                        title: t.props.spotlight.title,
                                        subTitle: t.props.spotlight.subTitle
                                    },
                                    context: t.props.listContext,
                                    tracking: {
                                        content: t.props.tracking.content,
                                        content_index: r.length,
                                        medium: t.props.tracking.medium
                                    },
                                    video: t.props.spotlight.card,
                                    hideTags: t.props.hideTags
                                });
                                r.push(o)
                            }
                            var a = r.length;
                            if (t.props.currentlyWatchingVideoID && t.props.renderCurrentlyWatchingCard && t.props.scrollToCurrentlyWatching)
                                for (var l = t.getCurrentlyWatchingVideoIndex(), c = 0; c < e.length; c++) {
                                    var d = e[c];
                                    t.props.firstPageLoaded || !(c < l || c > l + w) ? Object(y.a)(d) || r.push(s.createElement(C.VideoPreviewCard, {
                                        context: t.props.listContext,
                                        collectionID: t.props.collectionID,
                                        onClick: t.onPreviewCardClick,
                                        key: "video-" + c,
                                        tracking: {
                                            content: t.props.tracking.content,
                                            content_index: c,
                                            medium: t.props.tracking.medium
                                        },
                                        video: d,
                                        multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                        listPosition: t.getPositionLabel(c),
                                        topBar: t.getPositionBanner(c),
                                        hideDuration: t.willRenderPositionBanner(c),
                                        hideTags: t.props.hideTags
                                    })) : r.push(s.createElement(C.VideoPreviewCardPlaceholder, {
                                        key: "carousel-placeholder-" + c
                                    }))
                                } else
                                    for (c = 0; c < e.length; c++)
                                        if (c + a < w || t.props.firstPageLoaded) {
                                            d = e[c];
                                            if (Object(y.a)(d)) {
                                                if (d.slug === t.props.currentlyWatchingVideoID) continue;
                                                r.push(s.createElement(k.a, {
                                                    context: t.props.listContext,
                                                    onClick: t.onPreviewCardClick,
                                                    key: "video-" + c,
                                                    tracking: {
                                                        content: t.props.tracking.content,
                                                        content_index: a + c,
                                                        medium: t.props.tracking.medium
                                                    },
                                                    clip: d
                                                }))
                                            } else {
                                                if (d.id === t.props.currentlyWatchingVideoID && !t.props.renderCurrentlyWatchingCard) continue;
                                                r.push(s.createElement(C.VideoPreviewCard, {
                                                    context: t.props.listContext,
                                                    collectionID: t.props.collectionID,
                                                    onClick: t.onPreviewCardClick,
                                                    key: "video-" + c,
                                                    tracking: {
                                                        content: t.props.tracking.content,
                                                        content_index: a + c,
                                                        medium: t.props.tracking.medium
                                                    },
                                                    video: d,
                                                    multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                                    listPosition: t.getPositionLabel(c),
                                                    topBar: t.getPositionBanner(c),
                                                    hideDuration: t.willRenderPositionBanner(c),
                                                    hideTags: t.props.hideTags
                                                }))
                                            }
                                        } else r.push(s.createElement(C.VideoPreviewCardPlaceholder, {
                                            key: "carousel-placeholder-" + c
                                        }));
                            return r
                        }, t.getPositionBanner = function(e) {
                            if (t.props.renderPositionBanner && t.props.renderCurrentlyWatchingCard && t.props.videos) {
                                var n = t.getCurrentlyWatchingVideoIndex(),
                                    i = e === n,
                                    r = e === n + 1,
                                    o = Object(l.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                        position: e + 1,
                                        totalVideos: t.props.videos.length
                                    }, "VideoCarousel");
                                return i ? {
                                    title: Object(l.d)("Now playing", "VideoCarousel"),
                                    subTitle: o,
                                    selected: !0
                                } : r ? {
                                    title: Object(l.d)("Up next", "VideoCarousel"),
                                    subTitle: o
                                } : void 0
                            }
                        }, t.willRenderPositionBanner = function(e) {
                            if (!t.props.renderPositionBanner || !t.props.videos) return !1;
                            var n = t.getCurrentlyWatchingVideoIndex();
                            return e === n || e === n + 1
                        }, t.getPositionLabel = function(e) {
                            if (t.props.renderPositionLabel && !t.willRenderPositionBanner(e) && t.props.videos) return {
                                position: e + 1,
                                totalVideos: t.props.videos.length
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID && !this.state.scrollToOptions && this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        null === e.videos && null !== this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID ? this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        }) : this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID !== e.currentlyWatchingVideoID && this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        })
                    }, t.prototype.render = function() {
                        return s.createElement(h, {
                            options: this.state.scrollToOptions,
                            cardWidth: this.props.videoCardSize,
                            onFirstVisible: this.handleFirstVisible
                        }, this.getVideoCards())
                    }, t
                }(s.Component),
                _ = Object(c.c)("VideoCarousel", {
                    autoReportInteractive: !0
                })(S);
            n.d(t, "a", function() {
                return E
            });
            var E = Object(o.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(_)
        },
        f3GI: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return f
            }), n.d(t, "a", function() {
                return v
            });
            var i = n("mrSG"),
                r = n("TSYQ"),
                o = n("17x9"),
                a = n("q1tI"),
                s = n("wIs1"),
                l = n("N0BP"),
                c = n("zxEZ"),
                d = n("Bh3T"),
                u = n("JoTo"),
                p = n("cnlr"),
                m = n("sSlw"),
                h = n("Ue10"),
                f = (n("b7X6"), "channel-page-layout__scroll-area--theatre-mode"),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e, t = r(((e = {})[f] = !!this.props.theatreMode, e));
                        return a.createElement(h.Va, i.__assign({
                            className: "channel-page-layout",
                            display: h.W.Flex,
                            flexDirection: h.Y.Column,
                            flexWrap: h.Z.NoWrap,
                            fullHeight: !0
                        }, Object(l.a)(this.props)), a.createElement(d.b, {
                            className: t,
                            suppressScrollX: !0,
                            addPaddingWhenPlayerIsPersisting: !0
                        }), a.createElement(u.a, null, a.createElement(p.a, {
                            channelLogin: this.props.ownerLogin
                        })), a.createElement(m.a, null, a.createElement(c.a, {
                            currentPage: this.props.currentPage,
                            channelLogin: this.props.ownerLogin,
                            channelIsHosting: this.props.channelIsHosting
                        })), a.createElement(h.Va, {
                            padding: {
                                top: 2,
                                x: 3
                            }
                        }, this.props.children))
                    }, t.contextTypes = {
                        scrollToTop: o.func
                    }, t
                }(a.Component),
                v = Object(s.a)(g)
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
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = i
        },
        hkkJ: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                o = n("q1tI"),
                a = n("/7QA"),
                s = n("GFmA"),
                l = n("DMoW"),
                c = n("tuvy"),
                d = n("GnwI"),
                u = n("NAv5");
            ! function(e) {
                e.KeepWatching = "keep-watching", e.WatchNext = "watch-next"
            }(i || (i = {}));
            var p = .8;
            var m = n("6h5w"),
                h = n("eqgM"),
                f = n("Ue10");
            n.d(t, "a", function() {
                return b
            });
            var g;
            ! function(e) {
                e.Metadata = "collection-metadata", e.PlayAllButton = "play-all-button", e.TitleLink = "collection-title-link"
            }(g || (g = {}));
            var v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props.collection,
                            n = this.getCollectionVideos();
                        if (n && 0 === n.length) return null;
                        var r = 0,
                            d = t && t.type === l.l.SERIES && n && n.length >= 4;
                        if (t && n && d && Object(c.a)() && Object(c.c)()) {
                            var m = function(e) {
                                for (var t = e.items.edges, n = t.length, r = null, o = 0; o < t.length; o++) {
                                    var a = t[o];
                                    if (a) {
                                        var s = a.node,
                                            l = s.self && s.self.viewingHistory && s.self.viewingHistory;
                                        if (l && l.updatedAt && l.position)
                                            if (r) {
                                                var c = new Date(r.viewedAt),
                                                    d = new Date(l.updatedAt);
                                                Object(u.isAfter)(d, c) && (r = {
                                                    index: o,
                                                    value: s,
                                                    viewedAt: l.updatedAt,
                                                    viewingPosition: l.position
                                                })
                                            } else r = {
                                                index: o,
                                                value: s,
                                                viewedAt: l.updatedAt,
                                                viewingPosition: l.position
                                            }
                                    }
                                }
                                if (!r) return null;
                                if (r.viewingPosition / r.value.lengthSeconds > p) {
                                    var m = r.index + 1;
                                    if (m < n) {
                                        var h = t[m];
                                        if (h && h.node) return {
                                            item: h.node,
                                            position: m,
                                            type: i.WatchNext
                                        }
                                    }
                                }
                                return {
                                    item: r.value,
                                    position: r.index,
                                    type: i.KeepWatching
                                }
                            }(t);
                            if (m && (e = {
                                    card: m.item,
                                    title: function(e) {
                                        switch (e) {
                                            case i.KeepWatching:
                                                return Object(a.d)("Continue Watching", "SeriesResumeRecommendation");
                                            case i.WatchNext:
                                                return Object(a.d)("Watch Next", "SeriesResumeRecommendation");
                                            default:
                                                return e
                                        }
                                    }(m.type)
                                }, r = m.position + 1), !e) e = {
                                card: n[n.length - 1],
                                title: Object(a.d)("Latest Video", "CollectionCarousel")
                            }, r = n.length;
                            e.subTitle = Object(a.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                position: r,
                                totalVideos: n.length
                            }, "CollectionCarousel")
                        }
                        return o.createElement(o.Fragment, null, this.renderCarouselHeader(), o.createElement(h.a, {
                            collectionID: t ? t.id : void 0,
                            listContext: s.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            spotlight: e,
                            tracking: {
                                content: this.props.tracking.content,
                                medium: this.props.tracking.medium,
                                location: this.props.tracking.location,
                                source: this.props.tracking.source,
                                itemType: this.props.tracking.itemType
                            },
                            videos: n,
                            renderPositionLabel: !!e
                        }))
                    }, t.prototype.renderCarouselHeader = function() {
                        var e = this.props.collection;
                        return e ? o.createElement(f.Va, null, o.createElement(f.Va, {
                            display: f.W.Flex,
                            flexDirection: f.Y.Row
                        }, o.createElement(f.Va, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(f.T, {
                            "data-test-selector": g.TitleLink,
                            to: "/collections/" + e.id,
                            type: f.U.Inherit
                        }, o.createElement(m.a, {
                            titleMessage: e.title || this.props.fallbackTitle || ""
                        }))), !Object(c.a)() && o.createElement(f.z, {
                            type: f.F.Hollow,
                            size: f.D.Small,
                            icon: f.nb.Play,
                            linkTo: "/collections/" + e.id,
                            "data-test-selector": g.PlayAllButton
                        }, Object(a.d)("Play all", "LatestCollectionCarousel"))), o.createElement(f.V, {
                            color: f.O.Alt2,
                            type: f.Nb.Span,
                            "data-test-selector": g.Metadata
                        }, this.renderSubTitle(e))) : o.createElement(f.cb, {
                            width: 250,
                            lineCount: 1
                        })
                    }, t.prototype.renderSubTitle = function(e) {
                        var t = e.items ? e.items.totalCount : 0,
                            n = Object(a.d)("{videoCountText, plural, one {# video} other {# videos}}", {
                                videoCountText: t
                            }, "LatestCollectionCarousel");
                        return this.props.subTitle ? o.createElement(o.Fragment, null, this.props.subTitle, " · ", n) : e.description ? o.createElement(o.Fragment, null, e.description, " · ", n) : n
                    }, t.prototype.getCollectionVideos = function() {
                        var e = this.props.collection;
                        if (!e) return null;
                        var t = [];
                        return e.items.edges.forEach(function(e) {
                            e && "" !== e.node.id && t.push(e.node)
                        }), t
                    }, t
                }(o.Component),
                b = Object(d.c)("CollectionCarousel", {
                    autoReportInteractive: !0
                })(v)
        },
        i4un: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            });
            var i, r = n("/7QA"),
                o = n("D7An");

            function a() {
                return r.o.experiments.getAssignment(o.b.SocialButtonsMove) || i.Control
            }

            function s() {
                return a() === i.Control
            }

            function l() {
                return a() === i.VariantA
            }

            function c() {
                return a() === i.VariantB
            }! function(e) {
                e.Control = "control", e.VariantA = "variant_a", e.VariantB = "variant_b"
            }(i || (i = {}))
        },
        izJ5: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCollectionConnection"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CollectionsConnection"
                        }
                    },
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "PreviewCollection"
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
                }],
                loc: {
                    start: 0,
                    end: 250
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/preview-collection-fragment.gql"\nfragment PreviewCollectionConnection on CollectionsConnection {\nedges {\ncursor\nnode {\n...PreviewCollection\n}\n}\npageInfo {\nhasNextPage\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("jr2J").definitions)), e.exports = i
        },
        jr2J: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCollection"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Collection"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: "CollectionFields"
                            },
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "items"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "30"
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "CollectionConnectionFields"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 350
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/collection-fields-fragment.gql"\n#import "twilight/features/video-carousel/components/collection-carousel/models/collection-connection-fields-fragment.gql"\nfragment PreviewCollection on Collection {\n...CollectionFields\nitems (first:30) {\n...CollectionConnectionFields\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function o(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(o(n("msok").definitions)), i.definitions = i.definitions.concat(o(n("+Vfn").definitions)), e.exports = i
        },
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        km1c: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("TSYQ"),
                o = n("q1tI"),
                a = n("oJmH"),
                s = n("2iEm"),
                l = n("/7QA"),
                c = n("ZS2+"),
                d = n("MJbm"),
                u = n("eJ65"),
                p = n("yR8l"),
                m = n("x7UT"),
                h = n("0Log"),
                f = n("/aPz"),
                g = n("D7An"),
                v = n("gOYK"),
                b = n("d2C5"),
                k = n("jSzL"),
                y = n("Ahlu"),
                C = n("/MKj"),
                w = n("fvjX"),
                S = n("aCAx"),
                _ = n("7CzK"),
                E = n("94Uw"),
                N = n("Ue10"),
                I = (n("/nm5"), n("41XU")),
                x = c.a.wrap(function() {
                    return n.e(132).then(n.bind(null, "7lJP"))
                }, "UserImageUploader"),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t.props.data && t.props.data.user;
                            e && e.id && e.login && t.props.showModal(x, {
                                userID: e.id,
                                login: e.login,
                                displayName: e.displayName || e.login,
                                imageType: E.a.ProfileBanner,
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
                            a = {
                                "channel-banner--open": !this.props.collapsed,
                                "channel-banner--side-nav": this.props.isSideNavBanner
                            },
                            s = {
                                "channel-banner__image--side-nav": this.props.isSideNavBanner
                            },
                            c = {
                                "channel-banner__edit-overlay-button--side-nav": this.props.isSideNavBanner
                            },
                            d = this.props.data;
                        d && !d.loading && this.props.firstPageLoaded && d.user && d.user.bannerImageURL ? (n = "channel-banner__image-loaded", t = {
                            backgroundImage: "url(" + d.user.bannerImageURL + ")"
                        }) : (s["channel-banner__image--default"] = !0, t = {
                            backgroundImage: "url(" + _ + ")"
                        }), this.props.isSideNavBanner && (i = "channel-banner__side-nav-type");
                        var u = null;
                        if (this.props.canEdit) {
                            var p = this.props.isSideNavBanner ? o.createElement(N.Va, {
                                display: N.W.Flex,
                                padding: {
                                    x: 3
                                },
                                justifyContent: N.Ua.Between,
                                fullWidth: !0
                            }, o.createElement(N.mb, {
                                asset: N.nb.Edit
                            }), o.createElement(N.V, null, Object(l.d)("Edit", "ChannelBanner"))) : o.createElement(N.Va, null, o.createElement(N.Va, null, o.createElement(N.mb, {
                                asset: N.nb.Edit
                            })), Object(l.d)("Update Profile Banner", "ChannelBanner"));
                            u = o.createElement(N.xb, {
                                className: r("channel-banner__edit-overlay", c),
                                background: N.r.Overlay,
                                position: N.db.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                fullWidth: !0
                            }, o.createElement("button", {
                                className: "channel-banner__edit-overlay-button",
                                "data-test-selector": "channel-banner__edit-overlay-interactable",
                                onClick: this.openModal
                            }, o.createElement(N.Va, {
                                display: N.W.Flex,
                                alignItems: N.f.Center,
                                flexDirection: N.Y.Column,
                                justifyContent: N.Ua.Center
                            }, p)))
                        }
                        return e = o.createElement("div", {
                            className: r("channel-banner__image", s),
                            "data-test-selector": n,
                            style: t
                        }, u), o.createElement("div", {
                            className: r("channel-banner", a),
                            "data-test-selector": i,
                            onTransitionEnd: this.props.onTransitionEnd
                        }, o.createElement(N.Na, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, e))
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.closeModal()
                    }, t
                }(o.Component),
                L = Object(p.a)(I, {
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
            var T, D = Object(C.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                }, function(e) {
                    return Object(w.bindActionCreators)({
                        closeModal: S.c,
                        showModal: S.d
                    }, e)
                })(L),
                V = n("tuvy"),
                P = n("i4un"),
                F = n("dIU+"),
                j = n("GnwI"),
                A = n("Ba7Q"),
                B = n("QjI3"),
                R = (n("BOil"), n("HXcb"));
            n.d(t, "a", function() {
                return q
            }), n.d(t, "b", function() {
                return Q
            }), n.d(t, "d", function() {
                return M
            }), n.d(t, "c", function() {
                return J
            });
            var U, W = c.a.wrap(function() {
                return n.e(133).then(n.bind(null, "g9Rq"))
            }, "EditProfileOverlay");
            ! function(e) {
                e.SocialButtonsDefault = "channel-header__social-buttons-default", e.SocialButtonsVariantB = "channel-header__social-buttons-variant-b"
            }(U || (U = {}));
            var M, G = "channel-header__edit-profile-overlay",
                H = "channel-header__verified-badge",
                z = "channel-header__live-indicator",
                q = "yes",
                Q = "browser-notifications-upsell-seen";
            ! function(e) {
                e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
            }(M || (M = {}));
            var Y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.verifiedBadgeElement = o.createElement(N.Qb, {
                            label: Object(l.d)("Verified", "ChannelHeader"),
                            direction: N.Sb.Right
                        }, o.createElement(N.Va, {
                            className: "channel-header__verified",
                            "data-target": H,
                            display: N.W.Flex,
                            alignItems: N.f.Center,
                            margin: {
                                left: 1
                            }
                        }, o.createElement(N.mb, {
                            asset: N.nb.Verified
                        }))), n.ChannelStatusIndicatorElement = o.createElement(N.Va, {
                            margin: {
                                left: 1
                            },
                            "data-target": z
                        }, o.createElement(N.Qb, {
                            label: Object(l.d)("Live Now", "ChannelHeader"),
                            direction: N.Sb.Right
                        }, o.createElement(N.K, {
                            status: N.M.Live,
                            pulse: !0
                        }))), n.onResetOffline = function() {
                            n.resetOfflineTimer = void 0, n.setState({
                                live: !1
                            })
                        }, n.renderAvatarEditButton = function() {
                            return n.props.data && n.props.data.user && n.props.data.user.id && n.props.data.user.login && n.isChannelEditor() ? o.createElement(N.xb, {
                                className: G,
                                background: N.r.Overlay,
                                position: N.db.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                fullHeight: !0,
                                fullWidth: !0,
                                display: N.W.InlineFlex,
                                alignItems: N.f.Center,
                                justifyContent: N.Ua.Center
                            }, o.createElement(W, {
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
                            if (!n.resizeAnimationFrame && n.channelHeader) {
                                var e = n.channelHeader.querySelector('[data-target="channel-header-left"]');
                                n.updateWidth(n.getWidth(e).width), n.resizeAnimationFrame = requestAnimationFrame(n.handleWindowResize)
                            }
                        }, n.handleWindowResize = function() {
                            n.resizeAnimationFrame = null, n.getChannelHeaderSize()
                        }, n.maybeShowBrowserNotificationsUpsell = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return !l.l.get(Q, !1) && Object(b.a)() && Object(k.c)() && l.o.experiments.getAssignment(g.b.BrowserNotificationsUpsell) === q ? [4, v.a.hasPushSubscription()] : [3, 3];
                                        case 1:
                                            return e.sent() ? [3, 3] : (l.l.set(Q, !0), this.props.showBrowserNotificationsUpsellModal(), [4, v.a.userSubscribe(y.a.Channel)]);
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
                            live: this.isLiveGraphQL(e)
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
                        this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce)
                    }, t.prototype.updateWidth = function(e) {
                        var t = e !== this.width || this.width !== this.prevWidth;
                        void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (cancelAnimationFrame(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
                    }, t.prototype.render = function() {
                        var e, t, n = 0,
                            i = 0,
                            a = 0,
                            c = l.a.defaultAvatarURL;
                        this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos && this.props.data.user.videos.totalCount || 0, i = this.props.data.user.followers && this.props.data.user.followers.totalCount || 0, a = this.props.data.user.follows && this.props.data.user.follows.totalCount || 0, c = this.props.data.user.profileImageURL || l.a.defaultAvatarURL, e = this.props.data.user.displayName, t = this.props.data.user.roles && this.props.data.user.roles.isPartner);
                        var p, m = this.state.live && !this.isActiveTab(M.Channel),
                            h = this.createChannelLinks(n, i, a),
                            f = {
                                "channel-header__user": !0,
                                "channel-header__user--selected": this.isActiveTab(M.Channel)
                            },
                            g = o.createElement(N.Va, {
                                display: N.W.Flex,
                                flexWrap: N.Z.NoWrap,
                                alignItems: N.f.Center,
                                flexShrink: 0
                            }, o.createElement(N.Va, {
                                className: "channel-header__user-avatar channel-header__user-avatar--active",
                                margin: {
                                    right: 1
                                },
                                display: N.W.Flex,
                                flexShrink: 0,
                                alignItems: N.f.Stretch
                            }, o.createElement(N.Va, {
                                position: N.db.Relative
                            }, o.createElement(N.q, {
                                size: 36,
                                src: c,
                                alt: e || ""
                            }), this.renderAvatarEditButton())), e ? o.createElement(N.V, {
                                type: N.Nb.H5
                            }, e) : o.createElement(N.Va, {
                                alignItems: N.f.Center
                            }, o.createElement(N.cb, {
                                lineCount: 1,
                                width: 120
                            })), m && this.ChannelStatusIndicatorElement, t && this.verifiedBadgeElement);
                        p = this.isActiveTab(M.Channel) ? o.createElement("div", {
                            className: "channel-header__banner-toggle",
                            onClick: this.toggleChannelBanner,
                            "data-target": "channel-header__channel-link",
                            "data-a-target": "user-channel-header-item"
                        }, g) : this.props.channelLogin ? o.createElement(s.a, {
                            to: "/" + this.props.channelLogin || "#",
                            "data-target": "channel-header__channel-link",
                            "data-a-target": "user-channel-header-item"
                        }, g) : g;
                        var v = this.state.bannerHidden ? N.W.HideAccessible : N.W.Block,
                            b = null,
                            k = this.renderSocialButtons();
                        return this.isActiveTab(M.Channel) && (b = o.createElement(N.Va, {
                            display: v
                        }, o.createElement(D, {
                            channelLogin: this.props.channelLogin,
                            canEdit: this.isChannelEditor(),
                            collapsed: !this.state.bannerSlideIn,
                            onTransitionEnd: this.completedBannerAnimation
                        }))), o.createElement(N.Va, {
                            className: "channel-header",
                            flexShrink: 0
                        }, b, o.createElement(N.Va, {
                            display: N.W.Flex,
                            justifyContent: N.Ua.Between,
                            flexWrap: N.Z.NoWrap,
                            fullHeight: !0,
                            refDelegate: this.saveChannelHeaderRef,
                            margin: {
                                x: 3
                            }
                        }, o.createElement(N.Va, {
                            display: N.W.Flex,
                            alignItems: N.f.Stretch,
                            flexShrink: 0,
                            flexWrap: N.Z.NoWrap,
                            "data-target": "channel-header-left"
                        }, o.createElement(N.Na, {
                            className: r(f),
                            padding: {
                                y: .5,
                                right: 2
                            },
                            display: N.W.Flex,
                            flexWrap: N.Z.NoWrap,
                            alignItems: N.f.Center,
                            flexShrink: 0
                        }, p), this.renderTabs(h), o.createElement(N.Va, {
                            className: "channel-header__item channel-header__item--no-underline",
                            padding: {
                                x: 1
                            },
                            flexShrink: 0,
                            alignSelf: N.g.Center,
                            "data-target": "channel-header-button"
                        }, o.createElement(u.a, {
                            alwaysMountBalloonContent: !0
                        }, o.createElement(N.A, {
                            icon: N.nb.NavMore,
                            ariaLabel: Object(l.d)("More", "ChannelHeader")
                        }), o.createElement(N.u, {
                            direction: N.v.Bottom,
                            noTail: !0
                        }, o.createElement(N.Va, {
                            padding: {
                                y: 1
                            }
                        }, this.renderDropdown(h)))))), k), o.createElement(d.a, {
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
                            var n = e.count ? o.createElement(N.Va, {
                                    className: "channel-header__item-count",
                                    display: N.W.Flex,
                                    margin: {
                                        left: .5
                                    }
                                }, o.createElement(N.V, {
                                    type: N.Nb.Span,
                                    fontSize: N.Aa.Size5
                                }, e.count)) : null,
                                i = t.generateUserLink(e.pathSuffix),
                                r = e.label.toLowerCase() + "-channel-header-item";
                            return o.createElement(N.Na, {
                                key: "channel-header__item--" + e.label,
                                alignItems: N.f.Center,
                                flexShrink: 0
                            }, o.createElement(s.a, {
                                className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : ""),
                                to: i,
                                "data-target": "channel-header-item",
                                "data-a-target": r,
                                "data-test-selector": r
                            }, o.createElement(N.Va, {
                                padding: {
                                    x: 2,
                                    y: .5
                                },
                                display: N.W.Flex
                            }, o.createElement(N.V, {
                                type: N.Nb.Span,
                                fontSize: N.Aa.Size5
                            }, e.label), n)))
                        })
                    }, t.prototype.renderDropdown = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            var n = e.count ? o.createElement(N.Va, {
                                    className: "channel-header__item-count",
                                    display: N.W.Flex,
                                    margin: {
                                        left: .5
                                    }
                                }, o.createElement(N.V, {
                                    type: N.Nb.Span
                                }, e.count)) : null,
                                i = t.generateUserLink(e.pathSuffix);
                            return o.createElement(N.Va, {
                                key: "channel-header__dropdown-item--" + e.label,
                                "data-target": "channel-header-dropdown-item"
                            }, o.createElement(N.Sa, {
                                linkTo: i,
                                disabled: "#" === i
                            }, o.createElement(N.Va, {
                                className: "channel-header__dropdown-hover-target",
                                padding: {
                                    y: .5,
                                    x: 1
                                },
                                display: N.W.Flex
                            }, o.createElement(N.V, {
                                type: N.Nb.Span
                            }, e.label), n)))
                        })
                    }, t.prototype.createChannelLinks = function(e, t, n) {
                        var i = [{
                            label: Object(l.d)("Videos", "ChannelHeader"),
                            count: Object(l.e)(e),
                            pathSuffix: Object(V.b)() ? "videos" : "videos/all",
                            isSelected: this.isActiveTab(M.Videos)
                        }];
                        return Object(V.b)() || Object(V.a)() || (i = i.concat([{
                            label: Object(l.d)("Clips", "ChannelHeader"),
                            pathSuffix: "clips",
                            isSelected: this.isActiveTab(M.Clips)
                        }, {
                            label: Object(l.d)("Collections", "ChannelHeader"),
                            pathSuffix: "collections",
                            isSelected: this.isActiveTab(M.Collections)
                        }])), i.concat([{
                            label: Object(l.d)("Events", "ChannelHeader"),
                            pathSuffix: "events",
                            isSelected: this.isActiveTab(M.Events)
                        }, {
                            label: Object(l.d)("Followers", "ChannelHeader"),
                            count: Object(l.e)(t),
                            pathSuffix: "followers",
                            isSelected: this.isActiveTab(M.Followers)
                        }, {
                            label: Object(l.d)("Following", "ChannelHeader"),
                            count: Object(l.e)(n),
                            pathSuffix: "following",
                            isSelected: this.isActiveTab(M.Following)
                        }])
                    }, t.prototype.isActiveTab = function(e) {
                        return M[this.props.currentPage] === M[e]
                    }, t.prototype.isChannelEditor = function() {
                        return !!(this.props.data && this.props.data.currentUser && this.props.data.user && this.props.data.currentUser.roles && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin))
                    }, t.prototype.getChannelHeaderSize = function() {
                        if (this.channelHeader) {
                            var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                                t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                                n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                                i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                            if (n.length) {
                                var r = this.getWidth(this.channelHeader).width,
                                    o = this.getWidth(e).width + this.getWidth(t).width + 20 - r;
                                if (o > 0)
                                    for (var a = n.length - 1; a >= 0; a--) {
                                        if (!(l = n[a]).classList.contains("channel-header__item--hide")) {
                                            var s = this.getWidth(l);
                                            if (l.classList.add("channel-header__item--hide"), i[a].classList.remove("channel-header__item--hide"), (o -= s.width) <= 0) break
                                        }
                                    } else
                                        for (a = 0; a < n.length; a++) {
                                            var l;
                                            if ((l = n[a]).classList.contains("channel-header__item--hide")) {
                                                if (l.classList.remove("channel-header__item--hide"), (s = this.getWidth(l)).width >= Math.abs(o)) {
                                                    l.classList.add("channel-header__item--hide");
                                                    break
                                                }
                                                l.classList.remove("channel-header__item--hide"), i[a].classList.add("channel-header__item--hide"), o += s.width
                                            }
                                        }
                                var c = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                                if (c) {
                                    var d = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].channel-header__item--hide').length;
                                    c.classList.toggle("channel-header__item--hide", d)
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
                            t = null,
                            n = U.SocialButtonsDefault;
                        if (Object(P.a)()) {
                            var i = r("channel-header__follow-btn", {
                                    "channel-header__follow-btn--following": !!this.state.showLiveNotificationsButton
                                }),
                                a = r("channel-header__notification-toggle-container", {
                                    "channel-header__notification-toggle-container--visible": !!this.state.showLiveNotificationsButton
                                });
                            n = U.SocialButtonsVariantB, t = o.createElement(o.Fragment, null, o.createElement(N.Va, {
                                className: "channel-header__follow-btn-container",
                                display: N.W.Flex,
                                overflow: N.Ya.Hidden,
                                alignItems: N.f.Center,
                                padding: {
                                    x: 1
                                },
                                fullHeight: !0
                            }, o.createElement(N.Va, {
                                display: N.W.Flex,
                                justifyContent: N.Ua.Center,
                                flexDirection: N.Y.Column,
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(N.Va, {
                                display: N.W.InlineFlex,
                                justifyContent: N.Ua.Center
                            }, o.createElement("div", {
                                className: i
                            }, o.createElement(F.a, {
                                updateContainerWidth: this.onUpdateDebounce,
                                channelLogin: this.props.channelLogin,
                                onFollow: this.maybeShowBrowserNotificationsUpsell,
                                followUIType: F.b.IconAndText,
                                unfollowUIType: F.b.IconOnly,
                                onToggleAnimationComplete: this.toggleLiveNotificationsBtnShown,
                                hideDropdownWhenFollowing: !0,
                                fullWidthButton: !0,
                                hollowIcons: !0,
                                animatedButton: !0
                            })))), o.createElement("div", {
                                className: a
                            }, o.createElement(A.a, {
                                channelLogin: this.props.channelLogin,
                                toggleType: A.b.Button,
                                tabIndex: this.state.showLiveNotificationsButton ? 0 : -1,
                                followData: this.getFollowData(),
                                showTooltips: !0
                            }))), o.createElement(N.Va, null, o.createElement(B.a, {
                                updateContainerWidth: this.onUpdateDebounce,
                                channelLogin: this.props.channelLogin,
                                hideEsportsSubscription: this.props.hideEsportsSubscription,
                                subscribedButtonType: N.F.Default,
                                unsubscribedButtonType: e ? N.F.Default : N.F.Hollow,
                                forceIcon: !0
                            })))
                        } else(this.props.channelIsHosting || Object(P.c)()) && (n = U.SocialButtonsDefault, t = o.createElement(o.Fragment, null, o.createElement(N.Va, {
                            display: N.W.Flex,
                            alignItems: N.f.Stretch,
                            margin: {
                                left: 1
                            }
                        }, o.createElement(F.a, {
                            updateContainerWidth: this.onUpdateDebounce,
                            channelLogin: this.props.channelLogin,
                            onFollow: this.maybeShowBrowserNotificationsUpsell,
                            followUIType: F.b.IconAndText,
                            unfollowUIType: F.b.IconOnly
                        })), o.createElement(N.Va, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(B.a, {
                            updateContainerWidth: this.onUpdateDebounce,
                            channelLogin: this.props.channelLogin,
                            hideEsportsSubscription: this.props.hideEsportsSubscription
                        }))));
                        return o.createElement(N.Va, {
                            display: N.W.Flex,
                            flexWrap: N.Z.NoWrap,
                            flexShrink: 0,
                            alignItems: N.f.Center,
                            className: "channel-header__right",
                            "data-test-selector": n,
                            "data-target": "channel-header-right"
                        }, t)
                    }, t.prototype.getFollowingState = function(e) {
                        return void 0 === e && (e = this.props), !!(e.data && e.data.user && e.data.user.self && e.data.user.self.follower) && null !== e.data.user.self.follower.disableNotifications
                    }, t.prototype.getFollowData = function() {
                        if (this.props.data && this.props.data.user && this.props.data.user.id) return this.props.data.user
                    }, t
                }(o.Component),
                J = Object(a.compose)(Object(p.a)(R, {
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
                }), Object(m.a)([{
                    topic: function(e) {
                        return e.channelLogin ? Object(f.G)(e.channelLogin) : ""
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    },
                    mapMessageTypesToProps: (T = {}, T[h.PubsubMessageType.ViewCount] = "viewCount", T)
                }]), Object(j.c)("ChannelHeader"))(Y)
        },
        lRiI: function(e, t, n) {},
        "lmt/": function(e, t, n) {
            "use strict";
            var i = n("f3GI");
            n.d(t, "a", function() {
                return i.a
            })
        },
        m493: function(e, t, n) {},
        mSxK: function(e, t, n) {
            "use strict";
            var i = n("km1c"),
                r = n("/MKj"),
                o = n("fvjX"),
                a = n("aCAx"),
                s = n("wxwP");
            var l = Object(r.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showBrowserNotificationsUpsellModal: function() {
                        return Object(a.d)(s.a, {})
                    },
                    closeBrowserNotificationsUpsellModal: a.c
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
        msok: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "CollectionFields"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Collection"
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
                                value: "description"
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
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "thumbnailURL"
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
                                value: "title"
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
                                value: "updatedAt"
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
                }],
                loc: {
                    start: 0,
                    end: 221
                }
            };
            n.loc.source = {
                body: "fragment CollectionFields on Collection {\nid\ndescription\nowner {\nid\nlogin\n}\nthumbnailURL(width: 320 height: 180) # only used for legacy CollectionCard\ntitle\ntype\nupdatedAt\nviewCount # only used for legacy CollectionCard\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        mz1O: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "f", function() {
                return c
            });
            var i = n("mrSG"),
                r = function() {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
                o = function() {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
                a = function() {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
        nt5g: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoleRestricted"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "contentOwnerLogin"
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
                                        value: "contentOwnerLogin"
                                    }
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
                                                value: "isEditor"
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
                    end: 147
                }
            };
            n.loc.source = {
                body: "query RoleRestricted($contentOwnerLogin: String!) {\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\nuser(login: $contentOwnerLogin) {\nid\nself {\nisEditor\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        pJmx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelCollectionsPage"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "ownerLogin"
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
                                        value: "ownerLogin"
                                    }
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
                    end: 92
                }
            };
            n.loc.source = {
                body: "query ChannelCollectionsPage($ownerLogin: String!) {\nuser(login: $ownerLogin) {\nid\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        rj3Y: function(e, t, n) {
            "use strict";
            var i, r, o = function(e, t, n) {
                var i = e.collectionItems || [];
                return Boolean(i.find(function(e) {
                    return e.ObjectType === n && e.id === t
                }))
            };
            ! function(e) {
                e.Public = "public"
            }(i || (i = {})),
            function(e) {
                e.Staff = "staff"
            }(r || (r = {}));
            var a, s, l = function(e) {
                return {
                    __typename: "Collection",
                    id: e._id,
                    title: e.title,
                    state: i.Public,
                    thumbnailSrc: e.thumbnails && e.thumbnails.small,
                    totalDuration: e.total_duration,
                    itemsCount: e.items_count
                }
            };

            function c(e) {
                return e.collections.map(function(e) {
                    return l(e)
                })
            }! function(e) {
                e.Video = "video"
            }(a || (a = {})),
            function(e) {
                e.PostCreateModal = "post-create", e.EditModal = "edit", e.CollectionManager = "collection_manager", e.VideoProducerRow = "video_producer_row"
            }(s || (s = {})), n.d(t, !1, function() {
                return o
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return r
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return s
            })
        },
        tIid: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            });
            var i = n("/7QA"),
                r = "esport_insider_pass_whitelist",
                o = "esports_room_cheering_whitelist";

            function a(e, t, n) {
                return void 0 === n && (n = !1), l(r, e, t, n)
            }

            function s(e, t) {
                return l(o, e, t)
            }

            function l(e, t, n, r) {
                void 0 === r && (r = !1);
                var o = i.b.get(e, []),
                    a = n && n.roles && n.roles.isStaff || r;
                return o.includes(t) || o.includes(t + "-staff") && a
            }
        },
        u3aQ: function(e, t, n) {
            e.exports = n.p + "assets/missing-video-thumb-160x90-6d63306a771e0e239cf4.png"
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
                return p
            }), n.d(t, "b", function() {
                return m
            }), n.d(t, "i", function() {
                return h
            }), n.d(t, "c", function() {
                return f
            }), n.d(t, "f", function() {
                return g
            }), n.d(t, "g", function() {
                return v
            }), n.d(t, "a", function() {
                return b
            });
            var i = n("q1tI"),
                r = n("/7QA"),
                o = n("GxR5"),
                a = n("Ue10");

            function s(e) {
                return i.createElement(a.V, {
                    type: a.Nb.Strong
                }, e)
            }

            function l(e, t) {
                return i.createElement(a.T, {
                    to: t,
                    targetBlank: !0
                }, e)
            }

            function c(e, t) {
                return i.createElement(a.T, {
                    onClick: t
                }, e)
            }

            function d() {
                return Object(r.d)("<x:link>Forgot your username</x:link>?", {
                    "x:link": function(e) {
                        return l(e, o.b)
                    }
                }, "ServerMessage")
            }

            function u() {
                return Object(r.d)("<x:link>Forgot your password</x:link>?", {
                    "x:link": function(e) {
                        return l(e, Object(o.e)())
                    }
                }, "ServerMessage")
            }

            function p() {
                return Object(r.d)("Please <x:link>reset your password</x:link>.", {
                    "x:link": function(e) {
                        return l(e, Object(o.e)())
                    }
                }, "ServerMessage")
            }

            function m() {
                return Object(r.d)("Please <x:link>contact support</x:link> for assistance.", {
                    "x:link": function(e) {
                        return l(e, o.a)
                    }
                }, "ServerMessage")
            }

            function h() {
                return Object(r.d)("To learn more, please read <x:link>this article</x:link>.", {
                    "x:link": function(e) {
                        return l(e, o.c)
                    }
                }, "ServerMessage")
            }

            function f(e) {
                return Object(r.d)("Want to <x:click>create a new account</x:click>?", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }

            function g(e) {
                return Object(r.d)("Want to <x:click>log in</x:click> instead?", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }

            function v(e) {
                return Object(r.d)("If you need a Twitch account, you can <x:click>create one here</x:click>.", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }

            function b(e) {
                return Object(r.d)("If you want to use an existing Twitch ID, you can <x:click>connect it here</x:click>.", {
                    "x:click": function(t) {
                        return c(t, e)
                    }
                }, "ServerMessage")
            }
        },
        uzvh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                o = n("SiBg");

            function a(e) {
                return e.collections.containingCollections
            }
            r.o.store.registerReducer("collections", function(e, t) {
                var n;
                switch (void 0 === e && (e = {
                    collections: [],
                    videoID: "",
                    containingCollections: [],
                    errors: {}
                }), t.type) {
                    case o.a:
                        return i.__assign({}, e, {
                            collections: t.collections
                        });
                    case o.b:
                        return i.__assign({}, e, {
                            videoID: t.videoID,
                            containingCollections: t.containingCollections
                        });
                    case o.c:
                        return i.__assign({}, e, {
                            errors: i.__assign({}, e.errors, (n = {}, n[t.errorType] = t.errorMessage, n))
                        });
                    default:
                        return e
                }
            })
        },
        vDRX: function(e, t, n) {},
        wqI2: function(e, t, n) {},
        wxwP: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
                a = n("fvjX"),
                s = n("/7QA"),
                l = n("CFw/"),
                c = n.n(l),
                d = n("aCAx"),
                u = n("Ue10"),
                p = (n("9RDd"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", {
                            onClick: this.props.closeModal
                        }, r.createElement(u.i, {
                            type: u.n.FadeIn,
                            duration: u.k.Long,
                            timing: u.m.EaseInOut,
                            enabled: !0
                        }, r.createElement(u.xb, {
                            className: "browser-push-notifications-upsell",
                            alignItems: u.f.Center,
                            justifyContent: u.Ua.Center,
                            position: u.db.Fixed,
                            display: u.W.Flex,
                            background: u.r.Overlay,
                            fullHeight: !0,
                            fullWidth: !0,
                            attachTop: !0,
                            attachLeft: !0
                        }, r.createElement(u.Va, {
                            className: "browser-push-notifications-upsell__container",
                            display: u.W.Flex,
                            textAlign: u.Jb.Center,
                            padding: {
                                x: 1
                            },
                            position: u.db.Relative
                        }, r.createElement(u.i, {
                            type: u.n.SlideInBottom,
                            duration: u.k.Long,
                            timing: u.m.EaseInOut,
                            enabled: !0
                        }, r.createElement(u.V, {
                            type: u.Nb.H3,
                            fontSize: u.Aa.Size3,
                            lineHeight: u.Wa.Body
                        }, Object(s.d)("Don't miss out when your favorite streamers go live!", "BrowserNotificationsUpsellModal")), r.createElement(u.Va, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(u.V, {
                            type: u.Nb.H4,
                            fontSize: u.Aa.Size4,
                            color: u.O.OverlayAlt,
                            lineHeight: u.Wa.Body
                        }, Object(s.d)("Turn on Browser Notifications to get updates even when your browser window is minimized", "BrowserNotificationsUpsellModal")))), r.createElement(u.Va, {
                            className: "browser-push-notifications-upsell__arrow",
                            position: u.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0
                        }, r.createElement(u.i, {
                            type: u.n.SlideInBottom,
                            delay: u.j.Short,
                            duration: u.k.Long,
                            timing: u.m.EaseInOut,
                            enabled: !0
                        }, r.createElement("img", {
                            src: c.a
                        })))))))
                    }, t
                }(r.Component));
            var m = Object(o.connect)(null, function(e) {
                return Object(a.bindActionCreators)({
                    closeModal: d.c
                }, e)
            })(p);
            n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return m
            })
        },
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = "0h0m1s";

            function r(e) {
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
                                                        value: "paidUpgrade"
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
                    end: 351
                }
            };
            n.loc.source = {
                body: "query ChannelPage_SubscribeButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nsubscriptionProducts {\nid\nemoteSetID\nname\nself {\npaidUpgradePromotion {\nnewPrice\n}\n}\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\npaidUpgrade {\nstartsAt\n}\ngift {\nisGift\n}\n}\n}\n}\ncurrentUser {\nid\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        zHWM: function(e, t, n) {
            "use strict";
            n("uzvh")
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