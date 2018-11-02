(window.webpackJsonp = window.webpackJsonp || []).push([
    [166], {
        "4mBO": function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                o = n("q1tI"),
                i = n("1rIY"),
                s = (a = Object(i.a)("LiveDashboardDeferredLoading", {
                    canRenderAnyComponent: !1,
                    loadFirst: {},
                    registerReportLoaded: function() {
                        return function() {
                            return null
                        }
                    },
                    reportLoaded: function() {
                        return null
                    }
                })).InnerProvider,
                d = a.withContext,
                c = function(e, t) {
                    return void 0 === t && (t = {}),
                        function(n) {
                            return {
                                canRenderAnyComponent: n.canRenderAnyComponent,
                                loadFirst: n.loadFirst,
                                reportLoaded: n.registerReportLoaded(e, t)
                            }
                        }
                };

            function l(e, t) {
                return void 0 === t && (t = {}),
                    function(n) {
                        return d(c(e, t))(function(t) {
                            return void 0 !== t.loadFirst[e] || t.canRenderAnyComponent ? o.createElement(n, r.__assign({}, t)) : null
                        })
                    }
            }
            var u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canRenderDeferredComponents: 0 === t.props.loadFirst.length,
                        loadFirst: t.props.loadFirst.reduce(function(e, t) {
                            return e[t] = !1, e
                        }, {})
                    }, t.autoReportLoadedNames = {}, t.hasLoadedDeferredComponents = !1, t.initialLoadTimestamp = Date.now(), t.registerReportLoaded = function(e, n) {
                        return void 0 !== t.state.loadFirst[e] ? (n.autoReportLoaded && (t.autoReportLoadedNames[e] = !0), function() {
                            t.setState(function(t) {
                                var n;
                                return {
                                    loadFirst: r.__assign({}, t.loadFirst, (n = {}, n[e] = !0, n))
                                }
                            })
                        }) : function() {
                            return null
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.setState(function(t) {
                        return {
                            loadFirst: r.__assign({}, t.loadFirst, e.autoReportLoadedNames)
                        }
                    })
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    if (!this.hasLoadedDeferredComponents) {
                        var t = this.state.loadFirst,
                            n = Object.keys(t).every(function(e) {
                                return t[e]
                            });
                        n && this.setState({
                            canRenderDeferredComponents: n
                        }, function() {
                            e.hasLoadedDeferredComponents = !0
                        })
                    }
                }, t.prototype.render = function() {
                    return o.createElement(s, {
                        value: {
                            canRenderAnyComponent: this.state.canRenderDeferredComponents || this.hasReachedMaximumDeferredTime,
                            loadFirst: this.state.loadFirst,
                            registerReportLoaded: this.registerReportLoaded
                        }
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "hasReachedMaximumDeferredTime", {
                    get: function() {
                        var e = this.props.maximumDeferredTime,
                            t = void 0 !== e ? e : 15e3;
                        return Date.now() >= this.initialLoadTimestamp + t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.Component);
            n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return d
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return u
            })
        },
        "6Ll5": function(e, t, n) {},
        "7WKn": function(e, t, n) {},
        "7yAc": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("oJmH"),
                r = n("V+GM"),
                o = n("NvVO"),
                i = n("2xye"),
                s = n("GnwI"),
                d = n("NQSV"),
                c = Object(a.compose)(Object(s.b)("DashboardBroadcastPage", {
                    autoReportInteractive: !0,
                    destination: o.a.DashboardBroadcastPage
                }), Object(r.a)({
                    location: i.PageviewLocation.DashboardBroadcast
                }))(d.a);
            n.d(t, "DashboardBroadcastPage", function() {
                return c
            })
        },
        "87PB": function(e, t, n) {
            e.exports = n.p + "assets/player_me_1x-658cc62393d46c6062b2.png"
        },
        "9kwc": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "StatsWidget"
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
                                        value: "login"
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
                                        value: "stream"
                                    },
                                    arguments: [],
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
                                                value: "viewersCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "profileViewCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followers"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subscriberScore"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "countBreakdown"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "count"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "current"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "next"
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
                    end: 202
                }
            };
            n.loc.source = {
                body: "query StatsWidget($login: String!) {\nuser(login: $login) {\nid\nstream {\nid\nviewersCount\ncreatedAt\n}\nprofileViewCount\nfollowers {\ntotalCount\n}\nsubscriberScore {\ncountBreakdown {\ncount\n}\ncurrent\nnext\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        EkNY: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "d", function() {
                return r
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "l", function() {
                return m
            }), n.d(t, "m", function() {
                return f
            }), n.d(t, "k", function() {
                return h
            }), n.d(t, "j", function() {
                return g
            }), n.d(t, "g", function() {
                return b
            }), n.d(t, "i", function() {
                return v
            }), n.d(t, "e", function() {
                return C
            }), n.d(t, "f", function() {
                return y
            }), n.d(t, "h", function() {
                return S
            });
            var a, r, o, i, s, d, c = n("mrSG"),
                l = n("/7QA"),
                u = n("2xye"),
                p = n("lDS7");
            ! function(e) {
                e.Added = "added", e.Removed = "removed"
            }(a || (a = {})),
            function(e) {
                e.SliderMove = "slidermove", e.StreamDelayClick = "streamdelayclick"
            }(r || (r = {})),
            function(e) {
                e.Click = "click"
            }(o || (o = {})),
            function(e) {
                e.Hover = "hover"
            }(i || (i = {})),
            function(e) {
                e.StorePastBroadcasts = "store_past_broadcasts"
            }(s || (s = {})),
            function(e) {
                e.ExpandedView = "expanded_view", e.RunAd = "run_ad", e.StreamDelay = "stream_delay", e.StreamInformation = "stream_info_update", e.StreamMarker = "stream_marker", e.BountyBoard = "bounty_board", e.StartBounty = "start_bounty", e.CancelBounty = "cancel_bounty", e.StopBounty = "stop_bounty", e.CheckBounties = "check_bounties"
            }(d || (d = {}));
            var m = function(e) {
                    var t = e.streamTime;
                    l.p.tracking.track(u.SpadeEventType.StreamSummaryBannerClick, {
                        stream_time: new Date(t).getTime() / 1e3
                    })
                },
                f = function(e) {
                    S(d.StreamInformation, {
                        target_name: "update",
                        update_successful: e
                    })
                },
                h = function(e) {
                    l.p.tracking.track(u.SpadeEventType.LiveDashboardStreamStats, {
                        action: i.Hover,
                        target_name: e,
                        stats_configuration: JSON.stringify(l.m.get("streamStatsConfiguration", p.a))
                    })
                },
                g = function(e) {
                    l.p.tracking.track(u.SpadeEventType.LiveDashboardStreamHealthEvent, {
                        action: o.Click,
                        target_name: e
                    })
                },
                b = function(e, t, n) {
                    l.p.tracking.track(u.SpadeEventType.AutoHostChannelUpdate, {
                        time: Date.now(),
                        location: "dashboard",
                        login: t,
                        target_channel: e,
                        action: n
                    })
                },
                v = function(e, t, n, a) {
                    S(d.StreamDelay, {
                        type: e,
                        slider_start_position: t,
                        slider_position: n,
                        update_successful: a
                    })
                },
                C = function(e) {
                    l.p.tracking.track(u.SpadeEventType.BroadcastPageClick, {
                        time: Date.now(),
                        broadcast_software: e
                    })
                },
                y = function(e) {
                    l.p.tracking.track(u.SpadeEventType.DashboardSettingsInteraction, {
                        setting_name: e.settingName,
                        setting_value: e.settingValue,
                        content: e.content,
                        medium: e.medium,
                        channel_id: e.channelID
                    })
                },
                S = function(e, t) {
                    l.p.tracking.track(u.SpadeEventType.LiveDashboardInteraction, c.__assign({
                        action: e
                    }, t || {}))
                }
        },
        JBqe: function(e, t, n) {
            "use strict";
            var a, r, o = n("mrSG"),
                i = n("q1tI"),
                s = n("x7UT"),
                d = n("0Log"),
                c = n("/aPz"),
                l = n("1rIY"),
                u = n("kxrW"),
                p = n("b6Yk"),
                m = function(e) {
                    return o.__awaiter(void 0, void 0, void 0, function() {
                        var t;
                        return o.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, p.a.get("/v5/streams/" + e)];
                                case 1:
                                    return [2, !(!(t = n.sent()).body || !t.body.stream)]
                            }
                        })
                    })
                },
                f = (a = Object(l.a)("IsStreamLiveContext", {
                    isLive: void 0,
                    onStreamStatusChange: function() {
                        return null
                    }
                })).InnerProvider,
                h = a.withContext,
                g = function(e) {
                    return e
                };

            function b(e) {
                return h(g)(e)
            }
            var v = 3e5,
                C = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.fetchIsStreamLiveLegacyAPI = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, m(this.props.channelID)];
                                        case 1:
                                            return e = t.sent(), this.setState({
                                                isLive: e
                                            }), [2]
                                    }
                                })
                            })
                        }, n.onStreamStatusChange = function(e) {
                            n.setLiveState(e === u.a.Online)
                        }, n.pollLegacyAPI = function() {
                            n.legacyAPIIntervalID = setInterval(n.fetchIsStreamLiveLegacyAPI, v)
                        }, n.resetLegacyAPIPoll = function() {
                            n.legacyAPIIntervalID && (clearInterval(n.legacyAPIIntervalID), n.pollLegacyAPI())
                        }, n.setInitialLiveState = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return void 0 !== this.state.isLive ? [3, 2] : [4, m(this.props.channelID)];
                                        case 1:
                                            e = t.sent(), void 0 === this.state.isLive && this.setState({
                                                isLive: e
                                            }), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = {
                            onStreamStatusChange: n.onStreamStatusChange
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onPubsubUpdate(), this.setInitialLiveState(), this.pollLegacyAPI()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onPubsubUpdate()
                    }, t.prototype.componentWillUnmount = function() {
                        this.legacyAPIIntervalID && clearInterval(this.legacyAPIIntervalID)
                    }, t.prototype.render = function() {
                        return i.createElement(f, {
                            value: this.state
                        }, this.props.children)
                    }, t.prototype.onPubsubUpdate = function() {
                        var e = this.props.pubsub.messages,
                            t = e.streamUp && e.streamUp.server_time || 0,
                            n = e.streamDown && e.streamDown.server_time || 0;
                        (t || n) && this.setLiveState(t > n)
                    }, t.prototype.setLiveState = function(e) {
                        this.resetLegacyAPIPoll(), e !== this.state.isLive && this.setState({
                            isLive: e
                        })
                    }, t
                }(i.Component),
                y = Object(s.a)([{
                    topic: function(e) {
                        return Object(c.G)(e.channelID)
                    },
                    mapMessageTypesToProps: (r = {}, r[d.PubsubMessageType.ChannelStreamUp] = "streamUp", r[d.PubsubMessageType.ChannelStreamDown] = "streamDown", r)
                }])(C);
            n.d(t, !1, function() {
                return f
            }), n.d(t, !1, function() {
                return h
            }), n.d(t, "b", function() {
                return b
            }), n.d(t, !1, function() {
                return C
            }), n.d(t, "a", function() {
                return y
            })
        },
        "L/BW": function(e, t, n) {},
        LWua: function(e, t, n) {
            e.exports = n.p + "assets/xsplit_broadcaster_1x-404b22413674582ad019.png"
        },
        NQSV: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                o = n("q1tI"),
                i = n("/7QA"),
                s = n("UWzm"),
                d = n.n(s),
                c = n("zJLP"),
                l = n.n(c),
                u = n("SX9i"),
                p = n.n(u),
                m = n("87PB"),
                f = n.n(m),
                h = n("Nmvj"),
                g = n.n(h),
                b = n("g/LZ"),
                v = n.n(b),
                C = n("wcfy"),
                y = n.n(C),
                S = n("LWua"),
                w = n.n(S),
                E = n("EkNY"),
                _ = n("Ue10");
            ! function(e) {
                e.DownloadButton = "broadast-items-card__download-button"
            }(a || (a = {}));
            var L = function(e) {
                    var t = e.link,
                        n = e.title;
                    return o.createElement(_.Cb, {
                        background: _.r.Base,
                        elevation: 1,
                        padding: 2,
                        display: _.X.Flex,
                        flexDirection: _.Aa.Column,
                        fullHeight: !0
                    }, o.createElement(_.Xa, {
                        display: _.X.Flex,
                        justifyContent: _.Wa.Center,
                        margin: {
                            top: 1
                        }
                    }, o.createElement(_.S, {
                        alt: n,
                        src: e.imgURL
                    })), o.createElement(_.Xa, {
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(_.W, {
                        fontSize: _.Ca.Size5
                    }, n), o.createElement(_.U, {
                        targetBlank: !0,
                        to: t
                    }, t)), o.createElement(_.W, {
                        type: _.Tb.P,
                        color: _.O.Alt2
                    }, e.longDescription), o.createElement(_.Xa, {
                        display: _.X.Flex,
                        flexDirection: _.Aa.Column,
                        fullWidth: !0,
                        flexGrow: 1,
                        justifyContent: _.Wa.End,
                        margin: {
                            top: 2
                        }
                    }, o.createElement(_.z, {
                        "data-test-selector": a.DownloadButton,
                        fullWidth: !0,
                        type: _.F.Hollow,
                        linkTo: t,
                        onClick: E.e.bind(null, n)
                    }, Object(i.d)("Download", "BroadcastItemCard")), o.createElement(_.Xa, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(_.z, {
                        fullWidth: !0,
                        type: _.F.Text,
                        linkTo: e.setupGuideLink
                    }, Object(i.d)("Setup Guide", "BroadcastItemCard")))))
                },
                k = n("IFXb"),
                R = (n("L/BW"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        i.p.setPageTitle(Object(i.d)("Broadcast", "BroadcastPage"))
                    }, t.prototype.render = function() {
                        return o.createElement(_.Xa, {
                            display: _.X.Flex,
                            flexDirection: _.Aa.Column,
                            flexWrap: _.Ba.NoWrap,
                            fullHeight: !0
                        }, o.createElement(_.Xa, {
                            className: "broadcast-container",
                            position: _.hb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            overflow: _.cb.Hidden
                        }, o.createElement(k.a, null, o.createElement(_.W, {
                            bold: !0,
                            type: _.Tb.H4
                        }, Object(i.d)("Broadcast While You Play", "BroadcastRootPage")), o.createElement(_.Xa, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(_.W, {
                            color: _.O.Alt2,
                            type: _.Tb.P
                        }, Object(i.d)("Here are the most common tools for broadcasting.", "BroadcastRootPage")), o.createElement(_.W, {
                            color: _.O.Alt2
                        }, Object(i.d)("For more info, visit the <x:link>Support Center</x:link>.", {
                            "x:link": function(e) {
                                return o.createElement(_.U, {
                                    targetBlank: !0,
                                    to: "https://help.twitch.tv/customer/portal/topics/301257-getting-started/articles"
                                }, e)
                            }
                        }, "BroadcastRootPage"))), o.createElement(_.W, {
                            color: _.O.Alt2
                        }, Object(i.d)("Looking for your stream key? You can find it on your <x:link>dashboard</x:link>.", {
                            "x:link": function(e) {
                                return o.createElement(_.U, {
                                    to: "/dashboard/settings"
                                }, e)
                            }
                        }, "BroadcastRootPage")), o.createElement(_.Xa, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(_.W, {
                            bold: !0,
                            type: _.Tb.H4
                        }, Object(i.d)("Broadcasting Applications", "BroadcastRootPage"))), o.createElement(_.Zb, {
                            childWidth: _.ac.Large,
                            gutterSize: _.bc.Small,
                            noGrow: !0,
                            placeholderItems: 8
                        }, o.createElement(_.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: f.a,
                            title: "Player.me",
                            link: "https://player.me/",
                            longDescription: Object(i.d)("Free, easy-to-use, all-in-one application for streaming and recording. Includes thousands of professionally designed overlays with alerts, a stream dashboard for tracking events, live stream chat and scene switching.", "BroadcastRootPage"),
                            setupGuideLink: "https://helpdesk.player.me/en/article/streaming-setup-guide-svsjha"
                        })), o.createElement(_.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: y.a,
                            title: "Streamlabs OBS",
                            link: "https://streamlabs.com/streamlabs-obs/",
                            longDescription: Object(i.d)("Streamlabs OBS is free, open source, and easy way to get started streaming. The app is built on top of OBS with a whole lot of exciting features: facemasks, built-in widgets & chat, game specific encoders and thousands of free overlays and themes.", "BroadcastRootPage"),
                            setupGuideLink: "https://support.streamlabs.com/hc/en-us/articles/115004797393-Streamlabs-OBS-All-In-One-Window-Walk-Through"
                        })), o.createElement(_.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: w.a,
                            title: "XSplit Broadcaster",
                            link: "http://www.xsplit.com/",
                            longDescription: Object(i.d)("Simple yet powerful live streaming and recording software. XSplit Broadcaster is a revolutionary audio/video mixing application that allows for highly customizable professional quality live broadcasts by using simple and intuitive interface anyone can master.", "BroadcastRootPage"),
                            setupGuideLink: "https://www.xsplit.com/support"
                        })), o.createElement(_.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: l.a,
                            title: "Open Broadcast Software",
                            link: "http://obsproject.com/",
                            longDescription: Object(i.d)("Free and open source software for recording and live streaming. Source code is available to everyone to contribute and improve.", "BroadcastRootPage"),
                            setupGuideLink: "https://obsproject.com/help"
                        }))), o.createElement(_.Xa, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(_.W, {
                            bold: !0,
                            type: _.Tb.H4
                        }, Object(i.d)("Broadcasting Tools", "BroadcastRootPage"))), o.createElement(_.Zb, {
                            childWidth: _.ac.Large,
                            gutterSize: _.bc.Small,
                            noGrow: !0,
                            placeholderItems: 3
                        }, o.createElement(_.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: v.a,
                            title: "Streamlabs",
                            link: "https://streamlabs.com/",
                            longDescription: Object(i.d)("Level up your stream with alerts, donations, and 20+ interactive widgets.", "BroadcastRootPage"),
                            setupGuideLink: "https://support.streamlabs.com/hc/en-us/articles/217741147-Setting-up-your-Streamlabs-widgets-"
                        })), o.createElement(_.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: g.a,
                            title: "StreamElements",
                            link: "https://streamelements.com/",
                            longDescription: Object(i.d)("A full suite for all your streaming needs: Bot, Overlays, Loyalty points, Giveaways and much more for new and veteran streamers alike.", "BroadcastRootPage"),
                            setupGuideLink: "https://support.streamelements.com/hc/en-us/articles/115003424812-Quick-Start-Guide"
                        })), o.createElement(_.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: d.a,
                            title: "Muxy",
                            link: "https://www.muxy.io/",
                            longDescription: Object(i.d)("Muxy provides alerts, tips, a real-time Live Feed, Cheer visualizations, and stream analytics.", "BroadcastRootPage"),
                            setupGuideLink: "https://muxy.io/tutorial/"
                        })), o.createElement(_.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: p.a,
                            title: "Opera Event",
                            link: "https://gather.operaevent.co/",
                            longDescription: Object(i.d)("Opera Event is a platform for arming broadcasters with the ability to engage, grow, enhance and monetize their audience.", "BroadcastRootPage"),
                            setupGuideLink: "https://gather.operaevent.co/"
                        }))))))
                    }, t
                }(o.Component));
            n.d(t, "a", function() {
                return R
            })
        },
        NkOX: function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.ActivityFeed = "activity-feed", e.AdsWidget = "ads-widget", e.BountyBoardWidget = "bounty-board-widget", e.ExtensionLiveConfigure = "extension-live-configure", e.HostWidget = "host-widget", e.LiveChat = "live-chat", e.SquadStream = "squad-stream", e.Stats = "stats", e.StreamDelay = "stream-delay", e.StreamHealth = "stream-health", e.StreamInformation = "stream-information", e.StreamMarker = "stream-marker", e.VideoPreview = "video-preview", e.VideoProducerWidget = "video-producer-widget"
                }(a || (a = {})),
                function(e) {
                    e.ActivityFeedWidget = "activity_feed_widget", e.AdsWidget = "ads_widget", e.BountyBoardWidget = "bounty_board_widget", e.ExtensionLiveConfigureWidget = "extension_config_widget", e.HostWidget = "host_widget", e.LiveChatWidget = "chat_widget", e.SquadStreamWidget = "squad_stream_widget", e.StatsWidget = "stats_widget", e.StreamDelayWidget = "stream_delay_widget", e.StreamHealthWidget = "stream_health_widget", e.StreamInformationWidget = "stream_information_widget", e.StreamMarkerWidget = "stream_marker_widget", e.VideoPreviewWidget = "video_preview_widget", e.VideoProducerWidget = "video_producer_widget"
                }(r || (r = {}))
        },
        Nmvj: function(e, t, n) {
            e.exports = n.p + "assets/streamelements_1x-5a78a214c1701af3da1d.png"
        },
        SMeG: function(e, t, n) {},
        SX9i: function(e, t, n) {
            e.exports = n.p + "assets/opera_1x-2766d8f4415bd7218cc9.png"
        },
        UWzm: function(e, t, n) {
            e.exports = n.p + "assets/muxy_1x-f7ab6fe3091595df63f6.png"
        },
        "g/LZ": function(e, t, n) {
            e.exports = n.p + "assets/streamlabs-dc0be2830d3658fa69d4.png"
        },
        lDS7: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("oJmH"),
                i = n("/7QA"),
                s = n("yR8l"),
                d = n("5zf8"),
                c = n("GnwI"),
                l = n("EkNY"),
                u = n("Ue10"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hidden: !t.props.showStat
                        }, t.handleHover = function() {
                            var e;
                            switch (t.props.statType) {
                                case S.CURRENT_VIEWERS:
                                    e = "viewers_value";
                                    break;
                                case S.STREAM_UP_TIME:
                                    e = "uptime_value";
                                    break;
                                case S.NUMBER_OF_CLIPS:
                                    e = "clips_value";
                                    break;
                                case S.TOTAL_VIEWS:
                                    e = "views_value";
                                    break;
                                case S.FOLLOWERS:
                                    e = "followers_value";
                                    break;
                                case S.SUBSCRIPTIONS:
                                    e = "subscribers_value";
                                    break;
                                default:
                                    e = "unknown"
                            }
                            Object(l.k)(e)
                        }, t.handleClick = function() {
                            t.setState({
                                hidden: !t.state.hidden
                            });
                            var e = i.m.get("streamStatsConfiguration", w);
                            e[t.props.statType] = !e[t.props.statType], i.m.set("streamStatsConfiguration", e)
                        }, t.renderStat = function() {
                            var e = Object(i.d)("Offline", "LiveDashboard");
                            return t.state.hidden ? r.createElement(u.Wb, {
                                label: t.props.statDescription || e,
                                direction: u.Yb.Right
                            }, Object(i.d)("Hover to view", "LiveDashboard")) : r.createElement(u.Wb, {
                                label: Object(i.d)("Click to hide", "LiveDashboard"),
                                direction: u.Yb.Right
                            }, t.props.statDescription || e)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.color;
                        return r.createElement(u.Cb, {
                            margin: {
                                left: 1
                            },
                            fontSize: u.Ca.Size5,
                            color: e
                        }, r.createElement("span", {
                            onClick: this.handleClick,
                            onMouseOver: this.handleHover
                        }, this.renderStat()))
                    }, t
                }(r.Component),
                m = n("xTFG"),
                f = n("NkOX"),
                h = n("qYDK"),
                g = n("4mBO"),
                b = n("JBqe"),
                v = n("6XEL"),
                C = n("9kwc");
            n.d(t, "a", function() {
                return w
            }), n.d(t, "b", function() {
                return S
            }), n.d(t, "c", function() {
                return _
            });
            var y, S, w = {
                showViewers: !0,
                showUptime: !0,
                showViews: !0,
                showFollowers: !0,
                showSubs: !0,
                showClips: !0,
                showSubScore: !0
            };
            ! function(e) {
                e.CURRENT_VIEWERS_COUNT = "current-viewers-count", e.NUMBER_OF_CLIPS = "number-of-clips"
            }(y || (y = {})),
            function(e) {
                e.CURRENT_VIEWERS = "showViewers", e.STREAM_UP_TIME = "showUptime", e.TOTAL_VIEWS = "showViews", e.FOLLOWERS = "showFollowers", e.NUMBER_OF_CLIPS = "showClips", e.SUBSCRIPTIONS = "showSubs"
            }(S || (S = {}));
            var E = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.getStreamInfo = function() {
                            return n.props.data && n.props.data.user && n.props.data.user.stream
                        }, n.renderViewersCount = function() {
                            var e = n.getStreamInfo(),
                                t = e && null !== e.viewersCount ? Object(i.f)(e.viewersCount) : 0,
                                a = n.state.statsConfig && n.state.statsConfig[S.CURRENT_VIEWERS],
                                o = n.props.isLive;
                            return r.createElement(p, {
                                "data-test-selector": y.CURRENT_VIEWERS_COUNT,
                                statDescription: o ? t + " " + Object(i.d)("Viewers", "LiveDashboard") : null,
                                statType: S.CURRENT_VIEWERS,
                                showStat: a,
                                color: o ? u.O.Live : void 0
                            })
                        }, n.renderStreamTime = function() {
                            var e = n.getStreamInfo(),
                                t = e && e.createdAt || (new Date).toISOString(),
                                a = n.props.isLive;
                            return r.createElement(p, {
                                statDescription: a ? Object(d.b)((Date.now() - new Date(t).getTime()) / 1e3, d.a.ClockHM) : null,
                                statType: S.STREAM_UP_TIME,
                                showStat: !n.state.statsConfig || n.state.statsConfig[S.STREAM_UP_TIME],
                                color: a ? u.O.Base : void 0
                            })
                        }, n.renderNumberOfClips = function() {
                            var e = n.state.broadcastClipsCount,
                                t = n.props.isLive;
                            return r.createElement(p, {
                                "data-test-selector": y.NUMBER_OF_CLIPS,
                                statDescription: t ? Object(i.f)(e) + " " + (1 === e ? Object(i.d)("Clip", "LiveDashboard") : Object(i.d)("Clips", "LiveDashboard")) : null,
                                statType: S.NUMBER_OF_CLIPS,
                                showStat: n.state.statsConfig && n.state.statsConfig[S.NUMBER_OF_CLIPS],
                                color: t ? u.O.Base : void 0
                            })
                        }, n.renderSubscriptionStat = function() {
                            var e = Object(i.d)("Subscribers", "LiveDashboard"),
                                t = Object(i.d)("Sub Points", "LiveDashboard"),
                                a = n.props.data && n.props.data.user && null !== n.props.data.user.subscriberScore ? n.props.data.user.subscriberScore : null,
                                o = a && a.countBreakdown;
                            if (!a || !o) return null;
                            var s = Object(i.f)(o.reduce(function(e, t) {
                                    return e + t.count
                                }, 0)),
                                d = Object(i.f)(a.current);
                            return a.next ? r.createElement(u.Cb, {
                                color: u.O.Alt2,
                                display: u.X.Flex,
                                alignItems: u.f.Center,
                                margin: {
                                    bottom: .5
                                }
                            }, r.createElement(u.Wb, {
                                label: Object(i.d)("Subscribers shows number of active subs.\n Sub points unlock additional emote slots.", "LiveDashboard"),
                                direction: u.Yb.Right
                            }, r.createElement(u.qb, {
                                asset: u.rb.Star
                            })), r.createElement(p, {
                                statDescription: s + " " + e + " (" + d + " / " + Object(i.f)(a.next) + " " + t + ")",
                                statType: S.SUBSCRIPTIONS,
                                showStat: n.state.statsConfig && n.state.statsConfig[S.SUBSCRIPTIONS],
                                color: u.O.Base
                            })) : r.createElement(u.Cb, {
                                color: u.O.Alt2,
                                display: u.X.Flex,
                                alignItems: u.f.Center,
                                margin: {
                                    bottom: .5
                                }
                            }, r.createElement(u.Wb, {
                                label: Object(i.d)("Congrats on reaching the max number of emote slots", "LiveDashboard"),
                                direction: u.Yb.Right
                            }, r.createElement(u.qb, {
                                asset: u.rb.Star
                            })), r.createElement(p, {
                                statDescription: s + " " + e + " (" + d + " " + t + ")",
                                statType: S.SUBSCRIPTIONS,
                                showStat: n.state.statsConfig && n.state.statsConfig[S.SUBSCRIPTIONS],
                                color: u.O.Base
                            }))
                        }, n.setFetchBroadcastClipsCountInterval = function() {
                            n.intervalID && clearInterval(n.intervalID), n.fetchBroadcastClipsCount(), n.intervalID = setInterval(n.fetchBroadcastClipsCount, 3e4)
                        }, n.fetchBroadcastClipsCount = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, r, o;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = this.getStreamInfo(), (t = e && e.id) ? [4, Object(v.c)({
                                                path: "/v4/broadcasts/" + t + "/clips/count"
                                            })] : (this.props.latencyTracking.reportInteractive(), this.props.reportLoaded(), [2]);
                                        case 1:
                                            return (n = a.sent()).body && !n.error ? (r = n.body.count, this.setState({
                                                broadcastClipsCount: r
                                            })) : (o = "Unable to fetch broadcast clips count", i.k.error(new Error(o), o)), this.props.latencyTracking.reportInteractive(), this.props.reportLoaded(), [2]
                                    }
                                })
                            })
                        };
                        var o = i.m.get("streamStatsConfiguration", null);
                        return n.state = {
                            statsConfig: o || w,
                            broadcastClipsCount: 0
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.setFetchBroadcastClipsCountInterval()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.setFetchBroadcastClipsCountInterval()
                    }, t.prototype.componentWillUnmount = function() {
                        this.intervalID && clearInterval(this.intervalID)
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return null;
                        var e = this.props.data.user,
                            t = e && e.followers,
                            n = Object(i.f)(e && e.profileViewCount || 0),
                            a = e && t && null !== t.totalCount ? Object(i.f)(t.totalCount) : 0;
                        return r.createElement(h.a, {
                            title: Object(i.d)("Stats", "LiveDashboard")
                        }, r.createElement(u.Xa, {
                            padding: 2
                        }, r.createElement(u.Cb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(u.Wb, {
                            label: Object(i.d)("The number of people currently watching your channel", "LiveDashboard"),
                            direction: u.Yb.Right
                        }, r.createElement(u.qb, {
                            asset: u.rb.GlyphLive
                        })), this.renderViewersCount()), r.createElement(u.Cb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(u.Wb, {
                            label: Object(i.d)("How long you have been broadcasting for this session", "LiveDashboard"),
                            direction: u.Yb.Right
                        }, r.createElement(u.qb, {
                            asset: u.rb.Timeout
                        })), this.renderStreamTime()), r.createElement(u.Cb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(u.Wb, {
                            label: Object(i.d)("The number of clips that have been created", "LiveDashboard"),
                            direction: u.Yb.Right
                        }, r.createElement(u.Cb, {
                            className: "stats-widget-clips-icon",
                            display: u.X.InlineFlex
                        }, r.createElement(u.qb, {
                            asset: u.rb.Clip,
                            height: 20,
                            width: 20
                        }))), this.renderNumberOfClips()), r.createElement(u.Cb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(u.Wb, {
                            label: Object(i.d)("The number of people who have viewed the channel", "LiveDashboard"),
                            direction: u.Yb.Right
                        }, r.createElement(u.qb, {
                            asset: u.rb.GlyphViews
                        })), r.createElement(p, {
                            statDescription: n + " " + Object(i.d)("Views", "LiveDashboard"),
                            statType: S.TOTAL_VIEWS,
                            showStat: !this.state.statsConfig || this.state.statsConfig[S.TOTAL_VIEWS],
                            color: u.O.Base
                        })), r.createElement(u.Cb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(u.Wb, {
                            label: Object(i.d)("The number of people currently following your channel", "LiveDashboard"),
                            direction: u.Yb.Right
                        }, r.createElement(u.qb, {
                            asset: u.rb.Heart
                        })), r.createElement(p, {
                            statDescription: a + " " + Object(i.d)("Followers", "LiveDashboard"),
                            statType: S.FOLLOWERS,
                            showStat: !this.state.statsConfig || this.state.statsConfig[S.FOLLOWERS],
                            color: u.O.Base
                        })), this.renderSubscriptionStat()))
                    }, t
                }(r.Component),
                _ = Object(o.compose)(Object(g.b)(f.a.Stats), b.b, Object(m.b)(f.a.Stats, {
                    autoReportCardVisibility: !0
                }), Object(s.a)(C, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            pollInterval: 3e4,
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }), Object(c.b)("Stats"))(E)
        },
        odMz: function(e, t, n) {
            "use strict";
            var a, r;
            ! function(e) {
                e[e.RemoveTarget = 0] = "RemoveTarget", e[e.SetGrabbed = 1] = "SetGrabbed", e[e.SetTarget = 2] = "SetTarget"
            }(a || (a = {})),
            function(e) {
                e.Bottom = "bottom", e.Top = "top"
            }(r || (r = {}));
            var o = function() {
                return function(e, t) {
                    void 0 === t && (t = !1), this.name = e, this.isCollapsed = t, this.isGrabbed = !1
                }
            }();
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            })
        },
        qYDK: function(e, t, n) {
            "use strict";
            var a, r, o, i, s = n("fvjX"),
                d = n("1rIY"),
                c = (a = Object(d.a)("DragAndDropLayoutContext", {
                    dropCard: function() {
                        return null
                    },
                    onCardsUpdate: function() {
                        return null
                    },
                    updateCard: function() {
                        return null
                    }
                })).InnerProvider,
                l = a.withContext,
                u = n("mrSG"),
                p = n("q1tI"),
                m = n("/7QA"),
                f = n("odMz"),
                h = n("Ue10"),
                g = (n("7WKn"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setContainerRef = function(e) {
                            t.containerRef = e
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setPlaceholderStyles()
                    }, t.prototype.componentDidUpdate = function() {
                        this.setPlaceholderStyles()
                    }, t.prototype.render = function() {
                        return p.createElement(h.Xa, {
                            breakpointLarge: {
                                margin: {
                                    bottom: 2
                                }
                            },
                            className: "drag-and-drop-card-placeholder" + (this.props.show ? "" : " drag-and-drop-card-placeholder__hide"),
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            },
                            refDelegate: this.setContainerRef
                        })
                    }, t.prototype.setPlaceholderStyles = function() {
                        var e = this.props.cloneStyleRef;
                        if (e && this.containerRef) {
                            var t = e.getBoundingClientRect(),
                                n = t.height,
                                a = t.width;
                            this.containerRef.style.height = n + "px", this.containerRef.style.width = a + "px"
                        }
                    }, t
                }(p.Component)),
                b = n("eJ65"),
                v = n("N0BP"),
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleMouseDown = function(e) {
                            e.stopPropagation()
                        }, t.setContainerRef = function(e) {
                            t.containerRef = e
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.containerRef.addEventListener("mousedown", this.handleMouseDown)
                    }, t.prototype.componentWillUnmount = function() {
                        this.containerRef.removeEventListener("mousedown", this.handleMouseDown)
                    }, t.prototype.render = function() {
                        return p.createElement(h.Xa, {
                            position: h.hb.Relative,
                            refDelegate: this.setContainerRef
                        }, p.createElement(b.a, null, p.createElement(h.A, u.__assign({
                            ariaLabel: Object(m.d)("Options", "CogWheelComponent"),
                            icon: h.rb.Gear
                        }, Object(v.a)(this.props))), p.createElement(h.u, {
                            offsetY: "0",
                            offsetX: "1rem",
                            direction: h.v.Left,
                            size: h.w.Small
                        }, this.props.children)))
                    }, t
                }(p.Component),
                y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return p.createElement(h.Cb, {
                            className: "drag-and-drop-card-title",
                            color: h.O.Base,
                            fontSize: h.Ca.Size5,
                            margin: {
                                y: "auto"
                            }
                        }, this.props.title)
                    }, t
                }(p.Component);
            n("SMeG");
            ! function(e) {
                e.ContentCollapsed = "drag-and-drop-card-content__collapsed"
            }(r || (r = {})),
            function(e) {
                e.Card = "drag-and-drop-card", e.Container = "drag-and-drop-card-container", e.Content = "drag-and-drop-card-content"
            }(o || (o = {})),
            function(e) {
                e.Carat = "carat", e.Card = "card", e.Container = "container", e.Header = "header"
            }(i || (i = {}));
            var S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleContainerMouseEnter = function(e) {
                        var n = e.clientY;
                        if (t.props.grabbedCard && !t.isHoveringSelf) {
                            var a = t.getPlaceholderPosition(n);
                            t.props.updateCard(t.props.card.name, {
                                placeholderPosition: a
                            }, f.b.SetTarget)
                        }
                    }, t.handleContainerMouseLeave = function() {
                        if (t.props.grabbedCard) {
                            var e = t.props.card;
                            t.props.updateCard(e.name, {
                                placeholderPosition: void 0
                            }, f.b.RemoveTarget)
                        }
                    }, t.handleContainerMouseMove = function(e) {
                        var n = e.clientY;
                        if (t.isHoveringOtherCard) {
                            var a = t.getPlaceholderPosition(n);
                            t.props.updateCard(t.props.card.name, {
                                placeholderPosition: a
                            }, f.b.SetTarget)
                        }
                    }, t.getPlaceholderPosition = function(e) {
                        var n = t[i.Container].getBoundingClientRect();
                        return e > n.top + n.height / 2 ? f.c.Bottom : f.c.Top
                    }, t.handleCaratClick = function() {
                        var e = t.props.card,
                            n = e.name,
                            a = e.isCollapsed;
                        t.props.updateCard(n, {
                            isCollapsed: !a
                        })
                    }, t.handleCaratMouseDown = function(e) {
                        e.stopPropagation()
                    }, t.handleCardMouseMove = function(e) {
                        var n = e.movementX,
                            a = e.movementY;
                        if (t.props.card.isGrabbed) {
                            var r = t[i.Card];
                            r.style.left = parseInt(r.style.left || "0", 10) + n + "px", r.style.top = parseInt(r.style.top || "0", 10) + a + "px"
                        }
                    }, t.handleHeaderMouseDown = function(e) {
                        var n = e.clientY,
                            a = t[i.Card],
                            r = a.getBoundingClientRect(),
                            o = r.top,
                            s = r.left,
                            d = r.width;
                        a.style.left = s + "px", a.style.top = o + "px", a.style.width = d + "px";
                        var c = t.getPlaceholderPosition(n),
                            l = t.props.card.name;
                        t.props.updateCard(l, {
                            placeholderPosition: c
                        }, f.b.SetGrabbed), t.props.updateCard(l, {}, f.b.SetTarget)
                    }, t.handleCardMouseUp = function() {
                        if (t.props.card.isGrabbed) {
                            var e = t[i.Card];
                            e.style.left = null, e.style.top = null, e.style.width = "100%", t.props.dropCard()
                        }
                        var n = t.props.card;
                        (n.placeholderPosition || n.isGrabbed) && t.props.updateCard(n.name, {
                            isGrabbed: !1,
                            placeholderPosition: void 0
                        })
                    }, t.registerRef = function(e) {
                        return function(n) {
                            t[e] = n
                        }
                    }, t.addEventListeners = function() {
                        var e = t[i.Container];
                        e.addEventListener("mousemove", t.handleContainerMouseMove), e.addEventListener("mouseleave", t.handleContainerMouseLeave), e.addEventListener("mouseenter", t.handleContainerMouseEnter), t[i.Carat].addEventListener("mousedown", t.handleCaratMouseDown), t[i.Header].addEventListener("mousedown", t.handleHeaderMouseDown), window.addEventListener("mouseup", t.handleCardMouseUp), window.addEventListener("mousemove", t.handleCardMouseMove)
                    }, t.removeEventListeners = function() {
                        var e = t[i.Container];
                        e.removeEventListener("mousemove", t.handleContainerMouseMove), e.removeEventListener("mouseleave", t.handleContainerMouseLeave), e.removeEventListener("mouseenter", t.handleContainerMouseEnter), t[i.Carat].removeEventListener("mousedown", t.handleCaratMouseDown), t[i.Header].removeEventListener("mousedown", t.handleHeaderMouseDown), window.removeEventListener("mouseup", t.handleCardMouseUp), window.removeEventListener("mousemove", t.handleCardMouseMove)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.card.isCollapsed !== this.props.card.isCollapsed && this.props.onCardsUpdate()
                }, t.prototype.componentDidMount = function() {
                    this.addEventListeners(), this.props.updateCard(this.props.card.name, {
                        cardRef: this[i.Card]
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.removeEventListeners()
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.cogWheel,
                        n = e.card,
                        a = n.isCollapsed,
                        s = n.isGrabbed,
                        d = n.placeholderPosition,
                        c = e.grabbedCard;
                    return p.createElement(h.Xa, {
                        "data-test-selector": o.Container,
                        display: h.X.Flex,
                        flexDirection: h.Aa.Column,
                        refDelegate: this.registerRef(i.Container)
                    }, p.createElement(g, {
                        cloneStyleRef: c && c.cardRef,
                        show: d === f.c.Top
                    }), p.createElement(h.Cb, {
                        background: h.r.Base,
                        border: !0,
                        breakpointLarge: {
                            margin: {
                                bottom: 2
                            }
                        },
                        className: "drag-and-drop-card-container" + (s ? " drag-and-drop-card-container__grabbed" : ""),
                        "data-test-selector": o.Card,
                        display: h.X.Flex,
                        elevation: s ? 4 : 1,
                        flexDirection: h.Aa.Column,
                        margin: {
                            bottom: 1
                        },
                        refDelegate: this.registerRef(i.Card)
                    }, p.createElement(h.Cb, {
                        alignContent: h.e.Center,
                        alignItems: h.f.Center,
                        borderBottom: !0,
                        className: "drag-and-drop-card-header",
                        display: h.X.Flex,
                        justifyContent: h.Wa.Between,
                        padding: {
                            x: 1
                        },
                        position: h.hb.Relative,
                        refDelegate: this.registerRef(i.Header)
                    }, p.createElement(h.Xa, {
                        display: h.X.Flex,
                        justifyContent: h.Wa.Center
                    }, p.createElement(h.Xa, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(h.Xa, {
                        className: "drag-and-drop-card-carat" + (a ? "__collapsed" : ""),
                        refDelegate: this.registerRef(i.Carat)
                    }, p.createElement(h.A, {
                        ariaLabel: Object(m.d)("Collapse/Expand", "DragAndDropCard"),
                        icon: h.rb.GlyphArrDown,
                        onClick: this.handleCaratClick
                    }))), p.createElement(y, {
                        title: this.props.title
                    })), p.createElement(h.Xa, {
                        display: h.X.Flex,
                        alignItems: h.f.Center
                    }, t && p.createElement(C, {
                        "data-a-target": this.props.cogWheelTarget
                    }, t), p.createElement(h.Xa, {
                        margin: {
                            top: .5,
                            left: 1
                        }
                    }, p.createElement(h.qb, {
                        asset: h.rb.DragHandle
                    })))), p.createElement(h.Xa, {
                        className: "drag-and-drop-card-content" + (a ? " " + r.ContentCollapsed : ""),
                        "data-test-selector": o.Content,
                        position: h.hb.Relative
                    }, a && this.props.unmountOnCollapse ? null : this.props.children)), p.createElement(g, {
                        cloneStyleRef: c && c.cardRef,
                        show: d === f.c.Bottom
                    }))
                }, Object.defineProperty(t.prototype, "isHoveringOtherCard", {
                    get: function() {
                        var e = this.props.targetCard;
                        return !(!e || e.cardRef !== this[i.Card] || !this.props.grabbedCard)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isHoveringSelf", {
                    get: function() {
                        var e = this.props.grabbedCard;
                        return !(!e || e.cardRef !== this[i.Card])
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(p.Component);
            i.Carat, i.Card, i.Container, i.Header;
            var w, E = S,
                _ = (w = Object(d.a)("DragAndDropCardContext", {
                    card: new f.a("unknown")
                })).InnerProvider,
                L = w.withContext;
            var k = Object(s.compose)(l(function(e) {
                    return e
                }), L(function(e) {
                    return e
                }))(E),
                R = n("i8i4"),
                O = n("8/mp"),
                D = n("b+ID"),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setRootContainerRef = function(e) {
                            t.rootContainerRef = e
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.rootContainerRef.appendChild(this.props.element)
                    }, t.prototype.render = function() {
                        return p.createElement(h.Xa, {
                            refDelegate: this.setRootContainerRef
                        })
                    }, t
                }(p.Component),
                x = (n("6Ll5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleContainerMouseOver = function() {
                            var e = t.props.grabbedCard;
                            e && e.cardRef && !t.props.targetCard && t.props.updateCard(t.placeholderName, {
                                column: t.props.column,
                                placeholderPosition: f.c.Bottom,
                                row: t.props.row
                            }, f.b.SetTarget)
                        }, t.handleContainerMouseLeave = function() {
                            t.props.grabbedCard && t.props.targetCard && t.props.updateCard(t.placeholderName, {}, f.b.RemoveTarget)
                        }, t.setContainerRef = function(e) {
                            t.containerRef = e
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.containerRef.addEventListener("mouseover", this.handleContainerMouseOver), this.containerRef.addEventListener("mouseleave", this.handleContainerMouseLeave)
                    }, t.prototype.componentWillUnmount = function() {
                        this.containerRef.removeEventListener("mouseove", this.handleContainerMouseOver), this.containerRef.removeEventListener("mouseleave", this.handleContainerMouseLeave)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.grabbedCard,
                            n = e.targetCard;
                        return p.createElement(h.Cb, {
                            alignContent: h.e.Stretch,
                            alignItems: h.f.Stretch,
                            breakpointLarge: {
                                margin: {
                                    right: 2
                                },
                                padding: {
                                    y: 2
                                }
                            },
                            className: "drag-and-drop-layout-column",
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: h.Wa.Start,
                            margin: {
                                right: 1
                            },
                            padding: {
                                y: 1
                            },
                            refDelegate: this.setContainerRef
                        }, this.props.children, p.createElement(g, {
                            cloneStyleRef: t && t.cardRef,
                            show: !(!n || n.name !== this.placeholderName)
                        }))
                    }, Object.defineProperty(t.prototype, "placeholderName", {
                        get: function() {
                            return this.props.column + "-" + this.props.row + "-placeholder"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(p.Component)),
                P = (n("uZYF"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.handleCardsUpdate = function() {
                            var e = n.props.onCardsUpdate;
                            e && e(n.state.roots.map(function(e) {
                                return e.map(function(e) {
                                    return n.state.cards[e.name]
                                })
                            }))
                        }, n.dropCard = function() {
                            n.setState(function(e) {
                                var t, n, a = e.common,
                                    r = a.grabbedCard,
                                    o = a.targetCard,
                                    i = e.cards,
                                    s = e.roots;
                                if (r && o && r.name !== o.name && (s.forEach(function(e, a) {
                                        e.forEach(function(e, i) {
                                            e.name === r.name ? t = {
                                                column: a,
                                                el: e.el,
                                                name: e.name,
                                                row: i
                                            } : e.name === o.name && (n = {
                                                column: a,
                                                el: e.el,
                                                name: e.name,
                                                row: i
                                            })
                                        })
                                    }), n || (n = {
                                        column: o.column || 0,
                                        el: o.el,
                                        name: o.name,
                                        row: o.row || 0
                                    }), t && n)) {
                                    var d = s[t.column],
                                        c = s[n.column],
                                        l = o.placeholderPosition === f.c.Bottom;
                                    c.splice(n.row + (l ? 1 : 0), 0, t), t.column === n.column ? c.splice(t.row + (t.row > n.row ? 1 : 0), 1) : d.splice(t.row, 1)
                                }
                                return {
                                    cards: i,
                                    common: u.__assign({}, e.common, {
                                        grabbedCard: void 0,
                                        targetCard: void 0
                                    }),
                                    roots: s
                                }
                            }, n.handleCardsUpdate)
                        }, n.updateCard = function(e, t, a) {
                            void 0 === t && (t = {}), n.setState(function(n) {
                                var r = u.__assign({}, n),
                                    o = r.cards,
                                    i = !!o[e],
                                    s = u.__assign({}, o[e] || new f.a(e), t);
                                switch (a) {
                                    case f.b.RemoveTarget:
                                        r.common = u.__assign({}, n.common, {
                                            targetCard: void 0
                                        });
                                        break;
                                    case f.b.SetGrabbed:
                                        s.isGrabbed = !0, r.common = u.__assign({}, r.common, {
                                            grabbedCard: s
                                        });
                                        break;
                                    case f.b.SetTarget:
                                        r.common = u.__assign({}, r.common, {
                                            targetCard: s
                                        })
                                }
                                return i && (r.cards[e] = s), r
                            })
                        };
                        var a = {},
                            r = t.initialCardsState.map(function(e) {
                                return e.map(function(e) {
                                    return e.el = document.createElement("div"), a[e.name] = e, {
                                        el: e.el,
                                        name: e.name
                                    }
                                })
                            });
                        return n.state = {
                            cards: a,
                            common: {
                                dropCard: n.dropCard,
                                onCardsUpdate: n.handleCardsUpdate,
                                updateCard: n.updateCard
                            },
                            roots: r
                        }, n
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.handleCardsUpdate()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.isExpandedView;
                        return p.createElement(p.Fragment, null, p.createElement(O.b, {
                            className: "drag-and-drop-layout-scrollable-area" + (t ? "__expanded-view" : "")
                        }, p.createElement(h.Xa, {
                            alignContent: h.e.Stretch,
                            alignItems: h.f.Stretch,
                            className: "drag-and-drop-layout",
                            display: h.X.Flex,
                            flexDirection: h.Aa.Row,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: h.Wa.Between
                        }, this.state.roots.map(function(t, n) {
                            return p.createElement(x, {
                                column: n,
                                key: n,
                                grabbedCard: e.state.common.grabbedCard,
                                targetCard: e.state.common.targetCard,
                                row: t.length - 1,
                                updateCard: e.updateCard
                            }, t.map(function(e) {
                                var t = e.el,
                                    n = e.name;
                                return p.createElement(I, {
                                    element: t,
                                    key: n
                                })
                            }))
                        }))), p.createElement(c, {
                            value: this.state.common
                        }, Object.keys(this.state.cards).map(function(t) {
                            var n = e.state.cards[t];
                            return R.createPortal(p.createElement(_, {
                                value: {
                                    card: n
                                }
                            }, e.props.cards[n.name]), n.el)
                        })))
                    }, t
                }(p.Component));
            var T = Object(D.b)(function(e) {
                return {
                    isExpandedView: e.isExpandedView
                }
            })(P);
            n.d(t, "a", function() {
                return k
            }), n.d(t, "b", function() {
                return T
            })
        },
        uZYF: function(e, t, n) {},
        wcfy: function(e, t, n) {
            e.exports = n.p + "assets/streamlabs_obs_small-6949e63f4c841043cd4f.png"
        },
        xTFG: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return d
            });
            var a, r = n("1rIY"),
                o = (a = Object(r.a)("CardsTrackingContext", {
                    registerReportCardVisibility: function() {
                        return function() {
                            return null
                        }
                    }
                })).InnerProvider,
                i = a.withContext,
                s = function(e, t) {
                    return function(n) {
                        return {
                            reportCardVisibility: (0, n.registerReportCardVisibility)(e, t)
                        }
                    }
                };

            function d(e, t) {
                return function(n) {
                    return i(s(e, t))(n)
                }
            }
        },
        zJLP: function(e, t, n) {
            e.exports = n.p + "assets/obs_logors_1x-ea09acc52659eb5399b6.png"
        }
    }
]);