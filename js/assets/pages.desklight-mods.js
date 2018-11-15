(window.webpackJsonp = window.webpackJsonp || []).push([
    [66], {
        "1rIY": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                o = n("q1tI"),
                a = n("/7QA"),
                i = n("2Ygb");

            function s(e, t) {
                var n = o.createContext(t),
                    s = n.Consumer,
                    c = n.Provider;
                return {
                    withContext: function(t) {
                        return function(n) {
                            var a;
                            return (a = function(e) {
                                function a() {
                                    return null !== e && e.apply(this, arguments) || this
                                }
                                return r.__extends(a, e), a.prototype.render = function() {
                                    var e = this;
                                    return o.createElement(s, null, function(a) {
                                        var i = t(a);
                                        return o.createElement(n, r.__assign({}, e.props, i))
                                    })
                                }, a
                            }(o.Component)).displayName = Object(i.a)("With" + e, n), a
                        }
                    },
                    InnerProvider: function(t) {
                        function n() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return r.__extends(n, t), n.prototype.componentDidMount = function() {
                            "object" === typeof this.props.value && this.props.value || a.k.error(new Error(n.displayName + " rendered without an appropriate initial value"), "Set an initial value in your provider component at mount time.")
                        }, n.prototype.render = function() {
                            return o.createElement(c, {
                                value: this.props.value
                            }, this.props.children)
                        }, n.displayName = "Inner" + e + "Provider", n
                    }(o.Component)
                }
            }
        },
        "4Agi": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                o = n("q1tI"),
                a = n("4p7I"),
                i = n("yoKv"),
                s = n("ZS2+"),
                c = n("ad4Y"),
                u = n("/MKj"),
                l = n("fvjX"),
                p = n("aCAx"),
                d = n("9x10");
            var m = Object(u.connect)(null, function(e) {
                    return Object(l.bindActionCreators)({
                        showModal: p.d
                    }, e)
                })(d.a),
                f = n("Ue10"),
                h = s.a.wrap(function() {
                    return n.e(138).then(n.bind(null, "Mg9V"))
                }, "DesklightModsAvailableGamesPage"),
                v = s.a.wrap(function() {
                    return n.e(137).then(n.bind(null, "UYLc"))
                }, "GameRoot"),
                b = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(m, null, o.createElement(c.a, null, o.createElement(f.Ya, {
                            className: "mods-root",
                            fullWidth: !0,
                            fullHeight: !0
                        }, o.createElement(i.a, null, o.createElement(a.a, {
                            exact: !0,
                            path: "/mods",
                            component: h
                        }), o.createElement(a.a, {
                            path: "/mods/games/:gameId",
                            component: v
                        })))))
                    }, t
                }(o.Component);
            n.d(t, "DesklightModsRoot", function() {
                return b
            })
        },
        "9x10": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("q1tI"),
                a = n("1rIY"),
                i = n("/MKj"),
                s = n("fvjX"),
                c = n("aCAx"),
                u = n("/7QA"),
                l = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(l.Fb, {
                            background: l.r.Base,
                            padding: 2
                        }, o.createElement(l.Ya, {
                            display: l.X.Flex,
                            justifyContent: l.Xa.Center,
                            alignItems: l.f.Center,
                            flexDirection: l.Aa.Column
                        }, o.createElement(l.W, null, this.props.message), o.createElement(l.Ya, {
                            margin: {
                                top: 2
                            }
                        }, o.createElement(l.z, {
                            onClick: this.props.onClose
                        }, Object(u.d)("Ok", "ModsNotificationModal")))))
                    }, t
                }(o.Component),
                d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClose = function() {
                            t.props.onClose && t.props.onClose(), t.props.closeModal()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(p, {
                            message: this.props.message,
                            onClose: this.onClose
                        })
                    }, t
                }(o.Component);
            var m, f = Object(i.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: c.c
                }, e)
            })(d);
            n.d(t, "b", function() {
                return v
            }), n.d(t, "a", function() {
                return b
            });
            var h = (m = Object(a.a)("ModsNotificationContext", {
                    showModal: function() {
                        return null
                    }
                })).InnerProvider,
                v = m.withContext,
                b = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.showNotificationModal = function(e, t) {
                            n.props.showModal(f, {
                                message: e,
                                onClose: t
                            })
                        }, n.state = {
                            showModal: n.showNotificationModal
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(h, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(o.Component)
        },
        ad4Y: function(e, t, n) {
            "use strict";
            var r, o = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                s = n("1rIY"),
                c = (r = Object(s.a)("GameInstanceContext", {
                    gameInstances: [],
                    fetchGameInstances: function() {
                        return null
                    }
                })).InnerProvider,
                u = r.withContext,
                l = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.fetchGameInstances = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!i.p.integrations.mods) return [3, 4];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, i.p.integrations.mods.getGameInstances()];
                                        case 2:
                                            return e = t.sent(), this.setState({
                                                gameInstances: e.gameInstances
                                            }), [3, 4];
                                        case 3:
                                            return t.sent(), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = {
                            gameInstances: [],
                            fetchGameInstances: n.fetchGameInstances
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.fetchGameInstances(), i.p.integrations.mods && (this.gameInstanceSubscriber = i.p.integrations.mods.onGameInstancesChanged(function() {
                            e.fetchDebouncer || (e.fetchDebouncer = window.setTimeout(function() {
                                e.fetchGameInstances(), e.fetchDebouncer = 0
                            }, 300))
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.fetchDebouncer = 0, this.gameInstanceSubscriber()
                    }, t.prototype.render = function() {
                        return a.createElement(c, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(a.Component);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "a", function() {
                return l
            })
        }
    }
]);