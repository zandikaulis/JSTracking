(window.webpackJsonp = window.webpackJsonp || []).push([
    [155], {
        "0eTn": function(e, t, r) {},
        "16Gl": function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return a
            }), r.d(t, "c", function() {
                return i
            }), r.d(t, "d", function() {
                return s
            }), r.d(t, "a", function() {
                return o
            });
            var n = r("kduP");

            function a(e, t) {
                return Object(n.d)(e) + "/edit/" + t
            }

            function i(e, t) {
                return Object(n.d)(e) + "/highlighter/" + t
            }

            function s(e, t) {
                return Object(n.d)(e) + "/schedule/" + t
            }

            function o(e, t) {
                return Object(n.d)(e) + "/appeal/" + t
            }
        },
        "17YR": function(e, t, r) {
            "use strict";

            function n(e) {
                return e.map(function(e) {
                    return e.join(",")
                }).join("\n")
            }

            function a(e) {
                for (var t = [], r = e[0].length, n = function(r) {
                        t.push(e.map(function(e) {
                            return e[r]
                        }))
                    }, a = 0; a < r; a++) n(a);
                return t
            }

            function i(e, t) {
                if ("function" == typeof window.navigator.msSaveBlob) {
                    var r = new Blob([t], {
                        type: "text/csv;charset=utf-8;"
                    });
                    return window.navigator.msSaveBlob(r, e)
                }
                var n = document.createElement("a"),
                    a = encodeURIComponent(t);
                void 0 === n.download ? n.href = "data:attachment/csv;charset=utf-8," + a : (n.href = "data:text/csv;charset=utf-8," + a, n.download = e), n.target = "_blank", n.setAttribute("style", "visibility: hidden"), document.body.appendChild(n), n.click(), document.body.removeChild(n)
            }
            r.d(t, "b", function() {
                return n
            }), r.d(t, "c", function() {
                return a
            }), r.d(t, "a", function() {
                return i
            })
        },
        "1AsC": function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            });
            var n = r("q1tI"),
                a = r("gq0V"),
                i = r("mZc/"),
                s = r("Ue10"),
                o = function(e) {
                    var t = e.children,
                        r = e.tooltip,
                        i = e.title;
                    return n.createElement(s.Ya, {
                        margin: {
                            bottom: 4
                        }
                    }, n.createElement(c, {
                        tooltip: r
                    }, i), n.createElement(s.Fb, {
                        borderRadius: Object(a.b)() ? s.x.Large : void 0,
                        elevation: 1,
                        background: s.r.Base
                    }, t))
                },
                c = function(e) {
                    var t = e.children,
                        r = e.tooltip;
                    return n.createElement(s.Ya, {
                        alignItems: s.f.Center,
                        display: s.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, n.createElement(s.W, {
                        type: s.Wb.H5,
                        bold: !0
                    }, t), r && n.createElement(i.a, {
                        direction: s.v.TopRight
                    }, r))
                }
        },
        "2rRr": function(e, t, r) {
            "use strict";
            var n, a = r("/MKj"),
                i = r("fvjX"),
                s = r("S1Za"),
                o = r("AKMF"),
                c = r("mrSG"),
                l = r("q1tI"),
                u = r("/7QA"),
                m = r("hyVY"),
                d = r("f00E"),
                p = r("GnwI"),
                h = r("Ue10");
            r("FkHV");
            ! function(e) {
                e.Overlay = "embed-overlay", e.ViewCount = "embed-overlay__view-count", e.Wrapper = "embed-overlay__wrapper"
            }(n || (n = {}));
            var f;
            ! function(e) {
                e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
            }(f || (f = {}));
            var b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showOverlay: !0,
                            playerRefID: Object(d.a)()
                        }, t.getOverlayComponent = function() {
                            var e = t.props,
                                r = e.createdAt,
                                a = e.lengthSeconds,
                                i = e.thumbnailURL,
                                s = e.type,
                                o = e.viewCount,
                                c = a && a > 0 ? Object(m.b)(a) : "";
                            return l.createElement("a", {
                                href: "#",
                                onClick: t.handleClick,
                                "data-test-selector": n.Overlay
                            }, l.createElement(h.o, {
                                ratio: h.p.Aspect16x9
                            }, l.createElement(h.Ya, null, l.createElement(h.Qa, {
                                fullWidth: !0,
                                fullHeight: !0,
                                position: h.kb.Absolute
                            }, l.createElement("img", {
                                src: i
                            })), l.createElement(h.Ya, {
                                className: "embed-card__overlay",
                                position: h.kb.Absolute,
                                attachLeft: !0,
                                attachTop: !0,
                                fullWidth: !0,
                                fullHeight: !0
                            }, l.createElement(h.Ya, {
                                className: "embed-card__play",
                                display: h.X.Flex,
                                justifyContent: h.Xa.Center,
                                position: h.kb.Absolute,
                                attachLeft: !0,
                                attachTop: !0,
                                fullWidth: !0,
                                fullHeight: !0
                            }, l.createElement(h.tb, {
                                asset: h.ub.Play,
                                width: 50,
                                height: 50
                            })), l.createElement(h.Ya, {
                                position: h.kb.Absolute,
                                padding: 1,
                                attachBottom: !0,
                                attachLeft: !0
                            }, r && l.createElement(h.W, null, Object(u.c)(new Date(r), "medium")), l.createElement(h.Ya, null, s === f.Stream && l.createElement(h.Ya, {
                                display: h.X.Inline,
                                margin: {
                                    right: .5
                                }
                            }, l.createElement(h.K, {
                                status: h.M.Live
                            })), void 0 !== o && l.createElement("span", null, t.getFormattedViewCount(o, s)))), l.createElement(h.Ya, {
                                position: h.kb.Absolute,
                                padding: 1,
                                attachBottom: !0,
                                attachRight: !0
                            }, c && l.createElement(h.Ya, null, l.createElement(h.W, null, c)))), l.createElement(h.Fb, {
                                position: h.kb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                margin: 1,
                                fontSize: h.Ca.Size5
                            }, s === f.Stream && l.createElement(h.hb, {
                                label: Object(u.d)("Live", "EmbedOverlayPill"),
                                type: h.ib.Live
                            }), s === f.Video && l.createElement(h.hb, {
                                label: Object(u.d)("Video", "EmbedOverlayPill"),
                                type: h.ib.Overlay
                            }), s === f.Clip && l.createElement(h.hb, {
                                label: Object(u.d)("Clip", "EmbedOverlayPill"),
                                type: h.ib.Overlay
                            })))))
                        }, t.handleClick = function(e) {
                            e.preventDefault(), t.setState({
                                showOverlay: !1
                            }), t.props.type === f.Clip && t.props.reportPlayerInstanceStarted(t.state.playerRefID), t.props.onClick && t.props.onClick()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        if (this.props.type === f.Clip) {
                            var t = e.activeVideoPlayerRefID;
                            t === this.state.playerRefID ? this.setState({
                                showOverlay: !1
                            }) : this.props.activeVideoPlayerRefID === t || t === this.state.playerRefID || this.state.showOverlay || this.setState({
                                showOverlay: !0
                            })
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.state.showOverlay ? this.getOverlayComponent() : l.createElement(h.o, {
                            ratio: h.p.Aspect16x9
                        }, l.createElement("div", {
                            "data-test-selector": n.Wrapper
                        }, this.props.children))
                    }, t.prototype.getFormattedViewCount = function(e, t) {
                        switch (t) {
                            case f.Stream:
                                return Object(u.d)("{viewCount,number} viewers", {
                                    viewCount: e
                                }, "OverlayViewCount");
                            case f.Clip:
                            case f.Video:
                                return Object(u.d)("{viewCount,number} views", {
                                    viewCount: e
                                }, "OverlayViewCount");
                            default:
                                return ""
                        }
                    }, t
                }(l.Component),
                g = Object(p.b)("EmbedOverlay")(b);
            var v = Object(a.connect)(function(e) {
                return {
                    activeVideoPlayerRefID: Object(o.a)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    reportPlayerInstanceStarted: s.b
                }, e)
            })(g);
            r.d(t, "a", function() {
                return v
            }), r.d(t, !1, function() {
                return n
            }), r.d(t, !1, function() {
                return "embed-overlay"
            }), r.d(t, !1, function() {
                return "embed-overlay-wrapper"
            }), r.d(t, "b", function() {
                return f
            }), r.d(t, !1, function() {
                return b
            }), r.d(t, !1, function() {
                return g
            })
        },
        "4eyL": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("vYsf"),
                s = r("u2gS"),
                o = r("dG1e");
            var c, l = r("/7QA"),
                u = r("gq0V");

            function m(e) {
                return function() {
                    if (c) return c;
                    var e = Object(u.b)(),
                        t = function(t) {
                            return e ? Object(l.d)("Get {numOfPeople, number} people chatting at the same time to unlock additional VIP badges", {
                                numOfPeople: t
                            }, "AchievementDescription") : Object(l.d)("Get {numOfPeople, number} people chatting at the same time", {
                                numOfPeople: t
                            }, "AchievementDescription")
                        },
                        r = Object(l.d)("Chat with your viewers to engage them. Engaged viewers are more likely to return.", "AchievementLongDescription");
                    return c = {
                        broadcast_n_hours_30_days: {
                            title: Object(l.d)("New day, new stream", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Stream for {numOfHours, number} hours in the last 30 days", {
                                    numOfHours: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Stream on a regular schedule to help draw in more viewers. Find the balance that works for you.", "AchievementLongDescription"),
                            shouldConvertMinuteProgressToHour: !0
                        },
                        n_followers: {
                            title: Object(l.d)("What is thy bidding?", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Reach {numOfFollowers, number} followers", {
                                    numOfFollowers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Followers can opt in to be notified when you stream or share an update.", "AchievementLongDescription")
                        },
                        n_broadcast_days_30_days: {
                            title: Object(l.d)("Like clockwork", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Stream for {numOfDays, number} unique days in the last 30 days", {
                                    numOfDays: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Stream on different days to reach different viewers. Unique days are based on GMT.", "AchievementLongDescription")
                        },
                        n_concurrents_30_days: {
                            title: Object(l.d)("Who watches the watchers?", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Reach {numOfViewers, number} average viewers in the last 30 days", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Check average viewers on your stats page. If you notice a spike, try to replicate that magic!", "AchievementLongDescription")
                        },
                        first_stream: {
                            title: Object(l.d)("It's happening", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Start your first stream", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Start your first stream on Twitch to complete this achievement.", "AchievementLongDescription")
                        },
                        single_dashboard_visit: {
                            title: Object(l.d)("Know your stuff", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Explore your dashboard", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Your dashboard is the best place to update your stream settings, monitor stats, and more.", "AchievementLongDescription")
                        },
                        single_broadcast_title: {
                            title: Object(l.d)("Name of the game", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Update your stream title", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Add a compelling title to draw viewers to your stream.", "AchievementLongDescription")
                        },
                        single_select_game_community: {
                            title: Object(l.d)("We belong", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Update your Game/Category", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Tag your stream with a Game/Category and Community to help viewers find your channel.", "AchievementLongDescription")
                        },
                        n_hours_lifetime: {
                            title: Object(l.d)("The empire business", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Stream for {numOfHours, number} hours total", {
                                    numOfHours: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("The more you stream, the more often viewers can tune in. Take a break whenever you need to.", "AchievementLongDescription"),
                            shouldConvertMinuteProgressToHour: !0
                        },
                        n_same_week_stream_start_time: {
                            title: Object(l.d)("Same time next week", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Start a stream on the same day of week and time for {numOfWeeks, number} weeks in a row", {
                                    numOfWeeks: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("When you stream on the same day and time each week, viewers know when to tune in.", "AchievementLongDescription")
                        },
                        n_minute_watched_lifetime: {
                            title: Object(l.d)("Kind of a big deal", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Reach {numOfHours, number} hours watched total on your channel", {
                                    numOfHours: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("The more you stream, the more often viewers can tune in. If you're partner and unlock this achievement, you'll have a chance to get swag!", "AchievementLongDescription"),
                            shouldConvertMinuteProgressToHour: !0
                        },
                        n_viewers_lifetime: {
                            title: Object(l.d)("People know me", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Have {numOfViewers, number} viewers at the same time", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Keep your viewers around by welcoming them to your channel and responding to their comments.", "AchievementLongDescription")
                        },
                        talk_a_little: {
                            title: Object(l.d)("Talk a little", "AchievementTitle"),
                            description: t,
                            longDescription: r
                        },
                        n_unique_chatter_broadcast: {
                            title: Object(l.d)("Talk to me", "AchievementTitle"),
                            description: t,
                            longDescription: r
                        },
                        n_raid_consecutive_broadcast: {
                            title: Object(l.d)("Raiding party", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Raid {numOfStreams, number} times with 2 or more raiders", {
                                    numOfStreams: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)('Type "/raid (channel)" in chat to bring your viewers to another awesome streamer.', "AchievementLongDescription")
                        },
                        n_days_since_first_stream: {
                            title: Object(l.d)("Happy Twitchiversary", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Reach your {numOfYears, number}-year streaming anniversary on Twitch", {
                                    numOfYears: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("We really wanted to send you some cake, but this Achievement will have to do. See you again next year!", "AchievementLongDescription")
                        },
                        n_autohost: {
                            title: Object(l.d)("Mr. Roboto", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Add {numOfChannels, number} channels to your auto host list", {
                                    numOfChannels: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Add to your auto host list from channel settings to highlight another channel whenever you're offline.", "AchievementLongDescription")
                        },
                        single_twitchcon2017: {
                            title: Object(l.d)("TwitchCon get", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Purchase a TwitchCon ticket", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("You provided your Twitch ID when you purchased your TwitchCon ticket. If you missed this year, hopefully you can make it next year!", "AchievementLongDescription")
                        },
                        single_chat: {
                            title: Object(l.d)("Message in a bottle", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Send a chat message in your own channel", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Talking while streaming is great, but also try chatting and emoting in your own channel.", "AchievementLongDescription")
                        },
                        n_days_no_viewers: {
                            title: Object(l.d)("Hang in there", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Had < {numOfViewers, number} viewers for two streams and kept at it", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Streaming isn't easy and it takes time to attract viewers. Try inviting your friends to get started.", "AchievementLongDescription")
                        },
                        n_max_concurrents_m_streams: {
                            title: Object(l.d)("The horde descends", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Reach at least {numOfViewers, number} viewers over five streams.", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("They'll tell two friends. And they'll tell two friends. And they'll tell two friends. See a pattern?", "AchievementLongDescription")
                        }
                    }
                }()[e] || {
                    title: e,
                    description: function() {
                        return e
                    },
                    longDescription: e
                }
            }

            function d(e, t) {
                return new s.b(e.map(function(e) {
                    return function(e, t) {
                        var r = m(e.key),
                            n = Object(u.b)(),
                            a = e.progress,
                            i = e.progress_cap;
                        n && r.shouldConvertMinuteProgressToHour && (a /= 60, i /= 60);
                        return new s.a({
                            channelLogin: t,
                            id: e._id,
                            completedAt: e.completed_at ? new Date(e.completed_at) : null,
                            key: e.key,
                            progress: a,
                            progressCap: i,
                            level: e.level,
                            title: r.title,
                            description: r.description(i),
                            longDescription: r.longDescription,
                            image: {
                                scale1x: e.image,
                                scale2x: e.image_2x,
                                scale3x: e.image_3x,
                                small: e.image_sm
                            }
                        })
                    }(e, t)
                }))
            }
            var p, h = r("5NYc"),
                f = r("d0JU");

            function b(e) {
                return function() {
                    var e;
                    if (p) return p;
                    return (e = {})[h.b.IT_BEGINS] = {
                        title: Object(l.d)("It Begins", "StreamSummaryQuestPanel"),
                        getInstructions: function() {
                            return Object(l.d)("Find out more about streaming on Twitch.", "AchievementsItBegins")
                        },
                        learnMoreURL: "https://www.twitch.tv/creatorcamp?tt_medium=owned_onsite_twitch&tt_content=creator_camp_creators_all_all_Dashboard&ttid=cd402988e1",
                        hasTimedCompletionWindow: !1,
                        ccuTooltipLabel: "",
                        position: 0,
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[h.a.HAS_FIRST_STREAM] = Object(l.d)("Start your first stream", "AchievementsItBegins"), e[h.a.DASHBOARD_VISITED] = Object(l.d)("Explore your dashboard", "AchievementsItBegins"), e[h.a.STREAM_TITLE_UPDATED] = Object(l.d)("Update your stream title", "AchievementsItBegins"), e[h.a.GAME_COMMUNITY_TITLE_UPDATED] = Object(l.d)("Update your Game/Category", "AchievementsItBegins"), e
                        }
                    }, e[h.b.PATH_TO_AFFILIATE] = {
                        title: Object(l.d)("Path to Affiliate", "AchievementsPathToAffiliate"),
                        getInstructions: function() {
                            return Object(l.d)("To receive invitation to the Affiliate Program, you must simultaneously meet all four requirements over a 30-day period.", "AchievementsPathToAffiliate")
                        },
                        hasTimedCompletionWindow: !0,
                        ccuTooltipLabel: Object(l.d)("Concurrent viewership including Hosts and Raids", "AchievementsPathToAffiliate"),
                        learnMoreURL: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles",
                        position: 2,
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[h.a.HOUR_COUNT] = Object(l.d)("Stream for 8 hours", "AchievementsPathToAffiliate"), e[h.a.UNIQUE_DAYS] = Object(l.d)("Stream on 7 different days", "AchievementsPathToAffiliate"), e[h.a.AVERAGE_CCU] = Object(l.d)("Average of 3 viewers", "AchievementsPathToAffiliate"), e[h.a.FOLLOW_COUNT] = Object(l.d)("Reach 50 followers", "AchievementsPathToAffiliate"), e
                        }
                    }, e[h.b.PATH_TO_PARTNER] = {
                        title: Object(l.d)("Path to Partner", "StreamSummaryQuestPanel"),
                        getInstructions: function() {
                            return Object(l.d)("To be eligible to apply to the Partner Program, you must meet all three requirements within the same 30-day period. Please note that applying does not guarantee Partnership.", "AchievementsPathToPartner")
                        },
                        learnMoreURL: "https://www.twitch.tv/p/partners",
                        hasTimedCompletionWindow: !0,
                        ccuTooltipLabel: Object(l.d)("Concurrent viewership excluding Hosts, Raids, Premieres, and Reruns", "AchievementsPathToPartner"),
                        position: 3,
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[h.a.HOUR_COUNT] = Object(l.d)("Stream for 25 hours", "AchievementsPathToPartner"), e[h.a.UNIQUE_DAYS] = Object(l.d)("Stream on 12 different days", "AchievementsPathToPartner"), e[h.a.AVERAGE_CCU] = Object(l.d)("Average of 75 viewers", "AchievementsPathToPartner"), e
                        }
                    }, e[h.b.VIP_BADGE] = {
                        title: Object(l.d)("Build a Community", "VIPBadge"),
                        getInstructions: function() {
                            return Object(l.d)("Completing this achievement unlocks the ability to grant VIP status to members of your community. VIPs have the ability to equip a special chat badge and chat in slow, sub-only, or follower-only modes.", "VIPBadge")
                        },
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[h.a.UNIQUE_CHATTERS] = Object(l.d)("Reach 5 unique chatters in a stream", "VIPBadge"), e[h.a.FOLLOW_COUNT] = Object(l.d)("Reach 50 followers", "VIPBadge"), e
                        },
                        hasTimedCompletionWindow: !1,
                        position: 1,
                        ccuTooltipLabel: "",
                        learnMoreURL: f.a
                    }, p = e
                }()[e] || {
                    title: e,
                    getInstructions: function() {
                        return ""
                    },
                    learnMoreURL: "",
                    hasTimedCompletionWindow: !1,
                    position: 0,
                    getQuestReqStrings: function() {
                        return ""
                    }
                }
            }

            function g(e, t) {
                var r = e.map(function(e) {
                    var r = function(e, t) {
                        var r = b(e.key);
                        return new s.e({
                            key: e.key,
                            completedAt: e.completed_at ? new Date(e.completed_at) : null,
                            isComplete: e.is_complete,
                            title: r.title,
                            image: e.image,
                            ccuTooltipLabel: r.ccuTooltipLabel,
                            getInstructions: r.getInstructions,
                            learnMoreURL: r.learnMoreURL,
                            hasTimedCompletionWindow: r.hasTimedCompletionWindow,
                            position: r.position,
                            role: t,
                            requirements: e.progress,
                            getQuestReqStrings: r.getQuestReqStrings,
                            hasAffiliateInviteError: e.is_invite_error
                        })
                    }(e, t);
                    return r.completedRequirementsCount = r.requirements.reduce(function(e, t) {
                        return t.progress >= t.progress_cap ? e + 1 : e
                    }, 0), r.totalRequirements = r.requirements.length, r.finalize(), r
                });
                return s.e.sort(r)
            }
            var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        quests: [],
                        achievements: new s.b,
                        isLoading: !0
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.query()
                }, t.prototype.componentDidUpdate = function(e) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(t) {
                            return (!e.channel && this.props.channel || (e.channel && e.channel.id) !== (this.props.channel && this.props.channel.id)) && this.query(), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return this.props.children(this.state)
                }, t.prototype.query = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e, t, r, a, c, l;
                        return n.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    if (!(e = this.props.channel)) return [2];
                                    this.setState({
                                        isLoading: !0
                                    }), u.label = 1;
                                case 1:
                                    return u.trys.push([1, 3, , 4]), [4, Promise.all([function(e) {
                                        return n.__awaiter(this, void 0, Promise, function() {
                                            var t, r;
                                            return n.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return t = "/v5/channels/" + e + "/achievement_progressions", [4, Object(o.a)({
                                                            path: t
                                                        })];
                                                    case 1:
                                                        if ((r = n.sent()).isError()) throw new Error("failed to fetch achievement progressions");
                                                        return [2, r.body.achievements]
                                                }
                                            })
                                        })
                                    }(e.id), Object(i.a)(e.id)])];
                                case 2:
                                    return a = u.sent(), c = a[0], l = a[1], t = d(c, e.name), r = g(l, e.role), [3, 4];
                                case 3:
                                    return u.sent(), t = new s.b, r = [], [3, 4];
                                case 4:
                                    return this.setState({
                                        quests: r,
                                        achievements: t,
                                        isLoading: !1
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(a.Component);
            r.d(t, "a", function() {
                return v
            })
        },
        "6E8S": function(e, t, r) {
            "use strict";
            var n = r("1AsC");
            r.d(t, "a", function() {
                return n.a
            })
        },
        "9+Lo": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("NAv5"),
                i = r("cr+I"),
                s = r("q1tI"),
                o = r("/7QA"),
                c = r("5NYc"),
                l = r("gq0V"),
                u = r("Ue10"),
                m = function(e) {
                    var t = new Date,
                        r = Object(a.subDays)(t, 29),
                        m = Object(l.b)() ? {
                            borderRadius: u.x.Large,
                            display: u.X.Flex,
                            margin: {
                                x: 1,
                                top: 1
                            },
                            padding: 1,
                            background: u.r.Alt
                        } : {
                            display: u.X.Flex,
                            padding: 1,
                            background: u.r.Alt,
                            borderTop: !0,
                            borderBottom: !0
                        };
                    return s.createElement(u.Fb, n.__assign({}, m), s.createElement(u.Ya, {
                        padding: {
                            left: 1
                        },
                        flexGrow: 1
                    }, s.createElement(u.W, {
                        color: u.O.Alt2
                    }, Object(o.d)("<x:strong>30-day Performance</x:strong> ({startDate, date, short} - {endDate, date, short})", {
                        "x:strong": function(e) {
                            return s.createElement(u.W, {
                                bold: !0,
                                type: u.Wb.Span
                            }, e)
                        },
                        startDate: r,
                        endDate: t
                    }, "QuestTimeFrameBar"))), e.questKey !== c.b.PATH_TO_PARTNER && s.createElement(u.Ya, {
                        padding: {
                            right: 1
                        }
                    }, s.createElement(u.U, {
                        tabIndex: e.disableTabSelectable ? -1 : void 0,
                        to: {
                            pathname: "/" + e.channelLogin + "/dashboard/channel-analytics",
                            search: "?" + i.stringify({
                                start: Object(a.format)(r, "YYYY-MM-DD"),
                                end: Object(a.format)(t, "YYYY-MM-DD")
                            })
                        }
                    }, Object(o.d)("View 30-day stats", "QuestTimeFrameBar"))))
                };
            r.d(t, "a", function() {
                return m
            })
        },
        Ac3d: function(e, t, r) {},
        D5nk: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("oJmH"),
                s = r("/MKj"),
                o = r("/7QA"),
                c = r("yR8l"),
                l = r("V+GM"),
                u = r("NvVO"),
                m = r("2xye"),
                d = r("kRBY"),
                p = r("GnwI"),
                h = r("m9vr"),
                f = r("IFXb"),
                b = r("0us7"),
                g = r("VxtK"),
                v = r("S3iq"),
                y = r("xMok"),
                S = r("gq0V"),
                E = r("6E8S"),
                w = r("sBDM"),
                j = r("2psh"),
                _ = r("6XEL"),
                C = r("Ue10"),
                O = function(e) {
                    if (e.query.isLoading || !e.streamSummaryCursor.current) return a.createElement(C.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(C.jb, {
                        height: 400
                    }));
                    var t = e.streamSummaryCursor.current.interval,
                        r = e.query.achievements.nCompletedInRange(3, t);
                    if (e.streamSummaryCursor.isLast && r.length < 3) {
                        var n = e.query.achievements.topNInProgress(3 - r.length);
                        r.push.apply(r, n)
                    }
                    return r.length ? a.createElement(E.a, {
                        title: Object(o.d)("What is my achievements progress?", "StreamSummaryAchievementsPanel")
                    }, a.createElement(C.Fb, {
                        borderRadius: C.x.Large,
                        elevation: 1,
                        background: C.r.Base
                    }, a.createElement(C.Fb, {
                        padding: Object(S.b)() ? {
                            top: 1
                        } : 2,
                        borderBottom: !0
                    }, r.map(function(e) {
                        return a.createElement(v.a, {
                            key: e.id,
                            achievement: e
                        }, Object(y.b)(e))
                    })), a.createElement(w.a, {
                        message: Object(o.d)("View achievements", "StreamSummaryAchievementsPanel"),
                        onClick: j.e,
                        linkTo: _.b.channelAchievements(e.streamSummaryCursor.current.channel.name),
                        targetBlank: !0
                    }))) : a.createElement("span", null)
                },
                k = (r("eqL5"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(C.Ya, {
                            className: "sm-mw__col",
                            display: C.X.Flex,
                            flexGrow: 1,
                            flexWrap: C.Ba.NoWrap,
                            flexDirection: C.Aa.Column,
                            padding: {
                                left: 1,
                                right: 1
                            }
                        }, this.props.children)
                    }, t
                }(a.Component)),
                A = (r("kpsn"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(C.Fb, {
                            className: "sm-mw",
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            flexWrap: C.Ba.NoWrap,
                            alignItems: C.f.Stretch,
                            breakpointMedium: {
                                flexDirection: C.Aa.Row
                            }
                        }, this.props.children)
                    }, t
                }(a.Component)),
                x = r("u2gS"),
                T = (r("UK3/"), {
                    "data-test-selector": "live-dashboard-link"
                }),
                D = {
                    "data-test-selector": "streaming-tools-dashboard-link"
                },
                R = {
                    src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                    alt: "VoHiYo"
                },
                P = "https://help.twitch.tv/customer/portal/articles/2877822";

            function I(e) {
                var t = e.query,
                    r = e.currentStreamSummary;
                if (!t.isLoading && !t.streamSummaries.length && t.channel && !r) {
                    var i = a.createElement(C.z, n.__assign({
                        linkTo: "/" + t.channel.name + "/dashboard/live"
                    }, T), Object(o.d)("Go to Live Dashboard", "StreamSummaryNoAvailableStreamSummariesNotice"));
                    return t.channel.role === x.d.None && (i = a.createElement(C.z, n.__assign({
                        linkTo: "/" + t.channel.name + "/dashboard/broadcast"
                    }, D), Object(o.d)("Go to Streaming Tools", "StreamSummaryNoAvailableStreamSummariesNotice"))), a.createElement(C.Ya, {
                        position: C.kb.Absolute,
                        fullWidth: !0,
                        margin: {
                            top: 5
                        },
                        zIndex: C.jc.Above
                    }, a.createElement(C.cc, {
                        childWidth: C.dc.Medium,
                        center: !0
                    }, a.createElement("div", {
                        className: "sm-welcome-modal"
                    }, a.createElement(C.i, {
                        type: C.n.SlideInBottom,
                        duration: C.k.Medium,
                        enabled: !0,
                        timing: C.m.EaseInOut
                    }, a.createElement(C.Fb, {
                        border: !0,
                        padding: 2,
                        background: C.r.Base,
                        elevation: 3
                    }, a.createElement(C.Ya, {
                        display: C.X.Flex,
                        alignItems: C.f.Center,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(C.q, n.__assign({}, R, {
                        size: 30
                    })), a.createElement(C.Ya, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(C.W, {
                        type: C.Wb.H4,
                        bold: !0
                    }, Object(o.d)("Welcome to Stream Summary", "StreamSummaryNoAvailableStreamSummariesNotice")))), a.createElement(C.fc, null, a.createElement(C.W, {
                        fontSize: C.Ca.Size5
                    }, Object(o.d)("See a summary of your past streams with stats, clips, achievements, and more. Stream to get started!", "StreamSummaryNoAvailableStreamSummariesNotice"))), a.createElement(C.Ya, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(C.Ya, {
                        margin: {
                            right: 1
                        },
                        display: C.X.InlineBlock
                    }, i), a.createElement(C.z, {
                        linkTo: P,
                        type: C.F.Text
                    }, Object(o.d)("Learn More", "StreamSummaryNoAvailableStreamSummariesNotice"))))))))
                }
                return a.createElement("div", null)
            }
            var L = r("5NYc"),
                F = (r("wQAB"), r("y/W1")),
                N = r("qe41"),
                V = r("9+Lo"),
                M = (r("Dm0L"), function(e, t) {
                    return Object(o.d)("{numCompleted, number} of {numTotal, number} requirements met", {
                        numCompleted: e,
                        numTotal: t
                    }, "StreamSummaryQuest")
                }),
                q = function(e) {
                    var t = Object(S.b)(),
                        r = e.quest,
                        i = !1;
                    if (r && !r.isComplete) {
                        var s = Object(F.c)(r.requirements),
                            c = r.getQuestReqStrings(),
                            l = t && {
                                alignItems: C.f.Center,
                                display: C.X.Flex
                            },
                            u = t ? {
                                display: C.X.Flex,
                                padding: {
                                    left: 1
                                }
                            } : {
                                padding: 2
                            },
                            m = t && {
                                borderRadius: C.x.Large,
                                overflow: C.db.Hidden
                            };
                        return a.createElement(C.Fb, n.__assign({
                            elevation: 1,
                            background: C.r.Base,
                            margin: {
                                bottom: 2
                            }
                        }, m), a.createElement(C.Fb, n.__assign({
                            display: C.X.Flex,
                            alignItems: C.f.Center
                        }, u, {
                            borderBottom: !0
                        }), t && a.createElement(C.Fb, {
                            borderRadius: C.x.Large,
                            className: "quest-header__badge-wrap",
                            margin: {
                                y: 1,
                                right: 1
                            },
                            overflow: C.db.Hidden
                        }, a.createElement(C.S, {
                            src: r.image,
                            alt: Object(o.d)("quest image", "StreamSummaryQuestPanel")
                        })), a.createElement(C.Ya, n.__assign({
                            flexGrow: 1
                        }, l), a.createElement(C.W, {
                            type: C.Wb.H4,
                            bold: !0
                        }, r.title)), a.createElement(C.Fb, {
                            display: C.X.Flex,
                            flexShrink: 0,
                            padding: {
                                right: 1
                            },
                            color: C.O.Alt2
                        }, function(e, t) {
                            return Object(S.b)() ? a.createElement(C.Zb, {
                                label: M(e, t),
                                direction: C.bc.Left
                            }, Array.from({
                                length: e
                            }).map(function(e, t) {
                                return a.createElement(C.Fb, {
                                    key: "completeReqBar-" + t,
                                    className: "quest-progress-bars quest-progress-bars__complete",
                                    borderRadius: C.x.Large,
                                    margin: {
                                        left: .5
                                    }
                                })
                            }), Array.from({
                                length: t - e
                            }).map(function(e, t) {
                                return a.createElement(C.Fb, {
                                    key: "incompleteReqBar-" + t,
                                    className: "quest-progress-bars quest-progress-bars__incomplete",
                                    borderRadius: C.x.Large,
                                    margin: {
                                        left: .5
                                    }
                                })
                            })) : a.createElement(C.W, {
                                color: C.O.Alt2,
                                fontSize: C.Ca.Size5
                            }, M(e, t))
                        }(r.completedRequirementsCount, r.totalRequirements))), s.map(function(t) {
                            return a.createElement(C.Ya, {
                                key: t.metric
                            }, function(t) {
                                if (!r.isComplete && t.time_based && !i) return i = !0, a.createElement(V.a, {
                                    channelLogin: e.channelName,
                                    questKey: r.key
                                })
                            }(t), a.createElement(N.a, {
                                requirement: t,
                                requirementInstructionString: c,
                                isComplete: r.isComplete,
                                subtext: t.metric === L.a.AVERAGE_CCU ? Object(F.a)(r.requirements) : void 0,
                                ccuTooltipLabel: r.ccuTooltipLabel
                            }))
                        }))
                    }
                    return e.quest ? a.createElement("span", null) : a.createElement(C.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(C.jb, {
                        height: 400
                    }))
                },
                W = r("NAv5"),
                B = r("gi7w"),
                Y = r("ybsN"),
                z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleTrackClick = function() {
                            Object(Y.f)(Y.a, t.props.streamSummary)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(Y.g)(Y.a, this.props.streamSummary)
                    }, Object.defineProperty(t.prototype, "bannerTitle", {
                        get: function() {
                            var e = this.props.achievement,
                                t = e.title,
                                r = e.level,
                                n = a.createElement("span", null, Object(B.b)(r));
                            return r ? Object(o.d)("Achievement Unlocked! {title} {romanNumeralLevel}", {
                                title: t,
                                romanNumeralLevel: n
                            }, "SpotlightAchievementUnlockedWithLevel") : Object(o.d)("Achievement Unlocked! {title}", {
                                title: t
                            }, "SpotlightAchievementUnlocked")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        return a.createElement(me, {
                            title: this.bannerTitle,
                            subtitle: this.props.achievement.description,
                            url: _.b.achievement(this.props.achievement),
                            purpleScale: !0,
                            onSpotlightDismiss: this.props.onSpotlightDismiss,
                            onSpotlightClick: this.handleTrackClick
                        })
                    }, t
                }(a.PureComponent),
                U = r("Tc9I"),
                X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleTrackClick = function() {
                            Object(Y.f)(Y.c, t.props.streamSummary)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(Y.g)(Y.c, this.props.streamSummary)
                    }, t.prototype.render = function() {
                        var e = Object(U.b)(this.props.quest.key),
                            t = a.createElement(G, {
                                title: e.title
                            }),
                            r = e.bannerTitle(t);
                        return a.createElement(me, {
                            title: r,
                            subtitle: e.subtitle,
                            url: _.b.channelAchievements(this.props.streamSummary.channel.name),
                            onSpotlightDismiss: this.props.onSpotlightDismiss,
                            onSpotlightClick: this.handleTrackClick
                        })
                    }, t
                }(a.PureComponent),
                G = function(e) {
                    var t = e.title;
                    return a.createElement(C.W, {
                        type: C.Wb.Span,
                        color: C.O.Base
                    }, t)
                },
                H = r("ll/k"),
                Q = ["0s", "0.2s", "0.4s", "0.6s"],
                K = ["3%", "14%", "26%", "42%", "55%", "66%", "78%", "90%"],
                Z = [{
                    src: "https://static-cdn.jtvnw.net/emoticons/v1/192363/3.0",
                    alt: "ClappyHype"
                }, {
                    src: "https://static-cdn.jtvnw.net/emoticons/v1/192361/3.0",
                    alt: "Clappy"
                }],
                J = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleTrackClick = function() {
                            Object(Y.f)(Y.b, t.props.streamSummary)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(Y.g)(Y.b, this.props.streamSummary)
                    }, t.prototype.render = function() {
                        return a.createElement(se, {
                            title: Object(o.d)("Top Clip of the Stream", "StreamSummarySpotlightClip"),
                            subtitle: this.subtitleMessage,
                            url: this.props.topClip.url,
                            onSpotlightDismiss: this.props.onSpotlightDismiss,
                            onSpotlightClick: this.handleTrackClick,
                            flourish: Object(H.c)(8, function(e) {
                                return a.createElement($, n.__assign({}, Object(H.b)(Z), {
                                    key: e,
                                    style: function(e) {
                                        return {
                                            left: "" + K[e],
                                            top: Object(H.a)(-10, 58) + "%",
                                            width: Object(H.a)(3, 7) + "rem",
                                            animationDelay: "" + Object(H.b)(Q)
                                        }
                                    }(e)
                                }))
                            })
                        })
                    }, Object.defineProperty(t.prototype, "subtitleMessage", {
                        get: function() {
                            return Object(o.d)("{clipTitle}, clipped by {curatorName}", {
                                clipTitle: this.props.topClip.title,
                                curatorName: this.props.topClip.curatorName
                            }, "StreamSummarySpotlightClipSubtitle")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.PureComponent);
            var $ = function(e) {
                return a.createElement("div", {
                    className: "sm-sb-flourish-emotes__float",
                    style: n.__assign({}, e.style)
                }, a.createElement("img", {
                    className: "sm-sb-flourish-emotes__img",
                    src: e.src,
                    alt: e.alt,
                    style: {
                        transform: "rotate(" + Object(H.a)(65) + "deg)"
                    }
                }))
            };
            var ee = "stream-summary-spotlights",
                te = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.handleSpotlightDismiss = function() {
                            r.setState({
                                show: !1
                            }, function() {
                                var e = o.m.get(ee, {});
                                e[r.streamSummaryKey] = "dismissed", o.m.set(ee, e)
                            })
                        }, r.state = {
                            show: !0
                        }, r
                    }
                    return n.__extends(t, e), Object.defineProperty(t.prototype, "streamSummaryKey", {
                        get: function() {
                            return this.props.streamSummary && this.props.streamSummary.id
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isLoading", {
                        get: function() {
                            return this.props.topClips.isLoading && this.props.query.isLoading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.componentDidMount = function() {
                        var e = o.m.get(ee, {});
                        this.streamSummaryKey && e[this.streamSummaryKey] && this.setState({
                            show: !1
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.streamSummary !== this.props.streamSummary && (o.m.get(ee, {})[this.streamSummaryKey] && this.setState({
                            show: !1
                        }))
                    }, t.prototype.render = function() {
                        var e = this.props.query.quests[0];
                        if (this.isLoading || !this.state.show || !this.props.streamSummary || !e) return null;
                        var t = this.props.topClips.clips[0],
                            r = this.completedQuest,
                            n = this.completedAchievement;
                        return r ? a.createElement(X, {
                            quest: r,
                            onSpotlightDismiss: this.handleSpotlightDismiss,
                            streamSummary: this.props.streamSummary
                        }) : n ? a.createElement(z, {
                            achievement: n,
                            onSpotlightDismiss: this.handleSpotlightDismiss,
                            streamSummary: this.props.streamSummary
                        }) : t && t.views > 1 ? a.createElement(J, {
                            topClip: t,
                            onSpotlightDismiss: this.handleSpotlightDismiss,
                            streamSummary: this.props.streamSummary
                        }) : null
                    }, Object.defineProperty(t.prototype, "completedQuest", {
                        get: function() {
                            var e = this.props.streamSummary.interval,
                                t = this.props.query.quests.filter(function(t) {
                                    return t.completedAt && Object(W.isWithinRange)(t.completedAt, e.start, e.end)
                                });
                            return x.e.topCelebratable(t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "completedAchievement", {
                        get: function() {
                            var e = this.props.streamSummary.interval;
                            return this.props.query.achievements.nCompletedInRange(1, e)[0]
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                re = {
                    "data-test-selector": "title"
                },
                ne = {
                    "data-test-selector": "subtitle"
                },
                ae = {
                    "data-test-selector": "cta-link"
                },
                ie = {
                    "data-test-selector": "dismiss"
                },
                se = (r("Qtpw"), function(e) {
                    return a.createElement(C.Ya, {
                        className: "sm-sb-flourish-emotes",
                        position: C.kb.Relative
                    }, a.createElement(C.i, {
                        type: C.n.BounceIn,
                        duration: C.k.Medium,
                        enabled: !0,
                        timing: C.m.EaseInOut
                    }, a.createElement(oe, n.__assign({}, e)), a.createElement(C.Ya, {
                        className: "sm-sb-flourish-emotes__dismiss",
                        position: C.kb.Absolute,
                        zIndex: C.jc.Above,
                        attachTop: !0,
                        attachRight: !0
                    }, a.createElement(C.A, n.__assign({}, ie, {
                        ariaLabel: Object(U.a)().spotlightDismiss,
                        size: C.B.Large,
                        icon: C.ub.Close,
                        onClick: e.onSpotlightDismiss,
                        overlay: !0
                    })))))
                }),
                oe = function(e) {
                    return a.createElement("a", n.__assign({}, ae, {
                        href: e.url,
                        className: "sm-sb-flourish-emotes__link",
                        target: "_blank",
                        onClick: e.onSpotlightClick
                    }), a.createElement(C.Fb, {
                        className: "sm-sb-flourish-emotes__content",
                        position: C.kb.Relative,
                        zIndex: C.jc.Default,
                        color: C.O.Overlay,
                        textAlign: C.Sb.Center,
                        margin: {
                            bottom: 2
                        },
                        padding: 2,
                        borderRadius: C.x.Medium
                    }, a.createElement(C.Fb, {
                        className: "sm-sb-flourish-emotes__emotes-layer",
                        position: C.kb.Absolute,
                        overflow: C.db.Hidden,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        attachLeft: !0,
                        borderRadius: C.x.Medium
                    }, e.flourish), a.createElement(C.Fb, {
                        className: "sm-sb-flourish-emotes__text",
                        position: C.kb.Relative,
                        zIndex: C.jc.Above,
                        padding: {
                            x: .5,
                            y: 0
                        },
                        borderRadius: C.x.Medium
                    }, a.createElement(C.W, n.__assign({}, re, {
                        fontSize: C.Ca.Size4,
                        bold: !0,
                        ellipsis: !0
                    }), e.title), a.createElement(C.W, n.__assign({}, ne, {
                        fontSize: C.Ca.Size5,
                        color: C.O.OverlayAlt,
                        ellipsis: !0
                    }), e.subtitle))))
                },
                ce = r("TSYQ"),
                le = r("FuXV"),
                ue = (r("xcDG"), ["rgba(168, 136, 230, 1)", "rgba(158, 128, 221, 1)", "rgba(136, 109, 200, 1)", "rgba(129, 104, 193, 1)"]),
                me = function(e) {
                    return a.createElement(C.Ya, {
                        className: "sm-sb-flourish-confetti",
                        position: C.kb.Relative
                    }, a.createElement(C.i, {
                        type: C.n.BounceIn,
                        duration: C.k.Medium,
                        enabled: !0,
                        timing: C.m.EaseInOut
                    }, a.createElement(C.Fb, {
                        className: "sm-sb-flourish-confetti__wrap",
                        position: C.kb.Relative,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        borderRadius: C.x.Medium
                    }, a.createElement(de, n.__assign({}, e)), a.createElement(C.Ya, {
                        className: "sm-sb-flourish-confetti__dismiss",
                        position: C.kb.Absolute,
                        zIndex: C.jc.Above,
                        attachTop: !0,
                        attachRight: !0
                    }, a.createElement(C.A, n.__assign({}, ie, {
                        ariaLabel: Object(U.a)().spotlightDismiss,
                        type: C.C.Default,
                        size: C.B.Large,
                        icon: C.ub.Close,
                        onClick: e.onSpotlightDismiss,
                        overlay: e.purpleScale
                    }))), a.createElement(le.a, {
                        confettiCount: 40,
                        infinite: !0,
                        colors: e.purpleScale ? ue : void 0
                    }))))
                },
                de = function(e) {
                    var t = ce({
                        "sm-sb-flourish-confetti__content": !0,
                        "sm-sb-flourish-confetti__content--purple-scale": e.purpleScale
                    });
                    return a.createElement("a", n.__assign({}, ae, {
                        className: "sm-sb-flourish-confetti__link",
                        href: e.url,
                        target: "_blank",
                        onClick: e.onSpotlightClick
                    }), a.createElement(C.Fb, {
                        className: t,
                        position: C.kb.Relative,
                        zIndex: C.jc.Default,
                        textAlign: C.Sb.Center,
                        padding: 2,
                        fullWidth: !0,
                        borderRadius: C.x.Medium
                    }, a.createElement(C.W, n.__assign({}, re, {
                        type: C.Wb.Span,
                        fontSize: C.Ca.Size4,
                        color: e.purpleScale ? C.O.Overlay : C.O.Base,
                        bold: !0,
                        ellipsis: !0
                    }), e.title), a.createElement(C.W, n.__assign({}, ne, {
                        fontSize: C.Ca.Size5,
                        color: e.purpleScale ? C.O.OverlayAlt : C.O.Alt2,
                        ellipsis: !0
                    }), e.subtitle)))
                },
                pe = r("N0BP"),
                he = {
                    "data-test-selector": "subtitle"
                },
                fe = {
                    "data-test-selector": "value"
                },
                be = {
                    "data-test-selector": "increase"
                },
                ge = function(e) {
                    return a.createElement(C.Ya, n.__assign({
                        display: C.X.Flex,
                        flexDirection: C.Aa.Column
                    }, Object(pe.a)(e)), a.createElement(C.Fb, {
                        display: C.X.Flex,
                        flexGrow: 1,
                        flexDirection: C.Aa.Column,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        padding: 2,
                        background: C.r.Base,
                        borderRadius: C.x.Medium
                    }, a.createElement(C.Fb, {
                        display: C.X.Flex,
                        flexDirection: C.Aa.Column
                    }, a.createElement(C.W, {
                        fontSize: C.Ca.Size4,
                        bold: !0
                    }, e.title), a.createElement(C.W, n.__assign({
                        fontSize: C.Ca.Size5,
                        color: C.O.Alt2
                    }, he), e.subtitle || a.createElement("br", null))), a.createElement(C.Fb, {
                        display: C.X.Flex,
                        flexGrow: 1,
                        alignItems: C.f.End,
                        padding: {
                            top: 2
                        }
                    }, a.createElement(C.W, n.__assign({
                        type: C.Wb.Span,
                        fontSize: C.Ca.Size2,
                        bold: !0,
                        color: C.O.Link
                    }, fe), e.value, e.isIncrease && a.createElement(ve, null)))))
                };

            function ve() {
                return a.createElement(C.tb, n.__assign({
                    asset: C.ub.GlyphArrUp,
                    type: C.vb.Success
                }, be))
            }

            function ye(e) {
                var t = Math.floor(e.currentValue),
                    r = e.previousValue && Math.floor(e.previousValue),
                    i = "number" == typeof r && t - r;
                return a.createElement(ge, n.__assign({
                    title: e.title,
                    subtitle: function(e) {
                        if ("number" != typeof e) return "";
                        var t = e < 0 ? "-" : "+";
                        return Object(o.d)("{sign}{avgViewerDiff, number} from last stream", {
                            avgViewerDiff: Math.abs(e),
                            sign: t
                        }, "StreamSummaryNumericComparison")
                    }(i),
                    value: Object(o.f)(t),
                    isIncrease: Boolean(i && i > 0)
                }, Object(pe.a)(e)))
            }
            var Se = r("CFgy"),
                Ee = {
                    "data-test-selector": "stream-summary-stream-duration"
                };

            function we(e) {
                var t = e.currentStreamSummary,
                    r = e.previousStreamSummary;
                return a.createElement(ge, n.__assign({
                    title: Object(o.d)("Stream Duration", "StreamSummaryDuration"),
                    subtitle: function(e, t) {
                        if (!t) return "";
                        if (Object(Se.f)(e.interval, t.interval)) return Object(o.d)("same as last stream", "StreamSummaryDuration");
                        return Object(o.d)("{shortDuration} last stream", {
                            shortDuration: Object(Se.b)(t.interval)
                        }, "StreamSummaryDuration")
                    }(t, r),
                    value: Object(Se.b)(t.interval),
                    isIncrease: !1
                }, Ee))
            }
            var je = r("kO/C"),
                _e = {
                    "data-test-selector": "stream-summary-avg-viewer-stat-card"
                },
                Ce = {
                    "data-test-selector": "stream-summary-max-viewer-stat-card"
                },
                Oe = {
                    "data-test-selector": "stream-summary-new-follower-stat-card"
                },
                ke = {
                    "data-test-selector": "stream-summary-unique-chatters-stat-card"
                },
                Ae = {
                    "data-test-selector": "stream-summary-clips-created-stat-card"
                },
                xe = {
                    "data-test-selector": "stream-summary-unique-viewers-stat-card"
                },
                Te = {
                    "data-test-selector": "stream-summary-live-views-stat-card"
                },
                De = {
                    "data-test-selector": "stream-summary-new-subscriptions-stat-card"
                },
                Re = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(C.cc, {
                            childWidth: C.dc.Medium,
                            gutterSize: C.ec.Small,
                            placeholderItems: 3
                        }, this.cards())
                    }, t.prototype.cards = function() {
                        var e = this.props,
                            t = e.streamSummary,
                            r = e.previousStreamSummary,
                            i = e.data.user;
                        if (!t) return Array(8).fill("").map(function(e, t) {
                            return a.createElement(C.Ya, {
                                key: "placeholder-" + t,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(C.jb, {
                                height: 131
                            }))
                        });
                        var s = [a.createElement(we, {
                            key: "stream-duration",
                            currentStreamSummary: t,
                            previousStreamSummary: r
                        }), a.createElement(ye, n.__assign({
                            key: "avg-viewers",
                            title: Object(o.d)("Average Viewers", "StreamSummaryStatCard"),
                            currentValue: t.avgViewerCount,
                            previousValue: r && r.avgViewerCount
                        }, _e)), a.createElement(ye, n.__assign({
                            key: "max-viewers",
                            title: Object(o.d)("Max Viewers", "StreamSummaryStatCard"),
                            currentValue: t.maxViewerCount,
                            previousValue: r && r.maxViewerCount
                        }, Ce)), a.createElement(ye, n.__assign({
                            key: "unique-viewers",
                            title: Object(o.d)("Unique Viewers", "StreamSummaryStatCard"),
                            currentValue: t.uniqueViewers,
                            previousValue: r && r.uniqueViewers
                        }, xe)), a.createElement(ye, n.__assign({
                            key: "unique-chatters",
                            title: Object(o.d)("Unique Chatters", "StreamSummaryStatCard"),
                            currentValue: t.uniqueChatters,
                            previousValue: r && r.uniqueChatters
                        }, ke)), a.createElement(ye, n.__assign({
                            key: "live-views",
                            title: Object(o.d)("Live Views", "StreamSummaryStatCard"),
                            currentValue: t.totalViewers,
                            previousValue: r && r.totalViewers
                        }, Te)), a.createElement(ye, n.__assign({
                            key: "new-followers",
                            title: Object(o.d)("New Followers", "StreamSummaryStatCard"),
                            currentValue: t.followersChange,
                            previousValue: r && r.followersChange
                        }, Oe))];
                        return s = i && i.roles && (i.roles.isAffiliate || i.roles.isPartner) ? s.concat([a.createElement(ye, n.__assign({
                            key: "new-subscriptions",
                            title: Object(o.d)("New Subscriptions", "StreamSummaryStatCard"),
                            currentValue: t.subscriptionsNew,
                            previousValue: r && r.subscriptionsNew
                        }, De))]) : s.concat([a.createElement(ye, n.__assign({
                            key: "clips-created",
                            title: Object(o.d)("Clips", "StreamSummaryStatCard"),
                            currentValue: t.clipCreatesTotal,
                            previousValue: r && r.clipCreatesTotal
                        }, Ae))])
                    }, t
                }(a.Component),
                Pe = Object(c.a)(je, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelName
                            }
                        }
                    }
                })(Re),
                Ie = r("KYAw"),
                Le = r("WyAD"),
                Fe = r("OGSR"),
                Ne = C.R.Purple12,
                Ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleCanvasReady = function(e) {
                            t.chart = new Le(e, {
                                type: "bar",
                                data: t.getData(e),
                                options: {
                                    scales: {
                                        xAxes: [{
                                            ticks: {
                                                maxRotation: 0,
                                                minRotation: 0,
                                                maxTicksLimit: 4,
                                                fontColor: Ne,
                                                fontSize: 10,
                                                padding: 5
                                            },
                                            gridLines: {
                                                color: C.R.White,
                                                lineWidth: 1,
                                                drawBorder: !1,
                                                display: !1
                                            }
                                        }],
                                        yAxes: [{
                                            ticks: {
                                                min: 0,
                                                maxTicksLimit: 6,
                                                fontColor: Ne,
                                                fontSize: 10,
                                                padding: 5
                                            },
                                            gridLines: {
                                                color: "rgba(255, 255, 255, 0.1)",
                                                lineWidth: 1,
                                                drawBorder: !1
                                            }
                                        }]
                                    },
                                    legend: {
                                        display: !1
                                    },
                                    tooltips: {
                                        backgroundColor: "rgba(0,0,0,0.95)",
                                        titleFontColor: C.R.HintedGrey15,
                                        bodyFontColor: C.R.HintedGrey11,
                                        cornerRadius: 3,
                                        displayColors: !1,
                                        callbacks: {
                                            label: t.formatTooltipLabel
                                        }
                                    },
                                    onClick: t.handleDatasetClick,
                                    responsive: !0
                                }
                            })
                        }, t.formatTooltipLabel = function(e) {
                            return t.props.formatTooltipLabel(Number(e.yLabel))
                        }, t.handleDatasetClick = function(e, r) {
                            if (r && 0 !== r.length) {
                                var n = r[0];
                                t.props.onDatasetClick(n._index)
                            }
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(Fe.a, {
                            onCanvasReady: this.handleCanvasReady
                        })
                    }, t.prototype.componentDidUpdate = function() {
                        this.chart && (this.chart.data = this.getData(this.chart.canvas), this.chart.update())
                    }, t.prototype.getData = function(e) {
                        return {
                            labels: this.props.labels,
                            datasets: [{
                                label: this.props.datasetLabel,
                                data: this.props.values,
                                backgroundColor: this.getBarGradient(e),
                                hoverBackgroundColor: C.R.Purple10,
                                hoverBorderColor: C.R.Purple8,
                                hoverBorderWidth: 1
                            }]
                        }
                    }, t.prototype.getBarGradient = function(e) {
                        var t = e.getContext("2d").createLinearGradient(0, 0, 0, 190);
                        return t.addColorStop(0, C.R.Purple15), t.addColorStop(1, C.R.Purple11), t
                    }, t
                }(a.Component),
                Me = r("17YR"),
                qe = 5;
            var We = {
                get: function() {
                    return Object(o.d)("Error", "StreamSummaryExportTimeseriesStats")
                }
            };

            function Be(e, t) {
                return e.isError ? We : e.data.dates.reduce(function(r, n, a) {
                    return r.set(n.getTime(), String(t(e.data)[a] || ""))
                }, new Map)
            }
            var Ye = r("cr+I"),
                ze = 5;

            function Ue(e, t) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var r, a, i, s, o, c, l, u, m;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return r = Ye.stringify(Object(Se.i)(t)), [4, Object(_.c)({
                                    path: "/v5/channels/" + e + "/analytics/chat_time_series?" + r
                                })];
                            case 1:
                                if (a = n.sent(), i = {
                                        messages: [],
                                        participants: [],
                                        dates: [],
                                        interpolationChunkMinutes: ze
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.chat_activity; s < o.length; s++) c = o[s], l = c.messages, u = c.participants, m = c.timestamp, i.messages.push(l), i.participants.push(u), i.dates.push(new Date(m));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Xe(e, t) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var r, a, i, s, o, c, l, u, m, d;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return r = Ye.stringify(Object(Se.i)(t)), [4, Object(_.c)({
                                    path: "/v5/channels/" + e + "/analytics/clips_time_series?" + r
                                })];
                            case 1:
                                if (a = n.sent(), i = {
                                        creates: [],
                                        plays: [],
                                        otherPlays: [],
                                        twitchPlays: [],
                                        redditPlays: [],
                                        facebookPlays: [],
                                        twitterPlays: [],
                                        dates: [],
                                        interpolationChunkMinutes: ze
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.clips; s < o.length; s++) c = o[s], l = c.creates, u = c.plays, m = c.timestamp, d = c.plays_breakdown, i.creates.push(l), i.plays.push(u), i.otherPlays.push(d.other || 0), i.twitchPlays.push(d.twitch || 0), i.redditPlays.push(d.reddit || 0), i.facebookPlays.push(d.facebook || 0), i.twitterPlays.push(d.twitter || 0), i.dates.push(new Date(m));
                                return [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Ge(e, t) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var r, a, i, s, o, c, l, u;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return r = Ye.stringify(Object(Se.i)(t)), [4, Object(_.c)({
                                    path: "/v5/channels/" + e + "/analytics/commercials_time_series?" + r
                                })];
                            case 1:
                                if (a = n.sent(), i = {
                                        values: [],
                                        dates: [],
                                        interpolationChunkMinutes: ze
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.commercial; s < o.length; s++) c = o[s], l = c.length, u = c.timestamp, i.values.push(l), i.dates.push(new Date(u));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function He(e, t) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var r, a, i, s, o, c, l, u;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return r = Ye.stringify(Object(Se.i)(t)), [4, Object(_.c)({
                                    path: "/v5/channels/" + e + "/analytics/stats_time_series?" + r
                                })];
                            case 1:
                                if (a = n.sent(), i = {
                                        values: [],
                                        dates: [],
                                        interpolationChunkMinutes: ze
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.concurrent_viewers; s < o.length; s++) c = o[s], l = c.count, u = c.timestamp, i.values.push(l), i.dates.push(new Date(u));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Qe(e, t) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var r, a, i, s, o, c, l, u;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return r = Ye.stringify(Object(Se.i)(t)), [4, Object(_.c)({
                                    path: "/v5/channels/" + e + "/analytics/followers_time_series?" + r
                                })];
                            case 1:
                                if (a = n.sent(), i = {
                                        values: [],
                                        dates: [],
                                        interpolationChunkMinutes: ze
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.followers_change; s < o.length; s++) c = o[s], l = c.count, u = c.timestamp, i.values.push(l), i.dates.push(new Date(u));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Ke(e, t) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var r, a, i, s, o, c, l, u;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return r = Ye.stringify(Object(Se.i)(t)), [4, Object(_.c)({
                                    path: "/v5/channels/" + e + "/analytics/subscription_purchase?" + r
                                })];
                            case 1:
                                if (a = n.sent(), i = {
                                        values: [],
                                        dates: [],
                                        interpolationChunkMinutes: ze
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.subscription_purchase_activities; s < o.length; s++) c = o[s], l = c.count, u = c.timestamp, i.values.push(l), i.dates.push(new Date(u));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Ze(e, t) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var r, a, i, s, o, c, l, u;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return r = Ye.stringify(Object(Se.i)(t)), [4, Object(_.c)({
                                    path: "/v5/channels/" + e + "/analytics/view_summary_time_series?" + r
                                })];
                            case 1:
                                if (a = n.sent(), i = {
                                        dates: [],
                                        totalViews: [],
                                        interpolationChunkMinutes: ze
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.view_summary; s < o.length; s++) c = o[s], l = c.total_views, u = c.timestamp, i.totalViews.push(l), i.dates.push(new Date(u));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Je(e, t) {
                return n.__awaiter(this, void 0, Promise, function() {
                    var r, a, i, s, o, c, l, u;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Promise.all([Ue(e, t), Xe(e, t), Ge(e, t), He(e, t), Ze(e, t), Qe(e, t), Ke(e, t)])];
                            case 1:
                                return r = n.sent(), a = r[0], i = r[1], s = r[2], o = r[3], c = r[4], l = r[5], u = r[6], [2, {
                                    chat: a,
                                    clips: i,
                                    commercials: s,
                                    viewers: o,
                                    liveViews: c,
                                    followers: l,
                                    subscriptions: u
                                }]
                        }
                    })
                })
            }
            r("Ac3d");
            var $e, et = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.handleExport = function() {
                            return n.__awaiter(r, void 0, void 0, function() {
                                var e, t, r, a;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            Object(j.a)(), e = this.props.streamSummary, n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.fetchAllTimeseries(e.channel.id, e.interval)];
                                        case 2:
                                            return t = n.sent(), [3, 4];
                                        case 3:
                                            return r = n.sent(), o.p.logger.error(r, "Network error fetching timeseries data"), this.alert(Object(o.d)("The CSV export failed. Please try again in a few minutes.", "StreamSummaryTimeseriesExport")), [2];
                                        case 4:
                                            return function(e) {
                                                return Boolean(Object.keys(e).find(function(t) {
                                                    return e[t].isError
                                                }))
                                            }(t) && this.alert(Object(o.d)("Part of the CSV export failed. Please try again in a few minutes.", "StreamSummaryTimeseriesExport")), a = function(e) {
                                                for (var t = e.interval, r = e.timeseriesResponse, n = [], a = Object(W.addMinutes)(t.start, (qe - t.start.getMinutes() % qe) % qe); a.getTime() <= t.end.getTime();) n.push(a), a = Object(W.addMinutes)(a, qe);
                                                var i = [
                                                    [Object(o.d)("Timestamp", "StreamSummaryExportTimeseriesStats")].concat(n.map(function(e) {
                                                        return Object(o.c)(e, {
                                                            hour: "numeric",
                                                            minute: "numeric"
                                                        })
                                                    }))
                                                ];
                                                return new Map([
                                                    [Object(o.d)("Viewers", "StreamSummaryExportTimeseriesStats"), Be(r.viewers, function(e) {
                                                        return e.values
                                                    })],
                                                    [Object(o.d)("Live Views", "StreamSummaryExportTimeseriesStats"), Be(r.liveViews, function(e) {
                                                        return e.totalViews
                                                    })],
                                                    [Object(o.d)("New Followers", "StreamSummaryExportTimeseriesStats"), Be(r.followers, function(e) {
                                                        return e.values
                                                    })],
                                                    [Object(o.d)("Chatters", "StreamSummaryExportTimeseriesStats"), Be(r.chat, function(e) {
                                                        return e.participants
                                                    })],
                                                    [Object(o.d)("Chat Messages", "StreamSummaryExportTimeseriesStats"), Be(r.chat, function(e) {
                                                        return e.messages
                                                    })],
                                                    [Object(o.d)("Ad Breaks", "StreamSummaryExportTimeseriesStats"), Be(r.commercials, function(e) {
                                                        return e.values
                                                    })],
                                                    [Object(o.d)("Subscriptions", "StreamSummaryExportTimeseriesStats"), Be(r.subscriptions, function(e) {
                                                        return e.values
                                                    })],
                                                    [Object(o.d)("Clips Created", "StreamSummaryExportTimeseriesStats"), Be(r.clips, function(e) {
                                                        return e.creates
                                                    })],
                                                    [Object(o.d)("All Clip Views", "StreamSummaryExportTimeseriesStats"), Be(r.clips, function(e) {
                                                        return e.plays
                                                    })],
                                                    [Object(o.d)("Twitch Clip Views", "StreamSummaryExportTimeseriesStats"), Be(r.clips, function(e) {
                                                        return e.twitchPlays
                                                    })],
                                                    [Object(o.d)("Reddit Clip Views", "StreamSummaryExportTimeseriesStats"), Be(r.clips, function(e) {
                                                        return e.redditPlays
                                                    })],
                                                    [Object(o.d)("Facebook Clip Views", "StreamSummaryExportTimeseriesStats"), Be(r.clips, function(e) {
                                                        return e.facebookPlays
                                                    })],
                                                    [Object(o.d)("Twitter Clip Views", "StreamSummaryExportTimeseriesStats"), Be(r.clips, function(e) {
                                                        return e.twitterPlays
                                                    })],
                                                    [Object(o.d)("Other Clip Views", "StreamSummaryExportTimeseriesStats"), Be(r.clips, function(e) {
                                                        return e.otherPlays
                                                    })]
                                                ]).forEach(function(e, t) {
                                                    i.push([t].concat(n.map(function(t) {
                                                        return e.get(t.getTime()) || ""
                                                    })))
                                                }), {
                                                    fileName: Object(o.d)("Stream Session from {start, date} to {end, date}.csv", {
                                                        start: t.start,
                                                        end: t.end
                                                    }, "StreamSummaryExportTimeseriesStats"),
                                                    rows: Object(Me.c)(i)
                                                }
                                            }({
                                                interval: e.interval,
                                                timeseriesResponse: t
                                            }), this.downloadFile(a.fileName, Object(Me.b)(a.rows)), [2]
                                    }
                                })
                            })
                        }, r.downloadFile = t.downloadFile || Me.a, r.alert = t.alert || window.alert, r.fetchAllTimeseries = t.fetchAllTimeseries || Je, r
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(C.Fb, {
                            className: "timeseries-panel__btn",
                            display: C.X.Flex,
                            flexWrap: C.Ba.NoWrap
                        }, a.createElement(C.z, {
                            type: C.F.Text,
                            onClick: this.handleExport,
                            fullWidth: !0
                        }, a.createElement(C.W, {
                            color: C.O.OverlayAlt
                        }, Object(o.d)("Export data", "StreamSummaryTimeseriesPanel"))))
                    }, t
                }(a.Component),
                tt = (r("SwG+"), function(e) {
                    return a.createElement(C.Ra, {
                        display: C.X.Block,
                        borderRadius: C.x.Medium,
                        fontSize: C.Ca.Size6,
                        padding: {
                            left: 1,
                            y: .5,
                            right: 3
                        },
                        fullWidth: !0
                    }, a.createElement("select", {
                        className: "timeseries-select timeseries-select--hollow",
                        onChange: e.onChange
                    }, e.children))
                });
            r("ZbLS");
            ! function(e) {
                e.AverageViewers = "avg_viewers", e.LiveViews = "live_views", e.NewFollowers = "new_followers", e.NewSubScribers = "new_subscribers", e.Chatters = "chatters", e.ChatMessages = "chat_messages", e.AdBreaks = "ad_breaks", e.ClipsCreated = "clips_created", e.ClipViews = "clip_views"
            }($e || ($e = {}));
            var rt = {
                    "data-test-selector": "subtitle"
                },
                nt = {
                    "data-test-selector": "error"
                },
                at = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentStatIndex: 0,
                            statData: {
                                values: [],
                                dates: []
                            },
                            didError: !1
                        }, t.handleStatChange = function(e) {
                            t.setState({
                                currentStatIndex: Number(e.currentTarget.value)
                            }, function() {
                                return t.fetchCurrentStatData()
                            })
                        }, t.onDatasetClick = function(e) {
                            if (t.props.streamSummary && t.props.streamSummary.videoId) {
                                var r = t.props.streamSummary.videoRecordedAt,
                                    n = t.props.streamSummary.videoId,
                                    a = (t.state.statData.dates[e].getTime() - r.getTime()) / 1e3,
                                    i = Object(Ie.b)(n.substring(1), {
                                        t: a
                                    });
                                window.open(i)
                            }
                        }, t.formatTooltipLabel = function(e) {
                            return t.currentStat.formatTooltipLabel ? t.currentStat.formatTooltipLabel(e) : Object(o.d)("{label}: {value, number}", {
                                label: t.currentStat.titleMessage(),
                                value: e > 10 ? Math.round(e) : e
                            }, "StreamSummaryTimeseriesPanel")
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackChartView(), this.fetchCurrentStatData()
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        e.streamSummary !== this.props.streamSummary && this.fetchCurrentStatData(), e.streamSummary === this.props.streamSummary && t.currentStatIndex === this.state.currentStatIndex || this.trackChartView()
                    }, t.prototype.render = function() {
                        return this.props.streamSummary ? a.createElement(C.Fb, {
                            className: "timeseries-panel",
                            background: C.r.Accent,
                            borderRadius: C.x.Medium,
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            margin: {
                                bottom: 4
                            },
                            elevation: 1
                        }, a.createElement(C.Ya, {
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            flexGrow: 1,
                            padding: 2
                        }, a.createElement(C.Fb, {
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: .5
                            },
                            display: C.X.Flex,
                            color: C.O.Overlay,
                            justifyContent: C.Xa.Between,
                            alignItems: C.f.Center
                        }, a.createElement("div", null, a.createElement(C.Fb, {
                            className: "timeseries-panel__select-wrap",
                            borderRadius: C.x.Large
                        }, a.createElement(tt, {
                            onChange: this.handleStatChange
                        }, this.props.timeseriesStats.map(function(e, t) {
                            return a.createElement("option", {
                                key: t,
                                value: t
                            }, e.titleMessage())
                        })))), a.createElement("div", n.__assign({}, rt), Boolean(this.state.statData.values.length) && this.currentStat.subtitleMessage(this.props.streamSummary))), this.chartContent()), a.createElement(et, {
                            streamSummary: this.props.streamSummary
                        })) : a.createElement(C.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(C.jb, {
                            height: 378
                        }))
                    }, t.prototype.chartContent = function() {
                        return this.state.inFlightStatRequest ? a.createElement(C.Fb, {
                            color: C.O.Overlay,
                            fullHeight: !0
                        }, a.createElement(C.ab, {
                            inheritColor: !0,
                            fillContent: !0
                        })) : this.state.didError ? a.createElement(C.W, n.__assign({
                            color: C.O.OverlayAlt,
                            fontSize: C.Ca.Size5
                        }, nt), Object(o.d)("Whoops. Something went wrong.", "StreamSummaryTimeseriesPanel")) : 0 === this.state.statData.values.length ? a.createElement(C.Ya, {
                            padding: {
                                y: 2
                            },
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            alignItems: C.f.Center,
                            alignContent: C.e.Center,
                            flexGrow: 1,
                            justifyContent: C.Xa.Center,
                            fullHeight: !0
                        }, a.createElement(C.Ya, {
                            padding: {
                                bottom: .5
                            }
                        }, a.createElement(C.q, {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/90076/3.0",
                            alt: "StinkyCheese",
                            size: 50
                        })), a.createElement(C.W, {
                            color: C.O.OverlayAlt,
                            fontSize: C.Ca.Size5
                        }, Object(o.d)("Not enough data for us to display", "StreamSummaryTimeseriesPanel"))) : a.createElement(Ve, {
                            datasetLabel: this.currentStat.titleMessage(),
                            labels: this.formattedDates,
                            onDatasetClick: this.onDatasetClick,
                            values: this.state.statData.values,
                            formatTooltipLabel: this.formatTooltipLabel
                        })
                    }, Object.defineProperty(t.prototype, "currentStat", {
                        get: function() {
                            return this.props.timeseriesStats[this.state.currentStatIndex]
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "formattedDates", {
                        get: function() {
                            return this.state.statData.dates.map(function(e) {
                                return Object(o.c)(e, {
                                    hour: "numeric",
                                    minute: "numeric"
                                })
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.fetchCurrentStatData = function() {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var e, t, r, a;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.streamSummary ? (e = this.props.streamSummary.interval, t = this.currentStat.fetch(this.props.streamSummary.channel.id, e), this.setState({
                                            inFlightStatRequest: t
                                        }), [4, t]) : [2];
                                    case 1:
                                        return r = n.sent(), t !== this.state.inFlightStatRequest ? [2] : r.isError ? (this.setState({
                                            inFlightStatRequest: void 0,
                                            didError: !0
                                        }), [2]) : (a = function(e, t) {
                                            var r = {
                                                    dates: [],
                                                    values: []
                                                },
                                                n = e.dates[0];
                                            if (!n) return r;
                                            for (var a = e.interpolationChunkMinutes, i = Object(W.subMinutes)(n, a); i.getTime() >= t.start.getTime();) r.dates.push(i), r.values.push(0), i = Object(W.subMinutes)(i, a);
                                            r.dates.reverse();
                                            var s = 0;
                                            for (i = n; i.getTime() <= t.end.getTime();) {
                                                var o = e.dates[s];
                                                o && o.getTime() === i.getTime() ? (r.dates.push(e.dates[s]), r.values.push(e.values[s]), s++) : (r.dates.push(i), r.values.push(0)), i = Object(W.addMinutes)(i, a)
                                            }
                                            return r
                                        }(r.data, this.props.streamSummary.interval), this.setState({
                                            statData: a,
                                            inFlightStatRequest: void 0
                                        }), [2])
                                }
                            })
                        })
                    }, t.prototype.trackChartView = function() {
                        ! function(e) {
                            o.o.track(m.SpadeEventType.StreamSummaryChartView, {
                                chart: e
                            })
                        }(this.currentStat.trackingKey)
                    }, t
                }(a.PureComponent),
                it = r("5zf8"),
                st = [{
                    fetch: He,
                    titleMessage: function() {
                        return Object(o.d)("Average Viewers", "StreamSummaryTimeseriesStats")
                    },
                    subtitleMessage: function(e) {
                        return Object(o.d)("{peakViewers, plural, one {Peaked at <x:viewers># viewer</x:viewers> at {formattedTime}} other {Peaked at <x:viewers># viewers</x:viewers> at {formattedTime}}}", {
                            peakViewers: e.maxViewerCount,
                            "x:viewers": function(e) {
                                return a.createElement("strong", null, e)
                            },
                            formattedTime: Object(o.c)(e.peakViewershipTime, {
                                hour: "numeric",
                                minute: "numeric"
                            })
                        }, "StreamSummaryTimeseriesStats")
                    },
                    trackingKey: $e.AverageViewers
                }, {
                    fetch: function(e, t) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var r;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Ze(e, t)];
                                    case 1:
                                        return [2, {
                                            isError: (r = n.sent()).isError,
                                            data: {
                                                values: r.data.totalViews,
                                                dates: r.data.dates,
                                                interpolationChunkMinutes: r.data.interpolationChunkMinutes
                                            }
                                        }]
                                }
                            })
                        })
                    },
                    titleMessage: function() {
                        return Object(o.d)("Live Views", "StreamSummaryTimeseriesStats")
                    },
                    subtitleMessage: function(e) {
                        return Object(o.d)("{count, plural, one {<x:views># live view</x:views> for this stream} other {<x:views># live views</x:views> for this stream}}", {
                            count: e.totalViewers,
                            "x:views": function(e) {
                                return a.createElement("strong", null, e)
                            }
                        }, "StreamSummaryTimeseriesStats")
                    },
                    trackingKey: $e.AverageViewers
                }, {
                    fetch: Qe,
                    titleMessage: function() {
                        return Object(o.d)("New Followers", "StreamSummaryTimeseriesStats")
                    },
                    subtitleMessage: function(e) {
                        return Object(o.d)("{count, plural, one {<x:followers># new follower</x:followers> for this stream} other {<x:followers># new followers</x:followers> for this stream}}", {
                            count: e.followersChange,
                            "x:followers": function(e) {
                                return a.createElement("strong", null, e)
                            }
                        }, "StreamSummaryTimeseriesStats")
                    },
                    trackingKey: $e.NewFollowers
                }, {
                    fetch: Ke,
                    titleMessage: function() {
                        return Object(o.d)("New Subscriptions", "StreamSummaryTimeseriesStats")
                    },
                    subtitleMessage: function(e) {
                        return Object(o.d)("{count, plural, one {<x:subscriptions># new subscription</x:subscriptions> for this stream} other {<x:subscriptions># new subscriptions</x:subscriptions> for this stream}}", {
                            count: e.subscriptionsNew,
                            "x:subscriptions": function(e) {
                                return a.createElement("strong", null, e)
                            }
                        }, "StreamSummaryTimeseriesStats")
                    },
                    trackingKey: $e.NewSubScribers
                }, {
                    fetch: function(e, t) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var r;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Ue(e, t)];
                                    case 1:
                                        return [2, {
                                            isError: (r = n.sent()).isError,
                                            data: {
                                                values: r.data.participants,
                                                dates: r.data.dates,
                                                interpolationChunkMinutes: r.data.interpolationChunkMinutes
                                            }
                                        }]
                                }
                            })
                        })
                    },
                    titleMessage: function() {
                        return Object(o.d)("Chatters", "StreamSummaryTimeseriesStats")
                    },
                    subtitleMessage: function(e) {
                        return Object(o.d)("{count, plural, one {<x:chatters># chatter</x:chatters> for this stream} other {<x:chatters># chatters</x:chatters> for this stream}}", {
                            count: e.uniqueChatters,
                            "x:chatters": function(e) {
                                return a.createElement("strong", null, e)
                            }
                        }, "StreamSummaryTimeseriesStats")
                    },
                    trackingKey: $e.Chatters
                }, {
                    fetch: function(e, t) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var r;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Ue(e, t)];
                                    case 1:
                                        return [2, {
                                            isError: (r = n.sent()).isError,
                                            data: {
                                                values: r.data.messages,
                                                dates: r.data.dates,
                                                interpolationChunkMinutes: r.data.interpolationChunkMinutes
                                            }
                                        }]
                                }
                            })
                        })
                    },
                    titleMessage: function() {
                        return Object(o.d)("Chat Messages", "StreamSummaryTimeseriesStats")
                    },
                    subtitleMessage: function(e) {
                        return Object(o.d)("{count, plural, one {<x:messages># chat message</x:messages> for this stream} other {<x:messages># chat messages</x:messages> for this stream}}", {
                            count: e.messagesTotal,
                            "x:messages": function(e) {
                                return a.createElement("strong", null, e)
                            }
                        }, "StreamSummaryTimeseriesStats")
                    },
                    trackingKey: $e.ChatMessages
                }, {
                    fetch: Ge,
                    titleMessage: function() {
                        return Object(o.d)("Ad Breaks", "StreamSummaryTimeseriesStats")
                    },
                    subtitleMessage: function(e) {
                        return Object(o.d)("<x:time>{time} of ad breaks</x:time> for this stream", {
                            time: Object(it.b)(e.commercialLengthTotal, it.a.HumanizedShort),
                            "x:time": function(e) {
                                return a.createElement("strong", null, e)
                            }
                        }, "StreamSummaryTimeseriesStats")
                    },
                    formatTooltipLabel: function(e) {
                        return Object(it.b)(e, it.a.HumanizedShort)
                    },
                    trackingKey: $e.AdBreaks
                }, {
                    fetch: function(e, t) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var r;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Xe(e, t)];
                                    case 1:
                                        return [2, {
                                            isError: (r = n.sent()).isError,
                                            data: {
                                                values: r.data.creates,
                                                dates: r.data.dates,
                                                interpolationChunkMinutes: r.data.interpolationChunkMinutes
                                            }
                                        }]
                                }
                            })
                        })
                    },
                    titleMessage: function() {
                        return Object(o.d)("Clips Created", "StreamSummaryTimeseriesStats")
                    },
                    subtitleMessage: function(e) {
                        return Object(o.d)("{count, plural, one {<x:clips># clip created</x:clips> for this stream} other {<x:clips># clips created</x:clips> for this stream}}", {
                            count: e.clipCreatesTotal,
                            "x:clips": function(e) {
                                return a.createElement("strong", null, e)
                            }
                        }, "StreamSummaryTimeseriesStats")
                    },
                    trackingKey: $e.ClipsCreated
                }, {
                    fetch: function(e, t) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var r;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Xe(e, t)];
                                    case 1:
                                        return [2, {
                                            isError: (r = n.sent()).isError,
                                            data: {
                                                values: r.data.plays,
                                                dates: r.data.dates,
                                                interpolationChunkMinutes: r.data.interpolationChunkMinutes
                                            }
                                        }]
                                }
                            })
                        })
                    },
                    titleMessage: function() {
                        return Object(o.d)("Clip Views", "StreamSummaryTimeseriesStats")
                    },
                    subtitleMessage: function(e) {
                        return Object(o.d)("{count, plural, one {<x:views># clip view</x:views> for this stream} other {<x:views># clip views</x:views> for this stream}}", {
                            count: e.clipPlaysTotal,
                            "x:views": function(e) {
                                return a.createElement("strong", null, e)
                            }
                        }, "StreamSummaryTimeseriesStats")
                    },
                    trackingKey: $e.ClipViews
                }],
                ot = r("5e4V"),
                ct = r("dG1e"),
                lt = {
                    "data-test-selector": "summary-tip-message"
                },
                ut = {
                    "data-test-selector": "summary-learn-more-cta"
                },
                mt = "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                dt = "VoHiYo",
                pt = function(e) {
                    var t = e.tip;
                    return e.isLoading ? a.createElement(C.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(C.jb, {
                        height: 121
                    })) : a.createElement("div", null, a.createElement(E.a, {
                        title: Object(o.d)("What is my tip of the day?", "StreamSummaryTipsPanel")
                    }, a.createElement(C.Fb, {
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        padding: 2,
                        borderRadius: C.x.Large,
                        background: C.r.Base
                    }, a.createElement(C.Ya, {
                        display: C.X.Flex,
                        alignItems: C.f.Center
                    }, a.createElement(C.Fb, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, a.createElement(C.q, {
                        src: mt,
                        alt: dt,
                        size: 30
                    })), a.createElement(C.Ya, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(C.W, n.__assign({
                        type: C.Wb.Span,
                        fontSize: C.Ca.Size5
                    }, lt), t.body), a.createElement(ht, {
                        url: t.url
                    }))))))
                },
                ht = function(e) {
                    var t = e.url;
                    return t ? a.createElement(C.W, n.__assign({
                        type: C.Wb.Span,
                        fontSize: C.Ca.Size5
                    }, ut), " ", a.createElement("a", {
                        target: "_blank",
                        href: t
                    }, Object(o.d)("Learn More", "StreamTipsLearnMoreCTA"))) : null
                },
                ft = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.state = {
                            tip: void 0
                        }, r
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.requestTip()
                    }, t.prototype.render = function() {
                        return this.state.tip ? a.createElement(pt, {
                            tip: this.state.tip,
                            isLoading: this.props.isLoading
                        }) : null
                    }, t.prototype.requestTip = function() {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return n.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Object(ct.a)({
                                            path: "/v5/stream_summary/tip",
                                            headers: {
                                                "Accept-Language": Object(ot.a)() || "en"
                                            }
                                        })];
                                    case 1:
                                        return (e = t.sent()).isSuccess() && this.setState(e.body), [2]
                                }
                            })
                        })
                    }, t
                }(a.Component),
                bt = r("FXHi"),
                gt = function(e) {
                    var t = e.streamSummary,
                        r = e.topClips;
                    if (r.isLoading) return a.createElement(yt, null);
                    if (!r.isLoading && !r.clips.length) return null;
                    var n = Object(o.d)("View more clips", "StreamSummaryTopClipsPanelCTA");
                    return a.createElement(E.a, {
                        title: Object(o.d)("What were my top clips?", "StreamSummaryTopClipsPanel")
                    }, a.createElement(vt, {
                        clipsAttrs: r
                    }), t ? a.createElement(w.a, {
                        message: n,
                        linkTo: "/" + t.channel.name + "/manager/clips/channel",
                        onClick: j.f,
                        targetBlank: !0
                    }) : a.createElement("p", null, n))
                },
                vt = function(e) {
                    if (e.clipsAttrs.isLoading)
                        for (var t = [], r = 0; r < 5; r++) t.push(a.createElement(C.Fb, {
                            padding: {
                                x: 2,
                                y: 1
                            },
                            key: r,
                            borderBottom: !0
                        }, a.createElement(C.jb, {
                            height: 50
                        })));
                    return a.createElement(C.Fb, {
                        borderBottom: !0
                    }, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                        return a.createElement(bt.a, n.__assign({}, e, {
                            key: t,
                            onClick: j.d
                        }))
                    }))
                },
                yt = function() {
                    return a.createElement(C.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(C.jb, {
                        height: 448
                    }))
                },
                St = r("2rRr"),
                Et = r("eFQ3"),
                wt = r("16Gl"),
                jt = function(e) {
                    var t = e.streamSummary;
                    return t ? t.videoId ? a.createElement(E.a, {
                        title: Object(o.d)("What is the video for this stream?", "StreamSummaryVodPanel")
                    }, a.createElement(St.a, {
                        key: t.videoId,
                        onClick: j.c,
                        type: St.b.Video,
                        viewCount: t.videoViews,
                        thumbnailURL: t.videoMediumThumbnail
                    }, a.createElement(Et.b, {
                        vodID: t.videoId,
                        disableTheatreButton: !0,
                        playerTypeOverride: Et.a.Dashboard
                    })), a.createElement(w.a, {
                        message: Object(o.d)("Highlight video", "StreamSummaryVodPanelCTA"),
                        onClick: j.h,
                        linkTo: Object(wt.c)(t.channel.name, t.videoId.substring(1)),
                        targetBlank: !0
                    })) : null : a.createElement(C.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(C.jb, {
                        height: 448
                    }))
                },
                _t = r("3lt/"),
                Ct = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.channel.role === x.d.Affiliate || this.props.channel.role === x.d.Partner,
                            t = this.props.sessionCursor.current ? [this.props.sessionCursor.current] : [];
                        return a.createElement(a.Fragment, null, this.props.sessionCursor.isLast && a.createElement(te, {
                            query: this.props.achievementProgressions,
                            streamSummary: this.props.sessionCursor.current,
                            topClips: this.props.topClips
                        }), a.createElement(I, {
                            query: this.props.streamSessions,
                            currentStreamSummary: this.props.sessionCursor.current
                        }), a.createElement(Pe, {
                            channelName: this.props.channel.name,
                            previousStreamSummary: this.props.sessionCursor.previous,
                            streamSummary: this.props.sessionCursor.current
                        }), a.createElement(A, null, a.createElement(k, null, a.createElement(at, {
                            streamSummary: this.props.sessionCursor.current,
                            timeseriesStats: st
                        }), a.createElement(gt, {
                            streamSummary: this.props.sessionCursor.current,
                            topClips: this.props.topClips
                        }), a.createElement(jt, {
                            streamSummary: this.props.sessionCursor.current
                        }), !e && a.createElement(ft, {
                            isLoading: !this.props.sessionCursor.current
                        })), a.createElement(k, null, a.createElement(q, {
                            quest: this.props.sessionCursor.current && this.props.achievementProgressions.quests[0],
                            channelName: this.props.channel.name
                        }), a.createElement(O, {
                            query: this.props.achievementProgressions,
                            streamSummaryCursor: this.props.sessionCursor
                        }), a.createElement(g.a, {
                            streamSessionsQuery: {
                                isLoading: 0 === t.length,
                                sessions: t
                            },
                            onViewDetails: j.g,
                            linkToDetails: t.length > 0 ? {
                                pathname: "/" + this.props.channel.name + "/dashboard/stream-summary/" + this.props.sessionCursor.current.id + "/referrals",
                                state: {
                                    content: _t.PageviewContent.ReferralsDetails,
                                    medium: _t.PageviewMedium.StreamSummary
                                }
                            } : ""
                        }))))
                    }, t
                }(a.Component),
                Ot = r("4eyL"),
                kt = r("Dg4+"),
                At = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.state = {
                            topClipsByStreamSummary: new Map,
                            isLoading: !0
                        }, r
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchTopClips()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.streamSummary !== this.props.streamSummary && this.fetchTopClips()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.streamSummary && this.props.streamSummary.id,
                            r = t && this.state.topClipsByStreamSummary.get(t) || [];
                        return a.createElement(Ot.a, {
                            channel: this.props.channel
                        }, function(t) {
                            return e.props.children({
                                topClips: {
                                    clips: r,
                                    isLoading: e.state.isLoading
                                },
                                achievementProgressionsQuery: t
                            })
                        })
                    }, t.prototype.fetchTopClips = function() {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return n.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return !(e = this.props.streamSummary) || this.state.topClipsByStreamSummary.get(e.id) ? [2] : (this.setState({
                                            isLoading: !0
                                        }), [4, Object(kt.a)(e.channel.name, e.interval)]);
                                    case 1:
                                        return (t = r.sent()).isError ? [2] : (this.setState(function(r) {
                                            return {
                                                topClipsByStreamSummary: new Map(r.topClipsByStreamSummary).set(e.id, t.topClips),
                                                isLoading: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t
                }(a.Component),
                xt = r("Map9"),
                Tt = r("YNx3"),
                Dt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        o.p.setPageTitle(Object(o.d)("Stream Summary", "DashboardStreamSummaryPage"))
                    }, t.prototype.render = function() {
                        var e = this,
                            t = x.c.fromChannelData(this.props.data);
                        if (!t) return null;
                        if (!this.props.data.loading && this.props.data.channel) {
                            var r = this.props.userID === this.props.data.channel.id,
                                n = this.props.data.channel.self && this.props.data.channel.self.isEditor;
                            if (!this.props.isStaff && !r && !n) return a.createElement(h.a, null)
                        }
                        return a.createElement(a.Fragment, null, a.createElement(f.a, null, a.createElement(xt.a, {
                            query: this.props.streamSummaryQuery,
                            summaryID: this.props.streamSummaryID,
                            getURLForStreamSummary: Y.d
                        }, function(r) {
                            return a.createElement(At, {
                                previousStreamSummary: r.previous,
                                streamSummary: r.current,
                                channel: t
                            }, function(n) {
                                return a.createElement(Ct, {
                                    channel: t,
                                    sessionCursor: r,
                                    achievementProgressions: n.achievementProgressionsQuery,
                                    streamSessions: e.props.streamSummaryQuery,
                                    topClips: n.topClips
                                })
                            })
                        })), a.createElement(b.a, null))
                    }, t
                }(a.Component);
            var Rt = Object(i.compose)(Object(p.b)("StreamSummaryPage", {
                destination: u.a.ChannelDashboardStreamSummary,
                autoReportInteractive: !0
            }), Object(l.a)({
                location: m.PageviewLocation.DashboardStreamSummary
            }), Object(c.a)(Tt, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelName
                        }
                    }
                }
            }), Object(s.connect)(function(e) {
                var t = Object(d.e)(e);
                return {
                    userID: t && t.id,
                    isStaff: !!(t && t.roles && t.roles.isStaff)
                }
            }))(Dt);
            r.d(t, "StreamSummaryPage", function() {
                return Rt
            }), r.d(t, "PublicProps", function() {})
        },
        "Dg4+": function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            });
            var n = r("mrSG"),
                a = r("cr+I"),
                i = r("CFgy"),
                s = r("6XEL");

            function o(e, t) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var r, o, c, l;
                    return n.__generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return r = "/kraken/clips/top", o = a.stringify(n.__assign({
                                    channel: e
                                }, Object(i.i)(t))), c = [r, o].join("?"), [4, Object(s.c)({
                                    path: c
                                })];
                            case 1:
                                return (l = u.sent()).isError() ? [2, {
                                    isError: !0,
                                    topClips: []
                                }] : [2, {
                                    isError: !1,
                                    topClips: function(e) {
                                        return e.clips.map(function(e) {
                                            var t = {
                                                title: e.title,
                                                views: e.views,
                                                url: e.url,
                                                curatorName: e.curator.display_name,
                                                thumbnailURL: e.thumbnails.tiny
                                            };
                                            return t
                                        })
                                    }(l.body)
                                }]
                        }
                    })
                })
            }
        },
        Dm0L: function(e, t, r) {},
        FXHi: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r("/7QA"),
                i = r("2xye"),
                s = r("Ue10"),
                o = (r("qZmV"), function(e) {
                    return n.createElement(s.Ya, {
                        className: "clip-card-row"
                    }, n.createElement(s.Va, {
                        type: s.Wa.Alpha,
                        blurAfterClick: !0,
                        targetBlank: !0,
                        linkTo: e.url + "?tt_content=" + i.PageviewContent.TopClips + "&tt_medium=" + i.PageviewMedium.ChannelAnalytics,
                        onClick: e.onClick
                    }, n.createElement(s.Fb, {
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, n.createElement(s.G, {
                        row: !0
                    }, n.createElement(s.I, {
                        src: e.thumbnailURL,
                        alt: e.title,
                        size: s.J.Size8,
                        aspect: s.p.Aspect16x9
                    }), n.createElement(s.H, {
                        overflow: s.db.Hidden
                    }, n.createElement(s.Ya, {
                        display: s.X.Flex,
                        flexGrow: 1,
                        alignItems: s.f.Center,
                        justifyContent: s.Xa.Between,
                        margin: {
                            left: 1
                        },
                        ellipsis: !0
                    }, n.createElement(s.Ya, {
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        ellipsis: !0
                    }, n.createElement(s.W, {
                        color: s.O.Base,
                        type: s.Wb.H5,
                        ellipsis: !0
                    }, e.title), n.createElement(s.Ya, {
                        display: s.X.Flex,
                        flexWrap: s.Ba.NoWrap
                    }, n.createElement(s.tb, {
                        asset: s.ub.GlyphLive,
                        type: s.vb.Alt2
                    }), n.createElement(s.Ya, {
                        display: s.X.Inline,
                        padding: {
                            left: .5
                        },
                        ellipsis: !0
                    }, n.createElement(s.W, {
                        type: s.Wb.Span
                    }, e.curatorName)))))), n.createElement(s.Ya, {
                        display: s.X.Flex,
                        flexGrow: 1,
                        justifyContent: s.Xa.End,
                        padding: {
                            left: 2
                        }
                    }, n.createElement(s.tb, {
                        asset: s.ub.GlyphViews,
                        type: s.vb.Alt2
                    }), n.createElement(s.Ya, {
                        display: s.X.Flex,
                        padding: {
                            left: .5
                        }
                    }, n.createElement(s.W, {
                        bold: !0,
                        fontSize: s.Ca.Size5,
                        color: s.O.Alt,
                        type: s.Wb.Span
                    }, Object(a.d)("{views, number}", {
                        views: e.views
                    }, "StreamSummaryClipViews"))))))))
                });
            r.d(t, "a", function() {
                return o
            })
        },
        FkHV: function(e, t, r) {},
        FuXV: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("TSYQ"),
                i = r("q1tI"),
                s = r("ll/k"),
                o = r("Ue10"),
                c = (r("0eTn"), ["confetti-layer__confetti--slow", "confetti-layer__confetti--medium", "confetti-layer__confetti--fast"]),
                l = ["rgba(247, 42, 107, 1)", "rgba(255, 113, 105, 1)", "rgba(253, 226, 132, 1)", "rgba(181, 138, 242, 1)"],
                u = ["0.011s", "0.176s", "0.321s", "0.446s", "0.849s", "1.056s", "1.229s", "1.333s", "1.379s", "1.828s"],
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = a({
                                "confetti-layer__confetti": !0,
                                "confetti-layer__confetti--infinite": this.props.infinite
                            });
                        return i.createElement(o.Ya, {
                            className: "confetti-layer",
                            position: o.kb.Absolute,
                            overflow: o.db.Hidden,
                            zIndex: o.jc.Default,
                            attachTop: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            attachLeft: !0
                        }, Object(s.c)(this.props.confettiCount, function(r) {
                            return i.createElement("div", {
                                key: r,
                                className: t + " " + Object(s.b)(c),
                                style: {
                                    position: "absolute",
                                    left: Object(s.a)(2, 95) + "%",
                                    width: Object(s.a)(4, 10) + "px",
                                    height: Object(s.a)(4, 10) + "px",
                                    backgroundColor: "" + Object(s.b)(e.props.colors),
                                    animationDelay: "" + Object(s.b)(u)
                                }
                            })
                        }))
                    }, t.defaultProps = {
                        colors: l
                    }, t
                }(i.PureComponent);
            r.d(t, "a", function() {
                return m
            })
        },
        KYAw: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return s
            }), r.d(t, "b", function() {
                return o
            });
            var n = r("mrSG"),
                a = r("cr+I"),
                i = r("Addw");

            function s(e, t) {
                var r = new URL("https://www.twitch.tv/collections/" + e);
                return t && (r.search = a.stringify(t)), r.toString()
            }

            function o(e, t) {
                var r = new URL("https://www.twitch.tv/videos/" + e);
                return t && (r.search = a.stringify(n.__assign({}, t, {
                    t: "number" == typeof t.t ? Object(i.a)(t.t) : void 0
                }))), r.toString()
            }
        },
        MjdR: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("TSYQ"),
                i = r("q1tI"),
                s = r("gi7w"),
                o = r("gq0V"),
                c = r("Ue10"),
                l = function(e) {
                    var t = Object(o.b)(),
                        r = t && {
                            overflow: c.db.Hidden,
                            borderRadius: c.x.Large
                        },
                        l = a({
                            "ach-card__badge-wrap": !t,
                            "ach-card-vip__badge-wrap": t
                        }),
                        u = a({
                            "ach-card__badge": !t,
                            "ach-card-vip__badge": t
                        }),
                        m = t && {
                            borderRadius: c.x.Large
                        };
                    return i.createElement(c.Ya, n.__assign({
                        display: c.X.Flex,
                        flexWrap: c.Ba.NoWrap,
                        position: c.kb.Relative,
                        flexShrink: 0
                    }, m), i.createElement(c.Ya, {
                        className: l,
                        position: c.kb.Relative,
                        flexShrink: 0
                    }, i.createElement(c.Fb, n.__assign({
                        className: u,
                        background: c.r.Alt2
                    }, r), i.createElement("img", {
                        alt: e.achievement.title,
                        className: "ach-card__img",
                        src: e.achievement.image.scale1x,
                        srcSet: e.achievement.image.scale1x + " 1x, " + e.achievement.image.scale3x + " 3x"
                    })), Boolean(e.achievement.level) && i.createElement(c.Fb, {
                        className: "ach-card__lvl",
                        position: c.kb.Absolute,
                        background: c.r.Alt
                    }, i.createElement(c.s, {
                        border: !0,
                        icon: Object(s.a)(e.achievement.level),
                        size: 20,
                        type: c.t.Dashboard
                    }))), i.createElement(c.Fb, {
                        overflow: c.db.Hidden,
                        display: c.X.Flex,
                        justifyContent: c.Xa.Center,
                        flexDirection: c.Aa.Column,
                        margin: {
                            left: 2
                        }
                    }, i.createElement(c.W, {
                        fontSize: c.Ca.Size4,
                        color: c.O.Alt,
                        bold: !0,
                        ellipsis: !0
                    }, e.achievement.title), i.createElement(c.W, {
                        fontSize: c.Ca.Size5,
                        color: c.O.Alt2,
                        ellipsis: !0
                    }, e.achievement.description)), i.createElement(c.Fb, {
                        className: "ach-card__progress-meta",
                        display: c.X.Flex,
                        alignContent: c.e.Center,
                        alignItems: c.f.Center,
                        justifyContent: c.Xa.End,
                        flexGrow: 1,
                        flexShrink: 0,
                        margin: {
                            left: 1
                        }
                    }, e.children))
                };
            r.d(t, "a", function() {
                return l
            })
        },
        NCCa: function(e, t, r) {},
        OGSR: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("Ue10"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleCanvasReady = function(e) {
                            e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(i.Qa, {
                            fullWidth: !0
                        }, a.createElement("canvas", {
                            ref: this.handleCanvasReady
                        }))
                    }, t.prototype.setCanvasResolution = function(e) {
                        var t = e.width,
                            r = e.height,
                            n = this.getPixelRatio(e.getContext("2d"));
                        e.width = t * n, e.height = r * n, e.style.width = t + "px", e.style.height = r + "px", e.getContext("2d").setTransform(n, 0, 0, n, 0, 0)
                    }, t.prototype.getPixelRatio = function(e) {
                        return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                    }, t
                }(a.Component);
            r.d(t, "a", function() {
                return s
            })
        },
        Qtpw: function(e, t, r) {},
        RnhZ: function(e, t, r) {
            var n = {
                "./af": "K/tc",
                "./af.js": "K/tc",
                "./ar": "jnO4",
                "./ar-dz": "o1bE",
                "./ar-dz.js": "o1bE",
                "./ar-kw": "Qj4J",
                "./ar-kw.js": "Qj4J",
                "./ar-ly": "HP3h",
                "./ar-ly.js": "HP3h",
                "./ar-ma": "CoRJ",
                "./ar-ma.js": "CoRJ",
                "./ar-sa": "gjCT",
                "./ar-sa.js": "gjCT",
                "./ar-tn": "bYM6",
                "./ar-tn.js": "bYM6",
                "./ar.js": "jnO4",
                "./az": "SFxW",
                "./az.js": "SFxW",
                "./be": "H8ED",
                "./be.js": "H8ED",
                "./bg": "hKrs",
                "./bg.js": "hKrs",
                "./bn": "kEOa",
                "./bn.js": "kEOa",
                "./bo": "0mo+",
                "./bo.js": "0mo+",
                "./br": "aIdf",
                "./br.js": "aIdf",
                "./bs": "JVSJ",
                "./bs.js": "JVSJ",
                "./ca": "1xZ4",
                "./ca.js": "1xZ4",
                "./cs": "PA2r",
                "./cs.js": "PA2r",
                "./cv": "A+xa",
                "./cv.js": "A+xa",
                "./cy": "l5ep",
                "./cy.js": "l5ep",
                "./da": "DxQv",
                "./da.js": "DxQv",
                "./de": "tGlX",
                "./de-at": "s+uk",
                "./de-at.js": "s+uk",
                "./de-ch": "u3GI",
                "./de-ch.js": "u3GI",
                "./de.js": "tGlX",
                "./dv": "WYrj",
                "./dv.js": "WYrj",
                "./el": "jUeY",
                "./el.js": "jUeY",
                "./en-au": "Dmvi",
                "./en-au.js": "Dmvi",
                "./en-ca": "OIYi",
                "./en-ca.js": "OIYi",
                "./en-gb": "Oaa7",
                "./en-gb.js": "Oaa7",
                "./en-ie": "4dOw",
                "./en-ie.js": "4dOw",
                "./en-nz": "b1Dy",
                "./en-nz.js": "b1Dy",
                "./eo": "Zduo",
                "./eo.js": "Zduo",
                "./es": "iYuL",
                "./es-do": "CjzT",
                "./es-do.js": "CjzT",
                "./es.js": "iYuL",
                "./et": "7BjC",
                "./et.js": "7BjC",
                "./eu": "D/JM",
                "./eu.js": "D/JM",
                "./fa": "jfSC",
                "./fa.js": "jfSC",
                "./fi": "gekB",
                "./fi.js": "gekB",
                "./fo": "ByF4",
                "./fo.js": "ByF4",
                "./fr": "nyYc",
                "./fr-ca": "2fjn",
                "./fr-ca.js": "2fjn",
                "./fr-ch": "Dkky",
                "./fr-ch.js": "Dkky",
                "./fr.js": "nyYc",
                "./fy": "cRix",
                "./fy.js": "cRix",
                "./gd": "9rRi",
                "./gd.js": "9rRi",
                "./gl": "iEDd",
                "./gl.js": "iEDd",
                "./gom-latn": "DKr+",
                "./gom-latn.js": "DKr+",
                "./he": "x6pH",
                "./he.js": "x6pH",
                "./hi": "3E1r",
                "./hi.js": "3E1r",
                "./hr": "S6ln",
                "./hr.js": "S6ln",
                "./hu": "WxRl",
                "./hu.js": "WxRl",
                "./hy-am": "1rYy",
                "./hy-am.js": "1rYy",
                "./id": "UDhR",
                "./id.js": "UDhR",
                "./is": "BVg3",
                "./is.js": "BVg3",
                "./it": "bpih",
                "./it.js": "bpih",
                "./ja": "B55N",
                "./ja.js": "B55N",
                "./jv": "tUCv",
                "./jv.js": "tUCv",
                "./ka": "IBtZ",
                "./ka.js": "IBtZ",
                "./kk": "bXm7",
                "./kk.js": "bXm7",
                "./km": "6B0Y",
                "./km.js": "6B0Y",
                "./kn": "PpIw",
                "./kn.js": "PpIw",
                "./ko": "Ivi+",
                "./ko.js": "Ivi+",
                "./ky": "lgnt",
                "./ky.js": "lgnt",
                "./lb": "RAwQ",
                "./lb.js": "RAwQ",
                "./lo": "sp3z",
                "./lo.js": "sp3z",
                "./lt": "JvlW",
                "./lt.js": "JvlW",
                "./lv": "uXwI",
                "./lv.js": "uXwI",
                "./me": "KTz0",
                "./me.js": "KTz0",
                "./mi": "aIsn",
                "./mi.js": "aIsn",
                "./mk": "aQkU",
                "./mk.js": "aQkU",
                "./ml": "AvvY",
                "./ml.js": "AvvY",
                "./mr": "Ob0Z",
                "./mr.js": "Ob0Z",
                "./ms": "6+QB",
                "./ms-my": "ZAMP",
                "./ms-my.js": "ZAMP",
                "./ms.js": "6+QB",
                "./my": "honF",
                "./my.js": "honF",
                "./nb": "bOMt",
                "./nb.js": "bOMt",
                "./ne": "OjkT",
                "./ne.js": "OjkT",
                "./nl": "+s0g",
                "./nl-be": "2ykv",
                "./nl-be.js": "2ykv",
                "./nl.js": "+s0g",
                "./nn": "uEye",
                "./nn.js": "uEye",
                "./pa-in": "8/+R",
                "./pa-in.js": "8/+R",
                "./pl": "jVdC",
                "./pl.js": "jVdC",
                "./pt": "8mBD",
                "./pt-br": "0tRk",
                "./pt-br.js": "0tRk",
                "./pt.js": "8mBD",
                "./ro": "lyxo",
                "./ro.js": "lyxo",
                "./ru": "lXzo",
                "./ru.js": "lXzo",
                "./sd": "Z4QM",
                "./sd.js": "Z4QM",
                "./se": "//9w",
                "./se.js": "//9w",
                "./si": "7aV9",
                "./si.js": "7aV9",
                "./sk": "e+ae",
                "./sk.js": "e+ae",
                "./sl": "gVVK",
                "./sl.js": "gVVK",
                "./sq": "yPMs",
                "./sq.js": "yPMs",
                "./sr": "zx6S",
                "./sr-cyrl": "E+lV",
                "./sr-cyrl.js": "E+lV",
                "./sr.js": "zx6S",
                "./ss": "Ur1D",
                "./ss.js": "Ur1D",
                "./sv": "X709",
                "./sv.js": "X709",
                "./sw": "dNwA",
                "./sw.js": "dNwA",
                "./ta": "PeUW",
                "./ta.js": "PeUW",
                "./te": "XLvN",
                "./te.js": "XLvN",
                "./tet": "V2x9",
                "./tet.js": "V2x9",
                "./th": "EOgW",
                "./th.js": "EOgW",
                "./tl-ph": "Dzi0",
                "./tl-ph.js": "Dzi0",
                "./tlh": "z3Vd",
                "./tlh.js": "z3Vd",
                "./tr": "DoHr",
                "./tr.js": "DoHr",
                "./tzl": "z1FC",
                "./tzl.js": "z1FC",
                "./tzm": "wQk9",
                "./tzm-latn": "tT3J",
                "./tzm-latn.js": "tT3J",
                "./tzm.js": "wQk9",
                "./uk": "raLr",
                "./uk.js": "raLr",
                "./ur": "UpQW",
                "./ur.js": "UpQW",
                "./uz": "Loxo",
                "./uz-latn": "AQ68",
                "./uz-latn.js": "AQ68",
                "./uz.js": "Loxo",
                "./vi": "KSF8",
                "./vi.js": "KSF8",
                "./x-pseudo": "/X5v",
                "./x-pseudo.js": "/X5v",
                "./yo": "fzPg",
                "./yo.js": "fzPg",
                "./zh-cn": "XDpg",
                "./zh-cn.js": "XDpg",
                "./zh-hk": "SatO",
                "./zh-hk.js": "SatO",
                "./zh-tw": "kOpN",
                "./zh-tw.js": "kOpN"
            };

            function a(e) {
                var t = i(e);
                return r(t)
            }

            function i(e) {
                var t = n[e];
                if (!(t + 1)) {
                    var r = new Error("Cannot find module '" + e + "'");
                    throw r.code = "MODULE_NOT_FOUND", r
                }
                return t
            }
            a.keys = function() {
                return Object.keys(n)
            }, a.resolve = i, e.exports = a, a.id = "RnhZ"
        },
        S3iq: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("TSYQ"),
                i = r("q1tI"),
                s = r("MjdR"),
                o = r("gq0V"),
                c = r("6XEL"),
                l = r("Ue10"),
                u = {
                    "data-test-selector": "achievement-card"
                },
                m = function(e) {
                    return i.createElement(l.Ya, n.__assign({
                        className: "ach-link",
                        "aria-hidden": e.isHidden
                    }, u), i.createElement(d, {
                        achievement: e.achievement,
                        className: e.layoutClassName,
                        isHidden: e.isHidden
                    }, e.children))
                },
                d = function(e) {
                    var t, r = Object(o.b)(),
                        u = a(e.className, {
                            "ach-card": !r,
                            "ach-card-vip": r,
                            "ach-card-vip--completed": Boolean(e.achievement.completedAt),
                            "ach-card--recent": e.achievement.wasRecentlyCompleted
                        }),
                        m = r && {
                            padding: 1
                        };
                    return e.achievement.completedAt || (t = i.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, i.createElement(l.nb, {
                        size: l.pb.ExtraSmall,
                        value: 100 * e.achievement.progressRatio
                    }))), i.createElement(l.Fb, {
                        className: u,
                        position: l.kb.Relative
                    }, i.createElement(l.Va, {
                        tabIndex: e.isHidden ? -1 : void 0,
                        type: l.Wa.Base,
                        linkTo: c.b.achievement(e.achievement)
                    }, i.createElement(l.Fb, n.__assign({
                        className: "ach-card__inner"
                    }, m), i.createElement(s.a, {
                        achievement: e.achievement
                    }, i.createElement("div", null, e.children, !r && t)), r && t)))
                };
            r.d(t, !1, function() {
                return u
            }), r.d(t, "a", function() {
                return m
            })
        },
        "SwG+": function(e, t, r) {},
        Tc9I: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return s
            }), r.d(t, "a", function() {
                return o
            });
            var n, a = r("/7QA"),
                i = r("5NYc");

            function s(e) {
                return function() {
                    var e;
                    return n || ((e = {})[i.b.PATH_TO_PARTNER] = {
                        title: Object(a.d)("Path to Partner", "AchievementsSpotlightPathToPartner"),
                        bannerTitle: function(e) {
                            return Object(a.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToPartner")
                        },
                        subtitle: Object(a.d)("Apply to become a Twitch Partner today", "AchievementsSpotlightPathToPartner")
                    }, e[i.b.PATH_TO_AFFILIATE] = {
                        title: Object(a.d)("Path to Affiliate", "AchievementsSpotlightPathToAffiliate"),
                        bannerTitle: function(e) {
                            return Object(a.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToAffiliate")
                        },
                        subtitle: Object(a.d)("You're eligible to become a Twitch Affiliate", "AchievementsSpotlightPathToAffiliate")
                    }, e[i.b.IT_BEGINS] = {
                        title: Object(a.d)("It Begins", "AchievementsSpotlightItBegins"),
                        bannerTitle: function(e) {
                            return Object(a.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightItBegins")
                        },
                        subtitle: Object(a.d)("Which achievement will you complete next?", "AchievementsSpotlightItBegins")
                    }, e[i.b.VIP_BADGE] = {
                        title: Object(a.d)("Build a Community", "AchievementsSpotlightBuildACommunity"),
                        bannerTitle: function(e) {
                            return Object(a.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightBuildACommunity")
                        },
                        subtitle: Object(a.d)("Now you can recognize viewers as VIPs", "AchivementsSpotlightBuildACommunity")
                    }, n = e), n
                }()[e] || e
            }

            function o() {
                return {
                    spotlightDismiss: Object(a.d)("Close", "StreamSummarySpotlightDismiss")
                }
            }
        },
        "UK3/": function(e, t, r) {},
        VxtK: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r("/7QA"),
                i = r("cSnd"),
                s = r("a7UW"),
                o = r("6E8S"),
                c = r("sBDM"),
                l = r("nlSm"),
                u = r("g3ZN"),
                m = r("Ue10"),
                d = {
                    "data-test-selector": "referral-percentage"
                },
                p = function(e) {
                    return e
                },
                h = function(e) {
                    var t = e.streamSessionsQuery,
                        r = e.linkToDetails,
                        d = e.onViewDetails;
                    if (t.isLoading) return n.createElement(f, null);
                    var h = t.sessions,
                        b = Object(l.a)(h.map(function(e) {
                            return e.videoPlayInternalTwitchReferrers
                        })),
                        g = Object(l.a)(h.map(function(e) {
                            return e.videoPlayInternalChannelsReferrers
                        })),
                        v = Object(l.a)(h.map(function(e) {
                            return e.videoPlayExternalReferrers
                        })),
                        y = n.createElement(s.a, null);
                    return (b.total || g.total || v.total) && (y = n.createElement(n.Fragment, null, n.createElement(m.Fb, {
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, n.createElement(u.a, {
                        referrals: b.items.slice(0, 3),
                        total: b.total,
                        translationFunc: i.b,
                        title: Object(a.d)("Twitch", "DashboardReferralPanel")
                    }), n.createElement(u.a, {
                        referrals: g.items.slice(0, 3),
                        total: g.total,
                        translationFunc: p,
                        title: Object(a.d)("Channels", "DashboardReferralPanel")
                    }), n.createElement(u.a, {
                        referrals: v.items.slice(0, 3),
                        total: v.total,
                        translationFunc: i.a,
                        title: Object(a.d)("External", "DashboardReferralPanel")
                    })), n.createElement(c.a, {
                        onClick: d,
                        message: Object(a.d)("View details", "DashboardReferralPanel"),
                        linkTo: r
                    }))), n.createElement(o.a, {
                        title: Object(a.d)("Where did my views come from?", "DashboardReferralPanel")
                    }, y)
                },
                f = function() {
                    return n.createElement(m.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(m.jb, {
                        height: 448
                    }))
                };
            r.d(t, !1, function() {
                return d
            }), r.d(t, "a", function() {
                return h
            }), r.d(t, "b", function() {
                return f
            })
        },
        YNx3: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardStreamSummaryPage"
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
                    end: 158
                }
            };
            r.loc.source = {
                body: "query DashboardStreamSummaryPage($channelLogin: String) {\nchannel: user(login: $channelLogin) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\nself {\nisEditor\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        ZbLS: function(e, t, r) {},
        a7UW: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("/7QA"),
                s = r("Ue10"),
                o = {
                    "data-test-selector": "no-data"
                },
                c = {
                    src: "https://static-cdn.jtvnw.net/emoticons/v1/160403/3.0",
                    alt: "TearGlove"
                },
                l = function() {
                    return a.createElement(s.Ya, n.__assign({
                        alignItems: s.f.Center,
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Xa.Center,
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0,
                        padding: {
                            top: 5,
                            bottom: 5
                        }
                    }, o), a.createElement(s.Ya, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(s.q, n.__assign({}, c, {
                        size: 50
                    }))), a.createElement(s.W, {
                        color: s.O.Alt2,
                        fontSize: s.Ca.Size5
                    }, Object(i.d)("Not enough data for us to display", "ChannelAnalyticsNoData")))
                };
            r.d(t, !1, function() {
                return o
            }), r.d(t, "a", function() {
                return l
            })
        },
        bF3S: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r("/7QA"),
                i = r("tmT/"),
                s = r("Ue10"),
                o = function(e) {
                    return n.createElement(s.Ya, {
                        display: s.X.Flex,
                        justifyContent: s.Xa.End
                    }, n.createElement(s.tb, {
                        type: e.checkMarkType,
                        asset: s.ub.Check,
                        width: 20,
                        height: 20
                    }))
                };
            r.d(t, "a", function() {
                return c
            });
            var c = function(e) {
                var t = e.progress,
                    r = e.progressCap;
                if (e.isComplete) return n.createElement(o, {
                    checkMarkType: s.vb.Success
                });
                if (e.completedAt) return n.createElement(i.a, {
                    date: e.completedAt
                });
                if (1 === r && 1 === t) return n.createElement(o, {
                    checkMarkType: s.vb.Alt
                });
                var c = Math.floor(100 * t) / 100,
                    l = n.createElement(s.Ya, {
                        position: s.kb.Relative,
                        display: s.X.Flex,
                        alignItems: s.f.Center
                    }, n.createElement(s.W, {
                        className: t >= r ? "quest-requirement-card-progress__success" : "quest-requirement-card-progress",
                        color: t >= r ? void 0 : s.O.Alt2,
                        bold: !0,
                        fontSize: s.Ca.Size4,
                        type: s.Wb.Span
                    }, Object(a.g)(c, {
                        maximumFractionDigits: 2
                    })), n.createElement(s.Ya, {
                        margin: {
                            right: .5
                        }
                    }, n.createElement(s.W, {
                        fontSize: s.Ca.Size5,
                        color: s.O.Alt2,
                        type: s.Wb.Span
                    }, "/")), n.createElement(s.W, {
                        fontSize: s.Ca.Size5,
                        color: s.O.Alt2
                    }, Object(a.g)(r, {
                        maximumFractionDigits: 2
                    })));
                return t > 999 ? n.createElement(s.Zb, {
                    label: Object(a.f)(c),
                    direction: s.bc.Left
                }, l) : l
            }
        },
        d0JU: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return n
            }), r.d(t, "b", function() {
                return a
            }), r.d(t, "c", function() {
                return i
            });
            var n = "https://link.twitch.tv/ManagingRoles",
                a = "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/2",
                i = "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/2"
        },
        eqL5: function(e, t, r) {},
        gi7w: function(e, t, r) {
            "use strict";
            var n = r("Ue10"),
                a = {
                    1: n.ub.Roman1,
                    2: n.ub.Roman2,
                    3: n.ub.Roman3,
                    4: n.ub.Roman4,
                    5: n.ub.Roman5
                };

            function i(e) {
                return a[e]
            }
            var s = {
                1: "I",
                2: "II",
                3: "III",
                4: "IV",
                5: "V"
            };

            function o(e) {
                return s[e]
            }
            r.d(t, "a", function() {
                return i
            }), r.d(t, "b", function() {
                return o
            })
        },
        "kO/C": function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardStreamSummaryPage_StatCardGrid"
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
                    end: 138
                }
            };
            r.loc.source = {
                body: "query DashboardStreamSummaryPage_StatCardGrid($channelLogin: String) {\nuser(login: $channelLogin) {\nid\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        kpsn: function(e, t, r) {},
        "ll/k": function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (void 0 === t && (t = 0), t > e) {
                    var r = t;
                    t = e, e = r
                }
                return t + Math.floor(Math.random() * (e - t + 1))
            }

            function a(e) {
                return e[n(e.length - 1)]
            }

            function i(e, t) {
                for (var r = 0, n = []; r < e;) n.push(t(r)), r += 1;
                return n
            }
            r.d(t, "a", function() {
                return n
            }), r.d(t, "b", function() {
                return a
            }), r.d(t, "c", function() {
                return i
            })
        },
        "mZc/": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("Ue10"),
                s = (r("NCCa"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isHovered: !1
                        }, t.handleMouseEnter = function() {
                            t.setState({
                                isHovered: !0
                            })
                        }, t.handleMouseLeave = function() {
                            t.setState({
                                isHovered: !1
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            r = e.direction,
                            n = e.size;
                        return a.createElement("div", {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave
                        }, a.createElement(i.Fb, {
                            display: i.X.Flex,
                            margin: {
                                x: 1
                            },
                            position: i.kb.Relative
                        }, a.createElement(i.Fb, {
                            className: "hoverable-icon",
                            display: i.X.InlineFlex,
                            color: i.O.Alt2,
                            alignItems: i.f.Center,
                            justifyContent: i.Xa.Center
                        }, a.createElement(i.tb, {
                            asset: i.ub.NotificationInfo,
                            width: 16,
                            height: 16
                        })), a.createElement(i.u, {
                            show: this.state.isHovered,
                            direction: r,
                            size: n
                        }, a.createElement(i.Ya, {
                            padding: {
                                x: 1,
                                y: 1
                            }
                        }, t))))
                    }, t.defaultProps = {
                        direction: i.v.Bottom,
                        size: i.w.Small
                    }, t
                }(a.Component));
            r.d(t, "a", function() {
                return s
            })
        },
        qZmV: function(e, t, r) {},
        qe41: function(e, t, r) {
            "use strict";
            var n, a = r("mrSG"),
                i = r("q1tI"),
                s = r("5NYc"),
                o = r("bF3S"),
                c = r("Ue10");
            r("wd1L");
            ! function(e) {
                e.QUEST_REQUIREMENT_PROGRESS = "quest-requirement-progress", e.QUEST_SUBTEXT = "quest-subtext"
            }(n || (n = {}));
            var l = function(e) {
                var t = e.requirement,
                    r = t.metric === s.a.AVERAGE_CCU;
                return i.createElement(c.Fb, {
                    position: c.kb.Relative,
                    display: c.X.Flex,
                    alignItems: c.f.Center,
                    padding: {
                        y: 2,
                        left: 2
                    },
                    borderBottom: !0
                }, i.createElement(c.Ya, a.__assign({
                    display: c.X.Flex,
                    flexGrow: 1,
                    alignItems: c.f.Center
                }, r ? {} : {
                    padding: {
                        right: 3
                    },
                    flexGrow: 1
                }), i.createElement(c.Ya, null, i.createElement(c.Ya, {
                    display: c.X.Flex,
                    alignItems: c.f.Center
                }, i.createElement(c.W, {
                    bold: !0,
                    fontSize: c.Ca.Size5
                }, e.requirementInstructionString[t.metric]), r && i.createElement(c.Ya, {
                    display: c.X.Flex,
                    padding: {
                        left: .5,
                        right: 3
                    }
                }, i.createElement(c.Zb, {
                    label: e.ccuTooltipLabel,
                    direction: c.bc.Top,
                    width: 230
                }, i.createElement(c.tb, {
                    asset: c.ub.NotificationInfo,
                    width: 16,
                    height: 16,
                    type: c.vb.Alt2
                })))), e.subtext && !e.isComplete && i.createElement(c.W, {
                    color: c.O.Alt2,
                    "data-test-selector": n.QUEST_SUBTEXT
                }, e.subtext))), i.createElement(c.Ya, {
                    display: c.X.Flex,
                    justifyContent: c.Xa.End,
                    padding: {
                        right: 2
                    },
                    flexShrink: 0
                }, i.createElement(o.a, {
                    "data-test-selector": n.QUEST_REQUIREMENT_PROGRESS,
                    progress: t.progress,
                    progressCap: t.progress_cap,
                    isComplete: e.isComplete
                })))
            };
            r.d(t, !1, function() {
                return n
            }), r.d(t, "a", function() {
                return l
            })
        },
        qnLe: function(e, t, r) {},
        sBDM: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r("Ue10");
            r("qnLe");

            function i(e) {
                return n.createElement(a.Fb, {
                    className: "insight-panel-btn",
                    background: e.background || a.r.Alt,
                    display: a.X.Flex,
                    flexGrow: 1,
                    flexWrap: a.Ba.NoWrap,
                    borderTop: e.borderTop
                }, n.createElement(a.z, {
                    disabled: e.disabled,
                    type: a.F.Text,
                    linkTo: e.linkTo,
                    onClick: e.onClick,
                    targetBlank: e.targetBlank,
                    fullWidth: !0
                }, n.createElement(a.W, {
                    color: e.color
                }, e.message)))
            }
            r.d(t, "a", function() {
                return i
            })
        },
        "tmT/": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r("/7QA"),
                i = r("Ue10"),
                s = function(e) {
                    var t = Object(a.d)("Completed on {completedAt, date, short}", {
                            completedAt: e.date
                        }, "AchievementCard"),
                        r = Object(a.c)(e.date, "short");
                    return n.createElement(i.W, {
                        fontSize: i.Ca.Size5,
                        color: i.O.Alt2,
                        title: t
                    }, r)
                };
            r.d(t, "a", function() {
                return s
            })
        },
        vYsf: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return i
            });
            var n = r("mrSG"),
                a = r("b6Yk");

            function i(e) {
                return n.__awaiter(this, void 0, Promise, function() {
                    var t, r;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, a.a.get("/v5/channels/" + e + "/quests")];
                            case 1:
                                if (t = n.sent(), r = t.body, 200 !== t.status || !r) throw new Error("failed to fetch quests");
                                return [2, r.quests]
                        }
                    })
                })
            }
        },
        wQAB: function(e, t, r) {},
        wd1L: function(e, t, r) {},
        xMok: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("4p7I"),
                s = r("/7QA"),
                o = r("S3iq"),
                c = r("tmT/"),
                l = r("Ue10"),
                u = function(e) {
                    return 0 === e.achievement.progress ? a.createElement("span", null) : e.achievement.completedAt ? a.createElement(l.Ya, {
                        display: l.X.InlineFlex,
                        alignItems: l.f.Center
                    }, a.createElement(c.a, {
                        date: e.achievement.completedAt
                    })) : a.createElement(l.Fb, {
                        className: "ach-card__pill-wrapper",
                        fontSize: l.Ca.Size5
                    }, a.createElement(l.hb, {
                        label: Object(s.f)(e.achievement.progressRatio, "percent")
                    }))
                },
                m = r("TSYQ"),
                d = r("MjdR"),
                p = r("gq0V"),
                h = r("6XEL"),
                f = {
                    src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                    alt: "VoHiYo"
                },
                b = function(e) {
                    var t = Object(p.b)(),
                        r = m({
                            "ach-card": !0,
                            "ach-card--expanded": !t,
                            "ach-card-vip--expanded-vip": t,
                            "ach-card-vip--completed": !t && Boolean(e.achievement.completedAt),
                            "ach-card--completed": !t && Boolean(e.achievement.completedAt),
                            "ach-card--recent": e.achievement.wasRecentlyCompleted
                        }),
                        i = t ? {
                            fullWidth: !0,
                            padding: 1
                        } : {
                            elevation: 4
                        },
                        s = t && {
                            display: l.X.Flex,
                            flexGrow: 1,
                            margin: {
                                y: 2
                            },
                            zIndex: l.jc.Above,
                            borderRadius: l.x.Large,
                            fullWidth: !0,
                            fullHeight: !0
                        },
                        o = t ? {
                            display: l.X.Flex,
                            flexWrap: l.Ba.NoWrap,
                            alignItems: l.f.Center,
                            flexGrow: 1,
                            padding: 1,
                            background: l.r.Alt,
                            borderRadius: l.x.Large
                        } : {
                            display: l.X.Flex,
                            flexWrap: l.Ba.NoWrap,
                            alignItems: l.f.Center,
                            flexGrow: 1,
                            padding: 1,
                            background: l.r.Alt2,
                            border: !0
                        };
                    return a.createElement(l.Fb, n.__assign({
                        className: r,
                        position: l.kb.Relative
                    }, s), a.createElement(l.Fb, n.__assign({
                        className: "ach-card__inner"
                    }, i, {
                        refDelegate: e.refDelegate
                    }), a.createElement(d.a, {
                        achievement: e.achievement
                    }, t ? void 0 : a.createElement(g, {
                        achievement: e.achievement
                    })), a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, a.createElement(l.A, {
                        ariaLabel: "Close",
                        icon: l.ub.Close,
                        linkTo: h.b.channelAchievements(e.achievement.channelLogin)
                    })), a.createElement(l.Ya, {
                        display: l.X.Flex,
                        flexGrow: 1,
                        position: l.kb.Relative,
                        padding: {
                            top: 1
                        }
                    }, a.createElement(l.Fb, n.__assign({}, o), a.createElement(l.q, n.__assign({}, f, {
                        size: 30
                    })), a.createElement(l.Fb, {
                        color: l.O.Alt,
                        margin: {
                            left: .5
                        },
                        padding: {
                            left: 1
                        }
                    }, a.createElement("p", null, e.achievement.longDescription))))))
                },
                g = function(e) {
                    return 0 === e.achievement.progress ? a.createElement("span", null) : e.achievement.completedAt ? a.createElement(c.a, {
                        date: e.achievement.completedAt
                    }) : a.createElement(l.Fb, {
                        className: "ach-card__pill-wrapper",
                        fontSize: l.Ca.Size5
                    }, a.createElement(l.hb, {
                        label: Object(s.f)(e.achievement.progressRatio, "percent")
                    }))
                },
                v = r("bF3S"),
                y = r("FuXV"),
                S = r("eAwD"),
                E = {
                    "data-test-selector": "recently-completed-achievements-list"
                },
                w = {
                    "data-test-selector": "not-completed-achievements-list"
                },
                j = {
                    "data-test-selector": "past-completed-achievements-list"
                },
                _ = function(e) {
                    var t = Object(p.b)() ? {
                        y: 4
                    } : {
                        x: 4,
                        y: 4
                    };
                    return a.createElement(l.Ya, {
                        padding: t,
                        margin: {
                            bottom: 2
                        }
                    }, e.isLoading ? A() : a.createElement(C, {
                        achievements: e.achievements
                    }))
                },
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            didCelebrate: !1
                        }, t.timeoutID = 0, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.timeoutID = setTimeout(function() {
                            e.setState({
                                didCelebrate: !0
                            })
                        }, 5e3)
                    }, t.prototype.componentWillUnmount = function() {
                        clearTimeout(this.timeoutID)
                    }, t.prototype.render = function() {
                        var e = this;
                        return a.createElement("div", {
                            className: "ach-page"
                        }, Boolean(this.props.achievements.topRecentlyCompleted.length) && a.createElement(l.Ya, n.__assign({
                            margin: {
                                bottom: 3
                            }
                        }, E), a.createElement(l.Ya, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(l.W, {
                            type: l.Wb.H3,
                            fontSize: l.Ca.Size4,
                            bold: !0
                        }, Object(s.d)("Recently Completed", "AchievementsList"))), this.props.achievements.topRecentlyCompleted.map(function(t) {
                            return a.createElement(O, {
                                achievement: t,
                                key: t.id
                            }, !e.state.didCelebrate && a.createElement(y.a, {
                                confettiCount: 30
                            }))
                        })), Boolean(this.props.achievements.notCompleted.length) && a.createElement("div", n.__assign({}, w), a.createElement(l.Ya, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(l.W, {
                            type: l.Wb.H3,
                            fontSize: l.Ca.Size4,
                            bold: !0
                        }, Object(s.d)("In Progress", "AchievementsList"))), this.props.achievements.notCompleted.map(function(e) {
                            return a.createElement(O, {
                                achievement: e,
                                key: e.id
                            })
                        })), Boolean(this.props.achievements.pastCompleted.length) && a.createElement(l.Ya, n.__assign({
                            margin: {
                                top: 3
                            }
                        }, j), a.createElement(l.Ya, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(l.W, {
                            type: l.Wb.H3,
                            fontSize: l.Ca.Size4,
                            bold: !0
                        }, Object(s.d)("Completed", "AchievementsList"))), this.props.achievements.pastCompleted.map(function(e) {
                            return a.createElement(O, {
                                achievement: e,
                                key: e.id
                            })
                        })))
                    }, t
                }(a.Component),
                O = function(e) {
                    var t = Object(p.b)();
                    return a.createElement(i.a, {
                        path: h.b.achievement(e.achievement),
                        exact: !0
                    }, function(r) {
                        var i = r.match;
                        if (Boolean(i)) return a.createElement(b, {
                            achievement: e.achievement,
                            refDelegate: S.a
                        });
                        var s = t && {
                            margin: {
                                bottom: 1
                            },
                            borderRadius: l.x.Large,
                            background: l.r.Base,
                            overflow: l.db.Hidden
                        };
                        return a.createElement(l.Fb, n.__assign({
                            elevation: 1
                        }, s), a.createElement(o.a, {
                            achievement: e.achievement,
                            layoutClassName: "ach-card--in-list"
                        }, a.createElement("div", null, e.children, k(e.achievement))))
                    })
                },
                k = function(e) {
                    return Object(p.b)() ? a.createElement(v.a, {
                        progress: e.progress,
                        progressCap: e.progressCap,
                        completedAt: e.completedAt
                    }) : a.createElement(u, {
                        achievement: e
                    })
                },
                A = function() {
                    var e = Array(3).fill("").map(function(e, t) {
                        return a.createElement(l.Ya, {
                            margin: {
                                bottom: 1
                            },
                            key: t
                        }, a.createElement(l.jb, {
                            height: 70
                        }))
                    });
                    return [a.createElement(l.Ya, n.__assign({
                        margin: {
                            bottom: 3
                        }
                    }, E, {
                        key: "recently-completed"
                    }), e), a.createElement("div", n.__assign({}, w, {
                        key: "not-completed"
                    }), e), a.createElement(l.Ya, n.__assign({
                        margin: {
                            top: 3
                        }
                    }, j, {
                        key: "past-completed"
                    }), e)]
                };
            r.d(t, !1, function() {
                return E
            }), r.d(t, !1, function() {
                return w
            }), r.d(t, !1, function() {
                return j
            }), r.d(t, "a", function() {
                return _
            }), r.d(t, "b", function() {
                return k
            })
        },
        xcDG: function(e, t, r) {},
        "y/W1": function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            }), r.d(t, "b", function() {
                return c
            }), r.d(t, "c", function() {
                return l
            });
            var n = r("q1tI"),
                a = r("/7QA"),
                i = r("5NYc"),
                s = r("Ue10"),
                o = function(e) {
                    var t = e.find(function(e) {
                        return e.metric === i.a.HOUR_COUNT
                    });
                    if (void 0 !== t) {
                        var r = t && t.progress;
                        return Object(a.d)("in <x:strong>{duration} hours</x:strong> streamed", {
                            "x:strong": function(e) {
                                return n.createElement(s.W, {
                                    bold: !0,
                                    type: s.Wb.Span
                                }, e)
                            },
                            duration: Object(a.f)(Math.floor(100 * r) / 100)
                        }, "QuestRequirements")
                    }
                },
                c = function(e, t) {
                    return Object(a.d)("{numCompleted, number} of {numTotal, number} requirements", {
                        numCompleted: e,
                        numTotal: t
                    }, "AchievementsQuests")
                },
                l = function(e) {
                    return e.sort(function(e, t) {
                        return e.time_based && !t.time_based ? 1 : !e.time_based && t.time_based ? -1 : 0
                    })
                }
        }
    }
]);