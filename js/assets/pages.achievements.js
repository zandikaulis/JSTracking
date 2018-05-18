webpackJsonp([111], {
    "49jV": function(e, t) {},
    "533y": function(e, t) {},
    D6QB: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("MDGG"),
            l = n("Odds"),
            o = function(e) {
                return 0 === e.achievement.progress ? i.createElement("span", null) : e.achievement.completedAt ? i.createElement(l._8, {
                    display: l.R.InlineFlex,
                    alignItems: l.c.Center
                }, i.createElement(r.a, {
                    date: e.achievement.completedAt
                })) : i.createElement(l._35, {
                    className: "ach-card__pill-wrapper",
                    fontSize: l.V.Size5
                }, i.createElement(l._12, {
                    label: Object(a.e)(e.achievement.progressRatio, "percent")
                }))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    KMD5: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("rEvf"),
            l = n("Odds"),
            o = function(e) {
                return e.quest.completedAchievements.includes(e.achievement) ? i.createElement("span", {
                    title: Object(a.d)("Completed within the last 30 days", "AchievementsQuests")
                }, i.createElement(r.a, null)) : e.achievement.completedAt ? null : e.achievement.progress ? i.createElement(l._35, {
                    className: "ach-card__pill-wrapper",
                    fontSize: l.V.Size5
                }, i.createElement(l._12, {
                    label: Object(a.e)(e.achievement.progressRatio, "percent")
                })) : null
            };
        n.d(t, "a", function() {
            return o
        })
    },
    MDGG: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("Odds"),
            l = function(e) {
                var t = Object(a.d)("Completed on {completedAt, date, short}", {
                        completedAt: e.date
                    }, "AchievementCard"),
                    n = Object(a.c)(e.date, "short");
                return i.createElement(r.Q, {
                    fontSize: r.V.Size5,
                    color: r.K.Alt2,
                    title: t
                }, n)
            };
        n.d(t, "a", function() {
            return l
        })
    },
    RVgG: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            l = n("F8kA"),
            o = n("i3Vq"),
            c = n("PGY2"),
            s = n("Odds"),
            m = {
                "data-test-selector": "achievement-card"
            },
            u = function(e) {
                return r.createElement(l.a, i.__assign({
                    className: "ach-link",
                    "aria-hidden": e.isHidden,
                    tabIndex: e.isHidden ? -1 : void 0,
                    to: c.b.achievement(e.achievement)
                }, m), r.createElement(h, {
                    achievement: e.achievement,
                    className: e.layoutClassName
                }, e.children))
            },
            h = function(e) {
                var t, n = a(e.className, {
                    "ach-card": !0,
                    "ach-card--completed": Boolean(e.achievement.completedAt),
                    "ach-card--recent": e.achievement.wasRecentlyCompleted()
                });
                return e.achievement.completedAt || (t = r.createElement(s._8, {
                    position: s._15.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    attachRight: !0
                }, r.createElement(s._18, {
                    size: s._20.ExtraSmall,
                    value: 100 * e.achievement.progressRatio
                }))), r.createElement(s._35, {
                    className: n,
                    position: s._15.Relative
                }, r.createElement(s._35, {
                    className: "ach-card__inner"
                }, r.createElement(o.a, {
                    achievement: e.achievement
                }, r.createElement("div", null, t, e.children))))
            };
        n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return u
        })
    },
    Xcw2: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            l = n("AJEV"),
            o = n("6w0d"),
            c = n("6sO2");

        function s(e, t) {
            var n = function() {
                    if (i) return i;
                    return i = {
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
                                return Object(c.d)("Update your Game/Category and Community", "AchievementDescription")
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
        var m = n("heIq");

        function u(e, t) {
            var n = new Map,
                i = [];
            e.achievements.forEach(function(e) {
                var i = function(e, t) {
                    var n = s(e.key, e.level);
                    return new l.a({
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
            });
            var a = new l.b(Array.from(n.values()));
            return e.quests.forEach(function(e) {
                var a, r, o, c = (a = e, r = t.role, o = Object(m.d)(a.key), new l.e({
                    id: a._id,
                    key: a.key,
                    completedAt: a.completed_at ? new Date(a.completed_at) : null,
                    title: o.title,
                    getInstructions: o.getInstructions,
                    learnMoreURL: o.learnMoreURL,
                    hasTimedCompletionWindow: o.hasTimedCompletionWindow,
                    position: o.position,
                    role: r,
                    achievements: []
                }));
                i.push(c), e.achievements.forEach(function(e) {
                    var t = e._id,
                        i = n.get(t);
                    i && (c.achievements.push(i), i.quest = c)
                }), c.finalize()
            }), {
                quests: l.e.sort(i),
                achievements: a
            }
        }
        var h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    quests: [],
                    achievements: new l.b,
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
                    var e;
                    return a.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this.props.channel ? (this.setState({
                                    isLoading: !0
                                }), [4, function(e) {
                                    return a.__awaiter(this, void 0, void 0, function() {
                                        var t, n, i;
                                        return a.__generator(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return t = "/v5/channels/" + e.id + "/achievement_progressions", [4, Object(o.a)({
                                                        path: t
                                                    })];
                                                case 1:
                                                    return (n = r.sent()).isError() ? [2, {
                                                        isError: !0,
                                                        quests: [],
                                                        achievements: new l.b
                                                    }] : (i = u(n.body, e), [2, a.__assign({
                                                        isError: !1
                                                    }, i)])
                                            }
                                        })
                                    })
                                }(this.props.channel)]) : [2];
                            case 1:
                                return e = t.sent(), this.setState({
                                    quests: e.quests,
                                    achievements: e.achievements,
                                    isLoading: !1
                                }), [2]
                        }
                    })
                })
            }, t
        }(r.Component);
        n.d(t, "a", function() {
            return h
        })
    },
    bQ8d: function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (void 0 === t && (t = 0), t > e) {
                var n = t;
                t = e, e = n
            }
            return t + Math.floor(Math.random() * (e - t + 1))
        }
        t.a = i, t.b = function(e) {
            return e[i(e.length - 1)]
        }, t.c = function(e, t) {
            var n = 0,
                i = [];
            for (; n < e;) i.push(t(n)), n += 1;
            return i
        }
    },
    g7OG: function(e, t) {
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
    i3Vq: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("sjgK"),
            r = n("Odds"),
            l = function(e) {
                return i.createElement(r._8, {
                    display: r.R.Flex,
                    flexWrap: r.U.NoWrap,
                    flexShrink: 0,
                    position: r._15.Relative
                }, i.createElement(r._8, {
                    className: "ach-card__badge-wrap",
                    position: r._15.Relative,
                    flexShrink: 0
                }, i.createElement(r._35, {
                    className: "ach-card__badge",
                    background: r.n.Alt2
                }, i.createElement("img", {
                    alt: e.achievement.title,
                    className: "ach-card__img",
                    src: e.achievement.image.scale1x,
                    srcSet: e.achievement.image.scale1x + " 1x, " + e.achievement.image.scale3x + " 3x"
                })), Boolean(e.achievement.level) && i.createElement(r._35, {
                    className: "ach-card__lvl",
                    position: r._15.Absolute,
                    background: r.n.Alt
                }, i.createElement(r.o, {
                    border: !0,
                    icon: Object(a.a)(e.achievement.level),
                    size: 20,
                    type: r.p.Dashboard
                }))), i.createElement(r._35, {
                    overflow: r._11.Hidden,
                    display: r.R.Flex,
                    justifyContent: r._7.Center,
                    flexDirection: r.T.Column,
                    margin: {
                        left: 2
                    }
                }, i.createElement(r.Q, {
                    fontSize: r.V.Size4,
                    color: r.K.Alt,
                    bold: !0,
                    ellipsis: !0
                }, e.achievement.title), i.createElement(r.Q, {
                    fontSize: r.V.Size5,
                    color: r.K.Alt2,
                    ellipsis: !0
                }, e.achievement.description)), i.createElement(r._35, {
                    className: "ach-card__progress-meta",
                    display: r.R.Flex,
                    alignContent: r.b.Center,
                    alignItems: r.c.Center,
                    justifyContent: r._7.End,
                    flexGrow: 1,
                    flexShrink: 0,
                    margin: {
                        left: 1
                    }
                }, e.children))
            };
        n.d(t, "a", function() {
            return l
        })
    },
    jQxI: function(e, t) {},
    "rE/F": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("2KeS"),
            l = n("6sO2"),
            o = n("7vx8"),
            c = n("j7/Y"),
            s = n("w9tK"),
            m = n("vH/s"),
            u = n("CSlQ"),
            h = (n("jQxI"), n("Xcw2")),
            d = n("K/WB"),
            p = n("g7OG"),
            v = n("CIox"),
            f = n("RVgG"),
            g = n("D6QB"),
            b = n("HW6M"),
            _ = n("F8kA"),
            y = n("i3Vq"),
            A = n("MDGG"),
            E = n("PGY2"),
            O = n("Odds"),
            w = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                alt: "VoHiYo"
            },
            j = function(e) {
                var t = b({
                    "ach-card": !0,
                    "ach-card--expanded": !0,
                    "ach-card--completed": Boolean(e.achievement.completedAt),
                    "ach-card--recent": e.achievement.wasRecentlyCompleted()
                });
                return a.createElement(O._35, {
                    className: t,
                    position: O._15.Relative
                }, a.createElement(O._35, {
                    className: "ach-card__inner",
                    elevation: 4,
                    refDelegate: e.refDelegate
                }, a.createElement(y.a, {
                    achievement: e.achievement
                }, a.createElement(S, {
                    achievement: e.achievement
                })), a.createElement(O._8, {
                    position: O._15.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, a.createElement(_.a, {
                    to: E.b.channelAchievements(e.achievement.channelName)
                }, a.createElement(O.w, {
                    ariaLabel: "Close",
                    icon: O._25.Close
                }))), a.createElement(O._8, {
                    display: O.R.Flex,
                    flexGrow: 1,
                    position: O._15.Relative,
                    padding: {
                        top: 1
                    }
                }, a.createElement(O._35, {
                    display: O.R.Flex,
                    flexWrap: O.U.NoWrap,
                    alignItems: O.c.Center,
                    flexGrow: 1,
                    padding: 1,
                    background: O.n.Alt2,
                    border: !0
                }, a.createElement(O.m, i.__assign({}, w, {
                    size: 30
                })), a.createElement(O._35, {
                    color: O.K.Alt,
                    margin: {
                        left: .5
                    },
                    padding: {
                        left: 1
                    }
                }, a.createElement("p", null, e.achievement.longDescription))))))
            },
            S = function(e) {
                return 0 === e.achievement.progress ? a.createElement("span", null) : e.achievement.completedAt ? a.createElement(A.a, {
                    date: e.achievement.completedAt
                }) : a.createElement(O._35, {
                    className: "ach-card__pill-wrapper",
                    fontSize: O.V.Size5
                }, a.createElement(O._12, {
                    label: Object(l.e)(e.achievement.progressRatio, "percent")
                }))
            },
            k = n("u3ZQ"),
            D = n("b9IH"),
            T = {
                "data-test-selector": "recently-completed-achievements-list"
            },
            x = {
                "data-test-selector": "not-completed-achievements-list"
            },
            C = {
                "data-test-selector": "past-completed-achievements-list"
            },
            N = function(e) {
                return a.createElement(O._8, {
                    padding: {
                        x: 4,
                        y: 4
                    },
                    margin: {
                        bottom: 2
                    }
                }, e.isLoading ? P() : a.createElement(R, {
                    achievements: e.achievements
                }))
            },
            R = function(e) {
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
                    return a.createElement("div", null, Boolean(this.props.achievements.topRecentlyCompleted.length) && a.createElement(O._8, i.__assign({
                        margin: {
                            bottom: 3
                        }
                    }, T), a.createElement(O._8, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(O.Q, {
                        type: O._49.H3,
                        fontSize: O.V.Size4,
                        bold: !0
                    }, Object(l.d)("Recently Completed", "AchievementsList"))), this.props.achievements.topRecentlyCompleted.map(function(t) {
                        return a.createElement(q, {
                            achievement: t,
                            key: t.id
                        }, !e.state.didCelebrate && a.createElement(k.a, {
                            confettiCount: 30
                        }))
                    })), Boolean(this.props.achievements.notCompleted.length) && a.createElement("div", i.__assign({}, x), a.createElement(O._8, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(O.Q, {
                        type: O._49.H3,
                        fontSize: O.V.Size4,
                        bold: !0
                    }, Object(l.d)("In Progress", "AchievementsList"))), this.props.achievements.notCompleted.map(function(e) {
                        return a.createElement(q, {
                            achievement: e,
                            key: e.id
                        })
                    })), Boolean(this.props.achievements.pastCompleted.length) && a.createElement(O._8, i.__assign({
                        margin: {
                            top: 3
                        }
                    }, C), a.createElement(O._8, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(O.Q, {
                        type: O._49.H3,
                        fontSize: O.V.Size4,
                        bold: !0
                    }, Object(l.d)("Completed", "AchievementsList"))), this.props.achievements.pastCompleted.map(function(e) {
                        return a.createElement(q, {
                            achievement: e,
                            key: e.id
                        })
                    })))
                }, t
            }(a.Component),
            q = function(e) {
                return a.createElement(v.c, {
                    path: E.b.achievement(e.achievement),
                    exact: !0
                }, function(t) {
                    var n = t.match;
                    return Boolean(n) ? a.createElement(j, {
                        achievement: e.achievement,
                        refDelegate: D.a
                    }) : a.createElement(O._35, {
                        elevation: 1
                    }, a.createElement(f.a, {
                        achievement: e.achievement,
                        layoutClassName: "ach-card--in-list"
                    }, a.createElement("div", null, e.children, a.createElement(g.a, {
                        achievement: e.achievement
                    }))))
                })
            },
            P = function() {
                var e = Array(3).fill("").map(function(e, t) {
                    return a.createElement(O._8, {
                        margin: {
                            bottom: 1
                        },
                        key: t
                    }, a.createElement(O._14, {
                        height: 70
                    }))
                });
                return [a.createElement(O._8, i.__assign({
                    margin: {
                        bottom: 3
                    }
                }, T, {
                    key: "recently-completed"
                }), e), a.createElement("div", i.__assign({}, x, {
                    key: "not-completed"
                }), e), a.createElement(O._8, i.__assign({
                    margin: {
                        top: 3
                    }
                }, C, {
                    key: "past-completed"
                }), e)]
            },
            G = n("WmaG"),
            z = (n("xX1i"), {
                "data-test-selector": "quests-col"
            }),
            I = {
                "data-test-selector": "achs-col"
            },
            K = function(e) {
                var t = b({
                        "ach-col": !0,
                        "ach-col--q": !0,
                        "ach-col--spotlight": e.isSpotlightShown
                    }),
                    n = b({
                        "ach-col": !0,
                        "ach-col--l": !0,
                        "ach-col--spotlight": e.isSpotlightShown
                    });
                return a.createElement(O._35, {
                    className: "ach-page",
                    margin: {
                        bottom: 1
                    },
                    display: O.R.Flex,
                    flexDirection: O.T.Column,
                    flexWrap: O.U.NoWrap,
                    alignItems: O.c.Stretch,
                    breakpointMedium: {
                        flexDirection: O.T.Row
                    },
                    fullHeight: !0
                }, a.createElement(O._35, {
                    className: "ach-col-wrapper ach-col-wrapper--q",
                    display: O.R.Flex,
                    flexWrap: O.U.NoWrap,
                    flexDirection: O.T.Column,
                    flexShrink: 0,
                    breakpointMedium: {
                        display: O.R.Block
                    }
                }, a.createElement(O._8, i.__assign({
                    className: t
                }, z), a.createElement(O._8, {
                    padding: {
                        x: 4,
                        y: 4
                    },
                    margin: {
                        bottom: 2
                    },
                    fullHeight: !0
                }, e.left))), a.createElement(O._35, {
                    className: "ach-col-wrapper ach-col-wrapper--l",
                    display: O.R.Flex,
                    flexGrow: 1,
                    flexWrap: O.U.NoWrap,
                    flexDirection: O.T.Column,
                    flexShrink: 0,
                    breakpointMedium: {
                        display: O.R.Block
                    }
                }, a.createElement(O._8, i.__assign({
                    className: n
                }, I), e.right)), a.createElement(G.a, {
                    learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2877819",
                    page: "achievements"
                }))
            },
            L = n("rEvf"),
            V = n("heIq");

        function B(e) {
            var t = {
                spotlight_type: e.type,
                achievement_key: e.achievementKey ? e.achievementKey : null,
                quest_key: e.questKey ? e.questKey : null
            };
            l.n.track(m.SpadeEventType.AchievementSpotlightImpression, t)
        }

        function W(e) {
            var t = {
                quest_id: e
            };
            l.n.track(m.SpadeEventType.AchievementQuestBannerClick, t)
        }
        var F = n("AJEV"),
            Q = function(e) {
                if (e.isPartner) return a.createElement(H, {
                    title: e.title,
                    subtitle: e.subtitle,
                    url: e.url
                });
                var t = e.url ? a.createElement("a", {
                    target: "_blank",
                    href: e.url
                }, a.createElement(O.Q, {
                    type: O._49.Span,
                    color: O.K.OverlayAlt
                }, e.subtitle)) : e.subtitle;
                return a.createElement("div", null, a.createElement(O.Q, {
                    ellipsis: !0,
                    color: O.K.Overlay,
                    bold: !0,
                    fontSize: O.V.Size5
                }, e.title), a.createElement(O.Q, {
                    ellipsis: !0,
                    color: O.K.OverlayAlt,
                    fontSize: O.V.Size5
                }, t))
            },
            H = function(e) {
                return a.createElement(O._35, {
                    display: O.R.Flex,
                    flexGrow: 1,
                    flexWrap: O.U.NoWrap,
                    alignItems: O.c.Center
                }, a.createElement(O._8, {
                    display: O.R.Flex,
                    flexDirection: O.T.Column,
                    flexGrow: 1
                }, a.createElement(O.Q, {
                    ellipsis: !0,
                    color: O.K.Overlay,
                    bold: !0,
                    fontSize: O.V.Size5
                }, e.title), a.createElement(O.Q, {
                    ellipsis: !0,
                    color: O.K.OverlayAlt,
                    fontSize: O.V.Size5
                }, a.createElement("a", {
                    target: "_blank",
                    href: e.url
                }, a.createElement(O.Q, {
                    type: O._49.Span,
                    color: O.K.OverlayAlt
                }, e.subtitle)))), a.createElement(O._35, {
                    display: O.R.Flex,
                    color: O.K.OverlayAlt
                }, a.createElement(O._24, {
                    asset: O._25.Verified
                })))
            },
            M = function(e) {
                return a.createElement(O._35, {
                    display: O.R.Flex,
                    flexGrow: 1,
                    flexWrap: O.U.NoWrap,
                    alignItems: O.c.Center
                }, a.createElement(O._8, {
                    display: O.R.Flex,
                    flexDirection: O.T.Column,
                    flexGrow: 1
                }, a.createElement(O.Q, {
                    ellipsis: !0,
                    color: O.K.Overlay,
                    bold: !0,
                    fontSize: O.V.Size5
                }, e.title), a.createElement(O.Q, {
                    ellipsis: !0,
                    color: O.K.OverlayAlt,
                    fontSize: O.V.Size5
                }, e.subtitle)), a.createElement(O._8, {
                    display: O.R.Flex,
                    flexShrink: 0,
                    padding: {
                        left: 1
                    }
                }, a.createElement(O.v, {
                    linkTo: e.url,
                    onClick: e.onClickCTA
                }, e.cta)))
            },
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.quest,
                        t = null,
                        n = null;
                    switch (e.key) {
                        case V.c:
                            e.role === F.d.Partner ? t = a.createElement(Z, null) : e.role === F.d.Affiliate && e.completedAt && (t = a.createElement($, {
                                questKey: e.key
                            }));
                            break;
                        case V.b:
                            e.role === F.d.Partner ? t = a.createElement(Z, null) : e.role === F.d.Affiliate ? t = a.createElement(X, null) : e.role === F.d.None && e.completedAt && (t = a.createElement(J, {
                                channelName: this.props.channelName,
                                questKey: e.key
                            }));
                            break;
                        case V.a:
                            e.role === F.d.Partner ? t = a.createElement(Z, null) : e.role === F.d.Affiliate ? t = a.createElement(X, null) : e.completedAt && (t = a.createElement(Y, null))
                    }
                    return t && (n = a.createElement(O._35, {
                        padding: 1,
                        background: O.n.AccentAlt2
                    }, t)), n
                }, t
            }(a.Component),
            Y = function() {
                return a.createElement(Q, {
                    title: Object(l.d)("You've started your path as a Twitch streamer", "AchievementsBannerItBegins"),
                    subtitle: Object(l.d)("Which achievement will you complete next?", "AchievementsBannerItBegins")
                })
            },
            X = function() {
                return a.createElement(Q, {
                    title: Object(l.d)("Congratulations! You’re a Twitch Affiliate", "AchievementsBannerPathToAffiliate"),
                    subtitle: Object(l.d)("Learn more", "AchievementsBannerPathToAffiliate"),
                    url: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles"
                })
            },
            J = function(e) {
                return a.createElement(M, {
                    title: Object(l.d)("You're eligible to become a Twitch Affiliate", "AchievementsBannerPathToAffiliate"),
                    subtitle: Object(l.d)("Click Get Started to begin", "AchievementsBannerPathToAffiliate"),
                    cta: Object(l.d)("Get Started", "AchievementsBannerPathToAffiliate"),
                    url: "https://www.twitch.tv/" + e.channelName + "/dashboard/settings",
                    onClickCTA: function() {
                        return W(e.questKey)
                    }
                })
            },
            Z = function() {
                return a.createElement(Q, {
                    title: Object(l.d)("Congratulations! You’re a Twitch Partner", "AchievementsBannerPathToPartner"),
                    subtitle: Object(l.d)("Learn more", "AchievementsBannerPathToPartner"),
                    url: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                    isPartner: !0
                })
            },
            $ = function(e) {
                return a.createElement(M, {
                    title: Object(l.d)("Apply to become a Twitch Partner today", "AchievementsBannerPathToPartner"),
                    subtitle: Object(l.d)("We usually follow up within 7 business days", "AchievementsBannerPathToPartner"),
                    cta: Object(l.d)("Apply", "AchievementsBannerPathToPartner"),
                    url: "https://www.twitch.tv/partner/signup",
                    onClickCTA: function() {
                        return W(e.questKey)
                    }
                })
            },
            ee = n("KMD5"),
            te = function(e) {
                var t = b({
                        "ach-q-item": !0,
                        "ach-q-item--expanded": e.isActive
                    }),
                    n = a.createElement(O._35, {
                        display: O.R.InlineBlock
                    }, a.createElement(L.a, null)),
                    i = a.createElement("a", {
                        href: e.quest.learnMoreURL,
                        "aria-hidden": !e.isActive,
                        tabIndex: -1,
                        target: "_blank"
                    }, Object(l.d)("Learn more", "AchievementsPathToAffiliate")),
                    r = e.quest.getInstructions(n),
                    o = Object(l.d)("{numCompleted, number} of {numTotal, number}", {
                        numCompleted: e.quest.completedAchievementsCount,
                        numTotal: e.quest.achievements.length
                    }, "AchievementsQuests");
                return a.createElement(O._35, {
                    className: t,
                    position: O._15.Relative,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    border: !0
                }, a.createElement(O._6, {
                    onClick: e.onHeaderClick
                }, a.createElement(O._35, {
                    className: "ach-q-item__header",
                    display: O.R.Flex,
                    padding: {
                        left: 1,
                        right: 1
                    },
                    borderBottom: !0
                }, a.createElement(O._8, {
                    className: "ach-q-item__info",
                    display: O.R.Flex,
                    flexGrow: 1,
                    flexWrap: O.U.NoWrap,
                    alignItems: O.c.Center
                }, Boolean(e.quest.isComplete) && a.createElement(O._8, {
                    display: O.R.Flex,
                    padding: {
                        left: .5,
                        right: 1
                    }
                }, a.createElement(ne, null)), a.createElement(O._8, {
                    display: O.R.Flex,
                    flexGrow: 1
                }, a.createElement(O.Q, {
                    className: "ach-q-item__title",
                    type: O._49.H3,
                    color: O.K.Alt,
                    fontSize: O.V.Size3
                }, e.quest.title)), !Boolean(e.quest.isComplete) && a.createElement(O._8, {
                    display: O.R.Flex
                }, a.createElement(O.Q, {
                    className: "ach-q-item__label",
                    color: O.K.Alt2,
                    fontSize: O.V.Size5
                }, o))))), a.createElement(U, {
                    quest: e.quest,
                    channelName: e.channelName
                }), a.createElement(O._35, {
                    padding: {
                        top: 1,
                        bottom: .5
                    },
                    background: O.n.Base
                }, e.quest.achievements.map(function(t) {
                    return a.createElement(f.a, {
                        key: t.id,
                        achievement: t,
                        isHidden: !e.isActive
                    }, a.createElement(ee.a, {
                        achievement: t,
                        quest: e.quest
                    }))
                })), a.createElement(O._35, {
                    className: t,
                    display: O.R.Flex,
                    padding: 1,
                    background: O.n.Alt2,
                    borderTop: !0
                }, a.createElement(O._8, {
                    padding: {
                        top: .5,
                        bottom: .5
                    },
                    margin: {
                        left: .5,
                        right: .5
                    }
                }, a.createElement(O.Q, {
                    color: O.K.Alt2,
                    fontSize: O.V.Size5,
                    type: O._49.Span
                }, r, " ", i))))
            },
            ne = function() {
                return a.createElement(O._24, {
                    asset: O._25.Check,
                    type: O._26.Brand
                })
            },
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        userSelectedQuest: void 0
                    }, t.handleActivate = function(e) {
                        t.setState({
                            userSelectedQuest: e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.state.userSelectedQuest || this.props.quests[0],
                        n = this.props.quests.map(function(n) {
                            return a.createElement(te, {
                                key: n.id,
                                quest: n,
                                channelName: e.props.channel.name,
                                onHeaderClick: function() {
                                    return e.handleActivate(n)
                                },
                                isActive: n === t
                            })
                        });
                    return a.createElement(O._8, {
                        fullHeight: !0
                    }, this.props.isLoading ? this.renderPlaceholders() : n)
                }, t.prototype.renderPlaceholders = function() {
                    return [a.createElement(O._8, {
                        margin: {
                            bottom: 2
                        },
                        key: "opened-quest"
                    }, a.createElement(O._14, {
                        height: 450
                    })), a.createElement(O._8, {
                        margin: {
                            bottom: 2
                        },
                        key: "collasped-quest-1"
                    }, a.createElement(O._14, {
                        height: 62
                    })), a.createElement(O._8, {
                        margin: {
                            bottom: 2
                        },
                        key: "collasped-quest-2"
                    }, a.createElement(O._14, {
                        height: 62
                    }))]
                }, t
            }(a.Component),
            ae = n("zLjR"),
            re = {
                "data-test-selector": "title"
            },
            le = {
                "data-test-selector": "subtitle"
            },
            oe = {
                "data-test-selector": "dismiss"
            },
            ce = function(e) {
                var t = e.title,
                    n = e.subtitle;
                return a.createElement(O._35, {
                    position: O._15.Relative,
                    padding: 2,
                    textAlign: O._45.Center,
                    className: "ach-sb",
                    elevation: 1,
                    border: !0
                }, a.createElement(k.a, {
                    confettiCount: 40,
                    infinite: !0
                }), a.createElement(O._8, {
                    margin: {
                        left: 1
                    },
                    position: O._15.Relative,
                    zIndex: O._62.Above,
                    className: "ach-sb__text"
                }, a.createElement(O.Q, i.__assign({}, re, {
                    fontSize: O.V.Size4,
                    bold: !0,
                    ellipsis: !0
                }), t), a.createElement(O.Q, i.__assign({}, le, {
                    fontSize: O.V.Size5,
                    color: O.K.Alt2,
                    ellipsis: !0
                }), n)))
            },
            se = function(e) {
                return a.createElement(O._35, {
                    position: O._15.Absolute,
                    margin: {
                        top: 3,
                        x: 4
                    },
                    zIndex: O._62.Above,
                    attachTop: !0,
                    attachLeft: !0,
                    attachRight: !0
                }, a.createElement(O.e, {
                    type: O.j.BounceIn,
                    duration: O.g.Medium,
                    enabled: !0,
                    timing: O.i.EaseInOut
                }, e.children, a.createElement(O._8, {
                    className: "ach-sb__dismiss",
                    position: O._15.Absolute,
                    attachRight: !0,
                    attachTop: !0
                }, a.createElement(O.w, i.__assign({}, oe, {
                    ariaLabel: Object(l.d)("Close", "AchievementSpotlightDismiss"),
                    type: O.y.Default,
                    size: O.x.Large,
                    icon: O._25.Close,
                    onClick: e.onDismissSpotlight
                })))))
            },
            me = "https://static-cdn.jtvnw.net/emoticons/v1/135393/3.0",
            ue = "PartyTime",
            he = function() {
                var e = Object(l.d)("Celebrate milestones and track your progress towards becoming an Affiliate or Partner.", "AchievementsSpotlight"),
                    t = Object(l.d)("Learn more", "AchievementsSpotlight");
                return a.createElement(O._35, {
                    padding: 2,
                    className: "ach-sb",
                    display: O.R.Flex,
                    alignItems: O.c.Center,
                    elevation: 1,
                    border: !0
                }, a.createElement(O._35, {
                    display: O.R.Flex,
                    fullWidth: !0,
                    flexWrap: O.U.NoWrap
                }, a.createElement(O._8, {
                    display: O.R.Flex,
                    flexShrink: 0,
                    alignContent: O.b.Center,
                    alignItems: O.c.Center
                }, a.createElement(O.m, {
                    src: me,
                    alt: ue,
                    size: 30
                })), a.createElement(O._8, {
                    flexGrow: 1,
                    margin: {
                        left: 1
                    },
                    className: "ach-sb__text"
                }, a.createElement(O.Q, i.__assign({}, re, {
                    fontSize: O.V.Size4,
                    bold: !0,
                    ellipsis: !0
                }), Object(l.d)("Welcome to Achievements", "AchievementsSpotlight")), a.createElement(O.Q, i.__assign({}, le, {
                    fontSize: O.V.Size5,
                    color: O.K.Alt2,
                    ellipsis: !0
                }), e, " ", a.createElement("a", {
                    target: "_blank",
                    href: "https://help.twitch.tv/customer/portal/articles/2877819"
                }, t)))))
            },
            de = (n("533y"), "achievement-spotlights"),
            pe = function(e) {
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
                        return l.l.set(de, r), a
                    }, n.dismissedSpotlights = l.l.get(de, {}), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    if (!this.props.isLoading && !this.currentSpotlightWasDismissed) {
                        this.handleViewSpotlight();
                        var t = void 0;
                        switch (this.bannerType) {
                            case V.c:
                                t = a.createElement(ve, null);
                                break;
                            case V.b:
                                t = a.createElement(fe, null);
                                break;
                            case V.a:
                                t = a.createElement(ge, null);
                                break;
                            default:
                                t = a.createElement(he, null)
                        }
                        e = a.createElement(se, {
                            onDismissSpotlight: this.handleDismissSpotlight
                        }, t)
                    }
                    return a.createElement(O._8, {
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
                        var e = F.e.topCelebratable(this.props.quests);
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
            ve = function() {
                var e = Object(ae.b)(V.c),
                    t = a.createElement(be, {
                        title: e.title
                    }),
                    n = e.bannerTitle(t);
                return B({
                    type: "quest",
                    questKey: V.c
                }), a.createElement(ce, {
                    title: n,
                    subtitle: e.subtitle
                })
            },
            fe = function() {
                var e = Object(ae.b)(V.b),
                    t = a.createElement(be, {
                        title: e.title
                    }),
                    n = e.bannerTitle(t);
                return B({
                    type: "quest",
                    questKey: V.b
                }), a.createElement(ce, {
                    title: n,
                    subtitle: e.subtitle
                })
            },
            ge = function() {
                var e = Object(ae.b)(V.a),
                    t = a.createElement(be, {
                        title: e.title
                    }),
                    n = e.bannerTitle(t);
                return B({
                    type: "quest",
                    questKey: V.a
                }), a.createElement(ce, {
                    title: n,
                    subtitle: e.subtitle
                })
            },
            be = function(e) {
                var t = e.title;
                return a.createElement(O.Q, {
                    type: O._49.Span,
                    color: O.K.OverlayAlt
                }, t)
            },
            _e = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    l.o.setPageTitle(Object(l.d)("Achievements", "DashboardAchievementsPage"))
                }, t.prototype.render = function() {
                    var e = d.a.fromChannelData(this.props.data);
                    return e ? a.createElement(h.a, {
                        channel: e
                    }, function(t) {
                        return a.createElement(pe, i.__assign({}, t, {
                            channelName: e.name
                        }), function(n) {
                            return a.createElement(K, {
                                isSpotlightShown: n,
                                left: a.createElement(ie, {
                                    quests: t.quests,
                                    channel: e,
                                    isLoading: t.isLoading
                                }),
                                right: a.createElement(N, {
                                    achievements: t.achievements,
                                    isLoading: t.isLoading
                                })
                            })
                        })
                    }) : null
                }, t
            }(a.Component),
            ye = Object(r.d)(Object(o.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.channelName
                        }
                    }
                }
            }), Object(u.d)("AchievementsPage", {
                destination: s.a.ChannelDashboardAchievements,
                autoReportInteractive: !0
            }), Object(c.a)({
                location: m.PageviewLocation.DashboardAchievements
            }))(_e);
        n.d(t, "AchievementsPageComponent", function() {
            return _e
        }), n.d(t, "AchievementsPage", function() {
            return ye
        })
    },
    rEvf: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("Odds"),
            r = function() {
                return i.createElement(a._35, {
                    className: "ach-checkmark",
                    textAlign: a._45.Center,
                    display: a.R.InlineFlex,
                    justifyContent: a._7.Center,
                    alignItems: a.c.Center,
                    color: a.K.Overlay
                }, i.createElement(a._35, {
                    className: "ach-checkmark__inner",
                    display: a.R.Flex,
                    justifyContent: a._7.Center,
                    alignItems: a.c.Center
                }, i.createElement(a._24, {
                    asset: a._25.Check,
                    width: 8,
                    height: 8
                })))
            };
        n.d(t, "a", function() {
            return r
        })
    },
    sjgK: function(e, t, n) {
        "use strict";
        var i = n("Odds"),
            a = {
                1: i._25.Roman1,
                2: i._25.Roman2,
                3: i._25.Roman3,
                4: i._25.Roman4,
                5: i._25.Roman5
            };

        function r(e) {
            return a[e]
        }
        var l = {
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V"
        };

        function o(e) {
            return l[e]
        }
        var c = n("heIq");
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, !1, function() {
            return c.a
        }), n.d(t, !1, function() {
            return c.b
        }), n.d(t, !1, function() {
            return c.c
        })
    },
    u3ZQ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            l = n("bQ8d"),
            o = n("Odds"),
            c = (n("49jV"), ["confetti-layer__confetti--slow", "confetti-layer__confetti--medium", "confetti-layer__confetti--fast"]),
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
                    return r.createElement(o._8, {
                        className: "confetti-layer",
                        position: o._15.Absolute,
                        overflow: o._11.Hidden,
                        zIndex: o._62.Default,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        attachLeft: !0
                    }, Object(l.c)(this.props.confettiCount, function(n) {
                        return r.createElement("div", {
                            key: n,
                            className: t + " " + Object(l.b)(c),
                            style: {
                                position: "absolute",
                                left: Object(l.a)(2, 95) + "%",
                                width: Object(l.a)(4, 10) + "px",
                                height: Object(l.a)(4, 10) + "px",
                                backgroundColor: "" + Object(l.b)(e.props.colors),
                                animationDelay: "" + Object(l.b)(m)
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
    xX1i: function(e, t) {},
    zLjR: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            return function() {
                i || (i = {
                    path_to_partner: {
                        title: Object(a.d)("Path to Partner", "AchievementsSpotlightPathToPartner"),
                        bannerTitle: function(e) {
                            return Object(a.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToPartner")
                        },
                        subtitle: Object(a.d)("Apply to become a Twitch Partner today", "AchievementsSpotlightPathToPartner")
                    },
                    path_to_affiliate: {
                        title: Object(a.d)("Path to Affiliate", "AchievementsSpotlightPathToAffiliate"),
                        bannerTitle: function(e) {
                            return Object(a.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToAffiliate")
                        },
                        subtitle: Object(a.d)("You're eligible to become a Twitch Affiliate", "AchievementsSpotlightPathToAffiliate")
                    },
                    it_begins: {
                        title: Object(a.d)("It Begins", "AchievementsSpotlightItBegins"),
                        bannerTitle: function(e) {
                            return Object(a.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightItBegins")
                        },
                        subtitle: Object(a.d)("Which achievement will you complete next?", "AchievementsSpotlightItBegins")
                    }
                });
                return i
            }()[e] || e
        }, t.a = function() {
            return {
                spotlightDismiss: Object(a.d)("Close", "StreamSummarySpotlightDismiss")
            }
        };
        var i, a = n("6sO2")
    }
});
//# sourceMappingURL=pages.achievements-340d398953ec631866c2ffbbb45b2d57.js.map