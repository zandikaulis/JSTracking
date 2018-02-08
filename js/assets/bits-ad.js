webpackJsonp([67], {
    "4JjK": function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return i
        });
        var i;
        ! function(t) {
            t[t.Ready = 0] = "Ready", t[t.Dimensions = 1] = "Dimensions", t[t.RequestAd = 2] = "RequestAd", t[t.OnStart = 3] = "OnStart", t[t.OnCredit = 4] = "OnCredit", t[t.OnFinish = 5] = "OnFinish", t[t.OnClose = 6] = "OnClose", t[t.OnError = 7] = "OnError", t[t.Adblock = 8] = "Adblock", t[t.LimitReached = 9] = "LimitReached"
        }(i || (i = {}))
    },
    6: function(t, n, e) {
        t.exports = e("n668")
    },
    HM6l: function(t, n, e) {
        "use strict";
        n.a = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var n = 16 * Math.random() | 0;
                return ("x" === t ? n : 3 & n | 8).toString(16)
            })
        }, n.b = function() {
            return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var n = 16 * Math.random() | 0;
                return ("x" === t ? n : 3 & n | 8).toString(16)
            })
        }
    },
    Itsn: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return r
        });
        var i = "twilight.dynamic_settings_overrides",
            r = function() {
                function t(t) {
                    if (this.overrides = {}, t) {
                        this.logger = t.logger.withCategory("dynamic-settings");
                        var n = t.storage.get(i, {});
                        Object.keys(n).length > 0 && (this.overrides = n, this.logger.debug("Loaded dynamic settings overrides", {
                            overrides: this.overrides
                        }))
                    }
                }
                return t.prototype.get = function(t, n) {
                    if ("experiments" === t) return n;
                    if (void 0 !== this.overrides[t]) return this.overrides[t];
                    var e = window.__twilightSettings && window.__twilightSettings[t];
                    return void 0 !== e ? e : n
                }, t
            }()
    },
    n668: function(t, n, e) {
        "use strict";

        function i(t) {
            var n = o.__assign({
                requestID: u,
                msgSrc: "trueXAd"
            }, t);
            window.parent.postMessage(n, "*")
        }

        function r(t) {
            var n = x.get("bits_truex_partner_hash", "");
            truex.client({
                network_user_id: t,
                partner_config_hash: n
            }, function(t) {
                t.requestActivity(function(n) {
                    i({
                        type: c.a.RequestAd,
                        activityJSON: JSON.stringify(n)
                    }), n ? function(t, n) {
                        i({
                            type: c.a.Dimensions,
                            height: n.window_height,
                            width: n.window_width
                        }), n.onStart(function(t) {
                            i({
                                type: c.a.OnStart,
                                activityJSON: JSON.stringify(t)
                            })
                        }), n.onFinish(function(t) {
                            i({
                                type: c.a.OnFinish,
                                activityJSON: JSON.stringify(t)
                            })
                        }), n.onCredit(function(t) {
                            i({
                                type: c.a.OnCredit,
                                engagement: t
                            })
                        }), n.onClose(function(t) {
                            i({
                                type: c.a.OnClose,
                                activityJSON: JSON.stringify(t)
                            })
                        }), t.loadActivityIntoContainer(n, document.body)
                    }(t, n) : i({
                        type: c.a.LimitReached
                    })
                })
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("TToO"),
            s = e("HM6l"),
            a = e("Itsn"),
            c = e("4JjK"),
            u = Object(s.b)(),
            x = new a.a;
        window.addEventListener("message", function(t) {
                if (t.origin === window.location.origin) {
                    var n = t.data;
                    n && "wateb-ad-modal" === n.msgSrc && n.tuid && r(n.tuid)
                }
            }),
            function() {
                o.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return o.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!(t = x.get("bits_truex_script_url", ""))) return i({
                                    type: c.a.OnClose
                                }), [2];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, function(t) {
                                    return new Promise(function(n, e) {
                                        var i = document.createElement("script");
                                        i.async = !0, i.crossOrigin = "anonymous", i.src = t, i.type = "text/javascript", i.onload = function() {
                                            return n(i)
                                        }, i.onerror = function(t) {
                                            return e(t)
                                        }, document.head.appendChild(i)
                                    })
                                }(t)];
                            case 2:
                            case 3:
                                return n.sent(), [3, 4];
                            case 4:
                                return "undefined" == typeof truex ? (i({
                                    type: c.a.Adblock
                                }), [2]) : (i({
                                    type: c.a.Ready
                                }), [2])
                        }
                    })
                })
            }()
    }
}, [6]);
//# sourceMappingURL=bits-ad-16220e81358787f2e24d612b78bfd1d4.js.map