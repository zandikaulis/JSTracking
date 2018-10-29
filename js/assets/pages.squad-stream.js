(window.webpackJsonp = window.webpackJsonp || []).push([
    [37], {
        "QE/F": function(e, n, t) {
            "use strict";
            t.r(n);
            var a = t("/MKj"),
                o = t("fvjX"),
                r = t("d0ua"),
                u = t("mrSG"),
                c = t("q1tI"),
                i = t("ZS2+"),
                s = t("V+GM"),
                l = t("NvVO"),
                d = t("2xye"),
                p = t("GnwI"),
                m = t("yS/J"),
                f = t("Bh3T"),
                b = t("egMT"),
                S = t("EOHf"),
                g = t("Ue10"),
                h = (t("cvcW"), i.a.wrap(function() {
                    return Promise.all([t.e(0), t.e(128)]).then(t.bind(null, "nRp3"))
                }, "SquadStream")),
                q = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(n, e), n.prototype.componentWillMount = function() {
                        this.props.enableSquadMode()
                    }, n.prototype.componentWillUnmount = function() {
                        this.props.disableSquadMode()
                    }, n.prototype.render = function() {
                        return Object(b.a)(this.props.match.params.channelLogin) ? c.createElement(c.Fragment, null, c.createElement(f.b, {
                            className: "squad-stream-page__root",
                            suppressScrollX: !0
                        }), c.createElement(g.Bb, {
                            fullWidth: !0,
                            fullHeight: !0,
                            className: "squad-stream-page",
                            background: g.r.Base
                        }, c.createElement(h, {
                            initialChannelLogin: this.props.match.params.channelLogin,
                            defaultLayout: m.a.Focus
                        }))) : c.createElement(S.a, null)
                    }, n
                }(c.Component),
                v = Object(o.compose)(Object(p.b)("SquadStreamPage", {
                    destination: l.a.SquadStreamPage,
                    autoReportInteractive: !0
                }), Object(s.a)({
                    location: d.PageviewLocation.SquadStreamPage
                }))(q);
            var w = Object(a.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    disableSquadMode: r.B,
                    enableSquadMode: r.E
                }, e)
            })(v);
            t.d(n, "SquadStreamPage", function() {
                return w
            })
        },
        cvcW: function(e, n, t) {},
        egMT: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            }), t.d(n, "b", function() {
                return s
            });
            var a = t("/7QA"),
                o = "squad_stream_dashboard",
                r = "squad_stream_feature",
                u = "squad_stream_whitelist";

            function c(e) {
                var n = a.b.get(u, []);
                return n.includes("*") || n.includes(e)
            }

            function i(e) {
                return "on" === a.b.get(r, "off") && c(e)
            }

            function s(e) {
                return "on" === a.b.get(o, "off") && c(e)
            }
        },
        "yS/J": function(e, n, t) {
            "use strict";
            var a;
            t.d(n, "a", function() {
                    return a
                }),
                function(e) {
                    e.Columns = "columns", e.Focus = "focus", e.VideoOnly = "video-only"
                }(a || (a = {}))
        }
    }
]);