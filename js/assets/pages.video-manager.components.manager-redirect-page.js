webpackJsonp([66], {
    o8EG: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("RH2O"),
            i = t("2KeS"),
            o = t("+xm8"),
            a = t("f2i/"),
            c = t("Aj/L"),
            g = t("GiK3"),
            u = t("CIox"),
            s = t("6sO2"),
            b = t("yWCw");
        var d = Object(r.b)(function(e) {
            var n = Object(c.c)(e);
            return {
                isLoggedIn: Object(c.d)(e),
                userLogin: n && n.login
            }
        }, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(a.f)(o.a.ManagerRedirect)
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
//# sourceMappingURL=pages.video-manager.components.manager-redirect-page-ceaf043d10af7355b763815f4bce9912.js.map