webpackJsonp([55], {
    "9u8h": function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return s
        });
        var r = i("TToO"),
            n = i("6sO2"),
            a = i("Aj/L"),
            o = "application/json; charset=UTF-8",
            s = function() {
                function e() {}
                return e.get = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), i)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), i)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), i)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), i)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        var n, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = this.constructOptions(t, i), n = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, n), [4, this._fetch(e, t)];
                                case 1:
                                    return a = r.sent(), [4, this.constructLegacyAPIResponse(a)];
                                case 2:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, n.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, i, n;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return i = r.sent(), e.ok ? t.body = i : t.error = i, [3, 4];
                                case 3:
                                    return n = r.sent(), t.requestError = n, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return t === o ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var i = n.n.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": n.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = o);
                    var s = Object(a.c)(i);
                    return s && (r.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (r["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e
            }()
    },
    Tj44: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i("TToO"),
            n = i("U7vG"),
            a = i("2KeS"),
            o = i("6sO2"),
            s = i("j7/Y"),
            c = i("w9tK"),
            d = i("vH/s"),
            u = i("CSlQ"),
            l = i("9u8h"),
            h = i("Odds"),
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
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
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
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, i, n;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (this.state.isLoading || this.state.isError) return [2];
                                    this.setState({
                                        isLoading: !0
                                    }), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, function(e) {
                                        return r.__awaiter(this, void 0, void 0, function() {
                                            var t, i, n;
                                            return r.__generator(this, function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return t = !1, i = "", e ? [4, l.a.post("/v5/emailvalidator/" + e)] : [3, 2];
                                                    case 1:
                                                        n = r.sent(), t = n && (200 === n.status || 204 === n.status), i = n.error && n.error.error || "", r.label = 2;
                                                    case 2:
                                                        return [2, Promise.resolve({
                                                            isEmailVerified: t,
                                                            errorMessage: i
                                                        })]
                                                }
                                            })
                                        })
                                    }(this.props.match.params.emailOpaqueId)];
                                case 2:
                                    return e = a.sent(), t = e.isEmailVerified, i = e.errorMessage, this.setState({
                                        isEmailVerified: t,
                                        errorMessage: i,
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
        i.d(t, "EmailVerificationPage", function() {
            return m
        })
    },
    "j7/Y": function(e, t, i) {
        "use strict";

        function r(e) {
            return function(t) {
                var i = function(i) {
                    function r(t) {
                        var r = i.call(this, t) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || e.skip && e.skip(r.props))) {
                                r.tracked = !0, c.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = n.__assign({}, e.properties));
                                var i = n.__assign({}, r.props);
                                i.location && i.location.state && (t.medium = i.location.state.medium, t.content = i.location.state.content, t.content_index = i.location.state.content_index);
                                var a = r.referenceTracking,
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
                        }, c.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                    }
                    return n.__extends(r, i), r.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, i) {
                            "REPLACE" !== i && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, r.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, r.prototype.render = function() {
                        return o.createElement(t, n.__assign({}, this.props))
                    }, r.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            i = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, i.medium || i.content) {
                            var r = "",
                                n = a.stringify(t);
                            n.length > 0 && (r = "?" + n), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return i
                    }, r
                }(o.Component);
                return Object(s.f)(i)
            }
        }
        var n = i("TToO"),
            a = i("OAwv"),
            o = i("U7vG"),
            s = i("F8kA"),
            c = i("6sO2");
        i.d(t, "a", function() {
            return r
        })
    },
    w9tK: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return r
        });
        var r = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardExtensions: "channel.dashboard.extensions",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryPopularByLanguage: "directory.popular.language",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            ForYou: "for-you",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            SettingsChannel: "private/embed-components",
            SettingsConnections: "private/embed-components",
            SettingsNotifications: "settings.notifications",
            SettingsPrime: "settings.prime",
            SettingsProfile: "settings.profile",
            SettingsSecurity: "private/embed-components",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardSettings: "teams.dashboard.settings",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    }
});
//# sourceMappingURL=pages.email-verification-ab6885002c9fb3897d00a1f05a82a0ef.js.map