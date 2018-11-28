(window.webpackJsonp = window.webpackJsonp || []).push([
    [139], {
        Mg9V: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                s = n("cr+I"),
                r = n("q1tI"),
                i = n("fvjX"),
                o = n("V+GM"),
                c = n("NvVO"),
                d = n("2xye"),
                l = n("ad4Y");
            var u = n("Wzgq"),
                m = n("GnwI"),
                p = n("TSYQ"),
                f = n("/7QA"),
                g = n("Ue10"),
                h = (n("rqy/"), function(e) {
                    var t = "https://static-cdn.jtvnw.net/ttv-boxart/" + encodeURIComponent(e.game.name) + "-285x280.jpg",
                        n = Object(f.d)("Not installed", "DesklightModsGameCard");
                    e.game.installed && (n = Object(f.d)("{addonCount} addons installed", {
                        addonCount: e.game.addonInstalledCount
                    }, "DesklightModsGameCard"));
                    var a = p("desklight-mods-game-card", {
                        "desklight-mods-game-card--not-installed": !e.game.installed
                    });
                    return r.createElement(g.Ya, {
                        className: a
                    }, r.createElement(g.y, {
                        unavailable: !e.game.installed,
                        title: e.game.name,
                        info: n,
                        src: t,
                        alt: e.game.name
                    }))
                }),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            gameInstances: []
                        }, t.renderGameCards = function() {
                            var e = t.props.games.filter(function(e) {
                                    return e.installed
                                }).sort(function(e, t) {
                                    return e.name.localeCompare(t.name)
                                }),
                                n = t.props.games.filter(function(e) {
                                    return !e.installed
                                }).sort(function(e, t) {
                                    return e.name.localeCompare(t.name)
                                });
                            return e.concat(n).map(function(e) {
                                return r.createElement(g.Ya, {
                                    key: e.id,
                                    margin: {
                                        bottom: 2
                                    }
                                }, r.createElement(g.U, {
                                    to: "/mods/games/" + e.id,
                                    hoverUnderlineNone: !0
                                }, r.createElement(h, {
                                    game: e
                                })))
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderGameCards();
                        return r.createElement(g.Ya, {
                            margin: {
                                x: 3,
                                top: 1
                            }
                        }, r.createElement(g.cc, {
                            childWidth: g.dc.Small,
                            placeholderItems: 10
                        }, e))
                    }, t
                }(r.Component),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            enabledGames: [],
                            listings: []
                        }, t.fetchAvailableGames = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = Object(s.stringify)({
                                                supportsAddons: !0
                                            }), t = "api/game?" + e, [4, Object(u.a)(t)];
                                        case 1:
                                            return 200 !== (n = a.sent()).status ? [3, 3] : [4, n.json()];
                                        case 2:
                                            (r = a.sent()) && this.setState({
                                                enabledGames: r
                                            }, this.createGameListings), a.label = 3;
                                        case 3:
                                            return this.props.latencyTracking.reportInteractive(), [2]
                                    }
                                })
                            })
                        }, t.createGameListings = function() {
                            var e = t.state.enabledGames.map(function(e) {
                                var n = t.props.gameInstances.find(function(t) {
                                    return t.gameId === e.id
                                });
                                return function(e, t) {
                                    return {
                                        id: e.id,
                                        name: e.name,
                                        slug: e.slug,
                                        dateModified: e.dateModified,
                                        supportsAddons: e.supportsAddons,
                                        twitchGameId: e.twitchGameId,
                                        addonInstalledCount: t && t.installedAddonCount || 0,
                                        installed: !!t
                                    }
                                }(e, n)
                            });
                            t.setState({
                                listings: e
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchAvailableGames()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.gameInstances.length !== this.props.gameInstances.length && this.fetchAvailableGames()
                    }, t.prototype.render = function() {
                        return r.createElement(v, {
                            games: this.state.listings
                        })
                    }, t
                }(r.Component);
            var A = Object(i.compose)(Object(m.b)("DesklightModsGamesAvailablePage", {
                destination: c.a.DesklightModsGamesAvailable
            }), Object(o.a)({
                location: d.PageviewLocation.DesklightModsGamesAvailable
            }), Object(l.b)(function(e) {
                return {
                    gameInstances: e.gameInstances
                }
            }))(b);
            n.d(t, "DesklightModsAvailableGamesContainer", function() {
                return b
            }), n.d(t, "DesklightModsAvailableGamesPage", function() {
                return A
            })
        },
        UP6V: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("mrSG"),
                s = n("/7QA"),
                r = n("kRBY");

            function i(e, t) {
                var n = Object(r.e)(s.p.store.getState());
                if (!n) return fetch(e, t);
                var i, c = t ? t.headers : {};
                if (Array.isArray(c)) {
                    var d = (i = c.slice()).findIndex(function(e) {
                        return "Authorization" === e[0]
                    });
                    d >= 0 && i.splice(d, 1), i.push(["Authorization", o(n)])
                } else c instanceof Headers ? (i = new Headers(c)).set("Authorization", o(n)) : i = a.__assign({}, c, {
                    Authorization: o(n)
                });
                return fetch(e, a.__assign({}, t, {
                    headers: i
                }))
            }

            function o(e) {
                return "OAuth " + e.authToken
            }
        },
        Wzgq: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                s = n("UP6V"),
                r = n("/7QA"),
                i = n("zB42"),
                o = r.p.config.buildType === i.a.Production ? "https://addons-ecs.forgesvc.net" : "https://addon-service-ecs-staging.elerium.wtf";

            function c(e, t) {
                var n, r = t ? t.headers : {},
                    i = o + "/" + e;
                if (Array.isArray(r)) {
                    var c = (n = r.slice()).findIndex(function(e) {
                        return "Content-Type" === e[0]
                    });
                    c >= 0 && n.splice(c, 1), n.push(["Content-Type", "application/json"]);
                    var d = n.findIndex(function(e) {
                        return "Accept" === e[0]
                    });
                    d >= 0 && n.splice(d, 1), n.push(["Accept", "application/json"])
                } else r instanceof Headers ? ((n = new Headers(r)).set("Content-Type", "application/json"), n.set("Accept", "application/json")) : n = a.__assign({}, r, {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                });
                return Object(s.a)(i, a.__assign({}, t, {
                    headers: n
                }))
            }
            n.d(t, "a", function() {
                return c
            })
        },
        "rqy/": function(e, t, n) {}
    }
]);