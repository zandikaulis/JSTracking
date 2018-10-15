(window.webpackJsonp = window.webpackJsonp || []).push([
    [199], {
        "6gnU": function(n, e) {
            function t() {
                return n.exports = t = Object.assign || function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, t.apply(this, arguments)
            }
            n.exports = t
        },
        ApsV: function(n, e, t) {
            var r = t("GG1Q");
            n.exports = function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), i.forEach(function(e) {
                        r(n, e, t[e])
                    })
                }
                return n
            }
        },
        GG1Q: function(n, e) {
            n.exports = function(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
        },
        Gc7M: function(n, e) {
            n.exports = function(n, e) {
                n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.__proto__ = e
            }
        },
        qodT: function(n, e) {
            function t(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                }
            }
            n.exports = function(n, e, r) {
                return e && t(n.prototype, e), r && t(n, r), n
            }
        },
        "zVe/": function(n, e, t) {
            "use strict";
            t.r(e);
            var r, i = t("ApsV"),
                a = t.n(i),
                o = t("qodT"),
                c = t.n(o);
            ! function(n) {
                n.NoDelay = "no_delay", n.NoDisplay = "no_display"
            }(r || (r = {}));
            var s, u;
            ! function(n) {
                n.PageView = "pageview", n.FiveMinutePlay = "5mp"
            }(s || (s = {})),
            function(n) {
                n.Live = "live", n.MainDir = "main_dir", n.GameDir = "game_dir", n.Vod = "vod", n.Profile = "profile", n.ContentGate = "content_gate", n.Clip = "clip"
            }(u || (u = {}));
            var h = function() {
                    function n() {}
                    var e = n.prototype;
                    return e.trackBranchEvent = function(n, e) {
                        this.isBranchAvailable() && window.branch.track(n, e)
                    }, e.fetchBranchURL = function(n, e, t, r) {
                        var i = this;
                        return new Promise(function(a, o) {
                            i.isBranchAvailable() || o(), window.branch.link({
                                campaign: e,
                                feature: n,
                                channel: "mobile_web",
                                data: {
                                    app_session_id: t,
                                    device_id: r
                                }
                            }, function(n, e) {
                                e ? a(e) : o(n)
                            })
                        })
                    }, e.showBranchJourney = function(n, e) {
                        if (this.isBranchAvailable() && ("undefined" == typeof localStorage || this.debugMode !== r.NoDisplay)) {
                            var t = a()({}, e.tags, {
                                app_session_id: e.app_session_id,
                                device_id: e.device_id
                            });
                            switch (n.type) {
                                case u.MainDir:
                                    window.branch.setBranchViewData({
                                        data: a()({}, t)
                                    });
                                    break;
                                case u.GameDir:
                                    window.branch.setBranchViewData({
                                        data: a()({}, t, {
                                            game: n.game
                                        })
                                    });
                                    break;
                                case u.Clip:
                                    window.branch.setBranchViewData({
                                        data: a()({}, t, {
                                            channel: n.channel,
                                            game: n.game
                                        })
                                    });
                                    break;
                                case u.Live:
                                case u.Vod:
                                case u.Profile:
                                case u.ContentGate:
                                    window.branch.setBranchViewData({
                                        data: a()({}, t, {
                                            channel: n.channel
                                        })
                                    });
                                    break;
                                default:
                                    this.handleUnknown(n)
                            }
                            this.trackBranchEvent(s.PageView, {
                                app_session_id: e.app_session_id,
                                device_id: e.device_id,
                                eligible_for: n.type
                            })
                        }
                    }, e.closeBranchJourney = function() {
                        this.isBranchAvailable() && window.branch.closeJourney()
                    }, e.addBranchListener = function(n) {
                        this.isBranchAvailable() && window.branch.addListener(n)
                    }, e.removeBranchListener = function(n) {
                        this.isBranchAvailable() && window.branch.removeListener(n)
                    }, e.setBranchIdentity = function(n) {
                        this.isBranchAvailable() && window.branch.setIdentity(n)
                    }, e.isBranchAvailable = function() {
                        return "undefined" != typeof window && !!window.branch
                    }, e.handleUnknown = function(n) {}, c()(n, [{
                        key: "debugMode",
                        get: function() {
                            return localStorage.getItem("tachyon_branch_journey_override")
                        }
                    }]), n
                }(),
                p = t("Gc7M"),
                d = t.n(p),
                l = t("q1tI"),
                f = t("6gnU"),
                b = t.n(f);
            var v = l.createContext({}),
                m = v.Provider,
                y = v.Consumer,
                w = function(n) {
                    function e() {
                        var e;
                        return (e = n.apply(this, arguments) || this).initialized = !1, e.mounted = !1, e
                    }
                    d()(e, n);
                    var t = e.prototype;
                    return t.componentDidMount = function() {
                        this.mounted = !0, this.initBranch()
                    }, t.componentDidUpdate = function() {
                        this.initBranch()
                    }, t.componentWillUnmount = function() {
                        this.mounted = !1
                    }, t.render = function() {
                        return l.createElement(m, {
                            value: {
                                branch: this.branchUtil
                            }
                        }, this.props.children)
                    }, t.initBranch = function() {
                        var n = this;
                        if (!this.initialized && this.props.deviceID) {
                            this.initialized = !0;
                            var e = this.props.deviceID;
                            ! function(n, e, t) {
                                ! function(n, e, t, r, i, a, o, c, s, u) {
                                    if (!n[r] || !n[r]._q) {
                                        for (; c < o.length;) i(a, o[c++]);
                                        (s = e.createElement(t)).async = !0, s.src = "https://cdn.branch.io/branch-latest.min.js", (u = e.getElementsByTagName(t)[0]).parentNode.insertBefore(s, u), n[r] = a
                                    }
                                }(window, document, "script", "branch", function(n, e) {
                                    n[e] = function() {
                                        n._q.push([e, arguments])
                                    }
                                }, {
                                    _q: [],
                                    _v: 1
                                }, "addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent".split(" "), 0), branch.init(n, e, t)
                            }(this.props.apiKey, {
                                metadata: {
                                    device_id: this.props.deviceID
                                },
                                no_journeys: !0
                            }, function() {
                                n.mounted && (n.branchUtil = new h, n.branchUtil.setBranchIdentity(e), n.forceUpdate())
                            })
                        }
                    }, e
                }(l.Component);

            function B(n) {
                return (e = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return d()(t, e), t.prototype.render = function() {
                        var e = this;
                        return l.createElement(y, null, function(t) {
                            return l.createElement(n, b()({}, e.props, {
                                branch: t.branch
                            }))
                        })
                    }, t
                }(l.Component)).displayName = "Branch(" + function(n) {
                    return n.displayName || n.name || "Component"
                }(n) + ")", e;
                var e
            }
            w.displayName = "BranchRoot";
            var g = "branch_cta",
                _ = "branch_dismiss",
                k = "branch_continue",
                D = function(n) {
                    function e() {
                        var e;
                        return (e = n.apply(this, arguments) || this).branchTimerHandles = [], e.showJourney = function(n) {
                            return function() {
                                e.props.branch && e.props.branch.showBranchJourney(n, e.props.viewData)
                            }
                        }, e.branchEventListener = function(n) {
                            var t;
                            switch (n) {
                                case "didClickJourneyCTA":
                                    t = g;
                                    break;
                                case "didClickJourneyClose":
                                    t = _;
                                    break;
                                case "didClickJourneyContinue":
                                    t = k;
                                    break;
                                case "willShowJourney":
                                    e.branchTimerHandles.forEach(function(n) {
                                        return window.clearTimeout(n)
                                    })
                            }
                            t && e.props.trackEvent(t)
                        }, e
                    }
                    d()(e, n);
                    var t = e.prototype;
                    return t.componentDidMount = function() {
                        this.initBranch()
                    }, t.componentWillUnmount = function() {
                        this.closeBranch()
                    }, t.componentDidUpdate = function(n) {
                        !n.branch && this.props.branch && this.initBranch()
                    }, t.render = function() {
                        return null
                    }, t.initBranch = function() {
                        var n = this;
                        this.props.branch && (this.props.branch.addBranchListener(this.branchEventListener), this.branchTimerHandles = [].concat(this.props.journey).map(function(e) {
                            return window.setTimeout(n.showJourney(e), n.getUpsellDelay(e))
                        }))
                    }, t.getUpsellDelay = function(n) {
                        return this.props.branch && this.props.branch.debugMode === r.NoDelay ? 0 : 1e3 * n.delaySecondsUntilUpsell
                    }, t.closeBranch = function() {
                        this.props.branch && (this.branchTimerHandles.forEach(function(n) {
                            return window.clearTimeout(n)
                        }), this.props.branch.removeBranchListener(this.branchEventListener), this.props.branch.closeBranchJourney())
                    }, e
                }(l.Component);
            D.displayName = "BranchUpsell";
            var C = B(D),
                T = function(n) {
                    function e() {
                        var e;
                        return (e = n.apply(this, arguments) || this).trackEvent = function() {
                            e.props.branch && e.props.branch.trackBranchEvent(e.props.event, {
                                device_id: e.props.deviceID,
                                session_id: e.props.sessionID
                            })
                        }, e
                    }
                    d()(e, n);
                    var t = e.prototype;
                    return t.componentDidMount = function() {
                        this.trackingTimerHandle = window.setTimeout(this.trackEvent, 1e3 * this.props.delaySecondsUntilTrack)
                    }, t.componentWillUnmount = function() {
                        this.trackingTimerHandle && window.clearTimeout(this.trackingTimerHandle)
                    }, t.render = function() {
                        return null
                    }, e
                }(l.Component);
            T.displayName = "BranchTimedTracker";
            var U = B(T);
            t.d(e, "BranchJourneyType", function() {
                return u
            }), t.d(e, "BranchEvent", function() {
                return s
            }), t.d(e, "BranchUpsell", function() {
                return C
            }), t.d(e, "BranchTimedTracker", function() {
                return U
            }), t.d(e, "BranchRoot", function() {
                return w
            }), t.d(e, "withBranch", function() {
                return B
            })
        }
    }
]);