webpackJsonp([60], {
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
    },
    n668: function(t, n, e) {
        "use strict";

        function i(t) {
            var n = o.__assign({
                requestID: c,
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
                        type: u.a.RequestAd,
                        activityJSON: JSON.stringify(n)
                    }), n ? function(t, n) {
                        i({
                            type: u.a.Dimensions,
                            height: n.window_height,
                            width: n.window_width
                        }), n.onStart(function(t) {
                            i({
                                type: u.a.OnStart,
                                activityJSON: JSON.stringify(t)
                            })
                        }), n.onFinish(function(t) {
                            i({
                                type: u.a.OnFinish,
                                activityJSON: JSON.stringify(t)
                            })
                        }), n.onCredit(function(t) {
                            i({
                                type: u.a.OnCredit,
                                engagement: t
                            })
                        }), n.onClose(function(t) {
                            i({
                                type: u.a.OnClose,
                                activityJSON: JSON.stringify(t)
                            })
                        }), t.loadActivityIntoContainer(n, document.body)
                    }(t, n) : i({
                        type: u.a.LimitReached
                    })
                })
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("TToO"),
            a = e("HM6l"),
            s = e("Itsn"),
            u = e("4JjK"),
            c = Object(a.b)(),
            x = new s.a;
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
                                    type: u.a.OnClose
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
                                    type: u.a.Adblock
                                }), [2]) : (i({
                                    type: u.a.Ready
                                }), [2])
                        }
                    })
                })
            }()
    }
}, [6]);
//# sourceMappingURL=bits-ad-a6b8b2c1dfa28eb8856605dea11a3181.js.map