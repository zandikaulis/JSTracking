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
                d = n("/8Zs"),
                f = n("GnwI"),
                p = n("5ELF"),
                m = n("Ue10"),
                h = (n("4S9A"), s.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(178)]).then(n.bind(null, "dNH5"))
                }, "SubsLandingPage")),
                b = s.a.wrap(function() {
                    return n.e(177).then(n.bind(null, "15ff"))
                }, "SubsBroadcasterPage"),
                w = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(m.Va, {
                            className: "twilight-root",
                            position: m.db.Absolute,
                            overflow: m.Ya.Hidden,
                            attachRight: !0,
                            attachBottom: !0,
                            attachLeft: !0
                        }, c.createElement(p.a, null), c.createElement(m.Va, {
                            display: m.W.Flex,
                            flexWrap: m.Z.NoWrap,
                            fullHeight: !0,
                            position: m.db.Relative
                        }, c.createElement(m.Na, {
                            position: m.db.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("main", {
                            className: d.a
                        }, c.createElement(l.a, null, c.createElement(u.a, {
                            path: "/subs/:channelName",
                            component: b
                        }), c.createElement(u.a, {
                            path: "/subs",
                            component: h
                        }))))))
                    }, t = i.__decorate([Object(f.c)("SubsRoot", {
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