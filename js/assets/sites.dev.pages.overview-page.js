webpackJsonp([120], {
    "4ci7": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("2KeS"),
            o = n("j7/Y"),
            s = n("mIvh"),
            c = n("w9tK"),
            p = n("vH/s"),
            u = n("CSlQ"),
            l = n("77kt"),
            d = n("6sO2"),
            h = n("Odds"),
            m = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return a.__extends(e, t), e.prototype.render = function() {
                    return r.createElement(h._35, {
                        className: "tenant-panel",
                        display: h.R.Flex,
                        flexDirection: h.T.Column,
                        border: !0
                    }, r.createElement(h._8, {
                        className: "tenant-panel__info",
                        display: h.R.Block,
                        textAlign: h._45.Center,
                        margin: {
                            y: 1
                        },
                        padding: {
                            top: 2
                        }
                    }, r.createElement(h._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(h.Q, {
                        type: h._49.H2,
                        className: "tenant-panel__count",
                        color: h.K.Alt2
                    }, this.props.tenant.count)), r.createElement(h.Q, {
                        type: h._49.H3,
                        transform: h._48.Uppercase,
                        className: "tenant-panel__name",
                        color: h.K.Alt2
                    }, this.props.tenant.name)), r.createElement(h._35, {
                        className: "tenant-panel__action",
                        display: h.R.Flex,
                        padding: {
                            y: 1
                        },
                        background: h.n.Alt2,
                        justifyContent: h._7.Center
                    }, r.createElement(h.v, {
                        type: h.B.Hollow,
                        linkTo: this.props.tenant.entryUrl
                    }, r.createElement(h.Q, {
                        transform: h._48.Uppercase
                    }, Object(d.d)("View", "DevTenantPanel"), " ", this.props.tenant.name))))
                }, e = a.__decorate([Object(u.d)("DevTenantPanel", {
                    autoReportInteractive: !0
                })], e)
            }(r.Component),
            v = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return a.__extends(e, t), e.prototype.render = function() {
                    var t = this.props.tenants.map(function(t, e) {
                        return r.createElement(h.L, {
                            cols: {
                                default: 12,
                                sm: 6,
                                md: 3
                            },
                            key: e
                        }, r.createElement(h._8, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(m, {
                            tenant: t
                        })))
                    });
                    return r.createElement(h.Y, {
                        gutterSize: h.Z.Small
                    }, t)
                }, e
            }(r.Component),
            f = Object(i.d)(Object(u.d)("DevOverviewPagePresentation", {
                autoReportInteractive: !0
            }))(v),
            _ = [{
                name: "Extensions",
                entryUrl: "https://dev.twitch.tv/dashboard/extensions",
                count: 0
            }, {
                name: "Apps",
                entryUrl: "/console/apps",
                count: 0
            }, {
                name: "Games",
                entryUrl: "https://dev.twitch.tv/dashboard/games",
                count: 0
            }, {
                name: "Drops",
                entryUrl: "https://dev.twitch.tv/dashboard/drops",
                count: 0
            }],
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.state = {
                        tenants: _
                    }, e.loadApps = function() {
                        return a.__awaiter(e, void 0, void 0, function() {
                            var t, e, n;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 4, , 5]), [4, Object(l.a)(s.a + "/kraken/apps", {
                                            headers: {
                                                "Content-Type": "application/json",
                                                Accept: "application/vnd.twitchtv.v5+json; charset=UTF-8"
                                            }
                                        })];
                                    case 1:
                                        return 200 !== (t = a.sent()).status ? [3, 3] : [4, t.json()];
                                    case 2:
                                        (e = a.sent()) && (n = e.apps.filter(function(t) {
                                            return !t.name.startsWith("Extension ")
                                        }), this.updateTenant("Apps", n.length)), a.label = 3;
                                    case 3:
                                        return [3, 5];
                                    case 4:
                                        return a.sent(), [2];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, e.updateTenant = function(t, n) {
                        var a, r = e.state.tenants.findIndex(function(e) {
                                return e.name === t
                            }),
                            i = Object.assign({}, e.state.tenants[r], {
                                count: n
                            }),
                            o = Object.assign([], e.state.tenants, ((a = {})[r] = i, a));
                        e.setState({
                            tenants: o
                        })
                    }, e
                }
                return a.__extends(e, t), e.prototype.componentDidMount = function() {
                    this.loadApps()
                }, e.prototype.render = function() {
                    return r.createElement(f, {
                        tenants: this.state.tenants
                    })
                }, e = a.__decorate([Object(u.d)("DevOverviewPage", {
                    destination: c.a.DevSiteOverview
                }), Object(o.a)({
                    location: p.PageviewLocation.DevSiteOverview
                })], e)
            }(r.Component),
            y = Object(i.d)(Object(u.d)("DevOverviewPage", {
                destination: c.a.DevSiteOverview
            }), Object(o.a)({
                location: p.PageviewLocation.DevSiteOverview
            }))(g);
        n.d(e, "DevOverviewPage", function() {
            return y
        })
    },
    "77kt": function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            var n, o = r.o.config.authSettings.clientID,
                s = e ? e.headers : {};
            if (Array.isArray(s)) {
                var c = (n = s.slice()).findIndex(function(t) {
                    return "Client-Id" === t[0]
                });
                c >= 0 && n.splice(c, 1), n.push(["Client-Id", o])
            } else s instanceof Headers ? (n = new Headers(s)).set("Client-Id", o) : n = a.__assign({}, s, {
                "Client-Id": o
            });
            return Object(i.a)(t, a.__assign({}, e, {
                headers: n
            }))
        };
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("rYDZ")
    },
    "j7/Y": function(t, e, n) {
        "use strict";
        var a = n("TToO"),
            r = n("OAwv"),
            i = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function c(t) {
            return function(e) {
                var n = function(n) {
                    function o(e) {
                        var r = n.call(this, e) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || t.skip && t.skip(r.props))) {
                                r.tracked = !0;
                                var e = {};
                                "function" == typeof t.properties ? e = t.properties(r.props) : t.properties && (e = a.__assign({}, t.properties));
                                var n = a.__assign({}, r.props);
                                n.location && n.location.state && (e.medium = n.location.state.medium, e.content = n.location.state.content, e.content_index = n.location.state.content_index);
                                var i = r.referenceTracking,
                                    o = i.content,
                                    c = i.medium,
                                    p = i.content_index;
                                s.o.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: c,
                                    content_index: p,
                                    location: t.location
                                }, e))
                            }
                        }, s.j.debug("pageViewTracking", t), e.rootLatencyTracker ? e.rootLatencyTracker.setLocation(t.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", t), r
                    }
                    return a.__extends(o, n), o.prototype.componentDidMount = function() {
                        var t = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(e, n) {
                            "REPLACE" !== n && (t.tracked = !1, t.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return i.createElement(e, a.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(t) {
                        var e = "" !== t.search ? r.parse(t.search) : {},
                            n = {
                                content: e.tt_content,
                                content_index: e.tt_content_index,
                                medium: e.tt_medium
                            };
                        if (delete e.tt_content, delete e.tt_content_index, delete e.tt_medium, n.medium || n.content) {
                            var a = "",
                                i = r.stringify(e);
                            i.length > 0 && (a = "?" + i), this.props.history.replace({
                                pathname: t.pathname,
                                hash: t.hash,
                                search: a
                            })
                        }
                        return n
                    }, o
                }(i.Component);
                return Object(o.f)(n)
            }
        }
        n.d(e, "a", function() {
            return c
        })
    },
    rYDZ: function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            var n = Object(i.c)(r.o.store.getState());
            if (!n) return fetch(t, e);
            var s, c = e ? e.headers : {};
            if (Array.isArray(c)) {
                var p = (s = c.slice()).findIndex(function(t) {
                    return "Authorization" === t[0]
                });
                p >= 0 && s.splice(p, 1), s.push(["Authorization", o(n)])
            } else c instanceof Headers ? (s = new Headers(c)).set("Authorization", o(n)) : s = a.__assign({}, c, {
                Authorization: o(n)
            });
            return fetch(t, a.__assign({}, e, {
                headers: s
            }))
        };
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("Aj/L");

        function o(t) {
            return "OAuth " + t.authToken
        }
    }
});
//# sourceMappingURL=sites.dev.pages.overview-page-133dcd562f3c93d8d2c857cab5ab5ffe.js.map