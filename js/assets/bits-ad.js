webpackJsonp([61], {
    18: function(t, n, e) {
        "use strict";

        function i() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var n = 16 * Math.random() | 0;
                return ("x" === t ? n : 3 & n | 8).toString(16)
            })
        }

        function r() {
            return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var n = 16 * Math.random() | 0;
                return ("x" === t ? n : 3 & n | 8).toString(16)
            })
        }
        n.a = i, n.b = r
    },
    387: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return i
        });
        var i;
        ! function(t) {
            t[t.Ready = 0] = "Ready", t[t.Dimensions = 1] = "Dimensions", t[t.RequestAd = 2] = "RequestAd", t[t.OnStart = 3] = "OnStart", t[t.OnCredit = 4] = "OnCredit", t[t.OnFinish = 5] = "OnFinish", t[t.OnClose = 6] = "OnClose", t[t.OnError = 7] = "OnError", t[t.Adblock = 8] = "Adblock", t[t.LimitReached = 9] = "LimitReached"
        }(i || (i = {}))
    },
    814: function(t, n, e) {
        t.exports = e(815)
    },
    815: function(t, n, e) {
        "use strict";

        function i(t) {
            return new Promise(function(n, e) {
                var i = document.createElement("script");
                i.async = !0, i.crossOrigin = "anonymous", i.src = t, i.type = "text/javascript", i.onload = function() {
                    return n(i)
                }, i.onerror = function(t) {
                    return e(t)
                }, document.head.appendChild(i)
            })
        }

        function r(t) {
            var n = u.__assign({
                requestID: d,
                msgSrc: "trueXAd"
            }, t);
            window.parent.postMessage(n, "*")
        }

        function o(t, n) {
            r({
                type: x.a.Dimensions,
                height: n.window_height,
                width: n.window_width
            }), n.onStart(function(t) {
                r({
                    type: x.a.OnStart,
                    activityJSON: JSON.stringify(t)
                })
            }), n.onFinish(function(t) {
                r({
                    type: x.a.OnFinish,
                    activityJSON: JSON.stringify(t)
                })
            }), n.onCredit(function(t) {
                r({
                    type: x.a.OnCredit,
                    engagement: t
                })
            }), n.onClose(function(t) {
                r({
                    type: x.a.OnClose,
                    activityJSON: JSON.stringify(t)
                })
            }), t.loadActivityIntoContainer(n, document.body)
        }

        function a(t) {
            var n = f.get("bits_truex_partner_hash", "");
            truex.client({
                network_user_id: t,
                partner_config_hash: n
            }, function(t) {
                t.requestActivity(function(n) {
                    r({
                        type: x.a.RequestAd,
                        activityJSON: JSON.stringify(n)
                    }), n ? o(t, n) : r({
                        type: x.a.LimitReached
                    })
                })
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var u = e(0),
            c = e(18),
            s = e(99),
            x = e(387),
            d = Object(c.b)(),
            f = new s.a;
        window.addEventListener("message", function(t) {
                if (t.origin === window.location.origin) {
                    var n = t.data;
                    n && "wateb-ad-modal" === n.msgSrc && n.tuid && a(n.tuid)
                }
            }),
            function() {
                u.__awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return u.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (!(t = f.get("bits_truex_script_url", ""))) return r({
                                    type: x.a.OnClose
                                }), [2];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, i(t)];
                            case 2:
                                return e.sent(), [3, 4];
                            case 3:
                                return n = e.sent(), [3, 4];
                            case 4:
                                return "undefined" == typeof truex ? (r({
                                    type: x.a.Adblock
                                }), [2]) : (r({
                                    type: x.a.Ready
                                }), [2])
                        }
                    })
                })
            }()
    },
    99: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return i
        });
        var i = function() {
            function t() {}
            return t.prototype.get = function(t, n) {
                if ("experiments" === t) return n;
                var e = window.__twilightSettings && window.__twilightSettings[t];
                return void 0 !== e ? e : n
            }, t
        }()
    }
}, [814]);
//# sourceMappingURL=bits-ad-8a4c7454ce77bc8b2ca25966778f3e16.js.map