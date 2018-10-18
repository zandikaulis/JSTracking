(window.webpackJsonp = window.webpackJsonp || []).push([
    [162], {
        "0eTn": function(e, t, n) {},
        "4eyL": function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
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
                        var e, t, n, i;
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return (e = this.props.channel) ? (this.setState({
                                        isLoading: !0
                                    }), [4, function(e) {
                                        return a.__awaiter(this, void 0, void 0, function() {
                                            var t, n, i;
                                            return a.__generator(this, function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return t = "/v5/channels/" + e.id + "/achievement_progressions", [4, Object(l.a)({
                                                            path: t
                                                        })];
                                                    case 1:
                                                        return (n = r.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            quests: [],
                                                            achievements: new c.b
                                                        }] : (i = u(n.body, e), [2, a.__assign({
                                                            isError: !1
                                                        }, i)])
                                                }
                                            })
                                        })
                                    }(e)]) : [2];
                                case 1:
                                    t = r.sent(), r.label = 2;
                                case 2:
                                    return r.trys.push([2, 4, , 5]), [4, Object(o.a)(e.id)];
                                case 3:
                                    return i = r.sent(), n = b(i, e.role), [3, 5];
                                case 4:
                                    return r.sent(), n = [], [3, 5];
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
            }(r.Component);
            n.d(t, "a", function() {
                return f
            })
        },
        "5aAj": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("fvjX"),
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
                        return a.createElement(h.a, null, a.createElement(b.a, {
                            learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2877819",
                            page: p.b.Achievements
                        }))
                    }, t
                }(a.Component),
                g = n("Ue10"),
                v = (n("p81A"), {
                    "data-test-selector": "quests-col"
                }),
                A = {
                    "data-test-selector": "achs-col"
                },
                y = function(e) {
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
                    return a.createElement(g.zb, {
                        className: "ach-page",
                        margin: {
                            bottom: 1
                        },
                        display: g.X.Flex,
                        flexDirection: g.Aa.Column,
                        flexWrap: g.Ba.NoWrap,
                        alignItems: g.f.Stretch,
                        breakpointMedium: {
                            flexDirection: g.Aa.Row
                        },
                        fullHeight: !0
                    }, a.createElement(g.zb, {
                        className: "ach-col-wrapper ach-col-wrapper--q",
                        display: g.X.Flex,
                        flexWrap: g.Ba.NoWrap,
                        flexDirection: g.Aa.Column,
                        flexShrink: 0,
                        breakpointMedium: {
                            display: g.X.Block
                        }
                    }, a.createElement(g.Xa, i.__assign({
                        className: t
                    }, v), a.createElement(g.Xa, {
                        padding: {
                            x: 4,
                            y: 4
                        },
                        margin: {
                            bottom: 2
                        },
                        fullHeight: !0
                    }, e.left))), a.createElement(g.zb, {
                        className: "ach-col-wrapper ach-col-wrapper--l",
                        display: g.X.Flex,
                        flexGrow: 1,
                        flexWrap: g.Ba.NoWrap,
                        flexDirection: g.Aa.Column,
                        flexShrink: 0,
                        breakpointMedium: {
                            display: g.X.Block
                        }
                    }, a.createElement(g.Xa, i.__assign({
                        className: n
                    }, A), e.right)), a.createElement(f, null))
                },
                E = n("gq0V"),
                _ = n("IFXb"),
                O = n("4eyL"),
                T = n("jvBR"),
                S = n("i68L"),
                w = n("xMok"),
                j = n("5NYc"),
                C = function(e) {
                    var t = Object(E.b)(),
                        n = t ? {
                            x: .5
                        } : {},
                        i = t ? {
                            left: 1
                        } : {};
                    return a.createElement(g.zb, {
                        key: e.buttonText,
                        background: g.r.Alt2,
                        borderRadius: g.x.Large,
                        margin: i
                    }, a.createElement(g.z, {
                        targetBlank: e.targetBlank,
                        linkTo: e.url,
                        onClick: e.onClickButton,
                        type: e.buttonType
                    }, a.createElement(g.Xa, {
                        padding: n
                    }, e.buttonText)))
                };

            function x(e) {
                var t = {
                    spotlight_type: e.type,
                    achievement_key: e.achievementKey || null,
                    quest_key: e.questKey || null
                };
                o.o.track(m.SpadeEventType.AchievementSpotlightImpression, t)
            }

            function k(e) {
                var t = {
                    quest_id: e
                };
                o.o.track(m.SpadeEventType.AchievementQuestBannerClick, t)
            }
            var D = n("u2gS"),
                q = function(e) {
                    if (e.isPartner) return a.createElement(P, {
                        title: e.title,
                        subtitle: e.subtitle,
                        url: e.url
                    });
                    var t = e.url ? a.createElement(g.U, {
                        to: e.url
                    }, a.createElement(g.W, {
                        type: g.Pb.Span,
                        color: g.O.OverlayAlt
                    }, e.subtitle)) : e.subtitle;
                    return a.createElement("div", null, a.createElement(g.W, {
                        ellipsis: !0,
                        color: g.O.Overlay,
                        bold: !0,
                        fontSize: g.Ca.Size5
                    }, e.title), a.createElement(g.W, {
                        ellipsis: !0,
                        color: g.O.OverlayAlt,
                        fontSize: g.Ca.Size5
                    }, t))
                },
                P = function(e) {
                    return a.createElement(g.zb, {
                        display: g.X.Flex,
                        flexGrow: 1,
                        flexWrap: g.Ba.NoWrap,
                        alignItems: g.f.Center
                    }, a.createElement(g.Xa, {
                        display: g.X.Flex,
                        flexDirection: g.Aa.Column,
                        flexGrow: 1
                    }, a.createElement(g.W, {
                        ellipsis: !0,
                        color: g.O.Overlay,
                        bold: !0,
                        fontSize: g.Ca.Size5
                    }, e.title), a.createElement(g.W, {
                        ellipsis: !0,
                        color: g.O.OverlayAlt,
                        fontSize: g.Ca.Size5
                    }, a.createElement(g.U, {
                        to: e.url
                    }, a.createElement(g.W, {
                        type: g.Pb.Span,
                        color: g.O.OverlayAlt
                    }, e.subtitle)))), a.createElement(g.zb, {
                        display: g.X.Flex,
                        color: g.O.OverlayAlt
                    }, a.createElement(g.ob, {
                        asset: g.pb.Verified
                    })))
                },
                I = function(e) {
                    return a.createElement(g.zb, {
                        display: g.X.Flex,
                        flexGrow: 1,
                        alignItems: g.f.Center
                    }, a.createElement(g.Xa, {
                        display: g.X.Flex,
                        flexDirection: g.Aa.Column,
                        flexGrow: 1,
                        alignItems: g.f.Start
                    }, a.createElement(g.W, {
                        fontSize: g.Ca.Size5
                    }, a.createElement(g.W, {
                        color: g.O.Overlay,
                        type: g.Pb.Span,
                        bold: !0
                    }, e.title), !!e.subtitle && a.createElement(g.Xa, {
                        display: g.X.Inline,
                        margin: {
                            left: .5
                        }
                    }, a.createElement(g.W, {
                        color: g.O.OverlayAlt,
                        type: g.Pb.Span
                    }, e.subtitle)))), a.createElement(g.Xa, {
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
                            r = Object(o.d)("Learn More", "AchievementsBannerPathToAffiliate"),
                            c = null,
                            l = null;
                        switch (e.key) {
                            case j.b.PATH_TO_PARTNER:
                                e.role === D.d.Partner ? c = a.createElement(z, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: n,
                                    learnMoreText: r
                                }) : e.role === D.d.Affiliate && e.isComplete && (c = a.createElement(B, {
                                    questKey: e.key
                                }));
                                break;
                            case j.b.PATH_TO_AFFILIATE:
                                e.role === D.d.Partner ? c = a.createElement(z, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: n,
                                    learnMoreText: r
                                }) : e.role === D.d.Affiliate ? c = a.createElement(N, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: t,
                                    learnMoreText: r
                                }) : e.role === D.d.None && e.isComplete && (c = a.createElement(X, {
                                    channelLogin: this.props.channelLogin,
                                    questKey: e.key,
                                    hasAffiliateInviteError: e.hasAffiliateInviteError,
                                    bannerTitle: Object(o.d)("Congrats! You're eligible for Affiliate status.", "AchievementsBannerPathToAffiliate")
                                }));
                                break;
                            case j.b.IT_BEGINS:
                                e.role === D.d.Partner ? c = a.createElement(z, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: n,
                                    learnMoreText: r
                                }) : e.role === D.d.Affiliate ? c = a.createElement(N, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: t,
                                    learnMoreText: r
                                }) : e.isComplete && (c = a.createElement(R, null))
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
                            l = a.createElement(g.zb, i.__assign({}, s, {
                                background: g.r.AccentAlt2
                            }), c)
                        }
                        return l
                    }, t
                }(a.Component),
                R = function() {
                    return a.createElement(q, {
                        title: Object(o.d)("You've started your path as a Twitch streamer", "AchievementsBannerItBegins"),
                        subtitle: Object(o.d)("Which achievement will you complete next?", "AchievementsBannerItBegins")
                    })
                },
                N = function(e) {
                    return Object(E.b)() ? a.createElement(I, {
                        title: e.bannerTitle
                    }, a.createElement(C, {
                        buttonText: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles",
                        buttonType: g.F.Text,
                        targetBlank: !0
                    }), a.createElement(C, {
                        buttonText: Object(o.d)("Affiliate Settings", "AchievementsBannerPathToPartner"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue"
                    })) : a.createElement(q, {
                        title: e.bannerTitle,
                        subtitle: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles"
                    })
                },
                X = function(e) {
                    var t = function() {
                        return k(e.questKey)
                    };
                    return e.hasAffiliateInviteError ? a.createElement(I, {
                        title: e.bannerTitle,
                        subtitle: Object(o.d)("First, complete your in-progress developer onboarding.", "AchievementsBannerPathToAffiliate")
                    }, a.createElement(C, {
                        buttonText: Object(o.d)("Continue", "AchievementsBannerPathToAffiliate"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue",
                        onClickButton: t
                    })) : a.createElement(I, {
                        title: e.bannerTitle,
                        subtitle: Object(o.d)("Begin your Affiliate onboarding.", "AchievementsBannerPathToAffiliate")
                    }, a.createElement(C, {
                        buttonText: Object(o.d)("Get Started", "AchievementsBannerPathToAffiliate"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue",
                        onClickButton: t
                    }))
                },
                z = function(e) {
                    return Object(E.b)() ? a.createElement(I, {
                        title: e.bannerTitle
                    }, a.createElement(C, {
                        buttonText: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                        buttonType: g.F.Text,
                        targetBlank: !0
                    }), a.createElement(C, {
                        buttonText: Object(o.d)("Partner Settings", "AchievementsBannerPathToPartner"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue"
                    })) : a.createElement(q, {
                        title: e.bannerTitle,
                        subtitle: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                        isPartner: !0
                    })
                },
                B = function(e) {
                    return a.createElement(I, {
                        title: Object(o.d)("Apply to the Twitch Partner program.", "AchievementsBannerPathToPartner"),
                        subtitle: Object(o.d)("We usually follow up in 7 business days.", "AchievementsBannerPathToPartner")
                    }, a.createElement(C, {
                        buttonText: Object(o.d)("Apply", "AchievementsBannerPathToPartner"),
                        url: "/partner/signup",
                        onClickButton: function() {
                            return k(e.questKey)
                        }
                    }))
                },
                W = function(e) {
                    var t = Object(o.d)("Completed", "AchievementsQuests"),
                        n = function() {
                            return Object(E.b)() ? a.createElement(g.zb, {
                                fontSize: g.Ca.Size4
                            }, a.createElement(g.cb, {
                                label: t,
                                type: g.db.Success
                            })) : a.createElement(g.cb, {
                                label: t,
                                type: g.db.Success
                            })
                        };
                    return e.completedAt ? a.createElement(g.Sb, {
                        label: Object(o.c)(e.completedAt, "long"),
                        direction: g.Ub.Left
                    }, n()) : n()
                },
                F = n("y/W1"),
                G = n("qe41"),
                U = n("9+Lo"),
                M = (n("qCmY"), function(e) {
                    var t = Object(E.b)(),
                        n = e.quest.completedRequirementsCount,
                        r = e.quest.totalRequirements,
                        c = d({
                            "ach-q-card": t && e.isActive,
                            "ach-q-item": !0,
                            "ach-q-item--expanded": e.isActive,
                            "quest-header": !0
                        }),
                        l = !1,
                        s = Object(F.c)(e.quest.requirements),
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
                        A = t ? {
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
                    return a.createElement(g.zb, i.__assign({
                        className: c,
                        position: g.fb.Relative
                    }, A), a.createElement(g.Ua, {
                        onClick: e.onHeaderClick,
                        blurAfterClick: !0
                    }, a.createElement(g.zb, i.__assign({
                        className: "ach-q-item__header quest-header",
                        display: g.X.Flex
                    }, b, {
                        borderBottom: !0,
                        alignItems: g.f.Center
                    }), a.createElement(g.Xa, {
                        display: g.X.Flex,
                        flexGrow: 1,
                        flexWrap: g.Ba.NoWrap,
                        alignItems: g.f.Center
                    }, a.createElement(g.Xa, i.__assign({
                        display: g.X.Flex,
                        flexGrow: 1,
                        fullHeight: !0
                    }, v, {
                        alignItems: g.f.Center
                    }), t && a.createElement(g.zb, {
                        borderRadius: g.x.Large,
                        className: "quest-header__badge-wrap",
                        margin: {
                            right: 1
                        },
                        overflow: g.ab.Hidden
                    }, a.createElement(g.S, {
                        src: e.quest.image,
                        alt: Object(o.d)("quest image", "AchievementsQuestCard")
                    })), a.createElement(g.W, i.__assign({
                        className: "ach-q-item__title",
                        type: g.Pb.Strong
                    }, f, {
                        fontSize: g.Ca.Size4
                    }), e.quest.title)), !h && a.createElement(g.Sb, {
                        label: Object(F.b)(n, r),
                        direction: g.Ub.Left
                    }, a.createElement(g.zb, {
                        display: g.X.Flex,
                        fullHeight: !0,
                        padding: {
                            right: 1
                        },
                        color: g.O.Alt2
                    }, function(e, n) {
                        var i = [];
                        if (!t) return a.createElement(g.W, {
                            className: "ach-q-item__label",
                            color: g.O.Alt2,
                            fontSize: g.Ca.Size5
                        }, Object(F.b)(e, n));
                        for (var r = 0; r < e; r++) i.push(a.createElement(g.zb, {
                            key: "completeReqBar-" + r,
                            className: "quest-progress-bars quest-progress-bars__complete",
                            borderRadius: g.x.Large,
                            margin: {
                                left: .5
                            }
                        }));
                        for (r = 0; r < n - e; r++) i.push(a.createElement(g.zb, {
                            key: "incompleteReqBar-" + r,
                            className: "quest-progress-bars quest-progress-bars__incomplete",
                            borderRadius: g.x.Large,
                            margin: {
                                left: .5
                            },
                            background: g.r.Alt2
                        }));
                        return i
                    }(n, r))), h && a.createElement(g.Xa, {
                        display: g.X.Flex
                    }, a.createElement(g.Xa, {
                        alignItems: g.f.Center,
                        flexGrow: 0,
                        display: g.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, a.createElement(W, {
                        completedAt: e.quest.completedAt
                    })))))), a.createElement(L, {
                        quest: e.quest,
                        channelLogin: p
                    }), a.createElement(g.zb, {
                        background: g.r.Base
                    }, s.map(function(t) {
                        return a.createElement(g.Xa, {
                            key: t.metric
                        }, function(t) {
                            if (!e.quest.isComplete && t.time_based && !l) return l = !0, a.createElement(U.a, {
                                channelLogin: p,
                                questKey: e.quest.key
                            })
                        }(t), a.createElement(G.a, {
                            requirement: t,
                            requirementInstructionString: u,
                            isComplete: e.quest.isComplete,
                            subtext: t.metric === j.a.AVERAGE_CCU ? Object(F.a)(e.quest.requirements) : void 0,
                            ccuTooltipLabel: e.quest.ccuTooltipLabel
                        }))
                    })), a.createElement(g.zb, {
                        display: g.X.Flex,
                        padding: 1,
                        background: t ? g.r.Alt : g.r.Alt2
                    }, a.createElement(g.Xa, {
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
                    }, a.createElement(g.W, {
                        color: g.O.Alt2,
                        fontSize: g.Ca.Size6,
                        type: g.Pb.Span
                    }, m, " ", a.createElement(g.U, {
                        targetBlank: !0,
                        to: e.quest.learnMoreURL
                    }, Object(o.d)("Learn more", "AchievementsPathToAffiliate"))))))
                }),
                H = function(e) {
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
                                return a.createElement(M, {
                                    key: n.key,
                                    quest: n,
                                    channelLogin: e.props.channel.name,
                                    onHeaderClick: function() {
                                        return e.handleActivate(n)
                                    },
                                    isActive: n === t
                                })
                            });
                        return a.createElement(g.Xa, {
                            fullHeight: !0
                        }, this.props.isLoading ? this.renderPlaceholders() : n)
                    }, t.prototype.renderPlaceholders = function() {
                        return [a.createElement(g.Xa, {
                            margin: {
                                bottom: 2
                            },
                            key: "opened-quest"
                        }, a.createElement(g.eb, {
                            height: 450
                        })), a.createElement(g.Xa, {
                            margin: {
                                bottom: 2
                            },
                            key: "collasped-quest-1"
                        }, a.createElement(g.eb, {
                            height: 62
                        })), a.createElement(g.Xa, {
                            margin: {
                                bottom: 2
                            },
                            key: "collasped-quest-2"
                        }, a.createElement(g.eb, {
                            height: 62
                        }))]
                    }, t
                }(a.Component),
                Q = n("j8bx"),
                Y = n("Tc9I"),
                V = {
                    "data-test-selector": "title"
                },
                K = {
                    "data-test-selector": "subtitle"
                },
                J = {
                    "data-test-selector": "dismiss"
                },
                $ = n("FuXV"),
                Z = function(e) {
                    var t = e.title,
                        n = e.subtitle;
                    return a.createElement(g.zb, {
                        position: g.fb.Relative,
                        padding: 2,
                        textAlign: g.Lb.Center,
                        className: "ach-sb",
                        elevation: 1,
                        border: !0
                    }, a.createElement($.a, {
                        confettiCount: 40,
                        infinite: !0
                    }), a.createElement(g.Xa, {
                        margin: {
                            left: 1
                        },
                        position: g.fb.Relative,
                        zIndex: g.cc.Above,
                        className: "ach-sb__text"
                    }, a.createElement(g.W, i.__assign({}, V, {
                        fontSize: g.Ca.Size4,
                        bold: !0,
                        ellipsis: !0
                    }), t), a.createElement(g.W, i.__assign({}, K, {
                        fontSize: g.Ca.Size5,
                        color: g.O.Alt2,
                        ellipsis: !0
                    }), n)))
                },
                ee = function(e) {
                    var t = Object(E.b)() ? {} : {
                        top: 3,
                        x: 4
                    };
                    return a.createElement(g.zb, {
                        position: g.fb.Absolute,
                        margin: t,
                        zIndex: g.cc.Above,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, a.createElement(g.i, {
                        type: g.n.BounceIn,
                        duration: g.k.Medium,
                        enabled: !0,
                        timing: g.m.EaseInOut
                    }, e.children, a.createElement(g.Xa, {
                        className: "ach-sb__dismiss",
                        position: g.fb.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, a.createElement(g.A, i.__assign({}, J, {
                        ariaLabel: Object(o.d)("Close", "AchievementSpotlightDismiss"),
                        type: g.C.Default,
                        size: g.B.Large,
                        icon: g.pb.Close,
                        onClick: e.onDismissSpotlight
                    })))))
                },
                te = "https://static-cdn.jtvnw.net/emoticons/v1/135393/3.0",
                ne = "PartyTime",
                ie = function() {
                    var e = Object(o.d)("Celebrate milestones and track your progress towards becoming an Affiliate or Partner.", "AchievementsSpotlight"),
                        t = Object(o.d)("Learn more", "AchievementsSpotlight");
                    return a.createElement(g.zb, {
                        padding: 2,
                        className: "ach-sb",
                        display: g.X.Flex,
                        alignItems: g.f.Center,
                        elevation: 1,
                        border: !0
                    }, a.createElement(g.zb, {
                        display: g.X.Flex,
                        fullWidth: !0,
                        flexWrap: g.Ba.NoWrap
                    }, a.createElement(g.Xa, {
                        display: g.X.Flex,
                        flexShrink: 0,
                        alignContent: g.e.Center,
                        alignItems: g.f.Center
                    }, a.createElement(g.q, {
                        src: te,
                        alt: ne,
                        size: 30
                    })), a.createElement(g.Xa, {
                        flexGrow: 1,
                        margin: {
                            left: 1
                        },
                        className: "ach-sb__text"
                    }, a.createElement(g.W, i.__assign({}, V, {
                        fontSize: g.Ca.Size4,
                        bold: !0,
                        ellipsis: !0
                    }), Object(o.d)("Welcome to Achievements", "AchievementsSpotlight")), a.createElement(g.W, i.__assign({}, K, {
                        fontSize: g.Ca.Size5,
                        color: g.O.Alt2,
                        ellipsis: !0
                    }), e, " ", a.createElement("a", {
                        target: "_blank",
                        href: "https://help.twitch.tv/customer/portal/articles/2877819"
                    }, t)))))
                },
                ae = (n("kD0Y"), "achievement-spotlights"),
                re = function(e) {
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
                                a = "number" == typeof t ? t + 1 : 1,
                                r = i.__assign({}, n.dismissedSpotlights, ((e = {})[n.spotlightKey] = a, e));
                            return o.m.set(ae, r), a
                        }, n.dismissedSpotlights = o.m.get(ae, {}), n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        if (!this.props.isLoading && !this.currentSpotlightWasDismissed) {
                            this.handleViewSpotlight();
                            var t = void 0;
                            switch (this.bannerType) {
                                case j.b.PATH_TO_PARTNER:
                                    t = a.createElement(oe, null);
                                    break;
                                case j.b.PATH_TO_AFFILIATE:
                                    t = a.createElement(ce, null);
                                    break;
                                case j.b.IT_BEGINS:
                                    t = a.createElement(le, null);
                                    break;
                                default:
                                    t = a.createElement(ie, null)
                            }
                            e = a.createElement(ee, {
                                onDismissSpotlight: this.handleDismissSpotlight
                            }, t)
                        }
                        return a.createElement(g.Xa, {
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
                }(a.PureComponent),
                oe = function() {
                    var e = Object(Y.b)(j.b.PATH_TO_PARTNER),
                        t = a.createElement(se, {
                            title: e.title
                        }),
                        n = e.bannerTitle(t);
                    return x({
                        type: "quest",
                        questKey: j.b.PATH_TO_PARTNER
                    }), a.createElement(Z, {
                        title: n,
                        subtitle: e.subtitle
                    })
                },
                ce = function() {
                    var e = Object(Y.b)(j.b.PATH_TO_AFFILIATE),
                        t = a.createElement(se, {
                            title: e.title
                        }),
                        n = e.bannerTitle(t);
                    return x({
                        type: "quest",
                        questKey: j.b.PATH_TO_AFFILIATE
                    }), a.createElement(Z, {
                        title: n,
                        subtitle: e.subtitle
                    })
                },
                le = function() {
                    var e = Object(Y.b)(j.b.IT_BEGINS),
                        t = a.createElement(se, {
                            title: e.title
                        }),
                        n = e.bannerTitle(t);
                    return x({
                        type: "quest",
                        questKey: j.b.IT_BEGINS
                    }), a.createElement(Z, {
                        title: n,
                        subtitle: e.subtitle
                    })
                },
                se = function(e) {
                    var t = e.title;
                    return a.createElement(g.W, {
                        type: g.Pb.Span,
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
                        return e ? a.createElement(O.a, {
                            channel: e
                        }, function(t) {
                            return Object(E.b)() ? a.createElement(_.a, null, a.createElement(re, i.__assign({}, t, {
                                channelName: e.name
                            }), function() {
                                return a.createElement(g.Xa, null, a.createElement(H, {
                                    quests: t.quests,
                                    channel: e,
                                    isLoading: t.isLoading
                                }), a.createElement(w.a, {
                                    achievements: t.achievements,
                                    isLoading: t.isLoading
                                }))
                            })) : a.createElement(re, i.__assign({}, t, {
                                channelName: e.name
                            }), function(n) {
                                return a.createElement(y, {
                                    isSpotlightShown: n,
                                    left: a.createElement(H, {
                                        quests: t.quests,
                                        channel: e,
                                        isLoading: t.isLoading
                                    }),
                                    right: a.createElement(w.a, {
                                        achievements: t.achievements,
                                        isLoading: t.isLoading
                                    })
                                })
                            })
                        }) : null
                    }, t
                }(a.Component),
                ue = Object(r.compose)(Object(c.a)(S, {
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
                a = n("NAv5"),
                r = n("cr+I"),
                o = n("q1tI"),
                c = n("/7QA"),
                l = n("5NYc"),
                s = n("gq0V"),
                m = n("Ue10"),
                u = function(e) {
                    var t = new Date,
                        n = Object(a.subDays)(t, 29),
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
                    return o.createElement(m.zb, i.__assign({}, u), o.createElement(m.Xa, {
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
                                type: m.Pb.Span
                            }, e)
                        },
                        startDate: n,
                        endDate: t
                    }, "QuestTimeFrameBar"))), e.questKey !== l.b.PATH_TO_PARTNER && o.createElement(m.Xa, {
                        padding: {
                            right: 1
                        }
                    }, o.createElement(m.U, {
                        to: {
                            pathname: "/" + e.channelLogin + "/dashboard/channel-analytics",
                            search: "?" + r.stringify({
                                start: Object(a.format)(n, "YYYY-MM-DD"),
                                end: Object(a.format)(t, "YYYY-MM-DD")
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
                a = n("TSYQ"),
                r = n("q1tI"),
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
                            t = a({
                                "confetti-layer__confetti": !0,
                                "confetti-layer__confetti--infinite": this.props.infinite
                            });
                        return r.createElement(c.Xa, {
                            className: "confetti-layer",
                            position: c.fb.Absolute,
                            overflow: c.ab.Hidden,
                            zIndex: c.cc.Default,
                            attachTop: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            attachLeft: !0
                        }, Object(o.c)(this.props.confettiCount, function(n) {
                            return r.createElement("div", {
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
                }(r.PureComponent);
            n.d(t, "a", function() {
                return u
            })
        },
        MjdR: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("TSYQ"),
                r = n("q1tI"),
                o = n("gi7w"),
                c = n("gq0V"),
                l = n("Ue10"),
                s = function(e) {
                    var t = Object(c.b)(),
                        n = t && {
                            overflow: l.ab.Hidden,
                            borderRadius: l.x.Large
                        },
                        s = a({
                            "ach-card__badge-wrap": !t,
                            "ach-card-vip__badge-wrap": t
                        }),
                        m = a({
                            "ach-card__badge": !t,
                            "ach-card-vip__badge": t
                        }),
                        u = t && {
                            borderRadius: l.x.Large
                        };
                    return r.createElement(l.Xa, i.__assign({
                        display: l.X.Flex,
                        flexWrap: l.Ba.NoWrap,
                        position: l.fb.Relative,
                        flexShrink: 0
                    }, u), r.createElement(l.Xa, {
                        className: s,
                        position: l.fb.Relative,
                        flexShrink: 0
                    }, r.createElement(l.zb, i.__assign({
                        className: m,
                        background: l.r.Alt2
                    }, n), r.createElement("img", {
                        alt: e.achievement.title,
                        className: "ach-card__img",
                        src: e.achievement.image.scale1x,
                        srcSet: e.achievement.image.scale1x + " 1x, " + e.achievement.image.scale3x + " 3x"
                    })), Boolean(e.achievement.level) && r.createElement(l.zb, {
                        className: "ach-card__lvl",
                        position: l.fb.Absolute,
                        background: l.r.Alt
                    }, r.createElement(l.s, {
                        border: !0,
                        icon: Object(o.a)(e.achievement.level),
                        size: 20,
                        type: l.t.Dashboard
                    }))), r.createElement(l.zb, {
                        overflow: l.ab.Hidden,
                        display: l.X.Flex,
                        justifyContent: l.Wa.Center,
                        flexDirection: l.Aa.Column,
                        margin: {
                            left: 2
                        }
                    }, r.createElement(l.W, {
                        fontSize: l.Ca.Size4,
                        color: l.O.Alt,
                        bold: !0,
                        ellipsis: !0
                    }, e.achievement.title), r.createElement(l.W, {
                        fontSize: l.Ca.Size5,
                        color: l.O.Alt2,
                        ellipsis: !0
                    }, e.achievement.description)), r.createElement(l.zb, {
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
                return s
            })
        },
        S3iq: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("TSYQ"),
                r = n("q1tI"),
                o = n("MjdR"),
                c = n("gq0V"),
                l = n("6XEL"),
                s = n("Ue10"),
                m = {
                    "data-test-selector": "achievement-card"
                },
                u = function(e) {
                    return r.createElement(s.U, i.__assign({
                        className: "ach-link",
                        "aria-hidden": e.isHidden,
                        tabIndex: e.isHidden ? -1 : void 0,
                        to: l.b.achievement(e.achievement)
                    }, m, {
                        hoverUnderlineNone: !0
                    }), r.createElement(d, {
                        achievement: e.achievement,
                        className: e.layoutClassName
                    }, e.children))
                },
                d = function(e) {
                    var t, n = Object(c.b)(),
                        l = a(e.className, {
                            "ach-card": !n,
                            "ach-card-vip": n,
                            "ach-card-vip--completed": Boolean(e.achievement.completedAt),
                            "ach-card--recent": e.achievement.wasRecentlyCompleted()
                        }),
                        m = n && {
                            padding: 1
                        };
                    return e.achievement.completedAt || (t = r.createElement(s.Xa, {
                        position: s.fb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, r.createElement(s.ib, {
                        size: s.kb.ExtraSmall,
                        value: 100 * e.achievement.progressRatio
                    }))), r.createElement(s.zb, i.__assign({
                        className: l,
                        position: s.fb.Relative
                    }, m), r.createElement(s.zb, {
                        className: "ach-card__inner"
                    }, r.createElement(o.a, {
                        achievement: e.achievement
                    }, r.createElement("div", null, e.children, !n && t)), n && t))
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
            var i, a = n("/7QA"),
                r = n("5NYc");

            function o(e) {
                return function() {
                    var e;
                    return i || ((e = {})[r.b.PATH_TO_PARTNER] = {
                        title: Object(a.d)("Path to Partner", "AchievementsSpotlightPathToPartner"),
                        bannerTitle: function(e) {
                            return Object(a.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToPartner")
                        },
                        subtitle: Object(a.d)("Apply to become a Twitch Partner today", "AchievementsSpotlightPathToPartner")
                    }, e[r.b.PATH_TO_AFFILIATE] = {
                        title: Object(a.d)("Path to Affiliate", "AchievementsSpotlightPathToAffiliate"),
                        bannerTitle: function(e) {
                            return Object(a.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToAffiliate")
                        },
                        subtitle: Object(a.d)("You're eligible to become a Twitch Affiliate", "AchievementsSpotlightPathToAffiliate")
                    }, e[r.b.IT_BEGINS] = {
                        title: Object(a.d)("It Begins", "AchievementsSpotlightItBegins"),
                        bannerTitle: function(e) {
                            return Object(a.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightItBegins")
                        },
                        subtitle: Object(a.d)("Which achievement will you complete next?", "AchievementsSpotlightItBegins")
                    }, e[r.b.VIP_BADGE] = {
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
                    spotlightDismiss: Object(a.d)("Close", "StreamSummarySpotlightDismiss")
                }
            }
        },
        bF3S: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                a = n("/7QA"),
                r = n("tmT/"),
                o = n("Ue10"),
                c = function(e) {
                    return i.createElement(o.Xa, {
                        display: o.X.Flex,
                        justifyContent: o.Wa.End
                    }, i.createElement(o.ob, {
                        type: e.checkMarkType,
                        asset: o.pb.Check,
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
                    checkMarkType: o.qb.Success
                });
                if (e.completedAt) return i.createElement(r.a, {
                    date: e.completedAt
                });
                if (1 === n && 1 === t) return i.createElement(c, {
                    checkMarkType: o.qb.Alt
                });
                var l = function() {
                    return i.createElement(o.Xa, {
                        position: o.fb.Relative,
                        display: o.X.Flex,
                        alignItems: o.f.Center
                    }, i.createElement(o.W, {
                        className: t >= n ? "quest-requirement-card-progress__success" : "quest-requirement-card-progress",
                        color: t >= n ? void 0 : o.O.Alt2,
                        bold: !0,
                        fontSize: o.Ca.Size4,
                        type: o.Pb.Span
                    }, Object(a.f)(Math.floor(100 * t) / 100)), i.createElement(o.Xa, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(o.W, {
                        fontSize: o.Ca.Size5,
                        color: o.O.Alt2,
                        type: o.Pb.Span
                    }, "/")), i.createElement(o.W, {
                        fontSize: o.Ca.Size5,
                        color: o.O.Alt2
                    }, Object(a.g)(e.progressCap)))
                };
                return t > 999 ? i.createElement(o.Sb, {
                    label: Object(a.f)(Math.floor(100 * t) / 100),
                    direction: o.Ub.Left
                }, l()) : l()
            }
        },
        gi7w: function(e, t, n) {
            "use strict";
            var i = n("Ue10"),
                a = {
                    1: i.pb.Roman1,
                    2: i.pb.Roman2,
                    3: i.pb.Roman3,
                    4: i.pb.Roman4,
                    5: i.pb.Roman5
                };

            function r(e) {
                return a[e]
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
                return r
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

            function a(e) {
                return e[i(e.length - 1)]
            }

            function r(e, t) {
                for (var n = 0, i = []; n < e;) i.push(t(n)), n += 1;
                return i
            }
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return r
            })
        },
        p81A: function(e, t, n) {},
        qCmY: function(e, t, n) {},
        qe41: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
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
                return r.createElement(l.zb, {
                    position: l.fb.Relative,
                    display: l.X.Flex,
                    alignItems: l.f.Center,
                    padding: {
                        y: 2,
                        left: 2
                    },
                    borderBottom: !0
                }, r.createElement(l.Xa, a.__assign({
                    display: l.X.Flex,
                    flexGrow: 1,
                    alignItems: l.f.Center
                }, n ? {} : {
                    padding: {
                        right: 3
                    },
                    flexGrow: 1
                }), r.createElement(l.Xa, null, r.createElement(l.Xa, {
                    display: l.X.Flex,
                    alignItems: l.f.Center
                }, r.createElement(l.W, {
                    bold: !0,
                    fontSize: l.Ca.Size5
                }, e.requirementInstructionString[t.metric]), n && r.createElement(l.Xa, {
                    display: l.X.Flex,
                    padding: {
                        left: .5,
                        right: 3
                    }
                }, r.createElement(l.Sb, {
                    label: e.ccuTooltipLabel,
                    direction: l.Ub.Top,
                    width: 230
                }, r.createElement(l.ob, {
                    asset: l.pb.NotificationInfo,
                    width: 16,
                    height: 16,
                    type: l.qb.Alt2
                })))), e.subtext && !e.isComplete && r.createElement(l.W, {
                    color: l.O.Alt2,
                    "data-test-selector": i.QUEST_SUBTEXT
                }, e.subtext))), r.createElement(l.Xa, {
                    display: l.X.Flex,
                    justifyContent: l.Wa.End,
                    padding: {
                        right: 2
                    },
                    flexShrink: 0
                }, r.createElement(c.a, {
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
                a = n("/7QA"),
                r = n("Ue10"),
                o = function(e) {
                    var t = Object(a.d)("Completed on {completedAt, date, short}", {
                            completedAt: e.date
                        }, "AchievementCard"),
                        n = Object(a.c)(e.date, "short");
                    return i.createElement(r.W, {
                        fontSize: r.Ca.Size5,
                        color: r.O.Alt2,
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
                return r
            });
            var i = n("mrSG"),
                a = n("b6Yk");

            function r(e) {
                return i.__awaiter(this, void 0, Promise, function() {
                    var t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, a.a.get("/v5/channels/" + e + "/quests")];
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
                a = n("q1tI"),
                r = n("4p7I"),
                o = n("/7QA"),
                c = n("S3iq"),
                l = n("tmT/"),
                s = n("Ue10"),
                m = function(e) {
                    return 0 === e.achievement.progress ? a.createElement("span", null) : e.achievement.completedAt ? a.createElement(s.Xa, {
                        display: s.X.InlineFlex,
                        alignItems: s.f.Center
                    }, a.createElement(l.a, {
                        date: e.achievement.completedAt
                    })) : a.createElement(s.zb, {
                        className: "ach-card__pill-wrapper",
                        fontSize: s.Ca.Size5
                    }, a.createElement(s.cb, {
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
                        r = t ? {
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
                            zIndex: s.cc.Above,
                            borderRadius: s.x.Large,
                            fullWidth: !0,
                            fullHeight: !0
                        },
                        c = t ? {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center,
                            flexGrow: 1,
                            padding: 1,
                            background: s.r.Alt,
                            borderRadius: s.x.Large
                        } : {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center,
                            flexGrow: 1,
                            padding: 1,
                            background: s.r.Alt2,
                            border: !0
                        };
                    return a.createElement(s.zb, i.__assign({
                        className: n,
                        position: s.fb.Relative
                    }, o), a.createElement(s.zb, i.__assign({
                        className: "ach-card__inner"
                    }, r, {
                        refDelegate: e.refDelegate
                    }), a.createElement(d.a, {
                        achievement: e.achievement
                    }, t ? void 0 : a.createElement(g, {
                        achievement: e.achievement
                    })), a.createElement(s.Xa, {
                        position: s.fb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, a.createElement(s.A, {
                        ariaLabel: "Close",
                        icon: s.pb.Close,
                        linkTo: p.b.channelAchievements(e.achievement.channelName)
                    })), a.createElement(s.Xa, {
                        display: s.X.Flex,
                        flexGrow: 1,
                        position: s.fb.Relative,
                        padding: {
                            top: 1
                        }
                    }, a.createElement(s.zb, i.__assign({}, c), a.createElement(s.q, i.__assign({}, b, {
                        size: 30
                    })), a.createElement(s.zb, {
                        color: s.O.Alt,
                        margin: {
                            left: .5
                        },
                        padding: {
                            left: 1
                        }
                    }, a.createElement("p", null, e.achievement.longDescription))))))
                },
                g = function(e) {
                    return 0 === e.achievement.progress ? a.createElement("span", null) : e.achievement.completedAt ? a.createElement(l.a, {
                        date: e.achievement.completedAt
                    }) : a.createElement(s.zb, {
                        className: "ach-card__pill-wrapper",
                        fontSize: s.Ca.Size5
                    }, a.createElement(s.cb, {
                        label: Object(o.f)(e.achievement.progressRatio, "percent")
                    }))
                },
                v = n("bF3S"),
                A = n("FuXV"),
                y = n("eAwD"),
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
                    return a.createElement(s.Xa, {
                        padding: t,
                        margin: {
                            bottom: 2
                        }
                    }, e.isLoading ? C() : a.createElement(S, {
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
                        return a.createElement("div", {
                            className: "ach-page"
                        }, Boolean(this.props.achievements.topRecentlyCompleted.length) && a.createElement(s.Xa, i.__assign({
                            margin: {
                                bottom: 3
                            }
                        }, E), a.createElement(s.Xa, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(s.W, {
                            type: s.Pb.H3,
                            fontSize: s.Ca.Size4,
                            bold: !0
                        }, Object(o.d)("Recently Completed", "AchievementsList"))), this.props.achievements.topRecentlyCompleted.map(function(t) {
                            return a.createElement(w, {
                                achievement: t,
                                key: t.id
                            }, !e.state.didCelebrate && a.createElement(A.a, {
                                confettiCount: 30
                            }))
                        })), Boolean(this.props.achievements.notCompleted.length) && a.createElement("div", i.__assign({}, _), a.createElement(s.Xa, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(s.W, {
                            type: s.Pb.H3,
                            fontSize: s.Ca.Size4,
                            bold: !0
                        }, Object(o.d)("In Progress", "AchievementsList"))), this.props.achievements.notCompleted.map(function(e) {
                            return a.createElement(w, {
                                achievement: e,
                                key: e.id
                            })
                        })), Boolean(this.props.achievements.pastCompleted.length) && a.createElement(s.Xa, i.__assign({
                            margin: {
                                top: 3
                            }
                        }, O), a.createElement(s.Xa, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(s.W, {
                            type: s.Pb.H3,
                            fontSize: s.Ca.Size4,
                            bold: !0
                        }, Object(o.d)("Completed", "AchievementsList"))), this.props.achievements.pastCompleted.map(function(e) {
                            return a.createElement(w, {
                                achievement: e,
                                key: e.id
                            })
                        })))
                    }, t
                }(a.Component),
                w = function(e) {
                    var t = Object(h.b)();
                    return a.createElement(r.a, {
                        path: p.b.achievement(e.achievement),
                        exact: !0
                    }, function(n) {
                        var r = n.match;
                        if (Boolean(r)) return a.createElement(f, {
                            achievement: e.achievement,
                            refDelegate: y.a
                        });
                        var o = t && {
                            margin: {
                                bottom: 1
                            },
                            borderRadius: s.x.Large,
                            background: s.r.Base,
                            overflow: s.ab.Hidden
                        };
                        return a.createElement(s.zb, i.__assign({
                            elevation: 1
                        }, o), a.createElement(c.a, {
                            achievement: e.achievement,
                            layoutClassName: "ach-card--in-list"
                        }, a.createElement("div", null, e.children, j(e.achievement))))
                    })
                },
                j = function(e) {
                    return Object(h.b)() ? a.createElement(v.a, {
                        progress: e.progress,
                        progressCap: e.progressCap,
                        completedAt: e.completedAt
                    }) : a.createElement(m, {
                        achievement: e
                    })
                },
                C = function() {
                    var e = Array(3).fill("").map(function(e, t) {
                        return a.createElement(s.Xa, {
                            margin: {
                                bottom: 1
                            },
                            key: t
                        }, a.createElement(s.eb, {
                            height: 70
                        }))
                    });
                    return [a.createElement(s.Xa, i.__assign({
                        margin: {
                            bottom: 3
                        }
                    }, E, {
                        key: "recently-completed"
                    }), e), a.createElement("div", i.__assign({}, _, {
                        key: "not-completed"
                    }), e), a.createElement(s.Xa, i.__assign({
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
                a = n("/7QA"),
                r = n("5NYc"),
                o = n("Ue10"),
                c = function(e) {
                    var t = e.find(function(e) {
                        return e.metric === r.a.HOUR_COUNT
                    });
                    if (void 0 !== t) {
                        var n = t && t.progress;
                        return Object(a.d)("in <x:strong>{duration} hours</x:strong> streamed", {
                            "x:strong": function(e) {
                                return i.createElement(o.W, {
                                    bold: !0,
                                    type: o.Pb.Span
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
                s = function(e) {
                    return e.sort(function(e, t) {
                        return e.time_based && !t.time_based ? 1 : !e.time_based && t.time_based ? -1 : 0
                    })
                }
        }
    }
]);