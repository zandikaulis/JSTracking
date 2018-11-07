(window.webpackJsonp = window.webpackJsonp || []).push([
    [93], {
        to0h: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                o = n("wIs1"),
                i = n("kRBY"),
                r = n("mrSG"),
                s = n("q1tI"),
                l = n("2INN"),
                c = n("ZS2+"),
                p = n("76Lv"),
                u = n("5ELF"),
                d = n("Ue10"),
                m = c.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(185)]).then(n.bind(null, "FD0w"))
                }, "BitsLandingPage"),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(d.Xa, {
                            className: "bits-root " + Object(p.b)(this.props.theme),
                            position: d.jb.Absolute,
                            overflow: d.cb.Hidden,
                            attachRight: !0,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            margin: {
                                top: 5
                            }
                        }, s.createElement(u.a, {
                            darkModeEnabled: !0
                        }), s.createElement(d.Xa, {
                            display: d.X.Flex,
                            flexWrap: d.Ba.NoWrap,
                            fullHeight: !0,
                            position: d.jb.Relative
                        }, s.createElement(d.Pa, {
                            display: d.X.Flex,
                            position: d.jb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement("main", {
                            className: "bits-root__main"
                        }, s.createElement(l.a, {
                            path: "/bits",
                            component: m
                        })))))
                    }, t
                }(s.Component);
            var b = Object(a.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded,
                        isLoggedIn: Object(i.f)(e),
                        theme: e.ui.theme
                    }
                })(h),
                f = Object(o.a)(b);
            n.d(t, "BitsRoot", function() {
                return f
            })
        }
    }
]);