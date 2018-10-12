(window.webpackJsonp = window.webpackJsonp || []).push([
    [36], {
        "QE/F": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                o = n("fvjX"),
                r = n("d0ua"),
                u = n("mrSG"),
                c = n("q1tI"),
                i = n("ZS2+"),
                s = n("V+GM"),
                l = n("NvVO"),
                d = n("2xye"),
                p = n("GnwI"),
                m = n("yS/J"),
                f = n("Bh3T"),
                b = n("egMT"),
                g = n("EOHf"),
                S = n("Ue10"),
                h = (n("cvcW"), i.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(127)]).then(n.bind(null, "nRp3"))
                }, "SquadStream")),
                q = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.props.enableSquadMode()
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.disableSquadMode()
                    }, t.prototype.render = function() {
                        return Object(b.a)(this.props.match.params.channelLogin) ? c.createElement(c.Fragment, null, c.createElement(f.b, {
                            className: "squad-stream-page__root",
                            suppressScrollX: !0
                        }), c.createElement(S.xb, {
                            fullWidth: !0,
                            fullHeight: !0,
                            className: "squad-stream-page",
                            background: S.r.Base
                        }, c.createElement(h, {
                            initialChannelLogin: this.props.match.params.channelLogin,
                            defaultLayout: m.a.Focus
                        }))) : c.createElement(g.a, null)
                    }, t
                }(c.Component),
                v = Object(o.compose)(Object(p.c)("SquadStreamPage", {
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
            n.d(t, "SquadStreamPage", function() {
                return w
            })
        },
        cvcW: function(e, t, n) {},
        egMT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return i
            });
            var a = n("/7QA"),
                o = "squad_stream_dashboard",
                r = "squad_stream_feature",
                u = "squad_stream_whitelist";

            function c(e) {
                return "on" === a.b.get(r, "off") && a.b.get(u, []).includes(e)
            }

            function i(e) {
                return "on" === a.b.get(o, "off") && a.b.get(u, []).includes(e)
            }
        },
        "yS/J": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Columns = "columns", e.Focus = "focus", e.VideoOnly = "video-only"
                }(a || (a = {}))
        }
    }
]);