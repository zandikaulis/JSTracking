(window.webpackJsonp = window.webpackJsonp || []).push([
    [151], {
        "Le/2": function(t, n, e) {
            "use strict";
            e.r(n);
            var o = e("/MKj"),
                r = e("fvjX"),
                i = e("V+GM"),
                a = e("y5D0"),
                c = e("NvVO"),
                s = e("2xye"),
                u = e("kRBY"),
                d = e("GnwI"),
                p = e("mrSG"),
                b = e("q1tI"),
                f = e("Ue10"),
                g = function(t) {
                    function n() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return p.__extends(n, t), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, n.prototype.render = function() {
                        return b.createElement(f.Xa, null)
                    }, n
                }(b.Component);
            var l = Object(r.compose)(Object(o.connect)(function(t) {
                return {
                    isLoggedIn: Object(u.f)(t)
                }
            }, function(t) {
                return Object(r.bindActionCreators)({
                    logout: a.f
                }, t)
            }), Object(d.b)("DashboardModerationSettingsPage", {
                destination: c.a.DashboardSettingsModeration
            }), Object(i.a)({
                location: s.PageviewLocation.DashboardSettingsModeration
            }))(g);
            e.d(n, "DashboardModerationSettingsPage", function() {
                return l
            })
        }
    }
]);