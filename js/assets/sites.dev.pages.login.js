webpackJsonp([73], {
    "7e0v": function(e, t) {},
    "8L33": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n("RH2O"),
            i = n("Aj/L"),
            l = n("TToO"),
            r = n("GiK3"),
            c = n("F8kA"),
            a = n("6sO2"),
            s = n("NSHk"),
            g = n("CSUN"),
            p = n("CSlQ"),
            d = n("Odds"),
            u = (n("7e0v"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.login = function(e) {
                        e.preventDefault();
                        var t = Object(g.a)(s.a.Login);
                        window.location.assign(t)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? r.createElement(c.c, {
                        to: "/"
                    }) : r.createElement(d._8, {
                        fullHeight: !0,
                        fullWidth: !0,
                        display: d.R.Flex,
                        flexDirection: d.T.Column,
                        position: d._15.Absolute,
                        attachTop: !0,
                        attachBottom: !0,
                        breakpointSmall: {
                            flexDirection: d.T.Row
                        },
                        className: "dev-login-page"
                    }, r.createElement(d._35, {
                        flexGrow: 1,
                        flexShrink: 1,
                        display: d.R.Flex,
                        background: d.n.Accent,
                        justifyContent: d._7.Center,
                        alignItems: d.c.Center,
                        className: "dev-login-page__logo-panel"
                    }, r.createElement(d.O, {
                        to: "/"
                    }, r.createElement(d._35, {
                        color: d.K.Overlay
                    }, r.createElement(d._24, {
                        asset: d._25.LogoTwitchDevelopers,
                        type: d._26.Inherit,
                        width: 220,
                        height: 142
                    })))), r.createElement(d._8, {
                        display: d.R.Flex,
                        flexGrow: 1,
                        flexShrink: 1,
                        className: "dev-login-page__login-panel",
                        justifyContent: d._7.Center,
                        alignItems: d.c.Center
                    }, r.createElement(d._8, {
                        padding: {
                            x: 4
                        }
                    }, r.createElement(d._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(d.Q, {
                        type: d._49.P,
                        fontSize: d.V.Size3
                    }, Object(a.d)("Welcome to the Twitch Developer Console, where code enhances live streaming experiences", "DevLogin"))), r.createElement(d.v, {
                        onClick: this.login,
                        size: d.z.Large,
                        icon: d._25.LogoGlitch
                    }, Object(a.d)("Login with Twitch", "DevLogin")))))
                }, t = l.__decorate([Object(p.d)("DevLogin")], t)
            }(r.Component));
        var m = Object(o.b)(function(e) {
            return {
                isLoggedIn: Object(i.d)(e)
            }
        })(u);
        n.d(t, "DevLoginPage", function() {
            return m
        })
    }
});
//# sourceMappingURL=sites.dev.pages.login-1c19c03e0c05cf1d27fc4f4ba02b2149.js.map