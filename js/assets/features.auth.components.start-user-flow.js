(window.webpackJsonp = window.webpackJsonp || []).push([
    [51, 72], {
        "+qcr": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "f", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            });
            var a = n("q1tI"),
                r = n("OUrp"),
                i = n("eFQ3");

            function o(e) {
                switch (e.type) {
                    case r.b.Stream:
                        return a.createElement(i.b, {
                            channelLogin: e.id,
                            vodID: "",
                            showChannelInfoOnHover: e.showChannelInfoOnHover,
                            disableTheatreButton: !0,
                            playerTypeOverride: i.a.Frontpage,
                            onInit: e.onPlayerInit,
                            onDestroy: e.onPlayerDestroy,
                            onPauseToggled: e.onPauseToggled,
                            paused: e.paused
                        });
                    case r.b.Vod:
                        return a.createElement(i.b, {
                            channelLogin: "",
                            vodID: e.id,
                            disableTheatreButton: !0,
                            playerTypeOverride: i.a.Frontpage,
                            onInit: e.onPlayerInit,
                            onDestroy: e.onPlayerDestroy,
                            onVideoTimeChange: e.onVideoTimeChange,
                            onPauseToggled: e.onPauseToggled,
                            paused: e.paused
                        });
                    default:
                        return null
                }
            }

            function s(e) {
                var t = [],
                    n = e.featuredStreams;
                if (!n) return t;
                for (var a = 0, i = n; a < i.length; a++) {
                    var o = i[a];
                    if (o) {
                        var s = "",
                            l = null;
                        o.stream && o.stream.game && null !== o.stream.game.name && (s = o.stream.game.name), o.stream && o.stream.broadcaster && (l = o.stream.broadcaster);
                        var c = {
                            broadcaster: {
                                displayName: l && l.displayName ? l.displayName : "",
                                id: l && l.id ? l.id : "",
                                login: l && l.login ? l.login : "",
                                profileImageURL: l && l.profileImageURL ? l.profileImageURL : ""
                            },
                            content: {
                                id: l && l.login ? l.login : "",
                                gameName: s,
                                previewImageURL: o.stream && o.stream.previewImageURL ? o.stream.previewImageURL : "",
                                type: r.b.Stream,
                                subType: o.stream && o.stream.type ? o.stream.type : "",
                                viewersCount: o.stream && o.stream.viewersCount ? o.stream.viewersCount : 0
                            },
                            description: "",
                            imageURL: o.imageURL || "",
                            isScheduled: o.isScheduled || !1,
                            isSponsored: o.isSponsored || !1,
                            priorityLevel: o.priorityLevel || 10,
                            title: o.title || ""
                        };
                        t.push(c)
                    }
                }
                return t
            }

            function l(e) {
                return {
                    medium: "twitch_home",
                    content: e ? "carousel_promo" : "carousel_backfill"
                }
            }

            function c(e, t) {
                return t >= 0 ? t % e : (t % e + e) % e
            }

            function d(e, t) {
                return Math.floor(t / e)
            }

            function u(e) {
                return e && /^https:\/\/[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(e)
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
                r = n("/7QA"),
                i = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = r.n.getLastPageview();
                    return e && e.location || i.PageviewLocation.None
                },
                l = function(e) {
                    r.n.trackItemSectionClick({
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
                    r.n.trackItemSectionClick({
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
                        return a.__generator(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    return p.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return a.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return a.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, r.o.apollo.client.query({
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
                                    }), r.n.trackItemSectionLoad({
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
        "44NB": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "c", function() {
                return p
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("2xye"),
                o = "google_calendar",
                s = "backfill";

            function l(e) {
                var t = {};
                e.forEach(function(e, n) {
                    t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName, t["carousel_slot_" + n + "_ccu"] = e.content.viewersCount, t["carousel_slot_" + n + "_type"] = e.content.subType, e.isScheduled ? t["carousel_slot_" + n + "_source"] = o : t["carousel_slot_" + n + "_source"] = s
                }), r.n.track(i.SpadeEventType.FrontPageCarouselDisplay, t)
            }

            function c(e) {
                r.n.track(i.SpadeEventType.FrontPageCarouselClick, e)
            }

            function d(e, t) {
                var n = a.__assign({
                    clicked_element: t
                }, e);
                r.n.track(i.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
            }

            function u(e) {
                r.n.track(i.SpadeEventType.FrontPageCarouselPromotionCardView, e)
            }

            function p(e) {
                r.n.track(i.SpadeEventType.FrontPageCarouselNavButtonClick, {
                    direction: e
                })
            }
        },
        "49TI": function(e, t, n) {},
        "4S1L": function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n("/7QA"),
                i = n("J4y2"),
                o = n("eJ65"),
                s = n("GnwI"),
                l = n("Ue10"),
                c = (n("49TI"), function() {
                    return a.createElement(l.Va, {
                        className: "footer",
                        padding: {
                            y: 3
                        }
                    }, a.createElement(l.Va, {
                        className: "footer__link-container",
                        display: l.W.Flex,
                        alignItems: l.f.Center,
                        justifyContent: l.Ua.Center,
                        flexWrap: l.Z.Wrap,
                        margin: "auto",
                        padding: {
                            y: 3
                        }
                    }, a.createElement(l.Va, {
                        className: "footer__glitch",
                        display: l.W.Flex,
                        alignItems: l.f.Center,
                        margin: {
                            right: 2
                        }
                    }, a.createElement(l.mb, {
                        asset: l.nb.LogoGlitch,
                        width: 30,
                        height: 30
                    })), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/about/",
                        "data-a-target": "frontpage-footer-about-link"
                    }, Object(r.d)("About", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://blog.twitch.tv/",
                        "data-a-target": "frontpage-footer-blog-link"
                    }, Object(r.d)("Blog", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/products/turbo/ticket?ref=footer",
                        "data-a-target": "frontpage-footer-turbo-link"
                    }, Object(r.d)("Turbo", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://music.twitch.tv/",
                        "data-a-target": "frontpage-footer-music-link"
                    }, Object(r.d)("Music", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "http://twitchadvertising.tv/",
                        "data-a-target": "frontpage-footer-advertising-link"
                    }, Object(r.d)("Advertise", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://dev.twitch.tv/",
                        "data-a-target": "frontpage-footer-developers-link"
                    }, Object(r.d)("Developers", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/partners/",
                        "data-a-target": "frontpage-footer-partners-link"
                    }, Object(r.d)("Partners", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/platforms/",
                        "data-a-target": "frontpage-footer-mobile-link"
                    }, Object(r.d)("Mobile", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/jobs/",
                        "data-a-target": "frontpage-footer-jobs-link"
                    }, Object(r.d)("Jobs", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://help.twitch.tv/",
                        "data-a-target": "frontpage-footer-help-link"
                    }, Object(r.d)("Help", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/terms-of-service/",
                        "data-a-target": "frontpage-footer-terms-link"
                    }, Object(r.d)("Terms", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/privacy-policy/",
                        "data-a-target": "frontpage-footer-privacy-link"
                    }, Object(r.d)("Privacy Policy", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/ad-choices/",
                        "data-a-target": "frontpage-footer-choices-link"
                    }, Object(r.d)("Ad Choices", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/cookie-policy/",
                        "data-a-target": "frontpage-footer-cookie-link"
                    }, Object(r.d)("Cookie Policy", "Footer"))), a.createElement(l.Va, {
                        margin: {
                            left: 5
                        }
                    }, a.createElement(o.a, null, a.createElement("span", {
                        className: "footer__link",
                        "data-a-target": "frontpage-footer-language-link"
                    }, Object(r.d)("Language", "Footer")), a.createElement(l.u, {
                        "data-a-target": "frontpage-footer-language-options",
                        size: l.w.Medium,
                        direction: l.v.TopRight
                    }, a.createElement(i.a, null))))))
                }),
                d = Object(s.c)("Footer", {
                    autoReportInteractive: !0
                })(c);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return d
            })
        },
        "5NSO": function(e, t, n) {},
        "5cmV": function(e, t, n) {},
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
                    case r.ClockHM:
                    case r.ClockHMS:
                        var v = (m ? c(f, 2) : f) + p + c(h, 2);
                        return t === r.ClockHMS && (v += p + c(g, 2)), v;
                    case r.ClockMS:
                        return (m ? c(h, 2) : h) + p + c(g, 2)
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
        "6H22": function(e, t, n) {
            e.exports = n.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "80G/": function(e, t, n) {},
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
        },
        AZIu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var a, r = n("/7QA"),
                i = n("2xye");

            function o(e) {
                var t = {
                    section: e.section,
                    tag_position: e.tagPosition,
                    item_page: "browse",
                    search_event: e.searchEvent,
                    tag_id: e.tagId,
                    dismiss: e.dismiss
                };
                r.n.track(i.SpadeEventType.BrowseFilter, t)
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
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        BIFG: function(e, t, n) {},
        CCqK: function(e, t, n) {},
        EZOg: function(e, t, n) {},
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("/MKj"),
                s = n("TSYQ"),
                l = n("YhoA"),
                c = n("Ue10"),
                d = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        a = e.game.toLowerCase(),
                        i = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = a === l.a.CounterStrike, t)),
                        o = a === l.a.CounterStrike ? 40 : 20;
                    return r.createElement(c.Va, {
                        className: i
                    }, r.createElement("div", {
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
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return a.__extends(t, e), t.prototype.render = function() {
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
                        }, r.createElement(c.S, a.__assign({}, e))), r.createElement(c.xb, {
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
                        }, r.createElement(c.V, null, Object(g.b)(this.props.gameChange.duration)))))))
                    }, t
                }(r.Component)),
                f = n("0INk"),
                v = n("8/mp"),
                b = n("eJ65"),
                k = (n("vDRX"), function(e) {
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
                            Object(f.a)(e)
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
                        }, r.createElement(c.V, null, Object(i.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(c.Va, {
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
                        }, Object(i.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(c.Va, {
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
                            return r.createElement(h, {
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
                _ = n("2xye"),
                C = function(e) {
                    return r.createElement(c.Va, null, r.createElement(c.V, {
                        color: c.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, a) {
                        return r.createElement(c.Na, {
                            key: n
                        }, r.createElement(c.T, {
                            to: {
                                pathname: Object(y.c)(t.label),
                                state: {
                                    content: _.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: c.U.Inherit
                        }, t.label, w(n, a.length - 1) ? null : ", "))
                    })))
                },
                w = function(e, t) {
                    return e === t
                },
                E = n("N0BP"),
                S = (n("XA5B"), function(e) {
                    var t = r.createElement(c.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: c.x.Small,
                        overflow: c.Ya.Hidden
                    }, r.createElement(c.o, {
                        ratio: e.aspect || c.p.BoxArt,
                        align: c.d.Center
                    }, r.createElement(c.S, a.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(c.T, a.__assign({}, Object(E.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            S.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var x, O = function(e) {
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
                T = (n("m493"), function(e) {
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
                    var i = 1,
                        o = null;
                    return e.topBar && (o = r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(O, a.__assign({}, e.topBar))), i = 3), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
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
                I = (n("kF1+"), function(e) {
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
                        }), r.createElement("div", a.__assign({}, e, {
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
                        }, r.createElement(c.S, a.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : r.createElement("div", {
                            className: n
                        }, r.createElement(c.S, a.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(r.Component)),
                V = Object(L.c)("PreviewCardThumbnail")(N),
                P = (n("80G/"), function(e) {
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
                    })), r.createElement("div", null, r.createElement(c.T, a.__assign({}, Object(E.a)(e), {
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
                F = n("H1ft"),
                A = n("ZbA5"),
                j = n("QVaV"),
                D = n("hyVY"),
                R = n("MXoD"),
                B = n("0LAi"),
                G = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(x || (x = {}));
            var M, U, W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(i.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(i.d)("unlocked", "VideoPreviewCardRestriction") : Object(i.d)("locked", "VideoPreviewCardRestriction"),
                        a = t ? c.nb.Unlock : c.nb.Lock;
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
                        "data-test-selector": x.LockSelector
                    }, r.createElement(c.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(c.V, {
                        color: c.O.Overlay,
                        fontSize: c.Aa.Size5,
                        "data-test-selector": x.UpsellSelector
                    }, Object(i.d)("View with {title}", {
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
                        asset: a,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            n("5NSO");

            function z(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function H(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(M || (M = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(U || (U = {}));
            var q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(G.b)(), t.getTrackingContext = function(e) {
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
                        }, Object(E.a)(this.props)), r.createElement(c.xb, {
                            position: c.db.Relative,
                            borderRadius: c.x.Medium,
                            overflow: c.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(c.T, {
                            to: Object(R.a)(this.getTrackingContext(_.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(V, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: z(this.props) && this.props.animatedImageProps || void 0,
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
                        }, r.createElement(this.props.contextualCardActionProps.component, a.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(T, {
                            topLeft: r.createElement(A.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(I, {
                                value: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : z(this.props) ? r.createElement(T, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(I, {
                                value: Object(D.b)(this.props.durationInSeconds),
                                icon: c.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(I, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(I, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(I, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : H(this.props) ? r.createElement(T, {
                            topLeft: r.createElement(I, {
                                value: Object(D.b)(this.props.durationInSeconds),
                                icon: c.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(I, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(I, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return z(this.props) && this.props.listPosition ? Object(i.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return z(this.props) || H(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === U.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(S, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(R.a)(this.getTrackingContext(_.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: c.p.BoxArt,
                            "data-test-selector": M.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === U.SingleGameList || this.props.context === U.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(S, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(R.a)(this.getTrackingContext(_.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: c.p.Aspect1x1,
                            "data-test-selector": M.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(j.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(R.a)(this.getTrackingContext(_.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), H(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(i.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : z(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== U.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(R.a)(this.getTrackingContext(_.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(P, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(R.a)(this.getTrackingContext(_.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(c.Va, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(B.a, a.__assign({}, this.props.tagListProps, {
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
                        return z(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(W, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!z(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === F.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, a) {
                        switch (e) {
                            case F.a.Balloon:
                                return r.createElement(k, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: a
                                });
                            case F.a.Inline:
                                return r.createElement(C, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case F.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                Y = Object(L.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(q);
            n.d(t, !1, function() {
                return M
            }), n.d(t, "b", function() {
                return U
            }), n.d(t, !1, function() {
                return q
            }), n.d(t, "a", function() {
                return Y
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
                switch (r.o.experiments.getAssignment(i.b.Archer)) {
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
            var a = "directory.LANGUAGE_TAGS_UPDATED",
                r = "directory.LOL_CHAMPIONS_CHANGED",
                i = "directory.LOL_CHAMPIONS_LOADING",
                o = "directory.LOL_CHAMPIONS_ERRORED",
                s = "directory.TAG_FILTER_ADDED",
                l = "directory.TAG_FILTER_CHANGED",
                c = "directory.TAG_FILTER_REMOVED";

            function d(e) {
                return {
                    type: a,
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
                for (var a in n) n.hasOwnProperty(a) && (t[n[a].id] = n[a]);
                return {
                    type: r,
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
        MV3Z: function(e, t, n) {},
        OUrp: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            });
            var a, r, i = "carousel-player__main-description",
                o = "carousel-player-left-button",
                s = "carousel-player-right-button";
            ! function(e) {
                e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
            }(a || (a = {})),
            function(e) {
                e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
            }(r || (r = {}))
        },
        On2s: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return v
            });
            var a, r = n("mrSG"),
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
            }(a || (a = {}));
            var v = function(e, t) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var n, a, o, s, l, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = t.toLowerCase(), a = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, a && n === m.a.CounterStrike ? [4, b(a)] : [3, 2];
                                case 1:
                                    return [2, r.sent()];
                                case 2:
                                    return o && n === m.a.Hearthstone ? [4, k(o)] : [3, 4];
                                case 3:
                                    return [2, r.sent()];
                                case 4:
                                    return l && n === m.a.Overwatch ? [4, y(l)] : [3, 6];
                                case 5:
                                    return [2, r.sent()];
                                case 6:
                                    if (s && n === m.a.LeagueOfLegends && (c = i.o.store.getState()).directory)
                                        if (c.directory.leagueOfLegends.championsMap) {
                                            if (c.directory.leagueOfLegends.championsMap) return [2, _(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                        } else i.o.store.dispatch(Object(p.b)());
                                    r.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                b = function(e) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var t, n, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(h.a)()];
                                case 1:
                                    return t = r.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
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
                                    return a = r.sent(), f.error(a, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                k = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(h.b)()];
                                case 1:
                                    return t = r.sent(), n = {}, t[0].Class.forEach(function(e) {
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
                                    return a = r.sent(), f.error(a, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, a, i, o, s, l, c, d, p, m, v;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(h.d)()];
                                case 1:
                                    for (n = r.sent(), a = void 0, i = 0, o = n; i < o.length; i++)
                                        for (s in a = o[i])
                                            if (a.hasOwnProperty(s))
                                                for (l = a[s], c = 0, d = l; c < d.length; c++)
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
                                    return v = r.sent(), f.error(v, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                _ = function(e, t, n) {
                    if (!t || !e) return null;
                    var a = t[e],
                        r = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + a.image.sprite;
                    return {
                        name: a.name,
                        label: Object(g.b)(g.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: a.image.w,
                            imageHeight: a.image.h,
                            spriteOffsetX: a.image.x,
                            spriteOffsetY: a.image.y,
                            spriteURL: r
                        }
                    }
                }
        },
        Pcnk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a, r = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(a || (a = {}));
            var i = function(e) {
                switch (e) {
                    case a.CSGOMap:
                        return Object(r.d)("Map", "CSGOMapFilter");
                    case a.CSGOSkillGroup:
                        return Object(r.d)("Rank", "CSGORankFilter");
                    case a.HearthstoneClass:
                        return Object(r.d)("Class", "HearthstoneClassFilter");
                    case a.HearthstoneMode:
                        return Object(r.d)("Mode", "HearthstoneModeFilter");
                    case a.LeagueChampion:
                        return Object(r.d)("Champion", "LeagueFilter");
                    case a.OverwatchCharacter:
                        return Object(r.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
        },
        QzrU: function(e, t, n) {},
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
                p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
                m = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
                g = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = o.j.withCategory("ad-slot"), n.createSlot = function(e) {
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
                                if (n.props.slotID === c.b.directory.banner) return void((a = n.slotRef.querySelector(p)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                if (n.props.slotID === c.b.directory.rectangle) return void((a = n.slotRef.querySelector(m)) && 1 !== a.clientWidth && n.setState({
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
        VzB4: function(e, t, n) {},
        X7a7: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("cr+I"),
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
                        return a.__awaiter(e, void 0, void 0, function() {
                            var e, n, s, d, u, p;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        e = i.o.logger.withCategory("leagueoflegends-api"), t(Object(c.k)(!0)), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), n = i.o.intl.getLanguageCode(), s = l(n), d = o.a.getAPIURL("/api/lol/champions?" + r.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, o.a.get(d)];
                                    case 2:
                                        return (u = a.sent()).body ? t(Object(c.l)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.j)(!0))), [3, 4];
                                    case 3:
                                        throw p = a.sent(), t(Object(c.j)(!0)), e.error(p, "Failed to load LoL champion data"), p;
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
                return function(r) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, o;
                        return a.__generator(this, function(a) {
                            return n = new Set(f()), t ? n.add(e) : n.delete(e), o = Array.from(n), i.l.set(d, o), r(Object(c.i)(o)), [2]
                        })
                    })
                }
            }

            function h(e) {
                var t = this;
                return function(n) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
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
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
                }(a || (a = {}))
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var a, r, i, o, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("oB8h"),
                p = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((a = {})[u.a.Live] = "stream-type-indicator--live", a[u.a.Premiere] = "stream-type-indicator--premiere", a[u.a.Rerun] = "stream-type-indicator--rerun", a[u.a.WatchParty] = "stream-type-indicator--rerun", a),
                g = ((r = {})[u.a.Premiere] = p.nb.VideoPremiere, r[u.a.Rerun] = p.nb.VideoRerun, r[u.a.WatchParty] = p.nb.VideoRerun, r),
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
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            var r, i, o, s;
                            return a.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, r), o = a.__assign({}, t, {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            var r;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((r = i.sent()).requestError) throw r.requestError;
                                        if (r.error) throw new Error("Error while sending legacy-api request: " + r.error.status + " - " + r.error.message);
                                        return [2, a.__assign({}, r, {
                                            body: r.body
                                        })];
                                    case 2:
                                        throw i.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, r.o.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return a.__awaiter(this, void 0, Promise, function() {
                            var t, n, r, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = a.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return r = a.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = r), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(n) {
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
                            headers: a.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = r.o.store.getState(),
                            a = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": r.o.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (a["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(i.e)(n);
                        return o && (a.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (a["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            a[e] && delete a[e]
                        }), a
                    }, e.logger = r.o.logger.withCategory("legacy-api"), e
                }()
        },
        "cH/u": function(e, t, n) {},
        cRsL: function(e, t, n) {},
        d34l: function(e, t, n) {},
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
        isum: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "AnonFront_FeaturedGames"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isTagsExperiment"
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
                                value: "games"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "11"
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
                                                        value: "viewersCount"
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
                                                                    value: "isTagsExperiment"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 288
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery AnonFront_FeaturedGames($isTagsExperiment: Boolean!) {\ngames(first: 11) {\nedges {\nnode {\nid\nname\nviewersCount\nboxArtURL(width: 285 height: 380)\ntags(tagType: CONTENT) @include(if: $isTagsExperiment) {\n...tagFragment\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        lRiI: function(e, t, n) {},
        m493: function(e, t, n) {},
        mz1O: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
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
            var a = n("mrSG"),
                r = function() {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
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
        "oE+Y": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "AnonFrontPage_TopChannels"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "platformType"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "PlatformType"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isTagsExperiment"
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
                                    value: "6"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "platformType"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "platformType"
                                    }
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
                                                        value: "viewersCount"
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
                                                        value: "tags"
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
                                                                    value: "isTagsExperiment"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 451
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery AnonFrontPage_TopChannels($platformType: PlatformType $isTagsExperiment: Boolean!) {\nstreams(first: 6 platformType: $platformType) {\nedges {\nnode {\nid\ngame {\nid\nname\nboxArtURL(width: 285 height: 380)\n}\nviewersCount\ntitle\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ntags @include(if: $isTagsExperiment) {\n...tagFragment\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        oJov: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return r.createElement(o.Va, a.__assign({
                        className: "drops-badge",
                        position: o.db.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.bc)(e)), r.createElement(o.Qb, {
                        direction: o.Sb.Top,
                        align: o.Rb.Right,
                        label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                    }, r.createElement(o.xb, {
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
                    }, r.createElement(o.T, {
                        type: o.U.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, r.createElement(o.mb, {
                        asset: o.nb.Drops
                    })))))
                }),
                l = n("0LAi"),
                c = n("fVj5"),
                d = function(e) {
                    return r.createElement(o.Va, null, r.createElement(o.y, a.__assign({}, e)), Object(c.a)() && e.tagListProps && 0 !== e.tagListProps.tags.length && r.createElement(o.Va, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(l.a, a.__assign({}, e.tagListProps, {
                        tagNumberLimit: 3
                    }))), !0 === e.showDropsBadge && r.createElement(s, null))
                };
            n.d(t, "a", function() {
                return d
            })
        },
        odjZ: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("fvjX"),
                s = n("yR8l"),
                l = n("Ue10"),
                c = (n("BIFG"), n("BEfv"));
            ! function(e) {
                e.Bounce = "animated-tag--bounce", e.NoBounce = "animated-tag--no-bounce"
            }(a || (a = {}));
            var d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        if (this.props.getTagFromGQL) {
                            if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.contentTag) return null;
                            var t = this.props.data.contentTag;
                            e = i.createElement(l.Ga, {
                                label: t.localizedName,
                                onClick: this.props.onClickForGQLTag && this.props.onClickForGQLTag.bind(this, t),
                                selected: !0,
                                size: l.Qa.Large
                            })
                        } else this.props.formTagProps && (e = i.createElement(l.Ga, r.__assign({}, this.props.formTagProps)));
                        return i.createElement("div", {
                            className: a.NoBounce,
                            "data-tag-filter": this.props.tagID
                        }, e)
                    }, t
                }(i.Component),
                u = Object(o.compose)(Object(s.a)(c, {
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
                }))(d);
            n.d(t, "b", function() {
                return a
            }), n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
            })
        },
        "pR+Y": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FeaturedStreams"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "language"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "first"
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
                                value: "acceptedMature"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "featuredStreams"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "language"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "acceptedMature"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "acceptedMature"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
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
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isScheduled"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isSponsored"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "priorityLevel"
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
                                                            value: "150"
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
                                                value: "type"
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
                    end: 347
                }
            };
            n.loc.source = {
                body: "query FeaturedStreams($language: String $first: Int $acceptedMature: Boolean) {\nfeaturedStreams(language: $language first: $first acceptedMature: $acceptedMature) {\ndescription\nimageURL\nisScheduled\nisSponsored\npriorityLevel\nstream {\nbroadcaster {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\ngame {\nid\nname\n}\nid\ntype\nviewersCount\n}\ntitle\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        rzjD: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/MKj"),
                o = n("mf+E"),
                s = n("fvjX"),
                l = n("1/iK"),
                c = n("y5D0"),
                d = n("kRBY"),
                u = n("wh8/"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.isLoggedIn || this.props.start()
                    }, t.prototype.render = function() {
                        return this.props.isLoggedIn ? r.createElement(o.a, {
                            to: "/"
                        }) : r.createElement(u.AnonFrontPage, a.__assign({}, this.props))
                    }, t
                }(r.Component);

            function m(e) {
                return {
                    isLoggedIn: Object(d.f)(e)
                }
            }
            var g = Object(i.connect)(m, function(e) {
                    return Object(s.bindActionCreators)({
                        start: function() {
                            return Object(c.e)(l.a.StartUserFlow)
                        }
                    }, e)
                })(p),
                h = Object(i.connect)(m, function(e) {
                    return Object(s.bindActionCreators)({
                        start: function() {
                            return Object(c.g)(l.a.StartUserFlow)
                        }
                    }, e)
                })(p);
            n.d(t, "StartLogin", function() {
                return g
            }), n.d(t, "StartSignup", function() {
                return h
            })
        },
        sdyv: function(e, t, n) {},
        sqxy: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("GFmA"),
                o = n("oB8h"),
                s = n("Ue10"),
                l = (n("5cmV"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", a.__assign({
                            className: "live-channel-card"
                        }, Object(s.bc)(this.props)), r.createElement(i.a, {
                            context: i.b.MixedGameAndChannelList,
                            title: this.props.title,
                            linkTo: this.props.linkTo,
                            onVideoTitleClick: this.props.onClick,
                            thumbnailImageProps: {
                                src: this.props.imageSrc,
                                alt: this.props.imageAlt
                            },
                            onThumbnailClick: this.props.onClick,
                            channelDisplayName: this.props.channelDisplayName,
                            channelLogin: this.props.channelLogin,
                            channelLinkTo: this.props.channelNameLinkTo,
                            onChannelLoginClick: this.props.onClick,
                            channelImageProps: {
                                src: this.props.channelImageSrc || "",
                                alt: this.props.channelDisplayName
                            },
                            gameTitle: this.props.gameTitle,
                            gameTitleLinkTo: this.props.gameLinkTo,
                            gameBoxArtImageProps: {
                                src: this.props.gameImageSrc,
                                alt: this.props.gameTitle
                            },
                            playerMetadata: this.props.streamMetadata || void 0,
                            playerMetadataGame: this.props.streamMetadata ? this.props.gameTitle : void 0,
                            streamType: this.props.streamType || o.a.Live,
                            currentViewerCount: this.props.viewerCount,
                            hostedByChannelLogin: this.props.hostedByChannelLogin,
                            tagListProps: this.props.tagListProps
                        }))
                    }, t
                }(r.Component)),
                c = l;
            n.d(t, !1, function() {
                return l
            }), n.d(t, "a", function() {
                return c
            })
        },
        vDRX: function(e, t, n) {},
        "wh8/": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                r = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("gvGA"),
                l = n("4S1L"),
                c = n("V+GM"),
                d = n("NvVO"),
                u = n("MPw5"),
                p = n("2xye"),
                m = n("Uive"),
                g = n("cTNz"),
                h = n("yR8l"),
                f = n("TSYQ"),
                v = n("/0dD"),
                b = n("76Lv"),
                k = n("OUrp"),
                y = n("+qcr"),
                _ = n("GnwI"),
                C = n("Ue10"),
                w = (n("d34l"), "carousel-card-live"),
                E = "carousel-card-vod",
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderIndicator = function() {
                            return t.props.item.content.type === k.b.Stream ? i.createElement(C.K, {
                                status: C.M.Live,
                                size: C.L.Small,
                                "data-test-selector": w
                            }) : i.createElement(C.mb, {
                                asset: C.nb.GlyphViews,
                                "data-test-selector": E
                            })
                        }, t.itemClick = function() {
                            t.props.itemClick(t.props.item)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = f({
                                "carousel-nav__item": !0,
                                "carousel-nav__item--active": this.props.itemActive
                            }),
                            t = Object(y.d)(this.props.item.imageURL) ? this.props.item.imageURL : this.props.item.broadcaster.profileImageURL;
                        return i.createElement(C.Va, {
                            className: e,
                            margin: {
                                x: .5
                            },
                            padding: {
                                bottom: .5
                            },
                            flexGrow: 1,
                            position: C.db.Relative
                        }, i.createElement(C.Qb, {
                            label: (this.props.item.isSponsored ? Object(o.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                            direction: C.Sb.Top,
                            display: C.W.Block
                        }, i.createElement(C.Sa, r.__assign({
                            onClick: this.itemClick
                        }, Object(C.bc)(this.props)), i.createElement(C.o, {
                            ratio: C.p.Aspect16x9
                        }, i.createElement(C.Va, {
                            className: "carousel-nav__img-container",
                            fullHeight: !0
                        }, i.createElement(C.Va, {
                            className: "carousel-nav__meta",
                            zIndex: C.ac.Above,
                            alignItems: C.f.Center,
                            position: C.db.Absolute,
                            attachBottom: !0,
                            margin: {
                                left: .5
                            }
                        }, this.renderIndicator(), i.createElement(C.Va, {
                            display: C.W.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, i.createElement(C.V, {
                            color: C.O.Overlay,
                            type: C.Nb.Span
                        }, Object(o.e)(this.props.item.content.viewersCount)))), i.createElement("img", {
                            className: "carousel-nav__img",
                            "data-content-id": this.props.item.content.id,
                            src: t,
                            alt: this.props.item.broadcaster.displayName,
                            "data-a-target": "carousel-image"
                        }), this.props.item.isSponsored ? i.createElement(C.Va, {
                            position: C.db.Absolute,
                            attachRight: !0,
                            attachTop: !0
                        }, i.createElement(C.mb, {
                            asset: C.nb.Featured,
                            type: C.ob.Brand,
                            width: 20,
                            height: 20
                        })) : "")))))
                    }, t
                }(i.Component),
                x = Object(_.c)("CarouselCard")(S),
                O = n("6x+I"),
                T = n("2iEm"),
                I = n("QVaV"),
                L = (n("cH/u"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getContentRender = function() {
                            var e = f("horizontal-carousel-player__details", {
                                    "horizontal-carousel-player__details--overlay": t.props.darkTheme
                                }),
                                n = Object(o.d)("playing {game}", {
                                    game: i.createElement(T.a, {
                                        to: {
                                            pathname: "/directory/game/" + t.props.item.content.gameName,
                                            state: Object(y.b)(t.props.item.isScheduled)
                                        }
                                    }, t.props.item.content.gameName)
                                }, "HorizontalCarouselPlayer"),
                                a = {
                                    type: t.props.item.content.type,
                                    id: t.props.item.content.id,
                                    onPlayerInit: t.props.onPlayerInit,
                                    onPlayerDestroy: t.props.onPlayerDestroy,
                                    onVideoTimeChange: t.onVideoTimeChange
                                };
                            return i.createElement(C.xb, {
                                className: "horizontal-carousel-player",
                                borderRadius: C.x.Medium,
                                overflow: C.Ya.Hidden,
                                margin: {
                                    bottom: 2
                                },
                                display: C.W.Flex,
                                flexDirection: C.Y.Row,
                                color: C.O.Alt
                            }, i.createElement(C.Va, {
                                flexGrow: 1,
                                flexShrink: 0
                            }, i.createElement(C.Va, {
                                className: "horizontal-carousel-player__video",
                                position: C.db.Relative,
                                overflow: C.Ya.Hidden
                            }, Object(y.c)(a))), i.createElement(C.xb, {
                                className: e,
                                flexGrow: 0,
                                padding: 2,
                                borderRadius: {
                                    topRight: C.x.Medium,
                                    bottomRight: C.x.Medium
                                }
                            }, i.createElement(C.Va, {
                                display: C.W.Flex,
                                flexWrap: C.Z.NoWrap,
                                textAlign: C.Jb.Left,
                                alignItems: C.f.Center,
                                padding: {
                                    bottom: .5
                                }
                            }, i.createElement(C.Va, {
                                margin: {
                                    right: 1
                                },
                                flexShrink: 0
                            }, i.createElement("span", {
                                onClick: t.promotionCardClick.bind(t, "thumbnail")
                            }, i.createElement(T.a, {
                                to: {
                                    pathname: "/" + t.props.item.broadcaster.login,
                                    state: Object(y.b)(t.props.item.isScheduled)
                                },
                                "data-a-target": "carousel-profile-image"
                            }, i.createElement(C.q, {
                                src: t.props.item.broadcaster.profileImageURL,
                                alt: Object(o.d)("Profile Picture for {login}", {
                                    login: t.props.item.broadcaster.login
                                }, "HorizontalCarouselPlayer"),
                                size: 40
                            })))), i.createElement(C.Va, {
                                margin: {
                                    right: 1
                                },
                                flexGrow: 1
                            }, i.createElement(C.V, {
                                fontSize: C.Aa.Size4,
                                color: C.O.Base,
                                lineHeight: C.Wa.Heading,
                                "data-a-target": "carousel-broadcaster-displayname"
                            }, Object(I.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), i.createElement(C.V, {
                                fontSize: C.Aa.Size6,
                                color: C.O.Base,
                                "data-a-target": "carousel-user-playing-message"
                            }, i.createElement("span", {
                                onClick: t.promotionCardClick.bind(t, "game_name")
                            }, n)))), i.createElement(C.Va, {
                                margin: {
                                    y: 1
                                }
                            }, i.createElement("span", {
                                onClick: t.promotionCardClick.bind(t, "stream_title")
                            }, i.createElement(T.a, {
                                to: t.getLinkForTitle()
                            }, i.createElement(C.V, {
                                type: C.Nb.Span,
                                "data-a-target": k.a,
                                fontSize: C.Aa.Size3,
                                lineHeight: C.Wa.Heading
                            }, t.props.item.title)))), i.createElement(O, {
                                source: t.props.item.description || ""
                            })))
                        }, t.getLinkForTitle = function() {
                            if (t.props.item.content.type === k.b.Stream) return {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: Object(y.b)(t.props.item.isScheduled)
                            };
                            var e = t.state && t.state.videoOffset || 0;
                            return {
                                pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                                state: Object(y.b)(t.props.item.isScheduled)
                            }
                        }, t.getPlaceholderRender = function() {
                            var e = f("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            });
                            return i.createElement(C.Va, {
                                display: C.W.Flex,
                                flexWrap: C.Z.NoWrap,
                                flexShrink: 0,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(C.Va, {
                                flexGrow: 1,
                                flexShrink: 1,
                                fullWidth: !0
                            }, i.createElement(C.o, {
                                ratio: C.p.Aspect16x9
                            }, i.createElement(C.cb, {
                                "data-test-selector": "carousel-player-placeholder"
                            }))), i.createElement(C.Va, {
                                className: f(e),
                                flexGrow: 0,
                                flexShrink: 0,
                                padding: 2
                            }, i.createElement(C.Va, {
                                display: C.W.Flex,
                                flexWrap: C.Z.NoWrap,
                                textAlign: C.Jb.Left,
                                alignItems: C.f.Start
                            }, i.createElement(C.Va, {
                                margin: {
                                    right: 1
                                },
                                flexShrink: 0
                            }, i.createElement(C.cb, {
                                width: 40,
                                height: 40
                            })), i.createElement(C.Va, {
                                margin: {
                                    right: 1
                                },
                                flexGrow: 1
                            }, i.createElement(C.V, null, i.createElement(C.cb, {
                                width: 70
                            })), i.createElement(C.V, null, i.createElement(C.cb, {
                                width: 70
                            })))), i.createElement(C.Va, {
                                margin: {
                                    y: 1
                                }
                            }, i.createElement(C.V, null, i.createElement(C.cb, {
                                lineCount: 1
                            })), i.createElement(C.V, null, i.createElement(C.cb, {
                                lineCount: 4
                            })))))
                        }, t.onVideoTimeChange = function(e) {
                            t.setState({
                                videoOffset: e
                            })
                        }, t.promotionCardClick = function(e) {
                            t.props.onPromotionCardClick(t.props.item, e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                        e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                    }, t.prototype.render = function() {
                        return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                    }, t
                }(i.Component)),
                N = n("dIU+"),
                V = (n("EZOg"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getContentRender = function() {
                            var e = f("vertical-carousel-player__details", {
                                    "vertical-carousel-player__details--overlay": t.props.darkTheme
                                }),
                                n = Object(o.d)("{login} playing {game}", {
                                    login: i.createElement("span", {
                                        onClick: t.promotionCardClick.bind(t, "display_name")
                                    }, i.createElement(T.a, {
                                        to: {
                                            pathname: "/" + t.props.item.broadcaster.login,
                                            state: Object(y.b)(t.props.item.isScheduled)
                                        },
                                        "data-a-target": "carousel-broadcaster-displayname"
                                    }, Object(I.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                    game: i.createElement("span", {
                                        onClick: t.promotionCardClick.bind(t, "game_name")
                                    }, i.createElement(T.a, {
                                        to: {
                                            pathname: "/directory/game/" + t.props.item.content.gameName,
                                            state: Object(y.b)(t.props.item.isScheduled)
                                        },
                                        "data-a-target": "carousel-broadcaster-game-name"
                                    }, t.props.item.content.gameName))
                                }, "VerticalCarouselPlayer"),
                                a = {
                                    type: t.props.item.content.type,
                                    id: t.props.item.content.id,
                                    onPlayerInit: t.props.onPlayerInit,
                                    onPlayerDestroy: t.props.onPlayerDestroy
                                };
                            return i.createElement(C.xb, {
                                className: "vertical-carousel-player",
                                padding: {
                                    bottom: 1,
                                    x: 1
                                },
                                color: C.O.Alt
                            }, i.createElement(C.Va, {
                                className: "vertical-carousel-player__video",
                                position: C.db.Relative,
                                overflow: C.Ya.Hidden
                            }, Object(y.c)(a)), i.createElement(C.Va, {
                                className: f(e),
                                display: C.W.Flex,
                                flexWrap: C.Z.NoWrap,
                                textAlign: C.Jb.Left,
                                alignItems: C.f.Center,
                                padding: {
                                    y: 1
                                }
                            }, i.createElement(C.Va, {
                                margin: {
                                    right: 1
                                },
                                flexShrink: 0
                            }, i.createElement("span", {
                                onClick: t.promotionCardClick.bind(t, "thumbnail")
                            }, i.createElement(T.a, {
                                to: "/" + t.props.item.broadcaster.login,
                                "data-a-target": "carousel-avatar-link"
                            }, i.createElement(C.q, {
                                src: t.props.item.broadcaster.profileImageURL,
                                alt: Object(o.d)("Profile Picture for {login}", {
                                    login: t.props.item.broadcaster.login
                                }, "VerticalCarouselPlayer"),
                                size: 40
                            })))), i.createElement(C.Va, {
                                margin: {
                                    right: 1
                                },
                                flexGrow: 1
                            }, i.createElement(C.V, {
                                "data-a-target": k.a,
                                fontSize: C.Aa.Size5,
                                color: C.O.Base,
                                bold: !0
                            }, t.props.item.title), i.createElement(C.V, {
                                fontSize: C.Aa.Size6,
                                color: C.O.Base
                            }, n)), i.createElement(C.Va, {
                                flexShrink: 0
                            }, t.renderFollowButton())), i.createElement(O, {
                                source: t.props.item.description || ""
                            }))
                        }, t.getPlaceholderRender = function() {
                            return i.createElement(C.Va, {
                                padding: {
                                    bottom: 1,
                                    x: 1
                                }
                            }, i.createElement(C.o, {
                                ratio: C.p.Aspect16x9
                            }, i.createElement(C.cb, {
                                "data-test-selector": "carousel-player-placeholder"
                            })), i.createElement(C.Va, {
                                display: C.W.Flex,
                                flexWrap: C.Z.NoWrap,
                                textAlign: C.Jb.Left,
                                alignItems: C.f.Center,
                                padding: {
                                    y: 1
                                }
                            }, i.createElement(C.Va, {
                                margin: {
                                    right: 1
                                },
                                flexShrink: 0
                            }, i.createElement(C.cb, {
                                width: 40,
                                height: 40
                            })), i.createElement(C.Va, {
                                margin: {
                                    right: 1
                                },
                                flexGrow: 1
                            }, i.createElement(C.V, null, i.createElement(C.cb, {
                                width: 150
                            })), i.createElement(C.V, null, i.createElement(C.cb, {
                                width: 100
                            }))), i.createElement(C.Va, {
                                flexShrink: 0
                            }, i.createElement(C.cb, {
                                width: 70,
                                height: 30
                            }))), i.createElement(C.V, null, i.createElement(C.cb, {
                                lineCount: 3
                            })))
                        }, t.promotionCardClick = function(e) {
                            t.props.onPromotionCardClick(t.props.item, e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                    }, t.prototype.renderFollowButton = function() {
                        return this.props.firstPageLoaded ? i.createElement(N.a, {
                            "data-a-target": "carousel-follow-button",
                            channelLogin: this.props.item.broadcaster.login,
                            followUIType: N.b.IconAndText,
                            unfollowUIType: N.b.IconOnly,
                            showLoadingPlaceholder: !0
                        }) : i.createElement(C.cb, {
                            width: 70,
                            height: 30
                        })
                    }, t
                }(i.Component));
            var P, F = Object(a.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                })(V),
                A = n("44NB"),
                j = (n("QzrU"), 6),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeItem: t.props.items[0],
                            startingIndex: 0
                        }, t.displayEventFired = !1, t.renderLeftButton = function() {
                            if (t.props.items.length > j) {
                                var e = t.state.startingIndex > 0;
                                return i.createElement(C.Va, {
                                    display: C.W.Flex,
                                    alignItems: C.f.Stretch
                                }, i.createElement(C.A, {
                                    ariaLabel: Object(o.d)("Page Left", "CarouselPlayerComponent"),
                                    icon: C.nb.AngleLeft,
                                    onClick: t.handlePageLeft,
                                    "data-test-selector": k.d,
                                    disabled: !e
                                }))
                            }
                            return null
                        }, t.renderRightButton = function() {
                            if (t.props.items.length > j) {
                                var e = t.props.items.length > t.state.startingIndex + j;
                                return i.createElement(C.Va, {
                                    display: C.W.Flex,
                                    alignItems: C.f.Stretch
                                }, i.createElement(C.A, {
                                    ariaLabel: Object(o.d)("Page Right", "CarouselPlayerComponent"),
                                    icon: C.nb.AngleRight,
                                    onClick: t.handlePageRight,
                                    "data-test-selector": k.e,
                                    disabled: !e
                                }))
                            }
                            return null
                        }, t.getCardsRender = function() {
                            if (t.state.activeItem) return t.displayEventFired || (Object(A.a)(t.props.items), t.displayEventFired = !0), t.props.items.slice(t.state.startingIndex, t.state.startingIndex + j).map(function(e, n) {
                                return i.createElement(x, {
                                    key: e.content.id,
                                    item: e,
                                    itemClick: t.selectContent,
                                    itemActive: e.content.id === t.state.activeItem.content.id,
                                    "data-a-target": "carousel-card-" + n
                                })
                            });
                            for (var e = [], n = 0; n < j; n++) e.push(i.createElement(C.Va, {
                                key: n,
                                margin: {
                                    x: .5
                                },
                                flexGrow: 1
                            }, i.createElement(C.o, {
                                ratio: C.p.Aspect16x9
                            }, i.createElement(C.cb, null)), i.createElement(C.Va, {
                                margin: {
                                    top: .5
                                }
                            }, i.createElement(C.cb, {
                                height: 4
                            }))));
                            return e
                        }, t.getLayoutRender = function() {
                            var e = {
                                darkTheme: t.props.darkTheme || !1,
                                item: t.state.activeItem,
                                onPromotionCardClick: t.trackPromotionClick,
                                onPromotionCardView: t.trackPromotionView
                            };
                            switch (t.props.layout) {
                                case k.c.Vertical:
                                    return i.createElement(F, r.__assign({}, e));
                                default:
                                    return i.createElement(L, r.__assign({}, e))
                            }
                        }, t.selectContent = function(e) {
                            t.setState({
                                activeItem: e
                            });
                            var n = {
                                broadcast_type: e.content.subType,
                                carousel_index: t.props.items.indexOf(e),
                                channel: e.broadcaster.login,
                                game: e.content.gameName,
                                promotion_was_scheduled: e.isScheduled,
                                views: e.content.viewersCount
                            };
                            Object(A.b)(n)
                        }, t.trackPromotionClick = function(e, n) {
                            var a = e.broadcaster,
                                r = e.content,
                                i = e.isScheduled,
                                o = {
                                    broadcast_type: r.subType,
                                    carousel_index: t.props.items.indexOf(t.state.activeItem),
                                    channel: a.displayName,
                                    game: r.gameName,
                                    promotion_was_scheduled: i,
                                    views: r.viewersCount
                                };
                            Object(A.d)(o, n)
                        }, t.trackPromotionView = function(e) {
                            var n = {
                                broadcast_type: e.content.subType,
                                carousel_index: t.props.items.indexOf(e),
                                channel: e.broadcaster.login,
                                game: e.content.gameName,
                                promotion_was_scheduled: e.isScheduled,
                                views: e.content.viewersCount
                            };
                            Object(A.e)(n)
                        }, t.handlePageRight = function() {
                            var e = t.props.items.length - j;
                            e !== t.state.startingIndex && (Object(A.c)("next"), t.setState({
                                startingIndex: e
                            }))
                        }, t.handlePageLeft = function() {
                            t.state.startingIndex > 0 && (Object(A.c)("prev"), t.setState({
                                startingIndex: 0
                            }))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillUpdate = function(e) {
                        !this.state.activeItem && e.items.length > 0 && this.setState({
                            activeItem: e.items[0]
                        })
                    }, t.prototype.render = function() {
                        var e;
                        return this.props.darkTheme && (e = Object(b.b)(v.a.Dark)), i.createElement(C.Va, {
                            className: f("carousel-player", e)
                        }, this.getLayoutRender(), i.createElement(C.xb, {
                            background: C.r.Alt,
                            borderRadius: C.x.Medium
                        }, i.createElement(C.Va, {
                            display: C.W.Flex,
                            flexWrap: C.Z.NoWrap,
                            padding: {
                                x: .5,
                                y: 1
                            }
                        }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                    }, t
                }(i.Component),
                R = Object(_.c)("CarouselPlayer")(D),
                B = n("pR+Y");
            ! function(e) {
                e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
            }(P || (P = {}));

            function G(e, t, n) {
                switch (t) {
                    case P.AnonFront:
                        return i.createElement(R, {
                            items: e,
                            isLoading: n,
                            layout: k.c.Horizontal,
                            darkTheme: !0
                        });
                    default:
                        return i.createElement(C.xb, {
                            className: "featured-broadcasters",
                            background: C.r.Base,
                            elevation: 1
                        }, i.createElement(C.Va, {
                            padding: 1
                        }, i.createElement(C.V, {
                            fontSize: C.Aa.Size5,
                            color: C.O.Alt2
                        }, Object(o.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), i.createElement(R, {
                            items: e,
                            isLoading: n,
                            layout: k.c.Vertical
                        }))
                }
            }
            var M, U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getRender = function(e) {
                            var n = !(!t.props.data.loading && !t.props.data.error);
                            return G(e, t.props.renderContext, n)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.postRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.postRender()
                    }, t.prototype.render = function() {
                        var e = function(e) {
                            return e.map(function(e) {
                                var t = "",
                                    n = null;
                                return e.stream && e.stream.game && null !== e.stream.game.name && (t = e.stream.game.name), e.stream && e.stream.broadcaster && (n = e.stream.broadcaster), {
                                    broadcaster: {
                                        displayName: n ? n.displayName : "",
                                        id: n ? n.id : "",
                                        login: n ? n.login : "",
                                        profileImageURL: n ? n.profileImageURL : ""
                                    },
                                    content: {
                                        id: n ? n.login : "",
                                        gameName: t,
                                        type: k.b.Stream,
                                        subType: e.stream ? e.stream.type : "",
                                        viewersCount: e.stream ? e.stream.viewersCount : 0
                                    },
                                    description: function(e) {
                                        return e.replace(/\[\]\(.+\)/, "")
                                    }(e.description || ""),
                                    imageURL: e.imageURL || "",
                                    isScheduled: e.isScheduled || !1,
                                    isSponsored: e.isSponsored || !1,
                                    priorityLevel: e.priorityLevel,
                                    title: e.title || ""
                                }
                            })
                        }(this.props.data.featuredStreams || []);
                        return this.getRender(e)
                    }, t.prototype.postRender = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t = r.__decorate([Object(h.a)(B, {
                        options: function(e) {
                            return {
                                variables: {
                                    language: o.o.intl.getLanguageCode(),
                                    first: e.streamCount || 8,
                                    acceptedMature: o.l.get("mature", !1)
                                }
                            }
                        }
                    }), Object(_.c)("FeaturedBroadcasters")], t)
                }(i.Component),
                W = n("sSlw"),
                z = n("9pSj"),
                H = n("oJmH"),
                q = n("kduP"),
                Y = n("3W+h"),
                Q = n("oJov"),
                X = n("fVj5"),
                Z = n("AZIu"),
                J = n("x/sq"),
                $ = n("isum"),
                K = (n("MV3Z"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            adDisplayed: !1
                        }, t.getItems = function() {
                            if (t.props.data.loading || t.props.data.error || !t.props.data.games || !t.props.data.games.edges) {
                                for (var e = [], n = 0; n < 12; n++) e.push(i.createElement(C.P, {
                                    cols: 2,
                                    key: "placeholder-" + n
                                }, i.createElement(C.Va, {
                                    key: n,
                                    margin: {
                                        bottom: n < 6 ? 4 : 0
                                    }
                                }, i.createElement(C.Va, {
                                    margin: {
                                        bottom: .5
                                    }
                                }, i.createElement(C.o, {
                                    ratio: C.p.Aspect3x4
                                }, i.createElement(C.cb, null))), i.createElement(C.V, null, i.createElement(C.cb, {
                                    width: 120
                                })), i.createElement(C.V, {
                                    fontSize: C.Aa.Size7
                                }, i.createElement(C.cb, {
                                    width: 80
                                })))));
                                return e
                            }
                            var a = t.props.data.games.edges.slice(0, t.state.adDisplayed ? 10 : 12).map(function(e, t) {
                                    var n = e.node;
                                    if (!n || !n.id) return null;
                                    var a = Object(J.a)({
                                            tags: n && n.tags,
                                            section: Z.a.Categories
                                        }),
                                        s = null !== n.viewersCount ? Object(o.d)("{viewerCount,number} viewers", {
                                            viewerCount: n.viewersCount || ""
                                        }, "FeaturedGames") : "";
                                    return i.createElement(C.P, {
                                        cols: 2,
                                        key: "game-" + n.id
                                    }, i.createElement(C.Va, {
                                        margin: {
                                            bottom: t < 6 ? 4 : 0
                                        }
                                    }, i.createElement(Q.a, {
                                        linkTo: Object(q.c)(n.name),
                                        title: n.name,
                                        alt: n.name + " cover image",
                                        src: n.boxArtURL || o.a.defaultBoxArtURL,
                                        info: s,
                                        "data-a-target": "card-" + t,
                                        "data-a-id": "card-" + n.name.replace(/ /g, ""),
                                        tagListProps: a && r.__assign({}, a, {
                                            linkPath: Y.a.DirectoryTag
                                        })
                                    })))
                                }),
                                s = i.createElement(C.Va, {
                                    display: C.W.Flex,
                                    flexGrow: 1,
                                    justifyContent: C.Ua.Center,
                                    key: "ad"
                                }, i.createElement(m.a, {
                                    adSize: g.c.anonFront.rect,
                                    adUnit: g.d.frontpage,
                                    "data-a-target": "featured-games-ad-slot",
                                    slotID: g.b.anonFront.rect,
                                    targeting: {
                                        pagetype: g.a.frontpage
                                    },
                                    slotRendered: t.onSlotRendered,
                                    autoEnable: !1
                                }));
                            return a.splice(4, 0, s), a
                        }, t.onSlotRendered = function() {
                            t.state.adDisplayed || t.setState({
                                adDisplayed: !0
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.postRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.postRender()
                    }, t.prototype.render = function() {
                        var e = i.createElement(C.Va, {
                                display: C.W.Flex,
                                flexDirection: C.Y.Row,
                                alignItems: C.f.Baseline,
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(C.V, {
                                fontSize: C.Aa.Size2,
                                color: C.O.Base
                            }, Object(o.d)("Featured Games", "FeaturedGames")), i.createElement(C.Va, {
                                className: "anon-featured-games__subheader",
                                margin: {
                                    left: 2
                                }
                            }, i.createElement(C.V, {
                                fontSize: C.Aa.Size3,
                                color: C.O.Alt2
                            }, Object(o.d)("Games people are watching now", "FeaturedGames")))),
                            t = i.createElement(C.Va, {
                                display: C.W.Flex,
                                justifyContent: C.Ua.End
                            }, i.createElement(C.Na, {
                                display: C.W.Flex,
                                alignItems: C.f.Center
                            }, i.createElement(T.a, {
                                to: "/directory",
                                "data-a-target": "see-all-live-games-link"
                            }, i.createElement(C.V, {
                                fontSize: C.Aa.Size4
                            }, Object(o.d)("See all live games", "FeaturedGames")), i.createElement(C.xb, {
                                color: C.O.Link,
                                margin: {
                                    left: .5
                                },
                                display: C.W.InlineFlex,
                                alignItems: C.f.Center
                            }, i.createElement(C.mb, {
                                asset: C.nb.AngleRight,
                                width: 14,
                                height: 14
                            })))));
                        return i.createElement(C.xb, {
                            className: "anon-featured-games",
                            background: C.r.Base,
                            padding: {
                                x: 1
                            }
                        }, e, i.createElement(C.Ha, null, this.getItems()), t)
                    }, t.prototype.postRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(i.Component)),
                ee = Object(H.compose)(Object(h.a)($, {
                    options: function() {
                        return {
                            variables: {
                                isTagsExperiment: Object(X.a)()
                            }
                        }
                    }
                }), Object(_.c)("FeaturedGames"))(K),
                te = n("sqxy");
            ! function(e) {
                e[e.All = 1] = "All", e[e.Xbox = 2] = "Xbox", e[e.PS4 = 3] = "PS4"
            }(M || (M = {}));
            var ne = n("oE+Y"),
                ae = (n("VzB4"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getItems = function() {
                            if (t.props.data.loading || t.props.data.error || !t.props.data.streams || !t.props.data.streams.edges) {
                                for (var e = [], n = 0; n < 6; n++) e.push(i.createElement(C.Va, {
                                    key: n,
                                    margin: {
                                        bottom: 2
                                    }
                                }, i.createElement(C.Va, {
                                    margin: {
                                        bottom: .5
                                    }
                                }, i.createElement(C.o, {
                                    ratio: C.p.Aspect16x9
                                }, i.createElement(C.cb, null))), i.createElement(C.V, null, i.createElement(C.cb, {
                                    width: 150
                                })), i.createElement(C.V, {
                                    fontSize: C.Aa.Size7
                                }, i.createElement(C.cb, {
                                    width: 100
                                }))));
                                return e
                            }
                            return t.props.data.streams.edges.map(function(e, n) {
                                var a = e && e.node;
                                if (!a || !a.broadcaster || !a.broadcaster.id) return null;
                                var r = {
                                        medium: p.PageviewMedium.Following,
                                        content: p.PageviewContent.Live,
                                        content_index: n
                                    },
                                    s = a && a.game ? Object(q.c)(a.game.name) : "",
                                    l = Object(J.a)({
                                        tags: a.tags,
                                        section: Z.a.LiveChannels
                                    });
                                return l && (l.linkPath = Y.a.PopularTag), i.createElement(C.Va, {
                                    className: "anon-top-channels",
                                    key: a.broadcaster.id,
                                    margin: {
                                        bottom: 2
                                    }
                                }, i.createElement(te.a, {
                                    imageSrc: a && a.previewImageURL || o.a.defaultStreamPreviewURL,
                                    imageAlt: a && a.title || "",
                                    viewerCount: a && a.viewersCount || 0,
                                    title: a && a.title || "",
                                    channelDisplayName: a.broadcaster.displayName || "",
                                    channelLogin: a.broadcaster.login || "",
                                    gameImageSrc: a && a.game && a.game.boxArtURL || o.a.defaultBoxArtURL,
                                    gameTitle: a && a.game ? a.game.name : "",
                                    gameLinkTo: {
                                        pathname: s,
                                        state: r
                                    },
                                    linkTo: {
                                        pathname: "/" + a.broadcaster.login,
                                        state: r
                                    },
                                    channelNameLinkTo: {
                                        pathname: "/" + a.broadcaster.login + "/videos",
                                        state: r
                                    },
                                    channelImageSrc: a.broadcaster.profileImageURL || "",
                                    "data-a-target": "top-" + t.getDataProp() + "-channel-" + n,
                                    tagListProps: l
                                }))
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.postRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.postRender()
                    }, t.prototype.render = function() {
                        var e = i.createElement(C.Va, {
                                display: C.W.Flex,
                                flexDirection: C.Y.Row,
                                alignItems: C.f.Baseline,
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(C.V, {
                                fontSize: C.Aa.Size2,
                                color: C.O.Base
                            }, this.getTitle()), i.createElement(C.Va, {
                                className: "anon-top-channels__subheader",
                                margin: {
                                    left: 2
                                }
                            }, i.createElement(C.V, {
                                fontSize: C.Aa.Size3,
                                color: C.O.Alt2
                            }, this.getSubtitle()))),
                            t = i.createElement(C.Va, {
                                className: "anon-top-channels__footer",
                                display: C.W.Flex,
                                justifyContent: C.Ua.End
                            }, i.createElement(C.Na, {
                                display: C.W.Flex,
                                alignItems: C.f.Center
                            }, i.createElement(T.a, {
                                to: this.getLink(),
                                "data-a-target": "see-all-" + this.getDataProp() + "-channels-link",
                                "data-test-selector": "see-all-" + this.getDataProp() + "-channels-link"
                            }, i.createElement(C.V, {
                                fontSize: C.Aa.Size4
                            }, this.getFooter()), i.createElement(C.xb, {
                                color: C.O.Link,
                                margin: {
                                    left: .5
                                },
                                display: C.W.InlineFlex,
                                alignItems: C.f.Center
                            }, i.createElement(C.mb, {
                                asset: C.nb.AngleRight,
                                width: 14,
                                height: 14
                            })))));
                        return i.createElement("div", null, e, i.createElement(C.Tb, {
                            gutterSize: C.Vb.Small,
                            childWidth: C.Ub.Large,
                            placeholderItems: 6
                        }, this.getItems()), t)
                    }, t.prototype.postRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.getFooter = function() {
                        switch (this.props.type) {
                            case M.All:
                                return Object(o.d)("See all live Channels", "TopChannels");
                            case M.PS4:
                                return Object(o.d)("See all PS4 Channels", "TopChannels");
                            case M.Xbox:
                                return Object(o.d)("See all Xbox One Channels", "TopChannels");
                            default:
                                return ""
                        }
                    }, t.prototype.getSubtitle = function() {
                        switch (this.props.type) {
                            case M.All:
                                return Object(o.d)("Broadcasters people are watching now", "TopChannels");
                            case M.PS4:
                                return Object(o.d)("Channels broadcasted from Playstation 4", "TopChannels");
                            case M.Xbox:
                                return Object(o.d)("Channels broadcasted from Xbox one", "TopChannels");
                            default:
                                return ""
                        }
                    }, t.prototype.getTitle = function() {
                        switch (this.props.type) {
                            case M.All:
                                return Object(o.d)("Top Live Channels", "TopChannels");
                            case M.PS4:
                                return Object(o.d)("Top PS4 Channels", "TopChannels");
                            case M.Xbox:
                                return Object(o.d)("Top Xbox One Channels", "TopChannels");
                            default:
                                return ""
                        }
                    }, t.prototype.getDataProp = function() {
                        switch (this.props.type) {
                            case M.All:
                                return "live";
                            case M.PS4:
                                return "ps4";
                            case M.Xbox:
                                return "xbox";
                            default:
                                return ""
                        }
                    }, t.prototype.getLink = function() {
                        switch (this.props.type) {
                            case M.All:
                                return "/directory/all";
                            case M.PS4:
                                return "/directory/all/ps4";
                            case M.Xbox:
                                return "/directory/all/xbox";
                            default:
                                return ""
                        }
                    }, t
                }(i.Component)),
                re = Object(H.compose)(Object(h.a)(ne, {
                    options: function(e) {
                        var t = "";
                        switch (e.type) {
                            case M.PS4:
                                t = "ps4";
                                break;
                            case M.Xbox:
                                t = "xbox";
                                break;
                            default:
                                t = "all"
                        }
                        return {
                            variables: {
                                platformType: t,
                                isTagsExperiment: Object(X.a)()
                            }
                        }
                    }
                }), Object(_.c)("TopChannels"))(ae),
                ie = (n("sdyv"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onTakeoverRendered = function() {
                            n.setState({
                                takeoverRendered: !0
                            })
                        }, n.renderSocialBar = function() {
                            return i.createElement(C.xb, {
                                className: "anon-front__social-container",
                                alignItems: C.f.Center,
                                display: C.W.Flex,
                                flexDirection: C.Y.Column,
                                justifyContent: C.Ua.Center,
                                borderTop: !0,
                                borderBottom: !0,
                                padding: {
                                    y: 3,
                                    x: 2
                                }
                            }, i.createElement(C.V, {
                                fontSize: C.Aa.Size3
                            }, Object(o.d)("Follow the latest Twitch news", "AnonFrontPage")), i.createElement(C.Va, {
                                margin: {
                                    top: 1
                                },
                                display: C.W.Flex,
                                flexDirection: C.Y.Row
                            }, i.createElement(C.z, {
                                linkTo: "https://www.facebook.com/twitch",
                                targetBlank: !0,
                                size: C.D.Large,
                                "data-a-target": "frontpage-facebook-link"
                            }, Object(o.d)("Facebook", "AnonFrontPage")), i.createElement(C.Va, {
                                margin: {
                                    x: .5
                                }
                            }, i.createElement(C.z, {
                                linkTo: "https://www.twitter.com/twitch",
                                targetBlank: !0,
                                size: C.D.Large,
                                "data-a-target": "frontpage-twitter-link"
                            }, Object(o.d)("Twitter", "AnonFrontPage"))), i.createElement(C.z, {
                                linkTo: "https://blog.twitch.tv/",
                                targetBlank: !0,
                                size: C.D.Large,
                                "data-a-target": "frontpage-blog-link"
                            }, Object(o.d)("Official Blog", "AnonFrontPage"))))
                        }, n.renderPlatformTopChannels = function() {
                            return i.createElement(C.Va, null, i.createElement(C.xb, {
                                background: C.r.Base,
                                padding: {
                                    x: 2,
                                    y: 3
                                },
                                margin: {
                                    x: "auto"
                                },
                                className: "anon-front__content-section"
                            }, i.createElement(re, {
                                type: M.PS4,
                                key: "channels.ps4"
                            })), i.createElement(C.xb, {
                                background: C.r.Base,
                                padding: {
                                    x: 2,
                                    y: 3
                                },
                                margin: {
                                    x: "auto"
                                },
                                className: "anon-front__content-section"
                            }, i.createElement(re, {
                                type: M.Xbox,
                                key: "channels.xbox"
                            })))
                        }, n.onSlotAdded = function() {
                            n.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(g.b.anonFront).length && u.a.display(g.b.anonFront.takeover), {
                                    numSlotsAdded: t
                                }
                            })
                        }, n.state = {
                            takeoverRendered: !1,
                            numSlotsAdded: 0
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentWillMount = function() {
                        g.g.addListener(g.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        o.o.setPageTitle()
                    }, t.prototype.render = function() {
                        return i.createElement(C.Va, {
                            fullHeight: !0
                        }, i.createElement(W.a, null, i.createElement(z.a, null)), i.createElement(C.xb, {
                            className: "anon-front",
                            background: C.r.Base,
                            position: C.db.Relative,
                            fullHeight: !0
                        }, i.createElement("div", {
                            id: "mantle_skin",
                            className: this.state.takeoverRendered ? "anon-front__takeover" : ""
                        }, i.createElement(m.a, {
                            adSize: g.c.anonFront.takeover,
                            adUnit: g.d.frontpage,
                            "data-a-target": "site-skin-ad-slot",
                            slotID: g.b.anonFront.takeover,
                            targeting: {
                                pagetype: g.a.frontpage
                            },
                            slotRendered: this.onTakeoverRendered,
                            autoEnable: !1
                        }), i.createElement(C.Va, {
                            className: "anon-front__featured-section",
                            display: C.W.Flex,
                            flexWrap: C.Z.Wrap,
                            justifyContent: C.Ua.Center
                        }, i.createElement(C.Va, {
                            className: "anon-front__banner"
                        }, i.createElement(m.a, {
                            adSize: g.c.anonFront.banner,
                            adUnit: g.d.frontpage,
                            "data-a-target": "anon-front-banner-ad-slot",
                            slotID: g.b.anonFront.banner,
                            targeting: {
                                pagetype: g.a.frontpage
                            },
                            injectStyles: {
                                display: "flex"
                            },
                            autoEnable: !1
                        })), i.createElement(C.Va, {
                            className: "anon-front__content-section",
                            padding: this.state.takeoverRendered ? 2 : 0
                        }, i.createElement(U, {
                            renderContext: P.AnonFront
                        })), i.createElement(C.Va, {
                            className: "anon-front__sizzle-strip",
                            display: C.W.Flex,
                            justifyContent: C.Ua.Center
                        }, i.createElement(m.a, {
                            adSize: g.c.anonFront.sizzle,
                            adUnit: g.d.sizzle,
                            "data-a-target": "anon-front-sizzle-strip-ad-slot",
                            slotID: g.b.anonFront.sizzle,
                            targeting: {
                                pagetype: g.a.frontpage
                            },
                            autoEnable: !1
                        }))), i.createElement(s.a, null, i.createElement(C.xb, {
                            background: C.r.Base,
                            margin: {
                                x: "auto"
                            },
                            padding: {
                                x: 1,
                                top: 5,
                                bottom: 3
                            },
                            className: "anon-front__content-section"
                        }, i.createElement(ee, null))), this.renderSocialBar(), this.props.firstPageLoaded && i.createElement(C.xb, {
                            background: C.r.Base,
                            padding: {
                                x: 2,
                                top: 3,
                                bottom: 3
                            },
                            margin: {
                                x: "auto"
                            },
                            className: "anon-front__content-section"
                        }, i.createElement(re, {
                            type: M.All,
                            key: "channels.all"
                        })), this.props.firstPageLoaded && this.renderPlatformTopChannels(), i.createElement(C.Va, {
                            className: "anon-front__bottom",
                            display: C.W.Flex,
                            justifyContent: C.Ua.Center
                        }, i.createElement(m.a, {
                            adSize: g.c.anonFront.bottom,
                            adUnit: g.d.frontpage,
                            "data-a-target": "anon-front-footer-ad-slot",
                            slotID: g.b.anonFront.bottom,
                            targeting: {
                                pagetype: g.a.frontpage
                            },
                            injectStyles: {
                                display: "flex"
                            },
                            autoEnable: !1
                        })), i.createElement(l.a, null))))
                    }, t.prototype.componentWillUnmount = function() {
                        g.g.removeListener(g.e, this.onSlotAdded)
                    }, t = r.__decorate([Object(_.c)("AnonFrontPage", {
                        destination: d.a.Index,
                        autoReportInteractive: !0
                    }), Object(c.a)({
                        location: p.PageviewLocation.FrontPage
                    })], t)
                }(i.Component));
            var oe = Object(a.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(ie);
            n.d(t, "AnonFrontPage", function() {
                return oe
            })
        },
        "x/sq": function(e, t, n) {
            "use strict";
            var a = n("/7QA"),
                r = n("odjZ"),
                i = {},
                o = n("fVj5"),
                s = n("AZIu"),
                l = n("X7a7");
            n.d(t, "a", function() {
                return c
            });
            var c = function(e) {
                var t = e.tags,
                    n = e.section,
                    c = e.onClickTag,
                    d = e.tagFilters,
                    u = void 0 === d ? [] : d,
                    p = e.scrollToTop;
                if (Object(o.a)() && t) {
                    return {
                        tags: t,
                        callback: function(e) {
                            if (p && p(), e.isLanguageTag && a.o.store.dispatch(Object(l.d)(e.id, !0)), u.every(function(t) {
                                    return t.id !== e.id
                                })) {
                                c && c(e);
                                var t = {
                                    section: n,
                                    tagPosition: u.length,
                                    searchEvent: !1,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(s.b)(t)
                            } else ! function(e) {
                                var t = document.querySelector('[data-tag-filter="' + e + '"]');
                                if (t) {
                                    var n = i[e];
                                    n && clearTimeout(n), t.classList.contains(r.b.NoBounce) && (t.classList.remove(r.b.NoBounce), t.classList.add(r.b.Bounce));
                                    var a = setTimeout(function() {
                                        t.classList.remove(r.b.Bounce), t.classList.add(r.b.NoBounce), delete i[e]
                                    }, 750);
                                    i[e] = a
                                }
                            }(e.id)
                        }
                    }
                }
            }
        }
    }
]);