(window.webpackJsonp = window.webpackJsonp || []).push([
    [162], {
        "0eTn": function(e, t, n) {},
        "4eyL": function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("vYsf"),
                c = n("u2gS"),
                l = n("dG1e"),
                s = n("/7QA");

            function m(e, t) {
                var n = function() {
                        if (i) return i;
                        return i = {
                            broadcast_n_hours_30_days: {
                                title: Object(s.d)("New day, new stream", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Stream for {numOfHours, number} hours in the last 30 days", {
                                        numOfHours: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Stream on a regular schedule to help draw in more viewers. Find the balance that works for you.", "AchievementLongDescription"),
                                levelGoals: [4, 8, 25, 40]
                            },
                            n_followers: {
                                title: Object(s.d)("What is thy bidding?", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Reach {numOfFollowers, number} followers", {
                                        numOfFollowers: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Followers can opt in to be notified when you stream or share an update.", "AchievementLongDescription"),
                                levelGoals: [2, 10, 50, 200]
                            },
                            n_broadcast_days_30_days: {
                                title: Object(s.d)("Like clockwork", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Stream for {numOfDays, number} unique days in the last 30 days", {
                                        numOfDays: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Stream on different days to reach different viewers. Unique days are based on GMT.", "AchievementLongDescription"),
                                levelGoals: [2, 7, 12, 25]
                            },
                            n_concurrents_30_days: {
                                title: Object(s.d)("Who watches the watchers?", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Reach {numOfViewers, number} average viewers in the last 30 days", {
                                        numOfViewers: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Check average viewers on your stats page. If you notice a spike, try to replicate that magic!", "AchievementLongDescription"),
                                levelGoals: [3, 10, 15, 75]
                            },
                            first_stream: {
                                title: Object(s.d)("It's happening", "AchievementTitle"),
                                description: function() {
                                    return Object(s.d)("Start your first stream", "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Start your first stream on Twitch to complete this achievement.", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            single_dashboard_visit: {
                                title: Object(s.d)("Know your stuff", "AchievementTitle"),
                                description: function() {
                                    return Object(s.d)("Explore your dashboard", "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Your dashboard is the best place to update your stream settings, monitor stats, and more.", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            single_broadcast_title: {
                                title: Object(s.d)("Name of the game", "AchievementTitle"),
                                description: function() {
                                    return Object(s.d)("Update your stream title", "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Add a compelling title to draw viewers to your stream.", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            single_select_game_community: {
                                title: Object(s.d)("We belong", "AchievementTitle"),
                                description: function() {
                                    return Object(s.d)("Update your Game/Category", "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Tag your stream with a Game/Category and Community to help viewers find your channel.", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            n_hours_lifetime: {
                                title: Object(s.d)("The empire business", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Stream for {numOfHours, number} hours total", {
                                        numOfHours: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("The more you stream, the more often viewers can tune in. Take a break whenever you need to.", "AchievementLongDescription"),
                                levelGoals: [250, 500, 1e3, 2e3]
                            },
                            n_same_week_stream_start_time: {
                                title: Object(s.d)("Same time next week", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Start a stream on the same day of week and time for {numOfWeeks, number} weeks in a row", {
                                        numOfWeeks: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("When you stream on the same day and time each week, viewers know when to tune in.", "AchievementLongDescription"),
                                levelGoals: [2, 4, 8, 16]
                            },
                            n_minute_watched_lifetime: {
                                title: Object(s.d)("Kind of a big deal", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Reach {numOfHours, number} hours watched total on your channel", {
                                        numOfHours: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("The more you stream, the more often viewers can tune in. If you're partner and unlock this achievement, you'll have a chance to get swag!", "AchievementLongDescription"),
                                levelGoals: [25e4, 5e5, 1e6, 1e7]
                            },
                            n_viewers_lifetime: {
                                title: Object(s.d)("People know me", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Have {numOfViewers, number} viewers at the same time", {
                                        numOfViewers: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Keep your viewers around by welcoming them to your channel and responding to their comments.", "AchievementLongDescription"),
                                levelGoals: [50, 100, 250, 1e3]
                            },
                            n_unique_chatter_broadcast: {
                                title: Object(s.d)("Talk to me", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Get {numOfPeople, number} people chatting at the same time", {
                                        numOfPeople: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Chat with your viewers to engage them. Engaged viewers are more likely to return.", "AchievementLongDescription"),
                                levelGoals: [25, 50, 100, 200]
                            },
                            n_raid_consecutive_broadcast: {
                                title: Object(s.d)("Raiding party", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Raid {numOfStreams, number} times with 2 or more raiders", {
                                        numOfStreams: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)('Type "/raid (channel)" in chat to bring your viewers to another awesome streamer.', "AchievementLongDescription"),
                                levelGoals: [100]
                            },
                            n_days_since_first_stream: {
                                title: Object(s.d)("Happy Twitchiversary", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Reach your {numOfYears, number}-year streaming anniversary on Twitch", {
                                        numOfYears: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("We really wanted to send you some cake, but this Achievement will have to do. See you again next year!", "AchievementLongDescription"),
                                levelGoals: [1, 2, 3, 4]
                            },
                            n_autohost: {
                                title: Object(s.d)("Mr. Roboto", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Add {numOfChannels, number} channels to your auto host list", {
                                        numOfChannels: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Add to your auto host list from channel settings to highlight another channel whenever you're offline.", "AchievementLongDescription"),
                                levelGoals: [5]
                            },
                            single_twitchcon2017: {
                                title: Object(s.d)("TwitchCon get", "AchievementTitle"),
                                description: function() {
                                    return Object(s.d)("Purchase a TwitchCon ticket", "AchievementDescription")
                                },
                                longDescription: Object(s.d)("You provided your Twitch ID when you purchased your TwitchCon ticket. If you missed this year, hopefully you can make it next year!", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            single_chat: {
                                title: Object(s.d)("Message in a bottle", "AchievementTitle"),
                                description: function() {
                                    return Object(s.d)("Send a chat message in your own channel", "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Talking while streaming is great, but also try chatting and emoting in your own channel.", "AchievementLongDescription"),
                                levelGoals: []
                            },
                            n_days_no_viewers: {
                                title: Object(s.d)("Hang in there", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Had < {numOfViewers, number} viewers for two streams and kept at it", {
                                        numOfViewers: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("Streaming isn't easy and it takes time to attract viewers. Try inviting your friends to get started.", "AchievementLongDescription"),
                                levelGoals: [3]
                            },
                            n_max_concurrents_m_streams: {
                                title: Object(s.d)("The horde descends", "AchievementTitle"),
                                description: function(e) {
                                    return Object(s.d)("Reach at least {numOfViewers, number} viewers over five streams.", {
                                        numOfViewers: e
                                    }, "AchievementDescription")
                                },
                                longDescription: Object(s.d)("They'll tell two friends. And they'll tell two friends. And they'll tell two friends. See a pattern?", "AchievementLongDescription"),
                                levelGoals: [9999]
                            }
                        }
                    }()[e],
                    r = (t || 1) - 1;
                return n ? {
                    title: n.title,
                    description: n.description(n.levelGoals[r]),
                    longDescription: n.longDescription,
                    longDescriptionAlt: n.longDescriptionAlt
                } : {
                    title: e,
                    description: e,
                    longDescription: e
                }
            }

            function u(e, t) {
                var n = new Map;
                return e.achievements.forEach(function(e) {
                    var i = function(e, t) {
                        var n = m(e.key, e.level);
                        return new c.a({
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
                    n.set(i.id, i)
                }), {
                    quests: [],
                    achievements: new c.b(Array.from(n.values()))
                }
            }
            var d, h = n("5NYc");

            function p(e) {
                return function() {
                    var e;
                    if (d) return d;
                    return (e = {})[h.b.IT_BEGINS] = {
                        title: Object(s.d)("It Begins", "StreamSummaryQuestPanel"),
                        getInstructions: function() {
                            return Object(s.d)("Find out more about streaming on Twitch.", "AchievementsItBegins")
                        },
                        learnMoreURL: "https://www.twitch.tv/creatorcamp?tt_medium=owned_onsite_twitch&tt_content=creator_camp_creators_all_all_Dashboard&ttid=cd402988e1",
                        hasTimedCompletionWindow: !1,
                        ccuTooltipLabel: "",
                        position: 0,
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[h.a.HAS_FIRST_STREAM] = Object(s.d)("Start your first stream", "AchievementsItBegins"), e[h.a.DASHBOARD_VISITED] = Object(s.d)("Explore your dashboard", "AchievementsItBegins"), e[h.a.STREAM_TITLE_UPDATED] = Object(s.d)("Update your stream title", "AchievementsItBegins"), e[h.a.GAME_COMMUNITY_TITLE_UPDATED] = Object(s.d)("Update your Game/Category", "AchievementsItBegins"), e
                        }
                    }, e[h.b.PATH_TO_AFFILIATE] = {
                        title: Object(s.d)("Path to Affiliate", "AchievementsPathToAffiliate"),
                        getInstructions: function() {
                            return Object(s.d)("To receive invitation to the Affiliate Program, you must simultaneously meet all four requirements over a 30-day period.", "AchievementsPathToAffiliate")
                        },
                        hasTimedCompletionWindow: !0,
                        ccuTooltipLabel: Object(s.d)("Concurrent viewership including Hosts and Raids", "AchievementsPathToAffiliate"),
                        learnMoreURL: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles",
                        position: 2,
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[h.a.HOUR_COUNT] = Object(s.d)("Stream for 8 hours", "AchievementsPathToAffiliate"), e[h.a.UNIQUE_DAYS] = Object(s.d)("Stream on 7 different days", "AchievementsPathToAffiliate"), e[h.a.AVERAGE_CCU] = Object(s.d)("Average of 3 viewers", "AchievementsPathToAffiliate"), e[h.a.FOLLOW_COUNT] = Object(s.d)("Reach 50 followers", "AchievementsPathToAffiliate"), e
                        }
                    }, e[h.b.PATH_TO_PARTNER] = {
                        title: Object(s.d)("Path to Partner", "StreamSummaryQuestPanel"),
                        getInstructions: function() {
                            return Object(s.d)("To be eligible to apply to the Partner Program, you must meet all three requirements within the same 30-day period. Please note that applying does not guarantee Partnership.", "AchievementsPathToPartner")
                        },
                        learnMoreURL: "https://www.twitch.tv/p/partners",
                        hasTimedCompletionWindow: !0,
                        ccuTooltipLabel: Object(s.d)("Concurrent viewership excluding Hosts, Raids, Premieres, and Reruns", "AchievementsPathToPartner"),
                        position: 3,
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[h.a.HOUR_COUNT] = Object(s.d)("Stream for 25 hours", "AchievementsPathToPartner"), e[h.a.UNIQUE_DAYS] = Object(s.d)("Stream on 12 different days", "AchievementsPathToPartner"), e[h.a.AVERAGE_CCU] = Object(s.d)("Average of 75 viewers", "AchievementsPathToPartner"), e
                        }
                    }, e[h.b.VIP_BADGE] = {
                        title: Object(s.d)("Build a community", "VIPBadge"),
                        getInstructions: function() {
                            return Object(s.d)("It's all about loyalty.", "VIPBadge")
                        },
                        getQuestReqStrings: function() {
                            var e;
                            return (e = {})[h.a.UNIQUE_CHATTERS] = Object(s.d)("Reach 5 unique chatters in a stream", "VIPBadge"), e[h.a.FOLLOW_COUNT] = Object(s.d)("Reach 50 followers", "VIPBadge"), e
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

            function b(e, t) {
                var n = e.map(function(e) {
                    var n = function(e, t) {
                        var n = p(e.key);
                        return new c.e({
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
                return c.e.sort(n)
            }
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        quests: [],
                        achievements: new c.b,
                        isLoading: !0,
                        channelName: void 0
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.query()
                }, t.prototype.componentDidUpdate = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return (!e.channel && this.props.channel || (e.channel && e.channel.id) !== (this.props.channel && this.props.channel.id)) && this.query(), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return this.props.children(this.state)
                }, t.prototype.query = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, i;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return (e = this.props.channel) ? (this.setState({
                                        isLoading: !0
                                    }), [4, function(e) {
                                        return r.__awaiter(this, void 0, void 0, function() {
                                            var t, n, i;
                                            return r.__generator(this, function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return t = "/v5/channels/" + e.id + "/achievement_progressions", [4, Object(l.a)({
                                                            path: t
                                                        })];
                                                    case 1:
                                                        return (n = a.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            quests: [],
                                                            achievements: new c.b
                                                        }] : (i = u(n.body, e), [2, r.__assign({
                                                            isError: !1
                                                        }, i)])
                                                }
                                            })
                                        })
                                    }(e)]) : [2];
                                case 1:
                                    t = a.sent(), a.label = 2;
                                case 2:
                                    return a.trys.push([2, 4, , 5]), [4, Object(o.a)(e.id)];
                                case 3:
                                    return i = a.sent(), n = b(i, e.role), [3, 5];
                                case 4:
                                    return a.sent(), n = [], [3, 5];
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
            }(a.Component);
            n.d(t, "a", function() {
                return f
            })
        },
        "5aAj": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("fvjX"),
                o = n("/7QA"),
                c = n("yR8l"),
                l = n("V+GM"),
                s = n("NvVO"),
                m = n("2xye"),
                u = n("GnwI"),
                d = (n("wQAB"), n("TSYQ")),
                h = n("GIFg"),
                p = n("kYmV"),
                b = n("cuu2"),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(h.a, null, r.createElement(b.a, {
                            learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2877819",
                            page: p.b.Achievements
                        }))
                    }, t
                }(r.Component),
                g = n("Ue10"),
                v = (n("p81A"), {
                    "data-test-selector": "quests-col"
                }),
                y = {
                    "data-test-selector": "achs-col"
                },
                A = function(e) {
                    var t = d({
                            "ach-col": !0,
                            "ach-col--q": !0,
                            "ach-col--spotlight": e.isSpotlightShown
                        }),
                        n = d({
                            "ach-col": !0,
                            "ach-col--l": !0,
                            "ach-col--spotlight": e.isSpotlightShown
                        });
                    return r.createElement(g.yb, {
                        className: "ach-page",
                        margin: {
                            bottom: 1
                        },
                        display: g.X.Flex,
                        flexDirection: g.Z.Column,
                        flexWrap: g.Aa.NoWrap,
                        alignItems: g.f.Stretch,
                        breakpointMedium: {
                            flexDirection: g.Z.Row
                        },
                        fullHeight: !0
                    }, r.createElement(g.yb, {
                        className: "ach-col-wrapper ach-col-wrapper--q",
                        display: g.X.Flex,
                        flexWrap: g.Aa.NoWrap,
                        flexDirection: g.Z.Column,
                        flexShrink: 0,
                        breakpointMedium: {
                            display: g.X.Block
                        }
                    }, r.createElement(g.Wa, i.__assign({
                        className: t
                    }, v), r.createElement(g.Wa, {
                        padding: {
                            x: 4,
                            y: 4
                        },
                        margin: {
                            bottom: 2
                        },
                        fullHeight: !0
                    }, e.left))), r.createElement(g.yb, {
                        className: "ach-col-wrapper ach-col-wrapper--l",
                        display: g.X.Flex,
                        flexGrow: 1,
                        flexWrap: g.Aa.NoWrap,
                        flexDirection: g.Z.Column,
                        flexShrink: 0,
                        breakpointMedium: {
                            display: g.X.Block
                        }
                    }, r.createElement(g.Wa, i.__assign({
                        className: n
                    }, y), e.right)), r.createElement(f, null))
                },
                E = n("gq0V"),
                _ = n("IFXb"),
                O = n("4eyL"),
                T = n("jvBR"),
                S = n("i68L"),
                w = n("xMok"),
                j = n("5NYc"),
                x = function(e) {
                    var t = Object(E.b)(),
                        n = t ? {
                            x: .5
                        } : {},
                        i = t ? {
                            left: 1
                        } : {};
                    return r.createElement(g.yb, {
                        key: e.buttonText,
                        background: g.r.Alt2,
                        borderRadius: g.x.Large,
                        margin: i
                    }, r.createElement(g.z, {
                        targetBlank: e.targetBlank,
                        linkTo: e.url,
                        onClick: e.onClickButton,
                        type: e.buttonType
                    }, r.createElement(g.Wa, {
                        padding: n
                    }, e.buttonText)))
                };

            function k(e) {
                var t = {
                    spotlight_type: e.type,
                    achievement_key: e.achievementKey || null,
                    quest_key: e.questKey || null
                };
                o.o.track(m.SpadeEventType.AchievementSpotlightImpression, t)
            }

            function C(e) {
                var t = {
                    quest_id: e
                };
                o.o.track(m.SpadeEventType.AchievementQuestBannerClick, t)
            }
            var D = n("u2gS"),
                q = function(e) {
                    if (e.isPartner) return r.createElement(I, {
                        title: e.title,
                        subtitle: e.subtitle,
                        url: e.url
                    });
                    var t = e.url ? r.createElement(g.U, {
                        to: e.url
                    }, r.createElement(g.W, {
                        type: g.Ob.Span,
                        color: g.O.OverlayAlt
                    }, e.subtitle)) : e.subtitle;
                    return r.createElement("div", null, r.createElement(g.W, {
                        ellipsis: !0,
                        color: g.O.Overlay,
                        bold: !0,
                        fontSize: g.Ba.Size5
                    }, e.title), r.createElement(g.W, {
                        ellipsis: !0,
                        color: g.O.OverlayAlt,
                        fontSize: g.Ba.Size5
                    }, t))
                },
                I = function(e) {
                    return r.createElement(g.yb, {
                        display: g.X.Flex,
                        flexGrow: 1,
                        flexWrap: g.Aa.NoWrap,
                        alignItems: g.f.Center
                    }, r.createElement(g.Wa, {
                        display: g.X.Flex,
                        flexDirection: g.Z.Column,
                        flexGrow: 1
                    }, r.createElement(g.W, {
                        ellipsis: !0,
                        color: g.O.Overlay,
                        bold: !0,
                        fontSize: g.Ba.Size5
                    }, e.title), r.createElement(g.W, {
                        ellipsis: !0,
                        color: g.O.OverlayAlt,
                        fontSize: g.Ba.Size5
                    }, r.createElement(g.U, {
                        to: e.url
                    }, r.createElement(g.W, {
                        type: g.Ob.Span,
                        color: g.O.OverlayAlt
                    }, e.subtitle)))), r.createElement(g.yb, {
                        display: g.X.Flex,
                        color: g.O.OverlayAlt
                    }, r.createElement(g.nb, {
                        asset: g.ob.Verified
                    })))
                },
                W = function(e) {
                    return r.createElement(g.yb, {
                        display: g.X.Flex,
                        flexGrow: 1,
                        alignItems: g.f.Center
                    }, r.createElement(g.Wa, {
                        display: g.X.Flex,
                        flexDirection: g.Z.Column,
                        flexGrow: 1,
                        alignItems: g.f.Start
                    }, r.createElement(g.W, {
                        fontSize: g.Ba.Size5
                    }, r.createElement(g.W, {
                        color: g.O.Overlay,
                        type: g.Ob.Span,
                        bold: !0
                    }, e.title), !!e.subtitle && r.createElement(g.Wa, {
                        display: g.X.Inline,
                        margin: {
                            left: .5
                        }
                    }, r.createElement(g.W, {
                        color: g.O.OverlayAlt,
                        type: g.Ob.Span
                    }, e.subtitle)))), r.createElement(g.Wa, {
                        display: g.X.Flex,
                        flexShrink: 0,
                        padding: {
                            left: 2
                        }
                    }, e.children))
                },
                L = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.quest,
                            t = Object(o.d)("Congratulations! You’re a Twitch Affiliate", "AchievementsBannerPathToAffiliate"),
                            n = Object(o.d)("Congratulations! You’re a Twitch Partner", "AchievementsBannerPathToPartner"),
                            a = Object(o.d)("Learn More", "AchievementsBannerPathToAffiliate"),
                            c = null,
                            l = null;
                        switch (e.key) {
                            case j.b.PATH_TO_PARTNER:
                                e.role === D.d.Partner ? c = r.createElement(B, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: n,
                                    learnMoreText: a
                                }) : e.role === D.d.Affiliate && e.isComplete && (c = r.createElement(F, {
                                    questKey: e.key
                                }));
                                break;
                            case j.b.PATH_TO_AFFILIATE:
                                e.role === D.d.Partner ? c = r.createElement(B, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: n,
                                    learnMoreText: a
                                }) : e.role === D.d.Affiliate ? c = r.createElement(R, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: t,
                                    learnMoreText: a
                                }) : e.role === D.d.None && e.isComplete && (c = r.createElement(N, {
                                    channelLogin: this.props.channelLogin,
                                    questKey: e.key,
                                    hasAffiliateInviteError: e.hasAffiliateInviteError,
                                    bannerTitle: Object(o.d)("Congrats! You're eligible for Affiliate status.", "AchievementsBannerPathToAffiliate")
                                }));
                                break;
                            case j.b.IT_BEGINS:
                                e.role === D.d.Partner ? c = r.createElement(B, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: n,
                                    learnMoreText: a
                                }) : e.role === D.d.Affiliate ? c = r.createElement(R, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: t,
                                    learnMoreText: a
                                }) : e.isComplete && (c = r.createElement(P, null))
                        }
                        if (c) {
                            var s = Object(E.b)() ? {
                                borderRadius: g.x.Large,
                                padding: 1,
                                margin: {
                                    x: 1,
                                    top: 1
                                }
                            } : {
                                padding: 2
                            };
                            l = r.createElement(g.yb, i.__assign({}, s, {
                                background: g.r.AccentAlt2
                            }), c)
                        }
                        return l
                    }, t
                }(r.Component),
                P = function() {
                    return r.createElement(q, {
                        title: Object(o.d)("You've started your path as a Twitch streamer", "AchievementsBannerItBegins"),
                        subtitle: Object(o.d)("Which achievement will you complete next?", "AchievementsBannerItBegins")
                    })
                },
                R = function(e) {
                    return Object(E.b)() ? r.createElement(W, {
                        title: e.bannerTitle
                    }, r.createElement(x, {
                        buttonText: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles",
                        buttonType: g.F.Text,
                        targetBlank: !0
                    }), r.createElement(x, {
                        buttonText: Object(o.d)("Affiliate Settings", "AchievementsBannerPathToPartner"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue"
                    })) : r.createElement(q, {
                        title: e.bannerTitle,
                        subtitle: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles"
                    })
                },
                N = function(e) {
                    var t = function() {
                        return C(e.questKey)
                    };
                    return e.hasAffiliateInviteError ? r.createElement(W, {
                        title: e.bannerTitle,
                        subtitle: Object(o.d)("First, complete your in-progress developer onboarding.", "AchievementsBannerPathToAffiliate")
                    }, r.createElement(x, {
                        buttonText: Object(o.d)("Continue", "AchievementsBannerPathToAffiliate"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue",
                        onClickButton: t
                    })) : r.createElement(W, {
                        title: e.bannerTitle,
                        subtitle: Object(o.d)("Begin your Affiliate onboarding.", "AchievementsBannerPathToAffiliate")
                    }, r.createElement(x, {
                        buttonText: Object(o.d)("Get Started", "AchievementsBannerPathToAffiliate"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue",
                        onClickButton: t
                    }))
                },
                B = function(e) {
                    return Object(E.b)() ? r.createElement(W, {
                        title: e.bannerTitle
                    }, r.createElement(x, {
                        buttonText: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                        buttonType: g.F.Text,
                        targetBlank: !0
                    }), r.createElement(x, {
                        buttonText: Object(o.d)("Partner Settings", "AchievementsBannerPathToPartner"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue"
                    })) : r.createElement(q, {
                        title: e.bannerTitle,
                        subtitle: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                        isPartner: !0
                    })
                },
                F = function(e) {
                    return r.createElement(W, {
                        title: Object(o.d)("Apply to the Twitch Partner program.", "AchievementsBannerPathToPartner"),
                        subtitle: Object(o.d)("We usually follow up in 7 business days.", "AchievementsBannerPathToPartner")
                    }, r.createElement(x, {
                        buttonText: Object(o.d)("Apply", "AchievementsBannerPathToPartner"),
                        url: "/partner/signup",
                        onClickButton: function() {
                            return C(e.questKey)
                        }
                    }))
                },
                G = function(e) {
                    var t = Object(o.d)("Completed", "AchievementsQuests"),
                        n = function() {
                            return Object(E.b)() ? r.createElement(g.yb, {
                                fontSize: g.Ba.Size4
                            }, r.createElement(g.bb, {
                                label: t,
                                type: g.cb.Success
                            })) : r.createElement(g.bb, {
                                label: t,
                                type: g.cb.Success
                            })
                        };
                    return e.completedAt ? r.createElement(g.Rb, {
                        label: Object(o.c)(e.completedAt, "long"),
                        direction: g.Tb.Left
                    }, n()) : n()
                },
                U = n("y/W1"),
                z = n("qe41"),
                M = n("9+Lo"),
                H = (n("qCmY"), function(e) {
                    var t = Object(E.b)(),
                        n = e.quest.completedRequirementsCount,
                        a = e.quest.totalRequirements,
                        c = d({
                            "ach-q-card": t && e.isActive,
                            "ach-q-item": !0,
                            "ach-q-item--expanded": e.isActive,
                            "quest-header": !0
                        }),
                        l = !1,
                        s = Object(U.c)(e.quest.requirements),
                        m = e.quest.getInstructions(),
                        u = e.quest.getQuestReqStrings(),
                        h = Boolean(e.quest.isComplete),
                        p = e.channelLogin,
                        b = e.isActive ? {
                            padding: {
                                x: 1
                            }
                        } : {
                            padding: {
                                x: 1,
                                bottom: 1
                            }
                        },
                        f = t && !e.isActive ? {
                            color: g.O.Link
                        } : {
                            color: g.O.Alt
                        },
                        v = t ? {} : {
                            padding: {
                                x: 1
                            }
                        },
                        y = t ? {
                            borderRadius: g.x.Large,
                            elevation: e.isActive ? 0 : 1,
                            margin: {
                                bottom: 1
                            },
                            background: g.r.Base
                        } : {
                            border: !0,
                            margin: {
                                bottom: 2
                            },
                            elevation: e.isActive ? 0 : 1
                        };
                    return r.createElement(g.yb, i.__assign({
                        className: c,
                        position: g.eb.Relative
                    }, y), r.createElement(g.Ta, {
                        onClick: e.onHeaderClick,
                        blurAfterClick: !0
                    }, r.createElement(g.yb, i.__assign({
                        className: "ach-q-item__header quest-header",
                        display: g.X.Flex
                    }, b, {
                        borderBottom: !0,
                        alignItems: g.f.Center
                    }), r.createElement(g.Wa, {
                        display: g.X.Flex,
                        flexGrow: 1,
                        flexWrap: g.Aa.NoWrap,
                        alignItems: g.f.Center
                    }, r.createElement(g.Wa, i.__assign({
                        display: g.X.Flex,
                        flexGrow: 1,
                        fullHeight: !0
                    }, v, {
                        alignItems: g.f.Center
                    }), t && r.createElement(g.yb, {
                        borderRadius: g.x.Large,
                        className: "quest-header__badge-wrap",
                        margin: {
                            right: 1
                        },
                        overflow: g.Za.Hidden
                    }, r.createElement(g.S, {
                        src: e.quest.image,
                        alt: Object(o.d)("quest image", "AchievementsQuestCard")
                    })), r.createElement(g.W, i.__assign({
                        className: "ach-q-item__title",
                        type: g.Ob.Strong
                    }, f, {
                        fontSize: g.Ba.Size4
                    }), e.quest.title)), !h && r.createElement(g.Rb, {
                        label: Object(U.b)(n, a),
                        direction: g.Tb.Left
                    }, r.createElement(g.yb, {
                        display: g.X.Flex,
                        fullHeight: !0,
                        padding: {
                            right: 1
                        },
                        color: g.O.Alt2
                    }, function(e, n) {
                        var i = [];
                        if (!t) return r.createElement(g.W, {
                            className: "ach-q-item__label",
                            color: g.O.Alt2,
                            fontSize: g.Ba.Size5
                        }, Object(U.b)(e, n));
                        for (var a = 0; a < e; a++) i.push(r.createElement(g.yb, {
                            key: "completeReqBar-" + a,
                            className: "quest-progress-bars quest-progress-bars__complete",
                            borderRadius: g.x.Large,
                            margin: {
                                left: .5
                            }
                        }));
                        for (a = 0; a < n - e; a++) i.push(r.createElement(g.yb, {
                            key: "incompleteReqBar-" + a,
                            className: "quest-progress-bars quest-progress-bars__incomplete",
                            borderRadius: g.x.Large,
                            margin: {
                                left: .5
                            },
                            background: g.r.Alt2
                        }));
                        return i
                    }(n, a))), h && r.createElement(g.Wa, {
                        display: g.X.Flex
                    }, r.createElement(g.Wa, {
                        alignItems: g.f.Center,
                        flexGrow: 0,
                        display: g.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, r.createElement(G, {
                        completedAt: e.quest.completedAt
                    })))))), r.createElement(L, {
                        quest: e.quest,
                        channelLogin: p
                    }), r.createElement(g.yb, {
                        background: g.r.Base
                    }, s.map(function(t) {
                        return r.createElement(g.Wa, {
                            key: t.metric
                        }, function(t) {
                            if (!e.quest.isComplete && t.time_based && !l) return l = !0, r.createElement(M.a, {
                                channelLogin: p,
                                questKey: e.quest.key
                            })
                        }(t), r.createElement(z.a, {
                            requirement: t,
                            requirementInstructionString: u,
                            isComplete: e.quest.isComplete,
                            subtext: t.metric === j.a.AVERAGE_CCU ? Object(U.a)(e.quest.requirements) : void 0,
                            ccuTooltipLabel: e.quest.ccuTooltipLabel
                        }))
                    })), r.createElement(g.yb, {
                        display: g.X.Flex,
                        padding: 1,
                        background: t ? g.r.Alt : g.r.Alt2
                    }, r.createElement(g.Wa, {
                        padding: {
                            top: .5,
                            bottom: .5
                        },
                        margin: {
                            left: 1,
                            right: .5
                        },
                        display: g.X.Flex,
                        alignItems: g.f.Center
                    }, r.createElement(g.W, {
                        color: g.O.Alt2,
                        fontSize: g.Ba.Size6,
                        type: g.Ob.Span
                    }, m, " ", r.createElement(g.U, {
                        targetBlank: !0,
                        to: e.quest.learnMoreURL
                    }, Object(o.d)("Learn more", "AchievementsPathToAffiliate"))))))
                }),
                X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userSelectedQuest: void 0
                        }, t.handleActivate = function(e) {
                            t.state.userSelectedQuest !== e && t.setState({
                                userSelectedQuest: e
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.state.userSelectedQuest || this.props.quests[0],
                            n = this.props.quests.map(function(n) {
                                return r.createElement(H, {
                                    key: n.key,
                                    quest: n,
                                    channelLogin: e.props.channel.name,
                                    onHeaderClick: function() {
                                        return e.handleActivate(n)
                                    },
                                    isActive: n === t
                                })
                            });
                        return r.createElement(g.Wa, {
                            fullHeight: !0
                        }, this.props.isLoading ? this.renderPlaceholders() : n)
                    }, t.prototype.renderPlaceholders = function() {
                        return [r.createElement(g.Wa, {
                            margin: {
                                bottom: 2
                            },
                            key: "opened-quest"
                        }, r.createElement(g.db, {
                            height: 450
                        })), r.createElement(g.Wa, {
                            margin: {
                                bottom: 2
                            },
                            key: "collasped-quest-1"
                        }, r.createElement(g.db, {
                            height: 62
                        })), r.createElement(g.Wa, {
                            margin: {
                                bottom: 2
                            },
                            key: "collasped-quest-2"
                        }, r.createElement(g.db, {
                            height: 62
                        }))]
                    }, t
                }(r.Component),
                Q = n("j8bx"),
                V = n("Tc9I"),
                Y = {
                    "data-test-selector": "title"
                },
                K = {
                    "data-test-selector": "subtitle"
                },
                Z = {
                    "data-test-selector": "dismiss"
                },
                J = n("FuXV"),
                $ = function(e) {
                    var t = e.title,
                        n = e.subtitle;
                    return r.createElement(g.yb, {
                        position: g.eb.Relative,
                        padding: 2,
                        textAlign: g.Kb.Center,
                        className: "ach-sb",
                        elevation: 1,
                        border: !0
                    }, r.createElement(J.a, {
                        confettiCount: 40,
                        infinite: !0
                    }), r.createElement(g.Wa, {
                        margin: {
                            left: 1
                        },
                        position: g.eb.Relative,
                        zIndex: g.bc.Above,
                        className: "ach-sb__text"
                    }, r.createElement(g.W, i.__assign({}, Y, {
                        fontSize: g.Ba.Size4,
                        bold: !0,
                        ellipsis: !0
                    }), t), r.createElement(g.W, i.__assign({}, K, {
                        fontSize: g.Ba.Size5,
                        color: g.O.Alt2,
                        ellipsis: !0
                    }), n)))
                },
                ee = function(e) {
                    var t = Object(E.b)() ? {} : {
                        top: 3,
                        x: 4
                    };
                    return r.createElement(g.yb, {
                        position: g.eb.Absolute,
                        margin: t,
                        zIndex: g.bc.Above,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, r.createElement(g.i, {
                        type: g.n.BounceIn,
                        duration: g.k.Medium,
                        enabled: !0,
                        timing: g.m.EaseInOut
                    }, e.children, r.createElement(g.Wa, {
                        className: "ach-sb__dismiss",
                        position: g.eb.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, r.createElement(g.A, i.__assign({}, Z, {
                        ariaLabel: Object(o.d)("Close", "AchievementSpotlightDismiss"),
                        type: g.C.Default,
                        size: g.B.Large,
                        icon: g.ob.Close,
                        onClick: e.onDismissSpotlight
                    })))))
                },
                te = "https://static-cdn.jtvnw.net/emoticons/v1/135393/3.0",
                ne = "PartyTime",
                ie = function() {
                    var e = Object(o.d)("Celebrate milestones and track your progress towards becoming an Affiliate or Partner.", "AchievementsSpotlight"),
                        t = Object(o.d)("Learn more", "AchievementsSpotlight");
                    return r.createElement(g.yb, {
                        padding: 2,
                        className: "ach-sb",
                        display: g.X.Flex,
                        alignItems: g.f.Center,
                        elevation: 1,
                        border: !0
                    }, r.createElement(g.yb, {
                        display: g.X.Flex,
                        fullWidth: !0,
                        flexWrap: g.Aa.NoWrap
                    }, r.createElement(g.Wa, {
                        display: g.X.Flex,
                        flexShrink: 0,
                        alignContent: g.e.Center,
                        alignItems: g.f.Center
                    }, r.createElement(g.q, {
                        src: te,
                        alt: ne,
                        size: 30
                    })), r.createElement(g.Wa, {
                        flexGrow: 1,
                        margin: {
                            left: 1
                        },
                        className: "ach-sb__text"
                    }, r.createElement(g.W, i.__assign({}, Y, {
                        fontSize: g.Ba.Size4,
                        bold: !0,
                        ellipsis: !0
                    }), Object(o.d)("Welcome to Achievements", "AchievementsSpotlight")), r.createElement(g.W, i.__assign({}, K, {
                        fontSize: g.Ba.Size5,
                        color: g.O.Alt2,
                        ellipsis: !0
                    }), e, " ", r.createElement("a", {
                        target: "_blank",
                        href: "https://help.twitch.tv/customer/portal/articles/2877819"
                    }, t)))))
                },
                re = (n("kD0Y"), "achievement-spotlights"),
                ae = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            didDismiss: !1
                        }, n.dismissedSpotlights = {}, n.handleDismissSpotlight = function() {
                            n.setState({
                                didDismiss: !0
                            }, n.handleViewSpotlight)
                        }, n.handleViewSpotlight = function() {
                            var e, t = n.dismissedSpotlights[n.spotlightKey],
                                r = "number" == typeof t ? t + 1 : 1,
                                a = i.__assign({}, n.dismissedSpotlights, ((e = {})[n.spotlightKey] = r, e));
                            return o.m.set(re, a), r
                        }, n.dismissedSpotlights = o.m.get(re, {}), n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        if (!this.props.isLoading && !this.currentSpotlightWasDismissed) {
                            this.handleViewSpotlight();
                            var t = void 0;
                            switch (this.bannerType) {
                                case j.b.PATH_TO_PARTNER:
                                    t = r.createElement(oe, null);
                                    break;
                                case j.b.PATH_TO_AFFILIATE:
                                    t = r.createElement(ce, null);
                                    break;
                                case j.b.IT_BEGINS:
                                    t = r.createElement(le, null);
                                    break;
                                default:
                                    t = r.createElement(ie, null)
                            }
                            e = r.createElement(ee, {
                                onDismissSpotlight: this.handleDismissSpotlight
                            }, t)
                        }
                        return r.createElement(g.Wa, {
                            fullHeight: !0
                        }, e, this.props.children(Boolean(e)))
                    }, Object.defineProperty(t.prototype, "spotlightKey", {
                        get: function() {
                            return this.props.channelName + "-" + this.bannerType
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "bannerType", {
                        get: function() {
                            var e = Q.a.topCelebratable(this.props.quests);
                            return e ? e.key : "first_time"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "currentSpotlightWasDismissed", {
                        get: function() {
                            return this.state.didDismiss || this.dismissedSpotlights[this.spotlightKey]
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.PureComponent),
                oe = function() {
                    var e = Object(V.b)(j.b.PATH_TO_PARTNER),
                        t = r.createElement(se, {
                            title: e.title
                        }),
                        n = e.bannerTitle(t);
                    return k({
                        type: "quest",
                        questKey: j.b.PATH_TO_PARTNER
                    }), r.createElement($, {
                        title: n,
                        subtitle: e.subtitle
                    })
                },
                ce = function() {
                    var e = Object(V.b)(j.b.PATH_TO_AFFILIATE),
                        t = r.createElement(se, {
                            title: e.title
                        }),
                        n = e.bannerTitle(t);
                    return k({
                        type: "quest",
                        questKey: j.b.PATH_TO_AFFILIATE
                    }), r.createElement($, {
                        title: n,
                        subtitle: e.subtitle
                    })
                },
                le = function() {
                    var e = Object(V.b)(j.b.IT_BEGINS),
                        t = r.createElement(se, {
                            title: e.title
                        }),
                        n = e.bannerTitle(t);
                    return k({
                        type: "quest",
                        questKey: j.b.IT_BEGINS
                    }), r.createElement($, {
                        title: n,
                        subtitle: e.subtitle
                    })
                },
                se = function(e) {
                    var t = e.title;
                    return r.createElement(g.W, {
                        type: g.Ob.Span,
                        color: g.O.OverlayAlt
                    }, t)
                },
                me = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        o.p.setPageTitle(Object(o.d)("Achievements", "DashboardAchievementsPage"))
                    }, t.prototype.render = function() {
                        var e = T.a.fromChannelData(this.props.data);
                        return e ? r.createElement(O.a, {
                            channel: e
                        }, function(t) {
                            return Object(E.b)() ? r.createElement(_.a, null, r.createElement(ae, i.__assign({}, t, {
                                channelName: e.name
                            }), function() {
                                return r.createElement(g.Wa, null, r.createElement(X, {
                                    quests: t.quests,
                                    channel: e,
                                    isLoading: t.isLoading
                                }), r.createElement(w.a, {
                                    achievements: t.achievements,
                                    isLoading: t.isLoading
                                }))
                            })) : r.createElement(ae, i.__assign({}, t, {
                                channelName: e.name
                            }), function(n) {
                                return r.createElement(A, {
                                    isSpotlightShown: n,
                                    left: r.createElement(X, {
                                        quests: t.quests,
                                        channel: e,
                                        isLoading: t.isLoading
                                    }),
                                    right: r.createElement(w.a, {
                                        achievements: t.achievements,
                                        isLoading: t.isLoading
                                    })
                                })
                            })
                        }) : null
                    }, t
                }(r.Component),
                ue = Object(a.compose)(Object(c.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.match.params.channelName
                            }
                        }
                    }
                }), Object(u.b)("AchievementsPage", {
                    destination: s.a.ChannelDashboardAchievements,
                    autoReportInteractive: !0
                }), Object(l.a)({
                    location: m.PageviewLocation.DashboardAchievements
                }))(me);
            n.d(t, "AchievementsPageComponent", function() {
                return me
            }), n.d(t, "AchievementsPage", function() {
                return ue
            })
        },
        "9+Lo": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("NAv5"),
                a = n("cr+I"),
                o = n("q1tI"),
                c = n("/7QA"),
                l = n("5NYc"),
                s = n("gq0V"),
                m = n("Ue10"),
                u = function(e) {
                    var t = new Date,
                        n = Object(r.subDays)(t, 29),
                        u = Object(s.b)() ? {
                            borderRadius: m.x.Large,
                            display: m.X.Flex,
                            margin: {
                                x: 1,
                                top: 1
                            },
                            padding: 1,
                            background: m.r.Alt
                        } : {
                            display: m.X.Flex,
                            padding: 1,
                            background: m.r.Alt,
                            borderTop: !0,
                            borderBottom: !0
                        };
                    return o.createElement(m.yb, i.__assign({}, u), o.createElement(m.Wa, {
                        padding: {
                            left: 1
                        },
                        flexGrow: 1
                    }, o.createElement(m.W, {
                        color: m.O.Alt2
                    }, Object(c.d)("<x:strong>30-day Performance</x:strong> ({startDate, date, short} - {endDate, date, short})", {
                        "x:strong": function(e) {
                            return o.createElement(m.W, {
                                bold: !0,
                                type: m.Ob.Span
                            }, e)
                        },
                        startDate: n,
                        endDate: t
                    }, "QuestTimeFrameBar"))), e.questKey !== l.b.PATH_TO_PARTNER && o.createElement(m.Wa, {
                        padding: {
                            right: 1
                        }
                    }, o.createElement(m.U, {
                        to: {
                            pathname: "/" + e.channelLogin + "/dashboard/channel-analytics",
                            search: "?" + a.stringify({
                                start: Object(r.format)(n, "YYYY-MM-DD"),
                                end: Object(r.format)(t, "YYYY-MM-DD")
                            })
                        }
                    }, Object(c.d)("View 30-day stats", "QuestTimeFrameBar"))))
                };
            n.d(t, "a", function() {
                return u
            })
        },
        FuXV: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("TSYQ"),
                a = n("q1tI"),
                o = n("ll/k"),
                c = n("Ue10"),
                l = (n("0eTn"), ["confetti-layer__confetti--slow", "confetti-layer__confetti--medium", "confetti-layer__confetti--fast"]),
                s = ["rgba(247, 42, 107, 1)", "rgba(255, 113, 105, 1)", "rgba(253, 226, 132, 1)", "rgba(181, 138, 242, 1)"],
                m = ["0.011s", "0.176s", "0.321s", "0.446s", "0.849s", "1.056s", "1.229s", "1.333s", "1.379s", "1.828s"],
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = r({
                                "confetti-layer__confetti": !0,
                                "confetti-layer__confetti--infinite": this.props.infinite
                            });
                        return a.createElement(c.Wa, {
                            className: "confetti-layer",
                            position: c.eb.Absolute,
                            overflow: c.Za.Hidden,
                            zIndex: c.bc.Default,
                            attachTop: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            attachLeft: !0
                        }, Object(o.c)(this.props.confettiCount, function(n) {
                            return a.createElement("div", {
                                key: n,
                                className: t + " " + Object(o.b)(l),
                                style: {
                                    position: "absolute",
                                    left: Object(o.a)(2, 95) + "%",
                                    width: Object(o.a)(4, 10) + "px",
                                    height: Object(o.a)(4, 10) + "px",
                                    backgroundColor: "" + Object(o.b)(e.props.colors),
                                    animationDelay: "" + Object(o.b)(m)
                                }
                            })
                        }))
                    }, t.defaultProps = {
                        colors: s
                    }, t
                }(a.PureComponent);
            n.d(t, "a", function() {
                return u
            })
        },
        MjdR: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("TSYQ"),
                a = n("q1tI"),
                o = n("gi7w"),
                c = n("gq0V"),
                l = n("Ue10"),
                s = function(e) {
                    var t = Object(c.b)(),
                        n = t && {
                            overflow: l.Za.Hidden,
                            borderRadius: l.x.Large
                        },
                        s = r({
                            "ach-card__badge-wrap": !t,
                            "ach-card-vip__badge-wrap": t
                        }),
                        m = r({
                            "ach-card__badge": !t,
                            "ach-card-vip__badge": t
                        }),
                        u = t && {
                            borderRadius: l.x.Large
                        };
                    return a.createElement(l.Wa, i.__assign({
                        display: l.X.Flex,
                        flexWrap: l.Aa.NoWrap,
                        position: l.eb.Relative,
                        flexShrink: 0
                    }, u), a.createElement(l.Wa, {
                        className: s,
                        position: l.eb.Relative,
                        flexShrink: 0
                    }, a.createElement(l.yb, i.__assign({
                        className: m,
                        background: l.r.Alt2
                    }, n), a.createElement("img", {
                        alt: e.achievement.title,
                        className: "ach-card__img",
                        src: e.achievement.image.scale1x,
                        srcSet: e.achievement.image.scale1x + " 1x, " + e.achievement.image.scale3x + " 3x"
                    })), Boolean(e.achievement.level) && a.createElement(l.yb, {
                        className: "ach-card__lvl",
                        position: l.eb.Absolute,
                        background: l.r.Alt
                    }, a.createElement(l.s, {
                        border: !0,
                        icon: Object(o.a)(e.achievement.level),
                        size: 20,
                        type: l.t.Dashboard
                    }))), a.createElement(l.yb, {
                        overflow: l.Za.Hidden,
                        display: l.X.Flex,
                        justifyContent: l.Va.Center,
                        flexDirection: l.Z.Column,
                        margin: {
                            left: 2
                        }
                    }, a.createElement(l.W, {
                        fontSize: l.Ba.Size4,
                        color: l.O.Alt,
                        bold: !0,
                        ellipsis: !0
                    }, e.achievement.title), a.createElement(l.W, {
                        fontSize: l.Ba.Size5,
                        color: l.O.Alt2,
                        ellipsis: !0
                    }, e.achievement.description)), a.createElement(l.yb, {
                        className: "ach-card__progress-meta",
                        display: l.X.Flex,
                        alignContent: l.e.Center,
                        alignItems: l.f.Center,
                        justifyContent: l.Va.End,
                        flexGrow: 1,
                        flexShrink: 0,
                        margin: {
                            left: 1
                        }
                    }, e.children))
                };
            n.d(t, "a", function() {
                return s
            })
        },
        S3iq: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("TSYQ"),
                a = n("q1tI"),
                o = n("MjdR"),
                c = n("gq0V"),
                l = n("6XEL"),
                s = n("Ue10"),
                m = {
                    "data-test-selector": "achievement-card"
                },
                u = function(e) {
                    return a.createElement(s.U, i.__assign({
                        className: "ach-link",
                        "aria-hidden": e.isHidden,
                        tabIndex: e.isHidden ? -1 : void 0,
                        to: l.b.achievement(e.achievement)
                    }, m, {
                        hoverUnderlineNone: !0
                    }), a.createElement(d, {
                        achievement: e.achievement,
                        className: e.layoutClassName
                    }, e.children))
                },
                d = function(e) {
                    var t, n = Object(c.b)(),
                        l = r(e.className, {
                            "ach-card": !n,
                            "ach-card-vip": n,
                            "ach-card-vip--completed": Boolean(e.achievement.completedAt),
                            "ach-card--recent": e.achievement.wasRecentlyCompleted()
                        }),
                        m = n && {
                            padding: 1
                        };
                    return e.achievement.completedAt || (t = a.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, a.createElement(s.hb, {
                        size: s.jb.ExtraSmall,
                        value: 100 * e.achievement.progressRatio
                    }))), a.createElement(s.yb, i.__assign({
                        className: l,
                        position: s.eb.Relative
                    }, m), a.createElement(s.yb, {
                        className: "ach-card__inner"
                    }, a.createElement(o.a, {
                        achievement: e.achievement
                    }, a.createElement("div", null, e.children, !n && t)), n && t))
                };
            n.d(t, !1, function() {
                return m
            }), n.d(t, "a", function() {
                return u
            })
        },
        Tc9I: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return c
            });
            var i, r = n("/7QA"),
                a = n("5NYc");

            function o(e) {
                return function() {
                    var e;
                    return i || ((e = {})[a.b.PATH_TO_PARTNER] = {
                        title: Object(r.d)("Path to Partner", "AchievementsSpotlightPathToPartner"),
                        bannerTitle: function(e) {
                            return Object(r.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToPartner")
                        },
                        subtitle: Object(r.d)("Apply to become a Twitch Partner today", "AchievementsSpotlightPathToPartner")
                    }, e[a.b.PATH_TO_AFFILIATE] = {
                        title: Object(r.d)("Path to Affiliate", "AchievementsSpotlightPathToAffiliate"),
                        bannerTitle: function(e) {
                            return Object(r.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToAffiliate")
                        },
                        subtitle: Object(r.d)("You're eligible to become a Twitch Affiliate", "AchievementsSpotlightPathToAffiliate")
                    }, e[a.b.IT_BEGINS] = {
                        title: Object(r.d)("It Begins", "AchievementsSpotlightItBegins"),
                        bannerTitle: function(e) {
                            return Object(r.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightItBegins")
                        },
                        subtitle: Object(r.d)("Which achievement will you complete next?", "AchievementsSpotlightItBegins")
                    }, e[a.b.VIP_BADGE] = {
                        title: "",
                        bannerTitle: function(e) {
                            return ""
                        },
                        subtitle: ""
                    }, i = e), i
                }()[e] || e
            }

            function c() {
                return {
                    spotlightDismiss: Object(r.d)("Close", "StreamSummarySpotlightDismiss")
                }
            }
        },
        bF3S: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("tmT/"),
                o = n("Ue10"),
                c = function(e) {
                    return i.createElement(o.Wa, {
                        display: o.X.Flex,
                        justifyContent: o.Va.End
                    }, i.createElement(o.nb, {
                        type: e.checkMarkType,
                        asset: o.ob.Check,
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
                if (e.isComplete) return i.createElement(c, {
                    checkMarkType: o.pb.Success
                });
                if (e.completedAt) return i.createElement(a.a, {
                    date: e.completedAt
                });
                if (1 === n && 1 === t) return i.createElement(c, {
                    checkMarkType: o.pb.Alt
                });
                var l = function() {
                    return i.createElement(o.Wa, {
                        position: o.eb.Relative,
                        display: o.X.Flex,
                        alignItems: o.f.Center
                    }, i.createElement(o.W, {
                        className: t >= n ? "quest-requirement-card-progress__success" : "quest-requirement-card-progress",
                        color: t >= n ? void 0 : o.O.Alt2,
                        bold: !0,
                        fontSize: o.Ba.Size4,
                        type: o.Ob.Span
                    }, Object(r.f)(Math.floor(100 * t) / 100)), i.createElement(o.Wa, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(o.W, {
                        fontSize: o.Ba.Size5,
                        color: o.O.Alt2,
                        type: o.Ob.Span
                    }, "/")), i.createElement(o.W, {
                        fontSize: o.Ba.Size5,
                        color: o.O.Alt2
                    }, Object(r.g)(e.progressCap)))
                };
                return t > 999 ? i.createElement(o.Rb, {
                    label: Object(r.f)(Math.floor(100 * t) / 100),
                    direction: o.Tb.Left
                }, l()) : l()
            }
        },
        gi7w: function(e, t, n) {
            "use strict";
            var i = n("Ue10"),
                r = {
                    1: i.ob.Roman1,
                    2: i.ob.Roman2,
                    3: i.ob.Roman3,
                    4: i.ob.Roman4,
                    5: i.ob.Roman5
                };

            function a(e) {
                return r[e]
            }
            var o = {
                1: "I",
                2: "II",
                3: "III",
                4: "IV",
                5: "V"
            };

            function c(e) {
                return o[e]
            }
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return c
            })
        },
        i68L: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardAchievements_Channel"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelName"
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
                                        value: "channelName"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 142
                }
            };
            n.loc.source = {
                body: "query DashboardAchievements_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kD0Y: function(e, t, n) {},
        "ll/k": function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (void 0 === t && (t = 0), t > e) {
                    var n = t;
                    t = e, e = n
                }
                return t + Math.floor(Math.random() * (e - t + 1))
            }

            function r(e) {
                return e[i(e.length - 1)]
            }

            function a(e, t) {
                for (var n = 0, i = []; n < e;) i.push(t(n)), n += 1;
                return i
            }
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            })
        },
        p81A: function(e, t, n) {},
        qCmY: function(e, t, n) {},
        qe41: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("5NYc"),
                c = n("bF3S"),
                l = n("Ue10");
            n("wd1L");
            ! function(e) {
                e.QUEST_REQUIREMENT_PROGRESS = "quest-requirement-progress", e.QUEST_SUBTEXT = "quest-subtext"
            }(i || (i = {}));
            var s = function(e) {
                var t = e.requirement,
                    n = t.metric === o.a.AVERAGE_CCU;
                return a.createElement(l.yb, {
                    position: l.eb.Relative,
                    display: l.X.Flex,
                    alignItems: l.f.Center,
                    padding: {
                        y: 2,
                        left: 2
                    },
                    borderBottom: !0
                }, a.createElement(l.Wa, r.__assign({
                    display: l.X.Flex,
                    flexGrow: 1,
                    alignItems: l.f.Center
                }, n ? {} : {
                    padding: {
                        right: 3
                    },
                    flexGrow: 1
                }), a.createElement(l.Wa, null, a.createElement(l.Wa, {
                    display: l.X.Flex,
                    alignItems: l.f.Center
                }, a.createElement(l.W, {
                    bold: !0,
                    fontSize: l.Ba.Size5
                }, e.requirementInstructionString[t.metric]), n && a.createElement(l.Wa, {
                    display: l.X.Flex,
                    padding: {
                        left: .5,
                        right: 3
                    }
                }, a.createElement(l.Rb, {
                    label: e.ccuTooltipLabel,
                    direction: l.Tb.Top,
                    width: 230
                }, a.createElement(l.nb, {
                    asset: l.ob.NotificationInfo,
                    width: 16,
                    height: 16,
                    type: l.pb.Alt2
                })))), e.subtext && !e.isComplete && a.createElement(l.W, {
                    color: l.O.Alt2,
                    "data-test-selector": i.QUEST_SUBTEXT
                }, e.subtext))), a.createElement(l.Wa, {
                    display: l.X.Flex,
                    justifyContent: l.Va.End,
                    padding: {
                        right: 2
                    },
                    flexShrink: 0
                }, a.createElement(c.a, {
                    "data-test-selector": i.QUEST_REQUIREMENT_PROGRESS,
                    progress: t.progress,
                    progressCap: t.progress_cap,
                    isComplete: e.isComplete
                })))
            };
            n.d(t, !1, function() {
                return i
            }), n.d(t, "a", function() {
                return s
            })
        },
        "tmT/": function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("Ue10"),
                o = function(e) {
                    var t = Object(r.d)("Completed on {completedAt, date, short}", {
                            completedAt: e.date
                        }, "AchievementCard"),
                        n = Object(r.c)(e.date, "short");
                    return i.createElement(a.W, {
                        fontSize: a.Ba.Size5,
                        color: a.O.Alt2,
                        title: t
                    }, n)
                };
            n.d(t, "a", function() {
                return o
            })
        },
        vYsf: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                r = n("b6Yk");

            function a(e) {
                return i.__awaiter(this, void 0, Promise, function() {
                    var t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.a.get("/v5/channels/" + e + "/quests")];
                            case 1:
                                if (t = i.sent(), n = t.body, 200 !== t.status || !n) throw new Error("failed to fetch quests");
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
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("4p7I"),
                o = n("/7QA"),
                c = n("S3iq"),
                l = n("tmT/"),
                s = n("Ue10"),
                m = function(e) {
                    return 0 === e.achievement.progress ? r.createElement("span", null) : e.achievement.completedAt ? r.createElement(s.Wa, {
                        display: s.X.InlineFlex,
                        alignItems: s.f.Center
                    }, r.createElement(l.a, {
                        date: e.achievement.completedAt
                    })) : r.createElement(s.yb, {
                        className: "ach-card__pill-wrapper",
                        fontSize: s.Ba.Size5
                    }, r.createElement(s.bb, {
                        label: Object(o.f)(e.achievement.progressRatio, "percent")
                    }))
                },
                u = n("TSYQ"),
                d = n("MjdR"),
                h = n("gq0V"),
                p = n("6XEL"),
                b = {
                    src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                    alt: "VoHiYo"
                },
                f = function(e) {
                    var t = Object(h.b)(),
                        n = u({
                            "ach-card": !0,
                            "ach-card--expanded": !t,
                            "ach-card-vip--expanded-vip": t,
                            "ach-card-vip--completed": !t && Boolean(e.achievement.completedAt),
                            "ach-card--completed": !t && Boolean(e.achievement.completedAt),
                            "ach-card--recent": e.achievement.wasRecentlyCompleted()
                        }),
                        a = t ? {
                            fullWidth: !0,
                            padding: 1
                        } : {
                            elevation: 4
                        },
                        o = t && {
                            display: s.X.Flex,
                            flexGrow: 1,
                            margin: {
                                y: 2
                            },
                            zIndex: s.bc.Above,
                            borderRadius: s.x.Large,
                            fullWidth: !0,
                            fullHeight: !0
                        },
                        c = t ? {
                            display: s.X.Flex,
                            flexWrap: s.Aa.NoWrap,
                            alignItems: s.f.Center,
                            flexGrow: 1,
                            padding: 1,
                            background: s.r.Alt,
                            borderRadius: s.x.Large
                        } : {
                            display: s.X.Flex,
                            flexWrap: s.Aa.NoWrap,
                            alignItems: s.f.Center,
                            flexGrow: 1,
                            padding: 1,
                            background: s.r.Alt2,
                            border: !0
                        };
                    return r.createElement(s.yb, i.__assign({
                        className: n,
                        position: s.eb.Relative
                    }, o), r.createElement(s.yb, i.__assign({
                        className: "ach-card__inner"
                    }, a, {
                        refDelegate: e.refDelegate
                    }), r.createElement(d.a, {
                        achievement: e.achievement
                    }, t ? void 0 : r.createElement(g, {
                        achievement: e.achievement
                    })), r.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, r.createElement(s.A, {
                        ariaLabel: "Close",
                        icon: s.ob.Close,
                        linkTo: p.b.channelAchievements(e.achievement.channelName)
                    })), r.createElement(s.Wa, {
                        display: s.X.Flex,
                        flexGrow: 1,
                        position: s.eb.Relative,
                        padding: {
                            top: 1
                        }
                    }, r.createElement(s.yb, i.__assign({}, c), r.createElement(s.q, i.__assign({}, b, {
                        size: 30
                    })), r.createElement(s.yb, {
                        color: s.O.Alt,
                        margin: {
                            left: .5
                        },
                        padding: {
                            left: 1
                        }
                    }, r.createElement("p", null, e.achievement.longDescription))))))
                },
                g = function(e) {
                    return 0 === e.achievement.progress ? r.createElement("span", null) : e.achievement.completedAt ? r.createElement(l.a, {
                        date: e.achievement.completedAt
                    }) : r.createElement(s.yb, {
                        className: "ach-card__pill-wrapper",
                        fontSize: s.Ba.Size5
                    }, r.createElement(s.bb, {
                        label: Object(o.f)(e.achievement.progressRatio, "percent")
                    }))
                },
                v = n("bF3S"),
                y = n("FuXV"),
                A = n("eAwD"),
                E = {
                    "data-test-selector": "recently-completed-achievements-list"
                },
                _ = {
                    "data-test-selector": "not-completed-achievements-list"
                },
                O = {
                    "data-test-selector": "past-completed-achievements-list"
                },
                T = function(e) {
                    var t = Object(h.b)() ? {
                        y: 4
                    } : {
                        x: 4,
                        y: 4
                    };
                    return r.createElement(s.Wa, {
                        padding: t,
                        margin: {
                            bottom: 2
                        }
                    }, e.isLoading ? x() : r.createElement(S, {
                        achievements: e.achievements
                    }))
                },
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            didCelebrate: !1
                        }, t.timeoutID = 0, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        return r.createElement("div", {
                            className: "ach-page"
                        }, Boolean(this.props.achievements.topRecentlyCompleted.length) && r.createElement(s.Wa, i.__assign({
                            margin: {
                                bottom: 3
                            }
                        }, E), r.createElement(s.Wa, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(s.W, {
                            type: s.Ob.H3,
                            fontSize: s.Ba.Size4,
                            bold: !0
                        }, Object(o.d)("Recently Completed", "AchievementsList"))), this.props.achievements.topRecentlyCompleted.map(function(t) {
                            return r.createElement(w, {
                                achievement: t,
                                key: t.id
                            }, !e.state.didCelebrate && r.createElement(y.a, {
                                confettiCount: 30
                            }))
                        })), Boolean(this.props.achievements.notCompleted.length) && r.createElement("div", i.__assign({}, _), r.createElement(s.Wa, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(s.W, {
                            type: s.Ob.H3,
                            fontSize: s.Ba.Size4,
                            bold: !0
                        }, Object(o.d)("In Progress", "AchievementsList"))), this.props.achievements.notCompleted.map(function(e) {
                            return r.createElement(w, {
                                achievement: e,
                                key: e.id
                            })
                        })), Boolean(this.props.achievements.pastCompleted.length) && r.createElement(s.Wa, i.__assign({
                            margin: {
                                top: 3
                            }
                        }, O), r.createElement(s.Wa, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(s.W, {
                            type: s.Ob.H3,
                            fontSize: s.Ba.Size4,
                            bold: !0
                        }, Object(o.d)("Completed", "AchievementsList"))), this.props.achievements.pastCompleted.map(function(e) {
                            return r.createElement(w, {
                                achievement: e,
                                key: e.id
                            })
                        })))
                    }, t
                }(r.Component),
                w = function(e) {
                    var t = Object(h.b)();
                    return r.createElement(a.a, {
                        path: p.b.achievement(e.achievement),
                        exact: !0
                    }, function(n) {
                        var a = n.match;
                        if (Boolean(a)) return r.createElement(f, {
                            achievement: e.achievement,
                            refDelegate: A.a
                        });
                        var o = t && {
                            margin: {
                                bottom: 1
                            },
                            borderRadius: s.x.Large,
                            background: s.r.Base,
                            overflow: s.Za.Hidden
                        };
                        return r.createElement(s.yb, i.__assign({
                            elevation: 1
                        }, o), r.createElement(c.a, {
                            achievement: e.achievement,
                            layoutClassName: "ach-card--in-list"
                        }, r.createElement("div", null, e.children, j(e.achievement))))
                    })
                },
                j = function(e) {
                    return Object(h.b)() ? r.createElement(v.a, {
                        progress: e.progress,
                        progressCap: e.progressCap,
                        completedAt: e.completedAt
                    }) : r.createElement(m, {
                        achievement: e
                    })
                },
                x = function() {
                    var e = Array(3).fill("").map(function(e, t) {
                        return r.createElement(s.Wa, {
                            margin: {
                                bottom: 1
                            },
                            key: t
                        }, r.createElement(s.db, {
                            height: 70
                        }))
                    });
                    return [r.createElement(s.Wa, i.__assign({
                        margin: {
                            bottom: 3
                        }
                    }, E, {
                        key: "recently-completed"
                    }), e), r.createElement("div", i.__assign({}, _, {
                        key: "not-completed"
                    }), e), r.createElement(s.Wa, i.__assign({
                        margin: {
                            top: 3
                        }
                    }, O, {
                        key: "past-completed"
                    }), e)]
                };
            n.d(t, !1, function() {
                return E
            }), n.d(t, !1, function() {
                return _
            }), n.d(t, !1, function() {
                return O
            }), n.d(t, "a", function() {
                return T
            }), n.d(t, "b", function() {
                return j
            })
        },
        "y/W1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return s
            });
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("5NYc"),
                o = n("Ue10"),
                c = function(e) {
                    var t = e.find(function(e) {
                        return e.metric === a.a.HOUR_COUNT
                    });
                    if (void 0 !== t) {
                        var n = t && t.progress;
                        return Object(r.d)("in <x:strong>{duration} hours</x:strong> streamed", {
                            "x:strong": function(e) {
                                return i.createElement(o.W, {
                                    bold: !0,
                                    type: o.Ob.Span
                                }, e)
                            },
                            duration: Object(r.f)(Math.floor(100 * n) / 100)
                        }, "QuestRequirements")
                    }
                },
                l = function(e, t) {
                    return Object(r.d)("{numCompleted, number} of {numTotal, number} requirements", {
                        numCompleted: e,
                        numTotal: t
                    }, "AchievementsQuests")
                },
                s = function(e) {
                    return e.sort(function(e, t) {
                        return e.time_based && !t.time_based ? 1 : !e.time_based && t.time_based ? -1 : 0
                    })
                }
        }
    }
]);