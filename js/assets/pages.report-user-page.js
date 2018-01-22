webpackJsonp([56], {
    DkuH: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("RH2O"),
            o = t("2KeS"),
            r = t("+xm8"),
            i = t("f2i/"),
            s = t("Aj/L"),
            l = t("TToO"),
            c = t("OAwv"),
            d = t("U7vG"),
            m = t("6sO2"),
            u = t("7vx8"),
            p = t("w9tK"),
            g = t("CSlQ"),
            h = t("LjAQ"),
            y = t("A5Hr"),
            b = t("mw/a"),
            v = t("Odds"),
            f = t("ucSk"),
            C = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.getReportingContext = function() {
                        var e = c.parse(n.props.location.search);
                        return {
                            contentType: e.contentType ? e.contentType : b.a.User,
                            contentID: e.contentId,
                            targetUserID: n.props.userToReportData.user.id
                        }
                    }, n.handleReportUserClose = function(e) {
                        e !== h.b.MutationError && e !== h.b.Success || n.props.history.push("/")
                    }, n
                }
                return l.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.isLoggedIn || this.props.login()
                }, n.prototype.render = function() {
                    return d.createElement(v.V, {
                        "data-test-selector": "report-user-page",
                        alignItems: v.c.Center,
                        display: v.H.Flex,
                        flexDirection: v.J.Column,
                        fullHeight: !0,
                        padding: 3
                    }, this.renderPage())
                }, n.prototype.renderPage = function() {
                    return this.props.isLoggedIn ? this.props.userToReportData.error ? d.createElement(v.V, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(v._23, {
                        fontSize: v.L.Size5
                    }, Object(m.d)("There was an unexpected error. Please refresh the page and try again", "ReportUserPage"))) : this.props.userToReportData && !this.props.userToReportData.loading && this.props.userToReportData.user ? d.createElement(y.a, {
                        onClose: this.handleReportUserClose,
                        reportContext: this.getReportingContext(),
                        title: Object(m.d)("Report {channelName}", {
                            channelName: this.props.match.params.channelName
                        }, "ReportUserPage")
                    }) : d.createElement(v._3, {
                        lineCount: 3
                    }) : d.createElement(v.V, {
                        "data-test-selector": "report-user-page__logged-out",
                        alignItems: v.c.Center,
                        display: v.H.Flex,
                        flexDirection: v.J.Column
                    }, d.createElement(v.V, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(v._23, {
                        fontSize: v.L.Size5
                    }, Object(m.d)("You must be logged in to report {channelName}. Please log in to complete.", {
                        channelName: this.props.match.params.channelName
                    }, "ReportUserPage"))), d.createElement(v.u, {
                        onClick: this.props.login
                    }, Object(m.d)("Log in", "ReportUserPage")))
                }, n = l.__decorate([Object(u.a)(f, {
                    name: "userToReportData",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }), Object(g.c)("ReportUserPage", {
                    autoReportInteractive: !0,
                    destination: p.a.ReportUserPage
                })], n)
            }(d.Component),
            D = Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e),
                    currentUser: Object(s.c)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    login: function() {
                        return Object(i.f)(r.a.ReportChannel)
                    }
                }, e)
            })(C);
        t.d(n, "ReportUserPage", function() {
            return D
        })
    },
    ucSk: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserPage_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "login"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
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
        t.loc.source = {
            body: "query ReportUserPage_User($login: String!) {\nuser(login: $login) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    w9tK: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.BitsBuyCard = "bits-buy-card", e.BrowseCommunities = "browse.communities", e.BrowseCreative = "browse.creative", e.BrowseGamesAndCommunities = "browse.games-and-communities", e.ChannelClips = "channel.clips", e.ChannelCollections = "channel.collections", e.ChannelClipsManager = "videoManager.clips.channel", e.ChannelDashboardAchievements = "channel.dashboard.achievements", e.ChannelDashboardChannelAnalytics = "channel.dashboard.channel-analytics", e.ChannelDashboardExtensions = "channel.dashboard.extensions", e.ChannelDashboardModeration = "channel.dashboard.moderation", e.ChannelDashboardStreamSummary = "channel.dashboard.stream-summary", e.ChannelEvents = "channel.events", e.ChannelIndex = "channel.index.index", e.ChatPopout = "chat", e.CheermoteCarousel = "cheermote-carousel", e.DevOnly = "dev", e.DirectoryCommunityByLanguage = "directory.community.language", e.DirectoryCommunityIndex = "directory.community.index", e.DirectoryCommunityDetails = "directory.community.details", e.DirectoryFollowingCommunities = "directory.following.communities", e.DirectoryFollowingGames = "directory.following.games", e.DirectoryFollowingHosts = "directory.following.hosts", e.DirectoryFollowingIndex = "directory.following.index", e.DirectoryFollowingLiveChannels = "directory.following.channels", e.DirectoryFollowingVideos = "directory.following.videos.video-type", e.DirectoryGameClips = "directory.game.clips", e.DirectoryGameDetails = "directory.game.details", e.DirectoryGameIndex = "directory.game.index", e.DirectoryGames = "directory.games", e.DirectoryPopular = "directory.popular", e.DirectoryPopularByLanguage = "directory.popular.language", e.DirectoryGameVideos = "directory.game.videos", e.EmailVerification = "emailVerification", e.EventDetails = "event.details", e.ForYou = "for-you", e.Index = "index", e.MyClipsManager = "videoManager.clips", e.NotificationSettingsPage = "settings.notificationSettings", e.OnboardingIndex = "onboarding.index", e.ReportUserPage = "reportUser.page", e.SettingsConnections = "private/embed-components", e.SettingsChannel = "private/embed-components", e.SettingsNotifications = "settings.notifications", e.SettingsPrime = "settings.prime", e.SettingsProfile = "settings.profile", e.SettingsSecurity = "private/embed-components", e.StoreMerchPage = "store.merch", e.SubsLandingPage = "subs.landing", e.TeamsDashboardRevenue = "teams.dashboard.revenue", e.TeamsDashboardStats = "teams.dashboard.stats", e.TeamsDashboardMembers = "teams.dashboard.members", e.TeamsDashboardFeaturedChannels = "teams.dashboard.featured-channels", e.TeamsDashboardSettings = "teams.dashboard.settings", e.SubsBroadcasterPage = "subs.broadcaster", e.VideoManagerEditPropertiesPage = "videoManager.edit", e.VideoManagerPage = "videoManager.page", e.VideoManagerUploadListPage = "videoManager.upload-list", e.VideoManagerUploadPage = "videoManager.upload", e.VideosPage = "videos", e.VideoWatchPage = "video"
        }(a || (a = {}))
    }
});
//# sourceMappingURL=pages.report-user-page-c1593c86dcc969fd574bc71e628e305a.js.map