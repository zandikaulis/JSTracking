(window.webpackJsonp = window.webpackJsonp || []).push([
    [52, 71], {
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
                return m
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

            function m(e) {
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
                        var t, n, l, c, d, m = this;
                        return a.__generator(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    return p.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return a.__awaiter(m, void 0, void 0, function() {
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
                                    return n = p.sent(), l = n.filter(function(e) {
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
                return m
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
                }), r.o.track(i.SpadeEventType.FrontPageCarouselDisplay, t)
            }

            function c(e) {
                r.o.track(i.SpadeEventType.FrontPageCarouselClick, e)
            }

            function d(e, t) {
                var n = a.__assign({
                    clicked_element: t
                }, e);
                r.o.track(i.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
            }

            function m(e) {
                r.o.track(i.SpadeEventType.FrontPageCarouselPromotionCardView, e)
            }

            function p(e) {
                r.o.track(i.SpadeEventType.FrontPageCarouselNavButtonClick, {
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
                    return a.createElement(l.Xa, {
                        className: "footer",
                        padding: {
                            y: 3
                        }
                    }, a.createElement(l.Xa, {
                        className: "footer__link-container",
                        display: l.X.Flex,
                        alignItems: l.f.Center,
                        justifyContent: l.Wa.Center,
                        flexWrap: l.Ba.Wrap,
                        margin: "auto",
                        padding: {
                            y: 3
                        }
                    }, a.createElement(l.Xa, {
                        className: "footer__glitch",
                        display: l.X.Flex,
                        alignItems: l.f.Center,
                        margin: {
                            right: 2
                        }
                    }, a.createElement(l.sb, {
                        asset: l.tb.LogoGlitch,
                        width: 30,
                        height: 30
                    })), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/about/",
                        "data-a-target": "frontpage-footer-about-link"
                    }, Object(r.d)("About", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://blog.twitch.tv/",
                        "data-a-target": "frontpage-footer-blog-link"
                    }, Object(r.d)("Blog", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/products/turbo/ticket?ref=footer",
                        "data-a-target": "frontpage-footer-turbo-link"
                    }, Object(r.d)("Turbo", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://music.twitch.tv/",
                        "data-a-target": "frontpage-footer-music-link"
                    }, Object(r.d)("Music", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "http://twitchadvertising.tv/",
                        "data-a-target": "frontpage-footer-advertising-link"
                    }, Object(r.d)("Advertise", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://dev.twitch.tv/",
                        "data-a-target": "frontpage-footer-developers-link"
                    }, Object(r.d)("Developers", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/partners/",
                        "data-a-target": "frontpage-footer-partners-link"
                    }, Object(r.d)("Partners", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/platforms/",
                        "data-a-target": "frontpage-footer-mobile-link"
                    }, Object(r.d)("Mobile", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/jobs/",
                        "data-a-target": "frontpage-footer-jobs-link"
                    }, Object(r.d)("Jobs", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://help.twitch.tv/",
                        "data-a-target": "frontpage-footer-help-link"
                    }, Object(r.d)("Help", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/terms-of-service/",
                        "data-a-target": "frontpage-footer-terms-link"
                    }, Object(r.d)("Terms", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/privacy-policy/",
                        "data-a-target": "frontpage-footer-privacy-link"
                    }, Object(r.d)("Privacy Policy", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/ad-choices/",
                        "data-a-target": "frontpage-footer-choices-link"
                    }, Object(r.d)("Ad Choices", "Footer"))), a.createElement(l.Xa, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement("a", {
                        target: "_blank",
                        className: "footer__link",
                        href: "https://www.twitch.tv/p/legal/cookie-policy/",
                        "data-a-target": "frontpage-footer-cookie-link"
                    }, Object(r.d)("Cookie Policy", "Footer"))), a.createElement(l.Xa, {
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
                d = Object(s.b)("Footer", {
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
                    m = Object.keys(d);
                if (m.forEach(function(e, n) {
                        t !== r.Humanized && t !== r.HumanizedShort || d[e] || delete d[e], n < m.length - l && delete d[e]
                    }), t === r.Humanized) return function(e) {
                    return e.months ? o(a.Month, e.months) : e.weeks && e.days ? o(a.Week, e.weeks) + " " + o(a.Day, e.days) : e.weeks ? o(a.Week, e.weeks) : e.days && e.hours ? o(a.Day, e.days) + " " + o(a.Hour, e.hours) : e.days ? o(a.Day, e.days) : e.hours && e.minutes ? o(a.Hour, e.hours) + " " + o(a.Minute, e.minutes) : e.hours ? o(a.Hour, e.hours) : e.minutes && e.seconds ? o(a.Minute, e.minutes) + " " + o(a.Second, e.seconds) : e.minutes ? o(a.Minute, e.minutes) : o(a.Second, e.seconds || 0)
                }(d);
                if (t === r.HumanizedShort) return function(e) {
                    return e.months ? s(a.Month, e.months) : e.weeks && e.days ? "" + s(a.Week, e.weeks) + s(a.Day, e.days) : e.weeks ? s(a.Week, e.weeks) : e.days && e.hours ? "" + s(a.Day, e.days) + s(a.Hour, e.hours) : e.days ? s(a.Day, e.days) : e.hours && e.minutes ? "" + s(a.Hour, e.hours) + s(a.Minute, e.minutes) : e.hours ? s(a.Hour, e.hours) : e.minutes && e.seconds ? "" + s(a.Minute, e.minutes) + s(a.Second, e.seconds) : e.minutes ? s(a.Minute, e.minutes) : s(a.Second, e.seconds || 0)
                }(d);
                var p = ":",
                    u = !1;
                switch (i.p.intl.getLanguageCode()) {
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
                        u = !0
                }
                var g = d.seconds || 0,
                    h = d.minutes || 0,
                    f = d.hours || 0;
                switch (t) {
                    case r.ClockHM:
                    case r.ClockHMS:
                        var v = (u ? c(f, 2) : f) + p + c(h, 2);
                        return t === r.ClockHMS && (v += p + c(g, 2)), v;
                    case r.ClockMS:
                        return (u ? c(h, 2) : h) + p + c(g, 2)
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
        "80G/": function(e, t, n) {},
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
                r.o.track(i.SpadeEventType.BrowseFilter, t)
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
        EZOg: function(e, t, n) {},
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
                        }, r.createElement(s.S, a.__assign({}, e))), r.createElement(s.Eb, {
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
                        }, r.createElement(s.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(r.Component)),
                c = n("0INk"),
                d = n("8/mp"),
                m = n("eJ65"),
                p = (n("vDRX"), function(e) {
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
                        return r.createElement(s.Xa, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.jb.Relative,
                            margin: {
                                top: .5
                            }
                        }, r.createElement(m.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, r.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.tb.ViewerList
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row
                        }, r.createElement(s.W, null, Object(i.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(s.Xa, {
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
                        }, Object(i.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(s.Xa, {
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
                u = n("kduP"),
                g = n("2xye"),
                h = function(e) {
                    return r.createElement(s.Xa, null, r.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, a) {
                        return r.createElement(s.Pa, {
                            key: n
                        }, r.createElement(s.U, {
                            to: {
                                pathname: Object(u.c)(t.label),
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
                b = (n("XA5B"), function(e) {
                    var t = r.createElement(s.Eb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.cb.Hidden
                    }, r.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, r.createElement(s.S, a.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(s.U, a.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            b.displayName = "PreviewCardIconicImage";
            var k, y = n("TSYQ"),
                E = (n("cRsL"), function(e) {
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
                C = (n("m493"), function(e) {
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
                    var i = 1,
                        o = null;
                    return e.topBar && (o = r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(E, a.__assign({}, e.topBar))), i = 3), r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
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
                w = (n("kF1+"), function(e) {
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
                S = n("GnwI"),
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
                x = Object(S.b)("PreviewCardThumbnail")(_),
                I = (n("80G/"), function(e) {
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
                    })), r.createElement("div", null, r.createElement(s.U, a.__assign({}, Object(v.a)(e), {
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
                N = n("H1ft"),
                T = n("ZbA5"),
                L = n("QVaV"),
                P = n("hyVY"),
                O = n("MXoD"),
                F = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(k || (k = {}));
            var j, A, D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(i.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(i.d)("unlocked", "VideoPreviewCardRestriction") : Object(i.d)("locked", "VideoPreviewCardRestriction"),
                        a = t ? s.tb.Unlock : s.tb.Lock;
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
                    }, Object(i.d)("View with {title}", {
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
                        asset: a,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            n("5NSO");

            function X(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function R(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(j || (j = {})),
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
                        return r.createElement("div", a.__assign({
                            className: "preview-card"
                        }, Object(v.a)(this.props)), r.createElement(s.Eb, {
                            position: s.jb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.cb.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(s.U, {
                            to: Object(O.a)(this.getTrackingContext(g.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(x, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: X(this.props) && this.props.animatedImageProps || void 0,
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
                        }, r.createElement(this.props.contextualCardActionProps.component, a.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(C, {
                            topLeft: r.createElement(T.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(w, {
                                value: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : X(this.props) ? r.createElement(C, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(w, {
                                value: Object(P.b)(this.props.durationInSeconds),
                                icon: s.tb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(w, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(w, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? r.createElement(w, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : R(this.props) ? r.createElement(C, {
                            topLeft: r.createElement(w, {
                                value: Object(P.b)(this.props.durationInSeconds),
                                icon: s.tb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(w, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? r.createElement(w, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return X(this.props) && this.props.listPosition ? Object(i.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return X(this.props) || R(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === A.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(b, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": j.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === A.SingleGameList || this.props.context === A.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(b, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": j.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(L.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), R(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(i.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : X(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== A.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(I, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(s.Xa, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(F.a, a.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return X(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(D, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!X(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === N.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, a) {
                        switch (e) {
                            case N.a.Balloon:
                                return r.createElement(p, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: a
                                });
                            case N.a.Inline:
                                return r.createElement(h, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case N.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                G = Object(S.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(B);
            n.d(t, !1, function() {
                return j
            }), n.d(t, "b", function() {
                return A
            }), n.d(t, !1, function() {
                return B
            }), n.d(t, "a", function() {
                return G
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
                r = "directory.TAG_FILTER_ADDED",
                i = "directory.TAG_FILTER_CHANGED",
                o = "directory.TAG_FILTER_REMOVED";

            function s(e) {
                return {
                    type: a,
                    languageTagFilters: e
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
                    type: i,
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
        KyCc: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/MKj"),
                o = n("lZCe"),
                s = n("ZS2+"),
                l = n("D7An"),
                c = n("kRBY"),
                d = s.a.wrap(function() {
                    return n.e(151).then(n.bind(null, "jOTV"))
                }, "NewUserSurveyComponent"),
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.firstPageLoadedOnMount = this.props.firstPageLoaded
                    }, t.prototype.render = function() {
                        var e = this,
                            t = {
                                assignments: {
                                    active: function() {
                                        return r.createElement(d, {
                                            loggedIn: e.props.loggedIn,
                                            locale: e.props.locale,
                                            firstPageLoaded: e.firstPageLoadedOnMount
                                        })
                                    },
                                    control: function() {
                                        return null
                                    },
                                    fallback: function() {
                                        return null
                                    }
                                },
                                name: l.b.NewUserSurvey
                            };
                        return r.createElement(o.a, a.__assign({}, t))
                    }, t
                }(r.PureComponent);
            var p = Object(i.connect)(function(e) {
                return {
                    loggedIn: Object(c.f)(e),
                    locale: Object(c.d)(e),
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(m);
            n.d(t, "a", function() {
                return p
            })
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
                m = n("YUvD"),
                p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
                u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
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
                                if (n.props.slotID === c.b.directory.banner) return void((a = n.slotRef.querySelector(p)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                if (n.props.slotID === c.b.directory.rectangle) return void((a = n.slotRef.querySelector(u)) && 1 !== a.clientWidth && n.setState({
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
                h = Object(m.a)(d.c.Amazon)(g);
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
                            return n = new Set(c()), t ? n.add(e) : n.delete(e), l = Array.from(n), r.m.set(o, l), s(Object(i.g)(l)), [2]
                        })
                    })
                }
            }

            function l(e) {
                var t = this;
                return function(n) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return r.m.set(o, e), n(Object(i.g)(e)), [2]
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
                m = n("oB8h"),
                p = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var u = ((a = {})[m.a.Live] = "stream-type-indicator--live", a[m.a.Premiere] = "stream-type-indicator--premiere", a[m.a.Rerun] = "stream-type-indicator--rerun", a[m.a.WatchParty] = "stream-type-indicator--rerun", a),
                g = ((r = {})[m.a.Premiere] = p.tb.VideoPremiere, r[m.a.Rerun] = p.tb.VideoRerun, r[m.a.WatchParty] = p.tb.VideoRerun, r),
                h = ((i = {})[m.a.Premiere] = p.ub.Live, i[m.a.Rerun] = p.ub.Inherit, i[m.a.WatchParty] = p.ub.Inherit, i),
                f = function(e) {
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
                        return e[u[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(p.Eb, {
                            borderRadius: p.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === m.a.Live ? c.createElement(p.Xa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: p.X.Flex,
                            alignItems: p.f.Center
                        }, c.createElement(p.K, {
                            status: p.M.Live,
                            size: p.L.Small
                        })) : c.createElement(p.sb, {
                            asset: g[this.props.type],
                            type: h[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case m.a.Live:
                                return Object(d.d)("LIVE", "StreamTypeIndicator");
                            case m.a.Premiere:
                                return Object(d.d)("Premiere", "StreamTypeIndicator");
                            case m.a.Rerun:
                            case m.a.WatchParty:
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
                    variableDefinitions: [],
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 227
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery AnonFront_FeaturedGames {\ngames(first: 11) {\nedges {\nnode {\nid\nname\nviewersCount\nboxArtURL(width: 285 height: 380)\ntags(tagType: CONTENT) {\n...tagFragment\n}\n}\n}\n}\n}',
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
        m493: function(e, t, n) {},
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 391
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery AnonFrontPage_TopChannels($platformType: PlatformType) {\nstreams(first: 6 platformType: $platformType) {\nedges {\nnode {\nid\ngame {\nid\nname\nboxArtURL(width: 285 height: 380)\n}\nviewersCount\ntitle\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ntags {\n...tagFragment\n}\n}\n}\n}\n}',
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
                    return r.createElement(o.Xa, a.__assign({
                        className: "drops-badge",
                        position: o.jb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.jc)(e)), r.createElement(o.Yb, {
                        direction: o.ac.Top,
                        align: o.Zb.Right,
                        label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                    }, r.createElement(o.Eb, {
                        className: "drops-badge__drops-icon",
                        position: o.jb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.cb.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.ic.Default
                    }, r.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, r.createElement(o.sb, {
                        asset: o.tb.Drops
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
            var m = function(e) {
                var t;
                return e.placeholder ? r.createElement(r.Fragment, null, r.createElement(o.Xa, {
                    margin: {
                        bottom: .5
                    }
                }, r.createElement(o.o, {
                    ratio: o.p.Aspect3x4
                }, r.createElement(o.ib, null))), r.createElement(o.W, null, r.createElement(o.ib, {
                    width: 150
                })), r.createElement(o.W, {
                    fontSize: o.Ca.Size7
                }, r.createElement(o.ib, {
                    width: 100
                }))) : (t = r.createElement(r.Fragment, null, r.createElement(o.Xa, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, r.createElement(o.I, a.__assign({
                    aspect: o.p.BoxArt,
                    borderRadius: o.x.Medium
                }, d(e)))), r.createElement(o.H, null, r.createElement(o.Xa, {
                    display: o.X.Flex
                }, r.createElement(o.Xa, {
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
                    type: o.Vb.H3,
                    fontSize: o.Ca.Size5,
                    lineHeight: o.Ya.Body,
                    ellipsis: !0
                }, e.title)), e.contextualCardActionProps && r.createElement(o.Xa, {
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
                }, Object(o.jc)(e)), r.createElement(o.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && r.createElement(o.Xa, {
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
                return m
            })
        },
        odjZ: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("fvjX"),
                s = n("yR8l"),
                l = n("GnwI"),
                c = n("Ue10"),
                d = (n("BIFG"), n("BEfv"));
            ! function(e) {
                e.Bounce = "animated-tag--bounce", e.NoBounce = "animated-tag--no-bounce"
            }(a || (a = {}));
            var m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null;
                        if (this.props.getTagFromGQL) {
                            if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.contentTag) return null;
                            var t = this.props.data.contentTag;
                            e = i.createElement(c.Ia, {
                                label: t.localizedName,
                                onClick: this.props.onClickForGQLTag && this.props.onClickForGQLTag.bind(this, t),
                                selected: !0,
                                size: c.Sa.Large
                            })
                        } else this.props.formTagProps && (e = i.createElement(c.Ia, r.__assign({}, this.props.formTagProps)));
                        return i.createElement("div", {
                            className: a.NoBounce,
                            "data-tag-filter": this.props.tagID
                        }, e)
                    }, t.prototype.reportInteractive = function() {
                        this.props.getTagFromGQL && this.props.data && (!this.props.data.loading || this.props.data.error) ? this.props.latencyTracking.reportInteractive() : this.props.getTagFromGQL || this.props.latencyTracking.reportInteractive()
                    }, t
                }(i.Component),
                p = Object(o.compose)(Object(s.a)(d, {
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
                }), Object(l.b)("AnimatedTag"))(m);
            n.d(t, "b", function() {
                return a
            }), n.d(t, !1, function() {
                return m
            }), n.d(t, "a", function() {
                return p
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
                m = n("wh8/"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.isLoggedIn || this.props.start()
                    }, t.prototype.render = function() {
                        return this.props.isLoggedIn ? r.createElement(o.a, {
                            to: "/"
                        }) : r.createElement(m.AnonFrontPage, a.__assign({}, this.props))
                    }, t
                }(r.Component);

            function u(e) {
                return {
                    isLoggedIn: Object(d.f)(e)
                }
            }
            var g = Object(i.connect)(u, function(e) {
                    return Object(s.bindActionCreators)({
                        start: function() {
                            return Object(c.e)(l.a.StartUserFlow)
                        }
                    }, e)
                })(p),
                h = Object(i.connect)(u, function(e) {
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
                        }, Object(s.jc)(this.props)), r.createElement(i.a, {
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
                m = n("MPw5"),
                p = n("2xye"),
                u = n("Uive"),
                g = n("cTNz"),
                h = n("yR8l"),
                f = n("TSYQ"),
                v = n("/0dD"),
                b = n("76Lv"),
                k = n("OUrp"),
                y = n("+qcr"),
                E = n("GnwI"),
                C = n("Ue10"),
                w = (n("d34l"), "carousel-card-live"),
                S = "carousel-card-vod",
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderIndicator = function() {
                            return t.props.item.content.type === k.b.Stream ? i.createElement(C.K, {
                                status: C.M.Live,
                                size: C.L.Small,
                                "data-test-selector": w
                            }) : i.createElement(C.sb, {
                                asset: C.tb.GlyphViews,
                                "data-test-selector": S
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
                        return i.createElement(C.Xa, {
                            className: e,
                            margin: {
                                x: .5
                            },
                            padding: {
                                bottom: .5
                            },
                            flexGrow: 1,
                            position: C.jb.Relative
                        }, i.createElement(C.Yb, {
                            label: (this.props.item.isSponsored ? Object(o.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                            direction: C.ac.Top,
                            display: C.X.Block
                        }, i.createElement(C.Ua, r.__assign({
                            onClick: this.itemClick
                        }, Object(C.jc)(this.props)), i.createElement(C.o, {
                            ratio: C.p.Aspect16x9
                        }, i.createElement(C.Xa, {
                            className: "carousel-nav__img-container",
                            fullHeight: !0
                        }, i.createElement(C.Xa, {
                            className: "carousel-nav__meta",
                            zIndex: C.ic.Above,
                            alignItems: C.f.Center,
                            position: C.jb.Absolute,
                            attachBottom: !0,
                            margin: {
                                left: .5
                            }
                        }, this.renderIndicator(), i.createElement(C.Xa, {
                            display: C.X.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, i.createElement(C.W, {
                            color: C.O.Overlay,
                            type: C.Vb.Span
                        }, Object(o.f)(this.props.item.content.viewersCount)))), i.createElement("img", {
                            className: "carousel-nav__img",
                            "data-content-id": this.props.item.content.id,
                            src: t,
                            alt: this.props.item.broadcaster.displayName,
                            "data-a-target": "carousel-image"
                        }), this.props.item.isSponsored ? i.createElement(C.Xa, {
                            position: C.jb.Absolute,
                            attachRight: !0,
                            attachTop: !0
                        }, i.createElement(C.sb, {
                            asset: C.tb.Featured,
                            type: C.ub.Brand,
                            width: 20,
                            height: 20
                        })) : "")))))
                    }, t
                }(i.Component),
                x = Object(E.b)("CarouselCard")(_),
                I = n("6x+I"),
                N = n("QVaV"),
                T = (n("cH/u"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getContentRender = function() {
                            var e = f("horizontal-carousel-player__details", {
                                    "horizontal-carousel-player__details--overlay": t.props.darkTheme
                                }),
                                n = Object(o.d)("playing {game}", {
                                    game: i.createElement(C.U, {
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
                            return i.createElement(C.Eb, {
                                className: "horizontal-carousel-player",
                                borderRadius: C.x.Medium,
                                overflow: C.cb.Hidden,
                                margin: {
                                    bottom: 2
                                },
                                display: C.X.Flex,
                                flexDirection: C.Aa.Row,
                                color: C.O.Alt
                            }, i.createElement(C.Xa, {
                                flexGrow: 1,
                                flexShrink: 0
                            }, i.createElement(C.Xa, {
                                className: "horizontal-carousel-player__video",
                                position: C.jb.Relative,
                                overflow: C.cb.Hidden
                            }, Object(y.c)(a))), i.createElement(C.Eb, {
                                className: e,
                                flexGrow: 0,
                                padding: 2,
                                borderRadius: {
                                    topRight: C.x.Medium,
                                    bottomRight: C.x.Medium
                                }
                            }, i.createElement(C.Xa, {
                                display: C.X.Flex,
                                flexWrap: C.Ba.NoWrap,
                                textAlign: C.Rb.Left,
                                alignItems: C.f.Center,
                                padding: {
                                    bottom: .5
                                }
                            }, i.createElement(C.Xa, {
                                margin: {
                                    right: 1
                                },
                                flexShrink: 0
                            }, i.createElement("span", {
                                onClick: t.promotionCardClick.bind(t, "thumbnail")
                            }, i.createElement(C.U, {
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
                            })))), i.createElement(C.Xa, {
                                margin: {
                                    right: 1
                                },
                                flexGrow: 1
                            }, i.createElement(C.W, {
                                fontSize: C.Ca.Size4,
                                color: C.O.Base,
                                lineHeight: C.Ya.Heading,
                                "data-a-target": "carousel-broadcaster-displayname"
                            }, Object(N.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), i.createElement(C.W, {
                                fontSize: C.Ca.Size6,
                                color: C.O.Base,
                                "data-a-target": "carousel-user-playing-message"
                            }, i.createElement("span", {
                                onClick: t.promotionCardClick.bind(t, "game_name")
                            }, n)))), i.createElement(C.Xa, {
                                margin: {
                                    y: 1
                                }
                            }, i.createElement("span", {
                                onClick: t.promotionCardClick.bind(t, "stream_title")
                            }, i.createElement(C.U, {
                                to: t.getLinkForTitle()
                            }, i.createElement(C.W, {
                                type: C.Vb.Span,
                                "data-a-target": k.a,
                                fontSize: C.Ca.Size3,
                                lineHeight: C.Ya.Heading
                            }, t.props.item.title)))), i.createElement(I, {
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
                            return i.createElement(C.Xa, {
                                display: C.X.Flex,
                                flexWrap: C.Ba.NoWrap,
                                flexShrink: 0,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(C.Xa, {
                                flexGrow: 1,
                                flexShrink: 1,
                                fullWidth: !0
                            }, i.createElement(C.o, {
                                ratio: C.p.Aspect16x9
                            }, i.createElement(C.ib, {
                                "data-test-selector": "carousel-player-placeholder"
                            }))), i.createElement(C.Xa, {
                                className: f(e),
                                flexGrow: 0,
                                flexShrink: 0,
                                padding: 2
                            }, i.createElement(C.Xa, {
                                display: C.X.Flex,
                                flexWrap: C.Ba.NoWrap,
                                textAlign: C.Rb.Left,
                                alignItems: C.f.Start
                            }, i.createElement(C.Xa, {
                                margin: {
                                    right: 1
                                },
                                flexShrink: 0
                            }, i.createElement(C.ib, {
                                width: 40,
                                height: 40
                            })), i.createElement(C.Xa, {
                                margin: {
                                    right: 1
                                },
                                flexGrow: 1
                            }, i.createElement(C.W, null, i.createElement(C.ib, {
                                width: 70
                            })), i.createElement(C.W, null, i.createElement(C.ib, {
                                width: 70
                            })))), i.createElement(C.Xa, {
                                margin: {
                                    y: 1
                                }
                            }, i.createElement(C.W, null, i.createElement(C.ib, {
                                lineCount: 1
                            })), i.createElement(C.W, null, i.createElement(C.ib, {
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
                L = n("dIU+"),
                P = (n("EZOg"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getContentRender = function() {
                            var e = f("vertical-carousel-player__details", {
                                    "vertical-carousel-player__details--overlay": t.props.darkTheme
                                }),
                                n = Object(o.d)("{login} playing {game}", {
                                    login: i.createElement("span", {
                                        onClick: t.promotionCardClick.bind(t, "display_name")
                                    }, i.createElement(C.U, {
                                        to: {
                                            pathname: "/" + t.props.item.broadcaster.login,
                                            state: Object(y.b)(t.props.item.isScheduled)
                                        },
                                        "data-a-target": "carousel-broadcaster-displayname"
                                    }, Object(N.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                    game: i.createElement("span", {
                                        onClick: t.promotionCardClick.bind(t, "game_name")
                                    }, i.createElement(C.U, {
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
                            return i.createElement(C.Eb, {
                                className: "vertical-carousel-player",
                                padding: {
                                    bottom: 1,
                                    x: 1
                                },
                                color: C.O.Alt
                            }, i.createElement(C.Xa, {
                                className: "vertical-carousel-player__video",
                                position: C.jb.Relative,
                                overflow: C.cb.Hidden
                            }, Object(y.c)(a)), i.createElement(C.Xa, {
                                className: f(e),
                                display: C.X.Flex,
                                flexWrap: C.Ba.NoWrap,
                                textAlign: C.Rb.Left,
                                alignItems: C.f.Center,
                                padding: {
                                    y: 1
                                }
                            }, i.createElement(C.Xa, {
                                margin: {
                                    right: 1
                                },
                                flexShrink: 0
                            }, i.createElement("span", {
                                onClick: t.promotionCardClick.bind(t, "thumbnail")
                            }, i.createElement(C.U, {
                                to: "/" + t.props.item.broadcaster.login,
                                "data-a-target": "carousel-avatar-link"
                            }, i.createElement(C.q, {
                                src: t.props.item.broadcaster.profileImageURL,
                                alt: Object(o.d)("Profile Picture for {login}", {
                                    login: t.props.item.broadcaster.login
                                }, "VerticalCarouselPlayer"),
                                size: 40
                            })))), i.createElement(C.Xa, {
                                margin: {
                                    right: 1
                                },
                                flexGrow: 1
                            }, i.createElement(C.W, {
                                "data-a-target": k.a,
                                fontSize: C.Ca.Size5,
                                color: C.O.Base,
                                bold: !0
                            }, t.props.item.title), i.createElement(C.W, {
                                fontSize: C.Ca.Size6,
                                color: C.O.Base
                            }, n)), i.createElement(C.Xa, {
                                flexShrink: 0
                            }, t.renderFollowButton())), i.createElement(I, {
                                source: t.props.item.description || ""
                            }))
                        }, t.getPlaceholderRender = function() {
                            return i.createElement(C.Xa, {
                                padding: {
                                    bottom: 1,
                                    x: 1
                                }
                            }, i.createElement(C.o, {
                                ratio: C.p.Aspect16x9
                            }, i.createElement(C.ib, {
                                "data-test-selector": "carousel-player-placeholder"
                            })), i.createElement(C.Xa, {
                                display: C.X.Flex,
                                flexWrap: C.Ba.NoWrap,
                                textAlign: C.Rb.Left,
                                alignItems: C.f.Center,
                                padding: {
                                    y: 1
                                }
                            }, i.createElement(C.Xa, {
                                margin: {
                                    right: 1
                                },
                                flexShrink: 0
                            }, i.createElement(C.ib, {
                                width: 40,
                                height: 40
                            })), i.createElement(C.Xa, {
                                margin: {
                                    right: 1
                                },
                                flexGrow: 1
                            }, i.createElement(C.W, null, i.createElement(C.ib, {
                                width: 150
                            })), i.createElement(C.W, null, i.createElement(C.ib, {
                                width: 100
                            }))), i.createElement(C.Xa, {
                                flexShrink: 0
                            }, i.createElement(C.ib, {
                                width: 70,
                                height: 30
                            }))), i.createElement(C.W, null, i.createElement(C.ib, {
                                lineCount: 3
                            })))
                        }, t.promotionCardClick = function(e) {
                            t.props.onPromotionCardClick(t.props.item, e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                    }, t.prototype.renderFollowButton = function() {
                        return this.props.firstPageLoaded ? i.createElement(L.a, {
                            "data-a-target": "carousel-follow-button",
                            channelLogin: this.props.item.broadcaster.login,
                            followUIType: L.b.IconAndText,
                            unfollowUIType: L.b.IconOnly,
                            showLoadingPlaceholder: !0
                        }) : i.createElement(C.ib, {
                            width: 70,
                            height: 30
                        })
                    }, t
                }(i.Component));
            var O, F = Object(a.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                })(P),
                j = n("44NB"),
                A = (n("QzrU"), 6),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeItem: t.props.items[0],
                            startingIndex: 0
                        }, t.displayEventFired = !1, t.renderLeftButton = function() {
                            if (t.props.items.length > A) {
                                var e = t.state.startingIndex > 0;
                                return i.createElement(C.Xa, {
                                    display: C.X.Flex,
                                    alignItems: C.f.Stretch
                                }, i.createElement(C.A, {
                                    ariaLabel: Object(o.d)("Page Left", "CarouselPlayerComponent"),
                                    icon: C.tb.AngleLeft,
                                    onClick: t.handlePageLeft,
                                    "data-test-selector": k.d,
                                    disabled: !e
                                }))
                            }
                            return null
                        }, t.renderRightButton = function() {
                            if (t.props.items.length > A) {
                                var e = t.props.items.length > t.state.startingIndex + A;
                                return i.createElement(C.Xa, {
                                    display: C.X.Flex,
                                    alignItems: C.f.Stretch
                                }, i.createElement(C.A, {
                                    ariaLabel: Object(o.d)("Page Right", "CarouselPlayerComponent"),
                                    icon: C.tb.AngleRight,
                                    onClick: t.handlePageRight,
                                    "data-test-selector": k.e,
                                    disabled: !e
                                }))
                            }
                            return null
                        }, t.getCardsRender = function() {
                            if (t.state.activeItem) return t.displayEventFired || (Object(j.a)(t.props.items), t.displayEventFired = !0), t.props.items.slice(t.state.startingIndex, t.state.startingIndex + A).map(function(e, n) {
                                return i.createElement(x, {
                                    key: e.content.id,
                                    item: e,
                                    itemClick: t.selectContent,
                                    itemActive: e.content.id === t.state.activeItem.content.id,
                                    "data-a-target": "carousel-card-" + n
                                })
                            });
                            for (var e = [], n = 0; n < A; n++) e.push(i.createElement(C.Xa, {
                                key: n,
                                margin: {
                                    x: .5
                                },
                                flexGrow: 1
                            }, i.createElement(C.o, {
                                ratio: C.p.Aspect16x9
                            }, i.createElement(C.ib, null)), i.createElement(C.Xa, {
                                margin: {
                                    top: .5
                                }
                            }, i.createElement(C.ib, {
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
                                    return i.createElement(T, r.__assign({}, e))
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
                            Object(j.b)(n)
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
                            Object(j.d)(o, n)
                        }, t.trackPromotionView = function(e) {
                            var n = {
                                broadcast_type: e.content.subType,
                                carousel_index: t.props.items.indexOf(e),
                                channel: e.broadcaster.login,
                                game: e.content.gameName,
                                promotion_was_scheduled: e.isScheduled,
                                views: e.content.viewersCount
                            };
                            Object(j.e)(n)
                        }, t.handlePageRight = function() {
                            var e = t.props.items.length - A;
                            e !== t.state.startingIndex && (Object(j.c)("next"), t.setState({
                                startingIndex: e
                            }))
                        }, t.handlePageLeft = function() {
                            t.state.startingIndex > 0 && (Object(j.c)("prev"), t.setState({
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
                        return this.props.darkTheme && (e = Object(b.b)(v.a.Dark)), i.createElement(C.Xa, {
                            className: f("carousel-player", e)
                        }, this.getLayoutRender(), i.createElement(C.Eb, {
                            background: C.r.Alt,
                            borderRadius: C.x.Medium
                        }, i.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexWrap: C.Ba.NoWrap,
                            padding: {
                                x: .5,
                                y: 1
                            }
                        }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                    }, t
                }(i.Component),
                X = Object(E.b)("CarouselPlayer")(D),
                R = n("pR+Y");
            ! function(e) {
                e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
            }(O || (O = {}));

            function B(e, t, n) {
                switch (t) {
                    case O.AnonFront:
                        return i.createElement(X, {
                            items: e,
                            isLoading: n,
                            layout: k.c.Horizontal,
                            darkTheme: !0
                        });
                    default:
                        return i.createElement(C.Eb, {
                            className: "featured-broadcasters",
                            background: C.r.Base,
                            elevation: 1
                        }, i.createElement(C.Xa, {
                            padding: 1
                        }, i.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            color: C.O.Alt2
                        }, Object(o.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), i.createElement(X, {
                            items: e,
                            isLoading: n,
                            layout: k.c.Vertical
                        }))
                }
            }
            var G, z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getRender = function(e) {
                            var n = !(!t.props.data.loading && !t.props.data.error);
                            return B(e, t.props.renderContext, n)
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
                    }, t = r.__decorate([Object(h.a)(R, {
                        options: function(e) {
                            return {
                                variables: {
                                    language: o.p.intl.getLanguageCode(),
                                    first: e.streamCount || 8,
                                    acceptedMature: o.m.get("mature", !1)
                                }
                            }
                        }
                    }), Object(E.b)("FeaturedBroadcasters")], t)
                }(i.Component),
                V = n("KyCc"),
                W = n("sSlw"),
                M = n("9pSj"),
                U = n("oJmH"),
                H = n("kduP"),
                q = n("oJov"),
                Q = n("AZIu"),
                Y = n("4HIT"),
                Z = n("x/sq"),
                $ = n("isum"),
                J = (n("MV3Z"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            adDisplayed: !1
                        }, t.getItems = function() {
                            if (t.props.data.loading || t.props.data.error || !t.props.data.games || !t.props.data.games.edges) {
                                for (var e = [], n = 0; n < 12; n++) e.push(i.createElement(C.P, {
                                    cols: 2,
                                    key: "placeholder-" + n
                                }, i.createElement(C.Xa, {
                                    key: n,
                                    margin: {
                                        bottom: n < 6 ? 4 : 0
                                    }
                                }, i.createElement(C.Xa, {
                                    margin: {
                                        bottom: .5
                                    }
                                }, i.createElement(C.o, {
                                    ratio: C.p.Aspect3x4
                                }, i.createElement(C.ib, null))), i.createElement(C.W, null, i.createElement(C.ib, {
                                    width: 120
                                })), i.createElement(C.W, {
                                    fontSize: C.Ca.Size7
                                }, i.createElement(C.ib, {
                                    width: 80
                                })))));
                                return e
                            }
                            var a = t.props.data.games.edges.slice(0, t.state.adDisplayed ? 10 : 12).map(function(e, t) {
                                    var n = e.node;
                                    if (!n || !n.id) return null;
                                    var a = Object(Z.a)({
                                            tags: n && n.tags,
                                            section: Q.a.Categories
                                        }),
                                        s = null !== n.viewersCount ? Object(o.d)("{viewerCount,number} viewers", {
                                            viewerCount: n.viewersCount || ""
                                        }, "FeaturedGames") : "";
                                    return i.createElement(C.P, {
                                        cols: 2,
                                        key: "game-" + n.id
                                    }, i.createElement(C.Xa, {
                                        margin: {
                                            bottom: t < 6 ? 4 : 0
                                        }
                                    }, i.createElement(q.a, {
                                        linkTo: Object(H.c)(n.name),
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
                                s = i.createElement(C.Xa, {
                                    display: C.X.Flex,
                                    flexGrow: 1,
                                    justifyContent: C.Wa.Center,
                                    key: "ad"
                                }, i.createElement(u.a, {
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
                        var e = i.createElement(C.Xa, {
                                display: C.X.Flex,
                                flexDirection: C.Aa.Row,
                                alignItems: C.f.Baseline,
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(C.W, {
                                fontSize: C.Ca.Size2,
                                color: C.O.Base
                            }, Object(o.d)("Featured Games", "FeaturedGames")), i.createElement(C.Xa, {
                                className: "anon-featured-games__subheader",
                                margin: {
                                    left: 2
                                }
                            }, i.createElement(C.W, {
                                fontSize: C.Ca.Size3,
                                color: C.O.Alt2
                            }, Object(o.d)("Games people are watching now", "FeaturedGames")))),
                            t = i.createElement(C.Xa, {
                                display: C.X.Flex,
                                justifyContent: C.Wa.End
                            }, i.createElement(C.Pa, {
                                display: C.X.Flex,
                                alignItems: C.f.Center
                            }, i.createElement(C.U, {
                                to: "/directory",
                                "data-a-target": "see-all-live-games-link"
                            }, i.createElement(C.W, {
                                fontSize: C.Ca.Size4
                            }, Object(o.d)("See all live games", "FeaturedGames")), i.createElement(C.Eb, {
                                color: C.O.Link,
                                margin: {
                                    left: .5
                                },
                                display: C.X.InlineFlex,
                                alignItems: C.f.Center
                            }, i.createElement(C.sb, {
                                asset: C.tb.AngleRight,
                                width: 14,
                                height: 14
                            })))));
                        return i.createElement(C.Eb, {
                            className: "anon-featured-games",
                            background: C.r.Base,
                            padding: {
                                x: 1
                            }
                        }, e, i.createElement(C.Ja, null, this.getItems()), t)
                    }, t.prototype.postRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(i.Component)),
                K = Object(U.compose)(Object(h.a)($), Object(E.b)("FeaturedGames"))(J),
                ee = n("sqxy");
            ! function(e) {
                e[e.All = 1] = "All", e[e.Xbox = 2] = "Xbox", e[e.PS4 = 3] = "PS4"
            }(G || (G = {}));
            var te = n("oE+Y"),
                ne = (n("VzB4"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getItems = function() {
                            if (t.props.data.loading || t.props.data.error || !t.props.data.streams || !t.props.data.streams.edges) {
                                for (var e = [], n = 0; n < 6; n++) e.push(i.createElement(C.Xa, {
                                    key: n,
                                    margin: {
                                        bottom: 2
                                    }
                                }, i.createElement(C.Xa, {
                                    margin: {
                                        bottom: .5
                                    }
                                }, i.createElement(C.o, {
                                    ratio: C.p.Aspect16x9
                                }, i.createElement(C.ib, null))), i.createElement(C.W, null, i.createElement(C.ib, {
                                    width: 150
                                })), i.createElement(C.W, {
                                    fontSize: C.Ca.Size7
                                }, i.createElement(C.ib, {
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
                                    s = a && a.game ? Object(H.c)(a.game.name) : "",
                                    l = Object(Z.a)({
                                        tags: a.tags,
                                        section: Q.a.LiveChannels
                                    });
                                return l && (l.linkPath = Y.a.PopularTag), i.createElement(C.Xa, {
                                    className: "anon-top-channels",
                                    key: a.broadcaster.id,
                                    margin: {
                                        bottom: 2
                                    }
                                }, i.createElement(ee.a, {
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
                        var e = i.createElement(C.Xa, {
                                display: C.X.Flex,
                                flexDirection: C.Aa.Row,
                                alignItems: C.f.Baseline,
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(C.W, {
                                fontSize: C.Ca.Size2,
                                color: C.O.Base
                            }, this.getTitle()), i.createElement(C.Xa, {
                                className: "anon-top-channels__subheader",
                                margin: {
                                    left: 2
                                }
                            }, i.createElement(C.W, {
                                fontSize: C.Ca.Size3,
                                color: C.O.Alt2
                            }, this.getSubtitle()))),
                            t = i.createElement(C.Xa, {
                                className: "anon-top-channels__footer",
                                display: C.X.Flex,
                                justifyContent: C.Wa.End
                            }, i.createElement(C.Pa, {
                                display: C.X.Flex,
                                alignItems: C.f.Center
                            }, i.createElement(C.U, {
                                to: "/directory/all",
                                "data-a-target": "see-all-" + this.getDataProp() + "-channels-link",
                                "data-test-selector": "see-all-" + this.getDataProp() + "-channels-link"
                            }, i.createElement(C.W, {
                                fontSize: C.Ca.Size4
                            }, Object(o.d)("See all live channels", "TopChannels")), i.createElement(C.Eb, {
                                color: C.O.Link,
                                margin: {
                                    left: .5
                                },
                                display: C.X.InlineFlex,
                                alignItems: C.f.Center
                            }, i.createElement(C.sb, {
                                asset: C.tb.AngleRight,
                                width: 14,
                                height: 14
                            })))));
                        return i.createElement("div", null, e, i.createElement(C.bc, {
                            gutterSize: C.dc.Small,
                            childWidth: C.cc.Large,
                            placeholderItems: 6
                        }, this.getItems()), t)
                    }, t.prototype.postRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.getSubtitle = function() {
                        switch (this.props.type) {
                            case G.All:
                                return Object(o.d)("Broadcasters people are watching now", "TopChannels");
                            case G.PS4:
                                return Object(o.d)("Channels broadcasted from Playstation 4", "TopChannels");
                            case G.Xbox:
                                return Object(o.d)("Channels broadcasted from Xbox one", "TopChannels");
                            default:
                                return ""
                        }
                    }, t.prototype.getTitle = function() {
                        switch (this.props.type) {
                            case G.All:
                                return Object(o.d)("Top Live Channels", "TopChannels");
                            case G.PS4:
                                return Object(o.d)("Top PS4 Channels", "TopChannels");
                            case G.Xbox:
                                return Object(o.d)("Top Xbox One Channels", "TopChannels");
                            default:
                                return ""
                        }
                    }, t.prototype.getDataProp = function() {
                        switch (this.props.type) {
                            case G.All:
                                return "live";
                            case G.PS4:
                                return "ps4";
                            case G.Xbox:
                                return "xbox";
                            default:
                                return ""
                        }
                    }, t
                }(i.Component)),
                ae = Object(U.compose)(Object(h.a)(te, {
                    options: function(e) {
                        var t = "";
                        switch (e.type) {
                            case G.PS4:
                                t = "ps4";
                                break;
                            case G.Xbox:
                                t = "xbox";
                                break;
                            default:
                                t = "all"
                        }
                        return {
                            variables: {
                                platformType: t
                            }
                        }
                    }
                }), Object(E.b)("TopChannels"))(ne),
                re = (n("sdyv"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onTakeoverRendered = function() {
                            n.setState({
                                takeoverRendered: !0
                            })
                        }, n.renderSocialBar = function() {
                            return i.createElement(C.Eb, {
                                className: "anon-front__social-container",
                                alignItems: C.f.Center,
                                display: C.X.Flex,
                                flexDirection: C.Aa.Column,
                                justifyContent: C.Wa.Center,
                                borderTop: !0,
                                borderBottom: !0,
                                padding: {
                                    y: 3,
                                    x: 2
                                }
                            }, i.createElement(C.W, {
                                fontSize: C.Ca.Size3
                            }, Object(o.d)("Follow the latest Twitch news", "AnonFrontPage")), i.createElement(C.Xa, {
                                margin: {
                                    top: 1
                                },
                                display: C.X.Flex,
                                flexDirection: C.Aa.Row
                            }, i.createElement(C.z, {
                                linkTo: "https://www.facebook.com/twitch",
                                targetBlank: !0,
                                size: C.D.Large,
                                "data-a-target": "frontpage-facebook-link"
                            }, Object(o.d)("Facebook", "AnonFrontPage")), i.createElement(C.Xa, {
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
                            return i.createElement(C.Xa, null, i.createElement(C.Eb, {
                                background: C.r.Base,
                                padding: {
                                    x: 2,
                                    y: 3
                                },
                                margin: {
                                    x: "auto"
                                },
                                className: "anon-front__content-section"
                            }, i.createElement(ae, {
                                type: G.PS4,
                                key: "channels.ps4"
                            })), i.createElement(C.Eb, {
                                background: C.r.Base,
                                padding: {
                                    x: 2,
                                    y: 3
                                },
                                margin: {
                                    x: "auto"
                                },
                                className: "anon-front__content-section"
                            }, i.createElement(ae, {
                                type: G.Xbox,
                                key: "channels.xbox"
                            })))
                        }, n.onSlotAdded = function() {
                            n.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(g.b.anonFront).length && m.a.display(g.b.anonFront.takeover), {
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
                        o.p.setPageTitle()
                    }, t.prototype.render = function() {
                        return i.createElement(C.Xa, {
                            fullHeight: !0
                        }, i.createElement(W.a, null, i.createElement(M.a, null)), i.createElement(C.Eb, {
                            className: "anon-front",
                            background: C.r.Base,
                            position: C.jb.Relative,
                            fullHeight: !0
                        }, i.createElement("div", {
                            id: "mantle_skin",
                            className: this.state.takeoverRendered ? "anon-front__takeover" : ""
                        }, i.createElement(u.a, {
                            adSize: g.c.anonFront.takeover,
                            adUnit: g.d.frontpage,
                            "data-a-target": "site-skin-ad-slot",
                            slotID: g.b.anonFront.takeover,
                            targeting: {
                                pagetype: g.a.frontpage
                            },
                            slotRendered: this.onTakeoverRendered,
                            autoEnable: !1
                        }), i.createElement(C.Xa, {
                            className: "anon-front__featured-section",
                            display: C.X.Flex,
                            flexWrap: C.Ba.Wrap,
                            justifyContent: C.Wa.Center
                        }, i.createElement(C.Xa, {
                            className: "anon-front__banner"
                        }, i.createElement(u.a, {
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
                        })), i.createElement(C.Xa, {
                            className: "anon-front__content-section",
                            padding: this.state.takeoverRendered ? 2 : 0
                        }, i.createElement(z, {
                            renderContext: O.AnonFront
                        })), i.createElement(C.Xa, {
                            className: "anon-front__sizzle-strip",
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center
                        }, i.createElement(u.a, {
                            adSize: g.c.anonFront.sizzle,
                            adUnit: g.d.sizzle,
                            "data-a-target": "anon-front-sizzle-strip-ad-slot",
                            slotID: g.b.anonFront.sizzle,
                            targeting: {
                                pagetype: g.a.frontpage
                            },
                            autoEnable: !1
                        }))), i.createElement(s.a, null, i.createElement(C.Eb, {
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
                        }, i.createElement(K, null))), this.renderSocialBar(), this.props.firstPageLoaded && i.createElement(C.Eb, {
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
                        }, i.createElement(ae, {
                            type: G.All,
                            key: "channels.all"
                        })), this.props.firstPageLoaded && this.renderPlatformTopChannels(), i.createElement(C.Xa, {
                            className: "anon-front__bottom",
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center
                        }, i.createElement(u.a, {
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
                        })), i.createElement(l.a, null))), i.createElement(V.a, null))
                    }, t.prototype.componentWillUnmount = function() {
                        g.g.removeListener(g.e, this.onSlotAdded)
                    }, t = r.__decorate([Object(E.b)("AnonFrontPage", {
                        destination: d.a.Index,
                        autoReportInteractive: !0
                    }), Object(c.a)({
                        location: p.PageviewLocation.FrontPage
                    })], t)
                }(i.Component));
            var ie = Object(a.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(re);
            n.d(t, "AnonFrontPage", function() {
                return ie
            })
        },
        "x/sq": function(e, t, n) {
            "use strict";
            var a = n("/7QA"),
                r = n("odjZ"),
                i = {},
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
                    m = e.scrollToTop;
                if (t) {
                    return {
                        tags: t,
                        callback: function(e) {
                            m && m(), e.isLanguageTag && a.p.store.dispatch(Object(s.c)(e.id, !0));
                            var t = d.every(function(t) {
                                    return t.id !== e.id
                                }),
                                c = Object(s.a)().every(function(t) {
                                    return t !== e.id
                                });
                            if (t && c) {
                                l && l(e);
                                var p = {
                                    section: n,
                                    tagPosition: d.length,
                                    searchEvent: !1,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(o.b)(p)
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