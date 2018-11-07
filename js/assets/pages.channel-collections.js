(window.webpackJsonp = window.webpackJsonp || []).push([
    [48, 124], {
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
                    var e = r.o.getLastPageview();
                    return e && e.location || o.PageviewLocation.None
                },
                l = function(e) {
                    r.o.trackItemSectionClick({
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
                    r.o.trackItemSectionClick({
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
                                                        return [4, r.p.apollo.client.query({
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
                                    }), r.o.trackItemSectionLoad({
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
                    }, i.createElement(r.ib, null)), i.createElement(r.H, null, i.createElement(r.Xa, {
                        display: r.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(r.Xa, {
                        display: r.X.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, i.createElement(r.ib, {
                        width: 40,
                        height: 56
                    })), i.createElement(r.Xa, {
                        display: r.X.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(r.W, null, i.createElement(r.ib, {
                        width: 150
                    })), i.createElement(r.W, {
                        fontSize: r.Ca.Size7
                    }, i.createElement(r.ib, {
                        width: 100
                    }))))))
                }
        },
        "0T/G": function(e, t) {},
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
                        return r.createElement(f.Xa, {
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
                b = Object(a.compose)(Object(p.b)("ChannelCollectionsPage", {
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
                switch (o.p.intl.getLanguageCode()) {
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
                    }), r.createElement(c.U, {
                        to: t,
                        hoverUnderlineNone: !0
                    }, r.createElement(c.Xa, {
                        display: c.X.InlineFlex,
                        flexDirection: c.Aa.Row,
                        alignItems: c.f.Center
                    }, r.createElement(c.W, {
                        type: c.Vb.H5
                    }, Object(a.d)("Expand All", "VideoShelfExpandLink")), r.createElement(c.sb, {
                        asset: c.tb.AngleRight,
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
                if (!e.titleMessage) return r.createElement(c.ib, {
                    width: 200
                });
                var t = r.createElement(c.W, {
                        type: c.Vb.H4,
                        color: c.O.Base,
                        bold: !0,
                        "data-test-selector": i.Title
                    }, e.titleMessage),
                    n = e.subTitle;
                return e.subTitle && "string" == typeof e.subTitle ? n = r.createElement(c.W, {
                    color: c.O.Alt2,
                    type: c.Vb.Span,
                    "data-test-selector": i.SubTitle
                }, e.subTitle) : e.subTitle && (n = r.createElement(c.Xa, {
                    "data-test-selector": i.SubTitle
                }, n)), r.createElement(r.Fragment, null, r.createElement(c.Xa, {
                    display: c.X.Flex,
                    flexDirection: c.Aa.Row,
                    alignItems: c.f.End
                }, t, e.expandLink && r.createElement(c.Xa, {
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
                h = n("GnwI"),
                f = n("4HIT"),
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
                        var e = {
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
                                src: this.props.video.game && this.props.video.game.boxArtURL || l.a.defaultBoxArtURL,
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
                                linkPath: f.a.PopularTag
                            } : void 0
                        };
                        return r.createElement(c.a, i.__assign({}, e))
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = s.stringify(e);
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
                }(r.Component),
                v = Object(h.b)("VideoPreviewCard", {
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
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== o.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds || 0)
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
                i.o.track(r.SpadeEventType.CollectionCreate, {
                    channel_id: e.channelID,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    title: e.title
                })
            }

            function a(e) {
                i.o.track(r.SpadeEventType.CollectionAddItem, {
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
                i.o.track(r.SpadeEventType.CollectionRemoveItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID
                })
            }
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
        "CFw/": function(e, t, n) {
            e.exports = n.p + "assets/notification_upsell_arrow-c9d4ff7c87444b45d813.png"
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                a = n("5zf8"),
                s = n("Ue10"),
                l = (n("Fj9y"), function(e) {
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
                        return r.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, r.createElement(s.Ua, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            padding: .5
                        }, r.createElement(s.Eb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.cb.Hidden,
                            position: s.jb.Relative
                        }, r.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, r.createElement(s.S, i.__assign({}, e))), r.createElement(s.Eb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            position: s.jb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, r.createElement(s.sb, {
                            asset: s.tb.Play,
                            type: s.ub.Inherit
                        }))), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, r.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, r.createElement(s.W, null, this.props.gameChange.label)), r.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, r.createElement(s.W, null, Object(a.b)(this.props.gameChange.duration)))))))
                    }, t
                }(r.Component)),
                c = n("0INk"),
                d = n("8/mp"),
                u = n("eJ65"),
                p = (n("vDRX"), function(e) {
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
                            Object(c.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return r.createElement(s.Xa, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.jb.Relative,
                            margin: {
                                top: .5
                            }
                        }, r.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, r.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.tb.ViewerList
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row
                        }, r.createElement(s.W, null, Object(o.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(s.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(s.gb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), r.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, r.createElement(s.Xa, {
                            overflow: s.cb.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap
                        }, r.createElement(s.Xa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, r.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(o.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(s.Xa, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Ba.NoWrap
                        }, r.createElement(d.b, null, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap,
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
                m = n("kduP"),
                h = n("2xye"),
                f = function(e) {
                    return r.createElement(s.Xa, null, r.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return r.createElement(s.Pa, {
                            key: n
                        }, r.createElement(s.U, {
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
                v = n("N0BP"),
                b = (n("XA5B"), function(e) {
                    var t = r.createElement(s.Eb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.cb.Hidden
                    }, r.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, r.createElement(s.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(s.U, i.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            b.displayName = "PreviewCardIconicImage";
            var k, y = n("TSYQ"),
                C = (n("cRsL"), function(e) {
                    var t = y("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return r.createElement(s.Xa, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Wa.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, r.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, r.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Ub.Uppercase
                    }, e.title)), e.subTitle && r.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, r.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                w = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(s.mb, {
                        borderRadius: s.x.None,
                        size: s.ob.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var o = 1,
                        a = null;
                    return e.topBar && (a = r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(C, i.__assign({}, e.topBar))), o = 3), r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, a, n, r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: o
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: o
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), r.createElement(s.Xa, {
                        position: s.jb.Absolute,
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
                    var t = e.icon && r.createElement(s.Xa, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(s.sb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? r.createElement(s.Eb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ca.Size6,
                        justifyContent: s.Wa.Center
                    }, t, r.createElement(s.W, null, e.value)) : r.createElement(s.Eb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, r.createElement(s.W, null, e.value))
                }),
                _ = n("GnwI"),
                E = (n("B3R5"), function(e) {
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
                        }), r.createElement(s.Eb, {
                            background: s.r.Alt2,
                            overflow: s.cb.Hidden
                        }, r.createElement(s.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = y("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                            className: n
                        }, r.createElement(s.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : r.createElement("div", {
                            className: n
                        }, r.createElement(s.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(r.Component)),
                I = Object(_.b)("PreviewCardThumbnail")(E),
                N = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return r.createElement(s.Xa, {
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
                    })), r.createElement("div", null, r.createElement(s.U, i.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: s.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), r.createElement(s.W, {
                        type: s.Vb.H3,
                        fontSize: s.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), r.createElement(s.Xa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                x = n("H1ft"),
                L = n("ZbA5"),
                T = n("QVaV"),
                O = n("hyVY"),
                D = n("MXoD"),
                P = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(k || (k = {}));
            var F, j, B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(o.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(o.d)("unlocked", "VideoPreviewCardRestriction") : Object(o.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? s.tb.Unlock : s.tb.Lock;
                    return r.createElement(s.Xa, null, !t && r.createElement(s.Eb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.ic.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Rb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Aa.Column,
                        flexWrap: s.Ba.Wrap,
                        justifyContent: s.Wa.Center,
                        "data-test-selector": k.LockSelector
                    }, r.createElement(s.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ca.Size5,
                        "data-test-selector": k.UpsellSelector
                    }, Object(o.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), r.createElement(s.Xa, null, r.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), r.createElement(s.Eb, {
                        display: s.X.InlineFlex,
                        position: s.jb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.ic.Default,
                        fontSize: s.Ca.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, r.createElement(s.Yb, {
                        direction: this.props.attachTop ? s.ac.Bottom : s.ac.Top,
                        align: s.Zb.Right,
                        label: n
                    }, r.createElement(s.sb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            n("5NSO");

            function A(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function R(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(F || (F = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(j || (j = {}));
            var V = function(e) {
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
                        return r.createElement("div", i.__assign({
                            className: "preview-card"
                        }, Object(v.a)(this.props)), r.createElement(s.Eb, {
                            position: s.jb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.cb.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(s.U, {
                            to: Object(D.a)(this.getTrackingContext(h.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(I, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: A(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, r.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), r.createElement(s.Xa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && r.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(w, {
                            topLeft: r.createElement(L.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(S, {
                                value: Object(o.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : A(this.props) ? r.createElement(w, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(S, {
                                value: Object(O.b)(this.props.durationInSeconds),
                                icon: s.tb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(S, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? r.createElement(S, {
                                value: Object(o.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : R(this.props) ? r.createElement(w, {
                            topLeft: r.createElement(S, {
                                value: Object(O.b)(this.props.durationInSeconds),
                                icon: s.tb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? r.createElement(S, {
                                value: Object(o.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return A(this.props) && this.props.listPosition ? Object(o.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return A(this.props) || R(this.props) ? Object(o.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === j.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(b, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(D.a)(this.getTrackingContext(h.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": F.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === j.SingleGameList || this.props.context === j.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(b, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(D.a)(this.getTrackingContext(h.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": F.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(T.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(D.a)(this.getTrackingContext(h.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), R(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(o.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : A(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== j.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(D.a)(this.getTrackingContext(h.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(N, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(D.a)(this.getTrackingContext(h.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(s.Xa, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(P.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return A(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(B, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!A(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === x.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case x.a.Balloon:
                                return r.createElement(p, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case x.a.Inline:
                                return r.createElement(f, {
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
                U = Object(_.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(V);
            n.d(t, !1, function() {
                return F
            }), n.d(t, "b", function() {
                return j
            }), n.d(t, !1, function() {
                return V
            }), n.d(t, "a", function() {
                return U
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
                switch (r.p.experiments.getAssignment(o.b.Archer)) {
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
                        "number" == typeof this.props.videoCount && (i = s.createElement(h.Xa, {
                            position: h.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0
                        }, s.createElement(h.Eb, {
                            alignItems: h.f.Center,
                            attachRight: !0,
                            className: "collection-preview-image__wrapper",
                            color: h.O.Overlay,
                            display: h.X.InlineFlex,
                            flexDirection: h.Aa.Column,
                            fontSize: h.Ca.Size5,
                            fullHeight: !0,
                            justifyContent: h.Wa.Center,
                            position: h.jb.Absolute,
                            textAlign: h.Rb.Center
                        }, s.createElement(h.sb, {
                            asset: h.tb.Collections,
                            height: 20,
                            width: 20
                        }), s.createElement(h.W, {
                            "data-test-selector": r.VideoCountOverlayText
                        }, Object(l.d)("{videoCount, plural, one {# video} other {# videos}}", {
                            videoCount: this.props.videoCount.toString()
                        }, "CollectionCard")))));
                        var a = o.Full;
                        return this.props.fallbackSize && (a = this.props.fallbackSize), !this.props.src || this.state.imageLoadError ? (t = f[a], (e = {})[a + "w"] = t, n = e) : (t = this.props.src, n = this.props.srcSet), s.createElement(h.Xa, {
                            position: h.jb.Relative
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
                v = Object(m.b)("CollectionPreviewImage")(g)
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
                            s.b ? s.b.provideContent(e, n.contentID) : o.k.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.removePortal = function() {
                            s.b ? s.b.removeContent() : o.k.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.contentID = Object(a.a)(), n
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.children ? this.renderPortal(e.children) : this.removePortal()
                    }, t.prototype.componentDidMount = function() {
                        s.b || o.k.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content."), this.props.children && this.renderPortal(this.props.children)
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
        KriR: function(e, t, n) {
            "use strict";
            n.d(t, "g", function() {
                return o
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "f", function() {
                return a
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "c", function() {
                return d
            });
            var i = n("/7QA"),
                r = n("2xye");

            function o(e) {
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
                e.trackingContext.detail && (t.checkout_source_detail = e.trackingContext.detail), i.o.track(r.SpadeEventType.PaymentFormInteraction, t)
            }
            var a, s, l, c, d, u = function() {
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
                        i.o.track(r.SpadeEventType.PaymentFormDisplay, t)
                    }(this.store))
                }, e
            }();
            ! function(e) {
                e.Failed = "failed", e.Pending = "pending", e.Success = "success"
            }(a || (a = {})),
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
                        return t.logger = o.p.logger.withCategory("resize-detector"), t.onScroll = function() {
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
                        return l.createElement(p.Xa, {
                            display: p.X.Flex
                        }, l.createElement(p.Xa, {
                            padding: 2
                        }, l.createElement(p.N, {
                            label: "",
                            onChange: this.onChangeHandler,
                            checked: this.props.videoIsInCollection
                        })), l.createElement(p.Xa, {
                            padding: 1
                        }, l.createElement(p.I, {
                            aspect: p.p.Aspect16x9,
                            alt: this.props.collection.title,
                            src: this.props.collection.thumbnailSrc || "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                            size: p.J.Size8
                        })), l.createElement(p.Xa, {
                            padding: 1,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column
                        }, l.createElement(p.Xa, null, l.createElement(p.W, {
                            ellipsis: !0
                        }, this.props.collection.title)), l.createElement(p.Xa, {
                            display: p.X.Flex
                        }, l.createElement(p.Xa, {
                            padding: {
                                right: 1
                            }
                        }, l.createElement(p.W, null, Object(c.d)("{videoCount} video", {
                            videoCount: this.props.collection.itemsCount
                        }, "CollectionRowPresentation"))), l.createElement(p.Xa, {
                            padding: {
                                x: 1
                            }
                        }, l.createElement(p.W, null, "·")), l.createElement(p.Xa, {
                            padding: {
                                left: 1
                            }
                        }, l.createElement(p.W, null, Object(d.b)(this.props.collection.totalDuration))))))
                    }, t
                }(l.Component),
                h = Object(u.b)("CollectionRow")(m),
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
                        return this.props.channelID && this.props.videoID && this.props.collections ? l.createElement(p.Xa, null, this.props.collections.map(function(t) {
                            return l.createElement(h, {
                                key: t.id,
                                collection: t,
                                videoIsInCollection: e.props.containingCollections.map(function(e) {
                                    return e.id
                                }).indexOf(t.id) > -1,
                                onSelected: e.onCollectionRowChange
                            })
                        })) : l.createElement(p.Xa, null)
                    }, t
                }(l.Component),
                g = Object(u.b)("CollectionsListPresentation")(f);
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
                E = n("KriR"),
                I = n("W8Fi"),
                N = n("br9A"),
                x = n("Ue10"),
                L = (n("a7aT"), n("z+dA"));
            ! function(e) {
                e.SubButton = "subscribe-button__dropdown", e.BalloonLayerButton = "subscribe-button__balloon-layer-btn", e.DefaultButton = "subscribe-button__default-btn", e.SubscribeBalloon = "subscribe-button__subscribe-balloon"
            }(i || (i = {}));
            var T = l.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(199)]).then(n.bind(null, "f+qK"))
                }, "SubscribeBalloon"),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            inPrimeRegion: !1
                        }, t.modalLevel = "top_page", t.renderBalloonContentForBalloonLayer = function() {
                            return o.createElement(v.a, {
                                onClickOut: t.handleBalloonClickOut
                            }, o.createElement(x.Xa, {
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
                            new Set([N.a.ClickCheckout, N.a.BuyGiftSub, N.a.BuyMysteryGift, N.a.BuyCustomMysteryGift, N.a.BuyGiftToPaidUpgrade, N.a.BuyPaidUpgrade]).has(e.action) && t.checkAndDisplaySubscriptionCheckout();
                            var n = t.props.data,
                                i = n.user,
                                r = !!(i && i.self && i.self.subscriptionBenefit),
                                o = n.requestInfo && Object(S.a)(n.requestInfo.countryCode);
                            Object(N.b)({
                                action: e.action || "",
                                channelLogin: t.props.channelLogin || "",
                                channelID: i && i.id || "",
                                checkoutButtonTier: e.checkoutButtonTier,
                                hasSubCredit: i && i.self && i.self.canPrimeSubscribe,
                                hostChannelID: t.props.hostChannelID,
                                hostChannelLogin: t.props.hostChannelLogin,
                                isMenuOpen: e.action !== N.a.OpenSubMenu,
                                mysteryGiftCount: e.mysteryGiftCount,
                                sub_location: "channel_page",
                                modal: !r,
                                modalLevel: r ? "" : t.modalLevel.slice(),
                                showPrimeContent: o,
                                giftRecipient: e.giftRecipient || null
                            }), !e.modalLevel || e.action !== N.a.ClickMoreSubOptions && e.action !== N.a.ClickBack || (t.modalLevel = e.modalLevel)
                        }, t.handleMenuToggle = function(e) {
                            t.handleSubMenuAction({
                                action: e ? N.a.CloseSubMenu : N.a.OpenSubMenu
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
                        var e = this.props.data;
                        if (!e || e.loading || e.error) return null;
                        var t = e.user;
                        if (!t) return null;
                        var n = t.self,
                            r = t.subscriptionProducts;
                        if (!r) return null;
                        var a = r.filter(function(e) {
                            return e
                        });
                        if (0 === a.length) return null;
                        if (this.props.hideEsportsSubscription && Object(w.a)(t.id || "", this.props.sessionUser)) return null;
                        var s = e.requestInfo && Object(S.a)(e.requestInfo.countryCode),
                            l = !(!n || !n.subscriptionBenefit),
                            c = Object(w.a)(t.id || "", this.props.sessionUser),
                            d = 1 === a.length;
                        a.some(function(e) {
                            return !e.emoteSetID
                        }) && (d = !0);
                        var u = null;
                        n && n.subscriptionBenefit && (u = n.subscriptionBenefit.purchasedWithPrime ? C.a.Prime : n.subscriptionBenefit.tier, this.modalLevel = "");
                        var p, m = l ? Object(f.d)("All-Access Pass", "SubscribeButton") : Object(f.d)("Get the All-Access Pass", "SubscribeButton"),
                            h = n && Object(I.h)(a, n.subscriptionBenefit);
                        if (l) {
                            var g = "";
                            if (g = d ? Object(f.d)("Subscribed", "SubscribeButton") : h ? Object(f.d)("Continue Sub for $1", "SubscribeButton") : Object(f.d)("Gift A Sub", "SubscribeButton"), p = this.props.hostChannelID ? Object(f.d)("Subscribed to {username}", {
                                    username: t.displayName || ""
                                }, "SubscribeButton") : g, d && !c) return o.createElement(x.z, {
                                disabled: !0,
                                ariaLabel: p,
                                icon: x.tb.Star
                            }, p);
                            c && (p = m)
                        } else p = c ? m : this.props.hostChannelID ? Object(f.d)("Subscribe to {username}", {
                            username: t.displayName || ""
                        }, "SubscribeButton") : Object(f.d)("Subscribe", "SubscribeButton");
                        var v = o.createElement(x.z, {
                                ariaLabel: p,
                                "data-a-target": l ? "subscribed-button" : "subscribe-button",
                                "data-test-selector": i.SubButton,
                                dropdown: !this.props.hideDropdownArrow,
                                fullWidth: !0,
                                icon: this.getButtonIcon(l, u),
                                onClick: this.props.renderBalloonInBalloonLayer ? this.handleButtonClick : void 0,
                                type: this.getButtonType(l)
                            }, p),
                            k = a[0];
                        return this.setBalloonWrapperContent(o.createElement(T, {
                            authToken: this.props.authToken,
                            channelLogin: this.props.channelLogin || "",
                            "data-test-selector": i.SubscribeBalloon,
                            handleSubMenuAction: this.handleSubMenuAction,
                            inPrimeRegion: s,
                            isEsportChannel: c,
                            isNonStandardSub: d,
                            isStaff: !(!this.props.sessionUser || !this.props.sessionUser.roles) && this.props.sessionUser.roles.isStaff,
                            isSubscribed: l,
                            productId: k ? k.id : "",
                            subbedTier: u || C.a.Prime,
                            userHasPrime: !1
                        })), this.props.renderBalloonInBalloonLayer ? o.createElement(x.Xa, {
                            "data-test-selector": i.BalloonLayerButton,
                            refDelegate: this.setContainerRefDelegate
                        }, v) : o.createElement(x.Xa, {
                            className: h ? "subscribe-button--promo" : ""
                        }, o.createElement(b.a, {
                            "data-test-selector": i.DefaultButton,
                            onToggle: this.handleMenuToggle
                        }, v, o.createElement(x.u, {
                            "data-a-target": "sub-balloon",
                            direction: this.getBalloonDirection(),
                            size: x.w.Large
                        }, this.balloonWrapperContent)))
                    }, t.prototype.getButtonType = function(e) {
                        x.F.Default;
                        return e && void 0 !== this.props.subscribedButtonType ? this.props.subscribedButtonType : e ? x.F.Success : this.props.unsubscribedButtonType || x.F.Default
                    }, t.prototype.getButtonIcon = function(e, t) {
                        var n = void 0;
                        return e ? n = t === C.a.Prime ? x.tb.Crown : x.tb.Star : this.props.forceIcon && (n = x.tb.StarHollow), n
                    }, t.prototype.isUserDataReady = function(e) {
                        return e.data && e.data.user && !e.data.loading && !e.data.error
                    }, t.prototype.checkAndDisplaySubscriptionCheckout = function() {
                        var e = f.n.get(c.b, "");
                        if (e) {
                            var t = this.props.data.user;
                            if (t && t.subscriptionProducts) t.subscriptionProducts.filter(function(e) {
                                return e
                            }).map(function(e) {
                                return e.name
                            }).includes(e) ? this.props.sessionUser ? this.props.showSubscriptionCheckoutModal({
                                mysteryGiftCount: Number(f.n.get(c.a, "")),
                                productName: e,
                                recipientLogin: f.n.get(c.c, ""),
                                trackingContext: {
                                    source: E.c.ChannelSubscribeButton
                                }
                            }) : this.props.showLoginModal() : Object(c.d)()
                        }
                    }, t
                }(o.Component),
                D = Object(h.compose)(Object(k.a)(L, {
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
                        return Object(_.F)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(g.e)())(O),
                P = function(e) {
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
                    }, t = r.__decorate([Object(m.b)("SubscribeButton")], t)
                }(o.Component);
            var F = Object(a.connect)(function(e) {
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
                                return Promise.all([n.e(0), n.e(210)]).then(n.bind(null, "KJv/"))
                            },
                            componentProps: t
                        })
                    }
                }, e)
            })(P);
            n.d(t, !1, function() {
                return P
            }), n.d(t, "a", function() {
                return F
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return O
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
                                    return c = i.sent(), r.k.error(c, "Failed to fetch collections"), o.store.dispatch({
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
                                    return C = i.sent(), r.k.error(C, "Failed to add new collection with video"), d.store.dispatch({
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
                                    return S = i.sent(), r.k.error(S, "Failed to fetch collections"), d.store.dispatch({
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
                    return i.n.remove(e)
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
                        return n.logger = l.k.withCategory("role-restricted"), n.state = {
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
            }), Object(d.b)("RoleRestricted"))(p);
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
                v = n("MxAq"),
                b = n("Ue10"),
                k = 0,
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.computeViewsMessage = function() {
                            var e = t.props.totalViews || k;
                            return 0 === e || 1 === e ? Object(s.d)("{viewCount, plural, one {# view}  other {# views}}", {
                                viewCount: e
                            }, "CollectionCard") : Object(s.d)("{viewCount} views", {
                                viewCount: Object(s.g)(e)
                            }, "CollectionCard")
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("By {channelName}", {
                            channelName: o.createElement(b.U, {
                                "data-test-selector": "collection-card-channel-link",
                                to: this.props.channelLinkTo,
                                hoverUnderlineNone: !0
                            }, this.props.channelDisplayName)
                        }, "ChannelCollections");
                        return o.createElement(b.G, r.__assign({
                            key: this.props.title
                        }, Object(b.jc)(this.props)), o.createElement(b.Pa, {
                            position: b.jb.Relative
                        }, o.createElement(b.U, {
                            to: {
                                pathname: this.props.linkTo,
                                state: {
                                    content: p.PageviewContent.CollectionCard,
                                    medium: p.PageviewMedium.ChannelCollections
                                }
                            },
                            title: this.props.title,
                            "data-test-selector": 'collection-card-overlay-link"'
                        }, o.createElement(v.a, {
                            alt: this.props.title,
                            sizes: [{
                                size: "320px"
                            }],
                            src: this.props.imageSrc,
                            videoCount: this.props.videoCount
                        }))), o.createElement(b.H, {
                            "data-test-selector": "collection-card-body"
                        }, o.createElement(b.Xa, {
                            display: b.X.Flex,
                            flexDirection: b.Aa.Column,
                            flexWrap: b.Ba.NoWrap,
                            padding: {
                                top: .5
                            }
                        }, o.createElement(b.W, {
                            fontSize: b.Ca.Size5,
                            ellipsis: !0
                        }, o.createElement(b.U, {
                            to: {
                                pathname: this.props.linkTo,
                                state: {
                                    content: p.PageviewContent.CollectionCard,
                                    medium: p.PageviewMedium.ChannelCollections
                                }
                            },
                            "data-test-selector": "collection-card-title-link",
                            hoverUnderlineNone: !0
                        }, this.props.title)), o.createElement(b.W, {
                            color: b.O.Alt2,
                            ellipsis: !0
                        }, o.createElement(b.W, {
                            type: b.Vb.Span
                        }, e), o.createElement(b.W, {
                            type: b.Vb.Span
                        }, " · " + this.computeViewsMessage())))))
                    }, t
                }(o.Component),
                C = Object(h.b)("CollectionCard", {
                    autoReportInteractive: !0
                })(y),
                w = n("VwyG");
            ! function(e) {
                e[e.NoCollections = 0] = "NoCollections", e[e.NoCollectionsUpSell = 1] = "NoCollectionsUpSell"
            }(i || (i = {}));
            var S, _ = function(e) {
                    var t;
                    return t = e.canEdit ? o.createElement("div", {
                        "data-test-selector": i.NoCollectionsUpSell
                    }, o.createElement(b.W, {
                        type: b.Vb.H4
                    }, Object(s.d)("Create a collection of your videos from Video Producer.", "collection-page")), o.createElement(b.Xa, {
                        padding: {
                            top: 2
                        }
                    }, o.createElement(b.z, {
                        type: b.F.Hollow,
                        linkTo: "/" + e.channelLogin + "/manager/collections"
                    }, Object(s.d)("Go to Video Producer", "collection-page")))) : o.createElement(b.W, {
                        type: b.Vb.H4,
                        italic: !0,
                        "data-test-selector": i.NoCollections
                    }, Object(s.d)("No collections found.", "collection-page")), o.createElement(b.Eb, {
                        color: b.O.Alt2,
                        textAlign: b.Rb.Center
                    }, t)
                },
                E = function(e) {
                    return o.createElement(w.a, {
                        ownerLogin: e.channelLogin,
                        permittedRoles: {
                            owner: !0,
                            editor: !0,
                            staff: !0
                        }
                    }, function(t) {
                        var n = t.permitted;
                        return o.createElement(_, {
                            canEdit: n,
                            channelLogin: e.channelLogin
                        })
                    })
                },
                I = n("cERj"),
                N = n("IhxQ");
            ! function(e) {
                e[e.Filters = 0] = "Filters"
            }(S || (S = {}));
            var x = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || (this.props.data.user && this.props.data.user.displayName && s.p.setPageTitle(this.props.data.user.displayName), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.render = function() {
                        if (!this.props.data.error && this.props.data.user) {
                            var e = this.props.data.user,
                                t = [];
                            e.collections && e.collections.edges && e.collections.edges.forEach(function(e) {
                                e && e.node && t.push(e.node)
                            });
                            var n = null;
                            return Object(m.a)() || (n = o.createElement(b.Xa, {
                                alignItems: b.f.End,
                                "data-test-selector": S.Filters,
                                display: b.X.Flex,
                                flexDirection: b.Aa.Row,
                                justifyContent: b.Wa.Between,
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
                            for (var i = [], r = 0; r < 12; r++) i.push(o.createElement(b.Xa, {
                                key: "collection-placeholder-" + r,
                                padding: {
                                    bottom: 2
                                },
                                "data-test-selector": "collections-placeholder"
                            }, o.createElement(b.Xa, {
                                margin: {
                                    bottom: .5
                                }
                            }, o.createElement(b.o, {
                                ratio: b.p.Aspect16x9
                            }, o.createElement(b.ib, null))), o.createElement(b.W, null, o.createElement(b.ib, {
                                width: 150
                            })), o.createElement(b.W, {
                                fontSize: b.Ca.Size7
                            }, o.createElement(b.ib, {
                                width: 100
                            }))));
                            return o.createElement(b.bc, {
                                gutterSize: b.dc.Small,
                                childWidth: b.cc.Medium,
                                placeholderItems: 20
                            }, i)
                        }
                        return o.createElement(b.Xa, {
                            margin: {
                                top: 5
                            }
                        }, o.createElement(l.a, {
                            message: Object(s.d)("These collections are temporarily unavailable.", "channel-collections")
                        }))
                    }, t.prototype.renderCollections = function(e, t, n) {
                        var i, r = this;
                        if (0 === t.length) return o.createElement(b.Xa, {
                            padding: {
                                y: 5
                            }
                        }, o.createElement(E, {
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
                                return o.createElement(b.Xa, {
                                    key: t.id,
                                    margin: {
                                        bottom: 2
                                    }
                                }, o.createElement(C, {
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
                            i = o.createElement(b.bc, {
                                gutterSize: b.dc.Small,
                                childWidth: b.cc.Large,
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
                L = Object(a.compose)(Object(h.b)("ChannelCollectionsContent"), Object(d.a)(N, {
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
                                        query: N,
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
                }))(x);
            n.d(t, "TestSelectors", function() {
                return S
            }), n.d(t, "COLLECTIONS_PLACEHOLDER_SELECTOR", function() {
                return "collections-placeholder"
            }), n.d(t, "COLLECTIONS_PLACEHOLDER_LIMIT", function() {
                return 12
            }), n.d(t, "ChannelCollectionsContentComponent", function() {
                return x
            }), n.d(t, "ChannelCollectionsContent", function() {
                return L
            })
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
                h = ((r = {})[u.a.Premiere] = p.tb.VideoPremiere, r[u.a.Rerun] = p.tb.VideoRerun, r[u.a.WatchParty] = p.tb.VideoRerun, r),
                f = ((o = {})[u.a.Premiere] = p.ub.Live, o[u.a.Rerun] = p.ub.Inherit, o[u.a.WatchParty] = p.ub.Inherit, o),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(p.Eb, {
                            className: this.getClassNames(),
                            color: p.O.Overlay,
                            background: p.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: p.x.Small,
                            display: p.X.Flex
                        }, c.createElement(p.Xa, {
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(p.W, {
                            type: p.Vb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(p.Eb, {
                            borderRadius: p.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": a.HostingDot
                        }) : this.props.type === u.a.Live ? c.createElement(p.Xa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: p.X.Flex,
                            alignItems: p.f.Center
                        }, c.createElement(p.K, {
                            status: p.M.Live,
                            size: p.L.Small
                        })) : c.createElement(p.sb, {
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
                        return new URL(e, r.p.config.apiBaseURL)
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
                        var n = r.p.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": r.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var a = Object(o.e)(n);
                        return a && (i.Authorization = "OAuth " + a.authToken, a.legacyCSRFToken && (i["Twitch-Api-Token"] = a.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = r.p.logger.withCategory("legacy-api"), e
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
                                src: this.props.clip.thumbnailURL || o.p.config.defaultStreamPreviewURL,
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
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, l, c, d, u, p, m, h, f, g, v, b;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.o.getVideoPlayerTrackingData().vodID, n = !!t, l = {
                                    channelID: e.channelID,
                                    withVideo: !1
                                }, n && (l.withVideo = !0, l.videoID = t), c = null, i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, r.p.apollo.client.query({
                                    query: s,
                                    variables: l
                                })];
                            case 2:
                                return c = i.sent(), [3, 4];
                            case 3:
                                return d = i.sent(), r.k.error(d, "Failed to make query for channel info in FollowEvent reporting.", {
                                    channelID: e.channelID
                                }), [3, 4];
                            case 4:
                                return u = c && c.data && c.data.user || null, c && !u && r.k.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                    channelID: e.channelID
                                }), p = null, c && n && ((m = c && c.data && c.data.video) ? p = Object(a.a)(m.broadcastType) : r.k.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
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
                                }, r.o.track(o.SpadeEventType.Subscription, b), [2]
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
                        return o.createElement(p.Xa, {
                            padding: {
                                right: 1
                            }
                        }, o.createElement(p.Xa, {
                            padding: {
                                bottom: .5
                            }
                        }, o.createElement(p.W, {
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
                        return o.createElement(p.Ua, {
                            key: e.label,
                            linkTo: t ? this.props.location : this.filterLink(e.filter),
                            selected: t
                        }, o.createElement(p.Xa, {
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
                                var e = l.p.experiments.getAssignment(f.b.WebSideNavUpsellCenterChannels);
                                return e === i.Learn || e === i.Support || e === i.LiveUp || e === i.Recommendation || e === i.Bullet ? e : null
                            }()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(b.Xa, {
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
                        return o.createElement(o.Fragment, null, o.createElement(b.W, {
                            color: b.O.Base,
                            fontSize: b.Ca.Size4
                        }, e), o.createElement(b.W, {
                            color: b.O.Alt2,
                            fontSize: b.Ca.Size5
                        }, t))
                    }, t.prototype.renderBulletPoints = function(e, t) {
                        var n = t.map(function(e, t) {
                            return o.createElement(b.Xa, {
                                key: "upsell-center-text-" + t,
                                display: b.X.Flex,
                                flexDirection: b.Aa.Row,
                                alignItems: b.f.Start
                            }, o.createElement(b.sb, {
                                type: b.ub.Alt2,
                                asset: b.tb.Check
                            }), o.createElement(b.Xa, {
                                margin: {
                                    left: 1
                                },
                                textAlign: b.Rb.Left
                            }, o.createElement(b.W, {
                                color: b.O.Alt2,
                                fontSize: b.Ca.Size6
                            }, e)))
                        });
                        return o.createElement(o.Fragment, null, o.createElement(b.W, {
                            color: b.O.Base,
                            fontSize: b.Ca.Size4
                        }, e), o.createElement(b.Xa, {
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
                                l.o.track(y.SpadeEventType.ItemClick, t)
                            }(), t.props.signup()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.componentDidUpdate = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        return o.createElement(b.Eb, {
                            background: b.r.AccentAlt2,
                            display: b.X.Flex,
                            flexDirection: b.Aa.Column,
                            padding: {
                                y: 2,
                                x: 1
                            },
                            margin: 1
                        }, this.renderImage(), o.createElement(b.Xa, {
                            textAlign: b.Rb.Center
                        }, this.renderText(), o.createElement(b.z, {
                            onClick: this.signup,
                            size: b.D.Large
                        }, o.createElement(b.Xa, {
                            padding: {
                                x: 1
                            }
                        }, o.createElement(b.W, {
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
                        return this.props.channelLogin && this.props.data && this.props.data.user && this.props.data.user.profileImageURL ? o.createElement(b.Xa, {
                            position: b.jb.Relative
                        }, o.createElement(b.Xa, {
                            className: "upsell-center__avatar",
                            position: b.jb.Absolute,
                            zIndex: b.ic.Above
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
                            l.o.track(y.SpadeEventType.ItemDisplay, t)
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
            var I = Object(a.connect)(function(e) {
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
                return I
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
                        return s.createElement(p.Pa, {
                            margin: {
                                y: 1
                            },
                            position: p.jb.Relative
                        }, s.createElement("div", {
                            className: "preview-card-carousel",
                            ref: this.refHandler
                        }, s.createElement(p.Xa, {
                            className: "preview-card-carousel__child-container",
                            overflow: p.cb.Hidden,
                            position: p.jb.Relative,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, s.createElement(p.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement("div", {
                            className: "preview-card-carousel__body",
                            style: {
                                transform: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, s.createElement(p.bc, {
                            noWrap: !0,
                            noGrow: !0,
                            childWidth: this.props.cardWidth || p.cc.Large,
                            gutterSize: p.dc.Small,
                            "data-js-selector": m
                        }, this.props.children)))), s.createElement(p.Xa, {
                            className: "preview-card-carousel__nav",
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            position: p.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, s.createElement(b, {
                            direction: f.DirectionPrevious,
                            disabled: !this.props.children || this.isBackButtonDisabled(),
                            onClickHandler: this.moveCarouselBackward
                        })), s.createElement(p.Xa, {
                            className: "preview-card-carousel__nav",
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            position: p.jb.Absolute,
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
                v = ((r = {})[f.DirectionPrevious] = p.tb.AngleLeft, r[f.DirectionNext] = p.tb.AngleRight, r),
                b = function(e) {
                    var t, n = g[e.direction],
                        i = ((t = {})[f.DirectionPrevious] = Object(l.d)("previous", "CarouselNavButton"), t[f.DirectionNext] = Object(l.d)("next", "CarouselNavButton"), t),
                        r = d("preview-card-carousel__button", "preview-card-carousel__button--" + n, {
                            "preview-card-carousel__button--disabled": e.disabled
                        });
                    return s.createElement(p.Xa, {
                        className: r,
                        position: p.jb.Relative,
                        display: p.X.Flex,
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
                                    n.push(s.id), i.push(s.viewCount || 0)
                                }
                                l.o.trackItemSectionLoad(a.__assign({
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
                                l.o.trackItemSectionClick(a.__assign({
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
                _ = Object(c.b)("VideoCarousel", {
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
                        return a.createElement(h.Xa, i.__assign({
                            className: "channel-page-layout",
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            flexWrap: h.Ba.NoWrap,
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
                        })), a.createElement(h.Xa, {
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
                            d = t && t.type === l.p.SERIES && n && n.length >= 4;
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
                                if (r.viewingPosition / (r.value.lengthSeconds || 1 / 0) > p) {
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
                        return e ? o.createElement(f.Xa, null, o.createElement(f.Xa, {
                            display: f.X.Flex,
                            flexDirection: f.Aa.Row
                        }, o.createElement(f.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(f.U, {
                            "data-test-selector": g.TitleLink,
                            to: "/collections/" + e.id,
                            type: f.V.Inherit
                        }, o.createElement(m.a, {
                            titleMessage: e.title || this.props.fallbackTitle || ""
                        }))), !Object(c.a)() && o.createElement(f.z, {
                            type: f.F.Hollow,
                            size: f.D.Small,
                            icon: f.tb.Play,
                            linkTo: "/collections/" + e.id,
                            "data-test-selector": g.PlayAllButton
                        }, Object(a.d)("Play all", "LatestCollectionCarousel"))), o.createElement(f.W, {
                            color: f.O.Alt2,
                            type: f.Vb.Span,
                            "data-test-selector": g.Metadata
                        }, this.renderSubTitle(e))) : o.createElement(f.ib, {
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
                b = Object(d.b)("CollectionCarousel", {
                    autoReportInteractive: !0
                })(v)
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
                s = n("/7QA"),
                l = n("ZS2+"),
                c = n("MJbm"),
                d = n("eJ65"),
                u = n("yR8l"),
                p = n("x7UT"),
                m = n("0Log"),
                h = n("/aPz"),
                f = n("D7An"),
                g = n("gOYK"),
                v = n("d2C5"),
                b = n("jSzL"),
                k = n("Ahlu"),
                y = n("/MKj"),
                C = n("fvjX"),
                w = n("aCAx"),
                S = n("7CzK"),
                _ = n("94Uw"),
                E = n("Ue10"),
                I = (n("/nm5"), n("41XU")),
                N = l.a.wrap(function() {
                    return n.e(144).then(n.bind(null, "7lJP"))
                }, "UserImageUploader"),
                x = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t.props.data && t.props.data.user;
                            e && e.id && e.login && t.props.showModal(N, {
                                userID: e.id,
                                login: e.login,
                                displayName: e.displayName || e.login,
                                imageType: _.a.ProfileBanner,
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
                            l = {
                                "channel-banner__image--side-nav": this.props.isSideNavBanner
                            },
                            c = {
                                "channel-banner__edit-overlay-button--side-nav": this.props.isSideNavBanner
                            },
                            d = this.props.data;
                        d && !d.loading && this.props.firstPageLoaded && d.user && d.user.bannerImageURL ? (n = "channel-banner__image-loaded", t = {
                            backgroundImage: "url(" + d.user.bannerImageURL + ")"
                        }) : (l["channel-banner__image--default"] = !0, t = {
                            backgroundImage: "url(" + S + ")"
                        }), this.props.isSideNavBanner && (i = "channel-banner__side-nav-type");
                        var u = null;
                        if (this.props.canEdit) {
                            var p = this.props.isSideNavBanner ? o.createElement(E.Xa, {
                                display: E.X.Flex,
                                padding: {
                                    x: 3
                                },
                                justifyContent: E.Wa.Between,
                                fullWidth: !0
                            }, o.createElement(E.sb, {
                                asset: E.tb.Edit
                            }), o.createElement(E.W, null, Object(s.d)("Edit", "ChannelBanner"))) : o.createElement(E.Xa, null, o.createElement(E.Xa, null, o.createElement(E.sb, {
                                asset: E.tb.Edit
                            })), Object(s.d)("Update Profile Banner", "ChannelBanner"));
                            u = o.createElement(E.Eb, {
                                className: r("channel-banner__edit-overlay", c),
                                background: E.r.Overlay,
                                position: E.jb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                fullWidth: !0
                            }, o.createElement("button", {
                                className: "channel-banner__edit-overlay-button",
                                "data-test-selector": "channel-banner__edit-overlay-interactable",
                                onClick: this.openModal
                            }, o.createElement(E.Xa, {
                                display: E.X.Flex,
                                alignItems: E.f.Center,
                                flexDirection: E.Aa.Column,
                                justifyContent: E.Wa.Center
                            }, p)))
                        }
                        return e = o.createElement("div", {
                            className: r("channel-banner__image", l),
                            "data-test-selector": n,
                            style: t
                        }, u), o.createElement("div", {
                            className: r("channel-banner", a),
                            "data-test-selector": i,
                            onTransitionEnd: this.props.onTransitionEnd
                        }, o.createElement(E.Pa, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, e))
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.closeModal()
                    }, t
                }(o.Component),
                L = Object(u.a)(I, {
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
                })(x);
            var T, O = Object(y.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                }, function(e) {
                    return Object(C.bindActionCreators)({
                        closeModal: w.c,
                        showModal: w.d
                    }, e)
                })(L),
                D = n("tuvy"),
                P = n("i4un"),
                F = n("dIU+"),
                j = n("GnwI"),
                B = n("Ba7Q"),
                A = n("QjI3"),
                R = (n("BOil"), n("HXcb"));
            n.d(t, "a", function() {
                return H
            }), n.d(t, "b", function() {
                return z
            }), n.d(t, "d", function() {
                return W
            }), n.d(t, "c", function() {
                return Q
            });
            var V, U = l.a.wrap(function() {
                return n.e(145).then(n.bind(null, "g9Rq"))
            }, "EditProfileOverlay");
            ! function(e) {
                e.SocialButtonsDefault = "channel-header__social-buttons-default", e.SocialButtonsVariantB = "channel-header__social-buttons-variant-b"
            }(V || (V = {}));
            var W, X = "channel-header__edit-profile-overlay",
                M = "channel-header__verified-badge",
                G = "channel-header__live-indicator",
                H = "yes",
                z = "browser-notifications-upsell-seen";
            ! function(e) {
                e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
            }(W || (W = {}));
            var q = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.verifiedBadgeElement = o.createElement(E.Yb, {
                            label: Object(s.d)("Verified", "ChannelHeader"),
                            direction: E.ac.Right
                        }, o.createElement(E.Xa, {
                            className: "channel-header__verified",
                            "data-target": M,
                            display: E.X.Flex,
                            alignItems: E.f.Center,
                            margin: {
                                left: 1
                            }
                        }, o.createElement(E.sb, {
                            asset: E.tb.Verified
                        }))), n.ChannelStatusIndicatorElement = o.createElement(E.Xa, {
                            margin: {
                                left: 1
                            },
                            "data-target": G
                        }, o.createElement(E.Yb, {
                            label: Object(s.d)("Live Now", "ChannelHeader"),
                            direction: E.ac.Right
                        }, o.createElement(E.K, {
                            status: E.M.Live,
                            pulse: !0
                        }))), n.onResetOffline = function() {
                            n.resetOfflineTimer = void 0, n.setState({
                                live: !1
                            })
                        }, n.renderAvatarEditButton = function() {
                            return n.props.data && n.props.data.user && n.props.data.user.id && n.props.data.user.login && n.isChannelEditor() ? o.createElement(E.Eb, {
                                className: X,
                                background: E.r.Overlay,
                                position: E.jb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                fullHeight: !0,
                                fullWidth: !0,
                                display: E.X.InlineFlex,
                                alignItems: E.f.Center,
                                justifyContent: E.Wa.Center
                            }, o.createElement(U, {
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
                                            return !s.m.get(z, !1) && Object(v.a)() && Object(b.c)() && s.p.experiments.getAssignment(f.b.BrowserNotificationsUpsell) === H ? [4, g.a.hasPushSubscription()] : [3, 3];
                                        case 1:
                                            return e.sent() ? [3, 3] : (s.m.set(z, !0), this.props.showBrowserNotificationsUpsellModal(), [4, g.a.userSubscribe(k.a.Channel)]);
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
                        this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce)
                    }, t.prototype.updateWidth = function(e) {
                        var t = e !== this.width || this.width !== this.prevWidth;
                        void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (cancelAnimationFrame(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
                    }, t.prototype.render = function() {
                        var e, t, n = 0,
                            i = 0,
                            a = 0,
                            l = s.a.defaultAvatarURL;
                        this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos && this.props.data.user.videos.totalCount || 0, i = this.props.data.user.followers && this.props.data.user.followers.totalCount || 0, a = this.props.data.user.follows && this.props.data.user.follows.totalCount || 0, l = this.props.data.user.profileImageURL || s.a.defaultAvatarURL, e = this.props.data.user.displayName, t = this.props.data.user.roles && this.props.data.user.roles.isPartner);
                        var u, p = this.state.live && !this.isActiveTab(W.Channel),
                            m = this.createChannelLinks(n, i, a),
                            h = {
                                "channel-header__user": !0,
                                "channel-header__user--selected": this.isActiveTab(W.Channel)
                            },
                            f = o.createElement(E.Xa, {
                                display: E.X.Flex,
                                flexWrap: E.Ba.NoWrap,
                                alignItems: E.f.Center,
                                flexShrink: 0
                            }, o.createElement(E.Xa, {
                                className: "channel-header__user-avatar channel-header__user-avatar--active",
                                margin: {
                                    right: 1
                                },
                                display: E.X.Flex,
                                flexShrink: 0,
                                alignItems: E.f.Stretch
                            }, o.createElement(E.Xa, {
                                position: E.jb.Relative
                            }, o.createElement(E.q, {
                                size: 36,
                                src: l,
                                alt: e || ""
                            }), this.renderAvatarEditButton())), e ? o.createElement(E.W, {
                                type: E.Vb.H5
                            }, e) : o.createElement(E.Xa, {
                                alignItems: E.f.Center
                            }, o.createElement(E.ib, {
                                lineCount: 1,
                                width: 120
                            })), p && this.ChannelStatusIndicatorElement, t && this.verifiedBadgeElement);
                        u = this.isActiveTab(W.Channel) ? o.createElement("div", {
                            className: "channel-header__banner-toggle",
                            onClick: this.toggleChannelBanner,
                            "data-target": "channel-header__channel-link",
                            "data-a-target": "user-channel-header-item"
                        }, f) : this.props.channelLogin ? o.createElement(E.U, {
                            to: "/" + this.props.channelLogin || "#",
                            "data-target": "channel-header__channel-link",
                            "data-a-target": "user-channel-header-item",
                            hoverUnderlineNone: !0
                        }, f) : f;
                        var g = this.state.bannerHidden ? E.X.HideAccessible : E.X.Block,
                            v = null,
                            b = this.renderSocialButtons();
                        return this.isActiveTab(W.Channel) && (v = o.createElement(E.Xa, {
                            display: g
                        }, o.createElement(O, {
                            channelLogin: this.props.channelLogin,
                            canEdit: this.isChannelEditor(),
                            collapsed: !this.state.bannerSlideIn,
                            onTransitionEnd: this.completedBannerAnimation
                        }))), o.createElement(E.Xa, {
                            className: "channel-header",
                            flexShrink: 0
                        }, v, o.createElement(E.Xa, {
                            display: E.X.Flex,
                            justifyContent: E.Wa.Between,
                            flexWrap: E.Ba.NoWrap,
                            fullHeight: !0,
                            refDelegate: this.saveChannelHeaderRef,
                            margin: {
                                x: 3
                            }
                        }, o.createElement(E.Xa, {
                            display: E.X.Flex,
                            alignItems: E.f.Stretch,
                            flexShrink: 0,
                            flexWrap: E.Ba.NoWrap,
                            "data-target": "channel-header-left"
                        }, o.createElement(E.Pa, {
                            className: r(h),
                            padding: {
                                y: .5,
                                right: 2
                            },
                            display: E.X.Flex,
                            flexWrap: E.Ba.NoWrap,
                            alignItems: E.f.Center,
                            flexShrink: 0
                        }, u), this.renderTabs(m), o.createElement(E.Xa, {
                            className: "channel-header__item channel-header__item--no-underline",
                            padding: {
                                x: 1
                            },
                            flexShrink: 0,
                            alignSelf: E.g.Center,
                            "data-target": "channel-header-button"
                        }, o.createElement(d.a, {
                            alwaysMountBalloonContent: !0
                        }, o.createElement(E.A, {
                            icon: E.tb.NavMore,
                            ariaLabel: Object(s.d)("More", "ChannelHeader")
                        }), o.createElement(E.u, {
                            direction: E.v.Bottom,
                            noTail: !0
                        }, o.createElement(E.Xa, {
                            padding: {
                                y: 1
                            }
                        }, this.renderDropdown(m)))))), b), o.createElement(c.a, {
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
                            var n = e.count ? o.createElement(E.Xa, {
                                    className: "channel-header__item-count",
                                    display: E.X.Flex,
                                    margin: {
                                        left: .5
                                    }
                                }, o.createElement(E.W, {
                                    type: E.Vb.Span,
                                    fontSize: E.Ca.Size5
                                }, e.count)) : null,
                                i = t.generateUserLink(e.pathSuffix),
                                r = e.label.toLowerCase() + "-channel-header-item";
                            return o.createElement(E.Pa, {
                                key: "channel-header__item--" + e.label,
                                alignItems: E.f.Center,
                                flexShrink: 0
                            }, o.createElement(E.U, {
                                className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : ""),
                                to: i,
                                "data-target": "channel-header-item",
                                "data-a-target": r,
                                "data-test-selector": r,
                                hoverUnderlineNone: !0
                            }, o.createElement(E.Xa, {
                                padding: {
                                    x: 2,
                                    y: .5
                                },
                                display: E.X.Flex
                            }, o.createElement(E.W, {
                                type: E.Vb.Span,
                                fontSize: E.Ca.Size5
                            }, e.label), n)))
                        })
                    }, t.prototype.renderDropdown = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            var n = e.count ? o.createElement(E.Xa, {
                                    className: "channel-header__item-count",
                                    display: E.X.Flex,
                                    margin: {
                                        left: .5
                                    }
                                }, o.createElement(E.W, {
                                    type: E.Vb.Span
                                }, e.count)) : null,
                                i = t.generateUserLink(e.pathSuffix);
                            return o.createElement(E.Xa, {
                                key: "channel-header__dropdown-item--" + e.label,
                                "data-target": "channel-header-dropdown-item"
                            }, o.createElement(E.Ua, {
                                linkTo: i,
                                disabled: "#" === i
                            }, o.createElement(E.Xa, {
                                className: "channel-header__dropdown-hover-target",
                                padding: {
                                    y: .5,
                                    x: 1
                                },
                                display: E.X.Flex
                            }, o.createElement(E.W, {
                                type: E.Vb.Span
                            }, e.label), n)))
                        })
                    }, t.prototype.createChannelLinks = function(e, t, n) {
                        var i = [{
                            label: Object(s.d)("Videos", "ChannelHeader"),
                            count: Object(s.f)(e),
                            pathSuffix: Object(D.b)() ? "videos" : "videos/all",
                            isSelected: this.isActiveTab(W.Videos)
                        }];
                        return Object(D.b)() || Object(D.a)() || (i = i.concat([{
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
                            n = V.SocialButtonsDefault;
                        if (Object(P.c)()) {
                            var i = r("channel-header__follow-btn", {
                                    "channel-header__follow-btn--following": !!this.state.showLiveNotificationsButton
                                }),
                                a = r("channel-header__notification-toggle-container", {
                                    "channel-header__notification-toggle-container--visible": !!this.state.showLiveNotificationsButton
                                });
                            n = V.SocialButtonsVariantB, t = o.createElement(o.Fragment, null, o.createElement(E.Xa, {
                                className: "channel-header__follow-btn-container",
                                display: E.X.Flex,
                                overflow: E.cb.Hidden,
                                alignItems: E.f.Center,
                                padding: {
                                    x: 1
                                },
                                fullHeight: !0
                            }, o.createElement(E.Xa, {
                                display: E.X.Flex,
                                justifyContent: E.Wa.Center,
                                flexDirection: E.Aa.Column,
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(E.Xa, {
                                display: E.X.InlineFlex,
                                justifyContent: E.Wa.Center
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
                                animatedButton: !0,
                                useContextualModals: !0
                            })))), o.createElement("div", {
                                className: a
                            }, o.createElement(B.a, {
                                channelLogin: this.props.channelLogin,
                                toggleType: B.b.Button,
                                tabIndex: this.state.showLiveNotificationsButton ? 0 : -1,
                                followData: this.getFollowData(),
                                showTooltips: !0
                            }))), o.createElement(E.Xa, null, o.createElement(A.a, {
                                updateContainerWidth: this.onUpdateDebounce,
                                channelLogin: this.props.channelLogin,
                                hideEsportsSubscription: this.props.hideEsportsSubscription,
                                subscribedButtonType: E.F.Default,
                                unsubscribedButtonType: e ? E.F.Default : E.F.Hollow,
                                forceIcon: !0
                            })))
                        } else(this.props.channelIsHosting || Object(P.e)()) && (n = V.SocialButtonsDefault, t = o.createElement(o.Fragment, null, o.createElement(E.Xa, {
                            display: E.X.Flex,
                            alignItems: E.f.Stretch,
                            margin: {
                                left: 1
                            }
                        }, o.createElement(F.a, {
                            updateContainerWidth: this.onUpdateDebounce,
                            channelLogin: this.props.channelLogin,
                            onFollow: this.maybeShowBrowserNotificationsUpsell,
                            followUIType: F.b.IconAndText,
                            unfollowUIType: F.b.IconOnly,
                            useContextualModals: !0
                        })), o.createElement(E.Xa, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(A.a, {
                            updateContainerWidth: this.onUpdateDebounce,
                            channelLogin: this.props.channelLogin,
                            hideEsportsSubscription: this.props.hideEsportsSubscription
                        }))));
                        return o.createElement(E.Xa, {
                            display: E.X.Flex,
                            flexWrap: E.Ba.NoWrap,
                            flexShrink: 0,
                            alignItems: E.f.Center,
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
                Q = Object(a.compose)(Object(u.a)(R, {
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
                        return e.channelLogin ? Object(h.H)(e.channelLogin) : ""
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    },
                    mapMessageTypesToProps: (T = {}, T[m.PubsubMessageType.ViewCount] = "viewCount", T)
                }]), Object(j.b)("ChannelHeader"))(q)
        },
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
                return i.createElement(a.W, {
                    type: a.Vb.Strong
                }, e)
            }

            function l(e, t) {
                return i.createElement(a.U, {
                    to: t,
                    targetBlank: !0
                }, e)
            }

            function c(e, t) {
                return i.createElement(a.U, {
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
            r.p.store.registerReducer("collections", function(e, t) {
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
                        }, r.createElement(u.Eb, {
                            className: "browser-push-notifications-upsell",
                            alignItems: u.f.Center,
                            justifyContent: u.Wa.Center,
                            position: u.jb.Fixed,
                            display: u.X.Flex,
                            background: u.r.Overlay,
                            fullHeight: !0,
                            fullWidth: !0,
                            attachTop: !0,
                            attachLeft: !0
                        }, r.createElement(u.Xa, {
                            className: "browser-push-notifications-upsell__container",
                            display: u.X.Flex,
                            textAlign: u.Rb.Center,
                            padding: {
                                x: 1
                            },
                            position: u.jb.Relative
                        }, r.createElement(u.i, {
                            type: u.n.SlideInBottom,
                            duration: u.k.Long,
                            timing: u.m.EaseInOut,
                            enabled: !0
                        }, r.createElement(u.W, {
                            type: u.Vb.H3,
                            fontSize: u.Ca.Size3,
                            lineHeight: u.Ya.Body
                        }, Object(s.d)("Don't miss out when your favorite streamers go live!", "BrowserNotificationsUpsellModal")), r.createElement(u.Xa, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(u.W, {
                            type: u.Vb.H4,
                            fontSize: u.Ca.Size4,
                            color: u.O.OverlayAlt,
                            lineHeight: u.Ya.Body
                        }, Object(s.d)("Turn on Browser Notifications to get updates even when your browser window is minimized", "BrowserNotificationsUpsellModal")))), r.createElement(u.Xa, {
                            className: "browser-push-notifications-upsell__arrow",
                            position: u.jb.Absolute,
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
                                                        value: "platform"
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
                    end: 371
                }
            };
            n.loc.source = {
                body: "query ChannelPage_SubscribeButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nsubscriptionProducts {\nid\nemoteSetID\nname\nself {\npaidUpgradePromotion {\nnewPrice\n}\n}\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\npaidUpgrade {\nprice\nstartsAt\ntier\n}\ngift {\nisGift\n}\n}\n}\n}\ncurrentUser {\nid\n}\nrequestInfo {\ncountryCode\n}\n}",
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