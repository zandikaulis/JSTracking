(window.webpackJsonp = window.webpackJsonp || []).push([
    [139], {
        "0eTn": function(e, t, n) {},
        "16Gl": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "a", function() {
                return o
            });
            var r = n("kduP");

            function a(e, t) {
                return Object(r.d)(e) + "/edit/" + t
            }

            function i(e, t) {
                return Object(r.d)(e) + "/highlighter/" + t
            }

            function s(e, t) {
                return Object(r.d)(e) + "/schedule/" + t
            }

            function o(e, t) {
                return Object(r.d)(e) + "/appeal/" + t
            }
        },
        "17YR": function(e, t, n) {
            "use strict";

            function r(e) {
                return e.map(function(e) {
                    return e.join(",")
                }).join("\n")
            }

            function a(e) {
                for (var t = [], n = e[0].length, r = function(n) {
                        t.push(e.map(function(e) {
                            return e[n]
                        }))
                    }, a = 0; a < n; a++) r(a);
                return t
            }

            function i(e, t) {
                if ("function" == typeof window.navigator.msSaveBlob) {
                    var n = new Blob([t], {
                        type: "text/csv;charset=utf-8;"
                    });
                    return window.navigator.msSaveBlob(n, e)
                }
                var r = document.createElement("a"),
                    a = encodeURIComponent(t);
                void 0 === r.download ? r.href = "data:attachment/csv;charset=utf-8," + a : (r.href = "data:text/csv;charset=utf-8," + a, r.download = e), r.target = "_blank", r.setAttribute("style", "visibility: hidden"), document.body.appendChild(r), r.click(), document.body.removeChild(r)
            }
            n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            })
        },
        "1AsC": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("q1tI"),
                a = n("gq0V"),
                i = n("mZc/"),
                s = n("Ue10"),
                o = function(e) {
                    var t = e.children,
                        n = e.tooltip,
                        i = e.title;
                    return r.createElement(s.Xa, {
                        margin: {
                            bottom: 4
                        }
                    }, r.createElement(l, {
                        tooltip: n
                    }, i), r.createElement(s.yb, {
                        borderRadius: Object(a.b)() ? s.x.Large : void 0,
                        elevation: 1,
                        background: s.r.Base
                    }, t))
                },
                l = function(e) {
                    var t = e.children,
                        n = e.tooltip;
                    return r.createElement(s.Xa, {
                        alignItems: s.f.Center,
                        display: s.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(s.W, {
                        type: s.Ob.H5,
                        bold: !0
                    }, t), n && r.createElement(i.a, {
                        direction: s.v.TopRight
                    }, n))
                }
        },
        "2rRr": function(e, t, n) {
            "use strict";
            var r, a = n("/MKj"),
                i = n("fvjX"),
                s = n("S1Za"),
                o = n("AKMF"),
                l = n("mrSG"),
                c = n("q1tI"),
                u = n("/7QA"),
                m = n("hyVY"),
                d = n("f00E"),
                p = n("GnwI"),
                h = n("Ue10");
            n("FkHV");
            ! function(e) {
                e.Overlay = "embed-overlay", e.ViewCount = "embed-overlay__view-count", e.Wrapper = "embed-overlay__wrapper"
            }(r || (r = {}));
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
                                n = e.createdAt,
                                a = e.lengthSeconds,
                                i = e.thumbnailURL,
                                s = e.type,
                                o = e.viewCount,
                                l = a && a > 0 ? Object(m.b)(a) : "";
                            return c.createElement("a", {
                                href: "#",
                                onClick: t.handleClick,
                                "data-test-selector": r.Overlay
                            }, c.createElement(h.o, {
                                ratio: h.p.Aspect16x9
                            }, c.createElement(h.Xa, null, c.createElement(h.Pa, {
                                fullWidth: !0,
                                fullHeight: !0,
                                position: h.fb.Absolute
                            }, c.createElement("img", {
                                src: i
                            })), c.createElement(h.Xa, {
                                className: "embed-card__overlay",
                                position: h.fb.Absolute,
                                attachLeft: !0,
                                attachTop: !0,
                                fullWidth: !0,
                                fullHeight: !0
                            }, c.createElement(h.Xa, {
                                className: "embed-card__play",
                                display: h.X.Flex,
                                justifyContent: h.Wa.Center,
                                position: h.fb.Absolute,
                                attachLeft: !0,
                                attachTop: !0,
                                fullWidth: !0,
                                fullHeight: !0
                            }, c.createElement(h.ob, {
                                asset: h.pb.Play,
                                width: 50,
                                height: 50
                            })), c.createElement(h.Xa, {
                                position: h.fb.Absolute,
                                padding: 1,
                                attachBottom: !0,
                                attachLeft: !0
                            }, n && c.createElement(h.W, null, Object(u.c)(new Date(n), "medium")), c.createElement(h.Xa, null, s === f.Stream && c.createElement(h.Xa, {
                                display: h.X.Inline,
                                margin: {
                                    right: .5
                                }
                            }, c.createElement(h.K, {
                                status: h.M.Live
                            })), void 0 !== o && c.createElement("span", null, t.getFormattedViewCount(o, s)))), c.createElement(h.Xa, {
                                position: h.fb.Absolute,
                                padding: 1,
                                attachBottom: !0,
                                attachRight: !0
                            }, l && c.createElement(h.Xa, null, c.createElement(h.W, null, l)))), c.createElement(h.yb, {
                                position: h.fb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                margin: 1,
                                fontSize: h.Ca.Size5
                            }, s === f.Stream && c.createElement(h.cb, {
                                label: Object(u.d)("Live", "EmbedOverlayPill"),
                                type: h.db.Live
                            }), s === f.Video && c.createElement(h.cb, {
                                label: Object(u.d)("Video", "EmbedOverlayPill"),
                                type: h.db.Overlay
                            }), s === f.Clip && c.createElement(h.cb, {
                                label: Object(u.d)("Clip", "EmbedOverlayPill"),
                                type: h.db.Overlay
                            })))))
                        }, t.handleClick = function(e) {
                            e.preventDefault(), t.setState({
                                showOverlay: !1
                            }), t.props.type === f.Clip && t.props.reportPlayerInstanceStarted(t.state.playerRefID), t.props.onClick && t.props.onClick()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
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
                        return this.state.showOverlay ? this.getOverlayComponent() : c.createElement(h.o, {
                            ratio: h.p.Aspect16x9
                        }, c.createElement("div", {
                            "data-test-selector": r.Wrapper
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
                }(c.Component),
                v = Object(p.b)("EmbedOverlay")(b);
            var g = Object(a.connect)(function(e) {
                return {
                    activeVideoPlayerRefID: Object(o.a)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    reportPlayerInstanceStarted: s.b
                }, e)
            })(v);
            n.d(t, "a", function() {
                return g
            }), n.d(t, !1, function() {
                return r
            }), n.d(t, !1, function() {
                return "embed-overlay"
            }), n.d(t, !1, function() {
                return "embed-overlay-wrapper"
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, !1, function() {
                return b
            }), n.d(t, !1, function() {
                return v
            })
        },
        "4eyL": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                i = n("q1tI"),
                s = n("vYsf"),
                o = n("u2gS"),
                l = n("dG1e"),
                c = n("/7QA");

            function u(e, t) {
                var n = function() {
                        if (r) return r;
                        return r = {
                            broadcast_n_hours_30_days: {
                                title: Object(c.d)("New day, new stream", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Stream for {numOfHours, number} hours in the last 30 days", {
                                        numOfHours: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Stream on a regular schedule to help draw in more viewers. Find the balance that works for you.", "AchievementLongDescription"),
                                levelGoals: [4, 8, 25, 40]
                            },
                            n_followers: {
                                title: Object(c.d)("What is thy bidding?", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Reach {numOfFollowers, number} followers", {
                                        numOfFollowers: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Followers can opt in to be notified when you stream or share an update.", "AchievementLongDescription"),
                                levelGoals: [2, 10, 50, 200]
                            },
                            n_broadcast_days_30_days: {
                                title: Object(c.d)("Like clockwork", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Stream for {numOfDays, number} unique days in the last 30 days", {
                                        numOfDays: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Stream on different days to reach different viewers. Unique days are based on GMT.", "AchievementLongDescription"),
                                levelGoals: [2, 7, 12, 25]
                            },
                            n_concurrents_30_days: {
                                title: Object(c.d)("Who watches the watchers?", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Reach {numOfViewers, number} average viewers in the last 30 days", {
                                        numOfViewers: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Check average viewers on your stats page. If you notice a spike, try to replicate that magic!", "AchievementLongDescription"),
                                levelGoals: [3, 10, 15, 75]
                            },
                            first_stream: {
                                title: Object(c.d)("It's happening", "AchievementTitle"),
                                description: function() {
                                    return Object(c.d)("Start your first stream", "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Start your first stream on Twitch to complete this achievement.", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            single_dashboard_visit: {
                                title: Object(c.d)("Know your stuff", "AchievementTitle"),
                                description: function() {
                                    return Object(c.d)("Explore your dashboard", "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Your dashboard is the best place to update your stream settings, monitor stats, and more.", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            single_broadcast_title: {
                                title: Object(c.d)("Name of the game", "AchievementTitle"),
                                description: function() {
                                    return Object(c.d)("Update your stream title", "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Add a compelling title to draw viewers to your stream.", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            single_select_game_community: {
                                title: Object(c.d)("We belong", "AchievementTitle"),
                                description: function() {
                                    return Object(c.d)("Update your Game/Category", "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Tag your stream with a Game/Category and Community to help viewers find your channel.", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            n_hours_lifetime: {
                                title: Object(c.d)("The empire business", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Stream for {numOfHours, number} hours total", {
                                        numOfHours: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("The more you stream, the more often viewers can tune in. Take a break whenever you need to.", "AchievementLongDescription"),
                                levelGoals: [250, 500, 1e3, 2e3]
                            },
                            n_same_week_stream_start_time: {
                                title: Object(c.d)("Same time next week", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Start a stream on the same day of week and time for {numOfWeeks, number} weeks in a row", {
                                        numOfWeeks: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("When you stream on the same day and time each week, viewers know when to tune in.", "AchievementLongDescription"),
                                levelGoals: [2, 4, 8, 16]
                            },
                            n_minute_watched_lifetime: {
                                title: Object(c.d)("Kind of a big deal", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Reach {numOfHours, number} hours watched total on your channel", {
                                        numOfHours: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("The more you stream, the more often viewers can tune in. If you're partner and unlock this achievement, you'll have a chance to get swag!", "AchievementLongDescription"),
                                levelGoals: [25e4, 5e5, 1e6, 1e7]
                            },
                            n_viewers_lifetime: {
                                title: Object(c.d)("People know me", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Have {numOfViewers, number} viewers at the same time", {
                                        numOfViewers: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Keep your viewers around by welcoming them to your channel and responding to their comments.", "AchievementLongDescription"),
                                levelGoals: [50, 100, 250, 1e3]
                            },
                            n_unique_chatter_broadcast: {
                                title: Object(c.d)("Talk to me", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Get {numOfPeople, number} people chatting at the same time", {
                                        numOfPeople: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Chat with your viewers to engage them. Engaged viewers are more likely to return.", "AchievementLongDescription"),
                                levelGoals: [25, 50, 100, 200]
                            },
                            n_raid_consecutive_broadcast: {
                                title: Object(c.d)("Raiding party", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Raid {numOfStreams, number} times with 2 or more raiders", {
                                        numOfStreams: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)('Type "/raid (channel)" in chat to bring your viewers to another awesome streamer.', "AchievementLongDescription"),
                                levelGoals: [100]
                            },
                            n_days_since_first_stream: {
                                title: Object(c.d)("Happy Twitchiversary", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Reach your {numOfYears, number}-year streaming anniversary on Twitch", {
                                        numOfYears: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("We really wanted to send you some cake, but this Achievement will have to do. See you again next year!", "AchievementLongDescription"),
                                levelGoals: [1, 2, 3, 4]
                            },
                            n_autohost: {
                                title: Object(c.d)("Mr. Roboto", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Add {numOfChannels, number} channels to your auto host list", {
                                        numOfChannels: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Add to your auto host list from channel settings to highlight another channel whenever you're offline.", "AchievementLongDescription"),
                                levelGoals: [5]
                            },
                            single_twitchcon2017: {
                                title: Object(c.d)("TwitchCon get", "AchievementTitle"),
                                description: function() {
                                    return Object(c.d)("Purchase a TwitchCon ticket", "AchievementDescription")
                                },
                                longDescription: Object(c.d)("You provided your Twitch ID when you purchased your TwitchCon ticket. If you missed this year, hopefully you can make it next year!", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            single_chat: {
                                title: Object(c.d)("Message in a bottle", "AchievementTitle"),
                                description: function() {
                                    return Object(c.d)("Send a chat message in your own channel", "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Talking while streaming is great, but also try chatting and emoting in your own channel.", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            n_days_no_viewers: {
                                title: Object(c.d)("Hang in there", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Had < {numOfViewers, number} viewers for two streams and kept at it", {
                                        numOfViewers: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("Streaming isn't easy and it takes time to attract viewers. Try inviting your friends to get started.", "AchievementLongDescription"),
                                levelGoals: [3]
                            },
                            n_max_concurrents_m_streams: {
                                title: Object(c.d)("The horde descends", "AchievementTitle"),
                                description: function(e) {
                                    return Object(c.d)("Reach at least {numOfViewers, number} viewers over five streams.", {
                                        numOfViewers: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(c.d)("They'll tell two friends. And they'll tell two friends. And they'll tell two friends. See a pattern?", "AchievementLongDescription"),
                                levelGoals: [9999]
                            }
                        }
                    }()[e],
                    a = (t || 1) - 1;
                return n ? {
                    title: n.title,
                    description: n.description(n.levelGoals[a]),
                    longDescription: n.longDescription,
                    longDescriptionAlt: n.longDescriptionAlt
                } : {
                    title: e,
                    description: e,
                    longDescription: e
                }
            }

            function m(e, t) {
                var n = new Map;
                return e.achievements.forEach(function(e) {
                    var r = function(e, t) {
                        var n = u(e.key, e.level);
                        return new o.a({
                            channelName: t.name,
                            id: e._id,
                            completedAt: e.completed_at ? new Date(e.completed_at) : null,
                            lastCompletedAt: e.last_completed_at ? new Date(e.last_completed_at) : null,
                            key: e.key,
                            progress: e.progress,
                            progressCap: e.progress_cap,
                            level: e.level,
                            title: n.title,
                            description: n.description,
                            longDescription: n.longDescription,
                            image: {
                                scale1x: e.image,
                                scale2x: e.image_2x,
                                scale3x: e.image_3x,
                                small: e.image_sm
                            }
                        })
                    }(e, t);
                    n.set(r.id, r)
                }), {
                    quests: [],
                    achievements: new o.b(Array.from(n.values()))
                }
            }
            var d, p = n("5NYc");

            function h(e) {
                return function() {
                    var e;
                    if (d) return d;
                    return (e = {})[p.b.IT_BEGINS] = {
                        title: Object(c.d)("It Begins", "StreamSummaryQuestPanel"),
                        getInstructions: function() {
                            return Object(c.d)("Find out more about streaming on Twitch.", "AchievementsItBegins")
                        },
                        learnMoreURL: "https://www.twitch.tv/creatorcamp?tt_medium=owned_onsite_twitch&tt_content=creator_camp_creators_all_all_Dashboard&ttid=cd402988e1",
                        hasTimedCompletionWindow: !1,
                        ccuTooltipLabel: "",
                        position: 0,
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[p.a.HAS_FIRST_STREAM] = Object(c.d)("Start your first stream", "AchievementsItBegins"), e[p.a.DASHBOARD_VISITED] = Object(c.d)("Explore your dashboard", "AchievementsItBegins"), e[p.a.STREAM_TITLE_UPDATED] = Object(c.d)("Update your stream title", "AchievementsItBegins"), e[p.a.GAME_COMMUNITY_TITLE_UPDATED] = Object(c.d)("Update your Game/Category", "AchievementsItBegins"), e
                        }
                    }, e[p.b.PATH_TO_AFFILIATE] = {
                        title: Object(c.d)("Path to Affiliate", "AchievementsPathToAffiliate"),
                        getInstructions: function() {
                            return Object(c.d)("To receive invitation to the Affiliate Program, you must simultaneously meet all four requirements over a 30-day period.", "AchievementsPathToAffiliate")
                        },
                        hasTimedCompletionWindow: !0,
                        ccuTooltipLabel: Object(c.d)("Concurrent viewership including Hosts and Raids", "AchievementsPathToAffiliate"),
                        learnMoreURL: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles",
                        position: 2,
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[p.a.HOUR_COUNT] = Object(c.d)("Stream for 8 hours", "AchievementsPathToAffiliate"), e[p.a.UNIQUE_DAYS] = Object(c.d)("Stream on 7 different days", "AchievementsPathToAffiliate"), e[p.a.AVERAGE_CCU] = Object(c.d)("Average of 3 viewers", "AchievementsPathToAffiliate"), e[p.a.FOLLOW_COUNT] = Object(c.d)("Reach 50 followers", "AchievementsPathToAffiliate"), e
                        }
                    }, e[p.b.PATH_TO_PARTNER] = {
                        title: Object(c.d)("Path to Partner", "StreamSummaryQuestPanel"),
                        getInstructions: function() {
                            return Object(c.d)("To be eligible to apply to the Partner Program, you must meet all three requirements within the same 30-day period. Please note that applying does not guarantee Partnership.", "AchievementsPathToPartner")
                        },
                        learnMoreURL: "https://www.twitch.tv/p/partners",
                        hasTimedCompletionWindow: !0,
                        ccuTooltipLabel: Object(c.d)("Concurrent viewership excluding Hosts, Raids, Premieres, and Reruns", "AchievementsPathToPartner"),
                        position: 3,
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[p.a.HOUR_COUNT] = Object(c.d)("Stream for 25 hours", "AchievementsPathToPartner"), e[p.a.UNIQUE_DAYS] = Object(c.d)("Stream on 12 different days", "AchievementsPathToPartner"), e[p.a.AVERAGE_CCU] = Object(c.d)("Average of 75 viewers", "AchievementsPathToPartner"), e
                        }
                    }, e[p.b.VIP_BADGE] = {
                        title: Object(c.d)("Build a community", "VIPBadge"),
                        getInstructions: function() {
                            return Object(c.d)("It's all about loyalty.", "VIPBadge")
                        },
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[p.a.UNIQUE_CHATTERS] = Object(c.d)("Reach 5 unique chatters in a stream", "VIPBadge"), e[p.a.FOLLOW_COUNT] = Object(c.d)("Reach 50 followers", "VIPBadge"), e
                        },
                        learnMoreURL: "https://help.twitch.tv/customer/en/portal/articles/659115-twitch-chat-badges-guide",
                        hasTimedCompletionWindow: !1,
                        position: 1,
                        ccuTooltipLabel: ""
                    }, d = e
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

            function f(e, t) {
                var n = e.map(function(e) {
                    var n = function(e, t) {
                        var n = h(e.key);
                        return new o.e({
                            key: e.key,
                            completedAt: e.completed_at ? new Date(e.completed_at) : null,
                            isComplete: e.is_complete,
                            title: n.title,
                            image: e.image,
                            ccuTooltipLabel: n.ccuTooltipLabel,
                            getInstructions: n.getInstructions,
                            learnMoreURL: n.learnMoreURL,
                            hasTimedCompletionWindow: n.hasTimedCompletionWindow,
                            position: n.position,
                            role: t,
                            requirements: e.progress,
                            getQuestReqStrings: n.getQuestReqStrings,
                            hasAffiliateInviteError: e.is_invite_error
                        })
                    }(e, t);
                    return n.completedRequirementsCount = n.requirements.reduce(function(e, t) {
                        return t.progress >= t.progress_cap ? e + 1 : e
                    }, 0), n.totalRequirements = n.requirements.length, n.finalize(), n
                });
                return o.e.sort(n)
            }
            var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        quests: [],
                        achievements: new o.b,
                        isLoading: !0,
                        channelName: void 0
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.query()
                }, t.prototype.componentDidUpdate = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return (!e.channel && this.props.channel || (e.channel && e.channel.id) !== (this.props.channel && this.props.channel.id)) && this.query(), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return this.props.children(this.state)
                }, t.prototype.query = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r;
                        return a.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return (e = this.props.channel) ? (this.setState({
                                        isLoading: !0
                                    }), [4, function(e) {
                                        return a.__awaiter(this, void 0, void 0, function() {
                                            var t, n, r;
                                            return a.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return t = "/v5/channels/" + e.id + "/achievement_progressions", [4, Object(l.a)({
                                                            path: t
                                                        })];
                                                    case 1:
                                                        return (n = i.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            quests: [],
                                                            achievements: new o.b
                                                        }] : (r = m(n.body, e), [2, a.__assign({
                                                            isError: !1
                                                        }, r)])
                                                }
                                            })
                                        })
                                    }(e)]) : [2];
                                case 1:
                                    t = i.sent(), i.label = 2;
                                case 2:
                                    return i.trys.push([2, 4, , 5]), [4, Object(s.a)(e.id)];
                                case 3:
                                    return r = i.sent(), n = f(r, e.role), [3, 5];
                                case 4:
                                    return i.sent(), n = [], [3, 5];
                                case 5:
                                    return this.setState({
                                        quests: n,
                                        achievements: t.achievements,
                                        isLoading: !1
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(i.Component);
            n.d(t, "a", function() {
                return b
            })
        },
        "6E8S": function(e, t, n) {
            "use strict";
            var r = n("1AsC");
            n.d(t, "a", function() {
                return r.a
            })
        },
        "9+Lo": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("NAv5"),
                i = n("cr+I"),
                s = n("q1tI"),
                o = n("/7QA"),
                l = n("5NYc"),
                c = n("gq0V"),
                u = n("Ue10"),
                m = function(e) {
                    var t = new Date,
                        n = Object(a.subDays)(t, 29),
                        m = Object(c.b)() ? {
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
                    return s.createElement(u.yb, r.__assign({}, m), s.createElement(u.Xa, {
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
                                type: u.Ob.Span
                            }, e)
                        },
                        startDate: n,
                        endDate: t
                    }, "QuestTimeFrameBar"))), e.questKey !== l.b.PATH_TO_PARTNER && s.createElement(u.Xa, {
                        padding: {
                            right: 1
                        }
                    }, s.createElement(u.U, {
                        to: {
                            pathname: "/" + e.channelLogin + "/dashboard/channel-analytics",
                            search: "?" + i.stringify({
                                start: Object(a.format)(n, "YYYY-MM-DD"),
                                end: Object(a.format)(t, "YYYY-MM-DD")
                            })
                        }
                    }, Object(o.d)("View 30-day stats", "QuestTimeFrameBar"))))
                };
            n.d(t, "a", function() {
                return m
            })
        },
        Ac3d: function(e, t, n) {},
        D5nk: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("oJmH"),
                s = n("/MKj"),
                o = n("/7QA"),
                l = n("yR8l"),
                c = n("V+GM"),
                u = n("NvVO"),
                m = n("2xye"),
                d = n("kRBY"),
                p = n("GnwI"),
                h = n("m9vr"),
                f = n("IFXb"),
                b = n("0us7"),
                v = n("VxtK"),
                g = n("S3iq"),
                y = n("xMok"),
                S = n("gq0V"),
                E = n("6E8S"),
                w = n("sBDM"),
                _ = n("2psh"),
                j = n("6XEL"),
                O = n("Ue10"),
                C = function(e) {
                    if (e.query.isLoading || !e.streamSummaryCursor.current) return a.createElement(O.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(O.eb, {
                        height: 400
                    }));
                    var t = e.streamSummaryCursor.current.interval,
                        n = e.query.achievements.nCompletedInRange(3, t);
                    if (e.streamSummaryCursor.isLast && n.length < 3) {
                        var r = e.query.achievements.topNInProgress(3 - n.length);
                        n.push.apply(n, r)
                    }
                    return n.length ? a.createElement(E.a, {
                        title: Object(o.d)("What is my achievements progress?", "StreamSummaryAchievementsPanel")
                    }, a.createElement(O.yb, {
                        borderRadius: O.x.Large,
                        elevation: 1,
                        background: O.r.Base
                    }, a.createElement(O.yb, {
                        padding: Object(S.b)() ? {
                            top: 1
                        } : 2,
                        borderBottom: !0
                    }, n.map(function(e) {
                        return a.createElement(g.a, {
                            key: e.id,
                            achievement: e
                        }, Object(y.b)(e))
                    })), a.createElement(w.a, {
                        message: Object(o.d)("View achievements", "StreamSummaryAchievementsPanel"),
                        onClick: _.e,
                        linkTo: j.b.channelAchievements(e.streamSummaryCursor.current.channel.name),
                        targetBlank: !0
                    }))) : a.createElement("span", null)
                },
                k = (n("eqL5"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(O.Xa, {
                            className: "sm-mw__col",
                            display: O.X.Flex,
                            flexGrow: 1,
                            flexWrap: O.Ba.NoWrap,
                            flexDirection: O.Aa.Column,
                            padding: {
                                left: 1,
                                right: 1
                            }
                        }, this.props.children)
                    }, t
                }(a.Component)),
                A = (n("kpsn"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(O.yb, {
                            className: "sm-mw",
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: O.X.Flex,
                            flexDirection: O.Aa.Column,
                            flexWrap: O.Ba.NoWrap,
                            alignItems: O.f.Stretch,
                            breakpointMedium: {
                                flexDirection: O.Aa.Row
                            }
                        }, this.props.children)
                    }, t
                }(a.Component)),
                x = n("u2gS"),
                T = (n("UK3/"), {
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
                    n = e.currentStreamSummary;
                if (!t.isLoading && !t.streamSummaries.length && t.channel && !n) {
                    var i = a.createElement(O.z, r.__assign({
                        linkTo: "/" + t.channel.name + "/dashboard/live"
                    }, T), Object(o.d)("Go to Live Dashboard", "StreamSummaryNoAvailableStreamSummariesNotice"));
                    return t.channel.role === x.d.None && (i = a.createElement(O.z, r.__assign({
                        linkTo: "/" + t.channel.name + "/dashboard/broadcast"
                    }, D), Object(o.d)("Go to Streaming Tools", "StreamSummaryNoAvailableStreamSummariesNotice"))), a.createElement(O.Xa, {
                        position: O.fb.Absolute,
                        fullWidth: !0,
                        margin: {
                            top: 5
                        },
                        zIndex: O.bc.Above
                    }, a.createElement(O.Ub, {
                        childWidth: O.Vb.Medium,
                        center: !0
                    }, a.createElement("div", {
                        className: "sm-welcome-modal"
                    }, a.createElement(O.i, {
                        type: O.n.SlideInBottom,
                        duration: O.k.Medium,
                        enabled: !0,
                        timing: O.m.EaseInOut
                    }, a.createElement(O.yb, {
                        border: !0,
                        padding: 2,
                        background: O.r.Base,
                        elevation: 3
                    }, a.createElement(O.Xa, {
                        display: O.X.Flex,
                        alignItems: O.f.Center,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(O.q, r.__assign({}, R, {
                        size: 30
                    })), a.createElement(O.Xa, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(O.W, {
                        type: O.Ob.H4,
                        bold: !0
                    }, Object(o.d)("Welcome to Stream Summary", "StreamSummaryNoAvailableStreamSummariesNotice")))), a.createElement(O.Xb, null, a.createElement(O.W, {
                        fontSize: O.Ca.Size5
                    }, Object(o.d)("See a summary of your past streams with stats, clips, achievements, and more. Stream to get started!", "StreamSummaryNoAvailableStreamSummariesNotice"))), a.createElement(O.Xa, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(O.Xa, {
                        margin: {
                            right: 1
                        },
                        display: O.X.InlineBlock
                    }, i), a.createElement(O.z, {
                        linkTo: P,
                        type: O.F.Text
                    }, Object(o.d)("Learn More", "StreamSummaryNoAvailableStreamSummariesNotice"))))))))
                }
                return a.createElement("div", null)
            }
            var L = n("5NYc"),
                N = (n("wQAB"), n("y/W1")),
                V = n("qe41"),
                M = n("9+Lo"),
                q = (n("Dm0L"), function(e, t) {
                    return Object(S.b)() ? a.createElement(a.Fragment, null, Array.from({
                        length: e
                    }).map(function(e, t) {
                        return a.createElement(O.yb, {
                            key: "completeReqBar-" + t,
                            className: "quest-progress-bars quest-progress-bars__complete",
                            borderRadius: O.x.Large,
                            margin: {
                                left: .5
                            }
                        })
                    }), Array.from({
                        length: t - e
                    }).map(function(e, t) {
                        return a.createElement(O.yb, {
                            key: "incompleteReqBar-" + t,
                            className: "quest-progress-bars quest-progress-bars__incomplete",
                            borderRadius: O.x.Large,
                            margin: {
                                left: .5
                            }
                        })
                    })) : a.createElement(O.W, {
                        color: O.O.Alt2,
                        fontSize: O.Ca.Size5
                    }, function(e, t) {
                        return Object(o.d)("{numCompleted, number} of {numTotal, number} requirements met", {
                            numCompleted: e,
                            numTotal: t
                        }, "StreamSummaryQuest")
                    }(e, t))
                }),
                X = function(e) {
                    var t = Object(S.b)(),
                        n = e.quest,
                        i = !1;
                    if (n && !n.isComplete) {
                        var s = Object(N.c)(n.requirements),
                            l = n.getQuestReqStrings(),
                            c = t && {
                                alignItems: O.f.Center,
                                display: O.X.Flex
                            },
                            u = t ? {
                                display: O.X.Flex,
                                padding: {
                                    left: 1
                                }
                            } : {
                                padding: 2
                            },
                            m = t && {
                                borderRadius: O.x.Large,
                                overflow: O.ab.Hidden
                            };
                        return a.createElement(O.yb, r.__assign({
                            elevation: 1,
                            background: O.r.Base,
                            margin: {
                                bottom: 2
                            }
                        }, m), a.createElement(O.yb, r.__assign({
                            display: O.X.Flex,
                            alignItems: O.f.Center
                        }, u, {
                            borderBottom: !0
                        }), t && a.createElement(O.yb, {
                            borderRadius: O.x.Large,
                            className: "quest-header__badge-wrap",
                            margin: {
                                y: 1,
                                right: 1
                            },
                            overflow: O.ab.Hidden
                        }, a.createElement(O.S, {
                            src: n.image,
                            alt: Object(o.d)("quest image", "StreamSummaryQuestPanel")
                        })), a.createElement(O.Xa, r.__assign({
                            flexGrow: 1
                        }, c), a.createElement(O.W, {
                            type: O.Ob.H4,
                            bold: !0
                        }, n.title)), a.createElement(O.yb, {
                            display: O.X.Flex,
                            flexShrink: 0,
                            padding: {
                                right: 1
                            },
                            color: O.O.Alt2
                        }, q(n.completedRequirementsCount, n.totalRequirements))), s.map(function(t) {
                            return a.createElement(O.Xa, {
                                key: t.metric
                            }, function(t) {
                                if (!n.isComplete && t.time_based && !i) return i = !0, a.createElement(M.a, {
                                    channelLogin: e.channelName,
                                    questKey: n.key
                                })
                            }(t), a.createElement(V.a, {
                                requirement: t,
                                requirementInstructionString: l,
                                isComplete: n.isComplete,
                                subtext: t.metric === L.a.AVERAGE_CCU ? Object(N.a)(n.requirements) : void 0,
                                ccuTooltipLabel: n.ccuTooltipLabel
                            }))
                        }))
                    }
                    return e.quest ? a.createElement("span", null) : a.createElement(O.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(O.eb, {
                        height: 400
                    }))
                },
                W = n("NAv5"),
                z = n("gi7w"),
                B = n("ybsN"),
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleTrackClick = function() {
                            Object(B.f)(B.a, t.props.streamSummary)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(B.g)(B.a, this.props.streamSummary)
                    }, Object.defineProperty(t.prototype, "bannerTitle", {
                        get: function() {
                            var e = this.props.achievement,
                                t = e.title,
                                n = e.level,
                                r = a.createElement("span", null, Object(z.b)(n));
                            return n ? Object(o.d)("Achievement Unlocked! {title} {romanNumeralLevel}", {
                                title: t,
                                romanNumeralLevel: r
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
                            url: j.b.achievement(this.props.achievement),
                            purpleScale: !0,
                            onSpotlightDismiss: this.props.onSpotlightDismiss,
                            onSpotlightClick: this.handleTrackClick
                        })
                    }, t
                }(a.PureComponent),
                U = n("Tc9I"),
                G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleTrackClick = function() {
                            Object(B.f)(B.c, t.props.streamSummary)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(B.g)(B.c, this.props.streamSummary)
                    }, t.prototype.render = function() {
                        var e = Object(U.b)(this.props.quest.key),
                            t = a.createElement(Q, {
                                title: e.title
                            }),
                            n = e.bannerTitle(t);
                        return a.createElement(me, {
                            title: n,
                            subtitle: e.subtitle,
                            url: j.b.channelAchievements(this.props.streamSummary.channel.name),
                            onSpotlightDismiss: this.props.onSpotlightDismiss,
                            onSpotlightClick: this.handleTrackClick
                        })
                    }, t
                }(a.PureComponent),
                Q = function(e) {
                    var t = e.title;
                    return a.createElement(O.W, {
                        type: O.Ob.Span,
                        color: O.O.OverlayAlt
                    }, t)
                },
                H = n("ll/k"),
                Y = ["0s", "0.2s", "0.4s", "0.6s"],
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
                            Object(B.f)(B.b, t.props.streamSummary)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(B.g)(B.b, this.props.streamSummary)
                    }, t.prototype.render = function() {
                        return a.createElement(se, {
                            title: Object(o.d)("Top Clip of the Stream", "StreamSummarySpotlightClip"),
                            subtitle: this.subtitleMessage,
                            url: this.props.topClip.url,
                            onSpotlightDismiss: this.props.onSpotlightDismiss,
                            onSpotlightClick: this.handleTrackClick,
                            flourish: Object(H.c)(8, function(e) {
                                return a.createElement($, r.__assign({}, Object(H.b)(Z), {
                                    key: e,
                                    style: function(e) {
                                        return {
                                            left: "" + K[e],
                                            top: Object(H.a)(-10, 58) + "%",
                                            width: Object(H.a)(3, 7) + "rem",
                                            animationDelay: "" + Object(H.b)(Y)
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
                    style: r.__assign({}, e.style)
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
                        var n = e.call(this, t) || this;
                        return n.handleSpotlightDismiss = function() {
                            n.setState({
                                show: !1
                            }, function() {
                                var e = o.m.get(ee, {});
                                e[n.streamSummaryKey] = "dismissed", o.m.set(ee, e)
                            })
                        }, n.state = {
                            show: !0
                        }, n
                    }
                    return r.__extends(t, e), Object.defineProperty(t.prototype, "streamSummaryKey", {
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
                            n = this.completedQuest,
                            r = this.completedAchievement;
                        return n ? a.createElement(G, {
                            quest: n,
                            onSpotlightDismiss: this.handleSpotlightDismiss,
                            streamSummary: this.props.streamSummary
                        }) : r ? a.createElement(F, {
                            achievement: r,
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
                ne = {
                    "data-test-selector": "title"
                },
                re = {
                    "data-test-selector": "subtitle"
                },
                ae = {
                    "data-test-selector": "cta-link"
                },
                ie = {
                    "data-test-selector": "dismiss"
                },
                se = (n("Qtpw"), function(e) {
                    return a.createElement(O.Xa, {
                        className: "sm-sb-flourish-emotes",
                        position: O.fb.Relative
                    }, a.createElement(O.i, {
                        type: O.n.BounceIn,
                        duration: O.k.Medium,
                        enabled: !0,
                        timing: O.m.EaseInOut
                    }, a.createElement(oe, r.__assign({}, e)), a.createElement(O.Xa, {
                        className: "sm-sb-flourish-emotes__dismiss",
                        position: O.fb.Absolute,
                        zIndex: O.bc.Above,
                        attachTop: !0,
                        attachRight: !0
                    }, a.createElement(O.A, r.__assign({}, ie, {
                        ariaLabel: Object(U.a)().spotlightDismiss,
                        size: O.B.Large,
                        icon: O.pb.Close,
                        onClick: e.onSpotlightDismiss,
                        overlay: !0
                    })))))
                }),
                oe = function(e) {
                    return a.createElement("a", r.__assign({}, ae, {
                        href: e.url,
                        className: "sm-sb-flourish-emotes__link",
                        target: "_blank",
                        onClick: e.onSpotlightClick
                    }), a.createElement(O.yb, {
                        className: "sm-sb-flourish-emotes__content",
                        position: O.fb.Relative,
                        zIndex: O.bc.Default,
                        color: O.O.Overlay,
                        textAlign: O.Kb.Center,
                        margin: {
                            bottom: 2
                        },
                        padding: 2,
                        borderRadius: O.x.Small
                    }, a.createElement(O.yb, {
                        className: "sm-sb-flourish-emotes__emotes-layer",
                        position: O.fb.Absolute,
                        overflow: O.ab.Hidden,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        attachLeft: !0,
                        borderRadius: O.x.Small
                    }, e.flourish), a.createElement(O.yb, {
                        className: "sm-sb-flourish-emotes__text",
                        position: O.fb.Relative,
                        zIndex: O.bc.Above,
                        padding: {
                            x: .5,
                            y: 0
                        },
                        borderRadius: O.x.Medium
                    }, a.createElement(O.W, r.__assign({}, ne, {
                        fontSize: O.Ca.Size4,
                        bold: !0,
                        ellipsis: !0
                    }), e.title), a.createElement(O.W, r.__assign({}, re, {
                        fontSize: O.Ca.Size5,
                        color: O.O.OverlayAlt,
                        ellipsis: !0
                    }), e.subtitle))))
                },
                le = n("TSYQ"),
                ce = n("FuXV"),
                ue = (n("xcDG"), ["rgba(168, 136, 230, 1)", "rgba(158, 128, 221, 1)", "rgba(136, 109, 200, 1)", "rgba(129, 104, 193, 1)"]),
                me = function(e) {
                    return a.createElement(O.Xa, {
                        className: "sm-sb-flourish-confetti",
                        position: O.fb.Relative
                    }, a.createElement(O.i, {
                        type: O.n.BounceIn,
                        duration: O.k.Medium,
                        enabled: !0,
                        timing: O.m.EaseInOut
                    }, a.createElement(O.yb, {
                        className: "sm-sb-flourish-confetti__wrap",
                        position: O.fb.Relative,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        border: !0,
                        borderRadius: O.x.Small
                    }, a.createElement(de, r.__assign({}, e)), a.createElement(O.Xa, {
                        className: "sm-sb-flourish-confetti__dismiss",
                        position: O.fb.Absolute,
                        zIndex: O.bc.Above,
                        attachTop: !0,
                        attachRight: !0
                    }, a.createElement(O.A, r.__assign({}, ie, {
                        ariaLabel: Object(U.a)().spotlightDismiss,
                        type: O.C.Default,
                        size: O.B.Large,
                        icon: O.pb.Close,
                        onClick: e.onSpotlightDismiss,
                        overlay: e.purpleScale
                    }))), a.createElement(ce.a, {
                        confettiCount: 40,
                        infinite: !0,
                        colors: e.purpleScale ? ue : void 0
                    }))))
                },
                de = function(e) {
                    var t = le({
                        "sm-sb-flourish-confetti__content": !0,
                        "sm-sb-flourish-confetti__content--purple-scale": e.purpleScale
                    });
                    return a.createElement("a", r.__assign({}, ae, {
                        className: "sm-sb-flourish-confetti__link",
                        href: e.url,
                        target: "_blank",
                        onClick: e.onSpotlightClick
                    }), a.createElement(O.yb, {
                        className: t,
                        position: O.fb.Relative,
                        zIndex: O.bc.Default,
                        textAlign: O.Kb.Center,
                        padding: 2,
                        fullWidth: !0,
                        borderRadius: O.x.Small
                    }, a.createElement(O.W, r.__assign({}, ne, {
                        type: O.Ob.Span,
                        fontSize: O.Ca.Size4,
                        color: e.purpleScale ? O.O.Overlay : O.O.Base,
                        bold: !0,
                        ellipsis: !0
                    }), e.title), a.createElement(O.W, r.__assign({}, re, {
                        fontSize: O.Ca.Size5,
                        color: e.purpleScale ? O.O.OverlayAlt : O.O.Alt2,
                        ellipsis: !0
                    }), e.subtitle)))
                },
                pe = n("N0BP"),
                he = {
                    "data-test-selector": "subtitle"
                },
                fe = {
                    "data-test-selector": "value"
                },
                be = {
                    "data-test-selector": "increase"
                },
                ve = function(e) {
                    return a.createElement(O.Xa, r.__assign({
                        display: O.X.Flex,
                        flexDirection: O.Aa.Column
                    }, Object(pe.a)(e)), a.createElement(O.yb, {
                        display: O.X.Flex,
                        flexGrow: 1,
                        flexDirection: O.Aa.Column,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        padding: 2,
                        background: O.r.Base
                    }, a.createElement(O.yb, {
                        display: O.X.Flex,
                        flexDirection: O.Aa.Column
                    }, a.createElement(O.W, {
                        fontSize: O.Ca.Size4,
                        bold: !0
                    }, e.title), a.createElement(O.W, r.__assign({
                        fontSize: O.Ca.Size5,
                        color: O.O.Alt2
                    }, he), e.subtitle || a.createElement("br", null))), a.createElement(O.yb, {
                        display: O.X.Flex,
                        flexGrow: 1,
                        alignItems: O.f.End,
                        padding: {
                            top: 2
                        }
                    }, a.createElement(O.W, r.__assign({
                        type: O.Ob.Span,
                        fontSize: O.Ca.Size2,
                        bold: !0,
                        color: O.O.Link
                    }, fe), e.value, e.isIncrease && a.createElement(ge, null)))))
                };

            function ge() {
                return a.createElement(O.ob, r.__assign({
                    asset: O.pb.GlyphArrUp,
                    type: O.qb.Success
                }, be))
            }

            function ye(e) {
                var t = Math.floor(e.currentValue),
                    n = e.previousValue && Math.floor(e.previousValue),
                    i = "number" == typeof n && t - n;
                return a.createElement(ve, r.__assign({
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
            var Se = n("CFgy"),
                Ee = {
                    "data-test-selector": "stream-summary-stream-duration"
                };

            function we(e) {
                var t = e.currentStreamSummary,
                    n = e.previousStreamSummary;
                return a.createElement(ve, r.__assign({
                    title: Object(o.d)("Stream Duration", "StreamSummaryDuration"),
                    subtitle: function(e, t) {
                        if (!t) return "";
                        if (Object(Se.f)(e.interval, t.interval)) return Object(o.d)("same as last stream", "StreamSummaryDuration");
                        return Object(o.d)("{shortDuration} last stream", {
                            shortDuration: Object(Se.b)(t.interval)
                        }, "StreamSummaryDuration")
                    }(t, n),
                    value: Object(Se.b)(t.interval),
                    isIncrease: !1
                }, Ee))
            }
            var _e = n("kO/C"),
                je = {
                    "data-test-selector": "stream-summary-avg-viewer-stat-card"
                },
                Oe = {
                    "data-test-selector": "stream-summary-max-viewer-stat-card"
                },
                Ce = {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(O.Ub, {
                            childWidth: O.Vb.Medium,
                            gutterSize: O.Wb.Small,
                            placeholderItems: 3
                        }, this.cards())
                    }, t.prototype.cards = function() {
                        var e = this.props,
                            t = e.streamSummary,
                            n = e.previousStreamSummary,
                            i = e.data.user;
                        if (!t) return Array(8).fill("").map(function(e, t) {
                            return a.createElement(O.Xa, {
                                key: "placeholder-" + t,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(O.eb, {
                                height: 131
                            }))
                        });
                        var s = [a.createElement(we, {
                            key: "stream-duration",
                            currentStreamSummary: t,
                            previousStreamSummary: n
                        }), a.createElement(ye, r.__assign({
                            key: "avg-viewers",
                            title: Object(o.d)("Average Viewers", "StreamSummaryStatCard"),
                            currentValue: t.avgViewerCount,
                            previousValue: n && n.avgViewerCount
                        }, je)), a.createElement(ye, r.__assign({
                            key: "max-viewers",
                            title: Object(o.d)("Max Viewers", "StreamSummaryStatCard"),
                            currentValue: t.maxViewerCount,
                            previousValue: n && n.maxViewerCount
                        }, Oe)), a.createElement(ye, r.__assign({
                            key: "unique-viewers",
                            title: Object(o.d)("Unique Viewers", "StreamSummaryStatCard"),
                            currentValue: t.uniqueViewers,
                            previousValue: n && n.uniqueViewers
                        }, xe)), a.createElement(ye, r.__assign({
                            key: "unique-chatters",
                            title: Object(o.d)("Unique Chatters", "StreamSummaryStatCard"),
                            currentValue: t.uniqueChatters,
                            previousValue: n && n.uniqueChatters
                        }, ke)), a.createElement(ye, r.__assign({
                            key: "live-views",
                            title: Object(o.d)("Live Views", "StreamSummaryStatCard"),
                            currentValue: t.totalViewers,
                            previousValue: n && n.totalViewers
                        }, Te)), a.createElement(ye, r.__assign({
                            key: "new-followers",
                            title: Object(o.d)("New Followers", "StreamSummaryStatCard"),
                            currentValue: t.followersChange,
                            previousValue: n && n.followersChange
                        }, Ce))];
                        return s = i && i.roles && (i.roles.isAffiliate || i.roles.isPartner) ? s.concat([a.createElement(ye, r.__assign({
                            key: "new-subscriptions",
                            title: Object(o.d)("New Subscriptions", "StreamSummaryStatCard"),
                            currentValue: t.subscriptionsNew,
                            previousValue: n && n.subscriptionsNew
                        }, De))]) : s.concat([a.createElement(ye, r.__assign({
                            key: "clips-created",
                            title: Object(o.d)("Clips", "StreamSummaryStatCard"),
                            currentValue: t.clipCreatesTotal,
                            previousValue: n && n.clipCreatesTotal
                        }, Ae))])
                    }, t
                }(a.Component),
                Pe = Object(l.a)(_e, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelName
                            }
                        }
                    }
                })(Re),
                Ie = n("KYAw"),
                Le = n("WyAD"),
                Ne = n("OGSR"),
                Ve = O.R.Purple12,
                Me = function(e) {
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
                                                fontColor: Ve,
                                                fontSize: 10,
                                                padding: 5
                                            },
                                            gridLines: {
                                                color: O.R.White,
                                                lineWidth: 1,
                                                drawBorder: !1,
                                                display: !1
                                            }
                                        }],
                                        yAxes: [{
                                            ticks: {
                                                min: 0,
                                                maxTicksLimit: 6,
                                                fontColor: Ve,
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
                                        titleFontColor: O.R.HintedGrey15,
                                        bodyFontColor: O.R.HintedGrey11,
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
                        }, t.handleDatasetClick = function(e, n) {
                            if (n && 0 !== n.length) {
                                var r = n[0];
                                t.props.onDatasetClick(r._index)
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(Ne.a, {
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
                                hoverBackgroundColor: O.R.Purple10,
                                hoverBorderColor: O.R.Purple8,
                                hoverBorderWidth: 1
                            }]
                        }
                    }, t.prototype.getBarGradient = function(e) {
                        var t = e.getContext("2d").createLinearGradient(0, 0, 0, 190);
                        return t.addColorStop(0, O.R.Purple15), t.addColorStop(1, O.R.Purple11), t
                    }, t
                }(a.Component),
                qe = n("17YR"),
                Xe = 5;
            var We = {
                get: function() {
                    return Object(o.d)("Error", "StreamSummaryExportTimeseriesStats")
                }
            };

            function ze(e, t) {
                return e.isError ? We : e.data.dates.reduce(function(n, r, a) {
                    return n.set(r.getTime(), String(t(e.data)[a] || ""))
                }, new Map)
            }
            var Be = n("cr+I"),
                Fe = 5;

            function Ue(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, a, i, s, o, l, c, u, m;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = Be.stringify(Object(Se.i)(t)), [4, Object(j.c)({
                                    path: "/v5/channels/" + e + "/analytics/chat_time_series?" + n
                                })];
                            case 1:
                                if (a = r.sent(), i = {
                                        messages: [],
                                        participants: [],
                                        dates: [],
                                        interpolationChunkMinutes: Fe
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.chat_activity; s < o.length; s++) l = o[s], c = l.messages, u = l.participants, m = l.timestamp, i.messages.push(c), i.participants.push(u), i.dates.push(new Date(m));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Ge(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, a, i, s, o, l, c, u, m, d;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = Be.stringify(Object(Se.i)(t)), [4, Object(j.c)({
                                    path: "/v5/channels/" + e + "/analytics/clips_time_series?" + n
                                })];
                            case 1:
                                if (a = r.sent(), i = {
                                        creates: [],
                                        plays: [],
                                        otherPlays: [],
                                        twitchPlays: [],
                                        redditPlays: [],
                                        facebookPlays: [],
                                        twitterPlays: [],
                                        dates: [],
                                        interpolationChunkMinutes: Fe
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.clips; s < o.length; s++) l = o[s], c = l.creates, u = l.plays, m = l.timestamp, d = l.plays_breakdown, i.creates.push(c), i.plays.push(u), i.otherPlays.push(d.other || 0), i.twitchPlays.push(d.twitch || 0), i.redditPlays.push(d.reddit || 0), i.facebookPlays.push(d.facebook || 0), i.twitterPlays.push(d.twitter || 0), i.dates.push(new Date(m));
                                return [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Qe(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, a, i, s, o, l, c, u;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = Be.stringify(Object(Se.i)(t)), [4, Object(j.c)({
                                    path: "/v5/channels/" + e + "/analytics/commercials_time_series?" + n
                                })];
                            case 1:
                                if (a = r.sent(), i = {
                                        values: [],
                                        dates: [],
                                        interpolationChunkMinutes: Fe
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.commercial; s < o.length; s++) l = o[s], c = l.length, u = l.timestamp, i.values.push(c), i.dates.push(new Date(u));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function He(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, a, i, s, o, l, c, u;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = Be.stringify(Object(Se.i)(t)), [4, Object(j.c)({
                                    path: "/v5/channels/" + e + "/analytics/stats_time_series?" + n
                                })];
                            case 1:
                                if (a = r.sent(), i = {
                                        values: [],
                                        dates: [],
                                        interpolationChunkMinutes: Fe
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.concurrent_viewers; s < o.length; s++) l = o[s], c = l.count, u = l.timestamp, i.values.push(c), i.dates.push(new Date(u));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Ye(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, a, i, s, o, l, c, u;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = Be.stringify(Object(Se.i)(t)), [4, Object(j.c)({
                                    path: "/v5/channels/" + e + "/analytics/followers_time_series?" + n
                                })];
                            case 1:
                                if (a = r.sent(), i = {
                                        values: [],
                                        dates: [],
                                        interpolationChunkMinutes: Fe
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.followers_change; s < o.length; s++) l = o[s], c = l.count, u = l.timestamp, i.values.push(c), i.dates.push(new Date(u));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Ke(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, a, i, s, o, l, c, u;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = Be.stringify(Object(Se.i)(t)), [4, Object(j.c)({
                                    path: "/v5/channels/" + e + "/analytics/subscription_purchase?" + n
                                })];
                            case 1:
                                if (a = r.sent(), i = {
                                        values: [],
                                        dates: [],
                                        interpolationChunkMinutes: Fe
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.subscription_purchase_activities; s < o.length; s++) l = o[s], c = l.count, u = l.timestamp, i.values.push(c), i.dates.push(new Date(u));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Ze(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, a, i, s, o, l, c, u;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = Be.stringify(Object(Se.i)(t)), [4, Object(j.c)({
                                    path: "/v5/channels/" + e + "/analytics/view_summary_time_series?" + n
                                })];
                            case 1:
                                if (a = r.sent(), i = {
                                        dates: [],
                                        totalViews: [],
                                        interpolationChunkMinutes: Fe
                                    }, a.isError()) return [2, {
                                    isError: !0,
                                    data: i
                                }];
                                for (s = 0, o = a.body.view_summary; s < o.length; s++) l = o[s], c = l.total_views, u = l.timestamp, i.totalViews.push(c), i.dates.push(new Date(u));
                                return i.interpolationChunkMinutes = a.body.interpolation_chunk_minutes, [2, {
                                    isError: !1,
                                    data: i
                                }]
                        }
                    })
                })
            }

            function Je(e, t) {
                return r.__awaiter(this, void 0, Promise, function() {
                    var n, a, i, s, o, l, c, u;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, Promise.all([Ue(e, t), Ge(e, t), Qe(e, t), He(e, t), Ze(e, t), Ye(e, t), Ke(e, t)])];
                            case 1:
                                return n = r.sent(), a = n[0], i = n[1], s = n[2], o = n[3], l = n[4], c = n[5], u = n[6], [2, {
                                    chat: a,
                                    clips: i,
                                    commercials: s,
                                    viewers: o,
                                    liveViews: l,
                                    followers: c,
                                    subscriptions: u
                                }]
                        }
                    })
                })
            }
            n("Ac3d");
            var $e, et = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleExport = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, a;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            Object(_.a)(), e = this.props.streamSummary, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.fetchAllTimeseries(e.channel.id, e.interval)];
                                        case 2:
                                            return t = r.sent(), [3, 4];
                                        case 3:
                                            return n = r.sent(), o.p.logger.error(n, "Network error fetching timeseries data"), this.alert(Object(o.d)("The CSV export failed. Please try again in a few minutes.", "StreamSummaryTimeseriesExport")), [2];
                                        case 4:
                                            return function(e) {
                                                return Boolean(Object.keys(e).find(function(t) {
                                                    return e[t].isError
                                                }))
                                            }(t) && this.alert(Object(o.d)("Part of the CSV export failed. Please try again in a few minutes.", "StreamSummaryTimeseriesExport")), a = function(e) {
                                                for (var t = e.interval, n = e.timeseriesResponse, r = [], a = Object(W.addMinutes)(t.start, (Xe - t.start.getMinutes() % Xe) % Xe); a.getTime() <= t.end.getTime();) r.push(a), a = Object(W.addMinutes)(a, Xe);
                                                var i = [
                                                    [Object(o.d)("Timestamp", "StreamSummaryExportTimeseriesStats")].concat(r.map(function(e) {
                                                        return Object(o.c)(e, {
                                                            hour: "numeric",
                                                            minute: "numeric"
                                                        })
                                                    }))
                                                ];
                                                return new Map([
                                                    [Object(o.d)("Viewers", "StreamSummaryExportTimeseriesStats"), ze(n.viewers, function(e) {
                                                        return e.values
                                                    })],
                                                    [Object(o.d)("Live Views", "StreamSummaryExportTimeseriesStats"), ze(n.liveViews, function(e) {
                                                        return e.totalViews
                                                    })],
                                                    [Object(o.d)("New Followers", "StreamSummaryExportTimeseriesStats"), ze(n.followers, function(e) {
                                                        return e.values
                                                    })],
                                                    [Object(o.d)("Chatters", "StreamSummaryExportTimeseriesStats"), ze(n.chat, function(e) {
                                                        return e.participants
                                                    })],
                                                    [Object(o.d)("Chat Messages", "StreamSummaryExportTimeseriesStats"), ze(n.chat, function(e) {
                                                        return e.messages
                                                    })],
                                                    [Object(o.d)("Ad Breaks", "StreamSummaryExportTimeseriesStats"), ze(n.commercials, function(e) {
                                                        return e.values
                                                    })],
                                                    [Object(o.d)("Subscriptions", "StreamSummaryExportTimeseriesStats"), ze(n.subscriptions, function(e) {
                                                        return e.values
                                                    })],
                                                    [Object(o.d)("Clips Created", "StreamSummaryExportTimeseriesStats"), ze(n.clips, function(e) {
                                                        return e.creates
                                                    })],
                                                    [Object(o.d)("All Clip Views", "StreamSummaryExportTimeseriesStats"), ze(n.clips, function(e) {
                                                        return e.plays
                                                    })],
                                                    [Object(o.d)("Twitch Clip Views", "StreamSummaryExportTimeseriesStats"), ze(n.clips, function(e) {
                                                        return e.twitchPlays
                                                    })],
                                                    [Object(o.d)("Reddit Clip Views", "StreamSummaryExportTimeseriesStats"), ze(n.clips, function(e) {
                                                        return e.redditPlays
                                                    })],
                                                    [Object(o.d)("Facebook Clip Views", "StreamSummaryExportTimeseriesStats"), ze(n.clips, function(e) {
                                                        return e.facebookPlays
                                                    })],
                                                    [Object(o.d)("Twitter Clip Views", "StreamSummaryExportTimeseriesStats"), ze(n.clips, function(e) {
                                                        return e.twitterPlays
                                                    })],
                                                    [Object(o.d)("Other Clip Views", "StreamSummaryExportTimeseriesStats"), ze(n.clips, function(e) {
                                                        return e.otherPlays
                                                    })]
                                                ]).forEach(function(e, t) {
                                                    i.push([t].concat(r.map(function(t) {
                                                        return e.get(t.getTime()) || ""
                                                    })))
                                                }), {
                                                    fileName: Object(o.d)("Stream Session from {start, date} to {end, date}.csv", {
                                                        start: t.start,
                                                        end: t.end
                                                    }, "StreamSummaryExportTimeseriesStats"),
                                                    rows: Object(qe.c)(i)
                                                }
                                            }({
                                                interval: e.interval,
                                                timeseriesResponse: t
                                            }), this.downloadFile(a.fileName, Object(qe.b)(a.rows)), [2]
                                    }
                                })
                            })
                        }, n.downloadFile = t.downloadFile || qe.a, n.alert = t.alert || window.alert, n.fetchAllTimeseries = t.fetchAllTimeseries || Je, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(O.yb, {
                            className: "timeseries-panel__btn",
                            display: O.X.Flex,
                            flexGrow: 1,
                            flexWrap: O.Ba.NoWrap
                        }, a.createElement(O.z, {
                            type: O.F.Text,
                            onClick: this.handleExport,
                            fullWidth: !0
                        }, a.createElement(O.W, {
                            color: O.O.OverlayAlt
                        }, Object(o.d)("Export data", "StreamSummaryTimeseriesPanel"))))
                    }, t
                }(a.Component),
                tt = (n("SwG+"), function(e) {
                    return a.createElement(O.Qa, {
                        display: O.X.Block,
                        borderRadius: O.x.Medium,
                        fontSize: O.Ca.Size6,
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
            n("ZbLS");
            ! function(e) {
                e.AverageViewers = "avg_viewers", e.LiveViews = "live_views", e.NewFollowers = "new_followers", e.NewSubScribers = "new_subscribers", e.Chatters = "chatters", e.ChatMessages = "chat_messages", e.AdBreaks = "ad_breaks", e.ClipsCreated = "clips_created", e.ClipViews = "clip_views"
            }($e || ($e = {}));
            var nt = {
                    "data-test-selector": "subtitle"
                },
                rt = {
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
                                var n = t.props.streamSummary.videoRecordedAt,
                                    r = t.props.streamSummary.videoId,
                                    a = (t.state.statData.dates[e].getTime() - n.getTime()) / 1e3,
                                    i = Object(Ie.b)(r.substring(1), {
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackChartView(), this.fetchCurrentStatData()
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        e.streamSummary !== this.props.streamSummary && this.fetchCurrentStatData(), e.streamSummary === this.props.streamSummary && t.currentStatIndex === this.state.currentStatIndex || this.trackChartView()
                    }, t.prototype.render = function() {
                        return this.props.streamSummary ? a.createElement(O.yb, {
                            className: "timeseries-panel",
                            background: O.r.Accent,
                            borderRadius: O.x.Small,
                            margin: {
                                bottom: 4
                            },
                            elevation: 1
                        }, a.createElement(O.Xa, {
                            padding: 2
                        }, a.createElement(O.yb, {
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: .5
                            },
                            display: O.X.Flex,
                            color: O.O.Overlay,
                            justifyContent: O.Wa.Between,
                            alignItems: O.f.Center
                        }, a.createElement("div", null, a.createElement("div", {
                            className: "timeseries-panel__select-wrap"
                        }, a.createElement(tt, {
                            onChange: this.handleStatChange
                        }, this.props.timeseriesStats.map(function(e, t) {
                            return a.createElement("option", {
                                key: t,
                                value: t
                            }, e.titleMessage())
                        })))), a.createElement("div", r.__assign({}, nt), Boolean(this.state.statData.values.length) && this.currentStat.subtitleMessage(this.props.streamSummary))), this.chartContent()), a.createElement(et, {
                            streamSummary: this.props.streamSummary
                        })) : a.createElement(O.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(O.eb, {
                            height: 378
                        }))
                    }, t.prototype.chartContent = function() {
                        return this.state.inFlightStatRequest ? a.createElement(O.yb, {
                            color: O.O.Overlay,
                            fullHeight: !0
                        }, a.createElement(O.Za, {
                            inheritColor: !0,
                            fillContent: !0
                        })) : this.state.didError ? a.createElement(O.W, r.__assign({
                            color: O.O.OverlayAlt,
                            fontSize: O.Ca.Size5
                        }, rt), Object(o.d)("Whoops. Something went wrong.", "StreamSummaryTimeseriesPanel")) : 0 === this.state.statData.values.length ? a.createElement(O.Xa, {
                            padding: {
                                y: 2
                            },
                            display: O.X.Flex,
                            flexDirection: O.Aa.Column,
                            alignItems: O.f.Center,
                            alignContent: O.e.Center,
                            justifyContent: O.Wa.Center,
                            fullHeight: !0
                        }, a.createElement(O.Xa, {
                            padding: {
                                bottom: .5
                            }
                        }, a.createElement(O.q, {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/90076/3.0",
                            alt: "StinkyCheese",
                            size: 50
                        })), a.createElement(O.W, {
                            color: O.O.OverlayAlt,
                            fontSize: O.Ca.Size5
                        }, Object(o.d)("Not enough data for us to display", "StreamSummaryTimeseriesPanel"))) : a.createElement(Me, {
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
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t, n, a;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.props.streamSummary ? (e = this.props.streamSummary.interval, t = this.currentStat.fetch(this.props.streamSummary.channel.id, e), this.setState({
                                            inFlightStatRequest: t
                                        }), [4, t]) : [2];
                                    case 1:
                                        return n = r.sent(), t !== this.state.inFlightStatRequest ? [2] : n.isError ? (this.setState({
                                            inFlightStatRequest: void 0,
                                            didError: !0
                                        }), [2]) : (a = function(e, t) {
                                            var n = {
                                                    dates: [],
                                                    values: []
                                                },
                                                r = e.dates[0];
                                            if (!r) return n;
                                            for (var a = e.interpolationChunkMinutes, i = Object(W.subMinutes)(r, a); i.getTime() >= t.start.getTime();) n.dates.push(i), n.values.push(0), i = Object(W.subMinutes)(i, a);
                                            n.dates.reverse();
                                            var s = 0;
                                            for (i = r; i.getTime() <= t.end.getTime();) {
                                                var o = e.dates[s];
                                                o && o.getTime() === i.getTime() ? (n.dates.push(e.dates[s]), n.values.push(e.values[s]), s++) : (n.dates.push(i), n.values.push(0)), i = Object(W.addMinutes)(i, a)
                                            }
                                            return n
                                        }(n.data, this.props.streamSummary.interval), this.setState({
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
                it = n("5zf8"),
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
                        return r.__awaiter(this, void 0, void 0, function() {
                            var n;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, Ze(e, t)];
                                    case 1:
                                        return [2, {
                                            isError: (n = r.sent()).isError,
                                            data: {
                                                values: n.data.totalViews,
                                                dates: n.data.dates,
                                                interpolationChunkMinutes: n.data.interpolationChunkMinutes
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
                    fetch: Ye,
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
                        return r.__awaiter(this, void 0, void 0, function() {
                            var n;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, Ue(e, t)];
                                    case 1:
                                        return [2, {
                                            isError: (n = r.sent()).isError,
                                            data: {
                                                values: n.data.participants,
                                                dates: n.data.dates,
                                                interpolationChunkMinutes: n.data.interpolationChunkMinutes
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
                        return r.__awaiter(this, void 0, void 0, function() {
                            var n;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, Ue(e, t)];
                                    case 1:
                                        return [2, {
                                            isError: (n = r.sent()).isError,
                                            data: {
                                                values: n.data.messages,
                                                dates: n.data.dates,
                                                interpolationChunkMinutes: n.data.interpolationChunkMinutes
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
                    fetch: Qe,
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
                        return r.__awaiter(this, void 0, void 0, function() {
                            var n;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, Ge(e, t)];
                                    case 1:
                                        return [2, {
                                            isError: (n = r.sent()).isError,
                                            data: {
                                                values: n.data.creates,
                                                dates: n.data.dates,
                                                interpolationChunkMinutes: n.data.interpolationChunkMinutes
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
                        return r.__awaiter(this, void 0, void 0, function() {
                            var n;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, Ge(e, t)];
                                    case 1:
                                        return [2, {
                                            isError: (n = r.sent()).isError,
                                            data: {
                                                values: n.data.plays,
                                                dates: n.data.dates,
                                                interpolationChunkMinutes: n.data.interpolationChunkMinutes
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
                ot = n("5e4V"),
                lt = n("dG1e"),
                ct = {
                    "data-test-selector": "summary-tip-message"
                },
                ut = {
                    "data-test-selector": "summary-learn-more-cta"
                },
                mt = "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                dt = "VoHiYo",
                pt = function(e) {
                    var t = e.tip;
                    return e.isLoading ? a.createElement(O.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(O.eb, {
                        height: 121
                    })) : a.createElement("div", null, a.createElement(E.a, {
                        title: Object(o.d)("What is my tip of the day?", "StreamSummaryTipsPanel")
                    }, a.createElement(O.yb, {
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        padding: 2,
                        background: O.r.Base
                    }, a.createElement(O.Xa, {
                        display: O.X.Flex,
                        alignItems: O.f.Center,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(O.q, {
                        src: mt,
                        alt: dt,
                        size: 30
                    }), a.createElement(O.Xa, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(O.W, r.__assign({
                        type: O.Ob.Span,
                        fontSize: O.Ca.Size5
                    }, ct), t.body), a.createElement(ht, {
                        url: t.url
                    }))))))
                },
                ht = function(e) {
                    var t = e.url;
                    return t ? a.createElement(O.W, r.__assign({
                        type: O.Ob.Span,
                        fontSize: O.Ca.Size5
                    }, ut), " ", a.createElement("a", {
                        target: "_blank",
                        href: t
                    }, Object(o.d)("Learn More", "StreamTipsLearnMoreCTA"))) : null
                },
                ft = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            tip: void 0
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.requestTip()
                    }, t.prototype.render = function() {
                        return this.state.tip ? a.createElement(pt, {
                            tip: this.state.tip,
                            isLoading: this.props.isLoading
                        }) : null
                    }, t.prototype.requestTip = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Object(lt.a)({
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
                bt = n("FXHi"),
                vt = function(e) {
                    var t = e.streamSummary,
                        n = e.topClips;
                    if (n.isLoading) return a.createElement(yt, null);
                    if (!n.isLoading && !n.clips.length) return null;
                    var r = Object(o.d)("View more clips", "StreamSummaryTopClipsPanelCTA");
                    return a.createElement(E.a, {
                        title: Object(o.d)("What were my top clips?", "StreamSummaryTopClipsPanel")
                    }, a.createElement(gt, {
                        clipsAttrs: n
                    }), t ? a.createElement(w.a, {
                        message: r,
                        linkTo: "/" + t.channel.name + "/manager/clips/channel",
                        onClick: _.f,
                        targetBlank: !0
                    }) : a.createElement("p", null, r))
                },
                gt = function(e) {
                    if (e.clipsAttrs.isLoading)
                        for (var t = [], n = 0; n < 5; n++) t.push(a.createElement(O.yb, {
                            padding: {
                                x: 2,
                                y: 1
                            },
                            key: n,
                            borderBottom: !0
                        }, a.createElement(O.eb, {
                            height: 50
                        })));
                    return a.createElement(O.yb, {
                        borderBottom: !0
                    }, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                        return a.createElement(bt.a, r.__assign({}, e, {
                            key: t,
                            onClick: _.d
                        }))
                    }))
                },
                yt = function() {
                    return a.createElement(O.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(O.eb, {
                        height: 448
                    }))
                },
                St = n("2rRr"),
                Et = n("eFQ3"),
                wt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChannelStatus = function() {}, t.onWheelPostMessage = function(e) {
                            if (t.postMessageIsWheelEvent(e) && t.componentEl) {
                                var n = e.data.args[0].data,
                                    a = new WheelEvent("wheel", r.__assign({
                                        bubbles: !0
                                    }, n));
                                t.componentEl.dispatchEvent(a)
                            }
                        }, t.setComponentRef = function(e) {
                            t.componentEl = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), window.addEventListener("message", this.onWheelPostMessage)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("message", this.onWheelPostMessage)
                    }, t.prototype.render = function() {
                        return a.createElement("div", {
                            ref: this.setComponentRef
                        }, a.createElement(O.o, {
                            ratio: O.p.Aspect16x9
                        }, this.getVideoEmbedComponent()))
                    }, t.prototype.getVideoEmbedComponent = function() {
                        var e = this.props,
                            t = e.channelLogin,
                            n = e.vodID,
                            i = e.embedURL,
                            s = e.playerTypeOverride,
                            o = {
                                disableTheatreButton: !0,
                                onChannelStatus: this.onChannelStatus,
                                playerTypeOverride: s || Et.a.Frontpage
                            };
                        return i ? a.createElement("iframe", {
                            src: i,
                            width: "100%",
                            height: "100%",
                            allowFullScreen: !0
                        }) : t ? a.createElement(Et.b, r.__assign({
                            channelLogin: t
                        }, o)) : n ? a.createElement(Et.b, r.__assign({
                            vodID: n
                        }, o)) : a.createElement(O.Xa, null)
                    }, t.prototype.postMessageIsWheelEvent = function(e) {
                        return "player.embed.client" === e.data.namespace && "bridgeplayereventwithpayload" === e.data.method && e.data.args.length > 0 && "wheel" === e.data.args[0].event
                    }, t = r.__decorate([Object(p.b)("EmbedVideoPlayer")], t)
                }(a.Component),
                _t = n("16Gl"),
                jt = function(e) {
                    var t = e.streamSummary;
                    return t ? t.videoId ? a.createElement(E.a, {
                        title: Object(o.d)("What is the video for this stream?", "StreamSummaryVodPanel")
                    }, a.createElement(St.a, {
                        key: t.videoId,
                        onClick: _.c,
                        type: St.b.Video,
                        viewCount: t.videoViews,
                        thumbnailURL: t.videoMediumThumbnail
                    }, a.createElement(wt, {
                        vodID: t.videoId
                    })), a.createElement(w.a, {
                        message: Object(o.d)("Highlight video", "StreamSummaryVodPanelCTA"),
                        onClick: _.h,
                        linkTo: Object(_t.c)(t.channel.name, t.videoId.substring(1)),
                        targetBlank: !0
                    })) : null : a.createElement(O.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(O.eb, {
                        height: 448
                    }))
                },
                Ot = n("3lt/"),
                Ct = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
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
                        }), a.createElement(vt, {
                            streamSummary: this.props.sessionCursor.current,
                            topClips: this.props.topClips
                        }), a.createElement(jt, {
                            streamSummary: this.props.sessionCursor.current
                        }), !e && a.createElement(ft, {
                            isLoading: !this.props.sessionCursor.current
                        })), a.createElement(k, null, a.createElement(X, {
                            quest: this.props.sessionCursor.current && this.props.achievementProgressions.quests[0],
                            channelName: this.props.channel.name
                        }), a.createElement(C, {
                            query: this.props.achievementProgressions,
                            streamSummaryCursor: this.props.sessionCursor
                        }), a.createElement(v.a, {
                            streamSessionsQuery: {
                                isLoading: 0 === t.length,
                                sessions: t
                            },
                            onViewDetails: _.g,
                            linkToDetails: t.length > 0 ? {
                                pathname: "/" + this.props.channel.name + "/dashboard/stream-summary/" + this.props.sessionCursor.current.id + "/referrals",
                                state: {
                                    content: Ot.PageviewContent.ReferralsDetails,
                                    medium: Ot.PageviewMedium.StreamSummary
                                }
                            } : ""
                        }))))
                    }, t
                }(a.Component),
                kt = n("4eyL"),
                At = n("Dg4+"),
                xt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            topClipsByStreamSummary: new Map,
                            isLoading: !0
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchTopClips()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.streamSummary !== this.props.streamSummary && this.fetchTopClips()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.streamSummary && this.props.streamSummary.id,
                            n = t && this.state.topClipsByStreamSummary.get(t) || [];
                        return a.createElement(kt.a, {
                            channel: this.props.channel
                        }, function(t) {
                            return e.props.children({
                                topClips: {
                                    clips: n,
                                    isLoading: e.state.isLoading
                                },
                                achievementProgressionsQuery: t
                            })
                        })
                    }, t.prototype.fetchTopClips = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return !(e = this.props.streamSummary) || this.state.topClipsByStreamSummary.get(e.id) ? [2] : (this.setState({
                                            isLoading: !0
                                        }), [4, Object(At.a)(e.channel.name, e.interval)]);
                                    case 1:
                                        return (t = n.sent()).isError ? [2] : (this.setState(function(n) {
                                            return {
                                                topClipsByStreamSummary: new Map(n.topClipsByStreamSummary).set(e.id, t.topClips),
                                                isLoading: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t
                }(a.Component),
                Tt = n("Map9"),
                Dt = n("YNx3"),
                Rt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        o.p.setPageTitle(Object(o.d)("Stream Summary", "DashboardStreamSummaryPage"))
                    }, t.prototype.render = function() {
                        var e = this,
                            t = x.c.fromChannelData(this.props.data);
                        if (!t) return null;
                        if (!this.props.data.loading && this.props.data.channel) {
                            var n = this.props.userID === this.props.data.channel.id,
                                r = this.props.data.channel.self && this.props.data.channel.self.isEditor;
                            if (!this.props.isStaff && !n && !r) return a.createElement(h.a, null)
                        }
                        return a.createElement(a.Fragment, null, a.createElement(f.a, null, a.createElement(Tt.a, {
                            query: this.props.streamSummaryQuery,
                            summaryID: this.props.streamSummaryID,
                            getURLForStreamSummary: B.d
                        }, function(n) {
                            return a.createElement(xt, {
                                previousStreamSummary: n.previous,
                                streamSummary: n.current,
                                channel: t
                            }, function(r) {
                                return a.createElement(Ct, {
                                    channel: t,
                                    sessionCursor: n,
                                    achievementProgressions: r.achievementProgressionsQuery,
                                    streamSessions: e.props.streamSummaryQuery,
                                    topClips: r.topClips
                                })
                            })
                        })), a.createElement(b.a, null))
                    }, t
                }(a.Component);
            var Pt = Object(i.compose)(Object(p.b)("StreamSummaryPage", {
                destination: u.a.ChannelDashboardStreamSummary,
                autoReportInteractive: !0
            }), Object(c.a)({
                location: m.PageviewLocation.DashboardStreamSummary
            }), Object(l.a)(Dt, {
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
            }))(Rt);
            n.d(t, "StreamSummaryPage", function() {
                return Pt
            }), n.d(t, "PublicProps", function() {})
        },
        "Dg4+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("mrSG"),
                a = n("cr+I"),
                i = n("CFgy"),
                s = n("6XEL");

            function o(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, o, l, c;
                    return r.__generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return n = "/kraken/clips/top", o = a.stringify(r.__assign({
                                    channel: e
                                }, Object(i.i)(t))), l = [n, o].join("?"), [4, Object(s.c)({
                                    path: l
                                })];
                            case 1:
                                return (c = u.sent()).isError() ? [2, {
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
                                    }(c.body)
                                }]
                        }
                    })
                })
            }
        },
        Dm0L: function(e, t, n) {},
        FXHi: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("/7QA"),
                i = n("2xye"),
                s = n("Ue10"),
                o = (n("qZmV"), function(e) {
                    return r.createElement(s.Xa, {
                        className: "clip-card-row"
                    }, r.createElement(s.Ua, {
                        type: s.Va.Alpha,
                        blurAfterClick: !0,
                        targetBlank: !0,
                        linkTo: e.url + "?tt_content=" + i.PageviewContent.TopClips + "&tt_medium=" + i.PageviewMedium.ChannelAnalytics,
                        onClick: e.onClick
                    }, r.createElement(s.yb, {
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, r.createElement(s.G, {
                        row: !0
                    }, r.createElement(s.I, {
                        src: e.thumbnailURL,
                        alt: e.title,
                        size: s.J.Size8,
                        aspect: s.p.Aspect16x9
                    }), r.createElement(s.H, {
                        overflow: s.ab.Hidden
                    }, r.createElement(s.Xa, {
                        display: s.X.Flex,
                        flexGrow: 1,
                        alignItems: s.f.Center,
                        justifyContent: s.Wa.Between,
                        margin: {
                            left: 1
                        },
                        ellipsis: !0
                    }, r.createElement(s.Xa, {
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        ellipsis: !0
                    }, r.createElement(s.W, {
                        color: s.O.Base,
                        type: s.Ob.H5,
                        ellipsis: !0
                    }, e.title), r.createElement(s.Xa, {
                        display: s.X.Flex,
                        flexWrap: s.Ba.NoWrap
                    }, r.createElement(s.ob, {
                        asset: s.pb.GlyphLive,
                        type: s.qb.Alt2
                    }), r.createElement(s.Xa, {
                        display: s.X.Inline,
                        padding: {
                            left: .5
                        },
                        ellipsis: !0
                    }, r.createElement(s.W, {
                        type: s.Ob.Span
                    }, e.curatorName)))))), r.createElement(s.Xa, {
                        display: s.X.Flex,
                        flexGrow: 1,
                        justifyContent: s.Wa.End,
                        padding: {
                            left: 2
                        }
                    }, r.createElement(s.ob, {
                        asset: s.pb.GlyphViews,
                        type: s.qb.Alt2
                    }), r.createElement(s.Xa, {
                        display: s.X.Flex,
                        padding: {
                            left: .5
                        }
                    }, r.createElement(s.W, {
                        bold: !0,
                        fontSize: s.Ca.Size5,
                        color: s.O.Alt,
                        type: s.Ob.Span
                    }, Object(a.d)("{views, number}", {
                        views: e.views
                    }, "StreamSummaryClipViews"))))))))
                });
            n.d(t, "a", function() {
                return o
            })
        },
        FkHV: function(e, t, n) {},
        FuXV: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("TSYQ"),
                i = n("q1tI"),
                s = n("ll/k"),
                o = n("Ue10"),
                l = (n("0eTn"), ["confetti-layer__confetti--slow", "confetti-layer__confetti--medium", "confetti-layer__confetti--fast"]),
                c = ["rgba(247, 42, 107, 1)", "rgba(255, 113, 105, 1)", "rgba(253, 226, 132, 1)", "rgba(181, 138, 242, 1)"],
                u = ["0.011s", "0.176s", "0.321s", "0.446s", "0.849s", "1.056s", "1.229s", "1.333s", "1.379s", "1.828s"],
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = a({
                                "confetti-layer__confetti": !0,
                                "confetti-layer__confetti--infinite": this.props.infinite
                            });
                        return i.createElement(o.Xa, {
                            className: "confetti-layer",
                            position: o.fb.Absolute,
                            overflow: o.ab.Hidden,
                            zIndex: o.bc.Default,
                            attachTop: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            attachLeft: !0
                        }, Object(s.c)(this.props.confettiCount, function(n) {
                            return i.createElement("div", {
                                key: n,
                                className: t + " " + Object(s.b)(l),
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
                        colors: c
                    }, t
                }(i.PureComponent);
            n.d(t, "a", function() {
                return m
            })
        },
        KYAw: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return o
            });
            var r = n("mrSG"),
                a = n("cr+I"),
                i = n("Addw");

            function s(e, t) {
                var n = new URL("https://www.twitch.tv/collections/" + e);
                return t && (n.search = a.stringify(t)), n.toString()
            }

            function o(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                return t && (n.search = a.stringify(r.__assign({}, t, {
                    t: "number" == typeof t.t ? Object(i.a)(t.t) : void 0
                }))), n.toString()
            }
        },
        MjdR: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("TSYQ"),
                i = n("q1tI"),
                s = n("gi7w"),
                o = n("gq0V"),
                l = n("Ue10"),
                c = function(e) {
                    var t = Object(o.b)(),
                        n = t && {
                            overflow: l.ab.Hidden,
                            borderRadius: l.x.Large
                        },
                        c = a({
                            "ach-card__badge-wrap": !t,
                            "ach-card-vip__badge-wrap": t
                        }),
                        u = a({
                            "ach-card__badge": !t,
                            "ach-card-vip__badge": t
                        }),
                        m = t && {
                            borderRadius: l.x.Large
                        };
                    return i.createElement(l.Xa, r.__assign({
                        display: l.X.Flex,
                        flexWrap: l.Ba.NoWrap,
                        position: l.fb.Relative,
                        flexShrink: 0
                    }, m), i.createElement(l.Xa, {
                        className: c,
                        position: l.fb.Relative,
                        flexShrink: 0
                    }, i.createElement(l.yb, r.__assign({
                        className: u,
                        background: l.r.Alt2
                    }, n), i.createElement("img", {
                        alt: e.achievement.title,
                        className: "ach-card__img",
                        src: e.achievement.image.scale1x,
                        srcSet: e.achievement.image.scale1x + " 1x, " + e.achievement.image.scale3x + " 3x"
                    })), Boolean(e.achievement.level) && i.createElement(l.yb, {
                        className: "ach-card__lvl",
                        position: l.fb.Absolute,
                        background: l.r.Alt
                    }, i.createElement(l.s, {
                        border: !0,
                        icon: Object(s.a)(e.achievement.level),
                        size: 20,
                        type: l.t.Dashboard
                    }))), i.createElement(l.yb, {
                        overflow: l.ab.Hidden,
                        display: l.X.Flex,
                        justifyContent: l.Wa.Center,
                        flexDirection: l.Aa.Column,
                        margin: {
                            left: 2
                        }
                    }, i.createElement(l.W, {
                        fontSize: l.Ca.Size4,
                        color: l.O.Alt,
                        bold: !0,
                        ellipsis: !0
                    }, e.achievement.title), i.createElement(l.W, {
                        fontSize: l.Ca.Size5,
                        color: l.O.Alt2,
                        ellipsis: !0
                    }, e.achievement.description)), i.createElement(l.yb, {
                        className: "ach-card__progress-meta",
                        display: l.X.Flex,
                        alignContent: l.e.Center,
                        alignItems: l.f.Center,
                        justifyContent: l.Wa.End,
                        flexGrow: 1,
                        flexShrink: 0,
                        margin: {
                            left: 1
                        }
                    }, e.children))
                };
            n.d(t, "a", function() {
                return c
            })
        },
        NCCa: function(e, t, n) {},
        OGSR: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("Ue10"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleCanvasReady = function(e) {
                            e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(i.Pa, {
                            fullWidth: !0
                        }, a.createElement("canvas", {
                            ref: this.handleCanvasReady
                        }))
                    }, t.prototype.setCanvasResolution = function(e) {
                        var t = e.width,
                            n = e.height,
                            r = this.getPixelRatio(e.getContext("2d"));
                        e.width = t * r, e.height = n * r, e.style.width = t + "px", e.style.height = n + "px", e.getContext("2d").setTransform(r, 0, 0, r, 0, 0)
                    }, t.prototype.getPixelRatio = function(e) {
                        return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        Qtpw: function(e, t, n) {},
        RnhZ: function(e, t, n) {
            var r = {
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
                return n(t)
            }

            function i(e) {
                var t = r[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = i, e.exports = a, a.id = "RnhZ"
        },
        S3iq: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("TSYQ"),
                i = n("q1tI"),
                s = n("MjdR"),
                o = n("gq0V"),
                l = n("6XEL"),
                c = n("Ue10"),
                u = {
                    "data-test-selector": "achievement-card"
                },
                m = function(e) {
                    return i.createElement(c.U, r.__assign({
                        className: "ach-link",
                        "aria-hidden": e.isHidden,
                        tabIndex: e.isHidden ? -1 : void 0,
                        to: l.b.achievement(e.achievement)
                    }, u, {
                        hoverUnderlineNone: !0
                    }), i.createElement(d, {
                        achievement: e.achievement,
                        className: e.layoutClassName
                    }, e.children))
                },
                d = function(e) {
                    var t, n = Object(o.b)(),
                        l = a(e.className, {
                            "ach-card": !n,
                            "ach-card-vip": n,
                            "ach-card-vip--completed": Boolean(e.achievement.completedAt),
                            "ach-card--recent": e.achievement.wasRecentlyCompleted()
                        }),
                        u = n && {
                            padding: 1
                        };
                    return e.achievement.completedAt || (t = i.createElement(c.Xa, {
                        position: c.fb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, i.createElement(c.ib, {
                        size: c.kb.ExtraSmall,
                        value: 100 * e.achievement.progressRatio
                    }))), i.createElement(c.yb, r.__assign({
                        className: l,
                        position: c.fb.Relative
                    }, u), i.createElement(c.yb, {
                        className: "ach-card__inner"
                    }, i.createElement(s.a, {
                        achievement: e.achievement
                    }, i.createElement("div", null, e.children, !n && t)), n && t))
                };
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return m
            })
        },
        "SwG+": function(e, t, n) {},
        Tc9I: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return o
            });
            var r, a = n("/7QA"),
                i = n("5NYc");

            function s(e) {
                return function() {
                    var e;
                    return r || ((e = {})[i.b.PATH_TO_PARTNER] = {
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
                        title: "",
                        bannerTitle: function(e) {
                            return ""
                        },
                        subtitle: ""
                    }, r = e), r
                }()[e] || e
            }

            function o() {
                return {
                    spotlightDismiss: Object(a.d)("Close", "StreamSummarySpotlightDismiss")
                }
            }
        },
        "UK3/": function(e, t, n) {},
        VxtK: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("/7QA"),
                i = n("cSnd"),
                s = n("a7UW"),
                o = n("6E8S"),
                l = n("sBDM"),
                c = n("nlSm"),
                u = n("g3ZN"),
                m = n("Ue10"),
                d = {
                    "data-test-selector": "referral-percentage"
                },
                p = function(e) {
                    return e
                },
                h = function(e) {
                    var t = e.streamSessionsQuery,
                        n = e.linkToDetails,
                        d = e.onViewDetails;
                    if (t.isLoading) return r.createElement(f, null);
                    var h = t.sessions,
                        b = Object(c.a)(h.map(function(e) {
                            return e.videoPlayInternalTwitchReferrers
                        })),
                        v = Object(c.a)(h.map(function(e) {
                            return e.videoPlayInternalChannelsReferrers
                        })),
                        g = Object(c.a)(h.map(function(e) {
                            return e.videoPlayExternalReferrers
                        })),
                        y = r.createElement(s.a, null);
                    return (b.total || v.total || g.total) && (y = r.createElement(r.Fragment, null, r.createElement(m.yb, {
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(u.a, {
                        referrals: b.items.slice(0, 3),
                        total: b.total,
                        translationFunc: i.b,
                        title: Object(a.d)("Twitch", "DashboardReferralPanel")
                    }), r.createElement(u.a, {
                        referrals: v.items.slice(0, 3),
                        total: v.total,
                        translationFunc: p,
                        title: Object(a.d)("Channels", "DashboardReferralPanel")
                    }), r.createElement(u.a, {
                        referrals: g.items.slice(0, 3),
                        total: g.total,
                        translationFunc: i.a,
                        title: Object(a.d)("External", "DashboardReferralPanel")
                    })), r.createElement(l.a, {
                        onClick: d,
                        message: Object(a.d)("View details", "DashboardReferralPanel"),
                        linkTo: n
                    }))), r.createElement(o.a, {
                        title: Object(a.d)("Where did my views come from?", "DashboardReferralPanel")
                    }, y)
                },
                f = function() {
                    return r.createElement(m.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(m.eb, {
                        height: 448
                    }))
                };
            n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return f
            })
        },
        YNx3: function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "query DashboardStreamSummaryPage($channelLogin: String) {\nchannel: user(login: $channelLogin) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\nself {\nisEditor\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ZbLS: function(e, t, n) {},
        a7UW: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                s = n("Ue10"),
                o = {
                    "data-test-selector": "no-data"
                },
                l = {
                    src: "https://static-cdn.jtvnw.net/emoticons/v1/160403/3.0",
                    alt: "TearGlove"
                },
                c = function() {
                    return a.createElement(s.Xa, r.__assign({
                        alignItems: s.f.Center,
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Wa.Center,
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0,
                        padding: {
                            top: 5,
                            bottom: 5
                        }
                    }, o), a.createElement(s.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(s.q, r.__assign({}, l, {
                        size: 50
                    }))), a.createElement(s.W, {
                        color: s.O.Alt2,
                        fontSize: s.Ca.Size5
                    }, Object(i.d)("Not enough data for us to display", "ChannelAnalyticsNoData")))
                };
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return c
            })
        },
        bF3S: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("/7QA"),
                i = n("tmT/"),
                s = n("Ue10"),
                o = function(e) {
                    return r.createElement(s.Xa, {
                        display: s.X.Flex,
                        justifyContent: s.Wa.End
                    }, r.createElement(s.ob, {
                        type: e.checkMarkType,
                        asset: s.pb.Check,
                        width: 20,
                        height: 20
                    }))
                };
            n.d(t, "a", function() {
                return l
            });
            var l = function(e) {
                var t = e.progress,
                    n = e.progressCap;
                if (e.isComplete) return r.createElement(o, {
                    checkMarkType: s.qb.Success
                });
                if (e.completedAt) return r.createElement(i.a, {
                    date: e.completedAt
                });
                if (1 === n && 1 === t) return r.createElement(o, {
                    checkMarkType: s.qb.Alt
                });
                var l = function() {
                    return r.createElement(s.Xa, {
                        position: s.fb.Relative,
                        display: s.X.Flex,
                        alignItems: s.f.Center
                    }, r.createElement(s.W, {
                        className: t >= n ? "quest-requirement-card-progress__success" : "quest-requirement-card-progress",
                        color: t >= n ? void 0 : s.O.Alt2,
                        bold: !0,
                        fontSize: s.Ca.Size4,
                        type: s.Ob.Span
                    }, Object(a.f)(Math.floor(100 * t) / 100)), r.createElement(s.Xa, {
                        margin: {
                            right: .5
                        }
                    }, r.createElement(s.W, {
                        fontSize: s.Ca.Size5,
                        color: s.O.Alt2,
                        type: s.Ob.Span
                    }, "/")), r.createElement(s.W, {
                        fontSize: s.Ca.Size5,
                        color: s.O.Alt2
                    }, Object(a.g)(e.progressCap)))
                };
                return t > 999 ? r.createElement(s.Rb, {
                    label: Object(a.f)(Math.floor(100 * t) / 100),
                    direction: s.Tb.Left
                }, l()) : l()
            }
        },
        eqL5: function(e, t, n) {},
        gi7w: function(e, t, n) {
            "use strict";
            var r = n("Ue10"),
                a = {
                    1: r.pb.Roman1,
                    2: r.pb.Roman2,
                    3: r.pb.Roman3,
                    4: r.pb.Roman4,
                    5: r.pb.Roman5
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
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            })
        },
        "kO/C": function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "query DashboardStreamSummaryPage_StatCardGrid($channelLogin: String) {\nuser(login: $channelLogin) {\nid\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kpsn: function(e, t, n) {},
        "ll/k": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (void 0 === t && (t = 0), t > e) {
                    var n = t;
                    t = e, e = n
                }
                return t + Math.floor(Math.random() * (e - t + 1))
            }

            function a(e) {
                return e[r(e.length - 1)]
            }

            function i(e, t) {
                for (var n = 0, r = []; n < e;) r.push(t(n)), n += 1;
                return r
            }
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            })
        },
        "mZc/": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("Ue10"),
                s = (n("NCCa"), function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.direction,
                            r = e.size;
                        return a.createElement("div", {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave
                        }, a.createElement(i.yb, {
                            display: i.X.Flex,
                            margin: {
                                x: 1
                            },
                            position: i.fb.Relative
                        }, a.createElement(i.yb, {
                            className: "hoverable-icon",
                            display: i.X.InlineFlex,
                            color: i.O.Alt2,
                            alignItems: i.f.Center,
                            justifyContent: i.Wa.Center
                        }, a.createElement(i.ob, {
                            asset: i.pb.NotificationInfo,
                            width: 16,
                            height: 16
                        })), a.createElement(i.u, {
                            show: this.state.isHovered,
                            direction: n,
                            size: r
                        }, a.createElement(i.Xa, {
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
            n.d(t, "a", function() {
                return s
            })
        },
        qZmV: function(e, t, n) {},
        qe41: function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                i = n("q1tI"),
                s = n("5NYc"),
                o = n("bF3S"),
                l = n("Ue10");
            n("wd1L");
            ! function(e) {
                e.QUEST_REQUIREMENT_PROGRESS = "quest-requirement-progress", e.QUEST_SUBTEXT = "quest-subtext"
            }(r || (r = {}));
            var c = function(e) {
                var t = e.requirement,
                    n = t.metric === s.a.AVERAGE_CCU;
                return i.createElement(l.yb, {
                    position: l.fb.Relative,
                    display: l.X.Flex,
                    alignItems: l.f.Center,
                    padding: {
                        y: 2,
                        left: 2
                    },
                    borderBottom: !0
                }, i.createElement(l.Xa, a.__assign({
                    display: l.X.Flex,
                    flexGrow: 1,
                    alignItems: l.f.Center
                }, n ? {} : {
                    padding: {
                        right: 3
                    },
                    flexGrow: 1
                }), i.createElement(l.Xa, null, i.createElement(l.Xa, {
                    display: l.X.Flex,
                    alignItems: l.f.Center
                }, i.createElement(l.W, {
                    bold: !0,
                    fontSize: l.Ca.Size5
                }, e.requirementInstructionString[t.metric]), n && i.createElement(l.Xa, {
                    display: l.X.Flex,
                    padding: {
                        left: .5,
                        right: 3
                    }
                }, i.createElement(l.Rb, {
                    label: e.ccuTooltipLabel,
                    direction: l.Tb.Top,
                    width: 230
                }, i.createElement(l.ob, {
                    asset: l.pb.NotificationInfo,
                    width: 16,
                    height: 16,
                    type: l.qb.Alt2
                })))), e.subtext && !e.isComplete && i.createElement(l.W, {
                    color: l.O.Alt2,
                    "data-test-selector": r.QUEST_SUBTEXT
                }, e.subtext))), i.createElement(l.Xa, {
                    display: l.X.Flex,
                    justifyContent: l.Wa.End,
                    padding: {
                        right: 2
                    },
                    flexShrink: 0
                }, i.createElement(o.a, {
                    "data-test-selector": r.QUEST_REQUIREMENT_PROGRESS,
                    progress: t.progress,
                    progressCap: t.progress_cap,
                    isComplete: e.isComplete
                })))
            };
            n.d(t, !1, function() {
                return r
            }), n.d(t, "a", function() {
                return c
            })
        },
        qnLe: function(e, t, n) {},
        sBDM: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("Ue10");
            n("qnLe");

            function i(e) {
                return r.createElement(a.yb, {
                    className: "insight-panel-btn",
                    background: e.background || a.r.Alt,
                    display: a.X.Flex,
                    flexGrow: 1,
                    flexWrap: a.Ba.NoWrap,
                    borderTop: e.borderTop
                }, r.createElement(a.z, {
                    disabled: e.disabled,
                    type: a.F.Text,
                    linkTo: e.linkTo,
                    onClick: e.onClick,
                    targetBlank: e.targetBlank,
                    fullWidth: !0
                }, r.createElement(a.W, {
                    color: e.color
                }, e.message)))
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "tmT/": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("/7QA"),
                i = n("Ue10"),
                s = function(e) {
                    var t = Object(a.d)("Completed on {completedAt, date, short}", {
                            completedAt: e.date
                        }, "AchievementCard"),
                        n = Object(a.c)(e.date, "short");
                    return r.createElement(i.W, {
                        fontSize: i.Ca.Size5,
                        color: i.O.Alt2,
                        title: t
                    }, n)
                };
            n.d(t, "a", function() {
                return s
            })
        },
        vYsf: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("mrSG"),
                a = n("b6Yk");

            function i(e) {
                return r.__awaiter(this, void 0, Promise, function() {
                    var t, n;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, a.a.get("/v5/channels/" + e + "/quests")];
                            case 1:
                                if (t = r.sent(), n = t.body, 200 !== t.status || !n) throw new Error("failed to fetch quests");
                                return [2, n.quests]
                        }
                    })
                })
            }
        },
        wQAB: function(e, t, n) {},
        wd1L: function(e, t, n) {},
        xMok: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("4p7I"),
                s = n("/7QA"),
                o = n("S3iq"),
                l = n("tmT/"),
                c = n("Ue10"),
                u = function(e) {
                    return 0 === e.achievement.progress ? a.createElement("span", null) : e.achievement.completedAt ? a.createElement(c.Xa, {
                        display: c.X.InlineFlex,
                        alignItems: c.f.Center
                    }, a.createElement(l.a, {
                        date: e.achievement.completedAt
                    })) : a.createElement(c.yb, {
                        className: "ach-card__pill-wrapper",
                        fontSize: c.Ca.Size5
                    }, a.createElement(c.cb, {
                        label: Object(s.f)(e.achievement.progressRatio, "percent")
                    }))
                },
                m = n("TSYQ"),
                d = n("MjdR"),
                p = n("gq0V"),
                h = n("6XEL"),
                f = {
                    src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                    alt: "VoHiYo"
                },
                b = function(e) {
                    var t = Object(p.b)(),
                        n = m({
                            "ach-card": !0,
                            "ach-card--expanded": !t,
                            "ach-card-vip--expanded-vip": t,
                            "ach-card-vip--completed": !t && Boolean(e.achievement.completedAt),
                            "ach-card--completed": !t && Boolean(e.achievement.completedAt),
                            "ach-card--recent": e.achievement.wasRecentlyCompleted()
                        }),
                        i = t ? {
                            fullWidth: !0,
                            padding: 1
                        } : {
                            elevation: 4
                        },
                        s = t && {
                            display: c.X.Flex,
                            flexGrow: 1,
                            margin: {
                                y: 2
                            },
                            zIndex: c.bc.Above,
                            borderRadius: c.x.Large,
                            fullWidth: !0,
                            fullHeight: !0
                        },
                        o = t ? {
                            display: c.X.Flex,
                            flexWrap: c.Ba.NoWrap,
                            alignItems: c.f.Center,
                            flexGrow: 1,
                            padding: 1,
                            background: c.r.Alt,
                            borderRadius: c.x.Large
                        } : {
                            display: c.X.Flex,
                            flexWrap: c.Ba.NoWrap,
                            alignItems: c.f.Center,
                            flexGrow: 1,
                            padding: 1,
                            background: c.r.Alt2,
                            border: !0
                        };
                    return a.createElement(c.yb, r.__assign({
                        className: n,
                        position: c.fb.Relative
                    }, s), a.createElement(c.yb, r.__assign({
                        className: "ach-card__inner"
                    }, i, {
                        refDelegate: e.refDelegate
                    }), a.createElement(d.a, {
                        achievement: e.achievement
                    }, t ? void 0 : a.createElement(v, {
                        achievement: e.achievement
                    })), a.createElement(c.Xa, {
                        position: c.fb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, a.createElement(c.A, {
                        ariaLabel: "Close",
                        icon: c.pb.Close,
                        linkTo: h.b.channelAchievements(e.achievement.channelName)
                    })), a.createElement(c.Xa, {
                        display: c.X.Flex,
                        flexGrow: 1,
                        position: c.fb.Relative,
                        padding: {
                            top: 1
                        }
                    }, a.createElement(c.yb, r.__assign({}, o), a.createElement(c.q, r.__assign({}, f, {
                        size: 30
                    })), a.createElement(c.yb, {
                        color: c.O.Alt,
                        margin: {
                            left: .5
                        },
                        padding: {
                            left: 1
                        }
                    }, a.createElement("p", null, e.achievement.longDescription))))))
                },
                v = function(e) {
                    return 0 === e.achievement.progress ? a.createElement("span", null) : e.achievement.completedAt ? a.createElement(l.a, {
                        date: e.achievement.completedAt
                    }) : a.createElement(c.yb, {
                        className: "ach-card__pill-wrapper",
                        fontSize: c.Ca.Size5
                    }, a.createElement(c.cb, {
                        label: Object(s.f)(e.achievement.progressRatio, "percent")
                    }))
                },
                g = n("bF3S"),
                y = n("FuXV"),
                S = n("eAwD"),
                E = {
                    "data-test-selector": "recently-completed-achievements-list"
                },
                w = {
                    "data-test-selector": "not-completed-achievements-list"
                },
                _ = {
                    "data-test-selector": "past-completed-achievements-list"
                },
                j = function(e) {
                    var t = Object(p.b)() ? {
                        y: 4
                    } : {
                        x: 4,
                        y: 4
                    };
                    return a.createElement(c.Xa, {
                        padding: t,
                        margin: {
                            bottom: 2
                        }
                    }, e.isLoading ? A() : a.createElement(O, {
                        achievements: e.achievements
                    }))
                },
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            didCelebrate: !1
                        }, t.timeoutID = 0, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        }, Boolean(this.props.achievements.topRecentlyCompleted.length) && a.createElement(c.Xa, r.__assign({
                            margin: {
                                bottom: 3
                            }
                        }, E), a.createElement(c.Xa, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(c.W, {
                            type: c.Ob.H3,
                            fontSize: c.Ca.Size4,
                            bold: !0
                        }, Object(s.d)("Recently Completed", "AchievementsList"))), this.props.achievements.topRecentlyCompleted.map(function(t) {
                            return a.createElement(C, {
                                achievement: t,
                                key: t.id
                            }, !e.state.didCelebrate && a.createElement(y.a, {
                                confettiCount: 30
                            }))
                        })), Boolean(this.props.achievements.notCompleted.length) && a.createElement("div", r.__assign({}, w), a.createElement(c.Xa, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(c.W, {
                            type: c.Ob.H3,
                            fontSize: c.Ca.Size4,
                            bold: !0
                        }, Object(s.d)("In Progress", "AchievementsList"))), this.props.achievements.notCompleted.map(function(e) {
                            return a.createElement(C, {
                                achievement: e,
                                key: e.id
                            })
                        })), Boolean(this.props.achievements.pastCompleted.length) && a.createElement(c.Xa, r.__assign({
                            margin: {
                                top: 3
                            }
                        }, _), a.createElement(c.Xa, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(c.W, {
                            type: c.Ob.H3,
                            fontSize: c.Ca.Size4,
                            bold: !0
                        }, Object(s.d)("Completed", "AchievementsList"))), this.props.achievements.pastCompleted.map(function(e) {
                            return a.createElement(C, {
                                achievement: e,
                                key: e.id
                            })
                        })))
                    }, t
                }(a.Component),
                C = function(e) {
                    var t = Object(p.b)();
                    return a.createElement(i.a, {
                        path: h.b.achievement(e.achievement),
                        exact: !0
                    }, function(n) {
                        var i = n.match;
                        if (Boolean(i)) return a.createElement(b, {
                            achievement: e.achievement,
                            refDelegate: S.a
                        });
                        var s = t && {
                            margin: {
                                bottom: 1
                            },
                            borderRadius: c.x.Large,
                            background: c.r.Base,
                            overflow: c.ab.Hidden
                        };
                        return a.createElement(c.yb, r.__assign({
                            elevation: 1
                        }, s), a.createElement(o.a, {
                            achievement: e.achievement,
                            layoutClassName: "ach-card--in-list"
                        }, a.createElement("div", null, e.children, k(e.achievement))))
                    })
                },
                k = function(e) {
                    return Object(p.b)() ? a.createElement(g.a, {
                        progress: e.progress,
                        progressCap: e.progressCap,
                        completedAt: e.completedAt
                    }) : a.createElement(u, {
                        achievement: e
                    })
                },
                A = function() {
                    var e = Array(3).fill("").map(function(e, t) {
                        return a.createElement(c.Xa, {
                            margin: {
                                bottom: 1
                            },
                            key: t
                        }, a.createElement(c.eb, {
                            height: 70
                        }))
                    });
                    return [a.createElement(c.Xa, r.__assign({
                        margin: {
                            bottom: 3
                        }
                    }, E, {
                        key: "recently-completed"
                    }), e), a.createElement("div", r.__assign({}, w, {
                        key: "not-completed"
                    }), e), a.createElement(c.Xa, r.__assign({
                        margin: {
                            top: 3
                        }
                    }, _, {
                        key: "past-completed"
                    }), e)]
                };
            n.d(t, !1, function() {
                return E
            }), n.d(t, !1, function() {
                return w
            }), n.d(t, !1, function() {
                return _
            }), n.d(t, "a", function() {
                return j
            }), n.d(t, "b", function() {
                return k
            })
        },
        xcDG: function(e, t, n) {},
        "y/W1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            });
            var r = n("q1tI"),
                a = n("/7QA"),
                i = n("5NYc"),
                s = n("Ue10"),
                o = function(e) {
                    var t = e.find(function(e) {
                        return e.metric === i.a.HOUR_COUNT
                    });
                    if (void 0 !== t) {
                        var n = t && t.progress;
                        return Object(a.d)("in <x:strong>{duration} hours</x:strong> streamed", {
                            "x:strong": function(e) {
                                return r.createElement(s.W, {
                                    bold: !0,
                                    type: s.Ob.Span
                                }, e)
                            },
                            duration: Object(a.f)(Math.floor(100 * n) / 100)
                        }, "QuestRequirements")
                    }
                },
                l = function(e, t) {
                    return Object(a.d)("{numCompleted, number} of {numTotal, number} requirements", {
                        numCompleted: e,
                        numTotal: t
                    }, "AchievementsQuests")
                },
                c = function(e) {
                    return e.sort(function(e, t) {
                        return e.time_based && !t.time_based ? 1 : !e.time_based && t.time_based ? -1 : 0
                    })
                }
        }
    }
]);