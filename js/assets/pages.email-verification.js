webpackJsonp([55], {
    "9u8h": function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return s
        });
        var i = r("TToO"),
            n = r("6sO2"),
            a = r("Aj/L"),
            o = "application/json; charset=UTF-8",
            s = function() {
                function e() {}
                return e.get = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), r)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), r)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), r)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), r)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
                        var n, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this.constructOptions(t, r), n = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, n), [4, this._fetch(e, t)];
                                case 1:
                                    return a = i.sent(), [4, this.constructLegacyAPIResponse(a)];
                                case 2:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, n.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, r, n;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return r = i.sent(), e.ok ? t.body = r : t.error = r, [3, 4];
                                case 3:
                                    return n = i.sent(), t.requestError = n, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return t === o ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var r = n.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": n.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = o);
                    var s = Object(a.c)(r);
                    return s && (i.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (i["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
    Tj44: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r("TToO"),
            n = r("U7vG"),
            a = r("2KeS"),
            o = r("6sO2"),
            s = r("j7/Y"),
            c = r("w9tK"),
            d = r("vH/s"),
            u = r("CSlQ"),
            l = r("9u8h"),
            h = r("Odds"),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        isEmailVerified: !1,
                        errorMessage: ""
                    }, t.logger = o.n.logger.withCategory("email-verification"), t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.verifyEmail().then(function() {})
                }, t.prototype.render = function() {
                    return n.createElement(h.V, {
                        padding: 3
                    }, n.createElement(h._23, {
                        className: "title",
                        type: h._28.H2
                    }, Object(o.d)("Email Verification", "EmailVerification")), this.renderVerificationStatus())
                }, t.prototype.renderVerificationStatus = function() {
                    if (this.state.isLoading) return n.createElement(h.V, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-loading"
                    }, n.createElement(h._23, {
                        type: h._28.Strong
                    }, Object(o.d)("Verifying Email...", "EmailVerification")));
                    if (this.state.isEmailVerified) return n.createElement(h.V, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-success"
                    }, Object(o.d)("Your email address has been successfully validated.", "EmailVerification"));
                    var e = Object(o.d)("Couldn't validate your email: {errorMessage}", {
                        errorMessage: this.maybeGetLocalizedErrorMessage(this.state.errorMessage)
                    }, "EmailVerification");
                    return n.createElement(h.V, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-error"
                    }, n.createElement(h._23, {
                        color: h.F.Error,
                        type: h._28.Strong
                    }, e))
                }, t.prototype.maybeGetLocalizedErrorMessage = function(e) {
                    return e ? "Not Found" === e ? Object(o.d)("Not Found", "EmailVerification") : e : Object(o.d)("Unknown Error", "EmailVerification")
                }, t.prototype.verifyEmail = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, r, n;
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (this.state.isLoading || this.state.isError) return [2];
                                    this.setState({
                                        isLoading: !0
                                    }), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, function(e) {
                                        return i.__awaiter(this, void 0, void 0, function() {
                                            var t, r, n;
                                            return i.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return t = !1, r = "", e ? [4, l.a.post("/v5/emailvalidator/" + e)] : [3, 2];
                                                    case 1:
                                                        n = i.sent(), t = n && (200 === n.status || 204 === n.status), r = n.error && n.error.error || "", i.label = 2;
                                                    case 2:
                                                        return [2, Promise.resolve({
                                                            isEmailVerified: t,
                                                            errorMessage: r
                                                        })]
                                                }
                                            })
                                        })
                                    }(this.props.match.params.emailOpaqueId)];
                                case 2:
                                    return e = a.sent(), t = e.isEmailVerified, r = e.errorMessage, this.setState({
                                        isEmailVerified: t,
                                        errorMessage: r,
                                        isLoading: !1
                                    }), [3, 4];
                                case 3:
                                    return n = a.sent(), this.logger.error(n, "Failed to verify email"), this.setState({
                                        isError: !0,
                                        isLoading: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(n.Component),
            m = Object(a.compose)(Object(u.c)("EmailVerification", {
                destination: c.a.EmailVerification
            }), Object(s.a)({
                location: d.PageviewLocation.EmailVerification
            }))(g);
        r.d(t, "EmailVerificationPage", function() {
            return m
        })
    },
    "j7/Y": function(e, t, r) {
        "use strict";

        function i(e) {
            return function(t) {
                var r = function(r) {
                    function i(t) {
                        var i = r.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = n.__assign({}, e.properties));
                                var r = n.__assign({}, i.props);
                                r.location && r.location.state && (t.medium = r.location.state.medium, t.content = r.location.state.content, t.content_index = r.location.state.content_index);
                                var a = i.referenceTracking,
                                    o = a.content,
                                    s = a.medium,
                                    d = a.content_index;
                                c.n.tracking.trackPageview(n.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, c.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return n.__extends(i, r), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, r) {
                            "REPLACE" !== r && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return o.createElement(t, n.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            r = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, r.medium || r.content) {
                            var i = "",
                                n = a.stringify(t);
                            n.length > 0 && (i = "?" + n), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return r
                    }, i
                }(o.Component);
                return Object(s.f)(r)
            }
        }
        var n = r("TToO"),
            a = r("OAwv"),
            o = r("U7vG"),
            s = r("F8kA"),
            c = r("6sO2");
        r.d(t, "a", function() {
            return i
        })
    },
    w9tK: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.BitsBuyCard = "bits-buy-card", e.BrowseCommunities = "browse.communities", e.BrowseCreative = "browse.creative", e.BrowseGamesAndCommunities = "browse.games-and-communities", e.ChannelClips = "channel.clips", e.ChannelCollections = "channel.collections", e.ChannelClipsManager = "videoManager.clips.channel", e.ChannelDashboardAchievements = "channel.dashboard.achievements", e.ChannelDashboardChannelAnalytics = "channel.dashboard.channel-analytics", e.ChannelDashboardExtensions = "channel.dashboard.extensions", e.ChannelDashboardModeration = "channel.dashboard.moderation", e.ChannelDashboardStreamSummary = "channel.dashboard.stream-summary", e.ChannelEvents = "channel.events", e.ChannelIndex = "channel.index.index", e.ChatPopout = "chat", e.CheermoteCarousel = "cheermote-carousel", e.DevOnly = "dev", e.DirectoryCommunityByLanguage = "directory.community.language", e.DirectoryCommunityIndex = "directory.community.index", e.DirectoryCommunityDetails = "directory.community.details", e.DirectoryFollowingCommunities = "directory.following.communities", e.DirectoryFollowingGames = "directory.following.games", e.DirectoryFollowingHosts = "directory.following.hosts", e.DirectoryFollowingIndex = "directory.following.index", e.DirectoryFollowingLiveChannels = "directory.following.channels", e.DirectoryFollowingVideos = "directory.following.videos.video-type", e.DirectoryGameClips = "directory.game.clips", e.DirectoryGameDetails = "directory.game.details", e.DirectoryGameIndex = "directory.game.index", e.DirectoryGames = "directory.games", e.DirectoryPopular = "directory.popular", e.DirectoryPopularByLanguage = "directory.popular.language", e.DirectoryGameVideos = "directory.game.videos", e.EmailVerification = "emailVerification", e.EventDetails = "event.details", e.ForYou = "for-you", e.Index = "index", e.MyClipsManager = "videoManager.clips", e.NotificationSettingsPage = "settings.notificationSettings", e.OnboardingIndex = "onboarding.index", e.ReportUserPage = "reportUser.page", e.SettingsConnections = "private/embed-components", e.SettingsChannel = "private/embed-components", e.SettingsNotifications = "settings.notifications", e.SettingsPrime = "settings.prime", e.SettingsProfile = "settings.profile", e.SettingsSecurity = "private/embed-components", e.StoreMerchPage = "store.merch", e.SubsLandingPage = "subs.landing", e.TeamsDashboardRevenue = "teams.dashboard.revenue", e.TeamsDashboardStats = "teams.dashboard.stats", e.TeamsDashboardMembers = "teams.dashboard.members", e.TeamsDashboardFeaturedChannels = "teams.dashboard.featured-channels", e.TeamsDashboardSettings = "teams.dashboard.settings", e.SubsBroadcasterPage = "subs.broadcaster", e.VideoManagerEditPropertiesPage = "videoManager.edit", e.VideoManagerPage = "videoManager.page", e.VideoManagerUploadListPage = "videoManager.upload-list", e.VideoManagerUploadPage = "videoManager.upload", e.VideosPage = "videos", e.VideoWatchPage = "video"
        }(i || (i = {}))
    }
});
//# sourceMappingURL=pages.email-verification-a7f7f5251d6349a78ecd979551d7597e.js.map