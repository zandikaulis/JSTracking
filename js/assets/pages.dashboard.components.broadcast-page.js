(window.webpackJsonp = window.webpackJsonp || []).push([
    [172], {
        "4mBO": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                o = n("q1tI"),
                i = n("1rIY"),
                s = (r = Object(i.a)("LiveDashboardDeferredLoading", {
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
                d = r.withContext,
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
                            return void 0 !== t.loadFirst[e] || t.canRenderAnyComponent ? o.createElement(n, a.__assign({}, t)) : null
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
                                    loadFirst: a.__assign({}, t.loadFirst, (n = {}, n[e] = !0, n))
                                }
                            })
                        }) : function() {
                            return null
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.setState(function(t) {
                        return {
                            loadFirst: a.__assign({}, t.loadFirst, e.autoReportLoadedNames)
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
            var r = n("oJmH"),
                a = n("V+GM"),
                o = n("NvVO"),
                i = n("2xye"),
                s = n("GnwI"),
                d = n("NQSV"),
                c = Object(r.compose)(Object(s.b)("DashboardBroadcastPage", {
                    autoReportInteractive: !0,
                    destination: o.a.DashboardBroadcastPage
                }), Object(a.a)({
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
                return r
            }), n.d(t, "d", function() {
                return a
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
                return w
            });
            var r, a, o, i, s, d, c = n("mrSG"),
                l = n("/7QA"),
                u = n("2xye"),
                p = n("lDS7");
            ! function(e) {
                e.Added = "added", e.Removed = "removed"
            }(r || (r = {})),
            function(e) {
                e.SliderMove = "slidermove", e.StreamDelayClick = "streamdelayclick"
            }(a || (a = {})),
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
                    w(d.StreamInformation, {
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
                v = function(e, t, n, r) {
                    w(d.StreamDelay, {
                        type: e,
                        slider_start_position: t,
                        slider_position: n,
                        update_successful: r
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
                w = function(e, t) {
                    l.p.tracking.track(u.SpadeEventType.LiveDashboardInteraction, c.__assign({
                        action: e
                    }, t || {}))
                }
        },
        JBqe: function(e, t, n) {
            "use strict";
            var r, a, o = n("mrSG"),
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
                f = (r = Object(l.a)("IsStreamLiveContext", {
                    isLive: void 0,
                    onStreamStatusChange: function() {
                        return null
                    }
                })).InnerProvider,
                h = r.withContext,
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
                        return Object(c.J)(e.channelID)
                    },
                    mapMessageTypesToProps: (a = {}, a[d.PubsubMessageType.ChannelStreamUp] = "streamUp", a[d.PubsubMessageType.ChannelStreamDown] = "streamDown", a)
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
            var r, a = n("mrSG"),
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
                w = n("LWua"),
                S = n.n(w),
                E = n("EkNY"),
                _ = n("Ue10");
            ! function(e) {
                e.DownloadButton = "broadast-items-card__download-button"
            }(r || (r = {}));
            var L = function(e) {
                    var t = e.link,
                        n = e.title;
                    return o.createElement(_.Fb, {
                        background: _.r.Base,
                        elevation: 1,
                        padding: 2,
                        display: _.X.Flex,
                        flexDirection: _.Aa.Column,
                        fullHeight: !0
                    }, o.createElement(_.Ya, {
                        display: _.X.Flex,
                        justifyContent: _.Xa.Center,
                        margin: {
                            top: 1
                        }
                    }, o.createElement(_.S, {
                        alt: n,
                        src: e.imgURL
                    })), o.createElement(_.Ya, {
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
                        type: _.Wb.P,
                        color: _.O.Alt2
                    }, e.longDescription), o.createElement(_.Ya, {
                        display: _.X.Flex,
                        flexDirection: _.Aa.Column,
                        fullWidth: !0,
                        flexGrow: 1,
                        justifyContent: _.Xa.End,
                        margin: {
                            top: 2
                        }
                    }, o.createElement(_.z, {
                        "data-test-selector": r.DownloadButton,
                        fullWidth: !0,
                        type: _.F.Hollow,
                        linkTo: t,
                        onClick: E.e.bind(null, n)
                    }, Object(i.d)("Download", "BroadcastItemCard")), o.createElement(_.Ya, {
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
                O = (n("L/BW"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        i.p.setPageTitle(Object(i.d)("Broadcast", "BroadcastPage"))
                    }, t.prototype.render = function() {
                        return o.createElement(_.Ya, {
                            display: _.X.Flex,
                            flexDirection: _.Aa.Column,
                            flexWrap: _.Ba.NoWrap,
                            fullHeight: !0
                        }, o.createElement(_.Ya, {
                            className: "broadcast-container",
                            position: _.kb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            overflow: _.db.Hidden
                        }, o.createElement(k.a, null, o.createElement(_.W, {
                            bold: !0,
                            type: _.Wb.H4
                        }, Object(i.d)("Broadcast While You Play", "BroadcastRootPage")), o.createElement(_.Ya, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(_.W, {
                            color: _.O.Alt2,
                            type: _.Wb.P
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
                        }, "BroadcastRootPage")), o.createElement(_.Ya, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(_.W, {
                            bold: !0,
                            type: _.Wb.H4
                        }, Object(i.d)("Broadcasting Applications", "BroadcastRootPage"))), o.createElement(_.cc, {
                            childWidth: _.dc.Large,
                            gutterSize: _.ec.Small,
                            noGrow: !0,
                            placeholderItems: 8
                        }, o.createElement(_.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: f.a,
                            title: "Player.me",
                            link: "https://player.me/",
                            longDescription: Object(i.d)("Free, easy-to-use, all-in-one application for streaming and recording. Includes thousands of professionally designed overlays with alerts, a stream dashboard for tracking events, live stream chat and scene switching.", "BroadcastRootPage"),
                            setupGuideLink: "https://helpdesk.player.me/en/article/streaming-setup-guide-svsjha"
                        })), o.createElement(_.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: y.a,
                            title: "Streamlabs OBS",
                            link: "https://streamlabs.com/streamlabs-obs/",
                            longDescription: Object(i.d)("Streamlabs OBS is free, open source, and easy way to get started streaming. The app is built on top of OBS with a whole lot of exciting features: facemasks, built-in widgets & chat, game specific encoders and thousands of free overlays and themes.", "BroadcastRootPage"),
                            setupGuideLink: "https://support.streamlabs.com/hc/en-us/articles/115004797393-Streamlabs-OBS-All-In-One-Window-Walk-Through"
                        })), o.createElement(_.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: S.a,
                            title: "XSplit Broadcaster",
                            link: "http://www.xsplit.com/",
                            longDescription: Object(i.d)("Simple yet powerful live streaming and recording software. XSplit Broadcaster is a revolutionary audio/video mixing application that allows for highly customizable professional quality live broadcasts by using simple and intuitive interface anyone can master.", "BroadcastRootPage"),
                            setupGuideLink: "https://www.xsplit.com/support"
                        })), o.createElement(_.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: l.a,
                            title: "Open Broadcast Software",
                            link: "http://obsproject.com/",
                            longDescription: Object(i.d)("Free and open source software for recording and live streaming. Source code is available to everyone to contribute and improve.", "BroadcastRootPage"),
                            setupGuideLink: "https://obsproject.com/help"
                        }))), o.createElement(_.Ya, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(_.W, {
                            bold: !0,
                            type: _.Wb.H4
                        }, Object(i.d)("Broadcasting Tools", "BroadcastRootPage"))), o.createElement(_.cc, {
                            childWidth: _.dc.Large,
                            gutterSize: _.ec.Small,
                            noGrow: !0,
                            placeholderItems: 3
                        }, o.createElement(_.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: v.a,
                            title: "Streamlabs",
                            link: "https://streamlabs.com/",
                            longDescription: Object(i.d)("Level up your stream with alerts, donations, and 20+ interactive widgets.", "BroadcastRootPage"),
                            setupGuideLink: "https://support.streamlabs.com/hc/en-us/articles/217741147-Setting-up-your-Streamlabs-widgets-"
                        })), o.createElement(_.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: g.a,
                            title: "StreamElements",
                            link: "https://streamelements.com/",
                            longDescription: Object(i.d)("A full suite for all your streaming needs: Bot, Overlays, Loyalty points, Giveaways and much more for new and veteran streamers alike.", "BroadcastRootPage"),
                            setupGuideLink: "https://support.streamelements.com/hc/en-us/articles/115003424812-Quick-Start-Guide"
                        })), o.createElement(_.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(L, {
                            imgURL: d.a,
                            title: "Muxy",
                            link: "https://www.muxy.io/",
                            longDescription: Object(i.d)("Muxy provides alerts, tips, a real-time Live Feed, Cheer visualizations, and stream analytics.", "BroadcastRootPage"),
                            setupGuideLink: "https://muxy.io/tutorial/"
                        })), o.createElement(_.Ya, {
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
                return O
            })
        },
        NkOX: function(e, t, n) {
            "use strict";
            var r, a;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.ActivityFeed = "activity-feed", e.AdsWidget = "ads-widget", e.BountyBoardWidget = "bounty-board-widget", e.ExtensionLiveConfigure = "extension-live-configure", e.HostWidget = "host-widget", e.LiveChat = "live-chat", e.SquadStream = "squad-stream", e.Stats = "stats", e.StreamDelay = "stream-delay", e.StreamHealth = "stream-health", e.StreamInformation = "stream-information", e.StreamMarker = "stream-marker", e.VideoPreview = "video-preview", e.VideoProducerWidget = "video-producer-widget"
                }(r || (r = {})),
                function(e) {
                    e.ActivityFeedWidget = "activity_feed_widget", e.AdsWidget = "ads_widget", e.BountyBoardWidget = "bounty_board_widget", e.ExtensionLiveConfigureWidget = "extension_config_widget", e.HostWidget = "host_widget", e.LiveChatWidget = "chat_widget", e.SquadStreamWidget = "squad_stream_widget", e.StatsWidget = "stats_widget", e.StreamDelayWidget = "stream_delay_widget", e.StreamHealthWidget = "stream_health_widget", e.StreamInformationWidget = "stream_information_widget", e.StreamMarkerWidget = "stream_marker_widget", e.VideoPreviewWidget = "video_preview_widget", e.VideoProducerWidget = "video_producer_widget"
                }(a || (a = {}))
        },
        Nmvj: function(e, t, n) {
            e.exports = n.p + "assets/streamelements_1x-5a78a214c1701af3da1d.png"
        },
        O4PT: function(e, t, n) {},
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
            var r = n("mrSG"),
                a = n("q1tI"),
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
                                case w.CURRENT_VIEWERS:
                                    e = "viewers_value";
                                    break;
                                case w.STREAM_UP_TIME:
                                    e = "uptime_value";
                                    break;
                                case w.NUMBER_OF_CLIPS:
                                    e = "clips_value";
                                    break;
                                case w.TOTAL_VIEWS:
                                    e = "views_value";
                                    break;
                                case w.FOLLOWERS:
                                    e = "followers_value";
                                    break;
                                case w.SUBSCRIPTIONS:
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
                            var e = i.m.get("streamStatsConfiguration", S);
                            e[t.props.statType] = !e[t.props.statType], i.m.set("streamStatsConfiguration", e)
                        }, t.renderStat = function() {
                            var e = Object(i.d)("Offline", "LiveDashboard");
                            return t.state.hidden ? a.createElement(u.Zb, {
                                label: t.props.statDescription || e,
                                direction: u.bc.Right
                            }, Object(i.d)("Hover to view", "LiveDashboard")) : a.createElement(u.Zb, {
                                label: Object(i.d)("Click to hide", "LiveDashboard"),
                                direction: u.bc.Right
                            }, t.props.statDescription || e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.color;
                        return a.createElement(u.Fb, {
                            margin: {
                                left: 1
                            },
                            fontSize: u.Ca.Size5,
                            color: e
                        }, a.createElement("span", {
                            onClick: this.handleClick,
                            onMouseOver: this.handleHover
                        }, this.renderStat()))
                    }, t
                }(a.Component),
                m = n("xTFG"),
                f = n("NkOX"),
                h = n("qYDK"),
                g = n("4mBO"),
                b = n("JBqe"),
                v = n("6XEL"),
                C = n("9kwc");
            n.d(t, "a", function() {
                return S
            }), n.d(t, "b", function() {
                return w
            }), n.d(t, "c", function() {
                return _
            });
            var y, w, S = {
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
            }(w || (w = {}));
            var E = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.getStreamInfo = function() {
                            return n.props.data && n.props.data.user && n.props.data.user.stream
                        }, n.renderViewersCount = function() {
                            var e = n.getStreamInfo(),
                                t = e && null !== e.viewersCount ? Object(i.f)(e.viewersCount) : 0,
                                r = n.state.statsConfig && n.state.statsConfig[w.CURRENT_VIEWERS],
                                o = n.props.isLive;
                            return a.createElement(p, {
                                "data-test-selector": y.CURRENT_VIEWERS_COUNT,
                                statDescription: o ? t + " " + Object(i.d)("Viewers", "LiveDashboard") : null,
                                statType: w.CURRENT_VIEWERS,
                                showStat: r,
                                color: o ? u.O.Live : void 0
                            })
                        }, n.renderStreamTime = function() {
                            var e = n.getStreamInfo(),
                                t = e && e.createdAt || (new Date).toISOString(),
                                r = n.props.isLive;
                            return a.createElement(p, {
                                statDescription: r ? Object(d.b)((Date.now() - new Date(t).getTime()) / 1e3, d.a.ClockHM) : null,
                                statType: w.STREAM_UP_TIME,
                                showStat: !n.state.statsConfig || n.state.statsConfig[w.STREAM_UP_TIME],
                                color: r ? u.O.Base : void 0
                            })
                        }, n.renderNumberOfClips = function() {
                            var e = n.state.broadcastClipsCount,
                                t = n.props.isLive;
                            return a.createElement(p, {
                                "data-test-selector": y.NUMBER_OF_CLIPS,
                                statDescription: t ? Object(i.f)(e) + " " + (1 === e ? Object(i.d)("Clip", "LiveDashboard") : Object(i.d)("Clips", "LiveDashboard")) : null,
                                statType: w.NUMBER_OF_CLIPS,
                                showStat: n.state.statsConfig && n.state.statsConfig[w.NUMBER_OF_CLIPS],
                                color: t ? u.O.Base : void 0
                            })
                        }, n.renderSubscriptionStat = function() {
                            var e = Object(i.d)("Subscribers", "LiveDashboard"),
                                t = Object(i.d)("Sub Points", "LiveDashboard"),
                                r = n.props.data && n.props.data.user && null !== n.props.data.user.subscriberScore ? n.props.data.user.subscriberScore : null,
                                o = r && r.countBreakdown;
                            if (!r || !o) return null;
                            var s = Object(i.f)(o.reduce(function(e, t) {
                                    return e + t.count
                                }, 0)),
                                d = Object(i.f)(r.current);
                            return r.next ? a.createElement(u.Fb, {
                                color: u.O.Alt2,
                                display: u.X.Flex,
                                alignItems: u.f.Center,
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(u.Zb, {
                                label: Object(i.d)("Subscribers shows number of active subs.\n Sub points unlock additional emote slots.", "LiveDashboard"),
                                direction: u.bc.Right
                            }, a.createElement(u.tb, {
                                asset: u.ub.Star
                            })), a.createElement(p, {
                                statDescription: s + " " + e + " (" + d + " / " + Object(i.f)(r.next) + " " + t + ")",
                                statType: w.SUBSCRIPTIONS,
                                showStat: n.state.statsConfig && n.state.statsConfig[w.SUBSCRIPTIONS],
                                color: u.O.Base
                            })) : a.createElement(u.Fb, {
                                color: u.O.Alt2,
                                display: u.X.Flex,
                                alignItems: u.f.Center,
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(u.Zb, {
                                label: Object(i.d)("Congrats on reaching the max number of emote slots", "LiveDashboard"),
                                direction: u.bc.Right
                            }, a.createElement(u.tb, {
                                asset: u.ub.Star
                            })), a.createElement(p, {
                                statDescription: s + " " + e + " (" + d + " " + t + ")",
                                statType: w.SUBSCRIPTIONS,
                                showStat: n.state.statsConfig && n.state.statsConfig[w.SUBSCRIPTIONS],
                                color: u.O.Base
                            }))
                        }, n.setFetchBroadcastClipsCountInterval = function() {
                            n.intervalID && clearInterval(n.intervalID), n.fetchBroadcastClipsCount(), n.intervalID = setInterval(n.fetchBroadcastClipsCount, 3e4)
                        }, n.fetchBroadcastClipsCount = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, a, o;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = this.getStreamInfo(), (t = e && e.id) ? [4, Object(v.c)({
                                                path: "/v4/broadcasts/" + t + "/clips/count"
                                            })] : (this.props.latencyTracking.reportInteractive(), this.props.reportLoaded(), [2]);
                                        case 1:
                                            return (n = r.sent()).body && !n.error ? (a = n.body.count, this.setState({
                                                broadcastClipsCount: a
                                            })) : (o = "Unable to fetch broadcast clips count", i.k.error(new Error(o), o)), this.props.latencyTracking.reportInteractive(), this.props.reportLoaded(), [2]
                                    }
                                })
                            })
                        };
                        var o = i.m.get("streamStatsConfiguration", null);
                        return n.state = {
                            statsConfig: o || S,
                            broadcastClipsCount: 0
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
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
                            r = e && t && null !== t.totalCount ? Object(i.f)(t.totalCount) : 0;
                        return a.createElement(h.a, {
                            title: Object(i.d)("Stats", "LiveDashboard")
                        }, a.createElement(u.Ya, {
                            padding: 2
                        }, a.createElement(u.Fb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Zb, {
                            label: Object(i.d)("The number of people currently watching your channel", "LiveDashboard"),
                            direction: u.bc.Right
                        }, a.createElement(u.tb, {
                            asset: u.ub.GlyphLive
                        })), this.renderViewersCount()), a.createElement(u.Fb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Zb, {
                            label: Object(i.d)("How long you have been broadcasting for this session", "LiveDashboard"),
                            direction: u.bc.Right
                        }, a.createElement(u.tb, {
                            asset: u.ub.Timeout
                        })), this.renderStreamTime()), a.createElement(u.Fb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Zb, {
                            label: Object(i.d)("The number of clips that have been created", "LiveDashboard"),
                            direction: u.bc.Right
                        }, a.createElement(u.Fb, {
                            className: "stats-widget-clips-icon",
                            display: u.X.InlineFlex
                        }, a.createElement(u.tb, {
                            asset: u.ub.Clip,
                            height: 20,
                            width: 20
                        }))), this.renderNumberOfClips()), a.createElement(u.Fb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Zb, {
                            label: Object(i.d)("The number of people who have viewed the channel", "LiveDashboard"),
                            direction: u.bc.Right
                        }, a.createElement(u.tb, {
                            asset: u.ub.GlyphViews
                        })), a.createElement(p, {
                            statDescription: n + " " + Object(i.d)("Views", "LiveDashboard"),
                            statType: w.TOTAL_VIEWS,
                            showStat: !this.state.statsConfig || this.state.statsConfig[w.TOTAL_VIEWS],
                            color: u.O.Base
                        })), a.createElement(u.Fb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Zb, {
                            label: Object(i.d)("The number of people currently following your channel", "LiveDashboard"),
                            direction: u.bc.Right
                        }, a.createElement(u.tb, {
                            asset: u.ub.Heart
                        })), a.createElement(p, {
                            statDescription: r + " " + Object(i.d)("Followers", "LiveDashboard"),
                            statType: w.FOLLOWERS,
                            showStat: !this.state.statsConfig || this.state.statsConfig[w.FOLLOWERS],
                            color: u.O.Base
                        })), this.renderSubscriptionStat()))
                    }, t
                }(a.Component),
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
        logO: function(e, t, n) {},
        odMz: function(e, t, n) {
            "use strict";
            var r, a;
            ! function(e) {
                e[e.RemoveTarget = 0] = "RemoveTarget", e[e.SetGrabbed = 1] = "SetGrabbed", e[e.SetTarget = 2] = "SetTarget"
            }(r || (r = {})),
            function(e) {
                e.Bottom = "bottom", e.Top = "top"
            }(a || (a = {}));
            var o = function() {
                return function(e, t) {
                    void 0 === t && (t = !1), this.name = e, this.isCollapsed = t, this.isGrabbed = !1, this.isPoppedOut = !1
                }
            }();
            n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            })
        },
        qYDK: function(e, t, n) {
            "use strict";
            var r, a, o = n("mrSG"),
                i = n("q1tI"),
                s = n("fvjX"),
                d = n("/7QA"),
                c = n("1rIY"),
                l = n("odMz"),
                u = (r = Object(c.a)("DragAndDropCardContext", {
                    card: new l.a("unknown")
                })).InnerProvider,
                p = r.withContext;

            function m(e) {
                return e
            }

            function f(e) {
                return p(e || m)
            }
            var h = (a = Object(c.a)("DragAndDropLayoutContext", {
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
                g = a.withContext;

            function b(e) {
                return e
            }

            function v(e) {
                return g(e || b)
            }
            var C = n("Ue10"),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleButtonIconClick = function() {
                            t.props.updateCard(t.props.name, {
                                isPoppedOut: !t.props.isPoppedOut
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(C.A, {
                            ariaLabel: Object(d.d)("Popout", "PopoutButtonComponent"),
                            icon: C.ub.Popout,
                            onClick: this.handleButtonIconClick
                        })
                    }, t
                }(i.Component);
            var w, S, E = Object(s.compose)(v(function(e) {
                    return {
                        updateCard: e.updateCard
                    }
                }), f(function(e) {
                    return {
                        name: e.card.name,
                        isPoppedOut: e.card.isPoppedOut
                    }
                }))(y),
                _ = (n("5g1g"), n("wUQP")),
                L = function() {
                    return _.a.On === d.b.get("dashboard_live_popout", _.a.Off)
                },
                k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(C.Fb, {
                            color: C.O.Base,
                            fontSize: C.Ca.Size5,
                            margin: {
                                y: "auto"
                            }
                        }, this.props.title)
                    }, t
                }(i.Component);
            n("logO");
            ! function(e) {
                e.Content = "drag-and-drop-card-content", e.PopoutButton = "drag-and-drop-popout-button"
            }(w || (w = {})),
            function(e) {
                e.Carat = "carat", e.Menu = "drag-and-drop-card-menu"
            }(S || (S = {}));
            var O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isDashboardLivePopoutEnabled = L(), t.handleCaratClick = function() {
                        t.props.updateCard(t.props.name, {
                            isCollapsed: !t.props.isCollapsed
                        })
                    }, t.addEventListeners = function() {
                        t[S.Carat].addEventListener("mousedown", t.stopMouseDownPropagation), t[S.Menu].addEventListener("mousedown", t.stopMouseDownPropagation)
                    }, t.removeEventListeners = function() {
                        t[S.Carat].removeEventListener("mousedown", t.stopMouseDownPropagation), t[S.Menu].removeEventListener("mousedown", t.stopMouseDownPropagation)
                    }, t.registerRef = function(e, n) {
                        t[e] = n
                    }, t.stopMouseDownPropagation = function(e) {
                        e.stopPropagation()
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.addEventListeners()
                }, t.prototype.componentWillUnmount = function() {
                    this.removeEventListeners()
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.isCollapsed,
                        n = e.isGrabbed;
                    return i.createElement(C.Fb, {
                        background: C.r.Base,
                        border: !0,
                        breakpointLarge: {
                            margin: {
                                bottom: 2
                            }
                        },
                        className: "drag-and-drop-card-container" + (n ? " drag-and-drop-card-container__grabbed" : ""),
                        display: C.X.Flex,
                        elevation: n ? 4 : 1,
                        flexDirection: C.Aa.Column,
                        margin: {
                            bottom: 1
                        },
                        refDelegate: this.props.refDelegateCard
                    }, i.createElement(C.Fb, {
                        alignContent: C.e.Center,
                        alignItems: C.f.Center,
                        borderBottom: !0,
                        className: "drag-and-drop-card-header",
                        display: C.X.Flex,
                        justifyContent: C.Xa.Between,
                        padding: {
                            x: 1
                        },
                        position: C.kb.Relative,
                        refDelegate: this.props.refDelegateHeader
                    }, i.createElement(C.Ya, {
                        display: C.X.Flex,
                        justifyContent: C.Xa.Center
                    }, i.createElement(C.Ya, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement(C.Ya, {
                        className: "drag-and-drop-card-carat" + (t ? "__collapsed" : ""),
                        refDelegate: this.registerRef.bind(this, S.Carat)
                    }, i.createElement(C.A, {
                        ariaLabel: Object(d.d)("Collapse/Expand", "DragAndDropCard"),
                        icon: C.ub.GlyphArrDown,
                        onClick: this.handleCaratClick
                    }))), i.createElement(k, {
                        title: this.props.title
                    })), i.createElement(C.Ya, {
                        display: C.X.Flex,
                        alignItems: C.f.Center
                    }, i.createElement(C.Ya, {
                        display: C.X.Flex,
                        alignItems: C.f.Center,
                        refDelegate: this.registerRef.bind(this, S.Menu)
                    }, this.isDashboardLivePopoutEnabled && i.createElement(C.Ya, {
                        "data-test-selector": w.PopoutButton,
                        margin: {
                            left: 1
                        }
                    }, i.createElement(E, null)), this.props.menu), i.createElement(C.Ya, {
                        margin: {
                            left: 1
                        }
                    }, i.createElement(C.A, {
                        ariaLabel: Object(d.d)("Drag", "DragAndDropCard"),
                        icon: C.ub.DragHandle
                    })))), !this.props.isPoppedOut && i.createElement(C.Ya, {
                        className: "drag-and-drop-card-content" + (t ? " drag-and-drop-card-content__collapsed" : ""),
                        "data-test-selector": w.Content,
                        position: C.kb.Relative
                    }, this.props.children))
                }, t
            }(i.Component);
            S.Carat, S.Menu;
            var D, R = Object(s.compose)(f(function(e) {
                    var t = e.card;
                    return {
                        name: t.name,
                        isCollapsed: t.isCollapsed,
                        isGrabbed: t.isGrabbed,
                        isPoppedOut: t.isPoppedOut
                    }
                }), v(function(e) {
                    return {
                        updateCard: e.updateCard
                    }
                }))(O),
                I = n("i8i4"),
                P = (n("O4PT"), 300),
                x = 360,
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            window: void 0
                        }, t.handleWindowError = function(e) {
                            e.preventDefault(), e.stopPropagation()
                        }, t.tryToOpenWindow = function() {
                            var e = "twitch-" + t.props.card.name,
                                n = t.props.height || P,
                                r = window.open("", e, "left=" + (window.screenX + window.screen.width / 2) + ",top=" + window.screen.height / 2 + ",titlebar=no,toolbar=no,menubar=no,resizable=yes,scrollbars=yes,location=no,personalbar=no,chrome=yes,height=" + n + ",width=" + x);
                            r && t.setInitialWindowState(r, n)
                        }, t.tryToCloseWindow = function() {
                            if (t.props.card.isPoppedOut) return t.props.updateCard(t.props.card.name, {
                                isPoppedOut: !1
                            }), null
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.tryToOpenWindow()
                    }, t.prototype.componentWillUnmount = function() {
                        this.state.window && this.state.window.close(), window.removeEventListener("beforeunload", this.tryToCloseWindow)
                    }, t.prototype.render = function() {
                        return this.state.window ? I.createPortal(i.createElement(C.Ya, {
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: C.Xa.Start
                        }, i.createElement(C.Fb, {
                            alignItems: C.f.Center,
                            borderBottom: !0,
                            display: C.X.Flex,
                            flexShrink: 0,
                            fullWidth: !0,
                            justifyContent: C.Xa.Between,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, i.createElement(k, {
                            title: this.props.title
                        }), this.props.menu), i.createElement(C.Ya, {
                            className: "popout-window-container",
                            flexShrink: 1,
                            fullWidth: !0
                        }, this.props.children)), this.state.window.document.body) : null
                    }, t.prototype.setInitialWindowState = function(e, t) {
                        window.addEventListener("beforeunload", this.tryToCloseWindow), e.addEventListener("beforeunload", this.tryToCloseWindow), e.addEventListener("error", this.handleWindowError), e.document.head.innerHTML = "", e.document.body.innerHTML = "", Array.prototype.forEach.call(window.document.querySelectorAll('link[rel="stylesheet"], style'), function(t) {
                            e.document.head.appendChild(t.cloneNode(!0))
                        });
                        var n = document.createElement("title");
                        n.innerHTML = "Twitch", e.document.head.appendChild(n), e.document.title = "Twitch", e.resizeTo(Math.max(t, P), x), this.setState({
                            window: e
                        })
                    }, t
                }(i.Component),
                B = Object(s.compose)(v(), f())(T),
                F = (n("7WKn"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setContainerRef = function(e) {
                            t.containerRef = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setPlaceholderStyles()
                    }, t.prototype.componentDidUpdate = function() {
                        this.setPlaceholderStyles()
                    }, t.prototype.render = function() {
                        return i.createElement(C.Ya, {
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
                                r = t.width;
                            this.containerRef.style.height = n + "px", this.containerRef.style.width = r + "px"
                        }
                    }, t
                }(i.Component));
            ! function(e) {
                e.Card = "card", e.Container = "container", e.Header = "header"
            }(D || (D = {}));
            var j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleContainerMouseEnter = function(e) {
                        var n = e.clientY;
                        if (t.props.grabbedCard && !t.isHoveringSelf) {
                            var r = t.getPlaceholderPosition(n);
                            t.props.updateCard(t.props.card.name, {
                                placeholderPosition: r
                            }, l.b.SetTarget)
                        }
                    }, t.handleContainerMouseLeave = function() {
                        if (t.props.grabbedCard) {
                            var e = t.props.card;
                            t.props.updateCard(e.name, {
                                placeholderPosition: void 0
                            }, l.b.RemoveTarget)
                        }
                    }, t.handleContainerMouseMove = function(e) {
                        var n = e.clientY;
                        if (t.isHoveringOtherCard) {
                            var r = t.getPlaceholderPosition(n);
                            t.props.updateCard(t.props.card.name, {
                                placeholderPosition: r
                            }, l.b.SetTarget)
                        }
                    }, t.getPlaceholderPosition = function(e) {
                        var n = t[D.Container].getBoundingClientRect();
                        return e > n.top + n.height / 2 ? l.c.Bottom : l.c.Top
                    }, t.handleCardMouseMove = function(e) {
                        var n = e.movementX,
                            r = e.movementY;
                        if (t.props.card.isGrabbed) {
                            var a = t[D.Card];
                            a.style.left = parseInt(a.style.left || "0", 10) + n + "px", a.style.top = parseInt(a.style.top || "0", 10) + r + "px"
                        }
                    }, t.handleHeaderMouseDown = function(e) {
                        var n = e.clientY,
                            r = t[D.Card],
                            a = r.getBoundingClientRect(),
                            o = a.top,
                            i = a.left,
                            s = a.width;
                        r.style.left = i + "px", r.style.top = o + "px", r.style.width = s + "px";
                        var d = t.getPlaceholderPosition(n),
                            c = t.props.card.name;
                        t.props.updateCard(c, {
                            placeholderPosition: d
                        }, l.b.SetGrabbed), t.props.updateCard(c, {}, l.b.SetTarget)
                    }, t.handleCardMouseUp = function() {
                        if (t.props.card.isGrabbed) {
                            var e = t[D.Card];
                            e.style.left = null, e.style.top = null, e.style.width = "100%", t.props.dropCard()
                        }
                        var n = t.props.card;
                        (n.placeholderPosition || n.isGrabbed) && t.props.updateCard(n.name, {
                            isGrabbed: !1,
                            placeholderPosition: void 0
                        })
                    }, t.registerRef = function(e, n) {
                        t[e] = n
                    }, t.addEventListeners = function() {
                        var e = t[D.Container];
                        e.addEventListener("mousemove", t.handleContainerMouseMove), e.addEventListener("mouseleave", t.handleContainerMouseLeave), e.addEventListener("mouseenter", t.handleContainerMouseEnter), t[D.Header].addEventListener("mousedown", t.handleHeaderMouseDown), window.addEventListener("mouseup", t.handleCardMouseUp), window.addEventListener("mousemove", t.handleCardMouseMove)
                    }, t.removeEventListeners = function() {
                        var e = t[D.Container];
                        e.removeEventListener("mousemove", t.handleContainerMouseMove), e.removeEventListener("mouseleave", t.handleContainerMouseLeave), e.removeEventListener("mouseenter", t.handleContainerMouseEnter), t[D.Header].removeEventListener("mousedown", t.handleHeaderMouseDown), window.removeEventListener("mouseup", t.handleCardMouseUp), window.removeEventListener("mousemove", t.handleCardMouseMove)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.card.isCollapsed !== this.props.card.isCollapsed && this.props.onCardsUpdate()
                }, t.prototype.componentDidMount = function() {
                    this.addEventListeners(), this.props.updateCard(this.props.card.name, {
                        cardRef: this[D.Card]
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.removeEventListeners()
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.card.placeholderPosition,
                        n = e.grabbedCard,
                        r = e.menu,
                        a = e.title;
                    return i.createElement(i.Fragment, null, i.createElement(C.Ya, {
                        display: C.X.Flex,
                        flexDirection: C.Aa.Column,
                        refDelegate: this.registerRef.bind(this, D.Container)
                    }, i.createElement(F, {
                        cloneStyleRef: n && n.cardRef,
                        show: t === l.c.Top
                    }), i.createElement(R, {
                        menu: r,
                        refDelegateHeader: this.registerRef.bind(this, D.Header),
                        refDelegateCard: this.registerRef.bind(this, D.Card),
                        title: a
                    }, this.props.card.isCollapsed && this.props.unmountOnCollapse ? null : this.props.children), i.createElement(F, {
                        cloneStyleRef: n && n.cardRef,
                        show: t === l.c.Bottom
                    })), this.props.card.isPoppedOut && i.createElement(B, {
                        height: this.props.popoutHeight,
                        menu: r,
                        title: a
                    }, this.props.children))
                }, Object.defineProperty(t.prototype, "isHoveringOtherCard", {
                    get: function() {
                        var e = this.props.targetCard;
                        return !(!e || e.cardRef !== this[D.Card] || !this.props.grabbedCard)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isHoveringSelf", {
                    get: function() {
                        var e = this.props.grabbedCard;
                        return !(!e || e.cardRef !== this[D.Card])
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component);
            D.Card, D.Container, D.Header;
            var W = Object(s.compose)(f(), v())(j),
                M = n("8/mp"),
                N = n("b+ID"),
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setRootContainerRef = function(e) {
                            t.rootContainerRef = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.rootContainerRef.appendChild(this.props.element)
                    }, t.prototype.render = function() {
                        return i.createElement(C.Ya, {
                            refDelegate: this.setRootContainerRef
                        })
                    }, t
                }(i.Component),
                A = (n("6Ll5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleContainerMouseOver = function() {
                            var e = t.props.grabbedCard;
                            e && e.cardRef && !t.props.targetCard && t.props.updateCard(t.placeholderName, {
                                column: t.props.column,
                                placeholderPosition: l.c.Bottom,
                                row: t.props.row
                            }, l.b.SetTarget)
                        }, t.handleContainerMouseLeave = function() {
                            t.props.grabbedCard && t.props.targetCard && t.props.updateCard(t.placeholderName, {}, l.b.RemoveTarget)
                        }, t.setContainerRef = function(e) {
                            t.containerRef = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.containerRef.addEventListener("mouseover", this.handleContainerMouseOver), this.containerRef.addEventListener("mouseleave", this.handleContainerMouseLeave)
                    }, t.prototype.componentWillUnmount = function() {
                        this.containerRef.removeEventListener("mouseove", this.handleContainerMouseOver), this.containerRef.removeEventListener("mouseleave", this.handleContainerMouseLeave)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.grabbedCard,
                            n = e.targetCard;
                        return i.createElement(C.Fb, {
                            alignContent: C.e.Stretch,
                            alignItems: C.f.Stretch,
                            breakpointLarge: {
                                margin: {
                                    right: 2
                                },
                                padding: {
                                    y: 2
                                }
                            },
                            className: "drag-and-drop-layout-column",
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: C.Xa.Start,
                            margin: {
                                right: 1
                            },
                            padding: {
                                y: 1
                            },
                            refDelegate: this.setContainerRef
                        }, this.props.children, i.createElement(F, {
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
                }(i.Component)),
                Y = (n("uZYF"), function(e) {
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
                                var t, n, r = e.common,
                                    a = r.grabbedCard,
                                    i = r.targetCard,
                                    s = e.cards,
                                    d = e.roots;
                                if (a && i && a.name !== i.name && (d.forEach(function(e, r) {
                                        e.forEach(function(e, o) {
                                            e.name === a.name ? t = {
                                                column: r,
                                                el: e.el,
                                                name: e.name,
                                                row: o
                                            } : e.name === i.name && (n = {
                                                column: r,
                                                el: e.el,
                                                name: e.name,
                                                row: o
                                            })
                                        })
                                    }), n || (n = {
                                        column: i.column || 0,
                                        el: i.el,
                                        name: i.name,
                                        row: i.row || 0
                                    }), t && n)) {
                                    var c = d[t.column],
                                        u = d[n.column],
                                        p = i.placeholderPosition === l.c.Bottom;
                                    u.splice(n.row + (p ? 1 : 0), 0, t), t.column === n.column ? u.splice(t.row + (t.row > n.row ? 1 : 0), 1) : c.splice(t.row, 1)
                                }
                                return {
                                    cards: s,
                                    common: o.__assign({}, e.common, {
                                        grabbedCard: void 0,
                                        targetCard: void 0
                                    }),
                                    roots: d
                                }
                            }, n.handleCardsUpdate)
                        }, n.updateCard = function(e, t, r) {
                            void 0 === t && (t = {}), n.setState(function(n) {
                                var a = o.__assign({}, n),
                                    i = a.cards,
                                    s = !!i[e],
                                    d = o.__assign({}, i[e] || new l.a(e), t);
                                switch (r) {
                                    case l.b.RemoveTarget:
                                        a.common = o.__assign({}, n.common, {
                                            targetCard: void 0
                                        });
                                        break;
                                    case l.b.SetGrabbed:
                                        d.isGrabbed = !0, a.common = o.__assign({}, a.common, {
                                            grabbedCard: d
                                        });
                                        break;
                                    case l.b.SetTarget:
                                        a.common = o.__assign({}, a.common, {
                                            targetCard: d
                                        })
                                }
                                return s && (a.cards[e] = d), a
                            })
                        };
                        var r = {},
                            a = t.initialCardsState.map(function(e) {
                                return e.map(function(e) {
                                    return e.el = document.createElement("div"), r[e.name] = e, {
                                        el: e.el,
                                        name: e.name
                                    }
                                })
                            });
                        return n.state = {
                            cards: r,
                            common: {
                                dropCard: n.dropCard,
                                onCardsUpdate: n.handleCardsUpdate,
                                updateCard: n.updateCard
                            },
                            roots: a
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.handleCardsUpdate()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.isExpandedView;
                        return i.createElement(i.Fragment, null, i.createElement(M.b, {
                            className: "drag-and-drop-layout-scrollable-area" + (t ? "__expanded-view" : "")
                        }, i.createElement(C.Ya, {
                            alignContent: C.e.Stretch,
                            alignItems: C.f.Stretch,
                            className: "drag-and-drop-layout",
                            display: C.X.Flex,
                            flexDirection: C.Aa.Row,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: C.Xa.Between
                        }, this.state.roots.map(function(t, n) {
                            return i.createElement(A, {
                                column: n,
                                key: n,
                                grabbedCard: e.state.common.grabbedCard,
                                targetCard: e.state.common.targetCard,
                                row: t.length - 1,
                                updateCard: e.updateCard
                            }, t.map(function(e) {
                                var t = e.el,
                                    n = e.name;
                                return i.createElement(U, {
                                    element: t,
                                    key: n
                                })
                            }))
                        }))), i.createElement(h, {
                            value: this.state.common
                        }, Object.keys(this.state.cards).map(function(t) {
                            var n = e.state.cards[t];
                            return I.createPortal(i.createElement(u, {
                                value: {
                                    card: n
                                }
                            }, e.props.cards[n.name]), n.el)
                        })))
                    }, t
                }(i.Component));
            var H = Object(N.b)(function(e) {
                    return {
                        isExpandedView: e.isExpandedView
                    }
                })(Y),
                G = n("eJ65"),
                V = n("N0BP"),
                X = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(C.Ya, {
                            margin: {
                                left: 1
                            },
                            position: C.kb.Relative
                        }, i.createElement(G.a, null, i.createElement(C.A, o.__assign({
                            ariaLabel: this.props.ariaIconLabel,
                            icon: this.props.icon
                        }, Object(V.a)(this.props))), i.createElement(C.u, {
                            offsetY: "0",
                            offsetX: "1rem",
                            direction: C.v.Left,
                            size: C.w.Small
                        }, this.props.children)))
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return W
            }), n.d(t, "c", function() {
                return H
            }), n.d(t, "b", function() {
                return X
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
            var r, a = n("1rIY"),
                o = (r = Object(a.a)("CardsTrackingContext", {
                    registerReportCardVisibility: function() {
                        return function() {
                            return null
                        }
                    }
                })).InnerProvider,
                i = r.withContext,
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