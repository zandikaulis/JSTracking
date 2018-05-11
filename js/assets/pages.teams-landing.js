webpackJsonp([84], {
    EtaR: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("TToO"),
            i = t("GiK3"),
            o = t("2KeS"),
            r = t("6sO2"),
            c = t("j7/Y"),
            s = t("w9tK"),
            u = t("vH/s"),
            d = t("CSlQ"),
            p = t("TP6L"),
            l = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {}, n
                }
                return a.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    return this.isEnabled(), i.createElement(p.a, null)
                }, n.prototype.isEnabled = function() {
                    return r.b.get("teams_landing_launch", !1)
                }, n
            }(i.Component),
            g = Object(o.d)(Object(d.d)("TeamsLandingPage", {
                destination: s.a.TeamsLandingPage
            }), Object(c.a)({
                location: u.PageviewLocation.TeamsLandingPage
            }))(l);
        t.d(n, "TeamsLandingPage", function() {
            return g
        })
    }
});
//# sourceMappingURL=pages.teams-landing-cd02b1852875beae2d66ef16df20ccad.js.map