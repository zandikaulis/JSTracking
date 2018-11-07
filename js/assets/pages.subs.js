(window.webpackJsonp = window.webpackJsonp || []).push([
    [91], {
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
                l = n("q1tI"),
                c = n("jKe7"),
                s = n("2INN"),
                u = n("ZS2+"),
                f = n("/8Zs"),
                p = n("GnwI"),
                m = n("5ELF"),
                d = n("Ue10"),
                b = (n("4S9A"), u.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(191)]).then(n.bind(null, "dNH5"))
                }, "SubsLandingPage")),
                h = u.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(190)]).then(n.bind(null, "15ff"))
                }, "SubsBroadcasterPage"),
                w = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(d.Xa, {
                            className: "twilight-root",
                            position: d.jb.Absolute,
                            overflow: d.cb.Hidden,
                            attachRight: !0,
                            attachBottom: !0,
                            attachLeft: !0
                        }, l.createElement(m.a, null), l.createElement(d.Xa, {
                            display: d.X.Flex,
                            flexWrap: d.Ba.NoWrap,
                            fullHeight: !0,
                            position: d.jb.Relative
                        }, l.createElement(d.Pa, {
                            position: d.jb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0
                        }, l.createElement("main", {
                            className: f.a
                        }, l.createElement(c.a, null, l.createElement(s.a, {
                            path: "/subs/:channelName",
                            component: h
                        }), l.createElement(s.a, {
                            path: "/subs",
                            component: b
                        }))))))
                    }, t = i.__decorate([Object(p.b)("SubsRoot", {
                        autoReportInteractive: !0
                    })], t)
                }(l.Component);
            var g = Object(a.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded,
                        isLoggedIn: Object(r.f)(e),
                        theme: e.ui.theme
                    }
                })(w),
                j = Object(o.a)(g);
            n.d(t, "SubsRoot", function() {
                return j
            })
        }
    }
]);