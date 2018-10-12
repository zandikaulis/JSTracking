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
                        learnMoreURL: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
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
                    return r.createElement(g.xb, {
                        className: "ach-page",
                        margin: {
                            bottom: 1
                        },
                        display: g.W.Flex,
                        flexDirection: g.Y.Column,
                        flexWrap: g.Z.NoWrap,
                        alignItems: g.f.Stretch,
                        breakpointMedium: {
                            flexDirection: g.Y.Row
                        },
                        fullHeight: !0
                    }, r.createElement(g.xb, {
                        className: "ach-col-wrapper ach-col-wrapper--q",
                        display: g.W.Flex,
                        flexWrap: g.Z.NoWrap,
                        flexDirection: g.Y.Column,
                        flexShrink: 0,
                        breakpointMedium: {
                            display: g.W.Block
                        }
                    }, r.createElement(g.Va, i.__assign({
                        className: t
                    }, v), r.createElement(g.Va, {
                        padding: {
                            x: 4,
                            y: 4
                        },
                        margin: {
                            bottom: 2
                        },
                        fullHeight: !0
                    }, e.left))), r.createElement(g.xb, {
                        className: "ach-col-wrapper ach-col-wrapper--l",
                        display: g.W.Flex,
                        flexGrow: 1,
                        flexWrap: g.Z.NoWrap,
                        flexDirection: g.Y.Column,
                        flexShrink: 0,
                        breakpointMedium: {
                            display: g.W.Block
                        }
                    }, r.createElement(g.Va, i.__assign({
                        className: n
                    }, A), e.right)), r.createElement(f, null))
                },
                E = n("gq0V"),
                _ = n("IFXb"),
                O = n("4eyL"),
                T = n("jvBR"),
                S = n("i68L"),
                x = n("xMok"),
                w = n("5NYc"),
                j = function(e) {
                    var t = Object(E.b)(),
                        n = t ? {
                            x: .5
                        } : {},
                        i = t ? {
                            left: 1
                        } : {};
                    return r.createElement(g.xb, {
                        key: e.buttonText,
                        background: g.r.Alt2,
                        borderRadius: g.x.Large,
                        margin: i
                    }, r.createElement(g.z, {
                        targetBlank: e.targetBlank,
                        linkTo: e.url,
                        onClick: e.onClickButton,
                        type: e.buttonType
                    }, r.createElement(g.Va, {
                        padding: n
                    }, e.buttonText)))
                };

            function k(e) {
                var t = {
                    spotlight_type: e.type,
                    achievement_key: e.achievementKey || null,
                    quest_key: e.questKey || null
                };
                o.n.track(m.SpadeEventType.AchievementSpotlightImpression, t)
            }

            function C(e) {
                var t = {
                    quest_id: e
                };
                o.n.track(m.SpadeEventType.AchievementQuestBannerClick, t)
            }
            var D = n("u2gS"),
                q = function(e) {
                    if (e.isPartner) return r.createElement(I, {
                        title: e.title,
                        subtitle: e.subtitle,
                        url: e.url
                    });
                    var t = e.url ? r.createElement(g.T, {
                        to: e.url
                    }, r.createElement(g.V, {
                        type: g.Nb.Span,
                        color: g.O.OverlayAlt
                    }, e.subtitle)) : e.subtitle;
                    return r.createElement("div", null, r.createElement(g.V, {
                        ellipsis: !0,
                        color: g.O.Overlay,
                        bold: !0,
                        fontSize: g.Aa.Size5
                    }, e.title), r.createElement(g.V, {
                        ellipsis: !0,
                        color: g.O.OverlayAlt,
                        fontSize: g.Aa.Size5
                    }, t))
                },
                I = function(e) {
                    return r.createElement(g.xb, {
                        display: g.W.Flex,
                        flexGrow: 1,
                        flexWrap: g.Z.NoWrap,
                        alignItems: g.f.Center
                    }, r.createElement(g.Va, {
                        display: g.W.Flex,
                        flexDirection: g.Y.Column,
                        flexGrow: 1
                    }, r.createElement(g.V, {
                        ellipsis: !0,
                        color: g.O.Overlay,
                        bold: !0,
                        fontSize: g.Aa.Size5
                    }, e.title), r.createElement(g.V, {
                        ellipsis: !0,
                        color: g.O.OverlayAlt,
                        fontSize: g.Aa.Size5
                    }, r.createElement(g.T, {
                        to: e.url
                    }, r.createElement(g.V, {
                        type: g.Nb.Span,
                        color: g.O.OverlayAlt
                    }, e.subtitle)))), r.createElement(g.xb, {
                        display: g.W.Flex,
                        color: g.O.OverlayAlt
                    }, r.createElement(g.mb, {
                        asset: g.nb.Verified
                    })))
                },
                L = function(e) {
                    return r.createElement(g.xb, {
                        display: g.W.Flex,
                        flexGrow: 1,
                        alignItems: g.f.Center
                    }, r.createElement(g.Va, {
                        display: g.W.Flex,
                        flexDirection: g.Y.Column,
                        flexGrow: 1,
                        alignItems: g.f.Start
                    }, r.createElement(g.V, {
                        fontSize: g.Aa.Size5
                    }, r.createElement(g.V, {
                        color: g.O.Overlay,
                        type: g.Nb.Span,
                        bold: !0
                    }, e.title), !!e.subtitle && r.createElement(g.Va, {
                        display: g.W.Inline,
                        margin: {
                            left: .5
                        }
                    }, r.createElement(g.V, {
                        color: g.O.OverlayAlt,
                        type: g.Nb.Span
                    }, e.subtitle)))), r.createElement(g.Va, {
                        display: g.W.Flex,
                        flexShrink: 0,
                        padding: {
                            left: 2
                        }
                    }, e.children))
                },
                P = function(e) {
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
                            case w.b.PATH_TO_PARTNER:
                                e.role === D.d.Partner ? c = r.createElement(W, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: n,
                                    learnMoreText: a
                                }) : e.role === D.d.Affiliate && e.isComplete && (c = r.createElement(B, {
                                    questKey: e.key
                                }));
                                break;
                            case w.b.PATH_TO_AFFILIATE:
                                e.role === D.d.Partner ? c = r.createElement(W, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: n,
                                    learnMoreText: a
                                }) : e.role === D.d.Affiliate ? c = r.createElement(V, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: t,
                                    learnMoreText: a
                                }) : e.role === D.d.None && e.isComplete && (c = r.createElement(R, {
                                    channelLogin: this.props.channelLogin,
                                    questKey: e.key,
                                    hasAffiliateInviteError: e.hasAffiliateInviteError,
                                    bannerTitle: Object(o.d)("Congrats! You're eligible for Affiliate status.", "AchievementsBannerPathToAffiliate")
                                }));
                                break;
                            case w.b.IT_BEGINS:
                                e.role === D.d.Partner ? c = r.createElement(W, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: n,
                                    learnMoreText: a
                                }) : e.role === D.d.Affiliate ? c = r.createElement(V, {
                                    channelLogin: this.props.channelLogin,
                                    bannerTitle: t,
                                    learnMoreText: a
                                }) : e.isComplete && (c = r.createElement(N, null))
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
                            l = r.createElement(g.xb, i.__assign({}, s, {
                                background: g.r.AccentAlt2
                            }), c)
                        }
                        return l
                    }, t
                }(r.Component),
                N = function() {
                    return r.createElement(q, {
                        title: Object(o.d)("You've started your path as a Twitch streamer", "AchievementsBannerItBegins"),
                        subtitle: Object(o.d)("Which achievement will you complete next?", "AchievementsBannerItBegins")
                    })
                },
                V = function(e) {
                    return Object(E.b)() ? r.createElement(L, {
                        title: e.bannerTitle
                    }, r.createElement(j, {
                        buttonText: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles",
                        buttonType: g.F.Text,
                        targetBlank: !0
                    }), r.createElement(j, {
                        buttonText: Object(o.d)("Affiliate Settings", "AchievementsBannerPathToPartner"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue"
                    })) : r.createElement(q, {
                        title: e.bannerTitle,
                        subtitle: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles"
                    })
                },
                R = function(e) {
                    var t = function() {
                        return C(e.questKey)
                    };
                    return e.hasAffiliateInviteError ? r.createElement(L, {
                        title: e.bannerTitle,
                        subtitle: Object(o.d)("First, complete your in-progress developer onboarding.", "AchievementsBannerPathToAffiliate")
                    }, r.createElement(j, {
                        buttonText: Object(o.d)("Continue", "AchievementsBannerPathToAffiliate"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue",
                        onClickButton: t
                    })) : r.createElement(L, {
                        title: e.bannerTitle,
                        subtitle: Object(o.d)("Begin your Affiliate onboarding.", "AchievementsBannerPathToAffiliate")
                    }, r.createElement(j, {
                        buttonText: Object(o.d)("Get Started", "AchievementsBannerPathToAffiliate"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue",
                        onClickButton: t
                    }))
                },
                W = function(e) {
                    return Object(E.b)() ? r.createElement(L, {
                        title: e.bannerTitle
                    }, r.createElement(j, {
                        buttonText: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                        buttonType: g.F.Text,
                        targetBlank: !0
                    }), r.createElement(j, {
                        buttonText: Object(o.d)("Partner Settings", "AchievementsBannerPathToPartner"),
                        url: "/" + e.channelLogin + "/dashboard/settings/revenue"
                    })) : r.createElement(q, {
                        title: e.bannerTitle,
                        subtitle: e.learnMoreText,
                        url: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                        isPartner: !0
                    })
                },
                B = function(e) {
                    return r.createElement(L, {
                        title: Object(o.d)("Apply to the Twitch Partner program.", "AchievementsBannerPathToPartner"),
                        subtitle: Object(o.d)("We usually follow up in 7 business days.", "AchievementsBannerPathToPartner")
                    }, r.createElement(j, {
                        buttonText: Object(o.d)("Apply", "AchievementsBannerPathToPartner"),
                        url: "/partner/signup",
                        onClickButton: function() {
                            return C(e.questKey)
                        }
                    }))
                },
                F = function(e) {
                    var t = Object(o.d)("Completed", "AchievementsQuests"),
                        n = function() {
                            return Object(E.b)() ? r.createElement(g.xb, {
                                fontSize: g.Aa.Size4
                            }, r.createElement(g.ab, {
                                label: t,
                                type: g.bb.Success
                            })) : r.createElement(g.ab, {
                                label: t,
                                type: g.bb.Success
                            })
                        };
                    return e.completedAt ? r.createElement(g.Qb, {
                        label: Object(o.c)(e.completedAt, "long"),
                        direction: g.Sb.Left
                    }, n()) : n()
                },
                G = n("y/W1"),
                z = n("qe41"),
                U = n("9+Lo"),
                M = (n("qCmY"), function(e) {
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
                        s = Object(G.c)(e.quest.requirements),
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
                    return r.createElement(g.xb, i.__assign({
                        className: c,
                        position: g.db.Relative
                    }, A), r.createElement(g.Sa, {
                        onClick: e.onHeaderClick,
                        blurAfterClick: !0
                    }, r.createElement(g.xb, i.__assign({
                        className: "ach-q-item__header quest-header",
                        display: g.W.Flex
                    }, b, {
                        borderBottom: !0,
                        alignItems: g.f.Center
                    }), r.createElement(g.Va, {
                        display: g.W.Flex,
                        flexGrow: 1,
                        flexWrap: g.Z.NoWrap,
                        alignItems: g.f.Center
                    }, r.createElement(g.Va, i.__assign({
                        display: g.W.Flex,
                        flexGrow: 1,
                        fullHeight: !0
                    }, v, {
                        alignItems: g.f.Center
                    }), t && r.createElement(g.xb, {
                        borderRadius: g.x.Large,
                        className: "quest-header__badge-wrap",
                        margin: {
                            right: 1
                        },
                        overflow: g.Ya.Hidden
                    }, r.createElement(g.S, {
                        src: e.quest.image,
                        alt: Object(o.d)("quest image", "AchievementsQuestCard")
                    })), r.createElement(g.V, i.__assign({
                        className: "ach-q-item__title",
                        type: g.Nb.Strong
                    }, f, {
                        fontSize: g.Aa.Size4
                    }), e.quest.title)), !h && r.createElement(g.Qb, {
                        label: Object(G.b)(n, a),
                        direction: g.Sb.Left
                    }, r.createElement(g.xb, {
                        display: g.W.Flex,
                        fullHeight: !0,
                        padding: {
                            right: 1
                        },
                        color: g.O.Alt2
                    }, function(e, n) {
                        var i = [];
                        if (!t) return r.createElement(g.V, {
                            className: "ach-q-item__label",
                            color: g.O.Alt2,
                            fontSize: g.Aa.Size5
                        }, Object(G.b)(e, n));
                        for (var a = 0; a < e; a++) i.push(r.createElement(g.xb, {
                            key: "completeReqBar-" + a,
                            className: "quest-progress-bars quest-progress-bars__complete",
                            borderRadius: g.x.Large,
                            margin: {
                                left: .5
                            }
                        }));
                        for (a = 0; a < n - e; a++) i.push(r.createElement(g.xb, {
                            key: "incompleteReqBar-" + a,
                            className: "quest-progress-bars quest-progress-bars__incomplete",
                            borderRadius: g.x.Large,
                            margin: {
                                left: .5
                            },
                            background: g.r.Alt2
                        }));
                        return i
                    }(n, a))), h && r.createElement(g.Va, {
                        display: g.W.Flex
                    }, r.createElement(g.Va, {
                        alignItems: g.f.Center,
                        flexGrow: 0,
                        display: g.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, r.createElement(F, {
                        completedAt: e.quest.completedAt
                    })))))), r.createElement(P, {
                        quest: e.quest,
                        channelLogin: p
                    }), r.createElement(g.xb, {
                        background: g.r.Base
                    }, s.map(function(t) {
                        return r.createElement(g.Va, {
                            key: t.metric
                        }, function(t) {
                            if (!e.quest.isComplete && t.time_based && !l) return l = !0, r.createElement(U.a, {
                                channelLogin: p,
                                questKey: e.quest.key
                            })
                        }(t), r.createElement(z.a, {
                            requirement: t,
                            requirementInstructionString: u,
                            isComplete: e.quest.isComplete,
                            subtext: t.metric === w.a.AVERAGE_CCU ? Object(G.a)(e.quest.requirements) : void 0,
                            ccuTooltipLabel: e.quest.ccuTooltipLabel
                        }))
                    })), r.createElement(g.xb, {
                        display: g.W.Flex,
                        padding: 1,
                        background: t ? g.r.Alt : g.r.Alt2
                    }, r.createElement(g.Va, {
                        padding: {
                            top: .5,
                            bottom: .5
                        },
                        margin: {
                            left: 1,
                            right: .5
                        },
                        display: g.W.Flex,
                        alignItems: g.f.Center
                    }, r.createElement(g.V, {
                        color: g.O.Alt2,
                        fontSize: g.Aa.Size6,
                        type: g.Nb.Span
                    }, m, " ", r.createElement(g.T, {
                        targetBlank: !0,
                        to: e.quest.learnMoreURL
                    }, Object(o.d)("Learn more", "AchievementsPathToAffiliate"))))))
                }),
                Y = function(e) {
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
                                return r.createElement(M, {
                                    key: n.key,
                                    quest: n,
                                    channelLogin: e.props.channel.name,
                                    onHeaderClick: function() {
                                        return e.handleActivate(n)
                                    },
                                    isActive: n === t
                                })
                            });
                        return r.createElement(g.Va, {
                            fullHeight: !0
                        }, this.props.isLoading ? this.renderPlaceholders() : n)
                    }, t.prototype.renderPlaceholders = function() {
                        return [r.createElement(g.Va, {
                            margin: {
                                bottom: 2
                            },
                            key: "opened-quest"
                        }, r.createElement(g.cb, {
                            height: 450
                        })), r.createElement(g.Va, {
                            margin: {
                                bottom: 2
                            },
                            key: "collasped-quest-1"
                        }, r.createElement(g.cb, {
                            height: 62
                        })), r.createElement(g.Va, {
                            margin: {
                                bottom: 2
                            },
                            key: "collasped-quest-2"
                        }, r.createElement(g.cb, {
                            height: 62
                        }))]
                    }, t
                }(r.Component),
                H = n("j8bx"),
                Q = n("Tc9I"),
                K = {
                    "data-test-selector": "title"
                },
                X = {
                    "data-test-selector": "subtitle"
                },
                Z = {
                    "data-test-selector": "dismiss"
                },
                J = n("FuXV"),
                $ = function(e) {
                    var t = e.title,
                        n = e.subtitle;
                    return r.createElement(g.xb, {
                        position: g.db.Relative,
                        padding: 2,
                        textAlign: g.Jb.Center,
                        className: "ach-sb",
                        elevation: 1,
                        border: !0
                    }, r.createElement(J.a, {
                        confettiCount: 40,
                        infinite: !0
                    }), r.createElement(g.Va, {
                        margin: {
                            left: 1
                        },
                        position: g.db.Relative,
                        zIndex: g.ac.Above,
                        className: "ach-sb__text"
                    }, r.createElement(g.V, i.__assign({}, K, {
                        fontSize: g.Aa.Size4,
                        bold: !0,
                        ellipsis: !0
                    }), t), r.createElement(g.V, i.__assign({}, X, {
                        fontSize: g.Aa.Size5,
                        color: g.O.Alt2,
                        ellipsis: !0
                    }), n)))
                },
                ee = function(e) {
                    var t = Object(E.b)() ? {} : {
                        top: 3,
                        x: 4
                    };
                    return r.createElement(g.xb, {
                        position: g.db.Absolute,
                        margin: t,
                        zIndex: g.ac.Above,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, r.createElement(g.i, {
                        type: g.n.BounceIn,
                        duration: g.k.Medium,
                        enabled: !0,
                        timing: g.m.EaseInOut
                    }, e.children, r.createElement(g.Va, {
                        className: "ach-sb__dismiss",
                        position: g.db.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, r.createElement(g.A, i.__assign({}, Z, {
                        ariaLabel: Object(o.d)("Close", "AchievementSpotlightDismiss"),
                        type: g.C.Default,
                        size: g.B.Large,
                        icon: g.nb.Close,
                        onClick: e.onDismissSpotlight
                    })))))
                },
                te = "https://static-cdn.jtvnw.net/emoticons/v1/135393/3.0",
                ne = "PartyTime",
                ie = function() {
                    var e = Object(o.d)("Celebrate milestones and track your progress towards becoming an Affiliate or Partner.", "AchievementsSpotlight"),
                        t = Object(o.d)("Learn more", "AchievementsSpotlight");
                    return r.createElement(g.xb, {
                        padding: 2,
                        className: "ach-sb",
                        display: g.W.Flex,
                        alignItems: g.f.Center,
                        elevation: 1,
                        border: !0
                    }, r.createElement(g.xb, {
                        display: g.W.Flex,
                        fullWidth: !0,
                        flexWrap: g.Z.NoWrap
                    }, r.createElement(g.Va, {
                        display: g.W.Flex,
                        flexShrink: 0,
                        alignContent: g.e.Center,
                        alignItems: g.f.Center
                    }, r.createElement(g.q, {
                        src: te,
                        alt: ne,
                        size: 30
                    })), r.createElement(g.Va, {
                        flexGrow: 1,
                        margin: {
                            left: 1
                        },
                        className: "ach-sb__text"
                    }, r.createElement(g.V, i.__assign({}, K, {
                        fontSize: g.Aa.Size4,
                        bold: !0,
                        ellipsis: !0
                    }), Object(o.d)("Welcome to Achievements", "AchievementsSpotlight")), r.createElement(g.V, i.__assign({}, X, {
                        fontSize: g.Aa.Size5,
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
                            return o.l.set(re, a), r
                        }, n.dismissedSpotlights = o.l.get(re, {}), n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        if (!this.props.isLoading && !this.currentSpotlightWasDismissed) {
                            this.handleViewSpotlight();
                            var t = void 0;
                            switch (this.bannerType) {
                                case w.b.PATH_TO_PARTNER:
                                    t = r.createElement(oe, null);
                                    break;
                                case w.b.PATH_TO_AFFILIATE:
                                    t = r.createElement(ce, null);
                                    break;
                                case w.b.IT_BEGINS:
                                    t = r.createElement(le, null);
                                    break;
                                default:
                                    t = r.createElement(ie, null)
                            }
                            e = r.createElement(ee, {
                                onDismissSpotlight: this.handleDismissSpotlight
                            }, t)
                        }
                        return r.createElement(g.Va, {
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
                            var e = H.a.topCelebratable(this.props.quests);
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
                    var e = Object(Q.b)(w.b.PATH_TO_PARTNER),
                        t = r.createElement(se, {
                            title: e.title
                        }),
                        n = e.bannerTitle(t);
                    return k({
                        type: "quest",
                        questKey: w.b.PATH_TO_PARTNER
                    }), r.createElement($, {
                        title: n,
                        subtitle: e.subtitle
                    })
                },
                ce = function() {
                    var e = Object(Q.b)(w.b.PATH_TO_AFFILIATE),
                        t = r.createElement(se, {
                            title: e.title
                        }),
                        n = e.bannerTitle(t);
                    return k({
                        type: "quest",
                        questKey: w.b.PATH_TO_AFFILIATE
                    }), r.createElement($, {
                        title: n,
                        subtitle: e.subtitle
                    })
                },
                le = function() {
                    var e = Object(Q.b)(w.b.IT_BEGINS),
                        t = r.createElement(se, {
                            title: e.title
                        }),
                        n = e.bannerTitle(t);
                    return k({
                        type: "quest",
                        questKey: w.b.IT_BEGINS
                    }), r.createElement($, {
                        title: n,
                        subtitle: e.subtitle
                    })
                },
                se = function(e) {
                    var t = e.title;
                    return r.createElement(g.V, {
                        type: g.Nb.Span,
                        color: g.O.OverlayAlt
                    }, t)
                },
                me = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        o.o.setPageTitle(Object(o.d)("Achievements", "DashboardAchievementsPage"))
                    }, t.prototype.render = function() {
                        var e = T.a.fromChannelData(this.props.data);
                        return e ? r.createElement(O.a, {
                            channel: e
                        }, function(t) {
                            return Object(E.b)() ? r.createElement(_.a, null, r.createElement(ae, i.__assign({}, t, {
                                channelName: e.name
                            }), function() {
                                return r.createElement(g.Va, null, r.createElement(Y, {
                                    quests: t.quests,
                                    channel: e,
                                    isLoading: t.isLoading
                                }), r.createElement(x.a, {
                                    achievements: t.achievements,
                                    isLoading: t.isLoading
                                }))
                            })) : r.createElement(ae, i.__assign({}, t, {
                                channelName: e.name
                            }), function(n) {
                                return r.createElement(y, {
                                    isSpotlightShown: n,
                                    left: r.createElement(Y, {
                                        quests: t.quests,
                                        channel: e,
                                        isLoading: t.isLoading
                                    }),
                                    right: r.createElement(x.a, {
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
                }), Object(u.c)("AchievementsPage", {
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
                            display: m.W.Flex,
                            margin: {
                                x: 1,
                                top: 1
                            },
                            padding: 1,
                            background: m.r.Alt
                        } : {
                            display: m.W.Flex,
                            padding: 1,
                            background: m.r.Alt,
                            borderTop: !0,
                            borderBottom: !0
                        };
                    return o.createElement(m.xb, i.__assign({}, u), o.createElement(m.Va, {
                        padding: {
                            left: 1
                        },
                        flexGrow: 1
                    }, o.createElement(m.V, {
                        color: m.O.Alt2
                    }, Object(c.d)("<x:strong>30-day Performance</x:strong> ({startDate, date, short} - {endDate, date, short})", {
                        "x:strong": function(e) {
                            return o.createElement(m.V, {
                                bold: !0,
                                type: m.Nb.Span
                            }, e)
                        },
                        startDate: n,
                        endDate: t
                    }, "QuestTimeFrameBar"))), e.questKey !== l.b.PATH_TO_PARTNER && o.createElement(m.Va, {
                        padding: {
                            right: 1
                        }
                    }, o.createElement(m.T, {
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
                        return a.createElement(c.Va, {
                            className: "confetti-layer",
                            position: c.db.Absolute,
                            overflow: c.Ya.Hidden,
                            zIndex: c.ac.Default,
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
                            overflow: l.Ya.Hidden,
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
                    return a.createElement(l.Va, i.__assign({
                        display: l.W.Flex,
                        flexWrap: l.Z.NoWrap,
                        position: l.db.Relative,
                        flexShrink: 0
                    }, u), a.createElement(l.Va, {
                        className: s,
                        position: l.db.Relative,
                        flexShrink: 0
                    }, a.createElement(l.xb, i.__assign({
                        className: m,
                        background: l.r.Alt2
                    }, n), a.createElement("img", {
                        alt: e.achievement.title,
                        className: "ach-card__img",
                        src: e.achievement.image.scale1x,
                        srcSet: e.achievement.image.scale1x + " 1x, " + e.achievement.image.scale3x + " 3x"
                    })), Boolean(e.achievement.level) && a.createElement(l.xb, {
                        className: "ach-card__lvl",
                        position: l.db.Absolute,
                        background: l.r.Alt
                    }, a.createElement(l.s, {
                        border: !0,
                        icon: Object(o.a)(e.achievement.level),
                        size: 20,
                        type: l.t.Dashboard
                    }))), a.createElement(l.xb, {
                        overflow: l.Ya.Hidden,
                        display: l.W.Flex,
                        justifyContent: l.Ua.Center,
                        flexDirection: l.Y.Column,
                        margin: {
                            left: 2
                        }
                    }, a.createElement(l.V, {
                        fontSize: l.Aa.Size4,
                        color: l.O.Alt,
                        bold: !0,
                        ellipsis: !0
                    }, e.achievement.title), a.createElement(l.V, {
                        fontSize: l.Aa.Size5,
                        color: l.O.Alt2,
                        ellipsis: !0
                    }, e.achievement.description)), a.createElement(l.xb, {
                        className: "ach-card__progress-meta",
                        display: l.W.Flex,
                        alignContent: l.e.Center,
                        alignItems: l.f.Center,
                        justifyContent: l.Ua.End,
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
                o = n("2iEm"),
                c = n("MjdR"),
                l = n("gq0V"),
                s = n("6XEL"),
                m = n("Ue10"),
                u = {
                    "data-test-selector": "achievement-card"
                },
                d = function(e) {
                    return a.createElement(o.a, i.__assign({
                        className: "ach-link",
                        "aria-hidden": e.isHidden,
                        tabIndex: e.isHidden ? -1 : void 0,
                        to: s.b.achievement(e.achievement)
                    }, u), a.createElement(h, {
                        achievement: e.achievement,
                        className: e.layoutClassName
                    }, e.children))
                },
                h = function(e) {
                    var t, n = Object(l.b)(),
                        o = r(e.className, {
                            "ach-card": !n,
                            "ach-card-vip": n,
                            "ach-card-vip--completed": Boolean(e.achievement.completedAt),
                            "ach-card--recent": e.achievement.wasRecentlyCompleted()
                        }),
                        s = n && {
                            padding: 1
                        };
                    return e.achievement.completedAt || (t = a.createElement(m.Va, {
                        position: m.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, a.createElement(m.gb, {
                        size: m.ib.ExtraSmall,
                        value: 100 * e.achievement.progressRatio
                    }))), a.createElement(m.xb, i.__assign({
                        className: o,
                        position: m.db.Relative
                    }, s), a.createElement(m.xb, {
                        className: "ach-card__inner"
                    }, a.createElement(c.a, {
                        achievement: e.achievement
                    }, a.createElement("div", null, e.children, !n && t)), n && t))
                };
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return d
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
                    return i.createElement(o.Va, {
                        display: o.W.Flex,
                        justifyContent: o.Ua.End
                    }, i.createElement(o.mb, {
                        type: e.checkMarkType,
                        asset: o.nb.Check,
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
                    checkMarkType: o.ob.Success
                });
                if (e.completedAt) return i.createElement(a.a, {
                    date: e.completedAt
                });
                if (1 === n && 1 === t) return i.createElement(c, {
                    checkMarkType: o.ob.Alt
                });
                var l = function() {
                    return i.createElement(o.Va, {
                        position: o.db.Relative,
                        display: o.W.Flex,
                        alignItems: o.f.Center
                    }, i.createElement(o.V, {
                        className: t >= n ? "quest-requirement-card-progress__success" : "quest-requirement-card-progress",
                        color: t >= n ? void 0 : o.O.Alt2,
                        bold: !0,
                        fontSize: o.Aa.Size4,
                        type: o.Nb.Span
                    }, Object(r.e)(Math.floor(100 * t) / 100)), i.createElement(o.Va, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(o.V, {
                        fontSize: o.Aa.Size5,
                        color: o.O.Alt2,
                        type: o.Nb.Span
                    }, "/")), i.createElement(o.V, {
                        fontSize: o.Aa.Size5,
                        color: o.O.Alt2
                    }, Object(r.f)(e.progressCap)))
                };
                return t > 999 ? i.createElement(o.Qb, {
                    label: Object(r.e)(Math.floor(100 * t) / 100),
                    direction: o.Sb.Left
                }, l()) : l()
            }
        },
        gi7w: function(e, t, n) {
            "use strict";
            var i = n("Ue10"),
                r = {
                    1: i.nb.Roman1,
                    2: i.nb.Roman2,
                    3: i.nb.Roman3,
                    4: i.nb.Roman4,
                    5: i.nb.Roman5
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
                return a.createElement(l.xb, {
                    position: l.db.Relative,
                    display: l.W.Flex,
                    alignItems: l.f.Center,
                    padding: {
                        y: 2,
                        left: 2
                    },
                    borderBottom: !0
                }, a.createElement(l.Va, r.__assign({
                    display: l.W.Flex,
                    flexGrow: 1,
                    alignItems: l.f.Center
                }, n ? {} : {
                    padding: {
                        right: 3
                    },
                    flexGrow: 1
                }), a.createElement(l.Va, null, a.createElement(l.Va, {
                    display: l.W.Flex,
                    alignItems: l.f.Center
                }, a.createElement(l.V, {
                    bold: !0,
                    fontSize: l.Aa.Size5
                }, e.requirementInstructionString[t.metric]), n && a.createElement(l.Va, {
                    display: l.W.Flex,
                    padding: {
                        left: .5,
                        right: 3
                    }
                }, a.createElement(l.Qb, {
                    label: e.ccuTooltipLabel,
                    direction: l.Sb.Top,
                    width: 230
                }, a.createElement(l.mb, {
                    asset: l.nb.NotificationInfo,
                    width: 16,
                    height: 16,
                    type: l.ob.Alt2
                })))), e.subtext && !e.isComplete && a.createElement(l.V, {
                    color: l.O.Alt2,
                    "data-test-selector": i.QUEST_SUBTEXT
                }, e.subtext))), a.createElement(l.Va, {
                    display: l.W.Flex,
                    justifyContent: l.Ua.End,
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
                    return i.createElement(a.V, {
                        fontSize: a.Aa.Size5,
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
                    return 0 === e.achievement.progress ? r.createElement("span", null) : e.achievement.completedAt ? r.createElement(s.Va, {
                        display: s.W.InlineFlex,
                        alignItems: s.f.Center
                    }, r.createElement(l.a, {
                        date: e.achievement.completedAt
                    })) : r.createElement(s.xb, {
                        className: "ach-card__pill-wrapper",
                        fontSize: s.Aa.Size5
                    }, r.createElement(s.ab, {
                        label: Object(o.e)(e.achievement.progressRatio, "percent")
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
                            display: s.W.Flex,
                            flexGrow: 1,
                            margin: {
                                y: 2
                            },
                            zIndex: s.ac.Above,
                            borderRadius: s.x.Large,
                            fullWidth: !0,
                            fullHeight: !0
                        },
                        c = t ? {
                            display: s.W.Flex,
                            flexWrap: s.Z.NoWrap,
                            alignItems: s.f.Center,
                            flexGrow: 1,
                            padding: 1,
                            background: s.r.Alt,
                            borderRadius: s.x.Large
                        } : {
                            display: s.W.Flex,
                            flexWrap: s.Z.NoWrap,
                            alignItems: s.f.Center,
                            flexGrow: 1,
                            padding: 1,
                            background: s.r.Alt2,
                            border: !0
                        };
                    return r.createElement(s.xb, i.__assign({
                        className: n,
                        position: s.db.Relative
                    }, o), r.createElement(s.xb, i.__assign({
                        className: "ach-card__inner"
                    }, a, {
                        refDelegate: e.refDelegate
                    }), r.createElement(d.a, {
                        achievement: e.achievement
                    }, t ? void 0 : r.createElement(g, {
                        achievement: e.achievement
                    })), r.createElement(s.Va, {
                        position: s.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, r.createElement(s.A, {
                        ariaLabel: "Close",
                        icon: s.nb.Close,
                        linkTo: p.b.channelAchievements(e.achievement.channelName)
                    })), r.createElement(s.Va, {
                        display: s.W.Flex,
                        flexGrow: 1,
                        position: s.db.Relative,
                        padding: {
                            top: 1
                        }
                    }, r.createElement(s.xb, i.__assign({}, c), r.createElement(s.q, i.__assign({}, b, {
                        size: 30
                    })), r.createElement(s.xb, {
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
                    }) : r.createElement(s.xb, {
                        className: "ach-card__pill-wrapper",
                        fontSize: s.Aa.Size5
                    }, r.createElement(s.ab, {
                        label: Object(o.e)(e.achievement.progressRatio, "percent")
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
                    return r.createElement(s.Va, {
                        padding: t,
                        margin: {
                            bottom: 2
                        }
                    }, e.isLoading ? j() : r.createElement(S, {
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
                        }, Boolean(this.props.achievements.topRecentlyCompleted.length) && r.createElement(s.Va, i.__assign({
                            margin: {
                                bottom: 3
                            }
                        }, E), r.createElement(s.Va, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(s.V, {
                            type: s.Nb.H3,
                            fontSize: s.Aa.Size4,
                            bold: !0
                        }, Object(o.d)("Recently Completed", "AchievementsList"))), this.props.achievements.topRecentlyCompleted.map(function(t) {
                            return r.createElement(x, {
                                achievement: t,
                                key: t.id
                            }, !e.state.didCelebrate && r.createElement(A.a, {
                                confettiCount: 30
                            }))
                        })), Boolean(this.props.achievements.notCompleted.length) && r.createElement("div", i.__assign({}, _), r.createElement(s.Va, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(s.V, {
                            type: s.Nb.H3,
                            fontSize: s.Aa.Size4,
                            bold: !0
                        }, Object(o.d)("In Progress", "AchievementsList"))), this.props.achievements.notCompleted.map(function(e) {
                            return r.createElement(x, {
                                achievement: e,
                                key: e.id
                            })
                        })), Boolean(this.props.achievements.pastCompleted.length) && r.createElement(s.Va, i.__assign({
                            margin: {
                                top: 3
                            }
                        }, O), r.createElement(s.Va, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(s.V, {
                            type: s.Nb.H3,
                            fontSize: s.Aa.Size4,
                            bold: !0
                        }, Object(o.d)("Completed", "AchievementsList"))), this.props.achievements.pastCompleted.map(function(e) {
                            return r.createElement(x, {
                                achievement: e,
                                key: e.id
                            })
                        })))
                    }, t
                }(r.Component),
                x = function(e) {
                    var t = Object(h.b)();
                    return r.createElement(a.a, {
                        path: p.b.achievement(e.achievement),
                        exact: !0
                    }, function(n) {
                        var a = n.match;
                        if (Boolean(a)) return r.createElement(f, {
                            achievement: e.achievement,
                            refDelegate: y.a
                        });
                        var o = t && {
                            margin: {
                                bottom: 1
                            },
                            borderRadius: s.x.Large,
                            background: s.r.Base,
                            overflow: s.Ya.Hidden
                        };
                        return r.createElement(s.xb, i.__assign({
                            elevation: 1
                        }, o), r.createElement(c.a, {
                            achievement: e.achievement,
                            layoutClassName: "ach-card--in-list"
                        }, r.createElement("div", null, e.children, w(e.achievement))))
                    })
                },
                w = function(e) {
                    return Object(h.b)() ? r.createElement(v.a, {
                        progress: e.progress,
                        progressCap: e.progressCap,
                        completedAt: e.completedAt
                    }) : r.createElement(m, {
                        achievement: e
                    })
                },
                j = function() {
                    var e = Array(3).fill("").map(function(e, t) {
                        return r.createElement(s.Va, {
                            margin: {
                                bottom: 1
                            },
                            key: t
                        }, r.createElement(s.cb, {
                            height: 70
                        }))
                    });
                    return [r.createElement(s.Va, i.__assign({
                        margin: {
                            bottom: 3
                        }
                    }, E, {
                        key: "recently-completed"
                    }), e), r.createElement("div", i.__assign({}, _, {
                        key: "not-completed"
                    }), e), r.createElement(s.Va, i.__assign({
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
                return w
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
                                return i.createElement(o.V, {
                                    bold: !0,
                                    type: o.Nb.Span
                                }, e)
                            },
                            duration: Object(r.e)(Math.floor(100 * n) / 100)
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