webpackJsonp([80], {
    anIY: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a("RH2O"),
            n = a("Aj/L"),
            o = a("U7vG"),
            r = a("6sO2"),
            d = a("vH/s"),
            l = a("WzS7"),
            c = a("Odds"),
            s = Object(i.a)(function(e) {
                return {
                    isLoggedIn: Object(n.d)(e)
                }
            })(function(e) {
                var t;
                return t = e.isLoggedIn ? o.createElement(l.e, {
                    tracking: {
                        medium: d.PageviewMedium.VideoNotFoundPage,
                        location: d.PageviewLocation.VideoWatchPage
                    }
                }) : o.createElement(l.c, {
                    tracking: {
                        medium: d.PageviewMedium.VideoNotFoundPage,
                        location: d.PageviewLocation.VideoWatchPage
                    }
                }), o.createElement(c._19, {
                    display: c.H.Flex,
                    color: c.F.Alt2,
                    justifyContent: c.U.Center,
                    fullWidth: !0,
                    fullHeight: !0
                }, o.createElement(c.V, {
                    display: c.H.InlineFlex,
                    alignItems: c.c.Center,
                    flexWrap: c.K.NoWrap,
                    padding: {
                        x: 5
                    }
                }, o.createElement(c._19, {
                    margin: {
                        right: 2
                    },
                    flexShrink: 0,
                    color: c.F.Alt2
                }, o.createElement(c._10, {
                    asset: c._11.DeadGlitch,
                    width: 92,
                    height: 96
                })), o.createElement(c.V, {
                    display: c.H.Flex,
                    flexDirection: c.J.Column
                }, o.createElement(c._23, {
                    fontSize: c.L.Size4,
                    "data-test-selector": "video-error-message"
                }, Object(r.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "VideoNotFoundPage")), o.createElement(c._23, {
                    fontSize: c.L.Size4,
                    "data-test-selector": "video-error-cta"
                }, Object(r.d)("In the meantime, take a look at these other videos instead.", "VideoNotFoundPage")))), o.createElement(c.V, {
                    fullWidth: !0,
                    padding: {
                        x: 5
                    }
                }, t))
            });
        a.d(t, "VideoNotFoundPage", function() {
            return s
        })
    }
});
//# sourceMappingURL=pages.video-watch.components.video-not-found-page-c40d91685e37d38c223b5b3585c723dc.js.map