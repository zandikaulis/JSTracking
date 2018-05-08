webpackJsonp([64], {
    "15A3": function(e, t, a) {
        e.exports = a.p + "assets/streamlabs_obs_small-6949e63f4c841043cd4f704afe233a83.png"
    },
    "41t4": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a("TToO"),
            n = a("GiK3"),
            r = a("3zLD"),
            i = a("6sO2"),
            s = a("vuj9"),
            c = a.n(s),
            l = a("O17U"),
            d = a.n(l),
            p = a("L6mO"),
            m = a.n(p),
            u = a("XwZL"),
            g = a.n(u),
            b = a("TMbW"),
            f = a.n(b),
            h = a("IN5m"),
            _ = a.n(h),
            y = a("15A3"),
            k = a.n(y),
            w = a("yI+T"),
            O = a.n(w),
            v = a("j7/Y"),
            E = a("w9tK"),
            x = a("vH/s"),
            B = a("CSlQ"),
            j = a("Odds"),
            R = function(e) {
                return n.createElement(j._35, {
                    background: j.n.Base,
                    elevation: 1,
                    padding: 2,
                    display: j.R.Flex,
                    flexDirection: j.T.Column,
                    fullHeight: !0
                }, n.createElement(j._8, {
                    display: j.R.Flex,
                    justifyContent: j._7.Center,
                    margin: {
                        top: 1
                    }
                }, n.createElement(j.N, {
                    alt: e.title,
                    src: e.imgURL
                })), n.createElement(j._8, {
                    margin: {
                        top: 2,
                        bottom: 1
                    }
                }, n.createElement(j.Q, {
                    fontSize: j.V.Size5
                }, e.title), n.createElement(j.O, {
                    targetBlank: !0,
                    to: e.link
                }, e.link)), n.createElement(j.Q, {
                    type: j._49.P,
                    color: j.K.Alt2
                }, e.longDescription), n.createElement(j._8, {
                    display: j.R.Flex,
                    flexDirection: j.T.Column,
                    fullWidth: !0,
                    flexGrow: 1,
                    justifyContent: j._7.End,
                    margin: {
                        top: 2
                    }
                }, n.createElement(j.v, {
                    fullWidth: !0,
                    type: j.B.Hollow,
                    linkTo: e.link
                }, Object(i.d)("Download", "BroadcastItemCard")), n.createElement(j._8, {
                    margin: {
                        top: 1
                    }
                }, n.createElement(j.v, {
                    fullWidth: !0,
                    type: j.B.Text,
                    linkTo: e.setupGuideLink
                }, Object(i.d)("Setup Guide", "BroadcastItemCard")))))
            },
            P = a("pK/l"),
            L = (a("lijl"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = Object(i.d)("For more info, visit the <x:link>Support Center</x:link>.", {
                            "x:link": function(e) {
                                return n.createElement(j.O, {
                                    key: "helplink",
                                    targetBlank: !0,
                                    to: "https://help.twitch.tv/customer/portal/topics/301257-getting-started/articles"
                                }, e)
                            }
                        }, "BroadcastRootPage"),
                        t = Object(i.d)("Looking for your stream key? You can find it on your <x:link>dashboard</x:link>.", {
                            "x:link": function(e) {
                                return n.createElement(j.O, {
                                    key: "dashboardlink",
                                    targetBlank: !0,
                                    to: "https://www.twitch.tv/broadcast/dashboard/streamkey"
                                }, e)
                            }
                        }, "BroadcastRootPage");
                    return n.createElement(j._8, {
                        className: "broadcast-container"
                    }, n.createElement(P.a, null, n.createElement(j.Q, {
                        bold: !0,
                        type: j._49.H4
                    }, Object(i.d)("Broadcast While You Play", "BroadcastRootPage")), n.createElement(j._8, {
                        margin: {
                            y: 1
                        }
                    }, n.createElement(j.Q, {
                        color: j.K.Alt2,
                        type: j._49.P
                    }, Object(i.d)("Here are the most common tools for broadcasting.", "BroadcastRootPage")), n.createElement(j.Q, {
                        color: j.K.Alt2
                    }, e)), n.createElement(j.Q, {
                        color: j.K.Alt2
                    }, t), n.createElement(j._8, {
                        margin: {
                            y: 2
                        }
                    }, n.createElement(j.Q, {
                        bold: !0,
                        type: j._49.H4
                    }, Object(i.d)("Broadcasting Applications", "BroadcastRootPage"))), n.createElement(j._55, {
                        childWidth: j._56.Large,
                        gutterSize: j._57.Small,
                        noGrow: !0,
                        placeholderItems: 8
                    }, n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(R, {
                        imgURL: c.a,
                        title: Object(i.d)("Bebo", "BroadcastRootPage"),
                        link: "http://bebo.com",
                        longDescription: Object(i.d)("Free, easy, all-in-one Windows software that includes what you need to stream and display alerts and overlays. Recommended for first-time streamers.", "BroadcastRootPage"),
                        setupGuideLink: "https://help.bebo.com/getting-started/how-do-i-get-started-with-bebo"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(R, {
                        imgURL: k.a,
                        title: Object(i.d)("Streamlabs OBS", "BroadcastRootPage"),
                        link: "https://streamlabs.com/streamlabs-obs?s=25",
                        longDescription: Object(i.d)("Streamlabs OBS is free, open source, and easy way to get started streaming. The app is built on top of OBS with a whole lot of exciting features: facemasks, built-in widgets & chat, game specific encoders and thousands of free overlays and themes.", "BroadcastRootPage"),
                        setupGuideLink: "https://support.streamlabs.com/hc/en-us/articles/115004797393-Streamlabs-OBS-All-In-One-Window-Walk-Through"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(R, {
                        imgURL: O.a,
                        title: Object(i.d)("XSplit Broadcaster", "BroadcastRootPage"),
                        link: "http://www.xsplit.com/",
                        longDescription: Object(i.d)("Simple yet powerful live streaming and recording software. XSplit Broadcaster is a revolutionary audio/video mixing application that allows for highly customizable professional quality live broadcasts by using simple and intuitive interface anyone can master.", "BroadcastRootPage"),
                        setupGuideLink: "https://www.xsplit.com/support"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(R, {
                        imgURL: m.a,
                        title: Object(i.d)("Open Broadcast Software", "BroadcastRootPage"),
                        link: "http://obsproject.com/",
                        longDescription: Object(i.d)("Free and open source software for recording and live streaming. Source code is available to everyone to contribute and improve.", "BroadcastRootPage"),
                        setupGuideLink: "https://obsproject.com/help"
                    }))), n.createElement(j._8, {
                        margin: {
                            y: 2
                        }
                    }, n.createElement(j.Q, {
                        bold: !0,
                        type: j._49.H4
                    }, Object(i.d)("Broadcasting Tools", "BroadcastRootPage"))), n.createElement(j._55, {
                        childWidth: j._56.Large,
                        gutterSize: j._57.Small,
                        noGrow: !0,
                        placeholderItems: 3
                    }, n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(R, {
                        imgURL: _.a,
                        title: Object(i.d)("Streamlabs", "BroadcastRootPage"),
                        link: "https://streamlabs.com/",
                        longDescription: Object(i.d)("Level up your stream with alerts, donations, and 20+ interactive widgets.", "BroadcastRootPage"),
                        setupGuideLink: "https://support.streamlabs.com/hc/en-us/categories/202602847-Help"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(R, {
                        imgURL: f.a,
                        title: Object(i.d)("StreamElements", "BroadcastRootPage"),
                        link: "https://streamelements.com/",
                        longDescription: Object(i.d)("A full suite for all your streaming needs: Bot, Overlays, Loyalty points, Giveaways and much more for new and veteran streamers alike.", "BroadcastRootPage"),
                        setupGuideLink: "https://support.streamelements.com/hc/en-us/articles/115003424812-Quick-Start-Guide"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(R, {
                        imgURL: d.a,
                        title: Object(i.d)("Muxy", "BroadcastRootPage"),
                        link: "https://www.muxy.io/",
                        longDescription: Object(i.d)("Muxy provides alerts, tips, a real-time Live Feed, Cheer visualizations, and stream analytics.", "BroadcastRootPage"),
                        setupGuideLink: "https://muxy.io/tutorial/"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(R, {
                        imgURL: g.a,
                        title: Object(i.d)("Opera Event", "BroadcastRootPage"),
                        link: "https://www.operaevent.co/",
                        longDescription: Object(i.d)("Opera Event is a platform for arming broadcasters with the ability to engage, grow, enhance and monetize their audience.", "BroadcastRootPage"),
                        setupGuideLink: "https://www.operaevent.co/"
                    })))))
                }, t
            }(n.Component)),
            T = Object(r.compose)(Object(B.d)("BroadcastPage", {
                autoReportInteractive: !0,
                destination: E.a.BroadcastPage
            }), Object(v.a)({
                location: x.PageviewLocation.Broadcast
            }))(L);
        a.d(t, "BroadcastPage", function() {
            return T
        })
    },
    DOXR: function(e, t) {},
    IN5m: function(e, t, a) {
        e.exports = a.p + "assets/streamlabs-dc0be2830d3658fa69d414cc6b74a3da.png"
    },
    L6mO: function(e, t, a) {
        e.exports = a.p + "assets/obs_logors_1x-ea09acc52659eb5399b699e6432e9a2d.png"
    },
    O17U: function(e, t, a) {
        e.exports = a.p + "assets/muxy_1x-f7ab6fe3091595df63f61b2c5fcbab77.png"
    },
    TMbW: function(e, t, a) {
        e.exports = a.p + "assets/streamelements_1x-5a78a214c1701af3da1db542a46ce0eb.png"
    },
    XwZL: function(e, t, a) {
        e.exports = a.p + "assets/opera_1x-2766d8f4415bd7218cc94f02b20ce6c6.png"
    },
    "j7/Y": function(e, t, a) {
        "use strict";
        var o = a("TToO"),
            n = a("OAwv"),
            r = a("GiK3"),
            i = a("F8kA"),
            s = a("6sO2");

        function c(e) {
            return function(t) {
                var a = function(a) {
                    function i(t) {
                        var n = a.call(this, t) || this;
                        return n.tracked = !1, n.referenceTracking = {}, n.trackPageview = function() {
                            if (!(n.tracked || e.skip && e.skip(n.props))) {
                                n.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(n.props) : e.properties && (t = o.__assign({}, e.properties));
                                var a = o.__assign({}, n.props);
                                a.location && a.location.state && (t.medium = a.location.state.medium, t.content = a.location.state.content, t.content_index = a.location.state.content_index);
                                var r = n.referenceTracking,
                                    i = r.content,
                                    c = r.medium,
                                    l = r.content_index;
                                s.o.tracking.trackPageview(o.__assign({
                                    content: i,
                                    medium: c,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), n
                    }
                    return o.__extends(i, a), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, a) {
                            "REPLACE" !== a && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return r.createElement(t, o.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? n.parse(e.search) : {},
                            a = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, a.medium || a.content) {
                            var o = "",
                                r = n.stringify(t);
                            r.length > 0 && (o = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: o
                            })
                        }
                        return a
                    }, i
                }(r.Component);
                return Object(i.f)(a)
            }
        }
        a.d(t, "a", function() {
            return c
        })
    },
    lijl: function(e, t) {},
    "pK/l": function(e, t, a) {
        "use strict";
        var o = a("TToO"),
            n = a("GiK3"),
            r = a("zCIC"),
            i = a("Odds"),
            s = (a("DOXR"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return n.createElement(r.b, null, n.createElement(i._8, {
                        padding: 4,
                        className: "dashboard-centered-page"
                    }, this.props.children))
                }, t
            }(n.Component));
        a.d(t, "a", function() {
            return s
        })
    },
    vuj9: function(e, t, a) {
        e.exports = a.p + "assets/bebo_1x-4de2ee2160a34aafe0c2256075bfa498.png"
    },
    "yI+T": function(e, t, a) {
        e.exports = a.p + "assets/xsplit_broadcaster_1x-404b22413674582ad019f70631921904.png"
    }
});
//# sourceMappingURL=pages.broadcast-672506b9b96f8a61b42e182754b73869.js.map