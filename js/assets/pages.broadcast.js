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
            w = a("15A3"),
            O = a.n(w),
            E = a("yI+T"),
            _ = a.n(E),
            B = a("j7/Y"),
            k = a("w9tK"),
            x = a("vH/s"),
            v = a("CSlQ"),
            R = a("Odds"),
            j = function(e) {
                return n.createElement(R._35, {
                    background: R.n.Base,
                    elevation: 1,
                    padding: 2,
                    display: R.R.Flex,
                    flexDirection: R.T.Column,
                    fullHeight: !0
                }, n.createElement(R._8, {
                    display: R.R.Flex,
                    justifyContent: R._7.Center,
                    margin: {
                        top: 1
                    }
                }, n.createElement(R.N, {
                    alt: e.title,
                    src: e.imgURL
                })), n.createElement(R._8, {
                    margin: {
                        top: 2,
                        bottom: 1
                    }
                }, n.createElement(R.Q, {
                    fontSize: R.V.Size5
                }, e.title), n.createElement(R.O, {
                    targetBlank: !0,
                    to: e.link
                }, e.link)), n.createElement(R.Q, {
                    type: R._49.P,
                    color: R.K.Alt2
                }, e.longDescription), n.createElement(R._8, {
                    display: R.R.Flex,
                    flexDirection: R.T.Column,
                    fullWidth: !0,
                    flexGrow: 1,
                    justifyContent: R._7.End,
                    margin: {
                        top: 2
                    }
                }, n.createElement(R.v, {
                    fullWidth: !0,
                    type: R.B.Hollow,
                    linkTo: e.link
                }, Object(i.d)("Download", "BroadcastItemCard")), n.createElement(R._8, {
                    margin: {
                        top: 1
                    }
                }, n.createElement(R.v, {
                    fullWidth: !0,
                    type: R.B.Text,
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
                                return n.createElement(R.O, {
                                    key: "helplink",
                                    targetBlank: !0,
                                    to: "https://help.twitch.tv/customer/portal/topics/301257-getting-started/articles"
                                }, e)
                            }
                        }, "BroadcastRootPage"),
                        t = Object(i.d)("Looking for your stream key? You can find it on your <x:link>dashboard</x:link>.", {
                            "x:link": function(e) {
                                return n.createElement(R.O, {
                                    key: "dashboardlink",
                                    targetBlank: !0,
                                    to: "https://www.twitch.tv/broadcast/dashboard/streamkey"
                                }, e)
                            }
                        }, "BroadcastRootPage");
                    return n.createElement(R._8, {
                        className: "broadcast-container"
                    }, n.createElement(L.a, null, n.createElement(R.Q, {
                        bold: !0,
                        type: R._49.H4
                    }, Object(i.d)("Broadcast While You Play", "BroadcastRootPage")), n.createElement(R._8, {
                        margin: {
                            y: 1
                        }
                    }, n.createElement(R.Q, {
                        color: R.K.Alt2,
                        type: R._49.P
                    }, Object(i.d)("Here are the most common tools for broadcasting.", "BroadcastRootPage")), n.createElement(R.Q, {
                        color: R.K.Alt2
                    }, e)), n.createElement(R.Q, {
                        color: R.K.Alt2
                    }, t), n.createElement(R._8, {
                        margin: {
                            y: 2
                        }
                    }, n.createElement(R.Q, {
                        bold: !0,
                        type: R._49.H4
                    }, Object(i.d)("Broadcasting Applications", "BroadcastRootPage"))), n.createElement(R._55, {
                        childWidth: R._56.Large,
                        gutterSize: R._57.Small,
                        noGrow: !0,
                        placeholderItems: 8
                    }, n.createElement(R._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(j, {
                        imgURL: c.a,
                        title: Object(i.d)("Bebo", "BroadcastRootPage"),
                        link: "http://www.bebo.com/",
                        longDescription: Object(i.d)("Free, easy, all-in-one Windows software that includes what you need to stream and display alerts and overlays. Recommended for first-time streamers.", "BroadcastRootPage"),
                        setupGuideLink: "https://help.bebo.com/getting-started/how-do-i-get-started-with-bebo"
                    })), n.createElement(R._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(j, {
                        imgURL: O.a,
                        title: Object(i.d)("Streamlabs OBS", "BroadcastRootPage"),
                        link: "https://streamlabs.com/streamlabs-obs/",
                        longDescription: Object(i.d)("Streamlabs OBS is free, open source, and easy way to get started streaming. The app is built on top of OBS with a whole lot of exciting features: facemasks, built-in widgets & chat, game specific encoders and thousands of free overlays and themes.", "BroadcastRootPage"),
                        setupGuideLink: "https://support.streamlabs.com/hc/en-us/articles/115004797393-Streamlabs-OBS-All-In-One-Window-Walk-Through"
                    })), n.createElement(R._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(j, {
                        imgURL: _.a,
                        title: Object(i.d)("XSplit Broadcaster", "BroadcastRootPage"),
                        link: "http://www.xsplit.com/",
                        longDescription: Object(i.d)("Simple yet powerful live streaming and recording software. XSplit Broadcaster is a revolutionary audio/video mixing application that allows for highly customizable professional quality live broadcasts by using simple and intuitive interface anyone can master.", "BroadcastRootPage"),
                        setupGuideLink: "https://www.xsplit.com/support"
                    })), n.createElement(R._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(j, {
                        imgURL: p.a,
                        title: Object(i.d)("Open Broadcast Software", "BroadcastRootPage"),
                        link: "http://obsproject.com/",
                        longDescription: Object(i.d)("Free and open source software for recording and live streaming. Source code is available to everyone to contribute and improve.", "BroadcastRootPage"),
                        setupGuideLink: "https://obsproject.com/help"
                    }))), n.createElement(R._8, {
                        margin: {
                            y: 2
                        }
                    }, n.createElement(R.Q, {
                        bold: !0,
                        type: R._49.H4
                    }, Object(i.d)("Broadcasting Tools", "BroadcastRootPage"))), n.createElement(R._55, {
                        childWidth: R._56.Large,
                        gutterSize: R._57.Small,
                        noGrow: !0,
                        placeholderItems: 3
                    }, n.createElement(R._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(j, {
                        imgURL: y.a,
                        title: Object(i.d)("Streamlabs", "BroadcastRootPage"),
                        link: "https://streamlabs.com/",
                        longDescription: Object(i.d)("Level up your stream with alerts, donations, and 20+ interactive widgets.", "BroadcastRootPage"),
                        setupGuideLink: "https://support.streamlabs.com/hc/en-us/categories/202602847-Help"
                    })), n.createElement(R._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(j, {
                        imgURL: f.a,
                        title: Object(i.d)("StreamElements", "BroadcastRootPage"),
                        link: "https://streamelements.com/",
                        longDescription: Object(i.d)("A full suite for all your streaming needs: Bot, Overlays, Loyalty points, Giveaways and much more for new and veteran streamers alike.", "BroadcastRootPage"),
                        setupGuideLink: "https://support.streamelements.com/hc/en-us/articles/115003424812-Quick-Start-Guide"
                    })), n.createElement(R._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(j, {
                        imgURL: d.a,
                        title: Object(i.d)("Muxy", "BroadcastRootPage"),
                        link: "https://www.muxy.io/",
                        longDescription: Object(i.d)("Muxy provides alerts, tips, a real-time Live Feed, Cheer visualizations, and stream analytics.", "BroadcastRootPage"),
                        setupGuideLink: "https://muxy.io/tutorial/"
                    })), n.createElement(R._8, {
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(j, {
                        imgURL: g.a,
                        title: Object(i.d)("Opera Event", "BroadcastRootPage"),
                        link: "https://www.operaevent.co/",
                        longDescription: Object(i.d)("Opera Event is a platform for arming broadcasters with the ability to engage, grow, enhance and monetize their audience.", "BroadcastRootPage"),
                        setupGuideLink: "https://www.operaevent.co/"
                    })))))
                }, t
            }(n.Component)),
            S = Object(r.compose)(Object(v.d)("BroadcastPage", {
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
//# sourceMappingURL=pages.broadcast-e799530a0a1084ebcc6d0ed84c1120d9.js.map