webpackJsonp([65], {
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
            m = a("L6mO"),
            p = a.n(m),
            u = a("XwZL"),
            g = a.n(u),
            b = a("TMbW"),
            f = a.n(b),
            h = a("IN5m"),
            y = a.n(h),
            O = a("15A3"),
            w = a.n(O),
            E = a("yI+T"),
            _ = a.n(E),
            B = a("j7/Y"),
            k = a("w9tK"),
            x = a("vH/s"),
            R = a("CSlQ"),
            j = a("Odds"),
            v = function(e) {
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
            L = a("pK/l"),
            P = (a("lijl"), function(e) {
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
                                    to: "/broadcast/dashboard/settings"
                                }, e)
                            }
                        }, "BroadcastRootPage");
                    return n.createElement(j._8, {
                        className: "broadcast-container"
                    }, n.createElement(L.a, null, n.createElement(j.Q, {
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
                    }, n.createElement(v, {
                        imgURL: c.a,
                        title: Object(i.d)("Bebo", "BroadcastRootPage"),
                        link: "http://www.bebo.com/",
                        longDescription: Object(i.d)("Free, easy, all-in-one Windows software that includes what you need to stream and display alerts and overlays. Recommended for first-time streamers.", "BroadcastRootPage"),
                        setupGuideLink: "https://help.bebo.com/getting-started/how-do-i-get-started-with-bebo"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(v, {
                        imgURL: w.a,
                        title: Object(i.d)("Streamlabs OBS", "BroadcastRootPage"),
                        link: "https://streamlabs.com/streamlabs-obs/",
                        longDescription: Object(i.d)("Streamlabs OBS is free, open source, and easy way to get started streaming. The app is built on top of OBS with a whole lot of exciting features: facemasks, built-in widgets & chat, game specific encoders and thousands of free overlays and themes.", "BroadcastRootPage"),
                        setupGuideLink: "https://support.streamlabs.com/hc/en-us/articles/115004797393-Streamlabs-OBS-All-In-One-Window-Walk-Through"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(v, {
                        imgURL: _.a,
                        title: Object(i.d)("XSplit Broadcaster", "BroadcastRootPage"),
                        link: "http://www.xsplit.com/",
                        longDescription: Object(i.d)("Simple yet powerful live streaming and recording software. XSplit Broadcaster is a revolutionary audio/video mixing application that allows for highly customizable professional quality live broadcasts by using simple and intuitive interface anyone can master.", "BroadcastRootPage"),
                        setupGuideLink: "https://www.xsplit.com/support"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(v, {
                        imgURL: p.a,
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
                    }, n.createElement(v, {
                        imgURL: y.a,
                        title: Object(i.d)("Streamlabs", "BroadcastRootPage"),
                        link: "https://streamlabs.com/",
                        longDescription: Object(i.d)("Level up your stream with alerts, donations, and 20+ interactive widgets.", "BroadcastRootPage"),
                        setupGuideLink: "https://support.streamlabs.com/hc/en-us/categories/202602847-Help"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(v, {
                        imgURL: f.a,
                        title: Object(i.d)("StreamElements", "BroadcastRootPage"),
                        link: "https://streamelements.com/",
                        longDescription: Object(i.d)("A full suite for all your streaming needs: Bot, Overlays, Loyalty points, Giveaways and much more for new and veteran streamers alike.", "BroadcastRootPage"),
                        setupGuideLink: "https://support.streamelements.com/hc/en-us/articles/115003424812-Quick-Start-Guide"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(v, {
                        imgURL: d.a,
                        title: Object(i.d)("Muxy", "BroadcastRootPage"),
                        link: "https://www.muxy.io/",
                        longDescription: Object(i.d)("Muxy provides alerts, tips, a real-time Live Feed, Cheer visualizations, and stream analytics.", "BroadcastRootPage"),
                        setupGuideLink: "https://muxy.io/tutorial/"
                    })), n.createElement(j._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(v, {
                        imgURL: g.a,
                        title: Object(i.d)("Opera Event", "BroadcastRootPage"),
                        link: "https://www.operaevent.co/",
                        longDescription: Object(i.d)("Opera Event is a platform for arming broadcasters with the ability to engage, grow, enhance and monetize their audience.", "BroadcastRootPage"),
                        setupGuideLink: "https://www.operaevent.co/"
                    })))))
                }, t
            }(n.Component)),
            S = Object(r.compose)(Object(R.d)("BroadcastPage", {
                autoReportInteractive: !0,
                destination: k.a.BroadcastPage
            }), Object(B.a)({
                location: x.PageviewLocation.Broadcast
            }))(P);
        a.d(t, "BroadcastPage", function() {
            return S
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
//# sourceMappingURL=pages.broadcast-19a7ed4c9750b81016bc7f55e4e16f1e.js.map