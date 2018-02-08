webpackJsonp([63], {
    o8EG: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("RH2O"),
            o = t("2KeS"),
            i = t("+xm8"),
            a = t("f2i/"),
            c = t("Aj/L"),
            g = t("U7vG"),
            u = t("CIox"),
            s = t("6sO2"),
            b = t("yWCw"),
            d = Object(r.b)(function(e) {
                var n = Object(c.c)(e);
                return {
                    isLoggedIn: Object(c.d)(e),
                    userLogin: n && n.login
                }
            }, function(e) {
                return Object(o.b)({
                    login: function() {
                        return Object(a.f)(i.a.ManagerRedirect)
                    }
                }, e)
            })(function(e) {
                return e.isLoggedIn && e.userLogin ? g.createElement(u.a, {
                    to: "/" + e.userLogin + e.location.pathname
                }) : (e.login(), g.createElement(b.a, {
                    message: Object(s.d)("You must be logged in to view this page", "ManagerRedirectPage")
                }))
            });
        t.d(n, "ManagerRedirectPage", function() {
            return d
        })
    }
});
//# sourceMappingURL=pages.video-manager.components.manager-redirect-page-f9af9cbae8fc962c3e31d3068cca6329.js.map