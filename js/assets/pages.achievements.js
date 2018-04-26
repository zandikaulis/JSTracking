webpackJsonp([101], {
    "49jV": function(e, t) {},
    "533y": function(e, t) {},
    D6QB: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("MDGG"),
            o = n("Odds"),
            c = function(e) {
                return 0 === e.achievement.progress ? i.createElement("span", null) : e.achievement.completedAt ? i.createElement(o._8, {
                    display: o.R.InlineFlex,
                    alignItems: o.c.Center
                }, i.createElement(r.a, {
                    date: e.achievement.completedAt
                })) : i.createElement(o._32, {
                    className: "ach-card__pill-wrapper",
                    fontSize: o.V.Size5
                }, i.createElement(o._12, {
                    label: Object(a.e)(e.achievement.progressRatio, "percent")
                }))
            };
        n.d(t, "a", function() {
            return c
        })
    },
    KMD5: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("rEvf"),
            o = n("Odds"),
            c = function(e) {
                return e.quest.completedAchievements.includes(e.achievement) ? i.createElement("span", {
                    title: Object(a.d)("Completed within the last 30 days", "AchievementsQuests")
                }, i.createElement(r.a, null)) : e.achievement.completedAt ? null : e.achievement.progress ? i.createElement(o._32, {
                    className: "ach-card__pill-wrapper",
                    fontSize: o.V.Size5
                }, i.createElement(o._12, {
                    label: Object(a.e)(e.achievement.progressRatio, "percent")
                })) : null
            };
        n.d(t, "a", function() {
            return c
        })
    },
    MDGG: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("Odds"),
            o = function(e) {
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
            return o
        })
    },
    Nwhx: function(e, t) {},
    RVgG: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            o = n("F8kA"),
            c = n("i3Vq"),
            l = n("PGY2"),
            s = n("Odds"),
            m = {
                "data-test-selector": "achievement-card"
            },
            d = function(e) {
                return r.createElement(o.a, i.__assign({
                    className: "ach-link",
                    "aria-hidden": e.isHidden,
                    tabIndex: e.isHidden ? -1 : void 0,
                    to: l.b.achievement(e.achievement)
                }, m), r.createElement(u, {
                    achievement: e.achievement,
                    className: e.layoutClassName
                }, e.children))
            },
            u = function(e) {
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
                    size: s._19.ExtraSmall,
                    value: 100 * e.achievement.progressRatio
                }))), r.createElement(s._32, {
                    className: n,
                    position: s._15.Relative
                }, r.createElement(s._32, {
                    className: "ach-card__inner"
                }, r.createElement(c.a, {
                    achievement: e.achievement
                }, r.createElement("div", null, t, e.children))))
            };
        n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return d
        })
    },
    WmaG: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            c = n("+Znq"),
            l = n("RH2O"),
            s = n("PGY2"),
            m = n("vH/s");

        function d(e) {
            o.n.track(m.SpadeEventType.DashboardHelpInteraction, e)
        }! function(e) {
            e.OpenHelp = "open_help", e.LearnMore = "learn_more", e.OpenSendFeedback = "open_send_feedback", e.CancelFeedback = "cancel_feedback", e.SentFeedback = "sent_feedback"
        }(i || (i = {}));
        var u = n("Odds"),
            h = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleCancel = function() {
                        d({
                            action: i.CancelFeedback,
                            location: "dashboard/" + n.props.page
                        }), n.props.onClose()
                    }, n.handleChange = function(e) {
                        n.setState({
                            body: e.currentTarget.value
                        })
                    }, n.sendFeedback = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            inFlight: !0,
                                            errorMessage: ""
                                        }), e = "https://api.twitch.tv/kraken/users/" + this.props.currentUserID + "/stats_feedbacks", [4, Object(s.c)({
                                            path: e,
                                            method: "POST",
                                            body: {
                                                message: this.state.body,
                                                page: this.props.page
                                            }
                                        })];
                                    case 1:
                                        return t = n.sent(), d({
                                            action: i.SentFeedback,
                                            location: "dashboard/" + this.props.page
                                        }), t.isError() ? this.setState({
                                            inFlight: !1,
                                            errorMessage: t.error.message
                                        }) : this.setState({
                                            body: "",
                                            inFlight: !1,
                                            errorMessage: "",
                                            successTimeout: setTimeout(this.props.onClose, 2e3)
                                        }), [2]
                                }
                            })
                        })
                    }, n.state = {
                        body: "",
                        inFlight: !1,
                        errorMessage: "",
                        successTimeout: 0
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.state.successTimeout)
                }, t.prototype.render = function() {
                    return r.createElement(u._8, {
                        padding: 2
                    }, r.createElement(u.W, {
                        label: Object(o.d)("How can we improve this page for you?", "DashboardFeedbackForm"),
                        error: Boolean(this.state.errorMessage.length),
                        errorMessage: this.state.errorMessage
                    }, r.createElement(u._8, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(u._43, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0,
                        onChange: this.handleChange,
                        placeholder: Object(o.d)("It would help me if this page...", "DashboardFeedbackForm"),
                        rows: 4,
                        noResize: !0
                    }))), r.createElement(u._8, {
                        display: u.R.Flex,
                        flexGrow: 1,
                        flexWrap: u.U.NoWrap,
                        justifyContent: u._7.End,
                        padding: {
                            top: 2
                        }
                    }, r.createElement(u._8, {
                        padding: {
                            right: 1
                        }
                    }, r.createElement(u.v, {
                        onClick: this.handleCancel,
                        type: u.B.Text,
                        "data-test-selector": "feedback-form-cancel"
                    }, Object(o.d)("Cancel", "DashboardFeedbackForm"))), r.createElement(u.v, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0 || 0 === this.state.body.length,
                        onClick: this.sendFeedback,
                        "data-test-selector": "feedback-form-submit"
                    }, this.state.successTimeout > 0 ? Object(o.d)("Sent", "DashboardFeedbackForm") : Object(o.d)("Send Feedback", "DashboardFeedbackForm"))))
                }, t
            }(r.Component);
        var p = Object(l.b)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            })(h),
            f = (n("Nwhx"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.selectFeedbackForm = function() {
                        n.setState({
                            isFeedbackFormSelected: !0
                        }), d({
                            action: i.OpenSendFeedback,
                            location: "dashboard/" + n.props.page
                        })
                    }, n.unselectFeedbackForm = function() {
                        n.setState({
                            isFeedbackFormSelected: !1
                        })
                    }, n.handleLearnMoreClick = function() {
                        d({
                            action: i.LearnMore,
                            location: "dashboard/" + n.props.page
                        })
                    }, n.handleToggle = function(e) {
                        e ? n.setState({
                            isFeedbackFormSelected: !1
                        }) : d({
                            action: i.OpenHelp,
                            location: "dashboard/" + n.props.page
                        })
                    }, n.state = {
                        isFeedbackFormSelected: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.state.isFeedbackFormSelected ? r.createElement(p, {
                        page: this.props.page,
                        onClose: this.unselectFeedbackForm,
                        key: 0
                    }) : r.createElement(u._32, {
                        padding: {
                            top: .5,
                            bottom: .5
                        },
                        color: u.K.Base
                    }, r.createElement(u._6, {
                        linkTo: this.props.learnMoreUrl,
                        onClick: this.handleLearnMoreClick,
                        targetBlank: !0
                    }, r.createElement(u._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(u.Q, null, Object(o.d)("Learn More", "DashboardHelpMenu")))), r.createElement(u._6, {
                        onClick: this.selectFeedbackForm
                    }, r.createElement(u._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(u.Q, null, Object(o.d)("Send Feedback", "DashboardHelpMenu"))))), r.createElement(u._32, {
                        className: "help-menu",
                        position: u._15.Absolute,
                        margin: {
                            bottom: 2,
                            right: 2
                        },
                        zIndex: u._59.Above,
                        background: u.n.Overlay,
                        elevation: 3,
                        attachBottom: !0,
                        attachRight: !0
                    }, r.createElement(c.a, {
                        onToggle: this.handleToggle,
                        tooltipProps: {
                            align: u._50.Right,
                            direction: u._51.Top,
                            label: Object(o.d)("Help & Feedback", "DashboardHelpMenu"),
                            offsetX: "6px",
                            offsetY: "10px"
                        }
                    }, r.createElement(u.w, {
                        ariaLabel: Object(o.d)("Feedback", "DashboardHelpMenu"),
                        icon: u._23.QuestionMark,
                        "data-a-target": "help-button",
                        overlay: !0
                    }), r.createElement(u.q, {
                        direction: u.r.TopRight,
                        size: this.state.isFeedbackFormSelected ? u.s.Large : u.s.Small,
                        "data-a-target": "help-balloon",
                        offsetX: "6px"
                    }, e)))
                }, t
            }(r.Component));
        n.d(t, "a", function() {
            return f
        })
    },
    Xcw2: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("AJEV"),
            c = n("6w0d"),
            l = n("6sO2");

        function s(e, t) {
            var n = function() {
                    if (i) return i;
                    return i = {
                        broadcast_n_hours_30_days: {
                            title: Object(l.d)("New day, new stream", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Stream for {numOfHours, number} hours in the last 30 days", {
                                    numOfHours: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Stream on a regular schedule to help draw in more viewers. Find the balance that works for you.", "AchievementLongDescription"),
                            levelGoals: [4, 8, 25, 40]
                        },
                        n_followers: {
                            title: Object(l.d)("What is thy bidding?", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Reach {numOfFollowers, number} followers", {
                                    numOfFollowers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Followers can opt in to be notified when you stream or share an update.", "AchievementLongDescription"),
                            levelGoals: [2, 10, 50, 200]
                        },
                        n_broadcast_days_30_days: {
                            title: Object(l.d)("Like clockwork", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Stream for {numOfDays, number} unique days in the last 30 days", {
                                    numOfDays: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Stream on different days to reach different viewers. Unique days are based on GMT.", "AchievementLongDescription"),
                            levelGoals: [2, 7, 12, 25]
                        },
                        n_concurrents_30_days: {
                            title: Object(l.d)("Who watches the watchers?", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Reach {numOfViewers, number} average viewers in the last 30 days", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Check average viewers on your stats page. If you notice a spike, try to replicate that magic!", "AchievementLongDescription"),
                            levelGoals: [3, 10, 15, 75]
                        },
                        first_stream: {
                            title: Object(l.d)("It's happening", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Start your first stream", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Start your first stream on Twitch to complete this achievement.", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        single_dashboard_visit: {
                            title: Object(l.d)("Know your stuff", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Explore your dashboard", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Your dashboard is the best place to update your stream settings, monitor stats, and more.", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        single_broadcast_title: {
                            title: Object(l.d)("Name of the game", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Update your stream title", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Add a compelling title to draw viewers to your stream.", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        single_select_game_community: {
                            title: Object(l.d)("We belong", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Update your Game/Category and Community", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Tag your stream with a Game/Category and Community to help viewers find your channel.", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        n_hours_lifetime: {
                            title: Object(l.d)("The empire business", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Stream for {numOfHours, number} hours total", {
                                    numOfHours: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("The more you stream, the more often viewers can tune in. Take a break whenever you need to.", "AchievementLongDescription"),
                            levelGoals: [250, 500, 1e3, 2e3]
                        },
                        n_same_week_stream_start_time: {
                            title: Object(l.d)("Same time next week", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Start a stream on the same day of week and time for {numOfWeeks, number} weeks in a row", {
                                    numOfWeeks: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("When you stream on the same day and time each week, viewers know when to tune in.", "AchievementLongDescription"),
                            levelGoals: [2, 4, 8, 16]
                        },
                        n_minute_watched_lifetime: {
                            title: Object(l.d)("Kind of a big deal", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Reach {numOfHours, number} hours watched total on your channel", {
                                    numOfHours: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("The more you stream, the more often viewers can tune in. If you're partner and unlock this achievement, you'll have a chance to get swag!", "AchievementLongDescription"),
                            levelGoals: [25e4, 5e5, 1e6, 1e7]
                        },
                        n_viewers_lifetime: {
                            title: Object(l.d)("People know me", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Have {numOfViewers, number} viewers at the same time", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Keep your viewers around by welcoming them to your channel and responding to their comments.", "AchievementLongDescription"),
                            levelGoals: [50, 100, 250, 1e3]
                        },
                        n_unique_chatter_broadcast: {
                            title: Object(l.d)("Talk to me", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Get {numOfPeople, number} people chatting at the same time", {
                                    numOfPeople: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Chat with your viewers to engage them. Engaged viewers are more likely to return.", "AchievementLongDescription"),
                            levelGoals: [25, 50, 100, 200]
                        },
                        n_raid_consecutive_broadcast: {
                            title: Object(l.d)("Raiding party", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Raid {numOfStreams, number} times with 2 or more raiders", {
                                    numOfStreams: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)('Type "/raid (channel)" in chat to bring your viewers to another awesome streamer.', "AchievementLongDescription"),
                            levelGoals: [100]
                        },
                        n_days_since_first_stream: {
                            title: Object(l.d)("Happy Twitchiversary", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Reach your {numOfYears, number}-year streaming anniversary on Twitch", {
                                    numOfYears: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("We really wanted to send you some cake, but this Achievement will have to do. See you again next year!", "AchievementLongDescription"),
                            levelGoals: [1, 2, 3, 4]
                        },
                        n_autohost: {
                            title: Object(l.d)("Mr. Roboto", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Add {numOfChannels, number} channels to your auto host list", {
                                    numOfChannels: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Add to your auto host list from channel settings to highlight another channel whenever you're offline.", "AchievementLongDescription"),
                            levelGoals: [5]
                        },
                        single_twitchcon2017: {
                            title: Object(l.d)("TwitchCon get", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Purchase a TwitchCon ticket", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("You provided your Twitch ID when you purchased your TwitchCon ticket. If you missed this year, hopefully you can make it next year!", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        single_chat: {
                            title: Object(l.d)("Message in a bottle", "AchievementTitle"),
                            description: function() {
                                return Object(l.d)("Send a chat message in your own channel", "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Talking while streaming is great, but also try chatting and emoting in your own channel.", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        n_days_no_viewers: {
                            title: Object(l.d)("Hang in there", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Had < {numOfViewers, number} viewers for two streams and kept at it", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("Streaming isn't easy and it takes time to attract viewers. Try inviting your friends to get started.", "AchievementLongDescription"),
                            levelGoals: [3]
                        },
                        n_max_concurrents_m_streams: {
                            title: Object(l.d)("The horde descends", "AchievementTitle"),
                            description: function(e) {
                                return Object(l.d)("Reach at least {numOfViewers, number} viewers over five streams.", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(l.d)("They'll tell two friends. And they'll tell two friends. And they'll tell two friends. See a pattern?", "AchievementLongDescription"),
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

        function d(e, t) {
            var n = new Map,
                i = [];
            e.achievements.forEach(function(e) {
                var i = function(e, t) {
                    var n = s(e.key, e.level);
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
                n.set(i.id, i)
            });
            var a = new o.b(Array.from(n.values()));
            return e.quests.forEach(function(e) {
                var a, r, c, l = (a = e, r = t.role, c = Object(m.d)(a.key), new o.e({
                    id: a._id,
                    key: a.key,
                    completedAt: a.completed_at ? new Date(a.completed_at) : null,
                    title: c.title,
                    getInstructions: c.getInstructions,
                    learnMoreURL: c.learnMoreURL,
                    hasTimedCompletionWindow: c.hasTimedCompletionWindow,
                    position: c.position,
                    role: r,
                    achievements: []
                }));
                i.push(l), e.achievements.forEach(function(e) {
                    var t = e._id,
                        i = n.get(t);
                    i && (l.achievements.push(i), i.quest = l)
                }), l.finalize()
            }), {
                quests: o.e.sort(i),
                achievements: a
            }
        }
        var u = function(e) {
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
                                                    return t = "/v5/channels/" + e.id + "/achievement_progressions", [4, Object(c.a)({
                                                        path: t
                                                    })];
                                                case 1:
                                                    return (n = r.sent()).isError() ? [2, {
                                                        isError: !0,
                                                        quests: [],
                                                        achievements: new o.b
                                                    }] : (i = d(n.body, e), [2, a.__assign({
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
            return u
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
            o = function(e) {
                return i.createElement(r._8, {
                    display: r.R.Flex,
                    flexWrap: r.U.NoWrap,
                    flexShrink: 0,
                    position: r._15.Relative
                }, i.createElement(r._8, {
                    className: "ach-card__badge-wrap",
                    position: r._15.Relative,
                    flexShrink: 0
                }, i.createElement(r._32, {
                    className: "ach-card__badge",
                    background: r.n.Alt2
                }, i.createElement("img", {
                    alt: e.achievement.title,
                    className: "ach-card__img",
                    src: e.achievement.image.scale1x,
                    srcSet: e.achievement.image.scale1x + " 1x, " + e.achievement.image.scale3x + " 3x"
                })), Boolean(e.achievement.level) && i.createElement(r._32, {
                    className: "ach-card__lvl",
                    position: r._15.Absolute,
                    background: r.n.Alt
                }, i.createElement(r.o, {
                    border: !0,
                    icon: Object(a.a)(e.achievement.level),
                    size: 20,
                    type: r.p.Dashboard
                }))), i.createElement(r._32, {
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
                }, e.achievement.description)), i.createElement(r._32, {
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
            return o
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
            o = n("6sO2"),
            c = n("7vx8"),
            l = n("j7/Y"),
            s = n("w9tK"),
            m = n("vH/s"),
            d = n("CSlQ"),
            u = (n("jQxI"), n("Xcw2")),
            h = n("K/WB"),
            p = n("g7OG"),
            f = n("CIox"),
            v = n("RVgG"),
            b = n("D6QB"),
            g = n("HW6M"),
            _ = n("F8kA"),
            y = n("i3Vq"),
            E = n("MDGG"),
            A = n("PGY2"),
            O = n("Odds"),
            k = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                alt: "VoHiYo"
            },
            w = function(e) {
                var t = g({
                    "ach-card": !0,
                    "ach-card--expanded": !0,
                    "ach-card--completed": Boolean(e.achievement.completedAt),
                    "ach-card--recent": e.achievement.wasRecentlyCompleted()
                });
                return a.createElement(O._32, {
                    className: t,
                    position: O._15.Relative
                }, a.createElement(O._32, {
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
                    to: A.b.channelAchievements(e.achievement.channelName)
                }, a.createElement(O.w, {
                    ariaLabel: "Close",
                    icon: O._23.Close
                }))), a.createElement(O._8, {
                    display: O.R.Flex,
                    flexGrow: 1,
                    position: O._15.Relative,
                    padding: {
                        top: 1
                    }
                }, a.createElement(O._32, {
                    display: O.R.Flex,
                    flexWrap: O.U.NoWrap,
                    alignItems: O.c.Center,
                    flexGrow: 1,
                    padding: 1,
                    background: O.n.Alt2,
                    border: !0
                }, a.createElement(O.m, i.__assign({}, k, {
                    size: 30
                })), a.createElement(O._32, {
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
                return 0 === e.achievement.progress ? a.createElement("span", null) : e.achievement.completedAt ? a.createElement(E.a, {
                    date: e.achievement.completedAt
                }) : a.createElement(O._32, {
                    className: "ach-card__pill-wrapper",
                    fontSize: O.V.Size5
                }, a.createElement(O._12, {
                    label: Object(o.e)(e.achievement.progressRatio, "percent")
                }))
            },
            j = n("u3ZQ"),
            D = n("b9IH"),
            T = {
                "data-test-selector": "recently-completed-achievements-list"
            },
            C = {
                "data-test-selector": "not-completed-achievements-list"
            },
            x = {
                "data-test-selector": "past-completed-achievements-list"
            },
            F = function(e) {
                return a.createElement(O._8, {
                    padding: {
                        x: 4,
                        y: 4
                    },
                    margin: {
                        bottom: 2
                    }
                }, e.isLoading ? q() : a.createElement(N, {
                    achievements: e.achievements
                }))
            },
            N = function(e) {
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
                        type: O._46.H3,
                        fontSize: O.V.Size4,
                        bold: !0
                    }, Object(o.d)("Recently Completed", "AchievementsList"))), this.props.achievements.topRecentlyCompleted.map(function(t) {
                        return a.createElement(R, {
                            achievement: t,
                            key: t.id
                        }, !e.state.didCelebrate && a.createElement(j.a, {
                            confettiCount: 30
                        }))
                    })), Boolean(this.props.achievements.notCompleted.length) && a.createElement("div", i.__assign({}, C), a.createElement(O._8, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(O.Q, {
                        type: O._46.H3,
                        fontSize: O.V.Size4,
                        bold: !0
                    }, Object(o.d)("In Progress", "AchievementsList"))), this.props.achievements.notCompleted.map(function(e) {
                        return a.createElement(R, {
                            achievement: e,
                            key: e.id
                        })
                    })), Boolean(this.props.achievements.pastCompleted.length) && a.createElement(O._8, i.__assign({
                        margin: {
                            top: 3
                        }
                    }, x), a.createElement(O._8, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(O.Q, {
                        type: O._46.H3,
                        fontSize: O.V.Size4,
                        bold: !0
                    }, Object(o.d)("Completed", "AchievementsList"))), this.props.achievements.pastCompleted.map(function(e) {
                        return a.createElement(R, {
                            achievement: e,
                            key: e.id
                        })
                    })))
                }, t
            }(a.Component),
            R = function(e) {
                return a.createElement(f.c, {
                    path: A.b.achievement(e.achievement),
                    exact: !0
                }, function(t) {
                    var n = t.match;
                    return Boolean(n) ? a.createElement(w, {
                        achievement: e.achievement,
                        refDelegate: D.a
                    }) : a.createElement(O._32, {
                        elevation: 1
                    }, a.createElement(v.a, {
                        achievement: e.achievement,
                        layoutClassName: "ach-card--in-list"
                    }, a.createElement("div", null, e.children, a.createElement(b.a, {
                        achievement: e.achievement
                    }))))
                })
            },
            q = function() {
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
                }), e), a.createElement("div", i.__assign({}, C, {
                    key: "not-completed"
                }), e), a.createElement(O._8, i.__assign({
                    margin: {
                        top: 3
                    }
                }, x, {
                    key: "past-completed"
                }), e)]
            },
            G = n("WmaG"),
            P = (n("xX1i"), {
                "data-test-selector": "quests-col"
            }),
            I = {
                "data-test-selector": "achs-col"
            },
            z = function(e) {
                var t = g({
                        "ach-col": !0,
                        "ach-col--q": !0,
                        "ach-col--spotlight": e.isSpotlightShown
                    }),
                    n = g({
                        "ach-col": !0,
                        "ach-col--l": !0,
                        "ach-col--spotlight": e.isSpotlightShown
                    });
                return a.createElement(O._32, {
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
                }, a.createElement(O._32, {
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
                }, P), a.createElement(O._8, {
                    padding: {
                        x: 4,
                        y: 4
                    },
                    margin: {
                        bottom: 2
                    },
                    fullHeight: !0
                }, e.left))), a.createElement(O._32, {
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
            K = n("heIq");

        function V(e) {
            var t = {
                spotlight_type: e.type,
                achievement_key: e.achievementKey ? e.achievementKey : null,
                quest_key: e.questKey ? e.questKey : null
            };
            o.n.track(m.SpadeEventType.AchievementSpotlightImpression, t)
        }

        function B(e) {
            var t = {
                quest_id: e
            };
            o.n.track(m.SpadeEventType.AchievementQuestBannerClick, t)
        }
        var W = n("AJEV"),
            M = function(e) {
                if (e.isPartner) return a.createElement(H, {
                    title: e.title,
                    subtitle: e.subtitle,
                    url: e.url
                });
                var t = e.url ? a.createElement("a", {
                    target: "_blank",
                    href: e.url
                }, a.createElement(O.Q, {
                    type: O._46.Span,
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
                return a.createElement(O._32, {
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
                    type: O._46.Span,
                    color: O.K.OverlayAlt
                }, e.subtitle)))), a.createElement(O._32, {
                    display: O.R.Flex,
                    color: O.K.OverlayAlt
                }, a.createElement(O._22, {
                    asset: O._23.Verified
                })))
            },
            Q = function(e) {
                return a.createElement(O._32, {
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
                        case K.c:
                            e.role === W.d.Partner ? t = a.createElement(Z, null) : e.role === W.d.Affiliate && e.completedAt && (t = a.createElement($, {
                                questKey: e.key
                            }));
                            break;
                        case K.b:
                            e.role === W.d.Partner ? t = a.createElement(Z, null) : e.role === W.d.Affiliate ? t = a.createElement(X, null) : e.role === W.d.None && e.completedAt && (t = a.createElement(J, {
                                channelName: this.props.channelName,
                                questKey: e.key
                            }));
                            break;
                        case K.a:
                            e.role === W.d.Partner ? t = a.createElement(Z, null) : e.role === W.d.Affiliate ? t = a.createElement(X, null) : e.completedAt && (t = a.createElement(Y, null))
                    }
                    return t && (n = a.createElement(O._32, {
                        padding: 1,
                        background: O.n.AccentAlt2
                    }, t)), n
                }, t
            }(a.Component),
            Y = function() {
                return a.createElement(M, {
                    title: Object(o.d)("You've started your path as a Twitch streamer", "AchievementsBannerItBegins"),
                    subtitle: Object(o.d)("Which achievement will you complete next?", "AchievementsBannerItBegins")
                })
            },
            X = function() {
                return a.createElement(M, {
                    title: Object(o.d)("Congratulations! You’re a Twitch Affiliate", "AchievementsBannerPathToAffiliate"),
                    subtitle: Object(o.d)("Learn more", "AchievementsBannerPathToAffiliate"),
                    url: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles"
                })
            },
            J = function(e) {
                return a.createElement(Q, {
                    title: Object(o.d)("You're eligible to become a Twitch Affiliate", "AchievementsBannerPathToAffiliate"),
                    subtitle: Object(o.d)("Click Get Started to begin", "AchievementsBannerPathToAffiliate"),
                    cta: Object(o.d)("Get Started", "AchievementsBannerPathToAffiliate"),
                    url: "https://www.twitch.tv/" + e.channelName + "/dashboard/settings",
                    onClickCTA: function() {
                        return B(e.questKey)
                    }
                })
            },
            Z = function() {
                return a.createElement(M, {
                    title: Object(o.d)("Congratulations! You’re a Twitch Partner", "AchievementsBannerPathToPartner"),
                    subtitle: Object(o.d)("Learn more", "AchievementsBannerPathToPartner"),
                    url: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                    isPartner: !0
                })
            },
            $ = function(e) {
                return a.createElement(Q, {
                    title: Object(o.d)("Apply to become a Twitch Partner today", "AchievementsBannerPathToPartner"),
                    subtitle: Object(o.d)("We usually follow up within 7 business days", "AchievementsBannerPathToPartner"),
                    cta: Object(o.d)("Apply", "AchievementsBannerPathToPartner"),
                    url: "https://www.twitch.tv/partner/signup",
                    onClickCTA: function() {
                        return B(e.questKey)
                    }
                })
            },
            ee = n("KMD5"),
            te = function(e) {
                var t = g({
                        "ach-q-item": !0,
                        "ach-q-item--expanded": e.isActive
                    }),
                    n = a.createElement(O._32, {
                        display: O.R.InlineBlock
                    }, a.createElement(L.a, null)),
                    i = a.createElement("a", {
                        href: e.quest.learnMoreURL,
                        "aria-hidden": !e.isActive,
                        tabIndex: -1,
                        target: "_blank"
                    }, Object(o.d)("Learn more", "AchievementsPathToAffiliate")),
                    r = e.quest.getInstructions(n),
                    c = Object(o.d)("{numCompleted, number} of {numTotal, number}", {
                        numCompleted: e.quest.completedAchievementsCount,
                        numTotal: e.quest.achievements.length
                    }, "AchievementsQuests");
                return a.createElement(O._32, {
                    className: t,
                    position: O._15.Relative,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    border: !0
                }, a.createElement(O._6, {
                    onClick: e.onHeaderClick
                }, a.createElement(O._32, {
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
                    type: O._46.H3,
                    color: O.K.Alt,
                    fontSize: O.V.Size3
                }, e.quest.title)), !Boolean(e.quest.isComplete) && a.createElement(O._8, {
                    display: O.R.Flex
                }, a.createElement(O.Q, {
                    className: "ach-q-item__label",
                    color: O.K.Alt2,
                    fontSize: O.V.Size5
                }, c))))), a.createElement(U, {
                    quest: e.quest,
                    channelName: e.channelName
                }), a.createElement(O._32, {
                    padding: {
                        top: 1,
                        bottom: .5
                    },
                    background: O.n.Base
                }, e.quest.achievements.map(function(t) {
                    return a.createElement(v.a, {
                        key: t.id,
                        achievement: t,
                        isHidden: !e.isActive
                    }, a.createElement(ee.a, {
                        achievement: t,
                        quest: e.quest
                    }))
                })), a.createElement(O._32, {
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
                    type: O._46.Span
                }, r, " ", i))))
            },
            ne = function() {
                return a.createElement(O._22, {
                    asset: O._23.Check,
                    type: O._24.Brand
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
            oe = {
                "data-test-selector": "subtitle"
            },
            ce = {
                "data-test-selector": "dismiss"
            },
            le = function(e) {
                var t = e.title,
                    n = e.subtitle;
                return a.createElement(O._32, {
                    position: O._15.Relative,
                    padding: 2,
                    textAlign: O._42.Center,
                    className: "ach-sb",
                    elevation: 1,
                    border: !0
                }, a.createElement(j.a, {
                    confettiCount: 40,
                    infinite: !0
                }), a.createElement(O._8, {
                    margin: {
                        left: 1
                    },
                    position: O._15.Relative,
                    zIndex: O._59.Above,
                    className: "ach-sb__text"
                }, a.createElement(O.Q, i.__assign({}, re, {
                    fontSize: O.V.Size4,
                    bold: !0,
                    ellipsis: !0
                }), t), a.createElement(O.Q, i.__assign({}, oe, {
                    fontSize: O.V.Size5,
                    color: O.K.Alt2,
                    ellipsis: !0
                }), n)))
            },
            se = function(e) {
                return a.createElement(O._32, {
                    position: O._15.Absolute,
                    margin: {
                        top: 3,
                        x: 4
                    },
                    zIndex: O._59.Above,
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
                }, a.createElement(O.w, i.__assign({}, ce, {
                    ariaLabel: Object(o.d)("Close", "AchievementSpotlightDismiss"),
                    type: O.y.Default,
                    size: O.x.Large,
                    icon: O._23.Close,
                    onClick: e.onDismissSpotlight
                })))))
            },
            me = "https://static-cdn.jtvnw.net/emoticons/v1/135393/3.0",
            de = "PartyTime",
            ue = function() {
                var e = Object(o.d)("Celebrate milestones and track your progress towards becoming an Affiliate or Partner.", "AchievementsSpotlight"),
                    t = Object(o.d)("Learn more", "AchievementsSpotlight");
                return a.createElement(O._32, {
                    padding: 2,
                    className: "ach-sb",
                    display: O.R.Flex,
                    alignItems: O.c.Center,
                    elevation: 1,
                    border: !0
                }, a.createElement(O._32, {
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
                    alt: de,
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
                }), Object(o.d)("Welcome to Achievements", "AchievementsSpotlight")), a.createElement(O.Q, i.__assign({}, oe, {
                    fontSize: O.V.Size5,
                    color: O.K.Alt2,
                    ellipsis: !0
                }), e, " ", a.createElement("a", {
                    target: "_blank",
                    href: "https://help.twitch.tv/customer/portal/articles/2877819"
                }, t)))))
            },
            he = (n("533y"), "achievement-spotlights"),
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
                        return o.l.set(he, r), a
                    }, n.dismissedSpotlights = o.l.get(he, {}), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    if (!this.props.isLoading && !this.currentSpotlightWasDismissed) {
                        this.handleViewSpotlight();
                        var t = void 0;
                        switch (this.bannerType) {
                            case K.c:
                                t = a.createElement(fe, null);
                                break;
                            case K.b:
                                t = a.createElement(ve, null);
                                break;
                            case K.a:
                                t = a.createElement(be, null);
                                break;
                            default:
                                t = a.createElement(ue, null)
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
                        var e = W.e.topCelebratable(this.props.quests);
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
            fe = function() {
                var e = Object(ae.b)(K.c),
                    t = a.createElement(ge, {
                        title: e.title
                    }),
                    n = e.bannerTitle(t);
                return V({
                    type: "quest",
                    questKey: K.c
                }), a.createElement(le, {
                    title: n,
                    subtitle: e.subtitle
                })
            },
            ve = function() {
                var e = Object(ae.b)(K.b),
                    t = a.createElement(ge, {
                        title: e.title
                    }),
                    n = e.bannerTitle(t);
                return V({
                    type: "quest",
                    questKey: K.b
                }), a.createElement(le, {
                    title: n,
                    subtitle: e.subtitle
                })
            },
            be = function() {
                var e = Object(ae.b)(K.a),
                    t = a.createElement(ge, {
                        title: e.title
                    }),
                    n = e.bannerTitle(t);
                return V({
                    type: "quest",
                    questKey: K.a
                }), a.createElement(le, {
                    title: n,
                    subtitle: e.subtitle
                })
            },
            ge = function(e) {
                var t = e.title;
                return a.createElement(O.Q, {
                    type: O._46.Span,
                    color: O.K.OverlayAlt
                }, t)
            },
            _e = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    o.o.setPageTitle(Object(o.d)("Achievements", "DashboardAchievementsPage"))
                }, t.prototype.render = function() {
                    if (void 0 === this.props.data.channel) return null;
                    var e = h.a.fromChannelData(this.props.data.channel);
                    return a.createElement(u.a, {
                        channel: e
                    }, function(t) {
                        return a.createElement(pe, i.__assign({}, t, {
                            channelName: e.name
                        }), function(n) {
                            return a.createElement(z, {
                                isSpotlightShown: n,
                                left: a.createElement(ie, {
                                    quests: t.quests,
                                    channel: e,
                                    isLoading: t.isLoading
                                }),
                                right: a.createElement(F, {
                                    achievements: t.achievements,
                                    isLoading: t.isLoading
                                })
                            })
                        })
                    })
                }, t
            }(a.Component),
            ye = Object(r.d)(Object(c.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.channelName
                        }
                    }
                }
            }), Object(d.d)("AchievementsPage", {
                destination: s.a.ChannelDashboardAchievements,
                autoReportInteractive: !0
            }), Object(l.a)({
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
                return i.createElement(a._32, {
                    className: "ach-checkmark",
                    textAlign: a._42.Center,
                    display: a.R.InlineFlex,
                    justifyContent: a._7.Center,
                    alignItems: a.c.Center,
                    color: a.K.Overlay
                }, i.createElement(a._32, {
                    className: "ach-checkmark__inner",
                    display: a.R.Flex,
                    justifyContent: a._7.Center,
                    alignItems: a.c.Center
                }, i.createElement(a._22, {
                    asset: a._23.Check,
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
                1: i._23.Roman1,
                2: i._23.Roman2,
                3: i._23.Roman3,
                4: i._23.Roman4,
                5: i._23.Roman5
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
        var l = n("heIq");
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, !1, function() {
            return l.a
        }), n.d(t, !1, function() {
            return l.b
        }), n.d(t, !1, function() {
            return l.c
        })
    },
    u3ZQ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            o = n("bQ8d"),
            c = n("Odds"),
            l = (n("49jV"), ["confetti-layer__confetti--slow", "confetti-layer__confetti--medium", "confetti-layer__confetti--fast"]),
            s = ["rgba(247, 42, 107, 1)", "rgba(255, 113, 105, 1)", "rgba(253, 226, 132, 1)", "rgba(181, 138, 242, 1)"],
            m = ["0.011s", "0.176s", "0.321s", "0.446s", "0.849s", "1.056s", "1.229s", "1.333s", "1.379s", "1.828s"],
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = a({
                            "confetti-layer__confetti": !0,
                            "confetti-layer__confetti--infinite": this.props.infinite
                        });
                    return r.createElement(c._8, {
                        className: "confetti-layer",
                        position: c._15.Absolute,
                        overflow: c._11.Hidden,
                        zIndex: c._59.Default,
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
            return d
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
//# sourceMappingURL=pages.achievements-cb026131650066ca64dba59bf8922448.js.map