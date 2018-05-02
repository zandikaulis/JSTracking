webpackJsonp([120], {
    "8uM1": function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("TToO"),
            r = e("GiK3"),
            s = e("6sO2"),
            i = e("QRuM"),
            a = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o.__extends(n, t), n.prototype.componentDidMount = function() {
                    s.o.setPageTitle(Object(s.d)("Permissions", "DashboardPermissionsPage"))
                }, n.prototype.render = function() {
                    return r.createElement(i.b, {
                        name: "twilight_dashboard_permissions",
                        isStaff: this.props.isStaff
                    }, r.createElement("div", null, r.createElement("h1", null, "Hello ", this.props.isStaff ? "staff" : "normal")))
                }, n
            }(r.Component),
            f = e("3zLD"),
            u = e("RH2O"),
            c = e("j7/Y"),
            p = e("w9tK"),
            l = e("vH/s"),
            d = e("Aj/L"),
            m = e("CSlQ");
        var O = Object(f.compose)(Object(m.d)("PermissionsPage", {
            destination: p.a.DashboardPermissions,
            autoReportInteractive: !0
        }), Object(c.a)({
            location: l.PageviewLocation.DashboardPermissions
        }), Object(u.b)(function(t) {
            var n = Object(d.c)(t);
            return {
                isStaff: n && n.roles && n.roles.isStaff
            }
        }))(a);
        e.d(n, "PermissionsPageComponent", function() {
            return a
        }), e.d(n, "PermissionsPage", function() {
            return O
        })
    },
    QRuM: function(t, n, e) {
        "use strict";
        var o, r = e("TToO"),
            s = e("GiK3"),
            i = e("6sO2");
        ! function(t) {
            t.On = "on", t.Off = "off", t.StaffOnly = "staff"
        }(o || (o = {}));
        var a = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r.__extends(n, t), n.prototype.render = function() {
                    var t = i.b.get(this.props.name, o.Off);
                    return t === o.On || t === o.StaffOnly && this.props.isStaff ? this.props.children : null
                }, n
            }(s.Component),
            f = a;
        e.d(n, "a", function() {
            return o
        }), e.d(n, "c", function() {
            return a
        }), e.d(n, "b", function() {
            return f
        })
    }
});
//# sourceMappingURL=pages.dashboard-permissions-e32937b8b487927bc4f59f9daaa9c04c.js.map