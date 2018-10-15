(window.webpackJsonp = window.webpackJsonp || []).push([
    [90], {
        "/8Zs": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = "twilight-main"
        },
        "4S9A": function(e, t, n) {},
        j6T7: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                o = n("wIs1"),
                r = n("kRBY"),
                i = n("mrSG"),
                c = n("q1tI"),
                l = n("jKe7"),
                u = n("2INN"),
                s = n("ZS2+"),
                f = n("/8Zs"),
                p = n("GnwI"),
                d = n("5ELF"),
                m = n("Ue10"),
                b = (n("4S9A"), s.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(172)]).then(n.bind(null, "dNH5"))
                }, "SubsLandingPage")),
                h = s.a.wrap(function() {
                    return n.e(171).then(n.bind(null, "15ff"))
                }, "SubsBroadcasterPage"),
                w = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(m.Wa, {
                            className: "twilight-root",
                            position: m.eb.Absolute,
                            overflow: m.Za.Hidden,
                            attachRight: !0,
                            attachBottom: !0,
                            attachLeft: !0
                        }, c.createElement(d.a, null), c.createElement(m.Wa, {
                            display: m.X.Flex,
                            flexWrap: m.Aa.NoWrap,
                            fullHeight: !0,
                            position: m.eb.Relative
                        }, c.createElement(m.Oa, {
                            position: m.eb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("main", {
                            className: f.a
                        }, c.createElement(l.a, null, c.createElement(u.a, {
                            path: "/subs/:channelName",
                            component: h
                        }), c.createElement(u.a, {
                            path: "/subs",
                            component: b
                        }))))))
                    }, t = i.__decorate([Object(p.b)("SubsRoot", {
                        autoReportInteractive: !0
                    })], t)
                }(c.Component);
            var g = Object(a.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded,
                        isLoggedIn: Object(r.f)(e),
                        theme: e.ui.theme
                    }
                })(w),
                E = Object(o.a)(g);
            n.d(t, "SubsRoot", function() {
                return E
            })
        }
    }
]);