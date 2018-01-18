webpackJsonp([57], {
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.BitsBuyCard = "bits-buy-card", e.BrowseCommunities = "browse.communities", e.BrowseCreative = "browse.creative", e.BrowseGamesAndCommunities = "browse.games-and-communities", e.ChannelClips = "channel.clips", e.ChannelCollections = "channel.collections", e.ChannelClipsManager = "videoManager.clips.channel", e.ChannelDashboardAchievements = "channel.dashboard.achievements", e.ChannelDashboardExtensions = "channel.dashboard.extensions", e.ChannelDashboardModeration = "channel.dashboard.moderation", e.ChannelDashboardStreamSummary = "channel.dashboard.stream-summary", e.ChannelEvents = "channel.events", e.ChannelIndex = "channel.index.index", e.ChatPopout = "chat", e.CheermoteCarousel = "cheermote-carousel", e.DevOnly = "dev", e.DirectoryCommunityByLanguage = "directory.community.language", e.DirectoryCommunityIndex = "directory.community.index", e.DirectoryCommunityDetails = "directory.community.details", e.DirectoryFollowingCommunities = "directory.following.communities", e.DirectoryFollowingGames = "directory.following.games", e.DirectoryFollowingHosts = "directory.following.hosts", e.DirectoryFollowingIndex = "directory.following.index", e.DirectoryFollowingLiveChannels = "directory.following.channels", e.DirectoryFollowingVideos = "directory.following.videos.video-type", e.DirectoryGameClips = "directory.game.clips", e.DirectoryGameDetails = "directory.game.details", e.DirectoryGameIndex = "directory.game.index", e.DirectoryGames = "directory.games", e.DirectoryPopular = "directory.popular", e.DirectoryPopularByLanguage = "directory.popular.language", e.DirectoryGameVideos = "directory.game.videos", e.EmailVerification = "emailVerification", e.EventDetails = "event.details", e.ForYou = "for-you", e.Index = "index", e.MyClipsManager = "videoManager.clips", e.NotificationSettingsPage = "settings.notificationSettings", e.OnboardingIndex = "onboarding.index", e.ReportUserPage = "reportUser.page", e.SettingsConnections = "private/embed-components", e.SettingsChannel = "private/embed-components", e.SettingsNotifications = "settings.notifications", e.SettingsPrime = "settings.prime", e.SettingsProfile = "settings.profile", e.SettingsSecurity = "private/embed-components", e.StoreMerchPage = "store.merch", e.SubsLandingPage = "subs.landing", e.TeamsDashboardRevenue = "teams.dashboard.revenue", e.TeamsDashboardStats = "teams.dashboard.stats", e.TeamsDashboardMembers = "teams.dashboard.members", e.TeamsDashboardFeaturedChannels = "teams.dashboard.featured-channels", e.TeamsDashboardSettings = "teams.dashboard.settings", e.SubsBroadcasterPage = "subs.broadcaster", e.VideoManagerEditPropertiesPage = "videoManager.edit", e.VideoManagerPage = "videoManager.page", e.VideoManagerUploadListPage = "videoManager.upload-list", e.VideoManagerUploadPage = "videoManager.upload", e.VideosPage = "videos", e.VideoWatchPage = "video"
        }(a || (a = {}))
    },
    yMnN: function(e, t, n) {
        "use strict";

        function a() {
            h.i.debug("debug message")
        }

        function i() {
            h.i.info("info message")
        }

        function l() {
            h.i.warn("warn message")
        }

        function r() {
            var e = {};
            e.self = e, h.i.info("Can't serialize this arg, oh no.", e)
        }

        function o() {
            try {
                throw new Error("throwing an error.")
            } catch (e) {
                h.i.error(e, "Artisanal error handling.")
            }
        }

        function s() {
            try {
                throw new Error("throwing a super bad unrecoverable error.")
            } catch (e) {
                h.i.fatal(e, "Superb fatal error handling.")
            }
        }

        function c() {
            throw new Error("Throwing an uncaught error.")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = n("U7vG"),
            m = n("CIox"),
            u = n("F8kA"),
            h = n("6sO2"),
            g = n("zCIC"),
            p = n("w9tK"),
            v = n("CSlQ"),
            y = n("TToO"),
            E = n("Odds"),
            f = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.loadMoreA = function() {
                        return n.setState({
                            loadingA: !0
                        }), new Promise(function(e) {
                            setTimeout(function() {
                                n.setState({
                                    loadingA: !1,
                                    colA: n.state.colA + 2
                                }), e()
                            }, 3e3)
                        })
                    }, n.loadMoreB = function() {
                        return new Promise(function(e) {
                            n.setState({
                                loadingB: !0
                            }), setTimeout(function() {
                                n.setState({
                                    loadingB: !1,
                                    colB: n.state.colB + 5
                                }), e()
                            }, 2e3)
                        })
                    }, n.state = {
                        colA: 5,
                        loadingA: !1,
                        colB: 6,
                        loadingB: !1
                    }, n
                }
                return y.__extends(t, e), t.prototype.render = function() {
                    for (var e = [], t = 0; t < this.state.colA; t++) e.push(d.createElement(E.V, {
                        key: t,
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap,
                        margin: 1
                    }, d.createElement(E.V, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(E._3, {
                        height: 90,
                        width: 90
                    })), d.createElement(E.V, null, d.createElement(E._3, {
                        width: 300,
                        lineCount: 3
                    }))));
                    var n = [];
                    for (t = 0; t < this.state.colB; t++) n.push(d.createElement(E.V, {
                        key: t,
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap,
                        margin: 1
                    }, d.createElement(E.V, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(E._3, {
                        height: 90,
                        width: 90
                    })), d.createElement(E.V, null, d.createElement(E._3, {
                        width: 300,
                        lineCount: 3
                    }))));
                    var a = {
                        border: "solid 3px",
                        borderColor: this.state.loadingA || this.state.loadingB ? "yellow" : "green",
                        height: "500px"
                    };
                    return d.createElement("div", {
                        style: a
                    }, d.createElement(g.b, null, d.createElement(E.V, {
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap
                    }, d.createElement(E.V, {
                        margin: {
                            right: 1
                        }
                    }, e, this.state.loadingA && d.createElement(E.V, null, d.createElement(E.Z, {
                        fillContent: !0
                    })), d.createElement(g.a, {
                        enabled: !0,
                        loadMore: this.loadMoreA,
                        pixelThreshold: 0
                    })), d.createElement(E.V, null, n, this.state.loadingB && d.createElement(E.V, null, d.createElement(E.Z, {
                        fillContent: !0
                    })), d.createElement(g.a, {
                        contentLength: n.length,
                        enabled: !0,
                        loadMore: this.loadMoreB,
                        pixelThreshold: 100
                    })))))
                }, t
            }(d.Component),
            k = Object(v.c)("DevOnlyPage", {
                destination: p.a.DevOnly,
                autoReportInteractive: !0
            })(function() {
                return d.createElement(g.b, null, d.createElement("div", {
                    style: {
                        margin: "0 2rem"
                    }
                }, d.createElement("h1", {
                    style: {
                        margin: "2rem 0"
                    }
                }, "The Dev only page!"), d.createElement("p", null, "This page is only included in development. Use it for testing all the things that need testing."), d.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Logging and error reporting"), d.createElement("div", null, d.createElement(E.u, {
                    onClick: a
                }, "Log a debug-level message"), " ", d.createElement(E.u, {
                    onClick: i
                }, "Log a info-level message"), " ", d.createElement(E.u, {
                    onClick: l
                }, "Log a warning-level message"), " ", d.createElement(E.u, {
                    onClick: o
                }, "Log an error-level message with error"), " ", d.createElement(E.u, {
                    onClick: s
                }, "Log a fatal-level message with error"), " ", d.createElement(E.u, {
                    onClick: r
                }, "Log message with unserializable argument"), " ", d.createElement(E.u, {
                    onClick: c
                }, "Throw an error")), d.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Dynamic Settings"), d.createElement("ul", null, d.createElement("li", null, d.createElement("pre", null, "environment = ", JSON.stringify(h.b.get("environment", "<not set>")))), d.createElement("li", null, d.createElement("pre", null, "env_test = ", JSON.stringify(h.b.get("env_test", "<not set>")))), d.createElement("li", null, d.createElement("pre", null, "totally_invalid_key = ", JSON.stringify(h.b.get("totally_invalid_key", "<default value>")))), d.createElement("li", null, d.createElement("pre", null, "experiments (hidden) = ", JSON.stringify(h.b.get("experiments", "<default value>"))))), d.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Link tests"), d.createElement("ul", null, d.createElement("li", null, d.createElement(u.a, {
                    to: "/_dev"
                }, "Full path")), d.createElement("li", null, d.createElement(u.a, {
                    to: "/_dev?qs"
                }, "Full path, query string")), d.createElement("li", null, d.createElement(u.a, {
                    to: "/_dev#hash"
                }, "Full path, hash")), d.createElement("li", null, d.createElement(u.a, {
                    to: "/_dev?qs#hash"
                }, "Full path, query string, hash")), d.createElement("li", null, d.createElement(u.a, {
                    to: "_dev"
                }, "Relative (identical) path")), d.createElement("li", null, d.createElement(u.a, {
                    to: "_dev?qs"
                }, "Relative path, query string")), d.createElement("li", null, d.createElement(u.a, {
                    to: "_dev#hash"
                }, "Relative path, hash")), d.createElement("li", null, d.createElement(u.a, {
                    to: "_dev?qs#hash"
                }, "Relative path, query string, hash")), d.createElement("li", null, d.createElement(u.a, {
                    to: "?qs"
                }, "Query string")), d.createElement("li", null, d.createElement(u.a, {
                    to: "#hash"
                }, "Hash")), d.createElement("li", null, d.createElement(u.a, {
                    to: "?qs#hash"
                }, "Query string and hash")), d.createElement("li", null, d.createElement(u.a, {
                    to: {
                        pathname: "/_dev"
                    }
                }, "Location with pathname")), d.createElement("li", null, d.createElement(u.a, {
                    to: {
                        pathname: "_dev"
                    }
                }, "Location with relative (identical) pathname")), d.createElement("li", null, d.createElement(u.a, {
                    to: {
                        search: "?qs"
                    }
                }, "Location with query string")), d.createElement("li", null, d.createElement(u.a, {
                    to: {
                        hash: "hash"
                    }
                }, "Location with hash")), d.createElement("li", null, d.createElement(u.a, {
                    to: "/pondelinp?foo=bar&tt_content=content&tt_medium=medium&tt_foo=extrafoo"
                }, "URL with query parameters, including tt_codes")), d.createElement("li", null, d.createElement(u.a, {
                    to: {
                        pathname: "/pondelinp",
                        state: {
                            content: "content",
                            medium: "medium"
                        }
                    }
                }, "Internal Link with location state, including tt_codes")), d.createElement("li", null, d.createElement(u.a, {
                    to: "/adamar/dashboard"
                }, "Legacy Link (dashbaord)"))), d.createElement(E.V, {
                    margin: {
                        top: 2
                    }
                }, d.createElement(E._23, {
                    type: E._28.H2
                }, " Infinite Scroll Test"), d.createElement(f, null))))
            }),
            b = n("BhyV"),
            S = n("7vx8"),
            w = n("z7vJ"),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return y.__extends(t, e), t.prototype.render = function() {
                    return d.createElement("div", {
                        style: {
                            margin: "0 2rem"
                        }
                    }, d.createElement("p", null, "Testing GraphQL"))
                }, t
            }(d.Component),
            D = Object(b.compose)(Object(S.a)(w, {
                options: function(e) {
                    return {
                        variables: {
                            shouldSkip: e.shouldSkip
                        }
                    }
                }
            }), u.f)(C),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        shouldSkip: !0
                    }, t
                }
                return y.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    setTimeout(function() {
                        return e.setState({
                            shouldSkip: !1
                        }, function() {
                            return setTimeout(function() {
                                return e.setState({
                                    shouldSkip: !0
                                })
                            }, 1e3)
                        })
                    }, 1e3)
                }, t.prototype.render = function() {
                    return d.createElement(D, {
                        shouldSkip: this.state.shouldSkip
                    })
                }, t
            }(d.Component),
            x = function() {
                return d.createElement(m.d, null, d.createElement(m.b, {
                    path: "/_dev/gql",
                    component: _
                }), d.createElement(m.b, {
                    path: "/_dev",
                    component: k
                }))
            };
        n.d(t, "DevOnlyRoot", function() {
            return x
        })
    },
    z7vJ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Dev_Only_GQL"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "shouldSkip"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
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
                            value: "currentUser"
                        },
                        arguments: [],
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
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "includeUser"
                        },
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "shouldSkip"
                                    }
                                }
                            }]
                        }],
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
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "skipUser"
                        },
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "shouldSkip"
                                    }
                                }
                            }]
                        }],
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
                end: 174
            }
        };
        n.loc.source = {
            body: "query Dev_Only_GQL($shouldSkip: Boolean!) {\ncurrentUser {\nid\n}\nincludeUser: currentUser @include(if: $shouldSkip) {\nid\n}\nskipUser: currentUser @skip(if: $shouldSkip) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.dev-only-40bbc2ba1f57a3ae4ef2be41fe2d37e4.js.map